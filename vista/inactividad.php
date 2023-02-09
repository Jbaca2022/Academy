<?php 
	session_start();
	if (isset($_SESSION['sistema'])){
		$sistema = array('Academy'=>true);
	}else{
		$sistema = array('Academy'=>false);
	}
	$jsonSession[] =  $sistema;
	
	echo json_encode($jsonSession);
?>