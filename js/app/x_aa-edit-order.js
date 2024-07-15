currPgTitle = stxt[47];
document.title = currPgTitle; 
var euiFFObjArr = null;
var euiFFObjArr = [];
currIContent = "no"; // ajax request to include the tplates/... file or not 

var tmpArrBchEO = [];

var tmpSQBArr = [];
var tmpVitemArr = [];
var tmpVindex = 0;

var showCurrImg = function() {
tmpIvaval = oi_vala.value;
if(tmpIvaval !== 'noQvalue') { 

if(isPhP == "no") {
tmpIstrI = "data:image/png;base64, " + tmpIvaval;
imgIedit.src=tmpIstrI;
} else {
if(tmpIvaval.indexOf(".") != -1) {
tmpIstrI = "images/pimgs/s_thumb" + tmpIvaval;	
imgIedit.src=tmpIstrI;
}  

}
}
};




var doCBciqtyedit = function(a, b, c) {
        JSSHOP.ui.setCBBClickClr(mmn,'cls_button cls_button-medium brdrClrDlg txtClrHdr','nanimenu', function(){ doMMenuLd() });
};

var doCIQtyEdit = function(doCBciqtyedit) {
JSSHOP.shared.setFrmFieldVal("qcartitem", "oi_dadded", JSSHOP.getUnixTimeStamp()); 
tmpDOs = null;
tmpDOs = {};
tmpDOs["ws"] = "where _id=?";
tmpDOs["wa"] = [qcid];
tmpDOs["knvp"] = JSSHOP.shared.getKNVParr(JSSHOP.shared.getDynFrmVals(document["qcartitem"], "tmp_"));
oi = getNuDBFnvp("qcat",7,null,tmpDOs);
doQComm(oi["rq"], null, "doCBcatedit");
};



var doNuItemDelete = function() {
 
    if(confirm(stxt[42] + " " + stxt[19] + "?")) {
    JSSHOP.ui.setCBBClickClr(dvCartItems,'cls_button cls_button-medium brdrClrDlg txtClrHdr','txtClrHdr bkgdClrWhite', function(){void(0)});
    procNuUIitem("qcartitem","oi_rtype",JSSHOP.shared.getFrmFieldVal("qcartitem", "_id", 0),"0","reloadCartItems");
    }
};

var doNuItemQtyEdit = function(tciID, tciCQ, tciOQ) {
 
    if(tciCQ !== tciOQ) {
    JSSHOP.ui.setCBBClickClr(dvCartItems,'cls_button cls_button-medium brdrClrDlg txtClrHdr','txtClrHdr bkgdClrWhite', function(){void(0)});
    procNuUIitem("qcartitem","oi_cartqty",tciID,tciCQ,"reloadCartItems");
    }
};
/*
* opens up the item popup
*/

var doItemCartPop = function() {
    loadJSModal("tplates/aa-mod-edit-cartitem.html");
}
var doCIedit = function(iei) {
    tmpVindex = iei;
	 
    JSSHOP.shared.setFrmVals("qcartitem",tmpVitemArr[iei],function() {doItemCartPop()});
};

/*
* returns the html link for product editing popup
*/
var getCIstr = function(rid, tmprhtml) {
    strTret = "<div>";
    strTret += tmprhtml + "</div>";

    return strTret;
};


/*
* renders all items in the category
*/

var renderNuTQBItems = function(a,b,c) {
	// alert("rendering: " + JSON.stringify(tmpVitemArr));
    // try { spinner.stop(); } catch(e) { alert(e); }
    tstr = "";
    iint = 0;
    ppint = 1;
	 cartTtl = 0;
    len = tmpVitemArr.length;
    strHtml = "";
      //      strHtml += "<div align=\"right\" style=\"align: right;\"><span class=\"txtBig txtClrDlg txtBold\">Qty:     Total:</span></div>";

    while (iint < len) {
        ts = tmpVitemArr[iint];
        strRecID = ts._id;
        strRecType = 50;





        if (ts._id > 0) {
 

	na = ts.oi_price_a - ts.oi_price_b;
	nd = Math.round((na / ts.oi_price_a) * 100);
	strPriceHtml = "";

      tmpATttl = ts.oi_price_b * ts.oi_cartqty;
      tmpTttl = tmpATttl.toFixed(2);
	cartTtl = cartTtl + tmpATttl;


            strPriceHtml = "";
 	
		if(ts.oi_img) {
		//  tmpIstrI = JSSHOP.shop.getPrdImgStr("editcat", ts.oi_img);
		}	


            strHtml += "<div class=\"collectionbrdr\">";
            strHtml += "<div class=\"collectionhdr\">";
  		strHtml += "<a class=\"txtDecorNone\" href=\"index.html?pid=aa-show-item&itemid=" + ts.oi_pid + "&cid=" + ts.oi_coid + "&catid=" + ts.oi_catid + "\">";

 		// strHtml += "<img src=\"" + tmpIstrI + "\" class=\"slmtable brdrClrDlg icndbtn\" style=\"align: center;text-align:center;margin:6px;\" align=\"absmiddle\">"
            strHtml +=  ts.oi_title; + "IG</a></div>";

            strHtml += "<div style=\"text-align:right;padding:8px\" class=\"bkgdClrANrml\">";
            // strHtml += "<div style=\"text-align:right;padding:8px\"  onclick=\"JSSHOP.ui.setCBBClickClr(this,'crsrPointer brdrClrHdr','crsrPointer brdrNone', function(){doCIedit(" + iint + ");});\" class=\"crsrPointer bkgdClrNrml\">";
 		// strHtml += "<img src=\"images/misc/icon_edit_washed.gif\" class=\"icnbtn\" style=\"align: center;text-align:center;margin:6px;\" align=\"absmiddle\">";

            strHtml += "<span style=\"margin-right: 20px\" class=\"txtSmall txtClrGrey\">" + ts.oi_price_b + " x </span>";
            strHtml += "<input type=\"number\" onchange=\"javascript:doNuItemQtyEdit('" + ts._id + "',this.value,'" + ts.oi_cartqty + "');\"  class=\"crsrPointer bkgdClrNrml brdrClrDlg txtBig txtBold txtClrDlg\" name=\"mod_oi_cartqty" + ts._id + "\" id=\"mod_oi_cartqty" + ts._id + "\"  value=\"" + ts.oi_cartqty + "\" style=\"max-width: 35px;\">";
            // strHtml += "";

            strHtml += "<span class=\"txtBig txtClrHdr txtBold\">" + tmpTttl + "</span>";
             strHtml += "</div>";
             strHtml += "</div>";
             strHtml += "<br>";
     

            // strHtml += "<div style=\" margin: 8px; border-bottom: 1px dashed #D1D5D1;\">"; 
	      // strHtml += "</div>";

 

 


 
            strHtml += "<input type=\"hidden\" id=\"prd" + 5 + iint + "\" value=\"\">";

 
            strHtml += "<input type=\"hidden\" name=\"item_name_" + ppint + "\" value=\"" +  ts.oi_title + "\">";
            strHtml += "<input type=\"hidden\" name=\"item_number_" + ppint + "\" value=\"" +  ts._id + "\">";
            strHtml += "<input type=\"hidden\" name=\"quantity_" + ppint + "\" value=\"" + ts.oi_cartqty + "\">";
            strHtml += "<input type=\"hidden\" name=\"amount_" + ppint + "\" value=\"" + ts.oi_price_b + "\">";

        }
	  ppint++;
        iint++;
    }
    if (tmpVitemArr[0]) {
 
      strHtml += "<div>Total:" + cartTtl.toFixed(2) + "</div>"; 
   } else {
      strHtml += "<div>" + stxt[34] + "</div>";
	strHtml += "<div class=\"collection-item txtSmall txtBold\">Recent:<br>" + currRcntActHstr + "</div>";

      // JSSHOP.ui.toggleVisibility("dvBtnsCart");



    }



 
newel = document.createElement('div');
newel.className = "slmtblpadding";
newel.innerHTML = strHtml;
tmpTDQI = document.getElementById("includedContent");
tmpTDQI.innerHTML = "";
tmpTDQI.appendChild(newel);


aqtMstr = JSSHOP.ui.doMsgList("nada", JSON.stringify(currMsgsIArr), "doNada");
aqbnewel = document.createElement('div');
aqbnewel.innerHTML = aqtMstr;
tmpTDQI.appendChild(aqbnewel);



};


 


var doCItemEdit = function() {
    JSSHOP.ui.closeLbox();
    tmpFarr = null;
    tmpFarr = JSSHOP.shared.setArrVals(tmpVitemArr, tmpVindex, JSSHOP.shared.getDynFrmVals(document["qcartitem"], "mod_"));

    tmpVitemArr = null;
    tmpVitemArr = [];
    tmpVitemArr = tmpFarr;
    JSSHOP.shared.setFrmFieldVal("qcartitem", "oi_dadded", JSSHOP.getUnixTimeStamp()); 
    tmpFobj = null;
    tmpFobj = {};
    tmpFobj["knvp"] = JSSHOP.shared.getKNVParr(JSSHOP.shared.getDynFrmVals(document["qcartitem"], "mod_"));
    tmpFobj["ws"] = "where _id=?";
    tmpFobj["wa"] = [JSSHOP.shared.getFrmFieldVal("qcartitem","_id","0")];
    oi = getNuDBFnvp("qcartitem", 7, null, tmpFobj);
    // JSSHOP.ui.setCBBClickClr(tblCntEditItem,'cls_button cls_button-medium brdrClrDlg txtClrHdr','txtClrHdr bkgdClrWhite', function(){JSSHOP.ui.closeLbox()});
    JSSHOP.ui.setCBBClickClr(dvCartItems,'cls_button cls_button-medium brdrClrDlg txtClrHdr','txtClrHdr bkgdClrWhite', function(){void(0)});
    doQComm(oi["rq"], null, "renderNuTQBItems"); 
 
 
};



var doItemDelete = function(theElem, qid, theRid) {
    carr = tmpVitemArr[qid];
    narr = removeArrElement(tmpVitemArr, theRid);
    theElem.parentNode.parentNode.parentNode.deleteRow(theRid);
    tmpVitemArr = null;
    tmpVitemArr = narr;
    JSSHOP.ui.setCBBClickClr(dvCartItems,'cls_button cls_button-medium brdrClrDlg txtClrHdr','txtClrHdr bkgdClrWhite', function(){JSSHOP.ui.closeLbox()});
    procNuUIitem("qcartitem","oi_rtype",qid,"0","renderNuTQBItems") 
 
};
 

var fnishClearCart = function(thefCCObj,b,c) {
// alert("fnishClearCart: " + b);
newel = document.createElement('div');
newel.innerHTML = "Cart Cleared<br>";
newel.innerHTML += "<div>" + stxt[34] + "</div>";
newel.innerHTML += "<div class=\"collection-item txtSmall txtBold\">Recent:<br>" + currRcntActHstr + "</div>";

tmpTDQI = document.getElementById(thefCCObj);
tmpTDQI.innerHTML = "";
tmpTDQI.appendChild(newel);
JSSHOP.ui.toggleVisibility("dvBtnsCart");
tmpIval = setCartIArr("y", "[]", "d");
};


var clearCart = function(theCCObj) {
    if(confirm(stxt[52] + " " + stxt[47] + "?")) {
    tmpDOs = null;
    tmpDOs = {};
tmpSobj = null;
tmpSobj = {};
tmpVpar = null;
tmpVpar = [];
    tmpSobj["t"] = "oi_rtype";
    tmpSobj["v"] = "0";
    tmpVpar.push(tmpSobj);
	tmpDOs["knvp"] = tmpVpar;

    tmpDOs["ws"] = "where oi_uid=? and oi_coid=? and oi_cartqty >? and oi_rtype=? and oi_cartid=?";
    tmpDOs["wa"] = [quid,cid,0,5,cartID]; 
 
    oi = getNuDBFnvp("qcartitem",7,null,tmpDOs);
    doQComm(oi["rq"], theCCObj, "fnishClearCart");
    }

};
 

/*
* Process cart
*/

var doProcCart = function() {
qStr = "insert into qordereditem(_id,oi_rtype,oi_uid,oi_cartid,oi_coid,oi_pid,oi_title,oi_price_a,oi_price_b,oi_dimen_n,oi_dimen_v,oi_cartqty,oi_vala,oi_valb,oi_dadded)";
qStr += " select _id,oi_rtype,oi_uid,oi_cartid,oi_coid,oi_pid,oi_title,oi_price_a,oi_price_b,oi_dimen_n,oi_dimen_v,oi_cartqty,oi_vala,oi_valb,oi_dadded from qcartitem";
qStr += " where oi_uid= " + quid + " and oi_coid= " + cid + " and oi_cartqty > 0;";
doQComm(qStr, null, "retProcCart");
};



/*
* submit the send order form
*/

var sendAAAAAOrder = function() {
tmpRstr = "http://localhost/evenflow/webdroid/assets/quickorder/index.html?pid=aa-show-thks&ppid=" + ppid + "&cid=" + cid + "&c=" + cartID;
JSSHOP.shared.setFrmFieldVal("orderform","return",tmpRstr);
JSSHOP.shared.setFrmFieldVal("orderform","cancel",tmpRstr);
JSSHOP.shared.setFrmFieldVal("orderform","notify_url","http://localhost/evenflow/webdroid/assets/quickorder/_p/pp_notify.php");
JSSHOP.shared.setFrmFieldVal("orderform","custom",cartID);
// alert(tmpRstr);
JSSHOP.ui.setfaction('orderform',true,null);
};


var showUinfo = function(aa,theResp,c) {

atmpRetStr = "<div><br><span class=\"txtBold txtBig txtClrHdr\">" + "User Info" + ":</span><br>";
tmoiiint = 0;
tmpIvar =  JSON.parse(theResp);
tmpTvar = null;
tmpTvar = {};
tmpTvar = tmpIvar[0];
for(var gkey in tmpTvar) {
switch(gkey) {
case "_id":
atmpRetStr += "<span class=\"txtBold txtClrRed\">" + gkey + ":</span> <span>" + tmpTvar[gkey] +  "</span><br>";
break;
case "o_vala":
gkey = "Total";
atmpRetStr += "<span class=\"txtBold txtClrHdr\">" + gkey + ":</span> <span>" + tmpTvar[gkey] +  "</span><br>";
break;
default:
atmpRetStr += "<span class=\"txtBold\">" + gkey + ":</span> <span>" + tmpTvar[gkey] +  "</span><br>";
break;
} 
}
atmpRetStr += "</div><br>";
document.getElementById(aa).innerHTML = atmpRetStr;

};

var showOinfo = function(at,theResp,c) {

atmpRetStr = "<div><br><span class=\"txtBold txtBig txtClrHdr\">" + "Order Info" + ":</span><br>";
tmoiiint = 0;
tmpIvar =  JSON.parse(theResp);
tmpTvar = null;
tmpTvar = {};
tmpTvar = tmpIvar[0];
for(var gkey in tmpTvar) {
 switch(gkey) {
case "_id":
atmpRetStr += "<span class=\"txtBold txtClrRed\">" + gkey + ":</span> <span>" + tmpTvar[gkey] +  "</span><br>";
break;
case "o_vala":
tmpTstr = tmpTvar[gkey];
atmpRetStr += "<span class=\"txtBold txtClrHdr\">" + "Total" + ":</span> <span>" + tmpTstr +  "</span><br>";
break;
default:
atmpRetStr += "<span class=\"txtBold\">" + gkey + ":</span> <span>" + tmpTvar[gkey] +  "</span><br>";
break;
} 
}
 
atmpRetStr += "</div><br><span class=\"txtBold txtBig txtClrHdr\">Order:</span><br>";

document.getElementById(at).innerHTML = atmpRetStr;

};


var renderBtchIts = function(aa,bb,cc) {
 
// var renderDBis = function(theElem, theResp, marble) {
    //  alert("renderDBis: " + theTmpCORobj.rs);
    tmpVitemArr = null;
    tmpVitemArr = [];
    tmpVitemArr = JSON.parse(bb);
    renderNuTQBItems(null,tmpVitemArr,null);
};

var renderDBis = function(theTmpCORobj) {
 
// var renderDBis = function(theElem, theResp, marble) {
    //  alert("renderDBis: " + theTmpCORobj.rs);
    tmpVitemArr = null;
    tmpVitemArr = [];
    tmpVitemArr = JSON.parse(theTmpCORobj.rs);
    renderNuTQBItems(null,tmpVitemArr,null);
};

var setCIcache = function(theTmpCORobj) {

    tmpIval = setCartIArr("y", theTmpCORobj.rs, "y");
    renderDBis(theTmpCORobj);
};
 
var reloadCartItems = function() {
try {
	tOid = "0";
	tOcartid = "0";
	tOcartuid = "0"; 
	tOcoid = "0"; 
	tmpPIDUrl = getCurrUrl();
if(tmpPIDUrl == "noQvalue") {
} else {
tmpcurrUrlArr = JSSHOP.shared.urlToArray(tmpPIDUrl); 
if(tmpcurrUrlArr.ocoid){
tOcoid = tmpcurrUrlArr.ocoid;
}
if(tmpcurrUrlArr.ocartuid){
tOcartuid = tmpcurrUrlArr.ocartuid;
    tmpDOs = null;
    tmpDOs = {};
    tmpDOs["ws"] = "where _id=?";
    tmpDOs["wa"] = [tOcartuid]; 
    oi = getNuDBFnvp("quser",5,null,tmpDOs);
    doDynQArrComm(tmpArrBchEO, oi["rq"], "dvUinfo", "showUinfo");
	// doDynQArrComm(tmpArrBchEO, oi["rq"], "quser", "showUinfo");
}
if(tmpcurrUrlArr.oid){
tOid = tmpcurrUrlArr.oid;
    tmpDOs = null;
    tmpDOs = {};
    tmpDOs["ws"] = "where _id=?";
    tmpDOs["wa"] = [tOid]; 
    oi = getNuDBFnvp("qorder",5,null,tmpDOs);
    doDynQArrComm(tmpArrBchEO, oi["rq"], "dvOinfo", "showOinfo");
    // doDynQArrComm(tmpArrBchEO, oi["rq"], "qorder", "showOinfo");

}
if(tmpcurrUrlArr.ocartid){
tOcartid = tmpcurrUrlArr.ocartid;
    tmpDOs = null;
    tmpDOs = {};
    tmpDOs["ws"] = "where oi_uid=? and oi_coid=? and oi_cartid=?";
    tmpDOs["wa"] = [tOcartuid,tOcoid,tOcartid]; 
    oi = getNuDBFnvp("qordereditem",5,null,tmpDOs);
    doDynQArrComm(tmpArrBchEO, oi["rq"], "renderBtchIts", "renderBtchIts");
    // doDynQArrComm(tmpArrBchEO, oi["rq"], "qordereditem", "renderBtchIts");
}

}

 
 

 
//alert(JSON.stringify(tmpArrBchEO));
doEOBQ = nCurrCnxOb();
doEOBQ["q"] = "batch" + JSON.stringify(tmpArrBchEO);
//alert("doFrmQLoad:  " + JSON.stringify(currFrmQArr));
doCFrmQ["cb"] = "fnish";
 // doNurQComm(doCFrmQ);

doQComm("batch" + JSON.stringify(tmpArrBchEO), null, "fnish");

} catch(e) {
document.getElementById("includedContent").innerHTML = e;
}
};



var dmyFnishCntLoad = fnishCntLoad;
fnishCntLoad = function() {
tmpTDQI = document.getElementById("includedContent");

tmptd = document.createElement('div');
tmptd.className = "slmtblpadding";
newel = document.createElement('div');
newel.id = "dvUinfo"; 
newel.innerHTML = "...";

tmptd.appendChild(newel);



tmpPN = tmpTDQI.parentNode;
// tmpPN.insertBefore(newel, tmpPN.childNodes[0]);

onewel = document.createElement('div');
onewel.id = "dvOinfo"; 
onewel.innerHTML = "...";
tmptd.appendChild(onewel);

tmpPN.insertBefore(tmptd, tmpPN.childNodes[0]);

// tmpPPemalstr = JSSHOP.shared.getFrmFieldVal("qco","c_email","change_this_in_shop_info@to_your_paypal.email");
// JSSHOP.shared.setFrmFieldVal("orderform","business",tmpPPemalstr);
// alert(JSSHOP.shared.getFrmFieldVal("orderform","business","change_this_in_shop_info@to_your_paypal.email"));
setTimeout("reloadCartItems()", 590);
// renderDBis(currCartIArr[0]);
//     tmpVitemArr = null;
//    tmpVitemArr = [];
 //   tmpVitemArr = currCartIArr;
// renderNuTQBItems(null,currCartIArr,null);


};

