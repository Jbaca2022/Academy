<?php

//Conexion Academia POSTGRESQL
function conectaPgSQL() {
     $servidor = '192.168.20.107';    
    $port = 5432;
    $usuario = 'postgres';
    $clave = '123*01prueba';
    $nombrebd = 'control';
    $str = 'host=' . $servidor . ' port=' . $port . ' dbname=' . $nombrebd . ' user=' . $usuario . ' password=' . $clave;
    $link = pg_connect($str) or die('No se ha podido conectar');
    return $link;
}
?>