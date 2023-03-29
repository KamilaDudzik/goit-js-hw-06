const inputEl = document.querySelector("input");
// const dataLength = document.querySelector(`input[data-length="6]`)

inputEl.addEventListener("blur", () => {
    if (inputEl.value.length === +inputEl.dataset.length) {
        inputEl.classList.add("valid")
    } else {
        inputEl.classList.add("invalid");
    }
});