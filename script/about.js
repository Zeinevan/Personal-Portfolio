document.addEventListener('DOMContentLoaded', () => {
    // Set up the Intersection Observer
    const observerOptions = {
        root: null, // Viewport
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Trigger the animation by adding 'visible' class
                entry.target.classList.add('visible');
                // Remove 'hidden' to make sure it's not triggered again
                entry.target.classList.remove('hidden');
                observer.unobserve(entry.target); // Stop observing once animation is triggered
            }
        });
    }, observerOptions);

    // Observe all elements with the .hidden class
    document.querySelectorAll('.hidden').forEach(element => {
        observer.observe(element);
    });

    // Bar graph: animate the bars when they come into view
    const bars = document.querySelectorAll('.chart-bar');
    bars.forEach(bar => {
        observer.observe(bar);
    });

    // Images: slide them in
    const images = document.querySelectorAll('.char-image img');
    images.forEach(image => {
        observer.observe(image);
    });
});
