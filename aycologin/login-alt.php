<?php
include("../php/conexion.php");



$usuario = array(
	"email" => $_POST['userName'],
	"password" =>md5($_POST['pass']) 
);

$sql = "SELECT * FROM users WHERE email = '{$usuario['email']}' AND password = '{$usuario['password']}'";

$result = mysqli_query($conn, $sql);

if(mysqli_num_rows($result) == 1) {
	session_start();
	$_SESSION['username'] = $usuario;
	header("location:..\adminhub\index.php?page=dash");
} else {
	echo "Usuario o contraseña incorrecto";
}

mysqli_close($conn);


?>
