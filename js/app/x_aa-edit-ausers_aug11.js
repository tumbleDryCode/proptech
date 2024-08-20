currPgTitle = stxt[605];
currPgIcon = "xe3c9";

currIContent = "y"; // ajax request to include the tplates/... file or not 
var euiFFObjArr = null;
var euiFFObjArr = [];
var currSortIdx = {};
currSortIdx["_id"] = "sortAsc";
var currGSarr = [];
var currUzsarr = [];

var cbUserFinish = function(a,b,c) {
    if(b.indexOf("_id") != -1) {
    ttddA =  JSON.parse(b);
    tmpIva = ttddA[0]._id;
    doMLinkM("aa-edit-worker","pid=aa-edit-worker&twid=" + tmpIva); 
	// document.location.href = "index.html?pid=aa-edit-user&cid=" + cid + "&tuid=" + tmpIva;
}


};



var cbUserAdd = function(a,b,c) {
	tmpUtel = document.getElementById("tmp_u_tel").value;
    tmpFobj = null;
    tmpFobj = {};
    tmpFobj["knvp"] = JSSHOP.shared.getKNVParr(JSSHOP.shared.getDynFrmVals(document["quser"], "tmp_"));
    tmpFobj["ws"] = "where u_tel=?";
    tmpFobj["wa"] = [tmpUtel];
    oi = getNuDBFnvp("quser", 5, null, tmpFobj);
    doQComm(oi["rq"], null, "cbUserFinish");


};

var doNUserAdd = function() {
	JSSHOP.shared.setFrmFieldVal("quser", "u_coid", cid);	
	JSSHOP.shared.setFrmFieldVal("quser", "_id", "");
	JSSHOP.shared.setFrmFieldVal("quser", "u_pass", Math.random().toString(36).slice(-8));
	JSSHOP.shared.setFrmFieldVal("quser", "u_name", tmp_u_tel.value);
	JSSHOP.shared.setFrmFieldVal("quser", "u_fname", tmp_u_tel.value);
	JSSHOP.shared.setFrmFieldVal("quser", "u_lname", tmp_u_sector.options[tmp_u_sector.selectedIndex].text);	
	JSSHOP.shared.setFrmFieldVal("quser", "u_location", tmp_u_sector.options[tmp_u_sector.selectedIndex].text);	
				JSSHOP.shared.setFrmFieldVal("quser", "u_email", tmp_u_tel.value + "@logipal");

    tmpFobj = null;
    tmpFobj = {};
    tmpFobj["knvp"] = JSSHOP.shared.getKNVParr(JSSHOP.shared.getDynFrmVals(document["quser"], "tmp_"));
    tmpFobj["ws"] = "where _id=?";
    tmpFobj["wa"] = [quid];
    oi = getNuDBFnvp("quser", 6, null, tmpFobj);
    doQComm(oi["rq"], null, "cbUserAdd");
};


 

var doUsersList = function(a,rfb,c) {
currUzsarr = "";
currGSarr = ""; 
currUzsarr = JSON.parse(rfb);
rnderFItems("_id");
};



var rnderFItems = function(tSrtIdx) {
hasr = "n";
fullstr = "";

tHdrArr = null;
tHdrArr = "";
tHdrArr = [];
tHdFObj = {};	
tHdFObj["fld"] = "_id";
tHdFObj["nm"] = "ID";
tHdrArr.push(tHdFObj);
tAHdFObj = {};	
tAHdFObj["fld"] = "u_sector";
tAHdFObj["nm"] = "Sctr";
tHdrArr.push(tAHdFObj);
tAHdFObj = {};	
tAHdFObj["fld"] = "u_jtype";
tAHdFObj["nm"] = "Dept";
tHdrArr.push(tAHdFObj);
tBHdFObj = {};	
tBHdFObj["fld"] = "u_fname";
tBHdFObj["nm"] = stxt[97]; // Name
tHdrArr.push(tBHdFObj);
tBHdFObj = {};	
tBHdFObj["fld"] = "u_tel";
tBHdFObj.ulnk = "noQvalue";
tBHdFObj["nm"] = "<span style=\"margin-right: 10px; margin-top: 10px\" class=\"nav-material-icons txtBold\"><i class=\"nav-material-icons\">&#xe0cd</i></span>";
tHdrArr.push(tBHdFObj);
tBHdFObj = {};	
tBHdFObj["fld"] = "u_msg";
tBHdFObj.ulnk = "noQvalue";
tBHdFObj["nm"] = "<span style=\"margin-right: 10px; margin-top: 10px\" class=\"nav-material-icons txtBold\"><i class=\"nav-material-icons\">&#xe0b7</i></span>";
tHdrArr.push(tBHdFObj);
tBHdFObj = {};	
tBHdFObj["fld"] = "_id";
tBHdFObj["nm"] = "<span style=\"margin-right: 10px; margin-top: 10px\" class=\"nav-material-icons txtBold\"><i class=\"nav-material-icons\">&#xe3c9</i></span>";
tHdrArr.push(tBHdFObj);
currACTblCnt = tHdrArr.length;
tmpACarr = null;
tmpACarr = "";
tmpACarr = [];

currGSarr = null;
currGSarr = "";
currGSarr = [];
// currGSarr = currUzsarr;
currGSarr = JSSHOP.shared.getSrtdArr(currUzsarr, tSrtIdx, "sortAsc");
var len = currGSarr.length;

 
var iint = 0;
var pcid = 0;
tstr = "";
while(iint < len) {
ts = currGSarr[iint];


atstr = "";
atstr += "<tr>";

tSTstr = ts.u_region + ts.u_location + ts.u_fname + ts.u_lname + ts.u_jtype;
// tstr += "<td>" + ts._id + "</td>";


tsUT = ts.u_cat;
tsrtUT = ts.u_cat; 
 

// create a json object for the user that only has the fields we want to display
tmpUObj = null;
tmpUObj = {};
tmpUObj["u_fname"] = ts.u_fname;
tmpUObj["u_lname"] = ts.u_lname;
tmpUObj["u_tel"] = ts.u_tel;
tmpUObj["u_sector"] = ts.u_sector;
tmpUObj["u_jtype"] = ts.u_jtype;
tmpUObj["u_email"] = ts.u_email;
tmpUObj["u_msg"] = ts.u_msg;
tmpUObj["u_region"] = ts.u_region;
tmpUObj["action"] = "tel";
// base64 encode the json object
tmpUObjB64 = btoa(JSON.stringify(tmpUObj));

 
atstr += "<td style=\"text-align: left\"><a href=\"javascript:doMLinkM('aa-edit-worker','pid=aa-edit-worker&twid=" + ts._id + "');\">" + ts._id + "</a></td>";
atstr += "<td style=\"text-align: left\"><a href=\"javascript:doMLinkM('aa-edit-users','pid=aa-edit-users&tujsector=" + ts.u_sector + "');\">" + ts.u_sector + "</a></td>";

atstr += "<td style=\"text-align: left\"><a href=\"javascript:doMLinkM('aa-edit-users','pid=aa-edit-users&tujtype=" + ts.u_jtype + "');\">" + tsrtUT + "</a></td>";


atstr += "<td style=\"text-align: left\">" + ts.u_fname + " " + ts.u_lname +  "</td>";

 
atstr += "<td style=\"text-align: left\"><a href=\"javascript:JSSHOP.ui.getAppFAction('gettel','" + tmpUObjB64 + "');\"><i class=\"menu-material-icons\">&#xe0cd</i></span></a></td>";
atstr += "<td style=\"text-align: left\"><a href=\"javascript:JSSHOP.ui.showNuMsgBox('" + ts._id + "','priv','dval','doNada');\"><i class=\"menu-material-icons\">&#xe0b7;</i></span></a></td>";

atstr += "<td style=\"text-align: left\" class=\"txtClrHdr\"><a href=\"javascript:doMLinkM('aa-edit-worker','pid=aa-edit-worker&twid=" + ts._id + "');\"><i class=\"menu-material-icons\" alt=\"edit\">&#xe3c9;</i></a>";
atstr += "<input type=\"hidden\" value=\"" + tSTstr + "\"></input>";
atstr += "</td>";
atstr += "</tr>";
tstr += atstr;
tmpACarr.push(atstr);
iint++;
}
newel = document.createElement('div');

if(currGSarr[0]) {
strTHhtml = JSSHOP.shared.getTblHdrs(tHdrArr);
} else {
strTHhtml = "<th>" + stxt[607] + "</th>";
}
tmpFstr = getTblSortStr(strTHhtml, tstr);
tmpFFstr = "<div style=\"margin: 0 auto;max-width:600px;padding: 10px;margin-left: 15px;margin-right: 15px;\">" + tmpFstr + "</div>";
document.getElementById("dvUsersList").innerHTML = tmpFFstr;
JSSHOP.ui.doAutoComp(document.getElementById("inpACSearch"), tmpACarr);




// standardistaTableSortingInit();
};
 


var dmyFnishCntLoad = fnishCntLoad;
fnishCntLoad = function() {
    // alert("dmyFnishCntLoad.edit users currRQstr: " + currRQstr);
	// JSSHOP.shared.setFrmFieldVal("quser", "u_coid", cid);	

tfuew = nCurrFFieldOb();
tfuew.fid = "tmp_u_tel";
tfuew.fdv = "9...";
tfuew.lid = "lbl_u_tel"; 
tfuew.ltxt = "Tel:"; 
euiFFObjArr.push(tfuew);

tefuew = nCurrFFieldOb();
tefuew.fid = "tmp_u_jtype";
tefuew.lid = "lbl_u_jtype"; 
tefuew.ltxt = stxt[95]; 
euiFFObjArr.push(tefuew);

tefuew = nCurrFFieldOb();
tefuew.fid = "tmp_u_sector";
tefuew.lid = "lbl_u_sector"; 
tefuew.ltxt = stxt[94]; 
euiFFObjArr.push(tefuew);


tfsb = nCurrFFieldOb();
tfsb.fid = "btnEUsave";
tfsb.fty = "button";
tfsb.fcl = function() { JSSHOP.ui.setSaveBtnClick(this, function(){doNUserAdd()}) };
euiFFObjArr.push(tfsb);
JSSHOP.shared.initFrmComps(euiFFObjArr);
    /**/
tmpDOs = {};
tmpDOs["ws"] = "where _id > ?";
tmpDOs["wa"] = [0];

oi = getNuDBFnvp("quser",5,null,tmpDOs);
currRQtable = "quser";
currRQstr = oi["rq"];
// alert("edit users currRQstr: " + currRQstr);
doQComm(oi["rq"], null, "doUsersList");

 

// document.getElementById("includedContent").className = "rtable";
};

 