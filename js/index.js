import { CountUp } from './countUp.min.js';

// dom elements:
const statisticsSec = document.getElementById('statisticsSec');
const counterEls = document.querySelectorAll('.counterEl');

// all values:
let scrolled = false;

// event listners:
window.addEventListener('scroll', _ => {
    // animate counter on scroll:
    animateCounter();
});

/* start statistics counter */
function animateCounter() {
    let fromTop = statisticsSec.getBoundingClientRect().y;
    if (window.scrollY >= fromTop) {
        if (!scrolled) {
            counterEls.forEach(counterEl => {
                let fixVal = parseInt(counterEl.getAttribute('data-val'));
                var countUp = new CountUp(counterEl, fixVal);
                countUp.start();
            });
            scrolled = true;
        }
    }
}
/* end statistics counter */

/* start swiper slider */

// testimonials swiper:
new Swiper('.swiper', {
    slidesPerView: 1,
    speed: 400,
    spaceBetween: 30,
    allowTouchMove: true,
    breakpoints: {
        992: {
            slidesPerView: 2,
            speed: 400,
            spaceBetween: 30,
        }
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 5000,
    },
});

// clients swiper:
new Swiper('.swiper2', {
    slidesPerView: 2,
    speed: 400,
    spaceBetween: 30,
    allowTouchMove: true,
    breakpoints: {
        400: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 6,
        }
    },
    autoplay: {
        delay: 5000,
    },
});

// testimonials_page on about_page swiper:
new Swiper('.swiper3', {
    slidesPerView: 1,
    speed: 400,
    spaceBetween: 30,
    allowTouchMove: true,
    direction: "vertical",
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 5000,
    },
});

/* end testimonials swiper slider */