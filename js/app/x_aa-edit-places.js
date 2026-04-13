currPgTitle = "Edit Places";
currPgIcon = "xe0af";
currIContent = "y"; // ajax request to include the tplates/... file or not
var euiFFObjArr = null;
var euiFFObjArr = [];
var currSPRArr = [];
var currSPRObj = [];
var currSPRIdx = 0;
var currPlcsArr = [];
var tSrtIdx = "_id";
var rnderFItems = null;
var currSortIdx = {};
currSortIdx["_id"] = "sortAsc";
function runPlacesList() {
try {
    tmpDOs = null;
    tmpDOs = {};
	if(currUrlArr.tpcid) {
    tmpDOs["ws"] = "where _id > ? and qlogp_rtype =? and qlogp_coid=? and qlogp_category=?";
    tmpDOs["wa"] = [0,5,cid,currUrlArr.tpcid];
	} else {
		    tmpDOs["ws"] = "where _id > ? and qlogp_rtype =? and qlogp_coid=?";
    tmpDOs["wa"] = [0,5,cid];
	}
    tmpDOs["l"] = "120";
    oi = getNuDBFnvp("qlogiplaces", 5, null, tmpDOs);

	    currRQtable = "qlogiplaces";
    currRQstr = oi["rq"];


    doQComm(oi["rq"], null, "doPlacesList");
} catch(e) {
alert("runPlacesList: " + e);
}
}


function fnishPlaceFav(tPFVa, tPFVb, tPFVc) {
try {
JSSHOP.ui.closeLbox();
runPlacesList();
} catch(e) {
alert("fnishPlaceFav: " + e);
}
}

function doPlaceFav() {
try {
	qlogp_name.value = inpClnPN.value;

tmpESDOs = null;
tmpESDOs = {};
tmpESDOs["knvp"] = JSSHOP.shared.getFrmVals(document["qlogiplaces"], "nada");

// tmpESDOs["knvp"] = JSSHOP.shared.getKNVParr(JSSHOP.shared.getDynFrmVals(document["qlogiplaces"], "tmp_"));
oi = getNuDBFnvp("qlogiplaces",6,null,tmpESDOs);
doQComm(removeDiacritics(oi["rq"]), null, "fnishPlaceFav");
} catch(e) {
alert("doPlaceFav: " + e);
}
}


var getDPRespStr = function(theDPResp) {
try {

theDPAesp = removeDiacritics(theDPResp);
// alert("getDPRespStr: " + theDPResp);
tDPRObj = JSON.parse(theDPAesp);


console.log("getDPRespStr: " + tDPRObj["address"].road  + " :: " + JSON.stringify(tDPRObj));




if(tDPRObj.address) {
tAOBjVobj = tDPRObj.address;
if(tAOBjVobj["amenity"]) {
qlogp_name.value = tAOBjVobj["amenity"];
}

if(tAOBjVobj["postcode"]) {
qlogp_zipcode.value = tAOBjVobj["postcode"];
}
if(tAOBjVobj["road"]) {
qlogp_street.value = tAOBjVobj["road"];
}
if(tAOBjVobj["city_district"]) {
qlogp_location.value = tAOBjVobj["city_district"];
}
if(tAOBjVobj["city"]) {
qlogp_location.value = tAOBjVobj["city"];
}
if(tAOBjVobj["county"]) {
qlogp_region.value = tAOBjVobj["county"];
}
if(tAOBjVobj["country"]) {
qlogp_country.value = tAOBjVobj["country"];
}
if(tAOBjVobj["shop"]) {
qlogp_name.value = tAOBjVobj["shop"] + " " + qlogp_location.value;
} else if(tAOBjVobj["namedetails"]){
	if(tAOBjVobj["namedetails"]["name"]) {
		qlogp_name.value = ttAOBjVobj["namedetails"]["name"] + " " + qlogp_location.value;

	} else {
	qlogp_name.value = tmp_qv.value;
	}
} else {
qlogp_name.value = tmp_qv.value;
}
}

if(tDPRObj.lat) {
qlogp_loc_lat.value = tDPRObj.lat;
}
if(tDPRObj.lon) {
qlogp_loc_lng.value = tDPRObj.lon;
}
if(tDPRObj.place_id) {
qlogp_placeid.value = tDPRObj.place_id;
}

qlogp_dadded.value = JSSHOP.getUnixTimeStamp();
qlogp_desc.value = tmp_qv.value;


taDastr = "<input  name=\"inpClnPN\" id=\"inpClnPN\" value=\"" + qlogp_name.value + "\" class=\"cls_input_text\">";
tstr += "<b>" + taDastr + "</b><br>-" + qlogp_zipcode.value;
tstr += " " + qlogp_location.value + " " + qlogp_country.value;
tstr += "<br><br>" + JSSHOP.ui.doDefBtn("ok", "javascript:doPlaceFav();");
tstr += "<br><br>" + theDPResp;
return tstr;
} catch(e) {
alert("getDPRespStr: " + e);
}

};

/*

  _id  integer primary key auto_increment,
  qlogp_rtype int(4),
  qlogp_coid int(12),
  qlogp_category varchar(128),
  qlogp_uid int(11),
  qlogp_internal varchar(128),
  qlogp_name varchar(128),
  qlogp_header varchar(128),
  qlogp_desc varchar(128),
  qlogp_tel varchar(28),
  qlogp_contact varchar(128),
  qlogp_web varchar(128),
  qlogp_email varchar(128),
  qlogp_logoimg varchar(128),
  qlogp_zipcode varchar(28),
  qlogp_door varchar(28),
  qlogp_street varchar(128),
  qlogp_location varchar(128),
  qlogp_region varchar(128),
  qlogp_country varchar(128),
  qlogp_placeid varchar(128),
  qlogp_coords text,
  qlogp_google_url text,
  qlogp_msg text,
  qlogp_privacy varchar(128),
  qlogp_vala varchar(128),
  qlogp_valb varchar(128),
  qlogp_dadded varchar(14)

*/

// write mysql select query that will return the qlogiplaces.qlogp_name using the qlogitrip.qlogt_co_from and the qlogitrip.qlogt_co_to as the qlogiplaces._id




var runPlaceDetails = function(thePDa,thePDResp,thePDc) {
// alert("runPlaceDetails: " + thePDResp)
try {
//stopSpin("dvSearchList");
btnEUsave.disabled = false;
JSSHOP.ui.popAndFillLbox(getDPRespStr(thePDResp));
} catch(e) {
alert("runPlaceDetails: " + e);
}
};

var doGglPDetails = function(tPlaceIDXstr) {

doSpinSet("dvSearchList", "small", null);
    btnEUsave.disabled = true;
	currSPRIdx = tPlaceIDXstr;
	tPlaceIDstr = currSPRArr[tPlaceIDXstr].place_id;

if((isJApp !== "no") && (isPhP == "no")) {
twuStr = "https://maps.googleapis.com/maps/api/place/details/json?fields=formatted_address,formatted_phone_number,website,icon,address_components,vicinity,url,name,geometry,opening_hours&key=AIzaSyBpMAowLSBf-e_GAykNSdODo0Lap9WmLtE&place_id=" + tPlaceIDstr;
tRespStr = app.getUrlRespString(twuStr);
document.getElementById("fldChallArray").value = tRespStr;
ttRespStr = document.getElementById("fldChallArray").value;
// runPlaceDetails("nada", ttRespStr, "nada" );
} else {}
JSSHOP.ajax.doNuAjaxPipe("inpModels", "_p/snpp.php?pi=" + tPlaceIDstr, runPlaceDetails);

	// TBsTRoBJ = { "html_attributions" : [], "result" : { "address_components" : [ { "long_name" : "Vila Nova da Rainha", "short_name" : "Vila Nova da Rainha", "types" : [ "locality", "political" ] }, { "long_name" : "Lisboa", "short_name" : "Lisboa", "types" : [ "administrative_area_level_1", "political" ] }, { "long_name" : "Portugal", "short_name" : "PT", "types" : [ "country", "political" ] }, { "long_name" : "2050", "short_name" : "2050", "types" : [ "postal_code_prefix", "postal_code" ] } ], "formatted_address" : "2050 Vila Nova da Rainha, Portugal", "formatted_phone_number" : "263 850 623", "geometry" : { "location" : { "lat" : 39.04824289999999, "lng" : -8.9150294 }, "viewport" : { "northeast" : { "lat" : 39.0495492302915, "lng" : -8.913811919708497 }, "southwest" : { "lat" : 39.0468512697085, "lng" : -8.916509880291501 } } }, "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png", "name" : "Sonae Mc - C2 warehouse", "url" : "https://maps.google.com/?cid=6360185675944755835", "vicinity" : "Vila Nova da Rainha", "website" : "http://www.sonae.pt/" }, "status" : "OK" };
	// runPlaceDetails(null, JSON.stringify(TBsTRoBJ), null);
};

var doPlaceDetails = function(tPlaceIDXstr) {

 runPlaceDetails(null, JSON.stringify(currSPRArr[tPlaceIDXstr]), null);
};

var doGglPSearch = function() {
try {
doSpinSet("dvSearchList", "small", null);
    btnEUsave.disabled = true;

if((isJApp !== "no") && (isPhP == "no")) {
trstr = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=place_id,formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&inputtype=textquery&key=AIzaSyBpMAowLSBf-e_GAykNSdODo0Lap9WmLtE&input=" + encodeURIComponent(tmp_qv.value);
tRespStr = app.getUrlRespString(trstr);
document.getElementById("fldChallArray").value = tRespStr;
ttRespStr = document.getElementById("fldChallArray").value;
runPlacesSearch("nada", ttRespStr, "nada" );
} else {
JSSHOP.ajax.doNuAjaxPipe("inpModels", "_p/snpp.php?qv=" + tmp_qv.value, runPlacesSearch);
}
} catch(e) {
alert("doGglPSearch: " + e);
}
};


var doPlacesSearch = function() {
try {
doSpinSet("dvSearchList", "small", null);
    btnEUsave.disabled = true;

if((isJApp !== "no") && (isPhP == "no")) {
trstr = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=place_id,formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&inputtype=textquery&key=AIzaSyBpMAowLSBf-e_GAykNSdODo0Lap9WmLtE&input=" + encodeURIComponent(tmp_qv.value);
tRespStr = app.getUrlRespString(trstr);
document.getElementById("fldChallArray").value = tRespStr;
ttRespStr = document.getElementById("fldChallArray").value;
// runPlacesSearch("nada", ttRespStr, "nada" );
} else {}
JSSHOP.ajax.doNuAjaxPipe("inpModels", "_p/osmgeo.php?qv=" + encodeURI(tmp_qv.value), runPlacesSearch);

} catch(e) {
alert("doPlacesSearch: " + e);
}
};


var runGglPSearch = function(thePSa,thePSResp,thePSc) {
stopSpin("dvSearchList");
btnEUsave.disabled = false;

hasr = "n";
fullstr = "";
// alert("runPlacesSearch: " + thePSResp);
farrToFill = JSON.parse(thePSResp);
farrToFC = farrToFill.candidates
currSPRArr = null;
currSPRArr = farrToFC;
var len = farrToFC.length;
var iint = 0;
var pcid = 0;
tstr = "";
while(iint < len) {
fcts = farrToFC[iint];
fullstr += "<a href=\"javascript:doPlaceDetails('" + iint + "');\"><span class=\"txtBold\">" + fcts.name +  "</span><br>" +  fcts.formatted_address + "</a><br><br>";
iint++;
}
fullstr += thePSResp;
dvSearchList.innerHTML = fullstr;

};



var runPlacesSearch = function(thePSa,thePSResp,thePSc) {
stopSpin("dvSearchList");
btnEUsave.disabled = false;

hasr = "n";
fullstr = "";
// alert("runPlacesSearch: " + thePSResp);
farrToFill = JSON.parse(thePSResp);
farrToFC = farrToFill;
currSPRArr = null;
currSPRArr = farrToFC;
var len = farrToFC.length;
var iint = 0;
var pcid = 0;
tstr = "";
while(iint < len) {
fcts = farrToFC[iint];
fullstr += "<a href=\"javascript:doPlaceDetails('" + iint + "');\"><span class=\"txtBold\">" + fcts.display_name +  "</span></a><br><br>";
iint++;
}
fullstr += thePSResp;
dvSearchList.innerHTML = fullstr;

};

var doPlacesList = function(a,theResp,c) {
    currPlcsArr = JSON.parse(theResp);
    rnderFItems("_id");
};
var mpfTest = function() {
    newMarker = null;
    newMarker =  L.marker([currMapLatStr, currMapLngStr]).bindTooltip("nice",{permanent: true, direction: 'bottom',offset:L.point(0, 10)}).addTo(map)
   .bindPopup("nice popup");
};
var rnderFItems = function(tSrtIdx) {

    tSrtIdx = "_id";
// document.getElementById("includedContent").innerHTML = theResp;

// alert(JSON.parse(theResp));




fullstr = "";

tHdrArr = null;
tHdrArr = "";
tHdrArr = [];
tHdFObj = {};
tHdFObj["fld"] = "_id";
tHdFObj["nm"] = "ID";
tHdrArr.push(tHdFObj);
 tHdFObj = {};
tHdFObj["fld"] = "qlogp_logo";
tHdFObj.ulnk = "noQvalue";
tHdFObj["nm"] = "<span style=\"margin-right: 10px; margin-top: 10px\" class=\"nav-material-icons txtBold\"><i class=\"nav-material-icons\">&#xe0cd</i></span>";
tHdrArr.push(tHdFObj);
tBHdFObj = {};
tBHdFObj["fld"] = "qlogp_name";
tBHdFObj["nm"] = "Name";
tHdrArr.push(tBHdFObj);
tBHdFObj = {};
tBHdFObj["fld"] = "qlogp_tel";
tBHdFObj.ulnk = "noQvalue";
tBHdFObj["nm"] = "<span style=\"margin-right: 10px; margin-top: 10px\" class=\"nav-material-icons txtBold\"><i class=\"nav-material-icons\">&#xe0cd</i></span>";
tHdrArr.push(tBHdFObj);
tBHdFObj = {};
tBHdFObj["fld"] = "u_msg";
tBHdFObj.ulnk = "noQvalue";
tBHdFObj["nm"] = "<span style=\"margin-right: 10px; margin-top: 10px\" class=\"nav-material-icons txtBold\"><i class=\"nav-material-icons\">&#xe0b7</i></span>";
tHdrArr.push(tBHdFObj);
tBAHdFObj = {};
tBAHdFObj["fld"] = "u_location";
tBAHdFObj.ulnk = "noQvalue";
tBAHdFObj["nm"] = "<span style=\"margin-right: 10px; margin-top: 10px\" class=\"nav-material-icons txtBold\"><i class=\"nav-material-icons\">&#xe0c8</i></span>";
tHdrArr.push(tBAHdFObj);
tBHdFObj["fld"] = "_id";
tBHdFObj["nm"] = "<span style=\"margin-right: 10px; margin-top: 10px\" class=\"nav-material-icons txtBold\"><i class=\"nav-material-icons\">&#xe3c9</i></span>";
tHdrArr.push(tBHdFObj);

currACTblCnt = tHdrArr.length;

currGSarr = null;
currGSarr = "";
currGSarr = [];
tmpACarr = null;
tmpACarr = "";
tmpACarr = [];

currGSarr = JSSHOP.shared.getSrtdArr(currPlcsArr, tSrtIdx, "sortAsc");
var len = currGSarr.length;




var iint = 0;
var pcid = 0;
tstr = "";
while(iint < len) {
ts = currGSarr[iint];
atstr = "";
atstr += "<tr>";

tSTstr = ts.qlogp_region + ts.qlogp_location + ts.qlogp_desc + ts.qlogp_msg;
// tstr += "<td>" + ts._id + "</td>";
atstr += "<td><a href=\"javascript:doMLinkM('aa-edit-place','pid=aa-edit-place&tpid=" + ts._id + "');\">" + ts._id +  "</a></td>";
tQlogoV = ts.qlogp_logoimg;
tIncStr = "default.gif";
if(tQlogoV.indexOf(".") != -1) {
tIncStr = "s_thumb_" + tQlogoV;
}
tIstr = "<img class=\"slmtable icnbtn\" id=\"dvPLogoImg" + iint + "\" src=\"images/user_icons/" + tIncStr + "\" width=\"28\" height=\"28\" />";

atstr += "<td><a href=\"javascript:doMLinkM('aa-edit-place','pid=aa-edit-place&tpid=" + ts._id + "');\">" + tIstr +  "</a></td>";
atstr += "<td><a href=\"javascript:doMLinkM('aa-edit-place','pid=aa-edit-place&tpid=" + ts._id + "');\">" + ts.qlogp_name +  "</a></td>";

atstr += "<td style=\"text-align: left\"><a href=\"callto:" + ts.qlogp_tel + "\"><i class=\"menu-material-icons\">&#xe0cd</i></span></a></td>";
atstr += "<td style=\"text-align: left\"><a href=\"javascript:JSSHOP.ui.showNuMsgBox('" + ts._id + "','priv','dval','doNada');\"><i class=\"menu-material-icons\">&#xe0b7;</i></span></a></td>";

atstr += "<td style=\"text-align: left\" class=\"txtClrHdr\"><a href=\"javascript:JSSHOP.ui.popLboxMap('" + ts.qlogp_loc_lat + "','" + ts.qlogp_loc_lng + "','mpfTest');\"><i class=\"menu-material-icons\" alt=\"edit\" title=\"Show Place\">&#xe0c8;</i></a>";
atstr += "<td style=\"text-align: left\" class=\"txtClrHdr\"><a href=\"javascript:doMLinkM('aa-edit-place','pid=aa-edit-place&tpid=" + ts._id + "');\"><i class=\"menu-material-icons\" alt=\"edit\" title=\"Edit Place\">&#xe3c9;</i></a>";
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
    document.getElementById("dvSearchList").innerHTML = tmpFFstr;
    JSSHOP.ui.doAutoComp(document.getElementById("inpACSearch"), tmpACarr);
};



var dmyFnishCntLoad = fnishCntLoad;
fnishCntLoad = function() {
	qlogp_coid.value = cid;
tfsb = nCurrFFieldOb();
tfsb.fid = "btnEUsave";
tfsb.fty = "button";
tfsb.fcl = function() {doPlacesSearch()};
euiFFObjArr.push(tfsb);
// JSSHOP.shared.initFrmComps(euiFFObjArr);
runPlacesList();
};


var aListShops = function() {
// doDefFormsFill();
};
