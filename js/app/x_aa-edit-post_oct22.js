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
var dmyFnishCntLoad = fnishCntLoad;
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

