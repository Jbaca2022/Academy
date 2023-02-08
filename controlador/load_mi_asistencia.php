<?php

include("../modelo/clssql_mi_asistencia.php");
if (isset($_POST['caso'])) {//el isset determina si la variable que se pasa existo o no
    $caso = $_POST['caso'];
}
if (isset($_GET['caso'])) {
    $caso = $_GET['caso'];
}

$obj = new clssql_mi_asistencia();

switch ($caso) {
    case 1:
        $idusuario = $_POST['idusuario'];
        $idturno = $_POST['idturno'];
        $fila = $obj->listar_mi_asistencia($idusuario, $idturno);
        while ($row = pg_fetch_assoc($fila)) {
            $Json[] = $row;
        }
        echo json_encode($Json);
        break;     
    }
    ?>