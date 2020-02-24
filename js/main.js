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

  let btnDesc = document.querySelectorAll('.btn-description'),
    btnDescClose = document.querySelectorAll('.btn-description-close'),
    blockDesc = document.querySelectorAll('.service-block-content'),
    blockDescActive = document.querySelectorAll('.service-block-content_active');
    // btnArrow = document.querySelectorAll('.btn-arrow'),
    // btnClose = document.querySelectorAll('.btn-close');

  function openDesc(a) {
    blockDesc[a].classList.remove('show');
    blockDesc[a].classList.add('hide');
    blockDescActive[a].classList.add('show');
    blockDescActive[a].classList.remove('hide');
  };

  function closeDesc(b) {
    if (blockDescActive[b].classList.contains('show')) {
      blockDescActive[b].classList.remove('show');
      blockDescActive[b].classList.add('hide');
      blockDesc[b].classList.remove('hide');
      blockDesc[b].classList.add('show');
    };
  };


  document.addEventListener('click', (event) => {
    let target = event.target;
    if (target && target.classList.contains('btn-description')) {
        for (let i = 0; i < btnDesc.length; i++) {
          if (target == btnDesc[i]) {
            openDesc(i);
            // closeDesc(i);
            break;
          };
        };
      };
  });
  document.addEventListener('click',  (event) => {
    let target = event.target;
    if (target && target.classList.contains('btn-description-close')) {
        for (let i = 0; i < btnDescClose.length; i++) {
          if (target == btnDescClose[i]) {
            // openDesc(i);
            closeDesc(i);
            break;
          };
        };
      };
  });



});