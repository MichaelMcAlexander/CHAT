<?php

// Connect to the database(host, username, password)



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

$sql_main = "SELECT *  from announcements where ANNOUNCEMENT_TITLE = 'Main Announcement '";
$query_main = mysql_query($sql_main);
$row_main = mysql_fetch_array($query_main);

 
$sql_student = "SELECT *  from announcements where ANNOUNCEMENT_TITLE = 'Student Announcement '";
$query_student = mysql_query($sql_student);
$row_student = mysql_fetch_array($query_student);

$sql_parent = "SELECT *  from announcements where ANNOUNCEMENT_TITLE = 'Parent Announcement '";
$query_parent = mysql_query($sql_parent);
$row_parent = mysql_fetch_array($query_parent);

$sql_volunteer = "SELECT *  from announcements where ANNOUNCEMENT_TITLE = 'Volunteer Announcement '";
$query_volunteer = mysql_query($sql_volunteer);
$row_volunteer = mysql_fetch_array($query_volunteer);
    


    $response = array(
        'logged' => true,
        
        'Main_Announcement' => $row_main['ANNOUNCEMENT_MESSAGE'],
        'Student_Announcement' => $row_student['ANNOUNCEMENT_MESSAGE'],
        'Parent_Announcement' => $row_parent['ANNOUNCEMENT_MESSAGE'],
        'Volunteer_Announcement' => $row_volunteer['ANNOUNCEMENT_MESSAGE']
 
        
    );
    echo json_encode($response);


?>