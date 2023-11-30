new Swiper('.main-slider.swiper', {
    breakpoints: {

        320: {
            pagination: {
                el: '.swiper-pagination',
            },
        },

        768: {
            pagination: {
                el: '.swiper-pagination-vertical',
            },
        },
    }
});

new Swiper('.topical-links__wrap.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    breakpoints: {
        320: {
            spaceBetween: 15,
            slidesPerView: 1,
        },

        768: {
            spaceBetween: 25,
            slidesPerView: 2,
        },
        1024: {
            spaceBetween: 47,
            slidesPerView: 3,
        },
    }
});

new Swiper('.exposition__gallery-wrap.swiper', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    breakpoints: {
        320: {
            spaceBetween: 20,
        },

        768: {
            centeredSlides: true,
            spaceBetween: 30,
            slidesPerView: 1.5,
        },

        1440: {
            centeredSlides: true,
            spaceBetween: 30,
            slidesPerView: 3,
        },
    }
});

new Swiper('.excursion__gallery-wrap.swiper', {
    

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },

        768: {            
            slidesPerView: 1.5,
            loop: true,
            spaceBetween: 30,
        },

        1024: {            
            slidesPerView: 3,
            loop: true,
            loopedSlides: 3,
            spaceBetween: 30            
        },
    }
});

new Swiper('.news-detail__gallery-wrap.swiper', {
    

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },

        768: {            
            slidesPerView: 1.5,
            loop: true,
            spaceBetween: 30,
        },

        1024: {         
            slidesPerView: 3,
            spaceBetween: 30,
            initialSlide: 2,
            loop: true,
            loopedSlides: 3,
        },
    }
});

new Swiper('.museum-area__gallery-wrap.swiper', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    breakpoints: {
        320: {
            spaceBetween: 20,
        },

        768: {
            centeredSlides: true,
            spaceBetween: 30,
            slidesPerView: 1.5,
        },

        1440: {
            centeredSlides: true,
            spaceBetween: 30,
            slidesPerView: 3,
        },
    }
});

new Swiper('.museum-mariel__gallery-wrap.swiper', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    breakpoints: {
        320: {
            spaceBetween: 20,
        },

        768: {
            centeredSlides: true,
            spaceBetween: 30,
            slidesPerView: 1.5,
        },

        1440: {
            centeredSlides: true,
            spaceBetween: 30,
            slidesPerView: 3,
        },
    }
});

new Swiper('.event__gallery-wrap.swiper', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    breakpoints: {
        320: {
            spaceBetween: 20,
        },

        768: {
            centeredSlides: true,
            spaceBetween: 30,
            slidesPerView: 1.5,
        },

        1440: {
            centeredSlides: true,
            spaceBetween: 30,
            slidesPerView: 3,
        },
    }
});