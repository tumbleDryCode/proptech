currIContent = "y"
var euiFFObjArr = null;
var euiFFObjArr = [];
var tmpOldFFvals = null;
var tmpOldFFvals = {};
var tmpSvBtnObj = null;
var tmpPrpLinksArr = null;
var tmpPrpLinksArr = [];
var tmpMapUmrkdObj = null;
var tmpMapUmrkdObj = {};
var tmpSVpos = "";
var tmpSVheading = "";
var tmpSVpitch = "";
var gpmap = null;
var currPgTitle = stxt[985];
var threedmap = null;

var tPrpLngCds = {};
tPrpLngCds["en_us"] = {"lang":"English","trnscode":"en"};
tPrpLngCds["spa_spa"] = {"lang":"Spanish","trnscode":"es"};
tPrpLngCds["fr_fr"] = {"lang":"French","trnscode":"fr"};
tPrpLngCds["pt_pt"] = {"lang":"Portuguese","trnscode":"pt"};
 
var tPrpLngs = {};
tPrpLngs["en_us"] = "English";
tPrpLngs["spa_spa"] = "Spanish";
tPrpLngs["fr_fr"] = "French";
tPrpLngs["pt_pt"] = "Portuguese";

var BaseUrl = window.location.protocol + "//" + window.location.host + "" ;
var htmlRegex = /<(.*)>.*?|<(.*)\/>/;
var tmpPrpLngArr = null;
var tmpPrpLngArr = [];
var tmpPrpLngObj = null;
var tmpPrpLngObj = {};
// make AdvancedMarkerElement available globally
var AdvancedMarkerElement, Marker3DElement, PinElement, interactiveMarker;

var circles = [];
var rectangles = [];
var polygons = [];
var polylines = [];
var markers = [];

/* These are the functions that are used to set the property descriptions and titles in multiple languages
// propdescs table is used to store property descriptions and titles in multiple languages
// this should be used in conjunction with the property table
// pd_prpid is the property id from the property table
// pd_prptlng is the language code
// pd_prptype is the type of description or title
// pd_prptitle is the  title
// pd_prpdesc is the description
// pd_dadded is the date added
*/
function closeLangTrnsBx() {
    try {
        document.getElementById('ltboxLTns').style.top='-800px';
       document.getElementById('ltboxLTns').style.display='none';
         document.getElementById('dvLTPopCntr').style.display='none';
        document.getElementById('dvLTPopCntr').style.top='-800px';
     } catch(e) {
        alert("closeLangTrnsBx: " + e);
    }
    }
        
function popLangTrnsBx() {
 
    try {

    tmpLTrnsbox = document.getElementById('ltboxLTns');
    tmpLCTrnsbox = document.getElementById('dvLTPopCntr');
    // tmpLTrnsbox is the lightbox and tmpLCTrnsbox is the content
    // pop them up
    tmpLTrnsbox.style.top='0px';
    tmpLTrnsbox.style.display='block';
    tmpLCTrnsbox.style.display='block';



    tmpLCTrnsbox.style.top='10px';


    iMdl = Math.round((getViewportWidth() - tmpLCTrnsbox.clientWidth) / 2);
    tmpLCTrnsbox.style.left=iMdl+"px";

   


    tmpLCTrnsbox.style.position='absolute';
    

    // set left and right to 0px
    tmpLTrnsbox.style.left='0px';
    tmpLTrnsbox.style.right='0px';
    // set the width and height to 100%
    tmpLTrnsbox.style.width='100%';
    tmpLTrnsbox.style.height='100%';
    // set the background color to white
    
    window.scrollTo(0,0);
    scrollTo(0,0);
    scrollToElement("dvHdr");
    } catch(e) {
    alert("popLangTrnsBx: " + e);
    }
    }
    

function doTransPost() {
     BaseUrl = "http://127.0.0.1:5000";
 
        var request = new XMLHttpRequest();
        tFullTrnsStr = "";
        tDTrnsTtl = document.getElementById("tmp_ptitle").value;
        tDTrnsDsc = document.getElementById("tmp_pcontent").value;
        tDTrnsDsc =  document.getElementById("tmp_pcontent_ifr").contentWindow.document.body.innerHTML;
         
        // tDTrnsDsc = tinyMCE.activeEditor.getContent();
        tDTrnsLngStr = tDTrnsTtl + "|||" + tDTrnsDsc;
        var data = new FormData();
        data.append("q", tDTrnsLngStr);
        data.append("source", tPrpLngCds[usrlang]["trnscode"]);
        data.append("target", tPrpLngCds[document.getElementById("pd_prptlng").value]["trnscode"]);
        data.append("format", "text");
        // data.append("alternatives", 3);
        data.append("api_key", localStorage.getItem("api_key") || "");
        // if (apiSecret) data.append("secret", atob(self.apiSecret));

        request.open('POST', BaseUrl + '/translate', true);

        request.onload = function() {
            try{
                
 
                

                var res = JSON.parse(request.response);
                // Success!
                if (res.translatedText !== undefined){
                    translatedText = res.translatedText;
                    loadingTranslation = false;
                    output = JSON.stringify(res, null, 4);
                    console.log("doTransPost: " + output);
             
                } else{
                    throw new Error(res.error || "Unknown error");
                }
            } catch (e) {
                error = e.message;
                loadingTranslation = false;
            }
        };

        request.onerror = function() {
            error = "Cannot load /translate";
            loadingTranslation = false;
        };

        request.send(data);
    }
 

function setPrpDescLngs(rsplA, rsplB, rsplC) {
    console.log("setPrpDescLngs: " + rsplA + " " + rsplB + " " + rsplC);
    tmpPrpLngArr = JSON.parse(rsplB);
}
 
function getPrpDescLangs() {
tmpDOqs = null;
tmpDOqs = {};
tmpDOqs["ws"] = "where pd_prpid=?";
tmpDOqs["wa"] = [currUrlArr.prpid];
tmpDOqs["l"] = 45;
oia = getNuDBFnvp("propdescs",5,null,tmpDOqs);
doQComm(oia["rq"], null, "setPrpDescLngs");
}

function  setPDescTransJS(theRa, theRb, theRc) {
    document.getElementById(theRa).innerHTML = theRb;
    console.log("setPrpJS: " + theRa + " " + theRb + " " + theRc);

    JSSHOP.loadScript("js/app/x_aa-mod-propdescs.js", loadTnyI, "js");
   
}  

 function popPDescTrans() {
    JSSHOP.ui.popAndFillLbox("noQvalue");
  JSSHOP.ajax.doNuAjaxPipe("lightbox_content", "tplates/aa-mod-propdescs.html", setPDescTransJS);
}



/* end of property descriptions and titles in multiple languages functions */








var fnshProdMDel = function(aa,bb,cc) { 
    // alert(bb);
    getPropImgs();
    JSSHOP.ui.closeLbox();
    
    };


    var fnshProdMDel = function(aa,bb,cc) { 
        // alert(bb);
        getPropImgs();
        JSSHOP.ui.closeLbox();
        
        };








        function showStrtVwPop(tLocLat, tLocLng) {
            var panorama;
            tprpLocLat = tmp_ploclat.value;
            tprpLocLng = tmp_ploclng.value;
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
                // var marker_position = new google.maps.LatLng(parseFloat(tprpLocLat), parseFloat(tprpLocLng));
                var marker_position = new google.maps.geometry.spherical.computeOffset(position, 10, panorama.getPov().heading);
                var marker_pano = new google.maps.Marker({
                    map: panorama,
                    position: marker_position,
                    title: 'test',
                    draggable: false,
                    animation: google.maps.Animation.DROP,
                    icon: 'https://titan/incasa/images/logo/logo.png',
                    label: 'testerr',
                    labelClass: "labels",
                    // labelAnchor: new google.maps.Point(22, 0),
                    labelStyle: {opacity: 0.75},
                    // icon: 'https://titan/incasa/images/logo/logo.png',
                    // give icon a class
                    iconClass: 'icnRndnUser',

                    // anchorPoint: new google.maps.Point(0, -29),
 
                    optimized: false,
                    visible: true,
                    clickable: true,
                    crossOnDrag: false,
                    cursor: 'pointer',
                    opacity: 1,
                    shape: null,
                    title: 'test test test',
                    zIndex: 1

                  });
                    marker_pano.addListener('click', function() {
                    alert('You clicked the marker!');
                    });


                    

                panorama.addListener("position_changed", () => {
                    tmpSVpos = panorama.getPosition();
                  });
                    panorama.addListener("pov_changed", () => {
                    tmpSVheading = panorama.getPov().heading;
                    tmpSVpitch = panorama.getPov().pitch;

                    });

               


            }


 
            function getCurrSVImgUrl(tIUwidth, tIUheight) {
                tmpSVurl = "https://maps.googleapis.com/maps/api/streetview?size=" + tIUwidth + "x" + tIUheight + "&location=" + tmpSVpos.lat() + "," + tmpSVpos.lng() + "&heading=" + tmpSVheading + "&pitch=" + tmpSVpitch + "&key=" + gglSKey;
                return tmpSVurl;
            }
 
            function showSVImages(a,b,c) {
                tSVImgStr = "";
                if(b.indexOf("_id") != -1) {
                    tAiretArr = JSON.parse(b);
                    var len = tAiretArr.length;
                    iint = 0;
                    while (iint < len) {
                        tNrmlImg = tAiretArr[iint]["m_file"];
                        tLZuncompD = LZString.decompressFromEncodedURIComponent(tNrmlImg);
                        tThumbImg = tAiretArr[iint]["m_file_thumb"];
                        tLZuncomp = LZString.decompressFromEncodedURIComponent(tThumbImg);
                        //  			tstr += "<img src=\"images/property/" + tAiretArr[iint]["m_file_thumb"] + "\" class=\"icnmedbtn slmtable\" onclick=\"javascript:JSSHOP.ui.popAndFillLbox(getPropIEditDv('" + tAiretArr[iint]["_id"] + "','" + tAiretArr[iint]["m_file"] + "'));\">";

                        tSVImgStr += "<img src=\"" + tLZuncomp + "\" class=\"icnmedbtn slmtable\" onclick=\"JSSHOP.ui.popAndFillLbox(getPrdImgEditDv('" + tAiretArr[iint]["_id"] + "','" + tNrmlImg + "'));\">";
                        iint++;
                    }
                    document.getElementById("dvSVimgs").innerHTML = tSVImgStr;
                }
            }

function fnishSVImgAdd(aa,bb,cc) {
    JSSHOP.ui.closeLbox();
    // getSVImages();
    tmpDOs = null;
    tmpDOs = {};
    tmpDOs["ws"] = "where m_pid=? and m_rtype=? and m_catid=?";
    tmpDOs["wa"] = [prpid, 5, 20];
    tmpDOs["o"] = "m_vala desc";
    oi = getNuDBFnvp("qmedia", 5, null, tmpDOs);
    doQComm(oi["rq"], null, "showSVImages");

    };

            function saveCurrSVImgUrl() {
                tSVIurl = getCurrSVImgUrl("640", "480");
                tSVIthmburl = getCurrSVImgUrl("320", "240");
                tmpSVurl = LZString.compressToEncodedURIComponent(tSVIurl);
                tmpSVthmburl = LZString.compressToEncodedURIComponent(tSVIthmburl);
                JSSHOP.shared.setFrmFieldVal("qmedia", "m_file", tmpSVurl);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_file_thumb", tmpSVthmburl);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_coid", prpid);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_uid", quid);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_pid", prpid);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_dadded", JSSHOP.getUnixTimeStamp());
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_catid", 20);
 

        tmpDOs = null;
        tmpDOs = {};
        tmpDOs["knvp"] = JSSHOP.shared.getFrmVals(document["qmedia"], "nada");
        oi = getNuDBFnvp("qmedia", 6, null, tmpDOs);
        doQComm(oi["rq"], null, "fnishSVImgAdd");
            }


            
var doStrtVwPop = function() {
    tSVpopStr = "<div id=\"dvStrtVwPop\" style=\"width:100%;height:100%;min-height:300px;\"><img src=\"images/misc/loading.gif\"></div>";
    // create a div that has a the camera material.icon to call getCurrSVImgUrl
    tSVpopStr += "<i class=\"txtClrRed brdrClrWhite bkgdClrWhite menu-material-icons\" alt=\"delete\" title=\"delete\">&#xe92b;</i>";
    tSVpopStr += "<div class=\"dvTxtBtns\"><input type=\"button\" class=\"btnTxtLabel\" value=\"Get Image URL\" onclick=\"javascript:saveCurrSVImgUrl();\"></div>";
    JSSHOP.ui.popAndFillLbox(tSVpopStr);

    if(currGglSVloaded == "no") {
        currGglSVloaded = "y";
        JSSHOP.loadScript("https://maps.googleapis.com/maps/api/js?libraries=marker,geometry&key=" + gglSKey, showStrtVwPop,"js");
        } else {
            tLocLat = tmp_ploclat.value;
            tLocLng = tmp_ploclng.value;
            showStrtVwPop(tLocLat, tLocLng);
        }
 
     };



/* 3d maps in experimental phase
* refrence: https://developers.google.com/maps/documentation/javascript/examples/marker-simple
* refrence: https://developers.google.com/maps/documentation/javascript/3d-maps-getting-started
  <body>
    <gmp-map-3d mode="hybrid" center="37.841157, -122.551679" range="2000" tilt="75" heading="330"></gmp-map-3d>
    <script async src="https://maps.googleapis.com/maps/api/js?key=<YOUR_KEY>&v=alpha&libraries=maps3d"></script>
  </body>
  */

  var saveCurr3DImgUrl = function() {
    t3DImgUrl = getCurr3DImgUrl("640", "480");
    t3DImgThmbUrl = getCurr3DImgUrl("320", "240");
    tmp3DImgUrl = LZString.compressToEncodedURIComponent(t3DImgUrl);
    tmp3DImgThmbUrl = LZString.compressToEncodedURIComponent(t3DImgThmbUrl);
    JSSHOP.shared.setFrmFieldVal("qmedia", "m_file", tmp3DImgUrl);
    JSSHOP.shared.setFrmFieldVal("qmedia", "m_file_thumb", tmp3DImgThmbUrl);
    JSSHOP.shared.setFrmFieldVal("qmedia", "m_coid", prpid);
    JSSHOP.shared.setFrmFieldVal("qmedia", "m_uid", quid);
    JSSHOP.shared.setFrmFieldVal("qmedia", "m_pid", prpid);
    JSSHOP.shared.setFrmFieldVal("qmedia", "m_dadded", JSSHOP.getUnixTimeStamp());
    JSSHOP.shared.setFrmFieldVal("qmedia", "m_catid", 30);
    tmpDOs = null;
    tmpDOs = {};
    tmpDOs["knvp"] = JSSHOP.shared.getFrmVals(document["qmedia"], "nada");
    oi = getNuDBFnvp("qmedia", 6, null, tmpDOs);
    doQComm(oi["rq"], null, "fnish3DImgAdd");
    };
function fnish3DImgAdd(aa,bb,cc) {
    JSSHOP.ui.closeLbox();
    // get3DImages();
    tmpDOs = null;
    tmpDOs = {};
    tmpDOs["ws"] = "where m_pid=? and m_rtype=? and m_catid=?";
    tmpDOs["wa"] = [prpid, 5, 30];
    tmpDOs["o"] = "m_vala desc";
    oi = getNuDBFnvp("qmedia", 5, null, tmpDOs);
    doQComm(oi["rq"], null, "show3DImages");
    };
function getCurr3DImgUrl(tIUwidth, tIUheight) {
    // get the center of the map
    tCntrMap = gpmap.getCenter();
    // tCntrMapLat = tCntrMap.lat();
    // tCntrMapLng = tCntrMap.lng();
    // adjust the lat lang to 10 meters south of the center of the map
    tCntrMapLat = tCntrMap.lat() - 0.0001;
    tCntrMapLng = tCntrMap.lng();
    // get the zoom level of the map
    tZmLvl = gpmap.getZoom();
    // get the map type of the map
    tMpType = gpmap.getMapTypeId();
    // tWdth = tIUwidth;
    // tHght = tIUheight;
    // get the size of the map
    tIUwidth = gpmap.getDiv().offsetWidth;
    tIUheight = gpmap.getDiv().offsetHeight;
    t3DImgUstr = "https://maps.googleapis.com/maps/api/staticmap?size=" + tIUwidth + "x" + tIUheight + "&center=" + tCntrMapLat + "," + tCntrMapLng + "&zoom=" + tZmLvl + "&maptype=" + tMpType + "&key=" + gglSKey;
    // t3DImgUstr = "https://maps.googleapis.com/maps/api/staticmap?size=" + tIUwidth + "x" + tIUheight + "&center=" + tCntrMapLat + "," + tCntrMapLng + "&zoom=" + tZmLvl + "&maptype=" + tMpType + "&key=" + gglSKey;
    // t3DImgUstr = "https://maps.googleapis.com/maps/api/staticmap?size=" + tIUwidth + "x" + tIUheight + "&center=" + tCntrMapLat + "," + tCntrMapLng + "&zoom=" + tZmLvl + "&maptype=" + tMpType + "&key=" + gglSKey;
    // t3DImgUstr = "https://maps.googleapis.com/maps/api/staticmap?size=" + tIUwidth + "x" + tIUheight + "&center=" + tCntrMapLat + "," + tCntrMapLng + "&zoom=" + tZmLvl + "&maptype=" + tMpType + "&key=" + gglSKey;
    return t3DImgUstr;
    }
function show3DImages(a,b,c) {
    t3DImgStr = "";
    if(b.indexOf("_id") != -1) {
        tAiretArr = JSON.parse(b);
        var len = tAiretArr.length;
        iint = 0;
        while (iint < len) {
            tNrmlImg = tAiretArr[iint]["m_file"];
            tLZuncompD = LZString.decompressFromEncodedURIComponent(tNrmlImg);
            tThumbImg = tAiretArr[iint]["m_file_thumb"];
            tLZuncomp = LZString.decompressFromEncodedURIComponent(tThumbImg);
            //  			tstr += "<img src=\"images/property/" + tAiretArr[iint]["m_file_thumb"] + "\" class=\"icnmedbtn slmtable\" onclick=\"javascript:JSSHOP.ui.popAndFillLbox(getPropIEditDv('" + tAiretArr[iint]["_id"] + "','" + tAiretArr[iint]["m_file"] + "'));\">";
            t3DImgStr += "<img src=\"" + tLZuncomp + "\" class=\"icnmedbtn slmtable\" onclick=\"JSSHOP.ui.popAndFillLbox(getPrdImgEditDv('" + tAiretArr[iint]["_id"] + "','" + tNrmlImg + "'));\">";
            iint++;
        }
        document.getElementById("dv3Dimgs").innerHTML = t3DImgStr;
    }
}
function get3DImages() {
    tmpDOs = null;
    tmpDOs = {};
    tmpDOs["ws"] = "where m_pid=? and m_rtype=? and m_catid=?";
    tmpDOs["wa"] = [prpid, 5, 30];
    tmpDOs["o"] = "m_vala desc";
    oi = getNuDBFnvp("qmedia", 5, null, tmpDOs);
    doQComm(oi["rq"], null, "show3DImages");
    // doQComm(oi["rq"], null, "show3DImages");
    // doQComm(oi["rq"], null, "show3DImages");
}


var doThreeDPop = function() {
    tLocLat = tmp_ploclat.value;
    tLocLng = tmp_ploclng.value;
    (g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
        key: gglSKey,
        v: "alpha",
        // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
        // Add other bootstrap parameters as needed, using camel case.
      });
  
    // t3DpopStr = "<div id=\"dv3DPop\" style=\"width:100%;height:100%;min-height:300px;\"><img src=\"images/misc/loading.gif\"></div>";
    // <gmp-map-3d mode="hybrid" center="37.841157, -122.551679" range="2000" tilt="75" heading="330"></gmp-map-3d>
    t3DpopStr = "<div id=\"dvThreeDPop\" style=\"height:300px;\">";
     // t3DpopStr += "<gmp-map-3d id=\"dvTDPop\" mode=\"hybrid\" center=\"" + tmp_ploclat.value  + "," + tmp_ploclng.value  + "\" range=\"2000\" tilt=\"75\" heading=\"330\"></gmp-map-3d>";
    t3DpopStr += "</div>";
    // create a div that has a the camera material.icon to call getCurrSVImgUrl
    t3DpopStr += "<i class=\"txtClrRed brdrClrWhite bkgdClrWhite menu-material-icons\" alt=\"delete\" title=\"delete\">&#xe92b;</i>";
    t3DpopStr += "<div class=\"dvTxtBtns\"><input type=\"button\" class=\"btnTxtLabel\" value=\"Get Image URL\" onclick=\"javascript:saveCurr3DImgUrl();\"></div>";
    JSSHOP.ui.popAndFillLbox(t3DpopStr);
    if(currGglSVloaded == "no") {
        currGglSVloaded = "y";
        console.log("doThreeDPop:script load " + gglSKey);
        showThreeDPop(tLocLat, tLocLng);
        //  JSSHOP.loadScript("https://maps.googleapis.com/maps/api/js?key=" + gglSKey + "&v=alpha&libraries=maps3d", showThreeDPop,"js");
        } else {
  
            showThreeDPop(tLocLat, tLocLng);
        }
    };


    function doThreeDAnim(fLocLat, fLocLng, fLocAlt) {
        // threedmap.append(xMarker3DElement);
    // const beachFlagImg = document.createElement('img');

  // set interactiveMarker position to fLocLat and fLocLng
    // set interactiveMarker position to fLocLat and fLocLng
    
    interactiveMarker.position = { lat: fLocLat, lng: fLocLng, altitude: 10 };
      threedmap.append(interactiveMarker);

  
    // threedmap.append(beachFlagMarker);
    threedmap.flyCameraTo({
      endCamera: {
        center: { lat: fLocLat, lng:  fLocLng, altitude: fLocAlt },
        tilt: 70.5,
        range: 200,

 
      },
      durationMillis: 3000
    });
    threedmap.addEventListener('gmp-animationend', () => {

        threedmap.flyCameraAround({
        camera: {
          center: { lat: fLocLat, lng:  fLocLng, altitude: fLocAlt },
          tilt: 70.5,
            range: 70,
    
      
        },
        durationMillis: 7000,
        rounds: 1
      });
    }, {once: true});



    }

    async function showThreeDPop(tLocLat, tLocLng) {
    console.log("showThreeDPop: " + tLocLat + " " + tLocLng);
    var mapthree;
    var flyToCamera;
    var dvThreeDPop;
    fltdLat = parseFloat(tLocLat);
    fltdLng = parseFloat(tLocLng);
    // set lat and lng to 10 meters south of the center of the map
    xfltdLat = fltdLat - 0.0101;
    xfltdLng = fltdLng - 0.0101;
    advThreeDPop = document.getElementById('dvThreeDPop');
    // dvThreeDPop = document.getElementById('dvThreeDPop');
    // dvThreeDPop = document.getElementById('dvThreeDPop');
 // Maps JS API is loaded using Dynamic Library import https://developers.google.com/maps/documentation/javascript/load-maps-js-api#dynamic-library-import

 
    var { Map3DElement, MapMode, Marker3DElement, Marker3DInteractiveElement } = await google.maps.importLibrary("maps3d");
 
    var { LatLng } = await google.maps.importLibrary("geometry");
     var { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
     var { PinElement } = await google.maps.importLibrary("marker");

    threedmap = new Map3DElement({
      center: { lat: xfltdLat, lng: xfltdLng,  altitude: 540 },
      tilt: 67.5,
      range: 500,
      mode: MapMode.HYBRID,
      defaultUIDisabled: true,
  
    });
     // threedmap.bounds = {south: -48.30, west: 163.56, north: -32.86, east: -180};
     threedmap.addEventListener('gmp-click', (event) => {
        console.log("threedmap: " + JSON.stringify(event.position));
        tLocAlt = 30;
        if(event.position == null) {
            console.log("threedmap: event.position is null");
            return;
        }  else {
            if(event.position.altitude) {
                tLocAlt = event.position.altitude;
            }
           
            console.log("threedmap: event.position is not null");
         // threedmap.flyCameraTo({endCamera:{center:{lat:event.position.lat,lng:event.position.lng,altitude:50},tilt:70.5,range:200}});
        doThreeDAnim(event.position.lat, event.position.lng, tLocAlt);
        // Do something with event.position.
        }
      });


      advThreeDPop.append(threedmap);
        // creat a save, play and stop button html string and append it to the dvThreeDPop div
        var t3DpopStr = "";
        t3DpopStr += "<div class=\"dvTxtBtns\">";
        t3DpopStr += "<input id=\"btnAEPadd\" type=\"button\" class=\"btnTxtLabel\" value=\"Save Image\" onclick=\"javascript:saveCurr3DImgUrl();\">";
        t3DpopStr += "<input id=\"btnAEPplay\" type=\"button\" class=\"btnTxtLabel\" value=\"Play\" onclick=\"javascript:doThreeDAnim(" + fltdLat + "," + fltdLng + "," + 30 + ");\">";
        t3DpopStr += "<input id=\"btnAEPfly\" type=\"button\" class=\"btnTxtLabel\" value=\"Fly\" onclick=\"javascript:threedmap.flyCameraTo({endCamera:{center:{lat:" + fltdLat + ",lng:" + fltdLng + ",altitude:50},tilt:70.5,range:200}});\">";
        t3DpopStr += "<input id=\"btnAEPanim\" type=\"button\" class=\"btnTxtLabel\" value=\"Animate\" onclick=\"javascript:threedmap.flyCameraAround({camera:{center:{lat:" + fltdLat + ",lng:" + fltdLng + ",altitude:50},tilt:70.5,range:100},durationMillis:7000,rounds:1});\">";
        t3DpopStr += "<input id=\"btnAEPreset\" type=\"button\" class=\"btnTxtLabel\" value=\"Reset\" onclick=\"javascript:threedmap.setCamera({center:{lat:" + fltdLat + ",lng:" + fltdLng + ",altitude:540},tilt:67.5,range:500});\">";
 
        t3DpopStr += "<input id=\"btnAEPstop\"  type=\"button\" class=\"btnTxtLabel\" value=\"Stop\" onclick=\"javascript:threedmap.stopCameraAnimation();\">";
        t3DpopStr += "</div>";
        tHlderDiv = document.createElement("div");
        tHlderDiv.innerHTML = t3DpopStr;
        advThreeDPop.append(tHlderDiv);
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
   
  const pinBackground = new PinElement({
    background: '#FBBC04',
    glyph: '*',
    glyphColor: 'white',
    scale: .5,

  });

 interactiveMarker = new Marker3DInteractiveElement({
    position: { lat: fltdLat, lng: fltdLng, altitude: 10 },
    label: tmp_ptitle.value,
    extruded: true,
    altitudeMode: "RELATIVE_TO_MESH",
  });


  interactiveMarker.addEventListener('gmp-click', (event) => {
    console.log("interactiveMarker: " + JSON.stringify(event.position));
    doThreeDAnim(fltdLat, fltdLng, 10);
  });
  interactiveMarker.append(pinBackground);


    }


    
 








 
     function saveArialVwImgUrl() {
        tAVIurl = getCurrAVImgUrl("640", "480");    
        tAVIthmburl = getCurrAVImgUrl("320", "240");
        tmpAVurl = LZString.compressToEncodedURIComponent(tAVIurl);
        tmpAVthmburl = LZString.compressToEncodedURIComponent(tAVIthmburl);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_file", tmpAVurl);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_file_thumb", tmpAVthmburl);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_coid", prpid);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_uid", quid);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_pid", prpid);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_dadded", JSSHOP.getUnixTimeStamp());
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_catid", 25);
        tmpDOs = null;
        tmpDOs = {};
        tmpDOs["knvp"] = JSSHOP.shared.getFrmVals(document["qmedia"], "nada");
        oi = getNuDBFnvp("qmedia", 6, null, tmpDOs);
        doQComm(oi["rq"], null, "fnishAVImgAdd");
    }
    function fnishAVImgAdd(aa,bb,cc) {
        JSSHOP.ui.closeLbox();
        // getAVImages();
        tmpDOs = null;
        tmpDOs = {};
        tmpDOs["ws"] = "where m_pid=? and m_rtype=? and m_catid=?";
        tmpDOs["wa"] = [prpid, 5, 25];
        tmpDOs["o"] = "m_vala desc";
        oi = getNuDBFnvp("qmedia", 5, null, tmpDOs);
        doQComm(oi["rq"], null, "showAVImages");
    }
    function getCurrAVImgUrl(tIUwidth, tIUheight) {
        // get the center of the map
        tCntrMap = gpmap.getCenter();
        // tCntrMapLat = tCntrMap.lat();
        // tCntrMapLng = tCntrMap.lng();
        // adjust the lat lang to 10 meters south of the center of the map
        tCntrMapLat = tCntrMap.lat() - 0.0001;
        tCntrMapLng = tCntrMap.lng();



        // get the zoom level of the map
        tZmLvl = gpmap.getZoom();
        // get the map type of the map
        tMpType = gpmap.getMapTypeId();

    
        // tWdth = tIUwidth;
        // tHght = tIUheight;
                // get the size of the map
        tIUwidth = gpmap.getDiv().offsetWidth;
         tIUheight = gpmap.getDiv().offsetHeight;

      
        tAVImgUstr = "https://maps.googleapis.com/maps/api/staticmap?zoom=" + tZmLvl + "&size=" + tIUwidth + "x" + tIUheight + "&maptype=" + tMpType + "&key=" + gglSKey;
        //     zoom=" + tZmLvl + "&size=" + tIUwidth + "x" + tIUheight + "&maptype=" + tMpType + "&key=" + gglSKey;
/*
        // tAVImgUstr = "https://maps.googleapis.com/maps/api/staticmap?center=" + tCntrMapLat + "," + tCntrMapLng + "&zoom=" + tZmLvl + "&size=" + tIUwidth + "x" + tIUheight + "&maptype=" + tMpType + "&key=" + gglSKey;
 // Check if there are any markers in gpmap
    if(Object.keys(tmpMapUmrkdObj).length > 0) {
    // if(Object.keys(tmpMapUmrkdObj).length > 0) {
        tAVImgUstr += "&path=color:0xff0000ff|weight:5";
        incAVMrs = 0;
        tfnalpntstr = "";
        for(var tmpMkey in tmpMapUmrkdObj) {
            // create a closed path with the markers
            if(incAVMrs == 0) {
                tfnalpntstr = "|" + tmpMapUmrkdObj[tmpMkey].lat + "," + tmpMapUmrkdObj[tmpMkey].lng; 
                tAVImgUstr += "|" + tmpMapUmrkdObj[tmpMkey].lat + "," + tmpMapUmrkdObj[tmpMkey].lng;
            } else {
                tAVImgUstr += "|" + tmpMapUmrkdObj[tmpMkey].lat + "," + tmpMapUmrkdObj[tmpMkey].lng;
            }

            
            // tAVImgUstr += "|" + tmpMapUmrkdObj[tmpMkey].lat + "," + tmpMapUmrkdObj[tmpMkey].lng;
            incAVMrs++;
        }
        tAVImgUstr += tfnalpntstr;
        
    }
    */
   // get path of polyline on map and add to url
    if(poly != null) {
        tAVImgUstr += "&path=color:0xff0000ff|weight:5";
        const path = poly.getPath();
        // get the length of the path
        const len = path.getLength();
        // loop through all points
        for (var i = 0; i < len; i++) {
            // get the lat/lng of the point
            var pos = path.getAt(i);
            // add the lat/lng of the point to the path
            tAVImgUstr += "|" + pos.lat() + "," + pos.lng();
        }
    }
    

        console.log("getCurrAVImgUrl: " + tAVImgUstr);
         return tAVImgUstr;
    }
    function showAVImages(a,b,c) {
        tAVImgStr = "";
        if(b.indexOf("_id") != -1) {
            tAiretArr = JSON.parse(b);
            var len = tAiretArr.length;
            iint = 0;
            while (iint < len) {
                tNrmlImg = tAiretArr[iint]["m_file"];
                tLZuncompD = LZString.decompressFromEncodedURIComponent(tNrmlImg);
                tThumbImg = tAiretArr[iint]["m_file_thumb"];
                tLZuncomp = LZString.decompressFromEncodedURIComponent(tThumbImg);
                tAVImgStr += "<img src=\"" + tLZuncomp + "\" class=\"icnmedbtn slmtable\" onclick=\"JSSHOP.ui.popAndFillLbox(getPrdImgEditDv('" + tAiretArr[iint]["_id"] + "','" + tNrmlImg + "'));\">";
                iint++;
            }
            document.getElementById("dvAVimgs").innerHTML = tAVImgStr;
        }
    }



    function OLdaddLatLng(event) {
        const path = poly.getPath();
      
        // Because path is an MVCArray, we can simply append a new coordinate
        // and it will automatically appear.
        path.push(event.latLng);
        // Add a new marker at the new plotted point on the polyline.
        new google.maps.Marker({
          position: event.latLng,
          title: "#" + path.getLength(),
          map: gpmap,
        });
      }
     function showArialVwPop(tLocLat, tLocLng) {
      
        tprpLocLat = tmp_ploclat.value;
        tprpLocLng = tmp_ploclng.value;
        tFltdSVlat = parseFloat(tprpLocLat);
        tFltdSVlng = parseFloat(tprpLocLng);
        gpmap = new google.maps.Map(document.getElementById("dvArialVwPop"), {
          center: { lat: tFltdSVlat, lng: tFltdSVlng },
          mapTypeId: "satellite",
          // set max zoom level
            zoom: 20,
            maxZoom: 20,
            // hide all map controls
           //  disableDefaultUI: true,
            // hide the zoom control
            zoomControl: true,
            // hide the scale control
            scaleControl: false,
            // hide the street view control
            streetViewControl: true,
            // enale the rotate control
              rotateControl: true

        });


        const drawingManager = new google.maps.drawing.DrawingManager({
            drawingMode: google.maps.drawing.OverlayType.MARKER,
            drawingControl: true,
            drawingControlOptions: {
              position: google.maps.ControlPosition.TOP_CENTER,
              drawingModes: [
               // google.maps.drawing.OverlayType.MARKER,
               // google.maps.drawing.OverlayType.CIRCLE,
              //  google.maps.drawing.OverlayType.POLYGON,
               google.maps.drawing.OverlayType.POLYLINE,
              //  google.maps.drawing.OverlayType.RECTANGLE,
            
 
              ],
                // add a clear button


            },

    
            circleOptions: {
              fillColor: "#ffff00",
              fillOpacity: 1,
              strokeWeight: 5,
              clickable: false,
              editable: true,
              zIndex: 1,
            },
            // set the polyline as the default drawing mode
            polylineOptions: {
              strokeColor: "#ff0000",
              strokeOpacity: 1.0,
              strokeWeight: 3,
              editable: true,
                draggable: true,

            },
          });


          
  google.maps.event.addListener(drawingManager, 'circlecomplete', updateDrawings);
  google.maps.event.addListener(drawingManager, 'rectanglecomplete', updateDrawings);
    google.maps.event.addListener(drawingManager, 'polylinecomplete', updateDrawings);
  //   google.maps.event.addListener(drawingManager, 'markercomplete', updateDrawings);
    google.maps.event.addListener(drawingManager, 'polygoncomplete', updateDrawings);
 


  var eraseControlDiv = document.createElement('div');
  var eraseControl = new EraseButton(eraseControlDiv,gpmap);

  eraseControlDiv.index = 1;
  gpmap.controls[google.maps.ControlPosition.TOP_CENTER].push(eraseControlDiv);

 
          drawingManager.setMap(gpmap);
          /*

        poly = new google.maps.Polyline({
            strokeColor: "#000000",
            strokeOpacity: 1.0,
            strokeWeight: 3,
          });
          poly.setMap(gpmap);
       // add event listener to map to get the lat/lng of click
         google.maps.event.addListener(gpmap, "click", function(event) {
            // get lat/lng of click
            var clickLat = event.latLng.lat();
            var clickLng = event.latLng.lng();

            tmpMapUmrkdObj["mrk" + clickLat] = {lat: clickLat, lng: clickLng};

            // add marker to map
            var marker = new google.maps.Marker({
                position: { lat: clickLat, lng: clickLng },
                map: gpmap
            });
            // add click event to marker
            google.maps.event.addListener(marker, "click", function() {
                // remove marker from map
                // tmpMapUmrkdObj["mrk" + clickLat] = null;
                // tmpMapUmrkdObj["mrk" + clickLat] = "";
                marker.setMap(null);
                // remove point from polyline
                const path = poly.getPath();
                // get the length of the path
                const len = path.getLength();
                // loop through all points
                for (var i = 0; i < len; i++) {
                    // get the lat/lng of the point
                    var pos = path.getAt(i);
                    // if the lat/lng of the point is the same as the lat/lng of the click
                    if (pos.lat() == clickLat && pos.lng() == clickLng) {
                        // remove the point from the polyline
                        path.removeAt(i);
                        // exit the loop
                        break;
                    }
                }


            });
            // add marker to map
            addLatLng(event);
        });

        */
        // set tilt of map
    
        gpmap.setTilt(45);
    }
    function getArialVwPop(tLocLat, tLocLng) {
        setTimeout(function(){ showArialVwPop(tLocLat, tLocLng); }, 3000);
    }

     function doArialVwPop() {
        tAVpopStr = "<div id=\"dvArialVwPop\" style=\"width:100%;height:100%;min-height:300px;\"><img src=\"images/misc/loading.gif\"></div>";
         tAVpopStr += "<div class=\"dvTxtBtns\"><input type=\"button\" class=\"btnTxtLabel\" value=\"Get Image URL\" onclick=\"javascript:saveArialVwImgUrl();\"></div>";
        JSSHOP.ui.popAndFillLbox(tAVpopStr);
         tmpMapUmrkdObj = null;
var         tmpMapUmrkdObj = {};
        if(currGglSVloaded == "no") {
            currGglSVloaded = "y";
            JSSHOP.loadScript("https://maps.googleapis.com/maps/api/js?libraries=drawing&key=" + gglSKey, showArialVwPop,"js");
            } else {
                tLocLat = tmp_ploclat.value;
                tLocLng = tmp_ploclng.value;
                showArialVwPop(tLocLat, tLocLng);
            }
    }

    function EraseButton(controlDiv, map) {
        var controlUI = document.createElement('div');
        controlUI.style.backgroundColor = '#fff';
        controlUI.style.border = '2px solid #fff';
        controlUI.style.borderRadius = '3px';
        controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
        controlUI.style.cursor = 'pointer';
        controlUI.style.marginBottom = '20px';
        controlUI.style.textAlign = 'center';
        controlUI.title = 'Click to clear map';
        controlDiv.appendChild(controlUI);
      
        var controlText = document.createElement('div');
        controlText.style.color = 'rgb(25,25,25)';
        controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
        controlText.style.fontSize = '12px';
        controlText.style.lineHeight = '38px';
        controlText.style.paddingLeft = '5px';
        controlText.style.paddingRight = '5px';
        controlText.innerHTML = 'Empty Map';
        controlUI.appendChild(controlText);
      
        controlUI.addEventListener('click', emptyMap);
      
      }

      function updateDrawings(shape){
        if(shape == null) return;
      
        if(shape instanceof google.maps.Circle){
          circles.push(shape);
        }
        else if (shape instanceof google.maps.Rectangle) {
          rectangles.push(shape);
        } else if (shape instanceof google.maps.Polyline) {
            polylines.push(shape);
        } else if (shape instanceof google.maps.Marker) {
            markers.push(shape);
        } 
      }

      function emptyMap(){
        circles.forEach(function(e){
          e.setMap(null);
        });
        rectangles.forEach(function(e){
          e.setMap(null);
        });
        polylines.forEach(function(e){
            e.setMap(null);
        });
        markers.forEach(function(e){
            e.setMap(null);
        });
        circles = [];
        rectangles = [];
        polylines = [];
        markers = [];
        tmpMapUmrkdObj = {};
        poly = null;

 
      }




        // create a div that has a the camera material.icon to call getCurrSVImgUrl

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
procNuUIitem("property","pimage",prpid,JSSHOP.shared.getFrmFieldVal("qmedia", "m_file", 0),"fnshProdMMain");
    }
};
 

var getPrdImgEditDv = function(tpIncrNPI, tpFImg) {
tpPIEDv = document.createElement('div');
JSSHOP.shared.setFrmFieldVal("qmedia", "_id", tpIncrNPI);
JSSHOP.shared.setFrmFieldVal("qmedia", "m_file", tpFImg);
 
 if(tpFImg.indexOf(".") != -1) {
tmpRetStr = "<img src=\"images/property/" + tpFImg +  "\" style=\"width: 100%\"  class=\"\" onclick=\"alert('" + JSSHOP.shared.getFrmFieldVal("qmedia", "_id", "0") + "');\">"
} else {
    tLZdecd = LZString.decompressFromEncodedURIComponent(tpFImg);
tmpRetStr = "<img src=\"" + tLZdecd +  "\" style=\"width: 100%\"  class=\"\" onclick=\"alert('" + JSSHOP.shared.getFrmFieldVal("qmedia", "_id", "0") + "');\">"
}
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
    console.log("setPropImgs: " + theAIa + " " + theAIb + " " + theAIc);
    console.log("setPropImgs: " + theAIa + " " + theAIb + " " + theAIc);
    console.log("setPropImgs: " + theAIa + " " + theAIb + " " + theAIc);
	if(theAIb.indexOf("_id") != -1) {
		tAiretArr = JSON.parse(theAIb);
		var len = tAiretArr.length;
        tstr = "";
        iint = 0;
        while (iint < len) {
            tstr += "<div class=\"ls-slide\" data-ls=\"duration:7500; transition2d:5; kenburnszoom:in; kenburnsscale:1.2;\"> <img width=\"1920\" height=\"1080\"    src=\"images/property/" + tAiretArr[iint]["m_file"] + "\" class=\"ls-bg\" alt=\"\" /> </div>";
 
 
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
        slidesPerView: 1,
        spaceBetween: 30,
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
};




var getPropIEditDv = function(tpIncrNPI, tpFImg) {
	console.log("getPrdImgEditDv " + tpIncrNPI + " " + tpFImg);
tpPIEDv = document.createElement('div');
JSSHOP.shared.setFrmFieldVal("qmedia", "_id", tpIncrNPI);
JSSHOP.shared.setFrmFieldVal("qmedia", "m_file", tpFImg);
 
tmpRetStr = "<img src=\"images/property/" + tpFImg +  "\" style=\"width: 100%\"  class=\"\" onclick=\"alert('" + JSSHOP.shared.getFrmFieldVal("qmedia", "_id", "0") + "');\">"
 try {
tmpRetStr += "<div class=\"dvTxtBtns\"><input type=\"button\" class=\"btnTxtLabel\" value=\"" + stxt[521] + "\" onclick=\"javascript:doPrdMMain();\">   |   <input type=\"button\" class=\"btnTxtLabel\" value=\"" + stxt[42] + "\" onclick=\"javascript:doPrdMDelete();\"></div>";
tmpRetStr += "<br><br>";
 
return tmpRetStr;
} catch(e) {
alert("getPrdImgEditDv " + e);
tmpRetStr = "oops. something wrong..";
return tmpRetStr;
}
};


var getSocLinksStr = function(tSLurl) {
    tRestSLStr = "";
        if((tSLurl.indexOf("video") != -1) || (tSLurl.indexOf("reels") != -1)) {
//             <div class="fb-video" data-href="https://www.facebook.com/facebook/videos/10153231379946729/" data-width="500" data-show-text="false"><blockquote cite="https://www.facebook.com/facebook/videos/10153231379946729/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/facebook/videos/10153231379946729/">How to Share With Just Friends</a><p>How to share with just friends.</p>Posted by <a href="https://facebook.com/facebook">Facebook</a> on Friday, December 5, 2014</blockquote></div>
tSLurlL = "javascript:showModalPopUp();";
            tRestSLStr += "<div  style=\"word-wrap:break-word;word-break: break-word;\"  class=\"fb-video\" data-href=\"" + tSLurl + "\" data-width=\"500\" data-show-text=\"true\" data-show-posts=\"true\"><blockquote cite=\"" + tSLurl + "\" class=\"fb-xfbml-parse-ignore\"><a href=\"" + tSLurl + "\">" + tSLurl + "</a><p>" + tSLurlL + "</p>Posted by <a href=\"https://facebook.com/facebook\">Facebook</a> on Friday, December 5, 2014</blockquote></div><hr>";
        } else {
            tSLurlL = "javascript:showModalPopUp();";
            tRestSLStr += "<div  style=\"word-wrap:break-word;word-break: break-word;\"  data-show-posts=\"true\" class=\"fb-post\" data-href=\"" + tSLurl + "\" data-width=\"500\" data-show-text=\"true\"><blockquote cite=\"" + tSLurl + "\" class=\"fb-xfbml-parse-ignore\"><a href=\"" + tSLurlL + "\">" + tSLurl + "</a></blockquote></div><hr>";
        }
  
    return tRestSLStr;
}

function saveEdFBPlgObj() {
    console.log("saveFBPlgObj: " + lightbox_content.innerHTML);
    currFBPlgObj["prp" + prpid] = lightbox_content.innerHTML;
}
function doEdFBPlgObj(aee, bee) {
    console.log("doFBPlgObj: " + aee + " " + bee);
    setTimeout(function(){ saveEdFBPlgObj(); }, 3000);
}

function getEdSocCntnt(tSocLnk) {
    tIFSCStr = getSocLinksStr(tSocLnk);
    // document.getElementById("dvSocCntnt").innerHTML = tIFSCStr;
    JSSHOP.ui.popAndFillLbox(tIFSCStr);
    ttSIFCs = Math.round(new Date().getTime() / 1000);
    JSSHOP.loadScript("https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2&ttime=" + ttSIFCs, doEdFBPlgObj,"js");
    }

    


var rndrPrpSocLnks = function(a,b,c) {
    console.log("rndrPrpSocLnks: " + a + " " + b + " " + c);
    tSocStr =  "<table style=\"width:100%;\">";
    for(var iint = 0; iint < tmpPrpLinksArr.length; iint++) {
        tMDstr = tmpPrpLinksArr[iint]["m_data"];
        tMfileSTr = tmpPrpLinksArr[iint]["m_file"];
        if(tMDstr.length < 0) {
            tMDstr = "No description";
        }
        tSocStr += "<tr><td><a href=\"" + tMfileSTr + "\">" + tMDstr + "</a></td>";
        tSocStr += "<td><button  onclick=\"javascript:doPrpSocLnkDel(" + iint + "," + tmpPrpLinksArr[iint]._id + ");\" class=\"crsrPointer txtXLrg txtBold slmtable bkgdClrWhite brdrNone txtClrDrkGrn\"><i class=\"txtClrRed brdrClrWhite bkgdClrWhite menu-material-icons\" alt=\"delete\" title=\"delete\">&#xe92b;</i></button></td></tr>";
    }
    tSocStr += "</table>";
    document.getElementById("dvPrpSocLinks").innerHTML = tSocStr;
    JSSHOP.ui.setCBBClickClr(dvPrpSocLinks,'cls_button cls_button-medium brdrClrDlg txtClrHdr','txtClrHdr bkgdClrWhite', function(){JSSHOP.ui.closeLbox()});

};
        

var doPrpSocLnkDel = function(tmpCLindex, tmpQlid) {
    tPSLarr = null;
    tPSLarr = [];
    tPSLarr = removeArrElement(tmpPrpLinksArr, tmpCLindex);
    tmpPrpLinksArr = null;
    tmpPrpLinksArr = [];
    if(tmpCLindex > 0) {
    tmpPrpLinksArr = tPSLarr;
    }
    procNuUIitem("qmedia","m_rtype",tmpQlid,"0","rndrPrpSocLnks");
};

var setPropImgs = function(theAIa, theAIb, theAIc) {
	try {
        tmpPrpLinksArr = null;
        tmpPrpLinksArr = [];
        console.log("setPropImgs: " + theAIa + " " + theAIb + " " + theAIc);
        tSocStr = "";
        tSVImgDarr = [];
        tAVImgDarr = [];
    if(theAIb.indexOf("_id") != -1) {

		tAiretArr = JSON.parse(theAIb);
		var len = tAiretArr.length;
        tstr = "";
        
        iint = 0;
        while (iint < len) {
 
             tBsj = tAiretArr[iint];
            if(tAiretArr[iint]["m_catid"] == "5") {
            if(tAiretArr[iint]["m_file"] == c_logoimg.value) {
              tstr += "<div style=\"float:left\" class=\"crsrPointer brdrClrRed\">";
              
            } else {
			tstr += "<div style=\"float:left\" class=\"crsrPointer\">";
            }
 
 			tstr += "<img src=\"images/property/" + tAiretArr[iint]["m_file_thumb"] + "\" class=\"icnmedbtn slmtable\" onclick=\"javascript:JSSHOP.ui.popAndFillLbox(getPropIEditDv('" + tAiretArr[iint]["_id"] + "','" + tAiretArr[iint]["m_file"] + "'));\">";
			tstr += "</div>";
        } else if(tAiretArr[iint]["m_catid"] == "20") {
            tSVImgDarr.push(tAiretArr[iint]);
        }  else if(tAiretArr[iint]["m_catid"] == "25") {
            tAVImgDarr.push(tAiretArr[iint]);
        }  else {

            tmpPrpLinksArr.push(tAiretArr[iint]);
            tMDstr = tAiretArr[iint]["m_data"];
            tMfileSTr = tAiretArr[iint]["m_file"];
            if(tMDstr.length < 1) {
                tMDstr = "No description";
            }
 
            tSocStr += "<tr><td><a href=\"" + tMfileSTr + "\">" + tMDstr + "</a></td>";
            tSocStr += "<td><button  onclick=\"javascript:doPrpSocLnkDel(" + iint + "," + tAiretArr[iint]["_id"] + ");\" class=\"crsrPointer txtXLrg txtBold slmtable bkgdClrWhite brdrNone txtClrDrkGrn\"><i class=\"txtClrRed brdrClrWhite bkgdClrWhite menu-material-icons\" alt=\"delete\" title=\"delete\">&#xe92b;</i></button></td></tr>";
 
        }
			iint++;
		} // end while
        
        tstr += "<div style=\"clear:both\"></div>";
		document.getElementById("dvProdImgs").innerHTML = tstr;
        if(tSocStr.length > 5) {
            tFllSocStr =  "<table style=\"width:100%;\">";
            tFllSocStr +=  "<tr><td colspan=\"2\"><strong>" + stxt[10] + "</strong></td>";
            tFllSocStr +=  "<td colspan=\"2\"><strong>" + stxt[42] + "</strong></td></tr>";

            tFllSocStr +=  tSocStr + "</table>";

        // document.getElementById("dvPrpSocLinks").innerHTML = tFllSocStr;
        
        }
	} // end if _id
    document.getElementById("dvPrpDVID").innerHTML = stxt[985] + " ID: " + prpid;
    document.getElementById("dvPrpDTtl").innerHTML = ptitle.value;

     if(tSVImgDarr.length > 0) {
        tJSONstr = JSON.stringify(tSVImgDarr);
        showSVImages(1, tJSONstr, 1);
    }
    if(tAVImgDarr.length > 0) {
        tJSONstr = JSON.stringify(tAVImgDarr);
        showAVImages(1, tJSONstr, 1);
    }
    if(tAVImgDarr.length > 0) {
        tJSONstr = JSON.stringify(tAVImgDarr);
        showAVImages(1, tJSONstr, 1);
    }
	} catch(e) {
		alert("setPropImgs: " + e);
	}
};

function fnishMMadd(aa,bb,cc) { 
    getPropImgs();
    JSSHOP.ui.closeLbox();
    };

var finishMPupload = function(theMMum) {
    try {
    

        image = null;
        image = new Image();
        image.src = "images/property/s_thumb" + theMMum;
                // document.getElementById('dvPLogoImg').style.backgroundImage="url(images/slogos/s_thumb" + theMMum + ")"; 
                if(document.getElementById('dvProdImgs').innerText == "dvProdImgs") {
                // document.getElementById('dvPLogoImg').src = "admin/propert/s_thumb" + theMMum;
                JSSHOP.shared.setFrmFieldVal("qmedia", "m_file", theMMum);
                doPrdMMain();
                }
        // document.getElementById('dvPLogoImg').style.backgroundImage="url(images/slogos/s_thumb" + theMMum + ")";    
        document.getElementById("dvProdImgs").appendChild(image);
         JSSHOP.shared.setFrmFieldVal("qmedia", "m_file", theMMum);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_file_thumb", "s_thumb" + theMMum);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_coid", prpid);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_uid", quid);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_pid", prpid);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_dadded", JSSHOP.getUnixTimeStamp());

        tmpDOs = null;
        tmpDOs = {};
        tmpDOs["knvp"] = JSSHOP.shared.getFrmVals(document["qmedia"], "nada");
        oi = getNuDBFnvp("qmedia", 6, null, tmpDOs);
        doQComm(oi["rq"], null, "fnishMMadd");
    } catch(e) {
        alert("finishMPupload:" + e);
        }
    };

var getPropImgs = function() {
    tmpFobj = null;
    tmpFobj = {};
    tmpFobj["ws"] = "where m_pid=? and m_rtype=?";
    tmpFobj["wa"] = [prpid, 5];
	tmpFobj["o"] = "m_vala desc";
    oi = getNuDBFnvp("qmedia", 5, null, tmpFobj);
    doQComm(oi["rq"], null, "setPropImgs");
};

 
 function fnshPrpImgLd(theIMgNum)   {
    console.log("fnshPrpImgLd: " + theIMgNum);
  
}
function fillPpropFields() {
    JSSHOP.shared.setDynFrmVals(document["property"], "tmp_");



    tDDPaddStr = "";
    tDDPStatObj = JSSHOP.ui.getBSDDOptsO();
    tDDPStatObj["ddtype"] = "noQvalue";
    tDDPStatObj["fld"] = "pstatus";
    tDDPStatObj["lbl"] = stxt[956];
    tDDPStatObj["val"] = pstatus.value;
    tDDPStatObj["kvpObj"] = svftObj["propstat"];
    tDDPStatObj["cb"] = "donada";
    tDDPStatObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
    tDDPStatObj["lblcls"] = "txtSmall";
    tDDPStatObj["valcls"] = "txtSmall";
    tDDPStatObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
    tDDPStatObj["horvert"] = "vertical";
    tDDPStatObj["icn"] = "noQvalue";
    tDDPStatStr = JSSHOP.ui.getNuBSdropDstr(tDDPStatObj);
    tDDPaddStr += tDDPStatStr;
    tDDPaddStr += "<br><br>";
    


tDDPStypeObj = JSSHOP.ui.getBSDDOptsO();
tDDPStypeObj["ddtype"] = "noQvalue";
tDDPStypeObj["fld"] = "stype";
tDDPStypeObj["lbl"] = stxt[949];
tDDPStypeObj["val"] = stype.value;
tDDPStypeObj["kvpObj"] = svftObj["contract"];
tDDPStypeObj["cb"] = "donada";
tDDPStypeObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
tDDPStypeObj["lblcls"] = "txtSmall";
tDDPStypeObj["valcls"] = "txtSmall";
tDDPStypeObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
tDDPStypeObj["horvert"] = "vertical";
tDDPStypeObj["icn"] = "noQvalue";
tDDPTypeStr = JSSHOP.ui.getNuBSdropDstr(tDDPStypeObj);
tDDPaddStr += tDDPTypeStr;
tDDPaddStr += "<br><br>";


tDDPPrpTypObj = JSSHOP.ui.getBSDDOptsO();
tDDPPrpTypObj["ddtype"] = "noQvalue";
tDDPPrpTypObj["fld"] = "ptype";
tDDPPrpTypObj["lbl"] = stxt[927];
tDDPPrpTypObj["val"] = ptype.value;
tDDPPrpTypObj["kvpObj"] = svftObj["proptype"];
tDDPPrpTypObj["cb"] = "donada";
tDDPPrpTypObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
tDDPPrpTypObj["lblcls"] = "txtSmall";
tDDPPrpTypObj["valcls"] = "txtSmall";
tDDPPrpTypObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
tDDPPrpTypObj["horvert"] = "vertical";
tDDPPrpTypObj["icn"] = "noQvalue";
tDDPPrpTypStr = JSSHOP.ui.getNuBSdropDstr(tDDPPrpTypObj);
tDDPaddStr += tDDPPrpTypStr;
tDDPaddStr += "<br><br>";

document.getElementById("dvDDeditprop").innerHTML = tDDPaddStr;
 

// prpprtns= `bedroom`, `bathroom`, `balcony`, `kitchen`, `hall`, `floor`

tQuantValObj = {"1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","10":"10"};
 tPrpPrtnsStr = "";
 tDDPrpBedRObj = JSSHOP.ui.getBSDDOptsO();
 tDDPrpBedRObj["ddtype"] = "noQvalue";
    tDDPrpBedRObj["fld"] = "bedroom";
    tDDPrpBedRObj["lbl"] = stxt[922];
    tDDPrpBedRObj["val"] = bedroom.value;
    tDDPrpBedRObj["kvpObj"] = tQuantValObj;
    tDDPrpBedRObj["cb"] = "donada";
    tDDPrpBedRObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
    tDDPrpBedRObj["lblcls"] = "txtSmall";
    tDDPrpBedRObj["valcls"] = "txtSmall";
    tDDPrpBedRObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
    tDDPrpBedRObj["horvert"] = "horizontal";
    tDDPrpBedRObj["icn"] = "noQvalue";
    tDDPrpBedRStr = JSSHOP.ui.getNuBSdropDstr(tDDPrpBedRObj);
    tPrpPrtnsStr += tDDPrpBedRStr;
    tPrpPrtnsStr += "<br>";

    tDDPrpBathRObj = JSSHOP.ui.getBSDDOptsO();
    tDDPrpBathRObj["ddtype"] = "noQvalue";
    tDDPrpBathRObj["fld"] = "bathroom";
    tDDPrpBathRObj["lbl"] = stxt[923];
    tDDPrpBathRObj["val"] = bathroom.value;
    tDDPrpBathRObj["kvpObj"] = tQuantValObj;
    tDDPrpBathRObj["cb"] = "donada";
    tDDPrpBathRObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
    tDDPrpBathRObj["lblcls"] = "txtSmall";
    tDDPrpBathRObj["valcls"] = "txtSmall";
    tDDPrpBathRObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
    tDDPrpBathRObj["horvert"] = "horizontal";
    tDDPrpBathRObj["icn"] = "noQvalue";
    tDDPrpBathRStr = JSSHOP.ui.getNuBSdropDstr(tDDPrpBathRObj);
    tPrpPrtnsStr += tDDPrpBathRStr;
    tPrpPrtnsStr += "<br>";

    tDDPrpBalRObj = JSSHOP.ui.getBSDDOptsO();
    tDDPrpBalRObj["ddtype"] = "noQvalue";
    tDDPrpBalRObj["fld"] = "balcony";
    tDDPrpBalRObj["lbl"] = stxt[924];
    tDDPrpBalRObj["val"] = balcony.value;
    tDDPrpBalRObj["kvpObj"] = tQuantValObj;
    tDDPrpBalRObj["cb"] = "donada";
    tDDPrpBalRObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
    tDDPrpBalRObj["lblcls"] = "txtSmall";
    tDDPrpBalRObj["valcls"] = "txtSmall";
    tDDPrpBalRObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
    tDDPrpBalRObj["horvert"] = "horizontal";
    tDDPrpBalRObj["icn"] = "noQvalue";
    tDDPrpBalRStr = JSSHOP.ui.getNuBSdropDstr(tDDPrpBalRObj);
    tPrpPrtnsStr += tDDPrpBalRStr;
    tPrpPrtnsStr += "<br>";

    tDDPrpKitRObj = JSSHOP.ui.getBSDDOptsO();
    tDDPrpKitRObj["ddtype"] = "noQvalue";
    tDDPrpKitRObj["fld"] = "kitchen";
    tDDPrpKitRObj["lbl"] = stxt[926];
    tDDPrpKitRObj["val"] = kitchen.value;
    tDDPrpKitRObj["kvpObj"] = tQuantValObj;
    tDDPrpKitRObj["cb"] = "donada";
    tDDPrpKitRObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
    tDDPrpKitRObj["lblcls"] = "txtSmall";
    tDDPrpKitRObj["valcls"] = "txtSmall";
    tDDPrpKitRObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
    tDDPrpKitRObj["horvert"] = "horizontal";
    tDDPrpKitRObj["icn"] = "noQvalue";
    tDDPrpKitRStr = JSSHOP.ui.getNuBSdropDstr(tDDPrpKitRObj);
    tPrpPrtnsStr += tDDPrpKitRStr;
    tPrpPrtnsStr += "<br>";

    tDDPrpHalRObj = JSSHOP.ui.getBSDDOptsO();
    tDDPrpHalRObj["ddtype"] = "noQvalue";
    tDDPrpHalRObj["fld"] = "hall";
    tDDPrpHalRObj["lbl"] = stxt[925];
    tDDPrpHalRObj["val"] = hall.value;
    tDDPrpHalRObj["kvpObj"] = tQuantValObj;
    tDDPrpHalRObj["cb"] = "donada";
    tDDPrpHalRObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
    tDDPrpHalRObj["lblcls"] = "txtSmall";
    tDDPrpHalRObj["valcls"] = "txtSmall";
    tDDPrpHalRObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
    tDDPrpHalRObj["horvert"] = "horizontal";
    tDDPrpHalRObj["icn"] = "noQvalue";
    tDDPrpHalRStr = JSSHOP.ui.getNuBSdropDstr(tDDPrpHalRObj);
    tPrpPrtnsStr += tDDPrpHalRStr;
    tPrpPrtnsStr += "<br>";

    // floor
    tDDPrpFlrRObj = JSSHOP.ui.getBSDDOptsO();
    tDDPrpFlrRObj["ddtype"] = "noQvalue";
    tDDPrpFlrRObj["fld"] = "pfloors";
    tDDPrpFlrRObj["lbl"] = stxt[952];
    tDDPrpFlrRObj["val"] = pfloors.value;
    tDDPrpFlrRObj["kvpObj"] = tQuantValObj;
    tDDPrpFlrRObj["cb"] = "donada";
    tDDPrpFlrRObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
    tDDPrpFlrRObj["lblcls"] = "txtSmall";
    tDDPrpFlrRObj["valcls"] = "txtSmall";
    tDDPrpFlrRObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
    tDDPrpFlrRObj["horvert"] = "horizontal";
    tDDPrpFlrRObj["icn"] = "noQvalue";
    tDDPrpFlrRStr = JSSHOP.ui.getNuBSdropDstr(tDDPrpFlrRObj);
    tPrpPrtnsStr += tDDPrpFlrRStr;
    tPrpPrtnsStr += "<br>";


    document.getElementById("dvPrpPrtns").innerHTML = tPrpPrtnsStr;
    // alert("fillPpropFields");



    tLangDDObj = {};
    tLangDDObj["ddtype"] = "noQvalue";
    tLangDDObj["fld"] = "pd_prptlng";
    tLangDDObj["lbl"] =  stxt[110]; // more
    tLangDDObj["val"] = usrlang;
    tLangDDObj["kvpObj"] = tPrpLngs;
    tLangDDObj["cb"] = "doLangSlct";
    tLangDDObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
    tLangDDObj["lblcls"] = "txtSmall";
    tLangDDObj["valcls"] = "txtSmall";
    tLangDDObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
    tLangDDObj["horvert"] = "vertical";
    tLangDDObj["icn"] = "noQvalue";
    tLangDDObj["kvIcnsObj"] = {};
    tLangDDObj["kvIcnsObj"]["en_us"] = "&#xe5cd;";
    tLangDDObj["kvIcnsObj"]["spa_spa"] = "&#xe5cd;";
    tLangDDObj["kvIcnsObj"]["fr_fr"] = "&#xe5cd;";
    tLangDDObj["kvIcnsObj"]["pt_pt"] = "&#xe5cd;";

    tLangDDStr = JSSHOP.ui.getNuBSdropDstr(tLangDDObj);
    document.getElementById("dvLangSlct").innerHTML = tLangDDStr;



/*
istype = document.getElementById("tmp_stype");
iptype = document.getElementById("tmp_ptype");
iselPropStat = document.getElementById("tmp_pstatus"); 


JSSHOP.shared.addCurrSlctObj(svftObj["contract"], istype, stype.value, "noQvalue", "noQvalue");
JSSHOP.shared.addCurrSlctObj(svftObj["propstat"], iselPropStat, pstatus.value, "noQvalue", "noQvalue");
JSSHOP.shared.addCurrSlctObj(svftObj["proptype"], iptype, ptype.value, "noQvalue", "noQvalue");
*/


tmp_pcontent.value = LZString.decompressFromEncodedURIComponent(pcontent.value);

getPropImgs();
currMediaID = prpid;
doMediaBtnSetup('uploadBtn', '', 'finishMPupload', currPrpImgsFldr);
// doWinLoad();
//JSSHOP.loadScript("js/thirdp/tinymce/js/tinymce/tinymce.js", donada, "js");

JSSHOP.loadScript("js/tinymce/tinymce.min.js", loadTnyI, "js");

}
function doMPropForm(aaw,aww,cww) {
    console.log('doMPropForm - aww: ' + aww);
    theRetPArr = JSON.parse(aww);
    thePRetObj = theRetPArr[0];
    // alert("doMPropForm: " + thePRetObj);
// tmp_ptitle.value = thePRetObj.ptitle;
    //  JSSHOP.shared.setFrmVals("property",theRetPArr[0], fillPpropFields);
     for(var gkey in thePRetObj) {
      
        document["property"][gkey].value = thePRetObj[gkey];
        tmpOldFFvals[gkey] = thePRetObj[gkey];
 
        } 

        getPrpDescLangs();
setTimeout(function(){ fillPpropFields(); }, 300);
 
}


 

 /* editing and adding properties */
 


var fnshPrpAdd = function(a,b,c) {
    tncobj = null;
    tncobj = {};
// alert("fnshCoPgAdd: " + b);
if(b.indexOf("_id") != -1) {
// alert("fnshCoPgAdd: " + b)
tncobj = JSON.parse(b);
// alert("fnshCoPgAdd: " + tncobj[0]._id);
if(tncobj[0]._id) {
eindex("pid=aa-edit-prop", "pid=aa-edit-prop&prpid=" + tncobj[0]._id);
    }
}

};




var cbPrpedit = function(a,b,c) {
 
 
    


	if(currUrlArr.prpid) {

JSSHOP.ui.setCBBClickClr(tmpSvBtnObj,'cls_button cls_button-medium  bkgdClrDGreen txtClrWhite','cls_button cls_button-medium  bkgdClrHdr txtClrWhite', function(){tmpSvBtnObj.innerHTML=stxt[21];tmpSvBtnObj.disabled=false;});
} else {
 
        tDadded = JSSHOP.shared.getFrmFieldVal("property", "pdadded", 0);
        tmpDOs = {};
        tmpDOs["ws"] = "where uid=? and pdadded=?";
        tmpDOs["wa"] = [quid,tDadded];
        oi = getNuDBFnvp("property", 5, null, tmpDOs);
        doQComm(oi["rq"],"noQvalue","fnshPrpAdd");

 
 // doMLinkM('aa-edit-places', 'pid=aa-edit-places');
 }
};

function cbNuPropEdit(theTCBtxt) {
    console.log("cbNuPropEdit: " + theTCBtxt);
    tmpSvBtnObj.innerHTML=stxt[21];
    tmpSvBtnObj.disabled=false;
    JSSHOP.ui.popAndFillLbox("Property saved. " + theTCBtxt);
}

var doNPropEdit = function() {

    // JSSHOP.shared.setFrmFieldVal("property", "uid", quid);

    JSSHOP.shared.setFrmFieldVal("property", "pdadded", JSSHOP.getUnixTimeStamp());
    // document.getElementById("uid").value = quid;
    tmpFobj = null;
    tmpFobj = {};
    tTMCcntStr = tinyMCE.activeEditor.getContent();
    tLZenced = LZString.compressToEncodedURIComponent(tTMCcntStr);
    tmp_pcontent.value = tLZenced;
    // alert("tmp_pcontent.value: " + tmp_pcontent.value);
       // alert("c_whours.value: " + c_whours.value);
    tmpFobj["knvp"] = JSSHOP.shared.getNuKNVParr(JSSHOP.shared.getDynFrmVals(document["property"], "tmp_"), tmpOldFFvals);
 
    
    
if(currUrlArr.prpid) {
	    tmpFobj["ws"] = "where _id=?";
    tmpFobj["wa"] = [currUrlArr.prpid];
    oi = getNuDBFnvp("property", 7, null, tmpFobj);
    
} else {

	    oi = getNuDBFnvp("property", 6, null, tmpFobj);
}
// alert("OI: " + oi["rq"]);
	// alert("OI: " + oi["rq"]);
    console.log("OI: " + oi["rq"]);
     // doQComm(oi["rq"], null, "cbPrpedit");
     JSSHOP.ajax.doNuAjaxPost(oi["rq"], cbNuPropEdit);
};




function getTinyPropDesc() {
    // using tmpOldFFvals, create a descrtiptionof the property
    tTnyPropDSTr = "";
    tTnyPropDSTr += "<p><strong>" + tmpOldFFvals.ptitle + "</strong></p>";
    tTnyPropDSTr += "This property is located in " + tmpOldFFvals.pcity + ", " + tmpOldFFvals.pstate + " and is available for " + tmpOldFFvals.ptype + " " + tmpOldFFvals.pcontract + ". ";
    tTnyPropDSTr += "The property has " + tmpOldFFvals.bhk + " bedrooms and " + tmpOldFFvals.bhk + " bathrooms. ";
    tTnyPropDSTr += "The property is " + tmpOldFFvals.pstatus + " and was added on " + tmpOldFFvals.pdadded + ". ";
 
    tinyMCE.activeEditor.setContent(tTnyPropDSTr);

}
var doPropEdit = function() {
doNPropEdit();
}



var doPrpSType = function(tta, ttn, ttc) {
    alert("Saved");
};

var procPrpType = function(theTmpTCB) {

   if(theTmpTCB.checked) {
   JSSHOP.shared.setFrmFieldVal("property", "bhk", 5);
   procNuUIitem("property","bhk",currUrlArr.prpid,"5","doPrpSType");
   } else {
    JSSHOP.shared.setFrmFieldVal("property", "bhk", 1);
    procNuUIitem("property","bhk",currUrlArr.prpid,"1","doPrpSType");
   }
};



/* finish editing and adding properties */






var dmyFnishCntLoad = fnishCntLoad;
fnishCntLoad = function() {



/* // fb plugin 
tarfsb = nCurrFFieldOb();
tarfsb.fid = "btnAddPrpSoM";
tarfsb.fty = "button";
tarfsb.lid = "lbl_AddPrpSoM"; 
tarfsb.ltxt = stxt[625]; 
tarfsb.fcl = function() { doFBPostCntnt()  };
euiFFObjArr.push(tarfsb);
*/
tafsb = nCurrFFieldOb();
tafsb.fid = "btnBIsave";
tafsb.fty = "button";
tafsb.fcl = function() { tmpSvBtnObj=this;doPropEdit();};
euiFFObjArr.push(tafsb);

tcfsb = nCurrFFieldOb();
tcfsb.fid = "btnDEsave";
tcfsb.fty = "button";
tcfsb.fcl = function() { tmpSvBtnObj=this;doPropEdit(); };
euiFFObjArr.push(tcfsb);

tifsb = nCurrFFieldOb();
tifsb.fid = "btnPIsave";
tifsb.fty = "button";
tifsb.fcl = function() { tmpSvBtnObj=this;doPropEdit(); };
euiFFObjArr.push(tifsb);

tofsb = nCurrFFieldOb();
tofsb.fid = "btnLOsave";
tofsb.fty = "button";
tofsb.fcl = function() { tmpSvBtnObj=this;doPropEdit(); };
euiFFObjArr.push(tofsb);

tfok = nCurrFFieldOb();
tfok.fid = "tmp_bhk";
tfok.lid = "lbl_tmp_bhk"; 
tfok.ltxt = "Featured"; 
tfok.fcl = function() { procPrpType(document.getElementById("tmp_bhk")); };
euiFFObjArr.push(tfok); 

 
JSSHOP.shared.initFrmComps(euiFFObjArr);
// set pd_prptlng field to user language
JSSHOP.shared.setFrmFieldVal("propdescs", "pd_prptlng", usrlang);

    if(currUrlArr.prpid) {
  // alert('fnishCntLoad');
  JSSHOP.ui.showHideElement("dvPrpImgs", "show");
 tmpDOqs = null;
tmpDOqs = {};
tmpDOqs["ws"] = "where _id=?";
tmpDOqs["wa"] = [currUrlArr.prpid];
tmpDOqs["l"] = 45;
oia = getNuDBFnvp("property",5,null,tmpDOqs);
doQComm(oia["rq"], null, "doMPropForm");

    } else {
        JSSHOP.ui.popAndFillLbox("No property ID found. Please try again.");
    }
    if(u_cat.value == "5") {
        JSSHOP.ui.showHideElement("dvBHKswitch", "show");
    }

// JSSHOP.shared.setDynFrmVals(document["property"], "tmp_");

// getPropImgs();
// doWinLoad();
// 
document.title = currPgTitle;
JSSHOP.ads.doGenericPlug('mpmenu',3,'dvPartLinks')

return dmyFnishCntLoad;
};


function doPropZoneDD(thePrx, theSTat) {
    try {        } catch(e) {
        alert("doPropZoneDD: " + e);
    }

        // alert("doZoneDD: " + thePrx + " " + theSTat);
        if(theSTat == "ok") {
            tLclDstDstr = getCountryDropStr("country", "doCountryPckChg");
            document.getElementById("dvCountryDD").innerHTML = tLclDstDstr;
        } else {
            document.getElementById("dvCountryDD").innerHTML = "error loading zones";
        }
        // doCountryPckChg("dvCountryDD", u_country.value, u_country.value);
        getRegionDropStr(document.getElementById("country").value, "state", "setUregionDD");
}

function loadTnyI() {
    JSSHOP.loadScript("js/tinymce/init-tinymce.min.js", donada, "js");
    JSSHOP.loadScript("misc/x_countries.js", doPropZoneDD,  "js");

}



// facebook plugin functions

function setUFBPostCntnt(aaw,aww,cww) {
    console.log("setUFBPostCntnt: " + aaw + " " + aww + " " + cww);
    // JSSHOP.ui.popAndFillLbox("Facebook post added. " + aaw + " " + aww + " " + cww);
    document.getElementById("tmp_m_data").innerText = "";
    document.getElementById("tmp_m_file").innerText = "";
    // tmpPrpLinksArr.push(JSSHOP.shared.getDynFrmVals(document["qmedia"], "nada"));
    getPropImgs();
}

function doFBPostCntnt() {
    tInpInnerTxt = document.getElementById("tmp_m_file").innerText;
    tlowerUFBCUrl = tInpInnerTxt.toLowerCase();
    tMdata = document.getElementById("tmp_m_data").innerText; 
    if(tMdata.length < 1) {
        tMdata = "New Title";
    }
    if(tlowerUFBCUrl.indexOf("facebook.com") != -1) {
    tmpFobj = null;
    tmpFobj = {};
    JSSHOP.shared.setFrmFieldVal("qmedia", "m_catid", "10");
    JSSHOP.shared.setFrmFieldVal("qmedia", "m_data", tMdata);
    JSSHOP.shared.setFrmFieldVal("qmedia", "m_file", tInpInnerTxt);
    JSSHOP.shared.setFrmFieldVal("qmedia", "m_coid", prpid);
    JSSHOP.shared.setFrmFieldVal("qmedia", "m_uid", quid);
    JSSHOP.shared.setFrmFieldVal("qmedia", "m_pid", prpid);
    JSSHOP.shared.setFrmFieldVal("qmedia", "m_dadded", JSSHOP.getUnixTimeStamp());

    tmpDOs = null;
    tmpDOs = {};
    tmpDOs["knvp"] = JSSHOP.shared.getFrmVals(document["qmedia"], "nada");
    oi = getNuDBFnvp("qmedia", 6, null, tmpDOs);
   doQComm(oi["rq"], null, "setUFBPostCntnt");
   //  getEdSocCntnt(tInpInnerTxt);
    } else {
        JSSHOP.ui.popAndFillLbox("Invalid Facebook URL. Please try again.");
    }
}













// leaflet map functions map functions map functions map functions
// map functions
// map functions


var LeafIcon = L.Icon.extend({
    options: {
       
        iconSize:     [66, 66],

        iconAnchor:   [-1, -1],

        popupAnchor:  [-3, -16]
 
    }
});
var qlXDoPDetails = function(theDPResp) {
	try {
	
	theDPAesp = removeDiacritics(theDPResp);
	// alert("getDPRespStr: " + theDPResp);
	tDPRObj = JSON.parse(theDPAesp);
 
	console.log("getDPRespStr: " + JSON.stringify(tDPRObj));
	 
	
	 
	
	if(tDPRObj.address) {
	tAOBjVobj = tDPRObj.address;
	// qloga_name.value = tDPRObj.address;
	if(tAOBjVobj["amenity"]) {
	tName = tAOBjVobj["amenity"];
	}
	
	if(tAOBjVobj["postcode"]) {
	tzip = tAOBjVobj["postcode"];
	}
	if(tAOBjVobj["road"]) {
	tstreet = tAOBjVobj["road"];
	}
	if(tAOBjVobj["city_district"]) {
	tloc = tAOBjVobj["city_district"];
	}
	if(tAOBjVobj["city"]) {
	tloc = tAOBjVobj["city"];
	}
	if(tAOBjVobj["county"]) {
	tregion = tAOBjVobj["county"];
	}
	if(tAOBjVobj["country"]) {
	tcountry = tAOBjVobj["country"];
	}
	 
	if(tAOBjVobj["shop"]) {
	tname = tAOBjVobj["shop"] + " " + qlogp_location.value;
	} else if(tAOBjVobj["namedetails"]){
		if(tAOBjVobj["namedetails"]["name"]) {
		tname = ttAOBjVobj["namedetails"]["name"] + " " + qlogp_location.value;
	
		}  
	}  
	}
	if(tDPRObj.lat) {
		tlat  = tDPRObj.lat;
	}
	if(tDPRObj.lon) {
		tlng = tDPRObj.lon;
	}
 
 
	console.log("qlDoPDetails: " + JSON.stringify(tAOBjVobj));

	} catch(e) {
	alert("qlDoPDetails: " + e);
	}
	
	};


var qlXRunPDetails = function(thePDa,thePDResp,thePDc) {
	console.log("runPlaceDetails: " + thePDResp)
	try {
		tDPRObj = JSON.parse(thePDResp);
		if((tDPRObj.lat)  && (tDPRObj.lon)) {
			// alert("qlRunPDetails.lat: " + tDPRObj.lat + " lon: " + tDPRObj.lon)
			// JSSHOP.ui.popLboxMap(tDPRObj.lat, tDPRObj.lon);
		} else {
			// JSSHOP.ui.popLboxMap(tDPRObj.lat, tDPRObj.lon);
		}
		qlXDoPDetails(thePDResp);
	// JSSHOP.ui.popAndFillLbox(qlDoPDetails(thePDResp));
	} catch(e) {
	alert("runPlaceDetails: " + e);
	}
	};

var qlXShowPDetails = function(tPlaceIDXstr) {

	qlXRunPDetails(null, JSON.stringify(currSPRArr[tPlaceIDXstr]), null);
   };

 
   function getCPlcesLRes(thePSa,thePSResp,thePSc) {
	// alert("runPlacesSearch: " + thePSa + " " + thePSResp + " " + thePSc);
	// btnEUsave.disabled = false;
	mtImDSStr = "js/leaflet/images/marker-icon.png";
	mredIcon = new LeafIcon({iconUrl: mtImDSStr});
   	var options = { icon: mredIcon };
	currMapMrkrArr = null;
	currMapMrkrArr = "";
	currMapMrkrArr = [];

	 
	hasr = "n";
	fullstr = "";
	// alert("runPlacesSearch: " + thePSResp);
	farrToFill = JSON.parse(thePSResp);
	farrToFC = farrToFill;
	currSPRArr = null;
	currSPRArr = farrToFC;
	var len = farrToFC.length;
	console.log("farrToFC: " + JSON.stringify(farrToFC));
	var iint = 0;
	var pcid = 0;
	tstr = "";

	
	while(iint < len) {
	fcts = farrToFC[iint];


	tMrkr = null;
tMrkr = "";
tMrkr  = L.marker([fcts.lat, fcts.lon], options).bindPopup('<span class="txtBold txtClrRed"><a href="javascript:map.closePopup();">' + stxt[531] + '</a></span>');
currMapMrkrArr.push(tMrkr);
 
	iint++;
	}
    if(currMapMrkrArr.length > 0) {
	 popPlacesMap();
    } else {
        tSrchIval = document.getElementById("c_location").value;
    alert("No results found for: " + tSrchIval);
    }                                              
    // alert("runPlacesSearch: " + JSON.stringify(currMapMrkrArr));
    
	}

   function getPlcesLRes(thePSa,thePSResp,thePSc) {
	 alert("runPlacesSearch: " + thePSa + " " + thePSResp + " " + thePSc);
	// btnEUsave.disabled = false;
	mtImDSStr = "js/leaflet/images/marker-icon.png";
	mredIcon = new LeafIcon({iconUrl: mtImDSStr});
   	var options = { icon: mredIcon };
	currMapMrkrArr = null;
	currMapMrkrArr = "";
	currMapMrkrArr = [];

	 
	hasr = "n";
	fullstr = "";
	// alert("runPlacesSearch: " + thePSResp);
	farrToFill = JSON.parse(thePSResp);
	farrToFC = farrToFill;
	currSPRArr = null;
	currSPRArr = farrToFC;
	var len = farrToFC.length;
	console.log("farrToFC: " + JSON.stringify(farrToFC));
	var iint = 0;
	var pcid = 0;
	tstr = "";

	
	while(iint < len) {
	fcts = farrToFC[iint];


	tMrkr = null;
tMrkr = "";
tMrkr  = L.marker([fcts.lat, fcts.lon], options).bindPopup('<span class="txtBold txtClrRed"><a href="javascript:map.closePopup();">' + stxt[531] + '</a></span>');
currMapMrkrArr.push(tMrkr);
 
	iint++;
	}
    if(currMapMrkrArr.length > 0) {
	 popPlacesMap();
    } else {

        

        tSrchIval = document.getElementById("c_zipcode").value;

        tSrchIval += " " + document.getElementById("c_location").value;
        JSSHOP.ajax.doNuAjaxPipe("dvPSearch", "_p/osmgeo.php?qv=" + encodeURI(tSrchIval), getCPlcesLRes);

    }                                              
    // alert("runPlacesSearch: " + JSON.stringify(currMapMrkrArr));
    
	}


     
 function setPrpAdrsFlds(thePIdx) {

    
   tDemoRetArr =  [{"place_id":264059589,"licence":"Data © OpenStreetMap contributors, ODbL 1.0. http://osm.org/copyright","osm_type":"node","osm_id":1297298949,"lat":"40.2066454","lon":"-8.4286035","class":"tourism","type":"hotel","place_rank":30,"importance":0.00006753566796363801,"addresstype":"tourism","name":"Hotel Avenida","display_name":"Hotel Avenida, 37, Avenida Emídio Navarro, Almedina, Alta, Coimbra (Sé Nova, Santa Cruz, Almedina e São Bartolomeu), Coimbra, 3000-150, Portugal","address":{"tourism":"Hotel Avenida","house_number":"37","road":"Avenida Emídio Navarro","neighbourhood":"Almedina","suburb":"Alta","city_district":"Coimbra (Sé Nova, Santa Cruz, Almedina e São Bartolomeu)","city":"Coimbra","county":"Coimbra","ISO3166-2-lvl6":"PT-06","postcode":"3000-150","country":"Portugal","country_code":"pt"},"extratags":{"phone":"+351 239 822 155","website":"http://www.hotelavenidacoimbra.com/"},"namedetails":{"name":"Hotel Avenida"},"boundingbox":["40.2065954","40.2066954","-8.4286535","-8.4285535"]}]
     
    tDPRObj = currSPRArr[thePIdx];
    tExtrTstr = "";

    tExtraTags = "";
    if(tDPRObj.extratags) {
        tExtraTags = tDPRObj.extratags;
        for(var tkey in tExtraTags) {
            tExtrTstr += tkey + ": " + tExtraTags[tkey] + "<br>";
        }
    }
     

    // alert("setPrpAdrsFlds: " + JSON.stringify(tDPRObj));
    if(tDPRObj.address) {
        tAOBjVobj = tDPRObj.address;
        // qloga_name.value = tDPRObj.address;
        if(tAOBjVobj["amenity"]) {
            tExtrTstr += tAOBjVobj["amenity"] + "<br>";
        }

        if(tAOBjVobj["postcode"]) {
             tmp_pzipcode.value  = tAOBjVobj["postcode"];
        }
        if(tAOBjVobj["house_number"]) {
            tmp_pdoornum.value = tAOBjVobj["house_number"];
        }
        if(tAOBjVobj["road"]) {
 
            tmp_pstreet.value = tAOBjVobj["road"];
        }
        if(tAOBjVobj["city_district"]) {
            tmp_city.value  = tAOBjVobj["city_district"];
         }
        if(tAOBjVobj["city"]) {
            tmp_city.value  = tAOBjVobj["city"];
        }
        if(tAOBjVobj["county"]) {
            document.getElementById("tmp_state").value  = tAOBjVobj["county"];
        }
        if(tAOBjVobj["state"]) {
            document.getElementById("tmp_state").value  = tAOBjVobj["state"];
        }
        if(tAOBjVobj["country_code"]) {
            console.log("tAOBjVobj[country_code]: " + tAOBjVobj["country_code"]);
            // Country from country code
            tcXccode = tAOBjVobj["country_code"];
            tcXccodUppe = tcXccode.toUpperCase();
            tCCPckSTr = tLocCCTCtryObj[tcXccodUppe];
            document.getElementById("tmp_country").value  = tCCPckSTr;
        
        }
        if(tAOBjVobj["country"]) {
            tmp_country.value  = tAOBjVobj["country"];
        }
        if(tAOBjVobj["shop"]) {
            tExtrTstr  += tAOBjVobj["shop"];
        }
        if(tAOBjVobj["namedetails"]){
            if(tAOBjVobj["namedetails"]["name"]) {
                tExtrTstr  += ttAOBjVobj["namedetails"]["name"] + " " + qlogp_location.value;
        
            }  
        }



    }
    if(tDPRObj.lat) {
        tmp_ploclat.value = tDPRObj.lat;
    }
    if(tDPRObj.lon) {
        tmp_ploclng.value = tDPRObj.lon;
    }

   // validate all possible information from nominatim response and include in description if available
    if(tDPRObj.place_id) {
        tExtrTstr += "Place ID: " + tDPRObj.place_id + "<br>";
    }
    if(tDPRObj.osm_id) {
        tExtrTstr += "OSM ID: " + tDPRObj.osm_id + "<br>";
    }
    if(tDPRObj.osm_type) {
        tExtrTstr += "OSM Type: " + tDPRObj.osm_type + "<br>";
    }
    if(tDPRObj.class) {
        tExtrTstr += "Class: " + tDPRObj.class + "<br>";
    }
    if(tDPRObj.type) {
        tExtrTstr += "Type: " + tDPRObj.type + "<br>";
    }
    if(tDPRObj.place_rank) {
        tExtrTstr += "Place Rank: " + tDPRObj.place_rank + "<br>";
    }
    if(tDPRObj.importance) {
        tExtrTstr += "Importance: " + tDPRObj.importance + "<br>";
    }
    if(tDPRObj.addresstype) {
        tExtrTstr += "Address Type: " + tDPRObj.addresstype + "<br>";
    }
    if(tDPRObj.display_name) {
        tExtrTstr += "Display Name: " + tDPRObj.display_name + "<br>";
    }
    if(tDPRObj.boundingbox) {
        tExtrTstr += "Bounding Box: " + tDPRObj.boundingbox + "<br>";
    }
    if(tDPRObj.lat) {
        tExtrTstr += "Latitude: " + tDPRObj.lat + "<br>";
    }
    if(tDPRObj.lon) {
        tExtrTstr += "Longitude: " + tDPRObj.lon + "<br>";
    }
    if(tDPRObj.licence) {
        tExtrTstr += "Licence: " + tDPRObj.licence + "<br>";
    }
    if(tDPRObj.importance) {
        tExtrTstr += "Importance: " + tDPRObj.importance + "<br>";
    }
    if(tDPRObj.addresstype) {
        tExtrTstr += "Address Type: " + tDPRObj.addresstype + "<br>";
    }
    if(tDPRObj.name) {
        tExtrTstr += "Name: " + tDPRObj.name + "<br>";
    }
    if(tDPRObj.display_name) {
        tExtrTstr += "Display Name: " + tDPRObj.display_name + "<br>";
    }
    if(tDPRObj.address) {
        tExtrTstr += "Address: " + JSON.stringify(tDPRObj.address) + "<br>";
    }
    if(tDPRObj.extratags) {
        if(tDPRObj.extratags.phone) {
            tExtrTstr += "Phone: " + tDPRObj.extratags.phone + "<br>";
        }
        if(tDPRObj.extratags.website) {
            tExtrTstr += "Website: " + tDPRObj.extratags.website + "<br>";
        }
        if(tDPRObj.extratags.wikipedia) {
            tExtrTstr += "Wikipedia: " + tDPRObj.extratags.wikipedia + "<br>";
        }
     }

    if(tDPRObj.namedetails) {
        tExtrTstr += "Namedetails: " + JSON.stringify(tDPRObj.namedetails) + "<br>";
    }
    if(tDPRObj.boundingbox) {
        tExtrTstr += "Bounding Box: " + JSON.stringify(tDPRObj.boundingbox) + "<br>";
    }
  
    
    console.log("setPrpAdrsFlds: " + tExtrTstr);
    // set value of textarea tmp_pcontent to tExtrTstr
   //  tmp_pcontent.value = tmp_pcontent.value + tExtrTstr;
    // tinyMCE.activeEditor.setContent(tinyMCE.activeEditor.getContent() + "<br><br>" + tExtrTstr);
    JSSHOP.ui.closePopMenus();
}

function showPrpAdrsPop(theA, thePSResp, theC) {
    
	hasr = "n";
	fullstr = "";
	// alert("runPlacesSearch: " + thePSResp);
	farrToFill = JSON.parse(thePSResp);
	farrToFC = farrToFill;
	currSPRArr = null;
	currSPRArr = farrToFC;
	var len = farrToFC.length;
	console.log("farrToFC: " + JSON.stringify(farrToFC));
	var iint = 0;
	var pcid = 0;
	tstr = "";
    qloga_name = "...";
    qloga_zipcode = "...";
    qloga_street = "...";
    qloga_location = "...";
    qloga_region = "...";
    qloga_country = "...";
    qloga_loc_lat = "...";
    qloga_loc_lng = "...";
    qloga_placeid = "...";
    qloga_dadded = "...";
    theFormatedAddrssStr = "";

	
	while(iint < len) {
        tDPRObj = farrToFC[iint];

 
	if(tDPRObj.address) {
        tAOBjVobj = tDPRObj.address;
        // qloga_name.value = tDPRObj.address;
        if(tAOBjVobj["amenity"]) {
        qloga_name  = tAOBjVobj["amenity"];
        }
        
        if(tAOBjVobj["postcode"]) {
            qloga_zipcode  = tAOBjVobj["postcode"];
        }
        if(tAOBjVobj["road"]) {
            qloga_street  = tAOBjVobj["road"];
        }
        if(tAOBjVobj["city_district"]) {
            qloga_location  = tAOBjVobj["city_district"];
        }
        if(tAOBjVobj["city"]) {
            qloga_location  = tAOBjVobj["city"];
        }
        if(tAOBjVobj["county"]) {
            qloga_region  = tAOBjVobj["county"];
        }
        if(tAOBjVobj["country"]) {
            qloga_country  = tAOBjVobj["country"];
        }
         
        if(tAOBjVobj["shop"]) {
            qloga_name  = tAOBjVobj["shop"];
        } else if(tAOBjVobj["namedetails"]){
            if(tAOBjVobj["namedetails"]["name"]) {
                qloga_name  = ttAOBjVobj["namedetails"]["name"];
        
            }  
        }  
        }
        if(tDPRObj.lat) {
            qloga_loc_lat = tDPRObj.lat;
        }
        if(tDPRObj.lon) {
            qloga_loc_lng = tDPRObj.lon;
        }
        if(tDPRObj.place_id) {
            qloga_placeid = tDPRObj.place_id;
        }
         
        qloga_dadded = JSSHOP.getUnixTimeStamp();
        console.log("qlDoPDetails: " + JSON.stringify(tAOBjVobj));
        theFormatedAddrssStr = "<a href=\"javascript:setPrpAdrsFlds('" + iint + "');currSPRIdx=" + iint + ";\">";
   
        theFormatedAddrssStr += "<span class=\"txtBold\">Click to set Address</span><br>";
        theFormatedAddrssStr += qloga_street + "<br>";
        theFormatedAddrssStr += qloga_location + "<br>";
        theFormatedAddrssStr += qloga_region + "<br>";
        theFormatedAddrssStr += qloga_country + "<br>";
        theFormatedAddrssStr += qloga_zipcode + "<br>";
        theFormatedAddrssStr += "<span class=\"txtClrGrey\">" + qloga_loc_lat + " " + qloga_loc_lng + "</span><br>";
        theFormatedAddrssStr += "<span class=\"txtClrGrey\">" + qloga_placeid + "</span><br>";
        theFormatedAddrssStr += "<span class=\"txtClrGrey\">" + qloga_dadded + "</span><br>";
 
	fullstr += "<tr>";
	fullstr += "<td><a href=\"javascript:setPrpAdrsFlds('" + iint + "');currSPRIdx=" + iint + ";\"><span class=\"txtBold\">" + theFormatedAddrssStr +  "</span></a></td>";
	fullstr += "</tr>";
	iint++;
	}

 
   tTHstr = "<tr><th>Set this Address</th></tr>";

 
    // theRespDiv = document.getElementById(thePSa);
	// fullstr += thePSResp;
	// theRespDiv.innerHTML = getTblSortStr(tTHstr, fullstr);
    // JSSHOP.ui.popFillObox(getTblSortStr(tTHstr, fullstr), "&#xe5cd;", "Click To set Address", "yes", "no");
    var container = L.DomUtil.create('div'),
    startBtn = JSSHOP.ui.createLfButton('', container);
    startBtn.innerHTML = "";
    tmpSSpn = document.createElement('span');
     tmpSSpn.innerHTML = theFormatedAddrssStr;
    // tmpSSpn.innerHTML = stxt[529] + ":<br>"  + e.latlng.lat + "<br>" + e.latlng.lng + "<br>" + stxt[530];
    startBtn.appendChild(tmpSSpn); 
    // console.log(getTileURL(e.latlng.lat, e.latlng.lng, map.getZoom()))
     // alert('f: ' + e.latlng.lat + ", " + e.latlng.lng);
     // create e.latlng
     newLatLang = new L.LatLng(qloga_loc_lat, qloga_loc_lng);
L.popup()
    .setContent(container)
    .setLatLng(newLatLang)
    .openOn(map);
}

    
function doGenPEMap() {
    try {
iti = 0; 

xaCstr = document.getElementById('map').innerHTML;
  if(xaCstr.length > 4){
     
 console.log("Map Already Exists");
 ttLatStr = document.getElementById("tmp_ploclat").value;
    ttLngStr = document.getElementById("tmp_ploclng").value;
 map.flyTo([ttLatStr, ttLngStr]);
 // map.setView(new L.LatLng( ttLatStr,  ttLngStr),14);
return "OK";
 // currNavIcon = L.marker([ttLatStr, ttLngStr], options).bindPopup('<span class="txtBold txtClrRed"><a href="javascript:dropMrkr(o);">DROP</a></span>').addTo(map);
 // JSSHOP.ui.setMapMrkrs(currMapMrkrArr);
 // map.flyTo([ttLatStr, ttLngStr]);
  } else {
/*
destNum = Math.floor(Math.random() * 300);
tRAObj = xradars[destNum];
var tDestLat = tRAObj.lat;
var tDestLng = tRAObj.lng;


    var LeafIcon = L.Icon.extend({
        options: {
           
            iconSize:     [26, 26],
 
            iconAnchor:   [-1, -1],
 
            popupAnchor:  [-3, -16]
     
        }
    });


*/




    var osm = L.tileLayer.canvas('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
 
/* not includinf these for now


// var     mqi = L.tileLayer("http://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png", {subdomains: ['otile1','otile2','otile3','otile4'], attribution: '&copy; <a href="http://www.mapquest.org/">MapQuest</a>'});
    // var mqi = L.tileLayer(mbUrl, {id: 'mapbox/satellite-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr});







var googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3'],
     attribution: '&copy; <a href="http://www.google.com/maps">Google Maps</a>'

});
    // map = L.map('map').setView([qlogc_lat.value, qlogc_lng.value], 12);

*/

corner1 = L.latLng(41, -9),
corner2 = L.latLng(36, -7),
themaxbounds = L.latLngBounds(corner1, corner2);

// generate-tiles bounds=--10,42.8,-6,36.6 minzoom=14 maxzoom=14 tilesdir=d:\www\htdocs\logipal\leaflet\tiles
map = L.map('map', {
    // center: [ttLatStr, ttLngStr],
    // set zoom level
    renderer: L.canvas(),
    zoom: 10,
    minZoom: 6,
    maxZoom: 18,
    zoomControl: false,
    preferCanvas: true,
    // maxBounds: themaxbounds,
    zoomAnimation:false,
    fullscreenControl: true,
  fullscreenControlOptions: {
    position: 'topleft',
    content: '<img src="js/leaflet/images/full_screen.gif" width="95%" height="95%">'
  },
    layers: [osm]
});

// map.setView(new L.LatLng( ttLatStr,  ttLngStr),14);




    var baseMaps = {
            'OpenStreetMap': osm 


/*		
        'Goodle Streets': googleStreets,
        'Goodle Satellite': mqi,
        'Goodle Hybrid': googleHybrid,
*/
    };
/*
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
*/

    bounds = L.latLngBounds() // Instantiate LatLngBounds object

 // push currMapMrkrArr latlngs to bounds
 for (var i = 0; i < currMapMrkrArr.length; i++) {
 bounds.extend(currMapMrkrArr[i].getLatLng());
 }

    // zoom to the bounds
    map.fitBounds(bounds);
    // zoom out a little
    map.setZoom(map.getZoom() - 1);
   





// routeControl.hide();
var helloPopup = L.popup().setContent('Hello World!');
var popup = L.popup({closeOnClick: false, autoClose: false, closeButton: true, autoPan: false });
popup.className = "brdrClrHdr";


 
 

//   var routeArray = new Array();
//   routeArray = routeControl.getWaypoints();

//   alert(JSON.stringify(routeArray));



 // map.flyTo([ttLatStr, ttLngStr]);

    var container = L.DomUtil.create('div'),
        startBtn = JSSHOP.ui.createLfButton('', container);
        L.DomEvent.on(startBtn, 'click', function(e) {
            document.getElementById("tmp_ploclat").value = currStartLat;
            document.getElementById("tmp_ploclng").value = currStartLng;
           //  JSSHOP.ajax.doNuAjaxPipe("dvPSearch", "_p/osmgeo.php?qv=" + currStartLat + "," + currStartLng, getPlcesLRes);
                document.getElementById("fldChallArray").value = currStartLat + "," + currStartLng;
                qlDoNuPlSearch("fldChallArray", "dvPSearch", showPrpAdrsPop);
             // alert('f: ' + JSON.stringify(e));
            map.closePopup();
            JSSHOP.ui.closePopMenus();
            scrollToElement("tmp_ploclat");
           //  JSSHOP.ui.setCBBClickClr(document.getElementById("tmp_ploclat"),'cls_button cls_button-medium brdrClrDlg txtClrHdr',document.getElementById("tmp_ploclat").className, function(){void(0)});
        }); 
/**/
map.on('contextmenu', function(e) {
        currStartLat = e.latlng.lat;
        currStartLng = e.latlng.lng;
        document.getElementById("fldChallArray").value = currStartLat + "," + currStartLng;
        qlDoNuPlSearch("fldChallArray", "dvPSearch", showPrpAdrsPop);

        /*
        startBtn.innerHTML = "";
        tmpSSpn = document.createElement('span');
        tTextNd = document.createTextNode("Set "  + e.latlng.lat + ", " + e.latlng.lng + "<br> as start point?"); 
        
        tmpSSpn.innerHTML = stxt[529] + ":<br>"  + e.latlng.lat + "<br>" + e.latlng.lng + "<br>" + stxt[530];
        startBtn.appendChild(tmpSSpn); 
        // console.log(getTileURL(e.latlng.lat, e.latlng.lng, map.getZoom()))
         // alert('f: ' + e.latlng.lat + ", " + e.latlng.lng);
    L.popup()
        .setContent(container)
        .setLatLng(e.latlng)
        .openOn(map);
        */
});
 




        // var tInpT = document.getElementById('inpStrtLoc');
        // tInpT.value = qlogc_lat.value + ", " + qlogc_lng.value;
        // tInpT.focus();
        // routeControl.selectInputText(tInpT);
        // routeControl.spliceWaypoints(0, 1, new L.LatLng(qlogc_lat.value, qlogc_lng.value));



var mtImDSStr = "leaflet/images/tr6.gif";
var mredIcon = new LeafIcon({iconUrl: mtImDSStr});

 

var options = {
                        icon: mredIcon
                    };

JSSHOP.ui.setMapMrkrs(currMapMrkrArr);
                    // JSSHOP.ui.setMapMrkrs(currMapMrkrArr);
                // 	currNavIcon = L.marker([qlogc_lat.value, qlogc_lng.value], options).bindPopup('<span class="txtBold txtClrRed"><a href="javascript:dropMrkr(o);">DROP</a></span>').addTo(map);
             
 
                    return "OK";
// currNavIcon = L.marker([qlogc_lat.value, qlogc_lng.value]).addTo(map);
   //    setTimeout("dupe()", 1000);
// JSSHOP.loadScript("js/vrp/wasm-vrpcli.js", JSSHOP.checkLoader,"module");
  }// end of else container not null
    } catch(e) {

        return "ERR" + e
}
}
 
function popPlacesMap() {
// spinner.stop();
try {
    // currMapLatStr = tLocLat;
    // currMapLngStr = tLocLng;
    // currMapMrkrArr = new Array();
    // currMapMrkrArr.push([tLocLat, tLocLng]);



  
  
tmpLbox = document.getElementById('lightbox');
tmpLCbox = document.getElementById('dvSandMap');
tmpLbox.style.display="inline";

tmpLCbox.style.position="absolute";
tmpVheight = document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight;
if(tmpLCbox.clientHeight >= tmpVheight) {
// tmpLbox.style.position="absolute";
newel = document.createElement('div');
newel.innerHTML = "New Inserted";
tmpLCbox.appendChild(newel);
tmpLbox.style.height = tmpLCbox.clientHeight + 180;
}
tmpLCbox.style.display='block';
 

stop = getScrollTop() + 10;
tmpLCbox.style.top=stop+"px";
// scrollToElement("dvHdr");
// window.scrollTo(0,0);
// tmpLCbox.style.top="5px";
if(getViewportWidth() > 500) {}
iMdl = Math.round((getViewportWidth() - tmpLCbox.clientWidth) / 2);
tmpLCbox.style.left=iMdl+"px";

    tDGMretStr = doGenPEMap();
    if(tDGMretStr == "OK") {
        // tDGMF = window[thePLMFunc];
        // tDGMF();
    } else {
        alert("Error: " + tDGMretStr);
    }
// tmpLCbox.style.position="fixed";
tmpLCbox.width=tmpLCbox.width + 2;
setTimeout(function () {
    window.dispatchEvent(new Event('resize'));
}, 1000);
} catch(e) {
alert("popLboxMap: " + e);
}
}




function getPlaceCrdsM() {
    



    tCllLatVal = document.getElementById("tmp_ploclat").value;
    tCllLngVal = document.getElementById("tmp_ploclng").value;
    if((tCllLatVal.length > 5) && (tCllLngVal.length > 5)) {
        currMapMrkrArr = null;
        currMapMrkrArr = "";
        currMapMrkrArr = [];
        var LeafIcon = L.Icon.extend({
            options: {
               
                iconSize:     [34, 34],
        
                iconAnchor:   [-1, -1],
        
                popupAnchor:  [-3, -16]
         
            }
        });
        mtImDSStr = "js/leaflet/images/marker-icon.png";
        // mtImDSStr = dvPLogoImg.src;
        mredIcon = new LeafIcon({iconUrl: mtImDSStr});
           var options = { icon: mredIcon, closeOnClick: true };
   
        tMrkr = null;
        tMrkr = "";
        tMrkr  = L.marker([tCllLatVal, tCllLngVal], options).bindPopup('<span class="txtBold txtClrRed"><a href="javascript:map.closePopup();">' + stxt[531] + '</a></span>');
        currMapMrkrArr.push(tMrkr);
        popPlacesMap();
    } else {
        
var LeafIcon = L.Icon.extend({
    options: {
       
        iconSize:     [24, 24],

        iconAnchor:   [-1, -1],

        popupAnchor:  [-3, -16]
 
    }
});


    tRetErrSTr = "noQvalue";
    tFullRstr = "--";
    tStreetVal = document.getElementById("tmp_pstreet").value;
    tLocVal = document.getElementById("tmp_state").value;
    tZipVal = document.getElementById("tmp_pzipcode").value;
    
    // if(tStreetVal.length < 2){ 
      //   tRetErrSTr = stxt[518];
        // tFullRstr += "<br>- " + tRetErrSTr;
   //  }
  
    if(tFullRstr.length > 5) {
        tClosePopSTr =  "<div onclick=\"JSSHOP.ui.closeLbox();\" class=\"slmtable txtClrRed txtBold brdrClrRed crsrPointer\" style=\"float:right\">" + stxt[804] + "</div>";

        tAFullRstr = tClosePopSTr + stxt[532] + "<br>" + tFullRstr;

        JSSHOP.ui.popAndFillLbox(tAFullRstr);
       return;
    } else {
    tSrchIval = tLocVal;
    //qlDoNuPlSearch("dvPSearch", "dvPSearch", "qlShowPlacesRes");
    // JSSHOP.ajax.doNuAjaxPipe("dvPSearch", "_p/osmgeo.php?qv=" + encodeURI(tSrchIval), getPlcesLRes);
    document.getElementById("fldChallArray").value = tSrchIval;
    qlDoNuPlSearch("fldChallArray", "dvPSearch", showPrpAdrsPop);

    }
    }
}