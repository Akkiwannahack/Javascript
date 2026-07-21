document.addEventListener('DOMContentLoaded', () => {
    // Check if cart has items
    const cart = JSON.parse(localStorage.getItem('lumi_cart')) || [];
    const preview = document.getElementById('cartPreview');
    
    if (cart.length === 0) {
        preview.innerHTML = '<span style="color:#ef4444;">Cart is empty. Please add items before checking out.</span>';
        document.querySelector('button[type="submit"]').disabled = true;
    } else {
        const itemsList = cart.map(item => `${item.qty}x ${item.productName} - ₹${item.price * item.qty}`).join('<br>');
        preview.innerHTML = `<strong>Items in Cart:</strong><br>${itemsList}`;
    }

    const form = document.getElementById('priceForm');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const customerName = document.getElementById('customerName').value;
        const cart = JSON.parse(localStorage.getItem('lumi_cart')) || [];

        if (cart.length === 0) return;

        // Generate Order ID and Date
        const orderId = 'ORD-' + Math.floor(Math.random() * 1000000);
        const date = new Date().toLocaleDateString();

        // Calculate Totals
        let subtotal = 0;
        cart.forEach(item => subtotal += item.price * item.qty);
        
        const gst = subtotal * 0.18;
        const total = subtotal + gst;

        // Display Invoice Details
        document.getElementById('displayOrderId').innerText = orderId;
        document.getElementById('displayDate').innerText = date;
        document.getElementById('displayCustomerName').innerText = customerName;

        // Populate Items
        const invoiceItemsContainer = document.getElementById('invoiceItems');
        invoiceItemsContainer.innerHTML = '';
        
        cart.forEach(item => {
            const row = document.createElement('div');
            row.className = 'receipt-row';
            row.innerHTML = `
                <span>${item.qty}x ${item.productName}</span>
                <span>₹${(item.price * item.qty).toFixed(2)}</span>
            `;
            invoiceItemsContainer.appendChild(row);
        });

        document.getElementById('displaySubtotal').innerText = '₹' + subtotal.toFixed(2);
        document.getElementById('displayGST').innerText = '₹' + gst.toFixed(2);
        document.getElementById('displayTotalPrice').innerText = '₹' + total.toFixed(2);

        document.getElementById('resultCard').classList.add('show');
        
        // Optionally clear cart after successful checkout invoice generation
        localStorage.removeItem('lumi_cart');
    });
});