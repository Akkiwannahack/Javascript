# Experiment / Case Study No.: 7

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
    <div class="form-container">
        <h2>Student Registration Form</h2>
        <form id="registrationForm">
            <input type="text" id="firstname" required>
            <input type="text" id="lastname" required>
            <select name="day" id="day"></select>
            <select name="month" id="month"></select>
            <select name="year" id="year"></select>
            <input type="radio" id="male" name="gender" value="male" required>
            <input type="checkbox" id="terms" name="terms" required>
            <button type="submit">Submit</button>
        </form>
        <div id="error-message"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

**`script.js`**
```javascript
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const daySelect = document.getElementById('day');
    
    // Dynamic population of DOM elements
    for (let i = 1; i <= 31; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        daySelect.appendChild(option);
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const terms = document.getElementById('terms').checked;
        if (!terms) {
            document.getElementById('error-message').textContent = "You must agree to terms.";
            return;
        }
        alert("Student Registration Form submitted successfully!");
    });
});
```

**4. Output:**
*(Attach screenshot/output here. PRN: 24070521003, Name: Akshat Digalwar. File Path with your name is mandatory in the screenshot)*
> **[Placeholder for User to Insert Screenshot]**

**5. Case Study Title:**


**6. Case Study Program Code:**

**`todo.html`**
```html
<!DOCTYPE html>
<html lang="en">
<body>
    <div class="page-wrapper">
        <h2>To-do list</h2>
        <div class="input-container">
            <input type="text" id="taskInput" placeholder="Add a new task...">
            <button id="addButton">Add</button>
        </div>
        <ul id="taskList"></ul>
    </div>
    <script src="todo.js"></script>
</body>
</html>
```

**`todo.js`**
```javascript
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            if (this.checked) li.classList.add('completed');
            else li.classList.remove('completed');
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '&times;';
        deleteBtn.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(checkbox);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = '';
    }

    addButton.addEventListener('click', addTask);
});
```

**7. Output:**
*(Attach screenshot/output here. PRN: 24070521003, Name: Akshat Digalwar. File Path with your name is mandatory in the screenshot)*
> **[Placeholder for User to Insert Screenshot]**

**8. Result/Conclusion:**
Successfully demonstrated advanced DOM manipulation and event handling in JavaScript. The student registration form uses JavaScript to dynamically generate HTML option elements and intercept form submissions. The To-Do list case study showcases the ability to programmatically create, append, and remove complex DOM nodes (list items, checkboxes, buttons) on the fly, creating an interactive user experience.
