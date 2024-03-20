const lightToggle = document.getElementById('lightToggle');
const container = document.querySelector('body');

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