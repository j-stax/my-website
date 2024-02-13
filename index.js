const themeElem = document.getElementById("checkbox");
themeElem.addEventListener("change", () => {
    document.body.classList.toggle("light-mode");
    document.querySelector("h1").classList.toggle("glow");
})