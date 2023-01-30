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
            $('.full').css('margin-top','55px')
            $('.navbar').css('display', 'inline');
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

                        $('.navbar').css('display', 'inline');
                        $('.full').css('margin-top','55px')

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
    $("#cerrar").click(function () {
        $.confirm({
            title: "Confirmar!",
            content: "Esta seguro de cerrar sesión?",
            animation: "zoom",
            closeAnimation: "zoom",
            keyboardEnabled: true,
            //            buttons: {
            confirm: function () {
                $.get("/Academy/controlador/load_logueo.php?caso=3", function () {
                    $("#bloqueo").css("display", "none");
                    $("#modulo").data("nombre", "");
                    $("#modulo").data("apellido", "");
                    $("#modulo").data("rol", "");
                    $("#modulo").data("idusuario", "");
                    modulo();
                    window.location.href = "/Academy/index.php";
                });
            }
        });
    });
    setInterval(function () {
        $.getJSON("/Academy/vista/inactividad.php", function (data) {
            if (!data[0].cima) {
                if (
                    $("#nusuario")
                        .html()
                        .replace("\n", "") !== ""
                ) {
                    location.reload();
                }
            }
        });
    }, 60000);
    $('.dropdown-toggle').click(function () {
        var idusuario = $("#modulo").data("id");
        if (idusuario === 0) {
            $.get("/Academy/controlador/load_logeo.php?caso=3", function () {
                $("#bloqueo").css("display", "none");
                $("#modulo").data("nombre", "");
                $("#modulo").data("apellido", "");
                $("#modulo").data("rol", "");
                $("#modulo").data("idusuario", "");
                modulo();
                window.location.href = "/Academy/index.php";
            });
        }
    })
});