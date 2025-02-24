<?php
ini_set("display_errors", 1);
error_reporting(E_ALL ^ E_STRICT ^ E_DEPRECATED);
header('Content-Type: text/html; charset=ISO-8859-15');
global $fJSonFldrQstring, $respstat;
 /*
define("DB_DSN","mysql:host=127.12.163.130;dbname=recabeca"); // works with rhcloud and xampp
define("DB_USERNAME","recamu");
define("DB_NAME","recabeca");
define("DB_PASSWORD","becabeca");
 */

include $_SERVER['DOCUMENT_ROOT'] . "/incasa/_p/DumDatabase.php";
  
?>