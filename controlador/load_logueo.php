<?php

include("../modelo/clssql_logueo.php");
if (isset($_POST['caso'])) {//el isset determina si la variable que se pasa existo o no
    $caso = $_POST['caso'];
}
if (isset($_GET['caso'])) {
    $caso = $_GET['caso'];
}

$obj = new clssql_logueo();

switch ($caso) {
    case 1:        
        $user = $_POST['user'];
        $pass = $_POST['pass'];
        $fila = $obj->listarLogueo($user, $pass);
        while ($row = pg_fetch_assoc($fila)) {
            $Json[] = $row;
            session_start();
            $_SESSION['id'] = $row['_id'];
            $_SESSION['nombre'] = $row['_nombre'];
            $_SESSION['apellido'] = $row['_apellido'];
            $_SESSION['rol'] = $row['_rol'];
        }
        echo json_encode($Json);
        break;
    }
?>