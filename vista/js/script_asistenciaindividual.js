$(document).ready(function () {
    cargar_alumno();
    function cargar_alumno() {
        let idusuario = $("#modulo").data("id");
        $.post('../../controlador/load_asistenciaindividual.php', {
            caso: 1
        }, function (data) {
            if (data != null) {
                var html = '';
                for (var i = 0; i < data.length; i++) {
                    html += '<option value="' + data[i].idpersona + '" >' + data[i].alumnos + '</option>';
                }
                $('#selectalumno').html(html);
                $("#selectalumno").selectpicker('refresh');
            }
        }, 'json');
    }

    $('#selectalumno').change(function () {
        cargar_asistencia($(this).val());
    });

    function cargar_asistencia(idpersona) {
        $.post('../../controlador/load_asistenciaindividual.php', {
            caso: 2, idpersona: idpersona
        }, function (data) {
            if (data != null) {
                var html = '';
                for (var i = 0; i < data.length; i++) {
                    html +=  data[i].f_nombremes ;
                }
                $('#data').html(html);
            }
        }, 'json');
    }
});

