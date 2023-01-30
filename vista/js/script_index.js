$(document).ready(function() {
    var permisomododulo;
    permiso();
    modulo();
    $(".frmlogeo").css({ display: "block" });

    function modulo() {
        var idusuario = $("#modulo").data("id");
        console.log($("#modulo").data("id"));
        console.log('+++');

        if (idusuario === "") {
            $(".frmlogeo").css({ display: "block" });
            $("#frm-cerrar").css({ display: "none" });
        } else {
            $(".frmlogeo").css({ display: "none" });
            $("#frm-cerrar").css({ display: "block" });
        }
    }  
    function permiso() {
    }

    $("#txtusuario,#txtpassword").keypress(function(e) {
        if (e.which == 13) {
            enviarlogeo();
        }
    });
    $("#btnlogeo").click(function() {
        enviarlogeo();
    });

    function enviarlogeo() {
        var usuario = $("#txtusuario").val();
        var password = $("#txtpassword").val();
        if (usuario !== "" && password !== "") {
            $.post(
                "controlador/load_logueo.php", {
                    caso: "1",
                    user: usuario,
                    pass: password
                },
                function(data) {
                    console.log(data[0]._estado);
                    if (data[0]._estado == 't') {
                        $("#bloqueo").css('display', 'none');
                        console.log(data[0]._id);
                        console.log('---');

                        $('#modulo').data('id', data[0]._id);
                        $('#modulo').data('nombre', data[0]._nombre);
                        $('#modulo').data('apellido', data[0]._apellido);
                        $('#modulo').data('rol', data[0]._rol);
                        //$(location).attr('href','vista/menu.php');
                        modulo();
                        permiso();
                        $(".frmlogeo").css({ display: "none" });

                    } else {
                        $('#errorLog').css('display','block')
                    }
                },
                "json"
            );
            // return false;
        } else {
            // return false;
        }
    }
    // $("#pactualizar").click(function() {
    //     $.post(
    //         "/v4cima/controlador/load_logeo.php", {
    //             caso: 5
    //         },
    //         function(data) {
    //             logeo(data, 2);
    //         },
    //         "json"
    //     );
    // });
    // $("#cerrar").click(function() {
    //     $.confirm({
    //         title: "¡Confirmar!",
    //         content: "¿Esta seguro de cerrar sesión?",
    //         animation: "zoom",
    //         confirmButton: '<button class="btn btn-primary" style="color: rgba(255,255,255,0.9);">SI</button>',
    //         cancelButton: '<button class="btn btn-danger" style="color: rgba(255,255,255,0.9);">NO</button>',       
    //         closeAnimation: "zoom",
    //         keyboardEnabled: true,
    //         //            buttons: {
    //         confirm: function() {
    //                 $.get("/v4cima/controlador/load_logeo.php?caso=3", function() {
    //                     $("#bloqueo").css("display", "none");
    //                     $("#modulo").data("colegio", 0);
    //                     $("#modulo").data("academia", 0);
    //                     $("#modulo").data("admision", 0);
    //                     $("#modulo").data("contabilidad", 0);
    //                     $("#modulo").data("asistencia", 0);
    //                     $("#modulo").data("mantenimiento", 0);
    //                     $("#modulo").data("osimrep", 0);
    //                     $("#modulo").data("idusuario", "");
    //                     modulo();
    //                     $("#modulo").data("osimrep", "");
    //                     window.location.href = "/v4cima/index.php";
    //                 });
    //                 //return true;
    //             }
    //             //                ,
    //             //                cancel: function () {
    //             //                }
    //     });
    // });
    // setInterval(function() {
    //     $.getJSON("/v4cima/vista/inactividad.php", function(data) {
    //         if (!data[0].cima) {
    //             if (
    //                 $("#nusuario")
    //                 .html()
    //                 .replace("\n", "") !== ""
    //             ) {
    //                 location.reload();
    //             }
    //         }
    //     });
    // }, 60000);
});