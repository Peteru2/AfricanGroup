<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include "DBconnect.php";

$obj = new DbConnect;
$conn = $obj ->connect();

$method = $_SERVER["REQUEST_METHOD"];
$path = $_SERVER["REQUEST_URI"];
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
        if (strpos($path, "/api/quoteform/submit") !== false) {
        $sql = "INSERT INTO quotevalues(id, name, email, phoneNumber, message) VALUES(null, :name, :email, :phoneNumber, :message)";
        $stmt = $conn->prepare($sql);
        $stmt ->bindParam(':name', $user->name);
        $stmt->bindParam(':email', $user->email);
        $stmt->bindParam(':phoneNumber', $user->phoneNumber);
        $stmt->bindParam(':message', $user->message);

        if($stmt->execute()){
           $response = ['status' => 1 , 'message' => "Quote Created Successfully"];
        }
        else{
            $response = ['status' => 0 , 'message' => "Failed to create quote"];
        }
    }

    elseif (strpos($path, "/api/newsletter/submit") !== false){
        $sql = "INSERT INTO newsletter(id,  email) VALUES(null,  :email )";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':email', $user->email);
        if($stmt->execute()){
           $response = ['status' => 1 , 'message' => "Newsletter Submitted Successfully"];
        }
        else{
            $response = ['status' => 0 , 'message' => "Failed to submit newsletter"];
        }
        echo json_encode($response);
    }

        break;

       
}
?>