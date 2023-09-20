const products = document.querySelectorAll('.product');
const preView = document.querySelector('.opened');

products.forEach((elem) => {
   elem.addEventListener('click', (e) => {
      let src = e.target.getAttribute('src');
      preView.setAttribute('src', src);
      document.querySelector('.opacity').classList.remove('opacity');
      e.target.classList.add('opacity');
   })
})