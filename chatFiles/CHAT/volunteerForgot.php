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
 
 
$EMAIL = $_POST['EMAIL'];


 

$sql = "SELECT * FROM volunteers WHERE EMAIL = '$EMAIL'";
$query = mysql_query($sql);
 


    $row = mysql_fetch_array($query);
    $response = array(
        'logged' => true,
        
        'VOL_USERNAME' => $row['VOL_USERNAME'],
        'PASSWORD' => $row['PASSWORD'],  
        'FIRSTNAME' => $row['FIRSTNAME'],
        'LASTNAME' => $row['LASTNAME'],
        'EMAIL' => $row['EMAIL']
    );
    echo json_encode($response);

?>