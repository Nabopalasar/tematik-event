const topProgramsSwiper = new Swiper('.top-programs .swiper', {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.top-program .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.top-program .swiper-button-next',
    prevEl: '.top-program .swiper-button-prev',
  },
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
    1400: { slidesPerView: 4 },
  },
});

// Сброс таймера автоплея
['slideChangeTransitionStart', 'touchStart', 'click'].forEach(event => {
  topProgramsSwiper.on(event, () => {
    topProgramsSwiper.autoplay.stop();
    topProgramsSwiper.autoplay.start();
  });
});

const thumbsSwiper = new Swiper('.thumbs-slider', {
  loop: true,
  spaceBetween: 8,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    480: { slidesPerView: 6 },
    768: { slidesPerView: 8 },
    1024: { slidesPerView: 10 },
    1280: { slidesPerView: 12 },
  },
});

// Сброс таймера автоплея
['slideChangeTransitionStart', 'touchStart', 'click'].forEach(event => {
  thumbsSwiper.on(event, () => {
    thumbsSwiper.autoplay.stop();
    thumbsSwiper.autoplay.start();
  });
});

const mainSwiper = new Swiper('.main-slider', {
  spaceBetween: 10,
  loop: true,
  thumbs: {
    swiper: thumbsSwiper
  },
  slideToClickedSlide: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
});

// Сброс таймера автоплея
['slideChangeTransitionStart', 'touchStart', 'click'].forEach(event => {
  mainSwiper.on(event, () => {
    mainSwiper.autoplay.stop();
    mainSwiper.autoplay.start();
  });
});

const reviewsSwiper = new Swiper('.reviews-slider', {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.reviews .swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.reviews .swiper-button-next',
    prevEl: '.reviews .swiper-button-prev',
  },
  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 10 },
    576: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 3, spaceBetween: 30 },
    992: { slidesPerView: 4, spaceBetween: 40 },
  }
});

// Сброс таймера автоплея
['slideChangeTransitionStart', 'touchStart', 'click'].forEach(event => {
  reviewsSwiper.on(event, () => {
    reviewsSwiper.autoplay.stop();
    reviewsSwiper.autoplay.start();
  });
});

// Возврат к началу при достижении конца в thumbs
thumbsSwiper.on('slideChange', function () {
  if (thumbsSwiper.isEnd) {
    thumbsSwiper.slideTo(0);
  }
});

const wrappers = document.querySelectorAll('.swiper-slide__wrapper');
let maxHeight = 0;

wrappers.forEach(wrapper => {
  wrapper.style.height = 'auto';
  const height = wrapper.offsetHeight;
  if (height > maxHeight) maxHeight = height;
});

wrappers.forEach(wrapper => {
  wrapper.style.height = `${maxHeight}px`;
});

// Меню бургер
burger.addEventListener('click', function () {
  navMenu.classList.toggle('active');
  burger.classList.toggle('open');
});

navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    burger.classList.remove('open');
  });
});

document.addEventListener('click', function (e) {
  const isClickInsideMenu = navMenu.contains(e.target);
  const isClickOnBurger = burger.contains(e.target);

  if (!isClickInsideMenu && !isClickOnBurger) {
    navMenu.classList.remove('active');
    burger.classList.remove('open');
  }
});