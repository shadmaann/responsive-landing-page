// Change navbar background color on scroll
window.onscroll = function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};

// Optional: Add a hover effect to change the style of menu items dynamically
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#f39c12';
    });

    link.addEventListener('mouseout', () => {
        link.style.color = '#fff';
    });
});
