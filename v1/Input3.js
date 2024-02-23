class Input3 extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="flex items-center mt-5">
  <input type="text" maxlength="9" id="colorInput1" class="bg-gray-100 p-2 mr-[10px] w-36 text-lg placeholder:text-sm" placeholder="Enter Hex Code">
  <button onclick="renderColor(0)" class="font-sans bg-transparent p-2 uppercase rounded-full w-10 h-10" id="submitButton">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  </button>
</div>`

    const input = this.querySelector('#colorInput1')
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

customElements.define('input3-component', Input3)