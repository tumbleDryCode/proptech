
// Example: CCapture integration and animation loop
var capturer = null;
let vidFramesAnimating = "no";
var vdCanvas;
var vdCtx;
var vdImgs = [];
var vdBtn;
var isRecordingVid = "no";
var vdIncr = 0;
var propertyTitle = "";
var sellerIcon = "";
var sellerIconImg = null;
var loadedImages = [];
var imagesLoaded = 0;
var intervalId;
var lastDrawTime = 0;

function doCreateVidPop() {
    // Create popup HTML with canvas and Create Video button
    let tVCPopStr = `
        <div style="text-align:center;">
            <canvas id="vidFramesCanvas" width="340" height="340" style="border:1px solid #ccc; background:#222;"></canvas>
            <br>
            <input type="button" id="btnPreview" value="Preview" onclick="runVidFrames('no');" class="cls_button cls_button-small txtSmall bkgdClrHdr txtClrWhite" />
            <input type="button" id="btnCreateVideo" value="Create Video" class="cls_button cls_button-small txtSmall bkgdClrHdr txtClrWhite" onclick="createVideoAutomatically();" />
        </div>
    `;
    JSSHOP.ui.popNurFillLbox(tVCPopStr, "Property Video Maker");

    // Draw collage on canvas
    setTimeout(() => drawVideoCollage(), 200);
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
                    let tNrmlImg = mImgSrc;
                    let tLZuncompD = LZString.decompressFromEncodedURIComponent(tNrmlImg);
                    imagesToLoad.push(tLZuncompD);
                    break;
                case "25": // aerial
                    tNrmlImg = mImgSrc;
                    tLZuncompD = LZString.decompressFromEncodedURIComponent(tNrmlImg);
                    imagesToLoad.push(tLZuncompD);
                    break;
                case "30": // 3D
                    let tHmbImg = mImgThmbSrc;
                    tLZuncompD = LZString.decompressFromEncodedURIComponent(tHmbImg);
                    imagesToLoad.push(tLZuncompD);
                    break;
                default:
                    continue;
            }
        }
    }

    let loadedCount = 0;
    imagesToLoad.forEach((src, index) => {
        let img = new Image();
        if (src.startsWith('http')) {
            img.crossOrigin = "Anonymous";
        }
        img.onload = () => {
            // Draw faded in 2x2 grid
            ctx.globalAlpha = 0.3;
            let x = (index % 2) * (canvas.width / 2);
            let y = Math.floor(index / 2) * (canvas.height / 2);
            let w = canvas.width / 2;
            let h = canvas.height / 2;
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
    capturer = new CCapture({ format: 'webm', framerate: 1, verbose: true });
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
function runVidFrames(isRecording = "no") {

    vdCanvas = document.getElementById("vidFramesCanvas");
    if (!vdCanvas) return;
    vdCtx = vdCanvas.getContext("2d");
    vdImgs = [];
    // Get property details
    propertyTitle = tmpOldFFvals ? tmpOldFFvals.ptitle : document.getElementById("ptitle").value || "Property Title";
    sellerIcon = currShopsArr && currShopsArr[0] ? currShopsArr[0].u_icon : "";
    sellerIconImg = null;
    if (sellerIcon) {
        sellerIconImg = new Image();
        sellerIconImg.src = "images/user/s_thumb" + sellerIcon;
    }
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
    console.log("Gathered images:", vdImgs);
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
    vidFramesAnimating = "yes";
}

function startInterval() {
    console.log("Starting animation loop");
    // Draw the first frame immediately
    if (vdIncr < loadedImages.length && loadedImages[vdIncr]) {
        drawFrame(loadedImages[vdIncr]);
        vdIncr++;
    }
    // Set lastDrawTime to allow immediate next draw
    lastDrawTime = performance.now() - 1000;
    requestAnimationFrame(animate);
}

function animate(currentTime) {
    if (vidFramesAnimating === "no" && isRecordingVid === "yes") {
        return; // Stop animation
    }
    let now = performance.now();
    if (now - lastDrawTime >= 1000) { // 1 second interval
        if (vdIncr < loadedImages.length) {
            if (loadedImages[vdIncr]) {
                drawFrame(loadedImages[vdIncr]);
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

function drawFrame(img) {

    console.log(new Date().toISOString() + " - Drawing frame. Index: " + vdIncr + ", Recording: " + isRecordingVid);
    vdCtx.clearRect(0, 0, vdCanvas.width, vdCanvas.height);
    // Draw image centered
    const scale = Math.min(vdCanvas.width / img.width, vdCanvas.height / img.height);
    const w = img.width * scale, h = img.height * scale;
    vdCtx.drawImage(img, (vdCanvas.width - w) / 2, (vdCanvas.height - h) / 2, w, h);

    // Fade in property title on first 3 frames
    if (vdIncr < 3 && propertyTitle) {
        let opacity = (vdIncr + 1) / 3;
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
    } else if (vdIncr >= 3 && propertyTitle) {
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
        let iconSize = 72;
        let padding = 15;
        let slideFrames = 5;
        let finalX = vdCanvas.width - iconSize - padding;
        let finalY = vdCanvas.height - iconSize - padding;
        let x, y;
        if (vdIncr < slideFrames) {
            let progress = vdIncr / (slideFrames - 1);
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
            let iconCenterX = finalX + iconSize / 2;
            let iconCenterY = finalY + iconSize / 2;
            let bubbleTexts = [
                "Bedrooms: " + (tmpOldFFvals.bedroom || "N/A"),
                "Bathrooms: " + (tmpOldFFvals.bathroom || "N/A"),
                "Kitchens: " + (tmpOldFFvals.kitchen || "N/A"),
                "Price: " + (tmpOldFFvals.price || "N/A")
            ];
            let bubbleIndex = (vdIncr - slideFrames) % bubbleTexts.length;
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

// Example: Clean up resources when popup is closed
function cleanupVidResources() {
    doStopVidCap();
    vdImgs = [];
    loadedImages = [];
    imagesLoaded = 0;
    vdIncr = 0;
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
    console.log("Cleaned up video resources");
}

/*
// stuff to be added to the animation loop

        // Seller Icon Stuff... customize as needed
       tSlrIcon = currShopsArr[0].u_icon;
       tSlrName = currShopsArr[0].u_fullname;
       tFullPROIDstr += "<table><tr><td>";
       tFullPROIDstr += "<img src=\"images/users/s_thumb" + tSlrIcon +  "\" class=\"icnsmllbtn brdrRadius50prcnt\" alt=\"seller icon\" id=\"imgSlrIcn\"> ";
         tFullPROIDstr += "</td><td>";
         tFullPROIDstr += tSlrName;
            tFullPROIDstr += "</td></tr></table>";
            // end of seller icon stuff

            // title property
                dvPrpDTtl.innerText
                // end of title property

                // accessing tmpOldFFvals will give you the original values of the fields before they were edited, so you can use those for the video frames if needed.
                // Example:
                {
    "_id": "131",
    "prtype": "5",
    "pcoid": "66",
    "ptitle": "Apartamento em Leiria",
    "pcontent": "Apartamento acolhedor perto do centro.",
    "ptype": "ranch",
    "bhk": "on",
    "stype": "sell",
    "bedroom": "2",
    "bathroom": "1",
    "balcony": "1",
    "kitchen": "1",
    "hall": "1",
    "pfloors": "1",
    "size": "80",
    "price": "240.000",
    "pdoornum": "9",
    "pstreet": "Avenida Combatentes da Grande Guerra",
    "location": "Centro",
    "city": "Leiria",
    "state": "Leiria",
    "country": "Portugal",
    "pzipcode": "2410-128",
    "ploclat": "39.7432133",
    "ploclng": "-8.8076868",
    "feature": "5",
    "pimage": "updt_anon_1771267879.png",
    "pprf_showslr": "66",
    "pprf_showftd": "public",
    "pprf_showloc": "public",
    "pprf_prvcy": "private",
    "uid": "66",
    "pstatus": "active",
    "mapimage": "5",
    "topmapimage": "5",
    "groundmapimage": "5",
    "totalfloor": "5",
    "pdadded": "1766604505"
}
    // fields like ptitle, pcontent, pstreet, location, city, state, country, price, size, etc. can be accessed from tmpOldFFvals to get the original values before editing, which can be useful for creating video frames that show the original property details.
    // Including bedroom, bathroom, balcony, kitchen, hall, pfloors, etc. can also be accessed for more detailed frames.
    // end of example of accessing original field values for video frames

    // balloon style for speech bubbles: https://www.html5canvastutorials.com/tutorials/html5-canvas-speech-bubbles/
var styles = [
        { name: 'Classic', type: 'gradient', value: 'linear-gradient(to right, #007bff, #ffffff)' },
        { name: 'Modern', type: 'gradient', value: 'linear-gradient(to right, #00bcd4, #2196f3, #3f51b5)' },
        { name: 'Vibrant', type: 'gradient', value: 'linear-gradient(to right, #ff4081, #ff1744, #ffeb3b)' },
        { name: 'Thought', type: 'balloon', value: 'thought' },
        { name: 'Speech Bubble 1', type: 'balloon', value: 'speech1' },
        { name: 'Speech Bubble 2', type: 'balloon', value: 'speech2' },
        { name: 'Speech Bubble 3', type: 'balloon', value: 'speech3' }
    ];
    styles.forEach(function(style) {
        var classAttr = style.type === 'balloon' ? ' class="' + (style.value === 'thought' ? 'thought-bubble' : 'speech-bubble' + (style.value === 'speech1' ? '1' : style.value === 'speech2' ? '2' : '3')) + '"' : '';
        var textColor = style.type === 'gradient' ? 'color: white;' : 'color: #333;';
        var bgStyle = style.type === 'gradient' ? 'background: ' + style.value + ';' : '';
        var extraContent = '';
        if (style.type === 'balloon' && style.value === 'thought') {
            extraContent = '<div class="thought-tail1"></div><div class="thought-tail2"></div><div class="thought-tail3"></div>';
        }
        styleHtml += '<div onclick="setBgStyle(\'' + style.name + '\');JSSHOP.ui.closeLbox();" style="' + bgStyle + ' ' + textColor + ' height: 100px; display: flex; align-items: center; justify-content: center; cursor: pointer; font-weight: bold; text-shadow: ' + (style.type === 'gradient' ? '1px 1px 2px rgba(0,0,0,0.5);' : 'none;') + '"' + classAttr + '>' + extraContent + style.name + '</div>';
    });

// example function of drawing speech bubble:
function drawSpeechBubble(ctx, x, y, width, height, radius, text) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  // Tail
  ctx.lineTo(x + radius + 20, y + height);
  ctx.lineTo(x + 10, y + height + 20);
  ctx.lineTo(x + radius, y + height);

  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();

  ctx.fillStyle = "white";
  ctx.fill();
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Add Text
  ctx.fillStyle = "black";
  ctx.font = "16px Arial";
  ctx.fillText(text, x + 15, y + 30);
}
drawSpeechBubble(ctx, 50, 50, 150, 60, 10, "Hello!");

// end of example of drawing speech bubble

    // end of stuff to be added to the animation loop
*/




// End of video creation code
