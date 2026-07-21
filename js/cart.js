document.addEventListener('DOMContentLoaded', () => {
    renderCart();
});

function getCart() {
    return JSON.parse(localStorage.getItem('lumi_cart')) || [];
}

function saveCart(cart) {
    localStorage.setItem('lumi_cart', JSON.stringify(cart));
}

function updateBadge() {
    const cart = getCart();
    const count = cart.reduce((acc, item) => acc + item.qty, 0);
    const badge = document.getElementById('cartBadge');
    if (badge) {
        badge.innerText = count;
    }
}

function renderCart() {
    updateBadge();
    const cart = getCart();
    const container = document.getElementById('cartItemsContainer');
    const summary = document.getElementById('cartSummary');
    const totalEl = document.getElementById('cartTotal');

    container.innerHTML = '';

    if (cart.length === 0) {
        container.innerHTML = '<div class="empty-cart">Your cart is empty. <br><br><a href="index.html" style="color:var(--primary-hover);">Browse Games</a></div>';
        summary.style.display = 'none';
        return;
    }

    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;

        const el = document.createElement('div');
        el.className = 'cart-item';
        el.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-details">
                    <h4>${item.productName}</h4>
                    <p>${item.gameName}</p>
                </div>
            </div>
            <div class="cart-item-actions">
                <div class="product-price" style="margin:0;">₹${item.price}</div>
                <div class="qty-control" style="margin:0;">
                    <button class="qty-btn" onclick="updateQty('${item.id}', -1)">-</button>
                    <span class="qty-display">${item.qty}</span>
                    <button class="qty-btn" onclick="updateQty('${item.id}', 1)">+</button>
                </div>
                <div style="font-weight:bold; width: 80px; text-align:right;">₹${itemTotal}</div>
                <button class="remove-btn" onclick="removeItem('${item.id}')">Remove</button>
            </div>
        `;
        container.appendChild(el);
    });

    totalEl.innerText = total;
    summary.style.display = 'block';
}

function updateQty(id, delta) {
    let cart = getCart();
    const index = cart.findIndex(item => item.id === id);
    if (index >= 0) {
        cart[index].qty += delta;
        if (cart[index].qty <= 0) {
            cart.splice(index, 1);
        }
        saveCart(cart);
        renderCart();
    }
}

function removeItem(id) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== id);
    saveCart(cart);
    renderCart();
}

function checkout() {
    const cart = getCart();
    if(cart.length > 0) {
        window.location.href = 'w2/product.html';
    }
}
