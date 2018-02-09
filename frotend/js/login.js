
function iniciarsession() {
    valores = $("#loginForm").form('get values');
    $.ajax({
        url: 'php/enrutador.php?type=1',
        type: 'post',
        data: valores,
        success: function (r) {
            data = JSON.parse(r);
            if (data['msg'] != '1') {
                $("#msg").empty();
                $("#msg").html(data['msg']).show('slow').delay(1000).hide(400);
                $(":text, :password").val('');
                $(":text").focus();
            } else {
                location.href = 'usuario.html';
            }

        }
    });
}