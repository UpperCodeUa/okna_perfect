import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';

document.addEventListener("DOMContentLoaded", function(){
  //========= Main swiper============
  var mySwiper = new Swiper('.main-slider', {
    modules: [Navigation, Pagination, Autoplay],
    loop: true,
    speed: 4500,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 13000,
      disableOnInteraction: false
    }
  });

  //================================================

  mySwiper.on('slideChange', function () {
    var activeIndex = mySwiper.activeIndex;

    btnWrappers.forEach(function (btn) {
      btn.classList.add('hidden');
    });

    if (activeIndex === 1) {
      document.getElementById('become-partner').classList.remove('hidden');
    } else if (activeIndex === 2) {
      document.getElementById('franchise-link').classList.remove('hidden');
    } else {
      document.getElementById('btn-products').classList.remove('hidden');
    }
  });

  //========= Page Hybrid swiper============

  var swiper = new Swiper('.hybrid', {
    modules: [Navigation, Pagination, Autoplay],
    loop: true,
    speed: 4500,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 4500,
      disableOnInteraction: false
    }
  });

  //========= Page Partner swiper============

  var swiper = new Swiper('.partner-slider', {
    modules: [Navigation, Pagination, Autoplay],
    loop: true,
    speed: 4500,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 44500,
      disableOnInteraction: false
    }
  });

  //========= types swipers============

  var swiper = new Swiper('.types-hybrid', {
    modules: [Navigation],
    loop: true,
    spaceBetween: 20,
    slidesPerView: 2,
    speed: 900,
    navigation: {
      nextEl: '.swiper-button-next.priv',
      prevEl: '.swiper-button-prev.priv',
    },
    breakpoints: {
      580: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper('.types-pvc', {
    modules: [Navigation],
    loop: true,
    spaceBetween: 20,
    slidesPerView: 2,
    speed: 900,
    navigation: {
      nextEl: '.swiper-button-next.priv',
      prevEl: '.swiper-button-prev.priv',
    },
    breakpoints: {
      580: {
        slidesPerView: 3,
      },
      710: {
        slidesPerView: 4,
      },
      820: {
        slidesPerView: 5,
      },
    },
  });

  var swiper = new Swiper('.types-sliding', {
    modules: [Navigation],
    loop: true,
    spaceBetween: 20,
    slidesPerView: "auto",
    speed: 900,
    navigation: {
      nextEl: '.swiper-button-next.priv',
      prevEl: '.swiper-button-prev.priv',
    },
  });
  var swiper = new Swiper('.types-sliding-motion', {
    modules: [Navigation],
    loop: true,
    spaceBetween: 20,
    slidesPerView: "auto",
    speed: 900,
    navigation: {
      nextEl: '.swiper-button-next.priv',
      prevEl: '.swiper-button-prev.priv',
    },
  });

  //==========================================
  var swiper = new Swiper('.private-swiper', {
    modules: [Navigation, Autoplay],
    loop: true,
    slidesPerView: 1,
    speed: 900,
    navigation: {
      nextEl: '.swiper-button-next.priv',
      prevEl: '.swiper-button-prev.priv',
    },
    breakpoints: {
      530: {
        slidesPerView: 2,
      },
      800: {
        slidesPerView: 3,
      },
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    }
  });


  var swiper = new Swiper('.commerse-swiper', {
    modules: [Navigation, Autoplay],
    loop: true,
    slidesPerView: 1,
    speed: 900,
    navigation: {
      nextEl: '.swiper-button-next.com',
      prevEl: '.swiper-button-prev.com',
    },
    breakpoints: {
      530: {
        slidesPerView: 2,
      },
      800: {
        slidesPerView: 3,
      },
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    }
  });

  var swiper = new Swiper('.renovation-slider', {
    modules: [Navigation],
    loop: true,
    slidesPerView: 1,
    speed: 900,
    navigation: {
      nextEl: '.swiper-button-next.priv',
      prevEl: '.swiper-button-prev.priv',
    },
  });

  var swiper = new Swiper('.about-image-slider', {
    modules: [Navigation],
    slidesPerView: 1,
    speed: 900,
    navigation: {
      nextEl: '.next-about-slide',
      prevEl: '.prev-about-slide',
    },
  });
});

//============scroll to products===============
document.addEventListener('DOMContentLoaded', function () {
  var btnProducts = document.getElementById('btn-products');
  if (btnProducts) {
    btnProducts.addEventListener('click', function () {
      var productsSection = document.getElementById('products');
      var offset = document.querySelector('header').offsetHeight;
      window.scrollTo({ top: productsSection.offsetTop - offset, behavior: 'smooth' });
    });
  }
  else {}
});

//============scroll to partner===============
document.addEventListener('DOMContentLoaded', function () {
  var btnProducts = document.getElementById('become-partner');
  if (document.getElementById('become-partner')) {
    btnProducts.addEventListener('click', function () {
      var productsSection = document.getElementById('partner');
      var offset = document.querySelector('header').offsetHeight;
      window.scrollTo({ top: productsSection.offsetTop - offset, behavior: 'smooth' });
    });
  }
  else {}
});

