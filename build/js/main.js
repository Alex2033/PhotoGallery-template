$(function() {
    var swiper = new Swiper('.swiper-container', {
        navigation: {
            slidesPerView: 1,
            nextEl: '.swiper-arrow-next',
            prevEl: '.swiper-arrow-prev',
            
        },
        loop: true,
        speed: 600
      });
});