<?php 

require 'app/globalvariables.php';

session_start();

$_SESSION['user_id'] = 1;

//pdo connection
$db = new PDO('mysql:dbname=chat;host=216.224.168.11', 'root', 'vcuchat2015');
//$db = new PDO('mysql:dbname=chat;host=localhost', 'root', 'root');

//Handle this in some other way
if(!isset($_SESSION['user_id'])) {
	die('You are not signed in.');
} 


