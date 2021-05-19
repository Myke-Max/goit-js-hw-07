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
    inputValue.classList.add('invalid')
    
    validWidth === currentWidth && event.currentTarget.value.trim(' ') !== ''
       
        ? inputValue.classList.replace('invalid','valid')
        
        : inputValue.classList.replace('valid','invalid')  
}

inputValue.addEventListener('blur', validInput)
