// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в `ul#categories`, то есть
// элементов `li.item`. Получится `'В списке 3 категории.'`.

// Для каждого элемента `li.item` в списке `ul#categories`, найдет и выведет в
// консоль текст заголовка элемента (тега h2) и количество элементов в категории
// (всех вложенных в него элементов `li`).

// Например для первой категории получится:

// - Категория: Животные
// - Количество элементов: 4

const catagoryListRef = document.querySelector('#categories');
console.log(catagoryListRef);
const catagoryItemRef = catagoryListRef.children
console.log(`В списке ${catagoryItemRef.length} категории.`)

for (const item of catagoryItemRef) {
    console.log(`${item.querySelector('h2').textContent}`)
    console.log(`${item.querySelector('ul').children.length}`)
}

const titleItemRef = document.querySelector('h2').textContent
console.log(titleItemRef)