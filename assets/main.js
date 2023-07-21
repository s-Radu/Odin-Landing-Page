const cards = document.querySelectorAll("[data-card]");

// ? For each card that is hovered over, the class active is added and removed when hovered away.

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    const cardImg = card.querySelector("img");
    const cardText = card.querySelector("p");
    cardImg.classList.add("active");
    cardText.classList.add("active");
  });
  card.addEventListener("mouseleave", () => {
    const cardImg = card.querySelector("img");
    const cardText = card.querySelector("p");
    cardImg.classList.remove("active");
    cardText.classList.remove("active");
  });
});
