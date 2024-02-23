class Row1 extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="flex flex-col mt-4">

    <div class="flex px-2 items-center justify-between h-24 box" id="colorDiv3">
      <p class="font-bold text-[48px]" id="colThreeA">Logo</p>
      <p class="font-bold text-[36px]" id="colThreeB">Identity</p>
    </div>
    
    <div class="flex px-2 items-center justify-between h-24"> 
      <h1 class="text-5xl -ml-2 -mt-5" id="colorHeading3">UPPERCASE</h1>
      
      <div id="colorBg3" class="font-sans -mt-5 flex justify-between p-2 w-32 h-10">
        <p id="contrast-light3" class="text-white"></p>
        <p id="contrast-dark3" class="text-black"></p>
      </div>
    
    </div>

    <p class="text-xl -mt-7 leading-6" id="colorParagraph3">Pioneer the future and eat a lot of fruit. Dress up in a suit, with a boot.</p>
  </div>
 `
  }
}

customElements.define('row1-component', Row1)