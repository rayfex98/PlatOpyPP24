<?php
$arrayPreguntas = [ //defino array de preguntas
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
    // Puedo agregar más si lo necesito
];
shuffle($arrayPreguntas); //Mezclador de preguntas
$preguntasSeleccionadas = array_slice($arrayPreguntas, 0, 2); // Guardo las 2 primeras
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Cuestionario</title>
</head>
<body>
    <h1>Cuestionario!</h1>
    <p>El siguiente cuestionario, toma 2 preguntas de una "base de datos" y las muestra</p>
    <form action="process_quiz.php" method="POST">
        <?php foreach ($preguntasSeleccionadas as $indiceArray => $unaPregunta): ?>
            <fieldset>
                <legend><?php echo $unaPregunta['pregunta']; ?></legend>
                <?php foreach ($unaPregunta['opciones'] as $unaOpcion): ?>
                    <label>
                        <input type="radio" name="question<?php echo $unaPregunta['id']; ?>" value="<?php echo $unaOpcion; ?>">
                        <?php echo $unaOpcion; ?>
                    </label><br>
                <?php endforeach; ?>
            </fieldset>
        <?php endforeach; ?>
        <input type="submit" value="Enviar respuesta">
    </form>
</body>
</html>
