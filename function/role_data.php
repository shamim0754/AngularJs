<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
require_once("db_crud.php");
$crud = new DBCrud();

$role_list = $crud -> read("role",[
    'name', 
    'rank',  
    'created_by', 
    'created_date' 
]);

foreach ($role_list as $role):
    $data[] = [$role['name'],$role['rank']];
endforeach;
echo json_encode($data);

