document.addEventListener("DOMContentLoaded", () => {
    const moonIcon = document.querySelector(".moon");

    moonIcon.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        moonIcon.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });
});