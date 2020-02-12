window.addEventListener('DOMContentLoaded', function () {
  'use strict';

// fixed menu*******************************************************

// let navPos, winPos, navHeight;
  
// function refreshVar() {
//   navPos = $('.header-top').offset().top;
//   navHeight = $('.header-top').outerHeight(true);
// }

// refreshVar();
// $(window).resize(refreshVar);

// $('<div class="clone-nav"></div>').insertBefore('.header-top').css('height', navHeight).hide();

// $(window).scroll(function() {
//   winPos = $(window).scrollTop();

//   if (winPos >= navPos) {
//     $('.header-top').addClass('fixed shadow');  
//     $('.clone-nav').show();
//   } 
//   else {
//     $('.header-top').removeClass('fixed shadow');
//     $('.clone-nav').hide();
//   }
// });

// slider*************************************************

let mySwiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        bulletClass: 	'swiper-pagination-bullet',
        bulletActiveClass: 	'swiper-pagination-bullet-active',
        clickable: true,
        loop: true,
      },
});

// mobile menu

let menuButton = document.querySelector('.menu-button'),
    menu = document.querySelector('.header');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('menu-button-active');
    // menu.classList.toggle('header-active');
});

// скролл навигации

let navLink = $('.menu-link');
navLink.on('click', function(event) {
event.preventDefault();
let target = $(this).attr('href');
let top = $(target).offset().top;
$('html, body').animate({scrollTop: top}, 500)
});

});