const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const apiUrl = 'https://magicloops.dev/api/loop/run/f30462a6-7678-4162-b3f4-a37119342e70?EMAIL=prueba@pruebafacu.com&Nombre=Facu&Apellido=Romero&Mensaje=Hola%20curso%2C%20es%20una%20prueba';

fetch(proxyUrl + apiUrl)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
