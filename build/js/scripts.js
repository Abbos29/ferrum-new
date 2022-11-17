// // Custom Scripts
// // Custom scripts

// // Мобильное меню бургер
// function burgerMenu() {
//   const burger = document.querySelector('.burger')
//   const menu = document.querySelector('.menu')
//   const body = document.querySelector('body')
//   burger.addEventListener('click', () => {
//     if (!menu.classList.contains('active')) {
//       menu.classList.add('active')
//       burger.classList.add('active-burger')
//       body.classList.add('locked')
//     } else {
//       menu.classList.remove('active')
//       burger.classList.remove('active-burger')
//       body.classList.remove('locked')
//     }
//   })
//   menu.addEventListener("click", (event) => {
//     if(event.target){
//       menu.classList.remove('active')
//       burger.classList.remove('active-burger')
//       body.classList.remove('locked')
//     }
//   })
//   // Вот тут мы ставим брейкпоинт навбара
//   window.addEventListener('resize', () => {
//     if (window.innerWidth > 991.98) {
//       menu.classList.remove('active')
//       burger.classList.remove('active-burger')
//       body.classList.remove('locked')
//     }
//   })
// }
// burgerMenu()


// // Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
// function fixedNav() {
//   const nav = document.querySelector('nav')

//   // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
//   const breakpoint = 1
//   if (window.scrollY >= breakpoint) {
//     nav.classList.add('fixed__nav')
//   } else {
//     nav.classList.remove('fixed__nav')
//   }
// }
// window.addEventListener('scroll', fixedNav)





// // swiper (info)

// const swiper = new Swiper('.info__swiper', {
//     slidesPerView: 1,
//     spaceBetween: 20,

//     autoplay: {
//         delay: 4000,
//     },

//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  

//   //   // Responsive breakpoints
//   //   breakpoints: {
//   //   // when window width is >= 320px
//   //   320: {
//   //     slidesPerView: 3,
//   //     spaceBetween: 20
//   //   },
//   //   // when window width is >= 480px
//   //   480: {
//   //     slidesPerView: 3,
//   //     spaceBetween: 30
//   //   },
//   // }
// });


// SCROLLREVEAL

ScrollReveal({
    reset: false,
    distance: '100px',
    duration: 1200,
    delay: 400
});

ScrollReveal().reveal('', {
    delay: 1000,
    interval: 500,
    origin: 'left'
});
ScrollReveal().reveal('.info__content, .info__inner', {
    reset: false,
    delay: 300,
    origin: 'left'
});

ScrollReveal().reveal('.info__swiper ', {
    delay: 300,
    origin: 'right'
});
ScrollReveal().reveal('.myRezTeble', {
    reset: false,
    delay: 300,
    origin: 'right'
});

ScrollReveal().reveal('.hero__wrapper, .section-title', {
    delay: 300,
    interval: 300,
    origin: 'top'
});
ScrollReveal().reveal('.logo, .menu__item, .services__item', {
    delay: 300,
    interval: 300,
    origin: 'top',
});

ScrollReveal().reveal('.why__item', {
    delay: 300,
    interval: 300,
    origin: 'bottom'
});

ScrollReveal().reveal('', {
    delay: 200,
    origin: 'bottom'
});
