var tmpAUsrsLArr = [];
var tmpAGUsrsLArr = [];


var doAUsersList = function(a,rfb,c) {
    if(rfb.indexOf("_id") != -1) {
  tmpAUsrsLArr = "";
  tmpAUsrsLArr = [];
  tmpAUsrsLArr = JSON.parse(rfb);
 
  rnderPrpTbl("_id");
    } else {
        alert("doAUsersList: " + rfb);
        // document.getElementById("divQitems").innerHTML = stxt[508];
    }
  };

 

 

 var getAUItmsLst = function(tPrpIarr) {

    var aulen = tPrpIarr.length;
    var iupint = 0;
    var pucid = 0;
    autstr = "";
    tpshdSTr = "";
    fullurpstr = "";
    while(iupint < aulen) {
        ts = currGSarr[iint];
        
        
        atstr = "";
        atstr += "<tr>";
        
        tSTstr = ts.u_region + ts.u_location + ts.u_name + ts.u_fullname + ts.u_cat;
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
        atstr += "<td style=\"text-align: left\"><a href=\"javascript:doMLinkM('aa-edit-users','pid=aa-edit-users&tujsector=" + ts.u_cat + "');\">" + ts.u_cat + "</a></td>";
        
         
        
        atstr += "<td style=\"text-align: left\">" + ts.u_fname + " " + ts.u_fullname +  "</td>";
        
 
        atstr += "<td style=\"text-align: left\" class=\"txtClrHdr\"><a href=\"javascript:doMLinkM('aa-edit-worker','pid=aa-edit-worker&twid=" + ts._id + "');\"><i class=\"menu-material-icons\" alt=\"edit\">&#xe3c9;</i></a>";
        atstr += "<input type=\"hidden\" value=\"" + tSTstr + "\"></input>";
        atstr += "</td>";
        atstr += "</tr>";
        tstr += atstr;
        tmpACarr.push(atstr);
    iupint++;
    }

    tpshdSTr = "";
    tpshdSTr = "<table>" + fullurpstr + "</table>";
    // alert('rnderUEdtPrpItms - tSrtIdx: ' + tSrtIdx);
    return fullurpstr;
    };

    var rnderFItems = function(trSrtIdx) {
      
        rnderPrpTbl(trSrtIdx);
    }

 var rnderPrpTbl = function(tSrtIdx) {
 
    hasr = "n";
    fullupstr = "";
    
tHdrArr = null;
tHdrArr = "";
tHdrArr = [];
tHdFObj = {};	
tHdFObj["fld"] = "_id";
tHdFObj["nm"] = "ID";
tHdrArr.push(tHdFObj);
 
tAHdFObj = {};	
tAHdFObj["fld"] = "u_cat";
tAHdFObj["nm"] = "Dept";
tHdrArr.push(tAHdFObj);

tBHdFObj = {};	
tBHdFObj["fld"] = "u_fullname";
tBHdFObj["nm"] = stxt[97]; // Name
tHdrArr.push(tBHdFObj);
tBHdFObj = {};	
 
tBHdFObj = {};	
tBHdFObj["fld"] = "_id";
tBHdFObj["nm"] = "<span style=\"margin-right: 10px; margin-top: 10px\" class=\"nav-material-icons txtBold\"><i class=\"nav-material-icons\">&#xe3c9</i></span>";
tHdrArr.push(tBHdFObj);
 
currACTblCnt = tHdrArr.length;
 
    tmpACarr = null;
    tmpACarr = "";
    tmpACarr = [];
    tmpAGUsrsLArr = null;
    tmpAGUsrsLArr = "";
    tmpAGUsrsLArr = [];
    // currGSarr = currUzsarr;
 
    
    
    // tSrtIdx = "p_dadded";
    tmpAGUsrsLArr = JSSHOP.shared.getSrtdArr(tmpAUsrsLArr, tSrtIdx);
    tRndrINGARr = tmpAGUsrsLArr;
    tRndrStr = getAUItmsLst(tRndrINGARr);
    // alert('rnderUEdtPrpItms - tSrtIdx: ' + tSrtIdx);

    newel = document.createElement('div');

    if(tmpAGUsrsLArr[0]) {
    strTHhtml = JSSHOP.shared.getTblHdrs(tHdrArr);
    // strTHhtml = JSSHOP.shared.getNurTblHdrs(tHdrArr, "rndrUEdtPrpItms");
    }
    tmpFstr = getTblSortStr(strTHhtml, tRndrStr);

    // 
      //  <div class="tableFixHead"></div>
    tmpFFstr = "<div class=\"dtable_wrapper\"><div class=\"dtableFixHead\"><div id=\"dvPrpsTbl\">" + tmpFstr + "</div></div></div>";
    document.getElementById("dvAusrsList").innerHTML = tmpFFstr;
    JSSHOP.ui.doAutoComp(document.getElementById("inpACSearch"), tmpACarr);
    // alert('rndrUEdtPrpItms - tSrtIdx: ' + tSrtIdx);
    
 };
    
    
    var dmyFnishCntLoad = fnishCntLoad;
fnishCntLoad = function() {
 //  alert('fnishCntLoad');
 tmpDOs = {};
 tmpDOs["ws"] = "where _id > ?";
 tmpDOs["wa"] = [0];
 
 oi = getNuDBFnvp("quser",5,null,tmpDOs);
 currRQtable = "quser";
 currRQstr = oi["rq"];
 // alert("edit users currRQstr: " + currRQstr);
 doQComm(oi["rq"], null, "doAUsersList");
return dmyFnishCntLoad;
};