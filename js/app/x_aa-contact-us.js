currPgTitle = stxt[86];
document.title = currPgTitle;
currIContent = "y"; // ajax request to include the tplates/... file or not

var getMsgThread = function(a,theResp,c) {
JSSHOP.ui.doMsgThread(a,theResp,c);
}
var getMsgHdr = function(a,theResp,c) {
JSSHOP.ui.doMsgList(a,theResp,c);

tmpDOs = null;
tmpDOs = {};
tmpDOs["ws"] = "where ms_threadid=?";
tmpDOs["wa"] = [tthreadid];
// tmpDOs["gb"] = "msg_threadid";

if(currUrlArr.threadid){
tthreadid = currUrlArr.threadid;
opiaqZa = getNuDBFnvp("qmsg",5,null,tmpDOs);
oiaqZa = opiaqZa["rq"];
} else {
oiaqZa = "select * from qmsg GROUP BY ms_threadid order by ms_dadded desc limit 100";
}
doQComm(oiaqZa, null, "getMsgThread");
};

function fnishcu(tamsg, tbmsg, tcmsg){
tqqQI = document.getElementById("dvContactUsFrm");
JSSHOP.ui.setNuCBBClickClr(tqqQI, "bkgdClrWhite brdrNone", "bkgdClrWhite brdrNone", function() { dvContactUsFrm.innerHTML=stxt[709];scrollToElement('dvHdr');window.scrollTo(0, 0);}, 580);

// document.location.href="index.html?pid=aa-show-messages&isr=y";
}

function getSTstr(tsttn) {
return stxt[tsttn];
}
function runTNDW() {
tatmpTDQI = document.getElementById("includedContent");
xae = tatmpTDQI.getElementsByTagName("span");
var iint = 0;
while(iint < xae.length) {
theElem = xae[iint];
if(theElem.getAttribute("data-flbl") != null) {
try {
tDison = theElem.getAttribute("data-flbl");
theElem.innerHTML = eval(tDison);
} catch(e) {
console.log("data-ison: " + tDison + " : " + e);
}
}
iint++;
}
}



var dmyFnishCntLoad = fnishCntLoad;
fnishCntLoad = function() {
try {
    tfsb = null;
    tfsb = "";
tfsb = nCurrFFieldOb();
tfsb.fid = "btnMsgsave";
tfsb.fty = "button";
tfsb.ltxt = "stxt[708]";
retRndrObj = {};
tfsb.fcl = function() { JSSHOP.ui.setSaveBtnClick(this, function(){JSSHOP.ui.doMsgSave('contactus', 'nada', "fnishcu")}) };

tAllowedStr = "msg_subjectmsg_matter";
if(quid == "0") {
tAllowedStr += "msg_fromsg_email";
}
msgFObj =  JSSHOP.shared.rndrDynFrmVals(document["qmsgs"], "tmp_", tAllowedStr, tfsb);
retRndrObj["rndrStr"] = tmpVstr;
retRndrObj["rndrFobj"] = rndrFFObjArr;
 setTimeout("JSSHOP.shared.initFrmComps(retRndrObj.rndrFobj)", 500);
annewel = document.createElement('div');
ttstr = "<div style=\"margin:15px;padding:9px;margin: 0 auto;max-width: 88%\"  class=\"slmtable brdrClrDlg bkgdClrWhite\" id=\"dvContactUs\">";
ttstr += stxt[707] + "<br>" + msgFObj.rndrStr + "<div>";
// annewel.innerHTML = ttstr;
// tatmpTDQI = document.getElementById("includedContent");
// ataqkk = tatmpTDQI.appendChild(annewel);
// alert("dvContactUs: " + ttstr);
document.getElementById("dvContactUsFrm").innerHTML = ttstr;

if(currUrlArr.pid){
    // tmp_msg_subject.value = "Re: " + currUrlArr.cid;
    setTimeout("document.getElementById('tmp_msg_subject').value = 'Re: " + currUrlArr.pid + "'", 800);
}

JSSHOP.ads.doGenericPlug('mpmenu',3,'dvPartLinks');
return dmyFnishCntLoad;
// setTimeout("runTNDW()", 1000);
} catch(e) {
alert("no contactus: " + e);
}

};


var aListShops = function() {
// doDefFormsFill();
};
