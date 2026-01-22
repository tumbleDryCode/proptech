

function doUMsglinks(tULUID, tdivMID) {
  tmpDOs = null;
  tmpDOs = {};
  tmpDOs["ws"] = "where k_userid=? and k_rtype=?";
  tmpDOs["wa"] = [tULUID,5]; 
  oi = getNuDBFnvp("qlinks",5,null,tmpDOs);
  doQComm(oi["rq"], tdivMID, "getUMsgLnkStr");
   //  JSSHOP.ui.showMsgBox(tPPrpTy,tPPrpI,tTPcb);
  }

var rndrUMsgLnks = function(za,zb,zc) {

  // dvCoLinks.innerHTML = "";
  
  theArr = JSON.parse(zb);
  
  // alert("rndrCoLnks: " + theArr);
  var rclen = theArr.length;
  var rciint = 0;
  var rcsblen = 0;
  var lastcatID = "";
  rcts = null;
  
  var tmpScatA = {};
  rcnsDv = document.createElement('div');
  rcL = "<table style=\"width:100%;\">";
  while(rciint < rclen) {
  rcts = theArr[rciint];
  tKmatter = unescape(decodeURIComponent(rcts.k_matter));
  tKshrtMatter = tKmatter;
  tKfnlMatter = "";
  if(tKmatter.length > 20) {
      tKshrtMatter = tKmatter.substring(0,20) + "...";
  
  }
  if(tKmatter.indexOf("http") != -1) {
      tKfnlMatter = "<a href=\"" + tKmatter + "\" target=\"_blank\">" + tKshrtMatter + "</a>";
  } else {
      tKfnlMatter = tKshrtMatter;
  }
  
  // rcnsDv.className = "collection-item txtDecorNone margleft"; 
  rcL += "<tr><td><span class=\"txtBold\"><img src=\"images/misc/ts-icon-" + rcts.k_category + ".png\" class=\"icnsmlbtn\"></span></td>";
  rcL += "<td>" + tKfnlMatter;
  
  //rcL += "<tr><td><span class=\"txtBold\"><img src=\"images/misc/ts-icon-" + rcts.k_category + ".png\" class=\"icnsmlbtn\"></span></td><td><span class=\"txtSmall txtClrGrey\">" + rcts.k_title + "</span></td><td>" + unescape(decodeURIComponent(rcts.k_matter));
  rcL += "</td><td><button  onclick=\"javascript:doCoLinkDelete(" + rciint + "," + rcts._id + ");\" class=\"crsrPointer txtXLrg txtBold slmtable bkgdClrWhite brdrNone txtClrDrkGrn\"><i class=\"txtClrRed brdrClrWhite bkgdClrWhite menu-material-icons\" alt=\"delete\" title=\"delete\">&#xe92b;</i></button>";
  rcL += "</td></tr>";
  // rcnsDv.innerHTML = "<span class=\"txtBold\">" + rcts.k_category + "</span><br>" + rcts.k_matter;
  rciint++;
  }
  rcL += "</table>";
  document.getElementById(za).innerHTML = rcL;
 };

var getUMsgLnkStr = function(tCCLA, tCCLB, tCCLC) {
  if(tCCLB.indexOf("_id") != -1) {
      currCoLinksArr = null;
      currCoLinksArr = [];
  // alert("setCurrCoLinks: " + tCCLB);
  
  rndrUMsgLnks(tCCLA, tCCLB, tCCLC);
  }
  }
 
function doMPropsList(aaw,aww,cww) {
    console.log('doMPropsList - aww: ' + aww);
     
istrt = 0;
iprplen = 0;
fullPrpLstA = JSON.parse(aww);
currShopsArr = fullPrpLstA;
iprplen = fullPrpLstA.length;
retPLstSTr = "";
if(iprplen == 0) {
    retPLstSTr = "<div class=\"col-md-12\"><h4 class=\"text-center text-secondary\">No Properties Found</h4></div>";
}
if(iprplen > 3) {
 iprplen = 3;
}
// alert('doMPropsList - iprplen: ' + iprplen);
while(istrt < iprplen){
aprpObj = fullPrpLstA[istrt];
nprpTitle = aprpObj["pd_prptitle"];
aprpTitle = LZString.decompressFromEncodedURIComponent(nprpTitle);
nprpContent = aprpObj["pd_prpdesc"];
aprpContent = LZString.decompressFromEncodedURIComponent(nprpContent);
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
aprpUFlName = aprpObj["u_fullname"];
aprpStatus = aprpObj["status"];
aprpMapimage = aprpObj["mapimage"];
aprpTopmapimage = aprpObj["topmapimage"];
aprpGroundmapimage = aprpObj["groundmapimage"];
aprpTotalfloor = aprpObj["totalfloor"];
aprpDate = aprpObj["date"];
aprploclat = aprpObj["ploclat"];
aprploclng = aprpObj["ploclng"];
tLocationStr = "";
if(aprpLocation.length < 3) {
  // check aprpCity and aprpSTate to make a full location string
  if(aprpCity.length > 0) {
    tLocationStr += aprpCity;
  }
  if(aprpState.length > 0) {
    if(tLocationStr.length > 0) {
      tLocationStr += ", ";
    }
    tLocationStr += aprpState;
  }
  if(tLocationStr.length == 0) {
    tLocationStr = "Unknown Location";
  }
} else {
  tLocationStr = aprpLocation;
}
// start the main div
retPLstSTr += "<div class=\"slmtable bkgdClrWhite bottom-shadow\" style=\"margin-top:18px;padding:0px;\">";

 
tPrpMMListObj = null;
tPrpMMListObj = "";
tPrpMMListObj = {};
if((quid == aprpUid) || (u_cat.value == "5")) {
tPrpMMListObj["edit"] = stxt[31];
// tPrpMMListObj["delete"] = stxt[109];
// tPrpMMListObj["privacy"] = stxt[101];
}
tPrpMMListObj["view"] = stxt[53];
tPrpMMListObj["share"] = stxt[72];
tPrpMMListObj["msg"] = stxt[117];
// tPrpMMListObj["fav"] = stxt[21];
// tPrpMMListObj["streetview"] = "Street View";


tDDPrpStr = "";
tDDPrpPLdStr  = aprpObj._id + ":" + istrt;

tDDPrpObj = {};
tDDPrpObj["ddtype"] = "moreHoriz";
tDDPrpObj["fld"] = "noQvalue";
tDDPrpObj["lbl"] = stxt[101];
tDDPrpObj["val"] = "noQvalue";
tDDPrpObj["pload"] = tDDPrpPLdStr;
tDDPrpObj["kvpObj"] = tPrpMMListObj;
tDDPrpObj["cb"] = "doPrpMDDSlct";
tDDPrpObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
tDDPrpObj["lblcls"] = "txtSmall txtBold txtClrGrey";
tDDPrpObj["valcls"] = "txtSmall txtBold txtClrGrey";
tDDPrpObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
tDDPrpObj["horvert"] = "horizontal";
tDDPrpObj["icn"] = "noQvalue";
tDDPrpObj["kvIcnsObj"] = {};
tDDPrpObj["kvIcnsObj"]["edit"] = "&#xe3c9;";
tDDPrpObj["kvIcnsObj"]["view"] = "&#xe8f4;";
tDDPrpObj["kvIcnsObj"]["share"] = "&#xe80d;";
tDDPrpObj["kvIcnsObj"]["msg"] = "&#xe0b7;";
tDDPrpObj["kvIcnsObj"]["fav"] = "&#xe87d;";
tDDPrpObj["kvIcnsObj"]["streetview"] = "&#xe56e;";

tDDPrpStr = JSSHOP.ui.getNuBSdropDstr(tDDPrpObj);


/*
retPLstSTr += "<div tid=\"dvCoFavBtn\" style=\"float: right\"></div>";

<div style="float: right"><span class="cls_button cls_button-xxsmall bkgdClrWhite brdrClrDlg txtClrDlg" onclick="javascript:doRecentFavorite('index.html?pid=aa-show-item&amp;itemid=12&amp;cid=15155&amp;catid=5','Apoyobrazos central para un BMW 2.6-','0','12','btnFavs12');"><i id="btnFavs12" class="material-icons txtClrTtl" alt="favorite" title="favorite" value="favorite">?</i></span><span class="cls_button cls_button-xxsmall bkgdClrWhite brdrClrDlg txtClrDlg" style="margin:2px;" onclick="JSSHOP.ui.showShareBox('product',12);"><i class="material-icons txtClrTtl" alt="share" title="share" value="share">?</i></span><span class="cls_button cls_button-xxsmall bkgdClrWhite brdrClrDlg txtClrDlg" style="margin:2px;" onclick="JSSHOP.ui.showMsgBox('product', ts._id,'showMsgSave');"><i class="material-icons txtClrTtl" alt="chat" title="messages" value="messages">?</i></span></div>
*/
currFTclr = "cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrDlg";
 if(currFavsIdstr.indexOf(aprpObj._id + "::") != -1) {
currFTclr = "cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrRed";
}

retPLstSTr += "<table style=\"width: 100%\"><tr><td style=\"min-width:40px;\">";

//  <div  onclick="javascript:JSSHOP.ui.toggleVisibility('tdUploadBtn');" class="crsrPointer"><img alt="User Icon" src="images/misc/default_user.png"  class="slmtable brdrClrDlg" style="minn-width:150px;max-width:160px;text-align:center;margin-right:3px" align="absmiddle" id="imgIedit"><span class="txtSmall txtClrGrey">Edit</span></div>
retPLstSTr += "<a href=\"javascript:eindex('aa-show-user', 'pid=aa-show-user&tuid=" + aprpUid + "');\" class=\"crsrPointer\">";
retPLstSTr += "<div><img alt=\"Profile\" src=\"images/user/s_thumb" + aprpObj.u_icon + "\"  class=\"icnRndnUser\" align=\"absmiddle\"><br><span class=\"txtSmall txtClrGrey\">" + aprpUFlName + "</span></div></a>";


retPLstSTr += "</td><td style=\"vertical-align:top;width:100%\">";
retPLstSTr += "<span class=\"txtBold txtClrLtBlue text-capitalize\" style=\"margin-bottom:0px;\"><a href=\"javascript:eindex('aa-show-prop','pid=aa-show-prop&prpid=" + aprpObj._id + "')\">" + aprpTitle + "</a></h5>";
 retPLstSTr += "<table style=\"width:100%;\"><tbody><tr><td><i class=\"small-material-icons coll-menu-item txtClrHdr txtBold\" alt=\"location_on\" title=\"Location\" style=\"verticle-align:middle;color:#dbddd9;\">&#xe0c8;</i></td><td><span class=\"txtSmall txtBold txtClrHdr\">" + tLocationStr + "</span></td>";
retPLstSTr += "<td class=\"txtBold txtBig\" nowrap=\"nowrap\">" + aprpPrice + "<span style=\"vertical-align:center;font-size:smaller;align: absmiddle\" class=\"txtClrGrey\">&euro;</span></td></tr></tbody></table>";

retPLstSTr += "</td><td style=\"vertical-align:top\">" + tDDPrpStr + "</td></tr></table>";

 retPLstSTr += "<div class=\"featured-thumb hover-zoomer mb-4\">";
retPLstSTr += "<div class=\"overlay-black overflow-hidden position-relative crsrPointer\" onclick=\"javascript:eindex('aa-show-prop','pid=aa-show-prop&prpid=" + aprpObj._id + "')\"> <img src=\"" + currPrpImgsFldr + "/m_thumb" + aprpPimage + "\" alt=\"pimage\" class=\"img100p\">";
// retPLstSTr += "<div class=\"featured bg-primary text-white\">New</div>";
retPLstSTr += "<div class=\"sale  slmtable bkgdClrWhite txtClrHdr txtSmall\">" + tDBHObj[aprpType] + " / " + stxt[953] + ": " + aprpSize + "</div>";
retPLstSTr += "</div>"; // end overlay-black overflow-hidden position-relative
retPLstSTr += "<div class=\"featured-thumb-data shadow-one\">";

/*
retPLstSTr += "<div class=\"p-3\">";
retPLstSTr += "<span class=\"location text-capitalize\"><i class=\"fas fa-map-marker-alt text-primary\"></i> " + aprpLocation + "</span> </div>";
retPLstSTr += "<div class=\"px-4 pb-4 d-inline-block w-100\">";
retPLstSTr += "<div class=\"\"> <a href=\"propertydetail.php?pid=" + aprpUid + "\" class=\"txtSmall txtBold txtDecorNone\">" + stxt[99] + "...</a> </div>";
retPLstSTr += "<div class=\"float-right\"><i class=\"nav-material-icons coll-menu-item txtClrHdr\" style=\"margin-right:4px;margin-top:2px;\">&#xe0b7;</i> <a href=\"contact.php?propid=" + aprpUid + "\" class=\"txtSmall txtBold txtDecorNone\">" + stxt[98] + "</a> </div>";
retPLstSTr += "</div>";
*/


retPLstSTr += "<div class=\"bg-gray quantity px-4 pt-4 txtSmall\" style=\"padding: 6px;\">";
// retPLstSTr += a short version of the property aprpContent
strpdPcontent = "";
if(aprpContent == "" || aprpContent == null || aprpContent == undefined || aprpContent == "noQvalue") {
  aprpContent = "Description goes here.";
}
  // strip html from aprpContent
  strpdPcontent = aprpContent.replace(/<\/?[^>]+(>|$)/g, "");
  shortPcontent = strpdPcontent.length > 100 ? strpdPcontent.substring(0, 100) + "..." : strpdPcontent;
  retPLstSTr +=  shortPcontent;
/*
retPLstSTr += "<ul>";
retPLstSTr += "<li><div style=\"float:left;\"><b>" + aprpSize + " </b>  <span class=\"txtSmall\">" + stxt[953] + "</span></div></li>";
retPLstSTr += "<li><div style=\"float:left;\"><b>" + aprpBedroom + " </b>  <span class=\"txtSmall\">" + stxt[922] + "</span></div></li>";
retPLstSTr += "<li><div style=\"float:left;\"><b>" + aprpBathroom + " </b>  <span class=\"txtSmall\">" + stxt[923] + "</span></div></li>"
retPLstSTr += "<li><div style=\"float:left;\"><b>" + aprpKitchen + " </b>  <span class=\"txtSmall\">" + stxt[926] + "</span></div></li>"; 
retPLstSTr += "</ul>";
*/
retPLstSTr += "</div>"; // end bg-gray quantity px-4 pt-4



retPLstSTr += "<div class=\"bkgdClrWhite\">";
// table
retPLstSTr += "<table style=\"width:100%;margin:0 auto;\"><tr><td>";
retPLstSTr += "<span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrLtBlue\" style=\"margin:2px;\" onclick=\"JSSHOP.ui.showShareBox('property'," + istrt + ");\"><i class=\"material-icons txtClrTtl\" alt=\"share\" title=\"share\" value=\"share\">&#xe80d;</i>" + " " + stxt[72] + "</span>";
retPLstSTr += "</td>";
retPLstSTr += "<td>";
retPLstSTr += "<span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrLtBlue\" style=\"margin:2px;\" onclick=\"JSSHOP.ui.showMsgBox('uproperty'," + istrt + ",'showMsgSave');\"><i class=\"material-icons txtClrTtl\" alt=\"chat\" title=\"messages\" value=\"messages\">&#xe0b7;</i>" + " " + stxt[98] + "</span>";
retPLstSTr += "</td>";
retPLstSTr += "<td>";
// retPLstSTr += "<span tid=\"dvCoFavBtn\" class=\"" + currFTclr + "\" onclick=\"javascript:doRecentFavorite('index.html?pid=aa-show-prop&prpid=" + aprpObj._id + "','" + aprpTitle + "','" +"','" + aprpObj._id + "','btnFavs" + aprpObj._id + "');\"><i id=\"btnFavs" + aprpObj._id + "\" class=\"" + currFTclr + "\" alt=\"favorite\" title=\"favorite\" value=\"favorite\">&#xe87d;</i>" + " " + stxt[618] + "</span>";
// check if already a favorite and make it red if so
currFTclr = "material-icons txtClrTtl";
 if(currFavsIdstr.indexOf(aprpObj._id + "::") != -1) {
currFTclr = "material-icons txtClrRed";
}
retPLstSTr += "<span tid=\"dvCoFavBtn\" class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrLtBlue\" onclick=\"javascript:doRecentFavorite('index.html?pid=aa-show-prop&prpid=" + aprpObj._id + "','" + aprpTitle + "','images/property/s_thumb" + aprpPimage + "','" + aprpObj._id + "','btnFavs" + aprpObj._id + "');\"><i id=\"btnFavs" + aprpObj._id + "\" class=\"" + currFTclr + "\" alt=\"favorite\" title=\"favorite\" value=\"favorite\">&#xe87d;</i>" + " " + stxt[618] + "</span>";

retPLstSTr += "</td></tr></table>";
// streetview link http://maps.google.com/maps?q=&layer=c&cbll=
tSrvLLstr = aprploclat + "," + aprploclng;
// retPLstSTr += "<span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrDlg\" style=\"margin:2px;\"><a href=\"http://maps.google.com/maps?q=&layer=c&cbll=" + tSrvLLstr + "\"><i class=\"material-icons txtClrTtl\" alt=\"streetview\" title=\"streetview\" value=\"streetview\">&#xe56e;</i> Street View</a></span>";

 

retPLstSTr += "</div>"; // end bkgdClrWhite




retPLstSTr += "</div>"; // end featured-thumb-data shadow-one
retPLstSTr += "</div>"; // end featured-thumb hover-zoomer mb-4





retPLstSTr += "</div>";  // end col-md-6
 
 // add clearfix div
 



istrt++;
}

// return retPLstSTr;
JSSHOP.ui.setTinnerHTML("dvMainPrpsLst",retPLstSTr);
 
 JSSHOP.ads.doGenericPlug('mpmenu',3,'dvPartLinks')
 }

  function doOLdMPropsList(aaw,aww,cww) {
    console.log('doMPropsList - aww: ' + aww);
     
istrt = 0;
iprplen = 0;
fullPrpLstA = JSON.parse(aww);
currShopsArr = fullPrpLstA;
iprplen = fullPrpLstA.length;
retPLstSTr = "";
if(iprplen == 0) {
    retPLstSTr = "<div class=\"col-md-12\"><h4 class=\"text-center text-secondary\">No Properties Found</h4></div>";
}
if(iprplen > 3) {
 iprplen = 3;
}
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
aprpUFlName = aprpObj["u_fullname"];
aprpStatus = aprpObj["status"];
aprpMapimage = aprpObj["mapimage"];
aprpTopmapimage = aprpObj["topmapimage"];
aprpGroundmapimage = aprpObj["groundmapimage"];
aprpTotalfloor = aprpObj["totalfloor"];
aprpDate = aprpObj["date"];
aprploclat = aprpObj["ploclat"];
aprploclng = aprpObj["ploclng"];
retPLstSTr += "<div class=\"col-md-6 slmtable bkgdClrWhite bottom-shadow\" style=\"float:left;margin-top:18px;padding:0px;\">";

 
tPrpMMListObj = null;
tPrpMMListObj = "";
tPrpMMListObj = {};
if((quid == aprpUid) || (u_cat.value == "5")) {
tPrpMMListObj["edit"] = stxt[31];
// tPrpMMListObj["delete"] = stxt[109];
// tPrpMMListObj["privacy"] = stxt[101];
}
tPrpMMListObj["view"] = stxt[53];
tPrpMMListObj["share"] = stxt[72];
tPrpMMListObj["msg"] = stxt[117];
tPrpMMListObj["fav"] = stxt[21];
tPrpMMListObj["streetview"] = "Street View";


tDDPrpStr = "";
tDDPrpPLdStr  = aprpObj._id + ":" + istrt;

tDDPrpObj = {};
tDDPrpObj["ddtype"] = "moreHoriz";
tDDPrpObj["fld"] = "noQvalue";
tDDPrpObj["lbl"] = stxt[101];
tDDPrpObj["val"] = "noQvalue";
tDDPrpObj["pload"] = tDDPrpPLdStr;
tDDPrpObj["kvpObj"] = tPrpMMListObj;
tDDPrpObj["cb"] = "doPrpMDDSlct";
tDDPrpObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
tDDPrpObj["lblcls"] = "txtSmall txtBold txtClrGrey";
tDDPrpObj["valcls"] = "txtSmall txtBold txtClrGrey";
tDDPrpObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
tDDPrpObj["horvert"] = "horizontal";
tDDPrpObj["icn"] = "noQvalue";
tDDPrpObj["kvIcnsObj"] = {};
tDDPrpObj["kvIcnsObj"]["edit"] = "&#xe3c9;";
tDDPrpObj["kvIcnsObj"]["view"] = "&#xe8f4;";
tDDPrpObj["kvIcnsObj"]["share"] = "&#xe80d;";
tDDPrpObj["kvIcnsObj"]["msg"] = "&#xe0b7;";
tDDPrpObj["kvIcnsObj"]["fav"] = "&#xe87d;";
tDDPrpObj["kvIcnsObj"]["streetview"] = "&#xe56e;";

tDDPrpStr = JSSHOP.ui.getNuBSdropDstr(tDDPrpObj);


/*
retPLstSTr += "<div tid=\"dvCoFavBtn\" style=\"float: right\"></div>";

<div style="float: right"><span class="cls_button cls_button-xxsmall bkgdClrWhite brdrClrDlg txtClrDlg" onclick="javascript:doRecentFavorite('index.html?pid=aa-show-item&amp;itemid=12&amp;cid=15155&amp;catid=5','Apoyobrazos central para un BMW 2.6-','0','12','btnFavs12');"><i id="btnFavs12" class="material-icons txtClrTtl" alt="favorite" title="favorite" value="favorite">?</i></span><span class="cls_button cls_button-xxsmall bkgdClrWhite brdrClrDlg txtClrDlg" style="margin:2px;" onclick="JSSHOP.ui.showShareBox('product',12);"><i class="material-icons txtClrTtl" alt="share" title="share" value="share">?</i></span><span class="cls_button cls_button-xxsmall bkgdClrWhite brdrClrDlg txtClrDlg" style="margin:2px;" onclick="JSSHOP.ui.showMsgBox('product', ts._id,'showMsgSave');"><i class="material-icons txtClrTtl" alt="chat" title="messages" value="messages">?</i></span></div>
*/
currFTclr = "material-icons txtClrTtl";
 if(currFavsIdstr.indexOf(aprpObj._id + "::") != -1) {
currFTclr = "material-icons txtClrRed";
}

retPLstSTr += "<table style=\"width: 100%\"><tr><td style=\"min-width:40px;\">";

//  <div  onclick="javascript:JSSHOP.ui.toggleVisibility('tdUploadBtn');" class="crsrPointer"><img alt="User Icon" src="images/misc/default_user.png"  class="slmtable brdrClrDlg" style="minn-width:150px;max-width:160px;text-align:center;margin-right:3px" align="absmiddle" id="imgIedit"><span class="txtSmall txtClrGrey">Edit</span></div>
retPLstSTr += "<a href=\"javascript:eindex('aa-show-user', 'pid=aa-show-user&tuid=" + aprpUid + "');\" class=\"crsrPointer\">";
retPLstSTr += "<div><img alt=\"Profile\" src=\"images/user/" + aprpObj.u_icon + "\"  class=\"icnRndnUser\" align=\"absmiddle\"><br><span class=\"txtSmall txtClrGrey\">" + aprpUFlName + "</span></div></a>";
retPLstSTr += "</td><td>";
retPLstSTr += "<h5 class=\"text-secondary hover-text-primary text-capitalize\" style=\"margin-bottom:0px;\"><a href=\"javascript:eindex('aa-show-prop','pid=aa-show-prop&prpid=" + aprpObj._id + "')\">" + aprpTitle + "</a></h5>";
 retPLstSTr += "<table style=\"width:100%;\"><tbody><tr><td><i class=\"small-material-icons coll-menu-item txtClrHdr txtBold\" alt=\"location_on\" title=\"Location\" style=\"verticle-align:middle;color:#dbddd9;\">&#xe55c;</i></td><td><span class=\"txtSmall txtBold txtClrHdr\">" + aprpLocation + "</span></td><td style=\"text-align:right;\" nowrap=\"nowrap\"><div class=\"price text-primo\" style=\"margin-right:10px;\"><span class=\"text-primary txtSmall\">&euro;</span>&nbsp;&nbsp;<b>" + aprpPrice + "</b></div></td></tr></tbody></table>";
 
retPLstSTr += "</td><td style=\"vertical-align:top\">" + tDDPrpStr + "</td></tr></table>";

 retPLstSTr += "<div class=\"featured-thumb hover-zoomer mb-4\">";
retPLstSTr += "<div class=\"overlay-black overflow-hidden position-relative crsrPointer\" onclick=\"javascript:eindex('aa-show-prop','pid=aa-show-prop&prpid=" + aprpObj._id + "')\"> <img src=\"" + currPrpImgsFldr + "/" + aprpPimage + "\" alt=\"pimage\" class=\"img100p\">";
retPLstSTr += "<div class=\"featured bg-primary text-white\">New</div>";
retPLstSTr += "<div class=\"sale bg-secondary text-white text-capitalize\">" + tDBHObj[aprpType] + "</div>";
retPLstSTr += "</div>"; // end overlay-black overflow-hidden position-relative
retPLstSTr += "<div class=\"featured-thumb-data shadow-one\">";

/*
retPLstSTr += "<div class=\"p-3\">";
retPLstSTr += "<span class=\"location text-capitalize\"><i class=\"fas fa-map-marker-alt text-primary\"></i> " + aprpLocation + "</span> </div>";
retPLstSTr += "<div class=\"px-4 pb-4 d-inline-block w-100\">";
retPLstSTr += "<div class=\"\"> <a href=\"propertydetail.php?pid=" + aprpUid + "\" class=\"txtSmall txtBold txtDecorNone\">" + stxt[99] + "...</a> </div>";
retPLstSTr += "<div class=\"float-right\"><i class=\"nav-material-icons coll-menu-item txtClrHdr\" style=\"margin-right:4px;margin-top:2px;\">&#xe0b7;</i> <a href=\"contact.php?propid=" + aprpUid + "\" class=\"txtSmall txtBold txtDecorNone\">" + stxt[98] + "</a> </div>";
retPLstSTr += "</div>";
*/


retPLstSTr += "<div class=\"bg-gray quantity px-4 pt-4\">";
retPLstSTr += "<ul>";
retPLstSTr += "<li><div style=\"float:left;\"><b>" + aprpSize + " </b>  <span class=\"txtSmall\">" + stxt[953] + "</span></div></li>";
retPLstSTr += "<li><div style=\"float:left;\"><b>" + aprpBedroom + " </b>  <span class=\"txtSmall\">" + stxt[922] + "</span></div></li>";
retPLstSTr += "<li><div style=\"float:left;\"><b>" + aprpBathroom + " </b>  <span class=\"txtSmall\">" + stxt[923] + "</span></div></li>"
retPLstSTr += "<li><div style=\"float:left;\"><b>" + aprpKitchen + " </b>  <span class=\"txtSmall\">" + stxt[926] + "</span></div></li>"; 
retPLstSTr += "</ul>";




retPLstSTr += "</div>"; // end bg-gray quantity px-4 pt-4
retPLstSTr += "<div class=\"bkgdClrWhite\">";
retPLstSTr += "<span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrDlg\" style=\"margin:2px;\" onclick=\"JSSHOP.ui.showShareBox('property'," + istrt + ");\"><i class=\"material-icons txtClrTtl\" alt=\"share\" title=\"share\" value=\"share\">&#xe80d;</i></span>";
retPLstSTr += "<span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrDlg\" style=\"margin:2px;\" onclick=\"JSSHOP.ui.showMsgBox('uproperty'," + istrt + ",'showMsgSave');\"><i class=\"material-icons txtClrTtl\" alt=\"chat\" title=\"messages\" value=\"messages\">&#xe0b7;</i></span>";
retPLstSTr += "<span tid=\"dvCoFavBtn\" class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrDlg\" onclick=\"javascript:doRecentFavorite('index.html?pid=aa-show-prop&prpid=" + aprpObj._id + "','" + aprpTitle + "','noQvalue','" + aprpObj._id + "','btnFavs" + aprpObj._id + "');\"><i id=\"btnFavs" + aprpObj._id + "\" class=\"" + currFTclr + "\" alt=\"favorite\" title=\"favorite\" value=\"favorite\">&#xe87d;</i></span>";
// streetview link http://maps.google.com/maps?q=&layer=c&cbll=
tSrvLLstr = aprploclat + "," + aprploclng;
retPLstSTr += "<span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrDlg\" style=\"margin:2px;\"><a href=\"http://maps.google.com/maps?q=&layer=c&cbll=" + tSrvLLstr + "\"><i class=\"material-icons txtClrTtl\" alt=\"streetview\" title=\"streetview\" value=\"streetview\">&#xe56e;</i> Street View</a></span>";

 

retPLstSTr += "</div>"; // end bkgdClrWhite




retPLstSTr += "</div>"; // end featured-thumb-data shadow-one
retPLstSTr += "</div>"; // end featured-thumb hover-zoomer mb-4





retPLstSTr += "</div>";  // end col-md-6
 
 // add clearfix div
 



istrt++;
}
// return retPLstSTr;
JSSHOP.ui.setTinnerHTML("dvMainPrpsLst",retPLstSTr);
 
 // JSSHOP.ads.doGenericPlug('mpmenu',3,'dvPartLinks')
 }



function XXXdoOldMPropsList(aaw,aww,cww) {
    console.log('doMPropsList - aww: ' + aww);
     
istrt = 0;
iprplen = 0;
fullPrpLstA = JSON.parse(aww);
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
aprpUFlName = aprpObj["u_fullname"];
aprpStatus = aprpObj["status"];
aprpMapimage = aprpObj["mapimage"];
aprpTopmapimage = aprpObj["topmapimage"];
aprpGroundmapimage = aprpObj["groundmapimage"];
aprpTotalfloor = aprpObj["totalfloor"];
aprpDate = aprpObj["date"];
aprploclat = aprpObj["ploclat"];
aprploclng = aprpObj["ploclng"];
retPLstSTr += "<div class=\"col-md-6\" style=\"float:left;padding-bottom:8px;\">";
/*
retPLstSTr += "<div tid=\"dvCoFavBtn\" style=\"float: right\"></div>";

<div style="float: right"><span class="cls_button cls_button-xxsmall bkgdClrWhite brdrClrDlg txtClrDlg" onclick="javascript:doRecentFavorite('index.html?pid=aa-show-item&amp;itemid=12&amp;cid=15155&amp;catid=5','Apoyobrazos central para un BMW 2.6-','0','12','btnFavs12');"><i id="btnFavs12" class="material-icons txtClrTtl" alt="favorite" title="favorite" value="favorite">?</i></span><span class="cls_button cls_button-xxsmall bkgdClrWhite brdrClrDlg txtClrDlg" style="margin:2px;" onclick="JSSHOP.ui.showShareBox('product',12);"><i class="material-icons txtClrTtl" alt="share" title="share" value="share">?</i></span><span class="cls_button cls_button-xxsmall bkgdClrWhite brdrClrDlg txtClrDlg" style="margin:2px;" onclick="JSSHOP.ui.showMsgBox('product', ts._id,'showMsgSave');"><i class="material-icons txtClrTtl" alt="chat" title="messages" value="messages">?</i></span></div>
*/
currFTclr = "material-icons txtClrTtl";
 if(currFavsIdstr.indexOf(aprpObj._id + "::") != -1) {
currFTclr = "material-icons txtClrRed";
}

retPLstSTr += "<table><tr><td style=\"min-width:40px;\">";

//  <div  onclick="javascript:JSSHOP.ui.toggleVisibility('tdUploadBtn');" class="crsrPointer"><img alt="User Icon" src="images/misc/default_user.png"  class="slmtable brdrClrDlg" style="minn-width:150px;max-width:160px;text-align:center;margin-right:3px" align="absmiddle" id="imgIedit"><span class="txtSmall txtClrGrey">Edit</span></div>
retPLstSTr += "<a href=\"javascript:eindex('aa-show-user', 'pid=aa-show-user&tuid=" + aprpUid + "');\" class=\"crsrPointer\">";
retPLstSTr += "<div><img alt=\"Profile\" src=\"images/user/" + aprpObj.u_icon + "\"  class=\"icnRndnUser\" align=\"absmiddle\"><br><span class=\"txtSmall txtClrGrey\">" + aprpUFlName + "</span></div></a>";
retPLstSTr += "</td><td>";
retPLstSTr += "<h5 class=\"text-secondary hover-text-primary text-capitalize\" style=\"margin-bottom:0px;\"><a href=\"javascript:eindex('aa-show-prop','pid=aa-show-prop&prpid=" + aprpObj._id + "')\">" + aprpTitle + "</a></h5>";
 retPLstSTr += "<table style=\"width:100%;\"><tbody><tr><td><i class=\"small-material-icons coll-menu-item txtClrHdr txtBold\" alt=\"location_on\" title=\"Location\" style=\"verticle-align:middle;color:#dbddd9;\">&#xe55c;</i></td><td><span class=\"txtSmall txtBold txtClrHdr\">" + aprpLocation + "</span></td><td style=\"text-align:right;\" nowrap=\"nowrap\"><div class=\"price text-primo\" style=\"margin-right:10px;\"><span class=\"text-primary txtSmall\">&euro;</span>&nbsp;&nbsp;<b>" + aprpPrice + "</b></div></td></tr></tbody></table>";
 
retPLstSTr += "</td></tr></table>";

 retPLstSTr += "<div class=\"featured-thumb hover-zoomer mb-4\">";
retPLstSTr += "<div class=\"overlay-black overflow-hidden position-relative crsrPointer\" onclick=\"javascript:eindex('aa-show-prop','pid=aa-show-prop&prpid=" + aprpObj._id + "')\"> <img src=\"admin/property/" + aprpPimage + "\" alt=\"pimage\">";
retPLstSTr += "<div class=\"featured bg-primary text-white\">New</div>";
retPLstSTr += "<div class=\"sale bg-secondary text-white text-capitalize\">" + tDBHObj[aprpType] + "</div>";
retPLstSTr += "</div>"; // end overlay-black overflow-hidden position-relative
retPLstSTr += "<div class=\"featured-thumb-data shadow-one\">";

/*
retPLstSTr += "<div class=\"p-3\">";
retPLstSTr += "<span class=\"location text-capitalize\"><i class=\"fas fa-map-marker-alt text-primary\"></i> " + aprpLocation + "</span> </div>";
retPLstSTr += "<div class=\"px-4 pb-4 d-inline-block w-100\">";
retPLstSTr += "<div class=\"\"> <a href=\"propertydetail.php?pid=" + aprpUid + "\" class=\"txtSmall txtBold txtDecorNone\">" + stxt[99] + "...</a> </div>";
retPLstSTr += "<div class=\"float-right\"><i class=\"nav-material-icons coll-menu-item txtClrHdr\" style=\"margin-right:4px;margin-top:2px;\">&#xe0b7;</i> <a href=\"contact.php?propid=" + aprpUid + "\" class=\"txtSmall txtBold txtDecorNone\">" + stxt[98] + "</a> </div>";
retPLstSTr += "</div>";
*/


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
retPLstSTr += "<span tid=\"dvCoFavBtn\" class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrDlg\" onclick=\"javascript:doRecentFavorite('index.html?pid=aa-show-prop&prpid=" + aprpObj._id + "','" + aprpTitle + "','noQvalue','" + aprpObj._id + "','btnFavs" + aprpObj._id + "');\"><i id=\"btnFavs" + aprpObj._id + "\" class=\"" + currFTclr + "\" alt=\"favorite\" title=\"favorite\" value=\"favorite\">&#xe87d;</i></span>";
// streetview link http://maps.google.com/maps?q=&layer=c&cbll=
tSrvLLstr = aprploclat + "," + aprploclng;
retPLstSTr += "<span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrDlg\" style=\"margin:2px;\"><a href=\"http://maps.google.com/maps?q=&layer=c&cbll=" + tSrvLLstr + "\"><i class=\"material-icons txtClrTtl\" alt=\"streetview\" title=\"streetview\" value=\"streetview\">&#xe56e;</i> Street View</a></span>";

 

retPLstSTr += "</div>"; // end bkgdClrWhite




retPLstSTr += "</div>"; // end featured-thumb-data shadow-one
retPLstSTr += "</div>"; // end featured-thumb hover-zoomer mb-4





retPLstSTr += "</div>";  // end col-md-6
 // retPLstSTr += "<hr>";
 // add clearfix div
 



istrt++;
}
// return retPLstSTr;
JSSHOP.ui.setTinnerHTML("dvMainPrpsLst",retPLstSTr);
// alert('doMPropsList - aaw: ' + aaw);


 }
function getPrpObjSTr(aPrpObj) {
  retPLstSTr = "";
  aprpObj = null;
  aprpObj = aPrpObj;
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
retPLstSTr += "<div class=\"col-md-6\" style=\"padding-bottom:4px;\">";
/*
retPLstSTr += "<div tid=\"dvCoFavBtn\" style=\"float: right\"></div>";

<div style="float: right"><span class="cls_button cls_button-xxsmall bkgdClrWhite brdrClrDlg txtClrDlg" onclick="javascript:doRecentFavorite('index.html?pid=aa-show-item&amp;itemid=12&amp;cid=15155&amp;catid=5','Apoyobrazos central para un BMW 2.6-','0','12','btnFavs12');"><i id="btnFavs12" class="material-icons txtClrTtl" alt="favorite" title="favorite" value="favorite">?</i></span><span class="cls_button cls_button-xxsmall bkgdClrWhite brdrClrDlg txtClrDlg" style="margin:2px;" onclick="JSSHOP.ui.showShareBox('product',12);"><i class="material-icons txtClrTtl" alt="share" title="share" value="share">?</i></span><span class="cls_button cls_button-xxsmall bkgdClrWhite brdrClrDlg txtClrDlg" style="margin:2px;" onclick="JSSHOP.ui.showMsgBox('product', ts._id,'showMsgSave');"><i class="material-icons txtClrTtl" alt="chat" title="messages" value="messages">?</i></span></div>
*/
currFTclr = "material-icons txtClrTtl";
 if(currFavsIdstr.indexOf(aprpObj._id + "::") != -1) {
currFTclr = "material-icons txtClrRed";
}

retPLstSTr += "<table><tr><td style=\"min-width:40px;>";

//  <div  onclick="javascript:JSSHOP.ui.toggleVisibility('tdUploadBtn');" class="crsrPointer"><img alt="User Icon" src="images/misc/default_user.png"  class="slmtable brdrClrDlg" style="minn-width:150px;max-width:160px;text-align:center;margin-right:3px" align="absmiddle" id="imgIedit"><span class="txtSmall txtClrGrey">Edit</span></div>
retPLstSTr += "<div  onclick=\"javascript:eindex('aa-show-prop','pid=aa-show-prop&prpid=" + aprpObj._id + "')\" class=\"crsrPointer\"><img alt=\"Profile\" src=\"images/user/" + aprpObj.u_icon + "\"  class=\"icnRndSmUser\" align=\"absmiddle\"><br><span class=\"txtSmall txtClrGrey\">Edit</span></div>";
retPLstSTr += "</td><td>";
retPLstSTr += "<h5 class=\"text-secondary hover-text-primary text-capitalize\" style=\"margin-bottom:0px;\"><a href=\"javascript:eindex('aa-show-prop','pid=aa-show-prop&prpid=" + aprpObj._id + "')\">" + aprpTitle + "</a></h5>";
 retPLstSTr += "<table style=\"width:100%;\"><tbody><tr><td><i class=\"small-material-icons coll-menu-item txtClrHdr txtBold\" alt=\"location_on\" title=\"Location\" style=\"verticle-align:middle;color:#dbddd9;\">&#xe55c;</i></td><td><span class=\"txtSmall txtBold txtClrHdr\">" + aprpLocation + "</span></td><td style=\"text-align:right;\" nowrap=\"nowrap\"><div class=\"price text-primo\" style=\"margin-right:10px;\"><span class=\"text-primary txtSmall\">&euro;</span>&nbsp;&nbsp;<b>" + aprpPrice + "</b></div></td></tr></tbody></table>";
 
retPLstSTr += "</td></tr></table>";

 retPLstSTr += "<div class=\"featured-thumb hover-zoomer mb-4\">";
retPLstSTr += "<div class=\"overlay-black overflow-hidden position-relative crsrPointer\" onclick=\"javascript:eindex('aa-show-prop','pid=aa-show-prop&prpid=" + aprpObj._id + "')\"> <img src=\"admin/property/" + aprpPimage + "\" alt=\"pimage\">";
retPLstSTr += "<div class=\"featured bg-primary text-white\">New</div>";
retPLstSTr += "<div class=\"sale bg-secondary text-white text-capitalize\">" + tDBHObj[aprpType] + "</div>";
retPLstSTr += "</div>"; // end overlay-black overflow-hidden position-relative
retPLstSTr += "<div class=\"featured-thumb-data shadow-one\">";

/*
retPLstSTr += "<div class=\"p-3\">";
retPLstSTr += "<span class=\"location text-capitalize\"><i class=\"fas fa-map-marker-alt text-primary\"></i> " + aprpLocation + "</span> </div>";
retPLstSTr += "<div class=\"px-4 pb-4 d-inline-block w-100\">";
retPLstSTr += "<div class=\"\"> <a href=\"propertydetail.php?pid=" + aprpUid + "\" class=\"txtSmall txtBold txtDecorNone\">" + stxt[99] + "...</a> </div>";
retPLstSTr += "<div class=\"float-right\"><i class=\"nav-material-icons coll-menu-item txtClrHdr\" style=\"margin-right:4px;margin-top:2px;\">&#xe0b7;</i> <a href=\"contact.php?propid=" + aprpUid + "\" class=\"txtSmall txtBold txtDecorNone\">" + stxt[98] + "</a> </div>";
retPLstSTr += "</div>";
*/


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
retPLstSTr += "<span tid=\"dvCoFavBtn\" class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrDlg\" onclick=\"javascript:doRecentFavorite('index.html?pid=aa-show-prop&prpid=" + aprpObj._id + "','" + aprpTitle + "','noQvalue','" + aprpObj._id + "','btnFavs" + aprpObj._id + "');\"><i id=\"btnFavs" + aprpObj._id + "\" class=\"" + currFTclr + "\" alt=\"favorite\" title=\"favorite\" value=\"favorite\">&#xe87d;</i></span>";
// streetview link http://maps.google.com/maps?q=&layer=c&cbll=
tSrvLLstr = aprploclat + "," + aprploclng;
retPLstSTr += "<span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrDlg\" style=\"margin:2px;\"><a href=\"http://maps.google.com/maps?q=&layer=c&cbll=" + tSrvLLstr + "\"><i class=\"material-icons txtClrTtl\" alt=\"streetview\" title=\"streetview\" value=\"streetview\">&#xe56e;</i> Street View</a></span>";

 

retPLstSTr += "</div>"; // end bkgdClrWhite




retPLstSTr += "</div>"; // end featured-thumb-data shadow-one
retPLstSTr += "</div>"; // end featured-thumb hover-zoomer mb-4





retPLstSTr += "</div>";  // end col-md-6 col-lg-4
retPLstSTr += "<hr>";
return retPLstSTr;
}




 function doGenPrpPop(tCowRecInc) {
/*

*/

aTPrpObj = null;
aTPrpObj = currShopsArr[tCowRecInc];
aTPrpOstr = "";
aTPrpOstr = getPrpObjSTr(aTPrpObj);
// aTPrpOstr += rcL;

 JSSHOP.ui.popAndFillLbox(aTPrpOstr);



 }

 

var dmyFnishCntLoad = fnishCntLoad;
fnishCntLoad = function() {
  //  alert('fnishCntLoad');
  //  JSSHOP.ads.doGenericPlug('mpmenu',3,'dvPartLinks')

  // Use language-aware query as in x_index_main.js
 var newerQstr = "SELECT p.*, u.u_icon, u.u_fullname, COALESCE(pd_user.pd_prptitle, pd_def.pd_prptitle) AS pd_prptitle, COALESCE(pd_user.pd_prpdesc,  pd_def.pd_prpdesc)  AS pd_prpdesc FROM property p JOIN quser u ON p.uid = u._id LEFT JOIN propdescs pd_user ON pd_user.pd_prpid = p._id AND pd_user.pd_prptlng = '" +  usrlang + "' LEFT JOIN propdescs pd_def ON pd_def.pd_prpid = p._id AND pd_def.pd_prptlng = '" + deflang + "' WHERE p._id > 0 AND p.prtype = '5' and p.pprf_showftd = '5' ORDER BY RAND() LIMIT 20";

  doQComm(newerQstr, null, "doMPropsList");
  return dmyFnishCntLoad;
};