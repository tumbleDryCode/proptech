



if (!window.JSSHOP.ads) {
    JSSHOP.ads = new Object();
}


if (!window.JSSHOP.shop) {
    JSSHOP.shop = new Object();
}

        var tSlctdPrpsArr = [];
        var intervals = [];



        function clear(i){
            return function(){
                clearInterval(intervals[i]);
            }
        }
        function restart(i, fn, ts){ //Start AND restart
            return function(){
                clear(i)();
                // increase(i)();
                intervals[i] = setInterval(fn, ts);
            }
        }

function ntoast(tstrt) {
JSSHOP.ui.popAndFillLbox(tstrt);
}





function scrollToElement(id) {

    var elem = document.getElementById(id);
    var x = 0;
    var y = 0;

    while (elem != null) {
        x += elem.offsetLeft;
        y += elem.offsetTop;
        elem = elem.offsetParent;
    }
	if(isJApp == "no") {
	window.scrollTo(0,y);
	} else {
      // app.getWVScrollPoint(0,y);
      window.scrollTo(0,y);
	}
}



function getViewportHeight() {
	if (window.innerHeight!=window.undefined) return window.innerHeight;
	if (document.compatMode=='CSS1Compat') return document.documentElement.clientHeight;
	if (document.body) return document.body.clientHeight;
	return window.undefined;
}

function getViewportWidth() {
	var offset = 17;
	if (window.innerWidth!=window.undefined) return window.innerWidth;
	if (document.compatMode=='CSS1Compat') return document.documentElement.clientWidth;
	if (document.body) return document.body.clientWidth;
	return offset;
}


function getScrollTop() {
    // if(isJApp == "yes") {
        // app.doscrllVwToTop();
        // theScrollY = app.doWVScrollY();
        // console.log("getScrollTop: " + theScrollY);
        // theScreenH = window.innerHeight;
        //return Math.round(theScreenH - theScrollY);
       //  return Math.round(theScrollY  - (theScreenH / 2) );
        // return Math.round((theScrollY / 2) - theScreenH);
       //  } else {
	if (self.pageYOffset) // all except Explorer
	{
		return self.pageYOffset;
	}
	else if (document.documentElement && document.documentElement.scrollTop)
		// Explorer 6 Strict
	{
		return document.documentElement.scrollTop;
	}
	else if (document.body) // all other Explorers
	{
		return document.body.scrollTop;
	}
     //    }
}

var loadPlaceLink = function(a, b, c) {
    if (b.indexOf("data") != -1) {
       //  JSSHOP.cookies.setCookie("cuid",cid,"90","","","");
        document.location.href = "index.html?pid=aa-edit-place&tpid=" + cid;
    } else {
        alert("loadPlaceLink = false: " + b);
    }
};

function goHome() {
tLocHref = document.location.href;

if(tLocHref.indexOf("?") != -1) {
    tCurllArrStr = JSON.stringify(currUrlArr);
    if(currUrlArr.ditemid) {
// check if "-" is in the ditemid value
if(currUrlArr.ditemid.indexOf("-") != -1) {
ditemidParts = currUrlArr.ditemid.split("-");
itDitemiD = ditemidParts[0];
usrlang = ditemidParts[1];
JSSHOP.cookies.setCookie("usrlang", usrlang, "30", "", "", "");
}
}
// set a cuarrr cookie with LZString.compressToEncodedURIComponent(tCurllArrStr);
JSSHOP.cookies.setCookie("cuarr",LZString.compressToEncodedURIComponent(tCurllArrStr),"1","","","");
 document.location.href = currWebHome;
} else {
   eindex('index_main', 'pid=index_main');
}
}

JSSHOP.shared.getEmojiCntryFlag = function(tCountryCode) {
    // use page https://unicode.org/emoji/charts/emoji-list.html to get the country code emojis
    try {
        var tFlagEmoji = "";

// EXAMPLE PORTUGAL
            var firstChar = tCountryCode.charCodeAt(0) - 65 + 0x1F1E6;
            var secondChar = tCountryCode.charCodeAt(1) - 65 + 0x1F1E6;
            tFlagEmoji = String.fromCodePoint(firstChar) + String.fromCodePoint(secondChar);
            console.log("tFlagEmoji: " + tFlagEmoji);


        return tFlagEmoji;
    } catch (e) {
        JSSHOP.logJSerror(e, arguments, "JSSHOP.shared.getEmojiCntryFlag");
        return "";
    }
};
JSSHOP.shared.getCountryCodeFromName = function(tCountryName) {
    try {
        var tCountryCode = "";
        var tcountryArr = [
            { name: "United States", code: "US" },
            { name: "Canada", code: "CA" },
            { name: "United Kingdom", code: "GB" },
            { name: "Australia", code: "AU" },
            { name: "Germany", code: "DE" },
            { name: "France", code: "FR" },
            { name: "Italy", code: "IT" },
            { name: "Spain", code: "ES" },
            { name: "Netherlands", code: "NL" },
            { name: "Sweden", code: "SE" },
            { name: "Brazil", code: "BR" },
            { name: "India", code: "IN" },
            { name: "Mexico", code: "MX" },
            { name: "Japan", code: "JP" },
            { name: "China", code: "CN" },
            { name: "South Africa", code: "ZA" },
            // eurpean countries
            { name: "Austria", code: "AT" },
            { name: "Belgium", code: "BE" },
            { name: "Denmark", code: "DK" },
            { name: "Finland", code: "FI" },
            { name: "Greece", code: "GR" },
            { name: "Ireland", code: "IE" },
            { name: "Norway", code: "NO" },
            { name: "Portugal", code: "PT" },
            { name: "Switzerland", code: "CH" },
            // south american countries
            { name: "Argentina", code: "AR" },
            { name: "Chile", code: "CL" },
            { name: "Colombia", code: "CO" },
            { name: "Peru", code: "PE" },
            { name: "Venezuela", code: "VE" }
        ];
        for (var i = 0; i < tcountryArr.length; i++) {
            if (tcountryArr[i].name === tCountryName) {
                tCountryCode = tcountryArr[i].code;
                break;
            }
        }
        return tCountryCode;
    } catch (e) {
        // JSSHOP.logJSerror(e, arguments, "JSSHOP.shared.getCountryCodeFromName");
        alert("Error in JSSHOP.shared.getCountryCodeFromName: " + e);
    }
};

JSSHOP.shared.showUserProfile = function(tSUPID) {
    try {
        tFNlSPID = 0;

        if (tSUPID == 0) {
            tSUPID = quid;
        } else {
            if(currUrlArr.tuid) {
                tSUPID = currUrlArr.tuid;
            } else {
                tSUPID = tSUPID;
            }
        }
// if no quid cookie and if tSUPID is 0 getTestUsers()
        if((quid == 0) || (quid == "noQvalue")) {
            getTestUsers("includedContent");
        }   else {
            eindex('aa-show-user', 'pid=aa-show-user&tuid=' + tSUPID);
        }
  } catch (e) {
         JSSHOP.logJSerror(e, arguments, "JSSHOP.shared.showUserProfile");
    }

        };


JSSHOP.shared.setOGtags = function() {
    try {
        var tOGurl = "https://recamby.com";
        var tOGtitle = "Recamby.com";
        var tOGdesc = "Recamby.com";
        var tOGimg = "https://recamby.com/imgs/ogimg.jpg";
        var tOGtype = "website";
        var tOGsite_name = "Recamby.com";
        /*
        var tOGapp_id = "123456789";
        var tOGadmins = "123456789";
        var tOGlocale = "en_US";
        var tOGvideo = "https://recamby.com";
        var tOGaudio = "https://recamby.com";
        var tOGdeterminer = "the";
        var tOGupdated_time = "2017-01-01T00:00:00+00:00";
        var tOGpublished_time = "2017-01-01T00:00:00+00:00";
        var tOGauthor = "Recamby.com";
        var tOGsection = "Recamby.com";
        var tOGtags = "Recamby.com";
        */
        switch(pid) {
            case "aa-show-place":

            tCdescStr = c_desc.value;
            if((tCdescStr == "ns") || (tCdescStr == "5")){
                tCdescStr = c_name.value + "  " + stxt[559] + " " + c_location.value + ". " ;
            }
            tClogoimg = c_logoimg.value;
             if(tClogoimg.indexOf("noQvalue") > -1) {
                tClogoimg = "https://recamby.com/images/logo_og.png";
            } else if(tClogoimg.indexOf("http") > -1) {
                tClogoimg = c_logoimg.value;
            } else {
                tClogoimg = "https://recamby.com/images/slogos/" + c_logoimg.value;
            }


                tOGtitle = c_name.value;
                tOGdesc = tCdescStr;
                tOGimg = tClogoimg;
                break;
            case "aa-show-item":
                tShareMsgUrl = "https://recamby.com/index.html?pid=" + tmpMsgVal;
                tShareMsgImg = i_img.value;
                tShareMsgTtl = i_title.value;
                tShareMsgDsc = i_desc.value;
                tOGtitle = tShareMsgTtl;
                tOGdesc = tShareMsgDsc;
                tOGimg = tShareMsgImg;
                break;
                default:
                tOGtitle = "Recamby.com";
                tOGdesc = "Recamby.com";
                tOGimg = "https://recamby.com/imgs/ogimg.jpg";
                break;
        }

        /*
        document.getElementById("ogsite_name").content = tOGsite_name;
        document.getElementById("ogapp_id").content = tOGapp_id;
        document.getElementById("ogadmins").content = tOGadmins;
        document.getElementById("oglocale").content = tOGlocale;
        document.getElementById("ogvideo").content = tOGvideo;
        document.getElementById("ogaudio").content = tOGaudio;
        document.getElementById("ogdeterminer").content = tOGdeterminer;
        document.getElementById("ogupdated_time").content = tOGupdated_time;
        document.getElementById("ogpublished_time").content = tOGpublished_time;
        document.getElementById("ogauthor").content = tOGauthor;
        document.getElementById("ogsection").content = tOGsection;
        document.getElementById("ogtags").content = tOGtags;
        */
    } catch (e) {
        JSSHOP.logJSerror(e, arguments, "JSSHOP.shared.setOGtags: " + e);
    }

};
JSSHOP.shared.getCatTitle = function(theTPartID) {
    try {
        tCatTitle = " ";
        tCatTitle = "";
        if (theTPartID == "0") {
            tCatTitle = stxt[1];
        } else {
            tCatTitle = stxt[1] + " > " + stxt[theTPartID];
        }
        return tCatTitle;
    } catch (e) {
        JSSHOP.logJSerror(e, arguments, "JSSHOP.shared.getCatTitle");
        return "NotGood";
    }
};

JSSHOP.shared.getPlaceELink = function() {
    try {
        tPTXT = " ";
        tPTXT = "";
        // close the lbox

        tPTXT += "<div class=\"collection-item txtSmall txtClrHdr\" style=\"text-align:left\">" + c_name.value + "</div>";
    tUrlEncdn = encodeURIComponent(currPlaceObj.c_name);
    tPTXT += "<div class=\"collection-item txtClrHdr\" style=\"text-align:left\">" + stxt[555] + " <a class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrHdr txtBold\" href=\"index.html?pid=aa-contactus&cid=" + currPlaceObj._id + "&tpnm=" + tUrlEncdn  + "\">" + stxt[86] + " ListID: " + currPlaceObj._id + "</a></div><hr>";

    // tRtGMSIstr += "<div class=\"collection-item txtSmall txtClrHdr\" style=\"text-align:left\">" + stxt[556] + "</div>";
    // tRtGMSIstr += " <div tid=\"dv_c_page\"  class=\"txtSmall txtBold txtClrHdr\" style=\"float:right\"><a class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrHdr txtBold\" href=\"index.html?pid=aa-contactus&cid=" + cid + "&tpnm=" + tUrlEncdn  + "\">" + stxt[86] + " ListID: " + cid + "</a></div>";

        if((quid == 0) || (quid == "noQvalue")){
            tPTXT += "<div class=\"collection-item txtClrHdr\" style=\"text-align:left\">" + stxt[724] + "</div>";

            tPTXT += "<div style=\"text-align: left;\" class=\"txtSmall txtBold txtClrHdr\">" + stxt[725] + "</div>";
            tPTXT += "<div style=\"text-align: left;\" class=\"txtSmall txtBold txtClrHdr\"><a href=\"index.html?pid=login\">Login</a></div>";
            JSSHOP.ui.popAndFillLbox(tPTXT);

            } else {
                if(currPlaceObj.c_uid == quid) {
                    document.location.href = "index.html?pid=aa-edit-place&tpid=" + cid;
                    return;
                }  else {
                if(currPlaceObj.c_uid  == "5") {
                    if(u_socauthtype.value == "5") {
                        tPTXT += "<div style=\"text-align: left;\" class=\"txtSmall txtBold txtClrHdr\">" + stxt[724] + ".</div>";
                        tPTXT += "<div style=\"text-align: left;\" class=\"txtSmall txtBold txtClrHdr\">" + stxt[713] + ". " + stxt[717] + ": " + u_email.value + " " + stxt[718] + ".</div>";
                        tPTXT += "<div style=\"text-align: left;\" class=\"txtSmall txtBold txtClrHdr\"><a href=\"javascript:JSSHOP.shared.doMMailer('emailconf');\">" + stxt[720] + "</a></div>";
                        tPTXT += "<div style=\"text-align: left;\" class=\"txtSmall txtBold txtClrHdr\">" + stxt[719] + ".</div>";

                    } else {
                        tPTXT += "<div style=\"text-align: left;\" class=\"txtSmall txtBold txtClrHdr\">" + stxt[724] + "</div>";
                        tPTXT += "<div style=\"text-align: left;\" class=\"txtSmall txtBold txtClrHdr\"><a href=\"javascript:procNuUIitem('qco', 'c_uid'," + currPlaceObj._id + "," + quid + ",'loadPlaceLink');\">" + stxt[722] + "</a></div>";
                        tPTXT += "<div style=\"text-align: left;\" class=\"txtSmall txtBold txtClrRed\">" + stxt[721] + "</div>";

                    }
                    } else {

                    tPTXT += "<div style=\"text-align: left;\" class=\"txtSmall txtBold txtClrHdr\">" + stxt[723] + "</div>";

                    }
                    if(isJApp == "ayes") {

tOldHref = document.location.href;
        if(tOldHref.indexOf("recamby.com") != -1) {
            tnewHref = "https://www.recamby.com/clean.html";

        } else {
            tnewHref = "https://titan/recamby/clean.html";
        }
        tcloseBstr  = "<div onclick=\"JSSHOP.ui.closeLbox();\" class=\"slmtable txtClrRed txtBold brdrClrRed crsrPointer\" style=\"float:right\"><i class=\"menu-material-icons txtBold txtClrRed\" alt=\"close\" title=\"close\" value=\"close\">&#xe5cd;</i></div>";
        tAPTXT = tcloseBstr + tPTXT;
        tInnerHSTR = LZString.compressToEncodedURIComponent(tAPTXT);
        app.setPagePopUp(tnewHref,tInnerHSTR);
       } else {
                    JSSHOP.ui.popAndFillLbox(tPTXT);
                    }
                }
            }

    } catch (e) {
        JSSHOP.logJSerror(e, arguments, "JSSHOP.shared.getPlaceLink");
        alert(e);
    }
};


JSSHOP.shared.isMobile = function() {
    try {
        if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
            return true;
        } else {
            return false;
        }
    } catch (e) {
        JSSHOP.logJSerror(e, arguments, "JSSHOP.shared.isMobile");
        return false;
    }
};


JSSHOP.shared.doNuDwEL = function() {
xae = document.getElementsByTagName("ti");
var iint = 0;
while(iint < xae.length) {
nuDW(xae[iint]);
iint++;
}
};

JSSHOP.shared.doLogout = function() {
JSSHOP.cookies.deleteCookie('quid','','');
JSSHOP.cookies.deleteCookie('cuid','','');
document.location.href='index.html?lgo=y';
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
            request[pair[0]] = pair[1];

            // request[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
          }
        }
        return request;
    } catch (e) {
	alert("JSSHOP.shared.strToObj: " + e);
       //  JSSHOP.logJSerror(e, arguments, "JSSHOP.shared.urlToArray");
        return "noQvalue";
    }

    };






JSSHOP.shared.getAppReq = function(thefield) {
    try {
	app.doDB(document.getElementById(thefield).value)
    } catch (e) {
        JSSHOP.logJSerror(e, arguments, "JSSHOP.shared.getAppReq");
    }
};

JSSHOP.shared.encode_utf8 = function(tEstt) {
try {
  return unescape(encodeURIComponent(tEstt));
    } catch (e) {
  JSSHOP.logJSerror(e, arguments, "JSSHOP.shared.encode_utf8");
  return tEstt;
    }
};

JSSHOP.shared.decode_utf8 = function(tdstt) {
try {
  return decodeURIComponent(tdstt);
    } catch (e) {
        // JSSHOP.logJSerror(e, arguments, "JSSHOP.shared.decode_utf8");
  return removeDiacritics(tdstt);
    }
};


/*
* !!!!to delete duplicated

JSSHOP.shared.getAppReq = function(thefield) {
    try {
	app.doDB(document.getElementById(thefield).value)
    } catch (e) {
        JSSHOP.logJSerror(e, arguments, "JSSHOP.shared.getAppReq");
    }
};

*/
JSSHOP.shared.convertTo24Hour = function(thettHr) {
 // this function will convert 12 hour time to 24 hour time
 // it will take a string as its only argument
 // example input is '12:30am' or '12:30pm' or '9 am' or '9 pm' or '9:00 pm'
    // example output is 24 hour time '09:00' or '21:00'
    try {
    console.log("convertTo24Hour: " + thettHr);
    var atime = thettHr.toLowerCase();
    console.log("convertTo24Hour: " + atime);
    // replace all "; am" with " am" and all "; pm" with " pm"
    ahbtime = atime.replace(/; am/g, " am");
    aibtime = ahbtime.replace(/; pm/g, " pm");
    if(aibtime.indexOf(";") != -1) {
        adtime = ahbtime.split(";");
        aHrtime = adtime[0];
    } else {
        aHrtime = aibtime;
    }

    ahourtime = aHrtime.replace(/[^0-9]/g, "");
    if(aibtime.indexOf("am") != -1) {
    if(ahourtime == "12") {
    ahourtime = "00";
    }
    } else {
    if(ahourtime != "12") {
    ahourtime = Math.round(ahourtime) + 12;
    }
    }
    // if hourtime is less than 4 characters add a 0 to the beginning
    if(ahourtime.length < 1) {
    ahourtime = "0" + ahourtime + ":00";
    } else {
    ahourtime = ahourtime + ":00";
    }
    // add a colon between the hours and minutes
    return ahourtime;
} catch (e) {
    JSSHOP.logJSerror(e, arguments, "JSSHOP.shared.convertTo24Hour");
    return "NotGood";
}
};



JSSHOP.shared.getQryVar = function(theUrlString, theVar) {
    try {
  strQVal = null;
  var query = theUrlString;
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if(pair[0] == theVar) {
      strQVal =  pair[1];
    }
  }
  return strQVal;
    } catch (e) {
        JSSHOP.logJSerror(e, arguments, "JSSHOP.shared.getQryVar");
        return "NotGood";
    }
};



JSSHOP.shared.getElemDUrl = function(theElem) {
try {
if(theElem.getAttribute("data-ison") != null) {
tDb = "";
tDison = theElem.getAttribute("data-ison");
tDa = tDison.replace(/:/gi,"&");
tDb = tDa.replace(/;/gi,"=");
tDb += "&v=" + theElem.value + "&n=" + theElem.name;
return tDb;
} else {
return null;
}
} catch(e) {
JSSHOP.logJSerror(e, arguments, "JSSHOP.ui.getElemDUrl");
}
};

JSSHOP.shared.doMMeconf = function(temmA, temmB, temmC) {
try {
    JSSHOP.ui.popAndFillLbox(temmB);
    // alert("doMMeconf: " + temmA + " : " + temmB + " : " + temmC);
} catch(e) {
JSSHOP.logJSerror(e, arguments, "JSSHOP.shared.doMMeconf");
}
};

JSSHOP.shared.doMMailer = function(tMMtype) {
    tEmfrom = "web@recamby.com";
    tEmto = "";
    tEmsubj = "";
    tEmbody = "";
    tFootr = stxt[716];
    tMMurl = "_p/rss/mtest.php?";
try {
    switch(tMMtype) {
    case "remove":
    tAConfurl = "https://recamby.com/?pid=cnf&ct=r&cf=" + document.getElementById("u_email").value + "&dd=" + JSSHOP.shared.getFrmFieldVal("quser", "_id", 0);
    // url encode tConfurl
    tConfurl= encodeURIComponent(tAConfurl);
    // tConfurl = JSSHOP.shared.encode_utf8(tAConfurl);
    tEmto = document.getElementById("u_email").value;
    tEmsubj = "Recamby.com - " + stxt[815];
    tAEmbody = stxt[824] + "<br>" + tConfurl + "<br><br>" + stxt[716] + "<br>" + "https://recamby.com";
    // url encode tembody
    tEmbody = JSSHOP.shared.encode_utf8(tAEmbody);
    tMMurl += "mt=" + tMMtype + "&sndt=" + tEmto + "&snds=" + tEmsubj + "&sndw=" + tEmbody;
    JSSHOP.ajax.doNuAjaxPipe("dvMMailer", tMMurl, JSSHOP.shared.doMMeconf);
    break;
    case "emailconf":
        tcidstr = "";
        if(currPlaceObj._id) {
        tcidstr = "&cid=" + currPlaceObj._id;
        } else {
        tcidstr = "&cid=" + JSSHOP.shared.getFrmFieldVal("qco", "_id", 0);
        }
    tAConfurl = "https://recamby.com/?pid=cnf&ct=e&cf=" + document.getElementById("u_dadded").value + "&dd=" + quid + tcidstr;
    // url encode tConfurl
    tConfurl= encodeURIComponent(tAConfurl);
    // tConfurl = JSSHOP.shared.encode_utf8(tAConfurl);
    tEmto = document.getElementById("u_email").value;
    tEmsubj = "Recamby.com - " + stxt[713];
    tAEmbody = stxt[715] + "<br><a href=\"" + tConfurl + "\">" + tConfurl + "</a><br><br>" + stxt[716] + "<br>" + "https://recamby.com";
    // url encode tembody
    tEmbody = JSSHOP.shared.encode_utf8(tAEmbody);
    tMMurl += "mt=" + tMMtype + "&sndt=" + tEmto + "&snds=" + tEmsubj + "&sndw=" + tEmbody;
    JSSHOP.ajax.doNuAjaxPipe("dvMMailer", tMMurl, JSSHOP.shared.doMMeconf);
    break;
    case "preview":
    document.getElementById("dvMMailer").innerHTML = "<div class=\"txtBold txtClrHdr\">Preview...</div>";
    break;
    default:
        break;
     }



} catch(e) {
JSSHOP.logJSerror(e, arguments, "JSSHOP.shared.doMMailer");
}
};


JSSHOP.shared.nodesToString = function(node) {
    if (typeof node === "string") {
        node = document.getElementById(node);
    }

    var arrayOfText = [];
            var tmpUstring = "";
function walkTheDOM(node, func) {
    func(node);
    node = node.firstChild;
    while (node) {
        walkTheDOM(node, func);
        node = node.nextSibling;
    }
}

    function pushVal(currentNode) {
            tmpNID = "";
		tmpNVal = "";

  		if(currentNode.nodeType === 1) {
 		if((currentNode.id) || (currentNode.name)) {
       		if(currentNode.id){
                  tmpNID = currentNode.id;
			} else {
			tmpNID = currentNode.name;
			}
            tNodeName = currentNode.nodeName.toUpperCase();
            switch(tNodeName) {
            case "INPUT":
		tmpNVal = currentNode.value;
		break;
            case "TEXTAREA":
		tmpNVal = currentNode.value;
		break;
            case "SELECT":
		tmpNVal = currentNode.value;
		break;
		default:
		if(currentNode.firstChild.nodeValue) {
		tmpNVal = currentNode.firstChild.nodeValue;
		}
		}
		 tmpUstring += "&" + tmpNID.trim() + "=" + tmpNVal.trim();
    }
//		tmpUstring += "&" + escape(JSSHOP.shared.trim(tmpNID)) + "=" + escape(JSSHOP.shared.trim(tmpNVal));		}
		}

    }
    walkTheDOM(node, pushVal);
    return tmpUstring;
};


        JSSHOP.shared.getOptIndex = function(selection, indexVal) {
                    theOptIndex = 0;

                        for(var i = 0; i < selection.length; i++) {
                             currIndexVal = selection.options[i].value;
                            if(currIndexVal == indexVal) {
                                theOptIndex = i;
                                break;
                            }

                    }
                    return theOptIndex;
        };

        JSSHOP.shared.setCurrSelectOpt = function(theObj, indexVal) {
                    theIndexVal = "noQvalue";
                    var selection = theObj;
                    if(selection) {
                        for(var i = 0; i < selection.length; i++) {
                            var currIndexVal = selection.options[i].value;
                            if(currIndexVal == indexVal) {
                                theIndexVal = currIndexVal;
                                selection.selectedIndex = i;
                                break;
                            }
                        }
                    }
                    return theIndexVal;
                };


        JSSHOP.shared.getCurrSelectTxt = function(theObj) {
                    var theSelIndex = theObj.selectedIndex;
                    var theString = theObj.options[theSelIndex].text;
                    var theVal = theObj.options[theSelIndex].value;
                    // alert(theString +  " : " + theVal);
                    return theString;
                };


        JSSHOP.shared.getCurrSelectOpt = function(theObj) {
            tREtSOval = "noQvalue";
            try {
                var theSelIndex = theObj.selectedIndex;
                var theString = theObj.options[theSelIndex].text;
                var tREtSOval = theObj.options[theSelIndex].value;
            } catch(e) {
            JSSHOP.logJSerror(e, arguments, "JSSHOP.shared.getCurrSelectOpt");
            return tREtSOval;
            }

                    // alert(theString +  " : " + theVal);
                    return tREtSOval;
                };


                JSSHOP.shared.addCurrSlctObj = function(tObjN, tFelem, tSlctVal, tDefkey, tDefVal) {
                    if(tDefVal == "noQvalue") {
                    } else {
                    JSSHOP.shared.addCurrSelectOpt(tFelem, tDefkey, tDefVal, "selected");
                    }
                    for (var [key,val] of Object.entries(tObjN)) {
                    if(key == tSlctVal) {
                    // JSSHOP.shared.addCurrSelectOpt(tFelem, key, val, "");
                    JSSHOP.shared.addCurrSelectOpt(tFelem, key, val, "selected");
                    } else {
                    JSSHOP.shared.addCurrSelectOpt(tFelem, key, val, "");
                    }
                    }
                    };


        JSSHOP.shared.addCurrSelectOpt = function(theObj, theVal, theText, theCssClsn) {
            if(theCssClsn == "selected") {
         theObj.options[theObj.options.length] = new Option(theText, theVal, true, true);

            } else {
            theObj.options[theObj.options.length] = new Option(theText, theVal, true);
            }
        };

JSSHOP.shared.addOptAtIndex = function(theObj, theIndex, theVal, theText, theCssClsn) {
            theOpt = document.createElement("OPTION");
        theOpt.innerText = theText;
        theOpt.value = theVal;
        theOpt.className = theCssClsn;
            theObj.options.add(theOpt, theObj.options[theIndex]);
            // set as selected
            theObj.options[theIndex].selected = true;
        };

JSSHOP.shared.addOptAtVal = function(theObj, theIVal, theVal, theText, theCssClsn) {
            selection = null;
        selection = theObj;
        tmpVhasV = "no";
            if(theIVal == "noQvalue") {
                JSSHOP.shared.addOptAtIndex(theObj, theObj.options.length, theVal, theText, theCssClsn);
            } else {
                for(var i = 0; i < selection.length; i++) {
                tmpVhasV = "no";
                    currIndexVal = selection.options[i].value;
                    if(currIndexVal == theIVal) {
                 tmpVhasV = "yes";
                     JSSHOP.shared.addOptAtIndex(theObj, i+1, theVal, theText, theCssClsn);
                    }

                }
            if(tmpVhasV == "no") {
                // JSSHOP.shared.addOptAtIndex(theObj, theObj.options.length, theVal, theText, theCssClsn);
            }
        }
        };
JSSHOP.shared.removeOptions = function(selectbox)
{
    var iop;
    for(iop = selectbox.options.length - 1 ; iop >= 0 ; iop--)
    {
        selectbox.remove(iop);
    }
};



/*
* validation method using data-ison attr in element
* to validate it (form fields)
* parsing values delmited  by :
* data-ison="y:3:22"
*/


JSSHOP.shared.valVOarr = function(theVOarr, theErrDiv) {

    strVldErr = "<b>Oooops..</b>";
document.getElementById(theErrDiv).innerHTML = "";
    iint = 0;
    isValid = true;
    isFValid = true;
    len = theVOarr.length;

    while (iint < len) {
	  isFValid = true;
        ts = null;
        ts = theVOarr[iint];
theVB = null;
theVB = document.getElementById(ts.fid);
// alert(theVB.nodeName.toUpperCase());
if(theVB.nodeName.toUpperCase() === "DIV") {

theVBval = theVB.innerText;
} else {
theVBval = theVB.value;
}
if(document.getElementById(ts.lid)) {
// document.getElementById(ts.lid).innerHTML = ts.ltxt;
}
if(ts.fvr !== "noQvalue") {
ttest = ts.fvr;



if(ts.fda == false) {
if(theVBval == ts.fdv) {
alert("shr: " + ts.fda);
    isValid = false;
	isFValid = false;
}
}
if(!ttest.test(theVBval)) {
alert("no ttest: " + theVBval);
    isValid = false;
	isFValid = false;
}



if(isFValid === false) {
strVldErr += "<br>" + ts.fve;
}




}
iint++;
}

if(isValid == false) {
strVldErr += "<br>" + ts.fve;
theEdiv = document.createElement("div");
theEdiv.className = "cls-error-form";
theEdiv.innerHTML = strVldErr;
document.getElementById(theErrDiv).appendChild(theEdiv);
}


return isValid;
};


JSSHOP.shared.valFieldVals = function(theArrElem) {
// n = null default do nada
// v = validate
isFullyVal = true;
actType = "n";
try {
var len = theArrElem.length;
var iint = 0;
while (iint < len) {

if(document.getElementById(theArrElem[iint])) {
theElem = document.getElementById(theArrElem[iint]);
if(theElem.getAttribute("data-ison") != null) {
tDison = theElem.getAttribute("data-ison");
if(tDison.indexOf(":") != -1) {
tmpTDivars = tDison.split(":");
actType = tmpTDivars[0];
if(actType == "v") {
veType = tmpTDivars[1];
veMinLen = tmpTDivars[2];
veMaxLength = tmpTDivars[3];
veDefVal = tmpTDivars[4];
veLblElID = tmpTDivars[5];
veAlertStr = tmpTDivars[6];
veDefTtl = tmpTDivars[7];
veDefCls = tmpTDivars[8];


// v:s:5:8:49:lbl_u_pass:2:49:clsFrmInpLabel


document.getElementById(veLblElID).className = veDefCls;
document.getElementById(veLblElID).innerHTML = stxt[veDefTtl];
theElVal = theElem.value;
if(theElVal.length < veMinLen) {
isFullyVal = false;
if(veDefVal == "null")  {
} else {
theElem.value = stxt[veDefVal];
}
theElem.focus();
document.getElementById(veLblElID).className = "txtBold txtClrRed";
document.getElementById(veLblElID).innerHTML = stxt[veAlertStr];
}
}
}
}
}

iint++;
}
} catch(e) {
JSSHOP.logJSerror(e, arguments, "JSSHOP.shared.valFieldVals");
return false;
}
return isFullyVal;
};



JSSHOP.shared.initFrmComps = function(theFCmpArr) {
    iint = 0;
     tAstr = "";
    len = theFCmpArr.length;
    while (iint < len) {

        ts = theFCmpArr[iint];

theB = null;
theB = document.getElementById(ts.fid);

if(ts.fcl !== "noQvalue") {
JSSHOP.ui.addEvent(theB,"click",ts.fcl);
}
if(ts.lid !== "noQvalue") {
tlid = ts.lid;
try {
// document.getElementById(tlid).className = "txtSmall txtBold txtClrDDlg";
document.getElementById(tlid).innerText = ts.ltxt;

JSSHOP.ui.setLblHighlight(theB,ts.fdv,document.getElementById(tlid),ts.ltxt);
} catch(e) {

tAstr += e + " :: " +  JSON.stringify(ts) + "<br>";
// alert("JSSHOP.shared.initFrmComps: "  + e + " :: " +  JSON.stringify(ts));
}

} else {

}



if(ts.fdv !== "noQvalue") {

if(ts.fty == "button") {
theB.style.color = "#ffffff";
} else {
JSSHOP.ui.setDefFval(theB, ts.fdv, ts.fda);
}

}

if(ts.fda !== "noQvalue") {

}

	  iint++;
    }

// alert(tAstr);
};


JSSHOP.shared.setMakeStuff = function(tSMSMID, tSMSMN, tSMSMDW) {


JSSHOP.ui.closeLbox();
if(currPUrlObj["make"] == tSMSMN) {
tFKMOST = JSON.stringify(currCModelsObj);
if(tFKMOST.indexOf("id") != -1) {
// JSSHOP.shared.doModelsPop("inpModels", JSON.stringify(currCModelsObj), "nada");
console.log("setMakeStuff: " + "currCModelsObj.id");
} else {
console.log("setMakeStuff: " + "currCModelsObj.no-id");
// JSSHOP.ajax.doNuAjaxPipe("inpModels", "misc/m" + tSMSMID + ".txt", JSSHOP.shared.doModelsPop);
// JSSHOP.ajax.doNuAjaxPipe("inpModels", "misc/m" + tSMSMID + ".txt", JSSHOP.shared.doModelsPop);

}
JSSHOP.shared.doPartsWords(50,"noQvalue");
} else {
    JSSHOP.ads.clearAllPrtsPrefCC();
currPUrlObj["mk"] = tSMSMID;
currPUrlObj["make"] = tSMSMN;
currPUrlObj.series = "";
currPUrlObj.md = "";
currPUrlObj.model = "";
currPUrlObj.si = "";
currPUrlObj.y = "";
currPUrlObj.yf = "";
currPUrlObj.yt = "";

console.log("setMakeStuff: " + "make !== tSMSMN");
// JSSHOP.ajax.doNuAjaxPipe("inpModels", "misc/m" + tSMSMID + ".txt", JSSHOP.shared.doModelsPop);
JSSHOP.shared.doPartsWords(50,"noQvalue");
// eindex('aa-show-make','make=' + tSMSMN + '&mk=' + tSMSMID + '&pid=aa-show-make&q=' + tSMSMN);
}
JSSHOP.shared.doModelsPip();
};










/*
* setting activity and favorites in cookies
* using nAtvtyObj
*/
JSSHOP.shared.doAtvtyDefCB = function(theTmpAtvtyObj) {
};


JSSHOP.shared.nAtvtyObj = function() {
aTmpAtvtyOb = null;
aTmpAtvtyOb = {};
aTmpAtvtyOb["_id"] = "noQvalue"; // internal id
aTmpAtvtyOb["atype"] = "noQvalue"; // internal type
aTmpAtvtyOb["aid"] = "1"; // internal id
aTmpAtvtyOb["ttl"] = "noQvalue"; // title
aTmpAtvtyOb["ur"] = "noQvalue"; // url
aTmpAtvtyOb["imic"] = "noQvalue" // image
aTmpAtvtyOb["cckie"] = "noQvalue"; // the cookie it is saved to
aTmpAtvtyOb["daCB"] = "JSSHOP.ui.doAtvtyDefCB"; // null function as callback
aTmpAtvtyOb["icn"] = "&#eoph;"; // the icon
aTmpAtvtyOb["pnid"] = "noQvalue"; // the parent node, will just return text if noQvalue
aTmpAtvtyOb["garr"] = "currRcntFavsArr"; // the global array it will be working with
aTmpAtvtyOb["gstr"] = "currRcntFavsStr"; // the global str it will be working with
return aTmpAtvtyOb;
};



JSSHOP.shared.doAtvty = function(tAtvtyObj) {
theTfavUrl = tAtvtyObj.ur;
theTCkie = tAtvtyObj.cckie;

if(window[tAtvtyObj["gstr"]].length > 5) {
window[tAtvtyObj["garr"]] = JSON.parse(window[tAtvtyObj["gstr"]]);
currFavsIdstr = "";
tii = 0;
} else {
window[tAtvtyObj["gstr"]] = LZString.decompressFromEncodedURIComponent(JSSHOP.cookies.getCookie(tAtvtyObj.cckie));
}

if(window[tAtvtyObj["gstr"]].length > 5) {
tii = 0;
if(window[tAtvtyObj["garr"]].length > 0) {
while(tii < window[tAtvtyObj["garr"]].length) {
currFavsIdstr += window[tAtvtyObj["garr"]][tii]._id + "::";
tii++;
}
}
}


if(JSSHOP.cookies.getCookie(theTCkie) !== null) {
if(window[tAtvtyObj["gstr"]].indexOf(tAtvtyObj["_id"]) != -1) {
tii = 0;
nTmpArr = [];
if(window[tAtvtyObj["garr"]].length) {
while(tii < window[tAtvtyObj["garr"]].length) {
if(window[tAtvtyObj["garr"]][tii]._id == tAtvtyObj["_id"]) {
// alert("a match");
if(document.getElementById(tAtvtyObj.pnid)) { // this is fix for this boolean function add or remove
nTmpArr = removeArrElement(window[tAtvtyObj["garr"]], tii); // in some cases you just want to add
} else {
nTmpArr = window[tAtvtyObj["garr"]]; // in some cases you just want to add and not toggle
}
window[tAtvtyObj["gstr"]]  = JSON.stringify(nTmpArr);
window[tAtvtyObj["garr"]] = null;
window[tAtvtyObj["garr"]] = JSON.parse(window[tAtvtyObj["gstr"]]);

}
tii++;
}

} // tAtvtyObj["garr"].length
// removeArrElement(currRcntFavsArr, 0);
if(document.getElementById(tAtvtyObj["pnid"])) {
document.getElementById(tAtvtyObj["pnid"]).className = "material-icons txtClrHdr";
}

} else { // if(tAtvtyObj["gstr"].indexOf(tAtvtyObj["_id"])
currFavsObj = null;
currFavsObj = {};
window[tAtvtyObj["garr"]].push(tAtvtyObj);
// currRcntFavsArr.push(currFavsObj);
window[tAtvtyObj["gstr"]] = JSON.stringify(window[tAtvtyObj["garr"]]);
if(document.getElementById(tAtvtyObj.pnid)) {
document.getElementById(tAtvtyObj["pnid"]).className = "material-icons txtClrRed";
}
} // end else if(document.getElementById(tAtvtyObj.pnid))
} // if(JSSHOP.cookies.getCookie(theTCkie)

// alert("doRF: " + currRcntFavsStr);
JSSHOP.cookies.setCookie(tAtvtyObj["cckie"],LZString.compressToEncodedURIComponent(window[tAtvtyObj["gstr"]]),"30","","","");
};
































JSSHOP.shared.doPartsInpAC = function(tPinpID, theTIPobj) {
	mprtinp = document.getElementById(tPinpID);
tCatArrStr = "";
// currPartsObj = null;
tPrtMkObj = null;
console.log("theTIPobj: " + JSON.stringify(theTIPobj));
tPrtMkObj = theTIPobj.pprts;


//  alert(tPrtMkObj.pn);
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currenPtFocus;
  /*execute a function when someone writes in the text field:*/
  mprtinp.addEventListener("keyup", function(e) {
      var a, b, i, val = this.innerText;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currenPtFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/


for(var gpkey in tPrtMkObj) {


tACPObj = {};
tPEPobj = currPartsObj;
if(tPrtMkObj[gpkey].pts){
tCatPtsobj = tPrtMkObj[gpkey].pts;
for(var pcgkey in tCatPtsobj) {


       // for (i = 0; i < arr.length; i++) {



        /*check if the item starts with the same letters as the text field value:*/



		 TMPnOBJ = tCatPtsobj[pcgkey];
		 tSSv = tCatPtsobj[pcgkey].n;
		tSSaN =  TMPnOBJ.n;
		 tSStN = tSSaN;
		if((tSSv.toUpperCase().indexOf(val.toUpperCase()) != -1) && (val.length > 1)){
		  //  if(tSSv.substr(0, val.length).toUpperCase() == val.toUpperCase()){

		 tSSI =  TMPnOBJ.id;
		 tSSfN = tSSaN;
		 tSSppcat = TMPnOBJ.pi;
		 tSSfstr =
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + tSSfN.substr(0, val.length) + "</strong>";
          b.innerHTML += tSSfN.substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + tSSI + "::" + tSSfN + "::" + tSSppcat + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
		  tInpStr = this.getElementsByTagName("input")[0].value;
		  tInpSplit = tInpStr.split("::");

		  // tmpFPSstr = tUtoL + "&part=" + tInpSplit[1] + "&prti=" + tInpSplit[2] + "&q=" + encodeURIComponent(currUrlArr.make + " " + currUrlArr.series + " " + tInpSplit[1]);

		  // document.getElementById("inpImpParts").value = this.getElementsByTagName("input")[0].value;
             //  mprtinp.value = tInpSplit[1];
			mprtinp.innerText = tInpSplit[1];
			mprtinp.focus();
			currPUrlObj.prti = tInpSplit[0];
			currPUrlObj.part = tInpSplit[1];


/*
var len = currMenuArr.length;
var iint = 0;

while(iint < len) {
ts = currMenuArr[iint];
if(ts.cat_vala == tInpSplit[2]) { // add only main categories to list
JSSHOP.shared.setFieldVal("i_coid", ts.cat_coid);
JSSHOP.shared.setFieldVal("i_catid", ts._id);
// JSSHOP.shared.setFieldVal("i_cat_vala", tInpSplit[2]);
}
iint++;
}

tmpDOs = null;
tmpDOs = {};
tmpDOs["ws"] = "where cat_uid=? and cat_vala=?";
tmpDOs["wa"] = [quid,tInpSplit[2]];
tmpDOs["l"] = 25;
oi = getNuDBFnvp("qcat",5,null,tmpDOs);
doQComm(oi["rq"], null, "setItemCatID");
alert(oi["rq"]);
*/

              // document.getElementById("i_title").value = tInpSplit[1];
		  // alert("tSSppcat :: " + tInpSplit[2]);

              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
			 JSSHOP.shared.doPartsSearch('inpTParts');
          });
          a.appendChild(b);
	     }
        }
	 } // end of if tt[gpkey].n

     }
  });



 mprtinp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currenPtFocus variable:*/
        currenPtFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currenPtFocus variable:*/
        currenPtFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currenPtFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currenPtFocus].click();
        }
      }
	  if(e.key === "Enter") {
		JSSHOP.shared.doPartsSearch('inpTParts');
	  }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currenPtFocus >= x.length) currenPtFocus = 0;
    if (currenPtFocus < 0) currenPtFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currenPtFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != mprtinp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
if((arrUprefs["prfsSHOPuser"][0].mk) && (arrUprefs["prfsSHOPuser"][0].mk != "null") && (arrUprefs["prfsSHOPuser"][0].mk != "noQvalue")) {
    console.log("doPartsInpAC: " + arrUprefs["prfsSHOPuser"][0].mk);
tMakeId = arrUprefs["prfsSHOPuser"][0].mk;
// alert("mk: " +arrUprefs["prfsSHOPuser"][0].mk);
tMkPrfx = "m" + tMakeId;
tMkNme = objAllMakes[tMkPrfx].n;
// JSSHOP.shared.setMakeStuff(tMakeId,tMkNme,'noQvalue');
}

};






var doInpTFocus = function() {
    tINTcstr = inpTParts.innerHTML;
    if(tINTcstr.indexOf("Ex:") != -1) {
        inpTParts.innerHTML = "";
    }
    if(dvPartsMain.style.display == "block") {
       JSSHOP.ui.setNuCBBClickClr(dvPartsMain,'rtable brdrClrRed txtBold mrgin10',dvPartsMain.className, function() { void(0); }, 300);

    } else {
        JSSHOP.ui.toggleNuModule('dvTglPSmain','dvPartsMain');
        JSSHOP.ui.setNuCBBClickClr(dvPartsMain,'rtable brdrClrRed txtBold mrgin10',dvPartsMain.className, function() { void(0); }, 300);
    }
};




JSSHOP.shared.setFieldVal = function(theField, theVal) {
	try {
      document.getElementById(theField).value = theVal;
	} catch(e) {
	JSSHOP.logJSerror(e, arguments, "JSSHOP.shared.setFieldVal");
	}
};


JSSHOP.shared.getFieldVal = function(theField, theVal) {
	try {
      return document.getElementById(theField).value;
	} catch(e) {
	JSSHOP.logJSerror(e, arguments, "JSSHOP.shared.getFieldVal");
	return theVal;
	}
};

JSSHOP.shared.setFrmFieldVal = function(theForm, theField, theVal) {
	try {	} catch(e) {
	JSSHOP.logJSerror(e, arguments, "JSSHOP.shared.setFrmFieldVal");
	}
      document[theForm][theField].value = theVal;

};

JSSHOP.shared.getFrmFieldVal = function(theForm, theField, theVal) {
	try {
      return document[theForm][theField].value;
	} catch(e) {
	JSSHOP.logJSerror(e, arguments, "JSSHOP.shared.getFrmFieldVal");
	return theVal;
	}
};







JSSHOP.shared.sort = function(data, theIndex, theOrder) {
    var i, j;
    var currentValue;
    var currentObj;
    var compareObj;
    var compareValue;

    function toNumberIfNumeric(val) {
        var n = parseFloat(val);
        return (!isNaN(n) && isFinite(val)) ? n : val;
    }

    if(theOrder == "sortAsc") {
        for(i=1; i<data.length;i++) {
            currentObj = data[i];
            currentValue = toNumberIfNumeric(currentObj[theIndex]);
            j= i-1;
            compareObj = data[j];
            compareValue = toNumberIfNumeric(compareObj[theIndex]);
            while(j >=0 && (
                (typeof compareValue === 'number' && typeof currentValue === 'number' && compareValue > currentValue) ||
                (typeof compareValue !== 'number' || typeof currentValue !== 'number') && compareValue > currentValue
            )) {
                data[j+1] = data[j];
                j--;
                if (j >=0) {
                    compareObj = data[j];
                    compareValue = toNumberIfNumeric(compareObj[theIndex]);
                }
            }
            data[j+1] = currentObj;
        }
    } else {
        for(i=1; i<data.length;i++) {
            currentObj = data[i];
            currentValue = toNumberIfNumeric(currentObj[theIndex]);
            j= i-1;
            compareObj = data[j];
            compareValue = toNumberIfNumeric(compareObj[theIndex]);
            while(j >=0 && (
                (typeof compareValue === 'number' && typeof currentValue === 'number' && compareValue < currentValue) ||
                (typeof compareValue !== 'number' || typeof currentValue !== 'number') && compareValue < currentValue
            )) {
                data[j+1] = data[j];
                j--;
                if (j >=0) {
                    compareObj = data[j];
                    compareValue = toNumberIfNumeric(compareObj[theIndex]);
                }
            }
            data[j+1] = currentObj;
        }
    }
    return data;
}








JSSHOP.shared.setArrVals = function(theMarr, theAIndx, theArr) {
	  tmpVpar =  null;
	  tmpVpar = [];
	  tmpSobj = null;
	  tmpSobj = {};
        var len = theArr.length;
        var iint = 0;

    	  while (iint < len) {
        ts = theArr[iint];
 	  tmpSobj = null;
	  tmpSobj = {};
        for (var gkey in ts) {
          if(theMarr[theAIndx][gkey]) {
	    theMarr[theAIndx][gkey] = ts[gkey];
	    }
        }
        iint++;
        }
       return theMarr;
};


JSSHOP.shared.getNuKNVParr = function(theArr, tOldKNVArr) {
    console.log("getNuKNVParr.new: " + JSON.stringify(theArr));
    console.log("getNuKNVParr.old: " + JSON.stringify(tOldKNVArr));
    tmpVpar =  null;
    tmpVpar = [];
    tmpSobj = null;
    tmpSobj = {};
      var len = theArr.length;
      var iint = 0;

        while (iint < len) {
      ts = theArr[iint];

     tmpSobj = null;
    tmpSobj = {};
      for (var gkey in ts) {
         try {
            if(tOldKNVArr[gkey] != ts[gkey]) {
        tmpSobj["t"] = gkey;
      tmpSobj["v"] = ts[gkey];
      tmpVpar.push(tmpSobj);
      console.log("getNuKNVParr.dif: " + gkey + " :: " + tOldKNVArr[gkey] + " :: " + ts[gkey]);

            } else {
                console.log("getNuKNVParr.same: " + gkey + " :: " + tOldKNVArr[gkey] + " :: " + ts[gkey]);
            }
        } catch(e) {
            console.log("getNuKNVParr.err: " + e);
        }
      }
      iint++;
      }
     return tmpVpar;
};


JSSHOP.shared.getKNVParr = function(theArr) {
	  tmpVpar =  null;
	  tmpVpar = [];
	  tmpSobj = null;
	  tmpSobj = {};
        var len = theArr.length;
        var iint = 0;

    	  while (iint < len) {
        ts = theArr[iint];

 	  tmpSobj = null;
	  tmpSobj = {};
        for (var gkey in ts) {
          tmpSobj["t"] = gkey;
	    tmpSobj["v"] = ts[gkey];
	    tmpVpar.push(tmpSobj);
        }
        iint++;
        }
       return tmpVpar;
};


JSSHOP.shared.setDynFrmVals = function(oFormElement, dPrfx) {

        var oField, sFieldType, nFile, sSearch;
	  tmpVpar =  null;
	  tmpVpar = [];
	  tmpSobj = {};
	  var allNs = "";
        for (var nItem = 0; nItem < oFormElement.elements.length; nItem++) {
            oField = oFormElement.elements[nItem];
            if (!oField.getAttribute("name")) {
                continue;
            }
	  	tmpSobj = null;
       	tmpSobj = {};
            sFieldType = oField.nodeName.toUpperCase() === "INPUT" ? oField.getAttribute("type").toUpperCase() : "TEXT";
            if (sFieldType === "FILE") {
                for (nFile = 0; nFile < oField.files.length; sSearch += "&" + escape(oField.name) + "=" + escape(oField.files[nFile++].name));
            } else if ((sFieldType !== "RADIO" && sFieldType !== "CHECKBOX") || oField.checked) {
            fn = oField.name;
		fv = oField.value;
		fnode = dPrfx + fn;

		if(dPrfx == "clear") {
		oField.value = "";
		} else {
            if(document.getElementById(fnode)) {






		if((dPrfx == "dyn_") || (document.getElementById(fnode).nodeName.toUpperCase() == "DIV")){
		document.getElementById(fnode).innerHTML = fv;
		} else {
		allNs += fnode + ",";
		// alert(fnode + " ;; " + fv);
		JSSHOP.shared.setFieldVal(fnode, fv);
		}
            }

		}

		}
        }
 // alert(allNs);
};

JSSHOP.shared.getFrmObj = function(oFormElement) {

        var oField, sFieldType, nFile, sSearch;
	  tmpVpar =  null;
	  tmpVpar = [];
	  tmpSobj = null;
	  tmpSobj = {};
        for (var nItem = 0; nItem < oFormElement.elements.length; nItem++) {
            oField = oFormElement.elements[nItem];
            if (!oField.getAttribute("name")) {
                continue;
            }
	  	// tmpSobj = null;
       	// tmpSobj = {};
            sFieldType = oField.nodeName.toUpperCase() === "INPUT" ? oField.getAttribute("type").toUpperCase() : "TEXT";
            if (sFieldType === "FILE") {
                for (nFile = 0; nFile < oField.files.length; sSearch += "&" + escape(oField.name) + "=" + escape(oField.files[nFile++].name));
            } else if ((sFieldType !== "RADIO" && sFieldType !== "CHECKBOX") || oField.checked) {
            fn = oField.name;
		fnode =  fn;
            if(document.getElementById(fnode)) {
		tNN = document.getElementById(fnode).nodeName.toUpperCase();
		if((tNN == "DIV") || (tNN == "SPAN")){
		fv = document.getElementById(fnode).innerText;
		} else if(tNN == "SELECT") {
		fv = JSSHOP.shared.getCurrSelectOpt(document.getElementById(fnode));
		} else {
		fv = document.getElementById(fnode).value;
		}
		oField.value = fv;
            } else {
		fv = oField.value;
		}
		if(fv.indexOf("/") != -1) {
            tmpSobj[fn] = fv;
		// alert("FV/");
		// tmpSobj[fn] = fv.replace("/", " ");
		// tmpSobj[fn] = escape(encodeURIComponent(fv));
		// alert("FV/: " + tmpSobj[fn]);
		} else {
		 tmpSobj[fn] = fv;
		}
        // sanatize the fv for sql injection
        // fv = fv.replace(/[^a-zA-Z0-9\s\-]/g, '');
        // fv = fv.replace(/(\b\S+\b)(?=.*?\1)/g, "");
        // escape the fv for sql insertion


		// if(fv.length > 0) {
		// tmpSobj["t"] = fn;
		// tmpSobj["v"] = fv;
		// tmpVpar.push(tmpSobj);
		// }
            }
        }
		 // alert("getDynFormVals: " + JSON.stringify(tmpVpar));
		return tmpSobj;
};

JSSHOP.shared.getDynFrmVals = function(oFormElement, dPrfx) {

    var oField, sFieldType, nFile, sSearch;
  tmpVpar =  null;
  tmpVpar = [];
  tmpSobj = null;
  tmpSobj = {};
    for (var nItem = 0; nItem < oFormElement.elements.length; nItem++) {
        oField = oFormElement.elements[nItem];
        if (!oField.getAttribute("name")) {
            continue;
        }
      tmpSobj = null;
       tmpSobj = {};
        sFieldType = oField.nodeName.toUpperCase() === "INPUT" ? oField.getAttribute("type").toUpperCase() : "TEXT";
        if (sFieldType === "FILE") {
            for (nFile = 0; nFile < oField.files.length; sSearch += "&" + escape(oField.name) + "=" + escape(oField.files[nFile++].name));
        } else if ((sFieldType !== "RADIO" && sFieldType !== "CHECKBOX") || oField.checked) {
        fn = oField.name;
    fnode = dPrfx + fn;
        if(document.getElementById(fnode)) {
    tNN = document.getElementById(fnode).nodeName.toUpperCase();
    if((tNN == "DIV") || (tNN == "SPAN")){
    fv = document.getElementById(fnode).innerText;
    } else if(tNN == "SELECT") {
    fv = JSSHOP.shared.getCurrSelectOpt(document.getElementById(fnode));
    } else {
    fv = document.getElementById(fnode).value;
    }
    oField.value = fv;
        } else {
    fv = oField.value;
    }
    if(fv.indexOf("/") != -1) {
        tmpSobj[fn] = fv;
    // alert("FV/");
    // tmpSobj[fn] = fv.replace("/", " ");
    // tmpSobj[fn] = escape(encodeURIComponent(fv));
    // alert("FV/: " + tmpSobj[fn]);
    } else {
     tmpSobj[fn] = fv;
    }
    // sanatize the fv for sql injection
    // fv = fv.replace(/[^a-zA-Z0-9\s\-]/g, '');
    // fv = fv.replace(/(\b\S+\b)(?=.*?\1)/g, "");
    // escape the fv for sql insertion


    // if(fv.length > 0) {
    // tmpSobj["t"] = fn;
    // tmpSobj["v"] = fv;
    tmpVpar.push(tmpSobj);
    // }
        }
    }
     // alert("getDynFormVals: " + JSON.stringify(tmpVpar));
    return tmpVpar;
};


JSSHOP.shared.getFrmVals = function(oFormElement, oHdrStr) {


        var oField, sFieldType, nFile, sSearch;
	  tmpVpar =  null;
	  tmpVpar = [];
	  tmpSobj = {};
        for (var nItem = 0; nItem < oFormElement.elements.length; nItem++) {
  	try {
            oField = oFormElement.elements[nItem];
            if (!oField.getAttribute("name")) {
                continue;
            }
	  	tmpSobj = null;
       	  tmpSobj = {};

            sFieldType = oField.nodeName.toUpperCase() === "INPUT" ? oField.getAttribute("type").toUpperCase() : "TEXT";
            if (sFieldType === "FILE") {
                for (nFile = 0; nFile < oField.files.length; sSearch += "&" + escape(oField.name) + "=" + escape(oField.files[nFile++].name));
            } else if ((sFieldType !== "RADIO" && sFieldType !== "CHECKBOX") || oField.checked) {

		fva = oField.value;
		if(fva.length >= 0) {

		fvb = fva.replace("\"", " ");
		fvv = fva.replace("'", " ");
            fn = escape(oField.name);
		fv = fvv;


		tmpSobj["t"] = fn;
		tmpSobj["v"] = fv;
		tmpVpar.push(tmpSobj);
		}
            }


        } catch (e) {
		alert(e + " : " + oField.getAttribute("name"));
        // JSSHOP.logJSerror(e, arguments, "JSSHOP.ajax.doAjaxSbmt");
    	  }


        }
		// alert("getFormVals: " + JSON.stringify(tmpVpar));
		return tmpVpar;
};



JSSHOP.shared.setDynFieldVals = function(theResp, thePrefx) {

if(theResp) {
var len = theResp.length;

// var arrToFill = theResp;


var iint = 0;

for(var gkey in theResp) {
try {

fnode = thePrefx + gkey;
if(document.getElementById(fnode)) {
tRKv = theResp[gkey];
if(tRKv.indexOf("%3A") != -1) {
    if(tRKv.indexOf("http") != -1) {
        retQkey = theResp[gkey];
    } else {
       retQkey = theResp[gkey];
//  retQkey = unescape(decodeURIComponent(tRKv));
}
} else {
retQkey = theResp[gkey];
}
if(document.getElementById(fnode).nodeName.toUpperCase() == "DIV"){
document.getElementById(fnode).innerHTML = retQkey;
} else {
document.getElementById(fnode).value = retQkey;
}
}
} catch(e) {
}
iint++;
}
}
};


JSSHOP.shared.setFrmVals = function(theForm, theResp, theTmpCB) {
// alert("setFrmVals ; " + JSON.stringify(theResp));
if(theResp) {
// var arrToFill = theResp;
var len = theResp.length;
var iint = 0;

for(var gkey in theResp) {
try {
if(document[theForm][gkey]) {
document[theForm][gkey].value = theResp[gkey];
// alert(JSON.stringify(theResp[gkey]));
}
} catch(e) {
}
}

theTmpCB();

}
};





/*
* will try to use this later as seen on the qmsm form in index.html
* basically renders a web input form according to attributes in the actual forms fields
* JSSHOP.shared.rndrDynFrmVals(document["qmsgs"], "tmp_");
* save button still has to be added
*/

JSSHOP.shared.rndrDynFrmVals = function(oFormElement, dPrfx, tFAllowed, tSavBtnObj) {

        var oField, sFieldType, nFile, sSearch;
	  tmpVstr =  "";
        tmpFval = "";
        tmpFid = "noQvalue";
	  tmpLid = "noQvalue";
	  retRndrObj = null;
	  retRndrObj = {};
 	  rndrFFObjArr = null;
	  rndrFFObjArr = [];
		tmpFlbl = "...";
        for (var nItem = 0; nItem < oFormElement.elements.length; nItem++) {
            oField = oFormElement.elements[nItem];
	  tFNstr = oField.getAttribute("name");
	  if(tFAllowed == "noQvalue" || tFAllowed.indexOf(tFNstr) != -1) {


			tmpVstr += "<div>";
			tmpVstr += "<span style=\"min-width: 80%\" ";
            if (oField.getAttribute("data-flbl")) {
			ttmpFlbl = "...";
		ttmpFlbl = oField.getAttribute("data-flbl");
			if(ttmpFlbl.indexOf("stxt") != -1) {
		     tmpFlbl = eval(ttmpFlbl);

			// tmpFlbl = ttmpFlbl;
			} else {
                tmpFlbl = ttmpFlbl;
			// tmpFlbl = eval(ttmpFlbl);

			}
 			tmpVstr += "data-flbl=\"" + tmpFlbl + "\" ";

		}
            if (oField.getAttribute("data-fid")) {
 			atmpFid = oField.getAttribute("data-fid");
			if(atmpFid.indexOf("tmp_") != -1) {
			tmpFid = atmpFid + oField.getAttribute("name");
			} else {
			tmpFid = atmpFid;
			}
			tmpLid = "lbl_" + tmpFid;
			tmpVstr += "id=\"" + tmpLid + "\">";
            }
			tmpVstr += tmpFlbl + "</span>&nbsp;&nbsp;<br>";

			// tmpVstr += "<span id=\"" + tmpLid + "\" style=\"min-width: 80%\">" + tmpFlbl + "</span>&nbsp;&nbsp;<br>";
            if (oField.getAttribute("data-fval")) {
 			atmpFval = oField.getAttribute("data-fval");
			if(atmpFval.indexOf("thisval") != -1) {
			tmpFval = oField.getAttribute("value");
			} else {
			tmpFval = atmpFval;
			}
            }

            if (oField.getAttribute("data-ftype")) {
              switch(oField.getAttribute("data-ftype")) {
			case "span":
			tmpVstr += "<span  id=\"" + tmpFid + "\" style=\"min-width: 80%\">" + tmpFval + "</span>";
			break;
			case "tinput":
			tmpVstr += "<input value=\"" + tmpFval + "\" id=\"" + tmpFid + "\" style=\"min-width: 80%\" class=\"form-control\"></input>";
			break;
			case "tarea":
			tmpVstr += "<textarea id=\"" + tmpFid + "\" style=\"min-width: 80%;min-height:300px\" class=\"form-control\">" + tmpFval + "</textarea>";
			break;
            case "tselect":
            tmpVstr += "<select id=\"" + tmpFid + "\" style=\"min-width: 80%\" class=\"form-control\">" + tmpFval + "</select>";
            break;
            case "tbutton":
            tmpVstr += "<button id=\"" + tmpFid + "\" class=\"cls_button cls_button-medium\">" + tmpFval + "</button>";
            break;
            case "tdivarea":
            tmpVstr += "<div id=\"" + tmpFid + "\" style=\"min-width: 80%;min-height:100px;\" contenteditable=\"true\" spellckeck=\"false\" data-ms-editor=\"false\" class=\"form-control\">" + tmpFval + "</div>";
            break;
            case "tdiv":
            tmpVstr += "<div id=\"" + tmpFid + "\" style=\"min-width: 80%\" contenteditable=\"true\" spellckeck=\"false\" data-ms-editor=\"false\" class=\"form-control\">" + tmpFval + "</div>";
            break;
			default:
			break;
			}
            }





atfuh = null;
atfuh = nCurrFFieldOb();
atfuh.fid = tmpFid;
atfuh.fdv = tmpFval;
atfuh.lid = tmpLid;
atfuh.ltxt = tmpFlbl;
rndrFFObjArr.push(atfuh);

tmpVstr += "</div>";
}
 }
if(tSavBtnObj !== "noQvalue"){
rndrFFObjArr.push(tSavBtnObj);
tmpVstr += "<div align=\"center\"><button id=\"" + tSavBtnObj.fid + "\" class=\"cls_button cls_button-medium\"><ti data-ison=\"" + tSavBtnObj.ltxt + "\" data-desc=\"btn_save\">" + eval(tSavBtnObj.ltxt) + "</ti></button></div>";
}
retRndrObj["rndrStr"] = tmpVstr;
retRndrObj["rndrFobj"] = rndrFFObjArr;
return retRndrObj;
};


JSSHOP.shared.getTblHdrs = function(tHHdrArr) {
    tHdrStr = "";
for(iha = 0; iha < tHHdrArr.length; iha++) {
    tHlnkObj = tHHdrArr[iha];
    tStchHstr = "";
    if(tHlnkObj.fld == "_id") {
    // tStchHstr = "position: sticky; left: 0; z-index: 3;";
    }
    if((tHlnkObj.ulnk) && (tHlnkObj.ulnk == "noQvalue")) {
     tHdrStr += "<th style=\"text-align: left; " + tStchHstr + "\"><a class=\"txtBold txtClrHdr\">" + tHlnkObj.nm + "</a></th>";
    } else {
    tHdrStr += "<th style=\"text-align: left\"><a href=\"javascript:rnderFItems('" + tHlnkObj.fld + "');\" class=\"txtBold txtClrHdr\">" + tHlnkObj.nm + "</a></th>";
    }
}
    return tHdrStr;
};
JSSHOP.shared.getNuTblHdrs = function(tHHdrArr, THHdrCB) {
    tHdrStr = "";

for(iha = 0; iha < tHHdrArr.length; iha++) {
    tdefcls = "txtBold txtClrHdr";
    tHlnkObj = tHHdrArr[iha];
    if((tHlnkObj.ulnk) && (tHlnkObj.ulnk == "noQvalue")) {
     tHdrStr += "<th style=\"text-align: left\"><a class=\"txtBold txtClrHdr\">" + tHlnkObj.nm + "</a></th>";
    } else {
        if((pid.indexOf("psearch") != -1) || (pid.indexOf("main") != -1)) {
                if(currSortObj["psearch"]["sindex"] == tHlnkObj.fld) {
                tdefcls = "txtBold txtClrRed";
                }
        } else {
                if(currSortObj["msearch"]["sindex"] == tHlnkObj.fld) {
                tdefcls = "txtBold txtClrRed";
                }
        }

    tHdrStr += "<th style=\"text-align: left; ;background-color: #FFFFFF;\"><a href=\"javascript:rnderFItems('" + tHlnkObj.fld + "');\" class=\"" + tdefcls + "\">" + tHlnkObj.nm + "</a></th>";
    }
}
    return tHdrStr;
};


JSSHOP.shared.getNuTblSortStr = function(theTBhdr, theTBbdy, theTCls) {
    strFhtml = "<div class=\"tabler txtBold txtClrBlack\"  style=\"margin: 0 auto;min-width:90%;max-width:98%\">";
    strFhtml += theTBhdr;
    strFhtml += theTBbdy + "</div>";
    return strFhtml;
};

JSSHOP.shared.getNurTblHdrs = function(tHHdrArr, THHdrCB) {
    tHdrStr = "<div class=\"prodRowBox slmtable brdrClrRed gradient-color txtClrWhite\" style=\"min-height: 20px;\">";
    tHdrStr += "<table><tr><td>";
    tHdrStr += "<i class=\"small-material-icons txtClrWhite\" style=\"margin-right:6px;\" alt=\"list\" title=\"list\">&#xe164;</i></td><td><b><span class=\"txtClrWhite\">" + stxt[403] + ":</span></b></td><td><span class=\"txtClrGrey txtSmall\">..</span></td></tr></table>";
for(iha = 0; iha < tHHdrArr.length; iha++) {
    tAdefcls = "slmtable bkgdClrWhite txtSmall txtBold txtClrHdr crsrPointer txtDecorNone brdrClrHdr";

    tHlnkObj = tHHdrArr[iha];
    if((tHlnkObj.ulnk) && (tHlnkObj.ulnk == "noQvalue")) {
     tHdrStr += "<div  style=\"text-align: left; margin:2px;padding;2px;float:left;padding-right:5px;\" class=\"slmtable bkgdClrWhite txtSmall txtBold txtClrRed crsrPointer\"><a class=\"txtBold txtClrHdr txtDecorNone\">" + tHlnkObj.nm + "</a></div>";
    } else {
        if((pid.indexOf("psearch") != -1) || (pid.indexOf("main") != -1)) {
            if(currSortObj["psearch"]["sindex"] == tHlnkObj.fld) {
                tAdefcls = "slmtable bkgdClrNrml txtSmall txtBold txtClrRed crsrPointer txtDecorNone brdrClrHdr";


            }
    } else {
            if(currSortObj["msearch"]["sindex"] == tHlnkObj.fld) {
                tAdefcls = "slmtable bkgdClrNrml txtSmall txtBold txtClrRed crsrPointer txtDecorNone brdrClrHdr";
            }
    }
    if(tHlnkObj.fld == "cccd") {
        tAdefcls = "slmtable bkgdClrNrml txtSmall txtBold txtClrRed crsrPointer txtDecorNone gradient-pop";

    }
   //  tHdrStr += "<div style=\"float: left; text-align: left; margin:2px;padding;2px;float:left;padding-right:5px;\" class=\"slmtable bkgdClrWhite txtSmall txtBold txtClrHdr crsrPointer txtDecorNone brdrClrHdr\" onclick=\"javascript:if(currBtnSort != null)currBtnSort.className='slmtable bkgdClrWhite txtSmall txtBold txtClrHdr crsrPointer txtDecorNone brdrClrHdr';this.className='slmtable bkgdClrWhite txtSmall txtBold txtClrRed crsrPointer txtDecorNone brdrClrHdr';currBtnSort=this;" + THHdrCB + "('" + tHlnkObj.fld + "');\" >" + tHlnkObj.nm + "</div>";
     tHdrStr += "<div id=\"btnSort_" +  tHlnkObj.fld + "\" style=\"float: left; text-align: left; margin:2px;padding;2px;float:left;padding-right:5px;\" class=\"" + tAdefcls + "\" onclick=\"javascript:if(currBtnSort != null)currBtnSort.className='slmtable bkgdClrWhite txtSmall txtBold txtClrHdr crsrPointer txtDecorNone brdrClrHdr';this.className='slmtable bkgdClrWhite txtSmall txtBold txtClrRed crsrPointer txtDecorNone brdrClrHdr';currBtnSort=this;" + THHdrCB + "('" + tHlnkObj.fld + "');\" >" + tHlnkObj.nm + "</div>";
   }
}
tHdrStr += "<div class=\"clearfix\"></div>";
    tHdrStr += "</div>";
    return tHdrStr;
};

JSSHOP.shared.getSrtdArr = function(tSortArr, tSrtIdx) {
hasr = "n";
fullstr = "";
var tmpSordr = "sortAsc";
if(currSortIdx[tSrtIdx]) {
if(currSortIdx[tSrtIdx] == "sortAsc") {
tmpSordr = "sortDesc";
currSortIdx[tSrtIdx] = "sortDesc";
} else {
tmpSordr = "sortAsc";
currSortIdx[tSrtIdx] = "sortAsc";
}
} else {
tmpSordr = "sortDesc";
currSortIdx[tSrtIdx] = "sortDesc";
}
currSortIdx[tSrtIdx] = tmpSordr;
return(JSSHOP.shared.sort(tSortArr, tSrtIdx, tmpSordr));
};


JSSHOP.shared.utf8_encode = function( argString ) {
    // http://kevin.vanzonneveld.net
    // +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: sowberry
    // +    tweaked by: Jack
    // +   bugfixed by: Onno Marsman
    // +   improved by: Yves Sucaet
    // +   bugfixed by: Onno Marsman
    // +   bugfixed by: Ulrich
    // *     example 1: utf8_encode('Kevin van Zonneveld');
    // *     returns 1: 'Kevin van Zonneveld'

    var string = (argString+''); // .replace(/\r\n/g, "\n").replace(/\r/g, "\n");

    var utftext = "";
    var start, end;
    var stringl = 0;

    start = end = 0;
    stringl = string.length;
    for (var n = 0; n < stringl; n++) {
        var c1 = string.charCodeAt(n);
        var enc = null;

        if (c1 < 128) {
            end++;
        } else if (c1 > 127 && c1 < 2048) {
            enc = String.fromCharCode((c1 >> 6) | 192) + String.fromCharCode((c1 & 63) | 128);
        } else {
            enc = String.fromCharCode((c1 >> 12) | 224) + String.fromCharCode(((c1 >> 6) & 63) | 128) + String.fromCharCode((c1 & 63) | 128);
        }
        if (enc !== null) {
            if (end > start) {
                utftext += string.substring(start, end);
            }
            utftext += enc;
            start = end = n+1;
        }
    }

    if (end > start) {
        utftext += string.substring(start, string.length);
    }

    return utftext;
};





// some shared user preferences functions
// sets prefs by passing the checkbox, the preference array name,
// the preference key, selected and unselected values.
JSSHOP.shared.setChckbxPref = function(tChckbx, tPrefArr, tPrefKey, tVsel, tVunsel) {
	try {
    if(tChckbx.checked) {
    JSSHOP.user.setCkiePrfKV(tPrefArr,tPrefKey,tVsel);
    } else {
    JSSHOP.user.setCkiePrfKV(tPrefArr,tPrefKey,tVunsel);
    }
    } catch (e) {
	alert(e);
        JSSHOP.logJSerror(e, arguments, "JSSHOP.shared.setChckbxPref");
    }
};

// end of shared funtions




//   ---- AJAX functions


JSSHOP.ajax.fnishGeneric = function(strRet, prvdr, action, ukey, id, cbElem, cbElemHTML) {
    try {
        document.getElementById(cbElem).innerHTML = cbElemHTML;
    } catch (e) {
        JSSHOP.logJSerror(e, arguments, "JSSHOP.ajax.fnishGeneric");
    }
};


JSSHOP.ajax.procAjaxRet = function(strRet, prvdr, action, ukey, id, msg, cbElem, cbElemHTML) {
    try {
    switch (action) {
        case "parseU":
            JSSHOP.ajax.fnishGeneric(strRet, prvdr, action, ukey, id, cbElem, cbElemHTML);
            break;
        default:
            JSSHOP.ajax.fnishGeneric(strRet, prvdr, action, ukey, id, cbElem, cbElemHTML);
            break;
    }
    } catch (e) {
        JSSHOP.logJSerror(e, arguments, "JSSHOP.ajax.procAjaxRet");
    }
};


JSSHOP.ajax.procRet = function(strRet, arrFelemnts) {
    try {

        if(arrFelemnts[0]["name"]) {
        if(arrFelemnts[0]["name"].toLowerCase() == "aaction") {
        tmpAVal = arrFelemnts[0]["value"];
    switch(tmpAVal) {
        case "CViewEditAdminSettings":
		JSSHOP.ui.popAndFillLbox("new: " + JSON.stringify(arrFelemnts) + " <br> " + strRet);
            break;
        default:
            JSSHOP.ajax.fnishGeneric(strRet, prvdr, action, ukey, id, cbElem, cbElemHTML);
            break;
    }
    }
    }
    } catch (e) {
        JSSHOP.logJSerror(e, arguments, "JSSHOP.ajax.procRet");
    }
};

JSSHOP.ajax.createXMLHTTPObject = function() {
    var xmlhttp = false;
var XMLHttpFactories = [
    function() {
        return new XMLHttpRequest()
    },
    function() {
        return new ActiveXObject("Msxml2.XMLHTTP")
    },
    function() {
        return new ActiveXObject("Msxml3.XMLHTTP")
    },
    function() {
        return new ActiveXObject("Microsoft.XMLHTTP")
    }
];
    for (var i = 0; i < XMLHttpFactories.length; i++) {
        try {
            xmlhttp = XMLHttpFactories[i]();
        } catch (e) {
            continue;
        }
        break;
    }
    return xmlhttp;
};


JSSHOP.ajax.doNuResponse = function(tmpArrDRS) {
// alert("doNuResponse: " + tmpArrDRS.cb + " : " + tmpArrDRS.rs);
// JSSHOP.ui.popAndFillLbox("doNuResponse: " + tmpArrDRS.cb + " : " + tmpArrDRS.rs);
tmpNArrDRS = null;
tmpNArrDRS = {};
tmpNArrDRS = tmpArrDRS;

if(tmpArrDRS.st == "nofile") {
JSSHOP.ajax.doResponseSave(tmpArrDRS);
} else {
if(tmpArrDRS.lz == "y") {
strTmpDAS = tmpArrDRS.rs;
strTmpDS = strTmpDAS.replace("\"", "");
tmpDFEUStr = LZString.decompressFromEncodedURIComponent(strTmpDS);
tmpNArrDRS.rs = tmpDFEUStr;
// alert("tmpDFEUStr: " + tmpDFEUStr);
}

if(tmpArrDRS.ls == "n") {
} else {

tLSStr = getNuLclStrg(tmpArrDRS.ls, tmpArrDRS.cb, "noQvalue");
if(tLSStr == "noQvalue") {
setNuLclStrg("localStorage", tmpArrDRS.cb, tmpArrDRS.rs);
}

}

}


theRespCB = window[tmpArrDRS.cb];
theRespCB(tmpNArrDRS);


};


JSSHOP.ajax.doResponseSave = function(tmpsArrDRS) {
// alert("doResponseSave: " + tmpsArrDRS.cb  + " : " + tmpsArrDRS.fn + " : " + tmpsArrDRS.rs );
if(tmpsArrDRS.lz == "y") {
JSSHOP.shared.setFrmFieldVal("qconn", "rs",  LZString.compressToEncodedURIComponent(tmpsArrDRS.rs));
} else {
JSSHOP.shared.setFrmFieldVal("qconn", "rs", tmpsArrDRS.rs.replace(/\\(.)/mg, "$1"));
}
JSSHOP.shared.setFrmFieldVal("qconn", "fn", tmpsArrDRS.fn);
JSSHOP.shared.setFrmFieldVal("qconn", "fc", "save");
document["qconn"].submit();

};



JSSHOP.ajax.doRespConstruct = function(tmpDRCArr, tmpRCstr) {
try {

// alert("doRespConstruct: " + tmpDRCArr.cb + " : " + tmpRCstr);
tmpNDRCArr = null;
tmpNDRCArr = {};
tmpNDRCArr = tmpDRCArr;
aRespArr = null;
aRespArr = {};
          aRespArr = JSON.parse(tmpRCstr);
          tmpNDRCArr.st = "error";

	    tmpNDRCArr.rs = "noQvalue";

 	     // alert("aRespArr.data: " + " : " + aRespArr.data);

	    tmpNDRCArr.rs = JSON.stringify(aRespArr.data);
		// alert(JSON.stringify("tmpNDRCArr.rs: " + tmpNDRCArr.rs));
	    JSSHOP.ajax.doNuResponse(tmpNDRCArr);
} catch(e) {
console.log("doRespConstruct: " + e + " :: " + tmpRCstr);
alert("doRespConstruct: " + e + " :: " + tmpRCstr);
}

};




JSSHOP.ajax.doNurAjaxPipe = function(theAxObj) {
console.log("doNurAjaxPipe: " + theAxObj.cb + " : " + theAxObj.q);
hasLclStrg = "n";

aRespArr = null;
aRespArr = {};
tmpQstr = "";
tmpFRSstr = "";
tmpQstr += "fc=" + theAxObj.fc + "&";
tmpQstr += "ts=" + theAxObj.ts + "&";
tmpQstr += "fn=" + theAxObj.fn + "&";
tmpQstr += "lz=" + theAxObj.lz + "&";
tmpQstr += "rs=" + theAxObj.rs + "&";
tmpQstr += "q=" + JSSHOP.shared.utf8_encode(theAxObj.q);

pUrl = theAxObj.ur + tmpQstr;
pUrl = pUrl.replace("index.php", "");
cpUrl = pUrl.replace("admin/", "");
pUrl = cpUrl;
       var oReq = JSSHOP.ajax.createXMLHTTPObject();
	 //  oReq.setRequestHeader("Content-Type", "text/html; charset=iso-8859-2");
	 tUTA = JSSHOP.shared.urlToArray(pUrl);


	   if(oReq == false) {

            theCB(theNAxObj);
	  } else {

        oReq.onreadystatechange = function() {
            if (oReq.readyState == 4) {
			//  alert("oReq.readyState == 4: " + oReq.responseText);
                JSSHOP.ajax.doRespConstruct(theAxObj, oReq.responseText);

            }
        }
        oReq.onerror = function() {
	  // theNAxObj.st = "error";
        // theNAxObj.rs = "error: " + oReq;
        alert("yikes, we have a connection problem..." + oReq);
        }
        apUrl = pUrl.replace("index.php", "");
        bUrl = apUrl.replace("admin/", "");
        pUrl = bUrl;

        oReq.open("GET", pUrl, true);
 	  oReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=ISO-8859-1');

        picr = oReq.send(null);
	   }
};



// prepare the request
JSSHOP.ajax.doRequestPrep = function(tmppArrDRP) {

tmppNArrDRP = null;
tmppNArrDRP = {};
tmppNArrDRP = tmppArrDRP;

if(tmppArrDRP.ls == "n") {
// alert("tmppArrDRP.ls ==  no");
JSSHOP.ajax.doNurAjaxPipe(tmppArrDRP);
} else {
tLSStr = getNuLclStrg(tmppArrDRP.ls, tmppArrDRP.cb, "noQvalue");
if(tLSStr == "noQvalue") {
// alert("tLSStr ==  noQvalue");
JSSHOP.ajax.doNurAjaxPipe(tmppArrDRP);
} else {
tmppNArrDRP.rs =  tLSStr;
tmppNArrDRP.st = "saved";
// alert("getNuLclStrg: " + tLSStr);
// alert("tmppNArrDRP.st = saved");

JSSHOP.ajax.doNuResponse(tmppNArrDRP);
}  // tLSStr not noQvalue
} // ls is not "n";

};


JSSHOP.ajax.doNuGenAjaxPost = function(tFormName, tNameValArr, tUrl, tMethdType, tCB) {
try {
    var formData = new FormData(document.forms[tFormName]);
    for (var i = 0; i < tNameValArr.length; i++) {
        formData.append(tNameValArr[i].t, tNameValArr[i].v);
        if(document.getElementById(tNameValArr[i].t)) {
            document.getElementById(tNameValArr[i].t).value = tNameValArr[i].v;
        }
    }
    var xhr = new XMLHttpRequest();
    xhr.open(tMethdType, tUrl, true);
    xhr.onreadystatechange = function() {
        console.log("doNuGenAjaxPost: " + xhr.responseText);
}


xhr.onload = function(e) {
currVRPCLIresp = xhr.responseText;
tCB(currVRPCLIresp);
};

xhr.onerror = function(e) {
JSSHOP.ui.popAndFillLbox("doNuGenAjaxPost.ERROR: <br>" + e);
};
xhr.send(formData);
if (xhr.status != 200) {
return '';
} else {
    JSSHOP.ui.popAndFillLbox("doNuGenAjaxPost.status: " + xhr.responseText);
// return xhr.responseText;
}
} catch(e) {
    alert("doNuGenAjaxPost: " + e);
}
};



JSSHOP.ajax.doGenAjaxPost = function(tNameValArr, tUrl, tMethdType, tCB) {
try {
    var formData = new FormData(document.forms.do);
    for (var i = 0; i < tNameValArr.length; i++) {
        formData.append(tNameValArr[i].t, tNameValArr[i].v);
        if(document.getElementById(tNameValArr[i].t)) {
            document.getElementById(tNameValArr[i].t).value = tNameValArr[i].v;
        }
    }
    var xhr = new XMLHttpRequest();
    xhr.open(tMethdType, tUrl, true);
    xhr.onreadystatechange = function() {

        console.log("doNuAjaxPost: " + xhr.responseText);

}


xhr.onload = function(e) {
currVRPCLIresp = xhr.responseText;

tCB(currVRPCLIresp);

};

xhr.onerror = function(e) {

JSSHOP.ui.popAndFillLbox("doGenAjaxPost.ERROR: <br>" + e);
};
xhr.send(formData);
if (xhr.status != 200) {
return '';
} else {
    JSSHOP.ui.popAndFillLbox("doGenAjaxPost.status: " + xhr.responseText);

// return xhr.responseText;

}
} catch(e) {
    alert("doGenAjaxPost: " + e);
}
};

// New improved version that sends minimal FormData to avoid capacity limits
JSSHOP.ajax.doNurGenAjaxPost = function(tNameValArr, tUrl, tMethdType, tCB) {
	try {
		// Create a simple FormData object with only the necessary data from tNameValArr
		var formData = new FormData();
		for (var i = 0; i < tNameValArr.length; i++) {
			formData.append(tNameValArr[i].t, tNameValArr[i].v);
			if(document.getElementById(tNameValArr[i].t)) {
				document.getElementById(tNameValArr[i].t).value = tNameValArr[i].v;
			}
		}

		var xhr = new XMLHttpRequest();
		xhr.open(tMethdType, tUrl, true);

		xhr.onreadystatechange = function() {
			console.log("doNurGenAjaxPost: " + xhr.responseText);
		}

		xhr.onload = function(e) {
			currVRPCLIresp = xhr.responseText;
			console.log("doNurGenAjaxPost.resp: " + currVRPCLIresp);
			if(tCB) {
				tCB(currVRPCLIresp);
			}
		};

		xhr.onerror = function(e) {
			console.log("doNurGenAjaxPost.ERROR: " + e);
			JSSHOP.ui.popAndFillLbox("doNurGenAjaxPost.ERROR: <br>" + e);
		};

		// Send only the minimal FormData instead of the entire form
		xhr.send(formData);

	} catch(e) {
		console.log("doNurGenAjaxPost.ERROR: " + e);
		alert("doNurGenAjaxPost: " + e);
	}
};


JSSHOP.ajax.doNuAjaxPost = function(theFval, theNAPcb) {
	try {
	// Create a simple FormData object with only the necessary data
    var formData = new FormData();
    formData.append('q', theFval);
    formData.append('t', "123");
    formData.append('f', "n");

	var xhr = new XMLHttpRequest();
	xhr.open('POST', '_p/do.php', true);
	xhr.overrideMimeType("text/plain");

	xhr.onreadystatechange = function() {
		console.log("doNuAjaxPost: " + xhr.responseText);
	}

	xhr.onload = function(e) {
		currVRPCLIresp = xhr.responseText;
		console.log("doNuAjaxPost.resp: " + currVRPCLIresp);
		if(theNAPcb) {
			theNAPcb(currVRPCLIresp);
		}
	};

	xhr.onerror = function(e) {
		console.log("doNuAjaxPost.ERROR: " + e);
		JSSHOP.ui.popAndFillLbox("doNuAjaxPost.ERROR: <br>" + e);
	};

	// Send only the minimal FormData instead of the entire form
	xhr.send(formData);

	} catch(e) {
		console.log("doNuAjaxPost.ERROR: " + e);
	}
};
//         JSSHOP.ajax.doNwstGenAjaxPost(tNGPArr, "_p/fileCnvsImg.php", "POST", fnishSvCnvsImg, 30000);

// New improved version with enhanced error handling and timeout management
JSSHOP.ajax.doNwstGenAjaxPost = function(tNameValArr, tUrl, tMethdType, tCB, timeout) {
	try {
		// Create a simple FormData object with only the necessary data from tNameValArr
		var formData = new FormData();
		for (var i = 0; i < tNameValArr.length; i++) {
			formData.append(tNameValArr[i].t, tNameValArr[i].v);
			if(document.getElementById(tNameValArr[i].t)) {
				document.getElementById(tNameValArr[i].t).value = tNameValArr[i].v;
			}
		}

		var xhr = new XMLHttpRequest();
		xhr.open(tMethdType, tUrl, true);

		// Set timeout if provided (default 30 seconds)
		xhr.timeout = timeout || 30000;

		xhr.onreadystatechange = function() {
			console.log("doNwstGenAjaxPost: " + xhr.responseText);
		}

		xhr.onload = function(e) {
			currVRPCLIresp = xhr.responseText;
			console.log("doNwstGenAjaxPost.resp: " + currVRPCLIresp);
			if(tCB) {
				tCB(currVRPCLIresp);
			}
		};

		xhr.onerror = function(e) {
			console.log("doNwstGenAjaxPost.ERROR: " + e);
			JSSHOP.ui.popAndFillLbox("doNwstGenAjaxPost.ERROR: <br>" + e);
		};

		xhr.ontimeout = function(e) {
			console.log("doNwstGenAjaxPost.TIMEOUT: Request timed out");
			JSSHOP.ui.popAndFillLbox("doNwstGenAjaxPost.TIMEOUT: Request timed out after " + (timeout || 30000) + "ms");
		};

		// Send only the minimal FormData instead of the entire form
		xhr.send(formData);

	} catch(e) {
		console.log("doNwstGenAjaxPost.ERROR: " + e);
		alert("doNwstGenAjaxPost: " + e);
	}
};

// New improved version that sends minimal FormData to avoid capacity limits
JSSHOP.ajax.doNurAjaxPost = function(theFval, theNAPcb) {
	try {
	// Create a simple FormData object with only the necessary data
    var formData = new FormData();
    formData.append('q', theFval);
    formData.append('t', "123");
    formData.append('f', "n");

	var xhr = new XMLHttpRequest();
	xhr.open('POST', '_p/do.php', true);
	xhr.overrideMimeType("text/plain");

	xhr.onreadystatechange = function() {
		console.log("doNurAjaxPost: " + xhr.responseText);
	}

	xhr.onload = function(e) {
		currVRPCLIresp = xhr.responseText;
		console.log("doNurAjaxPost.resp: " + currVRPCLIresp);
		if(theNAPcb) {
			theNAPcb(currVRPCLIresp);
		}
	};

	xhr.onerror = function(e) {
		console.log("doNurAjaxPost.ERROR: " + e);
		JSSHOP.ui.popAndFillLbox("doNurAjaxPost.ERROR: <br>" + e);
	};

	// Send only the minimal FormData instead of the entire form
	xhr.send(formData);

	} catch(e) {
		console.log("doNurAjaxPost.ERROR: " + e);
	}
};



JSSHOP.ajax.xdoNuAjaxPipe = function(theElem,apUrl,tmpCB) {

    cpUrl = pUrl.replace("index.php", "");
      apUrl = cpUrl.replace("admin/", "");

    try {
       var oReq = JSSHOP.ajax.createXMLHTTPObject();
	 tUTA = JSSHOP.shared.urlToArray(cpUrl);
	   if(oReq == false) {
               tmpCB(theElem,"Error",tUTA);

	  } else {

        oReq.onreadystatechange = function() {
            if (oReq.readyState == 4) {
 			//  return oReq.responseText;
		  if(theElem == "give") {  }
                //     tCleanForJSON = oReq.responseText;
            tCleanForJSON = oReq.responseText.replace(/\\(.)/mg, "$1");
               tmpCB(theElem,tCleanForJSON,tUTA);


            }
        }
        oReq.onerror = function() {
             alert("yikes, we have a connection problem...");

        }
        bpUrl = apUrl.replace("index.php", "");
        cpUrl = bpUrl.replace("admin/", "");
        oReq.open("GET", cpUrl, true);
  	  oReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded;charset=ISO-8859-1');
        picr = oReq.send(null);
	   }
        } catch (e) {
		alert("doNuAjaxPipe: " + e);
               tmpCB(theElem,"Error: " + e,tUTA);
    	  }
};

JSSHOP.ajax.doAjaxPipe = function(pUrl,tmpCB) {
    try {
       JSSHOP.ajax.doNuAjaxPipe(null,pUrl,tmpCB);
        } catch (e) {
        JSSHOP.logJSerror(e, arguments, "JSSHOP.ajax.doAjaxPipe");
    	  }
};

JSSHOP.ajax.prepAjaxSbmt = function(tmpBtn, oFormElement,tmpCB) {
	try {
       tmpBtn.className="cls_button cls_button-medium cls_button-disabled";
       tmpBtn.disabled=true;
       JSSHOP.ajax.doAjaxSbmt(oFormElement,tmpCB);
        } catch (e) {
        JSSHOP.logJSerror(e, arguments, "JSSHOP.ajax.prepAjaxSbmt");
    		}
};

JSSHOP.ajax.prepAjaxPipe = function(tmpBtn,pUrl,tmpCB) {
	try {
	  if(tmpBtn != null) {
       // tmpBtn.className="cls_button cls_button-medium cls_button-disabled";
       tmpBtn.disabled=true;
	 }
       JSSHOP.ajax.doNuAjaxPipe(tmpBtn,pUrl,tmpCB);
        } catch (e) {
        JSSHOP.logJSerror(e, arguments, "JSSHOP.ajax.prepAjaxPipe");
    	  }
};

JSSHOP.ajax.doAjaxSbmt = function(oFormElement,tmpCB) {
	try {
    if (!oFormElement.action) {
        JSSHOP.logJSerror(e, arguments, "JSSHOP.ajax.doAjaxSbmt: !! No form action set !!");
        return;
    }
    var oReq = JSSHOP.ajax.createXMLHTTPObject();
        var oField, sFieldType, nFile, sSearch;
        for (var nItem = 0; nItem < oFormElement.elements.length; nItem++) {
            oField = oFormElement.elements[nItem];
            if (!oField.getAttribute("name")) {
                continue;
            }
            sFieldType = oField.nodeName.toUpperCase() === "INPUT" ? oField.getAttribute("type").toUpperCase() : "TEXT";
            if (sFieldType === "FILE") {
                for (nFile = 0; nFile < oField.files.length; sSearch += "&" + escape(oField.name) + "=" + escape(oField.files[nFile++].name));
            } else if ((sFieldType !== "RADIO" && sFieldType !== "CHECKBOX") || oField.checked) {
                sSearch += "&" + escape(oField.name) + "=" + escape(oField.value);
            }
        }
        oReq.onreadystatechange = function() {
            if (oReq.readyState == 4) {
               tmpCB(oReq.responseText,oFormElement.elements);
            }
        }
        oReq.open(oFormElement.method, oFormElement.action + "?" + sSearch, true);
        oReq.send(null);
        } catch (e) {
        JSSHOP.logJSerror(e, arguments, "JSSHOP.ajax.doAjaxSbmt");
    	  }
};



JSSHOP.ajax.mDynfnishCntLoad = function(a, b) {
    console.log("JSSHOP.ajax.mDynfnishCntLoad: " + a + " : " + b);
scrollToElement("dvHdr");
window.scrollTo(0,0);
setTimeout("mfnishCntLoad()", 500);
};

JSSHOP.ajax.finishDynCntLoad = function(a,b,c) {
try {
stopNuSpin("includedContent");
// ajxspinner.stop();
// spinner.stop();
document.getElementById(a).innerHTML = b;
// document.getElementById("dvSpinnerIcn").innerHTML = "<a href=\"javascript:JSSHOP.ui.doDefCBBCC('ahHomeIcon', null, document.location.href='index.html?&cid=' + cid);\"><i class=\"material-icons\" style=\"margin-top: 5px;font-size:27px;margin-right:6px;\" alt=\"home\" title=\"home\">&#59530;</i></a>";
// doWinResizeE(); // all things changed on window resize
// setTimeout("mfnishCntLoad()", 500);
if(content == "noQvalue") {
JSSHOP.loadScript("js/app/" + jscssprefix + "x_" + pid + ".js", JSSHOP.ajax.mDynfnishCntLoad,"js");
} else {
alert("finishDynCntLoad: " + content);

JSSHOP.loadScript("js/app/" + jscssprefix + "x_content.js", JSSHOP.ajax.mDynfnishCntLoad,"js");

}
} catch(e) {
    alert("JSSHOP.ajax.mDynfnishCntLoad.error: " + a + " : " + e);
    }
};


JSSHOP.ajax.doDynMainContent = function() {
try {

// alert("JSSHOP.ajax.doDynMainContent: " + content)
if(content == "noQvalue") {

// spinTextDiv.innerHTML = " ... ";
fCa = getFArr();
// this should be fixed. authentication.
if((pid.indexOf("edit-") != -1)  && ((quid == 0) || (quid == "noQvalue"))) {
// page requires user login
 JSSHOP.loadScript("js/app/" + jscssprefix + "x_login.js", JSSHOP.checkLoader,"js");
 JSSHOP.ajax.doNuAjaxPipe("includedContent", "tplates/login.html", JSSHOP.ajax.finishDynCntLoad);

} else {
if(pid == "aa-contactus") {
// currIContent = "no";
}
if(currIContent == "y") {
    tdcHref = document.location.href;
    if(tdcHref.indexOf("admin/") != -1) {
        JSSHOP.ajax.doNuAjaxPipe("includedContent", "admin/tplates/" + pid + ".html", JSSHOP.ajax.finishDynCntLoad);
    } else {
JSSHOP.ajax.doNuAjaxPipe("includedContent", "tplates/" + pid + ".html", JSSHOP.ajax.finishDynCntLoad);
}
} else {
finishCntLoad("lightbox_content","loading...","nada");
}
}

} else {
alert("includedContent: " + content )
JSSHOP.ajax.doNuAjaxPipe("includedContent", "content/" + content + ".html", JSSHOP.ajax.finishDynCntLoad);
}
} catch(e) {
alert("JSSHOP.ajax.doDynMainContent: "  + e);
}

};

/*
JSSHOP.ajax.doAjaxGVals = function(tDlMStr, tDlMUstr) {
content = "noQvalue";
currUrlArr = null;
currUrlArr = "";
currUrlArr = {};
pid = "index_main";
currUrlArr = "";
currUrlArr = "";
currUrlArr = {};
try {


if(tDlMStr == pid) {
tDlMObj = JSSHOP.shared.urlToArray(document.location.href);
} else if(tDlMStr == "noQvalue") {
tDlMObj = JSSHOP.shared.urlToArray(document.location.href);
} else {
tDlMObj = JSSHOP.shared.strToObj(tDlMUstr);

}
for(var aRsRgkey in tDlMObj) {
dcdedRk = decodeURIComponent(tDlMObj[aRsRgkey]);
$aRsRgkey = dcdedRk;
window[aRsRgkey] = dcdedRk;
currUrlArr[aRsRgkey] = dcdedRk;
// currUrlArr[aRsRgkey] = decodeURIComponent(JSSHOP.shared.encode_utf8(tDlMObj[aRsRgkey]));
}

if(tDlMObj.pid) {
pid = tDlMObj.pid;
}
if(tDlMObj.content) {
alert("content: " + content);
content = tDlMObj.content;
currUrlArr["content"] = content;
}

if(currUrlArr.mk){
currPUrlObj.mk = currUrlArr.mk;
currPUrlObj.make = currUrlArr.make;
}
if(currUrlArr.si){
currPUrlObj.si = currUrlArr.si;
currPUrlObj.series = currUrlArr.series;
}
if(currUrlArr.md){
currPUrlObj.md = currUrlArr.md;
currPUrlObj.model = currUrlArr.model;
} else {
if(currUrlArr.si){
currPUrlObj.md = currUrlArr.si;
currPUrlObj.model = currUrlArr.series;
}
}
if(currUrlArr.prti){
currPUrlObj.prti = currUrlArr.prti;
currPUrlObj.part = currUrlArr.part;
}
if(currUrlArr.y){
currPUrlObj.y = currUrlArr.y;
}
switch(tDlMStr) {
case "aa-add-trip-pickup":
currUrlArr.ttid = undefined;
delete currUrlArr["ttid"];
currUrlArr.ttype = "pickup";
pid = "aa-add-trip";
break;
case "aa-edit-trip":
pid = "aa-edit-trip";
break;
case "aa-edit-trips":
pid = "aa-edit-trips";
break;
default:
break;
}
JSSHOP.ajax.doDynMainContent();
} catch(e) {
alert("JSSHOP.ajax.doAjaxGVals: " + e);
}
}
*/



function eindex(tDlMStr, tDlMUstr) {
try {
    imgPLicon.src = "images/trans.gif";
    dvPartLicon.innerHTML = "";
    dvPartLinks.innerHTML = "";
// 	includedContent.innerHTML = "";
/*
currTglBxsObj = null;
currTglBxsObj = "";
currTglBxsObj = {};
*/
JSSHOP.ui.showHideElement("navbarSupportedContent", "hide");
doNuSpinSet("includedContent", "big", null, "noQvalue");
if((pid.indexOf("edit-") != -1)  && ((quid == 0) || (quid == "noQvalue"))) {
document.location.href = "index.html?pid=login&cid=" + cid;
    //document.getElementById("ifrmDynCtt").src = "eindex.html?pid=login&cid=" + cid;
// currIsAjaxed = "y";
} else {
currIsAjaxed = "y";
document.getElementById("ifrmDynCtt").src = "eindex.html?" + tDlMUstr;
if(isJApp == "yes") {
    app.doscrllVwToTop();
}
}
} catch(e) {
alert("eindex: " + e);
}
}


function doMLinkM(tMDlMStr, tMDlMUstr) {
    eindex(tMDlMStr, tMDlMUstr)
}




/*
* hookloader functions
*/

JSSHOP.hookloader.hooks = {};
JSSHOP.hookloader.register = function(name, callback) {
    if('undefined' == typeof(JSSHOP.hookloader.hooks[name]))
    JSSHOP.hookloader.hooks[name] = [];
    JSSHOP.hookloader.hooks[name].push(callback);
  };

JSSHOP.hookloader.call = function(name, targuments) {
    if('undefined' != typeof(JSSHOP.hookloader.hooks[name]))
      for(i = 0; i < JSSHOP.hookloader.hooks[name].length; ++i)
        if( true != JSSHOP.hookloader.hooks[name][i]( targuments )) { break; }
};



function JSSuiSetRecntBx() {
tSPPatvRstr = JSSHOP.ui.getAtvtyRndr(currRcntActArr, "y", 5);
document.getElementById("dvTglRcnt").innerHTML = tSPPatvRstr;
}




// ui functions



JSSHOP.ui.doEditorKeys = function(tKeyTipe) {
    try {
    switch(tKeyTipe) {
        case "bold":
            document.execCommand('bold',false,null);
            break;
        case "italic":
            document.execCommand('italic',false,null);
            break;
        case "underline":
            document.execCommand('underline',false,null);
            break;
        case "insertunorderedlist":
            alert("insertunorderedlist");
            document.execCommand('insertUnorderedList',false,null);
            break;
        case "insertorderedlist":
            document.execCommand('insertOrderedList',false,null);
            break;
        case "indent":
            document.execCommand('indent',false,null);
            break;
        case "outdent":
            document.execCommand('outdent',false,null);
            break;
        case "createlink":
            document.execCommand('createlink',true,"harold");
            break;
        case "unlink":
            document.execCommand('unlink',false,null);
            break;
        case "insertimage":
            document.execCommand('insertimage',true,null);
            break;
        case "justifyleft":
            document.execCommand('justifyleft',false,null);
            break;
        case "justifycenter":
            document.execCommand('justifycenter',false,null);
            break;
        case "justifyright":
            document.execCommand('justifyright',false,null);
            break;
        case "justifyfull":
            document.execCommand('justifyfull',false,null);
            break;
        case "undo":
            document.execCommand('undo',false,null);
            break;
        case "redo":
            document.execCommand('redo',false,null);
            break;
        default:
            break;
    }
    } catch (e) {
        JSSHOP.logJSerror(e, arguments, "JSSHOP.ui.doEditorKeys");
    }
};

function setCurrUsrsArr(tCUAstrA, tCUAstrB, tCUAstrC) {
    try {
    currPstsUsrArr = JSON.parse(tCUAstrB);
    JSSHOP.ui.getPickerDiv("users");
    } catch (e) {
        JSSHOP.logJSerror(e, arguments, "setCurrUsrsArr");
    }
}

function setCurrPrpsArr(tCPAstrA, tCPAstrB, tCPAstrC) {
    try {
        currPstsPrpsArr = null;

        currPstsPrpsArr = "";
        currPstsPrpsArr = [];

    currPstsPrpsArr = JSON.parse(tCPAstrB);
    JSSHOP.ui.getPickerDiv("props");
    } catch (e) {
        JSSHOP.logJSerror(e, arguments, "setCurrPrpsArr");
    }
}

function setCurrPrpsArrForModal(tCPAstrA, tCPAstrB, tCPAstrC) {
    try {
        currPstsPrpsArr = null;
        currPstsPrpsArr = [];
        currPstsPrpsArr = JSON.parse(tCPAstrB);
        // Update the properties tab content
        var propertiesTab = document.getElementById('properties');
        if (propertiesTab) {
            propertiesTab.innerHTML = JSSHOP.ui.getPickerStr("props", false);
        }
    } catch (e) {
        JSSHOP.logJSerror(e, arguments, "setCurrPrpsArrForModal");
    }
}

JSSHOP.ui.setPickerVal = function(tPVelem, tPVtype, tPVixd, tPVid) {
//  currSlctdUsrArr  currSlctdPrpsArr
    try {
    switch(tPVtype) {
        case "users":
            tSUAOkey = "ob" + currPstsUsrArr[tPVixd]._id;

            // currSlctdUsrArr = [];
            // currSlctdUsrArr.push(currPstsUsrArr[tPVid]);
            if(tPVelem.className == "crsrPointer bkgdClrWhite") {
            tShrtSlctdUObj = {};
            tFllUsrObj = currPstsUsrArr[tPVixd];
            tShrtSlctdUObj["_id"] = tFllUsrObj._id;
            tShrtSlctdUObj["u_name"] = tFllUsrObj.u_fullname;
            tShrtSlctdUObj["u_fullname"] = tFllUsrObj.u_fullname;
            tShrtSlctdUObj["u_region"] = tFllUsrObj.u_region;
            tShrtSlctdUObj["u_icon"] = tFllUsrObj.u_icon;
            tShrtSlctdUObj["u_cat"] = tFllUsrObj.u_cat;
            tShrtSlctdUObj["u_header"] = tFllUsrObj.u_header;
            tShrtSlctdUObj["u_loclat"] = tFllUsrObj.u_loclat;
            tShrtSlctdUObj["u_loclng"] = tFllUsrObj.u_loclng;
            currSlctdUsrObj[tSUAOkey] = tShrtSlctdUObj;
            JSSHOP.ui.setCBBClickClr(tPVelem, "bkgdClrDlg", "crsrPointer bkgdClrAtch", function() { void(0); });
            } else {
             currSlctdUsrObj[tSUAOkey] = null;
            delete currSlctdUsrObj[tSUAOkey];
            JSSHOP.ui.setCBBClickClr(tPVelem, "bkgdClrDlg", "crsrPointer bkgdClrWhite", function() { void(0); });

            }
            break;
        case "props":
            tSPAOkey = "ob" + currPstsPrpsArr[tPVixd]._id;
            if(tPVelem.className == "crsrPointer bkgdClrWhite") {
                tFllPrpsObj = currPstsPrpsArr[tPVixd];
                tShrtSlctdPObj = {};
                tShrtSlctdPObj["_id"] = tFllPrpsObj._id;
                tShrtSlctdPObj["ptitle"] = tFllPrpsObj.pd_prptitle;
                tShrtSlctdPObj["pdesc"] = tFllPrpsObj.pd_prpdesc;
                tShrtSlctdPObj["ptype"] = tFllPrpsObj.ptype;
                tShrtSlctdPObj["stype"] = tFllPrpsObj.stype;
                tShrtSlctdPObj["pimage"] = tFllPrpsObj.pimage;
                tShrtSlctdPObj["price"] = tFllPrpsObj.price;
                tShrtSlctdPObj["ploclat"] = tFllPrpsObj.ploclat;
                tShrtSlctdPObj["ploclng"] = tFllPrpsObj.ploclng;
                // tShrtSlctdPObj["pdesc"] = tFllPrpsObj.pdesc;
                tShrtSlctdPObj["location"] = tFllPrpsObj.location;
                tShrtSlctdPObj["city"] = tFllPrpsObj.city;
                tShrtSlctdPObj["state"] = tFllPrpsObj.state;
                currSlctdPrpsObj[tSPAOkey] = tShrtSlctdPObj;
                JSSHOP.ui.setCBBClickClr(tPVelem, "bkgdClrDlg", "crsrPointer bkgdClrAtch", function() { void(0); });
            } else {
            currSlctdPrpsObj[tSPAOkey] = null;
            delete currSlctdPrpsObj[tSPAOkey];
            JSSHOP.ui.setCBBClickClr(tPVelem, "bkgdClrDlg", "crsrPointer bkgdClrWhite", function() { void(0); });
            }

            // currSlctdPrpsArr = [];

            break;
            default:
            break;
    }
    } catch (e) {
        alert("setPickerVal: " + e);
        JSSHOP.logJSerror(e, arguments, "JSSHOP.ui.setPickerVal");
    }
};

JSSHOP.ui.getPickerStr = function(tPDtype, includeButtons) {
    if (includeButtons === undefined) includeButtons = true;
    tGPSstr = "<div style=\"padding: 1px;max-height:300px;overflow:auto;\"> ";
    try {
    switch(tPDtype) {
        case "users":
         for(var i = 0; i < currPstsUsrArr.length; i++) {
            if(currSlctdUsrObj["ob" + currPstsUsrArr[i]["_id"]]) {
                tGPSstr += "<div class=\"crsrPointer bkgdClrDlg\" onclick=\"JSSHOP.ui.setPickerVal(this, 'users','" + i + "','" + currPstsUsrArr[i]["_id"]  + "');\">" + currPstsUsrArr[i].u_fullname + "</div>";
            } else {
            tGPSstr += "<div class=\"crsrPointer bkgdClrWhite\" onclick=\"JSSHOP.ui.setPickerVal(this, 'users','" + i + "','" + currPstsUsrArr[i]["_id"]  + "');\">" + currPstsUsrArr[i].u_fullname + "</div>";
            }
        }
        break;
        case "props":
            /*
        for(var i = 0; i < currPstsPrpsArr.length; i++) {
            decdPttleSA = decodeURIComponent(currPstsPrpsArr[i].pd_prptitle);

            lzdPrpTtl = LZString.decompressFromEncodedURIComponent(decdPttleSA);

            if(currSlctdPrpsObj["ob" + currPstsPrpsArr[i]["_id"]]) {
                tGPSstr += "<div class=\"crsrPointer bkgdClrDlg\" onclick=\"JSSHOP.ui.setPickerVal(this, 'props','" + i +  "','" + currPstsPrpsArr[i]["_id"] + "');\">" + lzdPrpTtl + "</div>";
            } else {
            tGPSstr += "<div class=\"crsrPointer bkgdClrWhite\" onclick=\"JSSHOP.ui.setPickerVal(this, 'props','" + i +  "','" + currPstsPrpsArr[i]["_id"] + "');\">" + lzdPrpTtl + "</div>";
            }
            tGPSstr += "<hr>";
        }
        */
        // create a more complex property picker with images and descs
        for(var i = 0; i < currPstsPrpsArr.length; i++) {
            decdPttleSA = decodeURIComponent(currPstsPrpsArr[i].pd_prptitle);
            lzdPrpTtl = LZString.decompressFromEncodedURIComponent(decdPttleSA);
            decdPrpDescSA = decodeURIComponent(currPstsPrpsArr[i].pd_prpdesc);
            lzdPrpDesc = LZString.decompressFromEncodedURIComponent(decdPrpDescSA);
            if(currSlctdPrpsObj["ob" + currPstsPrpsArr[i]["_id"]]) {
                tGPSstr += "<div class=\"crsrPointer bkgdClrDlg\" style=\"border: 1px solid #ccc;padding:5px;margin-bottom:5px;\" onclick=\"JSSHOP.ui.setPickerVal(this, 'props','" + i +  "','" + currPstsPrpsArr[i]["_id"] + "');\">";
            } else {
            tGPSstr += "<div class=\"crsrPointer bkgdClrWhite\" style=\"border: 1px solid #ccc;padding:5px;margin-bottom:5px;\" onclick=\"JSSHOP.ui.setPickerVal(this, 'props','" + i +  "','" + currPstsPrpsArr[i]["_id"] + "');\">";
            }
            // wrap the image and title, a short 200 char desc, and price in a div with border and make it look like a list with the image on the left and the text on the right
            tGPSstr += "<div style=\"float:left;width:30%;max-width:100px;margin-right:10px;\">";
            if(currPstsPrpsArr[i].pimage) {
                tGPSstr += "<img src=\"images/property/s_thumb" + currPstsPrpsArr[i].pimage + "\" alt=\"" + lzdPrpTtl + "\" title=\"" + lzdPrpTtl + "\" style=\"max-width:100%;height:auto;\" />";
            } else {
                tGPSstr += "<img src=\"images/default.png\" alt=\"" + lzdPrpTtl + "\" title=\"" + lzdPrpTtl + "\" style=\"max-width:100%;height:auto;\" />";
            }
            tGPSstr += "</div>"; // end of image div
            tGPSstr += "<div style=\"float:left;width:65%;\">";
            tGPSstr +=  "<span class=\"txtBold txtClrHdr\">" + lzdPrpTtl + "</span>";
            tGPSstr += "<br>ID: " + currPstsPrpsArr[i]["_id"] + "   -  " + currPstsPrpsArr[i].state;
            tGPSstr += "<br>" + stxt[18] +": " + currPstsPrpsArr[i].price;
            tGPSstr += "</div>"; // end of text div
            tGPSstr += "<div style=\"clear:both;\"></div>";
            tGPSstr += "</div>"; // end of property div
        }
        // wrap it all in a div that has a max height and scrolls
        tAGPSstr = "<div style=\"max-height:400px;overflow-y:auto;\">" + tGPSstr + "</div>";
        tGPSstr = tAGPSstr;
        break;
        default:
        break;
    }
tGPSstr += "</div>";
if (includeButtons) {
    tGPSstr += "<br>";
    tGPSstr += "<div style=\"margin: 10px\">";
    tGPSstr += "<span style=\"\" class=\"cls_button cls_button-medium bkgdClrHdr txtClrWhite\" onclick=\"JSSHOP.ui.closeLbox();JSSHOP.ads.trnsltPTpObj();\">OK</span>";
    tGPSstr += "&nbsp;&nbsp;&nbsp;<span style=\"\" class=\"cls_button cls_button-medium  bkgdClrGrey txtClrHdr\" onclick=\"JSSHOP.ui.closeLbox();\">Cancel</span>";
    tGPSstr += "</div>";
}
    return tGPSstr;
    } catch (e) {
        JSSHOP.logJSerror(e, arguments, "JSSHOP.ui.getPickerStr");
        alert("getPickerStr: " + e);
        return tGPSstr;
    }
    // add ok and cancel buttons

};

JSSHOP.ads.getEdtrPrpLstStr = function(tPrpDtarr, style = 'modern') {
    let tEdtrPrpsStr = "";
    let gradientStyle = "";

    // Define styles
    switch(style) {
        case 'classic':
            gradientStyle = "background: linear-gradient(to bottom, #007bff, #ffffff);";
            break;
        case 'vibrant':
            gradientStyle = "background: linear-gradient(to bottom right, #ff4081, #ff1744, #ffeb3b);";
            break;
        default:
            gradientStyle = "background: linear-gradient(to right, #00bcd4, #2196f3, #3f51b5);";
    }

    // Start flyer container - vertical list
    tEdtrPrpsStr += `<div style="${gradientStyle} width: 100%; min-height: 430px; position: relative; padding: 10px; box-sizing: border-box;" id="dvTMCdemo">`;

    // Header - larger text for mobile readability
    tEdtrPrpsStr += `<div style="text-align: center; margin-bottom: 10px;">`;
    tEdtrPrpsStr += `<h1 style="color: white; font-weight: bold; font-size: 48px; margin: 0; line-height: 1.2;">${stxt[10]}... ${stxt[10]}...</h1>`;
    tEdtrPrpsStr += `<p style="color: white; font-size: 24px; margin: 5px 0 0 0; line-height: 1.3;">${stxt[40]}... ${stxt[40]}... ${stxt[40]}...</p>`;
    tEdtrPrpsStr += '</div>';

    // Properties container - vertical list
    tEdtrPrpsStr += '<div style="display: block; margin-bottom: 10px;">';
    for(let i = 0; i < tPrpDtarr.length; i++) {
        let prop = tPrpDtarr[i];
        let imgSrc = (prop.pimage && prop.pimage !== "noQvalue") ? `admin/property/${prop.pimage}` : "images/misc/example_thumb.png";
        let priceStr = prop.price ? `<span style="color:#2196f3;font-weight:bold;font-size:20px;">${prop.price} ?</span>` : "";
        let titleStr = prop.ptitle ? `<span style="font-size:20px;font-weight:bold;color:#333;">${prop.ptitle}</span>` : "";
        let cityStr = prop.city ? `<span style="color:#666;">${prop.city}</span>` : "";
        let stateStr = prop.state ? `<span style="color:#999;">${prop.state}</span>` : "";
        let descStr = prop.pdesc ? `<div style="color:#444;font-size:15px;">${prop.pdesc}</div>` : "";

        tEdtrPrpsStr += `
        <div style="display:flex;align-items:center; background:rgba(255,255,255,0.95); border-radius:12px; margin:10px 0; box-shadow:0 2px 8px rgba(0,0,0,0.07); padding:10px;">
            <div style="flex:0 0 120px; text-align:center;">
                <img src="${imgSrc}" alt="Property" style="width:110px; height:80px; object-fit:cover; border-radius:8px;">
            </div>
            <div style="flex:1; padding-left:16px;">
                ${titleStr}<br>
                ${cityStr} ${stateStr}<br>
                ${priceStr}
                ${descStr}
            </div>
        </div>
        `;
    }
    tEdtrPrpsStr += '<div style="clear: both;"></div>';
    tEdtrPrpsStr += '</div>';

    // Seller info - positioned at bottom right
    tEdtrPrpsStr += '<div style="background: rgba(255,255,255,0.9); border-radius: 10px; padding: 15px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); text-align: center; margin-top:20px;">';
    tEdtrPrpsStr += `<h5 style="margin: 0 0 10px 0; font-size: 16px;">${stxt[912]}...</h5>`;
    tEdtrPrpsStr += '<div style="display: flex; align-items: center; justify-content:center;">';
    tEdtrPrpsStr += `<img src="images/user/${u_icon.value}" alt="Agent" style="width: 50px; height: 50px; border-radius: 50%; margin-right: 10px;">`;
    tEdtrPrpsStr += '<div>';
    tEdtrPrpsStr += `<p style="margin: 0; font-weight: bold; font-size: 14px;">${u_fullname.value}</p>`;
    tEdtrPrpsStr += `<p style="margin: 0; color: #666; font-size: 12px;">${u_email.value}</p>`;
    tEdtrPrpsStr += '</div>';
    tEdtrPrpsStr += '</div>';
    tEdtrPrpsStr += '</div>';

    tEdtrPrpsStr += '</div>'; // end of flyer container

    return tEdtrPrpsStr;
};

JSSHOP.ui.getPickerDiv = function(tPDtype) {
    try {
    if(tPDtype == "inpMapPstCntnt") {
        if(document.getElementById("inpMapPstCntnt")) {
            tPDtype = document.getElementById("inpMapPstCntnt").value;
        } else {
            tPDtype = "props";
        }
    }
    switch(tPDtype) {
        case "users":
            if(currPstsUsrArr[0]) {
                JSSHOP.ui.popNurFillLbox(JSSHOP.ui.getPickerStr(tPDtype), "&#xe5cd;", "User List");
            } else {
                tmpDOs = {};
                tmpDOs["ws"] = "where _id > ?";
                tmpDOs["wa"] = [0];
                tmpDOs["l"] = 12;

                oi = getNuDBFnvp("quser",5,null,tmpDOs);
                currRQtable = "quser";
                currRQstr = oi["rq"];

                // alert("edit users currRQstr: " + currRQstr);
                doQComm(oi["rq"], null, "setCurrUsrsArr");
            }
            break;
        case "props":
            if(currPstsPrpsArr[0]) {
                // JSSHOP.ui.popFillObox(JSSHOP.ui.getPickerStr(tPDtype), "&#x1F3D9;", stxt[635] + ": " + svftObj["posttype"][document.getElementById("p_ptype").value], "yes", "yes");
                JSSHOP.ui.popNurFillLbox(JSSHOP.ui.getPickerStr(tPDtype), "&#x1F3D9;", stxt[635] + ": " + svftObj["posttype"][document.getElementById("p_ptype").value]);
            } else {
                /*
                tmpDOys = {};
                tmpDOys["ws"] = "where _id > ?";
                tmpDOys["wa"] = [0];
                tmpDOys["l"] = 12;
                oiy = getNuDBFnvp("property",5,null,tmpDOys);
                */
               newSCPArrQstr = "select p.*, u.u_icon, u.u_fullname, pd.pd_prptitle, pd.pd_prpdesc from property p, quser u, propdescs pd where p._id > 0 and p.uid = u._id and pd.pd_prpid = p._id and (pd.pd_prptlng = '" +  usrlang + "' or pd.pd_prptlng = '" + deflang + "') order by rand() limit 20";

                // use statement to get title and descs from propdescs table
                doQComm(newSCPArrQstr, null, "setCurrPrpsArr");
            }
            break;
            default:
            break;
    }
    } catch (e) {
        JSSHOP.logJSerror(e, arguments, "JSSHOP.ui.getPickerDiv");
    }
};


JSSHOP.ui.doNuAutoComp = function(inp, arr, dvResO) {
    console.log("doNuAutoComp: " + inp + " : " + arr + " : " + dvResO);
    tdvACres = document.getElementById(dvResO);
    if(tdvACres.className == "slider closed") {
        tdvACres.classList.toggle('closed');
    }



/*the autocomplete function takes two arguments,
the text field element and an array of possible autocompleted values:*/
var currentFocus;
/*execute a function when someone writes in the text field:*/
inp.addEventListener("input", function(e) {
    tdvACres = document.getElementById(dvResO);
    // tdvACres.classList.toggle('closed');
    tdvACres.innerHTML = "";
    var strFhtml = "";
    var a, b, i, val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) { return false;}
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);

    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if((arr[i].toUpperCase().indexOf(val.toUpperCase()) != -1) && (val.length > 1)){

      // if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*create a DIV element for each matching element:*/

        /*make the matching letters bold:*/
        strFhtml += arr[i];
        b = document.createElement("DIV");
        // b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        // b.innerHTML += arr[i].substr(val.length);
        /*insert a input field that will hold the current array item's value:*/
        // b.innerHTML += "<input type='hidden' value='" + i + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function(e) {

            /*insert the value for the autocomplete text field:*/




            /*close the list of autocompleted values,
            (or any other open lists of autocompleted values:*/
            closeAllLists();

        });


      }


    }

    tmpDVAC = document.createElement("DIV");


     tmpDVAC.innerHTML = "";
     // tmpDVAC.setAttribute("id", "dvACres");
        tmpDVAC.setAttribute("class", "acdropdown-menu");
     //  class="acdropdown-menu" style="padding-right:22px;margin-right:22px;max-height:400px;overflow:auto"
    tmpDVAC.style.maxHeight = "400px";
    tmpDVAC.style.overflow = "auto";
    tmpDVAC.style.paddingRight = "22px";
    tmpDVAC.style.marginRight = "22px";


     tmpHdrStr = "";
     for(i = 0; i < currACTblCnt; i++) {
        tmpHdrStr += "<th></th>";
     }
    tTHstr = "<tr>" + tmpHdrStr + "</tr>";
// tmpDVAC.innerHTML = strFhtml;

     astrFhtml = "<div class=\"atabler\"  style=\"margin: 0 auto;max-width:95%;\" ><table style=\"margin: 0 auto;max-width:95%;\" class=\"table table-sm table-striped table-hover txtSmall\" width=\"100%\" cellpadding=\"0px;\"  cellspacing=\"0px;\">";
    astrFhtml += "<THEAD>" + tTHstr + "</THEAD><TBODY>";
    astrFhtml += strFhtml + "</TBODY></table></div>";


     tmpDVAC.innerHTML = getTblSortStr(tTHstr,strFhtml);
    // b.innerHTML = strFhtml;
    // a.appendChild(tmpDVAC);
    tdvACres = document.getElementById(dvResO);
    tdvACres.innerHTML = "";
    // tdvACres.classList.toggle('closed');
    tdvACres.appendChild(tmpDVAC);
});
/*execute a function presses a key on the keyboard:*/
inp.addEventListener("keydown", function(e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
      increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) { //up
      /*If the arrow UP key is pressed,
      decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
        alert("enter pressed");
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
});
function addActive(x) {
  /*a function to classify an item as "active":*/
  if (!x) return false;
  /*start by removing the "active" class on all items:*/
  removeActive(x);
  if (currentFocus >= x.length) currentFocus = 0;
  if (currentFocus < 0) currentFocus = (x.length - 1);
  /*add class "autocomplete-active":*/
  x[currentFocus].classList.add("autocomplete-active");
}
function removeActive(x) {
  /*a function to remove the "active" class from all autocomplete items:*/
  for (var i = 0; i < x.length; i++) {
    x[i].classList.remove("autocomplete-active");
  }
}

/*execute a function when someone clicks in the document:*/
document.addEventListener("click", documentClickHandler);

};








function closeAllLists() {
    try {
  /*close all autocomplete lists in the document,
  except the one passed as an argument:*/
  var x = document.getElementsByClassName("acdropdown-item");
  for (var i = 0; i < x.length; i++) {

    x[i].parentNode.removeChild(x[i]);
}
var xpar = document.getElementsByClassName("acdropdown-menu");
for (var i = 0; i < xpar.length; i++) {
    xpars = xpar[i];
    xpars.parentNode.removeChild(xpars);
}
} catch (e) {

    console.log("closeAllLists.error: " + e);
    document.removeEventListener("click", documentClickHandler);

}
}

function documentClickHandler(e) {
    closeAllLists();
    // ...
  }





JSSHOP.ui.doAutoComp = function(inp, arr) {
    console.log("doAutoComp: " + inp + " : " + arr);

    tdvACres = document.getElementById("dvACres");
    if(tdvACres.className == "slider closed") {
        tdvACres.classList.toggle('closed');
    }



/*the autocomplete function takes two arguments,
the text field element and an array of possible autocompleted values:*/
var currentFocus;
/*execute a function when someone writes in the text field:*/
inp.addEventListener("input", function(e) {
    tdvACres = document.getElementById("dvACres");
    // tdvACres.classList.toggle('closed');
    tdvACres.innerHTML = "";
    var strFhtml = "";
    var a, b, i, val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) { return false;}
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);

    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if((arr[i].toUpperCase().indexOf(val.toUpperCase()) != -1) && (val.length > 1)){

      // if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*create a DIV element for each matching element:*/

        /*make the matching letters bold:*/
        strFhtml += arr[i];
        b = document.createElement("DIV");
        // b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        // b.innerHTML += arr[i].substr(val.length);
        /*insert a input field that will hold the current array item's value:*/
        // b.innerHTML += "<input type='hidden' value='" + i + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function(e) {

            /*insert the value for the autocomplete text field:*/




            /*close the list of autocompleted values,
            (or any other open lists of autocompleted values:*/
            closeAllLists();

        });


      }


    }

    tmpDVAC = document.createElement("DIV");


     tmpDVAC.innerHTML = "";
     tmpDVAC.setAttribute("id", "dvACres");
        tmpDVAC.setAttribute("class", "acdropdown-menu");
     //  class="acdropdown-menu" style="padding-right:22px;margin-right:22px;max-height:400px;overflow:auto"
    tmpDVAC.style.maxHeight = "400px";
    tmpDVAC.style.overflow = "auto";
    tmpDVAC.style.paddingRight = "22px";
    tmpDVAC.style.marginRight = "22px";


     tmpHdrStr = "";
     for(i = 0; i < currACTblCnt; i++) {
        tmpHdrStr += "<th></th>";
     }
    tTHstr = "<tr>" + tmpHdrStr + "</tr>";
// tmpDVAC.innerHTML = strFhtml;

     astrFhtml = "<div class=\"atabler\"  style=\"margin: 0 auto;max-width:95%;\" ><table style=\"margin: 0 auto;max-width:95%;\" class=\"table table-sm table-striped table-hover txtSmall\" width=\"100%\" cellpadding=\"0px;\"  cellspacing=\"0px;\">";
    astrFhtml += "<THEAD>" + tTHstr + "</THEAD><TBODY>";
    astrFhtml += strFhtml + "</TBODY></table></div>";


     tmpDVAC.innerHTML = getTblSortStr(tTHstr,strFhtml);
    // b.innerHTML = strFhtml;
    // a.appendChild(tmpDVAC);
    tdvACres = document.getElementById("dvACres");
    tdvACres.innerHTML = "";
    // tdvACres.classList.toggle('closed');
    tdvACres.appendChild(tmpDVAC);
});
/*execute a function presses a key on the keyboard:*/
inp.addEventListener("keydown", function(e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
      increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) { //up
      /*If the arrow UP key is pressed,
      decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
        alert("enter pressed");
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
});
function addActive(x) {
  /*a function to classify an item as "active":*/
  if (!x) return false;
  /*start by removing the "active" class on all items:*/
  removeActive(x);
  if (currentFocus >= x.length) currentFocus = 0;
  if (currentFocus < 0) currentFocus = (x.length - 1);
  /*add class "autocomplete-active":*/
  x[currentFocus].classList.add("autocomplete-active");
}
function removeActive(x) {
  /*a function to remove the "active" class from all autocomplete items:*/
  for (var i = 0; i < x.length; i++) {
    x[i].classList.remove("autocomplete-active");
  }
}


/*execute a function when someone clicks in the document:*/
document.addEventListener("click", documentClickHandler);

};

JSSHOP.ui.doRecntBox = function() {
tIMLStglbObj = null;
tIMLStglbObj = "";
tIMLStglbObj = JSSHOP.ui.nTglBxOb();
tIMLStglbObj["ttl"] = stxt[301]; // the toggle box title
tIMLStglbObj["dvid"] = "dvTglRcnt"; // the toggle box div id
tIMLStglbObj["cntntFnc"] =  "JSSuiSetRecntBx";
tIMLStglbObj["content"] = "noQvalue"; // the toggle that goes in above toggle div
tIMLStglbObj["btn"] = "btnTglRctPP" // the toogle btn id
tIMLStglbObj["pref"] = "tglRctPP"; // the toogle pref id saved in cookie
tIMLStglbObj["tbtmpCB"] = "doNada"; // null function as callback
tIMLStglbObj["icn"] = "&#xe3ec;"; // the icon
tIMLStglbObj["pnid"] = "includedContent"; // the parent node, will just return text if noQvalue
tIMLStglbObj["appnd"] = "y"; // the parent node, will just return text if noQvalue
tIMLStglbObj["clsmaintbl"] = "txtClrHdr slmtable brdrDarkBlue"; // main table class
tIMLStglbObj["clstitletd"] = ""; // title box class
tIMLStglbObj["clsttltxt"] = "txtSmall txtBold txtClrDrkGrn"; // title box text class

JSSHOP.ui.doTglBox(tIMLStglbObj);
}


JSSHOP.ui.fnishNewsO = function(fnaw, fnbw,fncw) {
// alert("fnishNewsO");
tStrFinalNLogo = "<a href=\"https://news.google.com\" target=\"_blank\" class=\"txtDecorNone\">";
tStrFinalNLogo += "<img src=\"images/misc/gnews.jpg\" style=\"height: 22px; width: 100px; border-width: 0px\"></a>";

tIMLStglbObj = null;
tIMLStglbObj = "";
tIMLStglbObj = JSSHOP.ui.nTglBxOb();
tIMLStglbObj["ttl"] = stxt[200]; // the toggle box title
tIMLStglbObj["dvid"] = "dvNMnews"; // the toggle box div id
tIMLStglbObj["content"] = parseRssData("includedContent", fnbw, "doNada"); // the toggle that goes in above toggle div
tIMLStglbObj["btn"] = "btnTglNwsMk" // the toogle btn id
tIMLStglbObj["pref"] = "tglNwsMk"; // the toogle pref id saved in cookie
tIMLStglbObj["tbtmpCB"] = "doNada"; // null function as callback
tIMLStglbObj["icn"] = "&#xe3ec;"; // the icon
tIMLStglbObj["pnid"] = "includedContent"; // the parent node, will just return text if noQvalue
tIMLStglbObj["appnd"] = "y"; // the parent node, will just return text if noQvalue
tIMLStglbObj["cut"] = 300;
JSSHOP.ui.doTglBox(tIMLStglbObj);

};


function JSSUIsetZipBox() {
tSPPatvRstr = JSSHOP.ui.getRegionsList();
document.getElementById("dvTglZip").innerHTML = JSSHOP.ui.getRegionsList();
}

JSSHOP.ui.getZipCodeBox = function() {
tIMLStglbObj = null;
tIMLStglbObj = "";
tIMLStglbObj = JSSHOP.ui.nTglBxOb();
tIMLStglbObj["ttl"] = stxt[301]; // the toggle box title
tIMLStglbObj["dvid"] = "dvTglZip"; // the toggle box div id
tIMLStglbObj["cntntFnc"] =  "JSSUIsetZipBox";
tIMLStglbObj["content"] = "noQvalue"; // the toggle that goes in above toggle div
tIMLStglbObj["btn"] = "btnTglZip" // the toogle btn id
tIMLStglbObj["pref"] = "tglZip"; // the toogle pref id saved in cookie
tIMLStglbObj["tbtmpCB"] = "doNada"; // null function as callback
tIMLStglbObj["icn"] = "&#xe3ec;"; // the icon
tIMLStglbObj["pnid"] = "includedContent"; // the parent node, will just return text if noQvalue
tIMLStglbObj["appnd"] = "y"; // the parent node, will just return text if noQvalue
tIMLStglbObj["clsmaintbl"] = "txtClrHdr slmtable brdrDarkBlue"; // main table class
tIMLStglbObj["clstitletd"] = ""; // title box class
tIMLStglbObj["clsttltxt"] = "txtSmall txtBold txtClrDrkGrn"; // title box text class
JSSHOP.ui.doTglBox(tIMLStglbObj);
};

JSSHOP.ui.getNuLocList = function(tVala, tValb, tValc) {
    tLocArr = null;
    tLocArr = "";
    tLocArr = [];
    // tValb = [{"c_location":"","c_zp":"0","c_loc_lat":"39.4625786","c_loc_lng":"-8.5910331"},{"c_location":"0 PortugaleteBiscaySpain","c_zp":"48","c_loc_lat":"43.3177934","c_loc_lng":"-3.0971674"},{"c_location":"0 PortugaleteBizkaiaSpain","c_zp":"48","c_loc_lat":"43.3223702","c_loc_lng":"-3.1057987"},{"c_location":"22,-8","c_zp":"16","c_loc_lat":"37.1688931","c_loc_lng":"-8.7430359"},{"c_location":"646Av. Santiago","c_zp":"45","c_loc_lat":"40.9601421","c_loc_lng":"-8.6796949"},{"c_location":"9AAlverca do Ribatejo","c_zp":"19","c_loc_lat":"38.898395","c_loc_lng":"-9.1247837"},{"c_location":"? 048 Horta","c_zp":"99","c_loc_lat":"38.5348336","c_loc_lng":"-28.7330341"},{"c_location":"A dos Cunhados","c_zp":"25","c_loc_lat":"39.1479313","c_loc_lng":"-9.3643533"},{"c_location":"AA","c_zp":"25","c_loc_lat":"39.420899","c_loc_lng":"-9.2443483"},{"c_location":"Abacao","c_zp":"0","c_loc_lat":"41.4100117","c_loc_lng":"-8.3600599"},{"c_location":"Abade de Neiva","c_zp":"47","c_loc_lat":"41.5528746","c_loc_lng":"-8.716339"}];
    tLocArr = JSON.parse(tValb);
    tLocStr = "";
    // create a div with a text field using tValb as the array for auto complete
    tLocStr += "<div class=\"crsrPointer\"><table style=\"width: 100%\" class=\"bigtable bkgdClrNrml brdrClrHdr txtBold txtBig\">";
    tLocStr += "<tr><td><strong>&nbsp;" + stxt[512] + "</strong></td></tr></table></div>";
    tLocStr += "<div class=\"collection\">";
    tLocStr += "<input type=\"text\" id=\"txtLoc\" class=\"txtSmall txtClrHdr\" placeholder=\"" + stxt[513] + "\" onkeyup=\"javascript:JSSHOP.ui.doAutoComplete('txtLoc','dvLoc','" + tValb + "');\" />";
    tLocStr += "<div id=\"dvLoc\" class=\"collection-item\"></div>";
    tLocStr += "</div>";

    // return tLocStr;
    document.getElementById("includedContent").innerHTML = tLocStr;

};

JSSHOP.ui.getRegionsList = function() {
tCatArrStr = "";
tRegionsArr = currRegionsObj[usrlang];
tCatArrStr += "<div class=\"crsrPointer\"><table style=\"width: 100%\" class=\"bigtable bkgdClrNrml brdrClrHdr txtBold txtBig\">";
tCatArrStr += "<tr><td><strong>&nbsp;" + stxt[512] + "</strong></td></tr></table></div>";
tepIinc = 0;
tCatArrStr +=  "<br>";
while(tepIinc < tRegionsArr.length) {
tswrAl = tRegionsArr[tepIinc];
tswrAspll = tswrAl.split("::");
tswph = tswrAspll[0];
tswttl = tswrAspll[1];
tCatArrStr += "<div onclick=\"javascript:eindex('aa-show-search','pid=aa-show-search&st=zip&sw=" + tswph + "');javascript:JSSHOP.ui.closePopMenus();\" class=\"collection-item crsrPointer\">" + tswttl  + "</div>";
tepIinc++;
}
tCatArrStr += "</div>";
return tCatArrStr;
};

JSSHOP.ui.getRegionsList2 = function() {
};



JSSHOP.ui.getPartsPage = function() {
    document.getElementById('includedShops').innerHTML='';
    window['sw']=null;
    currUrlArr.sw=null;
    JSSHOP.shared.setPrtSvsPnl('dvGetPLnk', function() {eindex('aa-show-psearch','pid=aa-show-psearch&st=main')});
};

JSSHOP.ui.getSvsPage = function() {
document.getElementById('includedShops').innerHTML='';
window['sw']=null;
currUrlArr.sw=null;
JSSHOP.shared.setPrtSvsPnl('dvGetSvcsLnk', function() {JSSHOP.ui.doDefCBBCC('dvMMGetSvcsLnk', null, eindex('aa-show-msearch','pid=aa-show-msearch&amp;st=main'));});
};

JSSHOP.ui.getAtvtyRndr = function(atvtyArr, atvtyTTgl, atvtyCount) {
strRFHtml = "";
tmpImfstr = "";

tfi = 0;
fCount = 20;
if(atvtyArr.length) {
if(atvtyCount > 0) {
fCount = atvtyCount;
}
if(fCount > atvtyArr.length) {
fCount = atvtyArr.length;
}
while(tfi < fCount) {
tmpImfstr = "";


theTfavId = atvtyArr[tfi]._id;
theTfavTtl = atvtyArr[tfi].ttl;
theTfavUrl = atvtyArr[tfi].ur;
theITimgVal = atvtyArr[tfi].imic
theIimgVal = "images/misc/example_thumb.png";
/*

aTmpAtvtyOb = null;
aTmpAtvtyOb = {};
aTmpAtvtyOb["_id"] = "noQvalue"; // internal id
aTmpAtvtyOb["atype"] = "noQvalue"; // internal type
aTmpAtvtyOb["aid"] = "1"; // internal id
aTmpAtvtyOb["ttl"] = "noQvalue"; // title
aTmpAtvtyOb["ur"] = "noQvalue"; // url
aTmpAtvtyOb["imic"] = "noQvalue" // image
aTmpAtvtyOb["cckie"] = "noQvalue"; // the cookie it is saved to
aTmpAtvtyOb["daCB"] = "JSSHOP.ui.doAtvtyDefCB"; // null function as callback
aTmpAtvtyOb["icn"] = "&#eoph;"; // the icon
aTmpAtvtyOb["pnid"] = "noQvalue"; // the parent node, will just return text if noQvalue
aTmpAtvtyOb["garr"] = "currRcntFavsArr"; // the global array it will be working with
aTmpAtvtyOb["gstr"] = "currRcntFavsStr"; // the global str it will be working with
*/

if((theITimgVal) && (theITimgVal.length > 3)){
if(theITimgVal == "noQvalue") {
} else {
theIimgVal = theITimgVal;
}
}

tmpImfstr = "<img class=\"icnsmlbtn\" src=\"" + theIimgVal + "\" align=\"absmiddle\">";

// strRFHtml += theTfavId + " :: " + theTfavUrl + " :: " + theTfavTtl + " :: " + theIimgVal + "<br>";
strRFHtml += "<div>";
if(atvtyTTgl == "y") {
currFTclr = "small-material-icons txtClrRed";
strRFHtml += "<span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrClrDlg txtClrDlg\" onclick=\"javascript:doRecentFavorite('" + theTfavUrl + "','" +  theTfavTtl + "','" + theITimgVal + "','" + theTfavId + "','btnDynFavs" + theTfavId + "');\"><i id=\"btnDynFavs" + theTfavId + "\" class=\"" + currFTclr + "\" alt=\"favorite\" title=\"recent_actors\" value=\"recent_actors\" style=\"font-size:12px;\">&#xe03f;</i></span>";
}
strRFHtml += tmpImfstr + " <a class=\"txtDecorNone txtSmall txtClrHdr\" href=\"" + theTfavUrl + "\">" + theTfavTtl + "</a>";
strRFHtml += "</div>";
tfi++;
}
} else {
strRFHtml += "No Favorites";


}
return strRFHtml;
}

JSSHOP.ui.doAlertBox = function(atype, attl, acntnt, abtArr) {

    // atype: warning, error, success, info
    // warning e002 (triangle)
    // error e000 (!)
    // success e834 (check box)
    // info e88e (info)
    // abtArr: [0] = btn1, [1] = btn2, [2] = btn3
    // btnObj: [0] = btnTxt, [1] = btnCB, [2] = btnCls
    tDABicnStr = "";
    tDABicnClsStr = "";
    tDABTtlClsStr = "";
    tDABCntClsStr = "";
    switch(atype) {
        case "warning":
            tDABicnStr = "&#xe002;";
            tDABicnClsStr = "txtClrHdr";
            tDABTtlClsStr = "txtClrHdr";
            tDABCntClsStr = "txtClrHdr txtSmall";
            break;
        case "error":
            tDABicnStr = "&#xe000;";
            tDABicnClsStr = "txtClrRed";
            tDABTtlClsStr = "txtClrRed";
            tDABCntClsStr = "txtClrHdr txtSmall";
            break;
        case "success":
            tDABicnStr = "&#xe834;";
            tDABicnClsStr = "txtClrNrml";
            tDABTtlClsStr = "txtClrNrml";
            tDABCntClsStr = "txtClrNrml";
            break;
        case "info":
            tDABicnStr = "&#xe88e;";
            tDABicnClsStr = "txtClrHdr";
            tDABTtlClsStr = "txtClrHdr";
            tDABCntClsStr = "txtClrHdr txtSmall";
            break;
        default:
            tDABicnStr = "&#xe88e;";
            tDABicnClsStr = "txtClrHdr";
            tDABTtlClsStr = "txtClrHdr";
            tDABCntClsStr = "txtClrHdr txtSmall";
            break;
    }


    tDABStr = "<div style=\"float:left;\"><table><tr><td><i class=\"material-icons " + tDABicnClsStr + "\" style=\"font-size: 24px;\">" + tDABicnStr + "</i>";
    tDABStr += "</td><td><span class=\"txtClrHdr txtBold " + tDABTtlClsStr + "\" style=\"font-size: 18px;verticle-align:middle;padding-bottom:8px;\">" + attl + "</span>";
    tDABStr += "</td></tr></table></div>";

    tDABStr += "<div class=\"bkgdClrWhite\" style=\"width: 100%;\">";
    tDABStr += "<table style=\"width: 100%\" class=\"bkgdClrWhite\">";
    tDABStr += "<tr><td>"



    tDABStr += "</td></tr>";
    tDABStr += "<tr><td class=\"txtClrHdr " + tDABCntClsStr + "\">" + acntnt + "</td></tr>";
    tDABStr += "<tr><td style=\"text-align:center;\">";
    if(abtArr == "noQvalue") {
        tsBtnOCB = "JSSHOP.ui.closeLbox()";
        tsBtnOCls = "cls_button cls_button-small cls_button-disabled";
        tsBtnOTxt = "OK";
        tDABStr += "<button class=\"" + tsBtnOCls + "\" onclick=\"" + tsBtnOCB + "\">" + tsBtnOTxt + "</button>";
        } else {

    for(var i = 0; i < abtArr.length; i++) {
        tsBtnObj = abtArr[i];
        tsBtnOCB = tsBtnObj.cb;
        tsBtnOCls = tsBtnObj.cls;
        tsBtnOTxt = tsBtnObj.txt;
        if(tsBtnOCB == "noQvalue") {
            tsBtnOCB = "JSSHOP.ui.closeLbox()";
        }
        if(tsBtnOTxt == "noQvalue") {
            tsBtnOTxt = "OK";
        }
        if(tsBtnOCls == "noQvalue") {
            tsBtnOCls = "cls_button cls_button-small cls_button-disabled";
        }
        tDABStr += "<button class=\"" + tsBtnOCls + "\" onclick=\"" + tsBtnOCB + "\">" + tsBtnOTxt + "</button>";
      }
    }
    tDABStr += "</td></tr>";
    tDABStr += "</table>";
    tDABStr += "</div>";
    // return tDABStr;
    JSSHOP.ui.popAndFillLbox(tDABStr);

};

JSSHOP.ui.doTglDefCT = function(ttmpTDDiv, ttmpTDu, ttmpTDcb) {
JSSHOP.ajax.doNuAjaxPipe(ttmpTDDiv, ttmpTDu, ttmpTDcb);
};

JSSHOP.ui.doTglDefCB = function(theTglBoxObj) {
};

JSSHOP.ui.nTglBxOb = function() {

aTmpTglBxOb = null;
aTmpTglBxOb = {};
aTmpTglBxOb["ttl"] = "noQvalue"; // the toggle box title
aTmpTglBxOb["dvid"] = "noQvalue"; // the toggle box div id
aTmpTglBxOb["cntntFnc"] = function() { alert("nTglBxOb default cntntFnc"); } // default function called to retrieve the content
aTmpTglBxOb["content"] = "noQvalue"; // the toggle that goes in above toggle div
aTmpTglBxOb["btn"] = "noQvalue" // the toogle btn id
aTmpTglBxOb["pref"] = "..."; // the toogle pref id saved in cookie
aTmpTglBxOb["tbtmpCB"] = "JSSHOP.ui.doTglDefCB"; // null function as callback
aTmpTglBxOb["icn"] = "&#eoph;"; // the icon
aTmpTglBxOb["cut"] = 0; // will cut the html if greater than 0
aTmpTglBxOb["pnid"] = "noQvalue"; // the parent node(div) id, will just return text if noQvalue
aTmpTglBxOb["appnd"] = "y"; // append to pnid, will pnid.innerHTML = text if noQvalue
aTmpTglBxOb["clsmaintbl"] = "txtClrHdr rtable brdrClrHdr"; // main table class
aTmpTglBxOb["clstitletd"] = "slmtable brdrClrHdr"; // title box class
aTmpTglBxOb["clsttltxt"] = "txtSmall txtBold"; // title box text class


return aTmpTglBxOb;
};


JSSHOP.ui.doTglTitle = function(theTglBoxObj) {
    try {

    console.log("doTglTitle: " + theTglBoxObj.ttl);
    tTglBtnIDStr = theTglBoxObj.btn;
    tTglTtlStr = theTglBoxObj.ttl;
    tTglDivIDStr = theTglBoxObj.dvid;
    switch(tTglDivIDStr) {
        case "dvTglRcnt":
            tTglTtlStr = "btnTglRctPP";
            break;
        case "dvNMnews":
            tTglTtlStr = "btnTglNwsMk";
            break;
        case "dvTglZip":
            tTglTtlStr = "btnTglZip";
            break;
        default:
            break;

    }

    tTBxTtlDv = document.getElementById(theTglBoxObj.dvid + "Ttl");
    tTBxTtlDv.innerHTML = theTglBoxObj.ttl;
  } catch(e) {
        alert("doTglTitle: " + e);
    }
};

JSSHOP.ui.getMorBxStr = function(theMrBxType) {
     tMorebSTr = "";
    switch(pid) {
        case "aa-show-search":
            tMorebSTr = "<div class=\"collection-item crsrPointer\" onclick=\"javascript:JSSHOP.ui.doMoreBox('aa-show-search');\">More</div>";
            break;
        case "aa-show-prop":
            tMorebSTr = doNuCollsLoad("links");
            tMorebSTr += currMenuTStr;
            // tMorebSTr = "<div class=\"collection-item crsrPointer\" onclick=\"javascript:JSSHOP.ui.doMoreBox('aa-show-search');\">More</div>";
            break;
            default:
            // tMorebSTr = "<div class=\"collection-item crsrPointer\" onclick=\"javascript:JSSHOP.ui.doMoreBox('aa-show-search');\">More</div>";
            tMorebSTr = doNuCollsLoad("noQvalue");
            break;
    }
    return tMorebSTr;
};
JSSHOP.ui.insertEmoji = function(editorDivId, emoji) {
    var editorDiv = document.getElementById(editorDivId);
    if (editorDiv) {
        editorDiv.innerHTML += emoji;
    }
};

JSSHOP.ui.getEmojiPickerHTML = function(theEEditorDiv, theEEmojiDiv) {
    try {
    // Create the HTML structure for the emoji picker
    var emojiPickerHTML =  "";
    //   var emojis = ['??', '??', '??', '??', '??'];
    // use actual unicode characters for emojis
    var emojis = ['\uD83D\uDE00', '\uD83D\uDE02', '\uD83D\uDE0D', '\uD83D\uDE0E', '\uD83D\uDE22'];
    emojis.forEach(function(emoji) {
        // also close the emoji picker after inserting the emoji
        emojiPickerHTML += '<span class="emoji" style="font-size:24px; cursor:pointer; margin:5px;" onclick="JSSHOP.ui.insertEmoji(\'' + theEEditorDiv + '\', \'' + emoji + '\');JSSHOP.ui.toggleEmojiPicker(\'' + theEEmojiDiv + '\')">' + emoji + '</span>';
    });

    } catch(e) {
        alert("getEmojiPickerHTML: " + e);
    }
    console.log("emojiPickerHTML: " + emojiPickerHTML);
    return emojiPickerHTML;
};
JSSHOP.ui.toggleEmojiPicker = function(theEmojoDiv) {
    // Toggle the visibility of the emoji picker
    var tEmojoDiv = document.getElementById(theEmojoDiv);
    if (tEmojoDiv) {
        tEmojoDiv.style.display = tEmojoDiv.style.display === 'none' ? 'block' : 'none';
    }
};
JSSHOP.ui.doTglBox = function(theTglBoxObj) {
try {} catch(e) {
    alert("tbtmpCB: " + aTmpTglBxOb.tbtmpCB + " :: " + e);
     }
currTglBxsObj[theTglBoxObj.dvid] = theTglBoxObj;
var tUTlPrefs = "hide";
uTlPrefs = arrUprefs["prfsSHOPuser"][0];
if(uTlPrefs[theTglBoxObj.pref]) {
console.log("pref: " + theTglBoxObj.pref + " y:: "+ uTlPrefs[theTglBoxObj.pref])
tUTlPrefs = uTlPrefs[theTglBoxObj.pref];
}
tTBXCnt = theTglBoxObj.content;
if(theTglBoxObj.btn  == "btnTglBPrtsL") {
    tPSBstr = "<table style=\"margin: 0 auto;width:90%\" align=\"center\" class=\"" + theTglBoxObj["clsmaintbl"] + "\">";

} else if(theTglBoxObj.btn  == "btnTglLGGPm") {
    tPSBstr = "<table style=\"margin: 0 auto;width:90%\" align=\"center\" class=\"" + theTglBoxObj["clsmaintbl"] + "\">";

} else {
    tPSBstr = "<table style=\"margin: 0 auto;width:90%\" align=\"center\" class=\"" + theTglBoxObj["clsmaintbl"] + "\">";

}
tPSBstr += "<tr><td>";
tPSBstr += "<table style=\"margin: 0 auto;max-width:98%\" align=\"center\"><tr>";

// tPSBstr += "<table style=\"margin: 0 auto;max-width:98%\" align=\"center\" class=\"" + theTglBoxObj["clstitletd"] + "\"><tr>";
tPSBstr += "<td>";
tPSBstr += "<div id=\"" + theTglBoxObj.dvid + "Icn\">";
tPSBstr += "<i class=\"menu-material-icons coll-menu-item\" title=\"" + theTglBoxObj.ttl + "\">" + theTglBoxObj.icn + "</i>";
tPSBstr += "</div>";
tPSBstr += "</td>";
tPSBstr += "<td style=\"width:100%\" class=\"crsrPointer\"   onclick=\"javascript:JSSHOP.ui.tglTBPrefModule('" + theTglBoxObj.dvid + "');\">";
tPSBstr += "<div class=\"" + theTglBoxObj["clsttltxt"] + "\" style=\"vertical-align:super;padding-left:12px;padding-bottom:12px;margin-bottom:12px;\" id=\"" + theTglBoxObj.dvid + "Ttl\">";
tPSBstr += theTglBoxObj.ttl;
tPSBstr += "</div></td>";
tPSBstr += "<td valign=\"top\" style=\"max-height: 42px\">&nbsp;&nbsp; &nbsp;</td>";

if(theTglBoxObj.btn == "noQvalue") { // dont show the toggle button
} else {
tJSstr = "JSSHOP.ui.tglTBPrefModule('" + theTglBoxObj.dvid + "');";
tPSBstr += "<td valign=\"top\" style=\"max-height: 42px\"><div id=\"" + theTglBoxObj.btn + "\" class=\"icnbtn crsrPointer\" nowrap=\"nowrap\" style=\"float:right\"  onclick=\"javascript:" + tJSstr + "\">";
tPSBstr += "<i class=\"material-icons txtClrDlg\" title=\"expand_more\">&#xe5cf;</i></div></td>";
}
tPSBstr += "</tr>";
tPSBstr += "</table>";


tPSBstr += "</td></tr>";


tPSBstr += "<tr><td>";
 // plug goes here
if(currUrlArr.prti != null) {
// tPSBstr += "&nbsp; &nbsp; &nbsp;<a href=\"javascript:JSSHOP.ui.showMsgBox('product','" + currUrlArr.prti + "','JSSHOP.shared.doYearsPop');\" class=\"txtDecorNone\"><img class=\"slmtable icndbtn brdrCldrDlg txtClrHdr\" style=\"float: right;margin-top: 5px;font-size:27px;margin-right:6px;\" alt=\"speaker\" title=\"speaker\" src=\"images/misc/shout_out.gif\"></img></a>";
}

tPSBstr += "</td></tr><tr>";

tPSBstr += "<td id=\"" + theTglBoxObj.dvid + "\" style=\"visibility:hidden;display:none\">";


/*
if(tUTlPrefs == "show") {
if(tTBXCnt == "noQvalue") {
alert("haveTglFnc: " + theTglBoxObj.cntntFnc);
ttbcf = theTglBoxObj.cntntFnc;
setTimeout(ttbcf(), 800);

// ttbcf();

} else {
if((theTglBoxObj.cut > 0) && (tTBXCnt.length > theTglBoxObj.cut)) {
ntTBXCnt = new CutString(tTBXCnt,theTglBoxObj.cut);
newCutString = ntTBXCnt.cut() + "<a href=\"javascript:JSSHOP.ui.showHideElement('" + theTglBoxObj.dvid + "','hide');JSSHOP.ui.showHideElement('m" + theTglBoxObj.dvid + "','show');\">" + stxt[62].toLowerCase() + "...</a>";
newCutString += "<td id=\"m" + theTglBoxObj.dvid + "\" style=\"visibility:hidden;display:none\">";
newCutString += tTBXCnt;
newCutString += "</td>";

} else {
newCutString = tTBXCnt;
}
tPSBstr += newCutString;
}
}

*/

tPSBstr += "<td id=\"m" + theTglBoxObj.dvid + "\" style=\"visibility:hidden;display:none\">";
tPSBstr += tTBXCnt;
tPSBstr += "</td>";

tPSBstr += "</td></tr></table>";
// tPSBstr += "<div>&nbsp;  &nbsp;  &nbsp;  </div>";

if(uTlPrefs[theTglBoxObj.pref]) {
if(uTlPrefs[theTglBoxObj.pref] == "show") {
    if(theTglBoxObj.btn == "noQvalue") { // dont show the toggle button
        setTimeout("JSSHOP.ui.toggleModule(aTmpTglBxOb.dvid)", 800);
    } else {
// setTimeout("JSSHOP.ui.toggleModule(aTmpTglBxOb.dvid)", 800);
// JSSHOP.ui.toggleNuModule(aTmpTglBxOb.btn,aTmpTglBxOb.dvid);
setTimeout("JSSHOP.ui.toggleNuModule('" + theTglBoxObj.btn + "','" + theTglBoxObj.dvid + "')", 1300);
}
// ttbcf = theTglBoxObj.cntntFnc;
// ctnwf = window[theTglBoxObj.tbtmpCB];
setTimeout(ctnwf = window[theTglBoxObj.cntntFnc], 1300);
}
} else { // will defaault to showing it
if(theTglBoxObj.btn == "noQvalue") { // dont show the toggle button
setTimeout("JSSHOP.ui.toggleModule(aTmpTglBxOb.dvid)", 800);
} else {
setTimeout("JSSHOP.ui.toggleNuModule('" + theTglBoxObj.btn + "','" + theTglBoxObj.dvid + "')", 800);
}
setTimeout(ctnwf = window[theTglBoxObj.cntntFnc], 1300);
// setTimeout("JSSHOP.ui.toggleTBModule(currTglBoxObj[theTglBoxObj.dvid])", 2000);
}
if(theTglBoxObj.pnid == "noQvalue") {
return tPSBstr;
} else {
ttAdv = document.getElementById(theTglBoxObj.pnid);
if(theTglBoxObj["appnd"] == "noQvalue") {
ttAdv.innerHTML = tPSBstr;
} else {
ttbdav = document.createElement('div');
// alert("tPSBstr: " + tPSBstr);
ttbdav.innerHTML = tPSBstr;
ttAdv.appendChild(ttbdav);
}
setTimeout(JSSHOP.ui.doTglTitle(theTglBoxObj), 800);

}





if(theTglBoxObj["tbtmpCB"] == "noQvalue") {
} else {
pmwf = window[theTglBoxObj.tbtmpCB];
// pmwf();
}

// return tCatArrStr;
// JSSHOP.ui.popAndFillLbox(tCatArrStr);
};



JSSHOP.ui.doShare = function(tmpSsite, tmpASurl, tmpSttl, tmpSdsc, tmpSimg) {
try {
     tmpEncSurl = encodeURIComponent(tmpASurl);
    tmpEncSttl = encodeURIComponent(tmpSttl);
    tmpEncSdsc = encodeURIComponent(tmpSdsc);
    tmpEncSimg = encodeURIComponent(tmpSimg);

    tmpSurl = tmpASurl;
    switch(tmpSsite) {
        case "facebook":
            tSurl = "https://www.facebook.com/sharer/sharer.php?u=" + tmpSurl;
            window.open(tSurl, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
            break;
        case "twitter":
            tSurl = "https://twitter.com/intent/tweet?text=" + tmpSttl + "&url=" + tmpSurl;
            window.open(tSurl, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
            break;
        case "linkedin":
            tSurl = "https://www.linkedin.com/shareArticle?mini=true&url=" + tmpEncSurl + "&title=" + tmpEncSttl + "&summary=" + tmpEncSdsc + "&source=LinkedIn";
            window.open(tSurl, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
            break;
        case "whatsapp":
            tSurl = "https://api.whatsapp.com/send?text=" + tmpSttl + " " + tmpSurl;
            window.open(tSurl, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
            break;
        case "pinterest":
            tSurl = "https://pinterest.com/pin/create/button/?url=" + tmpSurl + "&media=" + tmpSimg + "&description=" + tmpSttl;
            window.open(tSurl, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
            break;
        case "email":
            tSurl = "mailto:?subject=" + tmpSttl + "&body=" + tmpSdsc + " " + tmpSurl;
            break;
            case "sms":
            tSurl = "sms:?body=" + tmpSttl + " " + tmpSurl;
            window.open(tSurl, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
            break;
        case "telegram":
            tSurl = "https://t.me/share/url?url=" + tmpEncSurl + "&text=" + tmpEncSttl;
            window.open(tSurl, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400")
            break;
            case "copy link":
            tSurl = tmpASurl;
            // copy link to clipboard
            navigator.clipboard.writeText(tSurl).then(() => {
                alert("Link copied to clipboard");
            });
            break;
        default:
            break;
    }
    JSSHOP.ui.closeLbox();
   //  document.location.href = tmpSurl;
} catch(e) {
alert("no JSSHOP.ui.doShare: " + e);
}
};



JSSHOP.ui.showShareBox = function(tmpMsgType, tmpMsgVal){
    console.log("showShareBox: " + tmpMsgType + " :: " + tmpMsgVal);
try {} catch(e) {
alert("no JSSHOP.ui.showShareBox: " + " " + tmpMsgType + " " + e);
}
    tShareMsgSTr = "";
    tShareMsgUrl = "";
    tShareMsgImg = "";
    tShareMsgTtl = "";
    tShareMsgDsc = "";


    switch(tmpMsgType) {
        case "product":
            tShareMsgSTr = stxt[72] + " " + stxt[19];
            tShareMsgUrl = currWebHome + "index.html?ditemid=" + tmpMsgVal;
            tShareMsgImg = currWebHome + "images/property/" + i_img.value;
            tShareThmbImg = "images/pimgs/s_thumb" + i_img.value;
            tShareMsgTtl = i_title.value;
            tShareMsgDsc = i_desc.value;
            break;
            case "property":
                tmpPrpObj = currShopsArr[tmpMsgVal];
                tShareMsgSTr = stxt[72] + " " + stxt[19];
                tShareMsgUrl = currWebHome + "index.html?ditemid=" + tmpPrpObj._id + "-" + usrlang;
                tShareMsgImg = tmpPrpObj.pimage;
                console.log("tmpPrpObj.pimage: " + tmpPrpObj.pimage);
                if(tShareMsgImg.indexOf("updt_") != -1) {
                    tCleanShareMsgImg = tShareMsgImg.replace("updt_", "");
                    tShareMsgImg = currWebHome + "images/ucontent/" + tCleanShareMsgImg;
                    tShareThmbImg = currWebHome + "images/ucontent/s_thumb" + tCleanShareMsgImg;
                } else if(tShareMsgImg.indexOf("updt3d_") != -1) {
                    tCleanShareMsgImg = tShareMsgImg.replace("updt3d_", "");
                    tUnzpdShareMsgImg = LZString.decompressFromEncodedURIComponent(tCleanShareMsgImg);
                    tShareMsgImg = tUnzpdShareMsgImg;
                    tShareThmbImg = tUnzpdShareMsgImg;
                } else {
                    tShareMsgImg = currWebHome + "images/property/" + tmpPrpObj.pimage;
                    tShareThmbImg = currWebHome + "images/property/s_thumb" + tmpPrpObj.pimage;
                }
                // tShareMsgTtl = tmpPrpObj.ptitle;
                // tShareMsgDsc = tmpPrpObj.pcontent;
                // clean and cut both title and content at 100 chars
                tUnzpdMsgDsc =  LZString.decompressFromEncodedURIComponent(tmpPrpObj.pd_prpdesc);
                tCleanMsgDsc = tUnzpdMsgDsc.replace(/<\/?[^>]+(>|$)/g, "");
                tZpdToPTTL = tmpPrpObj.pd_prptitle;
                tCleanMsgTtl = LZString.decompressFromEncodedURIComponent(tZpdToPTTL);
                tShareMsgTtl = tCleanMsgTtl.substring(0, 100);
                tShareMsgDsc = tCleanMsgDsc.substring(0, 100);
                console.log("tShareMsgTtl: " + tShareMsgTtl);
                console.log("tShareMsgDsc: " + tShareMsgDsc);
                console.log("tShareMsgImg: " + tShareMsgImg);
                console.log("tShareThmbImg: " + tShareThmbImg);
                break;
        case "category":
            tShareMsgSTr = "Category";
            tShareMsgUrl = "https://propsgo.com/index.html?cid=" + tmpMsgVal;
            tShareMsgImg = "https://propsgo.com/images/pimgs/s_thumb" + i_img.value;
            tShareMsgTtl = "1Place4Ads Category";
            tShareMsgDsc = "Check out this category on 1Place4Ads";
            break;
        case "company":
            tCdescStr = c_desc.value;
if((tCdescStr == "ns") || (tCdescStr == "5")){
    tCdescStr = c_name.value + "  " + stxt[559] + " " + c_location.value + ". " ;
}
tClogoimg = c_logoimg.value;
 if(tClogoimg.indexOf(".") != -1) {
 if(tClogoimg.indexOf("http") != -1) {
    tClogoimg = c_logoimg.value;
    tShareThmbImg = tClogoimg;
} else {
    tClogoimg = currWebHome + "images/slogos/" + c_logoimg.value;
    tShareThmbImg = currWebHome + "images/slogos/s_thumb" + c_logoimg.value;
}
} else {
    tClogoimg = currWebHome + "images/logo_og.png";
    tShareThmbImg = currWebHome + "images/logo_og.png";
}

            tShareMsgSTr = stxt[72];
            tShareMsgUrl = currWebHome + "index.html?dcid=" + tmpMsgVal;
            tShareMsgImg = tClogoimg;
            tShareMsgTtl = c_name.value;
            tShareMsgDsc = tCdescStr;
            break;
            case "update":
                tUpdateObj  = currUpdateArr[tmpMsgVal];
                console.log("tUpdateObj: " + JSON.stringify(tUpdateObj));
            tShareMsgSTr = stxt[72] + " " + stxt[19];
            tShareMsgUrl = currWebHome + "index.html?tupid=" + tUpdateObj._id + "-" + usrlang;
            tShareMsgImg = currWebHome + "images/ucontent/" + tUpdateObj.p_image;
            console.log("tUpdateObj.p_image: " + tUpdateObj.p_image);
            console.log("tUpdateObj.p_ptpe: " + tUpdateObj.p_ptype);
            tShareThmbImg = "images/ucontent/s_thumb" + tUpdateObj.p_image;

            tmShareMsgTtl = tUpdateObj.p_title;
            tShareMsgTtl = /* url decoded */ decodeURIComponent(tmShareMsgTtl);
            if(tShareMsgTtl.length < 1) {
                tShareMsgTtl = "Check out this update on 1Place4Ads";
            }
            tUDcdedMsgDsc = decodeURIComponent(tUpdateObj.p_content);
            console.log("tUDcdedMsgDsc: " + tUDcdedMsgDsc);

            tUnzpdMsgDsc = LZString.decompressFromEncodedURIComponent(tUDcdedMsgDsc);
            console.log("tUnzpdMsgDsc: " + tUnzpdMsgDsc);
            tCleanMsgDsc = tUnzpdMsgDsc;
            // tCleanMsgDsc = tUnzpdMsgDsc.replace(/<\/?[^>]+(>|$)/g, "");
            tShareMsgDsc = tCleanMsgDsc.substring(0, 100);
            if(tShareMsgDsc.length < 1) {
                tShareMsgDsc = "Check out this update on 1Place4Ads";
            }

            break;
            default:
            break;
    }
    tShareMsgSTr += " :: " + tmpMsgVal;
    tShareSIteArr = ["facebook","whatsapp","twitter","linkedin","pinterest","email","sms","telegram","copy link"];

    tShareMsgStr = "<div class=\"\">";
    tShareMsgStr += "<div class=\"\">";


    /*
    tShareMsgStr += "<div><table><tbody><tr><td><i class=\"material-icons txtClrTtl\" alt=\"share\" title=\"share\" value=\"share\">&#xe80d;</i></td><td><span class=\"txtSMall txtBold\">" + stxt[72] + "</span></td></tr></tbody></table></div>";
    */
    tShareMsgStr += "<div style=\"padding:7px;\"><table><tbody><tr><td><i class=\"material-icons txtClrDlg\" alt=\"share\" title=\"share\" value=\"share\">&#xe80d;</i></td><td>&nbsp;<span class=\"txtSmall txtBold\">" + stxt[72] + "</span></td></tr></tbody></table></div>";
    tShareMsgStr += "<table style=\"width: 100%\" class=\"bigtable bkgdClrNrml brdrClrHdr txtBold txtBig\">";
    tShareMsgStr += "<tr><td>";
    tShareMsgStr += "<div class=\"txtClrHdr\" style=\"padding:10px;\"><img src=\"" + tShareThmbImg + "\" class=\"icndbtn\"></div>";
    tShareMsgStr += "</td><td>";
    tShareMsgStr += "<div class=\"txtClrHdr\">" + tShareMsgTtl + "</div>";
    tShareMsgStr += "<div class=\"txtSmall txtClrGrey\">" + tShareMsgDsc + "</div>";
    tShareMsgStr += "</td></tr>";
    tShareMsgStr += "</table>";
    tShareMsgStr += "</div>";

    tShareMsgStr += "<div class=\"collection-item\">";
    tShareMsgStr += "<div class=\"txtClrHdr txtBold\">" + stxt[72] + "</div>";
    tShareMsgStr += "<div class=\"txtClrHdr\">";
    for(var i = 0; i < tShareSIteArr.length; i++) {

        // fix tShareMsgTtl and tShareMsgDsc to escape ALL single quotes


        tShareMsgTtla = tShareMsgTtl.replace("'", "&#39;");
        tShareMsgTtlb = encodeURIComponent(tShareMsgTtla);

        tShareMsgDsca = tShareMsgDsc.replace(/'/g, "&#39;");
        tShareMsgDscb = encodeURIComponent(tShareMsgDsca);
        tShareMsgTtl = tShareMsgTtlb;
        tShareMsgDsc = tShareMsgDscb;
        tShareMsgStr += "<a href=\"javascript:JSSHOP.ui.doShare('" + tShareSIteArr[i] + "','" + tShareMsgUrl + "','" + tShareMsgTtl + "','" + tShareMsgDsc + "','" + tShareMsgImg + "');\" class=\"txtDecorUline\">" + tShareSIteArr[i] + "</a> &nbsp; ";

    }
    tShareMsgStr += "</div>";

    tShareMsgStr += "</div>";
    tShareMsgStr += "</div>";
    JSSHOP.ui.popAndFillLbox(tShareMsgStr);
// JSSHOP.ui.popAndFillLbox(tmpMsgType + " :: " + tmpMsgVal);

};

var finishMMupload = function(theMMum) {
try {


    image = null;
    image = new Image();
    image.src = "images/msgimgs/s_thumb" + theMMum;
   	document.getElementById("mmprogressBar").appendChild(image);
	JSSHOP.shared.setFrmFieldVal("qmsgs", "msg_media", theMMum);
} catch(e) {
alert(e);
}
};




var doMediaBtnSetup = function(tmpMBtnId, tmpMBtnPrfx, tmpMBtnCB, tmpMBtnFldr) {
try {
ttbtn = document.getElementById(tmpMBtnId);
if(isJApp == "yes")  {
  // alert("doMediaBtnSetup JAPP: " + tmpMBtnId + " :: " + tmpMBtnPrfx + " :: " + tmpMBtnCB + " :: " + tmpMBtnFldr);
  JSSHOP.ui.addEvent(ttbtn, "click", function() { JSSHOP.jndroid.doPagePopUp("media_chooser.html", "noQvalue");return false; });

// JSSHOP.ui.addEvent(ttbtn, "click", function() { JSSHOP.jndroid.openBrowser();return false; });
// app.setQIMeta(doQIMeta());
} else {

currMediaBtnPrfx = tmpMBtnPrfx;
currMediaBtnCB = tmpMBtnCB;
currMediaFldr = tmpMBtnFldr;
JSSHOP.loadScript("js/app/sau.js", JSSHOP.checkLoader,"js");
}
} catch(e) {
alert(e);
}
};

var doMsgMediaSetup = function() {
try {
doMediaBtnSetup("mmuploadBtn", "mm", "finishMMupload", "msgimgs");
} catch(e) {
alert("doMsgMediaSetup: " + e);
}
};



JSSHOP.ui.doMsgThread = function(a,theResp,c) {
    console.log("doMsgThread: " + theResp);
// alert("doMsgThread :" + theResp);
annewel = document.createElement('div');

tfullstr = "";
var tarrToFill = null;
tarrToFill = [];
tarrToFill = JSON.parse(theResp);
var tlen = tarrToFill.length;
var tiint = 0;
var tpcid = 0;
ttstr = "";
while(tiint < tlen) {
thasr = "n";
tts = tarrToFill[tiint];
ttstr = "<div style=\"min-height: 45px;margin:15px;margin-bottom:18px;\"  class=\"rtable bkgdClrTtl slmtblpadding\">";
ttmpdate = new Date(tts.ms_dadded * 1000);
ttmpdstr = "<b>" + ("0" + ttmpdate.getDate()).slice(-2) + "</b>/" + ("0" + (ttmpdate.getMonth() + 1)).slice(-2);
ttstr += "<span class=\"txtClrHdr\"  style=\"margin-left: 17px\">" + ttmpdstr + " - " + quid + "</span><br>";
ttstr += "<span class=\"txtClrHdr\"  style=\"margin-left: 17px\">" + tts.ms_matter + "</span>";
ttstr += "<span><a href=\"javascript:JSSHOP.ui.showReplyMsgBox('nada','" + tts.ms_threadid + "','" + c + "');\">" + tts.ms_viewed + "</a></span>";
ttstr += "</div>";
annewel = document.createElement('div');
annewel.innerHTML = ttstr;
//
tDStr = "dvMsgT" + tts.ms_threadid;
// tmpTDQI.innerHTML = "";
if(currUrlArr.threadid){
thasr = "y";
tatmpTDQI = document.getElementById("includedContent");
} else {
if(document.getElementById(tDStr)) {
tatmpTDQI = document.getElementById(tDStr);
thasr = "y";
}
}
if(thasr == "y") {
tatmpTDQI.appendChild(annewel);
}
tiint++;
}
if(tarrToFill[0]) {

} else {
    /*
    ttstr = "<div style=\"min-height: 45px;margin:15px;margin-bottom:18px;\"  class=\"rtable bkgdClrTtl slmtblpadding\">";
    ttmpdate = new Date();
    ttmpdstr = "<b>" + ("0" + ttmpdate.getDate()).slice(-2) + "</b>/" + ("0" + (ttmpdate.getMonth() + 1)).slice(-2);
    ttstr += "<span class=\"txtClrHdr\"  style=\"margin-left: 17px\">" + ttmpdstr + " - " + quid + "</span><br>";
    ttstr += "<span class=\"txtClrHdr\"  style=\"margin-left: 17px\">Here is your message list</span>";
    ttstr += "<span><a href=\"javascript:JSSHOP.ui.showReplyMsgBox('nada','" + tts.ms_threadid + "','" + c + "');\">" + tts.ms_viewed + "</a></span>";
    ttstr += "</div>";
 // ttstr = "<a href=\"index.html?pid=aa-add-shop\">" + stxt[1] + "</a>";
 tatmpTDQI = document.getElementById("includedContent");
    tatmpTDQI.innerHTML = ttstr;
    */
}


};


JSSHOP.ui.doMsgList = function(a,theResp,ttcb) {


hasr = "n";
fullstr = "";
var arrToFill = null;
arrToFill = [];
arrToFill = JSON.parse(theResp);
var len = arrToFill.length;
var iint = 0;
var pcid = 0;
tstr = "";
while(iint < len) {
ts = arrToFill[iint];
tstr += "<div id=\"dvMsgT" + ts._id + "\" style=\"min-height: 45px;margin:15px;margin-bottom:18px;\" class=\"rtable bkgdClrNrml slmtblpadding\">";
tmpdate = new Date(ts.msg_dadded * 1000);
tmpdstr = "<b>" + ("0" + tmpdate.getDate()).slice(-2) + "</b>/" + ("0" + (tmpdate.getMonth() + 1)).slice(-2);
tstr += "<span class=\"txtClrHdr\" style=\"margin-left: 7px;\">" + tmpdstr + " : " + quid;
if(ts.msg_userid == quid || ts.msg_to_userid == quid || ts.msg_cartid == cartID  ) {
tstr += "<a href=\"javascript:JSSHOP.ui.showReplyMsgBox('nada','" + ts._id + "','" + ttcb + "');\">" + ts.msg_status + "</a>";
} else {
tstr += " - " + ts.msg_status;
}
tstr += "</span><br>";
tstr += "<div class=\"txtClrHdr\" style=\"margin-left: 7px\"><span><a href=\"index.html?pid=aa-show-messages&threadid=" + ts._id + "&cid=" + cid + "\"><b>" + ts.msg_subject + "</b></a></span><br>" + ts.msg_matter + "</div>";
if(ts.msg_media.indexOf(".") != -1) {
tstr += "<div class=\"txtClrHdr\" style=\"margin-left: 7px\"><span><a href=\"index.html?pid=aa-show-messages&threadid=" + ts._id + "&cid=" + cid + "\"><img src=\"images/msgimgs/s_thumb" + ts.msg_media + "\" class=\"icndbtn\"></a></span></div>";

}

tstr += "</div>";
iint++;
}

if(arrToFill[0]) {
} else {
}
// tstr += "<a href=\"javascript:JSSHOP.ui.showMsgBox('product','" + ts._id + "','" + ttcb + "');\">" + stxt[700] + "</a>";

return tstr;
// document.getElementById("includedContent").innerHTML = tstr;
};


JSSHOP.ui.doNuMsgList = function(a,theResp,ttcb) {
    hasr = "n";
    fullstr = "";
    var arrNuMLst = null;
    arrNuMLst = "";
    arrNuMLst = [];
    arrNuMLst = JSON.parse(theResp);
    currMsgsIArr = null;
    currMsgsIArr = "";
    currMsgsIArr = [];
    currMsgsIArr =  JSON.parse(theResp);
    var len = arrNuMLst.length;
    var iint = 0;
    var pcid = 0;
    tstr = "";
    while(iint < len) {
        ts = arrNuMLst[iint];
        // Determine other party info
        var otherUserId, otherUserName, otherUserIcon;
        // if guest user
        if(ts.msg_userid == "0" || ts.msg_userid == "noQvalue" || ts.msg_userid == 0) {
            otherUserId = ts.msg_userid;
            otherUserName = ts.msg_from;
            otherUserIcon = ts.msg_from_icon;
            console.log("otherUserId (icon) guest user: " + otherUserIcon);
        } else if(ts.msg_userid == quid) {
            // Current user is sender, other party is recipient
            otherUserId = ts.msg_to_userid;
            otherUserName = ts.msg_to;
            otherUserIcon = ts.msg_to_icon;
            console.log("otherUserId (icon)ts.msg_userid == quid: " + otherUserIcon);
        } else {
            // Current user is recipient, other party is sender
            otherUserId = ts.msg_userid;
            otherUserName = ts.msg_from;
            otherUserIcon = ts.msg_from_icon;
            console.log("otherUserId (icon) ts.msg_userid != quid: " + otherUserIcon);
        }
         var  tIAGstr = " ";
        // Facebook messenger style message list
       //  tstr += "<div id=\"dvMsgT" + ts._id + "\" onclick=\"JSSHOP.ui.prepMsgBox('" + otherUserId + "','" + otherUserName + "','" + otherUserIcon + "','noQvalue','donada');\" style=\"margin:10px;padding:10px;border-radius:10px;cursor:pointer;\" class=\"bkgdClrNrml\">";
        // if ts.msg_userid is 0 or noQvalue tstr += "<div id=\"dvMsgT" + ts._id + "\" onclick=\"JSSHOP.ui.prepMsgBox('" + otherUserId + "','" + otherUserName + "','" + otherUserIcon + "','noQvalue','donada');\" style=\"margin:10px;padding:10px;border-radius:10px;cursor:pointer;\" class=\"bkgdClrNrml\">";
        if(ts.msg_userid == "0" || ts.msg_userid == "noQvalue" || ts.msg_userid == 0) {
            tstr += "<div id=\"dvMsgT" + ts._id + "\" onclick=\"JSSHOP.ui.popGuestMsgBox('" + iint + "');\" style=\"margin:10px;padding:10px;border-radius:10px;cursor:pointer;\" class=\"bkgdClrNrml\">";
            tIAGstr = "<span class=\"txtSmall txtClrGrey\"> (" + stxt[731] + ")</span>";
        } else {
            tstr += "<div id=\"dvMsgT" + ts._id + "\" onclick=\"JSSHOP.ui.prepMsgBox('" + otherUserId + "','" + otherUserName + "','" + otherUserIcon + "','noQvalue','donada');\" style=\"margin:10px;padding:10px;border-radius:10px;cursor:pointer;\" class=\"bkgdClrNrml\">";
        }
         tstr += "<div style=\"display:flex;align-items:center;margin-bottom:5px;\">";
                 if(ts.msg_userid == "0" || ts.msg_userid == "noQvalue" || ts.msg_userid == 0) {
            tstr += "<div style=\"width:30px;height:30px;border-radius:50%;background:#ccc;margin-right:10px;display:flex;align-items:center;justify-content:center;font-weight:bold;\">" + otherUserName.charAt(0).toUpperCase() + "</div>";
        } else if(otherUserIcon && otherUserIcon != "") {
            tstr += "<img src=\"images/user/s_thumb" + otherUserIcon + "\" style=\"width:30px;height:30px;border-radius:50%;margin-right:10px;\">";
        } else {
            tstr += "<div style=\"width:30px;height:30px;border-radius:50%;background:#ccc;margin-right:10px;display:flex;align-items:center;justify-content:center;font-weight:bold;\">" + otherUserName.charAt(0).toUpperCase() + "</div>";
        }


        tstr += "<div style=\"flex:1;\">";
        tstr += "<span class=\"txtClrHdr txtBold\">" + otherUserName +  "</span>" + tIAGstr;
        tmpdate = new Date(ts.msg_dadded * 1000);
        tmpdstr = ("0" + tmpdate.getDate()).slice(-2) + "/" + ("0" + (tmpdate.getMonth() + 1)).slice(-2) + " " + ("0" + tmpdate.getHours()).slice(-2) + ":" + ("0" + tmpdate.getMinutes()).slice(-2);
        tstr += "<span class=\"txtSmall\" style=\"margin-left:10px;color:#666;\">" + tmpdstr + "</span>";
        tstr += "</div>";
        tstr += "</div>";

        // Message subject and content
        tstr += "<div style=\"margin-left:40px;\">";
        if(ts.msg_subject && ts.msg_subject != "") {
            tstr += "<div class=\"txtBold txtClrHdr\">" + ts.msg_subject + "</div>";
        }
        tNewDecdAndClnMtr = decodeURIComponent(ts.msg_matter);
        tSHrtAndClnMtr = tNewDecdAndClnMtr.replace(/<\/?[^>]+(>|$)/g, ""); // Strip HTML tags
        if(tSHrtAndClnMtr.length > 100) {
            tSHrtAndClnMtr = tSHrtAndClnMtr.substring(0, 100) + "...";
        }
        console.log("tNewDecdAndClnMtr: " + tNewDecdAndClnMtr);

        tstr += "<div id=\"dvMsgThrd" + ts._id + "\" class=\"txtClrHdr\">" + tNewDecdAndClnMtr + "</div>";
        tstr += "</div>";

        // Media if exists
        if(ts.msg_media && ts.msg_media.indexOf(".") != -1) {
            tstr += "<div style=\"margin-left:40px;margin-top:5px;\">";
            tstr += "<img src=\"images/msgimgs/s_thumb" + ts.msg_media + "\" style=\"max-width:200px;max-height:200px;border-radius:5px;\">";
            tstr += "</div>";
        }

        tstr += "</div>";
        iint++;
    }

    if(arrNuMLst[0]) {
    } else {
    }

    return tstr;
};


JSSHOP.ui.doNuMsgThread = function(a,theResp,c) {
    console.log("doNuMsgThread:1 " + theResp);
    annewel = document.createElement('div');

    tfullstr = "";
    var tarrToFill = null;
    tarrToFill = "";
    tarrToFill = [];
    tarrToFill = JSON.parse(theResp);

    tarrTemp = JSON.parse(theResp);
 // tarrTemp.sort((a, b) => b.ms_dadded - a.ms_dadded); // Sort by date added descending
    console.log("tarrTemp: " + JSON.stringify(tarrTemp));
    // tarrTemp = tarrTemp.reverse(); // Reverse to get ascending order
    // console.log("tarrTemp.reversed: " + JSON.stringify(tarrTemp));
    var tlen = tarrTemp.length;
    var tiint = 0;
    var tpcid = 0;
    ttstr = "";
    var threadId = "";

    while(tiint < tlen) {
        ttstr = "";
        thasr = "n";
        tts = tarrTemp[tiint];
        nthreadId = tts.ms_threadid; // Store thread ID for later use


        // Message content

        tThrdMtr = tts.ms_matter;

            ttmsgmatter = decodeURIComponent(tThrdMtr);
            ttmsgmatter = ttmsgmatter.replace(/<\/?[^>]+(>|$)/g, ""); // Strip HTML tags
            tShrtMMatter = ttmsgmatter;
            if(tShrtMMatter.length > 100) {
                tShrtMMatter = tShrtMMatter.substring(0, 100) + "...";
            }

            console.log("mtr-ttmsgmatter.decodeURIComponent: " + ttmsgmatter);
        ttstr += "<div class=\"txtSmall txtClrGrey\">" + ttmsgmatter + "</div>";

        // Timestamp
        ttmpdate = new Date(tts.ms_dadded * 1000);
        ttmpdstr = ("0" + ttmpdate.getHours()).slice(-2) + ":" + ("0" + ttmpdate.getMinutes()).slice(-2);
        ttstr += "<div style=\"font-size:11px;margin-top:5px;opacity:0.7;\">" + ttmpdstr + "</div>";


        // Media if exists
        if(tts.ms_media && tts.ms_media.indexOf(".") != -1) {
            if(tts.ms_from == quid) {
                ttstr += "<div style=\"display:flex;justify-content:flex-end;margin:5px;\">";
            } else {
                ttstr += "<div style=\"display:flex;margin:5px;\">";
            }
            ttstr += "<img src=\"images/msgimgs/s_thumb" + tts.ms_media + "\" style=\"max-width:200px;max-height:200px;border-radius:10px;\">";
            ttstr += "</div>";
        }
        tDStr = "dvMsgThrd" + nthreadId;
         if(document.getElementById(tDStr)) {
            tastmpTDQI = document.getElementById(tDStr);

            tastmpTDQI.innerHTML = ttstr; // Clear previous content

        }
        tiint++;
    }




};




function doUMsgThread(atmdiv,theResp,ttcb) {
  console.log("doUMsgThread: " + theResp);
    var tFllArr = JSON.parse(theResp);
    var len = tFllArr.length;
    if(tFllArr[0]) {
    var iint = 0;
    var tstr = "";


    /*

CREATE TABLE `qmsg` (
  `_id` int(11) NOT NULL,
  `ms_rtype` int(11) DEFAULT NULL,
  `ms_threadid` varchar(12) DEFAULT NULL,
  `ms_from` varchar(26) DEFAULT NULL,
  `ms_to` varchar(56) DEFAULT NULL,
  `ms_viewed` varchar(5) DEFAULT NULL,
  `ms_matter` text DEFAULT NULL,
  `ms_media` text DEFAULT NULL,
  `ms_wildkey` varchar(26) DEFAULT NULL,
  `ms_rating` int(11) DEFAULT NULL,
  `ms_vala` varchar(56) DEFAULT NULL,
  `ms_valb` varchar(56) DEFAULT NULL,
  `ms_dadded` varchar(12) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `qmsg`
--

INSERT INTO `qmsg` (`_id`, `ms_rtype`, `ms_threadid`, `ms_from`, `ms_to`, `ms_viewed`, `ms_matter`, `ms_media`, `ms_wildkey`, `ms_rating`, `ms_vala`, `ms_valb`, `ms_dadded`) VALUES
(21, 0, '48', 'pnunw1ntgxl', '', '-', 'answer from 501b', '', '', 5, '', '', '1710065651'),
(22, 0, '48', 'wwpb5jyf82', '', '-', '601 says it sucks', '', '', 5, '', '', '1710065765'),
(23, 0, '48', 'wwpb5jyf82', '', '-', '601 says it again', '', '', 5, '', '', '1710065829'),
(24, 0, '48', 'pnunw1ntgxl', '', '-', 'chill 601', '', '', 5, '', '', '1710065858'),
(25, 0, '48', 'pnunw1ntgxl', '', '-', 'chill in thread to', '', '', 5, '', '', '1710065883'),
(26, 0, '48', 'pnunw1ntgxl', '', '-', 'chill rahboo', '', '', 5, '', '', '1710066063'),
(27, 0, '49', 'pnunw1ntgxl', '', '-', 'what is it 601?', '', '', 5, '', '', '1710081353'),
(28, 0, '49', 'wwpb5jyf82', '', '-', 'reply 501', '', '', 5, '', '', '1710081410');
    */


    while(iint < len) {
      var ts = tFllArr[iint];
      ttmsstr = "";
      /*
        tstr += "<div id=\"dvMsgT" + ts._id + "\" style=\"min-height: 45px;margin:15px;margin-bottom:18px;\" class=\"rtable bkgdClrNrml slmtblpadding\">";
        ttmpdate = new Date(ts.ms_dadded * 1000);
        ttmpdstr = "<b>" + ("0" + ttmpdate.getDate()).slice(-2) + "</b>/" + ("0" + (ttmpdate.getMonth() + 1)).slice(-2);
        tstr += "<span class=\"txtClrHdr\" style=\"margin-left: 7px;\">" + ttmpdstr + " - " + ts.ms_from + "</span><br>";
        tstr += "<div class=\"txtClrHdr\" style=\"margin-left: 7px\">" + ts.ms_matter + "</div>";
        if(ts.ms_media.indexOf(".") != -1) {
            tstr += "<div class=\"txtClrHdr\" style=\"margin-left: 7px\"><span><a href=\"index.html?pid=aa-show-messages&threadid=" + ts.ms_threadid + "&cid=" + cid + "\"><img src=\"images/msgimgs/s_thumb" + ts.ms_media + "\" class=\"icndbtn\"></a></span></div>";
        }
        tstr += "</div>";
        */

       // use facebook style colors depending on who sent the message in tstr
       tFTMMstr = "";
         tATMMstr = ts.ms_matter;
        tTMMstr = "";
        // DECODE URI COMPONENT
        tTMMstr = decodeURIComponent(tATMMstr);

        console.log("mtr-tTMMstr.decodeURIComponent: " + tTMMstr);
       if(tTMMstr.indexOf("#PROPID:") != -1) {
        console.log("Found #PROPID: in message matter");
        var tpropArr = tTMMstr.split("#PROPID:");
        var tpropid = tpropArr[1];

        console.log("Extracted property ID:" + tpropid);
        tATMMstr = tTMMstr.replace("#PROPID:" + tpropid, "<a href=\"javascript:eindex('aa-show-prop','pid=aa-show-prop&prpid=" + tpropid + "')\"><u>#PROPID:" + tpropid + "</u></a>");
        tFTMMstr = tATMMstr;
    } else {
        tFTMMstr = tTMMstr;
    }
    // FIND LINK URLS AND MAKE THEM CLICKABLE
    // urlPattern = /(https?:\/\/[^\s]+)/g;
    // THERE MAY BE HTML < after the url address so we need to exclude that from the url
   var  urlPattern = /(https?:\/\/[^\s<]+)/g;
    tFTMMstr = tFTMMstr.replace(urlPattern, function(url) {
        return '<a href="' + url + '" target="_blank" class="txtDecorUline">' + url + '</a>';
    });
         if(ts.ms_from == quid) {
        tstr += "<div id=\"dvMsgT" + ts._id + "\" style=\"min-height: 45px;margin:15px;margin-bottom:18px;color:#FFFFFF;\" class=\"slmtable bkgdClrHdr slmtblpadding txtClrWhite\">";
         } else {
        tstr += "<div id=\"dvMsgT" + ts._id + "\" style=\"min-height: 45px;margin:15px;margin-bottom:18px;\" class=\"rtable bkgdClrNrml slmtblpadding\">";
            }
        ttmpdate = new Date(ts.ms_dadded * 1000);
        ttmpdstr = "<b>" + ("0" + ttmpdate.getDate()).slice(-2) + "</b>/" + ("0" + (ttmpdate.getMonth() + 1)).slice(-2);
        // tstr += "<span class=\"txtClrHdr\" style=\"margin-left: 7px;\">" + ttmpdstr + " - " + ts.ms_from + "</span><br>";
        tstr += "<div  style=\"margin-left: 7px\">" + tFTMMstr + "</div>";
        if(ts.ms_media.indexOf(".") != -1) {
            tstr += "<div class=\"txtClrHdr\" style=\"margin-left: 7px\"><span><a href=\"index.html?pid=aa-show-messages&threadid=" + ts.ms_threadid + "&cid=" + cid + "\"><img src=\"images/msgimgs/s_thumb" + ts.ms_media + "\" class=\"icndbtn\"></a></span></div>";
        }
        tstr += "</div>";

        iint++;
    }
    // append to atmdiv
    tUTdv = document.createElement('div');
    tUTdv.innerHTML = tstr;
    document.getElementById(atmdiv).appendChild(tUTdv);
    tGMsgDos = null;
    } else {
     //    document.getElementById(atmdiv).appendChild(document.createElement('div')).innerHTML = "<div class=\"txtClrHdr\" style=\"margin-left: 7px\">No messages found</div>";
    }
    // scroll to bottom of atmdiv
    var msgDiv = document.getElementById(atmdiv);
    msgDiv.scrollTop = msgDiv.scrollHeight;

}

function doUMsgHdr(atmdiv,theResp,ttcb) {
    console.log("doUMsgHdr: " + theResp);
document.getElementById("ms_threadid").value = "";
  var tFllArr = JSON.parse(theResp);
  var len = tFllArr.length;
  if(tFllArr[0]) {
document.getElementById("ms_threadid").value = tFllArr[0]._id;
document.getElementById("ms_from").value = quid;
document.getElementById("ms_dadded").value = JSSHOP.getUnixTimeStamp();

    /* qmsgs table structure
    CREATE TABLE `qmsgs` (
  `_id` int(11) NOT NULL,
  `msg_rtype` int(11) DEFAULT NULL,
  `msg_threadid` varchar(12) DEFAULT NULL,
  `msg_cartid` varchar(32) DEFAULT NULL,
  `msg_prodid` varchar(32) DEFAULT NULL,
  `msg_userid` int(12) DEFAULT NULL,
  `msg_viewed` varchar(5) DEFAULT NULL,
  `msg_from` varchar(26) DEFAULT NULL,
  `msg_fromsg_email` varchar(50) DEFAULT NULL,
  `msg_fromsg_tel` varchar(20) DEFAULT NULL,
  `msg_fromsg_ip` varchar(22) DEFAULT NULL,
  `msg_to_userid` int(12) DEFAULT NULL,
  `msg_to` varchar(26) DEFAULT NULL,
  `msg_to_icon` varchar(50) DEFAULT NULL,
  `msg_to_email` varchar(50) DEFAULT NULL,
  `msg_subject` varchar(60) DEFAULT NULL,
  `msg_matter` text DEFAULT NULL,
  `msg_media` text DEFAULT NULL,
  `msg_priority` varchar(10) DEFAULT NULL,
  `msg_status` varchar(10) DEFAULT NULL,
  `msg_docomments` varchar(5) DEFAULT NULL,
  `msg_privacy` varchar(5) DEFAULT NULL,
  `msg_dadded` varchar(12) DEFAULT NULL,
  `msg_dmodified` varchar(12) DEFAULT NULL,
  `msg_modifiedby` varchar(26) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

*/
  var iint = 0;
  var tstr = "";
  while(iint < len) {
    var ts = tFllArr[iint];
    tMsgSTR = "";
    tmsUEgmatter = ts.msg_matter;

    // urldecode message matter
    tmsgmatter = decodeURIComponent(tmsUEgmatter);
    console.log("tmsgmatter.decodeURIComponent: " + tmsgmatter);
    if(tmsgmatter.indexOf("#PROPID:") != -1) {

        var tSpropid = tmsgmatter.split("#PROPID:");
        var tpropid = tSpropid[1];
        console.log("Extracted property ID for link: " + tpropid);
        tAsmsgmatter = tmsgmatter.replace("#PROPID:"+tpropid, "<a href=\"javascript:eindex('aa-show-prop','pid=aa-show-prop&prpid="+tpropid+"')\">#PROPID:"+tpropid+"</a>");
        tMsgSTR += tAsmsgmatter;
        console.log("tmsgmatter with propid link: " + tAsmsgmatter);
    } else {
        tMsgSTR += tmsgmatter;
    }
    /*
    tstr += "<div id=\"dvMsgHdr" + ts._id + "\" style=\"min-height: 45px;margin:15px;margin-bottom:18px;\" class=\"rtable bkgdClrNrml slmtblpadding\">";
    tstr += "<span class=\"txtClrHdr\" style=\"margin-left: 7px;\">" + ts.msg_subject + "</span><br>";
    tstr += "<div class=\"txtClrHdr\" style=\"margin-left: 7px\">" + ts.msg_matter + "</div>";
    tstr += "</div>";
    */
   // use facebook style colors depending on who sent the message in tstr
   if(ts.msg_userid == quid) {
    tstr += "<div id=\"dvMsgHdr" + ts._id + "\" style=\"min-height: 45px;margin:15px;margin-bottom:18px;\" class=\"rtable bkgdClrBBlue slmtblpadding txtClrWhite\">";
   } else {
    tstr += "<div id=\"dvMsgHdr" + ts._id + "\" style=\"min-height: 45px;margin:15px;margin-bottom:18px;\" class=\"rtable bkgdClrNrml slmtblpadding\">";
    }
    ttmpdate = new Date(ts.msg_dadded * 1000);
    ttmpdstr = "<b>" + ("0" + ttmpdate.getDate()).slice(-2) + "</b>/" + ("0" + (ttmpdate.getMonth() + 1)).slice(-2);
    // tstr += "<span style=\"margin-left: 7px;\">" + ttmpdstr + " - " + ts.msg_from + "</span><br>";
    tstr += "<div style=\"margin-left: 7px\">" + tMsgSTR + "</div>";

    tstr += "</div>";
    iint++;
  }
  document.getElementById(atmdiv).innerHTML = tstr;
  tGMsgDos = null;
  tGMsgDos = {};
  tGMsgDos["ws"] = "where ms_threadid=?"
  tGMsgDos["wa"] = [tFllArr[0]._id];
    tGMsgDos["o"] = "ms_dadded ASC";
oi = getNuDBFnvp("qmsg",5,null,tGMsgDos);
doQComm(oi["rq"], atmdiv, "doUMsgThread");


  } else {
    // document.getElementById(atmdiv).innerHTML = "<div class=\"txtClrHdr\" style=\"margin-left: 7px\">No messages found</div>";
    // show a facebook type from incom with view profile link
    document.getElementById(atmdiv).innerHTML = "<div class=\"rtable bkgdClrNrml slmtblpadding txtClrHdr\" style=\"min-height: 45px;margin:15px;margin-bottom:18px;\">Start a new message</div>";
  }



};

function showAReplyMsgSave(tamsg, tbmsg, tcmsg){
try {
JSSHOP.ui.doMsgThread(tamsg, JSON.stringify(JSSHOP.shared.getKNVParr(JSSHOP.shared.getDynFrmVals(document["qmsg"], "tmp_"))), "doNada");
// JSSHOP.ui.popAndFillLbox(tamsg + tbmsg + tcmsg);
} catch(e) {
alert("no showReplyMsgSave: " + e);
}
}

function showReplyMsgSave(tamsg, tbmsg, tcmsg){
try {
// JSSHOP.ui.popAndFillLbox(tamsg + tbmsg + tcmsg);

procNuUIitem("qmsgs","msg_dmodified",tamsg,JSSHOP.getUnixTimeStamp(),tamsg);

} catch(e) {
alert("no showReplyMsgSave: " + e);
}
}

JSSHOP.ui.doReplyMsgSave = function(tmpMsgType, tmpMsgVal, tTrmsCB){
try {
alert("JSSHOP.ui.doReplyMsgSave: " + tmpMsgType + " .." + tmpMsgVal)
JSSHOP.shared.setFrmFieldVal("qmsg","ms_threadid", tmpMsgVal);
JSSHOP.shared.setFrmFieldVal("qmsg", "ms_from", quid);
JSSHOP.shared.setFrmFieldVal("qmsg", "ms_dadded", JSSHOP.getUnixTimeStamp());

JSSHOP.shared.setFrmFieldVal("qmsgs", "msg_dmodified", JSSHOP.getUnixTimeStamp());
JSSHOP.shared.setFrmFieldVal("qmsgs", "msg_modifiedby", cartID);


// JSSHOP.shared.setDynFrmVals(document["qmsg"], "tmp_");
tmpDOs = null;
tmpDOs = {};
tmpDOs["knvp"] = JSSHOP.shared.getKNVParr(JSSHOP.shared.getDynFrmVals(document["qmsg"], "tmp_"));
oi = getNuDBFnvp("qmsg",6,null,tmpDOs);
doQComm(oi["rq"], tTrmsCB, "showReplyMsgSave");


// alert(oi["rq"]);
// JSSHOP.ui.popAndFillLbox("Thank you!<b>" + oi["rq"]);
} catch(e) {
alert("no JSSHOP.ui.doReplyMsgSave: " + e);
}
};

JSSHOP.ui.showReplyMsgBox = function(tmpMsgType, tmpMsgVal, theTcb){
try {
} catch(e) {
    alert("no JSSHOP.ui.showMsgBox: " + e);
    }
tfsb = nCurrFFieldOb();
tfsb.fid = "btnMsgsave";
tfsb.fty = "button";
tfsb.fcl = function() { JSSHOP.ui.setSaveBtnClick(this, function(){JSSHOP.ui.doReplyMsgSave(tmpMsgType, tmpMsgVal, theTcb)}) };

tAllowedStr = "ms_matter";
if(quid == "0") {
// tAllowedStr += "msg_fromsg_emailmsg_fromsg_tel";
}
msgFObj =  JSSHOP.shared.rndrDynFrmVals(document["qmsg"], "tmp_", tAllowedStr, tfsb);
retRndrObj["rndrStr"] = tmpVstr;
retRndrObj["rndrFobj"] = rndrFFObjArr;
JSSHOP.ui.popAndFillLbox("OK<br>" + msgFObj.rndrStr);
setTimeout("JSSHOP.shared.initFrmComps(retRndrObj.rndrFobj)", 500);

};




function showMsgSave(tamsg, tbmsg, tcmsg){
JSSHOP.ui.popAndFillLbox(tamsg + tbmsg + tcmsg);
}

function fnishGstMsgSave(tamsg, tbmsg, tcmsg){
try {
JSSHOP.ui.popAndFillLbox(stxt[709]); // thank you message
} catch(e) {
alert("no fnishGstMsgSave: " + e);
}
}

JSSHOP.ui.doMsgSave = function(tmpMsgType, tmpMsgVal, tempCB){
   //  JSSHOP.shared.setDynFrmVals(document["qmsgs"], "tmp_");
    console.log("doMsgSave: " + tmpMsgType + " :: " + tmpMsgVal + " :: " + tempCB);
tmpmtid = Math.random().toString(36).slice(2);
JSSHOP.shared.setFrmFieldVal("qmsgs","msg_threadid", tmpmtid);
JSSHOP.shared.setFrmFieldVal("qmsgs","msg_userid", quid);
// JSSHOP.shared.setFrmFieldVal("qmsgs","msg_cartid", cartID);
JSSHOP.shared.setFrmFieldVal("qmsgs","msg_prodid", itemid);
JSSHOP.shared.setFrmFieldVal("qmsgs","msg_dmodified", JSSHOP.getUnixTimeStamp());
// JSSHOP.shared.setFrmFieldVal("qmsgs","msg_to", c_uid.value);
JSSHOP.shared.setFrmFieldVal("qmsgs","msg_dadded", JSSHOP.getUnixTimeStamp());
tChatInpstr = "chat-input-" + tmpMsgVal;
tMsgMatter = document.getElementById(tChatInpstr).innerHTML;
// alert("tMsgMatter: " + document.getElementById("msg_matter").value);
// document.getElementById("msg_matter").value = tMsgMatter;
// if quid == 0 then set from email and tel
if((quid == "0") || (quid == 0) || (quid == "noQvalue")) {
    // id email or tel are empty show alert and return
    if(document.getElementById("tmp_msg_fromsg_email").value == "" && document.getElementById("tmp_msg_fromsg_tel").value == "") {
        alert(stxt[730]); // please provide email and tel
        return;
    }
    JSSHOP.shared.setFrmFieldVal("qmsgs","msg_from", document.getElementById("tmp_msg_from").value);
    JSSHOP.shared.setFrmFieldVal("qmsgs","msg_fromsg_tel", document.getElementById("tmp_msg_fromsg_tel").value);
    JSSHOP.shared.setFrmFieldVal("qmsgs","msg_fromsg_email", document.getElementById("tmp_msg_fromsg_email").value);
    // JSSHOP.shared.setFrmFieldVal("qmsgs","msg_subject", JSSHOP.shared.getCurrSelectTxt(document.getElementById("tmp_msg_subject")));

}
tmpDOs = {};
// tmpDOs["knvp"] = JSSHOP.shared.getKNVParr(JSSHOP.shared.getDynFrmVals(document["qmsgs"], "tmp_"));
tmpDOs["knvp"] = JSSHOP.shared.getFrmVals(document["qmsgs"], "nada");
oi = getNuDBFnvp("qmsgs",6,null,tmpDOs);
doQComm(oi["rq"], null, tempCB);
// alert(oi["rq"]);
// JSSHOP.ui.popAndFillLbox("Thank you!<b>" + oi["rq"]);
};

var nTmpMsgBxOb = function() {
   //  alert("nTmpMsgBxOb" + quid  );
tAllowedStr = "msg_subjectmsg_matter";
if(quid == "0") {
tAllowedStr += "msg_frommsg_emailmsg_tel";
}
aTmpMsgBxOb = null;
aTmpMsgBxOb = {};
aTmpMsgBxOb["m_btn1"] = stxt[86]; // send button text
aTmpMsgBxOb["m_btn2"] = stxt[87]; // cancel button text
aTmpMsgBxOb["m_btn1_cl"] = "btnMsgsend"; // send button id
aTmpMsgBxOb["m_btn2_cl"] = "btnMsgcancel"; // cancel button id
aTmpMsgBxOb["m_btn1_fnc"] = "doNada"; // send button function
aTmpMsgBxOb["m_btn2_fnc"] = "JSSHOP.ui.closeLbox"; // cancel button function
aTmpMsgBxOb["m_to_userid"] = 1; // send to user id
aTmpMsgBxOb["m_to"] = "msg_to"; // send to user field name
aTmpMsgBxOb["m_to_icon"] = "&#xe0be;"; // send to user icon
aTmpMsgBxOb["m_from_icon"] = "&#xe0be;"; // from user icon
aTmpMsgBxOb["m_type"] = "product"; // internal msg type
aTmpMsgBxOb["m_val"] = "1"; // internal msg token
aTmpMsgBxOb["m_item"] = "noQvalue"; // internal msg item
aTmpMsgBxOb["m_strAll"] = tAllowedStr; // message form values to render
aTmpMsgBxOb["m_useAnx"] = "noAnx"; // add image upload btn
aTmpMsgBxOb["m_tmpCB"] = "doNada"; // null function as cllback
return aTmpMsgBxOb;
};


function getMsgsFromTOU(touid) {
tmpDOs = null;
tmpDOs = {};
// tmpDOs["ws"] = "where msg_to_userid=? or msg_userid=?";
tmpDOs["ws"] = "where (msg_to_userid=? and msg_userid=?) or (msg_userid=? and msg_to_userid=?)";
tmpDOs["wa"] = [touid,quid, touid, quid];
oi = getNuDBFnvp("qmsgs",5,null,tmpDOs);
doQComm(oi["rq"], "chat-messages-" + touid, "doUMsgHdr");
}


function doUMsglinks(tULUID, tdivMID) {
    tmpDOs = null;
    tmpDOs = {};
    tmpDOs["ws"] = "where k_userid=? and k_rtype=?";
    tmpDOs["wa"] = [tULUID,5];
    oi = getNuDBFnvp("qlinks",5,null,tmpDOs);
    doQComm(oi["rq"], tdivMID, "getUMsgLnkStr");
     //  JSSHOP.ui.showMsgBox(tPPrpTy,tPPrpI,tTPcb);
    }

    var rndrUMsgBtns = function(za,zb,zc) {
        console.log("rndrUMsgBtns: " + zb);
        theTRndrArr = [];
        theTRndrArr = JSON.parse(zb);
        var rclen = theTRndrArr.length;
        var rciint = 0;
        var rcsblen = 0;
        var lastcatID = "";
        rcts = null;
        raqcL = "";
        rcnsDv = document.createElement('div');
        // rcL = "<table style=\"width:100%;\"><tr>";
        while(rciint < rclen) {

        rcts = theTRndrArr[rciint];
        tKcat = rcts.k_category;
        tKmatter = unescape(decodeURIComponent(rcts.k_matter));
        tKshrtMatter = tKmatter;
        tKfnlMatter = "";
        if(tKmatter.length > 20) {
            tKshrtMatter = tKmatter.substring(0,20) + "...";
        }
        /*

    // create buttons to send email or sms
    tRSstr += "<div id=\"dvApraiseBtns\" style=\"margin:5px;\"><table><tr>";
    if(hasGCPemail == "y") {
        // JSSHOP.ui.setNuCBBC

    tRSstr += "<td><span class=\"form-control bkgdClrTtl brdrClrHdr txtClrRed crsrPointer\"  onclick=\"JSSHOP.ui.setCBBClickClr(this,this.className + ' txtBig txtBold',this.className, function(){JSSHOP.ads.doGenShpActn(0,'email','" + theTprfx + "');});\"><i class=\"nav-material-icons  txtClrHdr\" alt=\"btn_email\" title=\"email\" value=\"email\" style=\"margin-bottom:4px;margin-left:4px;margin-right:2px;vertical-align: middle;\">&#xe0be;</i> Email</span></td>";
    }
    if(hasGCPSms == "y") {
    tRSstr += "<td>&nbsp;</td><td><span class=\"form-control bkgdClrTtl brdrClrHdr txtClrRed crsrPointer\" onclick=\"JSSHOP.ui.setCBBClickClr(this,this.className + ' txtBig txtBold',this.className, function(){JSSHOP.ads.doGenShpActn(0,'sms','" + theTprfx + "');});\"><i class=\"nav-material-icons  txtClrHdr\" alt=\"btn_sms\" title=\"sms\" value=\"btn_email\" styke=\"margin-bottom:4px;margin-left:4px;margin-right:2px;vertical-align: middle;\">&#xe625;</i> SMS</span></td>";
    }
    tRSstr += "</tr></table></div>";

 */
        switch(tKcat) {
            case "sms":
                raqcL += "<span style=\"padding: 2px;margin:2px;white-space: nowrap;display: inline-block;\" class=\"crsrPointer slmtable brdrClrHdr\"  onclick=\"JSSHOP.ui.setCBBClickClr(this,this.className + ' txtBig txtBold brdrClrHdr',this.className, function(){JSSHOP.ads.doGenShpActn(0,'sms','" + tKmatter + "');});\"><i class=\"nav-material-icons txtClrGreen\" alt=\"btn_sms\" title=\"sms\" value=\"btn_email\" style=\"margin-bottom:4px;margin-left:4px;margin-right:2px;vertical-align: middle;\">&#xe625;</i> SMS</span>";
                break;
                case "email":
                   raqcL += "<span style=\"padding: 2px;margin:2px;white-space: nowrap;display: inline-block;\"  class=\"crsrPointer slmtable brdrClrHdr\"  onclick=\"JSSHOP.ui.setCBBClickClr(this,this.className + ' txtBig txtBold brdrClrHdr',this.className, function(){JSSHOP.ads.doGenShpActn(0,'email','" + tKmatter + "');});\"><i class=\"nav-material-icons txtClrBlue\" alt=\"btn_email\" title=\"email\" value=\"email\" style=\"margin-bottom:4px;margin-left:4px;margin-right:2px;vertical-align: middle;\">&#xe0be;</i> Email</span>";
                    break;
                    case "whatsapp":
                       raqcL += "<span  style=\"padding: 2px;margin:2px;white-space: nowrap;display: inline-block;\" class=\"crsrPointer slmtable brdrClrHdr\"  onclick=\"JSSHOP.ads.doGenShpActn(0,'whatsapp','" + tKmatter + "');\"><i class=\"nav-material-icons txtClrGreen\" alt=\"btn_whatsapp\" title=\"whatsapp\" value=\"whatsapp\" style=\"margin-bottom:4px;margin-left:4px;margin-right:2px;vertical-align: middle;\">&#xe625;</i> WhatsApp</span>";
                        break;
                        case "telephone":
                           raqcL += "<span style=\"padding: 2px;margin:2px;white-space: nowrap;display: inline-block;\"  class=\"crsrPointer slmtable brdrClrHdr\"  onclick=\"JSSHOP.ui.setCBBClickClr(this,this.className + ' txtBig txtBold brdrClrHdr',this.className, function(){JSSHOP.ads.doGenShpActn(0,'tel','" + tKmatter + "');});\"><i class=\"nav-material-icons txtClrBlue\" alt=\"btn_tel\" title=\"tel\" value=\"tel\" style=\"margin-bottom:4px;margin-left:4px;margin-right:2px;vertical-align: middle;\">&#xe0cd;</i> Call</span>";
                    default:
                        break;
        }


         rciint++;
        }
       //  rcL += "<td></td></tr></table>";
        tRCLDv = document.createElement('div');
        tRCLDv.innerHTML = raqcL;
        document.getElementById(za).appendChild(tRCLDv);

        console.log("rndrUMsgBtns.za: " + za);
        // document.getElementById(za).innerHTML = rcL;
         };


  var rndrUMsgLnks = function(za,zb,zc) {
    console.log("rndrUMsgLnks: " + zb);
    // dvCoLinks.innerHTML = "";

    theArr = JSON.parse(zb);

    // alert("rndrCoLnks: " + theArr);
    var rclen = theArr.length;
    var rciint = 0;
    var rcsblen = 0;
    var lastcatID = "";
    rcts = null;

    var tmpScatA = {};
    rcnsDv = document.createElement('div');
    rcL = "<table style=\"width:100%;\">";
    while(rciint < rclen) {
    rcts = theArr[rciint];
    tKmatter = unescape(decodeURIComponent(rcts.k_matter));
    tKshrtMatter = tKmatter;
    tKfnlMatter = "";
    if(tKmatter.length > 20) {
        tKshrtMatter = tKmatter.substring(0,20) + "...";

    }
    if(tKmatter.indexOf("http") != -1) {
        tKfnlMatter = "<a href=\"" + tKmatter + "\" target=\"_blank\">" + tKshrtMatter + "</a>";
    } else {
        tKfnlMatter = tKshrtMatter;
    }

    // rcnsDv.className = "collection-item txtDecorNone margleft";
    rcL += "<tr><td><span class=\"txtBold\"><img src=\"images/misc/ts-icon-" + rcts.k_category + ".png\" class=\"icnsmlbtn\"></span></td>";
    rcL += "<td>" + tKfnlMatter;

    //rcL += "<tr><td><span class=\"txtBold\"><img src=\"images/misc/ts-icon-" + rcts.k_category + ".png\" class=\"icnsmlbtn\"></span></td><td><span class=\"txtSmall txtClrGrey\">" + rcts.k_title + "</span></td><td>" + unescape(decodeURIComponent(rcts.k_matter));
    rcL += "</td><td><button  onclick=\"javascript:doCoLinkDelete(" + rciint + "," + rcts._id + ");\" class=\"crsrPointer txtXLrg txtBold slmtable bkgdClrWhite brdrNone txtClrDrkGrn\"><i class=\"txtClrRed brdrClrWhite bkgdClrWhite menu-material-icons\" alt=\"delete\" title=\"delete\">&#xe92b;</i></button>";
    rcL += "</td></tr>";
    // rcnsDv.innerHTML = "<span class=\"txtBold\">" + rcts.k_category + "</span><br>" + rcts.k_matter;
    rciint++;
    }
    rcL += "</table>";

    // just the message buttons for now
    // document.getElementById(za).innerHTML = rcL;
    rndrUMsgBtns(za,zb,zc);
   };

  var getUMsgLnkStr = function(tCCLA, tCCLB, tCCLC) {
    if(tCCLB.indexOf("_id") != -1) {
        currCoLinksArr = null;
        currCoLinksArr = [];
    // alert("setCurrCoLinks: " + tCCLB);
    rndrUMsgBtns(tCCLA, tCCLB, tCCLC);
    // rndrUMsgLnks(tCCLA, tCCLB, tCCLC);
    }
    }


 JSSHOP.ui.showNuMsgBox = function(ttMsgBxObj){


    /* qmsgs table structure
    CREATE TABLE `qmsgs` (
  `_id` int(11) NOT NULL,
  `msg_rtype` int(11) DEFAULT NULL,
  `msg_threadid` varchar(12) DEFAULT NULL,
  `msg_cartid` varchar(32) DEFAULT NULL,
  `msg_prodid` varchar(32) DEFAULT NULL,
  `msg_userid` int(12) DEFAULT NULL,
  `msg_viewed` varchar(5) DEFAULT NULL,
  `msg_from` varchar(26) DEFAULT NULL,
  `msg_from_icon` varchar(50) DEFAULT NULL,
  `msg_fromsg_email` varchar(50) DEFAULT NULL,
  `msg_fromsg_tel` varchar(20) DEFAULT NULL,
  `msg_fromsg_ip` varchar(22) DEFAULT NULL,
  `msg_to_userid` int(12) DEFAULT NULL,
  `msg_to` varchar(26) DEFAULT NULL,
  `msg_to_icon` varchar(50) DEFAULT NULL,
  `msg_to_email` varchar(50) DEFAULT NULL,
  `msg_subject` varchar(60) DEFAULT NULL,
  `msg_matter` text DEFAULT NULL,
  `msg_media` text DEFAULT NULL,
  `msg_priority` varchar(10) DEFAULT NULL,
  `msg_status` varchar(10) DEFAULT NULL,
  `msg_docomments` varchar(5) DEFAULT NULL,
  `msg_privacy` varchar(5) DEFAULT NULL,
  `msg_dadded` varchar(12) DEFAULT NULL,
  `msg_dmodified` varchar(12) DEFAULT NULL,
  `msg_modifiedby` varchar(26) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

*/
JSSHOP.shared.setFrmFieldVal("qmsgs", "msg_userid", currQUsrObj._id);
JSSHOP.shared.setFrmFieldVal("qmsgs", "msg_from", currQUsrObj.u_fullname);
JSSHOP.shared.setFrmFieldVal("qmsgs", "msg_to_userid", ttMsgBxObj["m_to_userid"]);
JSSHOP.shared.setFrmFieldVal("qmsgs", "msg_to", ttMsgBxObj["m_to"]);
JSSHOP.shared.setFrmFieldVal("qmsgs", "msg_to_icon", ttMsgBxObj["m_to_icon"]);
JSSHOP.shared.setFrmFieldVal("qmsgs", "msg_from_icon", ttMsgBxObj["m_from_icon"]);

var tSNMBItemID = "noQvalue";

var tmpMsgType = "";
var tmpMsgVal = "";
var theTStrAllwd = "";
var boolDoAnx = "noAnx";
var atmpCB = "doNada";
var tMsgBxHdrSTr = "";
var tMsgBxFtrSTr = "";
var tfsb = null;
var tsbstr = "";
var tAllowedStr = "";
var msgFObj = null;
var tDefPropInqMsg = "";
var antMpPrpObj = null;

var tToIcn = "";
var tToNm = "";

tmpMsgType = ttMsgBxObj["m_type"];
tmpMsgVal = ttMsgBxObj["m_val"];
theTStrAllwd = ttMsgBxObj["m_strAll"];
boolDoAnx = ttMsgBxObj["m_useAnx"];
atmpCB = ttMsgBxObj["m_tmpCB"];

try {
tfsb = nCurrFFieldOb();
tfsb.fid = "btnMsgsave";
tfsb.fty = "button";
tfsb.ltxt = "stxt[70]";
tsbstr = "";
tfsb.fcl = function() { JSSHOP.ui.setSaveBtnClick(this, function(){JSSHOP.ui.doMsgSave(tmpMsgType, tmpMsgVal, atmpCB)}) };
if((boolDoAnx == "y") || (boolDoAnx == "yes")) {
tsbstr += "<div id=\"mmprogressBar\"></div>";
tsbstr += "<div id=\"mmprogressOuter\"></div>";
tsbstr += "<div id=\"mmmsgBox\"></div>";
tsbstr += "<div id=\"mmdragbox\"></div>";
tsbstr += "<div id=\"dvUploadBtn\" onclick=\"JSSHOP.shared.setFrmFieldVal('qmsgs', 'msg_dadded', JSSHOP.getUnixTimeStamp());\"  style=\"display:block;visibility:visible;margin-right:10px\"><button id=\"mmuploadBtn\" class=\"cls_button cls_button-small\"><ti data-ison=\"" + stxt[70] + "\" data-desc=\"btn_save\">Add</ti></button></div>";
}

tAllowedStr = theTStrAllwd;

// msgFObj =  JSSHOP.shared.rndrDynFrmVals(document["qmsgs"], "tmp_", tAllowedStr, "noQvalue");
// retRndrObj["rndrStr"] = tmpVstr;
// retRndrObj["rndrFobj"] = rndrFFObjArr;
tMsgBxHdrSTr = "New Message";

    /*
// tMsgBxHdrSTr = "User Message";
// tMsgBxHdrSTr is a div wuth the current tuid s_thumb u_icon on left and u_fullname on right
tMsgBxHdrSTr = "<table><tr><td><img src=\"images/user/s_thumb" + ttMsgBxObj["m_to_icon"] + "\" class=\"icnRndnUser\"></td><td>" + ttMsgBxObj.m_to + "</td></tr></table>";
// tMsgBdyStr = an editable div with id msg_matter
tMsgBdyStr = "<div  name=\"tmp_msg_matter\" id=\"tmp_msg_matter\" contenteditable=\"true\" class=\"form-control\"></div>";
// add a save button that calls JSSHOP.ui.doMsgSave('user', tmpMsgVal, atmpCB)
tMsgBdyStr += "<button class=\"slmtable brdrClrHdr bkgdClrDlg txtClrDhr txtBold\" onclick=\"JSSHOP.ui.doMsgSave('user', '" + tmpMsgVal + "', '" + atmpCB + "');\">" + stxt[70] + "</button>";

tsbstr += tMsgBdyStr;
*/
    tcloseBstr  = "<div onclick=\"JSSHOP.ui.closeLbox();\" class=\"slmtable txtClrLtBlue txtBold txtBig crsrPointer\" style=\"float:right;margin-left:20px;\"><i class=\"menu-material-icons txtBold txtClrLtBlue\" alt=\"close\" title=\"close\" value=\"close\" style=\"font-size:24px;\">&#xe5cd;</i></div>";

tMsgBxHdrSTr = '<div class="fb-chat-box" style="width:300px; height:400px; border:1px solid #ccc; border-radius:8px; overflow:hidden; display:flex; flex-direction:column; overflow-y:auto; margin:5px;">' +

'<div class="chat-header bkgdClrNrml txtClrHdr" style="padding:10px; display:flex; align-items:center;">' +
'<table style="width:100%;"><tr><td><a href="javascript:eindex(\'aa-show-user\',\'pid=aa-show-user&tuid=' + ttMsgBxObj["m_to_userid"] + '\')"><img src="images/user/s_thumb' + ttMsgBxObj["m_to_icon"] + '" alt="User" style="width:40px; height:40px; border-radius:50%; margin-right:10px;"></a></td>' +
// javascript:eindex('aa-show-user','pid=aa-show-user&tuid=' + ttMsgBxObj["m_to_userid"])
'<td style="flex-grow:1;"><span style="font-weight:bold;color:white;"><a href="javascript:eindex(\'aa-show-user\',\'pid=aa-show-user&tuid=' + ttMsgBxObj["m_to_userid"] + '\')" class="txtClrWhite">' + ttMsgBxObj.m_to + '</a><br><span class="txtSmall">';
// create a Contacts dropdown button in small letters that will toggle show/hide of div id dvMsgUlinks
tMsgBxHdrSTr += '<div class="dropdown" style="display:inline-block; position:relative;">' +
'<div id="btnSHContacts" onclick="JSSHOP.ui.toggleNuModule(\'btnSHCntctsI\',\'dvMsgUlinks\');" class="slmtable bkgdClrNrml brdrClrHdr txtClrHdr txtSmall" style="padding:4px 8px; border:none; border-radius:4px; cursor:pointer;"><table><tr><td class="txtSmall txtBold">Contacts</td><td><span id="btnSHCntctsI" style="margin-top:4px;;"><i class="small-material-icons" style="font-size:24px" alt="btn_show_more">&#xe5cf;</i></span></td></tr></table></div>' +
'</div>';

tMsgBxHdrSTr +=  '</span>' +
'</td><td>' +   tcloseBstr +
'</td></tr></table>' +
'</div>';
// add <div id=\"dvMsgUlinks\"></div>
tMsgBxHdrSTr += '<div id="dvMsgUlinks" style="padding:5px; background:#f5f6f7; border-bottom:1px solid #ccc; visibility:hidden; display:none;"></div>';
if(ttMsgBxObj["m_item"] != "noQvalue") {
tIprpIdx = parseInt(ttMsgBxObj["m_item"], 10);
    antMpPrpObj = currShopsArr[tIprpIdx];
    if(antMpPrpObj != null) {
        tSNMBItemID = antMpPrpObj._id;
        console.log("showNuMsgBox.antMpPrpObj: " + JSON.stringify(antMpPrpObj));
         JSSHOP.shared.setFrmFieldVal("qmsgs", "msg_prodid", antMpPrpObj._id);
        ttToPrpIcn = antMpPrpObj.pimage;
        tToPrpIcn = "images/property/s_thumb" + ttToPrpIcn;
        if(ttToPrpIcn.indexOf("updt_") != -1) {
            tCleanPrpIcn = ttToPrpIcn.replace("updt_", "");
            tToPrpIcn = "images/ucontent/" + tCleanPrpIcn;
        }
             if(ttToPrpIcn.indexOf("updt3d_") != -1) {
                tCleanPrpIcn = ttToPrpIcn.replace("updt3d_", "");
                tLZunzpdAurldecd = LZString.decompressFromEncodedURIComponent(tCleanPrpIcn);
                tToPrpIcn = tLZunzpdAurldecd;
            }
        tZpdToPrpNm = antMpPrpObj.pd_prptitle;
        tToPrpNm = LZString.decompressFromEncodedURIComponent(tZpdToPrpNm);
        tMsgBxHdrSTr += '<div class="chat-item-info" style="padding:10px; background:#e9ebee; border-bottom:1px solid #ccc; display:flex; align-items:center;">' +
        '<img src="' + tToPrpIcn + '" alt="Item" style="width:30px; height:30px; border-radius:4px; margin-right:10px;">' +
        '<span style="font-weight:bold; font-size:14px;">' + tToPrpNm + '</span>' +
        '</div>';
    }
}
tMBemojistr = JSSHOP.ui.getEmojiPickerHTML('chat-input-' + ttMsgBxObj["m_to_userid"], 'dvEmogiList' + ttMsgBxObj["m_to_userid"]);
// if quid == 0 or "noQvalue" then add a sending as guest message
if(quid == "0" || quid == "noQvalue") {
 tMsgBxHdrSTr += '<div style="margin-bottom:2px; padding:2px; background:#fff3cd; border:1px solid #ffeeba; border-radius:4px; color:#856404;" class="txtSmall">Please provide your email and phone number.</div>';
// add name and tel or email fields
tMsgBxHdrSTr += '<div style="display:flex; flex-direction:column;">' +
// add the name input field
'<input type="text" id="tmp_msg_from" name="tmp_msg_from" placeholder="' + stxt[703] + '" class="form-control" style="margin-bottom:5px;">' +
'<div style="margin:0px;padding:0px;border:0px;"><input type="text" id="tmp_msg_fromsg_tel" name="tmp_msg_fromsg_tel" placeholder="' + stxt[24] + '" class="form-control" style="margin-bottom:5px;"></div>' +
'<input type="text" id="tmp_msg_fromsg_email" name="tmp_msg_fromsg_email" placeholder="' + stxt[704] + '" class="form-control" style="margin-bottom:5px;">' +
'</div>';
// svftObj["msgsubject"]
 /*
tMsgBxHdrSTr += '<div class="chat-topics" style="padding:10px; background:white; border-top:1px solid #ccc;">' +
'<select id="tmp_msg_subject" name="tmp_msg_subject" class="form-control" onchange="JSSHOP.ui.setMsgSubject(this.value)">' +
'<option value="">' + stxt[705] + '</option>' +
'<option value="Visit">Visit</option>' +
'<option value="Pricing">Pricing</option>' +
'<option value="Financing">Financing</option>' +
'<option value="Other">Other</option>' +
'</select>' +
'</div>'; // end chat-topics

        tDDPPrpTypObj = JSSHOP.ui.getBSDDOptsO();
        tDDPPrpTypObj["ddtype"] = "noQvalue";
        tDDPPrpTypObj["fld"] = "ptype";
        tDDPPrpTypObj["lbl"] = stxt[927];
        tDDPPrpTypObj["val"] = ptype.value;
        tDDPPrpTypObj["kvpObj"] = svftObj["proptype"];
        tDDPPrpTypObj["cb"] = "donada";
        tDDPPrpTypObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
        tDDPPrpTypObj["lblcls"] = "txtSmall";
        tDDPPrpTypObj["valcls"] = "txtSmall";
        tDDPPrpTypObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
        tDDPPrpTypObj["horvert"] = "vertical";
        tDDPPrpTypObj["icn"] = "noQvalue";
        tDDPPrpTypStr = JSSHOP.ui.getNuBSdropDstr(tDDPPrpTypObj);
      */
      tDDPPrpTypObj = JSSHOP.ui.getBSDDOptsO();
        tDDPPrpTypObj["ddtype"] = "noQvalue";
        tDDPPrpTypObj["fld"] = "msg_subject";
        tDDPPrpTypObj["lbl"] = stxt[705];
        tDDPPrpTypObj["val"] = msg_subject.value;
        tDDPPrpTypObj["kvpObj"] = svftObj["msgsubject"];
             tDDPPrpTypObj["cb"] = "donada";
        tDDPPrpTypObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
        tDDPPrpTypObj["lblcls"] = "txtSmall";
        tDDPPrpTypObj["valcls"] = "txtSmall";
        tDDPPrpTypObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
        tDDPPrpTypObj["horvert"] = "horizontal";
        tDDPPrpTypObj["icn"] = "noQvalue";
        tDDMSubjStr = JSSHOP.ui.getNuBSdropDstr(tDDPPrpTypObj);
      tMsgBxHdrSTr += '<div class="form-control">' + tDDMSubjStr + '</div>';
     tMsgBxHdrSTr += '<div class="txtSmall txtClrGrey" style="margin-left:5px;">' + stxt[706] + '</div>';


} else {

tMsgBxHdrSTr += '<div class="chat-messages" id="chat-messages-' + ttMsgBxObj["m_to_userid"] + '" style="flex:1; padding:4px; overflow-y:auto; background:#f0f0f0;">';

tMsgBxHdrSTr += '<!-- Messages will be loaded here based on qmsgs table -->';
tMsgBxHdrSTr += '</div>';
}

// crea
tMsgBxHdrSTr += '<div class="chat-input-area" style="padding:4px; background:white;  display:flex;">';

if(quid == "0" || quid == "noQvalue") {
    tShowImstr = "no";

} else {
// add a unicode icon button to show a div of smileys and emojis only if quid != "0" or "noQvalue"
tMsgBxHdrSTr += '<button onclick="JSSHOP.ui.toggleEmojiPicker(\'dvEmogiList' + ttMsgBxObj["m_to_userid"] + '\');" style="padding:4px 8px; background:#f5f6f7; border:none; border-radius:4px; cursor:pointer; margin-right:10px;"><i class="nav-material-icons txtClrDrkGrn" style="font-size:20px;">&#xe420;</i></button>' +
// create dvEmogiList with a list of emojis and smileys to pick from. they will be inserted into the chat input div at cursor position
'<div id="dvEmogiList' + ttMsgBxObj["m_to_userid"] + '" style="display:none; position:absolute; bottom:60px; background:white; border:1px solid #ccc; border-radius:4px; padding:10px; box-shadow:0 2px 8px rgba(0,0,0,0.2); max-width:280px; max-height:200px; overflow-y:auto;min-width:280px;min-height:200px;">' +
 tMBemojistr +
'</div>';
}

tMsgBxHdrSTr += '<div contenteditable="true" id="chat-input-' + ttMsgBxObj["m_to_userid"] + '" placeholder="Type a message..." style="flex:1; padding:8px; border:1px solid #ccc; border-radius:4px; margin-right:10px; max-height:80px; overflow-y:auto;">';
tMsgBxHdrSTr += '</div>';
tMsgBxHdrSTr += '<button onclick="JSSHOP.ui.sendChatMessage(' + ttMsgBxObj["m_to_userid"] + ',\'' + tSNMBItemID + '\')" style="padding:8px 12px; background:#4267b2; color:white; border:none; border-radius:4px; cursor:pointer;" class="txtSmall">' + stxt[708] + '</button>' +
'</div>'; // end chat-input-area


'</div>'; // end fb-chat-box
JSSHOP.ui.popNuFillLbox(tMsgBxHdrSTr + tsbstr, 10);
// Add event listener to phone input for contact method selection
if(quid == "0" || quid == "noQvalue") {
    setTimeout(function() {
        var telInput = document.getElementById('tmp_msg_fromsg_tel');
        if(telInput) {
            telInput.addEventListener('input', function() {
                var contactDiv = document.getElementById('dvContactMethods');
                if(this.value.length > 1) {
                    if(!contactDiv) {
                        contactDiv = document.createElement('div');
                        contactDiv.id = 'dvContactMethods';
                        contactDiv.style.cssText = 'margin-top:5px; display:flex; gap:10px; flex-wrap:wrap;';
                        contactDiv.innerHTML =
                            '<label style="cursor:pointer; padding:2px 2px; background:white; color:black; border-radius:2px; white-space:nowrap; display:inline-block;"><input type="checkbox" name="contact_method" value="whatsapp"  style="margin-right:5px;">WhatsApp</label>' +
                            '<label style="cursor:pointer; padding:2px 2px; background:white; color:black; border-radius:2px; white-space:nowrap; display:inline-block;"><input type="checkbox" name="contact_method" value="sms"   style="margin-right:5px;">SMS</label>' +
                            '<label style="cursor:pointer; padding:2px 2px; background:white; color:black; border-radius:2px; white-space:nowrap; display:inline-block;"><input type="checkbox" name="contact_method" value="call"  style="margin-right:5px;">Call</label>';
                        this.parentNode.appendChild(contactDiv);
                    }
                    contactDiv.style.display = 'flex';
                } else {
                    if(contactDiv) {
                        contactDiv.style.display = 'none';
                    }
                }
            });
        }
    }, 1000);
}
if(quid == "0" || quid == "noQvalue") {
quiso = "yes"
} else {
setTimeout("getMsgsFromTOU(" + ttMsgBxObj['m_to_userid'] + ");", 1000);
}
setTimeout("doUMsglinks(" + ttMsgBxObj['m_to_userid'] + ", 'dvMsgUlinks');", 1400);

if((boolDoAnx == "y") || (boolDoAnx == "yes")) {
// setTimeout("JSSHOP.shared.initFrmComps(retRndrObj.rndrFobj);doMsgMediaSetup();", 500);
setTimeout("doMsgMediaSetup();", 500);
} else {
// setTimeout("JSSHOP.shared.initFrmComps(retRndrObj.rndrFobj);", 500);
}
if(tmpMsgType == "uproperty") {
    tDefPropInqMsg = "I am interested in your property: ID: " +  atMpPrpObj._id + " - " + atMpPrpObj.ptitle;
    tDefPropInqMsg += "link: " + "https://propsgo.com/index.html?ditemid=" + atMpPrpObj._id;
    tDefPropInqMsg += "My question is..."

    // JSSHOP.shared.setFrmFieldVal("qmsgs", "msg_matter", tDefPropInqMsg);
     // setTimeout("JSSHOP.ui.setTinnerText('tmp_msg_matter', '" + tDefPropInqMsg + "')", 1000);

 }
// JSSHOP.ui.popAndFillLbox(JSSHOP.shared.rndrDynFrmVals(document["qmsgs"], "tmp_"));
} catch(e) {
alert("no JSSHOP.ui.showMsgBox: " + e);
}
};

JSSHOP.ui.popGuestMsgBox = function(cMAinc) {
    tMsgFrmGstObj = currMsgsIArr[cMAinc];
    // create a html string to pop the popAndFIllLbox with the message details
    tGstMsgStr = "<div class=\"msgBoxHdr bkgdClrNrml txtClrHdr txtBold txtLrg\">" + stxt[732] + "</div>";
    tGstMsgStr += "<div class=\"msgBoxBdy bkgdClrWhite txtClrDrkGrn\">";
    tGstMsgStr += "<div class=\"msgMatter\" style=\"margin-top:10px;\"><span class=\"txtSmall txtClrGrey\">" + stxt[97] + ": </span><span class=\"msgMatterValue\">" + tMsgFrmGstObj.msg_from + "</span></div>";

    // include the linkable phone numbers if exists
    if(tMsgFrmGstObj.msg_fromsg_tel != null && tMsgFrmGstObj.msg_fromsg_tel != "") {
        tGstMsgStr += "<div class=\"msgMatter\" style=\"margin-top:10px;\"><span class=\"txtSmall txtClrGrey\">" + stxt[24] + ": </span><span class=\"msgMatterValue\"><a href=\"tel:" + tMsgFrmGstObj.msg_fromsg_tel + "\">" + tMsgFrmGstObj.msg_fromsg_tel + "</a></span></div>";
    }
    // include the linkable email if exists
    if(tMsgFrmGstObj.msg_fromsg_email != null && tMsgFrmGstObj.msg_fromsg_email != "") {
        tGstMsgStr += "<div class=\"msgMatter\" style=\"margin-top:10px;\"><span class=\"txtSmall txtClrGrey\">" + stxt[26] + ": </span><span class=\"msgMatterValue\"><a href=\"mailto:" + tMsgFrmGstObj.msg_fromsg_email + "\">" + tMsgFrmGstObj.msg_fromsg_email + "</a></span></div>";
    }
    // include the subject
    tGstMsgStr += "<div class=\"msgMatter\" style=\"margin-top:10px;\"><span class=\"txtSmall txtClrGrey\">" + stxt[969] + ": </span><span class=\"msgMatterValue\">" + svftObj["msgsubject"][tMsgFrmGstObj.msg_subject] + "</span></div>";
    tgmsg = tMsgFrmGstObj.msg_matter;
    // urldecode tgmsg
    tgmsg = decodeURIComponent(tgmsg);
    tgnewMsg =  tgmsg.replace(/\n/g, '<br>');
       // newMsg = newMsg.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    tgnewMsg = tgnewMsg.replace(/(\r\n|\n|\r)/g, '<br>');
    tgnewMsg = tgnewMsg.replace(/(\uD83D[\uDE00-\uDE4F])/g, '<span class="emoji">$1</span>');
    tgnewMsg = tgnewMsg.replace(/(\uD83C[\uDFFB-\uDFFF])/g, '<span class="emoji">$1</span>');
    tgnewMsg = tgnewMsg.replace(/(\uD83E[\uDD00-\uDFFF])/g, '<span class="emoji">$1</span>');
    tgnewMsg = tgnewMsg.replace(/(\uD83D[\uDE00-\uDE4F])/g, '<span class="emoji">$1</span>');
    tgnewMsg = tgnewMsg.replace(/(\u2600-\u27BF)/g, '<span class="emoji">$1</span>');
    tgnewMsg = tgnewMsg.replace(/(\uD83C[\uDFFB-\uDFFF])/g, '<span class="emoji">$1</span>');
    tgnewMsg = tgnewMsg.replace(/(\uD83E[\uDD00-\uDFFF])/g, '<span class="emoji">$1</span>');
    tgnewMsg = tgnewMsg.replace(/(\uD83D[\uDE00-\uDE4F])/g, '<span class="emoji">$1</span>');
    tgnewMsg = tgnewMsg.replace(/(\u2600-\u27BF)/g, '<span class="emoji">$1</span>');
    tgnewMsg = tgnewMsg.replace(/(\uD83C[\uDFFB-\uDFFF])/g, '<span class="emoji">$1</span>');
    tgnewMsg = tgnewMsg.replace(/(\uD83E[\uDD00-\uDFFF])/g, '<span class="emoji">$1</span>');
    // document.getElementById("ms_matter").value = encodeURIComponent(tgnewMsg);
        var tmessageElem = document.createElement('div');
    tmessageElem.className = "slmtable bkgdClrHdr slmtblpadding txtClrWhite";
    ttToShowMsg = tgnewMsg;
    // add links to urls in tToShowMsg
   var  urlPattern = /(https?:\/\/[^\s<]+)/g;
   //
    ttToShowMsg = ttToShowMsg.replace(urlPattern, '<a href="$1" target="_blank">$1</a>');
   /*
          if(tTMMstr.indexOf("#PROPID:") != -1) {
        console.log("Found #PROPID: in message matter");
        var tpropArr = tTMMstr.split("#PROPID:");
        var tpropid = tpropArr[1];

        console.log("Extracted property ID:" + tpropid);
        tATMMstr = tTMMstr.replace("#PROPID:" + tpropid, "<a href=\"javascript:eindex('aa-show-prop','pid=aa-show-prop&prpid=" + tpropid + "')\"><u>#PROPID:" + tpropid + "</u></a>");
        tFTMMstr = tATMMstr;
        */
       if(ttToShowMsg.indexOf("#PROPID:") != -1) {
        console.log("Found #PROPID: in message matter");
        var ttMitemArr = ttToShowMsg.split("#PROPID:");
        ttiidd = ttMitemArr[1];
        // tToShowMsg += "<br><a href=\"javascript:eindex('aa-show-prop','pid=aa-show-prop&prpid="+tMitemID+"')\"><u>#PROPID:"+tMitemID+"</u></a>";
        ttToShowMsg = ttToShowMsg.replace("#PROPID:" + ttiidd, "<a href=\"javascript:eindex('aa-show-prop','pid=aa-show-prop&prpid=" + ttiidd + "')\"><u>#PROPID:" + ttiidd + "</u></a>");
       }

    // tGstMsgStr += "<div class=\"msgMatter\" style=\"margin-top:10px;\">" + ttToShowMsg + "</div>";
    // ad stxt[706] label before the message matter
    tGstMsgStr += "<div class=\"msgMatter\" style=\"margin-top:10px;\"><span class=\"txtSmall txtClrGrey\">" + stxt[706] + ": </span><div class=\"msgMatterValue\" style=\"margin-top:5px;\">" + ttToShowMsg + "</div>";
    tGstMsgStr += "</div>";
    JSSHOP.ui.popNuFillLbox(tGstMsgStr, 10);
};


JSSHOP.ui.prepMsgBox = function(vToUid,vToUFn,vToUicn,vToItem,vTcb){
    atMBObg = null;
    atMBObg = "";
    atMBObg = nTmpMsgBxOb();
    atMBObg["m_to_userid"] = vToUid; // send to user id
    atMBObg["m_to"] = vToUFn; // send to user field name
    atMBObg["m_to_icon"] = vToUicn; // send to user icon
    if(quid == "0" || quid == "noQvalue") {
        atMBObg["m_from_icon"] = "guest.png"; // from user icon
    } else {
    atMBObg["m_from_icon"] = currQUsrObj.u_icon; // from user icon
    }
    atMBObg["m_type"] = "user"; // internal msg type
    atMBObg["m_val"] = vToUid; // internal msg token
    atMBObg["m_strAll"] = "msg_subjectmsg_matter"; // message form values to render
    atMBObg["m_useAnx"] = "n"; // add image upload btn
    atMBObg["m_tmpCB"] = vTcb; // null function as callback
    atMBObg["m_type"] = "user"; // internal msg type
    atMBObg["m_item"] = vToItem; // internal msg token
    JSSHOP.ui.showNuMsgBox(atMBObg);
};
function fnshNuMsgIDSave(tCCLA, tCCLB, tCCLC) {
    if(tCCLB.indexOf("Error") != -1) {
        alert("Error saving message ID: " + tCCLB);
    } else {
         alert("Message ID saved: " + tCCLB);

    }
}

function getNewMsgId(tCCLA, tCCLB, tCCLC) {
    if(tCCLB.indexOf("_id") != -1) {
        currNewMsgArr = null;
        currNewMsgArr = JSON.parse(tCCLB);
        if(currNewMsgArr.length > 0) {
            currNewMsgObj = null;
            currNewMsgObj = currNewMsgArr[0];
            if(currNewMsgObj != null) {
                console.log("getNewMsgId: " + JSON.stringify(currNewMsgObj));
                if(currNewMsgObj._id != null) {
                // set ms_threadid to currNewMsgObj._id
                document.getElementById("ms_threadid").value = currNewMsgObj._id;
                tmpDOs = null;
tmpDOs = {};

tDModThreadID = document.getElementById("ms_threadid").value;

tmpDOs["knvp"] = JSSHOP.shared.getFrmVals(document["qmsg"], "nada");
oi = getNuDBFnvp("qmsg",6,null,tmpDOs);
doQComm(oi["rq"], null, "fnshNuMsgIDSave");
                }
            }
        }
    }
}
function fnishNuMsgSave(tCCLA, tCCLB, tCCLC) {
    if(tCCLB.indexOf("Error") != -1) {
        alert("Error saving message: " + tCCLB);
    } else {
        // tQryGet qmsgs id from msgs_threadid
        tmpDOs = null;
        tmpDOs = {};
        tmpDOs["ws"] = "where msg_threadid=?";
        tmpDOs["wa"] = [document.getElementById("msg_threadid").value];
        oi = getNuDBFnvp("qmsgs",5,null,tmpDOs);
        doQComm(oi["rq"], null, "getNewMsgId");
    }
}
JSSHOP.ui.sendChatMessage = function(toUserId, tMitemID) {
    var inputField = document.getElementById('chat-input-' + toUserId);
    var message = inputField.innerText || inputField.textContent;


        if(tMitemID && tMitemID != "noQvalue") {
        message += " #PROPID:" + tMitemID + " ";
    }

    // document.getElementById("ms_matter").value = message;
    // document.getElementById("ms_matter").value = message;
    document.getElementById("ms_to").value = toUserId;
    document.getElementById("ms_from").value = quid;

    if (message.trim() === "") {
        alert("Please enter a message.");
        return;
    }
    // Send the message using your preferred method (e.g., AJAX)
    console.log("Sending message to user " + toUserId + ": " + message);
    // Clear the input field
    inputField.innerText = "";
    inputField.textContent = "";

    // Optionally, append the message to the chat window

    newMsg =  message.replace(/\n/g, '<br>');
       // newMsg = newMsg.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    newMsg = newMsg.replace(/(\r\n|\n|\r)/g, '<br>');
    newMsg = newMsg.replace(/(\uD83D[\uDE00-\uDE4F])/g, '<span class="emoji">$1</span>');
    newMsg = newMsg.replace(/(\uD83C[\uDFFB-\uDFFF])/g, '<span class="emoji">$1</span>');
    newMsg = newMsg.replace(/(\uD83E[\uDD00-\uDFFF])/g, '<span class="emoji">$1</span>');
    newMsg = newMsg.replace(/(\uD83D[\uDE00-\uDE4F])/g, '<span class="emoji">$1</span>');
    newMsg = newMsg.replace(/(\u2600-\u27BF)/g, '<span class="emoji">$1</span>');
    newMsg = newMsg.replace(/(\uD83C[\uDFFB-\uDFFF])/g, '<span class="emoji">$1</span>');
    newMsg = newMsg.replace(/(\uD83E[\uDD00-\uDFFF])/g, '<span class="emoji">$1</span>');
    newMsg = newMsg.replace(/(\uD83D[\uDE00-\uDE4F])/g, '<span class="emoji">$1</span>');
    newMsg = newMsg.replace(/(\u2600-\u27BF)/g, '<span class="emoji">$1</span>');
    newMsg = newMsg.replace(/(\uD83C[\uDFFB-\uDFFF])/g, '<span class="emoji">$1</span>');
    newMsg = newMsg.replace(/(\uD83E[\uDD00-\uDFFF])/g, '<span class="emoji">$1</span>');
    document.getElementById("ms_matter").value = encodeURIComponent(newMsg);
        var messageElem = document.createElement('div');
    messageElem.className = "slmtable bkgdClrHdr slmtblpadding txtClrWhite";
    tToShowMsg = newMsg;
    // add links to urls in tToShowMsg
   var  urlPattern = /(https?:\/\/[^\s<]+)/g;
   //
    tToShowMsg = tToShowMsg.replace(urlPattern, '<a href="$1" target="_blank">$1</a>');
   /*
          if(tTMMstr.indexOf("#PROPID:") != -1) {
        console.log("Found #PROPID: in message matter");
        var tpropArr = tTMMstr.split("#PROPID:");
        var tpropid = tpropArr[1];

        console.log("Extracted property ID:" + tpropid);
        tATMMstr = tTMMstr.replace("#PROPID:" + tpropid, "<a href=\"javascript:eindex('aa-show-prop','pid=aa-show-prop&prpid=" + tpropid + "')\"><u>#PROPID:" + tpropid + "</u></a>");
        tFTMMstr = tATMMstr;
        */
       if(tToShowMsg.indexOf("#PROPID:") != -1) {
        console.log("Found #PROPID: in message matter");
        // tToShowMsg += "<br><a href=\"javascript:eindex('aa-show-prop','pid=aa-show-prop&prpid="+tMitemID+"')\"><u>#PROPID:"+tMitemID+"</u></a>";
        tToShowMsg = tToShowMsg.replace("#PROPID:" + tMitemID, "<a href=\"javascript:eindex('aa-show-prop','pid=aa-show-prop&prpid=" + tMitemID + "')\"><u>#PROPID:" + tMitemID + "</u></a>");
       }
       console.log("Final message to show:", tToShowMsg);

       if(quid == "0" || quid == "noQvalue") {  // if guest

           //  document.getElementById("msg_matter").value = encodeURIComponent(newMsg);
           tContctMethdStr = "";
    var contactMethods = document.getElementsByName('contact_method');
    var selectedMethods = [];
    for(var i = 0; i < contactMethods.length; i++) {
        if(contactMethods[i].checked) {
            selectedMethods.push(contactMethods[i].value);
        }
    }
    tContctMethdStr = selectedMethods.join(", ");
    tmSgSTr = stxt[902] + ": " + tContctMethdStr + "  \n" + newMsg;
    FmSgSTr = decodeURIComponent(tmSgSTr);
    document.getElementById("msg_matter").value = encodeURIComponent(FmSgSTr);
        JSSHOP.ui.doMsgSave('user', toUserId,  "fnishGstMsgSave");
       } else {
    messageElem.innerHTML = tToShowMsg;
      var messagesDiv = document.getElementById('chat-messages-' + toUserId);
    messagesDiv.appendChild(messageElem);
        // Scroll to the bottom of the messages div
    messagesDiv.scrollTop = messagesDiv.scrollHeight;

// if ms_threadid is empty, doMsgSave to create a new thread id
if(document.getElementById("ms_threadid").value == "") {
    // document.getElementById("msg_matter").value = message;
    // fix message to preserve emojis and line breaks when being sent to database and not returned as something like Â ðŸ˜‚
    document.getElementById("msg_matter").value = encodeURIComponent(newMsg);
 tJFarr = JSSHOP.shared.getDynFrmVals(document["qmsgs"], "tmp_");

    JSSHOP.ui.doMsgSave('user', toUserId,  "donada");

} else {

tmpDOs = null;
tmpDOs = {};

tDModThreadID = document.getElementById("ms_threadid").value;

tmpDOs["knvp"] = JSSHOP.shared.getFrmVals(document["qmsg"], "nada");
oi = getNuDBFnvp("qmsg",6,null,tmpDOs);
doQComm(oi["rq"], null, "doNada");
console.log("sendChatMessage.update: " + oi["rq"]);
// update msg_dmodified with procNuUIitem
  procNuUIitem("qmsgs","msg_dmodified",tDModThreadID,JSSHOP.getUnixTimeStamp(),"doNada");
// alert(oi["rq"]);
}
   } // end if not guest
};

JSSHOP.ui.showMsgBox = function(tmpMsgType, tmpMsgVal,atmpCB){
    alert("showMsgBox: " + tmpMsgType + " :: " + tmpMsgVal + " :: " + atmpCB);
    try {
        ttMBox = null;
        ttMBox = "";
    ttMBox = nTmpMsgBxOb();
    ttMBox["m_val"] = tmpMsgVal;
    ttMBox["m_tmpCB"] = atmpCB;
    ttMBox["m_type"] = tmpMsgType;
    JSSHOP.ui.showNuMsgBox(ttMBox);
    } catch(e) {
    alert("no JSSHOP.ui.showMsgBox: " + e);
    }
    };

// Keep legacy UI entry points wired to the upgraded messaging module when available.
JSSHOP.ui.syncLegacyMsgApi = function() {
if(!JSSHOP.msgs) {
return;
}
JSSHOP.ui.doMsgThread = JSSHOP.msgs.doMsgThread;
JSSHOP.ui.doMsgList = JSSHOP.msgs.doMsgList;
JSSHOP.ui.doNuMsgList = JSSHOP.msgs.doNuMsgList;
JSSHOP.ui.doNuMsgThread = JSSHOP.msgs.doNuMsgThread;
JSSHOP.ui.doReplyMsgSave = JSSHOP.msgs.doReplyMsgSave;
JSSHOP.ui.showReplyMsgBox = JSSHOP.msgs.showReplyMsgBox;
JSSHOP.ui.doMsgSave = JSSHOP.msgs.doMsgSave;
JSSHOP.ui.showNuMsgBox = JSSHOP.msgs.showNuMsgBox;
JSSHOP.ui.popGuestMsgBox = JSSHOP.msgs.popGuestMsgBox;
JSSHOP.ui.prepMsgBox = JSSHOP.msgs.prepMsgBox;
JSSHOP.ui.sendChatMessage = JSSHOP.msgs.sendChatMessage;
JSSHOP.ui.showMsgBox = JSSHOP.msgs.showMsgBox;
};

JSSHOP.ui.syncLegacyMsgApi();



JSSHOP.ui.showPopHelp = function(tmpHlpKey){
try {
tmppHlpD = "";
if(hlpT[tmpHlpKey] && hlpC[tmpHlpKey]){
    tmppHlpD += "<b>" + hlpT[tmpHlpKey] + "</b><br><br>";
    for(ioi = 0; ioi < hlpC[tmpHlpKey].length; ioi++) {
    tmppHlpD += hlpC[tmpHlpKey][ioi] + "<br><br>";
    }
} else {
tmppHlpD = hlpT["default"] + " key: "  + tmpHlpKey;
}
JSSHOP.ui.popAndFillLbox(tmppHlpD);
} catch(e) {
alert("no JSSHOP.ui.showPopHelp: " + e);
}

};




JSSHOP.ui.showNPopHelp = function(){
try {
    tmpAHlpD = "";
 if(hlpT[currHlpKey] && hlpC[currHlpKey]){
tmpAHlpD += "<b>" + hlpT[currHlpKey] + "</b><br><br>";
for(ioi = 0; ioi < hlpC[currHlpKey].length; ioi++) {
tmpAHlpD += hlpC[currHlpKey][ioi] + "<br><br>";
}
} else {
tmpAHlpD = hlpT["default"] + " key: "  + currHlpKey;
}
JSSHOP.ui.popAndFillLbox(tmpAHlpD);
} catch(e) {
alert("no showPopHelp: " + e);
}

};



JSSHOP.ui.setNPopHelp = function(thePath){
 try {
setTimeout("JSSHOP.ui.showNPopHelp()", 700);
} catch(e) {
alert("no setPopHelp : " + e);
}
};

var currHlpKey = "page";

JSSHOP.ui.getPopHelp = function(tmpHlpStr){
    currHlpKey = tmpHlpStr;
try {
tmpv = hlpT.defval;
JSSHOP.ui.showPopHelp(tmpHlpStr);
} catch(e) {
    JSSHOP.ui.popAndFillLbox("loading");
// alert("no getPopHelp : " + e);
currHlpKey = tmpHlpStr;
tmpGetHCO = "js/app/" + jscssprefix + "helpstrings_" + usrlang + ".js?"; // help-arr url
JSSHOP.loadScript(tmpGetHCO, JSSHOP.ui.setNPopHelp,"js");
}

};


JSSHOP.ui.textAreaAdjust = function(theTarea){
currH = theTarea.scrollHeight;
theTarea.style.height = "1px";
theTarea.style.height = "auto";
theTarea.style.height = (25 + theTarea.scrollHeight);
};

JSSHOP.ui.setTinnerText = function(theElemId, theInnerText){
try {
document.getElementById(theElemId).innerText = theInnerText;
} catch(e) {
JSSHOP.logJSerror(e, arguments, "setTinnerText");
alert("setTinnerText: " + theElemId + " :: " + theInnerText + " :: " + e);
}
};


JSSHOP.ui.setTinnerHTML = function(theElemId, theInnerHtml){
if(theInnerHtml == "loading") { // just set the loading image
theInnerHtml = "<img src=\"images/misc/loading.gif\">";
}
try {
document.getElementById(theElemId).innerHTML = theInnerHtml;
} catch(e) {
JSSHOP.logJSerror(e, arguments, "setTinnerHTML");
alert("setTinnerHTML: " + theElemId + " :: " + theInnerHtml + " :: " + e);
}
};



JSSHOP.ui.showHideElement = function(theEID, showHide) {
    try {
        theElement = document.getElementById(theEID);
        if (showHide == "show") {
            theElement.style.visibility = "visible";
            theElement.style.display = "block";
        } else {
            theElement.style.visibility = "hidden";
            theElement.style.display = "none";
        }
    } catch (e) {
        JSSHOP.logJSerror(e, arguments, "JSSHOP.ui.showHideElement");
    }
};

JSSHOP.ui.toggleDivSlide = function(rowname) {
// make rowname div slide up and down depending on its current state
    try {
        theRow = document.getElementById(rowname);

        if (!theRow.style.height || theRow.style.height === '0px') {
            theRow.style.height = window.getComputedStyle(theRow).height;
        } else {
            theRow.style.height = '0px';
        }
    } catch (e) {
        JSSHOP.logJSerror(e, arguments, "JSSHOP.ui.toggleDivSlide");
    }
};

JSSHOP.ui.toggleVisibility = function(rowname) {
    try {
        theRow = document.getElementById(rowname);

        if(theRow.style.display == "none") {
            tRCn = "";
            tRCn = theRow.className;
            if(tRCn.indexOf("brdrClrHdr") != -1) {
            theRow.className = tRCn.replace("brdrClrHdr", "brdrClrDlg");
            }
            theRow.style.display = "block";
            theRow.style.visibility = "visible";
             theRow.className = "slmtable txtBold";
             setTimeout("document.getElementById('" + rowname + "').className = '" + tRCn + "'", 100);
           // JSSHOP.ui.setNuCBBClickClr(theRow,  'txtSmall', tRCn, doNill, 500);
        } else {
            theRow.className = "slmtable txtSmall";

            // setTimeout("JSSHOP.ui.showHideElement('" + rowname + "','hide');document.getElementById('" + rowname + "').className = '" + tRCn + "'", 500);
             setTimeout("JSSHOP.ui.showHideElement('" + rowname + "','hide');document.getElementById('" + rowname + "').className = '" + tRCn + "'", 100);

           //  theRow.style.display = "none";
           //  theRow.style.visibility = "hidden";
          //   JSSHOP.ui.setNuCBBClickClr(theRow,  'txtSmall', tRCn, doNill, 500);

        }
      } catch (e) {

        JSSHOP.logJSerror(e, arguments, "JSSHOP.ui.toggleVisibility");
        }

};

JSSHOP.ui.toggleMnuVisibility = function(rowname) {

    try {
        theRow = document.getElementById(rowname);

        if((theRow.style.display == "block") || (theRow.style.display == "inline-block")) {
                                          gmnu = document.getElementById("dvMnuT").innerHTML;
                                          	document.getElementById("dvMnuT").innerHTML = "";
                 		 document.getElementById("mnuT").innerHTML = gmnu;

            theRow.style.display = "none";
            theRow.style.visibility = "hidden";

        } else {
                                 gmnu = document.getElementById("mnuT").innerHTML;
                            document.getElementById("mnuT").innerHTML = "";
                 		 document.getElementById("dvMnuT").innerHTML = gmnu;
            theRow.style.display = "block";
            theRow.style.visibility = "visible";


        }

    } catch (e) {
    JSSHOP.logJSerror(e, arguments, "JSSHOP.ui.toggleVisibility");
    }
};


JSSHOP.ui.toggleModule = function(linkElem, tglElemID, showMore, showLess) {
    try {
        caption = document.getElementById(linkElem).innerHTML;
        JSSHOP.ui.toggleVisibility(tglElemID);
        if (showMore === "noQvalue") { // dont change inner HTML
        } else {
            if (caption === showMore) {
                document.getElementById(linkElem).innerHTML = showLess;
            } else {
                document.getElementById(linkElem).innerHTML = showMore;
            }
        }
    } catch (e) {
        JSSHOP.logJSerror(e, arguments, "JSSHOP.ui.toggleModule");
    }
};







JSSHOP.ui.toggleNuModule = function(linkElem, tglElemID) {
    try {
        caption = document.getElementById(linkElem).innerHTML;

        JSSHOP.ui.toggleVisibility(tglElemID);

            if (caption.indexOf("more") != -1) {
                document.getElementById(linkElem).innerHTML = "<i class=\"small-material-icons\" style=\"font-size:24px\" alt=\"btn_show_less\">&#xe5ce;</i>";
            } else {
                document.getElementById(linkElem).innerHTML = "<i class=\"small-material-icons\" style=\"font-size:24px\" alt=\"btn_show_more\">&#xe5cf;</i>";
            }

  } catch (e) {
		alert(e + " : " + linkElem + " : " + tglElemID);
      //   JSSHOP.logJSerror(e, arguments, "JSSHOP.ui.toggleNuModule");
    }
};

JSSHOP.ui.tglPrefModule = function(linkElem, tglElemID, tglPrefKey) {
    try {
        caption = document.getElementById(linkElem).innerHTML;
 	  tmpPrvVal = "show";
        JSSHOP.ui.toggleVisibility(tglElemID);

            if (caption.indexOf("more") != -1) {

                document.getElementById(linkElem).innerHTML = "<i class=\"small-material-icons\" style=\"font-size:24px\" title=\"expand_less\">&#xe5ce;</i>";
            } else {
 	  		tmpPrvVal = "hide";
                document.getElementById(linkElem).innerHTML = "<i class=\"small-material-icons\" style=\"font-size:24px\" title=\"expand_more\">&#xe5cf;</i>";
            }
JSSHOP.user.setCkiePrfKV('prfsSHOPuser',tglPrefKey,tmpPrvVal);

    } catch (e) {
	alert(e);
        // JSSHOP.logJSerror(e, arguments, "JSSHOP.ui.tglPrefModule");
    }
};

JSSHOP.ui.tglTBPrefModule = function(tvmpTglBxid) {
    try {

         tTBxOBjFTM = currTglBxsObj[tvmpTglBxid];
         linkElem = tTBxOBjFTM.btn;
		tglElemID = tvmpTglBxid;
		tglPrefKey = tTBxOBjFTM.pref;
        caption = document.getElementById(linkElem).innerHTML;
 	  tmpPrvVal = "show";
        JSSHOP.ui.toggleVisibility(tglElemID);

            if (caption.indexOf("more") != -1) {
                tTBxCntntstr = document.getElementById(tvmpTglBxid).innerHTML;
                if(tTBxCntntstr.length < 10) {
			  tglElCB = window[tTBxOBjFTM.cntntFnc];
				tglElCB();
                }
                document.getElementById(linkElem).innerHTML = "<i class=\"small-material-icons\" style=\"font-size:24px\" title=\"expand_less\">&#xe5ce;</i>";
                if(tvmpTglBxid == "dvTBPList") {
                    if(dvPartsMain.style.display == "block") {
                    } else {
                    JSSHOP.ui.toggleNuModule('dvTglPSmain','dvPartsMain');
                    }
                }
            } else {
 	  		tmpPrvVal = "hide";
                document.getElementById(linkElem).innerHTML = "<i class=\"small-material-icons\" style=\"font-size:24px\" title=\"expand_more\">&#xe5cf;</i>";

            }
JSSHOP.user.setCkiePrfKV('prfsSHOPuser',tglPrefKey,tmpPrvVal);

    } catch (e) {
	alert(e);
        // JSSHOP.logJSerror(e, arguments, "JSSHOP.ui.tglPrefModule");
    }
};





JSSHOP.ui.setCBBClickEnd = function(theElem, theID, theCBclss, theCB) {
 try {
      theElem.className = theCBclss;
     //  JSSHOP.stopIntervalEvent(trgr_bclck[theID]);
      theCB();
      // return;
    } catch(e) {
        alert(e);
        JSSHOP.logJSerror(e, arguments, "JSSHOP.ui.setCBBClickEnd");
        return;
    }
};



JSSHOP.ui.setNuCBBClickClr = function(theElem, theCclss, theCBclss, theCB, theNBCDelay) {
    try {
    		strJobThread = JSSHOP.getUnixTimeStamp();
   		//  theMElem = document.getElementById(theElem);
    		theElem.className = theCclss;

            setTimeout(function () {
                JSSHOP.ui.setCBBClickEnd(theElem, strJobThread, theCBclss, theCB);

        }, 250);

    } catch(e) {
    		JSSHOP.startIntervalEvent(trgr_bclck[strJobThread], function() { JSSHOP.ui.setCBBClickEnd(theElem, strJobThread, theCBclss, theCB);}, theNBCDelay);

		// alert(e);
         JSSHOP.logJSerror(e, arguments, "JSSHOP.ui.setCBBClickClr");
    }
};


JSSHOP.ui.setCBBClickClr = function(theElem, theCclss, theCBclss, theCB) {
JSSHOP.ui.setNuCBBClickClr(theElem, theCclss, theCBclss, theCB, 380);
};

JSSHOP.ui.setNuSaveBtnEnd = function(theObj,theCB) {
stopNuSpin(theObj.id);
document.getElementById(theObj.id).disabled=false;
JSSHOP.ui.setNuCBBClickClr(theObj,'cls_button-save bkgdClrDGreen txtClrWhite','cls_button-save', theCB, 380);
};


JSSHOP.ui.setNuSaveBtnClick = function(theObj,theCB,theBtnH) {
theObj.innerHTML = "";
theObj.disabled=true;
doNuSpinSet(theObj.id, "small", null, theBtnH);
JSSHOP.ui.setNuCBBClickClr(theObj,'icnbtn crsrPointer brdrClrHdr txtClrGrey','icnbtn crsrPointer', theCB, 380);
};

JSSHOP.ui.setSaveBtnClick = function(theObj,theCB) {
theObj.innerHTML = "";
theObj.disabled=true;
doSpinSet(theObj.id, "small", null);
JSSHOP.ui.setNuCBBClickClr(theObj,'cls_button-save txtClrGrey','cls_button-save', theCB, 410);
};




JSSHOP.ui.doDefBtn = function(tmpTxt, tmpCallback) {
tmpRd = "<div class=\"crsrPointer\"><div onclick=\"javascript:JSSHOP.ui.setCBBClickClr(this,'slmtable brdrClrNrml','slmtable brdrClrHdr', function(){" + tmpCallback + "});\" class=\"txtBig slmtable brdrClrHdr\">";
tmpRd += tmpTxt + "</div></div>";
return tmpRd;
};

JSSHOP.ui.doDefCBBCC = function(theObj,b,dcb) {
// JSSHOP.ui.setCBBClickClr(document.getElementById(theObj),'cls_button cls_button-medium brdrClrDlg txtClrHdr','txtClrHdr clsDummy', function() { dcb });
JSSHOP.ui.setCBBClickClr(document.getElementById(theObj),'txtClrHdr','clsDummy', function() { dcb });

};

JSSHOP.ui.popLmenu = function() {
try {
timerID = setInterval("JSFX.MakeFloatingLayer.animate()", 30);
setTimeout('clearInterval(timerID)', 2000);
} catch(e) {
JSSHOP.logJSerror(e, arguments, "JSSHOP.popLmenu");
}
};

JSSHOP.ui.deleteRow = function(r) {
try {
    tmpTRowI = r.parentNode.parentNode.rowIndex;
    // document.getElementById("myTable").deleteRow(tmpTRowI);
    r.parentNode.parentNode.deleteRow(tmpTRowI);
} catch(e) {
JSSHOP.logJSerror(e, arguments, "JSSHOP.ui.deleteRow");
}
};


JSSHOP.ui.popAndAppendLbox = function(theFill, clearLB) {
try {
tmpLbox = document.getElementById('lightbox');
tmpLCbox = document.getElementById('lightbox_content');
tmpLbox.style.display='inline';

if(clearLB == "y"){
tmpLCbox.innerHTML = "";
}
tmpLCbox.appendChild(theFill);
tmpVheight = document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight;
if(tmpLCbox.clientHeight >= tmpVheight) {
tmpLbox.style.position="absolute";
newel = document.createElement('div');
newel.innerHTML = "New Inserted";
tmpLCbox.appendChild(newel);
tmpLbox.style.height = tmpLCbox.clientHeight + 180;
}
tmpLCbox.style.display='block';
tmpLCbox.style.position="relative";
stop = getScrollTop();
// tmpLCbox.style.top=stop+"px";
scrollToElement("dvHdr");
window.scrollTo(0,0);
tmpLCbox.style.top="5px";

} catch(e) {
JSSHOP.logJSerror(e, arguments, "JSSHOP.popAndAppendLbox");
}
};




JSSHOP.ui.popAndLoadLbox = function(thePLoad) {
tmpLabox = document.getElementById("lightbox");
tmpLabox.style.display="inline";
tmpaVheight = document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight;
if(thePLoad.clientHeight >= tmpaVheight) {
// tmpLbox.style.position="absolute";
newelaq = document.createElement('div');
newelaq.innerHTML = "-";
thePLoad.appendChild(newelaq);
tmpLabox.style.height = thePLoad.clientHeight + 180;
}

}
JSSHOP.ui.popAFImgUrl = function(theImgUrl) {
tIUrlStr = "<img src=\"" + theImgUrl + "\" width=\"100%\">";
JSSHOP.ui.popAndFillLbox(tIUrlStr);
};




JSSHOP.ui.popFillObox = function(theFill, thHdrIcn, thHdrTxt, thUseClosDv, thUseClosBtn) {
    document.getElementById('lightbox_content').innerHTML = "";
    tcloseBstr  = "<div onclick=\"JSSHOP.ui.closeLbox();\" class=\"slmtable txtClrRed txtBold brdrClrDlg crsrPointer\" style=\"float:right\"><i class=\"menu-material-icons txtBold txtClrBlue\" alt=\"close\" title=\"close\" value=\"close\" style=\"font-size: 20px;\">&#xe5cd;</i></div>";
    tHdrStr = "<table style=\"width:100%\"><tr>";
    tHdrStr += "<td>";
    // tHdrStr += "<span class=\"slmtable txtClrHdr\" style=\"margin-left: 7px\"><span>";
    tHdrStr += "<i class=\"menu-material-icons txtBold txtClrGrey\" alt=\"close\" title=\"close\" value=\"close\">" + thHdrIcn + "</i>";
    tHdrStr += "</span>";
    tHdrStr += "</td>";
    tHdrStr += "<td>";
    tHdrStr += "<span>" + thHdrTxt + "</span>";
    tHdrStr += "</td>";
    if(thUseClosDv == "yes") {
        tHdrStr += "<td style=\"text-align:right\">";
        tHdrStr += tcloseBstr;
        tHdrStr += "</td>";
    }
    tHdrStr += "</tr></table>";
    tHdrStr += "</div>";
    // <button type="button" class="btn-close" aria-label="Close"  onclick=\"JSSHOP.ui.closeLbox();\"></button>
    //tcloseBstr  = "<button type=\"button\" class=\"btn btn-close\" aria-label=\"Close\"  onclick=\"JSSHOP.ui.closeLbox();\"  style=\"float:right\"></button>";
    try {



    tmpLbox = document.getElementById('lightbox');
    tmpLCbox = document.getElementById('lightbox_content');
    tmpLbox.style.display="inline";
    if(theFill == "noQvalue") {
    } else if(theFill == "dbug") {
    tmpLCbox.innerHTML= "<div style=\"overflow:auto;min-height: 231px; min-width: 368px\"  contenteditable=\"true\">" + currDBUGstr + "</div>";
    // tmpLCbox.className = "lightbox_table";
    } else if(theFill == "loading") {
        doNuSpinSet("lightbox_content", "big", null, "...");
    // tmpLCbox.innerHTML= "<img src=\"images/misc/loading.gif\">";
    } else {
    fullRetPOPstr = tHdrStr + theFill;
    // tmpLCbox.innerHTML = tHdrStr + theFill;
    if(thUseClosBtn == "yes") {
        tCloseBtnStr = "<div onclick=\"JSSHOP.ui.closeLbox();\" class=\"slmtable txtClrLtBlue txtBold brdrClrDlg crsrPointer\" style=\"float:right\"><i class=\"menu-material-icons txtBold txtClrGrey\" alt=\"close\" title=\"close\" value=\"close\" style=\"font-size: 20px;\">&#xe5cd;</i></div>";
        fullRetPOPstr += tcloseBstr;
    }
     tmpLCbox.innerHTML += fullRetPOPstr;
    }
    tmpLCbox.style.position="absolute";
    tmpVheight = document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight;
    if(tmpLCbox.clientHeight >= tmpVheight) {
    // tmpLbox.style.position="absolute";
    newel = document.createElement('div');
    newel.innerHTML = "-";
    tmpLCbox.appendChild(newel);
    // append a clear div to tmpLCbox
    tclrdv = document.createElement('div');
    tclrdv.style.clear="both";
    tmpLCbox.appendChild(tclrdv);



    tmpLbox.style.height = tmpLCbox.clientHeight + 180;
    }
    tmpLCbox.style.display='block';

    // stop = window.pageYOffset + 30;
    stop = getScrollTop() + 30;
    tmpLCbox.style.top=stop+"px";

    // window.scrollTo(0,0);
    // tmpLCbox.style.height="100%";
    // tmpLCbox.style.top="5px";
    if(getViewportWidth() > 500) {}
    iMdl = Math.round((getViewportWidth() - tmpLCbox.clientWidth) / 2);
    // if(iMdl < 5) { iMdl = 5; }
    // if(iMdl < 40) { iMdl = 15; }
    tmpLCbox.style.left=iMdl+"px";


    // make tmpLCbox pop in from top

    JSSHOP.ui.setNuCBBClickClr(tmpLCbox, 'slmtable brdrClrHdr bkgdClrTrnsp', tmpLCbox.className, function() { donada(0,1,2); }, 200);


    // tmpLCbox.style.position="fixed";
    } catch(e) {
        alert("JSSHOP.ui.popNuFillLbox: " + e);
        }
        if(isJApp == "yes") {
            app.doscrllVwToTop();
            // app.getWVScrollY();
            }

};

JSSHOP.ui.popNurFillLbox = function(theFill, theNurIcon, theNurTitle) {
    // Enhanced modal using Bootstrap for better mobile responsiveness
    var modalId = 'nurModal';
    var existingModal = document.getElementById(modalId);
    if (!existingModal) {
        var modalHtml = `
            <div class="modal fade" id="${modalId}" tabindex="-1" aria-labelledby="${modalId}Label" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                         <h5 class="modal-title" id="${modalId}Label">${theNurTitle}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body" id="${modalId}Body">
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHtml);
        existingModal = document.getElementById(modalId);
    }
    // Update icon and title on every call
    var iconElement = existingModal.querySelector('.material-icons i');
    if (iconElement) iconElement.textContent = theNurIcon;
    var titleElement = existingModal.querySelector('.modal-title');
    if (titleElement) titleElement.textContent = theNurTitle;
    var modalBody = document.getElementById(modalId + 'Body');
    if (theFill === "noQvalue") {
        modalBody.innerHTML = "";
    } else if (theFill === "dbug") {
        modalBody.innerHTML = "<div style=\"overflow:auto;min-height: 231px; min-width: 368px\" contenteditable=\"true\">" + currDBUGstr + "</div>";
    } else if (theFill === "loading") {
        modalBody.innerHTML = "<div class=\"d-flex justify-content-center\"><div class=\"spinner-border\" role=\"status\"><span class=\"visually-hidden\">Loading...</span></div></div>";
    } else {
        modalBody.innerHTML = theFill;
    }
    // Show the modal
    var modal = new bootstrap.Modal(existingModal);
    modal.show();
};

JSSHOP.ui.popAndFillLbox = function(theFill) {
JSSHOP.ui.popNurFillLbox(theFill, "&#xe5cd;", "The Title");
}

JSSHOP.ui.popNuFillLbox = function(theFill, theTofst) {
    tcloseBstr  = "<div onclick=\"JSSHOP.ui.closeLbox();\" class=\"slmtable txtClrLtBlue txtBold txtBig crsrPointer\" style=\"float:right;margin-left:20px;\"><i class=\"menu-material-icons txtBold txtClrLtBlue\" alt=\"close\" title=\"close\" value=\"close\" style=\"font-size:24px;\">&#xe5cd;</i></div>";
// <button type="button" class="btn-close" aria-label="Close"  onclick=\"JSSHOP.ui.closeLbox();\"></button>
//tcloseBstr  = "<button type=\"button\" class=\"btn btn-close\" aria-label=\"Close\"  onclick=\"JSSHOP.ui.closeLbox();\"  style=\"float:right\"></button>";
try {



tmpLbox = document.getElementById('lightbox');
tmpLCbox = document.getElementById('lightbox_content');
// make tmpLCbox fit to content


// tmpLCbox.style.maxHeight = "600px";
// center the lightbox content
tmpLCbox.style.marginRight = "20px";

tmpLbox.style.display="inline";
if(theFill == "noQvalue") {
} else if(theFill == "dbug") {
tmpLCbox.innerHTML= "<div style=\"overflow:auto;min-height: 231px; min-width: 368px\"  contenteditable=\"true\">" + currDBUGstr + "</div>";
// tmpLCbox.className = "lightbox_table";
} else if(theFill == "loading") {
    doNuSpinSet("lightbox_content", "big", null, "...");
// tmpLCbox.innerHTML= "<img src=\"images/misc/loading.gif\">";
} else {
if(theTofst == 5) {
tmpLCbox.innerHTML= tcloseBstr +  theFill;
} else {
tmpLCbox.innerHTML = theFill;
}

}
tmpLCbox.style.position="absolute";
tmpVheight = document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight;
if(tmpLCbox.clientHeight >= tmpVheight) {
// tmpLbox.style.position="absolute";
newel = document.createElement('div');
newel.innerHTML = "-";
tmpLCbox.appendChild(newel);
// append a clear div to tmpLCbox
tclrdv = document.createElement('div');
tclrdv.style.clear="both";
tmpLCbox.appendChild(tclrdv);



tmpLbox.style.height = tmpLCbox.clientHeight + 180;
}
tmpLCbox.style.display='block';

// stop = window.pageYOffset + 30;

// tmpLCbox.style.height="95%";

// window.scrollTo(0,0);
// tmpLCbox.style.height="100%";
// tmpLCbox.style.top="5px";
if(getViewportWidth() > 500) {}
iMdl = Math.round((getViewportWidth() - tmpLCbox.clientWidth) / 2);
// iMdl = 5;
tmpLCbox.style.left=iMdl+"px";
tmpLCbox.style.height="auto";
tmpLCbox.style.margin = "20px;";
// center the lightbox_content div

/// tmpLCbox.style.margin = "0";
// make tmpLCbox pop in from top
 stop = getScrollTop() + theTofst;
tmpLCbox.style.top=stop+"px";
JSSHOP.ui.setNuCBBClickClr(tmpLCbox, 'slmtable brdrClrHdr bkgdClrTrnsp', tmpLCbox.className, function() { void(0); }, 150);



} catch(e) {
    alert("JSSHOP.ui.popNuFillLbox: " + e);
    }
    if(isJApp == "yes") {
        app.doscrllVwToTop();
        // app.getWVScrollY();
        }
};





JSSHOP.ui.popLbox = function() {
try {
document.getElementById('lightbox').style.display='inline';
} catch(e) {
JSSHOP.logJSerror(e, arguments, "JSSHOP.popLbox");
}
};

JSSHOP.ui.closeLbox = function() {

    if(isJApp == "ayes") {
        app_dlg.getEpMDcom(60,"close");
    } else {
document.getElementById('lightbox').style.display='none';
document.getElementById('lightbox_content').style.top='-800px';
document.getElementById('lightbox_content').style.display='none';
}

// Also close the last Bootstrap modal if it exists
var modals = document.querySelectorAll('.modal.show');
if (modals.length > 0) {
    var lastModal = modals[modals.length - 1];
    var modalInstance = bootstrap.Modal.getInstance(lastModal);
    if (modalInstance) {
        modalInstance.hide();
    } else {
        // Fallback if no instance
        lastModal.classList.remove('show');
        lastModal.style.display = 'none';
        var backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
            backdrop.remove();
        }
        document.body.classList.remove('modal-open');
    }
}

};

JSSHOP.ui.closePopMenus = function() {
try {
document.getElementById('lightbox').style.display='none';
// document.getElementById('mmDdown').style.display='none';
// document.getElementById('mmDdown').style.visibility='hidden';
// document.getElementById('dvMnuT').style.display='none';
// document.getElementById('dvMnuT').style.visibility='hidden';
document.getElementById('lightbox_content').style.top='-800px';
document.getElementById('lightbox_content').style.display='none';
document.getElementById('dvSandMap').style.top='-800px';
document.getElementById('dvSandMap').style.display='none';

} catch(e) {
    alert("no closePopMenus: " + e);
JSSHOP.logJSerror(e, arguments, "JSSHOP.ui.closePopMenus");
}
};

JSSHOP.ui.setfaction = function(fname, sumbmitbool, alertstring)
{
try {
if(alertstring != null){
if((confirm(alertstring)) && (sumbmitbool)) {
document[fname].submit();
} else {
alertstring = "";
}
}
if(sumbmitbool) {
document[fname].submit();
}
} catch(e) {
JSSHOP.logJSerror(e, arguments, "JSSHOP.setfaction");
}
};


JSSHOP.ui.setTopTip = function(tmpTipStr) {
try {
strTip = "<img src=\"images/checked_g.gif\" class=\"clsToolTipImage\">";
strTip += "&nbsp;<span class=\"txtSmall txtClrDlg\">" + tmpTipStr + "</span>";
return strTip;
} catch(e) {
JSSHOP.logJSerror(e, arguments, "JSSHOP.setfaction");
return " - ";
}
};

JSSHOP.ui.setLblHighlight = function(theTmpFld,theTmpFldTxt,theTmpLbl,theTmpLblTxt) {

try {
/*
var fvTFI = theTmpFld.id;
sFieldType = theTmpFld.nodeName.toUpperCase() === "INPUT" ? theTmpFld.getAttribute("type").toUpperCase() : "TEXT";
if ((sFieldType !== "RADIO" || sFieldType !== "CHECKBOX") || (theB.nodeName.toUpperCase() === "DIV")) {
JSSHOP.ui.addEvent(theTmpFld, "focus", function() {  theTmpLbl.className = "txtClrHdr";ax = theTmpFld.value;theTmpFld.value = '';theTmpFld.value=ax;  theTmpFld.selectionStart = theTmpFld.selectionEnd = 10000;});
} else {

}
*/
JSSHOP.ui.addEvent(theTmpFld, "focus", function() {  theTmpLbl.className = "txtClrHdr";});

JSSHOP.ui.addEvent(theTmpFld, "blur", function() {  theTmpLbl.className = "txtClrDDlg";return false; });
// JSSHOP.ui.addEvent(theTmpfld, "blur", function() { theTmpLbl.className = 'txtClrDlg' });

} catch(e) {
alert("JSSHOP.ui.setLblHighlight: " + e + " :: " + theTmpLblTxt);
// JSSHOP.logJSerror(e, arguments, "JSSHOP.setLblHighlight");
}
};



JSSHOP.ui.doInpDVFocusEv = function(theElem, theDefText) {
try {
if(theElem.value==theDefText) {
theElem.value = "";
}
theElem.style.color="#000000";
} catch(e) {
JSSHOP.logJSerror(e, arguments, doInputFocusEv);
}
};

JSSHOP.ui.doInpDVBlurEv = function(theElem, theDefText) {
try {
if(theElem.value == ""){
theElem.value=theDefText;
}
theElem.style.color="#999966";
} catch(e) {
JSSHOP.logJSerror(e, arguments, "doInputBlurEv");
}
};



JSSHOP.ui.doDivDVFocusEv = function(theElem, theDefText) {
try {
if(theElem.innerText==theDefText){
theElem.innerText="";
}
theElem.style.color="#000000";
} catch(e) {
JSSHOP.logJSerror(e, arguments, doDivFocusEv);
}
};

JSSHOP.ui.doDivDVBlurEv = function(theElem, theDefText) {
try {
if(theElem.innerText.length < 3){
theElem.innerText=theDefText;
}
theElem.style.color="#999966";
} catch(e) {
JSSHOP.logJSerror(e, arguments, "doDivBlurEv");
}
};


JSSHOP.ui.doClassSet = function(theElem, theDefClass) {
try {
theElem.className=theDefClass;
} catch(e) {
JSSHOP.logJSerror(e, arguments, "doClassSet");
}
};

JSSHOP.ui.setDefFval = function(theTmpfld, theTmpFVal, theTmpFill) {
try {
console.log("setDefFval: " + theTmpfld + " :: " + theTmpFVal + " :: " + theTmpFill);
if(theTmpfld.nodeName.toUpperCase() === "DIV") {
if(theTmpFill !== "noQvalue") {
JSSHOP.ui.doDivDVBlurEv(theTmpfld,theTmpFVal);
}
JSSHOP.ui.addEvent(theTmpfld, "focus", function() { JSSHOP.ui.doDivDVFocusEv(theTmpfld,theTmpFVal) });
JSSHOP.ui.addEvent(theTmpfld, "blur", function() { JSSHOP.ui.doDivDVBlurEv(theTmpfld,theTmpFVal) });
} else {
if(theTmpFill !== "noQvalue") {
JSSHOP.ui.doInpDVBlurEv(theTmpfld,theTmpFVal);
}
JSSHOP.ui.addEvent(theTmpfld, "focus", function() { JSSHOP.ui.doInpDVFocusEv(theTmpfld,theTmpFVal) });
JSSHOP.ui.addEvent(theTmpfld, "blur", function() { JSSHOP.ui.doInpDVBlurEv(theTmpfld,theTmpFVal) });
}
} catch(e) {
    console.log("JSSHOP.ui.setDefFval.ERROR: " +  theTmpfld + " :: " + e);
JSSHOP.logJSerror(e, arguments, "JSSHOP.setDefFval");
return " - ";
}
};


/* Event Functions */

// Add an event to the obj given
// event_name refers to the event trigger, without the "on", like click or mouseover
// func_name refers to the function callback when event is triggered
JSSHOP.ui.addEvent = function(obj,event_name,func_name){
try {
	if (obj.attachEvent){
		obj.attachEvent("on"+event_name, func_name);
	}else if(obj.addEventListener){
		obj.addEventListener(event_name,func_name,true);
	}else{
		obj["on"+event_name] = func_name;
	}
} catch(e) {
 alert("JSSHOP.ui.addEvent: " + func_name );
}
};

// Removes an event from the object
JSSHOP.ui.removeEvent = function(obj,event_name,func_name){
	if (obj.detachEvent){
		obj.detachEvent("on"+event_name,func_name);
	}else if(obj.removeEventListener){
		obj.removeEventListener(event_name,func_name,true);
	}else{
		obj["on"+event_name] = null;
	}
};

// Stop an event from bubbling up the event DOM
JSSHOP.ui.stopEvent = function(evt){
	evt || window.event;
	if (evt.stopPropagation){
		evt.stopPropagation();
		evt.preventDefault();
	}else if(typeof evt.cancelBubble != "undefined"){
		evt.cancelBubble = true;
		evt.returnValue = false;
	}
	return false;
};



JSSHOP.ui.createLfButton = function(label, container) {
    var btn = L.DomUtil.create('div', '', container);
    btn.setAttribute('type', 'button');
    btn.setAttribute('class', 'slmtable  gradient-color txtClrWhite');
    btn.innerHTML = label;
    return btn;
};

JSSHOP.ui.setMapMrkrs = function(tMrkrArr) {
    console.log("setMapMrkrs: " + tMrkrArr.length);
    for (var i = 0; i < tMrkrArr.length; i++) {
    var tMrkr = tMrkrArr[i];
    tMrkr.addTo(map);
    }
};

JSSHOP.ads.getLeafletCanvasMapOptions = function(baseMapOpts) {
    var mapOpts = baseMapOpts || {};
    try {
        if (typeof L != "undefined" && L && typeof L.canvas == "function") {
            mapOpts.preferCanvas = true;
            if (!mapOpts.renderer) {
                mapOpts.renderer = L.canvas();
            }
            if (typeof mapOpts.zoomAnimation == "undefined") {
                mapOpts.zoomAnimation = false;
            }
            if (typeof mapOpts.fadeAnimation == "undefined") {
                mapOpts.fadeAnimation = false;
            }
            if (typeof mapOpts.markerZoomAnimation == "undefined") {
                mapOpts.markerZoomAnimation = false;
            }
        }
    } catch (eLeafCanvasOpts) {
        console.log("getLeafletCanvasMapOptions: " + eLeafCanvasOpts);
    }
    return mapOpts;
};

JSSHOP.ui.doGenMap = function(ttLatStr, ttLngStr) {
    try {
iti = 0;

xaCstr = document.getElementById('map').innerHTML;
  if(xaCstr.length > 4){
    /*
    map.eachLayer(function (layer) {
          map.removeLayer(layer);
        console.log("Layer: " + layer);

    });
    */
/*
    funcLayer = new L.TileLayer.Functional(function (view) {
        var url = 'http://localhost:80/tiles/{z}/{y}/{x}.png'
          .replace('{z}', view.zoom)
          .replace('{x}', view.tile.row)
          .replace('{y}', view.tile.column)
          .replace('{s}', view.subdomain);
        return url;
      }   ,{
        subdomains: '1234'
      }  ).addTo(map);
      */
 console.log("Map Already Exists");
 // map.setView(new L.LatLng( ttLatStr,  ttLngStr),14);
return "OK";
 // currNavIcon = L.marker([ttLatStr, ttLngStr], options).bindPopup('<span class="txtBold txtClrRed"><a href="javascript:dropMrkr(o);">DROP</a></span>').addTo(map);
 // JSSHOP.ui.setMapMrkrs(currMapMrkrArr);
 // map.flyTo([ttLatStr, ttLngStr]);
  } else {
/*
destNum = Math.floor(Math.random() * 300);
tRAObj = xradars[destNum];
var tDestLat = tRAObj.lat;
var tDestLng = tRAObj.lng;
*/

    var LeafIcon = L.Icon.extend({
        options: {

            iconSize:     [26, 26],

            iconAnchor:   [-1, -1],

            popupAnchor:  [-3, -16]
        }
    });





    var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });



    var googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
        maxZoom: 18,
        subdomains:['mt0','mt1','mt2','mt3'],
         attribution: '&copy; <a href="http://www.google.com/maps">Google Maps</a>'

    });
    var mqi = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
        maxZoom: 18,
        subdomains:['mt0','mt1','mt2','mt3'],
         attribution: '&copy; <a href="http://www.google.com/maps">Google Maps</a>'
    });

/* not includinf these for now


// var     mqi = L.tileLayer("http://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png", {subdomains: ['otile1','otile2','otile3','otile4'], attribution: '&copy; <a href="http://www.mapquest.org/">MapQuest</a>'});
    // var mqi = L.tileLayer(mbUrl, {id: 'mapbox/satellite-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr});







var googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3'],
     attribution: '&copy; <a href="http://www.google.com/maps">Google Maps</a>'

});
    // map = L.map('map').setView([qlogc_lat.value, qlogc_lng.value], 12);

*/

corner1 = L.latLng(41, -9),
corner2 = L.latLng(36, -7),
themaxbounds = L.latLngBounds(corner1, corner2);

// generate-tiles bounds=--10,42.8,-6,36.6 minzoom=14 maxzoom=14 tilesdir=d:\www\htdocs\logipal\leaflet\tiles
map = L.map('map', JSSHOP.ads.getLeafletCanvasMapOptions({
    center: [ttLatStr, ttLngStr],
    minZoom: 6,
    maxZoom: 18,
    zoomControl: true,
        preferCanvas: true,
    // maxBounds: themaxbounds,
    zoomAnimation:false,
    fullscreenControl: true,
  fullscreenControlOptions: {
    position: 'topleft',
    content: '<img src="js/leaflet/images/full_screen.gif" width="95%" height="95%">'
  },
    layers: [osm]
}));

map.setView(new L.LatLng( ttLatStr,  ttLngStr),14);




    var baseMaps = {
            'OpenStreetMap': osm,
        'Goodle Satellite': mqi,
        "Street": googleStreets


/*
        'Goodle Streets': googleStreets,
        'Goodle Satellite': mqi,
        'Goodle Hybrid': googleHybrid,
*/
    };
/*
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
*/

    bounds = L.latLngBounds() // Instantiate LatLngBounds object



 layerControl = L.control.layers(baseMaps).addTo(map);







// routeControl.hide();
var helloPopup = L.popup().setContent('Hello World!');
var popup = L.popup({closeOnClick: false, autoClose: false, closeButton: true, autoPan: false });
popup.className = "brdrClrHdr";





//   var routeArray = new Array();
//   routeArray = routeControl.getWaypoints();

//   alert(JSON.stringify(routeArray));



 // map.flyTo([ttLatStr, ttLngStr]);

    var container = L.DomUtil.create('div'),
        startBtn = JSSHOP.ui.createLfButton('Set', container);
        container.appendChild(document.createElement('br'));
        // destBtn = JSSHOP.ui.createLfButton('Set', container);

/**/
map.on('contextmenu', function(e) {
        currStartLat = e.latlng.lat;
        currStartLng = e.latlng.lng;
        // console.log(getTileURL(e.latlng.lat, e.latlng.lng, map.getZoom()))
        // alert('f: ' + e.latlng.lat + ", " + e.latlng.lng);
    L.popup()
        .setContent(container)
        .setLatLng(e.latlng)
        .openOn(map);
});

L.DomEvent.on(startBtn, 'click', function(e) {
        alert('f: ' + JSON.stringify(e));
        var tInpT = document.getElementById('inpStrtLoc');
        // tInpT.value = currStartLat + ", " + currStartLng;
        tInpT.focus();
        // routeControl.selectInputText(tInpT);
        routeControl.spliceWaypoints(0, 1, new L.LatLng(currStartLat, currStartLng));
        map.closePopup();
    });

   L.DomEvent.on(destBtn, 'click', function(e) {
        routeControl.spliceWaypoints(routeControl.getWaypoints().length - 1, 1,  new L.LatLng(currStartLat, currStartLng));
        map.closePopup();
    });




        // var tInpT = document.getElementById('inpStrtLoc');
        // tInpT.value = qlogc_lat.value + ", " + qlogc_lng.value;
        // tInpT.focus();
        // routeControl.selectInputText(tInpT);
        // routeControl.spliceWaypoints(0, 1, new L.LatLng(qlogc_lat.value, qlogc_lng.value));



var mtImDSStr = "leaflet/images/tr6.gif";
var mredIcon = new LeafIcon({iconUrl: mtImDSStr});



var options = {
                        icon: mredIcon
                    };


                    // JSSHOP.ui.setMapMrkrs(currMapMrkrArr);
                // 	currNavIcon = L.marker([qlogc_lat.value, qlogc_lng.value], options).bindPopup('<span class="txtBold txtClrRed"><a href="javascript:dropMrkr(o);">DROP</a></span>').addTo(map);


                    return "OK";
// currNavIcon = L.marker([qlogc_lat.value, qlogc_lng.value]).addTo(map);
   //    setTimeout("dupe()", 1000);
// JSSHOP.loadScript("js/vrp/wasm-vrpcli.js", JSSHOP.checkLoader,"module");
  }// end of else container not null
    } catch(e) {

        return "ERR" + e
}
};

JSSHOP.ui.popLboxMap = function(tLocLat, tLocLng, thePLMFunc) {
// spinner.stop();
try {
    currMapLatStr = tLocLat;
    currMapLngStr = tLocLng;
    // currMapMrkrArr = new Array();
    // currMapMrkrArr.push([tLocLat, tLocLng]);





tmpLbox = document.getElementById('lightbox');
tmpLCbox = document.getElementById('dvSandMap');
tmpLbox.style.display="inline";

tmpLCbox.style.position="absolute";
tmpVheight = document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight;
if(tmpLCbox.clientHeight >= tmpVheight) {
// tmpLbox.style.position="absolute";
newel = document.createElement('div');
newel.innerHTML = "New Inserted";
tmpLCbox.appendChild(newel);
tmpLbox.style.height = tmpLCbox.clientHeight + 180;
}
tmpLCbox.style.display='block';


stop = getScrollTop() + 10;
tmpLCbox.style.top=stop+"px";
// scrollToElement("dvHdr");
// window.scrollTo(0,0);
// tmpLCbox.style.top="5px";
if(getViewportWidth() > 500) {}
iMdl = Math.round((getViewportWidth() - tmpLCbox.clientWidth) / 2);
tmpLCbox.style.left=iMdl+"px";

    tDGMretStr = JSSHOP.ui.doGenMap(tLocLat, tLocLng);
    if(tDGMretStr == "OK") {
        // tDGMF = window[thePLMFunc];
        // tDGMF();
    } else {
        alert("Error: " + tDGMretStr);
    }
// tmpLCbox.style.position="fixed";
tmpLCbox.width=tmpLCbox.width + 2;
setTimeout(function () {
    window.dispatchEvent(new Event('resize'));
}, 1000);
} catch(e) {
alert("popLboxMap: " + e);
}
};








if (typeof(Number.prototype.toRad) === "undefined") {
    Number.prototype.toRad = function() {
      return this * Math.PI / 180;
    }
  }


JSSHOP.ui.stringToColour = function(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    var colour = '#';
    for (var i = 0; i < 3; i++) {
      var value = (hash >> (i * 8)) & 0xFF;
      colour += ('00' + value.toString(16)).substr(-2);
    }
       return colour;
  };

  /* ui functions for bootstrap */



  JSSHOP.ui.doGenBSDDcb = function(tDDPloadVal, tDDCBel, tDDCBval, tDDCBtxt, thFnlcb) {

    tTDHstr = "tdDD" + tDDCBel;
    if(document.getElementById(tTDHstr)) {
    tdHel = document.getElementById(tTDHstr);
    } else {
        tTDHstr = "tmp_" + tDDCBel;
    tdHel = document.getElementById(tTDHstr);
    }
    if(tDDCBel == "noQvalue") {
    } else {
        tMainEL = document.getElementById(tDDCBel);

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
    document.getElementById(tDDCBel).value = tDDCBval;

    }
    if(thFnlcb == "noQvalue") {
    } else {
        tFnlcb = window[thFnlcb];
        tFnlcb(tDDPloadVal, tDDCBel, tDDCBval, tDDCBtxt);

    }
   //  alert("doGenDDcb: " + tDDCBel + " " + tDDCBval + " " + tDDCBtxt);

    };



  JSSHOP.ui.getBSDDOptsO = function() {
    tBSDDOptsO = {};
    tBSDDOptsO["ddtype"] = "noQvalue";
    tBSDDOptsO["fld"] = "noQvalue";
    tBSDDOptsO["fldcls"] = "nav-link dropdown-toggle txtSmall";
    tBSDDOptsO["icn"] = "noQvalue";
    tBSDDOptsO["icncls"] = "menu-material-icons txtBold txtClrGrey";
    tBSDDOptsO["lbl"] = "noQvalue";
    tBSDDOptsO["lblcls"] = "txtSmall";
    tBSDDOptsO["val"] = "noQvalue";
    tBSDDOptsO["valcls"] = "txtSmall";
    tBSDDOptsO["kvpObj"] = {};
    tBSDDOptsO["kvIcnsObj"] = {};
    tBSDDOptsO["horvert"] = "vertical";
    tBSDDOptsO["cb"] = "doGenDDcb";
   //  tDDBojA["kvIcnsObj"] =  {"public":"&#xe5cd;","private":"&#xe5cd;","members":"noQvalue"};

    return tBSDDOptsO;
    };


    JSSHOP.ui.getNuBSdropDstr = function(tBBSSObj) {
        /*
          tBSDDOptsO = {};
    tBSDDOptsO["fld"] = "noQvalue";
    tBSDDOptsO["fldcls"] = "nav-link dropdown-toggle txtSmall";
    tBSDDOptsO["icn"] = "noQvalue";
    tBSDDOptsO["icncls"] = "menu-material-icons txtBold txtClrGrey";
    tBSDDOptsO["lbl"] = "noQvalue";
    tBSDDOptsO["lblcls"] = "txtSmall";
    tBSDDOptsO["val"] = "noQvalue";
    tBSDDOptsO["valcls"] = "txtSmall";
    tBSDDOptsO["kvpObj"] = {};
    tBSDDOptsO["horvert"] = "vertical";
    tBSDDOptsO["cb"] = "doGenDDcb";
        */
       tBSSPload = "noQvalue";
       if(tBBSSObj.pload) {
        tBSSPload = tBBSSObj.pload;
         }
        if(tBBSSObj.fld == "noQvalue") {
            tDDelem = {"value":"noQvalue"};
        } else {
        tDDelem = document.getElementById(tBBSSObj.fld);
        }
        tBSDDLayStr = "<div class=\"nada\">";
        tBSDDLayStr += "<ul class=\"nav nav-pills\">";
        tBSDDLayStr += "<li class=\"nav-item dropdown\">";
        tBSDDLayStr += "<table style=\"max-width:100%\"><tr>";
        if(tBBSSObj.icn == "noQvalue") {
         tBSDDLayStr += "<td style=\"max-width:20px;\"></td>";
            noicnBSDD = "noQvalue";
        } else {
        tBSDDLayStr += "<td><i class=\"" + tBBSSObj.icncls + "\" alt=\"" + tBBSSObj.lbl + "\" title=\"" + tBBSSObj.lbl + "\" value=\"" + tBBSSObj.lbl + "\">" + tBBSSObj.icn + "</i></td>";
        }
         //  tBSDDLayStr += "<td><a class=\"nav-link fas fa-ellipsis-vertical txtSmall txtClrDlg\" data-bs-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-expanded=\"false\">" + tBBSSObj.lbl + "</a>";
        // <i class="fas fa-ellipsis-vertical" data-bs-toggle="dropdown" aria-expanded="false"></i>
        if(tBBSSObj.ddtype == "noQvalue") {
        tBSDDLayStr += "<td><a class=\"" + tBBSSObj.fldcls + "\" data-bs-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-expanded=\"false\" style=\"font-size:14px;\">" + tBBSSObj.lbl + "</a>";
         // tBSDDLayStr += "<td style=\"word-wrap:break-word;word-break: break-word;\"><a class=\"nav-link dropdown-toggle txtSmall txtClrDlg crsrPointer\" data-bs-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-expanded=\"false\"  style=\"word-wrap:break-word;word-break: break-word;\">" + tBBSSObj.lbl + "</a>";
        } else if(tBBSSObj.ddtype == "moreVert") {
         tBSDDLayStr += "<td><i class=\"material-icons crsrPointer slmtable brdrClrDlg\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">&#xe5d4;</i>";
        } else {
            tBSDDLayStr += "<td><i class=\"material-icons crsrPointer slmtable brdrClrDlg\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">&#xe5d3;</i>";
        }

        tBSDDLayStr += "<div class=\"dropdown-menu brdrClrHdr\"><ul>";
        for (var key in tBBSSObj.kvpObj) {
            tSlctIcnStr = "";
            tDDItmCls = "";
            if(key == tDDelem.value) {
                tDDItmCls = "bkgdClrNrml";
            }
            if(tBBSSObj.kvIcnsObj) {
            if(tBBSSObj.kvIcnsObj[key]) {
            if(tBBSSObj.kvIcnsObj[key] == "noQvalue") {
                tSlctIcnStr = "<span style=\"margin:8px;\"><i class=\"txtClrWhite\" alt=\"" + tBBSSObj.lbl + "\" title=\"" + tBBSSObj.lbl + "\" value=\"" + tBBSSObj.lbl + "\">&#xe8cc;</i></span>";
                noicnBSDD = "noQvalue";
            } else {
                console.log("tBBSSObj.kvIcnsObj[key]: " + tBBSSObj.kvIcnsObj[key] + " :: " + key);
                tSlctIcnStr = "<span style=\"margin:8px;\"><i class=\"" + tBBSSObj.icncls + "\" alt=\"" + tBBSSObj.lbl + "\" title=\"" + tBBSSObj.lbl + "\" value=\"" + tBBSSObj.lbl + "\">" + tBBSSObj.kvIcnsObj[key] + "</i></span>";
            }
            }
        } else {
            tSlctIcnStr = "<span style=\"margin:8px;\"><i class=\"txtClrWhite\" alt=\"" + tBBSSObj.lbl + "\" title=\"" + tBBSSObj.lbl + "\" value=\"" + tBBSSObj.lbl + "\">&#xe8cc;</i></span>";
            noicnBSDD = "noQvalue";
        }

            tBSDDLayStr += "<li id=\"liDD" + tBBSSObj["fld"] + key + "\" class=\"" + tDDItmCls + "\"><a class=\"dropdown-item\"   href=\"javascript:JSSHOP.ui.doGenBSDDcb('" + tBSSPload + "','" + tBBSSObj.fld + "', '" + key + "','" + tBBSSObj.kvpObj[key] +  "','" + tBBSSObj.cb + "');\">" + tSlctIcnStr + tBBSSObj.kvpObj[key] + "</a></li>";
        }
        tBSDDLayStr += "</ul></div</td>";
        if(tBBSSObj.horvert == "vertical") {
        tBSDDLayStr += "</tr></table><table><tr>";
        }


        // the bottom value field
        if(tBBSSObj["fldb"]) {
            if(tDDelem.value == "noQvalue") {
            } else {
                if(tBBSSObj.kvpObj[tDDelem.value]) {
                    tBSDDLayVal = tBBSSObj.kvpObj[tDDelem.value];
                } else {
                    tBSDDLayVal = tDDelem.value;
                }
            }
            tBSDDLayStr += "<td><input id=\"" + tBBSSObj["fldb"] + "\" class=\"clsVertBSDDiv txtBold txtClrHdr " + tBBSSObj.valcls + " form-control\" value=\"" + tBSDDLayVal + "\" contenteditable=\"true\" spellcheck=\"false\">";
           //  tBSDDLayStr += tBSDDLayVal;
            tBSDDLayStr += "</td>";
        } else { // end of fldb

        if(tBBSSObj.ddtype == "noQvalue") {
        tBSDDLayStr += "<td><div id=\"tdDD" + tBBSSObj.fld + "\" class=\"clsVertBSDDiv txtBold txtClrHdr " + tBBSSObj.valcls + "\">";
        if(tDDelem.value == "noQvalue") {
        } else {
            if(tBBSSObj.kvpObj[tDDelem.value]) {
                tBSDDLayStr += tBBSSObj.kvpObj[tDDelem.value];
            } else {
                tBSDDLayStr += tDDelem.value;
            }
        }
        tBSDDLayStr += "</div></td>";
        } else {
            tBSDDLayStr += "<td><div id=\"tdDD" + tBBSSObj.fld + "\" class=\"\" style=\"display:none;visibility:hidden;\">";
            tBSDDLayStr += tBBSSObj.kvpObj[tDDelem.value];
            tBSDDLayStr += "</div></td>";
        }
    } // end of fldb



        tBSDDLayStr += "</tr></table>";
        tBSDDLayStr += "</li>";
        tBSDDLayStr += "</ul>";
        tBSDDLayStr += "</div>";
        return tBSDDLayStr;
        };



/*


  // end ui functions
*/


/*
* shop funcitions
*/







JSSHOP.shop.setCurrItemArr = function(tmpIarr) {
currItemArr = null;
currItemArr = tmpIarr;
};
JSSHOP.shop.getCurrItemArr = function() {
return currItemArr;
};
JSSHOP.shop.setCurrItemsArr = function(tmpIarr) {
currItemsArr = null;
currItemsArr = tmpIarr;
};
JSSHOP.shop.getCurrItemsArr = function() {
return currItemsArr;
};
JSSHOP.shop.setCurrMItemsArr = function(tmpIarr) {
currMItemsArr = null;
currMItemsArr = tmpIarr;
};
JSSHOP.shop.getCurrMItemsArr = function() {
return currMItemsArr;
};
JSSHOP.shop.getCurrIArrIndex = function(tIint) {
// alert("getCurrIArrIndex " + JSON.stringify(currItemsArr[tIint]));
return currItemsArr[tIint];
};
JSSHOP.shop.getCurrMIArrIndex = function(tIint) {
// alert("getCurrMIArrIndex " + JSON.stringify(currMItemsArr[tIint]));
return currMItemsArr[tIint];
};

var setPopCartIArr = function(theObj,b,iei) {
currCartIArr = null;
currCartIArr = [];
currCartIArr = JSON.parse(b);
JSSHOP.shop.doCartAddPop();
setCartIArr("y", b, "n");
// JSSHOP.ui.setCBBClickClr(document.getElementById(theObj),'cls_button cls_button-medium brdrClrDlg txtClrHdr','cls_button cls_button-xxsmall bkgdClrNrml brdrClrDlg txtClrHdr', function(){JSSHOP.shop.doCartAddPop()});

// JSSHOP.ui.setCBBClickClr(document.getElementById(theObj),'cls_button cls_button-medium brdrClrDlg txtClrHdr','txtClrHdr bkgdClrWhite', function(){window.scrollTo(0,0);JSSHOP.ui.setCBBClickClr(document.getElementById('ahCartIcon'),'cls_button cls_button-medium brdrClrDlg txtClrHdr','clsDummy', function(){void(0)})});
};

var xdoAddFnsh = function(theObj,b,iei) {

    tmpDOs = null;
    tmpDOs = {};
    tmpDOs["ws"] = "where ci_uid=? and ci_coid=? and ci_cartqty >? and ci_rtype=? and ci_cartid=?";
    tmpDOs["wa"] = [quid,cid,0,5,cartID];
    oi = getNuDBFnvp("qcartitem",5,null,tmpDOs);
    doQComm(oi["rq"], null, "setPopCartIArr");


// JSSHOP.ui.setCBBClickClr(document.getElementById(theObj),'cls_button cls_button-medium brdrClrDlg txtClrHdr','cls_button cls_button-xxsmall bkgdClrNrml brdrClrDlg txtClrHdr', function(){JSSHOP.shop.doCartAddPop()});

// JSSHOP.ui.setCBBClickClr(document.getElementById(theObj),'cls_button cls_button-medium brdrClrDlg txtClrHdr','txtClrHdr bkgdClrWhite', function(){window.scrollTo(0,0);JSSHOP.ui.setCBBClickClr(document.getElementById('ahCartIcon'),'cls_button cls_button-medium brdrClrDlg txtClrHdr','clsDummy', function(){void(0)})});
};

var xrenderCartPop = function(theObj,b, iei) {
JSSHOP.ui.popAndFillLbox("loading...");
tmpDOs = null;
tmpDOs = {};

tmpQtInt = 6;
if(b.indexOf("_id") != -1) {
// alert(b);
var arrToFill = null;
arrToFill = JSON.parse(b);
ts = arrToFill[0];
JSSHOP.shared.setFrmFieldVal("qcartitem", "_id", ts._id);
JSSHOP.shared.setFrmFieldVal("qcartitem", "ci_cartqty", Math.round(ts.ci_cartqty) + 1);
tmpDOs["ws"] = "where ci_uid=? and ci_coid=? and ci_pid=?";
tmpDOs["wa"] = [quid,cid,strRecID];
tmpQtInt = 7;
} else {
JSSHOP.shared.setFrmFieldVal("qcartitem", "ci_cartqty", 1);
}
tmpDOs["knvp"] = JSSHOP.shared.getFrmVals(document["qcartitem"], "nada");
// alert("renderCartPop: " + oi["rq"]);
oi = getNuDBFnvp("qcartitem",tmpQtInt,theObj,tmpDOs);
doQComm(oi["rq"], theObj, "xdoAddFnsh");
};

JSSHOP.shop.doQIadd = function(thePrdsArna, theObj,theId, iei){
try {
tmpVindex = iei;
tsa = {};
tsa = currProdsArr[thePrdsArna][iei];
// alert("JSSHOP.shop.doQIadd"  + thePrdsArna + ":: " + iei + ":: " + JSON.stringify(currProdsArr[thePrdsArna][iei]));

strRecID = tsa._id;
strRecType = 51;

var today = new Date().getTime();
JSSHOP.shared.setFrmFieldVal("qcartitem", "ci_uid", quid);
JSSHOP.shared.setFrmFieldVal("qcartitem", "ci_cartid", cartID);
JSSHOP.shared.setFrmFieldVal("qcartitem", "ci_coid", cid);
JSSHOP.shared.setFrmFieldVal("qcartitem", "ci_catid", tsa.i_catid);
JSSHOP.shared.setFrmFieldVal("qcartitem", "ci_pid", strRecID);
JSSHOP.shared.setFrmFieldVal("qcartitem", "ci_title", tsa.i_title);
JSSHOP.shared.setFrmFieldVal("qcartitem", "ci_price_a", tsa.i_price_a);
JSSHOP.shared.setFrmFieldVal("qcartitem", "ci_price_b", tsa.i_price_b);
JSSHOP.shared.setFrmFieldVal("qcartitem", "ci_dimen_n", tsa.i_dimen_n);
JSSHOP.shared.setFrmFieldVal("qcartitem", "ci_dimen_v", tsa.i_dimen_v);
JSSHOP.shared.setFrmFieldVal("qcartitem", "ci_img", tsa.i_img);
JSSHOP.shared.setFrmFieldVal("qcartitem", "ci_vala", tsa.i_vala);
JSSHOP.shared.setFrmFieldVal("qcartitem", "ci_valb", catid);
JSSHOP.shared.setFrmFieldVal("qcartitem", "ci_dadded", today);


tmpDOs = null;
tmpDOs = {};
tmpDOs["ws"] = "where ci_uid=? and ci_coid=? and ci_pid=?";
tmpDOs["wa"] = [quid,cid,strRecID];
oi = getNuDBFnvp("qcartitem",5,null,tmpDOs);
// alert(oi["rq"]);
doQComm(oi["rq"], theObj, "xrenderCartPop");
} catch(e) {
alert(e);
}
};




JSSHOP.shop.doItemShowPop = function() {
    loadNuJSModal("tplates/aa-mod-show-item.html?tt=" + JSSHOP.getUnixTimeStamp(), "trans");
};






JSSHOP.shop.doCartAddPop = function() {

JSSHOP.ui.popAndFillLbox(JSSHOP.shop.renderNuCartItems("n", "y", 60));
};

JSSHOP.shop.doCAshow = function(thePrdsArna, theObj) {
JSSHOP.ui.setCBBClickClr(document.getElementById(theObj),'crsrPointer icndbtn slmtable bkgdClrTtl brdrClrHdr txtClrHdr fltrImgInvClr','crsrPointer icndbtn', function(){void(0)});
    JSSHOP.shared.setFrmVals("qitem",tmpVitemArr[tmpVindex],function() {doCartAddPop()});
};

JSSHOP.shop.doIshow = function(thePrdsArna, iei) {
     // alert("JSSHOP.shop.doIshow "  + thePrdsArna + ":: " + iei + ":: " + JSON.stringify(currProdsArr[thePrdsArna][iei]));
    JSSHOP.shop.setCurrItemArr(currProdsArr[thePrdsArna][iei]);
    JSSHOP.shared.setFrmVals("qitem", currProdsArr[thePrdsArna][iei], function () {
        JSSHOP.shop.doItemShowPop();
    });
};


JSSHOP.shop.getIShowstr = function (thePrdsArna, rid, tmprhtml) {
    strTret = "<div onclick=\"JSSHOP.ui.setCBBClickClr(this,'crsrPointer brdrClrHdr','crsrPointer brdrNone', function(){JSSHOP.shop.doIshow('" + thePrdsArna + "'," + rid + ");});\" class=\"crsrPointer brdrNone\">";
    strTret += tmprhtml + "</div>";
    return strTret;
};



JSSHOP.shop.getPrdPriceStr = function(thePrdsArna, prcInt, prcID, prcA, prcB){

	 // retStrPrHtml +=  "<img src=\"images/cart_r.gif\" class=\"crsrPointer icndbtn\"  id=\"tdCI" + thePrdsArna  + prcID + "\" onclick=\"javascript:JSSHOP.shop.doQIadd('" + thePrdsArna + "',this.id," + prcID + "," + prcInt + ");\">";


		try {
 	na = prcA - prcB;
	nd = Math.round((na / prcA) * 100);
	retStrPrHtml = "";
        retStrPrHtml =  prcB +   " \u20AC"; // unicode ? is
	 // retStrPrHtml =  "<br><span class=\"txtBig txtClrDlg\">" + prcB + "</span>";
	//  retStrPrHtml +=  "<img src=\"images/cart_r.gif\" class=\"crsrPointer icndbtn\"  id=\"tdCI" + thePrdsArna + prcID + "\" onclick=\"javascript:JSSHOP.shop.doQIadd('" + thePrdsArna + "',this.id," + prcID + "," + prcInt + ");\">";


		return retStrPrHtml;
		} catch(e) {
		return retStrPrHtml;
		}
};

JSSHOP.shop.getPrdImgStr = function(tTAnme, tmpVala){

		retIstrI = "images/misc/example_thumb.png";
		try {
		tmpValb = tmpVala;
 		if((tmpValb.indexOf("lcl-") != -1) || (tmpValb.indexOf("rem-") != -1)) {
		tmpVala = tmpValb.substring(4, tmpValb.length);
		}
 		if(tmpVala.indexOf(".") != -1) {
		if((tTAnme == "prodpg") || (tTAnme == "modItem")) {
		retIstrI = "images/pimgs/" + tmpVala;
		} else {
		retIstrI = "images/pimgs/s_thumb" + tmpVala;
		}
		}
		if(isPhP == "no") {

 		if(tmpVala.indexOf(".gif") != -1) {

		if(tTAnme == "prdmedia") {
		tmpEstr = app.doThmbStr(tmpVala);
		document.getElementById("fldChallArray").value = tmpEstr;
		fullIstr = document.getElementById("fldChallArray").value;
		retIstrI = "data:image/jpeg;base64, " + fullIstr;
            } else {
		tmpEstr = app.doGifStr(tmpVala);
		document.getElementById("fldChallArray").value = tmpEstr;
		fullIstr = document.getElementById("fldChallArray").value;
		retIstrI = "data:image/gif;base64, " + fullIstr;
		}

		} else if(tmpVala.indexOf(".mp4") != -1) {

		if(tTAnme == "prdmedia") {
		tmpEstr = app.doThmbStr(tmpVala);
		document.getElementById("fldChallArray").value = tmpEstr;
		fullIstr = document.getElementById("fldChallArray").value;
		retIstrI = "data:image/jpeg;base64, " + fullIstr;

            } else {

		tmpEstr = app.doGifStr(tmpVala);
		document.getElementById("fldChallArray").value = tmpEstr;
		fullIstr = document.getElementById("fldChallArray").value;
		retIstrI = "data:video/mp4;base64, " + fullIstr;
		}

		} else {
		tmpEstr = app.doThmbStr(tmpVala);
		document.getElementById("fldChallArray").value = tmpEstr;
		fullIstr = document.getElementById("fldChallArray").value;
		retIstrI = "data:image/jpeg;base64, " + fullIstr;
		}

		}
		return retIstrI;
		} catch(e) {
		return retIstrI;
		}
};




JSSHOP.shop.setPrdImg = function(tsCatArrNm, tCIL) {
try {

if(ntImgCtr[tsCatArrNm] >= tCIL){
clear(tsCatArrNm)();
// currPgTitle = "c" + JSSHOP.getUnixTimeStamp();
// document.title = currPgTitle;
} else {
ass = null;
ass = currProdsArr[tsCatArrNm][ntImgCtr[tsCatArrNm]];

    image = null;
    image = new Image();
    image.src = JSSHOP.shop.getPrdImgStr(tsCatArrNm, ass.i_img);

    image.onload = function() {
        if(document.getElementById(tsCatArrNm + ass._id)) {
	if(document.getElementById(tsCatArrNm + ass._id).src == image.src) {
	// do nothing if its the example img
	} else {
       document.getElementById(tsCatArrNm + ass._id).src = image.src;
	}
	   } else {
	   // alert(tsCatArrNm + ass._id);
	   }
	ntImgCtr[tsCatArrNm] = ntImgCtr[tsCatArrNm] + 1;
	// currPgTitle = JSSHOP.getUnixTimeStamp();
	// document.title = currPgTitle;
    }
    image.onerror = function() {
	   ntImgCtr[tsCatArrNm] = ntImgCtr[tsCatArrNm] + 1;
    }


// document.getElementById(tsCatArrNm + ass._id).src = JSSHOP.shop.getPrdImgStr(tsCatArrNm, ass.i_img);

}

} catch(e) {
// alert("ntImgCtr[tsCatArrNm]: " + ntImgCtr[tsCatArrNm] + " :: tsCatArrNm: " + tsCatArrNm + " :: " + "tCIL: " + tCIL);
ntImgCtr[tsCatArrNm] = ntImgCtr[tsCatArrNm] + 1;
// alert(e);
// clear(tsCatArrNm)();
}
};





JSSHOP.shop.setCatPrdImgs = function(tCatArrNm) {
try {

ntImgCtr[tCatArrNm] = 0;
restart(tCatArrNm, function() { JSSHOP.shop.setPrdImg(tCatArrNm, currProdsArr[tCatArrNm].length) }, currImgSleep)();
// JSSHOP.startNuIntrvlEvnt(tCatArrNm,  function() { JSSHOP.shop.setPrdImg(tCatArrNm, currProdsArr[tCatArrNm].length) }, currImgSleep);
} catch(e) {
alert("setCatPrdImgs " + e);
}
};

JSSHOP.shop.rndrPrdMedia = function(aa,bb,cc) {
// alert(bb);
try {
if(bb.indexOf("_id") != -1) {
// tmpRPMArr  = JSON.parse(bb);

}
} catch(e) {
alert("rndrPrdMedia " + e);
}
};


JSSHOP.shop.getPrdMedia = function(tmpCatId,tmpIid,tmpGPMCB) {

try {
    tmpDOs = null;
    tmpDOs = {};
    // tmpDOs["ws"] = "where m_coid=? and  m_catid=? and m_pid=? and m_rtype=?";
    // tmpDOs["wa"] = [cid,tmpCatId,tmpIid,"5"];
    tmpDOs["ws"] = "where m_coid=? and m_pid=?";
    tmpDOs["wa"] = [cid,tmpIid];
    oi = getNuDBFnvp("qmedia", 5, null, tmpDOs);
    doQComm(oi["rq"], null,tmpGPMCB);
} catch(e) {
alert("JSSHOP.shop.getPrdMedia: " + e);
}
};




/*
* this function takes an items array and returns
* the html for displaying those items
*/

JSSHOP.shop.getPrdsFullStr = function(thePrdsArna, thePrdsArr, thePrdsClss, thePrdsElem, thePrdsCB){


currProdsArr[thePrdsArna] = thePrdsArr;
// alert("getPrdsFullStr: " + JSON.stringify(thePrdsArr));

  try {
var upRefs = arrUprefs["prfsSHOPuser"][0].scv;
} catch(e) {
var upRefs = "r";
}

try {
var upPrixRef = arrUprefs["prfsSHOPuser"][0].scp;
} catch(e) {
var upPrixRef = "u";
}


strUCPID = "";
strUCPTtl = "";
strCatID = "";
strCatName = "";
strHtml = "";
strMLinks = "";
strImgDsct = "";

var len = thePrdsArr.length;

tstr = "";
iint = 0;

// product-grid
strHtml += "<div><ol class=\"float\" style=\"list-style:none;\">";

ts = null;

while(iint < len) {
// ts = null;
try {
ts = thePrdsArr[iint];
if(ts._id) {
strImgDsct = "";
      subTIdesc = ts.i_desc;


	if((thePrdsArna == "prodpg") || (pid == "aa-show-item")){
	subIdesc = subTIdesc;
      strImgDsct += "<div><img onclick=\"document.location.href = this.src\" id=\"" + thePrdsArna +  ts._id + "\" src=\"images/misc/trans.gif\" class=\"activator prodBigImage crsrPointer\"></div>";
	} else {
	subIdesc = subTIdesc.substring(0, 15);
      // strImgDsct += "<a href=\"index.html?pid=aa-show-item&itemid=" + ts._id + "&cid=" + ts.i_coid + "&catid=" + ts.i_catid + "\">";
      strImgDsct += "<a href=\"javascript:eindex('aa-show-item','pid=aa-show-item&itemid=" + ts._id + "&cid=" + ts.i_coid + "&catid=" + ts.i_catid + "');\">";
	if(upRefs == "r") {
      strImgDsct += "<img id=\"" + thePrdsArna +  ts._id + "\" src=\"images/misc/example_thumb.png\" class=\"prodRowImage\">";
	} else {
      strImgDsct += "<img id=\"" + thePrdsArna +  ts._id + "\" src=\"images/misc/example_thumb.png\" class=\"prodImage\">";
	}
      strImgDsct += "</a>";
	}


	if((thePrdsArna == "prodpg") && (pid == "aa-show-item")){
 	strHtml += "<li  class=\"prodBigBox\">";
 	} else {
	if(upRefs == "r") {
 	 strHtml += "<li  class=\"prodRowBox\" style=\"width:100%;\">";


 	} else {
	strHtml += "<li class=\"prodBox float-item\" style=\"\">";
	}
	}


      // strHtml += "<a class=\"txtDecorNone\"  href=\"index.html?pid=aa-show-item&itemid=" + ts._id + "&cid=" + ts.i_coid + "&catid=" + ts.i_catid + "\">";
    // eindex
   strHtml += "<a class=\"txtDecorNone\"  href=\"javascript:eindex('aa-show-item','pid=aa-show-item&itemid=" + ts._id + "&cid=" + ts.i_coid + "&catid=" + ts.i_catid + "');\">";
   if(thePrdsArna == "prodpg") {
	strHtml += "<div class=\"txtBold\" style=\"padding: 3px;\">";
    } else {
     strHtml += "<div class=\"txtSmall txtBold\" style=\"max-height:70px;overflow:hidden;word-wrap:break-word;word-break: break-word;\">";
    }
	strHtml += ts.i_title;
	strHtml += "</div></a>";
	strHtml +=  strImgDsct;









	if(thePrdsArna == "prodpg") {






	strHtml += "<div id=\"dvPrdMedia\"></div>";

	strHtml +=  "<div class=\"txtSmall txtClrHdr\" style=\"padding:6px;\">";
	strHtml +=  subIdesc;
	strHtml +=  "</div>";

	}








 	strPriceHtml =  JSSHOP.shop.getPrdPriceStr(thePrdsArna, iint, ts._id, ts.i_price_a, ts.i_price_b);

	 strHtml += "<span class=\"txtBold txtClrDrkGrn\"  style=\"margin: 15px;float:right;\">" + strPriceHtml + "</span>";

 /* no cart for now
	strHtml += "<div  id=\"tdCI" + ts._id + "\" onclick=\"javascript:JSSHOP.shop.doQIadd('" + thePrdsArna + "',this.id,'" + ts._id + "','" + iint + "');\" class=\"cls_button cls_button-xxsmall bkgdClrNrml brdrClrDlg txtClrHdr\">";
	strHtml += "<i class=\"material-icons\" alt=\"add cart\" title=\"add\" value=\"shopping_cart\">&#xe8cc;</i>";
	strHtml += "<i class=\"material-icons\" alt=\"add cart\" title=\"add\" value=\"add\">&#xe145;</i>";
         // <img src=\"images/cart_r.gif\" class=\"icnsmlbtn brdrClrWhite crsrPointer\">";
	strHtml += "</div>";
    */
	currFTclr = "material-icons txtClrTtl";
	tmpUFavstr = "index.html?pid=aa-show-item&itemid=" + ts._id + "&cid=" + ts.i_coid + "&catid=" + ts.i_catid;
    tmpUFstr = "javascript:eindex('aa-show-item','pid=aa-show-item&itemid=" + ts._id + "&cid=" + ts.i_coid + "&catid=" + ts.i_catid + "');";
	if(currFavsIdstr.indexOf(ts._id + "::") != -1) {
	currFTclr = "material-icons txtClrRed";
	}
	strHtml += "<div><span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrClrDlg txtClrDlg\" onclick=\"javascript:doRecentFavorite('" + tmpUFavstr + "','" +  ts.i_title + "','" + ts.i_img + "','" + ts._id + "','btnFavs" + ts._id + "');\"><i id=\"btnFavs" + ts._id + "\" class=\"" + currFTclr + "\" alt=\"favorite\" title=\"favorite\" value=\"favorite\">&#xe87d;</i></span>";
	 strHtml += "<span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrClrDlg txtClrDlg\" style=\"margin:2px;\"  onclick=\"JSSHOP.ui.showShareBox('product'," + ts._id + ");\"><i class=\"material-icons txtClrTtl\" alt=\"share\" title=\"share\" value=\"share\">&#xe80d;</i></span>";
    if(thePrdsArna == "prodpg") {
	strHtml += "<span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrClrDlg txtClrDlg\" style=\"margin:2px;\"  onclick=\"JSSHOP.ui.showMsgBox('product', ts._id,'showMsgSave');\"><i class=\"material-icons txtClrTtl\" alt=\"chat\" title=\"messages\" value=\"messages\">&#xe0b7;</i></span>";
    }

	strHtml += "</div>";

	strHtml += "<input type=\"hidden\" id=\"prd" + 5 + iint + "\" value=\"\">";
    strHtml += "<div class=\"clearfix\"></div>";
	strHtml += "</li>";

	}

} catch(e) {
// strHtml += e + "<br>";
}
iint++;
}
strHtml += "</ol>"

strHtml += "<div>";

return strHtml;
};


JSSHOP.shop.loadCatChunk = function (theCurrPage) {
    console.log("loadCatChunk: " + theCurrPage);
    // document.getElementById("includedContent").innerHTML = "";
    try {
    currPgIndex = theCurrPage-1;
    tmpJSsrtd = null;
    tmpJSsrtd =  currEbyPrdsArr.slice(currPgIndex * currProdsPPg, (currPgIndex * currProdsPPg) + currProdsPPg);
    raresp = JSSHOP.ads.getEAdsFullStr(tmpJSsrtd, "part", "doEAdsOnPart");
    trrDiv = document.createElement("div");
    // trrDiv.innerHTML = raresp;
    console.log("loadCatChunk.raresp: " + raresp);
    // console.log("doEAdsOnPart: " + inpMakes.value + " " + inpModels.value + " " + inpParts.value);
     // document.getElementById("includedContent").innerHTML = tBoxStr;
    //  create a new div element
    // and add three javascript links as child elements
    tmpDvOLStr = "<div><a href=\"javascript:JSSHOP.ads.doPgLnkMedia('ebay',30);\">Ebay</a> | <a href=\"javascript:JSSHOP.ads.doPgLnkMedia('ggl',30);\")\">Google</a></div>";
    tmpDvPartOpts = document.createElement("div");
    tmpDvPartOpts.innerHTML = tmpDvOLStr;
    // document.getElementById("includedContent").appendChild(tmpDvPartOpts);

     // document.getElementById("dvEBSearchRes").appendChild(trrDiv);
     document.getElementById("dvEBSearchRes").innerHTML = raresp;


        var swiper = new Swiper('.swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            createElements: true,
            height: 300,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            } ,
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            },
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
              },
        });
    } catch(e) {
        // alert("loadCatChunk: " + e);
        console.log("loadCatChunk.ERROR: " + e);
       //  JSSHOP.logJSerror(e, arguments, "loadCatChunk" + " " + e);
    }

};

// to delete. will try shared.getGenPagination

JSSHOP.shop.getDefaultPageNav = function(currentPage, nrOfPages) {


try {
// https://gist.github.com/kottenator/9d936eb3e4e3c3e02598
var delta = 1,range = [];
pgnString = "<ol class=\"pagination\">";
startPg = (currentPage - delta) > 0 ? currentPage - delta : 1;
endPg = (currentPage + delta + 2) > nrOfPages ? nrOfPages : currentPage + delta + 2;

for(ika = startPg; ika < endPg; ika++) {
range.push(ika);
}
range.push(endPg);

		if(startPg - 2 > 0) {
		currPAlink = "javascript:scrollToElement('dvHdr');JSSHOP.shop.loadCatChunk(" + 1 + ")";
	      pgnString += "<li class=\"page\"><a href=\"" + currPAlink + "\">1</a></li>";
		}

		if(startPg - 1 > 0) {
		currPAlink = "javascript:scrollToElement('dvHdr');JSSHOP.shop.loadCatChunk(" + (startPg - 1) + ")";
		if(startPg - 1 == 1) {
	      pgnString += "<li class=\"page\"><a href=\"" + currPAlink + "\">1</a></li>";
		} else {
	      pgnString += "<li class=\"page\"><a href=\"" + currPAlink + "\">...</a></li>";
		}
		}

		for(idd = 0; idd < range.length; idd++) {

		currPAlink = "javascript:scrollToElement('dvHdr');JSSHOP.shop.loadCatChunk(" + range[idd] + ")";
 		if(range[idd] == currentPage + 1) {
	      pgnString += "<li class=\"page\"><b>" + range[idd] + "</b></li>";
		} else {
	      pgnString += "<li class=\"page\"><a href=\"" + currPAlink + "\">" + range[idd] + "</a></li>";
		}

        	} // end of for idd

		if(endPg + 1 <= nrOfPages) {
		currPAlink = "javascript:scrollToElement('dvHdr');JSSHOP.shop.loadCatChunk(" + (endPg + 1) + ")";
		if(endPg + 1 == nrOfPages) {
	      pgnString += "<li class=\"page\"><a href=\"" + currPAlink + "\">" + nrOfPages + "</a></li>";
		} else {
	      pgnString += "<li class=\"page\"><a href=\"" + currPAlink + "\">...</a></li>";
		}
		}


 		if(endPg + 2 <= nrOfPages) {
		currPAlink = "javascript:scrollToElement('dvHdr');JSSHOP.shop.loadCatChunk(" + nrOfPages + ")";
	      pgnString += "<li class=\"page\"><a href=\"" + currPAlink + "\">" + nrOfPages + "</a></li>";
		}
            pgnString += "</ol>";
    		return pgnString;

} catch(e) {
alert(e);
}
};





JSSHOP.shop.renderNuCartItems = function(tmpJustTotals, tmpUseCloseLnk, tmpNumCItems) {

    tstr = "";
    iint = 0;
    ppint = 1;
	 cartTtl = 0;
 	cartIttls = 0;
		ttCAA = currCartIArr[0];
	// ttCAA = JSON.parse(arrAllForms.qcartitem.v[0]);
    len = currCartIArr.length;
    if(len > tmpNumCItems) {
    len = tmpNumCItems;
    }
    var strOnlyTtls = "";
    strHtml = "<div class=\"txtSmall txtBold mintwofh highZ tatCross\">";
    if(tmpUseCloseLnk == "y") {
    strHtml += "<div onclick=\"JSSHOP.ui.closeLbox();\" class=\"slmtable txtClrRed txtBold brdrClrRed crsrPointer\" style=\"float:right\">Close</div>";
    }
    strHtml += "<div class=\"txtClrHdr bkdgClrDlg txtBold\" style=\"margin-bottom: 15px;\">";
    strHtml += "<i class=\"material-icons\"  style=\"margin-top: 5px;font-size:14px;\"  alt=\"shopping_cart\" title=\"shopping_cart\">&#xe8cc;</i> Cart Preview</a></div>";

    if (currCartIArr.length) {
       strHtml += "<div onclick=\"javascript:document.location.href='index.html?pid=aa-show-cart&cid=" + cid + "&ppid=" + ppid + "'\" class=\"rtable txtClrHdr bkdgClrDlg txtBold crsrPointer\" style=\"margin-bottom: 18px;max-width: 65%; margin: 0 auto;text-align: center\">Go To Cart/Checkout -></div>";
   }
            strHtml += "<div style=\"padding-top: 8px; margin: 8px; border-bottom: 1px dashed #D1D5D1;\">";
	      strHtml += "</div>";

	ts = null;
    while (iint < len) {
        ts = currCartIArr[iint];
        strRecID = ts._id;
        strRecType = 50;





        if (ts._id > 0) {


	na = ts.ci_price_a - ts.ci_price_b;
	nd = Math.round((na / ts.ci_price_a) * 100);
	strPriceHtml = "";

      tmpTttl = ts.ci_price_b * ts.ci_cartqty;
	cartTtl = cartTtl + tmpTttl;

 	cartIttls = Math.round(ts.ci_cartqty) + cartIttls;


		if(ts.ci_img) {
		 tmpIstrI = JSSHOP.shop.getPrdImgStr("prdmedia", ts.ci_img);
		}


            strTTHtml = "";
            strTTHtml += "<div style=\"max-width:78%\">";
 		//   strTTHtml += "<a class=\"txtDecorNone\" href=\"index.html?pid=aa-show-item&itemid=" + ts.ci_pid + "&cid=" + ts.ci_coid + "&catid=" + ts.ci_catid + "\">";
        strTTHtml += "<a class=\"txtDecorNone\" href=\"javascript:eindex('aa-show-item','pid=aa-show-item&itemid=" + ts.ci_pid + "&cid=" + ts.ci_coid + "&catid=" + ts.ci_catid + "');\">";
       strTTHtml += "<img src=\"" + tmpIstrI + "\" class=\"slmtable brdrClrDlg icndbtn\" style=\"align: center;text-align:center;margin:6px;\" align=\"absmiddle\">" +  ts.ci_title;
            strTTHtml += "<span class=\"txtstriked txtBig txtClrGrey\">" + ts.ci_price_b + "</span></a>";
            strTTHtml += "</div>";

	      strOnlyTtls += strTTHtml;
            strHtml +=  strTTHtml;





            strHtml += "<div style=\"align: right;text-align:right\">";
            strHtml += "<span onclick=\"javascript:JSSHOP.ui.doDefCBBCC('ahCartIcon', null, document.location.href='index.html?pid=aa-show-cart&cid=' + cid + '&ppid=' + ppid);\" class=\"crsrPointer\"><span class=\"txtBig txtClrDlg txtBold\">x" + ts.ci_cartqty + " = " + tmpTttl + "</span></span>";
             strHtml += "</div>";




            strHtml += "<div style=\"padding-top: 8px; margin: 8px; border-bottom: 1px dashed #D1D5D1;\">";
	      strHtml += "</div>";







            strHtml += "<input type=\"hidden\" id=\"prd" + 5 + iint + "\" value=\"\">";


            strHtml += "<input type=\"hidden\" name=\"item_name_" + ppint + "\" value=\"" +  ts.ci_title + "\">";
            strHtml += "<input type=\"hidden\" name=\"item_number_" + ppint + "\" value=\"" +  ts._id + "\">";
            strHtml += "<input type=\"hidden\" name=\"quantity_" + ppint + "\" value=\"" + ts.ci_cartqty + "\">";
            strHtml += "<input type=\"hidden\" name=\"amount_" + ppint + "\" value=\"" + ts.ci_price_b + "\">";

        }
            strTTHtml = "";
	  ppint++;
        iint++;
    }
    if (currCartIArr.length) {

      strHtml += "<div style=\"text-align: right\">Total:<b>" + cartTtl.toFixed(2) + "</b></div>";
      strHtml += "<div onclick=\"javascript:document.location.href='index.html?pid=aa-show-cart&cid=" + cid + "&ppid=" + ppid + "'\" class=\"rtable txtClrHdr bkdgClrDlg txtBold crsrPointer\" style=\"margin-bottom: 18px;max-width: 65%; margin: 0 auto;text-align: center\">Go To Cart/Checkout -></div>";

   } else {
      strHtml += "<div>" + stxt[34] + "</div>";
 	strHtml += "<div class=\"collection-item txtSmall txtBold\">Recent:<br>" + currRcntActHstr + "</div>";

    }

    strHtml += "</div>";

	if(tmpJustTotals == "y") {
	strHtml = cartIttls + "::" + cartTtl.toFixed(2);
	}
	if(tmpJustTotals == "m") {
	strHtml = strOnlyTtls;
	}

return strHtml;




};
























/*
*
* ads functions formatted output
*/
// template functions

function doUpdteMDDSlct(apld, aaw,aww,cww) {
    console.log("doUpdteMDDSlct: " + apld + " " + aaw + " " + aww + " " + cww);
    tPsLctPlObj = null;
    tPsLctPlarr = [];
    tDDiid = "";
    tDDiidx = "";
    if(apld.indexOf(":") != -1) {
        tPsLctPlarr = apld.split(":");
        tDDiid = tPsLctPlarr[0];
        tDDiidx = tPsLctPlarr[1];
        }

    console.log('doUpdteMDDSlct: ' +  apld + " :: " + aaw + " :: " + aww);
   switch(aww) {
    case "edit":
      eindex('aa-edit-post', 'pid=aa-edit-post&tpstid=' + tDDiid);
      break;
    case "view":
       eindex('aa-show-update', 'pid=aa-show-update&tupid=' + tDDiid);
      break;
    case "share":
      JSSHOP.ui.showShareBox('update',  tDDiidx);
      break;
    case "msg":
      JSSHOP.ui.showMsgBox('uproperty', tDDiidx, 'showMsgSave');
      break;
    case "fav":
      doRecentFavorite('index.html?pid=aa-show-prop&prpid=' + tDDiid, 'noQvalue', 'noQvalue', tDDiid, 'btnFavs' + tDDiid);
      break;
    case "streetview":
      tPropObj = currShopsArr[tDDiidx];
      tSrvLLstr = tPropObj.ploclat + "," + tPropObj.ploclng;
      window.open("http://maps.google.com/maps?q=&layer=c&cbll=" + tSrvLLstr);
      break;
    default:
      alert('doUpdteMDDSlct - default');
      break;

  }
  }

function jshp_ads_showUpdtsFeed(aaup,bbup,ccup) {
    console.log("jshp_ads_showUpdtsFeed: " + aaup + " " + bbup + " " + ccup);
    // alert("jshp_ads_showUpdtsFeed: " + aaup + " " + bbup + " " + ccup);
    tHasMap = "no";
    tHasSlider = "no";
    tCanPost = "no";
    tUdtsStr = "";
    tUdtsArr = [];
    tUdtsArr = JSON.parse(bbup);
    tUdtsObj = null;
    tUdtsObj = "";
    tDDUdteObj = null;

    currUpdateArr = null;
     currUpdateArr = "";
    currUpdateArr = [];
     currUpdateArr = tUdtsArr;
    for(ided = 0; ided < tUdtsArr.length; ided++) {
            tUdtsObj = null;
    tUdtsObj = "";
        tUdtsObj = tUdtsArr[ided];
        tCanPost = "yes";
        tDDUpdateStr = "";


tDDUdtePLdStr  = tUdtsObj._id + ":" + ided;

tUpdteListObj = null;
tUpdteListObj = "";
tUpdteListObj = {};
if((quid == tUdtsObj.p_uid) || (u_cat.value == "5")) {
    tUpdteListObj["edit"] = stxt[31];
    // tPrpMMListObj["delete"] = stxt[109];
    // tPrpMMListObj["privacy"] = stxt[101];
    }

tUpdteListObj["view"] = stxt[53];
tUpdteListObj["share"] = stxt[72];
tUpdteListObj["fav"] = stxt[73];



        tDDUdteObj = {};
        tDDUdteObj["ddtype"] = "moreHoriz";
        tDDUdteObj["fld"] = "noQvalue";
        tDDUdteObj["lbl"] = stxt[101];
        tDDUdteObj["val"] = "noQvalue";
        tDDUdteObj["pload"] = tDDUdtePLdStr;
        tDDUdteObj["kvpObj"] = tUpdteListObj;
        tDDUdteObj["cb"] = "doUpdteMDDSlct";
        tDDUdteObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
        tDDUdteObj["lblcls"] = "txtSmall txtBold txtClrGrey";
        tDDUdteObj["valcls"] = "txtSmall txtBold txtClrGrey";
        tDDUdteObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
        tDDUdteObj["horvert"] = "horizontal";
        tDDUdteObj["icn"] = "noQvalue";
        tDDUdteObj["kvIcnsObj"] = {};
        tDDUdteObj["kvIcnsObj"]["edit"] = "&#xe3c9;";
        tDDUdteObj["kvIcnsObj"]["view"] = "&#xe8f4;";
        tDDUdteObj["kvIcnsObj"]["share"] = "&#xe80d;";
        tDDUdteObj["kvIcnsObj"]["fav"] = "&#xe87d;";



        tDDUpdateStr = JSSHOP.ui.getNuBSdropDstr(tDDUdteObj);

        /*
        tPostsAuthObj = {};
tPostsAuthObj["user"] = "Me";
tPostsAuthObj["co"] = "Company";
tPostsAuthObj["anon"] = "Anonymous";
tPostsAuthObj["none"] = "None";
svftObj["postauth"] = tPostsAuthObj;
        */

        // tUdtsStr += "<div class=\"slmtable bkgdClrWhite bottom-shadow\" style=\"margin-top:18px;padding:0px;max-width: 600px;margin: 0 auto;\">";
        tpauther = tUdtsObj.p_author;
        if(tpauther == "user") {
         tUdtsStr += "<div class=\"slmtable bkgdClrWhite bottom-shadow\" style=\"margin-top:18px;padding:0px;max-width: 600px;margin: 0 auto;\">";
        } else if(tpauther == "co") {
         tUdtsStr += "<div class=\"slmtable bkgdClrWhite bottom-shadow\" style=\"margin-top:18px;padding:0px;max-width: 600px;margin: 0 auto;border-left: 4px solid #4caf50;\">";
        } else if(tpauther == "anon") {
            tUdtsStr += "<div class=\"slmtable bkgdClrWhite bottom-shadow\" style=\"margin-top:18px;padding:0px;max-width: 600px;margin: 0 auto;border-left: 4px solid #9e9e9e;\">";
        } else {
            tyyy = "ytt";
            tUdtsStr += "<div class=\"slmtable bkgdClrWhite bottom-shadow\" style=\"margin-top:18px;padding:0px;max-width: 600px;margin: 0 auto;\">";
         // tUdtsStr += "";
        }
        tUdtsStr += "<table style=\"width: 100%\"><tr><td style=\"min-width:40px;\">";
        if(tpauther == "user") {
        tUdtsStr += "<a href=\"javascript:eindex('aa-show-user', 'pid=aa-show-user&tuid=" + tUdtsObj.p_uid + "');\" class=\"crsrPointer\">";
        tUdtsStr += "<div><img alt=\"Profile\" src=\"images/user/s_thumb" + tUdtsObj.u_icon + "\"  class=\"icnRndnUser\" align=\"absmiddle\"><br><span class=\"txtSmall txtClrGrey\">" + tUdtsObj.u_fullname + "</span></div></a>";
        } else if(tpauther == "co") {
        tUdtsStr += "<a href=\"javascript:eindex('aa-show-place', 'pid=aa-show-place&tcid=" + tUdtsObj.p_coid + "');\" class=\"crsrPointer\">";
        tUdtsStr += "<div><img alt=\"Company\" src=\"images/misc/thumb_logo_ai_trimmed.gif\"  class=\"icnRndnUser\" align=\"absmiddle\"><br><span class=\"txtSmall txtClrGrey\">" + tUdtsObj.co_name + "</span></div></a>";
        } else if(tpauther == "anon") {
        tUdtsStr += "<div><img alt=\"Anonymous\" src=\"images/user/s_thumbdefault.png\"  class=\"icnRndnUser\" align=\"absmiddle\"><br><span class=\"txtSmall txtClrGrey\">" + stxt[102] + "</span></div>";
        } else {
        tUdtsStr += "";
        }


        tUdtsStr += "</td><td>";
        tUdtsStr += "<h5 class=\"text-secondary hover-text-primary text-capitalize\" style=\"margin-bottom:0px;\"><a href=\"javascript:eindex('aa-show-update','pid=aa-show-update&tupid=" + tUdtsObj._id + "')\">" + decodeURIComponent(tUdtsObj.p_title)  + "</a></h5>";
        // tUdtsStr += "<table style=\"width:100%;\"><tbody><tr><td><i class=\"small-material-icons coll-menu-item txtClrHdr txtBold\" alt=\"location_on\" title=\"Location\" style=\"verticle-align:middle;color:#dbddd9;\">&#xe55c;</i></td><td><span class=\"txtSmall txtBold txtClrHdr\">" + tUdtsObj.p_location + "</span></td><td style=\"text-align:right;\" nowrap=\"nowrap\"><div class=\"price text-primo\" style=\"margin-right:10px;\"><b>" + tPostsTypeObj[tUdtsObj.p_ptype] + "</b></div></td></tr></tbody></table>";
        tUdtsStr += "</td>";
        tUdtsStr += "<td style=\"vertical-align:top\">" + tDDUpdateStr + "</td>";
        tUdtsStr += "</tr></table>";


        tUdtsStr += "<div class=\"mb-4\">";


        tUpType = tUdtsObj.p_ptype;



        tZpUpPcntnt = tUdtsObj.p_content;
        tDcdedUcntnt = decodeURIComponent(tZpUpPcntnt);
        ttUpPcontent = LZString.decompressFromEncodedURIComponent(tDcdedUcntnt);

        // tHtmlStrpd = ttUpPcontent.replace(/(<([^>]+)>)/ig,"");
        // only allow img and a tags
        if(pid == "aa-show-update") {
//            javascript:eindex('aa-show-prop','pid=aa-show-prop&prpid=129 ')
// if #PROPID: is present in content, replace with link to property

           //  tUpPcontent = ttUpPcontent;
              tUpPcontent = ttUpPcontent.replace(/#PROPID:([0-9]+)/g, function(match, p1) {
                return "<a href=\"javascript:eindex('aa-show-prop','pid=aa-show-prop&prpid=" + p1 + "');\" class=\"txtClrHdr txtBold\"><u>#PROPID:" + p1 + "</u></a>";
            });
        } else {
        tHtmlStrpd = ttUpPcontent.replace(/<(?!\/?(a|img)(?=>|\s.*>))\/?.*?>/ig, "");
        if(tHtmlStrpd.length > 100) {
           tUpPcontent = tHtmlStrpd.substring(0, 100) + "...";
        } else {
            tUpPcontent = tHtmlStrpd;
        }
        }
        // tUpPcontent = tHtmlStrpd.substring(0, 100) + "...";

        // modify returned string to add buttons and icons div here
tUdtLnkStr = "<div class=\"bkdgClrWhite brdrClrHdr txtSmall txtBold\" style=\"padding:4px;margin:2px;overflow:hidden;\">";

// icon and label button links float left in a div
tUdtLnkStr += "<div style=\"display:flex;align-items:center;flex-wrap:wrap;gap:8px;\">";
// check if already a favorite and make it red if so
currFTclr = "menu-material-icons txtClrTtl";
 if(currFavsIdstr.indexOf(tUdtsObj._id + "::") != -1) {
currFTclr = "menu-material-icons txtClrRed";
}
tUdtLnkStr += "<span tid=\"dvCoFavBtn\" class=\"crsrPointer\" onclick=\"javascript:doRecentFavorite('index.html?pid=aa-show-update&tupid=" + tUdtsObj._id + "','" + tUdtsObj.p_title + "','images/ucontent/m_thumb" + tUdtsObj.p_image + "','" + tUdtsObj._id + "','btnFavs" + tUdtsObj._id + "');\"><i id=\"btnFavs" + tUdtsObj._id + "\" class=\"" + currFTclr + "\" alt=\"favorite\" title=\"favorite\" value=\"favorite\">&#xe87d;</i>" + " " + stxt[618] + "</span>";
if(quid == tUdtsObj.p_uid) {
tUdtLnkStr += "<span class=\"crsrPointer\" style=\"margin-right:12px;\" onclick=\"eindex('aa-edit-post', 'pid=aa-edit-post&tpstid=" + tUdtsObj._id + "');\"><i class=\"menu-material-icons txtClrTtl\" alt=\"edit\" title=\"edit\" value=\"edit\">&#xe3c9;</i>" + " " + stxt[31] + "</span>";
} else {
tUdtLnkStr += "<span class=\"crsrPointer\" style=\"margin-right:12px;\" onclick=\"JSSHOP.ui.prepMsgBox(" + tUdtsObj.p_uid + ",'" + tUdtsObj.u_fullname + "','" + tUdtsObj.u_icon + "','noQvalue','showMsgSave');\"><i class=\"menu-material-icons txtClrTtl\" alt=\"chat\" title=\"messages\" value=\"messages\">&#xe0b7;</i>" + " " + stxt[98] + "</span>";
}
tUdtLnkStr += "<span class=\"crsrPointer\" style=\"margin-right:12px;\" onclick=\"JSSHOP.ui.showShareBox('update'," + ided + ");\"><i class=\"menu-material-icons txtClrTtl\" alt=\"share\" title=\"share\" value=\"share\">&#xe80d;</i>" + " " + stxt[72] + "</span>";
if(tUpType == "pvideo") {
    // add the download icon and link here
var downloadLbl = (typeof stxt !== "undefined" && stxt[999]) ? stxt[999] : "Download";
tUdtLnkStr += "<span class=\"crsrPointer\" style=\"margin-right:12px;\">";
tUdtLnkStr += "<a href=\"images/ucontent/" + tUdtsObj.p_vala + "\" download class=\"txtClrHdr\"><i class=\"menu-material-icons txtClrTtl\" alt=\"download\" title=\"download\" value=\"download\">&#xe2c4;</i>" + " " + downloadLbl + "</a></span>";
}
tUdtLnkStr += getComntLikeDiv(tUdtsObj._id, 4);
tUdtLnkStr += "</div>";
// end of icons labels buttons div.





tUdtLnkStr += "</div>"; // end bkdgClrWhite brdrClrHdr txtSmall txtBold
console.log("jshp_ads_showUpdtsFeed.tUdtLnkStr: " + tUdtLnkStr);



        switch(tUpType) {
            case "pcontent":
                tUdtsStr +=  tUpPcontent;
                break;
            case "ppost":
                tUdtsStr +=  tUpPcontent;
                break;
            case "pimage":
                // imgprefx = "m_thumb";
                imgprefx = "";
                if(pid == "aa-show-update"){
                imgprefx = "";
                tUdtsStr += "<img src=\"images/ucontent/" + imgprefx + tUdtsObj.p_image + "\" alt=\"pimage\" class=\"img100p\">";
                             // add the share,msg,fav  buttons here
                tUdtsStr += tUdtLnkStr;


                tUdtsStr += "<div id=\"dvUpdtCntnt\" class=\"clsPcntnt\" style=\"padding:10px;height:300px;overflow:hidden;\">" + tUpPcontent + "</div>";
                tUdtsStr += "<div id=\"dvUpdtCBtn\" class=\"clsPcntnt\" style=\"padding:10px;height:40px;\"><a href=\"javascript:void(0);\" class=\"txtClrHdr txtBold\" onclick=\"javascript:showMoreUpdtCntnt('dvUpdtCntnt','dvUpdtCBtn');\">" + stxt[110] + "</a></div>";
                } else {
                tUdtsStr += "<a href=\"javascript:eindex('aa-show-update','pid=aa-show-update&tupid=" + tUdtsObj._id + "')\">";
                tUdtsStr += "<img src=\"images/ucontent/" + imgprefx + tUdtsObj.p_image + "\" alt=\"pimage\" class=\"img100p\">";
                tUdtsStr += "</a>";

                tUdtsStr += "<div class=\"bg-gray quantity px-4 pt-4\">";
                tUdtsStr += tUpPcontent;
                tUdtsStr += "</div>"; // end bg-gray quantity px-4 pt-4
                                                // add the share,msg,fav  buttons here
                tUdtsStr += tUdtLnkStr;
                }


                break;
            case "pmap":
                if(tHasMap == "no") {
                tZpdUpPvrs = tUdtsObj.p_vars;
                urlDcdUPvstr = decodeURIComponent(tZpdUpPvrs);
                tUpPvrs = LZString.decompressFromEncodedURIComponent(urlDcdUPvstr);
                console.log("tUpPvrs.pmap: " + tUpPvrs);
                tUpPvrsObj = JSON.parse(tUpPvrs);
                if(tUpPvrsObj) {
                    tDvaMpID = "";
                    if(tUpPvrsObj["uptype"]) {
                        console.log("tUpPvrsObj.uptype: " + tUpPvrsObj.uptype);
                        tRansSTr = Math.random().toString(36).substring(2, 7);
                        tDvaMpID = "dvUpMap" + tRansSTr;
                        tUdtsStr += "<div id=\"" + tDvaMpID +  "\" style=\"min-height: 240px; max-height: 240px; width: 100%;\"></div>";


                 if(pid == "aa-show-update"){
                     tUdtsStr += tUdtLnkStr;
                                    tUdtsStr += "<div id=\"dvUpdtCntnt\" class=\"clsPcntnt\" style=\"padding:10px;height:300px;overflow:hidden;\">" + tUpPcontent + "</div>";
                tUdtsStr += "<div id=\"dvUpdtCBtn\" class=\"clsPcntnt\" style=\"padding:10px;height:40px;\"><a href=\"javascript:void(0);\" class=\"txtClrHdr txtBold\" onclick=\"javascript:showMoreUpdtCntnt('dvUpdtCntnt','dvUpdtCBtn');\">" + stxt[110] + "</a></div>";
                                } else {
                tUdtsStr += "<div class=\"bg-gray quantity px-4 pt-4\">";
                tUdtsStr += tUpPcontent;
                tUdtsStr += "</div>"; // end bg-gray quantity px-4 pt-4
                        // add the share,msg,fav  buttons here   tUdtLnkStr
                         tUdtsStr += tUdtLnkStr;
                                }



                        tALeavesObj = null;
                        tALeavesObj = "";
                        tALeavesObj = {};
                        tALeavesObj["mrkrs"] = [];
                        tALeavesObj["mrkrs"] = JSSHOP.ads.getUpdtMapMrkrs(tUpPvrsObj.uptype, tUpPvrsObj.data);
                        tMapTypeForPost = "random";
                        if (tUpPvrsObj.cnfg && tUpPvrsObj.cnfg["inpMapPstType"]) {
                            tMapTypeForPost = String(tUpPvrsObj.cnfg["inpMapPstType"]).toLowerCase();
                        }
                        if (tMapTypeForPost == "satellite") {
                            tMapTypeForPost = "satelite";
                        }
                        if (tMapTypeForPost != "street" && tMapTypeForPost != "satelite") {
                            tMapTypeForPost = "random";
                        }
                        tALeavesObj["mapType"] = tMapTypeForPost;
                        tMapEffectForPost = "fitbounds";
                        if (tUpPvrsObj.cnfg && tUpPvrsObj.cnfg["inpMapPstEffect"]) {
                            tMapEffectForPost = String(tUpPvrsObj.cnfg["inpMapPstEffect"]).toLowerCase();
                        }
                        if (tMapEffectForPost != "fitbounds" && tMapEffectForPost != "flyto" && tMapEffectForPost != "flytobounds" && tMapEffectForPost != "panto") {
                            tMapEffectForPost = "fitbounds";
                        }
                        tALeavesObj["mapEffect"] = tMapEffectForPost;
                        tMapFlySpeedForPost = "normal";
                        if (tUpPvrsObj.cnfg && tUpPvrsObj.cnfg["inpMapPstFlySpeed"]) {
                            tMapFlySpeedForPost = String(tUpPvrsObj.cnfg["inpMapPstFlySpeed"]).toLowerCase();
                        }
                        if (tMapFlySpeedForPost != "slowest" && tMapFlySpeedForPost != "slower" && tMapFlySpeedForPost != "slow" && tMapFlySpeedForPost != "normal" && tMapFlySpeedForPost != "fast") {
                            tMapFlySpeedForPost = "normal";
                        }
                        tALeavesObj["mapFlySpeed"] = tMapFlySpeedForPost;
                        tMapShowSellerForPost = "no";
                        if (tUpPvrsObj.cnfg && tUpPvrsObj.cnfg["inpMapPstShowSeller"]) {
                            tMapShowSellerForPost = String(tUpPvrsObj.cnfg["inpMapPstShowSeller"]).toLowerCase();
                        }
                        if (tMapShowSellerForPost == "true") {
                            tMapShowSellerForPost = "yes";
                        }
                        if (tMapShowSellerForPost != "yes") {
                            tMapShowSellerForPost = "no";
                        }
                        tALeavesObj["showSellerBadge"] = tMapShowSellerForPost;
                        tMapAutoPlayForPost = "off";
                        if (tUpPvrsObj.cnfg && tUpPvrsObj.cnfg["inpMapPstAutoPlay"]) {
                            tMapAutoPlayForPost = String(tUpPvrsObj.cnfg["inpMapPstAutoPlay"]).toLowerCase();
                        }
                        if (tMapAutoPlayForPost == "yes" || tMapAutoPlayForPost == "true") {
                            tMapAutoPlayForPost = "on";
                        }
                        if (tMapAutoPlayForPost != "on") {
                            tMapAutoPlayForPost = "off";
                        }
                        tALeavesObj["autoPlay"] = tMapAutoPlayForPost;
                        tALeavesObj["sellerName"] = String(tUdtsObj.u_fullname || "");
                        tALeavesObj["sellerIcon"] = String(tUdtsObj.u_icon || "");
                        tALeavesObj["sellerUid"] = String(tUdtsObj.p_uid || "");
                        tALeavesObj["mdvid"] = tDvaMpID;
                        tStrO = "";
                        tStrToObj = "";
                        tStrO = JSON.stringify(tALeavesObj);
                        tStrToObj = JSON.parse(tStrO);
                        console.log("jshp_ads_showUpdtsFeed.tALeavesObj: " + JSON.stringify(tALeavesObj));
                         setTimeout(function() {doNuSpinSet(tDvaMpID, "small", null, "...");}, 1000);
                        // setTimeout(function() {JSSHOP.ads.doNurGenMap(tStrToObj, tDvaMpID) }, 1200 + (ided * 200));
setTimeout(
  (function(obj, id) {
    return function() {
      JSSHOP.ads.doNurGenMap(obj, id);
    };
  })(tStrToObj, tDvaMpID),
  1200 + (ided * 200)
);
                        } else {
                            console.log("tUpPvrsObj.uptype NOT FOUND: " + tUpPvrsObj.uptype);
                        }
                }
               //  tHasMap = "yes";
                } else {
                    tCanPost = "no";
                }
                break;
                case "pcarousel":
                    tHasSlider = "yes";
                tZpdUpPvrs = tUdtsObj.p_vars;
                urlDcdUPvstr = decodeURIComponent(tZpdUpPvrs);
                tUpPvrs = LZString.decompressFromEncodedURIComponent(urlDcdUPvstr);
                console.log("tUpPvrs.pcarousel: " + tUpPvrs);
                tUpPvrsObj = JSON.parse(tUpPvrs);
                if(tUpPvrsObj) {
                        if(tUpPvrsObj["uptype"]) {
                            tNwSptArr = [];
                            tNwSptObj = tUpPvrsObj.data;
                            /*   */
                            for(var key in tNwSptObj) {
                                tNwSptArr.push(tNwSptObj[key]);
                            }

                            taNewPstr = "";
                            if(tUpPvrsObj["uptype"] == "props") {

                                taNewPstr = JSSHOP.ads.getNuSwprPrpStr("cls" + tUdtsObj._id, tNwSptArr);

                            } else {
                                taNewPstr = JSSHOP.ads.getNuSwiperUStr("cls" + tUdtsObj._id, tNwSptArr);

                            }
                            tUdtsStr +=  taNewPstr;

                            if(pid == "aa-show-update"){
                                  tUdtsStr += tUdtLnkStr;
                                                tUdtsStr += "<div id=\"dvUpdtCntnt\" class=\"clsPcntnt\" style=\"padding:10px;height:300px;overflow:hidden;\">" + tUpPcontent + "</div>";

                tUdtsStr += "<div id=\"dvUpdtCBtn\" class=\"clsPcntnt\" style=\"padding:10px;height:40px;\"><a href=\"javascript:void(0);\" class=\"txtClrHdr txtBold\" onclick=\"javascript:showMoreUpdtCntnt('dvUpdtCntnt','dvUpdtCBtn');\">" + stxt[110] + "</a></div>";

                                } else {
                tUdtsStr += "<div class=\"bg-gray quantity px-4 pt-4\">";
                tUdtsStr += tUpPcontent;
                tUdtsStr += "</div>"; // end bg-gray quantity px-4 pt-4
                tUdtsStr += tUdtLnkStr;
                          }                          // add the share,msg,fav  buttons here

                        }



                        taSwpCnfgObj = "";
                        taSwpCnfgObj = {};
                        taSwpCnfgObj["cls"] =  ".cls" + tUdtsObj._id;
                        taSwpCnfgObj["slidesPerView"] = 3;
                        // taSwpCnfgObj["loop"] = true;
                        // taSwpCnfgObj["createElements"] = true;
                        taSwpCnfgObj["effect"] = "slide";
                       //  taSwpCnfgObj["slide"] = {"slideShadows": true, "limitRotation": true};
                        taSwpCnfgObj["autoplayDisableOnInteraction"] = false;
                        taSwpCnfgObj["pagination"] = {el: ".clsPcls" + tUdtsObj._id, clickable: true};
                       taSwpCnfgObj["paginationClickable"] = true;
                        taSwpCnfgObj["navigation"] = {nextEl: ".clsBNcls" + tUdtsObj._id, prevEl: ".clsBPcls" + tUdtsObj._id};
                       //  taSwpCnfgObj["grabCursor"] = true;
                        // taSwpCnfgObj["nextButton"] = ".clsBNcls" + tUdtsObj._id;
                        // taSwpCnfgObj["prevButton"] = ".clsBPcls" + tUdtsObj._id;
                           //    taSwpCnfgObj["nextButton"] = ".swiper-button-next";
                          //     taSwpCnfgObj["prevButton"] = ".swiper-button-prev";
                         //   tSwpCnfgObj["grabCursor"] = true;
                         // tIntTO = (1 + ided) * 1000;
                         // setTimeout(function() { JSSHOP.ads.loadNuSwiperObj(tSwpCnfgObj); }, tIntTO);
                         console.log("jshp_ads_showUpdtsFeed.taSwpCnfgObj: " + JSON.stringify(taSwpCnfgObj));
                         currSwpCnfgArr.push(taSwpCnfgObj);

                }



                break;
                case "pvideo":
                    var pvidId = "updVid_" + tUdtsObj._id;
                    var pvidLinkId = "updVidLink_" + tUdtsObj._id;
                    var pvidWrapId = "updVidWrap_" + tUdtsObj._id;
                    var pvidFramePropIds = [];
                    var pvidFrameDurationSec = 3;
                    try {
                        if (tUdtsObj.p_vars) {
                            var rawPvidVars = LZString.decompressFromEncodedURIComponent(decodeURIComponent(tUdtsObj.p_vars));
                            var pvidVarsObj = JSON.parse(rawPvidVars || "{}");
                            if (pvidVarsObj && pvidVarsObj.cnfg) {
                                if (Array.isArray(pvidVarsObj.cnfg.framePropertyIds)) {
                                    pvidFramePropIds = pvidVarsObj.cnfg.framePropertyIds.slice();
                                }
                                if (!isNaN(parseFloat(pvidVarsObj.cnfg.frameDurationSec))) {
                                    pvidFrameDurationSec = Math.max(0.5, parseFloat(pvidVarsObj.cnfg.frameDurationSec));
                                }
                            }
                            if (!pvidFramePropIds.length && pvidVarsObj && pvidVarsObj.data && typeof pvidVarsObj.data === "object") {
                                for (var pKey in pvidVarsObj.data) {
                                    if (pvidVarsObj.data.hasOwnProperty(pKey) && pvidVarsObj.data[pKey] && typeof pvidVarsObj.data[pKey]._id !== "undefined") {
                                        pvidFramePropIds.push(String(pvidVarsObj.data[pKey]._id));
                                    }
                                }
                            }
                        }
                    } catch (ePvideoVars) {
                        console.log("pvideo vars parse err: " + ePvideoVars);
                    }

                    // wrap this in a div and add the buttons in the div below the video
                 tUdtsStr += "<div class=\"mb-4\" style=\"width:100%;max-height:400px;max-width:400px;background-image: url('images/ucontent/" + tUdtsObj.p_image + "');\">";
                 // make the image "images/ucontent/" + tUdtsObj.p_image as background and add the play icon in the center, on click replace with video player
 // align it in middle of parent div with style=


                // embedd the p_vala webm video file found in images/ucontent/ folder
                tUdtsStr += "<video id=\"" + pvidId + "\" controls style=\"width:100%;max-height:400px;max-width:400px;\" poster=\"images/ucontent/" + tUdtsObj.p_image + "\">";
                // add the poster attribute with the p_image as thumbnail
                tUdtsStr += "<source src=\"images/ucontent/" + tUdtsObj.p_image + "\" type=\"image/jpeg\">";
                tUdtsStr += "<source src=\"images/ucontent/" + tUdtsObj.p_vala + "\" type=\"video/webm\">";
                tUdtsStr += "Your browser does not support the video tag.";
                tUdtsStr += "</video>";



                tUdtsStr += "<div class=\"bg-gray quantity px-4 pt-4\">";

                                if (pvidFramePropIds.length > 0) {
                    var initPropId = String(pvidFramePropIds[0] || "");
                    var initHref = currWebHome + "index.html?ditemid=" + initPropId + "-" + usrlang;
                    var openCurrPropLabel = (typeof stxt !== "undefined" && stxt[998]) ? stxt[998] : "Open current property";
                    tUdtsStr += "<div id=\"" + pvidWrapId + "\" class=\"txtSmall\" style=\"padding:6px 0 2px 0;\">";
                    tUdtsStr += "<a id=\"" + pvidLinkId + "\" href=\"" + initHref + "\" target=\"_blank\" rel=\"noopener\" class=\"txtBold\" style=\"display:inline-block;padding:5px 10px;border-radius:999px;border:1px solid rgba(255,255,255,0.7);background:rgba(255,255,255,0.9);color:#143a5c;text-decoration:none;\">" + openCurrPropLabel + "</a>";
                    tUdtsStr += "</div>";
                    tUdtsStr += "<script>(function(){var v=document.getElementById('" + pvidId + "');var a=document.getElementById('" + pvidLinkId + "');if(!v||!a){return;}var ids=" + JSON.stringify(pvidFramePropIds) + ";var segSec=" + pvidFrameDurationSec + ";var base=(typeof currWebHome==='string')?currWebHome:'" + currWebHome + "';var lng='" + usrlang + "';var mk=function(i){if(i<0||i>=ids.length){return ''; }return base + 'index.html?ditemid=' + ids[i] + '-' + lng;};var sync=function(){if(!ids.length){a.style.display='none';return;}var idx=Math.floor((v.currentTime||0)/segSec);if(idx<0){idx=0;}if(idx>=ids.length){idx=ids.length-1;}a.href=mk(idx);};v.addEventListener('loadedmetadata',sync);v.addEventListener('timeupdate',sync);sync();})();<\/script>";
                }

                tUdtsStr += tUpPcontent;
                tUdtsStr += "</div>"; // end bg-gray quantity px-4 pt-4
                tUdtsStr += "</div>"; // end mb-4
                    // add a download link for the video file to tUdtLnkStr +=

                 // add the share,msg,fav  buttons here
                    tUdtsStr += tUdtLnkStr;
                break;
                default:
                tUdtsStr +=  tUpPcontent;
                break;
        }


          // add the share,msg,fav  buttons here
              //   tUdtsStr += tUdtLnkStr;

        tUdtsStr += "</div>"; // end featured-thumb hover-zoomer mb-4
        tUdtsStr += "</div>";  // end col-md-6
    }  // end of for ided

    var _tuppstid = (typeof tuppstid !== "undefined" && tuppstid) ? tuppstid : (currUrlArr && currUrlArr.tupid ? currUrlArr.tupid : 0);
    if(pid === "aa-show-update" && _tuppstid && tUdtsArr.length > 0) {
        var tCmtPost = tUdtsArr[0];
        var tPostPrivacy = tCmtPost.p_privacy || "public";
        var tPostOwner  = String(tCmtPost.p_uid || "");
        var tViewerUid  = String(quid || "0");
        if(tPostPrivacy !== "private" || tPostOwner === tViewerUid) {
            tUdtsStr += "<div id=\"dvComments\"></div>";
        }
    }

    tDVufeeds = document.createElement("div");
    tDVufeeds.innerHTML = tUdtsStr;
    document.getElementById("includedContent").appendChild(tDVufeeds);

    for(var iUdtLk = 0; iUdtLk < tUdtsArr.length; iUdtLk++) {
        loadComntLikeCounts(tUdtsArr[iUdtLk]._id, 4);
    }

    if(pid === "aa-show-update"&& _tuppstid && tUdtsArr.length > 0) {
        var tCmtPost = tUdtsArr[0];
        var tPostPrivacy = tCmtPost.p_privacy || "public";
        var tPostOwner  = String(tCmtPost.p_uid || "");
        var tViewerUid  = String(quid || "0");
        if(tPostPrivacy !== "private" || tPostOwner === tViewerUid) {
            getCommentsDiv(_tuppstid, "post", tCmtPost.p_uid);
        }
    }

    console.log("jshp_ads_showUpdtsFeed: " + tUdtsStr);

  if(tHasSlider == "yes") {
    console.log("jshp_ads_showUpdtsFeed.currSwpCnfgArr: " + JSON.stringify(currSwpCnfgArr));
    JSSHOP.ads.loadNuSwiperArr(currSwpCnfgArr);

   //  JSSHOP.ads.loadNuSwiperArr(currSwpCnfgArr);
} // end of if tHasSlider


}
// Further improved Updates Feed with privacy logic
JSSHOP.ads.doNurUpdatesFeed = function(tUFCnfObj) {
    let tuplmt = 10;
    let tuptype = "noQvalue";
    let tupuid = 0;
    let tupcb = "donada";
    let tuppstid = 0;
    let tQstr = "";
    let langWhere = "(psts.p_lang = '" + usrlang + "' or psts.p_lang = '" + deflang + "')";
    let includeOtherLang = true;
    let quidVal = quid || 0;
    let privacyWhere = "";
    if (quidVal && quidVal != 0) {
        privacyWhere = "((psts.p_privacy = 'public' or psts.p_privacy = 'members') or (psts.p_privacy = 'private' and psts.p_uid = " + quidVal + "))";
    } else {
        privacyWhere = "(psts.p_privacy = 'public')";
    }
    if (tUFCnfObj.uppstid) {
        tuppstid = tUFCnfObj.uppstid;
        tQstr += "select psts.*, u.u_icon, u.u_fullname from qposts psts, quser u where psts._id > 0 and psts.p_uid = u._id and psts._id = " + tuppstid;
    } else {
        tQstr += "select psts.*, u.u_icon, u.u_fullname from qposts psts, quser u where psts._id > 0 and psts.p_rtype = '5' and psts.p_uid = u._id and (" + langWhere;
        if (includeOtherLang) {
            tQstr += " or (psts.p_lang != '" + usrlang + "' and psts.p_lang != '" + deflang + "')";
        }
        tQstr += ") and " + privacyWhere;
        if (tUFCnfObj.uptype) {
            tuptype = tUFCnfObj.uptype;
            tQstr += " and psts.p_type = '" + tuptype + "'";
        }
        if (tUFCnfObj.upuid) {
            tupuid = tUFCnfObj.upuid;
            tQstr += " and psts.p_uid = " + tUFCnfObj.upuid;
        }
        if (tUFCnfObj.upppage) {
            tppgtype = tUFCnfObj.upppage;
            tQstr += " and psts.p_ppage =  '" + tUFCnfObj.upppage + "'";
        }
        tQstr += " and psts.p_rtype = '5'";
        tQstr += " order by case when psts.p_lang = '" + usrlang + "' then 1 when psts.p_lang = '" + deflang + "' then 2 else 3 end, psts._id desc ";
        if (tUFCnfObj.uplmt) {
            tuplmt = tUFCnfObj.uplmt;
            tQstr += " limit " + tuplmt;
        }
    }
    if (tUFCnfObj.upcb) {
        tupcb = tUFCnfObj.upcb;
    }
    console.log("doNurUpdatesFeed.tQstr: " + tQstr);
    doQComm(tQstr, null, tupcb);
};

// Improved Updates Feed prioritizing user/default language but including others if needed
JSSHOP.ads.doNuUpdatesFeed = function(tUFCnfObj) {
    let tuplmt = 10;
    let tuptype = "noQvalue";
    let tupuid = 0;
    let tupcb = "donada";
    let tuppstid = 0;
    let tQstr = "";
    let langWhere = "(psts.p_lang = '" + usrlang + "' or psts.p_lang = '" + deflang + "')";
    let includeOtherLang = true;
    if (tUFCnfObj.uppstid) {
        tuppstid = tUFCnfObj.uppstid;
        tQstr += "select psts.*, u.u_icon, u.u_fullname from qposts psts, quser u where psts._id > 0 and psts.p_uid = u._id and psts._id = " + tuppstid;
        includeOtherLang = false;
    } else {
        tQstr += "select psts.*, u.u_icon, u.u_fullname from qposts psts, quser u where psts._id > 0 and psts.p_rtype = '5' and psts.p_uid = u._id and (" + langWhere;
        if (includeOtherLang) {
            tQstr += " or (psts.p_lang != '" + usrlang + "' and psts.p_lang != '" + deflang + "')";
        }
        tQstr += ")";
        if (tUFCnfObj.uptype) {
            tuptype = tUFCnfObj.uptype;
            tQstr += " and psts.p_type = '" + tuptype + "'";
        }
        if (tUFCnfObj.upuid) {
            tupuid = tUFCnfObj.upuid;
            tQstr += " and psts.p_uid = " + tUFCnfObj.upuid;
        }
        if (tUFCnfObj.upppage) {
            tppgtype = tUFCnfObj.upppage;
            tQstr += " and psts.p_ppage =  '" + tUFCnfObj.upppage + "'";
        }
        tQstr += " and psts.p_rtype = '5'";
        tQstr += " order by case when psts.p_lang = '" + usrlang + "' then 1 when psts.p_lang = '" + deflang + "' then 2 else 3 end, psts._id desc ";
        if (tUFCnfObj.uplmt) {
            tuplmt = tUFCnfObj.uplmt;
            tQstr += " limit " + tuplmt;
        }
    }
    if (tUFCnfObj.upcb) {
        tupcb = tUFCnfObj.upcb;
    }
    console.log("doNuUpdatesFeed.tQstr: " + tQstr);
    doQComm(tQstr, null, tupcb);
};

JSSHOP.ads.doUpdatesFeed = function(tUFCnfObj) {
    tuplmt = 10;
    tuptype = "noQvalue";
    tupuid = 0;
    tupcb = "donada";
    tuppstid = 0;
    tQstr = "";

    if(tUFCnfObj.uppstid) {
        tuppstid = tUFCnfObj.uppstid;
        tQstr += "select psts.*, u.u_icon, u.u_fullname from qposts psts, quser u where psts._id > 0 and psts.p_uid = u._id and psts._id = " + tuppstid;
    } else {

    tQstr += "select psts.*, u.u_icon, u.u_fullname from qposts psts, quser u where psts._id > 0 and psts.p_rtype = '5' and psts.p_uid = u._id and (psts.p_lang = '" + usrlang + "' or psts.p_lang = '" + deflang + "')";
    // newQstr = "select p.*, u.u_icon, u.u_fullname from qposts p, quser u where p._id > 0 and p.p_uid = u._id limit 20";
    if(tUFCnfObj.uptype) {
        tuptype = tUFCnfObj.uptype;
        tQstr += " and psts.p_type = '" + tuptype + "'";
     }
    if(tUFCnfObj.upuid) {
        tupuid = tUFCnfObj.upuid;
        tQstr += " and psts.p_uid = " + tUFCnfObj.upuid;
    }
        if(tUFCnfObj.upppage) {
        tppgtype = tUFCnfObj.upppage;
        tQstr += " and psts.p_ppage =  '" +  tUFCnfObj.upppage + "'";
    }
    tQstr += " and psts.p_rtype = '5'";

tQstr += " order by case when psts.p_lang = '" + usrlang + "' then 1 else 2 end, psts._id desc ";
    // tQstr += " order by psts._id desc";
    if(tUFCnfObj.uplmt) {
        tuplmt = tUFCnfObj.uplmt;
        tQstr += " limit " + tuplmt;
    }


    } // end of else
    if(tUFCnfObj.upcb) {
        tupcb = tUFCnfObj.upcb;
    }
    console.log("doUpdatesFeed.tQstr: " + tQstr);
    doQComm(tQstr, null, tupcb);
};
function postInitWork()
{
  var editor = tinyMCE.getInstanceById('taDemoEdtr');
  editor.getBody().style.backgroundColor = "#FFFF66";
}


JSSHOP.ads.getTinyTransFileStr = function() {
    switch(usrlang) {
        case "en_us":
            tTnyTransFileStr = "en_US";
        break;
        case "spa_spa":
            tTnyTransFileStr = "es_ES";
        break;
        case "fr_fr":
            tTnyTransFileStr = "fr_FR";
        break;
        case "pt_pt":
            tTnyTransFileStr = "pt_PT";
        break;
        default:
            tTnyTransFileStr = "en_US";
        break;
    }
    return tTnyTransFileStr;
};


JSSHOP.ads.intDemoEditor = function() {

    // width is current viewport width
    var ewidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    // set height to a 1.91:1 ratio based on the width
    var eheight = Math.round(ewidth / 1.91);
    var tQRimgSTr = doQRimgSrcStr(currWebHome + "index.html?pid=aa-show-user&tuid=" + quid, 200);
    tDemoMCEobj = {

        selector: "textarea.inpDemoEdtr",
        theme: 'modern',
        statusbar: true,
        menubar: true,
        branding: false,
        // add custom Preview button to the toolbar
        visual: false,
        resize: true,
        height: 500,
     // make scroll bars always visible
       content_style: "body {overflow-y: scroll !important;}",
        plugins: [
            'advlist autolink lists link image charmap print preview hr anchor pagebreak',
            'searchreplace wordcount visualblocks visualchars code fullscreen',
            'insertdatetime media nonbreaking save table contextmenu directionality',
            'emoticons template paste textcolor colorpicker textpattern textshadow imagetools code bgcolorpicker mediapop flyerlayout flyersmodal'
        ],
        toolbar1: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image table',
        toolbar2: 'print preview media | forecolor backcolor emoticons imagetools fontsizeselect textpattern | fontselect | code | template | fullscreen | flyersmodal | flyerlayout | bgcolorpicker | mediapop | textshadow',
        image_advtab: true,
        templates: [
            { title: 'QRCode', content: tQRimgSTr },
            // create some templates for property listings and user info
            { title: 'Seller Info', content: JSSHOP.ads.getEditorUsrBoxStr("nada") },
            // create some balloons for property features
            { title: 'Feature 1', content: '<div style="background-color:#fff0;border:1px solid #cccccc;padding:10px;border-radius:10px;box-shadow:2px 2px 5px rgba(0,0,0,0.3);width:200px;text-align:center;"><h3>Feature 1</h3><p>Description of feature 1.</p></div>' },
            { title: 'Feature 2', content: '<div style="background-color:#fff0;border:1px solid #cccccc;padding:10px;border-radius:10px;box-shadow:2px 2px 5px rgba(0,0,0,0.3);width:200px;text-align:center;"><h3>Feature 2</h3><p>Description of feature 2.</p></div>' },
            { title: 'Feature 3', content: '<div style="background-color:#fff0;border:1px solid #cccccc;padding:10px;border-radius:10px;box-shadow:2px 2px 5px rgba(0,0,0,0.3);width:200px;text-align:center;"><h3>Feature 3</h3><p>Description of feature 3.</p></div>' }

        ],
        content_css: [
            'css/x_dev.css','css/bootstrap.min.css','css/font-awesome.min.css','css/primer.css'
        ]


        // ads custom fumction to preview the content
        // setup: function (editor) {
        //     editor.addButton('preview', {
        //         text: 'Preview',
        //         icon: false,
        //         onclick: function () {
        //             // Open window
        //             editor.windowManager.open({
        //                 title: 'Preview',
        //                 body: [
        //                     { type: 'textbox', name: 'title', label: 'Title' },
        //                     { type: 'container', name: 'content', label: 'Content', html: editor.getContent() }
        //                 ],
        //                 onsubmit: function (e) {
        //                     // Insert content when the window form is submitted
        //                     editor.insertContent('Title: ' + e.data.title);
        //                 }
        //             });
        //         }
        //     });
        // }

    };


    if(usrlang == "en_us") {
    tinymce.init(tDemoMCEobj);
    } else {
        tTinyTransFileStr = JSSHOP.ads.getTinyTransFileStr();
        tDemoMCEobj["language"] = tTinyTransFileStr;
        tDemoMCEobj["language_url"] = "js/tinymce/langs/" + tTinyTransFileStr + ".js";
        tinymce.init(tDemoMCEobj);
    }



    editor = tinymce.activeEditor;
    /*
    editor.addButton('preview', {
        text: 'Previeeeeew',
        icon: false,
        onclick: function () {
            // Open window
            editor.windowManager.open({
                title: 'Preview',
                body: [
                    { type: 'textbox', name: 'title', label: 'Title' },
                    { type: 'container', name: 'content', label: 'Content', html: editor.getContent() }
                ],
                onsubmit: function (e) {
                    // Insert content when the window form is submitted
                    editor.insertContent('Title: ' + e.data.title);
                },
                setup: function (editor) {
                    this.setValue('Title');
                }

            })
        }
    });

    */
tinymce.PluginManager.add('mediapop', function (editor, url) {
    // Add toolbar button
    editor.addButton('mediapop', {
        text: stxt[664], // Images
        icon: false,
        onclick: openMediaPickerDialog
    });
    // Add menu item
    editor.addMenuItem('mediapop', {
        text: stxt[664], // Images
        icon: false,
        onclick: openMediaPickerDialog
    });
});

tinymce.PluginManager.add('bgcolorpicker', function (editor, url) {


    // Add toolbar button
    editor.addButton('bgcolorpicker', {
        text: stxt[665], // Background Color
        icon: false,
        onclick: openBgColorPickerDialog
    });
    // Add menu item
    editor.addMenuItem('bgcolorpicker', {
        text: stxt[665], // Background Color
        icon: false,
        onclick: openBgColorPickerDialog
    });
});
tinymce.PluginManager.add('textshadow', function(editor, url) {
    editor.addButton('textshadow', {
        text: stxt[663], // Colors
        onclick: function() {
            openTextShadowDialog();
        }
    });
    editor.addMenuItem('textshadow', {
        text: stxt[663], // Colors
        onclick: function() {
            openTextShadowDialog();
        }
    });
});
tinymce.PluginManager.add('flyerlayout', function(editor, url) {
    editor.addButton('flyerlayout', {
        text: stxt[666], // Flyer Layouts
        onclick: function() {
            openFlyerLayoutDialog();
        }
    });
    editor.addMenuItem('flyerlayout', {
        text: stxt[666], // Flyer Layouts
        onclick: function() {
            openFlyerLayoutDialog();
        }
    });
});


// add flyersmodal plugin
tinymce.PluginManager.add('flyersmodal', function(editor, url) {
    // Add toolbar button
    editor.addButton('flyersmodal', {
        text: 'Flyers',
        icon: false,
        onclick: openFlyersModalDialog
    });
    // Add menu item
    editor.addMenuItem('flyersmodal', {
        text: 'Flyers',
        icon: false,
        onclick: openFlyersModalDialog
    });
});


};


// Helper function to find the closest parent with class 'gallery-item'
function findClosestGalleryItem(node, editor) {
    while (node && node !== editor.getBody()) {
        if (node.classList && node.classList.contains('gallery-item')) {
            return node;
        }
        node = node.parentNode;
    }
    return null;
}

function getEdtrUsrMediaStr(tGUMa, tGUMb, tGUMc) {
    try {
        currQUsrMediaArr = [];
        if (tGUMb && tGUMb.indexOf("_id") != -1) {
            var tAiretArr = JSON.parse(tGUMb);
            currQUsrMediaArr = tAiretArr;
        }
        var tstr = "";
        var len = currQUsrMediaArr.length;
        for (var iint = 0; iint < len; iint++) {
            var amprop = currQUsrMediaArr[iint];
            var imgSrc = "images/user/" + amprop.m_file_thumb;
            var fullImgSrc = "images/user/" + amprop.m_file;
            var title = amprop.m_title || '';
            tstr += '<div style="display:inline-block;margin:6px;text-align:center;border:1px solid #ddd;padding:5px;border-radius:4px;background:#f9f9f9;cursor:pointer;" onclick="setMdaBgImage(\'' + fullImgSrc + '\', document.getElementById(\'mp_set_bg\').checked, document.getElementById(\'mp_rounded\').checked);JSSHOP.ui.closeLbox();">';
            tstr += '<img src="' + imgSrc + '" style="width:90px;height:70px;object-fit:cover;border-radius:6px;" />';
            tstr += '<div style="font-size:11px;max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:5px;">' + title + '</div></div>';
        }
        // Optionally add default image, but probably not needed for editor
        document.getElementById("mp_tab_your_images_content").innerHTML = tstr;
    } catch (e) {
        console.log("getEdtrUsrMediaStr: " + e);
    }
}

function setFlyrLytVal(tFLVa, tFLVb, tFLVc) {
    console.log("setFlyrLytVal: " + tFLVa + ", " + tFLVb + ", " + tFLVc);
    // inpImgPstLayout.value = tFLVa;
}
function openFlyerLayoutDialog() {
    // Create modal HTML with tabs
    var modalId = 'flyerLayoutModal';
    var modalHtml = `
        <div class="modal fade" id="${modalId}" tabindex="-1" aria-labelledby="${modalId}Label" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="${modalId}Label">Flyer Layout</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <ul class="nav nav-tabs" id="flyerLayoutTabs" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="properties-tab" data-bs-toggle="tab" data-bs-target="#properties" type="button" role="tab" aria-controls="properties" aria-selected="true">Properties</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="layout-tab" data-bs-toggle="tab" data-bs-target="#layout" type="button" role="tab" aria-controls="layout" aria-selected="false">Layout</button>
                            </li>
                        </ul>
                        <div class="tab-content" id="flyerLayoutTabContent">
                            <div class="tab-pane fade show active" id="properties" role="tabpanel" aria-labelledby="properties-tab">
                                <!-- Properties content -->
                            </div>
                            <div class="tab-pane fade" id="layout" role="tabpanel" aria-labelledby="layout-tab">
                                <!-- Layout content -->
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <span style="" class="cls_button cls_button-medium bkgdClrGrey txtClrHdr" onclick="bootstrap.Modal.getInstance(document.getElementById('flyerLayoutModal')).hide();">Cancel</span>
                        <span style="" class="cls_button cls_button-medium bkgdClrHdr txtClrWhite" onclick="JSSHOP.ads.trnsltImgPstObj(); bootstrap.Modal.getInstance(document.getElementById('flyerLayoutModal')).hide();">OK</span>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Remove existing modal if present
    var existingModal = document.getElementById(modalId);
    if (existingModal) {
        existingModal.remove();
    }

    // Insert modal into DOM
    document.body.insertAdjacentHTML('beforeend', modalHtml);

    // Get layout dropdown
    var tDDImgPstLyt = {};
    tDDImgPstLyt["ddtype"] = "noQvalue";
    tDDImgPstLyt["fld"] = "inpImgPstLayout";
    tDDImgPstLyt["lbl"] = "Image Layout";
    tDDImgPstLyt["val"] = inpImgPstLayout.value;
    tDDImgPstLyt["kvpObj"] = {"grid": "Grid", "list": "List", "masonry": "Masonry"};
    tDDImgPstLyt["cb"] = "setFlyrLytVal";
    tDDImgPstLyt["fldcls"] = "nav-link dropdown-toggle txtSmall";
    tDDImgPstLyt["lblcls"] = "txtSmall";
    tDDImgPstLyt["valcls"] = "txtSmall";
    tDDImgPstLyt["icncls"] = "nav-material-icons txtBold txtClrGrey";
    tDDImgPstLyt["horvert"] = "vertical";
    tDDImgPstLyt["icn"] = "noQvalue";
    tDDImgPstLyt["kvIcnsObj"] = {};
    tDDImgPstLyt["kvIcnsObj"]["Grid"] = "&#xe5cd;";
    tDDImgPstLyt["kvIcnsObj"]["List"] = "&#xe5cd;";
    tDDImgPstLyt["kvIcnsObj"]["Masonry"] = "&#xe5cd;";
    var layoutDropdown = JSSHOP.ui.getNuBSdropDstr(tDDImgPstLyt);

    // Set layout tab content
    document.getElementById('layout').innerHTML = layoutDropdown;

    // Handle properties tab
    var propertiesTab = document.getElementById('properties');
    if (currPstsPrpsArr && currPstsPrpsArr.length > 0) {
        // Data already loaded, set content
        propertiesTab.innerHTML = JSSHOP.ui.getPickerStr("props", false);
    } else {
        // Load data
        propertiesTab.innerHTML = '<p>Loading properties...</p>';
        var newSCPArrQstr = "select p.*, u.u_icon, u.u_fullname, pd.pd_prptitle, pd.pd_prpdesc from property p, quser u, propdescs pd where p._id > 0 and p.uid = u._id and pd.pd_prpid = p._id and (pd.pd_prptlng = '" + usrlang + "' or pd.pd_prptlng = '" + deflang + "') order by rand() limit 20";
        doQComm(newSCPArrQstr, null, "setCurrPrpsArrForModal");
    }

    // Show modal
    var modal = new bootstrap.Modal(document.getElementById(modalId));
    modal.show();
}

function setFlyerStyle(styleName) {
    console.log('Selected flyer style: ' + styleName);
    var flyerStyles = [
        { name: 'Default', background: '#ffffff', class: '' },
        { name: 'Thought', class: 'thought-bubble' },
        { name: 'Speech Bubble 1', class: 'speech-bubble1' },
        { name: 'Speech Bubble 2', class: 'speech-bubble2' },
        { name: 'Speech Bubble 3', class: 'speech-bubble3' },
        { name: 'Jagged Bubble', class: 'jagged-bubble' }
    ];
    var flyerDiv = document.getElementById('dvTMCdemo');
    if (flyerDiv) {
        // Find the style object
        var selectedStyle = flyerStyles.find(function(style) {
            return style.name === styleName;
        });
        if (selectedStyle) {
            // Remove existing bubble classes
            flyerDiv.className = flyerDiv.className.replace(/\b(thought-bubble|speech-bubble\d*|jagged-bubble)\b/g, '').trim();
            // Add the new class if any
            if (selectedStyle.class) {
                flyerDiv.classList.add(selectedStyle.class);
            }
            // Set background if specified
            if (selectedStyle.background) {
                flyerDiv.style.background = selectedStyle.background;
            } else {
                flyerDiv.style.background = '';
            }
        }
    }
}


function openMediaPickerDialog() {
      var amppropArr = [];
    try {
        if (window.currPstsPrpsArr && window.currPstsPrpsArr.length) {
            amppropArr = window.currPstsPrpsArr;
        }
    } catch (e) { }

    // Tab buttons using Bootstrap
    var tabHtml = `
        <ul class="nav nav-tabs" id="mediaPickerTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="mp_tab_image" data-bs-toggle="tab" data-bs-target="#mp_tab_image_content" type="button" role="tab" aria-controls="mp_tab_image_content" aria-selected="true">` + stxt[636] + `</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="mp_tab_your_images" data-bs-toggle="tab" data-bs-target="#mp_tab_your_images_content" type="button" role="tab" aria-controls="mp_tab_your_images_content" aria-selected="false">` + stxt[637] + `</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="mp_tab_demo" data-bs-toggle="tab" data-bs-target="#mp_tab_demo_content" type="button" role="tab" aria-controls="mp_tab_demo_content" aria-selected="false">` + stxt[638] + `</button>
            </li>
        </ul>
        <div class="tab-content" id="mediaPickerTabContent">
    `;

    // Images tab content
    var imagesHtml = '<div class="tab-pane fade show active" id="mp_tab_image_content" role="tabpanel" aria-labelledby="mp_tab_image" style="min-height:350px;max-height:400px;overflow:auto;">';


    if (window.currPrpMediaArr && window.currPrpMediaArr.length > 0) {
        for (var i = 0; i < currPrpMediaArr.length; i++) {
            var amprop = currPrpMediaArr[i];
            var imgSrc, fullImgSrc, title;
            switch(amprop.m_catid) {
                case "5":
                    imgSrc = "images/property/m_thumb" + amprop.m_file;
                    fullImgSrc = "images/property/" + amprop.m_file;
                    break;
                case "20":
                case "25":
                case "30":
                    imgSrc = "images/tmpi/" + amprop.m_vala + ".jpg";
                    fullImgSrc = imgSrc;
                    break;
                default:
                    imgSrc = 'images/misc/example_thumb.png';
                    fullImgSrc = imgSrc;
            }
            title = amprop.m_title || '';
            imagesHtml += '<div style="display:inline-block;margin:6px;text-align:center;border:1px solid #ddd;padding:5px;border-radius:4px;background:#f9f9f9;cursor:pointer;" onclick="setMdaBgImage(\'' + fullImgSrc + '\', document.getElementById(\'mp_set_bg\').checked, document.getElementById(\'mp_rounded\').checked);JSSHOP.ui.closeLbox();">';
            imagesHtml += '<img src="' + imgSrc + '" style="width:90px;height:70px;object-fit:cover;border-radius:6px;" />';
            imagesHtml += '<div style="font-size:11px;max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:5px;">' + title + '</div></div>';
        }
                imagesHtml += '<hr style="margin:10px 0;">';

    }


    for (var i = 0; i < amppropArr.length; i++) {
        var amprop = amppropArr[i];
        var imgSrc = (amprop.pimage && amprop.pimage !== "noQvalue") ? 'images/property/s_thumb' + amprop.pimage : "images/misc/example_thumb.png";
        var title = amprop.ptitle ? LZString.decompressFromEncodedURIComponent(decodeURIComponent(amprop.pd_prptitle || amprop.ptitle)) : '';
        imagesHtml += '<div style="display:inline-block;margin:6px;text-align:center;border:1px solid #ddd;padding:5px;border-radius:4px;background:#f9f9f9;cursor:pointer;" onclick="setMdaBgImage(\'' + imgSrc.replace('s_thumb', '') + '\', document.getElementById(\'mp_set_bg\').checked, document.getElementById(\'mp_rounded\').checked);JSSHOP.ui.closeLbox();">';
        imagesHtml += '<img src="' + imgSrc + '" style="width:90px;height:70px;object-fit:cover;border-radius:6px;" />';
        imagesHtml += '<div style="font-size:11px;max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:5px;">' + title + '</div></div>';
        }


    imagesHtml += '<p style="margin-top:10px;font-size:12px;color:#666;">' + stxt[654] + '</p></div>';

    // Demo tab content
    var demoHtml = '<div class="tab-pane fade" id="mp_tab_demo_content" role="tabpanel" aria-labelledby="mp_tab_demo">DEMO<p style="margin-top:10px;font-size:12px;color:#666;">' + stxt[656] + '</p></div>';

    // Your Images tab content
    var yourImagesHtml = '<div class="tab-pane fade" id="mp_tab_your_images_content" role="tabpanel" aria-labelledby="mp_tab_your_images" style="min-height:350px;max-height:400px;overflow:auto;">Loading...<p style="margin-top:10px;font-size:12px;color:#666;">' + stxt[655] + '</p></div>';

    // Full dialog HTML
    tdialogHtml = tabHtml + imagesHtml + demoHtml + yourImagesHtml + '</div>';
    // wrap tdialogHtml in a div with min height 80% of viewport height
    var dialogHtml = '<div style="min-height:80vh;max-height:90vh;overflow:auto;">' + '<div style="position: sticky; top: 0; background: white; z-index: 1; padding: 5px; border-bottom: 1px solid #ddd;"><input type="checkbox" id="mp_set_bg"> <label for="mp_set_bg">' + stxt[639] + '</label> <input type="checkbox" id="mp_rounded"> <label for="mp_rounded">' + stxt[640] + '</label></div>' + tdialogHtml + '</div>';
    // Add event listeners after rendering
    setTimeout(function() {
        // Initialize Coloris if available
        if (window.Coloris) {
            Coloris({
                el: '[data-coloris]',
                parent: '#nurModal',
                closeButton: true,
                closeLabel: 'Close',
                swatches: ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51']
            });
            ensureColorisManualCloseControl();
        }

        // Load Your Images tab content
        if (window.currQUsrMediaArr && window.currQUsrMediaArr.length > 0) {
            getEdtrUsrMediaStr(null, JSON.stringify(currQUsrMediaArr), null);
        } else {
            var tmpFobj = {};
            tmpFobj["ws"] = "where m_uid=? and m_pid=? and m_rtype=?";
            tmpFobj["wa"] = [quid, quid, 5];
            tmpFobj["o"] = "m_vala desc";
            var oi = getNuDBFnvp("qmedia", 5, null, tmpFobj);
            doQComm(oi["rq"], null, "getEdtrUsrMediaStr");
        }
    }, 800);

    JSSHOP.ui.popNurFillLbox(dialogHtml, "" , "Images");

}

function ensureColorisManualCloseControl() {
    try {
        var pickerEl = document.getElementById("clr-picker");
        if (!pickerEl) {
            return;
        }

        var fallbackCloseBtn = pickerEl.querySelector(".incasa-coloris-close-btn");
        if (!fallbackCloseBtn) {
            fallbackCloseBtn = document.createElement("button");
            fallbackCloseBtn.type = "button";
            fallbackCloseBtn.className = "incasa-coloris-close-btn btn btn-light btn-sm";
            fallbackCloseBtn.textContent = "Close";
            fallbackCloseBtn.style.position = "absolute";
            fallbackCloseBtn.style.top = "6px";
            fallbackCloseBtn.style.right = "6px";
            fallbackCloseBtn.style.zIndex = "20";
            fallbackCloseBtn.style.cursor = "pointer";
            pickerEl.appendChild(fallbackCloseBtn);
        }

        fallbackCloseBtn.onclick = function(ev) {
            try {
                if (ev) {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                var nativeCloseBtn = document.getElementById("clr-close");
                if (nativeCloseBtn) {
                    nativeCloseBtn.click();
                } else {
                    pickerEl.classList.remove("clr-open");
                }
            } catch (eColorisCloseBtn) { }
        };

        if (pickerEl.getAttribute("data-incasa-preview-close-bound") !== "yes") {
            pickerEl.setAttribute("data-incasa-preview-close-bound", "yes");
            pickerEl.addEventListener("click", function(ev) {
                try {
                    if (!pickerEl.classList.contains("clr-open")) {
                        return;
                    }
                    var trg = ev ? ev.target : null;
                    if (!trg || !trg.closest) {
                        return;
                    }
                    var previewHit = trg.closest(".clr-preview");
                    if (!previewHit) {
                        return;
                    }
                    var nativeCloseBtn = document.getElementById("clr-close");
                    if (nativeCloseBtn) {
                        nativeCloseBtn.click();
                    } else {
                        pickerEl.classList.remove("clr-open");
                    }
                    ev.preventDefault();
                    ev.stopPropagation();
                } catch (eColorisPreviewClose) { }
            }, true);
        }
    } catch (eColorisManual) { }
}

function openBgColorPickerDialog() {
    var propArr = [];
    try {
        if (window.currPstsPrpsArr && window.currPstsPrpsArr.length) {
            propArr = window.currPstsPrpsArr;
        }
    } catch (e) { }

    var grad1 = '#2196f3', grad2 = '#e3f2fd';
    var uniqueId = Date.now(); // Unique ID to avoid conflicts

    // Tab buttons using Bootstrap
    var tabHtml = `
        <ul class="nav nav-tabs" id="bgColorPickerTab_${uniqueId}" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="bgc_tab_style_${uniqueId}" data-bs-toggle="tab" data-bs-target="#bgc_tab_style_content_${uniqueId}" type="button" role="tab" aria-controls="bgc_tab_style_content_${uniqueId}" aria-selected="true">Style</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="bgc_tab_gradient_${uniqueId}" data-bs-toggle="tab" data-bs-target="#bgc_tab_gradient_content_${uniqueId}" type="button" role="tab" aria-controls="bgc_tab_gradient_content_${uniqueId}" aria-selected="false">` + stxt[641] + `</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="bgc_tab_solid_${uniqueId}" data-bs-toggle="tab" data-bs-target="#bgc_tab_solid_content_${uniqueId}" type="button" role="tab" aria-controls="bgc_tab_solid_content_${uniqueId}" aria-selected="false">` + stxt[642] + `</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="bgc_tab_image_${uniqueId}" data-bs-toggle="tab" data-bs-target="#bgc_tab_image_content_${uniqueId}" type="button" role="tab" aria-controls="bgc_tab_image_content_${uniqueId}" aria-selected="false">` + stxt[636] + `</button>
            </li>
        </ul>
        <div class="tab-content" id="bgColorPickerTabContent_${uniqueId}">
    `;

    // Style tab content
    var styleHtml = `<style>
        .thought-bubble {
            background: linear-gradient(135deg, #e3f2fd, #bbdefb);
            border-radius: 20px;
            padding: 10px;
            position: relative;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            border: none;
        }
        .thought-tail1 {
            position: absolute;
            bottom: -10px;
            left: 25px;
            width: 16px;
            height: 16px;
            background: linear-gradient(135deg, #e3f2fd, #bbdefb);
            border-radius: 50%;
            z-index: 1;
        }
        .thought-tail2 {
            position: absolute;
            bottom: -16px;
            left: 35px;
            width: 12px;
            height: 12px;
            background: linear-gradient(135deg, #e3f2fd, #bbdefb);
            border-radius: 50%;
            z-index: 1;
        }
        .thought-tail3 {
            position: absolute;
            bottom: -20px;
            left: 42px;
            width: 8px;
            height: 8px;
            background: linear-gradient(135deg, #e3f2fd, #bbdefb);
            border-radius: 50%;
            z-index: 1;
        }
        .speech-bubble1 {
            background: #f9f9f9;
            border-radius: 20px;
            padding: 10px;
            position: relative;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            border: none;
        }
        .speech-bubble1::before {
            content: '';
            position: absolute;
            bottom: -20px;
            left: 20px;
            width: 0;
            height: 0;
            border-left: 20px solid transparent;
            border-right: 20px solid transparent;
            border-top: 20px solid #f9f9f9;
            z-index: 1;
        }
        .speech-bubble2 {
            background: #fff3cd;
            border-radius: 15px;
            padding: 10px;
            position: relative;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
            border: none;
        }
        .speech-bubble2::before {
            content: '';
            position: absolute;
            bottom: -16px;
            right: 20px;
            width: 0;
            height: 0;
            border-left: 16px solid transparent;
            border-right: 16px solid transparent;
            border-top: 16px solid #fff3cd;
            z-index: 1;
        }
        .speech-bubble3 {
            background: #d1ecf1;
            border-radius: 25px;
            padding: 10px;
            position: relative;
            box-shadow: 0 6px 12px rgba(0,0,0,0.15);
            border: none;
        }
        .speech-bubble3::before {
            content: '';
            position: absolute;
            top: -20px;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 0;
            border-left: 20px solid transparent;
            border-right: 20px solid transparent;
            border-bottom: 20px solid #d1ecf1;
            z-index: 1;
        }
    </style>
        <div class="tab-pane fade show active" id="bgc_tab_style_content_${uniqueId}" role="tabpanel" aria-labelledby="bgc_tab_style_${uniqueId}">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px; padding: 10px;">
    `;
    var styles = [
        { name: 'Classic', type: 'gradient', value: 'linear-gradient(to right, #007bff, #ffffff)' },
        { name: 'Modern', type: 'gradient', value: 'linear-gradient(to right, #00bcd4, #2196f3, #3f51b5)' },
        { name: 'Vibrant', type: 'gradient', value: 'linear-gradient(to right, #ff4081, #ff1744, #ffeb3b)' },
        { name: 'Thought', type: 'balloon', value: 'thought' },
        { name: 'Speech Bubble 1', type: 'balloon', value: 'speech1' },
        { name: 'Speech Bubble 2', type: 'balloon', value: 'speech2' },
        { name: 'Speech Bubble 3', type: 'balloon', value: 'speech3' }
    ];
    styles.forEach(function(style) {
        var classAttr = style.type === 'balloon' ? ' class="' + (style.value === 'thought' ? 'thought-bubble' : 'speech-bubble' + (style.value === 'speech1' ? '1' : style.value === 'speech2' ? '2' : '3')) + '"' : '';
        var textColor = style.type === 'gradient' ? 'color: white;' : 'color: #333;';
        var bgStyle = style.type === 'gradient' ? 'background: ' + style.value + ';' : '';
        var extraContent = '';
        if (style.type === 'balloon' && style.value === 'thought') {
            extraContent = '<div class="thought-tail1"></div><div class="thought-tail2"></div><div class="thought-tail3"></div>';
        }
        styleHtml += '<div onclick="setBgStyle(\'' + style.name + '\');JSSHOP.ui.closeLbox();" style="' + bgStyle + ' ' + textColor + ' height: 100px; display: flex; align-items: center; justify-content: center; cursor: pointer; font-weight: bold; text-shadow: ' + (style.type === 'gradient' ? '1px 1px 2px rgba(0,0,0,0.5);' : 'none;') + '"' + classAttr + '>' + extraContent + style.name + '</div>';
    });
    styleHtml += '</div></div>';

    // Gradient tab content
    var gradientHtml = `
        <div class="tab-pane fade" id="bgc_tab_gradient_content_${uniqueId}" role="tabpanel" aria-labelledby="bgc_tab_gradient_${uniqueId}">
            <label style="display:block;margin-bottom:5px;">Color 1: <input type="text" id="bgc_grad1_${uniqueId}" value="${grad1}" data-coloris style="margin-right:10px;width:100px;"></label>
            <label style="display:block;margin-bottom:5px;">Color 2: <input type="text" id="bgc_grad2_${uniqueId}" value="${grad2}" data-coloris style="width:100px;"></label>
            <div id="gradPreview_${uniqueId}" style="width:100%;height:40px;border-radius:8px;margin:10px 0;background:linear-gradient(135deg,${grad1},${grad2});border:1px solid #ddd;"></div>
            <div><input type="checkbox" id="bgc_grad_border_${uniqueId}"> <label for="bgc_grad_border_${uniqueId}">` + stxt[652] + `</label></div>
            <button type="button" id="bgc_apply_gradient_${uniqueId}" class="cls_button cls_button-medium bkgdClrHdr txtClrWhite">` + stxt[643] + `</button>
            <p style="margin-top:10px;font-size:12px;color:#666;">` + stxt[657] + `</p>
        </div>
    `;

    // Solid color tab content
    var solidHtml = `
        <div class="tab-pane fade" id="bgc_tab_solid_content_${uniqueId}" role="tabpanel" aria-labelledby="bgc_tab_solid_${uniqueId}">
            <label style="display:block;margin-bottom:5px;">Color: <input type="text" id="bgc_solid_${uniqueId}" value="#2196f3" data-coloris style="width:100px;"></label>
            <div id="solidPreview_${uniqueId}" style="width:100%;height:40px;border-radius:8px;margin:10px 0;background:#2196f3;border:1px solid #ddd;"></div>
            <div><input type="checkbox" id="bgc_solid_border_${uniqueId}"> <label for="bgc_solid_border_${uniqueId}">` + stxt[652] + `</label></div>
            <button type="button" id="bgc_apply_solid_${uniqueId}" class="cls_button cls_button-medium bkgdClrHdr txtClrWhite">` + stxt[644] + `</button>
            <p style="margin-top:10px;font-size:12px;color:#666;">` + stxt[658] + `</p>
        </div>
    `;

    // Images tab content
    var imagesHtml = `<div class="tab-pane fade" id="bgc_tab_image_content_${uniqueId}" role="tabpanel" aria-labelledby="bgc_tab_image_${uniqueId}" style="max-height:250px;overflow:auto;">`;

    if (window.currPrpMediaArr && window.currPrpMediaArr.length > 0) {
        for (var i = 0; i < currPrpMediaArr.length; i++) {
            var amprop = currPrpMediaArr[i];
            var imgSrc, fullImgSrc, title;
            switch(amprop.m_catid) {
                case "5":
                    imgSrc = "images/property/m_thumb" + amprop.m_file;
                    fullImgSrc = "images/property/" + amprop.m_file;
                    break;
                case "20":
                case "25":
                case "30":
                    imgSrc = "images/tmpi/" + amprop.m_vala + ".jpg";
                    fullImgSrc = imgSrc;
                    break;
                default:
                    imgSrc = 'images/misc/example_thumb.png';
                    fullImgSrc = imgSrc;
            }
            title = amprop.m_title || '';
            imagesHtml += '<div style="display:inline-block;margin:6px;text-align:center;border:1px solid #ddd;padding:5px;border-radius:4px;background:#f9f9f9;cursor:pointer;" onclick="setBgImage(\'' + fullImgSrc + '\');JSSHOP.ui.closeLbox();">';
            imagesHtml += '<img src="' + imgSrc + '" style="width:90px;height:70px;object-fit:cover;border-radius:6px;" />';
            imagesHtml += '<div style="font-size:11px;max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:5px;">' + title + '</div></div>';
        }
                imagesHtml += '<hr style="margin:10px 0;">';

    }

    for (var i = 0; i < propArr.length; i++) {
        var prop = propArr[i];
        var imgSrc = (prop.pimage && prop.pimage !== "noQvalue") ? 'images/property/s_thumb' + prop.pimage : "images/misc/example_thumb.png";
        var title = prop.ptitle ? LZString.decompressFromEncodedURIComponent(decodeURIComponent(prop.pd_prptitle || prop.ptitle)) : '';
        imagesHtml += '<div style="display:inline-block;margin:6px;text-align:center;border:1px solid #ddd;padding:5px;border-radius:4px;background:#f9f9f9;cursor:pointer;" onclick="setBgImage(\'' + imgSrc.replace('s_thumb', '') + '\');JSSHOP.ui.closeLbox();">';
        imagesHtml += '<img src="' + imgSrc + '" style="width:90px;height:70px;object-fit:cover;border-radius:6px;" />';
        imagesHtml += '<div style="font-size:11px;max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:5px;">' + title + '</div></div>';
    }
    imagesHtml += '<p style="margin-top:10px;font-size:12px;color:#666;">' + stxt[659] + '</p></div>';

    // Full dialog HTML
    var dialogHtml = tabHtml + styleHtml + gradientHtml + solidHtml + imagesHtml + '</div>';

    // Add event listeners after rendering
    setTimeout(function() {
        var grad1Input = document.getElementById(`bgc_grad1_${uniqueId}`);
        var grad2Input = document.getElementById(`bgc_grad2_${uniqueId}`);
        var gradPreview = document.getElementById(`gradPreview_${uniqueId}`);
        var solidInput = document.getElementById(`bgc_solid_${uniqueId}`);
        var solidPreview = document.getElementById(`solidPreview_${uniqueId}`);
        var applyBtn = document.getElementById(`bgc_apply_gradient_${uniqueId}`);
        var applySolidBtn = document.getElementById(`bgc_apply_solid_${uniqueId}`);

        function updatePreview() {
            grad1 = grad1Input.value;
            grad2 = grad2Input.value;
            gradPreview.style.background = 'linear-gradient(135deg,' + grad1 + ',' + grad2 + ')';
        }

        grad1Input.onchange = updatePreview;
        grad2Input.onchange = updatePreview;
        solidInput.onchange = function() {
            solidPreview.style.background = this.value;
        };

        applyBtn.onclick = function() {
            setBgGradient(grad1, grad2, document.getElementById(`bgc_grad_border_${uniqueId}`).checked);
            JSSHOP.ui.closeLbox();
        };
        applySolidBtn.onclick = function() {
            setBgSolidColor(solidInput.value, document.getElementById(`bgc_solid_border_${uniqueId}`).checked);
            JSSHOP.ui.closeLbox();
        };

        // Initialize Coloris if available
        if (window.Coloris) {
            Coloris({
                el: '[data-coloris]',
                parent: '#nurModal',
                closeButton: true,
                closeLabel: 'Close',
                swatches: ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51']
            });
            ensureColorisManualCloseControl();
        }
    }, 800);

    JSSHOP.ui.popAndFillLbox(dialogHtml);
}

// Function to set background gradient
function setBgGradient(color1, color2, isBorder = false) {
    console.log("setBgGradient.colors: " + color1 + ", " + color2 + ", isBorder: " + isBorder);
    var iframe = document.getElementById('taDemoEdtr_ifr');
    if (iframe && iframe.contentDocument) {
        var demoDiv = iframe.contentDocument.getElementById('dvTMCdemo');
        if (demoDiv) {
            if (isBorder) {
                demoDiv.style.borderImage = 'linear-gradient(135deg, ' + color1 + ', ' + color2 + ') 1';
                demoDiv.style.border = '5px solid transparent';
            } else {
                demoDiv.style.backgroundImage = 'none';
                demoDiv.style.background = 'linear-gradient(135deg, ' + color1 + ', ' + color2 + ')';
            }
        }
    }
}

// Function to set predefined style gradient
function setBgStyle(styleName) {
    var iframe = document.getElementById('taDemoEdtr_ifr');
    if (iframe && iframe.contentDocument) {
        var demoDiv = iframe.contentDocument.getElementById('dvTMCdemo');
        if (demoDiv) {
            // Clear previous styles
            demoDiv.style.clipPath = '';
            demoDiv.style.borderRadius = '';
            demoDiv.style.position = '';
            // Remove any tail elements
            var tails = demoDiv.querySelectorAll('.balloon-tail');
            tails.forEach(function(tail) { tail.remove(); });

            var styles = [
                { name: 'Classic', type: 'gradient', value: 'linear-gradient(to right, #007bff, #ffffff)' },
                { name: 'Modern', type: 'gradient', value: 'linear-gradient(to right, #00bcd4, #2196f3, #3f51b5)' },
                { name: 'Vibrant', type: 'gradient', value: 'linear-gradient(to right, #ff4081, #ff1744, #ffeb3b)' },
                { name: 'Thought', type: 'balloon', value: 'thought' },
                { name: 'Speech Bubble 1', type: 'balloon', value: 'speech1' },
                { name: 'Speech Bubble 2', type: 'balloon', value: 'speech2' },
                { name: 'Speech Bubble 3', type: 'balloon', value: 'speech3' }
            ];
            var style = styles.find(function(s) { return s.name === styleName; });
            if (style) {
                if (style.type === 'gradient') {
                    demoDiv.style.backgroundImage = 'none';
                    demoDiv.style.background = style.value;
                    demoDiv.style.border = 'none';
                    demoDiv.style.borderImage = 'none';
                } else if (style.type === 'balloon') {
                    // Clear background image and set background
                    demoDiv.style.backgroundImage = 'none';
                    demoDiv.style.border = 'none';
                    demoDiv.style.borderImage = 'none';
                    // Apply balloon styles inline
                    demoDiv.style.position = 'relative';
                    if (style.value === 'thought') {
                        demoDiv.style.background = 'linear-gradient(135deg, #e3f2fd, #bbdefb)';
                        demoDiv.style.clipPath = 'polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)';
                        demoDiv.style.borderRadius = '20px';
                        // Add tails
                        var tail1 = iframe.contentDocument.createElement('div');
                        tail1.className = 'balloon-tail';
                        tail1.style.position = 'absolute';
                        tail1.style.bottom = '-10px';
                        tail1.style.left = '20px';
                        tail1.style.width = '16px';
                        tail1.style.height = '16px';
                        tail1.style.background = 'linear-gradient(135deg, #e3f2fd, #bbdefb)';
                        tail1.style.borderRadius = '50%';
                        demoDiv.appendChild(tail1);

                        var tail2 = iframe.contentDocument.createElement('div');
                        tail2.className = 'balloon-tail';
                        tail2.style.position = 'absolute';
                        tail2.style.bottom = '-20px';
                        tail2.style.left = '10px';
                        tail2.style.width = '12px';
                        tail2.style.height = '12px';
                        tail2.style.background = 'linear-gradient(135deg, #e3f2fd, #bbdefb)';
                        tail2.style.borderRadius = '50%';
                        demoDiv.appendChild(tail2);

                        var tail3 = iframe.contentDocument.createElement('div');
                        tail3.className = 'balloon-tail';
                        tail3.style.position = 'absolute';
                        tail3.style.bottom = '-30px';
                        tail3.style.left = '0px';
                        tail3.style.width = '8px';
                        tail3.style.height = '8px';
                        tail3.style.background = 'linear-gradient(135deg, #e3f2fd, #bbdefb)';
                        tail3.style.borderRadius = '50%';
                        demoDiv.appendChild(tail3);
                    } else if (style.value === 'speech1') {
                        demoDiv.style.background = '#f9f9f9';
                        demoDiv.style.clipPath = 'polygon(0% 0%, 100% 0%, 100% 100%, 85% 100%, 75% 85%, 0% 85%)';
                        demoDiv.style.borderRadius = '20px';
                        // Add tail
                        var tail = iframe.contentDocument.createElement('div');
                        tail.className = 'balloon-tail';
                        tail.style.position = 'absolute';
                        tail.style.bottom = '15px';
                        tail.style.right = '-15px';
                        tail.style.width = '0';
                        tail.style.height = '0';
                        tail.style.borderTop = '15px solid transparent';
                        tail.style.borderBottom = '15px solid transparent';
                        tail.style.borderLeft = '15px solid #f9f9f9';
                        demoDiv.appendChild(tail);
                    } else if (style.value === 'speech2') {
                        demoDiv.style.background = '#fff3cd';
                        demoDiv.style.clipPath = 'polygon(0% 0%, 100% 0%, 100% 100%, 85% 100%, 75% 85%, 0% 85%)';
                        demoDiv.style.borderRadius = '15px';
                        // Add tail
                        var tail = iframe.contentDocument.createElement('div');
                        tail.className = 'balloon-tail';
                        tail.style.position = 'absolute';
                        tail.style.top = '50%';
                        tail.style.right = '-15px';
                        tail.style.transform = 'translateY(-50%)';
                        tail.style.width = '0';
                        tail.style.height = '0';
                        tail.style.borderTop = '15px solid transparent';
                        tail.style.borderBottom = '15px solid transparent';
                        tail.style.borderLeft = '15px solid #fff3cd';
                        demoDiv.appendChild(tail);
                    } else if (style.value === 'speech3') {
                        demoDiv.style.background = '#d1ecf1';
                        demoDiv.style.borderRadius = '25px';
                        // Add tail
                        var tail = iframe.contentDocument.createElement('div');
                        tail.className = 'balloon-tail';
                        tail.style.position = 'absolute';
                        tail.style.top = '-15px';
                        tail.style.left = '50%';
                        tail.style.transform = 'translateX(-50%)';
                        tail.style.width = '0';
                        tail.style.height = '0';
                        tail.style.borderLeft = '15px solid transparent';
                        tail.style.borderRight = '15px solid transparent';
                        tail.style.borderBottom = '15px solid #d1ecf1';
                        demoDiv.appendChild(tail);
                    }
                }
            }
        } else {
            console.error("Demo div not found in iframe.");
            // wrap the editor content in a div with id dvTMCdemo if it doesn't exist to ensure the function works
                var body = iframe.contentDocument.body;
                var wrapper = iframe.contentDocument.createElement('div');
                wrapper.id = 'dvTMCdemo';
                while (body.firstChild) {
                    wrapper.appendChild(body.firstChild);
                }
                body.appendChild(wrapper);
            }
    }
}

// Function to set background image
function setBgImage(imgSrc) {
    var iframe = document.getElementById('taDemoEdtr_ifr');
    if (iframe && iframe.contentDocument) {
        var demoDiv = iframe.contentDocument.getElementById('dvTMCdemo');
        if (demoDiv) {
            demoDiv.style.background = 'none';
            demoDiv.style.backgroundImage = 'url(' + imgSrc + ')';
            demoDiv.style.backgroundSize = 'cover';
            demoDiv.style.backgroundPosition = 'center';
            demoDiv.style.backgroundRepeat = 'no-repeat';
        }
    }
}

// Function to set solid color background or border
function setBgSolidColor(color, isBorder = false) {
    console.log("setBgSolidColor.color: " + color + ", isBorder: " + isBorder);
    var iframe = document.getElementById('taDemoEdtr_ifr');
    if (iframe && iframe.contentDocument) {
        var demoDiv = iframe.contentDocument.getElementById('dvTMCdemo');
        if (demoDiv) {
            if (isBorder) {
                demoDiv.style.borderColor = color;
                demoDiv.style.border = '5px solid ' + color;
            } else {
                demoDiv.style.backgroundColor = color;
                demoDiv.style.backgroundImage = 'none';
            }
        }
    }
}

// Function to set media background gradient
function setMdaBgGradient(color1, color2, isBorder = false) {
    console.log("setMdaBgGradient.colors: " + color1 + ", " + color2 + ", isBorder: " + isBorder);
    var editor = tinymce.activeEditor;
    var galleryItem = findClosestGalleryItem(editor.selection.getNode(), editor);
    if (galleryItem) {
        if (isBorder) {
            galleryItem.style.borderImage = 'linear-gradient(135deg, ' + color1 + ', ' + color2 + ') 1';
            galleryItem.style.border = '5px solid transparent';
        } else {
            galleryItem.style.backgroundImage = 'none';
            galleryItem.style.background = 'linear-gradient(135deg, ' + color1 + ', ' + color2 + ')';
        }
    }
}

// Function to set media background image
function setMdaBgImage(imgSrc, isaBg, isRounded) {
    var editor = tinymce.activeEditor;
    if (isaBg) {
        var galleryItem = findClosestGalleryItem(editor.selection.getNode(), editor);
        if (galleryItem) {
            galleryItem.style.background = 'none';
            galleryItem.style.backgroundImage = 'url(' + imgSrc + ')';
            galleryItem.style.backgroundSize = 'cover';
            galleryItem.style.backgroundPosition = 'center';
            galleryItem.style.backgroundRepeat = 'no-repeat';
            if (isRounded) {
                galleryItem.style.borderRadius = '10px';
            }
        }
    } else {
        var style = isRounded ? 'border-radius:10px;' : '';
        editor.insertContent('<img src="' + imgSrc + '" style="' + style + '" width="200" height="200" />');
    }
}

// Function to set media solid color background or border
function setMdaBgSolidColor(color, isBorder = false) {
    console.log("setMdaBgSolidColor.color: " + color + ", isBorder: " + isBorder);
    var editor = tinymce.activeEditor;
    var galleryItem = findClosestGalleryItem(editor.selection.getNode(), editor);
    if (galleryItem) {
        if (isBorder) {
            galleryItem.style.borderColor = color;
            galleryItem.style.border = '5px solid ' + color;
        } else {
            galleryItem.style.backgroundColor = color;
            galleryItem.style.backgroundImage = 'none';
        }
    }
}

function openTextShadowDialog() {
    var grad1 = '#2196f3', grad2 = '#e3f2fd';
    var uniqueId = Date.now(); // Unique ID to avoid conflicts

    // Tab buttons using Bootstrap
    var tabHtml = `
        <ul class="nav nav-tabs" id="textShadowTab_${uniqueId}" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="ts_tab_shadow_${uniqueId}" data-bs-toggle="tab" data-bs-target="#ts_tab_shadow_content_${uniqueId}" type="button" role="tab" aria-controls="ts_tab_shadow_content_${uniqueId}" aria-selected="true">` + stxt[645] + `</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="ts_tab_gradient_${uniqueId}" data-bs-toggle="tab" data-bs-target="#ts_tab_gradient_content_${uniqueId}" type="button" role="tab" aria-controls="ts_tab_gradient_content_${uniqueId}" aria-selected="false">` + stxt[641] + `</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="ts_tab_solid_${uniqueId}" data-bs-toggle="tab" data-bs-target="#ts_tab_solid_content_${uniqueId}" type="button" role="tab" aria-controls="ts_tab_solid_content_${uniqueId}" aria-selected="false">` + stxt[642] + `</button>
            </li>
        </ul>
        <div class="tab-content" id="textShadowTabContent_${uniqueId}">
    `;

    // Shadow tab content
    var shadowHtml = `
        <div class="tab-pane fade show active" id="ts_tab_shadow_content_${uniqueId}" role="tabpanel" aria-labelledby="ts_tab_shadow_${uniqueId}">
            <h3>` + stxt[653] + `</h3>
            <label>` + stxt[648] + ` <input type="number" id="ts_h_${uniqueId}" value="2"></label><br>
            <label>` + stxt[649] + ` <input type="number" id="ts_v_${uniqueId}" value="2"></label><br>
            <label>` + stxt[650] + ` <input type="number" id="ts_b_${uniqueId}" value="4"></label><br>
            <label>` + stxt[651] + ` <input type="text" id="ts_c_${uniqueId}" value="#000000" data-coloris style="width:100px;"></label><br>
            <div id="ts_colorPreview_${uniqueId}" style="width:100%;height:40px;border-radius:8px;margin:10px 0;background:#000000;border:1px solid #ddd;"></div>
            <span id="ts_apply_${uniqueId}" class="cls_button cls_button-medium bkgdClrHdr txtClrWhite">` + stxt[646] + `</span>
            <span id="ts_remove_${uniqueId}" class="cls_button cls_button-medium bkgdClrGrey txtClrHdr">` + stxt[647] + `</span>
            <p style="margin-top:10px;font-size:12px;color:#666;">` + stxt[660] + `</p>
        </div>
    `;

    // Gradient tab content
    var gradientHtml = `
        <div class="tab-pane fade" id="ts_tab_gradient_content_${uniqueId}" role="tabpanel" aria-labelledby="ts_tab_gradient_${uniqueId}">
            <label style="display:block;margin-bottom:5px;">Color 1: <input type="text" id="ts_grad1_${uniqueId}" value="${grad1}" data-coloris style="margin-right:10px;width:100px;"></label>
            <label style="display:block;margin-bottom:5px;">Color 2: <input type="text" id="ts_grad2_${uniqueId}" value="${grad2}" data-coloris style="width:100px;"></label>
            <div id="ts_gradPreview_${uniqueId}" style="width:100%;height:40px;border-radius:8px;margin:10px 0;background:linear-gradient(135deg,${grad1},${grad2});border:1px solid #ddd;"></div>
            <div><input type="checkbox" id="ts_grad_border_${uniqueId}"> <label for="ts_grad_border_${uniqueId}">` + stxt[652] + `</label></div>
            <span id="ts_apply_gradient_${uniqueId}" class="cls_button cls_button-medium bkgdClrHdr txtClrWhite">` + stxt[643] + `</span>
            <p style="margin-top:10px;font-size:12px;color:#666;">` + stxt[661] + `</p>
        </div>
    `;

    // Solid color tab content
    var solidHtml = `
        <div class="tab-pane fade" id="ts_tab_solid_content_${uniqueId}" role="tabpanel" aria-labelledby="ts_tab_solid_${uniqueId}">
            <label style="display:block;margin-bottom:5px;">Color: <input type="text" id="ts_solid_${uniqueId}" value="#2196f3" data-coloris style="width:100px;"></label>
            <div id="ts_solidPreview_${uniqueId}" style="width:100%;height:40px;border-radius:8px;margin:10px 0;background:#2196f3;border:1px solid #ddd;"></div>
            <div><input type="checkbox" id="ts_solid_border_${uniqueId}"> <label for="ts_solid_border_${uniqueId}">` + stxt[652] + `</label></div>
            <span id="ts_apply_solid_${uniqueId}" class="cls_button cls_button-medium bkgdClrHdr txtClrWhite">` + stxt[644] + `</span>
            <p style="margin-top:10px;font-size:12px;color:#666;">` + stxt[662] + `</p>
        </div>
    `;

    // Full dialog HTML
    var tdialogHtml = tabHtml + shadowHtml + gradientHtml + solidHtml + '</div>';
    var dialogHtml = '<div style="min-height:80vh;max-height:90vh;overflow:auto;">' + tdialogHtml + '</div>';
    JSSHOP.ui.popAndFillLbox(dialogHtml);
    setTimeout(function() {
        // Shadow apply
        document.getElementById(`ts_apply_${uniqueId}`).onclick = function() {
            var h = document.getElementById(`ts_h_${uniqueId}`).value;
            var v = document.getElementById(`ts_v_${uniqueId}`).value;
            var b = document.getElementById(`ts_b_${uniqueId}`).value;
            var c = document.getElementById(`ts_c_${uniqueId}`).value;
            var shadow = h + 'px ' + v + 'px ' + b + 'px ' + c;
            var editor = tinymce.activeEditor;
            var selected = editor.selection.getContent();
            if (selected) {
                editor.selection.setContent('<span style="text-shadow:' + shadow + ';">' + selected + '</span>');
            } else {
                var galleryItem = findClosestGalleryItem(editor.selection.getNode(), editor);
                if (galleryItem) {
                    galleryItem.style.boxShadow = shadow;
                } else {
                    alert('Please select text or an element near a gallery item.');
                }
            }
            JSSHOP.ui.closeLbox();
        };

        // Shadow remove
        document.getElementById(`ts_remove_${uniqueId}`).onclick = function() {
            var editor = tinymce.activeEditor;
            var selected = editor.selection.getContent();
            if (selected) {
                editor.selection.setContent('<span style="text-shadow:none;">' + selected + '</span>');
            } else {
                var galleryItem = findClosestGalleryItem(editor.selection.getNode(), editor);
                if (galleryItem) {
                    galleryItem.style.boxShadow = 'none';
                }
            }
            JSSHOP.ui.closeLbox();
        };

        // Shadow color preview
        document.getElementById(`ts_c_${uniqueId}`).addEventListener('input', function() {
            document.getElementById(`ts_colorPreview_${uniqueId}`).style.backgroundColor = this.value;
        });

        // Gradient preview
        document.getElementById(`ts_grad1_${uniqueId}`).onchange = function() {
            grad1 = this.value;
            document.getElementById(`ts_gradPreview_${uniqueId}`).style.background = 'linear-gradient(135deg,' + grad1 + ',' + grad2 + ')';
        };
        document.getElementById(`ts_grad2_${uniqueId}`).onchange = function() {
            grad2 = this.value;
            document.getElementById(`ts_gradPreview_${uniqueId}`).style.background = 'linear-gradient(135deg,' + grad1 + ',' + grad2 + ')';
        };

        // Apply gradient
        document.getElementById(`ts_apply_gradient_${uniqueId}`).onclick = function() {
            setMdaBgGradient(grad1, grad2, document.getElementById(`ts_grad_border_${uniqueId}`).checked);
            JSSHOP.ui.closeLbox();
        };

        // Solid preview
        document.getElementById(`ts_solid_${uniqueId}`).onchange = function() {
            document.getElementById(`ts_solidPreview_${uniqueId}`).style.background = this.value;
        };

        // Apply solid
        document.getElementById(`ts_apply_solid_${uniqueId}`).onclick = function() {
            setMdaBgSolidColor(document.getElementById(`ts_solid_${uniqueId}`).value, document.getElementById(`ts_solid_border_${uniqueId}`).checked);
            JSSHOP.ui.closeLbox();
        };

        // Initialize Coloris if available
        if (window.Coloris) {
            Coloris({
                el: '[data-coloris]',
                parent: '#nurModal',
                closeButton: true,
                closeLabel: 'Close',
                swatches: ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51']
            });
            ensureColorisManualCloseControl();
        }
    }, 100);
}

function openFlyersModalDialog() {
    // Get user images similar to getUsrPImgList
    if (currUsrUpdtsObj && currUsrUpdtsObj["pimage"] && currUsrUpdtsObj["pimage"].length > 0) {
        renderFlyerImages(null, JSON.stringify(currUsrUpdtsObj["pimage"]), null);
        return;
    } else {
        console.log("openFlyersModalDialog: no cached pimage posts, fetching from db");
        var tmpDOs = {};
        tmpDOs["ws"] = "where p_uid = ? and p_rtype = ? and p_ptype = ?";
        tmpDOs["wa"] = [quid, 5, "pimage"];
        tmpDOs["l"] = 80;
        var oi = getNuDBFnvp("qposts", 5, null, tmpDOs);
        doQComm(oi["rq"], null, "renderFlyerImages");
    }
}

function renderFlyerImages(theRDa, theRDb, theRDc) {
    console.log("renderFlyerImages: " + theRDa + " " + theRDb + " " + theRDc);
    if (currUsrUpdtsObj) {
        currUsrUpdtsObj["pimage"] = null;
    }
    var imagesHtml = '<div class="row">';
    if (theRDb && theRDb.indexOf("_id") != -1) {
        var tAiretArr = JSON.parse(theRDb);
        if (currUsrUpdtsObj) {
            currUsrUpdtsObj["pimage"] = [];
            currUsrUpdtsObj["pimage"] = tAiretArr;
        }
        for (var i = 0; i < tAiretArr.length; i++) {
            var img = tAiretArr[i];
            var imgSrc = "images/ucontent/" + img["p_image"];
            var title = img["p_title"] ? decodeURIComponent(img["p_title"]) : "No Title";
            var dateStr = img["p_dadded"] ? new Date(img["p_dadded"] * 1000).toLocaleDateString() : "";
            if (title.length > 30) {
                title = title.substring(0, 30) + "...";
            }
            imagesHtml += '<div class="col-6 col-md-2 mb-3">';
            imagesHtml += '<div class="card" style="cursor:pointer;" onclick="loadFlyerTemplate(' + i + ');">';
            imagesHtml += '<img src="images/ucontent/s_thumb' + img["p_image"] + '" class="card-img-top" alt="' + title + '">';
            imagesHtml += '<div class="card-body p-2">';
            imagesHtml += '<p class="card-text mb-1" style="font-size:12px;">' + title + '<br><small class="text-muted">' + dateStr + '</small></p>';
            imagesHtml += '</div>';
            imagesHtml += '</div>';
            imagesHtml += '</div>';
        }
    }
    imagesHtml += '</div>';

    // Create modal
    var modalId = 'flyersModal';
    var existingModal = document.getElementById(modalId);
    if (!existingModal) {
        var modalHtml = `
            <div class="modal fade" id="${modalId}" tabindex="-1" aria-labelledby="${modalId}Label" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="${modalId}Label">Select Flyer Image</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body" id="${modalId}Body" style="max-height: 70vh; overflow-y: auto;">
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHtml);
        existingModal = document.getElementById(modalId);
    }
    var modalBody = document.getElementById(modalId + 'Body');
    modalBody.innerHTML = imagesHtml;
    var modal = new bootstrap.Modal(existingModal);
    modal.show();
}

function loadFlyerTemplate(index) {
    if (!currUsrUpdtsObj || !currUsrUpdtsObj["pimage"] || index >= currUsrUpdtsObj["pimage"].length) {
        console.error("loadFlyerTemplate: invalid index or no pimage data");
        return;
    }
    var record = currUsrUpdtsObj["pimage"][index];
    var flyerHtml = "";
    var descHtml = "";
    var title = "";

    if (record.p_vars) {
        var pVarsStr = decodeURIComponent(record.p_vars);
        var delimiterIndex = pVarsStr.indexOf("dlmtd");
        if (delimiterIndex !== -1) {
            var tZpdProps = pVarsStr.substring(0, delimiterIndex);
            var tZpdHTML = pVarsStr.substring(delimiterIndex + 5); // "dlmtd".length = 5
            flyerHtml = LZString.decompressFromEncodedURIComponent(tZpdHTML);
            var tSlctdPrpsStr = LZString.decompressFromEncodedURIComponent(tZpdProps);
            var atspaee = JSON.parse(tSlctdPrpsStr);
            // Set the selected properties array
            if (typeof JSSHOP !== 'undefined' && JSSHOP.shared && JSSHOP.shared.setSlctdPrpsArr) {
                JSSHOP.shared.setSlctdPrpsArr(atspaee);
            }
        } else {
            // Fallback for old format
            flyerHtml = LZString.decompressFromEncodedURIComponent(pVarsStr);
        }
    }
    if (record.p_content) {
        descHtml = LZString.decompressFromEncodedURIComponent(decodeURIComponent(record.p_content));
    }
    if (record.p_title) {
        title = decodeURIComponent(record.p_title);
    }

    // Set title
    if (document.getElementById("tmp_p_title")) {
        document.getElementById("tmp_p_title").value = title;
    }

    // Set flyer content to demo editor
    if (typeof tinyMCE !== 'undefined' && tinyMCE.get('taDemoEdtr')) {
        tinyMCE.get('taDemoEdtr').setContent(flyerHtml);
    } else if (document.getElementById("taDemoEdtr")) {
        document.getElementById("taDemoEdtr").value = flyerHtml;
    } else {
        // Fallback similar to trnsltImgPstObj
        var tDVDstr = "<textarea class=\"inpDemoEdtr form-control\" name=\"taDemoEdtr\" id=\"taDemoEdtr\" rows=\"4\" cols=\"30\">" + flyerHtml + "</textarea>";
        tDVDstr += "<div class=\"clearfix\"></div><br>";
        if (document.getElementById("dvDemoView")) {
            document.getElementById("dvDemoView").innerHTML = tDVDstr;
        }
                setTimeout(function() { JSSHOP.ads.intDemoEditor(); }, 1000);

    }

    // Set description content to main editor
    if (typeof tinyMCE !== 'undefined' && tinyMCE.get('tmp_p_content')) {
        tinyMCE.get('tmp_p_content').setContent(descHtml);
    } else if (document.getElementById("tmp_p_content")) {
        document.getElementById("tmp_p_content").value = descHtml;
    }

    // Close modal
    var modal = document.getElementById('flyersModal');
    if (modal) {
        var bsModal = bootstrap.Modal.getInstance(modal);
        if (bsModal) {
            bsModal.hide();
        }
    }
}

JSSHOP.ads.getEdtrPrpDscStr = function(tPrpDtarr) {
    tEdtrDescStr = "";
    for (var key in tPrpDtarr) {
        if (tPrpDtarr.hasOwnProperty(key)) {
            var tPrpDtObj = tPrpDtarr[key];
            // tEdtrDescStr += LZString.decompressFromEncodedURIComponent(tPrpDtObj.ptitle) + " - " + tPrpDtObj.price + " &euro;; \r\n";
            // use a bullet type listing with \unicode icons
            tEdtrDescStr += "&#8226; " + LZString.decompressFromEncodedURIComponent(tPrpDtObj.ptitle) + " - " + tPrpDtObj.price + " ?   #PROPID:" + tPrpDtObj._id + "<br>";

        }
    }
    return tEdtrDescStr;
};


JSSHOP.ads.getEditorUsrBoxStr = function(tUsrDtObj) {
    tEdtrUsrStr = "";
        let contacts = [];
    let preferred = ['whatsapp', 'telephone', 'email', 'facebook'];
    for(let pref of preferred){
        let link = currQUsrLnksArr.find(l => l.k_category === pref);
        if(link){
            contacts.push(link);
            if(contacts.length >= 2) break;
        }
    }

      // Seller info
      // wrapped in table
       tEdtrUsrStr += '<table><tr><td>';
    tEdtrUsrStr += '<div class="gallery-item" style="background: rgba(255,255,255,0.9); border-radius: 10px;margin:10px; padding: 5px; box-shadow: 1px 4px 8px rgba(0,0,0,0.1); text-align: center;">';
         tEdtrUsrStr += "<table><tr><td><div><span style=\"font-size: 32px; color: #007bff; margin-right: 10px;\">&#8226;</span></div></td><td>";

    // tEdtrUsrStr += `<h5 style="margin: 0 0 10px 0; font-size: 16px;">${stxt[912]}...</h5>`;
    tEdtrUsrStr += '<div style="display: flex; align-items: center;">';
    tEdtrUsrStr += `<img src="images/user/${u_icon.value}" alt="Agent" style="width: 80px; height: 80px; border-radius: 50%; margin-right: 10px;">`;
    tEdtrUsrStr += '<div>';
    tEdtrUsrStr += `<p style="margin: 0; font-weight: bold; font-size: 24px;">${u_fullname.value}</p>`;
    // tEdtrUsrStr += `<p style="margin: 0; color: #666; font-size: 12px;">${u_email.value}</p>`;
    if(contacts.length > 0){
        tEdtrUsrStr += '<div style="margin-top: 10px; display: flex; justify-content: center; gap: 10px;">';
        for(let contact of contacts){
            let href = '';
            if(contact.k_category === 'whatsapp'){
                href = `https://wa.me/${contact.k_matter}`;
            } else if(contact.k_category === 'telephone'){
                href = `tel:${contact.k_matter}`;
            } else if(contact.k_category === 'email'){
                href = `mailto:${contact.k_matter}`;
            } else if(contact.k_category === 'facebook'){
                href = `https://facebook.com/${contact.k_matter}`;
            }
            if(href){
                // tEdtrPrpsStr += `<a href="${href}" target="_blank"><img src="images/misc/ts-icon-${contact.k_category}.png" alt="${contact.k_category}" style="width: 24px; height: 24px;"></a>`;
                // show the icon and contact info
                tEdtrUsrStr += `<div style="text-align: center;">`;
                tEdtrUsrStr += `<a href="${href}" target="_blank" style="text-decoration: none; color: inherit;">`;
                tEdtrUsrStr += `<img src="images/misc/ts-icon-${contact.k_category}.png" alt="${contact.k_category}" style="width: 24px; height: 24px;margin: 0 10px 0 0;">`;
                tEdtrUsrStr += `<span style="font-size: 20px;margin-right: 15px;"><b>${contact.k_matter}</b></span>`;
                tEdtrUsrStr += `</a>`;
                tEdtrUsrStr += `</div>`;

            }
        }
        tEdtrUsrStr += '</div>';
    }
    tEdtrUsrStr += '</div>';
    tEdtrUsrStr += '</div>';
       tEdtrUsrStr += "</td><td><span style=\"font-size: 32px; color: #007bff; margin-right: 10px;\">&#8226;</span></td></tr></table>";


    tEdtrUsrStr += '</div>';
    // end of seller info box
    tEdtrUsrStr += '</td></tr></table>'; // end of wrapping table
    return tEdtrUsrStr;
};

JSSHOP.ads.getEdtrPrpListStr = function(tPrpDtarr, flyrstyle = "default") {


    tEdtrPrpsStr = "";
    // tPrpDtarr is something like this:
    /* {
    "ob74": {
        "_id": "74",
        "ptitle": "Apartamento T2 a venda",
        "ptype": "house",
        "stype": "sell",
        "pimage": "74_1742932000.jpg",
        "price": "587",
        "ploclat": "50.3307055",
        "ploclng": "3.2525741611191146",
        "location": "1",
        "city": "Aniche",
        "state": "Hauts-de-France"
    },
    "ob71": {
        "_id": "71",
        "ptitle": "Titulo.. Moradia... yyyyyy",
        "ptype": "house",
        "stype": "sell",
        "pimage": "71_1734186393.jpg",
        "price": "199",
        "ploclat": "39.20830054059647",
        "ploclng": "-8.626260302993321",
        "location": "1",
        "city": "Almeirim",
        "state": "Santarem"
    },
    "ob70": {
        "_id": "70",
        "ptitle": "Titulo.. Moradia... yyyyyy",
        "ptype": "apartment",
        "stype": "sell",
        "pimage": "70_1733075098.jpg",
        "price": "199",
        "ploclat": "39.82102676737835",
        "ploclng": "-7.493080558612859",
        "location": "1",
        "city": "Castelo Branco",
        "state": "Castelo Branco"
    },
    "ob69": {
        "_id": "69",
        "ptitle": "Titulo.. Moradia... ",
        "ptype": "triplex",
        "stype": "sell",
        "pimage": "69_1730060259.jpg",
        "price": "199",
        "ploclat": "40.062023676257645",
        "ploclng": "18.056985755896832",
        "location": "",
        "city": "Alezio",
        "state": "Puglia"
    }
}
    */
    // given the class name and the array of properties, generate the editor string
    // the editor string will be used to display the properties in the editor as a real estate property flyer
    // using samples from the web and other sources
    // also using bootstrap  libraries to make it look good
    // use the example tPrpDtarr above to generate the editor string
 // create a div string with a diagonal gradient fill from blue to white
    // tEdtrDescStr is a string listing the titles and prices of selected properties

    switch(flyrstyle) {
        case 'classic':
            gradientStyle = "background: linear-gradient(to right, #007bff, #ffffff);";
            break;
        case 'modern':
            gradientStyle = "background: linear-gradient(to right, #00bcd4, #2196f3, #3f51b5);";
            break;
        case 'vibrant':
            gradientStyle = "background: linear-gradient(to right, #ff4081, #ff1744, #ffeb3b);";
            break;
        default:
            gradientStyle = "background: linear-gradient(to right, #007bff, #ffffff);";
            break;
    }

        tEdtrPrpsStr += "<div class=\"property-flyer\" style=\"background-color:#FFFFFF;background: linear-gradient(to bottom,rgb(94, 157, 182), #ffffff); padding: 20px; " + gradientStyle + "\" id=\"dvTMCdemo\">";

    tEdtrPrpsStr += "<div class=\"gallery-item\" style=\"position:relative;margin:20px;font-size:32px;font-weight:bold;text-shadow:3px 3px 6px rgba(0,0,0,0.8);line-height:1.2;text-transform:uppercase;letter-spacing:1px;max-width:100%;word-wrap:break-word;background: rgba(255,255,255,0.9); border-radius: 10px; margin: 10px; padding: 5px; box-shadow: 1px 4px 8px rgba(0,0,0,0.1); text-align: center;\">";


   tEdtrPrpsStr += "<table style=\"margin-bottom:10px;margin: 0 auto;\">";
    tEdtrPrpsStr += "<tr><td class=\"txtBold txtClrHdr\" style=\"text-align:center;\"><span style=\"font-size:18px;\">" + stxt[10]+ "... " + stxt[10] + "...</span></td></tr>";
    tEdtrPrpsStr += "<tr><td class=\"txtSmall txtClrHdr\" style=\"text-align:center;\"><span style=\"font-size:14px;\">" + stxt[40]+ "... " + stxt[40] + "... " + stxt[40] + "...</span></td></tr>";
    tEdtrPrpsStr += "</table>";
    tEdtrPrpsStr += "</div>"; // end of gallery item div
    tEdtrPrpsStr += "<hr>";
     for(i = 0; i < tPrpDtarr.length; i++) {
        tPrpDtObj = tPrpDtarr[i];
        tPrpImgStr = "<img src=\"" + currPrpImgsFldr + "/" + tPrpDtObj.pimage + "\" style=\"min-width:80px;max-width:90px;text-align:center;margin-right:3px;min-height:80px;max-height:90px;\" class=\"slmtable brdrClrDlg\" alt=\"Property Image\">";
        tEdtrPrpsStr += "<div class=\"gallery-item\" style=\"position:relative;margin:20px;font-size:32px;font-weight:bold;letter-spacing:1px;max-width:100%;word-wrap:break-word;background: rgba(255,255,255,0.9); border-radius: 10px; margin: 10px; padding: 5px; box-shadow: 1px 4px 8px rgba(0,0,0,0.1); text-align: center;\">";
        tEdtrPrpsStr += "<table>";
        tEdtrPrpsStr += "<tr><td>" + tPrpImgStr + "</td><td style=\"width:100%;vertical-align:top;\">";
        tEdtrPrpsStr += "<div class=\"\" style=\"float:left;\">";
        tEdtrPrpsStr += "<table class=\"\">";
        tEdtrPrpsStr += "<tr><td class=\"txtBold txtClrHdr\"><span style=\"font-size:18px;\">" + LZString.decompressFromEncodedURIComponent(tPrpDtObj.ptitle) + "</span></td></tr>";
        // tEdtrPrpsStr += "<tr><td class=\"txtSmall txtClrHdr\">" + tPrpDtObj.ptype + " - " + tPrpDtObj.stype + "</td></tr>";
        tEdtrPrpsStr += "<tr><td class=\" txtClrHdr\">" + tPrpDtObj.city + ", " + tPrpDtObj.state + "</td></tr>";
        tEdtrPrpsStr += "<tr><td class=\"txtBig txtBold txtClrHdr\">" + tPrpDtObj.price + " &euro;</td></tr>";
       //  tEdtrPrpsStr += "<tr><td class=\"txtSmall txtClrHdr\">" + tPrpDtObj.location + "</td></tr>";

        tEdtrPrpsStr += "</table>";
        tEdtrPrpsStr += "</div>"; // end of float left div
        tEdtrPrpsStr += "</td></tr></table>";
        tEdtrPrpsStr += "</div>"; // end of gallery item div
         // only add <hr> if not the last property
        if(i < tPrpDtarr.length - 1) {
            tEdtrPrpsStr += "<hr>";
        }
    }
    tEdtrPrpsStr += "<hr>";


/*
    // add the seller information
    tEdtrPrpsStr += "<div class=\"slmtable brdrClrHdr bkgdClrWhite\" style=\"text-align:center;\">";
       //  tEdtrPrpsStr += "<div class=\"txtBig txtBold txtClrHdr\" style=\"text-align:center;\">" + stxt[912] + "...</div>";

    tEdtrPrpsStr += "<table class=\"table table-striped\">";
    tEdtrPrpsStr += "<tr><td><img src=\"images/user/" + u_icon.value + "\" class=\"icnRndnBgUser\"></td>";
    tEdtrPrpsStr += "<td>" + u_fullname.value + "<br>" + u_email.value + "<br>"  + "</td>";
    tEdtrPrpsStr += "</tr></table>";
    tEdtrPrpsStr += "</div>"; // end of edtr-grid rtable brdrClrHdr
    tEdtrPrpsStr += "</div>"; // end of seller information div
*/
tEdtrPrpsStr += JSSHOP.ads.getEditorUsrBoxStr("nada");


    // add clear fix to the end of the div
    tEdtrPrpsStr += "<div style=\"clear:both;\" class=\"clearfix\"></div>";
    tEdtrPrpsStr += "</div>"; // end of vertical gradient div


    return tEdtrPrpsStr;
};


JSSHOP.ads.getEdtrPrpGridStr = function(tPrpDtarr, flyrstyle = 'modern') {
    let tEdtrPrpsStr = "";
    let gradientStyle = "";

    // Define styles
    switch(flyrstyle) {
        case 'classic':
            gradientStyle = "background: linear-gradient(to right, #007bff, #ffffff);";
            break;
        case 'modern':
            gradientStyle = "background: linear-gradient(to right, #00bcd4, #2196f3, #3f51b5);";
            break;
        case 'vibrant':
            gradientStyle = "background: linear-gradient(to right, #ff4081, #ff1744, #ffeb3b);";
            break;
        default:
            gradientStyle = "background: linear-gradient(to right, #007bff, #ffffff);";
            break;
    }

    // Start flyer container - landscape oriented for og:image (1200x630), optimized for mobile viewing
    tEdtrPrpsStr = `<div style="${gradientStyle} width: 100%; min-height: 430px; position: relative; padding: 10px; box-sizing: border-box;" id="dvTMCdemo">`;


    // Properties container - horizontal layout, optimized for full area usage
    tEdtrPCntStr = '<div style="display: flex; flex-wrap: wrap; justify-content: space-around; align-items: flex-start; margin-bottom: 10px;">';
    for(let i = 0; i < tPrpDtarr.length; i++) {
        let tPrpDtObj = tPrpDtarr[i];
        let imgSrc = currPrpImgsFldr + "/" + tPrpDtObj.pimage;
        let title = LZString.decompressFromEncodedURIComponent(tPrpDtObj.ptitle);
        let location = tPrpDtObj.city + ", " + tPrpDtObj.state;
        let price = tPrpDtObj.price + "  &euro;";

        // Property card - larger for better mobile readability
        tEdtrPCntStr += `<div class=\"gallery-item\" style="float: left; width: ${tPrpDtarr.length > 2 ? '30%' : '45%'}; margin: 5px; background: rgba(255,255,255,0.95); border-radius: 15px; box-shadow: 0 6px 12px rgba(0,0,0,0.15); overflow: hidden;">`;
        tEdtrPCntStr += `<img src="${imgSrc}" alt="Property Image" style="width: 100%; height: 180px; object-fit: cover;">`;
        tEdtrPCntStr += '<div style="padding: 15px;">';
        tEdtrPCntStr += `<h5 style="font-weight: bold; margin: 0 0 8px 0; font-size: 20px; line-height: 1.3;">${title}</h5>`;
        tEdtrPCntStr += `<p style="color: #666; margin: 0 0 8px 0; font-size: 18px; line-height: 1.4;">${location}</p>`;
        tEdtrPCntStr += `<p style="font-weight: bold; color: #007bff; margin: 0; font-size: 24px; line-height: 1.2;">${price}</p>`;
        tEdtrPCntStr += '</div>';
        tEdtrPCntStr += '</div>';
    }
    tEdtrPCntStr += '<div style="clear: both;"></div>';
    tEdtrPCntStr += '</div>'; // end of properties container
    tEdtrPCntStr += '<div style="clear: both;"></div>';


    let sulltitlestr = "";
    for(let prop of tPrpDtarr){
        let title = LZString.decompressFromEncodedURIComponent(prop.ptitle);
        sulltitlestr += title.substring(0, 30) + "... ";
    }

        // Header - larger text for mobile readability
    tEdtrHdrStr = `<div style="text-align: center; margin-bottom: 10px;">`;
    tEdtrHdrStr += `<h1 style="color: white; font-weight: bold; font-size: 48px; margin: 0; line-height: 1.2;">${sulltitlestr}</h1>`;
    tEdtrHdrStr += `<p style="color: white; font-size: 24px; margin: 5px 0 0 0; line-height: 1.3;">${stxt[40]}... ${stxt[40]}... ${stxt[40]}...</p>`;
    tEdtrHdrStr += '</div>';

    // !! Table cell wrapper
    tEdtrPrpsStr += '<table><tr><td>' + tEdtrHdrStr + '</td></tr><tr><td><span style=\"font-size: 32px; color: #007bff; margin-right: 10px;\">&#8226;</span></td></tr><tr><td>' + tEdtrPCntStr + '</td></tr><tr><td><span style=\"font-size: 32px; color: #007bff; margin-right: 10px;\">&#8226;</span></td></tr><tr><td>';


    tEdtrPrpsStr += JSSHOP.ads.getEditorUsrBoxStr("nada");

    tEdtrPrpsStr += '</td></tr><tr><td><span style=\"font-size: 32px; color: #007bff; margin-right: 10px;\">&#8226;</span></td></tr></table>';
    tEdtrPrpsStr += '</div>'; // end of flyer container

    return tEdtrPrpsStr;
};




JSSHOP.ads.initInteractiveElements = function(containerId) {
    const container = document.getElementById(containerId);
// const conatiner is inside the taDemoEdtr_ifr iframe body
   //  const iframe = document.getElementById("taDemoEdtr_ifr");
   //  const container = iframe ? iframe.contentDocument.body.querySelector('#' + containerId) : null;

    if (!container) return;

    // Find all elements with interactive-element class (these are the handles)
    const interactiveHandles = container.querySelectorAll('.interactive-element');

    // For each handle, make its parent draggable
    interactiveHandles.forEach(function(handle) {
        // The parent element is the one we want to make draggable
        const parentElement = handle.parentElement;
        if (parentElement) {
            JSSHOP.ui.dragElement(parentElement);
        }
    });

    // Make elements resizable using plain JavaScript
    const resizeHandles = container.querySelectorAll('.resize-handle');
    resizeHandles.forEach(function(handle) {
        const parentElement = handle.parentElement;
        if (parentElement) {
            JSSHOP.ads.makeResizable(parentElement, handle);
        }
    });

    // Add rotation functionality using plain JavaScript
    const rotateHandles = container.querySelectorAll('.rotate-handle');
    rotateHandles.forEach(function(handle) {
        const parentElement = handle.parentElement;
        if (parentElement) {
            JSSHOP.ads.makeRotatable(parentElement, handle);
        }
    });

    // Add z-index management - bring element to front on click
    const allInteractiveElements = container.querySelectorAll('[id^="interactive"]');
    let maxZIndex = 1000;

    allInteractiveElements.forEach(function(element) {
        element.addEventListener('mousedown', function() {
            maxZIndex++;
            element.style.zIndex = maxZIndex;
        });

        element.addEventListener('touchstart', function() {
            maxZIndex++;
            element.style.zIndex = maxZIndex;
        });
    });
};

// Editor helper functions for text editing
JSSHOP.ads.clearSelectedText = function() {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        range.deleteContents();
    }
};

JSSHOP.ads.formatSelectedText = function(command) {
    document.execCommand(command, false, null);
};

JSSHOP.ads.changeFontSize = function() {
    const size = prompt('Enter font size (e.g., 12px, 1.2em, larger, smaller):', '16px');
    if (size) {
        document.execCommand('fontSize', false, size);
    }
};

JSSHOP.ads.changeTextColor = function() {
    const color = prompt('Enter color (e.g., #ff0000, red, rgb(255,0,0)):', '#333333');
    if (color) {
        document.execCommand('foreColor', false, color);
    }
};

// Plain JavaScript resizable functionality
JSSHOP.ads.makeResizable = function(element, handle) {
    let isResizing = false;
    let startX, startY, startWidth, startHeight;

    // Mouse events
    handle.addEventListener('mousedown', function(e) {
        isResizing = true;
        startX = e.clientX;
        startY = e.clientY;
        startWidth = element.offsetWidth;
        startHeight = element.offsetHeight;

        document.addEventListener('mousemove', resize);
        document.addEventListener('mouseup', stopResize);

        e.preventDefault();
    });

    // Touch events
    handle.addEventListener('touchstart', function(e) {
        isResizing = true;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        startWidth = element.offsetWidth;
        startHeight = element.offsetHeight;

        document.addEventListener('touchmove', resizeTouch);
        document.addEventListener('touchend', stopResize);

        e.preventDefault();
    });

    function resize(e) {
        if (!isResizing) return;

        const newWidth = startWidth + (e.clientX - startX);
        const newHeight = startHeight + (e.clientY - startY);

        // Minimum size constraints
        if (newWidth >= 150) {
            element.style.width = newWidth + 'px';
        }
        if (newHeight >= 100) {
            element.style.height = newHeight + 'px';
        }
    }

    function resizeTouch(e) {
        if (!isResizing) return;

        const newWidth = startWidth + (e.touches[0].clientX - startX);
        const newHeight = startHeight + (e.touches[0].clientY - startY);

        // Minimum size constraints
        if (newWidth >= 150) {
            element.style.width = newWidth + 'px';
        }
        if (newHeight >= 100) {
            element.style.height = newHeight + 'px';
        }
    }

    function stopResize() {
        isResizing = false;
        document.removeEventListener('mousemove', resize);
        document.removeEventListener('mouseup', stopResize);
        document.removeEventListener('touchmove', resizeTouch);
        document.removeEventListener('touchend', stopResize);
    }
};

// Plain JavaScript rotatable functionality
JSSHOP.ads.makeRotatable = function(element, handle) {
    let rotation = 0;
    let isRotating = false;
    let startAngle = 0;

    // Mouse events
    handle.addEventListener('mousedown', function(e) {
        isRotating = true;
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        startAngle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * 180 / Math.PI;

        document.addEventListener('mousemove', rotate);
        document.addEventListener('mouseup', stopRotate);

        e.preventDefault();
    });

    // Touch events
    handle.addEventListener('touchstart', function(e) {
        isRotating = true;
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        startAngle = Math.atan2(e.touches[0].clientY - centerY, e.touches[0].clientX - centerX) * 180 / Math.PI;

        document.addEventListener('touchmove', rotateTouch);
        document.addEventListener('touchend', stopRotate);

        e.preventDefault();
    });

    function rotate(e) {
        if (!isRotating) return;

        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const currentAngle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * 180 / Math.PI;

        rotation += currentAngle - startAngle;
        startAngle = currentAngle;

        // Apply rotation, preserving existing transforms
        const currentTransform = element.style.transform || '';
        const newTransform = currentTransform.replace(/rotate\([^)]*\)/, '') + ' rotate(' + rotation + 'deg)';
        element.style.transform = newTransform;
    }

    function rotateTouch(e) {
        if (!isRotating) return;

        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const currentAngle = Math.atan2(e.touches[0].clientY - centerY, e.touches[0].clientX - centerX) * 180 / Math.PI;

        rotation += currentAngle - startAngle;
        startAngle = currentAngle;

        // Apply rotation, preserving existing transforms
        const currentTransform = element.style.transform || '';
        const newTransform = currentTransform.replace(/rotate\([^)]*\)/, '') + ' rotate(' + rotation + 'deg)';
        element.style.transform = newTransform;
    }

    function stopRotate() {
        isRotating = false;
        document.removeEventListener('mousemove', rotate);
        document.removeEventListener('mouseup', stopRotate);
        document.removeEventListener('touchmove', rotateTouch);
        document.removeEventListener('touchend', stopRotate);
    }
};

JSSHOP.ads.getInteractiveEdtrPrpStr = function(tPrpDtarr, style = 'modern') {
    let tEdtrPrpsStr = "";
    let gradientStyle = "";
    let headerClass = "text-white font-weight-bold";
    let subHeaderClass = "text-white";

    // Define styles
    switch(style) {
        case 'classic':
            gradientStyle = "background: linear-gradient(to right, #007bff, #ffffff);";
            break;
        case 'modern':
            gradientStyle = "background: linear-gradient(to right, #00bcd4, #2196f3, #3f51b5);";
            break;
        case 'vibrant':
            gradientStyle = "background: linear-gradient(to right, #ff4081, #ff1744, #ffeb3b);";
            break;
        default:
            gradientStyle = "background: linear-gradient(to right, #007bff, #ffffff);";
    }

    // Start flyer container - interactive version
    tEdtrPrpsStr += `<div style="${gradientStyle} width: 1200px; height: 630px; position: relative; padding: 20px; box-sizing: border-box;" id="interactiveFlyer" class="interactive-flyer">`;

    // Interactive title - draggable, resizable, rotatable
    tEdtrPrpsStr += `<div id="interactiveTitle" class="interactive-element" style="position: absolute; top: 20px; left: 50%; transform: translateX(-50%); z-index: 1000; cursor: move; background: rgba(255,255,255,0.9); padding: 10px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); text-align: center;">`;
    tEdtrPrpsStr += `<h1 style="color: #333; font-weight: bold; font-size: 36px; margin: 0; line-height: 1.2;">${stxt[10]}... ${stxt[10]}...</h1>`;
    tEdtrPrpsStr += `<p style="color: #666; font-size: 18px; margin: 5px 0 0 0; line-height: 1.3;">${stxt[40]}... ${stxt[40]}... ${stxt[40]}...</p>`;
    tEdtrPrpsStr += `<div class="resize-handle" style="position: absolute; bottom: -5px; right: -5px; width: 10px; height: 10px; background: #007bff; cursor: nw-resize;"></div>`;
    tEdtrPrpsStr += `<div class="rotate-handle" style="position: absolute; top: -5px; right: -5px; width: 10px; height: 10px; background: #ff4081; cursor: alias;"></div>`;
    tEdtrPrpsStr += '</div>';

    // Interactive properties container
    let startTop = 120;
    for(let i = 0; i < tPrpDtarr.length; i++) {
        let tPrpDtObj = tPrpDtarr[i];
        let imgSrc = currPrpImgsFldr + "/" + tPrpDtObj.pimage;
        let title = LZString.decompressFromEncodedURIComponent(tPrpDtObj.ptitle);
        let location = tPrpDtObj.city + ", " + tPrpDtObj.state;
        let price = tPrpDtObj.price + " ?";

        let leftPos = tPrpDtarr.length > 2 ? (i % 3) * 350 + 50 : (i % 2) * 500 + 100;

        // Interactive property card - draggable, resizable, rotatable
        tEdtrPrpsStr += `<div id="interactiveProperty${i}" class="interactive-element property-card" style="position: absolute; top: ${startTop + Math.floor(i / (tPrpDtarr.length > 2 ? 3 : 2)) * 220}px; left: ${leftPos}px; z-index: 999; cursor: move; background: rgba(255,255,255,0.95); border-radius: 15px; box-shadow: 0 6px 12px rgba(0,0,0,0.15); overflow: hidden; width: ${tPrpDtarr.length > 2 ? '300px' : '400px'};">`;
        tEdtrPrpsStr += `<img src="${imgSrc}" alt="Property Image" style="width: 100%; height: 150px; object-fit: cover;">`;
        tEdtrPrpsStr += '<div style="padding: 15px;">';
        tEdtrPrpsStr += `<h5 style="font-weight: bold; margin: 0 0 8px 0; font-size: 18px; line-height: 1.3;">${title}</h5>`;
        tEdtrPrpsStr += `<p style="color: #666; margin: 0 0 8px 0; font-size: 16px; line-height: 1.4;">${location}</p>`;
        tEdtrPrpsStr += `<p style="font-weight: bold; color: #007bff; margin: 0; font-size: 20px; line-height: 1.2;">${price}</p>`;
        tEdtrPrpsStr += '</div>';
        tEdtrPrpsStr += `<div class="resize-handle" style="position: absolute; bottom: -5px; right: -5px; width: 10px; height: 10px; background: #007bff; cursor: nw-resize;"></div>`;
        tEdtrPrpsStr += `<div class="rotate-handle" style="position: absolute; top: -5px; right: -5px; width: 10px; height: 10px; background: #ff4081; cursor: alias;"></div>`;
        tEdtrPrpsStr += '</div>';
    }

    // Interactive seller info - draggable, resizable, rotatable
    tEdtrPrpsStr += '<div id="interactiveSellerInfo" class="interactive-element seller-info" style="position: absolute; bottom: 20px; right: 20px; z-index: 1000; cursor: move; background: rgba(255,255,255,0.95); border-radius: 15px; padding: 20px; box-shadow: 0 6px 12px rgba(0,0,0,0.15); text-align: center; width: 250px;">';
    tEdtrPrpsStr += `<h5 style="margin: 0 0 15px 0; font-size: 18px; line-height: 1.3;">${stxt[912]}...</h5>`;
    tEdtrPrpsStr += '<div style="display: flex; align-items: center;">';
    tEdtrPrpsStr += `<img src="images/user/${u_icon.value}" alt="Agent" style="width: 60px; height: 60px; border-radius: 50%; margin-right: 15px;">`;
    tEdtrPrpsStr += '<div>';
    tEdtrPrpsStr += `<p style="margin: 0; font-weight: bold; font-size: 16px; line-height: 1.4;">${u_fullname.value}</p>`;
    tEdtrPrpsStr += `<p style="margin: 0; color: #666; font-size: 14px; line-height: 1.5;">${u_email.value}</p>`;
    tEdtrPrpsStr += '</div>';
    tEdtrPrpsStr += '</div>';
    tEdtrPrpsStr += `<div class="resize-handle" style="position: absolute; bottom: -5px; right: -5px; width: 10px; height: 10px; background: #007bff; cursor: nw-resize;"></div>`;
    tEdtrPrpsStr += `<div class="rotate-handle" style="position: absolute; top: -5px; right: -5px; width: 10px; height: 10px; background: #ff4081; cursor: alias;"></div>`;
    tEdtrPrpsStr += '</div>';

    tEdtrPrpsStr += '</div>';

    // Add JavaScript for interactivity initialization
    tEdtrPrpsStr += `
    <script>
    setTimeout(function() {
        JSSHOP.ads.initInteractiveElements('interactiveFlyer');
    }, 100);
    </script>
    `;

    return tEdtrPrpsStr;
};

JSSHOP.ads.getInteractiveNwstEdtrPrpStr = function(tPrpDtarr, style = 'modern') {
    let tEdtrPrpsStr = "";
    let gradientStyle = "";

    // Define styles
    switch(style) {
        case 'classic':
            gradientStyle = "background: linear-gradient(to right, #007bff, #ffffff);";
            break;
        case 'modern':
            gradientStyle = "background: linear-gradient(to right, #00bcd4, #2196f3, #3f51b5);";
            break;
        case 'vibrant':
            gradientStyle = "background: linear-gradient(to right, #ff4081, #ff1744, #ffeb3b);";
            break;
        default:
            gradientStyle = "background: linear-gradient(to right, #007bff, #ffffff);";
    }

    // Editor toolbar buttons
    tEdtrPrpsStr += '<div style="background: #f8f9fa; border: 1px solid #dee2e6; border-radius: 5px; padding: 10px; margin-bottom: 10px;">';
    tEdtrPrpsStr += '<div style="float:left;margin:6px;"><a href="javascript:JSSHOP.ui.doEditorKeys(\'undo\');"><span><i class="small-material-icons coll-menu-item txtClrHdr slmtable brdrClrHdr" style="margin-right:4px;" alt="Undo"  title="Undo">&#xe166;</i></span></a></div>';
    tEdtrPrpsStr += '<div style="float:left;margin:6px;"><a href="javascript:JSSHOP.ui.doEditorKeys(\'redo\');"><span><i class="small-material-icons coll-menu-item txtClrHdr slmtable brdrClrHdr" style="margin-right:4px;" alt="Redo"  title="Redo">&#xe15a;</i></span></a></div>';
    tEdtrPrpsStr += '<div style="float:left;margin:6px;"><a href="javascript:JSSHOP.ads.clearSelectedText();"><span><i class="small-material-icons coll-menu-item txtClrHdr slmtable brdrClrHdr" style="margin-right:4px;" alt="Clear"  title="Clear">&#xe14c;</i></span></a></div>';
    tEdtrPrpsStr += '<div style="float:left;margin:6px;"><a href="javascript:JSSHOP.ads.formatSelectedText(\'bold\');"><span><i class="small-material-icons coll-menu-item txtClrHdr slmtable brdrClrHdr" style="margin-right:4px;" alt="Bold"  title="Bold">&#xe238;</i></span></a></div>';
    tEdtrPrpsStr += '<div style="float:left;margin:6px;"><a href="javascript:JSSHOP.ads.changeFontSize();"><span><i class="small-material-icons coll-menu-item txtClrHdr slmtable brdrClrHdr" style="margin-right:4px;" alt="Font Size"  title="Font Size">&#xe245;</i></span></a></div>';
    tEdtrPrpsStr += '<div style="float:left;margin:6px;"><a href="javascript:JSSHOP.ads.changeTextColor();"><span><i class="small-material-icons coll-menu-item txtClrHdr slmtable brdrClrHdr" style="margin-right:4px;" alt="Color"  title="Color">&#xe40a;</i></span></a></div>';
    tEdtrPrpsStr += '<div style="clear:both;"></div>';
    tEdtrPrpsStr += '</div>';

    // Start flyer container - landscape oriented for og:image (1200x630), optimized for mobile viewing with interactivity
    tEdtrPrpsStr += `<div style="${gradientStyle} width: 100%; height: 430px; position: relative; padding: 10px; box-sizing: border-box;" id="interactiveNwstFlyer" class="interactive-nwst-flyer">`;

    // Interactive title - larger text for mobile readability, draggable, resizable, rotatable
    tEdtrPrpsStr += `<div id="interactiveNwstTitle" style="position: absolute; top: 10px; left: 50%; transform: translateX(-50%); z-index: 1000; background: rgba(255,255,255,0.9); padding: 10px; border-radius: 15px; box-shadow: 0 6px 12px rgba(0,0,0,0.15); text-align: center;">`;
    tEdtrPrpsStr += `<div id="interactiveNwstTitlehdr" class="interactive-element" style="cursor: move; padding: 5px; background: rgba(0,0,0,0.1); border-radius: 10px; margin-bottom: 5px; text-align: center; font-size: 12px; font-weight: bold;">Drag Handle</div>`;
    tEdtrPrpsStr += `<h1 contenteditable="true" style="color: #333; font-weight: bold; font-size: 48px; margin: 0; line-height: 1.2;">${stxt[10]}... ${stxt[10]}...</h1>`;
    tEdtrPrpsStr += `<p contenteditable="true" style="color: #666; font-size: 24px; margin: 5px 0 0 0; line-height: 1.3;">${stxt[40]}... ${stxt[40]}... ${stxt[40]}...</p>`;
    tEdtrPrpsStr += `<div class="resize-handle" style="position: absolute; bottom: -5px; right: -5px; width: 10px; height: 10px; background: #007bff; cursor: nw-resize;"></div>`;
    tEdtrPrpsStr += `<div class="rotate-handle" style="position: absolute; top: -5px; right: -5px; width: 10px; height: 10px; background: #ff4081; cursor: alias;"></div>`;
    tEdtrPrpsStr += '</div>';

    // Interactive properties container - horizontal layout, optimized for full area usage
    let startTop = 120;
    for(let i = 0; i < tPrpDtarr.length; i++) {
        let tPrpDtObj = tPrpDtarr[i];
        let imgSrc = currPrpImgsFldr + "/" + tPrpDtObj.pimage;
        let title = LZString.decompressFromEncodedURIComponent(tPrpDtObj.ptitle);
        let location = tPrpDtObj.city + ", " + tPrpDtObj.state;
        let price = tPrpDtObj.price + " ?";

        let leftPos = tPrpDtarr.length > 2 ? (i % 3) * 350 + 50 : (i % 2) * 500 + 100;

        // Interactive property card - larger for better mobile readability, draggable, resizable, rotatable
        tEdtrPrpsStr += `<div id="interactiveNwstProperty${i}" class="property-card" style="position: absolute; top: ${startTop + Math.floor(i / (tPrpDtarr.length > 2 ? 3 : 2)) * 220}px; left: ${leftPos}px; z-index: 999; background: rgba(255,255,255,0.95); border-radius: 15px; box-shadow: 0 6px 12px rgba(0,0,0,0.15); overflow: hidden; width: ${tPrpDtarr.length > 2 ? '300px' : '400px'};">`;
        tEdtrPrpsStr += `<div id="interactiveNwstProperty${i}hdr" class="interactive-element" style="cursor: move; padding: 5px; background: rgba(0,0,0,0.1); border-radius: 10px; margin: 5px; text-align: center; font-size: 12px; font-weight: bold;">Drag Handle</div>`;
        tEdtrPrpsStr += `<img src="${imgSrc}" alt="Property Image" style="width: 100%; height: 180px; object-fit: cover;">`;
        tEdtrPrpsStr += '<div style="padding: 15px;">';
        tEdtrPrpsStr += `<h5 contenteditable="true" style="font-weight: bold; margin: 0 0 8px 0; font-size: 20px; line-height: 1.3;">${title}</h5>`;
        tEdtrPrpsStr += `<p contenteditable="true" style="color: #666; margin: 0 0 8px 0; font-size: 18px; line-height: 1.4;">${location}</p>`;
        tEdtrPrpsStr += `<p contenteditable="true" style="font-weight: bold; color: #007bff; margin: 0; font-size: 24px; line-height: 1.2;">${price}</p>`;
        tEdtrPrpsStr += '</div>';
        tEdtrPrpsStr += `<div class="resize-handle" style="position: absolute; bottom: -5px; right: -5px; width: 10px; height: 10px; background: #007bff; cursor: nw-resize;"></div>`;
        tEdtrPrpsStr += `<div class="rotate-handle" style="position: absolute; top: -5px; right: -5px; width: 10px; height: 10px; background: #ff4081; cursor: alias;"></div>`;
        tEdtrPrpsStr += '</div>';
    }

    // Interactive seller info - larger text, positioned to use space efficiently, draggable, resizable, rotatable
    tEdtrPrpsStr += '<div id="interactiveNwstSellerInfo" class="seller-info" style="position: absolute; bottom: 10px; right: 10px; z-index: 1000; background: rgba(255,255,255,0.95); border-radius: 15px; padding: 20px; box-shadow: 0 6px 12px rgba(0,0,0,0.15); text-align: center; width: 250px;">';
    tEdtrPrpsStr += `<div id="interactiveNwstSellerInfohdr" class="interactive-element" style="cursor: move; padding: 5px; background: rgba(0,0,0,0.1); border-radius: 10px; margin-bottom: 10px; text-align: center; font-size: 12px; font-weight: bold;">Drag Handle</div>`;
    tEdtrPrpsStr += `<h5 contenteditable="true" style="margin: 0 0 15px 0; font-size: 20px; line-height: 1.3;">${stxt[912]}...</h5>`;
    tEdtrPrpsStr += '<div style="display: flex; align-items: center;">';
    tEdtrPrpsStr += `<img src="images/user/${u_icon.value}" alt="Agent" style="width: 60px; height: 60px; border-radius: 50%; margin-right: 15px;">`;
    tEdtrPrpsStr += '<div>';
    tEdtrPrpsStr += `<p contenteditable="true" style="margin: 0; font-weight: bold; font-size: 18px; line-height: 1.4;">${u_fullname.value}</p>`;
    tEdtrPrpsStr += `<p contenteditable="true" style="margin: 0; color: #666; font-size: 16px; line-height: 1.5;">${u_email.value}</p>`;
    tEdtrPrpsStr += '</div>';
    tEdtrPrpsStr += '</div>';
    tEdtrPrpsStr += `<div class="resize-handle" style="position: absolute; bottom: -5px; right: -5px; width: 10px; height: 10px; background: #007bff; cursor: nw-resize;"></div>`;
    tEdtrPrpsStr += `<div class="rotate-handle" style="position: absolute; top: -5px; right: -5px; width: 10px; height: 10px; background: #ff4081; cursor: alias;"></div>`;
    tEdtrPrpsStr += '</div>';

    tEdtrPrpsStr += '</div>';


    return tEdtrPrpsStr;
};

JSSHOP.ads.xgetEditorPrpStr = function(tSwUarr) {
    tSwpStr = "";
    tSwpStr += "<div class=\"edtr-container\">";
    tSwpStr += "<div class=\"edtr-wrapper\">";
    for(i = 0; i < tSwUarr.length; i++) {
        tSwUObj = tSwUarr[i];
        tSuTstr = "<img src=\"" + currPrpImgsFldr + "/" + tSwUObj.pimage + "\" style=\"width:100%\">";
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

JSSHOP.ads.getEditorUStr = function(tSwUarr) {
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

JSSHOP.ads.getUpdatePVrs = function(tPVUpdtType) {
    tUpdatePVrs = null;
    tUpdatePVrs = "";
    tUpdatePVrs = {};
    switch(tPVUpdtType) {
        case "pcarousel":


    tUpdatePVrs["cnfg"] = {};
    tUpdatePVrs["cnfg"]["inpSwprCntnt"] = inpSwprCntnt.value;
    tUpdatePVrs["cnfg"]["inpSwprType"] = inpSwprType.value;
    tUpdatePVrs["cnfg"]["inpSwprNav"] = inpSwprNav.value;
    tUpdatePVrs["cnfg"]["inpSwprPag"] = inpSwprPag.value;
    tUpdatePVrs["cnfg"]["inpSwprLoop"] = inpSwprLoop.value;
    if(inpSwprCntnt.value == "props") {
        tUpdatePVrs["data"] = currSlctdPrpsObj;
        tUpdatePVrs["uptype"] = "props";
    } else if(inpSwprCntnt.value == "users") {
        tUpdatePVrs["data"] = currSlctdUsrObj;
        tUpdatePVrs["uptype"] = "users";
    }
    break;
    case "pmap":
        tUpdatePVrs["cnfg"] = {};
        tUpdatePVrs["cnfg"]["inpMapPstCntnt"] = inpMapPstCntnt.value;
        if (typeof getMapPstTypeValue == "function") {
            tUpdatePVrs["cnfg"]["inpMapPstType"] = getMapPstTypeValue();
        } else if (document.getElementById("inpMapPstType")) {
            tUpdatePVrs["cnfg"]["inpMapPstType"] = document.getElementById("inpMapPstType").value;
        } else {
            tUpdatePVrs["cnfg"]["inpMapPstType"] = "street";
        }
        if (typeof getMapPstEffectValue == "function") {
            tUpdatePVrs["cnfg"]["inpMapPstEffect"] = getMapPstEffectValue();
        } else if (document.getElementById("inpMapPstEffect")) {
            tUpdatePVrs["cnfg"]["inpMapPstEffect"] = document.getElementById("inpMapPstEffect").value;
        } else {
            tUpdatePVrs["cnfg"]["inpMapPstEffect"] = "fitbounds";
        }
        if (typeof getMapPstFlySpeedValue == "function") {
            tUpdatePVrs["cnfg"]["inpMapPstFlySpeed"] = getMapPstFlySpeedValue();
        } else if (document.getElementById("inpMapPstFlySpeed")) {
            tUpdatePVrs["cnfg"]["inpMapPstFlySpeed"] = document.getElementById("inpMapPstFlySpeed").value;
        } else {
            tUpdatePVrs["cnfg"]["inpMapPstFlySpeed"] = "normal";
        }
        if (typeof getMapPstShowSellerValue == "function") {
            tUpdatePVrs["cnfg"]["inpMapPstShowSeller"] = getMapPstShowSellerValue();
        } else if (document.getElementById("inpMapPstShowSeller")) {
            tUpdatePVrs["cnfg"]["inpMapPstShowSeller"] = document.getElementById("inpMapPstShowSeller").value;
        } else {
            tUpdatePVrs["cnfg"]["inpMapPstShowSeller"] = "no";
        }
        if (typeof getMapPstAutoPlayValue == "function") {
            tUpdatePVrs["cnfg"]["inpMapPstAutoPlay"] = getMapPstAutoPlayValue();
        } else if (document.getElementById("inpMapPstAutoPlay")) {
            tUpdatePVrs["cnfg"]["inpMapPstAutoPlay"] = document.getElementById("inpMapPstAutoPlay").value;
        } else {
            tUpdatePVrs["cnfg"]["inpMapPstAutoPlay"] = "off";
        }
        if (typeof getMapPstCaptureMoveendGateValue == "function") {
            tUpdatePVrs["cnfg"]["inpMapPstCaptureMoveendGate"] = getMapPstCaptureMoveendGateValue();
        } else if (document.getElementById("inpMapPstCaptureMoveendGate")) {
            tUpdatePVrs["cnfg"]["inpMapPstCaptureMoveendGate"] = document.getElementById("inpMapPstCaptureMoveendGate").value;
        } else {
            tUpdatePVrs["cnfg"]["inpMapPstCaptureMoveendGate"] = "no";
        }
        // tUpdatePVrs["cnfg"]["inpMapLat"] = inpMapLat.value;
        // tUpdatePVrs["cnfg"]["inpMapLng"] = inpMapLng.value;
        // tUpdatePVrs["cnfg"]["inpMapZoom"] = inpMapZoom.value;
    if(inpMapPstCntnt.value == "props") {
        tUpdatePVrs["data"] = currSlctdPrpsObj;
        tUpdatePVrs["uptype"] = "props";
    } else if(inpMapPstCntnt.value == "users") {
        tUpdatePVrs["data"] = currSlctdUsrObj;
        tUpdatePVrs["uptype"] = "users";
    }
    break;
    case "pimage":
        tUpdatePVrs["cnfg"] = {};
        tUpdatePVrs["cnfg"]["inpImgPstCntnt"] = inpImgPstCntnt.value;
        if(inpImgPstCntnt.value == "props") {
            tUpdatePVrs["data"] = currSlctdPrpsObj;
            tUpdatePVrs["uptype"] = "props";
        } else if(inpImgPstCntnt.value == "users") {
            tUpdatePVrs["data"] = currSlctdUsrObj;
            tUpdatePVrs["uptype"] = "users";
        }
        break;
        case "pvideo":
        tUpdatePVrs["cnfg"] = {};
        tUpdatePVrs["cnfg"]["inpVidPstCntnt"] = inpVidPstCntnt.value;
        if(inpVidPstCntnt.value == "props") {
            tUpdatePVrs["data"] = currSlctdPrpsObj;
            tUpdatePVrs["uptype"] = "props";
        } else if(inpVidPstCntnt.value == "users") {
            tUpdatePVrs["data"] = currSlctdUsrObj;
            tUpdatePVrs["uptype"] = "users";
        }
        break;
    default:
    break;
    }
    return tUpdatePVrs;
};



JSSHOP.ads.getNuxSwprPrpStr = function(tSwpCla, tSwParr) {
    tSwpStr = "";
    tSwpStr += "<div class=\"swiper " + tSwpCla + "\" style=\"max-height:220px;\">";
    tSwpStr += "<div class=\"swiper-wrapper\" style=\"min-height:60px;max-height:180px;max-width:99%;margin: 0 auto\">";

    for(iSS = 0; iSS < tSwParr.length; iSS++) {
        tSwPObj = tSwParr[iSS];
        tSwpStr += "<div class=\"swiper-slide\">";
        tSuTstr = "<img class=\"rtable\" src=\"" + currPrpImgsFldr + "/m_thumb" + tSwPObj.pimage + "\" style=\"width:100%;\">";
/*
        tSwpStr += "<table class=\"\">";
        tSwpStr += "<tr><td>" + tSuTstr + "</td></tr><tr><td>" + tSwPObj.ptitle + "</td></tr>";
        tSwpStr += "</table>";
        */
        tSwpStr += "</div>";

    }
    tSwpStr += "</div>";
    tSwpStr += "<div class=\"swiper-pagination clsP" + tSwpCla + "\"></div>";
    tSwpStr += "<div class=\"swiper-button-next clsBN" + tSwpCla + "\"></div>";
    tSwpStr += "<div class=\"swiper-button-prev clsBP" + tSwpCla + "\"></div>";
    tSwpStr += "</div>";
    return tSwpStr;
}

JSSHOP.ads.getNuSwprPrpStr = function(tdSwpCla, taSwUarr) {
    console.log("JSSHOP.ads.getNuSwprPrpStr.tSwpCla: " + tdSwpCla);
    taWSwpStr = "";
    taWSwpStr += "<div class=\"swiper " + tdSwpCla + "\" style=\"max-height:220px;\">";
    taWSwpStr += "<div class=\"swiper-wrapper\" style=\"min-height:60px;max-height:180px;max-width:99%;margin: 0 auto\">";

    for(iAA = 0; iAA < taSwUarr.length; iAA++) {
        taSwUObj = taSwUarr[iAA];
        console.log("JSSHOP.ads.getNuSwprPrpStr.taSwUObj: " + JSON.stringify(taSwUObj));
        tLZunzSwpr = LZString.decompressFromEncodedURIComponent(taSwUObj.ptitle);
        // tShrtSwpStr = tLZunzSwpr;
        // tShrtSwpStr += price and state
        tShrtSwpStr = tDBHObj[taSwUObj.ptype];
        tShrtSwpStr += " - " + taSwUObj.price + "<span class=\"txtSmall txtClrGrey\">\u20AC</span>";
        tShrtSwpStr += "<br>" + taSwUObj.state;
        if(tLZunzSwpr.length > 20) {
           //  tShrtSwpStr = tLZunzSwpr.substring(0, 20) + "...";
        }
       //  taSuTstr = "<div style=\"width:100%;max-height:290px;\"><img src=\"admin/property/" + taSwUObj.pimage + "\" style=\"width:100%;max-height:260px;\"></div>";

        taSuTstr = "<img src=\"" + currPrpImgsFldr + "/m_thumb" + taSwUObj.pimage + "\" style=\"width:100%;min-height:135px;max-height:140px;max-width:180px;\">";
        taWSwpStr += "<div class=\"swiper-slide crsrPointer\" onclick=\"javascript:eindex('aa-show-prop', 'pid=aa-show-prop&prpid=" + taSwUObj._id + "');\" style=\"text-align:center;margin:8px\">";
        taWSwpStr += "<table class=\"\">";
        taWSwpStr += "<tr><td>" + taSuTstr + "</td></tr><tr><td><span class=\"txtSmall\">" + tShrtSwpStr + "</span></td></tr>";
        taWSwpStr += "</table>";
        taWSwpStr += "</div>";
    }

    taWSwpStr += "</div>";
    taWSwpStr += "<div class=\"swiper-pagination clsP" + tdSwpCla + "\"></div>";
    taWSwpStr += "<div class=\"swiper-button-next clsBN" + tdSwpCla + "\"></div>";
    taWSwpStr += "<div class=\"swiper-button-prev clsBP" + tdSwpCla + "\"></div>";
    taWSwpStr += "</div>";
    return taWSwpStr;
};



JSSHOP.ads.getSwprPrpStr = function(taSwUarr) {
    return JSSHOP.ads.getNuSwprPrpStr("", taSwUarr);
};

JSSHOP.ads.getNuSwiperUStr = function(tSwpCla, tSwUarr) {
    tSwpStr = "";
    tSwpStr += "<div class=\"swiper " + tSwpCla + "\" style=\"max-height:220px;\">";
    tSwpStr += "<div class=\"swiper-wrapper\" style=\"min-height:60px;max-height:180px;max-width:99%;margin: 0 auto\">";

    for(iSS = 0; iSS < tSwUarr.length; iSS++) {
        tSwUObj = tSwUarr[iSS];
        tSuTstr = "<img src=\"images/user/" + tSwUObj.u_icon + "\" style=\"width:100%;\">";
        tSwpStr += "<div class=\"swiper-slide\">";
        tSwpStr += "<table class=\"\">";
        tSwpStr += "<tr><td>" + tSuTstr + "</td></tr><tr><td>" + tSwUObj.u_fullname + "</td></tr>";
        tSwpStr += "</table>";
        tSwpStr += "</div>";

    }
    tSwpStr += "</div>";
    tSwpStr += "<div class=\"swiper-pagination clsP" + tSwpCla + "\"></div>";
    tSwpStr += "<div class=\"swiper-button-next clsBN" + tSwpCla + "\"></div>";
    tSwpStr += "<div class=\"swiper-button-prev clsBP" + tSwpCla + "\"></div>";
    tSwpStr += "</div>";
    return tSwpStr;
}

JSSHOP.ads.getSwiperUStr = function(tSwUarr) {
    return JSSHOP.ads.getNuSwiperUStr("", tSwUarr);
};
function doSwpCntntPick(tSCPel, tSCPval, tSCPtxt) {
    try {
        if(tSCPval == "props") {
            numOfSlctdKeys = 0;
            // get number of keys in currSelPrpObj
            for(var key in currSlctdPrpsObj) {
                if(currSlctdPrpsObj.hasOwnProperty(key)) {
                    numOfSlctdKeys++;
                }
            }
        } else if(tSCPval == "users") {
            numOfSlctdKeys = 0;
            // get number of keys in currSelUsrsObj
            for(var key in currSlctdUsrObj) {
                if(currSlctdUsrObj.hasOwnProperty(key)) {
                    numOfSlctdKeys++;
                }
            }
        }

        tDVa = document.createElement("div");
        tDVa.style = "float:right;margin-left:10px;";
        tDVa.innerHTML = "<a href=\"javascript:JSSHOP.ui.getPickerDiv('" + tSCPval + "');\">" + " Select  "  + " (" + numOfSlctdKeys + ")</a>";
        tdDDinpSwprCntnt.appendChild(tDVa);
    } catch(e) {
        alert("doSwpCntntPick: " + e);
    }
}
function doImgPstCntntPk(tSCPel, tSCPval, tSCPtxt) {
    try {
        if(tSCPval == "props") {
            numOfSlctdKeys = 0;
            // get number of keys in currSelPrpObj
            for(var key in currSlctdPrpsObj) {
                if(currSlctdPrpsObj.hasOwnProperty(key)) {
                    numOfSlctdKeys++;
                }
            }
        } else if(tSCPval == "users") {
            numOfSlctdKeys = 0;
            // get number of keys in currSelUsrsObj
            for(var key in currSlctdUsrObj) {
                if(currSlctdUsrObj.hasOwnProperty(key)) {
                    numOfSlctdKeys++;
                }
            }
        }

        tDVa = document.createElement("div");
        tDVa.style = "float:right;margin-left:10px;";
        tDVa.innerHTML = "<a href=\"javascript:JSSHOP.ui.getPickerDiv('" + inpImgPstCntnt.value + "');\">" + " Select  "  + " (" + numOfSlctdKeys + ")</a>";
        tdDDinpImgPstCntnt.appendChild(tDVa);
    } catch(e) {
        alert("doImgPstCntntPk: " + e);
    }
}



JSSHOP.ads.doImgPostCnfgPop = function() {
    try {
        tSCPopStr = "";
        tDDswprCnttObj = {};
        tDDswprCnttObj["ddtype"] = "noQvalue";
        tDDswprCnttObj["fld"] = "inpImgPstCntnt";
        tDDswprCnttObj["lbl"] = "Image Content";
        tDDswprCnttObj["val"] = inpImgPstCntnt.value;
        // tDDswprCnttObj["kvpObj"] = {"props": "Properties", "users": "Users"};
        // just prps for now
        tDDswprCnttObj["kvpObj"] = {"props": "Properties"};
        tDDswprCnttObj["cb"] = "doImgPstCntntPk";
        tDDswprCnttObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
        tDDswprCnttObj["lblcls"] = "txtSmall";
        tDDswprCnttObj["valcls"] = "txtSmall";
        tDDswprCnttObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
        tDDswprCnttObj["horvert"] = "vertical";
        tDDswprCnttObj["icn"] = "noQvalue";
        tDDswprCnttObj["kvIcnsObj"] = {};
        tDDswprCnttObj["kvIcnsObj"]["props"] = "&#xe5cd;";
        // tDDswprCnttObj["kvIcnsObj"]["users"] = "&#xe5cd;";
        tSCPopStr += JSSHOP.ui.getNuBSdropDstr(tDDswprCnttObj);

        tSCPopStr += "<br><br><span style=\"\" class=\"cls_button cls_button-small bkgdClrHdr txtClrWhite\" onclick=\"JSSHOP.ui.closeLbox();JSSHOP.ads.trnsltImgPstObj();\">OK</span>";
        tSCPopStr += "&nbsp;&nbsp;&nbsp;<span style=\"\" class=\"cls_button cls_button-small  bkgdClrGrey txtClrHdr\" onclick=\"JSSHOP.ui.closeLbox();\">Cancel</span>";
        JSSHOP.ui.popFillObox(tSCPopStr, "&#xe5cd;", "Image Update Config", "yes", "no");
        //         setTimeout(function() { doSwpCntntPick("inpSwprCntnt", inpSwprCntnt.value, "Properties"); }, 1000);

        setTimeout(function() { doImgPstCntntPk("inpImgPstCntnt", inpImgPstCntnt.value, "Properties"); }, 1000);
    } catch(e) {
        alert("doImgPostCnfgPop: " + e);
    }
};

function ensureMapPstTypeField() {
    var mapTypeEl = document.getElementById("inpMapPstType");
    if (!mapTypeEl) {
        mapTypeEl = document.createElement("input");
        mapTypeEl.type = "hidden";
        mapTypeEl.id = "inpMapPstType";
        mapTypeEl.name = "inpMapPstType";
        mapTypeEl.value = "street";
        document.body.appendChild(mapTypeEl);
    }
    if (!mapTypeEl.value) {
        mapTypeEl.value = "street";
    }
    return mapTypeEl;
}

function getMapPstTypeValue() {
    var mapTypeEl = ensureMapPstTypeField();
    var mapTypeVal = String(mapTypeEl.value || "street").toLowerCase();
    if (mapTypeVal == "satellite") {
        mapTypeVal = "satelite";
    }
    if (mapTypeVal != "street" && mapTypeVal != "satelite") {
        mapTypeVal = "street";
    }
    mapTypeEl.value = mapTypeVal;
    return mapTypeVal;
}

function setMapPstTypeValue(mapTypeVal) {
    var mapTypeEl = ensureMapPstTypeField();
    var newVal = String(mapTypeVal || "street").toLowerCase();
    if (newVal == "satellite") {
        newVal = "satelite";
    }
    if (newVal != "street" && newVal != "satelite") {
        newVal = "street";
    }
    mapTypeEl.value = newVal;
    return newVal;
}

function ensureMapPstEffectField() {
    var mapEffectEl = document.getElementById("inpMapPstEffect");
    if (!mapEffectEl) {
        mapEffectEl = document.createElement("input");
        mapEffectEl.type = "hidden";
        mapEffectEl.id = "inpMapPstEffect";
        mapEffectEl.name = "inpMapPstEffect";
        mapEffectEl.value = "fitbounds";
        document.body.appendChild(mapEffectEl);
    }
    if (!mapEffectEl.value) {
        mapEffectEl.value = "fitbounds";
    }
    return mapEffectEl;
}

function getMapPstEffectValue() {
    var mapEffectEl = ensureMapPstEffectField();
    var mapEffectVal = String(mapEffectEl.value || "fitbounds").toLowerCase();
    if (mapEffectVal != "fitbounds" && mapEffectVal != "flyto" && mapEffectVal != "flytobounds" && mapEffectVal != "panto") {
        mapEffectVal = "fitbounds";
    }
    mapEffectEl.value = mapEffectVal;
    return mapEffectVal;
}

function setMapPstEffectValue(mapEffectVal) {
    var mapEffectEl = ensureMapPstEffectField();
    var newVal = String(mapEffectVal || "fitbounds").toLowerCase();
    if (newVal != "fitbounds" && newVal != "flyto" && newVal != "flytobounds" && newVal != "panto") {
        newVal = "fitbounds";
    }
    mapEffectEl.value = newVal;
    return newVal;
}

function ensureMapPstFlySpeedField() {
    var mapFlySpeedEl = document.getElementById("inpMapPstFlySpeed");
    if (!mapFlySpeedEl) {
        mapFlySpeedEl = document.createElement("input");
        mapFlySpeedEl.type = "hidden";
        mapFlySpeedEl.id = "inpMapPstFlySpeed";
        mapFlySpeedEl.name = "inpMapPstFlySpeed";
        mapFlySpeedEl.value = "normal";
        document.body.appendChild(mapFlySpeedEl);
    }
    if (!mapFlySpeedEl.value) {
        mapFlySpeedEl.value = "normal";
    }
    return mapFlySpeedEl;
}

function ensureMapPstShowSellerField() {
    var mapShowSellerEl = document.getElementById("inpMapPstShowSeller");
    if (!mapShowSellerEl) {
        mapShowSellerEl = document.createElement("input");
        mapShowSellerEl.type = "hidden";
        mapShowSellerEl.id = "inpMapPstShowSeller";
        mapShowSellerEl.name = "inpMapPstShowSeller";
        mapShowSellerEl.value = "no";
        document.body.appendChild(mapShowSellerEl);
    }
    if (!mapShowSellerEl.value) {
        mapShowSellerEl.value = "no";
    }
    return mapShowSellerEl;
}

function ensureMapPstAutoPlayField() {
    var mapAutoPlayEl = document.getElementById("inpMapPstAutoPlay");
    if (!mapAutoPlayEl) {
        mapAutoPlayEl = document.createElement("input");
        mapAutoPlayEl.type = "hidden";
        mapAutoPlayEl.id = "inpMapPstAutoPlay";
        mapAutoPlayEl.name = "inpMapPstAutoPlay";
        mapAutoPlayEl.value = "off";
        document.body.appendChild(mapAutoPlayEl);
    }
    if (!mapAutoPlayEl.value) {
        mapAutoPlayEl.value = "off";
    }
    return mapAutoPlayEl;
}

function ensureMapPstCaptureFpsField() {
    var mapCaptureFpsEl = document.getElementById("inpMapPstCaptureFps");
    if (!mapCaptureFpsEl) {
        mapCaptureFpsEl = document.createElement("input");
        mapCaptureFpsEl.type = "hidden";
        mapCaptureFpsEl.id = "inpMapPstCaptureFps";
        mapCaptureFpsEl.name = "inpMapPstCaptureFps";
        mapCaptureFpsEl.value = "4";
        document.body.appendChild(mapCaptureFpsEl);
    }
    if (!mapCaptureFpsEl.value) {
        mapCaptureFpsEl.value = "4";
    }
    return mapCaptureFpsEl;
}

function getMapPstCaptureFpsValue() {
    var mapCaptureFpsEl = ensureMapPstCaptureFpsField();
    var mapCaptureFpsVal = parseInt(mapCaptureFpsEl.value, 10);
    if (isNaN(mapCaptureFpsVal)) {
        mapCaptureFpsVal = 4;
    }
    mapCaptureFpsVal = Math.max(4, Math.min(30, mapCaptureFpsVal));
    mapCaptureFpsEl.value = String(mapCaptureFpsVal);
    return mapCaptureFpsVal;
}

function setMapPstCaptureFpsValue(mapCaptureFpsVal) {
    var mapCaptureFpsEl = ensureMapPstCaptureFpsField();
    var newVal = parseInt(mapCaptureFpsVal, 10);
    if (isNaN(newVal)) {
        newVal = 4;
    }
    newVal = Math.max(4, Math.min(30, newVal));
    mapCaptureFpsEl.value = String(newVal);
    return newVal;
}

function ensureMapPstCaptureIntervalField() {
    var mapCaptureIntervalEl = document.getElementById("inpMapPstCaptureIntervalMs");
    if (!mapCaptureIntervalEl) {
        mapCaptureIntervalEl = document.createElement("input");
        mapCaptureIntervalEl.type = "hidden";
        mapCaptureIntervalEl.id = "inpMapPstCaptureIntervalMs";
        mapCaptureIntervalEl.name = "inpMapPstCaptureIntervalMs";
        mapCaptureIntervalEl.value = "250";
        document.body.appendChild(mapCaptureIntervalEl);
    }
    if (!mapCaptureIntervalEl.value) {
        mapCaptureIntervalEl.value = "250";
    }
    return mapCaptureIntervalEl;
}

function ensureMapPstForceCanvasRendererField() {
    var mapForceCanvasRendererEl = document.getElementById("inpMapPstForceCanvasRenderer");
    if (!mapForceCanvasRendererEl) {
        mapForceCanvasRendererEl = document.createElement("input");
        mapForceCanvasRendererEl.type = "hidden";
        mapForceCanvasRendererEl.id = "inpMapPstForceCanvasRenderer";
        mapForceCanvasRendererEl.name = "inpMapPstForceCanvasRenderer";
        mapForceCanvasRendererEl.value = "yes";
        document.body.appendChild(mapForceCanvasRendererEl);
    }
    if (!mapForceCanvasRendererEl.value) {
        mapForceCanvasRendererEl.value = "yes";
    }
    return mapForceCanvasRendererEl;
}

function getMapPstForceCanvasRendererValue() {
    var mapForceCanvasRendererEl = ensureMapPstForceCanvasRendererField();
    var forceVal = String(mapForceCanvasRendererEl.value || "yes").toLowerCase();
    if (forceVal == "yes" || forceVal == "true" || forceVal == "on" || forceVal == "1") {
        forceVal = "yes";
    } else {
        forceVal = "no";
    }
    mapForceCanvasRendererEl.value = forceVal;
    return forceVal;
}

function setMapPstForceCanvasRendererValue(rawVal) {
    var mapForceCanvasRendererEl = ensureMapPstForceCanvasRendererField();
    var forceVal = String(rawVal || "yes").toLowerCase();
    if (forceVal == "yes" || forceVal == "true" || forceVal == "on" || forceVal == "1") {
        forceVal = "yes";
    } else {
        forceVal = "no";
    }
    mapForceCanvasRendererEl.value = forceVal;
    return forceVal;
}

function ensureMapPstCaptureMoveendGateField() {
    var mapCaptureMoveendEl = document.getElementById("inpMapPstCaptureMoveendGate");
    if (!mapCaptureMoveendEl) {
        mapCaptureMoveendEl = document.createElement("input");
        mapCaptureMoveendEl.type = "hidden";
        mapCaptureMoveendEl.id = "inpMapPstCaptureMoveendGate";
        mapCaptureMoveendEl.name = "inpMapPstCaptureMoveendGate";
        mapCaptureMoveendEl.value = "no";
        document.body.appendChild(mapCaptureMoveendEl);
    }
    if (!mapCaptureMoveendEl.value) {
        mapCaptureMoveendEl.value = "no";
    }
    return mapCaptureMoveendEl;
}

function getMapPstCaptureMoveendGateValue() {
    var mapCaptureMoveendEl = ensureMapPstCaptureMoveendGateField();
    var moveendVal = String(mapCaptureMoveendEl.value || "no").toLowerCase();
    if (moveendVal == "yes" || moveendVal == "true" || moveendVal == "on" || moveendVal == "1") {
        moveendVal = "yes";
    } else {
        moveendVal = "no";
    }
    mapCaptureMoveendEl.value = moveendVal;
    return moveendVal;
}

function setMapPstCaptureMoveendGateValue(rawVal) {
    var mapCaptureMoveendEl = ensureMapPstCaptureMoveendGateField();
    var moveendVal = String(rawVal || "no").toLowerCase();
    if (moveendVal == "yes" || moveendVal == "true" || moveendVal == "on" || moveendVal == "1") {
        moveendVal = "yes";
    } else {
        moveendVal = "no";
    }
    mapCaptureMoveendEl.value = moveendVal;
    return moveendVal;
}

function getMapPstCaptureIntervalValue() {
    var mapCaptureIntervalEl = ensureMapPstCaptureIntervalField();
    var mapCaptureIntervalVal = parseInt(mapCaptureIntervalEl.value, 10);
    if (isNaN(mapCaptureIntervalVal)) {
        mapCaptureIntervalVal = 250;
    }
    mapCaptureIntervalVal = Math.max(120, Math.min(2500, mapCaptureIntervalVal));
    mapCaptureIntervalEl.value = String(mapCaptureIntervalVal);
    return mapCaptureIntervalVal;
}

function setMapPstCaptureIntervalValue(mapCaptureIntervalVal) {
    var mapCaptureIntervalEl = ensureMapPstCaptureIntervalField();
    var newVal = parseInt(mapCaptureIntervalVal, 10);
    if (isNaN(newVal)) {
        newVal = 250;
    }
    newVal = Math.max(120, Math.min(2500, newVal));
    mapCaptureIntervalEl.value = String(newVal);
    return newVal;
}

function getMapPstShowSellerValue() {
    var mapShowSellerEl = ensureMapPstShowSellerField();
    var showSellerVal = String(mapShowSellerEl.value || "no").toLowerCase();
    if (showSellerVal == "true" || showSellerVal == "yes") {
        showSellerVal = "yes";
    } else {
        showSellerVal = "no";
    }
    mapShowSellerEl.value = showSellerVal;
    return showSellerVal;
}

function setMapPstShowSellerValue(showSellerVal) {
    var mapShowSellerEl = ensureMapPstShowSellerField();
    var newVal = String(showSellerVal || "no").toLowerCase();
    if (newVal == "true" || newVal == "yes") {
        newVal = "yes";
    } else {
        newVal = "no";
    }
    mapShowSellerEl.value = newVal;
    return newVal;
}

function getMapPstAutoPlayValue() {
    var mapAutoPlayEl = ensureMapPstAutoPlayField();
    var autoPlayVal = String(mapAutoPlayEl.value || "off").toLowerCase();
    if (autoPlayVal == "yes" || autoPlayVal == "true" || autoPlayVal == "on") {
        autoPlayVal = "on";
    } else {
        autoPlayVal = "off";
    }
    mapAutoPlayEl.value = autoPlayVal;
    return autoPlayVal;
}

function setMapPstAutoPlayValue(autoPlayVal) {
    var mapAutoPlayEl = ensureMapPstAutoPlayField();
    var newVal = String(autoPlayVal || "off").toLowerCase();
    if (newVal == "yes" || newVal == "true" || newVal == "on") {
        newVal = "on";
    } else {
        newVal = "off";
    }
    mapAutoPlayEl.value = newVal;
    return newVal;
}

function getMapPstFlySpeedValue() {
    var mapFlySpeedEl = ensureMapPstFlySpeedField();
    var mapFlySpeedVal = String(mapFlySpeedEl.value || "normal").toLowerCase();
    if (mapFlySpeedVal != "slowest" && mapFlySpeedVal != "slower" && mapFlySpeedVal != "slow" && mapFlySpeedVal != "normal" && mapFlySpeedVal != "fast") {
        mapFlySpeedVal = "normal";
    }
    mapFlySpeedEl.value = mapFlySpeedVal;
    return mapFlySpeedVal;
}

function setMapPstFlySpeedValue(mapFlySpeedVal) {
    var mapFlySpeedEl = ensureMapPstFlySpeedField();
    var newVal = String(mapFlySpeedVal || "normal").toLowerCase();
    if (newVal != "slowest" && newVal != "slower" && newVal != "slow" && newVal != "normal" && newVal != "fast") {
        newVal = "normal";
    }
    mapFlySpeedEl.value = newVal;
    return newVal;
}

function doMapPstCntntPk(tSCPel, tSCPval, tSCPtxt) {
    try {
        if(tSCPval == "props") {
            numOfSlctdKeys = 0;
            // get number of keys in currSelPrpObj
            for(var key in currSlctdPrpsObj) {
                if(currSlctdPrpsObj.hasOwnProperty(key)) {
                    numOfSlctdKeys++;
                }
            }
        } else if(tSCPval == "users") {
            numOfSlctdKeys = 0;
            // get number of keys in currSelUsrsObj
            for(var key in currSlctdUsrObj) {
                if(currSlctdUsrObj.hasOwnProperty(key)) {
                    numOfSlctdKeys++;
                }
            }
        }

        tDVa = document.createElement("div");
        tDVa.style = "float:right;margin-left:10px;";
       tDVa.innerHTML = "<a href=\"javascript:JSSHOP.ui.getPickerDiv('" + tSCPval + "');\">" + " Select  "  + " (" + numOfSlctdKeys + ")</a>";
       /*
       <div style="margin:0 auto;display:flex;flex-direction:column;align-items:center;gap:8px;max-width:340px;"><button type="button" class="btn btn-primary btn-sm d-inline-flex align-items-center" style="padding:4px; background:#4267b2; color:white; border:none; border-radius:4px; cursor:pointer;" onclick="javascript:if(event){event.stopPropagation();}JSSHOP.ui.getPickerDiv('props');"><img src="images/misc/updates_swiper_thumb.jpeg" alt="icon" title="icon" style="width:22px;height:22px;border-radius:50%;margin-right:8px;">Select properties for Flyer</button><button type="button" class="btn btn-outline-primary btn-sm d-inline-flex align-items-center" style="padding:4px; background:#4267b2; color:white; border:none; border-radius:4px; cursor:pointer;" onclick="javascript:if(event){event.stopPropagation();}openFlyersModalDialog();"><img src="images/misc/updates_swiper_thumb.jpeg" alt="icon" title="icon" style="width:22px;height:22px;border-radius:50%;margin-right:8px;">Recent</button></div>
       */
       tdDDinpMapPstCntnt.appendChild(tDVa);
    } catch(e) {
        alert("doMapPstCntntPk: " + e);
    }
}
JSSHOP.ads.doMapPostCnfgPop = function() {
    try {
        ensureMapPstTypeField();
        ensureMapPstEffectField();
        ensureMapPstFlySpeedField();
        ensureMapPstShowSellerField();
        ensureMapPstCaptureFpsField();
        ensureMapPstCaptureIntervalField();
        ensureMapPstCaptureMoveendGateField();
        tSCPopStr = "   <br><br>";
        tDDswprCnttObj = {};
        tDDswprCnttObj["ddtype"] = "noQvalue";
        tDDswprCnttObj["fld"] = "inpMapPstCntnt";
        tDDswprCnttObj["lbl"] = "Map Content";
        tDDswprCnttObj["val"] = inpMapPstCntnt.value;
        tDDswprCnttObj["kvpObj"] = {"props": "Properties", "users": "Users"};
        tDDswprCnttObj["cb"] = "doMapPstCntntPk";
        tDDswprCnttObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
        tDDswprCnttObj["lblcls"] = "txtSmall";
        tDDswprCnttObj["valcls"] = "txtSmall";
        tDDswprCnttObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
        tDDswprCnttObj["horvert"] = "horizontal";
        tDDswprCnttObj["icn"] = "noQvalue";
        tDDswprCnttObj["kvIcnsObj"] = {};
        tDDswprCnttObj["kvIcnsObj"]["props"] = "&#xe5cd;";
        tDDswprCnttObj["kvIcnsObj"]["users"] = "&#xe5cd;";
        tSCPopStr += JSSHOP.ui.getNuBSdropDstr(tDDswprCnttObj);

        tDDmapTypeObj = {};
        tDDmapTypeObj["ddtype"] = "noQvalue";
        tDDmapTypeObj["fld"] = "inpMapPstType";
        tDDmapTypeObj["lbl"] = "Map Type";
        tDDmapTypeObj["val"] = getMapPstTypeValue();
        tDDmapTypeObj["kvpObj"] = {"street": "Street View", "satelite": "Satelite"};
        tDDmapTypeObj["cb"] = "donada";
        tDDmapTypeObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
        tDDmapTypeObj["lblcls"] = "txtSmall";
        tDDmapTypeObj["valcls"] = "txtSmall";
        tDDmapTypeObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
        tDDmapTypeObj["horvert"] = "horizontal";
        tDDmapTypeObj["icn"] = "noQvalue";
        tDDmapTypeObj["kvIcnsObj"] = {};
        tDDmapTypeObj["kvIcnsObj"]["street"] = "&#xe55f;";
        tDDmapTypeObj["kvIcnsObj"]["satelite"] = "&#xe56e;";
        tSCPopStr += JSSHOP.ui.getNuBSdropDstr(tDDmapTypeObj);

        tDDmapEffectObj = {};
        tDDmapEffectObj["ddtype"] = "noQvalue";
        tDDmapEffectObj["fld"] = "inpMapPstEffect";
        tDDmapEffectObj["lbl"] = "Effects";
        tDDmapEffectObj["val"] = getMapPstEffectValue();
        tDDmapEffectObj["kvpObj"] = {"fitbounds": "Fit Bounds", "flyto": "Fly To", "flytobounds": "Fly To Bounds", "panto": "Pan To"};
        tDDmapEffectObj["cb"] = "donada";
        tDDmapEffectObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
        tDDmapEffectObj["lblcls"] = "txtSmall";
        tDDmapEffectObj["valcls"] = "txtSmall";
        tDDmapEffectObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
        tDDmapEffectObj["horvert"] = "horizontal";
        tDDmapEffectObj["icn"] = "noQvalue";
        tDDmapEffectObj["kvIcnsObj"] = {};
        tDDmapEffectObj["kvIcnsObj"]["fitbounds"] = "&#xe56c;";
        tDDmapEffectObj["kvIcnsObj"]["flyto"] = "&#xe539;";
        tDDmapEffectObj["kvIcnsObj"]["flytobounds"] = "&#xe55b;";
        tDDmapEffectObj["kvIcnsObj"]["panto"] = "&#xe5d2;";
        tSCPopStr += JSSHOP.ui.getNuBSdropDstr(tDDmapEffectObj);

        tDDmapFlySpeedObj = {};
        tDDmapFlySpeedObj["ddtype"] = "noQvalue";
        tDDmapFlySpeedObj["fld"] = "inpMapPstFlySpeed";
        tDDmapFlySpeedObj["lbl"] = "Fly Speed";
        tDDmapFlySpeedObj["val"] = getMapPstFlySpeedValue();
        tDDmapFlySpeedObj["kvpObj"] = {"slowest": "Slowest", "slower": "Slower", "slow": "Slow", "normal": "Normal", "fast": "Fast"};
        tDDmapFlySpeedObj["cb"] = "donada";
        tDDmapFlySpeedObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
        tDDmapFlySpeedObj["lblcls"] = "txtSmall";
        tDDmapFlySpeedObj["valcls"] = "txtSmall";
        tDDmapFlySpeedObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
        tDDmapFlySpeedObj["horvert"] = "horizontal";
        tDDmapFlySpeedObj["icn"] = "noQvalue";
        tDDmapFlySpeedObj["kvIcnsObj"] = {};
        tDDmapFlySpeedObj["kvIcnsObj"]["slowest"] = "&#xe3c1;";
        tDDmapFlySpeedObj["kvIcnsObj"]["slower"] = "&#xe3c1;";
        tDDmapFlySpeedObj["kvIcnsObj"]["slow"] = "&#xe3c1;";
        tDDmapFlySpeedObj["kvIcnsObj"]["normal"] = "&#xe863;";
        tDDmapFlySpeedObj["kvIcnsObj"]["fast"] = "&#xe9e4;";
        tSCPopStr += JSSHOP.ui.getNuBSdropDstr(tDDmapFlySpeedObj);

        tDDmapSellerObj = {};
        tDDmapSellerObj["ddtype"] = "noQvalue";
        tDDmapSellerObj["fld"] = "inpMapPstShowSeller";
        tDDmapSellerObj["lbl"] = "Show Seller";
        tDDmapSellerObj["val"] = getMapPstShowSellerValue();
        tDDmapSellerObj["kvpObj"] = {"yes": "Yes", "no": "No"};
        tDDmapSellerObj["cb"] = "donada";
        tDDmapSellerObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
        tDDmapSellerObj["lblcls"] = "txtSmall";
        tDDmapSellerObj["valcls"] = "txtSmall";
        tDDmapSellerObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
        tDDmapSellerObj["horvert"] = "horizontal";
        tDDmapSellerObj["icn"] = "noQvalue";
        tDDmapSellerObj["kvIcnsObj"] = {"yes": "&#xe7fd;", "no": "&#xe14c;"};
        tSCPopStr += JSSHOP.ui.getNuBSdropDstr(tDDmapSellerObj);

        tDDmapCaptureMoveendObj = {};
        tDDmapCaptureMoveendObj["ddtype"] = "noQvalue";
        tDDmapCaptureMoveendObj["fld"] = "inpMapPstCaptureMoveendGate";
        tDDmapCaptureMoveendObj["lbl"] = "Capture Gate (Safe Test)";
        tDDmapCaptureMoveendObj["val"] = getMapPstCaptureMoveendGateValue();
        tDDmapCaptureMoveendObj["kvpObj"] = {"no": "Current (tile stable)", "yes": "MoveEnd callback"};
        tDDmapCaptureMoveendObj["cb"] = "donada";
        tDDmapCaptureMoveendObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
        tDDmapCaptureMoveendObj["lblcls"] = "txtSmall";
        tDDmapCaptureMoveendObj["valcls"] = "txtSmall";
        tDDmapCaptureMoveendObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
        tDDmapCaptureMoveendObj["horvert"] = "horizontal";
        tDDmapCaptureMoveendObj["icn"] = "noQvalue";
        tDDmapCaptureMoveendObj["kvIcnsObj"] = {"no": "&#xe5d2;", "yes": "&#xe8d5;"};
        tSCPopStr += JSSHOP.ui.getNuBSdropDstr(tDDmapCaptureMoveendObj);

        tSCPopStr += "<span style=\"\" class=\"cls_button cls_button-small bkgdClrHdr txtClrWhite\" onclick=\"JSSHOP.ui.closeLbox();JSSHOP.ads.trnsltMapPstObj();\">OK</span>";
        tSCPopStr += "&nbsp;&nbsp;&nbsp;<span style=\"\" class=\"cls_button cls_button-small  bkgdClrGrey txtClrHdr\" onclick=\"JSSHOP.ui.closeLbox();\">Cancel</span>";

        JSSHOP.ui.popFillObox(tSCPopStr, "&#xe5cd;", "Image Update Config", "yes", "no");
        //         setTimeout(function() { doSwpCntntPick("inpSwprCntnt", inpSwprCntnt.value, "Properties"); }, 1000);

        setTimeout(function() { doMapPstCntntPk("inpMapPstCntnt", inpMapPstCntnt.value, "Properties"); }, 1000);
    } catch(e) {
        alert("doMapPostCnfgPop: " + e);
    }
};

/**/
JSSHOP.ads.doSwprConfigPop = function() {
    /*
        tSwpObj["cls"] = ".swiper-container";
                    tSwpObj["spv"] = 3;
            tSwpObj["spaceBetween"] = 10;
            tSwpObj["loop"] = false;
            tSwpObj["createElements"] = true;
            tSwpObj["height"] = 250;
            tSwpObj["autoplay"] = 2500;
            tSwpObj["autoplayDisableOnInteraction"] = false;
            tSwpObj["pagination"] = ".swiper-pagination";
            tSwpObj["paginationClickable"] = true;
            tSwpObj["nextButton"] = ".swiper-button-next";
            tSwpObj["prevButton"] = ".swiper-button-prev";
            tSwpObj["grabCursor"] = true;

            effect: 'coverflow',
            coverflow: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows : true
            },
            effect: 'cube',
            cube: {
                slideShadows: true,
                shadow: true,
                shadowOffset: 20,
                shadowScale: 0.94
            },
            effect: 'fade',
            fade: {
                crossFade: true
            },
            effect: 'flip',
            flip: {
                slideShadows: true,
                limitRotation: true
            },
            effect: 'slide',
            slide: {
                slideShadows: true,
                limitRotation: true
            },
            effect: 'creative',
            creative: {
                prev: '.swiper-button-prev',
                next: '.swiper-button-next',
                pagination: '.swiper-pagination',
                paginationClickable: true
            },


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

            */
    try {
        tSCPopStr = "";
        tDDswprCnttObj = {};
        tDDswprCnttObj["ddtype"] = "noQvalue";
        tDDswprCnttObj["fld"] = "inpSwprCntnt";
        tDDswprCnttObj["lbl"] = "Swiper Content";
        tDDswprCnttObj["val"] = inpSwprCntnt.value;
        tDDswprCnttObj["kvpObj"] = {"props": "Properties", "users": "Users"};
        tDDswprCnttObj["cb"] = "doSwpCntntPick";
        tDDswprCnttObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
        tDDswprCnttObj["lblcls"] = "txtSmall";
        tDDswprCnttObj["valcls"] = "txtSmall";
        tDDswprCnttObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
        tDDswprCnttObj["horvert"] = "vertical";
        tDDswprCnttObj["icn"] = "noQvalue";
        tDDswprCnttObj["kvIcnsObj"] = {};
        tDDswprCnttObj["kvIcnsObj"]["props"] = "&#xe5cd;";
        tDDswprCnttObj["kvIcnsObj"]["users"] = "&#xe5cd;";
        tSCPopStr += JSSHOP.ui.getNuBSdropDstr(tDDswprCnttObj);

        // swiper types, cube, fade, flip, slide, creative
        tDDswprTypeObj = JSSHOP.ui.getBSDDOptsO();
        tDDswprTypeObj["ddtype"] = "noQvalue";
        tDDswprTypeObj["fld"] = "inpSwprType";
        tDDswprTypeObj["lbl"] = "Swiper Type";
        tDDswprTypeObj["val"] = inpSwprType.value;
       // tDDswprTypeObj["kvpObj"] = {"cube": "Cube", "fade": "Fade", "flip": "Flip", "slide": "Slide", "coverflow": "Cover Flow"};
        tDDswprTypeObj["kvpObj"] = {"slide": "Slide"};
        tDDswprTypeObj["cb"] = "donada";
        tDDswprTypeObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
        tDDswprTypeObj["lblcls"] = "txtSmall";
        tDDswprTypeObj["valcls"] = "txtSmall";
        tDDswprTypeObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
        tDDswprTypeObj["horvert"] = "vertical";
        tDDswprTypeObj["icn"] = "noQvalue";
        tDDswprTypeObj["kvIcnsObj"] = {};
        tDDswprTypeObj["kvIcnsObj"]["cube"] = "&#xe5cd;";
        tDDswprTypeObj["kvIcnsObj"]["fade"] = "&#xe5cd;";
        tDDswprTypeObj["kvIcnsObj"]["flip"] = "&#xe5cd;";
        tDDswprTypeObj["kvIcnsObj"]["slide"] = "&#xe5cd;";
        tDDswprTypeObj["kvIcnsObj"]["creative"] = "&#xe5cd;";
        tSCPopStr += JSSHOP.ui.getNuBSdropDstr(tDDswprTypeObj);

        // swiper use pagination yes or no
        tDDswprPagObj = JSSHOP.ui.getBSDDOptsO();
        tDDswprPagObj["ddtype"] = "noQvalue";
        tDDswprPagObj["fld"] = "inpSwprPag";
        tDDswprPagObj["lbl"] = "Swiper Pagination";
        tDDswprPagObj["val"] = inpSwprPag.value;
        tDDswprPagObj["kvpObj"] = {"true": "true", "false": "false"};
        tDDswprPagObj["cb"] = "donada";
        tDDswprPagObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
        tDDswprPagObj["lblcls"] = "txtSmall";
        tDDswprPagObj["valcls"] = "txtSmall";
        tDDswprPagObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
        tDDswprPagObj["horvert"] = "vertical";
        tDDswprPagObj["icn"] = "noQvalue";
        tDDswprPagObj["kvIcnsObj"] = {};
        tDDswprPagObj["kvIcnsObj"]["yes"] = "&#xe5cd;";
        tDDswprPagObj["kvIcnsObj"]["no"] = "&#xe5cd;";
        tSCPopStr += JSSHOP.ui.getNuBSdropDstr(tDDswprPagObj);

        // swiper use navigation yes or no
        tDDswprNavObj = JSSHOP.ui.getBSDDOptsO();
        tDDswprNavObj["ddtype"] = "noQvalue";
        tDDswprNavObj["fld"] = "inpSwprNav";
        tDDswprNavObj["lbl"] = "Swiper Navigation";
        tDDswprNavObj["val"] = inpSwprNav.value;
        tDDswprNavObj["kvpObj"] = {"true": "true", "false": "false"};
        tDDswprNavObj["cb"] = "donada";
        tDDswprNavObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
        tDDswprNavObj["lblcls"] = "txtSmall";
        tDDswprNavObj["valcls"] = "txtSmall";
        tDDswprNavObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
        tDDswprNavObj["horvert"] = "vertical";
        tDDswprNavObj["icn"] = "noQvalue";
        tDDswprNavObj["kvIcnsObj"] = {};
        tDDswprNavObj["kvIcnsObj"]["yes"] = "&#xe5cd;";
        tDDswprNavObj["kvIcnsObj"]["no"] = "&#xe5cd;";
        tSCPopStr += JSSHOP.ui.getNuBSdropDstr(tDDswprNavObj);



        // swiper use loop yes or no
        tDDswprLoopObj = JSSHOP.ui.getBSDDOptsO();
        tDDswprLoopObj["ddtype"] = "noQvalue";
        tDDswprLoopObj["fld"] = "inpSwprLoop";
        tDDswprLoopObj["lbl"] = "Swiper Loop";
        tDDswprLoopObj["val"] = inpSwprLoop.value;
        tDDswprLoopObj["kvpObj"] = {"true": "true", "false": "false"};
        tDDswprLoopObj["cb"] = "donada";
        tDDswprLoopObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
        tDDswprLoopObj["lblcls"] = "txtSmall";
        tDDswprLoopObj["valcls"] = "txtSmall";
        tDDswprLoopObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
        tDDswprLoopObj["horvert"] = "vertical";
        tDDswprLoopObj["icn"] = "noQvalue";
        tDDswprLoopObj["kvIcnsObj"] = {};
        tDDswprLoopObj["kvIcnsObj"]["yes"] = "&#xe5cd;";
        tDDswprLoopObj["kvIcnsObj"]["no"] = "&#xe5cd;";
        tSCPopStr += JSSHOP.ui.getNuBSdropDstr(tDDswprLoopObj);

        /*
        // swiper use grab cursor yes or no
        tDDswprGrabObj = JSSHOP.ui.getBSDDOptsO();
        tDDswprGrabObj["ddtype"] = "noQvalue";
        tDDswprGrabObj["fld"] = "inpSwprGrab";
        tDDswprGrabObj["lbl"] = "Swiper Grab Cursor";
        tDDswprGrabObj["val"] = inpSwprGrab.value;
        tDDswprGrabObj["kvpObj"] = {"yes": "Yes", "no": "No"};
        tDDswprGrabObj["cb"] = "donada";
        tDDswprGrabObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
        tDDswprGrabObj["lblcls"] = "txtSmall";
        tDDswprGrabObj["valcls"] = "txtSmall";
        tDDswprGrabObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
        tDDswprGrabObj["horvert"] = "vertical";
        tDDswprGrabObj["icn"] = "noQvalue";
        tDDswprGrabObj["kvIcnsObj"] = {};
        tDDswprGrabObj["kvIcnsObj"]["yes"] = "&#xe5cd;";
        tDDswprGrabObj["kvIcnsObj"]["no"] = "&#xe5cd;";
        tSCPopStr += JSSHOP.ui.getNuBSdropDstr(tDDswprGrabObj);

        // swiper use create elements yes or no
        tDDswprCrElObj = JSSHOP.ui.getBSDDOptsO();
        tDDswprCrElObj["ddtype"] = "noQvalue";
        tDDswprCrElObj["fld"] = "inpSwprCrEl";
        tDDswprCrElObj["lbl"] = "Swiper Create Elements";
        tDDswprCrElObj["val"] = inpSwprCrEl.value;
        tDDswprCrElObj["kvpObj"] = {"yes": "Yes", "no": "No"};
        tDDswprCrElObj["cb"] = "donada";
        tDDswprCrElObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
        tDDswprCrElObj["lblcls"] = "txtSmall";
        tDDswprCrElObj["valcls"] = "txtSmall";
        tDDswprCrElObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
        tDDswprCrElObj["horvert"] = "vertical";
        tDDswprCrElObj["icn"] = "noQvalue";
        tDDswprCrElObj["kvIcnsObj"] = {};
        tDDswprCrElObj["kvIcnsObj"]["yes"] = "&#xe5cd;";
        tDDswprCrElObj["kvIcnsObj"]["no"] = "&#xe5cd;";
        tSCPopStr += JSSHOP.ui.getNuBSdropDstr(tDDswprCrElObj);

        // swiper slides per view
        tDDswprSPVObj = JSSHOP.ui.getBSDDOptsO();
        tDDswprSPVObj["ddtype"] = "noQvalue";
        tDDswprSPVObj["fld"] = "inpSwprSPV";
        tDDswprSPVObj["lbl"] = "Swiper Slides Per View";
        tDDswprSPVObj["val"] = inpSwprSPV.value;
        tDDswprSPVObj["kvpObj"] = {"1": "1", "2": "2", "3": "3", "4": "4", "5": "5"};
        tDDswprSPVObj["cb"] = "donada";
        tDDswprSPVObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
        tDDswprSPVObj["lblcls"] = "txtSmall";
        tDDswprSPVObj["valcls"] = "txtSmall";
        tDDswprSPVObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
        tDDswprSPVObj["horvert"] = "vertical";
        tDDswprSPVObj["icn"] = "noQvalue";
        tDDswprSPVObj["kvIcnsObj"] = {};
        tDDswprSPVObj["kvIcnsObj"]["1"] = "&#xe5cd;";
        tDDswprSPVObj["kvIcnsObj"]["2"] = "&#xe5cd;";
        tDDswprSPVObj["kvIcnsObj"]["3"] = "&#xe5cd;";
        tDDswprSPVObj["kvIcnsObj"]["4"] = "&#xe5cd;";
        tDDswprSPVObj["kvIcnsObj"]["5"] = "&#xe5cd;";
        tSCPopStr += JSSHOP.ui.getNuBSdropDstr(tDDswprSPVObj);

        // swiper space between
        tDDswprSBObj = JSSHOP.ui.getBSDDOptsO();
        tDDswprSBObj["ddtype"] = "noQvalue";
        tDDswprSBObj["fld"] = "inpSwprSB";
        tDDswprSBObj["lbl"] = "Swiper Space Between";
        tDDswprSBObj["val"] = inpSwprSB.value;
        tDDswprSBObj["kvpObj"] = {"10": "10", "20": "20", "30": "30", "40": "40", "50": "50"};
        tDDswprSBObj["cb"] = "donada";
        tDDswprSBObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
        tDDswprSBObj["lblcls"] = "txtSmall";
        tDDswprSBObj["valcls"] = "txtSmall";
        tDDswprSBObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
        tDDswprSBObj["horvert"] = "vertical";
        tDDswprSBObj["icn"] = "noQvalue";
        tDDswprSBObj["kvIcnsObj"] = {};
        tDDswprSBObj["kvIcnsObj"]["10"] = "&#xe5cd;";
        tDDswprSBObj["kvIcnsObj"]["20"] = "&#xe5cd;";
        tDDswprSBObj["kvIcnsObj"]["30"] = "&#xe5cd;";
        tDDswprSBObj["kvIcnsObj"]["40"] = "&#xe5cd;";
        tDDswprSBObj["kvIcnsObj"]["50"] = "&#xe5cd;";
        tSCPopStr += JSSHOP.ui.getNuBSdropDstr(tDDswprSBObj);

        // swiper height
        tDDswprHObj = JSSHOP.ui.getBSDDOptsO();
        tDDswprHObj["ddtype"] = "noQvalue";
        tDDswprHObj["fld"] = "inpSwprH";
        tDDswprHObj["lbl"] = "Swiper Height";
        tDDswprHObj["val"] = inpSwprH.value;
        tDDswprHObj["kvpObj"] = {"100": "100", "250": "250", "200": "200", "300": "300", "400": "400", "500": "500"};
        tDDswprHObj["cb"] = "donada";
        tDDswprHObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
        tDDswprHObj["lblcls"] = "txtSmall";
        tDDswprHObj["valcls"] = "txtSmall";
        tDDswprHObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
        tDDswprHObj["horvert"] = "vertical";
        tDDswprHObj["icn"] = "noQvalue";
        tDDswprHObj["kvIcnsObj"] = {};
        tDDswprHObj["kvIcnsObj"]["100"] = "&#xe5cd;";
        tDDswprHObj["kvIcnsObj"]["200"] = "&#xe5cd;";
        tDDswprHObj["kvIcnsObj"]["300"] = "&#xe5cd;";
        tDDswprHObj["kvIcnsObj"]["400"] = "&#xe5cd;";
        tDDswprHObj["kvIcnsObj"]["500"] = "&#xe5cd;";
        tSCPopStr += JSSHOP.ui.getNuBSdropDstr(tDDswprHObj);

        // swiper autoplay
        tDDswprAPObj = JSSHOP.ui.getBSDDOptsO();
        tDDswprAPObj["ddtype"] = "noQvalue";
        tDDswprAPObj["fld"] = "inpSwprAP";
        tDDswprAPObj["lbl"] = "Swiper Autoplay";
        tDDswprAPObj["val"] = inpSwprAP.value;
        tDDswprAPObj["kvpObj"] = {"1000": "1000", "2000": "2000", "3000": "3000", "4000": "4000", "5000": "5000"};
        tDDswprAPObj["cb"] = "donada";
        tDDswprAPObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
        tDDswprAPObj["lblcls"] = "txtSmall";
        tDDswprAPObj["valcls"] = "txtSmall";
        tDDswprAPObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
        tDDswprAPObj["horvert"] = "vertical";
        tDDswprAPObj["icn"] = "noQvalue";
        tDDswprAPObj["kvIcnsObj"] = {};
        tDDswprAPObj["kvIcnsObj"]["1000"] = "&#xe5cd;";
        tDDswprAPObj["kvIcnsObj"]["2000"] = "&#xe5cd;";
        tDDswprAPObj["kvIcnsObj"]["3000"] = "&#xe5cd;";
        tDDswprAPObj["kvIcnsObj"]["4000"] = "&#xe5cd;";
        tDDswprAPObj["kvIcnsObj"]["5000"] = "&#xe5cd;";
        tSCPopStr += JSSHOP.ui.getNuBSdropDstr(tDDswprAPObj);

    */


        tSCPopStr += "<span style=\"\" class=\"cls_button cls_button-small bkgdClrHdr txtClrWhite\" onclick=\"JSSHOP.ui.closeLbox();JSSHOP.ads.trnsltSwiperObj();\">OK</span>";
        tSCPopStr += "&nbsp;&nbsp;&nbsp;<span style=\"\" class=\"cls_button cls_button-small  bkgdClrGrey txtClrHdr\" onclick=\"JSSHOP.ui.closeLbox();\">Cancel</span>";

        JSSHOP.ui.popFillObox(tSCPopStr, "&#xe5cd;", "Swiper Config", "yes", "no");
       // setTimeout(function() { doSwpCntntPick("inpSwprCntnt", inpSwprCntnt.value, "Properties"); }, 1000);

} catch(e) {
console.log("doSwiperConfigPop: " + e);
}
};


/*
var setPropImgs = function(theAIa, theAIb, theAIc) {
	try {
        console.log("setPropImgs: " + theAIa + " " + theAIb + " " + theAIc);

    if(theAIb.indexOf("_id") != -1) {

		tAiretArr = JSON.parse(theAIb);
		var len = tAiretArr.length;
        tstr = "";
        iint = 0;
        while (iint < len) {
            if(tAiretArr[iint]["m_file"] == c_logoimg.value) {
                tstr += "<div style=\"float:left\" class=\"crsrPointer brdrClrRed\">";
            } else {
			tstr += "<div style=\"float:left\" class=\"crsrPointer\">";
            }
 			tstr += "<img src=\"admin/property/" + tAiretArr[iint]["m_file_thumb"] + "\" class=\"icnmedbtn slmtable\" onclick=\"javascript:JSSHOP.ui.popAndFillLbox(getPropIEditDv('" + tAiretArr[iint]["_id"] + "','" + tAiretArr[iint]["m_file"] + "'));\">";
			tstr += "</div>";

			iint++;
		}
		document.getElementById("dvProdImgs").innerHTML = tstr;
	}
	} catch(e) {
		alert("setPropImgs: " + e);
	}
};
*/
var panorama;

async function initGMap() {
    tLocLat = ploclat.value;
tLocLng = ploclng.value;

    if(currGglSVloaded == "no") {
        currGglSVloaded = "yes";
(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
    key: gglSKey,
    v: "beta",
    // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
    // Add other bootstrap parameters as needed, using camel case.
  });
    }

      var { Map3DElement, MapMode, Marker3DElement, Marker3DInteractiveElement } = await google.maps.importLibrary("maps3d");

    var { LatLng } = await google.maps.importLibrary("geometry");
     var { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
     var { PinElement } = await google.maps.importLibrary("marker");
    var { DrawingLibrary } = await google.maps.importLibrary("drawing");


  }








var setNwstPropImages = function(theAIa, theAIb, theAIc) {
    console.log("setNwstPropImages: " + theAIa + " " + theAIb + " " + theAIc);
    intIFrmHght = 0;
    hasGglMap = "no";
    tImgAdArr = null;
    tImgAdArr = "";
    tImgAdArr = [];
    if(theAIb.indexOf("_id") != -1) {
        currPrpMediaArr = null;
        currPrpMediaArr = "";
        currPrpMediaArr = [];

		tAiretArr = JSON.parse(theAIb);
        currPrpMediaArr = tAiretArr;
		awlen = tAiretArr.length;
        tstr = "";
        tpdSocLnksStr = "";
        iirnt = 0;

        otobStr = "ob" + theAIa;
        mGPIobj = currSlctdPrpsObj[otobStr];
        mGPIImg = mGPIobj.pimage;
        tPATtls = mGPIobj.ptitle;
        tPATtlsDecded = decodeURIComponent(tPATtls);
        tSPIttlStr = LZString.decompressFromEncodedURIComponent(tPATtlsDecded);
        document.getElementById("tmp_p_title").value = tSPIttlStr;
        tDesc = LZString.decompressFromEncodedURIComponent(mGPIobj.pdesc);
        tinyMCE.activeEditor.setContent(tDesc);

        // Get property price for the balloon
        tPropPrice = mGPIobj.price || "Contact for Price";

        console.log("setNwstPropImages: " + mGPIobj.ptitle + " " + mGPIImg);

        // Enhanced property flyer with all elements overlaid on main image
        tPrpFlyerMImgSTr = "<div class=\"property-flyer\" style=\"position:relative;width:100%;min-height:700px;border-radius:10px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.1);background-image:url('" + currPrpImgsFldr + "/" + mGPIImg + "');background-size:cover;background-position:center;background-repeat:no-repeat;\" id=\"dvTMCdemo\">";


       //  tPrpFlyerMImgSTr += "<div style=\"position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(135deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.6) 100%);\"></div>";

        tPrpFlyerMImgSTr += "<table><tr><td><div style=\"color:white;font-size:24px;font-weight:bold;\">  </div></td><td>";
        // Property title overlay - now wraps around the price balloon
        tPrpFlyerMImgSTr += "<div style=\"color:#fff;z-index:10;display:flex;flex-direction:column;justify-content:flex-start;\">";

        tPrpFlyerMImgSTr += "<div class=\"gallery-item\" style=\"position:relative;margin:20px;font-size:32px;font-weight:bold;text-shadow:3px 3px 6px rgba(0,0,0,0.8);line-height:1.2;text-transform:uppercase;letter-spacing:1px;max-width:100%;word-wrap:break-word;\">";

        tPrpFlyerMImgSTr += "<div style=\"font-size:18px;float:right;background:#fff;color:#333;padding:12px 20px;border-radius:25px;font-size:18px;font-weight:bold;box-shadow:0 4px 15px rgba(0,0,0,0.3);border:3px solid #007bff;z-index:15;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;\">";
        tPrpFlyerMImgSTr +=  tPropPrice;
        // add state and Area M2 if available
        if (mGPIobj.state) {
            tPrpFlyerMImgSTr += "<div style=\"font-size:18px;color:#fff;\">" + mGPIobj.state + "</div>";
        }
        if (mGPIobj.area) {
            tPrpFlyerMImgSTr += "<div style=\"font-size:18px;color:#fff;\">" + mGPIobj.area + " m²</div>";
        }
        tPrpFlyerMImgSTr += "</div>";
        tPrpFlyerMImgSTr += tSPIttlStr;
        tPrpFlyerMImgSTr += "</div>";

        tPrpFlyerMImgSTr += "</div>"; // End title and price container
            tPrpFlyerMImgSTr += "</td><td style=\"width:50px;\"> </td></tr></table>";
        // add a clearfix
        tPrpFlyerMImgSTr += "<div style=\"clear:both;\"></div>";


        // Overlaid property images gallery section - positioned at bottom of main image
        tPrpFlyerMImgSTr += "<div style=\"z-index:10;\">";
        tPrpFlyerMImgSTr += "<div style=\"margin:15px;padding:5px;display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:8px;max-width:100%;\">";

        while (iirnt < 5) {
            tIRFname = tAiretArr[iirnt]["m_file"];
            tIRcatid = tAiretArr[iirnt]["m_catid"];

            if(tIRcatid == "5") {
                tImageFstr = "images/property/" + tAiretArr[iirnt]["m_file"];
                tIsrcStr = "images/property/m_thumb" + tAiretArr[iirnt]["m_file"];
                tPrpFlyerMImgSTr += "<div class=\"gallery-item\" style=\"position:relative;border-radius:6px;overflow:hidden;box-shadow:0 3px 10px rgba(0,0,0,0.4);transition:transform 0.3s ease;border:2px solid rgba(255,255,255,0.9);\">";
                tPrpFlyerMImgSTr += "<img src=\"images/property/m_thumb" + tAiretArr[iirnt]["m_file"] + "\" style=\"width:100%;height:70px;object-fit:cover;display:block;\" alt=\"Property image\">";
                tPrpFlyerMImgSTr += "<div style=\"position:absolute;bottom:0;left:0;right:0;background:linear-gradient(transparent, rgba(0,0,0,0.9));color:#fff;padding:3px;font-size:16px;font-weight:600;text-align:center;\">" + tAiretArr[iirnt]["m_title"] + "</div>";
                tPrpFlyerMImgSTr += "</div>";
            } else if(tIRcatid == "20") {
                hasGglMap = "yes";
                tLZuncd = LZString.decompressFromEncodedURIComponent(tIRFname);
                tAudecd = tAiretArr[iirnt]["m_file_thumb"];
                tUrlded = decodeURIComponent(tAudecd);
                tLuncthm = LZString.decompressFromEncodedURIComponent(tUrlded);
                tUnZpd = "images/tmpi/" + tAiretArr[iirnt]["m_vala"] + ".jpg";
                tPrpFlyerMImgSTr += "<div class=\"gallery-item\" style=\"position:relative;border-radius:6px;overflow:hidden;box-shadow:0 3px 10px rgba(0,0,0,0.4);border:2px solid rgba(255,255,255,0.9);\">";
                tPrpFlyerMImgSTr += "<img src=\"" + tUnZpd + "\" style=\"width:100%;height:70px;object-fit:cover;display:block;\" alt=\"Street view\">";
                tPrpFlyerMImgSTr += "<div style=\"position:absolute;bottom:0;left:0;right:0;background:linear-gradient(transparent, rgba(0,0,0,0.9));color:#fff;padding:3px;font-size:16px;font-weight:600;text-align:center;\">" + tAiretArr[iirnt]["m_title"] + "</div>";
                tPrpFlyerMImgSTr += "</div>";
            } else if(tIRcatid == "25") {
                hasGglMap = "yes";
                tLZuncd = LZString.decompressFromEncodedURIComponent(tIRFname);
                tULchm = tAiretArr[iirnt]["m_file_thumb"];
                tFthumb = decodeURIComponent(tAiretArr[iirnt]["m_file_thumb"]);
                tLuncthm = LZString.decompressFromEncodedURIComponent(tFthumb);
                tUnZpd = "images/tmpi/" + tAiretArr[iirnt]["m_vala"] + ".jpg";
                tPrpFlyerMImgSTr += "<div class=\"gallery-item\" style=\"position:relative;border-radius:6px;overflow:hidden;box-shadow:0 3px 10px rgba(0,0,0,0.4);border:2px solid rgba(255,255,255,0.9);\">";
                tPrpFlyerMImgSTr += "<img src=\"" + tUnZpd + "\" style=\"width:100%;height:70px;object-fit:cover;display:block;\" alt=\"Map view\">";
                tPrpFlyerMImgSTr += "<div style=\"position:absolute;bottom:0;left:0;right:0;background:linear-gradient(transparent, rgba(0,0,0,0.9));color:#fff;padding:3px;font-size:16px;font-weight:600;text-align:center;\">" + tAiretArr[iirnt]["m_title"] + "</div>";
                tPrpFlyerMImgSTr += "</div>";
            } else if(tIRcatid == "30") {
                hasGglMap = "yes";
                tLZuncd = tIRFname;
                tLuncthm = tAiretArr[iirnt]["m_file_thumb"];
                tuRldssd = decodeURIComponent(tLuncthm);
                tUnAZpd = LZString.decompressFromEncodedURIComponent(tuRldssd);
                tUnZpd = "images/tmpi/" + tAiretArr[iirnt]["m_vala"] + ".jpg";
                console.log("setNwstPropImages: 30 " + tUnZpd);
                tThumbImg = tLuncthm;
                theSplitThmnb = tThumbImg.split("|");
                theTmnbLat = theSplitThmnb[0];
                theTmnbLng = theSplitThmnb[1];
                theTmnbAlt = theSplitThmnb[2];
                tMpType = "satellite";
                console.log("show3DImages: " + theTmnbLat + " " + theTmnbLng + " " + theTmnbAlt);
                tCntrMapLat = theTmnbLat - 0.0001;
                tCntrMapLng = theTmnbLng;
                tZmLvl = 20;
                tIUwidth = 240;
                tIUheight = 180;
                tAVImgUstr = tUnZpd;
                tPrpFlyerMImgSTr += "<div class=\"gallery-item\" style=\"position:relative;border-radius:6px;overflow:hidden;box-shadow:0 3px 10px rgba(0,0,0,0.4);border:2px solid rgba(255,255,255,0.9);\">";
                tPrpFlyerMImgSTr += "<img src=\"" + tAVImgUstr + "\" style=\"width:100%;height:70px;object-fit:cover;display:block;\" alt=\"3D view\">";
                tPrpFlyerMImgSTr += "<div style=\"position:absolute;bottom:0;left:0;right:0;background:linear-gradient(transparent, rgba(0,0,0,0.9));color:#fff;padding:3px;font-size:16px;font-weight:600;text-align:center;\">" + tAiretArr[iirnt]["m_title"] + "</div>";
                tPrpFlyerMImgSTr += "</div>";
            } else {
                intIFrmHght += 1000;
                tmpSocLinksArr.push(tAiretArr[iirnt]);
            }

            iirnt++;
        }

        tPrpFlyerMImgSTr += "</div>"; // End gallery grid

        tPrpFlyerMImgSTr += "</div>"; // End overlaid gallery section


    let contacts = [];
    let preferred = ['whatsapp', 'telephone', 'email', 'facebook'];
    for(let pref of preferred){
        let link = currQUsrLnksArr.find(l => l.k_category === pref);
        if(link){
            contacts.push(link);
            if(contacts.length >= 2) break;
        }
    }

                        // Seller information overlay - now positioned at the bottom of the main image
        tPrpFlyerMImgSTr += "<div style=\"position:absolute; bottom:10px; left:0; right:0; z-index:12;\">";


        tPrpFlyerMImgSTr += JSSHOP.ads.getEditorUsrBoxStr("nada");

        tPrpFlyerMImgSTr += "</div>"; // End bottom positioned overlay container





        tPrpFlyerMImgSTr += "</div>"; // End property flyer

        // Create textarea for editing
        tDVDstr = "<textarea class=\"inpDemoEdtr form-control\" name=\"taDemoEdtr\" id=\"taDemoEdtr\" rows=\"4\" cols=\"30\">" + tPrpFlyerMImgSTr + "</textarea>";
        tDVDstr += "<div class=\"clearfix\"></div><br>";
        document.getElementById("dvDemoView").innerHTML = tDVDstr;
        setTimeout(function() { JSSHOP.ads.intDemoEditor(); }, 1000);
    }
};







function getPropertyImages(propData) {
    // Create a new function to get the property images from q_media
    console.log("Getting property images for: " + JSON.stringify(propData));
    // Add your logic to retrieve the images here
    var ipid = propData._id;
    console.log("getPropertyImages.ipid: " + ipid);
    var tmpFobj = null;
    tmpFobj = {};
    tmpFobj["ws"] = "where m_pid=? and m_rtype=?";
    tmpFobj["wa"] = [ipid, 5];
	tmpFobj["o"] = "m_vala desc";
    oi = getNuDBFnvp("qmedia", 5, null, tmpFobj);
    doQComm(oi["rq"], ipid, "setNwstPropImages");
}

function getVideoPropertyImages(propData) {
    console.log("Getting video property images for: " + JSON.stringify(propData));
    var ipid = propData._id;
    console.log("getVideoPropertyImages.ipid: " + ipid);
    var tmpFobj = {};
    tmpFobj["ws"] = "where m_pid=? and m_rtype=?";
    tmpFobj["wa"] = [ipid, 5];
    tmpFobj["o"] = "m_vala desc";
    oi = getNuDBFnvp("qmedia", 5, null, tmpFobj);
    doQComm(oi["rq"], propData, "setVideoPropImages");
}

function setVideoPropImages(theAIa, theAIb, theAIc) {
    console.log("setVideoPropImages: " + theAIa + " " + theAIb + " " + theAIc);
    if(theAIb.indexOf("_id") != -1) {
        var tAiretArr = JSON.parse(theAIb);
        tmpPrpMediaObj = {};
        for (var i = 0; i < tAiretArr.length; i++) {
            tmpPrpMediaObj["prp" + tAiretArr[i]._id] = tAiretArr[i];
        }
        vdImgs = [];
        for (var i = 0; i < tAiretArr.length; i++) {
            var m = tAiretArr[i];
            if (m && m.m_file_thumb) {
                var mImgSrc = m.m_file;
                var mImgThmbSrc = m.m_file_thumb;
                var tCatID = m.m_catid;
                switch (tCatID) {
                    case "5": // regular
                        var tmfile = mImgSrc;
                        if (tmfile.indexOf("updt_") != -1) {
                            tmfile = tmfile.replace("updt_", "");
                            vdImgs.push("images/ucontent/" + tmfile);
                        } else {
                            vdImgs.push("images/property/" + tmfile);
                        }
                        break;
                    case "20": // streetview
                        var tNrmlImg = mImgSrc;
                        var tLZuncompD = LZString.decompressFromEncodedURIComponent(tNrmlImg);
                        vdImgs.push(tLZuncompD);
                        break;
                    case "25": // aerial
                        tNrmlImg = mImgSrc;
                        tLZuncompD = LZString.decompressFromEncodedURIComponent(tNrmlImg);
                        vdImgs.push(tLZuncompD);
                        break;
                    case "30": // 3D
                        var tHmbImg = mImgThmbSrc;
                        tLZuncompD = LZString.decompressFromEncodedURIComponent(tHmbImg);
                        vdImgs.push(tLZuncompD);
                        break;
                    default:
                        continue;
                }
            }
        }
        selectedImages = [];
        for (var i = 0; i < vdImgs.length; i++) {
            selectedImages.push({index: i, text: ""});
        }
        originalVdImgs = vdImgs.slice();
        console.log("setVideoPropImages: vdImgs set to", vdImgs);
        // Now call doVideoDiv
        var propData = theAIa; // theAIa is propData
        var tSlctdPrpsArr = [propData];
        if (typeof doVideoDiv === "function" && typeof getVideoInterfaceHTML === "function") {
            doVideoDiv(tSlctdPrpsArr);
        } else {
            JSSHOP.loadScript("js/thirdp/CCapture_mod.js", function() {
                if (typeof doVideoDiv === "function" && typeof getVideoInterfaceHTML === "function") {
                    doVideoDiv(tSlctdPrpsArr);
                } else {
                    console.log("setVideoPropImages: video UI functions unavailable after CCapture_mod load");
                }
            }, "js");
        }
    }
}

JSSHOP.ads.trnsltPTpObj = function() {
    tPtypeVal = document.getElementById("p_ptype").value;
    console.log("trnsltPTpObj.tPtypeVal: " + tPtypeVal);
    switch(tPtypeVal) {
        case "pimage":
            JSSHOP.ads.trnsltImgPstObj();
            break;
        case "pmap":
            // Always switch to Preview tab before rendering map
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
            JSSHOP.ads.trnsltMapPstObj();
            break;
        case "pcarousel":
            JSSHOP.ads.trnsltSwiperObj();
            break;
        case "pvideo":
            JSSHOP.ads.trnsltVideoPstObj();
            break;
    }
};



//drag functions
JSSHOP.ui.dragElement =  function(elmnt) {
	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	if (document.getElementById(elmnt.id + "hdr")) {
	  // if present, the header is where you move the DIV from:
	  document.getElementById(elmnt.id + "hdr").onmousedown = dragMouseDown;
	  document.getElementById(elmnt.id + "hdr").ontouchstart = dragTouchStart;
	} else {
	  // otherwise, move the DIV from anywhere inside the DIV:
	  elmnt.onmousedown = dragMouseDown;
	  elmnt.ontouchstart = dragTouchStart;
	}

	function dragMouseDown(e) {
        // make the element position fixed while dragging
	  e = e || window.event;
	  e.preventDefault();
	  // get the mouse cursor position at startup:
	  pos3 = e.clientX;
	  pos4 = e.clientY;
	  document.onmouseup = closeDragElement;
	  // call a function whenever the cursor moves:
	  document.onmousemove = elementDrag;
	}

	function dragTouchStart(e) {
	  e = e || window.event;
	  e.preventDefault();
	  // get the touch position at startup:
	  pos3 = e.touches[0].clientX;
	  pos4 = e.touches[0].clientY;
	  document.ontouchend = closeDragElement;
	  // call a function whenever the touch moves:
	  document.ontouchmove = elementDragTouch;
	}

	function elementDrag(e) {
	  e = e || window.event;
	  e.preventDefault();
	  // calculate the new cursor position:
	  pos1 = pos3 - e.clientX;
	  pos2 = pos4 - e.clientY;
	  pos3 = e.clientX;
	  pos4 = e.clientY;
	  // set the element's new position:
	  elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
	  elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	}

	function elementDragTouch(e) {
	  e = e || window.event;
	  e.preventDefault();
	  // calculate the new touch position:
	  pos1 = pos3 - e.touches[0].clientX;
	  pos2 = pos4 - e.touches[0].clientY;
	  pos3 = e.touches[0].clientX;
	  pos4 = e.touches[0].clientY;
	  // set the element's new position:
	  elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
	  elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	}

	function closeDragElement() {
	  // stop moving when mouse button is released or touch ends:
	  document.onmouseup = null;
	  document.onmousemove = null;
	  document.ontouchend = null;
	  document.ontouchmove = null;
      // lock the element at its new position
      elmnt.style.position = "absolute";
      elmnt.style.zIndex = "999999999";

	}
  };

JSSHOP.shared.setSlctdPrpsArr = function(tTATStr) {
    tSlctdPrpsArr = null;
    tSlctdPrpsArr = "";
    tSlctdPrpsArr = [];
    tSlctdPrpsArr = tTATStr;
};

JSSHOP.shared.getSlctdPrpsArr = function() {
    return tSlctdPrpsArr;
};


JSSHOP.ads.trnsltImgPstObj = function() {
    setInlineDemoViewCaptureMode("pimage");
    tSCval = inpImgPstCntnt.value;
    tIMCLytVal = document.getElementById("inpImgPstLayout").value;
    tIMCStyleVal = document.getElementById("inpImgPstStyle").value;
   console.log("trnsltImgPstObj.tSCval: == props" + tSCval);

    if(tSCval == "props") {
        tSlctdPrpsArr = null;
        tSlctdPrpsArr = "";
        tSlctdPrpsArr = [];
        for(var key in currSlctdPrpsObj) {
            if(currSlctdPrpsObj.hasOwnProperty(key)) {
                tSlctdPrpsArr.push(currSlctdPrpsObj[key]);
            }
        }
        console.log("trnsltImgPstObj.tSlctdPrpsArr: " + JSON.stringify(tSlctdPrpsArr));
       if (tSlctdPrpsArr.length === 1) {
        tFlyrHStr = "";
        getPropertyImages(tSlctdPrpsArr[0]);
          } else {
                if (tIMCLytVal == "grid") {
                tFlyrHStr = JSSHOP.ads.getEdtrPrpGridStr(tSlctdPrpsArr, tIMCStyleVal);
                } else {
                tFlyrHStr = JSSHOP.ads.getEdtrPrpListStr(tSlctdPrpsArr, tIMCStyleVal);
                 }
        tEdtrDstr = JSSHOP.ads.getEdtrPrpDscStr(tSlctdPrpsArr);
        tPATtls = tSlctdPrpsArr[0].ptitle;
        tPATtlsDecded = decodeURIComponent(tPATtls);
        tSPIttlStr = LZString.decompressFromEncodedURIComponent(tPATtlsDecded);
        document.getElementById("tmp_p_title").value = tSPIttlStr;
         // tDesc = LZString.decompressFromEncodedURIComponent(tSlctdPrps
        console.log("trnsltImgPstObj.tEdtrDstr: " + tEdtrDstr);
         _ifrm = document.getElementById('tmp_p_content_ifr');
        _ifrmDoc = _ifrm.contentDocument || _ifrm.contentWindow.document;
        _ifrmDoc.body.innerHTML = tEdtrDstr;

            tBlkFlyrHStr = "...";
            // if taDemoEdtr exists, update it
            if(document.getElementById("taDemoEdtr")) {
                document.getElementById("taDemoEdtr").value = tFlyrHStr;
                // update the tinymce.editor content
                tinyMCE.get("taDemoEdtr").setContent(tFlyrHStr);

            } else {

     tDVDstr = "<textarea class=\"inpDemoEdtr form-control\" name=\"taDemoEdtr\" id=\"taDemoEdtr\" rows=\"4\" cols=\"30\">" + tFlyrHStr + "</textarea>";
     tDVDstr += "<div class=\"clearfix\"></div><br>";
         document.getElementById("dvDemoView").innerHTML = tDVDstr;
        setTimeout(function() { JSSHOP.ads.intDemoEditor(); }, 1000);
            }
            }
    } else if(tSCval == "users") {
        tSlctdUsrsArr = null;
        tSlctdUsrsArr = "";
        tSlctdUsrsArr = [];
        for(var key in currSlctdUsrObj) {
            if(currSlctdUsrObj.hasOwnProperty(key)) {
                tSlctdUsrsArr.push(currSlctdUsrObj[key]);
            }
        }
        tFlyrHStr = JSSHOP.ads.getEditorUStr(tSlctdUsrsArr);
    }

 };

JSSHOP.ads.trnsltVideoPstObj = function() {
    setInlineDemoViewCaptureMode("pvideo");
    console.log("trnsltVideoPstObj called");
    console.log("trnsltVideoPstObj: preparing video post with selected properties");
    tSlctdPrpsArr = null;
    tSlctdPrpsArr = "";
    tSlctdPrpsArr = [];
    for(var key in currSlctdPrpsObj) {
        if(currSlctdPrpsObj.hasOwnProperty(key)) {
            tSlctdPrpsArr.push(currSlctdPrpsObj[key]);
        }
    }
    console.log("trnsltVideoPstObj.tSlctdPrpsArr: " + JSON.stringify(tSlctdPrpsArr));
    if (tSlctdPrpsArr.length === 1) {
        var titles = tSlctdPrpsArr.map(function(prop) {
            return LZString.decompressFromEncodedURIComponent(prop.ptitle || "Property").substring(0, 20);
        });
        document.getElementById("tmp_p_title").value = titles.join(", ");
        console.log("set title to:", titles.join(", "));
        getVideoPropertyImages(tSlctdPrpsArr[0]);
    } else if (tSlctdPrpsArr.length > 0) {
        console.log("tSlctdPrpsArr has", tSlctdPrpsArr.length, "properties");
        var titles = tSlctdPrpsArr.map(function(prop) {
            return LZString.decompressFromEncodedURIComponent(prop.ptitle || "Property").substring(0, 20);
        });
        document.getElementById("tmp_p_title").value = titles.join(", ");
        console.log("set title to:", titles.join(", "));
        // Render video interface in dvDemoView
        console.log("calling doVideoDiv");
        if (typeof doVideoDiv === "function" && typeof getVideoInterfaceHTML === "function") {
            doVideoDiv(tSlctdPrpsArr);
        } else {
            JSSHOP.loadScript("js/thirdp/CCapture_mod.js", function() {
                if (typeof doVideoDiv === "function" && typeof getVideoInterfaceHTML === "function") {
                    doVideoDiv(tSlctdPrpsArr);
                } else {
                    console.log("trnsltVideoPstObj: video UI functions unavailable after CCapture_mod load");
                }
            }, "js");
        }
        console.log("doVideoDiv called");
    } else {
        console.log("no properties selected");
        document.getElementById("tmp_p_title").value = "Video Post";
    }
};

JSSHOP.ads.isValidMapLatLng = function(rawLat, rawLng) {
    var latNum = parseFloat(String(rawLat));
    var lngNum = parseFloat(String(rawLng));
    if (isNaN(latNum) || isNaN(lngNum)) {
        return false;
    }
    if (latNum < -90 || latNum > 90) {
        return false;
    }
    if (lngNum < -180 || lngNum > 180) {
        return false;
    }
    return true;
};

JSSHOP.ads.decodeMapFieldText = function(value, fallback) {
    var fb = (typeof fallback === "string") ? fallback : "";
    if (value === null || typeof value === "undefined") {
        return fb;
    }

    var rawVal = String(value).trim();
    if (rawVal === "") {
        return fb;
    }

    var tryDecodeLz = function(candidate) {
        if (!candidate) {
            return "";
        }
        try {
            var out = LZString.decompressFromEncodedURIComponent(candidate);
            if (typeof out === "string" && out !== "") {
                var rt = "";
                try {
                    rt = LZString.compressToEncodedURIComponent(out);
                } catch (eRt) {
                    rt = "";
                }
                if (rt === candidate) {
                    return out;
                }
            }
        } catch (eLz) {
            return "";
        }
        return "";
    };

    var lzFromRaw = tryDecodeLz(rawVal);
    if (lzFromRaw !== "") {
        return lzFromRaw;
    }

    var decodedVal = rawVal;
    try {
        decodedVal = decodeURIComponent(rawVal);
    } catch (eDec) {
        decodedVal = rawVal;
    }

    var lzFromDecoded = tryDecodeLz(decodedVal);
    if (lzFromDecoded !== "") {
        return lzFromDecoded;
    }

    if (decodedVal !== "") {
        return decodedVal;
    }
    return fb;
};

 JSSHOP.ads.getUpdtMapMrkrs = function(tmmtype, tmmobj) {
    try {
        console.log("getUpdtMapMrkrs: " + tmmtype + " " + JSON.stringify(tmmobj));
        tMapLeavesArr = null;
        tMapLeavesArr = "";
        tMapLeavesArr = [];

       switch(tmmtype) {
            case "props":

                for(var key in tmmobj) {
                    tLeavesObj = null;
                    tLeavesObj = "";
                    tLeavesObj = {};
                    if(tmmobj.hasOwnProperty(key)) {
                         console.log("getUpdtMapMrkrs: " + key + " " + tmmobj[key].ptitle + " " + tmmobj[key].ploclat + " " + tmmobj[key].ploclng);
                        if (!JSSHOP.ads.isValidMapLatLng(tmmobj[key].ploclat, tmmobj[key].ploclng)) {
                            continue;
                        }
                        tLeavesObj["icn"] = currPrpImgsFldr + "/" + "s_thumb" + tmmobj[key].pimage;
                        if (typeof JSSHOP.ads.getNuMapMarkerIconUrl == "function") {
                            tLeavesObj["icn"] = JSSHOP.ads.getNuMapMarkerIconUrl(tLeavesObj["icn"], "images/logo_small_oct.png");
                        }
                        // Prefer propdescs title/desc payloads and decode defensively.
                        var resolvedPropTitle = "";
                        var resolvedPropDesc = "";
                        if (typeof JSSHOP.ads.decodeMapFieldText === "function") {
                            resolvedPropTitle = JSSHOP.ads.decodeMapFieldText(tmmobj[key].pd_prptitle || tmmobj[key].ptitle, "");
                            resolvedPropDesc = JSSHOP.ads.decodeMapFieldText(tmmobj[key].pd_prpdesc || tmmobj[key].pdesc, "");
                        } else {
                            resolvedPropTitle = String(tmmobj[key].pd_prptitle || tmmobj[key].ptitle || "");
                            resolvedPropDesc = String(tmmobj[key].pd_prpdesc || tmmobj[key].pdesc || "");
                        }
                        // Robust fallback logic for marker title (matches getInlineMapMarkerDisplayTitle)
                        if (tmmobj[key].mapMarkerTitleText && String(tmmobj[key].mapMarkerTitleText).trim() !== "") {
                            tLeavesObj["title"] = String(tmmobj[key].mapMarkerTitleText);
                        } else if (resolvedPropTitle && String(resolvedPropTitle).trim() !== "") {
                            tLeavesObj["title"] = String(resolvedPropTitle);
                        } else if (tmmobj[key].cname && String(tmmobj[key].cname).trim() !== "") {
                            tLeavesObj["title"] = String(tmmobj[key].cname);
                        } else {
                            tLeavesObj["title"] = "Property " + (tMapLeavesArr.length + 1);
                        }
                        tLeavesObj["lat"] = tmmobj[key].ploclat;
                        tLeavesObj["lng"] = tmmobj[key].ploclng;
                        tLeavesObj["price"] = tmmobj[key].price;
                        tLeavesObj["prpid"] = tmmobj[key]._id;
                        tLeavesObj["pdesc"] = resolvedPropDesc;
                        tLeavesObj["sellerName"] = tmmobj[key].u_fullname || tmmobj[key].u_name || "";
                        tLeavesObj["sellerIcon"] = tmmobj[key].u_icon || "";
                        tLeavesObj["markerLabelText"] = tmmobj[key].mapMarkerTitleText || tmmobj[key].markerLabelText || "";
                        tLeavesObj["markerLabelTextColor"] = tmmobj[key].mapMarkerTitleTextColor || tmmobj[key].markerLabelTextColor || "";
                        tLeavesObj["markerLabelBgColor"] = tmmobj[key].mapMarkerTitleBgColor || tmmobj[key].markerLabelBgColor || "";
                        tLeavesObj["markerLabelBorderColor"] = tmmobj[key].mapMarkerTitleBorderColor || tmmobj[key].markerLabelBorderColor || "";
                        tLeavesObj["markerLabelContainerStyle"] = tmmobj[key].mapMarkerTitleContainerStyle || tmmobj[key].markerLabelContainerStyle || "";
                        tLeavesObj["markerLabelBgOpacity"] = tmmobj[key].mapMarkerTitleBgOpacity || tmmobj[key].markerLabelBgOpacity || "";
                        tLeavesObj["markerLabelFontSize"] = tmmobj[key].mapMarkerTitleFontSize || tmmobj[key].markerLabelFontSize || "";
                        tLeavesObj["markerLabelFontFamily"] = tmmobj[key].mapMarkerTitleFontFamily || tmmobj[key].markerLabelFontFamily || "";
                        tLeavesObj["markerLabelBold"] = tmmobj[key].mapMarkerTitleBold || tmmobj[key].markerLabelBold || "";
                        tLeavesObj["markerLabelItalic"] = tmmobj[key].mapMarkerTitleItalic || tmmobj[key].markerLabelItalic || "";
                        tMapLeavesArr.push(tLeavesObj);
                        console.log("getUpdtMapMrkrs: " + tLeavesObj["title"] + " " + tLeavesObj["lat"] + " " + tLeavesObj["lng"]);
                    }
                }
                break;
            case "users":

                for(var key in tmmobj) {
                    if(tmmobj.hasOwnProperty(key)) {
                        if (!JSSHOP.ads.isValidMapLatLng(tmmobj[key].u_loclat, tmmobj[key].u_loclng)) {
                            continue;
                        }
                        tLeavesObj["icn"] = "images/user/sthumb_" + tmmobj[key].u_icon;
                        tLeavesObj["title"] = tmmobj[key].u_name;
                        tLeavesObj["lat"] = tmmobj[key].u_loclat;
                        tLeavesObj["lng"] = tmmobj[key].u_loclng;
                        tLeavesObj["sellerName"] = tmmobj[key].u_name || tmmobj[key].u_fullname || "";
                        tLeavesObj["sellerIcon"] = tmmobj[key].u_icon || "";
                        tLeavesObj["markerLabelText"] = tmmobj[key].mapMarkerTitleText || tmmobj[key].markerLabelText || "";
                        tLeavesObj["markerLabelTextColor"] = tmmobj[key].mapMarkerTitleTextColor || tmmobj[key].markerLabelTextColor || "";
                        tLeavesObj["markerLabelBgColor"] = tmmobj[key].mapMarkerTitleBgColor || tmmobj[key].markerLabelBgColor || "";
                        tLeavesObj["markerLabelBorderColor"] = tmmobj[key].mapMarkerTitleBorderColor || tmmobj[key].markerLabelBorderColor || "";
                        tLeavesObj["markerLabelContainerStyle"] = tmmobj[key].mapMarkerTitleContainerStyle || tmmobj[key].markerLabelContainerStyle || "";
                        tLeavesObj["markerLabelBgOpacity"] = tmmobj[key].mapMarkerTitleBgOpacity || tmmobj[key].markerLabelBgOpacity || "";
                        tLeavesObj["markerLabelFontSize"] = tmmobj[key].mapMarkerTitleFontSize || tmmobj[key].markerLabelFontSize || "";
                        tLeavesObj["markerLabelFontFamily"] = tmmobj[key].mapMarkerTitleFontFamily || tmmobj[key].markerLabelFontFamily || "";
                        tLeavesObj["markerLabelBold"] = tmmobj[key].mapMarkerTitleBold || tmmobj[key].markerLabelBold || "";
                        tLeavesObj["markerLabelItalic"] = tmmobj[key].mapMarkerTitleItalic || tmmobj[key].markerLabelItalic || "";
                        tMapLeavesArr.push(tLeavesObj);
                    }
                }
                break;
        }
        return tMapLeavesArr;
    } catch(e) {
        alert("getUpdtMapMrkrs: " + e);
    }
};

function ensureInlinePTypeTabsFromRenderer(postType) {
    try {
        var dvTip = document.getElementById("dvTipTxt");
        var dvPrev = document.getElementById("dvDemoView");
        if (!dvTip || !dvPrev) {
            return false;
        }
        if (typeof renderInlineTabsForMapOrSwiper == "function") {
            if (!document.getElementById("dvInlinePTypeTabs")) {
                return renderInlineTabsForMapOrSwiper(postType);
            }
            if (postType == "pcarousel" && typeof getInlineSwprSettingsHtml == "function") {
                var swpSettingsPane = document.getElementById("dvInlineSettingsPane");
                if (swpSettingsPane) {
                    swpSettingsPane.innerHTML = getInlineSwprSettingsHtml();
                }
            }
            if (postType == "pmap" && typeof getInlineMapSettingsHtml == "function") {
                var mapSettingsPane = document.getElementById("dvInlineSettingsPane");
                if (mapSettingsPane) {
                    mapSettingsPane.innerHTML = getInlineMapSettingsHtml();
                }
            }
            return true;
        }
    } catch (e) {
        console.log("ensureInlinePTypeTabsFromRenderer: " + e);
    }
    return false;
}

function syncInlinePTypePreviewFromRenderer() {
    if (typeof syncInlinePreviewTab == "function") {
        syncInlinePreviewTab();
        return;
    }
    var tabPrev = document.getElementById("dvInlinePTypePreview");
    var dvPrev = document.getElementById("dvDemoView");
    if (tabPrev && dvPrev) {
        tabPrev.innerHTML = dvPrev.innerHTML;
    }
}

function setInlineDemoViewCaptureMode(postType) {
    try {
        var dvPrev = document.getElementById("dvDemoView");
        if (!dvPrev) {
            return;
        }
        if (!dvPrev.getAttribute("data-incasa-orig-style")) {
            dvPrev.setAttribute("data-incasa-orig-style", dvPrev.getAttribute("style") || "");
        }
        var originalStyle = dvPrev.getAttribute("data-incasa-orig-style") || "";
        var normalizedType = String(postType || "").toLowerCase();
        if (normalizedType == "pmap") {
            // dvPrev.setAttribute("style", originalStyle + ";width:340px;min-width:340px;max-width:340px;height:340px;min-height:340px;max-height:340px;overflow:hidden;margin:5px auto;");
            // The above fixed dimensions caused issues with mobile width that can be smaller than 340px, so switching to a more flexible style that maintains a square aspect ratio while allowing it to scale down on smaller screens with a max width of 340px
             dvPrev.setAttribute("style", originalStyle + ";width:100%;max-width:340px;height:0;padding-bottom:100%;position:relative;overflow:hidden;margin:5px auto;");

            console.log("[MAP-VIDEO] dvDemoView mode: pmap-fixed-340");
        } else {
            dvPrev.setAttribute("style", originalStyle);
            console.log("[MAP-VIDEO] dvDemoView mode: restore-default", { postType: normalizedType || "unknown" });
        }
    } catch (eSetInlineDemoViewCaptureMode) {
        console.log("setInlineDemoViewCaptureMode: " + eSetInlineDemoViewCaptureMode);
    }
}




 JSSHOP.ads.trnsltMapPstObj = function() {
        ensureMapPstForceCanvasRendererField();
     setInlineDemoViewCaptureMode("pmap");
    ensureInlinePTypeTabsFromRenderer("pmap");
     ensureMapPstTypeField();
     ensureMapPstEffectField();
     ensureMapPstFlySpeedField();
     ensureMapPstShowSellerField();
     ensureMapPstAutoPlayField();
     ensureMapPstCaptureFpsField();
     ensureMapPstCaptureIntervalField();
    ensureMapPstCaptureMoveendGateField();
    var mapDebugCounters = {
        source: "",
        scannedProps: 0,
        scannedUsers: 0,
        skippedInvalidLatLng: 0,
        renderedMarkers: 0
    };
    var decodeMapFieldText = JSSHOP.ads.decodeMapFieldText;
    tMapFullObj = {};
    tMapFullObj["leaves"] = [];
    tMapLeavesArr = null;
    tMapLeavesArr = [];


    tSCval = inpMapPstCntnt.value;
    console.log("trnsltMapPstObj.tSCval: " + tSCval);
    if(tSCval == "props") {
        mapDebugCounters.source = "props";
        console.log("trnsltMapPstObj.tSCval: == props" + tSCval);

        tSlctdPrpsArr = [];
        for(var key in currSlctdPrpsObj) {



            if(currSlctdPrpsObj.hasOwnProperty(key)) {
                mapDebugCounters.scannedProps++;
                if (!JSSHOP.ads.isValidMapLatLng(currSlctdPrpsObj[key].ploclat, currSlctdPrpsObj[key].ploclng)) {
                    mapDebugCounters.skippedInvalidLatLng++;
                    continue;
                }

                tLeavesObj = null;
                tLeavesObj = "";
                tLeavesObj = {};
                /*
                tLeavesObj["icn"] = "images/property/s_thumb" + currSlctdPrpsObj[key].pimage;
                if (typeof JSSHOP.ads.getNuMapMarkerIconUrl == "function") {
                    tLeavesObj["icn"] = JSSHOP.ads.getNuMapMarkerIconUrl(tLeavesObj["icn"], "images/logo_small_oct.png");
                }
                */
                lowerSrc = currSlctdPrpsObj[key].pimage;
                if (lowerSrc.indexOf("updt_") != -1) {
                    cleanName = lowerSrc.replace("updt_", "");
                    tLeavesObj["icn"] =  "images/ucontent/" + cleanName;
                } else {
                    tLeavesObj["icn"] = "images/property/s_thumb" + currSlctdPrpsObj[key].pimage;
                }
                // Prefer propdescs title/desc payloads and decode defensively.
                var resolvedPropTitle = decodeMapFieldText(currSlctdPrpsObj[key].pd_prptitle || currSlctdPrpsObj[key].ptitle, "");
                var resolvedPropDesc = decodeMapFieldText(currSlctdPrpsObj[key].pd_prpdesc || currSlctdPrpsObj[key].pdesc, "");
                // Robust fallback logic for marker title (matches getInlineMapMarkerDisplayTitle)
                if (currSlctdPrpsObj[key].mapMarkerTitleText && String(currSlctdPrpsObj[key].mapMarkerTitleText).trim() !== "") {
                                        console.debug("[DEBUG] Using mapMarkerTitleText for marker", key, currSlctdPrpsObj[key].mapMarkerTitleText);
                    tLeavesObj["title"] = String(currSlctdPrpsObj[key].mapMarkerTitleText);
                } else if (resolvedPropTitle && String(resolvedPropTitle).trim() !== "") {
                                        console.debug("[DEBUG] Using resolved prop title for marker", key, resolvedPropTitle);
                    tLeavesObj["title"] = String(resolvedPropTitle);
                } else if (currSlctdPrpsObj[key].cname && String(currSlctdPrpsObj[key].cname).trim() !== "") {
                                        console.debug("[DEBUG] Using cname for marker", key, currSlctdPrpsObj[key].cname);
                                        console.debug("[DEBUG] Using fallback property label for marker", key);
                    tLeavesObj["title"] = String(currSlctdPrpsObj[key].cname);
                } else {
                    tLeavesObj["title"] = "Property " + (tMapLeavesArr.length + 1);
                }
                tLeavesObj["lat"] = currSlctdPrpsObj[key].ploclat;
                tLeavesObj["lng"] = currSlctdPrpsObj[key].ploclng;
                tLeavesObj["price"] = currSlctdPrpsObj[key].price;
                tLeavesObj["prpid"] = currSlctdPrpsObj[key]._id
                tLeavesObj["pdesc"] = resolvedPropDesc;
                tLeavesObj["sellerName"] = currSlctdPrpsObj[key].u_fullname || currSlctdPrpsObj[key].u_name || "";
                tLeavesObj["sellerIcon"] = currSlctdPrpsObj[key].u_icon || "";
                tLeavesObj["markerLabelText"] = currSlctdPrpsObj[key].mapMarkerTitleText || "";
                                console.debug("[DEBUG] Saving marker options for marker", key, {
                                    markerLabelText: tLeavesObj["markerLabelText"],
                                    markerLabelTextColor: currSlctdPrpsObj[key].mapMarkerTitleTextColor,
                                    markerLabelBgColor: currSlctdPrpsObj[key].mapMarkerTitleBgColor,
                                    markerLabelBorderColor: currSlctdPrpsObj[key].mapMarkerTitleBorderColor,
                                    markerLabelContainerStyle: currSlctdPrpsObj[key].mapMarkerTitleContainerStyle,
                                    markerLabelBgOpacity: currSlctdPrpsObj[key].mapMarkerTitleBgOpacity,
                                    markerLabelFontSize: currSlctdPrpsObj[key].mapMarkerTitleFontSize,
                                    markerLabelFontFamily: currSlctdPrpsObj[key].mapMarkerTitleFontFamily,
                                    markerLabelBold: currSlctdPrpsObj[key].mapMarkerTitleBold,
                                    markerLabelItalic: currSlctdPrpsObj[key].mapMarkerTitleItalic
                                });
                tLeavesObj["markerLabelTextColor"] = currSlctdPrpsObj[key].mapMarkerTitleTextColor || "";
                tLeavesObj["markerLabelBgColor"] = currSlctdPrpsObj[key].mapMarkerTitleBgColor || "";
                tLeavesObj["markerLabelBorderColor"] = currSlctdPrpsObj[key].mapMarkerTitleBorderColor || "";
                tLeavesObj["markerLabelContainerStyle"] = currSlctdPrpsObj[key].mapMarkerTitleContainerStyle || "";
                tLeavesObj["markerLabelBgOpacity"] = currSlctdPrpsObj[key].mapMarkerTitleBgOpacity || "";
                tLeavesObj["markerLabelFontSize"] = currSlctdPrpsObj[key].mapMarkerTitleFontSize || "";
                tLeavesObj["markerLabelFontFamily"] = currSlctdPrpsObj[key].mapMarkerTitleFontFamily || "";
                tLeavesObj["markerLabelBold"] = currSlctdPrpsObj[key].mapMarkerTitleBold || "";
                tLeavesObj["markerLabelItalic"] = currSlctdPrpsObj[key].mapMarkerTitleItalic || "";
                tMapLeavesArr.push(tLeavesObj);
                mapDebugCounters.renderedMarkers++;
                // tSlctdPrpsArr.push(currSlctdPrpsObj[key]);
            }
        }
        // tSwprStr = JSSHOP.ads.getSwprPrpStr(tSlctdPrpsArr);
    } else if(tSCval == "users") {
        mapDebugCounters.source = "users";
        console.log("trnsltMapPstObj.tSCval: == users" + tSCval);

        tSlctdUsrsArr = [];
        for(var key in currSlctdUsrObj) {
            if(currSlctdUsrObj.hasOwnProperty(key)) {
                mapDebugCounters.scannedUsers++;
                if (!JSSHOP.ads.isValidMapLatLng(currSlctdUsrObj[key].u_loclat, currSlctdUsrObj[key].u_loclng)) {
                    mapDebugCounters.skippedInvalidLatLng++;
                    continue;
                }
                tLeavesObj = null;
                tLeavesObj = "";
                tLeavesObj = {};
                tLeavesObj["icn"] = "images/user/s_thumb" + currSlctdUsrObj[key].u_icon;
                tLeavesObj["title"] = currSlctdUsrObj[key].u_name || currSlctdUsrObj[key].u_fullname || "User";
                tLeavesObj["lat"] = currSlctdUsrObj[key].u_loclat;
                tLeavesObj["lng"] = currSlctdUsrObj[key].u_loclng;
                tLeavesObj["pdesc"] = currSlctdUsrObj[key].u_header;
                tLeavesObj["sellerName"] = currSlctdUsrObj[key].u_name || currSlctdUsrObj[key].u_fullname || "";
                tLeavesObj["sellerIcon"] = currSlctdUsrObj[key].u_icon || "";
                tLeavesObj["markerLabelText"] = currSlctdUsrObj[key].mapMarkerTitleText || "";
                tLeavesObj["markerLabelTextColor"] = currSlctdUsrObj[key].mapMarkerTitleTextColor || "";
                tLeavesObj["markerLabelBgColor"] = currSlctdUsrObj[key].mapMarkerTitleBgColor || "";
                tLeavesObj["markerLabelBorderColor"] = currSlctdUsrObj[key].mapMarkerTitleBorderColor || "";
                tLeavesObj["markerLabelContainerStyle"] = currSlctdUsrObj[key].mapMarkerTitleContainerStyle || "";
                tLeavesObj["markerLabelBgOpacity"] = currSlctdUsrObj[key].mapMarkerTitleBgOpacity || "";
                tLeavesObj["markerLabelFontSize"] = currSlctdUsrObj[key].mapMarkerTitleFontSize || "";
                tLeavesObj["markerLabelFontFamily"] = currSlctdUsrObj[key].mapMarkerTitleFontFamily || "";
                tLeavesObj["markerLabelBold"] = currSlctdUsrObj[key].mapMarkerTitleBold || "";
                tLeavesObj["markerLabelItalic"] = currSlctdUsrObj[key].mapMarkerTitleItalic || "";
                tMapLeavesArr.push(tLeavesObj);
                mapDebugCounters.renderedMarkers++;

                // tSlctdUsrsArr.push(currSlctdUsrObj[key]);
            }
        }
       //  tSwprStr = JSSHOP.ads.getSwiperUStr(tSlctdUsrsArr);

    }  // end if
    console.log("[MAP_DEBUG][trnsltMapPstObj]", mapDebugCounters);
    // set the tmp_p_title input to the title of the first marker
    if(tMapLeavesArr.length > 0) {
        tSPIttlStr = decodeMapFieldText(tMapLeavesArr[0].title, "Map View");
        document.getElementById("tmp_p_title").value = tSPIttlStr
    } else {
        document.getElementById("tmp_p_title").value = "Map View";
    }
        // if tMapLeavesArr.length > 0, set tmp_p_title to a concatenation of all marker titles with 20 char limit on each title and separated by comma
        if(tMapLeavesArr.length > 1) {
            tAllTitlesStr = "";
            for(var i = 0; i < tMapLeavesArr.length; i++) {
                console.log("Marker " + i + " title before decoding: " + tMapLeavesArr[i].title);
                tAllTitlesStr += decodeMapFieldText(tMapLeavesArr[i].title, "Map View").substring(0, 20);
                if(i < tMapLeavesArr.length - 1) {
                    tAllTitlesStr += "... , ";
                }
            }

            document.getElementById("tmp_p_title").value = tAllTitlesStr;
        }

        // set the tinymce editor to the description of the first object in currSlctdPrpsObj or currSlctdUsrObj
        // if tMapLeavesArr.length > 0, set the editor to the description of the first object in currSlctdPrpsObj or currSlctdUsrObj
        // if tMapLeavesArr.length == 0, set the editor to "Map View"
        tDescFlSTr = "";
        if(tMapLeavesArr.length > 0) {
            for(var i = 0; i < tMapLeavesArr.length; i++) {
         tDescFlSTr += decodeMapFieldText(tMapLeavesArr[i].title, "Map View").substring(0, 100) ;
            }
        tinyMCE.activeEditor.setContent(tDescFlSTr);
    } else {
        tinyMCE.activeEditor.setContent("Map View");
    }
    // if more tnan one marker, set the editor to a concatenation of all marker descriptions with 100 char limit on each description and separated by <hr>
    if(tMapLeavesArr.length > 1) {
        tAllDescStr = "";
        for(var i = 0; i < tMapLeavesArr.length; i++) {
            // add title before description
            tAllDescStr += "<h3>" + decodeMapFieldText(tMapLeavesArr[i].title, "Map View").substring(0, 80) + "</h3>";
            // link the title to the property if it exists
            if(tMapLeavesArr[i].prpid) {
                tAllDescStr += "<h3><a href=\"javascript:eindex('aa-show-prop','pid=aa-show-prop&prpid=" + tMapLeavesArr[i].prpid + "');\">" + decodeMapFieldText(tMapLeavesArr[i].title, "Map View").substring(0, 80) + "</a></h3>";
            }
            tAllDescStr += decodeMapFieldText(tMapLeavesArr[i].pdesc, "Map View").substring(0, 100);
            // strip any html tags from tAllDescStr
            // tAllDescStr += tZAllDescStr.replace(/<\/?[^>]+(>|$)/g, "");
            // add the price if it exists
            if(tMapLeavesArr[i].price) {
                tAllDescStr += "Price: " + tMapLeavesArr[i].price;
            }
            if(i < tMapLeavesArr.length - 1) {
                tAllDescStr += "<hr>";
            }
        }
        console.log("trnsltMapPstObj.tAllDescStr: " + tAllDescStr);
        tinyMCE.activeEditor.setContent(tAllDescStr);
    }
    // create random 5 char string for map div id
    tRansSTr = Math.random().toString(36).substring(2, 7);
    tMapFullObj["mrkrs"] = tMapLeavesArr;
    tMapFullObj["mapType"] = getMapPstTypeValue();
    tMapFullObj["mapEffect"] = getMapPstEffectValue();
    tMapFullObj["mapFlySpeed"] = getMapPstFlySpeedValue();
    tMapFullObj["showSellerBadge"] = getMapPstShowSellerValue();
    tMapFullObj["autoPlay"] = getMapPstAutoPlayValue();
    tMapFullObj["captureFps"] = getMapPstCaptureFpsValue();
    tMapFullObj["captureFrameIntervalMs"] = getMapPstCaptureIntervalValue();
    tMapFullObj["captureUseMoveendGate"] = getMapPstCaptureMoveendGateValue();
    tMapFullObj["forceCanvasRenderer"] = getMapPstForceCanvasRendererValue();
    tMapFullObj["sellerName"] = (typeof u_fullname != "undefined" && u_fullname && u_fullname.value) ? u_fullname.value : "";
    tMapFullObj["sellerIcon"] = (typeof u_icon != "undefined" && u_icon && u_icon.value) ? u_icon.value : "";
    tMapFullObj["sellerUid"] = (typeof quid != "undefined") ? String(quid) : "";
    tMapFullObj["mdvid"] = "dvMap" + tRansSTr;
    tNewDvStr = "<div id=\"dvMap" + tRansSTr + "\" style=\"width:100%;height:100%;min-height:340px;\"></div>";

    document.getElementById("dvDemoView").innerHTML = "";
    document.getElementById("dvDemoView").innerHTML = tNewDvStr;
    setTimeout(function() { syncInlinePTypePreviewFromRenderer(); }, 80);
    setTimeout(function() {doNuSpinSet("dvMap" + tRansSTr, "small", null, "...");}, 200);
    setTimeout(function() {JSSHOP.ads.doNuGenMap(tMapFullObj, "dvMap" + tRansSTr) }, 1000);
    setTimeout(function() { syncInlinePTypePreviewFromRenderer(); }, 1200);
    // document.getElementById("dvDemoView").innerHTML = tSwprStr;
};


JSSHOP.ads.trnsltSwiperObj = function() {
    setInlineDemoViewCaptureMode("pcarousel");
    ensureInlinePTypeTabsFromRenderer("pcarousel");
    tSwprTtlStr = "";
    tSwprDscStr = "";
    tSCval = inpSwprCntnt.value;
    if(tSCval == "props") {
      tSlctdPrpsArr = [];
        for(var key in currSlctdPrpsObj) {
            if(currSlctdPrpsObj.hasOwnProperty(key)) {
                tSlctdPrpsArr.push(currSlctdPrpsObj[key]);
                tSwprTtlStr += LZString.decompressFromEncodedURIComponent(currSlctdPrpsObj[key].ptitle).substring(0, 20);
                tSwprTtlStr += ", ";
                if(currSlctdPrpsObj[key].pdesc) {
                    console.log("trnsltSwiperObj.pdesc: " + currSlctdPrpsObj[key].pdesc);
                    tTWIUYPdesc = currSlctdPrpsObj[key].pdesc;
                    tUnzpPstr = LZString.decompressFromEncodedURIComponent(tTWIUYPdesc);
                    if(tUnzpPstr.length > 100) {
                    tSwprDscStr += tUnzpPstr.substring(0, 100) + "...";
                    } else {
                    tSwprDscStr += tUnzpPstr;
                    }
                } else {
                tSwprDscStr += "No description available.";
                }
                tSwprDscStr += "<hr>";

            }
        }
        tSwprStr = JSSHOP.ads.getNuSwprPrpStr("cls" + currSlctdPrpsObj[key]._id, tSlctdPrpsArr);
        // set the tmp_p_title input to the concatenated titles without the last comma and space
        document.getElementById("tmp_p_title").value = tSwprTtlStr.slice(0, -2);
        tinyMCE.activeEditor.setContent(tSwprDscStr);
    } else if(tSCval == "users") {
        tSlctdUsrsArr = [];
        for(var key in currSlctdUsrObj) {
            if(currSlctdUsrObj.hasOwnProperty(key)) {
                tSlctdUsrsArr.push(currSlctdUsrObj[key]);
            }
        }
        tSwprStr = JSSHOP.ads.getSwiperUStr(tSlctdUsrsArr);
    }
    document.getElementById("dvDemoView").innerHTML = tSwprStr;
        syncInlinePTypePreviewFromRenderer();

      // currSlctdPrpsObj;

        // currPstsPrpsArr

 /*
 <input type="hidden" id="inpSwprType" name="inpSwprType" value="slide">
<input type="hidden" id="inpSwprNav" name="inpSwprNav" value="yes">
<input type="hidden" id="inpSwprPag" name="inpSwprPag" value="yes">
<input type="hidden" id="inpSwprLoop" name="inpSwprLoop" value="yes">
*/

/*
        tSwpObj["cls"] = ".swiper-container";
                    tSwpObj["spv"] = 3;
            tSwpObj["spaceBetween"] = 10;
            tSwpObj["loop"] = false;
            tSwpObj["createElements"] = true;
            tSwpObj["height"] = 250;
            tSwpObj["autoplay"] = 2500;
            tSwpObj["autoplayDisableOnInteraction"] = false;
            tSwpObj["pagination"] = ".swiper-pagination";
            tSwpObj["paginationClickable"] = true;
            tSwpObj["nextButton"] = ".swiper-button-next";
            tSwpObj["prevButton"] = ".swiper-button-prev";
            tSwpObj["grabCursor"] = true;

            effect: 'coverflow',
            coverflow: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows : true
            },
            effect: 'cube',
            cube: {
                slideShadows: true,
                shadow: true,
                shadowOffset: 20,
                shadowScale: 0.94
            },
            effect: 'fade',
            fade: {
                crossFade: true
            },
            effect: 'flip',
            flip: {
                slideShadows: true,
                limitRotation: true
            },
            effect: 'slide',
            slide: {
                slideShadows: true,
                limitRotation: true
            },
            effect: 'creative',
            creative: {
                prev: '.swiper-button-prev',
                next: '.swiper-button-next',
                pagination: '.swiper-pagination',
                paginationClickable: true
            },

            */
    try {
        tEffectsObj = {};
        tEffectsObj["cube"] = {"rotate": 50, "stretch": 0, "depth": 100, "modifier": 1, "slideShadows": true};
        tEffectsObj["fade"] = {"crossFade": true};
        tEffectsObj["flip"] = {"slideShadows": true, "limitRotation": true};
        tEffectsObj["slide"] = {"slideShadows": true, "limitRotation": true};
        tEffectsObj["creative"] = {"prev": ".swiper-button-prev", "next": ".swiper-button-next", "pagination": ".swiper-pagination", "paginationClickable": true};
        tEffectsObj["coverflow"] = {"rotate": 50, "stretch": 0, "depth": 100, "modifier": 1, "slideShadows": true};
       if(inpSwprType.value == "slide" || inpSwprType.value == "fade") {
        inpSwprSPV.value = 2;
       } else {
        inpSwprSPV.value = 1;
         }
        tSwpObj = {};
        tSwpObj["cls"] = ".swiper";
        tSwpObj["slidesPerView"] = inpSwprSPV.value;
        // tSwpObj["spaceBetween"] = inpSwprSB.value;
        tSwpObj["loop"] = inpSwprLoop.value;
        tSwpObj["createElements"] = inpSwprCrEl.value;
        // tSwpObj["height"] = inpSwprH.value;
        // tSwpObj["autoplay"] = inpSwprAP.value;
        // tSwpObj["autoplayDisableOnInteraction"] = false;
        if(inpSwprPag.value == "true") {
         tSwpObj["pagination"] = {el: ".swiper-pagination", clickable: true};
        }
        // tSwpObj["paginationClickable"] = true;
        if(inpSwprNav.value == "true") {
        tSwpObj["navigation"] = {nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"};
        }
        // tSwpObj["nextButton"] = ".swiper-button-next";
        // tSwpObj["prevButton"] = ".swiper-button-prev";
        /// tSwpObj["grabCursor"] = true;
        tSwpObj["effect"] = inpSwprType.value;
        tSwpObj[inpSwprType.value] = tEffectsObj[inpSwprType.value];
        currSwpCnfgObj = tSwpObj;
        // JSSHOP.ads.loadNuSwiperObj(tSwpObj);
        setTimeout(function() { JSSHOP.ads.loadNuSwiperObj(tSwpObj); }, 1000);
        setTimeout(function() { syncInlinePTypePreviewFromRenderer(); }, 1100);
    } catch(e) {
        console.log("trnsltSwiperObj: " + e);
    }
};

JSSHOP.ads.loadNuSwiperArr = function(tSwpArr) {
    try {
        console.log("loadNuSwiperArr: " + JSON.stringify(tSwpArr));
        intSAL = tSwpArr.length;
        for(iqswa = 0; iqswa < intSAL; iqswa++) {
            tSWARROb = null;
            tSWARROb = {};
            tSWARROb = tSwpArr[iqswa];
            taswapr = new Swiper(tSWARROb.cls, tSWARROb);
            // JSSHOP.ads.loadNuSwiperObj(tSWARROb);
        }
    } catch(e) {
        console.log("loadNuSwiperArr: " + e);
    }
};
JSSHOP.ads.loadNuSwiperObj = function(tSwpbj) {
    try {
        console.log("loadNuSwiperObj: " + JSON.stringify(tSwpbj));

        taswpr = new Swiper(tSwpbj.cls, tSwpbj);
    } catch(e) {
        console.log("loadNuSwiperObj: " + e);
    }
};

JSSHOP.ads.loadSwiperObj = function(tSwpLoadObj) {
    try {



    var swiper = new Swiper(tSwpLoadObj.cls, {
        slidesPerView: tSwpLoadObj.spv,
        spaceBetween: tSwpLoadObj.spaceBetween,
        loop: tSwpLoadObj.loop,
        createElements: tSwpLoadObj.createElements,
        height: tSwpLoadObj.height,
        pagination: {
            el: tSwpLoadObj.pagination,
            clickable: tSwpLoadObj.paginationClickable,
        } ,
        navigation: {
        nextEl:  tSwpLoadObj.nextButton,
        prevEl:  tSwpLoadObj.prevButton,
        },
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                  slidesPerView: 3,
                  spaceBetween: 20
                },
                // when window width is >= 480px
                480: {
                  slidesPerView: 4,
                  spaceBetween: 30
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 5,
                  spaceBetween: 40
                }
              },
              effect: 'cube',
              cube: {
                  slideShadows: true,
                  shadow: true,
                  shadowOffset: 20,
                  shadowScale: 0.94
              },
    });

    } catch(e) {
        console.log("loadSwiperObj: " + e);
    }
};



JSSHOP.ads.getPPlgIcnStr = function(tPPICnt, tPPIClass, tPPICB) {
    tNPPICnt = 4;
    tMaxPPI = 12;
    tNPPIClass = "material-icons txtClrTtl";
    tPPICB = "doNada";
 // create an array of 12 beginning with "p1" and ending with "p12"
  tPPICarr = ["p1","p2","p3","p4","p5","p6","p7","p8","p9","p10","p11","p12"];
    tPPICstr = "";
    tFPCArInt = 0;

    tFlRanSTr = "";
    tPYS = "";
    // select 3 unique random indexes from the array currPPrtCatArr


    tFPCArInt = 0;
    for(i = 0; i < 30; i++) {
    tRanNum = Math.random() * tPPICarr.length;
    tLpdIDstr = tPPICarr[Math.floor(tRanNum)];
    if(tFlRanSTr.indexOf(tLpdIDstr) != -1) {
    tdds = "noQvalue";
    } else {
    tFPCArInt++;

    tFlRanSTr += tLpdIDstr + " ";
    // tFlRanSTr += new img tag with tLpdIDstr as src and tPPIClass as class
    tPPICstr = "<img src=\"images/pimgs/" + tLpdIDstr + ".jpg\" class=\"" + tPPIClass + "\" onclick=\"" + tPPICB + "\" style=\"max-width:30px\">";

    tPYS += tPPICstr + " ";
    if(tFPCArInt > tPPICnt) {
        i = 30;
    }
    }
    }
    return tPYS;
};

JSSHOP.ads.doLocalShops = function(tLSlimit, tLSorder, tLtr, tDLScb){
    tmpDOs = null;
    tmpDOs = {};
    tmpDOs["l"] = tLSlimit;
    tmpDOs["o"] = tLSorder;
    tCntryAb = "ES";
    tMCstr = "%pieza%";
    tUtdzip = 50;
    tLSCatID = 101;
    if(currUrlArr.make) {
        tMCstr = "%" + currUrlArr.make + "%";
        }
        if(usrlang == "pt_pt") {
            tccode = 351;

        } else {
            tccode = 34;
        // tmpDOs["ws"] = "where c_ccode=? and c_email like ?";
        // tmpDOs["wa"] = [usrcc,'%@%'];

        }

        if(usrlang == "pt_pt") {
            tCntryAb = "PT";
        }
        if(pid.indexOf("psearch") != -1) {
            tLSCatID = 202;
        }



if(JSSHOP.ads.getPrtsPrefCC("qloc") == "noQvalue") {

tmpDOs["ws"] = "where c_ccode=? and c_rtype = ? and c_category = ?";
tmpDOs["wa"] = [tccode,5,tLSCatID];
tmpDOs["l"] = 10;
tmpDOs["o"] = "c_revs desc";


} else {

    tUtdzip = JSSHOP.ads.getPrtsPrefCC("qloc");
    if(tUtdzip.indexOf("|") != -1) {
        tstrLat = msw.split("|")[0];
                    tstrLng = msw.split("|")[1];
                    // convert tstrLat to float and tstrLng to float
                    tfloatLat = parseFloat(tstrLat);
                    tfloatLong = parseFloat(tstrLng);

                    // get a 20km radius from the lat lng
                    tmpDOs["ws"] = "where c_rtype=? and c_ccode =?  and c_category = ? and c_loc_lat > ? and c_loc_lat < ? and c_loc_lng > ? and c_loc_lng < ?";
                    tmpDOs["wa"] = [5,tccode,tLSCatID,tfloatLat - 0.1,tfloatLat + 0.3,tfloatLong - 0.1,tfloatLong + 0.3];
                    tmpDOs["l"] = 100;
                    tmpDOs["o"] = "c_tel asc";
    } else {
    tsUbdzip = tUtdzip.substring(0, 2);
    tmpDOs["ws"] = "where c_ccode=? and c_rtype = ? and c_category = ? and (c_zipcode like ? or c_zipcode = ?)";
tmpDOs["wa"] = [tccode,5,tLSCatID,tzsw,tUtdzip];
tmpDOs["l"] = 100;
tmpDOs["o"] = "c_location asc";


    }


}



oi = getNuDBFnvp("qco", 5, null, tmpDOs);
console.log("doLocalShops: " + oi["rq"]);

doQComm(oi["rq"], null, tDLScb);
};

JSSHOP.ads.getLocalShops = function(theElem, theSrchResp, marble){
console.log("getLocalShops: " + theSrchResp);
tmpTDQI = document.getElementById("tdNuSearchRes");
tStrHtml = "";
tmpTDQI.innerHTML = "";
if(theSrchResp.indexOf("_id") != -1) {

tStrHtml =  JSSHOP.ads.doNuGenericRes("shops", theSrchResp, marble);
console.log("getLocalShops.tStrHtml: " + tStrHtml);

} else { // response has no items
tStrHtml = "<div class=\"txtBold txtClrHdr\">Search returned 0 results</div>";
}
tHdrStrHtml = "<div class=\"txtSmall txtBold txtClrDlg\" style=\"text-align:left\">Local...</div>";

newel = document.createElement('div');
tCCStrHtml = "<div class=\"rtable brdrClrHdr\" style=\"max-width:90%;margin: 0 auto\" align=\"center\">" + tHdrStrHtml + tStrHtml + "</div>";
newel.innerHTML = tCCStrHtml;
tmpTDQI.insertBefore(newel, tmpTDQI.firstChild);

// tmpTDQI.appendChild(newel);

};



 // slmtable bkgdClrWhite brdrClrRed txtBold txtClrRed crsrPointer

JSSHOP.ads.doGenericPlug = function(tPtype, tPresQty, tPtDiv) {
console.log("JSSHOP.ads.doGenericPlug: " + tPtype + " " + tPresQty + " " + tPtDiv);
try {

    // imgPLicon.src = "logoicon.png";
fretPlugStr = "...";
retPlugStr = "...";
tcanShowPlug = "yes";
switch(pid) {
case "index_main":
    tFpharr = [];
tFpharr.push(cstmStr["prop1"]);
tFpharr.push(cstmStr["prop2"]);
tFpharr.push(cstmStr["prop3"]);
ppshfled = shuffle(tFpharr);
ppslectted = ppshfled.slice(0, 1);
retPlugStr += ppslectted.join(" ");
  //   dvPartLicon.innerHTML =  "<i class=\"material-icons txtClrHdr\" style=\"margin-top: 5px;font-size:27px;margin-right:6px;\" alt=\"account\" title=\"account\"> &#xe851;</i>";
// images/logo/logo-small.png
 // imgPLicon.src = "images/logo/logo-small.png";
  //   retPlugStr = "<div class=\"txtSmall\">" + stxt[63] + "</div>";
  dvPartLicon.innerHTML =  "<div class=\"bkgdClrHdr\" style=\"max-width:40px;\"><img src=\"images/misc/thumb_logo_ai_trimmed.gif\"  alt=\"logo\" title=\"logo\" class=\"icnRnd22\"></div>";
fretPlugStr = "<div class=\"txtSmall\">" + retPlugStr + "</div>";
// tcanShowPlug = "no";
break;
case "aa-contactus":
fretPlugStr = "<div class=\"txtSmall\">Contacte-nos</div>";
break;
case "aa-contact-us":
    dvPartLicon.innerHTML =  "<i class=\"material-icons txtClrHdr\" style=\"margin-top: 5px;font-size:27px;margin-right:6px;\" alt=\"account\" title=\"account\"> &#xe8b6;</i>";
fretPlugStr = "<div class=\"txtSmall\">" + stxt[912] + "</div>";
// set doc title to stxt[912]
document.title = stxt[912];
break;

case "aa-show-featured":
// imgPLicon.src = "logoicon.png";
dvPartLicon.innerHTML =  "<img src=\"images/logo/logo-small.png\" style=\"margin-top: 5px;max-height:30px;max-width:30px;\" alt=\"account\" title=\"account\" class=\"account\">";
fretPlugStr = "<div class=\"txtSmall\">" + stxt[940] + "</div>";
document.title = stxt[940];
break;
case "aa-show-search":
    dvPartLicon.innerHTML =  "<i class=\"material-icons txtClrHdr\" style=\"margin-top: 5px;font-size:27px;margin-right:6px;\" alt=\"account\" title=\"account\"> &#xe8b6;</i>";
    fretPlugStr = "<div class=\"txtSmall\">" + stxt[936] + "</div>";
    document.title = stxt[936];
break;
case "aa-show-user":
    dvPartLicon.innerHTML =  "<i class=\"material-icons txtClrHdr\" style=\"margin-top: 5px;font-size:27px;margin-right:6px;\" alt=\"account\" title=\"account\"> &#xe7fd;</i>";
    fretPlugStr = "<div class=\"txtSmall\">" + stxt[903] + "</div>";
    // JSSHOP.ui.showHideElement("dvTopHdrTtl", "hide");
    document.title = stxt[903];
    break;

case "aa-edit-user":
// imgPLicon.src = "logoicon.png";
dvPartLicon.innerHTML =  "<i class=\"material-icons txtClrHdr\" style=\"margin-top: 5px;font-size:27px;margin-right:6px;\" alt=\"search\" title=\"search\"> &#xe851;</i>";
fretPlugStr = "<div class=\"txtSmall\">" + stxt[825] + "</div>";
// fretPlugStr = doNuCollsLoad("links");
    document.title = stxt[825];
break;
case "aa-remove":
// imgPLicon.src = "logoicon.png";
fretPlugStr = "<div class=\"txtSmall\">" + stxt[815] + "</div>";
document.title = stxt[815];
break;
case "aa-edit-prop":
    tDGPstr = "";
tDGPstr = stxt[985];
if(currUrlArr.prpid) {
    tDGPstr += " - ID: " + currUrlArr.prpid;
}
// imgPLicon.src = "logoicon.png";
dvPartLicon.innerHTML =  "<span  style=\"color:rgba(41,71,89,.25);text-shadow: 0 0 0 rgba(41,71,89,.65);font-size:27px;\" alt=\"apartment\" title=\"apartment\">&#x1F3D9;</span>";
fretPlugStr = "<div class=\"txtSmall\">" + tDGPstr + "</div>";
// fretPlugStr = doNuCollsLoad("links");
document.title = tDGPstr;
break;
case "aa-add-prop":
// imgPLicon.src = "logoicon.png";
dvPartLicon.innerHTML =  "<span  style=\"color:rgba(41,71,89,.25);text-shadow: 0 0 0 rgba(41,71,89,.65);font-size:27px;vertical-align: middle;\" alt=\"apartment\" title=\"apartment\">&#x1F3D9;</span>";
fretPlugStr = "<div class=\"txtSmall\" style=\"vertical-align: middle;\"><i class=\"menu-material-icons txtClrHdr\" style=\"vertical-align: middle;\" alt=\"add\" title=\"add\"> &#xe145;</i>" + stxt[906] + "</div>";
// fretPlugStr = doNuCollsLoad("links");
document.title = stxt[906];
break;
case "aa-edit-post":
// imgPLicon.src = "logoicon.png";
tDGPstr = "";
tDGPstr = stxt[400];
if(currUrlArr.tpstid) {
    tDGPstr += " - ID: " + currUrlArr.tpstid;
}
dvPartLicon.innerHTML =  "<i class=\"material-icons-two-tone txtClrHdr\" style=\"margin-top: 5px;font-size:27px;margin-right:6px;font-weight: bold;font-size: 27px;vertical-align: middle;\" alt=\"search\" title=\"search\"> &#xe871;</i>";
fretPlugStr = "<div class=\"txtSmall\">" + tDGPstr + "</div>";
document.title = tDGPstr;
break;
case "aa-add-post":
// imgPLicon.src = "logoicon.png";
dvPartLicon.innerHTML =  "<i class=\"material-icons-two-tone txtClrHdr\" style=\"margin-top: 5px;font-size:27px;margin-right:6px;font-weight: bold;font-size: 27px;vertical-align: middle;\" alt=\"search\" title=\"search\"> &#xe871;</i>";
fretPlugStr = "<div  style=\"vertical-align: middle;\"><i class=\"menu-material-icons txtClrHdr\" style=\"vertical-align: middle;\" alt=\"add\" title=\"add\"> &#xe145;</i>" + stxt[401] + "</div>";
document.title = stxt[401];
break;
case "aa-edit-posts":
// imgPLicon.src = "logoicon.png";
dvPartLicon.innerHTML =  "<i class=\"material-icons-two-tone txtClrHdr\" style=\"margin-top: 5px;font-size:27px;margin-right:6px;font-weight: bold;font-size: 27px;vertical-align: middle;\" alt=\"search\" title=\"search\"> &#xe871;</i>";
fretPlugStr = "<div class=\"txtSmall\">" + stxt[402] + "</div>";
document.title = stxt[402];
// fretPlugStr = doNuCollsLoad("links");
break;
case "aa-show-update":
// imgPLicon.src = "logoicon.png";
dvPartLicon.innerHTML =  "<i class=\"material-icons-two-tone txtClrHdr\" style=\"margin-top: 5px;font-size:27px;margin-right:6px;font-weight: bold;font-size: 27px;vertical-align: middle;\" alt=\"search\" title=\"search\"> &#xe871;</i>";
fretPlugStr = "<div class=\"txtSmall\">" + stxt[100] + "</div>";
document.title = stxt[100];
// fretPlugStr = doNuCollsLoad("links");
break;
case "aa-edit-uprops":
case "aa-edit-aprops":
// imgPLicon.src = "logoicon.png";
// <span  style="color:rgba(41,71,89,.25);text-shadow: 0 0 0 rgba(41,71,89,.65);font-size:36px;">&#x1F3D9;</span>
dvPartLicon.innerHTML =  "<span  style=\"color:rgba(41,71,89,.25);text-shadow: 0 0 0 rgba(41,71,89,.65);font-size:27px;\" alt=\"apartment\" title=\"apartment\">&#x1F3D9;</span>";
fretPlugStr = "<div class=\"txtSmall\">" + stxt[634] + "</div>";
// fretPlugStr = doNuCollsLoad("links");
document.title = stxt[634];
break;
case "aa-show-messages":
// imgPLicon.src = "logoicon.png";
dvPartLicon.innerHTML =  "<i class=\"material-icons txtClrHdr\" style=\"margin-top: 5px;font-size:27px;margin-right:6px;\" alt=\"messages\" title=\"search\"> &#57527;</i>";
fretPlugStr = "<div class=\"txtSmall\">" + stxt[710] + "</div>";
document.title = stxt[710];
break;
case "aa-show-prop":
// imgPLicon.src = "logoicon.png";
dvPartLicon.innerHTML =  "<span  style=\"color:rgba(41,71,89,.25);text-shadow: 0 0 0 rgba(41,71,89,.65);font-size:27px;\" alt=\"apartment\" title=\"apartment\">&#x1F3D9;</span>";
fretPlugStr = "<div class=\"txtSmall\">" + stxt[118] + "</div>";
document.title = stxt[118];
// fretPlugStr = doNuCollsLoad("links");
break;

case "index_main":
// imgPLicon.src = "logoicon.png";
dvPartLicon.innerHTML =  "<img src=\"images/logo/logo-small.png\" style=\"margin-top: 5px;max-height:30px;max-width:27px;\" alt=\"account\" title=\"account\" class=\"account\">";
// fretPlugStr = "<div class=\"txtSmall\">" + shopTitle + "</div>";

// Need a this is demo page for the software at github.com
/*
This is a demo site for the PropTech software available at:
Project: PropTech
Code: https://github.com/tumbleDryCode/proptech
Discussion: https://github.com/tumbleDryCode/proptech/discussions
Issues: https://github.com/tumbleDryCode/proptech/issues
*/
fretPlugStr = "<div class=\"txtSmall\">This is a demo site for the PropTech software available at:<br><a href=\"https://github.com/tumbleDryCode/proptech\" target=\"_blank\">https://github.com/tumbleDryCode/proptech</a></div>"; 

// fretPlugStr = doNuCollsLoad("links");
document.title = shopTitle;
break;
case "aa-show-aboutus":
 dvPartLicon.innerHTML =  "<img src=\"images/misc/thumb_logo_ai_trimmed.gif\" style=\"margin-top: 5px;max-height:30px;max-width:30px;\" alt=\"about us\" title=\"about us\" class=\"account\">";
fretPlugStr = "<div class=\"txtSmall\">" + stxt[913] + "</div>";
document.title = stxt[913];
break;
default:


fretPlugStr = "<div class=\"txtSmall\">.... </div>";
document.title = "....";

// fretPlugStr = "<div class=\"txtSmall\">Default</div>";

break;
}


console.log("JSSHOP.ads.doGenericPlug: " + fretPlugStr);
if((document.getElementById(tPtDiv))  && (tcanShowPlug == "yes")){
document.getElementById(tPtDiv).innerHTML = fretPlugStr;
}
} catch(e) {
alert("doGenericPlug: " + e);
}
};


function getLvsTglBox() {
    tIMLStglbObj = null;
    tIMLStglbObj = "";
    tIMLStglbObj = JSSHOP.ui.nTglBxOb();
    tIMLStglbObj["ttl"] = stxt[200]; // the toggle box title
    tIMLStglbObj["dvid"] = "smap"; // the toggle box div id
    tIMLStglbObj["content"] = "hahahahah<br>hahahahah<br>hahahahah<br>hahahahah<br>hahahahah<br>hahahahah<br>hahahahah<br>hahahahah<br>hahahahah<br>hahahahah<br>hahahahah<br>hahahahah<br>"; // the toggle that goes in above toggle div
    tIMLStglbObj["cntntFnc"] = "getLeaves" // the toggle that goes in above toggle div
    tIMLStglbObj["btn"] = "btnTglLvs" // the toogle btn id
    tIMLStglbObj["pref"] = "tglLvsBx"; // the toogle pref id saved in cookie
    tIMLStglbObj["tbtmpCB"] = "noQvalue"; // null function as callback
    tIMLStglbObj["icn"] = "&#xe3ec;"; // the icon
    tIMLStglbObj["pnid"] = "includedContent"; // the parent node, will just return text if noQvalue
    tIMLStglbObj["appnd"] = "y"; // the parent node, will just return text if noQvalue
    tIMLStglbObj["cut"] = 300;
    JSSHOP.ui.doTglBox(tIMLStglbObj);
}


function getLeaves() {
    // document.getElementById("smap").innerHTML = "";
    // document.getElementById("smap").style = "min-height:300px";
    // document.getElementById("smap").innerHTML = "";
    iti = 0;



    // check if L.map already exists


        var map = L.map('smap', JSSHOP.ads.getLeafletCanvasMapOptions({})).setView([39.0667, -8.6167], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        var bounds = L.latLngBounds() // Instantiate LatLngBounds object
        var LeafIcon = L.Icon.extend({
            options: {

                iconSize:     [42, 42],



                popupAnchor:  [-3, -16]
            }
        });

        if(currShopsArr.length > 0) {
            // alert(b);
            tPArr  = null;
            tPArr = currShopsArr;

    while(iti < tPArr.length) {
      ts = tPArr[iti];
      tIcnQcStr = "images/logo_small_green_oct.png"
      tLatQcStr = ts.ploclat;
      tLngQcStr = ts.ploclng;
     tLatQcStr = String(tLatQcStr); // convert to string
        tLngQcStr = String(tLngQcStr);
      // convert to float
        tLatQcFlt = parseFloat(tLatQcStr);
        tLngQcFlt = parseFloat(tLngQcStr);
        ttImgstr = ts.pimage;
        // console.log("getLeaves.ts.cccd: " + ts.cccd + " " + ttImgstr + " " + ts.c_name);


        if(ttImgstr.indexOf(".") != -1) {
      tIcnQcStr = currPrpImgsFldr + "/"  + ts.pimage;
        } else {
        tIcnQcStr = "images/logo_small_oct.png";
        }

      ttSSurl = "javascript:JSSHOP.ads.doGenPrpPop(" + iti + ");";

      tCnameQcStr = "<a href=\"" + ttSSurl + "\">" + ts.c_name + "</a>";
       tLatQcStr =  String(tLatQcFlt);
      tLngQcStr = String(tLngQcFlt);
      console.log("getLeaves: " + tLatQcStr + " " + tLngQcStr + " " + tIcnQcStr + " " + tCnameQcStr);
      try {
    // check if lat and lng are floats
    if((tLatQcStr.indexOf(".") != -1) && (tLngQcStr.indexOf(".") != -1))  {
      // if((tLatQcStr.indexOf(".") != -1) && (tLngQcStr.indexOf(".") != -1))  {
        console.log("getLeaves: " + tLatQcStr + " " + tLngQcStr);

    tPAObj = tPArr[iti];
    lat_lng = [tLatQcStr,tLngQcStr];
    tImSStr = tIcnQcStr;
    redIcon = new LeafIcon({iconUrl: tImSStr});
    // bindPopup('<span class="txtBold txtClrRed">' + tCnameQcStr + '</span>').
    // add an optionid to the marker
    // set marker options
    mRed = L.marker([tLatQcStr,tLngQcStr], {icon: redIcon, iti: iti}).addTo(map).on('click', function(e) {
        // print out the e.options.iti
        console.log("L.marker iti: " + JSON.stringify(e.target.options.iti));
        doGenPrpPop(e.target.options.iti);

    });

    bounds.extend(lat_lng);
      }
      } catch(e) {
      console.log("getLeaves.ERROR: " + e);
      }
    iti++;
    }
     map.fitBounds(bounds);

    }

    // add a long press listener to the map
    map.on('contextmenu', function(e) {

          markers = [];
        // add a marker to show where you clicked.
          markers.push(L.marker(e.latlng).addTo(map));
        // get the coordinates of the point you clicked
        var coords = e.latlng;
        // get the lat and lng values
        var lat = coords.lat;
        var lng = coords.lng;
        //
        JSSHOP.ads.setPrtsPrefCC("qloc", lat + "|" + lng);
        if(pid == "aa-show-msearch") {
            document.getElementById('includedShops').innerHTML='';window['sw']=null;currUrlArr.sw=null;JSSHOP.shared.setPrtSvsPnl('dvGetSvcsLnk', function() {eindex('aa-show-msearch','pid=aa-show-msearch&st=main')});
        } else if(pid == "aa-show-psearch") {
            document.getElementById('includedShops').innerHTML='';window['sw']=null;currUrlArr.sw=null;JSSHOP.shared.setPrtSvsPnl('dvGetPLnk', function() {eindex('aa-show-psearch','pid=aa-show-psearch&st=main')});
        } else {
            document.getElementById('includedShops').innerHTML='This is odd';
        }
       //  eindex(pid, "pid=" + pid + "&st=pslist&sw=" + lat + "|" + lng);

        // alert("You clicked the map at latitude: " + lat + " and longitude: " + lng);
        // show them in the inputs
        // document.getElementById('lat').value = lat;
        // document.getElementById('lng').value = lng;
        // document.getElementById('latlng').value = lat + ', ' + lng;
    });
    }  // end of getLeaves


JSSHOP.ads.doGenMapShow = function() {
    if(isJApp == "yes") {
        /* */ //
        // string of currUrlArr

        tOldHref = document.location.href;
        tCleanRef = "clean.html"

        tOldHref = document.location.href;
        if(tOldHref.indexOf("recamby.com") != -1) {
            tnewHref = "https://recamby.com/clean.html";

        } else {
            tnewHref = "https://titan/incasa/clean.html";
        }


        if(tOldHref.indexOf("?") != -1) {
            // get everything after the ?
            tAddonSTr = tOldHref.split("?")[1];

  tnewHref = tnewHref + "?" + tAddonSTr + "&st=map";

        } else {
            tnewHref = tnewHref + "?st=map";
        }
        theFill = "This is a test";
        document.location.href = tnewHref;

      //  app.setPagePopUp(tnewHref,LZString.compressToEncodedURIComponent(theFill));


  // document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    } else {
    JSSHOP.ui.toggleNuModule("dvTglPMap","smapWrpr");
     // JSSHOP.ui.toggleVisibility('smapWrpr');
    if(document.getElementById('smap').innerHTML == "") {

        document.getElementById('smap').style.position='relative';
        document.getElementById('smap').style.top='auto';
        document.getElementById('smap').style.left='auto';
        getLeaves();
    }
    }

};
// create async functionn to call doNuGenMap after 1 second
async function callDoNuGenMap(tAADNGMObj) {
    JSSHOP.ads.doNuGenMap(tAADNGMObj);
}

JSSHOP.ads.getNormalizedMapType = function(rawMapType, fallbackMapType) {
    var mapTypeVal = String(rawMapType || fallbackMapType || "street").toLowerCase();
    if (mapTypeVal == "satellite") {
        mapTypeVal = "satelite";
    }
    if (mapTypeVal != "street" && mapTypeVal != "satelite" && mapTypeVal != "random") {
        mapTypeVal = String(fallbackMapType || "street").toLowerCase();
        if (mapTypeVal == "satellite") {
            mapTypeVal = "satelite";
        }
        if (mapTypeVal != "street" && mapTypeVal != "satelite" && mapTypeVal != "random") {
            mapTypeVal = "street";
        }
    }
    return mapTypeVal;
};

JSSHOP.ads.addNuMapTileLayer = function(targetMap, rawMapType, fallbackMapType) {
    var mapTypeVal = JSSHOP.ads.getNormalizedMapType(rawMapType, fallbackMapType || "street");
    if (mapTypeVal == "random") {
        mapTypeVal = (Math.random() < 0.5) ? "street" : "satelite";
    }
    console.log("addNuMapTileLayer.mapType: " + mapTypeVal);
    var tileUrl = '';
    var tileOpts = {
        maxZoom: 18,
        subdomains:['mt0','mt1','mt2','mt3'],
        attribution: '&copy; <a href="https://www.google.com/maps">Google Maps</a>'
    };
    if (mapTypeVal == "satelite") {
        tileUrl = 'https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}';
    } else {
        tileUrl = 'https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}';
    }
    var tileLayerObj = null;
    try {
        if (typeof L != "undefined" && L && L.tileLayer && typeof L.tileLayer.canvas == "function") {
            tileLayerObj = L.tileLayer.canvas(tileUrl, tileOpts);
            console.log("addNuMapTileLayer.renderer: tileLayer.canvas");
        }
    } catch (eTileCanvasFactory) {
        console.log("addNuMapTileLayer.canvasFactory: " + eTileCanvasFactory);
        tileLayerObj = null;
    }
    if (!tileLayerObj) {
        try {
            if (typeof L != "undefined" && L && L.TileLayer && typeof L.TileLayer.Canvas == "function") {
                tileLayerObj = new L.TileLayer.Canvas(tileUrl, tileOpts);
                console.log("addNuMapTileLayer.renderer: TileLayer.Canvas");
            }
        } catch (eTileCanvasCtor) {
            console.log("addNuMapTileLayer.canvasCtor: " + eTileCanvasCtor);
            tileLayerObj = null;
        }
    }
    if (!tileLayerObj && typeof L != "undefined" && L && typeof L.tileLayer == "function") {
        tileLayerObj = L.tileLayer(tileUrl, tileOpts);
        console.log("addNuMapTileLayer.renderer: tileLayer(default)");
    }
    if (tileLayerObj && typeof tileLayerObj.addTo == "function") {
        tileLayerObj.addTo(targetMap);
    }
    return mapTypeVal;
};

JSSHOP.ads.getNormalizedMapEffect = function(rawMapEffect, fallbackMapEffect) {
    var mapEffectVal = String(rawMapEffect || fallbackMapEffect || "fitbounds").toLowerCase();
    if (mapEffectVal != "fitbounds" && mapEffectVal != "flyto" && mapEffectVal != "flytobounds" && mapEffectVal != "panto") {
        mapEffectVal = String(fallbackMapEffect || "fitbounds").toLowerCase();
        if (mapEffectVal != "fitbounds" && mapEffectVal != "flyto" && mapEffectVal != "flytobounds" && mapEffectVal != "panto") {
            mapEffectVal = "fitbounds";
        }
    }
    return mapEffectVal;
};

JSSHOP.ads.getNormalizedMapFlySpeed = function(rawMapFlySpeed, fallbackMapFlySpeed) {
    var mapFlySpeedVal = String(rawMapFlySpeed || fallbackMapFlySpeed || "normal").toLowerCase();
    if (mapFlySpeedVal != "slowest" && mapFlySpeedVal != "slower" && mapFlySpeedVal != "slow" && mapFlySpeedVal != "normal" && mapFlySpeedVal != "fast") {
        mapFlySpeedVal = String(fallbackMapFlySpeed || "normal").toLowerCase();
        if (mapFlySpeedVal != "slowest" && mapFlySpeedVal != "slower" && mapFlySpeedVal != "slow" && mapFlySpeedVal != "normal" && mapFlySpeedVal != "fast") {
            mapFlySpeedVal = "normal";
        }
    }
    return mapFlySpeedVal;
};

JSSHOP.ads.getNuMapAutoPlayValue = function(rawAutoPlay, fallbackAutoPlay) {
    var autoPlayVal = String(rawAutoPlay || fallbackAutoPlay || "off").toLowerCase();
    if (autoPlayVal == "yes" || autoPlayVal == "true") {
        autoPlayVal = "on";
    }
    if (autoPlayVal != "on") {
        autoPlayVal = "off";
    }
    return autoPlayVal;
};

if (!JSSHOP.ads.nuMapPlaybackRegistry) {
    JSSHOP.ads.nuMapPlaybackRegistry = {};
}

JSSHOP.ads.registerNuMapPlaybackState = function(mapDivId, mapObj, boundsObj, markersArr, mapEffectVal, mapFlySpeedVal, mapConfigObj) {
    try {
        if (!mapDivId || !mapObj || !boundsObj) {
            return;
        }
        var cfgObj = (mapConfigObj && typeof mapConfigObj == "object") ? mapConfigObj : {};
        var captureCompOn = false;
        var captureMoveendGateOn = false;
        try {
            var rawCompVal = String((cfgObj.captureFrameCompensation || cfgObj.captureCompensation || "no") || "no").toLowerCase();
            captureCompOn = (rawCompVal == "yes" || rawCompVal == "true" || rawCompVal == "1" || rawCompVal == "on");
        } catch (eCompCfg) {
            captureCompOn = false;
        }
        try {
            var rawMoveendVal = String((cfgObj.captureUseMoveendGate || cfgObj.captureMoveendGate || "no") || "no").toLowerCase();
            captureMoveendGateOn = (rawMoveendVal == "yes" || rawMoveendVal == "true" || rawMoveendVal == "1" || rawMoveendVal == "on");
        } catch (eMoveendCfg) {
            captureMoveendGateOn = false;
        }
        JSSHOP.ads.nuMapPlaybackRegistry[mapDivId] = {
            map: mapObj,
            bounds: boundsObj,
            markers: markersArr || [],
            effect: JSSHOP.ads.getNormalizedMapEffect(mapEffectVal, "fitbounds"),
            flySpeed: JSSHOP.ads.getNormalizedMapFlySpeed(mapFlySpeedVal, "normal"),
            mapConfigObj: cfgObj,
            isReplayPlaying: "no",
            captureFps: 4,
            captureFrameIntervalMs: 250,
            captureFrameCompensation: captureCompOn ? "yes" : "no",
            captureUseMoveendGate: captureMoveendGateOn ? "yes" : "no",
            captureEffectType: "cinematic",
            captureEffect: "particle",
            captureFrameBoundsArr: [],
            captureProgressMode: "div",
            captureProgressStartPopup: "no",
            captureProgressEndPopup: "no"
        };
        if (mapObj && typeof mapObj == "object") {
            mapObj._nuMapDivId = mapDivId;
        }
        if (typeof JSSHOP.ads.buildNuMapCaptureFrameBoundsArray == "function") {
            JSSHOP.ads.buildNuMapCaptureFrameBoundsArray(JSSHOP.ads.nuMapPlaybackRegistry[mapDivId], true);
        }
    } catch (eMapReg) {
        console.log("registerNuMapPlaybackState: " + eMapReg);
    }
};

JSSHOP.ads.setNuMapCaptureFrameCompensation = function(mapDivId, rawEnabled) {
    try {
        if (!mapDivId || !JSSHOP.ads.nuMapPlaybackRegistry || !JSSHOP.ads.nuMapPlaybackRegistry[mapDivId]) {
            return false;
        }
        var nextVal = false;
        var pObj = JSSHOP.ads.nuMapPlaybackRegistry[mapDivId];
        var currVal = String((pObj.captureFrameCompensation || "no")).toLowerCase();
        var currOn = (currVal == "yes" || currVal == "true" || currVal == "1" || currVal == "on");
        if (typeof rawEnabled == "undefined" || rawEnabled === null || rawEnabled === "") {
            nextVal = !currOn;
        } else {
            var normVal = String(rawEnabled).toLowerCase();
            nextVal = (rawEnabled === true || normVal == "yes" || normVal == "true" || normVal == "1" || normVal == "on");
        }
        pObj.captureFrameCompensation = nextVal ? "yes" : "no";
        if (pObj.mapConfigObj && typeof pObj.mapConfigObj == "object") {
            pObj.mapConfigObj.captureFrameCompensation = pObj.captureFrameCompensation;
        }
        return nextVal;
    } catch (eSetMapComp) {
        console.log("setNuMapCaptureFrameCompensation: " + eSetMapComp);
        return false;
    }
};

JSSHOP.ads.getNuMapFrameBoundsForView = function(mapObj, centerArr, zoomVal) {
    try {
        if (!mapObj || typeof mapObj.getSize != "function" || typeof mapObj.project != "function" || typeof mapObj.unproject != "function") {
            return null;
        }
        var latVal = parseFloat(centerArr && centerArr[0]);
        var lngVal = parseFloat(centerArr && centerArr[1]);
        var zVal = parseFloat(zoomVal);
        if (isNaN(latVal) || isNaN(lngVal) || isNaN(zVal)) {
            return null;
        }
        if (latVal < -90 || latVal > 90 || lngVal < -180 || lngVal > 180) {
            return null;
        }

        var sizeObj = mapObj.getSize();
        if (!sizeObj || !sizeObj.x || !sizeObj.y) {
            return null;
        }
        var centerLatLng = L.latLng(latVal, lngVal);
        var centerPoint = mapObj.project(centerLatLng, zVal);
        var halfW = sizeObj.x / 2;
        var halfH = sizeObj.y / 2;
        var nwPoint = L.point(centerPoint.x - halfW, centerPoint.y - halfH);
        var sePoint = L.point(centerPoint.x + halfW, centerPoint.y + halfH);
        var nwLatLng = mapObj.unproject(nwPoint, zVal);
        var seLatLng = mapObj.unproject(sePoint, zVal);
        if (!nwLatLng || !seLatLng) {
            return null;
        }
        return [
            parseFloat(seLatLng.lat),
            parseFloat(nwLatLng.lng),
            parseFloat(nwLatLng.lat),
            parseFloat(seLatLng.lng)
        ];
    } catch (eFrameBoundsView) {
        console.log("getNuMapFrameBoundsForView: " + eFrameBoundsView);
        return null;
    }
};

JSSHOP.ads.normalizeNuMapCaptureFrameBounds = function(rawFramesArr) {
    var outArr = [];
    try {
        var srcArr = (rawFramesArr && rawFramesArr.length) ? rawFramesArr : [];
        for (var i = 0; i < srcArr.length; i++) {
            var frameObj = srcArr[i] || {};
            var b = frameObj.bounds;
            if (!b || !b.length || b.length < 4) {
                continue;
            }
            var south = parseFloat(b[0]);
            var west = parseFloat(b[1]);
            var north = parseFloat(b[2]);
            var east = parseFloat(b[3]);
            if (isNaN(south) || isNaN(west) || isNaN(north) || isNaN(east)) {
                continue;
            }
            if (south < -90 || south > 90 || north < -90 || north > 90 || west < -180 || west > 180 || east < -180 || east > 180) {
                continue;
            }
            if (north < south) {
                var tN = north;
                north = south;
                south = tN;
            }
            var holdFrames = parseInt(frameObj.holdFrames, 10);
            if (isNaN(holdFrames) || holdFrames < 1) {
                holdFrames = 1;
            }
            holdFrames = Math.max(1, Math.min(30, holdFrames));
            var centerLat = parseFloat(frameObj.center && frameObj.center[0]);
            var centerLng = parseFloat(frameObj.center && frameObj.center[1]);
            if (isNaN(centerLat) || isNaN(centerLng)) {
                centerLat = (north + south) / 2;
                centerLng = (east + west) / 2;
            }
            var zoomVal = parseFloat(frameObj.zoom);
            if (isNaN(zoomVal)) {
                zoomVal = 15;
            }
            outArr.push({
                bounds: [south, west, north, east],
                center: [centerLat, centerLng],
                zoom: zoomVal,
                holdFrames: holdFrames
            });
        }
    } catch (eNormalizeFrames) {
        console.log("normalizeNuMapCaptureFrameBounds: " + eNormalizeFrames);
    }
    return outArr;
};

JSSHOP.ads.buildNuMapCaptureFrameBoundsArray = function(playbackObj, forceRebuild) {
    try {
        if (!playbackObj || !playbackObj.map || !playbackObj.bounds) {
            return [];
        }
        if (!forceRebuild && playbackObj.captureFrameBoundsArr && playbackObj.captureFrameBoundsArr.length) {
            return JSSHOP.ads.normalizeNuMapCaptureFrameBounds(playbackObj.captureFrameBoundsArr);
        }

        var mapObj = playbackObj.map;
        var keyframesArr = [];
        var currentCenter = null;
        var currentZoom = 15;
        try {
            if (typeof mapObj.getCenter == "function") {
                var c = mapObj.getCenter();
                if (c && !isNaN(parseFloat(c.lat)) && !isNaN(parseFloat(c.lng))) {
                    currentCenter = [parseFloat(c.lat), parseFloat(c.lng)];
                }
            }
            if (typeof mapObj.getZoom == "function") {
                var cz = parseFloat(mapObj.getZoom());
                if (!isNaN(cz)) {
                    currentZoom = cz;
                }
            }
        } catch (eCurrFrameView) {
            console.log("buildNuMapCaptureFrameBoundsArray.current: " + eCurrFrameView);
        }
        if (!currentCenter && playbackObj.bounds && typeof playbackObj.bounds.getCenter == "function") {
            var bc = playbackObj.bounds.getCenter();
            if (bc && !isNaN(parseFloat(bc.lat)) && !isNaN(parseFloat(bc.lng))) {
                currentCenter = [parseFloat(bc.lat), parseFloat(bc.lng)];
            }
        }
        if (!currentCenter) {
            currentCenter = [39.0667, -8.6167];
        }

        var safeTargetZoom = Math.max(12, currentZoom, 13);
        var boundsOverviewZoom = currentZoom;
        try {
            if (typeof mapObj.getBoundsZoom == "function" && playbackObj.bounds) {
                var bz = parseFloat(mapObj.getBoundsZoom(playbackObj.bounds, true));
                if (!isNaN(bz)) {
                    boundsOverviewZoom = bz;
                }
            }
        } catch (eBoundsZoomBuild) {
            console.log("buildNuMapCaptureFrameBoundsArray.boundsZoom: " + eBoundsZoomBuild);
        }

        var captureEffectProfile = JSSHOP.ads.getNuMapCaptureEffectProfile(
            playbackObj.captureEffectType,
            playbackObj.captureEffect,
            playbackObj.captureEffectOpts
        );
        var markerMaxZoom = Math.max(
            safeTargetZoom,
            boundsOverviewZoom + captureEffectProfile.zoomBoostFromBounds,
            captureEffectProfile.markerZoomFloor
        );
        var overviewZoom = Math.max(4, Math.min(boundsOverviewZoom, markerMaxZoom - 1));
        var markerZoomHoldFrames = captureEffectProfile.markerZoomHoldFrames;
        var finalMarkerZoomHoldFrames = captureEffectProfile.finalMarkerZoomHoldFrames;
        var captureIntervalForHold = parseInt(playbackObj.captureFrameIntervalMs, 10);
        if (isNaN(captureIntervalForHold) || captureIntervalForHold <= 0) {
            captureIntervalForHold = 250;
        }
        var captureFpsForFrames = Math.max(1, Math.round(1000 / captureIntervalForHold));
        var lowFpsFrameMode = (captureFpsForFrames <= 4 || captureIntervalForHold >= 250);
        var markerHoldFloorFrames = Math.max(1, Math.round(2000 / captureIntervalForHold));
        markerZoomHoldFrames = Math.max(markerZoomHoldFrames, markerHoldFloorFrames);
        finalMarkerZoomHoldFrames = Math.max(finalMarkerZoomHoldFrames, markerHoldFloorFrames);

        var pushFrame = function(centerArr, zoomVal, holdFramesVal) {
            var frameBounds = JSSHOP.ads.getNuMapFrameBoundsForView(mapObj, centerArr, zoomVal);
            if (!frameBounds) {
                return;
            }
            keyframesArr.push({
                bounds: frameBounds,
                center: [parseFloat(centerArr[0]), parseFloat(centerArr[1])],
                zoom: parseFloat(zoomVal),
                holdFrames: parseInt(holdFramesVal, 10) || 1
            });
        };

        pushFrame(currentCenter, currentZoom, 2);

        var validTargets = [];
        if (playbackObj.markers && playbackObj.markers.length) {
            for (var mi = 0; mi < playbackObj.markers.length; mi++) {
                var mk = playbackObj.markers[mi] || {};
                var mLat = parseFloat(String(mk.lat || ""));
                var mLng = parseFloat(String(mk.lng || ""));
                if (!isNaN(mLat) && !isNaN(mLng) && mLat >= -90 && mLat <= 90 && mLng >= -180 && mLng <= 180) {
                    validTargets.push([mLat, mLng]);
                }
            }
        }
        if (!validTargets.length) {
            validTargets.push(currentCenter);
        }

        for (var ti = 0; ti < validTargets.length; ti++) {
            var isLastTarget = (ti === (validTargets.length - 1));
            var nextTarget = validTargets[ti];
            var endLat = parseFloat(nextTarget[0]);
            var endLng = parseFloat(nextTarget[1]);

            pushFrame([endLat, endLng], overviewZoom, 1);
            currentCenter = [endLat, endLng];
            currentZoom = overviewZoom;

            var startZoomForMarker = Math.max(4, Math.min(currentZoom, boundsOverviewZoom));
            pushFrame([endLat, endLng], startZoomForMarker, 1);

            var zoomInSteps = Math.max(6, captureEffectProfile.zoomInSteps);
            if (lowFpsFrameMode) {
                zoomInSteps = Math.max(12, zoomInSteps);
            } else if (captureFpsForFrames <= 6) {
                zoomInSteps = Math.max(9, zoomInSteps);
            }
            var zoomStepHoldFrames = lowFpsFrameMode ? 1 : 2;
            for (var zi = 1; zi <= zoomInSteps; zi++) {
                var zProg = zi / zoomInSteps;
                var zZoom = startZoomForMarker + ((markerMaxZoom - startZoomForMarker) * zProg);
                pushFrame([endLat, endLng], zZoom, zoomStepHoldFrames);
            }

            pushFrame([endLat, endLng], markerMaxZoom, (isLastTarget ? finalMarkerZoomHoldFrames : markerZoomHoldFrames));
            if (captureEffectProfile.pulseSteps > 0 && captureEffectProfile.pulseDelta > 0) {
                for (var pz = 0; pz < captureEffectProfile.pulseSteps; pz++) {
                    var pulseDir = (pz % 2 === 0) ? 1 : -1;
                    var pulseZoom = markerMaxZoom + (captureEffectProfile.pulseDelta * pulseDir);
                    pulseZoom = Math.max(markerMaxZoom - 0.2, pulseZoom);
                    pushFrame([endLat, endLng], pulseZoom, 1);
                }
            }
            currentZoom = markerMaxZoom;
        }

        playbackObj.captureFrameBoundsArr = JSSHOP.ads.normalizeNuMapCaptureFrameBounds(keyframesArr);
        return playbackObj.captureFrameBoundsArr;
    } catch (eBuildFrames) {
        console.log("buildNuMapCaptureFrameBoundsArray: " + eBuildFrames);
        return [];
    }
};

JSSHOP.ads.setNuMapCaptureFrameBounds = function(mapDivId, rawFrameBoundsArr) {
    try {
        if (!mapDivId || !JSSHOP.ads.nuMapPlaybackRegistry || !JSSHOP.ads.nuMapPlaybackRegistry[mapDivId]) {
            return false;
        }
        var normalizedArr = JSSHOP.ads.normalizeNuMapCaptureFrameBounds(rawFrameBoundsArr);
        if (!normalizedArr.length) {
            return false;
        }
        JSSHOP.ads.nuMapPlaybackRegistry[mapDivId].captureFrameBoundsArr = normalizedArr;
        return true;
    } catch (eSetFrameBounds) {
        console.log("setNuMapCaptureFrameBounds: " + eSetFrameBounds);
        return false;
    }
};

JSSHOP.ads.setNuMapCaptureEffectType = function(mapDivId, rawEffectType) {
    try {
        if (!mapDivId || !JSSHOP.ads.nuMapPlaybackRegistry || !JSSHOP.ads.nuMapPlaybackRegistry[mapDivId]) {
            return false;
        }
        var effectType = String(rawEffectType || "marker_focus").toLowerCase();
        if (effectType != "marker_focus" && effectType != "overview" && effectType != "cinematic") {
            effectType = "marker_focus";
        }
        JSSHOP.ads.nuMapPlaybackRegistry[mapDivId].captureEffectType = effectType;
        return true;
    } catch (eSetMapCaptureFxType) {
        console.log("setNuMapCaptureEffectType: " + eSetMapCaptureFxType);
        return false;
    }
};

JSSHOP.ads.setNuMapCaptureTiming = function(mapDivId, rawCaptureFps, rawFrameIntervalMs) {
    try {
        if (!mapDivId || !JSSHOP.ads.nuMapPlaybackRegistry || !JSSHOP.ads.nuMapPlaybackRegistry[mapDivId]) {
            return false;
        }
        var playbackObj = JSSHOP.ads.nuMapPlaybackRegistry[mapDivId];
        var parsedFps = parseInt(rawCaptureFps, 10);
        var parsedInterval = parseInt(rawFrameIntervalMs, 10);
        var hasFps = !isNaN(parsedFps) && parsedFps > 0;
        var hasInterval = !isNaN(parsedInterval) && parsedInterval > 0;
        if (!hasFps && !hasInterval) {
            return false;
        }

        if (hasFps) {
            parsedFps = Math.max(4, Math.min(30, parsedFps));
            playbackObj.captureFps = parsedFps;
        }
        if (hasInterval) {
            parsedInterval = Math.max(120, Math.min(2500, parsedInterval));
            playbackObj.captureFrameIntervalMs = parsedInterval;
        }
        return true;
    } catch (eSetMapCaptureTiming) {
        console.log("setNuMapCaptureTiming: " + eSetMapCaptureTiming);
        return false;
    }
};

JSSHOP.ads.setNuMapCaptureFps = function(mapDivId, rawCaptureFps) {
    return JSSHOP.ads.setNuMapCaptureTiming(mapDivId, rawCaptureFps, null);
};

JSSHOP.ads.setNuMapCaptureFrameInterval = function(mapDivId, rawFrameIntervalMs) {
    return JSSHOP.ads.setNuMapCaptureTiming(mapDivId, null, rawFrameIntervalMs);
};

JSSHOP.ads.setNuMapCaptureProgressMode = function(mapDivId, rawMode) {
    try {
        if (!mapDivId || !JSSHOP.ads.nuMapPlaybackRegistry || !JSSHOP.ads.nuMapPlaybackRegistry[mapDivId]) {
            return false;
        }
        var mode = String(rawMode || "div").toLowerCase();
        if (mode != "div" && mode != "popup" && mode != "both" && mode != "none") {
            mode = "div";
        }
        JSSHOP.ads.nuMapPlaybackRegistry[mapDivId].captureProgressMode = mode;
        return true;
    } catch (eSetCaptureProgressMode) {
        console.log("setNuMapCaptureProgressMode: " + eSetCaptureProgressMode);
        return false;
    }
};

JSSHOP.ads.setNuMapCaptureProgressPopups = function(mapDivId, showStartPopup, showEndPopup) {
    try {
        if (!mapDivId || !JSSHOP.ads.nuMapPlaybackRegistry || !JSSHOP.ads.nuMapPlaybackRegistry[mapDivId]) {
            return false;
        }
        var playbackObj = JSSHOP.ads.nuMapPlaybackRegistry[mapDivId];
        playbackObj.captureProgressStartPopup = (showStartPopup === true || String(showStartPopup).toLowerCase() == "yes") ? "yes" : "no";
        playbackObj.captureProgressEndPopup = (showEndPopup === true || String(showEndPopup).toLowerCase() == "yes") ? "yes" : "no";
        return true;
    } catch (eSetCaptureProgressPopups) {
        console.log("setNuMapCaptureProgressPopups: " + eSetCaptureProgressPopups);
        return false;
    }
};

JSSHOP.ads.logNuMapCaptureProgress = function(mapDivId, rawPhase, rawMessage, rawPct, rawState) {
    try {
        var phase = String(rawPhase || "status").toLowerCase();
        var message = String(rawMessage || "");
        var pct = parseFloat(rawPct);
        if (isNaN(pct)) {
            pct = 0;
        }
        pct = Math.max(0, Math.min(100, pct));
        var state = String(rawState || "running").toLowerCase();
        var playbackObj = null;
        if (mapDivId && JSSHOP.ads.nuMapPlaybackRegistry && JSSHOP.ads.nuMapPlaybackRegistry[mapDivId]) {
            playbackObj = JSSHOP.ads.nuMapPlaybackRegistry[mapDivId];
        }

        console.log("[MAP-VIDEO][PROGRESS]", {
            mapDivId: mapDivId,
            phase: phase,
            pct: pct,
            state: state,
            message: message
        });

        var mode = String((playbackObj && playbackObj.captureProgressMode) ? playbackObj.captureProgressMode : "div").toLowerCase();
        if (mode != "div" && mode != "popup" && mode != "both" && mode != "none") {
            mode = "div";
        }

        var wantsDiv = (mode == "div" || mode == "both");
        var wantsPopup = (mode == "popup" || mode == "both");

        if (wantsDiv) {
            var wrapId = "incasaMapCaptureProgressWrap";
            var barId = "incasaMapCaptureProgressBar";
            var txtId = "incasaMapCaptureProgressTxt";
            var pctId = "incasaMapCaptureProgressPct";
            var closeId = "incasaMapCaptureProgressClose";
            var wrapEl = document.getElementById(wrapId);
            if (!wrapEl) {
                wrapEl = document.createElement("div");
                wrapEl.id = wrapId;
                wrapEl.setAttribute("data-user-hidden", "no");
                wrapEl.style.position = "fixed";
                wrapEl.style.left = "14px";
                wrapEl.style.bottom = "14px";
                wrapEl.style.zIndex = "999999";
                wrapEl.style.minWidth = "260px";
                wrapEl.style.maxWidth = "380px";
                wrapEl.style.background = "rgba(24,24,24,0.9)";
                wrapEl.style.color = "#fff";
                wrapEl.style.padding = "10px 12px";
                wrapEl.style.borderRadius = "8px";
                wrapEl.style.boxShadow = "0 2px 12px rgba(0,0,0,0.35)";
                wrapEl.style.fontSize = "12px";
                wrapEl.style.lineHeight = "1.35";
                wrapEl.innerHTML = '<div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:6px;">' +
                    '<div id="' + txtId + '" style="flex:1 1 auto;">Preparing capture...</div>' +
                    '<button id="' + closeId + '" type="button" aria-label="Hide capture progress" style="border:none;background:transparent;color:#fff;cursor:pointer;font-size:18px;font-weight:700;line-height:1;opacity:0.9;padding:0 4px;">X</button>' +
                    '</div>' +
                    '<div style="height:7px;background:rgba(255,255,255,0.2);border-radius:5px;overflow:hidden;">' +
                    '<div id="' + barId + '" style="height:7px;width:0%;background:#35c759;transition:width 0.2s ease;"></div></div>' +
                    '<div id="' + pctId + '" style="margin-top:6px;text-align:right;opacity:0.9;">0%</div>';
                document.body.appendChild(wrapEl);

                var closeBtn = document.getElementById(closeId);
                if (closeBtn) {
                    closeBtn.addEventListener("click", function() {
                        var pWrap = document.getElementById(wrapId);
                        if (pWrap) {
                            pWrap.setAttribute("data-user-hidden", "yes");
                            pWrap.style.display = "none";
                        }
                    });
                }
            }

            if (phase == "start") {
                wrapEl.setAttribute("data-user-hidden", "no");
            }
            if (wrapEl.getAttribute("data-user-hidden") == "yes" && state == "running") {
                return;
            }
            wrapEl.style.display = "block";
            var txtEl = document.getElementById(txtId);
            var barEl = document.getElementById(barId);
            var pctEl = document.getElementById(pctId);
            if (txtEl) {
                txtEl.textContent = message || ("Capture " + phase + "...");
            }
            if (barEl) {
                barEl.style.width = Math.round(pct) + "%";
                if (state == "error") {
                    barEl.style.background = "#ff453a";
                } else if (state == "done") {
                    barEl.style.background = "#35c759";
                } else {
                    barEl.style.background = "#0a84ff";
                }
            }
            if (pctEl) {
                pctEl.textContent = Math.round(pct) + "%";
            }
            if (state == "done" || state == "error") {
                setTimeout(function() {
                    var doneWrap = document.getElementById(wrapId);
                    if (doneWrap) {
                        doneWrap.style.display = "none";
                    }
                }, 2500);
            }
        }

        if (wantsPopup) {
            var showStartPopup = (playbackObj && String(playbackObj.captureProgressStartPopup).toLowerCase() == "yes");
            var showEndPopup = (playbackObj && String(playbackObj.captureProgressEndPopup).toLowerCase() == "yes");
            if (phase == "start" && showStartPopup) {
                alert(message || "Map video capture started.");
            } else if ((phase == "done" || phase == "error") && showEndPopup) {
                alert(message || (phase == "done" ? "Map video capture completed." : "Map video capture failed."));
            }
        }
    } catch (eCaptureProgressLog) {
        console.log("logNuMapCaptureProgress: " + eCaptureProgressLog);
    }
};


// Record version of replayNuMapEffect for recording workflow
JSSHOP.ads.recordNuMapEffect = function(mapDivId, onComplete) {
    try {
        console.log('[RECORD] recordNuMapEffect called for', mapDivId);
        if (!JSSHOP.ads.nuMapPlaybackRegistry || !JSSHOP.ads.nuMapPlaybackRegistry[mapDivId]) {
            console.log('[RECORD] No playback registry for', mapDivId);
            if (typeof window.restoreAllMapControls === 'function') window.restoreAllMapControls();
            if (typeof onComplete === 'function') onComplete();
            return;
        }
        var playbackObj = JSSHOP.ads.nuMapPlaybackRegistry[mapDivId];
        if (!playbackObj.map || !playbackObj.bounds) {
            console.log('[RECORD] No map or bounds for', mapDivId);
            if (typeof window.restoreAllMapControls === 'function') window.restoreAllMapControls();
            if (typeof onComplete === 'function') onComplete();
            return;
        }
        if (playbackObj.markers && playbackObj.markers.length <= 1) {
            console.log('[RECORD] Not enough markers for', mapDivId);
            if (typeof window.restoreAllMapControls === 'function') window.restoreAllMapControls();
            if (typeof onComplete === 'function') onComplete();
            return;
        }
        if (String(playbackObj.isReplayPlaying || "no").toLowerCase() == "yes") {
            console.log('[RECORD] Replay already playing for', mapDivId);
            JSSHOP.ads.stopNuMapReplay(mapDivId);
            if (typeof window.restoreAllMapControls === 'function') window.restoreAllMapControls();
            if (typeof onComplete === 'function') onComplete();
            return;
        }
        playbackObj.isReplayPlaying = "yes";
        JSSHOP.ads.setNuMapReplayButtonState(mapDivId, true);
        JSSHOP.ads.setNuMapDebugTogglePlayMode(mapDivId, true);
        try {
            if (typeof JSSHOP.ads.isNuMapGhostCaptureDebugEnabled == "function" && JSSHOP.ads.isNuMapGhostCaptureDebugEnabled()) {
                JSSHOP.ads.setNuMapGhostCaptureDebug(false);
            }
        } catch (eReplayDbgOff) {
            console.log("recordNuMapEffect.debugOff: " + eReplayDbgOff);
        }
        if (playbackObj.map.invalidateSize) {
            playbackObj.map.invalidateSize();
        }
        var onRecordDone = function() {
            try {
                if (!JSSHOP.ads.nuMapPlaybackRegistry || !JSSHOP.ads.nuMapPlaybackRegistry[mapDivId]) {
                    console.log('[RECORD] onRecordDone: playback registry missing for', mapDivId);
                    if (typeof window.restoreAllMapControls === 'function') window.restoreAllMapControls();
                    if (typeof onComplete === 'function') onComplete();
                    return;
                }
                JSSHOP.ads.nuMapPlaybackRegistry[mapDivId].isReplayPlaying = "no";
                JSSHOP.ads.setNuMapReplayButtonState(mapDivId, false);
                JSSHOP.ads.setNuMapDebugTogglePlayMode(mapDivId, false);
                console.log('[RECORD] Animation complete for', mapDivId);
            } catch (eRecordDone) {
                console.log("recordNuMapEffect.onRecordDone: " + eRecordDone);
            }
            if (typeof window.restoreAllMapControls === 'function') window.restoreAllMapControls();
            if (typeof onComplete === 'function') onComplete();
        };
        console.log('[RECORD] Starting fly to animation for', mapDivId);
        JSSHOP.ads.applyNuMapViewportEffect(
            playbackObj.map,
            playbackObj.bounds,
            playbackObj.markers,
            playbackObj.effect,
            "fitbounds",
            playbackObj.flySpeed,
            "normal",
            {
                onComplete: onRecordDone,
                onCancel: onRecordDone
            }
        );
    } catch (eRecordMap) {
        console.log("recordNuMapEffect: " + eRecordMap);
        if (typeof window.restoreAllMapControls === 'function') window.restoreAllMapControls();
        if (typeof onComplete === 'function') onComplete();
    }
};

JSSHOP.ads.replayNuMapEffect = function(mapDivId) {
    try {
        if (!JSSHOP.ads.nuMapPlaybackRegistry || !JSSHOP.ads.nuMapPlaybackRegistry[mapDivId]) {
            return;
        }
        var playbackObj = JSSHOP.ads.nuMapPlaybackRegistry[mapDivId];
        if (!playbackObj.map || !playbackObj.bounds) {
            return;
        }
        if (playbackObj.markers && playbackObj.markers.length <= 1) {
            return;
        }
        if (String(playbackObj.isReplayPlaying || "no").toLowerCase() == "yes") {
            JSSHOP.ads.stopNuMapReplay(mapDivId);
            return;
        }
        playbackObj.isReplayPlaying = "yes";
        JSSHOP.ads.setNuMapReplayButtonState(mapDivId, true);
        JSSHOP.ads.setNuMapDebugTogglePlayMode(mapDivId, true);
        try {
            if (typeof JSSHOP.ads.isNuMapGhostCaptureDebugEnabled == "function" && JSSHOP.ads.isNuMapGhostCaptureDebugEnabled()) {
                JSSHOP.ads.setNuMapGhostCaptureDebug(false);
            }
        } catch (eReplayDbgOff) {
            console.log("replayNuMapEffect.debugOff: " + eReplayDbgOff);
        }
        if (playbackObj.map.invalidateSize) {
            playbackObj.map.invalidateSize();
        }
        var onReplayDone = function() {
            try {
                if (!JSSHOP.ads.nuMapPlaybackRegistry || !JSSHOP.ads.nuMapPlaybackRegistry[mapDivId]) {
                    return;
                }
                JSSHOP.ads.nuMapPlaybackRegistry[mapDivId].isReplayPlaying = "no";
                JSSHOP.ads.setNuMapReplayButtonState(mapDivId, false);
                JSSHOP.ads.setNuMapDebugTogglePlayMode(mapDivId, false);
            } catch (eReplayDone) {
                console.log("replayNuMapEffect.onReplayDone: " + eReplayDone);
            }
        };
        JSSHOP.ads.applyNuMapViewportEffect(
            playbackObj.map,
            playbackObj.bounds,
            playbackObj.markers,
            playbackObj.effect,
            "fitbounds",
            playbackObj.flySpeed,
            "normal",
            {
                onComplete: onReplayDone,
                onCancel: onReplayDone
            }
        );
    } catch (eReplayMap) {
        console.log("replayNuMapEffect: " + eReplayMap);
    }
};

JSSHOP.ads.stopNuMapReplay = function(mapDivId) {
    try {
        if (!mapDivId || !JSSHOP.ads.nuMapPlaybackRegistry || !JSSHOP.ads.nuMapPlaybackRegistry[mapDivId]) {
            return false;
        }
        var playbackObj = JSSHOP.ads.nuMapPlaybackRegistry[mapDivId];
        var mapObj = playbackObj.map;
        if (mapObj && mapObj._nuFlyToTimeouts && mapObj._nuFlyToTimeouts.length) {
            for (var ti = 0; ti < mapObj._nuFlyToTimeouts.length; ti++) {
                clearTimeout(mapObj._nuFlyToTimeouts[ti]);
            }
            mapObj._nuFlyToTimeouts = [];
        }
        if (mapObj && mapObj._nuFlyToDoneTimeout) {
            clearTimeout(mapObj._nuFlyToDoneTimeout);
            mapObj._nuFlyToDoneTimeout = null;
        }
        if (mapObj && typeof mapObj.stop == "function") {
            try { mapObj.stop(); } catch (eMapStop) {}
        }
        playbackObj.isReplayPlaying = "no";
        JSSHOP.ads.setNuMapReplayButtonState(mapDivId, false);
        JSSHOP.ads.setNuMapDebugTogglePlayMode(mapDivId, false);
        return true;
    } catch (eStopReplayMap) {
        console.log("stopNuMapReplay: " + eStopReplayMap);
        return false;
    }
};

JSSHOP.ads.setNuMapReplayButtonState = function(mapDivId, isPlaying) {
    try {
        var selector = ".incasa-map-replay-toggle-btn[data-incasa-mapdivid='" + String(mapDivId || "") + "']";
        var replayBtns = document.querySelectorAll(selector);
        for (var ri = 0; ri < replayBtns.length; ri++) {
            var btn = replayBtns[ri];
            if (!btn) {
                continue;
            }
            btn.title = isPlaying ? "Pause" : "Play";
            btn.setAttribute("aria-label", isPlaying ? "Pause" : "Play");
            btn.style.background = isPlaying ? "rgba(10,132,255,0.20)" : "";
            btn.innerHTML = isPlaying
                ? '<i class="material-icons txtClrHdr" style="font-size:22px;line-height:34px;">&#xe034;</i>'
                : '<i class="material-icons txtClrHdr" style="font-size:22px;line-height:34px;">&#xe037;</i>';
        }
    } catch (eSetReplayBtnState) {
        console.log("setNuMapReplayButtonState: " + eSetReplayBtnState);
    }
};

JSSHOP.ads.setNuMapDebugTogglePlayMode = function(mapDivId, isPlaying) {
    try {
        var selector = ".incasa-map-debug-toggle-btn[data-incasa-mapdivid='" + String(mapDivId || "") + "']";
        var dbgBtns = document.querySelectorAll(selector);
        for (var di = 0; di < dbgBtns.length; di++) {
            var dBtn = dbgBtns[di];
            if (!dBtn) {
                continue;
            }
            if (isPlaying) {
                dBtn.style.pointerEvents = "none";
                dBtn.style.opacity = "0.35";
                dBtn.setAttribute("data-incasa-replay-disabled", "yes");
                dBtn.setAttribute("aria-disabled", "true");
                dBtn.title = "Ghost Debug (disabled while playing)";
                dBtn.setAttribute("aria-label", "Ghost Debug disabled while playing");
            } else {
                dBtn.style.pointerEvents = "";
                dBtn.style.opacity = "";
                dBtn.setAttribute("data-incasa-replay-disabled", "no");
                dBtn.setAttribute("aria-disabled", "false");
                dBtn.title = "Toggle Ghost Capture Debug";
                dBtn.setAttribute("aria-label", "Toggle Ghost Capture Debug");
            }
        }
    } catch (eSetDbgPlayMode) {
        console.log("setNuMapDebugTogglePlayMode: " + eSetDbgPlayMode);
    }
};

JSSHOP.ads.getNuMapFlyTimingConfig = function(rawMapFlySpeed, fallbackMapFlySpeed) {
    var rawSpeedVal = String(rawMapFlySpeed || "").toLowerCase();
    var mapFlySpeedVal = JSSHOP.ads.getNormalizedMapFlySpeed(rawMapFlySpeed, fallbackMapFlySpeed || "normal");
    var speedDurSec = 1.4;
    var overviewDurSec = 0.95;
    var speedStepMs = 2100;
    var markerHoldMs = 2000;
    if (rawSpeedVal == "capture_super_slow") {
        mapFlySpeedVal = "capture_super_slow";
        speedDurSec = 5.2;
        overviewDurSec = 2.6;
        speedStepMs = 6200;
    } else if (mapFlySpeedVal == "slowest") {
        speedDurSec = 3.6;
        overviewDurSec = 1.9;
        speedStepMs = 4300;
    } else if (mapFlySpeedVal == "slower") {
        speedDurSec = 2.7;
        overviewDurSec = 1.4;
        speedStepMs = 3400;
    } else if (mapFlySpeedVal == "slow") {
        speedDurSec = 2.1;
        overviewDurSec = 1.15;
        speedStepMs = 2800;
    } else if (mapFlySpeedVal == "fast") {
        speedDurSec = 0.9;
        overviewDurSec = 0.65;
        speedStepMs = 1300;
    }
    return {
        speedDurSec: speedDurSec,
        overviewDurSec: overviewDurSec,
        speedStepMs: speedStepMs,
        markerHoldMs: markerHoldMs,
        speedKey: mapFlySpeedVal
    };
};

JSSHOP.ads.getNuMapCaptureEffectProfile = function(rawEffectType, rawEffectName, rawEffectOpts) {
    var effectType = String(rawEffectType || "marker_focus").toLowerCase();
    var effectName = String(rawEffectName || "").toLowerCase();
    if (!effectName || effectName == "noqvalue") {
        effectName = (effectType == "cinematic") ? "particle" : "linger";
    }
    var opts = (rawEffectOpts && typeof rawEffectOpts == "object") ? rawEffectOpts : {};
    var profile = {
        zoomBoostFromBounds: 2,
        markerZoomFloor: 18,
        zoomInSteps: 3,
        markerZoomHoldFrames: 4,
        finalMarkerZoomHoldFrames: 6,
        startZoomHoldFrames: 1,
        pulseSteps: 0,
        pulseDelta: 0.2
    };

    if (effectType == "overview") {
        profile.zoomBoostFromBounds = 1;
        profile.markerZoomFloor = 16;
        profile.zoomInSteps = 2;
        profile.markerZoomHoldFrames = 3;
        profile.finalMarkerZoomHoldFrames = 4;
        profile.startZoomHoldFrames = 2;
    } else if (effectType == "cinematic") {
        profile.zoomBoostFromBounds = 3;
        profile.markerZoomFloor = 19;
        profile.zoomInSteps = 4;
        profile.markerZoomHoldFrames = 5;
        profile.finalMarkerZoomHoldFrames = 7;
        profile.startZoomHoldFrames = 2;
    }

    if (effectName == "none") {
        profile.zoomInSteps = 2;
        profile.markerZoomHoldFrames = 2;
        profile.finalMarkerZoomHoldFrames = 3;
    } else if (effectName == "zoom_pulse") {
        profile.pulseSteps = 2;
        profile.pulseDelta = 0.25;
    } else if (effectName == "particle" || effectName == "particle_hold") {
        profile.pulseSteps = 3;
        profile.pulseDelta = 0.3;
        profile.markerZoomHoldFrames = 5;
        profile.finalMarkerZoomHoldFrames = 7;
    }

    var asInt = function(v, fallbackVal, minVal, maxVal) {
        var n = parseInt(v, 10);
        if (isNaN(n)) {
            n = fallbackVal;
        }
        if (!isNaN(minVal)) {
            n = Math.max(minVal, n);
        }
        if (!isNaN(maxVal)) {
            n = Math.min(maxVal, n);
        }
        return n;
    };
    var asFloat = function(v, fallbackVal, minVal, maxVal) {
        var n = parseFloat(v);
        if (isNaN(n)) {
            n = fallbackVal;
        }
        if (!isNaN(minVal)) {
            n = Math.max(minVal, n);
        }
        if (!isNaN(maxVal)) {
            n = Math.min(maxVal, n);
        }
        return n;
    };

    profile.zoomBoostFromBounds = asInt(opts.zoomBoostFromBounds, profile.zoomBoostFromBounds, 1, 6);
    profile.markerZoomFloor = asInt(opts.markerZoomFloor, profile.markerZoomFloor, 15, 22);
    profile.zoomInSteps = asInt(opts.zoomInSteps, profile.zoomInSteps, 2, 8);
    profile.markerZoomHoldFrames = asInt(opts.markerZoomHoldFrames, profile.markerZoomHoldFrames, 1, 20);
    profile.finalMarkerZoomHoldFrames = asInt(opts.finalMarkerZoomHoldFrames, profile.finalMarkerZoomHoldFrames, 1, 24);
    profile.startZoomHoldFrames = asInt(opts.startZoomHoldFrames, profile.startZoomHoldFrames, 0, 8);
    profile.pulseSteps = asInt(opts.pulseSteps, profile.pulseSteps, 0, 8);
    profile.pulseDelta = asFloat(opts.pulseDelta, profile.pulseDelta, 0, 1.5);

    return profile;
};

JSSHOP.ads.ensureNuMapCaptureLibs = function(cbDone, useSnapdomFallback) {
    var doneFn = (typeof cbDone == "function") ? cbDone : function(){};
    var useSnapdom = (useSnapdomFallback === true);
    var loadCCapture = function(nextFn) {
        if (typeof CCapture != "undefined") {
            nextFn();
            return;
        }
        if (typeof JSSHOP != "undefined" && JSSHOP && typeof JSSHOP.loadScript == "function") {
            JSSHOP.loadScript("js/thirdp/CCapture_mod.js", function() {
                nextFn();
            }, "js");
            return;
        }
        nextFn();
    };

    var loadSnapdom = function(nextFn) {
        if (!useSnapdom) {
            nextFn();
            return;
        }
        if (typeof snapdom != "undefined" && snapdom && typeof snapdom.toCanvas == "function") {
            nextFn();
            return;
        }
        if (typeof JSSHOP != "undefined" && JSSHOP && typeof JSSHOP.loadScript == "function") {
            JSSHOP.loadScript("js/thirdp/snapdom.js", function() {
                nextFn();
            }, "js");
            return;
        }
        nextFn();
    };

    var loadHtml2Canvas = function(nextFn) {
        if (useSnapdom) {
            nextFn();
            return;
        }
        if (typeof html2canvas != "undefined" && typeof html2canvas == "function") {
            nextFn();
            return;
        }
        if (typeof JSSHOP != "undefined" && JSSHOP && typeof JSSHOP.loadScript == "function") {
            JSSHOP.loadScript("js/thirdp/html2canvas.js", function() {
                nextFn();
            }, "js");
            return;
        }
        nextFn();
    };

    console.log("[MAP-VIDEO] ensure libs", { useSnapdomFallback: useSnapdom, rendererMode: useSnapdom ? "snapdom-only" : "html2canvas-only" });
    loadCCapture(function() {
        loadSnapdom(function() {
            loadHtml2Canvas(function() {
                console.log("[MAP-VIDEO] libs ready", {
                    hasCCapture: (typeof CCapture != "undefined"),
                    hasSnapdom: (typeof snapdom != "undefined" && snapdom && typeof snapdom.toCanvas == "function"),
                    hasHtml2Canvas: (typeof html2canvas != "undefined" && typeof html2canvas == "function")
                });
                doneFn();
            });
        });
    });
};

JSSHOP.ads.getNuMapCaptureCanvas = function(mapObj) {
    try {
        if (!mapObj || typeof mapObj.getContainer != "function") {
            return null;
        }
        if (mapObj._renderer && mapObj._renderer._container && mapObj._renderer._container.tagName && String(mapObj._renderer._container.tagName).toLowerCase() == "canvas") {
            return mapObj._renderer._container;
        }
        var mapContainer = mapObj.getContainer();
        if (!mapContainer) {
            return null;
        }
        var canvases = mapContainer.querySelectorAll("canvas");
        if (!canvases || !canvases.length) {
            return null;
        }
        var bestCanvas = null;
        var bestArea = 0;
        for (var ci = 0; ci < canvases.length; ci++) {
            var c = canvases[ci];
            var w = parseInt(c.width || 0, 10);
            var h = parseInt(c.height || 0, 10);
            var area = w * h;
            if (area > bestArea) {
                bestArea = area;
                bestCanvas = c;
            }
        }
        return bestCanvas;
    } catch (eMapCanvas) {
        console.log("getNuMapCaptureCanvas: " + eMapCanvas);
        return null;
    }
};

JSSHOP.ads.setNuMapCaptureMode = function(mapObj, isCaptureMode) {
    try {
        if (!mapObj || typeof mapObj.getContainer != "function") {
            return;
        }
        var mapContainer = mapObj.getContainer();
        if (!mapContainer) {
            return;
        }
        var capCssId = "incasaMapCaptureNoPseudoCss";
        if (!document.getElementById(capCssId)) {
            var capStyleEl = document.createElement("style");
            capStyleEl.id = capCssId;
            capStyleEl.type = "text/css";
            capStyleEl.innerHTML = ".incasa-map-capture-mode *::before,.incasa-map-capture-mode *::after{content:none!important;animation:none!important;transition:none!important;}" +
                ".incasa-map-capture-mode a,.incasa-map-capture-mode .leaflet-tooltip{pointer-events:none!important;}";
            document.head.appendChild(capStyleEl);
        }
        if (isCaptureMode) {
            mapContainer.classList.add("incasa-map-capture-mode");
            try {
                if (typeof JSSHOP.ads.normalizeNuMapCaptureMarkerIconSrcs == "function") {
                    JSSHOP.ads.normalizeNuMapCaptureMarkerIconSrcs(mapContainer);
                }
            } catch (eCapModeNormIcons) {}
        } else {
            mapContainer.classList.remove("incasa-map-capture-mode");
        }
        var controlsArr = mapContainer.querySelectorAll(".leaflet-control");
        for (var ci = 0; ci < controlsArr.length; ci++) {
            var ctrlEl = controlsArr[ci];
            if (!ctrlEl) {
                continue;
            }
            if (ctrlEl.classList && ctrlEl.classList.contains("incasa-map-seller-badge-control")) {
                continue;
            }
            if (isCaptureMode) {
                if (!ctrlEl.hasAttribute("data-incasa-prev-display")) {
                    ctrlEl.setAttribute("data-incasa-prev-display", ctrlEl.style.display || "");
                }
                ctrlEl.style.display = "none";
            } else {
                var prevDisplay = ctrlEl.getAttribute("data-incasa-prev-display");
                if (prevDisplay === null) {
                    ctrlEl.style.display = "";
                } else {
                    ctrlEl.style.display = prevDisplay;
                    ctrlEl.removeAttribute("data-incasa-prev-display");
                }
            }
        }
    } catch (eMapCapMode) {
        console.log("setNuMapCaptureMode: " + eMapCapMode);
    }
};

JSSHOP.ads.normalizeNuMapCaptureMarkerIconSrcs = function(rootEl) {
    try {
        if (!rootEl || !rootEl.querySelectorAll) {
            return 0;
        }
        var fixedCount = 0;
        var markerImgs = rootEl.querySelectorAll(".leaflet-marker-pane img, img.leaflet-marker-icon, .leaflet-tooltip-pane img, .leaflet-popup-pane img");
        for (var mi = 0; mi < markerImgs.length; mi++) {
            var imgEl = markerImgs[mi];
            if (!imgEl) {
                continue;
            }
            var rawSrc = String(imgEl.getAttribute("src") || imgEl.src || "").trim();
            if (!rawSrc) {
                continue;
            }
            var normSrc = rawSrc;
            if (typeof JSSHOP.ads.getNuMapMarkerIconUrl == "function") {
                normSrc = JSSHOP.ads.getNuMapMarkerIconUrl(rawSrc, rawSrc);
            }
            if (normSrc === rawSrc && String(rawSrc).toLowerCase().indexOf("updt_") != -1) {
                var quickName = String(rawSrc).replace(/\\/g, "/");
                quickName = quickName.substring(quickName.lastIndexOf("/") + 1);
                quickName = quickName.replace(/^s_thumb/i, "").replace(/updt_/ig, "");
                if (quickName) {
                    normSrc = "images/ucontent/" + quickName;
                }
            }
            if (normSrc && normSrc !== rawSrc) {
                imgEl.setAttribute("src", normSrc);
                imgEl.src = normSrc;
                if (imgEl.hasAttribute("srcset")) {
                    imgEl.setAttribute("srcset", "");
                }
                fixedCount++;
            }
        }
        var bgEls = rootEl.querySelectorAll(".leaflet-marker-pane *, .leaflet-tooltip-pane *, .leaflet-popup-pane *");
        for (var bi = 0; bi < bgEls.length; bi++) {
            var bgEl = bgEls[bi];
            if (!bgEl || !bgEl.style) {
                continue;
            }
            var bgImg = String(bgEl.style.backgroundImage || "");
            if (!bgImg || bgImg.indexOf("url(") == -1 || bgImg.toLowerCase().indexOf("updt_") == -1) {
                continue;
            }
            var m = bgImg.match(/url\(["']?([^"')]+)["']?\)/i);
            if (!m || !m[1]) {
                continue;
            }
            var bgSrc = String(m[1]);
            var normBgSrc = bgSrc;
            if (typeof JSSHOP.ads.getNuMapMarkerIconUrl == "function") {
                normBgSrc = JSSHOP.ads.getNuMapMarkerIconUrl(bgSrc, bgSrc);
            }
            if (normBgSrc && normBgSrc !== bgSrc) {
                bgEl.style.backgroundImage = "url('" + normBgSrc + "')";
                fixedCount++;
            }
        }
        if (fixedCount > 0) {
            console.log("[MAP-VIDEO] normalized marker icon src", { fixedCount: fixedCount });
        }
        return fixedCount;
    } catch (eNormCapMapIcn) {
        console.log("normalizeNuMapCaptureMarkerIconSrcs: " + eNormCapMapIcn);
        return 0;
    }
};

JSSHOP.ads.isNuMapGhostCaptureDebugEnabled = function() {
    try {
        if (typeof JSSHOP.ads.nuMapGhostCaptureDebug != "undefined") {
            return (JSSHOP.ads.nuMapGhostCaptureDebug === true || JSSHOP.ads.nuMapGhostCaptureDebug === "yes");
        }
        var rawVal = "";
        try {
            rawVal = String(localStorage.getItem("incasa_nu_map_ghost_capture_debug") || "").toLowerCase();
        } catch (eGhostDebugRead) {
            rawVal = "";
        }
        if (rawVal == "1" || rawVal == "true" || rawVal == "yes" || rawVal == "on") {
            JSSHOP.ads.nuMapGhostCaptureDebug = true;
            return true;
        }
        JSSHOP.ads.nuMapGhostCaptureDebug = false;
        return false;
    } catch (eGhostDebugEnabled) {
        console.log("isNuMapGhostCaptureDebugEnabled: " + eGhostDebugEnabled);
        return false;
    }
};

JSSHOP.ads.setNuMapGhostCaptureDebug = function(rawEnabled) {
    try {
        var currentVal = JSSHOP.ads.isNuMapGhostCaptureDebugEnabled();
        var nextVal = currentVal;
        if (typeof rawEnabled == "undefined" || rawEnabled === null || rawEnabled === "") {
            nextVal = !currentVal;
        } else {
            var normVal = String(rawEnabled).toLowerCase();
            nextVal = (rawEnabled === true || normVal == "1" || normVal == "true" || normVal == "yes" || normVal == "on");
        }
        JSSHOP.ads.nuMapGhostCaptureDebug = nextVal;
        try {
            localStorage.setItem("incasa_nu_map_ghost_capture_debug", nextVal ? "1" : "0");
        } catch (eGhostDebugWrite) {
            console.log("setNuMapGhostCaptureDebug.storage: " + eGhostDebugWrite);
        }
        try {
            if (typeof JSSHOP.ads.applyNuMapGhostCaptureDebugVisibility == "function") {
                JSSHOP.ads.applyNuMapGhostCaptureDebugVisibility(nextVal);
            }
        } catch (eGhostDebugApply) {
            console.log("setNuMapGhostCaptureDebug.apply: " + eGhostDebugApply);
        }
        try {
            if (typeof JSSHOP.ads.syncNuMapGhostDebugButtonStates == "function") {
                JSSHOP.ads.syncNuMapGhostDebugButtonStates(nextVal);
            }
        } catch (eGhostDebugSyncBtns) {
            console.log("setNuMapGhostCaptureDebug.syncBtns: " + eGhostDebugSyncBtns);
        }
        return nextVal;
    } catch (eGhostDebugSet) {
        console.log("setNuMapGhostCaptureDebug: " + eGhostDebugSet);
        return false;
    }
};

JSSHOP.ads.syncNuMapGhostDebugButtonStates = function(rawEnabled) {
    try {
        var isOn = (rawEnabled === true || rawEnabled === "yes" || rawEnabled === 1 || rawEnabled === "1" || String(rawEnabled).toLowerCase() == "true");
        var dbgBtns = document.querySelectorAll(".incasa-map-debug-toggle-btn");
        for (var bi = 0; bi < dbgBtns.length; bi++) {
            var btn = dbgBtns[bi];
            if (!btn) {
                continue;
            }
            btn.style.background = isOn ? 'rgba(10,132,255,0.20)' : '';
        }
        return dbgBtns.length;
    } catch (eSyncGhostDbgBtns) {
        console.log("syncNuMapGhostDebugButtonStates: " + eSyncGhostDbgBtns);
        return 0;
    }
};

JSSHOP.ads.applyNuMapGhostCaptureDebugVisibility = function(rawEnabled) {
    try {
        var isOn = (rawEnabled === true || rawEnabled === "yes" || rawEnabled === 1 || rawEnabled === "1" || String(rawEnabled).toLowerCase() == "true");
        var ghostDivs = document.querySelectorAll("div[id^='dvMapGhostCapture_']");
        if (!ghostDivs || !ghostDivs.length) {
            return 0;
        }
        for (var gi = 0; gi < ghostDivs.length; gi++) {
            var gd = ghostDivs[gi];
            if (!gd) {
                continue;
            }
            gd.style.position = "fixed";
            gd.style.width = gd.style.width || "640px";
            gd.style.height = gd.style.height || "420px";
            gd.style.overflow = "hidden";
            var hdId = gd.id + "_ghostDebugHeader";
            var hdEl = document.getElementById(hdId);
            if (!hdEl) {
                hdEl = document.createElement("div");
                hdEl.id = hdId;
                hdEl.className = "incasa-map-debug-overlay-header";
                hdEl.innerHTML = '<span style="font-weight:600;letter-spacing:0.2px;">Progress...</span><button type="button" aria-label="Close Ghost Debug" title="Close" style="margin-left:10px;border:none;background:rgba(255,255,255,0.16);color:#fff;cursor:pointer;font-size:16px;font-weight:700;line-height:1;padding:2px 8px;border-radius:4px;">X</button>';
                hdEl.style.position = "absolute";
                hdEl.style.left = "8px";
                hdEl.style.top = "8px";
                hdEl.style.zIndex = "2147483647";
                hdEl.style.display = "flex";
                hdEl.style.alignItems = "center";
                hdEl.style.gap = "6px";
                hdEl.style.fontSize = "12px";
                hdEl.style.color = "#fff";
                hdEl.style.background = "rgba(10,10,10,0.65)";
                hdEl.style.padding = "5px 8px";
                hdEl.style.borderRadius = "6px";
                hdEl.style.pointerEvents = "auto";
                gd.appendChild(hdEl);
                try {
                    var hdCloseBtn = hdEl.querySelector("button");
                    if (hdCloseBtn) {
                        hdCloseBtn.addEventListener("click", function(ev) {
                            try {
                                if (ev && ev.preventDefault) {
                                    ev.preventDefault();
                                }
                                if (ev && ev.stopPropagation) {
                                    ev.stopPropagation();
                                }
                            } catch (eStopDbgEv) {}
                            if (typeof JSSHOP.ads.setNuMapGhostCaptureDebug == "function") {
                                JSSHOP.ads.setNuMapGhostCaptureDebug(false);
                            }
                        });
                    }
                } catch (eHdBtnBind) {
                    console.log("applyNuMapGhostCaptureDebugVisibility.headerBind: " + eHdBtnBind);
                }
            }
            if (isOn) {
                gd.style.left = "auto";
                gd.style.right = "16px";
                gd.style.top = "132px";
                gd.style.transform = "none";
                gd.style.opacity = "1";
                gd.style.visibility = "visible";
                gd.style.display = "block";
                gd.style.pointerEvents = "auto";
                gd.style.zIndex = "2147483647";
                gd.style.border = "2px solid #0a84ff";
                gd.style.boxShadow = "0 8px 24px rgba(0,0,0,0.45)";
                gd.style.background = "#111";
                gd.style.maxWidth = "min(86vw, 900px)";
                gd.style.maxHeight = "min(72vh, 620px)";
                hdEl.style.display = "flex";
            } else {
                gd.style.left = "8px";
                gd.style.right = "auto";
                gd.style.top = "8px";
                gd.style.opacity = "0.01";
                gd.style.visibility = "visible";
                gd.style.display = "block";
                gd.style.pointerEvents = "none";
                gd.style.zIndex = "2";
                gd.style.border = "0";
                gd.style.boxShadow = "none";
                gd.style.background = "transparent";
                gd.style.maxWidth = "none";
                gd.style.maxHeight = "none";
                gd.style.transform = "none";
                if (hdEl) {
                    hdEl.style.display = "none";
                }
            }
            try {
                var ghostPlaybackObj = (JSSHOP.ads.nuMapPlaybackRegistry && gd.id) ? JSSHOP.ads.nuMapPlaybackRegistry[gd.id] : null;
                var ghostMapObj = (ghostPlaybackObj && ghostPlaybackObj.map) ? ghostPlaybackObj.map : null;
                if (ghostMapObj && typeof ghostMapObj.invalidateSize == "function") {
                    window.setTimeout(function(gm) {
                        try {
                            gm.invalidateSize({ animate: false, pan: false });
                        } catch (eGhostInvalidateDelayed) {
                            try { gm.invalidateSize(); } catch (eGhostInvalidateFallback) {}
                        }
                    }.bind(null, ghostMapObj), isOn ? 25 : 40);
                }
            } catch (eGhostInvalidateOuter) {
                console.log("applyNuMapGhostCaptureDebugVisibility.invalidate: " + eGhostInvalidateOuter);
            }
        }
        console.log("[MAP-VIDEO] ghost debug visibility applied", { enabled: isOn, panels: ghostDivs.length });
        return ghostDivs.length;
    } catch (eApplyGhostDbg) {
        console.log("applyNuMapGhostCaptureDebugVisibility: " + eApplyGhostDbg);
        return 0;
    }
};

JSSHOP.ads.shouldShowNuMapGhostDebugToggle = function(mapDivId) {
    try {
        var pageId = (typeof pid != "undefined") ? String(pid || "") : "";
        var isAllowedPage = (pageId == "aa-add-post" || pageId == "aa-edit-post");
        if (!isAllowedPage) {
            return false;
        }
        if (!mapDivId || !JSSHOP.ads.nuMapPlaybackRegistry || !JSSHOP.ads.nuMapPlaybackRegistry[mapDivId]) {
            return false;
        }
        var pObj = JSSHOP.ads.nuMapPlaybackRegistry[mapDivId];
        return (String((pObj && pObj.isCapturingVideo) || "no").toLowerCase() == "yes");
    } catch (eShouldShowGhostDbg) {
        console.log("shouldShowNuMapGhostDebugToggle: " + eShouldShowGhostDbg);
        return false;
    }
};

JSSHOP.ads.updateNuMapGhostDebugToggleVisibility = function(mapDivId) {
    try {
        var showDbg = (typeof JSSHOP.ads.shouldShowNuMapGhostDebugToggle == "function") ? JSSHOP.ads.shouldShowNuMapGhostDebugToggle(mapDivId) : false;
        var selector = ".incasa-map-debug-toggle-btn[data-incasa-mapdivid='" + String(mapDivId || "") + "']";
        var dbgBtns = document.querySelectorAll(selector);
        for (var bi = 0; bi < dbgBtns.length; bi++) {
            if (!dbgBtns[bi]) {
                continue;
            }
            dbgBtns[bi].style.display = showDbg ? "block" : "none";
        }
        if (showDbg && typeof JSSHOP.ads.syncNuMapGhostDebugButtonStates == "function") {
            JSSHOP.ads.syncNuMapGhostDebugButtonStates((typeof JSSHOP.ads.isNuMapGhostCaptureDebugEnabled == "function") ? JSSHOP.ads.isNuMapGhostCaptureDebugEnabled() : false);
        }
    } catch (eUpdateGhostDbgVis) {
        console.log("updateNuMapGhostDebugToggleVisibility: " + eUpdateGhostDbgVis);
    }
};

JSSHOP.ads.getMapVideo = function(mapDivIdOrIndex) {
    try {
        console.log("[MAP-VIDEO] request", { input: mapDivIdOrIndex });
        var mapDivId = "";
        if (typeof mapDivIdOrIndex == "string") {
            mapDivId = String(mapDivIdOrIndex);
        } else if (typeof mapDivIdOrIndex == "number") {
            var mapKeysArr = Object.keys(JSSHOP.ads.nuMapPlaybackRegistry || {});
            if (mapDivIdOrIndex >= 0 && mapDivIdOrIndex < mapKeysArr.length) {
                mapDivId = mapKeysArr[mapDivIdOrIndex];
            }
        }
        if (!mapDivId) {
            console.log("[MAP-VIDEO] abort: no mapDivId resolved");
            return;
        }
        if (!JSSHOP.ads.nuMapPlaybackRegistry || !JSSHOP.ads.nuMapPlaybackRegistry[mapDivId]) {
            console.log("[MAP-VIDEO] abort: no playback registry", { mapDivId: mapDivId });
            return;
        }
        var playbackObj = JSSHOP.ads.nuMapPlaybackRegistry[mapDivId];
        var baseMarkersArr = (playbackObj && playbackObj.markers && playbackObj.markers.length) ? playbackObj.markers : [];
        var captureMarkersArr = [];
        try {
            captureMarkersArr = JSON.parse(JSON.stringify(baseMarkersArr));
        } catch (eCloneCaptureMarkers) {
            captureMarkersArr = baseMarkersArr.slice ? baseMarkersArr.slice(0) : [];
        }
        try {
            for (var cmi = 0; cmi < captureMarkersArr.length; cmi++) {
                if (!captureMarkersArr[cmi]) {
                    continue;
                }
                if (typeof JSSHOP.ads.getNuMapMarkerIconUrl == "function") {
                    captureMarkersArr[cmi].icn = JSSHOP.ads.getNuMapMarkerIconUrl(captureMarkersArr[cmi].icn, "images/logo_small_oct.png");
                }
            }
            playbackObj.markers = captureMarkersArr;
            console.log("[MAP-VIDEO] capture markers snapshot", {
                mapDivId: mapDivId,
                markerCount: captureMarkersArr.length,
                markers: captureMarkersArr
            });
        } catch (eNormCaptureMarkers) {
            console.log("getMapVideo.normalizeCaptureMarkers: " + eNormCaptureMarkers);
        }
        JSSHOP.ads.logNuMapCaptureProgress(mapDivId, "start", "Preparing map video capture...", 2, "running");
        if (!playbackObj.map || !playbackObj.bounds) {
            console.log("[MAP-VIDEO] abort: missing map or bounds", { mapDivId: mapDivId });
            JSSHOP.ads.logNuMapCaptureProgress(mapDivId, "error", "Map capture aborted: missing map or bounds.", 100, "error");
            return;
        }
        var markerCount = (captureMarkersArr && captureMarkersArr.length) ? captureMarkersArr.length : 0;
        if (markerCount <= 2) {
            console.log("[MAP-VIDEO] abort: insufficient markers", { markerCount: markerCount });
            JSSHOP.ads.logNuMapCaptureProgress(mapDivId, "error", "Map capture aborted: select at least 3 markers.", 100, "error");
            return;
        }
        var mapEffectVal = JSSHOP.ads.getNormalizedMapEffect(playbackObj.effect, "fitbounds");
        if (mapEffectVal != "flyto") {
            console.log("[MAP-VIDEO] abort: effect is not flyto", { effect: mapEffectVal });
            JSSHOP.ads.logNuMapCaptureProgress(mapDivId, "error", "Map capture aborted: map effect must be flyto.", 100, "error");
            return;
        }
        if (playbackObj.isCapturingVideo == "yes") {
            console.log("[MAP-VIDEO] abort: capture already in progress", { mapDivId: mapDivId });
            JSSHOP.ads.logNuMapCaptureProgress(mapDivId, "error", "Map capture already running for this map.", 100, "error");
            return;
        }

        playbackObj.isCapturingVideo = "yes";
        try {
            if (typeof JSSHOP.ads.updateNuMapGhostDebugToggleVisibility == "function") {
                JSSHOP.ads.updateNuMapGhostDebugToggleVisibility(mapDivId);
            }
        } catch (eShowDbgToggleStart) {
            console.log("getMapVideo.showDbgToggle: " + eShowDbgToggleStart);
        }
        var originalFlySpeedForCapture = String(playbackObj.flySpeed || "normal");
        var useCanvasRenderer = "html2canvas";
        var forceCanvasRenderer = true;
        var configCanvasRenderer = "";
                    var rawForceCanvasRenderer = String(
                        playbackObj.forceCanvasRenderer ||
                        playbackObj.captureForceCanvasRenderer ||
                        playbackObj.inpMapPstForceCanvasRenderer ||
                        (playbackObj.mapConfigObj && (
                            playbackObj.mapConfigObj.forceCanvasRenderer ||
                            playbackObj.mapConfigObj.captureForceCanvasRenderer ||
                            playbackObj.mapConfigObj.inpMapPstForceCanvasRenderer
                        )) ||
                        "yes"
                    ).toLowerCase();
                    if (rawForceCanvasRenderer == "yes" || rawForceCanvasRenderer == "true" || rawForceCanvasRenderer == "on" || rawForceCanvasRenderer == "1") {
                        forceCanvasRenderer = true;
                    } else {
                        forceCanvasRenderer = false;
                    }
        try {
            configCanvasRenderer = String(
                (playbackObj.captureCanvasRenderer ||
                (playbackObj.mapConfigObj && playbackObj.mapConfigObj.captureCanvasRenderer) ||
                playbackObj.useCanvasRenderer ||
                (playbackObj.mapConfigObj && playbackObj.mapConfigObj.useCanvasRenderer) ||
                "")
            ).toLowerCase();
            if (forceCanvasRenderer !== true) {
                if (configCanvasRenderer == "html2canvas") {
                    useCanvasRenderer = "html2canvas";
                } else if (configCanvasRenderer == "snapdom") {
                    useCanvasRenderer = "snapdom";
                }
            }
        } catch (eRendererPref) {}
        console.log("[MAP-VIDEO] renderer resolved", {
            useCanvasRenderer: useCanvasRenderer,
            forceCanvasRenderer: forceCanvasRenderer,
            configCanvasRenderer: configCanvasRenderer
        });
        playbackObj.flySpeed = "capture_super_slow";
        console.log("[MAP-VIDEO] init", {
            mapDivId: mapDivId,
            markerCount: markerCount,
            effect: mapEffectVal,
            speed: originalFlySpeedForCapture,
            captureReplaySpeed: playbackObj.flySpeed,
            useCanvasRenderer: useCanvasRenderer
        });
        JSSHOP.ads.logNuMapCaptureProgress(mapDivId, "start", "Loading capture libraries...", 6, "running");
        JSSHOP.ads.ensureNuMapCaptureLibs(function() {
            try {
                if (typeof CCapture == "undefined") {
                    console.log("[MAP-VIDEO] abort: CCapture unavailable");
                    playbackObj.flySpeed = originalFlySpeedForCapture;
                    playbackObj.isCapturingVideo = "no";
                    JSSHOP.ads.logNuMapCaptureProgress(mapDivId, "error", "CCapture unavailable.", 100, "error");
                    return;
                }
                var mapObj = playbackObj.map;
                if (!mapObj || typeof mapObj.getContainer != "function") {
                    console.log("[MAP-VIDEO] abort: invalid map object");
                    playbackObj.flySpeed = originalFlySpeedForCapture;
                    playbackObj.isCapturingVideo = "no";
                    JSSHOP.ads.logNuMapCaptureProgress(mapDivId, "error", "Invalid map object for capture.", 100, "error");
                    return;
                }
                var mapContainer = mapObj.getContainer();
                if (!mapContainer) {
                    console.log("[MAP-VIDEO] abort: map container missing");
                    playbackObj.flySpeed = originalFlySpeedForCapture;
                    playbackObj.isCapturingVideo = "no";
                    JSSHOP.ads.logNuMapCaptureProgress(mapDivId, "error", "Map container not found.", 100, "error");
                    return;
                }
                var captureMapObj = mapObj;
                var captureMapContainer = mapContainer;
                var ghostMapDivId = "";
                var ghostMapDivEl = null;
                var ghostMapCreated = false;
                var captureSnapdomTargetEl = null;

                var precomputedFrames = [];
                try {
                    precomputedFrames = JSSHOP.ads.normalizeNuMapCaptureFrameBounds(playbackObj.captureFrameBoundsArr || []);
                    if (!precomputedFrames.length) {
                        precomputedFrames = JSSHOP.ads.buildNuMapCaptureFrameBoundsArray(playbackObj, true);
                        precomputedFrames = JSSHOP.ads.normalizeNuMapCaptureFrameBounds(precomputedFrames || []);
                    }
                } catch (eFrameBuildForCapture) {
                    console.log("getMapVideo.precomputedFrames: " + eFrameBuildForCapture);
                }
                if (!precomputedFrames.length) {
                    playbackObj.flySpeed = originalFlySpeedForCapture;
                    playbackObj.isCapturingVideo = "no";
                    JSSHOP.ads.logNuMapCaptureProgress(mapDivId, "error", "No precomputed frame bounds available.", 100, "error");
                    return;
                }
                JSSHOP.ads.logNuMapCaptureProgress(mapDivId, "status", "Capture frames ready: " + precomputedFrames.length, 12, "running");

                var mapCanvasProbe = JSSHOP.ads.getNuMapCaptureCanvas(mapObj);
                var tileImgCount = 0;
                try {
                    tileImgCount = mapContainer.querySelectorAll("img.leaflet-tile").length;
                } catch (eTileCount) {
                    tileImgCount = 0;
                }
                console.log("[MAP-VIDEO] renderer probe", {
                    hasDirectCanvas: !!mapCanvasProbe,
                    directCanvasSize: mapCanvasProbe ? (mapCanvasProbe.width + "x" + mapCanvasProbe.height) : "none",
                    tileImageCount: tileImgCount,
                    rendererType: (mapObj._renderer && mapObj._renderer.constructor && mapObj._renderer.constructor.name) ? mapObj._renderer.constructor.name : "unknown"
                });
                var captureFps = parseInt(playbackObj.captureFps, 10);
                if (isNaN(captureFps) || captureFps <= 0) {
                    captureFps = 4;
                }
                captureFps = Math.max(4, Math.min(30, captureFps));
                var timingCfg = JSSHOP.ads.getNuMapFlyTimingConfig(playbackObj.flySpeed, "normal");
                var playbackOverviewMs = Math.max(250, Math.round((parseFloat(timingCfg.overviewDurSec) || (timingCfg.speedDurSec * 0.65)) * 1000));
                var playbackZoomMs = Math.max(250, Math.round((parseFloat(timingCfg.speedDurSec) || 1.4) * 1000));
                var playbackHoldMs = Math.max(2000, parseInt(timingCfg.markerHoldMs, 10) || 2000);
                var totalMs = Math.max(2600, (markerCount * (playbackOverviewMs + playbackZoomMs + playbackHoldMs)) + 900);
                var frameIntervalMs = parseInt(playbackObj.captureFrameIntervalMs, 10);
                if (isNaN(frameIntervalMs) || frameIntervalMs <= 0) {
                    frameIntervalMs = 250;
                }
                frameIntervalMs = Math.max(120, Math.min(2500, frameIntervalMs));
                var effectiveCaptureFps = Math.max(4, Math.min(30, captureFps));
                var intervalLimitedCaptureFps = Math.max(1, Math.round(1000 / frameIntervalMs));
                var outputCaptureFps = Math.max(1, Math.min(effectiveCaptureFps, intervalLimitedCaptureFps));
                var captureFrameDurationMs = Math.max(1, Math.round(1000 / outputCaptureFps));
                var frameCompensationPrefOn = (String((playbackObj.captureFrameCompensation || "no")).toLowerCase() == "yes");
                var useFrameCompensation = frameCompensationPrefOn;
                var useMoveendCaptureGate = (String((playbackObj.captureUseMoveendGate || (playbackObj.mapConfigObj && playbackObj.mapConfigObj.captureUseMoveendGate) || "no")).toLowerCase() == "yes");
                var captureTimer = null;
                var finishTimeoutId = null;
                var watchdogTimer = null;
                var didStop = false;
                var captureStartTs = Date.now();
                var capturedFrames = 0;
                var captureTickCount = 0;
                var captureModeOn = false;
                var snapdomTargetCaptureModeOn = false;
                var noFrameCycles = 0;
                var lastCapturedFrameTs = 0;
                var captureLoopStarted = false;
                var activeFrameMeta = null;
                var useSimpleGhostCaptureMode = false;
                var captureOverlayImageCache = {};
                var fixedCaptureWidth = 340;
                var fixedCaptureHeight = 340;
                var fixedCaptureCanvas = null;
                var nativeSetInterval = window.setInterval.bind(window);
                var nativeClearInterval = window.clearInterval.bind(window);
                var nativeSetTimeout = window.setTimeout.bind(window);
                var nativeClearTimeout = window.clearTimeout.bind(window);
                var capturer = new CCapture({ format: 'webm', framerate: outputCaptureFps, verbose: false });
                var ghostDebugCaptureEnabled = (typeof JSSHOP.ads.isNuMapGhostCaptureDebugEnabled == "function") ? JSSHOP.ads.isNuMapGhostCaptureDebugEnabled() : false;
                // Ensure global intVidFrameNum
                if (typeof window.intVidFrameNum === "undefined") {
                    window.intVidFrameNum = 0;
                }
                var intVidFrameNum = window.intVidFrameNum;
                console.log("[MAP-VIDEO] capture mode", {
                    mapDivId: mapDivId,
                    simpleGhostMode: useSimpleGhostCaptureMode,
                    composedPreferred: true,
                    rendererPreference: useCanvasRenderer,
                    keyframes: (precomputedFrames && precomputedFrames.length) ? precomputedFrames.length : 0,
                    effectiveCaptureFps: effectiveCaptureFps,
                    outputCaptureFps: outputCaptureFps,
                    frameIntervalMs: frameIntervalMs,
                    ghostDebugEnabled: ghostDebugCaptureEnabled,
                    moveendCaptureGate: useMoveendCaptureGate
                });
                try {
                    var previewSnapdomTarget = document.getElementById("dvDemoView");
                    if (previewSnapdomTarget) {
                        captureSnapdomTargetEl = previewSnapdomTarget;
                    } else {
                        captureSnapdomTargetEl = mapContainer;
                    }
                    console.log("[MAP-VIDEO] preview snapdom target", {
                        mapDivId: mapDivId,
                        targetId: String((captureSnapdomTargetEl && captureSnapdomTargetEl.id) || ""),
                        targetTag: String((captureSnapdomTargetEl && captureSnapdomTargetEl.tagName) || "")
                    });
                } catch (ePreviewSnapdomTarget) {
                    captureSnapdomTargetEl = mapContainer;
                    console.log("getMapVideo.previewSnapdomTarget: " + ePreviewSnapdomTarget);
                }

                var cleanupGhostCaptureMap = function() {
                    var keepDebugVisible = (ghostDebugCaptureEnabled === true);
                    var doCleanup = function() {
                        try {
                            if (captureMapObj && ghostMapCreated && captureMapObj != mapObj && typeof captureMapObj.remove == "function") {
                                captureMapObj.remove();
                            }
                        } catch (eGhostMapRemove) {
                            console.log("getMapVideo.cleanupGhostMap.remove: " + eGhostMapRemove);
                        }
                        try {
                            if (ghostMapDivId && JSSHOP.ads.nuMapPlaybackRegistry && JSSHOP.ads.nuMapPlaybackRegistry[ghostMapDivId]) {
                                delete JSSHOP.ads.nuMapPlaybackRegistry[ghostMapDivId];
                            }
                        } catch (eGhostMapReg) {
                            console.log("getMapVideo.cleanupGhostMap.registry: " + eGhostMapReg);
                        }
                        try {
                            if (ghostMapDivEl && ghostMapDivEl.parentNode) {
                                ghostMapDivEl.parentNode.removeChild(ghostMapDivEl);
                            }
                        } catch (eGhostMapDom) {
                            console.log("getMapVideo.cleanupGhostMap.dom: " + eGhostMapDom);
                        }
                        captureMapObj = mapObj;
                        captureMapContainer = mapContainer;
                        captureSnapdomTargetEl = null;
                    };

                    if (keepDebugVisible && ghostMapDivEl) {
                        try {
                            ghostMapDivEl.style.opacity = "1";
                            ghostMapDivEl.style.visibility = "visible";
                            ghostMapDivEl.style.display = "block";
                            ghostMapDivEl.style.border = "2px solid #35c759";
                        } catch (eGhostKeepDbg) {}
                        nativeSetTimeout(function() {
                            doCleanup();
                        }, 8000);
                        return;
                    }

                    doCleanup();
                };

                var initGhostCaptureMap = function(cbReady) {
                    var doneFn = (typeof cbReady == "function") ? cbReady : function(){};
                    try {
                        var srcW = parseInt(mapContainer.clientWidth || mapContainer.offsetWidth || mapContainer.scrollWidth || 0, 10);
                        var srcH = parseInt(mapContainer.clientHeight || mapContainer.offsetHeight || mapContainer.scrollHeight || 0, 10);
                        try {
                            if (mapObj && typeof mapObj.getSize == "function") {
                                var mapSz = mapObj.getSize();
                                if (mapSz && mapSz.x && mapSz.y) {
                                    srcW = Math.max(srcW || 0, parseInt(mapSz.x, 10) || 0);
                                    srcH = Math.max(srcH || 0, parseInt(mapSz.y, 10) || 0);
                                }
                            }
                        } catch (eGhostSrcMapSize) {}
                        try {
                            if (mapContainer && typeof mapContainer.getBoundingClientRect == "function") {
                                var srcRect = mapContainer.getBoundingClientRect();
                                if (srcRect) {
                                    srcW = Math.max(srcW || 0, parseInt(srcRect.width || 0, 10) || 0);
                                    srcH = Math.max(srcH || 0, parseInt(srcRect.height || 0, 10) || 0);
                                }
                            }
                        } catch (eGhostSrcRect) {}
                        srcW = Math.max(640, parseInt(srcW || 0, 10));
                        srcH = Math.max(420, parseInt(srcH || 0, 10));
                        ghostMapDivId = "dvMapGhostCapture_" + String(mapDivId).replace(/[^a-zA-Z0-9_-]/g, "") + "_" + Date.now();
                        ghostMapDivEl = document.createElement("div");
                        ghostMapDivEl.id = ghostMapDivId;
                        ghostMapDivEl.style.position = "fixed";
                        var ghostDebugOn = (ghostDebugCaptureEnabled === true);
                        if (ghostDebugOn) {
                            ghostMapDivEl.style.left = "auto";
                            ghostMapDivEl.style.right = "16px";
                            ghostMapDivEl.style.top = "132px";
                            ghostMapDivEl.style.opacity = "1";
                            ghostMapDivEl.style.visibility = "visible";
                            ghostMapDivEl.style.display = "block";
                            ghostMapDivEl.style.pointerEvents = "auto";
                            ghostMapDivEl.style.zIndex = "2147483647";
                            ghostMapDivEl.style.border = "2px solid #0a84ff";
                            ghostMapDivEl.style.boxShadow = "0 8px 24px rgba(0,0,0,0.45)";
                            ghostMapDivEl.style.background = "#111";
                            ghostMapDivEl.style.maxWidth = "min(86vw, 900px)";
                            ghostMapDivEl.style.maxHeight = "min(72vh, 620px)";
                            console.log("[MAP-VIDEO] ghost debug panel visible", { ghostMapDivId: ghostMapDivId, width: srcW, height: srcH });
                        } else {
                            ghostMapDivEl.style.left = "8px";
                            ghostMapDivEl.style.right = "auto";
                            ghostMapDivEl.style.top = "8px";
                            ghostMapDivEl.style.opacity = "0.01";
                            ghostMapDivEl.style.visibility = "visible";
                            ghostMapDivEl.style.display = "block";
                            ghostMapDivEl.style.pointerEvents = "none";
                            ghostMapDivEl.style.zIndex = "2";
                            ghostMapDivEl.style.border = "0";
                            ghostMapDivEl.style.boxShadow = "none";
                            ghostMapDivEl.style.background = "transparent";
                            ghostMapDivEl.style.maxWidth = "none";
                            ghostMapDivEl.style.maxHeight = "none";
                            ghostMapDivEl.style.transform = "none";
                        }
                        ghostMapDivEl.style.width = srcW + "px";
                        ghostMapDivEl.style.height = srcH + "px";
                        ghostMapDivEl.style.overflow = "hidden";
                        document.body.appendChild(ghostMapDivEl);
                        try {
                            if (typeof JSSHOP.ads.applyNuMapGhostCaptureDebugVisibility == "function") {
                                JSSHOP.ads.applyNuMapGhostCaptureDebugVisibility(ghostDebugOn);
                            }
                        } catch (eGhostDbgInitApply) {
                            console.log("getMapVideo.ghostDebugInitApply: " + eGhostDbgInitApply);
                        }

                        var cfgBase = (playbackObj.mapConfigObj && typeof playbackObj.mapConfigObj == "object") ? playbackObj.mapConfigObj : {};
                        var ghostCfg = {
                            mrkrs: captureMarkersArr || [],
                            mapType: cfgBase.mapType || "street",
                            mapEffect: "fitbounds",
                            mapFlySpeed: "normal",
                            showSellerBadge: cfgBase.showSellerBadge || "no",
                            sellerName: cfgBase.sellerName || "",
                            sellerIcon: cfgBase.sellerIcon || "",
                            sellerUid: cfgBase.sellerUid || "",
                            captureFps: captureFps,
                            captureFrameIntervalMs: frameIntervalMs,
                            mdvid: ghostMapDivId
                        };

                        console.log("[MAP-VIDEO] ghost marker payload", {
                            mapDivId: mapDivId,
                            ghostMapDivId: ghostMapDivId,
                            markerCount: (ghostCfg.mrkrs && ghostCfg.mrkrs.length) ? ghostCfg.mrkrs.length : 0,
                            markers: ghostCfg.mrkrs
                        });

                        JSSHOP.ads.doNurGenMap(ghostCfg, ghostMapDivId);
                        ghostMapCreated = true;
                        try { map = mapObj; } catch (eRestoreMapRef1) {}

                        var waitStartedTs = Date.now();
                        var waitFn = function() {
                            if (didStop) {
                                doneFn(false);
                                return;
                            }
                            var ghostPlayback = (JSSHOP.ads.nuMapPlaybackRegistry && ghostMapDivId) ? JSSHOP.ads.nuMapPlaybackRegistry[ghostMapDivId] : null;
                            var ghostMapObj = (ghostPlayback && ghostPlayback.map) ? ghostPlayback.map : null;
                            var ghostContainer = (ghostMapObj && typeof ghostMapObj.getContainer == "function") ? ghostMapObj.getContainer() : null;
                            var ghostCanvasProbe = ghostMapObj ? JSSHOP.ads.getNuMapCaptureCanvas(ghostMapObj) : null;
                            if (ghostMapObj && ghostContainer && ghostCanvasProbe) {
                                captureMapObj = ghostMapObj;
                                captureMapContainer = ghostContainer;
                                captureSnapdomTargetEl = ghostMapDivEl || ghostContainer;
                                try {
                                    if (captureMapObj && typeof captureMapObj.invalidateSize == "function") {
                                        captureMapObj.invalidateSize({ animate: false, pan: false });
                                        nativeSetTimeout(function() {
                                            try { captureMapObj.invalidateSize({ animate: false, pan: false }); } catch (eGhostInvSize2) {}
                                        }, 30);
                                    }
                                } catch (eGhostInvSize) {}
                                try { map = mapObj; } catch (eRestoreMapRef2) {}
                                doneFn(true);
                                return;
                            }
                            if ((Date.now() - waitStartedTs) > 9000) {
                                console.log("[MAP-VIDEO] ghost map init timeout", { ghostMapDivId: ghostMapDivId });
                                doneFn(false);
                                return;
                            }
                            nativeSetTimeout(waitFn, 120);
                        };
                        waitFn();
                    } catch (eGhostInit) {
                        console.log("getMapVideo.initGhostCaptureMap: " + eGhostInit);
                        doneFn(false);
                    }
                };

                var getCompensatedFrameCopies = function() {
                    var nowTs = Date.now();
                    if (!lastCapturedFrameTs) {
                        lastCapturedFrameTs = nowTs;
                        return 1;
                    }
                    var elapsedMs = nowTs - lastCapturedFrameTs;
                    lastCapturedFrameTs = nowTs;
                    if (elapsedMs <= captureFrameDurationMs) {
                        return 1;
                    }
                    var copies = Math.ceil(elapsedMs / captureFrameDurationMs);
                    if (copies < 1) {
                        copies = 1;
                    }
                    if (copies > 6) {
                        copies = 6;
                    }
                    return copies;
                };

                var getFixedCaptureCanvas = function(frameCanvas, sourceName) {
                    try {
                        if (!frameCanvas || !frameCanvas.width || !frameCanvas.height) {
                            return frameCanvas;
                        }
                        if (!fixedCaptureCanvas) {
                            fixedCaptureCanvas = document.createElement("canvas");
                            fixedCaptureCanvas.width = fixedCaptureWidth;
                            fixedCaptureCanvas.height = fixedCaptureHeight;
                        }
                        var fxCtx = fixedCaptureCanvas.getContext("2d", { alpha: true });
                        if (!fxCtx) {
                            return frameCanvas;
                        }
                        fxCtx.clearRect(0, 0, fixedCaptureWidth, fixedCaptureHeight);
                        fxCtx.drawImage(frameCanvas, 0, 0, fixedCaptureWidth, fixedCaptureHeight);
                        return fixedCaptureCanvas;
                    } catch (eFixedCaptureCanvas) {
                        console.log("getMapVideo.fixedCaptureCanvas: " + eFixedCaptureCanvas, { source: sourceName || "unknown" });
                        return frameCanvas;
                    }
                };

                var captureFrameWithCompensation = function(frameCanvas, forceSingleCopy) {
                    if (!frameCanvas || didStop) {
                        return;
                    }
                    var captureCanvasFinal = getFixedCaptureCanvas(frameCanvas, "captureFrameWithCompensation");
                    var copies = 1;
                    if (forceSingleCopy !== true && useFrameCompensation === true) {
                        copies = getCompensatedFrameCopies();
                        var isAtMaxMarkerZoom = false;
                        try {
                            if (activeFrameMeta && activeFrameMeta.isMarkerFrame === true && activeFrameMeta.isAtMaxMarkerZoom === true) {
                                isAtMaxMarkerZoom = true;
                            }
                        } catch (eCompActiveMeta) {}
                        if (!isAtMaxMarkerZoom && copies > 2) {
                            copies = 2;
                        }
                    }
                    for (var ci = 0; ci < copies; ci++) {
                        capturer.capture(captureCanvasFinal);
                        capturedFrames++;
                    }
                    if (copies > 1) {
                        console.log("[MAP-VIDEO] frame compensation", { copies: copies, frameDurationMs: captureFrameDurationMs, intervalMs: frameIntervalMs });
                    }
                };

                var setSnapdomTargetCaptureMode = function(isOn) {
                    try {
                        if (!captureSnapdomTargetEl || !captureSnapdomTargetEl.classList) {
                            return;
                        }
                        if (isOn) {
                            captureSnapdomTargetEl.classList.add("incasa-map-capture-mode");
                            snapdomTargetCaptureModeOn = true;
                        } else {
                            if (snapdomTargetCaptureModeOn) {
                                captureSnapdomTargetEl.classList.remove("incasa-map-capture-mode");
                            }
                            snapdomTargetCaptureModeOn = false;
                        }
                    } catch (eSnapTargetMode) {
                        console.log("getMapVideo.setSnapdomTargetCaptureMode: " + eSnapTargetMode);
                    }
                };

                var finishCapture = function() {
                    if (didStop) {
                        return;
                    }
                    didStop = true;
                    if (captureTimer) {
                        nativeClearInterval(captureTimer);
                        captureTimer = null;
                    }
                    if (finishTimeoutId) {
                        nativeClearTimeout(finishTimeoutId);
                        finishTimeoutId = null;
                    }
                    if (watchdogTimer) {
                        nativeClearInterval(watchdogTimer);
                        watchdogTimer = null;
                    }
                    var hadCaptureError = false;
                    var captureErrorMsg = "";
                    if (capturedFrames <= 0) {
                        try {
                            var fallbackCanvasAtFinish = JSSHOP.ads.getNuMapCaptureCanvas(captureMapObj);
                            if (fallbackCanvasAtFinish && fallbackCanvasAtFinish.width && fallbackCanvasAtFinish.height) {
                                captureFrameWithCompensation(fallbackCanvasAtFinish, true);
                                console.log("[MAP-VIDEO] finish fallback captured direct canvas", {
                                    mapDivId: mapDivId,
                                    w: fallbackCanvasAtFinish.width,
                                    h: fallbackCanvasAtFinish.height,
                                    capturedFrames: capturedFrames
                                });
                            }
                        } catch (eFinishFallbackCapture) {
                            console.log("getMapVideo.finish.fallbackCapture: " + eFinishFallbackCapture);
                        }
                    }
                    if (capturedFrames <= 0) {
                        hadCaptureError = true;
                        captureErrorMsg = "Map capture failed: no frames were captured.";
                    }
                    try {
                        capturer.stop();
                    } catch (eCapStop) {
                        console.log("getMapVideo.stop: " + eCapStop);
                    }
                    if (!hadCaptureError) {
                        try {
                            JSSHOP.ads.logNuMapCaptureProgress(mapDivId, "saving", "Saving video file...", 97, "running");
                            console.log("[MAP-VIDEO] saving", { mapDivId: mapDivId, capturedFrames: capturedFrames, totalMs: totalMs, fps: captureFps });
                            capturer.save();
                        } catch (eCapSave) {
                            hadCaptureError = true;
                            captureErrorMsg = "Map capture failed while saving the video.";
                            console.log("getMapVideo.save: " + eCapSave);
                        }
                    }
                    if (captureModeOn) {
                        JSSHOP.ads.setNuMapCaptureMode(captureMapObj, false);
                        captureModeOn = false;
                    }
                    setSnapdomTargetCaptureMode(false);
                    cleanupGhostCaptureMap();
                    playbackObj.isCapturingVideo = "no";
                    try {
                        if (typeof JSSHOP.ads.updateNuMapGhostDebugToggleVisibility == "function") {
                            JSSHOP.ads.updateNuMapGhostDebugToggleVisibility(mapDivId);
                        }
                    } catch (eHideDbgToggleDone) {
                        console.log("getMapVideo.hideDbgToggle.done: " + eHideDbgToggleDone);
                    }
                    playbackObj.flySpeed = originalFlySpeedForCapture;
                    console.log("[MAP-VIDEO] finished", { mapDivId: mapDivId, capturedFrames: capturedFrames });
                    if (hadCaptureError) {
                        JSSHOP.ads.logNuMapCaptureProgress(mapDivId, "error", captureErrorMsg || "Map video capture failed.", 100, "error");
                    } else {
                        JSSHOP.ads.logNuMapCaptureProgress(mapDivId, "done", "Map video ready. Download should begin.", 100, "done");
                    }
                };

                var waitForMapStable = function(cbDone) {
                    var doneFn = (typeof cbDone == "function") ? cbDone : function(){};
                    var startedAt = Date.now();
                    var maxWaitMs = 900;
                    var pollFn = function() {
                        if (didStop) {
                            doneFn();
                            return;
                        }
                        var pendingTiles = 0;
                        try {
                            pendingTiles = captureMapContainer.querySelectorAll("img.leaflet-tile:not(.leaflet-tile-loaded)").length;
                        } catch (ePendingTiles) {
                            pendingTiles = 0;
                        }
                        if (pendingTiles <= 0) {
                            doneFn();
                            return;
                        }
                        if ((Date.now() - startedAt) > maxWaitMs) {
                            console.log("[MAP-VIDEO] waitForMapStable timeout", { pendingTiles: pendingTiles });
                            doneFn();
                            return;
                        }
                        nativeSetTimeout(pollFn, 45);
                    };
                    pollFn();
                };

                var waitForMapMoveComplete = function(cbDone) {
                    var doneFn = (typeof cbDone == "function") ? cbDone : function(){};
                    if (!captureMapObj || typeof captureMapObj.once != "function") {
                        doneFn();
                        return;
                    }
                    var doneOnce = false;
                    var fallbackTimer = null;
                    var finish = function(reason) {
                        if (doneOnce) {
                            return;
                        }
                        doneOnce = true;
                        if (fallbackTimer) {
                            nativeClearTimeout(fallbackTimer);
                            fallbackTimer = null;
                        }
                        nativeSetTimeout(function() {
                            doneFn();
                        }, 18);
                    };
                    try {
                        captureMapObj.once("moveend", function() {
                            finish("moveend");
                        });
                        captureMapObj.once("zoomend", function() {
                            finish("zoomend");
                        });
                    } catch (eMoveendBind) {
                        doneFn();
                        return;
                    }
                    fallbackTimer = nativeSetTimeout(function() {
                        finish("timeout");
                    }, Math.max(500, frameIntervalMs * 3));
                };

                var captureFrameOnce = function(cbDone, progressRatio) {
                    var doneFn = (typeof cbDone == "function") ? cbDone : function(){};
                    if (didStop) {
                        doneFn();
                        return;
                    }

                    var frameStartedAt = Date.now();
                    var didFinishFrame = false;
                    var renderWatchdogId = null;

                    var safeDone = function() {
                        if (didFinishFrame) {
                            return;
                        }
                        didFinishFrame = true;
                        if (renderWatchdogId) {
                            nativeClearTimeout(renderWatchdogId);
                            renderWatchdogId = null;
                        }
                        doneFn();
                    };

                    var sanitizeCloneLinks = function(clonedDoc) {
                        try {
                            if (!clonedDoc || !clonedDoc.querySelectorAll) {
                                return;
                            }
                            var jsLinks = clonedDoc.querySelectorAll("a[href^='javascript:'], a[href^='JavaScript:']");
                            for (var ai = 0; ai < jsLinks.length; ai++) {
                                var aEl = jsLinks[ai];
                                if (!aEl) {
                                    continue;
                                }
                                aEl.setAttribute("href", "#");
                                aEl.setAttribute("onclick", "return false;");
                                aEl.style.pointerEvents = "none";
                            }
                            if (typeof JSSHOP.ads.normalizeNuMapCaptureMarkerIconSrcs == "function") {
                                JSSHOP.ads.normalizeNuMapCaptureMarkerIconSrcs(clonedDoc);
                            }
                        } catch (eSanitizeCloneLinks) {}
                    };

                    var isCanvasLikelyBlack = function(cnv) {
                        try {
                            if (!cnv || !cnv.width || !cnv.height) {
                                return false;
                            }
                            var cctx = cnv.getContext("2d", { willReadFrequently: true });
                            if (!cctx || typeof cctx.getImageData != "function") {
                                return false;
                            }
                            var samplePoints = [
                                [Math.floor(cnv.width * 0.2), Math.floor(cnv.height * 0.2)],
                                [Math.floor(cnv.width * 0.5), Math.floor(cnv.height * 0.5)],
                                [Math.floor(cnv.width * 0.8), Math.floor(cnv.height * 0.8)]
                            ];
                            var brightCount = 0;
                            for (var spi = 0; spi < samplePoints.length; spi++) {
                                var sx = Math.max(0, Math.min(cnv.width - 1, samplePoints[spi][0]));
                                var sy = Math.max(0, Math.min(cnv.height - 1, samplePoints[spi][1]));
                                var pix = cctx.getImageData(sx, sy, 1, 1).data;
                                var lum = (0.2126 * pix[0]) + (0.7152 * pix[1]) + (0.0722 * pix[2]);
                                if (pix[3] > 8 && lum > 8) {
                                    brightCount++;
                                }
                            }
                            return (brightCount === 0);
                        } catch (eCanvasBlackProbe) {
                            console.log("getMapVideo.captureFrame.blackProbe: " + eCanvasBlackProbe);
                            return false;
                        }
                    };

                    var captureFromDirectCanvas = function(sourceReason) {
                        var directMapCanvas = null;
                        try {
                            directMapCanvas = JSSHOP.ads.getNuMapCaptureCanvas(captureMapObj);
                        } catch (eDirectMapCanvas) {
                            directMapCanvas = null;
                        }
                        if (directMapCanvas) {
                            try {
                                captureFrameWithCompensation(directMapCanvas);
                                noFrameCycles = 0;
                                if ((captureTickCount % 8) === 1) {
                                    console.log("[MAP-VIDEO] captured direct canvas", {
                                        reason: sourceReason || "direct",
                                        w: directMapCanvas.width,
                                        h: directMapCanvas.height,
                                        elapsedMs: (Date.now() - frameStartedAt)
                                    });
                                }
                                safeDone();
                            } catch (eCapFrameDirect) {
                                console.log("getMapVideo.captureFrame.direct: " + eCapFrameDirect);
                                safeDone();
                            }
                            return;
                        }
                        noFrameCycles++;
                        if (noFrameCycles % 3 === 0) {
                            console.log("[MAP-VIDEO] no capture source", {
                                noFrameCycles: noFrameCycles,
                                ghostMapDivId: ghostMapDivId,
                                hasContainer: !!captureMapContainer,
                                reason: sourceReason || "unknown"
                            });
                        }
                        safeDone();
                    };

                    var captureFromHybridCanvas = function(sourceReason) {
                        var directMapCanvas = null;
                        try {
                            directMapCanvas = JSSHOP.ads.getNuMapCaptureCanvas(captureMapObj);
                        } catch (eHybridDirectProbe) {
                            directMapCanvas = null;
                        }
                        if (!directMapCanvas || !directMapCanvas.width || !directMapCanvas.height) {
                            captureFromDirectCanvas((sourceReason || "hybrid") + "-no-direct");
                            return;
                        }

                        var outCanvas = document.createElement("canvas");
                        outCanvas.width = directMapCanvas.width;
                        outCanvas.height = directMapCanvas.height;
                        var outCtx = outCanvas.getContext("2d", { alpha: true });
                        if (!outCtx) {
                            captureFromDirectCanvas((sourceReason || "hybrid") + "-no-ctx");
                            return;
                        }
                        try {
                            outCtx.clearRect(0, 0, outCanvas.width, outCanvas.height);
                            outCtx.drawImage(directMapCanvas, 0, 0, outCanvas.width, outCanvas.height);
                        } catch (eHybridBaseDraw) {
                            captureFromDirectCanvas((sourceReason || "hybrid") + "-base-draw");
                            return;
                        }
                        handleRenderedCanvas(outCanvas, "hybrid-direct-only");
                    };

                    var handleRenderedCanvas = function(renderedCanvas, sourceName) {
                        try {
                            if (!renderedCanvas || !renderedCanvas.width || !renderedCanvas.height) {
                                console.log("[MAP-VIDEO] rendered canvas invalid", { source: sourceName });
                                captureFromDirectCanvas(sourceName + "-invalid");
                                return;
                            }
                            var looksBlack = isCanvasLikelyBlack(renderedCanvas);
                            if (looksBlack) {
                                console.log("[MAP-VIDEO] rendered canvas appears black", {
                                    source: sourceName,
                                    w: renderedCanvas.width,
                                    h: renderedCanvas.height,
                                    elapsedMs: (Date.now() - frameStartedAt)
                                });
                                captureFromHybridCanvas(sourceName + "-black");
                                return;
                            }
                            captureFrameWithCompensation(renderedCanvas, true);
                            noFrameCycles = 0;
                            if ((captureTickCount % 6) === 1) {
                                console.log("[MAP-VIDEO] captured composed canvas", {
                                    source: sourceName,
                                    w: renderedCanvas.width,
                                    h: renderedCanvas.height,
                                    elapsedMs: (Date.now() - frameStartedAt)
                                });
                            }
                            safeDone();
                        } catch (eHandleRenderedCanvas) {
                            console.log("getMapVideo.captureFrame.handleRenderedCanvas: " + eHandleRenderedCanvas);
                            captureFromDirectCanvas(sourceName + "-error");
                        }
                    };

                    var captureFromComposedContainer = function() {
                        if (!captureMapContainer) {
                            captureFromDirectCanvas("no-container");
                            return;
                        }

                        try {
                            if (typeof JSSHOP.ads.normalizeNuMapCaptureMarkerIconSrcs == "function") {
                                JSSHOP.ads.normalizeNuMapCaptureMarkerIconSrcs(captureMapContainer);
                            }
                        } catch (eNormCaptureIcons) {}

                        renderWatchdogId = nativeSetTimeout(function() {
                            console.log("[MAP-VIDEO] composed render watchdog fallback", {
                                elapsedMs: (Date.now() - frameStartedAt),
                                tick: captureTickCount,
                                mapDivId: mapDivId
                            });
                            captureFromDirectCanvas("watchdog-direct");
                        }, Math.max(1200, frameIntervalMs * 4));

                        var renderWithSnapdom = function() {
                            try {
                                if (typeof snapdom == "undefined" || !snapdom || typeof snapdom.toCanvas != "function") {
                                    captureFromDirectCanvas("no-snapdom");
                                    return;
                                }
                                var snapTarget = captureSnapdomTargetEl || ghostMapDivEl || captureMapContainer;
                                if (!snapTarget) {
                                    captureFromDirectCanvas("no-snap-target");
                                    return;
                                }
                                if ((captureTickCount <= 2 || (captureTickCount % 10) === 0)) {
                                    console.log("[MAP-VIDEO] snapdom target", {
                                        id: String(snapTarget.id || ""),
                                        className: String(snapTarget.className || ""),
                                        tagName: String(snapTarget.tagName || ""),
                                        isGhostWrapper: !!(ghostMapDivEl && snapTarget === ghostMapDivEl)
                                    });
                                }
                                snapdom.toCanvas(snapTarget, { scale: 1 }).then(function(renderedCanvas) {
                                    handleRenderedCanvas(renderedCanvas, "snapdom");
                                }).catch(function(eSnapdomCap) {
                                    console.log("getMapVideo.captureFrame.snapdom.err: " + eSnapdomCap);
                                    captureFromDirectCanvas("snapdom-catch");
                                });
                            } catch (eSnapdomOuter) {
                                console.log("getMapVideo.captureFrame.snapdom.outer: " + eSnapdomOuter);
                                captureFromDirectCanvas("snapdom-outer");
                            }
                        };

                        var renderWithHtml2Canvas = function() {
                            try {
                                if (typeof html2canvas == "undefined" || typeof html2canvas != "function") {
                                    captureFromDirectCanvas("no-html2canvas");
                                    return;
                                }
                                var h2cTarget = captureSnapdomTargetEl || ghostMapDivEl || captureMapContainer;
                                if (!h2cTarget) {
                                    captureFromDirectCanvas("no-html2canvas-target");
                                    return;
                                }
                                if ((captureTickCount <= 2 || (captureTickCount % 10) === 0)) {
                                    console.log("[MAP-VIDEO] html2canvas target", {
                                        id: String(h2cTarget.id || ""),
                                        className: String(h2cTarget.className || ""),
                                        tagName: String(h2cTarget.tagName || "")
                                    });
                                }
                                html2canvas(h2cTarget, {
                                    backgroundColor: null,
                                    scale: 1,
                                    useCORS: true,
                                    logging: false,
                                    onclone: function(clonedDoc) {
                                        sanitizeCloneLinks(clonedDoc);
                                    }
                                }).then(function(renderedCanvas) {
                                    handleRenderedCanvas(renderedCanvas, "html2canvas");
                                }).catch(function(eHtml2Cap) {
                                    console.log("getMapVideo.captureFrame.html2canvas.err: " + eHtml2Cap);
                                    captureFromDirectCanvas("html2canvas-catch");
                                });
                            } catch (eHtml2Outer) {
                                console.log("getMapVideo.captureFrame.html2canvas.outer: " + eHtml2Outer);
                                captureFromDirectCanvas("html2canvas-outer");
                            }
                        };

                        if (useCanvasRenderer == "html2canvas") {
                            if (typeof html2canvas == "function") {
                                renderWithHtml2Canvas();
                            } else if (typeof snapdom != "undefined" && snapdom && typeof snapdom.toCanvas == "function") {
                                console.log("[MAP-VIDEO] renderer fallback", { from: "html2canvas", to: "snapdom" });
                                renderWithSnapdom();
                            } else {
                                captureFromDirectCanvas("renderer-missing-html2canvas");
                            }
                        } else {
                            if (typeof snapdom != "undefined" && snapdom && typeof snapdom.toCanvas == "function") {
                                renderWithSnapdom();
                            } else if (typeof html2canvas == "function") {
                                console.log("[MAP-VIDEO] renderer fallback", { from: "snapdom", to: "html2canvas" });
                                renderWithHtml2Canvas();
                            } else {
                                captureFromDirectCanvas("renderer-missing-snapdom");
                            }
                        }
                    };

                    if (useSimpleGhostCaptureMode === true) {
                        captureFromDirectCanvas("simple-ghost-mode");
                        return;
                    }

                    captureFromComposedContainer();
                };

                var syncCaptureMarkerTooltip = function(frameObj) {
                    try {
                        if (!captureMapObj || typeof captureMapObj.eachLayer != "function") {
                            return;
                        }
                        var fCenter = (frameObj && frameObj.center && frameObj.center.length >= 2) ? frameObj.center : null;
                        if (!fCenter && frameObj && frameObj.bounds && frameObj.bounds.length >= 4) {
                            fCenter = [
                                (parseFloat(frameObj.bounds[0]) + parseFloat(frameObj.bounds[2])) / 2,
                                (parseFloat(frameObj.bounds[1]) + parseFloat(frameObj.bounds[3])) / 2
                            ];
                        }
                        if (!fCenter || isNaN(parseFloat(fCenter[0])) || isNaN(parseFloat(fCenter[1]))) {
                            return;
                        }
                        var closestMarker = null;
                        var closestDist = Number.POSITIVE_INFINITY;
                        var centerLatLng = L.latLng(parseFloat(fCenter[0]), parseFloat(fCenter[1]));
                        captureMapObj.eachLayer(function(layerObj) {
                            try {
                                if (!layerObj || typeof layerObj.getLatLng != "function" || typeof layerObj.getTooltip != "function") {
                                    return;
                                }
                                var ttp = layerObj.getTooltip();
                                if (!ttp) {
                                    return;
                                }
                                var ll = layerObj.getLatLng();
                                if (!ll) {
                                    return;
                                }
                                var d = Number.POSITIVE_INFINITY;
                                try {
                                    if (typeof captureMapObj.distance == "function") {
                                        d = captureMapObj.distance(centerLatLng, ll);
                                    } else {
                                        var dLat = parseFloat(centerLatLng.lat) - parseFloat(ll.lat);
                                        var dLng = parseFloat(centerLatLng.lng) - parseFloat(ll.lng);
                                        d = Math.sqrt((dLat * dLat) + (dLng * dLng));
                                    }
                                } catch (eDistMarker) {
                                    d = Number.POSITIVE_INFINITY;
                                }
                                if (d < closestDist) {
                                    closestDist = d;
                                    closestMarker = layerObj;
                                }
                            } catch (eLayerPick) {}
                        });

                        captureMapObj.eachLayer(function(layerObj) {
                            try {
                                if (!layerObj || typeof layerObj.getTooltip != "function") {
                                    return;
                                }
                                if (layerObj !== closestMarker && typeof layerObj.closeTooltip == "function") {
                                    layerObj.closeTooltip();
                                }
                            } catch (eCloseTtp) {}
                        });

                        if (closestMarker && typeof closestMarker.openTooltip == "function") {
                            closestMarker.openTooltip();
                        }
                    } catch (eSyncCaptureTooltip) {
                        console.log("getMapVideo.syncCaptureMarkerTooltip: " + eSyncCaptureTooltip);
                    }
                };

                var startCaptureLoop = function(startReason) {
                    if (captureLoopStarted || didStop) {
                        return;
                    }
                    captureLoopStarted = true;
                    JSSHOP.ads.setNuMapCaptureMode(captureMapObj, true);
                    captureModeOn = true;
                    setSnapdomTargetCaptureMode(true);
                    capturer.start();
                    captureStartTs = Date.now();
                    lastCapturedFrameTs = captureStartTs;
                    var keyframes = precomputedFrames;
                    var expandedFrameQueue = [];
                    var mapMaxZoomForComp = 21;
                    try {
                        if (captureMapObj && typeof captureMapObj.getMaxZoom == "function") {
                            var mzComp = parseFloat(captureMapObj.getMaxZoom());
                            if (!isNaN(mzComp)) {
                                mapMaxZoomForComp = Math.max(3, Math.floor(mzComp));
                            }
                        }
                    } catch (eMapMaxZoomComp) {}
                    // Cap marker frames to 15
                    for (var kfi = 0; kfi < keyframes.length; kfi++) {
                        var kHold = parseInt((keyframes[kfi] && keyframes[kfi].holdFrames) ? keyframes[kfi].holdFrames : 1, 10);
                        var qfBase = keyframes[kfi] || {};
                        var qfBaseZoom = parseFloat(qfBase.zoom);
                        var qfIsMarkerFrame = (!qfBase.bounds || (qfBase.bounds && qfBase.bounds.length < 4)) && !isNaN(qfBaseZoom);
                        if (qfIsMarkerFrame && kHold > 15) {
                            kHold = 15;
                        }
                        if (isNaN(kHold) || kHold < 1) {
                            kHold = 1;
                        }
                        for (var khi = 0; khi < kHold; khi++) {
                            var qf = keyframes[kfi] || {};
                            expandedFrameQueue.push({
                                bounds: qf.bounds,
                                center: qf.center,
                                zoom: qf.zoom,
                                holdFrames: kHold,
                                __keyframeIdx: kfi,
                                __holdSeq: (khi + 1),
                                __holdTotal: kHold,
                                __isMarkerFrame: qfIsMarkerFrame,
                                __isAtMaxMarkerZoom: (qfIsMarkerFrame && !isNaN(qfBaseZoom) && qfBaseZoom >= mapMaxZoomForComp),
                                __isHoldContinuation: (khi > 0)
                            });
                        }
                    }
                    var expectedCaptureMs = Math.max(
                        totalMs,
                        (expandedFrameQueue.length * frameIntervalMs) + 1600
                    );
                    var expectedPerFrameMs = Math.max(frameIntervalMs, 900);
                    var safeExpectedCaptureMs = Math.max(expectedCaptureMs, (expandedFrameQueue.length * expectedPerFrameMs) + 3000);
                    console.log("[MAP-VIDEO] capture started", {
                        mapDivId: mapDivId,
                        totalMs: totalMs,
                        frameIntervalMs: frameIntervalMs,
                        effectiveCaptureFps: effectiveCaptureFps,
                        outputCaptureFps: outputCaptureFps,
                        useFrameCompensation: useFrameCompensation,
                        expectedCaptureMs: safeExpectedCaptureMs,
                        totalFrames: expandedFrameQueue.length,
                        startReason: startReason,
                        keyframes: keyframes.length
                    });
                    JSSHOP.ads.logNuMapCaptureProgress(mapDivId, "start", "Capturing map frames...", 14, "running");
                    // Refactored loop: use integer index and setInterval

                    var intervalId = null;
                    var frameTickBusy = false;
                    // Reset global intVidFrameNum before starting loop
                    window.intVidFrameNum = 0;
                    intVidFrameNum = window.intVidFrameNum;
                    console.log("[MAP-VIDEO][DEBUG] Interval setup", { intervalMs: frameIntervalMs, totalFrames: expandedFrameQueue.length });
                    function processFrameTick() {
                        intVidFrameNum = window.intVidFrameNum;
                        if (didStop || frameTickBusy) {
                            return;
                        }
                        if (intVidFrameNum >= expandedFrameQueue.length) {
                            clearInterval(intervalId);
                            finishCapture();
                            return;
                        }
                        frameTickBusy = true;
                        captureTickCount++;
                        var elapsedMs = Date.now() - captureStartTs;
                        var kf = expandedFrameQueue[intVidFrameNum] || {};
                        var prevKf = (intVidFrameNum > 0) ? (expandedFrameQueue[intVidFrameNum - 1] || null) : null;
                        var isHoldContinuation = !!(kf && kf.__isHoldContinuation === true && prevKf && prevKf.__keyframeIdx === kf.__keyframeIdx);
                        if (isHoldContinuation) {
                            console.log("[MAP-VIDEO] hold-continuation (no view update)", {
                                mapDivId: mapDivId,
                                frameIdx: intVidFrameNum,
                                holdSeq: (kf.__holdSeq || 1),
                                holdTotal: (kf.__holdTotal || 1)
                            });
                        }
                        activeFrameMeta = {
                            isMarkerFrame: (kf.__isMarkerFrame === true),
                            isAtMaxMarkerZoom: (kf.__isAtMaxMarkerZoom === true),
                            zoom: kf.zoom
                        };
                        var progressRatio = Math.max(0, Math.min(1, intVidFrameNum / Math.max(1, expandedFrameQueue.length)));
                        var progressPct = Math.round(progressRatio * 100);
                        try {
                            var runCaptureAfterViewUpdate = function() {
                                waitForMapStable(function() {
                                    captureFrameOnce(function() {
                                        frameTickBusy = false;
                                        window.intVidFrameNum++;
                                        intVidFrameNum = window.intVidFrameNum;
                                        if (intVidFrameNum >= expandedFrameQueue.length) {
                                            clearInterval(intervalId);
                                            finishCapture();
                                        }
                                    }, progressRatio);
                                });
                            };
                            if (useMoveendCaptureGate && !isHoldContinuation) {
                                waitForMapMoveComplete(runCaptureAfterViewUpdate);
                            }
                            // Always update preview map bounds/zoom every frame
                            if (kf.bounds && kf.bounds.length >= 4 && typeof captureMapObj.fitBounds == "function") {
                                captureMapObj.fitBounds([[kf.bounds[0], kf.bounds[1]], [kf.bounds[2], kf.bounds[3]]], {
                                    animate: false,
                                    padding: [0, 0]
                                });
                            } else if (kf.center && typeof captureMapObj.setView == "function") {
                                captureMapObj.setView(kf.center, kf.zoom, { animate: false });
                            }
                            syncCaptureMarkerTooltip(kf);
                            if (!useMoveendCaptureGate || isHoldContinuation) {
                                runCaptureAfterViewUpdate();
                            }
                        } catch (eSetViewFrame) {
                            console.log("[MAP-VIDEO] interval frame setView err", { idx: intVidFrameNum, err: eSetViewFrame });
                            frameTickBusy = false;
                            if (!didStop) {
                                window.intVidFrameNum++;
                                intVidFrameNum = window.intVidFrameNum;
                            }
                        }
                        if (captureTickCount === 1 || (captureTickCount % 10) === 0) {
                            console.log("[MAP-VIDEO] keyframe step", {
                                mapDivId: mapDivId,
                                idx: (typeof kf.__keyframeIdx != "undefined") ? kf.__keyframeIdx : intVidFrameNum,
                                frameIdx: intVidFrameNum,
                                elapsedMs: elapsedMs,
                                capturedFrames: capturedFrames,
                                holdSeq: (kf.__holdSeq || 1),
                                holdTotal: (kf.__holdTotal || 1)
                            });
                        }
                        console.log("[MAP-VIDEO] frame gate", {
                            mapDivId: mapDivId,
                            frameIdx: intVidFrameNum,
                            gateMode: useMoveendCaptureGate ? "moveend" : "tile-stable"
                        });
                        var progressMsg = "Capturing frame " + (intVidFrameNum + 1) + " of " + expandedFrameQueue.length + " (" + progressPct + "%)...";
                        JSSHOP.ads.logNuMapCaptureProgress(
                            mapDivId,
                            "status",
                            progressMsg,
                            progressPct,
                            "running"
                        );
                        console.log("[MAP-VIDEO][DEBUG] FrameTick", {
                            intVidFrameNum: intVidFrameNum,
                            totalFrames: expandedFrameQueue.length,
                            progressPct: progressPct,
                            didStop: didStop,
                            frameTickBusy: frameTickBusy
                        });
                        if (intVidFrameNum >= expandedFrameQueue.length) {
                            console.log("[MAP-VIDEO][DEBUG] Loop exit", { intVidFrameNum: intVidFrameNum, totalFrames: expandedFrameQueue.length });
                        }
                    }
                    intervalId = setInterval(processFrameTick, frameIntervalMs);
                };

                if (captureMapObj && typeof captureMapObj.invalidateSize == "function") {
                    try {
                        captureMapObj.invalidateSize({ animate: false, pan: false });
                    } catch (ePreviewInvSize) {
                        try { captureMapObj.invalidateSize(); } catch (ePreviewInvSize2) {}
                    }
                }
                nativeSetTimeout(function() {
                    if (!captureLoopStarted) {
                        console.log("[MAP-VIDEO] precomputed start on preview map", { mapDivId: mapDivId });
                        startCaptureLoop("preview-map-bounds");
                    }
                }, 120);
            } catch (eMapVidInner) {
                console.log("getMapVideo.inner: " + eMapVidInner);
                try {
                    JSSHOP.ads.setNuMapCaptureMode(playbackObj.map, false);
                } catch (eRestoreCtrls) {
                    console.log("[MAP-VIDEO] restore controls error: " + eRestoreCtrls);
                }
                try {
                    if (typeof cleanupGhostCaptureMap == "function") {
                        cleanupGhostCaptureMap();
                    }
                } catch (eGhostCleanupErr) {
                    console.log("[MAP-VIDEO] ghost cleanup error: " + eGhostCleanupErr);
                }
                playbackObj.flySpeed = originalFlySpeedForCapture;
                playbackObj.isCapturingVideo = "no";
                try {
                    if (typeof JSSHOP.ads.updateNuMapGhostDebugToggleVisibility == "function") {
                        JSSHOP.ads.updateNuMapGhostDebugToggleVisibility(mapDivId);
                    }
                } catch (eHideDbgToggleErr) {
                    console.log("getMapVideo.hideDbgToggle.error: " + eHideDbgToggleErr);
                }
                JSSHOP.ads.logNuMapCaptureProgress(mapDivId, "error", "Map video capture failed.", 100, "error");
            }
        }, (useCanvasRenderer == "snapdom"));
    } catch (eMapVideo) {
        console.log("getMapVideo: " + eMapVideo);
        try {
            JSSHOP.ads.logNuMapCaptureProgress("", "error", "Map video capture crashed.", 100, "error");
        } catch (eMapProgressCrash) {
            console.log("getMapVideo.progress.err: " + eMapProgressCrash);
        }
    }
};

JSSHOP.ads.escapeMapLabelHtml = function(rawTxt) {
    try {
        return String(rawTxt || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/\"/g, "&quot;")
            .replace(/'/g, "&#39;");
    } catch (eEscMapLbl) {
        return "";
    }
};

JSSHOP.ads.decodeNuMapLzText = function(rawVal) {
    try {
        var baseVal = String(rawVal || "").trim();
        if (!baseVal) {
            return "";
        }

        var tryDecodeLz = function(candidate) {
            if (!candidate || typeof LZString == "undefined" || !LZString || typeof LZString.decompressFromEncodedURIComponent != "function") {
                return "";
            }
            try {
                var out = LZString.decompressFromEncodedURIComponent(candidate);
                if (typeof out === "string" && out !== "") {
                    var rt = "";
                    try {
                        rt = LZString.compressToEncodedURIComponent(out);
                    } catch (eMapLabelRt) {
                        rt = "";
                    }
                    if (rt === candidate) {
                        return out;
                    }
                }
            } catch (eMapLabelLz) {
                return "";
            }
            return "";
        };

        var decodedVal = baseVal;
        try {
            decodedVal = decodeURIComponent(baseVal);
        } catch (eDecodeNuMapTxtUri) {
            decodedVal = baseVal;
        }

        var lzFromRaw = tryDecodeLz(baseVal);
        if (lzFromRaw !== "") {
            console.log("[MAP_LABEL_DEBUG][decodeNuMapLzText] lzFromRaw", { in: baseVal, out: lzFromRaw });
            return lzFromRaw;
        }

        var lzFromDecoded = tryDecodeLz(decodedVal);
        if (lzFromDecoded !== "") {
            console.log("[MAP_LABEL_DEBUG][decodeNuMapLzText] lzFromDecoded", { in: baseVal, decoded: decodedVal, out: lzFromDecoded });
            return lzFromDecoded;
        }

        console.log("[MAP_LABEL_DEBUG][decodeNuMapLzText] passthrough", { in: baseVal, out: decodedVal });
        return decodedVal;
    } catch (eDecodeNuMapTxt) {
        return String(rawVal || "");
    }
};

JSSHOP.ads.getMapMarkerTooltipHtml = function(markerObj, defaultTitleHtml, defaultPriceVal) {
    try {
        if (!markerObj) {
            return defaultTitleHtml || "";
        }
        var getContainerMode = function(obj) {
            var modeVal = String((obj && (obj["markerLabelContainerStyle"] || obj["mapMarkerTitleContainerStyle"])) || "").toLowerCase();
            if (modeVal == "custom" || modeVal == "default" || modeVal == "jagged" || modeVal == "comic_jagged") {
                return modeVal;
            }
            return "default";
        };

        var hexToRgba = function(hexColor, alphaVal) {
            try {
                var hex = String(hexColor || "#000000").replace("#", "").trim();
                if (hex.length == 3) {
                    hex = hex.charAt(0) + hex.charAt(0) + hex.charAt(1) + hex.charAt(1) + hex.charAt(2) + hex.charAt(2);
                }
                if (hex.length != 6) {
                    return String(hexColor || "#000000");
                }
                var r = parseInt(hex.substring(0, 2), 16);
                var g = parseInt(hex.substring(2, 4), 16);
                var b = parseInt(hex.substring(4, 6), 16);
                var a = parseFloat(alphaVal);
                if (isNaN(a)) {
                    a = 1;
                }
                a = Math.max(0, Math.min(1, a));
                return "rgba(" + r + "," + g + "," + b + "," + a + ")";
            } catch (eHexRgba) {
                return String(hexColor || "#000000");
            }
        };

        var normalizeFontSize = function(val, fallbackVal) {
            var n = parseInt(val, 10);
            if (isNaN(n)) {
                n = parseInt(fallbackVal, 10);
            }
            if (isNaN(n)) {
                n = 11;
            }
            return Math.max(10, Math.min(40, n));
        };

        var normalizeFontFamily = function(rawFont) {
            var allowedFonts = ["Arial", "Verdana", "Trebuchet MS", "Georgia", "Times New Roman", "Courier New"];
            var f = String(rawFont || "").trim();
            if (allowedFonts.indexOf(f) !== -1) {
                return f;
            }
            return "Arial";
        };

        var toCssFontFamily = function(ff) {
            return (ff.indexOf(" ") !== -1) ? ('"' + ff + '"') : ff;
        };

        var customText = "";
        if (markerObj["markerLabelText"] && String(markerObj["markerLabelText"]).trim() !== "") {
            customText = (typeof JSSHOP.ads.decodeNuMapLzText == "function") ? JSSHOP.ads.decodeNuMapLzText(markerObj["markerLabelText"]) : String(markerObj["markerLabelText"]);
            customText = String(customText || "").trim();
        }
        var containerMode = getContainerMode(markerObj);
        console.log("[MAP_LABEL_DEBUG][tooltip]", {
            prpid: markerObj["prpid"] || markerObj["_id"] || "",
            containerMode: containerMode,
            markerLabelTextRaw: markerObj["markerLabelText"] || "",
            markerLabelTextDecoded: customText,
            defaultTitleHtml: defaultTitleHtml || ""
        });
        if (containerMode == "default") {
            return defaultTitleHtml || "";
        }
        var txtClr = String(markerObj["markerLabelTextColor"] || "#ffffff");
        var bgClr = String(markerObj["markerLabelBgColor"] || "#000000");
        var brdClr = String(markerObj["markerLabelBorderColor"] || "#333333");
        var bgOpacityPct = parseInt(markerObj["markerLabelBgOpacity"], 10);
        if (isNaN(bgOpacityPct)) {
            bgOpacityPct = 100;
        }
        bgOpacityPct = Math.max(0, Math.min(100, bgOpacityPct));
        var fontSizeVal = normalizeFontSize(markerObj["markerLabelFontSize"], markerObj["mapMarkerTitleFontSize"]);
        var fontFamilyVal = normalizeFontFamily(markerObj["markerLabelFontFamily"] || markerObj["mapMarkerTitleFontFamily"]);
        var isBold = String(markerObj["markerLabelBold"] || markerObj["mapMarkerTitleBold"] || "yes").toLowerCase() != "no";
        var isItalic = String(markerObj["markerLabelItalic"] || markerObj["mapMarkerTitleItalic"] || "no").toLowerCase() == "yes";
        var bgRgba = hexToRgba(bgClr, bgOpacityPct / 100);
        var rawTitle = String(customText || "");
        var safeTitle = JSSHOP.ads.escapeMapLabelHtml(rawTitle);
        var needsWideBubble = (rawTitle.length > 15);
        var isJaggedMode = (containerMode == "jagged" || containerMode == "comic_jagged");
        var clipPathCss = "";
        var borderWidthCss = "1px";
        if (isJaggedMode) {
            if (containerMode == "comic_jagged") {
                clipPathCss = "clip-path:polygon(0% 12%,7% 0%,15% 10%,24% 0%,33% 11%,42% 1%,51% 12%,60% 1%,69% 11%,78% 0%,87% 10%,95% 1%,100% 14%,92% 25%,100% 37%,91% 49%,100% 61%,91% 73%,100% 86%,92% 99%,82% 89%,73% 100%,64% 89%,55% 100%,46% 89%,37% 100%,28% 89%,19% 99%,10% 88%,2% 98%,8% 84%,0% 72%,9% 60%,0% 48%,9% 36%,0% 24%);-webkit-clip-path:polygon(0% 12%,7% 0%,15% 10%,24% 0%,33% 11%,42% 1%,51% 12%,60% 1%,69% 11%,78% 0%,87% 10%,95% 1%,100% 14%,92% 25%,100% 37%,91% 49%,100% 61%,91% 73%,100% 86%,92% 99%,82% 89%,73% 100%,64% 89%,55% 100%,46% 89%,37% 100%,28% 89%,19% 99%,10% 88%,2% 98%,8% 84%,0% 72%,9% 60%,0% 48%,9% 36%,0% 24%);border-radius:0;";
                borderWidthCss = "2px";
            } else {
                clipPathCss = "clip-path:polygon(1% 9%,8% 2%,16% 8%,25% 2%,34% 7%,43% 2%,52% 8%,61% 2%,70% 7%,79% 2%,88% 8%,96% 3%,99% 12%,94% 22%,99% 33%,94% 44%,99% 56%,94% 68%,99% 80%,92% 93%,82% 97%,73% 92%,64% 98%,55% 92%,46% 98%,37% 92%,28% 97%,19% 92%,10% 97%,2% 90%,5% 79%,1% 67%,6% 55%,1% 43%,6% 31%,1% 20%);-webkit-clip-path:polygon(1% 9%,8% 2%,16% 8%,25% 2%,34% 7%,43% 2%,52% 8%,61% 2%,70% 7%,79% 2%,88% 8%,96% 3%,99% 12%,94% 22%,99% 33%,94% 44%,99% 56%,94% 68%,99% 80%,92% 93%,82% 97%,73% 92%,64% 98%,55% 92%,46% 98%,37% 92%,28% 97%,19% 92%,10% 97%,2% 90%,5% 79%,1% 67%,6% 55%,1% 43%,6% 31%,1% 20%);border-radius:0;";
                borderWidthCss = "1.5px";
            }
        }
        var html = "";
        html += '<span style="display:inline-block;max-width:300px;' + (needsWideBubble ? 'min-width:200px;' : '') + 'max-height:400px;padding:2px 6px;border-radius:6px;background:' + bgRgba + ';border:' + borderWidthCss + ' solid ' + brdClr + ';color:' + txtClr + ';font-weight:' + (isBold ? '700' : '400') + ';font-style:' + (isItalic ? 'italic' : 'normal') + ';font-size:' + fontSizeVal + 'px;font-family:' + toCssFontFamily(fontFamilyVal) + ';line-height:1.15;white-space:normal;word-break:normal;overflow-wrap:break-word;overflow:hidden;' + clipPathCss + '">';
        html += safeTitle;
        html += '</span>';
        return html;
    } catch (eMapTtip) {
        return defaultTitleHtml || "";
    }
};

JSSHOP.ads.ensureMapMarkerTooltipCss = function() {
    try {
        if (document.getElementById("incasaMapMarkerTooltipCss")) {
            return;
        }
        var styleEl = document.createElement("style");
        styleEl.id = "incasaMapMarkerTooltipCss";
        styleEl.type = "text/css";
        styleEl.innerHTML = ".incasa-map-marker-tooltip{background:transparent!important;border:none!important;box-shadow:none!important;padding:0!important;}" +
            ".incasa-map-marker-tooltip:before{display:none!important;}";
        document.head.appendChild(styleEl);
    } catch (eTtipCss) {
        console.log("ensureMapMarkerTooltipCss: " + eTtipCss);
    }
};

JSSHOP.ads.getMapMarkerTooltipBindOptions = function(markerObj) {
    var opts = { permanent: true, direction: 'bottom', opacity: 0.8, interactive: true, offset: L.point(0, 14) };
    try {
        var modeVal = String((markerObj && (markerObj["markerLabelContainerStyle"] || markerObj["mapMarkerTitleContainerStyle"])) || "").toLowerCase();
        if (modeVal == "custom" || modeVal == "jagged" || modeVal == "comic_jagged") {
            JSSHOP.ads.ensureMapMarkerTooltipCss();
            opts.opacity = 1;
            opts.className = 'incasa-map-marker-tooltip';
        }
    } catch (eTtipOpts) {
        console.log("getMapMarkerTooltipBindOptions: " + eTtipOpts);
    }
    return opts;
};

JSSHOP.ads.bindMapMarkerTooltipClick = function(markerObj) {
    try {
        if (!markerObj || typeof markerObj.getTooltip != "function") {
            return;
        }
        var ttObj = markerObj.getTooltip();
        if (!ttObj || typeof ttObj.getElement != "function") {
            return;
        }
        var ttEl = ttObj.getElement();
        if (!ttEl) {
            return;
        }
        ttEl.style.cursor = "pointer";
        if (ttEl.getAttribute("data-incasa-marker-click-bound") == "yes") {
            return;
        }
        ttEl.setAttribute("data-incasa-marker-click-bound", "yes");
        ttEl.addEventListener("click", function(eTtClick) {
            try {
                if (eTtClick && typeof eTtClick.preventDefault == "function") {
                    eTtClick.preventDefault();
                }
                if (eTtClick && typeof eTtClick.stopPropagation == "function") {
                    eTtClick.stopPropagation();
                }
                markerObj.fire("click");
            } catch (eTtMkClick) {
                console.log("bindMapMarkerTooltipClick.click: " + eTtMkClick);
            }
        });
    } catch (eBindTtClick) {
        console.log("bindMapMarkerTooltipClick: " + eBindTtClick);
    }
};

JSSHOP.ads.addNuMapReplayControl = function(mapObj, mapDivId, mapEffectVal, markersArr) {
    try {
        if (!mapObj || !mapDivId) {
            return;
        }
        var normalizedEffect = JSSHOP.ads.getNormalizedMapEffect(mapEffectVal, "fitbounds");
        if (normalizedEffect != "flyto" && normalizedEffect != "flytobounds") {
            return;
        }
        var replayMarkersArr = markersArr;
        if (!replayMarkersArr && JSSHOP.ads.nuMapPlaybackRegistry && JSSHOP.ads.nuMapPlaybackRegistry[mapDivId]) {
            replayMarkersArr = JSSHOP.ads.nuMapPlaybackRegistry[mapDivId].markers;
        }
        var markerCount = (replayMarkersArr && replayMarkersArr.length) ? replayMarkersArr.length : 0;
        if (markerCount <= 1) {
            return;
        }
        var replayControl = L.control({position: 'topright'});
        replayControl.onAdd = function() {
            var ctrlDiv = L.DomUtil.create('div', 'leaflet-bar leaflet-control incasa-map-replay-control');
            var ctrlBtn = L.DomUtil.create('a', '', ctrlDiv);
            ctrlBtn.href = 'javascript:void(0);';
            ctrlBtn.title = 'Replay';
            ctrlBtn.setAttribute('aria-label', 'Replay');
            ctrlBtn.innerHTML = '<i class="material-icons txtClrHdr" style="font-size:22px;line-height:34px;">&#xe037;</i>';
            ctrlBtn.style.width = '34px';
            ctrlBtn.style.height = '34px';
            ctrlBtn.style.lineHeight = '34px';
            ctrlBtn.style.textAlign = 'center';
            ctrlBtn.style.textDecoration = 'none';
            ctrlBtn.style.cursor = 'pointer';
            ctrlBtn.className = 'incasa-map-replay-toggle-btn';
            ctrlBtn.setAttribute('data-incasa-mapdivid', String(mapDivId));
            L.DomEvent.disableClickPropagation(ctrlDiv);
            L.DomEvent.on(ctrlBtn, 'click', function(e) {
                L.DomEvent.stop(e);
                JSSHOP.ads.replayNuMapEffect(mapDivId);
            });
            JSSHOP.ads.setNuMapReplayButtonState(mapDivId, false);
            return ctrlDiv;
        };
        replayControl.addTo(mapObj);
    } catch (eReplayControl) {
        console.log("addNuMapReplayControl: " + eReplayControl);
    }
};

JSSHOP.ads.addNuMapVideoControl = function(mapObj, mapDivId, mapEffectVal, markersArr) {
    try {
        if (!mapObj || !mapDivId) {
            console.log("[MAP-VIDEO] control skip: missing map/mapDivId");
            return;
        }
        var normalizedEffect = JSSHOP.ads.getNormalizedMapEffect(mapEffectVal, "fitbounds");
        if (normalizedEffect != "flyto") {
            console.log("[MAP-VIDEO] control skip: effect", { mapDivId: mapDivId, effect: normalizedEffect });
            return;
        }
        var videoMarkersArr = markersArr;
        if (!videoMarkersArr && JSSHOP.ads.nuMapPlaybackRegistry && JSSHOP.ads.nuMapPlaybackRegistry[mapDivId]) {
            videoMarkersArr = JSSHOP.ads.nuMapPlaybackRegistry[mapDivId].markers;
        }
        var markerCount = (videoMarkersArr && videoMarkersArr.length) ? videoMarkersArr.length : 0;
        if (markerCount <= 2) {
            console.log("[MAP-VIDEO] control skip: markerCount", { mapDivId: mapDivId, markerCount: markerCount });
            return;
        }

        console.log("[MAP-VIDEO] control add", { mapDivId: mapDivId, markerCount: markerCount, effect: normalizedEffect });

        var videoControl = L.control({position: 'topright'});
        videoControl.onAdd = function() {
            var ctrlDiv = L.DomUtil.create('div', 'leaflet-bar leaflet-control incasa-map-download-control');
            ctrlDiv.style.marginTop = '4px';

            // FC button (Frame Compensation)
            /*
            var compBtn = L.DomUtil.create('a', '', ctrlDiv);
            compBtn.href = 'javascript:void(0);';
            compBtn.title = 'Toggle Frame Compensation';
            compBtn.setAttribute('aria-label', 'Toggle Frame Compensation');
            compBtn.innerHTML = '<span class="txtClrHdr txtBold" style="font-size:11px;line-height:26px;display:inline-block;">FC</span>';
            compBtn.style.width = '30px';
            compBtn.style.height = '26px';
            compBtn.style.lineHeight = '26px';
            compBtn.style.textAlign = 'center';
            compBtn.style.textDecoration = 'none';
            compBtn.style.cursor = 'pointer';
            compBtn.style.borderBottom = '1px solid rgba(0,0,0,0.12)';
            compBtn.className = 'incasa-map-comp-toggle-btn';
            compBtn.setAttribute('data-incasa-mapdivid', String(mapDivId));
            // Uncomment handler if needed
            // L.DomEvent.on(compBtn, 'click', function(e) {
            //     L.DomEvent.stop(e);
            //     var compOn = false;
            //     if (typeof JSSHOP.ads.setNuMapCaptureFrameCompensation == "function") {
            //         compOn = JSSHOP.ads.setNuMapCaptureFrameCompensation(mapDivId);
            //     }
            //     compBtn.style.background = compOn ? 'rgba(52,199,89,0.20)' : '';
            //     console.log("[MAP-VIDEO] frame compensation", { enabled: compOn, mapDivId: mapDivId });
            // });
            */

            // Download button
            /*
            var ctrlBtn = L.DomUtil.create('a', '', ctrlDiv);
            ctrlBtn.href = 'javascript:void(0);';
            ctrlBtn.title = 'Download Video';
            ctrlBtn.setAttribute('aria-label', 'Download Video');
            ctrlBtn.innerHTML = '<i class="material-icons txtClrHdr" style="font-size:21px;line-height:34px;">&#xe2c4;</i>';
            ctrlBtn.style.width = '34px';
            ctrlBtn.style.height = '34px';
            ctrlBtn.style.lineHeight = '34px';
            ctrlBtn.style.textAlign = 'center';
            ctrlBtn.style.textDecoration = 'none';
            ctrlBtn.style.cursor = 'pointer';
            ctrlBtn.className = 'incasa-map-download-toggle-btn';
            ctrlBtn.setAttribute('data-incasa-mapdivid', String(mapDivId));
            // Uncomment handler if needed
            // L.DomEvent.on(ctrlBtn, 'click', function(e) {
            //     L.DomEvent.stop(e);
            //     JSSHOP.ads.getMapVideo(mapDivId);
            // });
            */

            // Record button
            var recordBtn = L.DomUtil.create('a', '', ctrlDiv);
            recordBtn.href = 'javascript:void(0);';
            recordBtn.title = 'Record Fly To Animation';
            recordBtn.setAttribute('aria-label', 'Record Fly To Animation');
            recordBtn.innerHTML = '<i class="material-icons txtClrHdr" style="font-size:21px;line-height:34px;">&#xe061;</i>';
            recordBtn.style.width = '34px';
            recordBtn.style.height = '34px';
            recordBtn.style.lineHeight = '34px';
            recordBtn.style.textAlign = 'center';
            recordBtn.style.textDecoration = 'none';
            recordBtn.style.cursor = 'pointer';
            recordBtn.className = 'incasa-map-record-toggle-btn';
            recordBtn.setAttribute('data-incasa-mapdivid', String(mapDivId));

            L.DomEvent.disableClickPropagation(ctrlDiv);
          L.DomEvent.on(recordBtn, 'click', function(e) {
    L.DomEvent.stop(e);
    // Hide the Record button immediately
    recordBtn.style.display = 'none';
    // Hide zoom controls
    var zoomControls = document.querySelectorAll('.leaflet-control-zoom');
    zoomControls.forEach(function(ctrl) {
        ctrl.style.display = 'none';
    });
    // Hide replay control
    var replayControls = document.querySelectorAll('.incasa-map-replay-toggle-btn');
    replayControls.forEach(function(ctrl) {
        ctrl.style.display = 'none';
    });
    // Helper to restore all controls
    function restoreAllControls() {
        recordBtn.style.display = '';
        zoomControls.forEach(function(ctrl) {
            ctrl.style.display = '';
        });
        replayControls.forEach(function(ctrl) {
            ctrl.style.display = '';
        });
    }
    // Start recording and animation only after permission is granted
    if (typeof window.toggleMapRecording === 'function') {
        window.toggleMapRecording({
            onPermissionGranted: function() {
                // Use recordNuMapEffect to start animation and handle completion
                if (typeof JSSHOP.ads.recordNuMapEffect === 'function') {
                    JSSHOP.ads.recordNuMapEffect(mapDivId, function() {
                        // Stop recording after animation ends
                        if (typeof window.toggleMapRecording === 'function') {
                            window.toggleMapRecording({ stop: true });
                        }
                        restoreAllControls();
                    });
                } else {
                    // fallback: restore controls if record function is missing
                    restoreAllControls();
                }
            },
            onError: function() {
                // Restore all controls on error
                restoreAllControls();
            }
        });
    } else {
        alert('Recording function not available.');
        restoreAllControls();
    }
});
            return ctrlDiv;
        };
        videoControl.addTo(mapObj);
    } catch (eVideoControl) {
        console.log("addNuMapVideoControl: " + eVideoControl);
    }
};

JSSHOP.ads.applyNuMapViewportEffect = function(targetMap, targetBounds, targetMarkers, rawMapEffect, fallbackMapEffect, rawMapFlySpeed, fallbackMapFlySpeed, rawOptions) {
    var effectOpts = (rawOptions && typeof rawOptions == "object") ? rawOptions : {};
    var onComplete = (typeof effectOpts.onComplete == "function") ? effectOpts.onComplete : null;
    var onCancel = (typeof effectOpts.onCancel == "function") ? effectOpts.onCancel : null;
    var finishOnce = function() {
        if (finishOnce._didFire) {
            return;
        }
        finishOnce._didFire = true;
        if (onComplete) {
            try { onComplete(); } catch (eFxDone) { console.log("applyNuMapViewportEffect.onComplete: " + eFxDone); }
        }
    };
    var cancelOnce = function() {
        if (finishOnce._didFire) {
            return;
        }
        finishOnce._didFire = true;
        if (onCancel) {
            try { onCancel(); } catch (eFxCancel) { console.log("applyNuMapViewportEffect.onCancel: " + eFxCancel); }
        }
    };
    var mapEffectVal = JSSHOP.ads.getNormalizedMapEffect(rawMapEffect, fallbackMapEffect || "fitbounds");
    var mapFlySpeedVal = JSSHOP.ads.getNormalizedMapFlySpeed(rawMapFlySpeed, fallbackMapFlySpeed || "normal");
    var minFlyZoom = 15;
    var safeMapZoom = minFlyZoom;
    if (targetMap && typeof targetMap.getZoom == "function") {
        var currentZoom = parseFloat(targetMap.getZoom());
        if (!isNaN(currentZoom)) {
            safeMapZoom = Math.max(currentZoom, minFlyZoom);
        }
    }
    var isValidLatLng = function(latVal, lngVal) {
        if (isNaN(latVal) || isNaN(lngVal)) {
            return false;
        }
        if (latVal < -90 || latVal > 90) {
            return false;
        }
        if (lngVal < -180 || lngVal > 180) {
            return false;
        }
        return true;
    };
    var timingCfg = JSSHOP.ads.getNuMapFlyTimingConfig(mapFlySpeedVal, "normal");
    var speedDurSec = timingCfg.speedDurSec;
    var speedStepMs = timingCfg.speedStepMs;
    if (!targetMap || !targetBounds) {
        return mapEffectVal;
    }
    if (typeof targetBounds.isValid == "function" && !targetBounds.isValid()) {
        if (targetMarkers && targetMarkers.length > 0) {
            for (var bi = 0; bi < targetMarkers.length; bi++) {
                var bLat = parseFloat(String(targetMarkers[bi].lat || ""));
                var bLng = parseFloat(String(targetMarkers[bi].lng || ""));
                if (isValidLatLng(bLat, bLng)) {
                    targetMap.setView([bLat, bLng], safeMapZoom);
                    return mapEffectVal;
                }
            }
        }
        return "fitbounds";
    }
    if (targetMap._nuFlyToTimeouts && targetMap._nuFlyToTimeouts.length) {
        for (var ti = 0; ti < targetMap._nuFlyToTimeouts.length; ti++) {
            clearTimeout(targetMap._nuFlyToTimeouts[ti]);
        }
        targetMap._nuFlyToTimeouts = [];
    }
    if (targetMap._nuFlyToDoneTimeout) {
        clearTimeout(targetMap._nuFlyToDoneTimeout);
        targetMap._nuFlyToDoneTimeout = null;
    }
    if (mapEffectVal == "panto") {
        if (targetMarkers && targetMarkers.length > 0) {
            var firstMarker = targetMarkers[0];
            var latVal = parseFloat(String(firstMarker.lat || ""));
            var lngVal = parseFloat(String(firstMarker.lng || ""));
            if (isValidLatLng(latVal, lngVal)) {
                targetMap.panTo([latVal, lngVal], {animate: true, duration: 1.0});
                if (targetMap.getZoom && targetMap.getZoom() < minFlyZoom) {
                    targetMap.setZoom(minFlyZoom);
                }
                setTimeout(finishOnce, 1050);
                return mapEffectVal;
            }
        }
        targetMap.fitBounds(targetBounds);
        setTimeout(finishOnce, 0);
        return "fitbounds";
    }
    if (mapEffectVal == "flyto") {
        var flyTargets = [];
        if (targetMarkers && targetMarkers.length > 0) {
            for (var mi = 0; mi < targetMarkers.length; mi++) {
                var markerObj = targetMarkers[mi];
                var markerLat = parseFloat(String(markerObj.lat || ""));
                var markerLng = parseFloat(String(markerObj.lng || ""));
                if (isValidLatLng(markerLat, markerLng)) {
                    flyTargets.push([markerLat, markerLng]);
                }
            }
        }

        var flyOverviewZoom = 4;
        try {
            if (typeof targetMap.getBoundsZoom == "function") {
                var bzOverview = parseFloat(targetMap.getBoundsZoom(targetBounds, true));
                if (!isNaN(bzOverview)) {
                    flyOverviewZoom = Math.floor(bzOverview);
                }
            }
        } catch (eFlyOverviewZoom) {
            console.log("applyNuMapViewportEffect.flyOverviewZoom: " + eFlyOverviewZoom);
        }
        var mapMaxZoom = safeMapZoom;
        try {
            if (targetMap && typeof targetMap.getMaxZoom == "function") {
                var mz = parseFloat(targetMap.getMaxZoom());
                if (!isNaN(mz)) {
                    mapMaxZoom = mz;
                }
            }
        } catch (eFlyMaxZoom) {
            console.log("applyNuMapViewportEffect.flyMaxZoom: " + eFlyMaxZoom);
        }
        var flyMarkerZoom = Math.max(safeMapZoom, Math.floor(mapMaxZoom));
        flyOverviewZoom = Math.max(2, Math.min(flyOverviewZoom, flyMarkerZoom - 1));
        var overviewDurMs = Math.max(250, Math.round((parseFloat(timingCfg.overviewDurSec) || (speedDurSec * 0.65)) * 1000));
        var zoomDurMs = Math.max(250, Math.round(speedDurSec * 1000));
        var holdDurMs = Math.max(2000, parseInt(timingCfg.markerHoldMs, 10) || 2000);

        if (flyTargets.length <= 1) {
            var singleTarget = null;
            if (flyTargets.length == 1) {
                singleTarget = flyTargets[0];
            } else if (targetBounds && typeof targetBounds.getCenter == "function") {
                var boundsCenter = targetBounds.getCenter();
                if (boundsCenter && isValidLatLng(parseFloat(boundsCenter.lat), parseFloat(boundsCenter.lng))) {
                    singleTarget = [parseFloat(boundsCenter.lat), parseFloat(boundsCenter.lng)];
                }
            }
            if (singleTarget && isValidLatLng(parseFloat(singleTarget[0]), parseFloat(singleTarget[1]))) {
                targetMap.flyTo(singleTarget, flyOverviewZoom, {duration: Math.max(0.2, overviewDurMs / 1000)});
                var oneStepId = setTimeout(function() {
                    targetMap.flyTo(singleTarget, flyMarkerZoom, {duration: Math.max(0.2, zoomDurMs / 1000)});
                }, overviewDurMs + 40);
                targetMap._nuFlyToTimeouts = [oneStepId];
                targetMap._nuFlyToDoneTimeout = setTimeout(finishOnce, overviewDurMs + zoomDurMs + holdDurMs + 80);
                return mapEffectVal;
            }
            targetMap.fitBounds(targetBounds);
            setTimeout(finishOnce, 0);
            return "fitbounds";
        }

        targetMap._nuFlyToTimeouts = [];
        for (var fi = 0; fi < flyTargets.length; fi++) {
            (function(stepIndex) {
                var sequenceStartMs = stepIndex * (overviewDurMs + zoomDurMs + holdDurMs);
                var tIdOverview = setTimeout(function() {
                    targetMap.flyTo(flyTargets[stepIndex], flyOverviewZoom, {duration: Math.max(0.2, overviewDurMs / 1000)});
                }, sequenceStartMs);
                var tIdZoom = setTimeout(function() {
                    targetMap.flyTo(flyTargets[stepIndex], flyMarkerZoom, {duration: Math.max(0.2, zoomDurMs / 1000)});
                }, sequenceStartMs + overviewDurMs + 40);
                targetMap._nuFlyToTimeouts.push(tIdOverview);
                targetMap._nuFlyToTimeouts.push(tIdZoom);
            })(fi);
        }
        targetMap._nuFlyToDoneTimeout = setTimeout(finishOnce, (flyTargets.length * (overviewDurMs + zoomDurMs + holdDurMs)) + 120);
        return mapEffectVal;
    }
    if (mapEffectVal == "flytobounds") {
        targetMap.flyToBounds(targetBounds, {padding: [20, 20], duration: speedDurSec});
        targetMap._nuFlyToDoneTimeout = setTimeout(finishOnce, Math.round((speedDurSec * 1000) + 60));
        return mapEffectVal;
    }
    targetMap.fitBounds(targetBounds);
    setTimeout(finishOnce, 0);
    return "fitbounds";
};


JSSHOP.ads.doNurGenMap = function(tAADNGMObj, tNMOPDVID) {
    tDNGMObj = null;
         tDNGMObj = "";
            tDNGMObj = tAADNGMObj;

        console.log("doNurGenMap.tNMOPDVID: " + tNMOPDVID);
        // console.log("doNurGenMap: " + JSON.stringify(tDNGMObj));
        spinner.stop();
smlspinner.stop();
         tDGMSmrkrArr = null;
         tDGMSmrkrArr = [];
        map = L.map(tNMOPDVID, JSSHOP.ads.getLeafletCanvasMapOptions({renderer: L.canvas()})).setView([39.0667, -8.6167], 13);
        tDGMSmrkrArr = tDNGMObj["mrkrs"];
        try {
            for (var nmi = 0; nmi < (tDGMSmrkrArr ? tDGMSmrkrArr.length : 0); nmi++) {
                if (!tDGMSmrkrArr[nmi]) {
                    continue;
                }
                if (typeof JSSHOP.ads.getNuMapMarkerIconUrl == "function") {
                    tDGMSmrkrArr[nmi].icn = JSSHOP.ads.getNuMapMarkerIconUrl(tDGMSmrkrArr[nmi].icn, "images/logo_small_oct.png");
                }
            }
            tDNGMObj["mrkrs"] = tDGMSmrkrArr;
        } catch (eDoNurNormMarkers) {
            console.log("doNurGenMap.normalizeMarkers: " + eDoNurNormMarkers);
        }
        console.log("doNurGenMap.tDGMSmrkrArr: " + JSON.stringify(tDGMSmrkrArr));
        /*
        L.tileLayer.canvas('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
        maxZoom: 18,
        subdomains:['mt0','mt1','mt2','mt3'],
         attribution: '&copy; <a href="http://www.google.com/maps">Google Maps</a>',
        }).addTo(map);
    */
        tRenderMapType = "random";
        if (tDNGMObj && tDNGMObj["mapType"]) {
            tRenderMapType = tDNGMObj["mapType"];
        }
        tRenderMapEffect = "fitbounds";
        if (tDNGMObj && tDNGMObj["mapEffect"]) {
            tRenderMapEffect = tDNGMObj["mapEffect"];
        }
        tRenderMapFlySpeed = "normal";
        if (tDNGMObj && tDNGMObj["mapFlySpeed"]) {
            tRenderMapFlySpeed = tDNGMObj["mapFlySpeed"];
        }
        tRenderMapAutoPlay = "off";
        if (typeof JSSHOP.ads.getNuMapAutoPlayValue == "function") {
            tRenderMapAutoPlay = JSSHOP.ads.getNuMapAutoPlayValue((tDNGMObj && tDNGMObj["autoPlay"]), "off");
        }
        JSSHOP.ads.addNuMapTileLayer(map, tRenderMapType, "random");
        var bounds = L.latLngBounds() // Instantiate LatLngBounds object
        var LeafIcon = L.Icon.extend({
            options: {
                iconSize:     [52, 52],
                popupAnchor:  [-3, -16]
            }
        });
        if(tDGMSmrkrArr.length > 0) {
            tPArr  = null;
            tPArr = tDGMSmrkrArr;
            iti = 0;
            while(iti < tPArr.length) {
                ts = tPArr[iti];
                console.log("doNurGenMap.ts: " + JSON.stringify(ts));
                tIcnQcStr = "images/logo_small_green_oct.png"
                tLatQcStr = ts.lat;
                tLngQcStr = ts.lng;
                tPrpID = ts.prpid;
                tLatQcStr = String(tLatQcStr); // convert to string
                tLngQcStr = String(tLngQcStr);
                tLatQcFlt = parseFloat(tLatQcStr);
                tLngQcFlt = parseFloat(tLngQcStr);
                tMOPrice = ts.price;
                tAMOttl = ts.title;
                tUNZdttle = (typeof JSSHOP.ads.decodeNuMapLzText == "function") ? JSSHOP.ads.decodeNuMapLzText(tAMOttl) : LZString.decompressFromEncodedURIComponent(tAMOttl);
                tMOShortttl = tUNZdttle.substring(0,40) + "...<br><b>" + tMOPrice + "</b>";
                tMOttl = tMOShortttl;
                tMOttl = JSSHOP.ads.getMapMarkerTooltipHtml(ts, tMOttl, tMOPrice);
                console.log("[MAP_LABEL_DEBUG][doNurGenMap.marker]", {
                    idx: iti,
                    prpid: ts.prpid || ts._id || "",
                    rawTitle: tAMOttl,
                    decodedTitle: tUNZdttle,
                    markerLabelText: ts.markerLabelText || "",
                    markerLabelContainerStyle: ts.markerLabelContainerStyle || "",
                    finalTooltipHtml: tMOttl
                });
                ttImgstr = ts.icn;
                tIcnQcStr = JSSHOP.ads.getNuMapMarkerIconUrl(ttImgstr, "images/logo_small_oct.png");
                if (String(tIcnQcStr || "").toLowerCase().indexOf("updt_") != -1) {
                    tTmpMapIcnName = String(tIcnQcStr).replace(/\\/g, "/");
                    tTmpMapIcnName = tTmpMapIcnName.substring(tTmpMapIcnName.lastIndexOf("/") + 1);
                    tTmpMapIcnName = tTmpMapIcnName.replace(/^s_thumb/i, "").replace(/updt_/ig, "");
                    if (tTmpMapIcnName) {
                        tIcnQcStr = "images/ucontent/" + tTmpMapIcnName;
                    }
                }

                // ttSSurl = "javascript:JSSHOP.ads.doGenPrpPop(" + iti + ");";
                ttSSurl = "javascript:eindex('aa-show-prop','pid=aa-show-prop&prpid=" + ts._id + "');";
                tCnameQcStr = "<a href=\"" + ttSSurl + "\">" + ts.cname + "</a>";
                tLatQcStr =  String(tLatQcFlt);
                tLngQcStr = String(tLngQcFlt);
                try {
                    if((tLatQcStr.indexOf(".") != -1) && (tLngQcStr.indexOf(".") != -1))  {
                        tPAObj = tPArr[iti];
                        lat_lng = [tLatQcStr,tLngQcStr];
                        tImSStr = tIcnQcStr;
                        redIcon = new LeafIcon({iconUrl: tImSStr, className: "btnRounded"});
                        // add a price and title to the marker

                        // make redIcon round
                        redIcon.options.className = "btnRounded";

                        // add the price and title to the marker
                        redIcon.options.price = tMOPrice;
                        redIcon.options.ttl = tMOttl;
                        // add an optionid to the marker
                        // set marker options
                        redIcon.options.iti = iti;
                        redIcon.options.ad = ts._id;
                        // and a marker with the icon and price and title to the map
                        // when the marker is clicked, call doGenPrpPop with the iti option
                        // add a marker to the map
                          bounds.extend(lat_lng);
                        mRed = L.marker([tLatQcStr,tLngQcStr], {icon: redIcon, iti: iti}).bindTooltip( tMOttl, JSSHOP.ads.getMapMarkerTooltipBindOptions(ts)).addTo(map).on('tooltipopen', function(e) {
                            JSSHOP.ads.bindMapMarkerTooltipClick(e.target);
                        }).on('click', function(e) {
                            console.log("L.marker iti: " + JSON.stringify(e.target.options.iti));
                           //  doGenPrpPop(e.target.options.iti);
                          eindex('aa-show-prop','pid=aa-show-prop&prpid=' + tPrpID);
                        });
                                                JSSHOP.ads.attachNuMapMarkerIconFallback(mRed, "images/logo_small_oct.png");


                        // add a balloon to the marker showing the price and title
                        // mRed.bindPopup('<span class="txtBold txtClrRed">' + tCnameQcStr + '</span><br><span class="txtBold txtClrHdr">Price: ' + redIcon.options.price + '</span><br><span class="txtBold txtClrDlg">Title: ' + redIcon.options.ttl + '</span>');



                    }

            } catch(e) {
            console.log("getLeaves.ERROR: " + e);
            }
          iti++;
          }
           JSSHOP.ads.registerNuMapPlaybackState(tNMOPDVID, map, bounds, tDGMSmrkrArr, tRenderMapEffect, tRenderMapFlySpeed, tDNGMObj);
           if (typeof JSSHOP.ads.setNuMapCaptureTiming == "function") {
               JSSHOP.ads.setNuMapCaptureTiming(tNMOPDVID, tDNGMObj["captureFps"], tDNGMObj["captureFrameIntervalMs"]);
           }
           JSSHOP.ads.addNuMapReplayControl(map, tNMOPDVID, tRenderMapEffect, tDGMSmrkrArr);
           if(pid == "aa-add-post" || pid == "aa-edit-post") {
           JSSHOP.ads.addNuMapVideoControl(map, tNMOPDVID, tRenderMapEffect, tDGMSmrkrArr);
           }
           JSSHOP.ads.addNuMapSellerBadgeControl(map, tDNGMObj, tDGMSmrkrArr);

           if (tRenderMapAutoPlay == "on") {
               try {
                   if (JSSHOP.ads.nuMapPlaybackRegistry && JSSHOP.ads.nuMapPlaybackRegistry[tNMOPDVID]) {
                       JSSHOP.ads.nuMapPlaybackRegistry[tNMOPDVID].isReplayPlaying = "yes";
                   }
                   JSSHOP.ads.setNuMapReplayButtonState(tNMOPDVID, true);
                   JSSHOP.ads.setNuMapDebugTogglePlayMode(tNMOPDVID, true);
               } catch (eAutoPlayUiStart) {
                   console.log("doNurGenMap.autoPlayUiStart: " + eAutoPlayUiStart);
               }
               JSSHOP.ads.applyNuMapViewportEffect(
                   map,
                   bounds,
                   tDGMSmrkrArr,
                   tRenderMapEffect,
                   "fitbounds",
                   tRenderMapFlySpeed,
                   "normal",
                   {
                       onComplete: function() {
                           try {
                               if (JSSHOP.ads.nuMapPlaybackRegistry && JSSHOP.ads.nuMapPlaybackRegistry[tNMOPDVID]) {
                                   JSSHOP.ads.nuMapPlaybackRegistry[tNMOPDVID].isReplayPlaying = "no";
                               }
                               JSSHOP.ads.setNuMapReplayButtonState(tNMOPDVID, false);
                               JSSHOP.ads.setNuMapDebugTogglePlayMode(tNMOPDVID, false);
                           } catch (eAutoPlayDone) {
                               console.log("doNurGenMap.autoPlayDone: " + eAutoPlayDone);
                           }
                       },
                       onCancel: function() {
                           try {
                               if (JSSHOP.ads.nuMapPlaybackRegistry && JSSHOP.ads.nuMapPlaybackRegistry[tNMOPDVID]) {
                                   JSSHOP.ads.nuMapPlaybackRegistry[tNMOPDVID].isReplayPlaying = "no";
                               }
                               JSSHOP.ads.setNuMapReplayButtonState(tNMOPDVID, false);
                               JSSHOP.ads.setNuMapDebugTogglePlayMode(tNMOPDVID, false);
                           } catch (eAutoPlayCancel) {
                               console.log("doNurGenMap.autoPlayCancel: " + eAutoPlayCancel);
                           }
                       }
                   }
               );
           } else {
               try {
                   if (bounds && typeof bounds.isValid == "function" && bounds.isValid()) {
                       map.fitBounds(bounds, {padding: [20, 20], animate: false});
                   }
               } catch (eMapNoAutoPlayBounds) {
                   console.log("doNurGenMap.fitBounds: " + eMapNoAutoPlayBounds);
               }
           }

          }



};

JSSHOP.ads.getNuMapMarkerIconUrl = function(rawIconUrl, fallbackUrl) {
    try {
        var fb = String(fallbackUrl || "images/logo_small_oct.png");
        var src = String(rawIconUrl || "").trim();
        if (!src) {
            return fb;
        }
        if (src.indexOf("data:") === 0) {
            return src;
        }
        try {
            src = decodeURIComponent(src);
        } catch (eDecMapIcn) {}
        src = src.replace(/\\/g, "/");
        src = src.replace(/\s+/g, "");
        src = src.replace(/#.*$/, "");
        src = src.replace(/\?.*$/, "");

        var lowerSrc = src.toLowerCase();
        if (lowerSrc.indexOf("updt_") != -1) {
            var cleanName = src;
            cleanName = cleanName.replace(/^images\/property\/s_thumb/i, "");
            cleanName = cleanName.replace(/^images\/property\//i, "");
            cleanName = cleanName.replace(/^images\/ucontent\/s_thumb/i, "");
            cleanName = cleanName.replace(/^images\/ucontent\//i, "");
            cleanName = cleanName.replace(/^s_thumb/i, "");
            if (cleanName.indexOf("/") != -1) {
                cleanName = cleanName.substring(cleanName.lastIndexOf("/") + 1);
            }
            cleanName = cleanName.replace(/updt_/ig, "");
            cleanName = cleanName.replace(/^s_thumb/i, "");
            if (cleanName) {
                return "images/ucontent/" + cleanName;
            }
        }
        // Marker icon caching: preload and reuse
        if (src.indexOf(".") == -1) {
            return fb;
        }
        // Cache marker images in a global object
        if (!window.incasaMarkerIconCache) {
            window.incasaMarkerIconCache = {};
        }
        if (!window.incasaMarkerIconCache[src]) {
            var img = new Image();
            img.src = src;
            window.incasaMarkerIconCache[src] = img;
        }
        return src;
    } catch (eGetMapIcnUrl) {
        return String(fallbackUrl || "images/logo_small_oct.png");
    }
};

JSSHOP.ads.attachNuMapMarkerIconFallback = function(markerObj, fallbackUrl) {
    try {
        if (!markerObj) {
            return;
        }
        var fb = String(fallbackUrl || "images/logo_small_oct.png");
        var bindErr = function() {
            try {
                var icnEl = markerObj._icon;
                if (!icnEl || icnEl.tagName != "IMG") {
                    return;
                }
                if (icnEl.getAttribute("data-incasa-icn-fallback-bound") == "yes") {
                    return;
                }
                icnEl.setAttribute("data-incasa-icn-fallback-bound", "yes");
                icnEl.onerror = function() {
                    try {
                        if (icnEl.getAttribute("data-incasa-icn-fallback-used") == "yes") {
                            return;
                        }
                        icnEl.setAttribute("data-incasa-icn-fallback-used", "yes");
                        icnEl.src = fb;
                    } catch (eMapIcnOnErr) {}
                };
            } catch (eBindMapIcnErr) {}
        };
        if (typeof markerObj.on == "function") {
            markerObj.on("add", bindErr);
        }
        bindErr();
    } catch (eAttachMapIcnFallback) {
        console.log("attachNuMapMarkerIconFallback: " + eAttachMapIcnFallback);
    }
};

JSSHOP.ads.doNuGenMap = function(tAADNGMObj) {
       tDNGMObj = null;
         tDNGMObj = "";
            tDNGMObj = tAADNGMObj;

        console.log("doNuGenMap.tDNGMObj[mdvid]: " + tDNGMObj["mdvid"]);
        // console.log("doNuGenMap: " + JSON.stringify(tDNGMObj));
        spinner.stop();
        smlspinner.stop();
         tDGMSmrkrArr = null;
         tDGMSmrkrArr = [];
        map = L.map(tDNGMObj["mdvid"], JSSHOP.ads.getLeafletCanvasMapOptions({renderer: L.canvas()})).setView([39.0667, -8.6167], 13);
        tDGMSmrkrArr = tDNGMObj["mrkrs"];
        try {
            for (var nmi2 = 0; nmi2 < (tDGMSmrkrArr ? tDGMSmrkrArr.length : 0); nmi2++) {
                if (!tDGMSmrkrArr[nmi2]) {
                    continue;
                }
                if (typeof JSSHOP.ads.getNuMapMarkerIconUrl == "function") {
                    tDGMSmrkrArr[nmi2].icn = JSSHOP.ads.getNuMapMarkerIconUrl(tDGMSmrkrArr[nmi2].icn, "images/logo_small_oct.png");
                }
            }
            tDNGMObj["mrkrs"] = tDGMSmrkrArr;
        } catch (eDoNuNormMarkers) {
            console.log("doNuGenMap.normalizeMarkers: " + eDoNuNormMarkers);
        }
        console.log("doNuGenMap.tDGMSmrkrArr: " + JSON.stringify(tDGMSmrkrArr));
        tPreviewMapType = "street";
        if (tDNGMObj && tDNGMObj["mapType"]) {
            tPreviewMapType = tDNGMObj["mapType"];
        }
        tPreviewMapEffect = "fitbounds";
        if (tDNGMObj && tDNGMObj["mapEffect"]) {
            tPreviewMapEffect = tDNGMObj["mapEffect"];
        }
        tPreviewMapFlySpeed = "normal";
        if (tDNGMObj && tDNGMObj["mapFlySpeed"]) {
            tPreviewMapFlySpeed = tDNGMObj["mapFlySpeed"];
        }
        tPreviewMapAutoPlay = "off";
        if (typeof JSSHOP.ads.getNuMapAutoPlayValue == "function") {
            tPreviewMapAutoPlay = JSSHOP.ads.getNuMapAutoPlayValue((tDNGMObj && tDNGMObj["autoPlay"]), "off");
        }
        JSSHOP.ads.addNuMapTileLayer(map, tPreviewMapType, "street");
        var bounds = L.latLngBounds() // Instantiate LatLngBounds object
        var LeafIcon = L.Icon.extend({
            options: {
                iconSize:     [52, 52],
                popupAnchor:  [-3, -16]
            }
        });
        if(tDGMSmrkrArr.length > 0) {
            tPArr  = null;
            tPArr = tDGMSmrkrArr;
            iti = 0;
            while(iti < tPArr.length) {
                ts = tPArr[iti];
                console.log("doNuGenMap.ts: " + JSON.stringify(ts));
                tIcnQcStr = "images/logo_small_green_oct.png"
                tLatQcStr = ts.lat;
                tLngQcStr = ts.lng;
                tPrpID = ts.prpid;
                tLatQcStr = String(tLatQcStr); // convert to string
                tLngQcStr = String(tLngQcStr);
                tLatQcFlt = parseFloat(tLatQcStr);
                tLngQcFlt = parseFloat(tLngQcStr);
                tMOPrice = ts.price;
                tAMOttl = ts.title;
                tUNZdttle = (typeof JSSHOP.ads.decodeNuMapLzText == "function") ? JSSHOP.ads.decodeNuMapLzText(tAMOttl) : LZString.decompressFromEncodedURIComponent(tAMOttl);
                tMOShortttl = tUNZdttle.substring(0,40) + "...<br><b>" + tMOPrice + "</b>";
                tMOttl = tMOShortttl;
                tMOttl = JSSHOP.ads.getMapMarkerTooltipHtml(ts, tMOttl, tMOPrice);
                console.log("[MAP_LABEL_DEBUG][doNuGenMap.marker]", {
                    idx: iti,
                    prpid: ts.prpid || ts._id || "",
                    rawTitle: tAMOttl,
                    decodedTitle: tUNZdttle,
                    markerLabelText: ts.markerLabelText || "",
                    markerLabelContainerStyle: ts.markerLabelContainerStyle || "",
                    finalTooltipHtml: tMOttl
                });
                ttImgstr = ts.icn;
                tIcnQcStr = JSSHOP.ads.getNuMapMarkerIconUrl(ttImgstr, "images/logo_small_oct.png");
                if (String(tIcnQcStr || "").toLowerCase().indexOf("updt_") != -1) {
                    tTmpMapIcnName = String(tIcnQcStr).replace(/\\/g, "/");
                    tTmpMapIcnName = tTmpMapIcnName.substring(tTmpMapIcnName.lastIndexOf("/") + 1);
                    tTmpMapIcnName = tTmpMapIcnName.replace(/^s_thumb/i, "").replace(/updt_/ig, "");
                    if (tTmpMapIcnName) {
                        tIcnQcStr = "images/ucontent/" + tTmpMapIcnName;
                    }
                }

                // ttSSurl = "javascript:JSSHOP.ads.doGenPrpPop(" + iti + ");";
                ttSSurl = "javascript:eindex('aa-show-prop','pid=aa-show-prop&prpid=" + ts._id + "&cid=" + ts.coid + "&catid=" + ts.category + "');";
                tCnameQcStr = "<a href=\"" + ttSSurl + "\">" + ts.cname + "</a>";
                tLatQcStr =  String(tLatQcFlt);
                tLngQcStr = String(tLngQcFlt);
                try {
                    if((tLatQcStr.indexOf(".") != -1) && (tLngQcStr.indexOf(".") != -1))  {
                        tPAObj = tPArr[iti];
                        lat_lng = [tLatQcStr,tLngQcStr];
                        tImSStr = tIcnQcStr;
                        redIcon = new LeafIcon({iconUrl: tImSStr, className: "btnRounded"});
                        // add a price and title to the marker

                        // make redIcon round
                        redIcon.options.className = "btnRounded";

                        // add the price and title to the marker
                        redIcon.options.price = tMOPrice;
                        redIcon.options.ttl = tMOttl;
                        // add an optionid to the marker
                        // set marker options
                        redIcon.options.iti = iti;
                        redIcon.options.ad = ts._id;
                        // and a marker with the icon and price and title to the map
                        // when the marker is clicked, call doGenPrpPop with the iti option
                        // add a marker to the map
                          bounds.extend(lat_lng);
                        mRed = L.marker([tLatQcStr,tLngQcStr], {icon: redIcon, iti: iti}).bindTooltip( tMOttl, JSSHOP.ads.getMapMarkerTooltipBindOptions(ts)).addTo(map).on('tooltipopen', function(e) {
                            JSSHOP.ads.bindMapMarkerTooltipClick(e.target);
                        }).on('click', function(e) {
                            console.log("L.marker iti: " + JSON.stringify(e.target.options.iti));
                           //  doGenPrpPop(e.target.options.iti);
                          eindex('aa-show-prop','pid=aa-show-prop&prpid=' + tPrpID + '&cid=' + currShopsArr[e.target.options.iti].pcoid);
                        });
                                                JSSHOP.ads.attachNuMapMarkerIconFallback(mRed, "images/logo_small_oct.png");


                        // add a balloon to the marker showing the price and title
                        // mRed.bindPopup('<span class="txtBold txtClrRed">' + tCnameQcStr + '</span><br><span class="txtBold txtClrHdr">Price: ' + redIcon.options.price + '</span><br><span class="txtBold txtClrDlg">Title: ' + redIcon.options.ttl + '</span>');



                    }

            } catch(e) {
            console.log("getLeaves.ERROR: " + e);
            }
          iti++;
          }
           JSSHOP.ads.registerNuMapPlaybackState(tDNGMObj["mdvid"], map, bounds, tDGMSmrkrArr, tPreviewMapEffect, tPreviewMapFlySpeed, tDNGMObj);
           if (typeof JSSHOP.ads.setNuMapCaptureTiming == "function") {
               JSSHOP.ads.setNuMapCaptureTiming(tDNGMObj["mdvid"], tDNGMObj["captureFps"], tDNGMObj["captureFrameIntervalMs"]);
           }
           JSSHOP.ads.addNuMapReplayControl(map, tDNGMObj["mdvid"], tPreviewMapEffect, tDGMSmrkrArr);
           JSSHOP.ads.addNuMapVideoControl(map, tDNGMObj["mdvid"], tPreviewMapEffect, tDGMSmrkrArr);
           JSSHOP.ads.addNuMapSellerBadgeControl(map, tDNGMObj, tDGMSmrkrArr);

           if (tPreviewMapAutoPlay == "on") {
               try {
                   if (JSSHOP.ads.nuMapPlaybackRegistry && JSSHOP.ads.nuMapPlaybackRegistry[tDNGMObj["mdvid"]]) {
                       JSSHOP.ads.nuMapPlaybackRegistry[tDNGMObj["mdvid"]].isReplayPlaying = "yes";
                   }
                   JSSHOP.ads.setNuMapReplayButtonState(tDNGMObj["mdvid"], true);
                   JSSHOP.ads.setNuMapDebugTogglePlayMode(tDNGMObj["mdvid"], true);
               } catch (eAutoPlayPreviewUiStart) {
                   console.log("doNuGenMap.autoPlayUiStart: " + eAutoPlayPreviewUiStart);
               }
               JSSHOP.ads.applyNuMapViewportEffect(
                   map,
                   bounds,
                   tDGMSmrkrArr,
                   tPreviewMapEffect,
                   "fitbounds",
                   tPreviewMapFlySpeed,
                   "normal",
                   {
                       onComplete: function() {
                           try {
                               if (JSSHOP.ads.nuMapPlaybackRegistry && JSSHOP.ads.nuMapPlaybackRegistry[tDNGMObj["mdvid"]]) {
                                   JSSHOP.ads.nuMapPlaybackRegistry[tDNGMObj["mdvid"]].isReplayPlaying = "no";
                               }
                               JSSHOP.ads.setNuMapReplayButtonState(tDNGMObj["mdvid"], false);
                               JSSHOP.ads.setNuMapDebugTogglePlayMode(tDNGMObj["mdvid"], false);
                           } catch (eAutoPlayPreviewDone) {
                               console.log("doNuGenMap.autoPlayDone: " + eAutoPlayPreviewDone);
                           }
                       },
                       onCancel: function() {
                           try {
                               if (JSSHOP.ads.nuMapPlaybackRegistry && JSSHOP.ads.nuMapPlaybackRegistry[tDNGMObj["mdvid"]]) {
                                   JSSHOP.ads.nuMapPlaybackRegistry[tDNGMObj["mdvid"]].isReplayPlaying = "no";
                               }
                               JSSHOP.ads.setNuMapReplayButtonState(tDNGMObj["mdvid"], false);
                               JSSHOP.ads.setNuMapDebugTogglePlayMode(tDNGMObj["mdvid"], false);
                           } catch (eAutoPlayPreviewCancel) {
                               console.log("doNuGenMap.autoPlayCancel: " + eAutoPlayPreviewCancel);
                           }
                       }
                   }
               );
           } else {
               try {
                   if (bounds && typeof bounds.isValid == "function" && bounds.isValid()) {
                       map.fitBounds(bounds, {padding: [20, 20], animate: false});
                   }
               } catch (eMapPreviewNoAutoPlayBounds) {
                   console.log("doNuGenMap.fitBounds: " + eMapPreviewNoAutoPlayBounds);
               }
           }

          }




};

JSSHOP.ads.addNuMapSellerBadgeControl = function(mapObj, mapConfigObj, markersArr) {
    try {
        if (!mapObj) {
            return;
        }
        var showSellerVal = String((mapConfigObj && mapConfigObj["showSellerBadge"]) || "no").toLowerCase();
        if (showSellerVal == "true") {
            showSellerVal = "yes";
        }
        if (showSellerVal != "yes") {
            return;
        }
        var sellerName = "";
        var sellerIcon = "";
        var sellerUid = "";
        if (mapConfigObj) {
            sellerName = String(mapConfigObj["sellerName"] || "");
            sellerIcon = String(mapConfigObj["sellerIcon"] || "");
            sellerUid = String(mapConfigObj["sellerUid"] || "");
        }
        if ((!sellerName || !sellerIcon) && markersArr && markersArr.length > 0) {
            var mk0 = markersArr[0] || {};
            if (!sellerName) {
                sellerName = String(mk0["sellerName"] || mk0["u_fullname"] || mk0["u_name"] || mk0["cname"] || "");
            }
            if (!sellerIcon) {
                sellerIcon = String(mk0["sellerIcon"] || mk0["u_icon"] || "");
            }
            if (!sellerUid) {
                sellerUid = String(mk0["sellerUid"] || mk0["uid"] || mk0["p_uid"] || "");
            }
        }
        if (!sellerUid && typeof quid != "undefined") {
            sellerUid = String(quid || "");
        }
        if (!sellerName) {
            sellerName = "Seller";
        }
        var sellerImg = "";
        var sellerIconLc = String(sellerIcon || "").toLowerCase();
        if (sellerIconLc.indexOf("http") === 0 || sellerIconLc.indexOf("images/") === 0 || sellerIconLc.indexOf("/") === 0) {
            sellerImg = sellerIcon;
        } else if (sellerIcon && sellerIcon.indexOf(".") != -1) {
            sellerImg = "images/user/s_thumb" + sellerIcon;
        } else {
            sellerImg = "images/user/s_thumbdefault.png";
        }
        var profileBase = "";
        if (typeof shopDir != "undefined" && shopDir) {
            profileBase = String(shopDir);
        }
        if (profileBase !== "" && profileBase.charAt(profileBase.length - 1) != "/") {
            profileBase += "/";
        }
        var profileHref = profileBase + "index.html?pid=aa-show-user&tuid=" + encodeURIComponent(String(sellerUid || ""));

        var sellerControl = L.control({position: 'bottomright'});
        sellerControl.onAdd = function() {
            var wrapDiv = L.DomUtil.create('div', 'leaflet-control incasa-map-seller-badge-control');
            wrapDiv.style.background = 'rgba(255,255,255,0.92)';
            wrapDiv.style.borderRadius = '18px';
            wrapDiv.style.padding = '6px 10px';
            wrapDiv.style.boxShadow = '0 2px 8px rgba(0,0,0,0.18)';
            wrapDiv.style.display = 'flex';
            wrapDiv.style.alignItems = 'center';
            wrapDiv.style.gap = '8px';
            wrapDiv.style.maxWidth = '220px';

            var safeSellerName = JSSHOP.ads.escapeMapLabelHtml(sellerName);
            var safeSellerImg = JSSHOP.ads.escapeMapLabelHtml(sellerImg);
            var safeProfileHref = JSSHOP.ads.escapeMapLabelHtml(profileHref);
            wrapDiv.innerHTML = '<a href="' + safeProfileHref + '" class="crsrPointer" style="display:inline-flex;align-items:center;gap:8px;max-width:100%;text-decoration:none;">' +
                '<img src="' + safeSellerImg + '" alt="Seller" style="width:38px;height:38px;border-radius:50%;object-fit:cover;">' +
                '<span class="txtSmall txtBold txtClrHdr" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' + safeSellerName + '</span>' +
                '</a>';
            L.DomEvent.disableClickPropagation(wrapDiv);
            return wrapDiv;
        };
        sellerControl.addTo(mapObj);
    } catch (eSellerBadge) {
        console.log("addNuMapSellerBadgeControl: " + eSellerBadge);
    }
};




JSSHOP.ads.doGenCoStr = function(tCoRecObj, tCoRecIdx) {

    ts = tCoRecObj;
    ttSrtel = ts.c_tel;
    ttSrtel = ttSrtel.replace(/\s/g, '');
    ttSweb = ts.c_web;
    ttSemail = ts.c_email;
    ttSdesc = ts.c_desc;
    ttSwhours = ts.c_whours;
    ttGCSSurl = "javascript:JSSHOP.ads.doGenCoPop(" + tCoRecIdx + ");";

   //  tCurl = "index.html?pid=aa-show-item&itemid=" + ts._id + "&cid=" + ts.c_coid + "&catid=" + ts.c_category;
   tCurl = "javascript:eindex('aa-show-item','pid=aa-show-item&itemid=" + ts._id + "&cid=" + ts.c_coid + "&catid=" + ts.c_category + "');";
    tCshort = ts.c_name.substring(0, 20);
    tCResNuStr = "";




    currFTclr = "menu-material-icons collection-item txtClrTtl";
if(currRcntFavsStr.indexOf(ts.title) != -1) {
currFTclr = "menu-material-icons collection-item txtClrRed";
}

tCResShpStr = "<div tid=\"dvCoFavBtn\">";
tCResShpStr += "<span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrDlg\" onclick=\"javascript:doRecentFavorite('" + ttSweb + "','" +  ts.c_name + "','noQvalue','" + quid + "','nbtnFavs" + tCoRecIdx + "');\"><i id=\"nbtnFavs" + tCoRecIdx + "\" class=\"" + currFTclr + "\" alt=\"favorite\" title=\"favorite\" value=\"favorite\">&#xe87d;</i></span>";
tCResShpStr += "</div>";






// atstr += "<td style=\"text-align: left;\"></td>";
atstr = "<tr><td>";
atstr += "<div class=\"collection-item\">";
atstr += "<div style=\"padding-top:12px;\"><a href=\"" + ttGCSSurl + "\" class=\"txtBold\">" + ts.c_name + "</a>  <span class=\"txtSmall txtClrGrey\">"  + ts.c_location + "</span></div>";
atstr += "<div style=\"word-wrap: break-word;padding-bottom:12px;\">";


    if(ttSrtel.indexOf("351") != -1) {
        atstr += " <div tid=\"dv_c_tel\"  class=\"txtSmall txtBold txtClrHdr\" style=\"float:right\"><span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrDlg\" onclick=\"javascript:doRecentFavorite('" + tCurl + "','" +  ts.c_name + "','noQvalue','" + quid + "','nbtnTel" + tCoRecIdx + "');\"><i id=\"nbtnTel" + tCoRecIdx + "\" class=\"" + currFTclr + "\" alt=\"favorite\" title=\"favorite\" value=\"btn_tel\">&#xe551;</i></span></div>";
    }
    if(ttSemail.indexOf("@") != -1) {
        atstr += " <div tid=\"dv_c_tel\"  class=\"txtSmall txtBold txtClrHdr\" style=\"float:right\"><span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrDlg\" onclick=\"javascript:doRecentFavorite('" + tCurl + "','" +  ts.c_name + "','noQvalue','" + quid + "','nbtnEmail" + tCoRecIdx + "');\"><i id=\"nbtnEmail" + tCoRecIdx + "\" class=\"" + currFTclr + "\" alt=\"favorite\" title=\"favorite\" value=\"btn_email\">&#xe0be;</i></span></div>";
    }
    if(ttSweb.indexOf(".") != -1) {
        atstr += " <div tid=\"dv_c_tel\"  class=\"txtSmall txtBold txtClrHdr\" style=\"float:right\"><span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrDlg\" onclick=\"javascript:doRecentFavorite('" + tCurl + "','" +  ts.c_name + "','noQvalue','" + quid + "','nbtnWeb" + tCoRecIdx + "');\"><i id=\"nbtnWeb" + tCoRecIdx + "\" class=\"" + currFTclr + "\" alt=\"favorite\" title=\"favorite\" value=\"btn_web\">&#xe617;</i></span></div>";
    }
    if(ttSwhours.indexOf("?") != -1) {
        atstr += " <div tid=\"dv_c_tel\"  class=\"txtSmall txtBold txtClrHdr\" style=\"float:right\"><span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrDlg\" onclick=\"javascript:doRecentFavorite('" + tCurl + "','" +  ts.c_name + "','noQvalue','" + quid + "','nbtnWH" + tCoRecIdx + "');\"><i id=\"nbtnWH" + tCoRecIdx + "\" class=\"" + currFTclr + "\" alt=\"favorite\" title=\"favorite\" value=\"btn_hours\">&#xe190;</i></span></div>";
    }


atstr += "<a href=\"javascript:JSSHOP.ui.popAFImgUrl('" + tBimgU + "')\"><img src=\"" + tBimgU + "\" class=\"icnbtn\" style=\"margin-right:8px;padding-right:6px;max-width:50px;\" onerror=\"doGglImgLdErr('" + ts._id + "');\"></a>";
atstr += "</div></div></td>";

atstr += "</tr>";
// rewrite atst with a facebook like style

    return atstr;
};

JSSHOP.ads.getMyShpLnks = function(tCoRecIdx) {
    tmsla = currShopsArr[tCoRecIdx];
    tGMSIid = tmsla["_id"];
    tGMSIname = tmsla["c_name"];
    tGMSIweb = tmsla["c_web"];
    tGMSIemail = tmsla["c_email"];
    tRtGMSIstr = "";
    tRtGMSIstr += "<div class=\"collection-item txtSmall txtBold txtClrDlg\" style=\"text-align:left\">What would you like to do?</div>";
    tRtGMSIstr += " <div tid=\"dv_c_page\"  class=\"txtSmall txtBold txtClrHdr\" style=\"float:right\"><a class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrDlg\" href=\"index.html?pid=aa-edit-place&tpid=" + tGMSIid + "\"><i id=\"nbtnSS" + tCoRecIdx + "\" class=\"" + currFTclr + "\" alt=\"favorite\" title=\"shop\" value=\"btn_shshop\">&#xe190;</i></span>Update Shop Information</div>";

    // tRtGMSIstr += "<div class=\"collection-item txtSmall txtBold txtClrDlg\" style=\"text-align:left\"><a href=\"javascript:JSSHOP.ui.popAFImgUrl('" + tGMSIweb + "')\">Edit Shop Info</a></div>";
    tRtGMSIstr += "<div class=\"collection-item txtSmall txtBold txtClrHdr\" style=\"text-align:left\"><a href=\"javascript:JSSHOP.ui.popAFImgUrl('mailto:" + tGMSIemail + "')\">Remove Shop from listings</a></div>";
    tRtGMSIstr += "<div class=\"collection-item txtSmall txtBold txtClrHdr\" style=\"text-align:left\"><a href=\"javascript:JSSHOP.ui.popAFImgUrl('tel:" + tGMSIemail + "')\">Contact us about this listing</a></div>";
    return tRtGMSIstr;
};

JSSHOP.ads.getNMyShpLnks = function() {
    tmsla = currShopsArr[tCoRecIdx];
    tGMSIid = qco["_id"].value;
    tGMSIname =  c_name.value;
    tGMSIweb = c_web.value;
    tGMSIemail =  c_email.value;
    tRtGMSIstr = "";
    tRtGMSIstr += "<div class=\"collection-item txtSmall txtClrHdr\" style=\"text-align:left\">" + c_name.value + "</div>";
    tUrlEncdn = encodeURIComponent(c_name.value);
    tRtGMSIstr += "<div class=\"collection-item txtClrHdr\" style=\"text-align:left\">" + stxt[555] + " <a class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrHdr txtBold\" href=\"index.html?pid=aa-contactus&cid=" + cid + "&tpnm=" + tUrlEncdn  + "\">" + stxt[86] + " ListID: " + currPlaceObj._id + "</a></div>";
    // tRtGMSIstr += "<div class=\"collection-item txtSmall txtClrHdr\" style=\"text-align:left\">" + stxt[556] + "</div>";
    // tRtGMSIstr += " <div tid=\"dv_c_page\"  class=\"txtSmall txtBold txtClrHdr\" style=\"float:right\"><a class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrHdr txtBold\" href=\"index.html?pid=aa-contactus&cid=" + cid + "&tpnm=" + tUrlEncdn  + "\">" + stxt[86] + " ListID: " + cid + "</a></div>";
    tRtGMSIstr += JSSHOP.shared.getPlaceELink();
    if(currPlaceObj.c_uid  == quid) {
        document.location.href = "index.html?pid=aa-edit-place&tpid=" + cid;
    }
    return tRtGMSIstr;
};
JSSHOP.ads.doGenCoMsgPop = function(tCowRecInc) {
     // msgbox with object
     atmpMBobj = nTmpMsgBxOb();
     atmpMBobj["m_type"] = "product"; // internaï¿½ msg type
     atmpMBobj["m_val"] = "1"; // internal msg token
     /// atmpMBobj["m_strAll"] = tAllowedStr; // message form values to render
     atmpMBobj["m_useAnx"] = "y"; // add image upload btn
     atmpMBobj["m_tmpCB"] = "doNada"; // null function as cllback

    // return aTmpMsgBxOb;

    tswq = currShopsArr[tCowRecInc];
    tsraaq = tswq;
    console.log("doGenCoMsgPop.tsraaq: " + tsraaq);
    tsrdid = tsraaq["_id"];
    console.log("doGenCoMsgPop: " + tsrdid);
     JSSHOP.shared.setFrmFieldVal("qmsgs","msg_to", tsrdid);
     JSSHOP.ui.showNuMsgBox(atmpMBobj);
};

JSSHOP.ads.setGCoPopPanel = function(tggntype, tPPInt) {
    // dvGetCInf
    // dvGetCMsg
    // dvGetCAprase
    switch(tggntype) {
        case "dvGetCInf":
            document.getElementById("dvGCPBody").innerHTML = JSSHOP.ads.doGenCoNStr(tPPInt);
           //  document.getElementById("dvGCPHDR").innerHTML = "Info";
            break;
        case "dvGetCMsg":
            document.getElementById("dvGCPBody").innerHTML = "Message";
           //  document.getElementById("dvGCPHDR").innerHTML =  "Message";

            break;
        case "dvGetCAprase":
            document.getElementById("dvGCPBody").innerHTML = JSSHOP.ads.getARApraseStr(tPPInt);
            // document.getElementById("dvGCPHDR").innerHTML = "Info";
            break;
        case "dvGetMSInf":
            document.getElementById("dvGCPBody").innerHTML = JSSHOP.ads.getMyShpLnks(tPPInt);
                // document.getElementById("dvGCPHDR").innerHTML = "Info";
            break;
        default:
            document.getElementById("dvGCPBody").innerHTML = JSSHOP.ads.doGenCoStr(currShopsArr[tPPInt], tPPInt);
            // document.getElementById("dvGCPHDR").innerHTML = "Info";
            break;
    }


};



function fnshGCFSave(a,b,c) {
try {
console.log("fnshGCFSave: " + b);
        tncobj = null;
        tncobj = {};
    // alert("fnshCoPgAdd: " + b);
    if(b.indexOf("_id") != -1) {
    // alert("fnshCoPgAdd: " + b)
    tncobj = JSON.parse(b);
    tnAObj = tncobj[0];
    console.log("fnshGCFSave: " + tnAObj._id);
    // alert("fnshCoPgAdd: " + tncobj[0]._id);
    if(tnAObj._id) {
        // JSSHOP.cookies.setCookie("cuid",tnAObj,"90","","","");
        document.location.href = "index.html?pid=aa-edit-user&cit=y";
        }
    }
} catch(e) {
console.log("fnshGCFSave: " + e);
}
    }


function doGenCFSave(a,b,c) {
        tDadded = JSSHOP.shared.getFrmFieldVal("qco", "c_dadded", 0);
        tmpDOs = {};
        tmpDOs["ws"] = "where c_uid=? and c_dadded=?";
        tmpDOs["wa"] = [quid,tDadded];
        oi = getNuDBFnvp("qco", 5, null, tmpDOs);
        doQComm(oi["rq"],"noQvalue","fnshGCFSave");
}

JSSHOP.ads.doGenCoSave = function() {
    JSSHOP.shared.setFrmFieldVal("qco", "c_uid", quid);
    JSSHOP.shared.setFrmFieldVal("qco", "c_dadded", JSSHOP.getUnixTimeStamp());
    tmpFobj = null;
    tmpFobj = {};
	// c_whours.value = setWorkHObj("ha");
	// alert("c_whours.value: " + c_whours.value);
    tmpFobj["knvp"] = JSSHOP.shared.getKNVParr(JSSHOP.shared.getDynFrmVals(document["qco"], "tmp_"));

	oi = getNuDBFnvp("qco", 6, null, tmpFobj);
	// alert("OI: " + oi["rq"]);
    console.log("OI: " + oi["rq"]);
    doQComm(oi["rq"], null, "doGenCFSave");
};



JSSHOP.ads.doGenCoAPpd = function() {
    JSSHOP.shared.doNuDwEL();
    tSARR = [stxt[3001],stxt[3002]];
    tVSARR = [svtxt[3001],svtxt[3002]];
    isslen = tSARR.length;
    // alert("tSARR" + tSARR[0]._id);
    rweint = 0;
    while(rweint < tSARR.length) {
        tsasa = null;

    tsasa = tSARR[rweint];

    if(tVSARR[rweint] == c_category.value) {
        console.log("tVSARR[rweint]: " + tVSARR[rweint] + " : " + tSARR[rweint] + " : " +  c_category.value);

        JSSHOP.shared.addCurrSelectOpt(tmp_c_category, tVSARR[rweint], tSARR[rweint], "selected");
    } else {
        console.log("tVSARR[rweint]:no " + tVSARR[rweint] + " : " + tSARR[rweint] + " : " +  c_category.value);

    JSSHOP.shared.addCurrSelectOpt(tmp_c_category, tVSARR[rweint], tSARR[rweint], "");
    }
    rweint++;
    }
};
JSSHOP.ads.doGenCoAPopd = function(tAbCd, tAbCdA, tAbCdB) {
    // tcloseBstr  = "<div onclick=\"JSSHOP.ui.closeLbox();\" class=\"slmtable txtClrRed txtBold brdrClrRed crsrPointer\" style=\"float:right\"><i class=\"menu-material-icons txtBold txtClrRed\" alt=\"close\" title=\"close\" value=\"close\">&#xe5cd;</i></div>";

    fullResp = tAbCdA;
    document.getElementById(tAbCd).innerHTML = fullResp;
    setTimeout("JSSHOP.ads.doGenCoAPpd()", 1000);
};

JSSHOP.ads.doGenCoAddPop = function() {
    loadNurJSModal("tplates/aa-mod-add-co.html?tt=" + JSSHOP.getUnixTimeStamp(), "...", JSSHOP.ads.doGenCoAPopd);
};


function fillShrdPvPForm() {
    tQlogoVA = currPlaceObj.c_logoimg;
tQlogoV = tQlogoVA.replace("https: /", "https://");
c_logoimg.value = tQlogoV;
tIncStr = "default.gif";
if(tQlogoV.indexOf(".") != -1) {
    if(tQlogoV.indexOf("http") != -1) {
tIncStr = currPlaceObj.c_logoimg;
    } else {
tIncStr = "images/slogos/s_thumb" + currPlaceObj.c_logoimg;
    }
}

// add option "noQvalue" to tmp_k_category

 tIstr = "<img class=\"avatar\" id=\"dvPLogoImg\" src=\"" + tIncStr + "\" width=\"48\" height=\"48\" />";
 tCdescStr = currPlaceObj.c_desc;
 if((tCdescStr == "ns") || (tCdescStr == "5")){

     tCdescStr = c_name.value + "  " + stxt[559] + " " + c_location.value + ". " ;

 }
document.getElementById("pprv_dvPIDHDRstr").innerHTML =  "<div style=\"float:left;padding-right:6px;padding-bottom:6px;\">" + tIstr + "</div>" + currPlaceObj.c_name + "<br><span class=\"txtSmall\">" + tCdescStr + "</span>";



tWebVal = currPlaceObj.c_web;
tWUAdr = tWebVal;
tFPFtel = currPlaceObj.c_tel;
ttFPFtel = tFPFtel;

// remove "351 " and "34 " from beginning of phone number
if(tFPFtel.indexOf("351 ") != -1) {
    ttFPFtel = tFPFtel.replace("351 ", "");
}
if(tFPFtel.indexOf("34 ") != -1) {
    ttFPFtel = tFPFtel.replace("34 ", "");
}
tttFPFtel = ttFPFtel.replace(/\s/g, "");
// if the first number in ttFPFtel is 9 then it is a mobile number
if((tttFPFtel.charAt(0) == "9") || (tttFPFtel.charAt(0) == "6") || (tttFPFtel.charAt(0) == "7")) {

    pprv_c_tel.innerHTML = "<a href=\"tel:" + tttFPFtel + "\">" + tttFPFtel + "</a>";
} else {

    pprv_c_tel.innerHTML = "<a href=\"tel:" + tttFPFtel + "\">" + tttFPFtel + "</a>";
}



tWUTtl = tWebVal;
if(tWebVal.indexOf(".") != -1) {

    if(tWebVal.indexOf("http") != -1) {
    } else {
        tWUAdr = "http://" + tWebVal;
    }
    if(tWebVal.indexOf("facebook") != -1) {
        // alert("facebook");
        tWUTtl = "facebook";
        tWUAdr = "https://www.google.com/search?q=" + c_name.value + " facebook";
    }
    if(tWebVal.indexOf("instagram") != -1) {
        tWUTtl = "instagram";
        tWUAdr = "https://www.google.com/search?q=" + c_name.value + " instagram";
    }
    if(tWebVal.indexOf("twitter") != -1) {
        tWUTtl = "twitter";
        tWUAdr = "https://www.google.com/search?q=" + c_name.value + " twitter";
    }
    if(tWebVal.indexOf("youtube") != -1) {
        tWUTtl = "youtube";
        tWUAdr = "https://www.google.com/search?q=" + c_name.value + " youtube";
    }

    tWVstr = "<a href=\"" + tWUAdr + "\" target=\"_blank\">" + tWUTtl + "</a>";

    pprv_c_web.innerHTML = tWVstr;
}

pprv_dvQteBox.innerHTML = "";
pprv_dvQteBox.innerHTML = JSSHOP.ads.getCoAprsDiv(currPlaceObj, "pprv");
tDlen = pprv_dvQteBox.innerHTML.length;
if(tDlen > 10) {
    if(arrUprefs["prfsSHOPuser"][0].tglDvAprs) {
        if(arrUprefs["prfsSHOPuser"][0].tglDvAprs == "show") {
        JSSHOP.ui.toggleNuModule('dvTglAprs','dvTglAprsTbl');
        }
        }
    }
    lnkCoMoreInf.href = "javascript:eindex('aa-show-place','pid=aa-show-place&cid=" + currPlaceObj._id + "&catid=" + currPlaceObj.c_category + "')";
    if(isJApp == "ayes") {
        tOldHref = document.location.href;
        if(tOldHref.indexOf("recamby.com") != -1) {
            tnewHref = "https://recamby.com/clean.html";

        } else {
            tnewHref = "https://titan/recamby/clean.html";
        }
        tInnerHSTR = LZString.compressToEncodedURIComponent(lightbox_content.innerHTML);
        app.setPagePopUp(tnewHref,tInnerHSTR);
    }
// document.getElementById("spInDat").innerHTML = c_name.value + " " + stxt[86];
// document.getElementById("spWHrs").innerHTML = c_name.value + " " + stxt[514];
// document.getElementById("tmp_qsv").value = c_name.value;
}


function doShrdPrvPFnsh() {
    JSSHOP.shared.setDynFieldVals(currPlaceObj, "");
    JSSHOP.shared.setFrmFieldVal("qco", "_id", currPlaceObj._id);
    JSSHOP.shared.setDynFieldVals(currPlaceObj, "pprv_");
    // JSSHOP.shared.setDynFrmVals(document["qco"], "pprv_");
     JSSHOP.shared.doNuDwEL();
     fillShrdPvPForm();

 }

var doShrdPrvwPop = function(tAbCd, tAbCdA, tAbCdB) {
    // fullResp = "<div onclick=\"JSSHOP.ui.closeLbox();\" style=\"float:right\">Closei</div>" + tAbCdA;
    // JSSHOP.shared.popAndFillLbox(fullResp);
    tcloseBstr  = "<div onclick=\"JSSHOP.ui.closeLbox();\" class=\"slmtable txtClrRed txtBold brdrClrRed crsrPointer\" style=\"float:right\"><i class=\"menu-material-icons txtBold txtClrRed\" alt=\"close\" title=\"close\" value=\"close\">&#xe5cd;</i></div>";
JSSHOP.ui.popAndFillLbox(tAbCdA);
    //  document.getElementById(tAbCd).innerHTML = tcloseBstr +  tAbCdA;
    setTimeout("doShrdPrvPFnsh()", 1000);
}
JSSHOP.ads.doGenCoPop = function(tCowRecInc) {
    tNGCPstr = "";
    try {
        tGCoPpObj = currShopsArr[tCowRecInc];
        currPlaceObj = "";
        currPlaceObj = {};
        currPlaceObj = tGCoPpObj;
        tgcps = tGCoPpObj;
        hasGCPcntact = "n";
        hasGCPweb = "n";
        hasGCPemail = "n";
        hasGCPwhours = "n";
        hasGCPtel = "n";
        hasGCPdesc = "n";
        hasGCPlogo = "n";
        hasGCPzp = "n";
        hasGCPdoor = "n";
        hasGCPstreet = "n";
        hasGCPlocation = "n";
        hasGCPregion = "n";
        hasGCPloc_lat = "n";
        hasGCPloc_lng = "n";
        hasGCPmsg = "n";







        currPlaceObj = "";
        currPlaceObj = {};
        currPlaceObj = tGCoPpObj;
        JSSHOP.ajax.doNuAjaxPipe("lightbox_content", "tplates/aa-mod-preview-place.html?cid=" + tgcps._id, doShrdPrvwPop);
                // JSSHOP.ui.popAndFillLbox(tPTXT);
               //  loadNurJSModal('tplates/aa-mod-preview-place.html?cid=" + tgcps._id + "','...',doShrdPrvwPop);
        return;
        currFTclr = "menu-material-icons collection-item txtClrTtl";
        if(currRcntFavsStr.indexOf(tgcps.c_name) != -1) {
            currFTclr = "menu-material-icons collection-item txtClrRed";
        }

        if(tgcps.c_email.indexOf("@") != -1) {
            hasGCPemail = "y";
        }
        if(tgcps.c_web.indexOf(".") != -1) {
            hasGCPweb = "y";
            tCurl = tgcps.c_web;
        }
        if(tgcps.c_tel.indexOf("351 9") != -1) {
            hasGCPtel = "y";
        }
        if(tgcps.c_whours.indexOf("?") != -1) {
            hasGCPwhours = "y";
        }
        if(tgcps.c_desc.indexOf("?") != -1) {
            hasGCPdesc = "y";
        }
        if(tgcps.c_logoimg.indexOf(".") != -1) {
            hasGCPlogo = "y";
        }
        if(tgcps.c_tel.indexOf("351 9") != -1) {
            hasGCPtel = "y";
        }
tPTXT = "";

tPTXT += "<table style=\"width: 100%\"><tr><td>";
tPTXT += "<div tid=\"dvCoLogoImg\" style=\"background-image: url('" + tgcps.c_logoimg + "');background-position: center; background-repeat: no-repeat; background-size: contain;min-height:50px; min-width:50px;max-height:60px; max-width:60px;width:55px;\" class=\"txtBig txtBold txtClrHdr\"><a class=\"ttxtDecorNone\" href=\"" + tCurl + "\"  target=\"_blank\">";
tPTXT += "</a></div>";
tPTXT += "</td><td style=\"text-align:left\">";
tPTXT += "<div tid=\"dvCoFavBtn\" style=\"float: right\">";
tPTXT += "<span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrDlg\" onclick=\"javascript:doRecentFavorite('" + tCurl + "','" +  tgcps.c_name + "','noQvalue','" + quid + "','btnFavs" + tCowRecInc + "');\"><i class=\"" + currFTclr + "\" alt=\"favorite\" title=\"favorite\" value=\"favorite\">&#xe87d;</i></span>";
tPTXT += "</div>";

tPTXT += "<div  tid=\"tmp_c_name\"  style=\"min-height:20px;text-align: left;max-width:98%;word-wrap: break-word;word-break: break-word;width: 100%\" class=\"txtSmall txtBold txtClrHdr\"><a class=\"txtDecorNone txtBig txtSmall txtClrHdr\" href=\"" + tCurl + "\"  target=\"" + tGRPtgt + "\">" +  removeDiacritics(tgcps.c_name) + "</a></div>";




tPTXT += "</td>";
tPTXT += "</tr></table>";

tPTXT += "<div class=\"txtSmall txtClrHdr\" style=\"text-align:right;float: right;margin:8px;\">";
tPTXT += "<a href=\"javascript:JSSHOP.ads.setGCoPopPanel('dvGetMSInf'," + tCowRecInc + ");\">";
tPTXT += stxt[712] + "</a></div>";

// tPTXT += "<div class=\"clearfix\"></div>";
tPTXT += "<table style=\"width:100%;background-color: #F3F3F3\"><tr><td>";
tPTXT += "<i class=\"menu-material-icons collection-item txtClrDlg\" alt=\"location_on\" title=\"Location\" style=\"verticle-align:middle\">&#xe0c8;</i>";
tPTXT += "</td><td style=\"width:100%\">";
tPTXT += "<span class=\"txtSmall txtClrGrey\">"  + ts.c_location + "</span>";
tPTXT += "</td><td style=\"text-align:right;\" nowrap=\"nowrap\">";
nTratInt = tgcps.c_rating * 2;
nTratwInt = nTratInt.toFixed(1);
tPTXT += "<div class=\"txtSmall\" style=\"margin-right:10px;\">" + nTratwInt + "  <span class=\"txtClrGrey\">(" +  tgcps.c_revs + ")</span></div>";
tPTXT += "</td></tr></table>";

if((hasGCPtel == "y") || (hasGCPemail == "y")) {
tPTXT += "<table class=\"slmtable\" align=\"center\"><tr><td>";
tPTXT += "<div id=\"dvGCPBtns\" style=\"margin:0 auto;visibility:visible;display:block;\">";
tPTXT += "<a href=\"javascript:JSSHOP.ads.setGCoPopPanel('dvGetCInf'," + tCowRecInc + ");\">";
tPTXT += "<div id=\"dvGetCInf\" style=\"margin:2px;padding:2px;float:left;padding-right:5px;\" class=\"slmtable bkgdClrWhite brdrClrDlg txtBold txtClrBSLnks crsrPointer\">";
tPTXT += "<img src=\"images/misc/parts_w.gif\" style=\"vertical-align: middle; max-width: 27px; max-height: 27px;\" class=\"icnsmlbtn\">";
tPTXT += "Info";
tPTXT += "</div></a>";
tPTXT += "<a href=\"javascript:JSSHOP.ads.setGCoPopPanel('dvGetCAprase'," + tCowRecInc + ");\">";
tPTXT += "<div id=\"dvGetCAprase\" style=\"margin:2px;padding:2px;float:left;padding-right:5px;\"  class=\"slmtable bkgdClrWhite brdrClrDlg txtBold txtClrBSLnks crsrPointer\">";
tPTXT += "<img src=\"images/misc/mec2_w.gif\" style=\"vertical-align: middle; max-width: 28px; max-height: 28px;\" class=\"icnsmlbtn\">";
tPTXT += "Quote";
tPTXT += "</div></a>";
tPTXT += "</div>";
tPTXT += "</td></tr></table>";
}

tPTXT += "<table><tr><td><span><i class=\"material-icons-two-tone\" style=\"margin-right:4px;\">&#xe601</i></span></td><td><div id=\"dvGCPHDR\" class=\"txtBig txtBold\"></div></td></tr></table>";

tPTXT += "<div id=\"dvGCPBody\" class=\"txtSmall txtBold txtClrHdr\" style=\"text-align:left\">";
tPTXT += JSSHOP.ads.doGenCoNStr(tCowRecInc);

tPTXT += "</div>";
tcPTXT = "<div class=\"clearfix\"></div>";

atstr = "<div style=\"word-wrap: break-word;margin-top:0px;padding-right:9px;max-height:100%;\"  class=\"txtSmall\">";
atstr += "<div style=\"float: left;\">";
atstr += "<a href=\"javascript:JSSHOP.ui.popAFImgUrl('" + tBimgU + "')\"><img src=\"" + tBimgU + "\" class=\"icndbtn\" style=\"margin-right:8px;padding-right:8px;\"  onerror=\"doGglImgLdErr('" + ts._id + "');\"></a>";
atstr += "</div>";

atstr += "<div tid=\"dvCoFavBtn\" style=\"float: right\">";
atstr += "<span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrDlg\" onclick=\"javascript:doRecentFavorite('" + tCurl + "','" +  ts.c_name + "','noQvalue','" + quid + "','btnFavs" + iint + "');\"><i class=\"" + currFTclr + "\" alt=\"favorite\" title=\"favorite\" value=\"favorite\">&#xe87d;</i></span>";
atstr += "</div>";


atstr += "<div><a href=\"" + tCurl + "\" class=\"txtBold txtDecorNone\">" + ts.c_name + "</a></div>";
atstr += "<table style=\"width:100%;background-color: #F3F3F3\"><tr><td>";
atstr += "<i class=\"menu-material-icons collection-item txtClrDlg\" alt=\"location_on\" title=\"Location\" style=\"verticle-align:middle\">&#xe0c8;</i>";
atstr += "</td><td style=\"width:100%\">";
atstr += "<span class=\"txtSmall txtClrGrey\">"  + ts.c_location + "</span>";
atstr += "</td><td style=\"text-align:right;\" nowrap=\"nowrap\">";
nTratInt = ts.c_rating * 2;
nTratwInt = nTratInt.toFixed(1);
atstr += "<div class=\"txtSmall\" style=\"margin-right:10px;\">" + nTratwInt + "  <span class=\"txtClrGrey\">(" +  ts.c_revs + ")</span></div>";
atstr += "</td></tr></table></div>";
atstr += tPTXT;


        // tNGARstr = JSSHOP.ads.getARApraseStr(tCowRecInc);
        // tTabbedDiv = "<div class=\"txtBold txtClrHdr\" style=\"text-align:left\">" + tNGARstr + tPTXT + tNGCPstr + tcPTXT + "</div>";
        console.log("doGenCoPop: " + tNGCPstr);

     } catch(e) {
        console.log("doGenCoPop.ERROR: " + e);
    }
};





JSSHOP.ads.doGenMyCoPop = function() {
    tNGCPstr = "";
    try {
        tGCoPpObj = currShopsArr[tCowRecInc];
        tgcps = tGCoPpObj;
        hasGCPcntact = "n";
        hasGCPweb = "n";
        hasGCPemail = "n";
        hasGCPwhours = "n";
        hasGCPtel = "n";
        hasGCPdesc = "n";
        hasGCPlogo = "n";
        hasGCPzp = "n";
        hasGCPdoor = "n";
        hasGCPstreet = "n";
        hasGCPlocation = "n";
        hasGCPregion = "n";
        hasGCPloc_lat = "n";
        hasGCPloc_lng = "n";
        hasGCPmsg = "n";
        currFTclr = "menu-material-icons collection-item txtClrTtl";
        if(currRcntFavsStr.indexOf(tgcps.c_name) != -1) {
            currFTclr = "menu-material-icons collection-item txtClrRed";
        }


        if(tgcps.c_web.indexOf(".") != -1) {
            hasGCPweb = "y";
            tCurl = tgcps.c_web;
        }

        if(tgcps.c_whours.indexOf("?") != -1) {
            hasGCPwhours = "y";
        }
        if(tgcps.c_desc.indexOf("?") != -1) {
            hasGCPdesc = "y";
        }
        if(tgcps.c_logoimg.indexOf(".") != -1) {
            hasGCPlogo = "y";
        }
        if(tgcps.c_email.indexOf("@") != -1) {
            hasGCPemail = "y";
        }
        if(tgcps.c_tel.indexOf("351 9") != -1) {
            hasGCPtel = "y";
        }
tPTXT = "";

tPTXT += "<table style=\"width: 100%\"><tr><td>";
tPTXT += "<div tid=\"dvCoLogoImg\" style=\"background-image: url('" + tgcps.c_logoimg + "');background-position: center; background-repeat: no-repeat; background-size: contain;min-height:50px; min-width:50px;max-height:60px; max-width:60px;width:55px;\" class=\"txtBig txtBold txtClrHdr\"><a class=\"ttxtDecorNone\" href=\"" + tCurl + "\"  target=\"_blank\">";
tPTXT += "</a></div>";
tPTXT += "</td><td style=\"text-align:left\">";
tPTXT += "<div tid=\"dvCoFavBtn\" style=\"float: right\">";
tPTXT += "<span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrDlg\" onclick=\"javascript:doRecentFavorite('" + tCurl + "','" +  tgcps.c_name + "','noQvalue','" + quid + "','btnFavs" + tCowRecInc + "');\"><i class=\"" + currFTclr + "\" alt=\"favorite\" title=\"favorite\" value=\"favorite\">&#xe87d;</i></span>";
tPTXT += "</div>";

tPTXT += "<div  tid=\"tmp_c_name\"  style=\"min-height:20px;text-align: left;max-width:98%;word-wrap: break-word;word-break: break-word;width: 100%\" class=\"txtSmall txtBold txtClrHdr\"><a class=\"txtDecorNone txtBig txtSmall txtClrHdr\" href=\"" + tCurl + "\"  target=\"" + tGRPtgt + "\">" +  removeDiacritics(tgcps.c_name) + "</a></div>";




tPTXT += "</td>";
tPTXT += "</tr></table>";

tPTXT += "<div class=\"txtSmall txtClrHdr\" style=\"text-align:right;float: right;margin:8px;\">";
tPTXT += "<a href=\"javascript:JSSHOP.ads.setGCoPopPanel('dvGetMSInf'," + tCowRecInc + ");\">";
tPTXT += stxt[712] + "</a></div>";

// tPTXT += "<div class=\"clearfix\"></div>";
tPTXT += "<table style=\"width:100%;background-color: #F3F3F3\"><tr><td>";
tPTXT += "<i class=\"menu-material-icons collection-item txtClrDlg\" alt=\"location_on\" title=\"Location\" style=\"verticle-align:middle\">&#xe0c8;</i>";
tPTXT += "</td><td style=\"width:100%\">";
tPTXT += "<span class=\"txtSmall txtClrGrey\">"  + ts.c_location + "</span>";
tPTXT += "</td><td style=\"text-align:right;\" nowrap=\"nowrap\">";
nTratInt = tgcps.c_rating * 2;
nTratwInt = nTratInt.toFixed(1);
tPTXT += "<div class=\"txtSmall\" style=\"margin-right:10px;\">" + nTratwInt + "  <span class=\"txtClrGrey\">(" +  tgcps.c_revs + ")</span></div>";
tPTXT += "</td></tr></table>";

if((hasGCPtel == "y") || (hasGCPemail == "y")) {
tPTXT += "<table class=\"slmtable\" align=\"center\"><tr><td>";
tPTXT += "<div id=\"dvGCPBtns\" style=\"margin:0 auto;visibility:visible;display:block;\">";
tPTXT += "<a href=\"javascript:JSSHOP.ads.setGCoPopPanel('dvGetCInf'," + tCowRecInc + ");\">";
tPTXT += "<div id=\"dvGetCInf\" style=\"margin:2px;padding:2px;float:left;padding-right:5px;\" class=\"slmtable bkgdClrWhite brdrClrDlg txtBold txtClrBSLnks crsrPointer\">";
tPTXT += "<img src=\"images/misc/parts_w.gif\" style=\"vertical-align: middle; max-width: 27px; max-height: 27px;\" class=\"icnsmlbtn\">";
tPTXT += "Info";
tPTXT += "</div></a>";
tPTXT += "<a href=\"javascript:JSSHOP.ads.setGCoPopPanel('dvGetCAprase'," + tCowRecInc + ");\">";
tPTXT += "<div id=\"dvGetCAprase\" style=\"margin:2px;padding:2px;float:left;padding-right:5px;\"  class=\"slmtable bkgdClrWhite brdrClrDlg txtBold txtClrBSLnks crsrPointer\">";
tPTXT += "<img src=\"images/misc/mec2_w.gif\" style=\"vertical-align: middle; max-width: 28px; max-height: 28px;\" class=\"icnsmlbtn\">";
tPTXT += "Quote";
tPTXT += "</div></a>";
tPTXT += "</div>";
tPTXT += "</td></tr></table>";
}

tPTXT += "<table><tr><td><span><i class=\"material-icons-two-tone\" style=\"margin-right:4px;\">&#xe601</i></span></td><td><div id=\"dvGCPHDR\" class=\"txtBig txtBold\"></div></td></tr></table>";

tPTXT += "<div id=\"dvGCPBody\" class=\"txtSmall txtBold txtClrHdr\" style=\"text-align:left\">";
tPTXT += JSSHOP.ads.doGenCoNStr(tCowRecInc);

tPTXT += "</div>";
tcPTXT = "<div class=\"clearfix\"></div>";

atstr = "<div style=\"word-wrap: break-word;margin-top:0px;padding-right:9px;max-height:100%;\"  class=\"txtSmall\">";
atstr += "<div style=\"float: left;\">";
atstr += "<a href=\"javascript:JSSHOP.ui.popAFImgUrl('" + tBimgU + "')\"><img src=\"" + tBimgU + "\" class=\"icndbtn\" style=\"margin-right:8px;padding-right:8px;\"  onerror=\"doGglImgLdErr('" + ts._id + "');\"></a>";
atstr += "</div>";

atstr += "<div tid=\"dvCoFavBtn\" style=\"float: right\">";
atstr += "<span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrDlg\" onclick=\"javascript:doRecentFavorite('" + tCurl + "','" +  ts.c_name + "','noQvalue','" + quid + "','btnFavs" + iint + "');\"><i class=\"" + currFTclr + "\" alt=\"favorite\" title=\"favorite\" value=\"favorite\">&#xe87d;</i></span>";
atstr += "</div>";


atstr += "<div><a href=\"" + tCurl + "\" class=\"txtBold txtDecorNone\">" + ts.c_name + "</a></div>";
atstr += "<table style=\"width:100%;background-color: #F3F3F3\"><tr><td>";
atstr += "<i class=\"menu-material-icons collection-item txtClrDlg\" alt=\"location_on\" title=\"Location\" style=\"verticle-align:middle\">&#xe0c8;</i>";
atstr += "</td><td style=\"width:100%\">";
atstr += "<span class=\"txtSmall txtClrGrey\">"  + ts.c_location + "</span>";
atstr += "</td><td style=\"text-align:right;\" nowrap=\"nowrap\">";
nTratInt = ts.c_rating * 2;
nTratwInt = nTratInt.toFixed(1);
atstr += "<div class=\"txtSmall\" style=\"margin-right:10px;\">" + nTratwInt + "  <span class=\"txtClrGrey\">(" +  ts.c_revs + ")</span></div>";
atstr += "</td></tr></table></div>";
atstr += tPTXT;


        // tNGARstr = JSSHOP.ads.getARApraseStr(tCowRecInc);
        // tTabbedDiv = "<div class=\"txtBold txtClrHdr\" style=\"text-align:left\">" + tNGARstr + tPTXT + tNGCPstr + tcPTXT + "</div>";
        console.log("doGenCoPop: " + tNGCPstr);
        JSSHOP.ui.popAndFillLbox(tPTXT);
    } catch(e) {
        console.log("doGenCoPop.ERROR: " + e);
    }
};




JSSHOP.ads.doGenCoNStr = function(tCoRecInc) {
    iint = tCoRecInc;
    console.log("doGenCoNStr: " + tCoRecInc);
    tCoRecObj = currShopsArr[tCoRecInc];
    ts = tCoRecObj;
    tRSstr = "";
    tRSstr += "<table style=\"width: 100%\"><tr><td style=\"text-align:left\">";
    // tRSstr += "<div  tid=\"tmp_c_name\"  style=\"min-height:20px;text-align: left;max-width:98%;word-wrap: break-word;word-break: break-word;width: 100%\" class=\"txtSmall txtBold txtClrHdr txtDecorNone\"><a class=\"txtDecorNone txtBig txtSmall txtClrHdr\" href=\"" + tCurl + "\"  target=\"" + tGRPtgt + "\">" +  removeDiacritics(ts.c_name) + "</a></div>";
    // tRSstr += "<div tid=\"dvCweb\"  class=\"txtSmall txtBold txtClrHdr\" style=\"word-wrap: break-word;word-break: break-word;max-width: 90%;\">" + tCWebStr + "</div><br>";
    if(ts.c_location) {
    // tRSstr += "<i class=\"menu-material-icons collection-item txtClrTtl\" alt=\"location_on\" title=\"Location\">&#xe0c8;</i><div class=\"txtSmall txtClrGery\" style=\"margin-right:20px;\">" + ts.c_location + "</div>";
    }
    if(ts.c_tel) {
        // if c_tel starts with 351 9 thrn create sms link with message "get parts" to number
        if(ts.c_tel.indexOf("351 9") != -1) {
        tRSstr += "<div class=\"txtSmall txtClrGery\" style=\"margin-right:20px;\"><a href=\"sms:" + ts.c_tel + "?body=" + stxt[200] + "\">" + ts.c_tel + "</a></div>";
        } else {
    tRSstr += "<div class=\"txtSmall txtClrGery\" style=\"margin-right:20px;\">" + ts.c_tel + "</div>";
        }
}
    if(ts.c_email) {
    // tRSstr += "<div class=\"txtSmall txtClrGery\" style=\"margin-right:20px;\">" + ts.c_email + "</div>";
    }
    if(ts.c_web) {
    tRSstr += "<div class=\"txtSmall txtClrGery\" style=\"margin-right:20px;\">" + ts.c_web + "</div>";
    }
    if(ts.c_whours) {
        // na| 9â€¯amâ€“6:30â€¯pm| 9â€¯amâ€“6:30â€¯pm| 9â€¯amâ€“6:30â€¯pm| 9â€¯amâ€“6:30â€¯pm| 9â€¯amâ€“6:30â€¯pm| na
        twBstr = ts.c_whours;

        // replace all non alpha numeric minus space and | with ;
        twAstr = twBstr.replace(/[^a-zA-Z0-9\s\-\|]/g, ";");
        // replace all ;;; with -
        twAstr = twAstr.replace(/\;\;\;/g, "-");
        // replace all am- with am:
        twAstr = twAstr.replace(/am-/g, "am_");
        // replace all "; " with .
        twAstr = twAstr.replace(/\;\s/g, ".");
        // replace all ; with :
        twAstr = twAstr.replace(/\;/g, ":");
// no lunch twAstr:
//  na| 9-am_6-pm| 9-am_6-pm| 9-am_6-pm| 9-am_6-pm| 9-am_6-pm| na
// lunch twAstr:
// na| 9-am_1-pm.2-6:30-pm| 9-am_1-pm.2-6:30-pm| 9-am_1-pm.2-6:30-pm| 9-am_1-pm.2-6:30-pm| 9-am_1-pm.2-6:30-pm| 9-am_1-pm
// twAstr.split("|") will give seven working days starting with sunday
// twAstr.split("|")[0] will give sunday
// twAstr.split("|")[0].split(".") will give two working periods for sunday
// twAstr.split("|")[0].split(".")[0] will give first working period for sunday
// twAstr contains "na" for non working days
// if twAstr contains . then it has two working periods

// twAstr.split("|")[0].split(".")[0].split("-")[0] will give first working period start for sunday
// twAstr.split("|")[0].split(".")[0].split("-")[1] will give first working period end for sunday
// twAstr.split("|")[0].split(".")[1] will give second working period for sunday
// twAstr.split("|")[0].split(".")[1].split("-")[0] will give second working period start for sunday
// twAstr.split("|")[0].split(".")[1].split("-")[1] will give second working period end for sunday

// using system time to get current day of week and time, then compare with twAstr to see if shop is open
// if shop is open then twAstr will contain the current day of week and time
// if shop is closed then twAstr will contain "na"
tmpDaysArr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
tmpDaysArrAb = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
tmpWordDaysArr = twAstr.split("|");
tmpRetWhrStr = "";
iii = 0;
while(iii < tmpWordDaysArr.length) {
    tWDA = tmpWordDaysArr[iii];
    if(tWDA.indexOf("na") != -1) {
        tmpRetWhrStr += tmpDaysArrAb[iii] + ": " + stxt[201] + "<br>";
    // not open
    } else {
    // open
    // check if there is a second working period
    if(tWDA.indexOf(".") != -1) {
    // two working periods
    tmpWDArr = tWDA.split(".");
    tmpWD1 = tmpWDArr[0];
    tmpWD2 = tmpWDArr[1];
    // check if current time is between first working period
    tmpWD1Arr = tmpWD1.split("-");
    tmpWD1Start = tmpWD1Arr[0];
    tmpWD1End = tmpWD1Arr[1];
    // check if current time is between second working period
    tmpWD2Arr = tmpWD2.split("-");
    tmpWD2Start = tmpWD2Arr[0];
    tmpWD2End = tmpWD2Arr[1];
    tmpRetWhrStr += tmpDaysArrAb[iii] + ": " + tmpWD1Start + " - " + tmpWD1End + " | " + tmpWD2Start + " - " + tmpWD2End + "<br>";

    } else {
    // one working period
    tmpWD1 = tWDA;
    tmpWD1Arr = tmpWD1.split("-");
    tmpWD1Start = tmpWD1Arr[0];
    tmpWD1End = tmpWD1Arr[1];
    tmpRetWhrStr += tmpDaysArrAb[iii] + ": " + tmpWD1Start + " - " + tmpWD1End + "<br>";

    }
    }
    iii++;
}


    // tRSstr += "<div class=\"txtSmall txtClrGery\" style=\"margin-right:20px;\">" + tmpRetWhrStr + "</div>";
    }
    if(ts.c_desc) {
    // tRSstr += "<div class=\"txtSmall txtClrGery\" style=\"margin-right:20px;\">" + ts.c_desc + "</div>";
    }
    if(ts.c_rating) {
    // tRSstr += "<div class=\"txtSmall txtClrGery\" style=\"margin-right:20px;\">" + ts.c_rating + "</div>";
    }
    if(ts.c_revs) {
    // tRSstr += "<div class=\"txtSmall txtClrGery\" style=\"margin-right:20px;\">" + ts.c_revs + "</div>";
    }
    if(ts.c_msg) {
    // tRSstr += "<div class=\"txtSmall txtClrGery\" style=\"margin-right:20px;\">" + ts.c_msg + "</div>";
    }
    if(ts.c_privacy) {
    // tRSstr += "<div class=\"txtSmall txtClrGery\" style=\"margin-right:20px;\">" + ts.c_privacy + "</div>";
    }

    tRSstr += "</td><td>";

    // tRSstr += "<div tid=\"dvCoFavBtn\" style=\"float: right\">";
    // tRSstr += "<span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrDlg\" onclick=\"javascript:doRecentFavorite('" + tCurl + "','" +  ts.c_name + "','noQvalue','" + quid + "','btnFavs" + iint + "');\"><i class=\"" + currFTclr + "\" alt=\"favorite\" title=\"favorite\" value=\"favorite\">&#xe87d;</i></span>";
    // tRSstr += "</div>";
    tRSstr += "</td></tr></table>";
    // return tRSstr;

    return tRSstr;
    // JSSHOP.ui.popAndFillLbox(tRSstr);

};

JSSHOP.ads.doAprasePop = function(tCoRecInc) {
    tmpNAPstr = "noQvalue";
    try {
    tmpNAPstr = JSSHOP.ads.getARApraseStr(tCoRecInc);
    JSSHOP.ui.popAndFillLbox(tmpNAPstr);
    } catch(e) {
    console.log("doAprasePop.ERROR: " + e);
    JSSHOP.ui.popAndFillLbox("doAprasePop.ERROR: " + e);
    }
};


JSSHOP.ads.getCoAprsDiv = function(tPlcObj, theTprfx) {

    tCoRecObj = tPlcObj;
    ts = tCoRecObj;
    hasGCPemail = "n";
    hasGCPtel = "n";
    hasGCPSms = "n";
    // tRSstr = "";
    tEmailAddr = "noQvalue";
    if(tCoRecObj.c_email) {
        console.log("tCoRecObj.c_email: " + tCoRecObj.c_email);
    tEmailAddr = tCoRecObj.c_email;

    if(tEmailAddr == "") {
        tEmailAddr = "noQvalue";
    }
    if(tEmailAddr.indexOf("@") != -1) {
        hasGCPemail = "y";

    }
    }
    if(tCoRecObj.c_tel) {
    tPhoneNum = tCoRecObj.c_tel;
    if(tPhoneNum.indexOf("3") != -1){
        hasGCPtel = "y";
        if((tPhoneNum.indexOf("351 9") != -1) || (tPhoneNum.indexOf("34 6") != -1) || (tPhoneNum.indexOf("34 7") != -1)){
            hasGCPSms = "y";
        }
    }
    }
    if(hasGCPSms == "nada") {
    // if((hasGCPSms == "n") && (hasGCPemail == "n")) {
    tRSstr = "... ..";
    } else {
        if(c_category.value == "101") {
            tmpRQtstr = stxt[122];
            tmpRQtOpener = stxt[127];
            tmpRQtMid = stxt[128];
            tmpRQtEnd = stxt[133];
        } else {
            tmpRQtstr = stxt[123];
            tmpRQtOpener = stxt[130];
            tmpRQtMid = stxt[131];
            tmpRQtEnd = stxt[132];
        }
        tRSstr = "<div class=\"bigtable brdrClrRed gradient-pop bkgdClrWhite\" style=\"max-width: 95%;word-wrap: break-word;margin-top:0px;padding-right:9px;max-height:100%;min-height:15px;\">";
        tRSstr += "<table align=\"center\" style=\"margin: 0 auto;width:100%\"><tr><td align=\"left\">";
        tRSstr += "<a href=\"javascript:JSSHOP.ui.tglPrefModule('" + theTprfx + "dvTglAprs','" + theTprfx + "dvTglAprsTbl','" + theTprfx + "tglDvAprs');\"  class=\"txtClrWhite txtDecorNone\" style=\"color:white\"><div><table style=\"margin: 0 auto;width:100%\"><tr><td><i class=\"small-material-icons txtClrRed\" title=\"btn_qte\">&#xe241;</i></td><td style=\"width:100%;align:left\"><div style=\"text-align: left\" id=\"tdTglSFld\" class=\"crsrPointer\">" + tmpRQtstr + "</div></td>";
        tRSstr += "<td><div id=\"" + theTprfx + "dvTglAprs\"><i class=\"small-material-icons\" title=\"expand_more\">&#xe5cf;</i></td></tr></table></div></a>";
        tRSstr += "</td></tr>";
        tRSstr += "<tr><td>";

    tRSstr += "<div id=\"" + theTprfx + "dvTglAprsTbl\" style=\"visibility:hidden;display:none;\">";
    if((JSSHOP.ads.getPrtsPrefCC("mk") == "noQvalue") || (JSSHOP.ads.getPrtsPrefCC("part") == "noQvalue")) {
        tRSstr += "<div class=\"txtSmall txtClrRed\">* ";

        tRSstr += stxt[129];
        tRSstr += "</div>";
    }
    tRSstr += "<div id=\"" + theTprfx + "dvApraiseTitle\" style=\"padding-left:10px;\" class=\"txtSmall txtClrGrey\">" + stxt[135] + "</div>";
    tRSstr += "<div  style=\"margin:6px;\"><span class=\"txtSmall txtBold bkgdClrTtl\">" + stxt[706] + ":</span></div>";
    tRSstr += "<div id=\"" + theTprfx + "dvApraiseDesc\">";
    // tFFFstr = "Hi, I am requestiong a quote to replace the [PartName] on my: [CarYear:2001] [Make:Ford] [Series:Fiesta] [Model:F1].";
    tFFFstr = "";



        tRSstr += "<div  id=\"" + theTprfx + "dvAprsMsg\" class=\"form-control bkgdClrTtl\" contenteditable=\"true\" spellcheck=\"false\" data-ms-editor=\"false\">";
    if(JSSHOP.ads.getPrtsPrefCC("mk") == "noQvalue") {
    tnkMane = "[" + stxt[102] + " " + stxt[44] + "]";
    } else {
    tnkMane = objAllMakes["m" + JSSHOP.ads.getPrtsPrefCC("mk")]["n"];
    }
    if(JSSHOP.ads.getPrtsPrefCC("part") == "noQvalue") {
    tPartName = "[" + stxt[101] +" " + stxt[44] +  "]";
    } else {
    tPartName = JSSHOP.ads.getPrtsPrefCC("part");
    }
    tYrStr = "[" + stxt[104] + " " + stxt[44] + "]";
     if(JSSHOP.ads.getPrtsPrefCC("year") != "noQvalue") {
        tYrStr = JSSHOP.ads.getPrtsPrefCC("year");
    }

    tSeriStr = "";
    if(JSSHOP.ads.getPrtsPrefCC("series") != "noQvalue") {
        tSeriStr = " - " + JSSHOP.ads.getPrtsPrefCC("series");
    } else {
        tSeriStr = "[" + stxt[107] + " " + stxt[44] + "]";
    }
    tModSTStr = "";
    if(JSSHOP.ads.getPrtsPrefCC("model") != "noQvalue") {
        tModSTStr = " - " + JSSHOP.ads.getPrtsPrefCC("model");
    }
    tFFFstr += tmpRQtOpener + " " + tPartName + " " + tmpRQtMid + " " + tnkMane + tSeriStr + tModSTStr + ".     " + stxt[104] + ": " + tYrStr + ".   " + tmpRQtEnd;
    tRSstr += tFFFstr;

    tRSstr += "</div>";

    // create buttons to send email or sms
    tRSstr += "<div id=\"dvApraiseBtns\" style=\"margin:5px;\"><table><tr>";
    if(hasGCPemail == "y") {
        // JSSHOP.ui.setNuCBBC

    tRSstr += "<td><span class=\"form-control bkgdClrTtl brdrClrHdr txtClrRed crsrPointer\"  onclick=\"JSSHOP.ui.setCBBClickClr(this,this.className + ' txtBig txtBold',this.className, function(){JSSHOP.ads.doGenShpActn(0,'email','" + theTprfx + "');});\"><i class=\"nav-material-icons  txtClrHdr\" alt=\"btn_email\" title=\"email\" value=\"email\" style=\"margin-bottom:4px;margin-left:4px;margin-right:2px;vertical-align: middle;\">&#xe0be;</i> Email</span></td>";
    }
    if(hasGCPSms == "y") {
    tRSstr += "<td>&nbsp;</td><td><span class=\"form-control bkgdClrTtl brdrClrHdr txtClrRed crsrPointer\" onclick=\"JSSHOP.ui.setCBBClickClr(this,this.className + ' txtBig txtBold',this.className, function(){JSSHOP.ads.doGenShpActn(0,'sms','" + theTprfx + "');});\"><i class=\"nav-material-icons  txtClrHdr\" alt=\"btn_sms\" title=\"sms\" value=\"btn_email\" styke=\"margin-bottom:4px;margin-left:4px;margin-right:2px;vertical-align: middle;\">&#xe625;</i> SMS</span></td>";
    }
    tRSstr += "</tr></table></div>";
// clearfix div
    tRSstr += "<div class=\"clearfix\"><br></div>";


    tRSstr += "</div>";
    tRSstr += "</div>";


    tRSstr += "</td>";
    tRSstr += "</tr>";
    tRSstr += "</table>";
    tRSstr += "</div>";



    }
    return tRSstr;
    // JSSHOP.ui.popAndFillLbox(tRSstr);

};
JSSHOP.ads.getARApraseStr = function(tCoRecInc) {
    iint = tCoRecInc;
    console.log("getARApraseStr: " + tCoRecInc);
    tCoRecObj = currShopsArr[tCoRecInc];
    ts = tCoRecObj;
    // tRSstr = "";
    tRSstr = "<table style=\"width: 100%\"><tr><td style=\"text-align:left\">";
    tRSstr += "<div  tid=\"tmp_c_name\"  style=\"min-height:20px;text-align: left;max-width:98%;word-wrap: break-word;word-break: break-word;width: 100%\" class=\"txtSmall txtBold txtClrHdr\"><a class=\"txtDecorNone txtBig txtSmall txtClrHdr\" href=\"" + tCurl + "\"  target=\"" + tGRPtgt + "\">" +  removeDiacritics(ts.c_name) + "</a></div>";
    // tRSstr += "<div tid=\"dvCweb\"  class=\"txtSmall txtBold txtClrHdr\" style=\"word-wrap: break-word;word-break: break-word;max-width: 90%;\">" + tCWebStr + "</div><br>";
    if(ts.c_location) {
    tRSstr += "<div class=\"txtSmall txtClrGery\" style=\"margin-right:20px;\">" + ts.c_location + "</div>";
    }
    if(ts.c_tel) {
        // if c_tel starts with 351 9 thrn create sms link with message "get parts" to number
        if(ts.c_tel.indexOf("351 9") != -1) {
        tRSstr += "<div class=\"txtSmall txtClrGery\" style=\"margin-right:20px;\"><a href=\"sms:" + ts.c_tel + "?body=" + stxt[200] + "\">" + ts.c_tel + "</a></div>";
        } else {
    tRSstr += "<div class=\"txtSmall txtClrGery\" style=\"margin-right:20px;\">" + ts.c_tel + "</div>";
        }
}
    if(ts.c_email) {
    tRSstr += "<div class=\"txtSmall txtClrGery\" style=\"margin-right:20px;\">" + ts.c_email + "</div>";
    }
    if(ts.c_web) {
    tRSstr += "<div class=\"txtSmall txtClrGery\" style=\"margin-right:20px;\">" + ts.c_web + "</div>";
    }
     // this is the apraise pop up. create an editable div with prefilled text accrding to the make and model


    tRSstr += "</td><td>";

    tRSstr += "<div tid=\"dvCoFavBtn\" style=\"float: right\">";
    tRSstr += "<span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrDlg\" onclick=\"javascript:doRecentFavorite('" + tCurl + "','" +  ts.c_name + "','noQvalue','" + quid + "','btnFavs" + iint + "');\"><i class=\"" + currFTclr + "\" alt=\"favorite\" title=\"favorite\" value=\"favorite\">&#xe87d;</i></span>";
    tRSstr += "</div>";
    tRSstr += "</td></tr></table>";
    // return tRSstr;
    tRSstr += "<div id=\"dvApraise\" style=\"min-height: 200px;min-width: 200px;max-height: 200px;max-width: 200px;\">";
    tRSstr += "<div id=\"dvApraiseTitle\" style=\"min-height: 20px;min-width: 200px;max-height: 20px;max-width: 200px;\">Apraise</div>";
    tRSstr += "<div id=\"dvApraiseDesc\" style=\"min-height: 180px;min-width: 200px;max-height: 180px;max-width: 200px;\">";
    tRSstr += "<textarea spellckeck=\"false\" data-ms-editor=\"false\" id=\"txtApraiseDesc\" style=\"min-height: 180px;min-width: 200px;max-height: 180px;max-width: 200px;\">";
    tRSstr += "Hi, I am requestiong a quote to replace the following parts: \n\n";
    if(JSSHOP.ads.getPrtsPrefCC("mk") == "noQvalue") {
        tnkMane = "noQvalue";
    } else {
    tnkMane = objAllMakes["m" + JSSHOP.ads.getPrtsPrefCC("mk")]["n"];

    tRSstr += "Year: " + JSSHOP.ads.getPrtsPrefCC("year") + "\n";
    tRSstr += "Make: " + tnkMane + "\n";
    tRSstr += "Series: " + JSSHOP.ads.getPrtsPrefCC("series") + "\n";
    tRSstr += "Model: " + JSSHOP.ads.getPrtsPrefCC("model") + "\n";
    tRSstr += "Parts: " + JSSHOP.ads.getPrtsPrefCC("part") + "\n";
    }
    tRSstr += "</textarea>";

    // create buttons to send email or sms
    tRSstr += "<div id=\"dvApraiseBtns\" style=\"min-height: 20px;min-width: 200px;max-height: 20px;max-width: 200px;\">";
    tRSstr += "<span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrDlg\" onclick=\"javascript:JSSHOP.ui.popAndFillLbox('');\"><i class=\"menu-material-icons collection-item txtClrTtl\" alt=\"favorite\" title=\"favorite\" value=\"favorite\">&#xe87d;</i></span>";
    tRSstr += "<span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrDlg\" onclick=\"javascript:JSSHOP.ui.popAndFillLbox('');\"><i class=\"menu-material-icons collection-item txtClrTtl\" alt=\"favorite\" title=\"favorite\" value=\"favorite\">&#xe87d;</i></span>";
    tRSstr += "</div>";

    tRSstr += "</div>";
    tRSstr += "</div>";
    return tRSstr;
    // JSSHOP.ui.popAndFillLbox(tRSstr);

};

JSSHOP.ads.getUPrpAprsStr = function(tUprpAint) {
    atMpPrpObj = currShopsArr[tUprpAint];
tMsgBxHdrSTr = "<table><tr><td><img src=\"images/user/s_thumb" + atMpPrpObj.u_icon + "\" class=\"icnRndnUser\"></td><td>" + atMpPrpObj.u_fullname + "</td></tr></table>";
tMsgBxHdrSTr += "<div id=\"dvMsgUlinks\"></div>";
tMsgBxHdrSTr += "<table style=\"margin:0 auto\"><tr><td><img src=\"" + currPrpImgsFldr + "/s_thumb"  + atMpPrpObj.pimage + "\" class=\"icnmedbtn\"></td><td>" + atMpPrpObj.ptitle + "</td></tr></table>";
JSSHOP.ui.popAndFillLbox(tMsgBxHdrSTr);
};

JSSHOP.ads.sortGenShpArr = function(thePGIdx){

  //   doNuSpinSet("dvResWrap", "small", null, "...");
// document.getElementById("includedContent").innerHTML = "";
console.log("sortGenShpArr: " + thePGIdx);
// tmpJSHsrtd = JSSHOP.shared.getSrtdArr(currShopsArr, thePGIdx);
// console.log("sortGenShpArr: " + tmpJSHsrtd);

tSOrdrStr = "sortAsc";
if(pid.indexOf("psearch") != -1) {
    if(currSortObj["psearch"]["sorder"] == "sortAsc") {
        tSOrdrStr = "sortDesc";
        currSortObj["psearch"]["sorder"] = "sortDesc";
    } else {
        tSOrdrStr = "sortAsc";
        currSortObj["psearch"]["sorder"] = "sortAsc";
    }
    currSortObj["psearch"]["sindex"] = thePGIdx;
} else {
    if(currSortObj["msearch"]["sorder"] == "sortAsc") {
        tSOrdrStr = "sortDesc";
        currSortObj["msearch"]["sorder"] = "sortDesc";
    } else {
        tSOrdrStr = "sortAsc";
        currSortObj["msearch"]["sorder"] = "sortAsc";
    }
    currSortObj["msearch"]["sindex"] = thePGIdx;
}
console.log("sortGenShpArr: " + tSOrdrStr);
// conver currSortObj to string and save to local storage
// localStorage.setItem("currSortObj", JSON.stringify(currSortObj));
// set currSortObj cookie with LZString.compressToUTF16(JSON.stringify(currSortObj))
JSSHOP.cookies.setCookie("currSortObj", LZString.compressToEncodedURIComponent(JSON.stringify(currSortObj)), 365);
rashresp = JSSHOP.ads.doNuGenShpStr(currShopsArr, thePGIdx,  tSOrdrStr, "onlyres");
tarrDiv = document.createElement("div");
tarrDiv.innerHTML = rashresp;
console.log("sortGenShpArr:raresp " + rashresp);
// console.log("doEAdsOnPart: " + inpMakes.value + " " + inpModels.value + " " + inpParts.value);
 // document.getElementById("includedContent").innerHTML = tBoxStr;
  document.getElementById("dvResWrap").innerHTML = "";

hararr =   document.getElementById("dvResWrap").appendChild(tarrDiv);
if(hararr) {
    JSSHOP.ads.setEboxUp("doEBAdsFill");
    //  JSSHOP.ads.setShpItmsUp("doShpItmsFill");
    JSSHOP.ui.setNuCBBClickClr(document.getElementById("dvResWrap"),'slmtable txtClrWhite txtSmall','dummycls', doNill, 580);

}

// JSSHOP.ui.doDefCBBCC('dvResWrap', null, void() );
};

JSSHOP.ads.doGenShpActn = function(tmPGIdx, tmPGact, tmPrfx){
    try {
    theTmpGSAstr = tmPrfx + "dvAprsMsg";
    if(document.getElementById(theTmpGSAstr)){
        dvAprsMsgDiv = document.getElementById(theTmpGSAstr);
        dvAprsMsg = dvAprsMsgDiv.innerHTML;
    } else {
        dvAprsMsg ="";
        dvAprsMsg = currShopsArr[tmPGIdx].ptitle;
    }
    if(tmPGIdx == 0) {
        tCoARecObj = currPlaceObj;
    } else {
    tCoARecObj = currShopsArr[tmPGIdx];
    }
    tss = tCoARecObj;
    switch(tmPGact) {
    case "tel":
        window.location.href = "tel:" + tCoARecObj.c_tel;
    break;
    case "whatsapp":
        //             tSurl = "https://api.whatsapp.com/send?text=" + tmpSttl + " " + tmpSurl;

        window.location.href = "https://api.whatsapp.com/send?phone=" + tCoARecObj.c_tel + "&text=" + dvAprsMsg;
        break;
    case "sms":
        // check if device is mobile
        if(JSSHOP.shared.isMobile()) {
        window.location.href = "sms:" + tCoARecObj.c_tel + "?body=" + dvAprsMsg;
        } else {
            tTryAnyWUrl = "sms:" + tCoARecObj.c_tel + "?body=" + dvAprsMsg;
            tTryAnyWLink = "<a href=\"sms:" + tCoARecObj.c_tel + "?body=" + dvAprsMsg + "\">" + stxt[137] + "</a>";
            JSSHOP.ui.popAndFillLbox(stxt[136] + "<br>Link: " + tTryAnyWUrl.substring(0, 15) + ".....<br>" + tTryAnyWLink);
        }
    break;
    case "email":

    window.location.href = "mailto:" + tCoARecObj.c_email + "?subject=" + stxt[134] + "&body=" + dvAprsMsg;

    break;
    case "web":
    if(tss.c_web) {
    window.location.href = tss.c_web;
    }
    break;
    case "hours":
    if(tss.c_whours) {
    JSSHOP.ads.doGenCoPop(tmPGIdx);
    }
    break;
    case "appraise":
        JSSHOP.ads.doApraisePop(tmPGIdx);
    break;
    default:
        break;
    }
} catch(e) {
    console.log("doGenShpActn.ERROR: " + e);
    JSSHOP.ui.popAndFillLbox("doGenShpActn.ERROR: " + e);
}
};

JSSHOP.ads.doGenShpStr = function(theGresObj, theGresIdx, theGresOrdr) {
return JSSHOP.ads.doNuGenShpStr(theGresObj, theGresIdx, theGresOrdr, "onlydef");
};
JSSHOP.ads.doNuGenShpStr = function(theGresObj, theGresIdx, theGresOrdr, theGresType) {

     try {
    theTResType = "shops";
    hasr = "n";
    fullstr = "";

    tToFill = null;
    tToFill = [];
    ttarrToFill = null;
    ttarrToFill = [];
    tToFill = theGresObj;


tHdrArr = null;
tHdrArr = "";
tHdrArr = [];
tAHdFObj = {};
tAHdFObj["fld"] = "c_name";
tAHdFObj["nm"] = stxt[404]; // Name
tHdrArr.push(tAHdFObj);


tAHdFObj = {};
tAHdFObj["fld"] = "c_location";
tAHdFObj["nm"] = stxt[79]; // Location
tHdrArr.push(tAHdFObj);

tQAHdFObj = {};
tQAHdFObj["fld"] = "cccd";
tQAHdFObj["nm"] = stxt[86];
tHdrArr.push(tQAHdFObj);

tQtAHdFObj = {};
tQtAHdFObj["fld"] = "cfavd";
tQtAHdFObj["nm"] = "Favs";
tHdrArr.push(tQtAHdFObj);

ttQAHdFObj = {};
ttQAHdFObj["fld"] = "c_rating";
ttQAHdFObj["nm"] = "Rating";
tHdrArr.push(ttQAHdFObj);


currACTblCnt = tHdrArr.length;

tmpACarr = null;
tmpACarr = "";
tmpACarr = [];


    ttarrToFill = JSSHOP.shared.sort(theGresObj, theGresIdx, theGresOrdr);
    console.log("JSSHOP.ads.ttarrToFill.sorted: " + JSON.stringify(ttarrToFill));

    var len = ttarrToFill.length;
    tIsCntctble = 10;
    var iint = 0;
    var pcid = 0;
    tstr = "";
    tmpOldStreet = "noQvalue";
    tmpOldTitle = "noQvalue";
    tCResBStr = "";
    tGenShpStr  = "";
    tCResShpStr = "";
    atstr = "";
        tSMUrl = "javascript:getLeaves();";
/*
<table align="center" style="margin: 0 auto;width:100%">	<tr>
		<td align="left">
		<table><tr><td><i class="small-material-icons txtClrDlg" title="location">&#xe8b6;</i></td><td><div style="text-align: left" id="tdTglSFld" onclick="javascript:JSSHOP.ui.toggleVisibility('dvTglSFldTbl')" class="crsrPointer"><ti data-ison="stxt[402]" data-desc="btn_search">Search</ti></div></td></tr></table>
</td>
	</tr>
					  <tr>
<td>
<div id="dvTglSFldTbl" style="visibility:vissible;display:block">
<table style="width: 100%">
	<tr>
		<td><table align="center" style="margin: 0 auto">
		<tr>
			<td>&nbsp;</td>
			<td><input class="form-control"  name="tmp_qv" id="tmp_qv" value="" data="disnull"></td>
			<td>&nbsp;</td>
			<td> <div align="center">
				<button class="form-control crsrPointer"  onclick="javascript:qlDoNuPlSearch('tmp_qv','dvPSList',qlShowPlacesRes);"><ti data-ison="stxt[78]" data-desc="btn_search">Search</ti></button></div>
</td>
		</tr>
	</table></td>
	</tr>
	<tr>
		<td><ti data-ison="stxt[400]" data-desc="btn_save">Enter zip code for shops near you</ti></td>
	</tr>
	<tr>
		<td style="height: 4px"></td>
	</tr>
</table>
</div>
	</td>
</tr>
					  <tr>
<td>
</td>
</tr>
					  </table>
*/
        // tCResShpStr equals the above commented out table as a javascript string
        if(pid == "aa-show-psearch") {
            tFindStypeStr = stxt[120];
        } else {
            tFindStypeStr = stxt[121];
        }
        tCResShpStr = "";
        tAesShpStr = "<div class=\"prodRowBox slmtable brdrClrRed\" style=\"max-width: 95%;word-wrap: break-word;margin-top:0px;padding-right:9px;max-height:100%;min-height:15px;\">";
        tAesShpStr += "<table align=\"center\" style=\"margin: 0 auto;width:100%\"><tr><td align=\"left\">";
        tAesShpStr += "<a href=\"javascript:JSSHOP.ui.toggleNuModule('dvTglCoSrch','dvTglSFldTbl');\"  class=\"txtClrWhite txtDecorNone\" style=\"color:white\"><div><table style=\"margin: 0 auto;width:100%\"><tr><td><i class=\"small-material-icons txtClrDrkGrn\" title=\"location\">&#xe8b6;</i></td><td style=\"width:100%;align:left\"><div style=\"text-align: left\" id=\"tdTglSFld\" class=\"crsrPointer\">" + tFindStypeStr + "</div></td>";
        tAesShpStr += "<td><div id=\"dvTglCoSrch\"><i class=\"small-material-icons txtClrHdr\" title=\"expand_more\">&#xe5cf;</i></td></tr></table></div></a>";
        tAesShpStr += "</td></tr>";
        tAesShpStr += "<tr><td>";


        tAesShpStr += "<div id=\"dvTglSFldTbl\" style=\"visibility:visible;display:block\">";
        tAesShpStr += "<table style=\"width: 100%\">";
        tAesShpStr += "<tr>";
        tAesShpStr += "<td><table align=\"center\" style=\"margin: 0 auto\">";
        tAesShpStr += "<tr>";
        tAesShpStr += "<td>&nbsp;</td>";
        tAesShpStr += "<td><input class=\"form-control\"  name=\"tmp_qv\" id=\"tmp_qv\" value=\"\" data=\"disnull\"></td>";
        tAesShpStr += "<td>&nbsp;</td>";
        tAesShpStr += "<td>";
        tAesShpStr += "<div align=\"center\"><button id=\"btnPSearch\" class=\"form-control crsrPointer\" onclick=\"javascript:qlDoNuPlSearch('tmp_qv','dvPSList',qlShowPlacesRes);\">" + stxt[78] + "</button></div>";
        tAesShpStr += "</td>";
        tAesShpStr += "</tr>";
        tAesShpStr += "</table></td>";
        tAesShpStr += "</tr>";
        tAesShpStr += "<tr>";
        // tAddCoUrlSTr = stxt[400] + " " + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"txtBold txctClrHdr bkgdClrNrml\"><a href=\"javascript:JSSHOP.ads.doGenCoAddPop();\" class=\"txtBold txctClrHdr bkgdClrNrml\">+" + stxt[70] + "</a></span>";
        tAddCoUrlSTr = stxt[400];
        tAesShpStr += "<td>" + tAddCoUrlSTr + "</td>";
        tAesShpStr += "</tr>";
        tAesShpStr += "<tr>";
        tAesShpStr += "<td style=\"height: 4px\"></td>";
        tAesShpStr += "</tr>";
        tAesShpStr += "</table>";
        tAesShpStr += "</div>";


        tAesShpStr += "</td>";
        tAesShpStr += "</tr>";
        tAesShpStr += "</table>";
        tAesShpStr += "</div>";
        // tAesShpStr += "<br>";
        tCResShpStr += tAesShpStr;

        // not showing map
        /*
        tCResShpStr += "<div class=\"prodRowBox slmtable brdrClrRed gradient-color\" style=\"max-width: 95%;word-wrap: break-word;margin-top:0px;padding-right:9px;max-height:100%;min-height:15px;\">";
        tCResShpStr += "<a href=\"javascript:JSSHOP.ads.doGenMapShow();\"  class=\"txtClrWhite txtDecorNone\" style=\"color:white\"><div><table style=\"width:100%\"><tr><td><div style=\"padding-right:8px;\" >";
        tCResShpStr += "<i class=\"small-material-icons slmtable gradient-pop txtClrWhite bkgdClrDGreen\" style=\"margin:3px;\" alt=\"map\" title=\"map\">&#xe0c8;</i></div></td><td style=\"width:90%\" class=\"txtClrWhite\"><span class=\"txtClrWhite txtBold\">" + stxt[124] + "</span></td>";
        tCResShpStr += "<td class=\"crsrPointer txtClrWhite\"><div id=\"dvTglPMap\" class=\"icnbtn crsrPointer txtClrWhite\" nowrap=\"nowrap\" style=\"float:right\">";
        tCResShpStr += "<i class=\"small-material-icons txtClrWhite\" title=\"expand_more\">&#xe5cf;</i></div></td></tr></table></div></a>";


        tCResShpStr += "<div id=\"smapWrpr\" style=\"min-height:300px;visibility:hidden;display:none;min-width:99%;\" onfocus=\"\" onblur=\"\">";

        tCResShpStr += "<div id=\"smap\" style=\"min-width:99%;min-height:300px;visibility:visible;display:block;position:fixed;top:-500px;\"></div>";
        tCResShpStr += "<div class=\"txtClrWhite\">" + stxt[531] + "</div>";
        tCResShpStr += "<div class=\"txtClrWhite\">" + stxt[556] + "</div>";

        tCResShpStr += "</div>";
        tCResShpStr += "</div>";
        // end of not showing map
        */

        tCResBStr += "<div id=\"dvResWrap\" class=\"dummycls\">"; // res wrapper


    while(iint < len) {
        tCoRecIdx = iint;
    ts = ttarrToFill[iint];
    tStrBrdrClr = "";
    tBimgU = "images/transparent.gif";
    console.log("c_logoimg: " + ts.c_logoimg);
    tGRPtgt = "_blank";
    tCshort = "...";
    tIsCntctble = 10;
    if(ts.c_name) {
        ts.c_name = ts.c_name;
    }

    if(ts.c_name) {
    taCTV = ts.c_name;

    tCttl = taCTV.replace("/", " - ");
    tCshortttl = tCttl.substring(0, 1);
    } else {
    tCttl = "noQvalue";
    tCshortttl = "noQvalue";
    }

    tCWebStr = "";
    tCweb = "noQvalue";
    tCurl = "";
    if(ts.c_url) {
    tCurl = ts.c_url;
    }
    if(ts.c_web) {
    tCweb = ts.c_web;


    taCWStr = tCweb;
    tCWStr = taCWStr;
    if(tCweb.indexOf("http") != -1) {
    tbCWStr = taCWStr.replace("http://", "");
    tcCWStr = tbCWStr.replace("https://", "");
    tdCWStr = tcCWStr.replace("www.", "");
    taCWStr = tdCWStr;
    } else {

    tCweb = "http://" + tCweb;
    }
    tCWStr = taCWStr;
    if(taCWStr.length > 40){
    tCWStr = taCWStr.substring(0, 40) + "...";
    }
    if((tCurl == "noQvalue") ||  (tCurl == "noQxalue")) {
    }  else {
    tCWebStr = "<a href=\"javasvript:JSSHOP.ads.doGenShpActn(" + tCoRecIdx + ",'web');\">" + tCWStr  + "</a>";
    }

    }


    ttSrtel = ts.c_tel;
    ttSweb = ts.c_web;
    ttSemail = ts.c_email;

         if(ttSrtel != "") {
        if(ttSrtel.indexOf("3") != -1) {
            if(ttSrtel.indexOf("1 9") != -1) {
            tIsCntctble = 15;
             }
        }

        }
        if(ttSemail != "") {
        if(ttSemail.indexOf("@") != -1) {
            tIsCntctble = 15;
         }
        }
        if(ttSweb != "") {
        if(ttSweb.indexOf(".") != -1) {
            tIsCntctble = 15;
         }
    }
    tIBclsStr = "slmtable icndbtn";

    // if(tCWStr == "noQvalue") {}
    if(theTResType == "shops") {
    tGRPtgt = "_blank";

    ttSSurl = "index.html?pid=aa-show-shop&cid=" + ts._id + "&q=" + removeDiacritics(ts.c_name + " " + ts.c_location);
    if(theTResType == "shops") {
        tGRPtgt = "_self";
        ttSSurl = "javascript:JSSHOP.ads.doGenCoPop(" + iint + ");";
    }
    tCurl = ttSSurl;
    tCWebStr = "<a href=\"" + tCweb + "\">" + stxt[62]  + "...</a>";
    } // end of if above. using catchall testing
    tttLImg = ts.c_logoimg;
    if(tttLImg.indexOf(".") != -1) {
     if(tttLImg.indexOf("http") != -1) {
    ttstamp = new Date().getTime();
    tttst = ttstamp + iint;
        if((tttst % 3) == 0) {
    tBimgU = tttLImg;
    tIBclsStr = "slmtable icndbtn";
        } else {
            tIBclsStr = "icnbtn";
    tBimgU = "noQvalue";
        }
    tCshort = "";
    } else {
        tBimgU = tttLImg;
    // tBimgU = "images/pimgs/s_thumb" + ts.c_logoimg;
    }
    } else { // end of indexOf(".") in c_logoimg
    tBimgU = "noQvalue";
    }
        currFTclr = "menu-material-icons collection-item txtClrTtl";
        if(currRcntFavsStr.indexOf(ts.c_name) != -1) {
        currFTclr = "menu-material-icons collection-item txtClrRed";
        }
    console.log("c_logoimg: " + ts.c_logoimg);
    if(tIsCntctble == 15) {
    tStrBrdrClr = " brdrClrRed";
    }
    atstr = "";
           if(iint == 0) {

            // atstr += "<div id=\"dvTglShpItms\"  style=\"word-wrap: break-word;margin-top:0px;padding-right:9px;max-height:90%;\"  class=\"prodRowBox slmtable" + tStrBrdrClr + "\"></div>";
    }
     if(len > 3) {
    if(iint == 3) {
       //  alert("iint: " + iint);
       atstr += "<div id=\"dvEBSearM\"  style=\"word-wrap: break-word;margin-top:0px;padding-right:9px;max-height:90%;\"  class=\"prodRowBox slmtable" + tStrBrdrClr + "\"></div>";

     }
    } else {
        if(iint == 0) {

    atstr += "<div id=\"dvEBSearM\"  style=\"word-wrap: break-word;margin-top:0px;padding-right:9px;max-height:90%;\"  class=\"prodRowBox slmtable" + tStrBrdrClr + "\"></div>";
        }
    }
    tCshrtClrd = pSBC( 0.72, JSSHOP.ui.stringToColour(ts.c_location));

    atstr += "<div style=\"word-wrap: break-word;margin-top:0px;padding-right:9px;max-height:90%;\"  class=\"prodRowBox slmtable" + tStrBrdrClr + "\">";
    atstr += "<div style=\"float: left;\">";
    if(tBimgU == "noQvalue") {
        // use the first letter of the name as the image
        atstr += "<div class=\"txtSmall slmtable\" style=\"margin-right:8px;padding-right:8px;vertical-align: middle; align: center; max-width: 27px; max-height: 27px;color: " + tCshrtClrd + ";\">&nbsp;" + tCshortttl + "</div>";
    // atstr += "<div class=\"txtBold txtClrHdr\" style=\"margin-right:8px;padding-right:8px;vertical-align: middle; max-width: 27px; max-height: 27px;\">" + tCshortttl + "</div>";
    } else {
    atstr += "<a href=\"javascript:JSSHOP.ui.popAFImgUrl('" + tBimgU + "')\"><img src=\"" + tBimgU + "\" class=\"" + tIBclsStr + "\" style=\"margin-right:8px;padding-right:8px;vertical-align: middle; max-width: 27px; max-height: 27px;\"  onerror=\"javascript:doGglImgLdErr(" + ts._id + ");\"></a>";
    }
    atstr += "</div>";
    atstr += "<div tid=\"dvCoPopBtn\" style=\"float: right\">";
    atstr += "<span id=\"btnCoPop" + ts._id + "\" class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrDlg\" onclick=\"javascript:JSSHOP.ads.doGenCoPop(" + iint + ");\"><i class=\"" + currFTclr + "\" alt=\"open in modal\" title=\"open in modal\">&#xe89e;</i></span>";
    atstr += "</div>";
    atstr += "<div tid=\"dvCoFavBtn\" style=\"float: right\">";
    atstr += "<span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrDlg\" onclick=\"javascript:doRecentFavorite('index.html?pid=aa-show-place&cid=" + ts._id + "','" +  ts.c_name + "','noQvalue','" + quid + "','btnFavs" + ts._id + "');\"><i  id=\"btnFavs" + ts._id + "\" class=\"" + currFTclr + "\" alt=\"favorite\" title=\"favorite\" value=\"favorite\">&#xe87d;</i></span>";
    atstr += "</div>";

    // tCurl = "javascript:eindex('aa-show-place','pid=aa-show-place&cid=" + ts._id + "');";
    if(c_category.value == 101) {
        tQsrchName = stxt[3002];
    } else {
        tQsrchName = stxt[3001];
    }

tQsrchName = JSSHOP.ads.getPrtsPrfStr("thin");

     // tCurl = "index.html?pid=aa-show-place&cid=" + ts._id + "&q=" + removeDiacritics(ts.c_name + " " + ts.c_location);
    tCurl = "javascript:eindex('aa-show-place','pid=aa-show-place&cid=" + ts._id + "&q=" + tQsrchName + "');";
    // tCurl = "index.html?pid=aa-show-place&cid=" + ts._id + "&q=" + tQsrchName;
    atstr += "<div><a href=\"" + tCurl + "\" class=\"txtBold txtDecorNone\">" + ts.c_name + "</a></div>";
   atstr += "<table style=\"width:100%;background-color: #F3F3F3\"><tr><td>";
    atstr += "<i class=\"small-material-icons coll-menu-item txtClrHdr txtBold\" alt=\"location_on\" title=\"Location\" style=\"verticle-align:middle;color:" + tCshrtClrd + ";\">&#xe0c8;</i>";
    atstr += "</td><td>";
     atstr += "</td><td>";
    atstr += "<span class=\"txtSmall txtBold txtClrHdr\">"  + ts.c_location + "</span>";
    atstr += "</td><td style=\"text-align:right;\" nowrap=\"nowrap\">";
    nTratInt = ts.c_rating * 2;
    nTratwInt = nTratInt.toFixed(1);
    atstr += "<div class=\"txtSmall\" style=\"margin-right:10px;\">" + nTratwInt + "  <span class=\"txtClrGrey\">(" +  ts.c_revs + ")</span></div>";
    atstr += "</td></tr></table>";







    if(theTResType == "shopsaas") {
    ttSrtel = ts.c_tel;
    ttSweb = ts.c_web;
    ttSemail = ts.c_email;
    ttSdesc = ts.c_desc;
    ttSwhours = ts.c_whours;
    ttGCSSurl = "javascript:JSSHOP.ads.doGenCoPop(" + iint + ");";
    aaatstr = "";
    aaatstr += "<div class=\"collection-item\">";


    ttGCSSurl = "javascript:JSSHOP.ads.doGenCoPop(" + iint + ");";
        if(ttSrtel != "") {
        if(ttSrtel.indexOf("3") != -1) {
            if(ttSrtel.indexOf("1 9") != -1) {
            tIsCntctble = 15;
            aaatstr += " <div tid=\"dv_c_tel\"  class=\"txtSmall txtBold txtClrHdr\" style=\"float:right\"><span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrHdr\" onclick=\"javascript:JSSHOP.ads.doGenShpActn(" + tCoRecIdx + ",'tel');\"><i id=\"nbtnTel" + tCoRecIdx + "\" class=\"menu-material-icons collection-item txtClrHdr\" alt=\"call\" title=\"call\" value=\"btn_tel\">&#xe551;</i></span></div>";
            } else {
                aaatstr += " <div tid=\"dv_c_tel\"  class=\"txtSmall txtBold txtClrHdr\" style=\"float:right\"><span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrDlg\" onclick=\"javascript:JSSHOP.ads.doGenShpActn(" + tCoRecIdx + ",'tel');\"><i id=\"nbtnTel" + tCoRecIdx + "\" class=\"" + currFTclr + "\" alt=\"tel\" title=\"tel\" value=\"btn_tel\">&#xe551;</i></span></div>";
            }
        }

        }
        if(ttSemail != "") {
        if(ttSemail.indexOf("@") != -1) {
            tIsCntctble = 15;
            aaatstr += " <div tid=\"dv_c_email\"  class=\"txtSmall txtBold txtClrHdr\" style=\"float:right\"><span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrDlg\" onclick=\"javascript:JSSHOP.ads.doGenShpActn(" + tCoRecIdx + ",'email');\"><i id=\"nbtnEmail" + tCoRecIdx + "\" class=\"" + currFTclr + "\" alt=\"btn_email\" title=\"email\" value=\"btn_email\">&#xe0be;</i></span></div>";
        }
        }
        if(ttSweb != "") {
        if(ttSweb.indexOf(".") != -1) {
            tIsCntctble = 15;
            aaatstr += " <div tid=\"dv_c_web\"  class=\"txtSmall txtBold txtClrHdr\" style=\"float:right\"><span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrDlg\" onclick=\"JSSHOP.ads.doGenShpActn(" + tCoRecIdx + ",'web');\"><i id=\"nbtnWeb" + tCoRecIdx + "\" class=\"" + currFTclr + "\" alt=\"brn_web\" title=\"web\" value=\"btn_web\">&#xe617;</i></span></div>";
        }
    }
        if(ttSwhours != "") {
        if(ttSwhours.indexOf("?") != -1) {
            aaatstr += " <div tid=\"dv_c_whours\"  class=\"txtSmall txtBold txtClrHdr\" style=\"float:right\"><span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrDlg\" onclick=\"javascript:doRecentFavorite('" + tCurl + "','" +  ts.c_name + "','noQvalue','" + quid + "','nbtnWH" + tCoRecIdx + "');\"><i id=\"nbtnWH" + tCoRecIdx + "\" class=\"" + currFTclr + "\" alt=\"favorite\" title=\"favorite\" value=\"btn_hours\">&#xe190;</i></span></div>";
        }
        if(tIsCntctble == 15) {

            aaatstr += " <div tid=\"dv_c_appraise\"  class=\"slmtable txtSmall txtBold txtClrHdr brdrClrRed\" style=\"float:right\"><span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrDlg\" onclick=\"javascript:JSSHOP.ads.doGenShpActn(" + tCoRecIdx + ",'appraise');\"><i id=\"nbtnAP" + tCoRecIdx + "\" class=\"" + currFTclr + "\" alt=\"hours\" title=\"hours\" value=\"btn_appraise\">&#xe190;</i> Get Quote</span></div>";
        }
        aaatstr += " <div tid=\"dv_c_page\"  class=\"txtSmall txtBold txtClrHdr\" style=\"float:right\"><span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrDlg\" onclick=\"javascript:eindex('aa-edit-place','pid=aa-edit-place&tpid=" + ts._id + "');\"><i id=\"nbtnSS" + tCoRecIdx + "\" class=\"" + currFTclr + "\" alt=\"favorite\" title=\"shop\" value=\"btn_shshop\">&#xe190;</i></span></div>";
        aaatstr += "<div tid=\"dv_c_tel\"  class=\"txtSmall txtBold txtClrHdr bkgdClrRed\" style=\"float:right\"><span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrClrDlg txtClrDlg\" style=\"margin:2px;\"  onclick=\"JSSHOP.ads.doGenCoMsgPop(" + tCoRecIdx + ");\"><i class=\"material-icons txtClrTtl\" alt=\"chat\" title=\"messages\" value=\"messages\">&#xe0b7;</i></span></div>";

    }

    aaatstr += "</div>";
    atstr += aaatstr;

    }
    atstr += "</div>";



    tCResBStr += atstr;
    iint++;
    }
    tCResBStr += "</div>"; // dvResWrap

    newel = document.createElement('div');

   // resultsDiv.innerHTML = "";
   if(theGresObj[0]) {
    strATHhtml = JSSHOP.shared.getNurTblHdrs(tHdrArr, "JSSHOP.ads.sortGenShpArr");
    tmpFstr = JSSHOP.shared.getNuTblSortStr(strATHhtml, tCResBStr, "txtBold txtClrBlack");
    console.log("JSSHOP.ads.doGenShpStr.tmpFstr: " + tmpFstr);
    if(theGresType == "onlydef") {
    return tCResShpStr + tmpFstr;
    } else {
        return tCResBStr;
    }
    } else {
        console.log("JSSHOP.ads.doGenShpStr.No res: " + tCResBStr);

        strATHhtml = JSSHOP.shared.getNurTblHdrs(tHdrArr, "JSSHOP.ads.sortGenShpArr");
        tmpFstr = JSSHOP.shared.getNuTblSortStr(strATHhtml, tCResBStr, "txtBold txtClrBlack");
        console.log("JSSHOP.ads.doGenShpStr.tmpFstr: " + tmpFstr);
        return tCResShpStr + tmpFstr;
    // return "No res: " + tCResBStr;
    }



    } catch(e) {
        console.log("JSSHOP.ads.doGenShpStr.error: " + e);
        return "doNuGenShpStr: " + e;
        }
    };





JSSHOP.ads.doNuGenericRes = function(a,theResp,c) {
 try {
    theTResType = a;
    hasr = "n";
    fullstr = "";
    console.log("JSSHOP.ads.doNuGenericRes: " + theResp);
    tToFill = null;
    tToFill = [];
    ttarrToFill = null;
    ttarrToFill = [];
    ttarrToFill = JSON.parse(theResp);
    currShopsArr = null;
    currShopsArr = [];
    currShopsArr = ttarrToFill;

    var len = currShopsArr.length;
    tIsCntctble = 3;
    tIsFavd = 10;
    var iint = 0;
    var pcid = 0;
    tstr = "";
    tmpOldStreet = "noQvalue";
    tmpOldTitle = "noQvalue";
    tCResBStr = "";
    tCResShpStr = "";

    while(iint < len) {
        // tIsCntctble = 10;
        tIsCntctble = 3;
        tIsFavd = 10;
        tsar = currShopsArr[iint];
        ttSQAtel = tsar.c_tel;
        ttSQAweb = tsar.c_web;
        ttSQAemail = tsar.c_email;
        ttSQAwhours = tsar.c_whours;
        ttSQACSSurl = "javascript:JSSHOP.ads.doGenCoPop(" + iint + ");";

        if(ttSQAtel != "") {
        if(ttSQAtel.indexOf("3") != -1) {
            if((ttSQAtel.indexOf("1 9") != -1) || (ttSQAtel.indexOf("4 6") != -1) || (ttSQAtel.indexOf("4 7") != -1)) {
            tIsCntctble = tIsCntctble + 50;
            } else {
                tIsCntctble = tIsCntctble + 5;
            }
        }

            }
            if(ttSQAemail != "") {
            if(ttSQAemail.indexOf("@") != -1) {
                tIsCntctble = tIsCntctble + 15;
            }
            }
            if(ttSQAweb != "") {
            if(ttSQAweb.indexOf(".") != -1) {
                tIsCntctble = tIsCntctble + 4;
            }
        }


        if(currRcntFavsStr.indexOf(tsar.c_name) != -1) {
            tIsFavd = 15;
        }

    currShopsArr[iint].cccd = tIsCntctble;
    currShopsArr[iint].cfavd = tIsFavd;
    currShopsArr[iint]._id = tsar._id;

    iint++;
    }
    // check for currSortObj in localstorage
   // and log it if it exists

        tmpSrtIdx = "cccd";
        tmpSrtOrdr = "sortDesc";
             console.log("JSSHOP.ads.doNuGenericRes.currSortObj: " + localStorage.getItem("currSortObj"));
            if(pid == "aa-show-psearch") {
                tmpSrtIdx = currSortObj["psearch"]["sindex"];
                tmpSrtOrdr = currSortObj["psearch"]["sorder"];
            } else {

                tmpSrtIdx = currSortObj["msearch"]["sindex"];
                tmpSrtOrdr = currSortObj["msearch"]["sorder"];
            }



            if(isJApp == "yes") {
                tCmprsdStr = JSON.stringify(ttarrToFill);
                tFnlCmprsdStr = LZString.compressToEncodedURIComponent(tCmprsdStr);
                app.setCShpAStr(tFnlCmprsdStr);
            }

    return JSSHOP.ads.doGenShpStr(currShopsArr, tmpSrtIdx, tmpSrtOrdr, "onlydef");

    // resultsDiv.innerHTML = "";
    // return currShopsArr;

    } catch(e) {
        if(isJApp == "yes") {
            tCmprsdStr = JSON.stringify(ttarrToFill);
            tFnlCmprsdStr = LZString.compressToEncodedURIComponent(tCmprsdStr);
            app.setCShpAStr(tFnlCmprsdStr);
        }

        console.log("JSSHOP.ads.doNuGenericRes.error: " + e);
        // return "doNuGenericRes.error: " + e;
        return JSSHOP.ads.doGenShpStr(currShopsArr, tmpSrtIdx, tmpSrtOrdr, "onlydef");

        }


    };



    JSSHOP.ads.doGenericRes = function(a,theResp,c) {
        // document.getElementById("includedContent").innerHTML = theResp;
         try {} catch(e) {
            console.log("JSSHOP.ads.doGenericRes.error: " + e);
            }
        theTResType = a;
        hasr = "n";
        fullstr = "";
        console.log("JSSHOP.ads.doGenericRes: " + theResp);
        var arrToFill = JSON.parse(theResp);

        var len = arrToFill.length;

        var iint = 0;
        var pcid = 0;
        tstr = "";
        tmpOldStreet = "noQvalue";
        tmpOldTitle = "noQvalue";
        tCResBStr = "";
        tCResShpStr = "";
        if(theTResType == "shops") {
            tSMUrl = "javascript:getLeaves();";
            tCResShpStr += "<div style=\"min-height:20px;text-align: left;max-width:98%;word-wrap: break-word;word-break: break-word;width: 100%\" class=\"txtSmall txtBold txtClrHdr\"><a class=\"txtDecorNone txtBig txtSmall txtClrHdr\" href=\"" + tSMUrl + "\">Map</a></div>";
            tCResShpStr += "<div><a href=\"javascript:JSSHOP.ui.toggleVisibility('smap')\">tgl</a></div>";
             tCResShpStr += "<div id=\"smap\" style=\"min-height:300px;visibility:visible;display:block\"></div>";
           //  getLvsTglBox();

        }
        while(iint < len) {
        ts = arrToFill[iint];
        tBimgU = "images/transparent.gif";
        console.log("c_logoimg: " + ts.c_logoimg);
        tGRPtgt = "_blank";
        tCshort = "...";
        if(ts.c_name) {
            ts.c_name = ts.c_name;
        }

        if(ts.c_name) {
        taCTV = ts.c_name;

        tCttl = taCTV.replace("/", " - ");
        tCshortttl = tCttl.substring(0, 1);
        } else {
        tCttl = "noQvalue";
        tCshortttl = "noQvalue";
        }

        tCWebStr = "";
        tCweb = "noQvalue";
        tCurl = "";
        if(ts.c_url) {
        tCurl = ts.c_url;
        }
        if(ts.c_web) {
        tCweb = ts.c_web;


        taCWStr = tCweb;
        tCWStr = taCWStr;
        if(tCweb.indexOf("http") != -1) {
        tbCWStr = taCWStr.replace("http://", "");
        tcCWStr = tbCWStr.replace("https://", "");
        tdCWStr = tcCWStr.replace("www.", "");
        taCWStr = tdCWStr;
        } else {

        tCweb = "http://" + tCweb;
        }
        tCWStr = taCWStr;
        if(taCWStr.length > 40){
        tCWStr = taCWStr.substring(0, 40) + "...";
        }
        if((tCurl.indexOf("paginas") != -1) ||  (tCurl == "noQvalue") ||  (tCurl == "noQxalue")) {
        } else if(tCurl.indexOf("rover") != -1) {
        tCWebStr = "<a href=\"" + tCweb + "\"></a>";
        } else {
        tCWebStr = "<a href=\"" + tCweb + "\" target=\"_blank\">" + tCWStr  + "</a>";
        }

        }
        // if(tCWStr == "noQvalue") {}
        if(theTResType == "shops") {
        tGRPtgt = "_blank";

        ttSSurl = "index.html?pid=aa-show-shop&cid=" + ts._id + "&q=" + removeDiacritics(ts.c_name + " " + ts.c_location);
        tCurl = ttSSurl;
        tCWebStr = "<a href=\"" + tCweb + "\">" + stxt[62]  + "...</a>";
        } // end of if above. using catchall testing
        tttLImg = ts.c_logoimg;
        if((ts.c_logoimg == "noQvalue") || (ts.c_logoimg == "noQvlaue")) {
        } else if(tttLImg.indexOf("http") != -1) {
        tBimgU = tttLImg;
        tCshort = "";
        } else {
        // tBimgU = "images/pimgs/s_thumb" + ts.c_logoimg;
        }
            currFTclr = "menu-material-icons collection-item txtClrTtl";
            if(currRcntFavsStr.indexOf(ts.c_name) != -1) {
            currFTclr = "menu-material-icons collection-item txtClrRed";
            }
        console.log("c_logoimg: " + ts.c_logoimg);




        if((ts.c_location == tmpOldStreet) && (ts.c_name == tmpOldTitle)) {
        procNuUIitem("qco","c_rtype",ts._id,10,"doNada");
        }
        tmpOldTitle = ts.c_name;
        tmpOldStreet = ts.c_location;


        if(theTResType == "shops") {
        tCResShpStr += "<table style=\"width: 100%\"><tr><td>";
        tCResShpStr += "<div tid=\"dvCoLogoImg\" style=\"background-image: url('" + tBimgU + "');background-position: center; background-repeat: no-repeat; background-size: contain;min-height:50px; min-width:50px;max-height:60px; max-width:60px;width:55px;\" class=\"txtBig txtBold txtClrHdr\"><a class=\"ttxtDecorNone\" href=\"" + tCurl + "\"  target=\"_blank\">";
        tCResShpStr +=  tCshort + "</a></div>";
        tCResShpStr += "</td><td>";
        tCResShpStr += "<div  tid=\"tmp_c_title\"  style=\"min-height:20px;text-align: left;max-width:98%;word-wrap: break-word;word-break: break-word;width: 100%\" class=\"txtSmall txtBold txtClrHdr\"><a class=\"txtDecorNone txtBig txtSmall txtClrHdr\" href=\"" + tCurl + "\"  target=\"" + tGRPtgt + "\">" +  removeDiacritics(ts.c_name) + "</a></div>";
        // tCResShpStr += "<div tid=\"dvCweb\"  class=\"txtSmall txtBold txtClrHdr\" style=\"word-wrap: break-word;word-break: break-word;max-width: 90%;\">" + tCWebStr + "</div><br>";
        if(ts.c_location) {
        tCResShpStr += "<div class=\"txtSmall txtClrGery\" style=\"margin-right:20px;\">" + ts.c_location + "</div>";
        }
        tCResShpStr += "</td><td>";

        tCResShpStr += "<div tid=\"dvCoFavBtn\" style=\"float: right\">";
        tCResShpStr += "<span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrDlg\" onclick=\"javascript:doRecentFavorite('" + tCurl + "','" +  ts.c_name + "','noQvalue','" + quid + "','btnFavs" + iint + "');\"><i id=\"btnFavs" + iint + "\" class=\"" + currFTclr + "\" alt=\"favorite\" title=\"favorite\" value=\"favorite\">&#xe87d;</i></span>";
        tCResShpStr += "</div>";
        tCResShpStr += "</td></tr></table>";
        } else {

        tCResBStr += "<div class=\"swiper-slide\" style=\"width: 100%;\">";
        tCResBStr += "<table style=\"width: 100%\" class=\"prodRowBox\"><tr><td>";
        tCResBStr += "<table style=\"width: 100%\"><tr>";
        tCResBStr += "<td>";

        tCResBStr += "<table style=\"width:100%\"><tr><td><table cellpadding=\"3px\" cellspacing=\"3px\"><tr>";
        tCResBStr += "<td><a class=\"ttxtDecorNone\" href=\"" + tCurl + "\"  target=\"_blank\"><div tid=\"dvCoLogoImg\" style=\"background-image: url('" + tBimgU + "'); background-repeat: no-repeat; background-size: contain;min-height:50px; min-width:50px;max-height:60px; max-width:60px;\" class=\"txtBig txtBold txtClrHdr\">";
        tCResBStr += tCshort + "</div></a></td><td style=\"width: 16px\">";
        tCResBStr += "</td><td style=\"text-align: left; vertical-align:top\"><div tid=\"dvPrdMedia\"></div></td></tr></table></td></tr></table></td>";
        tCResBStr += "<td  style=\"width: 100%;text-align: left; vertical-align:top\"><div  tid=\"tmp_c_title\"  style=\"min-height:20px;text-align: left;max-width:98%;word-wrap: break-word;\" class=\"txtBig txtBold txtClrHdr\"><a class=\"txtDecorNone txtBig txtBold txtClrHdr\" href=\"" + tCurl + "\"  target=\"_blank\">" +  ts.c_name + "</a></div>";
        tCResBStr += "</td>";
        tCResBStr += "</tr></table>";

        tCResBStr += "</td>";
        tCResBStr += "</tr><tr><td style=\"background-color: #F3F3F3\">";
        tCResBStr += "<div style=\"min-height:20px;text-align: left;max-width:80%;word-wrap: break-word;word-break: break-word;\" tid=\"tmp_c_desc\" class=\"txtSmall txtClrDGreen\">" + ts.c_desc + "</div></td></tr>";
        tCResBStr += "<tr><td><table style=\"width: 100%\"><tr>";
        tCResBStr += "<td><i class=\"material-icons txtClrDGreen\"  style=\"margin-top: 5px;font-size:10px;\" alt=\"cityloc\" title=\"cityloc\">&#57527;</i></td>";
        tCResBStr += "<td><table style=\"width: 100%\"><tr>";
        if(ts.c_street) {
        tCResBStr += "<td><div class=\"txtSmall txtBold txtClrGrey\"  style=\"max-width:90%; word-warp:break-word;\">" + ts.c_street + "</div></td></tr><tr>";
        }
        if(ts.c_location) {
        // tCResShpStr += "<div class=\"txtSmall txtClrGery\" style=\"float:left;margin-right:20px;\">" + ts.c_location + "</div>";

        tCResBStr += "<td><div class=\"txtClrHdr\" style=\"float:left;margin-right:20px;\">" + ts.c_location + "</div></td>";
        }
        // tCResBStr += "<a  href=\"javascript:JSSHOP.ui.doDefCBBCC('aLnkCall', null, doRegion() );\"><div class=\"txtSmall txtBold\" style=\"float:left\">" + ts.c_region + "</div></a>";
        // tCResBStr += "<a href=\"javascript:JSSHOP.ui.doDefCBBCC('aLnkCall', null, getRegions() );\"><div  style=\"float:left\">more...</div></a></td>";
        tCResBStr += "</tr><tr>";
        if(ts.c_tel) {
        tCResBStr += "<td><div tid=\"dv_c_tel\"  class=\"txtSmall txtBold txtClrHdr\">" + ts.c_tel + "</div></td></tr><tr>";
        }

        tCResBStr += "<td><div tid=\"dvCweb\"  class=\"txtSmall txtBold txtClrHdr\" style=\"word-wrap: break-word;word-break: break-word;max-width: 90%;\">" + tCWebStr + "</div></td></tr>";
        tCResBStr += "</table></td></tr></table></td></tr><tr><td>&nbsp;</td></tr><tr><td>";
        tCResBStr += "<table style=\"width: 100%\" class=\"bkgdClrNrml\"><tr><td>";



        tCResBStr += "<div tid=\"dvCoFavBtn\">";
        tCResBStr += "<span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrClrDlg txtClrDlg\" onclick=\"javascript:doRecentFavorite('" + tCurl + "','" +  ts.c_name + "','noQvalue','" + quid + "','btnFavs" + iint + "');\"><i id=\"btnFavs" + iint + "\" class=\"" + currFTclr + "\" alt=\"favorite\" title=\"favorite\" value=\"favorite\">&#xe87d;</i></span>";
        tCResBStr += "</div>";

        /*
        tCResBStr += "<td style=\"text-align: center\"><a tid=\"aLnkCall\" href=\"javascript:JSSHOP.ui.doDefCBBCC('aLnkCall', null, doCall() );\"><i class=\"material-icons\"  style=\"margin-top: 5px;font-size:32px;\" alt=\"call\" title=\"call\">&#xe0cd;</i><br>Call</a></td>";
        tCResBStr += "<td style=\"text-align: center\"><a href=\"javascript:JSSHOP.ui.doDefCBBCC('ahSettingsIcon', null, document.location.href='index.html?pid=aa-contactus&cid=' + cid);\" class=\"txtClrHdr\"><i class=\"material-icons txtClrHdr\"  style=\"margin-top: 5px;font-size:32px;\" alt=\"message\" title=\"message\">&#57527;</i><br>Msg</a></td>";
        tCResBStr += "<td style=\"text-align: center\"><a href=\"javascript:JSSHOP.ui.doDefCBBCC('ahSettingsIcon', null, document.location.href='index.html?pid=aa-settings&cid=' + cid);\"><i class=\"material-icons\"  style=\"margin-top: 5px;font-size:32px;\" alt=\"web\" title=\"web\">&#xe069;</i><br>Web</a></td>";
        tCResBStr += "<td style=\"text-align: center\"><a href=\"javascript:JSSHOP.ui.doDefCBBCC('ahSettingsIcon', null, document.location.href='index.html?pid=aa-settings&cid=' + cid);\"><i class=\"material-icons\"  style=\"margin-top: 5px;font-size:32px;\" alt=\"directions\" title=\"directions\">&#xe0c8;</i><br>Go</a></td>";
        */
        tCResBStr += "</td></tr></table></td></tr><tr>";
        tCResBStr += "<td style=\"background-color: #F3F3F3\"></td></tr><tr><td></td></tr><tr><td></td></tr></table>";

         tCResBStr += "</div>"; // en swiper-slide

        }
        iint++;
        }

        newel = document.createElement('div');

        if(arrToFill[0]) {

        } else {
        // no results
        }

        if(theTResType == "shops") {


        console.log("JSSHOP.ads.shops.tCResShpStr: " + tCResShpStr);

        return tCResShpStr;
        } else {
        // wrap tCResBStr in the swiper div

    tmpFFstr = "<div  style=\"max-width:300px;margin: 0 auto;\"><div class=\"swiper\"><div class=\"swiper-wrapper\">" + tCResBStr + "</div>";
    tmpFFstr += "<div class=\"swiper-pagination\"></div>";
    tmpFFstr += "<div class=\"swiper-button-prev txtSmall txtBold txtClrRed\"></div>";
    tmpFFstr += "<div class=\"swiper-button-next\"></div>";

    tmpFFstr += "</div>";
    tmpFFstr += "<div class=\"clearfix\"></div>";

    tmpFFstr += "<div class=\"slmtable txtClrHdr crsrPointer\" onclick=\"javascript:eindex('aa-show-esearch','pid=aa-show-esearch&eatype=ebay');\" style=\"text-align:center\">"  + stxt[557] + "</div>";
    tmpFFstr += "</div>";
newStr = tmpFFstr;

        return tCResBStr;
        }

        };

/*
* g ads function
*/

JSSHOP.ads.STANDBY_doPgLnkMedia = function(tDPLMtype, tDPLMres) {
};

JSSHOP.ads.doPgLnkMedia = function(tDPLMtype, tDPLMres) {
currPLMtype = tDPLMtype;
// document.getElementById("includedContent").innerHTML = "";
console.log("doPgLnkMedia: " + tDPLMtype + "::" + tDPLMres + "::" + currIsAjaxed)
tDPLMtStr = "ggl";
if((currUrlArr.q) && ("pid" != "aa-show-shop")){
currCstmQstr = currUrlArr.q;
} else {
// currCstmQstr = "recambios auto";
currCstmQstr = JSSHOP.ads.getPrtsPrfStr("piezas parts auto");
}
// remove any special characters minus "-" from currCstmQstr
currCstmQstr = currCstmQstr.replace(/[^a-zA-Z0-9\s\-]/g, '');
// remove duplicate words from currCstmQstr
currCstmQstr = currCstmQstr.replace(/\b(\w+)\s+\1\b/g, '$1');



if(tDPLMtype == "ggl") {
// dvGGlSres.setAttribute("data-resultSetSize", tDPLMres);
console.log("doPgLnkMedia:getGsearchOnP2 " + tDPLMtype + "::" + tDPLMres)
currPLMtype = "ggl";
JSSHOP.ads.getGsearchOnP("Search");
} else {
    currPLMtype = "ebay";
    JSSHOP.ads.initEAds(encodeURIComponent(currCstmQstr), "dvEAdsRes", tDPLMres);

    console.log("doPgLnkMedia:initEAds3 " + tDPLMtype + "::" + tDPLMres + "::" + currCstmQstr)

    // JSSHOP.ads.setNuShopsUp(JSSHOP.ads.doLocalShops(5, "RAND()", "partspt", "setShopsUp"));

  // JSSHOP.ads.doLocalShops(5, "RAND()", "partspt", "setShopsUp");

   //  JSSHOP.ads.setNuShopsUp("doNada");
tDPLMtStr = "ebay";
}




};

/*
* g ads function
*/

JSSHOP.ads.getGsearchOnP = function(tmpCXtype) {
tmpGSopts = {};
tmpGSopts["spaVid"] = "7494e5ea7bd171254";
tmpGSopts["enVid"] = "7494e5ea7bd171254";
tmpGSopts["ptVid"] = "7494e5ea7bd171254";

tmpGSopts["spaSearch"] = "e5956f3d7f1bbd535";
tmpGSopts["enSearch"] = "75c5a2c63f8a84fc8";
tmpGSopts["ptSearch"] = "68b5981fcab397b2b";
tmpGSopts["frSearch"] = "c43a3ef543bff4073";

tmpGSopts["spaImg"] = "64d8786c6f0cf0da8";
tmpGSopts["enImg"] = "64d8786c6f0cf0da8";
tmpGSopts["ptImg"] = "64d8786c6f0cf0da8";

// cx=06e4737e0b0074ff0
// gl=pt
// num=10
// q=peï¿½a
// searchType=image


tGSPLGarr = [];
tGSPLGarr  = usrlang.split("_");
tGSPLGkstr = tGSPLGarr[0] + tmpCXtype;
tGSPLGcx = tmpGSopts[tGSPLGkstr];
tGLstr = tGSPLGarr[0];
console.log("getGsearchOnP: " + tGSPLGcx);
tGLLoc = "pt";
if(tGLstr == "pt") {
tGLLoc = "pt";
} else if(tGLstr == "es") {
tGLLoc = "es";
} else if(tGLstr == "fr") {
tGLLoc = "fr";
} else {
tGLLoc = "uk";
}
if(currUrlArr.q) {
atmpNqval = currUrlArr.q;
} else {
    atmpNqval = JSSHOP.ads.getPrtsPrfStr("piezas parts auto");

// atmpNqval = "recambios auto";
}
tmpNqval = JSSHOP.ads.getPrtsPrfStr("thin");
tDocHref = document.location.href;

    if(tDocHref.indexOf("q=") != -1) {
if(Math.random() < 0.5) {

     //    JSSHOP.loadScript("https://cse.google.com/cse.js?cx=" + tGSPLGcx, doGsearchOnPart,"js");
     JSSHOP.loadScript("https://cse.google.com/cse.js?gl=" + tGLLoc + "&cx=" + tGSPLGcx + "&q=" + tmpNqval, doGsearchOnPart,"js");

// tmpQArrQ = JSSHOP.ajax.doNuAjaxPipe(null, "_p/rss/gtest.php?cx=" + tGSPLGcx + "&qv=" + tmpNqval, doNuGSOnPart);
    } else {
        JSSHOP.loadScript("https://cse.google.com/cse.js?gl=" + tGLLoc + "&cx=" + tGSPLGcx + "&q=" + tmpNqval, doGsearchOnPart,"js");
    }
} else {
    // JSSHOP.loadScript("https://cse.google.com/cse.js?gl=" + tGLLoc + "&cx=" + tGSPLGcx + "&q=" + tmpNqval, doGsearchOnPart,"js");

    tmpQArrQ = JSSHOP.ajax.doNuAjaxPipe(null, "_p/rss/gtest.php?gl=" + tGLLoc + "&cx=" + tGSPLGcx + "&qv=" + tmpNqval, doNuGSOnPart);

// JSSHOP.loadScript("https://cse.google.com/cse.js?cx=" + tGSPLGcx, doGsearchOnPart,"js");
}

};




/*
* e ad functions
*/
function setEbayPTES(tEPSobj) {
    console.log("setEbayPTES: " + tEPSobj);
tResObj = JSON.parse(tEPSobj.rs);
tHHstr = tEPSobj.hh;
tHHObj = tHHstr.split(":");
console.log("setEbayPTES: " + tResObj[0].p_spa_spa);
JSSHOP.ads.setPrtsPrefCC("partES", tResObj[0].p_spa_spa);
currCstmQry = currUrlArr.make;
if((currUrlArr.series) && (currUrlArr.series != "null")) {
currCstmQry  += " " + currUrlArr.series;
 }
 currCstmQry  += " " + tResObj[0].p_spa_spa;
tmpQArrQ = JSSHOP.ajax.doNuAjaxPipe(tEPSobj.el, "_p/rss/etest.php?nr=" + tHHObj[1] + "&qv=" + JSSHOP.ads.getPrtsPrfStr("thin"), JSSHOP.ads.doEAdsOnPart);
}



function setEbayTrPTES(aTlstrA, aTlsrB, aTlstrC) {
    console.log("setEbayTrPTES: " + aTlsrB);

 tTrnsltdArr = JSON.parse(aTlsrB);
tSpStr = tTrnsltdArr[0][0][0];
console.log("setEbayTrPTES: " + tSpStr);
JSSHOP.ads.setPrtsPrefCC("partES", tSpStr);
 tmpQArrQ = JSSHOP.ajax.doNuAjaxPipe("includedContent", "_p/rss/etest.php?nr=100&qv=" + removeDiacritics(tSpStr), JSSHOP.ads.doEAdsOnPart);
}

JSSHOP.ads.initEAds = function(tIEAQstr, tIEAelem, tIEAres) {
console.log("initEAds : " + tIEAQstr);
if(tIEAQstr.length < 2) {
return;
}
tPrti = "007";
if(JSSHOP.ads.getPrtsPrefCC("prti") == "noQvalue") {
tPrti = "007";
} else {
tPrti = JSSHOP.ads.getPrtsPrefCC("prti");
}
if(currUrlArr.prti) {
tPrti = currUrlArr.prti;
}
try {
if((usrlang == "pt_pt") && (JSSHOP.ads.getPrtsPrefCC("partES") == "noQvalue")){

if(tPrti == "007") {
    if(JSSHOP.ads.getPrtsPrefCC("part") == tIEAQstr) {
        tmpQArrQ = JSSHOP.ajax.doNuAjaxPipe(tIEAelem, "_p/rss/etest.php?nr=" + tIEAres + "&qv=" + tIEAQstr, JSSHOP.ads.doEAdsOnPart);

    // JSSHOP.ads.setPrtsPrefCC("part", tIEAQstr);
    } else {



   //  if((JSSHOP.ads.getPrtsPrefCC("partES") == "noQvalue") || (JSSHOP.ads.getPrtsPrefCC("partES") == "noQvalue")) {
// use google translate api to translate currUrlArr.part from pt to es and return the translated string
//tUrlStr = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=pt&tl=es&dt=t&q=" + currUrlArr.part;

if(JSSHOP.ads.getPrtsPrefCC("prti") == "noQvalue") {
console.log("initEAds:prti: " + tPrti);
} else {
    tmpQArrQ = JSSHOP.ajax.doNuAjaxPipe(tIEAelem, "_p/rss/gtrans.php?nr=" + tIEAres + "&qv=" + tIEAQstr, setEbayTrPTES);
}
  // tmpQArrQ = JSSHOP.ajax.doNuAjaxPipe(tIEAelem, "_p/rss/etest.php?nr=" + tIEAres + "&qv=" + tIEAQstr, JSSHOP.ads.doEAdsOnPart);
    }
} else {


tmpDOs = null;
tmpDOs = {};
// tmpDOs["ws"] = "where p_pt_pt=?";
/// tmpDOs["wa"] = [currUrlArr.part];
tmpDOs["ws"] = "where p_id=?";
tmpDOs["wa"] = [tPrti];
tmpDOs["l"] = 1;
oi = getNuDBFnvp("qpart",5,null,tmpDOs);
// doQComm(oi["rq"], tIEAelem, "setEbayPTES");


atac = null;
atac = nCurrCnxOb();
atac["q"] = oi["rq"];
atac["cb"] = "setEbayPTES";
atac["el"] = tIEAelem;
atac["hh"] = tIEAQstr + ":" + tIEAres;
// atac["lz"] = "y";
doNurQComm(atac);
}
} else {
tmpQArrQ = JSSHOP.ajax.doNuAjaxPipe(tIEAelem, "_p/rss/etest.php?nr=" + tIEAres + "&qv=" + tIEAQstr, JSSHOP.ads.doEAdsOnPart);
}
} catch(e) {
console.log("JSSHOP.ads.initEAds.ERROR: " + e);
}
};



JSSHOP.ads.sortEAdsFullStr = function(thePGIdx){
     document.getElementById("includedContent").innerHTML = "";
console.log("sortEAdsFullStr: " + thePGIdx);
tmpJSsrtd = JSSHOP.shared.getSrtdArr(currEbyPrdsArr, thePGIdx);
console.log("sortEAdsFullStr: " + tmpJSsrtd);
raresp = JSSHOP.ads.getEAdsFullStr(tmpJSsrtd, "part", "doEAdsOnPart");
trrDiv = document.createElement("div");
trrDiv.innerHTML = raresp;
console.log("sortEAdsFullStr:raresp " + raresp);
// console.log("doEAdsOnPart: " + inpMakes.value + " " + inpModels.value + " " + inpParts.value);
 // document.getElementById("includedContent").innerHTML = tBoxStr;
 document.getElementById("includedContent").appendChild(trrDiv);
};



JSSHOP.ads.getEAdsFullStr = function(thePrdsArr, thePrdsCls, thePrdsCB){
console.log("getEAdsFullStr: " + JSON.stringify(thePrdsArr));
tProdsAR = null;
tProdsAR = "";
tProdsAR = [];
tProdsTobj = null;
tProdsTFobj = "";
tProdsTFobj = {};
thePrdsArna = "Eads";
if(arrUprefs["prfsSHOPuser"][0].scv) {
var upRefs = "r";
}

if(arrUprefs["prfsSHOPuser"][0].scp) {
var upPrixRef = "u";
}


strUCPID = "";
strUCPTtl = "";
strCatID = "";
strCatName = "";
strHtml = "";
strMLinks = "";
strImgDsct = "";

var len = thePrdsArr.length;

tstr = "";
iint = 0;

// product-grid
strHtml += "<div>";


tHdrArr = null;
tHdrArr = "";
tHdrArr = [];
tAHdFObj = {};
tAHdFObj["fld"] = "title";
tAHdFObj["nm"] = "Title";
tHdrArr.push(tAHdFObj);


tAHdFObj = {};
tAHdFObj["fld"] = "sellingStatus";
tAHdFObj["nm"] = "Price";
tHdrArr.push(tAHdFObj);
currACTblCnt = tHdrArr.length;

tmpACarr = null;
tmpACarr = "";
tmpACarr = [];
/*

currGSarr = null;
currGSarr = "";
currGSarr = [];
currGSarr = thePrdsArr;
tmpVitemArr = null;
tmpVitemArr = "";
tmpVitemArr = [];
tmpVitemArr = currGSarr;
*/
var len = thePrdsArr.length;
var iint = 0;
var pcid = 0;
tstr = "";
tShipToLocs = "";
tShipPrice = "";

while(iint < len) {

ts = thePrdsArr[iint];
console.log("getEAdsFullStr.title: " + ts.title);
tmptsprd = {}

atstr = "";
// atstr += "<tr>";

currFTclr = "menu-material-icons collection-item txtClrTtl";
if(currRcntFavsStr.indexOf(ts.title) != -1) {
currFTclr = "menu-material-icons collection-item txtClrRed";
}

tCResShpStr = "<div tid=\"dvCoFavBtn\">";
tCResShpStr += "<span class=\"cls_button cls_button-xxsmall bkgdClrWhite brdrNone txtClrDlg\" onclick=\"javascript:doRecentFavorite('" + ts.viewItemURL + "','" +  ts.title + "','noQvalue','" + quid + "','btnFavs" + iint + "');\"><i id=\"btnFavs" + iint + "\" class=\"" + currFTclr + "\" alt=\"favorite\" title=\"favorite\" value=\"favorite\">&#xe87d;</i></span>";
tCResShpStr += "</div>";





if(usrlang == "pt_pt") {

    ptTmpTttl = ts.title;
    pttLwrTtl = ptTmpTttl.toLowerCase();
    pttlwrES = JSSHOP.ads.getPrtsPrefCC("partES");
    pttlwrPT = JSSHOP.ads.getPrtsPrefCC("part");
    pttLwrTtl = pttLwrTtl.replace(pttlwrES, pttlwrPT);

    // tFlttl = ptTmpTttl.replace(JSSHOP.ads.getPrtsPrefCC("partES"), JSSHOP.ads.getPrtsPrefCC("part"));
    // replace all instances of pttlwrES with pttlwrPT case insensitive
    tFlttl = pttLwrTtl.replace(new RegExp(pttlwrES, 'gi'), pttlwrPT);
    console.log("ptTmpTttl: " + ptTmpTttl + " pttlwrES: " + pttlwrES + " pttlwrPT: " + pttlwrPT + " tFlttl: " + tFlttl);
} else {
    tFlttl = ts.title;
}
// atstr += "<td style=\"text-align: left;\"></td>";
atstr += "<div style=\"word-wrap: break-word;margin-top:0px;padding-right:9px;max-height:100%;\"  class=\"prodRowBox\">";
atstr += "<div><a href=\"" + ts.viewItemURL + "\" class=\"txtBold\">" + tFlttl + "</a>  <span class=\"txtSmall txtClrGrey\"></span></div>";
atstr += "<div style=\"word-wrap: break-word;\">";

atstr += "<div style=\"float:right;text-align:right;\">" + ts.sellingStatus + "<br>";
atstr += ts.country + "<br>" + tCResShpStr + "</div>";


atstr += "<a href=\"javascript:JSSHOP.ui.popAFImgUrl('" + ts.galleryURL + "')\"><img src=\"" + ts.galleryURL + "\" class=\"icnmbtn\" style=\"margin-right:8px;padding-right:6px;\"></a>";
atstr += "</div>";
atstr += "</div>";


if((pid == "aa-show-msearch") || (pid == "aa-show-psearch") || (pid == "aa-show-place")) { // do the swiper
    ptstr = "";
    ptstr += "<div class=\"swiper-slide\" style=\"width: 100%;\">";
    ptstr += atstr;

    ptstr += "</div>";
    tstr += ptstr;
} else {
// atstr += "</tr>";
tstr += atstr;
}

    iint++;
}
// tstr += "</div>";

newel = document.createElement('div');


// fraresp += "<div style=\"width: 90%;margin:0 auto;text-align: right\"> <a href=\"https://developer.ebay.com\"><img alt=\"logos\"  src=\"images/misc/developersprogrammember-vert.png\" width=\"108px\"></a></div>"

newStr = "";
// newStr += tmpDrpMdlDv;


if((pid == "aa-show-msearch") || (pid == "aa-show-psearch") || (pid == "aa-show-place")) { // do the swiper


    tmpFFstr = "<div  style=\"max-width:300px;margin: 0 auto;\"><div class=\"swiper\"><div class=\"swiper-wrapper\">" + tstr + "</div>";
    /*
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar"></div>
    */
    tmpFFstr += "<div class=\"swiper-pagination\"></div>";
    tmpFFstr += "<div class=\"swiper-button-prev txtSmall txtBold txtClrRed\"></div>";
    tmpFFstr += "<div class=\"swiper-button-next\"></div>";
    // tmpFFstr += "<div class=\"swiper-scrollbar\"></div>";

    // clearfix


    tmpFFstr += "</div>";
    tmpFFstr += "<div class=\"clearfix\"></div>";

    tmpFFstr += "<div class=\"slmtable txtClrHdr crsrPointer\" onclick=\"javascript:eindex('aa-show-esearch','pid=aa-show-esearch&eatype=ebay');\" style=\"text-align:center\">" + stxt[557] + "</div>";

newStr = tmpFFstr;
} else {
    if(thePrdsArr[0]) {
        strTHhtml = JSSHOP.shared.getNurTblHdrs(tHdrArr, "JSSHOP.ads.sortEAdsFullStr");
        }
        tmpFstr = JSSHOP.shared.getNuTblSortStr(strTHhtml, tstr,"txtBold txtClrBlack");

        tmpFFstr = "<div style=\"margin: 0 auto;max-width:600px;padding: 2px;margin-left: 2px;margin-right: 2px;\">" + tmpFstr + "</div>";

    fraresp = "<div class=\"brdrClrDlg\"><div style=\"padding:8px;margin:0 auto;text-align: left;float:left\"><a href=\"" + thePrdsCls + "\" class=\"txtClrHdr\">" + stxt[62] + " " + currCstmQstr + "...</a></div>";
fraresp += "<div style=\"width: 90%;margin:0 auto;text-align: right\"><a href=\"https://www.ebay.com\"><img  src=\"images/misc/ebay_logo_rgb.png\" width=\"108\"></a></div></div>";

tmpDrpMdlDv =  "<div class=\"rtable txtSmall brdrClrDlg\" style=\"margin:7px;\"><span class=\"txtSmall txtBold txtClrHdr txtDecorNone\"><a href=\"javascript:JSSHOP.shared.doModelsPip();\"  class=\"txtSmall txtClrGrey\">TheModelName</a></span> <a href=\"javascript:JSSHOP.shared.doPartsWords('6','md');\"  class=\"txtSmall txtClrGrey\">X</a></div></div>";

    tmpPGstr = " ";
    tmpPtotal = Math.round(currEbyPrdsArr.length / currProdsPPg);

if(currEbyPrdsArr.length > (tmpPtotal * currProdsPPg)) { tmpPtotal = tmpPtotal + 1; }
tmpPGstr = JSSHOP.shop.getDefaultPageNav(currPgIndex, tmpPtotal);
newStr += fraresp;
newStr += tmpFFstr;
newStr += "<div class=\"rtable pagination\" style=\"min-height:50px;\">" + tmpPGstr + "</div>";
}
// newStr += lfraresp;
console.log("getEAdsFullStr.newStr: " + newStr);
return newStr;


};



JSSHOP.ads.ebayFormat = function(item) {
    if (typeof item === 'object') {
      if (Array.isArray(item) && item.length === 1 && typeof item[0] !== 'object') item = item[0];
      else {
        var keys = Object.keys(item),
          i = 0,
          len = keys.length;
        for (; i < len; i++) {
          if (typeof item[keys[i]] === 'object') item[keys[i]] = JSSHOP.ads.ebayFormat(item[keys[i]]);
        }
      }
    }
    return item;
  };



JSSHOP.ads.doLEAdsOnPart = function(tVElem, tVresp, tVua) {
    try {
document.getElementById("fldChallArray").value = tVresp;
aresp = document.getElementById("fldChallArray").value;
console.log("doLEAdsOnPart.tVresp: "  + tVresp );

theVElem = "dvVidsOnPart";

jresp = JSON.parse(tVresp);
jrresp = JSSHOP.ads.ebayFormat( jresp );
tmpVitemArr = null;
tmpVitemArr = "";
tmpVitemArr = [];
tmpVitemArr = jrresp.findItemsAdvancedResponse[0].searchResult[0].item;
currEbyPrdsArr = null;
currEbyPrdsArr = [];
if(tmpVitemArr.length > 1) {

// while
while(incIntEA < tmpVitemArr.length) {
attssr = tmpVitemArr[incIntEA];
tmptsprd = {}
tmptsprd["title"] = attssr.title;
tmptsprd["viewItemURL"] = attssr.viewItemURL;
tmptsprd["galleryURL"] = attssr.galleryURL;
tmptsprd["location"] = attssr.location;
tmptsprd["country"] = attssr.country;
tmptsprd["sellingStatus"] = attssr.sellingStatus[0].currentPrice[0].__value__;
tmptsprd["shippingInfo"] = attssr.shippingInfo[0].shippingServiceCost[0].__value__;
currEbyPrdsArr[incIntEA] = tmptsprd;
incIntEA++;
}
}
JSSHOP.shop.loadCatChunk(1);
// tQPlnTstr = inpMakes.value + " " + inpModels.value + " " + inpParts.value;
// tmpArrQ = JSSHOP.ajax.doNuAjaxPipe(theVElem, "_p/rss/snpp.php?qv=" + tQPlnTstr, doVidsOnPart);
// doGsearchOnPart();
} catch(e) {
console.log("JSSHOP.ads.doLEAdsOnPart.error: " + e);
// JSSHOP.ads.getGsearchOnP("Search");
// JSSHOP.loadScript("https://cse.google.com/cse.js?cx=e5956f3d7f1bbd535", JSSHOP.ads.doGsearchOnPart,"js")
// tQPlnTstr = inpMakes.value + " " + inpModels.value + " " + inpParts.value;
// tmpArrQ = JSSHOP.ajax.doNuAjaxPipe(theVElem, "_p/rss/snpp.php?qv=" + tQPlnTstr, doVidsOnPart);
// doGsearchOnPart();
}
};

JSSHOP.ads.doEAdsOnPart = function(tVElem, tVresp, tVua) {
    incIntEA = 0;
document.getElementById("fldChallArray").value = tVresp;
aresp = document.getElementById("fldChallArray").value;
incIntEA = 0;
try {
} catch(e) {
    // ttCstmQstr = JSSHOP.ads.getPrtsPrfStr("thin");

    // ttAcstmQry = ttCstmQstr.replace("noQvalue","");
    // console.log("JSSHOP.ads.doEAdsOnPart.error: " + currCstmQstr + " :: " +  e);
   //  console.log("JSSHOP.ads.doEAdsOnPart.errorNewTry: " + ttAcstmQry);

    // tmpQArrQ = JSSHOP.ajax.doNuAjaxPipe(tVElem, "_p/rss/etest.php?nr=100    &qv=" + ttAcstmQry, JSSHOP.ads.doLEAdsOnPart);
    }
jresp = JSON.parse(aresp);
jrresp = JSSHOP.ads.ebayFormat( jresp );

console.log("ads.doEAdsOnPart: "  + JSON.stringify(jrresp) );
console.log("ads.doEAdsOnPart: "  + jrresp.findItemsAdvancedResponse[0].ack );
// console.log("ebayFormat.count: "  + jrresp.findItemsAdvancedResponse[0].searchResult[0].count );


console.log("ebayFormat.itemSearchURL: "  + jrresp.findItemsAdvancedResponse[0].itemSearchURL );
tmpVitemArr = null;
tmpVitemArr = "";
tmpVitemArr = [];
tmpVitemArr = jrresp.findItemsAdvancedResponse[0].searchResult[0].item;



       /* resultsDiv = document.getElementById("nresults");
tIMtglbObj = JSSHOP.ui.nTglBxOb();
tIMtglbObj["ttl"] = stxt[93]; // the toggle box title
tIMtglbObj["dvid"] = "dvEADS"; // the toggle box div id
tIMtglbObj["cntntFnc"] = "noQvalue";
tIMtglbObj["content"] = raresp; // the toggle that goes in above toggle div
tIMtglbObj["btn"] = "btnTglEADS" // the toogle btn id
tIMtglbObj["pref"] = "tglEADS"; // the toogle pref id saved in cookie
tIMtglbObj["tbtmpCB"] = "donada"; // null function as callback
tIMtglbObj["icn"] = "&#xe3ec;"; // the icon
tIMtglbObj["pnid"] = "noQvalue"; // the parent node, will just return text if noQvalue
tIMtglbObj["appnd"] = "y"; // the parent node, will just return text if noQvalue
// tBoxStr = JSSHOP.ui.doTglBox(tIMtglbObj);
// raresp = JSSHOP.ads.getEAdsFullStr(jrresp.findItemsAdvancedResponse[0].searchResult[0].item, jrresp.findItemsAdvancedResponse[0].itemSearchURL, null);

trrDiv = document.createElement("div");
*/
// trrDiv.innerHTML = raresp;
// console.log("doEAdsOnPart:raresp " + raresp);
// console.log("doEAdsOnPart: " + inpMakes.value + " " + inpModels.value + " " + inpParts.value);
 // document.getElementById("includedContent").innerHTML = tBoxStr;
 //document.getElementById("includedContent").appendChild(trrDiv);
 //
 if(tmpVitemArr != null){
    console.log("ebayFormat.itemid: "  + jrresp.findItemsAdvancedResponse[0].searchResult[0].item[0].itemId );

    console.log("doEAdsOnPart: have tmpVitemArr[0].itemId");

    currEbyPrdsArr = null;
    currEbyPrdsArr = [];
    // while
    while(incIntEA < tmpVitemArr.length) {
    attssr = tmpVitemArr[incIntEA];
    tmptsprd = {}
    tmptsprd["title"] = attssr.title;
    tmptsprd["viewItemURL"] = attssr.viewItemURL;
    tmptsprd["galleryURL"] = attssr.galleryURL;
    tmptsprd["location"] = attssr.location;
    tmptsprd["country"] = attssr.country;
    tmptsprd["sellingStatus"] = attssr.sellingStatus[0].currentPrice[0].__value__;
    tmptsprd["shippingInfo"] = attssr.shippingInfo[0].shippingServiceCost[0].__value__;
    currEbyPrdsArr[incIntEA] = tmptsprd;
    incIntEA++;
    }

JSSHOP.shop.loadCatChunk(1);
// JSSHOP.ads.doLocalShops(3, "RAND()", "partspt", "setShopsUp")

 } else {
    /**/
    ttCstmQstr = JSSHOP.ads.getPrtsPrfStr("thin");
    ttAcstmQry = ttCstmQstr.replace("noQvalue","");
    console.log("doEAdsOnPart no : tmpVitemArr: " + tmpVitemArr + " :: " + ttAcstmQry);

    tmpQArrQ = JSSHOP.ajax.doNuAjaxPipe(tVElem, "_p/rss/etest.php?nr=100    &qv=" + ttAcstmQry, JSSHOP.ads.doLEAdsOnPart);

    // JSSHOP.ads.setGboxUp("doGGAdsFill");
 }
// theVElem = "dvVidsOnPart";
// tQPlnTstr = inpMakes.value + " " + inpModels.value + " " + inpParts.value;
// doGsearchOnPart();
// tmpArrQ = JSSHOP.ajax.doNuAjaxPipe(theVElem, "_p/rss/snpp.php?qv=" + tQPlnTstr, doVidsOnPart);

};




JSSHOP.ads.setPrtsPrefCC = function(ppType, ppWrd) {
try {
    if(ppType == "mmk") {
        JSSHOP.ads.clearAllPrtsPrefCC();
    }
    if(arrUprefs["prfsSHOPuser"][0][ppType]) {
    if(arrUprefs["prfsSHOPuser"][0][ppType] == ppWrd) {
    tSasastr = "prfsSHOPuser." + ppType;
    } else {
    JSSHOP.user.setCkiePrfKV('prfsSHOPuser',ppType,ppWrd);
    }
    } else {
    JSSHOP.user.setCkiePrfKV('prfsSHOPuser',ppType,ppWrd);
    }
} catch(e) {
alert("setPrtsPrefCC: " + e);
}
};

JSSHOP.ads.getPrtsPrefCC = function(ppType) {
try {
    if(arrUprefs["prfsSHOPuser"][0][ppType]) {
    return arrUprefs["prfsSHOPuser"][0][ppType];
    } else {
    return "noQvalue";
    }
}   catch(e) {
alert("getPrtsPrefCC: " + e);
}
};

JSSHOP.ads.clearPrtsPrefCC = function(ppType) {
try {
    if(arrUprefs["prfsSHOPuser"][0][ppType]) {
    JSSHOP.user.setCkiePrfKV('prfsSHOPuser',ppType,"noQvalue");
    }
}   catch(e) {
alert("clearPrtsPrefCC: " + e);
}
};
JSSHOP.ads.clearAllPrtsPrefCC = function() {
try {
    JSSHOP.user.setCkiePrfKV('prfsSHOPuser',"mk","noQvalue");
    JSSHOP.user.setCkiePrfKV('prfsSHOPuser',"series","noQvalue");
    JSSHOP.user.setCkiePrfKV('prfsSHOPuser',"model","noQvalue");
    JSSHOP.user.setCkiePrfKV('prfsSHOPuser',"si","noQvalue");
    JSSHOP.user.setCkiePrfKV('prfsSHOPuser',"md","noQvalue");
    // JSSHOP.user.setCkiePrfKV('prfsSHOPuser',"part","noQvalue");
    // JSSHOP.user.setCkiePrfKV('prfsSHOPuser',"prti","noQvalue");
}
catch(e) {
alert("clearAllPrtsPrefCC: " + e);
}
};



JSSHOP.ads.getPrtsPrfStr = function(oldStr) {
try {
    tmpFullPstr = "";
     if(JSSHOP.ads.getPrtsPrefCC("mk") !== "noQvalue") {

    // if(arrUprefs["prfsSHOPuser"][0].mk) {
       //  tMakeId = arrUprefs["prfsSHOPuser"][0].mk;
       tMakeId = JSSHOP.ads.getPrtsPrefCC("mk");
// alert("mk: " +arrUprefs["prfsSHOPuser"][0].mk);
tMkPrfx = "m" + tMakeId;
tMkNme = objAllMakes[tMkPrfx].n;
    tmpFullPstr += tMkNme + " ";
    }
    if(oldStr == "thin") {
    isthin = "y";
    } else {
        if(JSSHOP.ads.getPrtsPrefCC("series") !== "noQvalue") {

   //  if((arrUprefs["prfsSHOPuser"][0].series) && (arrUprefs["prfsSHOPuser"][0].series != "null")) {
    // tmpFullPstr += arrUprefs["prfsSHOPuser"][0].series + " ";
    tmpFullPstr +=  JSSHOP.ads.getPrtsPrefCC("series") + " ";
    }
    }
    /*
    if(arrUprefs["prfsSHOPuser"][0].model) {
    tmpFullPstr += arrUprefs["prfsSHOPuser"][0].model + " ";
    }
    */
    if(JSSHOP.ads.getPrtsPrefCC("part") !== "noQvalue") {

    // if(arrUprefs["prfsSHOPuser"][0].part) {
        if(usrlang == "pt_pt") {
           //  if((arrUprefs["prfsSHOPuser"][0].partES) && (currPLMtype == "ebay")) {
            if((JSSHOP.ads.getPrtsPrefCC("partES") !== "noQvalue") && (currPLMtype == "ebay")) {
    tmpFullPstr += JSSHOP.ads.getPrtsPrefCC("partES") + " ";

    // tmpFullPstr += arrUprefs["prfsSHOPuser"][0].partES + " ";
            } else  {
                 tmpFullPstr += JSSHOP.ads.getPrtsPrefCC("part") + " ";
            }
        } else {
            tmpFullPstr += JSSHOP.ads.getPrtsPrefCC("part") + " ";
            // tmpFullPstr += arrUprefs["prfsSHOPuser"][0].part + " ";
        }
    }
    if(pid.indexOf("msearch") != -1) {
    // ampFullPstr =  "mecanico " + tmpFullPstr;
    // tmpFullPstr = ampFullPstr;
    }
    tmpFullPstr = tmpFullPstr.trim();
    tmpFullPstr = tmpFullPstr.replace(/[^a-zA-Z0-9\s\-]/g, '');
    tmpFullPstr = tmpFullPstr.replace(/\s+/g, " ");
    console.log("getPrtsPrfStr: " + tmpFullPstr);
    return tmpFullPstr.replace(/noQvalue/g, "");
    } catch(e) {
        alert("getPrtsPrfStr: " + e);
// return oldStr;
}
};









/*
* java and android funcitions
*/

JSSHOP.jndroid.doImgSter = function(theDDVal) {
    try {
        document.getElementById("fldChallArray").value = theDDVal;
        arzesp = document.getElementById("fldChallArray").value;
        console.log("app.doImgSter: " + arzesp);
   //  document.getElementById("includedContent").innerHTML = arzesp;
   // document.getElementById('dvPLogoImg').src = "data:image/jpg;base64, " + arzesp;
   JSSHOP.ajax.doNuAjaxPost();
   // post arzesp to server

    } catch(e) {
    alert("This only works with our android app and: " + e);
    }
    };

JSSHOP.jndroid.setMDcom = function(theCom, theVal) {
try {
app.getMDcom(theCom, theVal);
} catch(e) {
alert("This only works with our android app and: " + e);
}
};
JSSHOP.jndroid.openBrowser = function() {
try {
app.openBrowser();
} catch(e) {
alert("File Chooser only works with our android app and: " + e);
}
};
JSSHOP.jndroid.doFileChooser = function() {
try {
app.getFileChooser();
} catch(e) {
alert("File Chooser only works with our android app and: " + e);
}
};

JSSHOP.jndroid.doPagePopUp = function(theUrl, theHTML) {
	try {

tOldHref = document.location.href;
        if(tOldHref.indexOf("recamby.com") != -1) {
            tnewHref = "https://recamby.com/clean.html";

        } else {
            tnewHref = "https://titan/recamby/clean.html";
        }

	app.setPagePopUp(theUrl, theHTML);
} catch(e) {
alert(e);
JSSHOP.logJSerror(e, arguments, "JSSHOP.jndroid.doPagePopUp");
}
};

JSSHOP.jndroid.appRetImgUload = function(theImg, theUri) {
try {
JSSHOP.shared.setFrmFieldVal("qitem","i_vala",theImg);
JSSHOP.shared.setFrmFieldVal("qitem","i_valb",theImg);
document.getElementById("mod_i_vala").value = theImg;
document.getElementById("mod_i_valb").value = theUri;
tIUID = JSSHOP.shared.getFrmFieldVal("qitem","_id",0);
tImgstr = "data:image/png;base64, " + theImg;
doItemEdit();
} catch(e) {
alert(e);
}
};

JSSHOP.jndroid.doWebShopUrl = function() {
try {
if(c_web.value) {
tCWebVal = c_web.value;
if(tCWebVal.indexOf("http") != -1) {
document.location.href = tCWebVal;
} else {
alert("Invalid Web Url in your shop settings. Url: " + tCWebVal);
}
} else {
alert("Invalid Web Url in your shop settings. Url:");
}
} catch(e) {
alert("Cannot Load: " + e);
}
};

JSSHOP.jndroid.doCutOuts = function() {
try {
app.getCutOuts();
} catch(e) {
alert("Camera functions only work with our android app and: " + e);
}
};



// in the wild functions that need to be incorporated


var loadCssScript = function(path, callback) {
		// alert(loaded_scripts.length);
        n = path.lastIndexOf("/");
        q = path.lastIndexOf("?");

            var scr = document.createElement("link")
            scr.setAttribute("rel", "stylesheet")
            scr.setAttribute("type", "text/css")
            scr.href = path;

        var done = false;
        scr.onload = handleCssLoad;
        scr.onreadystatechange = handleCssReadyStateChange;
        scr.onerror = handleCssError;
        if (n >= 0) {
            if (q >= 0) {
                tid = path.substring(n + 1, q);
            } else {
                tid = path.substring(n + 1);
            }
            scr.id = tid;
        }
        document.getElementsByTagName("head")[0].appendChild(scr);

        function handleCssLoad() {
            if (!done) {
                done = true;
                callback(path, "ok");
            }
        }

        function handleCssReadyStateChange() {
            var state;
            if (!done) {
                state = scr.readyState;
                if (state === "complete") {
                    handleLoad();
                }
            }
        }

        function handleCssError() {
            if (!done) {
                done = true;
                callback(path, "error");
            }
        }

};

var checkCssLoader = function(thePath, theMessage) {
 ncc = "aa";
};



function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
return array;
}

// create a function to check for duplicate ids in current page
function checkForDuplicateIds() {
    var ids = [];
    var elements = document.getElementsByTagName("*");
    for (var i = 0; i < elements.length; i++) {
        if ((ids.indexOf(elements[i].id) >= 0) && (elements[i].id != "")) {
            console.log("name: " + elements[i].href + " id: " + elements[i].id)
            console.log("Duplicate id " + elements[i].id + " found at index " + i);
        } else {
            ids.push(elements[i].id);
        }
    }
}






function doFnshGIErr(dfgA, dfgB, dfgC) {
    console.log("doFnshGIErr: " + dfgA + " :: " + dfgB + " :: " + JSON.stringify(dfgC));
}
function doGglImgLdErr(tCoID) {
    currGImgEint++;
    try {
        if(currGImgEint < 3) {
             procNuUIitem('qco', 'c_logoimg',tCoID,'noQvalue','doFnshGIErr');
        }
    } catch(e) {
        console.log("doGglImgLdErr: " + e);
    }
}


// DEMO DEMO stuff to delete later



var doTUserLgin = function(tlouid) {
  // delete uid cookie
JSSHOP.cookies.deleteCookie('quid','','');
JSSHOP.cookies.deleteCookie('cuid','','');
JSSHOP.cookies.deleteCookie('cartID','','');
document.location.href = "index.html?pid=login&tq=" + tlouid + "&tcid=" + cid;
}

var getNuIItmsLst = function(tPrpIarr) {
    // Group users by country
    var countryMap = {};
    tPrpIarr.forEach(function(user) {
        var country = user.u_country || "Unknown";
        if(country == "Unknown") {
            country = "Unknown Location";
        } else {
        if (!countryMap[country]) countryMap[country] = [];
        countryMap[country].push(user);
        }
    });
    var html = "";

    Object.keys(countryMap).forEach(function(country) {
        html += '<div class="country-block" style="margin-bottom:24px;">';
        html += '<h3 class="txtBold txtCLrHdr">' + country + ' - Fake Demo Users</h3>';
        html += '<div class="users-row">';
        countryMap[country].forEach(function(user) {
            html += '<div class="user-card crsrPointer" style="float:left;margin:8px 16px 8px 0;text-align:center;min-width:100px;max-width:100px;max-height:80px;min-height:80px">';
            html += '<img alt="Profile" src="images/user/s_thumb' + user.u_icon + '" class="icnRndDSmUser crsrPointer" style="display:block;margin:0 auto;"  onclick="javascript:doTUserLgin(' + user._id + ');">';
            html += '<div class="txtSmall txtCLrHdr crsrPointer" style="margin-top:6px;" onclick="javascript:doTUserLgin(' + user._id + ');">' + user.u_fullname + '</div>';
            // eindex show user link with profile title
            html += '<div class="txtSmall txtClrGrey" style="margin-top:6px;"><a href="javascript:doTUserLgin(' + user._id + ')">Demo</a></div>';
            html += '</div>';
        });
        html += '<div style="clear:both"></div>';
        html += '</div></div>';
    });

    return html;
}

var doTestUList = function(atudiv,rfb,c) {
    console.log("doAUsersList: " + rfb);
    if(rfb.indexOf("_id") != -1) {
  tmpIUsrsLArr = "";
  tmpIUsrsLArr = [];
  tmpIUsrsLArr = JSON.parse(rfb);

  /*
  stxt[826] = "This software is in beta-demo. To explore the site, you can use one of the test users below to login.";
stxt[827] = "You can use the following test users-admin to explore the latest-greatest features. You can edit these users, properties, updates. Feel free to experiment. break things. We reset the database every hour.";
stxt[828] = "Click on a user to login as that user-admin.";

tSHowTetsUTtl = "<h4 class=\"text-center text-secondary\">" + stxt[826] + "</h4><br></br><span class=\"txtSmall txtClrGrey\">" + stxt[827] + "</span>";
tSHowTetsUTtl += "<br><br>" + stxt[828] + "<br><br>";
*/
// make the above tSHowTetsUTtl (uses the stxt[826.. more facebook like and use some material icons

         tuhtml = '<div class="slmtable bkgdClrWhite bottom-shadow" style="padding:16px;margin-bottom:24px;">';

tSHowTetsUTtl = "<div class=\"txtCenter txtClrGrey txtSmall\" style=\"margin-bottom:16px;\">";
// tSHowTetsUTtl += "<div style=\"font-size:48px;line-height:48px;\"><i class=\"material-icons\">&#xe7fd;</i></div>";
tSHowTetsUTtl += stxt[826] + "<br></br>";
tSHowTetsUTtl += stxt[827] + "<br></br>";
tSHowTetsUTtl += "<b>" + stxt[828] + "</b><br></br>";
tSHowTetsUTtl += "</div>";
tuhtml += tSHowTetsUTtl;
tFllUIstr =  getNuIItmsLst(tmpIUsrsLArr);
tuhtml += tFllUIstr;

    tuhtml += '</div>';
// tDVtestUsers = document.createElement("div");
// tDVtestUsers.innerHTML = tFllUIstr;
// document.getElementById("includedContent").insertBefore(tDVtestUsers, document.getElementById("includedContent").firstChild);
document.getElementById(atudiv).innerHTML = tuhtml;
} else {
        alert("doAUsersList: " + rfb);
        // document.getElementById("divQitems").innerHTML = stxt[508];
    }

  };

function getTestUsers(tTUelem) {
   tmpDOs = {};
 tmpDOs["ws"] = "where _id > ? and u_rtype=?";
 tmpDOs["wa"] = [0, 5];

 oi = getNuDBFnvp("quser",5,null,tmpDOs);
 currRQtable = "quser";
 currRQstr = oi["rq"];
 // alert("edit users currRQstr: " + currRQstr);
 doQComm(oi["rq"], tTUelem, "doTestUList");
}






    // video recording stuff to be incorporated n JSShop.ads for map recording and also for general recording of fly to animations and other things on the site.



    async function toggleMapRecording(options = {}) {
        // Support both btnAEPRecord and the new map record button
        var btn = document.getElementById("btnAEPRecord");
        var recordBtn = document.querySelector('.incasa-map-record-toggle-btn');
        var elementToRecord = document.getElementById("dvDemoView");

        // Determine which button is used for toggling
        var isRecording = false;
        if (btn && btn.value) {
            isRecording = btn.value !== "Record Video";
        } else if (recordBtn) {
            isRecording = recordBtn.classList.contains('recording');
        }

        // Extract options
        const { onPermissionGranted, onError, stop, mapDivId, onComplete, restoreAllControls } = options;

        // Utility to enable/disable all inline map property tabs (Preview, Markers, Settings)
        function setInlineMapTabsEnabled(enabled) {
            var tabLinks = document.querySelectorAll('#dvInlinePTypeTabs .nav-link');
            for (var i = 0; i < tabLinks.length; i++) {
                if (enabled) {
                    tabLinks[i].style.pointerEvents = '';
                    tabLinks[i].style.opacity = '';
                } else {
                    tabLinks[i].style.pointerEvents = 'none';
                    tabLinks[i].style.opacity = '0.65';
                }
            }
        }

        // Toggle recording state
        if (!isRecording && !stop) {
            setInlineMapTabsEnabled(false); // Disable tabs when recording starts
            try {
                console.log('[RECORD] Requesting recording permission...');
                const stream = await navigator.mediaDevices.getDisplayMedia({
                    video: { displaySurface: "browser" },
                    audio: false,
                    selfBrowserSurface: "include",
                    preferCurrentTab: true
                });
                console.log('[RECORD] Permission granted, starting recording...');
                // Attempt to crop to the specific element using Region Capture API
                const [track] = stream.getVideoTracks();
                if (window.CropTarget && track.cropTo && elementToRecord) {
                    try {
                        const cropTarget = await CropTarget.fromElement(elementToRecord);
                        await track.cropTo(cropTarget);
                    } catch (err) {
                        console.warn("Region Capture failed, recording full tab/screen: ", err);
                    }
                }
                nuRecordedChunks = [];
                nuMediaRecorder = new MediaRecorder(stream, { mimeType: 'video/webm; codecs=vp9' });
                nuMediaRecorder.ondataavailable = function(e) {
                    if (e.data.size > 0) {
                        nuRecordedChunks.push(e.data);
                    }
                };
                nuMediaRecorder.onstop = function() {
                    setInlineMapTabsEnabled(true); // Enable tabs when recording stops
                    console.log('[RECORD] Recording stopped.');
                    const blob = new Blob(nuRecordedChunks, {
                        type: "video/webm"
                    });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    document.body.appendChild(a);
                    a.style = "display: none";
                    a.href = url;
                    a.download = "property-3d-view.webm";
                    a.click();
                    window.URL.revokeObjectURL(url);
                    // Reset button state if stopped externally (e.g. via browser UI)
                    if(btn) {
                        btn.value = "Record Video";
                        btn.style.backgroundColor = "";
                    }
                    if(recordBtn) {
                        recordBtn.classList.remove('recording');
                        recordBtn.innerHTML = '<i class="material-icons txtClrHdr" style="font-size:21px;line-height:34px;">&#xe061;</i>';
                        recordBtn.title = 'Record Fly To Animation';
                    }
                    // Call onComplete or restoreAllControls if provided
                    if (typeof onComplete === 'function') onComplete();
                    if (typeof restoreAllControls === 'function') restoreAllControls();
                };
                // Handle case where user stops sharing via browser UI
                stream.getVideoTracks()[0].onended = function() {
                    if(nuMediaRecorder.state !== 'inactive') {
                        nuMediaRecorder.stop();
                    }
                };
                nuMediaRecorder.start();
                //
                console.log('[RECORD] MediaRecorder started.');
                if(btn) {
                    btn.value = "Stop Recording";
                    btn.style.backgroundColor = "#ff0000";
                }
                if(recordBtn) {
                    recordBtn.classList.add('recording');
                    recordBtn.innerHTML = '<i class="material-icons txtClrRed" style="font-size:21px;line-height:34px;">&#xe047;</i>';
                    recordBtn.title = 'Stop Recording';
                }
                // If onPermissionGranted callback is provided, call it (for map animation)
                if (typeof onPermissionGranted === 'function') {
                    onPermissionGranted();
                } else if (typeof JSSHOP !== 'undefined' && JSSHOP.ads && typeof JSSHOP.ads.recordNuMapEffect === 'function' && mapDivId) {
                    // Fallback: call recordNuMapEffect directly if mapDivId is provided
                    JSSHOP.ads.recordNuMapEffect(mapDivId, function() {
                        // Stop recording after animation ends
                        window.toggleMapRecording({ stop: true, restoreAllControls });
                    });
                }
            } catch (err) {
                setInlineMapTabsEnabled(true); // Enable tabs if error starting recording
                console.error("[RECORD] Error starting recording: " + err);
                alert("Could not start recording: " + err.message);
                // Restore all controls if available
                if (typeof onError === 'function') onError();
                if (typeof restoreAllControls === 'function') restoreAllControls();
                if (typeof window.restoreAllMapControls === 'function') window.restoreAllMapControls();
            }
        } else if (isRecording || stop) {
            setInlineMapTabsEnabled(true); // Enable tabs when recording stops
            // Stop recording
            if(nuMediaRecorder && nuMediaRecorder.state !== "inactive") {
                nuMediaRecorder.stop();
                // Stop all tracks
                nuMediaRecorder.stream.getTracks().forEach(track => track.stop());
            }
            if(btn) {
                btn.value = "Record Video";
                btn.style.backgroundColor = "";
            }
            if(recordBtn) {
                recordBtn.classList.remove('recording');
                recordBtn.innerHTML = '<i class="material-icons txtClrHdr" style="font-size:21px;line-height:34px;">&#xe061;</i>';
                recordBtn.title = 'Record Fly To Animation';
            }
            // Call onComplete or restoreAllControls if provided
            if (typeof onComplete === 'function') onComplete();
            if (typeof restoreAllControls === 'function') restoreAllControls();
        }
    }









/*
// stuff to delete



JSSHOP.shared.doYearsPop = function() {
tPYS = "<div  class=\"collection\">";
for (i = 0; i < arrAllYears.length; i++) {
tJSMstr = "currPUrlObj.y= '" +  arrAllYears[i] + "';JSSHOP.ui.closeLbox();"
tJSMstr += "JSSHOP.shared.doPartsWords(50,'noQvalue');";
tPYS += "<div class=\"collection-item crsrPointer\" onclick=\"javascript:" + tJSMstr + "\">" + arrAllYears[i] + "</div>";
// tPYS += "<div>" + arrAllYears[i] + "</div>";
}
tPYS += "</div>";
// alert(tPYS);
JSSHOP.ui.popAndFillLbox(tPYS);
};


JSSHOP.shared.doMakesPop = function(tMCBBstr) {
// tPYS = btnClosePop;
tPYS = "";
trArr = [];
tPYS += "<div class=\"txtBold txtClrHdr\">";
for (i = 0; i < 5; i++) {
    tLpdIDstr = currPMakesArr[Math.floor(Math.random() * currPMakesArr.length)];
    tLpdSplit = tLpdIDstr.split(":");
    tLpdID = tLpdSplit[0];
    tLpdName = tLpdSplit[1];
    tLpdmgMStr = imgPLicon.src = "images/mlogos/" + tLpdName.toLowerCase().replace(" ", "-") + "-logo.png";
 tPYS += "<img src=\"" + tLpdmgMStr + "\" style=\"max-width:30px;max-height:30px;\"></img>";
trArr.push();
}
tPYS += "</div>";

tPYS += "<div class=\"txtBold txtClrHdr\">" + stxt[82] + " " + stxt[102] + ":</div>";

console.log("doMakesPop.trArr: " + JSON.stringify(trArr));


tPYS += "<div class=\"collection\">";

tMkObj = objAllMakes;
for(var gkey in tMkObj) {
		if(tMkObj[gkey].n) {
		 TMPnOBJ = tMkObj[gkey];
		 tSSv = TMPnOBJ.n;
		 tSSI =  TMPnOBJ.id;
 		  tPYS += "<div class=\"collection-item crsrPointer\" onclick=\"javascript:JSSHOP.shared.setMakeStuff('" + tSSI + "','" + tSSv + "','" + tMCBBstr + "');JSSHOP.ads.clearAllPrtsPrefCC();JSSHOP.ads.setPrtsPrefCC('mk','" + tSSI + "');\">" + tSSv + "</div>";
		  }
}
tPYS += "</div>";
// alert(tPYS);
JSSHOP.ui.popAndFillLbox(tPYS);
};



JSSHOP.shared.doModelsLoad = function(ttPPInp, ttPPObj, toPPbju) {
currCModelsObj = JSON.parse(ttPPObj);
};



JSSHOP.shared.doModelsPip = function() {
tSMSMID = currPUrlObj["mk"];
ttCMOS = JSON.stringify(currCModelsObj);
if(ttCMOS.indexOf("id") !== -1) {
if(currCModelsObj.pi == tSMSMID) {

console.log("doModelsPip is same : " + "currCModelsObj.id");
JSSHOP.shared.doModelsPop("inpModels", JSON.stringify(currCModelsObj), "nada");
} else {
console.log("doModelsPip is diff : " + "currCModelsObj.id");
JSSHOP.ajax.doNuAjaxPipe("inpModels", "misc/m" + tSMSMID + ".txt", JSSHOP.shared.doModelsPop);
}
} else {
console.log("doModelsPip : " + "currCModelsObj.no-id");
JSSHOP.ajax.doNuAjaxPipe("inpModels", "misc/m" + tSMSMID + ".txt", JSSHOP.shared.doModelsPop);
}
};




JSSHOP.shared.doModelsPop = function(ttPPInp, ttPPObj, toPPbju) {
// alert("doModelsPop : " + ttPPObj);
console.log("doModelsPop : " + ttPPObj);
tLastN = "";
tTName = "";
tMdlName = "";
currtMSstrS = "";
currSeriesArr = "";
currSeriesArr = [];
currCModelsObj = JSON.parse(ttPPObj);
for(var gkey in currCModelsObj) {
TMPnOBJ = currCModelsObj[gkey];
if(TMPnOBJ.n) {
tSSv = TMPnOBJ.n;
if(tSSv.indexOf(" ") != -1) {

tSpS = tSSv.split(" ");
tTName = tSpS[0];
tMdlName = tSSv.substring(tSSv.indexOf(" "), tSSv.length);
// replace all special chars except . and -  and space in tMdlName
tMdlName = tMdlName.replace(/[^a-zA-Z0-9-.\s]/g, "");


} else {
tTName = tSSv;
tMdlName = TMPnOBJ.yf + " " + TMPnOBJ.yt;
}
gkey = TMPnOBJ.id;
tSSI =  TMPnOBJ.id;
tprtyN = tSSv;
tsiN = tSSv.replace("(","[");
tsiN = tsiN.replace(")","]");
if(tSSv.indexOf("(") != -1) {
tprtyN = tSSv.replace("(","&nbsp;&nbsp;&nbsp;<span class=\"txtClrGrey\">[&nbsp;");
}
if(tprtyN.indexOf(")") != -1) {
tprtyN = tprtyN.replace(")","&nbsp;]</span>");
}
tInpStr = TMPnOBJ.id + "::" + TMPnOBJ.n;
// tJSMstr = "inpImpModels.value = '" +  tInpStr + "';inpModels.value='" + tsiN + "';inpModels.focus();JSSHOP.ui.closeLbox();";
tJSMstr = "currPUrlObj.si = '" +  tSSI + "';currPUrlObj.series='" + tTName + "';";
tJSMstr += "currPUrlObj.md = '" +  tSSI + "';currPUrlObj.model='" + tMdlName + "';";
tJSMstr += "JSSHOP.ui.closeLbox();";



tJSMstr += "JSSHOP.shared.doPartsWords(50,'noQvalue');";
tJSMstr += "inpTParts.focus();scrollToElement('dvHdr');window.scrollTo(0,0);";
tJSMstr += "JSSHOP.ads.setPrtsPrefCC('series','" + tTName + "');";
tJSMstr += "JSSHOP.ads.setPrtsPrefCC('md','" + tSSI + "');";
tJSMstr += "JSSHOP.ads.setPrtsPrefCC('model','" + tMdlName + "');";
tJSMstr += "JSSHOP.ads.setPrtsPrefCC('si','" + tSSI + "');";


if(tTName == tLastN) {
    currtMSstrS += "<div onclick=\"javascript:" + tJSMstr + "\" class=\"collection-item crsrPointer\">" + tprtyN + "<br> <span class=\"txtSmall txtBold txtClrDlg\">" + TMPnOBJ.yf + "  -&gt; ";
    if(TMPnOBJ.yt == "0") {
    } else {
        currSeriesArr.push(tTName);
    currtMSstrS += " " + TMPnOBJ.yt;
    }
    currtMSstrS += "</span></div>"


    } else {
    currtMSstrS += "</div>"

    tJSstr = "JSSHOP.ui.tglPrefModule('dvTglMD" + gkey + "','dvMD" + gkey + "','tglMD" + gkey + "');";
    currtMSstrS += "<div class=\"crsrPointer\" onclick=\"javascript:" + tJSstr + "\"><table style=\"width: 95%\" class=\"collection\">";
    currtMSstrS += "<tr><td><strong>&nbsp;" + tTName + "</strong></td>";
    currtMSstrS += "<td><div id=\"dvTglMD" + gkey + "\" class=\"icnbtn crsrPointer\" nowrap=\"nowrap\" style=\"float:right\">";
    currtMSstrS += "<i class=\"small-material-icons\" title=\"expand_more\">&#xe5cf;</i></div></td></tr></table></div>";


    if(currPUrlObj.part) {
    tJSMstr += "JSSHOP.shared.doPartsSearch('inpTParts');";
    }
    currtMSstrS += "<div style=\"display:none;visibility:hidden\" class=\"collection\" id=\'dvMD" + gkey + "'\">";
    currtMSstrS += "<div onclick=\"javascript:" + tJSMstr + "\" class=\"collection-item crsrPointer\">" + tprtyN + "<br> <span class=\"txtSmall txtBold txtClrDlg\">" + TMPnOBJ.yf + "  -&gt; ";
    if(TMPnOBJ.yt == "0") {
    } else {
    currtMSstrS += " " + TMPnOBJ.yt;
    }

    currtMSstrS += "</span></div>";

    }
    tLastN = tTName;
    }
    }


    tPYS = "<br><div class=\"bkgdClrNrml\"  style=\"text-align:center;margin:6px;\">";
    // create a div string with the current make name
    tPYS += "<div class=\"txtSMall txtBold txtClrTtl\">" + currPUrlObj.make + "</div>";
    tPYS += "<div style=\"float:left\"><img src=\"images/mlogos/" + currPUrlObj.make.toLowerCase().replace(" ", "-") + "-logo.png\" style=\"max-width:30px;max-height:30px;\"></img></div>";

    tPYS += "<div class=\"txtBold txtClrHdr\">" + stxt[82] + " " + stxt[103] + ":</div>";

    for (i = 0; i < 3; i++) {
        tLpdIDstr = currSeriesArr[Math.floor(Math.random() * currSeriesArr.length)];

      tPYS += " <span class=\"txtSmall txtClrTtl\">" + tLpdIDstr + "</span> ";

    }
    tPYS += "...";

    // create a div string with style float right with the curren make image logo

    //
    tPYS += "</div>";
    JSSHOP.ui.popAndFillLbox(tPYS + currtMSstrS);

    // alert(currtMSstrS);
    };

    function doNill() {
        tNill = "nill";
    // alert("doNill");
    }

    JSSHOP.shared.doPartsPop = function() {
    tCatArrStr = "";

    tCatArrStr += "<div class=\"crsrPointer\"><table style=\"width: 100%\" class=\"bigtable bkgdClrNrml brdrClrHdr txtBold txtBig\">";
    tCatArrStr += "<tr><td><strong>&nbsp;" + stxt[512] + "</strong></td></tr></table></div>";




    tEPobj = currPartsObj;
    tPPobj = tEPobj.pcats;





    for(var gkey in tPPobj) {
    // tCatArrStr +=  "<br>";
    tDynMunuObj = null;
    tDynMunuObj = "";
    tDynMunuObj = {};
    tDynMunuObj._id = gkey;
    tDynMunuObj.cat_rtype = "5";
    tDynMunuObj.cat_uid = "1";
    tDynMunuObj.cat_coid = "0";
    tDynMunuObj.cat_pid = "0";
    tDynMunuObj.cat_title = tPPobj[gkey];
    tDynMunuObj.cat_desc = tPPobj[gkey];
    tDynMunuObj.cat_vala = "1";
    tDynMunuObj.cat_valb = "10001";
    tDynMunuObj.cat_dadded = "10001";
    currDynMenuArr.push(tDynMunuObj);
    currPPrtCatArr.push(gkey + ":" + tPPobj[gkey]);
    tJSstr = "JSSHOP.ui.tglPrefModule('dvTglPC" + gkey + "','dvPC" + gkey + "','tglPrts" + gkey + "');";

    tCatArrStr += "<div  style=\"word-wrap:break-word;word-break: break-word;\" class=\"crsrPointer\" onclick=\"javascript:" + tJSstr + "\"><table  class=\"collection\"  cellpadding=\"0px\" cellspacing=\"0px\">";
    tCatArrStr += "<tr><td><img src=\"images/misc/" + gkey + ".gif\" class=\"icnsmlbtn\"></td>";
    tCatArrStr += "<td class=\"txtBold\" style=\"word-wrap:break-word;word-break: break-word;text-align: left;width:100%\">&nbsp;" + tPPobj[gkey] + "</td>";

    tCatArrStr += "<td><div id=\"dvTglPC" + gkey + "\" class=\"icnbtn crsrPointer\"  style=\"float:right\">";
    tCatArrStr += "<i class=\"small-material-icons\" title=\"expand_more \">&#xe5cf;</i></div></td></tr></table></div>";

    // javascript:JSSHOP.ui.tglPrefModule('dvTglPCpc1','dvPCpc1','tglPrtspc1')





    if(tEPobj.pprts[gkey].pts){
    tCatArrStr += "<div style=\"display:none;visibility:hidden;word-wrap:break-word;word-break: break-word;\" class=\"collection\" id=\"dvPC" + gkey + "\">";




    tCatPtsobj = tEPobj.pprts[gkey].pts;
    for(var pcgkey in tCatPtsobj) {

    // currCstmQstr += " " + tCatPtsobj[pcgkey].n;
    tmpFPSstr = "&part=" + tCatPtsobj[pcgkey].n + "&prti=" + tCatPtsobj[pcgkey].pi + "&q=" + encodeURIComponent(currCstmQstr + " " + tCatPtsobj[pcgkey].n);

    // tUtoL = tCatUStr + "&part=" + tCatPtsobj[pcgkey].n + "&prti=" + tCatPtsobj[pcgkey].pi + "&pid=aa-show-part&q=" + currCstmQstr + " " + encodeURIComponent(tCatPtsobj[pcgkey].n);
    tCatArrStr += "<div  style=\"word-wrap:break-word;word-break: break-word;\"><a  class=\"collection-item\" href=\"javascript:document.location.href=JSSHOP.shared.doPartDynL('" + tCatPtsobj[pcgkey].id + "','" + tCatPtsobj[pcgkey].n + "');\" class=\"collection-item crsrPointer\">" + tCatPtsobj[pcgkey].id + " : " + tCatPtsobj[pcgkey].n + "</a></div>";
    // tCatArrStr += "<div  style=\"word-wrap:break-word;word-break: break-word;\" onclick=\"javascript:eindex('aa-show-part','" + tUtoL + "');\" class=\"collection-item crsrPointer\">" + tCatPtsobj[pcgkey].id + " : " + tCatPtsobj[pcgkey].n + "</div>";
    }
    }
    tCatArrStr += "</div>";
    }



    JSSHOP.ui.popAndFillLbox(tCatArrStr);
    };




    JSSHOP.ui.getBSdropDstr = function(tBBSSObj) {
        tDDelem = document.getElementById(tBBSSObj.fld);
        tBSDDLayStr = "<div class=\"form-group row\">";
        tBSDDLayStr += "<ul class=\"nav nav-pills\">";
        tBSDDLayStr += "<li class=\"nav-item dropdown\">";
        tBSDDLayStr += "<table><tr><td><a class=\"nav-link dropdown-toggle txtSmall txtClrDlg\" data-bs-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-expanded=\"false\">" + tBBSSObj.lbl + "</a>";
        tBSDDLayStr += "<ul class=\"dropdown-menu brdrClrHdr\">";
        for (var key in tBBSSObj.kvpObj) {
            tBSDDLayStr += "<li><a class=\"dropdown-item\"   href=\"javascript:" + tBBSSObj.cb + "('" + tBBSSObj.fld + "', '" + key + "','" + tBBSSObj.kvpObj[key] +  "');\">" + tBBSSObj.kvpObj[key] + "</a></li>";
        }
        tBSDDLayStr += "</ul></td>";
        if(tBBSSObj.horvert == "vertical") {
        tBSDDLayStr += "</tr><tr>";
        }
        tBSDDLayStr += "<td><div id=\"tdDD" + tBBSSObj.fld + "\" class=\"slmtable bkgdClrNrml txtBold txtClrNrml\">";
        tBSDDLayStr += tBBSSObj.kvpObj[tDDelem.value];
        tBSDDLayStr += "</div></td>";
        tBSDDLayStr += "</tr></table>";
        tBSDDLayStr += "</li>";
        tBSDDLayStr += "</ul>";
        tBSDDLayStr += "</div>";
        return tBSDDLayStr;
        };


  JSSHOP.ui.getBSdropDstr = function(theElid, theDDlabel, theDDobj, theDDcb) {
    tDDelem = document.getElementById(theElid);



    tBSDDLayStr = "<div class=\"form-group row\">";
    tBSDDLayStr += "<ul class=\"nav nav-pills\">";
    tBSDDLayStr += "<li class=\"nav-item dropdown\">";
    tBSDDLayStr += "<table><tr><td><a class=\"nav-link dropdown-toggle txtSmall txtClrDlg\" data-bs-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-expanded=\"false\">" + theDDlabel + "</a>";
    tBSDDLayStr += "<ul class=\"dropdown-menu brdrClrHdr\">";
    for (var key in theDDobj) {
        tBSDDLayStr += "<li><a class=\"dropdown-item\"   href=\"javascript:" + theDDcb + "('" + theElid + "', '" + key + "','" + theDDobj[key] +  "');\">" + theDDobj[key] + "</a></li>";
    }

    tBSDDLayStr += "</ul></td></tr>";
    tBSDDLayStr += "<tr><td><div id=\"tdDD" + theElid + "\" class=\"slmtable bkgdClrNrml txtBold txtClrNrml\">";
    tBSDDLayStr += theDDobj[tDDelem.value];
    tBSDDLayStr += "</div></td>";
    tBSDDLayStr += "</tr></table>";
    tBSDDLayStr += "</li>";
    tBSDDLayStr += "</ul>";
    tBSDDLayStr += "</div>";
    return tBSDDLayStr;
  };

// Function to handle contact method selection
function handleContactMethodChange(checkbox) {
    var telInput = document.getElementById('tmp_msg_fromsg_tel');
    var contactDiv = document.getElementById('dvContactMethods');
    if(telInput && contactDiv) {
        // Get all checkboxes in the contact methods div
        var checkboxes = contactDiv.querySelectorAll('input[type="checkbox"][name="contact_method"]');

        // If this checkbox is being checked, uncheck others (radio button behavior)
        if(checkbox.checked) {
            checkboxes.forEach(function(cb) {
                if(cb !== checkbox) {
                    cb.checked = false;
                }
            });
        }

        // Store selected method (you can modify this to suit your needs)
        var selectedMethod = checkbox.checked ? checkbox.value : '';
        telInput.setAttribute('data-contact-method', selectedMethod);

        // You can add additional logic here based on the selected method
        console.log('Selected contact method: ' + selectedMethod + ' for phone: ' + telInput.value);

        // For example, you could trigger different actions:
        if(selectedMethod) {
            switch(selectedMethod) {
                case 'whatsapp':
                    // Handle WhatsApp action
                    break;
                case 'sms':
                    // Handle SMS action
                    break;
                case 'call':
                    // Handle Call action
                    break;
            }
        }
    }
}



   */

// ── Shared Comments System ────────────────────────────────────────────────────

var _cmtProdId   = null;
var _cmtProdType = "prod";
var _cmtOwnerUid = null;

var setCmtsDiv = function(a, theResp, c) {
    var tCmtsDv = document.getElementById("dvComments");
    if(!tCmtsDv) { return; }

    var tCmtListDv = document.getElementById("dvCmtList");
    if(!tCmtListDv) { return; }

    var tCmtArr = null;
    try { tCmtArr = JSON.parse(theResp); } catch(e) { tCmtArr = []; }

    var tCmtLen = tCmtArr.length;
    var tCmtStr = "";

    if(tCmtLen === 0) {
        tCmtStr = "<div class=\"txtSmall txtClrGrey\" style=\"padding:10px;\">" + stxt[1034] + "</div>";
    } else {
        var iCmt = 0;
        while(iCmt < tCmtLen) {
            var tCmt = tCmtArr[iCmt];
            var tCmtDate = new Date(tCmt.cmts_dadded * 1000);
            var tCmtDStr = ("0" + tCmtDate.getDate()).slice(-2) + "/" +
                           ("0" + (tCmtDate.getMonth() + 1)).slice(-2) + " " +
                           ("0" + tCmtDate.getHours()).slice(-2) + ":" +
                           ("0" + tCmtDate.getMinutes()).slice(-2);
            var tCmtFromNm = tCmt.cmts_from || "Anonymous";
            var tCmtIcon = tCmt.cmts_from_icon;
            var tCmtPriv = (tCmt.cmts_privacy === "prv") ? "<span class=\"txtSmall txtClrRed\" style=\"margin-left:6px;\">&#xe897; " + stxt[1033] + "</span>" : "";
            var tCmtMatter = "";
            try { tCmtMatter = decodeURIComponent(tCmt.cmts_matter); } catch(e) { tCmtMatter = tCmt.cmts_matter; }

            tCmtStr += "<div id=\"dvCmt" + tCmt._id + "\" style=\"margin:8px 0;padding:10px;border-radius:8px;\" class=\"bkgdClrNrml\">";
            tCmtStr += "<div style=\"display:flex;align-items:center;margin-bottom:6px;\">";
            var tCmtUsrLink = (tCmt.cmts_userid && tCmt.cmts_userid != "0") ?
                "javascript:eindex('aa-show-user','pid=aa-show-user&tuid=" + tCmt.cmts_userid + "')" : null;
            var tCmtAvatarOpen  = tCmtUsrLink ? "<a href=\"" + tCmtUsrLink + "\">" : "<span>";
            var tCmtAvatarClose = tCmtUsrLink ? "</a>" : "</span>";
            if(tCmtIcon && tCmtIcon !== "") {
                tCmtStr += tCmtAvatarOpen + "<img src=\"images/user/s_thumb" + tCmtIcon + "\" style=\"width:30px;height:30px;border-radius:50%;margin-right:8px;\">" + tCmtAvatarClose;
            } else {
                tCmtStr += tCmtAvatarOpen + "<div style=\"width:30px;height:30px;border-radius:50%;background:#ccc;margin-right:8px;display:flex;align-items:center;justify-content:center;font-weight:bold;\">" + tCmtFromNm.charAt(0).toUpperCase() + "</div>" + tCmtAvatarClose;
            }
            var tCmtNameEl = tCmtUsrLink ?
                "<a href=\"" + tCmtUsrLink + "\" class=\"txtBold txtClrHdr\">" + tCmtFromNm + "</a>" :
                "<span class=\"txtBold txtClrHdr\">" + tCmtFromNm + "</span>";
            tCmtStr += tCmtNameEl;
            tCmtStr += "<span class=\"txtSmall\" style=\"margin-left:8px;color:#888;\">" + tCmtDStr + "</span>";
            tCmtStr += tCmtPriv;
            tCmtStr += "</div>";
            tCmtStr += "<div class=\"txtClrHdr\" style=\"margin-left:38px;white-space:pre-wrap;\">" + tCmtMatter + "</div>";
            tCmtStr += "<div style=\"margin-left:38px;margin-top:6px;\">";
            var tCmtIsGuest = (typeof quid === "undefined" || quid === "0" || quid === 0 || quid === "noQvalue");
            var tCmtReplyHref = tCmtIsGuest ?
                "javascript:JSSHOP.shared.showUserProfile(0);" :
                "javascript:doShowCmtReply('" + tCmt._id + "');";
            var tCmtLikeHref  = tCmtIsGuest ?
                "javascript:JSSHOP.shared.showUserProfile(0);" :
                "javascript:doCommentLike('" + tCmt._id + "',0);";
            tCmtStr += "<a href=\"" + tCmtReplyHref + "\" class=\"txtSmall txtClrLtBlue\">" + stxt[1030] + "</a>";
            tCmtStr += "&nbsp;&nbsp;<a id=\"dvLike_c" + tCmt._id + "\" href=\"" + tCmtLikeHref + "\" class=\"txtSmall\" style=\"color:#aaa;\">&#x1F44D; " + stxt[1039] + "</a>";
            tCmtStr += "&nbsp;<span id=\"dvLikeCount_c" + tCmt._id + "\" class=\"txtSmall\" style=\"color:#aaa;\"></span>";
            if(!tCmtIsGuest && String(tCmt.cmts_userid) === String(quid)) {
                tCmtStr += "&nbsp;&nbsp;<a href=\"javascript:doCommentRemove('" + tCmt._id + "',0);\" class=\"txtSmall\" style=\"color:#c00;\">" + stxt[1046] + "</a>";
            }
            tCmtStr += "</div>";
            tCmtStr += "<div id=\"dvCmtReplies_" + tCmt._id + "\" style=\"margin-left:38px;margin-top:6px;\"></div>";
            if(!tCmtIsGuest) {
            tCmtStr += "<div id=\"dvCmtReplyBox_" + tCmt._id + "\" style=\"display:none;margin-left:38px;margin-top:6px;\">";
            tCmtStr += "<div id=\"dvCmtReplyInput" + tCmt._id + "\" contenteditable=\"true\" class=\"form-control\" style=\"min-height:40px;padding:4px;margin-bottom:4px;\"></div>";
            tCmtStr += "<button class=\"cls_button cls_button-small\" onclick=\"doCommentReply('" + tCmt._id + "','" + tCmt.cmts_threadid + "','" + tCmtFromNm + "');\">" + stxt[1030] + "</button>";
            tCmtStr += "</div>";
            }
            tCmtStr += "</div>";
            iCmt++;
        }
    }

    tCmtListDv.innerHTML = tCmtStr;

    if(tCmtLen > 0) {
        var iR = 0;
        while(iR < tCmtLen) {
            var tRCmt = tCmtArr[iR];
            var tRepFobj = {};
            tRepFobj["ws"] = "where cm_threadid=? and cm_rtype=?";
            tRepFobj["wa"] = [tRCmt.cmts_threadid, 5];
            tRepFobj["o"] = "cm_dadded asc";
            var oRep = getNuDBFnvp("qcmnt", 5, null, tRepFobj);
            doQComm(oRep["rq"], "dvCmtReplies_" + tRCmt._id, "setCmtReplies");
            // Load like count for this comment
            var tLkQstr = "SELECT COUNT(*) AS cnt FROM qlikes WHERE ql_cmntId=" + tRCmt._id + " AND ql_isreply=0 AND ql_rtype=5";
            doQComm(tLkQstr, "dvLikeCount_c" + tRCmt._id, "setCmtLikeCount");
            iR++;
        }
    }

    tCmtListDv.scrollTop = tCmtListDv.scrollHeight;
};

var setCmtReplies = function(a, theResp, c) {
    var tRepDv = (typeof a === "string") ? document.getElementById(a) : a;
    if(!tRepDv) { return; }

    var tRepArr = null;
    try { tRepArr = JSON.parse(theResp); } catch(e) { tRepArr = []; }
    if(!tRepArr || tRepArr.length === 0) { return; }

    var tRepStr = "";
    var iRep = 0;
    while(iRep < tRepArr.length) {
        var tRep = tRepArr[iRep];
        var tRepDate = new Date(tRep.cm_dadded * 1000);
        var tRepDStr = ("0" + tRepDate.getDate()).slice(-2) + "/" +
                       ("0" + (tRepDate.getMonth() + 1)).slice(-2) + " " +
                       ("0" + tRepDate.getHours()).slice(-2) + ":" +
                       ("0" + tRepDate.getMinutes()).slice(-2);
        var tRepFrom   = tRep.cm_from || "Anonymous";
        var tRepIcon   = tRep.cm_from_icon;
        var tRepMatter = "";
        try { tRepMatter = decodeURIComponent(tRep.cm_matter); } catch(e) { tRepMatter = tRep.cm_matter; }

        tRepStr += "<div id=\"dvCmtRep_" + tRep._id + "\" style=\"margin:4px 0;padding:6px 8px;border-left:3px solid #ccc;border-radius:4px;\" class=\"bkgdClrNrml\">";
        tRepStr += "<div style=\"display:flex;align-items:center;margin-bottom:4px;\">";
        var tRepUsrLink    = (tRep.cm_userid && tRep.cm_userid != "0") ?
            "javascript:eindex('aa-show-user','pid=aa-show-user&tuid=" + tRep.cm_userid + "')" : null;
        var tRepAvatarOpen  = tRepUsrLink ? "<a href=\"" + tRepUsrLink + "\">" : "<span>";
        var tRepAvatarClose = tRepUsrLink ? "</a>" : "</span>";
        if(tRepIcon && tRepIcon !== "") {
            tRepStr += tRepAvatarOpen + "<img src=\"images/user/s_thumb" + tRepIcon + "\" style=\"width:22px;height:22px;border-radius:50%;margin-right:6px;\">" + tRepAvatarClose;
        } else {
            tRepStr += tRepAvatarOpen + "<div style=\"width:22px;height:22px;border-radius:50%;background:#ccc;margin-right:6px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:bold;\">" + tRepFrom.charAt(0).toUpperCase() + "</div>" + tRepAvatarClose;
        }
        var tRepNameEl = tRepUsrLink ?
            "<a href=\"" + tRepUsrLink + "\" class=\"txtBold txtClrHdr txtSmall\">" + tRepFrom + "</a>" :
            "<span class=\"txtBold txtClrHdr txtSmall\">" + tRepFrom + "</span>";
        tRepStr += tRepNameEl;
        tRepStr += "<span class=\"txtSmall\" style=\"margin-left:6px;color:#888;\">" + tRepDStr + "</span>";
        tRepStr += "</div>";
        tRepStr += "<div class=\"txtClrHdr txtSmall\" style=\"margin-left:28px;white-space:pre-wrap;\">" + tRepMatter + "</div>";
        tRepStr += "<div style=\"margin-left:28px;margin-top:4px;\">";
        var tRepIsGuest = (typeof quid === "undefined" || quid === "0" || quid === 0 || quid === "noQvalue");
        var tRepLikeHref = tRepIsGuest ?
            "javascript:JSSHOP.shared.showUserProfile(0);" :
            "javascript:doCommentLike('" + tRep._id + "',1);";
        tRepStr += "<a id=\"dvLike_r" + tRep._id + "\" href=\"" + tRepLikeHref + "\" class=\"txtSmall\" style=\"color:#aaa;\">&#x1F44D; " + stxt[1039] + "</a>";
        tRepStr += "&nbsp;<span id=\"dvLikeCount_r" + tRep._id + "\" class=\"txtSmall\" style=\"color:#aaa;\"></span>";
        if(!tRepIsGuest && String(tRep.cm_userid) === String(quid)) {
            tRepStr += "&nbsp;&nbsp;<a href=\"javascript:doCommentRemove('" + tRep._id + "',1);\" class=\"txtSmall\" style=\"color:#c00;\">" + stxt[1046] + "</a>";
        }
        tRepStr += "</div>";
        tRepStr += "</div>";
        iRep++;
    }

    tRepDv.innerHTML = tRepStr;

    // Load like counts for each reply
    var iLk = 0;
    while(iLk < tRepArr.length) {
        var tLkRep = tRepArr[iLk];
        var tLkRepQstr = "SELECT COUNT(*) AS cnt FROM qlikes WHERE ql_cmntId=" + tLkRep._id + " AND ql_isreply=1 AND ql_rtype=5";
        doQComm(tLkRepQstr, "dvLikeCount_r" + tLkRep._id, "setCmtLikeCount");
        iLk++;
    }
};

var getCommentsDiv = function(tProdId, tProdType, tOwnerUid) {
    _cmtProdId   = tProdId   || null;
    _cmtProdType = tProdType || "prod";
    _cmtOwnerUid = tOwnerUid || null;

    var tCmtsDv = document.getElementById("dvComments");
    if(!tCmtsDv) { return; }

    var tCmtPrivOpts = "";
    if((typeof quid !== "undefined") && quid !== "0" && quid !== 0 && quid !== "noQvalue") {
        tCmtPrivOpts = "<div style=\"display:flex;align-items:center;gap:10px;margin-top:6px;\">" +
            "<label class=\"txtSmall\"><input type=\"radio\" name=\"cmtPrivacy\" id=\"cmtPrivPub\" value=\"pub\" checked> " + stxt[1032] + "</label>" +
            "<label class=\"txtSmall\"><input type=\"radio\" name=\"cmtPrivacy\" id=\"cmtPrivPrv\" value=\"prv\"> " + stxt[1033] + "</label>" +
            "</div>";
    }

    var tGuestFields = "";
    if((typeof quid === "undefined") || quid === "0" || quid === 0 || quid === "noQvalue") {
        tGuestFields = "<input type=\"text\" id=\"dvCmtFromName\" placeholder=\"" + stxt[1038] + "\" class=\"form-control\" style=\"margin-bottom:5px;\">" +
            "<input type=\"text\" id=\"dvCmtFromEmail\" placeholder=\"" + stxt[50] + "\" class=\"form-control\" style=\"margin-bottom:5px;\">";
    }

    var tCmtBoxStr =
        "<div class=\"fb-chat-box\" style=\"width:100%;border:1px solid #ccc;border-radius:8px;overflow:hidden;margin:10px 0;background:#fff;\">" +
        "<div class=\"chat-header bkgdClrNrml txtClrHdr\" style=\"padding:8px 12px;font-weight:bold;\">" + stxt[1029] + "</div>" +
        "<div id=\"dvCmtList\" style=\"padding:10px;max-height:400px;overflow-y:auto;background:#fff;\"></div>" +
        "<div style=\"padding:10px;border-top:1px solid #eee;background:#fff;\">" +
        tGuestFields +
        "<div id=\"dvCmtInput\" contenteditable=\"true\" class=\"form-control\" style=\"min-height:50px;padding:6px;\"></div>" +
        tCmtPrivOpts +
        "<div style=\"margin-top:8px;\">" +
        "<button class=\"cls_button cls_button-small\" onclick=\"doCommentSave();\">" + stxt[1031] + "</button>" +
        "</div>" +
        "</div>" +
        "</div>";

    tCmtsDv.innerHTML = tCmtBoxStr;

    var tCmtFobj = {};
    if(_cmtOwnerUid && (typeof quid !== "undefined") && _cmtOwnerUid == quid) {
        tCmtFobj["ws"] = "where cmts_prodid=? and cmts_prodtype=?";
        tCmtFobj["wa"] = [_cmtProdId, _cmtProdType];
    } else {
        tCmtFobj["ws"] = "where cmts_prodid=? and cmts_prodtype=? and cmts_privacy=? and cmts_rtype=?";
        tCmtFobj["wa"] = [_cmtProdId, _cmtProdType, "pub", 5];
    }
    tCmtFobj["o"] = "cmts_dadded desc";
    tCmtFobj["l"] = "50";
    var oCmt = getNuDBFnvp("qcmnts", 5, null, tCmtFobj);
    doQComm(oCmt["rq"], null, "setCmtsDiv");
};

var doCommentSave = function() {
    var tCmtMatter = document.getElementById("dvCmtInput").innerHTML;
    if(!tCmtMatter || tCmtMatter.trim() === "" || tCmtMatter === "<br>") {
        alert(stxt[1035]);
        return;
    }

    var tCmtPriv = "pub";
    var tPrivPrv = document.getElementById("cmtPrivPrv");
    if(tPrivPrv && tPrivPrv.checked) { tCmtPriv = "prv"; }

    var tCmtThreadId = Math.random().toString(36).slice(2);
    var tCmtRtype = ((typeof quid === "undefined") || quid === "0" || quid === 0 || quid === "noQvalue") ? "0" : "5";
    JSSHOP.shared.setFrmFieldVal("qcmnts", "cmts_rtype",     tCmtRtype);
    JSSHOP.shared.setFrmFieldVal("qcmnts", "cmts_threadid",  tCmtThreadId);
    JSSHOP.shared.setFrmFieldVal("qcmnts", "cmts_prodid",    _cmtProdId);
    JSSHOP.shared.setFrmFieldVal("qcmnts", "cmts_prodtype",  _cmtProdType);
    JSSHOP.shared.setFrmFieldVal("qcmnts", "cmts_userid",    quid);
    JSSHOP.shared.setFrmFieldVal("qcmnts", "cmts_privacy",   tCmtPriv);
    JSSHOP.shared.setFrmFieldVal("qcmnts", "cmts_dadded",    JSSHOP.getUnixTimeStamp());
    JSSHOP.shared.setFrmFieldVal("qcmnts", "cmts_dmodified", JSSHOP.getUnixTimeStamp());
    JSSHOP.shared.setFrmFieldVal("qcmnts", "cmts_matter",    encodeURIComponent(tCmtMatter));

    if((typeof quid === "undefined") || quid === "0" || quid === 0 || quid === "noQvalue") {
        var tGuestName  = document.getElementById("dvCmtFromName");
        var tGuestEmail = document.getElementById("dvCmtFromEmail");
        if((!tGuestName || tGuestName.value === "") && (!tGuestEmail || tGuestEmail.value === "")) {
            alert(stxt[1036]);
            return;
        }
        if(tGuestName)  { JSSHOP.shared.setFrmFieldVal("qcmnts", "cmts_from",         tGuestName.value); }
        if(tGuestEmail) { JSSHOP.shared.setFrmFieldVal("qcmnts", "cmts_fromsg_email", tGuestEmail.value); }
    } else {
        if(typeof currQUsrObj !== "undefined" && currQUsrObj) {
            JSSHOP.shared.setFrmFieldVal("qcmnts", "cmts_from",      currQUsrObj.u_fullname);
            JSSHOP.shared.setFrmFieldVal("qcmnts", "cmts_from_icon", currQUsrObj.u_icon);
        }
    }

    var tCmtDOs = {};
    tCmtDOs["knvp"] = JSSHOP.shared.getFrmVals(document["qcmnts"], "nada");
    var oiCmt = getNuDBFnvp("qcmnts", 6, null, tCmtDOs);
    doQComm(oiCmt["rq"], null, "afterCommentSave");
};

var afterCommentSave = function(a, theResp, c) {
    getCommentsDiv(_cmtProdId, _cmtProdType, _cmtOwnerUid);
    var tCmtsDv = document.getElementById("dvComments");
    if(tCmtsDv) { tCmtsDv.scrollTop = tCmtsDv.scrollHeight; }
};

var doShowCmtReply = function(tCmtId) {
    var tRplyDv = document.getElementById("dvCmtReplyBox_" + tCmtId);
    if(!tRplyDv) { return; }
    tRplyDv.style.display = (tRplyDv.style.display !== "none") ? "none" : "block";
};

var doCommentReply = function(tCmtId, tCmtThreadId, tCmtTo) {
    var tRepInp = document.getElementById("dvCmtReplyInput" + tCmtId);
    if(!tRepInp) { return; }
    var tRepMatter = tRepInp.innerHTML;
    if(!tRepMatter || tRepMatter.trim() === "" || tRepMatter === "<br>") {
        alert(stxt[1037]);
        return;
    }

    JSSHOP.shared.setFrmFieldVal("qcmnt", "cm_threadid", tCmtThreadId);
    JSSHOP.shared.setFrmFieldVal("qcmnt", "cm_to",       tCmtTo);
    JSSHOP.shared.setFrmFieldVal("qcmnt", "cm_matter",   encodeURIComponent(tRepMatter));
    JSSHOP.shared.setFrmFieldVal("qcmnt", "cm_dadded",   JSSHOP.getUnixTimeStamp());
    if(typeof currQUsrObj !== "undefined" && currQUsrObj) {
        JSSHOP.shared.setFrmFieldVal("qcmnt", "cm_from",      currQUsrObj.u_fullname);
        JSSHOP.shared.setFrmFieldVal("qcmnt", "cm_from_icon", currQUsrObj.u_icon);
        JSSHOP.shared.setFrmFieldVal("qcmnt", "cm_userid",    quid);
    }

    var tRepDOs = {};
    tRepDOs["knvp"] = JSSHOP.shared.getFrmVals(document["qcmnt"], "nada");
    var oiRep = getNuDBFnvp("qcmnt", 6, null, tRepDOs);
    doQComm(oiRep["rq"], null, "afterCommentSave");
};

var doCommentRemove = function(tId, tIsReply) {
    if(!confirm(stxt[1046] + "?")) { return; }
    var tElemId, tQstr;
    if(tIsReply) {
        tQstr  = "UPDATE qcmnt SET cm_rtype=0 WHERE _id=" + tId + " AND cm_userid=" + quid;
        tElemId = "dvCmtRep_" + tId;
    } else {
        tQstr  = "UPDATE qcmnts SET cmts_rtype=0 WHERE _id=" + tId + " AND cmts_userid=" + quid;
        tElemId = "dvCmt" + tId;
    }
    doQComm(tQstr, tElemId, "afterCommentRemove");
};

var afterCommentRemove = function(tElemId, theResp, c) {
    var tEl = (typeof tElemId === "string") ? document.getElementById(tElemId) : tElemId;
    if(tEl) { tEl.remove(); }
};

var doCommentLike = function(tCmtId, tIsReply) {
    var tLikeElId = "dvLike_" + (tIsReply ? "r" : "c") + tCmtId;
    // Fetch any existing record regardless of rtype so we can branch on state
    var tChkQstr = "SELECT _id, ql_rtype FROM qlikes WHERE ql_userid=" + quid +
        " AND ql_cmntId=" + tCmtId + " AND ql_isreply=" + (tIsReply ? 1 : 0) + " LIMIT 1";
    doQComm(tChkQstr, tLikeElId, "afterLikeCheck");
};

// Three-state: no record → INSERT liked; rtype=5 → UPDATE to 0 (unliked); rtype=0 → UPDATE to 5 (re-liked)
var afterLikeCheck = function(tLikeElId, theResp, c) {
    var tIsReply = tLikeElId.indexOf("dvLike_r") === 0 ? 1 : 0;
    var tCmtId   = tLikeElId.replace("dvLike_c", "").replace("dvLike_r", "");

    var tExisting = null;
    try { tExisting = JSON.parse(theResp); } catch(e) { tExisting = []; }

    if(tExisting && tExisting.length > 0) {
        if(tExisting[0].ql_rtype == 5) {
            // Currently liked → toggle off (UPDATE rtype=0)
            var tUnlikeQstr = "UPDATE qlikes SET ql_rtype=0 WHERE ql_userid=" + quid +
                " AND ql_cmntId=" + tCmtId + " AND ql_isreply=" + tIsReply;
            doQComm(tUnlikeQstr, tLikeElId, "setLikeElemUnlikedClassCallBack");
        } else {
            // Record exists but was unliked (rtype=0) → re-like (UPDATE rtype=5)
            var tReLikeQstr = "UPDATE qlikes SET ql_rtype=5, ql_dadded=" + JSSHOP.getUnixTimeStamp() +
                " WHERE ql_userid=" + quid +
                " AND ql_cmntId=" + tCmtId + " AND ql_isreply=" + tIsReply;
            doQComm(tReLikeQstr, tLikeElId, "afterLikeSave");
        }
    } else {
        // No record yet — INSERT new liked row
        JSSHOP.shared.setFrmFieldVal("qlikes", "ql_cmntId",   tCmtId);
        JSSHOP.shared.setFrmFieldVal("qlikes", "ql_isreply",  tIsReply ? "1" : "0");
        JSSHOP.shared.setFrmFieldVal("qlikes", "ql_dadded",   JSSHOP.getUnixTimeStamp());
        JSSHOP.shared.setFrmFieldVal("qlikes", "ql_rtype",    "5");
        if(typeof currQUsrObj !== "undefined" && currQUsrObj) {
            JSSHOP.shared.setFrmFieldVal("qlikes", "ql_userid",    quid);
            JSSHOP.shared.setFrmFieldVal("qlikes", "ql_uicon",     currQUsrObj.u_icon);
            JSSHOP.shared.setFrmFieldVal("qlikes", "ql_ufullname", currQUsrObj.u_fullname);
        }
        var tLkDOs = {};
        tLkDOs["knvp"] = JSSHOP.shared.getFrmVals(document["qlikes"], "nada");
        var oiLk = getNuDBFnvp("qlikes", 6, null, tLkDOs);
        doQComm(oiLk["rq"], tLikeElId, "afterLikeSave");
    }
};

var afterLikeSave = function(tLikeElId, theResp, c) {
    var tEl = (typeof tLikeElId === "string") ? document.getElementById(tLikeElId) : tLikeElId;
    if(tEl) {
        tEl.style.color = "#1877f2";
        tEl.innerHTML = "&#x1F44D; " + stxt[1040];
    }
    var tIsReply = tLikeElId.indexOf("dvLike_r") === 0 ? 1 : 0;
    var tCmtId   = tLikeElId.replace("dvLike_c", "").replace("dvLike_r", "");
    var tCntElId = "dvLikeCount_" + (tIsReply ? "r" : "c") + tCmtId;
    var tLkCntQstr = "SELECT COUNT(*) AS cnt FROM qlikes WHERE ql_cmntId=" + tCmtId +
        " AND ql_isreply=" + tIsReply + " AND ql_rtype=5";
    doQComm(tLkCntQstr, tCntElId, "setCmtLikeCount");
};

// Sets the "unliked" visual state (record exists with rtype=0 — clicking will re-like via UPDATE)
var setLikeElemUnlikedClassCallBack = function(tLikeElId, theResp, c) {
    var tEl = (typeof tLikeElId === "string") ? document.getElementById(tLikeElId) : tLikeElId;
    if(tEl) {
        tEl.style.color = "#aaa";
        tEl.innerHTML = "&#x1F44D; " + stxt[1039];
    }
    var tIsReply = tLikeElId.indexOf("dvLike_r") === 0 ? 1 : 0;
    var tCmtId   = tLikeElId.replace("dvLike_c", "").replace("dvLike_r", "");
    var tCntElId = "dvLikeCount_" + (tIsReply ? "r" : "c") + tCmtId;
    var tLkCntQstr = "SELECT COUNT(*) AS cnt FROM qlikes WHERE ql_cmntId=" + tCmtId +
        " AND ql_isreply=" + tIsReply + " AND ql_rtype=5";
    doQComm(tLkCntQstr, tCntElId, "setCmtLikeCount");
};

var setCmtLikeCount = function(tElemId, theResp, c) {
    var tEl = (typeof tElemId === "string") ? document.getElementById(tElemId) : tElemId;
    if(!tEl) { return; }
    var tRes = null;
    try { tRes = JSON.parse(theResp); } catch(e) { tRes = null; }
    var tCnt = 0;
    if(tRes && tRes.length > 0 && tRes[0].cnt) { tCnt = parseInt(tRes[0].cnt, 10); }
    if(tCnt > 0) {
        var tIsLoggedIn = (typeof quid !== "undefined" && quid !== "0" && quid !== 0 && quid !== "noQvalue");
        var tIsReply = tElemId.indexOf("dvLikeCount_r") === 0 ? 1 : 0;
        var tCmtId   = tElemId.replace("dvLikeCount_c", "").replace("dvLikeCount_r", "");
        if(tIsLoggedIn) {
            tEl.innerHTML = "<a href=\"javascript:showLikedList('" + tCmtId + "'," + tIsReply + ");\" class=\"txtSmall\" style=\"color:#1877f2;\">" + tCnt + "</a>";
        } else {
            tEl.innerHTML = "<span style=\"color:#1877f2;\">" + tCnt + "</span>";
        }
    } else {
        tEl.innerHTML = "";
    }
};

var showLikedList = function(tCmtId, tIsReply) {
    var tLkListQstr = "SELECT ql_userid, ql_uicon, ql_ufullname FROM qlikes WHERE ql_cmntId=" + tCmtId +
        " AND ql_isreply=" + tIsReply + " AND ql_rtype=5 ORDER BY _id desc LIMIT 50";
    doQComm(tLkListQstr, tCmtId + "|" + tIsReply, "showLikedListCB");
};

var showLikedListCB = function(tParam, theResp, c) {
    var tLkArr = null;
    try { tLkArr = JSON.parse(theResp); } catch(e) { tLkArr = []; }
    if(!tLkArr || tLkArr.length === 0) { return; }

    var tLkStr = "<div style=\"padding:6px 0;\">";
    var iLk = 0;
    while(iLk < tLkArr.length) {
        var tLkr     = tLkArr[iLk];
        var tLkrName = tLkr.ql_ufullname || "Anonymous";
        var tLkrIcon = tLkr.ql_uicon;
        var tLkrUsrOnClick = (tLkr.ql_userid && tLkr.ql_userid != "0") ?
            "JSSHOP.ui.closeLbox();eindex('aa-show-user','pid=aa-show-user&tuid=" + tLkr.ql_userid + "');" : null;
        var tLkrAvatarOpen  = tLkrUsrOnClick ? "<a href=\"javascript:void(0)\" onclick=\"" + tLkrUsrOnClick + "\">" : "<span>";
        var tLkrAvatarClose = tLkrUsrOnClick ? "</a>" : "</span>";

        tLkStr += "<div style=\"display:flex;align-items:center;padding:6px 10px;\">";
        if(tLkrIcon && tLkrIcon !== "") {
            tLkStr += tLkrAvatarOpen + "<img src=\"images/user/s_thumb" + tLkrIcon + "\" style=\"width:30px;height:30px;border-radius:50%;margin-right:8px;\">" + tLkrAvatarClose;
        } else {
            tLkStr += tLkrAvatarOpen + "<div style=\"width:30px;height:30px;border-radius:50%;background:#ccc;margin-right:8px;display:flex;align-items:center;justify-content:center;font-weight:bold;\">" + tLkrName.charAt(0).toUpperCase() + "</div>" + tLkrAvatarClose;
        }
        var tLkrNameEl = tLkrUsrOnClick ?
            "<a href=\"javascript:void(0)\" onclick=\"" + tLkrUsrOnClick + "\" class=\"txtBold txtClrHdr\">" + tLkrName + "</a>" :
            "<span class=\"txtBold txtClrHdr\">" + tLkrName + "</span>";
        tLkStr += tLkrNameEl;
        tLkStr += "</div>";
        iLk++;
    }
    tLkStr += "</div>";

    JSSHOP.ui.popNurFillLbox(tLkStr, "&#xe5cd;", stxt[1039]);
};

// ── Property / Update comment+like bar ──────────────────────────────────────

// Returns an HTML string with comment count (links to item page) + like toggle.
// ql_isreply: 3 = property, 4 = update
var getComntLikeDiv = function(_id, ql_isreply) {
    var tNavLink = (ql_isreply == 3)
        ? "javascript:eindex('aa-show-prop','pid=aa-show-prop&prpid=" + _id + "')"
        : "javascript:eindex('aa-show-update','pid=aa-show-update&tupid=" + _id + "')";
    var tIsLoggedIn = (typeof quid !== "undefined" && quid !== "0" && quid !== 0 && quid !== "noQvalue");
    var tLikeHref = tIsLoggedIn
        ? "javascript:doProdLike('" + _id + "'," + ql_isreply + ");"
        : "javascript:JSSHOP.shared.showUserProfile(0);";
    var tCmntLbl = (typeof stxt !== "undefined" && stxt[1029]) ? stxt[1029] : "Comments";
    var tLikeLbl = (typeof stxt !== "undefined" && stxt[1039]) ? stxt[1039] : "Like";
    var s = "<div style=\"display:flex;align-items:center;gap:4px;\">";
    s += "<span class=\"crsrPointer\" onclick=\"" + tNavLink.replace("javascript:", "") + "\">";
    s += "<i class=\"menu-material-icons txtClrTtl\" alt=\"comment\" title=\"" + tCmntLbl + "\">&#xe0bf;</i>";
    s += " <span id=\"dvCmntCount_" + ql_isreply + "_" + _id + "\" class=\"txtSmall\"></span> " + tCmntLbl;
    s += "</span>";
    s += "&nbsp;&nbsp;";
    s += "<span id=\"dvLikePrd_" + ql_isreply + "_" + _id + "\" class=\"crsrPointer\" onclick=\"" + tLikeHref.replace(/^javascript:/, "") + "\">";
    s += "<i class=\"menu-material-icons txtClrLtBlue\" alt=\"like\" title=\"" + tLikeLbl + "\">&#xe8dc;</i>";
    s += " <span id=\"dvLikeCountPrd_" + ql_isreply + "_" + _id + "\" class=\"txtSmall\"></span> " + tLikeLbl;
    s += "</span>";
    s += "</div>";
    return s;
};

// Call after the HTML from getComntLikeDiv has been inserted into the DOM.
var loadComntLikeCounts = function(_id, ql_isreply) {
    var tProdType = (ql_isreply == 3) ? "prod" : "post";
    doQComm(
        "SELECT COUNT(*) AS cnt FROM qcmnts WHERE cmts_prodid=" + _id + " AND cmts_prodtype='" + tProdType + "' AND cmts_rtype=5",
        ql_isreply + "_" + _id, "setCmntCountCB"
    );
    doQComm(
        "SELECT COUNT(*) AS cnt FROM qlikes WHERE ql_cmntId=" + _id + " AND ql_isreply=" + ql_isreply + " AND ql_rtype=5",
        ql_isreply + "_" + _id, "setPrdLikeCountCB"
    );
    var tIsLoggedIn = (typeof quid !== "undefined" && quid !== "0" && quid !== 0 && quid !== "noQvalue");
    if(tIsLoggedIn) {
        doQComm(
            "SELECT _id, ql_rtype FROM qlikes WHERE ql_userid=" + quid + " AND ql_cmntId=" + _id + " AND ql_isreply=" + ql_isreply + " LIMIT 1",
            ql_isreply + "_" + _id, "setPrdLikeStateCB"
        );
    }
};

var setCmntCountCB = function(tParam, theResp, c) {
    var tEl = document.getElementById("dvCmntCount_" + tParam);
    if(!tEl) { return; }
    var tRes = null;
    try { tRes = JSON.parse(theResp); } catch(e) { tRes = null; }
    tEl.innerHTML = (tRes && tRes.length > 0 && tRes[0].cnt) ? parseInt(tRes[0].cnt, 10) : 0;
};

var setPrdLikeCountCB = function(tParam, theResp, c) {
    var tEl = document.getElementById("dvLikeCountPrd_" + tParam);
    if(!tEl) { return; }
    var tRes = null;
    try { tRes = JSON.parse(theResp); } catch(e) { tRes = null; }
    var tCnt = (tRes && tRes.length > 0 && tRes[0].cnt) ? parseInt(tRes[0].cnt, 10) : 0;
    tEl.innerHTML = tCnt > 0 ? tCnt : "";
};

var setPrdLikeStateCB = function(tParam, theResp, c) {
    var tSpan = document.getElementById("dvLikePrd_" + tParam);
    if(!tSpan) { return; }
    var tRes = null;
    try { tRes = JSON.parse(theResp); } catch(e) { tRes = null; }
    var tLiked = (tRes && tRes.length > 0 && tRes[0].ql_rtype == 5);
    var tIcon = tSpan.querySelector("i");
    if(tIcon) { tIcon.style.color = tLiked ? "#0b3d91" : ""; }
};

var doProdLike = function(tId, tIsReply) {
    doQComm(
        "SELECT _id, ql_rtype FROM qlikes WHERE ql_userid=" + quid + " AND ql_cmntId=" + tId + " AND ql_isreply=" + tIsReply + " LIMIT 1",
        "dvLikePrd_" + tIsReply + "_" + tId, "afterProdLikeCheck"
    );
};

var afterProdLikeCheck = function(tElemId, theResp, c) {
    var tRaw     = tElemId.replace("dvLikePrd_", "");
    var tSepIdx  = tRaw.indexOf("_");
    var tIsReply = parseInt(tRaw.substring(0, tSepIdx), 10);
    var tId      = tRaw.substring(tSepIdx + 1);
    var tExisting = null;
    try { tExisting = JSON.parse(theResp); } catch(e) { tExisting = []; }
    if(tExisting && tExisting.length > 0) {
        var tNewRtype = (tExisting[0].ql_rtype == 5) ? 0 : 5;
        var tUpdQstr = "UPDATE qlikes SET ql_rtype=" + tNewRtype;
        if(tNewRtype === 5) { tUpdQstr += ", ql_dadded=" + JSSHOP.getUnixTimeStamp(); }
        tUpdQstr += " WHERE ql_userid=" + quid + " AND ql_cmntId=" + tId + " AND ql_isreply=" + tIsReply;
        doQComm(tUpdQstr, tElemId, "afterProdLikeSave");
    } else {
        JSSHOP.shared.setFrmFieldVal("qlikes", "ql_cmntId",   tId);
        JSSHOP.shared.setFrmFieldVal("qlikes", "ql_isreply",  String(tIsReply));
        JSSHOP.shared.setFrmFieldVal("qlikes", "ql_dadded",   JSSHOP.getUnixTimeStamp());
        JSSHOP.shared.setFrmFieldVal("qlikes", "ql_rtype",    "5");
        if(typeof currQUsrObj !== "undefined" && currQUsrObj) {
            JSSHOP.shared.setFrmFieldVal("qlikes", "ql_userid",    quid);
            JSSHOP.shared.setFrmFieldVal("qlikes", "ql_uicon",     currQUsrObj.u_icon);
            JSSHOP.shared.setFrmFieldVal("qlikes", "ql_ufullname", currQUsrObj.u_fullname);
        }
        var tLkDOs = {};
        tLkDOs["knvp"] = JSSHOP.shared.getFrmVals(document["qlikes"], "nada");
        var oiLk = getNuDBFnvp("qlikes", 6, null, tLkDOs);
        doQComm(oiLk["rq"], tElemId, "afterProdLikeSave");
    }
};

var afterProdLikeSave = function(tElemId, theResp, c) {
    var tRaw    = tElemId.replace("dvLikePrd_", "");
    var tSepIdx = tRaw.indexOf("_");
    loadComntLikeCounts(tRaw.substring(tSepIdx + 1), parseInt(tRaw.substring(0, tSepIdx), 10));
};

// end of comment and like bar code
