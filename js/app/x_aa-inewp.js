currIContent == "y"

function doMPropsList(aaw,aww,cww) {
JSSHOP.ui.setTinnerHTML("includedContent",aaw + aww);
};

var dmyFnishCntLoad = fnishCntLoad;
fnishCntLoad = function() {
  // alert('fnishCntLoad');
 tmpDOqs = null;
tmpDOqs = {};
tmpDOqs["ws"] = "where _id>?";
tmpDOqs["wa"] = [0];
tmpDOqs["l"] = 45;
oia = getNuDBFnvp("quser",5,null,tmpDOqs);

doQComm(oia["rq"], null, "doMPropsList");
return dmyFnishCntLoad;
};