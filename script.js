const toggleButton = document.getElementById('theme-toggle');
const icon = document.getElementById('icon');
let isDarkMode = false;

toggleButton.addEventListener('click', function () {
    // Toggle dark mode class on the body
    document.body.classList.toggle('dark-mode');
    
    // Toggle icon between sun and moon
    if (isDarkMode) {
        icon.src = 'https://raw.githubusercontent.com/Mahdiklidari/Jsia/main/sun%20(1).svg';
        isDarkMode = false;
    } else {
        icon.src = 'https://raw.githubusercontent.com/Mahdiklidari/Jsia/main/moon-moon-svgrepo-com.svg';
        isDarkMode = true;
    }
});
