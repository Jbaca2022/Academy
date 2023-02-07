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
                    html += '<tr class="tr-persona" id="'+ data[i].idpersona+'" data-nombre="'+ data[i].alumno +'"> '
                    html += '<td class="text-center">' + data[i].alumno + "</td>";
                    html += '<td class="text-center">' + data[i].aula + "</td>";
                    html += '<td class="text-center">' + data[i].carrera + "</td>";
                    html += '<td class="text-center">' + data[i].telefono + "</td>";
                    html += "</tr>";  
                }
                $('#tbody-inasistencia').html(html);
                $("#tbl-inasistencia").DataTable({
                    searching: false,
                    ordering: false,
                    bLengthChange: false
                });
            }
        }, 'json');
    }
    $('#txtfecha').change(function () {
        cargar_inasistencia();
    });
});

