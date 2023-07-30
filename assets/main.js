const cards = document.querySelectorAll("[data-card]");
const navLinks = document.getElementById("nav-links");
const hamburgerLinks = document.querySelectorAll("[data-nav-link]");
const hamburgerMenu = document.getElementById("hamburger-menu");

// TODO  MAKE THE HAMBURGER GO BACK TO IT'S ORIGINAL STATE WHEN A LINK IS CLICKED

cards.forEach((card) => {
  const cardImg = card.querySelector("img");
  const cardText = card.querySelector("p");
  card.addEventListener("mouseenter", () => {
    cardImg.classList.add("active");
    cardText.classList.add("active");
  });
  card.addEventListener("mouseleave", () => {
    cardImg.classList.remove("active");
    cardText.classList.remove("active");
  });
});

hamburgerMenu.addEventListener("click", () => {
  if (!navLinks.classList.contains("hide")) {
    navLinks.classList.add("hide");
  } else {
    navLinks.classList.remove("hide");
  }
  hamburgerLinks.forEach((link) => {
    link.classList.toggle("active");
  });
  navLinks.classList.toggle("active");
});

function updateState() {
  if (window.innerWidth > 960) {
    hamburgerMenu.classList.remove("active");
    navLinks.classList.remove("hide");
  } else {
    hamburgerMenu.classList.add("active");
    navLinks.classList.add("hide");
  }
}

window.onload = () => {
  updateState();
};
window.addEventListener("resize", () => {
  updateState();
});
