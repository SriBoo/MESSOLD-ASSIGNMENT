// Example: Toggle Navigation Menu for Mobile
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    const menuToggle = document.querySelector('.menu-toggle');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});
