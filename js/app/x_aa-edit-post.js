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

function doPostEdit() {
     
    tmpSvBtnObj = btnEUsave;
    tTMCcntStr = tinyMCE.activeEditor.getContent();
    tLZenced = LZString.compressToEncodedURIComponent(tTMCcntStr);
    document.getElementById("p_content").value = tLZenced;
    document.getElementById("p_title").value = document.getElementById("tmp_p_title").value;
    document.getElementById("p_uid").value = quid;
    document.getElementById("p_dmodified").value = JSSHOP.getUnixTimeStamp();
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
    doQComm(oi["rq"], null, "setUPostSave");
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
       document.getElementById("dvDDxcntnt").innerHTML = tDDXtraCntStr;

       doPTypeTip("p_ptype", p_ptype.value, "noQvalue");


   JSSHOP.loadScript("js/tinymce/tinymce.js", loadTnyI, "js");
   tDDfullStr = "";



tPCntnVal = p_content.value;
tDcdVal =  decodeURIComponent(tPCntnVal);
tmp_p_content.value = LZString.decompressFromEncodedURIComponent(tDcdVal);
getPostImgs();
JSSHOP.loadScript("js/tinymce/tinymce.min.js", loadPstTnyI, "js");

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
        doPstTypOpts("users");
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

function loadTnyI() {
     JSSHOP.loadScript("js/tinymce/init-tinymce.min.js", donada, "js");
 }

function setUPostAddSave(a,b,c) {
    console.log("setUPostAddSave: " + a + " " + b + " " + c);
    eindex("aa-edit-posts", "pid=aa-edit-posts");
    // JSSHOP.ui.popAndFillLbox("Post added. " + a + " " + b + " " + c);
 
    // JSSHOP.ui.setCBBClickClr(tmpSvBtnObj,'cls_button cls_button-medium  bkgdClrDGreen txtClrWhite','cls_button cls_button-medium  bkgdClrHdr txtClrWhite', function(){tmpSvBtnObj.innerHTML=stxt[21];tmpSvBtnObj.disabled=false;});
}
function fnishSvCnvsImg(tFnishResp) {
    console.log("fnishSvCnvsImg: " + tFnishResp);
    try   {
        if(tFnishResp.indexOf("Error") != -1) {
            alert("fnishSvCnvsImg: " + tFnishResp);
        } else {
            tFRespObj = JSON.parse(tFnishResp);
            document.getElementById("p_image").value = tFRespObj.in;
           //  doQComm(oi["rq"], null, "setUPostAddSave");
           setPostAdd();
        }
    } catch(e) {
        alert("fnishSvCnvsImg: " + e);
    }   
}

function savePstCanvasImg(canvas) {
    try {
        document.getElementById("in").value = quid;
        var dataURL = canvas.toDataURL("image/png");
        inpCnvsImg.value = dataURL;
        tNGPObj = null;
        tNGPObj = {};
        tNGPObj["t"] = "inpCnvsImg";
        tNGPObj["v"] = dataURL;
        tNGPArr = [];
        tNGPArr.push(tNGPObj);
        JSSHOP.ajax.doNuGenAjaxPost("frmCnvsImg", tNGPArr, "_p/fileCnvsImg.php", "POST", fnishSvCnvsImg);
        // document.forms["qposts"].submit();
    } catch(e) {
        alert("savePstCanvasImg: " + e);
    }
} 

function setPostAdd() {
    console.log("setPostAdd");
    tTMCcntStr = tmp_p_content_ifr.contentWindow.document.body.innerHTML;
    tLZenced = LZString.compressToEncodedURIComponent(tTMCcntStr);

    document.getElementById("p_content").value = tLZenced;
    document.getElementById("p_title").value = document.getElementById("tmp_p_title").value;
    document.getElementById("p_uid").value = quid;
    document.getElementById("p_dmodified").value = JSSHOP.getUnixTimeStamp();
    document.getElementById("p_dadded").value = JSSHOP.getUnixTimeStamp();



    tmpFobj = null;
    tmpFobj = {};
     tmpFobj["knvp"] = JSSHOP.shared.getFrmVals(document["qposts"], "nada");
 // tmpFobj["knvp"] = JSSHOP.shared.getKNVParr(JSSHOP.shared.getDynFrmVals(document["qposts"], "tmp_"));
        oi = getNuDBFnvp("qposts", 6, null, tmpFobj);
    
     // doQComm(oi["rq"], null, "setUPostAddSave");
     JSSHOP.ajax.doNuAjaxPost(oi["rq"], setUPostAddSave);
}

function doPostAdd() {
    console.log("doPostAdd");
     // tTMCcntStr = tinyMCE.activeEditor.getContent();
     tSlctdPstType = document.getElementById("p_ptype").value;
     console.log("add-pos:doPostAdd: " + tSlctdPstType);

    // JSSHOP.ajax.doNuAjaxPost(oi["rq"], setUPostAddSave);
     switch(tSlctdPstType) {
        case "pimage":
            html2canvas(taDemoEdtr_ifr.contentWindow.document.body).then(function(canvas) { savePstCanvasImg(canvas);})
            break;
        case "pcarousel":
            tZpd = LZString.compressToEncodedURIComponent(JSON.stringify(JSSHOP.ads.getUpdatePVrs("pcarousel")));
            p_vars.value = tZpd;    
            setPostAdd();   
             
            JSSHOP.ads.doSwprConfigPop();
            break;
        case "pmap":
            tZpd = LZString.compressToEncodedURIComponent(JSON.stringify(JSSHOP.ads.getUpdatePVrs("pmap")));
            console.log("doPostAdd.pmap: " + tZpd);
            
            p_vars.value = tZpd;   
            setPostAdd();
            break;
        default:
            setPostAdd();
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
       document.getElementById("dvDDxcntnt").innerHTML = tDDXtraCntStr;

       doPTypeTip("p_ptype", p_ptype.value, "noQvalue");


    tDDfullStr = "";

tmp_p_content.value = LZString.decompressFromEncodedURIComponent(p_content.value);
getPostImgs();
JSSHOP.loadScript("js/tinymce/tinymce.min.js", loadTnyI, "js");

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

function doPrivVizPop(tPVel, tPVval, tPVtxt) {
console.log("doPrivVizPop: " + tPVel + " " + tPVval + " " + tPVtxt);
     


tDDPStr = "";   
document.getElementById("lightbox_content").innerHTML = "";
if(tPVval == "privacy") {
tDDBojA = {};
    tDDBojA = JSSHOP.ui.getBSDDOptsO();
    tDDBojA["ddtype"] = "noQvalue";
    tDDBojA["fld"] = "p_privacy";
    tDDBojA["lbl"] = stxt[101];
    tDDBojA["val"] = svftObj["userpriv"];
    tDDBojA["kvpObj"] = svftObj["userpriv"];
    tDDBojA["cb"] = "donada";
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
        tDDBAuthObj["cb"] = "donada";
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
        tDDPPgObj["cb"] = "donada";
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
        tDDPPosObj["cb"] = "donada";
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
        tDDPStatObj["cb"] = "donada";
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
   
     tDvpadStr = "<div  style=\"margin:10px\">" + tDDPStr + "</div>";
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

