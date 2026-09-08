# Experiment / Case Study No.: 6

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
        <h1>Text Analyzer</h1>
        <textarea id="paraInput" rows="5"></textarea>
        <button onclick="findVowels()">Find Vowels</button>
        <button onclick="replaceWord()">Replace</button>
        <button onclick="findPosition()">Find Position</button>
        <button onclick="validateEmail()">Validate Email</button>
        <button onclick="extractEmails()">Extract Emails</button>
        <button onclick="reverseParagraph()">Reverse</button>
        <div id="mainResult"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

**`script.js`**
```javascript
function getParagraph() { return document.getElementById('paraInput').value; }

function findVowels() {
    const text = getParagraph();
    const matches = text.match(/[aeiou]/gi);
}

function replaceWord() {
    const text = getParagraph();
    const toReplace = document.getElementById('wordToReplace').value;
    const replacement = document.getElementById('replacementWord').value;
    const regex = new RegExp(toReplace, 'gi');
    const newText = text.replace(regex, replacement);
}

function validateEmail() {
    const email = document.getElementById('emailToValidate').value;
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
}
```

**4. Output:**
*(Attach screenshot/output here. PRN: 24070521003, Name: Akshat Digalwar. File Path with your name is mandatory in the screenshot)*
> **[Placeholder for User to Insert Screenshot]**

**5. Case Study Title:**


**6. Case Study Program Code:**

**`w6_casestudy/index.html`**
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

**`w6_casestudy/script.js`**
```javascript
function reverseString() {
    const input = document.getElementById('textInput').value;
    const reversed = input.split('').reverse().join('');
}

function countVowels() {
    const input = document.getElementById('textInput').value;
    const matches = input.match(/[aeiouAEIOU]/g);
    const count = matches ? matches.length : 0;
}
```

**7. Output:**
*(Attach screenshot/output here. PRN: 24070521003, Name: Akshat Digalwar. File Path with your name is mandatory in the screenshot)*
> **[Placeholder for User to Insert Screenshot]**

**8. Result/Conclusion:**
Successfully utilized Regular Expressions and JavaScript string manipulation methods. The Text Analyzer efficiently leverages `match()`, `replace()`, and RegExp objects for searching and validating text formats like emails. The case study confirms the understanding of string reversing and vowel counting using both array conversions (`split`, `reverse`, `join`) and regex matching techniques.
