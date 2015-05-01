<?php 

require_once 'app/init.php';

$pid = $_GET['pid'];


if(isset($_POST['name'])) {
	$name = trim($_POST['name']);

	if(!empty($name)) {

		//prepared statement to add announcements to database
		$addedQuery = $db->prepare("
			INSERT INTO announcements (PROGRAM_ID, ANNOUNCEMENT_MESSAGE, ANNOUNCEMENT_DONE, ANNOUNCEMENT_DATE_POSTED)
			VALUES (:PROGRAM_ID, :ANNOUNCEMENT_MESSAGE, 0, NOW())
		");

		$addedQuery->execute([
			'PROGRAM_ID'   		   => $pid,
			'ANNOUNCEMENT_MESSAGE' => $name
		]);
	}
}
$path = 'Location: announcements.php?pid='.$pid.'';
header($path);
