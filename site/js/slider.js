new Swiper('.image-slider', {
    // стрелки
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev'
    // },
    //Навигация
    //Буллеты, текущее положение, прогрессбар
    pagination: {
        el: '.swiper-pagination',
        //Буллеты
        clickable: true,
        //Динамические буллеты
        dynamicBullets: true,
        //Кастомные буллеты
        renderBullet: function(index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 6000,
        stopOnLastSlide: false,
        disableOnInteraction: false
    }

});
// Скролл
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}