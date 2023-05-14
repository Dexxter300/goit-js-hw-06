const counterEl = document.querySelector('#controls input')
const divBox = document.querySelector('#boxes');
const btns = document.querySelectorAll('#controls button');

btns[0].addEventListener('click', () => {
  const amount = counterEl.value;

  createBoxes(amount);

})

btns[1].addEventListener('click', () => {
  const amount = counterEl.value;

  destroyBoxes(amount);
})


function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const divSample = document.createElement('div');
    divSample.style.width = `${(i * 10) + 30}px`;
    divSample.style.paddingBottom = `${(i * 10) + 30}px`;
    divSample.style.backgroundColor = getRandomHexColor();
    divBox.append(divSample);
    // console.log(divSample);
  }
}


function destroyBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const divArr = document.querySelector('#boxes div');
    divArr.remove();
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
