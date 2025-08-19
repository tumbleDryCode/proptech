<?php
global $in,$ud;
ini_set("display_errors", 1);
error_reporting(E_ALL ^ E_STRICT ^ E_DEPRECATED);

function makeThumbnails($updir, $img, $id)
{
    $imgt = "ImageJPEG";
    $thumbnail_width = 84;
    $thumbnail_height = 84;
    $thumb_beforeword = "thumb";
    $arr_image_details = getimagesize("$updir" . '/' . $img); // pass id to thumb name
    $original_width = $arr_image_details[0];
    $original_height = $arr_image_details[1];
    if ($original_width > $original_height) {
        $new_width = $thumbnail_width;
        $new_height = intval($original_height * $new_width / $original_width);
    } else {
        $new_height = $thumbnail_height;
        $new_width = intval($original_width * $new_height / $original_height);
    }
    $dest_x = intval(($thumbnail_width - $new_width) / 2);
    $dest_y = intval(($thumbnail_height - $new_height) / 2);
    if ($arr_image_details[2] == IMAGETYPE_GIF) {
        $imgt = "ImageGIF";
        $imgcreatefrom = "ImageCreateFromGIF";
    }
    if ($arr_image_details[2] == IMAGETYPE_JPEG) {
        $imgt = "ImageJPEG";
        $imgcreatefrom = "ImageCreateFromJPEG";
    }
    if ($arr_image_details[2] == IMAGETYPE_PNG) {
        $imgt = "ImagePNG";
        $imgcreatefrom = "ImageCreateFromPNG";
    }
// ...existing code...
    if ($imgt) {
        $old_image = $imgcreatefrom("$updir" . '/' . "$img");
        // Create new image with white background (no transparency)
        $new_image = imagecreatetruecolor($thumbnail_width, $thumbnail_height);
        $white = imagecolorallocate($new_image, 255, 255, 255);
        imagefilledrectangle($new_image, 0, 0, $thumbnail_width, $thumbnail_height, $white);
        // Copy and resize original image onto white background
        imagecopyresampled($new_image, $old_image, $dest_x, $dest_y, 0, 0, $new_width, $new_height, $original_width, $original_height);
        $imgt($new_image, "$updir" . '/' . $id . '_' . "$thumb_beforeword" . "$img");

        // make a medium size thumbnail with white background
        $medium_width = 300;
        $medium_height = 300;
        if ($original_width > $original_height) {
            $new_width = $medium_width;
            $new_height = intval($original_height * $new_width / $original_width);
        } else {
            $new_height = $medium_height;
            $new_width = intval($original_width * $new_height / $original_height);
        }
        $dest_x = intval(($medium_width - $new_width) / 2);
        $dest_y = intval(($medium_height - $new_height) / 2);
        $medium_image = imagecreatetruecolor($medium_width, $medium_height);
        $white2 = imagecolorallocate($medium_image, 255, 255, 255);
        imagefilledrectangle($medium_image, 0, 0, $medium_width, $medium_height, $white2);
        imagecopyresampled($medium_image, $old_image, $dest_x, $dest_y, 0, 0, $new_width, $new_height, $original_width, $original_height);
        $imgt($medium_image, "$updir" . '/m_' . "$thumb_beforeword". "$img");
        imagedestroy($old_image);
        imagedestroy($new_image);
        imagedestroy($medium_image);
    }
echo json_encode(array('in' => $img, 'success' => true, 'msg' => 'done'));
exit;
}
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

$upload_dir = "../" . $ud;

$uploader = new FileUpload('uploadfile');
// create a variable with unix timestamp
// $timestamp = time();
// random string for the image name
$timestamp = bin2hex(random_bytes(8));
$nf = $in . '_' . $timestamp .  '.' . $uploader->getExtension();
$uploader->setFileName($nf);
// $uploader->setFileName($nf);
// Handle the upload
$result = $uploader->handleUpload($upload_dir);

if (!$result) {
makeThumbnails($upload_dir, $nf, 's');
// echo json_encode(array('in' => $nf, 'success' => false, 'msg' => $uploader->getErrorMsg()));  
} else {
makeThumbnails($upload_dir, $nf, 's');
// echo json_encode(array('in' => $nf, 'success' => true, 'msg' => $uploader->getErrorMsg()));
 }



?>