$(document).ready(function() {
    $("#area-comentarios").hide();

    $("#toggle-comentarios").click(function() {
        $("#area-comentarios").toggle();
    });

    $("#formulario-comentario").submit(function(event) {
        event.preventDefault();

        var nuevoComentario = $("#nuevo-comentario").val();

        $("#area-comentarios").append("<p>" + nuevoComentario + " <button class='eliminar-comentario'>Eliminar</button></p>");

        $("#nuevo-comentario").val("");
    });

    $("#area-comentarios").on("click", ".eliminar-comentario", function() {
        $(this).parent().remove();
    });
});