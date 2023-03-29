const inputEl = document.querySelector("input");
const spanEl = document.getElementById("text");

inputEl.addEventListener("input", () => {
    let size = inputEl.value;
    spanEl.style.fontSize = size + "px";
});