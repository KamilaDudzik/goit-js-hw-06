const value = document.getElementById("value");
let counterValue = 0;

const valueLower = document.querySelector(`[data-action="decrement"]`);
valueLower.addEventListener("click", () => {
    value.textContent = --counterValue;
});

const valueHigher = document.querySelector(`[data-action="increment"]`);
valueHigher.addEventListener("click", () => {
    value.textContent = ++counterValue;
});
