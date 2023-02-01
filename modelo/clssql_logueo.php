<?php
include("cnx.php");	

class clssql_logueo {

	function select($sql){
		$cnx=conectaPgSQL();
		$rsql=pg_query($cnx,$sql);
		try{
			return $rsql;
		}
		catch (Exception $e){
			return null;
		}
	}
	
	function listarLogueo($user, $pass){
		$sql= "select * from fn_logeo('$user','$pass')";
		$rsql = $this->select($sql);
		return $rsql;		
	}
}
?>