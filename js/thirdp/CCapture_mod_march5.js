

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
var tmpPstImgCnvs = document.createElement("canvas");
var selectedAudioClipSrc = "";
var pendingAudioClipSrcForPost = "";
var videoAudioLengthMode = "trim";
var videoAudioLengthModeLoaded = "no";
var videoAudioLengthModeStorageKey = "incasa_video_audio_length_mode";
var audioClipOptions = [
    { label: "Beethoven - Moonlight Sonata (movement)", file: "moonlight_mvt1.ogg" },
    { label: "Vivaldi - Spring Mvt 1", file: "vivaldi_spring_mvt1.oga" },
    { label: "Vivaldi - Spring Mvt 3", file: "vivaldi_spring_mvt3.ogg" },
    { label: "Vivaldi - Winter Mvt 1", file: "vivaldi_winter_mvt1.ogg" }
];

function logVidAudio(tag, details) {
    if (typeof details === "undefined") {
        console.log("[VID-AUDIO][" + tag + "]");
        return;
    }
    console.log("[VID-AUDIO][" + tag + "]", details);
}

function getTmpPstImgCnvs() {
    // Get canvas from DOM directly instead of relying on global vdCanvas variable
    let canvas = document.getElementById("vidFramesCanvas");
    if (canvas && canvas.width > 0 && canvas.height > 0) {
        tmpPstImgCnvs.width = canvas.width;
        tmpPstImgCnvs.height = canvas.height;
        var tmpCtx = tmpPstImgCnvs.getContext("2d");
        tmpCtx.drawImage(canvas, 0, 0);
        console.log("getTmpPstImgCnvs: Captured canvas (" + canvas.width + "x" + canvas.height + ") into tmpPstImgCnvs");
    } else {
        console.log("getTmpPstImgCnvs: vidFramesCanvas not found or not ready");
    }
    return tmpPstImgCnvs;
}
function getVideoInterfaceHTML(selectedProps) {
    console.log("getVideoInterfaceHTML called with selectedProps:", selectedProps);
    window.selectedPropsArr = selectedProps; // Store for drawVideoCollage
    gatherImages(selectedProps);
    selectedImages = [];
    if (selectedProps && selectedProps.length > 1) {
        for (var i = 0; i < selectedProps.length; i++) {
            var prop = selectedProps[i];
            var title = prop && prop.ptitle ? LZString.decompressFromEncodedURIComponent(prop.ptitle).substring(0,20) : "";
            selectedImages.push({index: i, text: title});
        }
    } else {
        // single property, use m_title from tmpPrpMediaObj
        var idx = 0;
        for (const k in tmpPrpMediaObj) {
            const m = tmpPrpMediaObj[k];
            if (m && typeof m === 'object' && m.m_file_thumb) {
                console.log(m.m_title);
                var title = m.m_title || "";
                selectedImages.push({index: idx, text: title});
                idx++;
            }
        }
    }
    originalVdImgs = vdImgs.slice();
    var tSlctdPrpsObj = {};
    for (var i = 0; i < selectedProps.length; i++) {
        var prop = selectedProps[i];
        tSlctdPrpsObj["prp" + prop._id] = prop;
        tSlctdPrpsObj["prp" + prop._id].isSelected = true;
        tSlctdPrpsObj["prp" + prop._id].imgSrc = "images/property/" + prop.pimage;
    }
    window.tSlctdPrpsObj = tSlctdPrpsObj;
    var tabHtml = '<ul class="nav nav-tabs"><li class="active"><a href="#videoTab">Video</a></li><li><a href="#imagesTab">Images</a></li><li><a href="#audioTab">Audio</a></li><li><a href="#settingsTab">Settings</a></li></ul>';
    var contentHtml = '<div class="tab-content" style="min-height: 400px;"><div id="videoTab" class="tab-pane active" style="text-align:center;"><canvas id="vidFramesCanvas" width="340" height="340" style="border:1px solid #ccc; background:#222;"></canvas><br><input type="button" id="btnPreview" value="Preview" onclick="runVidFrames(\'no\');" class="cls_button cls_button-small txtSmall bkgdClrHdr txtClrWhite" /><input type="button" id="btnCreateVideo" value="Create Video" class="cls_button cls_button-small txtSmall bkgdClrHdr txtClrWhite" onclick="createVideoAutomatically();" /></div><div id="imagesTab" class="tab-pane"><div id="divImgsContent"></div></div><div id="audioTab" class="tab-pane"><div id="divAudioContent"></div></div><div id="settingsTab" class="tab-pane"><p>Settings tab content to be added later.</p></div></div>';
    console.log("getVideoInterfaceHTML returning HTML of length:", (tabHtml + contentHtml).length);
    return tabHtml + contentHtml;
}

function doCreateVidPop() {
    // Create popup HTML with tabs and canvas
    var tabHtml = '<ul class="nav nav-tabs"><li class="active"><a href="#videoTab">Video</a></li><li><a href="#imagesTab">Images</a></li><li><a href="#audioTab">Audio</a></li><li><a href="#settingsTab">Settings</a></li></ul>';
    var contentHtml = '<div class="tab-content" style="min-height: 400px;"><div id="videoTab" class="tab-pane active" style="text-align:center;"><canvas id="vidFramesCanvas" width="340" height="340" style="border:1px solid #ccc; background:#222;"></canvas><br><input type="button" id="btnPreview" value="Preview" onclick="runVidFrames(\'no\');" class="cls_button cls_button-small txtSmall bkgdClrHdr txtClrWhite" /><input type="button" id="btnCreateVideo" value="Create Video" class="cls_button cls_button-small txtSmall bkgdClrHdr txtClrWhite" onclick="createVideoAutomatically();" /></div><div id="imagesTab" class="tab-pane"><div id="divImgsContent"></div></div><div id="audioTab" class="tab-pane"><div id="divAudioContent"></div></div><div id="settingsTab" class="tab-pane"><p>Settings tab content to be added later.</p></div></div>';
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
        selectedImages.push({index: i, text: ""});
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
                } else if (target === '#audioTab') {
                    document.getElementById("divAudioContent").innerHTML = getAudioTabContent();
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
    let mediaObj = window.selectedPropsArr ? {} : tmpPrpMediaObj;
    if (window.selectedPropsArr && window.selectedPropsArr.length > 1) {
        // For multi-property, use selected images in order
        for (let i = 0; i < Math.min(4, selectedImages.length); i++) {
            let imgIndex = selectedImages[i].index;
            imagesToLoad.push(vdImgs[imgIndex]);
        }
    } else {
        // Original code for single property
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
    }

    var loadedCount = 0;
    let numImages = imagesToLoad.length;
    let cols = Math.ceil(Math.sqrt(numImages));
    let rows = Math.ceil(numImages / cols);
    let imgW = canvas.width / cols;
    let imgH = canvas.height / rows;
    imagesToLoad.forEach(function(src, index) {
        var img = new Image();
        if (src.startsWith('http')) {
            img.crossOrigin = "Anonymous";
        }
        img.onload = function() {
            // Draw faded in grid
            ctx.globalAlpha = 0.3;
            var x = (index % cols) * imgW;
            var y = Math.floor(index / cols) * imgH;
            ctx.drawImage(img, x, y, imgW, imgH);
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

}


// Toggle Start/Stop button handler
function toggleVidRecording() {
    vdBtn = document.getElementById("btnVidRecToggle");
    if (vdBtn) {
        if (vdBtn.value === "Start Recording") {
            doStartVidCap();
            vdBtn.value = "Stop Recording";
            vdBtn.style.backgroundColor = "#ff0000";
            var btnVidSave = document.getElementById("btnVidSave");
            if (btnVidSave) {
                btnVidSave.style.display = "none";
            }
        } else {
            doStopVidCap();
            vdBtn.value = "Start Recording";
            vdBtn.style.backgroundColor = "";
            var btnVidSave = document.getElementById("btnVidSave");
            if (btnVidSave) {
                btnVidSave.style.display = "";
            }
        }
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
        capturer.save(function(blob) {
            console.log("Video saved blob:", blob);
            saveVideoFileBlob(blob);
        });
        capturer = null;
    }
    var btnPreview = document.getElementById("btnPreview");
    if (btnPreview) {
        btnPreview.disabled = false;
    }
}

function createVideoAutomatically() {
    vidFramesAnimating = "no"; // Stop preview animation
    var btnPreview = document.getElementById("btnPreview");
    if (btnPreview) {
        btnPreview.disabled = true;
    }
    doStartVidCap();
    runVidFrames("yes");
}

function saveVideo() {
    doStopVidCap();
    // Additional logic to save video can be added here if needed
}

// Example: Animate property images on canvas
function gatherImages(selectedProps = null) {
    console.log("gatherImages called, selectedProps:", selectedProps);
    vdImgs = [];
    if (selectedProps && selectedProps.length > 1) {
        console.log("Gathering images from selectedProps pimage, length:", selectedProps.length);
        for (var i = 0; i < selectedProps.length; i++) {
            var prop = selectedProps[i];
            var imgSrc = "images/property/" + prop.pimage;
            vdImgs.push(imgSrc);
        }
        console.log("Gathered", vdImgs.length, "images from selectedProps pimage");
    } else {
        console.log("Gathering images from tmpPrpMediaObj");
        window.mediaOrder = [];
        // original code for single property
        for (const k in tmpPrpMediaObj) {
            const m = tmpPrpMediaObj[k];
            if (m && m.m_file_thumb) {
               const mcat = m.m_catid;
               const mImgSrc = m.m_file;
               const mImgThmbSrc = m.m_file_thumb;
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
                        continue;
                }
                window.mediaOrder.push(k);
            }
        }
        console.log("Gathered", vdImgs.length, "images from tmpPrpMediaObj");
    }
    console.log("Gathered images:", vdImgs);
    originalVdImgs = vdImgs.slice();
    // Initialize selected images
    selectedImages = [];
    for (var i = 0; i < vdImgs.length; i++) {
        selectedImages.push({index: i, text: ""});
    }
    console.log("Initialized selectedImages with", selectedImages.length, "items");
}

function runVidFrames(isRecording = "no") {
    console.log('runVidFrames called, loadedImages length:', loadedImages.length);
   
    // Apply selected images order if not already applied
    if (selectedImages.length > 0 && selectedImages.length != vdImgs.length) {
        applyImageOrder();
    }
   
    vdCanvas = document.getElementById("vidFramesCanvas");
    if (!vdCanvas) return;
    vdCtx = vdCanvas.getContext("2d");
    // Get property details
    propertyTitle = tmpOldFFvals ? tmpOldFFvals.ptitle : document.getElementById("ptitle").value || "Property Title";
    sellerIcon = currQUsrObj ? currQUsrObj.u_icon : "";
    sellerName = currQUsrObj ? currQUsrObj.u_fullname : "";
    sellerIconImg = null;
    if (sellerIcon) {
        sellerIconImg = new Image();
        sellerIconImg.src = "images/user/" + sellerIcon;
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
            console.log("Checking speech bubble for imageIndex:", imageIndex, "selectedImages[imageIndex]:", selectedImages[imageIndex]);
            if (selectedImages[imageIndex] && selectedImages[imageIndex].text) {
                console.log("Calling drawSpeechBubble with text:", selectedImages[imageIndex].text);
                drawSpeechBubble(vdCtx, 10, vdCanvas.height - 100, selectedImages[imageIndex].text, iconCenterX, iconCenterY);
            }
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
    console.log("drawSpeechBubble called with text:", text);
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

 

var selectedImages = []; // Now array of {index: number, text: string}

// Function to get content for Images tab
function getImgTabContent() {
    var html = '<div id="sortableImages" class="image-grid" style="display: flex; flex-wrap: wrap;">';
    for (var i = 0; i < selectedImages.length; i++) {
        var imgObj = selectedImages[i];
        var imgIndex = imgObj.index;
        html += '<div class="image-item sortable-item" data-index="' + imgIndex + '" style="margin: 5px; position: relative;">';
        html += '<div style="position: absolute; top: 0; right: 0; display: flex; flex-direction: column;">';
        html += '<div class="drag-handle" style="cursor: move; background: rgba(255,255,255,0.8); padding: 2px; z-index: 10;">&#9776;</div>';
        html += '<div onclick="toggleImageSelection(' + imgIndex + ')" style="cursor: pointer; background: rgba(255,255,255,0.8); padding: 2px;">&#10007;</div>'; // ?
        html += '<div onclick="showImageSettings(' + i + ')" style="cursor: pointer; background: rgba(255,255,255,0.8); padding: 2px;">&#9881;</div>'; // ?
        html += '</div>';
        html += '<img src="' + vdImgs[i] + '" style="width: 100px; height: 100px; border: 2px solid blue;" />';
        html += '</div>';
    }
    html += '</div>';
    html += '<div class="unselected-images" style="display: flex; flex-wrap: wrap; margin-top: 10px;">';
    for (var i = 0; i < originalVdImgs.length; i++) {
        if (selectedImages.findIndex(s => s.index === i) === -1) {
            html += '<div class="image-item" data-index="' + i + '" style="margin: 5px; position: relative;">';
            html += '<div style="position: absolute; top: 0; right: 0; display: flex; flex-direction: column;">';
            html += '<div onclick="toggleImageSelection(' + i + ')" style="cursor: pointer; background: rgba(255,255,255,0.8); padding: 2px;">&#10003;</div>'; // ?
            html += '</div>';
            html += '<img src="' + originalVdImgs[i] + '" style="width: 100px; height: 100px;" />';
            html += '</div>';
        }
    }
    html += '</div>';
    html += '<br><button onclick="applyImageOrder()" style="margin-top: 10px;">Apply Order</button>';
    return html;
}

function getAudioTabContent() {
    ensureVideoAudioLengthModeLoaded();
    var html = '<div style="padding:10px;">';
    html += '<div class="txtSmall" style="margin-bottom:8px;">Select a Creative Commons / public-domain classical clip:</div>';
    for (var i = 0; i < audioClipOptions.length; i++) {
        var clip = audioClipOptions[i];
        var src = 'js/thirdp/misc/' + clip.file;
        var checked = (selectedAudioClipSrc === src) ? ' checked' : '';
        html += '<div style="margin-bottom:6px;">';
        html += '<label style="cursor:pointer;">';
        html += '<input type="radio" name="audioClipSel" value="' + src + '"' + checked + ' onclick="setSelectedAudioClip(' + i + ')" /> ' + clip.label;
        html += '</label>';
        html += '</div>';
    }
    html += '<div style="margin-top:10px;">';
    html += '<audio id="audioClipPreview" controls style="width:100%; max-width:340px;"></audio>';
    html += '</div>';
    html += '<div style="margin-top:10px;">';
    html += '<div class="txtSmall" style="margin-bottom:6px;">Audio length behavior:</div>';
    html += '<label style="cursor:pointer; margin-right:12px;">';
    html += '<input type="radio" name="vidAudioLenMode" value="trim"' + (videoAudioLengthMode === "trim" ? ' checked' : '') + ' onclick="setVideoAudioLengthMode(\'trim\')" /> Trim audio to video';
    html += '</label>';
    html += '<label style="cursor:pointer;">';
    html += '<input type="radio" name="vidAudioLenMode" value="extend"' + (videoAudioLengthMode === "extend" ? ' checked' : '') + ' onclick="setVideoAudioLengthMode(\'extend\')" /> Extend video to audio';
    html += '</label>';
    html += '</div>';
    html += '<div style="margin-top:10px;">';
    html += '<button class="cls_button cls_button-small txtSmall bkgdClrHdr txtClrWhite" onclick="previewSelectedAudioClip()">Preview Clip</button> ';
    html += '<button class="cls_button cls_button-small txtSmall bkgdClrHdr txtClrWhite" onclick="createVideoWithSelectedAudioStandalone()">Create Video + Audio</button>';
    html += '</div>';
    html += '</div>';
    return html;
}

function ensureVideoAudioLengthModeLoaded() {
    if (videoAudioLengthModeLoaded === "yes") {
        return;
    }
    videoAudioLengthModeLoaded = "yes";
    try {
        var savedMode = localStorage.getItem(videoAudioLengthModeStorageKey);
        if (savedMode === "trim" || savedMode === "extend") {
            videoAudioLengthMode = savedMode;
            logVidAudio("LENGTH_MODE_LOADED", { mode: videoAudioLengthMode });
        }
    } catch (e) {
        logVidAudio("LENGTH_MODE_LOAD_SKIP", String(e));
    }
}

function persistVideoAudioLengthMode() {
    try {
        localStorage.setItem(videoAudioLengthModeStorageKey, videoAudioLengthMode);
        logVidAudio("LENGTH_MODE_SAVED", { mode: videoAudioLengthMode });
    } catch (e) {
        logVidAudio("LENGTH_MODE_SAVE_SKIP", String(e));
    }
}

function setVideoAudioLengthMode(mode) {
    if (mode !== "trim" && mode !== "extend") {
        return;
    }
    videoAudioLengthMode = mode;
    persistVideoAudioLengthMode();
    logVidAudio("LENGTH_MODE_SET", { mode: videoAudioLengthMode });
}

function setSelectedAudioClip(index) {
    if (!audioClipOptions[index]) {
        return;
    }
    selectedAudioClipSrc = 'js/thirdp/misc/' + audioClipOptions[index].file;
    console.log('Selected audio clip:', selectedAudioClipSrc);
}

function previewSelectedAudioClip() {
    if (!selectedAudioClipSrc) {
        alert('Select an audio clip first.');
        return;
    }
    var player = document.getElementById('audioClipPreview');
    if (!player) {
        return;
    }
    player.src = selectedAudioClipSrc;
    player.play().catch(function(err) {
        console.log('previewSelectedAudioClip blocked:', err);
    });
}

async function createVideoWithSelectedAudioStandalone() {
    if (!selectedAudioClipSrc) {
        alert('Select an audio clip first.');
        return;
    }

    // Follow pvideo save flow first (placeholder image + post/title insert), then render/upload video.
    if (typeof doPostAdd === "function") {
        pendingAudioClipSrcForPost = selectedAudioClipSrc;
        logVidAudio("QUEUE_AUDIO_FOR_POST", { audioSrc: selectedAudioClipSrc });
        doPostAdd();
        return;
    }

    logVidAudio("NO_POST_FLOW_FALLBACK", { audioSrc: selectedAudioClipSrc });
    await createVideoWithAudioStandalone(selectedAudioClipSrc, true);
}

function hasPendingAudioClipSrcForPost() {
    return !!pendingAudioClipSrcForPost;
}

function consumePendingAudioClipSrcForPost() {
    var src = pendingAudioClipSrcForPost;
    pendingAudioClipSrcForPost = "";
    return src;
}

// Function to show image settings (placeholder for later)
function showImageSettings(pos) {

    var imgObj = selectedImages[pos];
    var key = window.mediaOrder ? window.mediaOrder[imgObj.index] : null;
    var m = key && tmpPrpMediaObj[key];
    var defaultText = m ? m.m_title || "" : "";
    var currentText = imgObj.text || defaultText;
    var newText = prompt("Enter speech bubble text:", currentText);
    if (newText !== null) {
        imgObj.text = newText;
    }
}

// Function to handle image click
function handleImageClick(e, index) {
    e.stopPropagation();
    toggleImageSelection(index);
}

// Function to toggle image selection
function toggleImageSelection(index) {
    var existing = selectedImages.find(s => s.index === index);
    if (existing) {
        // Remove
        var idx = selectedImages.indexOf(existing);
        selectedImages.splice(idx, 1);
        console.log('Deselected image index:', index, 'selectedImages now:', selectedImages);
    } else {
        // Add
        selectedImages.push({index: index, text: ""});
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
                    var dataIndex = parseInt(items[j].getAttribute('data-index'));
                    var obj = selectedImages.find(s => s.index === dataIndex);
                    if (obj) newOrder.push(obj);
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
        var index = selectedImages[i].index;
        if (originalVdImgs[index]) {
            newVdImgs.push(originalVdImgs[index]);
        }
    }
    vdImgs = newVdImgs;
    console.log('vdImgs reordered, new length:', vdImgs.length);
    // Also reorder loadedImages if already loaded
    var newLoadedImages = [];
    for (var i = 0; i < selectedImages.length; i++) {
        var index = selectedImages[i].index;
        if (loadedImages[index]) {
            newLoadedImages.push(loadedImages[index]);
        }
    }
    loadedImages = newLoadedImages;
    console.log('loadedImages length after:', loadedImages.length);
}


async function prepStandaloneVideoRenderState() {
    if (selectedImages.length > 0 && selectedImages.length != vdImgs.length) {
        applyImageOrder();
    }

    vdCanvas = document.getElementById("vidFramesCanvas");
    if (!vdCanvas) {
        throw new Error("vidFramesCanvas not found");
    }
    vdCtx = vdCanvas.getContext("2d");

    propertyTitle = tmpOldFFvals ? tmpOldFFvals.ptitle : (document.getElementById("ptitle") ? document.getElementById("ptitle").value : "Property Title");
    sellerIcon = currQUsrObj ? currQUsrObj.u_icon : "";
    sellerName = currQUsrObj ? currQUsrObj.u_fullname : "";
    sellerIconImg = null;
    if (sellerIcon) {
        sellerIconImg = new Image();
        sellerIconImg.src = "images/user/" + sellerIcon;
    }

    if (vdImgs.length === 0) {
        vdImgs = [];
        for (const k in tmpPrpMediaObj) {
            const m = tmpPrpMediaObj[k];
            if (m && m.m_file_thumb) {
                const mcat = m.m_catid;
                const mImgSrc = m.m_file;
                const mImgThmbSrc = m.m_file_thumb;
                switch (mcat) {
                    case "5":
                        var tmfile = mImgSrc;
                        if (tmfile.indexOf("updt_") != -1) {
                            tmfile = tmfile.replace("updt_", "");
                            vdImgs.push("images/ucontent/" + tmfile);
                        } else {
                            vdImgs.push("images/property/" + tmfile);
                        }
                        break;
                    case "20":
                        var tNrmlImg = mImgSrc;
                        var tLZuncompD = LZString.decompressFromEncodedURIComponent(tNrmlImg);
                        vdImgs.push(tLZuncompD);
                        break;
                    case "25":
                        tNrmlImg = mImgSrc;
                        tLZuncompD = LZString.decompressFromEncodedURIComponent(tNrmlImg);
                        vdImgs.push(tLZuncompD);
                        break;
                    case "30":
                        var tHmbImg = mImgThmbSrc;
                        tLZuncompD = LZString.decompressFromEncodedURIComponent(tHmbImg);
                        vdImgs.push(tLZuncompD);
                        break;
                    default:
                        continue;
                }
            }
        }
    }

    loadedImages = [];
    await Promise.all(vdImgs.map(function(src, index) {
        return new Promise(function(resolve) {
            const img = new Image();
            if (src.startsWith('http')) {
                img.crossOrigin = "Anonymous";
            }
            img.onload = function() {
                loadedImages[index] = img;
                resolve();
            };
            img.onerror = function() {
                loadedImages[index] = null;
                resolve();
            };
            img.src = src;
        });
    }));
}

function sleepMs(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}

async function renderFramesStandaloneRealtime(fps, targetDurationSec) {
    vdIncr = 0;
    isRecordingVid = "no";
    vidFramesAnimating = "yes";

    var frameDelay = Math.max(1, Math.floor(1000 / fps));
    var baseTotalFrames = loadedImages.length * framesPerImage;
    var totalFrames = baseTotalFrames;
    if (targetDurationSec && targetDurationSec > 0) {
        totalFrames = Math.max(baseTotalFrames, Math.ceil(targetDurationSec * fps));
    }

    logVidAudio("RENDER_FRAME_PLAN", {
        baseTotalFrames: baseTotalFrames,
        totalFrames: totalFrames,
        frameDelayMs: frameDelay,
        fps: fps
    });

    var lastImage = loadedImages.length > 0 ? loadedImages[loadedImages.length - 1] : null;

    for (var frameNo = 0; frameNo < totalFrames; frameNo++) {
        if (frameNo < baseTotalFrames) {
            var imageIndex = Math.floor(vdIncr / framesPerImage);
            var frameInImage = vdIncr % framesPerImage;
            if (loadedImages[imageIndex]) {
                drawFrame(loadedImages[imageIndex], frameInImage);
            }
            vdIncr++;
        } else if (lastImage) {
            // Hold final visual frame while audio continues.
            vdIncr = baseTotalFrames - 1;
            drawFrame(lastImage, framesPerImage - 1);
        }
        await sleepMs(frameDelay);
    }

    vidFramesAnimating = "no";
}

function buildMediaRecorder(stream) {
    logVidAudio("MEDIARECORDER_INIT", {
        videoTracks: stream.getVideoTracks().length,
        audioTracks: stream.getAudioTracks().length
    });
    var optionsList = [
        { mimeType: 'video/webm;codecs=vp8,opus' },
        { mimeType: 'video/webm;codecs=vp9,opus' },
        { mimeType: 'video/webm' },
        {}
    ];
    for (var i = 0; i < optionsList.length; i++) {
        try {
            logVidAudio("MEDIARECORDER_TRY_OPTION", optionsList[i]);
            return new MediaRecorder(stream, optionsList[i]);
        } catch (e) {
            logVidAudio("MEDIARECORDER_OPTION_FAILED", { option: optionsList[i], error: String(e) });
        }
    }
    throw new Error('MediaRecorder is not supported for WebM in this browser');
}

async function createVideoWithAudioStandalone(audioSrc, shouldUpload) {
    if (typeof shouldUpload === "undefined") {
        shouldUpload = true;
    }

    if (!window.MediaRecorder) {
        alert("MediaRecorder is not supported in this browser");
        return null;
    }

    var audioContext = null;
    var audioElement = null;
    var sourceNode = null;
    var audioDest = null;
    var mixedStream = null;
    var audioPlaybackStarted = false;

    try {
        logVidAudio("START", { audioSrc: audioSrc, shouldUpload: shouldUpload });
        await prepStandaloneVideoRenderState();
        logVidAudio("PREP_DONE", {
            imageCount: loadedImages.length,
            framesPerImage: framesPerImage
        });

        var fps = 3;
        var videoDurationSec = (loadedImages.length * framesPerImage) / fps;
        logVidAudio("VIDEO_DURATION_SEC", videoDurationSec);
        logVidAudio("LENGTH_MODE", { mode: videoAudioLengthMode });

        var canvasStream = vdCanvas.captureStream(fps);
        mixedStream = new MediaStream();
        canvasStream.getVideoTracks().forEach(function(track) {
            mixedStream.addTrack(track);
        });
        logVidAudio("CANVAS_STREAM_TRACKS", {
            videoTracks: canvasStream.getVideoTracks().length,
            audioTracks: canvasStream.getAudioTracks().length
        });

        if (audioSrc) {
            audioElement = new Audio(audioSrc);
            audioElement.crossOrigin = "anonymous";
            audioElement.preload = "auto";

            var metadataPromise = new Promise(function(resolve) {
                var done = false;
                var finish = function(reason) {
                    if (!done) {
                        done = true;
                        resolve(reason);
                    }
                };
                audioElement.addEventListener("loadedmetadata", function() { finish("loadedmetadata"); }, { once: true });
                audioElement.addEventListener("error", function() { finish("metadata_error"); }, { once: true });
                setTimeout(function() { finish("metadata_timeout"); }, 3000);
            });
            audioElement.load();
            var metadataStatus = await metadataPromise;
            logVidAudio("AUDIO_METADATA", {
                status: metadataStatus,
                duration: audioElement.duration,
                readyState: audioElement.readyState
            });

            var AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (!AudioCtx) {
                alert("Web Audio API not supported in this browser");
                return null;
            }

            audioContext = new AudioCtx();
            audioDest = audioContext.createMediaStreamDestination();
            sourceNode = audioContext.createMediaElementSource(audioElement);
            sourceNode.connect(audioDest);
            sourceNode.connect(audioContext.destination);

            if (!isNaN(audioElement.duration) && audioElement.duration > 0) {
                logVidAudio("AUDIO_VS_VIDEO_DURATION", {
                    audioSec: audioElement.duration,
                    videoSec: videoDurationSec,
                    longerThanVideo: audioElement.duration > videoDurationSec
                });
            }

            audioDest.stream.getAudioTracks().forEach(function(track) {
                mixedStream.addTrack(track);
            });
            logVidAudio("MIXED_STREAM_AFTER_AUDIO", {
                videoTracks: mixedStream.getVideoTracks().length,
                audioTracks: mixedStream.getAudioTracks().length
            });
        }

        var recorder = buildMediaRecorder(mixedStream);
        var chunks = [];
        logVidAudio("MEDIARECORDER_CREATED", {
            mimeType: recorder.mimeType,
            state: recorder.state
        });

        recorder.ondataavailable = function(event) {
            if (event.data && event.data.size > 0) {
                chunks.push(event.data);
                logVidAudio("RECORDER_CHUNK", { size: event.data.size, chunks: chunks.length });
            }
        };

        recorder.onerror = function(event) {
            logVidAudio("RECORDER_ERROR", event);
        };

        recorder.onstart = function() {
            logVidAudio("RECORDER_START", { state: recorder.state });
        };

        var recorderDone = new Promise(function(resolve) {
            recorder.onstop = function() {
                resolve(new Blob(chunks, { type: 'video/webm' }));
            };
        });

        recorder.start(250);

        if (audioElement) {
            try {
                if (audioContext.state === "suspended") {
                    await audioContext.resume();
                    logVidAudio("AUDIO_CONTEXT_RESUME", { state: audioContext.state });
                }
                await audioElement.play();
                audioPlaybackStarted = true;
                logVidAudio("AUDIO_PLAY_OK", { currentTime: audioElement.currentTime });
            } catch (e) {
                logVidAudio("AUDIO_PLAY_BLOCKED", String(e));
            }
        }

        var targetDurationSec = videoDurationSec;
        if (audioElement && videoAudioLengthMode === "extend" && !isNaN(audioElement.duration) && audioElement.duration > 0) {
            targetDurationSec = Math.max(videoDurationSec, audioElement.duration);
        }
        await renderFramesStandaloneRealtime(fps, targetDurationSec);
        logVidAudio("RENDER_DONE", { finalFrameIndex: vdIncr });

        if (audioElement && audioPlaybackStarted && !audioElement.paused) {
            audioElement.pause();
            audioElement.currentTime = 0;
            logVidAudio("AUDIO_PAUSE_RESET");
        }

        recorder.stop();
        logVidAudio("RECORDER_STOP_CALLED");
        var finalBlob = await recorderDone;
        logVidAudio("FINAL_BLOB", { size: finalBlob.size });

        if (shouldUpload) {
            logVidAudio("UPLOAD_BEGIN");
            saveVideoFileBlob(finalBlob);
        }

        return finalBlob;
    } catch (e) {
        logVidAudio("ERROR", String(e));
        alert("createVideoWithAudioStandalone: " + e);
        return null;
    } finally {
        if (mixedStream) {
            mixedStream.getTracks().forEach(function(track) {
                track.stop();
            });
            logVidAudio("MIXED_STREAM_TRACKS_STOPPED");
        }
        if (audioContext) {
            try {
                audioContext.close();
                logVidAudio("AUDIO_CONTEXT_CLOSED");
            } catch (e) {
                logVidAudio("AUDIO_CONTEXT_CLOSE_ERROR", String(e));
            }
        }
    }
}

async function createVideoWithAudioFileStandalone(fileInputId, shouldUpload) {
    var inp = document.getElementById(fileInputId);
    if (!inp || !inp.files || !inp.files[0]) {
        alert("Audio file not selected");
        return null;
    }
    var audioUrl = URL.createObjectURL(inp.files[0]);
    try {
        return await createVideoWithAudioStandalone(audioUrl, shouldUpload);
    } finally {
        URL.revokeObjectURL(audioUrl);
    }
}



// file saving code

function fnshSVVidPostUpdt(tSVPa, tSVPb, tSVPc) {
    console.log("fnshSVVidPost: " + tSVPa + " " + tSVPb + " " + tSVPc);
    eindex("aa-edit-post", "pid=aa-edit-post&tpstid=" + tmpInsrtdPstId);
}
function fnishSvVidFBlob(tFnishResp) {
    console.log("fnishSvVidFBlob: " + tFnishResp);
    try   {
        if(tFnishResp.indexOf("Error") != -1) {
            alert("fnishSvVidFBlob: " + tFnishResp);
        } else {

            document.getElementById("p_vala").value = tFnishResp;
            // update p_vala with the video file name or path returned from the server after saving the video blob
            procNuUIitem("qposts", "p_vala", tmpInsrtdPstId, tFnishResp, "fnshSVVidPostUpdt"); 
              //  doQComm(oi["rq"], null, "setUPostAddSave");
             //  setPostAdd();
        }
    }

        catch(e) {
        alert("fnishSvVidFBlob: " + e);
    }
}


function saveVideoFileBlob(videoBlob) {
    try {
        logVidAudio("UPLOAD_PRECHECK", { hasBlob: !!videoBlob, size: videoBlob ? videoBlob.size : 0 });
        var maxUploadMB = window.maxVideoUploadMB || 20;
        var maxUploadBytes = maxUploadMB * 1024 * 1024;
        if (videoBlob && videoBlob.size > maxUploadBytes) {
            var actualMB = (videoBlob.size / (1024 * 1024)).toFixed(2);
            alert("Video is too large to upload (" + actualMB + " MB). Maximum allowed is " + maxUploadMB + " MB.");
            console.log("saveVideoFileBlob.SKIP: video size " + actualMB + " MB exceeds max " + maxUploadMB + " MB");
            return;
        }

        var formData = new FormData();
        var fileName = quid + "_" + Date.now() + ".webm";
        formData.append("in", quid);
        formData.append("videoFile", videoBlob, fileName);

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "_p/fileVideoBlobFile.php", true);
        xhr.timeout = 120000;

        xhr.onload = function() {
            if (xhr.status === 413) {
                logVidAudio("UPLOAD_413");
                alert("Upload failed: server rejected file as too large (413).");
                console.log("saveVideoFileBlob.413: Content Too Large");
                return;
            }
            if (xhr.status < 200 || xhr.status >= 300) {
                logVidAudio("UPLOAD_HTTP_ERROR", { status: xhr.status, responseText: xhr.responseText });
                alert("Upload failed: HTTP " + xhr.status);
                console.log("saveVideoFileBlob.HTTP_ERROR: " + xhr.status + " " + xhr.responseText);
                return;
            }
            var resp = xhr.responseText;
            logVidAudio("UPLOAD_OK", { status: xhr.status, responseText: resp });
            console.log("saveVideoFileBlob.resp: " + resp);
            fnishSvVidFBlob(resp);
        };

        xhr.onerror = function(e) {
            logVidAudio("UPLOAD_XHR_ERROR", e);
            console.log("saveVideoFileBlob.ERROR: ", e);
            alert("saveVideoFileBlob.ERROR: upload failed");
        };

        xhr.ontimeout = function() {
            logVidAudio("UPLOAD_TIMEOUT");
            console.log("saveVideoFileBlob.TIMEOUT");
            alert("saveVideoFileBlob: Request timed out");
        };

        xhr.send(formData);
    } catch(e) {
        alert("saveVideoFileBlob: " + e);
    }
}
// end of file saving code

// End of video creation code