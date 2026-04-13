var currPgTitle = stxt[31] + " " + stxt[56];
document.title = currPgTitle;
var cueiiilobarr = null;
var cueiiilobarr = [];
var tUAdCstr = "";
var ck_name = /^[A-Za-z0-9 ]{3,20}$/;
var ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
var ck_username = /^[A-Za-z0-9_]{3,20}$/;
var ck_password =  /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;
var MIN_LOGIN_PASSWORD_LENGTH = 4;




var tfnshNewShop = function(a,b,c) {
document.location.href = "./index.html?pid=aa-show-shop-welcome&cid=" + cid;
};

var doLoginResp = function(a,b,c) {
 try {
console.log("doLoginResp: " + b)

if(b.indexOf("u_email") != -1) {
var arrToFill = JSON.parse(b);
var ts = arrToFill[0];
if(ts._id) {
// JSSHOP.cookies.setCookie("cuid",ts._id,"90","","","");
JSSHOP.cookies.setCookie("quid",ts._id,"90","","","");
document.location.href = "./index.html?isr=y";
/*
if(currUrlArr.ltype){
if(currUrlArr.ltype == "aa-show-new-shop"){
JSSHOP.shared.setFieldVal("c_uid", ts._id);
tmpDOs = null;
tmpDOs = {};
tmpDOs["ws"] = "where _id=?";
tmpDOs["wa"] = [cid];
tmpDOs["knvp"] = JSSHOP.shared.getFrmVals(document["qco"], "nada");
oi = getNuDBFnvp("qco",7,null,tmpDOs);
doQComm(oi["rq"], null, "tfnshNewShop");
} else { // send to default login complete
document.location.href = "./index.html?isr=y";
}
} else { // send to default login complete
document.location.href = "./index.html?isr=y";
}

*/
} else {
alert("Something wrong: " + b);
}
} else {
    JSSHOP.ui.doAlertBox("error", stxt[1008], stxt[1009], "noQvalue");
}
} catch(e) {
alert(e);
}
};


var getCoID = function(a,b,c) {
var tmpUDaArr = JSON.parse(b);
var tspa = tmpUDaArr[0];
doLoginResp("noQvalue", tUAdCstr, tspa._id);
};


var fnishCoAD = function(a,b,c) {

    var tmpDOs = null;
    tmpDOs = {};
    tmpDOs["c"] = ["_id", "c_title"];
    tmpDOs["l"] = 1;
    tmpDOs["ws"] = "where c_uid=?";
    tmpDOs["wa"] = [document.getElementById("c_uid").value];
    var oi = getNuDBFnvp("qco", 5, null, tmpDOs);
    doQComm(oi["rq"], null, "getCoID");

};

var doCoAd = function(a,b,c) {
console.log("doCoAd: " + b)
try {
tUAdCstr = b;
var tmpUDArr = JSON.parse(b);
var tsp = tmpUDArr[0];
if(tsp._id) {

    JSSHOP.shared.setFrmFieldVal("qco", "c_desc", "");
    JSSHOP.shared.setFrmFieldVal("qco", "c_email", "");
    JSSHOP.shared.setFrmFieldVal("qco", "c_tel", "");
    JSSHOP.shared.setFrmFieldVal("qco", "c_web", "");

    JSSHOP.shared.setFrmFieldVal("qco", "c_dadded", JSSHOP.getUnixTimeStamp());

JSSHOP.shared.setFrmFieldVal("qco", "c_email", tsp.u_email);
JSSHOP.shared.setFrmFieldVal("qco", "c_title", tsp.u_name);
JSSHOP.shared.setFrmFieldVal("qco", "c_header", tsp.u_name);

JSSHOP.shared.setFrmFieldVal("qco", "c_uid", tsp._id);

// JSSHOP.shared.setFrmFieldVal("qco", "c_title", tc_title);
var tmpFobj = null;
tmpFobj = {};
tmpFobj["knvp"] = JSSHOP.shared.getFrmVals(document["qco"], "nada");
var oi = getNuDBFnvp("qco", 6, null, tmpFobj);
doQComm(oi["rq"], null, "fnishCoAD");
} else {
alert("doCoAd: no id");
}



} catch(e) {
alert("doCoAd: " + e);
}
};

var mkUserLookup = function(uEmail, uPass) {
var tmpDOs = {};
tmpDOs["ws"] = "where u_email=? and u_pass=? and u_rtype=?";
tmpDOs["wa"] = [uEmail, uPass, 5];
return tmpDOs;
};

var setSignUpFields = function(uEmail, uPass) {
var ttime = JSSHOP.getUnixTimeStamp();
var tUMSpl = uEmail.split("@");
JSSHOP.shared.setFieldVal("u_email", uEmail);
JSSHOP.shared.setFieldVal("u_pass", uPass);
JSSHOP.shared.setFieldVal("u_name", tUMSpl[0]);
JSSHOP.shared.setFieldVal("u_header", tUMSpl[0]);
JSSHOP.shared.setFieldVal("u_dadded", ttime);
};

var doSULIn = function(a,b,c) {
// alert("doSULIn: " + b);
var tmpUstr = document.getElementById("u_email").value;
var tmpPstr = document.getElementById("u_pass").value;
var tmpDOs = mkUserLookup(tmpUstr, tmpPstr);
var oi = getNuDBFnvp("quser",5,null,tmpDOs);
// alert("doSULIn: " + oi["rq"]);
doQComm(oi["rq"], null, "doLoginResp");
// doQComm(oi["rq"], null, "doCoAd");
}


var doSignUpResp = function(a,b,c) {
if(b.indexOf("u_email") != -1) {
    JSSHOP.ui.doAlertBox("error", stxt[1008], stxt[1010], "noQvalue");

// alert("Sorry thhis email already exists. Click login link to login or contact us if you lost you password.");
} else {
var tmpFobj = null;
tmpFobj = {};
tmpFobj["knvp"] = JSSHOP.shared.getFrmVals(document["quser"], "nada");
var oi = getNuDBFnvp("quser",6,null,tmpFobj);
doQComm(oi["rq"], null, "doSULIn");
}
};


var checkLin = function(theSUtype) {
var tmpUstr = document.getElementById("tmpUemail").value;
var tmpPstr = document.getElementById("tmpUpass").value;


if((tmpUstr.length < 1) || (tmpPstr.length < 1) || (tmpUstr.indexOf("@") == -1) || (tmpPstr.length < MIN_LOGIN_PASSWORD_LENGTH) || (tmpPstr.indexOf(" ") != -1) || (tmpPstr.indexOf("@") != -1) || (tmpPstr.indexOf(".") != -1)) {
// alert("You must enter a valid email address and password");
JSSHOP.ui.doAlertBox("error", stxt[1008], stxt[1013] + "<br>" + stxt[1014] + "<br>" + stxt[1015], "noQvalue");

} else {
setSignUpFields(tmpUstr, tmpPstr);
var tmpDOs = mkUserLookup(tmpUstr, tmpPstr);
var oi = getNuDBFnvp("quser",5,null,tmpDOs);
if(theSUtype == "register") {
console.log("is register");
doQComm(oi["rq"], null, "doSignUpResp");
} else {
doQComm(oi["rq"], null, "doLoginResp");
}
}
};


function doLRpnl(tLtype) {
if(tLtype == "lgn") {
    JSSHOP.ui.showHideElement("dvTLoginBtn", "show");
    JSSHOP.ui.showHideElement("dvTRegBtn", "hide");
} else {
    JSSHOP.ui.showHideElement("dvTLoginBtn", "hide");
    JSSHOP.ui.showHideElement("dvTRegBtn", "show");
}
JSSHOP.ui.setNuCBBClickClr(document.getElementById('tblLRmain'),'txtBig txtBold','dmmy', function() {void(0)} , 580);

}



var dmyFnishCntLoad = fnishCntLoad;
fnishCntLoad = function() {
  // alert("fnishCntLoad.login");

 var tEUhdrStr = stxt[37] + " " + stxt[56];
 document.getElementById("dvPartLinks").innerHTML = tEUhdrStr;

var tflue = nCurrFFieldOb();
tflue.fid = "tmpUemail";
tflue.fdv = stxt[50];
tflue.lid = "lbl_u_email";
tflue.ltxt = stxt[50];
tflue.fvr = ck_email;
tflue.fve = stxt[1000];
cueiiilobarr.push(tflue);

var tflui = nCurrFFieldOb();
tflui.fid = "tmpUpass";
tflui.fdv = stxt[49];
tflui.lid = "lbl_u_pass";
tflui.ltxt = stxt[49];
tflui.fvr = ck_password;
tflui.fve = stxt[1001];
cueiiilobarr.push(tflui);

if(currUrlArr.ltype) {
alert("currUrlArr: " + currUrlArr.ltype);
}
JSSHOP.shared.initFrmComps(cueiiilobarr);

if(currUrlArr.tq && currUrlArr.tcid) {
    // set quid and xid cookies
    JSSHOP.cookies.setCookie("quid", currUrlArr.tq,"90","","","");
    JSSHOP.cookies.setCookie("cuid", currUrlArr.tcid, "90","","","");
    // redirect to shopDir
    document.location.href = shopDir;
}
// return dmyFnishCntLoad;
};

