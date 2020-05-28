$(function () {
    //点击项目首页跳转
    $('.home').click(function () {
        nav_fix_flag = 'con-nav'
        $('.PROJECT-DETAILS').css('display', 'none')
        $('.Project-Home').css('display', 'block')
        $('.detail_con_mid_lt').css('display', 'none')
        $('.con-nav-spc').css('left', '0px')
        $('.home').css('display', 'none')
        $('.getinform').css('display', 'block')
        $('.m-content').css('display', 'block')
        $('.cpy-bar').removeClass('active')
        $('html,body').animate({ scrollTop: 0 }, 1000)
    })

    //点击项目详情跳转
    $('.detail').click(function () {
        nav_fix_flag = 'navbar-detail-zf'
        $('.PROJECT-DETAILS').css('display', 'block')
        $('.detail_con_mid_lt').css('display', 'block')
        $('.m-content').css('display', 'none')
        $('.project-news').css('display', 'none')
        $('.project-pics').css('display', 'none')
        $('.con-nav-spc').css('left', '-510px')
        $('.home').css('display', 'block')
        $('.getinform').css('display', 'none')
        $('.cpy-bar').removeClass('active')
        $(this).addClass('active')
        $('html,body').animate({ scrollTop: 0 }, 1000)
    })

    //点击项目资讯跳转
    $('.information').click(function () {
        nav_fix_flag = 'navbar-detail-zf'
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
        $('html,body').animate({ scrollTop: 0 }, 1000)
    })

    //点击项目图片跳转
    $('.pics').click(function () {
        nav_fix_flag = 'navbar-detail-zf'
        $('.PROJECT-DETAILS').css('display', 'block')
        $('.detail_con_mid_lt').css('display', 'none')
        $('.m-content').css('display', 'none')
        $('.project-news').css('display', 'none')
        $('.project-pics').css('display', 'block')
        $('.con-nav-spc').css('left', '-510px')
        $('.home').css('display', 'block')
        $('.getinform').css('display', 'none')
        $('.cpy-bar').removeClass('active')
        $(this).addClass('active')
        $('html,body').animate({ scrollTop: 0 }, 1000)
    })

    // 吸顶导航

    function NavFix() {
        // 由于页面灵活性较高 不能动态获取 .offset()
        var con_offset_top = 196
        var detail_offset_top = 321
        $(window).on('scroll', function () {
            var scroll_top = $(window).scrollTop()
            if (nav_fix_flag === 'con-nav') {
                if (con_offset_top <= scroll_top) {
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
            } else {
                $('.con-nav').css({
                    position: 'absolute',
                    top: '0px',
                })
                if (detail_offset_top <= scroll_top) {
                    $('#navbar-detail-zf').css({
                        position: 'fixed',
                        top: '0px',
                    })
                } else {
                    $('#navbar-detail-zf').css({
                        position: 'absolute',
                        top: '0px',
                    })
                }
            }
        })
    }

    // 吸顶导航指示器
    // 通过切换该变量值，更替吸顶的导航

    var nav_fix_flag = 'con-nav'

    NavFix()

    // 滚动监听效果
    $('body').scrollspy({ target: '#navbar-detail-zf' })

    // 锚点滚动

    function anchor_scroll(class_name, msec) {
        $(class_name).click(function () {
            $('html,body').animate(
                { scrollTop: $($(this).attr('href')).offset().top },
                msec
            )
        })
    }

    // .navbar-detail-zf-indicate
    anchor_scroll('.navbar-detail-zf-indicate', 800)

    // #btn-get
    anchor_scroll('#btn-get', 500)

    // #zf-btn-get
    anchor_scroll('#zf-btn-get', 1000)
})
