// Напиши скрипт который, при наборе текста в инпуте `input#name-input` (событие
// input), подставляет его текущее значение в `span#name-output`. Если инпут
// пустой, в спане должна отображаться строка `'незнакомец'`.


const input = document.querySelector('#name-input')
const inputValue = document.querySelector('#name-output')


const changeInput = (event) => {
    inputValue.textContent = event.currentTarget.value

    if (event.currentTarget.value.length === 0) {
        inputValue.textContent = 'незнакомец' 
    }
}

input.addEventListener('input', changeInput)