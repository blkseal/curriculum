function toggleMenu() {
    const nav = document.getElementById('mainNav');
    const hamburger = document.querySelector('.hamburger');
    nav.classList.toggle('show');
    hamburger.classList.toggle('active');
}

// Close menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.getElementById('mainNav');
        const hamburger = document.querySelector('.hamburger');
        nav.classList.remove('show');
        hamburger.classList.remove('active');
    });
});
