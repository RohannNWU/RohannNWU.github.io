document.addEventListener("DOMContentLoaded", () => {
    const moonIcon = document.querySelector(".moon");
    const closeIcon = document.querySelector(".close");

    moonIcon.addEventListener("click", () => {
        alert("Dark mode toggled (this is just a placeholder)");
    });

    closeIcon.addEventListener("click", () => {
        alert("Menu closed (this is just a placeholder)");
    });
});