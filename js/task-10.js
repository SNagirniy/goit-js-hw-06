function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.getElementsByTagName('input')[0];
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxContainerEl = document.querySelector('#boxes')



createBtn.addEventListener('click', createBoxes);

destroyBtn.addEventListener('click', destroyBoxes);

//варіант 1: створює нові елементи. При кожному рендері розміри елементів починаються зі стартового значення.

/*function createBoxes() {

  let newElements = [];
  
  for (let i = 0; i < inputEl.value; i += 1) {
    let elementSize = 30 + i * 10;
    const element = document.createElement('div');
    element.style.width = `${elementSize}px`
    element.style.height = `${elementSize}px`
    element.style.backgroundColor = getRandomHexColor();
  
    newElements.push(element);

  }

 boxContainerEl.append(...newElements)
};*/


//варіант 2: створює нові елементи. При кожному рендері розміри елементів продовжують збільшуватись.

function createBoxes() {

  let newElements = [];
  let elementSize = 30;


  for (let i = 0; i < inputEl.value; i += 1) {
    const element = document.createElement('div');
    element.style.backgroundColor = getRandomHexColor();
    
    newElements.push(element);
  };
  boxContainerEl.append(...newElements);

  const newBoxEl = boxContainerEl.querySelectorAll("div");
    newBoxEl.forEach((box) => {
      box.style.width = `${elementSize}px`
      box.style.height = `${elementSize}px`

      elementSize += 10;
    
  })
};

function destroyBoxes() {
  boxContainerEl.innerHTML = "";
};










