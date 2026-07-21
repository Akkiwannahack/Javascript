// Game Data
const gamesData = [
    {
        id: 'genshin',
        name: 'Genshin Impact',
        products: [
            {
                id: 'gi_crystal',
                name: 'Genesis Crystal',
                isTiered: true,
                tiers: [
                    { price: 79, label: '60 Genesis Crystals - ₹79' },
                    { price: 399, label: '300+30 Genesis Crystals - ₹399' },
                    { price: 799, label: '980+110 Genesis Crystals - ₹799' },
                    { price: 1599, label: '1980+260 Genesis Crystals - ₹1599' },
                    { price: 3999, label: '3280+600 Genesis Crystals - ₹3999' },
                    { price: 7999, label: '6480+1600 Genesis Crystals - ₹7999' }
                ]
            },
            {
                id: 'gi_welkin',
                name: 'Blessing of the Welkin Moon',
                isTiered: false,
                price: 399
            }
        ]
    },
    {
        id: 'hsr',
        name: 'Honkai Star Rail',
        products: [
            {
                id: 'hsr_shards',
                name: 'Oneiric Shards',
                isTiered: true,
                tiers: [
                    { price: 79, label: '60 Oneiric Shards - ₹79' },
                    { price: 399, label: '300+30 Oneiric Shards - ₹399' },
                    { price: 799, label: '980+110 Oneiric Shards - ₹799' },
                    { price: 1599, label: '1980+260 Oneiric Shards - ₹1599' },
                    { price: 3999, label: '3280+600 Oneiric Shards - ₹3999' },
                    { price: 7999, label: '6480+1600 Oneiric Shards - ₹7999' }
                ]
            },
            {
                id: 'hsr_supply',
                name: 'Express Supply Pass',
                isTiered: false,
                price: 399
            }
        ]
    },
    {
        id: 'ww',
        name: 'Wuthering Waves',
        products: [
            {
                id: 'ww_lunites',
                name: 'Lunites',
                isTiered: true,
                tiers: [
                    { price: 79, label: '60 Lunites - ₹79' },
                    { price: 399, label: '300+30 Lunites - ₹399' },
                    { price: 799, label: '980+110 Lunites - ₹799' },
                    { price: 1599, label: '1980+260 Lunites - ₹1599' },
                    { price: 3999, label: '3280+600 Lunites - ₹3999' },
                    { price: 7999, label: '6480+1600 Lunites - ₹7999' }
                ]
            },
            {
                id: 'ww_monthly',
                name: 'Monthly Pass',
                isTiered: false,
                price: 399
            }
        ]
    },
    {
        id: 'zzz',
        name: 'Zenless Zone Zero',
        products: [
            {
                id: 'zzz_monochromes',
                name: 'Monochromes',
                isTiered: true,
                tiers: [
                    { price: 79, label: '60 Monochromes - ₹79' },
                    { price: 399, label: '300+30 Monochromes - ₹399' },
                    { price: 799, label: '980+110 Monochromes - ₹799' },
                    { price: 1599, label: '1980+260 Monochromes - ₹1599' },
                    { price: 3999, label: '3280+600 Monochromes - ₹3999' },
                    { price: 7999, label: '6480+1600 Monochromes - ₹7999' }
                ]
            },
            {
                id: 'zzz_membership',
                name: 'Inter-Knot Membership',
                isTiered: false,
                price: 399
            }
        ]
    },
    {
        id: 'hi3',
        name: 'Honkai Impact 3rd',
        products: [
            {
                id: 'hi3_bchips',
                name: 'B-Chips',
                isTiered: true,
                tiers: [
                    { price: 79, label: '65 B-Chips - ₹79' },
                    { price: 399, label: '330 B-Chips - ₹399' },
                    { price: 799, label: '710 B-Chips - ₹799' },
                    { price: 1599, label: '1430 B-Chips - ₹1599' },
                    { price: 3999, label: '3860 B-Chips - ₹3999' },
                    { price: 7999, label: '8088 B-Chips - ₹7999' }
                ]
            },
            {
                id: 'hi3_monthly',
                name: 'Monthly Card',
                isTiered: false,
                price: 399
            }
        ]
    }
];

// Initialize DOM
document.addEventListener('DOMContentLoaded', () => {
    renderGames(gamesData);
    updateCartBadge();

    // Search filter
    document.getElementById('searchInput').addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = gamesData.filter(game => game.name.toLowerCase().includes(term));
        renderGames(filtered);
    });
});

// Render Games
function renderGames(games) {
    const container = document.getElementById('gamesContainer');
    container.innerHTML = '';

    if(games.length === 0) {
        container.innerHTML = '<p style="text-align:center; color:var(--text-muted);">No games found.</p>';
        return;
    }

    games.forEach(game => {
        const gameSection = document.createElement('div');
        gameSection.className = 'game-section';

        const header = document.createElement('div');
        header.className = 'game-header';
        header.innerHTML = `<h2>${game.name}</h2>`;
        gameSection.appendChild(header);

        const productsGrid = document.createElement('div');
        productsGrid.className = 'products-grid';

        game.products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            
            let priceSectionHTML = '';
            let defaultPrice = product.price || 0;
            let defaultTierLabel = product.name;

            if (product.isTiered) {
                defaultPrice = product.tiers[0].price;
                defaultTierLabel = product.tiers[0].label;
                let options = product.tiers.map((t, idx) => `<option value="${idx}">${t.label}</option>`).join('');
                priceSectionHTML = `
                    <select class="tier-select" id="select-${product.id}" onchange="updateTierPrice('${product.id}')">
                        ${options}
                    </select>
                    <div class="product-price" id="price-${product.id}">₹${defaultPrice}</div>
                `;
            } else {
                priceSectionHTML = `
                    <div style="height: 44px; margin-bottom: 1rem;"></div> <!-- Spacer to align with select -->
                    <div class="product-price">₹${product.price}</div>
                `;
            }

            card.innerHTML = `
                <div>
                    <img src="images/placeholder.png" alt="${product.name}" class="product-image" onerror="this.style.display='none'">
                    <div class="product-title">${product.name}</div>
                    ${priceSectionHTML}
                </div>
                <div>
                    <div class="qty-control">
                        <button class="qty-btn" onclick="changeQty('${product.id}', -1)">-</button>
                        <span class="qty-display" id="qty-${product.id}">1</span>
                        <button class="qty-btn" onclick="changeQty('${product.id}', 1)">+</button>
                    </div>
                    <button class="add-to-cart" onclick="addToCart('${game.id}', '${product.id}')">Add to Cart</button>
                </div>
            `;
            productsGrid.appendChild(card);
        });

        gameSection.appendChild(productsGrid);
        container.appendChild(gameSection);
    });
}

// Global Quantity State for Home Page
const qtyState = {};

function changeQty(productId, delta) {
    if(!qtyState[productId]) qtyState[productId] = 1;
    qtyState[productId] += delta;
    if(qtyState[productId] < 1) qtyState[productId] = 1;
    document.getElementById(`qty-${productId}`).innerText = qtyState[productId];
}

function updateTierPrice(productId) {
    // Find the product in data
    let foundProduct = null;
    gamesData.forEach(g => {
        const p = g.products.find(p => p.id === productId);
        if(p) foundProduct = p;
    });

    if(foundProduct && foundProduct.isTiered) {
        const select = document.getElementById(`select-${productId}`);
        const idx = parseInt(select.value);
        const price = foundProduct.tiers[idx].price;
        document.getElementById(`price-${productId}`).innerText = `₹${price}`;
    }
}

// Cart Logic
function addToCart(gameId, productId) {
    const game = gamesData.find(g => g.id === gameId);
    const product = game.products.find(p => p.id === productId);
    
    let price = product.price;
    let name = product.name;
    let specificId = product.id;

    if (product.isTiered) {
        const select = document.getElementById(`select-${productId}`);
        const idx = parseInt(select.value);
        const tier = product.tiers[idx];
        price = tier.price;
        name = `${product.name} (${tier.label.split(' - ')[0]})`;
        specificId = `${product.id}_tier_${idx}`;
    }

    const qty = qtyState[productId] || 1;
    
    let cart = JSON.parse(localStorage.getItem('lumi_cart')) || [];
    
    const existingIndex = cart.findIndex(item => item.id === specificId);
    if(existingIndex >= 0) {
        cart[existingIndex].qty += qty;
    } else {
        cart.push({
            id: specificId,
            gameName: game.name,
            productName: name,
            price: price,
            qty: qty
        });
    }

    localStorage.setItem('lumi_cart', JSON.stringify(cart));
    
    // Reset qty display
    qtyState[productId] = 1;
    document.getElementById(`qty-${productId}`).innerText = 1;

    updateCartBadge();
    showToast(`Added ${qty}x ${name} to cart!`);
}

function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem('lumi_cart')) || [];
    const count = cart.reduce((acc, item) => acc + item.qty, 0);
    const badge = document.getElementById('cartBadge');
    if(badge) {
        badge.innerText = count;
    }
}

// Toast Notification
function showToast(message) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;
    container.appendChild(toast);

    // Trigger animation
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);

    // Remove after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
