<?php

include("../modelo/clssql_asistencia.php");
if (isset($_POST['caso'])) {//el isset determina si la variable que se pasa existo o no
    $caso = $_POST['caso'];
}
if (isset($_GET['caso'])) {
    $caso = $_GET['caso'];
}

$obj = new clssql_asistencia();

switch ($caso) {

    case 1:
        /* $tipoannociclo = $_POST['tipoannociclo']; */
        $fila = $obj->listarasistencia();
        while ($row = pg_fetch_assoc($fila)) {
            $Json[] = $row;
        }
        echo json_encode($Json);
        break;
    case 2:
        $id = $_POST['id'];
        $fila = $obj->registrarasistencia($id);
        while ($row = pg_fetch_assoc($fila)) {
            $Json[] = $row;
        }
        echo json_encode($Json);
        break;
    case 3:
        $id = $_POST['id'];
        $fila = $obj->listarasistenciaporalumno($id);
        while ($row = pg_fetch_assoc($fila)) {
            $Json[] = $row;
        }
        echo json_encode($Json);
        break;
    }
    ?>