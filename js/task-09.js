const bodyEl = document.querySelector('body');
const widget = document.querySelector('.color');
const btn = document.querySelector('.change-color');

btn.addEventListener('click', () => {
  const rndmClr = getRandomHexColor();
  console.log(rndmClr);
  widget.textContent = `${rndmClr}`
  bodyEl.style.backgroundColor = rndmClr;
})


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
