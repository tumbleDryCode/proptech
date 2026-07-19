var currTglBxsObj = {};
var btnClosePop = "<div onclick=\"JSSHOP.ui.closeLbox();\" class=\"slmtable txtClrRed txtBold brdrClrRed crsrPointer\" style=\"float:right\"><i class=\"menu-material-icons txtBold txtClrRed\" alt=\"close\" title=\"close\" value=\"close\">&#xe5cd;</i></div>";
var currSortIdx = {};
var currSortObj = {};
currSortObj["psearch"] = {};
currSortObj["psearch"]["sindex"] = "c_title";
currSortObj["psearch"]["sorder"] = "sortAsc";
currSortObj["msearch"] = {};
currSortObj["msearch"]["sindex"] = "c_location";
currSortObj["msearch"]["sorder"] = "asc";
var currPLMtype = "ebay";
var path = shopDir;
var n = path.lastIndexOf("/");
var q = path.lastIndexOf("?");
if (n >= 0) {
shopDir = path.substring(0, n+ 1);
} else {
shopDir += "/";
}


var doNadaAlert = function(tmpa, tmpb, tmpc) {
alert("doNadaAlert: " + tmpb);
};

var doNada = function(tmpa, tmpb, tmpc) {
    console.log("doNada: " + tmpb);
};
var donada = function(tmpa, tmpb, tmpc) {
    console.log("donada: " + tmpb);
};

function doDummyFocus() {
setTimeout("chkbxDummy.focus()", 500);
}
if(!window.JSSHOP){
var JSSHOP = new Object();
}
if (!window.JSSHOP.core) {
JSSHOP.core = new Object();
}

var getFrcCacheRLoad = function(tmpDRV) {
if(currUrlArr.fc){
return currUrlArr.fc;
} else {
return tmpDRV;
}
};

try {
var tmpNvstr = navigator.userAgent;
if(tmpNvstr.indexOf("JavaFX") != -1) {
isJavaFx = "yes";
}
} catch(e) {
}

var tDLhr = document.location.href;
if(tDLhr.indexOf("recamby.com") != -1) {
 jscssprefix = "";
}

// creates a form component object for uniform
// events and validation
var nCurrFFieldOb = JSSHOP.core.nCurrFFieldOb || function() {
var aCurrFFieldOb = null;
aCurrFFieldOb= {};
aCurrFFieldOb["fid"] = "noQvalue"; // field id
aCurrFFieldOb["fty"] = "noQvalue"; // field type - for future use
aCurrFFieldOb["fdc"] = "cls_input_text"; // field default class
aCurrFFieldOb["ffc"] = "cls_input_text cls_input_text_focus"; // field focus class
aCurrFFieldOb["fdv"] = "noQvalue"; // field default value
aCurrFFieldOb["fda"] = "false"; // field allow validation of default value - default is false
aCurrFFieldOb["fvr"] = "noQvalue"; // field validation - raw regex
aCurrFFieldOb["fve"] = "noQvalue"; // field validation error text
aCurrFFieldOb["fof"] = "noQvalue"; // field onfocus
aCurrFFieldOb["fob"] = "noQvalue"; // field onblur
aCurrFFieldOb["fcl"] = "noQvalue"; // click
aCurrFFieldOb["fku"] = "noQvalue"; // keyup
aCurrFFieldOb["fkd"] = "noQvalue"; // keydown
aCurrFFieldOb["lid"] = "noQvalue"; // labelid
aCurrFFieldOb["ltxt"] = "noQvalue"; // label text
return aCurrFFieldOb;
};
JSSHOP.core.nCurrFFieldOb = nCurrFFieldOb;



var nCurrCnxOb = JSSHOP.core.nCurrCnxOb || function() {
var acurrCnxOb = null;
acurrCnxOb = {};
acurrCnxOb["st"] = "noQvalue"; // status
acurrCnxOb["fn"] = "noQvalue"; // file name
acurrCnxOb["ts"] = "123"; // timepstamp
acurrCnxOb["fc"] = getFrcCacheRLoad("n"); // force cache. check if tc is passed in url
acurrCnxOb["lz"] = "n"; // zip compress
acurrCnxOb["ls"] = "n"; // lcl storage
acurrCnxOb["el"] = "noQvalue"; // element for callback
acurrCnxOb["cb"] = "noQvalue"; // callback
acurrCnxOb["q"] = "noQvalue"; // query string
acurrCnxOb["ur"] = shopDir + "_p/do.php?"; // ajax url
acurrCnxOb["rs"] = "noQvalue"; // response string
acurrCnxOb["er"] = "noQvalue"; // error string
acurrCnxOb["ui"] = "noQvalue"; // current user interface
return acurrCnxOb;
};
JSSHOP.core.nCurrCnxOb = nCurrCnxOb;

currCnxOb = nCurrCnxOb();
currFFielOb = nCurrFFieldOb();
/*
* opens up the item popup
*/


var getNuLclStrg = JSSHOP.core.getNuLclStrg || function(lsObj, lsKey, lsDefVal) {
	try {
        if (localStorage[lsKey]) {
           return localStorage[lsKey];
        } else {
		// alert("getNuLclStrg-nada: " + lsKey);
           return lsDefVal;
        }
	} catch(e) {
	// alert("getNuLclStrg: " + e);
           return lsDefVal;
	}
};
JSSHOP.core.getNuLclStrg = getNuLclStrg;
var clearNuLclStrg = JSSHOP.core.clearNuLclStrg || function(lsObj, lsKey) {
	try {
    if(typeof(Storage) !== "undefined") {
		localStorage.removeItem(lsKey);
    }
	} catch(e) {
           alert("clearNuLclStrg: " + e);
	}
};
JSSHOP.core.clearNuLclStrg = clearNuLclStrg;
var setNuLclStrg = JSSHOP.core.setNuLclStrg || function(lsObj, lsKey, lsVal) {
	try {
	// alert("setNuLclStrg: " + " : " + lsKey + " : " + lsVal);
    if(typeof(Storage) !== "undefined") {
        localStorage[lsKey] = lsVal;
    }
	} catch(e) {
         //   alert("setNuLclStrg: " + e);
	}
};
JSSHOP.core.setNuLclStrg = setNuLclStrg;





function getLclStrg(lsName, lsDefVal) {
        if (localStorage[lsName]) {
           return localStorage[lsName];
        } else {
           return lsDefVal;
        }
}


function clearLclStrg(lsName) {
    if(typeof(Storage) !== "undefined") {
		localStorage.removeItem(lsName);
    }
}
function setLclStrg(lsName, lsVal) {
    if(typeof(Storage) !== "undefined") {
        localStorage[lsName] = lsVal;
    }
}














function doRecentActivity() {
currUrlArr["i_title"] = i_title.value;
currUrlArr["i_img"] = i_img.value;
tmpCUAstr = JSON.stringify(currUrlArr);
if(currRcntActStr.indexOf(tmpCUAstr) != -1) {
// alert("currRcntActStr.doRecentActivity.yes: " + currRcntActStr + " :: currUrlArr: " + tmpCUAstr)
} else {
currRcntActArr.push(currUrlArr);
// alert("currRcntActStr.doRecentActivity.no: " + currRcntActStr + " :: currUrlArr:  " + tmpCUAstr)
JSSHOP.cookies.setCookie("recentActivity",LZString.compressToEncodedURIComponent(JSON.stringify(currRcntActArr)),"30","","","");
}

}

function doFavoritesRndr(favToggle, closeBtn, FavTitle, favCount) {
strRFHtml = "";
tmpImfstr = "";
if(closeBtn == "y") {
// strRFHtml = "<div onclick=\"JSSHOP.ui.closeLbox();\" class=\"slmtable txtClrRed txtBold brdrClrRed crsrPointer\" style=\"float:right\">Close</div>";
}
if(FavTitle == "y") {
strRFHtml += "<div><table><tr><td><span class=\"txtClrDlg\"><img src=\"images/misc/fav_logo.png\" class=\"incbtn\" style=\"max-width:30px;\"></span></td><td><span class=\"txtSMall txtBold\">" + stxt[87] +"</span></td></tr></table></div>";
}

tfi = 0;
fCount = 20;

strRFHtml += "<table class=\"txtSmall txtClrDlg\">";
if(currRcntFavsArr.length) {
if(favCount > 0) {
fCount = favCount;
}
if(fCount > currRcntFavsArr.length) {
fCount = currRcntFavsArr.length;
}
while(tfi < fCount) {
tmpImfstr = "";
theTfavId = currRcntFavsArr[tfi]._id;
theTfavTtl = currRcntFavsArr[tfi].i_title;
theTfavUrl = currRcntFavsArr[tfi].i_url;
theITimgVal = currRcntFavsArr[tfi].i_img;
theIimgVal = "images/misc/example_thumb.png";


if((theITimgVal) && (theITimgVal.length > 3)){
if(theITimgVal == "noQvalue") {
} else {
theIimgVal = theITimgVal;
}
}

tmpImfstr = "<img class=\"icnsmlbtn\" src=\"" + theIimgVal + "\" align=\"absmiddle\" style=\"padding:6px;\">";

// strRFHtml += theTfavId + " :: " + theTfavUrl + " :: " + theTfavTtl + " :: " + theIimgVal + "<br>";
strRFHtml += "<tr><td>" + tmpImfstr + "</td><td><a class=\"txtDecorNone txtSmall txtClrHdr\" href=\"" + theTfavUrl + "\"><span class=\"txtClrHdr\">" + theTfavTtl + "</span></a></td>";
if(favToggle == "y") {
currFTclr = "small-material-icons txtClrRed";
// strRFHtml += "<td><span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrClrDlg txtClrDlg\" onclick=\"javascript:doRecentFavorite('" + theTfavUrl + "','" +  theTfavTtl + "','" + theITimgVal + "','" + theTfavId + "','btnDynFavs" + theTfavId + "');\"><i id=\"btnDynFavs" + theTfavId + "\" class=\"" + currFTclr + "\" alt=\"favorite\" title=\"recent_actors\" value=\"recent_actors\" style=\"font-size:12px;\">&#xe03f;</i></span></td></tr>";
// make it also remove table row
strRFHtml += "<td><span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrClrDlg txtClrDlg\" onclick=\"javascript:doRecentFavorite('" + theTfavUrl + "','" +  theTfavTtl + "','" + theITimgVal + "','" + theTfavId + "','btnDynFavs" + theTfavId + "');this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);\"><i id=\"btnDynFavs" + theTfavId + "\" class=\"menu-material-icons txtBold txtClrRed\" alt=\"close\" title=\"btnClose\" value=\"btnCLose\" style=\"font-size:12px;\">&#xe5cd;</i></span></td></tr>";

}

tfi++;
}
strRFHtml += "</table>";


} else {
strRFHtml += "No Favorites";


}
return strRFHtml;
}

function doRecentFavorite(theTfavUrl, theTfavTtl, theIimgVal, theIidVal, theTfavEl) {
if(currRcntFavsStr.indexOf(theTfavUrl) != -1) {
tii = 0;
nTmpArr = [];
if(currRcntFavsArr.length) {
while(tii < currRcntFavsArr.length) {
if(currRcntFavsArr[tii].i_url == theTfavUrl) {
// alert("a match");
if(document.getElementById(theTfavEl)) { // this is fix for this boolean function add or remove
nTmpArr = removeArrElement(currRcntFavsArr, tii); // in some cases you just want to add
} else {
nTmpArr = currRcntFavsArr; // in some cases you just want to add and not toggle
}
currRcntFavsStr = JSON.stringify(nTmpArr);
currRcntFavsArr = null;
currRcntFavsArr = JSON.parse(currRcntFavsStr);

}
tii++;
}
}
// removeArrElement(currRcntFavsArr, 0);
if(document.getElementById(theTfavEl)) {
document.getElementById(theTfavEl).className = "menu-material-icons txtClrTtl";
}
} else {
    if(currRcntFavsArr.length > 10) {
        // remove last element using splice
        currRcntFavsArr.splice(-1,1);
        }
currFavsObj = null;
currFavsObj = {};
currUrlArr["_id"] = theIidVal;
currUrlArr["i_title"] = theTfavTtl;
currUrlArr["i_url"] = theTfavUrl;
currUrlArr["i_img"] = theIimgVal;
// iif currRcntFavsArr length is greater than 10, remove the last element

currRcntFavsArr.push(currUrlArr);
// currRcntFavsArr.push(currFavsObj);
currRcntFavsStr = JSON.stringify(currRcntFavsArr);
if(document.getElementById(theTfavEl)) {
// document.getElementById(theTfavEl).className = "menu-material-icons txtClrRed";
// JSSHOP.ui.setCBBClickClr(document.getElementById(theTfavEl),'menu-material-icons txtClrHdr','menu-material-icons txtClrRed', function(){void(0)});
JSSHOP.ui.setNuCBBClickClr(document.getElementById(theTfavEl),'menu-material-icons txtClrHdr','menu-material-icons txtClrRed', function(){void(0)}, 500);
}
}
// alert("doRF: " + currRcntFavsStr);
JSSHOP.cookies.setCookie("recentFavs",LZString.compressToEncodedURIComponent(currRcntFavsStr),"30","","","");
}














function doBarCodeScan(tstrScanType) {
try {
app.doBarCodeScan(tstrScanType);
} catch(e) {
alert("only works with Android App and " + e);
}
}

var doPopItemMod = function() {
    loadJSModal("tplates/aa-mod-show-item.html?tt=" + JSSHOP.getUnixTimeStamp());
};

var doPopCartMod = function() {
    loadJSModal("tplates/aa-mod-show-cartadd.html?tt=" + JSSHOP.getUnixTimeStamp());
};

var doCAshow = function(theObj) {
JSSHOP.ui.setCBBClickClr(document.getElementById(theObj),'crsrPointer icndbtn slmtable bkgdClrTtl brdrClrHdr txtClrHdr fltrImgInvClr','crsrPointer icndbtn', function(){void(0)});
    JSSHOP.shared.setFrmVals("qitem",tmpVitemArr[tmpVindex],function() {doCartAddPop()});
};

var setPopItemMod = function(tmpIPopArr) {
    setCurrItemArr(tmpIPopArr);
    JSSHOP.shared.setFrmVals("qitem",tmpIPopArr,function() {doPopItemMod()});
};

var doCurrInfoStr = function() {
try { currPrefPrdV = arrUprefs["prfsSHOPuser"][0].scv; }catch (e) { currPrefPrdV = "r";}
try { currPrefPrdP = arrUprefs["prfsSHOPuser"][0].scp; } catch (e) { currPrefPrdP = "a"; }

currInfoStr += "userID: " + quid + "<br>";
currInfoStr += "Prefs: <br>";
currInfoStr += "Prd Layout: " + currPrefPrdV + "<br>";
currInfoStr += "Price: Order: " + currPrefPrdP + "<br>";
currInfoStr += "Shop Owner:  " + arrAllForms.qco.v[0].c_uid  + "<br>";


return currInfoStr;
};


var setCurrItemArr = function(tmpIarr) {
currItemArr = null;
currItemArr = tmpIarr;
};
var getCurrItemArr = function() {
return currItemArr;
};
var setCurrItemsArr = function(tmpIarr) {
currItemsArr = null;
currItemsArr = tmpIarr;
};
var getCurrItemsArr = function() {
return currItemsArr;
};
var setCurrMItemsArr = function(tmpIarr) {
currMItemsArr = null;
currMItemsArr = tmpIarr;
};
var getCurrMItemsArr = function() {
return currMItemsArr;
};


var getCurrUrl = function() {
var strTurl = "noQvalue";
strCurl = document.location.href;

if(strCurl.indexOf("?") != -1) {
strTurl = strCurl.substring(strCurl.indexOf('?') + 1);
}
// alert("getCurrUrl: " + strTurl);
if(isPhP == "no") {
try  {
strTurl = app.getCurrPageVars("nada");
document.getElementById("fldChallArray").value = strTurl;
strTurl = document.getElementById("fldChallArray").value;
// alert("getCurrUrl strTurl no php: " + strTurl);
} catch(e) {
alert("getCurrUrl: " + e);
}
}
return strTurl;
// if(strTurl == "noQvalue") {} else {}
// newArr = JSSHOP.shared.urlToArray(strTurl);
};



try {
pointP = app.doWVScrollY();
isJApp = "ayes";
console.log("isDaJApp.tryP: " + isJApp + " :: " + pointP);
JSSHOP.loadScript("css/" + jscssprefix + "x_japp.css", JSSHOP.checkLoader,'css');
} catch(e) {
    console.log("isDaJApp: " + e);
}




var pfRet = function(theElem, theResp, marble) {
document.getElementById(theElem).innerHTML = theResp;
};


var doCloseAdd = function(theElem, theResp, marble) {
fullResp = "<div onclick=\"JSSHOP.ui.closeLbox();\" style=\"float:right\">Close</div>" + theResp;
document.getElementById(theElem).innerHTML = fullResp;
setTimeout("JSSHOP.shared.doNuDwEL()", 1000);
};

var loadNurJSModal = function (theMinc, theClass, theMbLCB) {

   if(isJApp == "ayes") {
   } else {
 	 JSSHOP.ui.popAndFillLbox(theClass);
   }
 	JSSHOP.ajax.doNuAjaxPipe("lightbox_content", theMinc, theMbLCB);

};

var loadNuJSModal = function (theMinc, theClass) {
    loadNurJSModal(theMinc, theClass, doCloseAdd);
};

var loadJSModal = function (theMinc) {
    loadNuJSModal(theMinc, "noQvalue");
};




var getShopDir = function(locorrem) {
tmpRetVal = "noQvalue";
tmpShopDir = "noQvalue";
if(locorrem == "local"){
tmpShopDir = document.location.href;
tmpPath = tmpShopDir;
n = tmpPath.lastIndexOf("/");
q = tmpPath.lastIndexOf("?");
if (n >= 0) {
tmpShopDir = tmpPath.substring(0, n+ 1);
} else {
tmpShopDir += "/";
}
} else {
tmpShopDir = JSSHOP.shared.getFrmFieldVal("qco","c_web","noQvalue");
}
tmpRetVal = tmpShopDir;
// alert("tmpRetVal " + tmpRetVal);
return tmpRetVal;
};




JSSHOP.logJSdbug = function(theFunction, theArgs, theMsg) {
tmpStrArgs = "noQvalue";
tmpAStrArgs = "noQvalue";
try {
// fullArgs = theArgs;
tmpStrArgs = JSON.stringify(theArgs);
} catch(e) {
tmpStrArgs = theArgs;
}
if(tmpStrArgs.length > 12) {
tmpAStrArgs = "<span onclick=\"javascript:alert(this.innerHTML);\" style=\"max-width:120px;max-height:90px;overflow:hidden;\">" + tmpStrArgs + "</span>";
} else {
tmpAStrArgs = tmpStrArgs;
}
currDBUGstr += "<br><br>: " + JSSHOP.getUnixTimeStamp() + " :: " + theFunction + " :: " + tmpAStrArgs + " :: " +  theMsg;
};


JSSHOP.logJSerror = function(theError, theArgs, theMsg) {
    try {
// alert(JSON.stringify(theError));
fullArgs = new Array();
if(theArgs.length) {
fullArgs = theArgs;
fullArgs = JSON.stringify(theArgs);
} else {
fullArgs = "noQvalue";
}
// fullSError = theError.toString();
fullSError = JSON.stringify(theError);
if(theError.lineNumber) {
fullSError += "Line: " + theError.lineNumber + "\r\n";
}
if(theError.fileName) {
fullSError += "File: " + theError.fileName + "\r\n";
}
if(theError.msg) {
fullSError += "msg: " + theError.msg  + "\r\n";
}
if(theError.message) {
fullSError += "msg: " + theError.message  + "\r\n";
}
if(theError.constructor) {
fullSError += theError.constructor;
}
        fullerrmsg = "";
        // get the full error ouptut
        fullerrmsg += "Error: " + theError.toString() + "\r\n" + "Message: " + theError.message + "\r\n" + "File: " + theError.fileName + "\r\n" + "Line: " + theError.lineNumber + "\r\n" + "Stack: " + theError.stack + "\r\n" + "Constructor: " + theError.constructor + "\r\n" + "Args: " + fullArgs + "\r\n" + "Msg: " + theMsg;
        
console.log("JSSHOP.logJSerror" + fullSError + " :: " + fullArgs + " :: " +  theMsg + " :: " + fullerrmsg);

// if(JSSHOP.cookies.getCookie("dbug")) {}
     setTimeout(function() {
   ermsg = "epconsole.error: " + fullSError + " :: " + fullArgs + " :: " +  theMsg;
throw new Error(fullerrmsg);
    }, 0);
    } catch (e) {

       alert("JSSHOP.logJSerror.Error: " + e);
    }
};


/* simple search function
*/

var getMainSearch = function(theSstr) {
document.location.href= "index.html?pid=aa-show-search&cid=" + cid + "&sw=" + theSstr + "&st=" + currSearchType;
};
var getPartSearch = function() {

document.location.href= "index.html?pid=aa-show-search&cid=" + cid + "&sw=" + theSstr + "&st=" + currSearchType;
};

JSSHOP.startNuIntrvlEvnt = function(theObjTag, theFunction, theInterval) {
try {
eval(theObjTag + " = " + window.setInterval(theFunction,theInterval));
// theObjTag = window.setInterval(theFunction,theInterval);
} catch(e) {
JSSHOP.logJSerror(e, arguments, "JSSHOP.startNuIntrvlEvnt");
}
};

JSSHOP.stopNuIntrvlEvnt = function(theObjTag) {
try {
window.clearInterval(theObjTag);
theObjTag = null;
} catch(e) {
JSSHOP.logJSerror(e, arguments, "JSSHOP.stopNuIntrvlEvnt");
}
};



JSSHOP.startIntervalEvent = function(theObjTag, theFunction, theInterval) {
try {
timeout_handles[theObjTag] = window.setInterval(theFunction,theInterval);
} catch(e) {
JSSHOP.logJSerror(e, arguments, "JSSHOP.startIntervalEvent");
}
};

JSSHOP.stopIntervalEvent = function(theObjTag) {
try {
window.clearInterval(timeout_handles[theObjTag]);
timeout_handles[theObjTag] = null;
} catch(e) {
JSSHOP.logJSerror(e, arguments, "JSSHOP.stopIntervalEvent");
}
};

JSSHOP.getUnixMiliStamp = function() {
try {
ts = Math.round(new Date().getTime());
return ts;
} catch(e) {
JSSHOP.logJSerror(e, arguments, "JSSHOP.getUnixTimeStamp");
}
};

JSSHOP.getUnixTimeStamp = function() {
try {
ts = Math.round(new Date().getTime() / 1000);
return ts;
} catch(e) {
JSSHOP.logJSerror(e, arguments, "JSSHOP.getUnixTimeStamp");
}
};




JSSHOP.loadScript = function(path, callback, filetype) {
		// alert(loaded_scripts.length);
        n = path.lastIndexOf("/");
        q = path.lastIndexOf("?");
        if (filetype == "js") { //if filename is a external JavaScript file
            var scr = document.createElement('script');
            scr.setAttribute("type", "text/javascript")
            scr.src = path;
        } else if (filetype == "css") { //if filename is an external CSS file
            var scr = document.createElement("link")
            scr.setAttribute("rel", "stylesheet")
            scr.setAttribute("type", "text/css")
            scr.href = path;
        }
        var done = false;
        scr.onload = handleLoad;
        scr.onreadystatechange = handleReadyStateChange;
        scr.onerror = handleError;
        if (n >= 0) {
            if (q >= 0) {
                tid = path.substring(n + 1, q);
            } else {
                tid = path.substring(n + 1);
            }
            scr.id = tid;
        }
        document.getElementsByTagName("head")[0].appendChild(scr);
        // document.body.appendChild(scr);
        function handleLoad() {
            if (!done) {
                done = true;
                callback(path, "ok");
            }
        }

        function handleReadyStateChange() {
            var state;
            if (!done) {
                state = scr.readyState;
                if (state === "complete") {
                    handleLoad();
                }
            }
        }

        function handleError() {
            if (!done) {
                done = true;
                callback(path, "error");
            }
        }
     try {   } catch (e) {
        JSSHOP.logJSerror(e, arguments, "JSSHOP.shared.loadScript");
    }
};

JSSHOP.checkLoader = function(thePath, theMessage) {
    try {
        ttlLoaded = loaded_scripts.length;
        loaded_scripts[ttlLoaded] = thePath;
        //  alert(loaded_scripts[ttlLoaded] + " :: " + loaded_scripts.length + "msg: " + theMessage);
    } catch (e) {
        JSSHOP.logJSerror(e, arguments, "JSSHOP.shared.checkLoader");
    }
};





















/* cookies
*/

if (!window.JSSHOP.cookies) {
    JSSHOP.cookies = new Object();
}

JSSHOP.cookies.clearAllCookies = function(){
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        JSSHOP.cookies.deleteCookie(name,"","");
    }
}

JSSHOP.cookies.getAllCookies = function(){
    var pairs = document.cookie.split(";");
    var cookies = {};
    ccstra = "";
    for (var i=0; i<pairs.length; i++){
      var pair = pairs[i].split("=");
      cookies[(pair[0]+'').trim()] = unescape(pair.slice(1).join('='));
        ccstra += pair[0] + "<br>";
    }
    JSSHOP.ui.popAndFillLbox(JSON.stringify(ccstra));

  };

JSSHOP.cookies.getCookie = function(check_name) {
var cretval = "noQvalue";
var tval;
// if(isPhP == "no") {
if((isPhP == "no") || (isJavaFx == "yes")) {
try {
if(check_name == "quid") {
tval = app.fetchConfValInt(check_name);
} else {
tval = app.fetchConfValString(check_name);
}
cretval = tval;
// default null string for android preferences

if(cretval == "noQvalue")  {
return null;
} else {
return cretval;
}
} catch(e) {
alert("getCookie: " + e);
return null;
}

} else {


	// first we'll split this cookie up into name/value pairs
	// note: document.cookie only returns name=value, not the other components
	var a_all_cookies = document.cookie.split( ';' );
	var a_temp_cookie = '';
	var cookie_name = '';
	var cookie_value = '';
	var b_cookie_found = false; // set boolean t/f default f
	for ( i = 0; i < a_all_cookies.length; i++ )
	{
		// now we'll split apart each name=value pair
		a_temp_cookie = a_all_cookies[i].split( '=' );
		// and trim left/right whitespace while we're at it
		cookie_name = a_temp_cookie[0].replace(/^\s+|\s+$/g, '');

		// if the extracted name matches passed check_name
		if ( cookie_name == check_name )
		{
			b_cookie_found = true;
			// we need to handle case where cookie has no value but exists (no = sign, that is):
			if ( a_temp_cookie.length > 1 )
			{
				cookie_value = unescape( a_temp_cookie[1].replace(/^\s+|\s+$/g, '') );
			}
			// note that in cases where cookie is initialized but no value, null is returned
			return cookie_value;
			break;
		}
		a_temp_cookie = null;
		cookie_name = '';
	}
	if ( !b_cookie_found )
	{
		return null;
	}

}
};


JSSHOP.cookies.setCookie = function(name,value,expires,path,domain,secure)
{

// if(isPhP == "no") {

if((isPhP == "no") || (isJavaFx == "yes")) {
try {

if(name == "quid") {
app.setConfValInt(name,value);
} else {
app.setConfValString(name,value);
}
} catch(e) {
alert("setCookie.E: " + e)
}

} else {
// set time, it's in milliseconds
var today = new Date();
today.setTime( today.getTime() );
/*
if the expires variable is set, make the correct
expires time, the current script below will set
it for x number of days, to make it for hours,
delete * 24, for minutes, delete * 60 * 24
*/
if ( expires )
{
expires = expires * 1000 * 60 * 60 * 24;
}
var expires_date = new Date( today.getTime() + (expires) );
document.cookie = name + "=" +escape( value ) +
( ( expires ) ? ";expires=" + expires_date.toGMTString() : "" ) +
( ( path ) ? ";path=" + path : "" ) +
( ( domain ) ? ";domain=" + domain : "" ) +
( ( secure ) ? ";secure" : "" );

}
};

JSSHOP.cookies.deleteCookie = function(name,path,domain) {
// if(isPhP == "no") {
if((isPhP == "no") || (isJavaFx == "yes")) {
try {

if(name == "quid") {
app.setConfValInt(name,0);
} else {
app.setConfValString(name,"noQvalue");
}
} catch(e) {
alert("setCookie.E: " + e)
}

} else {
if(JSSHOP.cookies.getCookie(name)) document.cookie = name + "=" + ( ( path ) ? ";path=" + path : "") + ( ( domain ) ? ";domain=" + domain : "" ) + ";expires=Thu, 01-Jan-1970 00:00:01 GMT";
}
};


JSSHOP.cookies.deleteAllCookies = function() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
};

if (!window.JSSHOP.shared) {
    JSSHOP.shared = new Object();
}

JSSHOP.shared.endsWith = function(str,suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
};


JSSHOP.shared.objToUrl = function(tUObj) {
tUObjStr = "";
    try {
        for(var apcgkey in tUObj) {
		tUObjStr += "&" + apcgkey + "=" + encodeURIComponent(tUObj[apcgkey]);
		}
        return tUObjStr;
    } catch (e) {
	alert("JSSHOP.shared.objToUrl.error: " + e);
        return "noQvalue";
    }

    };



JSSHOP.shared.urlToArray = function(url) {
// alert(url);
    try {
        tUrl = url.replace("?&", "?");
        taUrl = removeDiacritics(tUrl);
		url = taUrl;
        var request = {};
        var arr = [];
        var pairs = url.substring(url.indexOf('?') + 1).split('&');
        for (var i = 0; i < pairs.length; i++) {
          var pair = pairs[i].split('=');

          //check we have an array here - add array numeric indexes so the key elem[] is not identical.
          if(JSSHOP.shared.endsWith(pair[0], '[]') ) {
             var arrName = pair[0].substring(0, pair[0].length - 2);

             if(!(arrName in arr)) {
                  arr.push(arrName);
                  arr[arrName] = [];
              }

              arr[arrName].push(pair[1]);
              request[arrName] = arr[arrName];
          } else {
            request[pair[0]] = pair[1];
          }
        }
        return request;
    } catch (e) {
	alert("JSSHOP.shared.urlToArray.error: " + url + " :: " + e);
      //   JSSHOP.logJSerror(e, arguments, "JSSHOP.shared.urlToArray");
        return "noQvalue";
    }

    };



JSSHOP.shared.urlToNuArray = function(url) {
// alert(url);
    try {
        tUrl = url.replace("?&", "?");
        taUrl = removeDiacritics(tUrl);
		url = taUrl;
        var request = {};
        var arr = [];
        var pairs = url.substring(url.indexOf('?') + 1).split('&');
        for (var i = 0; i < pairs.length; i++) {
          var pair = pairs[i].split('=');

          //check we have an array here - add array numeric indexes so the key elem[] is not identical.
          if(JSSHOP.shared.endsWith(decodeURIComponent(JSSHOP.shared.encode_utf8(pair[0])), '[]') ) {
             var arrName = decodeURIComponent(pair[0]).substring(0, decodeURIComponent(pair[0]).length - 2);

             if(!(arrName in arr)) {
                  arr.push(arrName);
                  arr[arrName] = [];
              }

              arr[arrName].push(decodeURIComponent(JSSHOP.shared.encode_utf8(pair[1])));
              request[arrName] = arr[arrName];
          } else {
            request[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
          }
        }
        return request;
    } catch (e) {
	alert("JSSHOP.shared.urlToArray.error: " + url + " :: " + e);
      //   JSSHOP.logJSerror(e, arguments, "JSSHOP.shared.urlToArray");
        return "noQvalue";
    }

    };











/* USer Functions */

if (!window.JSSHOP.user) {
    JSSHOP.user = new Object();
}

JSSHOP.user.decPrefCky = function(cString) {
	try {
        strPa = cString.split("x1").join("[{\"");
        strPb = strPa.split("x2").join("\":\"");
        strPc = strPb.split("x3").join("\",\"");
        strPd = strPc.split("x4").join("\":");
        strPe = strPd.split("x5").join(",\"");
        strPf = strPe.split("x6").join("\"}]");
        strPg = strPf.split("x7").join("}]");
	  return strPg;
	}catch(e) {
	JSSHOP.logJSerror(e, arguments, "JSSHOP.user.decPrefCky");
	  return "noQvalue";
	}

};

JSSHOP.user.encPrefCky = function(cString) {

	try {
        strPa = cString.split("[{\"").join("x1");
        strPb = strPa.split("\":\"").join("x2");
        strPc = strPb.split("\",\"").join("x3");
        strPd = strPc.split("\":").join("x4");
        strPe = strPd.split(",\"").join("x5");
        strPf = strPe.split("\"}]").join("x6");
        strPg = strPf.split("}]").join("x7");
	  return strPg;
	}catch(e) {
	JSSHOP.logJSerror(e, arguments, "JSSHOP.user.encPrefCky");
	  return "noQvalue";
	}

};


JSSHOP.user.setCkieUprefs = function(ckyP) {
try {
// alert("setCkieUprefs: " + JSON.stringify(arrUprefs[ckyP]));
if(JSSHOP.cookies.getCookie(ckyP)) {
JSSHOP.cookies.deleteCookie(ckyP, "","");
}
JSSHOP.cookies.setCookie(ckyP, JSSHOP.user.encPrefCky(JSON.stringify(arrUprefs[ckyP])), "30", "", "", "");
} catch(e) {
alert(e);
JSSHOP.logJSerror(e, arguments, "JSSHOP.user.setCkieUprefs");
}
};


JSSHOP.user.setCkiePrfKV = function(dCky,key,val) {
try {
arrUprefs[dCky][0][key] = val;
JSSHOP.user.setCkieUprefs(dCky);
} catch(e) {
JSSHOP.logJSerror(e, arguments, "JSSHOP.user.setCkiePrfKV");
}
};

JSSHOP.user.setCkiePrfDispVal = function(ckyName,key,rowname) {
/*
* swithced true to false since being called before click event
*/
	try {
    	val = false;
    	theRow = document.getElementById(rowname);
    	if (theRow.style.display=="none") {
      val = true;
    	}
	arrUprefs[ckyName][0][key] = val;
	JSSHOP.user.setCkieUprefs(ckyName);
	}catch(e) {
	JSSHOP.logJSerror(e, arguments, "JSSHOP.user.setCkiePrfDispVal");
	}

};


JSSHOP.user.doCkieUprefs = function(daCky) {
	try {
if(JSSHOP.cookies.getCookie(daCky)) {
fldChallArray.value = JSSHOP.cookies.getCookie(daCky);
tval = fldChallArray.value;
arrUprefs[daCky] = JSON.parse(JSSHOP.user.decPrefCky(tval));
} else {
arrUprefs[daCky] = [{"prfDspLmenu":false,"scv":"g","sAL":"y","sAT":"y","sia":"y"}];
JSSHOP.user.setCkieUprefs(daCky);
}
// alert("doCkieUprefs: " + JSON.stringify(arrUprefs[daCky]));
	}catch(e) {
        alert("doCkieUprefs: " + e);
	// JSSHOP.logJSerror(e, arguments, "JSSHOP.user.doCkieUprefs");
	}
};


// cleans the sql statement

var clnDBvp = function(tmpCCKw) {

         if (typeof tmpCCKw === 'string' || tmpCCKw instanceof String) {
		if((tmpCCKw.indexOf("'") != -1) || (tmpCCKw.indexOf("=") != -1)  || (tmpCCKw.indexOf("(") != -1)) {
		console.log("clnDBvp: You dog!: " + tmpCCKw);
		} else {
		}
		}



/*
ntCCWrdA = tmpCCKw.replace("'","");
ntCCWrdB = ntCCWrdA.replace("(","");
ntCCWrdC = ntCCWrdB.replace("=","");
*/
return tmpCCKw;
};



// cunstructs the sql statement

var getNuDBFnvp = function(t,m,da,de) {
icce = 0;
tmpV = [];
tmpFV = [];
xol = null;

xol = {};
xol["m"] = m; // mode
xol["t"] = t; // table
xol["c"] = null; // columns
xol["gb"] = null; // group by
xol["o"] = "_id Desc";
xol["l"] =  100; // limit
xol["knvp"] = null;
if(de != null) {
if(de["ws"] != null) {
xol["ws"] = de["ws"];
}
if(de["wa"] != null) {
// console.log("clnURDBvp: " + JSON.stringify(de["wa"]));
xol["wa"] = de["wa"];
}
if(de["gb"] != null) {
xol["gb"] = de["gb"];
}
if(de["o"] != null) {
xol["o"] = de["o"];
}
if(de["l"] != null) {
xol["l"] = de["l"];
}
if(de["c"] != null) {
xol["c"] = de["c"];
}
if(de["knvp"] != null) {
xol["knvp"] = de["knvp"];
}
} else {
xol["ws"] = "where _id=?";
xol["wa"] = [ppid];

}



if(xol["knvp"] == null){

/**/
// len = xol["knvp"].length;
tlen = arrDBnDocFNames.length;
if(tlen > 0) {
} else {
nint = 0;
if(da != null) {
while(nint < da.length) {
arrDBnDocFNames.push(da[nint]);
arrDBFNames.push(da[nint]);
nint++;
}
}
}

arrDBnDocFNVpar = null;
arrDBnDocFNVpar = [];

while(icce < arrDBnDocFNames.length) {
nnvo = {};

nvk = arrDBnDocFNames[icce];
nvl = document.getElementById(arrDBnDocFNames[icce]).value;
nnvo["t"] = nvk;
nnvo["v"] = nvl;
tmpStrSWA = "";
arrDBnDocFNVpar.push(nnvo);
icce++;
}

xol["knvp"] = null;
xol["knvp"] = arrDBnDocFNVpar;

} // end if xol["knvp"] = null






len = xol["knvp"].length;
arrDBFNames["_id"] = ppid; // _id

if(xol["ws"] != null) {
tmpStrSWA = switchOccurrences(xol["ws"], "?", xol["wa"]);
}
sqs = "";
switch(m) {
case 5:
sqs = "select ";
if(xol["c"] != null) {
if(xol["c"].length > 0) {
sqs += xol["c"] + " ";
} else {
sqs += "* ";
}
} else {
sqs += "* ";
}
tGroupByStr = "";
if(xol["gb"] != null) {
tGroupByStr = " group by " + xol["gb"];
}
sqs += "from " + t + " " + tmpStrSWA + tGroupByStr + " order by " + xol["o"] + " limit " + xol["l"];
break;
case 6:
var iint = 0;
ts = "";
tv = "";
ark = [];
while(iint < len) {
if(xol["knvp"][iint].t == "_id") { // dont include it
} else {
ts += xol["knvp"][iint].t + ",";
// theVstrClean = xol["knvp"][iint].v;
// theVstrClean = removeDiacritics(xol["knvp"][iint].v);
theVstrClean = encodeURIComponent(removeDiacritics(xol["knvp"][iint].v));
tv += "'" + theVstrClean + "',";
}
iint++;
}
sqs = "insert into " + t + "(" +  ts.substring(0, ts.length-1) + ") values (" + tv.substring(0, tv.length-1) + ")";
break;
case 7:
var iint = 0;
ts = "";
tv = "";
ark = [];
while(iint < len) {
if(xol["knvp"][iint].t == "_id") { // dont include it
} else {
ts += xol["knvp"][iint].t + "=";
theVstrClean = removeDiacritics(xol["knvp"][iint].v);
ts += "'" + theVstrClean + "',";
}
iint++;
}
sqs = "update " + t + " set " + ts.substring(0, ts.length-1) + " " + tmpStrSWA;
break;
case 8:
sqs = "delete from " + t + " " + tmpStrSWA;
break;

// trying the replace into function
case 9:


var iint = 0;
ts = "";
tv = "";
ark = [];
while(iint < len) {

ts += xol["knvp"][iint].t + ",";
theVstrClean = xol["knvp"][iint].v;
// theVstrClean = decodeURIComponent(removeDiacritics(xol["knvp"][iint].v));
tv += "'" + theVstrClean + "',";
iint++;
}

sqs = "replace into " + t + " values (" + tv.substring(0, tv.length-1) + ")";
iint = 0;
break;

default:
sqs = "select";
}
xol["rq"] = sqs;

return xol;
};


var doFrmQArr = function(strQ, theElem, theCB) {

nnvo = null;
nnvo = {};
nnvo["f"] = theCB;
nnvo["v"] = strQ;
nnvo["e"] = theElem;
currFrmQArr.push(nnvo);
};


var addFrmQArr = function(theForm, theTmpId, theTmpCB) {
    tmpDOs = null;
    tmpDOs = {};
    tmpDOs["ws"] = "where _id=?";
    tmpDOs["wa"] = [theTmpId];
    oi = getNuDBFnvp(theForm, 5, null, tmpDOs);
    doFrmQArr(oi["rq"],theForm,theTmpCB);
};

var addNuFrmQArr = function(theForm, theTmpFld, theTmpId, theTmpCB) {
    tmpDOs = null;
    tmpDOs = {};
    tmpDOs["ws"] = "where " + theTmpFld + "=?";
    tmpDOs["wa"] = [theTmpId];
    oi = getNuDBFnvp(theForm, 5, null, tmpDOs);
    doFrmQArr(oi["rq"],theForm,theTmpCB);
};

var doDynQArrComm = function(theTarr, strQ, theElem, theCB) {

nnvo = null;
nnvo = {};
nnvo["f"] = theCB;
nnvo["v"] = strQ;
nnvo["e"] = theElem;
theTarr.push(nnvo);

};



var doQArrComm = function(strQ, theElem, theCB) {

nnvo = null;
nnvo = {};
nnvo["f"] = theCB;
nnvo["v"] = strQ;
nnvo["e"] = theElem;
currQcommsArr.push(nnvo);

};


var addQArrComm = function(theForm, theTmpId, theTmpCB) {
    tmpDOs = null;
    tmpDOs = {};
    tmpDOs["ws"] = "where _id=?";
    tmpDOs["wa"] = [theTmpId];
    oi = getNuDBFnvp(theForm, 5, null, tmpDOs);
    doQArrComm(oi["rq"],theForm,theTmpCB);
};





var getCleanAppStr = function(theDASStr) {
document.getElementById("fldChallArray").value = theDASStr;
newCleanAppStr = document.getElementById("fldChallArray").value;
return newCleanAppStr;
};



var pfDRet = function(theElem, theResp, marble) {
document.getElementById("fldChallArray").value = theResp;
aresp = document.getElementById("fldChallArray").value;
// alert("pfDRet " + aresp);
};


/*
navigator.sayswho= (function(){
    var ua= navigator.userAgent, tem,
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    return M.join(' ');
})();
*/

var remp = function(src) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = src;
    document.getElementsByTagName('head')[0].appendChild(script);
};

function doMdlsBoot(ttAobj, ttPPObj, ttCobj) {
    try {
currCModelsObj = JSON.parse(ttPPObj);
    } catch (e) {
        alert("functiondoMdlsBoot: " + e);
    }
}
var fnishCntLoad = function() {
};
var fnishCoForm = function() {
};
var fnishUserForm = function() {
    console.log("fnishUserForm" );
};
var fnishCatForm = function() {
};
var fnishItemForm = function() {
};
var fnishMsgForm = function() {

};
var fnishExtrasForm = function() {
try {

tSPo = {};
/*
tSvaKstr = JSSHOP.shared.getFieldVal("e_vala", "noQvalue");
if(tSvaKstr == "noQvalue") {

} else {
arrSprefs = null;
arrSprefs = JSON.parse(JSSHOP.shared.getFieldVal("e_valb", JSON.stringify(arrSprefs)));
arrSTmpprefs = null;
arrSTmpprefs = JSON.parse(JSSHOP.shared.getFieldVal("e_valb", JSON.stringify(arrSprefs)));

// alert("fnishExtrasForm arrSTmpprefs.layout: " + arrSTmpprefs.layout);

// alert("arrSprefs.layout: " + arrSprefs.layout);
}


if(pid.indexOf("aa-edit") != -1) {
tmpLStyle = arrSTmpprefs.alayout;
} else {
tmpLStyle = arrSTmpprefs.layout;
}

loadCssScript("css/x_custom_" + tmpLStyle + ".css", setNuLoadACTB);
*/
setNuLoadACTB();
} catch(e) {
alert("fnishExtrasForm: " + e);
// setNuLoadACTB();
}
};
var fnishCartForm = function() {
};
var pushActbArr = function(theArr) {
};
var clearActbArr = function() {
};




var loadJCccjs = function(tPath, tCB) {
    try {
        JSSHOP.loadScript("js/app/js_cc.js", donada, "js");
    }
    catch (e) {
        alert("loadJCccjs: " + e);
    }
};


var mfnishCntLoad = function() {

xae = document.getElementsByTagName("ti");
var iint = 0;
while(iint < xae.length) {
nuDW(xae[iint]);
iint++;
}
// alert("u_cat.value: " + u_cat.value);
if(u_cat.value == "5") {
   JSSHOP.ui.showHideElement("dvAMnuLnks", "show");
}


fnishCntLoad();

};








var mfnishCoForm = function() {
// alert("MfinishCoForm");
fnishCoForm();
};
var mfnishUserForm = function() {
fnishUserForm();
};
var mfnishCatForm = function() {
fnishCatForm();
};
var mfnishItemForm = function() {
fnishItemForm();
};
var mfnishMsgForm = function() {
fnishMsgForm();
};
var mfnishExtrasForm = function() {
fnishExtrasForm();
};

var mfnishCartForm = function() {
fnishCartForm();
};

var mpushActbArr = function(tmpActArr) {
pushActbArr(tmpActArr);
};

var mclearActbArr = function() {
clearActbArr();
};





var doNurQComm = function(tComObj) {
try {
strQ = tComObj.q;
if(pipeDir == "noQvalue") {
if(isPhP == "no") {

atmpArrQ = app.getNuDBselectQ(tComObj.q);
document.getElementById("fldChallArray").value = atmpArrQ;
tmpArrQ = document.getElementById("fldChallArray").value;
tmpNewArrO = null;
tmpNewArrO = {};
tmpNewArrO = JSON.parse(tmpArrQ);
var nNAxObj = null;
nNAxObj = tComObj;
nNAxObj["rs"] = tmpNewArrO.data;
if(tComObj.el == "give") {
return tmpArrQ;
} else {
mf = window[tComObj.cb];
mf(nNAxObj);
}

} else {
tmpArrQ = JSSHOP.ajax.doRequestPrep(tComObj);
doLclSych(strQ);
}

} else { // pipeDir is remote
tComObj.ur = pipeDir + "_p/do.php?";
tmpArrQ = JSSHOP.ajax.doRequestPrep(tComObj);
doLclSych(strQ);
}


} catch (e) {
alert(e);
// rstr = shopDir + "_p/jsdo.php?cb=" + tComObj.cb + "&" + tmpQstr;
// remp(rstr);
}
// alert(JSON.stringify(tComObj));
// alert(tmpQstr);

};




var doNuQComm = function(strCQname, isRefrsh, dstamp, strQ, theElem, theCB) {
tmpArrQ = "noQvalue";
tmpQstr = "";


tmpQstr += "t=" + dstamp + "&";
tmpQstr += "f=" + isRefrsh + "&";
if(strCQname == "noQvalue") {
} else {
tmpQstr += "c=" + strCQname + "&";
}
// tmpQstr += "q=" + JSSHOP.shared.utf8_encode(strQ);
tmpQstr += "q=" + strQ;

// alert("doNuQComm: " + tmpQstr);
if(pipeDir == "noQvalue") {
if(isPhP == "no") {
try {
atmpArrQ = app.getDBselectQ(strQ);
document.getElementById("fldChallArray").value = atmpArrQ;
tmpArrQ = document.getElementById("fldChallArray").value;
tmpNewArr = null;
tmpNewArr = [];
tmpNewArr = JSON.parse(tmpArrQ);

if(theElem == "give") {
return tmpArrQ;
} else {
mf = window[theCB];
mf(theElem, tmpArrQ, null);
}
} catch (e) {
rstr = shopDir + "_p/jsdo.php?cb=" + theCB + "&" + tmpQstr;
remp(rstr);
}

} else {
mf = window[theCB];
tmpArrQ = JSSHOP.ajax.doNuAjaxPipe(theElem, "_p/do.php?" + tmpQstr, mf);
doLclSych(strQ);
}

} else { // pipeDir is remote
mf = window[theCB];
tmpArrQ = JSSHOP.ajax.doNuAjaxPipe(theElem, pipeDir + "_p/do.php?" + tmpQstr, mf);
doLclSych(strQ);
}
};


var doQComm = function(strQ, theElem, theCB) {
doNuQComm("noQvalue", "n", "123",  strQ, theElem, theCB);

};


var doRemoteSych = function(tSqstr) {
if((tSqstr.startsWith("select")) || (tSqstr.startsWith("batch")) || (isJApp == "no")) {
dval = "y";
} else {
atmpArrQ = app.getDBselectQ(tSqstr);
document.getElementById("fldChallArray").value = atmpArrQ;
tmpArrQ = document.getElementById("fldChallArray").value;
}
};

var doLclSych = function(tSqstr) {
if((tSqstr.startsWith("select")) || (tSqstr.startsWith("batch")) || (isJApp == "no")) {
dval = "y";
} else {
dval = "n";
/*
atmpArrQ = app.getDBselectQ(tSqstr);
document.getElementById("fldChallArray").value = atmpArrQ;
tmpArrQ = document.getElementById("fldChallArray").value;
*/
}
};



var doQSynchComm = function(strHst, strQ, theElem, theCB) {
try {
// alert(strHst);
mf = window[theCB];
tmpArrQ = JSSHOP.ajax.doNuAjaxPipe(theElem, strHst + "_p/do.php?q=" + JSSHOP.shared.utf8_encode(strQ), mf);
} catch (e) {
alert("doQSynchComm; " + e);
}
};

var doQAppComm = function(strQ, theElem, theCB) {
try {
atmpArrQ = app.getDBselectQ(strQ);
document.getElementById("fldChallArray").value = atmpArrQ;
tmpArrQ = document.getElementById("fldChallArray").value;
if(theElem == "give") {
return tmpArrQ;
} else {
mf = window[theCB];
mf(theElem, tmpArrQ, null);
}
} catch (e) {
alert("Ooops, this should be done in our Android App: " + e);
}
};

var getQArr = function(tType, strQ) {
if(isPhP == "no") {
tmpArrQ = app.getDBselectQ(strQ);
document.getElementById("fldChallArray").value = tmpArrQ;
tmpArrQ = document.getElementById("fldChallArray").value;
pfDRet(null, tmpArrQ, null);
} else {
isJ = JSSHOP.ajax.doNuAjaxPipe(null, "do.php?q=" + strQ, pfDRet);
}
};

var getPageMContArr = function(mType, mID) {
switch(mType) {
	case 5:
	  q = "select * from users where _id = " + mID;
	  break;
	default:
	}
getQArr(mType, q);
};






var  getPVname = function(name){
   if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
      return decodeURIComponent(name[1]);
};




var loadLmenu = function() {

// alert("loadLmenu: " + JSON.stringify(currMenuArr));
// alert("mArrFb " + JSON.stringify(currMenuArr));

      var tmpmainUL = document.createElement("ul");
	tmpmainUL.className="animenu__nav";



      tmpLI = document.createElement("li");
	tmpLI.className="omenuartigo";
	tmpA = document.createElement('a');
	linkText = document.createTextNode("Recent");
	tmpA.appendChild(linkText);
	tmpA.title = "Recent";
	tmpLI.appendChild(tmpA);
	tmpRPUL = document.createElement("ul");

	// tmpRPUL.className="animenu__nav__child";
	tmpLI.appendChild(tmpRPUL);
	tmpmainUL.appendChild(tmpLI);



      tmpLI = document.createElement("li");
	tmpLI.className="omenuartigo";
	tmpA = document.createElement('a');
	linkText = document.createTextNode("Searches");
	// tmpA.appendChild(linkText);
	tmpA.title = "Searches";
	// tmpA.href = "void(";
	tmpLI.appendChild(tmpA);
	tmpRSUL = document.createElement("ul");
	// tmpRSUL.className="animenu__nav__child";
	tmpLI.appendChild(tmpRSUL);
	  tmpmainUL.appendChild(tmpLI);
	// tmpLI.appendChild(tmpUL);
	// tmpmainUL.appendChild(tmpLI);

strCatID =  "tip:ep:Smart Autocomplete|";
strCatName =  "This will be a smart auto-complete search box.|";
strULPID = "";
strULPTtl = "";
strULSID = "";
strULSTtl = "";
fullIDstr = "";
fullIDttl = "";



if(arrAllForms.qextras) {
theLMarr = arrAllForms.qextras;
len = theLMarr.length;
tstr = "";
iint = 0;
inop = 0;
inos = 0;


var tmpSTrSorE = "show";
if(currAdmnMode == "y") {
tmpSTrSorE = "edit";
}

while(iint < len) {
ts = null
ts = theLMarr[iint];







switch(ts.e_rtype) {
case "10":

strLML = "index.html?pid=aa-" + tmpSTrSorE + "-item&itemid=" + ts.e_vala + "&cid=" + ts.e_valb + "&catid=" + ts.e_valc;
strLMTtl = ts.e_vald;


      if(inop < 12) {
      tmpLI = document.createElement("li");
	tmpLI.className="omenuartigo";

	tmpA = document.createElement('a');


	linkText = document.createTextNode(strLMTtl);
	tmpA.appendChild(linkText);
	tmpA.title = strLMTtl + "&nbsp;&nbsp;&nbsp;&nbsp;";
	tmpA.href = strLML;

	tmpLI.appendChild(tmpA);
	tmpRPUL.appendChild(tmpLI);
	}
	inop++;
break;
case "11":
strLML = "index.html?pid=aa-show-search&cid=" + ts.e_valb + "&sw=" + ts.e_vala;
strLMTtl = ts.e_vala;



      tmpLI = document.createElement("li");
	tmpLI.className="omenuartigo";

	tmpA = document.createElement('a');


	linkText = document.createTextNode(strLMTtl);
	tmpA.appendChild(linkText);
	tmpA.title = strLMTtl + "&nbsp;&nbsp;&nbsp;&nbsp;";
	tmpA.href = strLML;

	tmpLI.appendChild(tmpA);
	tmpRSUL.appendChild(tmpLI);
	inos++;
break;
default:
break;
}




iint++;
}

} // end of if arrAllForms.qextras


/*


*/

tmpMColStr = "";
tmpMColStr = doCollsLoad();

if(document.getElementById('mmDdown')) {
tmpMMdownEl = document.getElementById("mmDdown");
strCHtml = "<div onclick=\"JSSHOP.ui.toggleVisibility('mmDdown');\" class=\"slmtable txtClrRed txtBold rxrBigger brdrClrRed crsrPointer\" style=\"float:right;text-align:right;margin-bottom:38px;max-width:14px;\" align=\"right\">X</div>";

tmpMMdownEl.innerHTML = "";
tmpMMdownEl.innerHTML =   strCHtml + tmpMColStr;
toLeft = tmpMMdownEl.offsetLeft + 40;

tmpMMdownEl.style.left= toLeft+"px";

// document.getElementById('mmDdown').innerHTML = tmpMColStr;
document.getElementById('tdLMenu').innerHTML = "";
tmpDV = document.createElement("div");
// tmpDV.className = "collection clsLeftMenu";
tmpDV.className = "collection";
tmpDV.innerHTML = tmpMColStr;
document.getElementById('tdLMenu').appendChild(tmpDV);
// document.getElementById('dvMnuT').appendChild(tmpDV);
}

spinTextDiv.innerHTML = " ..... ";
if(content == "noQvalue") {
    itDitemiD = 0;

     if(JSSHOP.cookies.getCookie("cuarr") !== null) {
         // doFrMBoolStr = "yes";
cuarrkkit = JSSHOP.cookies.getCookie("cuarr");
cuarrstr = LZString.decompressFromEncodedURIComponent(cuarrkkit);
currUrlArr = JSON.parse(cuarrstr);
// set the global vars from the cookie values by looping through the array
for(var aRsRgkey in currUrlArr) {
  window[aRsRgkey] = currUrlArr[aRsRgkey];
}
if(currUrlArr.ditemid) {
// check if "-" is in the ditemid value
if(currUrlArr.ditemid.indexOf("-") != -1) {
ditemidParts = currUrlArr.ditemid.split("-");
itDitemiD = ditemidParts[0];
usrlang = ditemidParts[1];
} else {
itDitemiD = currUrlArr.ditemid;
}
currUrlArr.ditemid = itDitemiD;
currUrlArr.prpid = itDitemiD;
prpid = itDitemiD;
currUrlArr.pid = "aa-show-prop";
pid = "aa-show-prop";
}
if(currUrlArr.tupid) {
currUrlArr.pid = "aa-show-update";
frupid = currUrlArr.tupid;
pid = "aa-show-update";
if(frupid.indexOf("-") != -1) {
frupidParts = frupid.split("-");
tupid = frupidParts[0];
usrlang = frupidParts[1];
} else {
tupid = frupid;
}
}
    if(currUrlArr.debug) {
    JSSHOP.loadScript("js/fl/chrome-extension-beta/firebug-lite-beta.js", JSSHOP.checkLoader,"js");
    }
// delete the cookie
JSSHOP.cookies.deleteCookie("cuarr", "", "");
     }
JSSHOP.loadScript("js/app/" + jscssprefix + "x_" + pid + ".js", doMainContent,"js");
} else {
doMainContent(null, null);
}
};
































var setNuLoadACTB = function() {
if(cid == 0) {} else {}
// doNuMMenuLd("doMnuFnsh");

// doNuMMenuLd("doMnuFnsh");

tmpRAobj = {};
tmpRAobj["rs"] = currRcntActArr;



strCatID =  "tip:ep:Smart Autocomplete|";
strCatName =  "This will be a smart auto-complete search box.|";
strULPID = "";
strULPTtl = "";
strULSID = "";
strULSTtl = "";
fullIDstr = "";
fullIDttl = "";
var tmpSTrSorE = "show";
var arrToFill = null;
arrToFill = currRcntActArr;
tmpRAITitle = "noQvalue";

if(currAdmnMode == "y") {
tmpSTrSorE = "edit";
}



len = arrToFill.length;
if(len > 0) {
tstr = "";
iint = 0;
while(iint < len) {
ts = arrToFill[iint];



if(ts.i_title) {
tmpRAITitle = ts.i_title;
if(tmpRAITitle > 20) {
tmpRAITitle = tmpRAITitle.substring(0, 16) + "...";
}
}

if(ts.itemid) {
tULPID = "index.html?pid=" + ts.pid + "&itemid=" + ts.itemid + "&cid=" + ts.cid + "&catid=" + ts.catid;
strULPID += "ulp:ep:" + tULPID + "|";
strULPTtl += tmpRAITitle + "|";
if(iint < 12) {
tmpIimg = "images/misc/example_thumb.png";
if(ts.i_img) {
if(ts.i_img !== "0") {
tmpIimg = "images/pimgs/s_thumb" + ts.i_img;
}
}
currRcntActHstr += "<img class=\"icnsmlbtn\" src=\"" + tmpIimg + "\" align=\"absmiddle\"> <a class=\"txtDecorNone\" href=\"" + tULPID + "\">" + tmpRAITitle + "</a>::";
}
}

iint++;
}



fullIDstr = strULSID + ":ea:" + strULPID;
fullIDttl = strULSTtl + ":ea:" + strULPTtl;
}
strCatID += fullIDstr + ":ea:";
strCatName += fullIDttl + ":ea:";





strCatID +=  "tip:ep:Suggestions|";
strCatName +=  "Suggestionsss are gathered from existing page arrays.|";


// ijUFeedSearch.value = "hehahs";
currACTBstr = strCatID + "::" + strCatName;

if(pid == "aa-show-category") {

} else {
// alert("strFArr: " + strFArr)
try {
// actbSearch = setTimeout("loadListACTB('" + currACTBstr + "','ijUFeedSearch')", 600);
} catch(e) {
alert("setLoadACTB: " + e);
}

}
  loadLmenu();




};

var setLoadACTB = function(theACb) {

// alert("setLoadACTB " + JSON.stringify(theACb.rs));
strCatID =  "tip:ep:Smart Autocomplete|";
strCatName =  "This will be a smart auto-complete search box.|";
strULPID = "";
strULPTtl = "";
strULSID = "";
strULSTtl = "";
fullIDstr = "";
fullIDttl = "";
var tmpSTrSorE = "show";


if(theACb.rs) {
var arrToFill = null;
arrToFill = JSON.parse(theACb.rs);
// alert("setLoadACTB: " + JSON.stringify(theACb.rs));
arrAllForms["qextras"] = arrToFill;


if(currAdmnMode == "y") {
tmpSTrSorE = "edit";
}



len = arrToFill.length;
tstr = "";
iint = 0;
while(iint < len) {
ts = arrToFill[iint];
tsDTtle = ts.e_vald;
tsATtle = ts.e_vala;

if(tsDTtle.length > 20) {
tsDTtle = tsDTtle.substring(0, 16) + "...";
}
if(tsATtle.length > 20) {
tsATtle = tsATtle.substring(0, 16) + "...";
}
switch(ts.e_rtype) {
case "10":
tULPID = "index.html?pid=aa-" + tmpSTrSorE + "-item&itemid=" + ts.e_vala + "&cid=" + ts.e_valb + "&catid=" + ts.e_valc;
strULPID += "ulp:ep:" + tULPID + "|";
strULPTtl += ts.e_vald + "|";
if(iint < 6) {
currRcntActHstr += "<a href=\"" + tULPID + "\">" + tsDTtle + "</a>::";
}
break;
case "11":
strULSID += "uls:ep:" + ts.e_vala + "|";
strULSTtl += ts.e_vala + "|";
currRcntActHstr += "<a href=\"" + ts.e_vala + "\">" + tsATtle + "</a>::";
break;
default:
break;
}

iint++;
}



fullIDstr = strULSID + ":ea:" + strULPID;
fullIDttl = strULSTtl + ":ea:" + strULPTtl;
}
strCatID += fullIDstr + ":ea:";
strCatName += fullIDttl + ":ea:";





strCatID +=  "tip:ep:Suggestions|";
strCatName +=  "Suggestionsss are gathered from existing page arrays.|";


// ijUFeedSearch.value = "hehahs";
currACTBstr = strCatID + "::" + strCatName;

if(pid == "aa-show-category") {

} else {
// alert("strFArr: " + strFArr)
try {
// actbSearch = loadListACTB(currACTBstr, "ijUFeedSearch");
} catch(e) {
alert("setLoadACTB: " + e);
}

}
 loadLmenu();
};


var doLoadACTB = function() {


// doNuMMenuLd("doMnuFnsh");
    tmpDOs = null;
    tmpDOs = {};
    tmpDOs["l"] = "30";
    tmpDOs["ws"] = "where e_uid=?";
    tmpDOs["wa"] = [quid];
    oi = getNuDBFnvp("qextras",5,null,tmpDOs);
	// alert("doLoadACTB: " + oi["rq"]);
atac = null;
atac = nCurrCnxOb();
atac["q"] = oi["rq"];
atac["cb"] = "setLoadACTB";
atac["ls"] = "localStorage";
// atac["fc"] = "y";
// atac["lz"] = "y";
doNurQComm(atac);
};








// called when all content loaded
var fnish = function(a,b,c) {
// alert("fnish: " + JSON.stringify(c));

accA = null;
accA = [];
tmpAfnish = null;
tmpAfnish = [];
tmpAfnish = JSON.parse(b);

if(isJApp == "no") {} else {}
if(tmpAfnish.data) {
accA = tmpAfnish.data;
} else {
accA = tmpAfnish;
}

// accA = tmpAfnish[0];
// alert("fnish: " + JSON.stringify(accA));



for(var gkey in accA) {
try {
// alert(gkey);
 mf = window[accA[gkey].f];

 mf(accA[gkey].e, JSON.stringify(accA[gkey].v), null);
} catch(e) {
alert("fnish; " + e);
}
}




};



var doWinResizeE = function() {
var tmpSsstr = document.getElementById("dvSearchBox").innerHTML;
tmpSBox = "dvSearchBoxSlim";
if(getViewportWidth() > 500) {
tmpSBox = "dvSearchBox";
// JSSHOP.ui.showHideElement("tdLMenu", "show");
} else {
document.getElementById("dvSearchBoxSlim").innerHTML = "";
document.getElementById("dvSearchBox").innerHTML = "";
// !!UNDO document.getElementById("dvSearchBoxSlim").innerHTML = tmpSsstr;
document.getElementById("dvSearchBoxSlim").className = "txtSmall";
}
// JSSHOP.ui.toggleVisibility("dvSearchBoxSlim");
// doLoadACTB();
};



var finishCntLoad = function(a,b,c) {
try {

document.getElementById(a).innerHTML = b;
// doWinResizeE(); // all things changed on window resize
setTimeout("mfnishCntLoad()", 500);

} catch(e) {
    console.log("finishCntLoad.error: " + e);
    setTimeout("mfnishCntLoad()", 500);
 // alert("finishCntLoad.erroraaa: " + a + " : " + e);
}
};




var doMainContent = function(a,b) {
try {
console.log("doMainContent.pid: " + pid);
if(content == "noQvalue") {

spinTextDiv.innerHTML = " ... ";
fCa = getFArr();
// this should be fixed. authentication.
if((pid.indexOf("edit-") != -1)  && ((quid == 0) || (quid == "noQvalue"))) {
// page requires user login
JSSHOP.loadScript("js/app/" + jscssprefix + "x_login.js", JSSHOP.checkLoader,"js");
JSSHOP.ajax.doNuAjaxPipe("includedContent", "tplates/login.html", finishCntLoad);
return;
} else {
if(currIContent == "y") {

JSSHOP.ajax.doNuAjaxPipe("includedContent", "tplates/" + pid + ".html", finishCntLoad);
 
} else {
// finishCntLoad("lightbox_content","loading...","nada");
}
}

} else {
JSSHOP.ajax.doNuAjaxPipe("includedContent", "content/" + content + ".html", finishCntLoad);
}
} catch(e) {
alert("doMainContent: "  + e);
}
};

var setCoLogo = function() {
    alert("setCoLogo");
try {
if(arrAllForms.qco) {
if(arrAllForms.qco.v[0].c_logoimg) {
if(arrAllForms.qco.v[0].c_logoimg !== "0") {
document.getElementById("imgMainLogo").src = "images/pimgs/s_" + arrAllForms.qco.v[0].c_logo;
}
}
}
} catch(e) {
alert("setCoLogo: " + e);
}
};

var fillDynFrmArr = function(theRobj) {

    // console.log("fillDynFrmArr: " + JSON.stringify(theRobj));
    fillMFormArr(theRobj);
    // setTimeout("JSSHOP.ajax.doDynMainContent()", 500);
};

var fillMFormArr = function(theRobj) {
try {
tmpAforms = [];
tmpAforms = JSON.parse(theRobj.rs);
console.log("fillMFormArr: " + JSON.stringify(tmpAforms));
arrAllForms = tmpAforms;
tFerr = "qco";
if(arrAllForms.qco) {
    tFerr = "qco";

// JSSHOP.shared.setFrmVals("qco",arrAllForms.qco.v[0],function() {void(0) });

}
if(arrAllForms.quser) {
    tFerr = "quser";
JSSHOP.shared.setFrmVals("quser",arrAllForms.quser.v[0],function() { void(0) });
currQUsrObj = arrAllForms.quser.v[0];
// set div dvUMicn innerHTML to rounded s_thumb + quser.v[0].u_icon
document.getElementById("dvUMicn").innerHTML = "<img src=\"images/user/s_thumb" + arrAllForms.quser.v[0].u_icon + "\" class=\"icnRnd26 crsrPointer\" alt=\"User Icon\" style=\"margin-left:4px;margin-right:4px;margin-top:4px;\" title=\"" + arrAllForms.quser.v[0].u_fullname + "\">";
}

if(arrAllForms.qcat) {
    tFerr = "qcat";
JSSHOP.shared.setFrmVals("qcat",arrAllForms.qcat.v[0],function() { void(0) });
}
if(arrAllForms.qitem) {
    tFerr = "qitem";
JSSHOP.shared.setFrmVals("qitem",arrAllForms.qitem.v[0],function() { void(0) });
}
if(arrAllForms.qmsgs) {
    tFerr = "qmsgs";
JSSHOP.shared.setFrmVals("qmsgs",arrAllForms.gmsgs.v[0],function() {  void(0) });
}


if(arrAllForms.qextras.v[0]) {
    console.log("fillMFormArr.qextras: " + JSON.stringify(arrAllForms.qextras.v[0]));
    tFerr = "qextras";
JSSHOP.shared.setFrmVals("qextras",arrAllForms.qextras.v[0],function() { fnishExtrasForm() });
} else {
    console.log("fillMFormArr.qextras: noQvalue");
fnishExtrasForm()
}
/*
if(arrAllForms.qcartitem) {
JSSHOP.shared.setFrmVals("qcartitem",arrAllForms.qcartitem.v[0],);
}

*/

 //  setNuLoadACTB();



//
 // doLoadACTB();

} catch(e) {
    // alert("fillMFormArr: " + e + " :: " + tFerr);
    console.log("fillMFormArr.error: " + e + " :: " + tFerr);
    if(content == "noQvalue") {
        JSSHOP.loadScript("js/app/" + jscssprefix + "x_" + pid + ".js", doMainContent,"js");
        } else {
        doMainContent(null, null);
        }
      // setNuLoadACTB();
    }
};










var doFrmQLoad = function(thePath, theMessage) {

try {

doCFrmQ = nCurrCnxOb();
doCFrmQ["q"] = "batch" + JSON.stringify(currFrmQArr);
//alert("doFrmQLoad:  " + JSON.stringify(currFrmQArr));
doCFrmQ["cb"] = "fillMFormArr";
doNurQComm(doCFrmQ);
} catch(e) {
 alert("doFrmQLoad; " + e + " " + doCFrmQ["q"]);
}
};


function getCurrITEMID(tmpPIDUrl) {
tmpiid = "0";
tmpcurrUrlArr = null;
tmpcurrUrlArr = {};
try {
if(tmpPIDUrl == "noQvalue") {
} else {
tmpcurrUrlArr = JSSHOP.shared.urlToArray(tmpPIDUrl);
if(tmpcurrUrlArr.itemid){
tmpiid = tmpcurrUrlArr.itemid;
}
}
} catch(e) {
alert("getCurrITEMID: " + e);
return tmpiid;
}
return tmpiid;
}


function getCurrPID() {
tmppid = "index_main";
tmpcurrUrlArr = null;
tmpcurrUrlArr = {};
try {
tmpPIDUrl = getCurrUrl();
if(tmpPIDUrl == "noQvalue") {
} else {
tmpcurrUrlArr = JSSHOP.shared.urlToArray(tmpPIDUrl);
if(tmpcurrUrlArr.pid){
tmppid = tmpcurrUrlArr.pid;
}
}
} catch(e) {
alert("getCurrPIDerror: " + e)
}
return tmppid;
}


var setCartIplugs = function() {
if(currCartIttl > 0) {
if(currCartIttl > 99) {
tmpCITstr = "+99";
}

// not using yet
// spnCIcount.className = "icnbtn slmtable txtSmall txtClrHdr bkgdClrDlg brdrClrRed";
// JSSHOP.ui.setTinnerHTML("spnCIcount", tmpCITstr);
if(currCartTShow == "y") {

/*
if(document.getElementsByName("spnCtotal")) {
intTiv = 0;
while(intTiv < document.getElementsByName("spnCtotal").length) {
retInhm = "<span style=\"float: right\"><i class=\"menu-material-icons txtClrHdr\" alt=\"shopping_cart\" title=\"shopping_cart\">&#xe8cc;</i> <span>  = <u>" + currCartTtl + "</u></span></span>";
document.getElementsByName("spnCtotal")[intTiv].innerHTML = retInhm;
intTiv++;
}
}
*/
}
}
};


var setMsgsIArr = function(a,b,c) {
try {

currMsgsIArr = JSON.parse(b);
} catch(e) {
alert("currMsgsIArr: " + e);
}
};



var setCartIArr = function(a,b,c) {
try {

currCartIArr = JSON.parse(b);
tmpCIttls = JSSHOP.shop.renderNuCartItems("y", "n", 60);
if(tmpCIttls.indexOf("::") != -1) {
var tciap = tmpCIttls.split("::");
currCartIttl = Math.round(tciap[0]);
tmpCITstr = currCartIttl;
currCartTtl = tciap[1];
if(currCartIttl > 0) {
setCartIplugs();
} else {
// spnCIcount.className = "nada";
// JSSHOP.ui.setTinnerHTML("spnCIcount", "");
// spnCtotal.className = "nada";
// JSSHOP.ui.setTinnerHTML("spnCtotal", "");
}
}
if(a == "y") {
JSSHOP.cookies.setCookie("cCartStr",LZString.compressToEncodedURIComponent(b),"30","","","");
}
} catch(e) {
console.log("setCartIArr.error: " + e);
//alert("setCartIArr: " + e);
}
};




var doBootLoad = function() {

try {

JSSHOP.user.doCkieUprefs('prfsSHOPuser');

nShopDir = shopDir.replace("admin/", "");
shopDir = nShopDir;




if(arrUprefs["prfsSHOPuser"][0].tglSearchType) {
currSearchType = arrUprefs["prfsSHOPuser"][0].tglSearchType;
}


tmpUrl = getCurrUrl();
if(tmpUrl == "noQvalue") {
} else {
currUrlArr = JSSHOP.shared.urlToNuArray(tmpUrl);



if(currCoDcidId > 0) {
    dcid = currCoDcidId;
    currUrlArr.dcid = currCoDcidId;
}
if(currUrlArr.prpid) {
    prpid = currUrlArr.prpid;
    // addFrmQArr("property", currUrlArr.prpid, "fnishPropForm");

}

// adding variable fc [index.html?...&fc=y] to end of url
// forces refreshing cache and using non compressed .js files.
if(currUrlArr.fc){
forceCache = currUrlArr.fc;
jscssprefix = ""; // null the .js file prefix. use normal js files.
}
if(currUrlArr.pid){ // page in tplates/folder
pid = currUrlArr.pid;
}

console.log("currPurlObj.last: " + JSON.stringify(currPUrlObj));
currPUrlObj = null;
currPUrlObj = {};


if((currUrlArr.cid) && (currUrlArr.cid !== "0")){ // company ID

cid = currUrlArr.cid;
  addFrmQArr("qco", cid, "fnishCoForm");
} else {
 if((currUrlArr.cuid) && (currUrlArr.cuid !== "0")){ // contact user ID
 cuid = currUrlArr.cuid;
addFrmQArr("qco", cuid, "fnishCoForm");
}
if((currUrlArr.tpid) && (currUrlArr.tpid !== "0")){ // contact user ID
     cid = currUrlArr.tpid;
    addFrmQArr("qco", currUrlArr.tpid, "fnishCoForm");
    }




}

if(currUrlArr.dcid) {
    cid = currUrlArr.dcid;
    currUrlArr.cid = currUrlArr.dcid;
    currUrlArr.tpid = currUrlArr.dcid;
    tpid = currUrlArr.dcid;
    pid = "aa-show-place";
    // addFrmQArr("qco", cid, "fnishCoForm");
     JSSHOP.shared.setFrmVals("qco",JSON.parse(currCoDcidStr),function() {void(0)});

  }




if(currUrlArr.content){
content = currUrlArr.content;
}
if(currUrlArr.catid){ // category ID
catid = currUrlArr.catid;
addFrmQArr("qcat", catid, "fnishCatForm");
}
if(currUrlArr.itemid){ // ...
itemid = currUrlArr.itemid;
addFrmQArr("qitem", itemid, "fnishItemForm");

// oiaqB = "select * from qitem, qmsgs, qco where qitem._id = " + itemid + " and qmsgs.msg_prodid = '" + itemid + "' and qco._id = " + cid + " group by qmsgs.msg_prodid order by qitem._id desc limit 50;";
// doQComm(oiaqB, null, "doNadaAlert");

}

if(currUrlArr.ocartid){ // ...
ocrtid = currUrlArr.ocartid;

    tmpDOs = null;
    tmpDOs = {};
    tmpDOs["ws"] = "where msg_cartid=?";
    tmpDOs["wa"] = [ocrtid];
    oi = getNuDBFnvp("qmsgs",5,null,tmpDOs);
    doQComm(oi["rq"], "y", "setMsgsIArr");

// oiaqB = "select * from qitem, qmsgs, qco where qitem._id = " + itemid + " and qmsgs.msg_prodid = '" + itemid + "' and qco._id = " + cid + " group by qmsgs.msg_prodid order by qitem._id desc limit 50;";
// doQComm(oiaqB, null, "doNadaAlert");


}

}



if(JSSHOP.cookies.getCookie("quid") !== null) {
quid = JSSHOP.cookies.getCookie("quid");
addFrmQArr("quser", quid, "fnishUserForm");
// no need to get thif for now
if(pid.indexOf("edit") != -1) {

}
}
if(JSSHOP.cookies.getCookie("cuid") !== null) {
// if(pid == "aa-edit-uinfo"){
if(pid.indexOf("edit") != -1){}
cuid = JSSHOP.cookies.getCookie("cuid");
// addFrmQArr("qco", cuid, "fnishCoForm");

}


if(JSSHOP.cookies.getCookie("cartID") == null) {
tmpcid = Math.random().toString(36).slice(2);
JSSHOP.cookies.setCookie("cartID",tmpcid,"30","","","");
cartID = tmpcid;
} else {




cartID = JSSHOP.cookies.getCookie("cartID");
if((currUrlArr.cid) && (currUrlArr.cid !== "0")){ // company ID

if(JSSHOP.cookies.getCookie("cCartStr") !== null) {
currCartStr = LZString.decompressFromEncodedURIComponent(JSSHOP.cookies.getCookie("cCartStr"));
if(currCartStr.length > 5) {
 setCartIArr("n", currCartStr, "n");
}
} else {


    tmpDOs = null;
    tmpDOs = {};
    tmpDOs["ws"] = "where ci_uid=? and ci_coid=? and ci_cartqty >? and ci_rtype=? and ci_cartid=?";
    tmpDOs["wa"] = [quid,cid,0,5,cartID];
    oi = getNuDBFnvp("qcartitem",5,null,tmpDOs);
    doQComm(oi["rq"], "y", "setCartIArr");
}

    //  doFrmQArr(oi["rq"], "qcartitem","fnishCartForm");
}
}




    tmpEDOs = null;
    tmpEDOs = {};
    tmpEDOs["ws"] = "where e_uid=? and e_vala=?";
    tmpEDOs["wa"] = [cid,"arrSprefs"];
    oi = getNuDBFnvp("qextras",5,null,tmpEDOs);
    doFrmQArr(oi["rq"], "qextras","fnishExtrasForm");

if(JSSHOP.cookies.getCookie("usrlang") !== null) {
usrlang = JSSHOP.cookies.getCookie("usrlang");
} else {
tmplang = navigator.language  || navigator.userLanguage;
if((tmplang.indexOf("pt-")!= -1) || (tmplang.indexOf("pt_")!= -1)) {
usrlang = "pt_pt";
}
if((tmplang.indexOf("es-")!= -1) || (tmplang.indexOf("es_")!= -1)) {
usrlang = "spa_spa";
}
}

if(usrlang == "pt_pt") {
usrcc = "PT";
}
if(currUrlArr.ul) {
usrlang = currUrlArr.ul;
}
if(JSSHOP.cookies.getCookie("recentActivity") !== null) {
// currRcntActStr = JSSHOP.cookies.getCookie("recentActivity");
currRcntActStr = LZString.decompressFromEncodedURIComponent(JSSHOP.cookies.getCookie("recentActivity"));
if(currRcntActStr.length > 5) {
// alert("currRcntActStr.boot: " + currRcntActStr);
currRcntActArr = JSON.parse(currRcntActStr);
}
}


if(JSSHOP.cookies.getCookie("recentFavs") !== null) {
currRcntFavsStr = LZString.decompressFromEncodedURIComponent(JSSHOP.cookies.getCookie("recentFavs"));
if(currRcntFavsStr.length > 5) {
currRcntFavsArr = JSON.parse(currRcntFavsStr);
currFavsIdstr = "";
tii = 0;
if(currRcntFavsArr.length > 0) {
while(tii < currRcntFavsArr.length) {
currFavsIdstr += currRcntFavsArr[tii]._id + "::";
tii++;
}
}
}



// alert("currRcntFavsStr.boot: " + currFavsIdstr + "::" + currRcntFavsStr);
}


if(JSSHOP.cookies.getCookie("currSortObj") != null) {
      currSortObj = JSON.parse(LZString.decompressFromEncodedURIComponent(JSSHOP.cookies.getCookie("currSortObj")));
   }
// alert("tufilepath: " + (newError).fileName);



  if(currUrlArr.ditemid) {
    console.log("doBootLoad.currUrlArr.ditemid: " + currUrlArr.ditemid);
    fprpid = currUrlArr.ditemid;
    // split at - if exists
    if(fprpid.indexOf("-") != -1) {
        console.log("doBootLoad.fprpid: " + fprpid);
    fprpidA = fprpid.split("-");
    currUrlArr.ditemid = fprpidA[0];
    currUrlArr.usrlang = fprpidA[1];
    usrlang = fprpidA[1];
    }
    prpid = currUrlArr.ditemid;
    currUrlArr.prpid = currUrlArr.ditemid;
    pid = "aa-show-prop";
    // set a
    // addFrmQArr("qitem", itemid, "fnishItemForm");
   }
   if(currUrlArr.tupid) {
    frupid = currUrlArr.tupid;
    if(frupid.indexOf("-") != -1) {
    frupidA = frupid.split("-");
    currUrlArr.tupid = frupidA[0];
    currUrlArr.usrlang = frupidA[1];
    usrlang = frupidA[1];
    } else {
    tupid = frupid;
    }
    pid = "aa-show-update";
    // addFrmQArr("qitem", itemid, "fnishItemForm");
   }
   console.log("doBootLoad.usrlang: " + usrlang);
tdhref = document.location.href;
if(tdhref.indexOf("/admin") != -1) {
JSSHOP.loadScript("../js/app/" + jscssprefix + "aa-" + usrlang + ".js", doFrmQLoad,"js");
} else {
JSSHOP.loadScript("js/app/" + jscssprefix + "aa-" + usrlang + ".js", doFrmQLoad,"js");
}
// alert("doBootLoad: " + jscssprefix + "aa-" + usrlang + ".js");
} catch(e) {
alert("doBootLoad error: " + e)
// JSSHOP.logJSerror(e, arguments, "doBootLoad");
// JSSHOP.loadScript("js/" + jscssprefix + "aa-" + usrlang + ".js", doFrmQLoad,"js");

}
};

JSSHOP.ajax.doAjaxGVals = function(tDlMStr, tDlMUstr) {

	// JSSHOP.ui.showHideElement("dvACfull", "hide");
    JSSHOP.ui.closePopMenus();
    scrollToElement("dvHdr");
    currFrmQArr = null;
    currFrmQArr = "";
currFrmQArr = [];
// arrAllForms = null;
// arrAllForms = {};
currSortIdx = null;
currSortIdx = "";
currSortIdx = {};
// cid = "0";
catid = "0";
content = "noQvalue";
currUrlArr = null;
currUrlArr = "";
currUrlArr = {};
pid = "index_main";
try {


if((tDlMStr == pid) && (pid !== "index_main")) {
tDlMObj = JSSHOP.shared.urlToArray(document.location.href);
} else if(tDlMStr == "noQvalue") {
tDlMObj = JSSHOP.shared.urlToArray(document.location.href);
} else {
tDlMObj = JSSHOP.shared.strToObj(tDlMUstr);

}
for(var aRsRgkey in tDlMObj) {
dcdedRk = decodeURIComponent(tDlMObj[aRsRgkey]);
$aRsRgkey = dcdedRk;
window[aRsRgkey] = dcdedRk;
currUrlArr[aRsRgkey] = dcdedRk;
// currUrlArr[aRsRgkey] = decodeURIComponent(JSSHOP.shared.encode_utf8(tDlMObj[aRsRgkey]));
}

if(tDlMObj.pid) {
pid = tDlMObj.pid;
}
if(tDlMObj.content) {
// alert("content: " + content);
content = tDlMObj.content;
currUrlArr["content"] = content;
}

// to delete
/*
switch(tDlMStr) {
case "aa-add-trip-pickup":
currUrlArr.ttid = undefined;
delete currUrlArr["ttid"];
currUrlArr.ttype = "pickup";
pid = "aa-add-trip";
break;
case "aa-edit-trip":
pid = "aa-edit-trip";
break;
case "aa-edit-trips":
pid = "aa-edit-trips";
break;

default:
break;
}
// end to delete
*/

 doFrMBoolStr = "no";



if((currUrlArr.cuid) && (currUrlArr.cuid !== "0")){ // contact user ID
    cuid = currUrlArr.cuid;
    doFrMBoolStr = "yes";
    // addFrmQArr("qco", cuid, "fnishCoForm");
    }
    if((currUrlArr.tpid) && (currUrlArr.tpid !== "0")){ // contact user ID
        cid = currUrlArr.tpid;
        doFrMBoolStr = "yes";
        // addFrmQArr("qco", currUrlArr.tpid, "fnishCoForm");

    } else if((currUrlArr.cid) && (currUrlArr.cid !== "0")){ // contact user ID
        cid = currUrlArr.cid;
        doFrMBoolStr = "yes";
        // addFrmQArr("qco", currUrlArr.cid, "fnishCoForm");
    }
    // if cid > 0 and if qco _id does not equal cid, then add qco to currFrmQArr
    tCidChckId = JSSHOP.shared.getFrmFieldVal("qco", "_id", 0);

    if((cid > 0) && (tCidChckId !== cid)){
       //  alert("cid: " + cid + " tCidChckId: " + tCidChckId);
        doFrMBoolStr = "yes";
             addFrmQArr("qco", cid, "fnishCoForm");

    }


    if(currUrlArr.catid){ // category ID
    catid = currUrlArr.catid;
    doFrMBoolStr = "yes";
    addFrmQArr("qcat", catid, "fnishCatForm");
    }
    if(currUrlArr.prpid){ // category ID
        prpid = currUrlArr.prpid;
        // doFrMBoolStr = "yes";
       //  addFrmQArr("property", prpid, "fnishCoForm");
        }
    if(currUrlArr.itemid){ // ...
    itemid = currUrlArr.itemid;
    doFrMBoolStr = "yes";
    addFrmQArr("qitem", itemid, "fnishItemForm");

    }
    if(doFrMBoolStr == "yes") {
        console.log("doFrMBoolStr: " + doFrMBoolStr);
doCFrmQ = nCurrCnxOb();
doCFrmQ["q"] = "batch" + JSON.stringify(currFrmQArr);
//alert("doFrmQLoad:  " + JSON.stringify(currFrmQArr));
doCFrmQ["cb"] = "fillDynFrmArr";
doNurQComm(doCFrmQ);
    } else {
        JSSHOP.ajax.doDynMainContent();
    }
} catch(e) {
    alert("doAjaxGVals: " + e);
    }
};


tdLHR = document.location.href;
if(tdLHR.indexOf("clean.html") != -1) {
isAclean = "y";
} else {
    if(tdLHR.indexOf("?") != -1) {
       goHome();
    } else {
setTimeout("doBootLoad()", 800);
    }
}
