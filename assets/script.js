document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".feature-card, .stat-box, .actions a");

    cards.forEach((card) => {
        card.addEventListener("mouseover", () => {
            card.style.transform = "scale(1.1)";
            card.style.transition = "transform 0.3s ease-in-out";
        });

        card.addEventListener("mouseout", () => {
            card.style.transform = "scale(1)";
        });
    });
});
