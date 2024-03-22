const lightToggle = document.getElementById('lightToggle');
const container = document.querySelector('body');
const formHistory = JSON.parse(localStorage.getItem('formHistory')) || []

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

for(let i = 0; i<formHistory.length; i++){
    const li=document.createElement('li')
    const div=document.createElement('div')
    const entry=document.createElement('p')
    entry.textContent=`Entry ${i+1}`
    const h2=document.createElement('h2')
    h2.textContent=formHistory[i].title;
    const hr =document.createElement('hr')
    const content =document.createElement('p')
    content.textContent=formHistory[i].content;
    const user=document.createElement('p')
    user.textContent=`Created by ${formHistory[i].username}`
    div.append(h2, hr, content, user)
    li.append(entry,div)
    document.querySelector('.entries').append(li)
}