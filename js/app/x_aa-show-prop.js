currIContent = "y";
var tmpSocLinksArr = null;
var tmpSocLinksArr = "";
var tmpSocLinksArr = [];
var tmpFBJSLoaded = "n";
var tmpFBIDvsArr = [];
var tmpFBscrLdd = "n";
var tmpSVloclat = "0";
var tmpSVloclng = "0";
var tmpSVurl = "";
var threedvmap = null;
var tmpPrpDscsObj = null;
var tmpPrpDscsObj = {};
var tmpSVzoom = "";
var tmpSVpov = "";
var tmpSVheading = "";
var tmpSVpitch = "";
var tmpSaveBtnID = null;
var tmpPropImgArr = null;
var tmpPropImgArr = "";
var tmpPropImgArr = [];
var gpmap = null;
var currPgTitle = stxt[985];
var threedmap = null;
var isThreeDrun = "no";
var currGglSVloaded = "no";

var tmpMFarrObj = null;
var tmpMFarrObj = {};
// https://developers.google.com/maps/documentation/streetview/request-streetview
if(currUrlArr.prpid) {
    prpid = currUrlArr.prpid;
}
if(currUrlArr.ditemid) {
    prpid = currUrlArr.ditemid;
    currUrlArr.prpid = prpid;
}


var panorama;

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
    tFltdSVlat = parseFloat(tmpSVloclat);
    tFltdSVlng = parseFloat(tmpSVloclng);
     
  }


  async function doThreeDVAnim(fLocLat, fLocLng, fLocAlt) {
    // threedmap.append(xMarker3DElement);
// const beachFlagImg = document.createElement('img');

// set interactiveMarker position to fLocLat and fLocLng
// set interactiveMarker position to fLocLat and fLocLng
    // creat a save, play and stop button html string and append it to the dvThreeDPop div
    
    /* xMarker3DElement = AdvancedMarkerElement;
    xMarker3DElement = new Marker3DElement({
        position: { lat: fltdLat, lng: fltdLng, altitude: 10 },
        label: tmp_ptitle.value,
        extruded: true,
        altitudeMode: "RELATIVE_TO_MESH",

    });
    threedmap.append(xMarker3DElement);
        */
// beachFlagImg.src = 'images/logo/logo.png';
var { PinElement } = await google.maps.importLibrary("marker");
var { Marker3DInteractiveElement } = await google.maps.importLibrary("maps3d");

const pinBackground = new PinElement({
background: '#FBBC04',
glyph: '*',
glyphColor: 'white',
scale: .5,

});

interactiveMarker = new Marker3DInteractiveElement({
position: { lat: fltdLat, lng: fltdLng, altitude: 10 },
label: ptitle.value,
extruded: true,
altitudeMode: "RELATIVE_TO_MESH",
});


interactiveMarker.addEventListener('gmp-click', (event) => {
console.log("interactiveMarker: " + JSON.stringify(event.position));
doThreeDAnim(fltdLat, fltdLng, 10);
});
interactiveMarker.append(pinBackground);

interactiveMarker.position = { lat: fLocLat, lng: fLocLng, altitude: 10 };
  threedvmap.append(interactiveMarker);


// threedmap.append(beachFlagMarker);
threedvmap.flyCameraTo({
  endCamera: {
    center: { lat: fLocLat, lng:  fLocLng, altitude: fLocAlt },
    tilt: 70.5,
    range: 200,


  },
  durationMillis: 3000
});
threedvmap.addEventListener('gmp-animationend', () => {

    threedvmap.flyCameraAround({
    camera: {
      center: { lat: fLocLat, lng:  fLocLng, altitude: fLocAlt },
      tilt: 70.5,
        range: 70,

  
    },
    durationMillis: 7000,
    repeatCount: 1
  });
}, {once: true});

tmpThreeDLat = fLocLat;
tmpThreeDLng = fLocLng;
tmpThreeDAlt = fLocAlt;

}

/* */
async function initNuThreeDView(tImgSrc) {
    tAVImgUstr = tUnZpd;
    console.log("initNuThreeDView: " + tImgSrc);
    JSSHOP.ui.showHideElement("dvAPrpImg", "hide");
    JSSHOP.ui.showHideElement("street-view", "hide");
    JSSHOP.ui.showHideElement("dvThreeDView", "show");
    document.getElementById("dvThreeDView").innerHTML = "";
    advThreeView = document.getElementById('dvThreeDView');
    // advThreeView.innerHTML = "<img src=\"" + tImgSrc + "\" class=\"icnmedbtn slmtable\" onclick=\"javascript:setPropMainImg(this.src);\">";
    // advThreeView.innerHTML += "<div class=\"dvTxtBtns\"><input id=\"btnAEPadd\" type=\"button\" class=\"btnTxtLabel\" value=\"Save Image\" onclick=\"javascript:saveCurr3DImgUrl();\">";
     // set the 3d view to the image src
}
    


    function doNuThreeDAnim(tNTDAurl) {
        // remove the event gmp-animationend event listener
        threedmap.removeEventListener('gmp-animationend', () => {
            donada = "yes";});
     
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
        threedmap.flyCameraTo({
            endCamera: {
                center: { lat: tNTDAlat, lng: tNTDAlng, altitude: tNTDAalt },
                tilt: tNTDtilt,
                range: tFNTrange,
            },
            durationMillis: 2000
        });
        threedmap.addEventListener('gmp-animationend', () => {
            threedmap.flyCameraAround({
                camera: {
                    center: { lat: tNTDAlat, lng: tNTDAlng, altitude: tNTDAalt },
                    tilt: tNTDtilt,
                    range: tFNTrange,
                },
                durationMillis: 8000,
                repeatCount: 1
            });
        }, {once: true});
        tmpThreeDLat = tNTDAlat;
        tmpThreeDLng = tNTDAlng;
        tmpThreeDAlt = tNTDAalt;
        console.log("doNuThreeDAnim: " + tmpThreeDLat + " " + tmpThreeDLng + " " + tmpThreeDAlt);
        isThreeDrun = "yes";
    }



    async function initNurThreeDView(tThreedPurl, tMdiaID) {
            JSSHOP.ui.showHideElement("dvAPrpImg", "hide");
    JSSHOP.ui.showHideElement("street-view", "hide");
    JSSHOP.ui.showHideElement("dvThreeDView", "show");
    // document.getElementById("dvThreeDView").innerHTML = "";
    advThreeView = document.getElementById('dvThreeDView');
           document.getElementById("dvPropFooter").innerHTML = "3D View";

        
        doNuSpinSet("dvThreeDCntnr", "big", null, "...");
        if(tThreedPurl == "noQvalue") {
            tLocLat = tmp_ploclat.value;
            tLocLng = tmp_ploclng.value;
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
            // example 3d pop url:
            // https://maps.googleapis.com/maps/api/staticmap?size=240x180&center=41.23088623703162,-8.536864106855056&key=AIzaSyAiBR8BEPj2YCepKplisQKK709r1TI48Vo&heading=0.00033512782688252757&tilt=67.49679872048947&iid=471&altitude=103.28568490813657&zoom=16&maptype=satellite
            console.log("showNuThreeDPop: " + tThreedPurl);
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
        // set lat and lng to 10 meters south of the center of the map
        xfltdLat = fltdLat;
        xfltdLng = fltdLng;
        advThreeDPop = document.getElementById('dvThreeDCntnr');


        console.log("showNuThreeDPop: " + tLocLat + " " + tLocLng);
        var mapthree;
        var flyToCamera;
        var dvThreeDView;
 

     if(threedmap != null && threedmap != undefined && threedmap != "") {
                    // append the map to the dvThreeDView div
                    threedmap.stopCameraAnimation();
                    threedmap.removeEventListener('gmp-animationend', () => {
                        donada = "yes";});
                        isThreeDrun = "no";
                    advThreeDPop.innerHTML = "";
                    advThreeDPop.append(threedmap);
     } else {
                     t3DBtnStr = "";
            t3DBtnStr += "<div class=\"dvTxtBtns\">";
            t3DBtnStr += "<table><tr><td>";
            t3DBtnStr += "<input id=\"btnAEPplay\" type=\"button\" class=\"cls_button cls_button-small  txtSmall bkgdClrHdr txtClrWhite\" value=\"Play\" onclick=\"javascript:strtStpNuTDAnm('" + tThreedPurl + "');\">";
            t3DBtnStr += "</td><td>";
 
            t3DBtnStr += "</td></tr></table>";
            t3DBtnStr += "</div>";
        ttdBdv = document.createElement("div");
        ttdBdv.innerHTML = t3DBtnStr;
        advThreeView.appendChild(ttdBdv);
      var { Map3DElement, MapMode, Marker3DElement, Marker3DInteractiveElement } = await google.maps.importLibrary("maps3d");
      var { PinElement } = await google.maps.importLibrary("marker");
         threedmap = new Map3DElement({
          center: { lat: xfltdLat, lng: xfltdLng,  altitude: fltdaltitude },
          tilt: flttilt,
          range: fltdrange,
          mode: MapMode.SATELLITE,
          defaultUIDisabled: true,
      
        });

            advThreeDPop.innerHTML = "";
          advThreeDPop.append(threedmap);
 
         // threedmap.bounds = {south: -48.30, west: 163.56, north: -32.86, east: -180};
         threedmap.addEventListener('gmp-click', (event) => {
            console.log("threedmap: " + JSON.stringify(event.position));

            strtStpNuTDAnm(tThreedPurl);
           // strtStpNuTDAnm(getCurr3DImgUrl(280,140));
          });
    
          // add listener to log the range, tilt and heading of the map
            threedmap.addEventListener('gmp-camera-changed', (event) => {
                console.log("threedmap: camera changed: " + JSON.stringify(event.camera));
            });

            
        }
    window.scrollTo(0, document.getElementById("dvThreeDView").offsetTop - 100);

            // creat a save, play and stop button html string and append it to the dvThreeDPop div

  
        }



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
            durationMillis: 1000
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
            document.getElementById("btnAEPplay").value = "Stop";
            startNuTDAnim(tNTDAurl);
            // put the Stop word in the button

        } else {
            isThreeDrun = "no";
            threedmap.removeEventListener('gmp-animationend', () => {
                donada = "yes";
            });
            threedmap.stopCameraAnimation();
            // put the Play word in the button
            document.getElementById("btnAEPplay").value = "Play";

        }
    }

 
// start the 3d view
  async function initThreeDView(tdvLat, tdvLng, tdvAlt) {
    // JSSHOP.ui.closeLbox();
    JSSHOP.ui.showHideElement("dvAPrpImg", "hide");
    JSSHOP.ui.showHideElement("street-view", "hide");
    JSSHOP.ui.showHideElement("dvThreeDView", "show");
    console.log("showThreeDPop: " + tLocLat + " " + tLocLng);
    var mapthree;
    var flyToCamera;
    var dvThreeDPop;
    fltdLat = parseFloat(tdvLat);
    fltdLng = parseFloat(tdvLng);
    // set lat and lng to 10 meters south of the center of the map
    xfltdLat = fltdLat - 0.0101;
    xfltdLng = fltdLng - 0.0101;
    document.getElementById("dvThreeDView").innerHTML = "";
    advThreeView = document.getElementById('dvThreeDView');
    // dvThreeDPop = document.getElementById('dvThreeDPop');
    // dvThreeDPop = document.getElementById('dvThreeDPop');
 // Maps JS API is loaded using Dynamic Library import https://developers.google.com/maps/documentation/javascript/load-maps-js-api#dynamic-library-import

 
 var { Map3DElement, MapMode, Marker3DElement, Marker3DInteractiveElement } = await google.maps.importLibrary("maps3d");
 var { PinElement } = await google.maps.importLibrary("marker");
     threedvmap = new Map3DElement({
      center: { lat: xfltdLat, lng: xfltdLng,  altitude: 540 },
      tilt: 67.5,
      range: 500,
      mode: MapMode.HYBRID,
      defaultUIDisabled: true,
  
    });
     // threedvmap.bounds = {south: -48.30, west: 163.56, north: -32.86, east: -180};
     threedvmap.addEventListener('gmp-click', (event) => {
        console.log("threedvmap: " + JSON.stringify(event.position));
        tLocAlt = 30;
        if(event.position == null) {
            console.log("threedvmap: event.position is null");
            return;
        }  else {
            if(event.position.altitude) {
                tLocAlt = event.position.altitude;
            }
           
            console.log("threedvmap: event.position is not null");
         // threedvmap.flyCameraTo({endCamera:{center:{lat:event.position.lat,lng:event.position.lng,altitude:50},tilt:70.5,range:200}});
        doThreeDVAnim(event.position.lat, event.position.lng, tLocAlt);
        // Do something with event.position.
        }
      });


      advThreeView.append(threedvmap);

      var t3DpopStr = "";
    t3DpopStr += "<div class=\"dvTxtBtns\">";
    t3DpopStr += "<input id=\"btnAEPadd\" type=\"button\" class=\"btnTxtLabel\" value=\"Save Image\" onclick=\"javascript:saveCurr3DImgUrl();\">";
    t3DpopStr += "<input id=\"btnAEPplay\" type=\"button\" class=\"btnTxtLabel\" value=\"Play\" onclick=\"javascript:doThreeDAnim(" + fltdLat + "," + fltdLng + "," + 30 + ");\">";
    t3DpopStr += "<input id=\"btnAEPfly\" type=\"button\" class=\"btnTxtLabel\" value=\"Fly\" onclick=\"javascript:threedmap.flyCameraTo({endCamera:{center:{lat:" + fltdLat + ",lng:" + fltdLng + ",altitude:50},tilt:70.5,range:200}});\">";
    t3DpopStr += "<input id=\"btnAEPanim\" type=\"button\" class=\"btnTxtLabel\" value=\"Animate\" onclick=\"javascript:threedmap.flyCameraAround({camera:{center:{lat:" + fltdLat + ",lng:" + fltdLng + ",altitude:50},tilt:70.5,range:100},durationMillis:7000,repeatCount:1});\">";
    t3DpopStr += "<input id=\"btnAEPreset\" type=\"button\" class=\"btnTxtLabel\" value=\"Reset\" onclick=\"javascript:threedmap.setCamera({center:{lat:" + fltdLat + ",lng:" + fltdLng + ",altitude:540},tilt:67.5,range:500});\">";

    t3DpopStr += "<input id=\"btnAEPstop\"  type=\"button\" class=\"btnTxtLabel\" value=\"Stop\" onclick=\"javascript:threedmap.stopCameraAnimation();\">";
    t3DpopStr += "</div>";
    tHlderDiv = document.createElement("div");
    tHlderDiv.innerHTML = t3DpopStr;
    advThreeView.append(tHlderDiv);
      setTimeout(function(){ doThreeDVAnim(xfltdLat, xfltdLng, tdvAlt); }, 1000);
  }
 

function initStreetView() {
    // JSSHOP.ui.closeLbox();
    JSSHOP.ui.showHideElement("dvAPrpImg", "hide");
    JSSHOP.ui.showHideElement("dvThreeDView", "hide");
    JSSHOP.ui.showHideElement("street-view", "show");
    window.scrollTo(0, document.getElementById("street-view").offsetTop - 100);
    document.getElementById("dvPropFooter").innerHTML = "Street View";
    console.log("initStreetView: " + tmpSVloclat + " :: " + tmpSVloclng);
    // latpos = ploclat.value;
    // lngpos = ploclng.value;
 // 37.86926 -122.254811
    tFltdSVlat = parseFloat(tmpSVloclat);
    tFltdSVlng = parseFloat(tmpSVloclng);
    if(tmpSVheading == "") {
        tmpSVheading = 165;
        tmpSVpitch = 0;
    }
    panorama = new google.maps.StreetViewPanorama(
        document.getElementById("street-view"),
        {
          position: { lat: tFltdSVlat, lng:  tFltdSVlng },
          pov: { heading: tmpSVheading, pitch: tmpSVpitch },
          fullscreenControl: false,
          panControl: false,
          zoomControl: false,
          addressControl: false,
          enableCloseButton: false,
          visible: true,
          motionTracking: false,
          motionTrackingControl: false,
          linksControl: false,
          showRoadLabels: false,
          showLabels: false,
          showLocation: false,
          showHeading: false,
          showPanoProvider: false,
          showZoomControl: false,
          showPanControl: false,
          // do not allow user to move around
            disableDefaultUI: true,
            // lock the panorama to prevent user to move around
            disableDoubleClickZoom: true,
            disableCloseButton: true,
            disableAddressControl: true,
            disablePanControl: true,
            disableZoomControl: true,
            disableLinksControl: true,
            disableMotionTracking: true,
            disableMotionTrackingControl: true,
            disablePovControl: true,
            disableScrollWheel: true
        }
      );
    }

  function doSVDinit(theSCa, theSCb) {
    console.log("doSVDinit");
    if(tmpSVloclat == "0") {
    tmpSVloclat = ploclat.value;
    tmpSVloclng = ploclng.value;
    }
    initStreetView();
    }


function doNuSVLoad(tSVLUstr) {

    tmpSVurl = tSVLUstr;
    console.log("doNuSVLoad: " + tmpSVurl);
    tLZdecdUstr = LZString.decompressFromEncodedURIComponent(tmpSVurl);
    console.log("doNuSVLoad: " + tLZdecdUstr);
    // TODO: Implement loading of Street View using tLZdecdUstr
 
                     TSsvuOBJ = JSSHOP.shared.urlToArray(tLZdecdUstr);
                    tSLocLat = TSsvuOBJ["location"].split(",")[0];
                    tSLocLng = TSsvuOBJ["location"].split(",")[1];
                    tSSVzoom = TSsvuOBJ["zoom"];
                    tSVheading = TSsvuOBJ["heading"];
                    tSVpitch = TSsvuOBJ["pitch"];
                    tSVpopStr = "";
                    tmpSVloclat = tSLocLat;
                    tmpSVloclng = tSLocLng;
                    tmpSVzoom = parseFloat(tSSVzoom);
                    tmpSVheading = parseFloat(tSVheading);
                    tmpSVpitch = parseFloat(tSVpitch);
                    console.log("doNuSVLoad: " + tmpSVloclat + " :: " + tmpSVloclng + " :: " + tmpSVheading + " :: " + tmpSVpitch);
                    initStreetView();
}
function doSVLoad(tlat, tlng) {
    console.log("doSVLoad");
    tmpSVloclat = tlat;
    tmpSVloclng = tlng;
     
    // alert("doSVLoad");
    if(currGglSVloaded == "no") {
        initStreetView();
        currGglSVloaded = "y";
        // JSSHOP.loadScript("https://maps.googleapis.com/maps/api/js?key=" + gglSKey, doSVDinit,"js");
        } else {
            initStreetView();
        }

        if(isThreeDrun == "yes") {
            isThreeDrun = "no";
            threedmap.removeEventListener('gmp-animationend', () => {
                donada = "yes";
            });
            threedmap.stopCameraAnimation();
            // put the Play word in the button
            document.getElementById("btnAEPplay").value = "Play";
        }
}


function setNuPropMainImg(tPrpIarrIndx) {
       console.log("setNuPropMainImg: " + tPrpIarrIndx);

                if(isThreeDrun == "yes") {
            isThreeDrun = "no";
            threedmap.removeEventListener('gmp-animationend', () => {
                donada = "yes";
            });
            threedmap.stopCameraAnimation();
            // put the Play word in the button
            document.getElementById("btnAEPplay").value = "Play";
        }

    if(tmpPropImgArr && tmpPropImgArr.length > 0) {
 tPrpImgObj = tmpPropImgArr[tPrpIarrIndx];
    JSSHOP.ui.showHideElement("dvAPrpImg", "show");
    JSSHOP.ui.showHideElement("street-view", "hide");
    JSSHOP.ui.showHideElement("dvThreeDView", "hide");
    document.getElementById("imgAPrpMain").src = "images/misc/loading.gif";
    tLderIMG = new Image();
    tPIOcatid = tPrpImgObj.m_catid;
    if(tPIOcatid == 5) {
        tLderIMG.src = "images/property/m_thumb" + tPrpImgObj.m_file;
    } else {
        tSPIimg = tPrpImgObj.m_file_thumb;
        tUNLZdimg = LZString.decompressFromEncodedURIComponent(tSPIimg);
        tLderIMG.src = tUNLZdimg;
        console.log("setNuPropMainImg: " + tUNLZdimg);
    }
    tLderIMG.onload = function() {
        document.getElementById("imgAPrpMain").src = tLderIMG.src;
        document.getElementById("dvPropFooter").innerHTML = tPrpImgObj.m_title;
    }
       window.scrollTo(0, document.getElementById("imgAPrpMain").offsetTop - 100);

} else {
    console.log("setNuPropMainImg: No image found");
}
}

function setPropMainImg(tPMImgSRC) {

            if(isThreeDrun == "yes") {
            isThreeDrun = "no";
            threedmap.removeEventListener('gmp-animationend', () => {
                donada = "yes";
            });
            threedmap.stopCameraAnimation();
            // put the Play word in the button
            document.getElementById("btnAEPplay").value = "Play";
        }

        
    console.log("setPropMainImg: " + tPMImgSRC);
    JSSHOP.ui.showHideElement("dvAPrpImg", "show");
    JSSHOP.ui.showHideElement("street-view", "hide");
    JSSHOP.ui.showHideElement("dvThreeDView", "hide");
    document.getElementById("imgAPrpMain").src = "images/misc/loading.gif";
    tLderIMG = new Image();
    tLderIMG.src = tPMImgSRC;
    tLderIMG.onload = function() {
        document.getElementById("imgAPrpMain").src = tPMImgSRC;
    }
// scroll to imgAPrpMain
   //  document.getElementById("imgAPrpMain").scrollIntoView();
   window.scrollTo(0, document.getElementById("imgAPrpMain").offsetTop - 100);
 }

// use js file x_all.js
// use js file x_aa-show-prop.js

/*


CREATE TABLE `property` (
  `_id` int(50) NOT NULL,
  `title` varchar(200) NOT NULL,
  `pcontent` longtext NOT NULL,
  `type` varchar(100) NOT NULL,
  `bhk` varchar(50) NOT NULL,
  `stype` varchar(100) NOT NULL,
  `bedroom` int(50) NOT NULL,
  `bathroom` int(50) NOT NULL,
  `balcony` int(50) NOT NULL,
  `kitchen` int(50) NOT NULL,
  `hall` int(50) NOT NULL,
  `floor` varchar(50) NOT NULL,
  `size` int(50) NOT NULL,
  `price` int(50) NOT NULL,
  `location` varchar(200) NOT NULL,
  `city` varchar(100) NOT NULL,
  `state` varchar(100) NOT NULL,
  `feature` longtext NOT NULL,
  `pimage` varchar(300) NOT NULL,
  `pimage1` varchar(300) NOT NULL,
  `pimage2` varchar(300) NOT NULL,
  `pimage3` varchar(300) NOT NULL,
  `pimage4` varchar(300) NOT NULL,
  `uid` int(50) NOT NULL,
  `status` varchar(50) NOT NULL,
  `mapimage` varchar(300) NOT NULL,
  `topmapimage` varchar(300) NOT NULL,
  `groundmapimage` varchar(300) NOT NULL,
  `totalfloor` varchar(50) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `propdescs` (
  `_id` int(12) NOT NULL,
  `pd_rtype` int(12) NOT NULL,
  `pd_uid` int(12) NOT NULL,
  `pd_coid` int(12) NOT NULL,
  `pd_prpid` int(12) NOT NULL,
  `pd_prptlng` varchar(12) NOT NULL,
  `pd_prptype` varchar(12) NOT NULL,
  `pd_prptitle` text NOT NULL,
  `pd_prpdesc` text NOT NULL,
  `pd_dadded` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
*/
var doPrdMDelete = function() { 
    if(confirm(stxt[42] + " " + stxt[19] + "?")) {
    procNuUIitem("qmedia","m_rtype",JSSHOP.shared.getFrmFieldVal("qmedia", "_id", 0),"0","fnshProdMDel");
    }
};



var fnshProdMMain = function(aa,bb,cc) { 
// alert(bb);
getPropImgs();
JSSHOP.ui.closeLbox();

};


var doPrdMMain = function() { 
if(confirm("Set as main product picture?" + JSSHOP.shared.getFrmFieldVal("qmedia", "m_file", 0))) {
procNuUIitem("qmedia","m_vala",JSSHOP.shared.getFrmFieldVal("qmedia", "_id", "0"),JSSHOP.getUnixTimeStamp(),"fnshProdMMain");
    }
};
 

var getPrdImgEditDv = function(tpIncrNPI, tpFImg) {
tpPIEDv = document.createElement('div');
JSSHOP.shared.setFrmFieldVal("qmedia", "_id", tpIncrNPI);
JSSHOP.shared.setFrmFieldVal("qmedia", "m_file", tpFImg);
 
tmpRetStr = "<img src=\"admin/property/" + tpFImg +  "\" style=\"width: 100%\"  class=\"\" onclick=\"alert('" + JSSHOP.shared.getFrmFieldVal("qmedia", "_id", "0") + "');\">"
 try {
tmpRetStr += "<div class=\"dvTxtBtns\"><input type=\"button\" class=\"btnTxtLabel\" value=\"Set as Main\" onclick=\"javascript:doPrdMMain();\">   |   <input type=\"button\" class=\"btnTxtLabel\" value=\"Delete\" onclick=\"javascript:doPrdMDelete();\"></div>";
tmpRetStr += "<br><br>";
 
return tmpRetStr;
} catch(e) {
alert("getPrdImgEditDv " + e);
tmpRetStr = "oops. something wrong..";
return tmpRetStr;
}
};

var setSliderPropImgs = function(theAIa, theAIb, theAIc) {
    console.log("setSliderPropImgs: " + theAIa + " " + theAIb + " " + theAIc);
	if(theAIb.indexOf("_id") != -1) {
		tAiretArr = JSON.parse(theAIb);
		var len = tAiretArr.length;
        tstr = "";
        iint = 0;
        while (iint < len) {
            tstr += "<div class=\"ls-slide\" data-ls=\"duration:7500; transition2d:5; kenburnszoom:in; kenburnsscale:1.2;\"> <img width=\"1920\" height=\"1080\"    src=\"admin/property/" + tAiretArr[iint]["m_file"] + "\" class=\"ls-bg\" alt=\"\" /> </div>";
 
 
			iint++;
		}
        tmpItDiv = document.createElement('span');
        tmpItDiv.innerHTML = tstr;
		// document.getElementById("single-property").innerHTML = tstr;
        document.getElementById("single-property").appendChild(tmpItDiv);
	}
	// alert(inpPropCtrct.value);
	
};

var doSwipe = function() {
    var swiper = new Swiper('.swiper', {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    });
    getSocCntnt(); 
};

function saveFBPlgObj() {
    // alert("saveFBPlgObj:" + JSON.stringify(tmpFBIDvsArr));
    console.log("saveFBPlgObj: " + dvSocCntnt.innerHTML);
    currFBPlgObj["prp" + prpid] = dvSocCntnt.innerHTML;
}
function doFBPlgObj(aee, bee) {
    console.log("doFBPlgObj: " + aee + " " + bee);
    tmpFBscrLdd = "y";
    // setTimeout(function(){ saveFBPlgObj(); }, 2000);
}

function getSocCntnt() {
    
    tIFSCStr = getSocLinksStr();
    document.getElementById("dvSocCntnt").innerHTML = tIFSCStr;
    ttSIFCs = Math.round(new Date().getTime() / 1000);
    if(tmpFBscrLdd == "n") {
    JSSHOP.loadScript("https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2&ttime=" + ttSIFCs, doFBPlgObj,"js");
   
    }
    }

    
var getSocLinksStr = function() {
    tRestSLStr = "<br>"; 
    for (var i = 0; i < tmpSocLinksArr.length; i++) {
        
        tGIRFname = tmpSocLinksArr[i]["m_file"];
        tGIRcatid = tmpSocLinksArr[i]["m_catid"];
        tGifData = tmpSocLinksArr[i]["m_data"];
        tSLurl = tGIRFname;
        if(tGifData.length > 5) {
            tRestSLStr += tGifData;
        } else {
            tmpFBIDvsArr.push("dvpi" + tmpSocLinksArr[i]["_id"]);
            tPlugImageStr = "<img src=\"images/misc/cookies.gif\" style=\"width:100%;\" onclick=\"javascript:showModalPopUp();\">";

        if((tSLurl.indexOf("video") != -1) || (tSLurl.indexOf("reels") != -1)) {
//             <div class="fb-video" data-href="https://www.facebook.com/facebook/videos/10153231379946729/" data-width="500" data-show-text="false"><blockquote cite="https://www.facebook.com/facebook/videos/10153231379946729/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/facebook/videos/10153231379946729/">How to Share With Just Friends</a><p>How to share with just friends.</p>Posted by <a href="https://facebook.com/facebook">Facebook</a> on Friday, December 5, 2014</blockquote></div>
            tSLurlL = "javascript:showModalPopUp();";
            tRestSLStr += "<div  style=\"word-wrap:break-word;word-break: break-word;\"  class=\"fb-video\" data-href=\"" + tSLurl  + "\" data-width=\"400\" data-show-text=\"true\" data-show-posts=\"true\"></div><hr>";
        } else {
            tSLurlL = "javascript:showModalPopUp();";
            tRestSLStr += "<div  style=\"word-wrap:break-word;word-break: break-word;\"  data-show-posts=\"true\" class=\"fb-post\" data-href=\"" + tSLurl + "\" data-width=\"400\" data-show-text=\"true\"></div><hr>";
        }
    }
    }
    return tRestSLStr;
}

var getSocLinksArr = function() {
    return tmpSocLinksArr;
}
 
var setPropImgs = function(theAIa, theAIb, theAIc) {
    console.log("setPropImgs: " + theAIa + " " + theAIb + " " + theAIc);
    intIFrmHght = 0;
    hasGglMap = "no";
    if(theAIb.indexOf("_id") != -1) {
        tmpPropImgArr = JSON.parse(theAIb);
		tAiretArr = JSON.parse(theAIb);
		var awlen = tAiretArr.length;
        tstr = "";
        tpdSocLnksStr = "";
        iirnt = 0;
        /* get minimum width of images
        tImage = new Image();
        tImage.src = "images/property/" + tAiretArr[0]["m_file"];
        tImage.onload = function() {
            // alert("Width: " + this.width + " Height: " + this.height);
            // alert("Width: " + this.width + " Height: " + this.height);
        }
            */
        // tstr += "<div class=\"swiper\"  style=\"max-height:280px;max-width:500px;\"> <div class=\"swiper-wrapper\"  style=\"min-height:60px;max-height:280px;max-width:500px;margin: 0 auto\">";
     tstr += "<div class=\"swiper swiperPrp\" style=\"width: 400px;height:140px;\"> <div class=\"swiper-wrapper\">";
        
        while (iirnt < awlen) {
            tIRFname = tAiretArr[iirnt]["m_file"];
            tIRcatid = tAiretArr[iirnt]["m_catid"];
            if(tIRcatid == "5")  {
                tImageFstr = "images/property/m_thumb" + tAiretArr[iirnt]["m_file"];

            tstr += "<div class=\"swiper-slide\"> <a href=\"javascript:setNuPropMainImg('" + iirnt + "');\"><img class=\"rtable\" style=\"width: 100%;min-height:125px;\"  src=\"images/property/s_thumb" + tAiretArr[iirnt]["m_file"] + "\"  alt=\"image\"></a> </div>";
            } else if(tIRcatid == "20") {
                hasGglMap = "yes";
                tLZuncd = LZString.decompressFromEncodedURIComponent(tIRFname);
                tLuncthm = LZString.decompressFromEncodedURIComponent(tAiretArr[iirnt]["m_file_thumb"]);
               //  tstr += "<div class=\"swiper-slide\"> <a href=\"javascript:initStreetView();\"><img class=\"rtable\" style=\"width: 100%;min-height:125px;\"  src=\"" + tLuncthm + "\"  alt=\"image\"></a> </div>";
               // doSVLoad(ploclat.value, ploclng.value);
               tstr += "<div class=\"swiper-slide\"> <a href=\"javascript:doNuSVLoad('" + tAiretArr[iirnt]["m_file_thumb"]+ "');\"><img class=\"rtable\" style=\"width: 100%;min-height:100px;\"  src=\"" + tLuncthm + "\"  alt=\"image\"></a>";
               tstr += "<div style=\"text-align: center;\" class=\"txtSmall txtBold txtClrBlue\"><a href=\"javascript:doNuSVLoad('" + tAiretArr[iirnt]["m_file_thumb"]+ "');\">Street View</a></div>";
               tstr += "</div>";
            } else if(tIRcatid == "25") {
                hasGglMap = "yes";
                tLZuncd = LZString.decompressFromEncodedURIComponent(tIRFname);
                tLuncthm = LZString.decompressFromEncodedURIComponent(tAiretArr[iirnt]["m_file_thumb"]);
                //             tstr += "<div class=\"swiper-slide\"> <a href=\"javascript:setPropMainImg('" + tImageFstr + "');\"><img class=\"rtable\" style=\"width: 100%;min-height:125px;\"  src=\"images/property/s_thumb" + tAiretArr[iirnt]["m_file"] + "\"  alt=\"image\"></a> </div>";
                tstr += "<div class=\"swiper-slide\"> <a href=\"javascript:setNuPropMainImg('" + iirnt + "');\"><img class=\"rtable\" style=\"width: 100%;min-height:125px;\"  src=\"" + tLuncthm + "\"  alt=\"image\"></a> </div>";
             }  else if(tIRcatid == "30") {
                hasGglMap = "yes";
                tLZuncd =  tIRFname;
                tLuncthm = tAiretArr[iirnt]["m_file_thumb"];
                tUnZpd = LZString.decompressFromEncodedURIComponent(tLZuncd);
            tThumbImg = tLuncthm;
            theSplitThmnb = tThumbImg.split("|");
            theTmnbLat = theSplitThmnb[0];
            theTmnbLng = theSplitThmnb[1];
            theTmnbAlt = theSplitThmnb[2];
            // tMpType = "hybrid";
            tMpType = "satellite";
            console.log("show3DImages: " + theTmnbLat + " " + theTmnbLng + " " + theTmnbAlt);   
            tCntrMapLat = theTmnbLat - 0.0001;
            tCntrMapLng = theTmnbLng;
            tZmLvl = 20;
            tIUwidth = 240;
            tIUheight = 180;

            // tLZuncomp = LZString.decompressFromEncodedURIComponent(tThumbImg);
            //  			tstr += "<img src=\"images/property/" + tAiretArr[iint]["m_file_thumb"] + "\" class=\"icnmedbtn slmtable\" onclick=\"javascript:JSSHOP.ui.popAndFillLbox(getPropIEditDv('" + tAiretArr[iint]["_id"] + "','" + tAiretArr[iint]["m_file"] + "'));\">";
             // tAVImgUstr = "https://maps.googleapis.com/maps/api/staticmap?key=" + gglSKey + "&size=" + tIUwidth + "x" + tIUheight + "&center=" + tCntrMapLat + "," + tCntrMapLng + "&zoom=" + tZmLvl + "&maptype=" + tMpType;
tAVImgUstr = tUnZpd;
            t3DImgStr = "<img src=\"" + tAVImgUstr + "\" class=\"icnmedbtn slmtable\" onclick=\"javascript:initNurThreeDView('" + tAVImgUstr + "','" + tAiretArr[iint]["_id"] + "');\">";
            // tstr += "<div class=\"swiper-slide\"> <a href=\"javascript:initThreeDView(" + theTmnbLat + "," + theTmnbLng + "," + theTmnbAlt + ");\"><img class=\"rtable\" style=\"width: 100%;min-height:125px;\"  src=\"" + tAVImgUstr + "\"  alt=\"image\"></a> </div>";
            // tstr += "<div class=\"swiper-slide\"> <a href=\"javascript:initNuThreeDView('"  + tAVImgUstr + "');\">" + t3DImgStr + "</a> </div>";
            // tstr += "<div class=\"swiper-slide\"> <a href=\"javascript:initNurThreeDView('"  + tAVImgUstr + "','"+ /* qmedia _id */ tAiretArr[iirnt]["_id"] + "');\">" + t3DImgStr + "</a>";
            // add the words 3D view at the bottom of this div
            tstr += "<div class=\"swiper-slide\"> <a href=\"javascript:initNurThreeDView('"  + tAVImgUstr + "','"+ /* qmedia _id */ tAiretArr[iirnt]["_id"] + "');\">" + t3DImgStr + "</a>";
            tstr += "<div class=\"txtBold txtSmall txtClrBlue\" style=\"text-align: center;\"><a href=\"javascript:initNurThreeDView('"  + tAVImgUstr + "','"+ /* qmedia _id */ tAiretArr[iirnt]["_id"] + "');\">3D View</a></div>";
            tstr += "</div>";
             } else {
                // alert("setPropImgs: " + tIRFname + " " + tIRcatid);
                intIFrmHght += 1000;
         // tmpSocLinksArr.push(tIRFname);
            tmpSocLinksArr.push(tAiretArr[iirnt]);
             }
    
			iirnt++;
		}
                 // https://maps.googleapis.com/maps/api/streetview?size=400x400&location=47.5763831,-122.4211769&fov=80&heading=70&pitch=0&key=YOUR_API_KEY
             // add 3 street view images
             tNloclatlat = ploclat.value * 1.07;
                tNloclatlng = ploclng.value * 1.07;
                // tstr += "<div class=\"swiper-slide\"> <a href=\"javascript:setPropMainImg('https://maps.googleapis.com/maps/api/streetview?size=400x400&location=" + ploclat.value + "," + ploclng.value + "&fov=100&heading=70&pitch=0&key=" + gglSKey + "');\"><img class=\"rtable\" style=\"width: 100%;min-height:125px;\"  src=\"https://maps.googleapis.com/maps/api/streetview?size=400x400&location=" + ploclat.value + "," + ploclng.value + "&fov=80&heading=70&pitch=0&key=" + gglSKey + "\"  alt=\"image\"></a> </div>";
                //  tstr += "<div class=\"swiper-slide\"> <a href=\"javascript:setPropMainImg('https://maps.googleapis.com/maps/api/streetview?size=400x400&location=" + ploclat.value + "," + ploclng.value + "&fov=40&heading=100&pitch=30&key=" + gglSKey + "');\"><img class=\"rtable\" style=\"width: 100%;min-height:125px;\"  src=\"https://maps.googleapis.com/maps/api/streetview?size=400x400&location=" + ploclat.value + "," + ploclng.value + "&fov=40&heading=100&pitch=30&key=" + gglSKey + "\"  alt=\"image\"></a> </div>";

                //  tstr += "<div class=\"swiper-slide\">  <img class=\"rtable\" style=\"width: 100%;min-height:125px;\"  src=\"https://maps.googleapis.com/maps/api/streetview?size=400x400&location=" + tNloclatlat + "," + tNloclatlng + "&fov=80&heading=70&pitch=0&key=" + gglSKey + "\"  alt=\"image\" onclick=\"javascript:setPropMainImg(this.src);\"> </div>";

                
        tstr += "</div><div class=\"swiper-pagination swpPrpPg\"></div><div class=\"swiper-button-prev swprBtnPrev\"></div><div class=\"swiper-button-next swprBtnNext\"></div></div>";
        // tmpItDiv = document.createElement('span');
        // tmpItDiv.innerHTML = tstr;
		document.getElementById("singlerproperty").innerHTML = tstr;
        if(tmpSocLinksArr[0]){
         /*   
            var iframe = document.createElement('iframe');
       iframe.style.width = '100%';
       iframe.style.height = intIFrmHght + 'px';
       iframe.style.border = 'none';
       // iframe.style.position = 'absolute';
       // iframe.style.top = '0';
       // iframe.style.left = '0';
       iframe.style.zIndex = '999999';
        iframe.src = 'social.html?pid=aa-pdetail&prpid=' + aprpObj._id;
         // iframe.src = 'about:blank';
       dvSocCntnt.appendChild(iframe);
        // document.getElementById("ifrmSocCntnt").src = 'social.html?pid=aa-pdetail&prpid=' + aprpObj._id;
          if(currFBPlgObj["prp" + prpid]) {
        dvSocCntnt.innerHTML = currFBPlgObj["prp" + prpid];
         } else {getSocCntnt(); }
        */
     
      
        

        }
       //  document.getElementById("single-property").appendChild(tmpItDiv);
       // setTimeout(function(){ doSwipe(); }, 1000);
              // JSSHOP.ads.loadNuSwiperObj(tSwpCnfgObj);
              tSwpPrpCnfObj = {};
                tSwpPrpCnfObj["slidesPerView"] = 3;
 
                tSwpPrpCnfObj["loop"] = true;
                tSwpPrpCnfObj["pagination"] = {};
                tSwpPrpCnfObj["pagination"]["el"] = '.swpPrpPg';
                tSwpPrpCnfObj["pagination"]["clickable"] = true;
                tSwpPrpCnfObj["navigation"] = {};
                tSwpPrpCnfObj["navigation"]["nextEl"] = '.swprBtnPrev';
                tSwpPrpCnfObj["navigation"]["prevEl"] = '.swprBtnNext';
 
                tSwpPrpCnfObj["cls"] = ".swiperPrp";
                setTimeout(function(){ JSSHOP.ads.loadNuSwiperObj(tSwpPrpCnfObj); }, 1000);

	}

    if(hasGglMap == "yes") {
        // alert("setPropImgs: " + tIRFname + " " + tIRcatid);
        // alert("setPropImgs: " + tIRFname + " " + tIRcatid);
        // alert("setPropImgs: " + tIRFname + " " + tIRcatid);
        // alert("setPropImgs: " + tIRFname + " " + tIRcatid);
        initGMap();
    }   
    // AIzaSyAiBR8BEPj2YCepKplisQKK709r1TI48Vo
	// alert(inpPropCtrct.value);
	// https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2
   //  JSSHOP.loadScript("https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2&ttime=" + JSSHOP.getUnixTimeStamp(), doFBFLoad,"js");
};

function doFBFLoad(aee, bee) {
    console.log("doFBFLoad: " + aee + " " + bee);
}

var getPropImgs = function() {
    tmpFobj = null;
    tmpFobj = {};
    tmpFobj["ws"] = "where m_pid=? and m_rtype=?";
    tmpFobj["wa"] = [currUrlArr.prpid, 5];
	tmpFobj["o"] = "m_vala desc";
    oi = getNuDBFnvp("qmedia", 5, null, tmpFobj);
    doQComm(oi["rq"], null, "setPropImgs");
};

 
 
    function showMorePropCntnt(tMCDiv,tMCbtn) {
        console.log("showMorePropCntnt: " + tMCDiv + " " + tMCbtn);
        tAMCDiv = document.getElementById(tMCDiv);
        tAMCbtn = document.getElementById(tMCbtn);
        tAMCDiv.style.height = "auto";
        tAMCDiv.style.overflow = "auto";
        tAMCbtn.style.display = "none";
        tAMCbtn.style.visibility = "hidden";

    }

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
    JSSHOP.ui.showMsgBox('uproperty', tDDiidx, 'showMsgSave');
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

    function doMPropDeatils(aaw,aww,cww) {
        console.log('doMPropsList - aww: ' + aww);
        tPropUID = 0;   
    istrt = 0;
    iprplen = 0;
    fullPrpLstA = JSON.parse(aww);
    currShopsArr = fullPrpLstA;
    iprplen = fullPrpLstA.length;
    retPLstSTr = "";
    if(iprplen == 0) {
        retPLstSTr = "<div class=\"col-md-12\"><h4 class=\"text-center text-secondary\">No Properties Found</h4></div>";
    }
    if(iprplen > 3) {
     iprplen = 3;
    }
    // alert('doMPropsList - iprplen: ' + iprplen);
    while(istrt < iprplen){
    aprpObj = fullPrpLstA[istrt];
    aprpTitle = aprpObj["ptitle"];
    tAprpCntt = aprpObj["pcontent"];
    tUrlDecCnt = decodeURIComponent(tAprpCntt);
    aprpContent = LZString.decompressFromEncodedURIComponent(tUrlDecCnt);
 
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
    tPropUID = aprpUid;
    aprpUFlName = aprpObj["u_fullname"];
    aprpStatus = aprpObj["status"];
    aprpMapimage = aprpObj["mapimage"];
    aprpTopmapimage = aprpObj["topmapimage"];
    aprpGroundmapimage = aprpObj["groundmapimage"];
    aprpTotalfloor = aprpObj["totalfloor"];
    aprpDate = aprpObj["date"];
    aprploclat = aprpObj["ploclat"];
    aprploclng = aprpObj["ploclng"];
    retPLstSTr += "<div class=\"slmtable bkgdClrWhite bottom-shadow\" style=\"margin-top:18px;padding:0px;max-width: 600px;max-width: 600px;margin: 0 auto;\">";
    
     
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
    
    /*
    retPLstSTr += "<div tid=\"dvCoFavBtn\" style=\"float: right\"></div>";
    
    <div style="float: right"><span class="cls_button cls_button-xxsmall bkgdClrWhite brdrClrDlg txtClrDlg" onclick="javascript:doRecentFavorite('index.html?pid=aa-show-item&amp;itemid=12&amp;cid=15155&amp;catid=5','Apoyobrazos central para un BMW 2.6-','0','12','btnFavs12');"><i id="btnFavs12" class="material-icons txtClrTtl" alt="favorite" title="favorite" value="favorite">?</i></span><span class="cls_button cls_button-xxsmall bkgdClrWhite brdrClrDlg txtClrDlg" style="margin:2px;" onclick="JSSHOP.ui.showShareBox('product',12);"><i class="material-icons txtClrTtl" alt="share" title="share" value="share">?</i></span><span class="cls_button cls_button-xxsmall bkgdClrWhite brdrClrDlg txtClrDlg" style="margin:2px;" onclick="JSSHOP.ui.showMsgBox('product', ts._id,'showMsgSave');"><i class="material-icons txtClrTtl" alt="chat" title="messages" value="messages">?</i></span></div>
    */
    currFTclr = "material-icons txtClrTtl";
     if(currFavsIdstr.indexOf(aprpObj._id + "::") != -1) {
    currFTclr = "material-icons txtClrRed";
    }
    
    retPLstSTr += "<table style=\"width: 100%\"><tr><td style=\"min-width:40px;\">";
    
    //  <div  onclick="javascript:JSSHOP.ui.toggleVisibility('tdUploadBtn');" class="crsrPointer"><img alt="User Icon" src="images/misc/default_user.png"  class="slmtable brdrClrDlg" style="minn-width:150px;max-width:160px;text-align:center;margin-right:3px" align="absmiddle" id="imgIedit"><span class="txtSmall txtClrGrey">Edit</span></div>
    retPLstSTr += "<a href=\"javascript:eindex('aa-show-user', 'pid=aa-show-user&tuid=" + aprpUid + "');\" class=\"crsrPointer\">";
    retPLstSTr += "<div><img alt=\"Profile\" src=\"images/user/" + aprpObj.u_icon + "\"  class=\"icnRndnUser\" align=\"absmiddle\"><br><span class=\"txtSmall txtClrGrey\">" + aprpUFlName + "</span></div></a>";
    retPLstSTr += "</td><td>";
    retPLstSTr += "<div id=\"dvPrpTtl\" class=\"text-secondary hover-text-primary text-capitalize\" style=\"margin-bottom:0px;\"><a href=\"javascript:eindex('aa-show-prop','pid=aa-show-prop&prpid=" + aprpObj._id + "')\">" + aprpTitle + "</a></div>";
     retPLstSTr += "<table style=\"width:100%;\"><tbody><tr><td><i class=\"small-material-icons coll-menu-item txtClrHdr txtBold\" alt=\"location_on\" title=\"Location\" style=\"verticle-align:middle;color:#dbddd9;\">&#xe0c8;</i></td><td><span class=\"txtSmall txtBold txtClrHdr\">" + tLocationStr + "</span></td><td class=\"txtBold txtBig\" nowrap=\"nowrap\">" + aprpPrice + "<span style=\"vertical-align:center;font-size:smaller;align: absmiddle\" class=\"txtClrGrey\">&euro;</span></td></tr></tbody></table>";

    retPLstSTr += "</td><td style=\"vertical-align:top\">" + tDDPrpStr + "</td></tr></table>";
    
     retPLstSTr += "<div class=\"\">";
//   <div id="street-view" style="min-height:400px;min-width:99%;max-width:99%;position:absolute;visibility:visible;display:block;"></div>
    retPLstSTr += "<div id=\"street-view\" style=\"min-height:300px;min-width:99%;max-width:99%;visibility:hidden;display:none;z-index:99999990\"></div>";
    retPLstSTr += "<div id=\"dvThreeDView\"  style=\"min-height:300px;min-width:99%;max-width:99%;visibility:hidden;display:none;z-index:99999990;max-height:500px;\">"; // start 3d view div
    retPLstSTr += "<div  id=\"dvThreeDCntnr\" style=\"min-height:300px;min-width:99%;max-width:99%;z-index:99999990;height:300px;\"></div>";

    // add clear fix
    retPLstSTr += "<div class=\"clearfix\"></div>";
    retPLstSTr += "</div>"; // end 3d view div 
    retPLstSTr += "<div id=\"dvAPrpImg\" class=\"overlay-black overflow-hidden position-relative crsrPointer hover-zoomer\"> <img src=\"" + currPrpImgsFldr + "/" + aprpPimage + "\" alt=\"pimage\" class=\"img100p\" id=\"imgAPrpMain\">";
    // retPLstSTr += "<div class=\"featured bg-primary text-white\">New</div>";
    retPLstSTr += "</div>"; // end overlay-black overflow-hidden position-relative
     retPLstSTr += "<div id=\"dvPropFooter\" style=\"text-align:center;\" class=\"sale bg-secondary text-white text-capitalize\">" + tDBHObj[aprpType] + "</div>";

    retPLstSTr += "<div id=\"singlerproperty\" class=\"\"></div>";

    retPLstSTr += "<div class=\"featured-thumb-data shadow-one\">";
    
    /*
    retPLstSTr += "<div class=\"p-3\">";
    retPLstSTr += "<span class=\"location text-capitalize\"><i class=\"fas fa-map-marker-alt text-primary\"></i> " + aprpLocation + "</span> </div>";
    retPLstSTr += "<div class=\"px-4 pb-4 d-inline-block w-100\">";
    retPLstSTr += "<div class=\"\"> <a href=\"propertydetail.php?pid=" + aprpUid + "\" class=\"txtSmall txtBold txtDecorNone\">" + stxt[99] + "...</a> </div>";
    retPLstSTr += "<div class=\"float-right\"><i class=\"nav-material-icons coll-menu-item txtClrHdr\" style=\"margin-right:4px;margin-top:2px;\">&#xe0b7;</i> <a href=\"contact.php?propid=" + aprpUid + "\" class=\"txtSmall txtBold txtDecorNone\">" + stxt[98] + "</a> </div>";
    retPLstSTr += "</div>";
    */
    
    
  
    
    


 


    
    
    retPLstSTr += "</div>"; // end bg-gray quantity px-4 pt-4



    retPLstSTr += "<div class=\"bkgdClrWhite\">";

retPLstSTr += "<div class=\"slmtable bkgdClrWhite brdrClrHdr\" style=\"padding:4px;margin:2px;\">";
    retPLstSTr += "<table style=\"margin:0 auto;width:100%;\"><tr><td>";
retPLstSTr += "<span class=\"crsrPointer\" style=\"margin-right:12px;\" onclick=\"JSSHOP.ui.showShareBox('property'," + istrt + ");\"><i class=\"menu-material-icons txtClrTtl\" alt=\"share\" title=\"share\" value=\"share\">&#xe80d;</i>" + " " + stxt[72] + "</span>";
retPLstSTr += "</td>";
retPLstSTr += "<td>";
// retPLstSTr += "<span class=\"crsrPointer\" style=\"margin-right:12px;\" onclick=\"JSSHOP.ui.showMsgBox('uproperty'," + istrt + ",'showMsgSave');\"><i class=\"menu-material-icons txtClrTtl\" alt=\"chat\" title=\"messages\" value=\"messages\">&#xe0b7;</i>" + " " + stxt[98] + "</span>";
// JSSHOP.ui.prepMsgBox(" + aprpUid + ",'" + aprpUFlName + "','" + aprpObj.u_icon + "','" + istrt + "','showMsgSave');
retPLstSTr += "<span class=\"crsrPointer\" style=\"margin-right:12px;\" onclick=\"JSSHOP.ui.prepMsgBox(" + aprpUid + ",'" + aprpUFlName + "','" + aprpObj.u_icon + "','" + istrt + "','showMsgSave');\"><i class=\"menu-material-icons txtClrTtl\" alt=\"chat\" title=\"messages\" value=\"messages\">&#xe0b7;</i>" + " " + stxt[117] + "</span>";
retPLstSTr += "</td>";
retPLstSTr += "<td>";
// retPLstSTr += "<span tid=\"dvCoFavBtn\" class=\"" + currFTclr + "\" onclick=\"javascript:doRecentFavorite('index.html?pid=aa-show-prop&prpid=" + aprpObj._id + "','" + aprpTitle + "','" +"','" + aprpObj._id + "','btnFavs" + aprpObj._id + "');\"><i id=\"btnFavs" + aprpObj._id + "\" class=\"" + currFTclr + "\" alt=\"favorite\" title=\"favorite\" value=\"favorite\">&#xe87d;</i>" + " " + stxt[618] + "</span>";
// check if already a favorite and make it red if so
currFTclr = "menu-material-icons txtClrTtl";
 if(currFavsIdstr.indexOf(aprpObj._id + "::") != -1) {
currFTclr = "menu-material-icons txtClrRed";
}
retPLstSTr += "<span tid=\"dvCoFavBtn\" class=\"crsrPointer\" onclick=\"javascript:doRecentFavorite('index.html?pid=aa-show-prop&prpid=" + aprpObj._id + "','" + aprpTitle + "','images/property/s_thumb" + aprpPimage + "','" + aprpObj._id + "','btnFavs" + aprpObj._id + "');\"><i id=\"btnFavs" + aprpObj._id + "\" class=\"" + currFTclr + "\" alt=\"favorite\" title=\"favorite\" value=\"favorite\">&#xe87d;</i>" + " " + stxt[618] + "</span>";

retPLstSTr += "</td></tr></table>";
retPLstSTr += "</div>"; // end slmtable bkgdClrWhite brdrClrHdr

    // retPLstSTr += "<span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrDlg\" style=\"margin:2px;\" onclick=\"JSSHOP.ui.showShareBox('property'," + istrt + ");\"><i class=\"material-icons txtClrTtl\" alt=\"share\" title=\"share\" value=\"share\">&#xe80d;</i></span>";
    // retPLstSTr += "<span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrClrDlg txtClrDlg\" style=\"margin:2px;\" onclick=\"JSSHOP.ui.showMsgBox('uproperty'," + istrt + ",'showMsgSave');\"><i class=\"material-icons txtClrTtl\" alt=\"chat\" title=\"messages\" value=\"messages\">&#xe0b7;</i></span>";
    // retPLstSTr += "<span tid=\"dvCoFavBtn\" class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrDlg\" onclick=\"javascript:doRecentFavorite('index.html?pid=aa-show-prop&prpid=" + aprpObj._id + "','" + aprpTitle + "','noQvalue','" + aprpObj._id + "','btnFavs" + aprpObj._id + "');\"><i id=\"btnFavs" + aprpObj._id + "\" class=\"" + currFTclr + "\" alt=\"favorite\" title=\"favorite\" value=\"favorite\">&#xe87d;</i></span>";
    // streetview link http://maps.google.com/maps?q=&layer=c&cbll=
    tSrvLLstr = aprploclat + "," + aprploclng;

    if(tSrvLLstr.length < 5) {
        aprploclat = 40.7128;
        aprploclng = -74.0060;
     
        tSrvLLstr = aprploclat + "," + aprploclng;
    }
    tmpSVloclat = aprploclat;
    tmpSVloclng = aprploclng;
   //  retPLstSTr += "<span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrDlg\" style=\"margin:2px;\"><a href=\"http://maps.google.com/maps?q=&layer=c&cbll=" + tSrvLLstr + "\"><i class=\"material-icons txtClrTtl\" alt=\"streetview\" title=\"streetview\" value=\"streetview\">&#xe56e;</i> Street View</a></span>";
    
   //  retPLstSTr += "<div id=\"dvPrpCntnt\" class=\"clsPcntnt\" style=\"padding:10px;\">" + aprpContent + "</div>";
// make dvPrpCntnt max height 300px and a show more button to expand it to automatic height
    retPLstSTr += "<div class=\"bkgdClrWhite txtBig txtBold\" style=\"padding:3px;\">";
    retPLstSTr += stxt[40] + ":";
    retPLstSTr += "</div>";


     
// retBedBathstr += "<li><div style=\"float:left;\"><b>" + aprpSize + " </b>  <span class=\"txtSmall\">" + stxt[953] + "</span></div></li>";
retBedBathstr = "<table style=\"margin:0 auto;\"><tr><td><div style=\"float:left;margin-right:10px;\"><b>" + aprpBedroom + " </b> <span class=\"txtSmall\">" + stxt[922] + "</span>&nbsp;</div></td>";
retBedBathstr += "<td><div style=\"float:left;margin-right:10px;\"><b>" + aprpBathroom + " </b> <span class=\"txtSmall\">" + stxt[923] + "</span>&nbsp;</div></td>";
retBedBathstr += "<td><div style=\"float:left;\"><b>" + aprpKitchen + " </b> <span class=\"txtSmall\">" + stxt[926] + "</span>&nbsp;</div></td></tr></table>";
 
retPLstSTr += retBedBathstr;


    retPLstSTr += "<div id=\"dvPrpCntnt\" class=\"clsPcntnt\" style=\"padding:10px;height:300px;overflow:hidden;\">" + aprpContent + "</div>";
     retPLstSTr += "<div id=\"dvPrpCntntBtn\" class=\"clsPcntnt\" style=\"padding:10px;\"><a href=\"javascript:void(0);\" class=\"txtClrHdr txtBold\" onclick=\"javascript:showMorePropCntnt('dvPrpCntnt','dvPrpCntntBtn');\">" + stxt[110] + "</a></div>";
    // show less button to hide the content again
    // retPLstSTr += "<div id=\"dvPrpCntntBtn\" class=\"clsPcntnt\" style=\"padding:10px;\"><a href=\"javascript:void(0);\" class=\"txtClrHdr txtBold\" onclick=\"javascript:showLessPropCntnt('dvPrpCntnt','dvPrpCntntBtn');\">" + stxt[111] + "</a></div>";   
    retPLstSTr += "</div>"; // end bkgdClrWhite
    
   
    
    
    retPLstSTr += "</div>"; // end featured-thumb-data shadow-one
    retPLstSTr += "</div>"; // end featured-thumb hover-zoomer mb-4
    
    
    
    
    
    retPLstSTr += "</div>";  // end col-md-6
     
     // add clearfix div
     
    
    
    
    istrt++;
    }

    // JSSHOP.ui.setTinnerHTML("dvTop", retAetStr);
    JSSHOP.ui.setTinnerHTML("ixtxt", retPLstSTr);
    // setTimeout("doSVLoad(" + aprploclat + "," + aprploclng + ")", 1000);
    /* will set after getting titles and descs from propdescs

    
    tmpFobj = null;
    tmpFobj = {};
    tmpFobj["ws"] = "where m_pid=? and m_rtype=?";
    tmpFobj["wa"] = [prpid, 5];
    tmpFobj["o"] = "m_vala desc";
    oi = getNuDBFnvp("qmedia", 5, null, tmpFobj);
    doQComm(oi["rq"], null, "setPropImgs");
    */
    // return retPLstSTr;
    // JSSHOP.ui.setTinnerHTML("dvMainPrpsLst",retPLstSTr);
    // alert('doMPropsList - aaw: ' + aaw);
    // JSSHOP.ads.doGenMapShow();
    // get titles and descs from propdescs
    tPTandDObj = null;
    tPTandDObj = {};
    tPTandDObj["ws"] = "where pd_prpid=? and pd_rtype=?";
    tPTandDObj["wa"] = [prpid, 5];
    ioaa = getNuDBFnvp("propdescs", 5, null, tPTandDObj);
    doQComm(ioaa["rq"], null, "setPropTandD");


     
     }


 
function setPropTandD(aapa,apaphh,apaprt) {
    console.log('setPropTandD - aapa: ' + aapa + " " + apaphh + " " +apaprt);
 if(apaphh.indexOf("_id") != -1) {
    // alert("setPropTandD: " + aapa + " " + apaphh + " " +apaprt);
    tPTADArr  = JSON.parse(apaphh);
    tAiretArrLen = tPTADArr.length;
    if(tPTADArr[0]) {
        for(iirnt=0; iirnt < tAiretArrLen; iirnt++) {
            aprpObj = tPTADArr[iirnt];
            tmpPrpDscsObj[aprpObj["pd_prptlng"]] = {};
            tmpPrpDscsObj[aprpObj["pd_prptlng"]]["pd_prptitle"] = aprpObj["pd_prptitle"];
            tmpPrpDscsObj[aprpObj["pd_prptlng"]]["pd_prpdesc"] = aprpObj["pd_prpdesc"];
        }
        if(tmpPrpDscsObj[usrlang]) {
            tTitle = tmpPrpDscsObj[usrlang]["pd_prptitle"];
            tDesc = tmpPrpDscsObj[usrlang]["pd_prpdesc"];
        } else {
            tTitle = tmpPrpDscsObj[deflang]["pd_prptitle"];
            tDesc = tmpPrpDscsObj[deflang]["pd_prpdesc"];
        }
        tLZdecTitle = LZString.decompressFromEncodedURIComponent(tTitle);
        tLZdecDesc = LZString.decompressFromEncodedURIComponent(tDesc);
        document.getElementById("dvPrpCntnt").innerHTML = tLZdecDesc;
        document.getElementById("dvPrpTtl").innerHTML = tLZdecTitle;
        
    } else {
        
    }
} else {
    console.log("NO-setPropTandD: " + aapa + " " + apaphh + " " +apaprt);
    tTitle = stxt[3001];
    tDesc = stxt[983];
    document.getElementById("dvPrpCntnt").innerHTML = tDesc;
    document.getElementById("dvPrpTtl").innerHTML = tTitle;
}
getPropImgs();
}

function getFBUPostCntnt(tCntntStr) {
/*
        <div class="fb-post" 
            data-href="https://www.facebook.com/416576078105629/posts/416576594772244/"
            data-width="500"></div>

            <div class="fb-video" data-href="https://www.facebook.com/facebook/videos/10153231379946729/" data-width="500" data-show-text="false"><blockquote cite="https://www.facebook.com/facebook/videos/10153231379946729/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/facebook/videos/10153231379946729/">How to Share With Just Friends</a><p>How to share with just friends.</p>Posted by <a href="https://facebook.com/facebook">Facebook</a> on Friday, December 5, 2014</blockquote></div>
*/
// post url example:  <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fnegociosyemprendimiento%2Fposts%2Fpfbid0qkRnKmmncJETFimqqyXXNwmYNhajdr5EubyM4CLT7LV3DJH3AbhkS2AR8vdRoF7Wl&show_text=true&width=500" width="500" height="538" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
// post url example: https://www.facebook.com/photo/?fbid=1049384213219832&set=a.758084869016436&__cft__[0]=AZVeyfDcXP_dUoBWGhNsAjPQc438NC3zfDcBbQjP0M6MwvcHiLgNAmnmgYaTxE5CrxsEFB1uETMrgT6n9Awqz1y85mrliRRX2O5nhcF603_CHw8Xguyt2I93ZKxm4q27zArwo0bMLRvvq1-zfsQz7KiPrsvuatMXgCwv-2Mjtz1tLp433QPxQKY-UI5H_vjXDvBlcPI1BMk0kKy19I2boqt_&__tn__=EH-R
// post url example: https://www.facebook.com/416576078105629/posts/416576594772244/
// video url example: https://www.facebook.com/facebook/videos/10153231379946729/
// post url example: https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnegociosyemprendimiento&tabs=timeline&width=500&height=538&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId
// try getting the user ID and post ID from the url
if(tCntntStr.indexOf("/posts/") != -1) {
   //  https://www.facebook.com/userID/posts/postID/
   // get userID and postID

    tSpltStr = tCntntStr.split("/posts/");
    tUserFstr = tSpltStr[0];
    tNuUserFstr = tUserFstr.replace("https://www.facebook.com/", "");
    tPostFstr = tSpltStr[1];
    tNuPostFstr = tPostFstr.replace("/", "");
}
if(tCntntStr.indexOf("/videos/") != -1) {
    //  https://www.facebook.com/userID/videos/postID/
    // get userID and postID
    tSpltStr = tCntntStr.split("/videos/");
    tUserFstr = tSpltStr[0];
    tNuUserFstr = tUserFstr.replace("https://www.facebook.com/", "");
    tPostFstr = tSpltStr[1];
    tNuPostFstr = tPostFstr.replace("/", "");
}
if(tCntntStr.indexOf("page.php?href=") != -1) {
    //  https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnegociosyemprendimiento&tabs=timeline&width=500&height=538&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId
    // get userID and postID
    tSpltStr = tCntntStr.split("page.php?href=");
    tUserFstr = tSpltStr[1];
    tNuUserFstr = tUserFstr.replace("https%3A%2F%2Fwww.facebook.com%2F", "");
    tNuUserFstr = tNuUserFstr.replace("%2F", "");
    tNuUserFstr = tNuUserFstr.replace("%2F", "");
    tNuUserFstr = tNuUserFstr.replace("%2F", "");
}
 
    tCntntStr = "<div class=\"fb-post\" data-href=\"" + tCntntStr + "\" data-width=\"500\"></div>";

    return tCntntStr;
}


var dmyFnishCntLoad = fnishCntLoad;
fnishCntLoad = function() {
    JSSHOP.ads.doGenericPlug("prop", "single-property", "dvPartLinks");


  // alert('fnishCntLoad');
 tmpDOqs = null;
tmpDOqs = {};
tmpDOqs["ws"] = "where _id=?";
tmpDOqs["wa"] = [prpid];
tmpDOqs["l"] = 45;
oia = getNuDBFnvp("property",5,null,tmpDOqs);
// anewQstr = "select p.*, u.u_icon, u.u_fullname from property p, quser u where p._id = " + prpid + " and p.uid = u._id";
// anewQstr = "select p.*, u.u_icon, u.u_fullname, pd.pd_prptitle, pd.pd_prpdesc from property p, quser u, propdescs pd where p._id = " + prpid + " and p.prtype = '5' and p.uid = u._id and pd.pd_prpid = p._id and (pd.pd_prptlng = '" +  usrlang + "' or pd.pd_prptlng = '" + deflang + "')";
// newerQstr = "SELECT p.*, u.u_icon, u.u_fullname, COALESCE(pd_user.pd_prptitle, pd_def.pd_prptitle) AS pd_prptitle, COALESCE(pd_user.pd_prpdesc,  pd_def.pd_prpdesc)  AS pd_prpdesc FROM property p JOIN quser u ON p.uid = u._id LEFT JOIN propdescs pd_user ON pd_user.pd_prpid = p._id AND pd_user.pd_prptlng = '" +  usrlang + "' LEFT JOIN propdescs pd_def ON pd_def.pd_prpid = p._id AND pd_def.pd_prptlng = '" + deflang + "' WHERE p._id > 0 AND p.prtype = '5' ORDER BY RAND() LIMIT 20";
anewQstr = "SELECT p.*, u.u_icon, u.u_fullname, COALESCE(pd_user.pd_prptitle, pd_def.pd_prptitle) AS pd_prptitle, COALESCE(pd_user.pd_prpdesc,  pd_def.pd_prpdesc)  AS pd_prpdesc FROM property p JOIN quser u ON p.uid = u._id LEFT JOIN propdescs pd_user ON pd_user.pd_prpid = p._id AND pd_user.pd_prptlng = '" +  usrlang + "' LEFT JOIN propdescs pd_def ON pd_def.pd_prpid = p._id AND pd_def.pd_prptlng = '" + deflang + "' WHERE p._id = " + prpid + " AND p.prtype = '5' ORDER BY RAND() LIMIT 20";
doQComm(anewQstr, null, "doMPropDeatils");

return dmyFnishCntLoad;
};


function getFIrstCanvasOnPage() {
    var canvas = document.getElementsByTagName("canvas")[0];
    return canvas;
}


/*




        function showNuStrtVwPop(tSVPPobj, tSVPIid) {
            var panorama;
  
            tprpLocLat = tSVPPobj["location"].split(",")[0];
            tprpLocLng = tSVPPobj["location"].split(",")[1];
            tSVzoom = tSVPPobj["zoom"];
            tSVheading = tSVPPobj["heading"];
            tSVpitch = tSVPPobj["pitch"];
            tFSVheading = parseFloat(tSVheading);
            tFSVpitch = parseFloat(tSVpitch);

            if(tSVzoom == null || tSVzoom == "" || tSVzoom == "undefined") {
                tSVzoom = 1.9;
            }
            console.log("showStrtVwPop.tSVPPobj: " + JSON.stringify(tSVPPobj));
            
            var svLoc = {lat: parseFloat(tprpLocLat), lng: parseFloat(tprpLocLng)};

            if(panorama == null) {
            panorama = new google.maps.StreetViewPanorama(  
                document.getElementById("dvStrtVwPop"), {
                    position: svLoc,
                    pov: {heading: tFSVheading, pitch: tFSVpitch},
                    zoom: tSVzoom,
                    fullscreenControl: false,
                    panControl: false,
                    zoomControl: false,
                    addressControl: false,
                    enableCloseButton: false,
                    visible: true,
                    motionTracking: false,
                    motionTrackingControl: false,
                    linksControl: false,
                    showRoadLabels: false,
                    showLabels: false,
                    showLocation: false,
                    showHeading: false,
                    showPanoProvider: false,
                    showZoomControl: false,
                    showPanControl: false,
                    mapId: 'YOUR_MAP_ID'

                });

                var position = new google.maps.LatLng(parseFloat(tprpLocLat), parseFloat(tprpLocLng));

                panorama.addListener("position_changed", () => {

                    tmpSVpos = "";
                    tmpSVpos = panorama.getPosition();
                    // console.log("showStrtVwPop.pos: " + tmpSVpos.lat() + " " + tmpSVpos.lng());
                   // console.log("showStrtVwPop.pov: " + panorama.getPov().heading + " " + panorama.getPov().pitch);
                  //  console.log("showStrtVwPop.zoom: " + panorama.getPov().zoom);
                    console.log("showStrtVwPop.tilt: " + panorama.getPov().tilt);

                  });
                    panorama.addListener("pov_changed", () => {
                    tmpSVheading = panorama.getPov().heading;
                    tmpSVpitch = panorama.getPov().pitch;
                    tmpSVpos = panorama.getPosition();
                    tmpSVposLat = tmpSVpos.lat();
                    tmpSVzoom = panorama.getPov().zoom;
                    tmpSVposLng = tmpSVpos.lng();
                    console.log("showStrtVwPop.povChanged.pos: " + tmpSVpos.lat() + " " + tmpSVpos.lng());
                    console.log("showStrtVwPop.povChanged.hpitch: " + tmpSVheading + " : " + tmpSVpitch);  
                    console.log("showStrtVwPop.povChanged.zoom: " + panorama.getPov().zoom);
                    console.log("showStrtVwPop.povChanged.tilt: " + panorama.getPov().tilt); 

                    });
                } else {
                    panorama.setPosition(svLoc);
                    panorama.setPov({heading: tFSVheading, pitch: tFSVpitch});
                    panorama.setZoom(tSVzoom);  
                    panorama.setVisible(true);
                }
                 
            }

        function showStrtVwPop(tLocLat, tLocLng) {
            var panorama;
            tprpLocLat = tLocLat;
            tprpLocLng = tLocLng;
            var svLoc = {lat: parseFloat(tprpLocLat), lng: parseFloat(tprpLocLng)};
            panorama = new google.maps.StreetViewPanorama(  
                document.getElementById("dvStrtVwPop"), {
                    position: svLoc,
                    pov: {heading: 165, pitch: 0},
                    zoom: 10,
                    fullscreenControl: false,
                    panControl: false,
                    zoomControl: false,
                    addressControl: false,
                    enableCloseButton: false,
                    visible: true,
                    motionTracking: false,
                    motionTrackingControl: false,
                    linksControl: false,
                    showRoadLabels: false,
                    showLabels: false,
                    showLocation: false,
                    showHeading: false,
                    showPanoProvider: false,
                    showZoomControl: false,
                    showPanControl: false,
                    mapId: 'YOUR_MAP_ID'

                });

                var position = new google.maps.LatLng(parseFloat(tprpLocLat), parseFloat(tprpLocLng));
                 

                panorama.addListener("position_changed", () => {
                   
                    tmpSVpos = "";
                    tmpSVpos = panorama.getPosition();
                    // console.log("showStrtVwPop.pos: " + tmpSVpos.lat() + " " + tmpSVpos.lng());
                   // console.log("showStrtVwPop.pov: " + panorama.getPov().heading + " " + panorama.getPov().pitch);
                  //  console.log("showStrtVwPop.zoom: " + panorama.getPov().zoom);
                    console.log("showStrtVwPop.tilt: " + panorama.getPov().tilt);

                  });
                    panorama.addListener("pov_changed", () => {
                    tmpSVheading = panorama.getPov().heading;
                    tmpSVpitch = panorama.getPov().pitch;
                    tmpSVzoom = panorama.getPov().zoom;
                    tmpSVpos = panorama.getPosition();
                    tmpSVposLat = tmpSVpos.lat();
                    tmpSVposLng = tmpSVpos.lng();
                    console.log("showStrtVwPop.povChanged.pos: " + tmpSVpos.lat() + " " + tmpSVpos.lng());
                    console.log("showStrtVwPop.povChanged.hpitch: " + tmpSVheading + " : " + tmpSVpitch);  
                    console.log("showStrtVwPop.povChanged.zoom: " + panorama.getPov().zoom);
                    console.log("showStrtVwPop.povChanged.tilt: " + panorama.getPov().tilt); 

                    });

               


            }

*/