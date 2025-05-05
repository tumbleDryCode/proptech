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

    // Return true if the image was saved successfully, otherwise false
    return $saved !== false;
}

// Example usage
$imageUrl = "http://titan/incasa/logo.png";
$savePath = "../images/tmpi/saved_image.png";

if (saveImageFromUrl($imageUrl, $savePath)) {
    echo "Image saved successfully!";
} else {
    echo "Failed to save the image.";
}
?>