$(document).ready(function () {
    cargartabla();

    function cargartabla() {
        $('#tbl-funcion').dataTable().fnDestroy();
        $.post('../../controlador/load_mantenimiento.php', {
            caso: 60
        }, function (data) {
            if (data !== null) {
                var html = '';
                for (var i = 0; i < data.length; i++) {
                    html += '<tr>';
                    html += '   <td>' + data[i].id + '</td>';
                    html += '   <td>' + data[i].descripcion + '</td>';
                    html += '   <td class="text-center"><span class="glyphicon glyphicon-edit editar" data-id="' + data[i].id + '" style="cursor:pointer"></span></td>';
                    html += '   <td class="text-center"><span class="glyphicon glyphicon-remove eliminar" data-id="' + data[i].id + '"style="cursor:pointer" ></span></td>';
                    html += '</tr>';
                }
                $('#tbody-funcion').html(html);
                $('#tbl-funcion').DataTable({
                    "order": [[0, "asc"]],
                    language: vlanguage,
                    "columnDefs": [{ "orderable": false, "targets": [2, 3] }]
                });
            }
        }, 'json');
    }

    $('#btn-nuevofuncion').click(function () {
        $('.ventana_funcion').modal('show');
        $('#btn-modificar').hide();
        $('#btn-guardar').show();
        $('#txt_nombre').val('');
    });

    $('#btn-guardar').click(function () {
        if (validar()) {
            $.confirm({
                title: 'Confirmar',
                content: '¿Seguro de guardar función?',
                animation: 'zoom',
                closeAnimation: 'zoom',
                confirmButton: '[Si]',
                cancelButton: '[No]',
                keyboardEnabled: true,
                confirm: function () {
                    var vdescripcion = $('#txt_nombre').val();
                    $.post('../../controlador/load_mantenimiento.php', {
                        caso: 61, vdescripcion: vdescripcion
                    }, function (data) {
                        cargartabla();
                        $('.ventana_funcion').modal('toggle');
                    });
                }
            });
        }

    });


    $('#tbl-funcion').on('click', '.editar', function () {
        var idfuncion = $(this).data('id');
        $('#btn-modificar').data('idfuncion', idfuncion);
        $('#btn-modificar').show();
        $('#btn-guardar').hide();
        $.post('../../controlador/load_mantenimiento.php', {
            caso: 62, vid: idfuncion
        }, function (data) {
            if (data !== null) {
                $('.ventana_funcion').modal('show');
                $('#txt_nombre').val(data[0].descripcion);
            }
        }, 'json');
    });

    $('#btn-modificar').click(function () {
        if (validar()) {
            $.confirm({
                title: 'Confirmar',
                content: '¿Seguro de modificar función?',
                animation: 'zoom',
                closeAnimation: 'zoom',
                confirmButton: '[Si]',
                cancelButton: '[No]',
                keyboardEnabled: true,
                confirm: function () {
                    var vdescripcion = $('#txt_nombre').val();
                    var vid = $('#btn-modificar').data('idfuncion');
                    $.post('../../controlador/load_mantenimiento.php', {
                        caso: 63, vdescripcion: vdescripcion, vid: vid
                    }, function (data) {
                        cargartabla();
                        $('.ventana_funcion').modal('toggle');
                    });
                }
            });
        }
    });

    $('#tbl-funcion').on('click', '.eliminar', function () {
        var idfuncion = $(this).data('id');
        //console.log(idfuncion);
        $.confirm({
            title: 'Confirmar',
            content: '¿Seguro de eliminar función?',
            animation: 'zoom',
            closeAnimation: 'zoom',
            confirmButton: '[Si]',
            cancelButton: '[No]',
            keyboardEnabled: true,
            confirm: function () {
                $.post('../../controlador/load_mantenimiento.php', {
                    caso: 64, vid: idfuncion
                }, function (x) {
                    cargartabla();
                });
            }
        });
    });




    function validar() {

        if ($('#txt_nombre').val() === '') {
            $.alert({
                title: 'Mensaje',
                content: 'Ingrese nombre',
                confirmButton: '[OK]'
            });
            return false;
        }



        return true;
    }






});









