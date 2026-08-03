// Array of Product Objects
const products = [
    { id: 1, name: "Paracetamol 500mg", price: 50 },
    { id: 2, name: "Amoxicillin 250mg", price: 120 },
    { id: 3, name: "Vitamin C Supplement", price: 300 },
    { id: 4, name: "Digital BP Monitor", price: 2500 },
    { id: 5, name: "Advanced Oxygen Concentrator", price: 35000 },
    { id: 7, name: "Surgical Masks (Box of 50)", price: 150 },
    { id: 8, name: "ICU Ventilator Machine", price: 150000 },
    { id: 9, name: "Contraceptives (Free Promo)", price: 0 }
];

// Shopping cart using product IDs
let cart = []; // Format: { productId: 1, qty: 2 }

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderExpensiveItems();
    renderCart();
});

// Render all products using forEach traversal
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';

    // Traversing the array with forEach
    products.forEach(product => {
        if (product.id === 9) return; // Hide promo item from main catalog

        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div>
                <div class="product-title">${product.name}</div>
                <div class="product-price">₹${product.price.toLocaleString('en-IN')}</div>
            </div>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsGrid.appendChild(card);
    });
}

// Filter out expensive items (> 20000)
function renderExpensiveItems() {
    const expensiveList = document.getElementById('expensiveItemsList');
    expensiveList.innerHTML = '';

    // Using filter array method
    const premiumItems = products.filter(product => product.price > 20000);

    premiumItems.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${item.name}</span> <span>₹${item.price.toLocaleString('en-IN')}</span>`;
        expensiveList.appendChild(li);
    });
}

// Add item to cart
function addToCart(productId) {
    const existingItemIndex = cart.findIndex(item => item.productId === productId);
    
    if (existingItemIndex > -1) {
        cart[existingItemIndex].qty += 1;
    } else {
        cart.push({ productId: productId, qty: 1 });
    }
    
    renderCart();
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.productId !== productId);
    renderCart();
}

// Update quantity
function updateQuantity(productId, delta) {
    const itemIndex = cart.findIndex(item => item.productId === productId);
    if (itemIndex > -1) {
        cart[itemIndex].qty += delta;
        if (cart[itemIndex].qty <= 0) {
            cart.splice(itemIndex, 1);
        }
    }
    renderCart();
}

// Calculate totals and render cart using forEach
function renderCart() {
    // Promo logic: 10 free contraceptives per ICU Ventilator
    const ventilatorItem = cart.find(item => item.productId === 8);
    if (ventilatorItem) {
        const promoQty = ventilatorItem.qty * 10;
        const promoIndex = cart.findIndex(item => item.productId === 9);
        if (promoIndex > -1) {
            cart[promoIndex].qty = promoQty;
        } else {
            cart.push({ productId: 9, qty: promoQty });
        }
    } else {
        cart = cart.filter(item => item.productId !== 9);
    }

    const container = document.getElementById('cartItemsContainer');
    let subtotal = 0;

    if (cart.length === 0) {
        container.innerHTML = '<p style="color: #666; text-align: center;">Cart is empty</p>';
    } else {
        container.innerHTML = '';
        
        // Traversing cart with forEach
        cart.forEach(cartItem => {
            // Find corresponding product object using its ID
            const product = products.find(p => p.id === cartItem.productId);
            if (product) {
                const itemTotal = product.price * cartItem.qty;
                subtotal += itemTotal;

                const itemElement = document.createElement('div');
                itemElement.className = 'cart-item';
                itemElement.innerHTML = `
                    <div class="cart-item-info">
                        <h4>${product.name}</h4>
                        <span style="color: #666; font-size: 12px;">₹${product.price} x ${cartItem.qty}</span>
                    </div>
                    <div class="cart-item-actions">
                        <button onclick="updateQuantity(${product.id}, -1)">-</button>
                        <span>${cartItem.qty}</span>
                        <button onclick="updateQuantity(${product.id}, 1)">+</button>
                        <button class="btn-remove" onclick="removeFromCart(${product.id})">x</button>
                    </div>
                `;
                container.appendChild(itemElement);
            }
        });
    }

    applyDiscountAndRenderTotals(subtotal);
}

// If-Else logic for Discounts
function applyDiscountAndRenderTotals(subtotal) {
    let discountPercent = 0;
    let discountMsg = "";

    // Discount Logic using if-else structure
    if (subtotal > 100000) {
        discountPercent = 0.20; // 20% discount on massive orders
        discountMsg = "20% Big Saver Discount Applied!";
    } else if (subtotal > 50000) {
        discountPercent = 0.15; // 15% discount
        discountMsg = "15% Premium Discount Applied!";
    } else if (subtotal > 10000) {
        discountPercent = 0.10; // 10% discount
        discountMsg = "10% Discount Applied!";
    } else {
        discountPercent = 0;
        discountMsg = "Add more for discounts!";
    }

    const discountAmount = subtotal * discountPercent;
    const taxableValue = subtotal - discountAmount;
    const gstAmount = taxableValue * 0.18; // 18% GST
    const total = taxableValue + gstAmount;

    // Update DOM
    document.getElementById('subtotalAmount').innerText = `₹${subtotal.toLocaleString('en-IN', {minimumFractionDigits: 2})}`;
    document.getElementById('discountAmount').innerText = `-₹${discountAmount.toLocaleString('en-IN', {minimumFractionDigits: 2})}`;
    document.getElementById('gstAmount').innerText = `₹${gstAmount.toLocaleString('en-IN', {minimumFractionDigits: 2})}`;
    document.getElementById('totalAmount').innerText = `₹${total.toLocaleString('en-IN', {minimumFractionDigits: 2})}`;
    document.getElementById('discountMessage').innerText = discountAmount > 0 ? discountMsg : "";
    
    const printBtn = document.getElementById('printBtn');
    if (printBtn) {
        printBtn.style.display = cart.length === 0 ? 'none' : 'block';
    }
}
