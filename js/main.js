  const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: '.top-program .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.top-program .swiper-button-next',
      prevEl: '.top-program .swiper-button-prev',
    },
    slidesPerView: 1, // базовое значение
    spaceBetween: 20,

    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 4,
      },
    },
  });

  const thumbsSwiper = new Swiper('.thumbs-slider', {
    loop: true,
    spaceBetween: 8,
    slidesPerView: 4, // минимум 4 на мобилках
    freeMode: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    loop: true, // добавляем цикличность, чтобы при достижении конца можно было продолжить
    autoplay: {
      delay: 3000, // задержка 3 секунды
      disableOnInteraction: false, // не останавливать автоплей после взаимодействия
    },
    breakpoints: {
      480: {
        slidesPerView: 6
      },
      768: {
        slidesPerView: 8
      },
      1024: {
        slidesPerView: 10
      },
      1280: {
        slidesPerView: 12
      }
    }
  });
  
  const mainSwiper = new Swiper('.main-slider', {
    spaceBetween: 10,
    loop: true,
    thumbs: {
      swiper: thumbsSwiper
    },
    slideToClickedSlide: true,
    autoplay: {
      delay: 3000, // задержка автоплея для основного слайдера
      disableOnInteraction: false, // не останавливать автоплей при взаимодействии
    },
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
      },
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
      nextEl: '.reviews .swiper-button-next ',
      prevEl: '.reviews .swiper-button-prev ',
    },
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 10 },
      576: { slidesPerView: 2, spaceBetween: 20 },
      768: { slidesPerView: 3, spaceBetween: 30 },
      992: { slidesPerView: 4, spaceBetween: 40 },
    }
  });
  
  // Для того, чтобы слайдер продолжал прокручиваться при клике на последний видимый слайд
  thumbsSwiper.on('slideChange', function() {
    if (thumbsSwiper.isEnd) {
      thumbsSwiper.slideTo(0); // возвращаем к началу при достижении конца
    }
  });

const wrappers = document.querySelectorAll('.swiper-slide__wrapper');
let maxHeight = 0;

// Находим максимальную высоту
wrappers.forEach(wrapper => {
  wrapper.style.height = 'auto'; // Сначала сбрасываем высоту
  const height = wrapper.offsetHeight;
  if (height > maxHeight) maxHeight = height;
});

// Применяем её ко всем
wrappers.forEach(wrapper => {
  wrapper.style.height = `${maxHeight}px`;
});

  // Тоггл открытия/закрытия меню
  burger.addEventListener('click', function () {
      navMenu.classList.toggle('active');
      burger.classList.toggle('open');
  });

  // Закрытие по клику на ссылку
  navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
          navMenu.classList.remove('active');
          burger.classList.remove('open');
      });
  });

  // Закрытие при клике вне меню
  document.addEventListener('click', function (e) {
      const isClickInsideMenu = navMenu.contains(e.target);
      const isClickOnBurger = burger.contains(e.target);

      if (!isClickInsideMenu && !isClickOnBurger) {
          navMenu.classList.remove('active');
          burger.classList.remove('open');
      }
  });