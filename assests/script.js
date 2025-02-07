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

    // Fix emoji alignment in overview, feature cards, and quick actions
    const overviewIcons = document.querySelectorAll(".overview .card i");
    overviewIcons.forEach(icon => {
        icon.style.fontSize = "26px"; // Adjust emoji size
        icon.style.display = "block"; // Keep emoji above text
        icon.style.marginBottom = "8px";
    });

    const featureIcons = document.querySelectorAll(".feature-card i");
    featureIcons.forEach(icon => {
        icon.style.fontSize = "22px"; // Match Overview size
        icon.style.display = "block";
        icon.style.marginBottom = "6px";
    });

    const quickActionIcons = document.querySelectorAll(".quick-actions .action-card i");
    quickActionIcons.forEach(icon => {
        icon.style.fontSize = "18px"; // Smaller size for left-side icons
        icon.style.marginRight = "8px"; // Space between icon & text
    });
});
