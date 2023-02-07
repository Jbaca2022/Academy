$(document).ready(function () {
    cargar_asistencia()
    function cargar_asistencia() {
        $.post('../../controlador/load_asistencia.php', {
            caso: 1
        }, function (data) {
            if (data != null) {
                var html = '';
                for (var i = 0; i < data.length; i++){
                    html += '<div class="col-sm-12 no-padding">'
                    html += '   <div class="card">'
                    html += '       <div class="card-body">'
                    html += '           <div class="card-content">'
                    html += '               <h5>' + data[i]._rol + ' - ' + data[i]._nombre + '</h5>'
                    html += '               <p> DNI: ' + data[i]._documento + '</p>'
                    html += '           </div>'
                    html += '           <div class="card-check">'
                    html += '               <span data-id="' + data[i]._documento + '" class="glyphicon glyphicon-ok span-registrar-card"></span>'
                    html += '           </div>'
                    html += '       </div>'
                    html += '   </div>'
                    html += '</div>'
                }
                $('#card-container').html(html)
            } 
        }, 'json');
    }
    
    $("#card-container").on("click", ".span-registrar-card", function () {
        id = $(this).data('id')
        $.post('../../controlador/load_asistencia.php', {
            caso: 5,
            id: id
        }, function (data) {
            actualizarFila(id);
            cargarDetalles(id);
            console.log(data)
        }, 'json');
    });
})