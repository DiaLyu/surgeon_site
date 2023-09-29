$(document).ready(function(){
    $('.hamburger').on('click', function(){
        $(this).toggleClass('hamburger__active');
        $('.menu').toggleClass('menu__active');
    })
})