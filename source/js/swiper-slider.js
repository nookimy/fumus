new Swiper('.swiper',{
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  watchOverflow: true,


  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    992: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  }
});
