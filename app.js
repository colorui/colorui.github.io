    let wordInInput = document.getElementById('wordIn');
    let wordOut = document.getElementById('wordOut');
   
    let containerBgInput = document.getElementById('containerBg');
    let textColorInput = document.getElementById('textColor');
   
    let primaryColorInput = document.getElementById('textPrimaryColor');
    let secondaryColorInput = document.getElementById('textSecondaryColor');

    function sendForm() {      
      let wordInValue = wordInInput.value.trim() || "colorui";

      let containerBg = containerBgInput.value || "#fff";
      document.body.style.backgroundColor = containerBg;

      let textColor = textColorInput.value || "#000";
      let paragraphs = document.querySelectorAll('p');
      paragraphs.forEach((paragraph) => {
          paragraph.style.color = textColor;
      });

      
      let primaryColor = primaryColorInput.value || "#f8f8f8";
      let secondaryColor = secondaryColorInput.value || "#f8f8f8";

      const primaryElements = document.getElementsByClassName('primary');
      for (let i = 0; i < primaryElements.length; i++) {
          primaryElements[i].style.backgroundColor = `${primaryColor}`;
      }

      const secondaryElements = document.getElementsByClassName('secondary');
      for (let i = 0; i < secondaryElements.length; i++) {
          secondaryElements[i].style.backgroundColor = `${secondaryColor}`;
      }

      // .style.border = `2px solid ${primaryColor}`
// 
// 
// 


      document.querySelector('.pie-chart').style.background = `conic-gradient(${primaryColor} 0% 65%, ${secondaryColor} 65% 90%, #e2e8f0 90% 100%)`;

      document.querySelector('.circle-border-both').style.background = `conic-gradient(${primaryColor} 0% 65%, ${secondaryColor} 65% 80%, #e2e8f0 90% 100%)`;
      
      document.querySelector('.square').style.background = `conic-gradient(${primaryColor} 0% 35%, ${secondaryColor} 35% 70%, #e2e8f0 70% 100%)`;


// 
// 
// 


      const gradientPElements = document.getElementsByClassName('gradient-p');
      for (let i = 0; i < gradientPElements.length; i++) {
          gradientPElements[i].style.background = `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`;
      }
      
      const gradientSElements = document.getElementsByClassName('gradient-s');
      for (let i = 0; i < gradientSElements.length; i++) {
          gradientSElements[i].style.background = `linear-gradient(to left, ${primaryColor} 50%, ${secondaryColor} 50%)`;
      }



      wordOut.textContent = wordInValue;
      wordOut.style.color = textColorInput.value || "#000";
    }
    
    document.addEventListener('DOMContentLoaded', () => {
      sendForm(); 
    });