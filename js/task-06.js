const inputEl = document.querySelector('#validation-input');

const outOfFocus = () => {
    let maxLength = inputEl.getAttribute('data-length');

    if (inputEl.value.length !== Number(maxLength)) {
        inputEl.classList.add('invalid')
    } else {
        inputEl.classList.remove('invalid')
        inputEl.classList.add('valid')
    }
};


inputEl.addEventListener('blur', outOfFocus)

