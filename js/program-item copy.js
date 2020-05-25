if ($('.m-con-spc').eq(0).html() == '') {
    //默认没有项目首页广告时的状态
    $('.m-content').css('display', 'none')
    $('.PROJECT-DETAILS').css('display', 'block')
    $('.detail_con_mid_lt').css('display', 'block')
    $('.project-pics').css('display', 'none')
    $('.home').css('display', 'none')
    $('.getinform').css('display', 'block')
    $('.detail').css('background', '#fff')

    var b = $('.mid-lt-con-nav').offset()

    $(window).on('scroll', function () {
        var c = $(window).scrollTop() + 130
        var d = $('.detail_con_mid_lt')[0].offsetHeight + b.top

        if (b.top <= c) {
            $('.mid-lt-con-nav').css({ position: 'fixed', top: '0' })

            if (
                $('#detail_con_mid_lt').css('display').toLowerCase() == 'none'
            ) {
            } else {
                //$('#con-nav').fadeOut();
                $('#con-nav').css('display', 'none')
                if (c >= d) {
                    $('.mid-lt-con-nav').css({ position: 'relative', top: '0' })
                }
            }
        } else {
            $('.mid-lt-con-nav').css({ position: 'relative', top: '0' })

            //$('#con-nav').fadeIn();
            $('#con-nav').css('display', 'block')
        }
    })

    //点击项目详情跳转
    $('.detail').click(function () {
        $('.PROJECT-DETAILS').css('display', 'block')
        $('.detail_con_mid_lt').css('display', 'block')
        $('.m-content').css('display', 'none')
        $('.project-news').css('display', 'none')
        $('.project-pics').css('display', 'none')
        $('.getinform').css('display', 'block')
        this.style.background = '#fff'

        var b = $('.mid-lt-con-nav').offset()

        $(window).on('scroll', function () {
            var c = $(window).scrollTop() + 130
            var d = $('.detail_con_mid_lt')[0].offsetHeight + b.top

            if (b.top <= c) {
                $('.mid-lt-con-nav').css({ position: 'fixed', top: '0' })

                if (
                    $('#detail_con_mid_lt').css('display').toLowerCase() ==
                    'none'
                ) {
                } else {
                    //$('#con-nav').fadeOut();
                    $('#con-nav').css('display', 'none')
                    if (c >= d) {
                        $('.mid-lt-con-nav').css({
                            position: 'relative',
                            top: '0',
                        })
                    }
                }
            } else {
                $('.mid-lt-con-nav').css({ position: 'relative', top: '0' })

                //$('#con-nav').fadeIn();
                $('#con-nav').css('display', 'block')
            }
        })
    })

    //点击项目资讯跳转
    $('.information').click(function () {
        $('.PROJECT-DETAILS').css('display', 'block')
        $('.detail_con_mid_lt').css('display', 'none')
        $('.m-content').css('display', 'none')
        $('.project-news').css('display', 'block')
        $('.project-pics').css('display', 'none')
        $('.getinform').css('display', 'block')
        this.style.background = '#fff'
    })

    //点击项目图片跳转
    $('.pics').click(function () {
        $('.PROJECT-DETAILS').css('display', 'block')
        $('.detail_con_mid_lt').css('display', 'none')
        $('.m-content').css('display', 'none')
        $('.project-news').css('display', 'none')
        $('.project-pics').css('display', 'block')
        $('.getinform').css('display', 'block')
        $(window).on('scroll')
        this.style.background = '#fff'
    })
} else {
    //点击项目首页跳转
    $('.home').click(function () {
        $('.PROJECT-DETAILS').css('display', 'none')
        $('.Project-Home').css('display', 'block')
        $('.detail_con_mid_lt').css('display', 'none')
        $('.con-nav-spc').css('left', '0px')
        $('.home').css('display', 'none')
        $('.getinform').css('display', 'block')
        $('.m-content').css('display', 'block')
    })

    //点击项目详情跳转
    $('.detail').click(function () {
        $('.PROJECT-DETAILS').css('display', 'block')
        $('.detail_con_mid_lt').css('display', 'block')
        $('.m-content').css('display', 'none')
        $('.project-news').css('display', 'none')
        $('.project-pics').css('display', 'none')
        $('.con-nav-spc').css('left', '-510px')
        $('.home').css('display', 'block')
        $('.getinform').css('display', 'none')

        var b = $('.mid-lt-con-nav').offset()

        $(window).on('scroll', function () {
            var c = $(window).scrollTop() + 130
            var d = $('.detail_con_mid_lt')[0].offsetHeight + b.top

            if (b.top <= c) {
                $('.mid-lt-con-nav').css({ position: 'fixed', top: '0' })

                if (
                    $('#detail_con_mid_lt').css('display').toLowerCase() ==
                    'none'
                ) {
                } else {
                    //$('#con-nav').fadeOut();
                    $('#con-nav').css('display', 'none')
                    if (c >= d) {
                        $('.mid-lt-con-nav').css({
                            position: 'relative',
                            top: '0',
                        })
                    }
                }
            } else {
                $('.mid-lt-con-nav').css({ position: 'relative', top: '0' })

                //$('#con-nav').fadeIn();
                $('#con-nav').css('display', 'block')
            }
        })
        $('.cpy-bar').removeClass('active')
        $(this).addClass('active')
    })

    //点击项目资讯跳转
    $('.information').click(function () {
        $('.PROJECT-DETAILS').css('display', 'block')
        $('.detail_con_mid_lt').css('display', 'none')
        $('.m-content').css('display', 'none')
        $('.project-news').css('display', 'block')
        $('.project-pics').css('display', 'none')
        $('.con-nav-spc').css('left', '-510px')
        $('.home').css('display', 'block')
        $('.getinform').css('display', 'none')
        $('.cpy-bar').removeClass('active')
        $(this).addClass('active')
    })

    //点击项目图片跳转
    $('.pics').click(function () {
        $('.PROJECT-DETAILS').css('display', 'block')
        $('.detail_con_mid_lt').css('display', 'none')
        $('.m-content').css('display', 'none')
        $('.project-news').css('display', 'none')
        $('.project-pics').css('display', 'block')
        $('.con-nav-spc').css('left', '-510px')
        $('.home').css('display', 'block')
        $('.getinform').css('display', 'none')
        $(window).on('scroll')
        $('.cpy-bar').removeClass('active')
        $(this).addClass('active')
    })
}

//导航栏固定不动
OnScroll()
function OnScroll() {
    var b = $('.con-nav').offset()
    $(window).on('scroll', function () {
        var c = $(window).scrollTop()
        if (b.top <= c) {
            $('.con-nav').css({
                position: 'fixed',
                top: '0px',
            })
        } else {
            $('.con-nav').css({
                position: 'absolute',
                top: '0px',
            })
        }
    })
}
