const inputEl = document.querySelector("#validation-input");
const check = 0;

inputEl.addEventListener('blur', (event) => {
    // console.log(event.currentTarget.value.length);
    if (inputEl.dataset.length == event.currentTarget.value.length) {
        inputEl.classList.remove('invalid')
        inputEl.classList.add('valid');

    } else {
        inputEl.classList.remove('valid')
        inputEl.classList.add('invalid');
    }
});