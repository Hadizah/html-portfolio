
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "wigs_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve data from database
$sql = "SELECT * FROM wigs";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Output data of each row
    while($row = $result->fetch_assoc()) {
        echo "Name: " . $row["name"]. " - Email: " . $row["email"]. " - Phone: " . $row["phone"]. " - Address: " . $row["address"]. "<br>";
    }
} else {
    echo "0 results";
}

$conn->close();
?>
