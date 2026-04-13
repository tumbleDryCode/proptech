
/*
// propdescs table is used to store property descriptions and titles in multiple languages
// this should be used in conjunction with the property table
// pd_prpid is the property id from the property table
// pd_prptlng is the language code
// pd_prptype is the type of description or title
// pd_prpval is the description or title
// pd_dadded is the date added
CREATE TABLE `propdescs` (
  `_id` int(12) NOT NULL,
  `pd_prpid` int(12) NOT NULL,
  `pd_prptlng` varchar(12) NOT NULL,
  `pd_prptype` varchar(12) NOT NULL,
  `pd_prptitle` text NOT NULL,
  `pd_prpdesc` text NOT NULL,
  `pd_dadded` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

*/


/*
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

*/
var BaseUrl = window.location.protocol + "//" + window.location.host + "" ;
var htmlRegex = /<(.*)>.*?|<(.*)\/>/;

function doTransPost() {
    // BaseUrl = "https://api.cognitiveservices.azure.com/translator/text/v3.0";

        var request = new XMLHttpRequest();

        var data = new FormData();
        data.append("q", self.inputText);
        data.append("source", self.sourceLang);
        data.append("target", self.targetLang);
        data.append("format", "text");
        // data.append("alternatives", 3);
        data.append("api_key", localStorage.getItem("api_key") || "");
        // if (apiSecret) data.append("secret", atob(self.apiSecret));

        request.open('POST', BaseUrl + '/translate', true);

        request.onload = function() {
            try{




                var res = JSON.parse(request.response);
                // Success!
                if (res.translatedText !== undefined){
                    translatedText = res.translatedText;
                    loadingTranslation = false;
                    output = JSON.stringify(res, null, 4);
                    console.log(output);

                } else{
                    throw new Error(res.error || "Unknown error");
                }
            } catch (e) {
                error = e.message;
                loadingTranslation = false;
            }
        };

        request.onerror = function() {
            error = "Cannot load /translate";
            loadingTranslation = false;
        };

        request.send(data);
    }




function setLangSlctDD() {
    tLangDDObj = {};
    tLangDDObj["ddtype"] = "noQvalue";
    tLangDDObj["fld"] = "pd_prptlng";
    tLangDDObj["lbl"] =  stxt[110]; // more
    tLangDDObj["val"] = usrlang;
    tLangDDObj["kvpObj"] = tPrpLngs;
    tLangDDObj["cb"] = "doLangSlct";
    tLangDDObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
    tLangDDObj["lblcls"] = "txtSmall";
    tLangDDObj["valcls"] = "txtSmall";
    tLangDDObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
    tLangDDObj["horvert"] = "vertical";
    tLangDDObj["icn"] = "noQvalue";
    tLangDDObj["kvIcnsObj"] = {};
    tLangDDObj["kvIcnsObj"]["en_us"] = "&#xe5cd;";
    tLangDDObj["kvIcnsObj"]["spa_spa"] = "&#xe5cd;";
    tLangDDObj["kvIcnsObj"]["fr_fr"] = "&#xe5cd;";
    tLangDDObj["kvIcnsObj"]["pt_pt"] = "&#xe5cd;";

    tLangDDStr = JSSHOP.ui.getNuBSdropDstr(tLangDDObj);
    document.getElementById("dvLangSlct").innerHTML = tLangDDStr;
}




setTimeout(function(){ setLangSlctDD(); }, 1000);
