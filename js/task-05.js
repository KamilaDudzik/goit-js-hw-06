const inputEl = document.querySelector("input#name-input");
const outputEl = document.querySelector("span#name-output");

inputEl.addEventListener("input", (event) => {
    if (inputEl.value !== "") {
        outputEl.textContent = event.currentTarget.value;
    } else {
        return outputEl.textContent = "Anonymous";
    }
});
