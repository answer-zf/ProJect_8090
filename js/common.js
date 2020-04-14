$(function () {
  tab_floatingSwitch('#myTab > li', '#myTabContent > div')
  tab_floatingSwitch('#nav-tab > li', '#nav-tabContent > div')
  tab_floatingSwitch('#pills-tab > li', '#pills-contact-tab > div')
})

/* tab页悬停切换 */
function tab_floatingSwitch(id_1, id_2) {
  $(id_1).hover(function () {
    $(id_1 + ' > a').removeClass('active')
    $(this).children().addClass('active')

    $(id_2).removeClass('show active')

    var href = $(this).children().attr('href')
    $(href).addClass(' show active')
  })
}
