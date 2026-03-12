<?php
global $in,$ud,$img;
$ud = '../images/ucontent';
$in = 'anon';
ini_set("display_errors", 1);
error_reporting(E_ALL ^ E_STRICT ^ E_DEPRECATED);
 
require(dirname(__FILE__) . '/Uploader.php');


// Directory where we're storing uploaded images
// Remember to set correct permissions or it won't work

if(isset($_REQUEST['in'])) {
$in = $_REQUEST['in'];
}
if(isset($_POST['in'])) {
$in = $_POST['in'];
}
if(isset($_REQUEST['ud'])) {
$ud = $_REQUEST['ud'];
}
if(isset($_POST['ud'])) {
$ud = $_POST['ud'];
}

$upload_dir = $ud;
 
$data = null;

if (isset($_FILES['videoFile']) && isset($_FILES['videoFile']['tmp_name']) && is_uploaded_file($_FILES['videoFile']['tmp_name'])) {
    $data = file_get_contents($_FILES['videoFile']['tmp_name']);
} else if (isset($_POST['inpCnvsImg'])) {
    $pstimg = $_POST['inpCnvsImg'];
    $unencdImg = urldecode($pstimg);

    include_once 'LZCompressor/LZString.php';
    include_once 'LZCompressor/LZData.php';
    include_once 'LZCompressor/LZReverseDictionary.php';
    include_once 'LZCompressor/LZUtil.php';
    include_once 'LZCompressor/LZUtil16.php';
    include_once 'LZCompressor/LZContext.php';

    $lsDCls = new \LZCompressor\LZString();
    $vfileblob = $lsDCls->decompressFromEncodedURIComponent($unencdImg);
    if (strpos($vfileblob, ',') !== false) {
        $vfileblob = substr($vfileblob, strpos($vfileblob, ',') + 1);
    }
    $data = base64_decode($vfileblob);
}

if ($data === null || $data === false || strlen($data) === 0) {
    echo 'Error: No video data uploaded';
    exit;
}
 

                
 

$timestamp = time();
$nf = $in . '_' . $timestamp .  '.webm';
try {
    $result = file_put_contents($upload_dir . '/' . $nf, $data);
   // result is to save the image
    if ($result === false) {
        echo 'There was an error writing this file';
    } else {
       echo $nf;
    
    }
} catch (Exception $e) {
    echo 'Error: ',  $e->getMessage(), "\n";
}
 
 



?>