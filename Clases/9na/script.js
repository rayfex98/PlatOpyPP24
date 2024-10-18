function enviarMail(email, nombre, apellido, mensaje) {
    // Por si necesito usar letrs o simbolos raros
    const emailEncoded = encodeURIComponent(email);
    const nombreEncoded = encodeURIComponent(nombre);
    const apellidoEncoded = encodeURIComponent(apellido);
    const mensajeEncoded = encodeURIComponent(mensaje);
 //Ahora necesitamos la url de la api junto a los valores codificados
 //La api la cree en magicloops.dev y envia el mail a mi casilla personal.
    const url = `https://magicloops.dev/api/loop/run/f30462a6-7678-4162-b3f4-a37119342e70?EMAIL=${emailEncoded}&Nombre=${nombreEncoded}&Apellido=${apellidoEncoded}&Mensaje=${mensajeEncoded}`;

    fetch(url)//Envia una peticion a la api
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log('Respuesta del servidor:', data); // Esperemos que sea un mensaje de ok y estatus 200 jaja
        })
        .catch(error => {
            console.error('Hubo un error:', error);
        });
}

enviarMail('prueba@pruebafacu.com', 'Facu', 'Romero', 'Hola curso, es una prueba');
