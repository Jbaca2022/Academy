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

	function registrarasistencia($id){
		$sql=" select * from fn_asistencia_insertar($id)";
		$rsql = $this->select($sql);
		return $rsql;		
	}
	function listarasistenciaporalumno($id){
		$sql=" select * from fn_asistencia_detalle_alumno($id)";
		$rsql = $this->select($sql);
		return $rsql;		
	}	
}
?>