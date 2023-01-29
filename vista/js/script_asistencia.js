$(document).ready(function () {

cargar_asistencia();
function cargar_asistencia() {

    $.post('../../controlador/load_asistencia.php', {
        caso: 1
    }, function (data) {
        console.log(data);
         if (data != null) {
            var html = '';
            for (var i = 0; i < data.length; i++) {
                html += '<tr>'
                html += "   <td>" + data[i]._documento + "</td>";
                html += "   <td>" + data[i]._nombre + data[i]._apellido  + "</td>";
                html += "   <td>" + data[i]._rol + "</td>";
                html += "   <td>" + data[i]._asistencia + "</td>";
                html += '</tr>'


            }
            $('#tbody-asistencia').html(html);
        } 
    }, 'json');
  }

}
);