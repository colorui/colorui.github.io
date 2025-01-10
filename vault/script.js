document.addEventListener('DOMContentLoaded', () => {
  const colorHexInput = document.getElementById('colorHex');
  const addColorBtn = document.getElementById('addColorBtn');
  const exportColorsBtn = document.getElementById('exportColorsBtn');
  const importColorsBtn = document.getElementById('importColorsBtn');
  const importColorsInput = document.getElementById('importColorsInput');

  const paletteContainer = document.querySelector('.container');

  // Load existing colors from localStorage on page load
  const colors = JSON.parse(localStorage.getItem('colors')) || [];

  // Function to create and append a new color item
  function createItem(color) {
    const elmItem = document.createElement('div');
    elmItem.className = 'palette__item';

    const elmColour = document.createElement('div');
    elmColour.className = 'palette__colour';
    elmColour.style.backgroundColor = color;

    const elmMessage = document.createElement('div');
    elmMessage.className = 'palette__message';
    elmMessage.textContent = 'Copied!';
    elmMessage.style.opacity = '0'; // Hide the message initially

    const elmDesc = document.createElement('div');
    elmDesc.className = 'palette__desc';
    const elmDescX = document.createElement('div');
    elmDescX.className = 'palette__descX';
    elmDescX.innerHTML = `<p>${color}</p> <p class="text-red-500 delete cursor-pointer">X</p>`;

    elmItem.appendChild(elmColour);
    elmItem.appendChild(elmMessage);
    elmDesc.appendChild(elmDescX);
    elmItem.appendChild(elmDesc); // Move the hex code below the color block

    // Copy to clipboard when the color block is clicked
    elmColour.addEventListener('click', () => {
      navigator.clipboard.writeText(color)
        .then(() => {
          elmMessage.style.opacity = '1'; // Show the message
          setTimeout(() => {
            elmMessage.style.opacity = '0'; // Hide the message after a delay
          }, 1500);
        })
        .catch(err => {
          console.error('Failed to copy text to clipboard:', err);
        });
    });

    // Delete color when the red "X" is clicked
    elmDescX.querySelector('.delete').addEventListener('click', (event) => {
      event.stopPropagation(); // Prevent the event from bubbling up
      const confirmDelete = confirm('Are you sure you wish to delete this color?');
      if (confirmDelete) {
        const index = colors.indexOf(color);
        if (index > -1) {
          colors.splice(index, 1);
          localStorage.setItem('colors', JSON.stringify(colors));
          paletteContainer.removeChild(elmItem);
        }
      }
    });

    paletteContainer.appendChild(elmItem);
  }

  // Render all stored colors
  colors.forEach(color => {
    createItem(color);
  });

  // Add color on button click
  addColorBtn.addEventListener('click', () => {
    let colorHex = colorHexInput.value.trim(); // Trim any leading/trailing whitespace

    if (colorHex) {
      // Add a # if the color code doesn't start with one
      if (!colorHex.startsWith('#')) {
        colorHex = '#' + colorHex;
      }

      // Validate the hex color format (optional, depending on your requirements)
      if (/^#[0-9A-Fa-f]{6}$/.test(colorHex)) {
        if (!colors.includes(colorHex)) {  // Check if the color already exists
          // Add the new color to the array
          colors.push(colorHex);
          
          // Save the updated array to localStorage
          localStorage.setItem('colors', JSON.stringify(colors));
          
          // Create and append the new color item to the palette
          createItem(colorHex);

          // Clear the input field
          colorHexInput.value = '';
        } else {
          alert('This color already exists in the palette.');
        }
      } else {
        alert('Please enter a valid hex color code.');
      }
    } else {
      alert('Please enter a hex color.');
    }
  });

  // Export all colors to a JSON file
exportColorsBtn.addEventListener('click', () => {
  // Check if there are any colors to export
  if (colors.length === 0) {
    alert('No colors to export.');
    return; // Exit the function if no colors are available
  }

  // Proceed with exporting if there are colors
  const dataStr = JSON.stringify(colors, null, 2);
  const blob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'colors.json';
  a.click();
  URL.revokeObjectURL(url);
});
  // Trigger the file input when import button is clicked
  importColorsBtn.addEventListener('click', () => {
    importColorsInput.click();
  });

  // Import colors from a JSON file
  importColorsInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedColors = JSON.parse(e.target.result);
          if (Array.isArray(importedColors)) {
            // Merge the imported colors with existing ones, avoiding duplicates
            const updatedColors = [...new Set([...colors, ...importedColors])];
            localStorage.setItem('colors', JSON.stringify(updatedColors));
            // Clear the current display and re-render all colors
            paletteContainer.innerHTML = '';
            updatedColors.forEach(color => createItem(color));
          } else {
            alert('Invalid color file format');
          }
        } catch (err) {
          alert('Failed to import colors: ' + err.message);
        }
      };
      reader.readAsText(file);
    }
  });
});
