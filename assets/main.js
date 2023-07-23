const cards = document.querySelectorAll("[data-card]");
const navLinks = document.getElementById("nav-links");
const hamburgerLinks = document.querySelectorAll("[data-nav-link]");
const hamburgerMenu = document.getElementById("hamburger-menu");

// ? For each card that is hovered over, the class active is added and removed when hovered away.

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

function updateStae() {
  if (window.innerWidth > 960) {
    hamburgerMenu.classList.remove("active");
    navLinks.classList.remove("hide");
  } else {
    hamburgerMenu.classList.add("active");
    navLinks.classList.add("hide");
  }
}

window.onload = () => {
  updateStae();
};
window.addEventListener("resize", () => {
  updateStae();
});
