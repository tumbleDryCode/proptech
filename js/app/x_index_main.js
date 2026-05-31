var has3Dvid = "no";
var threedmap = null;
var isThreeDrun = "no";

// 3DMap functions taken from x_aa-show-prop.js


async function initGMap() {
    tLocLat = ploclat.value;
tLocLng = ploclng.value;

    if(currGglSVloaded == "no") {
        currGglSVloaded = "yes";
(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
    key: gglSKey,
    v: "beta",
    // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
    // Add other bootstrap parameters as needed, using camel case.
  });
    }

      var { Map3DElement, MapMode, Marker3DElement, Marker3DInteractiveElement } = await google.maps.importLibrary("maps3d");

    var { LatLng } = await google.maps.importLibrary("geometry");
     var { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
     var { PinElement } = await google.maps.importLibrary("marker");
    var { DrawingLibrary } = await google.maps.importLibrary("drawing");

  }
    async function doNuThreeDAnim(tNTDAurl) {
        // remove the event gmp-animationend event listener
        // threedmap.removeEventListener('gmp-animationend', () => {
        //    donada = "yes";});

        console.log("doNuThreeDAnim: " + tNTDAurl);
        tNTDAobj = JSSHOP.shared.urlToArray(tNTDAurl);
        tNTDAlat = tNTDAobj["center"].split(",")[0];
        tNTDAlng = tNTDAobj["center"].split(",")[1];
        tNTDAalt = tNTDAobj["altitude"];
        tNTDAlat = parseFloat(tNTDAlat);
        tNTDAlng = parseFloat(tNTDAlng);
        tNTDAalt = parseFloat(tNTDAalt);
        tNTtilt = tNTDAobj["tilt"];
        tNTDheading = tNTDAobj["heading"];
        tNTrange = tNTDAobj["range"];
        tFNTrange = parseFloat(tNTrange);
        tNTDtilt = parseFloat(tNTtilt);
        tNTDheading = parseFloat(tNTDheading);
        // set camera to tNTDAlat, tNTDAlng, tNTDAalt, tNTDtilt, tFNTrange
        // set camera to tNTDAlat, tNTDAlng, tNTDAalt, tNTDtilt, tFNTrange

        console.log("doNuThreeDAnim: " + tNTDAlat + " " + tNTDAlng + " " + tNTDAalt);
        await threedmap.flyCameraTo({
            endCamera: {
                center: { lat: tNTDAlat, lng: tNTDAlng, altitude: tNTDAalt + 20 },
                tilt: tNTDtilt,
                range: tFNTrange,
            },
            durationMillis: 2000
        });
        setTimeout(() => {
        threedmap.flyCameraAround({
            camera: {
                center: { lat: tNTDAlat, lng: tNTDAlng, altitude: tNTDAalt + 20 },
                tilt: tNTDtilt,
                range: tFNTrange,
            },
            durationMillis: 8000,
            repeatCount: 1
        });
        }, 2100);
        tmpThreeDLat = tNTDAlat;
        tmpThreeDLng = tNTDAlng;
        tmpThreeDAlt = tNTDAalt;
        console.log("doNuThreeDAnim: " + tmpThreeDLat + " " + tmpThreeDLng + " " + tmpThreeDAlt);
        isThreeDrun = "yes";
    }

    async function initNwstIMThreeDView(tTDdivID, tThreedPurl, tMdiaID) {
      console.log("initNwstThreeDView: " + tTDdivID + " :: " + tThreedPurl + " :: " + tMdiaID);
        advThreeView = document.getElementById(tTDdivID);

        // document.getElementById("dvPropFooter").innerHTML = "3D View - Click to Play/Stop";

       //  doNuSpinSet(advThreeView, "big", null, "...");

        // Get property data
        var pdTitle = "Property";
        var pPrice = "";
        var pLat = 0;
        var pLng = 0;
        var tSellerIcon = "default_user.png";
        var tSellerName = "Seller";

        if(tThreedPurl == "noQvalue") {
            tLocLat = pLat || tmp_ploclat.value;
            tLocLng = pLng || tmp_ploclng.value;
            tLocAlt = 10;
            tZmLvl = 16;
            tMpType = "SATELLITE";
            tCntrMapLat = tLocLat;
            tCntrMapLng = tLocLng;
            tCntrMapAlt = tLocAlt;
            tFldHeading = 0;
            tFldTilt = 67.5;
            tFldRange = 500;
            tFldAlt = 10;
            tFldZoom = 16;
        } else {
            tTDpopObj = JSSHOP.shared.urlToArray(tThreedPurl);
            tLocLat = tTDpopObj["center"].split(",")[0];
            tLocLng = tTDpopObj["center"].split(",")[1];
            tLocAlt = tTDpopObj["altitude"];
            tZmLvl = tTDpopObj["zoom"];
            tMpType = tTDpopObj["maptype"];
            tCntrMapLat = tLocLat;
            tCntrMapLng = tLocLng;
            tCntrMapAlt = tLocAlt;
            tFldHeading = tTDpopObj["heading"];
            tFldTilt = tTDpopObj["tilt"];
            tFldRange = tTDpopObj["range"];
            tFldAlt = tTDpopObj["altitude"];
            tFldZoom = tTDpopObj["zoom"];
        }

        fltdLat = parseFloat(tLocLat);
        fltdLng = parseFloat(tLocLng);
        fltheading = parseFloat(tFldHeading);
        flttilt = parseFloat(tFldTilt);
        fltzoom = parseFloat(tFldZoom);
        fltdrange = parseFloat(tFldRange);
        fltdaltitude = parseFloat(tFldAlt);
        xfltdLat = fltdLat;
        xfltdLng = fltdLng;
        advThreeDPop = document.getElementById(tTDdivID);
        advThreeDPop.style.width = "300px";
        advThreeDPop.style.height = "300px";
        advThreeDPop.style.maxWidth = "320px";
        advThreeDPop.style.maxHeight = "320px";
        if(threedmap != null && threedmap != undefined && threedmap != "") {
            threedmap.stopCameraAnimation();
            threedmap.removeEventListener('gmp-animationend', () => { donada = "yes";});
            isThreeDrun = "no";
            advThreeDPop.innerHTML = "";
            advThreeDPop.append(threedmap);
        } else {
            t3DBtnStr = "";
            t3DBtnStr += "<div class=\"dvTxtBtns\">";
            t3DBtnStr += "<table><tr><td>";
            t3DBtnStr += "<input id=\"btnAEPplay\" type=\"hidden\" class=\"cls_button cls_button-small  txtSmall bkgdClrHdr txtClrWhite\" value=\"Play\" onclick=\"javascript:strtStpNuTDAnm('" + tThreedPurl + "');\">";
            t3DBtnStr += "</td></tr></table>";
            t3DBtnStr += "</div>";
            ttdBdv = document.createElement("div");
            ttdBdv.innerHTML = t3DBtnStr;
            advThreeView.appendChild(ttdBdv);

            var { Map3DElement, MapMode, Marker3DElement } = await google.maps.importLibrary("maps3d");

            threedmap = new Map3DElement({
                center: { lat: xfltdLat, lng: xfltdLng,  altitude: fltdaltitude },
                tilt: flttilt,
                range: fltdrange,
                mode: MapMode.SATELLITE,
                defaultUIDisabled: true,
            });

            advThreeDPop.innerHTML = "";
            advThreeDPop.append(threedmap);

            // Add animated text marker
             tTDpopObj = JSSHOP.shared.urlToArray(tThreedPurl);
            tLocLat = tTDpopObj["center"].split(",")[0];
            tLocLng = tTDpopObj["center"].split(",")[1];
            tLocAlt = tTDpopObj["altitude"];
            tZmLvl = tTDpopObj["zoom"];
            tMpType = tTDpopObj["maptype"];
            tCntrMapLat = tLocLat;
            tCntrMapLng = tLocLng;
            tCntrMapAlt = tLocAlt;
            fltdLat = parseFloat(tLocLat);
            fltdLng = parseFloat(tLocLng);
            fltdaltitude = parseFloat(tLocAlt);
            var propData = currShopsArr[0];

            if(propData) {
            try {
                tPtitleUdecd = decodeURIComponent(propData.pd_prptitle);
                pdTitle = LZString.decompressFromEncodedURIComponent(tPtitleUdecd);
                tSellerIcon = propData.u_icon;
                tSellerName = propData.u_fullname;
            } catch(e) {
                alert("Error decompressing property title: " + e.message);
                pdTitle = propData.pd_prptitle;
            }
            console.log("initNwstThreeDView: pdTitle: " + pdTitle);
            pPrice = propData.price;
            pLat = parseFloat(propData.ploclat);
            pLng = parseFloat(propData.ploclng);
        }

        // Generate Canvas Image
        const getMarkerCanvasImg = (title, price, iconUrl, name) => {
            return new Promise((resolve, reject) => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = 280;
                canvas.height = 150;

                // Helper for text wrapping
                const wrapText = (context, text, x, y, maxWidth, lineHeight) => {
                    var words = text.split(' ');
                    var line = '';

                    for(var n = 0; n < words.length; n++) {
                      var testLine = line + words[n] + ' ';
                      var metrics = context.measureText(testLine);
                      var testWidth = metrics.width;
                      if (testWidth > maxWidth && n > 0) {
                        context.fillText(line, x, y);
                        line = words[n] + ' ';
                        y += lineHeight;
                      }
                      else {
                        line = testLine;
                      }
                    }
                    context.fillText(line, x, y);
                    return y;
                };

                const img = new Image();
                img.crossOrigin = "Anonymous";
                img.onload = () => {
                    ctx.font = 'bold 18px Arial';
                    ctx.fillStyle = 'white';
                    ctx.textAlign = 'center';
                    ctx.shadowColor = "blue";
                    ctx.shadowBlur = 4;
                    ctx.shadowOffsetX = 2;
                    ctx.shadowOffsetY = 2;

                    let nextY = wrapText(ctx, title, canvas.width / 2, 30, canvas.width - 40, 24);

                    ctx.font = 'bold 24px Arial';
                    ctx.fillStyle = '#c3a1f5ff';
                    ctx.textAlign = 'center';
                    ctx.shadowColor = "black";
                    ctx.shadowBlur = 4;
                    ctx.shadowOffsetX = 2;
                    ctx.shadowOffsetY = 2;
                    ctx.fillText(price, canvas.width / 2, nextY + 25);
                    // Rounded corner rectangle for seller name and icon at bottom center
                    const balloonWidth = 250;
                    const balloonHeight = 60;
                    const balloonX = (canvas.width - balloonWidth) / 2;
                    const balloonY = canvas.height - balloonHeight;


                    // Icon inside balloon
                    const imgSize = 45;
                    const imgX = balloonX;
                    const imgY = balloonY + 15;

                    ctx.save();
                    ctx.beginPath();
                    ctx.arc(imgX + imgSize/2, imgY + imgSize/2, imgSize/2, 0, Math.PI * 2, true);
                    ctx.closePath();
                    ctx.clip();
                    ctx.drawImage(img, imgX, imgY, imgSize, imgSize);
                    ctx.restore();

                    ctx.beginPath();
                    ctx.arc(imgX + imgSize/2, imgY + imgSize/2, imgSize/2, 0, Math.PI * 2, true);
                    ctx.lineWidth = 1;
                    ctx.strokeStyle = 'white';
                    ctx.stroke();

                    // Name inside balloon, same style as title
                    ctx.font = 'bold 20px Arial';
                    ctx.fillStyle = 'white';
                    ctx.textAlign = 'left';
                    ctx.fillText(name, imgX + imgSize + 10, imgY + 25);

                    resolve(canvas.toDataURL());
                };
                img.onerror = (err) => {
                    console.error("Error loading image for marker", err);
                    ctx.font = 'bold 20px Arial';
                    ctx.fillStyle = 'white';
                    ctx.textAlign = 'center';
                    ctx.shadowColor = "black";
                    ctx.shadowBlur = 4;
                    ctx.shadowOffsetX = 2;
                    ctx.shadowOffsetY = 2;

                    let nextY = wrapText(ctx, title, canvas.width / 2, 30, canvas.width - 20, 24);

                    ctx.font = '16px Arial';
                    ctx.fillStyle = '#ffff00';
                    ctx.fillText(price, canvas.width / 2, nextY + 25);

                    ctx.font = '12px Arial';
                    ctx.fillStyle = 'white';
                    ctx.fillText(name, canvas.width / 2, nextY + 55);
                    resolve(canvas.toDataURL());
                };
                img.src = iconUrl;
            });
        };

        const markerImgData = await getMarkerCanvasImg(pdTitle, pPrice, currWebHome + "images/user/s_thumb" + tSellerIcon, tSellerName);

            const marker = new Marker3DElement({
                position: { lat: fltdLat, lng: fltdLng, altitude: fltdaltitude },
                            altitudeMode: "ABSOLUTE",
            });

            // Create HTML template for the marker content
            const template = document.createElement('template');
            template.innerHTML = `<img src="${markerImgData}" style="width: 100%; height: auto;" />`;

            marker.append(template);
            threedmap.append(marker);

            threedmap.addEventListener('gmp-click', (event) => {
                console.log("threedmap: " + JSON.stringify(event.position));
                strtStpNuTDAnm(tThreedPurl);
            });

            threedmap.addEventListener('gmp-camera-changed', (event) => {
                console.log("threedmap: camera changed: " + JSON.stringify(event.camera));
            });
        }
        // window.scrollTo(0, advThreeDPop.offsetTop - 100);
        if(tMdiaID == 101) {
            strtStpNuTDAnm(tThreedPurl);
        }
    } // end initNwstThreeDView

 function startNuTDAnim(tNTDAurl) {
        console.log("doNuThreeDAnim: " + tNTDAurl);
        tNTDAobj = JSSHOP.shared.urlToArray(tNTDAurl);
        tNTDAlat = tNTDAobj["center"].split(",")[0];
        tNTDAlng = tNTDAobj["center"].split(",")[1];
        tNTDAalt = tNTDAobj["altitude"];
        tNTDAlat = parseFloat(tNTDAlat);
        tNTDAlng = parseFloat(tNTDAlng);
        tNTDAalt = parseFloat(tNTDAalt);
        tNTtilt = tNTDAobj["tilt"];
        tNTDheading = tNTDAobj["heading"];
        tNTrange = tNTDAobj["range"];
        tFNTrange = parseFloat(tNTrange);
        tNTDtilt = parseFloat(tNTtilt);
        tNTDheading = parseFloat(tNTDheading);
        // set camera to
        console.log("doNuThreeDAnim: " + tNTDAlat + " " + tNTDAlng + " " + tNTDAalt);
        threedmap.flyCameraTo({
            endCamera: {
                center: { lat: tNTDAlat, lng: tNTDAlng, altitude: 500 },
                tilt: tNTDtilt,
                range: tFNTrange,
            },
            durationMillis: 2000
        }, {once: true});
        threedmap.addEventListener('gmp-animationend', () => {
            doNuThreeDAnim(tNTDAurl);
        });
        }


    function strtStpNuTDAnm(tNTDAurl) {
        console.log("strtStpNuTDAnm: " + tNTDAurl);
        // check if animation is running
 if(isThreeDrun == "no") {
            isThreeDrun = "yes";
            // document.getElementById("btnAEPplay").value = "Stop";
            startNuTDAnim(tNTDAurl);
            // put the Stop word in the button

        } else {
            isThreeDrun = "no";
            threedmap.removeEventListener('gmp-animationend', () => {
                donada = "yes";
            });
            threedmap.stopCameraAnimation();
            // put the Play word in the button
            // document.getElementById("btnAEPplay").value = "Play";

        }
    }

    // END 3DMap functions















function doPrpMDDSlct(apld, aaw,aww,cww) {
  tPsLctPlObj = null;
  tPsLctPlarr = [];
  tDDiid = "";
  tDDiidx = "";
  if(apld.indexOf(":") != -1) {
      tPsLctPlarr = apld.split(":");
      tDDiid = tPsLctPlarr[0];
      tDDiidx = tPsLctPlarr[1];
      }

  console.log('doPrpMDDSlct: ' +  apld + " :: " + aaw + " :: " + aww);
 switch(aww) {
  case "edit":
    // alert('doPrpMDDSlct - edit');
    eindex('aa-edit-prop', 'pid=aa-edit-prop&prpid=' + tDDiid);
    break;
  case "view":
     eindex('aa-show-prop', 'pid=aa-show-prop&prpid=' + tDDiid);
    break;
  case "share":
    JSSHOP.ui.showShareBox('property',  tDDiidx);
    break;
  case "msg":
    JSSHOP.msgs.prepMsgBox(currShopsArr[tDDiidx].uid, currShopsArr[tDDiidx].u_fullname, currShopsArr[tDDiidx].u_icon, tDDiidx, 'showMsgSave');
    // JSSHOP.msgs.showMsgBox('uproperty', tDDiidx, 'showMsgSave');
    break;
  case "fav":
    doRecentFavorite('index.html?pid=aa-show-prop&prpid=' + tDDiid, 'noQvalue', 'noQvalue', tDDiid, 'btnFavs' + tDDiid);
    break;
  case "streetview":
    tPropObj = currShopsArr[tDDiidx];
    tSrvLLstr = tPropObj.ploclat + "," + tPropObj.ploclng;
    window.open("http://maps.google.com/maps?q=&layer=c&cbll=" + tSrvLLstr);
    break;
  default:
    alert('doPrpMDDSlct - default');
    break;

}
}
//
function getCountryFlagIcon(acountryName) {
  // get country code from apcountryCode name
    var countryCode = JSSHOP.shared.getCountryCodeFromName(acountryName);

    // convert countryCode to lower case
    console.log("getCountryFlagIcon - countryCode: " + countryCode);
    var ccLower = countryCode.toLowerCase();
    // create the unicode flag icon using the country code
    // var flagIcon = String.fromCodePoint(0x1F1E6 + ccLower.charCodeAt(0) - 97) + String.fromCodePoint(0x1F1E6 + ccLower.charCodeAt(1) - 97);
    // use the new unicode emoji flags
    var flagIcon = JSSHOP.shared.getEmojiCntryFlag(countryCode);

    console.log("getCountryFlagIcon - flagIcon: " + flagIcon);
    return flagIcon;
}

function doMPropsList(aaw,aww,cww) {
    console.log('doMPropsList - aww: ' + aww);

istrt = 0;
iprplen = 0;
currShopsArr = null;
currShopsArr = [];
fullPrpLstA = JSON.parse(aww);
currShopsArr = fullPrpLstA;
iprplen = fullPrpLstA.length;
retPLstSTr = "";
if(iprplen == 0) {
    retPLstSTr = "<div class=\"col-md-12\"><h4 class=\"text-center text-secondary\">No Properties Found</h4></div>";
}
if(iprplen > 3) {
iprplen = 5;
}
// alert('doMPropsList - iprplen: ' + iprplen);
while(istrt < iprplen){
aprpObj = fullPrpLstA[istrt];
nprpTitle = aprpObj["pd_prptitle"];
aprpTitle = LZString.decompressFromEncodedURIComponent(nprpTitle);
nprpContent = aprpObj["pd_prpdesc"];
aprpContent = LZString.decompressFromEncodedURIComponent(nprpContent);
aprpType = aprpObj["ptype"];
aprpBhk = aprpObj["bhk"];
aprpStype = aprpObj["stype"];
aprpBedroom = aprpObj["bedroom"];
aprpBathroom = aprpObj["bathroom"];
aprpBalcony = aprpObj["balcony"];
aprpKitchen = aprpObj["kitchen"];
aprpHall = aprpObj["hall"];
aprpFloor = aprpObj["floor"];
aprpSize = aprpObj["size"];
aprpPrice = aprpObj["price"];
aprpLocation = aprpObj["location"];
aprpCity = aprpObj["city"];
aprpState = aprpObj["state"];
aprpCountry = aprpObj["country"];
aprpFeature = aprpObj["feature"];
aprpPimage = aprpObj["pimage"];
aprpPimage1 = aprpObj["pimage1"];
aprpPimage2 = aprpObj["pimage2"];
aprpPimage3 = aprpObj["pimage3"];
aprpPimage4 = aprpObj["pimage4"];
aprpUid = aprpObj["uid"];
aprpUFlName = aprpObj["u_fullname"];
aprpStatus = aprpObj["status"];
aprpMapimage = aprpObj["mapimage"];
aprpTopmapimage = aprpObj["topmapimage"];
aprpGroundmapimage = aprpObj["groundmapimage"];
aprpTotalfloor = aprpObj["totalfloor"];
aprpDate = aprpObj["date"];
aprploclat = aprpObj["ploclat"];
aprploclng = aprpObj["ploclng"];
tLocationStr = "";
if(aprpLocation.length < 3) {
  // check aprpCity and aprpSTate to make a full location string
  if(aprpCity.length > 0) {
    tLocationStr += aprpCity;
  }
  if(aprpState.length > 0) {
    if(tLocationStr.length > 0) {
      tLocationStr += ", ";
    }
    tLocationStr += aprpState;
  }
  if(tLocationStr.length == 0) {
    tLocationStr = "Unknown Location";
  }
} else {
  tLocationStr = aprpLocation;
}

// set the unicode flag icon based on aprpCountry
if(aprpCountry.length > 0) {
  tLocationStr += " " + getCountryFlagIcon(aprpCountry);
}

retPLstSTr += "<div class=\"slmtable bkgdClrWhite bottom-shadow\" style=\"margin-top:18px;padding:0px;max-width: 600px;\">";


tPrpMMListObj = null;
tPrpMMListObj = "";
tPrpMMListObj = {};
if((quid == aprpUid) || (u_cat.value == "5")) {
tPrpMMListObj["edit"] = stxt[31];
// tPrpMMListObj["delete"] = stxt[109];
// tPrpMMListObj["privacy"] = stxt[101];
}
tPrpMMListObj["view"] = stxt[53];
tPrpMMListObj["share"] = stxt[72];
tPrpMMListObj["msg"] = stxt[117];
// tPrpMMListObj["fav"] = stxt[21];
// tPrpMMListObj["streetview"] = "Street View";


tDDPrpStr = "";
tDDPrpPLdStr  = aprpObj._id + ":" + istrt;

tDDPrpObj = {};
tDDPrpObj["ddtype"] = "moreHoriz";
tDDPrpObj["fld"] = "noQvalue";
tDDPrpObj["lbl"] = stxt[101];
tDDPrpObj["val"] = "noQvalue";
tDDPrpObj["pload"] = tDDPrpPLdStr;
tDDPrpObj["kvpObj"] = tPrpMMListObj;
tDDPrpObj["cb"] = "doPrpMDDSlct";
tDDPrpObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
tDDPrpObj["lblcls"] = "txtSmall txtBold txtClrGrey";
tDDPrpObj["valcls"] = "txtSmall txtBold txtClrGrey";
tDDPrpObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
tDDPrpObj["horvert"] = "horizontal";
tDDPrpObj["icn"] = "noQvalue";
tDDPrpObj["kvIcnsObj"] = {};
tDDPrpObj["kvIcnsObj"]["edit"] = "&#xe3c9;";
tDDPrpObj["kvIcnsObj"]["view"] = "&#xe8f4;";
tDDPrpObj["kvIcnsObj"]["share"] = "&#xe80d;";
tDDPrpObj["kvIcnsObj"]["msg"] = "&#xe0b7;";
tDDPrpObj["kvIcnsObj"]["fav"] = "&#xe87d;";
tDDPrpObj["kvIcnsObj"]["streetview"] = "&#xe56e;";

tDDPrpStr = JSSHOP.ui.getNuBSdropDstr(tDDPrpObj);
tPrpImgsFldr = currPrpImgsFldr + "/";
if(aprpPimage == "default.jpg") {
 allprpPimage = aprpPimage;
} else {
  if(aprpPimage.indexOf("updt_") != -1) {
    tprpPimage = aprpPimage.replace("updt_", "");
        tPrpImgsFldr = "images/ucontent/";
        allprpPimage = "m_thumb" + tprpPimage;
  } else if(aprpPimage.indexOf("updt3d_") != -1) {
      tprpPimage = aprpPimage.replace("updt3d_", "");

    allprpPimage = LZString.decompressFromEncodedURIComponent(tprpPimage);
    tPrpImgsFldr = "";
    if(has3Dvid == "no") {
          tSrtIMinc = istrt;
      apIMimg = allprpPimage;
      has3Dvid = "yes";
      initGMap();
        setTimeout(function(){ initNwstIMThreeDView("dvPrpImg" + tSrtIMinc, apIMimg, 101); }, 2000);
    }
   } else {

    tprpPimage = aprpPimage;
      allprpPimage = "m_thumb" + tprpPimage;

  }
}
/*
retPLstSTr += "<div tid=\"dvCoFavBtn\" style=\"float: right\"></div>";

<div style="float: right"><span class="cls_button cls_button-xxsmall bkgdClrWhite brdrClrDlg txtClrDlg" onclick="javascript:doRecentFavorite('index.html?pid=aa-show-item&amp;itemid=12&amp;cid=15155&amp;catid=5','Apoyobrazos central para un BMW 2.6-','0','12','btnFavs12');"><i id="btnFavs12" class="material-icons txtClrTtl" alt="favorite" title="favorite" value="favorite">?</i></span><span class="cls_button cls_button-xxsmall bkgdClrWhite brdrClrDlg txtClrDlg" style="margin:2px;" onclick="JSSHOP.ui.showShareBox('product',12);"><i class="material-icons txtClrTtl" alt="share" title="share" value="share">?</i></span><span class="cls_button cls_button-xxsmall bkgdClrWhite brdrClrDlg txtClrDlg" style="margin:2px;" onclick="JSSHOP.msgs.showMsgBox('product', ts._id,'showMsgSave');"><i class="material-icons txtClrTtl" alt="chat" title="messages" value="messages">?</i></span></div>
*/
currFTclr = "cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrDlg";
 if(currFavsIdstr.indexOf(aprpObj._id + "::") != -1) {
currFTclr = "cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrRed";
}

retPLstSTr += "<table style=\"width: 100%\"><tr><td style=\"min-width:40px;\">";

//  <div  onclick="javascript:JSSHOP.ui.toggleVisibility('tdUploadBtn');" class="crsrPointer"><img alt="User Icon" src="images/misc/default_user.png"  class="slmtable brdrClrDlg" style="minn-width:150px;max-width:160px;text-align:center;margin-right:3px" align="absmiddle" id="imgIedit"><span class="txtSmall txtClrGrey">Edit</span></div>
retPLstSTr += "<a href=\"javascript:eindex('aa-show-user', 'pid=aa-show-user&tuid=" + aprpUid + "');\" class=\"crsrPointer\">";
retPLstSTr += "<div><img alt=\"Profile\" src=\"images/user/s_thumb" + aprpObj.u_icon + "\"  class=\"icnRndnUser\" align=\"absmiddle\"><br><span class=\"txtSmall txtClrGrey\">" + aprpUFlName + "</span></div></a>";


retPLstSTr += "</td><td style=\"vertical-align:top;width:100%\">";
retPLstSTr += "<span class=\"txtBold txtClrLtBlue text-capitalize\" style=\"margin-bottom:0px;\"><a href=\"javascript:eindex('aa-show-prop','pid=aa-show-prop&prpid=" + aprpObj._id + "')\">" + aprpTitle + "</a></h5>";
 retPLstSTr += "<table style=\"width:100%;\"><tbody><tr><td><i class=\"small-material-icons coll-menu-item txtClrHdr txtBold\" alt=\"location_on\" title=\"Location\" style=\"verticle-align:middle;color:#dbddd9;\">&#xe0c8;</i></td><td><span class=\"txtSmall txtBold txtClrHdr\">" + tLocationStr + "</span></td>";
retPLstSTr += "<td class=\"txtBold txtBig\" nowrap=\"nowrap\">" + aprpPrice + "<span style=\"vertical-align:center;font-size:smaller;align: absmiddle\" class=\"txtClrGrey\">&euro;</span></td></tr></tbody></table>";

retPLstSTr += "</td><td style=\"vertical-align:top\">" + tDDPrpStr + "</td></tr></table>";
if(has3Dvid == "yes" && tSrtIMinc == istrt) {
retPLstSTr += "<div   id=\"dvPrpImg" + istrt + "\"  style=\"z-index:99999990;height:320px;width:320px;\">";
retPLstSTr += "<div   onclick=\"javascript:eindex('aa-show-prop','pid=aa-show-prop&prpid=" + aprpObj._id + "')\"> <img src=\"" + tPrpImgsFldr + allprpPimage + "\" alt=\"pimage\" class=\"\" style=\"width:320px;height:320px;\"></div>";
retPLstSTr += "<div class=\"sale  slmtable bkgdClrWhite txtClrHdr txtSmall\">ID: " + aprpObj._id + " / " + svftObj["proptype"][aprpType] + " / " + stxt[953] + ": " + aprpSize + "</div>";

retPLstSTr += "</div>"; // end featured-thumb hover-zoomer mb-4

} else {
 retPLstSTr += "<div class=\"featured-thumb hover-zoomer mb-4\" id=\"dvPrpImg" + istrt + "\" style=\"min-height: 300px; min-width: 99%; max-width: 99%; visibility: visible; display: block; z-index: 99999990; max-height: 500px\">";
retPLstSTr += "<div class=\"overlay-black overflow-hidden position-relative crsrPointer\" onclick=\"javascript:eindex('aa-show-prop','pid=aa-show-prop&prpid=" + aprpObj._id + "')\"> <img src=\"" + tPrpImgsFldr + allprpPimage + "\" alt=\"pimage\" class=\"img100p\" style=\"width:100%;max-height:380px;\">";
retPLstSTr += "<div class=\"sale  slmtable bkgdClrWhite txtClrHdr txtSmall\">ID: " + aprpObj._id + " / " + svftObj["proptype"][aprpType] + " / " + stxt[953] + ": " + aprpSize + "</div>";

retPLstSTr += "</div>"; // end featured-thumb hover-zoomer mb-4
}




retPLstSTr += "<div class=\"featured-thumb-data shadow-one\">";

/*
retPLstSTr += "<div class=\"p-3\">";
retPLstSTr += "<span class=\"location text-capitalize\"><i class=\"fas fa-map-marker-alt text-primary\"></i> " + aprpLocation + "</span> </div>";
retPLstSTr += "<div class=\"px-4 pb-4 d-inline-block w-100\">";
retPLstSTr += "<div class=\"\"> <a href=\"propertydetail.php?pid=" + aprpUid + "\" class=\"txtSmall txtBold txtDecorNone\">" + stxt[99] + "...</a> </div>";
retPLstSTr += "<div class=\"float-right\"><i class=\"nav-material-icons coll-menu-item txtClrHdr\" style=\"margin-right:4px;margin-top:2px;\">&#xe0b7;</i> <a href=\"contact.php?propid=" + aprpUid + "\" class=\"txtSmall txtBold txtDecorNone\">" + stxt[98] + "</a> </div>";
retPLstSTr += "</div>";
*/


retPLstSTr += "<div class=\"bg-gray quantity px-4 pt-4 txtSmall\" style=\"padding: 6px;\">";
// retPLstSTr += a short version of the property aprpContent
strpdPcontent = "";
if(aprpContent == "" || aprpContent == null || aprpContent == undefined || aprpContent == "noQvalue") {
  aprpContent = "Description goes here.";
}
  // strip html from aprpContent
  strpdPcontent = aprpContent.replace(/<\/?[^>]+(>|$)/g, "");
  shortPcontent = strpdPcontent.length > 100 ? strpdPcontent.substring(0, 100) + "..." : strpdPcontent;
  retPLstSTr +=  shortPcontent;
/*
retPLstSTr += "<ul>";
retPLstSTr += "<li><div style=\"float:left;\"><b>" + aprpSize + " </b>  <span class=\"txtSmall\">" + stxt[953] + "</span></div></li>";
retPLstSTr += "<li><div style=\"float:left;\"><b>" + aprpBedroom + " </b>  <span class=\"txtSmall\">" + stxt[922] + "</span></div></li>";
retPLstSTr += "<li><div style=\"float:left;\"><b>" + aprpBathroom + " </b>  <span class=\"txtSmall\">" + stxt[923] + "</span></div></li>"
retPLstSTr += "<li><div style=\"float:left;\"><b>" + aprpKitchen + " </b>  <span class=\"txtSmall\">" + stxt[926] + "</span></div></li>";
retPLstSTr += "</ul>";
*/
retPLstSTr += "</div>"; // end bg-gray quantity px-4 pt-4



retPLstSTr += "<div class=\"bkgdClrWhite\" style=\"padding:2px;\">";
// table

retPLstSTr += "<table style=\"width:100%;margin:0 auto;\"><tr><td style=\"vertical-align:center;\">";
  currFTclr = "menu-material-icons txtClrTtl";
 if(currFavsIdstr.indexOf(aprpObj._id + "::") != -1) {
currFTclr = "menu-material-icons txtClrRed";
}
retPLstSTr += "<span tid=\"dvCoFavBtn\" class=\"crsrPointer\" onclick=\"javascript:doRecentFavorite('index.html?pid=aa-show-prop&prpid=" + aprpObj._id + "','" + aprpTitle + "','images/property/s_thumb" + aprpPimage + "','" + aprpObj._id + "','btnFavs" + aprpObj._id + "');\"><i id=\"btnFavs" + aprpObj._id + "\" class=\"" + currFTclr + "\" alt=\"favorite\" title=\"favorite\" value=\"favorite\">&#xe87d;</i>" + " " + stxt[618] + "</span>";

retPLstSTr += "</td>";
retPLstSTr += "<td>";
// retPLstSTr += "<span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrLtBlue\" style=\"margin:2px;\" onclick=\"JSSHOP.msgs.showMsgBox('uproperty'," + istrt + ",'showMsgSave');\"><i class=\"material-icons txtClrTtl\" alt=\"chat\" title=\"messages\" value=\"messages\">&#xe0b7;</i>" + " " + stxt[98] + "</span>";
if(quid == aprpUid) {
  // do not show message button if the user is the owner of the property
  retPLstSTr += "";
} else {
retPLstSTr += "<span class=\"crsrPointer\" style=\"margin:2px;\" onclick=\"JSSHOP.msgs.prepMsgBox(" + aprpUid + ",'" + aprpUFlName + "','" + aprpObj.u_icon + "','" + istrt + "','showMsgSave');\"><i class=\"menu-material-icons\" alt=\"chat\" title=\"messages\" value=\"messages\">&#xe0b7;</i>" + " " + stxt[98] + "</span>";

}

retPLstSTr += "</td>";
retPLstSTr += "<td>";
retPLstSTr += "<span class=\"crsrPointer\" style=\"margin:2px;text-align:absmiddle;vertical-align:center;\" onclick=\"JSSHOP.ui.showShareBox('property'," + istrt + ");\"><i class=\"menu-material-icons\" alt=\"share\" title=\"share\" value=\"share\">&#xe80d;</i>" + " " + stxt[72] + "</span>";


retPLstSTr += "</td></tr></table>";
// streetview link http://maps.google.com/maps?q=&layer=c&cbll=
tSrvLLstr = aprploclat + "," + aprploclng;
// retPLstSTr += "<span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrDlg\" style=\"margin:2px;\"><a href=\"http://maps.google.com/maps?q=&layer=c&cbll=" + tSrvLLstr + "\"><i class=\"material-icons txtClrTtl\" alt=\"streetview\" title=\"streetview\" value=\"streetview\">&#xe56e;</i> Street View</a></span>";



retPLstSTr += "</div>"; // end bkgdClrWhite

retPLstSTr += "<div class=\"bkgdClrWhite\" style=\"padding:2px;\">" + getComntLikeDiv(aprpObj._id, 3) + "</div>";




retPLstSTr += "</div>"; // end featured-thumb-data shadow-one






// retPLstSTr += "<div class=\"featured bg-primary text-white\">New</div>";
retPLstSTr += "</div>"; // end overlay-black overflow-hidden position-relative





retPLstSTr += "</div>";  // end col-md-6

 // add clearfix div




istrt++;
}
// return retPLstSTr;
JSSHOP.ui.setTinnerHTML("dvMainPrpsLst",retPLstSTr);
for(var iPlCnt = 0; iPlCnt < iprplen; iPlCnt++) {
    loadComntLikeCounts(fullPrpLstA[iPlCnt]._id, 3);
}
// alert('doMPropsList - aaw: ' + aaw);
// JSSHOP.ads.doGenMapShow();

 JSSHOP.ads.doGenericPlug('mpmenu',3,'dvPartLinks');
 if(quid == 0 || quid == "0") {
 getTestUsers("divIUsersList");
 }
    tUFObj = {};
tUFObj["uplmt"] = 5;
tUFObj["upcb"] = "jshp_ads_showUpdtsFeed";
 JSSHOP.ads.doNurUpdatesFeed(tUFObj);
 }


function showUpdatesFeed(aaw,aww,cww) {
 // JSSHOP.ui.setTinnerHTML("dvMainUdtsLst",aww);
};


function getPrpObjSTr(aPrpObj) {
  retPLstSTr = "";
  aprpObj = null;
  aprpObj = aPrpObj;
aprpTitle = aprpObj["ptitle"];
aprpContent = aprpObj["pcontent"];
aprpType = aprpObj["ptype"];
aprpBhk = aprpObj["bhk"];
aprpStype = aprpObj["stype"];
aprpBedroom = aprpObj["bedroom"];
aprpBathroom = aprpObj["bathroom"];
aprpBalcony = aprpObj["balcony"];
aprpKitchen = aprpObj["kitchen"];
aprpHall = aprpObj["hall"];
aprpFloor = aprpObj["floor"];
aprpSize = aprpObj["size"];
aprpPrice = aprpObj["price"];
aprpLocation = aprpObj["location"];
aprpCity = aprpObj["city"];
aprpState = aprpObj["state"];
aprpFeature = aprpObj["feature"];
aprpPimage = aprpObj["pimage"];
aprpPimage1 = aprpObj["pimage1"];
aprpPimage2 = aprpObj["pimage2"];
aprpPimage3 = aprpObj["pimage3"];
aprpPimage4 = aprpObj["pimage4"];
aprpUid = aprpObj["uid"];
aprpStatus = aprpObj["status"];
aprpMapimage = aprpObj["mapimage"];
aprpTopmapimage = aprpObj["topmapimage"];
aprpGroundmapimage = aprpObj["groundmapimage"];
aprpTotalfloor = aprpObj["totalfloor"];
aprpDate = aprpObj["date"];
aprploclat = aprpObj["ploclat"];
aprploclng = aprpObj["ploclng"];
retPLstSTr += "<div class=\"col-md-6\" style=\"padding-bottom:4px;\">";
/*
retPLstSTr += "<div tid=\"dvCoFavBtn\" style=\"float: right\"></div>";

<div style="float: right"><span class="cls_button cls_button-xxsmall bkgdClrWhite brdrClrDlg txtClrDlg" onclick="javascript:doRecentFavorite('index.html?pid=aa-show-item&amp;itemid=12&amp;cid=15155&amp;catid=5','Apoyobrazos central para un BMW 2.6-','0','12','btnFavs12');"><i id="btnFavs12" class="material-icons txtClrTtl" alt="favorite" title="favorite" value="favorite">?</i></span><span class="cls_button cls_button-xxsmall bkgdClrWhite brdrClrDlg txtClrDlg" style="margin:2px;" onclick="JSSHOP.ui.showShareBox('product',12);"><i class="material-icons txtClrTtl" alt="share" title="share" value="share">?</i></span><span class="cls_button cls_button-xxsmall bkgdClrWhite brdrClrDlg txtClrDlg" style="margin:2px;" onclick="JSSHOP.msgs.showMsgBox('product', ts._id,'showMsgSave');"><i class="material-icons txtClrTtl" alt="chat" title="messages" value="messages">?</i></span></div>
*/
currFTclr = "material-icons txtClrTtl";
 if(currFavsIdstr.indexOf(aprpObj._id + "::") != -1) {
currFTclr = "material-icons txtClrRed";
}
tIMPrpImg = aprpPimage;

// if tIMPrpImg indexOf updt_ then remove updt_
if(tIMPrpImg.indexOf("updt_") != -1) {
  tIMPrpImg = aprpPimage.replace("updt_", "");
  tCurrPrpImgsFldr = "images/updates";
} else {
  tCurrPrpImgsFldr = currPrpImgsFldr;
}
retPLstSTr += "<table><tr><td style=\"min-width:40px;\">";
//  <div  onclick="javascript:JSSHOP.ui.toggleVisibility('tdUploadBtn');" class="crsrPointer"><img alt="User Icon" src="images/misc/default_user.png"  class="slmtable brdrClrDlg" style="minn-width:150px;max-width:160px;text-align:center;margin-right:3px" align="absmiddle" id="imgIedit"><span class="txtSmall txtClrGrey">Edit</span></div>
retPLstSTr += "<div  onclick=\"javascript:eindex('aa-show-prop','pid=aa-show-prop&prpid=" + aprpObj._id + "')\" class=\"crsrPointer\"><img alt=\"Profile\" src=\"images/user/" + aprpObj.u_icon + "\"  class=\"icnRndDSmUser\" align=\"absmiddle\"><br><span class=\"txtSmall txtClrGrey\">Edit</span></div>";
retPLstSTr += "</td><td>";
retPLstSTr += "<h5 class=\"text-secondary hover-text-primary text-capitalize\" style=\"margin-bottom:0px;\"><a href=\"javascript:eindex('aa-show-prop','pid=aa-show-prop&prpid=" + aprpObj._id + "')\">" + aprpTitle + "</a></h5>";
 retPLstSTr += "<table style=\"width:100%;\"><tbody><tr><td><i class=\"small-material-icons coll-menu-item txtClrHdr txtBold\" alt=\"location_on\" title=\"Location\" style=\"verticle-align:middle;color:#dbddd9;\">&#xe55c;</i></td><td><span class=\"txtSmall txtBold txtClrHdr\">" + aprpLocation + "</span></td><td style=\"text-align:right;\" nowrap=\"nowrap\"><div class=\"price text-primo\" style=\"margin-right:10px;\"><span class=\"text-primary txtSmall\">&euro;</span>&nbsp;&nbsp;<b>" + aprpPrice + "</b></div></td></tr></tbody></table>";

retPLstSTr += "</td></tr></table>";

 retPLstSTr += "<div class=\"featured-thumb hover-zoomer mb-4\">";
retPLstSTr += "<div class=\"overlay-black overflow-hidden position-relative crsrPointer\" onclick=\"javascript:eindex('aa-show-prop','pid=aa-show-prop&prpid=" + aprpObj._id + "')\"> <img src=\"" +  tCurrPrpImgsFldr + "/" + tIMPrpImg + "\" alt=\"pimage\" class=\"img100p\">";
retPLstSTr += "<div class=\"featured bg-primary text-white\">New</div>";
retPLstSTr += "<div class=\"sale bg-secondary text-white text-capitalize\">" + svftObj["proptype"][aprpType] + "</div>";
retPLstSTr += "</div>"; // end overlay-black overflow-hidden position-relative
retPLstSTr += "<div class=\"featured-thumb-data shadow-one\">";

/*
retPLstSTr += "<div class=\"p-3\">";
retPLstSTr += "<span class=\"location text-capitalize\"><i class=\"fas fa-map-marker-alt text-primary\"></i> " + aprpLocation + "</span> </div>";
retPLstSTr += "<div class=\"px-4 pb-4 d-inline-block w-100\">";
retPLstSTr += "<div class=\"\"> <a href=\"propertydetail.php?pid=" + aprpUid + "\" class=\"txtSmall txtBold txtDecorNone\">" + stxt[99] + "...</a> </div>";
retPLstSTr += "<div class=\"float-right\"><i class=\"nav-material-icons coll-menu-item txtClrHdr\" style=\"margin-right:4px;margin-top:2px;\">&#xe0b7;</i> <a href=\"contact.php?propid=" + aprpUid + "\" class=\"txtSmall txtBold txtDecorNone\">" + stxt[98] + "</a> </div>";
retPLstSTr += "</div>";
*/


retPLstSTr += "<div class=\"bg-gray quantity px-4 pt-4\">";
retPLstSTr += "<ul>";
retPLstSTr += "<li><b>" + aprpSize + "</b> Area m2</li>";
retPLstSTr += "<li><b>" + aprpBedroom + "</b>" + stxt[922] + "</li>";
retPLstSTr += "<li><b>" + aprpBathroom + "</b>" + stxt[923] + "</li>"
retPLstSTr += "<li><b>" + aprpKitchen + "</b>" + stxt[926] + "</li>";
retPLstSTr += "</ul>";




retPLstSTr += "</div>"; // end bg-gray quantity px-4 pt-4
retPLstSTr += "<div class=\"bkgdClrWhite\">";
retPLstSTr += "<span class=\"crsrPointe txtSmall\" style=\"margin:2px;\" onclick=\"JSSHOP.ui.showShareBox('property'," + istrt + ");\"><i class=\"material-icons txtClrTtl\" alt=\"share\" title=\"share\" value=\"share\">&#xe80d;</i></span>";
retPLstSTr += "<span class=\"crsrPointer txtSmall\" style=\"margin:2px;\" onclick=\"JSSHOP.ads.getUPrpAprsStr(" + istrt + ");\"><i class=\"material-icons txtClrTtl\" alt=\"chat\" title=\"messages\" value=\"messages\">&#xe0b7;</i></span>";
retPLstSTr += "<span tid=\"dvCoFavBtn txtSmall\" class=\"crsrPointer\" onclick=\"javascript:doRecentFavorite('index.html?pid=aa-show-prop&prpid=" + aprpObj._id + "','" + aprpTitle + "','noQvalue','" + aprpObj._id + "','btnFavs" + aprpObj._id + "');\"><i id=\"btnFavs" + aprpObj._id + "\" class=\"" + currFTclr + "\" alt=\"favorite\" title=\"favorite\" value=\"favorite\">&#xe87d;</i></span>";
// streetview link http://maps.google.com/maps?q=&layer=c&cbll=
tSrvLLstr = aprploclat + "," + aprploclng;
retPLstSTr += "<span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrDlg\" style=\"margin:2px;\"><a href=\"http://maps.google.com/maps?q=&layer=c&cbll=" + tSrvLLstr + "\"><i class=\"material-icons txtClrTtl\" alt=\"streetview\" title=\"streetview\" value=\"streetview\">&#xe56e;</i> Street View</a></span>";



retPLstSTr += "</div>"; // end bkgdClrWhite




retPLstSTr += "</div>"; // end featured-thumb-data shadow-one
retPLstSTr += "</div>"; // end featured-thumb hover-zoomer mb-4





retPLstSTr += "</div>";  // end col-md-6 col-lg-4
retPLstSTr += "<hr>";
return retPLstSTr;
}




 function doGenPrpPop(tCowRecInc) {
/*

*/

aTPrpObj = null;
aTPrpObj = currShopsArr[tCowRecInc];
aTPrpOstr = "";
aTPrpOstr = getPrpObjSTr(aTPrpObj);
// aTPrpOstr += rcL;

 JSSHOP.ui.popAndFillLbox(aTPrpOstr);



 }



var dmyFnishCntLoad = fnishCntLoad;
fnishCntLoad = function() {
JSSHOP.ads.doGenericPlug("main", "index_main", "dvPartLinks");
document.title = shopTitle;
 tmpDOqs = null;
tmpDOqs = {};
tmpDOqs["ws"] = "where _id>?";
tmpDOqs["wa"] = [0];
tmpDOqs["l"] = 4;
tmpDOqs["o"] = " order by rand()";
oia = getNuDBFnvp("property",5,null,tmpDOqs);
newerQstr = "SELECT p.*, u.u_icon, u.u_fullname, COALESCE(pd_user.pd_prptitle, pd_def.pd_prptitle) AS pd_prptitle, COALESCE(pd_user.pd_prpdesc,  pd_def.pd_prpdesc)  AS pd_prpdesc FROM property p JOIN quser u ON p.uid = u._id LEFT JOIN propdescs pd_user ON pd_user.pd_prpid = p._id AND pd_user.pd_prptlng = '" +  usrlang + "' LEFT JOIN propdescs pd_def ON pd_def.pd_prpid = p._id AND pd_def.pd_prptlng = '" + deflang + "' WHERE p._id > 0 AND p.prtype = '5' ORDER BY _id desc LIMIT 20";
doQComm(newerQstr, null, "doMPropsList");
return dmyFnishCntLoad;
};

/*
to delete

 var getIItmsLst = function(tPrpIarr) {

    var aulen = tPrpIarr.length;
    var iupint = 0;
    var pucid = 0;
    autstr = "<table style=\"width: 100%\">";
    tpshdSTr = "";
    fullurpstr = "";
    while(iupint < aulen) {
        tsuar = tPrpIarr[iupint];


        atstr = "";
        atstr += "<tr>";

       //  tSTstr =  ts.u_name + ts.u_fullname + ts.u_cat;


        tsUT = tsuar.u_cat;
        tsrtUT = tsuar.u_cat;


        atstr += "<td style=\"text-align: left\"  nowrap=\"nowrap\">";
        // atstr += "<div  onclick=\"javascript:eindex('aa-show-prop','pid=aa-show-prop&prpid=" + aprpObj._id + "')\" class=\"crsrPointer\"><img alt=\"Profile\" src=\"images/user/" + aprpObj.u_icon + "\"  class=\"icnRndSmUser\" align=\"absmiddle\"><br><span class=\"txtSmall txtClrGrey\">Edit</span></div>";
        atstr += "<div onclick=\"javascript:eindex('aa-show-user','pid=aa-show-user&tuid=" + tsuar._id + "')\" class=\"crsrPointer\"><img alt=\"Profile\" src=\"images/user/" + tsuar.u_icon + "\"  class=\"icnRndDSmUser\" align=\"absmiddle\">&nbsp;";
        atstr +=  "<span class=\"txtBold txtCLrHdr\">" +  tsuar.u_fullname +  "</span></div>";
        atstr += "</td>";

        atstr += "</tr>";
        autstr += atstr;

    iupint++;
    }
    autstr += "</table>";

    return autstr;
    };
*/
