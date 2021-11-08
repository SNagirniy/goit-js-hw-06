const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');


const changeFontSize = () => {
    const size = inputEl.value;
    textEl.style.fontSize = `${size}px`;
};

inputEl.addEventListener('change', changeFontSize);