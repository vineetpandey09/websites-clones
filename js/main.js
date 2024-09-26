const swiperEl = document.querySelector('swiper-container')
Object.assign(swiperEl, {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    clickable: true,
  },
  freeMode: true,
  loop: true,
  allowTouchMove: false,
  autoplay: {
  delay: 0,
  disableOnInteraction: false,
  },
  slidesPerView: 5.5,
  spaceBetween: 32,
  speed: 10000,
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

swiperEl.initialize();
