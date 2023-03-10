<?php
session_start();
?>
<!DOCTYPE html>
<html lang="es" class="full">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">
        <title>Sistema Academia</title>
        <!-- Bootstrap Core CSS -->
        <link href="vista/css/bootstrap.min.css" rel="stylesheet">
        <link href="vista/css/bootstrap-submenu.min.css" rel="stylesheet">
        <link href="vista/css/fuentes.css" rel="stylesheet">
        <link href="vista/css/index.css" rel="stylesheet">
        <link href="vista/css/navbar_index.css" rel="stylesheet">
        <link href="vista/css/loading.css" rel="stylesheet">
        <link href="vista/css/auth.css" rel="stylesheet">
        <link href="vista/css/jquery-confirm.css" rel="stylesheet" type="text/css" />
        
        <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
        <script type="text/javascript" src="vista/js/jquery-1.11.3.min.js"></script>
        <script type="text/javascript" src="vista/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="vista/js/script_index.js">
        </script>
        <script type="text/javascript" src="vista/js/bootstrap-submenu.min.js"></script>
        <script type="text/javascript" src="vista/js/jquery-confirm.min.js"></script>
    </head>
    <body>
        <?php include 'vista/sidebar.html' ?>
        <div class="page-content"></div>
        <div class="row frmlogeo col-12">
            <section class="col-md-6" id="image-login">
            </section>
            <section class="col-md-6 col-xs-12 col-sm-12" id="auth-content">
                <article class="card">
                    <section class="card-body">
                        <div action="" class="sh-form form-group">
                            <section class="auth_thumb sh-mb-3">
                                <img src="vista/img/Excelencia.png"
                                alt="logo" class="img-fluid">
                            </section>
                            <h2 class="auth_title sh-mb-3">
                                Inicio de sesi??n
                            </h2>
                            <div class="auth_separator"></div>
                            <section>
                                <div class="input-group">
                                    <label for="txtusuario" class="form-label">Usuario</label>
                                    <input value="" id="txtusuario" type="text" class="form-control" placeholder="Escriba nombre de usario">
                                </div>
                                <p></p>
                                <div class="input-group">
                                    <label for="txtpassword" class="form-label">Contrase??a</label>
                                    <input value="" id="txtpassword" type="password" class="form-control" placeholder="Ingresa contrase??a"/>
                                </div>
                                <p id="errorLog">Usuario y/o contrase??a incorrectos</p>
                                <button class="btn btn-danger btn-block" style="border-color: #000C38 !important;" id="btnlogeo">INGRESAR</button>
                            </section>
                        </div>
                    </section>
                </article>
            </section>
        </div>
        <script>
            var idusuario = $("#modulo").data("id");
            if (idusuario !== "") {
                $('#wrapper').addClass('toggled');
            }
        </script>
        <?php include 'vista/loading.html' ?>
    </body>
</html>