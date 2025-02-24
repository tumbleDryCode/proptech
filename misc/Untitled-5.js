

var doShopsList = function(a,theResp,c) {
    console.log("doShopsList: " + theResp);
// document.getElementById("includedContent").innerHTML = theResp;
//  alert("doShopsList: " + theResp);
hasr = "n";
fullstr = "";
tFullTknCoSTr = "";
var arrToFill = JSON.parse(theResp);
var len = arrToFill.length;
var iint = 0;
var pcid = 0;
tstr = "";
while(iint < len) {
ts = arrToFill[iint];
tFullTknCoSTr += ":" + tssl._id + ":";
tstr += "<tr>";
// tstr += "<td>" + tssl._id + "</td>";
//   tstr += "<td><a href=\"index.html?pid=aa-edit-place&tpid=" + tssl._id + "\">" + tssl._id + "</a></td>";

tstr += "<td><a href=\"javascript:eindex('aa-edit-place', 'pid=aa-edit-place&tpid=" + tssl._id + "');\">" + tssl._id + "</a></td>";
if(tssl.c_category == "202") {
    tstr += "<td><a href=\"javascript:eindex('aa-edit-parts-category', 'pid=aa-edit-parts-category&cid=" + tssl._id + "');\"><img src=\"images/misc/parts_w.gif\" style=\"vertical-align: middle; max-width: 27px; max-height: 27px;\" class=\"icnsmlbtn\"></a></td>";
    } else {
    tstr += "<td><a href=\"javascript:eindex('aa-edit-svs-categories', 'pid=aa-edit-svs-categories&cid=" + tssl._id + "');\"><img src=\"images/misc/mec2_w.gif\" style=\"vertical-align: middle; max-width: 27px; max-height: 27px;\" class=\"icnsmlbtn\"></a></td>";
    }
tstr += "<td><a href=\"javascript:eindex('aa-show-place', 'pid=aa-show-place&cid=" + tssl._id + "');\">" + tssl.c_name + "</a></td>";

// tstr += "<td><a href=\"index.html?pid=aa-edit-place&tpid=" + tssl._id + "\">" + tssl.c_name + "</a></td>";
// tstr += "<td style=\"min-width: 38px;\" class=\"txtClrHdr\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>";
//  tstr += "<td class=\"txtClrHdr\"><a href=\"index.html?pid=aa-edit-categories&cid=" + tssl._id + "\"><i class=\"small-material-icons txtClrDlg\" alt=\"edit\" title=\"edit\">&#xe3c9;</i></a></td>";
if(tssl.c_category == "202") {
tstr += "<td><a href=\"javascript:eindex('aa-edit-parts-category', 'pid=aa-edit-parts-category&cid=" + tssl._id + "');\"><i class=\"small-material-icons txtClrDlg\" alt=\"edit\" title=\"edit\">&#xe3c9;</i></a></td>";
} else {
tstr += "<td><a href=\"javascript:eindex('aa-edit-svs-categories', 'pid=aa-edit-svs-categories&cid=" + tssl._id + "');\"><i class=\"small-material-icons txtClrDlg\" alt=\"edit\" title=\"edit\">&#xe3c9;</i></a></td>";
}
// tstr with eindex

tstr += "</tr>";
iint++;
}
newel = document.createElement('div');

tAddCoUrlSTr = "<span class=\"txtBold txctClrHdr bkgdClrNrml\"><a href=\"javascript:eindex('aa-edit-place','pid=aa-edit-place');\" class=\"txtBold txctClrHdr bkgdClrNrml\">+" + stxt[70] + "</a></span>";

if(arrToFill[0]) {
strTHhtml = "<th><span style=\"margin-right: 10px; margin-top: 10px\" class=\"txtBold\">ID</span></th>";
strTHhtml += "<th><span style=\"margin-right: 10px; margin-top: 10px\" class=\"txtBold\">ID</span></th>";

// strTHhtml += "<th><span style=\"margin-right: 10px; margin-top: 10px\" class=\"txtBold\"><i class=\"menu-material-icons\">&#xe896</i></span></th>";
strTHhtml += "<th><span style=\"margin-right: 10px; margin-top: 10px\" class=\"txtBold\">" + stxt[404] + "</span></th>";

 strTHhtml += "<th><span style=\"margin-right: 10px; margin-top: 10px\" class=\"txtBold\">" + stxt[95] + "</span></th>";

// strTHhtml += "<th><span style=\"margin-right: 10px; margin-top: 10px\" class=\"txtBold\"><i class=\"menu-material-icons\">&#xe896</i></span>View</th>";
tmpFstr = getTblSortStr(strTHhtml, tstr);
tmpFFstr = "<div class=\"slmtable bkgdClrWhite brdrClrHdr\" style=\"margin: 0 auto;max-width:600px;padding: 10px;margin-left: 15px;margin-right: 15px;\"><div class=\"txtBold txtSmall txtClrHdr\">" + stxt[519] + "</div>" + tmpFstr + "</div>";

// create an add company button that loads eindex('aa-edit-place', 'pid=aa-edit-place');
tmpFFstr += "<div class=\"slmtable bkgdClrWhite brdrClrHdr\" style=\"margin: 0 auto;max-width:600px;padding: 10px;margin-left: 15px;margin-right: 15px;\">" + tAddCoUrlSTr + "</div>";
document.getElementById("dvShops").innerHTML = tmpFFstr;
} else {
tmpFFstr = "<div class=\"slmtable bkgdClrWhite brdrClrHdr\" style=\"margin: 0 auto;max-width:600px;padding: 10px;margin-left: 15px;margin-right: 15px;\"><div class=\"txtBold txtSmall txtClrHdr\">" + stxt[519] + "</div>" + stxt[520] + "</div>";
document.getElementById("dvShops").innerHTML = tmpFFstr;
}
// check if cuid cookie is set and if not set it with a tFullTknCoSTr string
if(JSSHOP.cookies.getCookie("cuid") !== null) {
if((JSSHOP.cookies.getCookie("cuid") !== tFullTknCoSTr) || (JSSHOP.cookies.getCookie("cuid") == "") || (JSSHOP.cookies.getCookie("cuid") == "null") || (JSSHOP.cookies.getCookie("cuid") == "undefined") || (JSSHOP.cookies.getCookie("cuid") == "noQvalue")) {
JSSHOP.cookies.setCookie("cuid",tFullTknCoSTr,"90","","","");
}
} else {
JSSHOP.cookies.setCookie("cuid",tFullTknCoSTr,"90","","","");
}

};
 

