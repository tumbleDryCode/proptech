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
$imageUrl = "http://maps.googleapis.com/maps/api/staticmap?key=AIzaSyAiBR8BEPj2YCepKplisQKK709r1TI48Vo&size=445x300&center=39.91740361090788,-8.360379324363205&zoom=20&maptype=satellite&path=color:0x0000ff|weight:5|39.91745892453321,-8.360326437493887|39.917560754517375,-8.360079674264517|39.91761424091304,-8.36014672948989|39.91751241100842,-8.360370693942633|39.91745892453321,-8.360326437493887";
// base64 encode $imageUrl
$bs64 = base64_encode($imageUrl);

 
$savePath = "../images/tmpi/" . $bs64 . ".jpg"; // Path where the image will be saved

if (saveImageFromUrl($imageUrl, $savePath)) {
    echo "Image saved successfully!";
} else {
    echo "Failed to save the image.";
}
?>