
let bars = document.querySelector('.bars');
bars.onclick = function() {
    bars.classList.toggle('active')
}


const menuItems = document.querySelector('.menu-items')
const header = document.querySelector('header')
const body = document.querySelector('body')
const lamp = document.getElementById('lamp');
lamp.onclick = function() {
    lamp.classList.toggle('active');
    body.classList.toggle('active');
    header.classList.toggle('active');
    menuItems.classList.toggle('active');
}
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let item =document.querySelectorAll('.item')
    document.querySelector('.blog-slide').appendChild(item[0])
})

prev.addEventListener('click', function(){
    let item =document.querySelectorAll('.item')
    document.querySelector('.blog-slide').prepend(item[item.length - 1]) // here the Length of item =6
})