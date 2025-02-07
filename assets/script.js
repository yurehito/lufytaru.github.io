document.addEventListener("DOMContentLoaded", function () {
    console.log("Achie-Bot-Website Loaded Successfully!");

    // Hover effect for feature cards
    const featureCards = document.querySelectorAll(".feature-card");
    featureCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.05)";
            card.style.transition = "0.3s ease-in-out";
            card.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
            card.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
        });
    });

    // Quick actions hover effect
    const quickActions = document.querySelectorAll(".quick-actions a");
    quickActions.forEach(action => {
        action.addEventListener("mouseenter", () => {
            action.style.opacity = "0.8";
        });

        action.addEventListener("mouseleave", () => {
            action.style.opacity = "1";
        });
    });

    // Sidebar link active state
    const sidebarLinks = document.querySelectorAll(".sidebar ul li a");
    sidebarLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.style.backgroundColor = "#7289DA";
        }
    });
});
