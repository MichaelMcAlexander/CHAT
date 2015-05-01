<?php

require 'app/globalvariables.php';

$name = 'mike';
$pass = 'mike';

if(empty($_POST) === false) {
	$username = $_POST['username'];
	$password = $_POST['password'];

	//echo $username.' '.$password;

	if($username === $name){
		//echo 'username is true with '.$username;

		if($password === $pass){
			//echo 'still true';
			$loggedin = true;
			//var_dump($loggedin);
			header('Location: programs.php');
		}else{
			echo 'password isnt correct';
		}
	}else{
		echo 'username is incorrect';
	}


}