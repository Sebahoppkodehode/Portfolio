document.addEventListener("DOMContentLoaded", function () {
  const homeButton = document.querySelector(".Home #home");
  const aboutLink = document.querySelector(".Nav #about-link"); // Use the section ID in the selector
  const projectsLink = document.querySelector(".Nav #projects-link"); // Use the section ID in the selector
  const contactLink = document.querySelector(".Nav #contact-link"); // Use the section ID in the selector

  homeButton.addEventListener("click", function () {
    scrollToSection("landing");
  });

  aboutLink.addEventListener("click", function () {
    scrollToSection("about");
  });

  projectsLink.addEventListener("click", function () {
    scrollToSection("projects");
  });

  contactLink.addEventListener("click", function () {
    scrollToSection("contact");
  });
});

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
    });
  }
}
