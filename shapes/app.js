function generateShapes(colors = null) {
  const container = document.getElementById('shapesContainer');
  container.innerHTML = ''; // Clear any existing shapes

  const defaultColors = [
    document.getElementById('color1').value,
    document.getElementById('color2').value,
    document.getElementById('color3').value,
    document.getElementById('color4').value,
    document.getElementById('color5').value
  ];

  const finalColors = colors || defaultColors;

  const shapeStyles = [
    { className: 'circleLinesDiagonal', style: (color) => `
        repeating-linear-gradient(
          45deg,
          ${color || "red"},
          ${color || "red"} 10px,
          white 10px,
          white 15px
        )` },
    { className: 'circleLinesDown', style: (color) => `
        repeating-linear-gradient(
          90deg,
          ${color || "red"},
          ${color || "red"} 10px,
          white 10px,
          white 19px
        )` },
    { className: 'circleLinesAcross', style: (color) => `
        repeating-linear-gradient(
          180deg,
          ${color || "red"},
          ${color || "red"} 10px,
          white 10px,
          white 19px
        )` },
    { className: 'dotted', style: (color) => `10px dotted ${color || "red"}` },
    { className: 'double', style: (color) => `10px double ${color || "red"}` },
    { className: 'solid', style: (color) => color || "red" },
    { className: 'dashed', style: (color) => `10px dashed ${color || "red"}` },
    { className: 'square2', style: (color) => `
        repeating-linear-gradient(
          90deg,
          ${color || "red"},
          ${color || "red"} 10px,
          white 10px,
          white 19px
        )` },
    { className: 'square3', style: (color) => `
        repeating-linear-gradient(
          -45deg,
          ${color || "red"},
          ${color || "red"} 10px,
          white 10px,
          white 19px
        )` },
    { className: 'square4', style: (color) => `
        repeating-linear-gradient(
          180deg,
          ${color || "red"},
          ${color || "red"} 10px,
          white 10px,
          white 18px
        )` },
    { className: 'square', style: (color) => color || "red" },
  ];

  // Render rows based on colors
  finalColors.forEach((color) => {
    const row = document.createElement('div');
    row.className = 'flex items-center justify-center gap-2';

    // Create a column for each shape in this row
    shapeStyles.forEach((style) => {
      const div = document.createElement('div');
      div.className = `circle ${style.className}`;

      // Apply the relevant style
      if (style.className === 'solid' || style.className === 'square') {
        div.style.background = style.style(color);
      } else if (style.className === 'circleLinesDiagonal' || style.className === 'circleLinesDown' || style.className === 'circleLinesAcross' || style.className === 'square2' || style.className === 'square3'|| style.className === 'square4') {
        div.style.background = style.style(color);
      } else {
        div.style.border = style.style(color);
      }

      row.appendChild(div);
    });

    container.appendChild(row);
  });
}








// Function to handle JSON file upload
function handleFileUpload(event) {
  const file = event.target.files[0];
  if (!file) {
    alert("No file selected!");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    try {
      const jsonData = JSON.parse(e.target.result);
      if (Array.isArray(jsonData)) {
        generateShapes(jsonData); // Call generateShapes with uploaded colors
      } else {
        alert("Invalid JSON file. Please upload an array of 5 colors.");
      }
    } catch (error) {
      alert("Error parsing JSON file. Please check the file format.");
    }
  };
  reader.readAsText(file);
}

document.addEventListener("DOMContentLoaded", () => {  
  // Add event listener for file input
  const fileInput = document.getElementById('jsonFile');
  fileInput.addEventListener('change', handleFileUpload);

  generateShapes(); // Initial generation
});
