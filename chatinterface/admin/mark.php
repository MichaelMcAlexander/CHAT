<?php 

require_once 'app/init.php';

//$pid = $_GET['pid'];

if(isset($_GET['as'], $_GET['item'])) {
	$as 	= $_GET['as'];
	$item 	= $_GET['item'];

	
	switch($as) {
		case 'ANNOUNCEMENT_DONE':
			$doneQuery = $db->prepare("
				UPDATE announcements 
				SET ANNOUNCEMENT_DONE = 1
				WHERE ID = :item 
			");

			$doneQuery->execute([
				'item' => $item
			]);
		break;
	}
	//echo 'success!';
}
//$path = 'Location: announcements.php?pid='.$pid.'';
//'Location: announcements.php?cid='.$courseid.'';

header('Location: programs.php');