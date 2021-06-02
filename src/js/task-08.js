const input = document.querySelector('input');
const boxes = document.querySelector('#boxes');
const createBtn = document.querySelector('[data-action="render"]')
const clearBtn = document.querySelector('[data-action="destroy"]')


createBtn.addEventListener('click', createBoxes);
clearBtn.addEventListener('click', onClearBtn);


function createBoxes(amount) {
    amount = input.value

    for (let i = 0; i < amount; i += 1){
        const createMarkUp = document.createElement('div');
        createMarkUp.style = "background-color: " + 
        '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()
  ;
        let dimensions = 30;
        dimensions += i * 10
        createMarkUp.style.width = `${dimensions}px` ;
        createMarkUp.style.height = `${dimensions}px`;
        boxes.appendChild(createMarkUp)
    } 
}


function onClearBtn() {
    boxes.innerHTML = ''
}
 