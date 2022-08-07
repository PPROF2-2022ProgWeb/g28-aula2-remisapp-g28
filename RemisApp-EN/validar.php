<?php


include("/xampp/htdocs/Remis_App_Final/datosBD.php");
$Usuario = $_POST ["dni"];
$contraseña = $_POST ["dni"];
session_start();
$_SESSION['dni']=$usuario;

include("/xampp/htdocs/Remis_App_Final/datosBD.php");
        $con = mysqli_connect($host, $usuario, $clave, $basededatos) or die ("No se ha podido conectar al servidor de Base de Datos");
        if (!$con)
        {
            die ("Conexión fallida: " . mysqli_connect_error());
        }

        $db = mysqli_select_db($con, $basededatos) or die ("No se pudo conectar a la base de datos");

$consulta="SELECT*FROM infousuario WHERE dni='$Usuario' AND dni='$contraseña'";
$resultado=mysqli_query($con,$consulta);

$filas=mysqli_num_rows($resultado);

if($filas){
  
    header("refresh:1;url=http://localhost/Remis_App_Final/index-2.html");

}else{
    ?>
    <?php
    include("/xampp/htdocs/Remis_App_Final/validar.php");

  ?>
  <h1 class="bad">ERROR DE AUTENTIFICACION</h1>
  <?php
}
mysqli_free_result($resultado);
mysqli_close($con);