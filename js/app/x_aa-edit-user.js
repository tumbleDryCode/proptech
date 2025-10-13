if((quid == 0) || (quid == "noQvalue")) {
    document.location.href = "index.html?pid=login";
}

currPgTitle = stxt[31] + " " + stxt[56];
document.title = currPgTitle; 
var euiFFObjArr = null;
var euiFFObjArr = [];

ck_name = /^[A-Za-z0-9 ]{3,20}$/;
ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
ck_username = /^[A-Za-z0-9_]{5,20}$/;
ck_password =  /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;


function popUsrZoneMap() {
    try {
   
    // alert("getUsrZoneMap");
    /*
    tLeavesObj["icn"] = "admin/property/sthumb_" + currSlctdPrpsObj[key].pimage;
    tLeavesObj["title"] = currSlctdPrpsObj[key].ptitle;
    tLeavesObj["lat"] = currSlctdPrpsObj[key].ploclat;
    tLeavesObj["lng"] = currSlctdPrpsObj[key].ploclng;
    tMapLeavesArr.push(tLeavesObj);
    */
    tFullUZMapArr = null;
    tFullUZMapArr = [];
    tFullUZMapObj = null;
    tFullUZMapObj = {};
    tMrkrMapObj = null;
    tMrkrUZMapObj = {};
    tMrkrUZMapObj["icn"] = "images/layout.png";
    tMrkrUZMapObj["title"] = "Select Your Zone";
    tMrkrUZMapObj["lat"] = tmp_u_loclat.value;
    tMrkrUZMapObj["lng"] = tmp_u_loclng.value;
    tFullUZMapArr.push(tMrkrUZMapObj);
 
    // alert(JSON.stringify(tFullUZMapArr));
    tFullUZMapObj["mrkrs"] = tFullUZMapArr;
    tFullUZMapObj["mdvid"] = "dvUZMapView";
    tNewUZDvStr = "<div id=\"dvUZMapView\" style=\"min-height: 340px; width: 100%;\"></dix>";
     JSSHOP.ui.popFillObox(tNewUZDvStr, "&#xe5cd;", "Select Your Zone", "yes", "yes");

    setTimeout(function() {doNuSpinSet("dvUZMapView", "small", null, "...");}, 200);
    setTimeout(function() {JSSHOP.ads.doNuGenMap(tFullUZMapObj) }, 1000);
    } catch(e) {
        alert("popUsrZoneMap: " + e);
    }
}



var doShopsList = function(a,theResp,c) {
    console.log("doShopsList: " + theResp);
// document.getElementById("includedContent").innerHTML = theResp;
//  alert("doShopsList: " + theResp);
hasr = "n";
fullstr = "";
tFullTknCoSTr = "";
var arrUsrsEd = JSON.parse(theResp);
 
var len = arrUsrsEd.length;
var iint = 0;
var pcid = 0;
tstr = "";
while(iint < len) {
tssl = arrUsrsEd[iint];
tFullTknCoSTr += ":" + tssl._id + ":";
tstr += "<tr>";
// tstr += "<td>" + tssl._id + "</td>";
//   tstr += "<td><a href=\"index.html?pid=aa-edit-place&tpid=" + tssl._id + "\">" + tssl._id + "</a></td>";

tstr += "<td><a href=\"javascript:eindex('aa-edit-place', 'pid=aa-edit-place&tpid=" + tssl._id + "');\">" + tssl._id + "</a></td>";
if(tssl.c_category == "202") {
    tstr += "<td><a href=\"javascript:eindex('aa-edit-parts-category', 'pid=aa-edit-parts-category&cid=" + tssl._id + "');\"><img src=\"images/misc/parts_w.gif\" style=\"vertical-align: middle; max-width: 27px; max-height: 27px;\" class=\"icnsmlbtn\"></a></td>";
    } else {
    tstr += "<td><a href=\"javascript:eindex('aa-edit-svs-categories', 'pid=aa-edit-svs-categories&cid=" + tssl._id + "');\"><img src=\"images/misc/mec2_w.gif\" style=\"vertical-align: middle; max-width: 27px; max-height: 27px;\" class=\"icnsmlbtn\"></a></td>";
    }
tstr += "<td><a href=\"javascript:eindex('aa-show-place', 'pid=aa-show-place&cid=" + tssl._id + "');\">" + tssl.c_name + "</a></td>";

// tstr += "<td><a href=\"index.html?pid=aa-edit-place&tpid=" + tssl._id + "\">" + tssl.c_name + "</a></td>";
// tstr += "<td style=\"min-width: 38px;\" class=\"txtClrHdr\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>";
//  tstr += "<td class=\"txtClrHdr\"><a href=\"index.html?pid=aa-edit-categories&cid=" + tssl._id + "\"><i class=\"small-material-icons txtClrDlg\" alt=\"edit\" title=\"edit\">&#xe3c9;</i></a></td>";
if(tssl.c_category == "202") {
tstr += "<td><a href=\"javascript:eindex('aa-edit-parts-category', 'pid=aa-edit-parts-category&cid=" + tssl._id + "');\"><i class=\"small-material-icons txtClrDlg\" alt=\"edit\" title=\"edit\">&#xe3c9;</i></a></td>";
} else {
tstr += "<td><a href=\"javascript:eindex('aa-edit-svs-categories', 'pid=aa-edit-svs-categories&cid=" + tssl._id + "');\"><i class=\"small-material-icons txtClrDlg\" alt=\"edit\" title=\"edit\">&#xe3c9;</i></a></td>";
}
// tstr with eindex

tstr += "</tr>";
iint++;
}
newel = document.createElement('div');

tAddCoUrlSTr = "<span class=\"txtBold txctClrHdr bkgdClrNrml\"><a href=\"javascript:eindex('aa-edit-place','pid=aa-edit-place');\" class=\"txtBold txctClrHdr bkgdClrNrml\">+" + stxt[70] + "</a></span>";

if(arrUsrsEd[0]) {
strTHhtml = "<th><span style=\"margin-right: 10px; margin-top: 10px\" class=\"txtBold\">ID</span></th>";
strTHhtml += "<th><span style=\"margin-right: 10px; margin-top: 10px\" class=\"txtBold\">ID</span></th>";

// strTHhtml += "<th><span style=\"margin-right: 10px; margin-top: 10px\" class=\"txtBold\"><i class=\"menu-material-icons\">&#xe896</i></span></th>";
strTHhtml += "<th><span style=\"margin-right: 10px; margin-top: 10px\" class=\"txtBold\">" + stxt[404] + "</span></th>";

 strTHhtml += "<th><span style=\"margin-right: 10px; margin-top: 10px\" class=\"txtBold\">" + stxt[95] + "</span></th>";

// strTHhtml += "<th><span style=\"margin-right: 10px; margin-top: 10px\" class=\"txtBold\"><i class=\"menu-material-icons\">&#xe896</i></span>View</th>";
tmpFstr = getTblSortStr(strTHhtml, tstr);
tmpFFstr = "<div class=\"slmtable bkgdClrWhite brdrClrHdr\" style=\"margin: 0 auto;max-width:600px;padding: 10px;margin-left: 15px;margin-right: 15px;\"><div class=\"txtBold txtSmall txtClrHdr\">" + stxt[519] + "</div>" + tmpFstr + "</div>";

// create an add company button that loads eindex('aa-edit-place', 'pid=aa-edit-place');
tmpFFstr += "<div class=\"slmtable bkgdClrWhite brdrClrHdr\" style=\"margin: 0 auto;max-width:600px;padding: 10px;margin-left: 15px;margin-right: 15px;\">" + tAddCoUrlSTr + "</div>";
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


function getPrvcyBSDDstr() {
    var tGUPDDstr = "";
    tDDBPrvojA = {};
    tDDBPrvojA["ddtype"] = "noQvalue";
    tDDBPrvojA["fld"] = "u_privacy";
    tDDBPrvojA["lbl"] = stxt[101];
    tDDBPrvojA["val"] = u_privacy.value;
    tDDBPrvojA["kvpObj"] = svftObj["userpriv"];
    tDDBPrvojA["cb"] = "donada";
    tDDBPrvojA["fldcls"] = "nav-link dropdown-toggle txtSmall";
    tDDBPrvojA["lblcls"] = "txtSmall";
    tDDBPrvojA["valcls"] = "txtSmall";
    tDDBPrvojA["icncls"] = "nav-material-icons txtBold txtClrGrey";
    tDDBPrvojA["horvert"] = "horizontal";
    tDDBPrvojA["icn"] = "noQvalue";
    tDDBPrvojA["kvIcnsObj"] = {};
    tDDBPrvojA["kvIcnsObj"]["public"] = "&#xe5cd;";
    tDDBPrvojA["kvIcnsObj"]["private"] = "noQvalue";
    tDDBPrvojA["kvIcnsObj"]["members"] = "&#xe5cd;";
    //  {"public":"e5cd;","private":"e5cd;","members":"noQvalue"};
    tGUPDDstr += JSSHOP.ui.getNuBSdropDstr(tDDBPrvojA);
    return tGUPDDstr;
}
 
function doKLksPckChg(tZPCel, tZPVal, tZPtxt) {
    console.log("doKLksPckChg: " + tZPCel + " " + tZPVal + " " + tZPtxt);
    try {
        tKMtrStrObj = {};
        tKMtrStrObj["uname"] = {};
        tKMtrStrObj["uname"]["en_us"] = "Please enter your " + tZPtxt + " username";
        tKMtrStrObj["uname"]["pt_pt"] = "Por favor, insira o seu nome de utilizador " + tZPtxt;
        tKMtrStrObj["uname"]["spa_spa"] = "Por favor, ingrese su nombre de usuario " + tZPtxt;
        tKMtrStrObj["knumber"] = {};
        tKMtrStrObj["knumber"]["en_us"] = "Please enter your " + tZPtxt + " number";
        tKMtrStrObj["knumber"]["pt_pt"] = "Por favor, insira o seu numero de " + tZPtxt;
        tKMtrStrObj["knumber"]["spa_spa"] = "Por favor, ingrese su numero de " + tZPtxt;
        tKMtrStrObj["kaddress"] = {};
        tKMtrStrObj["kaddress"]["en_us"] = "Please enter your " + tZPtxt + " address";
        tKMtrStrObj["kaddress"]["pt_pt"] = "Por favor, insira o seu endereco de " + tZPtxt;
        tKMtrStrObj["kaddress"]["spa_spa"] = "Por favor, ingrese su direccion de " + tZPtxt;
        tKMtrStrObj["kother"] = {};
        tKMtrStrObj["kother"]["en_us"] = "Please enter your " + tZPtxt + " information";
        tKMtrStrObj["kother"]["pt_pt"] = "Por favor, insira a sua informacao " + tZPtxt;
        tKMtrStrObj["kother"]["spa_spa"] = "Por favor, ingrese su informacion " + tZPtxt;
         
        switch(tZPVal) {
                case "facebook":
                case "linkedin":
                case "twitter":
                case "instagram":

                    dvKmatterTip.innerHTML = tKMtrStrObj["uname"][usrlang];
                    break;
                case "whatsapp":
                case "telephone":
                case "sms":
                case "fax":
                    dvKmatterTip.innerHTML = tKMtrStrObj["knumber"][usrlang];
                    break;
                case "web":
                case "email":
                    dvKmatterTip.innerHTML =  tKMtrStrObj["kaddress"][usrlang];
                    break;
                case "other":
                    dvKmatterTip.innerHTML =  tKMtrStrObj["kother"][usrlang];
                    break;
                default:
                    dvKmatterTip.innerHTML = tKMtrStrObj["kother"][usrlang];
                    break;
        }
       setTimeout(function(){JSSHOP.ui.setNuCBBClickClr(dvKmatterTip,'txtClrRed','txtSmall txtClrGrey', function(){void(0);}, 2000)}, 1000);

        // JSSHOP.iu.setCBBClickClr(document.getElementById("dvKmatterTip"),'txtBig txtBold txtClrRed',document.getElementById("dvKmatterTip").className, function(){void(0);});
    }
    catch(e) {
        alert("doKLksPckChg: " + e);
    }
}


    

function getKLinksBSDDstr() {
    

    var tStr = "";
    tmpKLnksSlctObj = {};
    tmpKLnksSlctObj["facebook"] = "Facebook";
    tmpKLnksSlctObj["whatsapp"] = "Whatsapp";
    tmpKLnksSlctObj["instagram"] = "Instagram";
    tmpKLnksSlctObj["linkedin"] = "Linkedin";
    tmpKLnksSlctObj["twitter"] = "Twitter";
    tmpKLnksSlctObj["web"] = "Website";
    tmpKLnksSlctObj["email"] = "Email";
    tmpKLnksSlctObj["telephone"] = "Telephone";
    tmpKLnksSlctObj["sms"] = "SMS";
    tmpKLnksSlctObj["fax"] = "Fax";
    tmpKLnksSlctObj["other"] = "Other";

    tDDXtraCntObj = {};
    tDDXtraCntObj["ddtype"] = "noQvalue";
    tDDXtraCntObj["fld"] = "k_category";
    tDDXtraCntObj["lbl"] =  stxt[992];
    tDDXtraCntObj["val"] = "Lisboa";
    tDDXtraCntObj["kvpObj"] = tmpKLnksSlctObj;
    tDDXtraCntObj["cb"] = "doKLksPckChg";
    tDDXtraCntObj["fldcls"] = "nav-item dropdown-toggle txtSmall txtClrHdr";
    tDDXtraCntObj["lblcls"] = "form-control nav-item txtSmall txtClrHdr txtDecorNone";
    tDDXtraCntObj["valcls"] = "txtSmall";
    tDDXtraCntObj["horvert"] = "horizontal";
    tDDXtraCntObj["icn"] = "noQvalue";
    tStr = JSSHOP.ui.getNuBSdropDstr(tDDXtraCntObj);
    return tStr;
}


function doZoneDD(thePrx, theSTat) {
    try {   

        // alert("doZoneDD: " + thePrx + " " + theSTat);
        if(theSTat == "ok") {
           tLclDstDstr = getCountryDropStr("u_country", "doCountryPckChg");
              document.getElementById("dvCountryDD").innerHTML = tLclDstDstr;
        } else {
            document.getElementById("dvCountryDD").innerHTML = "error loading zones";
        }
        dvBSDDKLnks = document.getElementById("dvBSDDKLnks");
        dvBSDDKLnks.innerHTML = getKLinksBSDDstr();
        tPRvBSDDstr = getPrvcyBSDDstr();
        dvUsrPrivacy = document.getElementById("dvUsrPrivacy");
        dvUsrPrivacy.innerHTML = tPRvBSDDstr;
        // doCountryPckChg("dvCountryDD", u_country.value, u_country.value);
        getRegionDropStr(u_country.value, "u_region", "setUregionDD");
        
     } catch(e) {
        alert("doZoneDD: " + e);
    }
}

            // alert("doZoneDD: " + thePrx + " " + theSTat);
            // alert("doZoneDD: " + thePrx + " " + theSTat);
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
    tmpFobj["wa"] = [quid, quid, 5];
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
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_coid", quid);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_uid", quid);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_pid", quid);
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

function fillUserFrm(arr,brr,crr) {
           tfPobj = JSON.parse(brr);
        tFUFMO = tfPobj[0];
         JSSHOP.shared.setFrmVals("quser",tfPobj[0],function() {void(0)});
        JSSHOP.shared.setDynFieldVals(tfPobj[0], "tmp_");
tmpDOs = null;
tmpDOs = {};
tmpDOs["ws"] = "where k_userid=? and k_coid=? and k_rtype=?";
tmpDOs["wa"] = [quid,quid,5]; 
oi = getNuDBFnvp("qlinks",5,null,tmpDOs);
doQComm(oi["rq"], "y", "setCurrCoLinks");
 }

var dmyFnishCntLoad = fnishCntLoad;
fnishCntLoad = function() {
    if((quid == 0) || (quid == "noQvalue")) {
         document.location.href = "index.html?pid=login";
    }  else { 
        JSSHOP.shared.setDynFrmVals(document["quser"], "tmp_");

        // tEUhdrStr = "Edit User - more options coming soon.";
        // document.getElementById("dvPartLinks").innerHTML = tEUhdrStr;

// document.getElementById("dvPartsList").innerHTML = "";
/*
tifo = nCurrFFieldOb();
tifo.fid = "tmp_u_name";
tifo.fdv = stxt[48];
tifo.lid = "lbl_u_name"; 
tifo.ltxt = stxt[48]; 
// tifo.fvr = ck_username;
tifo.fve = stxt[1001];
euiFFObjArr.push(tifo);

tfui = nCurrFFieldOb();
tfui.fid = "tmp_u_pass";
tfui.fdv = stxt[49];
tfui.lid = "lbl_u_pass"; 
tfui.ltxt = stxt[49]; 
// tfui.fvr = ck_password;
tfui.fve = stxt[1001];
euiFFObjArr.push(tfui);
*/

/*
tfue = nCurrFFieldOb();
tfue.fid = "tmp_u_email";
tfue.fdv = stxt[50];
tfue.lid = "lbl_u_email"; 
tfue.ltxt = stxt[50]; 
tfue.fve = stxt[1001];
euiFFObjArr.push(tfue);
*/

tfsb = nCurrFFieldOb();
tfsb.fid = "btnAddSoLink";
tfsb.fty = "button";
tfsb.fcl = function() { JSSHOP.ui.setSaveBtnClick(this, function(){doCoLinkAdd()}) };
// euiFFObjArr.push(tfsb);


tfuh = nCurrFFieldOb();
tfuh.fid = "tmp_u_header";
tfuh.fdv = stxt[51];
tfuh.lid = "lbl_u_header"; 
tfuh.ltxt = stxt[51]; 
euiFFObjArr.push(tfuh);

tfsb = nCurrFFieldOb();
tfsb.fid = "btnEUsave";
tfsb.fty = "button";
tfsb.fcl = function() { JSSHOP.ui.setSaveBtnClick(this, function(){doUserEdit()}) };
euiFFObjArr.push(tfsb);


JSSHOP.shared.initFrmComps(euiFFObjArr);
//
if(arrAllForms.quser) {
// JSSHOP.shared.setFrmVals("quser",arrAllForms.quser.v[0],function() { JSSHOP.shared.setDynFieldVals(JSSHOP.shared.getDynFrmVals(document["quser"], ""),"tmp_"); });
 
// JSSHOP.shared.setDynFieldVals(arrAllForms.quser.v[0],"tmp_");
} else {
    // tmp_u_name.value = u_name.value;
    // tmp_u_pass.value = u_pass.value;
    // tmp_u_email.value = u_email.value;

// JSSHOP.shared.setDynFieldVals(JSSHOP.shared.getDynFrmVals(document["quser"], ""),"tmp_");
}

    tmpDOs = null;
    tmpDOs = {};
    tmpDOs["ws"] = "where _id=?";
    tmpDOs["wa"] = [quid];
    oi = getNuDBFnvp("quser", 5, null, tmpDOs);
    doQComm(oi["rq"],null,"fillUserFrm");

JSSHOP.loadScript("misc/x_countries.js", doZoneDD,  "js");


 
 
tUcat = document.getElementById("tmp_u_cat");
 
// alert("u_cat.value: " + u_cat.value);
if((u_cat.value == "5") || (currUrlArr.da)) {
svftObj["usercat"]["5"] = "Admin";
tmpDOs = null;
tmpDOs = {};
tmpDOs["ws"] = "where c_uid=? and c_rtype=?";
tmpDOs["wa"] = [quid,5];
tmpDOs["l"] = 45;
oi = getNuDBFnvp("qco",5,null,tmpDOs);
doQComm(oi["rq"], null, "doShopsList");
}
JSSHOP.shared.addCurrSlctObj(svftObj["usercat"], tUcat, u_cat.value, "noQvalue", "noQvalue");
 



    }

// disable user name password and email fields
// document.getElementById("tmp_u_name").disabled=true;
// document.getElementById("tmp_u_pass").disabled=true;
// document.getElementById("tmp_u_email").disabled=true;
if(currUrlArr.umsg && currUrlArr.umsg == "remove") {
    dvPartLinks.innerHTML = "<div class=\"txtBold txtClrRed\">" + stxt[824] + "</div>";
}
getUiconImgs();
currMediaID = quid;
doMediaBtnSetup('uploadBtn', '', 'finishUPupload', 'images/user');
/**/
JSSHOP.ads.doGenericPlug('mpmenu',3,'dvPartLinks')
JSSHOP.loadScript("misc/x_countries.js", doZoneDD,  "js");

return dmyFnishCntLoad;
};

var aEditUser = function() {
 fnishDlayCntLoad(); // was not working with fnishCntLoad function
};

 
// Link adding functions


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
rcL = "<table style=\"width:100%;\">";
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
rcL += "<tr><td><span class=\"txtBold\"><img src=\"images/misc/ts-icon-" + rcts.k_category + ".png\" class=\"icnsmlbtn\"></span></td>";
rcL += "<td>" + tKfnlMatter;

//rcL += "<tr><td><span class=\"txtBold\"><img src=\"images/misc/ts-icon-" + rcts.k_category + ".png\" class=\"icnsmlbtn\"></span></td><td><span class=\"txtSmall txtClrGrey\">" + rcts.k_title + "</span></td><td>" + unescape(decodeURIComponent(rcts.k_matter));
rcL += "</td><td><button  onclick=\"javascript:doCoLinkDelete(" + rciint + "," + rcts._id + ");\" class=\"crsrPointer txtXLrg txtBold slmtable bkgdClrWhite brdrNone txtClrDrkGrn\"><i class=\"txtClrRed brdrClrWhite bkgdClrWhite menu-material-icons\" alt=\"delete\" title=\"delete\">&#xe92b;</i></button>";
rcL += "</td></tr>";
// rcnsDv.innerHTML = "<span class=\"txtBold\">" + rcts.k_category + "</span><br>" + rcts.k_matter;
rciint++;
}
rcL += "</table>";
rcnsDv.innerHTML = rcL;
dvCoLinks.appendChild(rcnsDv);
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

var fnshCoLinkAdd = function(tCCLA, tCCLB, tCCLC) {
    // alert("fnshCoLinkAdd: " + tCCLB);
    stopSpin("btnAddSoLink");
    btnAddSoLink.innerHTML = "";
    JSSHOP.ui.setCBBClickClr(btnAddSoLink,'cls_button cls_button-medium  bkgdClrDGreen txtClrWhite','cls_button cls_button-medium bkgdBBlue txtSmall', function(){document.getElementById("btnAddSoLink").innerHTML=stxt[70];document.getElementById("btnAddSoLink").disabled=false;});
    currCoLinksArr.push(JSSHOP.shared.getFrmObj(document["qlinks"]));
        rndrCoLnks(tCCLA, JSON.stringify(currCoLinksArr), tCCLC);
  
/*
    // JSSHOP.ui.setCBBClickClr(btnAddSoLink,'txtXLrg txtBold slmtable bkgdClrDGreen txtClrWhite','txtXLrg txtBold slmtable bkgdClrWhite brdrNone txtClrDrkGrn', function(){document.getElementById("btnAddSoLink").disabled=false;});
   //  document.getElementById("btnAddSoLink").innerHTML="<i class=\"txtBold txtClrDrkGrn brdrClrWhite bkgdClrWhite material-icons\" alt=\"add\" title=\"add\">&#xe145;</i>";
        tmpDOs = null;
        tmpDOs = {};
        tmpDOs["ws"] = "where k_userid=? and  k_coid=? and k_rtype=?";
        tmpDOs["wa"] = [quid,quid,5]; 
        oi = getNuDBFnvp("qlinks",5,null,tmpDOs);
        doQComm(oi["rq"], "y", "setCurrCoLinks");

*/
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
    
var doCoLinkAdd = function() {
    JSSHOP.shared.setFrmFieldVal("qlinks", "k_userid", quid);
    JSSHOP.shared.setFrmFieldVal("qlinks", "k_coid", quid);
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
        // JSSHOP.ui.setCBBClickClr(btnAddSoLink,'cls_button cls_button-medium  bkgdClrDYellow txtClrWhite','cls_button cls_button-medium bkgdBBlue txtSmall', function(){document.getElementById("btnAddSoLink").innerHTML=stxt[70];document.getElementById("btnAddSoLink").disabled=false;});
    
        return;
    }
    if((JSSHOP.shared.getFrmFieldVal("qlinks", "k_title", 0) == "") || (JSSHOP.shared.getFrmFieldVal("qlinks", "k_title", 0) == "noQvalue")){
        alert("Please enter a category");
        stopSpin("btnAddSoLink");
        btnAddSoLink.innerHTML = "";
        // JSSHOP.ui.setCBBClickClr(btnAddSoLink,'cls_button cls_button-medium  bkgdClrDYellow txtClrWhite','cls_button cls_button-medium bkgdBBlue txtSmall', function(){document.getElementById("btnAddSoLink").innerHTML=stxt[70];document.getElementById("btnAddSoLink").disabled=false;});
    
        return;
    }
    if((JSSHOP.shared.getFrmFieldVal("qlinks", "k_category", 0) == "") || (JSSHOP.shared.getFrmFieldVal("qlinks", "k_category", 0) == "Select")){
        alert("Please enter a category");
        stopSpin("btnAddSoLink");
        btnAddSoLink.innerHTML = "";
        // JSSHOP.ui.setCBBClickClr(btnAddSoLink,'cls_button cls_button-medium  bkgdClrDYellow txtClrWhite',btnAddSoLink.className + ' txtSmall', function(){document.getElementById("btnAddSoLink").innerHTML=stxt[70];document.getElementById("btnAddSoLink").disabled=false;});
        // JSSHOP.ui.setCBBClickClr(tmp_k_category,'brdrClrRed','crsrPointer form-control', function(){void(0);});

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


/*

CREATE TABLE `quser` (
  `_id` int(11) NOT NULL,
  `u_rtype` int(11) DEFAULT NULL,
  `u_cat` int(12) NOT NULL,
  `u_name` varchar(64) DEFAULT NULL,
  `u_fullname` varchar(128) NOT NULL,
  `u_location` varchar(64) NOT NULL,
  `u_region` varchar(64) NOT NULL,
  `u_country` varchar(64) NOT NULL,
  `u_loclat` varchar(24) NOT NULL,
  `u_loclng` varchar(24) NOT NULL,
  `u_email` varchar(128) DEFAULT NULL,
  `u_pass` varchar(128) DEFAULT NULL,
  `u_header` varchar(256) DEFAULT NULL,
  `u_desc` text NOT NULL,
  `u_icon` varchar(128) NOT NULL,
  `u_privacy` varchar(12) NOT NULL,
  `u_prfs` text NOT NULL,
  `u_socauthtype` int(11) DEFAULT NULL,
  `u_socauthid` varchar(128) DEFAULT NULL,
  `u_socauthtoke` text DEFAULT NULL,
  `u_dadded` varchar(14) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;


// example rows
(46, 5, 1, 'trtt', 'Pedro Matias', '', 'A dos Cunhados', 'Portugal', '39.1524', '-9.2972', 'trtt@', 'trtt', 'headline', 'introduction', '22_1726999049.jpg', 'private', '', 5, '5', '5', '1701509624242'),
(47, 5, 5, '1', 'Jean Mulhouse', 'Allauch', 'Eyguieres', 'France', '43.3357', '5.48201', 'testerA@propsgo.com', 'tester', 'I am a great realtor!', 'My Realtor Description is about me loving my job at companyA, companyB,', '47_1742930288.jpg', 'private', 'public', 5, '5', '5', '1742930036');

// using the above database table structure for quser and example records/rows, create an insert statement where 5 random genre real estate agents in spanish with convincing headline (u_header) and description (u_desc) as an insert statement

create an insert statement for the following records where the first column is unique and autoincrementing

(48, 5, 1, '1', 'Juan Pérez', 'Madrid', 'Madrid', 'Spain', '40.4168', '-3.7038', 'juanp@propsgo.com', 'juanp', '¡Soy un gran agente inmobiliario!', 'Mi descripción de agente inmobiliario es sobre mi amor por ayudar a las personas a encontrar su hogar ideal.', '48_1742930288.jpg', 'private', 'public', 5, '5', '5', '1742930036'),
(49, 5, 1, '1', 'María López', 'Barcelona', 'Barcelona', 'Spain', '41.3851', '2.1734', 'marial@propsgo.com', 'marial', '¡Tu sueño es mi misión!', 'Como agente inmobiliario, me apasiona ayudar a mis clientes a encontrar la propiedad perfecta.', '49_1742930288.jpg', 'private', 'public', 5, '5', '5', '1742930036'),
(50, 5, 1, '1', 'Carlos García', 'Valencia', 'Valencia', 'Spain', '39.4699', '-0.3763', 'carlosg@propsgo.com', 'carlosg', '¡Experiencia y dedicación!', 'Con años de experiencia en el sector inmobiliario, estoy aquí para guiarte en cada paso del camino.', '50_1742930288.jpg', 'private', 'public', 5, '5', '5', '1742930036'),
(51, 5, 1, '1', 'Laura Martínez', 'Sevilla', 'Sevilla', 'Spain', '37.3886', '-5.9823', 'lauram@propsgo.com', 'lauram', '¡Tu confianza es mi prioridad!', 'Me esfuerzo por construir relaciones sólidas con mis clientes y brindar un servicio excepcional.', '51_1742930288.jpg', 'private', 'public', 5, '5', '5', '1742930036'),
(52, 5, 1, '1', 'David Sánchez', 'Bilbao', 'Bilbao', 'Spain', '43.2630', '-2.9340', 'davids@propsgo.com', 'davids', '¡Resultados que hablan por sí mismos!', 'Mi enfoque centrado en el cliente garantiza que obtendrás los mejores resultados en tu búsqueda inmobiliaria.', '52_1742930288.jpg', 'private', 'public', 5, '5', '5', '1742930036');

INSERT INTO `quser` (`_id`, `u_rtype`, `u_cat`, `u_name`, `u_fullname`, `u_location`, `u_region`, `u_country`, `u_loclat`, `u_loclng`, `u_email`, `u_pass`, `u_header`, `u_desc`, `u_icon`, `u_privacy`, `u_prfs`, `u_socauthtype`, `u_socauthid`, `u_socauthtoke`, `u_dadded`) VALUES
(48, 5, 1, '1', 'Juan Pérez', 'Madrid', 'Madrid', 'Spain', '40.4168', '-3.7038', 'juanp@propsgo.com', 'juanp', '¡Soy un gran agente inmobiliario!', 'Mi descripción de agente inmobiliario es sobre mi amor por ayudar a las personas a encontrar su hogar ideal.', '48_1742930288.jpg', 'private', 'public', 5, '5', '5', '1742930036'),
(49, 5, 1, '1', 'María López', 'Barcelona', 'Barcelona', 'Spain', '41.3851', '2.1734', 'marial@propsgo.com', 'marial', '¡Tu sueño es mi misión!', 'Como agente inmobiliario, me apasiona ayudar a mis clientes a encontrar la propiedad perfecta.', '49_1742930288.jpg', 'private', 'public', 5, '5', '5', '1742930036'),
(50, 5, 1, '1', 'Carlos García', 'Valencia', 'Valencia', 'Spain', '39.4699', '-0.3763', 'carlosg@propsgo.com', 'carlosg', '¡Experiencia y dedicación!', 'Con años de experiencia en el sector inmobiliario, estoy aquí para guiarte en cada paso del camino.', '50_1742930288.jpg', 'private', 'public', 5, '5', '5', '1742930036'),
(51, 5, 1, '1', 'Laura Martínez', 'Sevilla', 'Sevilla', 'Spain', '37.3886', '-5.9823', 'lauram@propsgo.com', 'lauram', '¡Tu confianza es mi prioridad!', 'Me esfuerzo por construir relaciones sólidas con mis clientes y brindar un servicio excepcional.', '51_1742930288.jpg', 'private', 'public', 5, '5', '5', '1742930036'),
(52, 5, 1, '1', 'David Sánchez', 'Bilbao', 'Bilbao', 'Spain', '43.2630', '-2.9340', 'davids@propsgo.com', 'davids', '¡Resultados que hablan por sí mismos!', 'Mi enfoque centrado en el cliente garantiza que obtendrás los mejores resultados en tu búsqueda inmobiliaria.', '52_1742930288.jpg', 'private', 'public', 5, '5', '5', '1742930036');

// use an update query  for 5 new french users and update the u_header and u_desc to french and use \u unicode for special characters and quotes
UPDATE `quser` SET `u_header` = 'Je suis un grand agent immobilier !', `u_desc` = 'Ma description d\'agent immobilier parle de mon amour pour aider les gens à trouver leur maison idéale.' WHERE `_id` = 53;
UPDATE `quser` SET `u_header` = 'Votre rêve est ma mission !', `u_desc` = 'En tant qu\'agent immobilier, je suis passionné par l\'aide à mes clients pour trouver la propriété parfaite.' WHERE `_id` = 54;
UPDATE `quser` SET `u_header` = 'Expérience et dévouement !', `u_desc` = 'Avec des années d\'expérience dans le secteur immobilier, je suis là pour vous guider à chaque étape du chemin.' WHERE `_id` = 55;
UPDATE `quser` SET `u_header` = 'Votre confiance est ma priorité !', `u_desc` = 'Je m\'efforce de construire des relations solides avec mes clients et de fournir un service exceptionnel.' WHERE `_id` = 56;
UPDATE `quser` SET `u_header` = 'Résultats qui parlent d\'eux-mêmes !', `u_desc` = 'Mon approche centrée sur le client garantit que vous obtiendrez les meilleurs résultats dans votre recherche immobilière.' WHERE `_id` = 57;


INSERT INTO `quser` (`u_rtype`, `u_cat`, `u_name`, `u_fullname`, `u_location`, `u_region`, `u_country`, `u_loclat`, `u_loclng`, `u_email`, `u_pass`, `u_header`, `u_desc`, `u_icon`, `u_privacy`, `u_prfs`, `u_socauthtype`, `u_socauthid`, `u_socauthtoke`, `u_dadded`) VALUES
(5, 1, '1', 'Ana Torres', 'Ciudad de México', 'CDMX', 'Mexico', '19.4326', '-99.1332', 'anatorres@propsgo.com', 'anatorres', '¡Soy una gran agente inmobiliaria!', 'Mi descripción de agente inmobiliaria es sobre mi amor por ayudar a las personas a encontrar su hogar ideal.', '53_1742930288.jpg', 'private', 'public', 5, '5', '5', '1742930036'),
(5, 1, '1', 'Luis Martínez', 'Guadalajara', 'Jalisco', 'Mexico', '20.6597', '-103.3496', 'luismartinez@propsgo.com', 'luismartinez', '¡Tu sueño es mi misión!', 'Como agente inmobiliario, me apasiona ayudar a mis clientes a encontrar la propiedad perfecta.', '54_1742930288.jpg', 'private', 'public', 5, '5', '5', '1742930036'),
(5, 1, '1', 'Sofía López', 'Monterrey', 'Nuevo León', 'Mexico', '25.6866', '-100.3161', 'sofialopez@propsgo.com', 'sofialopez', '¡Experiencia y dedicación!', 'Con años de experiencia en el sector inmobiliario, estoy aquí para guiarte en cada paso del camino.', '55_1742930288.jpg', 'private', 'public', 5, '5', '5', '1742930036'),
(5, 1, '1', 'Diego Pérez', 'Puebla', 'Puebla', 'Mexico', '19.0414', '-98.2063', 'diegoperez@propsgo.com', 'diegoperez', '¡Tu confianza es mi prioridad!', 'Me esfuerzo por construir relaciones sólidas con mis clientes y brindar un servicio excepcional.', '56_1742930288.jpg', 'private', 'public', 5, '5', '5', '1742930036'),
(5, 1, '1', 'Valentina Torres', 'Cancún', 'Quintana Roo', 'Mexico', '21.1619', '-86.8515', 'valentinatorres@propsgo.com', 'valentinatorres', '¡Resultados que hablan por sí mismos!', 'Mi enfoque centrado en el cliente garantiza que obtendrás los mejores resultados en tu búsqueda inmobiliaria.', '57_1742930288.jpg', 'private', 'public', 5, '5', '5', '1742930036');


// create insert statements for 5 new mexican users in spanish with convincing headline (u_header) and description (u_desc) as an insert statement and not using the _id column so it autoincrements
CREATE TABLE `qlinks` (
  `_id` int(11) NOT NULL,
  `k_rtype` int(11) DEFAULT NULL,
  `k_userid` int(11) DEFAULT NULL,
  `k_coid` int(11) DEFAULT NULL,
  `k_category` varchar(56) DEFAULT NULL,
  `k_title` varchar(128) NOT NULL,
  `k_matter` text DEFAULT NULL,
  `k_privacy` varchar(56) DEFAULT NULL,
  `k_dadded` varchar(12) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
    tmpKLnksSlctObj = {};
    tmpKLnksSlctObj["facebook"] = "Facebook";
    tmpKLnksSlctObj["whatsapp"] = "Whatsapp";
    tmpKLnksSlctObj["instagram"] = "Instagram";
    tmpKLnksSlctObj["linkedin"] = "Linkedin";
    tmpKLnksSlctObj["twitter"] = "Twitter";
    tmpKLnksSlctObj["web"] = "Website";
    tmpKLnksSlctObj["email"] = "Email";
    tmpKLnksSlctObj["telephone"] = "Telephone";
    tmpKLnksSlctObj["sms"] = "SMS";
    tmpKLnksSlctObj["fax"] = "Fax";
    tmpKLnksSlctObj["other"] = "Other";

 
 // k_matter is the link type facebook, whatsapp, instagram, linkedin, twitter, web, email, telephone, sms, fax, other
// create qlinks records with telephone, sms, whatsapp facebook and twitter records for each of the spanish users above

/*
-- QLINKS records for Spanish quser agents (Juan Pérez, María López, Carlos García, Laura Martínez, David Sánchez)
-- Use their quser _id as k_userid and k_coid, email for facebook/twitter, and fictional Spanish phone numbers
// create qlinks records with telephone, sms, whatsapp facebook and twitter records for each of the mexican users above where the first user has _id = 58 and the last user has _id = 62
insert into qlinks (k_rtype, k_userid, k_coid, k_category, k_title, k_matter, k_privacy, k_dadded) values
(5, 58, 58, 'telephone', 'Teléfono', '+52 555000058', 'public', '1742930036'),
(5, 58, 58, 'sms', 'SMS', '+52 555000158', 'public', '1742930036'),
(5, 58, 58, 'whatsapp', 'WhatsApp', '+52 555000258', 'public', '1742930036'),
(5, 58, 58, 'facebook', 'Facebook', 'ana.torres@propsgo.com', 'public', '1742930036'),
(5, 58, 58, 'twitter', 'Twitter', 'ana.torres@propsgo.com', 'public', '1742930036'),
(5, 59, 59, 'telephone', 'Teléfono', '+52 555000059', 'public', '1742930036'),
(5, 59, 59, 'sms', 'SMS', '+52 555000159', 'public', '1742930036'),
(5, 59, 59, 'whatsapp', 'WhatsApp', '+52 555000259', 'public', '1742930036'),
(5, 59, 59, 'facebook', 'Facebook', 'luis.martinez@propsgo.com', 'public', '1742930036'),
(5, 59, 59, 'twitter', 'Twitter', 'luis.martinez@propsgo.com', 'public', '1742930036'),
(5, 60, 60, 'telephone', 'Teléfono', '+52 555000060', 'public', '1742930036'),
(5, 60, 60, 'sms', 'SMS', '+52 555000160', 'public', '1742930036'),
(5, 60, 60, 'whatsapp', 'WhatsApp', '+52 555000260', 'public', '1742930036'),
(5, 60, 60, 'facebook', 'Facebook', 'sofia.lopez@propsgo.com', 'public', '1742930036'),
(5, 60, 60, 'twitter', 'Twitter', 'sofia.lopez@propsgo.com', 'public', '1742930036'),
(5, 61, 61, 'telephone', 'Teléfono', '+52 555000061', 'public', '1742930036'),
(5, 61, 61, 'sms', 'SMS', '+52 555000161', 'public', '1742930036'),
(5, 61, 61, 'whatsapp', 'WhatsApp', '+52 555000261', 'public', '1742930036'),
(5, 61, 61, 'facebook', 'Facebook', 'diego.perez@propsgo.com', 'public', '1742930036'),
(5, 61, 61, 'twitter', 'Twitter', 'diego.perez@propsgo.com', 'public', '1742930036'),
(5, 62, 62, 'telephone', 'Teléfono', '+52 555000062', 'public', '1742930036'),
(5, 62, 62, 'sms', 'SMS', '+52 555000162', 'public', '1742930036'),
(5, 62, 62, 'whatsapp', 'WhatsApp', '+52 555000262', 'public', '1742930036'),
(5, 62, 62, 'facebook', 'Facebook', 'valentina.torres@propsgo.com', 'public', '1742930036'),
(5, 62, 62, 'twitter', 'Twitter', 'valentina.torres@propsgo.com', 'public', '1742930036');


INSERT INTO `property` (`_id`, `prtype`, `pcoid`, `ptitle`, `pcontent`, `ptype`, `bhk`, `stype`, `bedroom`, `bathroom`, `balcony`, `kitchen`, `hall`, `pfloors`, `size`, `price`, `pdoornum`, `pstreet`, `location`, `city`, `state`, `country`, `pzipcode`, `ploclat`, `ploclng`, `feature`, `pimage`, `pprf_showslr`, `pprf_showftd`, `pprf_showloc`, `pprf_prvcy`, `uid`, `pstatus`, `mapimage`, `topmapimage`, `groundmapimage`, `totalfloor`, `pdadded`) VALUES
(91, 5, 5, 'Titulo.. Moradia... ', '', 'house', 'on', 'sell', 5, 2, 1, 1, 1, '2', 5, '199.000', '1', '1', '1', 'Catarroja', 'Valencia', 'Spain', '1', '39.4', '-0.4', '5', 'default.jpg', '5', '5', '5', '5', 50, 'pending', '5', '5', '5', '5', '1758465346'),
(92, 5, 5, 'Titulo.. Moradia... ', '', 'house', 'on', 'sell', 5, 2, 1, 1, 1, '2', 5, '1.199.000', '1', '1', '1', 'Agaete', 'Vecindario', 'Spain', '1', '28.1002', '-15.7', '5', 'default.jpg', '5', '5', '5', '5', 50, 'pending', '5', '5', '5', '5', '1758466089'),
(93, 5, 5, 'Titulo.. Moradia... ', '', 'house', 'on', 'sell', 5, 2, 1, 1, 1, '2', 5, '199', '21', '1', '1', 'Alpiarca', 'Santarem', 'Portugal', '1', '39.2571', '-8.58187', '5', '78_9270b123cc274ddf.jpg', '5', '5', '5', 'private', 46, 'pending', '5', '5', '5', '5', '1758467912'),
(94, 5, 5, 'Titulo.. Moradia... ', '', 'house', 'on', 'sell', 5, 2, 1, 1, 1, '2', 5, '199.000', '1', '1', '1', '1', '1', 'Portugal', '1', '', '', '5', 'default.jpg', '5', '5', '5', '5', 62, 'pending', '5', '5', '5', '5', '1758480801');

// using the query on lines 1003 - 1007 above as a template, create 5 new property records for each of the 5 new spanish users above (Juan Pérez, María López, Carlos García, Laura Martínez, David Sánchez) where the first user has _id = 52 and the last user has _id = 62 using the mexican city names above (Ciudad de México, Guadalajara, Monterrey, Puebla, Cancún) and fictional street names and numbers and realistic prices in mexican pesos and sizes in square meters and 4 bhk for houses and 3 bhk for apartments and condos and villas starting with propert._id = 95 and ending with property._id = 99
INSERT INTO `property` (`prtype`, `pcoid`, `ptitle`, `pcontent`, `ptype`, `bhk`, `stype`, `bedroom`, `bathroom`, `balcony`, `kitchen`, `hall`, `pfloors`, `size`, `price`, `pdoornum`, `pstreet`, `location`, `city`, `state`, `country`, `pzipcode`, `ploclat`, `ploclng`, `feature`, `pimage`, `pprf_showslr`, `pprf_showftd`, `pprf_showloc`, `pprf_prvcy`, `uid`, `pstatus`, `mapimage`, `topmapimage`, `groundmapimage`, `totalfloor`, `pdadded`) VALUES
(95, 48, 'Casa en Ciudad de México', 'Hermosa casa en el corazón de la ciudad.', 'house', 'on', 'sell', 4, 3, 1, 1, 1, '2', 120, '3.500.000', '123', 'Calle Falsa', 'Colonia Centro', 'Ciudad de México', 'CDMX', 'Mexico', '06000', '19.4326', '-99.1332', '5', 'default.jpg', '48', 'public', 'public', 'public', 48, 'available', '5', '5', '5', '5', '1758500000'),
(96, 49, 'Departamento en Guadalajara', 'Moderno departamento con vista a la ciudad.', 'apartment', 'on', 'sell', 3, 2, 1, 1, 1, '1', 85, '2.800.000', '456', 'Avenida Siempre Viva', 'Zapopan', 'Guadalajara', 'Jalisco', 'Mexico', '44100', '20.6597', '-103.3496', '5', 'default.jpg', '49', 'public', 'public', 'public', 49, 'available', '5', '5', '5', '5', '1758501000'),
(97, 50, 'Villa en Monterrey', 'Exclusiva villa con piscina y jardín.', 'villa', 'on', 'sell', 4, 4, 1, 1, 1, '2', 200, '5.500.000', '789', 'Boulevard de los Sueños Rotos', 'San Pedro Garza García', 'Monterrey', 'Nuevo León', 'Mexico', '66220', '25.6866', '-100.3161', '5', 'default.jpg', '50', 'public', 'public', 'public', 50, 'available', '5', '5', '5', '5', '1758502000'),
(98, 51, 'Casa en Puebla', 'Acogedora casa cerca del centro histórico.', 'house', 'on', 'sell', 4, 3, 1, 1, 1, '2', 110, '3.200.000', '321', 'Calle de la Amargura', 'Centro', 'Puebla', 'Puebla', 'Mexico', '72000', '19.0414', '-98.2063', '5', 'default.jpg', '51', 'public', 'public', 'public', 51, 'available', '5', '5', '5', '5', '1758503000'),
(99, 52, 'Condominio en Cancún', 'Condominio frente al mar con todas las comodidades.', 'condo', 'on', 'sell', 3, 2, 1, 1, 1, '1', 90, '4.000.000', '654', 'Avenida Kukulcán', 'Zona Hotelera', 'Cancún', 'Quintana Roo', 'Mexico', '77500', '21.1619', '-86.8515', '5', 'default.jpg', '52', 'public', 'public', 'public', 52, 'available', '5', '5', '5', '5', '1758504000'); 

// create another five property records for the 5 new french users above (Jean Dupont, Marie Curie, Paul Martin, Claire Bernard, Lucas Dubois) where the first user has _id = 53 and the last user has _id = 57 using fictional french city names (Paris, Lyon, Marseille, Toulouse, Nice) and fictional street names and numbers and realistic prices in euros and sizes in square meters and 4 bhk for houses and 3 bhk for apartments and condos and villas and the property._id should start with 100 and end with 104 and property.uid should match the respective quser._id
INSERT INTO `property` (`prtype`, `pcoid`, `ptitle`, `pcontent`, `ptype`, `bhk`, `stype`, `bedroom`, `bathroom`, `balcony`, `kitchen`, `hall`, `pfloors`, `size`, `price`, `pdoornum`, `pstreet`, `location`, `city`, `state`, `country`, `pzipcode`, `ploclat`, `ploclng`, `feature`, `pimage`, `pprf_showslr`, `pprf_showftd`, `pprf_showloc`, `pprf_prvcy`, `uid`, `pstatus`, `mapimage`, `topmapimage`, `groundmapimage`, `totalfloor`, `pdadded`) VALUES
(100, 53, 'Maison à Paris', 'Belle maison au c?ur de la ville.', 'house', 'on', 'sell', 4, 3, 1, 1, 1, '2', 120, '450.000', '12', 'Rue Fausse', 'Quartier Latin', 'Paris', 'Île-de-France', 'France', '75005', '48.8566', '2.3522', '5', 'default.jpg', '53', 'public', 'public', 'public', 53, 'available', '5', '5', '5', '5', '1758600000'),
(101, 54, 'Appartement à Lyon', 'Appartement moderne avec vue sur la ville.', 'apartment', 'on', 'sell', 3, 2, 1, 1, 1, '1', 85, '350.000', '34', 'Avenue Toujours Vive', 'Presqu\'île', 'Lyon', 'Auvergne-Rhône-Alpes', 'France', '69002', '45.7640', '4.8357', '5', 'default.jpg', '54', 'public', 'public', 'public', 54, 'available', '5', '5', '5', '5', '1758601000'),
(102, 55, 'Villa à Marseille', 'Villa exclusive avec piscine et jardin.', 'villa', 'on', 'sell', 4, 4, 1, 1, 1, '2', 200, '750.000', '56', 'Boulevard des Rêves Brisés', 'Le Panier', 'Marseille', 'Provence-Alpes-Côte d\'Azur', 'France', '13002', '43.2965', '5.3698', '5', 'default.jpg', '55', 'public', 'public', 'public', 55, 'available', '5', '5', '5', '5', '1758602000'),
(103, 56, 'Maison à Toulouse', 'Charmante maison près du centre historique.', 'house', 'on', 'sell', 4, 3, 1, 1, 1, '2', 110, '400.000', '78', 'Rue de la Tristesse', 'Capitole', 'Toulouse', 'Occitanie', 'France', '31000', '43.6045', '1.4442', '5', 'default.jpg', '56', 'public', 'public', 'public', 56, 'available', '5', '5', '5', '5', '1758603000'),
(104, 57, 'Condominium à Nice', 'Condominium en bord de mer avec toutes les commodités.', 'condo', 'on', 'sell', 3, 2, 1, 1, 1, '1', 90, '500.000', '90', 'Avenue des Anges', 'Promenade des Anglais', 'Nice', 'Provence-Alpes-Côte d\'Azur', 'France', '06000', '43.7102', '7.2620', '5', 'default.jpg', '57', 'public', 'public', 'public', 57, 'available', '5', '5', '5', '5', '1758604000');   

// create another 3 properties for each of the 5 new mexican users above (Ana Torres, Luis Martínez, Sofía López, Diego Pérez, Valentina Torres) where the first user has _id = 58 and the last user has _id = 62 using fictional mexican city names (Tijuana, León, Mérida, Querétaro, San Luis Potosí) and fictional street names and numbers and realistic prices in mexican pesos and sizes in square meters and 4 bhk for houses and 3 bhk for apartments and condos and villas and the property._id should start with 105 and end with 119 and property.uid should match the respective quser._id
INSERT INTO `property` (`prtype`, `pcoid`, `ptitle`, `pcontent`, `ptype`, `bhk`, `stype`, `bedroom`, `bathroom`, `balcony`, `kitchen`, `hall`, `pfloors`, `size`, `price`, `pdoornum`, `pstreet`, `location`, `city`, `state`, `country`, `pzipcode`, `ploclat`, `ploclng`, `feature`, `pimage`, `pprf_showslr`, `pprf_showftd`, `pprf_showloc`, `pprf_prvcy`, `uid`, `pstatus`, `mapimage`, `topmapimage`, `groundmapimage`, `totalfloor`, `pdadded`) VALUES
(105, 58, 'Casa en Tijuana', 'Hermosa casa en el corazón de la ciudad.', 'house', 'on', 'sell', 4, 3, 1, 1, 1, '2', 120, '3.800.000', '123', 'Calle Imaginaria', 'Colonia Centro', 'Tijuana', 'Baja California', 'Mexico', '22000', '32.5149', '-117.0382', '5', 'default.jpg', '58', 'public', 'public', 'public', 58, 'available', '5', '5', '5', '5', '1758700000'),
(106, 58, 'Departamento en Tijuana', 'Moderno departamento con vista a la ciudad.', 'apartment', 'on', 'sell', 3, 2, 1, 1, 1, '1', 85, '2.900.000', '456', 'Avenida Ficticia', 'Zona Río', 'Tijuana', 'Baja California', 'Mexico', '22010', '32.5149', '-117.0382', '5', 'default.jpg', '58', 'public', 'public', 'public', 58, 'available', '5', '5', '5', '5', '1758701000'),
(107, 58, 'Villa en Tijuana', 'Exclusiva villa con piscina y jardín.', 'villa', 'on', 'sell', 4, 4, 1, 1, 1, '2', 200, '5.600.000', '789', 'Boulevard de los Sueños', 'Playas de Tijuana', 'Tijuana', 'Baja California', 'Mexico', '22015', '32.5149', '-117.0382', '5', 'default.jpg', '58', 'public', 'public', 'public', 58, 'available', '5', '5', '5', '5', '1758702000'),
(108, 59, 'Casa en León', 'Acogedora casa cerca del centro histórico.', 'house', 'on', 'sell', 4, 3, 1, 1, 1, '2', 110, '3.300.000', '321', 'Calle de los Sueños', 'Centro', 'León', 'Guanajuato', 'Mexico', '37000', '21.1619', '-101.6869', '5', 'default.jpg', '59', 'public', 'public', 'public', 59, 'available', '5', '5', '5', '5', '1758703000'),
(109, 59, 'Departamento en León', 'Moderno departamento con vista a la ciudad.', 'apartment', 'on', 'sell', 3, 2, 1, 1, 1, '1', 85, '2.700.000', '654', 'Avenida de la Esperanza', 'San Juan Bosco', 'León', 'Guanajuato', 'Mexico', '37010', '21.1619', '-101.6869', '5', 'default.jpg', '59', 'public', 'public', 'public', 59, 'available', '5', '5', '5', '5', '1758704000'),
(110, 59, 'Villa en León', 'Exclusiva villa con piscina y jardín.', 'villa', 'on', 'sell', 4, 4, 1, 1, 1, '2', 200, '5.400.000', '987', 'Boulevard de la Vida', 'Las Joyas', 'León', 'Guanajuato', 'Mexico', '37015', '21.1619', '-101.6869', '5', 'default.jpg', '59', 'public', 'public', 'public', 59, 'available', '5', '5', '5', '5', '1758705000'),
(111, 60, 'Casa en Mérida', 'Hermosa casa en el corazón de la ciudad.', 'house', 'on', 'sell', 4, 3, 1, 1, 1, '2', 120, '3.600.000', '123', 'Calle del Sol', 'Centro', 'Mérida', 'Yucatán', 'Mexico', '97000', '20.9674', '-89.5926', '5', 'default.jpg', '60', 'public', 'public', 'public', 60, 'available', '5', '5', '5', '5', '1758706000'),
(112, 60, 'Departamento en Mérida', 'Moderno departamento con vista a la ciudad.', 'apartment', 'on', 'sell', 3, 2, 1, 1, 1, '1', 85, '2.600.000', '456', 'Avenida de los Sueños', 'Santa Ana', 'Mérida', 'Yucatán', 'Mexico', '97010', '20.9674', '-89.5926', '5', 'default.jpg', '60', 'public', 'public', 'public', 60, 'available', '5', '5', '5', '5', '1758707000'),
(113, 60, 'Villa en Mérida', 'Exclusiva villa con piscina y jardín.', 'villa', 'on', 'sell', 4, 4, 1, 1, 1, '2', 200, '5.700.000', '789', 'Boulevard de la Paz', 'Chuburná', 'Mérida', 'Yucatán', 'Mexico', '97015', '20.9674', '-89.5926', '5', 'default.jpg', '60', 'public', 'public', 'public', 60, 'available', '5', '5', '5', '5', '1758708000'),
(114, 61, 'Casa en Querétaro', 'Acogedora casa cerca del centro histórico.', 'house', 'on', 'sell', 4, 3, 1, 1, 1, '2', 110, '3.400.000', '321', 'Calle de la Alegría', 'Centro', 'Querétaro', 'Querétaro', 'Mexico', '76000', '20.5888', '-100.3899', '5', 'default.jpg', '61', 'public', 'public', 'public', 61, 'available', '5', '5', '5', '5', '1758709000'),
(115, 61, 'Departamento en Querétaro', 'Moderno departamento con vista a la ciudad.', 'apartment', 'on', 'sell', 3, 2, 1, 1, 1, '1', 85, '2.500.000', '654', 'Avenida de la Luz', 'Juriquilla', 'Querétaro', 'Querétaro', 'Mexico', '76010', '20.5888', '-100.3899', '5', 'default.jpg', '61', 'public', 'public', 'public', 61, 'available', '5', '5', '5', '5', '1758710000'),
(116, 61, 'Villa en Querétaro', 'Exclusiva villa con piscina y jardín.', 'villa', 'on', 'sell', 4, 4, 1, 1, 1, '2', 200, '5.800.000', '987', 'Boulevard de la Esperanza', 'El Refugio', 'Querétaro', 'Querétaro', 'Mexico', '76015', '20.5888', '-100.3899', '5', 'default.jpg', '61', 'public', 'public', 'public', 61, 'available', '5', '5', '5', '5', '1758711000'),
(117, 62, 'Casa en San Luis Potosí', 'Hermosa casa en el corazón de la ciudad.', 'house', 'on', 'sell', 4, 3, 1, 1, 1, '2', 120, '3.700.000', '123', 'Calle de los Sueños', 'Centro', 'San Luis Potosí', 'San Luis Potosí', 'Mexico', '78000', '22.1565', '-100.9855', '5', 'default.jpg', '62', 'public', 'public', 'public', 62, 'available', '5', '5', '5', '5', '1758712000'),
(118, 62, 'Departamento en San Luis Potosí', 'Moderno departamento con vista a la ciudad.', 'apartment', 'on', 'sell', 3, 2, 1, 1, 1, '1', 85, '2.400.000', '456', 'Avenida de la Vida', 'Lomas', 'San Luis Potosí', 'San Luis Potosí', 'Mexico', '78010', '22.1565', '-100.9855', '5', 'default.jpg', '62', 'public', 'public', 'public', 62, 'available', '5', '5', '5', '5', '1758713000'),
(119, 62, 'Villa en San Luis Potosí', 'Exclusiva villa con piscina y jardín.', 'villa', 'on', 'sell', 4, 4, 1, 1, 1, '2', 200, '5.900.000', '789', 'Boulevard de la Fortuna', 'Tangamanga', 'San Luis Potosí', 'San Luis Potosí', 'Mexico', '78015', '22.1565', '-100.9855', '5', 'default.jpg', '62', 'public', 'public', 'public', 62, 'available', '5', '5', '5', '5', '1758714000');


INSERT INTO `propdescs` (`_id`, `pd_rtype`, `pd_uid`, `pd_coid`, `pd_prpid`, `pd_prptlng`, `pd_prptype`, `pd_prptitle`, `pd_prpdesc`, `pd_dadded`) VALUES
(51, 5, 48, 24088, 88, 'fr_fr', '5', 'JMFwhg5gpgBFB2MBuCSwAcwMJgDa9gBNYEJcx5CYg', 'KIDwxgNgrgzglgMwAQFMAuToFs4DsVQhIwD2sSwUATiQA4CGSAggG4q5QrABk9WtAbiQA1JCQQIqKJGGkJ6uNPRho4AR07EyMCtTrTW7TgBokARgBsAFiRYATDJK4VVKHAz02YJFHxIA5lQKACbSaChUQTAw0iRUcOxo3Cj0YFDhAtIwUMGmcMHJqekoAvQQSLRkVBU0CO4RSMFQWhAocOVoZOGYAOQKuIVpGSgAdEgAMoxY9HCkuI2zlTGN0gDMMgAWfABGUjrBPXFw-njSVqadxTqeKN5gyglUOnhJKUMlgYPFAjroK4TEMqtfbSbYzZyOfgQZKBG4CcIwUy+aTsYhucJjACS5WCixIywOyJkbngfhgDDACVg0hu3hQ5NS0lCmE89H80jwBTe31o7GCCjQpgYVHk7gqVVs4PCuDg1QghyowSkqAwEEYCCcYFUTlwZXcXwySF4sLYQjVktmTjGk0BEFaRrZQVNktw7Oq9IwDMpBGWf2wp2pplpWioqiZstu3TYTxZSHCkWUMVMGjgDpNJS080u1WWYB1kZpXkw9KQAC8nCW81gsMiQb1qGCZTB6NrcMm3GIJMrfAEgrhgo5cBrQyrxRAAJ4sMrsWRjADCJH4Un7AXoQXZMjXVANGf5EPttHiIDyziUdpbcCcK1XpaQurQ1BQECDssHuNbA25hsT1AFxcHw4YMaToZpcGBYIuiTXvK-Q7pkYwACIKDoRINgoswXlepDHJ+RTDEGRZ5tQaB1tKTZCvQoTPhUsyUvgiKoF60iVNQqBDgKvwYAAVmuuLOEKEqyACKZIPQtCHnB3qKL07AsLK+ZYFB9wQIpo4wNwUCUlQYACFQYwAPKUiQpj+MoaA0Lgi4JKY9wIHBnE+H4dTzM2ELOSs1wQPG95wGwMBjEwYBgDCIE-Eg8iUva9AArC-YljQVyQqpACyAC0VgAAxIAAmswqUWKOaUAKwZasNnSCJP7KqE+xwbQaqyIpig6EEtD5CW0Y6PasiKNV0jJZR8QDn8BzReZ8VwScTj+RQ4BPq0zVxn25JxCRbFJb4ABcmA4SWzLbOQfwqJh8zMlgcHmSQEzHBEV3ZHKPSGDK-LXpQNAMGMwi+cq929E9+SMMyb10Iw8D+DKdTMbU9TVIS8yyfJuD4E1GDbl+JTwKEigJOUymqUdGlaTp1TBjBU6KGyTJ9CwJCvjVxARHJsg6Fs6TXqZ1YoKY9P0hSHURGtfw9uZyGVCOCP0Ns9rAXCjjEeGx24LOSBzj0HqOWxSq0xgwqijrgkEEQIlSGAGwRKbUHmhoeqvHhu7SHJKBAA', '5'),
(52, 5, 48, 24088, 88, 'en_us', '5', 'IIBwhgTgLgtgpgOygAgGYHsLIM5gDZzICWCyAwvgcgCaECiCA5nmAtckA', 'KIDwxgNgrgzglgNwKYAICGA7AJigRgJzgHMALAFxQgHsB3FKjFAQWQzizRS1WCnyoAOaYCgBkaALYCA3OimyAavQBmypPhgoyJOJuWYyaGGThhKteoxZI2HLjz6C0AGhQBGAGwAWFBIBMeFBwEBQ0cNqUaPhEqDBUUBH6YHAYRFrq+GhgSK7sSGgQKMpU+Cg2AFZUAJ4padqxUIwFhVX5pfyNWAB0KAAqJKgk8TCDRigAzHhIWPxUEppUyvSERCkoXq7NKGGJ4WTT21EzVLhImpg4ZDRURVAQhbho2rPzrgyoi1oDEihrMEFkLoASQoJDGMCEyWGKAA1uEwANGDsSCgRkJMvtDjAdKl0Ph8q4BOo1GAKMVShI0ClDClastuKULrcMKS4AwCuEqr9GPUUEMJEgev1UBBEHSXr9NBCsmzYOhsHgVuRXMiuHB8aSyiBwlobrz9vhMtkVToEdytHxGGAGBgkKTNKredaJBIGHj8gslry+I82AAvJ5sjAm0wogT8BB5TREfFPFDO8kUJnIDSB0VkKo9EHcyBQbjnFBEKJoGLm3nh0w5FAYJ58AqFsYpYzNQMMTbq+MMLDhIN0mz-Qi4hMlJNJjBckwClRfVCtKJZii6cxgJ4HNacGhIe4AWkp1KptpwPswcADJjb23CKP2GDYmmtfDIhLQ3AgrhgYRddIEVCoEBgrgIsEMw2AA5OcsbyjgRb4NwTSxgBRQlF8VAjNsQwoAgBRQKgnAAI5BEgY44DAaBqGUGCRvwGAChggIoAAMlQK77DgbrlvixjELKmjWBgOHTrw-BEm8trTryrrGFqubwMgUGdhIiZoLgEC4Qh04AApUH6OHUMwEBRGAohUFkCRINIwboEUSB0NS6g1ueNaFAMBQRNkdGcbkPIDCgFZYZiMAIr+-7iT5ABawRUCqV5WVhhBEVynx2fgDlBvWLkhCiK74vGNhkJ56AOluhSNt5qB+auqJBX+iFrBxiCVYFQw1aFqARdQPQMUguh8FWRbGNRcxVIBZGiPkYBmdI5wKpgFFYKpMDnCE9mBsgPTAEYXJZNki26jOvgHigHT7FKUBmmMvIALLbl4AAMKAAJrMNuHjyddACst3jCGZr9r1miZAI7C+FQyC0WQmhkHqPnuQa06XS+hA4EyVD1IyCHreAxV5Z2t52o5kMkB0pC+VAKmmFomQYBCI4AFyBJooq2tNlw+ZdRH8IxxDqDczaOdOfHsJw3AoEJThdAxYq4m6gt2CLYtCL4+TUxRlQ1Li+GEU+qJ2r1R1nHkdFwPWNhUQw4PRREvIvlhdElh8SxgpGuLhkgEhwFAPwjPgkY7a4MZIDY7pjEypvGypqD5ZgNP4KEV5rDQBRwri3bNiygooNmS6cES+AkhQAgGdkSGlNoqEir+ydpOSKAERyGbTqKag9KIISyAA9L5YhEGQ0hAA', '5'),
(53, 5, 50, 24088, 91, 'spa_spa', '5', 'AoSwzg9gBApgdlAbvALgQ1ggwmgNrmKAExlzCh0TwICcwg', 'KIDwxgNgrgzglgNwPYAICeLoFs4DskyoBGAhgFaoCmuKAggtXACYkpOUrBQBOSADiWAAyElj4BuAGookAM26UwHSjAAuHWSVyqRJMFHXi1cMMXJUa9RizYcuvAQBpbKAIwA2ACwosAJhSmuGrcUMwEAUg0onwQcKzq3NwkAF6sSNxw1KokNiQQKDA8zsyUeSgCSWxwMPIGJNy2+YT5TDxa6iiqSExU+SRC2nAQ7OJIAHQAMqwIiJm4NvpZrIEoAMxs6ThdGeHsMhkA5tQons5dPTARUdxY9XDhlGJIqkkX6BuXpAOqQyPhpmIIJQujBnFB8C5KBAIA8aIU4OoxgARap8SIcPamMB4VgqATYgjLSIoZKRVh7CAkBA5VB4dh8ahMObqZwM7iyRTZcr1Vi3bTUSgNKH7dg0DCycEE3B5Zg5FDHYUACyQB3qY2ATTyQiQegMlHEuAAtADKD0hZdorFUBhsHgCEhnCsYDKbEyFGAuaxKZ1BUlUs4AI5QDisQooBjJK6cok0SmXUnSy4A8EqFzenikXBwVLY7W6wy4ZwwlBBkNo7hcg5JGgA7qypjvBjcZ0-WIsJhjACSuEgUDQHBiKXJHFVSTIyhowr47vuxSC2UpuZ1+gLLlVl2lqjaEGcJDgChQekiTKlNJQo-a2a0PSusnSqnlNageSDmQaQlKK-1aLAw7631+fVxgAVSIEwz2OcFWAzLQryXfN9SfesSEdYk+GqLk9nULNQW5dgd3KapsUTZwE1YPBNEGfIMDIi0yHqJlpRYXCKlYEhS2hcJS3DPJ0i0R9tghF4tFfYsMBgSgDh4cYAGUEWfGxjm9acVB+A57mdOgGCzV07GkpwUCgtMSHjMlLiwXQvyMeVwGgeBqUuDAwDzKysG6EyXAABSQZJg2LPZaEpbhnOXPUDV3eUYF-QhzOBXhLnwlAAGEsl4ZKkCwQVsTKAAtTJixWakMlNOUsLmZjnEKNlMuCmlcNMIF1PCPAEmlU8gQSgcFGMJqIjcugavAmgZLAZUkAI38xFgQysybeBsh2XDlRgdCFxUR1Ut2DhnWgJhHQgIQ4isrNovKDJqQq89n24dhuEOhDxA8pzNs6+VWl-eDjpQCjL3yJSPLwTKmT0e5cBUMYUAAeQJZx1xeSIMvuqyUICEgOQSJGwqemaCjwFBZDxvY8lakgfgcsYADFLLC7E+jAJRCEPTAPOnPBsQEDrw0xwwPNrZmUAAWUNTwAAYUAATToQ13HeIWAFYRdWItUG4kzJLaWwVspVIcCycI7pIB70LeRUQdxfIlG0NK9gFnIMgbDBniSS5qcMBQTPVcAoSyVNAkoEBQdTIG4n5TpqxW+8ByEZ8rKIWJTAALkwbnENKV6SAMJAiFgVMbVxNQQZcsKaBtuLUAmOAjmtjgrB04dOH0kgxkkWYhVjVha9lFx7H4UNK6zAnfyqGoQgWlxwQE9IIW6koezifJhNwUSHQKdXeFQ9vwyWeiXGwwVV+4GYCUuFScCgLBSLMrebtzsOtAjisJxmYG45DSLovJDCtGy9VLgn6BRzlEFByD0qBWIllCMcbOUVlgulKhwZ+TcgA', '5'),
(54, 5, 50, 24088, 91, 'pt_pt', '5', 'AoSwzg9gBApgtlAbjAdgEwIawQYQwG3xijRnzCj0QKICcKg', 'KIDwxgNgrgzglgNwPYAICmLoFs4DskyqEBGKAhigIIJq5wAmFjKwUATkgA5nABkZWTgG4AaiiQAzNGzRgMaGABcMEsrkX8yYKMqFK4YIklIVqtBkwqsO3ADQp6GAIwA2ACwosAJhSHcStiheOC0dNCF6Al8kLHJBCFRlNjYyXjA5ejgIIVRkCEUySPIiKAh7BjQyCBRuFIcFCUCCtgcjavp2NWUURSQi1DUkADoqFAALMmI4ArSMrKF+RSzHHJ60WIBmFABHKDI2Xph68TY4AHN1lDd7Xsijw1j9rE1tXVOovGUzlLv0VrgjsQ1GM0HAOPcYpwIGhDvYoLFHNCjpcYEEQq9wsohgARAGcXhIJYQFYYRzRABeeAm6Bg3FmaEy2QIFAeKBeYSEMiYGAgZAQZAusTwjk4tEc6jQ9lFbCk0wotQoWC60nIJ0csRUUFwYDgSFwVQsZMuYDIMDIIwA8igzRBFstwkgALQPBlIFq8SoYoRxKGoHnwvAEJD2Vlm4KhXTMTIyAo1fYURLSFL0xk5ey7SU1N3WvYoGjkkN62Sx1mmtlkCPhLkQrBao7MdhAujk1LpBnzO3Eh32VAZmo2N06vUUb5qMl+CRu3p-GhsM1Ew1oIYASW10Dg-dbc2y3JQZ3jgpQ+H7aBT82DKDwSiqW-b2U7K1QZLO7N0R31ik6ZXILT8mSH+pFPuKTqMKqATlOfqxLsVQZu6nocpwSAmq05D4EMACqUwmkUlzwhQjZqHALZnveZBEo+vhQIaZCFrEnAArGZIaLIYJgEIdAwFKhRoN+DEwDq+pceWlacpUl64KooHVBg5LDkcZAAFb7JkgGmtxdRkBmSI7FAGD8gkpwto8WBTLQ3SKCBuxZH61poGc7DDCgFpDvY+4BHqMQhCGZASB6onIig8J2bEEhwAiGBVEkH6IKaQwAGKvuEOrVFoCiEOWo40Ho-Z4Dq3AAnmIQ1gMKAALKOm4AAMKAAJpUI6Lh-BVACsVUbD2umRTAMD2Z09QwAkJpYOZURsElQgMb8CriL45kcMcZWFKc9B-EgOgpEcE3ViMoByNCEpHBA5y3qmBIUeEChZi0llqLSU4YPiexesQx2GAAXJgVJlmSBI6mw7F0MQsB-FY16kQs5H2qsZUwgtAAy5zSE+pg0HQUZWI53BDCIiAqvqVBoxYDiYzYFDwGcdBhShjgwI0Oj7McwUCGZEooDI8DijqVQ9FZ1EJPYvUORwdGqvy6gCpczEqr1bAIHAENRJwMg4PC9hyUJebSLTfy3f4SEHBgeA0IpE00KlNImj1TCMfw-2A9zIy8MAolBbE0DATU0iytOM0ZvRHDaHUMHHYwZJkvLjBDEAA', '5'),
(55, 5, 50, 24088, 91, 'fr_fr', '5', 'JMFwhg5gpgBABzAblAdgEwE6wQYTAG31jSnwGcY9ECiMKg', 'KIDwxgNgrgzglgMwAQFMAuToFs4DsVQhIwD2sSAggG4q5wAmAhkk0sFAE4kAOjwAZIyzcA3EgBqSEggQcUSMPISNcaRjDRwAjlHmly7Lt3nVaugDRIAjADYALEiwAmBSVwaOUOBkY0wSKHwkAHMOFXp5NBQOMJgYeRIOOFo0fhRGMCgokT0oeksGNIyslBFGCCRuMg5KrgRvaJYoYhIIFDgKtDIozAByFVwizOyUADokABlmLEY4UlwWOar4lnkAZgUACyEAIzkYFl7EuGC8eTtLLpKD3xR-MHVkjgO8VPTh0tChkpED9FXCMRym0DhEkDtZu5XMIIGlQrcRFEYJZAvJaMQvFFxgBJCr0JYkFb0XqohReeBBGC8MDJWDyW7+FBUjLyMEQXyMYLyPD0b7ZYy4JiqSy8DjKbyVaqOSFROg1CBHDj0OSoDDspAINxgTRuXDlbx80pIQTwmhidUzOZucZTIEQNrGzlhM3S3BcmpMjDMmkEFb-bBnOmWBktDiaVlwOTa+Q0Z6YZhRGLqeKWHRwR2mo3zJBXGorMC6u49EMgpAALzcTOhWFRoPkCs4ELoMEYOtwqa8UhkKsCITCgtcuE1YdVkogAE8qOVaIpxgBhEjCOQD4KMMJchRrjiGsRCg4O7hJEAFdxqe2tuBuVYhRhlpB6tCcFAQYORwf4tuDd4-JDJzgqNV5ALIdEgwE1nSNK4MCwRcUmvBUBh3MYkAAERUA5SUbFQ5gvK9SBOL9ihGYM-FcTg0DrHNaGbEVGAiF9KjmGl8GRVBvXkKpOFQIcAL+DAACs13xdwRSlRRATTX9uEPHcfVUPpaCoSNCywOCHggVTRxgfgoBpDgwBEDhxgAeRpEhLFXDw3EXZJLAeBAdz4gIgnqBYWyhVzVhuCBEwfOAaBgcYKDAMA4Qg34NQyDp6UBeFBSrLhrmreQAFkAFo7AABiQABNSg0psUd0oAVkytY7PkSS-xVCJQR3bh2UUVTVAOMJuAYKtY33ICUhq1K6KSehR2JRgsn2JBt2-bJTjcQK2HAZ82hanN+ypUC-gWAssBrXAAC5MAIqswR2ch-g0XCFjBLAdzQLhJhOaISAxeVelMOhWDBQweEYcZxH8lUYC4hU3oYZhPs4b7iAIxBklqaQGhqYle0U5TcHwZqMEmojSngCJVGSCp1M0s6dL0gyahLfop1UTlWSpkg31q4hoiUxQDm2LJr1XbaUEsJmmWpTrogo0de1u9CqhHFHGB2B1wIRMiwwjc7cFnJA516T1nO45UGYwUVxX1sSCCISSo02aIwAt+T1R0fU3mx3cY2SIA', '5'),
(56, 5, 50, 24088, 91, 'en_us', '5', 'IIBwhgTgLgtgpgOygAgGYHsLIM5gDZzICWCyAwvgcgCZx7blgBulcEDQA', 'GQGwLg3ABADlwHNJQKIA8DGICuBnAlgG4CmUAhgHYAmUARgE74IAWYUIA9gO5QcVQBBEhXxUyUKqRTZ6HGGRTwyAWxjQVaqADVeAM13F6uKGGb5juymDK4w+DHRvG+g4aPGTUMuWQA0UAEYANgAWKGUAJjpsfHAoLnxTdjJ6BFJcDmwkywx8CgQTQ3oyDGJ-UWIyEChdDnooYgoAKw4ATzyC03Tsfirq1sr62R6qADooABVmUmZM3BmbKABmOmIqWQ5lZ11eRgQ8qBD-PvjE5hrEsDX4lPWOWmJjShowLg4a7BBq2jJTDa3-HxSBwdl1lFADrgYmBRgBJNjMRa4eS5OZQADWiQw034CSS83kxSuN1wZny5HolX8MEMBgwbFq9WUZDy1jyHV2knqzw+FHp+D4VUSrQh-C6UFmymI4ympBARA5-whxmRJQFeHI1Doe1Y-jx5yo+Ep9IaaESJne4qu9GKpT1ZmxopMMn4GD4FGI9OM+pM0ygbuUyhcKUq219pBkPxEAC9fgKKPb7OcYLJCBVjAhKb9-ZtGWweSQjHH5WBWuN4aKsNhJE8oAgUmQ0k7xSn7GUoBRfjIqnXFnlbH043xjkac9REvGOY0oYxyQG8+R8xQRXYpXpw1ABily2xzOwOBhftcDuIuMQvgBaZmslkemiRyj4WN2YenJJXCgiYxumRgalkSQQH8XAEkDDkYA4DgQFwfxsVidZGgAcieLNNRoet6EkXosxgmo6l9Dh5niWYoEIKpsFIcQAEcYmIJcaFwMgDAaCg01kCgpQoGEoAAGQPI8aBcFtKVsJh1WMIRGgo9dpFkGlAQ9ddxSDWxTSrAgSDQnNlDzMhaBASicPXAAFDhowozhBBAFIMGADgSiyYgIATcgamIHhWUMTsX07appiqJJSi4kTyjFP1WzI4lcGxSDoKUv0AC1Yg4PUzlcsjGDokUQVFa1vPjHt-PAc5D0pf1GjAELyG9c9qj7MLSAio8oGi2YoNwg5hKIZrWtisNxSSzhxh44hzBkdt61sdjNlaWCmOASoMEciAni1SgWKoAzcCecAvLjEhxhQGwRRKUptotDdr34YYrhVbBHUWcUAFkLxCAAGKAAE1BAvIItJegBWN6lkTR1p3G4xihgURwg4EhOLAYwwEtP0gutdcnoAxgaB5Dgum5HDDswWqKrHD1+T4JHmGGFhYGwfT7BMYoKGROowAALmiYx5Q9VaXj9J66NkXimEMd4Bx89dJJEMQJCkbx5FGHiFXJFxpfcOWvDk8QpUoYxGhadpyWo2i-xaz1xqgESKi4-Ae0aNi+AR1L3z9ACyK4xtgR2RE03JFNiGUfBsHBeZ6DTM7-EzYhGgpUMtIdu39NISq9Yg+g2H1A4uCqTFyUNAc+WlKAKz3cQaXoOk2BgazSjw+pTEIuVILzgpGSgGihVLdd5QMcZQGQAB6WB4CQCAgA', '5'),
(57, 5, 50, 24088, 92, 'spa_spa', '5', 'AoSwzg9gBApgdlAbvALgQ1ggwmgNrmKAExlyhwCcKQySpcIxy8YLGg', 'FAIQ9gdglgLmAEAHKBnBBjS8YFMBOeAhgF6Hw4TwCCRAboeocAKIQDmOANgGSEC2iANwA1bmACufToM4BrfCiR4cKCjDIr15FIhzp16cZ0J54tKOYoATDZVVtxEG0mMR1AGniZKjslAHKKFCQhG442PhEpEj4-jgwRJzwVuF8vAziuIKKKfAAjADMAAzwfPF4YCiejgi5nJWlhACeYIHwhAkMMBYNdWSMKIQAdPDMKLjwHBD4lQgqiAzB5AAeuHjBeJ4AjuLhFSlkxkpgyDg2Vp6c4WAAZsro4YcNELu0DYgVp+rrDUeIlVAAEZQThQc7JcK6PBoCCEUGkPBHMgocSTcTjMBDYAAYSwvmSqASQPE6CgYgyWUouggg2cCyI7Q+YFoegAFiZ2kk0oQKThBMt-BhCM4ygkMOJhUQrGBLv1CIMvLs3P0sAVkq0+LBWsEUAAueBHdnAgxksC8wRU9YQUkLJKGNQqnyUfiIUEIFnjMGteBNeCAwjcNwglKCOZ2cSwHCeX3SxRG2CLSAqdpWKCkkJXRQ7cKYAQmXBO7QLdNoP0BoOcEMIG78EFQEwjKgpbnmqoEnRJiHwRztVS1HOtXAobj1wxZYbUJJqIibbuUNhESjszhJQjA-BwZJkBgPUtw+CBTd9RSaUKk+WeILO6nypDykH1Nv1eDZxmD7cCUEwcRWH0GyRQBAALnFiAAyKqkrCnjePAqBHL6xAhF2uZnN6gG4AuwqEJ4yZQjcehaPSZD3ECUCmGQNaaqCZC+rWbCVI2zbpGOfJtvaypeHilDMZkfLKGQuQFikKQVH+xj0NKnhEY0LSmLmYCpiBoyUNqUx3ngEx9JxkHbpwgL4Gwa4aEk0p4JqcA-H+hj5v2ZaBt0lZ8rZqh4OY6ZgWQaxRNhL67OQEC0LsnAsgaZDmJYTg+YQ-waWQ+KqDSizkixFrIZA3QvGCwqcZQXD+RZQHwLC36JCMAAiKi5Hly6cDhSSDDwZopZQvp5aZ5naggHyATacKXo86APLkGjjOE8yJisawbPA3ASs1aaYsAACqwKMM4FChZxqbns4iGwl2NCEPQjCeJ5oTwGgz55CUmovHAOThAAspA6D1D5p5ePKyJjdaSqdAeCk4FhXZwLGBoNC5bk6toFDnpm+ofJoUBsDqDSYFcKOVNB069OEDU-p4NZmYsF4XeIUJlHga0NL6+L0OswO3BuZCGeMFQQMlvGCJqJ05eYGlkkDzXSkcG34se8B7beLYpQ9qhYQ98CPZKYIjOB3Z4P60CkKSnOUhdeOwLN5q2HOnmLjsIJyiueyA8DuT0tmbZgkDSTSamKB3JkHJaYwnB8DR5BJOu0zjCYl6AQeFCOOe5GbUyAqauCvtQD+wpYgAcv2ABWkJfaYRwnIOjhZb+uTmEE3zaIRnxQGc6fKWbktITB6hUmAjDwEzsVduFdeRYooJh4o0nThyYUWGROFh9oTcd-eet8txc1c9AnfSd4LIC9CP3HF8JhLLkdOT9YGjLK96IWMMwBAA', '5'),
(58, 5, 46, 46, 93, 'pt_pt', '5', 'LIewTghgJglhAEMB2UCmAHVKsBdXwAP4A3LKBVAW3gEEAbdOMAc4iA', 'LIewTghgJglhAEAVALPAxiAtvCaCmAzgTAEYwA2MU0h8AdgK6YIBeIdC+dALpOfFDzwAguQAOcMADI0+WOQDcEAHQBhCAQR0Q8THnIALcPCHMYBeGDwAzGByg7C3CjoBKpCNzwArCNoA0ugww3I4EYhAychQKIJom6FjwTCYAHvjkeDxC5CAA5pAODGA6GNgpYiBRePKxgWh+FPUaCII4YGBMcQl5EB0Q1ngwkPVJBfoG0MYRkDgWgwTcGgJC1hCYUnBoDF4KlAhC6zB5ccoAcjoSBDrcUni4O3gKHXg3eJjdKYRoYCFSIA9dr8QIEmAgCn42ppyJwkjCrMMIIEAO5oeDXNBwciBGEAN0hfTgCT6nQ+FiEGBYdkmJnCkVkNRicVh2Aok3OCGhCC8ZJwtIa1BWOHwRB0EEuvz0w0u5hBiWw+jw+IcYCF32gSPg7DaWQwPFmYN0fQguLZzPRDE2gKeXnl6FyBDw3ASqPlYkyoVBzHgXjA+ER6BaQpIfiMQoglRgYu6AEcGH1QgRAmYLABmeBxhOnADy6JAt08FEEsXgd2tCmSCrp1VqOkwDHIzmsDDomPYEGxOBIeDAnp9IAc8Gs4EKYqNgkRygAMiAGpQWPTooopIXyMWJTBTZk8nBqAAuACi2DYHHQWV4HaFogkfRrMRZwsI10sK-LEkHbQaHTH3xAMKTFpiD2eh+lMAFlGW2xAm2CSOmApp3oocQKMI8CVAwGAWBEooWG0ETUL8mrWJ0SyEYEViLBAxR+F44EDJBjwKABlSLDon5YCQDCLFaUFPLi+gJPWjYeK2IAofAACMACsuh2Ds3SCsIEmpqM2CUL0iEKP8zhrk8tCwFYSwEAo0myYwiZCgAyjRt73LxCiYCZ8BGLMbRTuYJAAoEVD3PwMwIHG7w+pAIaGFonARiEl5CIIjq+PApr8aqZTBX4cYUFQNAJJmlDUIIygHpRpZ2YxlYICAlS9i2mVtFI8b2XQMANGhxoJZuPb0IaHyFESzatlGHD8EIVjuk6rQUlgA41YQgSMN61AWCeywpmh0gQOWzgNOSOAQlAr72fx5gCG4HheN4IDKAACuAgUrPx-J-gYHUIAAYh2aArjp67wK4vnwIVSxeHu2ZiKRaH6FocTxBAeR3JifoKP1CAMbsD2GB1eDpPocPDGgiOYpqeq2H4mkHJYhANksDgEMo8CqEkhp4OlERSHQJDhAogiwAKmqeFksB6Dwlw9tcg0wAug5CIaECeWA1B5EFdggMq4Cak46zdGUYglHozjUyY2ChGAHCqpy8ZpEBvw4wjSPwDAHxkJQ+2MYRpb1YxjXNUI3aYAAtAQGGMtQtMACIblKJSJDwng6CuEL8RWVgduLi6Msuq7fQ4rPs2ITF4JabMc6LRiBOrvIQOlLWzBA3gMHt632b7uQABQQAAlNnHMRYK2HPoODSYNSF2loXueFRgYUZvGuU0KXBATzSr3vZ9RZPG4f0A3zyhAA', '5'),
(59, 5, 46, 46, 93, 'spa_spa', '5', 'LIewTghgJglhAEMB2UCmAHVKZYC6vi3gDc8EiBBAG3TjAHOEg', 'LIewTghgJglhAEAVALPAxiAdvCa0FMBnGAIxgBsYpp59sBXTBALywQMwBdJz4p94AQXIAHOGABkefLHIBuCADoAwhEII6tXgFt8AK3DwAnvG0SIuep3xzC8MPgBmMJlBC1CnCu4BKpCNZ6EJggADSm9CZEIrgwIOrG6FjwjLQAHgTkdNbw5CAA5pBu9GDuGAzYIiCs4WjBFLVqCPw4YGD02vGJ+RBtEI74MJC1yTFtFOQIYwiTds5EnGp8Ao4Q2hRwiWsw+fGK8ACi2JPwIpNcCCQQQfDWmPiddowIIM5oLhDhz-CFwfDqJ3K6AAFjBdPdPvAAO5of4gd4QcjhSYAN2C-EkcDQVhsCBMvXaj0SGHeTA8MXe8XYyRghEmigAcggAQg7g8uiciHUspBljhpIR3IjTmAwfgwKdaWEktg1BxBRKWlzEeLIW5MErMNjsrzvtpehAURMqf96BIsTi5F47EC0HlCPhOIkYUltGdHdLvtYwAReXUEi0rhIuBR+HJ3C0IFUjELcktgRAyItKfdCOEzBZsdZbPAAMzwBNJ2JYIiKA68QWcCQgSzZ7BEFL1wgUuIRcheRyMFOI8KJmDizjSwdueCOcBFWP6jFKeAAVTIdXe1drNkqoqNWXycGoAC4jnH4KwyRxuMKWsIxL1mNTZQL3JJM5axCOWiTgQINIRtbNwoR6CJxV0H1oHiEYgMpRIHTAI1KUIORBFOeEuhiQU7BaGJXHFc0VwUcJHHaRZMRwyEHE8CASmCaw03QfoJHwHDqJEegFgjAQMG0Eh6E8UgskSbR6HbfwtRAeD4AARgAVlMFwrC6FoTkEMTcxGetMEmAg0KGfA0EHODJOkzBZLQgQAGVKN6OicO0OQxILcBmgEAAZWkSBrcIqHo3hpngABHeh+2wU8rhuTRASjGBFl4Ex+AdBAjSNCUgVPTA-I2agoGJREqGgfYDjIjxGxeKowE4RhsoyiR6BwzAYDqU4DXgeKhloCo4pgI06GoUcuziJgovsfB3UWPl2JAWB0qIcJNG+eSliPJYMwYkVzBwnTaqWfFfmoEgsmM+A-CuQIQH2c0-IWOQAAVDD8yysxsZYSCwi1sw0TdmoAMURNBzC8cgw18TyAH5DjI6wdwAeREQjEIlQyFl5CB8joBECvwN6JXwDI0eRuAVOcYJr0SUiBMWNxCH2ZRklSfBUqqYMSGbOR+FgOpqF7O4lxrO65EqcVBT6mBry6kxqcwMczvgFwQjRNwwCmsiiXYkRSl0LwyZwAtcHFU10gA0UcYQFxOjIShek2SrqvWxJMYiql9gAETRkUxUSrBk0HDWTgcLLr056rlnIenGYdM1MAZkRbCwYFpQWNYuggG7nvu7yICMehqDALIAAoIAASiDiP2GgKY1FY3g6nWEITrDxm8owG5uXKqbKBuT7yG+gJQxsAHhTyxZrEUIA', '5'),
(60, 5, 46, 46, 93, 'fr_fr', '5', 'GoSwNmCGAEIHYBMCXAHApoycAuboAPoA3DBAJz0IEEwURIyBzmIA', 'LIewTghgJglhAEAVALPCA3ApgYzd7mAzoTAEYwA2MALgGSYTYCu1mA3PFBAHaHxPd4ARyYQw1GJjDwC3apAqcA5AEEKABzhha+TLApsIAOnjAIMQiEFde8CpniFqAT3t2H6ikz4AzGIMxqd3hPb3hIHz9uekYWdngAJTIIVgArHhAAGnh5egBzSCw2PkJ1RkkmAA94QLQsXAEayoIKezka7igwEBo6nH5BdSYaQmzsAAtMbkpsgFtzS2sHJxBsAGsIPIda7AwHWk3C+PR-bL3cAspFdRAmaXtfemwYMGw2Vj4oBx8IWavtoIPNB-QgmFRMcKYABeAFovjCJhBvIQYsxWGwHNxbnwMFY+I1SHcGExso0CjwoI4IBQrH1cBNMH9ogw0exMNlCNS3F94KRzLZLM9qezeaJOlJJDUgpBuFtZlMgjthiRuMsys9MN4HOd4LQYM9Xmx7CYACI8PhuTk0wRYsK42xAoi7KhSHEQ9RgRmSaSouLvTYinVfPhO6ne0bwEC0JjkorwdDYnLdJhYT1QgYOeVgLD-LWOYasOkhCiMMSU2pW7kOPn+PjYECzTz5I7vEUCBzyHokZt7NjyqmtBw8mu2G53Ry3VjTe5EGTjX6kT0R0J8ADMc4XS5MABkHAUpt6ak4Bkf1ZmmBQJD4rNgJFZVRRsrdU9RstRJ5xbqQKL70Zxq12O4VCEYAwCcP4sn6eQwL+8QAFzwGaDoIFCVgOLI8jCsoaiaGIOgEPohhFo0jDYD2RR8JAmg8ki1SwWw9YPByTDqFI8yvOM9ERvWsxZgQUqOFIJwEIQHAAFLeIWByxvEIiYBQcl8GUnwARePBbKBIrzHkEAqv+8A+GABYRku1BIjK1DcRAPhcRyZl3gExBTPxtQqIgwAcAAjAArPATJxCp8AqJ5q5nPU-51vemCVDAeKcC8OAfF5vn+R8+kAMo8GZ2iQeisxefAkxEvp24WKQUXZDAUD0dSIS3NIBBVMIwxJhg5iDu0NgWgguyaGZbi1FgF4KvGYGekWmHcCIVw0PRAkiGGdC5ewJgAMJKEQQTtpG+C6bFggCDAcn6Sc6DjV1Gaja0CDXtwt77Q+A1BPW3DXuIEDfiKF0UEojTBs1YgSK67hKV4SmQBIikCYcNWfYFSR8mkIAmAACvVIg9HOXYvMEUANvyDgJCAzi1QAYtSL3wAhq3jNj0hYvI2pbHd6EbceEx03YG3NPJbQENkJYyFYfg8C5gKzjlsTooQF72aCQXhdt9HTaxnD0bA9FtoIhBCfqHiuveYYostHC1NtEDqB6qyTPA-hYugWUirafDOx0OlbHF0ktpCnTjQmjNNOo9GaSztu8SA5BUOR7DjYdx21JLrJsMikimu6np-FIQtyIwQRe72dgIInfpGyk+36bQ3CkKUbD+56lfV+obBdAwszZK7li8bO+owHV44JnaVVSAAFBAACUDc14ix30WZqtQBCDJMmttMWBYOvpoLC1UEtUvsGMq8kE5m+EwwijkxQlMAKJOCkmBGEAA', '5'),
(61, 5, 46, 46, 93, 'en_us', '5', 'JIOwJgpgDh6wLgAgG4EsA26CGiBmB7AJ0QGct0JFUREBBdKVLQgc5yA', 'LIewTghgJglhAEAVALPA7jALgC3hAxvgKYDOJMARjADZYCe8MAdnvMU5pNXmEQiADN4AQWoAHOGABkhIrGoBuCADp4ACRABXEkUYscugc1KY8TKPAC2IEqd5Gmc%2BLbrVdAJUoRMRAFYQmEAAaeAA3IjAGEjECGC0SMwsMHDN4IgAPYmo3DngxagJdZNwENCJskIBrIiZHahDbcAgAc11seN0ApOM2coKwEOL4ZrAabgFweAEISxoGGLBMGFJEqdGaqBJVAHl9bF0RrXMp6hBJsvhsCHDUwSNiEIR%2B1vhaUOZm%2BDAzy3QsXCMvHyhQaIHwcG4FG82G%2BIEsIQKmnMkVWjUgLy6zhi4Pi8EqWHw%2BxYQxgJAK5lUAEk9ro3h8vj90G1rroDM5MBAYGAEpgQPA2YDbCczgM-ilbJzuYN9rx4HQtH9slNmBZSiBzBEBJpuCRNFgiv82KcdKZMVqlVCcLD4awcFyLJaYYzec5NGIxOBTGzrSQQvltPAAMzwChyH2qRD7PCYJb4RgJBCWbVLLVMfBLdUQHXYoghEBiGqPJW0RzdFJoM5QVQABVG7zcrQsp3w3jiLAAXPBqb0OFweHx4IIROJJDJiPIlGKARAhS2wHhZGR%2BXySISztRfa6C2BLBAwNVMJv8HDLBFiKiIu9iCQFPAAFLaUy2IhiBICb6-KHVSIhd96p-tGIIS8BKmiQBwR4QAIpAhM0M7sq26qrMIiDALeACMACsVjMJoPhvh%2BIjoYGgyGrAvDpmw6qOOmbY3lhOFMHhKzvnC8AAMoBBy0h8PgzEKJYCjoZcWjzqxvwADKkhQ6ohDAUB8OMkw4DYRTtOg4CVHo-JRi2EgctwmJoFxy6vDANxDJwAQAI56rQmAMJitlZvQEbYKS8asEiMC2bo%2BYeos3kOaZby6MwrCprRmaGccx6WBMiwQBQbhhGMEBySw6p%2BUIbLWEKYiQLRLYxRY%2BR8CQJl7uVg5CJ4lp%2BCAqgAOrYFE7TahY8qaGw7SqTpHggHQWbwAAYlmx4sAAohKPidogfJrn1ol4K0aYMB5LqLToaSZH0NQPPyYCPqsIHJls8BNYaCAKbALY%2BBYPgzH6EQkNFMAAF5ODoYBXp0xwBHogShK2NwQO63wENggydLKcWzDGTguru%2BJMJ8XXzrww0mN4ugZNuyxpro3m%2BaimiLiQ5qqCNhGCqYE0cpRLqY7Q72IZlAhSEwFDRAo6Oc9zYgKFAmM2hcVWXBErJ8vs4hyloAAUEAAJT8zzRDhCiz5iDV-XoBAdCqKrgsAMK9dtzn2XQIRbayUbuIpo3jUh00cj4yhAA', '5');


// using the LZString library, encode all property titles (ptitle) and descriptions (pcontent) from the mexican properties and create insert statements for the encoded values into the propdescs table as shown in examples directly above where property _id will be the pd_prpid in propdescs table and language code will be 'spa_spa' and pd_uid will be the propert.uid value
INSERT INTO `propdescs` (`pd_prpid`, `pd_uid`, `pd_lang`, `pd_title`, `pd_content`) VALUES
(24088, '5', 'spa_spa', 'Nave industrial en venta en Parque Industrial FINSA, Querétaro', 'Nave industrial en venta en Parque Industrial FINSA, Querétaro. \n\nSuperficie: 2,408 m²\nPrecio por m²: $7,500 MXN\nPrecio total: $18,060,000 MXN\n\nCaracterísticas:\n- Altura libre: 10 metros\n- Área de oficinas: 10% de la superficie total\n- Andenes de carga y descarga\n- Estacionamiento para empleados\n- Seguridad 24/7\n- Servicios subterráneos\n\nUbicación estratégica cerca de vías principales y acceso a transporte público. Ideal para operaciones logísticas e industriales. \n\nContáctanos para más información y agendar una visita.'),
(24089, '6', 'spa_spa', 'Oficina en renta en Torre Corporativa, Ciudad de México', 'Oficina en renta en Torre Corporativa, Ciudad de México.\n\nSuperficie: 150 m²\nPrecio por m²: $400 MXN\nPrecio total: $60,000 MXN\n\nCaracterísticas:\n- Espacio abierto con divisiones modulares\n- Aire acondicionado central\n- Sala de juntas equipada\n- Área de recepción\n- Estacionamiento para visitantes\n- Seguridad 24/7\n- Servicios subterráneos\n\nUbicación privilegiada en el corazón financiero de la ciudad, con acceso a transporte público y servicios cercanos. Ideal para empresas que buscan presencia corporativa. \n\nContáctanos para más información y agendar una visita.'),
(24090, '7', 'spa_spa', 'Departamento en venta en Condominio Residencial, Monterrey', 'Departamento en venta en Condominio Residencial, Monterrey.\n\nSuperficie: 120 m²\nPrecio por m²: $25,000 MXN\nPrecio total: $3,000,000 MXN\n\nCaracterísticas:\n- 3 recámaras con closets\n- 2 baños completos\n- Cocina integral con barra desayunadora\n- Sala y comedor amplios\n- Balcón con vista panorámica\n- Amenidades: alberca, gimnasio, áreas verdes\n- Seguridad 24/7\n\nUbicación céntrica cerca de escuelas, centros comerciales y parques. Ideal para familias que buscan comodidad y seguridad. \n\nContáctanos para más información y agendar una visita.'),
(24091, '8', 'spa_spa', 'Terreno en venta en Zona Industrial, Guadalajara', 'Terreno en venta en Zona Industrial, Guadalajara.\n\nSuperficie: 5,000 m²\nPrecio por m²: $3,000 MXN\nPrecio total: $15,000,000 MXN\n\nCaracterísticas:\n- Uso de suelo industrial\n- Acceso a vías principales\n- Servicios subterráneos disponibles\n- Seguridad 24/7\n\nUbicación estratégica cerca de parques industriales y con fácil acceso a transporte público. Ideal para desarrollo industrial o logístico. \n\nContáctanos para más información y agendar una visita.'),
(24092, '9', 'spa_spa', 'Local comercial en renta en Plaza Comercial, Cancún', 'Local comercial en renta en Plaza Comercial, Cancún.\n\nSuperficie: 80 m²\nPrecio por m²: $500 MXN\nPrecio total: $40,000 MXN\n\nCaracterísticas:\n- Ubicación en planta baja con alta afluencia peatonal\n- Amplios ventanales para exhibición\n- Baño privado\n- Estacionamiento para clientes\n- Seguridad 24/7\n- Servicios subterráneos\n\nUbicación privilegiada en una de las zonas comerciales más concurridas de Cancún, cerca de restaurantes, tiendas y oficinas. Ideal para negocios que buscan visibilidad y tráfico constante. \n\nContáctanos para más información y agendar una visita.');  


// create an update statement to update property.pcoid to 5 when it is not the number 5 or 0




INSERT INTO `qlinks` (`k_rtype`, `k_userid`, `k_coid`, `k_category`, `k_title`, `k_matter`, `k_privacy`, `k_dadded`) VALUES
-- Juan Pérez (quser._id = 48)
(5, 48, 48, 'telephone', 'Teléfono', '+34 600000048', 'public', '1742930036'),
(5, 48, 48, 'sms', 'SMS', '+34 600000148', 'public', '1742930036'),
(5, 48, 48, 'whatsapp', 'WhatsApp', '+34 600000248', 'public', '1742930036'),
(5, 48, 48, 'facebook', 'Facebook', 'juanp@propsgo.com', 'public', '1742930036'),
(5, 48, 48, 'twitter', 'Twitter', 'juanp@propsgo.com', 'public', '1742930036'),
-- María López (quser._id = 49)
(5, 49, 49, 'telephone', 'Teléfono', '+34 600000049', 'public', '1742930036'),
(5, 49, 49, 'sms', 'SMS', '+34 600000149', 'public', '1742930036'),
(5, 49, 49, 'whatsapp', 'WhatsApp', '+34 600000249', 'public', '1742930036'),
(5, 49, 49, 'facebook', 'Facebook', 'marial@propsgo.com', 'public', '1742930036'),
(5, 49, 49, 'twitter', 'Twitter', 'marial@propsgo.com', 'public', '1742930036'),
-- Carlos García (quser._id = 50)
(5, 50, 50, 'telephone', 'Teléfono', '+34 600000050', 'public', '1742930036'),
(5, 50, 50, 'sms', 'SMS', '+34 600000150', 'public', '1742930036'),
(5, 50, 50, 'whatsapp', 'WhatsApp', '+34 600000250', 'public', '1742930036'),
(5, 50, 50, 'facebook', 'Facebook', 'carlosg@propsgo.com', 'public', '1742930036'),
(5, 50, 50, 'twitter', 'Twitter', 'carlosg@propsgo.com', 'public', '1742930036'),
-- Laura Martínez (quser._id = 51)
(5, 51, 51, 'telephone', 'Teléfono', '+34 600000051', 'public', '1742930036'),
(5, 51, 51, 'sms', 'SMS', '+34 600000151', 'public', '1742930036'),
(5, 51, 51, 'whatsapp', 'WhatsApp', '+34 600000251', 'public', '1742930036'),
(5, 51, 51, 'facebook', 'Facebook', 'lauram@propsgo.com', 'public', '1742930036'),
(5, 51, 51, 'twitter', 'Twitter', 'lauram@propsgo.com', 'public', '1742930036'),
-- David Sánchez (quser._id = 52)
(5, 52, 52, 'telephone', 'Teléfono', '+34 600000052', 'public', '1742930036'),
(5, 52, 52, 'sms', 'SMS', '+34 600000152', 'public', '1742930036'),
(5, 52, 52, 'whatsapp', 'WhatsApp', '+34 600000252', 'public', '1742930036'),
(5, 52, 52, 'facebook', 'Facebook', 'davids@propsgo.com', 'public', '1742930036'),
(5, 52, 52, 'twitter', 'Twitter', 'davids@propsgo.com', 'public', '1742930036');

// create records for 5 new french users and respective qlinks
-- Jean Dupont (quser._id = 53)
INSERT INTO `qlinks` (`k_rtype`, `k_userid`, `k_coid`, `k_category`, `k_title`, `k_matter`, `k_privacy`, `k_dadded`) VALUES
(5, 53, 53, 'telephone', 'Téléphone', '+33 600000053', 'public', '1742930036'),
(5, 53, 53, 'sms', 'SMS', '+33 600000153', 'public', '1742930036'),
(5, 53, 53, 'whatsapp', 'WhatsApp', '+33 600000253', 'public', '1742930036'),
(5, 53, 53, 'facebook', 'Facebook', 'jeand@propsgo.com', 'public', '1742930036'),
(5, 53, 53, 'twitter', 'Twitter', 'jeand@propsgo.com', 'public', '1742930036'),
-- Marie Curie (quser._id = 54)
(5, 54, 54, 'telephone', 'Téléphone', '+33 600000054', 'public', '1742930036'),
(5, 54, 54, 'sms', 'SMS', '+33 600000154', 'public', '1742930036'),
(5, 54, 54, 'whatsapp', 'WhatsApp', '+33 600000254', 'public', '1742930036'),
(5, 54, 54, 'facebook', 'Facebook', 'mariec@propsgo.com', 'public', '1742930036'),
(5, 54, 54, 'twitter', 'Twitter', 'mariec@propsgo.com', 'public', '1742930036'),
-- Pierre Dupuis (quser._id = 55)
(5, 55, 55, 'telephone', 'Téléphone', '+33 600000055', 'public', '1742930036'),
(5, 55, 55, 'sms', 'SMS', '+33 600000155', 'public', '1742930036'),
(5, 55, 55, 'whatsapp', 'WhatsApp', '+33 600000255', 'public', '1742930036'),
(5, 55, 55, 'facebook', 'Facebook', 'pierred@propsgo.com', 'public', '1742930036'),
(5, 55, 55, 'twitter', 'Twitter', 'pierred@propsgo.com', 'public', '1742930036'),
-- Simone de Beauvoir (quser._id = 56)
(5, 56, 56, 'telephone', 'Téléphone', '+33 600000056', 'public', '1742930036'),
(5, 56, 56, 'sms', 'SMS', '+33 600000156', 'public', '1742930036'),
(5, 56, 56, 'whatsapp', 'WhatsApp', '+33 600000256', 'public', '1742930036'),
(5, 56, 56, 'facebook', 'Facebook', 'simoneb@propsgo.com', 'public', '1742930036'),
(5, 56, 56, 'twitter', 'Twitter', 'simoneb@propsgo.com', 'public', '1742930036'),
-- Victor Hugo (quser._id = 57)
(5, 57, 57, 'telephone', 'Téléphone', '+33 600000057', 'public', '1742930036'),
(5, 57, 57, 'sms', 'SMS', '+33 600000157', 'public', '1742930036'),
(5, 57, 57, 'whatsapp', 'WhatsApp', '+33 600000257', 'public', '1742930036'),
(5, 57, 57, 'facebook', 'Facebook', 'victorh@propsgo.com', 'public', '1742930036'),
(5, 57, 57, 'twitter', 'Twitter', 'victorh@propsgo.com', 'public', '1742930036');
// create the quser records for the new french users using the quser table structure found on this page


*/