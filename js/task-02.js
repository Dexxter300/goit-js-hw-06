const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');

let answ = "";
ingredients.map(el => {
  answ += `<li>${el}</li>`
})
list.innerHTML = answ;



// ingredients.forEach(ingredient => {
//   let listLi = document.createElement('li');
//   listLi.textContent = ingredient;
//   list.append(listLi);
// })