$(document).ready(function () {
    cargar_asistencia();
    function cargar_asistencia() {
        let idusuario = $("#modulo").data("id");
        $.post('../../controlador/load_mi_asistencia.php', {
            caso: 1, idusuario: idusuario
        }, function (data) {

            let html;
            console.log(data);
        }, 'json');
    }
});