// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    // Add animation to the navbar links
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach((link, index) => {
        link.style.transitionDelay = `${index * 0.1}s`;
        link.classList.add("fade-in");
    });

    // Add fade-in animation to the hero section
    const hero = document.querySelector(".hero");
    hero.style.opacity = "0";
    hero.style.transition = "opacity 1s ease-in-out";
    setTimeout(() => {
        hero.style.opacity = "1";
    }, 500);

    // Scroll animations for the about and portfolio sections
    const about = document.querySelector(".about");
    const portfolio = document.querySelector(".portfolio");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("slide-in");
            }
        });
    }, { threshold: 0.1 });

    observer.observe(about);
    observer.observe(portfolio);
});


