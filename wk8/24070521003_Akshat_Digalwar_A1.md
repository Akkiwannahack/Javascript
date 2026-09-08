# Experiment / Case Study No.: 8

**1. Experiment Title:**


**2. Software/Tools Required:**
* Visual Studio Code (or any text editor)
* Web Browser (Chrome, Firefox, Edge, etc.)
* Git & GitHub (for version control and hosting)

**3. Experiment Program Code:**

**`index.html`**
```html
<!DOCTYPE html>
<html lang="en">
<body>
    <div class="container">
        <h1>Gym Admission</h1>
        <form id="admissionForm">
            <input type="text" id="fullName" placeholder="Enter your full name">
            <span class="error-msg" id="nameError">Name is required.</span>

            <input type="email" id="email" placeholder="Enter your email">
            <span class="error-msg" id="emailError">Valid email required.</span>

            <select id="membership" name="membership">
                <option value="">Select a plan</option>
                <option value="basic">Basic (₹2500/mo)</option>
            </select>
            
            <input type="checkbox" id="terms" name="terms">
            
            <button type="submit" id="submitBtn">Submit Application</button>
        </form>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

**`script.js`**
```javascript
document.addEventListener('DOMContentLoaded', () => {
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');

    const validateName = () => {
        const isValid = fullName.value.trim().length >= 3;
        setValidationState(fullName, 'nameError', isValid);
    };

    const clearErrorState = (element, errorId) => {
        element.classList.remove('invalid');
        document.getElementById(errorId).classList.remove('visible');
    };

    // Events used for live checking
    fullName.addEventListener('blur', validateName);
    fullName.addEventListener('focus', () => clearErrorState(fullName, 'nameError'));
    fullName.addEventListener('input', () => {
        if(fullName.classList.contains('invalid')) validateName();
    });

    document.getElementById('membership').addEventListener('change', validateMembership);
});
```

**4. Output:**
*(Attach screenshot/output here. PRN: 24070521003, Name: Akshat Digalwar. File Path with your name is mandatory in the screenshot)*
> **[Placeholder for User to Insert Screenshot]**

**5. Case Study Title:**


**6. Case Study Program Code:**
*(No separate case study for Week 8)*

**7. Output:**
*(Attach screenshot/output here. PRN: 24070521003, Name: Akshat Digalwar. File Path with your name is mandatory in the screenshot)*
> **[Placeholder for User to Insert Screenshot]**

**8. Result/Conclusion:**
Successfully demonstrated live form validation using multiple DOM events. The Gym Admission form implements real-time feedback using `blur` to check inputs when losing focus, `focus` to clear error states, and `change` or `input` to validate data immediately as the user interacts. This establishes a robust approach to form checking prior to the final `submit` event.
