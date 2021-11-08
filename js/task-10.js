function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.getElementsByTagName('input')[0];
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxEl = document.querySelector('#boxes')



createBtn.addEventListener('click', createBoxes);

destroyBtn.addEventListener('click', destroyBoxes);



function createBoxes() {
  destroyBoxes();

  let newElements = [];
  
  for (let i = 0; i < inputEl.value; i += 1) {
    let elementSize = 30 + i * 10;
    const element = document.createElement('div');
    element.style.width = `${elementSize}px`
    element.style.height = `${elementSize}px`
    element.style.backgroundColor = getRandomHexColor();
  
    newElements.push(element);

  }
 boxEl.append(...newElements)
};


function destroyBoxes() {
  boxEl.innerHTML = "";
};





