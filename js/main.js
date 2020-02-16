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
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active',
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
  navLink.on('click', function (event) {
    event.preventDefault();
    let target = $(this).attr('href');
    let top = $(target).offset().top;
    $('html, body').animate({
      scrollTop: top
    }, 500)
  });

  // информация о сервисе

  let btnDesc = document.querySelectorAll('.btn-description')[0],
    servBlockTitle = document.querySelectorAll('.service-block-title')[0],
    servBlockText = document.querySelectorAll('.service-block-text')[0],
    titleActive = document.querySelectorAll('.title-active')[0],
    textActive = document.querySelectorAll('.text-active')[0],
    btnDescClose = document.querySelector('.btn-description-close'),
    blockDesc = document.querySelector('.block-1');

    const openDesc = (event) => {
      event.preventDefault();
      blockDesc.classList.add('block-1-active');
      btnDesc.style.display = 'none';
      servBlockTitle.style.display = 'none';
      servBlockText.style.display = 'none';
      btnDescClose.style.display = 'block';
      titleActive.style.display = 'block';
      textActive.style.display = 'block';
  
    };
    const closeDesc = (event) => {
      event.preventDefault();
      blockDesc.classList.remove('block-1-active');
      btnDesc.style.display = '';
      servBlockTitle.style.display = '';
      servBlockText.style.display = '';
      btnDescClose.style.display = 'none';
      titleActive.style.display = 'none';
      textActive.style.display = 'none';
    };
  btnDesc.addEventListener('click', openDesc);
  btnDescClose.addEventListener('click', closeDesc);



});