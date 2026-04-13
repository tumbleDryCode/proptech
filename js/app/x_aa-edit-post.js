currIContent == "y"
var euiFFObjArr = null;
var euiFFObjArr = [];
var tmpOldFFvals = null;
var tmpOldFFvals = {};
var tmpSvBtnObj = null;
var tmpPrpLinksArr = null;
var tmpPrpLinksArr = [];
var tmpPstUsrArr = null;
var tmpPstUsrArr = [];
var tmpPstPrpsArr = null;
var tmpPstPrpsArr = [];


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














var fnshPTypeChange = function() {
    document.getElementById("dvDemoView").innerHTML = "...../.....";
    document.getElementById("tmp_p_ptype").disabled=false;
    JSSHOP.ui.setCBBClickClr(tmp_p_ptype,'bkgdClrDlg',tmp_p_ptype.className, function(){void(0)});
    };

function setTPstUsrsArr(a,b,c) {
    try {
        document.getElementById("dvDemoView").innerHTML = "...../.....";

        JSSHOP.ui.closeLbox();
        tmpPstUsrArr = null;
        tmpPstUsrArr = [];
        tmpPstUsrArr = JSON.parse(b);
        console.log("setTPstUsrsArr: " + tmpPstUsrArr);
        tPostTypIs = JSSHOP.shared.getCurrSelectOpt(tmp_p_ptype);
        switch(tPostTypIs) {
            case "pcarousel":

            tCaroStr = JSSHOP.ads.getSwiperUStr(tmpPstUsrArr);
            document.getElementById("dvDemoView").innerHTML = tCaroStr;
            tSwpObj = {};
            tSwpObj["slidesPerView"] = 3;
            tSwpObj["spaceBetween"] = 10;
            tSwpObj["loop"] = true;
           //  tSwpObj["autoplay"] = 2500;
            tSwpObj["autoplayDisableOnInteraction"] = false;
            tSwpObj["pagination"] = ".swiper-pagination";
            tSwpObj["paginationClickable"] = true;
            tSwpObj["nextButton"] = ".swiper-button-next";
            tSwpObj["prevButton"] = ".swiper-button-prev";
            tSwpObj["grabCursor"] = true;

            JSSHOP.ads.loadSwiperObj(tSwpObj);
            break;
            case "pimage":
            tImgHTML = JSSHOP.ads.getEditorUStr(tmpPstUsrArr);
            tinyMCE.activeEditor.setContent(tImgHTML);
            break;
            default:
                break;
            }


        // alert("setTPstUsrsArr: " + tmpPstUsrArr);
        } catch(e) {
            alert("setTPstUsrsArr: " + e);
        }
    }

function setTPstPrpsArr(a,b,c) {
    document.getElementById("dvDemoView").innerHTML = "...../.....";
    tmpPstPrpsArr = null;
    tmpPstPrpsArr = [];
    tmpPstPrpsArr = JSON.parse(b);
    console.log("setTPstPrpsArr: " + tmpPstPrpsArr);
    JSSHOP.ui.closeLbox();

    try {
        tPostTypIs = JSSHOP.shared.getCurrSelectOpt(tmp_p_ptype);

        switch(tPostTypIs) {
            case "pcarousel":
                tPrpsSwpStr = JSSHOP.ads.getSwprPrpStr(tmpPstPrpsArr);
                document.getElementById("dvDemoView").innerHTML = tPrpsSwpStr;
                tSwpObj = {};
                tSwpObj["slidesPerView"] = 3;
                tSwpObj["spaceBetween"] = 10;
                tSwpObj["loop"] = true;
                // tSwpObj["autoplay"] = 2500;
                tSwpObj["autoplayDisableOnInteraction"] = false;
                tSwpObj["pagination"] = ".swiper-pagination";
                tSwpObj["paginationClickable"] = true;
                tSwpObj["nextButton"] = ".swiper-button-next";
                tSwpObj["prevButton"] = ".swiper-button-prev";
                tSwpObj["grabCursor"] = true;
                JSSHOP.ads.loadSwiperObj(tSwpObj);

             break;
             case "pimage":

                tImgHTML = JSSHOP.ads.getEditorPrpStr(tmpPstPrpsArr);
                tinyMCE.activeEditor.setContent(tImgHTML);
            default:
                break;
            }


        // alert("setTPstPrpsArr: " + tmpPstPrpsArr);
        } catch(e) {
            alert("setTPstPrpsArr: " + e);
        }
    }


var doPstTypOpts = function(theObj) {
    objVal = JSSHOP.shared.getCurrSelectOpt(theObj);
    tTChngStr = "";
    switch(objVal) {
        case "users":
        tTChngStr += "Layout type changed to users.";
        if(tmpPstUsrArr[0]) {
        // has postUsrs array
            setTPstUsrsArr(null,JSON.stringify(tmpPstUsrArr),null);
        } else {
            tmpDOs = {};
            tmpDOs["ws"] = "where _id > ?";
            tmpDOs["wa"] = [0];
            tmpDOs["l"] = 12;

            oi = getNuDBFnvp("quser",5,null,tmpDOs);
            currRQtable = "quser";
            currRQstr = oi["rq"];

            // alert("edit users currRQstr: " + currRQstr);
            doQComm(oi["rq"], null, "setTPstUsrsArr");
        }

    break;
    case "props":
        if(tmpPstPrpsArr[0]) {
        // has postPrps array
            setTPstPrpsArr(null,JSON.stringify(tmpPstPrpsArr),null);
        } else {
            tmpDOys = {};
            tmpDOys["ws"] = "where _id > ?";
            tmpDOys["wa"] = [0];
            tmpDOys["l"] = 12;
            oiy = getNuDBFnvp("property",5,null,tmpDOys);
            currRQtable = "property";
            currRQstr = oi["rq"];
            // alert("edit users currRQstr: " + currRQstr);
            doQComm(oiy["rq"], null, "setTPstPrpsArr");
        }


    break;
    default:
    tTChngStr += "Layout type changed to props.";
    break;
    }


    JSSHOP.ui.popAndFillLbox(tTChngStr);

    // procNuUIitem("qposts","p_ptype",currUrlArr.tpstid,objVal,"fnshPTypeChange");
    };




var OlddoPTypeChange = function(theObj) {
    // use \u to escape the unicode characters for the special characters in the strings
    // document.getElementById("tmp_p_ptype").disabled=true;
    objVal = JSSHOP.shared.getCurrSelectOpt(theObj);
    tTChngStrObj = {};
    tTChngStrObj["en_us"] = "";
    tTChngStrObj["pt_pt"] = "";
    tTChngStrObj["spa_spa"] = "";
    hasSlect = "no";
    switch(objVal) {
        case "ppost":
        tTChngStrObj["en_us"] += "Post type changed to post.";
        tTChngStrObj["pt_pt"] += "Tipo de post alterado para post.";
        tTChngStrObj["spa_spa"] += "Tipo de publicacion cambiado a publicacion.";
        break;
        case "pcontent":
        tTChngStrObj["en_us"] += "Post type changed to content. A content post is more of a blog post.";
        tTChngStrObj["pt_pt"] += "Tipo de post alterado para conteudo. Um post de conteúdo \u00e9 mais um post de blog.";
        tTChngStrObj["spa_spa"] += "Tipo de publicacion cambiado a contenido. Una publicacion de contenido es mas un blog.";
        break;
        case "pimage":
        tTChngStrObj["en_us"] += "Post type changed to image. The image is created from the content.";
        tTChngStrObj["en_us"] += "You can prefill content with user or property layouts.";
        tTChngStrObj["pt_pt"] += "Tipo de post alterado para imagem. A imagem \u00e9 criada a partir do conteúdo.";
        tTChngStrObj["pt_pt"] += "Você pode preencher o conteúdo com layouts de usuario ou propriedade.";
        tTChngStrObj["spa_spa"] += "Tipo de publicacion cambiado a imagen. La imagen se crea a partir del contenido.";
        tTChngStrObj["spa_spa"] += "Puede rellenar el contenido con diseños de usuario o propiedad.";
        hasSlect = "yes";
        break;
        case "pcarousel":
        tTChngStrObj["en_us"] += "Post type changed to carousel. A sliding image gallery is created from user or property listings.";
        tTChngStrObj["pt_pt"] += "Tipo de post alterado para carrossel. Uma galeria de imagens deslizantes \u00e9 criada a partir de listagens de usuarios ou propriedades.";
        tTChngStrObj["spa_spa"] += "Tipo de publicacion cambiado a carrusel. Se crea una galería de imagenes deslizantes a partir de listados de usuarios o propiedades.";
        hasSlect = "yes";
        break;
        case "pmap":
        tTChngStrObj["en_us"] += "Post type changed to map. A map is created from user or property listings.";
        tTChngStrObj["pt_pt"] += "Tipo de post alterado para mapa. Um mapa  criado a partir de listagens de usuarios ou propriedades.";
        tTChngStrObj["spa_spa"] += "Tipo de publicacion cambiado a mapa. Se crea un mapa a partir de listados de usuarios o propiedades.";
        hasSlect = "yes";
        break;
        default:
        tTChngStrObj["en_us"] += "Post type changed to post.";
        tTChngStrObj["pt_pt"] += "Tipo de post alterado para post.";
        tTChngStrObj["spa_spa"] += "Tipo de publicacion cambiado a publicacion.";
        break;
        }
        if(hasSlect == "yes") {
            tTChngStrObj["en_us"] += "Plase select layout type: ";
            tTChngStrObj["en_us"] += "<select id=\"inpPTselect\" name=\"inpPTselect\" >";
            tTChngStrObj["en_us"] += "<option value=\"props\">Properties</option>";
            tTChngStrObj["en_us"] += "<option value=\"users\">Users</option>";
            tTChngStrObj["en_us"] += "</select>";
            tTChngStrObj["en_us"] += "<input type=\"button\" value=\"Save\" onclick=\"javascript:doPstTypOpts(document.getElementById('inpPTselect'));\">";
            tTChngStrObj["pt_pt"] += "Selecione o tipo de layout: ";
            tTChngStrObj["pt_pt"] += "<select id=\"inpPTselect\" name=\"inpPTselect\" >";
            tTChngStrObj["pt_pt"] += "<option value=\"props\">Propriedades</option>";
            tTChngStrObj["pt_pt"] += "<option value=\"users\">Usuarios</option>";
            tTChngStrObj["pt_pt"] += "</select>";
            tTChngStrObj["pt_pt"] += "<input type=\"button\" value=\"Salvar\" onclick=\"javascript:doPstTypOpts(document.getElementById('inpPTselect'));\">";
            tTChngStrObj["spa_spa"] += "Seleccione el tipo de diseño: ";
            tTChngStrObj["spa_spa"] += "<select id=\"inpPTselect\" name=\"inpPTselect\" >";
            tTChngStrObj["spa_spa"] += "<option value=\"props\">Propiedades</option>";
            tTChngStrObj["spa_spa"] += "<option value=\"users\">Usuarios</option>";
            tTChngStrObj["spa_spa"] += "</select>";
            tTChngStrObj["spa_spa"] += "<input type=\"button\" value=\"Salvar\" onclick=\"javascript:doPstTypOpts(document.getElementById('inpPTselect'));\">";
         }
            tTChngStrObj["en_us"] += "<input type=\"button\" value=\"Close\" onclick=\"javascript:JSSHOP.ui.closeLbox();\">";
            tTChngStrObj["pt_pt"] += "<input type=\"button\" value=\"Fechar\" onclick=\"javascript:JSSHOP.ui.closeLbox();\">";
            tTChngStrObj["spa_spa"] += "<input type=\"button\" value=\"Cerrar\" onclick=\"javascript:JSSHOP.ui.closeLbox();\">";

    JSSHOP.ui.popAndFillLbox(tTChngStrObj[usrlang]);
    // procNuUIitem("qposts","p_ptype",currUrlArr.tpstid,objVal,"fnshPTypeChange");
    };
var fnshPrivChange = function() {
    document.getElementById("tmp_p_privacy").disabled=false;
     JSSHOP.ui.setCBBClickClr(tmp_p_privacy,'bkgdClrDlg','clsDummy', function(){void(0)});
    };



    var doPrivacyChange = function(theObj) {
    document.getElementById("tmp_p_privacy").disabled=true;
    objVal = JSSHOP.shared.getCurrSelectOpt(theObj);
    procNuUIitem("qposts","p_privacy",currUrlArr.tpstid,objVal,"fnshPrivChange");
    };

function setPostImgs(a,theAIb,c) {
    console.log("setPostImgs: " + a + " " + theAIb + " " + c);

    try {
        tmpPrpLinksArr = null;
        tmpPrpLinksArr = [];

    if(theAIb.indexOf("_id") != -1) {

		tAiretArr = JSON.parse(theAIb);
		var len = tAiretArr.length;
        tstr = "";

        iint = 0;
        while (iint < len) {

             tBsj = tAiretArr[iint];
             if(tAiretArr[iint]["m_file"] == p_image.value) {
              tstr += "<div style=\"float:left\" class=\"crsrPointer brdrClrRed\">";

            } else {
			tstr += "<div style=\"float:left\" class=\"crsrPointer\">";
            }
 			tstr += "<img src=\"images/ucontent/" + tAiretArr[iint]["m_file_thumb"] + "\" class=\"icnmedbtn slmtable\" onclick=\"javascript:JSSHOP.ui.popAndFillLbox(getPropIEditDv('" + tAiretArr[iint]["_id"] + "','" + tAiretArr[iint]["m_file"] + "'));\">";
			tstr += "</div>";

			iint++;
		} // end while

        tstr += "<div style=\"clear:both\"></div>";
		document.getElementById("dvPostImgs").innerHTML = tstr;

	} // end if _id

	} catch(e) {
		alert("setPostImgs: " + e);
	}
}

function getPostImgs() {
    tmpFobj = null;
    tmpFobj = {};
    tmpFobj["ws"] = "where m_pid=? and m_rtype=?";
    tmpFobj["wa"] = [currUrlArr.tpstid, 5];
    oi = getNuDBFnvp("qmedia", 5, null, tmpFobj);
    doQComm(oi["rq"], null, "setPostImgs");
}


function fnishMPstAdd(aa,bb,cc) {
    getPostImgs();
    JSSHOP.ui.closeLbox();
    };

var finishMPstUld = function(theMMum) {
    try {


        image = null;
        image = new Image();
        image.src = "images/ucontent/s_thumb" + theMMum;
                // document.getElementById('dvPLogoImg').style.backgroundImage="url(images/slogos/s_thumb" + theMMum + ")";
         JSSHOP.shared.setFrmFieldVal("qmedia", "m_file", theMMum);

        // document.getElementById('dvPLogoImg').style.backgroundImage="url(images/slogos/s_thumb" + theMMum + ")";
        document.getElementById("dvPostImgs").appendChild(image);
         JSSHOP.shared.setFrmFieldVal("qmedia", "m_file", theMMum);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_file_thumb", "s_thumb" + theMMum);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_coid", currUrlArr.tpstid);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_uid", quid);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_pid", currUrlArr.tpstid);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_dadded", JSSHOP.getUnixTimeStamp());

        tmpDOs = null;
        tmpDOs = {};
        tmpDOs["knvp"] = JSSHOP.shared.getFrmVals(document["qmedia"], "nada");
        oi = getNuDBFnvp("qmedia", 6, null, tmpDOs);
        doQComm(oi["rq"], null, "fnishMPstAdd");
    } catch(e) {
        alert("finishMPstUld:" + e);
        }
    };

    function fnishTMCload(atheAWV,btheAWV) {
        try {

            console.log("fnishTMCload: " + atheAWV + " " + btheAWV);
            tPVal = document.getElementById("p_content").value;
            // javascript function to url decode
            //  tUrlDd = tPVal;
            tUrlDd = decodeURIComponent(tPVal);
             alert("fnishTMCload:tUrlDdC " + tUrlDd);
            dcpCntSTr = LZString.decompressFromEncodedURIComponent(tUrlDd);
            console.log("fnishTMCload.dcpCntSTr: " + dcpCntSTr);
            tinyMCE.activeEditor.setContent(dcpCntSTr);
            // set tnicmce editor content to
        } catch(e) {
            alert("fnishTMCload: " + e);
        }
    }
function loadPstTnyI() {
    JSSHOP.loadScript("js/tinymce/init-tinymce.js", donada, "js");
}

function setUPostSave(a,b,c) {
    console.log("setUPostSave: " + a + " " + b + " " + c);
    if(currUrlArr.tpstid) {
    JSSHOP.ui.popAndFillLbox("Post saved. " + a + " " + b + " " + c);
    } else {
    JSSHOP.ui.popAndFillLbox("Post added. " + a + " " + b + " " + c);
    }
    JSSHOP.ui.setCBBClickClr(tmpSvBtnObj,'cls_button cls_button-medium  bkgdClrDGreen txtClrWhite','cls_button cls_button-medium  bkgdClrHdr txtClrWhite', function(){tmpSvBtnObj.innerHTML=stxt[21];tmpSvBtnObj.disabled=false;});
}

function setUPostDel(a,b,c) {
    console.log("setUPostDel: " + a + " " + b + " " + c);
    JSSHOP.ui.popAndFillLbox("Post deleted. " + a + " " + b + " " + c);
   // JSSHOP.ui.setCBBClickClr(tmpSvBtnObj,'cls_button cls_button-medium  bkgdClrDGreen txtClrWhite','cls_button cls_button-medium  bkgdClrHdr txtClrWhite', function(){tmpSvBtnObj.innerHTML=stxt[21];tmpSvBtnObj.disabled=false;});
    eindex('aa-edit-posts', 'pid=aa-edit-posts');
}

function doPostDel() {
    if(confirm("Are you sure you want to delete this post?")) {

        tmpFobj = null;
        tmpFobj = {};
        tmpFobj["ws"] = "where _id=?";
        tmpFobj["wa"] = [currUrlArr.tpstid];

        // oi = getNuDBFnvp("qposts", 7, null, tmpFobj);
        procNuUIitem("qposts", "p_rtype", currUrlArr.tpstid, "10", "setUPostDel");
        // doQComm(oi["rq"], null, "setUPostDel");
        // JSSHOP.ui.popAndFillLbox("Post deleted.");
       //  JSSHOP.ui.setCBBClickClr(tmpSvBtnObj,'cls_button cls_button-medium  bkgdClrDGreen txtClrWhite','cls_button cls_button-medium  bkgdClrHdr txtClrWhite', function(){tmpSvBtnObj.innerHTML=stxt[21];tmpSvBtnObj.disabled=false;});
    } else {
       //  JSSHOP.ui.popAndFillLbox("Post not deleted.");
       //  JSSHOP.ui.setCBBClickClr(tmpSvBtnObj,'cls_button cls_button-medium  bkgdClrDGreen txtClrWhite','cls_button cls_button-medium  bkgdClrHdr txtClrWhite', function(){tmpSvBtnObj.innerHTML=stxt[21];tmpSvBtnObj.disabled=false;});
    }

    }
function fnishUPstEdt(a,b,c) {
    console.log("fnishUPstEdt: " + a + " " + b + " " + c);
    JSSHOP.ui.popAndFillLbox("Post saved. " + a + " " + b + " " + c);
    JSSHOP.ui.setCBBClickClr(tmpSvBtnObj,'cls_button cls_button-medium  bkgdClrDGreen txtClrWhite','cls_button cls_button-medium  bkgdClrHdr txtClrWhite', function(){tmpSvBtnObj.innerHTML=stxt[21];tmpSvBtnObj.disabled=false;});
}

function doPostEdit() {
     try {
    console.log("doPostEdit");
     // tTMCcntStr = tinyMCE.activeEditor.getContent();
    tmpSvBtnObj = document.getElementById("btnEUsave");
    tTMCcntStr =  tmp_p_content_ifr.contentWindow.document.body.innerHTML;
    tLZenced = LZString.compressToEncodedURIComponent(tTMCcntStr);
    document.getElementById("p_content").value = tLZenced;
    document.getElementById("p_title").value = document.getElementById("tmp_p_title").value;
    document.getElementById("p_uid").value = quid;
    document.getElementById("p_dmodified").value = JSSHOP.getUnixTimeStamp();
    if(document.getElementById("p_ptype").value == "pimage") {
        // Save both properties array and demo editor HTML
        daTAbodE = taDemoEdtr_ifr.contentWindow.document.body;
        daDiv = daTAbodE.querySelector("#dvTMCdemo");
        if (daDiv) {
            dTABEstr = daDiv.outerHTML;
            dTABLZd = LZString.compressToEncodedURIComponent(dTABEstr);

            ttSlctdPrpsArr = JSSHOP.shared.getSlctdPrpsArr() || [];
            console.log("Selected properties array: ", ttSlctdPrpsArr);
            tSlctdPrpsStr = JSON.stringify(ttSlctdPrpsArr);
            tZpdProps = LZString.compressToEncodedURIComponent(tSlctdPrpsStr);
            tZpd = tZpdProps + "dlmtd" + dTABLZd;
            document.getElementById("p_vars").value = tZpd;
        } else {
            console.error("dvTMCdemo div not found in editor for saving");
        }
    }
       // document.getElementById("p_vars").value = document.getElementById("dvDemoView").innerHTML;
    tmpFobj = null;
    tmpFobj = {};
    tmpFobj["knvp"] = JSSHOP.shared.getFrmVals(document["qposts"], "nada");
    if(currUrlArr.tpstid) {
        tmpFobj["ws"] = "where _id=?";
        tmpFobj["wa"] = [currUrlArr.tpstid];
        oi = getNuDBFnvp("qposts", 7, null, tmpFobj);
    } else {
        oi = getNuDBFnvp("qposts", 6, null, tmpFobj);
    }
    // doQComm(oi["rq"], null, "setUPostSave");
    JSSHOP.ajax.doNuAjaxPost(oi["rq"], fnishUPstEdt);
    } catch(e) {
        alert("doPostEdit: " + e);
    }
}


function OldfillUPostFlds() {
    JSSHOP.shared.setDynFrmVals(document["qposts"], "tmp_");
    /*
    istype = document.getElementById("tmp_stype");
iptype = document.getElementById("tmp_ptype");
iselPropStat = document.getElementById("tmp_pstatus");
JSSHOP.shared.addCurrSlctObj(svftObj["contract"], istype, stype.value, "noQvalue", "noQvalue");
JSSHOP.shared.addCurrSlctObj(svftObj["propstat"], iselPropStat, pstatus.value, "noQvalue", "noQvalue");
JSSHOP.shared.addCurrSlctObj(svftObj["proptype"], iptype, ptype.value, "noQvalue", "noQvalue");


// svftObj["userpriv"]
    JSSHOP.shared.addCurrSlctObj(svftObj["userpriv"], tmp_p_privacy, p_privacy.value, "noQvalue", "noQvalue");
    JSSHOP.shared.addCurrSlctObj(svftObj["postpages"], tmp_p_ppage, p_ppage.value, "noQvalue", "noQvalue");
    JSSHOP.shared.addCurrSlctObj(svftObj["posttype"], tmp_p_ptype, p_ptype.value, "noQvalue", "noQvalue");
    JSSHOP.shared.addCurrSlctObj(svftObj["postpos"], tmp_p_pos, p_pos.value, "noQvalue", "noQvalue");
    JSSHOP.shared.addCurrSlctObj(svftObj["postauth"], tmp_p_author, p_author.value, "noQvalue", "noQvalue");
    JSSHOP.shared.addCurrSlctObj(svftObj["poststat"], tmp_p_stat, p_stat.value, "noQvalue", "noQvalue");
 */


    tDDPTyObj = {};
    tDDPTyObj["ddtype"] = "noQvalue";
       tDDPTyObj["fld"] = "p_ptype";
       tDDPTyObj["lbl"] = stxt[103];
       tDDPTyObj["val"] = document.getElementById("p_ptype").value;
       tDDPTyObj["kvpObj"] = svftObj["posttype"];
       tDDPTyObj["cb"] = "doPTypeTip";
       tDDPTyObj["fldcls"] = "dropdown-toggle crsrPointer txtClrHdr";
       tDDPTyObj["lblcls"] = "txtSmall";
       tDDPTyObj["valcls"] = "slmtable bkgdClrNrml txtClrNrml txtSmall txtBold";
       tDDPTyObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
       tDDPTyObj["horvert"] = "horizontal";
       tDDPTyObj["icn"] = "noQvalue";
       tDDPTyObj["kvIcnsObj"] = {};
       tDDPTyObj["kvIcnsObj"]["ppost"] = "&#xe5cd;";
       tDDPTyObj["kvIcnsObj"]["pcontent"] = "&#xe5cd;";
       tDDPTyObj["kvIcnsObj"]["pimage"] = "&#xe5cd;";
       tDDPTyObj["kvIcnsObj"]["pcarousel"] = "&#xe5cd;";
       tDDPTyObj["kvIcnsObj"]["pmap"] = "&#xe5cd;";
       tDDPTyStr = JSSHOP.ui.getNuBSdropDstr(tDDPTyObj);
       document.getElementById("dvPTypeFld").innerHTML = tDDPTyStr;


       tDDPrvObj = {};
       tDDPrvObj["ddtype"] = "moreHoriz";
       tDDPrvObj["fld"] = "noQvalue";
       tDDPrvObj["lbl"] = stxt[101];
       tDDPrvObj["val"] = "noQvalue";
       tDDPrvObj["kvpObj"] = {"privacy":stxt[101],"visibility":stxt[109]};
       tDDPrvObj["cb"] = "doPrivVizPop";
       tDDPrvObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
       tDDPrvObj["lblcls"] = "txtSmall";
       tDDPrvObj["valcls"] = "txtSmall";
       tDDPrvObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
       tDDPrvObj["horvert"] = "horizontal";
       tDDPrvObj["icn"] = "noQvalue";
       tDDPrvObj["kvIcnsObj"] = {};
       tDDPrvObj["kvIcnsObj"]["privacy"] = "&#xe5cd;";
       tDDPrvObj["kvIcnsObj"]["visibility"] = "&#xe5cd;";
       tDDPrvStr = JSSHOP.ui.getNuBSdropDstr(tDDPrvObj);
       document.getElementById("tdMorePost").innerHTML = tDDPrvStr;

       // div dvDDxcntnt
       // dvDDxcntnt = array drowpdown content i.e. Images, Templates, etc.
       tDDXtraCntObj = {};
       tDDXtraCntObj["ddtype"] = "noQvalue";
       tDDXtraCntObj["fld"] = "noQvalue";
       tDDXtraCntObj["lbl"] =  stxt[110]; // more
       tDDXtraCntObj["val"] = "noQvalue";
       tDDXtraCntObj["kvpObj"] = {"images":stxt[980],"templates":stxt[111],"snippets":stxt[112]};
       tDDXtraCntObj["cb"] = "doDDxcntntPop";
       tDDXtraCntObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
       tDDXtraCntObj["lblcls"] = "txtSmall";
       tDDXtraCntObj["valcls"] = "txtSmall";
       tDDXtraCntObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
       tDDXtraCntObj["horvert"] = "vertical";
       tDDXtraCntObj["icn"] = "noQvalue";
       tDDXtraCntObj["kvIcnsObj"] = {};
       tDDXtraCntObj["kvIcnsObj"]["images"] = "&#xe5cd;";
       tDDXtraCntObj["kvIcnsObj"]["templates"] = "&#xe5cd;";
       tDDXtraCntObj["kvIcnsObj"]["snippets"] = "&#xe5cd;";

       tDDXtraCntStr = JSSHOP.ui.getNuBSdropDstr(tDDXtraCntObj);
       // document.getElementById("dvDDxcntnt").innerHTML = tDDXtraCntStr;

       doPTypeTip("p_ptype", p_ptype.value, "noQvalue");


       // Handle pimage type: load properties and HTML from p_vars
       if (p_ptype.value === "pimage" && p_vars.value) {
           try {
               var pVarsStr = p_vars.value;
               var delimiterIndex = pVarsStr.indexOf("dlmtd");
               if (delimiterIndex !== -1) {
                   var tZpdProps = pVarsStr.substring(0, delimiterIndex);
                   var tZpdHTML = pVarsStr.substring(delimiterIndex + 5); // "dlmtd".length = 5
                   var tSlctdPrpsStr = LZString.decompressFromEncodedURIComponent(tZpdProps);
                   ttSlctdPrpsArr = [];
                   ttSlctdPrpsArr = JSON.parse(tSlctdPrpsStr);
                   JSSHOP.shared.setSlctdPrpsArr(ttSlctdPrpsArr); // Assuming this function exists to set the array
                   var dTABEstr = LZString.decompressFromEncodedURIComponent(tZpdHTML);
                   // Set the editor content after TinyMCE loads
                   setTimeout(function() {
                       if (taDemoEdtr_ifr && taDemoEdtr_ifr.contentWindow) {
                           taDemoEdtr_ifr.contentWindow.document.body.innerHTML = dTABEstr;
                       }
                   }, 1000);
               }
           } catch (e) {
               console.error("Error loading pimage vars: " + e);
           }
       }

   tDDfullStr = "";



tPCntnVal = p_content.value;
tDcdVal =  decodeURIComponent(tPCntnVal);
tmp_p_content.value = LZString.decompressFromEncodedURIComponent(tDcdVal);
// getPostImgs();
// JSSHOP.loadScript("js/tinymce/tinymce.min.js", loadPstTnyI, "js");
   JSSHOP.loadScript("js/tinymce/tinymce.js", loadTnyI, "js");

}


function doMPostForm(aaw,aww,cww) {
  try {
    console.log("doMPostForm: " + aaw + " " + aww + " " + cww);
    // JSSHOP.ui.popAndFillLbox("Facebook post added. " + aaw + " " + aww + " " + cww);
    console.log('doMPropForm - aww: ' + aww);
    theRetPArr = JSON.parse(aww);
    thePRetObj = theRetPArr[0];
    // alert("doMPropForm: " + thePRetObj);
// tmp_ptitle.value = thePRetObj.ptitle;
    //  JSSHOP.shared.setFrmVals("property",theRetPArr[0], fillPpropFields);
     for(var gkey in thePRetObj) {
        console.log("doMPostForm: " + gkey + " " + thePRetObj[gkey]);
        // decode url
        urlDecd = decodeURIComponent(thePRetObj[gkey]);
        document["qposts"][gkey].value = urlDecd;
        tmpOldFFvals[gkey] = thePRetObj[gkey];

        }
setTimeout(function(){ fillUPostFlds(); }, 1000);
} catch(e) {
    alert("doMPostForm: " + e);
}
}













/* functions from x_aa-add-post.js
// to be used with these edit post functions
*/


currIContent == "y"
var euiFFObjArr = null;
var euiFFObjArr = [];
var tmpOldFFvals = null;
var tmpOldFFvals = {};
var tmpSvBtnObj = null;
var tmpPrpLinksArr = null;
var tmpPrpLinksArr = [];
var tmpPstUsrArr = null;
var tmpPstUsrArr = [];
var tmpPstPrpsArr = null;
var tmpPstPrpsArr = [];
var tmpSwiperObj = null;
var tmpSwiperObj = {};


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


var fnshPTypeChange = function() {
    document.getElementById("dvDemoView").innerHTML = "...../.....";
    document.getElementById("tmp_p_ptype").disabled=false;
    JSSHOP.ui.setCBBClickClr(tmp_p_ptype,'bkgdClrDlg',tmp_p_ptype.className, function(){void(0)});
    };


var doPstTypOpts = function(tPTval) {
     objVal = tPTval;

    tTChngStr = "";
    switch(objVal) {
        case "users":
        tTChngStr += "Layout type changed to users.";
        if(tmpPstUsrArr[0]) {
        // has postUsrs array
            setTPstUsrsArr(null,JSON.stringify(tmpPstUsrArr),null);
        } else {
            tmpDOs = {};
            tmpDOs["ws"] = "where _id > ?";
            tmpDOs["wa"] = [0];
            tmpDOs["l"] = 12;

            oi = getNuDBFnvp("quser",5,null,tmpDOs);
            currRQtable = "quser";
            currRQstr = oi["rq"];

            // alert("edit users currRQstr: " + currRQstr);
            doQComm(oi["rq"], null, "setTPstUsrsArr");
        }

    break;
    case "props":
        if(tmpPstPrpsArr[0]) {
        // has postPrps array
            setTPstPrpsArr(null,JSON.stringify(tmpPstPrpsArr),null);
        } else {
            tmpDOys = {};
            tmpDOys["ws"] = "where _id > ?";
            tmpDOys["wa"] = [0];
            tmpDOys["l"] = 12;
            oiy = getNuDBFnvp("property",5,null,tmpDOys);
            currRQtable = "property";
            currRQstr = oi["rq"];
            // alert("edit users currRQstr: " + currRQstr);
            doQComm(oiy["rq"], null, "setTPstPrpsArr");
        }


    break;
    default:
    tTChngStr += "Layout type changed to props.";
    break;
    }


    // JSSHOP.ui.popAndFillLbox(tTChngStr);

    // procNuUIitem("qposts","p_ptype",currUrlArr.tpstid,objVal,"fnshPTypeChange");
    };

function getInlineMapSettingsHtml() {
    var settingsStr = "";
    try {
        var ensureInlineMapCaptureMoveendGateField = function() {
            try {
                if (typeof ensureMapPstCaptureMoveendGateField == "function") {
                    return ensureMapPstCaptureMoveendGateField();
                }
            } catch (eEnsureMoveendGateGlobal) {}
            var localGateEl = document.getElementById("inpMapPstCaptureMoveendGate");
            if (!localGateEl) {
                localGateEl = document.createElement("input");
                localGateEl.type = "hidden";
                localGateEl.id = "inpMapPstCaptureMoveendGate";
                localGateEl.name = "inpMapPstCaptureMoveendGate";
                localGateEl.value = "no";
                document.body.appendChild(localGateEl);
            }
            if (!localGateEl.value) {
                localGateEl.value = "no";
            }
            return localGateEl;
        };

        var getInlineMapCaptureMoveendGateValue = function() {
            try {
                if (typeof getMapPstCaptureMoveendGateValue == "function") {
                    return getMapPstCaptureMoveendGateValue();
                }
            } catch (eGetMoveendGateGlobal) {}
            var localGateEl = ensureInlineMapCaptureMoveendGateField();
            var localVal = String((localGateEl && localGateEl.value) || "no").toLowerCase();
            if (localVal == "yes" || localVal == "true" || localVal == "on" || localVal == "1") {
                localVal = "yes";
            } else {
                localVal = "no";
            }
            if (localGateEl) {
                localGateEl.value = localVal;
            }
            return localVal;
        };

        var ensureInlineMapForceCanvasRendererField = function() {
            try {
                if (typeof ensureMapPstForceCanvasRendererField == "function") {
                    return ensureMapPstForceCanvasRendererField();
                }
            } catch (eEnsureForceRendererGlobal) {}
            var localForceEl = document.getElementById("inpMapPstForceCanvasRenderer");
            if (!localForceEl) {
                localForceEl = document.createElement("input");
                localForceEl.type = "hidden";
                localForceEl.id = "inpMapPstForceCanvasRenderer";
                localForceEl.name = "inpMapPstForceCanvasRenderer";
                localForceEl.value = "yes";
                document.body.appendChild(localForceEl);
            }
            if (!localForceEl.value) {
                localForceEl.value = "yes";
            }
            return localForceEl;
        };

        var getInlineMapForceCanvasRendererValue = function() {
            try {
                if (typeof getMapPstForceCanvasRendererValue == "function") {
                    return getMapPstForceCanvasRendererValue();
                }
            } catch (eGetForceRendererGlobal) {}
            var localForceEl = ensureInlineMapForceCanvasRendererField();
            var localVal = String((localForceEl && localForceEl.value) || "yes").toLowerCase();
            if (localVal == "yes" || localVal == "true" || localVal == "on" || localVal == "1") {
                localVal = "yes";
            } else {
                localVal = "no";
            }
            if (localForceEl) {
                localForceEl.value = localVal;
            }
            return localVal;
        };

        if (typeof ensureMapPstTypeField == "function") {
            ensureMapPstTypeField();
        }
        if (typeof ensureMapPstEffectField == "function") {
            ensureMapPstEffectField();
        }
        if (typeof ensureMapPstFlySpeedField == "function") {
            ensureMapPstFlySpeedField();
        }
        if (typeof ensureMapPstShowSellerField == "function") {
            ensureMapPstShowSellerField();
        }
        if (typeof ensureMapPstAutoPlayField == "function") {
            ensureMapPstAutoPlayField();
        }
        if (typeof ensureMapPstCaptureFpsField == "function") {
            ensureMapPstCaptureFpsField();
        }
        if (typeof ensureMapPstCaptureIntervalField == "function") {
            ensureMapPstCaptureIntervalField();
        }
        ensureInlineMapCaptureMoveendGateField();
        ensureInlineMapForceCanvasRendererField();

        var ddCntObj = {};
        ddCntObj["ddtype"] = "noQvalue";
        ddCntObj["fld"] = "inpMapPstCntnt";
        ddCntObj["lbl"] = "Map Content";
        ddCntObj["val"] = inpMapPstCntnt.value;
        ddCntObj["kvpObj"] = {"props": "Properties", "users": "Users"};
        ddCntObj["cb"] = "doMapPstCntntPk";
        ddCntObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
        ddCntObj["lblcls"] = "txtSmall";
        ddCntObj["valcls"] = "txtSmall";
        ddCntObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
        ddCntObj["horvert"] = "horizontal";
        ddCntObj["icn"] = "noQvalue";
        ddCntObj["kvIcnsObj"] = {"props": "&#xe5cd;", "users": "&#xe5cd;"};
        settingsStr += JSSHOP.ui.getNuBSdropDstr(ddCntObj);
        settingsStr += "<div style=\"margin:8px 0 10px 0;\">";
        settingsStr += "<span class=\"cls_button cls_button-small bkgdClrHdr txtClrWhite\" onclick=\"javascript:JSSHOP.ui.getPickerDiv('inpMapPstCntnt');\">Select</span>";
        settingsStr += "</div>";

        var ddMapTypeObj = {};
        ddMapTypeObj["ddtype"] = "noQvalue";
        ddMapTypeObj["fld"] = "inpMapPstType";
        ddMapTypeObj["lbl"] = "Map Type";
        ddMapTypeObj["val"] = (typeof getMapPstTypeValue == "function") ? getMapPstTypeValue() : ((document.getElementById("inpMapPstType") && document.getElementById("inpMapPstType").value) || "street");
        ddMapTypeObj["kvpObj"] = {"street": "Street View", "satelite": "Satelite"};
        ddMapTypeObj["cb"] = "donada";
        ddMapTypeObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
        ddMapTypeObj["lblcls"] = "txtSmall";
        ddMapTypeObj["valcls"] = "txtSmall";
        ddMapTypeObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
        ddMapTypeObj["horvert"] = "horizontal";
        ddMapTypeObj["icn"] = "noQvalue";
        ddMapTypeObj["kvIcnsObj"] = {"street": "&#xe55f;", "satelite": "&#xe56e;"};
        settingsStr += JSSHOP.ui.getNuBSdropDstr(ddMapTypeObj);

        var ddMapEffectObj = {};
        ddMapEffectObj["ddtype"] = "noQvalue";
        ddMapEffectObj["fld"] = "inpMapPstEffect";
        ddMapEffectObj["lbl"] = "Effects";
        ddMapEffectObj["val"] = (typeof getMapPstEffectValue == "function") ? getMapPstEffectValue() : ((document.getElementById("inpMapPstEffect") && document.getElementById("inpMapPstEffect").value) || "fitbounds");
        ddMapEffectObj["kvpObj"] = {"fitbounds": "Fit Bounds", "flyto": "Fly To", "flytobounds": "Fly To Bounds", "panto": "Pan To"};
        ddMapEffectObj["cb"] = "donada";
        ddMapEffectObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
        ddMapEffectObj["lblcls"] = "txtSmall";
        ddMapEffectObj["valcls"] = "txtSmall";
        ddMapEffectObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
        ddMapEffectObj["horvert"] = "horizontal";
        ddMapEffectObj["icn"] = "noQvalue";
        ddMapEffectObj["kvIcnsObj"] = {"fitbounds": "&#xe56c;", "flyto": "&#xe539;", "flytobounds": "&#xe55b;", "panto": "&#xe5d2;"};
        settingsStr += JSSHOP.ui.getNuBSdropDstr(ddMapEffectObj);

        var ddMapFlySpeedObj = {};
        ddMapFlySpeedObj["ddtype"] = "noQvalue";
        ddMapFlySpeedObj["fld"] = "inpMapPstFlySpeed";
        ddMapFlySpeedObj["lbl"] = "Fly Speed";
        ddMapFlySpeedObj["val"] = (typeof getMapPstFlySpeedValue == "function") ? getMapPstFlySpeedValue() : ((document.getElementById("inpMapPstFlySpeed") && document.getElementById("inpMapPstFlySpeed").value) || "normal");
        ddMapFlySpeedObj["kvpObj"] = {"slowest": "Slowest", "slower": "Slower", "slow": "Slow", "normal": "Normal", "fast": "Fast"};
        ddMapFlySpeedObj["cb"] = "donada";
        ddMapFlySpeedObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
        ddMapFlySpeedObj["lblcls"] = "txtSmall";
        ddMapFlySpeedObj["valcls"] = "txtSmall";
        ddMapFlySpeedObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
        ddMapFlySpeedObj["horvert"] = "horizontal";
        ddMapFlySpeedObj["icn"] = "noQvalue";
        ddMapFlySpeedObj["kvIcnsObj"] = {"slowest": "&#xe3c1;", "slower": "&#xe3c1;", "slow": "&#xe3c1;", "normal": "&#xe863;", "fast": "&#xe9e4;"};
        settingsStr += JSSHOP.ui.getNuBSdropDstr(ddMapFlySpeedObj);

        var ddMapSellerObj = {};
        ddMapSellerObj["ddtype"] = "noQvalue";
        ddMapSellerObj["fld"] = "inpMapPstShowSeller";
        ddMapSellerObj["lbl"] = "Show Seller";
        ddMapSellerObj["val"] = (typeof getMapPstShowSellerValue == "function") ? getMapPstShowSellerValue() : ((document.getElementById("inpMapPstShowSeller") && document.getElementById("inpMapPstShowSeller").value) || "no");
        ddMapSellerObj["kvpObj"] = {"yes": "Yes", "no": "No"};
        ddMapSellerObj["cb"] = "donada";
        ddMapSellerObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
        ddMapSellerObj["lblcls"] = "txtSmall";
        ddMapSellerObj["valcls"] = "txtSmall";
        ddMapSellerObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
        ddMapSellerObj["horvert"] = "horizontal";
        ddMapSellerObj["icn"] = "noQvalue";
        ddMapSellerObj["kvIcnsObj"] = {"yes": "&#xe7fd;", "no": "&#xe14c;"};
        settingsStr += JSSHOP.ui.getNuBSdropDstr(ddMapSellerObj);

        var ddMapAutoPlayObj = {};
        ddMapAutoPlayObj["ddtype"] = "noQvalue";
        ddMapAutoPlayObj["fld"] = "inpMapPstAutoPlay";
        ddMapAutoPlayObj["lbl"] = "Auto Play";
        ddMapAutoPlayObj["val"] = (typeof getMapPstAutoPlayValue == "function") ? getMapPstAutoPlayValue() : ((document.getElementById("inpMapPstAutoPlay") && document.getElementById("inpMapPstAutoPlay").value) || "off");
        ddMapAutoPlayObj["kvpObj"] = {"off": "Off", "on": "On"};
        ddMapAutoPlayObj["cb"] = "donada";
        ddMapAutoPlayObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
        ddMapAutoPlayObj["lblcls"] = "txtSmall";
        ddMapAutoPlayObj["valcls"] = "txtSmall";
        ddMapAutoPlayObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
        ddMapAutoPlayObj["horvert"] = "horizontal";
        ddMapAutoPlayObj["icn"] = "noQvalue";
        ddMapAutoPlayObj["kvIcnsObj"] = {"off": "&#xe5c8;", "on": "&#xe037;"};
        settingsStr += JSSHOP.ui.getNuBSdropDstr(ddMapAutoPlayObj);

        var ddMapCaptureFpsObj = {};
        ddMapCaptureFpsObj["ddtype"] = "noQvalue";
        ddMapCaptureFpsObj["fld"] = "inpMapPstCaptureFps";
        ddMapCaptureFpsObj["lbl"] = "Video FPS";
        ddMapCaptureFpsObj["val"] = (typeof getMapPstCaptureFpsValue == "function") ? String(getMapPstCaptureFpsValue()) : ((document.getElementById("inpMapPstCaptureFps") && document.getElementById("inpMapPstCaptureFps").value) || "2");
        ddMapCaptureFpsObj["kvpObj"] = {"1": "1 fps", "2": "2 fps", "3": "3 fps", "4": "4 fps", "5": "5 fps", "6": "6 fps"};
        ddMapCaptureFpsObj["cb"] = "donada";
        ddMapCaptureFpsObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
        ddMapCaptureFpsObj["lblcls"] = "txtSmall";
        ddMapCaptureFpsObj["valcls"] = "txtSmall";
        ddMapCaptureFpsObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
        ddMapCaptureFpsObj["horvert"] = "horizontal";
        ddMapCaptureFpsObj["icn"] = "noQvalue";
        ddMapCaptureFpsObj["kvIcnsObj"] = {"1": "&#xe1b2;", "2": "&#xe1b2;", "3": "&#xe1b2;", "4": "&#xe1b2;", "5": "&#xe1b2;", "6": "&#xe1b2;"};
        settingsStr += JSSHOP.ui.getNuBSdropDstr(ddMapCaptureFpsObj);

        var ddMapCaptureIntObj = {};
        ddMapCaptureIntObj["ddtype"] = "noQvalue";
        ddMapCaptureIntObj["fld"] = "inpMapPstCaptureIntervalMs";
        ddMapCaptureIntObj["lbl"] = "Frame Interval";
        ddMapCaptureIntObj["val"] = (typeof getMapPstCaptureIntervalValue == "function") ? String(getMapPstCaptureIntervalValue()) : ((document.getElementById("inpMapPstCaptureIntervalMs") && document.getElementById("inpMapPstCaptureIntervalMs").value) || "500");
        ddMapCaptureIntObj["kvpObj"] = {"250": "250 ms", "333": "333 ms", "500": "500 ms", "700": "700 ms", "900": "900 ms", "1200": "1200 ms"};
        ddMapCaptureIntObj["cb"] = "donada";
        ddMapCaptureIntObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
        ddMapCaptureIntObj["lblcls"] = "txtSmall";
        ddMapCaptureIntObj["valcls"] = "txtSmall";
        ddMapCaptureIntObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
        ddMapCaptureIntObj["horvert"] = "horizontal";
        ddMapCaptureIntObj["icn"] = "noQvalue";
        ddMapCaptureIntObj["kvIcnsObj"] = {"250": "&#xe425;", "333": "&#xe425;", "500": "&#xe425;", "700": "&#xe425;", "900": "&#xe425;", "1200": "&#xe425;"};
        settingsStr += JSSHOP.ui.getNuBSdropDstr(ddMapCaptureIntObj);

        var ddMapCaptureGateObj = {};
        ddMapCaptureGateObj["ddtype"] = "noQvalue";
        ddMapCaptureGateObj["fld"] = "inpMapPstCaptureMoveendGate";
        ddMapCaptureGateObj["lbl"] = "Capture Gate (Safe Test)";
        ddMapCaptureGateObj["val"] = getInlineMapCaptureMoveendGateValue();
        ddMapCaptureGateObj["kvpObj"] = {"no": "Current (tile stable)", "yes": "MoveEnd callback"};
        ddMapCaptureGateObj["cb"] = "donada";
        ddMapCaptureGateObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
        ddMapCaptureGateObj["lblcls"] = "txtSmall";
        ddMapCaptureGateObj["valcls"] = "txtSmall";
        ddMapCaptureGateObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
        ddMapCaptureGateObj["horvert"] = "horizontal";
        ddMapCaptureGateObj["icn"] = "noQvalue";
        ddMapCaptureGateObj["kvIcnsObj"] = {"no": "&#xe5d2;", "yes": "&#xe8d5;"};
        settingsStr += JSSHOP.ui.getNuBSdropDstr(ddMapCaptureGateObj);

        var ddMapForceRendererObj = {};
        ddMapForceRendererObj["ddtype"] = "noQvalue";
        ddMapForceRendererObj["fld"] = "inpMapPstForceCanvasRenderer";
        ddMapForceRendererObj["lbl"] = "Force Canvas Renderer";
        ddMapForceRendererObj["val"] = getInlineMapForceCanvasRendererValue();
        ddMapForceRendererObj["kvpObj"] = {"yes": "Yes (use selected renderer)", "no": "No (allow config override)"};
        ddMapForceRendererObj["cb"] = "donada";
        ddMapForceRendererObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
        ddMapForceRendererObj["lblcls"] = "txtSmall";
        ddMapForceRendererObj["valcls"] = "txtSmall";
        ddMapForceRendererObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
        ddMapForceRendererObj["horvert"] = "horizontal";
        ddMapForceRendererObj["icn"] = "noQvalue";
        ddMapForceRendererObj["kvIcnsObj"] = {"yes": "&#xe5ca;", "no": "&#xe14c;"};
        settingsStr += JSSHOP.ui.getNuBSdropDstr(ddMapForceRendererObj);
    } catch (eMapSettingsHtml) {
        settingsStr = "<div class=\"txtSmall txtClrRed\">Map settings error: " + eMapSettingsHtml + "</div>";
    }
    return settingsStr;
}

var inlineMapMarkerOptionsCtx = {};

function getInlineMapMarkerObj(markerType, markerKey) {
    try {
        var typeVal = String(markerType || "props").toLowerCase();
        var keyVal = String(markerKey || "");
        if (typeVal == "users") {
            if (typeof currSlctdUsrObj != "undefined" && currSlctdUsrObj && currSlctdUsrObj[keyVal]) {
                return currSlctdUsrObj[keyVal];
            }
        } else {
            if (typeof currSlctdPrpsObj != "undefined" && currSlctdPrpsObj && currSlctdPrpsObj[keyVal]) {
                return currSlctdPrpsObj[keyVal];
            }
        }
    } catch (eMarkerObj) {
        console.log("getInlineMapMarkerObj: " + eMarkerObj);
    }
    return null;
}

function drawInlineMapMarkerCanvasPreview(canvasEl, opts) {
    try {
        if (!canvasEl || !opts) {
            return false;
        }
        var tText = String(opts.text || "Marker Title");
        var modeVal = String(opts.mode || "jagged").toLowerCase();
        var fontSize = parseInt(opts.fontSize, 10);
        if (isNaN(fontSize)) {
            fontSize = 11;
        }
        fontSize = Math.max(10, Math.min(40, fontSize));
        var fontFamily = String(opts.fontFamily || "Arial");
        var isBold = !!opts.bold;
        var isItalic = !!opts.italic;
        var opacity = parseInt(opts.opacityPct, 10);
        if (isNaN(opacity)) {
            opacity = 100;
        }
        opacity = Math.max(0, Math.min(100, opacity));

        var maxBubbleWidth = 210;
        var minBubbleWidth = (tText.length > 15) ? 200 : 140;
        var bubbleWidth = Math.max(minBubbleWidth, 140);
        bubbleWidth = Math.min(maxBubbleWidth, bubbleWidth);
        var padX = 10;
        var padY = 8;
        var lineHeight = Math.round(fontSize * 1.25);
        var ctx = canvasEl.getContext("2d");
        if (!ctx) {
            return false;
        }

        var fontBits = [];
        if (isItalic) {
            fontBits.push("italic");
        }
        if (isBold) {
            fontBits.push("700");
        }
        fontBits.push(fontSize + "px");
        fontBits.push(fontFamily);
        var fontStr = fontBits.join(" ");
        ctx.font = fontStr;

        var words = tText.split(/\s+/);
        var lines = [];
        var currLine = "";
        var maxTextWidth = bubbleWidth - (padX * 2);
        for (var wi = 0; wi < words.length; wi++) {
            var candidate = currLine ? (currLine + " " + words[wi]) : words[wi];
            if (ctx.measureText(candidate).width <= maxTextWidth || !currLine) {
                currLine = candidate;
            } else {
                lines.push(currLine);
                currLine = words[wi];
            }
        }
        if (currLine) {
            lines.push(currLine);
        }
        if (!lines.length) {
            lines = ["Marker Title"];
        }

        var bubbleHeight = (lines.length * lineHeight) + (padY * 2);
        var canvasPad = 6;
        canvasEl.width = bubbleWidth + (canvasPad * 2);
        canvasEl.height = bubbleHeight + (canvasPad * 2);
        canvasEl.style.width = canvasEl.width + "px";
        canvasEl.style.height = canvasEl.height + "px";

        ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
        ctx.save();
        ctx.translate(canvasPad, canvasPad);

        var jitter = (modeVal === "comic_jagged") ? 8 : 5;
        var step = (modeVal === "comic_jagged") ? 18 : 22;
        var xMax = bubbleWidth;
        var yMax = bubbleHeight;

        function nextEdgeJitter(base, max) {
            var nextVal = base + Math.floor(Math.random() * step);
            if (nextVal > max) {
                nextVal = max;
            }
            return nextVal;
        }

        ctx.beginPath();
        var x = 0;
        var y = Math.round(Math.random() * jitter);
        ctx.moveTo(x, y);

        x = 0;
        while (x < xMax) {
            x = nextEdgeJitter(x, xMax);
            y = Math.round(Math.random() * jitter);
            ctx.lineTo(x, y);
        }

        y = 0;
        while (y < yMax) {
            y = nextEdgeJitter(y, yMax);
            x = xMax - Math.round(Math.random() * jitter);
            ctx.lineTo(x, y);
        }

        x = xMax;
        while (x > 0) {
            x = Math.max(0, x - Math.floor(Math.random() * step));
            y = yMax - Math.round(Math.random() * jitter);
            ctx.lineTo(x, y);
        }

        y = yMax;
        while (y > 0) {
            y = Math.max(0, y - Math.floor(Math.random() * step));
            x = Math.round(Math.random() * jitter);
            ctx.lineTo(x, y);
        }

        ctx.closePath();
        ctx.globalAlpha = opacity / 100;
        ctx.fillStyle = String(opts.bgColor || "#000000");
        ctx.fill();
        ctx.lineWidth = (modeVal === "comic_jagged") ? 2 : 1.5;
        ctx.strokeStyle = String(opts.borderColor || "#333333");
        ctx.stroke();

        ctx.fillStyle = String(opts.textColor || "#ffffff");
        ctx.font = fontStr;
        ctx.textBaseline = "top";
        var textY = padY;
        for (var li = 0; li < lines.length; li++) {
            ctx.fillText(lines[li], padX, textY);
            textY += lineHeight;
        }
        ctx.restore();
        return true;
    } catch (eCanvasDraw) {
        console.log("drawInlineMapMarkerCanvasPreview: " + eCanvasDraw);
        return false;
    }
}

function renderInlineMapMarkerOptionsPreview(prefix) {
    try {
        var txtEl = document.getElementById(prefix + "_title_text");
        var txtClrEl = document.getElementById(prefix + "_title_text_color");
        var bgClrEl = document.getElementById(prefix + "_title_bg_color");
        var brdClrEl = document.getElementById(prefix + "_title_border_color");
        var fontSizeEl = document.getElementById(prefix + "_title_font_size");
        var fontFamilyEl = document.getElementById(prefix + "_title_font_family");
        var boldEl = document.getElementById(prefix + "_title_font_bold");
        var italicEl = document.getElementById(prefix + "_title_font_italic");
        var modeEl = document.getElementById(prefix + "_title_container_mode");
        var bgOpacityEl = document.getElementById(prefix + "_title_bg_opacity");
        var bgOpacityLblEl = document.getElementById(prefix + "_title_bg_opacity_lbl");
        var customOptsWrapEl = document.getElementById(prefix + "_custom_opts_wrap");
        var previewEl = document.getElementById(prefix + "_title_preview");
        var previewCanvasEl = document.getElementById(prefix + "_title_preview_canvas");
        var previewWrapEl = document.getElementById(prefix + "_title_preview_wrap");
        if (!txtEl || !txtClrEl || !bgClrEl || !brdClrEl || !fontSizeEl || !fontFamilyEl || !boldEl || !italicEl || !modeEl || !bgOpacityEl || !bgOpacityLblEl || !customOptsWrapEl || !previewEl || !previewWrapEl) {
            return;
        }

        var tText = String(txtEl.value || "").trim();
        if (tText === "") {
            tText = "Marker Title";
        }
        var modeVal = String(modeEl.value || "default").toLowerCase();
        var opPct = parseInt(bgOpacityEl.value, 10);
        var fSize = parseInt(fontSizeEl.value, 10);
        if (isNaN(fSize)) {
            fSize = 11;
        }
        fSize = Math.max(10, Math.min(40, fSize));
        if (isNaN(opPct)) {
            opPct = 100;
        }
        opPct = Math.max(0, Math.min(100, opPct));
        bgOpacityLblEl.textContent = opPct + "%";

        customOptsWrapEl.style.display = (modeVal === "custom" || modeVal === "jagged" || modeVal === "comic_jagged") ? "" : "none";
        previewEl.textContent = tText;
        previewEl.style.fontSize = fSize + "px";
        previewEl.style.fontFamily = String(fontFamilyEl.value || "Arial");
        previewEl.style.fontWeight = boldEl.checked ? "700" : "400";
        previewEl.style.fontStyle = italicEl.checked ? "italic" : "normal";
        var isJaggedMode = (modeVal === "jagged" || modeVal === "comic_jagged");
        var useCustomColors = (modeVal === "custom" || isJaggedMode);
        var needsWideBubble = (String(tText || "").length > 15);
        var borderColorVal = String(brdClrEl.value || "#333333");

        if (useCustomColors) {
            previewEl.style.color = String(txtClrEl.value || "#ffffff");
            previewEl.style.backgroundColor = String(bgClrEl.value || "#000000");
            previewEl.style.opacity = String(opPct / 100);
            previewEl.style.border = "1px solid " + borderColorVal;
        } else {
            previewEl.style.color = "#222222";
            previewEl.style.backgroundColor = "rgba(255,255,255,0.95)";
            previewEl.style.opacity = "1";
            previewEl.style.border = "1px solid rgba(255,255,255,0.95)";
        }
        previewEl.style.minWidth = needsWideBubble ? "200px" : "";

        if (isJaggedMode) {
            var didCanvasDraw = false;
            if (previewCanvasEl) {
                didCanvasDraw = drawInlineMapMarkerCanvasPreview(previewCanvasEl, {
                    text: tText,
                    mode: modeVal,
                    textColor: String(txtClrEl.value || "#ffffff"),
                    bgColor: String(bgClrEl.value || "#000000"),
                    borderColor: borderColorVal,
                    fontSize: fSize,
                    fontFamily: String(fontFamilyEl.value || "Arial"),
                    bold: !!boldEl.checked,
                    italic: !!italicEl.checked,
                    opacityPct: opPct
                });
            }

            if (didCanvasDraw) {
                previewEl.style.display = "none";
                previewCanvasEl.style.display = "inline-block";
                previewEl.style.clipPath = "none";
                previewEl.style.webkitClipPath = "none";
                previewEl.style.border = "none";
                previewEl.style.backgroundColor = "transparent";
                previewEl.style.opacity = "1";
            } else {
                if (previewCanvasEl) {
                    previewCanvasEl.style.display = "none";
                }
                previewEl.style.display = "inline-block";
                previewEl.style.borderRadius = "0";
                if (modeVal === "comic_jagged") {
                    var comicJaggedClip = "polygon(0% 12%,7% 0%,15% 10%,24% 0%,33% 11%,42% 1%,51% 12%,60% 1%,69% 11%,78% 0%,87% 10%,95% 1%,100% 14%,92% 25%,100% 37%,91% 49%,100% 61%,91% 73%,100% 86%,92% 99%,82% 89%,73% 100%,64% 89%,55% 100%,46% 89%,37% 100%,28% 89%,19% 99%,10% 88%,2% 98%,8% 84%,0% 72%,9% 60%,0% 48%,9% 36%,0% 24%)";
                    previewEl.style.clipPath = comicJaggedClip;
                    previewEl.style.webkitClipPath = comicJaggedClip;
                    previewEl.style.border = "2px solid " + borderColorVal;
                } else {
                    var jaggedClip = "polygon(1% 9%,8% 2%,16% 8%,25% 2%,34% 7%,43% 2%,52% 8%,61% 2%,70% 7%,79% 2%,88% 8%,96% 3%,99% 12%,94% 22%,99% 33%,94% 44%,99% 56%,94% 68%,99% 80%,92% 93%,82% 97%,73% 92%,64% 98%,55% 92%,46% 98%,37% 92%,28% 97%,19% 92%,10% 97%,2% 90%,5% 79%,1% 67%,6% 55%,1% 43%,6% 31%,1% 20%)";
                    previewEl.style.clipPath = jaggedClip;
                    previewEl.style.webkitClipPath = jaggedClip;
                    previewEl.style.border = "1.5px solid " + borderColorVal;
                }
            }
        } else {
            if (previewCanvasEl) {
                previewCanvasEl.style.display = "none";
            }
            previewEl.style.display = "inline-block";
            previewEl.style.borderRadius = "8px";
            previewEl.style.clipPath = "none";
            previewEl.style.webkitClipPath = "none";
        }
        previewWrapEl.style.background = "linear-gradient(135deg,#e9ecef,#f8f9fa)";
    } catch (eMarkerPreview) {
        console.log("renderInlineMapMarkerOptionsPreview: " + eMarkerPreview);
    }
}

function onInlineMapMarkerNuDropdownChanged(selectId, tDDCBel, selectedValue, selectedText) {
    var selectEl = document.getElementById(selectId);
    if (!selectEl) {
        return;
    }
    selectEl.value = selectedValue;
    try {
        var ev = new Event("change", { bubbles: true });
        selectEl.dispatchEvent(ev);
    } catch (e) {
        if (typeof document.createEvent === "function") {
            var legacyEv = document.createEvent("Event");
            legacyEv.initEvent("change", true, true);
            selectEl.dispatchEvent(legacyEv);
        }
    }
}

function enhanceInlineMapMarkerSelectWithNuDrop(selectId, labelText, iconMap) {
    var selectEl = document.getElementById(selectId);
    if (!selectEl) {
        return;
    }
    if (typeof JSSHOP === "undefined" || !JSSHOP.ui || typeof JSSHOP.ui.getNuBSdropDstr !== "function") {
        return;
    }

    var wrapId = selectId + "_nu_wrap";
    var oldWrap = document.getElementById(wrapId);
    if (oldWrap && oldWrap.parentNode) {
        oldWrap.parentNode.removeChild(oldWrap);
    }

    var kvpObj = {};
    for (var i = 0; i < selectEl.options.length; i++) {
        var opt = selectEl.options[i];
        kvpObj[String(opt.value)] = String(opt.text || opt.value || "");
    }

    var ddObj = {};
    ddObj["ddtype"] = "noQvalue";
    ddObj["fld"] = selectId;
    ddObj["lbl"] = labelText || "Select";
    ddObj["val"] = selectEl.value;
    ddObj["kvpObj"] = kvpObj;
    ddObj["cb"] = "onInlineMapMarkerNuDropdownChanged";
    ddObj["pload"] = selectId;
    ddObj["fldcls"] = "dropdown-toggle crsrPointer txtClrHdr txtDecorUline txtBold txtSmall slmtable brdrClrHdr";
    ddObj["lblcls"] = "txtSmall";
    ddObj["valcls"] = "txtSmall txtBold";
    ddObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
    ddObj["horvert"] = "horizontal";
    ddObj["icn"] = "noQvalue";
    ddObj["kvIcnsObj"] = iconMap || {};

    var wrap = document.createElement("div");
    wrap.id = wrapId;
    wrap.style.marginTop = "6px";
    wrap.innerHTML = JSSHOP.ui.getNuBSdropDstr(ddObj);
    if (selectEl.parentNode) {
        selectEl.parentNode.insertBefore(wrap, selectEl.nextSibling);
    }
    selectEl.style.display = "none";
}

function refreshInlineMapMarkerNuDropdowns(prefix) {
    var p = String(prefix || "");
    if (!p) {
        return;
    }

    enhanceInlineMapMarkerSelectWithNuDrop(p + "_title_container_mode", "Container Style", {
        "default": "&#xe8b8;",
        "custom": "&#xe40a;",
        "jagged": "&#xe3a5;",
        "comic_jagged": "&#xe3a5;"
    });

    enhanceInlineMapMarkerSelectWithNuDrop(p + "_title_font_family", "Font Family", {
        "Arial": "&#xe245;",
        "Verdana": "&#xe245;",
        "Trebuchet MS": "&#xe245;",
        "Georgia": "&#xe245;",
        "Times New Roman": "&#xe245;",
        "Courier New": "&#xe245;"
    });
}

function initInlineMapMarkerColorPickers(prefix) {
    try {
        if (typeof Coloris !== "function") {
            return;
        }
        var p = String(prefix || "").replace(/"/g, "");
        if (!p) {
            return;
        }
        Coloris({
            el: 'input[data-inline-map-coloris="' + p + '"]',
            parent: '#nurModal',
            themeMode: 'light',
            alpha: false,
            clearButton: false,
            closeButton: true,
            closeLabel: 'Close'
        });
    } catch (eInitMapColoris) {
        console.log("initInlineMapMarkerColorPickers: " + eInitMapColoris);
    }
}

function resetInlineMapMarkerOptionsForm(prefix) {
    try {
        var txtEl = document.getElementById(prefix + "_title_text");
        var modeEl = document.getElementById(prefix + "_title_container_mode");
        var txtClrEl = document.getElementById(prefix + "_title_text_color");
        var bgClrEl = document.getElementById(prefix + "_title_bg_color");
        var brdClrEl = document.getElementById(prefix + "_title_border_color");
        var fontSizeEl = document.getElementById(prefix + "_title_font_size");
        var fontFamilyEl = document.getElementById(prefix + "_title_font_family");
        var boldEl = document.getElementById(prefix + "_title_font_bold");
        var italicEl = document.getElementById(prefix + "_title_font_italic");
        var bgOpacityEl = document.getElementById(prefix + "_title_bg_opacity");

        if (txtEl) {
            txtEl.value = "";
        }
        if (modeEl) {
            modeEl.value = "default";
        }
        if (txtClrEl) {
            txtClrEl.value = "#ffffff";
        }
        if (bgClrEl) {
            bgClrEl.value = "#000000";
        }
        if (brdClrEl) {
            brdClrEl.value = "#333333";
        }
        if (fontSizeEl) {
            fontSizeEl.value = "11";
        }
        if (fontFamilyEl) {
            fontFamilyEl.value = "Arial";
        }
        if (boldEl) {
            boldEl.checked = true;
        }
        if (italicEl) {
            italicEl.checked = false;
        }
        if (bgOpacityEl) {
            bgOpacityEl.value = "100";
        }
        refreshInlineMapMarkerNuDropdowns(prefix);
        renderInlineMapMarkerOptionsPreview(prefix);
    } catch (eResetMarkerOpt) {
        console.log("resetInlineMapMarkerOptionsForm: " + eResetMarkerOpt);
    }
}

function openInlineMapMarkerOptions(markerType, markerKey) {
    try {
        var markerObj = getInlineMapMarkerObj(markerType, markerKey);
        if (!markerObj) {
            return;
        }
        var markerTypeVal = String(markerType || "props").toLowerCase();
        var markerTitle = getInlineMapMarkerDisplayTitle(markerObj, markerTypeVal, 0);
        var titleContainerMode = String(markerObj.mapMarkerTitleContainerStyle || "default").toLowerCase();
        if (titleContainerMode !== "custom" && titleContainerMode !== "default" && titleContainerMode !== "jagged" && titleContainerMode !== "comic_jagged") {
            titleContainerMode = "default";
        }
        var titleTextColor = markerObj.mapMarkerTitleTextColor || "#ffffff";
        var titleBgColor = markerObj.mapMarkerTitleBgColor || "#000000";
        var titleBorderColor = markerObj.mapMarkerTitleBorderColor || "#333333";
        var titleFontSize = parseInt(markerObj.mapMarkerTitleFontSize, 10);
        if (isNaN(titleFontSize)) {
            titleFontSize = 11;
        }
        titleFontSize = Math.max(10, Math.min(40, titleFontSize));
        var titleFontFamily = String(markerObj.mapMarkerTitleFontFamily || "Arial");
        var titleFontBold = (String(markerObj.mapMarkerTitleBold).toLowerCase() == "no") ? false : true;
        var titleFontItalic = (String(markerObj.mapMarkerTitleItalic).toLowerCase() == "yes") ? true : false;
        var titleBgOpacity = parseInt(markerObj.mapMarkerTitleBgOpacity, 10);
        if (isNaN(titleBgOpacity)) {
            titleBgOpacity = 100;
        }
        titleBgOpacity = Math.max(0, Math.min(100, titleBgOpacity));

        var prefix = "mkopt_" + (new Date().getTime());
        inlineMapMarkerOptionsCtx[prefix] = {
            type: markerTypeVal,
            key: markerKey
        };

        var popStr = "";
        popStr += '<ul class="nav nav-tabs mb-2" style="display:flex;gap:6px;">';
        popStr += '<li class="nav-item active"><a href="#' + prefix + '_titletab" class="nav-link active">Title</a></li>';
        popStr += '</ul>';
        popStr += '<div class="tab-content pt-2">';
        popStr += '<div id="' + prefix + '_titletab" class="tab-pane active">';
        popStr += '<div class="txtSmall txtClrGrey" style="margin-bottom:8px;">Customize marker title style.</div>';
        popStr += '<div style="margin-bottom:8px;"><label class="txtSmall txtClrHdr">Title Text</label><input id="' + prefix + '_title_text" type="text" class="form-control" value="' + String(markerTitle).replace(/"/g, '&quot;') + '" /></div>';
        popStr += '<div style="margin-bottom:8px;"><label class="txtSmall txtClrHdr">Container Style</label><select id="' + prefix + '_title_container_mode" class="form-control"><option value="default"' + (titleContainerMode == "default" ? ' selected' : '') + '>Default</option><option value="custom"' + (titleContainerMode == "custom" ? ' selected' : '') + '>Custom Bubble</option><option value="jagged"' + (titleContainerMode == "jagged" ? ' selected' : '') + '>Paint Stroke (Subtle)</option><option value="comic_jagged"' + (titleContainerMode == "comic_jagged" ? ' selected' : '') + '>Paint Stroke (Dramatic)</option></select></div>';
        popStr += '<div id="' + prefix + '_custom_opts_wrap" style="display:' + ((titleContainerMode == "custom" || titleContainerMode == "jagged" || titleContainerMode == "comic_jagged") ? 'block' : 'none') + ';">';
        popStr += '<div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:8px;">';
        popStr += '<div><label class="txtSmall txtClrHdr">Text Color</label><br><input id="' + prefix + '_title_text_color" type="text" value="' + titleTextColor + '" data-coloris data-inline-map-coloris="' + prefix + '" class="form-control txtSmall" style="max-width:120px;cursor:pointer;" /></div>';
        popStr += '<div><label class="txtSmall txtClrHdr">Background</label><br><input id="' + prefix + '_title_bg_color" type="text" value="' + titleBgColor + '" data-coloris data-inline-map-coloris="' + prefix + '" class="form-control txtSmall" style="max-width:120px;cursor:pointer;" /></div>';
        popStr += '<div><label class="txtSmall txtClrHdr">Border</label><br><input id="' + prefix + '_title_border_color" type="text" value="' + titleBorderColor + '" data-coloris data-inline-map-coloris="' + prefix + '" class="form-control txtSmall" style="max-width:120px;cursor:pointer;" /></div>';
        popStr += '</div>';
        popStr += '<div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:8px;align-items:flex-end;">';
        popStr += '<div><label class="txtSmall txtClrHdr">Size</label><br><input id="' + prefix + '_title_font_size" type="number" min="10" max="40" step="1" class="form-control" style="max-width:90px;" value="' + titleFontSize + '" /></div>';
        popStr += '<div><label class="txtSmall txtClrHdr">Font Family</label><br><select id="' + prefix + '_title_font_family" class="form-control"><option value="Arial"' + (titleFontFamily == "Arial" ? ' selected' : '') + '>Arial</option><option value="Verdana"' + (titleFontFamily == "Verdana" ? ' selected' : '') + '>Verdana</option><option value="Trebuchet MS"' + (titleFontFamily == "Trebuchet MS" ? ' selected' : '') + '>Trebuchet MS</option><option value="Georgia"' + (titleFontFamily == "Georgia" ? ' selected' : '') + '>Georgia</option><option value="Times New Roman"' + (titleFontFamily == "Times New Roman" ? ' selected' : '') + '>Times New Roman</option><option value="Courier New"' + (titleFontFamily == "Courier New" ? ' selected' : '') + '>Courier New</option></select></div>';
        popStr += '<div style="display:flex;gap:10px;align-items:center;padding-bottom:4px;"><label class="txtSmall"><input id="' + prefix + '_title_font_bold" type="checkbox"' + (titleFontBold ? ' checked' : '') + ' /> Bold</label><label class="txtSmall"><input id="' + prefix + '_title_font_italic" type="checkbox"' + (titleFontItalic ? ' checked' : '') + ' /> Italic</label></div>';
        popStr += '</div>';
        popStr += '<div style="margin-bottom:8px;"><label class="txtSmall txtClrHdr">Bubble Transparency <span id="' + prefix + '_title_bg_opacity_lbl" class="txtClrGrey">' + titleBgOpacity + '%</span></label><input id="' + prefix + '_title_bg_opacity" type="range" min="0" max="100" step="1" value="' + titleBgOpacity + '" class="form-control" /></div>';
        popStr += '</div>';
        popStr += '<div id="' + prefix + '_title_preview_wrap" style="padding:8px;border:1px dashed #d7d7d7;border-radius:8px;margin-top:6px;">';
        popStr += '<div class="txtSmall txtClrGrey" style="margin-bottom:6px;">Preview</div>';
        popStr += '<span id="' + prefix + '_title_preview" style="display:inline-block;max-width:210px;padding:4px 8px;border-radius:8px;font-weight:700;line-height:1.25;white-space:normal;word-break:normal;overflow-wrap:break-word;overflow:hidden;">Marker Title</span>';
        popStr += '<canvas id="' + prefix + '_title_preview_canvas" style="display:none;max-width:210px;vertical-align:top;"></canvas>';
        popStr += '</div>';
        popStr += '</div>';
        popStr += '</div>';
        popStr += '<div style="margin-top:12px;">';
        popStr += '<span class="cls_button cls_button-small bkgdClrGrey txtClrHdr" onclick="javascript:resetInlineMapMarkerOptionsForm(\'' + prefix + '\');">Reset to Default</span>';
        popStr += '&nbsp;&nbsp;';
        popStr += '<span class="cls_button cls_button-small bkgdClrHdr txtClrWhite" onclick="javascript:saveInlineMapMarkerOptions(\'' + prefix + '\');">Save</span>';
        popStr += '&nbsp;&nbsp;<span class="cls_button cls_button-small bkgdClrGrey txtClrHdr" onclick="javascript:JSSHOP.ui.closeLbox();">Cancel</span>';
        popStr += '</div>';

        JSSHOP.ui.popAndFillLbox(popStr);
        setTimeout(function () {
            var txtEl = document.getElementById(prefix + "_title_text");
            var txtClrEl = document.getElementById(prefix + "_title_text_color");
            var bgClrEl = document.getElementById(prefix + "_title_bg_color");
            var brdClrEl = document.getElementById(prefix + "_title_border_color");
            var fontSizeEl = document.getElementById(prefix + "_title_font_size");
            var fontFamilyEl = document.getElementById(prefix + "_title_font_family");
            var boldEl = document.getElementById(prefix + "_title_font_bold");
            var italicEl = document.getElementById(prefix + "_title_font_italic");
            var modeEl = document.getElementById(prefix + "_title_container_mode");
            var bgOpacityEl = document.getElementById(prefix + "_title_bg_opacity");
            if (txtEl) {
                txtEl.addEventListener("input", function () { renderInlineMapMarkerOptionsPreview(prefix); });
                txtEl.addEventListener("change", function () { renderInlineMapMarkerOptionsPreview(prefix); });
            }
            if (modeEl) {
                modeEl.addEventListener("input", function () { renderInlineMapMarkerOptionsPreview(prefix); });
                modeEl.addEventListener("change", function () { renderInlineMapMarkerOptionsPreview(prefix); });
            }
            if (txtClrEl) {
                txtClrEl.addEventListener("input", function () { renderInlineMapMarkerOptionsPreview(prefix); });
                txtClrEl.addEventListener("change", function () { renderInlineMapMarkerOptionsPreview(prefix); });
            }
            if (bgClrEl) {
                bgClrEl.addEventListener("input", function () { renderInlineMapMarkerOptionsPreview(prefix); });
                bgClrEl.addEventListener("change", function () { renderInlineMapMarkerOptionsPreview(prefix); });
            }
            if (brdClrEl) {
                brdClrEl.addEventListener("input", function () { renderInlineMapMarkerOptionsPreview(prefix); });
                brdClrEl.addEventListener("change", function () { renderInlineMapMarkerOptionsPreview(prefix); });
            }
            if (fontSizeEl) {
                fontSizeEl.addEventListener("input", function () { renderInlineMapMarkerOptionsPreview(prefix); });
                fontSizeEl.addEventListener("change", function () { renderInlineMapMarkerOptionsPreview(prefix); });
            }
            if (fontFamilyEl) {
                fontFamilyEl.addEventListener("input", function () { renderInlineMapMarkerOptionsPreview(prefix); });
                fontFamilyEl.addEventListener("change", function () { renderInlineMapMarkerOptionsPreview(prefix); });
            }
            if (boldEl) {
                boldEl.addEventListener("input", function () { renderInlineMapMarkerOptionsPreview(prefix); });
                boldEl.addEventListener("change", function () { renderInlineMapMarkerOptionsPreview(prefix); });
            }
            if (italicEl) {
                italicEl.addEventListener("input", function () { renderInlineMapMarkerOptionsPreview(prefix); });
                italicEl.addEventListener("change", function () { renderInlineMapMarkerOptionsPreview(prefix); });
            }
            if (bgOpacityEl) {
                bgOpacityEl.addEventListener("input", function () { renderInlineMapMarkerOptionsPreview(prefix); });
                bgOpacityEl.addEventListener("change", function () { renderInlineMapMarkerOptionsPreview(prefix); });
            }
            initInlineMapMarkerColorPickers(prefix);
            refreshInlineMapMarkerNuDropdowns(prefix);
            renderInlineMapMarkerOptionsPreview(prefix);
        }, 40);
    } catch (eOpenMarkerOpt) {
        console.log("openInlineMapMarkerOptions: " + eOpenMarkerOpt);
    }
}

function saveInlineMapMarkerOptions(prefix) {
    try {
        if (!inlineMapMarkerOptionsCtx[prefix]) {
            return;
        }
        var ctxObj = inlineMapMarkerOptionsCtx[prefix];
        var markerObj = getInlineMapMarkerObj(ctxObj.type, ctxObj.key);
        if (!markerObj) {
            return;
        }
        var titleTextEl = document.getElementById(prefix + "_title_text");
        var modeEl = document.getElementById(prefix + "_title_container_mode");
        var textColorEl = document.getElementById(prefix + "_title_text_color");
        var bgColorEl = document.getElementById(prefix + "_title_bg_color");
        var borderColorEl = document.getElementById(prefix + "_title_border_color");
        var fontSizeEl = document.getElementById(prefix + "_title_font_size");
        var fontFamilyEl = document.getElementById(prefix + "_title_font_family");
        var boldEl = document.getElementById(prefix + "_title_font_bold");
        var italicEl = document.getElementById(prefix + "_title_font_italic");
        var bgOpacityEl = document.getElementById(prefix + "_title_bg_opacity");

        var modeVal = modeEl ? String(modeEl.value || "default").toLowerCase() : "default";
        if (modeVal !== "custom" && modeVal !== "default" && modeVal !== "jagged" && modeVal !== "comic_jagged") {
            modeVal = "default";
        }
        var bgOpacityVal = bgOpacityEl ? parseInt(bgOpacityEl.value, 10) : 100;
        if (isNaN(bgOpacityVal)) {
            bgOpacityVal = 100;
        }
        bgOpacityVal = Math.max(0, Math.min(100, bgOpacityVal));
        var fontSizeVal = fontSizeEl ? parseInt(fontSizeEl.value, 10) : 11;
        if (isNaN(fontSizeVal)) {
            fontSizeVal = 11;
        }
        fontSizeVal = Math.max(10, Math.min(40, fontSizeVal));
        var fontFamilyVal = fontFamilyEl ? String(fontFamilyEl.value || "Arial") : "Arial";
        var fontBoldVal = boldEl ? (boldEl.checked ? "yes" : "no") : "yes";
        var fontItalicVal = italicEl ? (italicEl.checked ? "yes" : "no") : "no";

        markerObj.mapMarkerTitleText = titleTextEl ? String(titleTextEl.value || "").trim() : "";
        markerObj.mapMarkerTitleContainerStyle = modeVal;
        if (modeVal === "custom" || modeVal === "jagged" || modeVal === "comic_jagged") {
            markerObj.mapMarkerTitleTextColor = textColorEl ? String(textColorEl.value || "#ffffff") : "#ffffff";
            markerObj.mapMarkerTitleBgColor = bgColorEl ? String(bgColorEl.value || "#000000") : "#000000";
            markerObj.mapMarkerTitleBorderColor = borderColorEl ? String(borderColorEl.value || "#333333") : "#333333";
            markerObj.mapMarkerTitleBgOpacity = bgOpacityVal;
            markerObj.mapMarkerTitleFontSize = fontSizeVal;
            markerObj.mapMarkerTitleFontFamily = fontFamilyVal;
            markerObj.mapMarkerTitleBold = fontBoldVal;
            markerObj.mapMarkerTitleItalic = fontItalicVal;
        } else {
            markerObj.mapMarkerTitleTextColor = "";
            markerObj.mapMarkerTitleBgColor = "";
            markerObj.mapMarkerTitleBorderColor = "";
            markerObj.mapMarkerTitleBgOpacity = "";
            markerObj.mapMarkerTitleFontSize = "";
            markerObj.mapMarkerTitleFontFamily = "";
            markerObj.mapMarkerTitleBold = "";
            markerObj.mapMarkerTitleItalic = "";
        }

        refreshInlineMapMarkersPane();
        var previewTab = document.querySelector('#dvInlinePTypeTabs a[href="#inlinePreviewTab"]');
        if (previewTab) {
            previewTab.classList.add('active');
            var allTabs = document.querySelectorAll('#dvInlinePTypeTabs a');
            for (var i = 0; i < allTabs.length; i++) {
                if (allTabs[i] !== previewTab) allTabs[i].classList.remove('active');
            }
            var previewPane = document.getElementById('dvDemoView');
            var markersPane = document.getElementById('dvInlineMarkersPane');
            var settingsPane = document.getElementById('dvInlineSettingsPane');
            if (previewPane) previewPane.style.display = 'block';
            if (markersPane) markersPane.style.display = 'none';
            if (settingsPane) settingsPane.style.display = 'none';
        }
        if (typeof JSSHOP !== "undefined" && JSSHOP.ads && typeof JSSHOP.ads.trnsltMapPstObj == "function") {
            setTimeout(function () { JSSHOP.ads.trnsltMapPstObj(); }, 80);
        }
        delete inlineMapMarkerOptionsCtx[prefix];
        JSSHOP.ui.closeLbox();
    } catch (eSaveMarkerOpt) {
        console.log("saveInlineMapMarkerOptions: " + eSaveMarkerOpt);
    }
}

function syncInlinePreviewTab() {
    return true;
}

function getInlineMapMarkerDisplayTitle(markerObj, markerType, markerIdx) {
    try {
        var fallback = "Marker " + (parseInt(markerIdx, 10) + 1);
        if (!markerObj || typeof markerObj !== "object") {
            return fallback;
        }

        var decodeMaybe = function(v) {
            if (v === null || typeof v === "undefined") {
                return "";
            }
            var raw = String(v);
            var s = raw;
            try {
                s = decodeURIComponent(s);
            } catch (eDec) {}
            try {
                var lz = LZString.decompressFromEncodedURIComponent(s);
                if (
                    typeof lz === "string" &&
                    lz !== "" &&
                    typeof LZString.compressToEncodedURIComponent === "function" &&
                    LZString.compressToEncodedURIComponent(lz) === raw
                ) {
                    s = lz;
                }
            } catch (eLz) {}
            return s;
        };

        if (markerObj.mapMarkerTitleText && String(markerObj.mapMarkerTitleText).trim() !== "") {
            return String(markerObj.mapMarkerTitleText);
        }

        if (String(markerType || "").toLowerCase() == "users") {
            return decodeMaybe(markerObj.u_fullname || markerObj.uname || markerObj.u_name || fallback) || fallback;
        }

        return decodeMaybe(markerObj.ptitle || markerObj.p_title || markerObj.title || fallback) || fallback;
    } catch (eMarkerTitle) {
        return "Marker";
    }
}

function getInlineMapMarkersHtml() {
    var markersStr = "";
    var selectedType = "props";
    var selectedArr = [];
    try {
        if (typeof inpMapPstCntnt != "undefined" && inpMapPstCntnt && inpMapPstCntnt.value) {
            selectedType = String(inpMapPstCntnt.value).toLowerCase();
        }
        if (selectedType == "users") {
            if (typeof currSlctdUsrObj != "undefined" && currSlctdUsrObj) {
                for (var ukey in currSlctdUsrObj) {
                    if (currSlctdUsrObj.hasOwnProperty(ukey)) {
                        selectedArr.push({ key: ukey, rec: currSlctdUsrObj[ukey] });
                    }
                }
            }
        } else {
            selectedType = "props";
            if (typeof currSlctdPrpsObj != "undefined" && currSlctdPrpsObj) {
                for (var pkey in currSlctdPrpsObj) {
                    if (currSlctdPrpsObj.hasOwnProperty(pkey)) {
                        selectedArr.push({ key: pkey, rec: currSlctdPrpsObj[pkey] });
                    }
                }
            }
        }

        markersStr += "<div class=\"txtSmall txtClrGrey\" style=\"padding:6px 2px;\">";
        markersStr += "Content: <span class=\"txtBold txtClrHdr\">" + (selectedType == "users" ? "Users" : "Properties") + "</span>";
        markersStr += " &nbsp;|&nbsp; <a href=\"javascript:JSSHOP.ui.getPickerDiv('inpMapPstCntnt');\"><span class=\"txtBold txtClrBlue txtDecorUline\">Markers:</span> <span class=\"txtBold txtClrHdr\">" + selectedArr.length + "</span></a>";
        markersStr += "</div>";

        if (!selectedArr.length) {
            markersStr += "<div class=\"txtSmall txtClrGrey\" style=\"padding:8px 2px;\">No markers selected yet.</div>";
            markersStr += "<div style=\"margin:8px 0 10px 0;\">";
            markersStr += "<span class=\"cls_button cls_button-small bkgdClrHdr txtClrWhite\" onclick=\"javascript:JSSHOP.ui.getPickerDiv('inpMapPstCntnt');\">Select</span>";
            markersStr += "</div>";
            return markersStr;
        }

        var hasMarkerOpts = (typeof openInlineMapMarkerOptions == "function");
        markersStr += "<div style=\"max-height:260px;overflow:auto;border:1px solid #f0f0f0;padding:4px;\">";
        for (var mi = 0; mi < selectedArr.length; mi++) {
            var mKey = selectedArr[mi].key;
            var mRec = selectedArr[mi].rec || {};
            var mTitle = getInlineMapMarkerDisplayTitle(mRec, selectedType, mi);
            var mImg = "images/misc/updates_map_thumb.jpeg";
            if (selectedType == "users" && mRec.u_icon) {
                mImg = "images/user/s_thumb" + mRec.u_icon;
            } else if (selectedType == "props" && mRec.pimage) {
                mImg = "images/property/s_thumb" + mRec.pimage;
            }
            markersStr += "<div class=\"txtSmall\" style=\"padding:6px 4px;border-bottom:1px solid #f4f4f4;display:flex;align-items:center;gap:8px;\">";
            markersStr += "<div style=\"position:relative;width:56px;height:56px;\">";
            markersStr += "<img src=\"" + mImg + "\" style=\"width:56px;height:56px;border:1px solid #ddd;border-radius:8px;object-fit:cover;\">";
            if (hasMarkerOpts) {
                markersStr += "<span title=\"Options\" onclick=\"javascript:openInlineMapMarkerOptions('" + selectedType + "','" + mKey + "');\" style=\"position:absolute;right:-8px;top:-8px;cursor:pointer;background:rgba(255,255,255,0.95);border:1px solid #d7d7d7;border-radius:50%;width:22px;height:22px;line-height:20px;text-align:center;font-size:14px;\">&#9881;</span>";
            }
            markersStr += "</div>";
            markersStr += "<div style=\"min-width:0;flex:1;\">";
            if (hasMarkerOpts) {
                markersStr += "<div class=\"txtClrHdr txtBold\" style=\"font-size:12px;\"><a href=\"javascript:void(0);\" onclick=\"javascript:openInlineMapMarkerOptions('" + selectedType + "','" + mKey + "');\" style=\"color:inherit;text-decoration:underline;\">" + (mi + 1) + ". " + mTitle + "</a></div>";
            } else {
                markersStr += "<div class=\"txtClrHdr txtBold\" style=\"font-size:12px;\">" + (mi + 1) + ". " + mTitle + "</div>";
            }
            markersStr += "<div class=\"txtSmall txtClrGrey\" style=\"font-size:11px;\">Marker " + (mi + 1) + "</div>";
            markersStr += "</div>";
            markersStr += "</div>";
        }
        markersStr += "</div>";
    } catch (eMarkers) {
        markersStr = "<div class=\"txtSmall txtClrRed\">Markers error: " + eMarkers + "</div>";
    }
    return markersStr;
}

function refreshInlineMapMarkersPane() {
    try {
        var dvMarkersPane = document.getElementById("dvInlineMarkersPane");
        if (!dvMarkersPane) {
            return;
        }
        dvMarkersPane.innerHTML = getInlineMapMarkersHtml();
    } catch (eRefreshMarkers) {
        console.log("refreshInlineMapMarkersPane: " + eRefreshMarkers);
    }
}

function renderInlineTabsForMapOrSwiper(postType) {
    var dvTip = document.getElementById("dvTipTxt");
    var dvPrev = document.getElementById("dvDemoView");
    var dvTabsHost = document.getElementById("dvInlineTabsHost");
    if (!dvTip || !dvPrev || !dvTabsHost) {
        return false;
    }
    if (postType != "pmap") {
        return false;
    }

    var settingsHtml = getInlineMapSettingsHtml();
    var tTabs = "";
    tTabs += "<ul class=\"nav nav-tabs mb-2\" id=\"dvInlinePTypeTabs\" style=\"display:flex;gap:6px;\">";
    tTabs += "<li class=\"nav-item active\"><a href=\"#inlinePreviewTab\" class=\"nav-link active\">Preview</a></li>";
    tTabs += "<li class=\"nav-item\"><a href=\"#inlineMarkersTab\" class=\"nav-link\">Markers</a></li>";
    tTabs += "<li class=\"nav-item\"><a href=\"#inlineSettingsTab\" class=\"nav-link\">Settings</a></li>";
    tTabs += "</ul>";
    tTabs += "<div id=\"dvInlineMarkersPane\" class=\"bkgdClrWhite brdrClrNrml\" style=\"display:none;max-width:99%;margin:0 auto;padding:4px;\"></div>";
    tTabs += "<div id=\"dvInlineSettingsPane\" class=\"bkgdClrWhite brdrClrNrml\" style=\"display:none;max-width:99%;margin:0 auto;padding:4px;\"></div>";
    dvTabsHost.innerHTML = tTabs;
    dvTabsHost.style.display = "block";

    var dvMarkersPane = document.getElementById("dvInlineMarkersPane");
    var dvSettingsPane = document.getElementById("dvInlineSettingsPane");
    if (dvMarkersPane) {
        dvMarkersPane.innerHTML = getInlineMapMarkersHtml();
    }
    if (dvSettingsPane) {
        dvSettingsPane.innerHTML = settingsHtml;
    }
    dvTip.style.display = "none";
    dvPrev.style.display = "block";

    var tabs = dvTabsHost.querySelectorAll("#dvInlinePTypeTabs a");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener("click", function(e) {
            e.preventDefault();
            var target = this.getAttribute("href");
            var links = dvTabsHost.querySelectorAll("#dvInlinePTypeTabs .nav-link");
            for (var k = 0; k < links.length; k++) {
                links[k].classList.remove("active");
            }
            this.classList.add("active");

            if (target == "#inlinePreviewTab") {
                dvPrev.style.display = "block";
                if (dvMarkersPane) {
                    dvMarkersPane.style.display = "none";
                }
                if (dvSettingsPane) {
                    dvSettingsPane.style.display = "none";
                }
                if (typeof JSSHOP !== "undefined" && JSSHOP.ads && typeof JSSHOP.ads.trnsltMapPstObj == "function") {
                    setTimeout(function() { JSSHOP.ads.trnsltMapPstObj(); }, 120);
                }
            } else if (target == "#inlineMarkersTab") {
                dvPrev.style.display = "none";
                if (dvSettingsPane) {
                    dvSettingsPane.style.display = "none";
                }
                if (dvMarkersPane) {
                    refreshInlineMapMarkersPane();
                    dvMarkersPane.style.display = "block";
                }
            } else if (target == "#inlineSettingsTab") {
                dvPrev.style.display = "none";
                if (dvMarkersPane) {
                    dvMarkersPane.style.display = "none";
                }
                if (dvSettingsPane) {
                    dvSettingsPane.style.display = "block";
                }
            }
        });
    }

    setTimeout(function() { doMapPstCntntPk("inpMapPstCntnt", inpMapPstCntnt.value, "Properties"); }, 120);
    return true;
}


    var doPTypeTip = function(tMainEl, tMELVal, tMELTxt) {
    // use \u to escape the unicode characters for the special characters in the strings
    // document.getElementById("tmp_p_ptype").disabled=true;
    console.log("doPTypeTip: " + tMainEl + " " + tMELVal + " " + tMELTxt);
    objVal = tMELVal;
    tTChngStrObj = {};
    tTChngStrObj["en_us"] = "";
    tTChngStrObj["pt_pt"] = "";
    tTChngStrObj["spa_spa"] = "";
    hasSlect = "no";
    switch(objVal) {
        case "ppost":
        tTChngStrObj["en_us"] += "Selected Upadte type is Post. You can select various Update types such as Content, Image, Carousel, Map, etc.";
        tTChngStrObj["en_us"] += "<br>Each Update type has different options and layouts to choose from ";
        tTChngStrObj["en_us"] += "<i class=\"nav-material-icons txtClrGrey\">&#xe8b8;</i>.";

        tTChngStrObj["pt_pt"] += "Tipo de Update \u00ea Post. Voc\u00ea pode selecionar v\u00e1rios tipos de Updates, como Conte\u00fado, Imagem, Carrossel, Mapa, etc.";
        tTChngStrObj["pt_pt"] += "<br>Cada tipo de atualiza\u00e7\u00e3o tem diferentes op\u00e7\u00f5es e layouts para escolher ";
        tTChngStrObj["pt_pt"] += "<i class=\"nav-material-icons txtClrDlg\">&#xe8b8;</i>.";

        // tTChngStrObj["pt_pt"] += "Tipo de post alterado para post.";
        // tTChngStrObj["spa_spa"] += "Tipo de publicacion cambiado a publicacion.";
        break;
        case "pcontent":
        tTChngStrObj["en_us"] += "Post type changed to content. A content post is more of a blog post.";
        tTChngStrObj["pt_pt"] += "Tipo de post alterado para conteudo. Um post de conteudo \u00e9 mais um post de blog.";
        tTChngStrObj["spa_spa"] += "Tipo de publicacion cambiado a contenido. Una publicacion de contenido es mas un blog.";
        break;
        case "pimage":
        tTChngStrObj["en_us"] += "Post type changed to image. The image is created from the content.";
        tTChngStrObj["en_us"] += "You can prefill content with user or property layouts.";
        tTChngStrObj["pt_pt"] += "Tipo de post alterado para imagem. A imagem \u00e9 criada a partir do conteudo.";
        tTChngStrObj["pt_pt"] += "Vocw pode preencher o conteudo com layouts de usuario ou propriedade.";
        tTChngStrObj["spa_spa"] += "Tipo de publicacion cambiado a imagen. La imagen se crea a partir del contenido.";
        tTChngStrObj["spa_spa"] += "Puede rellenar el contenido con disenos de usuario o propiedad.";
        hasSlect = "yes";
        // doPstTypOpts("users");
        break;
        case "pcarousel":
        tTChngStrObj["en_us"] += "Post type changed to carousel. A sliding image gallery is created from user or property listings.";
        tTChngStrObj["pt_pt"] += "Tipo de post alterado para carrossel. Uma galeria de imagens deslizantes \u00e9 criada a partir de listagens de usuarios ou propriedades.";
        tTChngStrObj["spa_spa"] += "Tipo de publicacion cambiado a carrusel. Se crea una galería de imagenes deslizantes a partir de listados de usuarios o propiedades.";
        // doPstTypOpts("users");
        return;
        hasSlect = "yes";
        break;
        case "pmap":
        tTChngStrObj["en_us"] += "Post type changed to map. A map is created from user or property listings.";
        tTChngStrObj["pt_pt"] += "Tipo de post alterado para mapa. Um mapa  criado a partir de listagens de usuarios ou propriedades.";
        tTChngStrObj["spa_spa"] += "Tipo de publicacion cambiado a mapa. Se crea un mapa a partir de listados de usuarios o propiedades.";
        hasSlect = "yes";
        break;
        default:
        tTChngStrObj["en_us"] += "Post type changed to post.";
        tTChngStrObj["pt_pt"] += "Tipo de post alterado para post.";
        tTChngStrObj["spa_spa"] += "Tipo de publicacion cambiado a publicacion.";
        break;
        }
        if(hasSlect == "yes") {
            tTChngStrObj["en_us"] += "Plase select layout type: ";
            tTChngStrObj["en_us"] += "<select id=\"inpPTselect\" name=\"inpPTselect\" >";
            tTChngStrObj["en_us"] += "<option value=\"props\">Properties</option>";
            tTChngStrObj["en_us"] += "<option value=\"users\">Users</option>";
            tTChngStrObj["en_us"] += "</select>";
            tTChngStrObj["en_us"] += "<input type=\"button\" value=\"Save\" onclick=\"javascript:doPstTypOpts(document.getElementById('inpPTselect'));\">";
            tTChngStrObj["pt_pt"] += "Selecione o tipo de layout: ";
            tTChngStrObj["pt_pt"] += "<select id=\"inpPTselect\" name=\"inpPTselect\" >";
            tTChngStrObj["pt_pt"] += "<option value=\"props\">Propriedades</option>";
            tTChngStrObj["pt_pt"] += "<option value=\"users\">Usuarios</option>";
            tTChngStrObj["pt_pt"] += "</select>";
            tTChngStrObj["pt_pt"] += "<input type=\"button\" value=\"Salvar\" onclick=\"javascript:doPstTypOpts(document.getElementById('inpPTselect'));\">";
            tTChngStrObj["spa_spa"] += "Seleccione el tipo de diseño: ";
            tTChngStrObj["spa_spa"] += "<select id=\"inpPTselect\" name=\"inpPTselect\" >";
            tTChngStrObj["spa_spa"] += "<option value=\"props\">Propiedades</option>";
            tTChngStrObj["spa_spa"] += "<option value=\"users\">Usuarios</option>";
            tTChngStrObj["spa_spa"] += "</select>";
            tTChngStrObj["spa_spa"] += "<input type=\"button\" value=\"Salvar\" onclick=\"javascript:doPstTypOpts(document.getElementById('inpPTselect'));\">";
            }
            // tTChngStrObj["en_us"] += "<input type=\"button\" value=\"Close\" onclick=\"javascript:JSSHOP.ui.closeLbox();\">";
            // tTChngStrObj["pt_pt"] += "<input type=\"button\" value=\"Fechar\" onclick=\"javascript:JSSHOP.ui.closeLbox();\">";
            // tTChngStrObj["spa_spa"] += "<input type=\"button\" value=\"Cerrar\" onclick=\"javascript:JSSHOP.ui.closeLbox();\">";
            dvDemoView.innerHTML = tTChngStrObj[usrlang];

        // JSSHOP.ui.popAndFillLbox(tTChngStrObj[usrlang]);
    // procNuUIitem("qposts","p_ptype",currUrlArr.tpstid,objVal,"fnshPTypeChange");
    };

  var getEPtypeCngPop = function() {
        tDPTCel = document.getElementById("p_ptype");
        switch(tDPTCel.value) {
            case "ppost":
            case "pcontent":
            doPTypeChange("p_ptype", tDPTCel.value, "nep");
            break;
            case "pimage":
            JSSHOP.ads.doImgPostCnfgPop();
            break;
            case "pcarousel":
            JSSHOP.ads.doSwprConfigPop();
            break;
            case "pmap":
            JSSHOP.ads.doMapPostCnfgPop();
            break;
            default:
            doPTypeChange("p_ptype", tDPTCel.value, "nep");
            break;
            }

    }
var doPTypeChange = function(tMainEl, tMELVal, tMELTxt) {
    // use \u to escape the unicode characters for the special characters in the strings
    // document.getElementById("tmp_p_ptype").disabled=true;
    objVal = tMELVal;
    tTChngStrObj = {};
    tTChngStrObj["en_us"] = "";
    tTChngStrObj["pt_pt"] = "";
    tTChngStrObj["spa_spa"] = "";
    hasSlect = "no";
    switch(objVal) {
        case "ppost":
        tTChngStrObj["en_us"] += "Post type changed to post.";
        tTChngStrObj["pt_pt"] += "Tipo de post alterado para post.";
        tTChngStrObj["spa_spa"] += "Tipo de publicacion cambiado a publicacion.";
        break;
        case "pcontent":
        tTChngStrObj["en_us"] += "Post type changed to content. A content post is more of a blog post.";
        tTChngStrObj["pt_pt"] += "Tipo de post alterado para conteudo. Um post de conteúdo \u00e9 mais um post de blog.";
        tTChngStrObj["spa_spa"] += "Tipo de publicacion cambiado a contenido. Una publicacion de contenido es mas un blog.";
        break;
        case "pimage":
            JSSHOP.ads.doImgPostCnfgPop();
            return;
        tTChngStrObj["en_us"] += "Post type changed to image. The image is created from the content.";
        tTChngStrObj["en_us"] += "You can prefill content with user or property layouts.";
        tTChngStrObj["pt_pt"] += "Tipo de post alterado para imagem. A imagem \u00e9 criada a partir do conteúdo.";
        tTChngStrObj["pt_pt"] += "Você pode preencher o conteúdo com layouts de usuario ou propriedade.";
        tTChngStrObj["spa_spa"] += "Tipo de publicacion cambiado a imagen. La imagen se crea a partir del contenido.";
        tTChngStrObj["spa_spa"] += "Puede rellenar el contenido con diseños de usuario o propiedad.";
        hasSlect = "yes";
        break;
        case "pcarousel":
            JSSHOP.ads.doSwprConfigPop();
            return;
        tTChngStrObj["en_us"] += "Post type changed to carousel. A sliding image gallery is created from user or property listings.";
        tTChngStrObj["pt_pt"] += "Tipo de post alterado para carrossel. Uma galeria de imagens deslizantes \u00e9 criada a partir de listagens de usuarios ou propriedades.";
        tTChngStrObj["spa_spa"] += "Tipo de publicacion cambiado a carrusel. Se crea una galería de imagenes deslizantes a partir de listados de usuarios o propiedades.";
        hasSlect = "yes";
        break;
        case "pmap":

        JSSHOP.ads.doMapPostCnfgPop();
        return;
        tTChngStrObj["en_us"] += "Post type changed to map. A map is created from user or property listings.";
        tTChngStrObj["pt_pt"] += "Tipo de post alterado para mapa. Um mapa  criado a partir de listagens de usuarios ou propriedades.";
        tTChngStrObj["spa_spa"] += "Tipo de publicacion cambiado a mapa. Se crea un mapa a partir de listados de usuarios o propiedades.";
        hasSlect = "yes";
        break;
        default:
        tTChngStrObj["en_us"] += "Post type changed to post.";
        tTChngStrObj["pt_pt"] += "Tipo de post alterado para post.";
        tTChngStrObj["spa_spa"] += "Tipo de publicacion cambiado a publicacion.";
        break;
        }
        if(hasSlect == "yes") {
            tTChngStrObj["en_us"] += "Plase select layout type: ";
            tTChngStrObj["en_us"] += "<select id=\"inpPTselect\" name=\"inpPTselect\" >";
            tTChngStrObj["en_us"] += "<option value=\"props\">Properties</option>";
            tTChngStrObj["en_us"] += "<option value=\"users\">Users</option>";
            tTChngStrObj["en_us"] += "</select>";
            tTChngStrObj["en_us"] += "<input type=\"button\" value=\"Save\" onclick=\"javascript:doPstTypOpts(document.getElementById('inpPTselect'));\">";
            tTChngStrObj["pt_pt"] += "Selecione o tipo de layout: ";
            tTChngStrObj["pt_pt"] += "<select id=\"inpPTselect\" name=\"inpPTselect\" >";
            tTChngStrObj["pt_pt"] += "<option value=\"props\">Propriedades</option>";
            tTChngStrObj["pt_pt"] += "<option value=\"users\">Usuarios</option>";
            tTChngStrObj["pt_pt"] += "</select>";
            tTChngStrObj["pt_pt"] += "<input type=\"button\" value=\"Salvar\" onclick=\"javascript:doPstTypOpts(document.getElementById('inpPTselect'));\">";
            tTChngStrObj["spa_spa"] += "Seleccione el tipo de diseño: ";
            tTChngStrObj["spa_spa"] += "<select id=\"inpPTselect\" name=\"inpPTselect\" >";
            tTChngStrObj["spa_spa"] += "<option value=\"props\">Propiedades</option>";
            tTChngStrObj["spa_spa"] += "<option value=\"users\">Usuarios</option>";
            tTChngStrObj["spa_spa"] += "</select>";
            tTChngStrObj["spa_spa"] += "<input type=\"button\" value=\"Salvar\" onclick=\"javascript:doPstTypOpts(document.getElementById('inpPTselect'));\">";
         }
            tTChngStrObj["en_us"] += "<input type=\"button\" value=\"Close\" onclick=\"javascript:JSSHOP.ui.closeLbox();\">";
            tTChngStrObj["pt_pt"] += "<input type=\"button\" value=\"Fechar\" onclick=\"javascript:JSSHOP.ui.closeLbox();\">";
            tTChngStrObj["spa_spa"] += "<input type=\"button\" value=\"Cerrar\" onclick=\"javascript:JSSHOP.ui.closeLbox();\">";
            // dvDemoView.innerHTML = tTChngStrObj[usrlang];
     JSSHOP.ui.popAndFillLbox(tTChngStrObj[usrlang]);
    // procNuUIitem("qposts","p_ptype",currUrlArr.tpstid,objVal,"fnshPTypeChange");
    };


    var getPTypeChange = function() {
        // doPTypeChange
        tDPTCel = document.getElementById("p_ptype");
        doPTypeChange("p_ptype", tDPTCel.value, "nep");
    };


var fnshPrivChange = function() {
    document.getElementById("tmp_p_privacy").disabled=false;
     JSSHOP.ui.setCBBClickClr(tmp_p_privacy,'bkgdClrDlg','clsDummy', function(){void(0)});
    };



    var doPrivacyChange = function(theObj) {
    document.getElementById("tmp_p_privacy").disabled=true;
    objVal = JSSHOP.shared.getCurrSelectOpt(theObj);
    procNuUIitem("qposts","p_privacy",currUrlArr.tpstid,objVal,"fnshPrivChange");
    };

function setPostImgs(a,theAIb,c) {
    console.log("setPostImgs: " + a + " " + theAIb + " " + c);

    try {
        tmpPrpLinksArr = null;
        tmpPrpLinksArr = [];

    if(theAIb.indexOf("_id") != -1) {

		tAiretArr = JSON.parse(theAIb);
		var len = tAiretArr.length;
        tstr = "";

        iint = 0;
        while (iint < len) {

             tBsj = tAiretArr[iint];
             if(tAiretArr[iint]["m_file"] == p_image.value) {
              tstr += "<div style=\"float:left\" class=\"crsrPointer brdrClrRed\">";

            } else {
			tstr += "<div style=\"float:left\" class=\"crsrPointer\">";
            }
 			tstr += "<img src=\"images/ucontent/" + tAiretArr[iint]["m_file_thumb"] + "\" class=\"icnmedbtn slmtable\" onclick=\"javascript:JSSHOP.ui.popAndFillLbox(getPropIEditDv('" + tAiretArr[iint]["_id"] + "','" + tAiretArr[iint]["m_file"] + "'));\">";
			tstr += "</div>";

			iint++;
		} // end while

        tstr += "<div style=\"clear:both\"></div>";
		document.getElementById("dvPostImgs").innerHTML = tstr;

	} // end if _id

	} catch(e) {
		alert("setPostImgs: " + e);
	}
}

function getPostImgs() {
    tmpFobj = null;
    tmpFobj = {};
    tmpFobj["ws"] = "where m_pid=? and m_rtype=?";
    tmpFobj["wa"] = [currUrlArr.tpstid, 5];
    oi = getNuDBFnvp("qmedia", 5, null, tmpFobj);
    doQComm(oi["rq"], null, "setPostImgs");
}


function fnishMPstAdd(aa,bb,cc) {
    getPostImgs();
    JSSHOP.ui.closeLbox();
    };

var finishMPstUld = function(theMMum) {
    try {


        image = null;
        image = new Image();
        image.src = "images/ucontent/s_thumb" + theMMum;
                // document.getElementById('dvPLogoImg').style.backgroundImage="url(images/slogos/s_thumb" + theMMum + ")";
         JSSHOP.shared.setFrmFieldVal("qmedia", "m_file", theMMum);

        // document.getElementById('dvPLogoImg').style.backgroundImage="url(images/slogos/s_thumb" + theMMum + ")";
        document.getElementById("dvPostImgs").appendChild(image);
         JSSHOP.shared.setFrmFieldVal("qmedia", "m_file", theMMum);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_file_thumb", "s_thumb" + theMMum);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_coid", currUrlArr.tpstid);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_uid", quid);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_pid", currUrlArr.tpstid);
        JSSHOP.shared.setFrmFieldVal("qmedia", "m_dadded", JSSHOP.getUnixTimeStamp());

        tmpDOs = null;
        tmpDOs = {};
        tmpDOs["knvp"] = JSSHOP.shared.getFrmVals(document["qmedia"], "nada");
        oi = getNuDBFnvp("qmedia", 6, null, tmpDOs);
        doQComm(oi["rq"], null, "fnishMPstAdd");
    } catch(e) {
        alert("finishMPstUld:" + e);
        }
    };

if (typeof window.doVideoDiv !== "function") {
    window.doVideoDiv = function(propsArr) {
        try {
            if (typeof getVideoInterfaceHTML !== "function") {
                console.log("doVideoDiv fallback: loading CCapture_mod for getVideoInterfaceHTML");
                if (typeof JSSHOP !== "undefined" && JSSHOP && typeof JSSHOP.loadScript === "function") {
                    JSSHOP.loadScript("js/thirdp/CCapture_mod.js", function() {
                        if (typeof getVideoInterfaceHTML === "function") {
                            window.doVideoDiv(propsArr || []);
                        } else {
                            console.log("doVideoDiv fallback: getVideoInterfaceHTML still unavailable after load");
                        }
                    }, "js");
                }
                return;
            }

            var tVideoHTML = getVideoInterfaceHTML(propsArr || []);
            document.getElementById("dvDemoView").innerHTML = tVideoHTML;

            setTimeout(function() {
                var tabs = document.querySelectorAll("#dvDemoView .nav-tabs a");
                for (var i = 0; i < tabs.length; i++) {
                    tabs[i].addEventListener("click", function(e) {
                        e.preventDefault();
                        var target = this.getAttribute("href");
                        var panes = document.querySelectorAll("#dvDemoView .tab-pane");
                        for (var j = 0; j < panes.length; j++) {
                            panes[j].classList.remove("active");
                        }
                        var targetPane = document.querySelector(target);
                        if (targetPane) {
                            targetPane.classList.add("active");
                        }

                        var tabLinks = document.querySelectorAll("#dvDemoView .nav-tabs li");
                        for (var k = 0; k < tabLinks.length; k++) {
                            tabLinks[k].classList.remove("active");
                        }
                        this.parentElement.classList.add("active");

                        if (target === "#imagesTab") {
                            document.getElementById("divImgsContent").innerHTML = getImgTabContent();
                            setTimeout(function() {
                                if (typeof initFramesSortable === "function") {
                                    initFramesSortable(document.getElementById("sortableImages"), "x_aa-edit-post-imagesTab");
                                }
                            }, 100);
                        } else if (target === "#audioTab") {
                            document.getElementById("divAudioContent").innerHTML = getAudioTabContent();
                        } else if (target === "#videoTab") {
                            if (typeof updatePosterPrependedHint === "function") {
                                updatePosterPrependedHint();
                            }
                        }
                    });
                }

                if (typeof drawVideoCollage === "function") {
                    drawVideoCollage();
                }
                if (typeof updatePosterPrependedHint === "function") {
                    updatePosterPrependedHint();
                }
            }, 500);
        } catch (eDoVideoDiv) {
            console.log("doVideoDiv fallback err: " + eDoVideoDiv);
        }
    };
}

    function doPTypeCheck() {
    console.log("doPTypeCheck");
    tSlctdPstType = document.getElementById("p_ptype").value;
    if(p_ptype.value == "pimage") {
        tPVVval = p_vars.value;
        tmpPPrpObjval = null;
        if(tPVVval.indexOf("dlmtd") != -1) {
            console.log("doPTypeCheck: has dlmtd");
            tPPrvlSplt = tPVVval.split("dlmtd");
            tmpZdSlctPPrpArr = tPPrvlSplt[0];
            tUdcdSlctPPrpArr = decodeURIComponent(tmpZdSlctPPrpArr);
            tLZunzpd = LZString.decompressFromEncodedURIComponent(tUdcdSlctPPrpArr);
            JSSHOP.shared.setSlctdPrpsArr(JSON.parse(tLZunzpd));
            lzUriDcdSTr = decodeURIComponent(tPPrvlSplt[1]);
            lzdecdstr = LZString.decompressFromEncodedURIComponent(lzUriDcdSTr);
        } else {
                        console.log("doPTypeCheck: no dlmtd");
        decdPCval = decodeURIComponent(tPVVval);
       lzdecdstr = LZString.decompressFromEncodedURIComponent(decdPCval);
       }
                   console.log("doPTypeCheck: lzdecdstr: " + lzdecdstr);

       tFullPTIstr = "";
       if(lzdecdstr.indexOf("dvTMCDemo") != -1) {
        tFullPTIstr = lzdecdstr;
       } else {
        tFullPTIstr = lzdecdstr;
        // tFullPTIstr += "<div class=\"property-flyer\" style=\"background-color:#FFFFFF;background: linear-gradient(to bottom,rgb(94, 157, 182), #ffffff); padding: 20px;\" id=\"dvTMCdemo\">";
        // tFullPTIstr += lzdecdstr;
        // tFullPTIstr += "</div>";
       }
             tDVDstr = "<textarea class=\"inpDemoEdtr form-control\" name=\"taDemoEdtr\" id=\"taDemoEdtr\" rows=\"4\" cols=\"30\">" +  tFullPTIstr + "</textarea>";
     tDVDstr += "<div class=\"clearfix\"></div><br>";
    document.getElementById("dvDemoView").innerHTML = tDVDstr;
    setTimeout(function() { JSSHOP.ads.intDemoEditor(); }, 1000);
    }
    if((p_ptype.value == "pmap") || (p_ptype.value == "pcarousel")) {
        currSlctdPrpsObj = null;
        currSlctdPrpsObj = {};
        decdPCval = decodeURIComponent(p_vars.value);
        tPATtlsDecded = decodeURIComponent(p_vars.value);
        tSPIttlStr = LZString.decompressFromEncodedURIComponent(tPATtlsDecded);
        currTPrpObj = JSON.parse(tSPIttlStr);
        currSlctdPrpsObj = currTPrpObj["data"];
        if(p_ptype.value == "pmap") {
                if(currTPrpObj["uptype"] && document.getElementById("inpMapPstCntnt")) {
                    document.getElementById("inpMapPstCntnt").value = currTPrpObj["uptype"];
                }
                if(currTPrpObj["cnfg"] && currTPrpObj["cnfg"]["inpMapPstType"]) {
                    if (typeof setMapPstTypeValue == "function") {
                        setMapPstTypeValue(currTPrpObj["cnfg"]["inpMapPstType"]);
                    } else if (document.getElementById("inpMapPstType")) {
                        document.getElementById("inpMapPstType").value = currTPrpObj["cnfg"]["inpMapPstType"];
                    }
                }
                if(currTPrpObj["cnfg"] && currTPrpObj["cnfg"]["inpMapPstEffect"]) {
                    if (typeof setMapPstEffectValue == "function") {
                        setMapPstEffectValue(currTPrpObj["cnfg"]["inpMapPstEffect"]);
                    } else if (document.getElementById("inpMapPstEffect")) {
                        document.getElementById("inpMapPstEffect").value = currTPrpObj["cnfg"]["inpMapPstEffect"];
                    }
                }
                if(currTPrpObj["cnfg"] && currTPrpObj["cnfg"]["inpMapPstFlySpeed"]) {
                    if (typeof setMapPstFlySpeedValue == "function") {
                        setMapPstFlySpeedValue(currTPrpObj["cnfg"]["inpMapPstFlySpeed"]);
                    } else if (document.getElementById("inpMapPstFlySpeed")) {
                        document.getElementById("inpMapPstFlySpeed").value = currTPrpObj["cnfg"]["inpMapPstFlySpeed"];
                    }
                }
                if(currTPrpObj["cnfg"] && currTPrpObj["cnfg"]["inpMapPstCaptureMoveendGate"]) {
                    if (typeof setMapPstCaptureMoveendGateValue == "function") {
                        setMapPstCaptureMoveendGateValue(currTPrpObj["cnfg"]["inpMapPstCaptureMoveendGate"]);
                    } else if (document.getElementById("inpMapPstCaptureMoveendGate")) {
                        document.getElementById("inpMapPstCaptureMoveendGate").value = currTPrpObj["cnfg"]["inpMapPstCaptureMoveendGate"];
                    }
                }
                if(currTPrpObj["cnfg"] && currTPrpObj["cnfg"]["inpMapPstForceCanvasRenderer"]) {
                    if (typeof setMapPstForceCanvasRendererValue == "function") {
                        setMapPstForceCanvasRendererValue(currTPrpObj["cnfg"]["inpMapPstForceCanvasRenderer"]);
                    } else if (document.getElementById("inpMapPstForceCanvasRenderer")) {
                        document.getElementById("inpMapPstForceCanvasRenderer").value = currTPrpObj["cnfg"]["inpMapPstForceCanvasRenderer"];
                    }
                }
                  setTimeout(function() {  JSSHOP.ads.trnsltMapPstObj(); }, 1000);

        } else {
                  setTimeout(function() {  JSSHOP.ads.trnsltSwiperObj(); }, 1000);
        }
    }
    if(p_ptype.value == "pvideo") {
        currSlctdPrpsObj = null;
        currSlctdPrpsObj = {};
        decdPCval = decodeURIComponent(p_vars.value);
        tPATtlsDecded = decodeURIComponent(p_vars.value);
        tSPIttlStr = LZString.decompressFromEncodedURIComponent(tPATtlsDecded);
        currTPrpObj = JSON.parse(tSPIttlStr);   
        currSlctdPrpsObj = currTPrpObj["data"];
        if(currTPrpObj["cnfg"] && currTPrpObj["cnfg"]["inpVidPstCntnt"] && document.getElementById("inpVidPstCntnt")) {
            document.getElementById("inpVidPstCntnt").value = currTPrpObj["cnfg"]["inpVidPstCntnt"];
        } else if(currTPrpObj["uptype"] && document.getElementById("inpVidPstCntnt")) {
            document.getElementById("inpVidPstCntnt").value = currTPrpObj["uptype"];
        }

        setTimeout(function() {
            JSSHOP.ads.trnsltVideoPstObj();
            setTimeout(function() {
                try {
                    var pvideoCnfg = (currTPrpObj && currTPrpObj["cnfg"]) ? currTPrpObj["cnfg"] : {};

                    if (pvideoCnfg["frameFps"] && typeof setVideoFps == "function") {
                        setVideoFps(pvideoCnfg["frameFps"]);
                    }
                    if (pvideoCnfg["frameDurationSec"] && typeof setFrameDurationSeconds == "function") {
                        setFrameDurationSeconds(pvideoCnfg["frameDurationSec"]);
                    }

                    if (typeof pvideoCnfg["posterFrameSourceIndex"] != "undefined" && pvideoCnfg["posterFrameSourceIndex"] !== "") {
                        tPosterIdx = parseInt(pvideoCnfg["posterFrameSourceIndex"], 10);
                        if (!isNaN(tPosterIdx) && typeof posterFrameSourceIndex != "undefined") {
                            posterFrameSourceIndex = tPosterIdx;
                            if (typeof ensurePosterFrameSelection == "function") {
                                ensurePosterFrameSelection();
                            }
                            if (typeof updatePosterPrependedHint == "function") {
                                updatePosterPrependedHint();
                            }
                        }
                    }

                    if (Array.isArray(pvideoCnfg["framePropertyIds"]) && window.selectedPropsArr && window.selectedPropsArr.length && typeof selectedImages != "undefined") {
                        var idxByPropId = {};
                        for (var sp = 0; sp < window.selectedPropsArr.length; sp++) {
                            idxByPropId[String(window.selectedPropsArr[sp]._id)] = sp;
                        }

                        var oldByIdx = {};
                        if (Array.isArray(selectedImages)) {
                            for (var si = 0; si < selectedImages.length; si++) {
                                if (selectedImages[si] && typeof selectedImages[si].index != "undefined") {
                                    oldByIdx[String(parseInt(selectedImages[si].index, 10))] = selectedImages[si];
                                }
                            }
                        }

                        var restoredImgs = [];
                        for (var fp = 0; fp < pvideoCnfg["framePropertyIds"].length; fp++) {
                            var propIdKey = String(pvideoCnfg["framePropertyIds"][fp]);
                            var srcIdx = idxByPropId[propIdKey];
                            if (typeof srcIdx == "undefined") {
                                continue;
                            }
                            restoredImgs.push(oldByIdx[String(srcIdx)] || { index: srcIdx, text: "" });
                        }

                        if (restoredImgs.length > 0) {
                            selectedImages = restoredImgs;
                            if (typeof applyImageOrder == "function") {
                                applyImageOrder();
                            }
                            if (typeof drawVideoCollage == "function") {
                                drawVideoCollage();
                            }
                        }
                    }
                } catch (ePvideoLoad) {
                    console.log("doPTypeCheck.pvideo.load err: " + ePvideoLoad);
                }
            }, 450);
        }, 1000);
    }



    console.log("edit-post:doPTypeCheck: " + tSlctdPstType);
}

function loadTnyI() {
     JSSHOP.loadScript("js/tinymce/init-tinymce.min.js", doPTypeCheck, "js");
 }

function setUPostAddSave(a,b,c) {
    console.log("setUPostAddSave: " + a + " " + b + " " + c);
    eindex("aa-edit-posts", "pid=aa-edit-posts");
    // JSSHOP.ui.popAndFillLbox("Post added. " + a + " " + b + " " + c);

    // JSSHOP.ui.setCBBClickClr(tmpSvBtnObj,'cls_button cls_button-medium  bkgdClrDGreen txtClrWhite','cls_button cls_button-medium  bkgdClrHdr txtClrWhite', function(){tmpSvBtnObj.innerHTML=stxt[21];tmpSvBtnObj.disabled=false;});
}
function fnishSvECnvsImg(tFnishResp) {
    console.log("fnishSvCnvsImg: " + tFnishResp);
    try   {
        if(tFnishResp.indexOf("Error") != -1) {
            alert("fnishSvCnvsImg: " + tFnishResp);
        } else {
            tFRespObj = JSON.parse(tFnishResp);
            document.getElementById("p_image").value = tFRespObj.in;
           //  doQComm(oi["rq"], null, "setUPostAddSave");
           setPostEAdd();
        }
    } catch(e) {
        alert("fnishSvCnvsImg: " + e);
    }
}

function savePstECnvsImg(canvas) {
    try {
        document.getElementById("in").value = quid;
        //var dataURL = canvas.toDataURL("image/png");
        // toDataUrl in jpeg
        var decDdataURL = canvas.toDataURL("image/jpeg");
        encdLZdDataUrl = LZString.compressToEncodedURIComponent(decDdataURL);
        // log first 100 chars of dataURL
        console.log("savePstECnvsImg: dataURL: " + decDdataURL.substring(0,100));
        inpCnvsImg.value = encdLZdDataUrl;
        tNGPObj = null;
        tNGPObj = {};
        tNGPObj["t"] = "inpCnvsImg";
        tNGPObj["v"] = encdLZdDataUrl;
        tNGPArr = [];
        tNGPArr.push(tNGPObj);
       JSSHOP.ajax.doNwstGenAjaxPost(tNGPArr, "_p/fileCnvsImg.php", "POST", fnishSvECnvsImg, 30000);
       //   document.forms["qposts"].submit();
    } catch(e) {
        alert("savePstECnvsImg: " + e);
    }
}

function setPostEAdd() {
    try {
    console.log("setPostEAdd");
    tTMCcntStr = tmp_p_content_ifr.contentWindow.document.body.innerHTML;
    tLZenced = LZString.compressToEncodedURIComponent(tTMCcntStr);

    document.getElementById("p_content").value = tLZenced;
    document.getElementById("p_title").value = document.getElementById("tmp_p_title").value;
    document.getElementById("p_uid").value = quid;
    document.getElementById("p_dmodified").value = JSSHOP.getUnixTimeStamp();
    document.getElementById("p_dadded").value = JSSHOP.getUnixTimeStamp();
     // if p_ptype is pimage, save the demo editor content as LZString compressed string in p_vars
    tSlctdPstType = document.getElementById("p_ptype").value;
    console.log("setPostEAdd: " + tSlctdPstType);
    if(tSlctdPstType == "pimage") {
        daTAbod = taDemoEdtr_ifr.contentWindow.document.body.innerHTML;
        // daDiv = daTAbod.querySelector("#dvTMCdemo");
        tZpd = LZString.compressToEncodedURIComponent(daTAbod);
        document.getElementById("p_vars").value = tZpd;
        console.log("setPostEAdd.pimage p_vars: " + tZpd);
    }


    tmpFobj = null;
    tmpFobj = {};
    tmpFobj["ws"] = "where _id=?";
    tmpFobj["wa"] = [currUrlArr.tpstid];

     tmpFobj["knvp"] = JSSHOP.shared.getFrmVals(document["qposts"], "nada");
 // tmpFobj["knvp"] = JSSHOP.shared.getKNVParr(JSSHOP.shared.getDynFrmVals(document["qposts"], "tmp_"));
        oi = getNuDBFnvp("qposts", 7, null, tmpFobj);

     // doQComm(oi["rq"], null, "setUPostAddSave");
     JSSHOP.ajax.doNurAjaxPost(oi["rq"], setUPostAddSave);
} catch(e) {
    alert("setPostEAdd.error: " + e);
}
}

function doNuPostEditSave() {
    console.log("doNuPostEditSave");
    tTMCcntStr = tmp_p_content_ifr.contentWindow.document.body.innerHTML;
    tLZenced = LZString.compressToEncodedURIComponent(tTMCcntStr);
    document.getElementById("p_content").value = tLZenced;
    document.getElementById("p_title").value = document.getElementById("tmp_p_title").value;
    document.getElementById("p_dmodified").value = JSSHOP.getUnixTimeStamp();
    tmpFobj = null;
    tmpFobj = {};
    tmpFobj["ws"] = "where _id=?";
    tmpFobj["wa"] = [currUrlArr.tpstid];
     tmpFobj["knvp"] = JSSHOP.shared.getFrmVals(document["qposts"], "nada");
        oi = getNuDBFnvp("qposts", 7, null, tmpFobj);
        JSSHOP.ajax.doNuAjaxPost(oi["rq"], setUPostAddSave);
}

async function doPostAdd() {
    console.log("doPostAdd");
     // tTMCcntStr = tinyMCE.activeEditor.getContent();
     tSlctdPstType = document.getElementById("p_ptype").value;
     console.log("add-pos:doPostAdd: " + tSlctdPstType);

    var ensureHtml2CanvasLoaded = function() {
        return new Promise(function(resolve) {
            if (typeof html2canvas != "undefined" && typeof html2canvas == "function") {
                resolve(true);
                return;
            }
            if (typeof JSSHOP != "undefined" && JSSHOP && typeof JSSHOP.loadScript == "function") {
                JSSHOP.loadScript("js/thirdp/html2canvas.js", function() {
                    resolve(typeof html2canvas != "undefined" && typeof html2canvas == "function");
                }, "js");
                return;
            }
            resolve(false);
        });
    };

    var saveWithCaptureFallback = async function(targetEl, targetLabel) {
        if (!targetEl) {
            console.error("Capture target not found: " + targetLabel);
            return false;
        }

        try {
            if (typeof snapdom != "undefined" && snapdom && typeof snapdom.toCanvas == "function") {
                var snapCanvas = await snapdom.toCanvas(targetEl);
                if (snapCanvas) {
                    savePstECnvsImg(snapCanvas);
                    return true;
                }
            }
        } catch (snapErr) {
            console.error("snapdom capture failed for " + targetLabel + ": ", snapErr);
        }

        var hasHtml2Canvas = await ensureHtml2CanvasLoaded();
        if (!hasHtml2Canvas) {
            console.error("html2canvas unavailable for fallback capture: " + targetLabel);
            return false;
        }

        try {
            var h2cCanvas = await html2canvas(targetEl, {
                useCORS: true,
                allowTaint: false,
                scale: 2,
                width: targetEl.offsetWidth,
                height: targetEl.offsetHeight
            });
            savePstECnvsImg(h2cCanvas);
            return true;
        } catch (h2cErr) {
            console.error("html2canvas fallback failed for " + targetLabel + ": ", h2cErr);
        }

        return false;
    };

    // JSSHOP.ajax.doNuAjaxPost(oi["rq"], setUPostAddSave);
         switch(tSlctdPstType) {
        case "pimage":
            tTgtDv = taDemoEdtr_ifr.contentWindow.document.body;
            // find first child div in tTgtDv
            tTgtChld = tTgtDv.querySelector("div");
              await saveWithCaptureFallback(tTgtChld, "edit-pimage:first-div");

            break;
        case "pcarousel":
            tZpd = LZString.compressToEncodedURIComponent(JSON.stringify(JSSHOP.ads.getUpdatePVrs("pcarousel")));
            p_vars.value = tZpd;
            setPostEAdd();

            // JSSHOP.ads.doSwprConfigPop();
            break;
        case "pmap":
            tZpd = LZString.compressToEncodedURIComponent(JSON.stringify(JSSHOP.ads.getUpdatePVrs("pmap")));
            console.log("doPostAdd.pmap: " + tZpd);

            p_vars.value = tZpd;
            setPostEAdd();
            break;
        case "pvideo":
            try {
                var pvideoVars = JSSHOP.ads.getUpdatePVrs("pvideo");
                if (!pvideoVars || typeof pvideoVars !== "object") {
                    pvideoVars = {};
                }
                if (!pvideoVars.cnfg || typeof pvideoVars.cnfg !== "object") {
                    pvideoVars.cnfg = {};
                }

                if (typeof getVideoFramePropertyIdsForPost === "function") {
                    var framePropIds = getVideoFramePropertyIdsForPost();
                    if (framePropIds && framePropIds.length) {
                        pvideoVars.cnfg.framePropertyIds = framePropIds;
                    }
                }
                if (typeof getFrameDurationSeconds === "function") {
                    pvideoVars.cnfg.frameDurationSec = getFrameDurationSeconds();
                }
                if (typeof getVideoFps === "function") {
                    pvideoVars.cnfg.frameFps = getVideoFps();
                }
                if (typeof getPosterFrameSourceIndexForPost === "function") {
                    var posterFrameSourceIndex = getPosterFrameSourceIndexForPost();
                    if (posterFrameSourceIndex !== "") {
                        pvideoVars.cnfg.posterFrameSourceIndex = posterFrameSourceIndex;
                    }
                }

                p_vars.value = LZString.compressToEncodedURIComponent(JSON.stringify(pvideoVars));
            } catch (ePvideoSaveCfg) {
                console.log("doPostAdd.pvideo save cfg err: " + ePvideoSaveCfg);
            }
            setPostEAdd();
            break;
        default:
            setPostEAdd();
             break;
        }
}



function fillUPostFlds() {
    JSSHOP.shared.setDynFrmVals(document["qposts"], "tmp_");
    /*
    istype = document.getElementById("tmp_stype");
iptype = document.getElementById("tmp_ptype");
iselPropStat = document.getElementById("tmp_pstatus");
JSSHOP.shared.addCurrSlctObj(svftObj["contract"], istype, stype.value, "noQvalue", "noQvalue");
JSSHOP.shared.addCurrSlctObj(svftObj["propstat"], iselPropStat, pstatus.value, "noQvalue", "noQvalue");
JSSHOP.shared.addCurrSlctObj(svftObj["proptype"], iptype, ptype.value, "noQvalue", "noQvalue");


// svftObj["userpriv"]
    JSSHOP.shared.addCurrSlctObj(svftObj["userpriv"], tmp_p_privacy, p_privacy.value, "noQvalue", "noQvalue");
    JSSHOP.shared.addCurrSlctObj(svftObj["postpages"], tmp_p_ppage, p_ppage.value, "noQvalue", "noQvalue");
    JSSHOP.shared.addCurrSlctObj(svftObj["posttype"], tmp_p_ptype, p_ptype.value, "noQvalue", "noQvalue");
    JSSHOP.shared.addCurrSlctObj(svftObj["postpos"], tmp_p_pos, p_pos.value, "noQvalue", "noQvalue");
    JSSHOP.shared.addCurrSlctObj(svftObj["postauth"], tmp_p_author, p_author.value, "noQvalue", "noQvalue");
    JSSHOP.shared.addCurrSlctObj(svftObj["poststat"], tmp_p_stat, p_stat.value, "noQvalue", "noQvalue");
 */
    tDDPTyObj = {};
    tDDPTyObj["ddtype"] = "noQvalue";
       tDDPTyObj["fld"] = "p_ptype";
       tDDPTyObj["lbl"] = stxt[103];
       tDDPTyObj["val"] = document.getElementById("p_ptype").value;
       tDDPTyObj["kvpObj"] = svftObj["posttype"];
       tDDPTyObj["cb"] = "doPTypeTip";
       tDDPTyObj["fldcls"] = "dropdown-toggle crsrPointer txtClrHdr";
       tDDPTyObj["lblcls"] = "txtSmall";
       tDDPTyObj["valcls"] = "slmtable bkgdClrNrml txtClrNrml txtSmall txtBold";
       tDDPTyObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
       tDDPTyObj["horvert"] = "horizontal";
       tDDPTyObj["icn"] = "noQvalue";
       tDDPTyObj["kvIcnsObj"] = {};
       tDDPTyObj["kvIcnsObj"]["ppost"] = "&#xe5cd;";
       tDDPTyObj["kvIcnsObj"]["pcontent"] = "&#xe5cd;";
       tDDPTyObj["kvIcnsObj"]["pimage"] = "&#xe5cd;";
       tDDPTyObj["kvIcnsObj"]["pcarousel"] = "&#xe5cd;";
       tDDPTyObj["kvIcnsObj"]["pmap"] = "&#xe5cd;";
       tDDPTyStr = JSSHOP.ui.getNuBSdropDstr(tDDPTyObj);
       document.getElementById("dvPTypeFld").innerHTML = tDDPTyStr;


       tDDPrvObj = {};
       tDDPrvObj["ddtype"] = "moreHoriz";
       tDDPrvObj["fld"] = "noQvalue";
       tDDPrvObj["lbl"] = stxt[101];
       tDDPrvObj["val"] = "noQvalue";
       tDDPrvObj["kvpObj"] = {"privacy":stxt[101],"visibility":stxt[109]};
       tDDPrvObj["cb"] = "doPrivVizPop";
       tDDPrvObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
       tDDPrvObj["lblcls"] = "txtSmall";
       tDDPrvObj["valcls"] = "txtSmall";
       tDDPrvObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
       tDDPrvObj["horvert"] = "horizontal";
       tDDPrvObj["icn"] = "noQvalue";
       tDDPrvObj["kvIcnsObj"] = {};
       tDDPrvObj["kvIcnsObj"]["privacy"] = "&#xe5cd;";
       tDDPrvObj["kvIcnsObj"]["visibility"] = "&#xe5cd;";
       tDDPrvStr = JSSHOP.ui.getNuBSdropDstr(tDDPrvObj);
       document.getElementById("tdMorePost").innerHTML = tDDPrvStr;

       // div dvDDxcntnt
       // dvDDxcntnt = array drowpdown content i.e. Images, Templates, etc.
       tDDXtraCntObj = {};
       tDDXtraCntObj["ddtype"] = "noQvalue";
       tDDXtraCntObj["fld"] = "noQvalue";
       tDDXtraCntObj["lbl"] =  stxt[110]; // more
       tDDXtraCntObj["val"] = "noQvalue";
       tDDXtraCntObj["kvpObj"] = {"images":stxt[980],"templates":stxt[111],"snippets":stxt[112]};
       tDDXtraCntObj["cb"] = "doDDxcntntPop";
       tDDXtraCntObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
       tDDXtraCntObj["lblcls"] = "txtSmall";
       tDDXtraCntObj["valcls"] = "txtSmall";
       tDDXtraCntObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
       tDDXtraCntObj["horvert"] = "vertical";
       tDDXtraCntObj["icn"] = "noQvalue";
       tDDXtraCntObj["kvIcnsObj"] = {};
       tDDXtraCntObj["kvIcnsObj"]["images"] = "&#xe5cd;";
       tDDXtraCntObj["kvIcnsObj"]["templates"] = "&#xe5cd;";
       tDDXtraCntObj["kvIcnsObj"]["snippets"] = "&#xe5cd;";

       tDDXtraCntStr = JSSHOP.ui.getNuBSdropDstr(tDDXtraCntObj);
       // document.getElementById("dvDDxcntnt").innerHTML = tDDXtraCntStr;

       doPTypeTip("p_ptype", p_ptype.value, "noQvalue");


    tDDfullStr = "";
theTpCVstr = document.getElementById("p_content").value;
unEncdStr = decodeURIComponent(theTpCVstr);
document.getElementById("tmp_p_content").value = LZString.decompressFromEncodedURIComponent(unEncdStr);
document.getElementById("tmp_p_title").value = decodeURIComponent(document.getElementById("p_title").value);
getPostImgs();
setTimeout(function() { JSSHOP.loadScript("js/tinymce/tinymce.min.js", loadTnyI, "js"); }, 500);
//     setTimeout(function() { JSSHOP.ads.intDemoEditor(); }, 1000);

}
function doMPostForm(aaw,aww,cww) {
  try {
    console.log("doMPostForm: " + aaw + " " + aww + " " + cww);
    // JSSHOP.ui.popAndFillLbox("Facebook post added. " + aaw + " " + aww + " " + cww);
    console.log('doMPropForm - aww: ' + aww);
    theRetPArr = JSON.parse(aww);
    thePRetObj = theRetPArr[0];
    // alert("doMPropForm: " + thePRetObj);
// tmp_ptitle.value = thePRetObj.ptitle;
    //  JSSHOP.shared.setFrmVals("property",theRetPArr[0], fillPpropFields);
     for(var gkey in thePRetObj) {
        console.log("doMPostForm: " + gkey + " " + thePRetObj[gkey]);
        document["qposts"][gkey].value = thePRetObj[gkey];
        tmpOldFFvals[gkey] = thePRetObj[gkey];

        }
setTimeout(function(){ fillUPostFlds(); }, 300);
} catch(e) {
    alert("doMPostForm: " + e);
}
}

function fnishPrivChange(tfpA, tfpB, tfpC) {
    // tdDD
    tPobjStr = JSON.stringify(tfpC);
    console.log("fnishPrivChange: " + tfpA + " " + tfpB + " " + tPobjStr);
}

function updatePrivViz(aaw,aww,cww) {
    console.log("updatePrivViz: " + aaw + " " + aww + " " + cww);

    tUPfld = aww;
    tUPval = cww;
    procNuUIitem("qposts", tUPfld, currUrlArr.tpstid, tUPval, "fnishPrivChange");
   }

function doPrivVizPop(tPVel, tPVval, tPVtxt) {
console.log("doPrivVizPop: " + tPVel + " " + tPVval + " " + tPVtxt);



tDDPStr = "";
document.getElementById("lightbox_content").innerHTML = "";
if(tPVtxt == "privacy") {
tDDBojA = {};
    tDDBojA = JSSHOP.ui.getBSDDOptsO();
    tDDBojA["ddtype"] = "noQvalue";
    tDDBojA["fld"] = "p_privacy";
    tDDBojA["lbl"] = stxt[101];
    tDDBojA["val"] = svftObj["userpriv"];
    tDDBojA["kvpObj"] = svftObj["userpriv"];
    tDDBojA["cb"] = "updatePrivViz";
    tDDBojA["fldcls"] = "nav-link dropdown-toggle txtSmall";
    tDDBojA["lblcls"] = "txtSmall";
    tDDBojA["valcls"] = "txtSmall";
    tDDBojA["icncls"] = "nav-material-icons txtBold txtClrGrey";
    tDDBojA["horvert"] = "vertical";
    tDDBojA["icn"] = "noQvalue";
    tDDBojA["kvIcnsObj"] = {};
    tDDBojA["kvIcnsObj"]["public"] = "&#xe5cd;";
    tDDBojA["kvIcnsObj"]["private"] = "noQvalue";
    tDDBojA["kvIcnsObj"]["members"] = "&#xe5cd;";
    //  {"public":"e5cd;","private":"e5cd;","members":"noQvalue"};
    tDDPStr += JSSHOP.ui.getNuBSdropDstr(tDDBojA);



     // tDDPStr += JSSHOP.ui.getBSdropDstr('p_author', stxt[105], svftObj["postauth"], "doGenDDcb");
     tDDBAuthObj = JSSHOP.ui.getBSDDOptsO();
        tDDBAuthObj["ddtype"] = "noQvalue";
        tDDBAuthObj["fld"] = "p_author";
        tDDBAuthObj["lbl"] = stxt[105];
        tDDBAuthObj["val"] = svftObj["postauth"];
        tDDBAuthObj["kvpObj"] = svftObj["postauth"];
        tDDBAuthObj["cb"] = "updatePrivViz";
        tDDBAuthObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
        tDDBAuthObj["lblcls"] = "txtSmall";
        tDDBAuthObj["valcls"] = "txtSmall";
        tDDBAuthObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
        tDDBAuthObj["horvert"] = "vertical";
        tDDBAuthObj["icn"] = "noQvalue";
        tDDBAuthObj["kvIcnsObj"] = {};
        tDDBAuthObj["kvIcnsObj"]["user"] = "&#xe5cd;";
        tDDBAuthObj["kvIcnsObj"]["co"] = "noQvalue";
        tDDBAuthObj["kvIcnsObj"]["anon"] = "&#xe5cd;";
        tDDBAuthObj["kvIcnsObj"]["none"] = "noQvalue";
        tDDBAuthStr = JSSHOP.ui.getNuBSdropDstr(tDDBAuthObj);
        tDDPStr += tDDBAuthStr;

} else {
         tDDPPgObj = JSSHOP.ui.getBSDDOptsO();
        tDDPPgObj["ddtype"] = "noQvalue";
        tDDPPgObj["fld"] = "p_ppage";
        tDDPPgObj["lbl"] = stxt[102];
        tDDPPgObj["val"] = svftObj["postpages"];
        tDDPPgObj["kvpObj"] = svftObj["postpages"];
        tDDPPgObj["cb"] = "updatePrivViz";
        tDDPPgObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
        tDDPPgObj["lblcls"] = "txtSmall";
        tDDPPgObj["valcls"] = "txtSmall";
        tDDPPgObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
        tDDPPgObj["horvert"] = "vertical";
        tDDPPgObj["icn"] = "noQvalue";
        tDDPPgObj["kvIcnsObj"] = {};
        tDDPPgObj["kvIcnsObj"]["all"] = "&#xe5cd;";
        tDDPPgObj["kvIcnsObj"]["main"] = "noQvalue";
        tDDPPgObj["kvIcnsObj"]["profile"] = "&#xe5cd;";
        tDDPPgObj["kvIcnsObj"]["prop"] = "noQvalue";
        tDDPPgObj["kvIcnsObj"]["cont"] = "&#xe5cd;";
        tDDPPgObj["kvIcnsObj"]["about"] = "noQvalue";
        tDDPPgStr = JSSHOP.ui.getNuBSdropDstr(tDDPPgObj);
        tDDPStr += tDDPPgStr;


         tDDPPosObj = JSSHOP.ui.getBSDDOptsO();
        tDDPPosObj["ddtype"] = "noQvalue";
        tDDPPosObj["fld"] = "p_pos";
        tDDPPosObj["lbl"] = stxt[104];
        tDDPPosObj["val"] = svftObj["postpos"];
        tDDPPosObj["kvpObj"] = svftObj["postpos"];
        tDDPPosObj["cb"] = "updatePrivViz";
        tDDPPosObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
        tDDPPosObj["lblcls"] = "txtSmall";
        tDDPPosObj["valcls"] = "txtSmall";
        tDDPPosObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
        tDDPPosObj["horvert"] = "vertical";
        tDDPPosObj["icn"] = "noQvalue";
        tDDPPosObj["kvIcnsObj"] = {};
        tDDPPosObj["kvIcnsObj"]["top"] = "&#xe5cd;";
        tDDPPosObj["kvIcnsObj"]["bottom"] = "noQvalue";
        tDDPPosStr = JSSHOP.ui.getNuBSdropDstr(tDDPPosObj);
        tDDPStr += tDDPPosStr;

         tDDPStatObj = JSSHOP.ui.getBSDDOptsO();
        tDDPStatObj["ddtype"] = "noQvalue";
        tDDPStatObj["fld"] = "p_stat";
        tDDPStatObj["lbl"] = stxt[106];
        tDDPStatObj["val"] = svftObj["poststat"];
        tDDPStatObj["kvpObj"] = svftObj["poststat"];
        tDDPStatObj["cb"] = "updatePrivViz";
        tDDPStatObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
        tDDPStatObj["lblcls"] = "txtSmall";
        tDDPStatObj["valcls"] = "txtSmall";
        tDDPStatObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
        tDDPStatObj["horvert"] = "vertical";
        tDDPStatObj["icn"] = "noQvalue";
        tDDPStatObj["kvIcnsObj"] = {};
        tDDPStatObj["kvIcnsObj"]["normal"] = "&#xe5cd;";
        tDDPStatObj["kvIcnsObj"]["featured"] = "noQvalue";
        tDDPStatObj["kvIcnsObj"]["highlight"] = "&#xe5cd;";
        tDDPStatObj["kvIcnsObj"]["pin"] = "noQvalue";
        tDDPStatObj["kvIcnsObj"]["pinhlight"] = "&#xe5cd;";
        tDDPStatStr = JSSHOP.ui.getNuBSdropDstr(tDDPStatObj);
        tDDPStr += tDDPStatStr;
    }

     tDvpadStr = "<div  style=\"margin:10px;min-height:280px;\">" + tDDPStr + "</div>";
    // JSSHOP.ui.popAndFillLbox(tDvpadStr);
    // JSSHOP.ui.popFillObox = function(theFill, thHdrIcn, thHdrTxt, thUseClosDv, thUseClosBtn) {

    JSSHOP.ui.popFillObox(tDvpadStr, "&#xe5cd", stxt[100], "yes", "yes");
    }


function doGenDDcb(tDDCBel, tDDCBval, tDDCBtxt) {

    tTDHstr = "tdDD" + tDDCBel;
    tdHel = document.getElementById(tTDHstr);
    tMainEL = document.getElementById(tDDCBel);
    if(tdHel) {
        if(tdHel.innerHTML == tDDCBtxt) {
        } else {
            /*        */
            tOldVal = tMainEL.value;
            tdOLdStr = "liDD" + tDDCBel +  tOldVal;
            tdOldEl = document.getElementById(tdOLdStr);
            if(tdOldEl) {
                tdOldEl.className = "bkgdClrWhite";
            }
            tdCurrEl = document.getElementById("liDD" + tDDCBel + tDDCBval);
        tdCurrEl.className = "bkgdClrNrml";

        tdHel.innerHTML = tDDCBtxt;
        tMainEL.value = tDDCBval;
        JSSHOP.ui.setCBBClickClr(tdHel,tdHel.className + " bkgdClrDlg txtWhite",tdHel.className, function(){void(0)});
        }
    }
    document.getElementById(tDDCBel).value = tDDCBval;
   //  alert("doGenDDcb: " + tDDCBel + " " + tDDCBval + " " + tDDCBtxt);
     }



var getLayoutsPop = function() {
    tLayStr = "";
    tLayStr += "<div class=\"edtr-container\">";
    tLayStr += "<div>";
    tLayStr += "<div>";
    tLayStr += "<table>";
    tLayStr += "<tr><td>";

 tLayStr += "<nav class=\"nav nav-pills nav-fill\">";
    // tLayStr += "<nav class=\"nav flex-column\">";
    tLayStr += "<ul class=\"nav nav-tabs\">";
    tLayStr += "<li class=\"nav-item\">";
    tLayStr += "<a class=\"nav-link active\" aria-current=\"page\" href=\"#\">Active</a>";
    tLayStr += "</li>";
    tLayStr += "<li class=\"nav-item\">";
    tLayStr += "<a class=\"nav-link\" href=\"#\">Link</a>";
    tLayStr += "</li>";
    tLayStr += "<li class=\"nav-item dropdown\">";
    tLayStr += "<a class=\"nav-link dropdown-toggle txtSmall\" data-bs-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-expanded=\"false\">Dropdown</a>";
    tLayStr += "<ul class=\"dropdown-menu\">";
    tLayStr += "<li><a class=\"dropdown-item\" href=\"#\">Action</a></li>";
    tLayStr += "<li><a class=\"dropdown-item\" href=\"#\">Another action</a></li>";
    tLayStr += "<li><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>";
    tLayStr += "<li><hr class=\"dropdown-divider\"></li>";
    tLayStr += "<li><a class=\"dropdown-item\" href=\"#\">Separated link</a></li>";
    tLayStr += "</ul>";
    tLayStr += "</li>";

// <div class="form-group row">
    tLayStr += "<li class=\"nav-item dropdown\">";
    tLayStr += "<table><tr><td><a class=\"nav-link dropdown-toggle txtSmall\" data-bs-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-expanded=\"false\">Dropdown:</a>";
    tLayStr += "<ul class=\"dropdown-menu\">";
    tLayStr += "<li><a class=\"dropdown-item\" href=\"#\">Action</a></li>";
    tLayStr += "<li><a class=\"dropdown-item\" href=\"#\">Another action</a></li>";
    tLayStr += "<li><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>";
    tLayStr += "<li><hr class=\"dropdown-divider\"></li>";
    tLayStr += "<li><a class=\"dropdown-item\" href=\"#\">Separated link</a></li>";
    tLayStr += "</ul></td><td>";
    tLayStr += "<a class=\"txtSmall txtBold txtClrHdr txtDecorNone\"   href=\"#\">Nahahaha  </a>";
    tLayStr += "</td></tr></table>";
    tLayStr += "</li>";



    tLayStr += "<li class=\"nav-item\">";
    tLayStr += "<a class=\"nav-link disabled\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">Disabled</a>";
    tLayStr += "</li>";
    tLayStr += "</ul>";
    tLayStr += "</nav>";




    tLayStr += "</td></tr>";
    tLayStr += "</table>";
    tLayStr += "</div>";
    tLayStr += "</div>";
    tLayStr += "<div class=\"edtr-pagination\"></div>";
    tLayStr += "</div>";
    JSSHOP.ui.popAndFillLbox(tLayStr);
}




function setTPstUsrsArr(a,b,c) {
    try {
        document.getElementById("dvDemoView").innerHTML = "...../.....";

        JSSHOP.ui.closeLbox();
        tmpPstUsrArr = null;
        tmpPstUsrArr = [];
        tmpPstUsrArr = JSON.parse(b);
        console.log("setTPstUsrsArr: " + tmpPstUsrArr);
        // tPostTypIs = JSSHOP.shared.getCurrSelectOpt(tmp_p_ptype);
        tPostTypIs = p_ptype.value;
        switch(tPostTypIs) {
            case "pcarousel":
            tCaroStr = JSSHOP.ads.getSwiperUStr(tmpPstUsrArr);
            document.getElementById("dvDemoView").innerHTML = tCaroStr;
            tSwpObj = {};
            tSwpObj["cls"] = ".swiper";
            tSwpObj["spv"] = 2;
            tSwpObj["spaceBetween"] = 10;
            tSwpObj["loop"] = false;
            tSwpObj["createElements"] = true;
           tSwpObj["autoplay"] = 2500;
           tSwpObj["height"] = 0;
            tSwpObj["autoplayDisableOnInteraction"] = false;
            tSwpObj["pagination"] = ".swiper-pagination";
            tSwpObj["paginationClickable"] = true;
            tSwpObj["nextButton"] = ".swiper-button-next";
            tSwpObj["prevButton"] = ".swiper-button-prev";
            tSwpObj["grabCursor"] = true;
            JSSHOP.ads.loadSwiperObj(tSwpObj);
            break;
            case "pimage":
            tImgHTML = JSSHOP.ads.getEditorUStr(tmpPstUsrArr);
            tinyMCE.activeEditor.setContent(tImgHTML);
            break;
            default:
                break;
            }


        // alert("setTPstUsrsArr: " + tmpPstUsrArr);
        } catch(e) {
            alert("setTPstUsrsArr: " + e);
        }
    }

  function setTPstPrpsArr(a,b,c) {
    document.getElementById("dvDemoView").innerHTML = "...../.....";
    tmpPstPrpsArr = null;
    tmpPstPrpsArr = [];
    tmpPstPrpsArr = JSON.parse(b);
    console.log("setTPstPrpsArr: " + tmpPstPrpsArr);
    JSSHOP.ui.closeLbox();

    try {
        // tPostTypIs = JSSHOP.shared.getCurrSelectOpt(tmp_p_ptype);
    tPostTypIs = p_ptype.value;
        switch(tPostTypIs) {
            case "pcarousel":
                tPrpsSwpStr = JSSHOP.ads.getSwprPrpStr(tmpPstPrpsArr);
                document.getElementById("dvDemoView").innerHTML = tPrpsSwpStr;
                tSwpObj = {};
                tSwpObj["slidesPerView"] = 3;
                tSwpObj["spaceBetween"] = 10;
                tSwpObj["loop"] = true;
                // tSwpObj["autoplay"] = 2500;
                tSwpObj["autoplayDisableOnInteraction"] = false;
                tSwpObj["pagination"] = ".swiper-pagination";
                tSwpObj["paginationClickable"] = true;
                tSwpObj["nextButton"] = ".swiper-button-next";
                tSwpObj["prevButton"] = ".swiper-button-prev";
                tSwpObj["grabCursor"] = true;
                setTimeout(function(){ JSSHOP.ads.loadSwiperObj(tSwpObj); }, 1000);
             break;
             case "pimage":

                tImgHTML = JSSHOP.ads.getEditorPrpStr(tmpPstPrpsArr);
                tinyMCE.activeEditor.setContent(tImgHTML);
            default:
                break;
            }


        // alert("setTPstPrpsArr: " + tmpPstPrpsArr);
        } catch(e) {
            alert("setTPstPrpsArr: " + e);
        }
    }


    /* end of add post functions */




    var dmyFnishCntLoad = fnishCntLoad;
fnishCntLoad = function() {
try {
 JSSHOP.ads.doGenericPlug("posts", "edit-post", "dvPartLinks");
} catch(e) {
    alert("fnishCntLoad: " + e);
}
 tafsb = nCurrFFieldOb();
tafsb.fid = "btnEUsave";
tafsb.fty = "button";
// tafsb.fcl = function() { tmpSvBtnObj=this;JSSHOP.ui.setSaveBtnClick(this, function(){doPropEdit()}) };
 // tafsb.fcl = function() { JSSHOP.ui.setSaveBtnClick(this, function(){doPostAdd()}) };

// euiFFObjArr.push(tafsb);


JSSHOP.shared.initFrmComps(euiFFObjArr);
currMediaID = prpid;

if(currUrlArr.tpstid) {
    // alert('fnishCntLoad');
  JSSHOP.ui.showHideElement("dvPrpImgs", "show");
  // doMediaBtnSetup('uploadBtn', '', 'finishMPstUld', '../images/ucontent');

   tmpDOqs = null;
  tmpDOqs = {};
  tmpDOqs["ws"] = "where _id=?";
  tmpDOqs["wa"] = [currUrlArr.tpstid];
  tmpDOqs["l"] = 45;
  oia = getNuDBFnvp("qposts",5,null,tmpDOqs);
  doQComm(oia["rq"], null, "doMPostForm");

      }   else {
        eindex("aa-add-post", "pid=aa-add-post");
        return;
      }




        // dvPrvDispFlds.innerHTML = JSSHOP.ui.getBSdropDstr('p_privacy', stxt[101], svftObj["userpriv"], "doGenDDcb");
return dmyFnishCntLoad;
};



var OLddmyFnishCntLoad = fnishCntLoad;
fnishCntLoad = function() {
JSSHOP.ads.doGenericPlug("posts", "edit-post", "dvPartLinks");

tafsb = nCurrFFieldOb();
tafsb.fid = "btnEUsave";
tafsb.fty = "button";
// tafsb.fcl = function() { tmpSvBtnObj=this;JSSHOP.ui.setSaveBtnClick(this, function(){doPropEdit()}) };
 tafsb.fcl = function() { tmpSvBtnObj=this;JSSHOP.ui.setSaveBtnClick(this, function(){doPostEdit()}) };

euiFFObjArr.push(tafsb);

JSSHOP.shared.initFrmComps(euiFFObjArr);
currMediaID = prpid;
// doWinLoad();


    if(currUrlArr.tpstid) {
  // alert('fnishCntLoad');
JSSHOP.ui.showHideElement("dvPrpImgs", "show");
doMediaBtnSetup('uploadBtn', '', 'finishMPstUld', '../images/ucontent');

 tmpDOqs = null;
tmpDOqs = {};
tmpDOqs["ws"] = "where _id=?";
tmpDOqs["wa"] = [currUrlArr.tpstid];
tmpDOqs["l"] = 45;
oia = getNuDBFnvp("qposts",5,null,tmpDOqs);
doQComm(oia["rq"], null, "doMPostForm");

    }   else {
      eindex("aa-add-post", "pid=aa-add-post");
    }


return dmyFnishCntLoad;
};

