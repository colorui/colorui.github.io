    let containerBgInput = document.getElementById('containerBg');
    let wordInInput = document.getElementById('wordIn');
    let wordOut = document.getElementById('wordOut');
    let textColorInput = document.getElementById('textColor');
    let textShadowColorInput = document.getElementById('textShadowColor');

    function sendForm() {
      let wordInValue = wordInInput.value.trim() || "colorui";
      let containerBg = containerBgInput.value || "#e9ef11";
      let textColor = textColorInput.value || "#fd32ca";
      let textShadowColor = textShadowColorInput.value || "transparent";

      document.body.style.backgroundColor = containerBg;
      document.querySelector('h1').style.color = textColor;
      document.querySelector('h1').style.textShadow = `20px 20px 0px ${textShadowColor}`;

      wordOut.textContent = wordInValue;

      adjustFontSize(); 
    }
    
    // REMOVED FOR IMPROVED UX
    // function clearInput(inputElement){
    //   if(inputElement.value){
    // use the previous value as the placeholder text
    //     inputElement.placeholder = inputElement.value;
    //   } else{
    // if no value use default placeholder text
    //     inputElement.placeholder;
    //   }
    // clear the input box of any value onfocus 
    //   inputElement.value = "";
    // }

    // render the text at maximum size in the viewport
    // issue with line height for smaller words
    function adjustFontSize() {
      let h1 = document.querySelector('h1');
      let targetWidth = window.innerWidth * 0.98;
      let minFontSize = 10;
      let maxFontSize = 1200;
      let fontSize;

      // binary search algorithm
      while (minFontSize <= maxFontSize) {
          fontSize = (minFontSize + maxFontSize) / 2;
          h1.style.fontSize = fontSize + 'px';
          h1.style.lineHeight = fontSize - 30 + 'px';

          let currentWidth = h1.getBoundingClientRect().width;

          if (currentWidth < targetWidth) {
              minFontSize = fontSize + 1;
          } else if (currentWidth > targetWidth) {
              maxFontSize = fontSize - 1;
          } else {
              break;
          }
      }
    }

    document.addEventListener('DOMContentLoaded', () => {
      sendForm(); 
      adjustFontSize(); 
    });

    window.onresize = adjustFontSize; 