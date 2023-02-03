<?php
include("cnx_.php");	

class clssql_mi_asistencia {

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
	
	function listar_mi_asistencia($idusuario){
		$sql=" 
            with data as (
            select id,fechainicio,fechafin from ciclo where estado
            ),dias as (
            select *  from generate_series((select fechainicio from data),(select fechafin from data),'1 day')
            ), asistencia as (
            select fecha_hora::date,min(fecha_hora) as horaregistro from asistencia where idpersona=$idusuario group by fecha_hora::date
            )
            select upper(to_char(generate_series,'TMmonth')) as f_nombremes,
            upper(to_char(generate_series,'day')) as f_nombresemana,
            to_char(generate_series,'dd') as diam,
            coalesce(to_char(asis.horaregistro,'hh:mi:ss AM'),'-') as  horam,
            extract(week from generate_series::date) as semana,
             date_part('dow',generate_series::date) as dow,
            '' as estado,
            generate_series::date from dias dd left join asistencia asis on asis.fecha_hora=generate_series::date;";
		$rsql = $this->select($sql);
		return $rsql;		
	}
	
}
?>