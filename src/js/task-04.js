// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать
// значение счетчика на `1`.

// - Создай переменную `counterValue` в которой будет хранится текущее значение
//   счетчика.
// - Создай функции `increment` и `decrement` для увеличения и уменьшения значения
//   счетчика
// - Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса


const counter = {
    counterValue: 0,
    
    increment() {
        this.counterValue += 1
    },
    decrement() {
        this.counterValue -= 1
    }

}

const refs = {
    value : document.querySelector('#value'),
    incrementBtn: document.querySelector('#increment'),
    decrementBtn: document.querySelector('#decrement')
}

refs.incrementBtn.addEventListener('click', () => {
    counter.increment()
    value.textContent = counter.counterValue
})

refs.decrementBtn.addEventListener('click', () => {
    counter.decrement()
    value.textContent = counter.counterValue
})