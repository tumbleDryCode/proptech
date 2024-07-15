function doMPropsList(aaw,aww,cww) {
JSSHOP.ui.setTinnerHTML("includedContent",aaw + aww);
// alert('doMPropsList - aaw: ' + aww);
};

var dmyFnishCntLoad = fnishCntLoad;
fnishCntLoad = function() {
 //  alert('fnishCntLoad');
 tmpDOqs = null;
tmpDOqs = {};
tmpDOqs["ws"] = "where bhk=?";
tmpDOqs["wa"] = [5];
tmpDOqs["l"] = 45;
oia = getNuDBFnvp("property",5,null,tmpDOqs);
doQComm(oia["rq"], null, "doMPropsList");
return dmyFnishCntLoad;
};