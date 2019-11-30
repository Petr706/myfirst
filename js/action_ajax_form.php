<?php

if (isset($_POST["name"]) && isset($_POST["email"]) ) { 

    $result = array(
    	'name' => $_POST["name"],
    	'email' => $_POST["email"]
    ); 

    echo json_encode($result); 
}

?>