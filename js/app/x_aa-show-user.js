currPgTitle = stxt[31] + " " + stxt[56];
document.title = currPgTitle; 
var euiFFObjArr = null;
var euiFFObjArr = [];

ck_name = /^[A-Za-z0-9 ]{3,20}$/;
ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
ck_username = /^[A-Za-z0-9_]{5,20}$/;
ck_password =  /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;






var doShopsList = function(a,theResp,c) {
// document.getElementById("includedContent").innerHTML = theResp;

// alert(JSON.parse(theResp));
hasr = "n";
fullstr = "";
tFullTknCoSTr = "";
var arrToFill = JSON.parse(theResp);
var len = arrToFill.length;
var iint = 0;
var pcid = 0;
tstr = "";
while(iint < len) {
ts = arrToFill[iint];
tFullTknCoSTr += ":" + ts._id + ":";
tstr += "<tr>";
// tstr += "<td>" + ts._id + "</td>";
//   tstr += "<td><a href=\"index.html?pid=aa-edit-place&tpid=" + ts._id + "\">" + ts._id + "</a></td>";

tstr += "<td><a href=\"javascript:eindex('aa-edit-place', 'pid=aa-edit-place&tpid=" + ts._id + "');\">" + ts._id + "</a></td>";
if(ts.c_category == "202") {
    tstr += "<td><a href=\"javascript:eindex('aa-edit-parts-category', 'pid=aa-edit-parts-category&cid=" + ts._id + "');\"><img src=\"images/misc/parts_w.gif\" style=\"vertical-align: middle; max-width: 27px; max-height: 27px;\" class=\"icnsmlbtn\"></a></td>";
    } else {
    tstr += "<td><a href=\"javascript:eindex('aa-edit-svs-categories', 'pid=aa-edit-svs-categories&cid=" + ts._id + "');\"><img src=\"images/misc/mec2_w.gif\" style=\"vertical-align: middle; max-width: 27px; max-height: 27px;\" class=\"icnsmlbtn\"></a></td>";
    }
tstr += "<td><a href=\"javascript:eindex('aa-show-place', 'pid=aa-show-place&cid=" + ts._id + "');\">" + ts.c_name + "</a></td>";

// tstr += "<td><a href=\"index.html?pid=aa-edit-place&tpid=" + ts._id + "\">" + ts.c_name + "</a></td>";
// tstr += "<td style=\"min-width: 38px;\" class=\"txtClrHdr\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>";
//  tstr += "<td class=\"txtClrHdr\"><a href=\"index.html?pid=aa-edit-categories&cid=" + ts._id + "\"><i class=\"small-material-icons txtClrDlg\" alt=\"edit\" title=\"edit\">&#xe3c9;</i></a></td>";
if(ts.c_category == "202") {
tstr += "<td><a href=\"javascript:eindex('aa-edit-parts-category', 'pid=aa-edit-parts-category&cid=" + ts._id + "');\"><i class=\"small-material-icons txtClrDlg\" alt=\"edit\" title=\"edit\">&#xe3c9;</i></a></td>";
} else {
tstr += "<td><a href=\"javascript:eindex('aa-edit-svs-categories', 'pid=aa-edit-svs-categories&cid=" + ts._id + "');\"><i class=\"small-material-icons txtClrDlg\" alt=\"edit\" title=\"edit\">&#xe3c9;</i></a></td>";
}
// tstr with eindex

tstr += "</tr>";
iint++;
}
newel = document.createElement('div');

tAddCoUrlSTr = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"txtBold txctClrHdr bkgdClrNrml\"><a href=\"javascript:loadJSModal('tplates/aa-mod-add-co.html?tt=" + JSSHOP.getUnixTimeStamp() + "');\" class=\"txtBold txctClrHdr bkgdClrNrml\">+" + stxt[70] + "</a></span>";

if(arrToFill[0]) {
strTHhtml = "<th><span style=\"margin-right: 10px; margin-top: 10px\" class=\"txtBold\">ID</span></th>";
strTHhtml += "<th><span style=\"margin-right: 10px; margin-top: 10px\" class=\"txtBold\">ID</span></th>";

// strTHhtml += "<th><span style=\"margin-right: 10px; margin-top: 10px\" class=\"txtBold\"><i class=\"menu-material-icons\">&#xe896</i></span></th>";
strTHhtml += "<th><span style=\"margin-right: 10px; margin-top: 10px\" class=\"txtBold\">" + stxt[404] + "</span></th>";

 strTHhtml += "<th><span style=\"margin-right: 10px; margin-top: 10px\" class=\"txtBold\">" + stxt[95] + "</span></th>";

// strTHhtml += "<th><span style=\"margin-right: 10px; margin-top: 10px\" class=\"txtBold\"><i class=\"menu-material-icons\">&#xe896</i></span>View</th>";
tmpFstr = getTblSortStr(strTHhtml, tstr);
tmpFFstr = "<div class=\"slmtable bkgdClrWhite brdrClrHdr\" style=\"margin: 0 auto;max-width:600px;padding: 10px;margin-left: 15px;margin-right: 15px;\"><div class=\"txtBold txtSmall txtClrHdr\">" + stxt[519] + "</div>" + tmpFstr + "</div>";
document.getElementById("dvShops").innerHTML = tmpFFstr;
} else {
tmpFFstr = "<div class=\"slmtable bkgdClrWhite brdrClrHdr\" style=\"margin: 0 auto;max-width:600px;padding: 10px;margin-left: 15px;margin-right: 15px;\"><div class=\"txtBold txtSmall txtClrHdr\">" + stxt[519] + "</div>" + stxt[520] + "</div>";
document.getElementById("dvShops").innerHTML = tmpFFstr;
}
// check if cuid cookie is set and if not set it with a tFullTknCoSTr string
if(JSSHOP.cookies.getCookie("cuid") !== null) {
if((JSSHOP.cookies.getCookie("cuid") !== tFullTknCoSTr) || (JSSHOP.cookies.getCookie("cuid") == "") || (JSSHOP.cookies.getCookie("cuid") == "null") || (JSSHOP.cookies.getCookie("cuid") == "undefined") || (JSSHOP.cookies.getCookie("cuid") == "noQvalue")) {
JSSHOP.cookies.setCookie("cuid",tFullTknCoSTr,"90","","","");
}
} else {
JSSHOP.cookies.setCookie("cuid",tFullTknCoSTr,"90","","","");
}

};
 



var cbFedit = function(a,b,c) {
JSSHOP.ui.setCBBClickClr(btnEUsave,'cls_button cls_button-medium  bkgdClrDGreen txtClrWhite','cls_button cls_button-medium', function(){document.getElementById("btnEUsave").innerHTML=stxt[21];document.getElementById("btnEUsave").disabled=false;});
arrAllForms.quser.v[0] = JSSHOP.shared.getFrmObj(document["quser"]);
};


var doNUserEdit = function() {
    tmpFobj = null;
    tmpFobj = {};
    tmpFobj["knvp"] = JSSHOP.shared.getKNVParr(JSSHOP.shared.getDynFrmVals(document["quser"], "tmp_"));
    tmpFobj["ws"] = "where _id=?";
    tmpFobj["wa"] = [quid];
    oi = getNuDBFnvp("quser", 7, null, tmpFobj);
    doQComm(oi["rq"], null, "cbFedit");
};


var doUserEdit = function() {
if(JSSHOP.shared.valVOarr(euiFFObjArr, "dvVdtnError")) {
document.getElementById("btnEUsave").disabled=true;
// smlspinner.spin(dvSpinner);
doNUserEdit();
}
// var cars = ["tmp_u_name","tmp_u_pass"]; 
// if(JSSHOP.shared.valFieldVals(cars)) {doNUserEdit();}
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

var removeFnish = function(a,b,c) {
 JSSHOP.shared.doLogout();
    };
var doRemFnish = function(a,b,c) {
    procNuUIitem("quser","u_rtype",quid,10,"removeFnish");
};
var doRemQ = function() {
    if(document.getElementById("chkRmvListings").checked) {
        tRmvStr = "yes";
    } else {
        tRmvStr = "no";
    }
    if(tRmvStr == "yes") {
        document.getElementById("c_rtype").value  = 10;
        // remove all store listings (qco) for this user (quid
        tmpDiOs = null;
        tmpDiOs = {};
        tmpDiOs["ws"] = "where c_uid=? and c_rtype=?";
        tmpDiOs["wa"] = [quid,5];
        tmpDiOs["knvp"] = JSSHOP.shared.getFrmVals(document["qco"], "nada");
        oi = getNuDBFnvp("qco",7,null,tmpDiOs);
        doQComm(oi["rq"], null, "doRemFnish");
    } else {
        procNuUIitem("quser","u_rtype",quid,10,"removeFnish");
    }
};
var removeAccount = function() {
    tFillstr = "<div>"  + stxt[820] + " " + stxt[816] + "</div>";
    // create a string with a checkbox to confrom removal of store listings
    tFillstr = "<div class=\"cls_checkbox\"><input type=\"checkbox\" id=\"chkRmvListings\" name=\"chkRmvListings\" value=\"1\">" + stxt[823] + "</div>";
    tFillstr += "<div class=\"cls_button cls_button-medium bkgdClrRed txtClrWhite\" id=\"btnRmvAcct\" onclick=\"doRemQ()\">" + stxt[815] + "</div>";
    JSSHOP.ui.popAndFillLbox(tFillstr);
}

var fnshUImgPDel = function(aa,bb,cc) { 
 
    getUiconImgs();
    JSSHOP.ui.closeLbox();
    
    };

var fnshUImgMDel = function(aa,bb,cc) { 
    // alert(bb);
    if(JSSHOP.shared.getFrmFieldVal("qmedia", "m_file", "default_user.png") == u_icon.value) {
        u_icon.value = "default_user.png";
    procNuUIitem("quser","u_icon","default_user.png",quid,"fnshUImgPDel");
    } else {
        getUiconImgs();
        JSSHOP.ui.closeLbox();
    }

    
    };

var doUMIDelete = function() { 
    if(confirm(stxt[42] + " " + stxt[19] + "?")) {
    procNuUIitem("qmedia","m_rtype",JSSHOP.shared.getFrmFieldVal("qmedia", "_id", 0),"0","fnshUImgMDel");
    }
};


var fnshUimgMain = function(aa,bb,cc) { 
    // alert(bb);
    document.getElementById("u_icon").value = JSSHOP.shared.getFrmFieldVal("qmedia", "m_file", 0);
    imgIedit.src = "images/user/" + JSSHOP.shared.getFrmFieldVal("qmedia", "m_file", 0);
    // getUiconImgs();
    JSSHOP.ui.closeLbox();
    
    };
    
    
    var doUimgMain = function() { 
    if(confirm("Set as main picture?" + JSSHOP.shared.getFrmFieldVal("qmedia", "m_file", 0))) {
    procNuUIitem("quser","u_icon",quid,JSSHOP.shared.getFrmFieldVal("qmedia", "m_file", 0),"fnshUimgMain");
        }
    };

var getUIEditDv = function(tpIncrNPI, tpFImg) {
	console.log("getUIEditDv " + tpIncrNPI + " " + tpFImg);
tpPIEDv = document.createElement('div');
JSSHOP.shared.setFrmFieldVal("qmedia", "_id", tpIncrNPI);
JSSHOP.shared.setFrmFieldVal("qmedia", "m_file", tpFImg);
 
tmpRetStr = "<img src=\"images/user/" + tpFImg +  "\" style=\"width: 100%\"  class=\"\" onclick=\"alert('" + JSSHOP.shared.getFrmFieldVal("qmedia", "_id", "0") + "');\">"
 try {
tmpRetStr += "<div class=\"\"><input type=\"button\" class=\"form-control\" value=\"" + stxt[521] + "\" onclick=\"javascript:doUimgMain();\">";
if(tpFImg != "default_user.png") {
tmpRetStr += "   |  <input type=\"button\" class=\"form-control\" value=\"" + stxt[42] + "\" onclick=\"javascript:doUMIDelete();\"></div>";
}
tmpRetStr += "<br><br>";
 
return tmpRetStr;
} catch(e) {
alert("getUIEditDv " + e);
tmpRetStr = "oops. something wrong..";
return tmpRetStr;
}
};


var setUiconImgs = function(theAIa, theAIb, theAIc) {
	try {
        console.log("setUiconImgs: " + theAIa + " " + theAIb + " " + theAIc);
         imgIedit.src = "images/user/" + JSSHOP.shared.getFrmFieldVal("quser", "u_icon", "default_user.png");

    if(theAIb.indexOf("_id") != -1) {

		tAiretArr = JSON.parse(theAIb);
		var len = tAiretArr.length;
        tstr = "";
        iint = 0;
        while (iint < len) {
            if(tAiretArr[iint]["m_file"] == u_icon.value) {
                tstr += "<div style=\"float:left\" class=\"crsrPointer brdrClrRed\">";
            } else {
			tstr += "<div style=\"float:left\" class=\"crsrPointer\">";
            }
 			tstr += "<img src=\"images/user/" + tAiretArr[iint]["m_file_thumb"] + "\" class=\"icnmedbtn slmtable\" onclick=\"javascript:JSSHOP.ui.popAndFillLbox(getUIEditDv('" + tAiretArr[iint]["_id"] + "','" + tAiretArr[iint]["m_file"] + "'));\">";
			tstr += "</div>";
 
			iint++;
		}
        if(u_icon.value == "default_user.png") {
            tstr += "<div style=\"float:left\" class=\"crsrPointer brdrClrRed\">";
        } else {
        tstr += "<div style=\"float:left\" class=\"crsrPointer\">";
        }
         tstr += "<img src=\"images/user/default_user.png\" class=\"icnmedbtn slmtable\" onclick=\"javascript:JSSHOP.ui.popAndFillLbox(getUIEditDv('0','default_user.png'));\">";
        tstr += "</div>";
		document.getElementById("dvProdImgs").innerHTML = tstr;
	}
	} catch(e) {
		alert("setUiconImgs: " + e);
	}
};
var getUiconImgs = function() {
    tmpFobj = null;
    tmpFobj = {};
    tmpFobj["ws"] = "where m_uid=? and  m_pid=? and m_rtype=?";
    tmpFobj["wa"] = [tuid, tuid, 5];
    tmpFobj["o"] = "m_vala desc";
    oi = getNuDBFnvp("qmedia", 5, null, tmpFobj);
    doQComm(oi["rq"], null, "setUiconImgs");
};

var fnshUIcnLoad = function(aa,bb,cc) { 
    scrollToElement("dvUImgs");
    JSSHOP.ui.setCBBClickClr(document.getElementById("dvProdImgs"),'cls_button cls_button-medium brdrClrDlg txtClrHdr',document.getElementById("dvUImgs").className, function(){void(0)});

    };


var finishUPupload = function(theMMum) {
    try {
    

        image = null;
        image = new Image();
        image.src = "images/user/" + theMMum;
        document.getElementById("dvProdImgs").appendChild(image);

        // document.getElementById('dvUImgs').style.backgroundImage="url(images/users/s_thumb" + theMMum + ")";    
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_file_thumb", "s_thumb" + theMMum);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_file", theMMum);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_coid", tuid);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_uid", tuid);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_pid", tuid);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_dadded", JSSHOP.getUnixTimeStamp());

        tmpDOs = null;
        tmpDOs = {};
        tmpDOs["knvp"] = JSSHOP.shared.getFrmVals(document["qmedia"], "nada");
        oi = getNuDBFnvp("qmedia", 6, null, tmpDOs);
        doQComm(oi["rq"], null, "fnshUImgPDel");


        // procNuUIitem("quser","u_icon",quid,theMMum,"fnshUIcnLoad");

    } catch(e) {
        alert("finishMPupload:" + e);
        }
    };
function aFillUsrFrm(a,b,c) {
    fuArr = null;
    fuArr = JSON.parse(b);
    JSSHOP.shared.setFrmVals("quser",fuArr[0],function() {void(0)});

    JSSHOP.shared.setDynFieldVals(fuArr[0],"tmp_");
    tmpDOs = null;
tmpDOs = {};
tmpDOs["ws"] = "where k_userid=? and k_coid=? and k_rtype=?";
tmpDOs["wa"] = [tuid,tuid,5]; 
oi = getNuDBFnvp("qlinks",5,null,tmpDOs);
doQComm(oi["rq"], "y", "setCurrCoLinks");
getUiconImgs();
getUProps();
}

var dmyFnishCntLoad = fnishCntLoad;
fnishCntLoad = function() {
 
//

/*

*/

if(currUrlArr.tuid) {
    tuid = currUrlArr.tuid;
    tGUKos = null;
    tGUKos = {};
    tGUKos["ws"] = "where _id=?";
    tGUKos["wa"] = [tuid];
    oi = getNuDBFnvp("quser",5,null,tGUKos);
    doQComm(oi["rq"], "y", "aFillUsrFrm");
    tUcat = document.getElementById("tmp_u_cat");
 
// JSSHOP.shared.addCurrSlctObj(svftObj["usercat"], tUcat, u_cat.value, "noQvalue", "noQvalue");
 

  

// disable user name password and email fields
// document.getElementById("tmp_u_name").disabled=true;
// document.getElementById("tmp_u_pass").disabled=true;
// document.getElementById("tmp_u_email").disabled=true;
if(currUrlArr.umsg && currUrlArr.umsg == "remove") {
    dvPartLinks.innerHTML = "<div class=\"txtBold txtClrRed\">" + stxt[824] + "</div>";
}


} else {
    alert("no user id in url");
}
 
 
 

 
return dmyFnishCntLoad;
};

var aEditUser = function() {
 fnishDlayCntLoad(); // was not working with fnishCntLoad function
};

 
 

function rndrUProps(aaw,aww,cww) {
console.log('doMPropsList - aww: ' + aww);
istrt = 0;
iprplen = 0;
fullPrpLstA = JSON.parse(aww);
currShopsArr = fullPrpLstA;
iprplen = fullPrpLstA.length;
retPLstSTr = "";
// alert('doMPropsList - iprplen: ' + iprplen);
while(istrt < iprplen){
aprpObj = fullPrpLstA[istrt];
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
retPLstSTr += "<div class=\"col-md-6 col-lg-4\">";
/*
retPLstSTr += "<div tid=\"dvCoFavBtn\" style=\"float: right\"></div>";

<div style="float: right"><span class="cls_button cls_button-xxsmall bkgdClrWhite brdrClrDlg txtClrDlg" onclick="javascript:doRecentFavorite('index.html?pid=aa-show-item&amp;itemid=12&amp;cid=15155&amp;catid=5','Apoyobrazos central para un BMW 2.6-','0','12','btnFavs12');"><i id="btnFavs12" class="material-icons txtClrTtl" alt="favorite" title="favorite" value="favorite">?</i></span><span class="cls_button cls_button-xxsmall bkgdClrWhite brdrClrDlg txtClrDlg" style="margin:2px;" onclick="JSSHOP.ui.showShareBox('product',12);"><i class="material-icons txtClrTtl" alt="share" title="share" value="share">?</i></span><span class="cls_button cls_button-xxsmall bkgdClrWhite brdrClrDlg txtClrDlg" style="margin:2px;" onclick="JSSHOP.ui.showMsgBox('product', ts._id,'showMsgSave');"><i class="material-icons txtClrTtl" alt="chat" title="messages" value="messages">?</i></span></div>
*/
currFTclr = "material-icons txtClrTtl";
 if(currFavsIdstr.indexOf(aprpObj._id + "::") != -1) {
currFTclr = "material-icons txtClrRed";
}

retPLstSTr += "<table><tr><td>";

//  <div  onclick="javascript:JSSHOP.ui.toggleVisibility('tdUploadBtn');" class="crsrPointer"><img alt="User Icon" src="images/misc/default_user.png"  class="slmtable brdrClrDlg" style="minn-width:150px;max-width:160px;text-align:center;margin-right:3px" align="absmiddle" id="imgIedit"><span class="txtSmall txtClrGrey">Edit</span></div>
 retPLstSTr += "<div  onclick=\"javascript:eindex('aa-pdetail','pid=aa-pdetail&prpid=" + aprpObj._id + "')\" class=\"crsrPointer\"><img src=\"admin/property/s_thumb" + aprpPimage + "\" alt=\"pimage\" class=\"slmtable brdrClrDlg\" style=\"minn-width:150px;max-width:160px;text-align:center;margin-right:3px\" align=\"absmiddle\"></div>";
retPLstSTr += "</td>";
retPLstSTr += "<td>";
retPLstSTr += "<h5 class=\"text-secondary hover-text-primary text-capitalize\" style=\"margin-bottom:0px;\"><a href=\"javascript:eindex('aa-pdetail','pid=aa-pdetail&prpid=" + aprpObj._id + "')\">" + aprpTitle + "</a></h5>";
 retPLstSTr += "<table style=\"width:100%;\"><tbody><tr><td><i class=\"small-material-icons coll-menu-item txtClrHdr txtBold\" alt=\"location_on\" title=\"Location\" style=\"verticle-align:middle;color:#dbddd9;\">&#xe55c;</i></td><td><span class=\"txtSmall txtBold txtClrHdr\">" + aprpLocation + "</span></td><td style=\"text-align:right;\" nowrap=\"nowrap\"><div class=\"price text-primo\" style=\"margin-right:10px;\"><span class=\"text-primary txtSmall\">&euro;</span>&nbsp;&nbsp;<b>" + aprpPrice + "</b></div></td></tr></tbody></table>";
 
retPLstSTr += "</td></tr></table>";
/*
 retPLstSTr += "<div class=\"featured-thumb hover-zoomer mb-4\">";
retPLstSTr += "<div class=\"overlay-black overflow-hidden position-relative crsrPointer\" onclick=\"javascript:eindex('aa-pdetail','pid=aa-pdetail&prpid=" + aprpObj._id + "')\"> <img src=\"admin/property/" + aprpPimage + "\" alt=\"pimage\">";
retPLstSTr += "<div class=\"featured bg-primary text-white\">New</div>";
retPLstSTr += "<div class=\"sale bg-secondary text-white text-capitalize\">" + tDBHObj[aprpType] + "</div>";
retPLstSTr += "</div>"; // end overlay-black overflow-hidden position-relative
retPLstSTr += "<div class=\"featured-thumb-data shadow-one\">";

-------
retPLstSTr += "<div class=\"p-3\">";
retPLstSTr += "<span class=\"location text-capitalize\"><i class=\"fas fa-map-marker-alt text-primary\"></i> " + aprpLocation + "</span> </div>";
retPLstSTr += "<div class=\"px-4 pb-4 d-inline-block w-100\">";
retPLstSTr += "<div class=\"\"> <a href=\"propertydetail.php?pid=" + aprpUid + "\" class=\"txtSmall txtBold txtDecorNone\">" + stxt[99] + "...</a> </div>";
retPLstSTr += "<div class=\"float-right\"><i class=\"nav-material-icons coll-menu-item txtClrHdr\" style=\"margin-right:4px;margin-top:2px;\">&#xe0b7;</i> <a href=\"contact.php?propid=" + aprpUid + "\" class=\"txtSmall txtBold txtDecorNone\">" + stxt[98] + "</a> </div>";
retPLstSTr += "</div>";
---------


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
retPLstSTr += "<span tid=\"dvCoFavBtn\" class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrDlg\" onclick=\"javascript:doRecentFavorite('index.html?pid=aa-pdetail&prpid=" + aprpObj._id + "','" + aprpTitle + "','noQvalue','" + aprpObj._id + "','btnFavs" + aprpObj._id + "');\"><i id=\"btnFavs" + aprpObj._id + "\" class=\"" + currFTclr + "\" alt=\"favorite\" title=\"favorite\" value=\"favorite\">&#xe87d;</i></span>";
// streetview link http://maps.google.com/maps?q=&layer=c&cbll=
tSrvLLstr = aprploclat + "," + aprploclng;
retPLstSTr += "<span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrDlg\" style=\"margin:2px;\"><a href=\"http://maps.google.com/maps?q=&layer=c&cbll=" + tSrvLLstr + "\"><i class=\"material-icons txtClrTtl\" alt=\"streetview\" title=\"streetview\" value=\"streetview\">&#xe56e;</i> Street View</a></span>";

 

retPLstSTr += "</div>"; // end bkgdClrWhite




retPLstSTr += "</div>"; // end featured-thumb-data shadow-one
retPLstSTr += "</div>"; // end featured-thumb hover-zoomer mb-4




*/
retPLstSTr += "</div>";  // end col-md-6 col-lg-4



retPLstSTr += "<hr>";


istrt++;
}
// return retPLstSTr;
JSSHOP.ui.setTinnerHTML("dvUPropList",retPLstSTr);
// alert('doMPropsList - aaw: ' + aaw);

tUFObj = {};
tUFObj["uplmt"] = 15;
tUFObj["uppstid"] = tPropUID;
tUFObj["upcb"] = "jshp_ads_showUpdtsFeed";
 JSSHOP.ads.doUpdatesFeed(tUFObj);
 }

function getUProps() {
    // alert("getUProps");
    tmpDOs = null;
    tmpDOs = {};
    tmpDOs["ws"] = "where uid=?";
    tmpDOs["wa"] = [currUrlArr.tuid];
    tmpDOs["l"] = 5;
    oi = getNuDBFnvp("property",5,null,tmpDOs);
    doQComm(oi["rq"], "y", "rndrUProps");
}

// Link adding functions




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
rcL = "";
while(rciint < rclen) {
rcts = theArr[rciint];
tKmatter = unescape(decodeURIComponent(rcts.k_matter));
tKshrtMatter = tKmatter;
tKcategory = rcts.k_category;
tKfnlMatter = "";
if(tKmatter.length > 20) {
    tKshrtMatter = tKmatter.substring(0,20) + "...";

}
if(tKcategory == "telephone") {
    tKfnlMatter = "<a href=\"tel:" + tKmatter + "\">" + tKshrtMatter + "</a>";
    } else if(tKcategory == "address") {
    tKfnlMatter = tKshrtMatter;
    } else if(tKcategory == "whatsapp") {
    tKfnlMatter = "<a href=\"https://wa.me/" + tKmatter + "\">" + tKshrtMatter + "</a>";
    } else if(tKcategory == "skype") {
    tKfnlMatter = "<a href=\"skype:" + tKmatter + "?call\">" + tKshrtMatter + "</a>";
    } else if(tKcategory == "telegram") {
    tKfnlMatter = "<a href=\"https://t.me/" + tKmatter + "\">" + tKshrtMatter + "</a>";
    } else if(tKcategory == "viber") {
    tKfnlMatter = "<a href=\"viber://chat?number=" + tKmatter + "\">" + tKshrtMatter + "</a>";
    } else if(tKcategory == "messenger") {
    tKfnlMatter = "<a href=\"https://m.me/" + tKmatter + "\">" + tKshrtMatter + "</a>";
    } else if(tKcategory == "email") {
    tKfnlMatter = "<a href=\"mailto:" + tKmatter + "\">" + tKshrtMatter + "</a>";
    } else if(tKcategory == "website") {
    tKfnlMatter = "<a href=\"" + tKmatter + "\">" + tKshrtMatter + "</a>";
    } else if(tKcategory == "facebook") {
    tKfnlMatter = "<a href=\"https://www.facebook.com/" + tKmatter + "\">" + tKshrtMatter + "</a>";
    } else if(tKcategory == "twitter") {
    tKfnlMatter = "<a href=\"https://twitter.com/" + tKmatter + "\">" + tKshrtMatter + "</a>";
    } else if(tKcategory == "instagram") {
    tKfnlMatter = "<a href=\"https://www.instagram.com/" + tKmatter + "\">" + tKshrtMatter + "</a>";
    } else if(tKcategory == "linkedin") {
    tKfnlMatter = "<a href=\"https://www.linkedin.com/in/" + tKmatter + "\">" + tKshrtMatter + "</a>";
    } else if(tKcategory == "youtube") {
    tKfnlMatter = "<a href=\"https://www.youtube.com/channel/" + tKmatter + "\">" + tKshrtMatter + "</a>";
    } else if(tKcategory == "pinterest") {
    tKfnlMatter = "<a href=\"https://www.pinterest.com/" + tKmatter + "\">" + tKshrtMatter + "</a>";
    } else if(tKcategory == "snapchat") {
    tKfnlMatter = "<a href=\"https://www.snapchat.com/add/" + tKmatter + "\">" + tKshrtMatter + "</a>";
    } else if(tKcategory == "tiktok") {
    tKfnlMatter = "<a href=\"https://www.tiktok.com/@" + tKmatter + "\">" + tKshrtMatter + "</a>";
    } else if(tKcategory == "email") {
    tKfnlMatter = "<a href=\"mailto:" + tKmatter + "\">" + tKshrtMatter + "</a>";
    } else {
    tKfnlMatter = tKshrtMatter;
    }

    // else if 

    // tKfnlMatter = tKshrtMatter;
 

// rcnsDv.className = "collection-item txtDecorNone margleft"; 
rcL += "<div style=\"margin:10px;\" nowrap=\"nowrap\"><span class=\"txtBold\"><img src=\"images/misc/ts-icon-" + rcts.k_category + ".png\" class=\"icnsmlbtn\"></span>";
rcL +=    "<span class=\"txtSmall txtClrGrey\">" + rcts.k_title + "</span><br>" + tKfnlMatter + "</div>";

//rcL += "<tr><td><span class=\"txtBold\"><img src=\"images/misc/ts-icon-" + rcts.k_category + ".png\" class=\"icnsmlbtn\"></span></td><td><span class=\"txtSmall txtClrGrey\">" + rcts.k_title + "</span></td><td>" + unescape(decodeURIComponent(rcts.k_matter));
 
// rcnsDv.innerHTML = "<span class=\"txtBold\">" + rcts.k_category + "</span><br>" + rcts.k_matter;
rciint++;
}
 
// rcnsDv.innerHTML = rcL;
dvCoLinks.innerHTML = rcL;
if(za == "ya") {
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
        if(tCCLB.indexOf("_id") != -1) {
            currCoLinksArr = null;
            currCoLinksArr = [];
        // alert("setCurrCoLinks: " + tCCLB);
        currCoLinksArr = JSON.parse(tCCLB);
        rndrCoLnks(tCCLA, tCCLB, tCCLC);
        }
        }
     