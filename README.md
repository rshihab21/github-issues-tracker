# GitHub Issues Tracker
A simple GitHub Issues Tracker web application built using HTML, Tailwind CSS, DaisyUI, and JavaScript.
This project allows users to view, search, and manage project issues in a clean and responsive interface.

## 🚀 Features
- 📋 **View All Issues** – Display all project issues in a clean grid layout  
- 🔍 **Search Issues** – Quickly find issues using the search bar  
- 🟢 **Filter Issues** – Filter by **All / Open / Closed**  
- 📑 **Issue Details Modal** – View detailed information of each issue  
- 📱 **Responsive Design** – Works on mobile, tablet, and desktop  
- 🎨 **Modern UI** – Built with **Tailwind CSS** and **DaisyUI**

### 1. What is the difference between var, let, and const ?

#### var
- Old way to declare variables (before ES6).
- Function scoped (not block scoped).
- Can be redeclared and updated.

#### let
- Introduced in ES6.
- Block scoped (works inside {}).
- Cannot be redeclared, but can be updated.

#### const
- Also introduced in ES6.
- Block scoped like let.
- Cannot be redeclared and cannot be updated.

### 2. What is the spread operator (...) ?
- Using it with Arrays:
When you use it on an array, it pulls every item out so you can easily combine them or make a copy.
Example: If you have [1, 2] and you use ..., it turns into 1, 2.
- Using it with Objects:
It works the same way for objects, allowing you to "spread" the key-value pairs into a new object.
Example: You can take an existing "User" object and spread it into a new one while adding a "Location" property.

### 3. What is the difference between map(), filter(), and forEach() ?
#### map()
Use map() when you want to perform the same action on every item and keep the results. It creates a brand-new array of the same length.
#### filter()
Use filter() when you want to "sort through" an array and only keep the items that meet a specific rule. It returns a new array, usually shorter than the original.

#### forEach()
Use forEach() when you just want to "do something" for every item, but you don't need a new list back. It’s a cleaner way to write a traditional for loop.

### 4. What is an arrow function ?
An arrow function is a shorter, more modern way to write functions in JavaScript. Introduced in ES6, it uses a "fat arrow" symbol (=>) to separate the inputs from the logic

### 5. What are template literals?
A template literal is a modern way to work with strings in JavaScript that makes joining text and variables much easier.
Instead of using single (') or double (") quotes, you use backticks (`).
