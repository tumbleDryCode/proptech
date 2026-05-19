currIContent == "y"
var euiFFObjArr = null;
var euiFFObjArr = [];
var tmpOldFFvals = null;
var tmpOldFFvals = {};
var currPgTitle = stxt[100];


    function showMoreUpdtCntnt(tMCDiv,tMCbtn) {
        console.log("showMoreUpdtCntnt: " + tMCDiv + " " + tMCbtn);
        tAMCDiv = document.getElementById(tMCDiv);
        tAMCbtn = document.getElementById(tMCbtn);
        tAMCDiv.style.height = "auto";
        tAMCDiv.style.overflow = "auto";
        tAMCbtn.style.display = "none";
        tAMCbtn.style.visibility = "hidden";

    }

var dmyFnishCntLoad = fnishCntLoad;
fnishCntLoad = function() {
    document.title = currPgTitle;
    JSSHOP.ads.doGenericPlug('mpmenu',3,'dvPartLinks');




if(currUrlArr.tupid) {
    frupid = currUrlArr.tupid;
    if(frupid.indexOf("-") != -1) {
    frupidA = frupid.split("-");
    currUrlArr.tupid = frupidA[0];
    currUrlArr.usrlang = frupidA[1];
    usrlang = frupidA[1];
    tupid = currUrlArr.tupid;
    }
    tUFObj = {};
tUFObj["uplmt"] = 1;
tUFObj["uppstid"] = tupid;
tUFObj["upcb"] = "jshp_ads_showUpdtsFeed";
 JSSHOP.ads.doUpdatesFeed(tUFObj);
 getCommentsDiv(currUrlArr.tupid, "post", null);
} else {
}

 };
