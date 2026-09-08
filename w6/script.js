function getParagraph() {
    return document.getElementById('paraInput').value;
}

// Helper function to show output in the single result box
function showOutput(title, content) {
    const outputBox = document.getElementById('mainResult');
    outputBox.innerHTML = `<strong>${title}:</strong><br><br>${content}`;
}

// 2 - Find all vowels
function findVowels() {
    const text = getParagraph();
    if (!text) {
        showOutput('Find Vowels', '<span style="color:red">Please enter a paragraph in step 1.</span>');
        return;
    }
    const matches = text.match(/[aeiou]/gi);
    const count = matches ? matches.length : 0;
    const uniqueVowels = matches ? [...new Set(matches.map(v => v.toLowerCase()))].join(', ') : 'None';
    
    showOutput('Find Vowels', `Total Vowels: ${count}<br>Vowels Found: ${uniqueVowels}`);
}

// 3 - Replace word
function replaceWord() {
    const text = getParagraph();
    const toReplace = document.getElementById('wordToReplace').value;
    const replacement = document.getElementById('replacementWord').value;

    if (!text || !toReplace) {
        showOutput('Replace Word', '<span style="color:red">Please enter paragraph and a word to replace.</span>');
        return;
    }

    const regex = new RegExp(toReplace, 'gi');
    const newText = text.replace(regex, replacement);
    showOutput('Replace Word', newText);
}

// 4 - Position of word
function findPosition() {
    const text = getParagraph();
    const word = document.getElementById('wordToFind').value;

    if (!text || !word) {
        showOutput('Position of Word', '<span style="color:red">Please enter paragraph and a word to find.</span>');
        return;
    }

    const position = text.indexOf(word);
    if (position !== -1) {
        showOutput('Position of Word', `Word '${word}' found at index: ${position}`);
    } else {
        showOutput('Position of Word', `Word '${word}' not found in the paragraph.`);
    }
}

// 5 - Regex - Email validation
function validateEmail() {
    const email = document.getElementById('emailToValidate').value;
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!email) {
        showOutput('Email Validation', '<span style="color:red">Please enter an email to validate.</span>');
        return;
    }

    if (regex.test(email.trim())) {
        showOutput('Email Validation', '<span style="color:green">Valid Email Address</span>');
    } else {
        showOutput('Email Validation', '<span style="color:red">Invalid Email Address</span>');
    }
}

// 6 - Regex - Extract email
function extractEmails() {
    const text = getParagraph();
    if (!text) {
        showOutput('Extract Emails', '<span style="color:red">Please enter a paragraph in step 1.</span>');
        return;
    }

    const regex = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}/g;
    const matches = text.match(regex);

    if (matches && matches.length > 0) {
        const uniqueEmails = [...new Set(matches)];
        let listHtml = uniqueEmails.map(e => `<li>${e}</li>`).join('');
        showOutput('Extract Emails', `<ul>${listHtml}</ul>`);
    } else {
        showOutput('Extract Emails', 'No emails found in the paragraph.');
    }
}

// 7 - Reverse paragraph
function reverseParagraph() {
    const text = getParagraph();
    if (!text) {
        showOutput('Reverse Paragraph', '<span style="color:red">Please enter a paragraph in step 1.</span>');
        return;
    }

    const reversed = text.split('').reverse().join('');
    showOutput('Reverse Paragraph', reversed);
}
