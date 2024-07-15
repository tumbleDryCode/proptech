<?php
header('Content-Type: text/html; charset=ISO-8859-15');
foreach ($_REQUEST as $key=>$value) { 
    // if (get_magic_quotes_gpc()==0) {   } 
        $value = addslashes($value); 
  
    $value = str_replace(array(')','|'),array(')','|'),$value); 
    ${$key} = $value; 
    $_REQUEST[$key] = $value; 
    if (isset($_POST[$key])) { $_POST[$key] = $value; } 
    if (isset($_COOKIE[$key])) { $_COOKIE[$key] = $value; } 
    if (isset($_FILES[$key])) { $_FILES[$key] = $value; } 
    if (isset($_GET[$key])) { $_GET[$key] = $value; } 
    if (isset($HTTP_POST_VARS[$key])) { $HTTP_POST_VARS[$key] = $value; } 
    if (isset($HTTP_COOKIE_VARS[$key])) { $HTTP_COOKIE_VARS[$key] = $value; } 
    if (isset($HTTP_FILE_VARS[$key])) { $HTTP_FILE_VARS[$key] = $value; } 
    if (isset($HTTP_GET_VARS[$key])) { $HTTP_GET_VARS[$key] = $value; } 
}
if (isset($_FILES[$key])) { $_FILES[$key] = $value; }
global $qv, $pi;

ini_set("display_errors", 1);
error_reporting(E_ALL ^ E_STRICT ^ E_DEPRECATED);



function get_web_page( $url )
{
    $options = array(
        CURLOPT_RETURNTRANSFER => true,     // return web page
        CURLOPT_HEADER         => false,    // don't return headers
        CURLOPT_FOLLOWLOCATION => true,     // follow redirects
        CURLOPT_ENCODING       => "",       // handle all encodings
        CURLOPT_USERAGENT      => "spider", // who am i
        CURLOPT_AUTOREFERER    => true,     // set referer on redirect
        CURLOPT_CONNECTTIMEOUT => 120,      // timeout on connect
        CURLOPT_TIMEOUT        => 120,      // timeout on response
        CURLOPT_MAXREDIRS      => 10,       // stop after 10 redirects
        CURLOPT_SSL_VERIFYPEER => false     // Disabled SSL Cert checks
    );

    $ch      = curl_init( $url );
    curl_setopt_array( $ch, $options );
    $content = curl_exec( $ch );
    $err     = curl_errno( $ch );
    $errmsg  = curl_error( $ch );
    $header  = curl_getinfo( $ch );
    curl_close( $ch );

    $header['errno']   = $err;
    $header['errmsg']  = $errmsg;
    $header['content'] = $content;
    return $header;
}   



$tUCCv = "pt";
    // check for usrlang cookie
    if(isset($_COOKIE["usrlang"])) {
    $ulcstr = $_COOKIE["usrlang"];
    if($ulcstr == "pt_pt") {
        $tUCCv = "pt";
    } else if($ulcstr == "spa_spa") {    
        $tUCCv = "es";
    } else {
        $tUCCv = "pt";
    }
    }  
    
	if($pi) {
	$twuStr = "https://nominatim.openstreetmap.org/search?format=json&countrycodes=" . $tUCCv . "&addressdetails=1&extratags=1&namedetails=1q=" . urlencode($pi);
	} else {
	$twuStr = "https://nominatim.openstreetmap.org/search?format=json&countrycodes=" . $tUCCv . "&addressdetails=1&extratags=1&namedetails=1&q=" . urlencode($qv);
	}
	$snp = get_web_page($twuStr);
	echo utf8_decode($snp["content"]);

?>