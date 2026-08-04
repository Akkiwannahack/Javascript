# Experiment / Case Study No.: 1

**1. Experiment Title:**
Demonstration of Inline, Internal and External JavaScript, Console Methods and Uses Information Webpage.


**2. Software/Tools Required:**
* Visual Studio Code (or any text editor)
* Web Browser (Chrome, Firefox, Edge, etc.)
* Git & GitHub (for version control and hosting)

**3. Experiment Program Code:**

**`index.html`**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to SIT Nagpur</title>
    <!-- Link to external CSS -->
    <link rel="stylesheet" href="style.css">
</head>
<body class="home-page">
    <div class="container">
        <h1>Welcome to SIT Nagpur</h1>
        <p>Symbiosis Institute of Technology (SIT) Nagpur provides quality education in engineering with state-of-the-art infrastructure and a vibrant campus life.</p>
        <button id="btnGetStarted" class="btn">Get Started</button>
    </div>

    <!-- Link to external JavaScript -->
    <script src="script.js"></script>
</body>
</html>
```

**`departments.html`**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Departments</title>
    <link rel="stylesheet" href="style.css">
</head>
<body class="departments-page">
    <div class="container">
        <h1>SIT Nagpur Departments</h1>
        
        <ul class="department-list">
            <li>Computer Science & Engineering</li>
            <li>Information Technology</li>
            <li>Electronics & Telecommunication</li>
            <li>Robotics & AI</li>
        </ul>
        
        <a href="student.html" class="nav-link red-link">Go to Student Information Page</a>
    </div>
</body>
</html>
```

**`style.css`**
```css
/* General Resets and Base Styles */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
}

body {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.container {
    background-color: white;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    max-width: 600px;
    width: 100%;
    text-align: center;
}

.left-aligned {
    text-align: left;
}

/* Page Specific Backgrounds */
.home-page {
    background-color: #add8e6; /* Light blue background */
}

.student-page {
    background-color: #90ee90; /* Light green background */
}

.departments-page {
    background-color: #add8e6; /* Light blue background */
}

/* Typography and Spacing */
h1 {
    margin-bottom: 20px;
    font-size: 28px;
    font-weight: bold;
}

.large-bold-heading {
    font-size: 32px;
}

h2 {
    margin-top: 30px;
    margin-bottom: 15px;
}

p {
    margin-bottom: 20px;
    line-height: 1.6;
}

/* Form Styles */
.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
}

input[type="text"], select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}

/* Button Styles */
.btn {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
}

.btn:hover {
    background-color: #0056b3;
}

/* Departments List */
.department-list {
    list-style-position: inside;
    text-align: left;
    margin: 0 auto 30px auto;
    max-width: 350px; /* enough width for items */
}

.department-list li {
    margin-bottom: 10px;
    font-size: 18px;
}

/* Links */
.nav-link {
    display: inline-block;
    margin-top: 20px;
    text-decoration: none;
    font-weight: bold;
    color: #007bff;
}

.nav-link:hover {
    text-decoration: underline;
}

.red-link {
    color: red;
}
```

**4. Output:**
*(Attach screenshot/output here. PRN: 24070521003, Name: Akshat Digalwar. File Path with your name is mandatory in the screenshot)*
> **[Placeholder for User to Insert Screenshots of Home Page and Departments Page]**

**5. Case Study Title:**
Implementation of a Student Information Form with Form Handling and DOM Manipulation using JavaScript.

**6. Case Study Program Code:**

**`student.html`**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Information Form</title>
    <link rel="stylesheet" href="style.css">
</head>
<body class="student-page">
    <div class="container left-aligned">
        <h1 class="large-bold-heading">Student Information Form</h1>
        
        <!-- Student Form -->
        <form id="studentForm">
            <div class="form-group">
                <label for="studentName">Student Name</label>
                <input type="text" id="studentName" required>
            </div>
            
            <div class="form-group">
                <label for="department">Department</label>
                <select id="department" required>
                    <option value="" disabled selected>Select Department</option>
                    <option value="Computer Science & Engineering">Computer Science & Engineering</option>
                    <option value="Information Technology">Information Technology</option>
                    <option value="Electronics & Telecommunication">Electronics & Telecommunication</option>
                    <option value="Robotics & AI">Robotics & AI</option>
                </select>
            </div>
            
            <button type="submit" class="btn">Submit Information</button>
        </form>

        <!-- Result Area (Hidden initially) -->
        <div id="resultArea" style="display: none;">
            <h2>Submitted Details</h2>
            <p><strong>Name:</strong> <span id="displayName"></span></p>
            <p><strong>Department:</strong> <span id="displayDept"></span></p>
            
            <a href="departments.html" class="nav-link">← Departments Page</a>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

**`script.js`**
```javascript
// Wait for the DOM to load before executing JS
document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // Page 1: Home Page logic
    // ==========================================
    const btnGetStarted = document.getElementById('btnGetStarted');
    if (btnGetStarted) {
        btnGetStarted.addEventListener('click', () => {
            // Show welcome alert
            alert('Welcome to SIT Nagpur');
            // Navigate to student form page
            window.location.href = 'student.html';
        });
    }

    // ==========================================
    // Page 2: Student Form logic
    // ==========================================
    const studentForm = document.getElementById('studentForm');
    if (studentForm) {
        studentForm.addEventListener('submit', (e) => {
            // Prevent page refresh on submit
            e.preventDefault();

            // Read the values using JavaScript
            const studentName = document.getElementById('studentName').value;
            const department = document.getElementById('department').value;

            // Create an object using object shorthand syntax
            const student = {
                studentName,
                department
            };

            // DOM manipulation elements
            const resultArea = document.getElementById('resultArea');
            const displayName = document.getElementById('displayName');
            const displayDept = document.getElementById('displayDept');

            // Update innerHTML
            displayName.innerHTML = student.studentName;
            displayDept.innerHTML = student.department;

            // Display the result area and optionally hide the form
            resultArea.style.display = 'block';
            studentForm.style.display = 'none';
        });
    }
});
```

**7. Output:**
*(Attach screenshot/output here. PRN: 24070521003, Name: Akshat Digalwar. File Path with your name is mandatory in the screenshot)*
> **[Placeholder for User to Insert Screenshots of Form Submission and Result Display]**

**8. Result/Conclusion:**
Successfully designed and implemented a multi-page website utilizing HTML, CSS, and JavaScript. We demonstrated page navigation, form validation, event handling, and dynamic DOM manipulation by capturing form inputs and rendering them back onto the webpage without reloading the page.
