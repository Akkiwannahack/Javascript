# Experiment / Case Study No.: 2

**1. Experiment Title:**
Design a responsive Product Billing Calculator user interface using HTML and CSS.

**2. Software/Tools Required:**
* Visual Studio Code (or any text editor)
* Web Browser (Chrome, Firefox, Edge, etc.)
* Git & GitHub (for version control and hosting)

**3. Experiment Program Code:**

**`product.html`**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product Billing Calculator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        .calculator-card {
            border: 1px solid #ccc;
            padding: 20px;
            max-width: 400px;
        }
        .form-group {
            margin-bottom: 10px;
        }
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        input[type="text"] {
            width: 100%;
            padding: 8px;
            box-sizing: border-box;
            margin-bottom: 10px;
        }
        button {
            padding: 8px 15px;
            cursor: pointer;
        }
        .result {
            margin-top: 20px;
            border-top: 2px dashed #000;
            padding-top: 10px;
            display: none;
        }
        .result.show {
            display: block;
        }
        .receipt-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 5px;
        }
        .bold {
            font-weight: bold;
        }
        h2, h3 {
            margin-top: 0;
        }
        hr {
            border: 0;
            border-top: 1px solid #ccc;
        }
    </style>
</head>
<body>
    <div class="calculator-card">
        <h2>Billing Calculator</h2>
        <form id="priceForm">
            <div class="form-group">
                <label for="customerName">Customer Name:</label>
                <input type="text" id="customerName" required>
            </div>
            <div id="cartPreview" style="margin-bottom: 10px; font-size: 14px;"></div>
            <button type="submit">Calculate Bill</button>
        </form>

        <div class="result" id="resultCard">
            <h3>Invoice</h3>
            <div class="receipt-row">
                <span>Order ID:</span>
                <span id="displayOrderId" class="bold"></span>
            </div>
            <div class="receipt-row">
                <span>Date:</span>
                <span id="displayDate" class="bold"></span>
            </div>
            <div class="receipt-row">
                <span>Customer:</span>
                <span id="displayCustomerName" class="bold"></span>
            </div>
            <hr>
            <div id="invoiceItems" style="margin-bottom: 10px;"></div>
            <hr>
            <div class="receipt-row">
                <span>Subtotal:</span>
                <span id="displaySubtotal"></span>
            </div>
            <div class="receipt-row">
                <span>GST (18%):</span>
                <span id="displayGST"></span>
            </div>
            <hr>
            <div class="receipt-row bold">
                <span>Total Price:</span>
                <span id="displayTotalPrice"></span>
            </div>
        </div>
    </div>
    <script src="sc.js"></script>
</body>
</html>
```

**4. Output:**
*(Attach screenshot/output here. PRN: 24070521003, Name: Akshat Digalwar. File Path with your name is mandatory in the screenshot)*
> **[Placeholder for User to Insert Screenshot of the Billing Calculator UI]**

**5. Case Study Title:**
Implementation of an Invoice Generator to calculate GST and Total Price, interacting with browser LocalStorage using JavaScript.

**6. Case Study Program Code:**

**`sc.js`**
```javascript
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
```

**7. Output:**
<img width="960" height="600" alt="{1C2FE634-1FFC-4C8B-A9E8-8BECC16F4877}" src="https://github.com/user-attachments/assets/006f26e7-22fa-400a-8bfa-a18160577a33" />
<img width="960" height="600" alt="{930EB093-F975-4568-941F-9EC31CB33DB6}" src="https://github.com/user-attachments/assets/21759ea8-f963-4243-bbaa-3033c6e2f627" />
<img width="960" height="600" alt="{E7F5D081-A987-4763-AEE7-0E9E88AEC06B}" src="https://github.com/user-attachments/assets/c5a74538-ff55-4360-9ec8-9661db6dacfc" />


>

**8. Result/Conclusion:**
Successfully implemented a Product Billing Calculator with a dynamic Invoice Generator. The web app uses HTML/CSS for a responsive interface and JavaScript to retrieve cart items from LocalStorage, compute subtotal, apply an 18% GST, and manipulate the DOM to display the formatted receipt to the user.
