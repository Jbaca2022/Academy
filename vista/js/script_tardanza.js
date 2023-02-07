$(document).ready(function () {
    cargar_tardanza();
    function cargar_tardanza() {
        fechainicio = $('#txtfechainicio').val();
        fechafin = $('#txtfechafin').val();
        tardanza = $('#txttardanza').val();
        let caso = 1;
        if (fechainicio == fechafin) {
           caso = 2;  
        }
        $.post('../../controlador/load_tardanza.php', {
            caso: caso, fechainicio: fechainicio, fechafin: fechafin, tardanza: tardanza
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
    $('#txtfechainicio').change(function () {
        cargar_tardanza();
    });
    $('#txtfechafin').change(function () {
        cargar_tardanza();
    });
    $('#txttardanza').change(function () {
        cargar_tardanza();
    });
});