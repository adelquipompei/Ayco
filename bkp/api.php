<?php  

include("conexion.php");

if($conn->connect_error){
    die("No se pudo conectar". $conn->connect_error);
}

$sql="SELECT * FROM cars order by id desc";



$result= $conn->query($sql);

$cars = array();

while($row= $result->fetch_assoc()){
    $cars[] = $row;
}

header("Content-Type: application/json");
echo json_encode($cars);



$conn->close()



?>
