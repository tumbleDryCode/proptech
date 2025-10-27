var tmpAUsrsLArr = [];
var tmpAGUsrsLArr = [];


var doAUsersList = function(a,rfb,c) {
    console.log("doAUsersList: " + rfb);
    if(rfb.indexOf("_id") != -1) {
  tmpAUsrsLArr = "";
  tmpAUsrsLArr = [];
  tmpAUsrsLArr = JSON.parse(rfb);
 
  rnderULstTbl("_id");
    } else {
        alert("doAUsersList: " + rfb);
        // document.getElementById("divQitems").innerHTML = stxt[508];
    }
  };


var doTUserLgin = function(tlouid) {
  // delete uid cookie
JSSHOP.cookies.deleteCookie('quid','','');
JSSHOP.cookies.deleteCookie('cuid','','');
document.location.href = "index.html?pid=login&tq=" + tlouid + "&tcid=" + cid;
}
 

 var getAUItmsLst = function(tPrpIarr) {

    var aulen = tPrpIarr.length;
    var iupint = 0;
    var pucid = 0;
    autstr = "";
    tpshdSTr = "";
    fullurpstr = "";
    while(iupint < aulen) {
        tsuar = tPrpIarr[iupint];
        
        
        atstr = "";
        atstr += "<tr>";
        
       //  tSTstr =  ts.u_name + ts.u_fullname + ts.u_cat;
 
        
        tsUT = tsuar.u_cat;
        tsrtUT = tsuar.u_cat; 


        atstr += "<td style=\"text-align: left\"><a href=\"javascript:doTUserLgin(" + tsuar._id + ");\">" + tsuar._id + "</a></td>";
        atstr += "<td style=\"text-align: left\"><a href=\"javascript:eindex('aa-edit-ausers','pid=aa-edit-ausers&tujsector=" + tsuar.u_cat + "');\">" + tsuar.u_cat + "</a></td>";
        
         
        
        atstr += "<td style=\"text-align: left\"  nowrap=\"nowrap\">";
        // atstr += "<div  onclick=\"javascript:eindex('aa-show-prop','pid=aa-show-prop&prpid=" + aprpObj._id + "')\" class=\"crsrPointer\"><img alt=\"Profile\" src=\"images/user/" + aprpObj.u_icon + "\"  class=\"icnRndSmUser\" align=\"absmiddle\"><br><span class=\"txtSmall txtClrGrey\">Edit</span></div>";
        atstr += "<div onclick=\"javascript:eindex('aa-show-user','pid=aa-show-user&tuid=" + tsuar._id + "')\" class=\"crsrPointer\"><img alt=\"Profile\" src=\"images/user/" + tsuar.u_icon + "\"  class=\"icnRndDSmUser\" align=\"absmiddle\">&nbsp;";
        atstr +=  "<span class=\"txtBold txtCLrHdr\">" +  tsuar.u_fullname +  "</span></div></td>";
       
 
        atstr += "<td style=\"text-align: left\" class=\"txtClrHdr\"><a href=\"javascript:doTUserLgin('" + tsuar._id + "');\"><i class=\"menu-material-icons\" alt=\"edit\">&#xe3c9;</i></a>";
         atstr += "</td>";
        atstr += "</tr>";
        autstr += atstr;
        tmpULTarr.push(atstr);
    iupint++;
    }
 
    return autstr;
    };

    var rnderFItems = function(trSrtIdx) {
      
        rnderULstTbl(trSrtIdx);
    }

 var rnderULstTbl = function(tSrtIdx) {
 
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
 
    tmpULTarr = null;
    tmpULTarr = "";
    tmpULTarr = [];
    tmpAGUsrsLArr = null;
    tmpAGUsrsLArr = "";
    tmpAGUsrsLArr = [];
    // currGSarr = currUzsarr;
 
    
    
    tSrtIdx = "_id";
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
    JSSHOP.ui.doAutoComp(document.getElementById("inpACSearch"), tmpULTarr);
    // alert('rndrUEdtPrpItms - tSrtIdx: ' + tSrtIdx);
    
 };
    
    
    var dmyFnishCntLoad = fnishCntLoad;
fnishCntLoad = function() {
 //  alert('fnishCntLoad');
 tmpDOs = {};
 tmpDOs["ws"] = "where _id > ? and u_rtype=?";
 tmpDOs["wa"] = [0, 5];
 
 oi = getNuDBFnvp("quser",5,null,tmpDOs);
 currRQtable = "quser";
 currRQstr = oi["rq"];
 // alert("edit users currRQstr: " + currRQstr);
 doQComm(oi["rq"], null, "doAUsersList");
return dmyFnishCntLoad;
};