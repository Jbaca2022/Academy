<?php

//Conexion Academia POSTGRESQL
function conectaPgSQL() {
     $servidor = 'localhost';    
    $port = 5433;
    $usuario = 'postgres';
    $clave = 'root';
    $nombrebd = 'academia';
    $str = 'host=' . $servidor . ' port=' . $port . ' dbname=' . $nombrebd . ' user=' . $usuario . ' password=' . $clave;
    $link = pg_connect($str) or die('No se ha podido conectar');
    return $link;
}
?>