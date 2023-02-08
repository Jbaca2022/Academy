$(document).ready(function () {
    cargar_asistencia('');
    function cargar_asistencia(textobuscado) {
        $.post('../../controlador/load_asistencia.php', {
            caso: 6,textobuscado:textobuscado
        }, function (data) {
            if (data != null) {
                console.log(data)
                var html = '';
                for (var i = 0; i < data.length; i++){
                    html += '<div class="col-sm-12 no-padding">'
                    html += '   <div class="card">'
                    html += '       <div class="card-body" id="' + data[i]._documento + '">'
                    html += '           <div class="card-content">'
                    html += '               <h5>(' + data[i]._rol + ') ' + data[i]._nombre + ' ' + data[i]._apellido + '</h5>'
                    html += '               <p> DNI: ' + data[i]._documento + '</p>'
                    html += '               <p> Asistencias: <span id="cantidad' + data[i]._documento + '">' + data[i]._asistencia + '</span></p>'
                    html += '           </div>'
                    html += '           <div class="card-check">'
                    html += '               <span data-id="' + data[i]._documento + '" class="glyphicon glyphicon-ok span-registrar-card"></span>'
                    html += '           </div>'
                    html += '       </div>'
                    html += '   </div>'
                    html += '</div>'
                }
                $('#card-container').html(html);
            } else {
                $('#card-container').html('');
            }
        }, 'json');
    }
    
    $("#card-container").on("click", ".span-registrar-card", function () {
        id = $(this).data('id')
        $.post('../../controlador/load_asistencia.php', {
            caso: 5,
            id: id
        }, function (data) {
            //actualizarFila(id);
            //cargarDetalles(id);
            let valor = $("#" + id + ' #cantidad'+ id).html();
            $("#" + id + ' #cantidad'+ id).html(parseInt(valor) + 1);
            console.log(data);
            $.alert({
                title: 'Mensaje',
                content: 'Asistencia Registrada',
                confirmButton: '<button class="btn btn-primary" style="color:  rgba(255,255,255,0.9);">OK</button>',
                keyboardEnabled: true
            });
        }, 'json');
    });

    $('#txtAsitencia').keyup(function () {
        if ($('#txtAsitencia').val().length> 3 || $('#txtAsitencia').val().length == 0 ) {
            cargar_asistencia($('#txtAsitencia').val());
        }
    });
})