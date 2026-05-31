currPgTitle = stxt[710];
document.title = currPgTitle;
currIContent = "y"; // ajax request to include the tplates/... file or not

// Tiny fallback toggle:
// false = use latest-per-thread queries (recommended)
// true  = use legacy query behavior
var USE_LEGACY_MSG_FEED_QUERIES = false;

var getMsgRenderApi = function() {
if(JSSHOP.msgs && typeof JSSHOP.msgs.doNuMsgList === "function" && typeof JSSHOP.msgs.doNuMsgThread === "function") {
return JSSHOP.msgs;
}
return JSSHOP.ui;
};

var getMsgThread = function(a,theResp,c) {
var tMsgApi = getMsgRenderApi();
tMsgApi.doNuMsgThread(a,theResp,"donada");
}
var getMsgHdr = function(a,theResp,c) {
// JSSHOP.ui.doMsgList(a,theResp,c);
// alert(theResp);
tmpTDQI = document.getElementById("includedContent");
var tMsgApi = getMsgRenderApi();
tMstr = tMsgApi.doNuMsgList(a, theResp, c);
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
// the following query does not work because of the group by and gives this error: select * from qmsg GROUP BY ms_threadid where ms_to=66 or ms_from=66 order by ms_dadded desc limit 100mysqli_sql_exception: You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near \'where ms_to=66 or ms_from=66 order by ms_dadded desc limit 100\' at line 1 in
// fix it now

 // oiaqZa = "select * from qmsg where ms_threadid in (select distinct ms_threadid from qmsg where ms_to='" + quid + "' or ms_from='" + quid + "') order by ms_dadded desc limit 100";
 // oiaqZa = "select * from qmsg GROUP BY ms_threadid where ms_to=" + quid + " or ms_from=" + quid + " order by ms_dadded desc limit 100";
//oiaqZa = "select * from qmsg  where ms_to=" + quid + " or ms_from=" + quid + " order by ms_dadded desc limit 100";

// create better query to get latest message per thread and write it aa a string
 // only get threads that include me and one message per ms_threadid

  /*

CREATE TABLE `qmsg` (
  `_id` int(11) NOT NULL,
  `ms_rtype` int(11) DEFAULT NULL,
  `ms_threadid` varchar(12) DEFAULT NULL,
  `ms_from` varchar(26) DEFAULT NULL,
  `ms_to` varchar(56) DEFAULT NULL,
  `ms_viewed` varchar(5) DEFAULT NULL,
  `ms_matter` text DEFAULT NULL,
  `ms_media` text DEFAULT NULL,
  `ms_wildkey` varchar(26) DEFAULT NULL,
  `ms_rating` int(11) DEFAULT NULL,
  `ms_vala` varchar(56) DEFAULT NULL,
  `ms_valb` varchar(56) DEFAULT NULL,
  `ms_dadded` varchar(12) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
// create a query to get the latest message per thread where I am either the sender or the receiver
--
-- Dumping data for table `qmsg`
--

INSERT INTO `qmsg` (`_id`, `ms_rtype`, `ms_threadid`, `ms_from`, `ms_to`, `ms_viewed`, `ms_matter`, `ms_media`, `ms_wildkey`, `ms_rating`, `ms_vala`, `ms_valb`, `ms_dadded`) VALUES
(21, 0, '48', 'pnunw1ntgxl', '', '-', 'answer from 501b', '', '', 5, '', '', '1710065651'),
(22, 0, '48', 'wwpb5jyf82', '', '-', '601 says it sucks', '', '', 5, '', '', '1710065765'),
(23, 0, '48', 'wwpb5jyf82', '', '-', '601 says it again', '', '', 5, '', '', '1710065829'),
*/
// select * from qmsg GROUP BY ms_threadid where ms_to=" + quid + " or ms_from=" + quid + " order by ms_dadded desc limit 100
tmpDOs = null;
tmpDOs = {};
tmpDOs["ws"] = "where ms_to=? or ms_from=?";
tmpDOs["wa"] = [quid,quid];
tmpDOs["o"] = "ms_dadded desc";
tmpDOs["gb"] = "ms_threadid";
tmpDOs["l"] = "100";
// opiaqZa = getNuDBFnvp("qmsg",5,null,tmpDOs);
// oiaqZa = opiaqZa["rq"];
//  oiaqZa = "select * from qmsg where ms_threadid in (select distinct ms_threadid from qmsg where ms_to='" + quid + "' or ms_from='" + quid + "') order by ms_dadded asc limit 100";
// limit only the latest message per ms_threadid
// oiaqZa = "select * from qmsg where _id in (select max(_id) from qmsg where ms_to='" + quid + "' or ms_from='" + quid + "' group by ms_threadid) order by ms_dadded desc";
if(USE_LEGACY_MSG_FEED_QUERIES === true) {
// Legacy/fallback query path:
oiaqZa = "select * from qmsg where _id in (select max(_id) from qmsg where ms_to='" + quid + "' or ms_from='" + quid + "' group by ms_threadid) order by ms_dadded desc";
} else {
oiaqZa = "select q1.* from qmsg q1 " +
"inner join (select ms_threadid, max(cast(ms_dadded as unsigned)) as max_dadded " +
"from qmsg where ms_to='" + quid + "' or ms_from='" + quid + "' group by ms_threadid) q2 " +
"on q1.ms_threadid=q2.ms_threadid and cast(q1.ms_dadded as unsigned)=q2.max_dadded " +
"where (q1.ms_to='" + quid + "' or q1.ms_from='" + quid + "') " +
"and q1._id=(select max(q3._id) from qmsg q3 where q3.ms_threadid=q1.ms_threadid and cast(q3.ms_dadded as unsigned)=q2.max_dadded and (q3.ms_to='" + quid + "' or q3.ms_from='" + quid + "')) " +
"order by cast(q1.ms_dadded as unsigned) desc, q1._id desc";
}
 }
console.log("show-messages:oiaqZa: " + oiaqZa);
doQComm(oiaqZa, null, "getMsgThread");


};




var dmyFnishCntLoad = fnishCntLoad;
fnishCntLoad = function() {

    JSSHOP.ads.doGenericPlug("messages", "message-list", "dvPartLinks");
if(JSSHOP.cookies.getCookie("quid") !== null) {
tthreadid = "";
if(currUrlArr.threadid){
tthreadid = currUrlArr.threadid;
tmpDOs = null;
tmpDOs = {};
tmpDOs["ws"] = "where _id=?";
tmpDOs["wa"] = [tthreadid];
// tmpDOs["gb"] = "msg_threadid";
oi = getNuDBFnvp("qmsgs",5,null,tmpDOs);
console.log("show-messages:oi: " + oi);
doQComm(oi["rq"], null, "getMsgHdr");

} else {

tmpDOs = null;
tmpDOs = {};
tmpDOs["ws"] = "where msg_to_userid=? or msg_userid=?";
tmpDOs["wa"] = [quid,quid];
tmpDOs["o"] = "msg_dmodified desc";
// tmpDOs["gb"] = "msg_threadid";

// Latest message header per thread (feed list): keep one qmsgs row per msg_threadid.
if(USE_LEGACY_MSG_FEED_QUERIES === true) {
// Legacy/fallback query path:
oi = getNuDBFnvp("qmsgs",5,null,tmpDOs);
console.log("show-messages:oi(legacy): " + oi);
doQComm(oi["rq"], null, "getMsgHdr");
} else {
oiaqZa = "select qh.* from qmsgs qh " +
"inner join (select msg_threadid, max(cast(msg_dmodified as unsigned)) as max_dmod " +
"from qmsgs where msg_to_userid='" + quid + "' or msg_userid='" + quid + "' group by msg_threadid) qm " +
"on qh.msg_threadid=qm.msg_threadid and cast(qh.msg_dmodified as unsigned)=qm.max_dmod " +
"where (qh.msg_to_userid='" + quid + "' or qh.msg_userid='" + quid + "') " +
"and qh._id=(select max(qh2._id) from qmsgs qh2 where qh2.msg_threadid=qh.msg_threadid and cast(qh2.msg_dmodified as unsigned)=qm.max_dmod and (qh2.msg_to_userid='" + quid + "' or qh2.msg_userid='" + quid + "')) " +
"order by cast(qh.msg_dmodified as unsigned) desc, qh._id desc";
console.log("show-messages:oi(latest-thread): " + oiaqZa);
doQComm(oiaqZa, null, "getMsgHdr");
}
// alert(oi["rq"]);
// document.getElementById("includedContent").className = "rtable";

}
if(currUrlArr.isr){

JSSHOP.ui.setNuCBBClickClr(document.getElementById("ahMsgsIcon"),'txtClrHdr rtable bkgdClrRed brdrClrRed','clsDummy', function() { void(0); }, 1800);

}
} else {
// document.getElementById("includedContent").innerHTML = "<div class=\"txtBig txtBold txtCenter\" style=\"margin-top:20px;\">Please <a href=\"javascript:eindex('login','pid=login');\" class=\"txtClrBlue\">login</a> to view your messages.</div>";
getTestUsers("includedContent");
}

};


 
