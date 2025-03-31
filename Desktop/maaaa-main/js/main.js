const swiper = new Swiper('.cases__swiper', {
    slidesPerView: 1,
});

document.querySelector('.left__arrow').addEventListener('click', () => {
    swiper.slidePrev();
});

document.querySelector('.right__arrow').addEventListener('click', () => {
    swiper.slideNext();
});