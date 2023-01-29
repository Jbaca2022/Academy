$(document).ready(function() {
    var permisomododulo;
    permiso();
    modulo();

    function modulo() {
        var colegio = $("#modulo").data("colegio");
        var academia = $("#modulo").data("academia");
        var admision = $("#modulo").data("admision");
        var contabilidad = $("#modulo").data("contabilidad");
        var asistencia = $("#modulo").data("asistencia");
        var mantenimiento = $("#modulo").data("mantenimiento");
        var sistemanota = $("#modulo").data("sistemanota");
        var idusuario = $("#modulo").data("idusuario");
        if (idusuario === "") {
            $(".frmlogeo").css({ display: "block" });
            $("#frm-cerrar").css({ display: "none" });
        } else {
            $(".frmlogeo").css({ display: "none" });
            $("#frm-cerrar").css({ display: "block" });
            $("#img-usuario").attr(
                "src",
                "/v4cima/vista/fotos/prf" + idusuario + ".jpg"
            );
        }
        if (mantenimiento === "t") {
            $("#frmMantenimiento").css({ display: "block" });
        } else {
            $("#frmMantenimiento").css({ display: "none" });
        }
        if (colegio === "t") {
            $("#frmColegio").css({ display: "block" });
        } else {
            $("#frmColegio").css({ display: "none" });
        }
        if (academia === "t") {
            $("#frmAcademia").css({ display: "block" });
        } else {
            $("#frmAcademia").css({ display: "none" });
        }
        if (admision === "t") {
            $("#frmAdmision").css({ display: "block" });
        } else {
            $("#frmAdmision").css({ display: "none" });
        }
        if (contabilidad === "t") {
            $("#frmContabilidad").css({ display: "block" });
        } else {
            $("#frmContabilidad").css({ display: "none" });
        }
        if (asistencia === "t") {
            $("#frmAsistencia").css({ display: "block" });
        } else {
            $("#frmAsistencia").css({ display: "none" });
        }
        if (sistemanota === "t") {
            $("#frmSistemaNotas").css({ display: "block" });
        } else {
            $("#frmSistemaNotas").css({ display: "none" });
        }
    }

    function permiso() {
        $("#fichacontrolasistencia2").hide();
        $("#fichacontrolasistencia4").hide();
        //Pestañas de Admisión
        $("#admision_conf").hide();
        $("#rptAdmision").hide();
        $("#frmPsicologia").hide();
        $("#divinteresados").css("display", "none");
        $("#divinteresados").hide();


        //Pestañas de Colegio
        $("#ProColegio").hide();
        $("#RptColegio").hide();
        $("#EcoColegio").hide();
        $("#TallerColegio").hide();

        //Pestañas de Academia
        $("#RptAcademia").hide();
        $("#Simulacro").hide();
        $("#evaluacionprecadete").hide();

        //Pestañas de Contabilidad
        $("#RptContabilidad").hide();
        $("#ProcContabilidad").hide();
        $("#ListUsuario").hide();
        $("#RptBalance").hide();
        $("#RptComprobate").hide();

        //Pestaña de Asistencia
        $("#RptAsistencia").hide();
        $("#Rptsistticket").hide();

        //Pestaña de Notas Colegio
        $("#notasps").hide();
        $("#notai").hide();
        $("#monitoreo").hide();

        //Pestaña mantenimiento
        $("#Pacademia").hide();
        $("#Psistema").hide();
        $("#Pgeneral").hide();
        $("#Pcolegio").hide();
        $("#Pcontabilidad").hide();

        //Pestaña Nota
        $("#ConfNotas").hide();
        $("#RegNotas").hide();
        $("#MonNotas").hide();
        $("#ProNotas").hide();
        //var cadena = $("#modulo").data("osimrep").split("*");
        var cadena = [];
        try {
            cadena = $("#modulo").data("osimrep").split("*");
        } catch (err) {
            cadena.push("");
        }
        for (var i = 0; i < cadena.length - 1; i++) {
            var vmodulo = cadena[i].split(":");
            //COLEGIO
            if (Number(vmodulo[1]) === 1) {
                switch (Number(vmodulo[0].slice(1))) {
                    case 49:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#RptAlumnosSeccion").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#RptAlumnosSeccion").show();
                            $("#RptColegio").show();
                        }
                        break;
                    case 50:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#RptAlumnosRegistro").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#RptAlumnosRegistro").show();
                            $("#RptColegio").show();
                        }
                        break;
                    case 51:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#RptAlumnosInasitencia").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#RptAlumnosInasitencia").show();
                            $("#RptColegio").show();
                        }
                        break;
                    case 86:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#RptListaTutores").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#RptListaTutores").show();
                            $("#RptColegio").show();
                        }
                        break;
                    case 52:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#RptEstadoCuenta").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#RptEstadoCuenta").show();
                            $("#EcoColegio").show();
                        }
                        break;
                        //                    case 53:
                        //                        permisomododulo = vmodulo[0].slice(0, 1);
                        //                        if (permisomododulo === 'f') {
                        //                            $('#col_rpt04').hide();
                        //                        }
                        //                        if (permisomododulo === 't') {
                        //                            $('#col_rpt04').show();
                        //                        }
                        //                        break;

                    case 92:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#ProRestaurar").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#ProRestaurar").show();
                            $("#ProColegio").show();
                        }
                        break;
                    case 95:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#RptAvisoCobranza").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#RptAvisoCobranza").show();
                            $("#EcoColegio").show();
                        }
                        break;
                    case 96:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#ProMoodle").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#ProMoodle").show();
                            $("#ProColegio").show();
                        }
                        break;
                    case 232:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#RptListaRatificados").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#RptListaRatificados").show();
                            $("#RptColegio").show();
                        }
                        break;
                    case 177:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#RptNotasSiagie").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#RptColegio").show();
                            $("#RptNotasSiagie").show();
                        }
                        break;
                    case 181:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#ProRestElim").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#ProRestElim").show();
                            $("#ProColegio").show();
                        }
                        break;
                    case 205:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#RptListaTalleres").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#RptListaTalleres").show();
                            $("#RptAdmision").show();
                        }
                        break;
                    case 207:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#RptListaconductual").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#RptListaconductual").show();
                            $("#RptAdmision").show();
                        }
                        break;
                    case 212:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#RptCantCursosJalados").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#RptCantCursosJalados").show();
                            $("#RptAdmision").show();
                        }
                        break;
                    case 258:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#RptHorarios").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#RptHorarios").show();
                            $("#RptAdmision").show();
                        }
                        break;
                    case 215:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#RptAlumnosInasitenciagrupal").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#RptAlumnosInasitenciagrupal").show();
                            $("#RptAdmision").show();
                        }
                        break;
                    case 191:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#RptListaalumnosincarne").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#RptListaalumnosincarne").show();
                            $("#RptAdmision").show();
                        }
                        break;
                    case 252:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#RptListaAlumnosTaller").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#RptListaAlumnosTaller").show();
                            $("#TallerColegio").show();
                        }
                        break;
                    case 250:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#RptCantAlumnosTaller").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#RptCantAlumnosTaller").show();
                            $("#TallerColegio").show();
                        }
                        break;
                    case 249:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#RptAsistAlumnosTaller").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#RptAsistAlumnosTaller").show();
                            $("#TallerColegio").show();
                        }
                        break;
                    case 251:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#RptFichaTaller").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#RptFichaTaller").show();
                            $("#TallerColegio").show();
                        }
                        break;
                    case 253:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#RptDeudasAlumnosTaller").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#RptDeudasAlumnosTaller").show();
                            $("#TallerColegio").show();
                        }
                        break;
                    case 278:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#Rptbuscarapoderado").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#Rptbuscarapoderado").show();
                            $("#RptAdmision").show();
                        }
                        break;
                    case 289:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#Rptbrigadier").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#Rptbrigadier").show();
                            //$("#RptAdmision").show();
                        }
                        break;
                }
            }
            //ACADEMIA
            if (Number(vmodulo[1]) === 2) {
                switch (Number(vmodulo[0].slice(1))) {
                    case 56:
                        CantidadMatriculado = vmodulo[0].slice(0, 1);
                        if (CantidadMatriculado === "f") {
                            $("#RptCantMatriculado").hide();
                        }
                        if (CantidadMatriculado === "t") {
                            $("#RptCantMatriculado").show();
                            $("#RptAcademia").show();
                        }
                        break;
                    case 98:
                        ListaAlumnosAcademia = vmodulo[0].slice(0, 1);
                        if (ListaAlumnosAcademia === "f") {
                            $("#RptListAlumno").hide();
                        }
                        if (ListaAlumnosAcademia === "t") {
                            $("#RptListAlumno").show();
                            $("#RptAcademia").show();
                        }
                        break;
                    case 93:
                        AlumnosInasistenciaAcademia = vmodulo[0].slice(0, 1);
                        if (AlumnosInasistenciaAcademia === "f") {
                            $("#RptListAsistencia").hide();
                        }
                        if (AlumnosInasistenciaAcademia === "t") {
                            $("#RptListAsistencia").show();
                            $("#RptAcademia").show();
                        }
                        break;

                        //                    case 87:
                        //                        PromedioSimulacro = vmodulo[0].slice(0, 1);
                        //                        if (PromedioSimulacro === 'f') {
                        //                            $('#aca_rpt02').hide();
                        //                        }
                        //                        if (PromedioSimulacro === 't') {
                        //                            $('#aca_rpt02').show();
                        //                        }
                        //                        break;
                    case 121:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#SimAdministrador").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#SimAdministrador").show();
                            $("#Simulacro").show();
                        }
                        break;
                    case 122:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#SimMeritoGeneral").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#SimMeritoGeneral").show();
                            $("#Simulacro").show();
                        }
                        break;
                    case 123:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#SimIndDetallado").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#SimIndDetallado").show();
                            $("#Simulacro").show();
                        }
                        break;
                    case 172:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#SimEfectividad").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#SimEfectividad").show();
                            $("#Simulacro").show();
                        }
                        break;
                    case 173:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#SimBase20").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#SimBase20").show();
                            $("#Simulacro").show();
                        }
                        break;
                    case 176:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#Simclaves").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#Simclaves").show();
                            $("#Simclaves").show();
                        }
                        break;
                    case 218:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#CrearPreca").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#CrearPreca").show();
                            $("#evaluacionprecadete").show();
                        }
                        break;
                    case 219:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#EvaluarPreca").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#EvaluarPreca").show();
                            $("#evaluacionprecadete").show();
                        }
                        break;
                    case 220:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#ResultadosPreca").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#ResultadosPreca").show();
                            $("#evaluacionprecadete").show();
                        }
                        break;
                    case 281:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#rpt_virtual").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#rpt_virtual").show();
                        }
                        break;
                }
            }
            //ADMISION
            if (Number(vmodulo[1]) === 3) {
                switch (Number(vmodulo[0].slice(1))) {
                    case 59:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#configurarvacantes").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#configurarvacantes").show();
                            $("#admision_conf").show();
                        }
                        break;
                    case 229:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#confPsicologia").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#confPsicologia").show();
                            $("#admision_conf").show();
                        }
                        break;

                    case 231:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#confConocimientos").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#confConocimientos").show();
                            $("#admision_conf").show();
                        }
                        break;
                        //                    case 60:
                        //                        permisomododulo = vmodulo[0].slice(0, 1);
                        //                        if (permisomododulo === 'f') {
                        //                            $('#adm_proc').hide();
                        //                        }
                        //                        if (permisomododulo === 't') {
                        //                            $('#adm_proc').show();
                        //                        }
                        //                        break;
                    case 62:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#rptAtenProcencia").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#rptAtenProcencia").show();
                            $("#rptAdmision").show();
                        }
                        break;
                    case 63:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#rptAtenUsuario").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#rptAtenUsuario").show();
                            $("#rptAdmision").show();
                        }
                        break;
                    case 65:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#rptMonitoreo").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#rptMonitoreo").show();
                            $("#rptAdmision").show();
                        }
                        break;
                    case 119:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#rptResumenAdmision").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#rptResumenAdmision").show();
                            $("#rptAdmision").show();
                        }
                        break;
                    case 242:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#rptListaAdmisionDetallada").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#rptListaAdmisionDetallada").show();
                            $("#rptAdmision").show();
                        }
                        break;
                    case 120:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#rptCantAdmision").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#rptCantAdmision").show();
                            $("#rptAdmision").show();
                        }
                        break;
                    case 66:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === 'f') {
                            $('#rptGrafico').hide();
                        }
                        if (permisomododulo === 't') {
                            $('#rptGrafico').show();
                        }
                        break;
                    case 67:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#frmEntrevista").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#frmEntrevista").show();
                            $("#frmPsicologia").show();
                        }
                        break;
                    case 68:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#frmFicha").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#frmFicha").show();
                            $("#frmPsicologia").show();
                        }
                        break;
                    case 240:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#frmReportegeneral").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#frmReportegeneral").show();
                            $("#frmPsicologia").show();
                        }
                        break;
                    case 266:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#confcambiogradoadmision").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#confcambiogradoadmision").show();
                            $("#admision_conf").show();
                        }
                        break;
                    case 271:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#rptEvaluaciondeudas").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#rptEvaluaciondeudas").show();
                            $("#rptAdmision").show();
                        }
                        break; //rptEvaluaciondeudas
                    case 277:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#divinteresados").css("display", "none");
                        }
                        if (permisomododulo === "t") {
                            $("#divinteresados").css("display", "block");
                        }
                        break; //rptEvaluaciondeudas                        
                }
            }
            //CONTABILIDAD
            if (Number(vmodulo[1]) === 4) {
                switch (Number(vmodulo[0].slice(1))) {
                    case 69:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#RptRecibosUsuarios_2").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#RptRecibosUsuarios_2").show();
                            $("#RptContabilidad").show();
                        }
                        break;
                    case 125:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#procAdelanto").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#procAdelanto").show();
                            $("#ProcContabilidad").show();
                        }
                        break;
                    case 126:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#procBancosCajas").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#procBancosCajas").show();
                            $("#ProcContabilidad").show();
                        }
                        break;
                    case 127:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#procLibroCaja").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#procLibroCaja").show();
                            $("#ProcContabilidad").show();
                        }
                        break;
                    case 128:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#procGenerarPlanilla").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#procGenerarPlanilla").show();
                            $("#ProcContabilidad").show();
                        }
                        break;
                    case 129:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#procPrestamo").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#procPrestamo").show();
                            $("#ProcContabilidad").show();
                        }
                        break;
                    case 130:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#procGenerarRemuneracion").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#procGenerarRemuneracion").show();
                            $("#ProcContabilidad").show();
                        }
                        break;
                    case 224:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#rptconvocatoria").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#rptconvocatoria").show();
                        }
                        break;
                    case 256:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#rptevaluacion").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#rptevaluacion").show();
                        }
                        break;

                    case 131:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#procRendicionDiaria").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#procRendicionDiaria").show();
                            $("#ProcContabilidad").show();
                        }
                        break;
                    case 132:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "t") {
                            $("#ListUsuario").show();
                        }
                        break;
                    case 135:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "t") {
                            $("#RptBalance").show();
                        }
                        break;
                    case 171:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "t") {
                            $("#RptComprobate").show();
                        }
                        break;
                        //                    case 88:
                        //                        permisomododulo = vmodulo[0].slice(0, 1);
                        //                        if (permisomododulo === 'f') {
                        //                            $('#eliminarrecibos').hide();
                        //                        }
                        //                        if (permisomododulo === 't') {
                        //                            $('#eliminarrecibos').show();
                        //                        }
                        //                        break;

                    case 180:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#Rptpensioncolegio").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#Rptpensioncolegio").show();
                        }
                        break;
                    case 206:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#Rptlistapensioncol").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#Rptlistapensioncol").show();
                        }
                        break;
                    case 237:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#procResponderSolicitud").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#procResponderSolicitud").show();
                            $("#ProcContabilidad").show();
                        }
                        break;
                    case 245:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#Rptlistapersonalgeneral").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#Rptlistapersonalgeneral").show();
                            $("#RptContabilidad").show();
                        }
                        break;
                    case 262:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#rptventaentradas").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#rptventaentradas").show();
                            $("#ProcContabilidad").show();
                        }
                        break;
                }
            }
            //ASISTENCIA
            if (Number(vmodulo[1]) === 5) {
                switch (Number(vmodulo[0].slice(1))) {
                    case 97:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#RptAsistColaborador").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#RptAsistColaborador").show();
                            $("#RptAsistencia").show();
                        }
                        break;
                    case 34:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#fichacontrolasistencia").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#fichacontrolasistencia").show();
                        }
                        break;
                    case 267:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#fichacontrolasistencia4").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#fichacontrolasistencia4").show();
                        }
                        break;
                    case 272:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#Rptgenerarticket").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#Rptsistticket").show();
                            $("#Rptgenerarticket").show();
                        }
                        break;
                    case 273:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#Rptlistarticket").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#Rptsistticket").show();
                            $("#Rptlistarticket").show();
                        }
                        break;
                }
            }
            //NOTAS
            if (Number(vmodulo[1]) === 14) {
                switch (Number(vmodulo[0].slice(1))) {
                    case 137:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#notasps").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#notasps").show();
                            $("#RegNotas").show();
                        }
                        break;
                    case 138:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#notai").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#notai").show();
                            $("#RegNotas").show();
                        }
                        break;
                    case 139:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#notasfaltantes").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#notasfaltantes").show();
                            $("#MonNotas").show();
                        }
                        break;
                    case 164:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#repondersolicitud").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#repondersolicitud").show();
                            $("#MonNotas").show();
                        }
                        break;
                    case 208:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#procesonotas").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#procesonotas").show();
                            $("#ProNotas").show();
                        }
                        break;
                    case 167:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#cambioseccion").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#cambioseccion").show();
                            $("#ConfNotas").show();
                        }
                        break;

                    case 257:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#competencias").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#competencias").show();
                            $("#ConfNotas").show();
                        }
                        break;

                    case 199:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#indicadores").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#indicadores").show();
                            $("#ConfNotas").show();
                        }
                        break;
                    case 94:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#orden_merito").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#orden_merito").show();
                            $("#MonNotas").show();
                        }
                        break;
                    case 248:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#ConfigFechaLim").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#ConfigFechaLim").show();
                            $("#ConfNotas").show();
                        }
                        break;
                    case 282:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#monitoreo_boleta").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#monitoreo_boleta").show();
                            $("#MonNotas").show();
                        }
                        break;
                    case 209:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#verboleta").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#verboleta").show();
                            $("#ProNotas").show();
                        }
                        break;
                }
            }
            //CONFIGURAR
            if (Number(vmodulo[1]) === 8) {
                switch (Number(vmodulo[0].slice(1))) {
                    case 146:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#MantAnnolectivo").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#Pgeneral").show();
                            $("#MantAnnolectivo").show();
                        }
                        break;

                    case 147:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#MantCicloacademico").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#Pgeneral").show();
                            $("#MantCicloacademico").show();
                        }
                        break;

                    case 149:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#MantColegio").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#Pcolegio").show();
                            $("#MantColegio").show();
                        }
                        break;
                    case 150:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#MantDepartamento").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#Pcolegio").show();
                            $("#MantDepartamento").show();
                        }
                        break;
                    case 151:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#MantDistrito").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#Pcolegio").show();
                            $("#MantDistrito").show();
                        }
                        break;
                    case 152:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#MantExauniversidad").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#Pacademia").show();
                            $("#MantExauniversidad").show();
                        }
                        break;
                    case 153:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#MantFuncion").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#Psistema").show();
                            $("#MantFuncion").show();
                        }
                        break;
                    case 154:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#MantGradoseccion").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#Pcolegio").show();
                            $("#MantGradoseccion").show();
                        }
                        break;
                    case 155:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#MantGrado").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#Pcolegio").show();
                            $("#MantGrado").show();
                        }
                        break;
                    case 156:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#MantModexamen").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#Pacademia").show();
                            $("#MantModexamen").show();
                        }
                        break;
                    case 157:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#MantModulo").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#Psistema").show();
                            $("#MantModulo").show();
                        }
                        break;
                    case 158:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#MantNivelcolegio").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#Pcolegio").show();
                            $("#MantNivelcolegio").show();
                        }
                        break;
                    case 159:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#MantProvincia").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#Pcolegio").show();
                            $("#MantProvincia").show();
                        }
                        break;
                    case 160:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#MantRol").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#Psistema").show();
                            $("#MantRol").show();
                        }
                        break;
                    case 161:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#MantSistema").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#Psistema").show();
                            $("#MantSistema").show();
                        }
                        break;

                    case 170:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#MantAdmision").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#Psistema").show();
                            $("#MantAdmision").show();
                        }
                        break;

                    case 175:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#MantTutores").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#Pcolegio").show();
                            $("#MantTutores").show();
                        }
                        break;

                    case 194:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#MantEntregacarne").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#Pcolegio").show();
                            $("#MantEntregacarne").show();
                        }
                        break;

                    case 178:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#MantConcepto").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#Pcolegio").show();
                            $("#MantConcepto").show();
                        }
                        break;

                    case 200:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#MantEstadoefectivo").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#Pcontabilidad").show();
                            $("#MantEstadoefectivo").show();
                        }
                        break;

                    case 201:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#MantRolexamen").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#Pcolegio").show();
                            $("#MantRolexamen").show();
                        }
                        break;
                    case 259:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#MantMarcofoto").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#Pcolegio").show();
                            $("#MantMarcofoto").show();
                        }
                        break;
                    case 204:
                        permisomododulo = vmodulo[0].slice(0, 1);
                        if (permisomododulo === "f") {
                            $("#MantPlanestudio").hide();
                        }
                        if (permisomododulo === "t") {
                            $("#Pcolegio").show();
                            $("#MantPlanestudio").show();
                        }
                        break;
                }
            }
        }
    }
    $("#txtusuario").focus();

    function logeo(data, modo) {
        if (data !== null) {
            if (data[0].respuesta === "INGRESO CORRECTO") {
                $("#img-usuario").attr(
                    "src",
                    "/v4cima/vista/fotos/prf" + data[0].idusuario + ".jpg"
                );
                $("#bloqueo").css("display", "none");
                $("#modulo").data("colegio", data[0].colegio);
                $("#modulo").data("academia", data[0].academia);
                $("#modulo").data("admision", data[0].admision);
                $("#modulo").data("contabilidad", data[0].contabilidad);
                $("#modulo").data("asistencia", data[0].asistencia);
                $("#modulo").data("mantenimiento", data[0].mantenimiento);
                $("#modulo").data("sistemanota", data[0].sistemanota);
                $("#modulo").data("osimrep", data[0].v4permiso);
                $("#modulo").data("idusuario", data[0].idusuario);
                modulo();
                permiso();
                $(".frmlogeo").css({ display: "none" });
                if (Number(modo) === 2) {
                    $.alert({
                        title: "Mensaje",
                        content: "PERMISOS ACTUALIZADOS",
                        confirmButton: "[OK]",
                        keyboardEnabled: true,
                        confirm: function() {
                            location.reload();
                        }
                    });
                }
                return true;
            } else {
                $("#mensaje-logeo").html(data[0].respuesta);
                return false;
            }
        }
    }
    $("#txtusuario,#txtpassword").keypress(function(e) {
        console.log(e);
        if (e.which == 13) {
            enviarlogeo();
        }
    });
    $("#btnlogeo").click(function() {
        enviarlogeo();
    });

    function enviarlogeo() {
        var usuario = $("#txtusuario").val();
        var password = $("#txtpassword").val();
        if (usuario !== "" && password !== "") {
            $.post(
                "controlador/load_logeo.php", {
                    caso: "1",
                    txtusuario: usuario,
                    txtpassword: password
                },
                function(data) {
                    logeo(data);
                },
                "json"
            );
            return false;
        } else {
            return false;
        }
    }
    $("#pactualizar").click(function() {
        $.post(
            "/v4cima/controlador/load_logeo.php", {
                caso: 5
            },
            function(data) {
                logeo(data, 2);
            },
            "json"
        );
    });
    $("#cerrar").click(function() {
        $.confirm({
            title: "¡Confirmar!",
            content: "¿Esta seguro de cerrar sesión?",
            animation: "zoom",
            confirmButton: '<button class="btn btn-primary" style="color: rgba(255,255,255,0.9);">SI</button>',
            cancelButton: '<button class="btn btn-danger" style="color: rgba(255,255,255,0.9);">NO</button>',       
            closeAnimation: "zoom",
            keyboardEnabled: true,
            //            buttons: {
            confirm: function() {
                    $.get("/v4cima/controlador/load_logeo.php?caso=3", function() {
                        $("#bloqueo").css("display", "none");
                        $("#modulo").data("colegio", 0);
                        $("#modulo").data("academia", 0);
                        $("#modulo").data("admision", 0);
                        $("#modulo").data("contabilidad", 0);
                        $("#modulo").data("asistencia", 0);
                        $("#modulo").data("mantenimiento", 0);
                        $("#modulo").data("osimrep", 0);
                        $("#modulo").data("idusuario", "");
                        modulo();
                        $("#modulo").data("osimrep", "");
                        window.location.href = "/v4cima/index.php";
                    });
                    //return true;
                }
                //                ,
                //                cancel: function () {
                //                }
        });
    });
    // setInterval(function() {
    //     $.getJSON("/v4cima/vista/inactividad.php", function(data) {
    //         if (!data[0].cima) {
    //             if (
    //                 $("#nusuario")
    //                 .html()
    //                 .replace("\n", "") !== ""
    //             ) {
    //                 location.reload();
    //             }
    //         }
    //     });
    // }, 60000);
});