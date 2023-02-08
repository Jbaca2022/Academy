<?php
include("cnx__.php");	

class clssql_asistenciaindividual {

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
	

	function listar_alumnos(){
		$sql="SELECT p.id as idpersona,p.apellidos||' '||p.nombres as alumnos
         from persona p inner join alumno a on p.id=a.idpersona
        inner join ciclo cic on cic.id=a.idciclo
        where cic.estado=true and a.estado=true and p.id not in (1,2,3) 
        order by 2";
		$rsql = $this->select($sql);
		return $rsql;		
	}

	function listar_asistencia($idpersona){
		$sql=" 
            with data as (
            select id,fechainicio,fechafin from ciclo where estado
            ),dias as (
            select *  from generate_series((select fechainicio from data),(select fechafin from data),'1 day')
            ), asistencia as (
            select fecha_hora::date,min(fecha_hora) as horaregistro from asistencia where idpersona=$idpersona group by fecha_hora::date
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

	function listar_asistencia_turno($idpersona, $idturno){
		$sql=" 
		with data as (
			select id,fechainicio,fechafin from ciclo where estado
		),dias as (
			select *  from generate_series((select fechainicio from data),(select fechafin from data),'1 day')
		), asistenciabruta as (
			select fecha_hora::date as fecha,(fecha_hora) as fecha_hora,
			case 
				when 1=$idturno then 
					case
					when fecha_hora::time between '01:00:00'::time and '11:00:00'::time then 'Entrada'
					when fecha_hora::time between '11:00:01'::time and '14:00:00'::time then 'Salida'
					else '' end
			else 
					case
					when fecha_hora::time between '14:00:01'::time and '17:00:00'::time then 'Entrada'
					when fecha_hora::time between '17:00:01'::time and '23:00:00'::time then 'Salida'
					else '' end
			end as estado
			from asistencia where idpersona=$idpersona
		), asistencia as (
			select fecha::date,min(fecha_hora) as horaregistro,estado 
			from asistenciabruta where estado in ('Entrada','Salida')
			group by fecha::date,estado
		)
		select upper(to_char(generate_series,'TMmonth')) as f_nombremes,
		upper(to_char(generate_series,'day')) as f_nombresemana,
		to_char(generate_series,'dd') as diam,
		coalesce(to_char(asis.horaregistro,'hh:mi:ss AM'),'-') as  horam,
		coalesce(to_char(asis1.horaregistro,'hh:mi:ss AM'),'-') as  horasalida,
		extract(week from generate_series::date) as semana,
		 date_part('dow',generate_series::date) as dow,
		'' as estado,
		generate_series::date 
		from dias dd left join asistencia asis on asis.fecha=generate_series::date and asis.estado='Entrada'
		left join asistencia asis1 on asis1.fecha=generate_series::date and asis1.estado='Salida';";
		$rsql = $this->select($sql);
		return $rsql;		
	}
	
}
?>