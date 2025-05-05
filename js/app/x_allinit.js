// Various Scripts pertaining to the pages.
var jscssprefix = "";
var onlyNums = new RegExp(/^\d{10}$/); // allow only numbers 
var pipeDir = "noQvalue";
var forceCache = "no";
var currCacheVer = "1";
var timeout_handles = [];
var loaded_scripts = [];
var loaded_streams = [];
var arrUprefs = []; // prefs array from the cookie
var arrSprefs = {};
arrSprefs = {"layout":"default","alayout":"default","sia":"y"};
var arrSTmpprefs = {};
arrSTmpprefs = {"layout":"default","alayout":"default","sia":"y"};
var currPrefPrdV = "g"; // grid layout preference
var currPrefPrdP = "a"; // price order preference
var currInfoStr = ""; // above saved as html string
var trgr_bclck = [];
var canLoad = "no";
var pid = "index_main";
var ppid = 0;
var cid = 24807;
var catid = 0;
var itemid = 0;
var threadid = 0;
var pgpq = "noQvalue";
var arrDBnDocFNames = []; 
var arrDBnDocFNVpar = [];
var arrDBFNames = [];
var arrAllForms = [];
var tmpSQBArr = [];
var tmpVindex = 0; 
var ntImgCtr = []; // array counter for images
var currMresp = "";
var quid = 0;
var cuid = 0;
var content = "noQvalue";
var cartID = "noQvalue"
var currRQstr =  "noQvalue";
var currRQdb = "evenflow-local";  // the custom title given to database in javafx database properties dialog
var currRQtable = "qitem";
var currDBUGstr = "";
var currMenuObj;
var currACTBstr = "";
var currMenuArr = [];
var currItemArr = [];
var currItemsArr = [];
var currCartIArr = [];
var currMsgsIArr = [];
var currMediaBtnPrfx = "";
var currMediaBtnCB = "finishImgUload";
var currMediaFldr = "images/property";
var currPrpImgsFldr = "images/property";
var currCartStr = "";
var currCartIttl = 0;
var currCartTtl = 0;
var currCartTShow = "no"; 
var currMItemsArr = [];
var currProdsArr = [];
var currQcommsArr = [];
var currFrmQArr = [];
var currPgTitle = "";
var currAdmnMode = "n";
var currImgSleep = 280; // sleeping before setting image source
var currUrlArr = {};
var currCnxOb = {};
var currFFieldOb = {};
var currFFinitArr = [];
var currPgIndex = 0; // pagination starts at 1
var currProdsPPg = 10; // pagination  - number of items per page
var currMCollItems = {}; // the acual menu button collection links object
var stxt = []; // languge file strings found in aa-en_us.js
var svtxt = [];
var deflang = "pt_pt"; // default language
var usrlang = "pt_pt"; // user language
var usrcc = "PT"; // user country code
var currShopLangs = {};
currShopLangs["en_us"] = "English";
currShopLangs["spa_spa"] = "Spanish";
currShopLangs["fr_fr"] = "French";
currShopLangs["pt_pt"] = "Portuguese";
var actbSearch;
var actbLoaded = false; // boolean show js_actb.js  is loaded
var shopDir = document.location.href;
var currWebHome = document.location.href;
if(shopDir.indexOf("titan") != -1) {
    currWebHome = "https://titan/incasa/";
} else {
    currWebHome = "https://dev.propsgo.com/";
}
currWebHome = "https://dev.propsgo.com/";
var spinTextDiv = document.createElement("div");
var currSpinText = "noQvalue";
var currSpinType = "small";
var currSpinHtml = "noQvalue";
var currSpinTarget = "noQvalue";
var currIContent = "y"; // ajax request to include the tplates/... file or not 
var svftObj = {};


var currRcntActStr = ""; // recent activity set as cookie string ie., seen products or searches 
var currRcntActArr = []; // recent activity parsed as array of objects from cookie string 
var currRcntActHstr = "";
var currRcntFavsStr = "";
var currRcntFavsArr = [];
var currFavsIdstr = "";

var currSearchSW = "noQvalue";
var currSearchObj = {};
var currSearchType = "products"; // companies (qco db table), messages (qmsgs, qmsg), etc;


var boolShwLogoHdr = "n"; // whether or not to show image logo and title on pages

var currCstmQstr = "";
var currDvGResId = "";
var currIsAjaxed = "n";
var currCModelsObj = {};
var currPUrlObj = {};
var currPMakeID = "";
var currPMakeN = "";
var currPSeriesID = "";
var currPSeriesN = "";
var currSeriesArr = "";
var currPModelID = "";
var currPModelN = "";
var currPPartID = "";
var currPPartN = "";
var currPPrtCatArr = [];
var xarrAllYears = ["2022","2021","2020","2019","2018","2017","2016","2015","2014","2013","2012","2011","2010","2009","2008","2007","2006","2005","2004","2003","2002","2001","2000","1999","1998","1997","1996","1995","1994","1993","1992","1991","1990","1989","1988","1987","1986","1985","1984","1983","1982","1981","1980","1979","1978","1977","1976","1975","1974","1973","1972","1971","1970","1969","1968","1967","1966","1965","1964","1963","1962","1961","1960","1959","1958","1957","1956","1955","1954","1953","1952","1951","1950","1949","1948","1947","1946","1945","1944","1943","1942","1941","1940","1939","1938","1937","1936","1935","1934","1933","1932","1931","1930","1929","1928","1927","1926","1925","1924","1923","1922","1921","1920","1919","1918","1917","1916","1915","1914","1913","1912","1911","1910"];
// create a new array with the years in reverse order
var arrAllYears = xarrAllYears.slice().reverse();

 

var currPMakesArr = ["1:ALFA ROMEO","2:AUDI","3:BENTLEY","4:BMW","5:CADILLAC","6:CHEVROLET","7:CHRYSLER","8:CITROEN","9:DACIA","10:DAEWOO","11:DAIHATSU","12:DODGE","13:DS","14:FIAT","15:FORD","16:HONDA","17:HYUNDAI","18:INFINITI","19:ISUZU","20:IVECO","21:JAGUAR","22:JEEP","23:KIA","24:LADA","25:LAMBORGHINI","27:LANCIA","28:LAND ROVER","29:LEXUS","30:MASERATI","31:MAZDA","32:MERCEDES BENZ","33:MG","34:MICROCAR","35:MINI","36:MITSUBISHI","37:NISSAN","38:OPEL","39:PEUGEOT","40:PONTIAC","41:PORSCHE","42:RENAULT","43:ROVER","44:SAAB","45:SEAT","46:SKODA","47:SMART","48:SSANGYONG","49:SUBARU","50:SUZUKI","51:TESLA","52:TOYOTA","53:TRIUMPH","54:VOLVO","55:VW"];
var objAllMakes = {"pi":0,"pn":"m","m1":{"id":"1","n":"ALFA ROMEO"},"m2":{"id":"2","n":"AUDI"},"m3":{"id":"3","n":"BENTLEY"},"m4":{"id":"4","n":"BMW"},"m5":{"id":"5","n":"CADILLAC"},"m6":{"id":"6","n":"CHEVROLET"},"m7":{"id":"7","n":"CHRYSLER"},"m8":{"id":"8","n":"CITROEN"},"m9":{"id":"9","n":"DACIA"},"m10":{"id":"10","n":"DAEWOO"},"m11":{"id":"11","n":"DAIHATSU"},"m12":{"id":"12","n":"DODGE"},"m13":{"id":"13","n":"DS"},"m14":{"id":"14","n":"FIAT"},"m15":{"id":"15","n":"FORD"},"m16":{"id":"16","n":"HONDA"},"m17":{"id":"17","n":"HYUNDAI"},"m18":{"id":"18","n":"INFINITI"},"m19":{"id":"19","n":"ISUZU"},"m20":{"id":"20","n":"IVECO"},"m21":{"id":"21","n":"JAGUAR"},"m22":{"id":"22","n":"JEEP"},"m23":{"id":"23","n":"KIA"},"m24":{"id":"24","n":"LADA"},"m25":{"id":"25","n":"LAMBORGHINI"},"m27":{"id":"27","n":"LANCIA"},"m28":{"id":"28","n":"LAND ROVER"},"m29":{"id":"29","n":"LEXUS"},"m30":{"id":"30","n":"MASERATI"},"m31":{"id":"31","n":"MAZDA"},"m32":{"id":"32","n":"MERCEDES BENZ"},"m33":{"id":"33","n":"MG"},"m34":{"id":"34","n":"MICROCAR"},"m35":{"id":"35","n":"MINI"},"m36":{"id":"36","n":"MITSUBISHI"},"m37":{"id":"37","n":"NISSAN"},"m38":{"id":"38","n":"OPEL"},"m39":{"id":"39","n":"PEUGEOT"},"m40":{"id":"40","n":"PONTIAC"},"m41":{"id":"41","n":"PORSCHE"},"m42":{"id":"42","n":"RENAULT"},"m43":{"id":"43","n":"ROVER"},"m44":{"id":"44","n":"SAAB"},"m45":{"id":"45","n":"SEAT"},"m46":{"id":"46","n":"SKODA"},"m47":{"id":"47","n":"SMART"},"m48":{"id":"48","n":"SSANGYONG"},"m49":{"id":"49","n":"SUBARU"},"m50":{"id":"50","n":"SUZUKI"},"m51":{"id":"51","n":"TESLA"},"m52":{"id":"52","n":"TOYOTA"},"m53":{"id":"53","n":"TRIUMPH"},"m54":{"id":"54","n":"VOLVO"},"m55":{"id":"55","n":"VW"}};

var currGSarr = []; // array of objects for grid layout

var objMPages = {"pi":0,"pn":"m","m1":{"id":"1","n":"ALFA ROMEO","pn":"Alfa_Romeo"},"m2":{"id":"2","n":"AUDI","pn":"Audi"},"m3":{"id":"3","n":"BENTLEY","pn":"Bentley_Motors_Limited"},"m4":{"id":"4","n":"BMW","pn":"BMW"},"m5":{"id":"5","n":"CADILLAC","pn":"Cadillac","defl":"es"},"m6":{"id":"6","n":"CHEVROLET","pn":"Chevrolet"},"m7":{"id":"7","n":"CHRYSLER","pn":"Chrysler","pnpt_pt":"Chrysler_(marca)"},"m8":{"id":"8","n":"CITROEN","pn":"Citro�n"},"m9":{"id":"9","n":"DACIA","pn":"Automobile_Dacia"},"m10":{"id":"10","n":"DAEWOO","pn":"GM_Korea"},"m11":{"id":"11","n":"DAIHATSU"},"m12":{"id":"12","n":"DODGE"},"m13":{"id":"13","n":"DS","pn":"noQvalue"},"m14":{"id":"14","n":"FIAT","pn":"FIAT"},"m15":{"id":"15","n":"FORD","pn":"Ford_Motor_Company"},"m16":{"id":"16","n":"HONDA"},"m17":{"id":"17","n":"HYUNDAI","pn":"Hyundai_Motor_Company"},"m18":{"id":"18","n":"INFINITI"},"m19":{"id":"19","n":"ISUZU"},"m20":{"id":"20","n":"IVECO","pn":"noQvalue"},"m21":{"id":"21","n":"JAGUAR","pn":"Jaguar_Cars"},"m22":{"id":"22","n":"JEEP"},"m23":{"id":"23","n":"KIA","pn":"Kia_Motors"},"m24":{"id":"24","n":"LADA"},"m25":{"id":"25","n":"LAMBORGHINI"},"m27":{"id":"27","n":"LANCIA"},"m28":{"id":"28","n":"LAND ROVER","pn":"Land_Rover","pnpt_pt":"Tata_Motors"},"m29":{"id":"29","n":"LEXUS"},"m30":{"id":"30","n":"MASERATI"},"m31":{"id":"31","n":"MAZDA"},"m32":{"id":"32","n":"MERCEDES BENZ","pn":"Mercedes-Benz"},"m33":{"id":"33","n":"MG","pn":"MG_Cars","defl":"es"},"m34":{"id":"34","n":"MICROCAR","pn":"noQvalue"},"m35":{"id":"35","n":"MINI","pn":"noQvalue","gpn":"MINI"},"m36":{"id":"36","n":"MITSUBISHI","pn":"Mitsubishi_Motors"},"m37":{"id":"37","n":"NISSAN"},"m38":{"id":"38","n":"OPEL"},"m39":{"id":"39","n":"PEUGEOT"},"m40":{"id":"40","n":"PONTIAC","pn":"Pontiac_automobile","pnpt_pt":"Pontiac_autom�veis","pnspa_spa":"Pontiac"},"m41":{"id":"41","n":"PORSCHE"},"m42":{"id":"42","n":"RENAULT"},"m43":{"id":"43","n":"ROVER","pn":"Rover_Company","defl":"es"},"m44":{"id":"44","n":"SAAB"},"m45":{"id":"45","n":"SEAT","pn":"SEAT"},"m46":{"id":"46","n":"SKODA","pn":"�koda Auto"},"m47":{"id":"47","n":"SMART","pn":"Smart_marque","defl":"en"},"m48":{"id":"48","n":"SSANGYONG","pn":"SsangYong", "defl":"es"},"m49":{"id":"49","n":"SUBARU"},"m50":{"id":"50","n":"SUZUKI"},"m51":{"id":"51","n":"TESLA","pn":"Tesla,_Inc.","gpn":"noQvalue"},"m52":{"id":"52","n":"TOYOTA","pn":"Toyota_Motor"},"m53":{"id":"53","n":"TRIUMPH","pn":"Triumph_Motor_Company"},"m54":{"id":"54","n":"VOLVO"},"m55":{"id":"55","n":"VW"}};

var currRegionsObj = {};
var currRegionsArr = [];
var currShopsArr = [];
var currPShopsArr = [];
var currEbyPrdsArr = [];
var currGImgEint = 0;
var currPlaceObj = {};
// select Distinct c_location, c_zp, c_loc_lat, c_loc_lng from qco where c_ccode = 351 and c_loc_lat != 'Error'  group by c_location order by c_location asc;
var isPhP = "y";
var isJApp = "no"; 
var isJavaFx = "no";
var currDocHref = document.location.href;
var currBtnSort; // the current button sort
var currMapMrkrArr = []; // array of map markers
var dw = function(theElem, tStr) { theElem.innerHTML = tStr; };
var currHlpKey; // the current help key
var prpid = 0;
var currCoCatsArr = [];
var currCoCatsStr = ":";
var currMediaID = 0;
var currCoDcidId = 0;
var currFBPlgObj = {};
var currPstsUsrArr = [];
var currPstsPrpsArr = [];
var currSlctdUsrObj = {};
var currSlctdPrpsObj = {};
var currSwpCnfgObj = {};
var currSwpCnfgArr = [];
var currGglSVloaded = "no";
var gglSKey = "AIzaSyAiBR8BEPj2YCepKplisQKK709r1TI48Vo";

var nuDW = function(theElem) { 
if(theElem.getAttribute("data-isscript") != null) {
try {
tDison = theElem.getAttribute("data-isscript");
eval(tDison);
} catch(e) {
alert(e);
}
} else if(theElem.getAttribute("data-ison") != null) {
try {
tDison = theElem.getAttribute("data-ison");
// utf8_decode
theElem.innerHTML = eval(tDison);
} catch(e) {
alert("nuDW.data-ison.ERROR: " + theElem + ":" + tDison + " : " + e);
}
}
};

var getFArr = function() {
return new Array("index_header", "index_nav", "index_main", "index_footer");
};

if(currDocHref.indexOf("http") != -1) {
isPhP = "y";
}

isPhP = "y";

var getCurrUrl = function() {
    var strTurl = "noQvalue";
    strCurl = document.location.href;
    
    if(strCurl.indexOf("?") != -1) {
    strTurl = strCurl.substring(strCurl.indexOf('?') + 1);
    }
    // alert("getCurrUrl: " + strTurl);
    if(isPhP == "no") {
      //   alert("isPhP = n0 getCurrUrl: " + strTurl);
    try  {
    strTurl = app.getCurrPageVars("nada");
    document.getElementById("fldChallArray").value = strTurl;
    strTurl = document.getElementById("fldChallArray").value;
    // alert("getCurrUrl strTurl no php: " + strTurl);
    } catch(e) {
    alert("Error.getCurrUrl: " + e);
    }
    }
    return strTurl;
    // if(strTurl == "noQvalue") {} else {}
    // newArr = JSSHOP.shared.urlToArray(strTurl);
    };
    
    
    if(!window.JSSHOP){
    var JSSHOP = new Object();
    }
    
    JSSHOP.loadScript = function(path, callback, filetype) {
        try { 
            // alert(loaded_scripts.length);
            n = path.lastIndexOf("/");
            q = path.lastIndexOf("?");
            if (filetype == "js") { //if filename is a external JavaScript file
                var scr = document.createElement('script');
                scr.setAttribute("type", "text/javascript")
                scr.src = path;
            } else if (filetype == "css") { //if filename is an external CSS file
                var scr = document.createElement("link")
                scr.setAttribute("rel", "stylesheet")
                scr.setAttribute("type", "text/css")
                scr.href = path;
            } else {
                var scr = document.createElement('script');
                scr.setAttribute("type", "module")
                scr.src = path;
          }
            var done = false;
            scr.onload = handleLoad;
            scr.onreadystatechange = handleReadyStateChange;
            scr.onerror = handleError;
            if (n >= 0) {
                if (q >= 0) {
                    tid = path.substring(n + 1, q);
                } else {
                    tid = path.substring(n + 1);
                }
                scr.id = tid;
            }
            document.getElementsByTagName("head")[0].appendChild(scr);
            // document.body.appendChild(scr);
            function handleLoad() {
                if (!done) {
                    done = true;
                    callback(path, "ok");
                }
            }
    
            function handleReadyStateChange() {
                var state;
                if (!done) {
                    state = scr.readyState;
                    if (state === "complete") {
                        handleLoad();
                    }
                }
            }
    
            function handleError() {
                if (!done) {
                    done = true;
                    callback(path, "error");
                }
            }
           } catch (e) {
            alert("loadScript: " + e);
            JSSHOP.logJSerror(e, arguments, "JSSHOP.shared.loadScript");
        }
    };
    
    JSSHOP.checkLoader = function(thePath, theMessage) {
        try {
            ttlLoaded = loaded_scripts.length;
            loaded_scripts[ttlLoaded] = thePath;
            //  alert(loaded_scripts[ttlLoaded] + " :: " + loaded_scripts.length + "msg: " + theMessage);
        } catch (e) {
            JSSHOP.logJSerror(e, arguments, "JSSHOP.shared.checkLoader");
        }
    };
    
     
    /* ajax
    */
    
    if (!window.JSSHOP.ajax) {
        JSSHOP.ajax = new Object();
    }
    
    
        JSSHOP.ajax.doNuAjaxPipe = function(theElem,apUrl,tmpCB) {
            try {
                
                var oReq = new XMLHttpRequest();
               // var oReq = JSSHOP.ajax.createXMLHTTPObject();
             //  oReq.setRequestHeader("connection", "close");
             tUTA = JSSHOP.shared.urlToArray(apUrl);
               if(oReq == false) {
                       tmpCB(theElem,"Error",tUTA);
    
              } else {
                oReq.onreadystatechange = function() {
                    if (oReq.readyState == 4) {
    
                    //  return oReq.responseText;
                  if(theElem == "give") {  } 
                       tmpCB(theElem,oReq.responseText,tUTA);
                    }  
                }
                oReq.onerror = function() {
                                       tmpCB(theElem,oReq.responseText,tUTA);
                                       console.log("oReq.error: " + oReq.responseText);
                      // alert("yikes, we have a connection problem..." + oReq.responseText);
         
                }
                rpUrl = apUrl;
                console.log("doNuAjaxPipe.apUrl: " + apUrl);
                rpUrl = apUrl.replace("index.php", "");
                if(apUrl.indexOf("admin/tplates") != -1) {
                    isGdAdmn = "y";
                    
                    console.log("doNuAjaxPipe:isGdAdmn " + isGdAdmn);
                } else {
                 rpUrl = rpUrl.replace("admin/", "");
                 console.log("doNuAjaxPipe.admin-replace: " + rpUrl);
                }
                aapUrl = rpUrl;
                oReq.open("GET", shopDir + aapUrl, true);
                picr = oReq.send(null);
               }
                } catch (e) { 
                alert("doNuAjaxPipe: " + e);
                       tmpCB(theElem,"Error: " + e,tUTA);
                  }
        };
        
        
    /* cookies
    */
    
    if (!window.JSSHOP.cookies) {
        JSSHOP.cookies = new Object();
    }
    
    JSSHOP.cookies.getCookie = function(check_name) {
    var cretval;
    var tval;
    // if(isPhP == "no") {
    if((isJApp == "yes") || (isJavaFx == "yes")) {
    
    try {
    if(check_name == "quid") {
    tval = app.fetchConfValInt(check_name);
    } else {
    tval = app.fetchConfValString(check_name);
    }
    
    fldChallArray.value = tval;
    cretval = fldChallArray.value;
    // alert("getCookie.isJavaFx: " + cretval + tval);
        // alert("getCookie.isJavaFx: " + check_name + cretval);
    // default null string for android preferences
    
    if(cretval == "noQvalue")  { 
    return null;
    } else {
    return cretval;
    }
    } catch(e) {
    alert("getCookie: " + e);
    return null;
    }
    
    } else {
    
    
        // first we'll split this cookie up into name/value pairs
        // note: document.cookie only returns name=value, not the other components
        var a_all_cookies = document.cookie.split( ';' );
        var a_temp_cookie = '';
        var cookie_name = '';
        var cookie_value = '';
        var b_cookie_found = false; // set boolean t/f default f
        for ( i = 0; i < a_all_cookies.length; i++ )
        {
            // now we'll split apart each name=value pair
            a_temp_cookie = a_all_cookies[i].split( '=' );
            // and trim left/right whitespace while we're at it
            cookie_name = a_temp_cookie[0].replace(/^\s+|\s+$/g, '');
        
            // if the extracted name matches passed check_name
            if ( cookie_name == check_name )
            {
                b_cookie_found = true;
                // we need to handle case where cookie has no value but exists (no = sign, that is):
                if ( a_temp_cookie.length > 1 )
                {
                    cookie_value = unescape( a_temp_cookie[1].replace(/^\s+|\s+$/g, '') );
                }
                // note that in cases where cookie is initialized but no value, null is returned
                return cookie_value;
                break;
            }
            a_temp_cookie = null;
            cookie_name = '';
        }
        if ( !b_cookie_found )
        {
            return null;
        }
    
    }
    };
    
    
    JSSHOP.cookies.setCookie = function(name,value,expires,path,domain,secure) 
    {
    
    // if(isPhP == "no") {
    
    if((isJApp == "yes") || (isJavaFx == "yes")) {
    try {
    
    if(name == "quid") {
    app.setConfValInt(name,value);
    } else {
    app.setConfValString(name,value); 
    }
    } catch(e) {
    alert("setCookie.E: " + e)
    }
    
    } else {
    // set time, it's in milliseconds
    var today = new Date();
    today.setTime( today.getTime() );
    /*
    if the expires variable is set, make the correct 
    expires time, the current script below will set 
    it for x number of days, to make it for hours, 
    delete * 24, for minutes, delete * 60 * 24
    */
    if ( expires )
    {
    expires = expires * 1000 * 60 * 60 * 24;
    }
    var expires_date = new Date( today.getTime() + (expires) );
    document.cookie = name + "=" +escape( value ) +
    ( ( expires ) ? ";expires=" + expires_date.toGMTString() : "" ) + 
    ( ( path ) ? ";path=" + path : "" ) + 
    ( ( domain ) ? ";domain=" + domain : "" ) +
    ( ( secure ) ? ";secure" : "" );
    
    }
    };
    
    JSSHOP.cookies.deleteCookie = function(name,path,domain) {
    // if(isPhP == "no") {
        if((isJApp == "yes") || (isJavaFx == "yes")) {
    try {
    
    if(name == "quid") {
    app.setConfValInt(name,0);
    } else {
    app.setConfValString(name,"noQvalue"); 
    }
    } catch(e) {
    alert("setCookie.E: " + e)
    }
    
    } else {
    if(JSSHOP.cookies.getCookie(name)) document.cookie = name + "=" + ( ( path ) ? ";path=" + path : "") + ( ( domain ) ? ";domain=" + domain : "" ) + ";expires=Thu, 01-Jan-1970 00:00:01 GMT";
    }
    };
    
    
     
    if (!window.JSSHOP.shared) {
        JSSHOP.shared = new Object();
    }
    
    JSSHOP.shared.endsWith = function(str,suffix) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    };
    
    
    
    JSSHOP.shared.urlToArray = function(urla) {
    // alert(url);
        try {
            urlb = urla.replace("%","");
            urlc = urlb.replace("%","");
            url = urlc;
            var request = {};
            var arr = [];
            var pairs = url.substring(url.indexOf('?') + 1).split('&');
            for (var i = 0; i < pairs.length; i++) {
              var pair = pairs[i].split('=');
    
              //check we have an array here - add array numeric indexes so the key elem[] is not identical.
              if(JSSHOP.shared.endsWith(decodeURIComponent(pair[0]), '[]') ) {
                  var arrName = decodeURIComponent(pair[0]).substring(0, decodeURIComponent(pair[0]).length - 2);
                  if(!(arrName in arr)) {
                      arr.push(arrName);
                      arr[arrName] = [];
                  }
    
                  arr[arrName].push(decodeURIComponent(pair[1]));
                  request[arrName] = arr[arrName];
              } else {
                request[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
              }
            }
            return request;
        } catch (e) {
        alert("JSSHOP.shared.urlToArray: " + e);
           //  JSSHOP.logJSerror(e, arguments, "JSSHOP.shared.urlToArray");
            return "noQvalue";
        }
    
        };
    
    
    
    
    
    
    JSSHOP.shared.strToObj = function(url) {
    // alert(url);
        try {
            var request = {};
            var arr = [];
            var pairs = url.split('&');
            for (var i = 0; i < pairs.length; i++) {
              var pair = pairs[i].split('=');
    
              //check we have an array here - add array numeric indexes so the key elem[] is not identical.
              if(JSSHOP.shared.endsWith(decodeURIComponent(pair[0]), '[]') ) {
                  var arrName = decodeURIComponent(pair[0]).substring(0, decodeURIComponent(pair[0]).length - 2);
                  if(!(arrName in arr)) {
                      arr.push(arrName);
                      arr[arrName] = [];
                  }
    
                  arr[arrName].push(decodeURIComponent(pair[1]));
                  request[arrName] = arr[arrName];
              } else {
                request[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
              }
            }
            return request;
        } catch (e) {
        // alert(e);
            JSSHOP.logJSerror(e, arguments, "JSSHOP.shared.urlToArray");
            return "noQvalue";
        }
    
        };
     
    
     
    
    
    
    currUrlArr = JSSHOP.shared.urlToArray(getCurrUrl()); 
    if(currUrlArr.debug) {
    JSSHOP.loadScript("js/fl/chrome-extension-beta/firebug-lite-beta.js", JSSHOP.checkLoader,"js");
    }
    
    try {
    tmpNvstr = navigator.userAgent;
    if(tmpNvstr.indexOf("JavaFX") != -1) {
    isJavaFx = "yes";
    JSSHOP.loadScript("css/x_japp.css", JSSHOP.checkLoader,"css");
    
    }
    } catch(e) {
    alert("x_japp.css faied: "+ e);
    }
    
    
    function urlToArray(urla) {
    // alert(url);
        try {
            urlb = urla.replace("%","");
            urlc = urlb.replace("%","");
            url = urlc;
            var request = {};
            var arr = [];
            var pairs = url.substring(url.indexOf('?') + 1).split('&');
            for (var i = 0; i < pairs.length; i++) {
              var pair = pairs[i].split('=');
    
              //check we have an array here - add array numeric indexes so the key elem[] is not identical.
              if(JSSHOP.shared.endsWith(decodeURIComponent(pair[0]), '[]') ) {
                  var arrName = decodeURIComponent(pair[0]).substring(0, decodeURIComponent(pair[0]).length - 2);
                  if(!(arrName in arr)) {
                      arr.push(arrName);
                      arr[arrName] = [];
                  }
    
                  arr[arrName].push(decodeURIComponent(pair[1]));
                  request[arrName] = arr[arrName];
              } else {
                request[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
              }
            }
            return request;
        } catch (e) {
        // alert(e);
            JSSHOP.logJSerror(e, arguments, "JSSHOP.shared.urlToArray");
            return "noQvalue";
        }
    
        }
        

var pfBoot = function(theElem, theResp, marble) {
    console.log("seq.pfBoot");
    document.getElementById(theElem).innerHTML = theResp;
    // setTimeout("doBootLoad()", 800);
};

// if cookie currSortObj exists, then LZString.decompress it and set currSortObj to it
