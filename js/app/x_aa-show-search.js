currIContent == "y"
var euiFFObjArr = null;
var euiFFObjArr = [];
var tmpOldFFvals = null;
var tmpOldFFvals = {};
 
 
function rndrPropSearch(attaa, attaaa, attaaab) {
    istrt = 0;
    iprplen = 0;
    fullPrpLstA = JSON.parse(attaaa);
    currShopsArr = fullPrpLstA;
    iprplen = fullPrpLstA.length;
    retPLstSTr = "";
    // alert('doMPropsList - iprplen: ' + iprplen);
    while(istrt < iprplen){
    aprpObj = fullPrpLstA[istrt];
    aprpTitle = aprpObj["ptitle"];
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
    aprpStatus = aprpObj["status"];
    aprpMapimage = aprpObj["mapimage"];
    aprpTopmapimage = aprpObj["topmapimage"];
    aprpGroundmapimage = aprpObj["groundmapimage"];
    aprpTotalfloor = aprpObj["totalfloor"];
    aprpDate = aprpObj["date"];
    aprploclat = aprpObj["ploclat"];
    aprploclng = aprpObj["ploclng"];
    retPLstSTr += "<div class=\"col-md-6 col-lg-4\">";
    /*
    retPLstSTr += "<div tid=\"dvCoFavBtn\" style=\"float: right\"></div>";
    
    <div style="float: right"><span class="cls_button cls_button-xxsmall bkgdClrWhite brdrClrDlg txtClrDlg" onclick="javascript:doRecentFavorite('index.html?pid=aa-show-item&amp;itemid=12&amp;cid=15155&amp;catid=5','Apoyobrazos central para un BMW 2.6-','0','12','btnFavs12');"><i id="btnFavs12" class="material-icons txtClrTtl" alt="favorite" title="favorite" value="favorite">?</i></span><span class="cls_button cls_button-xxsmall bkgdClrWhite brdrClrDlg txtClrDlg" style="margin:2px;" onclick="JSSHOP.ui.showShareBox('product',12);"><i class="material-icons txtClrTtl" alt="share" title="share" value="share">?</i></span><span class="cls_button cls_button-xxsmall bkgdClrWhite brdrClrDlg txtClrDlg" style="margin:2px;" onclick="JSSHOP.ui.showMsgBox('product', ts._id,'showMsgSave');"><i class="material-icons txtClrTtl" alt="chat" title="messages" value="messages">?</i></span></div>
    */
    currFTclr = "material-icons txtClrTtl";
     if(currFavsIdstr.indexOf(aprpObj._id + "::") != -1) {
    currFTclr = "material-icons txtClrRed";
    }
    
    retPLstSTr += "<table><tr><td>";
    
    //  <div  onclick="javascript:JSSHOP.ui.toggleVisibility('tdUploadBtn');" class="crsrPointer"><img alt="User Icon" src="images/misc/default_user.png"  class="slmtable brdrClrDlg" style="minn-width:150px;max-width:160px;text-align:center;margin-right:3px" align="absmiddle" id="imgIedit"><span class="txtSmall txtClrGrey">Edit</span></div>
     retPLstSTr += "<div  onclick=\"javascript:eindex('aa-pdetail','pid=aa-pdetail&prpid=" + aprpObj._id + "')\" class=\"crsrPointer\"><img src=\"admin/property/s_thumb" + aprpPimage + "\" alt=\"pimage\" class=\"slmtable brdrClrDlg\" style=\"minn-width:150px;max-width:160px;text-align:center;margin-right:3px\" align=\"absmiddle\"></div>";
    retPLstSTr += "</td>";
    retPLstSTr += "<td>";
    retPLstSTr += "<h5 class=\"text-secondary hover-text-primary text-capitalize\" style=\"margin-bottom:0px;\"><a href=\"javascript:eindex('aa-pdetail','pid=aa-pdetail&prpid=" + aprpObj._id + "')\">" + aprpTitle + "</a></h5>";
     retPLstSTr += "<table style=\"width:100%;\"><tbody><tr><td><i class=\"small-material-icons coll-menu-item txtClrHdr txtBold\" alt=\"location_on\" title=\"Location\" style=\"verticle-align:middle;color:#dbddd9;\">&#xe55c;</i></td><td><span class=\"txtSmall txtBold txtClrHdr\">" + aprpLocation + "</span></td><td style=\"text-align:right;\" nowrap=\"nowrap\"><div class=\"price text-primo\" style=\"margin-right:10px;\"><span class=\"text-primary txtSmall\">&euro;</span>&nbsp;&nbsp;<b>" + aprpPrice + "</b></div></td></tr></tbody></table>";
     
    retPLstSTr += "</td></tr></table>";
    /*
     retPLstSTr += "<div class=\"featured-thumb hover-zoomer mb-4\">";
    retPLstSTr += "<div class=\"overlay-black overflow-hidden position-relative crsrPointer\" onclick=\"javascript:eindex('aa-pdetail','pid=aa-pdetail&prpid=" + aprpObj._id + "')\"> <img src=\"admin/property/" + aprpPimage + "\" alt=\"pimage\">";
    retPLstSTr += "<div class=\"featured bg-primary text-white\">New</div>";
    retPLstSTr += "<div class=\"sale bg-secondary text-white text-capitalize\">" + tDBHObj[aprpType] + "</div>";
    retPLstSTr += "</div>"; // end overlay-black overflow-hidden position-relative
    retPLstSTr += "<div class=\"featured-thumb-data shadow-one\">";
    
    -------
    retPLstSTr += "<div class=\"p-3\">";
    retPLstSTr += "<span class=\"location text-capitalize\"><i class=\"fas fa-map-marker-alt text-primary\"></i> " + aprpLocation + "</span> </div>";
    retPLstSTr += "<div class=\"px-4 pb-4 d-inline-block w-100\">";
    retPLstSTr += "<div class=\"\"> <a href=\"propertydetail.php?pid=" + aprpUid + "\" class=\"txtSmall txtBold txtDecorNone\">" + stxt[99] + "...</a> </div>";
    retPLstSTr += "<div class=\"float-right\"><i class=\"nav-material-icons coll-menu-item txtClrHdr\" style=\"margin-right:4px;margin-top:2px;\">&#xe0b7;</i> <a href=\"contact.php?propid=" + aprpUid + "\" class=\"txtSmall txtBold txtDecorNone\">" + stxt[98] + "</a> </div>";
    retPLstSTr += "</div>";
    ---------
    
    
    retPLstSTr += "<div class=\"bg-gray quantity px-4 pt-4\">";
    retPLstSTr += "<ul>";
    retPLstSTr += "<li><b>" + aprpSize + "</b> Area m2</li>";
    retPLstSTr += "<li><b>" + aprpBedroom + "</b>" + stxt[922] + "</li>";
    retPLstSTr += "<li><b>" + aprpBathroom + "</b>" + stxt[923] + "</li>"
    retPLstSTr += "<li><b>" + aprpKitchen + "</b>" + stxt[926] + "</li>"; 
    retPLstSTr += "</ul>";
    
    
    
    
    retPLstSTr += "</div>"; // end bg-gray quantity px-4 pt-4
    retPLstSTr += "<div class=\"bkgdClrWhite\">";
    retPLstSTr += "<span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrDlg\" style=\"margin:2px;\" onclick=\"JSSHOP.ui.showShareBox('property'," + istrt + ");\"><i class=\"material-icons txtClrTtl\" alt=\"share\" title=\"share\" value=\"share\">&#xe80d;</i></span>";
    retPLstSTr += "<span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrClrDlg txtClrDlg\" style=\"margin:2px;\" onclick=\"JSSHOP.ui.showMsgBox('uproperty'," + istrt + ",'showMsgSave');\"><i class=\"material-icons txtClrTtl\" alt=\"chat\" title=\"messages\" value=\"messages\">&#xe0b7;</i></span>";
    retPLstSTr += "<span tid=\"dvCoFavBtn\" class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrDlg\" onclick=\"javascript:doRecentFavorite('index.html?pid=aa-pdetail&prpid=" + aprpObj._id + "','" + aprpTitle + "','noQvalue','" + aprpObj._id + "','btnFavs" + aprpObj._id + "');\"><i id=\"btnFavs" + aprpObj._id + "\" class=\"" + currFTclr + "\" alt=\"favorite\" title=\"favorite\" value=\"favorite\">&#xe87d;</i></span>";
    // streetview link http://maps.google.com/maps?q=&layer=c&cbll=
    tSrvLLstr = aprploclat + "," + aprploclng;
    retPLstSTr += "<span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrDlg\" style=\"margin:2px;\"><a href=\"http://maps.google.com/maps?q=&layer=c&cbll=" + tSrvLLstr + "\"><i class=\"material-icons txtClrTtl\" alt=\"streetview\" title=\"streetview\" value=\"streetview\">&#xe56e;</i> Street View</a></span>";
    
     
    
    retPLstSTr += "</div>"; // end bkgdClrWhite
    
    
    
    
    retPLstSTr += "</div>"; // end featured-thumb-data shadow-one
    retPLstSTr += "</div>"; // end featured-thumb hover-zoomer mb-4
    
    
    
    
    */
    retPLstSTr += "</div>";  // end col-md-6 col-lg-4
    
    
    
    retPLstSTr += "<hr>";
    
    
    istrt++;
    }
    // return retPLstSTr;
    JSSHOP.ui.setTinnerHTML("dvPrpSrchRes",retPLstSTr);
    // alert('doMPropsList - aaw: ' + aaw);
    
    
JSSHOP.ui.setCBBClickClr(btnEUsave,'cls_button cls_button-medium  bkgdClrDGreen txtClrWhite','cls_button cls_button-medium', function(){document.getElementById("btnEUsave").innerHTML=stxt[78];document.getElementById("btnEUsave").disabled=false;});

}

 function doPropSearch() {
    istype = document.getElementById("tmp_stype");
    iptype = document.getElementById("tmp_ptype");
    isTyVal = JSSHOP.shared.getCurrSelectOpt(istype);
    ipTyVal = JSSHOP.shared.getCurrSelectOpt(iptype);
    tmpDOqs = null;
    tmpDOqs = {};
    tmpDOqs["ws"] = "where stype=? and ptype=?";
    tmpDOqs["wa"] = [isTyVal, ipTyVal];
    tmpDOqs["l"] = 45;
    oia = getNuDBFnvp("property",5,null,tmpDOqs);
    doQComm(oia["rq"], null, "rndrPropSearch");
 } 

function doSrchCtryPckChg(tZPCel, tZPVal, tZPtxt) {
         console.log("doSrchCtryPckChg: " + tZPCel + " " + tZPVal + " " + tZPtxt);
  try {
    document.getElementById(tmpTCountryFid).value = tZPtxt;
      alert("doSrchCtryPckChg: " + tZPCel + " " + tZPVal + " " + tZPtxt);

    } catch(e) {
      alert("doCountryPckChg: " + e);
    }
  }
    
        
function doSrchZoneDD(thePrx, theSTat) {
    try {   

        // alert("doZoneDD: " + thePrx + " " + theSTat);
        if(theSTat == "ok") {
           tLclDstDstr = getCountryDropStr("country", "doSrchCtryPckChg");
              document.getElementById("dvCountryDD").innerHTML = tLclDstDstr;
        } else {
            document.getElementById("dvCountryDD").innerHTML = "error loading zones";
        }
     } catch (e) {
        alert("doSrchZoneDD: " + e);
    }
}

var dmyFnishCntLoad = fnishCntLoad;
fnishCntLoad = function() {

country.value = u_country.value;

tfsb = nCurrFFieldOb();
tfsb.fid = "btnEUsave";
tfsb.fty = "button";
tfsb.fcl = function() { JSSHOP.ui.setSaveBtnClick(this, function(){doPropSearch()}) };
euiFFObjArr.push(tfsb);


 
 
JSSHOP.shared.initFrmComps(euiFFObjArr);


 
        istype = document.getElementById("tmp_stype");
        iptype = document.getElementById("tmp_ptype");
        // JSSHOP.shared.addCurrSlctObj(svftObj["contract"], istype, stype.value, "noQvalue", "noQvalue");
        // JSSHOP.shared.addCurrSlctObj(svftObj["proptype"], iptype, ptype.value, "noQvalue", "noQvalue");
      
        tDDPaddStr = "";
        tDDPStypeObj = JSSHOP.ui.getBSDDOptsO();
        tDDPStypeObj["ddtype"] = "noQvalue";
        tDDPStypeObj["fld"] = "stype";
        tDDPStypeObj["lbl"] = stxt[949];
        tDDPStypeObj["val"] = stype.value;
        tDDPStypeObj["kvpObj"] = svftObj["contract"];
        tDDPStypeObj["cb"] = "donada";
        tDDPStypeObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
        tDDPStypeObj["lblcls"] = "txtSmall";
        tDDPStypeObj["valcls"] = "txtSmall";
        tDDPStypeObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
        tDDPStypeObj["horvert"] = "vertical";
        tDDPStypeObj["icn"] = "noQvalue";
        tDDPTypeStr = JSSHOP.ui.getNuBSdropDstr(tDDPStypeObj);
        tDDPaddStr += tDDPTypeStr;
        tDDPaddStr += "<br><br>";


        tDDPPrpTypObj = JSSHOP.ui.getBSDDOptsO();
        tDDPPrpTypObj["ddtype"] = "noQvalue";
        tDDPPrpTypObj["fld"] = "ptype";
        tDDPPrpTypObj["lbl"] = stxt[927];
        tDDPPrpTypObj["val"] = ptype.value;
        tDDPPrpTypObj["kvpObj"] = svftObj["proptype"];
        tDDPPrpTypObj["cb"] = "donada";
        tDDPPrpTypObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
        tDDPPrpTypObj["lblcls"] = "txtSmall";
        tDDPPrpTypObj["valcls"] = "txtSmall";
        tDDPPrpTypObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
        tDDPPrpTypObj["horvert"] = "vertical";
        tDDPPrpTypObj["icn"] = "noQvalue";
        tDDPPrpTypStr = JSSHOP.ui.getNuBSdropDstr(tDDPPrpTypObj);
        tDDPaddStr += tDDPPrpTypStr;
        tDDPaddStr += "<br><br>";

        document.getElementById("dvSrchPDrpDwns").innerHTML = tDDPaddStr;
 
 
 
// JSSHOP.shared.setDynFrmVals(document["property"], "tmp_");

// getPropImgs();
// doWinLoad();
// 

JSSHOP.loadScript("misc/x_countries.js", doSrchZoneDD,  "js");

JSSHOP.ads.doGenericPlug('mpmenu',3,'dvPartLinks')

return dmyFnishCntLoad;
};

 