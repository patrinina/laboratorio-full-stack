<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="style.css">
</head>
<body>

<?php

if($_POST){;
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "laboratorio";

$conn = new mysqli($servername, $username, $password, $dbname);
        if ($conn->connect_error) {
                die("Conexión fallida. " . $conn->connect_error);
}

$nombre = $_POST['nombre'];
$primerapellido = $_POST['primerapellido'];
$segundoapellido = $_POST['segundoapellido'];
$email = $_POST['email'];
$login = $_POST['login'];
$password = $_POST['password'];


$sql = "SELECT * FROM usuarios WHERE EMAIL ='$email'";
$result = mysqli_query($conn, $sql);
        if (mysqli_num_rows($result) > 0) {
                echo '<div class="duplicado_container">';
                echo '<div class="duplicado_titulo">El email ya está registrado en la base de datos</div>';
                echo '<br><a href="index.html">Volver al registro</a>';
                echo '<br><a href="consulta.php">Consulta</a>';
                echo '</div>';
        } else {

$sql_insert = "INSERT INTO `usuarios` (`nombre`, `primer_apellido`, `segundo_apellido`, `email`,`login`,`password`) VALUES
            ('$nombre', '$primerapellido', '$segundoapellido','$email', '$login','$password')";

    if ($conn->query($sql_insert) === TRUE) {
        
        echo '<div class="registro_container">';
        echo '<div class="registro_titulo">Registro completado con éxito</div>';
        echo "<p><h2>Nombre: $nombre</h2></p>";
        echo "<p><h2>Primer apellido: $primerapellido</h2></p>";
        echo "<p><h2>Segundo apellido: $segundoapellido</h2></p>";
        echo "<p><h2>Email: $email</h2></p>";
        echo "<p><h2>Login: $login</h2></p>";
        echo "<p><h2>Password: $password</h2></p>";
        echo '<br><a href="index.html">Volver al registro</a>';
        echo '<br><a href="consulta.php">Consulta</a>';
        echo '</div>';

        } else {
                echo '<div class="error_registro">';
                echo '<div class="error_registro_titulo">No se ha podido realizar el registro de:  " . $nombre . " " . $primerapellido . " " . $segundoapellido . "" . $email . "" . $login . "" . $password . ". ";</div>';
                echo '<br><a href="index.html">Volver al registro</a>';
                echo '<br><a href="consulta.php">Consulta</a>';
                echo '</div>';
        }}

        }

?>
</body>
</html>


