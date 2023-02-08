<?php
include("cnx__.php");	

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
		$sql=" with data as (select p.id as idpersona,p.apellidos||' '||p.nombres as alumno,numero as aula,
        coalesce(car.carrera,'SIN CARRERA') AS carrera,p.telefono
        from persona p inner join alumno a on p.id=a.idpersona
        inner join ciclo cic on cic.id=a.idciclo
        inner join aula aul on aul.id=a.idaula
        left join carrera car on car.id=a.idcarrera
        where cic.estado=true and a.estado=true
        ), dataasistencia as (
            select idpersona,min(fecha_hora) as asistencia from asistencia where
            fecha_hora::date between '$fechainicio'::date and '$fechafin'::date
            group by idpersona,fecha_hora::date
        ), datatardanza as (
            select idpersona,asistencia::date,count(*) as cantidad,
            case when (min(asistencia)::time >  '$tardanza'::interval) then 1 else 0 end as tardanza
            from dataasistencia group by idpersona,asistencia::date
        ),dataagrupada as ( select idpersona,sum(cantidad) as cantidad, sum(tardanza) as tardanza
          from datatardanza group by idpersona)
        select dd.idpersona,alumno,aula,carrera, coalesce(cantidad,0) as cantidad, coalesce(tardanza,0) as tardanza
        from data dd left join dataagrupada da on dd.idpersona=da.idpersona
        where dd.idpersona not in (1,2,3)
        order by alumno;
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
        select idpersona,min(fecha_hora) as asistencia from asistencia where fecha_hora::date=$fechainicio::Date
        group by idpersona
        )
        select dd.idpersona,alumno,aula,carrera,case when asistencia is not null then 1 else 0 end as cantidad,
        case when (asistencia::time >  '$tardanza'::interval) then 1 else 0 end as tardanza
        from data dd left join dataasistencia da on dd.idpersona=da.idpersona
        where dd.idpersona not in (1,2,3)
        order by alumno";
		$rsql = $this->select($sql);
		return $rsql;		
	}
}
?>