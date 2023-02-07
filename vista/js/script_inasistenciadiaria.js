$(document).ready(function () {
    cargar_inasistencia();
    function cargar_inasistencia() {
        fecha = $('#txtfecha').val();
        $.post('../../controlador/load_inasistenciadiaria.php', {
            caso: 1, fecha: fecha
        }, function (data) {
            if (data != null) {
                var html = '';
                for (var i = 0; i < data.length; i++) {
                    html += '-' + data[i].idpersona + ' - ' + data[i].alumno + ' - ' + data[i].aula + ' - ' + data[i].carrera + ' - ' + data[i].telefono + '<br> ';
                }
                $('#data').html(html);
                $("#data").selectpicker('refresh');
            }
        }, 'json');
    }
    $('#txtfecha').change(function () {
        cargar_inasistencia();
    });
});

