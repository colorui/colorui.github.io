class ErrorModal extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div id="error" class="hideError -mt-4">
  <div id="modal" class="-mt-[25vh] text-center cursor-pointer">
    <p class="text-4xl md:text-7xl text-red-500 mb-2 md:mb-1">Invalid Hex Code</p>
    <p class="text-md md:text-2xl text-green-700 mb-1">Please enter a valid 3, 6 or 8 digit hex value</p>
    <p class="text-lg md:text-2xl text-slate-900">Examples: #111, #aebcdd, #5a5c5611</p>
  </div>
</div>`
  }
}

customElements.define('errormodal-component', ErrorModal)

