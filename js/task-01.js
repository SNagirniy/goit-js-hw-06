//Выводит в консоль количество категорий

const categoriesListEl = document.querySelector('#categories');
console.log('Number of categories: ' + categoriesListEl.children.length);

//Выводит в консоль текст заголовка элемента и количество элементов в категории

const categoriesItemEl = document.querySelectorAll(".item");

const logTitleAndElNum = array => {
    for (let i = 0; i < categoriesItemEl.length; i += 1) {
        const titleEl = categoriesItemEl[i].firstElementChild;
        console.log('Category: ' + titleEl.textContent);

        const valueItemEl = categoriesItemEl[i].querySelector('ul');
        console.log('Elements: ' + valueItemEl.children.length);
    }
};

console.log(logTitleAndElNum(categoriesItemEl));

