function handleSelection() {
    const dropdown = document.getElementById("myDropdown");
    const selectedValue = dropdown.ariaValueMax;
    const result = document.getElementById("result");

    if (selectedValue) {
        result.textContent = "You selected: " + selectedValue;
    } else {
        result.testContent = "";
    }
}