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
 
 
$PARENT_USERNAME = $_POST['PARENT_USERNAME'];
$PARENT_PASSWORD = $_POST['PARENT_PASSWORD'];
 

$sql = "SELECT * FROM parents WHERE PARENT_USERNAME = '" . $PARENT_USERNAME . "' AND PARENT_PASSWORD = '" . $PARENT_PASSWORD . "'";
$query = mysql_query($sql);
 

if (mysql_num_rows($query) > 0)
{
    $row = mysql_fetch_array($query);
    $response = array(
        'logged' => true,
        'PARENT_ID' => $row['PARENT_ID'],
        'FIRSTNAME' => $row['FIRSTNAME'],
        'LASTNAME' => $row['LASTNAME'],
        'ADDRESS' => $row['ADDRESS'],
        'CITY' => $row['CITY'],
        'STATE' => $row['STATE'],
        'ZIPCODE' => $row['ZIPCODE'],
        'PHONE' => $row['PHONE'],
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