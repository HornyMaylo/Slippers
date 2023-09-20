// Color choosing

const allColors = document.querySelectorAll('.color__item')
const activeColorBtn = document.querySelector('.colorActive')
const anotherColors = document.querySelectorAll('.anotherColor')

activeColorBtn.addEventListener('click', () => {
  activeColorBtn.classList.toggle('down');
  activeColorBtn.classList.toggle('up')
  anotherColors.forEach((elem) => {
    elem.classList.toggle('hide')
  })
})

allColors.forEach((elem) => {
   elem.addEventListener('click', (e) => {
      let initialValue = activeColorBtn.innerHTML;
      activeColorBtn.innerHTML = e.target.innerHTML;
      e.target.innerHTML = initialValue;
   })
})

// Size Choozing

const allSizes = document.querySelectorAll('.size__item')
const activeSizeBtn = document.querySelector('.sizeActive')
const anotherSizes = document.querySelectorAll('.anotherSize')

activeSizeBtn.addEventListener('click', () => {
    activeSizeBtn.classList.toggle('down')
    activeSizeBtn.classList.toggle('up')
  anotherSizes.forEach((elem) => {
    elem.classList.toggle('hide')
  })
})

allSizes.forEach((elem) => {
  elem.addEventListener('click', (e) => {
    let initialValue = activeSizeBtn.innerHTML
    activeSizeBtn.innerHTML = e.target.innerHTML
    e.target.innerHTML = initialValue
  })
})