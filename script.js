document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.getElementById("menuDropdown");
    const result = document.getElementById("result");

    dropdown.addEventListener("change", function() {
        const selected = dropdown.value;

        if (selected) {
            result.textContent = "You selected: " + selected.charAt(0).toUpperCase() + selected.slice(1);
        } else {
            result.textContent = "Please select an option from the menu."
        }
    });
});