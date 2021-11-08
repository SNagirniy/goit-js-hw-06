const inputEl = document.querySelector('#name-input');
const titleNameEl = document.querySelector('#name-output');

inputEl.addEventListener('input', () => {
  
    titleNameEl.textContent = inputEl.value === ""? 'Anonymous' : inputEl.value;
});



