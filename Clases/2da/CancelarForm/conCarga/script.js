window.addEventListener('load', function() { //cuando los elementos cargen...
    // Espera 3 segundos antes de ocultar el cargador y mostrar el contenido
    setTimeout(function() {
        document.getElementById('loaderContainer').style.display = 'none'; //Ocultamos el cargador
        
        document.getElementById('congratulations').style.display = 'block'; //Mostramos la felicitacion
        
        document.body.style.overflow = 'auto'; // Permitimos el desplazamiento
    }, 3000); // 3000 milisegundos = 3 segundos
});
