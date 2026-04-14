<?php
ini_set("display_errors", 1);
error_reporting(E_ALL ^ E_STRICT ^ E_DEPRECATED);
header('Content-Type: text/html; charset=ISO-8859-15');
global $fJSonFldrQstring, $respstat;
 
include $_SERVER['DOCUMENT_ROOT'] . "/incasa/_p/DumDatabase.php";
  
?>