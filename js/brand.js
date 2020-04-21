$(function () {
  // 导航吸顶
  $(window).scroll(function () {
    if ($(window).scrollTop() > 450) {
      $('#ranking').addClass('ranking-fixed')
      $('#ranking .ranking').addClass('ranking-fixed-item')
      $('#ranking .slick-slide').addClass('d-n')
    } else {
      $('#ranking').removeClass('ranking-fixed')
      $('#ranking .ranking').removeClass('ranking-fixed-item')
      $('#ranking .slick-slide').removeClass('d-n')
    }
  })

  //加盟区域更多
  var flag = true
  $('.a-more').click(function () {
    if (flag) {
      $('.city-none').show()
      $(this).addClass('addon')
      $(this).text('收起')
      flag = false
    } else {
      $('.city-none').hide()
      $(this).removeClass('addon')
      $(this).text('更多')
      flag = true
    }
  })
  //行业分类二级栏目显示
  $('.wood-fl a.a2').click(function () {
    var $index = $(this).index('.a2')
    $(this).addClass('on').siblings().removeClass('on')
    $(this)
      .parents('.wood-fl')
      .siblings('.wood-none')
      .eq($index)
      .show()
      .siblings('.wood-none')
      .hide()
  })

  $('.wood-fl a.a1').click(function () {
    $(this).addClass('on').siblings().removeClass('on')
    $('.wood-none').hide()
  })
})
