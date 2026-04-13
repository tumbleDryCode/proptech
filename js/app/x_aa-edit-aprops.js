var tmpUPropsArr = [];
var tmpGUPropsArr = [];


var setUEdtPrpList = function(a,rfb,c) {
    if(rfb.indexOf("_id") != -1) {
  tmpUPropsArr = "";
  tmpUPropsArr = [];
  tmpUPropsArr = JSON.parse(rfb);

  rnderPrpTbl("_id");
    } else {
        document.getElementById("divQitems").innerHTML = stxt[508];
    }
  };





 var getPrpItmsLst = function(tPrpIarr) {

    var aulen = tPrpIarr.length;
    var iupint = 0;
    var pucid = 0;
    autstr = "";
    tpshdSTr = "";
    fullurpstr = "";
    while(iupint < aulen) {
    aprpObj = tPrpIarr[iupint];
    apropID = aprpObj["_id"];
    // aprpTitle = aprpObj["ptitle"];
    nprpTitle = aprpObj["pd_prptitle"];
aprpTitle = LZString.decompressFromEncodedURIComponent(nprpTitle);

    aprpContent = aprpObj["pcontent"];
    aprpType = aprpObj["ptype"];
    aprpBhk = aprpObj["bhk"];
    aprpStype = aprpObj["stype"];
    aprpBedroom = aprpObj["bedroom"];
    aprpBathroom = aprpObj["bathroom"];
    aprpBalcony = aprpObj["balcony"];
    aprpKitchen = aprpObj["kitchen"];
    aprpHall = aprpObj["hall"];
    aprpFloor = aprpObj["floor"];
    aprpSize = aprpObj["size"];
    aprpPrice = aprpObj["price"];
    aprpLocation = aprpObj["location"];
    aprpCity = aprpObj["city"];
    aprpState = aprpObj["state"];
    aprpFeature = aprpObj["feature"];
    aprpPimage = aprpObj["pimage"];
    aprpPimage1 = aprpObj["pimage1"];
    aprpPimage2 = aprpObj["pimage2"];
    aprpPimage3 = aprpObj["pimage3"];
    aprpPimage4 = aprpObj["pimage4"];
    aprpUid = aprpObj["uid"];
    aprpStatus = aprpObj["pstatus"];
    aprpMapimage = aprpObj["mapimage"];
    aprpTopmapimage = aprpObj["topmapimage"];
    aprpGroundmapimage = aprpObj["groundmapimage"];
    aprpTotalfloor = aprpObj["totalfloor"];
    aprpDate = aprpObj["pdadded"];
    // tSTstr = aprpTitle +  aprpContent + aprpType +  aprpStype + aprpPrice + aprpLocation + aprpCity + aprpState +  aprpDate;
    tdaprpType = "";
    tdaprpType = svftObj["proptype"][aprpType];
    tdApropStatus = "";
    tdApropStatus = svftObj["propstat"][aprpStatus];
    tcutLocat = "";
    if(aprpLocation.length > 15) {
    tcutLocat = aprpLocation.substring(0, 15);
    } else {
    tcutLocat = aprpLocation;
    }
    // atstr += "<td style=\"text-align: left\"><a href=\"javascript:eindex('aa-edit-item', 'pid=aa-edit-item&itemid=" + ts._id + "&cid=" + ts.i_coid + "&catid=" + ts.i_catid + "');\"><div class=\"crsrPointer\">" + ts._id + "</div></a></td>";
    tSTstr = "<tr>";
    tSTstr += "<td style=\"text-align: left;position: sticky; left: 0; z-index: 3;background-color: #FFFFFF; \"  class=\"dtd\"><a href=\"javascript:eindex('aa-edit-prop', 'pid=aa-edit-prop&prpid=" + apropID + "');\"><div class=\"crsrPointer\">" + apropID + "</div></a></td>";
        tSTstr += "<td style=\"text-align: left\" class=\"txtClrHdr\"><a href=\"javascript:eindex('aa-edit-prop', 'pid=aa-edit-prop&prpid=" + apropID + "');\" class=\"txtDecorNone\"><i class=\"nav-material-icons\" alt=\"delete\" title=\"delete\">&#xe3c9</i></a>";
    tSTstr += "</td>";
    tSTstr += "<td style=\"text-align: left\"><a href=\"javascript:eindex('aa-show-prop', 'pid=aa-show-prop&prpid=" + apropID + "');\">" + aprpTitle + "</a></td>";
    tSTstr += "<td style=\"text-align: left\">" + aprpPrice + "</td>";
    tSTstr += "<td style=\"text-align: left\">" + tdaprpType + "</td>";
    tSTstr += "<td style=\"text-align: left\">" + tcutLocat + "</td>";
    tSTstr += "<td style=\"text-align: left\">" + tdApropStatus + "</td>";
    tSTstr += "<td style=\"text-align: left\" class=\"txtClrHdr\"><a href=\"javascript:eindex('aa-edit-prop', 'pid=aa-edit-prop&prpid=" + apropID + "');\" class=\"txtDecorNone\"><i class=\"nav-material-icons\" alt=\"edit\" title=\"edit\">&#xe3c9</i></a>";
    tSTstr += "<input type=\"hidden\" value=\"" + apropID + "\"></input>";
    tSTstr += "</td>";

    tSTstr += "</tr>";
    fullurpstr += tSTstr;
    tmpACarr.push(tSTstr);
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
        tCHdFObj = {};
    tCHdFObj["fld"] = "_id";
    tCHdFObj.ulnk = "noQvalue";
    tCHdFObj["nm"] = "<span style=\"margin-right: 10px; margin-top: 10px\" class=\"nav-material-icons txtBold\"><i class=\"nav-material-icons\" alt=\"delete\" title=\"delete\">&#xe3c9</i></span>";
    tHdrArr.push(tCHdFObj);
    tAHdFObj = {};
    tAHdFObj["fld"] = "ptitle";
    tAHdFObj["nm"] = stxt[10];
    tHdrArr.push(tAHdFObj);
    tAHdFaObj = {};
    tAHdFaObj["fld"] = "price";
    tAHdFaObj["nm"] = stxt[18];
    tHdrArr.push(tAHdFaObj);
    tAHdFObj = {};
    tAHdFObj["fld"] = "ptype";
    tAHdFObj["nm"] = stxt[992];
    tHdrArr.push(tAHdFObj);
    tAHdFObj = {};
    tAHdFObj["fld"] = "location";
    tAHdFObj["nm"] = stxt[203];
    tHdrArr.push(tAHdFObj);
    tAHdFObj = {};
    tAHdFObj["fld"] = "pstatus";
    tAHdFObj["nm"] = stxt[77];
    tHdrArr.push(tAHdFObj);
    tBHdFObj = {};
    tBHdFObj["fld"] = "_id";
    tBHdFObj.ulnk = "noQvalue";
    tBHdFObj["nm"] = "<span style=\"margin-right: 10px; margin-top: 10px\" class=\"nav-material-icons txtBold\"><i class=\"nav-material-icons\" alt=\"edit\" title=\"edit\">&#xe3c9</i></span>";
    tHdrArr.push(tBHdFObj);


    currACTblCnt = tHdrArr.length;
    tmpACarr = null;
    tmpACarr = "";
    tmpACarr = [];
    tmpGUPropsArr = null;
    tmpGUPropsArr = "";
    tmpGUPropsArr = [];
    // currGSarr = currUzsarr;



    // tSrtIdx = "p_dadded";
    tmpGUPropsArr = JSSHOP.shared.getSrtdArr(tmpUPropsArr, tSrtIdx);
    tRndrINGARr = tmpGUPropsArr;
    tRndrStr = getPrpItmsLst(tRndrINGARr);
    // alert('rnderUEdtPrpItms - tSrtIdx: ' + tSrtIdx);

    newel = document.createElement('div');

    if(tmpGUPropsArr[0]) {
    strTHhtml = JSSHOP.shared.getTblHdrs(tHdrArr);
    // strTHhtml = JSSHOP.shared.getNurTblHdrs(tHdrArr, "rndrUEdtPrpItms");
    }
    tmpFstr = getTblSortStr(strTHhtml, tRndrStr);

    //
      //  <div class="tableFixHead"></div>
    tmpFFstr = "<div class=\"dtable_wrapper\"><div class=\"dtableFixHead\"><div id=\"dvPrpsTbl\">" + tmpFstr + "</div></div></div>";
    document.getElementById("dvUprosList").innerHTML = tmpFFstr;
    JSSHOP.ui.doAutoComp(document.getElementById("inpACSearch"), tmpACarr);
    // alert('rndrUEdtPrpItms - tSrtIdx: ' + tSrtIdx);

 };


    var dmyFnishCntLoad = fnishCntLoad;
fnishCntLoad = function() {
   JSSHOP.ads.doGenericPlug('mpmenu',3,'dvPartLinks');
 //  alert('fnishCntLoad');
 tmpDOqs = null;
tmpDOqs = {};
tmpDOqs["ws"] = "where _id>? and prtype=?";
tmpDOqs["wa"] = [0, "5"];
tmpDOqs["l"] = 45;

oia = getNuDBFnvp("property",5,null,tmpDOqs);
// select all from property, propdescs where propdescs.pd_prpid = property._id and property.prtype = '5'
//oiaSTR = "SELECT * from property p JOIN propdescs pd ON pd.pd_prpid = p._id WHERE p.prtype = '5'";
oiaSTR = "select p.*, u.u_icon, u.u_fullname, pd.pd_prptitle, pd.pd_prpdesc from property p, quser u, propdescs pd where p._id > 0 and p.prtype = '5' and p.uid = u._id and pd.pd_prpid = p._id and pd.pd_prptlng = '" +  usrlang + "' order by p._id desc limit 20";
doQComm(oiaSTR, null, "setUEdtPrpList");
return dmyFnishCntLoad;
};
