function reverseString() {
    const input = document.getElementById('textInput').value;
    const resultBox = document.getElementById('resultOutput');
    
    if (input.trim() === '') {
        resultBox.innerHTML = '<em>Please enter some text.</em>';
        return;
    }
    
    // Logic to reverse the string
    const reversed = input.split('').reverse().join('');
    
    resultBox.innerHTML = `<strong>Reversed String:</strong> <br> ${reversed}`;
}

function countVowels() {
    const input = document.getElementById('textInput').value;
    const resultBox = document.getElementById('resultOutput');
    
    if (input.trim() === '') {
        resultBox.innerHTML = '<em>Please enter some text.</em>';
        return;
    }
    
    // Logic to count vowels using regex
    const matches = input.match(/[aeiouAEIOU]/g);
    const count = matches ? matches.length : 0;
    
    resultBox.innerHTML = `<strong>Number of vowels:</strong> ${count}`;
}
