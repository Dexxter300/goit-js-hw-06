const formEl = document.querySelector('.login-form');
const emailField = document.querySelectorAll('.login-form input');
const submitBtn = document.querySelector('.login-form button');


formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    if (emailField[0].value === '' || emailField[1].value === '') {
        alert('fill all fields');
    } else {
        console.log(event.currentTarget)
        const {
            elements: { email, password }
        } = event.currentTarget;
        console.log({
            email: email.value,
            password: password.value
        })
        formEl.reset()
    }
});
