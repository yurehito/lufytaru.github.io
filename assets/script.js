document.addEventListener("DOMContentLoaded", () => {
    const statBoxes = document.querySelectorAll(".stat-box");

    statBoxes.forEach(box => {
        box.addEventListener("mouseenter", () => {
            box.style.transform = "translateY(-5px) scale(1.05)";
            box.style.boxShadow = "8px 8px 16px #0e0e0e, -8px -8px 16px #2a2a2a";
        });

        box.addEventListener("mouseleave", () => {
            box.style.transform = "translateY(0) scale(1)";
            box.style.boxShadow = "4px 4px 8px #0e0e0e, -4px -4px 8px #2a2a2a";
        });
    });
});
