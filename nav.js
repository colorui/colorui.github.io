document.addEventListener("DOMContentLoaded", () => {
    const navContainer = document.getElementById("nav-container");

    // Dynamically insert the navigation HTML
    navContainer.innerHTML = `
        <p id="instruction" class="hidden lg:block text-xs absolute top-2.5 left-2.5">Press M Key</p>
        <!-- Hamburger Icon -->
        <div class="hamburger fixed top-6 left-5 w-7 h-7 cursor-pointer z-[1000] transition-transform duration-300 ease-in-out" id="hamburger">
            <span class="block w-full h-1 bg-gray-800 my-1.5 transition-all duration-300 ease-in-out"></span>
            <span class="block w-full h-1 bg-gray-800 my-1.5 transition-all duration-300 ease-in-out"></span>
            <span class="block w-full h-1 bg-gray-800 my-1.5 transition-all duration-300 ease-in-out"></span>
        </div>

        <!-- Navigation Overlay -->
        <div class="nav-overlay fixed top-0 left-0 w-screen h-screen bg-white flex justify-center items-center translate-x-full transition-transform duration-100 ease-in-out z-[999]" id="navOverlay">
            <p id="instruction-close" class="hidden lg:block text-xs absolute top-2.5 right-5">Press Esc Key</p>
            <span class="close absolute top-5 right-7 text-2xl cursor-pointer z-[1000] hover:text-black" id="close">x</span>
            <div class="flex flex-col lg:flex-row gap-2">
                <a href="/visualiser/" class="bg-gray-200 p-1 text-blue-700 mb-3">Visualiser</a>
                <a href="/gradient/" class="bg-gray-200 p-1 text-blue-700 mb-3">Gradient</a>
                <a href="/shapes/" class="bg-gray-200 p-1 text-blue-700 mb-3">Shapes</a>
                <a href="/ui" class="bg-gray-200 p-1 text-blue-700 mb-3">UI Tester</a>
                <a href="/" class="bg-gray-200 p-1 text-blue-700 mb-3">Color Picker</a>
                <a href="/generator" class="bg-gray-200 p-1 text-blue-700 mb-3">Color Generator</a>
                <a href="/vault" class="bg-gray-200 p-1 text-blue-700 mb-3">Color Vault</a>
            </div>
        </div>
    `;

    // Now that the DOM is ready, attach event listeners
    const hamburger = document.getElementById("hamburger");
    const navOverlay = document.getElementById("navOverlay");
    const closeBtn = document.getElementById("close");
    const instruction = document.getElementById("instruction");

    const toggleModal = (shouldOpen) => {
        if (window.innerWidth > 1280) {
            instruction.classList.toggle("hidden", shouldOpen);
        }
        if (shouldOpen) {
            navOverlay.classList.remove("translate-x-full");
            navOverlay.classList.add("translate-x-0");
        } else {
            navOverlay.classList.remove("translate-x-0");
            navOverlay.classList.add("translate-x-full");
        }
        hamburger.classList.toggle("active", shouldOpen);
    };

    // Event listeners
    hamburger.addEventListener("click", () => toggleModal(true));
    closeBtn.addEventListener("click", () => toggleModal(false));
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") toggleModal(false);
        if (e.key.toLowerCase() === "m") toggleModal(true);
    });
});
