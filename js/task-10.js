function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divBoxes = document.getElementById("boxes");
const inputEl = document.querySelector("input");

let newHeight = 20;
let newWidth = 20;

const buttonCreate = document.querySelector("[data-create");

const createBoxes = (amount) => {
  for (let i = 0; i < amount; i++) {
    const newBox = document.createElement("div");
    newBox.style.height = (newHeight += 10) + "px";
    newBox.style.width = (newWidth += 10) + "px";
    newBox.style.backgroundColor = getRandomHexColor();

    divBoxes.append(newBox);
  };
};

buttonCreate.addEventListener("click", (eventCreate) => {
  eventCreate.preventDefault();
  createBoxes(inputEl.value);
});

const buttonDestroy = document.querySelector("[data-destroy]");

buttonDestroy.addEventListener("click", () => {
  divBoxes.remove(divBoxes.childNodes);
  location.reload();
});
