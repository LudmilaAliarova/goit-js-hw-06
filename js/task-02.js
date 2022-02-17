const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
const items = ingredients.map((ingredient) => {
  const lastItem = document.createElement("li");
  lastItem.textContent = `${ingredient}`;
  
  lastItem.classList.add("item");
  console.log(lastItem);
  return lastItem;
});
console.log(items);
list.append(...items);
