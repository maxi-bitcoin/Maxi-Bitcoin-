const overLay = document.querySelector('.overlay')
const over = document.querySelector(".over")
const wrapp = document.querySelector('.wrapper')
const header = document.querySelector(".header")
const Road = document.querySelector('.btn2')
const item = document.querySelector('.item')

over.addEventListener('click', function(){
    wrapp.classList.toggle('open')
})

Road.addEventListener('click', function(){
    item.classList.toggle('active')
})