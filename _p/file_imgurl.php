<?php
function saveImageFromUrl($imageUrl, $savePath) {
    // Get the image content from the URL
    $imageContent = file_get_contents($imageUrl);

    // Check if the content was successfully retrieved
    if ($imageContent === false) {
        return false; // Failed to retrieve the image
    }

    // Save the image content to the specified path
    $saved = file_put_contents($savePath, $imageContent);
    if ($saved === false) {
        return false; // Failed to save the image
    } 

    // Return true if the image was saved successfully, otherwise false
    return $saved !== false;
}

// Example usage
// $imageUrl = "http://maps.googleapis.com/maps/api/staticmap?key=AIzaSyAiBR8BEPj2YCepKplisQKK709r1TI48Vo";
// add any url variables from this url to the end of the url above
// Example: $imageUrl .= "&size=600x300&markers=color:red|label:A|40.714728,-73.998672";

             // Include the LZString class
                include_once 'LZCompressor/LZString.php';
                include_once 'LZCompressor/LZData.php';
                include_once 'LZCompressor/LZReverseDictionary.php';
                include_once 'LZCompressor/LZUtil.php';
                include_once 'LZCompressor/LZUtil16.php';
                include_once 'LZCompressor/LZContext.php';

                // Instantiate the LZString class
                $lsDCls = new \LZCompressor\LZString();

if(isset($_REQUEST['in'])) {
$in = $_REQUEST['in'];
}
if(isset($_POST['in'])) {
$in = $_POST['in'];
}
 
if(isset($_REQUEST['wu'])) {
$imageUrl = $lsDCls->decompressFromEncodedURIComponent($_REQUEST['wu']);
}
if(isset($_POST['wu'])) {
$imageUrl = $lsDCls->decompressFromEncodedURIComponent($_POST['wu']);
}

$savePath = "../images/tmpi/" . $in . ".jpg"; // Path where the image will be saved

if (saveImageFromUrl($imageUrl, $savePath)) {
    echo "Image saved successfully!";
} else {
    echo "Failed to save the image.";
}
?>