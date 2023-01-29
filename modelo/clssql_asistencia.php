<?
include("cnx.php");	

class clssql_asistencia {

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
	
	function listarasistencia(){
		$sql=" select * from fn_listar_asistencia()";
		$rsql = $this->select($sql);
		return $rsql;		
	}
}
?>