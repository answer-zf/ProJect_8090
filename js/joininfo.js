$(function () {
    // 导航吸顶
    $(window).scroll(function () {
        if ($(window).scrollTop() > 900) {
            $('#ranking').addClass('ranking-fixed')
            $('#ranking .ranking').addClass('ranking-fixed-item')
            $('#ranking .slick-slide').addClass('d-n')
        } else {
            $('#ranking').removeClass('ranking-fixed')
            $('#ranking .ranking').removeClass('ranking-fixed-item')
            $('#ranking .slick-slide').removeClass('d-n')
        }
    })
})
