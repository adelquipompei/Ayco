<?php
require_once("../tinify-php-master/lib/Tinify/Exception.php");
require_once("../tinify-php-master/lib/Tinify/ResultMeta.php");
require_once("../tinify-php-master/lib/Tinify/Result.php");
require_once("../tinify-php-master/lib/Tinify/Source.php");
require_once("../tinify-php-master/lib/Tinify/Client.php");
require_once("../tinify-php-master/lib/Tinify.php");
\Tinify\setKey("4LnZmb9gggRGytC717ByQ8fGf3Bk218W");

include("conexion.php");

// Verificar la conexión
if ($conn->connect_error) {
    die('Error en la conexión: ' . $conn->connect_error);
} 

// Definir el directorio de destino para las imágenes
$uploadsDirectory = "../img/uploaded_images/";

// Obtener datos del formulario
$marca = $_POST['marca'];
$modelo = $_POST['modelo'];
$year = $_POST['year'];

// Insertar datos del auto en la tabla cars
$sql = "INSERT INTO cars (marca, modelo, año) VALUES ('$marca', '$modelo', '$year')";

if ($conn->query($sql) === TRUE) {
    $auto_id = $conn->insert_id; // Obtener el ID del auto insertado

    // Procesar cada imagen subida
    for ($i = 0; $i < count($_FILES["img"]["name"]); $i++) {
        // Obtener nombre y ruta temporal de la imagen
        $img_name = $_FILES["img"]["name"][$i];
        $img_tmp = $_FILES["img"]["tmp_name"][$i];
        $ruta = $uploadsDirectory . $auto_id. '-' .$img_name;
      

        // Mover archivo de imagen al directorio de destino
        if (move_uploaded_file($img_tmp, $ruta)) {
            try {
                \Tinify\fromFile($ruta)->toFile($ruta);
            } catch(\Tinify\Exception $e) {
                echo "Hubo un error al comprimir la imagen: " . $e->getMessage();
            }
            // Insertar la ruta de la imagen asociada al auto en la tabla imagenes
            $sql2 = "INSERT INTO imagenes (id_auto, imagen_auto) VALUES ('$auto_id', '$ruta')";

            if ($conn->query($sql2) !== TRUE) {
                echo "Error al insertar en la tabla imagenes: " . $conn->error;
            }
        } else {
            echo "Error al mover el archivo de imagen.";
        }
    }

    // Redirigir al dashboard si todo fue exitoso
    header("Location:../dashboard/index.php?page=tabla");
    exit; // Terminar el script después de la redirección
} else {
    echo "Error al insertar en la tabla cars: " . $conn->error;
}

// Cerrar la conexión
$conn->close();
?>
