// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое
// на правильное количество символов.

// - Сколько символов должно быть в инпуте, указывается в его атрибуте
//   `data-length`.
// - Если введено подходящее количество, то `border` инпута становится зеленым,
//   если неправильное - красным.

// Для добавления стилей, используй CSS-классы `valid` и `invalid`.


const inputValue = document.querySelector('#validation-input')

const validInput = (event) => {
    const validWidth = Number(inputValue.dataset.length)
    const currentWidth = event.target.value.length
    console.log(validWidth)
    console.log(currentWidth)


    validWidth === currentWidth
        ? inputValue.classList.add('valid') &&
        inputValue.classList.remove('invalid')
        
        : inputValue.classList.add('invalid') &&
        inputValue.classList.remove('valid')
     
}

inputValue.addEventListener('blur', validInput)