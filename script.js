// Convert HEX to RGB
function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgb(${r}, ${g}, ${b})`;
}

// Select elements
const colorPicker = document.getElementById("colorPicker");
const colorBox = document.getElementById("colorBox");
const hexCode = document.getElementById("hexCode");
const rgbCode = document.getElementById("rgbCode");

// Update display when the color changes
colorPicker.addEventListener("input", () => {
    const selectedColor = colorPicker.value;

    // Update the display box color
    colorBox.style.backgroundColor = selectedColor;

    // Display the HEX code
    hexCode.textContent = selectedColor;

    // Convert HEX to RGB and display it
    rgbCode.textContent = hexToRgb(selectedColor);
});
