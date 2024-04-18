<?php
$id = $_GET['id'];


// Verifica si el parámetro 'imagenes' está presente en el GET
if (isset($_GET['imagenes'])) {
    // Obtén el valor del parámetro 'imagenes' desde el GET
    $imagenes = $_GET['imagenes'];

    // Divide la cadena de imágenes en un array utilizando la coma como separador
    $array_de_imagenes = explode(',', $imagenes);

    // Ahora $array_de_imagenes contendrá un array con las rutas de las imágenes
    print_r($array_de_imagenes); // Muestra el array (solo para propósitos de demostración)

    // Puedes acceder a cada ruta de imagen individualmente utilizando el array
    foreach ($array_de_imagenes as $ruta_imagen) {
        unlink($ruta_imagen);
    }
} else {
    echo "No se encontraron rutas de imágenes en el parámetro 'imagenes'.";
}





include("conexion.php");

if($conn->connect_error){
    die("No se pudo conectar". $conn->connect_error);
}

$sql = "DELETE FROM cars WHERE cars . id = $id";
$result = $conn->query($sql);
if($result) {
    
    header("Location:../dashboard/index.php?page=tabla");
    $conn->close();
}















?>