<?php

include("conexion.php");

if ($conn->connect_error) { 
    die('no'. $conn->connect_error);
}else{
    echo'Conexion establecida!';
}

$auto = array(
    'marca' =>  $_POST['marca'],
    'modelo'=> $_POST['modelo'],
    'img_name'=> $_FILES['img']['name'],
    'file'=> $_FILES['img']['tmp_name']
);

$ruta = "img/uploaded_images/".$auto['img_name'];
move_uploaded_file($auto['file'], "../".$ruta);

echo '<pre>';

print_r($auto);

echo '</pre>';


$sql = "INSERT INTO cars (marca,modelo,imagen) VALUES ('" . $auto['marca'] . "' , '" . $auto['modelo'] . "' , '".$ruta."')";



$result = $conn->query($sql);

if($result){
    echo"<br>";
    echo'Contenido insertado!';
}




$conn->close()














?>