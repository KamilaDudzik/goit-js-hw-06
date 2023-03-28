const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector("#ingredients");

ingredients.forEach(ingredient => {
  const listEl = document.createElement("li");
  listEl.textContent = ingredient;
  listEl.classList.add("item");
  ingredientsEl.append(listEl);
});

// test deploy