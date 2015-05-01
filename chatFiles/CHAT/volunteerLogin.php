<?php

// Connect to the database(host, username, password)


//$con = mysql_connect("localhost", "root", "");

$con = mysql_connect("216.224.168.11:3306", "root", "vcuchat2015");

if (!$con)
{
    echo "Failed to make connection.";
    exit;
}
$db = mysql_select_db('chat');
if (!$db)
{
    echo "Failed to select db.";
    exit;
}
 
 
$VOL_USERNAME = $_POST['VOL_USERNAME'];
$VOL_PASSWORD = $_POST['VOL_PASSWORD'];
 

$sql = "SELECT * FROM volunteers WHERE VOL_USERNAME = '" . $VOL_USERNAME . "' AND VOL_PASSWORD = '" . $VOL_PASSWORD . "'";
$query = mysql_query($sql);
 

if (mysql_num_rows($query) > 0)
{
    $row = mysql_fetch_array($query);
    $response = array(
        'logged' => true,
        'VOL_ID' => $row['VOL_ID'],
        'FIRSTNAME' => $row['FIRSTNAME'],
        'LASTNAME' => $row['LASTNAME'],
        'ADDRESS' => $row['ADDRESS'],
        'CITY' => $row['CITY'],
        'STATE' => $row['STATE'],
        'ZIPCODE' => $row['ZIPCODE'],
        'PHONE_NUM' => $row['PHONE_NUM'],
        'EMAIL' => $row['EMAIL']
    );
    echo json_encode($response);
}
else
{
    $response = array(
        'logged' => false,
        'message' => 'Invalid Username and/or Password'
    );
    echo json_encode($response);
}
?>