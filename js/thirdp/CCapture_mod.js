

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
var framesPerImage = 9; // 3 seconds at 3 fps
var videoFps = 3;
var propertyTitle = "";
var sellerIcon = "";
var sellerIconImg = null;
var sellerIconPickerPendingPrefix = "";
var sellerIconImageCache = {};
var loadedImages = [];
var imagesLoaded = 0;
var intervalId;
var activeAnimationFrameId = null;
var pendingVideoTabPreviewTimeoutId = null;
var lastDrawTime = 0;
var tmpPstImgCnvs = document.createElement("canvas");
var selectedAudioClipSrc = "";
var pendingAudioClipSrcForPost = "";
var videoAudioLengthMode = "trim";
var videoAudioLengthModeLoaded = "no";
var videoAudioLengthModeStorageKey = "incasa_video_audio_length_mode";
var videoEncodeProfile = "balanced";
var videoEncodeProfileLoaded = "no";
var videoEncodeProfileStorageKey = "incasa_video_encode_profile";
var videoTargetSizeMB = 1;
var lastVideoOutputMimeType = "";
var isAudioPreviewInProgress = "no";
var previewStopRequested = "no";
var activePreviewAudioElement = null;
var activeImageEffects = [];
var activeBubbleEffects = [];
var imageEffectPool = ["zoom_brightness", "pan_lr", "pan_ud", "slide_in", "tilt", "cut_up", "particle"];
var bubbleEffectPool = ["static", "pop", "fade", "slide", "pulse"];
var particleEffectCache = {};
var audioClipOptions = [
    { label: "Beethoven - Moonlight Sonata (movement)", file: "moonlight_mvt1.ogg" },
    { label: "Vivaldi - Spring Mvt 1", file: "vivaldi_spring_mvt1.oga" },
    { label: "Vivaldi - Spring Mvt 3", file: "vivaldi_spring_mvt3.ogg" },
    { label: "Vivaldi - Winter Mvt 1", file: "vivaldi_winter_mvt1.ogg" }
];
var NO_SELLER_ICON_VALUE = "__NO_ICON__";
var NO_STICKER_VALUE = "__NO_STICKER__";
var stickerPickerPendingPrefix = "";
var isPrvwngVid = "no";
var posterFrameSourceIndex = -1;

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
        var posterRendered = drawSelectedPosterFrameToCanvas(canvas);
        tmpPstImgCnvs.width = canvas.width;
        tmpPstImgCnvs.height = canvas.height;
        var tmpCtx = tmpPstImgCnvs.getContext("2d");
        tmpCtx.drawImage(canvas, 0, 0);
        console.log("getTmpPstImgCnvs: Captured canvas (" + canvas.width + "x" + canvas.height + ") into tmpPstImgCnvs", {
            posterRendered: posterRendered,
            posterFrameSourceIndex: posterFrameSourceIndex
        });
    } else {
        console.log("getTmpPstImgCnvs: vidFramesCanvas not found or not ready");
    }
    return tmpPstImgCnvs;
}

function ensurePosterFrameSelection() {
    if (!selectedImages || !selectedImages.length) {
        posterFrameSourceIndex = -1;
        return -1;
    }

    var hasCurrentPoster = selectedImages.some(function(s) {
        return s && s.index === posterFrameSourceIndex;
    });

    if (!hasCurrentPoster) {
        var explicitPoster = selectedImages.find(function(s) {
            return s && s.isPosterFrame === true;
        });
        if (explicitPoster && typeof explicitPoster.index !== "undefined") {
            posterFrameSourceIndex = explicitPoster.index;
        } else {
            posterFrameSourceIndex = selectedImages[0].index;
        }
    }

    for (var i = 0; i < selectedImages.length; i++) {
        if (selectedImages[i] && typeof selectedImages[i] === "object") {
            selectedImages[i].isPosterFrame = (selectedImages[i].index === posterFrameSourceIndex);
        }
    }

    return posterFrameSourceIndex;
}

function getPosterFrameSourceIndexForPost() {
    var idx = ensurePosterFrameSelection();
    if (idx === -1 || idx === null || typeof idx === "undefined") {
        return "";
    }
    return String(idx);
}

function canRenderSelectedPosterFrame() {
    if (!selectedImages || !selectedImages.length || !loadedImages || !loadedImages.length) {
        return false;
    }
    var targetSourceIndex = ensurePosterFrameSelection();
    if (targetSourceIndex === -1) {
        return false;
    }
    var orderIndex = selectedImages.findIndex(function(s) {
        return s && s.index === targetSourceIndex;
    });
    if (orderIndex === -1) {
        return false;
    }
    var frameImg = loadedImages[orderIndex];
    return !!(frameImg && frameImg.complete);
}

function drawSelectedPosterFrameToCanvas(targetCanvas, disableCapture) {
    if (!targetCanvas || !selectedImages || !selectedImages.length) {
        return false;
    }

    var targetSourceIndex = ensurePosterFrameSelection();
    if (targetSourceIndex === -1) {
        return false;
    }

    var orderIndex = selectedImages.findIndex(function(s) {
        return s && s.index === targetSourceIndex;
    });
    if (orderIndex === -1) {
        return false;
    }

    var frameImg = loadedImages[orderIndex];
    if (!frameImg || !frameImg.complete) {
        return false;
    }

    var prevCanvas = vdCanvas;
    var prevCtx = vdCtx;
    var prevVdIncr = vdIncr;
    var prevIsRecordingVid = isRecordingVid;

    try {
        vdCanvas = targetCanvas;
        vdCtx = targetCanvas.getContext("2d");
        if (!vdCtx) {
            return false;
        }

        var posterFrameInImage = Math.max(0, Math.min(framesPerImage - 1, Math.floor(framesPerImage / 2)));
        vdIncr = (orderIndex * framesPerImage) + posterFrameInImage;
        if (disableCapture !== false) {
            isRecordingVid = "no";
        }
        drawFrame(frameImg, posterFrameInImage);
        return true;
    } catch (e) {
        console.log("drawSelectedPosterFrameToCanvas.err: " + e);
        return false;
    } finally {
        isRecordingVid = prevIsRecordingVid;
        vdIncr = prevVdIncr;
        vdCanvas = prevCanvas;
        vdCtx = prevCtx;
    }
}

function updatePosterPrependedHint() {
    var hintEl = document.getElementById("posterPrependHint");
    if (!hintEl) {
        return;
    }

    var hasPoster = false;
    if (selectedImages && selectedImages.length) {
        var idx = ensurePosterFrameSelection();
        hasPoster = (idx !== -1 && idx !== null && typeof idx !== "undefined");
    }

    if (hasPoster) {
        hintEl.style.display = "block";
        hintEl.textContent = "Poster prepended as first frame";
    } else {
        hintEl.style.display = "none";
        hintEl.textContent = "";
    }
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
            selectedImages.push(createDefaultSelectedImage(i, title));
        }
    } else {
        // single property, use m_title from tmpPrpMediaObj
        var idx = 0;
        for (const k in tmpPrpMediaObj) {
            const m = tmpPrpMediaObj[k];
            if (m && typeof m === 'object' && m.m_file_thumb) {
                console.log(m.m_title);
                var title = m.m_title || "";
                selectedImages.push(createDefaultSelectedImage(idx, title));
                idx++;
            }
        }
    }
    ensurePosterFrameSelection();
    originalVdImgs = vdImgs.slice();
    var tSlctdPrpsObj = {};
    for (var i = 0; i < selectedProps.length; i++) {
        var prop = selectedProps[i];
        tSlctdPrpsObj["prp" + prop._id] = prop;
        tSlctdPrpsObj["prp" + prop._id].isSelected = true;
        tSlctdPrpsObj["prp" + prop._id].imgSrc = "images/property/" + prop.pimage;
    }
    window.tSlctdPrpsObj = tSlctdPrpsObj;
    var tabHtml = '<ul class="nav nav-tabs mb-3" style="display:flex;flex-wrap:wrap;gap:6px;row-gap:6px;"><li class="nav-item active"><a class="nav-link active px-2 px-md-3" style="white-space:nowrap;" href="#videoTab">Video</a></li><li class="nav-item"><a class="nav-link px-2 px-md-3" style="white-space:nowrap;" href="#imagesTab">Frames</a></li><li class="nav-item"><a class="nav-link px-2 px-md-3" style="white-space:nowrap;" href="#audioTab">Audio</a></li><li class="nav-item"><a class="nav-link px-2 px-md-3" style="white-space:nowrap;" href="#settingsTab">Settings</a></li></ul>';
    var contentHtml = '<div class="tab-content pt-2" style="min-height: 400px;"><div id="videoTab" class="tab-pane active" style="text-align:center;"><canvas id="vidFramesCanvas" width="340" height="340" style="border:1px solid #ccc; background:#222;"></canvas><br><input type="button" id="btnPreview" value="Preview" onclick="doPrevwBtnClick();" class="cls_button cls_button-small txtSmall bkgdClrHdr txtClrWhite" /><div id="posterPrependHint" class="txtSmall txtClrGrey" style="margin-top:6px;display:none;"></div></div><div id="imagesTab" class="tab-pane"><div id="divImgsContent"></div></div><div id="audioTab" class="tab-pane"><div id="divAudioContent"></div></div><div id="settingsTab" class="tab-pane"><div id="divSettingsContent">' + getSettingsTabContent() + '</div></div></div>';
    console.log("getVideoInterfaceHTML returning HTML of length:", (tabHtml + contentHtml).length);
    return tabHtml + contentHtml;
}

function doCreateVidPop() {
    // Create popup HTML with tabs and canvas
    var tabHtml = '<ul class="nav nav-tabs mb-3" style="display:flex;flex-wrap:wrap;gap:6px;row-gap:6px;"><li class="nav-item active"><a class="nav-link active px-2 px-md-3" style="white-space:nowrap;" href="#videoTab">Video</a></li><li class="nav-item"><a class="nav-link px-2 px-md-3" style="white-space:nowrap;" href="#imagesTab">Frames</a></li><li class="nav-item"><a class="nav-link px-2 px-md-3" style="white-space:nowrap;" href="#audioTab">Audio</a></li><li class="nav-item"><a class="nav-link px-2 px-md-3" style="white-space:nowrap;" href="#settingsTab">Settings</a></li></ul>';
    var contentHtml = '<div class="tab-content pt-2" style="min-height: 400px;"><div id="videoTab" class="tab-pane active" style="text-align:center;"><canvas id="vidFramesCanvas" width="340" height="340" style="border:1px solid #ccc; background:#222;"></canvas><br><input type="button" id="btnPreview" value="Preview" onclick="doPrevwBtnClick();" class="cls_button cls_button-small txtSmall bkgdClrHdr txtClrWhite" /><div id="posterPrependHint" class="txtSmall txtClrGrey" style="margin-top:6px;display:none;"></div></div><div id="imagesTab" class="tab-pane"><div id="divImgsContent"></div></div><div id="audioTab" class="tab-pane"><div id="divAudioContent"></div></div><div id="settingsTab" class="tab-pane"><div id="divSettingsContent">' + getSettingsTabContent() + '</div></div></div>';
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
        selectedImages.push(createDefaultSelectedImage(i, ""));
    }
    ensurePosterFrameSelection();

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
                if (target === '#imagesTab') {
                    document.getElementById("divImgsContent").innerHTML = getImgTabContent();
                    setTimeout(function() {
                        initFramesSortable(document.getElementById('sortableImages'), 'imagesTab-sortable');
                    }, 100);
                } else if (target === '#audioTab') {
                    document.getElementById("divAudioContent").innerHTML = getAudioTabContent();
                } else if (target === '#settingsTab') {
                    document.getElementById("divSettingsContent").innerHTML = getSettingsTabContent();
                    refreshSettingsTabHints();
                }
            });
        }
        // Initial draw
        drawVideoCollage();
        updatePosterPrependedHint();
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
    capturer = new CCapture({ format: 'webm', framerate: getVideoFps(), verbose: true });
    capturer.start();
    vidFramesAnimating = "yes";
    // Pass true to indicate recording
}

function doStopVidCap() {
    vidFramesAnimating = "no";
    isRecordingVid = "no";
    if (activeAnimationFrameId !== null) {
        cancelAnimationFrame(activeAnimationFrameId);
        activeAnimationFrameId = null;
    }
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

function setPrevwUiState(nextState) {
    isPrvwngVid = nextState;

    var previewBtn = document.getElementById("btnPreview");
    if (previewBtn) {
        previewBtn.value = (nextState === "yes") ? "Stop" : "Preview";
        previewBtn.disabled = false;
    }

    var tabAnchors = document.querySelectorAll('.nav-tabs a[href="#videoTab"], .nav-tabs a[href="#imagesTab"], .nav-tabs a[href="#audioTab"], .nav-tabs a[href="#settingsTab"]');
    for (var i = 0; i < tabAnchors.length; i++) {
        tabAnchors[i].style.pointerEvents = (nextState === "yes") ? "none" : "";
        tabAnchors[i].style.opacity = (nextState === "yes") ? "0.65" : "";
    }

    var saveBtn = document.getElementById("btnEUsave");
    if (saveBtn) {
        saveBtn.disabled = (nextState === "yes");
    }
}

function doPrevwBtnClick() {
    if (isPrvwngVid === "yes") {
        setPrevwUiState("no");
        stopVideoAnimationAndAudio("preview-btn-stop");
        return;
    }

    handleVideoTabPreviewClick();
    setPrevwUiState("yes");
}

function handleVideoTabPreviewClick() {
    logVidAudio("PREVIEW_CLICK", {
        vidFramesAnimating: vidFramesAnimating,
        isAudioPreviewInProgress: isAudioPreviewInProgress,
        hasSelectedAudio: !!selectedAudioClipSrc
    });

    logVidAudio("PREVIEW_CLICK_ACTION", { action: "start" });
    stopPreviewPlayback("restart-preview");
    if (selectedAudioClipSrc) {
        logVidAudio("VIDEO_TAB_PREVIEW_WITH_AUDIO", { audioSrc: selectedAudioClipSrc });
        previewVideoWithSelectedAudio(selectedAudioClipSrc);
        return;
    }

    logVidAudio("VIDEO_TAB_PREVIEW_SILENT");
    runVidFrames("no");
}

function getRandomEffectName(pool) {
    if (!pool || pool.length === 0) {
        return "";
    }
    return pool[Math.floor(Math.random() * pool.length)];
}

function getSelectedImageRenderConfig(imageIndex) {
    var cfg = { effectName: "", effectOptions: null };
    if (!selectedImages || !selectedImages[imageIndex] || typeof selectedImages[imageIndex] !== "object") {
        return cfg;
    }
    if (selectedImages[imageIndex].effectName) {
        cfg.effectName = selectedImages[imageIndex].effectName;
    }
    if (selectedImages[imageIndex].effectOptions && typeof selectedImages[imageIndex].effectOptions === "object") {
        cfg.effectOptions = selectedImages[imageIndex].effectOptions;
    }
    return cfg;
}

// Hook for future Images-tab options UI.
function setSelectedImageEffect(pos, effectName, effectOptions) {
    if (!selectedImages || !selectedImages[pos] || typeof selectedImages[pos] !== "object") {
        return;
    }
    selectedImages[pos].effectName = effectName || "";
    selectedImages[pos].effectOptions = effectOptions && typeof effectOptions === "object" ? effectOptions : null;
}

function getBaseImagePlacement(img) {
    var baseScale = Math.min(vdCanvas.width / img.width, vdCanvas.height / img.height);
    var w = img.width * baseScale;
    var h = img.height * baseScale;
    return {
        baseScale: baseScale,
        w: w,
        h: h,
        x: (vdCanvas.width - w) / 2,
        y: (vdCanvas.height - h) / 2
    };
}

function drawDefaultZoomBrightness(img, progress, placement) {
    var scaleFactor = 1 + progress * 0.05;
    var brightness = 1 + progress * 0.3;
    var w = img.width * placement.baseScale * scaleFactor;
    var h = img.height * placement.baseScale * scaleFactor;
    vdCtx.filter = "brightness(" + brightness + ")";
    vdCtx.drawImage(img, (vdCanvas.width - w) / 2, (vdCanvas.height - h) / 2, w, h);
    vdCtx.filter = "none";
}

function drawNoImageEffect(img, placement) {
    vdCtx.drawImage(img, placement.x, placement.y, placement.w, placement.h);
}

function getParticleCacheKey(img, effectOptions) {
    var pixelSize = effectOptions && effectOptions.pixelSize ? effectOptions.pixelSize : 8;
    return [img.src || "img", vdCanvas.width, vdCanvas.height, pixelSize].join("|");
}

function createParticleEffectData(img, placement, effectOptions, imageIndex) {
    var pixelSize = Math.max(4, parseInt(effectOptions && effectOptions.pixelSize ? effectOptions.pixelSize : 8, 10));
    var scatter = Math.max(20, parseInt(effectOptions && effectOptions.scatter ? effectOptions.scatter : 70, 10));
    var offCanvas = document.createElement("canvas");
    offCanvas.width = vdCanvas.width;
    offCanvas.height = vdCanvas.height;
    var offCtx = offCanvas.getContext("2d");
    offCtx.clearRect(0, 0, offCanvas.width, offCanvas.height);
    offCtx.drawImage(img, placement.x, placement.y, placement.w, placement.h);

    var imgData;
    try {
        imgData = offCtx.getImageData(0, 0, offCanvas.width, offCanvas.height).data;
    } catch (e) {
        return null;
    }

    var parts = [];
    for (var py = 0; py < offCanvas.height; py += pixelSize) {
        for (var px = 0; px < offCanvas.width; px += pixelSize) {
            var idx = (py * offCanvas.width + px) * 4;
            var a = imgData[idx + 3];
            if (a < 16) {
                continue;
            }
            var r = imgData[idx];
            var g = imgData[idx + 1];
            var b = imgData[idx + 2];
            var seed = (px * 92821 + py * 68917 + imageIndex * 131) % 9973;
            var ang = (seed % 360) * (Math.PI / 180);
            var dist = scatter * (0.35 + (seed % 100) / 100);
            parts.push({
                ox: px,
                oy: py,
                sx: px + Math.cos(ang) * dist,
                sy: py + Math.sin(ang) * dist,
                color: "rgba(" + r + "," + g + "," + b + "," + (a / 255).toFixed(3) + ")",
                size: pixelSize
            });
        }
    }
    return { particles: parts };
}

function drawParticleImageEffect(img, progress, effectOptions, imageIndex, placement) {
    var key = getParticleCacheKey(img, effectOptions);
    if (!particleEffectCache[key]) {
        particleEffectCache[key] = createParticleEffectData(img, placement, effectOptions, imageIndex);
    }
    var pdata = particleEffectCache[key];
    if (!pdata || !pdata.particles || pdata.particles.length === 0) {
        drawDefaultZoomBrightness(img, progress, placement);
        return;
    }

    var settleSpeed = effectOptions && effectOptions.speed ? effectOptions.speed : 1.25;
    var settle = Math.max(0, Math.min(1, progress * settleSpeed));
    var alphaBoost = 0.55 + settle * 0.45;
    var ps = pdata.particles;
    for (var i = 0; i < ps.length; i++) {
        var p = ps[i];
        var x = p.sx + (p.ox - p.sx) * settle;
        var y = p.sy + (p.oy - p.sy) * settle;
        vdCtx.globalAlpha = alphaBoost;
        vdCtx.fillStyle = p.color;
        vdCtx.fillRect(x, y, p.size, p.size);
    }
    vdCtx.globalAlpha = 1;
}

function resetRenderEffects(frameCount) {
    activeImageEffects = [];
    activeBubbleEffects = [];
    for (var i = 0; i < frameCount; i++) {
        activeImageEffects.push(getRandomEffectName(imageEffectPool));
        activeBubbleEffects.push(getRandomEffectName(bubbleEffectPool));
    }
    logVidAudio("EFFECTS_RESET", {
        frameCount: frameCount,
        imageEffects: activeImageEffects,
        bubbleEffects: activeBubbleEffects
    });
}

function ensureRenderEffects(frameCount) {
    if (!activeImageEffects || activeImageEffects.length !== frameCount) {
        resetRenderEffects(frameCount);
    }
}

function stopPreviewPlayback(reason) {
    stopVideoAnimationAndAudio(reason);
}

function stopVideoAnimationAndAudio(reason) {
    logVidAudio("STOP_ALL_ENTER", {
        reason: reason || "none",
        vidFramesAnimating: vidFramesAnimating,
        isAudioPreviewInProgress: isAudioPreviewInProgress,
        hasActivePreviewAudio: !!activePreviewAudioElement,
        hasPendingVideoTabTimeout: pendingVideoTabPreviewTimeoutId !== null,
        hasActiveAnimationFrame: activeAnimationFrameId !== null
    });

    previewStopRequested = "yes";
    vidFramesAnimating = "no";
    isRecordingVid = "no";
    isAudioPreviewInProgress = "no";

    if (pendingVideoTabPreviewTimeoutId !== null) {
        clearTimeout(pendingVideoTabPreviewTimeoutId);
        pendingVideoTabPreviewTimeoutId = null;
    }

    if (activeAnimationFrameId !== null) {
        cancelAnimationFrame(activeAnimationFrameId);
        activeAnimationFrameId = null;
    }

    if (activePreviewAudioElement) {
        try {
            activePreviewAudioElement.pause();
            activePreviewAudioElement.currentTime = 0;
        } catch (e) {
            console.error("[VID-AUDIO]Error stopping preview audio:", e);
        }
        activePreviewAudioElement = null;
    }

    // Also stop the audio tab's native audio player if it is playing.
    var audioPreviewElement = document.getElementById("audioClipPreview");
    if (audioPreviewElement) {
        try {
            audioPreviewElement.pause();
            audioPreviewElement.currentTime = 0;
        } catch (e) {
            console.error("[VID-AUDIO]Error stopping audioClipPreview:", e);
        }
    }
    var previewBtn = document.getElementById("btnPreview");
    if (previewBtn) {
        previewBtn.disabled = false;
    }
    if (reason) {
        logVidAudio("PREVIEW_STOP", { reason: reason });
    }
    vdIncr = 0; // Reset frame index for next preview
    setPrevwUiState("no");
    logVidAudio("STOP_ALL_DONE", {
        vidFramesAnimating: vidFramesAnimating,
        isAudioPreviewInProgress: isAudioPreviewInProgress,
        activeAnimationFrameId: activeAnimationFrameId,
        pendingVideoTabPreviewTimeoutId: pendingVideoTabPreviewTimeoutId
    });
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
        selectedImages.push(createDefaultSelectedImage(i, ""));
    }
    console.log("Initialized selectedImages with", selectedImages.length, "items");
}

function runVidFrames(isRecording = "no") {
    if (isRecording === "stop") {
        stopVideoAnimationAndAudio("runVidFrames-stop");
        return;
    }

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
    sellerIcon = getCurrentSellerIconFile();
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
                if (previewStopRequested === "no" && vidFramesAnimating === "yes") {
                    startInterval();
                }
            }
        };
        img.onerror = () => {
            console.log("Failed to preload image: " + src);
            imagesLoaded++;
            if (imagesLoaded === vdImgs.length) {
                if (previewStopRequested === "no" && vidFramesAnimating === "yes") {
                    startInterval();
                }
            }
        };
        img.src = src;
    });
    vdIncr = 0;
    isRecordingVid = isRecording;
    previewStopRequested = "no";
    vidFramesAnimating = "yes";
    activeImageEffects = [];
    activeBubbleEffects = [];
}

function startInterval() {
    if (previewStopRequested === "yes" || vidFramesAnimating === "no") {
        return;
    }

    console.log("Starting animation loop");
    ensureRenderEffects(loadedImages.length);

    // Fallback: prepend poster as frame 0 for recorded output.
    if (isRecordingVid === "yes") {
        var didDrawPosterFirstFrame = drawSelectedPosterFrameToCanvas(vdCanvas, false);
        if (didDrawPosterFirstFrame) {
            logVidAudio("RECORD_PREPEND_POSTER_FRAME", { posterFrameSourceIndex: posterFrameSourceIndex });
        }
    }

    // Draw the first frame immediately
    if (vdIncr < loadedImages.length && loadedImages[vdIncr]) {
        if (previewStopRequested === "yes" || vidFramesAnimating === "no") {
            return;
        }
        drawFrame(loadedImages[vdIncr]);
        vdIncr++;
    }
    // Set lastDrawTime to allow immediate next draw
    lastDrawTime = performance.now() - getFrameIntervalMs();
    activeAnimationFrameId = requestAnimationFrame(animate);
}

function animate(currentTime) {
    if (vidFramesAnimating === "no" || previewStopRequested === "yes") {
        activeAnimationFrameId = null;
        return; // Stop animation
    }
    var now = performance.now();
    if (now - lastDrawTime >= getFrameIntervalMs()) {
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
            vidFramesAnimating = "no";
            if (isRecordingVid === "yes") {
                doStopVidCap();
            } else if (isPrvwngVid === "yes") {
                setPrevwUiState("no");
            }
            activeAnimationFrameId = null;
            return; // Stop when all frames are done
        }
    }
    activeAnimationFrameId = requestAnimationFrame(animate);
}

function drawImageWithEffect(effectName, img, frameInImage, effectOptions, imageIndex) {
    var frameMax = Math.max(1, framesPerImage - 1);
    var progress = frameInImage / frameMax;
    var placement = getBaseImagePlacement(img);
    var baseScale = placement.baseScale;
    var cx = vdCanvas.width / 2;
    var cy = vdCanvas.height / 2;

    vdCtx.save();
    if (effectName === "none") {
        drawNoImageEffect(img, placement);
    } else if (effectName === "pan_lr") {
        var scaleLR = baseScale * 1.08;
        var wLR = img.width * scaleLR;
        var hLR = img.height * scaleLR;
        var xLR = (vdCanvas.width - wLR) / 2 + (progress - 0.5) * 26;
        var yLR = (vdCanvas.height - hLR) / 2;
        vdCtx.drawImage(img, xLR, yLR, wLR, hLR);
    } else if (effectName === "pan_ud") {
        var scaleUD = baseScale * 1.08;
        var wUD = img.width * scaleUD;
        var hUD = img.height * scaleUD;
        var xUD = (vdCanvas.width - wUD) / 2;
        var yUD = (vdCanvas.height - hUD) / 2 + (progress - 0.5) * 22;
        vdCtx.drawImage(img, xUD, yUD, wUD, hUD);
    } else if (effectName === "slide_in") {
        var scaleS = baseScale;
        var wS = img.width * scaleS;
        var hS = img.height * scaleS;
        var xBase = (vdCanvas.width - wS) / 2;
        var yBase = (vdCanvas.height - hS) / 2;
        var slide = (1 - Math.min(1, progress * 1.3)) * 34;
        vdCtx.drawImage(img, xBase + slide, yBase, wS, hS);
    } else if (effectName === "tilt") {
        var scaleT = baseScale * 1.03;
        var wT = img.width * scaleT;
        var hT = img.height * scaleT;
        var angle = (Math.sin(progress * Math.PI) - 0.5) * 0.05;
        vdCtx.translate(cx, cy);
        vdCtx.rotate(angle);
        vdCtx.drawImage(img, -wT / 2, -hT / 2, wT, hT);
    } else if (effectName === "cut_up") {
        var scaleC = baseScale;
        var wC = img.width * scaleC;
        var hC = img.height * scaleC;
        var xC = (vdCanvas.width - wC) / 2;
        var yC = (vdCanvas.height - hC) / 2;
        var strips = 6;
        var stripH = hC / strips;
        for (var si = 0; si < strips; si++) {
            var offset = ((si % 2 === 0 ? -1 : 1) * (1 - progress) * 10);
            var sy = yC + si * stripH;
            vdCtx.drawImage(img, 0, (img.height / strips) * si, img.width, img.height / strips, xC + offset, sy, wC, stripH + 0.8);
        }
    } else if (effectName === "particle") {
        drawParticleImageEffect(img, progress, effectOptions, imageIndex || 0, placement);
    } else {
        drawDefaultZoomBrightness(img, progress, placement);
    }
    vdCtx.restore();
}

function getBubbleEffectStyle(effectName, frameInImage) {
    var frameMax = Math.max(1, framesPerImage - 1);
    var progress = frameInImage / frameMax;
    var st = { opacity: 1, scale: 1, offsetX: 0, offsetY: 0 };
    if (effectName === "pop") {
        st.scale = 0.86 + 0.14 * Math.min(1, progress * 1.5);
    } else if (effectName === "fade") {
        st.opacity = 0.45 + 0.55 * progress;
    } else if (effectName === "slide") {
        st.offsetX = (1 - progress) * -18;
        st.offsetY = (1 - progress) * 8;
    } else if (effectName === "pulse") {
        st.scale = 1 + Math.sin(progress * Math.PI * 2) * 0.05;
    }
    return st;
}

function drawFrame(img, frameInImage) {
 
    console.log(new Date().toISOString() + " - Drawing frame. Index: " + vdIncr + ", Recording: " + isRecordingVid);
    // Force a full-surface clear in identity space so transformed previous draws cannot ghost.
    vdCtx.save();
    if (typeof vdCtx.setTransform === "function") {
        vdCtx.setTransform(1, 0, 0, 1, 0, 0);
    }
    vdCtx.globalAlpha = 1;
    vdCtx.globalCompositeOperation = "source-over";
    vdCtx.filter = "none";
    vdCtx.clearRect(0, 0, vdCanvas.width, vdCanvas.height);
    vdCtx.restore();
    var imageIndex = Math.floor(vdIncr / framesPerImage);
    ensureRenderEffects(loadedImages.length);
    var imgCfg = getSelectedImageRenderConfig(imageIndex);
    var imageEffect = imgCfg.effectName || activeImageEffects[imageIndex] || "zoom_brightness";
    drawImageWithEffect(imageEffect, img, frameInImage || 0, imgCfg.effectOptions, imageIndex);

    // Per-frame title at the top of the image using shadow-gradient text style.
    if (selectedImages[imageIndex] && selectedImages[imageIndex].titleText) {
        var frameTitleText = String(selectedImages[imageIndex].titleText || "").trim();
        if (frameTitleText !== "") {
            var frameTitleStyle = {
                bold: !!selectedImages[imageIndex].titleBold,
                italic: !!selectedImages[imageIndex].titleItalic,
                size: normalizeCaptionSize(selectedImages[imageIndex].titleSize),
                fontFamily: normalizeCaptionFontFamily(selectedImages[imageIndex].titleFontFamily)
            };
            var frameTitleFont = buildCaptionFontString(frameTitleStyle);
            var frameTitleTextColor = normalizeHexColor(selectedImages[imageIndex].titleTextColor, "#ffffff");
            var frameTitleShadowBg = normalizeHexColor(selectedImages[imageIndex].titleShadowBgColor, "#000000");
            var frameTitleShadowBorder = normalizeHexColor(selectedImages[imageIndex].titleShadowBorderColor, "#333333");
            var frameTitleBubbleText = normalizeHexColor(selectedImages[imageIndex].titleBubbleTextColor, frameTitleTextColor);
            var frameTitleBubbleBg = normalizeHexColor(selectedImages[imageIndex].titleBubbleBgColor, "#ffffff");
            var frameTitleBubbleBorder = normalizeHexColor(selectedImages[imageIndex].titleBubbleBorderColor, "#000000");
            var frameTitleBubbleOpacity = (typeof selectedImages[imageIndex].titleBubbleOpacity === "number")
                ? Math.max(0, Math.min(1, selectedImages[imageIndex].titleBubbleOpacity))
                : 1;
            var frameTitlePlacement = normalizeTitlePlacement(selectedImages[imageIndex].titlePlacement);
            var rawFrameTitleType = selectedImages[imageIndex].titleType;
            var frameTitleType = (rawFrameTitleType === "speech" || rawFrameTitleType === "thought" || rawFrameTitleType === "jagged" || rawFrameTitleType === "comic_jagged" || rawFrameTitleType === "shadow_text")
                ? rawFrameTitleType
                : "shadow_text";
            var frameTitlePoint = getTitlePlacementPoint(vdCanvas.width, vdCanvas.height, frameTitlePlacement);
            var frameTitleMaxWidth = Math.max(80, vdCanvas.width - 24);
            var frameTitleLineHeight = Math.max(14, Math.round(frameTitleStyle.size * 1.2));

            if (frameTitleType === "shadow_text") {
                vdCtx.save();
                vdCtx.textAlign = "center";
                vdCtx.font = frameTitleFont;
                var frameTitleLines = getWrappedCanvasTextLines(vdCtx, frameTitleText, frameTitleMaxWidth);
                if (frameTitleLines.length === 0) {
                    frameTitleLines = [frameTitleText];
                }
                var firstLineY = frameTitlePoint.y - ((frameTitleLines.length - 1) * frameTitleLineHeight) / 2;
                for (var tli = 0; tli < frameTitleLines.length; tli++) {
                    var lineText = frameTitleLines[tli];
                    var lineY = firstLineY + (tli * frameTitleLineHeight);
                    var gradStartX = Math.max(0, frameTitlePoint.x - 80);
                    var gradEndX = Math.min(vdCanvas.width, frameTitlePoint.x + 80);
                    var titleGradient = vdCtx.createLinearGradient(gradStartX, lineY - 14, gradEndX, lineY + 14);
                    titleGradient.addColorStop(0, frameTitleShadowBg);
                    titleGradient.addColorStop(1, frameTitleShadowBorder);
                    vdCtx.fillStyle = titleGradient;
                    vdCtx.fillText(lineText, frameTitlePoint.x + 2, lineY + 2);
                    vdCtx.fillStyle = frameTitleTextColor;
                    vdCtx.fillText(lineText, frameTitlePoint.x, lineY);
                }
                vdCtx.restore();
            } else {
                var titleBubbleWidth = Math.max(120, Math.min(240, vdCanvas.width - 24));
                var titleBubblePos = getTitleBubblePlacementRect(vdCanvas.width, vdCanvas.height, titleBubbleWidth, frameTitlePlacement);
                drawSpeechBubble(
                    vdCtx,
                    titleBubblePos.x,
                    titleBubblePos.y,
                    frameTitleText,
                    0,
                    0,
                    { opacity: 1, scale: 1, offsetX: 0, offsetY: 0 },
                    frameTitleType,
                    {
                        text: frameTitleBubbleText,
                        bg: frameTitleBubbleBg,
                        border: frameTitleBubbleBorder
                    },
                    frameTitleStyle,
                    "right",
                    false,
                    frameTitleBubbleOpacity
                );
            }
        }
    }

    // Optional per-frame sticker (100x100), square or rounded.
    if (selectedImages[imageIndex] && selectedImages[imageIndex].stickerFile && !isNoStickerValue(selectedImages[imageIndex].stickerFile)) {
        var frameStickerFile = String(selectedImages[imageIndex].stickerFile || "").trim();
        var frameStickerImg = getSellerIconImage(frameStickerFile);
        if (frameStickerImg && frameStickerImg.complete) {
            var stickerSize = 100;
            var stickerPlacement = normalizeTitlePlacement(selectedImages[imageIndex].stickerPlacement || "top_right");
            var stickerPos = getStickerPlacementRect(vdCanvas.width, vdCanvas.height, stickerSize, stickerPlacement);
            var stickerShape = (selectedImages[imageIndex].stickerShape === "square") ? "square" : "rounded";
            var stickerShadow = !!selectedImages[imageIndex].stickerShadow;

            vdCtx.save();
            if (stickerShape === "rounded") {
                vdCtx.beginPath();
                vdCtx.arc(stickerPos.x + (stickerSize / 2), stickerPos.y + (stickerSize / 2), stickerSize / 2, 0, 2 * Math.PI);
                vdCtx.clip();
            }
            vdCtx.drawImage(frameStickerImg, stickerPos.x, stickerPos.y, stickerSize, stickerSize);
            vdCtx.restore();

            if (stickerShadow) {
                vdCtx.save();
                vdCtx.shadowColor = "rgba(0,0,0,0.35)";
                vdCtx.shadowBlur = 4;
                vdCtx.shadowOffsetX = 1;
                vdCtx.shadowOffsetY = 1;
                vdCtx.strokeStyle = "rgba(0,0,0,0.4)";
                vdCtx.lineWidth = 1;
                if (stickerShape === "rounded") {
                    vdCtx.beginPath();
                    vdCtx.arc(stickerPos.x + (stickerSize / 2), stickerPos.y + (stickerSize / 2), (stickerSize / 2) - 1, 0, 2 * Math.PI);
                    vdCtx.stroke();
                } else {
                    vdCtx.strokeRect(stickerPos.x + 1, stickerPos.y + 1, stickerSize - 2, stickerSize - 2);
                }
                vdCtx.restore();
            }

            vdCtx.save();
            vdCtx.strokeStyle = "rgba(255,255,255,0.9)";
            vdCtx.lineWidth = 2;
            if (stickerShape === "rounded") {
                vdCtx.beginPath();
                vdCtx.arc(stickerPos.x + (stickerSize / 2), stickerPos.y + (stickerSize / 2), (stickerSize / 2) - 1, 0, 2 * Math.PI);
                vdCtx.stroke();
            } else {
                vdCtx.strokeRect(stickerPos.x + 1, stickerPos.y + 1, stickerSize - 2, stickerSize - 2);
            }
            vdCtx.restore();
        }
    }

    // Fade in property title on first 3 frames of first image
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

    // Slide in seller icon from selected side over first 5 frames.
    var frameSellerIconFile = getFrameSellerIconFile(imageIndex);
    var frameSellerIconImg = getSellerIconImage(frameSellerIconFile);
    var hasFrameSellerIcon = !!(frameSellerIconImg && frameSellerIconImg.complete);
    if (hasFrameSellerIcon) {
        var frameSellerIconSide = getFrameSellerIconSide(imageIndex);
        var iconSize = 72;
        var padding = 15;
        var slideFrames = 5;
        var finalX = (frameSellerIconSide === "left") ? padding : (vdCanvas.width - iconSize - padding);
        var finalY = vdCanvas.height - iconSize - padding;
        var x, y;
        if (vdIncr < slideFrames) {
            var progress = vdIncr / (slideFrames - 1);
            if (frameSellerIconSide === "left") {
                x = -iconSize + (finalX + iconSize) * progress; // slide from left
            } else {
                x = vdCanvas.width + iconSize - (vdCanvas.width + iconSize - finalX) * progress; // slide from right
            }
            y = finalY;
        } else {
            x = finalX;
            y = finalY;
        }

        // Add subtle movement once icon has landed: gentle float + breathe scale.
        var iconDrawX = x;
        var iconDrawY = y;
        var iconDrawSize = iconSize;
        if (vdIncr >= slideFrames) {
            var settlePhase = (vdIncr - slideFrames) / Math.max(1, framesPerImage);
            var breathe = 1 + Math.sin(settlePhase * Math.PI * 2) * 0.02;
            var floatY = Math.sin(settlePhase * Math.PI * 2 + 1.4) * 1.8;
            iconDrawSize = iconSize * breathe;
            iconDrawX = finalX - (iconDrawSize - iconSize) / 2;
            iconDrawY = finalY + floatY - (iconDrawSize - iconSize) / 2;

            // Soft glow ring to keep attention without being flashy.
            vdCtx.save();
            vdCtx.beginPath();
            vdCtx.arc(iconDrawX + iconDrawSize / 2, iconDrawY + iconDrawSize / 2, iconDrawSize / 2 + 4, 0, 2 * Math.PI);
            vdCtx.strokeStyle = "rgba(255,255,255,0.35)";
            vdCtx.lineWidth = 1.25;
            vdCtx.stroke();
            vdCtx.restore();
        }

        // Draw rounded icon
        vdCtx.save();
        vdCtx.beginPath();
        vdCtx.arc(iconDrawX + iconDrawSize / 2, iconDrawY + iconDrawSize / 2, iconDrawSize / 2, 0, 2 * Math.PI);
        vdCtx.clip();
        vdCtx.drawImage(frameSellerIconImg, iconDrawX, iconDrawY, iconDrawSize, iconDrawSize);
        vdCtx.restore();

    }

    var shouldDrawCaptionBubble = (!hasFrameSellerIcon) || (vdIncr >= 5);
    if (shouldDrawCaptionBubble) {
        console.log("Checking speech bubble for imageIndex:", imageIndex, "selectedImages[imageIndex]:", selectedImages[imageIndex]);
        if (selectedImages[imageIndex] && selectedImages[imageIndex].text) {
            console.log("Calling drawSpeechBubble with text:", selectedImages[imageIndex].text);
            var bfx = activeBubbleEffects[imageIndex] || "static";
            var bstyle = getBubbleEffectStyle(bfx, frameInImage || 0);
            var rawBalloonType = selectedImages[imageIndex].balloonType;
            var balloonType = (rawBalloonType === "thought" || rawBalloonType === "shadow_text" || rawBalloonType === "jagged" || rawBalloonType === "comic_jagged") ? rawBalloonType : "speech";
            var bubbleColors = {
                text: normalizeHexColor(selectedImages[imageIndex].bubbleTextColor, "#000000"),
                bg: normalizeHexColor(selectedImages[imageIndex].bubbleBgColor, "#ffffff"),
                border: normalizeHexColor(selectedImages[imageIndex].bubbleBorderColor, "#000000")
            };
            var captionStyle = {
                bold: !!selectedImages[imageIndex].captionBold,
                italic: !!selectedImages[imageIndex].captionItalic,
                size: normalizeCaptionSize(selectedImages[imageIndex].captionSize),
                fontFamily: normalizeCaptionFontFamily(selectedImages[imageIndex].captionFontFamily)
            };
            var bubbleWidth = 195;
            var frameSellerIconSide = getFrameSellerIconSide(imageIndex);
            var bubbleX;
            var tailX;
            var tailY;
            var frameShowTail;

            if (hasFrameSellerIcon) {
                var finalIconX = (frameSellerIconSide === "left") ? 15 : (vdCanvas.width - 72 - 15);
                var finalIconY = vdCanvas.height - 72 - 15;
                bubbleX = (frameSellerIconSide === "left") ? (vdCanvas.width - bubbleWidth - 10) : 10;
                tailX = finalIconX + 36;
                tailY = finalIconY + 36;
                frameShowTail = (selectedImages[imageIndex].showTail !== false);
            } else {
                bubbleX = Math.round((vdCanvas.width - bubbleWidth) / 2);
                tailX = 0;
                tailY = 0;
                frameShowTail = false;
            }

            var frameBubbleOpacity = (typeof selectedImages[imageIndex].bubbleOpacity === "number") ? selectedImages[imageIndex].bubbleOpacity : 1;
            drawSpeechBubble(vdCtx, bubbleX, vdCanvas.height - 100, selectedImages[imageIndex].text, tailX, tailY, bstyle, balloonType, bubbleColors, captionStyle, frameSellerIconSide, frameShowTail, frameBubbleOpacity);
        }
    }
    // Capture frame if recording
    if (isRecordingVid == "yes" && capturer) {
        capturer.capture(vdCanvas);
        console.log(new Date().toISOString() + " - Captured frame for image index: " + vdIncr);
    }
}

// Draw a speech/thought bubble with tail.
function drawSpeechBubble(ctx, x, y, text, tailX, tailY, style, balloonType, bubbleColors, captionStyle, iconSide, showTail, bubbleOpacity) {

    console.log("drawSpeechBubble called with text:", text);
    style = style || {};
    balloonType = (balloonType === "thought" || balloonType === "shadow_text" || balloonType === "jagged" || balloonType === "comic_jagged") ? balloonType : "speech";
    var opacity = (typeof style.opacity === "number") ? style.opacity : 1;
    var scale = (typeof style.scale === "number") ? style.scale : 1;
    var offsetX = (typeof style.offsetX === "number") ? style.offsetX : 0;
    var offsetY = (typeof style.offsetY === "number") ? style.offsetY : 0;
    showTail = (showTail !== false);
    bubbleOpacity = (typeof bubbleOpacity === "number") ? Math.max(0, Math.min(1, bubbleOpacity)) : 1;
    var width = 195;
        var bubbleTailSide = (iconSide === "left") ? "left" : "right";
    var minHeight = 65;
    var padX = 16;
    var padY = 12;
    let radius = 10;
    var height = minHeight;
    var tailTipX;
    var tailTipY;
    bubbleColors = bubbleColors || {};
    captionStyle = captionStyle || {};
    var fillColor = normalizeHexColor(bubbleColors.bg, "#ffffff");
    var borderColor = normalizeHexColor(bubbleColors.border, "#000000");
    var textColor = normalizeHexColor(bubbleColors.text, "#000000");
    var textFont = buildCaptionFontString(captionStyle);

    ctx.font = textFont;
    var maxTextWidth = Math.max(60, width - (padX * 2));
    var textLines = getWrappedCanvasTextLines(ctx, text, maxTextWidth);
    if (textLines.length === 0) {
        textLines = [String(text || "")];
    }
    var lineHeight = Math.max(14, Math.round(normalizeCaptionSize(captionStyle.size) * 1.2));
    var textBlockHeight = textLines.length * lineHeight;
    height = Math.max(minHeight, textBlockHeight + (padY * 2));
    tailTipX = (bubbleTailSide === "left") ? (x - 20) : (x + width + 20);
    tailTipY = y + height / 2;

    ctx.save();
    ctx.globalAlpha = Math.max(0, Math.min(1, opacity * bubbleOpacity));
    ctx.translate(x + width / 2 + offsetX, y + height / 2 + offsetY);
    ctx.scale(scale, scale);
    ctx.translate(-(x + width / 2), -(y + height / 2));
    console.log("drawSpeechBubble called with balloonType:", balloonType, "and text:", text);

    if (balloonType !== "shadow_text") {
        // Draw speech bubble with triangular tail, or thought bubble with round tail dots.
        var jaggedPoints = null;
        if (balloonType === "jagged" || balloonType === "comic_jagged") {
            var cx = x + (width / 2);
            var cy = y + (height / 2);
            var rx = (width / 2) - 2;
            var ry = (height / 2) - 2;
            var isComicJagged = (balloonType === "comic_jagged");
            var spikes = isComicJagged ? 34 : 22;
            var jagAmp = isComicJagged ? 12 : 6;
            jaggedPoints = [];
            ctx.beginPath();
            for (var ji = 0; ji < spikes * 2; ji++) {
                var ang = (Math.PI * 2 * ji) / (spikes * 2);
                var edge;
                if (ji % 2 === 0) {
                    var ampMul = 1;
                    if (isComicJagged) {
                        // Slightly vary comic spikes so the contour looks hand-drawn.
                        ampMul = 0.75 + ((ji % 6) * 0.1);
                    }
                    edge = 1 + ((jagAmp * ampMul) / Math.max(1, rx));
                } else {
                    edge = isComicJagged ? 0.95 : 1;
                }
                var px = cx + Math.cos(ang) * rx * edge;
                var py = cy + Math.sin(ang) * ry * edge;
                jaggedPoints.push({ x: px, y: py });
                if (ji === 0) {
                    ctx.moveTo(px, py);
                } else {
                    ctx.lineTo(px, py);
                }
            }
            ctx.closePath();
        } else if (balloonType === "thought") {
            var txc = x + (width / 2);
            var tyc = y + (height / 2);
            var rxThought = Math.max(20, (width / 2) - 10);
            var ryThought = Math.max(16, (height / 2) - 10);

            // Single continuous cloud contour (no overlapping circle outlines).
            var cloudPts = [
                { a: -2.75, r: 1.00 },
                { a: -2.25, r: 1.10 },
                { a: -1.70, r: 0.95 },
                { a: -1.15, r: 1.12 },
                { a: -0.55, r: 0.98 },
                { a: 0.00, r: 1.08 },
                { a: 0.55, r: 0.98 },
                { a: 1.15, r: 1.12 },
                { a: 1.70, r: 0.95 },
                { a: 2.25, r: 1.10 },
                { a: 2.75, r: 1.00 }
            ];

            var cloudXY = [];
            for (var cpi = 0; cpi < cloudPts.length; cpi++) {
                var cp = cloudPts[cpi];
                cloudXY.push({
                    x: txc + Math.cos(cp.a) * rxThought * cp.r,
                    y: tyc + Math.sin(cp.a) * ryThought * cp.r
                });
            }

            ctx.beginPath();
            for (var pi = 0; pi < cloudXY.length; pi++) {
                var curr = cloudXY[pi];
                var next = cloudXY[(pi + 1) % cloudXY.length];
                var midX = (curr.x + next.x) / 2;
                var midY = (curr.y + next.y) / 2;

                if (pi === 0) {
                    ctx.moveTo(midX, midY);
                }
                ctx.quadraticCurveTo(curr.x, curr.y, midX, midY);
            }
            ctx.closePath();
        } else {
            ctx.beginPath();
            ctx.moveTo(x + radius, y);
            ctx.lineTo(x + width - radius, y);
            ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
            if (showTail && balloonType === "speech" && bubbleTailSide === "right") {
                ctx.lineTo(x + width, y + height / 2 - 5);
                ctx.lineTo(tailTipX, tailTipY);
                ctx.lineTo(x + width, y + height / 2 + 5);
            }
            // back to right side
            ctx.lineTo(x + width, y + height - radius);
            ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
            ctx.lineTo(x + radius, y + height);
            ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
            if (showTail && balloonType === "speech" && bubbleTailSide === "left") {
                ctx.lineTo(x, y + height / 2 + 5);
                ctx.lineTo(tailTipX, tailTipY);
                ctx.lineTo(x, y + height / 2 - 5);
            }
            ctx.lineTo(x, y + radius);
            ctx.quadraticCurveTo(x, y, x + radius, y);
            ctx.closePath();
        }

        ctx.fillStyle = fillColor;
        ctx.fill();
        ctx.strokeStyle = borderColor;
        ctx.lineWidth = 2;
        if (balloonType !== "jagged" && balloonType !== "comic_jagged") {
            ctx.stroke();
        }

        if (balloonType === "jagged" || balloonType === "comic_jagged") {
            if (!showTail) {
                ctx.strokeStyle = borderColor;
                ctx.lineWidth = (balloonType === "comic_jagged") ? 2.5 : 2;
                ctx.stroke();
            } else {
            // Keep jagged bubble pointing at icon using a speech-style tail.
            var isComicTail = (balloonType === "comic_jagged");
            var seamHalfHeight = (balloonType === "comic_jagged") ? 10 : 8;
            // Mask the body stroke seam so the outline appears to flow into the tail.
            ctx.beginPath();
            if (bubbleTailSide === "left") {
                ctx.moveTo(x + 3, y + height / 2 - seamHalfHeight);
                ctx.lineTo(x - 7, y + height / 2);
                ctx.lineTo(x + 3, y + height / 2 + seamHalfHeight);
            } else {
                ctx.moveTo(x + width - 3, y + height / 2 - seamHalfHeight);
                ctx.lineTo(x + width + 7, y + height / 2);
                ctx.lineTo(x + width - 3, y + height / 2 + seamHalfHeight);
            }
            ctx.closePath();
            ctx.fillStyle = fillColor;
            ctx.fill();

            var tailTopY = y + height / 2 - (isComicTail ? 8 : 6);
            var tailBotY = y + height / 2 + (isComicTail ? 8 : 6);
            var jagStep1 = isComicTail ? 5 : 3;
            var jagStep2 = isComicTail ? 10 : 6;
            var tailTopPoints;
            var tailBottomPoints;
            var tailBaseTop;
            var tailBaseBottom;

            if (bubbleTailSide === "left") {
                tailBaseTop = { x: x + 1, y: tailTopY };
                tailBaseBottom = { x: x + 1, y: tailBotY };
                tailTopPoints = [
                    { x: x - jagStep1, y: tailTopY + 2 },
                    { x: x - jagStep2, y: tailTopY - 1 }
                ];
                tailBottomPoints = [
                    { x: x - jagStep2, y: tailBotY + 1 },
                    { x: x - jagStep1, y: tailBotY - 2 }
                ];
            } else {
                tailBaseTop = { x: x + width - 1, y: tailTopY };
                tailBaseBottom = { x: x + width - 1, y: tailBotY };
                tailTopPoints = [
                    { x: x + width + jagStep1, y: tailTopY + 2 },
                    { x: x + width + jagStep2, y: tailTopY - 1 }
                ];
                tailBottomPoints = [
                    { x: x + width + jagStep2, y: tailBotY + 1 },
                    { x: x + width + jagStep1, y: tailBotY - 2 }
                ];
            }

            ctx.beginPath();
            ctx.moveTo(tailBaseTop.x, tailBaseTop.y);
            for (var ttp = 0; ttp < tailTopPoints.length; ttp++) {
                ctx.lineTo(tailTopPoints[ttp].x, tailTopPoints[ttp].y);
            }
            ctx.lineTo(tailTipX, tailTipY);
            for (var tbp = 0; tbp < tailBottomPoints.length; tbp++) {
                ctx.lineTo(tailBottomPoints[tbp].x, tailBottomPoints[tbp].y);
            }
            ctx.lineTo(tailBaseBottom.x, tailBaseBottom.y);
            ctx.closePath();
            ctx.fillStyle = fillColor;
            ctx.fill();

            // Draw one combined contour so border flows into tail with no seam.
            if (jaggedPoints && jaggedPoints.length > 5) {
                var sideX = (bubbleTailSide === "left") ? x : (x + width);
                var targetTopX = sideX;
                var targetTopY = tailTopY;
                var targetBottomX = sideX;
                var targetBottomY = tailBotY;
                var targetCenterX = sideX;
                var targetCenterY = y + height / 2;

                var findNearestIdx = function(tx, ty) {
                    var bestIdx = 0;
                    var bestD = Infinity;
                    for (var pi = 0; pi < jaggedPoints.length; pi++) {
                        var dx = jaggedPoints[pi].x - tx;
                        var dy = jaggedPoints[pi].y - ty;
                        var d2 = (dx * dx) + (dy * dy);
                        if (d2 < bestD) {
                            bestD = d2;
                            bestIdx = pi;
                        }
                    }
                    return bestIdx;
                };

                var idxTop = findNearestIdx(targetTopX, targetTopY);
                var idxBottom = findNearestIdx(targetBottomX, targetBottomY);
                var idxCenter = findNearestIdx(targetCenterX, targetCenterY);
                var plen = jaggedPoints.length;

                var pathIncludes = function(startIdx, endIdx, stepDir, needleIdx) {
                    var ii = (startIdx + stepDir + plen) % plen;
                    while (true) {
                        if (ii === needleIdx) {
                            return true;
                        }
                        if (ii === endIdx) {
                            return false;
                        }
                        ii = (ii + stepDir + plen) % plen;
                    }
                };

                // Choose traversal direction that goes around the far side (not through side center seam).
                var step = pathIncludes(idxBottom, idxTop, 1, idxCenter) ? -1 : 1;

                ctx.beginPath();
                ctx.moveTo(jaggedPoints[idxBottom].x, jaggedPoints[idxBottom].y);
                var ti = (idxBottom + step + plen) % plen;
                while (true) {
                    ctx.lineTo(jaggedPoints[ti].x, jaggedPoints[ti].y);
                    if (ti === idxTop) {
                        break;
                    }
                    ti = (ti + step + plen) % plen;
                }
                ctx.lineTo(tailBaseTop.x, tailBaseTop.y);
                for (var ctp = 0; ctp < tailTopPoints.length; ctp++) {
                    ctx.lineTo(tailTopPoints[ctp].x, tailTopPoints[ctp].y);
                }
                ctx.lineTo(tailTipX, tailTipY);
                for (var cbp = 0; cbp < tailBottomPoints.length; cbp++) {
                    ctx.lineTo(tailBottomPoints[cbp].x, tailBottomPoints[cbp].y);
                }
                ctx.lineTo(tailBaseBottom.x, tailBaseBottom.y);
                ctx.closePath();
            }

            ctx.strokeStyle = borderColor;
            ctx.lineWidth = (balloonType === "comic_jagged") ? 2.5 : 2;
            ctx.stroke();
            }
        }

        if (balloonType === "thought" && showTail) {
            var tailDots = (bubbleTailSide === "left")
                ? [
                    { x: x - 6, y: y + height / 2 + 5, r: 3.5 },
                    { x: x - 13, y: y + height / 2 + 2, r: 5 },
                    { x: tailTipX, y: tailTipY, r: 6.5 }
                ]
                : [
                    { x: x + width + 6, y: y + height / 2 + 5, r: 3.5 },
                    { x: x + width + 13, y: y + height / 2 + 2, r: 5 },
                    { x: tailTipX, y: tailTipY, r: 6.5 }
                ];
            for (var ti = 0; ti < tailDots.length; ti++) {
                var dot = tailDots[ti];
                ctx.beginPath();
                ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
                ctx.fillStyle = fillColor;
                ctx.fill();
                ctx.strokeStyle = borderColor;
                ctx.lineWidth = 1.6;
                ctx.stroke();
            }
        }

        ctx.fillStyle = textColor;
        ctx.font = textFont;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        var textStartY = y + (height - textBlockHeight) / 2 + (lineHeight / 2);
        for (var li = 0; li < textLines.length; li++) {
            ctx.fillText(textLines[li], x + width / 2, textStartY + (li * lineHeight));
        }
    } else {
        // Text-only mode with a pseudo shadow gradient built from bubble background/border colors.
        var tx = x + width / 2;
        var shadowTopY = y + (height - textBlockHeight) / 2 + (lineHeight / 2);
        ctx.font = textFont;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        for (var sli = 0; sli < textLines.length; sli++) {
            var ty = shadowTopY + (sli * lineHeight);
            var shadowGradient = ctx.createLinearGradient(tx - (width / 2), ty - 12, tx + (width / 2), ty + 12);
            shadowGradient.addColorStop(0, fillColor);
            shadowGradient.addColorStop(1, borderColor);
            ctx.fillStyle = shadowGradient;
            ctx.fillText(textLines[sli], tx + 2, ty + 2);
            ctx.fillStyle = textColor;
            ctx.fillText(textLines[sli], tx, ty);
        }
    }
    ctx.restore();
}

 

var selectedImages = []; // Now array of {index: number, text: string}

var captionFontFamilyOptions = [
    "Arial",
    "Verdana",
    "Trebuchet MS",
    "Georgia",
    "Times New Roman",
    "Courier New"
];

function createDefaultSelectedImage(index, text) {
    return {
        index: index,
        text: (typeof text === "string") ? text : "",
        isPosterFrame: false,
        sellerIconFile: "",
        sellerIconSide: "right",
        stickerFile: "",
        stickerShape: "rounded",
        stickerPlacement: "top_right",
        stickerShadow: false,
        titleText: "",
        effectName: "",
        effectOptions: null,
        balloonType: "speech",
        bubbleTextColor: "#000000",
        bubbleBgColor: "#ffffff",
        bubbleBorderColor: "#000000",
        captionBold: false,
        captionItalic: false,
        captionSize: 16,
        captionFontFamily: "Arial",
        titleBubbleTextColor: "#000000",
        titleBubbleBgColor: "#ffffff",
        titleBubbleBorderColor: "#000000",
        titleBubbleOpacity: 1,
        titlePlacement: "top_center",
        bubbleOpacity: 1,
        showTail: true,
        titleType: "shadow_text",
        titleTextColor: "#ffffff",
        titleShadowBgColor: "#000000",
        titleShadowBorderColor: "#333333",
        titleBold: true,
        titleItalic: false,
        titleSize: 24,
        titleFontFamily: "Arial"
    };
}

function normalizeTitlePlacement(value) {
    var p = String(value || "").trim().toLowerCase();
    if (p === "top_left" || p === "top_center" || p === "top_right" || p === "middle_left" || p === "middle_center" || p === "middle_right") {
        return p;
    }
    return "top_center";
}

function getTitlePlacementPoint(canvasW, canvasH, placement) {
    var p = normalizeTitlePlacement(placement);
    var x;
    var y;

    if (p === "top_left" || p === "middle_left") {
        x = Math.round(canvasW * 0.22);
    } else if (p === "top_right" || p === "middle_right") {
        x = Math.round(canvasW * 0.78);
    } else {
        x = Math.round(canvasW * 0.5);
    }

    if (p.indexOf("middle_") === 0) {
        y = Math.round(canvasH * 0.42);
    } else {
        y = 88;
    }

    return {
        x: x,
        y: y
    };
}

function getTitleBubblePlacementRect(canvasW, canvasH, bubbleW, placement) {
    var p = normalizeTitlePlacement(placement);
    var x;
    var y;
    var margin = 12;

    if (p === "top_left" || p === "middle_left") {
        x = margin;
    } else if (p === "top_right" || p === "middle_right") {
        x = canvasW - bubbleW - margin;
    } else {
        x = Math.round((canvasW - bubbleW) / 2);
    }

    if (p.indexOf("middle_") === 0) {
        y = Math.round((canvasH * 0.42) - 32);
    } else {
        y = 26;
    }

    y = Math.max(10, Math.min(canvasH - 70, y));

    return {
        x: Math.round(Math.max(8, Math.min(canvasW - bubbleW - 8, x))),
        y: y
    };
}

function getStickerPlacementRect(canvasW, canvasH, stickerSize, placement) {
    var p = normalizeTitlePlacement(placement);
    var x;
    var y;
    var margin = 12;

    if (p === "top_left" || p === "middle_left") {
        x = margin;
    } else if (p === "top_right" || p === "middle_right") {
        x = canvasW - stickerSize - margin;
    } else {
        x = Math.round((canvasW - stickerSize) / 2);
    }

    if (p.indexOf("middle_") === 0) {
        y = Math.round((canvasH * 0.42) - (stickerSize / 2));
    } else {
        y = margin;
    }

    return {
        x: Math.round(Math.max(0, Math.min(canvasW - stickerSize, x))),
        y: Math.round(Math.max(0, Math.min(canvasH - stickerSize, y)))
    };
}

function normalizeCaptionFontFamily(fontFamily) {
    var f = String(fontFamily || "").trim();
    if (captionFontFamilyOptions.indexOf(f) !== -1) {
        return f;
    }
    return "Arial";
}

function normalizeCaptionSize(size) {
    var n = parseInt(size, 10);
    if (!isNaN(n)) {
        return Math.max(12, Math.min(40, n));
    }
    return 16;
}

function buildCaptionFontString(captionStyle) {
    captionStyle = captionStyle || {};
    var parts = [];
    if (captionStyle.italic) {
        parts.push("italic");
    }
    if (captionStyle.bold) {
        parts.push("bold");
    }
    parts.push(normalizeCaptionSize(captionStyle.size) + "px");
    var ff = normalizeCaptionFontFamily(captionStyle.fontFamily);
    if (ff.indexOf(" ") !== -1) {
        parts.push("\"" + ff + "\"");
    } else {
        parts.push(ff);
    }
    return parts.join(" ");
}

function getWrappedCanvasTextLines(ctx, text, maxWidth) {
    var cleanText = String(text || "").replace(/\s+/g, " ").trim();
    if (!cleanText) {
        return [];
    }

    var words = cleanText.split(" ");
    var lines = [];
    var current = "";

    for (var wi = 0; wi < words.length; wi++) {
        var w = words[wi];
        var candidate = current ? (current + " " + w) : w;
        if (ctx.measureText(candidate).width <= maxWidth) {
            current = candidate;
            continue;
        }

        if (current) {
            lines.push(current);
            current = "";
        }

        // If one word is wider than the allowed width, split by characters.
        if (ctx.measureText(w).width > maxWidth) {
            var chunk = "";
            for (var ci = 0; ci < w.length; ci++) {
                var charCandidate = chunk + w.charAt(ci);
                if (chunk && ctx.measureText(charCandidate).width > maxWidth) {
                    lines.push(chunk);
                    chunk = w.charAt(ci);
                } else {
                    chunk = charCandidate;
                }
            }
            current = chunk;
        } else {
            current = w;
        }
    }

    if (current) {
        lines.push(current);
    }

    return lines;
}

function getImageEffectLabel(effectName) {
    if (!effectName) {
        return "Auto";
    }
    switch (effectName) {
        case "zoom_brightness":
            return "Zoom";
        case "pan_lr":
            return "Pan LR";
        case "pan_ud":
            return "Pan UD";
        case "slide_in":
            return "Slide";
        case "tilt":
            return "Tilt";
        case "cut_up":
            return "Cut";
        case "particle":
            return "Particle";
        case "none":
            return "None";
        default:
            return effectName;
    }
}

function cloneFramesForDebug(frames) {
    try {
        return JSON.parse(JSON.stringify(frames || []));
    } catch (e) {
        return frames || [];
    }
}

function syncSelectedImagesFromSortable(dbgMeta) {
    var beforeFrames = cloneFramesForDebug(selectedImages);
    var items = document.querySelectorAll('#sortableImages .sortable-item');
    var domOrder = [];
    var newOrder = [];
    for (var j = 0; j < items.length; j++) {
        var dataIndex = parseInt(items[j].getAttribute('data-index'), 10);
        domOrder.push(dataIndex);
        var obj = selectedImages.find(function(s) { return s && s.index === dataIndex; });
        if (obj) {
            newOrder.push(obj);
        }
    }

    console.log('[FRAMES][DRAG][BEFORE]', {
        source: (dbgMeta && dbgMeta.source) ? dbgMeta.source : 'unknown',
        oldIndex: (dbgMeta && typeof dbgMeta.oldIndex === 'number') ? dbgMeta.oldIndex : null,
        newIndex: (dbgMeta && typeof dbgMeta.newIndex === 'number') ? dbgMeta.newIndex : null,
        domOrder: domOrder,
        selectedImagesBefore: beforeFrames,
        vdImgsBefore: (vdImgs || []).slice(),
        loadedImagesLenBefore: loadedImages ? loadedImages.length : 0
    });

    selectedImages = newOrder;
    applyImageOrder();

    console.log('[FRAMES][DRAG][AFTER]', {
        source: (dbgMeta && dbgMeta.source) ? dbgMeta.source : 'unknown',
        selectedImagesAfter: cloneFramesForDebug(selectedImages),
        vdImgsAfter: (vdImgs || []).slice(),
        loadedImagesLenAfter: loadedImages ? loadedImages.length : 0
    });
}

function initFramesSortable(sortableEl, sourceTag) {
    if (!sortableEl) {
        console.log('[FRAMES][SORTABLE][INIT_SKIP]', { source: sourceTag, reason: 'missing element' });
        return null;
    }
    if (typeof Sortable === 'undefined') {
        console.log('[FRAMES][SORTABLE][INIT_FAIL]', { source: sourceTag, reason: 'Sortable undefined' });
        return null;
    }

    console.log('[FRAMES][SORTABLE][INIT]', {
        source: sourceTag,
        childCount: sortableEl.querySelectorAll('.sortable-item').length,
        selectedImagesLen: selectedImages ? selectedImages.length : 0
    });

    return new Sortable(sortableEl, {
        animation: 150,
        handle: '.drag-handle',
        onChoose: function(evt) {
            console.log('[FRAMES][SORTABLE][CHOOSE]', { source: sourceTag, oldIndex: evt.oldIndex });
        },
        onStart: function(evt) {
            console.log('[FRAMES][SORTABLE][START]', { source: sourceTag, oldIndex: evt.oldIndex });
        },
        onSort: function(evt) {
            console.log('[FRAMES][SORTABLE][SORT]', { source: sourceTag, oldIndex: evt.oldIndex, newIndex: evt.newIndex });
        },
        onUpdate: function(evt) {
            console.log('[FRAMES][SORTABLE][UPDATE]', { source: sourceTag, oldIndex: evt.oldIndex, newIndex: evt.newIndex });
        },
        onEnd: function(evt) {
            console.log('[FRAMES][SORTABLE][END]', { source: sourceTag, oldIndex: evt.oldIndex, newIndex: evt.newIndex });
            syncSelectedImagesFromSortable({ source: sourceTag, oldIndex: evt.oldIndex, newIndex: evt.newIndex });
        }
    });
}

// Function to get content for Images tab
function getImgTabContent() {
    ensurePosterFrameSelection();
    var html = '<div id="sortableImages" class="image-grid" style="display: flex; flex-wrap: wrap;">';
    for (var i = 0; i < selectedImages.length; i++) {
        var imgObj = selectedImages[i];
        var imgIndex = imgObj.index;
        var isPosterFrame = (imgObj.isPosterFrame === true);
        var effectLabel = getImageEffectLabel(imgObj.effectName || "");
        var effectBadgeClass = (imgObj.effectName && imgObj.effectName !== "") ? "bg-primary" : "bg-secondary";
        var balloonType = imgObj.balloonType || "speech";
        var balloonLabel = "S";
        var balloonTitle = "Speech";
        var balloonBadgeClass = "bg-dark";
        if (balloonType === "thought") {
            balloonLabel = "T";
            balloonTitle = "Thought";
            balloonBadgeClass = "bg-info";
        } else if (balloonType === "jagged") {
            balloonLabel = "J";
            balloonTitle = "Jagged";
            balloonBadgeClass = "bg-warning";
        } else if (balloonType === "comic_jagged") {
            balloonLabel = "CJ";
            balloonTitle = "Comic Jagged";
            balloonBadgeClass = "bg-danger";
        } else if (balloonType === "shadow_text") {
            balloonLabel = "Sh";
            balloonTitle = "Shadow Text";
            balloonBadgeClass = "bg-secondary";
        }
        html += '<div class="image-item sortable-item" data-index="' + imgIndex + '" style="margin: 5px; position: relative;">';
        html += '<div style="position: absolute; top: 0; right: 0; display: flex; flex-direction: column;">';
        html += '<div class="drag-handle" style="cursor: move; background: rgba(255,255,255,0.8); padding: 2px; z-index: 10;">&#9776;</div>';
        html += '<div onclick="togglePosterFrameBySourceIndex(' + imgIndex + ')" title="Toggle poster frame" style="cursor: pointer; background:' + (isPosterFrame ? '#ffd44d' : 'rgba(255,255,255,0.8)') + '; padding: 2px; font-size: 10px; font-weight: 700;">P</div>';
        html += '<div onclick="toggleImageSelection(' + imgIndex + ')" style="cursor: pointer; background: rgba(255,255,255,0.8); padding: 2px;">&#10007;</div>'; // ?
        html += '<div onclick="showImageSettingsBySourceIndex(' + imgIndex + ')" style="cursor: pointer; background: rgba(255,255,255,0.8); padding: 2px;">&#9881;</div>'; // ?
        html += '</div>';
        if (isPosterFrame) {
            html += '<span class="badge bg-warning text-dark" title="Poster frame" style="position:absolute;right:4px;bottom:4px;z-index:6;">Poster</span>';
        }
        html += '<span class="badge ' + effectBadgeClass + '" title="Effect: ' + effectLabel + '" onclick="showImageSettingsBySourceIndex(' + imgIndex + ')" style="position:absolute;left:4px;bottom:4px;z-index:5;cursor:pointer;">' + effectLabel + '</span>';
        html += '<span class="badge ' + balloonBadgeClass + '" title="' + balloonTitle + '" onclick="showImageSettingsBySourceIndex(' + imgIndex + ')" style="position:absolute;left:4px;top:4px;z-index:5;min-width:20px;text-align:center;cursor:pointer;">' + balloonLabel + '</span>';
        html += '<img src="' + vdImgs[i] + '" style="width: 120px; height: 120px; border: 2px solid blue;" />';
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
            html += '<img src="' + originalVdImgs[i] + '" style="width: 120px; height: 120px;" />';
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
    html += '<div style="margin-bottom:6px;">';
    html += '<label style="cursor:pointer;">';
    html += '<input type="radio" name="audioClipSel" value=""' + (!selectedAudioClipSrc ? ' checked' : '') + ' onclick="clearSelectedAudioClip()" /> No audio (silent video)';
    html += '</label>';
    html += '</div>';
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
    html += '<div style="margin-top:10px;" class="txtSmall txtClrGrey">Use the main Save button to create the video post.</div>';
    html += '</div>';
    return html;
}

function showImageSettingsBySourceIndex(sourceIndex) {
    if (!selectedImages || !selectedImages.length) {
        return;
    }
    var pos = selectedImages.findIndex(function(s) {
        return s && s.index === sourceIndex;
    });
    if (pos === -1) {
        console.log('[FRAMES][SETTINGS][MISS]', { sourceIndex: sourceIndex, selectedImagesLen: selectedImages.length });
        return;
    }
    showImageSettings(pos);
}

function togglePosterFrameBySourceIndex(sourceIndex) {
    var idx = parseInt(sourceIndex, 10);
    if (isNaN(idx) || !selectedImages || !selectedImages.length) {
        return;
    }

    var existsInSelected = selectedImages.some(function(s) {
        return s && s.index === idx;
    });
    if (!existsInSelected) {
        return;
    }

    if (posterFrameSourceIndex === idx) {
        posterFrameSourceIndex = -1;
    } else {
        posterFrameSourceIndex = idx;
    }
    ensurePosterFrameSelection();

    var imgsContent = document.getElementById("divImgsContent");
    if (imgsContent) {
        imgsContent.innerHTML = getImgTabContent();
        setTimeout(function() {
            initFramesSortable(document.getElementById('sortableImages'), 'togglePoster-sortable');
        }, 100);
    }
    updatePosterPrependedHint();
}

function getVideoFps() {
    return Math.max(3, Math.min(6, parseInt(videoFps || 3, 10)));
}

function getFrameIntervalMs() {
    return Math.floor(1000 / getVideoFps());
}

function setVideoFps(fps) {
    var parsed = parseInt(fps, 10);
    if (isNaN(parsed)) {
        return;
    }
    parsed = Math.max(3, Math.min(6, parsed));
    var currentSeconds = getFrameDurationSeconds();
    videoFps = parsed;
    framesPerImage = currentSeconds * videoFps;

    var fpsLbl = document.getElementById("frameFpsValue");
    if (fpsLbl) {
        fpsLbl.textContent = parsed + " fps";
    }
    var durationLbl = document.getElementById("frameDurationValue");
    if (durationLbl) {
        durationLbl.textContent = currentSeconds + "s";
    }
    logVidAudio("FPS_SET", { fps: videoFps, secondsPerFrame: currentSeconds, framesPerImage: framesPerImage });
}

function getFrameDurationSeconds() {
    var fps = getVideoFps();
    var fallbackFrames = fps * 3;
    return Math.max(2, Math.min(10, Math.round((framesPerImage || fallbackFrames) / fps)));
}

function setFrameDurationSeconds(seconds) {
    var sec = parseInt(seconds, 10);
    if (isNaN(sec)) {
        return;
    }
    sec = Math.max(2, Math.min(10, sec));
    framesPerImage = sec * getVideoFps();
    var lbl = document.getElementById("frameDurationValue");
    if (lbl) {
        lbl.textContent = sec + "s";
    }
    logVidAudio("FRAME_DURATION_SET", { secondsPerFrame: sec, framesPerImage: framesPerImage });
}

function getSettingsTabContent() {
    ensureVideoEncodeProfileLoaded();
    var currentSec = getFrameDurationSeconds();
    var currentFps = getVideoFps();
    var html = '<div style="padding:10px;">';
    html += '<div class="txtSmall" style="margin-bottom:8px;">Playback FPS:</div>';
    html += '<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">';
    html += '<select id="frameFpsSelect" class="form-select" style="max-width:180px;" onchange="setVideoFps(this.value)">';
    for (var f = 3; f <= 6; f++) {
        html += '<option value="' + f + '"' + (f === currentFps ? ' selected' : '') + '>' + f + ' fps</option>';
    }
    html += '</select>';
    html += '<span id="frameFpsValue" class="txtSmall txtClrGrey">' + currentFps + ' fps</span>';
    html += '</div>';
    html += '<div class="txtSmall" style="margin-bottom:8px;">Frame duration (time each frame is shown):</div>';
    html += '<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">';
    html += '<select id="frameDurationSelect" class="form-select" style="max-width:180px;" onchange="setFrameDurationSeconds(this.value)">';
    for (var s = 2; s <= 10; s++) {
        html += '<option value="' + s + '"' + (s === currentSec ? ' selected' : '') + '>' + s + ' second' + (s === 1 ? '' : 's') + '</option>';
    }
    html += '</select>';
    html += '<span id="frameDurationValue" class="txtSmall txtClrGrey">' + currentSec + 's</span>';
    html += '</div>';
    html += '<div style="margin-top:8px;" class="txtSmall txtClrGrey">Range: current default to 3 seconds per frame.</div>';
    html += '<div class="txtSmall" style="margin-top:10px;margin-bottom:8px;">Bandwidth profile:</div>';
    html += '<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">';
    html += '<select id="videoEncodeProfileSelect" class="form-select" style="max-width:220px;" onchange="setVideoEncodeProfile(this.value)">';
    html += '<option value="balanced"' + (videoEncodeProfile === "balanced" ? ' selected' : '') + '>Balanced quality</option>';
    html += '<option value="low"' + (videoEncodeProfile === "low" ? ' selected' : '') + '>Low bandwidth</option>';
    html += '<option value="auto_1mb"' + (videoEncodeProfile === "auto_1mb" ? ' selected' : '') + '>Target ~1 MB</option>';
    html += '</select>';
    html += '<span class="txtSmall txtClrGrey">Applies to exported video</span>';
    html += '</div>';
    html += '<div id="videoOutputFormatHint" class="txtSmall txtClrGrey" style="margin-top:8px;">Output format: auto (device default)</div>';
    html += '</div>';
    return html;
}

function refreshSettingsTabHints() {
    updateVideoOutputFormatHint(lastVideoOutputMimeType);
}

function updateVideoOutputFormatHint(mimeType) {
    var hint = document.getElementById("videoOutputFormatHint");
    if (!hint) {
        return;
    }
    var mt = (mimeType || "").trim();
    if (!mt) {
        hint.textContent = "Output format: auto (device default)";
        return;
    }
    hint.textContent = "Output format: " + mt;
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

function ensureVideoEncodeProfileLoaded() {
    if (videoEncodeProfileLoaded === "yes") {
        return;
    }
    videoEncodeProfileLoaded = "yes";
    try {
        var savedProfile = localStorage.getItem(videoEncodeProfileStorageKey);
        if (savedProfile === "balanced" || savedProfile === "low" || savedProfile === "auto_1mb") {
            videoEncodeProfile = savedProfile;
        }
    } catch (e) {
        logVidAudio("ENCODE_PROFILE_LOAD_SKIP", String(e));
    }
}

function persistVideoEncodeProfile() {
    try {
        localStorage.setItem(videoEncodeProfileStorageKey, videoEncodeProfile);
    } catch (e) {
        logVidAudio("ENCODE_PROFILE_SAVE_SKIP", String(e));
    }
}

function setVideoEncodeProfile(profile) {
    if (profile !== "balanced" && profile !== "low" && profile !== "auto_1mb") {
        return;
    }
    videoEncodeProfile = profile;
    persistVideoEncodeProfile();
    logVidAudio("ENCODE_PROFILE_SET", { profile: videoEncodeProfile });
    updateVideoOutputFormatHint(lastVideoOutputMimeType);
}

function setSelectedAudioClip(index) {
    if (!audioClipOptions[index]) {
        return;
    }
    selectedAudioClipSrc = 'js/thirdp/misc/' + audioClipOptions[index].file;
    console.log('Selected audio clip:', selectedAudioClipSrc);
}

function clearSelectedAudioClip() {
    selectedAudioClipSrc = "";
    console.log('Selected audio clip: none (silent video)');
}

function previewSelectedAudioClip() {
    if (!selectedAudioClipSrc) {
        alert('Select an audio clip first.');
        return;
    }

    // Reuse the Video tab preview surface and tab-switch handler logic.
    switchToVideoTabForPreview(true);
}

function switchToVideoTabForPreview(triggerPreview) {
    var videoTabLink = document.querySelector('.nav-tabs a[href="#videoTab"]');
    if (videoTabLink) {
        videoTabLink.click();
        return;
    }

    if (triggerPreview === true) {
        handleVideoTabPreviewClick();
    }
}

async function previewVideoWithSelectedAudio(audioSrc) {
    if (isAudioPreviewInProgress === "yes") {
        logVidAudio("PREVIEW_SKIP_BUSY");
        return;
    }

    var previewBtn = document.getElementById("btnPreview");
    var audioElement = null;
    isAudioPreviewInProgress = "yes";
    previewStopRequested = "no";
    if (previewBtn) {
        previewBtn.disabled = true;
    }

    try {
        await prepStandaloneVideoRenderState();
        activeImageEffects = [];
        activeBubbleEffects = [];

        var fps = getVideoFps();
        var videoDurationSec = (loadedImages.length * framesPerImage) / fps;
        var targetDurationSec = videoDurationSec;

        if (audioSrc) {
            audioElement = new Audio(audioSrc);
            audioElement.preload = "auto";
            activePreviewAudioElement = audioElement;

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
            logVidAudio("PREVIEW_AUDIO_METADATA", {
                status: metadataStatus,
                duration: audioElement.duration,
                mode: videoAudioLengthMode
            });

            if (videoAudioLengthMode === "extend" && !isNaN(audioElement.duration) && audioElement.duration > 0) {
                targetDurationSec = Math.max(videoDurationSec, audioElement.duration);
            }

            try {
                await audioElement.play();
                logVidAudio("PREVIEW_AUDIO_PLAY_OK", { currentTime: audioElement.currentTime });
            } catch (e) {
                logVidAudio("PREVIEW_AUDIO_PLAY_BLOCKED", String(e));
            }
        }

        logVidAudio("PREVIEW_RENDER_START", {
            fps: fps,
            videoDurationSec: videoDurationSec,
            targetDurationSec: targetDurationSec
        });
        await renderFramesStandaloneRealtime(fps, targetDurationSec, function() {
            return previewStopRequested === "yes";
        });
        logVidAudio("PREVIEW_RENDER_DONE", { finalFrameIndex: vdIncr });

        if (audioElement && !audioElement.paused) {
            audioElement.pause();
            audioElement.currentTime = 0;
        }
        activePreviewAudioElement = null;
    } catch (e) {
        logVidAudio("PREVIEW_ERROR", String(e));
        alert("Preview failed: " + e);
    } finally {
        isAudioPreviewInProgress = "no";
        previewStopRequested = "no";
        activePreviewAudioElement = null;
        if (isPrvwngVid === "yes") {
            setPrevwUiState("no");
        }
        if (previewBtn) {
            previewBtn.disabled = false;
        }
    }
}

async function doCreateVid() {
    // Queue audio choice for setUPostAddSave(); empty means fallback to silent video render.
    pendingAudioClipSrcForPost = selectedAudioClipSrc || "";
    logVidAudio("QUEUE_AUDIO_FOR_POST", {
        audioSrc: pendingAudioClipSrcForPost,
        hasAudio: !!pendingAudioClipSrcForPost
    });

    // Important: do NOT call doPostAdd() here (that causes recursion via doPostAdd -> doCreateVid).
    // Keep the original pvideo flow: save placeholder canvas image first, then setPostAdd() inserts post.
    if (typeof savePstCanvasImg === "function") {
        if (typeof prepStandaloneVideoRenderState === "function") {
            try {
                await prepStandaloneVideoRenderState();
            } catch (e) {
                logVidAudio("POSTER_PREP_SKIP", String(e));
            }
        }
        var tmpCanvas = (typeof getTmpPstImgCnvs === "function") ? getTmpPstImgCnvs() : null;
        if (tmpCanvas) {
            savePstCanvasImg(tmpCanvas);
            return;
        }
    }

    // Last resort fallback if canvas capture path is unavailable.
    logVidAudio("NO_CANVAS_SAVE_FALLBACK");
    if (typeof setPostAdd === "function") {
        setPostAdd();
        return;
    }

    logVidAudio("NO_POST_FLOW_FALLBACK", { audioSrc: pendingAudioClipSrcForPost });
    await createVideoWithAudioStandalone(pendingAudioClipSrcForPost, true);
}

function hasPendingAudioClipSrcForPost() {
    return !!pendingAudioClipSrcForPost;
}

function consumePendingAudioClipSrcForPost() {
    var src = pendingAudioClipSrcForPost;
    pendingAudioClipSrcForPost = "";
    return src;
}

function escHtmlAttr(str) {
    return String(str || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function normalizeHexColor(color, fallback) {
    var v = String(color || "").trim();
    if (/^#[0-9a-fA-F]{3}$/.test(v) || /^#[0-9a-fA-F]{6}$/.test(v)) {
        return v;
    }
    return fallback;
}

function escJsSingleQuoted(str) {
    return String(str || "").replace(/\\/g, "\\\\").replace(/'/g, "\\'");
}

function isNoSellerIconValue(iconFile) {
    return String(iconFile || "").trim() === NO_SELLER_ICON_VALUE;
}

function isNoStickerValue(file) {
    return String(file || "").trim() === NO_STICKER_VALUE;
}

function onImageSettingsNuDropdownChanged(selectId, tDDCBel, selectedValue, selectedText) {
    var selectEl = document.getElementById(selectId);
    if (!selectEl) {
        return;
    }
    selectEl.value = selectedValue;
    try {
        var ev = new Event("change", { bubbles: true });
        selectEl.dispatchEvent(ev);
    } catch (e) {
        if (typeof document.createEvent === "function") {
            var legacyEv = document.createEvent("Event");
            legacyEv.initEvent("change", true, true);
            selectEl.dispatchEvent(legacyEv);
        }
    }
}

function enhanceImageSettingsSelectWithNuDrop(selectId, labelText, iconMap) {
    var selectEl = document.getElementById(selectId);
    if (!selectEl) {
        return;
    }
    if (selectEl.getAttribute("data-nu-dd-applied") === "yes") {
        return;
    }
    if (typeof JSSHOP === "undefined" || !JSSHOP.ui || typeof JSSHOP.ui.getNuBSdropDstr !== "function") {
        return;
    }

    var kvpObj = {};
    for (var i = 0; i < selectEl.options.length; i++) {
        var opt = selectEl.options[i];
        kvpObj[String(opt.value)] = String(opt.text || opt.value || "");
    }

    var ddObj = {};
    ddObj["ddtype"] = "noQvalue";
    ddObj["fld"] = selectId;
    ddObj["lbl"] = labelText || "Select";
    ddObj["val"] = selectEl.value;
    ddObj["kvpObj"] = kvpObj;
    ddObj["cb"] = "onImageSettingsNuDropdownChanged";
    ddObj["pload"] = selectId;
    ddObj["fldcls"] = "dropdown-toggle crsrPointer txtClrHdr txtDecorUline txtBold txtSmall slmtable brdrClrHdr";
    ddObj["lblcls"] = "txtSmall";
    ddObj["valcls"] = "txtSmall txtBold";
    ddObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
    ddObj["horvert"] = "horizontal";
    ddObj["icn"] = "noQvalue";
    ddObj["kvIcnsObj"] = iconMap || {};

    var wrap = document.createElement("div");
    wrap.id = selectId + "_nu_wrap";
    wrap.style.marginTop = "6px";
    wrap.innerHTML = JSSHOP.ui.getNuBSdropDstr(ddObj);
    if (selectEl.parentNode) {
        selectEl.parentNode.insertBefore(wrap, selectEl.nextSibling);
    }
    selectEl.style.display = "none";
    selectEl.setAttribute("data-nu-dd-applied", "yes");
}

function enhanceShowImageSettingsDropdowns(prefix) {
    var p = String(prefix || "");
    if (!p) {
        return;
    }

    enhanceImageSettingsSelectWithNuDrop(p + "_frame_title_type", "Title Style", {
        speech: "&#xe0ca;",
        thought: "&#xe8f2;",
        jagged: "&#xe3a5;",
        comic_jagged: "&#xe3a5;",
        shadow_text: "&#xe3b8;"
    });

    enhanceImageSettingsSelectWithNuDrop(p + "_frame_title_placement", "Title Placement", {
        top_left: "&#xe5d8;",
        top_center: "&#xe5d8;",
        top_right: "&#xe5d8;",
        middle_left: "&#xe5d3;",
        middle_center: "&#xe5d3;",
        middle_right: "&#xe5d3;"
    });

    enhanceImageSettingsSelectWithNuDrop(p + "_frame_title_font", "Font Family", {
        Arial: "&#xe245;",
        Verdana: "&#xe245;",
        "Trebuchet MS": "&#xe245;",
        Georgia: "&#xe245;",
        "Times New Roman": "&#xe245;",
        "Courier New": "&#xe245;"
    });

    enhanceImageSettingsSelectWithNuDrop(p + "_caption_font", "Caption Font", {
        Arial: "&#xe245;",
        Verdana: "&#xe245;",
        "Trebuchet MS": "&#xe245;",
        Georgia: "&#xe245;",
        "Times New Roman": "&#xe245;",
        "Courier New": "&#xe245;"
    });

    enhanceImageSettingsSelectWithNuDrop(p + "_balloon_type", "Balloon Type", {
        speech: "&#xe0ca;",
        thought: "&#xe8f2;",
        jagged: "&#xe3a5;",
        comic_jagged: "&#xe3a5;",
        shadow_text: "&#xe3b8;"
    });

    enhanceImageSettingsSelectWithNuDrop(p + "_seller_icon_side", "Seller Icon Side", {
        right: "&#xe31c;",
        left: "&#xe314;"
    });

    enhanceImageSettingsSelectWithNuDrop(p + "_effect", "Frame Effect", {
        "": "&#xe40a;",
        none: "&#xe14c;",
        zoom_brightness: "&#xe8ff;",
        pan_lr: "&#xe8d4;",
        pan_ud: "&#xe5d3;",
        slide_in: "&#xe5c8;",
        tilt: "&#xe3c4;",
        cut_up: "&#xe3b7;",
        particle: "&#xef4a;"
    });

    enhanceImageSettingsSelectWithNuDrop(p + "_sticker_shape", "Sticker Shape", {
        rounded: "&#xe3af;",
        square: "&#xe86c;"
    });

    enhanceImageSettingsSelectWithNuDrop(p + "_sticker_placement", "Sticker Placement", {
        top_left: "&#xe5d8;",
        top_center: "&#xe5d8;",
        top_right: "&#xe5d8;",
        middle_left: "&#xe5d3;",
        middle_center: "&#xe5d3;",
        middle_right: "&#xe5d3;"
    });
}

function getSellerIconSrc(iconFile) {
    var f = String(iconFile || "").trim();
    if (!f || isNoSellerIconValue(f)) {
        return "";
    }
    if (/^https?:\/\//i.test(f) || /^data:/i.test(f)) {
        return f;
    }
    return "images/user/" + f;
}

function getCurrentSellerIconFile() {
    return (currQUsrObj && currQUsrObj.u_icon) ? currQUsrObj.u_icon : "";
}

function getFrameSellerIconFile(imageIndex) {
    if (selectedImages && selectedImages[imageIndex] && selectedImages[imageIndex].sellerIconFile) {
        var frameIconFile = String(selectedImages[imageIndex].sellerIconFile || "").trim();
        if (isNoSellerIconValue(frameIconFile)) {
            return "";
        }
        return frameIconFile;
    }
    return getCurrentSellerIconFile();
}

function getFrameSellerIconSide(imageIndex) {
    if (selectedImages && selectedImages[imageIndex] && selectedImages[imageIndex].sellerIconSide === "left") {
        return "left";
    }
    return "right";
}

function getVideoFramePropertyIdsForPost() {
    var ids = [];
    var propsArr = (window.selectedPropsArr && window.selectedPropsArr.length) ? window.selectedPropsArr : null;
    if (!propsArr || !selectedImages || !selectedImages.length) {
        return ids;
    }

    for (var i = 0; i < selectedImages.length; i++) {
        var imgObj = selectedImages[i];
        if (!imgObj || typeof imgObj.index === "undefined") {
            continue;
        }
        var srcIdx = parseInt(imgObj.index, 10);
        if (isNaN(srcIdx) || !propsArr[srcIdx]) {
            continue;
        }
        var propId = propsArr[srcIdx]._id;
        if (typeof propId !== "undefined" && propId !== null) {
            ids.push(String(propId));
        }
    }
    return ids;
}

function getSellerIconImage(iconFile) {
    var src = getSellerIconSrc(iconFile);
    if (!src) {
        return null;
    }
    if (!sellerIconImageCache[src]) {
        var img = new Image();
        img.src = src;
        sellerIconImageCache[src] = img;
    }
    return sellerIconImageCache[src];
}

function setSellerIconSelectionFromPicker(iconFile, prefix) {
    var inputEl = document.getElementById(prefix + "_seller_icon_file");
    if (inputEl) {
        if (iconFile === "__DEFAULT__") {
            inputEl.value = "";
        } else if (iconFile === NO_SELLER_ICON_VALUE) {
            inputEl.value = NO_SELLER_ICON_VALUE;
        } else {
            inputEl.value = String(iconFile || "");
        }
    }
    renderSellerIconPicker(prefix);
    renderImageSettingsCaptionSidePreview(prefix, false);
}

function buildSellerIconPickerHtml(prefix, mediaArr) {
    var html = '';
    var inputEl = document.getElementById(prefix + "_seller_icon_file");
    var stagedFile = inputEl ? String(inputEl.value || "").trim() : "";
    var currentFile = stagedFile || getCurrentSellerIconFile();
    var defaultFile = (currQUsrObj && currQUsrObj.u_icon) ? currQUsrObj.u_icon : "";
    var noIconSelected = isNoSellerIconValue(currentFile);
    var defaultSelected = !stagedFile || currentFile === defaultFile;
    var defaultSrc = getSellerIconSrc(defaultFile);

    html += '<div style="display:flex;flex-wrap:wrap;gap:8px;">';

    html += '<div onclick="setSellerIconSelectionFromPicker(\'' + NO_SELLER_ICON_VALUE + '\',\'' + escJsSingleQuoted(prefix) + '\')" style="cursor:pointer;width:92px;border:2px solid ' + (noIconSelected ? '#0d6efd' : '#dee2e6') + ';border-radius:8px;padding:6px;background:#fff;text-align:center;">';
    html += '<div style="width:64px;height:64px;border-radius:50%;margin:0 auto;border:1px dashed #adb5bd;background:repeating-linear-gradient(45deg,#f1f3f5,#f1f3f5 6px,#e9ecef 6px,#e9ecef 12px);display:flex;align-items:center;justify-content:center;color:#6c757d;font-size:11px;font-weight:600;">No Icon</div>';
    html += '<div style="font-size:11px;margin-top:6px;">No Icon</div>';
    html += '</div>';

    if (defaultSrc) {
        html += '<div onclick="setSellerIconSelectionFromPicker(\'__DEFAULT__\',\'' + escJsSingleQuoted(prefix) + '\')" style="cursor:pointer;width:92px;border:2px solid ' + (defaultSelected ? '#0d6efd' : '#dee2e6') + ';border-radius:8px;padding:6px;background:#fff;text-align:center;">';
        html += '<img src="' + escHtmlAttr(defaultSrc) + '" style="width:64px;height:64px;border-radius:50%;object-fit:cover;border:1px solid #ddd;" />';
        html += '<div style="font-size:11px;margin-top:6px;">Default</div>';
        html += '</div>';
    }

    for (var i = 0; i < mediaArr.length; i++) {
        var m = mediaArr[i];
        var file = m && m.m_file ? String(m.m_file) : "";
        var thumb = m && m.m_file_thumb ? String(m.m_file_thumb) : file;
        if (!file || !thumb) {
            continue;
        }
        var isSelected = currentFile === file;
        var title = m && m.m_title ? String(m.m_title) : "Icon";
        html += '<div onclick="setSellerIconSelectionFromPicker(\'' + escJsSingleQuoted(file) + '\',\'' + escJsSingleQuoted(prefix) + '\')" style="cursor:pointer;width:92px;border:2px solid ' + (isSelected ? '#0d6efd' : '#dee2e6') + ';border-radius:8px;padding:6px;background:#fff;text-align:center;">';
        html += '<img src="' + escHtmlAttr(getSellerIconSrc(thumb)) + '" style="width:64px;height:64px;border-radius:50%;object-fit:cover;border:1px solid #ddd;" />';
        html += '<div style="font-size:11px;margin-top:6px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' + escHtmlAttr(title) + '</div>';
        html += '</div>';
    }

    html += '</div>';
    return html;
}

function renderSellerIconPicker(prefix) {
    var targetEl = document.getElementById(prefix + "_seller_icon_list");
    if (!targetEl) {
        return;
    }
    var arr = (window.currQUsrMediaArr && window.currQUsrMediaArr.length) ? window.currQUsrMediaArr : [];
    targetEl.innerHTML = buildSellerIconPickerHtml(prefix, arr);
}

function setStickerSelectionFromPicker(file, prefix) {
    var inputEl = document.getElementById(prefix + "_sticker_file");
    if (inputEl) {
        inputEl.value = (file === NO_STICKER_VALUE) ? NO_STICKER_VALUE : String(file || "");
    }
    renderStickerPicker(prefix);
}

function buildStickerPickerHtml(prefix, mediaArr) {
    var html = '';
    var inputEl = document.getElementById(prefix + "_sticker_file");
    var stagedFile = inputEl ? String(inputEl.value || "").trim() : "";
    var currentFile = stagedFile;
    var noStickerSelected = !currentFile || isNoStickerValue(currentFile);

    html += '<div style="display:flex;flex-wrap:wrap;gap:8px;">';
    html += '<div onclick="setStickerSelectionFromPicker(\'' + NO_STICKER_VALUE + '\',\'' + escJsSingleQuoted(prefix) + '\')" style="cursor:pointer;width:92px;border:2px solid ' + (noStickerSelected ? '#0d6efd' : '#dee2e6') + ';border-radius:8px;padding:6px;background:#fff;text-align:center;">';
    html += '<div style="width:64px;height:64px;border-radius:10px;margin:0 auto;border:1px dashed #adb5bd;background:repeating-linear-gradient(45deg,#f1f3f5,#f1f3f5 6px,#e9ecef 6px,#e9ecef 12px);display:flex;align-items:center;justify-content:center;color:#6c757d;font-size:11px;font-weight:600;">No Sticker</div>';
    html += '<div style="font-size:11px;margin-top:6px;">No Sticker</div>';
    html += '</div>';

    for (var i = 0; i < mediaArr.length; i++) {
        var m = mediaArr[i];
        var file = m && m.m_file ? String(m.m_file) : "";
        var thumb = m && m.m_file_thumb ? String(m.m_file_thumb) : file;
        if (!file || !thumb) {
            continue;
        }
        var isSelected = currentFile === file;
        var title = m && m.m_title ? String(m.m_title) : "Sticker";
        html += '<div onclick="setStickerSelectionFromPicker(\'' + escJsSingleQuoted(file) + '\',\'' + escJsSingleQuoted(prefix) + '\')" style="cursor:pointer;width:92px;border:2px solid ' + (isSelected ? '#0d6efd' : '#dee2e6') + ';border-radius:8px;padding:6px;background:#fff;text-align:center;">';
        html += '<img src="' + escHtmlAttr(getSellerIconSrc(thumb)) + '" style="width:64px;height:64px;border-radius:8px;object-fit:cover;border:1px solid #ddd;" />';
        html += '<div style="font-size:11px;margin-top:6px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' + escHtmlAttr(title) + '</div>';
        html += '</div>';
    }

    html += '</div>';
    return html;
}

function renderStickerPicker(prefix) {
    var targetEl = document.getElementById(prefix + "_sticker_list");
    if (!targetEl) {
        return;
    }
    var arr = (window.currQUsrMediaArr && window.currQUsrMediaArr.length) ? window.currQUsrMediaArr : [];
    targetEl.innerHTML = buildStickerPickerHtml(prefix, arr);
}

function setSellerIconMediaForVideo(tA, tB, tC) {
    try {
        var arr = [];
        if (tB && tB.indexOf("_id") !== -1) {
            arr = JSON.parse(tB);
        }
        if (!Array.isArray(arr)) {
            arr = [];
        }
        window.currQUsrMediaArr = arr;
        if (sellerIconPickerPendingPrefix) {
            renderSellerIconPicker(sellerIconPickerPendingPrefix);
        }
        if (stickerPickerPendingPrefix) {
            renderStickerPicker(stickerPickerPendingPrefix);
        }
    } catch (e) {
        console.log("setSellerIconMediaForVideo: " + e);
    }
}

function initSellerIconPicker(prefix) {
    sellerIconPickerPendingPrefix = prefix;
    var targetEl = document.getElementById(prefix + "_seller_icon_list");
    if (!targetEl) {
        return;
    }
    targetEl.innerHTML = '<div class="small text-muted">Loading seller icons...</div>';

    if (window.currQUsrMediaArr && window.currQUsrMediaArr.length > 0) {
        renderSellerIconPicker(prefix);
        return;
    }

    var tmpFobj = {};
    tmpFobj["ws"] = "where m_uid=? and m_pid=? and m_rtype=?";
    tmpFobj["wa"] = [quid, quid, 5];
    tmpFobj["o"] = "m_vala desc";
    var oi = getNuDBFnvp("qmedia", 5, null, tmpFobj);
    doQComm(oi["rq"], null, "setSellerIconMediaForVideo");
}

function initStickerPicker(prefix) {
    stickerPickerPendingPrefix = prefix;
    var targetEl = document.getElementById(prefix + "_sticker_list");
    if (!targetEl) {
        return;
    }
    targetEl.innerHTML = '<div class="small text-muted">Loading stickers...</div>';

    if (window.currQUsrMediaArr && window.currQUsrMediaArr.length > 0) {
        renderStickerPicker(prefix);
        return;
    }

    var tmpFobj = {};
    tmpFobj["ws"] = "where m_uid=? and m_pid=? and m_rtype=?";
    tmpFobj["wa"] = [quid, quid, 5];
    tmpFobj["o"] = "m_vala desc";
    var oi = getNuDBFnvp("qmedia", 5, null, tmpFobj);
    doQComm(oi["rq"], null, "setSellerIconMediaForVideo");
}

function renderImageSettingsModalFxPreview(prefix) {
    var effectSel = document.getElementById(prefix + "_effect");
    var particleWrap = document.getElementById(prefix + "_particle_wrap");
    if (!effectSel || !particleWrap) {
        return;
    }
    var effectName = effectSel.value || "";
    particleWrap.style.display = (effectName === "particle") ? "block" : "none";
}

function renderImageSettingsShowTailState(prefix) {
    var balloonTypeEl = document.getElementById(prefix + "_balloon_type");
    var wrapEl = document.getElementById(prefix + "_show_tail_wrap");
    var yesEl = document.getElementById(prefix + "_show_tail_yes");
    var noEl = document.getElementById(prefix + "_show_tail_no");
    if (!balloonTypeEl || !wrapEl || !yesEl || !noEl) {
        return;
    }

    var isShadowText = (balloonTypeEl.value === "shadow_text");
    wrapEl.style.display = isShadowText ? "none" : "";
    yesEl.disabled = isShadowText;
    noEl.disabled = isShadowText;
}

function renderImageSettingsBubbleOpacityState(prefix) {
    var sliderEl = document.getElementById(prefix + "_bubble_opacity");
    var valueEl = document.getElementById(prefix + "_bubble_opacity_value");
    if (!sliderEl || !valueEl) {
        return;
    }
    var raw = parseInt(sliderEl.value, 10);
    if (isNaN(raw)) {
        raw = 100;
    }
    raw = Math.max(0, Math.min(100, raw));
    valueEl.textContent = raw + "%";
}

function renderImageSettingsTitleStyleState(prefix) {
    var typeEl = document.getElementById(prefix + "_frame_title_type");
    var shadowWrapEl = document.getElementById(prefix + "_frame_title_shadow_colors_wrap");
    var bubbleWrapEl = document.getElementById(prefix + "_frame_title_bubble_colors_wrap");
    if (!typeEl || !shadowWrapEl || !bubbleWrapEl) {
        return;
    }

    var isShadow = (typeEl.value === "shadow_text");
    shadowWrapEl.style.display = isShadow ? "" : "none";
    bubbleWrapEl.style.display = isShadow ? "none" : "";
}

function renderImageSettingsTitleBubbleOpacityState(prefix) {
    var sliderEl = document.getElementById(prefix + "_frame_title_bubble_opacity");
    var valueEl = document.getElementById(prefix + "_frame_title_bubble_opacity_value");
    if (!sliderEl || !valueEl) {
        return;
    }
    var raw = parseInt(sliderEl.value, 10);
    if (isNaN(raw)) {
        raw = 100;
    }
    raw = Math.max(0, Math.min(100, raw));
    valueEl.textContent = raw + "%";
}

function renderImageSettingsTitlePreview(prefix) {
    var titleEl = document.getElementById(prefix + "_frame_title_text");
    var typeEl = document.getElementById(prefix + "_frame_title_type");
    var placementEl = document.getElementById(prefix + "_frame_title_placement");
    var textColorEl = document.getElementById(prefix + "_frame_title_text_color");
    var bgColorEl = document.getElementById(prefix + "_frame_title_bg_color");
    var borderColorEl = document.getElementById(prefix + "_frame_title_border_color");
    var bubbleTextColorEl = document.getElementById(prefix + "_frame_title_bubble_text_color");
    var bubbleBgColorEl = document.getElementById(prefix + "_frame_title_bubble_bg_color");
    var bubbleBorderColorEl = document.getElementById(prefix + "_frame_title_bubble_border_color");
    var bubbleOpacityEl = document.getElementById(prefix + "_frame_title_bubble_opacity");
    var boldEl = document.getElementById(prefix + "_frame_title_bold");
    var italicEl = document.getElementById(prefix + "_frame_title_italic");
    var sizeEl = document.getElementById(prefix + "_frame_title_size");
    var fontEl = document.getElementById(prefix + "_frame_title_font");
    var previewFrameEl = document.getElementById(prefix + "_frame_title_preview_frame");
    var previewCanvasEl = document.getElementById(prefix + "_frame_title_preview_canvas");
    var previewEl = document.getElementById(prefix + "_frame_title_preview_text");
    var hintEl = document.getElementById(prefix + "_frame_title_preview_hint");

    if (!titleEl || !previewFrameEl || !previewCanvasEl || !hintEl) {
        return;
    }

    if (previewEl) {
        previewEl.style.display = "none";
    }

    var frameW = Math.max(1, Math.round(previewFrameEl.clientWidth || 160));
    var frameH = Math.max(1, Math.round(previewFrameEl.clientHeight || 160));
    if (previewCanvasEl.width !== frameW || previewCanvasEl.height !== frameH) {
        previewCanvasEl.width = frameW;
        previewCanvasEl.height = frameH;
    }
    var ctx = previewCanvasEl.getContext("2d");
    if (!ctx) {
        return;
    }
    ctx.clearRect(0, 0, previewCanvasEl.width, previewCanvasEl.height);

    var t = String(titleEl.value || "").trim();
    if (t === "") {
        hintEl.style.display = "";
        return;
    }

    var styleObj = {
        bold: !!(boldEl && boldEl.checked),
        italic: !!(italicEl && italicEl.checked),
        size: sizeEl ? normalizeCaptionSize(sizeEl.value) : 24,
        fontFamily: fontEl ? normalizeCaptionFontFamily(fontEl.value) : "Arial"
    };

    var textColor = normalizeHexColor(textColorEl ? textColorEl.value : "", "#ffffff");
    var bgColor = normalizeHexColor(bgColorEl ? bgColorEl.value : "", "#000000");
    var borderColor = normalizeHexColor(borderColorEl ? borderColorEl.value : "", "#333333");
    var bubbleTextColor = normalizeHexColor(bubbleTextColorEl ? bubbleTextColorEl.value : "", "#000000");
    var bubbleBgColor = normalizeHexColor(bubbleBgColorEl ? bubbleBgColorEl.value : "", "#ffffff");
    var bubbleBorderColor = normalizeHexColor(bubbleBorderColorEl ? bubbleBorderColorEl.value : "", "#000000");
    var bubbleOpacity = bubbleOpacityEl ? (parseInt(bubbleOpacityEl.value, 10) / 100) : 1;
    if (isNaN(bubbleOpacity)) {
        bubbleOpacity = 1;
    }
    bubbleOpacity = Math.max(0, Math.min(1, bubbleOpacity));
    var rawTitleType = typeEl ? typeEl.value : "shadow_text";
    var titleType = (rawTitleType === "speech" || rawTitleType === "thought" || rawTitleType === "jagged" || rawTitleType === "comic_jagged" || rawTitleType === "shadow_text")
        ? rawTitleType
        : "shadow_text";
    var titlePlacement = normalizeTitlePlacement(placementEl ? placementEl.value : "top_center");

    var virtualW = 340;
    var virtualH = 340;
    var scaleX = frameW / virtualW;
    var scaleY = frameH / virtualH;

    hintEl.style.display = "none";

    ctx.save();
    ctx.scale(scaleX, scaleY);

    if (titleType === "shadow_text") {
        var lineHeight = Math.max(14, Math.round(styleObj.size * 1.2));
        var maxWidth = Math.max(80, virtualW - 24);
        var titlePoint = getTitlePlacementPoint(virtualW, virtualH, titlePlacement);
        ctx.font = buildCaptionFontString(styleObj);
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        var lines = getWrappedCanvasTextLines(ctx, t, maxWidth);
        if (lines.length === 0) {
            lines = [t];
        }
        var firstY = titlePoint.y - ((lines.length - 1) * lineHeight) / 2;
        for (var li = 0; li < lines.length; li++) {
            var lineText = lines[li];
            var y = firstY + (li * lineHeight);
            var grad = ctx.createLinearGradient(Math.max(0, titlePoint.x - 80), y - 14, Math.min(virtualW, titlePoint.x + 80), y + 14);
            grad.addColorStop(0, bgColor);
            grad.addColorStop(1, borderColor);
            ctx.fillStyle = grad;
            ctx.fillText(lineText, titlePoint.x + 2, y + 2);
            ctx.fillStyle = textColor;
            ctx.fillText(lineText, titlePoint.x, y);
        }
    } else {
        var bubblePos = getTitleBubblePlacementRect(virtualW, virtualH, 195, titlePlacement);
        drawSpeechBubble(
            ctx,
            bubblePos.x,
            bubblePos.y,
            t,
            0,
            0,
            { opacity: 1, scale: 1, offsetX: 0, offsetY: 0 },
            titleType,
            {
                text: bubbleTextColor,
                bg: bubbleBgColor,
                border: bubbleBorderColor
            },
            styleObj,
            "right",
            false,
            bubbleOpacity
        );
    }

    ctx.restore();
}

function renderImageSettingsCaptionSidePreview(prefix, animate) {
    var sideEl = document.getElementById(prefix + "_seller_icon_side");
    var frameEl = document.getElementById(prefix + "_caption_side_preview_frame");
    var iconEl = document.getElementById(prefix + "_caption_side_preview_icon");
    var bubbleEl = document.getElementById(prefix + "_caption_side_preview_bubble");
    var tailEl = document.getElementById(prefix + "_caption_side_preview_tail");
    if (!sideEl || !frameEl || !iconEl || !bubbleEl || !tailEl) {
        return;
    }

    var side = (sideEl.value === "left") ? "left" : "right";
    var iconSize = 24;
    var frameW = Math.max(140, frameEl.clientWidth || 160);
    var bubbleW = 86;
    var iconX = (side === "left") ? 8 : (frameW - iconSize - 8);
    var bubbleX = (side === "left") ? (frameW - bubbleW - 10) : 10;
    var tailY = 22;

    iconEl.style.left = iconX + "px";
    bubbleEl.style.left = bubbleX + "px";

    var stagedFileEl = document.getElementById(prefix + "_seller_icon_file");
    var stagedFile = stagedFileEl ? String(stagedFileEl.value || "").trim() : "";
    var isNoIcon = isNoSellerIconValue(stagedFile);
    if (isNoIcon) {
        iconEl.style.display = "none";
        bubbleX = Math.round((frameW - bubbleW) / 2);
    } else {
        iconEl.style.display = "";
    }

    var iconSrc = getSellerIconSrc(stagedFile || getCurrentSellerIconFile());
    if (iconSrc) {
        iconEl.style.backgroundImage = "url('" + iconSrc.replace(/'/g, "\\'") + "')";
        iconEl.style.backgroundSize = "cover";
        iconEl.style.backgroundPosition = "center";
    } else {
        iconEl.style.backgroundImage = "radial-gradient(circle at 35% 35%, #fefefe, #c5ccd4)";
    }

    if (isNoIcon) {
        tailEl.style.display = "none";
    } else {
        tailEl.style.display = "";
        if (side === "left") {
            tailEl.style.left = (bubbleX - 7) + "px";
            tailEl.style.borderLeft = "0";
            tailEl.style.borderRight = "8px solid #ffffff";
        } else {
            tailEl.style.left = (bubbleX + bubbleW - 1) + "px";
            tailEl.style.borderRight = "0";
            tailEl.style.borderLeft = "8px solid #ffffff";
        }
        tailEl.style.top = tailY + "px";
        tailEl.style.borderTop = "6px solid transparent";
        tailEl.style.borderBottom = "6px solid transparent";
    }

    if (animate) {
        bubbleEl.style.transform = "translateY(-1px)";
        iconEl.style.transform = "scale(1.04)";
        setTimeout(function() {
            bubbleEl.style.transform = "translateY(0)";
            iconEl.style.transform = "scale(1)";
        }, 140);
    }
}

function saveImageSettingsModal(pos, prefix) {
    if (!selectedImages || !selectedImages[pos] || typeof selectedImages[pos] !== "object") {
        return;
    }

    var captionEl = document.getElementById(prefix + "_caption_text") || document.getElementById(prefix + "_title");
    var frameTitleEl = document.getElementById(prefix + "_frame_title_text");
    var frameTitleTypeEl = document.getElementById(prefix + "_frame_title_type");
    var frameTitlePlacementEl = document.getElementById(prefix + "_frame_title_placement");
    var frameTitleTextColorEl = document.getElementById(prefix + "_frame_title_text_color");
    var frameTitleBgColorEl = document.getElementById(prefix + "_frame_title_bg_color");
    var frameTitleBorderColorEl = document.getElementById(prefix + "_frame_title_border_color");
    var frameTitleBubbleTextColorEl = document.getElementById(prefix + "_frame_title_bubble_text_color");
    var frameTitleBubbleBgColorEl = document.getElementById(prefix + "_frame_title_bubble_bg_color");
    var frameTitleBubbleBorderColorEl = document.getElementById(prefix + "_frame_title_bubble_border_color");
    var frameTitleBubbleOpacityEl = document.getElementById(prefix + "_frame_title_bubble_opacity");
    var frameTitleBoldEl = document.getElementById(prefix + "_frame_title_bold");
    var frameTitleItalicEl = document.getElementById(prefix + "_frame_title_italic");
    var frameTitleSizeEl = document.getElementById(prefix + "_frame_title_size");
    var frameTitleFontEl = document.getElementById(prefix + "_frame_title_font");
    var balloonTypeEl = document.getElementById(prefix + "_balloon_type");
    var textColorEl = document.getElementById(prefix + "_text_color");
    var bgColorEl = document.getElementById(prefix + "_bg_color");
    var borderColorEl = document.getElementById(prefix + "_border_color");
    var captionBoldEl = document.getElementById(prefix + "_caption_bold");
    var captionItalicEl = document.getElementById(prefix + "_caption_italic");
    var captionSizeEl = document.getElementById(prefix + "_caption_size");
    var captionFontEl = document.getElementById(prefix + "_caption_font");
    var bubbleOpacityEl = document.getElementById(prefix + "_bubble_opacity");
    var showTailYesEl = document.getElementById(prefix + "_show_tail_yes");
    var showTailNoEl = document.getElementById(prefix + "_show_tail_no");
    var sellerIconSideEl = document.getElementById(prefix + "_seller_icon_side");
    var sellerIconFileEl = document.getElementById(prefix + "_seller_icon_file");
    var stickerFileEl = document.getElementById(prefix + "_sticker_file");
    var stickerShapeEl = document.getElementById(prefix + "_sticker_shape");
    var stickerPlacementEl = document.getElementById(prefix + "_sticker_placement");
    var stickerShadowEl = document.getElementById(prefix + "_sticker_shadow");
    var posterFrameEl = document.getElementById(prefix + "_poster_frame");
    var effectEl = document.getElementById(prefix + "_effect");
    var jsonEl = document.getElementById(prefix + "_opts_json");
    var pixelEl = document.getElementById(prefix + "_particle_pixel");
    var scatterEl = document.getElementById(prefix + "_particle_scatter");
    var speedEl = document.getElementById(prefix + "_particle_speed");

    if (captionEl) {
        selectedImages[pos].text = captionEl.value;
    }
    if (frameTitleEl) {
        selectedImages[pos].titleText = frameTitleEl.value;
    }
    if (frameTitleTypeEl) {
        if (frameTitleTypeEl.value === "speech" || frameTitleTypeEl.value === "thought" || frameTitleTypeEl.value === "jagged" || frameTitleTypeEl.value === "comic_jagged" || frameTitleTypeEl.value === "shadow_text") {
            selectedImages[pos].titleType = frameTitleTypeEl.value;
        } else {
            selectedImages[pos].titleType = "shadow_text";
        }
    }
    if (frameTitlePlacementEl) {
        selectedImages[pos].titlePlacement = normalizeTitlePlacement(frameTitlePlacementEl.value);
    }
    if (frameTitleTextColorEl) {
        selectedImages[pos].titleTextColor = normalizeHexColor(frameTitleTextColorEl.value, "#ffffff");
    }
    if (frameTitleBgColorEl) {
        selectedImages[pos].titleShadowBgColor = normalizeHexColor(frameTitleBgColorEl.value, "#000000");
    }
    if (frameTitleBorderColorEl) {
        selectedImages[pos].titleShadowBorderColor = normalizeHexColor(frameTitleBorderColorEl.value, "#333333");
    }
    if (frameTitleBubbleTextColorEl) {
        selectedImages[pos].titleBubbleTextColor = normalizeHexColor(frameTitleBubbleTextColorEl.value, "#000000");
    }
    if (frameTitleBubbleBgColorEl) {
        selectedImages[pos].titleBubbleBgColor = normalizeHexColor(frameTitleBubbleBgColorEl.value, "#ffffff");
    }
    if (frameTitleBubbleBorderColorEl) {
        selectedImages[pos].titleBubbleBorderColor = normalizeHexColor(frameTitleBubbleBorderColorEl.value, "#000000");
    }
    if (frameTitleBubbleOpacityEl) {
        var tbop = parseInt(frameTitleBubbleOpacityEl.value, 10);
        if (isNaN(tbop)) {
            tbop = 100;
        }
        tbop = Math.max(0, Math.min(100, tbop));
        selectedImages[pos].titleBubbleOpacity = tbop / 100;
    }
    if (frameTitleBoldEl) {
        selectedImages[pos].titleBold = !!frameTitleBoldEl.checked;
    }
    if (frameTitleItalicEl) {
        selectedImages[pos].titleItalic = !!frameTitleItalicEl.checked;
    }
    if (frameTitleSizeEl) {
        selectedImages[pos].titleSize = normalizeCaptionSize(frameTitleSizeEl.value);
    }
    if (frameTitleFontEl) {
        selectedImages[pos].titleFontFamily = normalizeCaptionFontFamily(frameTitleFontEl.value);
    }
    if (balloonTypeEl) {
        if (balloonTypeEl.value === "thought" || balloonTypeEl.value === "shadow_text" || balloonTypeEl.value === "jagged" || balloonTypeEl.value === "comic_jagged") {
            selectedImages[pos].balloonType = balloonTypeEl.value;
        } else {
            selectedImages[pos].balloonType = "speech";
        }
    }
    if (textColorEl) {
        selectedImages[pos].bubbleTextColor = normalizeHexColor(textColorEl.value, "#000000");
    }
    if (bgColorEl) {
        selectedImages[pos].bubbleBgColor = normalizeHexColor(bgColorEl.value, "#ffffff");
    }
    if (borderColorEl) {
        selectedImages[pos].bubbleBorderColor = normalizeHexColor(borderColorEl.value, "#000000");
    }
    if (captionBoldEl) {
        selectedImages[pos].captionBold = !!captionBoldEl.checked;
    }
    if (captionItalicEl) {
        selectedImages[pos].captionItalic = !!captionItalicEl.checked;
    }
    if (captionSizeEl) {
        selectedImages[pos].captionSize = normalizeCaptionSize(captionSizeEl.value);
    }
    if (captionFontEl) {
        selectedImages[pos].captionFontFamily = normalizeCaptionFontFamily(captionFontEl.value);
    }
    if (bubbleOpacityEl) {
        var bop = parseInt(bubbleOpacityEl.value, 10);
        if (isNaN(bop)) {
            bop = 100;
        }
        bop = Math.max(0, Math.min(100, bop));
        selectedImages[pos].bubbleOpacity = bop / 100;
    }
    if (showTailYesEl || showTailNoEl) {
        if (showTailNoEl && showTailNoEl.checked) {
            selectedImages[pos].showTail = false;
        } else if (showTailYesEl && showTailYesEl.checked) {
            selectedImages[pos].showTail = true;
        }
    }
    if (sellerIconSideEl) {
        selectedImages[pos].sellerIconSide = (sellerIconSideEl.value === "left") ? "left" : "right";
    }
    if (sellerIconFileEl) {
        selectedImages[pos].sellerIconFile = String(sellerIconFileEl.value || "").trim();
    }
    if (stickerFileEl) {
        var sfile = String(stickerFileEl.value || "").trim();
        selectedImages[pos].stickerFile = isNoStickerValue(sfile) ? "" : sfile;
    }
    if (stickerShapeEl) {
        selectedImages[pos].stickerShape = (stickerShapeEl.value === "square") ? "square" : "rounded";
    }
    if (stickerPlacementEl) {
        selectedImages[pos].stickerPlacement = normalizeTitlePlacement(stickerPlacementEl.value);
    }
    if (stickerShadowEl) {
        selectedImages[pos].stickerShadow = !!stickerShadowEl.checked;
    }
    if (posterFrameEl) {
        if (posterFrameEl.checked) {
            posterFrameSourceIndex = selectedImages[pos].index;
        } else if (selectedImages[pos].index === posterFrameSourceIndex) {
            posterFrameSourceIndex = -1;
        }
    }

    ensurePosterFrameSelection();

    var effectName = effectEl ? effectEl.value : "";
    var opts = {};

    if (jsonEl && jsonEl.value && jsonEl.value.trim() !== "") {
        try {
            var parsed = JSON.parse(jsonEl.value);
            if (parsed && typeof parsed === "object") {
                opts = parsed;
            }
        } catch (e) {
            alert("Invalid JSON in Effects options. Please fix it or clear it.");
            return;
        }
    }

    if (effectName === "particle") {
        var px = pixelEl ? parseInt(pixelEl.value, 10) : NaN;
        var sc = scatterEl ? parseInt(scatterEl.value, 10) : NaN;
        var sp = speedEl ? parseFloat(speedEl.value) : NaN;
        if (!isNaN(px)) {
            opts.pixelSize = px;
        }
        if (!isNaN(sc)) {
            opts.scatter = sc;
        }
        if (!isNaN(sp)) {
            opts.speed = sp;
        }
    }

    var hasOpts = Object.keys(opts).length > 0;
    setSelectedImageEffect(pos, effectName, hasOpts ? opts : null);

    if (document.getElementById("divImgsContent")) {
        document.getElementById("divImgsContent").innerHTML = getImgTabContent();
        setTimeout(function() {
            var sortableEl = document.getElementById("sortableImages");
            if (!sortableEl) {
                return;
            }
            initFramesSortable(sortableEl, 'saveSettings-sortable');
        }, 50);
    }
    updatePosterPrependedHint();
    JSSHOP.ui.closeLbox();
}

function showImageSettings(pos) {
    if (!selectedImages || !selectedImages[pos] || typeof selectedImages[pos] !== "object") {
        return;
    }

    var imgObj = selectedImages[pos];
    var key = window.mediaOrder ? window.mediaOrder[imgObj.index] : null;
    var m = key && tmpPrpMediaObj[key];
    var defaultText = m ? m.m_title || "" : "";
    var currentText = (typeof imgObj.text === "string" && imgObj.text !== "") ? imgObj.text : defaultText;
    var currentFrameTitle = (typeof imgObj.titleText === "string") ? imgObj.titleText : "";
    var currentFrameTitleType = (imgObj.titleType === "speech" || imgObj.titleType === "thought" || imgObj.titleType === "jagged" || imgObj.titleType === "comic_jagged" || imgObj.titleType === "shadow_text") ? imgObj.titleType : "shadow_text";
    var currentFrameTitlePlacement = normalizeTitlePlacement(imgObj.titlePlacement);
    var currentFrameTitleTextColor = normalizeHexColor(imgObj.titleTextColor, "#ffffff");
    var currentFrameTitleBgColor = normalizeHexColor(imgObj.titleShadowBgColor, "#000000");
    var currentFrameTitleBorderColor = normalizeHexColor(imgObj.titleShadowBorderColor, "#333333");
    var currentFrameTitleBubbleTextColor = normalizeHexColor(imgObj.titleBubbleTextColor, "#000000");
    var currentFrameTitleBubbleBgColor = normalizeHexColor(imgObj.titleBubbleBgColor, "#ffffff");
    var currentFrameTitleBubbleBorderColor = normalizeHexColor(imgObj.titleBubbleBorderColor, "#000000");
    var currentFrameTitleBubbleOpacity = (typeof imgObj.titleBubbleOpacity === "number") ? Math.max(0, Math.min(1, imgObj.titleBubbleOpacity)) : 1;
    var currentFrameTitleBubbleOpacityPct = Math.round(currentFrameTitleBubbleOpacity * 100);
    var currentFrameTitleBold = !!imgObj.titleBold;
    var currentFrameTitleItalic = !!imgObj.titleItalic;
    var currentFrameTitleSize = normalizeCaptionSize(imgObj.titleSize);
    var currentFrameTitleFontFamily = normalizeCaptionFontFamily(imgObj.titleFontFamily);
    var currentBalloonType = (imgObj.balloonType === "thought" || imgObj.balloonType === "shadow_text" || imgObj.balloonType === "jagged" || imgObj.balloonType === "comic_jagged") ? imgObj.balloonType : "speech";
    var currentTextColor = normalizeHexColor(imgObj.bubbleTextColor, "#000000");
    var currentBgColor = normalizeHexColor(imgObj.bubbleBgColor, "#ffffff");
    var currentBorderColor = normalizeHexColor(imgObj.bubbleBorderColor, "#000000");
    var currentCaptionBold = !!imgObj.captionBold;
    var currentCaptionItalic = !!imgObj.captionItalic;
    var currentCaptionSize = normalizeCaptionSize(imgObj.captionSize);
    var currentCaptionFontFamily = normalizeCaptionFontFamily(imgObj.captionFontFamily);
    var currentBubbleOpacity = (typeof imgObj.bubbleOpacity === "number") ? Math.max(0, Math.min(1, imgObj.bubbleOpacity)) : 1;
    var currentBubbleOpacityPct = Math.round(currentBubbleOpacity * 100);
    var currentShowTail = (imgObj.showTail !== false);
    var currentSellerIconSide = (imgObj.sellerIconSide === "left") ? "left" : "right";
    var currentSellerIconFile = String(imgObj.sellerIconFile || "").trim();
    var currentStickerFile = String(imgObj.stickerFile || "").trim();
    var currentStickerShape = (imgObj.stickerShape === "square") ? "square" : "rounded";
    var currentStickerPlacement = normalizeTitlePlacement(imgObj.stickerPlacement || "top_right");
    var currentStickerShadow = !!imgObj.stickerShadow;
    var currentIsPosterFrame = (imgObj.isPosterFrame === true) || (posterFrameSourceIndex === imgObj.index);
    var currentEffect = imgObj.effectName || "";
    var currentOptions = (imgObj.effectOptions && typeof imgObj.effectOptions === "object") ? imgObj.effectOptions : {};
    var previewSrc = "";
    if (originalVdImgs && originalVdImgs[imgObj.index]) {
        previewSrc = originalVdImgs[imgObj.index];
    } else if (vdImgs && vdImgs[imgObj.index]) {
        previewSrc = vdImgs[imgObj.index];
    } else if (vdImgs && vdImgs[pos]) {
        previewSrc = vdImgs[pos];
    }
    var frameDisplayIndex = pos + 1;
    var sourceDisplayIndex = imgObj.index + 1;

    var modalKey = "imgfx_" + pos + "_" + Date.now();
    var optionsJson = escHtmlAttr(JSON.stringify(currentOptions));

    var html = "";
    html += '<div class="container-fluid p-2" style="min-height:52vh;">';
    html += '<div class="border rounded p-2 mb-3" style="display:flex;align-items:center;gap:10px;">';
    if (previewSrc) {
        html += '<img src="' + escHtmlAttr(previewSrc) + '" alt="Frame preview" style="width:58px;height:58px;object-fit:cover;border:1px solid #ccc;border-radius:6px;" />';
    } else {
        html += '<div style="width:58px;height:58px;display:flex;align-items:center;justify-content:center;border:1px solid #ccc;border-radius:6px;background:#f8f9fa;">N/A</div>';
    }
    html += '<div class="txtSmall">';
    html += '<div><strong>Frame #' + frameDisplayIndex + '</strong></div>';
    html += '<div class="txtClrGrey">Image index: ' + sourceDisplayIndex + '</div>';
    html += '</div>';
    html += '</div>';
    html += '<ul class="nav nav-tabs mb-3" role="tablist">';
    html += '<li class="nav-item" role="presentation"><button class="nav-link active" data-bs-toggle="tab" data-bs-target="#' + modalKey + '_frame_title_tab" type="button" role="tab" aria-selected="true">Title</button></li>';
    html += '<li class="nav-item" role="presentation"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#' + modalKey + '_caption_tab" type="button" role="tab" aria-selected="false">Caption</button></li>';
    html += '<li class="nav-item" role="presentation"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#' + modalKey + '_effects_tab" type="button" role="tab" aria-selected="false">Effects</button></li>';
    html += '<li class="nav-item" role="presentation"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#' + modalKey + '_stickers_tab" type="button" role="tab" aria-selected="false">Stickers</button></li>';
    html += '<li class="nav-item" role="presentation"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#' + modalKey + '_settings_tab" type="button" role="tab" aria-selected="false">Settings</button></li>';
    html += '</ul>';

    html += '<div class="tab-content pt-1">';
    html += '<div id="' + modalKey + '_frame_title_tab" class="tab-pane fade show active" role="tabpanel">';
    html += '<label class="form-label small">Frame title text (shown at top of frame).</label>';
    html += '<input type="text" id="' + modalKey + '_frame_title_text" class="form-control" value="' + escHtmlAttr(currentFrameTitle) + '" oninput="renderImageSettingsTitlePreview(\'' + modalKey + '\')" />';
    html += '<div class="mt-3">';
    html += '<label class="form-label small">Title Style</label>';
    html += '<select id="' + modalKey + '_frame_title_type" class="form-select" onchange="renderImageSettingsTitleStyleState(\'' + modalKey + '\');renderImageSettingsTitlePreview(\'' + modalKey + '\')">';
    html += '<option value="speech"' + (currentFrameTitleType === "speech" ? ' selected' : '') + '>Speech</option>';
    html += '<option value="thought"' + (currentFrameTitleType === "thought" ? ' selected' : '') + '>Thought</option>';
    html += '<option value="jagged"' + (currentFrameTitleType === "jagged" ? ' selected' : '') + '>Jagged</option>';
    html += '<option value="comic_jagged"' + (currentFrameTitleType === "comic_jagged" ? ' selected' : '') + '>Comic Jagged</option>';
    html += '<option value="shadow_text"' + (currentFrameTitleType === "shadow_text" ? ' selected' : '') + '>Shadow Text</option>';
    html += '</select>';
    html += '</div>';
    html += '<div class="mt-3">';
    html += '<label class="form-label small">Title Placement</label>';
    html += '<select id="' + modalKey + '_frame_title_placement" class="form-select" onchange="renderImageSettingsTitlePreview(\'' + modalKey + '\')">';
    html += '<option value="top_left"' + (currentFrameTitlePlacement === "top_left" ? ' selected' : '') + '>Top Left</option>';
    html += '<option value="top_center"' + (currentFrameTitlePlacement === "top_center" ? ' selected' : '') + '>Top Center</option>';
    html += '<option value="top_right"' + (currentFrameTitlePlacement === "top_right" ? ' selected' : '') + '>Top Right</option>';
    html += '<option value="middle_left"' + (currentFrameTitlePlacement === "middle_left" ? ' selected' : '') + '>Middle Left</option>';
    html += '<option value="middle_center"' + (currentFrameTitlePlacement === "middle_center" ? ' selected' : '') + '>Middle Center</option>';
    html += '<option value="middle_right"' + (currentFrameTitlePlacement === "middle_right" ? ' selected' : '') + '>Middle Right</option>';
    html += '</select>';
    html += '</div>';
    html += '<div class="mt-3">';
    html += '<label class="form-label small">Text Color</label>';
    html += '<input type="text" id="' + modalKey + '_frame_title_text_color" data-coloris class="form-control" value="' + escHtmlAttr(currentFrameTitleTextColor) + '" oninput="renderImageSettingsTitlePreview(\'' + modalKey + '\')" />';
    html += '</div>';
    html += '<div id="' + modalKey + '_frame_title_shadow_colors_wrap" class="row g-2 mt-1">';
    html += '<div class="col-12 col-md-6">';
    html += '<label class="form-label small">Shadow Gradient Start</label>';
    html += '<input type="text" id="' + modalKey + '_frame_title_bg_color" data-coloris class="form-control" value="' + escHtmlAttr(currentFrameTitleBgColor) + '" oninput="renderImageSettingsTitlePreview(\'' + modalKey + '\')" />';
    html += '</div>';
    html += '<div class="col-12 col-md-6">';
    html += '<label class="form-label small">Shadow Gradient End</label>';
    html += '<input type="text" id="' + modalKey + '_frame_title_border_color" data-coloris class="form-control" value="' + escHtmlAttr(currentFrameTitleBorderColor) + '" oninput="renderImageSettingsTitlePreview(\'' + modalKey + '\')" />';
    html += '</div>';
    html += '</div>';
    html += '<div id="' + modalKey + '_frame_title_bubble_colors_wrap" class="row g-2 mt-1">';
    html += '<div class="col-12 col-md-4">';
    html += '<label class="form-label small">Bubble Text Color</label>';
    html += '<input type="text" id="' + modalKey + '_frame_title_bubble_text_color" data-coloris class="form-control" value="' + escHtmlAttr(currentFrameTitleBubbleTextColor) + '" oninput="renderImageSettingsTitlePreview(\'' + modalKey + '\')" onchange="renderImageSettingsTitlePreview(\'' + modalKey + '\')" />';
    html += '</div>';
    html += '<div class="col-12 col-md-4">';
    html += '<label class="form-label small">Bubble Background</label>';
    html += '<input type="text" id="' + modalKey + '_frame_title_bubble_bg_color" data-coloris class="form-control" value="' + escHtmlAttr(currentFrameTitleBubbleBgColor) + '" oninput="renderImageSettingsTitlePreview(\'' + modalKey + '\')" onchange="renderImageSettingsTitlePreview(\'' + modalKey + '\')" />';
    html += '</div>';
    html += '<div class="col-12 col-md-4">';
    html += '<label class="form-label small">Bubble Border</label>';
    html += '<input type="text" id="' + modalKey + '_frame_title_bubble_border_color" data-coloris class="form-control" value="' + escHtmlAttr(currentFrameTitleBubbleBorderColor) + '" oninput="renderImageSettingsTitlePreview(\'' + modalKey + '\')" onchange="renderImageSettingsTitlePreview(\'' + modalKey + '\')" />';
    html += '</div>';
    html += '<div class="col-12">';
    html += '<label class="form-label small">Bubble Transparency <span id="' + modalKey + '_frame_title_bubble_opacity_value">' + currentFrameTitleBubbleOpacityPct + '%</span></label>';
    html += '<input type="range" id="' + modalKey + '_frame_title_bubble_opacity" class="form-range" min="0" max="100" step="1" value="' + currentFrameTitleBubbleOpacityPct + '" oninput="renderImageSettingsTitleBubbleOpacityState(\'' + modalKey + '\');renderImageSettingsTitlePreview(\'' + modalKey + '\')" />';
    html += '</div>';
    html += '</div>';
    html += '<div class="row g-2 mt-1">';
    html += '<div class="col-12 col-md-4">';
    html += '<label class="form-label small">Size</label>';
    html += '<input type="number" id="' + modalKey + '_frame_title_size" class="form-control" min="12" max="40" step="1" value="' + escHtmlAttr(currentFrameTitleSize) + '" oninput="renderImageSettingsTitlePreview(\'' + modalKey + '\')" />';
    html += '</div>';
    html += '<div class="col-12 col-md-8">';
    html += '<label class="form-label small">Font Family</label>';
    html += '<select id="' + modalKey + '_frame_title_font" class="form-select" onchange="renderImageSettingsTitlePreview(\'' + modalKey + '\')">';
    for (var fti = 0; fti < captionFontFamilyOptions.length; fti++) {
        var ftf = captionFontFamilyOptions[fti];
        html += '<option value="' + escHtmlAttr(ftf) + '"' + (ftf === currentFrameTitleFontFamily ? ' selected' : '') + '>' + escHtmlAttr(ftf) + '</option>';
    }
    html += '</select>';
    html += '</div>';
    html += '</div>';
    html += '<div class="row g-2 mt-1">';
    html += '<div class="col-6">';
    html += '<div class="form-check">';
    html += '<input class="form-check-input" type="checkbox" id="' + modalKey + '_frame_title_bold"' + (currentFrameTitleBold ? ' checked' : '') + ' onchange="renderImageSettingsTitlePreview(\'' + modalKey + '\')" />';
    html += '<label class="form-check-label small" for="' + modalKey + '_frame_title_bold">Bold</label>';
    html += '</div>';
    html += '</div>';
    html += '<div class="col-6">';
    html += '<div class="form-check">';
    html += '<input class="form-check-input" type="checkbox" id="' + modalKey + '_frame_title_italic"' + (currentFrameTitleItalic ? ' checked' : '') + ' onchange="renderImageSettingsTitlePreview(\'' + modalKey + '\')" />';
    html += '<label class="form-check-label small" for="' + modalKey + '_frame_title_italic">Italic</label>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '<div class="border rounded p-2 mt-3" style="background:#1a1d21;">';
    html += '<div class="small text-muted mb-1">Live Preview (small)</div>';
    html += '<div id="' + modalKey + '_frame_title_preview_frame" style="position:relative;width:100%;max-width:160px;aspect-ratio:1 / 1;margin:0 auto;border:1px solid rgba(255,255,255,0.15);border-radius:6px;overflow:hidden;background-image:url(\'' + escHtmlAttr(previewSrc || '') + '\');background-size:cover;background-position:center;">';
    html += '<div style="position:absolute;inset:0;background:linear-gradient(180deg, rgba(0,0,0,0.32), rgba(0,0,0,0.46));"></div>';
    html += '<canvas id="' + modalKey + '_frame_title_preview_canvas" width="160" height="160" style="position:absolute;inset:0;width:100%;height:100%;"></canvas>';
    html += '<div id="' + modalKey + '_frame_title_preview_hint" class="small" style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#d3d7db;">No title entered</div>';
    html += '<div id="' + modalKey + '_frame_title_preview_text" style="display:none;"></div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';

    html += '<div id="' + modalKey + '_caption_tab" class="tab-pane fade" role="tabpanel">';
    html += '<label class="form-label small">Caption text (leave blank for no caption).</label>';
    html += '<input type="text" id="' + modalKey + '_caption_text" class="form-control" value="' + escHtmlAttr(currentText) + '" />';
    html += '<div class="mt-3">';
    html += '<label class="form-label small">Text Color</label>';
    html += '<input type="text" id="' + modalKey + '_text_color" data-coloris class="form-control" value="' + escHtmlAttr(currentTextColor) + '" />';
    html += '</div>';
    html += '<div class="row g-2 mt-1">';
    html += '<div class="col-12 col-md-4">';
    html += '<label class="form-label small">Size</label>';
    html += '<input type="number" id="' + modalKey + '_caption_size" class="form-control" min="12" max="40" step="1" value="' + escHtmlAttr(currentCaptionSize) + '" />';
    html += '</div>';
    html += '<div class="col-12 col-md-8">';
    html += '<label class="form-label small">Font Family</label>';
    html += '<select id="' + modalKey + '_caption_font" class="form-select">';
    for (var fi = 0; fi < captionFontFamilyOptions.length; fi++) {
        var ff = captionFontFamilyOptions[fi];
        html += '<option value="' + escHtmlAttr(ff) + '"' + (ff === currentCaptionFontFamily ? ' selected' : '') + '>' + escHtmlAttr(ff) + '</option>';
    }
    html += '</select>';
    html += '</div>';
    html += '</div>';
    html += '<div class="row g-2 mt-1">';
    html += '<div class="col-6">';
    html += '<div class="form-check">';
    html += '<input class="form-check-input" type="checkbox" id="' + modalKey + '_caption_bold"' + (currentCaptionBold ? ' checked' : '') + ' />';
    html += '<label class="form-check-label small" for="' + modalKey + '_caption_bold">Bold</label>';
    html += '</div>';
    html += '</div>';
    html += '<div class="col-6">';
    html += '<div class="form-check">';
    html += '<input class="form-check-input" type="checkbox" id="' + modalKey + '_caption_italic"' + (currentCaptionItalic ? ' checked' : '') + ' />';
    html += '<label class="form-check-label small" for="' + modalKey + '_caption_italic">Italic</label>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '<div class="mt-3">';
    html += '<label class="form-label small">Balloon Type</label>';
    html += '<select id="' + modalKey + '_balloon_type" class="form-select" onchange="renderImageSettingsShowTailState(\'' + modalKey + '\')">';
    html += '<option value="speech"' + (currentBalloonType === "speech" ? ' selected' : '') + '>Speech</option>';
    html += '<option value="thought"' + (currentBalloonType === "thought" ? ' selected' : '') + '>Thought</option>';
    html += '<option value="jagged"' + (currentBalloonType === "jagged" ? ' selected' : '') + '>Jagged</option>';
    html += '<option value="comic_jagged"' + (currentBalloonType === "comic_jagged" ? ' selected' : '') + '>Comic Jagged</option>';
    html += '<option value="shadow_text"' + (currentBalloonType === "shadow_text" ? ' selected' : '') + '>Shadow Text</option>';
    html += '</select>';
    html += '</div>';
    html += '<div class="mt-2">';
    html += '<label class="form-label small">Bubble Transparency <span id="' + modalKey + '_bubble_opacity_value">' + currentBubbleOpacityPct + '%</span></label>';
    html += '<input type="range" id="' + modalKey + '_bubble_opacity" class="form-range" min="0" max="100" step="1" value="' + currentBubbleOpacityPct + '" oninput="renderImageSettingsBubbleOpacityState(\'' + modalKey + '\')" />';
    html += '</div>';
    html += '<div id="' + modalKey + '_show_tail_wrap" class="mt-2">';
    html += '<label class="form-label small d-block mb-1">Show Tail</label>';
    html += '<div class="form-check form-check-inline">';
    html += '<input class="form-check-input" type="radio" name="' + modalKey + '_show_tail" id="' + modalKey + '_show_tail_yes"' + (currentShowTail ? ' checked' : '') + ' />';
    html += '<label class="form-check-label small" for="' + modalKey + '_show_tail_yes">Yes</label>';
    html += '</div>';
    html += '<div class="form-check form-check-inline">';
    html += '<input class="form-check-input" type="radio" name="' + modalKey + '_show_tail" id="' + modalKey + '_show_tail_no"' + (!currentShowTail ? ' checked' : '') + ' />';
    html += '<label class="form-check-label small" for="' + modalKey + '_show_tail_no">No</label>';
    html += '</div>';
    html += '</div>';
    html += '<div class="row g-2 mt-1">';
    html += '<div class="col-12 col-md-6">';
    html += '<label class="form-label small">Bubble Background</label>';
    html += '<input type="text" id="' + modalKey + '_bg_color" data-coloris class="form-control" value="' + escHtmlAttr(currentBgColor) + '" />';
    html += '</div>';
    html += '<div class="col-12 col-md-6">';
    html += '<label class="form-label small">Bubble Border</label>';
    html += '<input type="text" id="' + modalKey + '_border_color" data-coloris class="form-control" value="' + escHtmlAttr(currentBorderColor) + '" />';
    html += '</div>';
    html += '</div>';
    html += '<div class="border rounded p-2 mt-3" style="background:#f8f9fa;">';
    html += '<div class="small text-muted mb-2">Seller Icon</div>';
    html += '<label class="form-label small">Seller Icon Side</label>';
    html += '<select id="' + modalKey + '_seller_icon_side" class="form-select mb-2" onchange="renderImageSettingsCaptionSidePreview(\'' + modalKey + '\', true)">';
    html += '<option value="right"' + (currentSellerIconSide === "right" ? ' selected' : '') + '>Right</option>';
    html += '<option value="left"' + (currentSellerIconSide === "left" ? ' selected' : '') + '>Left</option>';
    html += '</select>';
    html += '<div id="' + modalKey + '_caption_side_preview_frame" style="position:relative;width:100%;max-width:170px;height:56px;margin:0 auto 10px auto;border:1px solid #d7dce1;border-radius:8px;background:linear-gradient(135deg,#f6f8fb,#e9edf3);overflow:hidden;">';
    html += '<div id="' + modalKey + '_caption_side_preview_bubble" style="position:absolute;top:12px;width:86px;height:30px;border-radius:16px;background:#ffffff;border:1px solid #d0d7df;box-shadow:0 1px 2px rgba(0,0,0,0.12);transition:transform 140ms ease,left 180ms ease;"></div>';
    html += '<div id="' + modalKey + '_caption_side_preview_tail" style="position:absolute;width:0;height:0;transition:left 180ms ease;"></div>';
    html += '<div id="' + modalKey + '_caption_side_preview_icon" style="position:absolute;top:16px;width:24px;height:24px;border-radius:50%;border:1px solid rgba(0,0,0,0.15);background:radial-gradient(circle at 35% 35%, #fefefe, #c5ccd4);box-shadow:0 1px 2px rgba(0,0,0,0.2);transition:left 180ms ease, transform 140ms ease;"></div>';
    html += '</div>';
    html += '<input type="hidden" id="' + modalKey + '_seller_icon_file" value="' + escHtmlAttr(currentSellerIconFile) + '" />';
    html += '<div id="' + modalKey + '_seller_icon_list" style="min-height:76px;"></div>';
    html += '</div>';
    html += '</div>';

    html += '<div id="' + modalKey + '_effects_tab" class="tab-pane fade" role="tabpanel">';
    html += '<div class="mb-3">';
    html += '<label class="form-label small">Select frame effect:</label>';
    html += '<select id="' + modalKey + '_effect" class="form-select" onchange="renderImageSettingsModalFxPreview(\'' + modalKey + '\')">';
    html += '<option value=""' + (currentEffect === "" ? ' selected' : '') + '>Auto (random)</option>';
    html += '<option value="none"' + (currentEffect === "none" ? ' selected' : '') + '>None</option>';
    html += '<option value="zoom_brightness"' + (currentEffect === "zoom_brightness" ? ' selected' : '') + '>Zoom + Brightness</option>';
    html += '<option value="pan_lr"' + (currentEffect === "pan_lr" ? ' selected' : '') + '>Pan Left/Right</option>';
    html += '<option value="pan_ud"' + (currentEffect === "pan_ud" ? ' selected' : '') + '>Pan Up/Down</option>';
    html += '<option value="slide_in"' + (currentEffect === "slide_in" ? ' selected' : '') + '>Slide In</option>';
    html += '<option value="tilt"' + (currentEffect === "tilt" ? ' selected' : '') + '>Tilt</option>';
    html += '<option value="cut_up"' + (currentEffect === "cut_up" ? ' selected' : '') + '>Cut Up</option>';
    html += '<option value="particle"' + (currentEffect === "particle" ? ' selected' : '') + '>Particle</option>';
    html += '</select>';
    html += '</div>';

    html += '<div id="' + modalKey + '_particle_wrap" class="border rounded p-2 mb-3" style="display:' + (currentEffect === "particle" ? 'block' : 'none') + ';">';
    html += '<div class="small text-muted mb-2">Particle settings:</div>';
    html += '<div class="row g-2">';
    html += '<div class="col-12 col-md-4"><label class="form-label small">Pixel Size</label><input id="' + modalKey + '_particle_pixel" type="number" min="4" max="40" step="1" class="form-control" value="' + escHtmlAttr(currentOptions.pixelSize || 8) + '" /></div>';
    html += '<div class="col-12 col-md-4"><label class="form-label small">Scatter</label><input id="' + modalKey + '_particle_scatter" type="number" min="20" max="240" step="1" class="form-control" value="' + escHtmlAttr(currentOptions.scatter || 70) + '" /></div>';
    html += '<div class="col-12 col-md-4"><label class="form-label small">Speed</label><input id="' + modalKey + '_particle_speed" type="number" min="0.2" max="3" step="0.05" class="form-control" value="' + escHtmlAttr(currentOptions.speed || 1.25) + '" /></div>';
    html += '</div>';
    html += '</div>';

    html += '<div class="mb-2">';
    html += '<label class="form-label small">Advanced options (JSON, optional)</label>';
    html += '<textarea id="' + modalKey + '_opts_json" class="form-control" rows="4" style="font-family:monospace;">' + optionsJson + '</textarea>';
    html += '</div>';
    html += '</div>';

    html += '<div id="' + modalKey + '_stickers_tab" class="tab-pane fade" role="tabpanel">';
    html += '<label class="form-label small">Sticker Shape</label>';
    html += '<select id="' + modalKey + '_sticker_shape" class="form-select mb-2">';
    html += '<option value="rounded"' + (currentStickerShape === "rounded" ? ' selected' : '') + '>Rounded</option>';
    html += '<option value="square"' + (currentStickerShape === "square" ? ' selected' : '') + '>Square</option>';
    html += '</select>';

    html += '<label class="form-label small">Sticker Placement</label>';
    html += '<select id="' + modalKey + '_sticker_placement" class="form-select mb-2">';
    html += '<option value="top_left"' + (currentStickerPlacement === "top_left" ? ' selected' : '') + '>Top Left</option>';
    html += '<option value="top_center"' + (currentStickerPlacement === "top_center" ? ' selected' : '') + '>Top Center</option>';
    html += '<option value="top_right"' + (currentStickerPlacement === "top_right" ? ' selected' : '') + '>Top Right</option>';
    html += '<option value="middle_left"' + (currentStickerPlacement === "middle_left" ? ' selected' : '') + '>Middle Left</option>';
    html += '<option value="middle_center"' + (currentStickerPlacement === "middle_center" ? ' selected' : '') + '>Middle Center</option>';
    html += '<option value="middle_right"' + (currentStickerPlacement === "middle_right" ? ' selected' : '') + '>Middle Right</option>';
    html += '</select>';

    html += '<div class="form-check mt-2 mb-2">';
    html += '<input class="form-check-input" type="checkbox" id="' + modalKey + '_sticker_shadow"' + (currentStickerShadow ? ' checked' : '') + ' />';
    html += '<label class="form-check-label small" for="' + modalKey + '_sticker_shadow">Thin Shadow</label>';
    html += '</div>';

    html += '<input type="hidden" id="' + modalKey + '_sticker_file" value="' + escHtmlAttr(currentStickerFile || NO_STICKER_VALUE) + '" />';
    html += '<div class="small text-muted mb-2">Select sticker image:</div>';
    html += '<div id="' + modalKey + '_sticker_list" style="min-height:76px;"></div>';
    html += '</div>';

    html += '<div id="' + modalKey + '_settings_tab" class="tab-pane fade" role="tabpanel">';
    html += '<div class="border rounded p-3" style="background:#f8f9fa;">';
    html += '<div class="form-check">';
    html += '<input class="form-check-input" type="checkbox" id="' + modalKey + '_poster_frame"' + (currentIsPosterFrame ? ' checked' : '') + ' />';
    html += '<label class="form-check-label" for="' + modalKey + '_poster_frame">Save as Poster</label>';
    html += '</div>';
    html += '<div class="small text-muted mt-2">When checked, this frame is used as the post poster image during save.</div>';
    html += '</div>';
    html += '</div>';

    html += '</div>';

    html += '<div class="d-flex justify-content-end gap-2 mt-3">';
    html += '<button type="button" class="btn btn-outline-secondary" onclick="JSSHOP.ui.closeLbox();">Cancel</button>';
    html += '<button type="button" class="btn btn-primary" onclick="saveImageSettingsModal(' + pos + ',\'' + modalKey + '\');">Save</button>';
    html += '</div>';
    html += '</div>';

    JSSHOP.ui.popNurFillLbox(html, "&#xe88f;", "Frame Options");
    setTimeout(function() {
        if (window.Coloris) {
            Coloris({
                el: '#' + modalKey + '_text_color, #' + modalKey + '_bg_color, #' + modalKey + '_border_color, #' + modalKey + '_frame_title_text_color, #' + modalKey + '_frame_title_bg_color, #' + modalKey + '_frame_title_border_color, #' + modalKey + '_frame_title_bubble_text_color, #' + modalKey + '_frame_title_bubble_bg_color, #' + modalKey + '_frame_title_bubble_border_color',
                parent: '#nurModal',
                swatches: ['#000000', '#ffffff', '#f8f9fa', '#0d6efd', '#dc3545', '#198754']
            });
        }
        enhanceShowImageSettingsDropdowns(modalKey);
        renderImageSettingsTitlePreview(modalKey);
        renderImageSettingsTitleStyleState(modalKey);
        renderImageSettingsTitleBubbleOpacityState(modalKey);
        initSellerIconPicker(modalKey);
        initStickerPicker(modalKey);
        renderImageSettingsCaptionSidePreview(modalKey, false);
        renderImageSettingsBubbleOpacityState(modalKey);
        renderImageSettingsShowTailState(modalKey);
    }, 0);
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
        selectedImages.push(createDefaultSelectedImage(index, ""));
        console.log('Selected image index:', index, 'selectedImages now:', selectedImages);
    }
    ensurePosterFrameSelection();
    // Keep video arrays in sync immediately when frames are included/excluded.
    applyImageOrder();
    // Update UI
    document.getElementById("divImgsContent").innerHTML = getImgTabContent();
    // Reinitialize sortable
    setTimeout(function() {
        initFramesSortable(document.getElementById('sortableImages'), 'toggleSelection-sortable');
    }, 100);
    updatePosterPrependedHint();
}

// Function to apply image order (update loadedImages and vdImgs with selected images in order)
function applyImageOrder() {
    console.log('applyImageOrder called, selectedImages:', selectedImages, 'vdImgs length:', vdImgs.length, 'loadedImages length before:', loadedImages.length);
    ensurePosterFrameSelection();
    // Snapshot current source->image mapping before vdImgs is replaced.
    var currentSrcToLoaded = {};
    for (var c = 0; c < vdImgs.length; c++) {
        if (vdImgs[c] && loadedImages[c]) {
            currentSrcToLoaded[vdImgs[c]] = loadedImages[c];
        }
    }
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
    // Rebuild loadedImages aligned with new vdImgs order.
    var newLoadedImages = [];
    for (var n = 0; n < vdImgs.length; n++) {
        var src = vdImgs[n];
        if (currentSrcToLoaded[src]) {
            newLoadedImages.push(currentSrcToLoaded[src]);
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
    sellerIcon = getCurrentSellerIconFile();
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

async function renderFramesStandaloneRealtime(fps, targetDurationSec, shouldStopFn) {
    vdIncr = 0;
    isRecordingVid = "no";
    vidFramesAnimating = "yes";
    ensureRenderEffects(loadedImages.length);

    var frameDelay = Math.max(1, Math.floor(1000 / fps));
    var baseTotalFrames = loadedImages.length * framesPerImage;
    var prependPosterFrame = canRenderSelectedPosterFrame();
    var totalFrames = baseTotalFrames;
    if (targetDurationSec && targetDurationSec > 0) {
        totalFrames = Math.max(baseTotalFrames, Math.ceil(targetDurationSec * fps));
    }
    if (prependPosterFrame) {
        totalFrames += 1;
    }

    logVidAudio("RENDER_FRAME_PLAN", {
        baseTotalFrames: baseTotalFrames,
        totalFrames: totalFrames,
        prependPosterFrame: prependPosterFrame,
        frameDelayMs: frameDelay,
        fps: fps
    });

    var lastImage = loadedImages.length > 0 ? loadedImages[loadedImages.length - 1] : null;

    for (var frameNo = 0; frameNo < totalFrames; frameNo++) {
        if (shouldStopFn && shouldStopFn()) {
            logVidAudio("RENDER_STOP_REQUESTED", { frameNo: frameNo });
            break;
        }
        if (prependPosterFrame && frameNo === 0) {
            drawSelectedPosterFrameToCanvas(vdCanvas, false);
            await sleepMs(frameDelay);
            continue;
        }

        var timelineFrameNo = prependPosterFrame ? (frameNo - 1) : frameNo;
        if (timelineFrameNo < baseTotalFrames) {
            var imageIndex = Math.floor(timelineFrameNo / framesPerImage);
            var frameInImage = timelineFrameNo % framesPerImage;
            if (loadedImages[imageIndex]) {
                drawFrame(loadedImages[imageIndex], frameInImage);
            }
            vdIncr = timelineFrameNo + 1;
        } else if (lastImage) {
            // Hold final visual frame while audio continues.
            vdIncr = baseTotalFrames - 1;
            drawFrame(lastImage, framesPerImage - 1);
        }
        await sleepMs(frameDelay);
    }

    vidFramesAnimating = "no";
}

function getEncodeBitratePlan(targetDurationSec, hasAudioTrack) {
    ensureVideoEncodeProfileLoaded();

    var d = Math.max(1, parseInt(targetDurationSec || 1, 10));
    var videoBps = 90000;
    var audioBps = hasAudioTrack ? 24000 : 0;

    if (videoEncodeProfile === "low") {
        videoBps = 55000;
        audioBps = hasAudioTrack ? 16000 : 0;
    } else if (videoEncodeProfile === "auto_1mb") {
        var totalBudgetBps = Math.floor((videoTargetSizeMB * 8 * 1024 * 1024) / d);
        if (hasAudioTrack) {
            audioBps = Math.max(12000, Math.min(24000, Math.floor(totalBudgetBps * 0.25)));
            videoBps = Math.max(26000, totalBudgetBps - audioBps);
        } else {
            videoBps = Math.max(30000, totalBudgetBps);
            audioBps = 0;
        }
    }

    return {
        videoBitsPerSecond: videoBps,
        audioBitsPerSecond: audioBps,
        profile: videoEncodeProfile,
        durationSec: d
    };
}

function buildMediaRecorder(stream, targetDurationSec, hasAudioTrack) {
    logVidAudio("MEDIARECORDER_INIT", {
        videoTracks: stream.getVideoTracks().length,
        audioTracks: stream.getAudioTracks().length
    });

    var bitratePlan = getEncodeBitratePlan(targetDurationSec, hasAudioTrack);
    logVidAudio("MEDIARECORDER_BITRATE_PLAN", bitratePlan);

    function makeRecorderOption(mimeType, withBitrate) {
        var opt = { mimeType: mimeType };
        if (withBitrate) {
            opt.videoBitsPerSecond = bitratePlan.videoBitsPerSecond;
            if (hasAudioTrack && bitratePlan.audioBitsPerSecond > 0) {
                opt.audioBitsPerSecond = bitratePlan.audioBitsPerSecond;
            }
        }
        return opt;
    }

    var optionsList = [
        makeRecorderOption('video/webm;codecs=vp8,opus', true),
        makeRecorderOption('video/webm;codecs=vp9,opus', true),
        makeRecorderOption('video/webm', true),
        makeRecorderOption('video/mp4;codecs=avc1.42E01E,mp4a.40.2', true),
        makeRecorderOption('video/mp4', true),
        makeRecorderOption('video/webm;codecs=vp8,opus', false),
        makeRecorderOption('video/webm;codecs=vp9,opus', false),
        makeRecorderOption('video/webm', false),
        makeRecorderOption('video/mp4;codecs=avc1.42E01E,mp4a.40.2', false),
        makeRecorderOption('video/mp4', false),
        {}
    ];

    if (typeof MediaRecorder.isTypeSupported === "function") {
        optionsList = optionsList.filter(function(opt) {
            if (!opt.mimeType) {
                return true;
            }
            return MediaRecorder.isTypeSupported(opt.mimeType);
        });
    }

    for (var i = 0; i < optionsList.length; i++) {
        try {
            logVidAudio("MEDIARECORDER_TRY_OPTION", optionsList[i]);
            return new MediaRecorder(stream, optionsList[i]);
        } catch (e) {
            logVidAudio("MEDIARECORDER_OPTION_FAILED", { option: optionsList[i], error: String(e) });
        }
    }
    throw new Error('MediaRecorder is not supported in this browser');
}

function getVideoFileExtFromMime(mimeType) {
    var mt = (mimeType || "").toLowerCase();
    if (mt.indexOf("mp4") !== -1) {
        return "mp4";
    }
    return "webm";
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

        var fps = getVideoFps();
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

        var targetDurationSec = videoDurationSec;
        if (audioElement && videoAudioLengthMode === "extend" && !isNaN(audioElement.duration) && audioElement.duration > 0) {
            targetDurationSec = Math.max(videoDurationSec, audioElement.duration);
        }

        var recorder = buildMediaRecorder(mixedStream, targetDurationSec, !!audioElement);
        var outputMimeType = recorder.mimeType || "";
        lastVideoOutputMimeType = outputMimeType;
        updateVideoOutputFormatHint(lastVideoOutputMimeType);
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
            updateVideoOutputFormatHint(lastVideoOutputMimeType || "(negotiating)");
        };

        var recorderDone = new Promise(function(resolve) {
            recorder.onstop = function() {
                var fallbackType = outputMimeType || (chunks[0] && chunks[0].type) || "video/webm";
                resolve(new Blob(chunks, { type: fallbackType }));
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
        lastVideoOutputMimeType = finalBlob.type || outputMimeType || "";
        updateVideoOutputFormatHint(lastVideoOutputMimeType);
        logVidAudio("FINAL_BLOB", { size: finalBlob.size });

        if (shouldUpload) {
            logVidAudio("UPLOAD_BEGIN");
            saveVideoFileBlob(finalBlob, outputMimeType);
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


function saveVideoFileBlob(videoBlob, mimeType) {
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
        var fileExt = getVideoFileExtFromMime(mimeType);
        var fileName = quid + "_" + Date.now() + "." + fileExt;
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