<?php
include("cnx_.php");	

class clssql_tardanza {

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
	
	function listar_tardanza_por_rango($fechainicio, $fechafin, $tardanza){
		$sql=" 
         ";
		$rsql = $this->select($sql);
		return $rsql;		
	}
    function listar_tardanza_por_dia($fechainicio, $tardanza){
		$sql=" 
        with data as (select p.id as idpersona,p.apellidos||' '||p.nombres as alumno,numero as aula,
        coalesce(car.carrera,'SIN CARRERA') AS carrera,p.telefono
        from persona p inner join alumno a on p.id=a.idpersona
        inner join ciclo cic on cic.id=a.idciclo
        inner join aula aul on aul.id=a.idaula			  
        left join carrera car on car.id=a.idcarrera
        where cic.estado=true and a.estado=true
        ), dataasistencia as (
        select idpersona,min(fecha_hora) as asistencia from asistencia where fecha_hora::date=now()::Date
        group by idpersona
        )
        select dd.idpersona,alumno,aula,carrera,case when asistencia is not null then 1 else 0 end as cantidad,
        asistencia,
        (asistencia - '19:40:00'::interval)-- > 0 then 1 else 0 end
        from data dd left join dataasistencia da on dd.idpersona=da.idpersona
        where dd.idpersona not in (1,2,3)
        order by alumno";
		$rsql = $this->select($sql);
		return $rsql;		
	}
}
?>