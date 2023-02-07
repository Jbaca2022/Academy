<?php

include("../modelo/clssql_tardanza.php");
if (isset($_POST['caso'])) {//el isset determina si la variable que se pasa existo o no
    $caso = $_POST['caso'];
}
if (isset($_GET['caso'])) {
    $caso = $_GET['caso'];
}

$obj = new clssql_tardanza();

switch ($caso) {
    case 1:
        $fechainicio = $_POST['fechainicio'];
        $fechafin = $_POST['fechafin'];
        $tardanza = $_POST['tardanza'];
        $fila = $obj->listar_tardanza_por_rango($fechainicio, $fechafin, $tardanza);
        while ($row = pg_fetch_assoc($fila)) {
            $Json[] = $row;
        }
        echo json_encode($Json);
        break;   
    case 2:
        $fechainicio = $_POST['fechainicio'];
        $tardanza = $_POST['tardanza'];
        $fila = $obj->listar_tardanza_por_dia($fechainicio, $tardanza);
        while ($row = pg_fetch_assoc($fila)) {
            $Json[] = $row;
        }
        echo json_encode($Json);
        break;           
    }
    ?>