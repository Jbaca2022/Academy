<?php
    session_start();
    //acceso($_SESSION['v4permiso'], $acceso);
?>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="../css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <link href="../css/bootstrap-submenu.min.css" rel="stylesheet" type="text/css" />
        <link href="../css/jquery-confirm.css" rel="stylesheet" type="text/css" />
        <link href="../css/jquery-ui.css" rel="stylesheet" type="text/css" />
        <link href="../css/datatables.min.css" rel="stylesheet" type="text/css" />
        <link href="../css/bootstrap-datetimepicker.css" rel="stylesheet" type="text/css" />
        <link href="../css/fuentes.css" rel="stylesheet"/>
        <link href="../css/navbar_index.css" rel="stylesheet"/>
        <link href="../css/bootstrap-select.min.css" rel="stylesheet"/>

        <script type="text/javascript" src="../js/jquery-1.11.3.min.js"></script>
        <script type="text/javascript" src="../js/bootstrap.min.js"></script>
        <script type="text/javascript" src="../js/bootstrap-submenu.min.js"></script>
        <script type="text/javascript" src="../js/jquery-ui.js"></script>
        <script type="text/javascript" src="../js/jquery-confirm.min.js"></script>
        <script type="text/javascript" src="../js/datatables.min.js"></script>
        <script type="text/javascript" src="../js/moment.min.js"></script>
        <script type="text/javascript" src="../js/bootstrap-datetimepicker.js"></script>
        <script type="text/javascript" src="../js/bootstrap-select.min.js"></script>
        <script type="text/javascript" src="../js/script_index.js"></script>

        <!--PROPIOS-->
        <link href="../css/asistencia2.0.css" rel="stylesheet" type="text/css" />
        <link href="../css/asistencia-personal.css" rel="stylesheet" type="text/css" />
        <script type="text/javascript" src="../js/script_inasistenciadiaria.js"></script>
        <!--PROPIOS-->
        <title></title>
    </head>
    <body class="full">
        <!-- Navigation -->
        <?php  include '../sidebar.html'  ?>
         <div id="datosusuario" data-idusuario="<?= $_SESSION['id'] ?>"> </div>
        <!-- Navigation -->
        <div class="col-md-offset-1 col-md-10 col-sm-12 col-xs-12 cuerpo page-content">
            <div class="row row-cuerpo">
                <div class="col-md-12">
                    <div class="col-md-12">
                        <h3>INASISTENCIA DIARIA</h3>
                    </div>
                </div>
            </div>
            <div class="row row-cuerpo">
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="row justify-end">
                                <input type="date" class="col-md-3 col-sm-6 col-xs-12" name="" id="txtfecha" value="<?= date('Y-m-d') ?>">
                                <span class=col-md-7></span>
                                <button type="button" id="btnimprimir" class="btn btn-success btn-lg col-md-2 col-sm-6 col-xs-12" style="background:#000C38; margin-right:15px;">
                                    <span class="glyphicon glyphicon-print" aria-hidden="true"></span> Imprimir
                                </button>
                            </div>
                            <div class="row" style="overflow: hidden; height: 1px;">
                                <div class="col-md-12">
                                    <span class="input-group-addon">
                                        <span></span>
                                    </span>
                                </div>
                            </div>
                            <div class="row divimprimir table-container">
                                <div class="col-md-12 tbl-asistencia">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </body>
</html>