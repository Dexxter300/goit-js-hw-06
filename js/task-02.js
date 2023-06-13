const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');

let answ = [];
ingredients.map(el => {
  const liInit = document.createElement('li')
  liInit.textContent = `${el}`
  liInit.classList.add('item');
  answ.push(liInit)
})

list.before(...answ)



// ingredients.forEach(ingredient => {
//   let listLi = document.createElement('li');
//   listLi.textContent = ingredient;
//   list.append(listLi);
// })