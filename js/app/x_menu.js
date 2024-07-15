var tmpSTrSorE = "show";
var currMenuTStr = "n";

if(currAdmnMode == "y") {
tmpSTrSorE = "edit";
}

var doMainTreeLoad = function() {
taqstr = "";
 
// taqstr += "<a class=\"txtDecorNone txtClrHdr txtBold\" href=\"index.html\">" + stxt[204] + "</a> | </span>";
// taqstr += "<a class=\"txtDecorNone txtClrHdr txtBold\" href=\"index.html?pid=" + stxt[209] + "\">" + stxt[208] + "</a> | </span>";
// taqstr += "<a class=\"txtDecorNone txtClrHdr txtBold\" href=\"javascript:JSSHOP.ajax.doAjaxGVals('index_main', 'pid=index_main');\">" + stxt[204] + "</a><span class=\"txtSmall txtClrGrey\"> | </span>";
taqstr += "<a class=\"txtDecorNone	 txtClrHdr txtBold\" href=\"index.html\">" + stxt[204] + "</a><span class=\"txtSmall txtClrGrey\"> | </span>";

// taqstr += "<a class=\"txtDecorNone txtClrHdr txtBold\" href=\"javascript:eindex('aa-show-makes', 'pid=aa-show-makes');\">" + stxt[206] + "</a>";
taqstr += "<a class=\"txtDecorNone txtClrHdr txtBold\" href=\"index.html?pid=aa-show-makes\">" + stxt[206] + "</a>";

 taqstr += "<a class=\"txtDecorNone txtClrHdr txtBold\" href=\"index.html?content=" + stxt[201] + "\">" + stxt[200] + "</a> | </span>";
 taqstr += "<a class=\"txtDecorNone txtClrHdr txtBold\" href=\"index.html?content=" + stxt[203] + "\">" + stxt[202] + "</a> | </span>";
// return taqstr; 
JSSHOP.ui.setTinnerHTML("dvMCatTree", taqstr);
};

var doCatTreeLoad = function() {
console.log("doCatTreeLoad: ");
if(pid.indexOf("edit-") != -1) {
} else if(cid == 0) {
// doProdCatTreeLoad();
doMainTreeLoad();
} else {
doProdCatTreeLoad();
}
};


var doRecambyMenuLoad = function() {
// alert("doRecambyMenuLoad : ");
try {
tmpRdiv = document.createElement("div");
tmpRdiv.innerHTML = doCollsLoad();
// document.getElementById("mnuT").appendChild(tmpRdiv);
// doProdCatTreeLoad();
} catch(e) {
alert("doRecambyMenuLoad: " + e);
} 
};


var doProdCatTreeLoad = function() {

try {
tmpCatPid = 0;
tmpCatPid = document.getElementById("cat_pid").value;

arrToFill = null;
arrToFill =  [];
// alert("doProdCatTreeLoad: " + JSON.stringify(currMenuArr));
arrToFill = currMenuArr;
var tmpLsr = "";
var len = arrToFill.length;
var iint = 0;
var pcid = 0;
tmpMCatstr = "";
tmpSubCatstr = "";
tstr = "";
while(iint < len) {
ts = arrToFill[iint];

switch(ts._id) {
case catid:
tstr += "<a class=\"txtDecorNone txtClrHdr txtBold\" href=\"index.html?pid=aa-" + tmpSTrSorE + "-category&cid=" + ts.cat_coid + "&catid=" + ts._id + "\">" + ts.cat_title + "</a> | </span>";
break;
case tmpCatPid:
tstr += "<a class=\"txtDecorNone\" href=\"index.html?pid=aa-" + tmpSTrSorE + "-category&cid=" + ts.cat_coid + "&catid=" + ts._id + "\">" + ts.cat_title + "</a> | </span>";
break;

default:
if(ts.cat_pid == tmpCatPid) {
tstr += "<a class=\"txtDecorNone txtClrRed\" href=\"index.html?pid=aa-" + tmpSTrSorE + "-category&cid=" + ts.cat_coid + "&catid=" + ts._id + "\">" + ts.cat_title + "</a> | </span>";
}
if(ts.cat_pid == catid) {
// tstr += "<a class=\"txtDecorNone txtClrDlg\" href=\"index.html?pid=aa-" + tmpSTrSorE + "-category&cid=" + ts.cat_coid + "&catid=" + ts._id + "\">" + ts.cat_title + "</a> | </span>";
}
// tstr += "";
break;
}
 
iint++;
}


// not in any category
// in main category
// in sub category

 
JSSHOP.ui.setTinnerHTML("dvMCatTree", tstr);
// doMainTreeLoad();
} catch(e) {
alert("doCatTreeLoad: " + e);
} 
};
var doSubMenuLoad = function() {
	console.log("doSubMenuLoad.try doGOldSubMenuLoad");
	doGOldSubMenuLoad();
};

var doGOldSubMenuLoad = function() {
	console.log("doGOldSubMenuLoad.pid: " + pid);
try {
arrToFill = null;
arrToFill =  [];
// alert(JSON.stringify(currMenuArr));
arrToFill = currMenuArr;
var tmpLsr = "";
var len = arrToFill.length;
var iint = 0;
var pcid = 0;
while(iint < len) {
ts = arrToFill[iint];



// currMenuArr.push(ts);

if(ts.cat_pid == ts.cat_id) {
} else {
crMI = "mnuI" + ts.cat_pid;

    var ul = document.getElementById(crMI);

     var li = document.createElement("li");
	li.className="omenuartigo";
    // var children = ul.children.length + 1
    // li.setAttribute("id", "element"+children)

var a = document.createElement('a');
var linkText = document.createTextNode(ts.cat_title);
a.appendChild(linkText);
a.title = ts.cat_title;
// a.href = "index.html?pid=aa-" + tmpSTrSorE + "-category&ppid="+ts._id+"&cid="+ts.cat_coid+"&catid="+ts.cat_id;
if(pid.indexOf("edit-") != -1){
tmpSTrSorE = "edit";
} else {
tmpSTrSorE = "show";
}
a.href = "javascript:eindex('aa-" + tmpSTrSorE + "-parts-category','pid=aa-" + tmpSTrSorE + "-parts-category&ppid="+ts.cat_pid+"&cid="+ts.cat_coid+"&catid="+ts.cat_id + "');";


    li.appendChild(a);
    ul.appendChild(li);
   //tmpUstr = "<li><a href=\index.html?pid=aa-add-qbit&ppid="+ts._id+"&cid="+ts.cat_coid+"\">"+ts.cat_title+"</a></li>";
   // ul.append(tmpUstr);

}

 
currCoCatsStr += ts._id + ":";
iint++;
}
 

 
 // doCatTreeLoad();
} catch(e) {
 
alert("doSubMenuLoad: " + e);
}  
};

var getMMenu = function() {
      var tmpmainUL = document.createElement("ul");
	tmpmainUL.className="animenu__nav";
      tmpLI = document.createElement("li");
	tmpLI.className="omenuartigo";	
	tmpA = document.createElement('a');


	if(pid.indexOf("edit-") != -1){
		linkText = document.createTextNode(stxt[503]);
	tmpA.title = stxt[503];
	if(c_category.value == "101") {
	tAHRSTR = "javascript:eindex('aa-edit-svs-categories','pid=aa-edit-svs-categories&cid=" + cid + "&catid=" + catid + "');";
	} else {
	tAHRSTR = "javascript:eindex('aa-edit-parts-categories','pid=aa-edit-parts-categories&cid=" + cid + "&catid=" + catid + "');";
	}
	} else {
	linkText = document.createTextNode("Home");
	tmpA.title = "Home";
	tAHRSTR = "javascript:eindex('aa-show-place','pid=aa-show-place&cid=" + cid + "');";

	}
	// tmpA.href = "index.html?dcid=" + cid;
	tmpA.appendChild(linkText);
	tmpA.href = tAHRSTR;
	// tmpLI.appendChild(tmpA);
	tmpUL = document.createElement("ul");
	tmpUL.id = "mnuIHome";
	tmpUL.className="animenu__nav__child";


		// create table row with 2 cells and add the cells to the row
		tmpTR = document.createElement("tr");
		tmpTD1 = document.createElement("td");
		tmpTD2 = document.createElement("td");
		tmpTD1.appendChild(tmpA);
		tmpTR.appendChild(tmpTD1);
		tmpTR.appendChild(tmpTD2);
		tmpTglDiv = document.createElement("div");
		tmpTglDiv.id = "tglDivHome";
		tmpTglDiv.innerHTML = "<i class=\"small-material-icons\" style=\"font-size:24px\" alt=\"btn_show_more\">&#xe5cf;</i>";
		tmpTglDiv.style.float = "right";
		tmpTglDiv.onclick = function() { JSSHOP.ui.toggleNuModule('tglDivHome', 'mnuIHome'); };
		tmpTD2.appendChild(tmpTglDiv);
		tmpTbl = document.createElement("table");
		tmpTbl.appendChild(tmpTR);
		tmpLI.appendChild(tmpTbl);


		tmpLI.appendChild(tmpUL);	
	tmpmainUL.appendChild(tmpLI);
	if(JSSHOP.shared.isMobile()) {
	 tmpUL.style.display = "none";
	   tmpUL.style.visibility = "hidden";			

   }  else {
		tmpTglDiv.style.display = "none";
		tmpTglDiv.style.visibility = "hidden";
		
	 
	   
   }

	return tmpmainUL;
}; 


var doAdmnMnuLd = function() {
      var admenu = document.getElementById("mnuT");
	var mainUL = getMMenu();
      tmpLI = document.createElement("li");
	tmpLI.className="omenuartigo";	
	tmpA = document.createElement('a');
	linkText = document.createTextNode("Companies");
	tmpA.appendChild(linkText);
	tmpA.title = "Companies";
	tmpA.href = "admin.html?pid=aa-edit-cos";
	tmpLI.appendChild(tmpA);
	tmpUL = document.createElement("ul");
	tmpUL.className="animenu__nav__child";
	tmpUL.id = "mnuIAdmin";
	tmpLI.appendChild(tmpUL);
	mainUL.appendChild(tmpLI);
	admenu.appendChild(mainUL);

};


var doSMStart = function() {
tmpDOs = null;
tmpDOs = {};
tmpDOs["ws"] = "where cat_pid>? and cat_coid=?";
tmpDOs["wa"] = [0,cid];
oi = getNuDBFnvp("qcat",5,null,tmpDOs);
if(cid == 0) {
doQComm(oi["rq"], null, "doSubMenuLoad");
} else {
doQComm(oi["rq"], null, "doSubMenuLoad");
}
};




var doDefMnuLd = function() {
// alert("doDefMnuLd: ");
hasr = "n";
fullstr = "";
mnotAppended = "n";
     // var mainUL = document.getElementById("mnuULmain");// 

strMLink = "index.html?";
 
var mainUL = getMMenu();

try {
} catch(e) {
	alert("doDefMnuLd.error: " + e);
	}


     tmpLI = document.createElement("li");
	tmpLI.className="omenuartigo";
 	
	tmpA = document.createElement('a');

	linkText = document.createTextNode(stxt[206]);
	tmpA.appendChild(linkText);
	tmpA.title = stxt[206] + "&nbsp;&nbsp;&nbsp;&nbsp;";
	tmpA.href = strMLink + "pid=aa-show-makes";

	tmpLI.appendChild(tmpA); 
	tmpUL = document.createElement("ul");
	tmpUL.className="animenu__nav__child";
	tmpUL.id = "mnuIshowMakes";
	tmpLI.appendChild(tmpUL);
	// mainUL.appendChild(tmpLI);
 

 tmpLI = document.createElement("li");
	tmpLI.className="omenuartigo";
 	
	tmpA = document.createElement('a');

	linkText = document.createTextNode(stxt[204]);
	tmpA.appendChild(linkText);
	tmpA.title = stxt[204] + "&nbsp;&nbsp;&nbsp;&nbsp;";
	tmpA.href = strMLink + "nt=y";

	tmpLI.appendChild(tmpA); 
	tmpUL = document.createElement("ul");
	tmpUL.className="animenu__nav__child";
	tmpUL.id = "mnuIshowMakesA";
	tmpLI.appendChild(tmpUL);
	// mainUL.appendChild(tmpLI);

/*
 tmpLI = document.createElement("li");
	tmpLI.className="omenuartigo";
 	
	tmpA = document.createElement('a');
	linkText = document.createTextNode(stxt[208]);
	tmpA.appendChild(linkText);
	tmpA.title = stxt[208] + "&nbsp;&nbsp;&nbsp;&nbsp;";
	tmpA.href = strMLink + "pid=" + stxt[209];

	tmpLI.appendChild(tmpA); 
	tmpUL = document.createElement("ul");
	tmpUL.className="animenu__nav__child";
	tmpUL.id = "mnuIshowMakesB";
	tmpLI.appendChild(tmpUL);
	mainUL.appendChild(tmpLI);
*/
 


 tmpLI = document.createElement("li");
	tmpLI.className="omenuartigo";
 	
	tmpA = document.createElement('a');

	linkText = document.createTextNode(stxt[200]);
	tmpA.appendChild(linkText);
	tmpA.title = stxt[200] + "&nbsp;&nbsp;&nbsp;&nbsp;";
	tmpA.href = strMLink + "content=" + stxt[201];

	tmpLI.appendChild(tmpA); 
	tmpUL = document.createElement("ul");
	tmpUL.className="animenu__nav__child";
	tmpUL.id = "mnuIshowMakesD";
	tmpLI.appendChild(tmpUL);
	// mainUL.appendChild(tmpLI);
document.getElementById("mnuT").appendChild(mainUL);


doMainTreeLoad();
 


};



var doNuShopMnuLd = function(theResp) {
	currCoCatsStr = ":";
	tDVMTxt = document.getElementById("mnuT").innerText;
	if(tDVMTxt.length > 5) {
		console.log("doNuShopMnuLd: already loaded");
		return;
	}
console.log("doNuShopMnuLd" + JSON.stringify(theResp));
hasr = "n";
fullstr = "";
mnotAppended = "n";
     // var mainUL = document.getElementById("mnuULmain");// 
	 if(pid.indexOf("edit-") != -1){
		tmpSTrSorE = "edit";
		} else {
		tmpSTrSorE = "show";
		}
		strMLink = "javascript:eindex('aa-" + tmpSTrSorE + "-parts-category','pid=aa-" + tmpSTrSorE + "-parts-category');";
		
// strMLink = "index.html?pid=aa-show-category";
// strMLink = "javascript:eindex('aa-show-category','pid=aa-show-category');";
var mainUL = getMMenu();

try {
var arrToFill = JSON.parse(theResp.rs);
var len = arrToFill.length;
var iint = 0;
var pcid = 0;
tstr = "";
while(iint < len) {

ts = arrToFill[iint];
currMenuArr.push(ts);

 
 // if(ts.cat_pid == "0") { // add only main categories to list
 if(ts.cat_pid == ts.cat_id) { // add only main categories to list

      tmpLI = document.createElement("li");
	tmpLI.className="omenuartigo";
 	
	tmpA = document.createElement('a');
	console.log("doNuShopMnuLd.currPartsObj: " +  JSON.stringify(currPartsObj));
	tmpATitleStr  = currPartsObj["pcats"]["pc" + ts.cat_pid];
	linkText = document.createTextNode(tmpATitleStr);
	tmpA.appendChild(linkText);
 
	// tmpA.title = ts.cat_title + "&nbsp;&nbsp;&nbsp;&nbsp;";
	// get the translated category title from ts.cat_pid and cross
	if(JSSHOP.shared.isMobile()) {
		tMnuTId = "mnuI" + ts.cat_pid;
		if(document.getElementById(tMnuTId)) {
		tmpA.href = "javascript:JSSHOP.ui.toggleVisibility('mnuI" + ts.cat_pid + "');";
		} else {
			if(pid.indexOf("edit-") != -1){
				tmpSTrSorE = "edit";
				} else {
				tmpSTrSorE = "show";
				}
		// tmpA.href = "javascript:eindex('aa-show-parts-category','pid=aa-show-parts-category&ppid="+ts._id+"&cid="+ts.cat_coid+"&catid="+ts.cat_id + "');";
		if(document.getElementById("c_category").value == "202") {
		tmpA.href = "javascript:eindex('aa-" + tmpSTrSorE + "-parts-category','pid=aa-" + tmpSTrSorE + "-parts-category&ppid="+ts._id+"&cid="+ts.cat_coid+"&catid="+ts.cat_id + "');";
		} else {
			// tmpSTrSorE = "show";
		tmpA.href = "javascript:eindex('aa-" + tmpSTrSorE + "-svs-category','pid=aa-" + tmpSTrSorE + "-svs-category&ppid="+ts.cat_pid+"&cid="+ts.cat_coid+"&catid="+ts._id + "');";
		}
		}
	} else {
		if(pid.indexOf("edit-") != -1){
			tmpSTrSorE = "edit";
			} else {
			tmpSTrSorE = "show";
			}
			if(document.getElementById("c_category").value == "202") {
			tmpA.href = "javascript:eindex('aa-" + tmpSTrSorE + "-parts-category','pid=aa-" + tmpSTrSorE + "-parts-category&ppid="+ts.cat_id+"&cid="+ts.cat_coid+"&catid="+ts.cat_id + "');";
			} else {
				// tmpSTrSorE = "show";
			tmpA.href = "javascript:eindex('aa-" + tmpSTrSorE + "-svs-category','pid=aa-" + tmpSTrSorE + "-svs-category&ppid="+ts.cat_pid+"&cid="+ts.cat_coid+"&catid="+ts._id + "');";
			}

		// tmpA.href = "javascript:eindex('aa-show-parts-category','pid=aa-show-parts-category&ppid="+ts._id+"&cid="+ts.cat_coid+"&catid="+ts.cat_id + "');";

		// tmpA.href = strMLink + "&ppid="+ts._id+"&cid="+ts.cat_coid+"&catid="+ts.cat_id;
 
	}
	tmpTglDiv = document.createElement("div");
 
	tmpTglDiv.id = "tglDiv" + ts.cat_pid;
	tmpTglDiv.innerHTML = "<i class=\"small-material-icons\" style=\"font-size:24px\" alt=\"btn_show_more\">&#xe5cf;</i>";
	// tmpTglDiv float = "right";
	// tmpTglDiv.style.float = "right";

	// JSSHOP.ui.toggleNuModule('tglDiv' + ts.cat_pid,'mnuI' + ts.cat_pid);
	// add the to toggleNuModule to the onclick event of tmpTglDiv
	// tmpTglDiv.onclick = function() { JSSHOP.ui.toggleNuModule('tglDiv' + ts.cat_pid, 'mnuI' + ts.cat_pid);alert("tglDiv" + ts.cat_pid); };
	ttglDvId = "tglDiv" + ts.cat_pid;
	ttglDvToTgl = "mnuI" + ts.cat_pid;
	tmpTglDiv.setAttribute("onclick", "JSSHOP.ui.toggleNuModule('" + ttglDvId + "', '" + ttglDvToTgl + "')");
	tmpTglSpan = document.createElement("span");
	// tmpTglSpan.className="animenu__nav__toggle";
	tmpTglSpan.id = "tglSpan" + ts.cat_pid;
	tmpTglSpan.style.float = "right";
	tmpTglSpan.innerHTML = "<i class=\"small-material-icons\" style=\"font-size:24px\" alt=\"btn_show_more\">&#xe5cf;</i>";
	// tmpLI.appendChild(tmpA); 
	// tmpLI.appendChild(tmpTglDiv);
	// create a new table row with 2 cells and add the cells to the row
	tmpTR = document.createElement("tr");
	tmpTDA = document.createElement("td");
	tmpTDSpc = document.createElement("td");
	tmpTDSpc.style.width = "3px";
	tmpTDA.innerHTML = "<img src=\"images/misc/pc" + ts.cat_pid + ".gif\" class=\"slmtable brdrClrDlg\" style=\"max-width:20px;max-height:20px;\">";
	tmpTD1 = document.createElement("td");
	tmpTD2 = document.createElement("td");
	tmpTD1.appendChild(tmpA);
	tmpTD2.appendChild(tmpTglDiv);
	tmpTR.appendChild(tmpTDA);
	tmpTR.appendChild(tmpTDSpc);
	tmpTR.appendChild(tmpTD1);
	tmpTR.appendChild(tmpTD2);
	// add the row to the table
	tmpTbl = document.createElement("table");
	tmpTbl.appendChild(tmpTR);
	tmpLI.appendChild(tmpTbl);
	tmpUL = document.createElement("ul");
	tmpUL.className="animenu__nav__child";
	tmpUL.id = "mnuI" + ts.cat_pid;

	if(JSSHOP.shared.isMobile()) {
		 tmpUL.style.display = "none";
		 tmpUL.style.visibility = "hidden";
 
 
	}  else {
		tmpTglDiv.style.display = "none";
		tmpTglDiv.style.visibility = "hidden";
		
	}


	tmpLI.appendChild(tmpUL);
	mainUL.appendChild(tmpLI);
 
  }
  currCoCatsStr += ts.cat_id + ":";
iint++;
}
 
currMenuTStr = mainUL.innerHTML;
if(pid.indexOf("edit-") != -1){
// doAdmnMnuLd();
} else {
isMnuLDd = document.getElementById("mnuT").appendChild(mainUL);
if(isMnuLDd == "haha") {
hoho = true;
} else {
  setTimeout(function() { doSubMenuLoad()  }, 1000);
}	
}
 /*
// document.getElementById("mnuT").appendChild(imgplay);
if(window[theResp.el]) {
mf = window[theResp.el];
mf();
}
 */
} catch(e) {
	// clearNuLclStrg("localStorage", "doNuShopMnuLd");
	console.log("doNuShopMnuLd.error: " + JSON.stringify(theResp.rs));
	console.log("do NuShopMnuLd.error: " + e);
}

};

var doMnuFnsh = function() {
bbb = false;
};



var doNuMMenuLd = function(tmpMLcb) {
console.log("doNuMMenuLd: " + tmpMLcb);

if(cid == 0) {
 
doDefMnuLd();

} else {

currMenuArr.length = 0;
currMenuArr = [];
 // clear the top category navigation meni
 // usualy for refreshing on category edits
JSSHOP.ui.setTinnerHTML("mnuT", "");
strCurl = document.location.href;

tmpDOs = null;
tmpDOs = {};
tmpDOs["o"] = "cat_valb Desc";
tmpDOs["ws"] = "where cat_coid=? and cat_rtype=?";
tmpDOs["wa"] = [cid,5];
oi = getNuDBFnvp("qcat",5,null,tmpDOs);
ctac = nCurrCnxOb(); 
ctac["q"] = oi["rq"];
ctac["cb"] = "doNuShopMnuLd";
ctac["ts"] = "123";
ctac["lz"] = "n";
ctac["ls"] = "n";

ctac["el"] = tmpMLcb;
ccheD = JSSHOP.shared.getFrmFieldVal("qco", "c_dadded", "123");
ctac["fan"] = "catmenu" + ccheD + "-" + currCacheVer + "-" + cid + ".txt";
doNurQComm(ctac);
}
};

var doMMenuLd = function() {
alert("doMMenuLd");
doNuMMenuLd("doMnuFnsh");
};





function doCollsLoad() {
return	doNuCollsLoad("noQvalue");
}


function doNuCollsLoad(theRetUIT) {
console.log("doNuCollsLoad: " + theRetUIT)
tmpMCollItem = null;
tmpMCollItem = {};
tmpMCollItem["u"] = "JSSHOP.ui.popAndFillLbox(doFavoritesRndr('y', 'y', 'y', 60).replace(/::/g, '<br>'));";
tmpMCollItem["mi"] = "&#xe87d;"; // faorites
tmpMCollItem["ti"] = stxt[87];
tmpMCollItem["c"] = "collection-item txtClrRed";
tmpMCollItem["nm"] = "aa-show-favorites";
currMCollItems["aa-show-favorites"] = tmpMCollItem;


tmpMCollItem = null;
tmpMCollItem = {};
tmpMCollItem["u"] = "javascript:JSSHOP.ui.getPopHelp('page');";
tmpMCollItem["mi"] = "&#xe887;"; // help
tmpMCollItem["ti"] = stxt[71];
tmpMCollItem["c"] = "collection-item";
tmpMCollItem["nm"] = "aa-show-help";
currMCollItems["aa-show-help"] = tmpMCollItem;

tmpMCollItem = null;
tmpMCollItem = {};
tmpMCollItem["u"] = "javascript:JSSHOP.user.setCkiePrfKV('prfsSHOPuser','sia','y');document.location.href='index.html?cid=" + cid + "'";
tmpMCollItem["mi"] = "&#xe887;"; // about
tmpMCollItem["ti"] = "About";
tmpMCollItem["c"] = "collection-item";
tmpMCollItem["nm"] = "aa-show-about";
currMCollItems["aa-show-about"] = tmpMCollItem;


tmpMCollItem = null;
tmpMCollItem = {};
tmpMCollItem["u"] = "javascript:document.location.href='index.html?pid=aa-add-item&cid=" + cid + "&catid=" + catid + "'";
tmpMCollItem["mi"] = "&#xe145;"; // add
tmpMCollItem["ti"] = stxt[17];
tmpMCollItem["c"] = "coll-menu-item";
tmpMCollItem["nm"] = "aa-add-item";
currMCollItems["aa-add-item"] = tmpMCollItem;

tmpMCollItem = null;
tmpMCollItem = {};
// tmpMCollItem["u"] = "javascript:document.location.href='index.html?pid=aa-show-item&cid=" + cid + "&catid=" + catid + "&itemid=" + itemid + "'";
tmpMCollItem["u"] = "javascript:eindex('aa-show-item', 'pid=aa-show-item&cid=" + cid + "&catid=" + catid + "&itemid=" + itemid + "');";

tmpMCollItem["mi"] = "&#xe8ff;"; // zoom_in
tmpMCollItem["ti"] = stxt[67];
tmpMCollItem["c"] = "collection-item";
tmpMCollItem["nm"] = "aa-show-item";
currMCollItems["aa-show-item"] = tmpMCollItem;

tmpMCollItem = null;
tmpMCollItem = {};

// tmpMCollItem["u"] = "javascript:document.location.href='index.html?pid=aa-edit-item&cid=" + cid + "&catid=" + catid + "&itemid=" + itemid + "'";
tmpMCollItem["u"] = "javascript:eindex('aa-edit-item', 'pid=aa-edit-item&cid=" + cid + "&catid=" + catid + "&itemid=" + itemid + "');";
tmpMCollItem["mi"] = "&#xe3c9;"; // edit
tmpMCollItem["ti"] = stxt[20]; 
tmpMCollItem["c"] = "coll-menu-item";
tmpMCollItem["nm"] = "aa-edit-item";
currMCollItems["aa-edit-item"] = tmpMCollItem;

tmpMCollItem = null;
tmpMCollItem = {};
tmpMCollItem["u"] = "javascript:document.location.href='index.html?pid=aa-edit-item&cid=" + cid + "&catid=" + catid + "&itemid=" + itemid + "&cmdci=y'";
tmpMCollItem["mi"] = "&#xe14d;"; // content_copy
tmpMCollItem["ti"] = stxt[69];
tmpMCollItem["c"] = "coll-menu-item";
tmpMCollItem["nm"] = "aa-copy-item";
currMCollItems["aa-copy-item"] = tmpMCollItem;

tmpWCollItem = null;
tmpWCollItem = {};
// tmpWCollItem["u"] = "javascript:document.location.href='index.html?pid=aa-show-category&cid=" + cid + "&catid=" + catid + "'";
tmpWCollItem["u"] = "javascript:eindex('aa-show-category', 'pid=aa-show-category&cid=" + cid + "&catid=" + catid + "');";
tmpWCollItem["mi"] = "&#xe8ff;"; // zoom_in
tmpWCollItem["ti"] = stxt[505];
tmpWCollItem["c"] = "collection-item";
currMCollItems["aa-show-category"] = tmpWCollItem;


tmpWCollItem = null;
tmpWCollItem = {};
// tmpWCollItem["u"] = "javascript:document.location.href='index.html?pid=aa-show-category&cid=" + cid + "&catid=" + catid + "'";
tmpWCollItem["u"] = "javascript:eindex('aa-show-parts-category', 'pid=aa-show-parts-category&cid=" + cid + "&catid=" + catid + "');";
tmpWCollItem["mi"] = "&#xe8ff;"; // zoom_in
tmpWCollItem["ti"] = stxt[505];
tmpWCollItem["c"] = "collection-item";
currMCollItems["aa-show-parts-category"] = tmpWCollItem;


tmpWCollItem = null;
tmpWCollItem = {};
// tmpWCollItem["u"] = "javascript:document.location.href='index.html?pid=aa-show-category&cid=" + cid + "&catid=" + catid + "'";
tmpWCollItem["u"] = "javascript:eindex('aa-show-svs-category', 'pid=aa-show-svs-category&cid=" + cid + "&catid=" + catid + "');";
tmpWCollItem["mi"] = "&#xe8ff;"; // zoom_in
tmpWCollItem["ti"] = stxt[505];
tmpWCollItem["c"] = "collection-item";
currMCollItems["aa-show-svs-category"] = tmpWCollItem;


tmpWCollItem = null;
tmpWCollItem = {};
// tmpWCollItem["u"] = "javascript:document.location.href='index.html?pid=aa-show-category&cid=" + cid + "&catid=" + catid + "'";
tmpWCollItem["u"] = "javascript:JSSHOP.ui.getPartsPage();";
tmpWCollItem["mi"] = "images/misc/parts_w.gif"; // zoom_in
tmpWCollItem["ti"] = stxt[108];
tmpWCollItem["c"] = "collection-item";
currMCollItems["aa-show-psearch"] = tmpWCollItem;

tmpWCollItem = null;
tmpWCollItem = {};
// tmpWCollItem["u"] = "javascript:document.location.href='index.html?pid=aa-show-category&cid=" + cid + "&catid=" + catid + "'";
tmpWCollItem["u"] = "javascript:JSSHOP.ui.getSvsPage();";
tmpWCollItem["mi"] = "images/misc/mec2_w.gif"; // zoom_in
tmpWCollItem["ti"] = stxt[109];
tmpWCollItem["c"] = "collection-item";
currMCollItems["aa-show-msearch"] = tmpWCollItem;

/* toggle-buttons  for the products grid-row  layout and price asc-desc order */


tmpMCollItem = null;
tmpMCollItem = {};
tmpMCollItem["u"] = "tglCatUibtns('btnP-aa-toggle-pview', 'prfsSHOPuser','scv','r');";

// tmpMCollItem["u"] = "javascript:JSSHOP.user.setCkiePrfKV('prfsSHOPuser','scv','r');renderAgn()";
tmpMCollItem["mi"] = "&#xe240;"; // Row
tmpMCollItem["ti"] = "Row";
tmpMCollItem["c"] = "coll-menu-item";
tmpMCollItem["nm"] = "aa-toggle-pview";
tmpMCollItem["h"] = "Sort By:";
currMCollItems["aa-toggle-row"] = tmpMCollItem;

tmpMCollItem = null;
tmpMCollItem = {};
tmpMCollItem["u"] = "tglCatUibtns('btnP-aa-toggle-pview', 'prfsSHOPuser','scv','g');";

// tmpMCollItem["u"] = "javascript:JSSHOP.user.setCkiePrfKV('prfsSHOPuser','scv','g');renderAgn()";
tmpMCollItem["mi"] = "&#xe3ec"; // row
tmpMCollItem["ti"] = "Grid";
tmpMCollItem["c"] = "coll-menu-item";
tmpMCollItem["nm"] = "aa-toggle-pview";
tmpMCollItem["h"] = "Sort By:";
currMCollItems["aa-toggle-grid"] = tmpMCollItem;

tmpMCollItem = null;
tmpMCollItem = {};
tmpMCollItem["u"] = "tglCatUibtns('btnP-aa-toggle-pprice', 'prfsSHOPuser','scp','a');";

// tmpMCollItem["u"] = "javascript:JSSHOP.user.setCkiePrfKV('prfsSHOPuser','scp','a');renderPrix('a')";
tmpMCollItem["mi"] = "&#xe25c;"; // item price ascending
tmpMCollItem["ti"] = "Price Ascending";
tmpMCollItem["c"] = "coll-menu-item";
tmpMCollItem["nm"] = "aa-toggle-pprice";
currMCollItems["aa-toggle-priceAsc"] = tmpMCollItem;

tmpWCollItem = null;
tmpWCollItem = {};
tmpWCollItem["u"] = "tglCatUibtns('btnP-aa-toggle-pprice', 'prfsSHOPuser','scp','d');";

// tmpWCollItem["u"] = "javascript:JSSHOP.user.setCkiePrfKV('prfsSHOPuser','scp','d');renderPrix('d')";
tmpWCollItem["mi"] = "&#xe227;"; // item price descending
tmpWCollItem["ti"] = "Price Descending";
tmpWCollItem["c"] = "coll-menu-item";
tmpWCollItem["nm"] = "aa-toggle-pprice";
currMCollItems["aa-toggle-priceDesc"] = tmpWCollItem;










tmpWCollItem = null;
tmpWCollItem = {};
// tmpWCollItem["u"] = "javascript:document.location.href='index.html?pid=aa-show-category&fc=y&cid=" + cid + "&catid=" + catid + "'";
tmpWCollItem["u"] = "javascript:eindex('aa-show-category', 'pid=aa-show-category&fc=y&cid=" + cid + "&catid=" + catid + "');";
tmpWCollItem["mi"] = "&#xe363;"; // autorenew
tmpWCollItem["ti"] = "Refresh";
tmpWCollItem["c"] = "collection-item";
currMCollItems["aa-force-clear"] = tmpWCollItem;


tmpQCollItem = null;
tmpQCollItem = {};
tmpQCollItem["u"] = "javascript:document.location.href='index.html?pid=aa-edit-mylistings&cid=" + cuid + "'";
tmpQCollItem["mi"] = "&#xe3c9;"; // edit
tmpQCollItem["ti"] = "My Listings";
tmpQCollItem["c"] = "coll-menu-item";
currMCollItems["aa-show-mylistings"] = tmpQCollItem;


tmpQCollItem = null;
tmpQCollItem = {};
// tmpQCollItem["u"] = "javascript:document.location.href='index.html?pid=aa-edit-category&cid=" + cid + "&catid=" + catid + "'";
tmpQCollItem["u"] = "javascript:eindex('aa-edit-parts-category', 'pid=aa-edit-parts-category&cid=" + cid + "&catid=" + catid + "');";
tmpQCollItem["mi"] = "&#xe3c9;"; // edit
tmpQCollItem["ti"] = stxt[504];
tmpQCollItem["c"] = "coll-menu-item";
currMCollItems["aa-edit-category"] = tmpQCollItem;

tmpQCollItem = null;
tmpQCollItem = {};
// tmpQCollItem["u"] = "javascript:document.location.href='index.html?pid=aa-edit-categories&cid=" + cid + "&catid=" + catid + "'";
tmpQCollItem["u"] = "javascript:eindex('aa-edit-categories', 'pid=aa-edit-categories&cid=" + cid + "&catid=" + catid + "');";
tmpQCollItem["mi"] = "&#xe3c9;"; // edit
tmpQCollItem["ti"] = stxt[503];
tmpQCollItem["c"] = "coll-menu-item";
currMCollItems["aa-edit-categories"] = tmpQCollItem;


tmpMCollItem = null;
tmpMCollItem = {};
// tmpMCollItem["u"] = "javascript:document.location.href='index.html?pid=aa-edit-parts-category&cid=" + cid + "&catid=" + catid + "'";
tmpMCollItem["u"] = "javascript:eindex('aa-edit-parts-category', 'pid=aa-edit-parts-category&cid=" + cid + "&catid=" + catid + "');";
tmpMCollItem["mi"] = "&#xe869;"; // build
tmpMCollItem["ti"] = stxt[5003];
tmpMCollItem["c"] = "coll-menu-item";
currMCollItems["aa-edit-parts-category"] = tmpMCollItem;


tmpQCollItem = null;
tmpQCollItem = {};
// tmpQCollItem["u"] = "javascript:document.location.href='index.html?pid=aa-edit-parts-categories&cid=" + cid + "&catid=" + catid + "'";
tmpQCollItem["u"] = "javascript:eindex('aa-edit-parts-categories', 'pid=aa-edit-parts-categories&cid=" + cid + "&catid=" + catid + "');";
tmpQCollItem["mi"] = "&#xe3c9;"; // edit
tmpQCollItem["ti"] = stxt[503];
tmpQCollItem["c"] = "coll-menu-item";
currMCollItems["aa-edit-parts-categories"] = tmpQCollItem;

tmpQCollItem = null;
tmpQCollItem = {};
 tmpQCollItem["u"] = "javascript:eindex('aa-edit-svs-parts-category', 'pid=aa-edit-svs-parts-category&cid=" + cid + "&catid=" + catid + "');";
tmpQCollItem["mi"] = "&#xe3c9;"; // edit
tmpQCollItem["ti"] = stxt[504];
tmpQCollItem["c"] = "coll-menu-item";
currMCollItems["aa-edit-svs-category"] = tmpQCollItem;

tmpQCollItem = null;
tmpQCollItem = {};
 tmpQCollItem["u"] = "javascript:eindex('aa-edit-svs-categories', 'pid=aa-edit-svs-categories&cid=" + cid + "&catid=" + catid + "');";
tmpQCollItem["mi"] = "&#xe3c9;"; // edit
tmpQCollItem["ti"] = stxt[503];
tmpQCollItem["c"] = "coll-menu-item";
currMCollItems["aa-edit-svs-categories"] = tmpQCollItem;

tmpQCollItem = null;
tmpQCollItem = {};
tmpQCollItem["u"] = "javascript:document.location.href='index.html?pid=aa-edit-shop&cid=" + cid + "&catid=" + catid + "'";
tmpQCollItem["mi"] = "&#xe3c9;"; // edit
tmpQCollItem["ti"] = stxt[68];
tmpQCollItem["c"] = "coll-menu-item";
currMCollItems["aa-edit-shop"] = tmpQCollItem;

tmpQCollItem = null;
tmpQCollItem = {};
tmpQCollItem["u"] = "javascript:document.location.href='index.html?pid=aa-edit-shops'";
tmpQCollItem["mi"] = "&#xe3c9;"; // edit
tmpQCollItem["ti"] = stxt[4];
tmpQCollItem["c"] = "coll-menu-item";
currMCollItems["aa-edit-shops"] = tmpQCollItem;

tmpQCollItem = null;
tmpQCollItem = {};
tmpQCollItem["u"] = "javascript:document.location.href='index.html?pid=aa-add-shop'";
tmpQCollItem["mi"] = "&#xe145;"; // add
tmpQCollItem["ti"] = stxt[1];
tmpQCollItem["c"] = "collection-item";
currMCollItems["aa-add-shop"] = tmpQCollItem;

tmpQCollItem = null;
tmpQCollItem = {};
tmpQCollItem["u"] = "javascript:JSSHOP.shop.doCartAddPop();";

tmpQCollItem["mi"] = "&#xe8cc;";
tmpQCollItem["c"] = "collection-item";
tStrCTtl = "<span name=\"spnCtotal\" class=\"txtSmall\" style=\"text-align: right;margin-bottom:30px; padding:0px;float: right\">";
tStrCTtl += "<a href=\"javascript:JSSHOP.shop.doCartAddPop();\" class=\"txtDecorNone\" style=\"text-align: right;margin-bottom:30px; padding:0px;\">";
tStrCTtl +=  currCartTtl + "</a></span>";

 tmpQCollItem["ti"] = stxt[47] + "   <span class=\"txtSmall txtClrDlg\" style=\"margin-left: 40px;\">" + currCartTtl + "</span>";
currMCollItems["aa-show-cart"] = tmpQCollItem;

tmpQCollItem = null;
tmpQCollItem = {};
tmpQCollItem["u"] = "javascript:document.location.href='index.html?pid=aa-settings&cid=" + cid + "'";
tmpQCollItem["mi"] = "&#xe8b8;"; // settings
tmpQCollItem["ti"] = stxt[61]; // settings
tmpQCollItem["c"] = "collection-item";
currMCollItems["aa-settings"] = tmpQCollItem;

tmpQCollItem = null;
tmpQCollItem = {};
tmpQCollItem["u"] = "javascript:document.location.href='index.html?pid=aa-edit-user&cid=" + cid + "'";
tmpQCollItem["mi"] = "&#xe7fd;"; // person
tmpQCollItem["ti"] = stxt[63];
tmpQCollItem["c"] = "collection-item";
currMCollItems["aa-edit-user"] = tmpQCollItem;


tmpQCollItem = null;
tmpQCollItem = {};
tmpQCollItem["u"] = "javascript:document.location.href='index.html?pid=aa-edit-orders&cid=" + cid + "'";
tmpQCollItem["mi"] = "&#xe7fd;"; // orders
tmpQCollItem["ti"] = stxt[601];
tmpQCollItem["c"] = "collection-item";
currMCollItems["aa-edit-orders"] = tmpQCollItem;



tmpQCollItem = null;
tmpQCollItem = {};
tmpQCollItem["u"] = "javascript:preAQR();";
tmpQCollItem["mi"] = "&#xe3c9;"; // edit
tmpQCollItem["ti"] = stxt[65];
tmpQCollItem["c"] = "coll-menu-item";
currMCollItems["aa-qrcode"] = tmpQCollItem;

tmpQCollItem = null;
tmpQCollItem = {};
tmpQCollItem["u"] = "javascript:getAppDBReq();";
tmpQCollItem["mi"] = "&#xe3c9;"; // edit
tmpQCollItem["ti"] = stxt[66];
tmpQCollItem["c"] = "coll-menu-item";
currMCollItems["aa-appdbreq"] = tmpQCollItem;

tmpQCollItem = null;
tmpQCollItem = {};
tmpQCollItem["u"] = "javascript:JSSHOP.jndroid.doCutOuts();";
tmpQCollItem["mi"] = "&#xe3b3;"; // edit
tmpQCollItem["ti"] = "CutOuts Cam";
tmpQCollItem["c"] = "coll-menu-item";
currMCollItems["aa-docutouts"] = tmpQCollItem;

tmpQCollItem = null;
tmpQCollItem = {};
tmpQCollItem["u"] = "javascript:document.location.href='index.html?pid=aa-use-adminapp&cid=" + cid + "'";
tmpQCollItem["mi"] = "&#xe3c9;"; // edit
tmpQCollItem["ti"] = "Use Java adminApp";
tmpQCollItem["c"] = "coll-menu-item";
currMCollItems["aa-use-adminapp"] = tmpQCollItem;

tmpQCollItem = null;
tmpQCollItem = {};
tmpQCollItem["u"] = "javascript:document.location.href='index.html?pid=aa-sqldump'";
tmpQCollItem["mi"] = "&#xe3c9;"; // edit
tmpQCollItem["ti"] = "SQL dump";
tmpQCollItem["c"] = "coll-menu-item";
currMCollItems["aa-sqldump"] = tmpQCollItem;

tmpQCollItem = null;
tmpQCollItem = {};
tmpQCollItem["u"] = "javascript:document.location.href='index.html?pid=login'";
tmpQCollItem["mi"] = "&#xe897;"; // lock
tmpQCollItem["ti"] = "Login";
tmpQCollItem["c"] = "collection-item";
currMCollItems["aa-login"] = tmpQCollItem;

tmpQCollItem = null;
tmpQCollItem = {};
tmpQCollItem["u"] = "javascript:JSSHOP.shared.doLogout()";
tmpQCollItem["mi"] = "&#xe897;"; // lock
tmpQCollItem["ti"] = "Logout";
tmpQCollItem["c"] = "collection-item";
currMCollItems["aa-logout"] = tmpQCollItem;

tmpMCollItem = null;
tmpMCollItem = {};
tmpMCollItem["u"] = "javascript:document.location.href='index.html?pid=aa-show-app-tools&cid=" + cid + "&catid=" + catid + "&itemid=" + itemid + "'";
tmpMCollItem["mi"] = "&#xe869;"; // build
tmpMCollItem["ti"] = "App Tools";
tmpMCollItem["c"] = "coll-menu-item";
currMCollItems["aa-show-app-tools"] = tmpMCollItem;

tmpMCollItem = null;
tmpMCollItem = {};
// tmpMCollItem["u"] = "javascript:JSSHOP.loadScript('js/x_c_pp_" + usrlang + ".js', JSSHOP.checkLoader,'js')";
tmpMCollItem["u"] = "javascript:document.location.href='index.html?pid=c_pp_" + usrlang + "'";

//tmpMCollItem["u"] = "javascript:document.location.href='index.html?content=privacy_policy'";
tmpMCollItem["mi"] = "&#xe869;"; // build
tmpMCollItem["ti"] = stxt[84];
tmpMCollItem["c"] = "coll-menu-item";
currMCollItems["aa-show-privacypolicy"] = tmpMCollItem;

tmpMCollItem = null;
tmpMCollItem = {};
// tmpMCollItem["u"] = "javascript:JSSHOP.loadScript('js/x_c_ts_" + usrlang + ".js', JSSHOP.checkLoader,'js')";
tmpMCollItem["u"] = "javascript:document.location.href='index.html?pid=c_ts_" + usrlang + "'";

// tmpMCollItem["u"] = "javascript:document.location.href='index.html?content=terms_conditions'";
tmpMCollItem["mi"] = "&#xe869;"; // build
tmpMCollItem["ti"] = stxt[85];
tmpMCollItem["c"] = "coll-menu-item";
currMCollItems["aa-show-termsconditions"] = tmpMCollItem;

tmpMCollItem = null;
tmpMCollItem = {};
tmpMCollItem["u"] = "javascript:document.location.href='index.html?pid=aa-contactus'";
tmpMCollItem["mi"] = "&#xe869;"; // build
tmpMCollItem["ti"] = stxt[86];
tmpMCollItem["c"] = "coll-menu-item";
currMCollItems["aa-contactus"] = tmpMCollItem;



tmpMCollItem = null;
tmpMCollItem = {};
tmpMCollItem["u"] = "javascript:document.location.href='index.html?pid=aa-edit-synch&cid=" + cid + "&catid=" + catid + "&itemid=" + itemid + "'";
tmpMCollItem["mi"] = "&#xe869;"; // build
tmpMCollItem["ti"] = "Synch";
tmpMCollItem["c"] = "coll-menu-item";
currMCollItems["aa-edit-synch"] = tmpMCollItem;





// recamby links


tmpMCollItem = null;
tmpMCollItem = {};
tmpMCollItem["u"] = "javascript:document.location.href='index.html?pid=aa-show-makes';";
tmpMCollItem["mi"] = "&#xe87d;"; // Car Makes
tmpMCollItem["ti"] = stxt[206];
tmpMCollItem["c"] = "collection-item";
tmpMCollItem["nm"] = "aa-show-makes";
currMCollItems["aa-show-makes"] = tmpMCollItem;

tmpMCollItem = null;
tmpMCollItem = {};
tmpMCollItem["u"] = "javascript:document.location.href='index.html?content=automotive-industry-news';";

// tmpMCollItem["u"] = "javascript:eindex('automotive-industry-news','content=automotive-industry-news')";
tmpMCollItem["mi"] = "&#xe87d;"; // News
tmpMCollItem["ti"] = stxt[200]; 
tmpMCollItem["c"] = "collection-item";
tmpMCollItem["nm"] = "automotive-industry-news";
currMCollItems["automotive-industry-news"] = tmpMCollItem;

tmpMCollItem = null;
tmpMCollItem = {};
tmpMCollItem["u"] = "JSSHOP.ui.popAndFillLbox(doCurrInfoStr());";
tmpMCollItem["mi"] = "&#xe869;"; // build
tmpMCollItem["ti"] = "debug";
tmpMCollItem["c"] = "coll-menu-item";
currMCollItems["aa-show-dbug"] = tmpMCollItem;


tmpMCollItem = null;
tmpMCollItem = {};
tmpMCollItem["u"] = "javascript:document.location.href='index.html?pid=aa-add-part&cid=" + cid + "&catid=" + catid + "'";
tmpMCollItem["mi"] = "&#xe869;"; // build
tmpMCollItem["ti"] = stxt[5001];
tmpMCollItem["c"] = "coll-menu-item";
currMCollItems["aa-add-part"] = tmpMCollItem;

tmpMCollItem = null;
tmpMCollItem = {};
tmpMCollItem["u"] = "javascript:document.location.href='index.html?pid=aa-edit-part&cid=" + cid + "&catid=" + catid + "&itemid=" + itemid + "'";
tmpMCollItem["mi"] = "&#xe869;"; // build
tmpMCollItem["ti"] = stxt[5002];
tmpMCollItem["c"] = "coll-menu-item";
currMCollItems["aa-edit-part"] = tmpMCollItem;

tmpAMCollItem = null;
tmpAMCollItem = {};
// tmpAMCollItem["u"] = "javascript:document.location.href='index.html?pid=aa-edit-parts-category&cid=" + cid + "&catid=" + catid + "'";
tmpAMCollItem["u"] = "javascript:eindex('aa-edit-parts-category', 'pid=aa-edit-parts-category&cid=" + cid + "&disabled=y');";
tmpAMCollItem["mi"] = "&#xe869;"; // build
tmpAMCollItem["ti"] = stxt[568];
tmpAMCollItem["c"] = "coll-menu-item";
currMCollItems["aa-edit-parts-disabled"] = tmpAMCollItem;


currMCollArr = [];
tmpPrfSAL = "y";
try {
tmpPrfSAL = arrUprefs["prfsSHOPuser"][0].sAL;
} catch(e) {
tmpPrfSAL = "y";
}


// currMCollArr.push("aa-show-makes");
// currMCollArr.push("aa-show-mylistings");
// currMCollArr.push("automotive-industry-news");
switch(pid) {




case "aa-show-item":
/*
if((arrAllForms.qco.v[0].c_uid == quid) && (tmpPrfSAL == "y")) {
if(i_vala.value.indexOf(":") != -1) {
currMCollArr.push("aa-add-part");
currMCollArr.push("aa-edit-part");
currMCollArr.push("aa-edit-parts-category");
} else {
currMCollArr.push("aa-add-item");
currMCollArr.push("aa-edit-item");
currMCollArr.push("aa-copy-item");
currMCollArr.push("aa-edit-category");
}
boolShwLogoHdr = "y";

}
*/
break;

case "aa-show-category":


try { var upMRefs = arrUprefs["prfsSHOPuser"][0].scv; }catch (e) { var upRefs = "r";}
try { var upMPrixRef = arrUprefs["prfsSHOPuser"][0].scp; } catch (e) { var upPrixRef = "u"; }
if (upMRefs == "r") {
currMCollArr.push("aa-toggle-grid");
} else {
currMCollArr.push("aa-toggle-row");
}
if (upMPrixRef == "a") {
currMCollArr.push("aa-toggle-priceDesc");
} else {
currMCollArr.push("aa-toggle-priceDesc");
}


// not using this for now
/*
if(arrAllForms.qco.v[0]) {
if((arrAllForms.qco.v[0].c_uid == quid) && (tmpPrfSAL == "y")) {

if(cat_vala.value < 10) {
currMCollArr.push("aa-add-part");
currMCollArr.push("aa-edit-parts-category");
} else {
currMCollArr.push("aa-add-item");
currMCollArr.push("aa-edit-category");
}
currMCollArr.push("aa-force-clear");
currMCollArr.push("aa-edit-shop");
if(isJavaFx == "yes") {
currMCollArr.push("aa-appdbreq");
} else {
currMCollArr.push("aa-use-adminapp");
}
}
} // end if arr
*/

currMCollArr.push("break");
boolShwLogoHdr = "y";
break;

case "aa-add-item":
currMCollArr.push("aa-show-category");
currMCollArr.push("aa-edit-category");
currMCollArr.push("aa-edit-categories");
break;
case "aa-edit-item":
currMCollArr.push("aa-show-item");
currMCollArr.push("aa-edit-category");
currMCollArr.push("aa-show-category");
break;
case "aa-edit-place":
currMCollArr.push("aa-show-item");
currMCollArr.push("aa-edit-category");
currMCollArr.push("aa-show-category");
break;
case "aa-show-mylistings":
case "aa-show-category":
case "aa-edit-category":

try { var upMRefs = arrUprefs["prfsSHOPuser"][0].scv; }catch (e) { var upRefs = "r";}
try { var upMPrixRef = arrUprefs["prfsSHOPuser"][0].scp; } catch (e) { var upPrixRef = "u"; }
if (upMRefs == "r") {
currMCollArr.push("aa-toggle-grid");
} else {
currMCollArr.push("aa-toggle-row");
}
if (upMPrixRef == "a") {
currMCollArr.push("aa-toggle-priceDesc");
} else {
currMCollArr.push("aa-toggle-priceDesc");
}

currMCollArr.push("aa-add-part");
currMCollArr.push("aa-add-item");
currMCollArr.push("aa-show-category");
currMCollArr.push("aa-edit-categories");
currMCollArr.push("aa-edit-shop");
// currMCollArr.push("aa-edit-shops");
currMCollArr.push("aa-edit-synch");
if(isJavaFx == "yes") {
currMCollArr.push("aa-appdbreq");
} else {
currMCollArr.push("aa-use-adminapp");
} 
break;
case "aa-edit-categories":
currMCollArr.push("aa-edit-shop");
// currMCollArr.push("aa-edit-shops");
break;
case "aa-edit-shop":
currMCollArr.push("aa-edit-categories");
// currMCollArr.push("aa-edit-shops");
break;
case "aa-edit-user":
currMCollArr.push("aa-edit-shop");
// currMCollArr.push("aa-edit-shops");
currMCollArr.push("aa-settings");
currMCollArr.push("aa-add-shop");
break;

// recamby links
case "aa-add-part":
currMCollArr.push("aa-edit-parts-category");
break;
case "aa-edit-part":
currMCollArr.push("aa-edit-parts-category");
currMCollArr.push("aa-add-part");
break;
case "aa-edit-parts-category":
currMCollArr.push("aa-edit-parts-category");
currMCollArr.push("aa-edit-parts-disabled");
// currMCollArr.push("aa-add-part");
break;

case "aa-edit-svs-category":
currMCollArr.push("aa-show-svs-category");
currMCollArr.push("aa-edit-svs-categories");
break;

default:


if((quid == 0) || (quid == "noQvalue")){
// currMCollArr.push("aa-add-shop");
} else {
// currMCollArr.push("aa-edit-shops");
}
// currMCollArr.push("aa-settings");
// currMCollArr.push("aa-edit-user");

currMCollArr.push("recent");
currMCollArr.push("aa-show-favorites");
currMCollArr.push("aa-show-psearch");
currMCollArr.push("aa-show-msearch");
break;
}
 
if(isJApp == "y") {
currMCollArr.push("aa-show-app-tools");
}

if((quid == 0) || (quid == "noQvalue")){
// currMCollArr.push("aa-login");
} else {
// currMCollArr.push("aa-logout");
}
 
tmpStrbla = ""; 
tmpStrAdmnM = "";
iti = 0; 


tmpClsNoClctn ="txtSmall txtDecorNone";
// tmpClsNoClctn = currMCollItems[currMCollArr[iti]].c;
tmpClscClctn = tmpClsNoClctn;

while(iti < currMCollArr.length) {
if(theRetUIT == "noQvalue") {
if(currMCollArr[iti] == "break") {
tmpStrAdmnM += "<div>---</div>";
} else if(currMCollArr[iti] == "recent") {
tmpStrbla += "<div class=\"collection-item txtSmall txtBold\" style=\"margin-left:10px\">Recent:<br>" + currRcntActHstr.replace(/::/g, "<br>") + "</div>";
} else {
if(currMCollItems[currMCollArr[iti]].c == "collection-item") {
// tmpStrbla += "<a href=\"javascript:void(0);\" onclick=\"javascript:JSSHOP.ui.setNuCBBClickClr(this,'kcoll-menu-item','" + currMCollItems[currMCollArr[iti]].c + "', function(){"  + currMCollItems[currMCollArr[iti]].u + ";JSSHOP.ui.showHideElement('mmDdown','hide')}, 20);\" class=\"" + currMCollItems[currMCollArr[iti]].c + "\"><span><i class=\"menu-material-icons\">" + currMCollItems[currMCollArr[iti]].mi + "</i></span><span style=\"vertical-align:super;padding-left:12px;\">" + currMCollItems[currMCollArr[iti]].ti + "</span></a>";
} else {
// tmpStrAdmnM += "<a href=\"javascript:void(0);\" onclick=\"javascript:JSSHOP.ui.setNuCBBClickClr(this,'kcoll-menu-item','" + currMCollItems[currMCollArr[iti]].c + "', function(){"  + currMCollItems[currMCollArr[iti]].u + ";JSSHOP.ui.showHideElement('mmDdown','hide')}, 20);\" class=\"" + currMCollItems[currMCollArr[iti]].c + "\"><span><i class=\"menu-material-icons "  + currMCollItems[currMCollArr[iti]].c + "\">" + currMCollItems[currMCollArr[iti]].mi + "</i></span><span style=\"vertical-align:super;padding-left:12px;\">" + currMCollItems[currMCollArr[iti]].ti + "</span></a>";
}

 
if(currMCollItems[currMCollArr[iti]].nm) {
mlinkNm = currMCollItems[currMCollArr[iti]].nm;
} else {
mlinkNm = currMCollArr[iti];
}
if(currMCollItems[currMCollArr[iti]].h) {
tmpStrAdmnM += "<div style=\"\"><b>" + currMCollItems[currMCollArr[iti]].h + "</b></div>";
}




 // tmpStrAdmnM += "<div name=\"btnP-" + mlinkNm + "\"><a href=\"javascript:void(0);\" onclick=\"javascript:JSSHOP.ui.setNuCBBClickClr(this,'kcoll-menu-item','" + currMCollItems[currMCollArr[iti]].c + "', function(){"  + currMCollItems[currMCollArr[iti]].u + ";\" class=\"txtSmall txtDecorNone\"><span><i class=\"menu-material-icons\">" + currMCollItems[currMCollArr[iti]].mi + "</i></span><span style=\"vertical-align:super;padding-left:5px;\" class=\""  + tmpClscClctn + "\">" + currMCollItems[currMCollArr[iti]].ti + "</span></a>";
 tmpStrAdmnM += "<div name=\"btnP-" + mlinkNm + "\"><a href=\"javascript:void(0);\" onclick=\"javascript:JSSHOP.ui.setNuCBBClickClr(this,'kcoll-menu-item','" + currMCollItems[currMCollArr[iti]].c + "', function(){"  + currMCollItems[currMCollArr[iti]].u + "}, 20);\" class=\"txtDecorNone txtBold txtClrRed\">";


 if(currMCollItems[currMCollArr[iti]].mi) {
	tMIstr = currMCollItems[currMCollArr[iti]].mi;
	if(tMIstr.indexOf(".") != -1) {
	tMIstr = "<img src=\""  +   currMCollItems[currMCollArr[iti]].mi + "\" style=\"vertical-align: middle; max-width: 17px; max-height: 17px;\" class=\"icnsmlbtn\">";
	 } else {
		tMIstr = "<i class=\"nav-material-icons\">" + currMCollItems[currMCollArr[iti]].mi + "</i>";

	 }
tmpStrAdmnM += tMIstr;
	}

  tmpStrAdmnM += "<span style=\"padding-left:5px;\">" + currMCollItems[currMCollArr[iti]].ti + "</a></div>";

// tmpStrAdmnM += "<span name=\"btnP-" + mlinkNm + "\"><a href=\"javascript:void(0);\" onclick=\"javascript:JSSHOP.ui.setNuCBBClickClr(this,'kcoll-menu-item','" + currMCollItems[currMCollArr[iti]].c + "', function(){"  + currMCollItems[currMCollArr[iti]].u + ";JSSHOP.ui.showHideElement('mmDdown','hide')}, 20);\" class=\"txtSmall txtDecorNone\"><span><i class=\"menu-material-icons\">" + currMCollItems[currMCollArr[iti]].mi + "</i></span><span style=\"vertical-align:super;padding-left:5px;\" class=\""  + tmpClscClctn + "\">" + currMCollItems[currMCollArr[iti]].ti + "</span></a>";
if(currMCollItems[currMCollArr[iti]].i) {
tmpStrAdmnM += currMCollItems[currMCollArr[iti]].i;
}
tmpStrAdmnM += "</div>";




if(currMCollItems[currMCollArr[iti]].f) {
tmpStrAdmnM += currMCollItems[currMCollArr[iti]].f;
}

}

} else { // theRetUIT is not noQvalue
	if(currMCollItems[currMCollArr[iti]].c == "collection-item") {
		// tmpStrbla += "<a href=\"javascript:void(0);\" onclick=\"javascript:JSSHOP.ui.setNuCBBClickClr(this,'kcoll-menu-item','" + currMCollItems[currMCollArr[iti]].c + "', function(){"  + currMCollItems[currMCollArr[iti]].u + ";JSSHOP.ui.showHideElement('mmDdown','hide')}, 20);\" class=\"" + currMCollItems[currMCollArr[iti]].c + "\"><span><i class=\"menu-material-icons\">" + currMCollItems[currMCollArr[iti]].mi + "</i></span><span style=\"vertical-align:super;padding-left:12px;\">" + currMCollItems[currMCollArr[iti]].ti + "</span></a>";
		} else {
		// tmpStrAdmnM += "<a href=\"javascript:void(0);\" onclick=\"javascript:JSSHOP.ui.setNuCBBClickClr(this,'kcoll-menu-item','" + currMCollItems[currMCollArr[iti]].c + "', function(){"  + currMCollItems[currMCollArr[iti]].u + ";JSSHOP.ui.showHideElement('mmDdown','hide')}, 20);\" class=\"" + currMCollItems[currMCollArr[iti]].c + "\"><span><i class=\"menu-material-icons "  + currMCollItems[currMCollArr[iti]].c + "\">" + currMCollItems[currMCollArr[iti]].mi + "</i></span><span style=\"vertical-align:super;padding-left:12px;\">" + currMCollItems[currMCollArr[iti]].ti + "</span></a>";
		}
		tmpClsNoClctn = currMCollItems[currMCollArr[iti]].c;
		tmpClscClctn = tmpClsNoClctn;
		tmpClscClctn = "txtSmall txtDecorNone"
		if(currMCollItems[currMCollArr[iti]].nm) {
		mlinkNm = currMCollItems[currMCollArr[iti]].nm;
		} else {
		mlinkNm = currMCollArr[iti];
		}
		if(currMCollItems[currMCollArr[iti]].h) {
		tmpStrAdmnM += "<div style=\"\">ddd" + currMCollItems[currMCollArr[iti]].h + "</div>";
		}
		tmpStrAdmnM = "<div name=\"btnP-" + mlinkNm + "\">dsgdsgd<a href=\"javascript:void(0);\" onclick=\"javascript:JSSHOP.ui.setNuCBBClickClr(this,'kcoll-menu-item','" + currMCollItems[currMCollArr[iti]].c + "', function(){"  + currMCollItems[currMCollArr[iti]].u + "}, 20);\" class=\"txtASmall txtDecorNone\"><span><i class=\"menu-material-icons\">" + currMCollItems[currMCollArr[iti]].mi + "</i></span><span style=\"vertical-align:super;padding-left:5px;\" class=\""  + tmpClscClctn + "\">" + currMCollItems[currMCollArr[iti]].ti + "</span></a></div>";

		// tmpStrAdmnM += "<div style=\"padding-right:9px;margin:3px;\"  onclick=\"javascript:JSSHOP.ui.setNuCBBClickClr(this,'kcoll-menu-item','" + currMCollItems[currMCollArr[iti]].c + "', function(){"  + currMCollItems[currMCollArr[iti]].u + "}, 20);\" class=\"txtSmall txtBold txtDecorNone crsrPointer\"><table><tr><td><span><i class=\"menu-material-icons\">" + currMCollItems[currMCollArr[iti]].mi + "</i></span></td><td><span style=\"vertical-align:super;\" class=\""  + tmpClscClctn + "\">" + currMCollItems[currMCollArr[iti]].ti + "</span></td></tr></table></div>";
		if(currMCollItems[currMCollArr[iti]].i) {
		tmpStrAdmnM += currMCollItems[currMCollArr[iti]].i;
		}
		// tmpStrAdmnM += "</span>";
		
		if(currMCollItems[currMCollArr[iti]].f) {
		tmpStrAdmnM += currMCollItems[currMCollArr[iti]].f;
		}
} 



// tmpStrbla += "<a href=\"" + currMCollItems[currMCollArr[iti]].u + "\" class=\"" + currMCollItems[currMCollArr[iti]].c + "\"><span><i class=\"menu-material-icons\">" + currMCollItems[currMCollArr[iti]].mi + "</i></span><span style=\"vertical-align:super;padding-left:12px;\"><ti data-ison=\"" + currMCollItems[currMCollArr[iti]].ti + "\" data-desc=\"view\">" + currMCollItems[currMCollArr[iti]].ti + "</ti></span></a>";
iti++; 


}
console.log("tmpStrAdmnM: " + tmpStrAdmnM);
return tmpStrAdmnM;
}; 






/*
var doShopMnuLd = function(a,theResp,c) {
console.log("doShopMnuLd: " + theResp);
hasr = "n";
fullstr = "";
mnotAppended = "n";
     // var mainUL = document.getElementById("mnuULmain");// 

strMLink = "index.html?pid=aa-show-category";
 
var mainUL = getMMenu();

try {
var arrToFill = JSON.parse(theResp);

var len = arrToFill.length;
var iint = 0;
var pcid = 0;
tstr = "";
while(iint < len) {

ts = arrToFill[iint];
currMenuArr.push(ts);

 
 if(ts.cat_pid == "0") { // add only main categories to list


      tmpLI = document.createElement("li");
	tmpLI.className="omenuartigo";
 	
	tmpA = document.createElement('a');

	linkText = document.createTextNode(ts.cat_title);
	tmpA.appendChild(linkText);
	tmpA.title = ts.cat_title + "&nbsp;&nbsp;&nbsp;&nbsp;";
	tmpA.href = strMLink + "&ppid="+ts._id+"&cid="+ts.cat_coid+"&catid="+ts._id;

	tmpLI.appendChild(tmpA); 
	tmpUL = document.createElement("ul");
	tmpUL.className="animenu__nav__child";
	tmpUL.id = "mnuI" + ts._id;
	tmpLI.appendChild(tmpUL);
	mainUL.appendChild(tmpLI);
 
}
iint++;
}
 
document.getElementById("mnuT").appendChild(mainUL);

            imgplay = null;
            imgplay = new Image();
            imgplay.onload = function() {
               doSubMenuLoad()
            };
            imgplay.onerror = function() {
               doSubMenuLoad()
            };
            imgplay.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=";

document.getElementById("mnuT").appendChild(imgplay);

} catch(e) {
alert("doShopMnuLd.error: " + theResp);
}
};

*/