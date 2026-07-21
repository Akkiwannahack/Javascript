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
