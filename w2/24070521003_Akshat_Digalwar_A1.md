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
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-gradient: #0F172A;
            --card-bg: rgba(30, 41, 59, 0.95);
            --primary-color: #2563EB;
            --primary-hover: #60A5FA;
            --text-dark: #F8FAFC;
            --text-light: #94A3B8;
            --border-color: rgba(255, 255, 255, 0.1);
            --shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        }

        body {
            font-family: 'Outfit', sans-serif;
            background: var(--bg-gradient);
            color: var(--text-dark);
            margin: 0;
            padding: 40px 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }

        .calculator-card {
            background: var(--card-bg);
            padding: 40px;
            border-radius: 24px;
            box-shadow: var(--shadow);
            width: 100%;
            max-width: 420px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.5);
            position: relative;
        }

        h2 {
            text-align: center;
            margin-top: 0;
            margin-bottom: 30px;
            color: var(--primary-color);
            font-weight: 700;
            font-size: 28px;
            letter-spacing: -0.5px;
        }

        .form-group {
            margin-bottom: 20px;
        }

        label {
            display: block;
            margin-bottom: 8px;
            font-size: 14px;
            font-weight: 600;
            color: var(--text-dark);
        }

        input {
            width: 100%;
            padding: 14px 16px;
            box-sizing: border-box;
            border: 2px solid var(--border-color);
            border-radius: 12px;
            font-family: 'Outfit', sans-serif;
            font-size: 15px;
            background: rgba(15, 23, 42, 0.5);
            color: var(--text-dark);
            transition: all 0.3s ease;
        }

        input:focus {
            outline: none;
            border-color: var(--primary-color);
            box-shadow: 0 0 0 4px rgba(158, 157, 36, 0.15);
        }

        button {
            width: 100%;
            padding: 16px;
            background-color: var(--primary-color);
            color: white;
            border: none;
            border-radius: 12px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-top: 10px;
            font-family: 'Outfit', sans-serif;
            box-shadow: 0 4px 15px rgba(158, 157, 36, 0.3);
        }

        button:hover {
            background-color: var(--primary-hover);
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(158, 157, 36, 0.4);
        }

        button:active {
            transform: translateY(1px);
        }

        .result {
            margin-top: 30px;
            padding: 25px;
            background-color: rgba(15, 23, 42, 0.6);
            border-radius: 16px;
            display: none;
            border: 1px dashed var(--primary-color);
            animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            opacity: 0;
            transform: translateY(20px);
        }

        .result.show {
            display: block;
        }

        .receipt-title {
            text-align: center;
            font-weight: 700;
            color: var(--primary-color);
            margin-bottom: 15px;
            font-size: 18px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .receipt-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
            font-size: 15px;
            color: var(--text-dark);
        }

        .receipt-row.bold {
            font-weight: 600;
        }

        .divider {
            height: 1px;
            background-color: rgba(158, 157, 36, 0.2);
            margin: 15px 0;
        }

        .price {
            font-size: 24px;
            font-weight: 700;
            color: var(--primary-hover);
        }

        @keyframes slideUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .footer-credit {
            text-align: center;
            margin-top: 30px;
            font-size: 13px;
            color: var(--text-light);
            font-weight: 500;
            letter-spacing: 0.5px;
        }
    </style>
</head>

<body>

    <div class="calculator-card">
        <h2>Billing Calculator</h2>

        <form id="priceForm">
            <div class="form-group">
                <label for="customerName">Customer Name</label>
                <input type="text" id="customerName" placeholder="e.g. Jane Doe" required>
            </div>

            <div id="cartPreview" style="margin-bottom: 20px; color: var(--text-light); font-size: 14px;">
                <!-- Cart items summary will appear here -->
            </div>

            <button type="submit">Calculate Bill</button>
        </form>

        <div class="result" id="resultCard">
            <div class="receipt-title">Invoice</div>

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
            
            <div class="divider"></div>
            
            <div id="invoiceItems" style="margin-bottom: 15px;">
                <!-- Dynamically generated items -->
            </div>

            <div class="divider"></div>

            <div class="receipt-row">
                <span>Subtotal:</span>
                <span id="displaySubtotal"></span>
            </div>
            <div class="receipt-row">
                <span>GST (18%):</span>
                <span id="displayGST"></span>
            </div>

            <div class="divider"></div>

            <div class="receipt-row">
                <span class="bold">Total Price:</span>
                <span class="price" id="displayTotalPrice"></span>
            </div>
        </div>
        
        <div class="footer-credit">Made by Akshat Digalwar</div>
    </div>

    <!-- Link to the JavaScript file -->
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
