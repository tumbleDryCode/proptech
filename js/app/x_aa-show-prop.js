currIContent == "y";
var tmpSocLinksArr = null;
tmpSocLinksArr = "";
tmpSocLinksArr = [];
tmpFBJSLoaded = "n";
tmpFBIDvsArr = [];
tmpFBscrLdd = "n";
tmpSVloclat = "0";
tmpSVloclng = "0";
// https://developers.google.com/maps/documentation/streetview/request-streetview
if(currUrlArr.prpid) {
    prpid = currUrlArr.prpid;
}
var panorama;

function initGMap() {
    tFltdSVlat = parseFloat(tmpSVloclat);
    tFltdSVlng = parseFloat(tmpSVloclng);
    const gpmap = new google.maps.Map(document.getElementById("gpmap"), {
      center: { lat: tFltdSVlat, lng: tFltdSVlng },
      zoom: 15,
      mapTypeId: "satellite",
    });
  
    gpmap.setTilt(45);
  }

function initStreetView() {
    // JSSHOP.ui.closeLbox();
    JSSHOP.ui.showHideElement("dvAPrpImg", "hide");
    JSSHOP.ui.showHideElement("street-view", "show");
 
    console.log("initStreetView: " + tmpSVloclat + " :: " + tmpSVloclng);
    // latpos = ploclat.value;
    // lngpos = ploclng.value;
 // 37.86926 -122.254811
    tFltdSVlat = parseFloat(tmpSVloclat);
    tFltdSVlng = parseFloat(tmpSVloclng);
    panorama = new google.maps.StreetViewPanorama(
        document.getElementById("street-view"),
        {
          position: { lat: tFltdSVlat, lng:  tFltdSVlng },
          pov: { heading: 165, pitch: 0 },
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
          showPanControl: false
        },
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

function doSVLoad(tlat, tlng) {
    console.log("doSVLoad");
    tmpSVloclat = tlat;
    tmpSVloclng = tlng;
     
    // alert("doSVLoad");
    if(currGglSVloaded == "no") {
        currGglSVloaded = "y";
        JSSHOP.loadScript("https://maps.googleapis.com/maps/api/js?key=" + gglSKey, doSVDinit,"js");
        } else {
            initStreetView();
        }
}
function setPropMainImg(tPMImgSRC) {
    JSSHOP.ui.showHideElement("dvAPrpImg", "show");
    JSSHOP.ui.showHideElement("street-view", "hide");
    document.getElementById("imgAPrpMain").src = "images/misc/loading.gif";
    tLderIMG = new Image();
    tLderIMG.src = tPMImgSRC;
    tLderIMG.onload = function() {
        document.getElementById("imgAPrpMain").src = tPMImgSRC;
    }
// scroll to imgAPrpMain
    document.getElementById("imgAPrpMain").scrollIntoView();
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
    console.log("setPropImgs: " + theAIa + " " + theAIb + " " + theAIc);
    console.log("setPropImgs: " + theAIa + " " + theAIb + " " + theAIc);
    console.log("setPropImgs: " + theAIa + " " + theAIb + " " + theAIc);
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
    if(theAIb.indexOf("_id") != -1) {
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
                tImageFstr = "images/property/" + tAiretArr[iirnt]["m_file"];

            tstr += "<div class=\"swiper-slide\"> <a href=\"javascript:setPropMainImg('" + tImageFstr + "');\"><img class=\"rtable\" style=\"width: 100%;min-height:125px;\"  src=\"images/property/s_thumb" + tAiretArr[iirnt]["m_file"] + "\"  alt=\"image\"></a> </div>";
            } else if(tIRcatid == "20") {
                tLZuncd = LZString.decompressFromEncodedURIComponent(tIRFname);
                tLuncthm = LZString.decompressFromEncodedURIComponent(tAiretArr[iirnt]["m_file_thumb"]);
                tstr += "<div class=\"swiper-slide\"> <a href=\"javascript:initStreetView();\"><img class=\"rtable\" style=\"width: 100%;min-height:125px;\"  src=\"" + tLuncthm + "\"  alt=\"image\"></a> </div>";
            } else if(tIRcatid == "25") {
                tLZuncd = LZString.decompressFromEncodedURIComponent(tIRFname);
                tLuncthm = LZString.decompressFromEncodedURIComponent(tAiretArr[iirnt]["m_file_thumb"]);
                //             tstr += "<div class=\"swiper-slide\"> <a href=\"javascript:setPropMainImg('" + tImageFstr + "');\"><img class=\"rtable\" style=\"width: 100%;min-height:125px;\"  src=\"images/property/s_thumb" + tAiretArr[iirnt]["m_file"] + "\"  alt=\"image\"></a> </div>";
                tstr += "<div class=\"swiper-slide\"> <a href=\"javascript:setPropMainImg('" + tLZuncd + "');\"><img class=\"rtable\" style=\"width: 100%;min-height:125px;\"  src=\"" + tLuncthm + "\"  alt=\"image\"></a> </div>";
             }  else {
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
    tPrpMMListObj["fav"] = stxt[21];
    tPrpMMListObj["streetview"] = "Street View";
    
    
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
    retPLstSTr += "<h5 class=\"text-secondary hover-text-primary text-capitalize\" style=\"margin-bottom:0px;\"><a href=\"javascript:eindex('aa-show-prop','pid=aa-show-prop&prpid=" + aprpObj._id + "')\">" + aprpTitle + "</a></h5>";
     retPLstSTr += "<table style=\"width:100%;\"><tbody><tr><td><i class=\"small-material-icons coll-menu-item txtClrHdr txtBold\" alt=\"location_on\" title=\"Location\" style=\"verticle-align:middle;color:#dbddd9;\">&#xe55c;</i></td><td><span class=\"txtSmall txtBold txtClrHdr\">" + aprpLocation + "</span></td><td style=\"text-align:right;\" nowrap=\"nowrap\"><div class=\"price text-primo\" style=\"margin-right:10px;\"><span class=\"text-primary txtSmall\">&euro;</span>&nbsp;&nbsp;<b>" + aprpPrice + "</b></div></td></tr></tbody></table>";
     
    retPLstSTr += "</td><td style=\"vertical-align:top\">" + tDDPrpStr + "</td></tr></table>";
    
     retPLstSTr += "<div class=\"\">";
//   <div id="street-view" style="min-height:400px;min-width:99%;max-width:99%;position:absolute;visibility:visible;display:block;"></div>
    retPLstSTr += "<div id=\"street-view\" style=\"min-height:300px;min-width:99%;max-width:99%;visibility:hidden;display:none;z-index:99999990\"></div>";
      
    retPLstSTr += "<div id=\"dvAPrpImg\" class=\"overlay-black overflow-hidden position-relative crsrPointer hover-zoomer\"> <img src=\"" + currPrpImgsFldr + "/" + aprpPimage + "\" alt=\"pimage\" class=\"img100p\" id=\"imgAPrpMain\">";
    retPLstSTr += "<div class=\"featured bg-primary text-white\">New</div>";
    retPLstSTr += "<div class=\"sale bg-secondary text-white text-capitalize\">" + tDBHObj[aprpType] + "</div>";
    retPLstSTr += "</div>"; // end overlay-black overflow-hidden position-relative
 
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
    
    
    retPLstSTr += "<div class=\"bg-gray quantity px-4 pt-4\">";
    retPLstSTr += "<ul>";
    retPLstSTr += "<li><b>" + aprpSize + "</b> Area m2</li>";
    retPLstSTr += "<li><b>" + aprpBedroom + "</b>" + stxt[922] + "</li>";
    retPLstSTr += "<li><b>" + aprpBathroom + "</b>" + stxt[923] + "</li>"
    retPLstSTr += "<li><b>" + aprpKitchen + "</b>" + stxt[926] + "</li>"; 
    retPLstSTr += "</ul>";
    
    
    
    
    retPLstSTr += "</div>"; // end bg-gray quantity px-4 pt-4
    retPLstSTr += "<div class=\"bkgdClrWhite\">";
    retPLstSTr += "<span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrDlg\" style=\"margin:2px;\" onclick=\"JSSHOP.ui.showShareBox('property'," + istrt + ");\"><i class=\"material-icons txtClrTtl\" alt=\"share\" title=\"share\" value=\"share\">&#xe80d;</i></span>";
    retPLstSTr += "<span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrClrDlg txtClrDlg\" style=\"margin:2px;\" onclick=\"JSSHOP.ui.showMsgBox('uproperty'," + istrt + ",'showMsgSave');\"><i class=\"material-icons txtClrTtl\" alt=\"chat\" title=\"messages\" value=\"messages\">&#xe0b7;</i></span>";
    retPLstSTr += "<span tid=\"dvCoFavBtn\" class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrDlg\" onclick=\"javascript:doRecentFavorite('index.html?pid=aa-show-prop&prpid=" + aprpObj._id + "','" + aprpTitle + "','noQvalue','" + aprpObj._id + "','btnFavs" + aprpObj._id + "');\"><i id=\"btnFavs" + aprpObj._id + "\" class=\"" + currFTclr + "\" alt=\"favorite\" title=\"favorite\" value=\"favorite\">&#xe87d;</i></span>";
    // streetview link http://maps.google.com/maps?q=&layer=c&cbll=
    tSrvLLstr = aprploclat + "," + aprploclng;

    if(tSrvLLstr.length < 5) {
        aprploclat = 40.7128;
        aprploclng = -74.0060;
     
        tSrvLLstr = aprploclat + "," + aprploclng;
    }
    tmpSVloclat = aprploclat;
    tmpSVloclng = aprploclng;
    retPLstSTr += "<span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrDlg\" style=\"margin:2px;\"><a href=\"http://maps.google.com/maps?q=&layer=c&cbll=" + tSrvLLstr + "\"><i class=\"material-icons txtClrTtl\" alt=\"streetview\" title=\"streetview\" value=\"streetview\">&#xe56e;</i> Street View</a></span>";
    
    retPLstSTr += "<div class=\"clsPcntnt\" style=\"max-width:95%\">" + aprpContent + "</div>";

    
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
    tmpFobj = null;
    tmpFobj = {};
    tmpFobj["ws"] = "where m_pid=? and m_rtype=?";
    tmpFobj["wa"] = [prpid, 5];
    tmpFobj["o"] = "m_vala desc";
    oi = getNuDBFnvp("qmedia", 5, null, tmpFobj);
    doQComm(oi["rq"], null, "setPropImgs");
    
    // return retPLstSTr;
    // JSSHOP.ui.setTinnerHTML("dvMainPrpsLst",retPLstSTr);
    // alert('doMPropsList - aaw: ' + aaw);
    // JSSHOP.ads.doGenMapShow();

     
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
anewQstr = "select p.*, u.u_icon from property p, quser u where p._id = " + prpid + " and p.uid = u._id";

doQComm(anewQstr, null, "doMPropDeatils");

return dmyFnishCntLoad;
};