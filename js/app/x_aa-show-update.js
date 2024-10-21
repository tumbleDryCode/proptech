currIContent == "y"
var euiFFObjArr = null;
var euiFFObjArr = [];
var tmpOldFFvals = null;
var tmpOldFFvals = {};
  
var dmyFnishCntLoad = fnishCntLoad;
fnishCntLoad = function() {
if(currUrlArr.tupid) {
    tUFObj = {};
tUFObj["uplmt"] = 1;
tUFObj["uppstid"] = currUrlArr.tupid;
tUFObj["upcb"] = "jshp_ads_showUpdtsFeed";
 JSSHOP.ads.doUpdatesFeed(tUFObj);
} else {
}
 };

 