document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('priceForm');
    const resultCard = document.getElementById('resultCard');
    const displayCustomerName = document.getElementById('displayCustomerName');
    const displayProductName = document.getElementById('displayProductName');
    const displaySubtotal = document.getElementById('displaySubtotal');
    const displayGST = document.getElementById('displayGST');
    const displayTotalPrice = document.getElementById('displayTotalPrice');

    form.addEventListener('submit', function(e) {
        // Prevent page reload on submit
        e.preventDefault();

        // Get values using the correct IDs from the HTML
        let customerName = document.getElementById("customerName").value;
        let product = document.getElementById("productName").value;
        let price = Number(document.getElementById("unitPrice").value);
        let quantity = Number(document.getElementById("quantity").value);

        const GST = 0.18;

        let subtotal = price * quantity;
        let gstAmount = subtotal * GST;
        let total = subtotal + gstAmount;

        // Destructuring (creating the bill object as requested)
        const bill = {
            customerName,
            product,
            subtotal,
            gstAmount,
            total
        };

        // Helper function to format INR currency
        const formatINR = (amount) => {
            return new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'INR'
            }).format(amount);
        };

        // Update the UI
        displayCustomerName.textContent = bill.customerName;
        displayProductName.textContent = bill.product + ` (x${quantity})`;
        displaySubtotal.textContent = formatINR(bill.subtotal);
        displayGST.textContent = formatINR(bill.gstAmount);
        displayTotalPrice.textContent = formatINR(bill.total);

        // Reset and trigger show animation for the result card
        resultCard.classList.remove('show');
        void resultCard.offsetWidth; // Trigger reflow to restart animation
        resultCard.classList.add('show');
        
        console.log("Bill generated:", bill);
    });
});