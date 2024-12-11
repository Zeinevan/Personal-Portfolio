document.addEventListener("DOMContentLoaded", () => {

    const headerHeight = document.querySelector("header").offsetHeight;
    window.scrollTo({
      top: offset - headerHeight,
      behavior: "smooth",
    });
  
    // Fade-in animation for sections
    const sections = document.querySelectorAll("section");
    const options = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      });
    }, options);
  
    sections.forEach((section) => {
      section.classList.add("fade-out");
      observer.observe(section);
    });
  
    // Hover animation for images
    document.querySelectorAll(".container_2 .screenshots img").forEach((img) => {
      img.addEventListener("mouseenter", () => {
        img.style.transform = "scale(1.1)";
        img.style.transition = "transform 0.3s ease-in-out";
      });
  
      img.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1)";
      });
    });
  
    // Hamburger menu animation
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const menuLines = hamburgerMenu.querySelectorAll("span");
  
    hamburgerMenu.addEventListener("click", () => {
      menuLines[0].classList.toggle("line1");
      menuLines[1].classList.toggle("line2");
      menuLines[2].classList.toggle("line3");
    });
  });
  