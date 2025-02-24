 
<!-- SOCIAL MEDIA META -->
<?php
/**
 * PDO mysql database helper class
 * 
 * @author wildantea <wildannudin@gmail.com>
 * @copyright june 2013
 */
 $image = "https://propsgo.com/images/logo_og.png";
 $pgKeywords = "Page Keywords"; 
 $pgDesc =  "propsgo.com";
 $siteTitle = "propsgo.com";
 $pgTitle = "propsgo.com ";
 
 
if(isset($_GET["ditemid"])) {
    try {
     $itemid = $_GET["ditemid"];
     // get record from database
    $q = "SELECT * FROM property WHERE _id = $itemid";
    // send query to do.php
   include $_SERVER['DOCUMENT_ROOT'] . "/incasa/_p/DumDatabase.php";
            $cdbf = new DumDatabase();
            $fJSonFldQs = $cdbf->fetch_cstmArr($q);
            // $fJSonFldQs is a mysql result array
            // convert to json
            $tJsonSTr = "";
             while($row = $fJSonFldQs->fetch_assoc()) {
                $title = $row["ptitle"];
                /*

         
                if($description == "ns") {
                    $description = $title;
                }
                */
                $adescription = $row["pcontent"];
                if($adescription == "ns") {
                    $adescription = $title;
                }
                $unencdDesc = urldecode($adescription);
                
                // Include the LZString class
                include_once '_p/LZCompressor/LZString.php';
                include_once '_p/LZCompressor/LZData.php';
                include_once '_p/LZCompressor/LZReverseDictionary.php';
                include_once '_p/LZCompressor/LZUtil.php';
                include_once '_p/LZCompressor/LZUtil16.php';
                include_once '_p/LZCompressor/LZContext.php';

                // Instantiate the LZString class
                $lsDCls = new \LZCompressor\LZString();
                $lzdDesc = $lsDCls->decompressFromEncodedURIComponent($unencdDesc);
                
                $astrpDesc = strip_tags($lzdDesc);
                // strip everything but alphanumeric characters and spaces
                $strpDesc = preg_replace("/[^a-zA-Z0-9\s]/", "", $astrpDesc);
                // remove multiple spaces and carriage returns
                $strpDesc = preg_replace('/\s+/', ' ', $strpDesc);



                // Shorten to 160 characters
                $description = substr($strpDesc, 0, 160);
                $pgDesc = $description;

 
                $pgTitle = $title;
                $pgKeywords = $title;
                $siteTitle = $title;

                $image = $row["pimage"];
                if(stristr($image, "http")) {
                    $image = $row["pimage"];
                } else if(stristr($image, ".")){
                    $image = "https://propsgo.com/images/property/" . $row["pimage"];
                } else {
                    $image = "https://propsgo.com/images/logo_og.png";
                }   
                $tJsonSTr = '{"ditemid":"' . $row["_id"] . '","ptitle":"' . $title . '","pdesc":"' .  $description . '","i_img":"' . $image . '"}';
             
                 }   
                 /*
                echo "<script>";
                echo "var currCoDcidStr = 'noQvalue';\r\n";
                echo "var currDitemStr = 'noQvalue';\r\n";
                 echo "currDitemStr = '[" . $tJsonSTr . "]';";
                echo "</script>";
                    */
        
      
} catch(Exception $ex) {
    echo "/* exception: " . $ex . "*/";
}
}
 

 

$oglocation = (@$_SERVER["HTTPS"] == "on") ? "https://" : "http://";
$oglocation .= $_SERVER["SERVER_NAME"] . $_SERVER["REQUEST_URI"];



 

$tMOGstr = "<meta name=\"description\" content=\"" . $pgDesc . "\">\n";
$tMOGstr .= "<meta name=\"keywords\" contest>\n";
$tMOGstr .= "<meta property=\"og:description\" content=\"" . $pgDesc . "\">\n";
$tMOGstr .= "<meta property=\"og:image\" content=\"" . $image . "\">\n";
$tMOGstr .= "<meta property=\"og:site_name\" content=\"propsgo.com\">\n";
$tMOGstr .= "<meta property=\"og:title\" content=\"" . $pgTitle . "\">\n";
$tMOGstr .= "<meta property=\"og:type\" content=\"website\">\n";
$tMOGstr .= "<meta property=\"og:url\" content=\"" . $oglocation . "\">\n";
$tMOGstr .= "<title>" . $pgTitle . "</title>\n";
echo $tMOGstr;
?>
 