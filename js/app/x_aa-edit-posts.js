var tmpPostsArr = [];
var tmpGPostsLArr = [];
var currPgTitle = stxt[402];
var currIContent = "y";

var doPostsList = function(a,rfb,c) {
    if(rfb.indexOf("_id") != -1) {
  tmpPostsArr = "";
  tmpPostsArr = [];
  tmpPostsArr = JSON.parse(rfb);
 currUsrUpdtsArr = tmpPostsArr;
  rnderPostsTbl("_id");
    } else {
      // create a new div informing that you have no posts
      var noPostsDiv = document.createElement("div");
      // align
      noPostsDiv.style.textAlign = "center";
      //  eindex('aa-add-post', 'pid=aa-add-post');
      noPostsDiv.innerHTML = "<a href=\"javascript:eindex('aa-add-post', 'pid=aa-add-post');\"><u>" + stxt[108] + "</u></a>";
      document.getElementById("includedContent").appendChild(noPostsDiv);
    }
  };





 var getPostsLst = function(tPrpIarr) {

    var aulen = tPrpIarr.length;
    var iupint = 0;
    var pucid = 0;
    autstr = "";
    tpshdSTr = "";
    fullurpstr = "";
    while(iupint < aulen) {
        tsuar = tPrpIarr[iupint];


        atstr = "";
        atstr += "<tr>";

       //  tSTstr =  ts.u_name + ts.u_fullname + ts.u_cat;


        tsUT = tsuar.p_cat;
        tsrtUT = tsuar.p_cat;

         tUrlDecTitle = " ";
        atstr += "<td style=\"text-align: left\"><a href=\"javascript:eindex('aa-edit-post','pid=aa-edit-post&tpstid=" + tsuar._id + "');\">" + tsuar._id + "</a></td>";
        atstr += "<td style=\"text-align: left\"><a href=\"javascript:eindex('aa-edit-post','pid=aa-edit-post&tpstid=" + tsuar._id + "');\">" + svftObj["posttype"][tsuar.p_ptype] + "</a></td>";

        tdecdttl = "";
        tdecdttl = decodeURIComponent(tsuar.p_title);
        if(tdecdttl.length > 30) {
            tUrlDecTitle = tdecdttl.substring(0, 30) + "...";
        } else {
            tUrlDecTitle = tdecdttl;
        }
        atstr += "<td style=\"text-align: left\"  nowrap=\"nowrap\">";
        // atstr += "<div  onclick=\"javascript:eindex('aa-show-prop','pid=aa-show-prop&prpid=" + aprpObj._id + "')\" class=\"crsrPointer\"><img alt=\"Profile\" src=\"images/user/" + aprpObj.u_icon + "\"  class=\"icnRndSmUser\" align=\"absmiddle\"><br><span class=\"txtSmall txtClrGrey\">Edit</span></div>";
        atstr += "<div onclick=\"javascript:eindex('aa-show-post','pid=aa-show-update&tupid=" + tsuar._id + "')\" class=\"crsrPointer\">";
        // atstr += "<img alt=\"Profile\" src=\"images/user/" + tsuar.p_image + "\"  class=\"icnRndDSmUser\" align=\"absmiddle\">&nbsp;";
        atstr +=  "<span class=\"txtBold txtCLrHdr\">" +  tUrlDecTitle +  "</span></div></td>";
       atstr += "<td style=\"text-align: left\"><a href=\"javascript:eindex('aa-edit-post','pid=aa-edit-post&tpstid=" + tsuar._id + "');\"><i class=\"menu-material-icons\" alt=\"edit\">&#xe3c9;</i></a></td>";


          atstr += "</td>";
        atstr += "</tr>";
        autstr += atstr;
        tmpULTarr.push(atstr);
    iupint++;
    }

    return autstr;
    };

    var rnderFItems = function(trSrtIdx) {

      rnderPostsTbl(trSrtIdx);
    }

 var rnderPostsTbl = function(tSrtIdx) {

    hasr = "n";
    fullupstr = "";

tHdrArr = null;
tHdrArr = "";
tHdrArr = [];
tHdFObj = {};
tHdFObj["fld"] = "_id";
tHdFObj["nm"] = "ID";
tHdrArr.push(tHdFObj);

tAHdFObj = {};
tAHdFObj["fld"] = "p_ptype";
tAHdFObj["nm"] = "Tipo";
tHdrArr.push(tAHdFObj);

tBHdFObj = {};
tBHdFObj["fld"] = "p_title";
tBHdFObj["nm"] = stxt[97]; // Name
tHdrArr.push(tBHdFObj);
tBHdFObj = {};

tBHdFObj = {};
tBHdFObj["fld"] = "_id";
tBHdFObj["nm"] = "<span style=\"margin-right: 10px; margin-top: 10px\" class=\"nav-material-icons txtBold\"><i class=\"nav-material-icons\">&#xe3c9</i></span>";
tHdrArr.push(tBHdFObj);

currACTblCnt = tHdrArr.length;

    tmpULTarr = null;
    tmpULTarr = "";
    tmpULTarr = [];
    tmpGPostsLArr = null;
    tmpGPostsLArr = "";
    tmpGPostsLArr = [];
    // currGSarr = currUzsarr;


    tSrtIdx = "_id";
    // tSrtIdx = "p_dadded";
    // currSortIdx[tSrtIdx] = "sortDesc";
   //  tmpGPostsLArr = JSSHOP.shared.sort(tmpPostsArr, tSrtIdx, "sortDesc");
    tmpGPostsLArr = JSSHOP.shared.getSrtdArr(tmpPostsArr, tSrtIdx);
    tRndrINGARr = tmpGPostsLArr;

    tRndrStr = getPostsLst(tRndrINGARr);
    // alert('rnderUEdtPrpItms - tSrtIdx: ' + tSrtIdx);

    newel = document.createElement('div');

    if(tmpGPostsLArr[0]) {
    strTHhtml = JSSHOP.shared.getTblHdrs(tHdrArr);
    // strTHhtml = JSSHOP.shared.getNurTblHdrs(tHdrArr, "rndrUEdtPrpItms");
    }
    tmpFstr = getTblSortStr(strTHhtml, tRndrStr);

    //
      //  <div class="tableFixHead"></div>
    tmpFFstr = "<div class=\"dtable_wrapper\"><div class=\"dtableFixHead\"><div id=\"dvPrpsTbl\">" + tmpFstr + "</div></div></div>";
    document.getElementById("dvPostsList").innerHTML = tmpFFstr;
    JSSHOP.ui.doAutoComp(document.getElementById("inpACSearch"), tmpULTarr);
    // alert('rndrUEdtPrpItms - tSrtIdx: ' + tSrtIdx);

 };



/*
CREATE TABLE `qposts` (
  `_id` int(10) NOT NULL AUTO_INCREMENT,
  `p_title` varchar(100) NOT NULL,
  `p_content` longtext NOT NULL,
  `p_image` varchar(300) NOT NULL,
  `p_privacy` varchar(12) NOT NULL,
  `p_vala` varchar(64) NOT NULL,
  `p_added` varchar(12) NOT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_c

<form name="qposts">
<input type="hidden" name="_id" value="" data-prval="disnull">
<input type="hidden" name="p_rtype" id="p_rtype" value="5" data-prval="disnull">
<input type="hidden" name="p_uid" id="p_uid" value="5" data-prval="disnull">
<input type="hidden" name="p_title" id="p_title" value="" data-prval="disnull">
<input type="hidden" name="p_content" id="p_content" value="" data-prval="disnull">
<input type="hidden" name="p_image" id="p_image" value="default.jpg" data-prval="disnull">
<input type="hidden" name="p_privacy" id="p_privacy" value="0" data-prval="disnull">
<input type="hidden" name="p_vala" id="p_vala" value="" data-prval="disnull">
<input type="hidden" name="p_added" id="p_added" value="" data-prval="disnull">
</form>
*/




    var dmyFnishCntLoad = fnishCntLoad;
fnishCntLoad = function() {
 //  alert('fnishCntLoad');
 document.title = currPgTitle;
 JSSHOP.ads.doGenericPlug('mpmenu',3,'dvPartLinks')

 tmpDOs = {};
 tmpDOs["ws"] = "where p_uid = ? and p_rtype = ?";
 tmpDOs["wa"] = [quid, 5];
 tmpDOs["o"] = "_id desc";

 oi = getNuDBFnvp("qposts",5,null,tmpDOs);
 currRQtable = "qposts";
 currRQstr = oi["rq"];
 // alert("edit users currRQstr: " + currRQstr);
 doQComm(oi["rq"], null, "doPostsList");
return dmyFnishCntLoad;
};
