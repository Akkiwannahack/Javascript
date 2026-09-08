# Experiment / Case Study No.: 5

**1. Experiment Title:**


**2. Software/Tools Required:**
* Visual Studio Code (or any text editor)
* Web Browser (Chrome, Firefox, Edge, etc.)
* Git & GitHub (for version control and hosting)

**3. Experiment Program Code:**

**`index.html`**
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8"></meta>
        <title>Shopping Cart Calculator</title>
        <style>
            /* CSS omitted for brevity */
        </style>
    </head>
    <body>
        <div class="container">
            <h2>Shopping Cart Calculator</h2>
            <!-- HTML omitted for brevity -->
            <button onclick="addProduct()">Add Product</button>
            <table id="cartTable"></table>
            <div class="result" id="result"></div>
        </div>
        <script>
            // Initialize cart
            let cart = [];

            function addProduct(){
                let name = document.getElementById("name").value;
                let price = parseFloat(document.getElementById("price").value);
                let qty = parseInt(document.getElementById("qty").value);

                if(name=="" || isNaN(price) || isNaN(qty)) { return; } 

                cart.push({ id:cart.length+1, name:name, price:price, quantity:qty });
                displayCart();
            } 

            function displayCart() {
                // Table generation and discount calculation
            } 
        </script>
    </body>
</html>
```

**4. Output:**
*(Attach screenshot/output here. PRN: 24070521003, Name: Akshat Digalwar. File Path with your name is mandatory in the screenshot)*
> **[Placeholder for User to Insert Screenshot]**

**5. Case Study Title:**


**6. Case Study Program Code:**

**`min_max.html`**
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Pharma Store Inventory Analyzer</title>
    </head>
    <body>
        <input type="text" id="numInput" placeholder="e.g. Paracetamol: 50, Aspirin: 30">
        <button onclick="findMinMax()">Find Cheapest & Most Expensive</button>
        <div id="output"></div>

        <script>
            function findMinMax() {
                let inputStr = document.getElementById("numInput").value;
                let itemsStrArray = inputStr.split(',');
                let pharmaObj = {};
                for(let i = 0; i < itemsStrArray.length; i++) {
                    let parts = itemsStrArray[i].split(':');
                    if (parts.length === 2) {
                        pharmaObj[parts[0].trim()] = parseFloat(parts[1].trim());
                    }
                }
                
                let keys = Object.keys(pharmaObj);
                let maxMed = keys[0];
                let minMed = keys[0];

                for (let i = 1; i < keys.length; i++) {
                    if (pharmaObj[keys[i]] > pharmaObj[maxMed]) maxMed = keys[i];
                    if (pharmaObj[keys[i]] < pharmaObj[minMed]) minMed = keys[i];
                }
            }
        </script>
    </body>
</html>
```

**7. Output:**
*(Attach screenshot/output here. PRN: 24070521003, Name: Akshat Digalwar. File Path with your name is mandatory in the screenshot)*
> **[Placeholder for User to Insert Screenshot]**

**8. Result/Conclusion:**
Successfully demonstrated JavaScript arrays, objects, and iterative methods. The Shopping Cart application effectively uses arrays to manage a dynamic list of objects, calculating totals and conditional discounts. The Pharma Store analyzer showcases object iteration and string splitting to determine minimum and maximum values from user-provided datasets, confirming proficiency in JavaScript data structures.
