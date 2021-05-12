// Напиши скрипт, который для каждого элемента массива `ingredients` создаст
// отдельный `li`, после чего вставит все `li` за одну операцию в список
// `ul.ingredients`. Для создания DOM-узлов используй `document.createElement()`.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const cardSetRef = document.querySelector('#ingredients')


const createCard = (ingredient) => {
    const createItemRef = document.createElement('li')
    createItemRef.textContent = ingredient

    return createItemRef
}


const creatAllCard = ingredients.map(ingredient => createCard(ingredient))

cardSetRef.append(...creatAllCard)
console.log(cardSetRef)