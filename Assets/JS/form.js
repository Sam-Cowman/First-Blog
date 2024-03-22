const lightToggle = document.getElementById('lightToggle');
const container = document.querySelector('body');
const form = document.getElementById('mindForm');
const formHistory = JSON.parse(localStorage.getItem('formHistory')) || []

document.addEventListener('DOMContentLoaded', function() {
    // Function to handle form submission
    document.getElementById('mindForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Retrieve the values from the form fields
        var username = document.getElementById('username').value;
        var title = document.getElementById('title').value;
        var content = document.getElementById('content').value;

        // Check if any of the fields are empty
        if (username === '' || title === '' || content === '') {
            alert('Please complete all fields.');
            return; // Exit the function to prevent form submission
        }
        const formEntry = {
            username,
            title,
            content,
        }
        console.log(formEntry)
        formHistory.push(formEntry)


        // Store form data in localStorage
        localStorage.setItem('formHistory', JSON.stringify(formHistory));
        

        // Redirect the user to the new page
        window.location.href = 'blog.html';
    });

    let mode = 'light';

    lightToggle.addEventListener('click', function () {
        // Toggle between light and dark mode 
        if (mode === 'light') {
            mode = 'dark';
            container.classList.remove('light');
            container.classList.add('dark');
        } else {
            mode = 'light';
            container.classList.remove('dark');
            container.classList.add('light');
        }
    });
});