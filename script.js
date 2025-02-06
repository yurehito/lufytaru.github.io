document.addEventListener("DOMContentLoaded", () => {
    const featureCards = document.querySelectorAll(".feature-card");

    featureCards.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.querySelector(".description").style.display = "block";
        });

        card.addEventListener("mouseout", () => {
            card.querySelector(".description").style.display = "none";
        });
    });
});
