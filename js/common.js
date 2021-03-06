$(function () {
    // 导航吸顶
    $(window).scroll(function () {
        if ($(window).scrollTop() > 106) {
            $('#nav-zf').addClass('nav-fix-zf')
        } else {
            $('#nav-zf').removeClass('nav-fix-zf')
        }
    })

    // 导航高亮
    var hash = '#' + window.location.pathname.split('.')[0].slice(1)

    if (hash === '#') {
        $('#nav-zf .nav-link').removeClass('active')
        $('#index').addClass('active')
    } else {
        $('#nav-zf .nav-link').removeClass('active')
        if (hash.indexOf('programlist') != -1) {
            $('#programlist').addClass('active')
        } else if (hash.indexOf('projectitem') != -1) {
            $('#programlist').addClass('active')
        } else if (hash.indexOf('newsinfo') != -1) {
            $('#newsinfo').addClass('active')
        } else if (hash.indexOf('joininfo') != -1) {
            $('#joininfo').addClass('active')
        } else if (hash.indexOf('entstory') != -1) {
            $('#entstory').addClass('active')
        } else {
            $(hash).addClass('active')
        }
    }
})

// 头部搜索
function searchHandle() {
    console.log($('#search-input').val())
}
