class Input1 extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="flex items-center">
      <input type="text" maxlength="9" id="colorInput3" class="bg-gray-100 p-2 mr-[10px] w-36 text-lg placeholder:text-sm" placeholder="Enter Hex Code" autofocus>
      <button onclick="renderColor(2)" class="font-sans bg-transparent p-2 rounded-full uppercase w-10 h-10" id="submitButton">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
        </svg>
      </button>
    </div>`

    const input = this.querySelector('#colorInput3')
    const button = this.querySelector('#submitButton')

    input.addEventListener('focus', () => {
      button.classList.add('focused')
    })

    input.addEventListener('blur', () => {
      button.classList.remove('focused')
    })

    document.addEventListener('themeChange', () => {
      const body = document.body
      const button = this.querySelector('#submitButton')

      // Check if the background is black and update the stroke color
      if (body.style.background === "black") {
        button.querySelector('svg').setAttribute('stroke', 'white')
      } else {
        button.querySelector('svg').setAttribute('stroke', 'currentColor')
      }
    })
  }
}

customElements.define('input1-component', Input1)
