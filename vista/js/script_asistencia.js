$(document).ready(function () {

cargar_asistencia();
function cargar_asistencia() {

    $.post('../../controlador/load_asistencia.php', {
        caso: 1
    }, function (data) {
        console.log(data);
        /* if (data != null) {
            var html = '';
            html += '<option value = "0"> SELECCIONAR </option>';
            for (var i = 0; i < data.length; i++) {
                html += '<option data-tipo="' + data[i].tipo + '" value="' + data[i].id + '" >' + data[i].nombre + '</option>';
            }
            $('#select_annociclo').html(html);
        } */
    }, 'json');
  }

}
);