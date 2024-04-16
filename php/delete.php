<?php
$id = $_GET['id'];

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