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
        <script type="text/javascript" src="../js/script_asistencia_movil.js"></script>
        <!--PROPIOS-->
        <title></title>
    </head>
    <body class="full">
        <!-- Navigation -->
        <?php  include '../sidebar.html'  ?>
         <div id="datosusuario" data-idusuario="<?= $_SESSION['id'] ?>"> </div>
        <!-- Navigation -->
        <div class="col-md-offset-1 col-md-10 cuerpo page-content">
            <div class="row row-cuerpo">
                <div class="col-md-9 table-content">
                    <div class="col-md-3 no-padding user-content">
                        <div class="col-xs-12 col-md-12 bg-dark relojMovil">
                            <h3 class="text-center reloj" id="reloj">HH:MM:SS AM</h3>
                        </div>
                    </div>
                    <div class="col-md-12 col-xs-12">
                        <h3 style="font-size:23px;">REGISTRO DE ASISTENCIA</h3>
                    </div>
                    <div class="col-xs-12">
                        <div class="row">
                            <div class="col-xs-12" id="inputAsistencia">
                                <div class="input-group col-xs-12">
                                    <input type="text" min="0" class="form-control col-md-10" id="txtAsitencia" data-idalumno="0" data-idanterior="0" />
                                </div>
                            </div>
                        </div>
                        <p></p>
                        <div class="row">
                            <div class="col-md-12" id="card-container"></div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="row row-cuerpo">
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