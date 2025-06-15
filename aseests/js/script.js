document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.getElementById("mobileMenuButton");
  const navRight = document.querySelector(".nav_right");

  mobileMenuButton.addEventListener("click", function () {
    navRight.classList.toggle("active");
  });

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".nav_container")) {
      navRight.classList.remove("active");
    }
  });

  document.querySelectorAll(".nav_link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      navRight.classList.remove("active");

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Add scroll margin to account for fixed header
  const sections = document.querySelectorAll("section, div[id]");
  sections.forEach((section) => {
    section.style.scrollMarginTop = "100px";
  });
});
