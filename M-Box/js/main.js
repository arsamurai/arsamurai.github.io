$(function () {
    $('.burger').on("click", function() {
        $('.menu__list').toggleClass('menu__list--active');
        $(this).toggleClass('burger--active');
    })

    new WOW().init();
});