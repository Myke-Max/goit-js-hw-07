// Используй массив объектов `images` для создания тегов `img` вложенных в `li`.
// Для создания разметки используй шаблонные строки и `insertAdjacentHTML()`.

// - Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// - Добавь минимальное оформление галереи флексбоксами или гридами через
//   css-классы.



const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryItemRef = document.querySelector('#gallery')

 
const newImg = images.map(({ url, alt }) => {
    
    // Танцевал с бубном =)
    // const imgRef = document.createElement('img')
    // imgRef.src = url
    // imgRef.alt = alt
    //  imgRef.width = '320'
    // const newItemRef = document.createElement('li')
    // newItemRef.insertAdjacentHTML('afterbegin', imgRef)
    // console.log(newItemRef)

  return `<li> <img src = ${url} alt = ${alt} width = "400"> </li>`
}).join(' ')
galleryItemRef.insertAdjacentHTML('afterbegin',newImg)
console.log(galleryItemRef)





