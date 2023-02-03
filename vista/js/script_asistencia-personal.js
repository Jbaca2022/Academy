$(document).ready(function () {
    var calendar_data = [
        {
            id: 48016,
            f_nombresmes: 'Diciembre',
            f_nombressemana: 'Thursday',
            diam: '01',
            horam: '07:39',
            horat:'03:07',
            semana:'48',
            dow:'4',
            estadom:'',
            estadot:'',
        },
    ];
    $('#calendar').append(cargar_asistencia(calendar_data, ''));
    function cargar_asistencia(data, turno) {
        var html = '	<div id="contTabla">';
        if (data !== null) {
            var mes = "";
            var semana = 0;
            var k = 0;
            for (i = 0; i < data.length; i++) {
                if (mes !== data[i]['f_nombresmes']) {
                    mes = data[i]['f_nombresmes'];
                    semana = data[i]['semana'];
                    //						if(semana_cab==data[i]['dow']){
                    html += '<div id="mes">' + data[i]['f_nombresmes'] + '</div>';
                    html += '<table width="200" id="tbl_asistencia" class="table table-bordered">';
                    html += '  <tr>';
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
                    //k = 0;
                    //alert('-->'+i);
                    for (j = k; j < data.length; j++) {
                        k++;
                        if (data[i]['f_nombresmes'] == data[j]['f_nombresmes'] && semana == data[j]['semana']) {
                            (data[j]['dow'] == 1) ? Lunes = data[j]['diam']: '';
                            (data[j]['dow'] == 2) ? Martes = data[j]['diam']: '';
                            (data[j]['dow'] == 3) ? Miercoles = data[j]['diam']: '';
                            (data[j]['dow'] == 4) ? Jueves = data[j]['diam']: '';
                            (data[j]['dow'] == 5) ? Viernes = data[j]['diam']: '';
                            (data[j]['dow'] == 6) ? Sabado = data[j]['diam']: '';
                            (data[j]['dow'] == 0) ? Domingo = data[j]['diam']: '';
                            hora = (turno == 'm') ? (data[j]['horam'] + data[j]['estadom']) : (data[j]['horat'] + data[j]['estadot']);
                            (data[j]['dow'] == 1) ? LunesHora_M = hora: '';
                            (data[j]['dow'] == 2) ? MartesHora_M = hora: '';
                            (data[j]['dow'] == 3) ? MiercolesHora_M = hora: '';
                            (data[j]['dow'] == 4) ? JuevesHora_M = hora: '';
                            (data[j]['dow'] == 5) ? ViernesHora_M = hora: '';
                            (data[j]['dow'] == 6) ? SabadoHora_M = hora: '';
                            (data[j]['dow'] == 0) ? DomingoHora_M = data[j]['horam'] + data[j]['estadom']: '';
                        } else {
                            semana = data[j]['semana'];
                            if (data[i]['f_nombresmes'] == data[j]['f_nombresmes']) {
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
                        if (data[i]['f_nombresmes'] != data[j]['f_nombresmes']) {
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
    }
});