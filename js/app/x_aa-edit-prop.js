currIContent = "y"
var euiFFObjArr = null;
var euiFFObjArr = [];
var tmpOldFFvals = null;
var tmpOldFFvals = {};
var tmpSvBtnObj = null;
var tmpPropInfoObj = null;
var tmpPropInfoObj = {};
var tmpPropImgsArr = null;
var tmpPropImgsArr = [];
var tmpPrpMediaObj = null;
var tmpPrpMediaObj = {};
var tmpPrpLinksArr = null;
var tmpPrpLinksArr = [];
var tmpMapUmrkdObj = null;
var tmpMapUmrkdObj = {};
var tmpSVpos = "";
var tmpSVposLat = "";
var tmpSVposLng = "";
var tmpSVheading = "";
var tmpSVpitch = "";
var tmpSVurl = "noQvalue";
var tmpSVzoom = "";
var tmpSaveBtnID = null;
var gpmap = null;
var currPgTitle = stxt[985];
var threedmap = null;
var curr3DMarker = null;
var nuMediaRecorder = null;
var nuRecordedChunks = [];

var tmpMFarrObj = null;
var tmpMFarrObj = {};

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
var isThreeDrun = "no";
// var currGglSVloaded = "no";
// make AdvancedMarkerElement available globally
var AdvancedMarkerElement, Marker3DElement, PinElement, interactiveMarker, DrawingLibrary;

var circles = [];
var rectangles = [];
var polygons = [];
var polylines = [];
var markers = [];
var currthreeDstr = "";
var tmpThreeDLat, tmpThreeDLng = 0, tmpThreeDAlt = 0;

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

 
        selctedLang = document.getElementById("pd_prptlng").value;
    tAllButSlctdObj = {};
    for(var key in tPrpLngs) {
        if(key != selctedLang) {
            tAllButSlctdObj[key] = tPrpLngs[key];
        }
    }
    tLangDDObj = {};
    tLangDDObj["ddtype"] = "noQvalue";
    tLangDDObj["fld"] = "inpTgtLang";
    tLangDDObj["lbl"] =  stxt[629]; // select language
    tLangDDObj["val"] = usrlang;
    tLangDDObj["kvpObj"] = tAllButSlctdObj;
    tLangDDObj["cb"] = "doTgtLangSlct";
    tLangDDObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
    tLangDDObj["lblcls"] = "txtSmall";
    tLangDDObj["valcls"] = "txtSmall";
    tLangDDObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
    tLangDDObj["horvert"] = "vertical";
    tLangDDObj["icn"] = "noQvalue";
    tLangDDObj["kvIcnsObj"] = {};
    // all but selected language icons
    for(var key in tAllButSlctdObj) {
        tLangDDObj["kvIcnsObj"][key] = "&#xe5cd;";
       tLangDDObj["val"] = key;
    }
 


    tLangDDStr = JSSHOP.ui.getNuBSdropDstr(tLangDDObj);
    document.getElementById("dvTgtLangSlct").innerHTML = tLangDDStr;
 


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
    // set cursor on tmp_pd_prpdesc
    //document.getElementById("tmp_pd_prpdesc").focus();
     


    } catch(e) {
    alert("popLangTrnsBx: " + e);
    }
    }


    

function doTransPost() {
     BaseUrl = "http://127.0.0.1:5000";
 
        var request = new XMLHttpRequest();
        tFullTrnsStr = "";
        tDTrnsTtl = document.getElementById("tmp_pd_prptitle").value;
        // tDTrnsDsc = document.getElementById("tmp_pd_prpdesc").value;
        tDTrnsDsc =  document.getElementById("tmp_pd_prpdesc_ifr").contentWindow.document.body.innerHTML;
        tTransStrArr = [];
        tTransStrArr.push(tDTrnsTtl);
        tTransStrArr.push(tDTrnsDsc);
        // tDTrnsDsc = tinyMCE.activeEditor.getContent();
        tDTrnsLngStr = tDTrnsTtl + " qqq " + tDTrnsDsc;
        console.log("doTransPost.tDTrnsLngStr: " + tDTrnsLngStr);
        var data = new FormData();
        // data.append("q", JSON.stringify(tTransStrArr));
        data.append("q", tDTrnsLngStr);
        data.append("source", tPrpLngCds[document.getElementById("pd_prptlng").value]["trnscode"]);
        data.append("target", tPrpLngCds[document.getElementById("inpTgtLang").value]["trnscode"]);
        data.append("format", "html");
        // data.append("alternatives", 3);
        data.append("api_key", localStorage.getItem("api_key") || "");
        // if (apiSecret) data.append("secret", atob(self.apiSecret));

        request.open('POST', BaseUrl + '/translate', true);

        request.onload = function() {
            try{
                
 
                

                var res = JSON.parse(request.response);
                // Success!
                if (res.translatedText !== undefined){
                    ttranslatedText = res.translatedText;
                    console.log("doTransPost: " + ttranslatedText); 
                    // escape the text to be parsed as JSON
                     // ttranslatedText = ttranslatedText.replace(/\\/g, "\\\\").replace(/\"/g, "\\\"").replace(/\r\n/g, "\\r\\n").replace(/\n/g, "\\n");
            
   
                    loadingTranslation = false;
                    output = JSON.stringify(res);
                    console.log("doTransPost: " + output);
                    tTransArr = [];
                    tTransArr = ttranslatedText.split("qqq");
                    // tTransArr = JSON.parse(ttranslatedText);
                    console.log("doTransPost.title: " + tTransArr[0]);
                    console.log("doTransPost.desc: " + tTransArr[1]);
                    // JSSHOP.ui.doGenBSDDcb('noQvalue','pd_prptlng', 'spa_spa','Spanish','doLangSlct');
                    JSSHOP.ui.doGenBSDDcb('noQvalue','pd_prptlng', document.getElementById("inpTgtLang").value, tPrpLngs[document.getElementById("inpTgtLang").value], 'donada');
                    document.getElementById("tmp_pd_prptitle").value = tTransArr[0];
                    document.getElementById("tmp_pd_prpdesc").value = tTransArr[1];
                    tinyMCE.get('tmp_pd_prpdesc').setContent(tTransArr[1]);
                    tinyMCE.activeEditor.setContent(tTransArr[1]);
                // set the value of the pd_prpdesc field to the selected language
                    closeLangTrnsBx();
                    // focus on the dvLangSlct 
                    document.getElementById("dvLangSlct").focus();
                    scrollToElement("dvLangSlct");
                 } else{
                    throw new Error(res.error || "Unknown error");
                }
            } catch (e) {
                error = e.message;
                loadingTranslation = false;
                console.error("doTransPost.Error: " + e);
                alert("libreTranslate.Error: " + e);
            }
        };

        request.onerror = function() {
            error = "Cannot load /translate";
            loadingTranslation = false;
            alert("libreTranslate.Error: " + error);

        };

        request.send(data);
    }

function doGglTansPost() {
    // var apiKey = localStorage.getItem("google_api_key");
    var apiKey = document.getElementById("inpGglTransMgc").value;
    // if cookie gglTrnsAkey exists, use it and set inpGglTransMgc value else use the inpGglTransMgc value and set gglTrnsAkey cookie
    if(JSSHOP.cookies.getCookie("gglTrnsAkey") !== null) {
        apiKey = JSSHOP.cookies.getCookie("gglTrnsAkey");
        document.getElementById("inpGglTransMgc").value = apiKey;
    } else {
            if (!apiKey || apiKey == "API Key Here" || apiKey.trim() === "") {
        alert("Please request API key.");
        
    } else {
        JSSHOP.cookies.setCookie("gglTrnsAkey", apiKey, 30);
        }
    }

 
    tSbtnObj = document.getElementById("btnDoTrans");
    tSbtnObj.innerHTML = "";
    tSbtnObj.disabled=true;
    doSpinSet(tSbtnObj.id, "small", null);
    var tDTrnsTtl = document.getElementById("tmp_pd_prptitle").value;
    var tDTrnsDsc = "";
    if(document.getElementById("tmp_pd_prpdesc_ifr")) {
        tDTrnsDsc = document.getElementById("tmp_pd_prpdesc_ifr").contentWindow.document.body.innerHTML;
    } else {
        tDTrnsDsc = document.getElementById("tmp_pd_prpdesc").value;
    }
    
    var sourceLang = tPrpLngCds[document.getElementById("pd_prptlng").value]["trnscode"];
    var targetLang = tPrpLngCds[document.getElementById("inpTgtLang").value]["trnscode"];

    var url = "https://translation.googleapis.com/language/translate/v2?key=" + apiKey;
    
    var requestData = {
        q: [tDTrnsTtl, tDTrnsDsc],
        target: targetLang,
        source: sourceLang,
        format: "html"
    };

    var request = new XMLHttpRequest();
    request.open('POST', url, true);
    request.setRequestHeader('Content-Type', 'application/json');

    request.onload = function() {
        try {
            var res = JSON.parse(request.response);
            if (res.data && res.data.translations) {
                var translations = res.data.translations;
                var translatedTitle = translations[0].translatedText;
                var translatedDesc = translations[1].translatedText;

                console.log("doGglTansPost.title: " + translatedTitle);
                console.log("doGglTansPost.desc: " + translatedDesc);

                JSSHOP.ui.doGenBSDDcb('noQvalue','pd_prptlng', document.getElementById("inpTgtLang").value, tPrpLngs[document.getElementById("inpTgtLang").value], 'donada');
                
                document.getElementById("tmp_pd_prptitle").value = translatedTitle;
                document.getElementById("tmp_pd_prpdesc").value = translatedDesc;
                
                if(tinyMCE && tinyMCE.get('tmp_pd_prpdesc')) {
                    tinyMCE.get('tmp_pd_prpdesc').setContent(translatedDesc);
                }
                if(tinyMCE && tinyMCE.activeEditor) {
                    tinyMCE.activeEditor.setContent(translatedDesc);
                }
                tSbtnObj = document.getElementById("btnDoTrans");
                tSbtnObj.innerHTML = stxt[630];
                tSbtnObj.disabled=false;
                closeLangTrnsBx();
                document.getElementById("dvLangSlct").focus();
                scrollToElement("dvLangSlct");

            } else {
                throw new Error(res.error ? res.error.message : "Unknown error");
                                tSbtnObj = document.getElementById("btnDoTrans");
                tSbtnObj.innerHTML = stxt[630];
                tSbtnObj.disabled=false;
        
                document.getElementById("dvLangSlct").focus();
                scrollToElement("dvLangSlct");
            }
        } catch (e) {
            console.error("doGglTansPost.Error: " + e);
            alert("Google Translate Error: " + e);
                            tSbtnObj = document.getElementById("btnDoTrans");
                tSbtnObj.innerHTML = stxt[630];
                tSbtnObj.disabled=false;
           
        }
    };
    
    request.onerror = function() {
        alert("Network Error");
                            tSbtnObj = document.getElementById("btnDoTrans");
                tSbtnObj.innerHTML = stxt[630];
                tSbtnObj.disabled=false;
      
    };

    request.send(JSON.stringify(requestData));
}



 

function setPrpDescLngs(rsplA, rsplB, rsplC) {
    console.log("setPrpDescLngs: " + rsplA + " " + rsplB + " " + rsplC);
    tmpPrpLngArr = null;
    tmpPrpLngArr = "";
    tmpPrpLngArr = [];
    tmpPrpLngObj = null;
    tmpPrpLngObj = "";
    tmpPrpLngObj = {};
    tmpPrpLngArr = JSON.parse(rsplB);
    var len = tmpPrpLngArr.length;
    iint = 0;
    // loop through to fill the tmpPrpLngObj object with the values from the tmpPrpLngArr array 
    for (iint = 0; iint < len; iint++) {
        tmpPobj = tmpPrpLngArr[iint];
        tmpPrpLngObj[tmpPobj["pd_prptlng"]] = tmpPobj;
    }
    theLSaveBtn = document.getElementById("btnDEsave");
    JSSHOP.ui.setCBBClickClr(theLSaveBtn,'cls_button cls_button-medium  bkgdClrDGreen txtClrWhite','cls_button cls_button-medium  bkgdClrHdr txtClrWhite', function(){theLSaveBtn.innerHTML=stxt[21];theLSaveBtn.disabled=false;});


}
 
function getPrpDescLangs(thCBText) {
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

function savePDescTrans(theSPDBtn) {
    tmpSaveBtnID = theSPDBtn.id;
    tmpSaveBtnObj = document.getElementById(tmpSaveBtnID);
    theSPDBtn.innerHTML = "";
    theSPDBtn.disabled=true;
    doSpinSet(theSPDBtn.id, "small", null);

     // JSSHOP.shared.getDynFrmVals(document["propdescs"], "tmp_");
tPureDescStrng = tinyMCE.activeEditor.getContent();
// strip html tags from tPureDescStrng
// tPurrDscStrng = tPureDescStrng.replace(/<\/?[^>]+(>|$)/g, "");
tDescLZd = LZString.compressToEncodedURIComponent(tPureDescStrng);   
    // tDescLZd = LZString.compressToEncodedURIComponent(document.getElementById("tmp_pd_prpdesc").value);
    document.getElementById("pd_prpdesc").value = tDescLZd;
    tTitleLZd = LZString.compressToEncodedURIComponent(document.getElementById("tmp_pd_prptitle").value);
    document.getElementById("pd_prptitle").value = tTitleLZd;
    document.getElementById("dvPrpDTtl").value = tTitleLZd;
    // get the values from the textareas and set them to the tmpPrpLngObj object
    // tmpPrpLngObj["pd_prpid"] = currUrlArr.prpid;
    // tmpPrpLngObj["pd_prptlng"] = document.getElementById("pd_prptlng").value;
    // tmpPrpLngObj["pd_prptype"] = document.getElementById("pd_prptype").value;
    tmpDOLP = null;
    tmpDOLP = {};
    tmpDOLP["knvp"] = JSSHOP.shared.getFrmVals(document["propdescs"], "nada");
 
    // check if tmpPrpLngObj["pd_prpid"] is not null
    if(tmpPrpLngObj[document.getElementById("pd_prptlng").value] != null) {
        // update the record
        tmpDOLP["ws"] = "where pd_prpid=? and pd_prptlng=?";
        tmpDOLP["wa"] = [currUrlArr.prpid, document.getElementById("pd_prptlng").value];
        oi = getNuDBFnvp("propdescs", 7, null, tmpDOLP);
    } else {
        // insert the record
        oi = getNuDBFnvp("propdescs", 6, null, tmpDOLP);
    }
    // close the lightbox
    JSSHOP.ui.closeLbox();
    // doQComm(oi["rq"], null, "getPrpDescLangs");
    JSSHOP.ajax.doNuAjaxPost(oi["rq"], getPrpDescLangs);

}

function doLangSlct(dlsA, dlsB, dlsC) {
    console.log("doLangSlct: " + dlsA + " " + dlsB + " " + dlsC);
    tSlecyedLang = dlsC;
    if(tmpPrpLngObj[dlsC] != null) {
        tUNLZd = LZString.decompressFromEncodedURIComponent(tmpPrpLngObj[dlsC]["pd_prpdesc"]);
        console.log("doLangSlct.tUNLZd: " + tUNLZd);
        // document.getElementById("tmp_pd_prpdesc").value = tUNLZd;
        tUNLZdttl = LZString.decompressFromEncodedURIComponent(tmpPrpLngObj[dlsC]["pd_prptitle"]);
         document.getElementById("tmp_pd_prptitle").value = tUNLZdttl;
       //  tinyMCE.activeEditor.setContent(tUNLZd);
        document.getElementById("tmp_pd_prpdesc").value = tUNLZd;
    // focus on the textarea
        document.getElementById("tmp_pd_prpdesc").focus();
        // set the value of the pd_prptlng field to the selected language
         tinyMCE.activeEditor.setContent(tUNLZd);

    }
}

function doTgtLangSlct(dlsA, dlsB, dlsC) {
    console.log("doTgtLangSlct: " + dlsA + " " + dlsB + " " + dlsC);
    tSlecyedLang = dlsC;
    // set the value of the pd_prptlng field to the selected language
    document.getElementById("inpTgtLang").value = dlsC;
}

function doPropPrvSlct(dlsA, dlsB, dlsC) {
    console.log("doPropPrvSlct: " + dlsA + " " + dlsB + " " + dlsC);
    tSlctdPrv = dlsC;
    procNuUIitem("property","pprf_prvcy",currUrlArr.prpid,tSlctdPrv,"doPrpSType");
 
}





var fnshProdMDel = function(aa,bb,cc) { 
    // alert(bb);
    getPropImgs();
    JSSHOP.ui.closeLbox();
    
    };


 





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


 
            function getCurrSVImgUrl(tIUwidth, tIUheight) {
                // tmpSVpos = panorama.getPosition();
                console.log("getCurrSVImgUrl.pos: " + tmpSVposLat + " " + tmpSVposLng);
                console.log("getCurrSVImgUrl.pov: " + tmpSVheading + " " + tmpSVpitch);
                console.log("getCurrSVImgUrl.zoom: " + tmpSVzoom);
                tmpSVurl = "https://maps.googleapis.com/maps/api/streetview?size=" + tIUwidth + "x" + tIUheight + "&location=" + tmpSVposLat + "," + tmpSVposLng + "&heading=" + tmpSVheading + "&pitch=" + tmpSVpitch + "&zoom=" + tmpSVzoom + "&key=" + gglSKey;
                return tmpSVurl;
            }
 
            function showSVImages(alen,b,c) {
                tSVImgStr = "";
                document.getElementById("dvSVimgs").innerHTML = "";
                console.log("showSVImages: " + alen + " " + b + " " + c);
                if(b.indexOf("_id") != -1) {
                    tSSVIArr = JSON.parse(b);
                    var len = tSSVIArr.length;
                    iint = 0;
                    while (iint < alen) {
                        tmpPrpMediaObj["prp" + tSSVIArr[iint]["_id"]] = tSSVIArr[iint];
                        tNrmlImg = tSSVIArr[iint]["m_file"];
                        tLZuncompD = LZString.decompressFromEncodedURIComponent(tNrmlImg);
                        tThumbImg = tSSVIArr[iint]["m_file_thumb"];
                        tLZuncomp = LZString.decompressFromEncodedURIComponent(tThumbImg);
                        //  			tstr += "<img src=\"images/property/" + tAiretArr[iint]["m_file_thumb"] + "\" class=\"icnmedbtn slmtable\" onclick=\"javascript:JSSHOP.ui.popAndFillLbox(getPropIEditDv('" + tAiretArr[iint]["_id"] + "','" + tAiretArr[iint]["m_file"] + "'));\">";

                       //  tSVImgStr += "<img src=\"" + tLZuncomp + "\" class=\"icnmedbtn slmtable\" onclick=\"JSSHOP.ui.popAndFillLbox(getPrdImgEditDv('" + tAiretArr[iint]["_id"] + "','" + tThumbImg + "'));\">";
                        tSVImgStr += "<img src=\"" + tLZuncomp + "\" class=\"icnmedbtn slmtable  crsrPointer\" onclick=\"javascript:doNuStrtVwPop('" + tLZuncomp + "','" + tSSVIArr[iint]["_id"] + "');\">";
                        iint++;
                    }
                                        document.getElementById("dvSVimgs").innerHTML = tSVImgStr;

  

                }
                                  if(tSVImgStr == "") {
        document.getElementById("dvSVimgs").innerHTML = "<div class=\"form-control txtClrRed slmtable crsrPointer\" onclick=\"javascript:doNuStrtVwPop('noQvalue','noQvalue');\"><u>Create New Street View</u></div>";
    }
            }

            function getSVImages() {
   document.getElementById("dvSVimgs").innerHTML = "<img src=\"images/misc/loading.gif\" class=\"icnmedbtn slmtable\">";
    tmpDOs = null;
    tmpDOs = {};
    tmpDOs["ws"] = "where m_pid=? and m_rtype=? and m_catid=?";
    tmpDOs["wa"] = [prpid, 5, 20];
    // tmpDOs["l"] = 1;
    // tmpDOs["o"] = "m_vala desc";
    oi = getNuDBFnvp("qmedia", 5, null, tmpDOs);
    doQComm(oi["rq"], 1, "showSVImages");

    };


function fnishSVImgAdd(aa,bb,cc) {
    JSSHOP.ui.closeLbox();
    // getSVImages();
    tmpDOs = null;
    tmpDOs = {};
    tmpDOs["ws"] = "where m_pid=? and m_rtype=? and m_catid=?";
    tmpDOs["wa"] = [prpid, 5, 20];
    // tmpDOs["l"] = 1;
    // tmpDOs["o"] = "m_vala desc";
    oi = getNuDBFnvp("qmedia", 5, null, tmpDOs);
    doQComm(oi["rq"], 1, "showSVImages");

    };

            function saveCurrSVImgUrl(tSVIid) {

                tSVIurl = getCurrSVImgUrl("240", "180");
                tSVIthmburl = getCurrSVImgUrl("100", "80");
                tmpSVurl = LZString.compressToEncodedURIComponent(tSVIurl);
                tmpSVthmburl = LZString.compressToEncodedURIComponent(tSVIthmburl);
                JSSHOP.shared.setFrmFieldVal("qmedia", "m_file", tmpSVurl);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_file_thumb", tmpSVthmburl);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_coid", prpid);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_uid", quid);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_pid", prpid);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_dadded", JSSHOP.getUnixTimeStamp());
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_catid", 20);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_title", document.getElementById("tmp_m_title").value);
        tmpDOs = null;
        tmpDOs = {};
        if(tSVIid == "noQvalue") {
        tmpDOs["knvp"] = JSSHOP.shared.getFrmVals(document["qmedia"], "nada");
        oiaqsw = getNuDBFnvp("qmedia", 6, null, tmpDOs);
        } else {
            JSSHOP.shared.setFrmFieldVal("qmedia", "_id", tSVIid);
            tmpDOs["ws"] = "where _id=?";
            tmpDOs["wa"] = [tSVIid];
            tmpDOs["knvp"] = JSSHOP.shared.getFrmVals(document["qmedia"], "nada");
            oiaqsw = getNuDBFnvp("qmedia", 7, null, tmpDOs);
            }
            doQComm(oiaqsw["rq"], null, "fnishSVImgAdd");
        }





            var doNuStrtVwPop = function(tSVpurl, tSVIid) {

                // tSVpurl: https://maps.googleapis.com/maps/api/streetview?size=100x80&location=37.16132136735227,-3.593796975507918&heading=99.26916644765576&pitch=-5.816216696799415&zoom=4&key=
                // tLocLat = document.getElementById("tmp_ploclat").value;
                // tLocLng = document.getElementById("tmp_ploclng").value;
                    if(tSVIid == "noQvalue") {
        tPrpTDMTitle = "Panorama View";
    } else {
        tPrpTDMTitle = tmpPrpMediaObj["prp" + tSVIid]["m_title"];
    }
                if(tSVpurl.indexOf("?") != -1) {
                    strTurl = strCurl.substring(strCurl.indexOf('?') + 1);
               
                    } else {
                    tLocLat = document.getElementById("tmp_ploclat").value;
                    tLocLng = document.getElementById("tmp_ploclng").value;
                    tSVzoom = 1.2;
                    tSVheading = 0;
                    tSVpitch = 0;
                    // tSVIid = "noQvalue";
                    tSVpurl = "https://maps.googleapis.com/maps/api/streetview?size=100x80&location=" + tLocLat + "," + tLocLng + "&heading=" + tSVheading + "&pitch=" + tSVpitch + "&zoom=" + tSVzoom + "&key=" + gglSKey;
                     
                    }
                    TsvuOBJ = JSSHOP.shared.urlToArray(tSVpurl);
                    tLocLat = TsvuOBJ["location"].split(",")[0];
                    tLocLng = TsvuOBJ["location"].split(",")[1];
                    tSVzoom = TsvuOBJ["zoom"];
                    tSVheading = TsvuOBJ["heading"];
                    tSVpitch = TsvuOBJ["pitch"];
                    tSVpopStr = "";
     tmpRetStr = "<div class=\"txtClrHdr txtSmall\">";
tmpRetStr += "<span class=\"txtClrHdr\" id=\"lbl_m_title\">" + stxt[996] + "</span>";
tmpRetStr += "<table><tr><td>";
tmpRetStr += "<input type=\"text\" id=\"tmp_m_title\" name=\"tmp_m_title\" value=\"" + tPrpTDMTitle + "\" class=\"form-control txtSmall txtClrHdr\" style=\"width:100%;\">";
tmpRetStr += "</td></tr><tr><td>";
tmpRetStr += "</td></tr></table>";
tmpRetStr += "</div>";
tSVpopStr += tmpRetStr;

            tSVpopStr += "<div id=\"dvStrtVwPop\" style=\"width:100%;height:100%;min-height:300px;\"><img src=\"images/misc/loading.gif\"></div>";
  
            var t3DpopStr = "";
            t3DpopStr += "<div class=\"dvTxtBtns\">";
            t3DpopStr += "<table><tr><td>";
            t3DpopStr += "<input id=\"btnSVadd\" type=\"button\" class=\"cls_button cls_button-small txtSmall bkgdClrHdr txtClrWhite\" value=\"Save\" onclick=\"javascript:saveCurrSVImgUrl('" + tSVIid + "');\">";
            t3DpopStr += "</td><td>";
            if(tSVIid == "noQvalue") {
                tdnda = "noQvalue";
                            t3DpopStr += "<input id=\"btnSVdel\" type=\"button\" class=\"cls_button cls_button-small txtSmall bkgdClrDlg txtClrNrml\" value=\"Cancel\" onclick=\"javascript:JSSHOP.ui.closeLbox();\">";

            } else {
            t3DpopStr += "<input id=\"btnSVdel\" type=\"button\" class=\"cls_button cls_button-small txtSmall bkgdClrDlg txtClrNrml\" value=\"Delete\" onclick=\"javascript:doNuPrdMDelete('" + tSVIid + "','getSVImages');\">";
            }
            t3DpopStr += "</td></tr></table>";
            t3DpopStr += "</div>";
            tSVpopStr += t3DpopStr;
            JSSHOP.ui.popAndFillLbox(tSVpopStr);

        showNuStrtVwPop(TsvuOBJ, tSVIid);
}

            
 


/* 3d maps in experimental phase
* refrence: https://developers.google.com/maps/documentation/javascript/examples/marker-simple
* refrence: https://developers.google.com/maps/documentation/javascript/3d-maps-getting-started
  <body>
    <gmp-map-3d mode="hybrid" center="37.841157, -122.551679" range="2000" tilt="75" heading="330"></gmp-map-3d>
    <script async src="https://maps.googleapis.com/maps/api/js?key=<YOUR_KEY>&v=alpha&libraries=maps3d"></script>
  </body>
  */
 var updtCurr3DImgUrl = function(ttPMId) {
 
    tUTDimgUrl = getCurr3DImgUrl("240", "180");
    tFUTDimgUrl = LZString.compressToEncodedURIComponent(tUTDimgUrl);
        tTimeRand = quid + "_" + Math.floor(Math.random() * 1000000);
    tFAUstr  = tTimeRand + ":" + tFUTDimgUrl;
    JSSHOP.shared.setFrmFieldVal("qmedia", "_id", ttPMId);
    JSSHOP.shared.setFrmFieldVal("qmedia", "m_file", tFUTDimgUrl);
    JSSHOP.shared.setFrmFieldVal("qmedia", "m_file_thumb", tFUTDimgUrl);
    JSSHOP.shared.setFrmFieldVal("qmedia", "m_coid", prpid);
    JSSHOP.shared.setFrmFieldVal("qmedia", "m_uid", quid);
    JSSHOP.shared.setFrmFieldVal("qmedia", "m_pid", prpid);
    JSSHOP.shared.setFrmFieldVal("qmedia", "m_dadded", JSSHOP.getUnixTimeStamp());
    JSSHOP.shared.setFrmFieldVal("qmedia", "m_catid", 30);
    JSSHOP.shared.setFrmFieldVal("qmedia", "m_title", document.getElementById("tmp_m_title").value);
    JSSHOP.shared.setFrmFieldVal("qmedia", "m_vala", tTimeRand);
    tmpADOs = null;
    tmpADOs = {};
     tmpADOs["knvp"] = JSSHOP.shared.getFrmVals(document["qmedia"], "nada");

    if(ttPMId == "noQvalue") {
             oaqi = getNuDBFnvp("qmedia", 6, null, tmpADOs);
    } else {
        tmpADOs["ws"] = "where _id=?";
        tmpADOs["wa"] = [ttPMId];
        oaqi = getNuDBFnvp("qmedia", 7, null, tmpADOs);
    }
        doQComm(oaqi["rq"], tFAUstr     , "fnish3DImgAdd");
    };


  var saveCurr3DImgUrl = function() {
   //  t3DImgUrlStr = tmpThreeDLat + "|" + tmpThreeDLng + "|" + tmpThreeDAlt;
    tA3DImgUrlStr = getCurr3DImgUrl("240", "180");
  
    console.log("saveCurr3DImgUrl.tA3DImgUrlStr: " + tA3DImgUrlStr);
    t3DImgUrlStr = LZString.compressToEncodedURIComponent(tA3DImgUrlStr);
    tTimeRand = quid + "_" + Math.floor(Math.random() * 1000000);
    tFAUstr  = tTimeRand + ":" + t3DImgUrlStr;
    JSSHOP.shared.setFrmFieldVal("qmedia", "m_file", t3DImgUrlStr);
    JSSHOP.shared.setFrmFieldVal("qmedia", "m_file_thumb", t3DImgUrlStr);
    JSSHOP.shared.setFrmFieldVal("qmedia", "m_coid", prpid);
    JSSHOP.shared.setFrmFieldVal("qmedia", "m_uid", quid);
    JSSHOP.shared.setFrmFieldVal("qmedia", "m_pid", prpid);
    JSSHOP.shared.setFrmFieldVal("qmedia", "m_dadded", JSSHOP.getUnixTimeStamp());
    JSSHOP.shared.setFrmFieldVal("qmedia", "m_catid", 30);
    JSSHOP.shared.setFrmFieldVal("qmedia", "m_vala", tTimeRand);
    tmpDOs = null;
    tmpDOs = {};
    tmpDOs["knvp"] = JSSHOP.shared.getFrmVals(document["qmedia"], "nada");
    oi = getNuDBFnvp("qmedia", 6, null, tmpDOs);
    doQComm(oi["rq"], tFAUstr, "fnish3DImgAdd");
    };


function fnish3DImgAdd(aaDI,bbDI,ccDI) {
    JSSHOP.ui.closeLbox();
            console.log("fnish3DImgAdd: " + aaDI + " " + bbDI + " " + ccDI);
            tSplitStr = aaDI.split(":");
            tFileName = tSplitStr[0];
            tFileUrl = tSplitStr[1];
              JSSHOP.ajax.doNuAjaxPipe(aaDI, "_p/file_imgurl.php?wu=" + tFileUrl + "&in=" + tFileName, get3DImages);

 
    /*
    tmpDOs = null;
    tmpDOs = {};
    tmpDOs["ws"] = "where m_pid=? and m_rtype=? and m_catid=?";
    tmpDOs["wa"] = [prpid, 5, 30];
    // tmpDOs["o"] = "m_vala desc";
    oi = getNuDBFnvp("qmedia", 5, null, tmpDOs);
    doQComm(oi["rq"], null, "show3DImages");
    */
    };
 
function getCurr3DImgUrl(tIUwidth, tIUheight) {
    console.log("getCurr3DImgUrl.threedmap.attributes.tilt: " + threedmap.getAttribute("tilt"));
    console.log("getCurr3DImgUrl.threedmap.attributes.range: " + threedmap.getAttribute("range"));
    console.log("getCurr3DImgUrl.threedmap.attributes.center: " + threedmap.getAttribute("center"));
    tCntrArr = threedmap.getAttribute("center").split(",");
    tCntrMapLat = tCntrArr[0];
    tCntrMapLng = tCntrArr[1];
    tCntrMapAlt = tCntrArr[2];
    tZmLvl = threedmap.getAttribute("range");
    tMpType = threedmap.getAttribute("mode");
 // m/maps/api/streetview?size=100x80&location=41.231464093444536,-8.527187370531351&heading=107.1386319707464&pitch=-2.544154706896819&zoom=&key=AIzaSyAiBR8BEPj2YCepKplisQKK709r1TI48Vo&iid=34
   t3DImgUstr = "https://maps.googleapis.com/maps/api/staticmap?size=" + tIUwidth + "x" + tIUheight + "&center=" + tCntrMapLat + "," + tCntrMapLng +  "&key=" + gglSKey + "&heading=" + threedmap.getAttribute("heading") + "&tilt=" + threedmap.getAttribute("tilt") + "&iid=" + JSSHOP.shared.getFrmFieldVal("qmedia", "_id") + "&altitude=" + tCntrMapAlt + "&zoom=16&maptype=satellite&range=" + tZmLvl;
    // t3DImgUstr = "https://maps.googleapis.com/maps/api/staticmap?size=" + tIUwidth + "x" + tIUheight + "&center=" + tCntrMapLat + "," + tCntrMapLng +  "&key=" + gglSKey + "&heading=" + threedmap.getAttribute("heading") + "&tilt=" + threedmap.getAttribute("tilt") + "&iid=" + JSSHOP.shared.getFrmFieldVal("qmedia", "_id") + "&altitude=" + tCntrMapAlt + "&zoom=16&maptype=satellite&key=" + gglSKey;    

    console.log("getCurr3DImgUrl: " + t3DImgUstr);
     
    return t3DImgUstr;
    }

 
function show3DImages(tTDIlen,tstfib,c) {
    t3DImgStr = "";
    console.log("show3DImages.tTDIlen: " + tTDIlen);
    document.getElementById("dv3Dimgs").innerHTML = "";
    if(tstfib.indexOf("_id") != -1) {
        tSTDAarr = JSON.parse(tstfib);
        var tTDIlen = tSTDAarr.length;
        iint = 0;
        while (iint < tTDIlen) {
            tmpPrpMediaObj["prp" + tSTDAarr[iint]["_id"]] = {};
            tmpPrpMediaObj["prp" + tSTDAarr[iint]["_id"]] = tSTDAarr[iint];
            tNrmlImg = tSTDAarr[iint]["m_file"];
            // tLZuncompD = LZString.decompressFromEncodedURIComponent(tNrmlImg);
            tThumbImg = tSTDAarr[iint]["m_file_thumb"];
             
            tAVImgUstr = LZString.decompressFromEncodedURIComponent(tThumbImg);
           
            t3DImgStr += "<img src=\"" + tAVImgUstr + "\" class=\"icnmedbtn slmtable crsrPointer\" onclick=\"javascript:doNuThreeDPop(this.src," + tSTDAarr[iint]["_id"] + ");\">";
            iint++;
        }
        document.getElementById("dv3Dimgs").innerHTML = t3DImgStr;
    }
    if(t3DImgStr == "") {
        document.getElementById("dv3Dimgs").innerHTML = "<div class=\"form-control txtClrRed slmtable crsrPointer\" onclick=\"javascript:doNuThreeDPop('noQvalue','noQvalue');\"><u>Create New 3D Animation</u></div>";
    }
}
function get3DImages() {
    tmpDOs = null;
    tmpDOs = {};
    tmpDOs["ws"] = "where m_pid=? and m_rtype=? and m_catid=?";
    tmpDOs["wa"] = [prpid, 5, 30];
    // tmpDOs["o"] = "m_vala desc";
    oi = getNuDBFnvp("qmedia", 5, null, tmpDOs);
    doQComm(oi["rq"], "1", "show3DImages");
    // doQComm(oi["rq"], null, "show3DImages");
    // doQComm(oi["rq"], null, "show3DImages");
}

function doNuChkdPrpMImg(chkObj, tPrpMSource, tPrpMtytpe) {
    console.log("doNuChkdPrpMImg.chkObj.checked: " + chkObj.checked + " " + tPrpMSource + " " + tPrpMtytpe);
    if(chkObj.checked == true) {
        document.getElementById("m_file").value = "updt3d_" + tPrpMSource;
         doPrpCkckdIMain();
        // updtCurr3DImgUrl(JSSHOP.shared.getFrmFieldVal("qmedia", "_id"));
    } else {
        console.log("doNuChkdPrpMImg.unchecked - no action taken");
    }
}
async function doNuThreeDPop(ts3DImgUstr, t3DImgId) {
    JSSHOP.shared.setFrmFieldVal("qmedia", "_id", t3DImgId);
    t3DpopStr = "";
    if(ts3DImgUstr == "noQvalue") {
        tPrpTDMTitle = "3D Animations";
    } else {
        tPrpTDMTitle = tmpPrpMediaObj["prp" + t3DImgId]["m_title"];
        tPrpMSource = tmpPrpMediaObj["prp" + t3DImgId]["m_file"];
        console.log("doNuThreeDPop.tPrpMSource: " + tPrpMSource);
    }
    tPrpMtytpe = "3dmap";
    tmpRetStr = "<div class=\"txtClrHdr txtSmall\">";
tmpRetStr += "<span class=\"txtClrHdr\" id=\"lbl_m_title\">" + stxt[996] + "</span>";
tmpRetStr += "<table><tr><td>";
tmpRetStr += "<input type=\"text\" id=\"tmp_m_title\" name=\"tmp_m_title\" value=\"" + tPrpTDMTitle + "\" class=\"form-control txtSmall txtClrHdr\" style=\"width:100%;\">";
tmpRetStr += "</td></tr><tr><td>";
tmpRetStr += "</td></tr></table>";
tmpRetStr += "</div>";

tmpRetStr += "<table style=\"width:100%;\">";
tmpRetStr += "<tr><td style=\"min-width: 100%\"><label class=\"txtClrHdr\" id=\"lbl_setmpropimg\">" + stxt[521] + "</label></td>";
tmpRetStr += "<td><div class=\"switch\"><label>";
tmpRetStr += "<input type=\"checkbox\" id=\"tmp_setmpropimg\" name=\"tmp_setmpropimg\" value=\"10\" onchange=\"javascript:doNuChkdPrpMImg(this, tPrpMSource, tPrpMtytpe);\">";
tmpRetStr += "<span class=\"lever\" style=\"float:right\"></span>";
tmpRetStr += "</label></div></td></tr>";
// tmpRetStr += "<tr><td style=\"min-width: 100%\"><label class=\"txtClrHdr\" id=\"lbl_delimgae\">" + stxt[42] + "</label></td>";
// tmpRetStr += "<td><div class=\"switch\">X</div></td></tr>";
tmpRetStr += "</table>";


    t3DpopStr += tmpRetStr; 
    t3DpopStr += "<div style=\"min-width:325px;\">"; 
    t3DpopStr += "<table style=\"margin 0 auto\"><tr><td><div id=\"dvThreeDPop\" style=\"height:320px;width:320px;margin 0 auto;\">";

    // t3DpopStr += "<gmp-map-3d id=\"dvTDPop\" mode=\"hybrid\" center=\"" + tmp_ploclat.value  + "," + tmp_ploclng.value  + "\" range=\"2000\" tilt=\"75\" heading=\"330\"></gmp-map-3d>";
   t3DpopStr += "</div></td></tr></table>";
// create a cleafix div
t3DpopStr += "<div class=\"clearfix\"></div>";
    t3DpopStr += "</div>";
   JSSHOP.ui.popNurFillLbox(t3DpopStr, "3D Animation");
 
       setTimeout(() => showNwstThreeDPop(ts3DImgUstr, t3DImgId), 1500);
    };



var doThreeDPop = function() {
    tLocLat = tmp_ploclat.value;
    tLocLng = tmp_ploclng.value;
  
    // t3DpopStr = "<div id=\"dv3DPop\" style=\"width:100%;height:100%;min-height:300px;\"><img src=\"images/misc/loading.gif\"></div>";
    // <gmp-map-3d mode="hybrid" center="37.841157, -122.551679" range="2000" tilt="75" heading="330"></gmp-map-3d>
    t3DpopStr = "<div id=\"dvThreeDPop\" style=\"height:300px;\">";
     // t3DpopStr += "<gmp-map-3d id=\"dvTDPop\" mode=\"hybrid\" center=\"" + tmp_ploclat.value  + "," + tmp_ploclng.value  + "\" range=\"2000\" tilt=\"75\" heading=\"330\"></gmp-map-3d>";
    t3DpopStr += "</div>";
    // create a div that has a the camera material.icon to call getCurrSVImgUrl
    // t3DpopStr += "<i class=\"txtClrRed brdrClrWhite bkgdClrWhite menu-material-icons\" alt=\"delete\" title=\"delete\">&#xe92b;</i>";
   //  t3DpopStr += "<div class=\"dvTxtBtns\"><input type=\"button\" class=\"btnTxtLabel\" value=\"Get Image URL\" onclick=\"javascript:saveCurr3DImgUrl();\"></div>";
    JSSHOP.ui.popNurFillLbox(t3DpopStr, "3D Animation");
 
        showThreeDPop(tLocLat, tLocLng);
    };

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
            // threedmap.removeEventListener('gmp-animationend', () => {
            //    donada = "yes";
            // });
            threedmap.stopCameraAnimation();
            // put the Play word in the button
            document.getElementById("btnAEPplay").value = "Play";

        }
    }

    async function startNuTDAnim(tNTDAurl) {
             console.log("startNuTDAnim: " + tNTDAurl);
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
        console.log("startNuTDAnim: " + tNTDAlat + " " + tNTDAlng + " " + tNTDAalt);
        threedmap.flyCameraTo({
            endCamera: {
                center: { lat: tNTDAlat, lng: tNTDAlng, altitude: 500 },
                tilt: tNTDtilt,
                range: tFNTrange,
            },
            durationMillis: 2000
        }, {once: true});
        threedmap.addEventListener('gmp-animationend', () => {
            threedmap.flyCameraTo({
            endCamera: {
                center: { lat: tNTDAlat, lng: tNTDAlng, altitude: tNTDAalt },
                tilt: tNTDtilt,
                range: tFNTrange,
            },
            durationMillis: 2000
        });
            setTimeout(() => {
                doNuThreeDAnim(tNTDAurl);
            }, 2100);
        });
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
        /* threedmap.flyCameraTo({
            endCamera: {
                center: { lat: tNTDAlat, lng: tNTDAlng, altitude: tNTDAalt },
                tilt: tNTDtilt,
                range: tFNTrange,
            },
            durationMillis: 2000
        });
        threedmap.addEventListener('gmp-animationend', () => {

        }, {once: true}); */
                    threedmap.flyCameraAround({
                camera: {
                    center: { lat: tNTDAlat, lng: tNTDAlng, altitude: tNTDAalt },
                    tilt: tNTDtilt,
                    range: tFNTrange,
                },
                durationMillis: 8000,
                repeatCount: 3
            });
        tmpThreeDLat = tNTDAlat;
        tmpThreeDLng = tNTDAlng;
        tmpThreeDAlt = tNTDAalt;
        console.log("doNuThreeDAnim: " + tmpThreeDLat + " " + tmpThreeDLng + " " + tmpThreeDAlt);
        isThreeDrun = "yes";
    }
    
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
        repeatCount: 1
      });
    }, {once: true});

    tmpThreeDLat = fLocLat;
    tmpThreeDLng = fLocLng;
    tmpThreeDAlt = fLocAlt;
 
    }


    
    async function showThreeDPop(tLocLat, tLocLng) {
    showNuThreeDPop("noQvalue", "noQvalue");
    }


    
 /* "!!! to delete

    async function showNuThreeDPop(tThreedPurl, tMdiaID) {
        doNuSpinSet("dvThreeDPop", "big", null, "...");
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
        advThreeDPop = document.getElementById('dvThreeDPop');


        console.log("showNuThreeDPop: " + tLocLat + " " + tLocLng);
        var mapthree;
        var flyToCamera;
        var dvThreeDPop;
 

     if(threedmap != null && threedmap != undefined && threedmap != "") {
                    // append the map to the dvThreeDPop div
                    threedmap.stopCameraAnimation();
                    threedmap.removeEventListener('gmp-animationend', () => {
                        donada = "yes";});
                        isThreeDrun = "no";
                    advThreeDPop.innerHTML = "";
                    advThreeDPop.append(threedmap);
     } else {
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
            // Add a pinelement at the clicked position
            const pinElement = new PinElement({
              position: event.position,
                scale: 1.5,
                altitudeMode: "ABSOLUTE"

            });
            tmpThreeDLat = event.position.lat;
            tmpThreeDLng = event.position.lng;
            tmpThreeDAlt = 10;
            console.log("threedmap.click: " + tmpThreeDLat + " " + tmpThreeDLng + " " + tmpThreeDAlt);

          //  doNuThreeDAnim(tmpThreeDLat, tmpThreeDLng, tmpThreeDAlt);

          //   strtStpNuTDAnm(getCurr3DImgUrl(280,140));
          });
    
          // add listener to log the range, tilt and heading of the map
            threedmap.addEventListener('gmp-camera-changed', (event) => {
                console.log("threedmap: camera changed: " + JSON.stringify(event.camera));
            });



    
        }

            // creat a save, play and stop button html string and append it to the dvThreeDPop div
            var t3DpopStr = "";
            t3DpopStr += "<div class=\"dvTxtBtns\">";
            t3DpopStr += "<table><tr><td>";
            t3DpopStr += "<input id=\"btnAEPadd\" type=\"button\" class=\"cls_button cls_button-small txtSmall bkgdClrHdr txtClrWhite\" value=\"Save\" onclick=\"javascript:updtCurr3DImgUrl('" + tMdiaID + "');\">";
            t3DpopStr += "</td><td>";
            t3DpopStr += "<input id=\"btnAEPplay\" type=\"button\" class=\"cls_button cls_button-small  txtSmall bkgdClrHdr txtClrWhite\" value=\"Play\" onclick=\"javascript:strtStpNuTDAnm(getCurr3DImgUrl(280,140));\">";
            t3DpopStr += "</td><td>";
            if(tMdiaID == "noQvalue") {
                tdnda = "noQvalue";
            } else {
            t3DpopStr += "<input id=\"btnTDPopdel\" type=\"button\" class=\"cls_button cls_button-small txtSmall bkgdClrDlg txtClrNrml\" value=\"Delete\" onclick=\"javascript:doNuPrdMDelete(" + tMdiaID + ",'get3DImages');\">";
            }
            t3DpopStr += "</td></tr></table>";
            t3DpopStr += "</div>";
            tHlderDiv = document.createElement("div");
            tHlderDiv.innerHTML = t3DpopStr;
            lightbox_content.append(tHlderDiv);
  
        }
*/
        async function toggleNuTDRecording() {
    var btn = document.getElementById("btnAEPRecord");
    var elementToRecord = document.getElementById("dvThreeDPop");

    if (btn.value === "Record Video") {
        try {
            const stream = await navigator.mediaDevices.getDisplayMedia({
                video: { displaySurface: "browser" },
                audio: false,
                selfBrowserSurface: "include",
                preferCurrentTab: true
            });
            
            // Attempt to crop to the specific element using Region Capture API
            const [track] = stream.getVideoTracks();
            if (window.CropTarget && track.cropTo && elementToRecord) {
                try {
                    const cropTarget = await CropTarget.fromElement(elementToRecord);
                    await track.cropTo(cropTarget);
                } catch (err) {
                    console.warn("Region Capture failed, recording full tab/screen: ", err);
                }
            }
            
            nuRecordedChunks = [];
            nuMediaRecorder = new MediaRecorder(stream, { mimeType: 'video/webm; codecs=vp9' });

            nuMediaRecorder.ondataavailable = function(e) {
                if (e.data.size > 0) {
                    nuRecordedChunks.push(e.data);
                }
            };

            nuMediaRecorder.onstop = function() {
                const blob = new Blob(nuRecordedChunks, {
                    type: "video/webm"
                });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                document.body.appendChild(a);
                a.style = "display: none";
                a.href = url;
                a.download = "property-3d-view.webm";
                a.click();
                window.URL.revokeObjectURL(url);
                
                // Reset button state if stopped externally (e.g. via browser UI)
                if(document.getElementById("btnAEPRecord")) {
                    document.getElementById("btnAEPRecord").value = "Record Video";
                    document.getElementById("btnAEPRecord").style.backgroundColor = "";
                }
            };
            
            // Handle case where user stops sharing via browser UI
            stream.getVideoTracks()[0].onended = function() {
                if(nuMediaRecorder.state !== 'inactive') {
                    nuMediaRecorder.stop();
                }
            };

            nuMediaRecorder.start();
            btn.value = "Stop Recording";
            btn.style.backgroundColor = "#ff0000"; // Red to indicate recording

        } catch (err) {
            console.error("Error starting recording: " + err);
            alert("Could not start recording: " + err.message);
        }
    } else {
        if(nuMediaRecorder && nuMediaRecorder.state !== "inactive") {
            nuMediaRecorder.stop();
            // Stop all tracks
            nuMediaRecorder.stream.getTracks().forEach(track => track.stop());
        }
        btn.value = "Record Video";
        btn.style.backgroundColor = "";
    }
}

    async function showNwstThreeDPop(tThreedPurl, tMdiaID) {
        doNuSpinSet("dvThreeDPop", "big", null, "...");
        var pdTitle = "Property";
        var pPrice = "";
        var tSellerIcon = "default_user.png";
        var tSellerName = "Seller";

        try {
            pdTitle = document.getElementById("tmp_pd_prptitle").value;
            if(document.getElementsByName("price")[0]) {
                pPrice = document.getElementsByName("price")[0].value;
            }
             if(tmpPropInfoObj["u_icon"] && tmpPropInfoObj["u_icon"] != "") {
                tSellerIcon = tmpPropInfoObj["u_icon"];
            }
            if(tmpPropInfoObj["u_fullname"] && tmpPropInfoObj["u_fullname"] != "") {
                tSellerName = tmpPropInfoObj["u_fullname"];
            }
        } catch(e) {
            console.log("showNwstThreeDPop error getting details: " + e);
        }

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
            console.log("showNwstThreeDPop: " + tThreedPurl);
            if(tThreedPurl.indexOf("center=") == -1) {
                console.log("showNwstThreeDPop invalid 3d url: " + tThreedPurl);
                alert("Invalid 3D Animation URL");
                doNuPrdMDelete(tMdiaID,"get3DImages");
                return;
            }
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
        advThreeDPop = document.getElementById('dvThreeDPop');

        // Ensure libraries are loaded
        var { Map3DElement, MapMode, Marker3DElement } = await google.maps.importLibrary("maps3d");

        if(threedmap != null && threedmap != undefined && threedmap != "") {
            threedmap.stopCameraAnimation();
            threedmap.removeEventListener('gmp-animationend', () => { donada = "yes";});
            isThreeDrun = "no";
            advThreeDPop.innerHTML = "";
            advThreeDPop.append(threedmap);
            if(curr3DMarker) {
                curr3DMarker.remove();
                curr3DMarker = null;
            }
        } else {
            threedmap = new Map3DElement({
                center: { lat: xfltdLat, lng: xfltdLng,  altitude: fltdaltitude },
                tilt: flttilt,
                range: fltdrange,
                mode: MapMode.SATELLITE,
                defaultUIHidden: true,
            });

            advThreeDPop.innerHTML = "";
            advThreeDPop.append(threedmap);

            threedmap.addEventListener('gmp-click', (event) => {
                console.log("threedmap: " + JSON.stringify(event.position));
                // add a marker at the clicked position
                tmpThreeDLat = event.position.lat;
                tmpThreeDLng = event.position.lng;
                tmpThreeDAlt = 10;
            
                if(isThreeDrun == "yes") {
                    strtStpNuTDAnm(getCurr3DImgUrl(280,140));
                }
                // threedmap.stopCameraAnimation();
                isThreeDrun = "no";
                // threedmap = null;
                tUTDimgUrl = getCurr3DImgUrl("240", "180");
                threedmap = null;
                showNwstThreeDPop(tUTDimgUrl, tMdiaID);
                console.log("threedmap.click: " + tmpThreeDLat + " " + tmpThreeDLng + " " + tmpThreeDAlt);
              

            });

            threedmap.addEventListener('gmp-camera-changed', (event) => {
                console.log("threedmap: camera changed: " + JSON.stringify(event.camera));
            });
        }
        const getMarkerCanvasImg = (title, price, iconUrl, name) => {
            return new Promise((resolve, reject) => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = 300;
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
                    
                    let nextY = wrapText(ctx, title, canvas.width / 2, 30, canvas.width, 24);
                    
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

        // Add Marker
        curr3DMarker = new Marker3DElement({
            position: { lat: fltdLat, lng: fltdLng, altitude: fltdaltitude },
            altitudeMode: "ABSOLUTE",

        });

        const template = document.createElement('template');
        template.innerHTML = `<img src="${markerImgData}" style="width: 100%; height: auto;" />`;
        
        curr3DMarker.append(template);
        threedmap.append(curr3DMarker);

        // Buttons
        if(document.getElementById("btnAEPadd")) {
            JSSHOP.ui.setCBBClickClr("btnAEPadd", "txtBold txtBig", document.getElementById("dvTxtBtns").className, function(){void(0);});
         } else {
         var tt3DpopStr = "";
        tt3DpopStr += "<div class=\"dvTxtBtns\">";
        tt3DpopStr += "<table><tr><td>";
        tt3DpopStr += "<input id=\"btnAEPadd\" type=\"button\" class=\"cls_button cls_button-small txtSmall bkgdClrHdr txtClrWhite\" value=\"Save\" onclick=\"javascript:updtCurr3DImgUrl('" + tMdiaID + "');\">";
        tt3DpopStr += "</td><td>";
        tt3DpopStr += "<input id=\"btnAEPplay\" type=\"button\" class=\"cls_button cls_button-small  txtSmall bkgdClrHdr txtClrWhite\" value=\"Play\" onclick=\"javascript:strtStpNuTDAnm(getCurr3DImgUrl(280,140));\">";
        tt3DpopStr += "</td><td>";
        // chek if is set demouser cookie
        if(JSSHOP.cookies.getCookie("demouser") !== null) {
            isDemoUser = "yes";
            tt3DpopStr += "<input id=\"btnAEPRecord\" type=\"button\" class=\"cls_button cls_button-small txtSmall bkgdClrHdr txtClrWhite\" value=\"Record\" onclick=\"javascript:toggleNuTDRecording();\">";

        }
            tt3DpopStr += "<input id=\"btnAEPRecord\" type=\"button\" class=\"cls_button cls_button-small txtSmall bkgdClrHdr txtClrWhite\" value=\"Record\" onclick=\"javascript:toggleNuTDRecording();\">";

        tt3DpopStr += "</td><td>";
        if(tMdiaID != "noQvalue") {
            tt3DpopStr += "<input id=\"btnTDPopdel\" type=\"button\" class=\"cls_button cls_button-small txtSmall bkgdClrDlg txtClrNrml\" value=\"Delete\" onclick=\"javascript:doNuPrdMDelete(" + tMdiaID + ",'get3DImages');\">";
        }
        tt3DpopStr += "</td></tr></table>";
        tt3DpopStr += "</div>";

    } // end if dvTxtBtns not exist
        // create a clearfix div
        tt3DpopStr += "<div style=\"clear: both;\"></div>";
        ttHlderDiv = document.createElement("div");

        ttHlderDiv.innerHTML = tt3DpopStr;
        // lightbox_content.style.margin = "15px";
        advThreeDPop.append(ttHlderDiv);
    }







 
     function saveArialVwImgUrl(tSAVIid) {
        tAVIurl = getCurrAVImgUrl("240", "180");   
        tAVIthmburl = getCurrAVImgUrl("100", "80");
        tTimeRand = quid + "_" + Math.floor(Math.random() * 1000000);
 
        tmpAVurl = LZString.compressToEncodedURIComponent(tAVIurl);
        tmpAVthmburl = LZString.compressToEncodedURIComponent(tAVIthmburl);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_file", tmpAVurl);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_file_thumb", tmpAVthmburl);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_coid", prpid);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_uid", quid);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_pid", prpid);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_rtype", 5);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_title", document.getElementById("tmp_m_title").value);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_dadded", JSSHOP.getUnixTimeStamp());
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_catid", 25);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_vala", tTimeRand);

        tmpDOs = null;
        tmpDOs = {};
        tmpDOs["knvp"] = JSSHOP.shared.getFrmVals(document["qmedia"], "nada");
        if(tSAVIid == "noQvalue") {
        oi = getNuDBFnvp("qmedia", 6, null, tmpDOs);
        } else {
        tmpDOs["ws"] = "where _id=?";
        tmpDOs["wa"] = [tSAVIid];
        oi = getNuDBFnvp("qmedia", 7, null, tmpDOs);
        }
        
        tImgNUstr = tTimeRand + ":" + tmpAVthmburl;
        console.log("saveArialVwImgUrl.tImgNUstr: " + tImgNUstr);
        doQComm(oi["rq"], tImgNUstr, "fnishAVImgAdd");
    }


    function fnishAVImgAdd(aa,bb,cc) {
        JSSHOP.ui.closeLbox();
        // make connection to _p/file_imgurl.php
            console.log("fnishAVImgAdd: " + aa + " " + bb + " " + cc);
            tSplitStr = aa.split(":");
            tFileName = tSplitStr[0];
            tFileUrl = tSplitStr[1];
              JSSHOP.ajax.doNuAjaxPipe(aa, "_p/file_imgurl.php?wu=" + tFileUrl + "&in=" + tFileName, getAVImages);

 
    }
    function getCurrAVImgUrl(tIUwidth, tIUheight) {
        tLatLngStr = "";
        // get the static map image url including the center of the map and all polyline points
        tCntrMap = gpmap.getCenter();
        tCntrMapLat = tCntrMap.lat();
        tCntrMapLng = tCntrMap.lng();
        // adjust the lat lang to 10 meters south of the center of the map
        tCntrMapLat = tCntrMap.lat() - 0.0001;
        tCntrMapLng = tCntrMap.lng() - 0.0001;
        // get the zoom level of the map
        tZmLvl = gpmap.getZoom();
        // get the map type of the map
        tMpType = gpmap.getMapTypeId();
   
        // get the size of the map
        tIUwidth = gpmap.getDiv().offsetWidth;
        tIUheight = gpmap.getDiv().offsetHeight;
        // get all the points of the polyline in the polylines array
        for (var i = 0; i < polylines.length; i++) {
            var path = polylines[i].getPath();
            // get the points of the polyline
            for (var j = 0; j < path.getLength(); j++) {
                var point = path.getAt(j);
                // add the point to the string
                tLatLngStr += point.lat() + "," + point.lng() + "|";
            }
        }
        // remove the last | from the string
        tLatLngStr = tLatLngStr.substring(0, tLatLngStr.length - 1);

        // get the static map thumbnail image url
     

        // get the static map image url
        tAVImgUstr = "https://maps.googleapis.com/maps/api/staticmap?key=" + gglSKey + "&size=" + tIUwidth + "x" + tIUheight + "&center=" + tCntrMapLat + "," + tCntrMapLng + "&zoom=" + tZmLvl + "&maptype=" + tMpType + "&path=color:0x0000ff|weight:5|" + tLatLngStr;
        

        // tAVImgUstr = "https://maps.googleapis.com/maps/api/staticmap?size=" + tIUwidth + "x" + tIUheight + "&center=" + tCntrMapLat + "," + tCntrMapLng + "&zoom=" + tZmLvl + "&maptype=" + tMpType + "&key=" + gglSKey;
        // get the center of the map
          console.log("getCurrAVImgUrl: " + tAVImgUstr);
         return tAVImgUstr;
    }
    function showAVImages(a,b,c) {
        console.log("showAVImages: " + a + " " + b + " " + c);
        tAViretArr = null;
        tAViretArr = [];
        document.getElementById("dvAVimgs").innerHTML = "";
        tAVImgStr = "";
        if(b.indexOf("_id") != -1) {
            tViretArr = JSON.parse(b);
            var len = tViretArr.length;
            iint = 0;
            while (iint < len) {
                tNrmlImg = tViretArr[iint]["m_file"];
                tLZuncompD = LZString.decompressFromEncodedURIComponent(tNrmlImg);
                tThumbImg = tViretArr[iint]["m_file_thumb"];
                tLZuncomp = LZString.decompressFromEncodedURIComponent(tThumbImg);
                console.log("showAVImages: " + tLZuncomp);
                // tAVImgStr += "<img src=\"" + tLZuncomp + "\" class=\"icnmedbtn slmtable\" onclick=\"JSSHOP.ui.popAndFillLbox(getPrdImgEditDv('" + tViretArr[iint]["_id"] + "','" + tThumbImg + "'));\">";
                tAVImgStr += "<img src=\"" + tLZuncomp + "\" class=\"icnmedbtn slmtable\" onclick=\"javascript:doArialVwPop('" + tThumbImg + "','" + tViretArr[iint]["_id"] + "');\">";
                iint++;
            }
            if(tAVImgStr == "") {
                tAVImgStr = "<div class=\"form-control txtClrRed slmtable crsrPointer\" onclick=\"javascript:doArialVwPop('noQvalue','noQvalue');\"><u>Create New Arial View</u></div>";
            }
        } else {
            tAVImgStr = "<div class=\"form-control txtClrRed slmtable crsrPointer\" onclick=\"javascript:doArialVwPop('noQvalue','noQvalue');\"><u>Create New Arial View</u></div>";
        }
            document.getElementById("dvAVimgs").innerHTML = tAVImgStr;
        }
    
    function getAVImages() {
        tmpDOs = null;
        tmpDOs = {};
        tmpDOs["ws"] = "where m_pid=? and m_rtype=? and m_catid=?";
        tmpDOs["wa"] = [prpid, 5, 25];
        tmpDOs["o"] = "m_vala desc";
        oi = getNuDBFnvp("qmedia", 5, null, tmpDOs);
        doQComm(oi["rq"], null, "showAVImages");
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
      console.log("showArialVwPop: " + tLocLat + " " + tLocLng);
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
            zoomControl: false,
            // hide the scale control
            scaleControl: false,
            // hide the street view control
            streetViewControl: false,
            // enable the rotate control
              rotateControl: false,
              panControl: false,
              fullscreenControl: false,
                mapTypeControl: false,
       
                cameraControl: false,
                // no tilting
       
                
        });

 
        const drawingManager = new google.maps.drawing.DrawingManager({
            drawingMode: google.maps.drawing.OverlayType.POLYLINE,
            drawingControl: false,
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

    
   
            // set the polyline as the default drawing mode
            polylineOptions: {
              strokeColor: "#ff0000",
              strokeOpacity: 1.0,
              strokeWeight: 3,
              editable: true,
              zIndex: 0,

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
  // gpmap.controls[google.maps.ControlPosition.TOP_CENTER].push(eraseControlDiv);

          drawingManager.setMap(gpmap);
          gpmap.setTilt(0);
    }

    function showNuArialVwPop(tTAVPurl, tSVIid) {

        tAVPurl = LZString.decompressFromEncodedURIComponent(tTAVPurl);

        console.log("showNuArialVwPop: " + tAVPurl);
        //         tAVPurl = "https://maps.googleapis.com/maps/api/staticmap?key=" + gglSKey + "&size=" + tIUwidth + "x" + tIUheight + "&center=" + tCntrMapLat + "," + tCntrMapLng + "&zoom=" + tZmLvl + "&maptype=" + tMpType + "&path=color:0x0000ff|weight:5|" + tLatLngStr;
        tAVurlObj = JSSHOP.shared.urlToArray(tAVPurl);
        tfAVurlLat = tAVurlObj["center"].split(",")[0];
        tfAVurlLng = tAVurlObj["center"].split(",")[1];
        tAVurlLat = parseFloat(tfAVurlLat);
        tAVurlLng = parseFloat(tfAVurlLng);
        tfAVurlZoom = tAVurlObj["zoom"];
        //tAVurlZoom = parseFloat(tAVurlZoom);
        tAVurlZoom = parseInt(tfAVurlZoom);
        tAVurlMapType = tAVurlObj["maptype"];
         if(tAVurlObj["path"] == undefined || tAVurlObj["path"] == null) {
            tAVurlPath = "";
        } else {
        // parse the path string to get the points of the polyline
        tAVurlPath = tAVurlObj["path"];
        tAVurlPath = tAVurlPath.split("|");
        tAVurlPathArr = new Array();
        isnoti = 0;
        for (var i = 0; i < tAVurlPath.length; i++) {
            if(tAVurlPath[i].indexOf(":") != -1) {
                isnotgd = "yes";
            } else {
            tAVurlPathArr[isnoti] = tAVurlPath[i].split(",");
            tAVurlPathArr[isnoti][0] = parseFloat(tAVurlPathArr[isnoti][0]);
            tAVurlPathArr[isnoti][1] = parseFloat(tAVurlPathArr[isnoti][1]);
            isnoti++;
            }
        }
    }
        console.log("showNuArialVwPop: " + tAVurlLat + " " + tAVurlLng);
    gpmap = new google.maps.Map(document.getElementById("dvArialVwPop"), {
        center: { lat: tAVurlLat, lng: tAVurlLng },
        mapTypeId: tAVurlMapType,
        // set max zoom level
        zoom: tAVurlZoom,
        maxZoom: 20,
         
            // hide all map controls
           //  disableDefaultUI: true,
            // hide the zoom control
            zoomControl: false,
            // hide the scale control
            scaleControl: false,
            // hide the street view control
            streetViewControl: false,
            // enable the rotate control
              rotateControl: false,
              panControl: false,
              fullscreenControl: false,
                mapTypeControl: false,
       
                cameraControl: false,
                // no tilting
       
                
        });

 
        const drawingManager = new google.maps.drawing.DrawingManager({
            drawingMode: google.maps.drawing.OverlayType.POLYLINE,
            drawingControl: false,
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

    
   
            // set the polyline as the default drawing mode
            polylineOptions: {
              strokeColor: "#ff0000",
              strokeOpacity: 1.0,
              strokeWeight: 3,
              editable: true,
              zIndex: 0,

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
  // gpmap.controls[google.maps.ControlPosition.TOP_CENTER].push(eraseControlDiv);

          drawingManager.setMap(gpmap);
          gpmap.setTilt(0);
          if(tAVurlPath == "" || tAVurlPath == null) {
            // do nothing
          } else {
            // add the tAVurlPathArr to the map as a polyline
              var path = new google.maps.MVCArray();
            for (var i = 0; i < tAVurlPathArr.length; i++) {
                path.push(new google.maps.LatLng(tAVurlPathArr[i][0], tAVurlPathArr[i][1]));
            }
            var polyline = new google.maps.Polyline({
                path: path,
                strokeColor: "#ff0000",
                strokeOpacity: 1.0,
                strokeWeight: 3,
                editable: true,
                zIndex: 0,
            });
            polyline.setMap(gpmap);
            polylines.push(polyline);
        }
       
    }

    function getArialVwPop(tLocLat, tLocLng) {
        setTimeout(function(){ showArialVwPop(tLocLat, tLocLng); }, 3000);
    }

     function doArialVwPop(tAVPurl, tSVIid) {
        console.log("doArialVwPop: " + tAVPurl + " " + tSVIid);
        tAVIttl = "Arial View";
            if(tAVPurl == "noQvalue") {
                console.log("doArialVwPop: noQvalue");
            tAVLat = document.getElementById("tmp_ploclat").value;
            tAVLng = document.getElementById("tmp_ploclng").value;
            tAVAlt = 10;
            tZmLvl = 16;
            tMpType = "SATELLITE";
            tCntrMapLat = tAVLat;
            tCntrMapLng = tAVLng;
            tCntrMapAlt = tAVAlt;
            tFldHeading = 0;
            tFldTilt = 67.5;
            tFldRange = 500;
            tFldAlt = 10;
            tFldZoom = 16;
            // https://maps.googleapis.com/maps/api/staticmap?size=240x180&center=-4.38181,-79.9437&key=AIzaSyAiBR8BEPj2YCepKplisQKK709r1TI48Vo&heading=0&tilt=67.5&altitude=10&zoom=16&maptype=SATELLITE
            tFAVPurl = "https://maps.googleapis.com/maps/api/staticmap?size=240x180&center=" + tAVLat + "," + tAVLng + "&key=" + gglSKey + "&maptype=SATELLITE&zoom=16";
           //  tFAVPurl = getCurrAVImgUrl("240", "180");
            tNPurl = LZString.compressToEncodedURIComponent(tFAVPurl);
           // setTimeout(function(){ showArialVwPop(tAVLat, tAVLng); }, 1000);
           // return;
        } 

    

        if(tSVIid == "noQvalue") {

            //tAVPurl = getCurrAVImgUrl("240", "180");
            // tAVPurl = LZString.compressToEncodedURIComponent(tAVPurl);
        } else {
            if(tmpPrpMediaObj["prp" + tSVIid]["m_title"] != null && tmpPrpMediaObj["prp" + tSVIid]["m_title"] != undefined && tmpPrpMediaObj["prp" + tSVIid]["m_title"] != "") {
            tAVIttl = tmpPrpMediaObj["prp" + tSVIid]["m_title"];
            } else {
                tAVIttl = "Arial View";
            }
            JSSHOP.shared.setFrmFieldVal("qmedia", "_id", tSVIid);
         }

        tAVpopStr = "";
        tAVpopStr += "<div class=\"txtClrHdr txtSmall\">";
        tAVpopStr += "<span class=\"txtClrHdr\" id=\"lbl_m_title\">" + stxt[996] + "</span>";
        tAVpopStr += "<table><tr><td>";
        tAVpopStr += "<input type=\"text\" id=\"tmp_m_title\" name=\"tmp_m_title\" value=\"" + tAVIttl + "\" class=\"form-control txtSmall txtClrHdr\" style=\"width:100%;\">";
        tAVpopStr += "</td></tr><tr><td>";
        tAVpopStr += "</td></tr></table>";
        tAVpopStr += "</div>";
        tAVpopStr += "<div id=\"dvArialVwPop\" style=\"width:100%;height:100%;min-height:300px;\">";
        tAVpopStr += "<img src=\"images/misc/loading.gif\">";
        tAVpopStr += "</div>";
        var tAVBpopStr = "";
            tAVBpopStr += "<div class=\"dvTxtBtns\">";
            tAVBpopStr += "<table><tr><td>";
            tAVBpopStr += "<input id=\"btnSVadd\" type=\"button\" class=\"cls_button cls_button-small txtSmall bkgdClrHdr txtClrWhite\" value=\"Save\" onclick=\"javascript:saveArialVwImgUrl('" + tSVIid + "');\">";
            tAVBpopStr += "</td><td>";
            // Clear map and remove all polylines
            tAVBpopStr += "<input id=\"btnSVplay\" type=\"button\" class=\"cls_button cls_button-small  txtSmall bkgdClrHdr txtClrWhite\" value=\"Clear\" onclick=\"javascript:emptyMap();\">";
            if(tSVIid == "noQvalue") {
                tdnda = "noQvalue";
               //  tAVBpopStr += "<input id=\"btnSVdel\" type=\"button\" class=\"cls_button cls_button-small txtSmall bkgdClrDlg txtClrNrml\" value=\"Cancel\" onclick=\"javascript:JSSHOP.ui.closeLbox();\">";

            } else {
                tAVBpopStr += "<input id=\"btnSVdel\" type=\"button\" class=\"cls_button cls_button-small txtSmall bkgdClrDlg txtClrNrml\" value=\"Delete\" onclick=\"javascript:doNuPrdMDelete('" + tSVIid + "','getAVImages');\">";
            }
            tAVBpopStr += "</td></tr></table>";
            tAVBpopStr += "</div>";
            tAVpopStr += tAVBpopStr;
       //   tAVpopStr += "<div class=\"dvTxtBtns\"><input type=\"button\" class=\"btnTxtLabel\" value=\"Get Image URL\" onclick=\"javascript:saveArialVwImgUrl();\"></div>";
        JSSHOP.ui.popAndFillLbox(tAVpopStr);
         tmpMapUmrkdObj = null;
        var  tmpMapUmrkdObj = {};
       
                tLocLat = tmp_ploclat.value;
                tLocLng = tmp_ploclng.value;
                 if(tAVPurl == "noQvalue") {
                    setTimeout(function(){ showArialVwPop(tLocLat, tLocLng) }, 1000);
                } else {
                        setTimeout(function(){ showNuArialVwPop(tAVPurl, tSVIid) }, 1000);

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
       polylines = null
        polylines = "";

        polylines = [];
        markers = [];
        tmpMapUmrkdObj = {};
        poly = null;

 
      }




        // create a div that has a the camera material.icon to call getCurrSVImgUrl





var setSliderPropImgs = function(theAIa, theAIb, theAIc) {
    
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

function fnsihPrpITtlSave(aa,bb,cc) {
    tMediaOid = JSSHOP.shared.getFrmFieldVal("qmedia", "_id", 0);
    console.log("fnshPrpTitleSave: " + aa + " " + bb + " " + cc);
    btnPrpImgTsave = document.getElementById("btnPrpImgTsave");
    // set the innerHTML of the button to the success message
    tmpPrpMediaObj["prp" + tMediaOid]["m_title"] = document.getElementById("tmp_m_title").value;    
    btnPrpImgTsave.innerHTML =  stxt[120] + "!";
    setTimeout(function(){ btnPrpImgTsave.innerHTML = stxt[997]; }, 3000);
}

var doPrpITtlSave = function() {
    console.log("doPrpTitleSave: " + prpid);
   //  document.getElementById("m_title").value = 
    procNuUIitem("qmedia","m_title",JSSHOP.shared.getFrmFieldVal("qmedia", "_id", 0),document.getElementById("tmp_m_title").value,"fnsihPrpITtlSave");
};

var doPrpCkckdIMain = function() {
    console.log("doPrpCkckdIMain: " + prpid);
    document.getElementById("pimage").value = JSSHOP.shared.getFrmFieldVal("qmedia", "m_file", 0);
    procNuUIitem("property","pimage",prpid,JSSHOP.shared.getFrmFieldVal("qmedia", "m_file", 0),"donada");
};

var doPrdMDelete = function() { 
    if(confirm(stxt[42] + " " + stxt[19] + "?")) {
    procNuUIitem("qmedia","m_rtype",JSSHOP.shared.getFrmFieldVal("qmedia", "_id", 0),"0","fnshProdMDel");
    }
};

var doNuPrdMDelete = function(tmpPrdMID, tprdMcb) {
    JSSHOP.ui.closeLbox();
    if(confirm(stxt[42] + " " + stxt[19] + "?")) {
    procNuUIitem("qmedia","m_rtype",tmpPrdMID,"0",tprdMcb);
    }
};



var fnshProdMMain = function(aa,bb,cc) { 
// alert(bb);
// getPropImgs();
JSSHOP.ui.closeLbox();

};


var doPrdMMain = function() { 
if(confirm("Set as main product picture?" + JSSHOP.shared.getFrmFieldVal("qmedia", "m_file", 0))) {
procNuUIitem("property","pimage",prpid,JSSHOP.shared.getFrmFieldVal("qmedia", "m_file", 0),"fnshProdMMain");
    } 
};
 



function doChkdPrpMImg(tCPIelem) {
    if(tCPIelem.checked) {
        doPrpCkckdIMain();
    } else {
        tIDKV = "";
        // doPrdMDelete();
    }
}
function fnshPcPrpIType(aa,bb,cc) {
    console.log("fnshPcPrpIType: " + aa + " " + bb + " " + cc);
    // JSSHOP.ui.closeLbox();
    tthePropImgId = JSSHOP.shared.getFrmFieldVal("qmedia", "_id", 0);
    tthePropImgType = JSSHOP.shared.getFrmFieldVal("qmedia", "m_data", 0);
    console.log("fnshPcPrpIType: " + tthePropImgId + " - " + tthePropImgType);
    tPrpImgPopObj = tmpPrpMediaObj["prp" + tthePropImgId];
    console.log("fnshPcPrpIType: " + JSON.stringify(tPrpImgPopObj));
    tPrpImgPopObj["m_data"] = tthePropImgType;
    console.log("fnshPcPrpIType: " + JSON.stringify(tPrpImgPopObj));
    tmpPrpMediaObj["prp" + tthePropImgId] = tPrpImgPopObj;
    console.log("fnshPcPrpIType: " + JSON.stringify(tmpPrpMediaObj));
    dvPrpImgTsave = document.getElementById("dvPrpImgTsave");
    dvPrpImgTsave.innerHTML = "<div>" + stxt[120] + "!</div>";
    setTimeout(function(){ dvPrpImgTsave.innerHTML = ""; }, 3000);
}

var procPrpImgType = function(thePITa, thePITb, thePITc) {
    console.log("procPrpImgType: " + thePITa + " - " + thePITb + " - " + thePITc); 
    tthePropImgId = JSSHOP.shared.getFrmFieldVal("qmedia", "_id", 0);
    procNuUIitem("qmedia","m_data",tthePropImgId,thePITc,"fnshPcPrpIType"); 
    
}

var getPrdImgEditDv = function(tpIncrNPI, tpFImg) {
    console.log("getPrdImgEditDv " + tpIncrNPI + " " + tpFImg); 
tpPIEDv = document.createElement('div');
JSSHOP.shared.setFrmFieldVal("qmedia", "_id", tpIncrNPI);
JSSHOP.shared.setFrmFieldVal("qmedia", "m_file", tpFImg);
 
 if(tpFImg.indexOf("googleapis") != -1)  {
tmpRetStr = "<img src=\"" + tpFImg +  "\" style=\"width: 100%\"  class=\"\" onclick=\"alert('" + JSSHOP.shared.getFrmFieldVal("qmedia", "_id", "0") + "');\">"
} else if(tpFImg.indexOf(".") != -1) {
 tmpRetStr = "<img src=\"images/property/" + tpFImg +  "\" style=\"width: 100%\"  class=\"\" onclick=\"alert('" + JSSHOP.shared.getFrmFieldVal("qmedia", "_id", "0") + "');\">"
} else if(tpFImg.indexOf("data:image") != -1) {
// alert("data:image: " + tpFImg);
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

var getPropIEditDv = function(tpIncrNPI, tpFImg) {
	console.log("getPropIEditDv " + tpIncrNPI  + tpFImg);
    tPrpImgPopObj = {};
tPrpImgPopObj = tmpPrpMediaObj["prp" + tpIncrNPI];
console.log("getPropIEditDv: " + JSON.stringify(tPrpImgPopObj));

tpPIEDv = document.createElement('div');
JSSHOP.shared.setFrmFieldVal("qmedia", "_id", tpIncrNPI);
JSSHOP.shared.setFrmFieldVal("qmedia", "m_file", tpFImg);
JSSHOP.shared.setFrmFieldVal("qmedia", "m_data", tPrpImgPopObj["m_data"]);
if(tPrpImgPopObj["m_title"] == "") {
tPrpImgPopObj["m_title"] = stxt[996];
} else {
JSSHOP.shared.setFrmFieldVal("qmedia", "m_title", tPrpImgPopObj["m_title"]);
}
tImgTypeDDObg = {}
tImgTypeDDObg["ddtype"] = "noQvalue";
tImgTypeDDObg["fld"] = "m_data";
tImgTypeDDObg["lbl"] = stxt[995];
// tImgTypeDDObg["val"] = document.getElementById("m_data").value;
tImgTypeDDObg["val"] = tPrpImgPopObj["m_data"];
tImgTypeDDObg["kvpObj"] = svftObj["propimgtype"];
tImgTypeDDObg["cb"] = "procPrpImgType";
tImgTypeDDObg["fldcls"] = "nav-link dropdown-toggle txtSmall";
tImgTypeDDObg["lblcls"] = "txtSmall";
tImgTypeDDObg["valcls"] = "txtSmall";
tImgTypeDDObg["icncls"] = "nav-material-icons txtBold txtClrGrey";
tImgTypeDDObg["horvert"] = "vertical";
tImgTypeDDObg["icn"] = "noQvalue";
tImgTypeDDstr = JSSHOP.ui.getNuBSdropDstr(tImgTypeDDObg);
 
tmpRetStr = "";
tmpRetStr += tImgTypeDDstr;
tmpRetStr += "<div id=\"dvPrpImgTsave\" class=\"txtClrDGreen txtSmall\"></div>";
// title div
tmpRetStr += "<div class=\"txtClrHdr txtSmall\">";
tmpRetStr += "<span class=\"txtClrHdr\" id=\"lbl_m_title\">" + stxt[996] + "</span>";
tmpRetStr += "<table><tr><td>";
tmpRetStr += "<input type=\"text\" id=\"tmp_m_title\" name=\"tmp_m_title\" value=\"" + tPrpImgPopObj["m_title"] + "\" class=\"form-control txtSmall txtClrHdr\" style=\"width:100%;\">";
tmpRetStr += "</td></tr><tr><td>";
tmpRetStr += "<button id=\"btnPrpImgTsave\" class=\"crsrPointer txtSmall txtClrHdr\" onclick=\"javascript:doPrpITtlSave();\" style=\"text-decoration:underline;\">" + stxt[997] + "</button>";
tmpRetStr += "</td></tr></table>";
tmpRetStr += "</div>";
tmpRetStr += "<br>";
 try {
// tmpRetStr += "<div class=\"dvTxtBtns\"><input type=\"button\" class=\"btnTxtLabel\" value=\"" + stxt[521] + "\" onclick=\"javascript:doPrdMMain();\">   |   <input type=\"button\" class=\"btnTxtLabel\" value=\"" + stxt[42] + "\" onclick=\"javascript:doPrdMDelete();\"></div>";
 
tmpRetStr += "<table style=\"width:100%;\">";
tmpRetStr += "<tr><td style=\"min-width: 100%\"><label class=\"txtClrHdr\" id=\"lbl_setmpropimg\">" + stxt[521] + "</label></td>";
tmpRetStr += "<td><div class=\"switch\"><label>";
tmpRetStr += "<input type=\"checkbox\" id=\"tmp_setmpropimg\" name=\"tmp_setmpropimg\" value=\"10\" onchange=\"javascript:doChkdPrpMImg(this);\">";
tmpRetStr += "<span class=\"lever\" style=\"float:right\"></span>";
tmpRetStr += "</label></div></td></tr>";
// tmpRetStr += "<tr><td style=\"min-width: 100%\"><label class=\"txtClrHdr\" id=\"lbl_delimgae\">" + stxt[42] + "</label></td>";
// tmpRetStr += "<td><div class=\"switch\">X</div></td></tr>";
tmpRetStr += "</table>";
// if tpFImg indexOf "updt_" then show from ucontent else show from property
if(tpFImg.indexOf("updt_") != -1) {
    tpFImg = tpFImg.replace("updt_", "");
    tmpRetStr += "<img src=\"images/ucontent/m_thumb" + tpFImg +  "\" style=\"width: 100%\"  class=\"\" onclick=\"alert('" + JSSHOP.shared.getFrmFieldVal("qmedia", "_id", "0") + "');\">";
} else {
 tmpRetStr += "<img src=\"images/property/m_thumb" + tpFImg +  "\" style=\"width: 100%\"  class=\"\" onclick=\"alert('" + JSSHOP.shared.getFrmFieldVal("qmedia", "_id", "0") + "');\">"
}
// put the delete button
tmpRetStr += "<div class=\"dvTxtBtns\">";
  tmpRetStr += "<input type=\"button\" class=\"cls_button cls_button-small txtSmall bkgdClrHdr txtClrWhite\" value=\"" + stxt[42] + "\" onclick=\"javascript:doPrdMDelete();\">";
tmpRetStr += "</div>";
return tmpRetStr;
} catch(e) {
alert("getPropIEditDv " + e);
tmpRetStr = "oops. something wrong..";
return tmpRetStr;
}
};

var setAllPropImgs = function(theAIa, theAIb, theAIc) {
    /*
    m_catid 5 = regular prop imgs
    m_catid 10 = face book image
    m_catid 20 = street view image
    m_catid 25 = aerial view image
    m_catid 30 = 3D image
    */
	try {
        tmpPrpLinksArr = null;
        tmpPrpLinksArr = [];
        console.log("setAllPropImgs: " + theAIa + " " + theAIb + " " + theAIc);
        tSocStr = "";
        tSVImgDarr = [];
        tAVImgDarr = [];
        tThreeDarr = [];
        tVidListArr = [];
        tFllSocStr = "";
    if(theAIb.indexOf("_id") != -1) {

		tAiretArr = JSON.parse(theAIb);
		var len = tAiretArr.length;
        tstr = "";
        
        iint = 0;
        while (iint < len) {
             tmpPrpMediaObj["prp" + tAiretArr[iint]["_id"]] = tAiretArr[iint];

             tBsj = tAiretArr[iint];
            if(tAiretArr[iint]["m_catid"] == "5") {
            if(tAiretArr[iint]["m_file"] == c_logoimg.value) {
              tstr += "<div style=\"float:left\" class=\"crsrPointer brdrClrRed\">";
              
            } else {
			tstr += "<div style=\"float:left\" class=\"crsrPointer\">";
            }
                tmfile = tAiretArr[iint]["m_file"];
                if(tmfile.indexOf("updt_") != -1) {
                    tmfile = tmfile.replace("updt_", "");
                    tstr += "<img src=\"images/ucontent/m_thumb" + tmfile + "\" class=\"icnmedbtn slmtable crsrPointer\" onclick=\"javascript:JSSHOP.ui.popAndFillLbox(getPropIEditDv('" + tAiretArr[iint]["_id"] + "','" + tAiretArr[iint]["m_file"] + "'));\">";
                } else {
                    tmfile = tmfile;
                     			tstr += "<img src=\"images/property/m_thumb" + tmfile + "\" class=\"icnmedbtn slmtable crsrPointer\" onclick=\"javascript:JSSHOP.ui.popAndFillLbox(getPropIEditDv('" + tAiretArr[iint]["_id"] + "','" + tAiretArr[iint]["m_file"] + "'));\">";

                }
			tstr += "</div>";
            // tmpPropImgsArr.push(tAiretArr[iint]);
        } else if(tAiretArr[iint]["m_catid"] == "20") {
            if(tSVImgDarr.length > 0) {
                tDarrStr = "nada";
            } else {
            tSVImgDarr.push(tAiretArr[iint]);
            }
        }  else if(tAiretArr[iint]["m_catid"] == "25") {
            if(tAVImgDarr.length > 0) {
                tDarrStr = "nada";
            } else {
            tAVImgDarr.push(tAiretArr[iint]);
            }
        } else if(tAiretArr[iint]["m_catid"] == "30") {
            if(tThreeDarr.length > 0) {
                tDarrStr = "nada";
            } else {
            tThreeDarr.push(tAiretArr[iint]);
            tLocLat = tAiretArr[iint]["m_vala"];
            tLocLng = tAiretArr[iint]["m_valb"];
            tLocAlt = tAiretArr[iint]["m_valc"];
            // showThreeDPop(tLocLat, tLocLng, tLocAlt);
            // getArialVwPop(tLocLat, tLocLng);
            // showThreeDPop(tLocLat, tLocLng, 10);
            // setTimeout(function(){ showThreeDPop(tLocLat, tLocLng, 10); }, 3000);
            // setTimeout(function(){ getArialVwPop(tLocLat, tLocLng); }, 3000);
            }
        } else if(tAiretArr[iint]["m_catid"] == "35") { // videos made with Ccapture
           // videos data here

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
        
        if(tstr == "" || tstr == null || tstr == "undefined") {
        tstr = "<div class=\"txtClrHdr\">" + stxt[633] + "</div>";
        }
                tstr += "<div style=\"clear:both\"></div>";

        console.log("setAllPropImgs.tstr: " + tstr);
		document.getElementById("dvProdImgs").innerHTML = tstr;
        if(tSocStr.length > 5) {
            tFllSocStr =  "<table style=\"width:100%;\">";
            tFllSocStr +=  "<tr><td colspan=\"2\"><strong>" + stxt[10] + "</strong></td>";
            tFllSocStr +=  "<td colspan=\"2\"><strong>" + stxt[42] + "</strong></td></tr>";

            tFllSocStr +=  tSocStr + "</table>";

        // document.getElementById("dvPrpSocLinks").innerHTML = tFllSocStr;
        
        }
	} // end if _id
           tFullPROIDstr = "";
       // put seller icon and name
       tSlrIcon = tmpPropInfoObj["u_icon"];
       tSlrName = tmpPropInfoObj["u_fullname"];
       tFullPROIDstr += "<table><tr><td>";
       tFullPROIDstr += "<img src=\"images/user/s_thumb" + tSlrIcon +  "\" class=\"icnRnd26 crsrPointer\" alt=\"seller icon\" id=\"imgSlrIcn\"> ";
         tFullPROIDstr += "</td><td>";
         tFullPROIDstr += tSlrName;
            tFullPROIDstr += "</td></tr></table>";
         // tSlrName = LZString.decompressFromEncodedURIComponent(currShopsArr[0].u_fullname);
         tFullPROIDstr += "<br>" + stxt[985] + " ID: " + prpid;
  document.getElementById("dvPrpDVID").innerHTML = tFullPROIDstr;

         // document.getElementById("dvPrpDVID").innerHTML = stxt[985] + " ID: " + prpid;
    tPopTitlZpd = tmpPrpLngObj[usrlang]["pd_prptitle"];
    tPrpTitleUnzpd = LZString.decompressFromEncodedURIComponent(tPopTitlZpd);
    tPrpTtlClnShrt = tPrpTitleUnzpd.length > 20 ? tPrpTitleUnzpd.substring(0, 70) + "..." : tPrpTitleUnzpd;
    document.getElementById("dvPrpDTtl").innerHTML = tPrpTtlClnShrt;

     if(tSVImgDarr.length > 0) {
        tJSONstr = JSON.stringify(tSVImgDarr);

    } else {
        tJSONstr = "nada";
    }
    showSVImages(1, tJSONstr, 1);
    if(tAVImgDarr.length > 0) {
       tAVJstr = JSON.stringify(tAVImgDarr);

    } else {
       tAVJstr = "nada";
    }
    setTimeout(function(){ showAVImages(1, tAVJstr, 1); }, 1000);
    if(tThreeDarr.length > 0) {
        tJSONCstr = JSON.stringify(tThreeDarr);
    } else {
        tJSONCstr = "nada";
    }
     show3DImages(1, tJSONCstr, 1);
	} catch(e) {
        console.log("setAllPropImgs: " + e);
		// alert("setAllPropImgs: " + e);
	}
};



var getAllPropImgs = function() {
tmpFobj = null;
tmpFobj = {};
tmpFobj["ws"] = "where m_pid=? and m_rtype=?";
tmpFobj["wa"] = [prpid, 5];
// tmpFobj["o"] = "m_vala desc";
oi = getNuDBFnvp("qmedia", 5, null, tmpFobj);
doQComm(oi["rq"], null, "setAllPropImgs");
};

var setPropImgs = function(tspiArr, tspiB, tspiC) {
    document.getElementById("dvProdImgs").innerHTML = "";
    console.log("setPropImgs: " + tspiArr + " " + tspiB + " " + tspiC); 
    try {
            } catch(e) {
        alert("setPropImgs: " + e);
    }
    tSPARArr = null;
    tSPARArr = [];
    if(tspiB.indexOf("_id") != -1) {
        tSPARArr = JSON.parse(tspiB);

		var asplen = tSPARArr.length;
        tstr = "";
        
        iintsp = 0;
        while (iintsp < asplen) {
             tmpPrpMediaObj["prp" + tSPARArr[iintsp]["_id"]] = tSPARArr[iintsp];

             tBsj = tSPARArr[iintsp];

            if(tSPARArr[iintsp]["m_file"] == c_logoimg.value) {
              tstr += "<div style=\"float:left\" class=\"crsrPointer brdrClrRed\">";
              
            } else {
			tstr += "<div style=\"float:left\" class=\"crsrPointer\">";
            }
            tMfile = tSPARArr[iintsp]["m_file"];
            // if starts with updt_ then it's an updated image ans source is images/ucontent/
            if(tMfile.indexOf("updt_") != -1) {
                // remove updt_ from the file name
                var tmfileName = tMfile.replace("updt_", "");
                tstr += "<img src=\"images/ucontent/m_thumb" + tmfileName + "\" class=\"icnmedbtn slmtable\" onclick=\"javascript:JSSHOP.ui.popAndFillLbox(getPropIEditDv('" + tSPARArr[iintsp]["_id"] + "','" + tSPARArr[iintsp]["m_file"] + "'));\">";
            } else {
 			tstr += "<img src=\"images/property/" + tSPARArr[iintsp]["m_file_thumb"] + "\" class=\"icnmedbtn slmtable\" onclick=\"javascript:JSSHOP.ui.popAndFillLbox(getPropIEditDv('" + tSPARArr[iintsp]["_id"] + "','" + tSPARArr[iintsp]["m_file"] + "'));\">";
            }
			tstr += "</div>";
            iintsp++;
            // tmpPropImgsArr.push(tSPARArr[iintsp]);
        }
        // tstr += "<div style=\"clear:both\"></div>";
        console.log("setPropImgs.tstr: " + tstr);
        //document.getElementById("dvProdImgs").innerHTML = tstr;
        if(tstr == "" || tstr == null || tstr == "undefined") {
        tstr = "<div class=\"txtClrHdr\">" + stxt[996] + "</div>";
        }
        } else {
            tstr = "<div class=\"txtClrHdr\">" + stxt[996] + "</div>";
            document.getElementById("dvProdImgs").innerHTML = tstr;
        }
        document.getElementById("dvProdImgs").innerHTML = tstr;
        
        // document.getElementById("dvPrpDVID").innerHTML = stxt[985] + " ID: " + prpid;
       tFullPROIDstr = "";
       // put seller icon and name
       tSlrIcon = tmpPropInfoObj["u_icon"];
       tSlrName = tmpPropInfoObj["u_fullname"];
       tFullPROIDstr += "<table><tr><td>";
       tFullPROIDstr += "<img src=\"images/users/s_thumb" + tSlrIcon +  "\" class=\"icnsmllbtn brdrRadius50prcnt\" alt=\"seller icon\" id=\"imgSlrIcn\"> ";
         tFullPROIDstr += "</td><td>";
         tFullPROIDstr += tSlrName;
            tFullPROIDstr += "</td></tr></table>";
         // tSlrName = LZString.decompressFromEncodedURIComponent(currShopsArr[0].u_fullname);
         tFullPROIDstr += "<br>" + stxt[985] + " ID: " + prpid;
         document.getElementById("dvPrpDVID").innerHTML = tFullPROIDstr;

};


var getPropImgs = function() {
tmpFobj = null;
tmpFobj = {};
tmpFobj["ws"] = "where m_pid=? and m_rtype=? and m_catid=?";
tmpFobj["wa"] = [prpid, 5, 5];
// tmpFobj["o"] = "m_vala desc";
oi = getNuDBFnvp("qmedia", 5, null, tmpFobj);
doQComm(oi["rq"], null, "setPropImgs");
};

function rndrUpdtsImgThmbSlction(theRDa, theRDb, theRDc) {
    /*
    
DROP TABLE IF EXISTS `qposts`;
CREATE TABLE `qposts` (
  `_id` int(10) NOT NULL,
  `p_rtype` int(5) NOT NULL,
  `p_coid` int(8) NOT NULL,
  `p_uid` int(12) NOT NULL,
  `p_cat` varchar(12) NOT NULL,
  `p_ptype` varchar(12) NOT NULL,
  `p_ppage` varchar(12) NOT NULL,
  `p_pos` varchar(12) NOT NULL,
  `p_title` text NOT NULL,
  `p_content` longtext NOT NULL,
  `p_image` varchar(300) NOT NULL,
  `p_privacy` varchar(12) NOT NULL,
  `p_author` varchar(12) NOT NULL,
  `p_stat` varchar(12) NOT NULL,
  `p_vars` text NOT NULL,
  `p_ready` int(4) NOT NULL,
  `p_vala` varchar(64) NOT NULL,
  `p_dmodified` varchar(12) NOT NULL,
  `p_dadded` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
    */
    console.log("rndrUpdtsImgThmbSlction: " + theRDa + " " + theRDb + " " + theRDc);
     tThmbStr = "<table style=\"width:100%;\">";
    if(theRDb.indexOf("_id") != -1) {
        tAiretArr = JSON.parse(theRDb);
        var len = tAiretArr.length;
        tstr = "";
        iint = 0;
        while (iint < len) {
           tThmbStr += "<tr><td style=\"width:50%;\"><img src=\"images/ucontent/m_thumb" + tAiretArr[iint]["p_image"] +  "\" class=\"icnmedbtn\"></td>";
            tThmbStr += "<td style=\"width:50%;\"><button class=\"crsrPointer cls_button cls_button-small txtSmall bkgdClrHdr txtClrWhite\" onclick=\"javascript:finishMPupload('updt_" + tAiretArr[iint]["p_image"] + "');JSSHOP.ui.closeLbox();\">" + stxt[70] + "</button></td></tr>";
            iint++;
        }
    }
    tThmbStr += "</table>";
    // document.getElementById("dvPrpImgThmbSlction").innerHTML = tThmbStr;
    JSSHOP.ui.popAndFillLbox(tThmbStr);
}


function rndrNuUpdtIThbSlction(theRDa, theRDb, theRDc) {
    console.log("rndrNuUpdtIThbSlction: " + theRDa + " " + theRDb + " " + theRDc);
    tThmbStr = "<div style=\"width:100%; overflow:hidden;\">"; // Container for floated divs
    if(theRDb.indexOf("_id") != -1) {
        tAiretArr = JSON.parse(theRDb);
        var len = tAiretArr.length;
        iint = 0;
        while (iint < len) {
            if(tAiretArr[iint]["p_ptype"] == "pimage") {

            tChTstr = tAiretArr[iint]["p_title"];
            tUrlDecd = decodeURIComponent(tChTstr);
            tChoppedTstr = tUrlDecd;
            aChoppedTstr = tChoppedTstr;
            if(tChoppedTstr.length > 45) {
                aChoppedTstr = tChoppedTstr.substring(0, 45) + "...";
            }
            tThmbStr += "<div style=\"float:left; width:150px; height:200px; margin:5px; border:1px solid #ccc; text-align:center; cursor:pointer; background-color:#f9f9f9;\" ";
            tThmbStr += "onmouseover=\"this.style.backgroundColor='#e0e0e0';\" ";
            tThmbStr += "onmouseout=\"this.style.backgroundColor='#f9f9f9';\" ";
            tThmbStr += "onclick=\"this.style.backgroundColor='#add8e6'; finishMPupload('updt_" + tAiretArr[iint]["p_image"] + "'); JSSHOP.ui.closeLbox();\">";
            tThmbStr += "<img src=\"images/ucontent/m_thumb" + tAiretArr[iint]["p_image"] + "\" style=\"width:140px; height:120px; margin:5px;\">";
            tThmbStr += "<div style=\"font-size:12px; padding:5px;\">" + (aChoppedTstr || "No Title") + "</div>";
            tThmbStr += "</div>";
        } else {
                             console.log("rndrNuUpdtIThbSlction: skipping pimage type: " + tAiretArr[iint]["p_type"]);
            }  
            iint++;
        }
    }
    tThmbStr += "</div>";
    JSSHOP.ui.popAndFillLbox(tThmbStr);
}


function gotoPropUpdate() {
    eindex("aa-add-post", "pid=aa-add-post&pstprpid=" + prpid + "&quid=" + quid + "&pptype=pimage");
   //  window.location.href = "aa-edit-prop.html?prpid=" + prpid + "&quid=" + quid;
}
function popUpdtsImgThmbSlction() {
    // grab all p_ptype = "pimage" from qposts where p_uid = quid
    tmpFobj = null;
    tmpFobj = {};
    tmpFobj["ws"] = "where p_uid=?";
    tmpFobj["wa"] = [quid];
    oi = getNuDBFnvp("qposts", 5, null, tmpFobj);
    doQComm(oi["rq"], null, "rndrNuUpdtIThbSlction");
}

function fnishMMadd(aa,bb,cc) { 
    getPropImgs();
    JSSHOP.ui.closeLbox();
    };

var finishMPupload = function(theMMum) {
    try {
    

        image = null;
        image = new Image();
        if (theMMum.indexOf("updt_") == 0) {
           image.src = "images/ucontent/s_thumb" + theMMum;
         } else { 
        image.src = "images/property/s_thumb" + theMMum;
         }
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
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_catid", 5);
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
    tLangDDObj["lbl"] =  stxt[629]; // select language
    tLangDDObj["val"] = usrlang;
    tLangDDObj["kvpObj"] = tPrpLngs;
    tLangDDObj["cb"] = "doLangSlct";
    tLangDDObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
    tLangDDObj["lblcls"] = "txtSmall";
    tLangDDObj["valcls"] = "txtSmall";
    tLangDDObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
    tLangDDObj["horvert"] = "horizontal";
    tLangDDObj["icn"] = "noQvalue";
    tLangDDObj["kvIcnsObj"] = {};
    tLangDDObj["kvIcnsObj"]["en_us"] = "&#xe5cd;";
    tLangDDObj["kvIcnsObj"]["spa_spa"] = "&#xe5cd;";
    tLangDDObj["kvIcnsObj"]["fr_fr"] = "&#xe5cd;";
    tLangDDObj["kvIcnsObj"]["pt_pt"] = "&#xe5cd;";

    tLangDDStr = JSSHOP.ui.getNuBSdropDstr(tLangDDObj);
    document.getElementById("dvLangSlct").innerHTML = tLangDDStr;

    tPPrivacyObj = JSSHOP.ui.getBSDDOptsO();
    tPPrivacyObj["ddtype"] = "noQvalue";
    tPPrivacyObj["fld"] = "pprf_prvcy";
    tPPrivacyObj["lbl"] = stxt[101]; // select language
    tPPrivacyObj["val"] = pprf_prvcy.value;
    tPPrivacyObj["kvpObj"] = svftObj["userpriv"];
    tPPrivacyObj["cb"] = "doPropPrvSlct";
    tPPrivacyObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
    tPPrivacyObj["lblcls"] = "txtSmall";
    tPPrivacyObj["valcls"] = "txtSmall";
    tPPrivacyObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
    tPPrivacyObj["horvert"] = "horizontal";
    tPPrivacyObj["icn"] = "noQvalue";
    tPPrivacyStr = JSSHOP.ui.getNuBSdropDstr(tPPrivacyObj);
    document.getElementById("dvPrpPrvSlct").innerHTML = tPPrivacyStr;

    if(document.getElementById("pprf_showloc").value == "5") {
        document.getElementById("tmp_pprf_showloc").checked = true;
    }
    if(document.getElementById("pprf_showslr").value == "5") {
        document.getElementById("tmp_pprf_showslr").checked = true;
    }
    if(document.getElementById("pprf_showftd").value == "5") {
        document.getElementById("tmp_pprf_showftd").checked = true;
    }
/*
istype = document.getElementById("tmp_stype");
iptype = document.getElementById("tmp_ptype");
iselPropStat = document.getElementById("tmp_pstatus"); 


JSSHOP.shared.addCurrSlctObj(svftObj["contract"], istype, stype.value, "noQvalue", "noQvalue");
JSSHOP.shared.addCurrSlctObj(svftObj["propstat"], iselPropStat, pstatus.value, "noQvalue", "noQvalue");
JSSHOP.shared.addCurrSlctObj(svftObj["proptype"], iptype, ptype.value, "noQvalue", "noQvalue");
*/


// tmp_pd_prpdesc.value = LZString.decompressFromEncodedURIComponent(pcontent.value);

getAllPropImgs();
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
    tmpPropInfoObj = thePRetObj;
    // alert("doMPropForm: " + thePRetObj);
// tmp_ptitle.value = thePRetObj.ptitle;
    //  JSSHOP.shared.setFrmVals("property",theRetPArr[0], fillPpropFields);
     for(var gkey in thePRetObj) {
        if(document["property"][gkey]) {
        document["property"][gkey].value = thePRetObj[gkey];
        tmpOldFFvals[gkey] = thePRetObj[gkey];
        }
        } 

        getPrpDescLangs("noQvalue");
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
     ajxspinner.stop();
    spinner.stop();
    theSvdObj = null;
    theSvdObj = document.getElementById(tmpSaveBtnID);
    theSvdObj.innerHTML = stxt[21];
    theSvdObj.disabled = false;
    theSvdObj.className = "cls_button cls_button-medium  bkgdClrHdr txtClrWhite";
    JSSHOP.ui.setCBBClickClr(tmpSvBtnObj,'cls_button cls_button-medium  bkgdClrDGreen txtClrWhite','cls_button cls_button-medium  bkgdClrHdr txtClrWhite', function(){tmpSvBtnObj.innerHTML=stxt[21];tmpSvBtnObj.disabled=false;});
    // JSSHOP.ui.popAndFillLbox("Property saved. " + theTCBtxt);
}

var doNPropEdit = function(tSbtnObj) {
    tmpSaveBtnID = tSbtnObj.id;
    tmpSaveBtnObj = document.getElementById(tmpSaveBtnID);
    tSbtnObj.innerHTML = "";
    tSbtnObj.disabled=true;
    doSpinSet(tSbtnObj.id, "small", null);
    // JSSHOP.shared.setFrmFieldVal("property", "uid", quid);

    JSSHOP.shared.setFrmFieldVal("property", "pdadded", JSSHOP.getUnixTimeStamp());
    // document.getElementById("uid").value = quid;
    tmpFobj = null;
    tmpFobj = {};
    // tTMCcntStr = tinyMCE.activeEditor.getContent();
    // tLZenced = LZString.compressToEncodedURIComponent(tTMCcntStr);
    // tmp_pcontent.value = tLZenced;
    // alert("tmp_pcontent.value: " + tmp_pcontent.value);
       // alert("c_whours.value: " + c_whours.value);
    tmpFobj["knvp"] = JSSHOP.shared.getNuKNVParr(JSSHOP.shared.getDynFrmVals(document["property"], "tmp_"), tmpOldFFvals);
 
    
    
if(currUrlArr.prpid) {
	    tmpFobj["ws"] = "where _id=?";
    tmpFobj["wa"] = [currUrlArr.prpid];
    oi = getNuDBFnvp("property", 7, tSbtnObj.id, tmpFobj);
    
} else {

	    oi = getNuDBFnvp("property", 6, tSbtnObj.id, tmpFobj);
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
var doPropEdit = function(tmpNsaveBtn) {
doNPropEdit(tmpNsaveBtn);
}

var setUPrpDel = function(a, b, c) {
    console.log("setUPrpDel: " + a + " - " + b + " - " + c);
    eindex("pid=aa-edit-uprops", "pid=aa-edit-uprops");
}
var doPropDel = function() {
    if(confirm(stxt[315])) {
              //   procNuUIitem("qposts", "p_rtype", currUrlArr.tpstid, "10", "setUPostDel");
              procNuUIitem("property", "prtype", currUrlArr.prpid, "10", "setUPrpDel");

    } 
};

var doPrpSType = function(tta, ttn, ttc) {
    console.log("doPrpSType: " + tta + " - " + ttn + " - " + ttc);  

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



var procPrpSettings = function(theFldID) {
    console.log("procPrpSettings: " + theFldID);
    theMFldID = theFldID.replace("tmp_","");

    if(document.getElementById(theFldID).checked) {
        JSSHOP.shared.setFrmFieldVal("property", theMFldID, "5");
        procNuUIitem("property",theMFldID,currUrlArr.prpid,"5","doPrpSType");
    } else {
        JSSHOP.shared.setFrmFieldVal("property", theMFldID, "10");
        procNuUIitem("property",theMFldID,currUrlArr.prpid,"10","doPrpSType");
    }
    console.log("procPrpSettings: " + theFldID + " - " + document.getElementById(theFldID).checked);
    // append a span with saved text to the label of the field and have it fade out in 2 seconds
    tMLblID = theFldID.replace("tmp_","lbl_");
    tMLblObj = document.getElementById(tMLblID);
    // append a span with saved text to the label of the field and have it fade out in 2 seconds
    tMLblObj.innerHTML += "<span id='tmpSavedSpan' class='txtSmall'> " + stxt[120] + "!</span>";
    tMSavedSpan = document.getElementById("tmpSavedSpan");
    tMSavedSpan.style.opacity = 1;
    setTimeout(function(){tMSavedSpan.style.opacity = 0;}, 2000);
    setTimeout(function(){tMSavedSpan.remove();}, 3000);


 


}





/* finish editing and adding properties */



var doGmapScrptLoad = async function() { 
tLocLat = tmp_ploclat.value;
tLocLng = tmp_ploclng.value;
try { 
// only if location includes propsgo or titan
 
    if(currGglSVloaded == "no") {
        currGglSVloaded = "yes";
// google script loader
(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
    key: gglSKey,
    v: "beta",
  });
}

      var { Map3DElement, MapMode, Marker3DElement, Marker3DInteractiveElement } = await google.maps.importLibrary("maps3d");
    var { LatLng } = await google.maps.importLibrary("geometry");
     var { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
     var { PinElement } = await google.maps.importLibrary("marker");
    var { DrawingLibrary } = await google.maps.importLibrary("drawing");

} catch(e) {
    console.log("doGmapScrpLoad: " + e);
}
}

var dmyFnishCntLoad = fnishCntLoad;
fnishCntLoad =  function() {
    doGmapScrptLoad();
    
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
tafsb.fcl = function() { tmpSvBtnObj=this;doPropEdit(this);};
euiFFObjArr.push(tafsb);

tcfsb = nCurrFFieldOb();
tcfsb.fid = "btnDEsave";
tcfsb.fty = "button";
tcfsb.fcl = function() { savePDescTrans(this); };
euiFFObjArr.push(tcfsb);

tifsb = nCurrFFieldOb();
tifsb.fid = "btnPIsave";
tifsb.fty = "button";
tifsb.fcl = function() { tmpSvBtnObj=this;doPropEdit(this); };
euiFFObjArr.push(tifsb);

tifsb = nCurrFFieldOb();
tifsb.fid = "btnDoTrans";
tifsb.fty = "button";
tifsb.fcl = function() { doGglTansPost(); };
euiFFObjArr.push(tifsb);

tofsb = nCurrFFieldOb();
tofsb.fid = "btnLOsave";
tofsb.fty = "button";
tofsb.fcl = function() { tmpSvBtnObj=this;doPropEdit(this); };
euiFFObjArr.push(tofsb);

tfok = nCurrFFieldOb();
tfok.fid = "tmp_bhk";
tfok.lid = "lbl_tmp_bhk"; 
tfok.ltxt = "Featured"; 
tfok.fcl = function() { procPrpType(document.getElementById("tmp_bhk")); };
euiFFObjArr.push(tfok); 

 
/*
  `pprf_showslr` varchar(12) NOT NULL,
  `pprf_showftd` varchar(12) NOT NULL,
  `pprf_showloc` varchar(12) NOT NULL,
  */
  tshowslr = nCurrFFieldOb();
    tshowslr.fid = "tmp_pprf_showslr";
    tshowslr.lid = "lbl_pprf_showslr";
    tshowslr.ltxt = stxt[572]; // show slider
    tshowslr.fcl = function() { procPrpSettings("tmp_pprf_showslr"); };
    euiFFObjArr.push(tshowslr);

    tshowftd = nCurrFFieldOb();
    tshowftd.fid = "tmp_pprf_showftd";
    tshowftd.lid = "lbl_pprf_showftd";
    tshowftd.ltxt = stxt[574]; // show featured
    tshowftd.fcl = function() { procPrpSettings("tmp_pprf_showftd"); };
    euiFFObjArr.push(tshowftd);

    tshowloc = nCurrFFieldOb();
    tshowloc.fid = "tmp_pprf_showloc";
    tshowloc.lid = "lbl_pprf_showloc";
    tshowloc.ltxt = stxt[573]; // show location
    tshowloc.fcl = function() { procPrpSettings("tmp_pprf_showloc"); };
    euiFFObjArr.push(tshowloc);


 
JSSHOP.shared.initFrmComps(euiFFObjArr);
// set pd_prptlng field to user language
JSSHOP.shared.setFrmFieldVal("propdescs", "pd_prptlng", usrlang);
JSSHOP.shared.setFrmFieldVal("propdescs", "pd_prpid", currUrlArr.prpid);
JSSHOP.shared.setFrmFieldVal("propdescs", "pd_coid", quid);
JSSHOP.shared.setFrmFieldVal("propdescs", "pd_uid", quid);
    if(currUrlArr.prpid) {
  // alert('fnishCntLoad');
  JSSHOP.ui.showHideElement("dvPrpImgs", "show");
 tmpDOqs = null;
tmpDOqs = {};
tmpDOqs["ws"] = "where _id=?";
tmpDOqs["wa"] = [currUrlArr.prpid];
tmpDOqs["l"] = 45;
oia = getNuDBFnvp("property",5,null,tmpDOqs);
 // newerEPQstr = "SELECT p.*, u.u_icon, u.u_fullname, COALESCE(pd_user.pd_prptitle, pd_def.pd_prptitle) AS pd_prptitle, COALESCE(pd_user.pd_prpdesc,  pd_def.pd_prpdesc)  AS pd_prpdesc FROM property p JOIN quser u ON p.uid = u._id LEFT JOIN propdescs pd_user ON pd_user.pd_prpid = p._id AND pd_user.pd_prptlng = '" +  usrlang + "' LEFT JOIN propdescs pd_def ON pd_def.pd_prpid = p._id AND pd_def.pd_prptlng = '" + deflang + "' WHERE p._id = " + prpid + " AND p.prtype = '5' ORDER BY RAND() LIMIT 20";
// newer   get all property fields and  seller icon and name from quser where property.uid = quser._id and property._id = prpid and property.prtype = 5.
newerEPQstr = "SELECT p.*, u.u_icon, u.u_fullname FROM property p JOIN quser u ON p.uid = u._id WHERE p._id = " + currUrlArr.prpid + " AND p.prtype = '5' ORDER BY RAND() LIMIT 20";
doQComm(newerEPQstr, null, "doMPropForm");

    } else {
        JSSHOP.ui.popAndFillLbox("No property ID found. Please try again.");
    }
    if(u_cat.value == "5") {
        // JSSHOP.ui.showHideElement("dvBHKswitch", "show");
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
    doLangSlct("noQvalue", "pd_prptlng", usrlang);

    try {       

        // alert("doZoneDD: " + thePrx + " " + theSTat);
        if(theSTat == "ok") {
            tLclDstDstr = "<a href=\"javascript:JSSHOP.ui.popAndFillLbox(getTCtryPopStr());\" class=\"txtSmall\">"+stxt[205]+" aa</a><i class=\"small-material-icons\" title=\"expand_more\">&#xe5cf;</i>";
            tLclDstDstr += "<br>";
            tLclDstDstr += "<input type=\"text\" id=\"tmp_country\" name=\"tmp_country\" class=\"txtSmall\" value=\"" + u_country.value + "\" />";

                tCDDACarr = getTCtryKeyValArr();
    setTimeout(function() {
        JSSHOP.ui.doNuAutoComp(document.getElementById("tmp_country"), tCDDACarr, "dvCountryAC");
    }, 1000);
           // tLclDstDstr += "<br>";
 
            tLclDstDstr = getCountryDropStr("country", "doCountryPckChg");

            document.getElementById("dvCountryDD").innerHTML = tLclDstDstr;
        } else {
            document.getElementById("dvCountryDD").innerHTML = "error loading zones";
        }
         doCountryPckChg("dvCountryDD", country.value, country.value);
         getRegionDropStr(document.getElementById("country").value, "state", "setUregionDD");
         } catch(e) {
        alert("doPropZoneDD: " + e);
    }
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
           // document.getElementById("tmp_country").value  = tCCPckSTr;
        
        }
        if(tAOBjVobj["country"]) {
          //   tmp_country.value  = tAOBjVobj["country"];
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
    console.log("showPrpAdrsPop: " + theA + " " + thePSResp + " " + theC);
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
        alert("doGenPEMap: " + e);
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

    // if tCllLatVal.length < 3 or tCllLngVal.length < 3 then set pop up alert to select address first or enter coordinates.
    if((tCllLatVal.length < 3) || (tCllLngVal.length < 3)) {
        // alert("");
        JSSHOP.ui.popAndFillLbox(stxt[733]);
        return;
    }
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

// !! end of map stuff
