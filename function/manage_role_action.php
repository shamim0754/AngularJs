<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$today = Date("Y-m-d");
require_once("db_crud.php");
$crud = new DBCrud();
//default angularjs setting of application/json as header, 
//read the raw input in PHP, and then deserialize the JSON.
$fileData = file_get_contents("php://input");
$objFileData = json_decode($fileData);

echo $rolename = $objFileData -> name;//Get user password
die;
echo $rolename = $_POST['name'];
$crud -> insert("role",[
    'name' => $rolename , 
    'rank' => 'test' , 
    'created_by' => 'shamim' , 
    'created_date' => $today 
]);
echo $crud == null ? "Not connected" : "Connected";

