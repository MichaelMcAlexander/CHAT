<?php

// Connect to the database(host, username, password)


//$conn = mysql_connect("localhost", "root", "");

$conn = mysql_connect("216.224.168.11:3306", "root", "vcuchat2015");

if(! $conn )
{
  die('Could not connect: ' . mysql_error());
}

mysql_select_db('chat');


$PARENT_ID = $_POST['PARENT_ID'];
$LASTNAME = $_POST['LASTNAME'];
$FIRSTNAME = $_POST['FIRSTNAME'];
$ADDRESS = $_POST['ADDRESS'];
$CITY = $_POST['CITY'];
$STATE = $_POST['STATE'];
$ZIPCODE = $_POST['ZIPCODE'];
$PHONE = $_POST['PHONE'];
$EMAIL = $_POST['EMAIL'];




if (!empty($CITY)) {
$query = mysql_query("UPDATE parents SET CITY = '{$CITY}'
WHERE PARENT_ID =  '{$PARENT_ID}'");}

if (!empty($ADDRESS)) {
$query = mysql_query("UPDATE parents SET ADDRESS = '{$ADDRESS}'
WHERE PARENT_ID =  '{$PARENT_ID}'");}

if (!empty($STATE)) {
$query = mysql_query("UPDATE parents SET STATE = '{$STATE}'
WHERE PARENT_ID =  '{$PARENT_ID}'");}

if (!empty($ZIPCODE)) {
$query = mysql_query("UPDATE parents SET ZIPCODE = '{$ZIPCODE}'
WHERE PARENT_ID =  '{$PARENT_ID}'");}

if (!empty($PHONE)) {
$query = mysql_query("UPDATE parents SET PHONE = '{$PHONE}'
WHERE PARENT_ID =  '{$PARENT_ID}'");}

if (!empty($EMAIL)) {
$query = mysql_query("UPDATE parents SET EMAIL = '{$EMAIL}'
WHERE PARENT_ID =  '{$PARENT_ID}'");}


//echo mysql_error();
        
?>
