document.addEventListener("DOMContentLoaded", function () {
  const logoButton = document.querySelector("#logo");
  const homeButton = document.querySelector(".Home #home");
  const aboutLink = document.querySelector(".Nav #about-link");
  const projectsLink = document.querySelector(".Nav #projects-link");
  const contactLink = document.querySelector(".Nav #contact-link");

  logoButton.addEventListener("click", function () {
    scrollToSection("landing");
  });

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
    scrollToSection("footer");
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
