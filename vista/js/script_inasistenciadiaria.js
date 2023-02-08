$(document).ready(function () {
    cargar_inasistencia();
    function cargar_inasistencia() {
        fecha = $('#txtfecha').val();
        $.post('../../controlador/load_inasistenciadiaria.php', {
            caso: 1, fecha: fecha
        }, function (data) {
            if (data != null) {
                var html = '';

                html += '<table id="tbl-inasistencia" cellspacing="0" width="100%">';
                html += '<thead class="cabecera">';
                html += '    <tr>';
                html += '        <th>Apellido y Nombres</th>';
                html += '        <th>Aula</th>';
                html += '        <th>Carrera</th>';
                html += '        <th>Teléfono</th>';
                html += '    </tr>';
                html += '</thead>';
                html += '<tbody id="tbody-inasistencia">';
                for (var i = 0; i < data.length; i++) {
                    html += '<tr class="tr-persona" id="'+ data[i].idpersona+'" data-nombre="'+ data[i].alumno +'"> '
                    html += '<td class="text-center">' + data[i].alumno + "</td>";
                    html += '<td class="text-center">' + data[i].aula + "</td>";
                    html += '<td class="text-center">' + data[i].carrera + "</td>";
                    html += '<td class="text-center">' + data[i].telefono + "</td>";
                    html += "</tr>";  
                }
                 html += '</tbody>';
                 html += '</table>';
                $('.tbl-asistencia').html(html);
                $("#tbl-inasistencia").DataTable({
                    ordering: false,
                    bLengthChange: false,
                    "searching": false,
                    "language": {
                        "url": "../json/Spanish.json"
                    },
                    "scrollCollapse": true,
                    "paging": false                
                });
            }
        }, 'json');
    }
    $('#txtfecha').change(function () {
        cargar_inasistencia();
    });

    $('#btnimprimir').click(function () {
        var css = '';
        css += '<link href="../../vista/css/bootstrap-print.css" rel="stylesheet" type="text/css" />';
        var objeto = '';
        objeto += '<h2><center><b>REPORTE DE INASISTENCIA</b></center></h2>'; 
        objeto += '<h3><center>'+ $('#txtfecha').val() +'</center></h3>'; //obtenemos el objeto a imprimir
        objeto += $('.divimprimir').html(); //obtenemos el objeto a imprimir
        objeto += '<script>window.print();window.close();</script>';
        var ventana = window.open('', '_blank'); //abrimos una ventana vacía nueva
        ventana.document.write(css + objeto);
    });
});

