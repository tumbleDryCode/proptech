<?php
// error_reporting(E_ALL);  // Turn on all errors, warnings and notices for easier debugging
// turn off error reporting
error_reporting(0);
header('Content-Type: text/html; charset=ISO-8859-15');

foreach ($_REQUEST as $key=>$value) { 
   
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
    if (isset($_FILES[$key])) { $_FILES[$key] = $value; }
}

global $qv, $nr, $safequery, $wul, $origFeedFile, $retData;
$retData = new stdClass();
$ccQryA = str_replace("_automobile","_(automobile)",$qv);
$ccQryB = str_replace("_automóveis","_(automoveis)",$ccQryA);
$ccQryC = str_replace("_marque","_(marque)",$ccQryB);
$qv = $ccQryC;
$safequery = urlencode($qv);  // Make the query URL-friendly
 
$feedDate = date("l");
$ffFName = $wul . "-" . $qv . "-";
$mddFeederUrl = md5($safequery);
$origFeedFile = "feeds/cstm-w-" . $ffFName .  $mddFeederUrl . ".txt";


// simple function that takes a filename and the content
// as variables, then saves the file. Alerts you if $andAlert set to true
function saveExpandedFile($shpfile, $shpfilehtml, $andAlert = false) {
global $siteRootDir, $feeder_id, $ttime, $retData;

$cleanFileContnt = $shpfilehtml;
$twOutputFile = "$shpfile";

		if(file_exists($twOutputFile)) {
		$hasGECLfile = "yes";
		// $statusCreatedAt = filemtime("$twOutputFile");
		} else { // end of if file exists, creat a dummy file to fput() to below
   		$handle = fopen($twOutputFile, 'w');
   		fputs($handle, "previewTxt");  
   		fclose($handle);
		// $statusCreatedAt = ($ttime - $refreshRate) - 1000;
		}


   $handle = fopen($twOutputFile, 'w');
   fputs($handle, $cleanFileContnt);     
   fclose($handle);
   if (false !== $handle) { // no readfile error
  // echo "<br>$twOutputFile<br>saved<br>"; 
   } else {
  // echo "<br>!!! $twOutputFile<br>not saved<br>";
   }
} 




function getFileCache($filename, $theDelaySecs) {
        if ( file_exists( $filename ) ) {
            // find how long ago the file was added to the cache
            // and whether that is longer then MAX_AGE
            $mtime = filemtime( $filename );
            $age = time() - $mtime;
            if ( $theDelaySecs > $age ) {
                // object exists and is current
                return 'HIT';
            }
            else {
                // object exists but is old
                return 'STALE';
            }
        }
        else {
            // object does not exist
            return 'MISS';
        }
}

function get_next_page( $stuff )
{
global $safequery, $origFeedFile, $wul, $retData, $qv;

try {
// echo "get_next_page " . $qv;

// $apicallB = "https://" . $wul . ".wikipedia.org/w/api.php?action=query&prop=extracts&exchars=900&titles=" . $safequery . "&format=json";
$apicallB = "https://wikipedia.org/w/api.php?action=parse&page=" . $qv . "&format=json";
$tresCnttrB = "noQvalue";
$trestrB = get_web_page( $apicallB );
$tresCnttrB = $trestrB["content"];

// $trestSTr = utf8_decode($trestrB["content"]);
$manage = json_decode($trestrB["content"]);
// $tMstr = $manage["parse"]["text"]["*"];stripslashes()
$Tstr = json_encode($manage->parse->text);
$retData->dta = $manage->parse;
// $aTstr = stripslashes($Tstr);
// $returnValue = str_replace('\"', '\',$Tstr);
// echo "<b>DATATATAerT:<br>" . $Tstr . "</b>";
// exit;
// $nacontent = utf8_decode($trestrB["content"]) . "<br>";
// $ncontent = "{\"imgs\":" . $stuff . ",\"dta\":" . $trestrB["content"] . "}";
$ffretval = $tresCnttrB;
// $ffretval = json_encode($retData);

saveExpandedFile($origFeedFile,  $tresCnttrB, false);
echo procWiDmp($ffretval);
exit;
} catch(Exception $erxc) {
echo "Error: " . $qv . "<br>" . $erxc->getMessage() . "<br>" .  $tresCnttrB;
exit;
}
}

function switchLinks(DOMNode $domNode) {
foreach($domNode->getElementsByTagName('a') as $link) { 
   $oldLink = $link->getAttribute("href");
   if(stristr("wiki/", $oldLink)) {
	$link->setAttribute('href', "http://wikipedia.org" . $oldLink);
	}
}

}



function showDOMNode(DOMNode $domNode) {
    foreach ($domNode->childNodes as $node)
    {
        print $node->nodeName.':'.$node->nodeValue . '<br>';
        if($node->hasChildNodes()) {
            showDOMNode($node);
        }
    }    
}


function procWiDmp($wiDump) {
global $wul;
$manage = json_decode($wiDump);
$tMstrA = $manage->parse->text->{"*"};

// return json_encode($tMstrA);

$doc = new DOMDocument();
// $doc->loadHTML(stripslashes(utf8_decode(json_encode($tMstrA)))); 
$doc->loadHTML(stripslashes(utf8_decode($tMstrA))); 

/*
foreach($doc->getElementsByTagName('a') as $link) { 
   $oldLink = $link->getAttribute("href");
   if((stristr($oldLink, "wiki/")) || (stristr($oldLink, "w/"))) {
	$link->setAttribute("href", "https://" . $wul . ".wikipedia.org" . $oldLink);
	$link->setAttribute("target", "_blank");

	}
}
*/
//showDOMNode($doc);
// $estr = $doc->saveHTML();
// $nstring = preg_replace('/%u[\dA-F]{4}/', '&#x$1;', $estr);
// return $nstring;
return $doc->saveHTML();
}
function get_web_page( $url )
{

    $options = array(
        CURLOPT_RETURNTRANSFER => true,     // return web page
        CURLOPT_HEADER         => false,    // don't return headers
        CURLOPT_FOLLOWLOCATION => true,     // follow redirects
        CURLOPT_ENCODING       => "",       // handle all encodings
        CURLOPT_USERAGENT      => "", // who am i
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

$apicallA = "https://api.wikimedia.org/core/v1/wikipedia/en/search/title?limit=5&q=" . $safequery;
// $apicallB = "https://pt.wikipedia.org/w/api.php?action=query&prop=extracts&exchars=1200&format=json&titles=" . $safequery;
// $apicallB = "https://" . $wul . ".wikipedia.org/w/api.php?action=query&prop=extracts&exchars=1200&titles=" . $safequery . "&format=json";



$isOrigCached = getFileCache($origFeedFile, 10000000);
if($isOrigCached == "HIT") { 
$rssString = file_get_contents($origFeedFile);
echo procWiDmp($rssString);
// echo $rssString;
exit;
} else {
// $respA = get_web_page($apicallA);
// $retData->imgs = json_decode($respA["content"]);
$respB = get_next_page("noQvalue");
}
?>
 