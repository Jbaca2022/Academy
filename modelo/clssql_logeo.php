<?php
include("cnx__.php");	

class clssql_logeo {

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