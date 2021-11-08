function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body')
const colorTextEl = document.querySelector('.color');
const buttonEl = document.querySelector('.change-color');

buttonEl.addEventListener('click', changeColor);

function changeColor () {
  const currentColor = getRandomHexColor();
  bodyEl.style.backgroundColor = currentColor;
  colorTextEl.textContent = currentColor;
  
};


