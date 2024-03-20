document.addEventListener('DOMContentLoaded', function() {
    // Wait for the document to be fully loaded before executing the script

    document.getElementById('mindForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Retrieve the values from the form fields
        var title = document.getElementById('title').value;
        var content = document.getElementById('content').value;

        // Construct the URL of the new page with query parameters
        var url = 'blog.html?title=' + encodeURIComponent(title) + '&content=' + encodeURIComponent(content);

        // Redirect the user to the new page
        window.location.href = url;
    });
});

const lightToggle = document.getElementById('lightToggle');

lightToggle.addEventListener('click', function() {
    document.body.classList.toggle('light-mode');

    // You can also toggle the sun emoji to represent the current mode
    if (document.body.classList.contains('light-mode')) {
        lightToggle.textContent = '&#9728;'; // Sun emoji
    } else {
        lightToggle.textContent = '&#127770;'; // Moon emoji or any other appropriate icon
    }
});

themeSwitcher.addEventListener('click', function () {
    // If mode is dark, apply light background
    if (mode === 'dark') {
      mode = 'light';
      container.setAttribute('class', 'light');
    }
    // If mode is light, apply dark background
    else {
      mode = 'dark';
      container.setAttribute('class', 'dark');
    }
  });