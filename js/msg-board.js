// 表单验证：只验证 手机姓名非空以及手机号码合法
function submitMsg() {
    var name = $('#msg_board_username').val()
    if (name.trim() == '') {
        alert('您的姓名不能为空噢')
        return false
    }
    var mobile = $('#msg_board_mobile').val()
    if (mobile.trim() == '') {
        alert('您的手机号不能留空噢')
        return false
    }
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1})|(14[0-9]{1}))+\d{8})$/
    if (!myreg.test(mobile)) {
        alert('请填写有效手机号')
        return false
    }
}

$(function () {
    // 快捷留言的控制
    $('#msg_board_textarea').text('')
    $('#textarea_input li').click(function () {
        text = $('#msg_board_textarea').val()
        text += $(this).text() + '\n'
        $('#msg_board_textarea').val(text)
        $('#message_easyCheckMsg').addClass('hide')
    })
    $('#msg_board_textarea').focus(function () {
        $('#message_easyCheckMsg').removeClass('hide')
    })
    $('#textarea_clear').click(function () {
        $('#msg_board_textarea').val('')
        $('#message_easyCheckMsg').addClass('hide')
    })
    $('#msg_board_textarea').keyup(function (e) {
        if (e.keyCode == 27) {
            $('#message_easyCheckMsg').addClass('hide')
        }
    })
    $('#msg_board_username').click(function () {
        $('#message_easyCheckMsg').addClass('hide')
    })
    $('#msg_board_mobile').click(function () {
        $('#message_easyCheckMsg').addClass('hide')
    })
})
