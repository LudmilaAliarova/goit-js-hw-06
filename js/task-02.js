const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

ingredients.forEach(function (ingredient) {
  const lastItem = document.createElement("li");
  lastItem.textContent = `${ingredient}`;
  list.append(lastItem);
  lastItem.classList.add("item");
});
