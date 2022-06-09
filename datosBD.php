<?php
$host="localhost";
$usuario="root";
$clave="";
$basededatos="remisapp";

$conn = new mysqli ($host, $usuario, $clave, $basededatos);
mysqli_query ($conn , "SET character_set_result=utf8");
if ($conn->connect_error)
{
    die ("Darabase Error: " . $conn->connect_error);
} 
?>