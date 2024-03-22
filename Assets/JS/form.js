const lightToggle = document.getElementById('lightToggle');
    const container = document.querySelector('body');


document.addEventListener('DOMContentLoaded', function() {
    // Function to handle form submission
    document.getElementById('mindForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Retrieve the values from the form fields
        const username = document.getElementById('username').value;
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        // Check if any of the fields are empty
        if (username === '' || title === '' || content === '') {
            alert('Please complete all fields.');
            return; // Exit the function to prevent form submission
        }

        // Store form data in localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('title', title);
        localStorage.setItem('content', content);

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