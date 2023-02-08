<?php

include("../modelo/clssql_asistenciaindividual.php");
if (isset($_POST['caso'])) {//el isset determina si la variable que se pasa existo o no
    $caso = $_POST['caso'];
}
if (isset($_GET['caso'])) {
    $caso = $_GET['caso'];
}

$obj = new clssql_asistenciaindividual();

switch ($caso) {
    case 1:
        $fila = $obj->listar_alumnos();
        while ($row = pg_fetch_assoc($fila)) {
            $Json[] = $row;
        }
        echo json_encode($Json);
        break;    
    case 2:
        $idpersona = $_POST['idpersona'];
        $fila = $obj->listar_asistencia($idpersona);
        while ($row = pg_fetch_assoc($fila)) {
            $Json[] = $row;
        }
        echo json_encode($Json);
        break;     
    case 3:
        $idpersona = $_POST['idpersona'];
        $idturno = $_POST['idturno'];
        $fila = $obj->listar_asistencia_turno($idpersona, $idturno);
        while ($row = pg_fetch_assoc($fila)) {
            $Json[] = $row;
        }
        echo json_encode($Json);
        break;                 
    }
    ?>