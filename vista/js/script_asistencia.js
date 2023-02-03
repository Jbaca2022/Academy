$(document).ready(function () {

    cargar_asistencia();
    console.log($('#modulo').data('id'));
    $('[data-toggle="offcanvas"]').click(function () {
        setTimeout(() => {
            user_resize()
        }, 600);
    });
    user_resize()
    function cargar_asistencia() {
        $.post('../../controlador/load_asistencia.php', {
            caso: 1
        }, function (data) {
            if (data != null) {
                var html = '';
                for (var i = 0; i < data.length; i++) {
                    html += '<tr class="tr-persona" id="'+ data[i]._documento+'" data-nombre="'+ data[i]._nombre + " " + data[i]._apellido +'" data-foto="'+  data[i]._id +'" data-id="'+  data[i]._documento +'"> '
                    html += '<td class="text-center">' + data[i]._documento + "</td>";
                    html += '<td class="text-center">' + data[i]._nombre + " " + data[i]._apellido  + "</td>";
                    html += '<td class="text-center">' + data[i]._rol + "</td>";
                    html += '<td class="text-center" id="cantidad'+ data[i]._documento +'">' + data[i]._asistencia + "</td>";
                    html +=
                    '   <td><span  data-id="' +
                    data[i]._id +
                    '"class="glyphicon glyphicon glyphicon-eye-open span-ver-asistencia"></span></td>';
                html += "</tr>";                
                    html += '</tr>'
                }
                $('#tbody-asistencia').html(html);
                $("#tbl-asistencia").DataTable({
                    ordering: false
                });
                $("#txtAsitencia").prop("disabled", false);
                //$('#selAsistencia').prop('disabled', false);
                $("#txtAsitencia").focus();              
            } 
        }, 'json');
    }
    setInterval(function () {
        let time = new Date()
        time = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
        $("#reloj").html(time.toString());
        //Pendiente validar cuando sean las 00 horas para actualizar tabla temporal
        const now = new Date().toLocaleDateString('en-US');
    }, 1000);

    $("#selAsistencia").change(function () {
        if ($("#selAsistencia option:selected").val() == 1) {
            $("#txtAsitencia").attr("type", "number");
        } else {
            $("#txtAsitencia").attr("type", "text");
        }
    });

    $("#tbl-asistencia").on("click", ".tr-persona", function () {
        var id = $(this).attr("id");
        var idanterior = 0;
        if ($("#selAsistencia option:selected").val() == 1) {
            idanterior = $("#txtAsitencia").data("idanterior");
        }
        if ($("#selAsistencia option:selected").val() == 2) {
            idanterior = $("#txtAsitencia").data("idalumno");
            $("#txtAsitencia").focus();
            $("#txtAsitencia").data("idalumno", id);
        }
        $("#txtAsitencia").data("idalumno", id);
        cargarDetalles(id);
        resaltarfila(id, idanterior);
    });

    function cargarDetalles(id) {
        //\fotospersonal
        let nombre = $("#" + id).data('nombre');
        let foto = $("#" + id).data('id');
        $("#detalle-persona").html(nombre);
        $("#fotopersona").attr(
            "style",
            "background-image: url(../fotopersonal/" + foto + ".jpg);"
          );
    }
    function resaltarfila(idcliente, idanterior) {
        if (idcliente != idanterior) {
            var element = "#" + idcliente;
            var element_a = "#" + idanterior;
            $(element).addClass("resaltar");
            $(element_a).removeClass("resaltar");
            idanterior = $("#txtAsitencia").data("idanterior", idcliente);
            preparar_asistencia(idcliente);
        }
    }
    function preparar_asistencia(id) {
        if ($("#selAsistencia option:selected").val() == 1) {
          $("#txtAsitencia").val(id);
          $("#txtAsitencia").focus();
        }
      }
    function registrar_asistencia() {
        if ($("#selAsistencia option:selected").val() == 1) {
            id = Number($("#txtAsitencia").val());

        }
        if ($("#selAsistencia option:selected").val() == 2) {
            id = $("#txtAsitencia").data("idalumno");
        }
        $.post('../../controlador/load_asistencia.php', {
            caso: 5,
            id: id
        }, function (data) {
            actualizarFila(id);
            cargarDetalles(id);
        }, 'json');
    }

    $("#btn-registrar").on("click", function () {
        registrar_asistencia();
    });

    function actualizarFila(id) {
        //Se conecto 
        $("#conectividad").html('<h3 class="text-primary"><b>EN LÍNEA</b></h3>');
        //Actualizar la data asistencias
        //$("#td-asistencia" + data.idalumno).html(data.asistencia);
        $("#txtAsitencia").val("");
        
        //Actualizar la data maxhora
        let valor = $("#" + id + ' #cantidad'+ id).html();
        $("#" + id + ' #cantidad'+ id).html(parseInt(valor) + 1);
    }
    $("#txtAsitencia").on("keyup click", function (tecla) {
        var id = 0;
        var idanterior = 0;
        //$('#txtAsitencia').val(Number($('#txtAsitencia').val()));
        if ($("#selAsistencia option:selected").val() == 1) {
            id = Number($("#txtAsitencia").val());
            $("#txtAsitencia").data("idalumno", id);
        }

        if ($("#selAsistencia option:selected").val() == 2) {
            id = limpiarString($("#txtAsitencia").val());
        }

        //if ($('#txtAsitencia').data('idalumno') != 0) {
        if (tecla.keyCode == 13) {
            registrar_asistencia(); //----
        } else {
            $("tr").removeClass("resaltar");
            $("#tbl-asistencia")
            .DataTable()
            .search(id)
            .draw();
            if ($("#selAsistencia option:selected").val() == 1) {
            idanterior = $("#txtAsitencia").data("idanterior");
            }
            if ($("#selAsistencia option:selected").val() == 2) {
            idanterior = 0;
            $(".tr-persona").each(function () {
                //Bucle para recorrer los apellidos
                let valor_tr = limpiarString($(this).data("persona")).toUpperCase();
                let textoescrito = limpiarString($("#txtAsitencia").val()).toUpperCase();
                if (valor_tr.includes(textoescrito)) {
                id = Number($(this).attr("id")); //Obtener el id de la persona
                return false;
                }
            });
            }
            $("#txtAsitencia").data("idalumno", id);
            resaltarfila(id, idanterior);
        }
    //}
    });
    function limpiarString(texto) {
        return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    }

    function ver_detalle_asistencia(element) {
        console.log(element);
        $("#tbody-detalle-asistencia").html("");
        $(".vent-asistencia").modal("show");
        id = $(element).data("id");
        console.log(id);
        $("#footer-alumno").html($("#" + id).data("nombre"));
        $.post('../../controlador/load_asistencia.php', {
            caso: 3, id: id
        }, function (data) {
            if (data != null) {
                var html;
                for (i = 0; i < data.length; i++) {
                html += '<tr id="tr-' + data[i]._id + '">';
                html += "   <td>" + data[i]._dia + "</td>";
                html += "   <td>" + data[i]._hora + "</td>";
                html +=
                    '   <td id="' +
                    data[i]._id +
                    '" data-idalumno="' +
                    data[i]._persona +
                    '" class="delete-asistencia">';
                html +=
                    '       <span class="glyphicon glyphicon-trash close"></span>';
                html += "   </td>";
                html += "</tr>";
                }
                $("#tbody-detalle-asistencia").html(html); 
                user_resize()
            } 
        }, 'json');



       /*  $.getJSON(
            "../controlador/load_asistencia.php?caso=9",
            {
            idalumno: id,
            indicador: $("#" + id).data("indicador"),
            tipo: $("#" + id).data("tipo")
            },
            function (data) {
            if (data != null) {
                var html;
                for (i = 0; i < data.length; i++) {
                html += '<tr id="tr-' + data[i].id + '">';
                html += "   <td>" + data[i].fecha + "</td>";
                html += "   <td>" + data[i].hora + "</td>";
                html += "   <td>" + data[i].descripcion + "</td>";
                html +=
                    '   <td id="' +
                    data[i].id +
                    '" data-idalumno="' +
                    data[i].idcliente +
                    '" class="delete-asistencia">';
                html +=
                    '       <span class="glyphicon glyphicon-trash close"></span>';
                html += "   </td>";
                html += "</tr>";
                }
                $("#tbody-detalle-asistencia").html(html);
            }
            }
        ); */
    }

    $("#tbl-asistencia").on("click", ".span-ver-asistencia", function () {
        ver_detalle_asistencia(this);
    });

    $("#tbl-asistencia").on("dblclick", ".tr-persona", function () {
        ver_detalle_asistencia(this);
    });

    $(".vent-asistencia").click(function () {
        $("#txtAsitencia").focus();
    });

    $("#tbody-detalle-asistencia").on("click", ".delete-asistencia", function () {
        var idasistencia = $(this).attr("id");
        var id = $(this).data("idalumno");
        $.confirm({
            title: "Confirmar!",
            content: "Seguro de eliminar el registro de asistencia",
            confirmButton: "[Si]",
            cancelButton: "[No]",
            keyboardEnabled: true,
            confirm: function () {
                $.post('../../controlador/load_asistencia.php', {
                    caso: 4, id: idasistencia
                }, function (data) {
                    $("#td-asistencia" + id).html(
                        Number($("#td-asistencia" + id).html()) - 1
                    );
                    $("#tr-" + idasistencia).remove();
                }, 'json');
            },
            cancel: function () {
            //$.alert('Canceled!')
            }
        });
    });
});
function user_resize(){
    if (window.innerWidth <= 1153 || $('#wrapper')[0].classList.contains('toggled') && window.innerWidth <= 1330) {
        $('.user-content').addClass('col-md-12');
        $('.user-content').addClass('small-toggle');
        $('.user-content').removeClass('col-md-3');
        $('.table-content').addClass('col-md-12');
        $('.table-content').removeClass('col-md-9');
    }else{
        $('.user-content').addClass('col-md-3');
        $('.user-content').removeClass('col-md-12');
        $('.user-content').removeClass('small-toggle');
        $('.table-content').addClass('col-md-9');
        $('.table-content').removeClass('col-md-12');
    };
}
$(window).resize(function() {
    user_resize();
});