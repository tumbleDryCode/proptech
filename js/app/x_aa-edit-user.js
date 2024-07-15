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



var dmyFnishCntLoad = fnishCntLoad;
fnishCntLoad = function() {
    if((quid == 0) || (quid == "noQvalue")) {
         document.location.href = "index.html?pid=login";
    }  else { 
        // tEUhdrStr = "Edit User - more options coming soon.";
        // document.getElementById("dvPartLinks").innerHTML = tEUhdrStr;

// document.getElementById("dvPartsList").innerHTML = "";
tifo = nCurrFFieldOb();
tifo.fid = "tmp_u_name";
tifo.fdv = stxt[48];
tifo.lid = "lbl_u_name"; 
tifo.ltxt = stxt[48]; 
// tifo.fvr = ck_username;
tifo.fve = stxt[1001];
euiFFObjArr.push(tifo);
/*
tfui = nCurrFFieldOb();
tfui.fid = "tmp_u_pass";
tfui.fdv = stxt[49];
tfui.lid = "lbl_u_pass"; 
tfui.ltxt = stxt[49]; 
// tfui.fvr = ck_password;
tfui.fve = stxt[1001];
euiFFObjArr.push(tfui);
*/

/**/
tfue = nCurrFFieldOb();
tfue.fid = "tmp_u_email";
tfue.fdv = stxt[50];
tfue.lid = "lbl_u_email"; 
tfue.ltxt = stxt[50]; 
tfue.fve = stxt[1001];
euiFFObjArr.push(tfue);


tfsb = nCurrFFieldOb();
tfsb.fid = "btnAddSoLink";
tfsb.fty = "button";
tfsb.fcl = function() { JSSHOP.ui.setSaveBtnClick(this, function(){doCoLinkAdd()}) };
euiFFObjArr.push(tfsb);


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
JSSHOP.shared.setDynFieldVals(arrAllForms.quser.v[0],"tmp_");
} else {
    tmp_u_name.value = u_name.value;
    tmp_u_pass.value = u_pass.value;
    tmp_u_email.value = u_email.value;
   

// JSSHOP.shared.setDynFieldVals(JSSHOP.shared.getDynFrmVals(document["quser"], ""),"tmp_");
}



 
 
tUcat = document.getElementById("tmp_u_cat");
 
JSSHOP.shared.addCurrSlctObj(svftObj["usercat"], tUcat, u_cat.value, "noQvalue", "noQvalue");
 
tmpDOs = null;
tmpDOs = {};
tmpDOs["ws"] = "where k_userid=? and k_coid=? and k_rtype=?";
tmpDOs["wa"] = [quid,quid,5]; 
oi = getNuDBFnvp("qlinks",5,null,tmpDOs);
doQComm(oi["rq"], "y", "setCurrCoLinks");

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
doMediaBtnSetup('uploadBtn', '', 'finishUPupload', '../images/user');
/**/
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

    // JSSHOP.ui.setCBBClickClr(btnAddSoLink,'txtXLrg txtBold slmtable bkgdClrDGreen txtClrWhite','txtXLrg txtBold slmtable bkgdClrWhite brdrNone txtClrDrkGrn', function(){document.getElementById("btnAddSoLink").disabled=false;});
   //  document.getElementById("btnAddSoLink").innerHTML="<i class=\"txtBold txtClrDrkGrn brdrClrWhite bkgdClrWhite material-icons\" alt=\"add\" title=\"add\">&#xe145;</i>";
        tmpDOs = null;
        tmpDOs = {};
        tmpDOs["ws"] = "where k_userid=? and  k_coid=? and k_rtype=?";
        tmpDOs["wa"] = [quid,quid,5]; 
        oi = getNuDBFnvp("qlinks",5,null,tmpDOs);
        doQComm(oi["rq"], "y", "setCurrCoLinks");
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
    if((JSSHOP.shared.getFrmFieldVal("qlinks", "k_category", 0) == "") || (JSSHOP.shared.getFrmFieldVal("qlinks", "k_category", 0) == "noQvalue")){
        alert("Please enter a category");
        stopSpin("btnAddSoLink");
        btnAddSoLink.innerHTML = "";
        JSSHOP.ui.setCBBClickClr(btnAddSoLink,'cls_button cls_button-medium  bkgdClrDYellow txtClrWhite',btnAddSoLink.className + ' txtSmall', function(){document.getElementById("btnAddSoLink").innerHTML=stxt[70];document.getElementById("btnAddSoLink").disabled=false;});
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
