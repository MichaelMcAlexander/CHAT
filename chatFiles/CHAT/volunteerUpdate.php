<?php

// Connect to the database(host, username, password)


//$conn = mysql_connect("localhost", "root", "");

$conn = mysql_connect("216.224.168.11:3306", "root", "vcuchat2015");

if(! $conn )
{
  die('Could not connect: ' . mysql_error());
}

mysql_select_db('chat');


$VOL_ID = $_POST['VOL_ID'];
$LASTNAME = $_POST['LASTNAME'];
$FIRSTNAME = $_POST['FIRSTNAME'];
$ADDRESS = $_POST['ADDRESS'];
$CITY = $_POST['CITY'];
$STATE = $_POST['STATE'];
$ZIPCODE = $_POST['ZIPCODE'];
$PHONE_NUM = $_POST['PHONE'];
$EMAIL = $_POST['EMAIL'];




if (!empty($CITY)) {
$query = mysql_query("UPDATE volunteers SET CITY = '{$CITY}'
WHERE VOL_ID =  '{$VOL_ID}'");}

if (!empty($ADDRESS)) {
$query = mysql_query("UPDATE volunteers SET ADDRESS = '{$ADDRESS}'
WHERE VOL_ID =  '{$VOL_ID}'");}

if (!empty($STATE)) {
$query = mysql_query("UPDATE volunteers SET STATE = '{$STATE}'
WHERE VOL_ID =  '{$VOL_ID}'");}

if (!empty($ZIPCODE)) {
$query = mysql_query("UPDATE volunteers SET ZIPCODE = '{$ZIPCODE}'
WHERE VOL_ID =  '{$VOL_ID}'");}

if (!empty($PHONE_NUM)) {
$query = mysql_query("UPDATE volunteers SET PHONE = '{$PHONE}'
WHERE VOL_ID =  '{$VOL_ID}'");}

if (!empty($EMAIL)) {
$query = mysql_query("UPDATE volunteers SET EMAIL = '{$EMAIL}'
WHERE VOL_ID =  '{$VOL_ID}'");}


//echo mysql_error();
        
?>
