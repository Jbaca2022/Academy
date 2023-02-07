<?php
include("cnx_.php");	

class clssql_inasistenciadiaria {

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

	function listar_inasistencia($fecha){
		$sql=" with data as (select p.id as idpersona,p.apellidos||' '||p.nombres as alumno,numero as aula,
        coalesce(car.carrera,'SIN CARRERA') AS carrera,p.telefono
        from persona p inner join alumno a on p.id=a.idpersona
        inner join ciclo cic on cic.id=a.idciclo
        inner join aula aul on aul.id=a.idaula			  
        left join carrera car on car.id=a.idcarrera
        where cic.estado=true and a.estado=true
        ), dataasistencia as (
        select idpersona from asistencia where fecha_hora::date='$fecha'::Date
        )
        select * from data where idpersona not in (select idpersona from dataasistencia)
        and idpersona not in (1,2,3)
        order by alumno";
		$rsql = $this->select($sql);
		return $rsql;		
	}
	
}
?>