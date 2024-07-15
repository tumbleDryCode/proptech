<?php
// Initialize the session
session_start();
 
// Unset all of the session variables
$_SESSION = array();
 
// Destroy the session.
session_destroy();
setcookie('quid', '', time() - 3600, "/"); // 86400 = 1 day
// Redirect to login page
header("location: index.html");
exit;
?>