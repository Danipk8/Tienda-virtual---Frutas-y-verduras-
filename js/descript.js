var botones = document.querySelectorAll(".boton");
var comentarios = document.querySelectorAll(".cuadro-descripcion");

botones.forEach(function(boton, indice) {
    boton.addEventListener("click", function () {
        comentarios[indice].classList.toggle("mostrar_comentario");

        // Obtener el video dentro de este comentario
        var video = comentarios[indice].querySelector("video");

        if (comentarios[indice].classList.contains("mostrar_comentario")) {
            boton.innerHTML = "Ocultar y seguir navegando";

            if (video) {
                video.currentTime = 0; // Reinicia
                video.play();          // Reproduce
            }

        } else {
            boton.innerHTML = "Ver descripción";

            if (video) {
                video.pause();         // Opcional: pausa si se oculta
            }
        }
    });
});
