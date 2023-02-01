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
        <script type="text/javascript" src="../js/script_asistencia.js"></script>
        <!--PROPIOS-->
        <title></title>
    </head>
    <body class="full">
        <!-- Navigation -->
        <?php  include '../navbar.html' ?>
         <div id="datosusuario" data-idusuario="<?= $_SESSION['id'] ?>"> </div>
        <!-- Navigation -->
        <div class="col-md-offset-1 col-md-10 cuerpo">
            <div class="row row-cuerpo">
                <div class="col-xs-4 col-md-4">
                    <h3>REGISTRO DE ASISTENCIA</h3>
                </div>
                <div class="col-xs-5 col-md-5" id="conectividad">
                </div>
                <div class="col-xs-3 col-md-3 bg-dark">
                    <h3 class="text-center reloj" id="reloj">HH:MM:SS AM</h3>
                </div>
            </div>
            <div class="row row-cuerpo">
                <div class="col-xs-12 col-md-9">
                    <div class="row">
                        <div class="col-xs-2 col-md-3">
                            <select  class="form-control" id="selAsistencia" >
                                <option value="1">CÓDIGO</option>
                                <option value="2">APELLIDO</option>
                            </select>
                        </div>
                        <div class="col-xs-6 col-md-9">
                            <div class="input-group">
                                <input type="text" min="0" class="form-control" id="txtAsitencia" data-idalumno="0" data-idanterior="0" disabled/>
                                <span class="input-group-addon">
                                    <span class="glyphicon glyphicon-floppy-disk" id="btn-registrar"></span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <p></p>
                    <div class="row">
                        <div class="col-md-12 tbl-asistencia">
                            <table id="tbl-asistencia" class="display" cellspacing="0" width="100%">
                                <thead class="cabecera">
                                    <tr>
                                        <th>Documento</th>
                                        <th>Apellido y Nombres</th>
                                        <th width="20%">Descripción</th>
                                        <th>Asistencia</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody id="tbody-asistencia">
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-md-3">
                    <div class="thumbnail">
                    <img class="foto" src="../img/foto.png" id="fotopersona" style="background-image: url(0.jpg);"></img>
                        <div class="caption text-12">
                            <div class="panel panel-default">
                                <div class="panel-heading text-center" id="detalle-persona">
                                    SELECCIONE UN USUARIO
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--        <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".vent-asistencia">Detalle asistencia</button>-->
        <div class="modal fade vent-asistencia">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title">DETALLE DE ASISTENCIA</h4>
                    </div>
                    <div class="modal-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>FECHA</th>
                                    <th>HORA</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody id="tbody-detalle-asistencia">
                            </tbody>
                        </table>
                    </div>
                    <div class="modal-footer">
                        <h4 id="footer-alumno" class="text-center">NOMBRE DE LA PERSONA</h4>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>        