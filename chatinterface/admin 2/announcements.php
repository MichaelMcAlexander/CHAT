<?php 

require_once 'app/init.php';
//require_once 'app/globalvariables.php';


$pid = $_GET['pid'];
//echo $pid;

$announcementQuery = $db->prepare("
	SELECT ID, PROGRAM_ID, ANNOUNCEMENT_MESSAGE, ANNOUNCEMENT_DONE
	FROM announcements
	WHERE PROGRAM_ID = :PROGRAM_ID
");

$announcementQuery->execute([
	'PROGRAM_ID' => $pid
]);

$items = $announcementQuery->rowCount() ? $announcementQuery : [];

/*foreach ($items as $item) {
	//print_r($item);
	echo $item['name'], '<br>';///////pid=<?php echo $pid; ?>&
}*/
?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<?php include 'app/includes/head.php'; ?>
	</head>
	<body>
		<div class="list">
			<h1 class="header">Announcements</h1>
			<a href="logout.php" id="logout">Logout</a>

			<?php if(!empty($items)): ?>
			<ul class="items">
				<?php foreach($items as $item): ?>
				<li>
					<!-- Changed $item['name'] to $item['ANNOUNCEMENT_MESSAGE'] -->
					<span class="item<?php echo $item['ANNOUNCEMENT_DONE'] ? ' done' : '' ?>"><?php echo $item['ANNOUNCEMENT_MESSAGE']; ?></span>
					<?php if(!$item['ANNOUNCEMENT_DONE']): ?>
					<a href="mark.php?as=ANNOUNCEMENT_DONE&item=<?php echo $item['ID']; ?>" class="done-button">Expired/Cancelled</a>
					<?php endif; ?>
				</li>
				<?php endforeach; ?>
			</ul>
			<?php else: ?>
				<p>You haven't added any items yet.</p>
			<?php endif; ?>

			<form class="item-add" action="add.php?pid=<?php echo $pid; ?>" method="post">
				<input type="text" name="name" placeholder="Type a new item here." class="input" autocomplete="off" required>
				<input type="submit" value="Add Announcement" class="submit">
			</form>
			<hr class="seperate-buttons">
			<form class="item-add" action="remove.php?pid=<?php echo $pid; ?>" method="post">
				<input type="submit" value="Remove Old Announcements" class="submit">
			</form>
		</div>
	</body>
</html>