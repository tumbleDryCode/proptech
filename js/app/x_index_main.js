


 
function doPrpMDDSlct(apld, aaw,aww,cww) {
  tPsLctPlObj = null;
  tPsLctPlarr = [];
  tDDiid = "";
  tDDiidx = "";
  if(apld.indexOf(":") != -1) {
      tPsLctPlarr = apld.split(":");
      tDDiid = tPsLctPlarr[0];
      tDDiidx = tPsLctPlarr[1];
      }

  console.log('doPrpMDDSlct: ' +  apld + " :: " + aaw + " :: " + aww);
 switch(aww) {
  case "edit":
    // alert('doPrpMDDSlct - edit');
    eindex('aa-edit-prop', 'pid=aa-edit-prop&prpid=' + tDDiid);
    break;
  case "view":
     eindex('aa-show-prop', 'pid=aa-show-prop&prpid=' + tDDiid);
    break;
  case "share":
    JSSHOP.ui.showShareBox('property',  tDDiidx);
    break;
  case "msg":
    JSSHOP.ui.showMsgBox('uproperty', tDDiidx, 'showMsgSave');
    break;
  case "fav":
    doRecentFavorite('index.html?pid=aa-show-prop&prpid=' + tDDiid, 'noQvalue', 'noQvalue', tDDiid, 'btnFavs' + tDDiid);
    break;
  case "streetview":
    tPropObj = currShopsArr[tDDiidx];
    tSrvLLstr = tPropObj.ploclat + "," + tPropObj.ploclng;
    window.open("http://maps.google.com/maps?q=&layer=c&cbll=" + tSrvLLstr);
    break;
  default:
    alert('doPrpMDDSlct - default');
    break;

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
 aprpContent = aprpObj["pd_prpdesc"];
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
// alert('doMPropsList - aaw: ' + aaw);
// JSSHOP.ads.doGenMapShow();
tUFObj = {};
tUFObj["uplmt"] = 15;
tUFObj["upcb"] = "jshp_ads_showUpdtsFeed";
 JSSHOP.ads.doUpdatesFeed(tUFObj);
 JSSHOP.ads.doGenericPlug('mpmenu',3,'dvPartLinks')
 }


function showUpdatesFeed(aaw,aww,cww) {
 // JSSHOP.ui.setTinnerHTML("dvMainUdtsLst",aww);
};


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
retPLstSTr += "<div  onclick=\"javascript:eindex('aa-show-prop','pid=aa-show-prop&prpid=" + aprpObj._id + "')\" class=\"crsrPointer\"><img alt=\"Profile\" src=\"images/user/" + aprpObj.u_icon + "\"  class=\"icnRndDSmUser\" align=\"absmiddle\"><br><span class=\"txtSmall txtClrGrey\">Edit</span></div>";
retPLstSTr += "</td><td>";
retPLstSTr += "<h5 class=\"text-secondary hover-text-primary text-capitalize\" style=\"margin-bottom:0px;\"><a href=\"javascript:eindex('aa-show-prop','pid=aa-show-prop&prpid=" + aprpObj._id + "')\">" + aprpTitle + "</a></h5>";
 retPLstSTr += "<table style=\"width:100%;\"><tbody><tr><td><i class=\"small-material-icons coll-menu-item txtClrHdr txtBold\" alt=\"location_on\" title=\"Location\" style=\"verticle-align:middle;color:#dbddd9;\">&#xe55c;</i></td><td><span class=\"txtSmall txtBold txtClrHdr\">" + aprpLocation + "</span></td><td style=\"text-align:right;\" nowrap=\"nowrap\"><div class=\"price text-primo\" style=\"margin-right:10px;\"><span class=\"text-primary txtSmall\">&euro;</span>&nbsp;&nbsp;<b>" + aprpPrice + "</b></div></td></tr></tbody></table>";
 
retPLstSTr += "</td></tr></table>";

 retPLstSTr += "<div class=\"featured-thumb hover-zoomer mb-4\">";
retPLstSTr += "<div class=\"overlay-black overflow-hidden position-relative crsrPointer\" onclick=\"javascript:eindex('aa-show-prop','pid=aa-show-prop&prpid=" + aprpObj._id + "')\"> <img src=\"" +  currPrpImgsFldr + "/" + aprpPimage + "\" alt=\"pimage\" class=\"img100p\">";
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
retPLstSTr += "<span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrClrDlg txtClrDlg\" style=\"margin:2px;\" onclick=\"JSSHOP.ads.getUPrpAprsStr(" + istrt + ");\"><i class=\"material-icons txtClrTtl\" alt=\"chat\" title=\"messages\" value=\"messages\">&#xe0b7;</i></span>";
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
 // 
 tmpDOqs = null;
tmpDOqs = {};
tmpDOqs["ws"] = "where _id>?";
tmpDOqs["wa"] = [0];
tmpDOqs["l"] = 4;
tmpDOqs["o"] = " order by rand()";
oia = getNuDBFnvp("property",5,null,tmpDOqs);
newQstr = "select * from property where _id > 0 limit 45";
// newQstr also grabs user icon from quser  u_icon field
newQstr = "select p.*, u.u_icon, u.u_fullname from property p, quser u where p._id > 0 and p.uid = u._id  order by rand() limit 20";

  newQstr = "select p.*, u.u_icon, u.u_fullname, pd.pd_prptitle, pd.pd_prpdesc from property p, quser u, propdescs pd where p._id > 0 and p.uid = u._id and pd.pd_prpid = p._id and pd.pd_prptlng = '" +  usrlang + "' order by rand() limit 20";
// also get property title and description from propdescs where propdescs.pd_prpid = p._id and propdescs.pd_lang = userLang or propdescs.pd_lang = deflang
newQstr = "select p.*, u.u_icon, u.u_fullname, pd.pd_prptitle, pd.pd_prpdesc from property p, quser u, propdescs pd where p._id > 0 and p.uid = u._id and pd.pd_prpid = p._id and (pd.pd_prptlng = '" +  usrlang + "' or pd.pd_prptlng = '" + deflang + "') order by rand() limit 20";

 doQComm(newQstr, null, "doMPropsList");
return dmyFnishCntLoad;
};