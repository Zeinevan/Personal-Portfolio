// Wait for the document to load before executing the script
document.addEventListener('DOMContentLoaded', function () {
    // Function to add the class for animation when the element is in view
    const revealOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(revealOnScroll, {
        threshold: 0.1, // Trigger when 30% of the element is visible
    });

    // Select all elements you want to apply the animation to
    const elementsToAnimate = document.querySelectorAll('.reveal');
    elementsToAnimate.forEach(element => observer.observe(element));
});