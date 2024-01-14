<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
// header("Access-Control-Allow-Methods: POST");
// Allow specified headers
// header("Access-Control-Allow-Headers: Content-Type");

include "DBconnect.php";

$obj = new DbConnect;
$conn = $obj ->connect();
// if($conn){
//     echo "Jesus is Lord";
// }
$method = $_SERVER["REQUEST_METHOD"];
switch($method){
    case "GET":
        $sql = "SELECT * FROM quotevalues";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $quotes = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($quotes);
        break;

    case "POST" :
        $user = json_decode(file_get_contents("php://input"));
        $sql = "INSERT INTO quotevalues(id, name, email, phoneNumber, message) VALUES(null, :name, :email, :phoneNumber, :message)";
        $stmt = $conn->prepare($sql);
        $stmt ->bindParam(':name', $user->name);
        $stmt->bindParam(':email', $user->email);
        $stmt->bindParam(':phoneNumber', $user->phoneNumber);
        $stmt->bindParam(':message', $user->message);
        if (empty($user->name)){
            print_r("You are not serious");
        }

        if($stmt->execute()){
           $response = ['status' => 1 , 'message' => "Quote Created Successfully"];
        }
        else{
            $response = ['status' => 0 , 'message' => "Failed to create quote"];
        }
        

        break;
}
?>