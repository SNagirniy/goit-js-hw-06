//Выводит в консоль количество категорий

const categoriesListEl = document.querySelector('#categories');
console.log(`'Number of categories: ' ${categoriesListEl.children.length}`);

//Выводит в консоль текст заголовка элемента и количество элементов в категории

const categoriesItemEl = document.querySelectorAll(".item");

categoriesItemEl.forEach((element) => {
    console.log(`Category: ${element.firstElementChild.textContent}`)
    console.log(`Elements: ${element.lastElementChild.children.length}`)
});

/*const logTitleAndElNum = array => {
    for (let i = 0; i < array.length; i += 1) {
        const titleEl = array[i].firstElementChild;
        console.log('Category: ' + titleEl.textContent);

        const valueItemEl = array[i].querySelector('ul');
        console.log('Elements: ' + valueItemEl.children.length);
    }
};

console.log(logTitleAndElNum(categoriesItemEl));*/

