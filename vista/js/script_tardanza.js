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
                console.log(data[1])
                var html = '';
                for (var i = 0; i < data.length; i++) {
                    html += '<tr class="tr-persona" id="'+ data[i].idpersona+'" data-nombre="'+ data[i].alumno +'"> '
                    html += '<td class="text-center">' + data[i].alumno + "</td>";
                    html += '<td class="text-center">' + data[i].aula + "</td>";
                    html += '<td class="text-center">' + data[i].carrera + "</td>";
                    html += '<td class="text-center">' + data[i].tardanza + "</td>";
                    html += "</tr>"; 
                }
                $('#tbody-tardanza').html(html);
                $("#tbl-tardanza").DataTable({
                    searching: false,
                    ordering: false,
                    bLengthChange: false
                });
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