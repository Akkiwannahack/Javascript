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
