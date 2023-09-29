$(document).ready(function(){
    $('.hamburger').on('click', function(){
        $(this).toggleClass('hamburger__active');
        $('.menu').toggleClass('menu__active');
    })
})

// window.addEventListener('DOMContentLoaded', () => {
//     const menu = document.querySelector('.menu'),
//     menuItem = document.querySelectorAll('.menu__item'),
//     hamburger = document.querySelector('.hamburger');

//     hamburger.addEventListener('click', () => {
//         hamburger.classList.toggle('hamburger__active');
//         menu.classList.toggle('menu__active');
//     });

//     menuItem.forEach(item => {
//         item.addEventListener('click', () => {
//             hamburger.classList.toggle('hamburger__active');
//             menu.classList.toggle('menu__active');
//         })
//     })
// })