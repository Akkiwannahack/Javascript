document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const errorMessage = document.getElementById('error-message');

    // Populate birthday dropdowns
    const daySelect = document.getElementById('day');
    const monthSelect = document.getElementById('month');
    const yearSelect = document.getElementById('year');

    for (let i = 1; i <= 31; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        daySelect.appendChild(option);
    }

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    months.forEach((month, index) => {
        const option = document.createElement('option');
        option.value = index + 1;
        option.textContent = month;
        monthSelect.appendChild(option);
    });

    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= 1900; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        yearSelect.appendChild(option);
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        errorMessage.textContent = '';

        const terms = document.getElementById('terms').checked;

        if (!terms) {
            errorMessage.textContent = "You must agree to the terms & conditions.";
            return;
        }

        // If validation passes
        alert("Student Registration Form submitted successfully!");
    });
});
