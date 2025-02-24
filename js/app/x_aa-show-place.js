var currCoLinksArr = [];
var currCoLinksArr = [];
var currWorkHobj = {};
var currWorkHDiv;
var currWorkHHour = "01";
var currWorkHMin = "01";
var euiFFObjArr = null;
var euiFFObjArr = [];
var currStartLat = "";
var currStartLng = "";
var currPlaceObj = {};
if(currUrlArr.tpid) {
currPgTitle = "Edit Place";
currPgIcon = "xe3c9";
} else {
currPgTitle = "Add Place";
currPgIcon = "xe145";
}
if(currUrlArr.cid) {
cid = currUrlArr.cid;
tpid = currUrlArr.cid;
} else {
cid = 0;
}
tmpWHHsel = "";
tmpWHHsel = document.createElement("div");
tmpWHMsel = "";
tmpWHMsel = document.createElement("div");

var euiFFObjArr = null;
var euiFFObjArr = [];

ck_name = /^[A-Za-z0-9 ]{3,20}$/;
ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
ck_username = /^[A-Za-z0-9_]{3,20}$/;
ck_password =  /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;

var tpid = 0;
 
var LeafIcon = L.Icon.extend({
    options: {
       
        iconSize:     [66, 66],

        iconAnchor:   [-1, -1],

        popupAnchor:  [-3, -16]
 
    }
});

if(currUrlArr.tpid) {
tpid = currUrlArr.tpid;
}

function fillPAddrssLst(tFPFa, tFPFb, tFPFc) {
try {
    tHdrArr = null;
tHdrArr = "";
tHdrArr = [];
tHdFObj = {};	
tHdFObj["fld"] = "_id";
tHdFObj["nm"] = "ID";
tHdrArr.push(tHdFObj);
 
tBHdFObj = {};	
tBHdFObj["fld"] = "qloga_name";
tBHdFObj["nm"] = "Name";
tHdrArr.push(tBHdFObj);
tBHdFObj = {};	
tBHdFObj["fld"] = "qloga_type";
tBHdFObj["nm"] = "Type";
tHdrArr.push(tBHdFObj);
tBHdFObj = {};	
tBHdFObj["fld"] = "_id";
tBHdFObj["nm"] = "<span style=\"margin-right: 10px; margin-top: 10px\" class=\"nav-material-icons txtBold\"><i class=\"nav-material-icons\">&#xe3c9</i></span>";
tHdrArr.push(tBHdFObj);
// alert("fillPAddrssLst: " + tFPFb);
document.getElementById("dvAddrssLst").innerHTML = "";
tFPFbstr = "";
tfPobj = null;
tfPobj = "";
tfPobj = [];

tfPobj = JSON.parse(tFPFb);
iifal = 0;
iiflen = tfPobj.length;
 
while(iifal < iiflen) {
    tFPFbstr += "<tr>";
    tFPFbstr += "<td>" + tfPobj[iifal]._id + "</td>";
    tFPFbstr += "<td>" + tfPobj[iifal].qloga_name + "</td>";
    tFPFbstr += "<td>" + tfPobj[iifal].qloga_type + "</td>";
    tFPFbstr += "<td style=\"text-align: left\" class=\"txtClrHdr\"><a href=\"javascript:doMLinkM('aa-edit-address','pid=aa-edit-address&taid=" + tfPobj[iifal]._id  + "');\"><i class=\"menu-material-icons\" alt=\"edit\" title=\"Edit Address\">&#xe3c9;</i></a></td>";
    tFPFbstr += "</tr>";
iifal++;
}
 


if(tfPobj[0]) {
    strTHhtml = JSSHOP.shared.getTblHdrs(tHdrArr);
    } else {
    strTHhtml = "<th>...</th>";
    }
 
    tmpFstr = getTblSortStr(strTHhtml, tFPFbstr);
    tmpFFstr = "<div style=\"margin: 0 auto;max-width:600px;padding: 10px;margin-left: 15px;margin-right: 15px;\">" + tmpFstr + "</div>";



    document.getElementById("dvAddrssLst").innerHTML = tmpFFstr;


 
} catch(e) {
alert("fillPAddrssLst: " + e);
}
}


var getPAddrssLst = function() {

try {
    tmpFobj = null;
    tmpFobj = {};
    tmpFobj["ws"] = "where qloga_place=?";
    tmpFobj["wa"] = [currUrlArr.tpid];
    oi = getNuDBFnvp("qlogiaddrss", 5, null, tmpFobj);
    doQComm(oi["rq"], null, "fillPAddrssLst");
} catch(e) {
alert("getPAddrssLst: " + e);
}
};



function fillPlacesForm(tFPFa, tFPFb, tFPFc) {
    currPlaceObj = null;
    currPlaceArr = "";
    currPlaceArr = [];
    currPlaceObj = {};

try {
    tawqwRSstr = "";
console.log("fillPlacesForm: " + tFPFb);
tfPobj = JSON.parse(tFPFb);
currPlaceObj = tfPobj[0];
currShopsArr = "";
currShopsArr = [];
currShopsArr = JSON.parse(tFPFb);
if(isJApp == "yes") {
    console.log("fillPlacesForm: " + JSON.stringify(currPlaceObj));
    tFnlCmprsdStr = LZString.compressToEncodedURIComponent(tFPFb);
    app.setCShpAStr(tFnlCmprsdStr);
}

// currShopsArr.push(currPlaceObj);
console.log("tfPobj: " + JSON.stringify(tfPobj));
// JSSHOP.shared.setDynFrmVals(document["qco"], "tmp_");
 // JSSHOP.shared.setDynFieldVals(tfPobj[0], "tmp_");
 //
 JSSHOP.shared.setFrmVals("qco",tfPobj[0],function() {JSSHOP.shared.setDynFrmVals(document["qco"], "tmp_");});

// getPAddrssLst();
tQlogoVA = c_logoimg.value;
tNameFirstLtr = c_name.value.charAt(0);
ts = currPlaceObj;
tttLImg = ts.c_logoimg;
    if(tttLImg.indexOf(".") != -1) {
     if(tttLImg.indexOf("http") != -1) {
 
    tBimgU = tttLImg;
 
    } else {
     
     tBimgU = "images/slogos/s_thumb" + ts.c_logoimg;
    }
    } else { // end of indexOf(".") in c_logoimg
    // tBimgU = "noQvalue";
    tBimgU = "images/slogos/s_thumb" + ts.c_logoimg;

    }
    if(tBimgU == "noQvalue") {

        // use the first letter of the name as the image
        tCshrtClrd = pSBC( 0.02, JSSHOP.ui.stringToColour(c_name.value));
        tIstr = "<div class=\"txtSmall txtClrHdr slmtable\" style=\"margin-right:8px;padding-right:8px;vertical-align: middle; align: center; max-width: 27px; max-height: 27px; color:#FFFFFF;background-color:" + tCshrtClrd + "\">&nbsp;" + tNameFirstLtr + "</div>";
    // atstr += "<div class=\"txtBold txtClrHdr\" style=\"margin-right:8px;padding-right:8px;vertical-align: middle; max-width: 27px; max-height: 27px;\">" + tCshortttl + "</div>";
    } else {
        tIBclsStr = "avatar";
        tIstr = "<a href=\"javascript:JSSHOP.ui.popAFImgUrl('" + tBimgU + "')\"><img id=\"dvPLogoImg\" src=\"" + tBimgU + "\" class=\"" + tIBclsStr + "\" style=\"margin-right:8px;padding-right:8px;vertical-align: middle; max-width: 27px; max-height: 27px;\"  onerror=\"javascript:doGglImgLdErr(" + ts._id + ");\"></a>";
    }



/*
tQlogoV = tQlogoVA.replace("https: /", "https://");
c_logoimg.value = tQlogoV;
tIncStr = "default.gif";
if(tQlogoV.indexOf(".") != -1) {
    if(tQlogoV.indexOf("http") != -1) {
tIncStr = c_logoimg.value;
    } else {
tIncStr = "images/slogos/s_thumb" + c_logoimg.value;
    }
}
*/
// add option "noQvalue" to tmp_k_category

// JSSHOP.shared.addOptAtIndex(tmp_k_category, 0, "noQvalue", stxt[522], "noQvalue");
// tIstr = "<img class=\"avatar\" id=\"dvPLogoImg\" src=\"" + tIncStr + "\" width=\"48\" height=\"48\" />";



tCdescStr = c_desc.value;
if((tCdescStr == "ns") || (tCdescStr == "5")){

    tCdescStr = c_name.value + "  " + stxt[559] + " " + c_location.value + ". " ;
 
}
// document.getElementById("dvPartLinks").innerHTML =  "<div style=\"float:left;padding-right:6px;padding-bottom:6px;\">" + tIstr + "</div>" + c_name.value + "<br><span class=\"txtSmall\">" + tCdescStr + "</span>";

//  document.getElementById("dvPIDHDRstr").innerHTML =  "<div style=\"float:left;padding-right:6px;padding-bottom:6px;\">" + tIstr + "</div>" + c_name.value + "<br><span class=\"txtSmall\">" + tCdescStr + "</span>";
// document.getElementById("spInDat").innerHTML = c_name.value + " " + stxt[86];

document.title = c_name.value + " " + stxt[16] + ": " + stxt[3002] + " - recamby.com";
document.getElementById("spWHrs").innerHTML = c_name.value + " " + stxt[514];
tWebVal = c_web.value;
tWUAdr = tWebVal;
tFPFtel = c_tel.value;
ttFPFtel = tFPFtel;

// remove "351 " and "34 " from beginning of phone number
if(tFPFtel.indexOf("351 ") != -1) {
    ttFPFtel = tFPFtel.replace("351 ", "");
}
if(tFPFtel.indexOf("34 ") != -1) {
    ttFPFtel = tFPFtel.replace("34 ", "");
}
tttFPFtel = ttFPFtel.replace(/\s/g, "");
// if the first number in ttFPFtel is 9 then it is a mobile number
if((tttFPFtel.charAt(0) == "9") || (tttFPFtel.charAt(0) == "6") || (tttFPFtel.charAt(0) == "7")) {
   
    tmp_c_tel.innerHTML = "<a href=\"tel:" + tttFPFtel + "\">" + tttFPFtel + "</a>";
} else {
  
    tmp_c_tel.innerHTML = "<a href=\"tel:" + tttFPFtel + "\">" + tttFPFtel + "</a>";
}



tWUTtl = tWebVal;
if(tWebVal.indexOf(".") != -1) {
     
    if(tWebVal.indexOf("http") != -1) {
    } else {
        tWUAdr = "http://" + tWebVal;
    }
    if(tWebVal.indexOf("facebook") != -1) {
        // alert("facebook");
        tWUTtl = "facebook";
        tWUAdr = "https://www.google.com/search?q=" + c_name.value + " facebook";
    }
    if(tWebVal.indexOf("instagram") != -1) {
        tWUTtl = "instagram";
        tWUAdr = "https://www.google.com/search?q=" + c_name.value + " instagram";
    }
    if(tWebVal.indexOf("twitter") != -1) {
        tWUTtl = "twitter";
        tWUAdr = "https://www.google.com/search?q=" + c_name.value + " twitter";
    }
    if(tWebVal.indexOf("youtube") != -1) {
        tWUTtl = "youtube";
        tWUAdr = "https://www.google.com/search?q=" + c_name.value + " youtube";
    }

    tWVstr = "<a href=\"" + tWUAdr + "\" target=\"_blank\">" + tWUTtl + "</a>";

    tmp_c_web.innerHTML = tWVstr;
}
// document.getElementById("tmp_qsv").value = c_name.value;
if(c_category.value == "101") {
    tmpPSLdvId = "dvGetSvcsLnk";

    JSSHOP.ui.setNuCBBClickClr(document.getElementById(tmpPSLdvId),tBounceClsName,tActvClsName, function() {void(0)}, 300);

 } else {
    tmpPSLdvId = "dvGetPLnk";
    JSSHOP.ui.setNuCBBClickClr(document.getElementById(tmpPSLdvId),tBounceClsName,tActvClsName, function() {void(0)}, 300);
}
tCMsgstr = c_msg.value;
if(c_whours.value.length < 5) {
    tmp_c_msg.className = "txtSmall txtClrBBlue"; 
    tmp_c_msg.innerHTML = stxt[139];
} else {
if(tCMsgstr.length < 5) {
 tmp_c_msg.className = "txtSmall txtClrRed"; 
 tmp_c_msg.innerHTML = stxt[138];

} else {
    tmp_c_msg.innerHTML = tCMsgstr;
}
}

// document.getElementById("lnkGSSearch").href = c_web.value;
// document.getElementById("lnkGPSearch").href = "https://www.google.com/maps/search/" + c_name.value;
// document.getElementById("lnkGWSearch").href = "https://www.google.com/search?q=" + c_name.value;
tmpDOs = null;
tmpDOs = {};
tmpDOs["ws"] = "where k_coid=? and k_rtype=?";
tmpDOs["wa"] = [cid,5]; 
oi = getNuDBFnvp("qlinks",5,null,tmpDOs);
doQComm(oi["rq"], "y", "setCurrCoLinks");
// setTimeout("rndrWorkHObj()", 600);
} catch(e) {
    alert("fillPlacesForm: " + e);
    }
}

var donePIcnAdd = function(tFPFa, tFPFb, tFPFc) {
try {
    isDPC = "y";
// alert("donePIcnAdd: " + tFPFb);
} catch(e) {
alert("donePIcnAdd.Error: " + e);
}
};
var donePIcnMn = function(tFPFa, tFPFb, tFPFc) {
try {
    JSSHOP.ui.closeLbox();

    isDPC = "y";
    document.getElementById('dvPLogoImg').src = "images/slogos/s_thumb" + JSSHOP.shared.getFrmFieldVal("qmedia", "m_file", 0);
    // set page scroll and focus on dvPLogoImg
    document.getElementById('dvPLogoImg').scrollIntoView();
    JSSHOP.ui.setCBBClickClr(dvPLogoImg,'cls_button cls_button-medium brdrClrDlg txtClrHdr','txtClrHdr bkgdClrWhite', function(){void(0)});
// alert("donePIcnAdd: " + tFPFb);
} catch(e) {
alert("donePIcnAdd.Error: " + e);
}
};
var finishPIcn = function(theMMum) {
try {
    // alert("finishPIcn: " + theMMum);


    image = null;
    image = new Image();
    image.src = "images/user_icons/s_thumb" + theMMum;
    
   	document.getElementById("mmprogressBar").appendChild(image);
	JSSHOP.shared.setFrmFieldVal("qco", "c_logoimg", theMMum);
    procNuUIitem("qco","c_logoimg",JSSHOP.shared.getFrmFieldVal('qco','_id',0), theMMum, "donePIcnAdd");

	// alert("finishPIcn: " + theMMum);
} catch(e) {
alert("finishPIcn: " + e);
}
};




 


var testFFieldOb = function() {
aCurrFFieldOb = null;
aCurrFFieldOb= {};

aCurrFFieldOb["fid"] = "noQvalue"; // field id
aCurrFFieldOb["fty"] = "noQvalue"; // field type - for future use
aCurrFFieldOb["fvr"] = "noQvalue"; // field validation - regex
aCurrFFieldOb["fof"] = "noQvalue"; // field onfocus
aCurrFFieldOb["fob"] = "noQvalue"; // fielonblur
aCurrFFieldOb["fcl"] = "noQvalue"; // click
aCurrFFieldOb["fku"] = "noQvalue"; // keyup
aCurrFFieldOb["fkd"] = "noQvalue"; // keydown
aCurrFFieldOb["lid"] = "noQvalue"; // labelid
aCurrFFieldOb["ltxt"] = "noQvalue"; // labelid
return aCurrFFieldOb;
};





 
var fnishDlayCntLoad = function() {
};








/*
* working hours stuff
*/


var setDefWorkH = function() {
try {
tmpWHobj = {};
tmpWdWHarr = ["8:30","13:00","14:00","18:00","-","-"];
tmpWeWHarr = ["8:30","13:00","-","-","-","-"];

var arrAllWdD = ["dvWOBmon","dvWOBtue","dvWOBwed","dvWOBthu","dvWOBfri","dvWOBsat","dvWOBsun","dvWOBwdh","dvWOBweh"];

pint = 0;
while(pint < arrAllWdD.length) {
iint = 0;
ttSObj = document.getElementById(arrAllWdD[pint]);
tGD = ttSObj.getElementsByTagName("div");
while(iint < tGD.length) {
if(tGD[iint].getAttribute("data-son") != null) {
if(pint > 4) {
tGD[iint].innerText = tmpWeWHarr[iint];
} else {
tGD[iint].innerText = tmpWdWHarr[iint];

}
}
iint++;
}

pint++;
} 
} catch(e) {
alert("setDefWorkH: " + e);
}
};

 






var doWHObjCnvrt = function() {
    
    tWHVal = c_whours.value;
    tOpenedStr = "- <span class=\"txtClrDrkGrn\">" + stxt[558] + "</span>";
    tClosedStr = "- <span class=\"txtClrRed\">" + stxt[547] + "</span>";
        twBstr = tWHVal;
    
        // replace all non alpha numeric minus space and | with ;
        twCstr = twBstr.replace(/[^a-zA-Z0-9\s\-\|]/g, ";");
        // replace all ;;; with -
        twDstr = twCstr.replace(/\;\;\;/g, "-");
        // replace all am- with am:
        twEstr = twDstr.replace(/am-/g, "am_");
        // replace all "; " with .
        twFstr = twEstr.replace(/\;\s/g, ".");
        // replace all ; with :
        twGstr = twFstr.replace(/\;/g, ":");
        // replace all ":am" with ";am"
        twHstr = twGstr.replace(/\:am/g, ";am");
        // replace all ":pm" with ";pm"
        twIstr = twHstr.replace(/\:pm/g, ";pm");

        // replace all ":30" with ";30;"
        twJstr = twIstr.replace(/\:30/g, ";30;");
        twAstr = twJstr.replace(/\:15/g, ";15;");
        console.log("twAstr: " + twAstr);
        tFullRetWHSTr = "";
     
    // tmpDaysArr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    tmpDaysArr = [stxt[541],stxt[535],stxt[536],stxt[537],stxt[538],stxt[539],stxt[540]];
    tmpDaysArrAb = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
 
    if(twAstr.indexOf("|Confirm") != -1) {
        // remove |Confirm and everything after it
        tWNstr = twAstr.split("|Confirm")[0];
        twAstr = tWNstr;
    }
    if(twAstr.indexOf("More") != -1) {
        return;
    }
    
    tmpWordDaysArr = twAstr.split("|");
    tmpRetWhrStr = "";
    tmpWHDmyObj = {};

    iii = 0;
    while(iii < tmpWordDaysArr.length) {
        tDVWDayStr = "dvWOB" + tmpDaysArrAb[iii].toLowerCase();
         
 
    tWDA = tmpWordDaysArr[iii];
    console.log("tWDA: " + tWDA);
    if(tWDA.indexOf("na") != -1) {
        tmpRetWhrStr += tmpDaysArrAb[iii] + ": " + stxt[547] + "<br>";  
    // not open
    } else {
    // open
    // check if there is a second working period
    if(tWDA.indexOf(".") != -1) {
        tWstree = "9 am:1 pm.5:6:30 pm"
   

    // two working periods
    tmpWDArr = tWDA.split(".");
    tmpWD1 = tmpWDArr[0];
    tmpWD2 = tmpWDArr[1];
    // check if current time is between first working period
    tmpWD1Arr = tmpWD1.split(":");
    tmpWD1Start = JSSHOP.shared.convertTo24Hour(tmpWD1Arr[0]);
    tmpWD1End = JSSHOP.shared.convertTo24Hour(tmpWD1Arr[1]);
    // check if current time is between second working period
    tmpWD2Arr = tmpWD2.split(":");
    tmpWD2Start = JSSHOP.shared.convertTo24Hour(tmpWD2Arr[0]);
    // convert tmpWD2Start to 24 hour time
    // tmpWD2Start = JSSHOP.shared.convertTo24Hour(tmpWD2Arr[0]);
    tmpWD2End = JSSHOP.shared.convertTo24Hour(tmpWD2Arr[1]);
    
    if(tmpWD2Arr[2]) {
        if(tmpWD2Arr[2] == "30") {
            tmpWD2Start += ":30";
        } else {
    tmpWD2End += ":" + tmpWD2Arr[2];
        }
    }
    tmpRetWhrStr += tmpDaysArrAb[iii] + ": " + tmpWD1Start + " - " + tmpWD1End + " | " + tmpWD2Start + " - " + tmpWD2End + "<br>";
    tmpWHDmyObj[tmpDaysArrAb[iii].toLowerCase() + "1"] = tmpWD1Start;
    tmpWHDmyObj[tmpDaysArrAb[iii].toLowerCase() + "2"] = tmpWD1End;
    tmpWHDmyObj[tmpDaysArrAb[iii].toLowerCase() + "3"] = tmpWD2Start;
    tmpWHDmyObj[tmpDaysArrAb[iii].toLowerCase() + "4"] = tmpWD2End;
    } else {
        tWHOnestr = tmpDaysArrAb[iii].toLowerCase() + "1";
        tWHtwostr = tmpDaysArrAb[iii].toLowerCase() + "2";
           
        if(tWDA.indexOf("24 h") != -1) {
            tmpWHDmyObj[tWHOnestr] = "00:00";
            tmpWHDmyObj[tWHtwostr] = "24:00";
            tmp_c_msg.innerHTML = stxt[548];
        } else {
    // one working period
    tmpWD1 = tWDA;
    console.log("tmpWD1: " + tmpWD1);
    tmpWD1Arr = tmpWD1.split(":");
    tmpWD1Start = JSSHOP.shared.convertTo24Hour(tmpWD1Arr[0]);
    tmpWD1End = JSSHOP.shared.convertTo24Hour(tmpWD1Arr[1]);
    tmpRetWhrStr += tmpDaysArrAb[iii] + ": " + tmpWD1Start + " - " + tmpWD1End + "<br>";

    tmpWHDmyObj[tWHOnestr] = tmpWD1Start;
    tmpWHDmyObj[tWHtwostr] = tmpWD1End;
    }
    }
}   
    iii++;
    }

    console.log("tmpWHDmyObj: " + JSON.stringify(tmpWHDmyObj));
 


 tmpWorkObj = tmpWHDmyObj;
 // tmpWorkObj["sat2"] = "23:00";
for(var wgkey in tmpWorkObj) {
 
thiTRWD =  "dv" + wgkey;
if(document.getElementById(thiTRWD)) {
document.getElementById(thiTRWD).innerText = tmpWorkObj[wgkey];
// alert(JSON.stringify(theResp[gkey]));
}
}
// if days in tmpDaysArrAb to lower case with "1" added to the end of it does not exist then set div with id "dvW" + tmpDaysArrAb + "1" to "closed"
// iterate through tmpDaysArrAb and check if the day with "1" added to the end of it exists in tmpWorkObj
// if it does not exist then set div with id "dvW" + tmpDaysArrAb + "1" to "closed"
// iterate through tmpDaysArrAb and check if the day with "1" added to the end of it exists in tmpWorkObj
// if it does not exist then set div with id "dvW" + tmpDaysArrAb + "1" to "closed"

 
// see if the shop is open now
tmpCurrDay = new Date().getDay();
tmpCurrHour = new Date().getHours();
tmpCurrMin = new Date().getMinutes();
tmpCurrTime = tmpCurrHour + ":" + tmpCurrMin;
tmpFCDAStr = tmpDaysArr[tmpCurrDay];
tmpCLCDayStr = tmpDaysArrAb[tmpCurrDay];
tmpCurrDayStr = tmpCLCDayStr.toLowerCase(); 
console.log("doWHObjCnvrt.tmpCurrDayStr: " + tmpCurrDayStr);
console.log("doWHObjCnvrt.tmpWorkObj: " + JSON.stringify(tmpWorkObj));
tmpFullDstr = "";
tmpCurrOpen = stxt[547];

if(tmpWorkObj[tmpCurrDayStr + "1"]) {


    tmpCurrStart = tmpWorkObj[tmpCurrDayStr + "1"];
    tmpCurrEnd = tmpWorkObj[tmpCurrDayStr + "2"];
    tmpCCurrTime = tmpCurrTime.replace(":","");
    tmpCCurrStart = tmpCurrStart.replace(":","");
    tmpCCurrEnd = tmpCurrEnd.replace(":","");
    tMCCurrTime = parseInt(tmpCCurrTime);
    tMCCurrStart = parseInt(tmpCCurrStart);
    tMCCurrEnd = parseInt(tmpCCurrEnd);
    tmpFullDstr += tmpCurrStart + " : " + tmpCurrEnd;
    console.log("doWHObjCnvrt.tmpCurrTimeA: " + " " + tmpCurrTime + " " + tmpCurrStart + " " + tmpCurrEnd);

    if(tmpWorkObj[tmpCurrDayStr + "3"]) {

        tmpCurrStart2 = tmpWorkObj[tmpCurrDayStr + "3"];
        tmpCurrEnd2 = tmpWorkObj[tmpCurrDayStr + "4"];
 
        tmpCCurrStart2 = tmpCurrStart2.replace(":","");
        tmpCCurrEnd2 = tmpCurrEnd2.replace(":","");
  
        tMCCurrStart2 = parseInt(tmpCCurrStart2);
        tMCCurrEnd2 = parseInt(tmpCCurrEnd2);
        tmpFullDstr += "  "  + tmpCurrEnd2;
 
        if((tMCCurrTime >= tMCCurrStart && tMCCurrTime <= tMCCurrEnd2)) {
  
            tmpCurrOpen = tOpenedStr;
            // tmpCurrOpen += " closes at " + tmpCurrEnd2;
        } else {
 
           tmpCurrOpen = tClosedStr;
           //  tmpCurrOpen += " opens at " + tmpCurrStart;
        }
    } else {
      
        console.log("doWHObjCnvrt.tmpCurrTimeE: " + " " + tmpCurrTime + " " + tmpCurrStart + " " + tmpCurrEnd);
        tmpCCurrTime = tmpCurrTime.replace(":","");
        tmpCCurrStart = tmpCurrStart.replace(":","");
        tmpCCurrEnd = tmpCurrEnd.replace(":","");
        tMCCurrTime = parseInt(tmpCCurrTime);
        tMCCurrStart = parseInt(tmpCCurrStart);
        tMCCurrEnd = parseInt(tmpCCurrEnd);
        tmpFullDstr += " " + tmpCurrEnd;
        if(tMCCurrTime >= tMCCurrStart && tMCCurrTime <= tMCCurrEnd) {
 
            tmpCurrOpen = tOpenedStr;
            // tmpCurrOpen += " closes at " + tmpCurrEnd;
        } else {
  
            tmpCurrOpen = tClosedStr;
            // tmpCurrOpen += " opens at " + tmpCurrStart;

        }
    }


}  else {
    tmpCurrOpen = tClosedStr;
     

}
 
for(var wgkey in tmpDaysArrAb) {
    tWgkey = tmpDaysArrAb[wgkey].toLowerCase() + "1";
    if(!tmpWorkObj[tWgkey]) {
        thiTRWD =  "dv" + tmpDaysArrAb[wgkey].toLowerCase() + "1";
        document.getElementById(thiTRWD).innerText = stxt[547];
    }
}

tFIOstr = tmpCurrOpen;
document.getElementById("spWHrs").innerHTML =  tFIOstr;

};







var rndrWorkHObj = function() {

    tWHVal = c_whours.value;
    if(tWHVal.length > 10) {
        if(tWHVal.indexOf("|") != -1) {
        /* 
        // na| 9 am–6:30 pm| 9 am–6:30 pm| 9 am–6:30 pm| 9 am–6:30 pm| 9 am–6:30 pm| na
        twBstr = tWHVal;
    
        // replace all non alpha numeric minus space and | with ;
        twAstr = twBstr.replace(/[^a-zA-Z0-9\s\-\|]/g, ";");
        // replace all ;;; with -
        twAstr = twAstr.replace(/\;\;\;/g, "-");
        // replace all am- with am:
        twAstr = twAstr.replace(/am-/g, "am_");
        // replace all "; " with .
        twAstr = twAstr.replace(/\;\s/g, ".");
        // replace all ; with :
        twAstr = twAstr.replace(/\;/g, ":");
    // no lunch twAstr:
    //  na| 9-am_6-pm| 9-am_6-pm| 9-am_6-pm| 9-am_6-pm| 9-am_6-pm| na
    // lunch twAstr:
    // na| 9-am_1-pm.2-6:30-pm| 9-am_1-pm.2-6:30-pm| 9-am_1-pm.2-6:30-pm| 9-am_1-pm.2-6:30-pm| 9-am_1-pm.2-6:30-pm| 9-am_1-pm
    // twAstr.split("|") will give seven working days starting with sunday
    // twAstr.split("|")[0] will give sunday
    // twAstr.split("|")[0].split(".") will give two working periods for sunday
    // twAstr.split("|")[0].split(".")[0] will give first working period for sunday
    // twAstr contains "na" for non working days
    // if twAstr contains . then it has two working periods
    
    // twAstr.split("|")[0].split(".")[0].split("-")[0] will give first working period start for sunday
    // twAstr.split("|")[0].split(".")[0].split("-")[1] will give first working period end for sunday
    // twAstr.split("|")[0].split(".")[1] will give second working period for sunday
    // twAstr.split("|")[0].split(".")[1].split("-")[0] will give second working period start for sunday
    // twAstr.split("|")[0].split(".")[1].split("-")[1] will give second working period end for sunday
    
    // using system time to get current day of week and time, then compare with twAstr to see if shop is open
    // if shop is open then twAstr will contain the current day of week and time
    // if shop is closed then twAstr will contain "na"
    tmpDaysArr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    tmpDaysArrAb = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    tmpWordDaysArr = twAstr.split("|");
    tmpRetWhrStr = "";
    iii = 0;
    while(iii < tmpWordDaysArr.length) {
    tWDA = tmpWordDaysArr[iii];
    if(tWDA.indexOf("na") != -1) {
        tmpRetWhrStr += tmpDaysArrAb[iii] + ": " + stxt[547] + "<br>";  
    // not open
    } else {
    // open
    // check if there is a second working period
    if(tWDA.indexOf(".") != -1) {
    // two working periods
    tmpWDArr = tWDA.split(".");
    tmpWD1 = tmpWDArr[0];
    tmpWD2 = tmpWDArr[1];
    // check if current time is between first working period
    tmpWD1Arr = tmpWD1.split("-");
    tmpWD1Start = tmpWD1Arr[0];
    tmpWD1End = tmpWD1Arr[1];
    // check if current time is between second working period
    tmpWD2Arr = tmpWD2.split("-");
    tmpWD2Start = tmpWD2Arr[0];
    tmpWD2End = tmpWD2Arr[1];
    tmpRetWhrStr += tmpDaysArrAb[iii] + ": " + tmpWD1Start + " - " + tmpWD1End + " | " + tmpWD2Start + " - " + tmpWD2End + "<br>";
    
    } else {
    // one working period
    tmpWD1 = tWDA;
    tmpWD1Arr = tmpWD1.split("-");
    tmpWD1Start = tmpWD1Arr[0];
    tmpWD1End = tmpWD1Arr[1];
    tmpRetWhrStr += tmpDaysArrAb[iii] + ": " + tmpWD1Start + " - " + tmpWD1End + "<br>";    
    
    }
    }
    iii++;
    }
    
    
    tawqwRSstr += "<div class=\"txtSmall txtClrGery\" style=\"margin-right:20px;\">" + tmpRetWhrStr + "</div>";
    document.getElementById("dvWHoursOld").innerHTML =  tawqwRSstr;
    JSSHOP.ui.toggleVisibility("dvWHoursOld");
    */
    doWHObjCnvrt();
    } else {
// example of 
tmpWorkStr = "";
tmpWorkStr = LZString.decompressFromEncodedURIComponent(c_whours.value);
// console.log("rndrWorkHObj: " + tmpWorkStr);

tmpWorkObj = JSON.parse(tmpWorkStr);
for(var wgkey in tmpWorkObj) {
thiTRWD =  "dv" + wgkey;
if(document.getElementById(thiTRWD)) {
document.getElementById(thiTRWD).innerText = tmpWorkObj[wgkey];
// alert(JSON.stringify(theResp[gkey]));
}
}
// JSSHOP.ui.toggleVisibility("dvShpWHD");
}
}
dvQteBox.innerHTML = "";
dvQteBox.innerHTML = JSSHOP.ads.getCoAprsDiv(currPlaceObj, "pp"); 
tDlen = dvQteBox.innerHTML.length;
if(tDlen > 10) {
    if(arrUprefs["prfsSHOPuser"][0].tglDvAprs) {
        if(arrUprefs["prfsSHOPuser"][0].tglDvAprs == "show") {
        JSSHOP.ui.toggleNuModule('dvTglAprs','dvTglAprsTbl');
        }
        }
    }
};



var setWorkHObj = function(thiTwoID) {
try {

tmpWHobj = {};
tmpWHarr = ["mon1","mon2","mon3","mon4","mon5","mon6"];
var iint = 0;
tGD = document.getElementsByTagName("div");
// theWHSBObj = document.getElementById(thiTwoID);
while(iint < tGD.length) {
if(tGD[iint].getAttribute("data-son") != null) {
tmpWHobj[tGD[iint].getAttribute("data-son")] = tGD[iint].innerText;
}
iint++;
}
// JSSHOP.ui.setNuSaveBtnEnd(theWHSBObj, function(){ void(0); });
// alert("tmpWHobj: " + thiTwoID + " :: " + LZString.compressToEncodedURIComponent(JSON.stringify(tmpWHobj)));
return LZString.compressToEncodedURIComponent(JSON.stringify(tmpWHobj));

} catch(e) {
alert("setWorkHObj: " + e);
}
};


var setWeekdays = function() {
var arrMonD = [];
ttSObj = document.getElementById("dvWOBmon");
//ttSObj = attSObj.parentNode.parentNode;
// ttSObj = document.getElementById(attSObj);
tGD = ttSObj.getElementsByTagName("div");
iint = 0;
while(iint < tGD.length) {
if(tGD[iint].getAttribute("data-son") != null) {
arrMonD.push(tGD[iint].innerText);
}
iint++;
}
pint = 0;
var arrAllD = ["dvWOBtue","dvWOBwed","dvWOBthu","dvWOBfri"];


while(pint < arrAllD.length) {
iint = 0;
ttSObj = document.getElementById(arrAllD[pint]);
tGD = ttSObj.getElementsByTagName("div");
iint = 0;
while(iint < tGD.length) {
if(tGD[iint].getAttribute("data-son") != null) {
tGD[iint].innerText = arrMonD[iint];
}
iint++;
}

pint++;
}
// JSSHOP.ui.setCBBClickClr(ttSObj,'cls_button cls_button-medium brdrClrDlg txtClrHdr','txtClrHdr bkgdClrWhite', function(){void(0)});
};

var clearAllTimeSel = function() {
ttSObj = document.getElementById("dvWOflds");
// ttSObj = document.getElementById(attSObj);
tGD = ttSObj.getElementsByTagName("div");
iint = 0;
while(iint < tGD.length) {
if(tGD[iint].getAttribute("data-son") != null) {
tGD[iint].innerText = "--:--";
}
iint++;
}
// alert(iint);
// JSSHOP.ui.setCBBClickClr(ttSObj,'cls_button cls_button-medium brdrClrDlg txtClrHdr','txtClrHdr bkgdClrWhite', function(){void(0)});
};
var clearTimeSelecy = function(attSObj) {
ttSObj = attSObj.parentNode.parentNode;
// ttSObj = document.getElementById(attSObj);
tGD = ttSObj.getElementsByTagName("div");
iint = 0;
while(iint < tGD.length) {
if(tGD[iint].getAttribute("data-son") != null) {
tGD[iint].innerText = "--:--";
}
iint++;
}
// alert(iint);
// JSSHOP.ui.setCBBClickClr(ttSObj,'cls_button cls_button-medium brdrClrDlg txtClrHdr','txtClrHdr bkgdClrWhite', function(){void(0)});
};

var fnishTimeSelecy = function() {
JSSHOP.ui.closeLbox();
currWorkHDiv.innerHTML= currWorkHHour + ":" + currWorkHMin;
JSSHOP.ui.setCBBClickClr(currWorkHDiv,'cls_button cls_button-medium brdrClrDlg txtClrHdr','txtClrHdr bkgdClrWhite', function(){void(0)});
};

var doTimeSelecy = function(ttSObj) {
currWorkHDiv = ttSObj;
JSSHOP.ui.popAndFillLbox(tdTimeSlctor.innerHTML);
};







var fnshCoPgAdd = function(a,b,c) {
    tncobj = null;
    tncobj = {};
// alert("fnshCoPgAdd: " + b);
if(b.indexOf("qco") != -1) {
// alert("fnshCoPgAdd: " + b)
tncobj = JSON.parse(b);
// alert("fnshCoPgAdd: " + tncobj[0]._id);
if(tncobj[0]._id) {
eindex("pid=aa-edit-place", "pid=aa-edit-place&tpid=" + tncobj[0]._id);
    }
}

};




var cbFedit = function(a,b,c) {
 
 
    


	if(currUrlArr.tpid) {

JSSHOP.ui.setCBBClickClr(btnEUsave,'cls_button cls_button-medium  bkgdClrDGreen txtClrWhite','cls_button cls_button-medium', function(){document.getElementById("btnEUsave").innerHTML=stxt[21];document.getElementById("btnEUsave").disabled=false;});
} else {
		if(c_category.value == "site") {
			    tmpDOs = {};
    tmpDOs["ws"] = "where c_category=? and c_coid=?";
    tmpDOs["wa"] = ["site",cid];
    oi = getNuDBFnvp("qco", 5, null, tmpDOs);
	// addFrmQArr("qco", cid, "fnishCoForm");
    doQComm(oi["rq"],"noQvalue","getSectors");
		// currSctrsArr.push(JSSHOP.shared.getKNVParr(JSSHOP.shared.getDynFrmVals(document["qco"], "tmp_")));
	} else {
        tDadded = JSSHOP.shared.getFrmFieldVal("qco", "c_dadded", 0);
        tmpDOs = {};
        tmpDOs["ws"] = "where c_uid=? and c_dadded=?";
        tmpDOs["wa"] = [quid,tDadded];
        oi = getNuDBFnvp("qco", 5, null, tmpDOs);
        doQComm(oi["rq"],"noQvalue","fnshCoPgAdd");

    }
 // doMLinkM('aa-edit-places', 'pid=aa-edit-places');
 }
};

var doNPlaceEdit = function() {

    tmpFobj = null;
    tmpFobj = {};
	c_whours.value = setWorkHObj("ha");
	// alert("c_whours.value: " + c_whours.value);
    tmpFobj["knvp"] = JSSHOP.shared.getKNVParr(JSSHOP.shared.getDynFrmVals(document["qco"], "tmp_"));
 
    
if(currUrlArr.tpid) {
	    tmpFobj["ws"] = "where _id=?";
    tmpFobj["wa"] = [tpid];
    oi = getNuDBFnvp("qco", 7, null, tmpFobj);
} else {
    JSSHOP.shared.setFrmFieldVal("qco", "c_uid", quid);
    JSSHOP.shared.setFrmFieldVal("qco", "c_dadded", JSSHOP.getUnixTimeStamp());
	    oi = getNuDBFnvp("qco", 6, null, tmpFobj);
}
	// alert("OI: " + oi["rq"]);
    console.log("OI: " + oi["rq"]);
    doQComm(oi["rq"], null, "cbFedit");
};


var doPlaceEdit = function() {
doNPlaceEdit();
}







var dmyFnishCntLoad = fnishCntLoad;
fnishCntLoad = function() {
    isOwnCo = "y";
 try { 
} catch(e) {
    alert("dmyFnishCntLoad: " + e);
    }
    /*s
tSARR = [stxt[3001],stxt[3002]];
tVSARR = [svtxt[3001],svtxt[3002]];
isslen = tSARR.length;
// alert("tSARR" + tSARR[0]._id);
rweint = 0;
while(rweint < tSARR.length) {
	tsasa = null;
 
tsasa = tSARR[rweint];
 
if(tVSARR[rweint] == c_category.value) {
    console.log("tVSARR[rweint]: " + tVSARR[rweint] + " : " + tSARR[rweint] + " : " +  c_category.value);

	JSSHOP.shared.addCurrSelectOpt(tmp_c_category, tVSARR[rweint], tSARR[rweint], "selected");
} else {
    console.log("tVSARR[rweint]:no " + tVSARR[rweint] + " : " + tSARR[rweint] + " : " +  c_category.value);

JSSHOP.shared.addCurrSelectOpt(tmp_c_category, tVSARR[rweint], tSARR[rweint], "");
}
rweint++; 
}



taifo = nCurrFFieldOb();
taifo.fid = "tmp_c_internal";
taifo.fdv = "Internal ID";
taifo.lid = "lbl_c_internal"; 
taifo.ltxt = "Internal ID"; 
euiFFObjArr.push(taifo);


trifo = nCurrFFieldOb();
trifo.fid = "tmp_c_category";
// trifo.fdv = "Category";
trifo.lid = "lbl_c_category"; 
trifo.ltxt = stxt[16]; 
euiFFObjArr.push(trifo);

tbifo = nCurrFFieldOb();
tbifo.fid = "tmp_c_name";
tbifo.fdv = stxt[404];
tbifo.lid = "lbl_c_name"; 
tbifo.ltxt = stxt[404]; // Name
euiFFObjArr.push(tbifo);


twifwo = nCurrFFieldOb();
twifwo.fid = "tmp_c_desc";
twifwo.fdv = stxt[40];
twifwo.lid = "lbl_c_desc"; 
twifwo.ltxt = stxt[40]; // Description
euiFFObjArr.push(twifwo);
*/


tyifo = nCurrFFieldOb();
tyifo.fid = "tmp_c_tel";
tyifo.fdv = "Tel";
tyifo.lid = "lbl_c_tel"; 
tyifo.ltxt = "Tel"; 
euiFFObjArr.push(tyifo);




 


tfue = nCurrFFieldOb();
tfue.fid = "tmp_c_web";
tfue.fdv = "http....";
tfue.lid = "lbl_c_web"; 
tfue.ltxt = "Website"; 
euiFFObjArr.push(tfue);
/*
tfuew = nCurrFFieldOb();
tfuew.fid = "tmp_c_email";
tfuew.fdv = "";
tfuew.lid = "lbl_c_email"; 
tfuew.ltxt = "Email"; 
euiFFObjArr.push(tfuew);

tfuew = nCurrFFieldOb();
tfuew.fid = "tmp_c_logoimg";
tfuew.fdv = "";
tfuew.lid = "lbl_c_logoimg"; 
tfuew.ltxt = "Logo"; 
euiFFObjArr.push(tfuew);

tfdxa = null;
tfdxa = nCurrFFieldOb();
tfdxa.fid = "tmp_c_door";
tfdxa.lid = "lbl_c_door"; 
tfdxa.ltxt = stxt[94]; // Zip Code
euiFFObjArr.push(tfdxa);
 
tfxa = null;
tfxa = nCurrFFieldOb();
tfxa.fid = "tmp_c_zipcode";
tfxa.lid = "lbl_c_zipcode"; 
tfxa.ltxt = stxt[80]; // Zip Code
euiFFObjArr.push(tfxa);

tfxca = null;
tfxca = nCurrFFieldOb();
tfxca.fid = "tmp_c_loc_lat";
tfxca.lid = "lbl_c_loc_lat"; 
tfxca.ltxt = "Latitude"; 
euiFFObjArr.push(tfxca);

tfxac = null;
tfxac = nCurrFFieldOb();
tfxac.fid = "tmp_c_loc_lng";
tfxac.lid = "lbl_c_loc_lng"; 
tfxac.ltxt = "Longitude"; 
euiFFObjArr.push(tfxac);



tfuh = nCurrFFieldOb();
tfuh.fid = "tmp_c_street";
tfuh.lid = "lbl_c_street"; 
tfuh.ltxt = stxt[518]; // Street Name or Address
euiFFObjArr.push(tfuh);


tfuh = nCurrFFieldOb();
tfuh.fid = "tmp_c_location";
tfuh.lid = "lbl_c_location"; 
tfuh.ltxt = stxt[526]; // Location
euiFFObjArr.push(tfuh);

tfuq = nCurrFFieldOb();
tfuq.fid = "tmp_c_region";
tfuq.lid = "lbl_c_region"; 
tfuq.ltxt = stxt[527]; // Region 
euiFFObjArr.push(tfuq);


tfuaa = nCurrFFieldOb();
tfuaa.fid = "tmp_c_country";
tfuaa.lid = "lbl_c_country"; 
tfuaa.ltxt = stxt[528]; // Country
euiFFObjArr.push(tfuaa);
 
tfuaza = nCurrFFieldOb();
tfuaza.fid = "tmp_c_placeid";
tfuaza.lid = "lbl_c_placeid"; 
tfuaza.ltxt = "Place ID"; 
euiFFObjArr.push(tfuaza);


tifuaza = nCurrFFieldOb();
tifuaza.fid = "tmp_c_msg";
tifuaza.lid = "lbl_c_msg"; 
tifuaza.ltxt = stxt[552]; // Notes
euiFFObjArr.push(tifuaza);


tfsb = nCurrFFieldOb();
tfsb.fid = "btnAddSoLink";
tfsb.fty = "button";
tfsb.fcl = function() { JSSHOP.ui.setSaveBtnClick(this, function(){doCoLinkAdd()}) };
euiFFObjArr.push(tfsb);
*/
/*
tfsb = nCurrFFieldOb();
tfsb.fid = "btnWHsave";
tfsb.fty = "button";
tfsb.fcl = function() { JSSHOP.ui.setNuSaveBtnClick(this, function(){setWorkHObj("btnWHsave")}, stxt[21]) };
euiFFObjArr.push(tfsb);


tfsb = nCurrFFieldOb();
tfsb.fid = "btnEUsave";
tfsb.fty = "button";
tfsb.fcl = function() { JSSHOP.ui.setSaveBtnClick(this, function(){doPlaceEdit()}) };


euiFFObjArr.push(tfsb);
*/
 
JSSHOP.shared.initFrmComps(euiFFObjArr);


 
JSSHOP.shared.setFrmFieldVal("qlinks", "k_rtype", "5");

JSSHOP.shared.setFrmFieldVal("qlinks", "k_category", "social");
JSSHOP.shared.setFrmFieldVal("qlinks", "k_matter", "http://");
JSSHOP.shared.setFrmFieldVal("qlinks", "k_title", "Social Link");
JSSHOP.shared.setFrmFieldVal("qlinks", "k_privacy", "0");
JSSHOP.shared.setFrmFieldVal("qlinks", "k_userid", quid);
if(currUrlArr.dcid) {
    cid = currUrlArr.dcid;
}
if(cid > 0) {
    JSSHOP.shared.setFrmFieldVal("qlinks", "k_coid", currUrlArr.tpid);

    console.log("currUrlArr.tpid: " + currUrlArr.tpid);
    JSSHOP.shared.setFrmFieldVal("qco", "_id", currUrlArr.tpid);
    tmpFobj = null;
    tmpFobj = {};
    tmpFobj["ws"] = "where _id=?";
    tmpFobj["wa"] = [cid];
    oi = getNuDBFnvp("qco", 5, null, tmpFobj);
    doQComm(oi["rq"], null, "fillPlacesForm");
}

getPropImgs();


if((isJApp !== "no") && (isPhP == "no")) { 
    JSSHOP.ui.addEvent(ttbtn, "click", function() { JSSHOP.jndroid.doPagePopUp("logipal/media_chooser.html", "noQvalue");return false; });
    // app.setQIMeta(doQIMeta());
    } else {
    currMediaBtnPrfx = "";
    currMediaBtnCB = "finishPIcn";
    currMediaFldr = "images/slogos";
    currMediaID=cid;
    doMediaBtnSetup('uploadBtn', '', 'finishMPupload', '../images/slogos');
    }
    tmpPSLdvId = "dvCoLinks";
    tDefClsName = "slmtable bkgdClrWhite brdrClrDlg txtBold txtClrBSLnks crsrPointer";
    tBounceClsName = "rtable bkgdClrWhite brdrClrRed txtBold txtClrRed";
    tActvClsName = "slmtable bkgdClrWhite brdrClrRed txtBold txtClrRed crsrPointer";
    document.getElementById("dvGetSvcsLnk").className = tDefClsName;
    document.getElementById("dvGetPLnk").className = tDefClsName;
    tDocLocHref = document.location.href;
    if(tDocLocHref.indexOf("q=") != -1) {
 
            currPLMtype = "ggl";
        
          JSSHOP.ads.setGboxUp("doGGAdsFill");

    } else {
        currPLMtype = "ebay";
        // JSSHOP.ads.setGboxUp("doGGAdsFill");
        if(JSSHOP.ads.setPrtsPrefCC("part") != "noQvalue") {
        JSSHOP.ads.setEboxUp("doEBAdsFill");
        }
    }
    
  
 

return dmyFnishCntLoad;
 
};

function loadTimeScript() {
    // document.getElementById(lta).innerHTML = ltb;
 
    }

var doAddrEdit = function(ttatype) {
    doMLinkM("aa-edit-address", "pid=aa-edit-address&tapid=" +  tpid + "&tatype=" + ttatype);
}


function doEBAdsFill() {
    JSSHOP.ads.doPgLnkMedia("ebay", 20);
  }

JSSHOP.ads.setEboxUp = function(tQFunct) {
    tIMLStglbObj = JSSHOP.ui.nTglBxOb();
    tIMLStglbObj["ttl"] = "Sponsor Ads"; // the toggle box title
    tIMLStglbObj["dvid"] = "dvEBSearchRes"; // the toggle box div id
    tIMLStglbObj["cntntFnc"] =  tQFunct;
    tIMLStglbObj["content"] = "noQvalue"; // the toggle that goes in above toggle div
    tIMLStglbObj["btn"] = "btnTglLEBm" // the toogle btn id
    tIMLStglbObj["pref"] = "tglLEBm"; // the toogle pref id saved in cookie
    tIMLStglbObj["tbtmpCB"] = "noQvalue"; // null function as callback
    tIMLStglbObj["icn"] = "&#xe3ec;"; // the icon
    tIMLStglbObj["pnid"] = "dvEBSearM"; // the parent node, will just return text if noQvalue
    tIMLStglbObj["appnd"] = "y"; // the parent node, will just return text if noQvalue
    tIMLStglbObj["cut"] = 2000; // the parent node, will just return text if noQvalue
    tIMLStglbObj["clsmaintbl"] = "bkgdClrWhite"; // main table class
    tIMLStglbObj["clstitletd"] = "txtBold txtClrDGreen"; // title box class
    tIMLStglbObj["clsttltxt"] = "txtSmall txtBold txtClrDrkGrn"; // title box text class
    JSSHOP.ui.doTglBox(tIMLStglbObj);
    };
    
  
function doGGAdsFill() {
    JSSHOP.ads.doPgLnkMedia("ggl", 100);
  }
   
  JSSHOP.ads.setGboxUp = function(tQFunct) {
    tIMLStglbObj = JSSHOP.ui.nTglBxOb();
    tIMLStglbObj["ttl"] = "Sponsor Ads"; // the toggle box title
    tIMLStglbObj["dvid"] = "dvGGSearchRes"; // the toggle box div id
    tIMLStglbObj["cntntFnc"] =  tQFunct;
    tIMLStglbObj["content"] = "noQvalue"; // the toggle that goes in above toggle div
    tIMLStglbObj["btn"] = "btnTglLGGPm" // the toogle btn id
    tIMLStglbObj["pref"] = "tglLGGBm"; // the toogle pref id saved in cookie
    tIMLStglbObj["tbtmpCB"] = "noQvalue"; // null function as callback
    tIMLStglbObj["icn"] = "&#xe3ec;"; // the icon
    tIMLStglbObj["pnid"] = "dvEBSearM"; // the parent node, will just return text if noQvalue
    tIMLStglbObj["appnd"] = "y"; // the parent node, will just return text if noQvalue
    tIMLStglbObj["cut"] = 2000; // the parent node, will just return text if noQvalue
    tIMLStglbObj["clsmaintbl"] = "accordion-item bkgdClrWhite"; // main table class
    tIMLStglbObj["clstitletd"] = "txtClrDGreen"; // title box class
    tIMLStglbObj["clsttltxt"] = "txtClrDrkGrn"; // title box text class
    JSSHOP.ui.doTglBox(tIMLStglbObj);
    };
    
    


// data gathering functions




var doCoLinkDelete = function(tmpCLindex, tmpQlid) {
    //carr = currCoLinksArr[tmpVindex];
    cnnarr = removeArrElement(currCoLinksArr, tmpCLindex);
 
    currCoLinksArr = null;
    currCoLinksArr = cnnarr;
    JSSHOP.ui.setCBBClickClr(dvCoLinks,'cls_button cls_button-medium brdrClrDlg txtClrHdr','txtClrHdr bkgdClrWhite', function(){JSSHOP.ui.closeLbox()});

    procNuUIitem("qlinks","k_rtype",tmpQlid,"0","rndrCoLnks");
 
};



var rndrCoLnks = function(za,zb,zc) {

dvCoLinks.innerHTML = "";

theArr = currCoLinksArr;

// alert("rndrCoLnks: " + theArr);
var rclen = theArr.length;
var rciint = 0;
var rcsblen = 0;
var lastcatID = "";
rcts = null;

var tmpScatA = {};
rcnsDv = document.createElement('div');
rcL = "<table style=\"width:100%;max-width:98%\">";
while(rciint < rclen) {
rcts = theArr[rciint];
tKmatter = unescape(decodeURIComponent(rcts.k_matter));
tKshrtMatter = tKmatter;
tKfnlMatter = "";
if(tKmatter.length > 20) {
    tKshrtMatter = tKmatter.substring(0,20) + "...";

}
if(tKmatter.indexOf("http") != -1) {
    tKfnlMatter = "<a href=\"" + tKmatter + "\" target=\"_blank\">" + tKshrtMatter + "</a>";
} else {
    tKfnlMatter = tKshrtMatter;
}

// rcnsDv.className = "collection-item txtDecorNone margleft"; 
rcL += "<tr><td><span class=\"txtBold\"><img src=\"images/misc/ts-icon-" + rcts.k_category + ".png\" class=\"icnsmlbtn\"></span></td>";
rcL += "<td>" + tKfnlMatter;

//rcL += "<tr><td><span class=\"txtBold\"><img src=\"images/misc/ts-icon-" + rcts.k_category + ".png\" class=\"icnsmlbtn\"></span></td><td><span class=\"txtSmall txtClrGrey\">" + rcts.k_title + "</span></td><td>" + unescape(decodeURIComponent(rcts.k_matter));
rcL += "</td><td><button  onclick=\"javascript:doCoLinkDelete(" + rciint + "," + rcts._id + ");\" class=\"crsrPointer txtXLrg txtBold slmtable bkgdClrWhite brdrNone txtClrDrkGrn\"><i class=\"txtClrRed brdrClrWhite bkgdClrWhite menu-material-icons\" alt=\"delete\" title=\"delete\">&#xe92b;</i></button>";
rcL += "</td></tr>";
// rcnsDv.innerHTML = "<span class=\"txtBold\">" + rcts.k_category + "</span><br>" + rcts.k_matter;
rciint++;
}
rcL += "</table>";
rcnsDv.innerHTML = rcL + "<br>";
dvCoLinks.appendChild(rcnsDv);
if(za == "y") {
    setTimeout("JSSHOP.ui.setCBBClickClr(dvCoLinks,'cls_button cls_button-medium brdrClrDlg txtClrHdr','txtClrHdr bkgdClrWhite', function(){JSSHOP.ui.closeLbox()})", 1000);
}

// dvCoLinks.innerHTML = JSON.stringify(currCoLinksArr);
};

var rndrCoLogo = function(arcl, brcl, crcl) {
};
var finishCOLupload = function(theMMum) {
alert("finishCOLupload: " + theMMum);

};

var setCurrCoLinks = function(tCCLA, tCCLB, tCCLC) {
    rndrWorkHObj();
if(tCCLB.indexOf("_id") != -1) {
    currCoLinksArr = null;
    currCoLinksArr = [];
// alert("setCurrCoLinks: " + tCCLB);
currCoLinksArr = JSON.parse(tCCLB);
rndrCoLnks(tCCLA, tCCLB, tCCLC);
}
}

var doWSfnsh = function(fvtwCat, fvtwTtl, fvtwMat) {
console.log("doWash(----doWSfnsh): " + fvtwTtl);
}
function doCoKill() {
procNuUIitem("qco","c_rtype",cid,10,"doWSfnsh");
}



var fnshCoLinkAdd = function(tCCLA, tCCLB, tCCLC) {
    // alert("fnshCoLinkAdd: " + tCCLB);
    stopSpin("btnAddSoLink");
    btnAddSoLink.innerHTML = "";
    JSSHOP.ui.setCBBClickClr(btnAddSoLink,'cls_button cls_button-medium  bkgdClrDGreen txtClrWhite','cls_button cls_button-medium bkgdBBlue txtSmall', function(){document.getElementById("btnAddSoLink").innerHTML=stxt[70];document.getElementById("btnAddSoLink").disabled=false;});

    // JSSHOP.ui.setCBBClickClr(btnAddSoLink,'txtXLrg txtBold slmtable bkgdClrDGreen txtClrWhite','txtXLrg txtBold slmtable bkgdClrWhite brdrNone txtClrDrkGrn', function(){document.getElementById("btnAddSoLink").disabled=false;});
   //  document.getElementById("btnAddSoLink").innerHTML="<i class=\"txtBold txtClrDrkGrn brdrClrWhite bkgdClrWhite material-icons\" alt=\"add\" title=\"add\">&#xe145;</i>";
        tmpDOs = null;
        tmpDOs = {};
        tmpDOs["ws"] = "where k_coid=? and k_rtype=?";
        tmpDOs["wa"] = [cid,5]; 
        oi = getNuDBFnvp("qlinks",5,null,tmpDOs);
        doQComm(oi["rq"], "y", "setCurrCoLinks");
    }; 
    
    
 
    
    var doCoLinkAdd = function() {
        JSSHOP.shared.setFrmFieldVal("qlinks", "k_userid", quid);
        JSSHOP.shared.setFrmFieldVal("qlinks", "k_coid", JSSHOP.shared.getFrmFieldVal("qco", "_id", 0));
        JSSHOP.shared.setFrmFieldVal("qlinks", "k_dadded", JSSHOP.getUnixTimeStamp());
        // JSSHOP.shared.setDynFrmVals(document["qlinks"], "tmp_");

        tmpFobj = null;
        tmpFobj = {};
        tmpFobj["knvp"] = JSSHOP.shared.getKNVParr(JSSHOP.shared.getDynFrmVals(document["qlinks"], "tmp_"));
        tmpKmatter = JSSHOP.shared.getFrmFieldVal("qlinks", "k_matter", 0);
        // JSSHOP.shared.setDynFrmVals(document["qlinks"], "tmp_");
        if(JSSHOP.shared.getFrmFieldVal("qlinks", "k_matter", 0) == "") {
            alert("Please enter a link");
            stopSpin("btnAddSoLink");
            btnAddSoLink.innerHTML = "";
            JSSHOP.ui.setCBBClickClr(btnAddSoLink,'cls_button cls_button-medium  bkgdClrDYellow txtClrWhite','cls_button cls_button-medium bkgdBBlue txtSmall', function(){document.getElementById("btnAddSoLink").innerHTML=stxt[70];document.getElementById("btnAddSoLink").disabled=false;});
        
            return;
        }
        if((JSSHOP.shared.getFrmFieldVal("qlinks", "k_title", 0) == "") || (JSSHOP.shared.getFrmFieldVal("qlinks", "k_title", 0) == "noQvalue")){
            alert("Please enter a tcategory");
            stopSpin("btnAddSoLink");
            btnAddSoLink.innerHTML = "";
            JSSHOP.ui.setCBBClickClr(btnAddSoLink,'cls_button cls_button-medium  bkgdClrDYellow txtClrWhite','cls_button cls_button-medium bkgdBBlue txtSmall', function(){document.getElementById("btnAddSoLink").innerHTML=stxt[70];document.getElementById("btnAddSoLink").disabled=false;});
        
            return;
        }
        if(tmpKmatter.indexOf("facebook.com") != -1) {
            JSSHOP.shared.setFrmFieldVal("qlinks", "k_category", "facebook");
            // try to ectract username or id from url
            tmpKmatter = tmpKmatter.replace("https://www.facebook.com/", "");
            tmpKmatter = tmpKmatter.replace("http://www.facebook.com/", "");
            tmpKmatter = tmpKmatter.replace("https://facebook.com/", "");
            tmpKmatter = tmpKmatter.replace("http://facebook.com/", "");
            tmpKmatter = tmpKmatter.replace("www.facebook.com/", "");
            tmpKmatter = tmpKmatter.replace("facebook.com/", "");
            tmpKmatter = tmpKmatter.replace("www.facebook.com/", "");
            tmpKmatter = tmpKmatter.replace("facebook.com/", "");
        } else if(tmpKmatter.indexOf("twitter.com") != -1) {
            JSSHOP.shared.setFrmFieldVal("qlinks", "k_category", "twitter");
            // try to ectract username or id from url
            tmpKmatter = tmpKmatter.replace("https://www.twitter.com/", "");
            tmpKmatter = tmpKmatter.replace("http://www.twitter.com/", "");
            tmpKmatter = tmpKmatter.replace("https://twitter.com/", "");
            tmpKmatter = tmpKmatter.replace("http://twitter.com/", "");
            tmpKmatter = tmpKmatter.replace("www.twitter.com/", "");
            tmpKmatter = tmpKmatter.replace("twitter.com/", "");
        } else if(tmpKmatter.indexOf("linkedin.com") != -1) {
            JSSHOP.shared.setFrmFieldVal("qlinks", "k_category", "linkedin");
            // try to ectract username or id from url
            tmpKmatter = tmpKmatter.replace("https://www.linkedin.com/", "");
            tmpKmatter = tmpKmatter.replace("http://www.linkedin.com/", "");
            tmpKmatter = tmpKmatter.replace("https://linkedin.com/", "");
            tmpKmatter = tmpKmatter.replace("http://linkedin.com/", "");
            tmpKmatter = tmpKmatter.replace("www.linkedin.com/", "");
            tmpKmatter = tmpKmatter.replace("linkedin.com/", "");
        } else if(tmpKmatter.indexOf("whatsapp.com") != -1) {
            JSSHOP.shared.setFrmFieldVal("qlinks", "k_category", "whatsapp");
           } else {
         }


        // startSpin("btnAddSoLink");
        // check if the 
        // alert("doCoLinkAdd: " + oi["rq"]);
        
        oi = getNuDBFnvp("qlinks", 6, null, tmpFobj);
        doQComm(oi["rq"], null, "fnshCoLinkAdd");
    };


var doCoWLinkAdd = function(twCat, twTtl, twMat) {
    console.log("doWash(doCoWLinkAdd): " + JSON.stringify(arguments));
    JSSHOP.shared.setFrmFieldVal("qlinks", "k_category", twCat);
    JSSHOP.shared.setFrmFieldVal("qlinks", "k_title",  twTtl);
    JSSHOP.shared.setFrmFieldVal("qlinks", "k_matter", twMat);
    JSSHOP.shared.setFrmFieldVal("qlinks", "k_dadded", JSSHOP.getUnixTimeStamp());
	// JSSHOP.shared.setDynFrmVals(document["qlinks"], "tmp_");
    tmpFobj = null;
    tmpFobj = {};
    // tmpFobj["knvp"] = JSSHOP.shared.getKNVParr(JSSHOP.shared.getDynFrmVals(document["qlinks"], "tmp_"));
tmpFobj["knvp"] = JSSHOP.shared.getFrmVals(document["qlinks"], "nada");
  
  oi = getNuDBFnvp("qlinks", 6, null, tmpFobj);
    console.log("doWash(doCoLinkAdd): " + oi["rq"]);
    doQComm(oi["rq"], twCat, "doWSfnsh");
};


function procWfArr() {
console.log("doWash(PROOOOOOOArr): " + JSON.stringify(tmpWfArr));

tcheckBoArr = document.getElementsByTagName("input");
iCWari = 0;
tCmnPWArr = [];
while(iCWari < tcheckBoArr.length) {
iTCBEL = tcheckBoArr[iCWari];
if(iTCBEL.type == "checkbox") {
// console.log("doWash(procWfArr)checkbox: " + iTCBEL.value);
if((iTCBEL.checked) && (iTCBEL.name == "Checkbox1")) {
console.log("doWash(procWfArr)goood: " + iTCBEL.value);
tCmnPWArr.push(tmpWfArr[iTCBEL.value]);
}
} else {
// console.log("doWash(procWfArr)no: " + iTCBEL.value);
}
iCWari++;
}
tmpWfArr = null;
tmpWfArr = "";
tmpWfArr = tCmnPWArr;
console.log("doWash(tCmnPWArr): " + JSON.stringify(tCmnPWArr));
showWfArr();
procDBWfArr();
}

function doULfnsh(aaw, aawb, aawc) {
    try {
        image = null;
        image = new Image();
        tustr = "images/slogos/s_thumb" + aaw;
        image.src = tustr;
    // document.getElementById('dvPLogoImg').style.backgroundImage="url(" + tustr + ")"; 
     document.getElementById('dvPLogoImg').src = tustr; 
 
    } catch(e) {
    alert(e);
    }
console.log("doWash(doULfnsh): " + JSON.stringify(arguments));
procNuUIitem("qco","c_logoimg",tpid,aaw,"doWSfnsh");
}

function procDBWfArr() {
tSWFAstr = "";
iWari = 0;
var tImgFname = JSSHOP.getUnixTimeStamp();



while(iWari < tmpWfArr.length) {
console.log("procDBWfArr: " + JSON.stringify(tmpWfArr))
tswFObj = null;
tswFObj = "";
tswFObj = tmpWfArr[iWari];
switch(tmpWfArr[iWari].wshtype) {
case "logoimg":
    JSSHOP.ajax.doNuAjaxPipe(tImgFname + ".gif", "_p/uloadr.php?qv=" + tImgFname + "&pi=" +   encodeURI(tmpWfArr[iWari].mtr), doULfnsh);
break;
case "tel":
procNuUIitem("qco","c_tel",tpid,tmpWfArr[iWari].mtr,"doWSfnsh");
break;
case "email":
procNuUIitem("qco","c_email",tpid,tmpWfArr[iWari].mtr,"doWSfnsh");
break;
case "whatsapp":
doCoWLinkAdd("whatsapp","whatsapp",tmpWfArr[iWari].mtr);
break;
case "twitter":
doCoWLinkAdd("twitter","twitter",tmpWfArr[iWari].mtr);
break;
case "linkedin":
doCoWLinkAdd("linkedin","linkedin",tmpWfArr[iWari].mtr);
break;
case "facebook":
doCoWLinkAdd("facebook","facebook",tmpWfArr[iWari].mtr);
break;
default:
    c_web.value = tmpWfArr[iWari].mtr;
procNuUIitem("qco","c_web",tpid,tmpWfArr[iWari].mtr,"doWSfnsh");

break;
}
console.log("doWash(procDBWfArr): " + tmpWfArr[iWari].wshtype + " :: " + tmpWfArr[iWari].mtr)
iWari++;
}
 
}





function nng(node) {
    if (typeof node === "string") {
        node = document.getElementById(node);
    }

    var arrayOfText = [];
            var tmpUstring = "";
function walkTheDOM(node, func) {
    func(node);
    node = node.firstChild;
    while (node) {
        walkTheDOM(node, func);
        node = node.nextSibling;
    }
}

    function pushVal(currentNode) {
        tmpNID = "";
		 tNName = "";
	    tNCNVal = "";
	    tNNVal = "";
        tNNtype =  "";
        tHref =  "";
        tIsrc =  "";
       tNNtype =  currentNode.nodeType; 
		tNNid = currentNode.id;
		tNName = currentNode.name;
		if(currentNode.src) {
		tIsrc = currentNode.src;
		}
		if(currentNode.href) {
		tHref = currentNode.href;
		}
		if(currentNode.nodeName) {
       tNodeName = currentNode.nodeName;
		}
		if(currentNode.firstChild) {
		if(currentNode.firstChild.nodeValue) {
		tNCNVal = currentNode.firstChild.nodeValue;
		}
		}
		if(currentNode.nodeValue) {
		tNNVal = currentNode.nodeValue;
		}
		if(currentNode.innerText) {
		tNNVal = currentNode.innerText;
		}
        console.log("doWash(pushVal): " + tNName + ":" + tNNtype + ":"  + tNNVal + ":" + tNCNVal + ":" + tHref + ":" + tIsrc);
        }
    walkTheDOM(node, pushVal);
    // return tmpUstring;
};
 


function doSply(tSplyI) {
tmpQWfArr = null;
tmpQWfArr = "";
tmpQWfArr = removeArrElement(tmpWfArr, tSplyI);
tmpWfArr = null;
tmpWfArr = "";
tmpWfArr = tmpQWfArr;
showWfArr();
}

 
function showWfArr() {
tSWFAstr = "";
iWari = 0;
while(iWari < tmpWfArr.length) {
tswFObj = null;
tswFObj = {};
tswFObj = tmpWfArr[iWari];

tSWFAstr += "<div class=\"rtable brdrClrHdr\"><input name=\"Checkbox1\" type=\"checkbox\" value=\"" + iWari + "\">";
if(tswFObj.wshtype == "logoimg") {
tSWFAstr += "<img src=\"" + tswFObj.mtr + "\" class=\"icndbtn\">";
}
tSWFAstr += "<a href=\"javascript:doSply(" + iWari + ")\">" + tswFObj.wshtype + "</a>: " + tswFObj.ttl + " : " + tswFObj.mtr + "</div>";


iWari++;
}
dvWout.innerHTML = tSWFAstr;
}

function doWash(tWdvDv) {
// var re = /[^< ]+(?=>)/g;
wemail = "";
tWdvStr = tWdvDv.innerHTML;
tmpWfArr = null;
tmpWfArr = "";
tmpWfArr = [];
tWfObj = null;
tWfObj = "";
tWfObj = {};
tAharr = tWdvDv.getElementsByTagName("a");
iqi = 0;
tHasL = "no";


if(tWdvStr.indexOf("@") != -1) {
    try {
tWdvStr.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi).forEach(function(wemail) {
  console.log("doWash(match-email): " + wemail);
// procNuUIitem("qco","c_email",cid,wemail,"doNada");
tWfObj["mtr"] = wemail;
tWfObj["wshtype"] = "email";
tWfObj["ttl"] = "email";
tmpWfArr.push(tWfObj);
});
tHasL = "y";
    } catch(err) {
        console.log("doWash(match-email): " + err.message);
    }

}

while(iqi < tAharr.length){
tWfObj = null;
tWfObj = "";
tWfObj = {};
tpWThref = tAharr[iqi].href;
tWThref = tpWThref.toLowerCase();
tHasL = "no";

if(tWThref.indexOf("tel:") != -1) {
tWUAT = tWThref.replace("tel:","");
tWfObj["wshtype"] = "tel";
tWfObj["ttl"] = "tel";
tWfObj["mtr"] = tWUAT;
console.log("doWash(match-tel): " + tWUAT);
tHasL = "y";
// procNuUIitem("qco","c_tel",cid,tWUAT,"doNada");
} 
if(tWThref.indexOf("whatsapp") != -1) {
// tWUAR = JSSHOP.shared.urlToArray(tWThref);
tWUAT = tpWThref.replace(/\D/g, "");
// str.replace(/\D/g, "");
// tWUAT = tWUAR.phone;
console.log("doWash(match-whatsapp): " + tWUAT);
tWfObj["wshtype"] = "whatsapp";
tWfObj["ttl"] = "whatsapp";
tWfObj["mtr"] = tWUAT;
tHasL = "y";
// doCoWLinkAdd("whatsapp","whatsapp",tWUAT);
}
if(tWThref.indexOf("twitter.com") != -1) {
console.log("doWash(twitter): " + tAharr[iqi].href);
tWfObj["wshtype"] = "twitter";
tWfObj["ttl"] = "twitter";
tWfObj["mtr"] = tAharr[iqi].href;
tHasL = "y";
// doCoWLinkAdd("twitter","twitter",tWThref);
}
if(tWThref.indexOf("facebook.com") != -1) {
console.log("doWash(facebook): " + tWThref);
// doCoWLinkAdd("facebook","facebook",tAharr[iqi].href);
tWfObj["wshtype"] = "facebook";
tWfObj["ttl"] = "facebook";
tWfObj["mtr"] = tAharr[iqi].href;
tHasL = "y";
}
if(tWThref.indexOf("linkedin.com") != -1) {
console.log("doWash(linkedin): " + tAharr[iqi].href);
tWfObj["wshtype"] = "linkedin";
tWfObj["ttl"] = "linkedin";
tWfObj["mtr"] = tAharr[iqi].href;
tHasL = "y";
}

if(tHasL == "no") {
console.log("doWash(other) : " + tAharr[iqi].href);
tWfObj["wshtype"] = "other";
tWfObj["ttl"] = "other";
tWfObj["mtr"] = tAharr[iqi].href;
// tHasL = "y";
}
tmpWfArr.push(tWfObj);
iqi++;
}

tImgharr = tWdvDv.getElementsByTagName("img");
imqi = 0;

while(imqi < tImgharr.length){
if(tImgharr[imqi].src) {
tIwfObj = null;
tIwfObj = "";
tIwfObj = {};
tIwfObj["wshtype"] = "logoimg";
tIwfObj["ttl"] = "logoimg";
tIwfObj["mtr"] = tImgharr[imqi].src;
tmpWfArr.push(tIwfObj);
}
imqi++;
}

showWfArr();
// tWdvDv.innerHTML = "";
}

function clearDGView() {
    document.getElementById("dvtred").innerHTML="";
    document.getElementById("dvWout").innerHTML="";
}




















// media button functions for the shop logo

function fnishMMadd(aa,bb,cc) { 
    getPropImgs();
    JSSHOP.ui.closeLbox();
    };

var finishMPupload = function(theMMum) {
    try {
    

        image = null;
        image = new Image();
        image.src = "images/slogos/s_thumb" + theMMum;
                // document.getElementById('dvPLogoImg').style.backgroundImage="url(images/slogos/s_thumb" + theMMum + ")"; 
                if(document.getElementById('dvProdImgs').innerText == "dvProdImgs") {
                document.getElementById('dvPLogoImg').src = "images/slogos/s_thumb" + theMMum;
                JSSHOP.shared.setFrmFieldVal("qmedia", "m_file", theMMum);
                doPrdMMain();
                }
        // document.getElementById('dvPLogoImg').style.backgroundImage="url(images/slogos/s_thumb" + theMMum + ")";    
        document.getElementById("progressBar").appendChild(image);
         JSSHOP.shared.setFrmFieldVal("qmedia", "m_file", theMMum);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_file_thumb", "s_thumb" + theMMum);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_coid", cid);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_uid", quid);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_pid", cid);
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
    
var fnshProdMDel = function(aa,bb,cc) { 
	getPropImgs();
JSSHOP.ui.closeLbox();
};

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
if(confirm(stxt[521] +   "?: " + JSSHOP.shared.getFrmFieldVal("qmedia", "m_file", 0))) {
    procNuUIitem("qco","c_logoimg",JSSHOP.shared.getFrmFieldVal('qco','_id',0), JSSHOP.shared.getFrmFieldVal("qmedia", "m_file", 0), "donePIcnMn");

    }
};
 

var getPropIEditDv = function(tpIncrNPI, tpFImg) {
	console.log("getPrdImgEditDv " + tpIncrNPI + " " + tpFImg);
tpPIEDv = document.createElement('div');
JSSHOP.shared.setFrmFieldVal("qmedia", "_id", tpIncrNPI);
JSSHOP.shared.setFrmFieldVal("qmedia", "m_file", tpFImg);
 
tmpRetStr = "<img src=\"images/slogos/" + tpFImg +  "\" style=\"width: 100%\"  class=\"\" onclick=\"alert('" + JSSHOP.shared.getFrmFieldVal("qmedia", "_id", "0") + "');\">"
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

var setPropImgs = function(theAIa, theAIb, theAIc) {
	try {
        console.log("setPropImgs: " + theAIa + " " + theAIb + " " + theAIc);

    if(theAIb.indexOf("_id") != -1) {

		tAiretArr = JSON.parse(theAIb);
		var len = tAiretArr.length;
        tstr = "";
        iint = 0;
        while (iint < len) {
            if(tAiretArr[iint]["m_file"] == c_logoimg.value) {
                tstr += "<div style=\"float:left\" class=\"crsrPointer brdrClrRed\">";
            } else {
			tstr += "<div style=\"float:left\" class=\"crsrPointer\">";
            }
 			tstr += "<img src=\"images/slogos/" + tAiretArr[iint]["m_file_thumb"] + "\" class=\"icndbtn slmtable\" onclick=\"javascript:JSSHOP.ui.popAndFillLbox(getPropIEditDv('" + tAiretArr[iint]["_id"] + "','" + tAiretArr[iint]["m_file"] + "'));\">";
			tstr += "</div>";
 
			iint++;
		}
		document.getElementById("dvProdImgs").innerHTML = tstr;
	}
	} catch(e) {
		alert("setPropImgs: " + e);
	}
};

var getPropImgs = function() {
    tmpFobj = null;
    tmpFobj = {};
    tmpFobj["ws"] = "where m_uid=? and m_pid=? and m_rtype=?";
    tmpFobj["wa"] = [quid, cid, 5];
	tmpFobj["o"] = "m_vala desc";
    oi = getNuDBFnvp("qmedia", 5, null, tmpFobj);
    doQComm(oi["rq"], null, "setPropImgs");
};








// map functions map functions map functions map functions
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

        

        tSrchIval = document.getElementById("c_zipcode").value;

        tSrchIval += " " + document.getElementById("c_location").value;
        JSSHOP.ajax.doNuAjaxPipe("dvPSearch", "_p/osmgeo.php?qv=" + encodeURI(tSrchIval), getCPlcesLRes);

    }                                              
    // alert("runPlacesSearch: " + JSON.stringify(currMapMrkrArr));
    
	}




    
function doGenPEMap() {
    try {
iti = 0; 

xaCstr = document.getElementById('map').innerHTML;
  if(xaCstr.length > 4){
     
 console.log("Map Already Exists");
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




    var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
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
    zoom: 14,
    minZoom: 6,
    maxZoom: 18,
    zoomControl: false,
    preferCanvas: false,
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


 // layerControl = L.control.layers(baseMaps).addTo(map);







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
            document.getElementById("tmp_c_loc_lat").value = currStartLat;
            document.getElementById("tmp_c_loc_lng").value = currStartLng;
            // alert('f: ' + JSON.stringify(e));
            map.closePopup();
            JSSHOP.ui.closePopMenus();
            scrollToElement("tmp_c_loc_lat");
            JSSHOP.ui.setCBBClickClr(document.getElementById("tmp_c_loc_lat"),'cls_button cls_button-medium brdrClrDlg txtClrHdr',document.getElementById("tmp_c_loc_lat").className, function(){void(0)});
        }); 
/**/
map.on('contextmenu', function(e) {
        currStartLat = e.latlng.lat;
        currStartLng = e.latlng.lng;
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
if(isJApp == "yes") {
    app.doscrllVwToTop();
 
    } 
setTimeout(function () {
    window.dispatchEvent(new Event('resize'));
}, 1000);

} catch(e) {
alert("popLboxMap: " + e);
}
}




function getPlaceCrdsM() {
            if(isJApp == "yes") {
                tOldHref = document.location.href;
                tCleanRef = "clean.html"
        
                tOldHref = document.location.href;
                if(tOldHref.indexOf("recamby.com") != -1) {
                    tnewHref = "https://www.recamby.com/clean.html";
             
                } else {
                    tnewHref = "https://titan/recamby/clean.html";
                }
        
        
                if(tOldHref.indexOf("?") != -1) {
                    // get everything after the ?
                    tAddonSTr = tOldHref.split("?")[1];
        
          tnewHref = tnewHref + "?" + tAddonSTr + "&st=map&cid=" + cid + "&quid=" + quid;        
        
                } else {
                    tnewHref = tnewHref + "?&cid=" + cid + "st=map";
                }
                theFill = "This is a test";
                document.location.href = tnewHref;
            
            
            } else {  // end of isJApp


    tCllLatVal = document.getElementById("c_loc_lat").value;
    tCllLngVal = document.getElementById("c_loc_lng").value;
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
        // mtImDSStr = "js/leaflet/images/marker-icon.png";
        mtImDSStr = dvPLogoImg.src;
        mredIcon = new LeafIcon({iconUrl: mtImDSStr});
           var options = { icon: mredIcon, closeOnClick: true };
   
        tMrkr = null;
        tMrkr = "";
        tCrdsArr = getCoordinates(tCllLatVal, tCllLngVal, 7.0, 91);
        tLatQcStr = String(tCrdsArr[0]);
        tLngQcStr = String(tCrdsArr[1]);
        tMrkr  = L.marker([tLatQcStr, tLngQcStr], options).bindPopup('<span class="txtBold txtClrRed"><a href="javascript:map.closePopup();">' + stxt[531] + '</a></span>');
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
    tFullRstr = "...";
    tStreetVal = document.getElementById("c_street").value;
    tLocVal = document.getElementById("c_location").value;
    tZipVal = document.getElementById("c_zipcode").value;
    if(tStreetVal.length < 2){
        tRetErrSTr = stxt[518];
        tFullRstr += "<br>- " + tRetErrSTr;
    }
    if(tLocVal.length < 2) {
        tRetErrSTr = stxt[526];
        tFullRstr += "<br>- " + tRetErrSTr;
    }
    if(tZipVal.length < 2) {
        tRetErrSTr = stxt[80];
        tFullRstr += "<br>- " + tRetErrSTr;
    }
    if(tFullRstr.length > 5) {
        tClosePopSTr =  "<div onclick=\"JSSHOP.ui.closeLbox();\" class=\"slmtable txtClrRed txtBold brdrClrRed crsrPointer\" style=\"float:right\">" + stxt[804] + "</div>";

        tAFullRstr = tClosePopSTr + stxt[532] + "<br>" + tFullRstr;

        JSSHOP.ui.popAndFillLbox(tAFullRstr);
       return;
    } else {
    tSrchIval = tmp_c_street.value + " " + tmp_c_location.value;
    //qlDoNuPlSearch("dvPSearch", "dvPSearch", "qlShowPlacesRes");
    JSSHOP.ajax.doNuAjaxPipe("dvPSearch", "_p/osmgeo.php?qv=" + encodeURI(tSrchIval), getPlcesLRes);
    }
    }
    } // end of else isJApp
}