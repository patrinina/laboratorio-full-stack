<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="style.css">
</head>
<body>

<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "laboratorio";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {

    die("Conexión fallida: " . $conn->connect_error);
}


$sql = "SELECT * FROM usuarios";
$result = mysqli_query($conn, $sql);


if (mysqli_num_rows($result) > 0) {

    $output = "<table>";
    $output .= "<tr><th>Id</th><th>Nombre</th><th>Primer apellido</th><th>Segundo apellido</th><th>Email</th><th>Login</th><th>Password</th></tr>";
    while ($row = mysqli_fetch_assoc($result)) {
        $output .= "<tr>";
        $output .= "<td>" . $row["ID"] . "</td>";
        $output .= "<td>" . $row["nombre"] . "</td>";
        $output .= "<td>" . $row["primer_apellido"] . "</td>";
        $output .= "<td>" . $row["segundo_apellido"] . "</td>";
        $output .= "<td>" . $row["email"] . "</td>";
        $output .= "<td>" . $row["login"] . "</td>";
        $output .= "<td>" . $row["password"] . "</td>";
        $output .= "</tr>";
    }

    $output .= "</table>";
    echo $output;
    echo '<br><a href="index.html">Volver al registro</a>';

} else {

    echo '<br><a"No se dispone de datos."</a></br>';
    echo '<div class="vacio_container">';
    echo '<div class="vacio_titulo">No se disponen de datos</div>';
    echo '<br><a href="index.html">Volver al registro</a>';
    echo '</div>';
}

$conn->close();

?>
</body>
</html>
