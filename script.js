/* script.js */
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links and sections
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    // Handle navigation
    function navigateToSection(sectionId) {
        // Hide all sections
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Show selected section
        const targetSection = document.querySelector(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // Update URL hash
        history.pushState(null, '', sectionId);
    }

    // Add click event listeners to nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('href');
            navigateToSection(sectionId);
        });
    });

    // Handle browser back/forward buttons
    window.addEventListener('popstate', () => {
        const sectionId = window.location.hash || '#projects';
        navigateToSection(sectionId);
    });

    // Handle initial load
    const initialSection = window.location.hash || '#projects';
    navigateToSection(initialSection);
});
