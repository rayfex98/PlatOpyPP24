<?php
$arrayPreguntas = [
    [
        "id" => 0,
        "pregunta" => "Cuál es la capital de Egipto?",
        "opciones" => ["Paris", "El cairo", "Berlin", "Madrid", "Nadie sabe"],
        "respuesta" => "El cairo"
    ],
    [
        "id" => 1,
        "pregunta" => "Cuánto es 2 + 2?",
        "opciones" => ["3", "4", "5", "6"],
        "respuesta" => "4"
    ],
    [
        "id" => 2,
        "pregunta" => "Cuál es la capital de Japon?",
        "opciones" => ["Tokyo", "Beijing", "Seoul", "Bangkok"],
        "respuesta" => "Tokyo"
    ],
    [
        "id" => 3,
        "pregunta" => "Donde se encuentra el monte olimpo",
        "opciones" => ["Argentina", "Roma", "Venus", "Marte"],
        "respuesta" => "Marte"
    ],
];

$puntuacion = 0;
$preguntasTotales = count($_POST);

foreach ($_POST as $index => $respuestaUsuario) {
    $preguntaId = str_replace('question', '', $index); // Extrae el ID de la pregunta
    if ($respuestaUsuario == $arrayPreguntas[$preguntaId]['respuesta']) {
        $puntuacion++;
    }
}
?>
<h1>Resultados:</h1>
<?php
echo "Sumaste $puntuacion puntos, sobre un total de $preguntasTotales.";
?>
