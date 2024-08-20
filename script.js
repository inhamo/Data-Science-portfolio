// Add your JavaScript here
// Example: Smooth scrolling for navigation (only for in-page links)
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    // Check if the href attribute starts with #
    if (this.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
