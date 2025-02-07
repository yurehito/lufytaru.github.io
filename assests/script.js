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

    // Handle sidebar navigation active state
    const currentPage = window.location.pathname.split("/").pop(); // Get the current file name
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active"); // Highlight the active link
        }
    });

    // Ensure sidebar navigation works smoothly
    console.log("Sidebar navigation updated.");
});
