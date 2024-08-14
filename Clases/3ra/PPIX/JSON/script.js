var usuarios = [
    {
        "nombre" : "Gamaliel",
        "apellido" : "Quiroz"
    },
    {
        "nombre" : "Facundo",
        "apellido" : "Romero"
    }
];
/*
let primerElemento = usuarios[0];
console.log(primerElemento); //todo el objeto
console.log(primerElemento.nombre + " " + primerElemento.apellido); //valores del objeto segun su clave
let apellidoSegundoElemento = usuarios[1].apellido;
console.log(apellidoSegundoElemento);



console.log(usuarios[0]); //muestra todo el objeto del primer indice
console.log(usuarios[1].nombre); //muestro el valor "Facundo" por consola

*/

// alert(usuarios[1].nombre);
// alert(usuarios[0]); //Que sucede? RTA: Estoy recuperando un objeto y no su valor
usuarios.forEach(persona => {
    console.log(persona.nombre + " " +persona.apellido)
});

for (let indice in usuarios) {
    console.log(indice + ": " + usuarios[indice].nombre + " " +usuarios[indice].apellido);
}
