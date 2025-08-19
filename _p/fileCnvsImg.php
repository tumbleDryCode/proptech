<?php
global $in,$ud,$img;
$ud = '../images/ucontent';
$in = 'anon';
ini_set("display_errors", 1);
error_reporting(E_ALL ^ E_STRICT ^ E_DEPRECATED);
 
// ...existing code...
function makeThumbnails($updir, $img, $id)
{
    $imgt = "ImageJPEG";
    $thumbnail_width = 160;
    $thumbnail_height = 160;
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
    if ($imgt) {
        $old_image = $imgcreatefrom("$updir" . '/' . "$img");
        // Create new image with white background (no transparency)
        $new_image = imagecreatetruecolor($thumbnail_width, $thumbnail_height);
        $white = imagecolorallocate($new_image, 255, 255, 255);
        imagefilledrectangle($new_image, 0, 0, $thumbnail_width, $thumbnail_height, $white);
        // Copy and resize original image onto white background
        imagecopyresized($new_image, $old_image, $dest_x, $dest_y, 0, 0, $new_width, $new_height, $original_width, $original_height);
        $imgt($new_image, "$updir" . '/s_' .  "$thumb_beforeword" . "$img");

        // Make medium size thumbnail with white background
        $medium_width = 400;
        $medium_height = 400;
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
        imagecopyresized($medium_image, $old_image, $dest_x, $dest_y, 0, 0, $new_width, $new_height, $original_width, $original_height);
        $imgt($medium_image, "$updir" . '/m_' . "$thumb_beforeword" . "$img");
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

$upload_dir = $ud;
 
$img = $_POST['inpCnvsImg'];
$img = str_replace('data:image/png;base64,', '', $img);
$img = str_replace(' ', '+', $img);
$data = base64_decode($img);

// crop out any transparent pixels
$img = imagecreatefromstring($data);
$width = imagesx($img);
$height = imagesy($img);
$transparent = imagecolorallocatealpha($img, 255, 255, 255, 127);
imagefill($img, 0, 0, $transparent);
imagealphablending($img, false);
imagesavealpha($img, true);
// create a new image with the same dimensions
$new_img = imagecreatetruecolor($width, $height);
imagecopy($new_img, $img, 0, 0, 0, 0, $width, $height);
imagealphablending($new_img, false);
imagesavealpha($new_img, true);


$timestamp = time();
$nf = $in . '_' . $timestamp .  '.png';
try {
    $result = file_put_contents($upload_dir . '/' . $nf, $data);
   // result is to save the image
    if ($result === false) {
        echo 'There was an error writing this file';
    } else {
       //  echo $nf;
     makeThumbnails($upload_dir, $nf, $in);
    //   makeResamples($upload_dir, $nf, $in);
    }
} catch (Exception $e) {
    echo 'Error: ',  $e->getMessage(), "\n";
}
 
 



?>