
// Example: CCapture integration and animation loop
let capturer = null;
let vidFramesAnimating = "no";
var vdCanvas;
var vdCtx;
var vdImgs = [];
var vdBtn;
var isRecordingVid = "no";
var vdIncr = 0;
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
            <input type="button" id="btnCreateVideo" value="Create Video" class="cls_button cls_button-small txtSmall bkgdClrHdr txtClrWhite" onclick="createVideoAutomatically();" />
        </div>
    `;
    JSSHOP.ui.popNurFillLbox(tVCPopStr, "Property Video Maker");

    // Start preview animation immediately
    setTimeout(() => runVidFrames("no"), 200);
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
}

function createVideoAutomatically() {
    doStartVidCap();
    runVidFrames("yes");
}

// Example: Animate property images on canvas
function runVidFrames(isRecording = "no") {

    vdCanvas = document.getElementById("vidFramesCanvas");
    if (!vdCanvas) return;
    vdCtx = vdCanvas.getContext("2d");
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
   //  lastDrawTime = performance.now() - 1000;
    requestAnimationFrame(animate);
}

function animate(currentTime) {
    if (vidFramesAnimating === "no" && isRecordingVid === "yes") {
        return; // Stop animation
    }
    if (currentTime - lastDrawTime >= 1000) { // 1 second interval
        if (vdIncr < loadedImages.length) {
            if (loadedImages[vdIncr]) {
                drawFrame(loadedImages[vdIncr]);
            }
            vdIncr++;
            lastDrawTime = currentTime;
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

    console.log("Drawing frame. Current image index: " + vdIncr);
    vdCtx.clearRect(0, 0, vdCanvas.width, vdCanvas.height);
    // Draw image centered
    const scale = Math.min(vdCanvas.width / img.width, vdCanvas.height / img.height);
    const w = img.width * scale, h = img.height * scale;
    vdCtx.drawImage(img, (vdCanvas.width - w) / 2, (vdCanvas.height - h) / 2, w, h);
    // Example: Draw price sticker (customize as needed)
    vdCtx.fillStyle = "rgba(0,0,0,0.7)";
    vdCtx.fillRect(10, vdCanvas.height - 40, 120, 30);
    vdCtx.fillStyle = "#fff";
    vdCtx.font = "bold 18px Arial";
    vdCtx.fillText("$" + (vdIncr * 10000 + 100000), 20, vdCanvas.height - 18);

    // Capture frame if recording
    if (isRecordingVid == "yes" && capturer) {
        capturer.capture(vdCanvas);
        console.log("Captured frame for image index: " + vdIncr);
    }
}

// Save video (optional, if not using capturer.save())
function doSaveVidCap() {
    if (capturer) capturer.save();
}

// ...existing code...
