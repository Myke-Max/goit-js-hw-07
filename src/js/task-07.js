// Напиши скрипт, который реагирует на изменение значения `input#font-size-control`
// (событие input) и изменяет инлайн-стиль `span#text` обновляя свойство
// `font-size`. В результате при перетаскивании ползунка будет меняться размер
// текста.
const inputRangeRef = document.querySelector('#font-size-control')
console.log(inputRangeRef.value)
const inputTextRef = document.querySelector('#text')

const onInput = () => {
    

    inputTextRef.style.fontSize = `${inputRangeRef.value}px`
}

inputRangeRef.addEventListener("input",onInput)

 