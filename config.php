<?php
global $jscssprefix, $isBareTest, $usrlang;
$jscssprefix = "";
$isBareTest = "no";		
// check for cookie userlan
if(isset($_COOKIE['usrlang'])) {
	$usrlang = $_COOKIE['usrlang'];
} else {
	$usrlang = "pt_pt";
	// set cookie
	setcookie("usrlang", $usrlang, time() + (86400 * 30), "/");
}

$con = mysqli_connect("titan","developers","casain","developers");
// $con = ($GLOBALS["___mysqli_ston"] = mysqli_connect("localhost", "developers", "casain")) or trigger_error(((is_object($GLOBALS["___mysqli_ston"]) ? mysqli_error($GLOBALS["___mysqli_ston"]) : (($___mysqli_res = mysqli_connect_error()) ? $___mysqli_res : false)))); 
// ((bool)mysqli_query($con, "USE developers"));
/*
	if (mysqli_connect_errno())
	{
		echo "Failed to connect to MySQL: " . mysqli_connect_error();
	}
	*/
	include("include/functions.php");
?>