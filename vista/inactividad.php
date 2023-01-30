<?php 
	session_start();
	if (isset($_SESSION['sistema'])){
		$sistema = array('cima'=>true);
	}else{
		$sistema = array('cima'=>false);
	}
	$jsonSession[] =  $sistema;
	
	echo json_encode($jsonSession);
?>