$(document).ready(function() {
    var permisomododulo;
    permiso();
    modulo();
    
    var trigger = $('.cross'),
    isClosed = false;

    trigger.click(function () {
     cross();      
    });

    function cross() {
      if (isClosed == true) {          
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }
  
    $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
        $('.page-content').toggleClass('content-toggled');
    });

    function modulo() {
        var idusuario = $("#modulo").data("id");
        console.log($("#modulo").data("id"));
        console.log($('#wrapper'));

        if (idusuario === "") {
            $(".frmlogeo").css({ display: "block" });
            $(".welcome").css({ display: "none" });
            $("#frm-cerrar").css({ display: "none" });
        } else {
            $(".welcome").css({ display: "block" });
            $(".frmlogeo").css({ display: "none" });
            $("#frm-cerrar").css({ display: "block" });
            $('#wrapper').css({display: 'block'});
        }
    }  
    function permiso() {
        var idrol = $("#modulo").data("rol");
        $("#NavbarTardanza").css({ display: "none" });
        if (idrol == "ALUMNO") {
            $("#NavbarAsistencia").css({ display: "none" });
            $("#NavbarAsistenciaReporte").css({ display: "none" });
            $("#NavbarMiAsistencia").css({ display: "block" });
        } else {
            $("#NavbarAsistencia").css({ display: "block" });
            $("#NavbarAsistenciaReporte").css({ display: "block" });
            $("#NavbarMiAsistencia").css({ display: "none" });
        }
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
            $(".loading").css({ display: "flex" });
            $.post(
                "/Academy/controlador/load_logeo.php", {
                    caso: 1,
                    user: usuario,
                    pass: password
                },
                function(data) {
                    console.log(data[0]._estado);
                    if (data[0]._estado == 't') {
                        $("#bloqueo").css('display', 'none');
                        console.log(data[0]._id);
                        console.log('---');

                        $('#wrapper').css('display', 'block');
                        $('#wrapper').addClass('toggled');
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
                    $(".loading").css({ display: "none" });
                },
                "json"
                ).fail(function() {
                    $(".loading").css({ display: "none" });
                    setTimeout(() => {
                        alert( "Error de conexión" );
                    }, 100);
                })
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