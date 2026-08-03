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
