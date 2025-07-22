document.addEventListener("DOMContentLoaded", () => {
    const moonIcon = document.querySelector(".moon");
    const closeIcon = document.querySelector(".close");

    moonIcon.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        moonIcon.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });

    closeIcon.addEventListener("click", () => {
        alert("Menu closed (this is just a placeholder)");
    });
});