
const lightToggle = document.getElementById('lightToggle');
const container = document.querySelector('body');

document.addEventListener('DOMContentLoaded', function() {
   
    document.getElementById('mindForm').addEventListener('submit', function(event) {
        event.preventDefault(); 

        // Retrieve the values from the form fields
        var title = document.getElementById('title').value;
        var content = document.getElementById('content').value;

        // Construct the URL of the new page with query parameters
        var url = 'blog.html?title=' + encodeURIComponent(title) + '&content=' + encodeURIComponent(content);

        // Redirect the user to the new page
        window.location.href = url;
    });
});

let mode ='light';

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