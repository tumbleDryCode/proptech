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


 
 
var doPTypeChange = function(theObj) {
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

function loadTnyI() {
     JSSHOP.loadScript("js/tinymce/init-tinymce.min.js", donada, "js");
 }

function setUPostAddSave(a,b,c) {
    console.log("setUPostAddSave: " + a + " " + b + " " + c);
    eindex("aa-edit-posts", "pid=aa-edit-posts");
    // JSSHOP.ui.popAndFillLbox("Post added. " + a + " " + b + " " + c);
 
    // JSSHOP.ui.setCBBClickClr(tmpSvBtnObj,'cls_button cls_button-medium  bkgdClrDGreen txtClrWhite','cls_button cls_button-medium  bkgdClrHdr txtClrWhite', function(){tmpSvBtnObj.innerHTML=stxt[21];tmpSvBtnObj.disabled=false;});
}
function doPostAdd() {
     
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
 // tmpFobj["knvp"] = JSSHOP.shared.getKNVParr(JSSHOP.shared.getDynFrmVals(document["qposts"], "tmp_"));
        oi = getNuDBFnvp("qposts", 6, null, tmpFobj);
    
    //  // doQComm(oi["rq"], null, "setUPostSave");

    JSSHOP.ajax.doNuAjaxPost(oi["rq"], setUPostAddSave);
   console.log("add-pos:doPostAdd:oi[rq]" + oi["rq"]);
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

    */
// svftObj["userpriv"] 
    JSSHOP.shared.addCurrSlctObj(svftObj["userpriv"], tmp_p_privacy, p_privacy.value, "noQvalue", "noQvalue");
    JSSHOP.shared.addCurrSlctObj(svftObj["postpages"], tmp_p_ppage, p_ppage.value, "noQvalue", "noQvalue");
    JSSHOP.shared.addCurrSlctObj(svftObj["posttype"], tmp_p_ptype, p_ptype.value, "noQvalue", "noQvalue");
    JSSHOP.shared.addCurrSlctObj(svftObj["postpos"], tmp_p_pos, p_pos.value, "noQvalue", "noQvalue");
    JSSHOP.shared.addCurrSlctObj(svftObj["postauth"], tmp_p_author, p_author.value, "noQvalue", "noQvalue");
    JSSHOP.shared.addCurrSlctObj(svftObj["poststat"], tmp_p_stat, p_stat.value, "noQvalue", "noQvalue");

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
var dmyFnishCntLoad = fnishCntLoad;
fnishCntLoad = function() {

 
tafsb = nCurrFFieldOb();
tafsb.fid = "btnEUsave";
tafsb.fty = "button";
// tafsb.fcl = function() { tmpSvBtnObj=this;JSSHOP.ui.setSaveBtnClick(this, function(){doPropEdit()}) };
 tafsb.fcl = function() { tmpSvBtnObj=this;JSSHOP.ui.setSaveBtnClick(this, function(){doPostAdd()}) };

euiFFObjArr.push(tafsb);
 
JSSHOP.shared.initFrmComps(euiFFObjArr);
currMediaID = prpid;
// doWinLoad();

 
        JSSHOP.shared.addCurrSlctObj(svftObj["userpriv"], tmp_p_privacy, p_privacy.value, "noQvalue", "noQvalue");
        JSSHOP.shared.addCurrSlctObj(svftObj["postpages"], tmp_p_ppage, p_ppage.value, "noQvalue", "noQvalue");
        JSSHOP.shared.addCurrSlctObj(svftObj["posttype"], tmp_p_ptype, p_ptype.value, "noQvalue", "noQvalue");
        JSSHOP.shared.addCurrSlctObj(svftObj["postpos"], tmp_p_pos, p_pos.value, "noQvalue", "noQvalue");
        JSSHOP.shared.addCurrSlctObj(svftObj["postauth"], tmp_p_author, p_author.value, "noQvalue", "noQvalue");
        JSSHOP.shared.addCurrSlctObj(svftObj["poststat"], tmp_p_stat, p_stat.value, "noQvalue", "noQvalue");
 

        JSSHOP.loadScript("js/tinymce/tinymce.js", loadTnyI, "js");
        tDDfullStr = "";
        // dvPrvDispFlds.innerHTML = JSSHOP.ui.getBSdropDstr('p_privacy', stxt[101], svftObj["userpriv"], "doGenDDcb");
        tDDfullStr += JSSHOP.ui.getBSdropDstr('p_privacy', stxt[101], svftObj["userpriv"], "doGenDDcb");
        tDDfullStr += JSSHOP.ui.getBSdropDstr('p_ppage', stxt[102], svftObj["postpages"], "doGenDDcb");
        tDDfullStr += JSSHOP.ui.getBSdropDstr('p_ptype', stxt[103], svftObj["posttype"], "doPTypeChange");
        tDDfullStr += JSSHOP.ui.getBSdropDstr('p_pos', stxt[104], svftObj["postpos"], "doGenDDcb");
        tDDfullStr += JSSHOP.ui.getBSdropDstr('p_author', stxt[105], svftObj["postauth"], "doGenDDcb");
        tDDfullStr += JSSHOP.ui.getBSdropDstr('p_stat', stxt[106], svftObj["poststat"], "doGenDDcb");
        dvPrvDispFlds.innerHTML = tDDfullStr;

return dmyFnishCntLoad;
};

function doGenDDcb(tDDCBel, tDDCBval, tDDCBtxt) {
    tTDHstr = "tdDD" + tDDCBel;
    tdHel = document.getElementById(tTDHstr);
    if(tdHel) {
        if(tdHel.innerHTML == tDDCBtxt) {
        } else {
        tdHel.innerHTML = tDDCBtxt;
        JSSHOP.ui.setCBBClickClr(tdHel,"bkgdClrDlg","txtSMall", function(){void(0)});
        }
    }
    document.getElementById(tDDCBel).value = tDDCBval;
   //  alert("doGenDDcb: " + tDDCBel + " " + tDDCBval + " " + tDDCBtxt);
     }

// template functions

var getEditorPrpStr = function(tSwUarr) {
    tSwpStr = "";
    tSwpStr += "<div class=\"edtr-container\">";
    tSwpStr += "<div class=\"edtr-wrapper\">";
    for(i = 0; i < tSwUarr.length; i++) {
        tSwUObj = tSwUarr[i];
        tSuTstr = "<img src=\"admin/property/" + tSwUObj.pimage + "\" style=\"width:100%\">";
        tSwpStr += "<div class=\"edtr-grid rtable brdrClrHdr\" style=\"float:left;\">";
        tSwpStr += "<table class=\"table table-striped\">";
        tSwpStr += "<tr><td>" + tSuTstr + "</td></tr><tr><td>" + tSwUObj.ptitle + "</td></tr>";
        tSwpStr += "</table>";
        tSwpStr += "</div>";
    }
    tSwpStr += "</div>";
    tSwpStr += "<div class=\"edtr-pagination\"></div>";
    tSwpStr += "</div>";
    return tSwpStr;
};

var getEditorUStr = function(tSwUarr) {
    tSwpStr = "";
    tSwpStr += "<div class=\"edtr-container\">";
    tSwpStr += "<div class=\"edtr-wrapper\">";
    for(i = 0; i < tSwUarr.length; i++) {
        tSwUObj = tSwUarr[i];
        tSuTstr = "<img src=\"images/user/" + tSwUObj.u_icon + "\" style=\"width:100%\">";
        tSwpStr += "<div class=\"edtr-grid rtable brdrClrHdr\" style=\"float:left\">";
        tSwpStr += "<table class=\"table table-striped\">";
        tSwpStr += "<tr><td>" + tSuTstr + "</td></tr><tr><td>" + tSwUObj.u_fullname + "</td></tr>";
        tSwpStr += "</table>";
        tSwpStr += "</div>";
    }
    tSwpStr += "</div>";
    tSwpStr += "<div class=\"edtr-pagination\"></div>";
    tSwpStr += "</div>";
    return tSwpStr;
};

var getSwprPrpStr = function(taSwUarr) {
    taSwpStr = "";
    taSwpStr += "<div class=\"swiper-container\" style=\"max-height:300px;overflow:hidden;\">";
    taSwpStr += "<div class=\"swiper-wrapper\">";
    for(i = 0; i < taSwUarr.length; i++) {
        taSwUObj = taSwUarr[i];
        taSuTstr = "<div style=\"width:100%;max-height:290px;overflow:hidden;\"><img src=\"admin/property/" + taSwUObj.pimage + "\" style=\"width:100%;max-height:260px;\"></div>";
        taSwpStr += "<div class=\"swiper-slide\">";
        taSwpStr += "<table class=\"table table-striped\">";
        taSwpStr += "<tr><td>" + taSuTstr + "</td></tr><tr><td>" + taSwUObj.ptitle + "</td></tr>";
        taSwpStr += "</table>";
        taSwpStr += "</div>";
    }

    taSwpStr += "</div>";
    taSwpStr += "<div class=\"swiper-pagination\"></div>";
    taSwpStr += "<div class=\"swiper-button-next\"></div>";
    taSwpStr += "<div class=\"swiper-button-prev\"></div>";
    taSwpStr += "</div>";
    return taSwpStr;
};

var getSwiperUStr = function(tSwUarr) {

    tSwpStr = "";
    tSwpStr += "<div class=\"swiper-container\">";
    tSwpStr += "<div class=\"swiper-wrapper\">";
    for(i = 0; i < tSwUarr.length; i++) {
        tSwUObj = tSwUarr[i];
        tSuTstr = "<img src=\"images/user/" + tSwUObj.u_icon + "\" style=\"width:100%\">";
        tSwpStr += "<div class=\"swiper-slide\">";
        tSwpStr += "<table class=\"table table-striped\">"; 
        tSwpStr += "<tr><td>" + tSuTstr + "</td></tr><tr><td>" + tSwUObj.u_fullname + "</td></tr>";
        tSwpStr += "</table>";
        tSwpStr += "</div>";
 
    }
    tSwpStr += "</div>";
    tSwpStr += "<div class=\"swiper-pagination\"></div>";
    tSwpStr += "<div class=\"swiper-button-next\"></div>";
    tSwpStr += "<div class=\"swiper-button-prev\"></div>";
    tSwpStr += "</div>";
    return tSwpStr;
};

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