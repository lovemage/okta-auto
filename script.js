document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const menuOverlay = document.getElementById('mobile-menu-overlay');

    const langSwitcher = document.getElementById('lang-switcher');

    // Language Switcher Toggle
    if (langSwitcher) {
        const langBtn = langSwitcher.querySelector('.lang-switcher-btn');
        
        // Toggle dropdown on button click
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langSwitcher.classList.toggle('active');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!langSwitcher.contains(e.target)) {
                langSwitcher.classList.remove('active');
            }
        });
        
        // Close dropdown when clicking a language option
        const langOptions = langSwitcher.querySelectorAll('.lang-option');
        langOptions.forEach(option => {
            option.addEventListener('click', () => {
                langSwitcher.classList.remove('active');
            });
        });
    }

    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    if (menuToggle && menuOverlay) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            menuOverlay.classList.toggle('active');

            // Prevent body scroll when menu is open
            if (menuOverlay.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Close menu when clicking a link
        const navLinks = menuOverlay.querySelectorAll('.mobile-nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                menuOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all other items
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                });

                // Toggle current item
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });
});
