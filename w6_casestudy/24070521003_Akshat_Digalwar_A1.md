# Experiment / Case Study No.: 6 (Case Study Only)

**1. Experiment Title:**


**2. Software/Tools Required:**
* Visual Studio Code (or any text editor)
* Web Browser (Chrome, Firefox, Edge, etc.)
* Git & GitHub (for version control and hosting)

**3. Experiment Program Code:**
*(No separate experiment code in this folder)*

**4. Output:**
*(Attach screenshot/output here. PRN: 24070521003, Name: Akshat Digalwar. File Path with your name is mandatory in the screenshot)*
> **[Placeholder for User to Insert Screenshot]**

**5. Case Study Title:**


**6. Case Study Program Code:**

**`index.html`**
```html
<!DOCTYPE html>
<html lang="en">
<body>
    <div class="container">
        <h1>String & Vowel Analyzer</h1>
        <textarea id="textInput" rows="5"></textarea>
        <button onclick="reverseString()">Reverse String</button>
        <button onclick="countVowels()">Count Vowels</button>
        <div id="resultOutput"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

**`script.js`**
```javascript
function reverseString() {
    const input = document.getElementById('textInput').value;
    if (input.trim() === '') return;
    const reversed = input.split('').reverse().join('');
}

function countVowels() {
    const input = document.getElementById('textInput').value;
    if (input.trim() === '') return;
    const matches = input.match(/[aeiouAEIOU]/g);
    const count = matches ? matches.length : 0;
}
```

**7. Output:**
*(Attach screenshot/output here. PRN: 24070521003, Name: Akshat Digalwar. File Path with your name is mandatory in the screenshot)*
> **[Placeholder for User to Insert Screenshot]**

**8. Result/Conclusion:**
Successfully demonstrated JavaScript string manipulation techniques within a case study context. The code effectively uses array methods (`split`, `reverse`, `join`) to reverse user strings, and utilizes Regular Expressions (`match(/[aeiouAEIOU]/g)`) to accurately identify and count vowels.
