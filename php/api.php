<?php
include("conexion.php");

if ($conn->connect_error) {
    die("No se pudo conectar: " . $conn->connect_error);
}

$sql = "SELECT * FROM cars ORDER BY id DESC";

$result = $conn->query($sql);

$cars = array();

while ($row = $result->fetch_assoc()) {
    // Obtener el ID del auto actual
    $auto_id = $row['id'];

    // Consulta SQL para obtener las imágenes asociadas a este auto
    $sql_imagenes = "SELECT imagen_auto FROM imagenes WHERE id_auto = $auto_id";
    $result_imagenes = $conn->query($sql_imagenes);

    $imagenes = array();
    while ($row_imagen = $result_imagenes->fetch_assoc()) {
        $imagenes[] = $row_imagen['imagen_auto'];
    }

    // Agregar las imágenes al array del auto
    $row['imagenes'] = $imagenes;

    // Agregar el auto (con las imágenes) al array de autos
    $cars[] = $row;
}

// Devolver la respuesta como JSON
header("Content-Type: application/json");
echo json_encode($cars);

$conn->close();
?>
