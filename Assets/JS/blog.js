const lightToggle = document.getElementById('lightToggle');
const container = document.querySelector('body');

document.getElementById("back").addEventListener("click", function() {
    window.location.href = "index.html"; // Navigate to the landing page (index.html)
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