# Experiment / Case Study No.: 3

**1. Experiment Title:**
Design and implement a Student Grading System using HTML, CSS, and JavaScript.

**2. Software/Tools Required:**
* Visual Studio Code (or any text editor)
* Web Browser (Chrome, Firefox, Edge, etc.)
* Git & GitHub (for version control and hosting)

**3. Experiment Program Code:**

**`grdsys.html`**
```html
<!DOCTYPE html>
<html>

<head>
    <title> Student Grading System</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            text-align: center;
        }
        h2 {
            color: red;
        }
        form {
            margin: 0 auto;
            width: max-content;
            text-align: left;
        }
        input[type="text"], input[type="number"], input[type="button"] {
            margin-top: 5px;
            margin-bottom: 15px;
            display: block;
            width: 100%;
            box-sizing: border-box;
        }
        .report-card {
            display: none;
            margin: 20px auto 0 auto;
            text-align: left;
            width: max-content;
        }
    </style>
</head>

<body>

    <h2> Student Grading System</h2>

    <form>
        <label>Student Name:</label>
        <input type="text" id="name">

        <label>Marks: </label>
        <input type="number" id="marks">

        <input type="button" value="Calculate Grade" onclick="GradeSystem()">
    </form>

    <div id="report" class="report-card"></div>

    <script>
        function GradeSystem() {
            var name = document.getElementById("name").value;
            var marks = document.getElementById("marks").value;


            if (name == "") {
                alert("Please enter Student Name");
                return;
            }

            if (marks == "") {
                alert("Please enter marks");
                return;
            }

            marks = Number(marks);
            if (marks < 0 || marks > 100) {
                alert("Invalid marks");
                return;
            }

            var grade;
            var result;
            if (marks >= 90) {
                grade = "A+";
                result = "Pass";
            }
            else if (marks >= 80) {
                grade = "A";
                result = "PASS";
            }
            else if (marks >= 70) {
                grade = "B";
                result = "PASS";
            }
            else if (marks >= 60) {
                grade = "C";
                result = " Pass";
            }
            else if (marks >= 50) {
                grade = "D";
                result = "Pass";
            }
            else if (marks >= 40) {
                grade = "E";
                result = "Fail";
            }
            else {
                grade = "F";
                result = "Fail";
            }


            var reportDiv = document.getElementById("report");
            reportDiv.innerHTML = "<h2>Student Grade Report</h2>" +
                                  "<hr>" +
                                  "<b>Student Name :</b> " + name + "<br><br>" +
                                  "<b>Marks :</b> " + marks + "<br><br>" +
                                  "<b>Grade :</b> " + grade + "<br><br>" +
                                  "<b>Result :</b> " + result;
            reportDiv.style.display = "block";
        }
    </script>
</body>

</html>
```

**4. Output:**
*(Attach screenshot/output here. PRN: 24070521003, Name: Akshat Digalwar. File Path with your name is mandatory in the screenshot)*
> **[Placeholder for User to Insert Screenshot of Student Grading System Execution]**

**5. Case Study Title:**
Implementation of a Student Login Form with Client-Side Validation using Regular Expressions in JavaScript.

**6. Case Study Program Code:**

**`login.html`**
```html
<!DOCTYPE html>
<html>

<head>
    <title>SIT Student Login</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            text-align: center;
        }
        h2 {
            color: red;
        }
        form {
            display: inline-block;
            text-align: left;
        }
        input[type="text"],
        input[type="password"] {
            display: block;
            margin-top: 5px;
            margin-bottom: 10px;
        }
        .error {
            color: red;
            font-size: 13px;
            margin-bottom: 10px;
        }
        .success {
            color: green;
            font-weight: bold;
            margin-top: 10px;
        }
    </style>
</head>

<body>

    <h2>SIT Student Login</h2>

    <form onsubmit="return validateForm()">
        <label>Login ID (Name):</label><br>
        <input type="text" id="loginId"><br>
        <div class="error" id="loginIdError"></div>

        <label>Password:</label><br>
        <input type="password" id="password"><br>
        <div class="error" id="passwordError"></div>

        <input type="submit" value="Login">
        <div class="success" id="successMessage"></div>
    </form>

    <script>
        function validateForm() {
            var loginId = document.getElementById('loginId').value.trim();
            var password = document.getElementById('password').value;

            var loginIdError = document.getElementById('loginIdError');
            var passwordError = document.getElementById('passwordError');
            var successMessage = document.getElementById('successMessage');

            // Reset
            loginIdError.innerHTML = '';
            passwordError.innerHTML = '';
            successMessage.innerHTML = '';

            var isValid = true;

            // Validate Login ID
            if (loginId === '') {
                loginIdError.innerHTML = 'Login ID is required.';
                isValid = false;
            } else if (loginId.length < 3) {
                loginIdError.innerHTML = 'Login ID must be at least 3 characters.';
                isValid = false;
            } else if (!/^[a-zA-Z\s]+$/.test(loginId)) {
                loginIdError.innerHTML = 'Login ID can only contain letters and spaces.';
                isValid = false;
            }

            // Validate Password
            if (password === '') {
                passwordError.innerHTML = 'Password is required.';
                isValid = false;
            } else {
                var pwdErrors = [];
                if (password.length < 8) pwdErrors.push('at least 8 characters');
                if (!/[A-Z]/.test(password)) pwdErrors.push('one uppercase letter');
                if (!/[a-z]/.test(password)) pwdErrors.push('one lowercase letter');
                if (!/[0-9]/.test(password)) pwdErrors.push('one integer');
                if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) pwdErrors.push('one special character');

                if (pwdErrors.length > 0) {
                    passwordError.innerHTML = 'Password must contain: ' + pwdErrors.join(', ') + '.';
                    isValid = false;
                }
            }

            if (isValid) {
                successMessage.innerHTML = 'Login Successful!';
            }

            return false;
        }
    </script>
</body>

</html>
```

**7. Output:**
*(Attach screenshot/output here. PRN: 24070521003, Name: Akshat Digalwar. File Path with your name is mandatory in the screenshot)*
> **[Placeholder for User to Insert Screenshot of Form Validation and Successful Login Message]**

**8. Result/Conclusion:**
Successfully created form interfaces and integrated client-side logic using JavaScript. The Student Grading System utilized conditional operators to evaluate numeric constraints and compute grades, while the Login Form showcased robust input validation techniques applying Regular Expressions to enforce strong password and username requirements without needing server-side checks.
