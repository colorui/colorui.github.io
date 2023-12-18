    let hexCodes = [undefined, undefined, undefined]

    function renderColor(index) {
      const inputId = `colorInput${index + 1}`
      const boxId = `colorDiv${index + 1}`
      const lightTextId = `contrast-light${index + 1}`
      const darkTextId = `contrast-dark${index + 1}`
      const headingId = `colorHeading${index + 1}`
      const paragraphId = `colorParagraph${index + 1}`
      const bgId = `colorBg${index + 1}`

      hexCodes[index] = document.getElementById(inputId).value
      hexCodes[index] = hexCodes[index].startsWith("#") ? hexCodes[index] : `#${hexCodes[index]}`

      if(/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/i.test(hexCodes[index])) {
        const box = document.getElementById(boxId)
        box.style.backgroundColor = hexCodes[index]
        box.classList.remove("box")

        document.getElementById(lightTextId).innerText = "white"
        document.getElementById(darkTextId).innerText = "black"

        document.getElementById(headingId).style.color = hexCodes[index]
        document.getElementById(paragraphId).style.color = hexCodes[index]

        document.getElementById(bgId).style.background = hexCodes[index]

        const currentColOneAId = `colOneA`
        const currentColOneBId = `colOneB`
        const currentColTwoAId = `colTwoA`
        const currentColTwoBId = `colTwoB`
        const currentColThreeAId = `colThreeA`
        const currentColThreeBId = `colThreeB`

        // ISSUES
        //  ideally we want two colours as well as three colours to render on input.
        //  currently it takes three colours inputted top to bottom to render correctly. 
        //  ^^^ as in the last input button renders correctly the other two do not.
        document.getElementById(currentColThreeAId).style.color = hexCodes[(index)]
        document.getElementById(currentColThreeBId).style.color = hexCodes[(index + 1)]
        
        document.getElementById(currentColTwoAId).style.color = hexCodes[(index + 2)]
        document.getElementById(currentColTwoBId).style.color = hexCodes[(index)]

        document.getElementById(currentColOneAId).style.color = hexCodes[(index + 1)]
        document.getElementById(currentColOneBId).style.color = hexCodes[(index + 2)]
        
      } else {
        document.body.style.overflowY = "hidden";

        const error = document.getElementById('error');
        error.classList.remove("hideError");
        error.classList.add("showError");

        document.getElementById('modal').classList.add("modal")
        
        setTimeout(() => {
          document.body.style.overflowY = "auto";

          error.classList.remove("showError");
          error.classList.add("hideError");
          
          document.getElementById('modal').classList.remove("modal")
        }, 4400);  
      }
    }
