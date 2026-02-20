
// Example: CCapture integration and animation loop
var capturer = null;
var vidFramesAnimating = "no";
var vdCanvas;
var vdCtx;
var vdImgs = [];
var originalVdImgs = [];
var vdBtn;
var isRecordingVid = "no";
var vdIncr = 0;
var framesPerImage = 6; // 2 seconds at 3 fps
var propertyTitle = "";
var sellerIcon = "";
var sellerIconImg = null;
var loadedImages = [];
var imagesLoaded = 0;
var intervalId;
var lastDrawTime = 0;

function doCreateVidPop() {
    // Create popup HTML with tabs and canvas
    var tabHtml = '<ul class="nav nav-tabs"><li class="active"><a href="#videoTab">Video</a></li><li><a href="#imagesTab">Images</a></li><li><a href="#settingsTab">Settings</a></li></ul>';
    var contentHtml = '<div class="tab-content" style="min-height: 400px;"><div id="videoTab" class="tab-pane active" style="text-align:center;"><canvas id="vidFramesCanvas" width="340" height="340" style="border:1px solid #ccc; background:#222;"></canvas><br><input type="button" id="btnPreview" value="Preview" onclick="runVidFrames(\'no\');" class="cls_button cls_button-small txtSmall bkgdClrHdr txtClrWhite" /><input type="button" id="btnCreateVideo" value="Create Video" class="cls_button cls_button-small txtSmall bkgdClrHdr txtClrWhite" onclick="createVideoAutomatically();" /></div><div id="imagesTab" class="tab-pane"><div id="divImgsContent"></div></div><div id="settingsTab" class="tab-pane"><p>Settings tab content to be added later.</p></div></div>';
    var tVCPopStr = tabHtml + contentHtml;
    JSSHOP.ui.popNurFillLbox(tVCPopStr, "Property Video Maker");
    gatherImages();

    // Gather property images for the Images tab
    vdImgs = [];
    for (var k in tmpPrpMediaObj) {
        var m = tmpPrpMediaObj[k];
        if (m && m.m_file_thumb) {
            var mImgSrc = m.m_file;
            var mImgThmbSrc = m.m_file_thumb;
            var tCatID = m.m_catid;
            switch (tCatID) {
                case "5": // regular
                    var tmfile = mImgSrc;
                    if (tmfile.indexOf("updt_") != -1) {
                        tmfile = tmfile.replace("updt_", "");
                        vdImgs.push("images/ucontent/" + tmfile);
                    } else {
                        tmfile = tmfile;
                        vdImgs.push("images/property/" + tmfile);
                    }
                    break;
                case "20": // streetview
                    var tNrmlImg = mImgSrc;
                    var tLZuncompD = LZString.decompressFromEncodedURIComponent(tNrmlImg);
                    vdImgs.push(tLZuncompD);
                    break;
                case "25": // aerial
                    tNrmlImg = mImgSrc;
                    tLZuncompD = LZString.decompressFromEncodedURIComponent(tNrmlImg);
                    vdImgs.push(tLZuncompD);
                    break;
                case "30": // 3D
                    var tHmbImg = mImgThmbSrc;
                    tLZuncompD = LZString.decompressFromEncodedURIComponent(tHmbImg);
                    vdImgs.push(tLZuncompD);
                    break;
                default:
                    continue;
            }
        }
    }
    // Initialize selected images
    selectedImages = [];
    for (var i = 0; i < vdImgs.length; i++) {
        selectedImages.push(i);
    }

    // Add event handlers for tabs like openMediaPickerDialog
    setTimeout(function() {
        var tabs = document.querySelectorAll('.nav-tabs a');
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].addEventListener('click', function(e) {
                e.preventDefault();
                var target = this.getAttribute('href');
                var panes = document.querySelectorAll('.tab-pane');
                for (var j = 0; j < panes.length; j++) {
                    panes[j].classList.remove('active');
                }
                document.querySelector(target).classList.add('active');
                // Remove active from tabs
                var tabLinks = document.querySelectorAll('.nav-tabs li');
                for (var k = 0; k < tabLinks.length; k++) {
                    tabLinks[k].classList.remove('active');
                }
                this.parentElement.classList.add('active');
                // If video tab, draw collage
                if (target === '#videoTab') {
                    setTimeout(function() { drawVideoCollage(); }, 100);
                } else if (target === '#imagesTab') {
                    document.getElementById("divImgsContent").innerHTML = getImgTabContent();
                    setTimeout(function() {
                        var sortable = new Sortable(document.getElementById('sortableImages'), {
                            animation: 150,
                            handle: '.drag-handle',
                            onEnd: function(evt) {
                                // Update selectedImages order
                                var newOrder = [];
                                var items = document.querySelectorAll('#sortableImages .sortable-item');
                                for (var j = 0; j < items.length; j++) {
                                    newOrder.push(parseInt(items[j].getAttribute('data-index')));
                                }
                                selectedImages = newOrder;
                            }
                        });
                    }, 100);
                }
            });
        }
        // Initial draw
        drawVideoCollage();
    }, 500);
}


// Draw a collage of images with "Create Video" text
function drawVideoCollage() {
    let canvas = document.getElementById("vidFramesCanvas");
    if (!canvas) return;
    let ctx = canvas.getContext("2d");

    // Background
    ctx.fillStyle = "rgba(0,0,0,0.5)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Text
    ctx.fillStyle = "#fff";
    ctx.font = "bold 24px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Create Video", canvas.width / 2, canvas.height / 2);

    // Gather first 4 images
    let imagesToLoad = [];
    for (const k in tmpPrpMediaObj) {
        const m = tmpPrpMediaObj[k];
        if (m && m.m_file_thumb && imagesToLoad.length < 4) {
            const mcat = m.m_catid;
            const mImgSrc = m.m_file;
            const mImgThmbSrc = m.m_file_thumb;
            let tmfile = '';
            switch (mcat) {
                case "5": // regular
                    tmfile = mImgSrc;
                    if (tmfile.indexOf("updt_") != -1) {
                        tmfile = tmfile.replace("updt_", "");
                        imagesToLoad.push("images/ucontent/" + tmfile);
                    } else {
                        imagesToLoad.push("images/property/" + tmfile);
                    }
                    break;
                case "20": // streetview
                    var tNrmlImg = mImgSrc;
                    var tLZuncompD = LZString.decompressFromEncodedURIComponent(tNrmlImg);
                    imagesToLoad.push(tLZuncompD);
                    break;
                case "25": // aerial
                    tNrmlImg = mImgSrc;
                    tLZuncompD = LZString.decompressFromEncodedURIComponent(tNrmlImg);
                    imagesToLoad.push(tLZuncompD);
                    break;
                case "30": // 3D
                    var tHmbImg = mImgThmbSrc;
                    tLZuncompD = LZString.decompressFromEncodedURIComponent(tHmbImg);
                    imagesToLoad.push(tLZuncompD);
                    break;
                default:
                    continue;
            }
        }
    }

    var loadedCount = 0;
    imagesToLoad.forEach(function(src, index) {
        var img = new Image();
        if (src.startsWith('http')) {
            img.crossOrigin = "Anonymous";
        }
        img.onload = function() {
            // Draw faded in 2x2 grid
            ctx.globalAlpha = 0.3;
            var x = (index % 2) * (canvas.width / 2);
            var y = Math.floor(index / 2) * (canvas.height / 2);
            var w = canvas.width / 2;
            var h = canvas.height / 2;
            ctx.drawImage(img, x, y, w, h);
            ctx.globalAlpha = 1;
            loadedCount++;
            if (loadedCount === imagesToLoad.length) {
                // Redraw text on top
                ctx.fillStyle = "#fff";
                ctx.font = "bold 24px Arial";
                ctx.textAlign = "center";
                ctx.fillText("Create Video", canvas.width / 2, canvas.height / 2);
            }
        };
        img.src = src;
    });
    // Initialize selected images
    selectedImages = [];
    for (var i = 0; i < vdImgs.length; i++) {
        selectedImages.push(i);
    }

}


// Toggle Start/Stop button handler
function toggleVidRecording() {
    vdBtn = document.getElementById("btnVidRecToggle");
    if (vdBtn.value === "Start Recording") {
        doStartVidCap();
        vdBtn.value = "Stop Recording";
        vdBtn.style.backgroundColor = "#ff0000";
        document.getElementById("btnVidSave").style.display = "none";
    } else {
        doStopVidCap();
        vdBtn.value = "Start Recording";
        vdBtn.style.backgroundColor = "";
        document.getElementById("btnVidSave").style.display = "";
    }
}

function doStartVidCap() {
    // Initialize CCapture (assumes CCapture is loaded globally)
    capturer = new CCapture({ format: 'webm', framerate: 3, verbose: true });
    capturer.start();
    vidFramesAnimating = "yes";
    // Pass true to indicate recording
}

function doStopVidCap() {
    vidFramesAnimating = "no";
    isRecordingVid = "no";
    // No need to clear requestAnimationFrame as it stops naturally
    if (capturer) {
        capturer.stop();
        capturer.save();
        capturer = null;
    }
    document.getElementById("btnPreview").disabled = false;
}

function createVideoAutomatically() {
    vidFramesAnimating = "no"; // Stop preview animation
    document.getElementById("btnPreview").disabled = true;
    doStartVidCap();
    runVidFrames("yes");
}

// Example: Animate property images on canvas
function gatherImages() {
    console.log("gatherImages called, tmpPrpMediaObj keys:", Object.keys(tmpPrpMediaObj));
    if (vdImgs.length === 0) {
        vdImgs = [];
        // Gather property images (catid 5 = regular, 20 = streetview, 25 = aerial, 30 = 3D, etc.)
        for (const k in tmpPrpMediaObj) {
            const m = tmpPrpMediaObj[k];
            console.log("Processing media:", k, m);
            if (m && m.m_file_thumb) {
               const mcat = m.m_catid;
               const mImgSrc = m.m_file;
               const mImgThmbSrc = m.m_file_thumb;
               console.log("mcat:", mcat, "mImgSrc:", mImgSrc);
               switch (mcat) {
                    case "5": // regular
                        var tmfile = mImgSrc;
                        if(tmfile.indexOf("updt_") != -1) {
                            tmfile = tmfile.replace("updt_", "");
                            vdImgs.push("images/ucontent/" + tmfile);
                        } else {
                            vdImgs.push("images/property/" + tmfile);
                        }
                        break;
                    case "20": // streetview
                        tNrmlImg = mImgSrc;
                        tLZuncompD = LZString.decompressFromEncodedURIComponent(tNrmlImg);
                        vdImgs.push(tLZuncompD);
                        break;
                    case "25": // aerial
                        tNrmlImg = mImgSrc;
                        tLZuncompD = LZString.decompressFromEncodedURIComponent(tNrmlImg);
                        vdImgs.push(tLZuncompD);
                        break;
                    case "30": // 3D
                        tHmbImg = mImgThmbSrc;
                        tLZuncompD = LZString.decompressFromEncodedURIComponent(tHmbImg);
                        vdImgs.push(tLZuncompD);
                        break;
                    default:
                        continue; // skip other categories
                }
            }
        }
    }
    console.log("Gathered images:", vdImgs);
    originalVdImgs = vdImgs.slice();
}

function runVidFrames(isRecording = "no") {
    console.log('runVidFrames called, loadedImages length:', loadedImages.length);
   
    vdCanvas = document.getElementById("vidFramesCanvas");
    if (!vdCanvas) return;
    vdCtx = vdCanvas.getContext("2d");
    // Get property details
    propertyTitle = tmpOldFFvals ? tmpOldFFvals.ptitle : document.getElementById("ptitle").value || "Property Title";
    sellerIcon = tmpPropInfoObj ? tmpPropInfoObj.u_icon : "";
    sellerIconImg = null;
    if (sellerIcon) {
        sellerIconImg = new Image();
        sellerIconImg.src = "images/user/s_thumb" + sellerIcon;
    }
    // Gather property images only if not already set
    if (vdImgs.length === 0) {
        vdImgs = [];
        // Gather property images (catid 5 = regular, 20 = streetview, 25 = aerial, 30 = 3D, etc.)
        for (const k in tmpPrpMediaObj) {
            const m = tmpPrpMediaObj[k];
            if (m && m.m_file_thumb) {
               const mcat = m.m_catid;
               const mImgSrc = m.m_file;
               const mImgThmbSrc = m.m_file_thumb;
                switch(mcat) {
                    case "5": // regular
     
                    tmfile = mImgSrc;
                    if(tmfile.indexOf("updt_") != -1) {
                        tmfile = tmfile.replace("updt_", "");
                        vdImgs.push("images/ucontent/" + tmfile);
                    } else {
                        tmfile = tmfile;
                        vdImgs.push("images/property/" + tmfile);
                    }
                    break;
                    case "20": // streetview
                                                   tNrmlImg = mImgSrc;
                            tLZuncompD = LZString.decompressFromEncodedURIComponent(tNrmlImg);
                            vdImgs.push(tLZuncompD);
                        break;
    
                    case "25": // aerial
                                                           tNrmlImg = mImgSrc;
                            tLZuncompD = LZString.decompressFromEncodedURIComponent(tNrmlImg);
                            vdImgs.push(tLZuncompD);
                        break;
    
                    case "30": // 3D
                    tHmbImg = mImgThmbSrc;
     
                    tLZuncompD = LZString.decompressFromEncodedURIComponent(tHmbImg);
                    vdImgs.push(tLZuncompD);
                        break;
                    default:
                        continue; // skip other categories
                }
            }
        }
    }
    console.log("Gathered images:", vdImgs);
    originalVdImgs = vdImgs.slice();
    loadedImages = [];
    imagesLoaded = 0;
    vdImgs.forEach((src, index) => {
        const img = new Image();
        if (src.startsWith('http')) {
            img.crossOrigin = "Anonymous";
        }
        img.onload = () => {
            loadedImages[index] = img;
            imagesLoaded++;
            console.log("Preloaded image: " + src);
            if (imagesLoaded === vdImgs.length) {
                startInterval();
            }
        };
        img.onerror = () => {
            console.log("Failed to preload image: " + src);
            imagesLoaded++;
            if (imagesLoaded === vdImgs.length) {
                startInterval();
            }
        };
        img.src = src;
    });
    vdIncr = 0;
    isRecordingVid = isRecording;
    var vidFramesAnimating = "yes";
}

function startInterval() {
    console.log("Starting animation loop");
    // Draw the first frame immediately
    if (vdIncr < loadedImages.length && loadedImages[vdIncr]) {
        drawFrame(loadedImages[vdIncr]);
        vdIncr++;
    }
    // Set lastDrawTime to allow immediate next draw
    lastDrawTime = performance.now() - 333;
    requestAnimationFrame(animate);
}

function animate(currentTime) {
    if (vidFramesAnimating === "no" && isRecordingVid === "yes") {
        return; // Stop animation
    }
    var now = performance.now();
    if (now - lastDrawTime >= 333) { // 3 fps
        var imageIndex = Math.floor(vdIncr / framesPerImage);
        var frameInImage = vdIncr % framesPerImage;
        if (imageIndex < loadedImages.length) {
            if (loadedImages[imageIndex]) {
                drawFrame(loadedImages[imageIndex], frameInImage);
            }
            vdIncr++;
            lastDrawTime = now;
        } else {
            console.log("Animation finished");
            if (isRecordingVid === "yes") {
                doStopVidCap();
            }
            return; // Stop when all frames are done
        }
    }
    requestAnimationFrame(animate);
}

function drawFrame(img, frameInImage) {
 
    console.log(new Date().toISOString() + " - Drawing frame. Index: " + vdIncr + ", Recording: " + isRecordingVid);
    vdCtx.clearRect(0, 0, vdCanvas.width, vdCanvas.height);
    // Draw image centered with effects
    var baseScale = Math.min(vdCanvas.width / img.width, vdCanvas.height / img.height);
    var scaleFactor = 1 + (frameInImage / (framesPerImage - 1)) * 0.05; // slight zoom over 2 seconds
    var brightness = 1 + (frameInImage / (framesPerImage - 1)) * 0.3; // increase brightness
    var w = img.width * baseScale * scaleFactor, h = img.height * baseScale * scaleFactor;
    vdCtx.filter = `brightness(${brightness})`;
    vdCtx.drawImage(img, (vdCanvas.width - w) / 2, (vdCanvas.height - h) / 2, w, h);
    vdCtx.filter = 'none';

    // Fade in property title on first 3 frames of first image
    var imageIndex = Math.floor(vdIncr / framesPerImage);
    if (imageIndex === 0 && frameInImage < 3 && propertyTitle) {
        let opacity = (frameInImage + 1) / 3;
        vdCtx.globalAlpha = opacity;
        vdCtx.fillStyle = "#fff";
        vdCtx.font = "bold 24px Arial";
        vdCtx.textAlign = "center";
        vdCtx.shadowColor = "rgba(0,0,0,0.7)";
        vdCtx.shadowBlur = 4;
        vdCtx.shadowOffsetX = 2;
        vdCtx.shadowOffsetY = 2;
        vdCtx.fillText(propertyTitle, vdCanvas.width / 2, 50);
        vdCtx.shadowColor = "transparent";
        vdCtx.globalAlpha = 1;
    } else if (imageIndex >= 1 && propertyTitle) {
        // Keep title visible after fade in
        vdCtx.fillStyle = "#fff";
        vdCtx.font = "bold 24px Arial";
        vdCtx.textAlign = "center";
        vdCtx.shadowColor = "rgba(0,0,0,0.7)";
        vdCtx.shadowBlur = 4;
        vdCtx.shadowOffsetX = 2;
        vdCtx.shadowOffsetY = 2;
        vdCtx.fillText(propertyTitle, vdCanvas.width / 2, 50);
        vdCtx.shadowColor = "transparent";
    }

    // Slide in seller icon to bottom right over first 5 frames
    if (sellerIconImg && sellerIconImg.complete) {
        var iconSize = 72;
        var padding = 15;
        var slideFrames = 5;
        var finalX = vdCanvas.width - iconSize - padding;
        var finalY = vdCanvas.height - iconSize - padding;
        var x, y;
        if (vdIncr < slideFrames) {
            var progress = vdIncr / (slideFrames - 1);
            x = -iconSize + (finalX + iconSize) * progress; // slide from left
            y = finalY;
        } else {
            x = finalX;
            y = finalY;
        }
        // Draw rounded icon
        vdCtx.save();
        vdCtx.beginPath();
        vdCtx.arc(x + iconSize / 2, y + iconSize / 2, iconSize / 2, 0, 2 * Math.PI);
        vdCtx.clip();
        vdCtx.drawImage(sellerIconImg, x, y, iconSize, iconSize);
        vdCtx.restore();

        // Draw speech bubbles after icon is in place
        if (vdIncr >= slideFrames) {
            var iconCenterX = finalX + iconSize / 2;
            var iconCenterY = finalY + iconSize / 2;
            var imageIndex = Math.floor(vdIncr / framesPerImage);
            var bubbleTexts = [
                "Bedrooms: " + (tmpOldFFvals.bedroom || "N/A"),
                "Bathrooms: " + (tmpOldFFvals.bathroom || "N/A"),
                "Kitchens: " + (tmpOldFFvals.kitchen || "N/A"),
                "Price: " + (tmpOldFFvals.price || "N/A")
            ];
            var bubbleIndex = imageIndex % bubbleTexts.length;
            drawSpeechBubble(vdCtx, 10, vdCanvas.height - 100, bubbleTexts[bubbleIndex], iconCenterX, iconCenterY);
        }
    }

    // Capture frame if recording
    if (isRecordingVid == "yes" && capturer) {
        capturer.capture(vdCanvas);
        console.log(new Date().toISOString() + " - Captured frame for image index: " + vdIncr);
    }
}

// Draw a speech bubble with tail
function drawSpeechBubble(ctx, x, y, text, tailX, tailY) {
    let width = 195;
    let height = 65;
    let radius = 10;

    // Draw bubble with tail as one path
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height / 2 - 5);
    // tail
    ctx.lineTo(x + width + 20, y + height / 2);
    ctx.lineTo(x + width, y + height / 2 + 5);
    // back to right side
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    
    ctx.fillStyle = "rgba(255,255,255,0.9)";
    ctx.fill();
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Add Text
    
    // Add Text
    ctx.fillStyle = "#000";
    ctx.font = "16px Arial";
    ctx.textAlign = "center";
    ctx.fillText(text, x + width / 2, y + height / 2 + 6);
}

// Save video (optional, if not using capturer.save())
function doSaveVidCap() {
    if (capturer) capturer.save();
}

var selectedImages = [];

// Function to get content for Images tab
function getImgTabContent() {
    var html = '<div id="sortableImages" class="image-grid" style="display: flex; flex-wrap: wrap;">';
    for (var i = 0; i < selectedImages.length; i++) {
        var imgIndex = selectedImages[i];
        html += '<div class="image-item sortable-item" data-index="' + imgIndex + '" style="margin: 5px; position: relative;">';
        html += '<div class="drag-handle" style="position: absolute; top: 0; right: 0; cursor: move; background: rgba(255,255,255,0.8); padding: 2px; z-index: 10;">&#9776;</div>';
        html += '<img src="' + originalVdImgs[imgIndex] + '" style="width: 100px; height: 100px; border: 2px solid blue;" onclick="handleImageClick(event, ' + imgIndex + ')" />';
        html += '</div>';
    }
    html += '</div>';
    html += '<div class="unselected-images" style="display: flex; flex-wrap: wrap; margin-top: 10px;">';
    for (var i = 0; i < originalVdImgs.length; i++) {
        if (selectedImages.indexOf(i) === -1) {
            html += '<div class="image-item" data-index="' + i + '" style="margin: 5px; cursor: pointer; border: 2px solid gray;" onclick="toggleImageSelection(' + i + ')"><img src="' + originalVdImgs[i] + '" style="width: 100px; height: 100px;" onclick="toggleImageSelection(' + i + ')" /></div>';
        }
    }
    html += '</div>';
    html += '<br><button onclick="applyImageOrder()" style="margin-top: 10px;">Apply Order</button>';
    return html;
}

// Function to handle image click
function handleImageClick(e, index) {
    e.stopPropagation();
    toggleImageSelection(index);
}

// Function to toggle image selection
function toggleImageSelection(index) {
    var idx = selectedImages.indexOf(index);
    if (idx > -1) {
        // Remove from selected
        selectedImages.splice(idx, 1);
        console.log('Deselected image index:', index, 'selectedImages now:', selectedImages);
    } else {
        // Add to selected
        selectedImages.push(index);
        console.log('Selected image index:', index, 'selectedImages now:', selectedImages);
    }
    // Update UI
    document.getElementById("divImgsContent").innerHTML = getImgTabContent();
    // Reinitialize sortable
    setTimeout(function() {
        var sortable = new Sortable(document.getElementById('sortableImages'), {
            animation: 150,
            handle: '.drag-handle',
            onEnd: function(evt) {
                // Update selectedImages order
                var newOrder = [];
                var items = document.querySelectorAll('#sortableImages .sortable-item');
                for (var j = 0; j < items.length; j++) {
                    newOrder.push(parseInt(items[j].getAttribute('data-index')));
                }
                selectedImages = newOrder;
                console.log('Sorted selectedImages:', selectedImages);
            }
        });
    }, 100);
}

// Function to apply image order (update loadedImages and vdImgs with selected images in order)
function applyImageOrder() {
    console.log('applyImageOrder called, selectedImages:', selectedImages, 'vdImgs length:', vdImgs.length, 'loadedImages length before:', loadedImages.length);
    // Reorder vdImgs to match selectedImages order
    var newVdImgs = [];
    for (var i = 0; i < selectedImages.length; i++) {
        var index = selectedImages[i];
        if (originalVdImgs[index]) {
            newVdImgs.push(originalVdImgs[index]);
        }
    }
    vdImgs = newVdImgs;
    console.log('vdImgs reordered, new length:', vdImgs.length);
    // Also reorder loadedImages if already loaded
    var newLoadedImages = [];
    for (var i = 0; i < selectedImages.length; i++) {
        var index = selectedImages[i];
        if (loadedImages[index]) {
            newLoadedImages.push(loadedImages[index]);
        }
    }
    loadedImages = newLoadedImages;
    console.log('loadedImages length after:', loadedImages.length);
}



// End of video creation code