<?php
session_start();
?>
<!DOCTYPE html>
<html lang="es" class="full">
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
        <link href="vista/css/auth.css" rel="stylesheet">
        <link href="vista/css/navbar_index.css" rel="stylesheet">
        <link href="vista/css/jquery-confirm.css" rel="stylesheet" type="text/css" />

        <script type="text/javascript" src="vista/js/jquery-1.11.3.min.js"></script>
        <script type="text/javascript" src="vista/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="vista/js/script_index.js"></script>
        <script type="text/javascript" src="vista/js/bootstrap-submenu.min.js"></script>
        <script type="text/javascript" src="vista/js/jquery-confirm.min.js"></script>
    </head>
    <body>
        <!-- Navigation -->
        <?php include 'vista/navbar.html' ?>
        <!-- Navigation --> 
        <section class="card container auth-container right ">
            <div class="formlogeo">
                <div class="row">
                    <div class="text-center">
                        <img src="vista/img/logo.png" class="img-circle">
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <div class="input-group">
                                <label for="txtusuario" class="form-label text-light">Usuario</label>
                                <input value="" id="txtusuario" type="password" class="form-control" placeholder="Escriba nombre de usario">
                            </div>
                            <p></p>
                            <div class="input-group">
                                <label for="txtpassword" class="form-label text-light">Contraseña</label>
                                <input value="" id="txtpassword" type="password" class="form-control" placeholder="Ingresa contraseña"/>
                            </div>
                            <hr>
                            <button class="btn btn-primary btn-block" id="btnlogeo">INGRESAR</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </body>
</html>