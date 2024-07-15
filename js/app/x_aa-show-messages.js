currPgTitle = stxt[710];
document.title = currPgTitle; 
currIContent = "y"; // ajax request to include the tplates/... file or not 

var getMsgThread = function(a,theResp,c) {
JSSHOP.ui.doMsgThread(a,theResp,"donada");
}
var getMsgHdr = function(a,theResp,c) {
// JSSHOP.ui.doMsgList(a,theResp,c);
// alert(theResp);
tmpTDQI = document.getElementById("includedContent");
tMstr = JSSHOP.ui.doMsgList(a, theResp, c);
bnewel = document.createElement('div');
bnewel.innerHTML = tMstr;
tmpTDQI.appendChild(bnewel);

 
 
if(currUrlArr.threadid){
tmpDOs = null;
tmpDOs = {};
tmpDOs["ws"] = "where ms_threadid=?";
tmpDOs["wa"] = [tthreadid];
tthreadid = currUrlArr.threadid;
opiaqZa = getNuDBFnvp("qmsg",5,null,tmpDOs);
oiaqZa = opiaqZa["rq"];
} else {
oiaqZa = "select * from qmsg GROUP BY ms_threadid order by ms_dadded desc limit 100";
}
doQComm(oiaqZa, null, "getMsgThread");

 
};




var dmyFnishCntLoad = fnishCntLoad;
fnishCntLoad = function() {

tthreadid = "";
if(currUrlArr.threadid){
tthreadid = currUrlArr.threadid;
tmpDOs = null;
tmpDOs = {};
tmpDOs["ws"] = "where _id=?";
tmpDOs["wa"] = [tthreadid];
// tmpDOs["gb"] = "msg_threadid";
oi = getNuDBFnvp("qmsgs",5,null,tmpDOs);
doQComm(oi["rq"], null, "getMsgHdr");

} else {

tmpDOs = null;
tmpDOs = {};
tmpDOs["ws"] = "where msg_to=? or msg_from=? or msg_userid=? or msg_cartid=?";
tmpDOs["wa"] = [quid,quid,quid,cartID];
tmpDOs["o"] = "msg_dmodified desc";
// tmpDOs["gb"] = "msg_threadid";
oi = getNuDBFnvp("qmsgs",5,null,tmpDOs);
doQComm(oi["rq"], null, "getMsgHdr");
// alert(oi["rq"]);
// document.getElementById("includedContent").className = "rtable";

}
if(currUrlArr.isr){
 
JSSHOP.ui.setNuCBBClickClr(document.getElementById("ahMsgsIcon"),'txtClrHdr rtable bkgdClrRed brdrClrRed','clsDummy', function() { void(0); }, 1800);

}

};


 