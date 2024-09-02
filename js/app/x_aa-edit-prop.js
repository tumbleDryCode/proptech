currIContent == "y"
var euiFFObjArr = null;
var euiFFObjArr = [];
var tmpOldFFvals = null;
var tmpOldFFvals = {};
var tmpSvBtnObj = null;
var tmpPrpLinksArr = null;
var tmpPrpLinksArr = [];
var fnshProdMDel = function(aa,bb,cc) { 
    // alert(bb);
    getPropImgs();
    JSSHOP.ui.closeLbox();
    
    };


    var fnshProdMDel = function(aa,bb,cc) { 
        // alert(bb);
        getPropImgs();
        JSSHOP.ui.closeLbox();
        
        };


var doPrdMDelete = function() { 
    if(confirm(stxt[42] + " " + stxt[19] + "?")) {
    procNuUIitem("qmedia","m_rtype",JSSHOP.shared.getFrmFieldVal("qmedia", "_id", 0),"0","fnshProdMDel");
    }
};



var fnshProdMMain = function(aa,bb,cc) { 
// alert(bb);
getPropImgs();
JSSHOP.ui.closeLbox();

};


var doPrdMMain = function() { 
if(confirm("Set as main product picture?" + JSSHOP.shared.getFrmFieldVal("qmedia", "m_file", 0))) {
procNuUIitem("property","pimage",prpid,JSSHOP.shared.getFrmFieldVal("qmedia", "m_file", 0),"fnshProdMMain");
    }
};
 

var getPrdImgEditDv = function(tpIncrNPI, tpFImg) {
tpPIEDv = document.createElement('div');
JSSHOP.shared.setFrmFieldVal("qmedia", "_id", tpIncrNPI);
JSSHOP.shared.setFrmFieldVal("qmedia", "m_file", tpFImg);
 
tmpRetStr = "<img src=\"admin/property/" + tpFImg +  "\" style=\"width: 100%\"  class=\"\" onclick=\"alert('" + JSSHOP.shared.getFrmFieldVal("qmedia", "_id", "0") + "');\">"
 try {
tmpRetStr += "<div class=\"dvTxtBtns\"><input type=\"button\" class=\"btnTxtLabel\" value=\"Set as Main\" onclick=\"javascript:doPrdMMain();\">   |   <input type=\"button\" class=\"btnTxtLabel\" value=\"Delete\" onclick=\"javascript:doPrdMDelete();\"></div>";
tmpRetStr += "<br><br>";
 
return tmpRetStr;
} catch(e) {
alert("getPrdImgEditDv " + e);
tmpRetStr = "oops. something wrong..";
return tmpRetStr;
}
};

var setSliderPropImgs = function(theAIa, theAIb, theAIc) {
    console.log("setPropImgs: " + theAIa + " " + theAIb + " " + theAIc);
    console.log("setPropImgs: " + theAIa + " " + theAIb + " " + theAIc);
    console.log("setPropImgs: " + theAIa + " " + theAIb + " " + theAIc);
	if(theAIb.indexOf("_id") != -1) {
		tAiretArr = JSON.parse(theAIb);
		var len = tAiretArr.length;
        tstr = "";
        iint = 0;
        while (iint < len) {
            tstr += "<div class=\"ls-slide\" data-ls=\"duration:7500; transition2d:5; kenburnszoom:in; kenburnsscale:1.2;\"> <img width=\"1920\" height=\"1080\"    src=\"admin/property/" + tAiretArr[iint]["m_file"] + "\" class=\"ls-bg\" alt=\"\" /> </div>";
 
 
			iint++;
		}
        tmpItDiv = document.createElement('span');
        tmpItDiv.innerHTML = tstr;
		// document.getElementById("single-property").innerHTML = tstr;
        document.getElementById("single-property").appendChild(tmpItDiv);
	}
	// alert(inpPropCtrct.value);
	
};

var doSwipe = function() {
    var swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    });
};




var getPropIEditDv = function(tpIncrNPI, tpFImg) {
	console.log("getPrdImgEditDv " + tpIncrNPI + " " + tpFImg);
tpPIEDv = document.createElement('div');
JSSHOP.shared.setFrmFieldVal("qmedia", "_id", tpIncrNPI);
JSSHOP.shared.setFrmFieldVal("qmedia", "m_file", tpFImg);
 
tmpRetStr = "<img src=\"admin/property/" + tpFImg +  "\" style=\"width: 100%\"  class=\"\" onclick=\"alert('" + JSSHOP.shared.getFrmFieldVal("qmedia", "_id", "0") + "');\">"
 try {
tmpRetStr += "<div class=\"dvTxtBtns\"><input type=\"button\" class=\"btnTxtLabel\" value=\"" + stxt[521] + "\" onclick=\"javascript:doPrdMMain();\">   |   <input type=\"button\" class=\"btnTxtLabel\" value=\"" + stxt[42] + "\" onclick=\"javascript:doPrdMDelete();\"></div>";
tmpRetStr += "<br><br>";
 
return tmpRetStr;
} catch(e) {
alert("getPrdImgEditDv " + e);
tmpRetStr = "oops. something wrong..";
return tmpRetStr;
}
};

var rndrPrpSocLnks = function(a,b,c) {
    console.log("rndrPrpSocLnks: " + a + " " + b + " " + c);
    tSocStr =  "<table style=\"width:100%;\">";
    for(var iint = 0; iint < tmpPrpLinksArr.length; iint++) {
        tMDstr = tmpPrpLinksArr[iint]["m_data"];
        if(tMDstr.length < 0) {
            tMDstr = "No description";
        }
        tSocStr += "<tr><td>" + tMDstr + "</td>";
        tSocStr += "<td><button  onclick=\"javascript:doPrpSocLnkDel(" + iint + "," + tmpPrpLinksArr[iint]._id + ");\" class=\"crsrPointer txtXLrg txtBold slmtable bkgdClrWhite brdrNone txtClrDrkGrn\"><i class=\"txtClrRed brdrClrWhite bkgdClrWhite menu-material-icons\" alt=\"delete\" title=\"delete\">&#xe92b;</i></button></td></tr>";
    }
    tSocStr += "</table>";
    document.getElementById("dvPrpSocLinks").innerHTML = tSocStr;
    JSSHOP.ui.setCBBClickClr(dvPrpSocLinks,'cls_button cls_button-medium brdrClrDlg txtClrHdr','txtClrHdr bkgdClrWhite', function(){JSSHOP.ui.closeLbox()});

};
        

var doPrpSocLnkDel = function(tmpCLindex, tmpQlid) {
    tPSLarr = null;
    tPSLarr = [];
    tPSLarr = removeArrElement(tmpPrpLinksArr, tmpCLindex);
    tmpPrpLinksArr = null;
    tmpPrpLinksArr = [];
    if(tmpCLindex > 0) {
    tmpPrpLinksArr = tPSLarr;
    }
    procNuUIitem("qmedia","m_rtype",tmpQlid,"0","rndrPrpSocLnks");
};

var setPropImgs = function(theAIa, theAIb, theAIc) {
	try {
        tmpPrpLinksArr = null;
        tmpPrpLinksArr = [];
        console.log("setPropImgs: " + theAIa + " " + theAIb + " " + theAIc);
        tSocStr = "";
    if(theAIb.indexOf("_id") != -1) {

		tAiretArr = JSON.parse(theAIb);
		var len = tAiretArr.length;
        tstr = "";
        
        iint = 0;
        while (iint < len) {
 
             tBsj = tAiretArr[iint];
            if(tAiretArr[iint]["m_catid"] == "5") {
            if(tAiretArr[iint]["m_file"] == c_logoimg.value) {
              tstr += "<div style=\"float:left\" class=\"crsrPointer brdrClrRed\">";
              
            } else {
			tstr += "<div style=\"float:left\" class=\"crsrPointer\">";
            }
 			tstr += "<img src=\"admin/property/" + tAiretArr[iint]["m_file_thumb"] + "\" class=\"icnmedbtn slmtable\" onclick=\"javascript:JSSHOP.ui.popAndFillLbox(getPropIEditDv('" + tAiretArr[iint]["_id"] + "','" + tAiretArr[iint]["m_file"] + "'));\">";
			tstr += "</div>";
        } else {
            tMDstr = tAiretArr[iint]["m_data"];
            if(tMDstr.length < 1) {
                tMDstr = "No description";
            }
            tmpPrpLinksArr.push(tAiretArr[iint]);
            // tSocStr += "<div>" + tMDstr + "</div>";
            tSocStr += "<tr><td>" + tMDstr + "</td>";
            tSocStr += "<td><button  onclick=\"javascript:doPrpSocLnkDel(" + iint + "," + tAiretArr[iint]["_id"] + ");\" class=\"crsrPointer txtXLrg txtBold slmtable bkgdClrWhite brdrNone txtClrDrkGrn\"><i class=\"txtClrRed brdrClrWhite bkgdClrWhite menu-material-icons\" alt=\"delete\" title=\"delete\">&#xe92b;</i></button></td></tr>";
 
        }
			iint++;
		} // end while
        
        tstr += "<div style=\"clear:both\"></div>";
		document.getElementById("dvProdImgs").innerHTML = tstr;
        if(tSocStr.length > 5) {
            tFllSocStr =  "<table style=\"width:100%;\">" + tSocStr + "</table>";

        document.getElementById("dvPrpSocLinks").innerHTML = tFllSocStr;
        
        }
	} // end if _id
    document.getElementById("dvPrpDVID").innerHTML = stxt[985] + " ID: " + prpid;
    document.getElementById("dvPrpDTtl").innerHTML = ptitle.value;

	} catch(e) {
		alert("setPropImgs: " + e);
	}
};

function fnishMMadd(aa,bb,cc) { 
    getPropImgs();
    JSSHOP.ui.closeLbox();
    };

var finishMPupload = function(theMMum) {
    try {
    

        image = null;
        image = new Image();
        image.src = "admin/property/s_thumb" + theMMum;
                // document.getElementById('dvPLogoImg').style.backgroundImage="url(images/slogos/s_thumb" + theMMum + ")"; 
                if(document.getElementById('dvProdImgs').innerText == "dvProdImgs") {
                // document.getElementById('dvPLogoImg').src = "admin/propert/s_thumb" + theMMum;
                JSSHOP.shared.setFrmFieldVal("qmedia", "m_file", theMMum);
                doPrdMMain();
                }
        // document.getElementById('dvPLogoImg').style.backgroundImage="url(images/slogos/s_thumb" + theMMum + ")";    
        document.getElementById("dvProdImgs").appendChild(image);
         JSSHOP.shared.setFrmFieldVal("qmedia", "m_file", theMMum);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_file_thumb", "s_thumb" + theMMum);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_coid", prpid);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_uid", quid);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_pid", prpid);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_dadded", JSSHOP.getUnixTimeStamp());

        tmpDOs = null;
        tmpDOs = {};
        tmpDOs["knvp"] = JSSHOP.shared.getFrmVals(document["qmedia"], "nada");
        oi = getNuDBFnvp("qmedia", 6, null, tmpDOs);
        doQComm(oi["rq"], null, "fnishMMadd");
    } catch(e) {
        alert("finishMPupload:" + e);
        }
    };

var getPropImgs = function() {
    tmpFobj = null;
    tmpFobj = {};
    tmpFobj["ws"] = "where m_pid=? and m_rtype=?";
    tmpFobj["wa"] = [prpid, 5];
	tmpFobj["o"] = "m_vala desc";
    oi = getNuDBFnvp("qmedia", 5, null, tmpFobj);
    doQComm(oi["rq"], null, "setPropImgs");
};

 
 function fnshPrpImgLd(theIMgNum)   {
    console.log("fnshPrpImgLd: " + theIMgNum);
  
}
function fillPpropFields() {
    JSSHOP.shared.setDynFrmVals(document["property"], "tmp_");
    istype = document.getElementById("tmp_stype");
iptype = document.getElementById("tmp_ptype");
iselPropStat = document.getElementById("tmp_pstatus"); 
JSSHOP.shared.addCurrSlctObj(svftObj["contract"], istype, stype.value, "noQvalue", "noQvalue");
JSSHOP.shared.addCurrSlctObj(svftObj["propstat"], iselPropStat, pstatus.value, "noQvalue", "noQvalue");
JSSHOP.shared.addCurrSlctObj(svftObj["proptype"], iptype, ptype.value, "noQvalue", "noQvalue");
tmp_pcontent.value = LZString.decompressFromEncodedURIComponent(pcontent.value);

getPropImgs();
currMediaID = prpid;
doMediaBtnSetup('uploadBtn', '', 'finishMPupload', 'property');
// doWinLoad();
JSSHOP.loadScript("js/tinymce/tinymce.min.js", loadTnyI, "js");
}
function doMPropForm(aaw,aww,cww) {
    console.log('doMPropForm - aww: ' + aww);
    theRetPArr = JSON.parse(aww);
    thePRetObj = theRetPArr[0];
    // alert("doMPropForm: " + thePRetObj);
// tmp_ptitle.value = thePRetObj.ptitle;
    //  JSSHOP.shared.setFrmVals("property",theRetPArr[0], fillPpropFields);
     for(var gkey in thePRetObj) {
      
        document["property"][gkey].value = thePRetObj[gkey];
        tmpOldFFvals[gkey] = thePRetObj[gkey];
 
        } 
setTimeout(function(){ fillPpropFields(); }, 300);
 
}


 

 /* editing and adding properties */
 


var fnshPrpAdd = function(a,b,c) {
    tncobj = null;
    tncobj = {};
// alert("fnshCoPgAdd: " + b);
if(b.indexOf("_id") != -1) {
// alert("fnshCoPgAdd: " + b)
tncobj = JSON.parse(b);
// alert("fnshCoPgAdd: " + tncobj[0]._id);
if(tncobj[0]._id) {
eindex("pid=aa-edit-prop", "pid=aa-edit-prop&prpid=" + tncobj[0]._id);
    }
}

};




var cbPrpedit = function(a,b,c) {
 
 
    


	if(currUrlArr.prpid) {

JSSHOP.ui.setCBBClickClr(tmpSvBtnObj,'cls_button cls_button-medium  bkgdClrDGreen txtClrWhite','cls_button cls_button-medium  bkgdClrHdr txtClrWhite', function(){tmpSvBtnObj.innerHTML=stxt[21];tmpSvBtnObj.disabled=false;});
} else {
 
        tDadded = JSSHOP.shared.getFrmFieldVal("property", "pdadded", 0);
        tmpDOs = {};
        tmpDOs["ws"] = "where uid=? and pdadded=?";
        tmpDOs["wa"] = [quid,tDadded];
        oi = getNuDBFnvp("property", 5, null, tmpDOs);
        doQComm(oi["rq"],"noQvalue","fnshPrpAdd");

 
 // doMLinkM('aa-edit-places', 'pid=aa-edit-places');
 }
};

var doNPropEdit = function() {

    JSSHOP.shared.setFrmFieldVal("property", "uid", quid);

    JSSHOP.shared.setFrmFieldVal("property", "pdadded", JSSHOP.getUnixTimeStamp());
    document.getElementById("uid").value = quid;
    tmpFobj = null;
    tmpFobj = {};
    tTMCcntStr = tinyMCE.activeEditor.getContent();
    tLZenced = LZString.compressToEncodedURIComponent(tTMCcntStr);
    tmp_pcontent.value = tLZenced;
    alert("tmp_pcontent.value: " + tmp_pcontent.value);
       // alert("c_whours.value: " + c_whours.value);
    tmpFobj["knvp"] = JSSHOP.shared.getNuKNVParr(JSSHOP.shared.getDynFrmVals(document["property"], "tmp_"), tmpOldFFvals);
 
    
    
if(currUrlArr.prpid) {
	    tmpFobj["ws"] = "where _id=?";
    tmpFobj["wa"] = [currUrlArr.prpid];
    oi = getNuDBFnvp("property", 7, null, tmpFobj);
    
} else {

	    oi = getNuDBFnvp("property", 6, null, tmpFobj);
}
alert("OI: " + oi["rq"]);
	// alert("OI: " + oi["rq"]);
    console.log("OI: " + oi["rq"]);
     doQComm(oi["rq"], null, "cbPrpedit");
};




function getTinyPropDesc() {
    // using tmpOldFFvals, create a descrtiptionof the property
    tTnyPropDSTr = "";
    tTnyPropDSTr += "<p><strong>" + tmpOldFFvals.ptitle + "</strong></p>";
    tTnyPropDSTr += "This property is located in " + tmpOldFFvals.pcity + ", " + tmpOldFFvals.pstate + " and is available for " + tmpOldFFvals.ptype + " " + tmpOldFFvals.pcontract + ". ";
    tTnyPropDSTr += "The property has " + tmpOldFFvals.bhk + " bedrooms and " + tmpOldFFvals.bhk + " bathrooms. ";
    tTnyPropDSTr += "The property is " + tmpOldFFvals.pstatus + " and was added on " + tmpOldFFvals.pdadded + ". ";
 
    tinyMCE.activeEditor.setContent(tTnyPropDSTr);

}
var doPropEdit = function() {
doNPropEdit();
}



var doPrpSType = function(tta, ttn, ttc) {
    alert("Saved");
};

var procPrpType = function(theTmpTCB) {

   if(theTmpTCB.checked) {
   JSSHOP.shared.setFrmFieldVal("property", "bhk", 5);
   procNuUIitem("property","bhk",currUrlArr.prpid,"5","doPrpSType");
   } else {
    JSSHOP.shared.setFrmFieldVal("property", "bhk", 1);
    procNuUIitem("property","bhk",currUrlArr.prpid,"1","doPrpSType");
   }
};



/* finish editing and adding properties */






var dmyFnishCntLoad = fnishCntLoad;
fnishCntLoad = function() {


tarfsb = nCurrFFieldOb();
tarfsb.fid = "btnAddPrpSoM";
tarfsb.fty = "button";
tarfsb.lid = "lbl_AddPrpSoM"; 
tarfsb.ltxt = stxt[625]; 
tarfsb.fcl = function() { doFBPostCntnt()  };
euiFFObjArr.push(tarfsb);

tafsb = nCurrFFieldOb();
tafsb.fid = "btnBIsave";
tafsb.fty = "button";
tafsb.fcl = function() { tmpSvBtnObj=this;JSSHOP.ui.setSaveBtnClick(this, function(){doPropEdit()}) };
euiFFObjArr.push(tafsb);

tcfsb = nCurrFFieldOb();
tcfsb.fid = "btnDEsave";
tcfsb.fty = "button";
tcfsb.fcl = function() { tmpSvBtnObj=this;JSSHOP.ui.setSaveBtnClick(this, function(){doPropEdit()}) };
euiFFObjArr.push(tcfsb);

tifsb = nCurrFFieldOb();
tifsb.fid = "btnPIsave";
tifsb.fty = "button";
tifsb.fcl = function() { tmpSvBtnObj=this;JSSHOP.ui.setSaveBtnClick(this, function(){doPropEdit()}) };
euiFFObjArr.push(tifsb);

tofsb = nCurrFFieldOb();
tofsb.fid = "btnLOsave";
tofsb.fty = "button";
tofsb.fcl = function() { tmpSvBtnObj=this;JSSHOP.ui.setSaveBtnClick(this, function(){doPropEdit()}) };
euiFFObjArr.push(tofsb);

tfok = nCurrFFieldOb();
tfok.fid = "tmp_bhk";
tfok.lid = "lbl_tmp_bhk"; 
tfok.ltxt = "Featured"; 
tfok.fcl = function() { procPrpType(document.getElementById("tmp_bhk")); };
euiFFObjArr.push(tfok); 

 
JSSHOP.shared.initFrmComps(euiFFObjArr);


    if(currUrlArr.prpid) {
  // alert('fnishCntLoad');
  JSSHOP.ui.showHideElement("dvPrpImgs", "show");
 tmpDOqs = null;
tmpDOqs = {};
tmpDOqs["ws"] = "where _id=?";
tmpDOqs["wa"] = [currUrlArr.prpid];
tmpDOqs["l"] = 45;
oia = getNuDBFnvp("property",5,null,tmpDOqs);
doQComm(oia["rq"], null, "doMPropForm");

    } else {
        JSSHOP.shared.setDynFrmVals(document["property"], "tmp_");
/**/
        istype = document.getElementById("tmp_stype");
        iptype = document.getElementById("tmp_ptype");
        iselPropStat = document.getElementById("tmp_pstatus"); 
        JSSHOP.shared.addCurrSlctObj(svftObj["contract"], istype, stype.value, "noQvalue", "noQvalue");
        JSSHOP.shared.addCurrSlctObj(svftObj["propstat"], iselPropStat, pstatus.value, "noQvalue", "noQvalue");
        JSSHOP.shared.addCurrSlctObj(svftObj["proptype"], iptype, ptype.value, "noQvalue", "noQvalue");
        
    }
    if(u_cat.value == "5") {
        JSSHOP.ui.showHideElement("dvBHKswitch", "show");
    }

// JSSHOP.shared.setDynFrmVals(document["property"], "tmp_");

// getPropImgs();
// doWinLoad();
// 
 
return dmyFnishCntLoad;
};

function loadTnyI() {
    JSSHOP.loadScript("js/tinymce/init-tinymce.min.js", donada, "js");
}



// facebook plugin functions

function setUFBPostCntnt(aaw,aww,cww) {
    console.log("setUFBPostCntnt: " + aaw + " " + aww + " " + cww);
    // JSSHOP.ui.popAndFillLbox("Facebook post added. " + aaw + " " + aww + " " + cww);
    document.getElementById("tmp_m_data").innerText = "";
    document.getElementById("tmp_m_file").innerText = "";
    // tmpPrpLinksArr.push(JSSHOP.shared.getDynFrmVals(document["qmedia"], "nada"));
    getPropImgs();
}

function doFBPostCntnt() {
    tInpInnerTxt = document.getElementById("tmp_m_file").innerText;
    tlowerUFBCUrl = tInpInnerTxt.toLowerCase();
    tMdata = document.getElementById("tmp_m_data").innerText; 
    if(tMdata.length < 1) {
        tMdata = "New Title";
    }
    if(tlowerUFBCUrl.indexOf("facebook.com") != -1) {
    tmpFobj = null;
    tmpFobj = {};
    JSSHOP.shared.setFrmFieldVal("qmedia", "m_catid", "10");
    JSSHOP.shared.setFrmFieldVal("qmedia", "m_data", tMdata);
    JSSHOP.shared.setFrmFieldVal("qmedia", "m_file", tInpInnerTxt);
    JSSHOP.shared.setFrmFieldVal("qmedia", "m_coid", prpid);
    JSSHOP.shared.setFrmFieldVal("qmedia", "m_uid", quid);
    JSSHOP.shared.setFrmFieldVal("qmedia", "m_pid", prpid);
    JSSHOP.shared.setFrmFieldVal("qmedia", "m_dadded", JSSHOP.getUnixTimeStamp());

    tmpDOs = null;
    tmpDOs = {};
    tmpDOs["knvp"] = JSSHOP.shared.getFrmVals(document["qmedia"], "nada");
    oi = getNuDBFnvp("qmedia", 6, null, tmpDOs);
    doQComm(oi["rq"], null, "setUFBPostCntnt");
    } else {
        JSSHOP.ui.popAndFillLbox("Invalid Facebook URL. Please try again.");
    }
}













// leaflet map functions map functions map functions map functions
// map functions
// map functions


var LeafIcon = L.Icon.extend({
    options: {
       
        iconSize:     [66, 66],

        iconAnchor:   [-1, -1],

        popupAnchor:  [-3, -16]
 
    }
});
var qlXDoPDetails = function(theDPResp) {
	try {
	
	theDPAesp = removeDiacritics(theDPResp);
	// alert("getDPRespStr: " + theDPResp);
	tDPRObj = JSON.parse(theDPAesp);
 
	console.log("getDPRespStr: " + JSON.stringify(tDPRObj));
	 
	
	 
	
	if(tDPRObj.address) {
	tAOBjVobj = tDPRObj.address;
	// qloga_name.value = tDPRObj.address;
	if(tAOBjVobj["amenity"]) {
	tName = tAOBjVobj["amenity"];
	}
	
	if(tAOBjVobj["postcode"]) {
	tzip = tAOBjVobj["postcode"];
	}
	if(tAOBjVobj["road"]) {
	tstreet = tAOBjVobj["road"];
	}
	if(tAOBjVobj["city_district"]) {
	tloc = tAOBjVobj["city_district"];
	}
	if(tAOBjVobj["city"]) {
	tloc = tAOBjVobj["city"];
	}
	if(tAOBjVobj["county"]) {
	tregion = tAOBjVobj["county"];
	}
	if(tAOBjVobj["country"]) {
	tcountry = tAOBjVobj["country"];
	}
	 
	if(tAOBjVobj["shop"]) {
	tname = tAOBjVobj["shop"] + " " + qlogp_location.value;
	} else if(tAOBjVobj["namedetails"]){
		if(tAOBjVobj["namedetails"]["name"]) {
		tname = ttAOBjVobj["namedetails"]["name"] + " " + qlogp_location.value;
	
		}  
	}  
	}
	if(tDPRObj.lat) {
		tlat  = tDPRObj.lat;
	}
	if(tDPRObj.lon) {
		tlng = tDPRObj.lon;
	}
 
 
	console.log("qlDoPDetails: " + JSON.stringify(tAOBjVobj));

	} catch(e) {
	alert("qlDoPDetails: " + e);
	}
	
	};


var qlXRunPDetails = function(thePDa,thePDResp,thePDc) {
	console.log("runPlaceDetails: " + thePDResp)
	try {
		tDPRObj = JSON.parse(thePDResp);
		if((tDPRObj.lat)  && (tDPRObj.lon)) {
			// alert("qlRunPDetails.lat: " + tDPRObj.lat + " lon: " + tDPRObj.lon)
			// JSSHOP.ui.popLboxMap(tDPRObj.lat, tDPRObj.lon);
		} else {
			// JSSHOP.ui.popLboxMap(tDPRObj.lat, tDPRObj.lon);
		}
		qlXDoPDetails(thePDResp);
	// JSSHOP.ui.popAndFillLbox(qlDoPDetails(thePDResp));
	} catch(e) {
	alert("runPlaceDetails: " + e);
	}
	};

var qlXShowPDetails = function(tPlaceIDXstr) {

	qlXRunPDetails(null, JSON.stringify(currSPRArr[tPlaceIDXstr]), null);
   };

 
   function getCPlcesLRes(thePSa,thePSResp,thePSc) {
	// alert("runPlacesSearch: " + thePSa + " " + thePSResp + " " + thePSc);
	// btnEUsave.disabled = false;
	mtImDSStr = "js/leaflet/images/marker-icon.png";
	mredIcon = new LeafIcon({iconUrl: mtImDSStr});
   	var options = { icon: mredIcon };
	currMapMrkrArr = null;
	currMapMrkrArr = "";
	currMapMrkrArr = [];

	 
	hasr = "n";
	fullstr = "";
	// alert("runPlacesSearch: " + thePSResp);
	farrToFill = JSON.parse(thePSResp);
	farrToFC = farrToFill;
	currSPRArr = null;
	currSPRArr = farrToFC;
	var len = farrToFC.length;
	console.log("farrToFC: " + JSON.stringify(farrToFC));
	var iint = 0;
	var pcid = 0;
	tstr = "";

	
	while(iint < len) {
	fcts = farrToFC[iint];


	tMrkr = null;
tMrkr = "";
tMrkr  = L.marker([fcts.lat, fcts.lon], options).bindPopup('<span class="txtBold txtClrRed"><a href="javascript:map.closePopup();">' + stxt[531] + '</a></span>');
currMapMrkrArr.push(tMrkr);
 
	iint++;
	}
    if(currMapMrkrArr.length > 0) {
	 popPlacesMap();
    } else {
        tSrchIval = document.getElementById("c_location").value;
    alert("No results found for: " + tSrchIval);
    }                                              
    // alert("runPlacesSearch: " + JSON.stringify(currMapMrkrArr));
    
	}

   function getPlcesLRes(thePSa,thePSResp,thePSc) {
	// alert("runPlacesSearch: " + thePSa + " " + thePSResp + " " + thePSc);
	// btnEUsave.disabled = false;
	mtImDSStr = "js/leaflet/images/marker-icon.png";
	mredIcon = new LeafIcon({iconUrl: mtImDSStr});
   	var options = { icon: mredIcon };
	currMapMrkrArr = null;
	currMapMrkrArr = "";
	currMapMrkrArr = [];

	 
	hasr = "n";
	fullstr = "";
	// alert("runPlacesSearch: " + thePSResp);
	farrToFill = JSON.parse(thePSResp);
	farrToFC = farrToFill;
	currSPRArr = null;
	currSPRArr = farrToFC;
	var len = farrToFC.length;
	console.log("farrToFC: " + JSON.stringify(farrToFC));
	var iint = 0;
	var pcid = 0;
	tstr = "";

	
	while(iint < len) {
	fcts = farrToFC[iint];


	tMrkr = null;
tMrkr = "";
tMrkr  = L.marker([fcts.lat, fcts.lon], options).bindPopup('<span class="txtBold txtClrRed"><a href="javascript:map.closePopup();">' + stxt[531] + '</a></span>');
currMapMrkrArr.push(tMrkr);
 
	iint++;
	}
    if(currMapMrkrArr.length > 0) {
	 popPlacesMap();
    } else {

        

        tSrchIval = document.getElementById("c_zipcode").value;

        tSrchIval += " " + document.getElementById("c_location").value;
        JSSHOP.ajax.doNuAjaxPipe("dvPSearch", "_p/osmgeo.php?qv=" + encodeURI(tSrchIval), getCPlcesLRes);

    }                                              
    // alert("runPlacesSearch: " + JSON.stringify(currMapMrkrArr));
    
	}




    
function doGenPEMap() {
    try {
iti = 0; 

xaCstr = document.getElementById('map').innerHTML;
  if(xaCstr.length > 4){
     
 console.log("Map Already Exists");
 // map.setView(new L.LatLng( ttLatStr,  ttLngStr),14);
return "OK";
 // currNavIcon = L.marker([ttLatStr, ttLngStr], options).bindPopup('<span class="txtBold txtClrRed"><a href="javascript:dropMrkr(o);">DROP</a></span>').addTo(map);
 // JSSHOP.ui.setMapMrkrs(currMapMrkrArr);
 // map.flyTo([ttLatStr, ttLngStr]);
  } else {
/*
destNum = Math.floor(Math.random() * 300);
tRAObj = xradars[destNum];
var tDestLat = tRAObj.lat;
var tDestLng = tRAObj.lng;


    var LeafIcon = L.Icon.extend({
        options: {
           
            iconSize:     [26, 26],
 
            iconAnchor:   [-1, -1],
 
            popupAnchor:  [-3, -16]
     
        }
    });


*/




    var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
 
/* not includinf these for now


// var     mqi = L.tileLayer("http://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png", {subdomains: ['otile1','otile2','otile3','otile4'], attribution: '&copy; <a href="http://www.mapquest.org/">MapQuest</a>'});
    // var mqi = L.tileLayer(mbUrl, {id: 'mapbox/satellite-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr});







var googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3'],
     attribution: '&copy; <a href="http://www.google.com/maps">Google Maps</a>'

});
    // map = L.map('map').setView([qlogc_lat.value, qlogc_lng.value], 12);

*/

corner1 = L.latLng(41, -9),
corner2 = L.latLng(36, -7),
themaxbounds = L.latLngBounds(corner1, corner2);

// generate-tiles bounds=--10,42.8,-6,36.6 minzoom=14 maxzoom=14 tilesdir=d:\www\htdocs\logipal\leaflet\tiles
map = L.map('map', {
    // center: [ttLatStr, ttLngStr],
    // set zoom level
    zoom: 14,
    minZoom: 6,
    maxZoom: 18,
    zoomControl: false,
    preferCanvas: false,
    // maxBounds: themaxbounds,
    zoomAnimation:false,
    fullscreenControl: true,
  fullscreenControlOptions: {
    position: 'topleft',
    content: '<img src="js/leaflet/images/full_screen.gif" width="95%" height="95%">'
  },
    layers: [osm]
});

// map.setView(new L.LatLng( ttLatStr,  ttLngStr),14);




    var baseMaps = {
            'OpenStreetMap': osm 


/*		
        'Goodle Streets': googleStreets,
        'Goodle Satellite': mqi,
        'Goodle Hybrid': googleHybrid,
*/
    };
/*
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
*/

    bounds = L.latLngBounds() // Instantiate LatLngBounds object

 // push currMapMrkrArr latlngs to bounds
 for (var i = 0; i < currMapMrkrArr.length; i++) {
 bounds.extend(currMapMrkrArr[i].getLatLng());
 }

    // zoom to the bounds
    map.fitBounds(bounds);
    // zoom out a little
    map.setZoom(map.getZoom() - 1);


 // layerControl = L.control.layers(baseMaps).addTo(map);







// routeControl.hide();
var helloPopup = L.popup().setContent('Hello World!');
var popup = L.popup({closeOnClick: false, autoClose: false, closeButton: true, autoPan: false });
popup.className = "brdrClrHdr";


 
 

//   var routeArray = new Array();
//   routeArray = routeControl.getWaypoints();

//   alert(JSON.stringify(routeArray));



 // map.flyTo([ttLatStr, ttLngStr]);

    var container = L.DomUtil.create('div'),
        startBtn = JSSHOP.ui.createLfButton('', container);
        L.DomEvent.on(startBtn, 'click', function(e) {
            document.getElementById("tmp_ploclat").value = currStartLat;
            document.getElementById("tmp_ploclng").value = currStartLng;
            // alert('f: ' + JSON.stringify(e));
            map.closePopup();
            JSSHOP.ui.closePopMenus();
            scrollToElement("tmp_ploclat");
            JSSHOP.ui.setCBBClickClr(document.getElementById("tmp_ploclat"),'cls_button cls_button-medium brdrClrDlg txtClrHdr',document.getElementById("tmp_ploclat").className, function(){void(0)});
        }); 
/**/
map.on('contextmenu', function(e) {
        currStartLat = e.latlng.lat;
        currStartLng = e.latlng.lng;
        startBtn.innerHTML = "";
        tmpSSpn = document.createElement('span');
        tTextNd = document.createTextNode("Set "  + e.latlng.lat + ", " + e.latlng.lng + "<br> as start point?"); 
        
        tmpSSpn.innerHTML = stxt[529] + ":<br>"  + e.latlng.lat + "<br>" + e.latlng.lng + "<br>" + stxt[530];
        startBtn.appendChild(tmpSSpn); 
        // console.log(getTileURL(e.latlng.lat, e.latlng.lng, map.getZoom()))
         // alert('f: ' + e.latlng.lat + ", " + e.latlng.lng);
    L.popup()
        .setContent(container)
        .setLatLng(e.latlng)
        .openOn(map);
});
 




        // var tInpT = document.getElementById('inpStrtLoc');
        // tInpT.value = qlogc_lat.value + ", " + qlogc_lng.value;
        // tInpT.focus();
        // routeControl.selectInputText(tInpT);
        // routeControl.spliceWaypoints(0, 1, new L.LatLng(qlogc_lat.value, qlogc_lng.value));



var mtImDSStr = "leaflet/images/tr6.gif";
var mredIcon = new LeafIcon({iconUrl: mtImDSStr});

 

var options = {
                        icon: mredIcon
                    };

JSSHOP.ui.setMapMrkrs(currMapMrkrArr);
                    // JSSHOP.ui.setMapMrkrs(currMapMrkrArr);
                // 	currNavIcon = L.marker([qlogc_lat.value, qlogc_lng.value], options).bindPopup('<span class="txtBold txtClrRed"><a href="javascript:dropMrkr(o);">DROP</a></span>').addTo(map);
             
 
                    return "OK";
// currNavIcon = L.marker([qlogc_lat.value, qlogc_lng.value]).addTo(map);
   //    setTimeout("dupe()", 1000);
// JSSHOP.loadScript("js/vrp/wasm-vrpcli.js", JSSHOP.checkLoader,"module");
  }// end of else container not null
    } catch(e) {

        return "ERR" + e
}
}
 
function popPlacesMap() {
// spinner.stop();
try {
    // currMapLatStr = tLocLat;
    // currMapLngStr = tLocLng;
    // currMapMrkrArr = new Array();
    // currMapMrkrArr.push([tLocLat, tLocLng]);



  
  
tmpLbox = document.getElementById('lightbox');
tmpLCbox = document.getElementById('dvSandMap');
tmpLbox.style.display="inline";

tmpLCbox.style.position="absolute";
tmpVheight = document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight;
if(tmpLCbox.clientHeight >= tmpVheight) {
// tmpLbox.style.position="absolute";
newel = document.createElement('div');
newel.innerHTML = "New Inserted";
tmpLCbox.appendChild(newel);
tmpLbox.style.height = tmpLCbox.clientHeight + 180;
}
tmpLCbox.style.display='block';
 

stop = getScrollTop() + 10;
tmpLCbox.style.top=stop+"px";
// scrollToElement("dvHdr");
// window.scrollTo(0,0);
// tmpLCbox.style.top="5px";
if(getViewportWidth() > 500) {}
iMdl = Math.round((getViewportWidth() - tmpLCbox.clientWidth) / 2);
tmpLCbox.style.left=iMdl+"px";

    tDGMretStr = doGenPEMap();
    if(tDGMretStr == "OK") {
        // tDGMF = window[thePLMFunc];
        // tDGMF();
    } else {
        alert("Error: " + tDGMretStr);
    }
// tmpLCbox.style.position="fixed";
tmpLCbox.width=tmpLCbox.width + 2;
setTimeout(function () {
    window.dispatchEvent(new Event('resize'));
}, 1000);
} catch(e) {
alert("popLboxMap: " + e);
}
}




function getPlaceCrdsM() {
    



    tCllLatVal = document.getElementById("tmp_ploclat").value;
    tCllLngVal = document.getElementById("tmp_ploclng").value;
    if((tCllLatVal.length > 5) && (tCllLngVal.length > 5)) {
        currMapMrkrArr = null;
        currMapMrkrArr = "";
        currMapMrkrArr = [];
        var LeafIcon = L.Icon.extend({
            options: {
               
                iconSize:     [34, 34],
        
                iconAnchor:   [-1, -1],
        
                popupAnchor:  [-3, -16]
         
            }
        });
        mtImDSStr = "js/leaflet/images/marker-icon.png";
        // mtImDSStr = dvPLogoImg.src;
        mredIcon = new LeafIcon({iconUrl: mtImDSStr});
           var options = { icon: mredIcon, closeOnClick: true };
   
        tMrkr = null;
        tMrkr = "";
        tMrkr  = L.marker([tCllLatVal, tCllLngVal], options).bindPopup('<span class="txtBold txtClrRed"><a href="javascript:map.closePopup();">' + stxt[531] + '</a></span>');
        currMapMrkrArr.push(tMrkr);
        popPlacesMap();
    } else {
        
var LeafIcon = L.Icon.extend({
    options: {
       
        iconSize:     [24, 24],

        iconAnchor:   [-1, -1],

        popupAnchor:  [-3, -16]
 
    }
});


    tRetErrSTr = "noQvalue";
    tFullRstr = "...";
    tStreetVal = document.getElementById("tmp_pstreet").value;
    tLocVal = document.getElementById("tmp_location").value;
    tZipVal = document.getElementById("tmp_pzipcode").value;
    if(tStreetVal.length < 2){
        tRetErrSTr = stxt[518];
        // tFullRstr += "<br>- " + tRetErrSTr;
    }
    if(tLocVal.length < 2) {
        tRetErrSTr = stxt[526];
        tFullRstr += "<br>- " + tRetErrSTr;
    }
    if(tZipVal.length < 2) {
        tRetErrSTr = stxt[80];
        tFullRstr += "<br>- " + tRetErrSTr;
    }
    if(tFullRstr.length > 5) {
        tClosePopSTr =  "<div onclick=\"JSSHOP.ui.closeLbox();\" class=\"slmtable txtClrRed txtBold brdrClrRed crsrPointer\" style=\"float:right\">" + stxt[804] + "</div>";

        tAFullRstr = tClosePopSTr + stxt[532] + "<br>" + tFullRstr;

        JSSHOP.ui.popAndFillLbox(tAFullRstr);
       return;
    } else {
    tSrchIval = tmp_pstreet.value + " " + tmp_location.value;
    //qlDoNuPlSearch("dvPSearch", "dvPSearch", "qlShowPlacesRes");
    JSSHOP.ajax.doNuAjaxPipe("dvPSearch", "_p/osmgeo.php?qv=" + encodeURI(tSrchIval), getPlcesLRes);
    }
    }
}