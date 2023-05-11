const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');
ingredients.forEach(ingredient => {
  let listLi = document.createElement('li');
  listLi.textContent = ingredient;
  list.append(listLi);
})