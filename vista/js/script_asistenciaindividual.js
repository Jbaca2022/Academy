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
        $('#nameAlumno').html($('#selectalumno option:selected').text())
    });

    function cargar_asistencia(idpersona) {
        $.post('../../controlador/load_asistenciaindividual.php', {
            caso: 2, idpersona: idpersona
        }, function (data) {
            if (data != null) {
                $('#calendar').append(cargar_calendario(data));
                mes_button();
            }
        }, 'json');
    }

    function cargar_calendario(data) {
        var html = '	<div id="contTabla">';
        if (data !== null) {
            var mes = "";
            var semana = 0;
            var k = 0;
            for (i = 0; i < data.length; i++) {
                if (mes !== data[i]['f_nombremes']) {
                    mes = data[i]['f_nombremes'];
                    semana = data[i]['semana'];
                    html += '<div class="mes">' + data[i]['f_nombremes'] + '</div>';
                    html += '<table class="table table-bordered" id="' + data[i]['f_nombremes'] + '">';
                    html += '  <tr class="cabecera">';
                    html += '		<th colspan="2" class="text-center bg-primary">LUNES</th>';
                    html += '		<th colspan="2" class="text-center bg-primary">MARTES</th>';
                    html += '		<th colspan="2" class="text-center bg-primary">MIÉRCOLES</th>';
                    html += '		<th colspan="2" class="text-center bg-primary">JUEVES</th>';
                    html += '		<th colspan="2" class="text-center bg-primary">VIERNES</th>';
                    html += '		<th colspan="2" class="text-center bg-primary">SÁBADO</th>';
                    html += '	</tr>';
                    var Lunes = '-';
                    var Martes = '-';
                    var Miercoles = '-';
                    var Jueves = '-';
                    var Viernes = '-';
                    var Sabado = '-';
                    var Domingo = '-';
                    var LunesHora_M = '-';
                    var MartesHora_M = '-';
                    var MiercolesHora_M = '-';
                    var JuevesHora_M = '-';
                    var ViernesHora_M = '-';
                    var SabadoHora_M = '-';
                    var DomingoHora_M = '-';
                    //alert('-->'+i);
                    for (j = k; j < data.length; j++) {
                        k++;
                        if (data[i]['f_nombremes'] == data[j]['f_nombremes'] && semana == data[j]['semana']) {
                            (data[j]['dow'] == 1) ? Lunes = data[j]['diam']: '';
                            (data[j]['dow'] == 2) ? Martes = data[j]['diam']: '';
                            (data[j]['dow'] == 3) ? Miercoles = data[j]['diam']: '';
                            (data[j]['dow'] == 4) ? Jueves = data[j]['diam']: '';
                            (data[j]['dow'] == 5) ? Viernes = data[j]['diam']: '';
                            (data[j]['dow'] == 6) ? Sabado = data[j]['diam']: '';
                            (data[j]['dow'] == 0) ? Domingo = data[j]['diam']: '';
                            hora = (data[j]['horam'] + data[j]['estado']);
                            (data[j]['dow'] == 1) ? LunesHora_M = hora: '';
                            (data[j]['dow'] == 2) ? MartesHora_M = hora: '';
                            (data[j]['dow'] == 3) ? MiercolesHora_M = hora: '';
                            (data[j]['dow'] == 4) ? JuevesHora_M = hora: '';
                            (data[j]['dow'] == 5) ? ViernesHora_M = hora: '';
                            (data[j]['dow'] == 6) ? SabadoHora_M = hora: '';
                            (data[j]['dow'] == 0) ? DomingoHora_M = data[j]['horam'] + data[j]['estado']: '';
                        } else {
                            semana = data[j]['semana'];
                            if (data[i]['f_nombremes'] == data[j]['f_nombremes']) {
                                j--;
                            }
                            html += '  <tr>';
                            html += '		<td' + '><b>' + Lunes + '</b></td>';
                            html += '		<td' + '>' + LunesHora_M + '</td>';
                            html += '		<td' + '><b>' + Martes + '</b></td>';
                            html += '		<td' + '>' + MartesHora_M + '</td>';
                            html += '		<td' + '><b>' + Miercoles + '</b></td>';
                            html += '		<td' + '>' + MiercolesHora_M + '</td>';
                            html += '		<td' + '><b>' + Jueves + '</b></td>';
                            html += '		<td' + '>' + JuevesHora_M + '</td>';
                            html += '		<td' + '><b>' + Viernes + '</b></td>';
                            html += '		<td' + '>' + ViernesHora_M + '</td>';
                            html += '		<td' + '><b>' + Sabado + '</b></td>';
                            html += '		<td' + '>' + SabadoHora_M + '</td>';
                            html += '  </tr>';
                            Lunes = '-';
                            Martes = '-';
                            Miercoles = '-';
                            Jueves = '-';
                            Viernes = '-';
                            Sabado = '-';
                            Domingo = '-';
                            LunesHora_M = '-';
                            MartesHora_M = '-';
                            MiercolesHora_M = '-';
                            JuevesHora_M = '-';
                            ViernesHora_M = '-';
                            SabadoHora_M = '-';
                            DomingoHora_M = '-';
                        }
                        if (data[i]['f_nombremes'] != data[j]['f_nombremes']) {
                            k = j;
                            j = data.length;
                        }
                    }
                    if (j == data.length) {
                        html += '  <tr>';
                        html += '		<td' + '>' + Lunes + '</td>';
                        html += '		<td' + '>' + LunesHora_M + '</td>';
                        html += '		<td' + '>' + Martes + '</td>';
                        html += '		<td' + '>' + MartesHora_M + '</td>';
                        html += '		<td' + '>' + Miercoles + '</td>';
                        html += '		<td' + '>' + MiercolesHora_M + '</td>';
                        html += '		<td' + '>' + Jueves + '</td>';
                        html += '		<td' + '>' + JuevesHora_M + '</td>';
                        html += '		<td' + '>' + Viernes + '</td>';
                        html += '		<td' + '>' + ViernesHora_M + '</td>';
                        html += '		<td' + '>' + Sabado + '</td>';
                        html += '		<td' + '>' + SabadoHora_M + '</td>';
                        html += '  </tr>';
                        Lunes = '-';
                        Martes = '-';
                        Miercoles = '-';
                        Jueves = '-';
                        Viernes = '-';
                        Sabado = '-';
                        Domingo = '-';
                        LunesHora_M = '-';
                        MartesHora_M = '-';
                        MiercolesHora_M = '-';
                        JuevesHora_M = '-';
                        ViernesHora_M = '-';
                        SabadoHora_M = '-';
                        DomingoHora_M = '-';
                        //---caballero =(
                    }
                    //					}
                    html += '</table>';
                }
            }
        }
        html += '	</div>';
        return html;
    };
});

function mes_button(){
    if (window.innerWidth <= 536) $('.mes').addClass('mes-button');
    else $('.mes').removeClass('mes-button');
    $(".mes-button").click( button => {
        if (button.target.classList.contains('calendar-open')) {
            $('#' + button.target.innerHTML).css(({ display: "none" }));
            button.target.classList.remove("calendar-open")
        } else{
            $('#' + button.target.innerHTML).css(({ display: "block" }));
            button.target.classList.add("calendar-open")
        }
    });
}

$(window).resize(function() {
    mes_button();
});