const valueEl = document.querySelector('#value');
const btnEls = document.querySelectorAll('#counter button');


btnEls[1].addEventListener("click", () => {
    valueEl.textContent = `${Number.parseInt(valueEl.textContent) + 1}`;
})
btnEls[0].addEventListener("click", () => {
    valueEl.textContent = `${Number.parseInt(valueEl.textContent) - 1}`;
})