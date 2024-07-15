var tmpSQBArr = null;
var tmpVitemArr = null;
var tmpPrdMediaArr = null;
tmpPrdMediaArr = [];
tmpSQBArr = [];
tmpVitemArr = [];
var tmpVindex = 0;
currPgTitle = stxt[20];
document.title = currPgTitle; // set the page title 
var euiFFObjArr = null;
var euiFFObjArr = [];

ck_name = /^[A-Za-z0-9 ]{3,20}$/;
ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
ck_username = /^[A-Za-z0-9_]{3,20}$/;
ck_password =  /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;
ck_title = /^[A-Za-z0-9.\s]{3,120}$/;
ck_desc = /^[A-Za-z0-9.\s]{3,1820}$/;



 


/* from aa-show-part */


var tmpSQBArr = null;
var tmpVitemArr = null;
tmpSQBArr = [];
tmpVitemArr = [];
var tmpVindex = 0;
var tmpImgCtr = 0;
currIContent = "y"; // ajax request to include the tplates/... file or not 
currCartTShow = "y";
var objAllMakes = {"pi":0,"pn":"m","m1":{"id":"1","n":"ALPHA ROMEO"},"m2":{"id":"2","n":"AUDI"},"m3":{"id":"3","n":"BENTLEY"},"m4":{"id":"4","n":"BMW"},"m5":{"id":"5","n":"CADILLAC"},"m6":{"id":"6","n":"CHEVROLET"},"m7":{"id":"7","n":"CHRYSLER"},"m8":{"id":"8","n":"CITROEN"},"m9":{"id":"9","n":"DACIA"},"m10":{"id":"10","n":"DAEWOO"},"m11":{"id":"11","n":"DAHATSU"},"m12":{"id":"12","n":"DODGE"},"m13":{"id":"13","n":"DS"},"m14":{"id":"14","n":"FIAT"},"m15":{"id":"15","n":"FORD"},"m16":{"id":"16","n":"HONDA"},"m17":{"id":"17","n":"HYUNDAI"},"m18":{"id":"18","n":"INFINITI"},"m19":{"id":"19","n":"ISUZU"},"m20":{"id":"20","n":"IVECO"},"m21":{"id":"21","n":"JAGUAR"},"m22":{"id":"22","n":"JEEP"},"m23":{"id":"23","n":"KIA"},"m24":{"id":"24","n":"LADA"},"m25":{"id":"25","n":"LAMBORGHINI"},"m27":{"id":"27","n":"LANCIA"},"m28":{"id":"28","n":"LAND ROVER"},"m29":{"id":"29","n":"LEXUS"},"m30":{"id":"30","n":"MASERATI"},"m31":{"id":"31","n":"MAZDA"},"m32":{"id":"32","n":"MERCEDES BENZ"},"m33":{"id":"33","n":"MG"},"m34":{"id":"34","n":"MICROCAR"},"m35":{"id":"35","n":"MINI"},"m36":{"id":"36","n":"MITSUBISHI"},"m37":{"id":"37","n":"NISSAN"},"m38":{"id":"38","n":"OPEL"},"m39":{"id":"39","n":"PEUGEOT"},"m40":{"id":"40","n":"PONTIAC"},"m41":{"id":"41","n":"PORSCHE"},"m42":{"id":"42","n":"RENAULT"},"m43":{"id":"43","n":"ROVER"},"m44":{"id":"44","n":"SAAB"},"m45":{"id":"45","n":"SEAT"},"m46":{"id":"46","n":"SKODA"},"m47":{"id":"47","n":"SMART"},"m48":{"id":"48","n":"SSANGYONG"},"m49":{"id":"49","n":"SUBARU"},"m50":{"id":"50","n":"SUZUKI"},"m51":{"id":"51","n":"TESLA"},"m52":{"id":"52","n":"TOYOTA"},"m53":{"id":"53","n":"TRIUMPH"},"m54":{"id":"54","n":"VOLVO"},"m55":{"id":"55","n":"VW"}};
var arrAllYears = ["1905","1906","1907","1908","1909","1910","1911","1912","1913","1914","1915","1916","1917","1918","1919","1920","1921","1922","1923","1924","1925","1926","1927","1928","1929","1930","1931","1932","1933","1934","1935","1936","1937","1938","1939","1940","1941","1942","1943","1944","1945","1946","1947","1948","1949","1950","1951","1952","1953","1954","1955","1956","1957","1958","1959","1960","1961","1962","1963","1964","1965","1966","1967","1968","1969","1970","1971","1972","1973","1974","1975","1976","1977","1978","1979","1980","1981","1982","1983","1984","1985","1986","1987","1988","1989","1990","1991","1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021"];
var currCModelsObj = {};
var currPartsObj = {};
var currPIdxArr = [];
var currMakeID = 0;
var currMakeName = "Audi";
var currtMSstrS = "Audi";

function showSeries() {
document.location.href = "index.html?make=" + currMakeName + "&mk=" + currMakeID + "&series=" + currUrlArr.series + "&si=3613&pid=aa-show-series";
}

function showMake() {
document.location.href = "index.html?make=" + currMakeName + "&mk=" + currMakeID + "&pid=aa-show-make";
}

function showSModels() {
document.location.href = "index.html?make=" + currMakeName + "&series=" + currUrlArr.series + "&mk=" + currMakeID + "&md=" + currUrlArr.md  + "&pid=aa-show-series";
}

function showSModel() {
document.location.href = "index.html?make=" + currMakeName + "&series=" + currUrlArr.series + "&md=" + currUrlArr.md + "&mk=" + currMakeID +  "&pid=aa-show-model";
}

function doMake() {

if(currUrlArr.series) {
// inpSeries.value = currUrlArr.series;
}

if(currUrlArr.mk) {
tCMIStr =  "m" + currUrlArr.mk;
if(objAllMakes[tCMIStr]) {
// alert(objAllMakes[tCMIStr].n);
inpMakes.value = objAllMakes[tCMIStr].n;

currMakeID = currUrlArr.mk;
currMakeName = objAllMakes[tCMIStr].n;
JSSHOP.ajax.doNuAjaxPipe("inpModels", "misc/m" + currUrlArr.mk + ".txt", doMDLlinks);

}

}
}

function doMDLlinks(ttInp, ttObj, tobju) {
tMkObj = JSON.parse(ttObj);
currCModelsObj = null;
tLastN = "";
tTName = "";
tmpMdlID = 0;
currCModelsObj = JSON.parse(ttObj);
if(currUrlArr.md) {
tmpMdlID = currUrlArr.md;
}
for(var gkey in currCModelsObj) {
TMPnOBJ = currCModelsObj[gkey];
if(TMPnOBJ.n) {
tSSv = TMPnOBJ.n;
if(tSSv.indexOf(" ") != -1) {
tSpS = tSSv.split(" ");
tTName = tSpS[0];
} else {
tTName = tSSv;
}
tSSI =  TMPnOBJ.id;
if(tmpMdlID == TMPnOBJ.id) {

inpModel.value = TMPnOBJ.n;
currtMSstrS += "<a href=\"index.html?make=" + currMakeName + "&mk=" + currMakeID +  "&series=" + tTName + "&si=" + TMPnOBJ.id + "&pid=aa-show-series\">" + TMPnOBJ.n + "</a><br>";

} else {
}
tLastN = tTName;
}
}
// console.log(currtMSstrS);
}

function doMakes(ttInp, ttObj, tobju) {
	inp = document.getElementById(ttInp);

  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
tMkObj = ttObj;
arr = [];
/*
for(var gkey in tMkObj) {
if(tt[gkey].n){
arr.push(tt[gkey].n);
}
}
*/
tSSstr = "";
for(var gkey in tMkObj) {
       // for (i = 0; i < arr.length; i++) {


        /*check if the item starts with the same letters as the text field value:*/

		if(tMkObj[gkey].n) {
		 TMPnOBJ = tMkObj[gkey];
		 tSSv = TMPnOBJ.n;
           tSSstr += "<a href=\"index.html?make=" + TMPnOBJ.n + "&mk=" + TMPnOBJ.id +  "&pid=aa-show-make\">" + TMPnOBJ.n + "</a><br>";

		 if(tSSv.substr(0, 1).toUpperCase() == val.substr(0, 1).toUpperCase()){
		  tSSaN =  TMPnOBJ.n;
		 tSSI =  TMPnOBJ.id;
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + tSSv.substr(0, val.length) + "</strong>";
          b.innerHTML += tSSv.substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + tSSI + "::" + tSSaN + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
		  tInpStr = this.getElementsByTagName("input")[0].value;
		  tInpSplit = tInpStr.split("::");
	
              inp.value = tInpSplit[1];
		  // alert(tInpSplit[0] + " :: " + tInpSplit[1]);
		  JSSHOP.ajax.doNuAjaxPipe("inpModels", "misc/m" + tInpSplit[0] + ".txt", doModels);

              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
	 } // end of if tt[gkey].n
      }
console.log("tSSstr: " + tSSstr);
  });

 inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}



function doPartsAutoComp() {
tCatArrStr = "";
tACParr = [];
tACPIdxarr = [];
tACPObj = {};
tEPobj = currPartsObj;
tPPobj = tEPobj.pcats;
for(var gkey in tPPobj) {


tCatArrStr += gkey + " : " + tPPobj[gkey] + "<br>";
if(tEPobj.pprts[gkey].pts){
tCatPtsobj = tEPobj.pprts[gkey].pts;
for(var pcgkey in tCatPtsobj) {
tACParr.push(tCatPtsobj[pcgkey].n);
currPIdxArr.push(tCatPtsobj[pcgkey].id);

if(currUrlArr.prti == tCatPtsobj[pcgkey].id) {
inpParts.value = tCatPtsobj[pcgkey].n;
}
tPSTStr = "<a href=\"index.html?make=" + currMakeName + "&series=" + currUrlArr.series + "&mk=" + currMakeID + "&part=" + tCatPtsobj[pcgkey].n + "&prti=" + tCatPtsobj[pcgkey].id + "&pid=aa-show-part\">" + tCatPtsobj[pcgkey].n + "</a><br>";
tCatArrStr += tPSTStr;

// tCatArrStr += tCatPtsobj[pcgkey].id + " : " + tCatPtsobj[pcgkey].n + "<br>";
}
}
}
tPlnTstr = inpYears.value + " " + inpMakes.value + " " + inpModel.value + " " + inpParts.value;
mod_i_title.innerHTML = tPlnTstr;

    tfullprodid = inpYears.value + ":" + currUrlArr.md + ":" + currUrlArr.prti; 
	// alert("doItemAdd: " + tfullprodid);
    JSSHOP.shared.setFieldVal("mod_i_vala", tfullprodid);


// autocomplete(document.getElementById("inpParts"), tACParr);
// dvPartsLinks.innerHTML = tCatArrStr;
}


function showPartsList() {
tCatArrStr = "";
tEPobj = currPartsObj;
tPPobj = tEPobj.pcats;
for(var gkey in tPPobj) {
tCatArrStr += gkey + " : " + tPPobj[gkey] + "<br>";
if(tEPobj.pprts[gkey].pts){
tCatPtsobj = tEPobj.pprts[gkey].pts;
for(var pcgkey in tCatPtsobj) {
tCatArrStr += tCatPtsobj[pcgkey].id + " : " + tCatPtsobj[pcgkey].n + "<br>";
}
}
}

JSSHOP.ui.popAndFillLbox(tCatArrStr);
}







function doModels(ttInp, ttObj, tobju) {
	minp = document.getElementById(ttInp);
tMkObj = JSON.parse(ttObj);
currCModelsObj = null;
currCModelsObj = JSON.parse(ttObj);
//  alert(tMkObj.pn);
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  minp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
 

for(var gkey in tMkObj) {
       // for (i = 0; i < arr.length; i++) {

		 TMPnOBJ = tMkObj[gkey];
		 tSSv = TMPnOBJ.n;
		 tSSI =  TMPnOBJ.id;

        /*check if the item starts with the same letters as the text field value:*/

		if((tMkObj[gkey].yf) && (tMkObj[gkey].yf >= inpYears.value)){

		  tSSaN =  TMPnOBJ.n;
		 tSStN = tSSaN + "  ( " +  TMPnOBJ.yf + " - " + TMPnOBJ.yt + " )";
		 //  if((tSStN.toUpperCase().indexOf(val.toUpperCase()) != -1) && (val.length > 1)){
		 if(tSSv.substr(0, val.length).toUpperCase() == val.toUpperCase()){


		 tSSfN = tSSaN + "  ( " +  TMPnOBJ.yf + " - " + TMPnOBJ.yt + " )";
		
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + tSSfN.substr(0, val.length) + "</strong>";
          b.innerHTML += tSSfN.substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + tSSI + "::" + tSSfN + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
		  tInpStr = this.getElementsByTagName("input")[0].value;
		  tInpSplit = tInpStr.split("::");
	
              minp.value = tInpSplit[1];
		  // alert(tInpSplit[0] + " :: " + tInpSplit[1]);

              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);

        }

	 } // end of if tt[gkey].n

      }

  });

 minp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != minp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
doMDLlinks();
}


var finishpmks = function(aw, bw,cw) {
tL = JSON.parse(bw);
tIIn = 0;
tLlen = tL.length;
ttPIn = 0;
tFstr = "";
tNarr = [];


for(var gkey in tL) {
if(tt[gkey].n){
ttts = ttts + " : " + tt[gkey].n;
}
}




while(tIIn < tLlen) {
tLTS = "";
tASP = "";
tLTS = tL[tIIn];
tASP = tLTS.split("\t");
if(tASP[0] == ttPIn) {
} else {
ttPIn = tASP[0];
tFstr = tFstr + "\t" + ttPIn + "\n";
}
tIIn++;
}
console.log(tFstr);
};



var finishM = function(aw, bw,cw) {
tL = bw.split("\n");
tIIn = 0;
tLlen = tL.length;
alert("tLlen: " + tLlen);
ttPIn = 0;
tFstr = "";

while(tIIn < tLlen) {
tLTS = "";
tASP = "";
tLTS = tL[tIIn];
tASP = tLTS.split("\t");
if(tASP[0] == ttPIn) {
} else {
ttPIn = tASP[0];
tFstr = tFstr + "\t" + ttPIn + "\n";
}
tIIn++;
}
// console.log(tFstr);
};
var finishACAP = function(aw, bw,cw) {
autocomplete(document.getElementById(aw), bw.split("\n"));
};
var finishPts = function(aw, bw,cw) {
tCatArrStr = "";
currPartsObj = null;
// tEPobj = JSON.parse(bw);
currPartsObj = JSON.parse(bw);
doPartsAutoComp();
};




/* end of from aa-show-part */



var doDelIRdir = function(a,b,c) {
document.location.href = "index.html?pid=aa-edit-category&cid=" + cid + "&catid=" + catid + "&t=" + JSSHOP.getUnixTimeStamp();
};


var doN = function(a,b,c) {
// document.location.href = document.location.href + "&t=" + JSSHOP.getUnixTimeStamp();
doItemEdit();
};



var doneImgInsrt = function(a,b,c) {
try {
JSSHOP.shop.getPrdMedia(catid,itemid,"dadido");
// JSSHOP.shared.setFrmFieldVal("qmedia", "m_dadded", JSSHOP.getUnixTimeStamp());
if((isJApp !== "no") && (isPhP == "no")) { 
} else {
doAIU();
}
// doItemEdit();
} catch(e) {
alert(e);
}
};

var finishImgInsrt = function(theImg) {
try {
tMIPStr = JSSHOP.shared.getFrmFieldVal("qmedia", "m_file", 0);
if(tMIPStr.length < 3) {
JSSHOP.shared.setFrmFieldVal("qitem", "i_img", theImg);
procNuUIitem("qitem","i_img",itemid,theImg,"fnshProdMMain");
}
JSSHOP.shared.setFrmFieldVal("qmedia", "m_file", theImg); 
JSSHOP.shared.setFrmFieldVal("qmedia", "m_uid", quid);
JSSHOP.shared.setFrmFieldVal("qmedia", "m_coid", cid);
JSSHOP.shared.setFrmFieldVal("qmedia", "m_catid", catid);
JSSHOP.shared.setFrmFieldVal("qmedia", "m_pid", itemid);
// JSSHOP.shared.setFrmFieldVal("qmedia", "m_dadded", JSSHOP.getUnixTimeStamp());
tmpDOs = null;
tmpDOs = {};
tmpDOs["knvp"] = JSSHOP.shared.getFrmVals(document["qmedia"], "nada");
oi = getNuDBFnvp("qmedia",6,null,tmpDOs);
doQComm(oi["rq"], null, "doneImgInsrt");
} catch(e) {
alert(e);
}
}

var finishImgUload = function(theImg) {
try {

// JSSHOP.shared.setFrmFieldVal("qitem","i_img",theImg);
// document.getElementById("mod_i_img").value = theImg;
// document.getElementById("imgIedit").src = tImgstr;
finishImgInsrt(theImg);
} catch(e) {
alert(e);
}

};

var fnshProdMDel = function(aa,bb,cc) { 
JSSHOP.ui.closeLbox();
JSSHOP.shop.getPrdMedia(catid,itemid,"dadido")
};

var doPrdMDelete = function() { 
    if(confirm(stxt[42] + " " + stxt[19] + "?")) {
    procNuUIitem("qmedia","m_rtype",JSSHOP.shared.getFrmFieldVal("qmedia", "_id", 0),"0","fnshProdMDel");
    }
};

var fnshCatChange = function() { 
document.getElementById("mod_i_catid").disabled=false;
 JSSHOP.ui.setCBBClickClr(tdSpin,'bkgdClrDlg','clsDummy', function(){void(0)});
};



var doCatChange = function(theObj) { 
if((itemid == 0) || (currUrlArr.cmdci)){ // adding or copying new item. do nothing
} else {
document.getElementById("mod_i_catid").disabled=true;
objVal = JSSHOP.shared.getCurrSelectOpt(theObj);
procNuUIitem("qitem","i_catid",itemid,objVal,"fnshCatChange");
}
};

 
var fnshProdMMain = function(aa,bb,cc) { 
// alert(bb);
JSSHOP.ui.closeLbox();
showCurrImg();
};


var doPrdMMain = function() { 
    if(confirm("Set as main product picture?" + JSSHOP.shared.getFrmFieldVal("qmedia", "m_file", 0))) {
JSSHOP.shared.setFrmFieldVal("qitem", "i_img", JSSHOP.shared.getFrmFieldVal("qmedia", "m_file", 0));
    procNuUIitem("qitem","i_img",itemid,JSSHOP.shared.getFrmFieldVal("qmedia", "m_file", 0),"fnshProdMMain");
    }
};
 


var doQIMeta = function() {
    tmpMetaObj = null;
    tmpMetaObj = {};
    tmpMetaObj.qco = arrAllForms.qco.v[0];
    tmpMetaObj.qitem = arrAllForms.qitem.v[0];
    return JSON.stringify(tmpMetaObj);
};








var doDelIRdir = function(a,b,c) {
document.location.href = "index.html?pid=aa-edit-category&cid=" + cid + "&catid=" + catid + "&t=" + JSSHOP.getUnixTimeStamp();
};



var doFnshBCodeScan = function(a,b,c){
try {
tmpBCfld = document.getElementById("mod_i_bcode");
tmpBCfnish = null;
tmpBCfnish = [];
// tmpBCfnish = JSON.parse(b);
// document.getElementById("mod_i_bcode").innerHTML = b;  //tmpBCfnish.rs;
JSSHOP.ui.setCBBClickClr(tmpBCfld,'bkgdClrDlg','clsDummy', function(){void(0)});
} catch(e) {
alert("doFnshBCodeScan:error:  " + e);
}
};

var appFnshBCodeScan = function(theBCdata) {
try {
document.getElementById("fldChallArray").value = theBCdata;
tmpBCdata = document.getElementById("fldChallArray").value;
document.getElementById("mod_i_bcode").innerHTML = tmpBCdata;  //tmpBCfnish.rs;
procNuUIitem("qitem","i_bcode",JSSHOP.shared.getFrmFieldVal("qitem", "_id", 0),tmpBCdata,"doFnshBCodeScan");
} catch(e) {
alert("appFnshBCodeScan:error:  " + e  + "\r\n" + theBCdata);
}
};

var appFnshImgUload = function(theUri, theImg) {
try {


tImgstr = "images/pimgs/" + theImg; 
tIUID = JSSHOP.shared.getFrmFieldVal("qitem","_id",0);
pImgid = "prodI" + tIUID;

document.getElementById("fldChallArray").value = theUri;
tmpUri = document.getElementById("fldChallArray").value;

// JSSHOP.shared.setFrmFieldVal("qitem","i_vala",tmpUri);
// document.getElementById("mod_i_vala").value = tmpUri;

if(tmpUri.indexOf(".gif") != -1) {
JSSHOP.shared.setFrmFieldVal("qitem","i_vala","lcl-" + tmpUri);
document.getElementById("mod_i_vala").value = "lcl-" + tmpUri;
} else if(tmpUri.indexOf(".mp4") != -1) {
JSSHOP.shared.setFrmFieldVal("qitem","i_valb","lcl-" + tmpUri);
document.getElementById("mod_i_valb").value = "lcl-" + tmpUri;
} else {
JSSHOP.shared.setFrmFieldVal("qitem","i_img","lcl-" + tmpUri);
document.getElementById("mod_i_img").value = "lcl-" + tmpUri;
}
document.getElementById("fldChallArray").value = theImg;
tmpImg = document.getElementById("fldChallArray").value;
tImgstr = "data:image/jpeg;base64, " + tmpImg;

            imgplay = null;
            imgplay = new Image();
 
            imgplay.src = tImgstr;
 

document.getElementById("dvPrdMedia").appendChild(imgplay);



// document.getElementById(pImgid).src = tImgstr;
// JSSHOP.shared.setFrmFieldVal("qitem","i_img",tmpImg);
 
finishImgInsrt(tmpUri);
} catch(e) {
alert("appFnshImgUload:error:  " + e  + "\r\n" + theUri + "\r\n" + tImgstr);
}
};



var doFUJSLoad = function() {
try {
ttbtn = document.getElementById('uploadBtn');

if((isJApp !== "no") && (isPhP == "no")) { 
// alert("japp-no-php");
//  JSSHOP.loadScript("js/sau.js", JSSHOP.checkLoader,"js");
// JSSHOP.ui.addEvent(ttbtn, "click", function() { loadJSModal("tplates/aa-mod-media-chooser.html?tt=" + JSSHOP.getUnixTimeStamp()) });

JSSHOP.ui.addEvent(ttbtn, "click", function() { JSSHOP.jndroid.doPagePopUp("quickorder/media_chooser.html", "noQvalue");return false; });


JSSHOP.ui.showHideElement("tdAppBCodeBtn", "show");
app.setQIMeta(doQIMeta());
} else {

JSSHOP.loadScript("js/sau.js", JSSHOP.checkLoader,"js");

//JSSHOP.ui.addEvent(ttbtn, "click", function() { loadJSModal("tplates/aa-mod-media-chooser.html?tt=" + JSSHOP.getUnixTimeStamp()) });

// JSSHOP.ui.addEvent(ttbtn, "click", function() { JSSHOP.jndroid.doPagePopUp("quickorder/app_imgselect.html", "noQvalue") });

}
 
} catch(e) {
alert(e);
}
};


var showCurrImg = function() {
tmpIvaval = i_img.value;
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

/*
* opens up the item popup
*/

var doItemEditPop = function() {
    loadJSModal("tplates/aa-mod-edit-item.html?tt=" + JSSHOP.getUnixTimeStamp());
}
var doQIedit = function(iei) {
    tmpVindex = iei;
	 
    JSSHOP.shared.setFrmVals("qitem",tmpVitemArr[iei],function() {doItemEditPop()});
};

/*
* returns the html link for product editing popup
*/
var getQIstr = function(rid, tmprhtml) {
    strTret = "<div onclick=\"JSSHOP.ui.setCBBClickClr(this,'crsrPointer brdrClrHdr','crsrPointer brdrNone', function(){doQIedit(" + rid + ");});\" class=\"crsrPointer brdrNone txtBig\">";
    strTret += tmprhtml + "</div>";

    return strTret;
};


/*
* renders all items in the category
*/

var renderNuTQBItems = function(a,b,c) {
// JSSHOP.ui.setNuSaveBtnEnd(btnEUsave, function(){ void(0); });
JSSHOP.ui.setCBBClickClr(btnEUsave,'cls_button-save  bkgdClrDGreen txtClrWhite','cls_button-save', function(){document.getElementById("btnEUsave").innerHTML=stxt[21];document.getElementById("btnEUsave").disabled=false;});
};



var renderDBis = function(theElem, theResp, marble) {
    // alert("renderDBis: " + theResp);
    tmpVitemArr = null;
    tmpVitemArr = [];
    tmpVitemArr = JSON.parse(theResp);
    JSSHOP.shared.setFrmVals("qitem",tmpVitemArr[0],void(0));
    JSSHOP.shared.setDynFieldVals(tmpVitemArr[0],"mod_");
     if(tmpVitemArr[0].i_img){
	tmpIva = tmpVitemArr[0].i_img;
	if(tmpIva == "noQvalue") {
	} else {
	tImgstr = "images/pimgs/" + tmpVitemArr[0].i_img; 
	document.getElementById("imgIedit").src =  tImgstr;
	}
  }
};


var preRenderTQBItems = function(a, b, c) {
    // alert("pre: " + JSON.stringify(b));
    tmpDOs = null;
    tmpDOs = {};
    tmpDOs["ws"] = "where _id=? and i_rtype=?";
    tmpDOs["wa"] = [itemid,"5"];
    oi = getNuDBFnvp("qitem", 5, null, tmpDOs);
    doQComm(oi["rq"], null, "renderDBis");
    // renderTQBItems();
};






var doCBcatedit = function(a, b, c) {
       //  JSSHOP.ui.setCBBClickClr(mmn,'cls_button cls_button-medium brdrClrDlg txtClrHdr','nanimenu', function(){ doMMenuLd() });
         JSSHOP.ui.setCBBClickClr(mmn,'cls_button cls_button-medium brdrClrDlg txtClrHdr','nanimenu', function(){ document.location.href=document.location.href + '&fc=y' });

   
};

var doCatTitleEdit = function(qcid) {
JSSHOP.shared.setFrmFieldVal("qcat", "cat_dadded", JSSHOP.getUnixTimeStamp()); 
tmpDOs = null;
tmpDOs = {};
tmpDOs["ws"] = "where _id=?";
tmpDOs["wa"] = [qcid];
tmpDOs["knvp"] = JSSHOP.shared.getKNVParr(JSSHOP.shared.getDynFrmVals(document["qcat"], "tmp_"));
oi = getNuDBFnvp("qcat",7,null,tmpDOs);
doQComm(oi["rq"], null, "doCBcatedit");
};



var fnshRespItemAdd = function(a, b, c) {
    if(b.indexOf("_id") != -1) {
    ttddA =  JSON.parse(b);
    tmpIva = ttddA[0]._id;
document.location.href = "index.html?pid=aa-edit-item&cid=" + cid + "&catid=" + JSSHOP.shared.getCurrSelectOpt(document.getElementById("mod_i_catid")) + "&itemid=" + tmpIva + "&t=" + JSSHOP.getUnixTimeStamp();
}
    // renderTQBItems();
};


var doRespItemAdd = function(a, b, c) {
    // alert("pre: " + JSON.stringify(b));

    tmpDOs = null;
    tmpDOs = {};
    tmpDOs["l"] = "1";
    tmpDOs["ws"] = "where i_catid=? and i_rtype=?";
    tmpDOs["wa"] = [JSSHOP.shared.getCurrSelectOpt(document.getElementById("mod_i_catid")),"5"];
    oi = getNuDBFnvp("qitem", 5, null, tmpDOs);
    doQComm(oi["rq"], null, "fnshRespItemAdd");
    // renderTQBItems();
};

var doItemEdit = function() {
    JSSHOP.ui.closeLbox();

 
    tmpFobj = null;
    tmpFobj = {};




    JSSHOP.shared.setFrmFieldVal("qitem", "i_uid", quid);
    JSSHOP.shared.setFrmFieldVal("qitem", "i_coid", cid);

    JSSHOP.shared.setFrmFieldVal("qitem", "i_dadded", JSSHOP.getUnixTimeStamp());


    tmpFobj["knvp"] = JSSHOP.shared.getKNVParr(JSSHOP.shared.getDynFrmVals(document["qitem"], "mod_"));
    tmpFobj["ws"] = "where _id=?";
    tmpFobj["wa"] = [itemid];

    if((itemid == 0) || (currUrlArr.cmdci)){
    oi = getNuDBFnvp("qitem", 6, null, tmpFobj);
    } else {
    oi = getNuDBFnvp("qitem", 7, null, tmpFobj);
    }






    // JSSHOP.ui.setCBBClickClr(tblCntEditItem,'cls_button cls_button-medium brdrClrDlg txtClrHdr','txtClrHdr bkgdClrWhite', function(){JSSHOP.ui.closeLbox()});
 
    // if(JSSHOP.shared.valVOarr(euiFFObjArr, "dvVdtnError")) {}

   if((itemid == 0) || (currUrlArr.cmdci)){ 
  doQComm(oi["rq"], null, "doRespItemAdd"); 
   } else {
   doQComm(oi["rq"], null, "renderNuTQBItems"); 
   }
};



var doItemAdd = function(t, am) {
	// JSSHOP.shared.setDynFrmVals(document["qitem"], "clear");
    JSSHOP.shared.setFrmFieldVal("qitem", "i_desc", "....");
    JSSHOP.shared.setFrmFieldVal("qitem", "i_uid", quid);
    JSSHOP.shared.setFrmFieldVal("qitem", "i_coid", cid);
    JSSHOP.shared.setFrmFieldVal("qitem", "i_dadded", JSSHOP.getUnixTimeStamp());
    tfullprodid = inpYears.value + ":" + currUrlArr.md + ":" + currUrlArr.prti; 
	alert("doItemAdd: " + tfullprodid);
    JSSHOP.shared.setFrmFieldVal("qitem", "i_vala", tfullprodid);
    tmpFobj = null;
    tmpFobj = {};
    tmpFobj["knvp"] = JSSHOP.shared.getKNVParr(JSSHOP.shared.getDynFrmVals(document["qitem"], "tmp_"));
    oi = getNuDBFnvp("qitem", 6, null, tmpFobj);
    JSSHOP.ui.setCBBClickClr(divQitems,'cls_button cls_button-medium brdrClrDlg txtClrHdr','txtClrHdr bkgdClrWhite', function(){JSSHOP.ui.closeLbox()});
    //alert("doItemAdd: rq" + oi["rq"]); 
    // tmpVitemArr.push(JSSHOP.shared.getDynFrmVals(document["qitem"], "tmp_"));
    doQComm(oi["rq"], null, "preRenderTQBItems");
};
 

var doItemDelete = function(theElem, qid, theRid) {
    carr = tmpVitemArr[qid];
    narr = removeArrElement(tmpVitemArr, theRid);
    theElem.parentNode.parentNode.parentNode.deleteRow(theRid);
    tmpVitemArr = null;
    tmpVitemArr = narr;
    JSSHOP.ui.setCBBClickClr(divQitems,'cls_button cls_button-medium brdrClrDlg txtClrHdr','txtClrHdr bkgdClrWhite', function(){JSSHOP.ui.closeLbox()});
    JSSHOP.shared.setFrmFieldVal("qitem", "i_dadded", JSSHOP.getUnixTimeStamp());
    JSSHOP.shared.setFrmFieldVal("qitem", "i_rtype", "0");
tmpDOs = null;
tmpDOs = {};
tmpDOs["ws"] = "where _id=?";
tmpDOs["wa"] = [qid];
tmpDOs["knvp"] = JSSHOP.shared.getFrmVals(document["qitem"], "nada");
oi = getNuDBFnvp("qcartitem",7,null,tmpDOs);
doQComm(oi["rq"], null, "renderNuTQBItems");
  //   procNuUIitem("qitem","i_rtype",qid,"0","renderNuTQBItems") ;
 
};
 
var doNuItemDelete = function() {
 
    if(confirm(stxt[42] + " " + stxt[19] + "?")) {
    procNuUIitem("qitem","i_rtype",JSSHOP.shared.getFrmFieldVal("qitem", "_id", 0),"0","doDelIRdir");
    }
};


var doProcAvail = function(tta, ttn, ttc) {
document.getElementById("btnEUsave").className = "cls_button cls_button-medium";
document.getElementById("btnEUsave").disabled=false;
};

var doProcNAvail = function(tta, ttn, ttc) {
document.getElementById("btnEUsave").className = "cls_button_disabled cls_button-medium";
document.getElementById("btnEUsave").disabled=true;
};

var procProdOk = function(theTmpTCB) {
 
    if(theTmpTCB.checked) {
    JSSHOP.shared.setFrmFieldVal("qitem", "i_rtype", 5);
    procNuUIitem("qitem","i_rtype",JSSHOP.shared.getFrmFieldVal("qitem", "_id", 0),"5","doProcAvail");
    } else {
    JSSHOP.shared.setFrmFieldVal("qitem", "i_rtype", 0);
    procNuUIitem("qitem","i_rtype",JSSHOP.shared.getFrmFieldVal("qitem", "_id", 0),"0","doProcNAvail");
    }
};

var getPrdImgEditDv = function(tpIncrNPI) {
tpPIEDv = document.createElement('div');
try {
tsa = null;
tsa = {};
tsa = tmpPrdMediaArr[tpIncrNPI];
// alert(tsa.m_file + " :: " + JSSHOP.shared.getFrmFieldVal("qmedia", "m_file", 'nada'));
  // JSSHOP.ui.setCBBClickClr(tblCntEditItem,'cls_button cls_button-medium brdrClrDlg txtClrHdr','txtClrHdr bkgdClrWhite', function(){JSSHOP.ui.closeLbox()});
if(tsa.m_file.indexOf(".mp4") != -1) {
tmpRetStr = "<video controls><source type=\"video/mp4\" src=\"" + JSSHOP.shop.getPrdImgStr("prodpg", tsa.m_file) +  "\"></video>";

} else {
tmpRetStr = "<img src=\"" + JSSHOP.shop.getPrdImgStr("prodpg", tsa.m_file) +  "\" style=\"width: 100%\"  class=\"\" onclick=\"alert('" + JSSHOP.shared.getFrmFieldVal("qmedia", "_id", "0") + "');\">"
}
tmpRetStr += "<div class=\"dvTxtBtns\"><input type=\"button\" class=\"btnTxtLabel\" value=\"Set as Main\" onclick=\"javascript:doPrdMMain();\">   |   <input type=\"button\" class=\"btnTxtLabel\" value=\"Delete\" onclick=\"javascript:doPrdMDelete();\"></div>";
tmpRetStr += "<br><br>";
tpPIEDv.innerHTML = tmpRetStr;
return tpPIEDv;
} catch(e) {
alert("getPrdImgEditDv " + e);
tpPIEDv.innerHTML = "oops. something wrong..";
return tpPIEDv;
}
};

var doPrdMIcnClick = function(tpDPRC) {
ttta = tmpRPMArr[tpDPRC];
	if(ttta.m_file.indexOf(".mp4") != -1) {
		JSSHOP.shared.setFrmVals('qmedia', tmpRPMArr[tpDPRC], function() {  app.getPlayMPF(ttta.m_file) } );
		// JSSHOP.shared.setFrmVals('qmedia', tmpRPMArr[tpDPRC], function() { JSSHOP.ui.popAndAppendLbox(getPrdImgEditDv(tpDPRC),'y') } );

	} else {
		JSSHOP.shared.setFrmVals('qmedia', tmpRPMArr[tpDPRC], function() { JSSHOP.ui.popAndAppendLbox(getPrdImgEditDv(tpDPRC),'y') } );
	}
// JSSHOP.shared.setFrmFieldVal("qmedia", "m_dadded", JSSHOP.getUnixTimeStamp());
};



var dadido = function(aa,bb,cc) {
try {
if(bb.indexOf("_id") != -1) {
tmpRPMArr = null;
tmpRPMArr = [];
tmpRPMArr = JSON.parse(bb);
tmpPrdMediaArr = null;
tmpPrdMediaArr = [];
tmpPrdMediaArr = JSON.parse(bb); 

tmmpII = 0;
tmpRetStr = "<div>";
tmpAlen = tmpPrdMediaArr.length;
        while (tmmpII < tmpAlen) {
            tsa = tmpPrdMediaArr[tmmpII];
tmpClsBrdrClr = "brdrGrey";
if(tsa.m_file.indexOf(".mp4") != -1) {
tmpClsBrdrClr = "brdrClrHdr";
}
if(tsa.m_file.indexOf(".gif") != -1) {
tmpClsBrdrClr = "brdrClrRed";
}



		tmpRetStr += "<img src=\"" + JSSHOP.shop.getPrdImgStr("prdmedia", tsa.m_file) +  "\" class=\"icnprdmediabtn crsrPointer " + tmpClsBrdrClr + "\" onclick=\"doPrdMIcnClick(" + tmmpII + ");\">";   
            tmmpII++;
        }
tmpRetStr += "</div>";
JSSHOP.ui.setTinnerHTML("dvPrdMedia","");

JSSHOP.ui.setTinnerHTML("dvPrdMedia",tmpRetStr);
}
} catch(e) {
alert("rndrPrdMedia " + e);
}
};







var doSubCOpts = function() {

tmpSlct = document.getElementById("mod_i_catid");
if(isJavaFx == "ayes") { 

JSSHOP.ui.showHideElement("tdCatSelect", "hide");
} else {
theDAArr = currMenuArr;
ilen = theDAArr.length;
rweint = 0;



while(rweint < ilen) {
tssa = null;
tssa = theDAArr[rweint];

if(tssa.cat_pid == 0) {
nada = "doNada";
} else {
 JSSHOP.shared.addOptAtVal(tmpSlct, tssa.cat_pid, tssa._id, "      " +  tssa.cat_title, "");

}
 
rweint++;
 
}

 

if((itemid == 0) || (currUrlArr.cmdci)){ 
JSSHOP.ui.toggleVisibility("dvUploadBtn");
}


JSSHOP.shared.setCurrSelectOpt(document.getElementById("mod_i_catid"), catid);


}
};



 



var doShopsList = function(a,theResp,c) {

hasr = "n";
fullstr = "";
var arrToFill = JSON.parse(theResp);
var len = arrToFill.length;
var iint = 0;
var pcid = 0;
tstr = "";
tmpSlct = document.getElementById("mod_i_couid");
while(iint < len) {
ts = arrToFill[iint];
JSSHOP.shared.addOptAtVal(tmpSlct, iint, ts._id, "      " +  ts.c_title, "");
iint++;
}
newel = document.createElement('div');

if(arrToFill[0]) {
} else {
document.location.href = "index.html?pid=aa-add-new-shop";
// document.getElementById("dvShops").innerHTML = "Add a new shop";
}
 
 
};
 
var setItemCatID  = function(aw, bw,cw) {
tCatArrStr = "";
if(bw.indexOf("_id") != -1) {
tpObj = JSON.parse(bw);


tSetGoodU = document.location.href;
tfStr = tSetGoodU + "&cid=" + tpObj[0].cat_coid + "&catid=" + tpObj[0]._id;
document.location.href = tfStr;
// alert("setItemCatID: " + tpObj[0]._id);
} else {
alert("setItemCatID: " + bw);
}
};



var dmyFnishCntLoad = fnishCntLoad;
fnishCntLoad = function() {


if(cid == 0) {
tmpDOs = null;
tmpDOs = {};
tmpDOs["ws"] = "where c_uid=? and c_rtype=?";
tmpDOs["wa"] = [quid,5];
tmpDOs["l"] = 25;
oi = getNuDBFnvp("qco",5,null,tmpDOs);
doQComm(oi["rq"], null, "doShopsList");

}



// hide the category select on javafx. it freezez the screen


doFUJSLoad();
// JSSHOP.ui.setTinnerHTML("tdTitleBar", currPgTitle);
 


// alert(JSON.stringify(arrAllForms["qitem"]));
JSSHOP.shared.setDynFrmVals(document["qitem"], "mod_");
showCurrImg();
// JSSHOP.shared.setFrmFieldVal("qmedia", "m_dadded", JSSHOP.getUnixTimeStamp());
JSSHOP.shop.getPrdMedia(catid,itemid,"dadido");

atfuh = nCurrFFieldOb();
atfuh.fid = "mod_i_itemid";
atfuh.fdv = "abc123";
atfuh.fve = stxt[1004];
atfuh.lid = "lbl_i_itemid"; 
atfuh.ltxt = stxt[602]; 
euiFFObjArr.push(atfuh);


tfuh = nCurrFFieldOb();
tfuh.fid = "mod_i_title";
tfuh.fdv = stxt[10];
tfuh.fvr = ck_title;
tfuh.fve = stxt[1004];
tfuh.lid = "lbl_i_title"; 
tfuh.ltxt = stxt[10]; 
euiFFObjArr.push(tfuh);

tfid = nCurrFFieldOb();
tfid.fid = "mod_i_desc";
tfid.fdv = stxt[40];
// tfid.fvr = ck_desc;
tfid.fve = stxt[1003];
tfid.lid = "lbl_i_desc"; 
tfid.ltxt = stxt[40]; 
euiFFObjArr.push(tfid); 


tfip = nCurrFFieldOb();
tfip.fid = "mod_i_price_b";
tfip.fdv = "0.99";
tfip.fve = stxt[1003];
tfip.lid = "lbl_i_price_b"; 
tfip.ltxt = stxt[18]; 
euiFFObjArr.push(tfip); 

tfic = nCurrFFieldOb();
tfic.fid = "mod_i_catid";
tfic.fdv = stxt[16];
tfic.fve = stxt[1003];
tfic.lid = "lbl_i_catid"; 
tfic.ltxt = stxt[16]; 
euiFFObjArr.push(tfic); 


tfok = nCurrFFieldOb();
tfok.fid = "mod_i_rtype";
tfok.lid = "lbl_i_rtype"; 
tfok.ltxt = stxt[58]; 
tfok.fcl = function() { procProdOk(document.getElementById("mod_i_rtype")); };
euiFFObjArr.push(tfok); 



tfim = nCurrFFieldOb();
tfim.fid = "uploadBtn"; 
// euiFFObjArr.push(tfim); 


tfsb = nCurrFFieldOb();
tfsb.fid = "btnEUsave";
tfsb.fty = "button";
tfsb.fcl = function() { JSSHOP.ui.setSaveBtnClick(this, function(){doItemEdit()}) };

// tfsb.fcl = function() { JSSHOP.ui.setCBBClickClr(this,'cls_button cls_button-medium brdrClrRed txtClrHdr','cls_button cls_button-medium', function(){doItemEdit()}); };
// tfsb.fcl = function() { doItemEdit() };
euiFFObjArr.push(tfsb);

JSSHOP.shared.initFrmComps(euiFFObjArr);


// JSSHOP.shared.initFrmComps(euiFFObjArr);
tmpSlct = document.getElementById("mod_i_catid");
JSSHOP.shared.removeOptions(tmpSlct);
// arrToFill = JSSHOP.shared.sort(currMenuArr, "cat_pid", "sortDesc");
// arrToFill = JSSHOP.shared.sort(currMenuArr, "cat_valb", "sortAsc");

JSSHOP.shared.addCurrSelectOpt(tmpSlct, "0", "Top Main");
var len = currMenuArr.length;
var iint = 0;
var pcid = 0;
tstr = "";
arrToOptFill = null;
arrToOptFill = currMenuArr;
while(iint < len) {
ts = arrToOptFill[iint];
if(ts.cat_pid == 0) { // add only main categories to list
JSSHOP.shared.addOptAtVal(tmpSlct, "noQvalue", ts._id, ts.cat_title, "txtClrWhite bkgdClrHdr");
// JSSHOP.shared.addCurrSelectOpt(tmpSlct, ts._id, ts.cat_title);
} 

iint++;
}

if(JSSHOP.shared.getFrmFieldVal("qitem", "i_bcode", 5) == "5") {
document.getElementById("mod_i_bcode").innerHTML="";
}
if(JSSHOP.shared.getFrmFieldVal("qitem", "i_rtype", 5) == "5") {
document.getElementById("mod_i_rtype").checked=true;
document.getElementById("btnEUsave").disabled=false;
// document.getElementById("btnEUsave").className = "cls_button cls_button-medium";
} else {
document.getElementById("mod_i_rtype").checked=false;
document.getElementById("btnEUsave").disabled=true;
document.getElementById("btnEUsave").className = "cls_button_disabled";
}

setTimeout("doSubCOpts()", 3000);




if(currUrlArr.y) {
inpYears.value = currUrlArr.y;
}


doMakes("inpMakes", objAllMakes, "nada");
JSSHOP.ajax.doNuAjaxPipe("inpParts", "misc/x_cp_" + usrlang + ".txt", finishPts);
doMake(); 
 

if(currUrlArr.catid) {
} else {

if(currUrlArr.prtpi) {

tmpDOs = null;
tmpDOs = {};
tmpDOs["ws"] = "where cat_uid=? and cat_vala=?";
tmpDOs["wa"] = [quid,currUrlArr.prtpi];
tmpDOs["l"] = 25;
oi = getNuDBFnvp("qcat",5,null,tmpDOs);
doQComm(oi["rq"], null, "setItemCatID");
}
}
/*
if(getViewportWidth() > 480) {
} else {
scrollToElement("tdTitleBar");
}
*/


 


};
 
