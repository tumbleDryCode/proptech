<?php
global $jscssprefix, $isBareTest, $usrlang;
$jscssprefix = "";
$isBareTest = "no";	

if(stristr($_SERVER["HTTP_HOST"], "localhost") || stristr($_SERVER["HTTP_HOST"], "titan") || stristr($_SERVER["HTTP_HOST"], "192.")) {
    // change evenflow to your database name
    define("DB_DSN","mysql:host=titan;dbname=developers"); // works with rhcloud and xampp
    define("DB_USERNAME","developers");
    define("DB_NAME","developers");
    define("DB_PASSWORD","casain");
    } else {
    define("DB_DSN","mysql:host=pdb46.freehostingeu.com;dbname=3537280_logipal"); // works with rhcloud and xampp
    define("DB_USERNAME","3537280_incasa");
    define("DB_NAME","3537280_incasa");
    define("DB_PASSWORD","casain01");
    }


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