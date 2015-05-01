<?php 
	
require_once 'app/init.php';
//require_once 'app/globalvariables.php';


$itemsQuery = $db->prepare("
	SELECT id, name, done
	FROM items 
	WHERE user = :user 
");

$itemsQuery->execute([
	'user' => $_SESSION['user_id']
]);

$items = $itemsQuery->rowCount() ? $itemsQuery : [];

?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<?php include 'app/includes/head.php'; ?>
	</head>
	<body>
		
		<!-- COME BACK TO AND ADD IF ELSE LOGIN FOR INDEX.PHP -->

		<!--<?php if($loggedin): ?>
			<?php include 'app/includes/announcements.php'; ?>
		<?php else: ?>-->
			<?php include 'app/includes/loginform.php'; ?>
		<!--<?php endif; ?>-->

	</body>
</html>


















