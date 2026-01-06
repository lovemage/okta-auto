document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');

    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle (if added back later)
    // const menuBtn = document.getElementById('menu-toggle');
    // const navLinks = document.querySelector('.nav-links');
    // if (menuBtn) {
    //     menuBtn.addEventListener('click', () => {
    //         navLinks.classList.toggle('active');
    //     });
    // }
});
