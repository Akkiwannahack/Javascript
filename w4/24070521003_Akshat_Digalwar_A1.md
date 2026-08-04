# Experiment / Case Study No.: 4

**1. Experiment Title:**
Design and implement a Palindrome Checker web application using HTML, embedded CSS, and JavaScript.

**2. Software/Tools Required:**
* Visual Studio Code (or any text editor)
* Web Browser (Chrome, Firefox, Edge, etc.)
* Git & GitHub (for version control and hosting)

**3. Experiment Program Code:**

**`palindrome.html`**
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Palindrome Checker</title>
    <style>
        :root {
            --bg-color: #fdfbf7;
            --card-bg: #f7f1e3;
            --text-main: #4a4036;
            --text-light: #7a6a58;
            --button-bg: #c0a080;
            --button-hover: #a88868;
            --border-color: #e6dac3;
            --error-color: #d9534f;
            --success-color: #5cb85c;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-main);
            font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            box-sizing: border-box;
        }

        .container {
            background-color: var(--card-bg);
            padding: 40px 30px;
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(74, 64, 54, 0.08);
            text-align: center;
            width: 100%;
            max-width: 380px;
            border: 1px solid var(--border-color);
        }

        h2 {
            margin-top: 0;
            margin-bottom: 25px;
            font-size: 24px;
            font-weight: 600;
            color: var(--text-main);
            letter-spacing: -0.5px;
        }

        .input-group {
            margin-bottom: 20px;
            text-align: left;
        }

        label {
            display: block;
            margin-bottom: 8px;
            font-size: 14px;
            font-weight: 500;
            color: var(--text-light);
        }

        input {
            width: 100%;
            padding: 12px 16px;
            font-size: 16px;
            border: 2px solid var(--border-color);
            border-radius: 8px;
            background-color: #ffffff;
            color: var(--text-main);
            outline: none;
            box-sizing: border-box;
            transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        input:focus {
            border-color: var(--button-bg);
            box-shadow: 0 0 0 3px rgba(192, 160, 128, 0.2);
        }

        input::placeholder {
            color: #b0a59a;
        }

        button {
            width: 100%;
            padding: 14px;
            font-size: 16px;
            font-weight: 600;
            color: white;
            background-color: var(--button-bg);
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.2s ease, transform 0.1s ease;
        }

        button:hover {
            background-color: var(--button-hover);
        }

        button:active {
            transform: translateY(2px);
        }

        #result-container {
            margin-top: 25px;
            min-height: 24px;
        }

        #result {
            margin: 0;
            font-size: 16px;
            font-weight: 500;
        }

        .error {
            color: var(--error-color);
        }

        .success {
            color: var(--success-color);
        }
    </style>
</head>

<body>
    <div class="container">
        <h2>Palindrome Checker</h2>

        <div class="input-group">
            <label for="inputText">Enter your text below</label>
            <input type="text" id="inputText">
        </div>
        
        <button onclick="checkPalindrome()">Check Palindrome</button>

        <div id="result-container">
            <p id="result"></p>
        </div>
    </div>

    <script src="palindrome.js"></script>
</body>

</html>
```

**`palindrome.js`**
```javascript
function checkPalindrome() {
    const resultElement = document.getElementById('result');
    resultElement.textContent = ''; // Clear previous result
    resultElement.className = '';

    try {
        const inputElement = document.getElementById('inputText');
        
        if (!inputElement) {
            throw new Error("Input element not found in the DOM.");
        }

        const text = inputElement.value;

        // Error Checking: Verify if the input is empty or just whitespace
        if (typeof text !== 'string' || text.trim() === '') {
            throw new Error("Input cannot be empty. Please enter a valid string.");
        }

        // Clean the string: remove non-alphanumeric characters and convert to lowercase
        const cleanedText = text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

        // Error Checking: If the string is empty after cleaning
        if (cleanedText === '') {
             throw new Error("Input must contain alphanumeric characters to evaluate.");
        }

        // Reverse the string
        const reversedText = cleanedText.split('').reverse().join('');

        // Check if palindrome
        if (cleanedText === reversedText) {
            resultElement.textContent = `"${text}" is a palindrome!`;
            resultElement.className = "success";
        } else {
            resultElement.textContent = `"${text}" is not a palindrome.`;
            resultElement.className = "error";
        }
    } catch (error) {
        // Display the error to the user as a heading
        resultElement.innerHTML = `<h3 style="color: red; margin: 0;">Error: ${error.message}</h3>`;
        resultElement.className = 'error';
        console.error("Palindrome check error:", error);
    }
}
```

**4. Output:**
*(Attach screenshot/output here. PRN: 24070521003, Name: Akshat Digalwar. File Path with your name is mandatory in the screenshot)*
> **[Placeholder for User to Insert Screenshot of Palindrome Checker working]**

**5. Case Study Title:**
Implementation of an Indian Vehicle Registration Number Validator using JavaScript exception handling (try-catch) and Regular Expressions.

**6. Case Study Program Code:**

**`vehicle_validation.html`**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vehicle Registration Number Validation</title>
    <link rel="stylesheet" href="vehicle_validation.css">
</head>
<body>
    <div class="container">
        <h2>Vehicle Registration Validator</h2>
        <div class="input-group">
            <label for="regNumber">Enter Registration Number:</label>
            <input type="text" id="regNumber">
        </div>
        <button onclick="validateRegistration()">Validate</button>
        <div id="result" class="result"></div>
    </div>
    <script src="vehicle_validation.js"></script>
</body>
</html>
```

**`vehicle_validation.css`**
```css
body {
    background-color: #f5f5dc; /* Classic Beige */
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    background-color: #fff8e7; /* Lighter beige for contrast */
    border: 2px solid #d2b48c; /* Tan border */
    border-radius: 8px;
    padding: 30px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    text-align: center;
    width: 380px;
}

h2 {
    color: #5c4033; /* Dark brown for text */
    margin-bottom: 20px;
}

.input-group {
    margin-bottom: 20px;
    text-align: left;
}

label {
    display: block;
    margin-bottom: 5px;
    color: #3e2723;
    font-weight: bold;
}

input[type="text"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #d2b48c;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 16px;
}

button {
    background-color: #8b5a2b; /* Brownish */
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #a0522d;
}

.result {
    margin-top: 20px;
    font-weight: bold;
    font-size: 16px;
    padding: 10px;
    border-radius: 4px;
    display: none; /* Hidden by default */
}

.result.valid {
    display: block;
    color: #155724;
    background-color: #d4edda;
    border: 1px solid #c3e6cb;
}

.result.invalid {
    display: block;
    color: #721c24;
    background-color: #f8d7da;
    border: 1px solid #f5c6cb;
}
```

**`vehicle_validation.js`**
```javascript
function validateRegistration() {
    const regNumber = document.getElementById('regNumber').value.trim();
    const resultDiv = document.getElementById('result');

    try {
        if (!regNumber) {
            throw new Error("Registration number should not be empty.");
        }

        if (regNumber.length !== 10) {
            throw new Error("Length should be exactly 10 characters.");
        }

        // Check first two characters (State Code)
        const stateCode = regNumber.substring(0, 2);
        if (!/^[A-Z]{2}$/.test(stateCode)) {
            throw new Error("First two characters must be uppercase alphabets.");
        }

        // Check next two characters (District Code)
        const districtCode = regNumber.substring(2, 4);
        if (!/^[0-9]{2}$/.test(districtCode)) {
            throw new Error("Next two characters must be digits.");
        }

        // Check next two characters (Series)
        const series = regNumber.substring(4, 6);
        if (!/^[A-Z]{2}$/.test(series)) {
            throw new Error("Next two characters must be uppercase alphabets.");
        }

        // Check last four characters (Vehicle Number)
        const vehicleNumber = regNumber.substring(6, 10);
        if (!/^[0-9]{4}$/.test(vehicleNumber)) {
            throw new Error("Last four characters must be digits.");
        }

        // If all validations pass
        resultDiv.textContent = "Valid Vehicle Registration Number";
        resultDiv.className = "result valid";
    } catch (error) {
        // Handle invalid input using try-catch
        resultDiv.textContent = "Invalid: " + error.message;
        resultDiv.className = "result invalid";
    }
}
```

**7. Output:**
*(Attach screenshot/output here. PRN: 24070521003, Name: Akshat Digalwar. File Path with your name is mandatory in the screenshot)*
> **[Placeholder for User to Insert Screenshot of Vehicle Registration Validation]**

**8. Result/Conclusion:**
Successfully demonstrated string manipulation and error handling in JavaScript. The Palindrome Checker validates inputs by cleaning and reversing strings. The Vehicle Validator effectively applies `try-catch` blocks combined with substring extraction and Regular Expressions to strictly validate an Indian vehicle registration number format (e.g. MH31AA1234), providing precise error feedback to the user when validation fails.
