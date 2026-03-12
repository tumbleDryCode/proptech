 
<!-- SOCIAL MEDIA META -->
<?php
// output all errors for debugging
error_reporting(E_ALL);
global $pgDesc, $pgKeywords, $pgTitle, $siteTitle, $pgType, $image, $oglocation;
/**
 * PDO mysql database helper class
 * 
 * @author wildantea <wildannudin@gmail.com>
 * @copyright june 2013
 */
 $image = "https://dev.propsgo.com/images/logo_og.png";
 $pgKeywords = "Page Keywords"; 
 $pgDesc =  "propsgo.com";
 $siteTitle = "propsgo.com";
 $pgTitle = "propsgo.com ";
 $pgType = "website";
 $usrlang = "pt_pt";
 $deflang = "pt_pt";
 // if cookie usrlang
 if(isset($_COOKIE["usrlang"])) {
     $usrlang = $_COOKIE["usrlang"];
    //  $deflang = $_COOKIE["usrlang"];
 }

$oglocation = (@$_SERVER["HTTPS"] == "on") ? "https://" : "http://";
$oglocation .= $_SERVER["SERVER_NAME"] . $_SERVER["REQUEST_URI"];
$ogurl = $oglocation;

 // include $_SERVER['DOCUMENT_ROOT'] . "/incasa/_p/DumDatabase.php";
// $_SERVER['DOCUMENT_ROOT'] does not work in this context, use relative path to _p/DumDatabase.php
require_once dirname(__FILE__) . '/DumDatabase.php';
if(isset($_GET["ditemid"])) {
    try {
     $fullitemid = $_GET["ditemid"];
        $itemidArr = explode("-", $fullitemid);
        $itemid = $itemidArr[0];
        $usrlang = $itemidArr[1];
        // $deflang = $usrlang;
       // set the usrlang cookie if not set and different from default


 
     // get record from database
   //  $q = "SELECT * FROM property WHERE _id = $itemid";
   // anewQstr = "select p.*, u.u_icon, u.u_fullname, pd.pd_prptitle, pd.pd_prpdesc from property p, quser u, propdescs pd where p._id = " + prpid + " and p.prtype = '5' and p.uid = u._id and pd.pd_prpid = p._id and (pd.pd_prptlng = '" +  usrlang + "' or pd.pd_prptlng = '" + deflang + "')";
   $q = "SELECT p.*, u.u_icon, u.u_fullname, pd.pd_prptitle, pd.pd_prpdesc FROM property p, quser u, propdescs pd WHERE p._id = $itemid AND p.prtype = '5' AND p.uid = u._id AND pd.pd_prpid = p._id AND (pd.pd_prptlng = '$usrlang' OR pd.pd_prptlng = '$deflang')";

    // send query to do.php
            $cdbf = new DumDatabase();
            $fJSonFldQs = $cdbf->fetch_cstmArr($q);
            // $fJSonFldQs is a mysql result array
            // convert to json
            $tJsonSTr = "";
             while($row = $fJSonFldQs->fetch_assoc()) {
                $title = $row["pd_prptitle"];
                /*

         
                if($description == "ns") {
                    $description = $title;
                }
                */
                $adescription = $row["pd_prpdesc"];
                if($adescription == "ns") {
                    $adescription = $title;
                }
                $unencdDesc = urldecode($adescription);
                
                // Include the LZString class
                include_once 'LZCompressor/LZString.php';
                include_once 'LZCompressor/LZData.php';
                include_once 'LZCompressor/LZReverseDictionary.php';
                include_once 'LZCompressor/LZUtil.php';
                include_once 'LZCompressor/LZUtil16.php';
                include_once 'LZCompressor/LZContext.php';

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

                $udecodPgTtle = urldecode($title);
                $LzdPgTtle = $lsDCls->decompressFromEncodedURIComponent($udecodPgTtle);
                $pgTitle = $LzdPgTtle;
                $pgKeywords = $pgTitle;
                $siteTitle = $pgTitle;

                $image = $row["pimage"];
                if(stristr($image, "http")) {
                    $image = $row["pimage"];

                } else  if(stristr($image, "updt_")) {
                    $ckeanImg = str_replace("updt_", "", $image);
                    $image = "https://dev.propsgo.com/images/ucontent/" . $ckeanImg;
                    $pgType = "image";
                    $oglocation = $image;
               
                 } else   if(stristr($image, "updt3d_")){
                    $ckeanImg = str_replace("updt3d_", "", $image);
                    $unzdImg = LZCompressor\LZString::decompressFromEncodedURIComponent($ckeanImg);
                    $image = $unzdImg;
                    $pgType = "image";
                    $oglocation = $image;
                } else if(stristr($image, ".")){
                    $image = "https://dev.propsgo.com/images/property/" . $row["pimage"];
           
                } else {
                    $image = "https://dev.propsgo.com/images/logo_og.png";
                }   
                $tJsonSTr = '{"ditemid":"' . $row["_id"] . '","ptitle":"' . $title . '","pdesc":"' .  $description . '","i_img":"' . $image . '"}';
              // echo $tJsonSTr;
              // exit;
                 }   // 
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
if(isset($_GET["tupid"])) {
    try {
        $fulltupid = $_GET["tupid"];
        $tupidArr = explode("-", $fulltupid);
     $itemid = $tupidArr[0];
        $usrlang = $tupidArr[1];
        // $deflang = $usrlang;

     // get record from database
    $q = "SELECT * FROM qposts WHERE _id = $itemid";
    // send query to do.php
                 // include "../_p/DumDatabase.php";
                $cdbf = new DumDatabase();
                $fJSonFldQs = $cdbf->fetch_cstmArr($q);
                // $fJSonFldQs is a mysql result array
                // convert to json
                $tJsonSTr = "";
                 while($row = $fJSonFldQs->fetch_assoc()) {
                 $title = $row["p_title"];
                 $apgTitle = $title;
                 $pgTitle = urldecode($title);

                 /*
                 if($description == "ns") {
                      $description = $title;
                 }
                 */
                 $adescription = $row["p_content"];
                 if($adescription == "ns") {
                      $adescription = $title;
                 }
                 $unencdDesc = urldecode($adescription);
                 
                 // Include the LZString class
                 include_once 'LZCompressor/LZString.php';
                 include_once 'LZCompressor/LZData.php';
                 include_once 'LZCompressor/LZReverseDictionary.php';
                 include_once 'LZCompressor/LZUtil.php';
                 include_once 'LZCompressor/LZUtil16.php';
                 include_once 'LZCompressor/LZContext.php';
    
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
                    $image = $row["p_image"];
                    $ppType = $row["p_ptype"];
                  
                    if(stristr($image, "http")) {
                        $image = $row["p_image"];
                    } else if(stristr($image, ".")){
                        $image = "https://dev.propsgo.com/images/ucontent/" . $row["p_image"];
                    } else {
                        $image = "https://dev.propsgo.com/images/logo_og.png";
                    }
                    // echo p_ptype for debugging
                     if($ppType == "pimage") {
                        $pgType = "image";
                        $oglocation = $image;
                    } else if($ppType == "pvideo") {
                         $pgType = "video";
                         $oglocation = "https://dev.propsgo.com/images/ucontent/" . $row["p_vala"];
                        // $ogurl = $oglocation;
                    } else {
                        $pgType = "website";
                    }   
                    $tJsonSTr = '{"ditemid":"' . $row["_id"] . '","ptitle":"' . $title . '","pdesc":"' .  $description . '","i_img":"' . $image . '"}';
                    $tJsonSTr = '{"ditemid":"' . $row["_id"] . '","ptitle":"' . $title . '","pdesc":"' .  $description . '","i_img":"' . $image . '"}';
                }

                

 
 // encode the description


} catch(Exception $ex) {
    echo "/* exception: " . $ex . "*/";
}
          
            }

// url decode $pgDesc and $pgTitle for use in meta tags
$pgDesc = urldecode($pgDesc);
$pgTitle = urldecode($pgTitle);
$tMOGstr = "<meta name=\"description\" content=\"" . $pgDesc . "\">\n";
$tMOGstr .= "<meta name=\"keywords\" content=\"" . $pgKeywords . "\">\n";
$tMOGstr .= "<meta property=\"og:description\" content=\"" . $pgDesc . "\">\n";
$tMOGstr .= "<meta property=\"og:image\" content=\"" . $image . "\">\n";
$tMOGstr .= "<meta property=\"og:site_name\" content=\"propsgo.com\">\n";
$tMOGstr .= "<meta property=\"og:title\" content=\"" . $pgTitle . "\">\n";
$tMOGstr .= "<meta property=\"og:type\" content=\"" . $pgType . "\">\n";
$tMOGstr .= "<meta property=\"og:url\" content=\"" . $ogurl . "\">\n";
if($pgType == "video") {
$tMOGstr .= "<meta property=\"og:video:secure_url\" content=\"" . $oglocation . "\">\n";
$tMOGstr .= "<meta property=\"og:video\" content=\"" . $oglocation . "\">\n";
}
// appID
$tMOGstr .= "<meta property=\"fb:app_id\" content=\"1814864155722452\">\n";
$tMOGstr .= "<title>" . $pgTitle . "</title>\n";
echo $tMOGstr;
// exit;
?>
 