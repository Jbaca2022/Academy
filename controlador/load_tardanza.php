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
    case 3:
        //tardanza
        $fechainicio = $_POST['fechainicio'];
        $fechafin = $_POST['fechafin'];
        $idpersona = $_POST['idpersona'];
        $tardanza = $_POST['tardanza'];
        $fila = $obj->listar_detalle_tardanza($idpersona,$fechainicio,$fechafin, $tardanza);
        while ($row = pg_fetch_assoc($fila)) {
            $Json[] = $row;
        }
        echo json_encode($Json);
        break;  
    case 4:
        //asistencia
        $fechainicio = $_POST['fechainicio'];
        $tardanza = $_POST['tardanza'];
        $fechafin = $_POST['fechafin'];
        $idpersona = $_POST['idpersona'];        
        $fila = $obj->listar_detalle_asistencia($idpersona,$fechainicio,$fechafin);
        while ($row = pg_fetch_assoc($fila)) {
            $Json[] = $row;
        }
        echo json_encode($Json);
        break;                            
    }
    ?>