$(function () {

    $('.nav-item').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        let id = '#' + $(this).data('id');
        let scrTop = $(id).position().top;
        $('html, body').animate({
            scrollTop: scrTop
        }, 1000);
    });
});