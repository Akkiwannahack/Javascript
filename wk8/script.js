document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('admissionForm');
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const age = document.getElementById('age');
    const membership = document.getElementById('membership');
    const terms = document.getElementById('terms');
    const submitBtn = document.getElementById('submitBtn');

    // Validation functions
    const validateName = () => {
        const isValid = fullName.value.trim().length >= 3;
        setValidationState(fullName, 'nameError', isValid);
        return isValid;
    };

    const validateEmail = () => {
        // Simple regex for email validation
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = re.test(email.value.trim());
        setValidationState(email, 'emailError', isValid);
        return isValid;
    };

    const validateAge = () => {
        const ageValue = parseInt(age.value, 10);
        const isValid = !isNaN(ageValue) && ageValue >= 16 && ageValue <= 100;
        setValidationState(age, 'ageError', isValid);
        return isValid;
    };

    const validateMembership = () => {
        const isValid = membership.value !== "";
        setValidationState(membership, 'membershipError', isValid);
        return isValid;
    };

    const validateTerms = () => {
        const isValid = terms.checked;
        const errorElement = document.getElementById('termsError');
        if (isValid) {
            errorElement.classList.remove('visible');
        } else {
            errorElement.classList.add('visible');
        }
        return isValid;
    };

    // Helper to set valid/invalid classes and show/hide errors
    const setValidationState = (element, errorId, isValid) => {
        const errorElement = document.getElementById(errorId);
        if (isValid) {
            element.classList.remove('invalid');
            element.classList.add('valid');
            errorElement.classList.remove('visible');
        } else {
            element.classList.remove('valid');
            element.classList.add('invalid');
            errorElement.classList.add('visible');
        }
        checkFormValidity();
    };

    // Check overall form validity to enable/disable submit button
    const checkFormValidity = () => {
        const isFormValid = 
            fullName.classList.contains('valid') &&
            email.classList.contains('valid') &&
            age.classList.contains('valid') &&
            membership.classList.contains('valid') &&
            terms.checked;

        // Optional: disable submit button if not valid
        // submitBtn.disabled = !isFormValid; 
    };

    // Event Listeners for live validation

    // blur event: triggered when an element loses focus
    fullName.addEventListener('blur', validateName);
    email.addEventListener('blur', validateEmail);
    age.addEventListener('blur', validateAge);

    // focus event: triggered when an element gains focus
    const clearErrorState = (element, errorId) => {
        element.classList.remove('invalid');
        document.getElementById(errorId).classList.remove('visible');
    };

    fullName.addEventListener('focus', () => clearErrorState(fullName, 'nameError'));
    email.addEventListener('focus', () => clearErrorState(email, 'emailError'));
    age.addEventListener('focus', () => clearErrorState(age, 'ageError'));

    // input event: triggered immediately as the user types (for better UX after initial blur)
    fullName.addEventListener('input', () => {
        if(fullName.classList.contains('invalid')) validateName();
    });
    email.addEventListener('input', () => {
        if(email.classList.contains('invalid')) validateEmail();
    });
    age.addEventListener('input', () => {
        if(age.classList.contains('invalid')) validateAge();
    });

    // change event: triggered when the value of a <select> or <input type="checkbox"> changes
    membership.addEventListener('change', validateMembership);
    terms.addEventListener('change', validateTerms);

    // form submit event
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default submission

        // Re-validate all fields on submit
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isAgeValid = validateAge();
        const isMembershipValid = validateMembership();
        const isTermsValid = validateTerms();

        if (isNameValid && isEmailValid && isAgeValid && isMembershipValid && isTermsValid) {
            alert('Gym Admission Application Submitted Successfully!');
            form.reset();
            // Remove valid classes
            [fullName, email, age, membership].forEach(el => el.classList.remove('valid'));
        } else {
            alert('Please fill out all fields correctly before submitting.');
        }
    });
});
