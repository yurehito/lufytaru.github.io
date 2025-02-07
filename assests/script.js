document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded!");

    // Add hover effects for feature cards
    const featureCards = document.querySelectorAll(".feature-card");
    featureCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-5px)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
        });
    });

    // Add hover effects for overview cards
    const overviewCards = document.querySelectorAll(".overview .card");
    overviewCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-5px)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
        });
    });

    // Add hover effects for quick action cards
    const actionCards = document.querySelectorAll(".action-card");
    actionCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-5px)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
        });
    });
});
