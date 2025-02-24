var tmpEPADDArr = [];
var tmpSvsMksArr = [];
var tmpSvsMksStr = ":";
var tmpCatSvArr = [];




// validate the editing of a category
// page adminshop/adminmainincs/edit-category.php


/*
public static int countOccurrences(String haystack, char needle)
{
    int count = 0;
    for (int i=0; i < haystack.length(); i++)
    {
        if (haystack.charAt(i) == needle)
        {
             count++;
        }
    }
    return count;
}
*/
if (!window.JSSHOP.admin) {
    JSSHOP.admin = new Object();
}
function doALI() {
    JSSHOP.cookies.deleteCookie('quid','','');
    JSSHOP.cookies.deleteCookie('qcweb','','');
    JSSHOP.cookies.deleteCookie('qcoid','','');
    JSSHOP.cookies.deleteCookie('qtype','','');
    document.location.href='index.html?pid=login&u=' + tmp_u_email.value + '&p=' + tmp_u_pass.value;
    }
    
    var removeDiacritics = function(str) {
    
      var defaultDiacriticsRemovalMap = [
        {'base':'A', 'letters':/[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g},
        {'base':'AA','letters':/[\uA732]/g},
        {'base':'AE','letters':/[\u00C6\u01FC\u01E2]/g},
        {'base':'AO','letters':/[\uA734]/g},
        {'base':'AU','letters':/[\uA736]/g},
        {'base':'AV','letters':/[\uA738\uA73A]/g},
        {'base':'AY','letters':/[\uA73C]/g},
        {'base':'B', 'letters':/[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g},
        {'base':'C', 'letters':/[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g},
        {'base':'D', 'letters':/[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g},
        {'base':'DZ','letters':/[\u01F1\u01C4]/g},
        {'base':'Dz','letters':/[\u01F2\u01C5]/g},
        {'base':'E', 'letters':/[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g},
        {'base':'F', 'letters':/[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g},
        {'base':'G', 'letters':/[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g},
        {'base':'H', 'letters':/[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g},
        {'base':'I', 'letters':/[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g},
        {'base':'J', 'letters':/[\u004A\u24BF\uFF2A\u0134\u0248]/g},
        {'base':'K', 'letters':/[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g},
        {'base':'L', 'letters':/[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g},
        {'base':'LJ','letters':/[\u01C7]/g},
        {'base':'Lj','letters':/[\u01C8]/g},
        {'base':'M', 'letters':/[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g},
        {'base':'N', 'letters':/[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g},
        {'base':'NJ','letters':/[\u01CA]/g},
        {'base':'Nj','letters':/[\u01CB]/g},
        {'base':'O', 'letters':/[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g},
        {'base':'OI','letters':/[\u01A2]/g},
        {'base':'OO','letters':/[\uA74E]/g},
        {'base':'OU','letters':/[\u0222]/g},
        {'base':'P', 'letters':/[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g},
        {'base':'Q', 'letters':/[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g},
        {'base':'R', 'letters':/[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g},
        {'base':'S', 'letters':/[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g},
        {'base':'T', 'letters':/[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g},
        {'base':'TZ','letters':/[\uA728]/g},
        {'base':'U', 'letters':/[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g},
        {'base':'V', 'letters':/[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g},
        {'base':'VY','letters':/[\uA760]/g},
        {'base':'W', 'letters':/[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g},
        {'base':'X', 'letters':/[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g},
        {'base':'Y', 'letters':/[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g},
        {'base':'Z', 'letters':/[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g},
        {'base':'a', 'letters':/[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g},
        {'base':'aa','letters':/[\uA733]/g},
        {'base':'ae','letters':/[\u00E6\u01FD\u01E3]/g},
        {'base':'ao','letters':/[\uA735]/g},
        {'base':'au','letters':/[\uA737]/g},
        {'base':'av','letters':/[\uA739\uA73B]/g},
        {'base':'ay','letters':/[\uA73D]/g},
        {'base':'b', 'letters':/[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g},
        {'base':'c', 'letters':/[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g},
        {'base':'d', 'letters':/[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g},
        {'base':'dz','letters':/[\u01F3\u01C6]/g},
        {'base':'e', 'letters':/[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g},
        {'base':'f', 'letters':/[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g},
        {'base':'g', 'letters':/[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g},
        {'base':'h', 'letters':/[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g},
        {'base':'hv','letters':/[\u0195]/g},
        {'base':'i', 'letters':/[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g},
        {'base':'j', 'letters':/[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g},
        {'base':'k', 'letters':/[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g},
        {'base':'l', 'letters':/[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g},
        {'base':'lj','letters':/[\u01C9]/g},
        {'base':'m', 'letters':/[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g},
        {'base':'n', 'letters':/[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g},
        {'base':'nj','letters':/[\u01CC]/g},
        {'base':'o', 'letters':/[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g},
        {'base':'oi','letters':/[\u01A3]/g},
        {'base':'ou','letters':/[\u0223]/g},
        {'base':'oo','letters':/[\uA74F]/g},
        {'base':'p','letters':/[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g},
        {'base':'q','letters':/[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g},
        {'base':'r','letters':/[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g},
        {'base':'s','letters':/[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g},
        {'base':'t','letters':/[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g},
        {'base':'tz','letters':/[\uA729]/g},
        {'base':'u','letters':/[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g},
        {'base':'v','letters':/[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g},
        {'base':'vy','letters':/[\uA761]/g},
        {'base':'w','letters':/[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g},
        {'base':'x','letters':/[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g},
        {'base':'y','letters':/[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g},
        {'base':'z','letters':/[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g}
      ];
    
      for(var i=0; i<defaultDiacriticsRemovalMap.length; i++) {
        try {
            str = str.replace(defaultDiacriticsRemovalMap[i].letters, defaultDiacriticsRemovalMap[i].base);
        } catch(e) {
            // str = " ";
        }
      }
    
      return str;
    
    };
    
    
    
    
    
    var doSaveRedir = function(a,b,c) {
    document.location.href = "index.html?pid=" + pid + "&ppid=" + ppid;
    };


    
       var getTblSortStr = function(theTBhdr, theTBbdy) {
           strFhtml = "<div class=\"tabler\"  style=\"margin: 0 auto;min-width:90%;max-width:95%;\" ><table style=\"margin: 0 auto;min-width:90%;max-width:95%;\" class=\"table table-sm table-striped table-hover txtSmall\" width=\"100%\" cellpadding=\"0px;\"  cellspacing=\"0px;\">";
           strFhtml += "<THEAD>" + theTBhdr + "</THEAD><TBODY>";
           strFhtml += theTBbdy + "</TBODY></table></div>";
           return strFhtml;
       };
       var getNuTblSortStr = function(theTBhdr, theTBbdy, theTCls) {
        strFhtml = "<div class=\"tabler\"  style=\"margin: 0 auto;min-width:90%;max-width:98%\">";
        strFhtml += theTBhdr;
        strFhtml += theTBbdy + "</div>";
        return strFhtml;
    };
    
    
    var removeArrElement = function(theArray, theIndex) {
        try {
        theArray.splice(theIndex,1);
        } catch(e) {
        alert("removeArrElement: " + e);
        theArray = "noQvalue";
        }
        return theArray;
    };
    
    
    
    
    
    var getCurrListArr = function(theObj) {
     
                var theSelIndex = theObj.selectedIndex;
                var theVal = theObj.options[theSelIndex].value;
                var theString = theObj.options[theSelIndex].text;
    
            theArr = [theVal, theString]
                // alert(theString +  " : " + theVal);
                return theArr;
    }
    
    
    
    function switchOccurrences(haystack, needle, arrs)
    {
        count = 0;
        for (i=0; i < haystack.length; i++)
        {
            if(haystack.charAt(i) === needle)
            {
            haystack = haystack.replace(haystack.charAt(i), "'" + arrs[count] + "'");
            // haystack = haystack.replace(haystack.charAt(i),  arrs[count]);
    
            count++;
            } 
        }
        return haystack;
    }
    
    
     
    
            var setCurrListIndex = function(theObj, indexVal) {
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
    
            var getCurrListVal = function(theObj) {
                var theSelIndex = theObj.selectedIndex;
                var theString = theObj.options[theSelIndex].text;
                var theVal = theObj.options[theSelIndex].value;
                // alert(theString +  " : " + theVal);
                return theVal;
            };
     
           var addCurrListVal = function(theObj, theText, theVal) {
           theObj.options[theObj.options.length] = new Option(theText, theVal);
           };
    
    
    
    var getDBFnvp = function(t,m,da,de) {
    getNuDBFnvp(t,m,da,null)
    };
    
    var hu = function(a,b,c) {
    JSSHOP.ui.popAndFillLbox(b);
    };
    
    
    
    
    
    var checkCatEdit = function(t,am) {
    if((am == 7) && (ppid == 0)) { // not edit, its add category
    m = 6;
    } else {
    m = am;
    }
    var varcatTitle = document.getElementById("CategoryTitle").value;
    if(varcatTitle.length < 1) {
    alert("You must enter a Category Title");
    return;
    }
    tmpVpar = [];
    tmpVpar.push("CategoryTitle");
    tmpVpar.push("ParentCategoryID");
    oi = getDBFnvp(t,m,tmpVpar);
    tsas = JSON.stringify(oi);
    doQComm(oi["rq"], null, "hu");
    // alert(switchOccurrences(oi["ws"], "?", oi["wa"]));
    // JSSHOP.ui.popAndFillLbox(oi["rq"]);
    // app.getJsnPrs(tsas);
    };
    
    
    
    
    
    
    
    
    
    
    
    var rREditCat = function(theElem, theResp, marble) {
    hasr = "n";
    fullstr = "";
    var arrToFill = JSON.parse(theResp);
    var len = arrToFill.length;
    var iint = 0;
    fullstr = "<table class=\"clsmmdv\" border=\"1px\"><tr>"
    while(iint < len) {
    ts = arrToFill[iint];
    for(var gkey in ts) {
    if(gkey == "_id") {
    fullstr += "<td><a href=\"index.html?pid=aa-edit-category&ppid=" + ts[gkey] +  "\">" + ts[gkey] + "</a></td>";
    } else {
    fullstr += "<td>" + ts[gkey] +  "</td>";
    }
    if(document.getElementById(gkey)) {
    // document.getElementById("includedContent").value = ts[gkey];
    }  
    }
    fullstr += "</tr><tr>"
    iint++;
    }
    fullstr += "</tr></table>";
    document.getElementById("includedContent").innerHTML = fullstr;
    };
    
    var rRListProds = function(theElem, theResp, marble) {
    hasr = "n";
    fullstr = "";
    var arrToFill = JSON.parse(theResp);
    var len = arrToFill.length;
    var iint = 0;
    fullstr = "<table class=\"clsmmdv\" border=\"1px\"><tr>"
    while(iint < len) {
    ts = arrToFill[iint];
    for(var gkey in ts) {
    if(gkey == "_id") {
    fullstr += "<td><a href=\"index.html?pid=aa-edit-product&ppid=" + ts[gkey] +  "\">" + ts[gkey] + "</a></td>";
    } else {
    fullstr += "<td>" + ts[gkey] +  "</td>";
    }
    if(document.getElementById(gkey)) {
    // document.getElementById("includedContent").value = ts[gkey];
    }  
    }
    fullstr += "</tr><tr>"
    iint++;
    }
    fullstr += "</tr></table>";
    document.getElementById("includedContent").innerHTML = fullstr;
    };
    
    
    
    var rEditCat = function(theElem, theResp, marble) {
    hasr = "n";
    fullstr = "";
    var arrToFill = JSON.parse(theResp);
    var len = arrToFill.length;
    var iint = 0;
    var pcid = 0;
    theO = document.getElementById("ParentCategoryID");
    while(iint < len) {
    ts = arrToFill[iint];
    if(ppid == ts._id) { // dont add to select if parent is category
    } else {
    addCurrListVal(theO, ts.CategoryTitle, ts._id);
    }
    for(var gkey in ts) {
    if(iint < 1) { 
    if(ppid == 0) {
    if(document.getElementById(gkey)) {
    arrDBnDocFNames.push(gkey);
    }
    }
    arrDBFNames.push(gkey); 
    }
    
    
    
    if(ts._id == ppid) {
    pcid = ts.ParentCategoryID;
    if(document.getElementById(gkey)) {
    arrDBnDocFNames.push(gkey);
    document.getElementById(gkey).value = ts[gkey];
    }  
    
    }
    
    fullstr += gkey + " . " + ts[gkey] +  "\n";
    } // end for(var....
    
    iint++;
    }
    
    setCurrListIndex(theO, pcid);
    // alert(pcid);
    };
    
    
    
    
    
    
    
    
    
    
    
    
     
    
    
    
    var rAddCat = function() {
    };
    var aListCat = function() {
    doQComm('select * from prod_categories order by _id desc limit 100', null, "rREditCat")
    }
    var aEditCat = function() {
    doQComm('select * from prod_categories order by _id desc limit 100', null, "rEditCat")
    /*
    if(ppid == 0) {
    doQComm('select * from prod_categories order by _id desc limit 500', null, "rEditCat")
    } else {
    doQComm('select * from prod_categories where _id = ' + ppid + ' order by _id desc limit 1', null, "rEditCat")
    }
    */
    };
     
    var aListProds = function() {
    doQComm('select * from product order by _id desc limit 100', null, "rRListProds")
    }
    
    
    
    var rFFFVs = function(theElem, theResp, marble) {
    hasr = "n";
    fullstr = "";
    var arrToFill = JSON.parse(theResp);
    var len = arrToFill.length;
    var iint = 0;
    var pcid = 0;
    while(iint < len) {
    ts = arrToFill[iint];
    for(var gkey in ts) {
    if(document.getElementById(gkey)) {
    document.getElementById(gkey).value = ts[gkey];
    }  
    }
    iint++;
    }
    };
    
    var doMCartLink = function() {
    strTuel = "index.html";
    if((cid == 0) || (ppid == 0)) {
    document.location.href = strTuel;
    } else {
    strTuel += "?pid=aa-show-cart&ppid=" + ppid + "&cid=" + cid;
    document.location.href = strTuel;
    }
    };
     
    
    
    
    
    
    
     
    var decPrefCky = function(cString) {
        try {
            strPa = cString.split("x1").join("[{\"");
            strPb = strPa.split("x2").join("\":\"");
            strPc = strPb.split("x3").join("\",\"");
            strPd = strPc.split("x4").join("\":");
            strPe = strPd.split("x5").join(",\"");
            strPf = strPe.split("x6").join("\"}]");
            strPg = strPf.split("x7").join("}]");
            strPh = strPg.split("x8").join("\"],[\"");
        }catch(e) {
        JSSHOP.logJSerror(e, arguments, "JSSHOP.user.decPrefCky");
        }
          return strPh;
    };
    
    var encPrefCky = function(cString) {
     
        try {
            strPa = cString.split("[{\"").join("x1");
            strPb = strPa.split("\":\"").join("x2");
            strPc = strPb.split("\",\"").join("x3");
            strPd = strPc.split("\":").join("x4");
            strPe = strPd.split(",\"").join("x5");
            strPf = strPe.split("\"}]").join("x6");
            strPg = strPf.split("}]").join("x7");
            strPh = strPg.split("\"],[\"").join("x8");
        }catch(e) {
        JSSHOP.logJSerror(e, arguments, "JSSHOP.user.encPrefCky");
        }
          return strPh;
    };
    
    
    
    /*
    * basic funtion to update
    * one field in db table
    */ 
    var procNuUIAitem = function(fromWhere,thetble,thecol,theid,theVal,tmpCB) {
    try {
        tmpVpar = null;
        tmpSobj = null;
        tmpFobj = null; 
        tmpVpar = [];
        tmpSobj = {};
        tmpFobj = {}; 
        tmpSobj["t"] = thecol;
        tmpSobj["v"] = theVal;
        tmpVpar.push(tmpSobj);
        tmpFobj["ws"] = "where _id=?";
        tmpFobj["wa"] = [theid];
        tmpFobj["knvp"] = tmpVpar;
        oi = getNuDBFnvp(thetble,7,null,tmpFobj);
        // alert("procNuUIitem: " + oi["rq"]);
        JSSHOP.logJSdbug("procNuUIAitem", arguments, fromWhere + " :: " + "q: " + oi["rq"]);
    
    if(fromWhere == "remote") {
         doQSynchComm(getShopDir("local"), oi["rq"], fromWhere, tmpCB);
    } else {
        doQAppComm(oi["rq"], fromWhere, tmpCB);
    }
    } catch(e) {
        JSSHOP.logJSdbug("procNuUIAitem.ERROR", arguments, fromWhere + " :: " + e);
    }
    };
     
    
    /*
    * basic funtion to update
    * one field in db table and set timestamp
    */ 
    var procNuUIitem = function(thetble,thecol,theid,theVal,atmpCB) {
        tmpVpar = null;
        tmpSobj = null;
        tmpFobj = null; 
        tmpVpar = [];
        tmpSobj = {};
        tmpFobj = {}; 
        tmpSobj["t"] = thecol;
        tmpSobj["v"] = theVal;
        tmpVpar.push(tmpSobj);
        tmpFobj["ws"] = "where _id=?";
        tmpFobj["wa"] = [theid];
        tmpFobj["knvp"] = tmpVpar;
        oi = getNuDBFnvp(thetble,7,null,tmpFobj);
        // alert("procNuUIitem: " + oi["rq"]);
        doQComm(oi["rq"], null, atmpCB);
    };
    
    
    
    var procUIitem = function(theElem) {
    ts = JSSHOP.shared.getElemDUrl(theElem);
    if(theElem.getAttribute("data-prval") != null) {
    totw = theElem.getAttribute("data-prval");
    if(totw != null){
    if(totw == theElem.value) {
    } else {
    theElem.setAttribute("data-prval", theElem.value);
    JSADMSHOP.prepAdmPipe(theElem,ts,JSADMSHOP.procNuAdmPipe);
    }
    }
    }
    };

    function doFinishIAdd() {
       
    }
    var tFnishPrdAdd = function(theTFon) {
      tbtSar = [];
      tbtSObj = {};
      tbtSObj["cls"] = "noQvalue";
      tbtSObj["txt"] = "noQvalue";
      tbtSObj["cb"] = "javascript:eindex('aa-edit-parts-category', 'pid=aa-edit-parts-category&cid=" + cid + "');";
 
      tbtSar.push(tbtSObj);
      JSSHOP.ui.doAlertBox("success", stxt[605], stxt[606], tbtSar);
        console.log("tFnishPrdAdd.admin: " + JSON.stringify(theTFon));
        };
        
    
 
function getListPrices() {
    if(currPUrlObj.mk == null ||  currPUrlObj.mk < 0) {
      JSSHOP.ui.doAlertBox("warning", stxt[82] + " " + stxt[102], stxt[82] + " " + stxt[102], "noQvalue");
      return;
    }
    tRetPopStr = "";
    tmpArrObj = JSSHOP.shared.urlToArray(JSSHOP.shared.nodesToString(dvPartsMain));
    // loop through the object and get the values
    for (var key in tmpArrObj) {
      if (tmpArrObj.hasOwnProperty(key)) {
        ttMpKVal = tmpArrObj[key];
        // replace everything that is not a number or a period or a comma
        if(ttMpKVal == "" || ttMpKVal == null || ttMpKVal == "undefined") {
          // console.log("getListPrices.invalid: " + key + " -> " + ttMpKVal);
      
        } else {
          ttMpKAVal = ttMpKVal.replace(/[^0-9.,]/g, '');
  
          ttMpKBVal = ttMpKAVal.replace(/,/g, '.');
          document.getElementById("i_price_b").value = ttMpKBVal;
          if(document.getElementById(key)) {
            tTmpK = document.getElementById(key);
            // check if tTmpK has atrribute data-prt
            if(tTmpK.getAttribute("data-prti") != null) {
              tDb = "";
              tDison = tTmpK.getAttribute("data-prti");
              console.log("getListPrices.data-prti: " + tDison);
              tDSplit = tDison.split(":");
              tPGPPid = tDSplit[0];
              tPGPPcatid = tDSplit[1];
              tPGPPnm = tDSplit[2];
              tRetPopStr += "<tr><td><div class=\"collection-item crsrPointer\" onclick=\"javascript:setShpPartCatID('" + tPGPPid + "','" + tPGPPcatid + "','" + tPGPPnm + "');\">" + tPGPPnm + "</div></td><td>" + ttMpKBVal + "</td></tr>";
            }
          }
          // ttPartCatID
          // document.getElementById("i_catid").value = ;
          console.log("getListPrices.final: " + key + " -> " + ttMpKBVal);
        }
      }
      if(tRetPopStr != "") {
        tFGPLstr = "<div class=\"collection\"><table style=\"width: 100%\" class=\" txtBold txtBig\">";
        tFGPLstr += "<tr><td>&nbsp;" + stxt[17] + "(s)</td></tr></table>";
        tFGPLstr += "<table style=\"width: 100%\" class=\"txtClrHdr\">";
        tFGPLstr += "<tr><td>" + stxt[404] + "</td><td>" + stxt[18] + "</td></tr>";
        tFGPLstr += tRetPopStr;
        tFGPLstr += "</table></div>";
        // add a button str that calls the doSavePartG function
         tFGPLstr += "<div class=\"cls_button cls_button-medium bkgdBBlue txtSmall\" onclick=\"javascript:doNuSavePartG();\">" + stxt[70] + "</div>";
        
  
        JSSHOP.ui.popAndFillLbox(tFGPLstr);
      } else {
        JSSHOP.ui.doAlertBox("warning", stxt[1016], stxt[1017], "noQvalue");
        if(dvPartsMain.style.display == "block") {
        } else {
        JSSHOP.ui.toggleNuModule('dvTglPSmain','dvPartsMain');
        }
      }
    }
  /*
    // console.log("getListPrices.tmpArrObj: " + JSON.stringify(tmpArrObj));
    console.log("getListPrices: ");
    for (var i = 0; i < dvPartsMain.childNodes.length; i++) {
      console.log("getListPrices: " + dvPartsMain.childNodes[i].nodeName);
      if(dvPartsMain.childNodes[i].nodeName.toUpperCase() === "INPUT" || dvPartsMain.childNodes[i].nodeName.toUpperCase() === "TEXT"){
        console.log("getListPrices: " + dvPartsMain.childNodes[i].value);
      if(dvPartsMain.childNodes[i].value) {
       console.log("getListPrices: " + dvPartsMain.childNodes[i].value);
      }
      }
    }
    */
  }
  
  
  
  
  function doSavePartG() {
    document.getElementById("cat_coid").value = cid;
    tRetPopStr = "";
    tmpArrObj = JSSHOP.shared.urlToArray(JSSHOP.shared.nodesToString(dvPartsMain));
    // loop through the object and get the values
    for (var key in tmpArrObj) {
      if (tmpArrObj.hasOwnProperty(key)) {
        ttMpKVal = tmpArrObj[key];
        // replace everything that is not a number or a period or a comma
        if(ttMpKVal == "" || ttMpKVal == null || ttMpKVal == "undefined") {
         //   console.log("doSavePartG.invalid: " + key + " -> isnull");
      
        } else {
  
          console.log("doSavePartG: " + key + " -> " + ttMpKVal);

  
          ttMpKAVal = ttMpKVal.replace(/[^0-9.,]/g, '');
  
          ttMpKBVal = ttMpKAVal.replace(/,/g, '.');
          document.getElementById("i_price_b").value = ttMpKBVal;
          if(document.getElementById(key)) {
            tTmpK = document.getElementById(key);
            // check if tTmpK has atrribute data-prt
            if(tTmpK.getAttribute("data-prti") != null) {
              tDb = "";
              tDison = tTmpK.getAttribute("data-prti");
              console.log("doSavePartG.data-prti: " + tDison);
              tDSplit = tDison.split(":");
              tPGPPid = tDSplit[0];
              tPGPPcatid = tDSplit[1];
              tPGPPnm = tDSplit[2];
              document.getElementById("cat_title").value = tPGPPnm;
  
              document.getElementById("i_catid").value = tPGPPcatid;
              document.getElementById("i_title").value = tPGPPnm;
              document.getElementById("i_pid").value = tPGPPid;
              document.getElementById("i_agent").value = currPUrlObj.mk;
              document.getElementById("i_vala").value = currPUrlObj.si;
              tccCHCHstR = ":" + tPGPPcatid + ":"; 
              tccCIStr =  ":" + tPGPPid + ":";
  
  
              if((currCoCatsStr.indexOf(tccCHCHstR) != -1) && (currCoCatsStr.indexOf(tccCIStr) != -1)){
                console.log("doSavePartG.tccCHCHstR: " + tccCHCHstR + " and tccCIStr " + tccCIStr + " already in " + currCoCatsStr);
  
              } else {
                console.log("doSavePartG.tccCHCHstR: " + tccCHCHstR + " not in " + currCoCatsStr);
  
  
                if(currCoCatsStr.indexOf(tccCHCHstR) != -1) {

 
                  console.log("doSavePartG.tccCHCHstR: " + tccCHCHstR + " already in " + currCoCatsStr);
                } else {
                  console.log("doSavePartG.tccCHCHstR: " + tccCHCHstR + " not in " + currCoCatsStr);
  
                document.getElementById("cat_pid").value = tccCHCHstR;
                document.getElementById("cat_id").value = tccCHCHstR;
                document.getElementById("cat_uid").value = quid;
                document.getElementById("cat_dadded").value = JSSHOP.getUnixTimeStamp();
                document.getElementById("cat_title").value = tPGPPnm;
                document.getElementById("cat_vala").value = "1";
                document.getElementById("cat_coid").value = cid;
                currCoCatsStr += tccCHCHstR + ":";
                tmpDOs = null;
                tmpDOs = {};
                tmpDOs["knvp"] = JSSHOP.shared.getFrmVals(document["qcat"], "nada");
                oi = getNuDBFnvp("qcat",6,null,tmpDOs);
                doDynQArrComm(tmpEPADDArr, oi["rq"], "includedContent", "doNada");
                }
  
                 
  
                  if(currCoCatsStr.indexOf(tccCIStr) != -1) {
                    console.log("doSavePartG:.tccCIStr " + tccCIStr + " already in " + currCoCatsStr);
                } else {
                  console.log("doSavePartG:.tccCIStr " + tccCIStr + " not in " + currCoCatsStr);

  
                  currCoCatsStr += tPGPPid + ":";
                  document.getElementById("cat_title").value = tPGPPnm;
  
                  document.getElementById("cat_pid").value = tccCHCHstR;
                  document.getElementById("cat_id").value = tPGPPid;
  
                  tmpDOs = null;
                  tmpDOs = {};
                  tmpDOs["knvp"] = JSSHOP.shared.getFrmVals(document["qcat"], "nada");
                  oi = getNuDBFnvp("qcat",6,null,tmpDOs);
                  doDynQArrComm(tmpEPADDArr, oi["rq"], "includedContent", "doNada");
  
   
  
                  document.getElementById("i_catid").value = tPGPPid;
   
                    tmpADOs = null;
                    tmpADOs = {};
                    tmpADOs["knvp"] = JSSHOP.shared.getFrmVals(document["qitem"], "nada");
                    oir = getNuDBFnvp("qitem",6,null,tmpADOs);
                    doDynQArrComm(tmpEPADDArr, oir["rq"], "includedContent", "doNada");
                }
               
  
              }
  
              tRetPopStr += "<tr><td><div class=\"collection-item crsrPointer\" onclick=\"javascript:setShpPartCatID('" + tPGPPid + "','" + tPGPPcatid + "','" + tPGPPnm + "');\">" + tPGPPnm + "</div></td><td>" + ttMpKBVal + "</td></tr>";
  
  
            }
          }
   
        }
   
      }
   
    }
   
    console.log("getListPrices.final: " + JSON.stringify(tmpEPADDArr));
    if(tRetPopStr != "") {
      
    doACFrmQ = nCurrCnxOb();
  doACFrmQ["q"] = "batch" + JSON.stringify(tmpEPADDArr);
  // alert("a: " + JSON.stringify(tmpCAArr));
  doACFrmQ["cb"] = "tFnishPrdAdd";
  doNurQComm(doACFrmQ);
    } else {
      JSSHOP.ui.doAlertBox("warning", stxt[1016], stxt[1017], "noQvalue");
      if(dvPartsMain.style.display == "block") {
      } else {
      JSSHOP.ui.toggleNuModule('dvTglPSmain','dvPartsMain');
      }
    }
  
  }



  function doNuSavePartG() {
    document.getElementById("cat_coid").value = cid;
    tRetPopStr = "";
    tmpSAArrObj = JSSHOP.shared.urlToArray(JSSHOP.shared.nodesToString(dvPartsMain));
    tFullSPartArr = [];
    // loop through the object and get the values
    for (var key in tmpArrObj) {
      if(tmpSAArrObj.hasOwnProperty(key)) {
        ttMpKVal = tmpSAArrObj[key];
        // replace everything that is not a number or a period or a comma
        if(ttMpKVal == "" || ttMpKVal == null || ttMpKVal == "undefined") {
         //   console.log("doSavePartG.invalid: " + key + " -> isnull");
      
        } else {
  
          console.log("doSavePartG: " + key + " -> " + ttMpKVal);

  
          ttMpKAVal = ttMpKVal.replace(/[^0-9.,]/g, '');
  
          ttMpKBVal = ttMpKAVal.replace(/,/g, '.');
          document.getElementById("i_price_b").value = ttMpKBVal;
          if(document.getElementById(key)) {
            tTmpK = document.getElementById(key);
            // check if tTmpK has atrribute data-prt
            if(tTmpK.getAttribute("data-prti") != null) {
              tDb = "";
              tDison = tTmpK.getAttribute("data-prti");
              tFullSPartArr.push(tDison + ":" + ttMpKBVal);
              console.log("doNUSavePartG.data-prti: " + tDison);
            }
          }
        }
      }
    }
console.log("doNUSavePartG.tFullSPartArr: " + JSON.stringify(tFullSPartArr));
document.getElementById("cat_vala").value = "1";
document.getElementById("cat_coid").value = cid;
document.getElementById("cat_uid").value = quid;
document.getElementById("cat_dadded").value = JSSHOP.getUnixTimeStamp();
for (var i = 0; i < tFullSPartArr.length; i++) {
  tFSplit = tFullSPartArr[i].split(":");
  tPGPPid = tFSplit[0];
  tPGPPcatid = tFSplit[1];
  tPGPPnm = tFSplit[2];

  tPGPPFlnm = tFSplit[2] + " " + stxt[569] + " " + currPUrlObj.make + " " + currPUrlObj.series;
  tPGPPval = tFSplit[3];
  tccCHCHstR = ":" + tPGPPcatid + ":"; 
  tccCIStr =  ":" + tPGPPid + ":";

  document.getElementById("i_catid").value = tPGPPcatid;
  document.getElementById("i_title").value = tPGPPFlnm;
  document.getElementById("i_desc").value = tPGPPFlnm;

  document.getElementById("i_pid").value = tPGPPid;
  document.getElementById("i_agent").value = currPUrlObj.mk;
  document.getElementById("i_vala").value = currPUrlObj.si;
  document.getElementById("i_price_b").value = tPGPPval;
  tmpADOs = null;
  tmpADOs = {};
  tmpADOs["knvp"] = JSSHOP.shared.getFrmVals(document["qitem"], "nada");
  oir = "";
  oir = getNuDBFnvp("qitem",6,null,tmpADOs);
  doDynQArrComm(tmpEPADDArr, oir["rq"], "includedContent", "doNada");
  if(currCoCatsStr.indexOf(tccCHCHstR) != -1) {
    console.log("doNUSavePartG.tccCHCHstR: " + tccCHCHstR + " already in " + currCoCatsStr);
  } else {
    document.getElementById("cat_pid").value = tPGPPcatid;
    document.getElementById("cat_id").value = tPGPPcatid;
    document.getElementById("cat_title").value = tPGPPnm;

    currCoCatsStr += tccCHCHstR;
    tmpDOs = null;
    tmpDOs = {};
    tmpDOs["knvp"] = JSSHOP.shared.getFrmVals(document["qcat"], "nada");
    oi = getNuDBFnvp("qcat",6,null,tmpDOs);
    doDynQArrComm(tmpEPADDArr, oi["rq"], "includedContent", "doNada");
  }
  if(currCoCatsStr.indexOf(tccCIStr) != -1) {
    console.log("doNUSavePartG:.tccCIStr " + tccCIStr + " already in " + currCoCatsStr);
  } else {
    currCoCatsStr += tPGPPid + ":";
    document.getElementById("cat_title").value = tPGPPnm;
    document.getElementById("cat_pid").value = tPGPPcatid;
    document.getElementById("cat_id").value = tPGPPid;
    tmpDOs = null;
    tmpDOs = {};
    tmpDOs["knvp"] = JSSHOP.shared.getFrmVals(document["qcat"], "nada");
    oi = getNuDBFnvp("qcat",6,null,tmpDOs);
    doDynQArrComm(tmpEPADDArr, oi["rq"], "includedContent", "doNada");
  }
}
console.log("doNUSavePartG.final: " + JSON.stringify(tmpEPADDArr));
doACFrmQ = nCurrCnxOb();
doACFrmQ["q"] = "batch" + JSON.stringify(tmpEPADDArr);
// alert("a: " + JSON.stringify(tmpCAArr));
doACFrmQ["cb"] = "tFnishPrdAdd";
doNurQComm(doACFrmQ);
}

var tFnshSvsCatSv = function(theTFon) {
  tbtSar = [];
  tbtSObj = {};
  tbtSObj["cls"] = "noQvalue";
  tbtSObj["txt"] = "noQvalue";
  tbtSObj["cb"] = "javascript:eindex('aa-edit-svs-categories', 'pid=aa-edit-svs-categories&cid=" + cid + "&ttime=" + JSSHOP.getUnixTimeStamp() + "');";

  tbtSar.push(tbtSObj);
  JSSHOP.ui.doAlertBox("success", stxt[605] + " -ha", stxt[606], tbtSar);
    console.log("tFnshSvsCatSv.admin: " + JSON.stringify(theTFon));
    };
               
function doSvsCatSave() {
  tmpCatSvArr = [];
  canSave = "no";
  theTrType = "5";
  document.getElementById("cat_vala").value = "1";
  document.getElementById("cat_coid").value = cid;
  document.getElementById("cat_uid").value = quid;
  document.getElementById("cat_dadded").value = JSSHOP.getUnixTimeStamp();

  // get all checked checkboxes and add to array
  tChkArr = [];
  tmpSAArrObj = JSSHOP.shared.urlToArray(JSSHOP.shared.nodesToString(dvPartsMain));
  tChkArrStr = "";
  for (var i = 0; i < tChkArr.length; i++) {
    tChkArrStr += tChkArr[i] + ",";
  }
  for (var key in tmpSAArrObj) {
    if(tmpSAArrObj.hasOwnProperty(key)) {
      ttMpKVal = tmpSAArrObj[key];
      // replace everything that is not a number or a period or a comma
      if(ttMpKVal == "" || ttMpKVal == null || ttMpKVal == "undefined") {
       //   console.log("doSavePartG.invalid: " + key + " -> isnull");
    
      } else {
       //  canSave = "no";
        if(document.getElementById(key)) {
          tTmpK = document.getElementById(key);
          // if tmpK is a checkbox
          if(tTmpK.type == "checkbox") {
            theTTkndval = tTmpK.value;
            if(theTTkndval.indexOf(":") != -1) {
            theTkndArr = theTTkndval.split(":");
            theTval = theTkndArr[0];
            theTid = theTkndArr[1];
            theTrType = theTkndArr[2];
            } else {
              theTval = theTTkndval;
              
              theTrType = "5";
            } 
            document.getElementById("cat_rtype").value = "5";
 
            
            theTTkndStr = ":" + theTval + ":";
            console.log("doSvsCatSave.tTmpK.value: " + key + " -> " + ttMpKVal);
            if(tTmpK.checked) {
              console.log("doSvsCatSave.tTmpK.checked.toAdd: " + key + " -> " + ttMpKVal);
              tChcbCNm = currPartsObj["pcats"]["pc" + theTval];
              console.log("doSvsCatSave.tTmpK.theTval: " + theTval);
              document.getElementById("cat_pid").value = theTval;
              document.getElementById("cat_id").value = theTval;
              document.getElementById("cat_title").value = tChcbCNm;
              tOldDescInp = document.getElementById("cat_desc");  
              tOldCDescID = "inpOldDpc" + theTval;
              tOldDescVal = document.getElementById(tOldCDescID).value;
              tNewDescId = "dvOldDpc" + theTval;
              tNewDescInp = document.getElementById(tNewDescId);
              tNewDescVal = tNewDescInp.innerHTML;
              console.log("doSvsCatSave.DESCS: "  +  tOldCDescID + ":" + tOldDescVal + " -> " + tNewDescId + ":" + tNewDescVal);
              if((tOldDescVal == tNewDescVal) && (currCoCatsStr.indexOf(theTTkndStr) != -1)) {
                console.log("doSvsCatSave.canDoNada: "  +  tOldCDescID + ":" + tOldDescVal + " -> " + tNewDescId + ":" + tNewDescVal);

               canDoNada = "yes";
              } else {
            
                canSave = "yes";
              }
              document.getElementById("cat_desc").value = tNewDescVal;

              if(theTrType == "10") {
                console.log("doSvsCatSave.theTrType10: "  +  tOldCDescID + ":" + tOldDescVal + " -> " + tNewDescId + ":" + tNewDescVal);

                document.getElementById("cat_rtype").value = "5";
                canSave = "yes";
              } 
         

              if(currCoCatsStr.indexOf(theTTkndStr) != -1) {
                console.log("doSvsCatSave.currCoCatsStr indexOf: "  +  theTTkndStr);


                

                  tmpAsDOs = null;
                  tmpAsDOs = {};
                  tmpAsDOs["ws"] = "where _id=?";
                  tmpAsDOs["wa"] = [theTid];
                  // set qcat _id to the Tval
                  JSSHOP.shared.setFrmFieldVal("qcat", "_id", theTid);
  
                  tmpAsDOs["knvp"] = JSSHOP.shared.getFrmVals(document["qcat"], "nada");
                  oi = getNuDBFnvp("qcat",7,null,tmpAsDOs);
                  doDynQArrComm(tmpCatSvArr, oi["rq"], "includedContent", "doNada");
              
                // tChkArr.push(tTmpK.value);
              } else {
                console.log("doSvsCatSave.currCoCatsStr not indexOf: "  +  theTTkndStr);

                document.getElementById("cat_rtype").value = "5";

                tChcbCNm = currPartsObj["pcats"]["pc" + theTval];
                console.log("doSvsCatSave.tTmpK.checked.toAdd: " + key + " -> " + theTval + " -> " + tChcbCNm);
                document.getElementById("cat_pid").value = theTval;
                document.getElementById("cat_id").value = theTval;
                document.getElementById("cat_title").value = tChcbCNm;
                tmpAsDOs = null;
                tmpAsDOs = {};
                tmpAsDOs["knvp"] = JSSHOP.shared.getFrmVals(document["qcat"], "nada");
                oi = getNuDBFnvp("qcat",6,null,tmpAsDOs);
                doDynQArrComm(tmpCatSvArr, oi["rq"], "includedContent", "doNada");
                canSave = "yes";
              }
              // tChkArr.push(tTmpK.value);
            } else {
              if(currCoCatsStr.indexOf(theTTkndStr) != -1) {
                document.getElementById("cat_rtype").value = "10";
                tmpQaDOs = null;
                tmpQaDOs = {};
                tmpQaDOs["ws"] = "where _id=?";
                tmpQaDOs["wa"] = [theTid];
                // set qcat _id to the Tval
                JSSHOP.shared.setFrmFieldVal("qcat", "_id", theTval);

                tmpQaDOs["knvp"] = JSSHOP.shared.getFrmVals(document["qcat"], "nada");
                oia = getNuDBFnvp("qcat",7,null,tmpQaDOs);
                doDynQArrComm(tmpCatSvArr, oia["rq"], "includedContent", "doNada");
                console.log("doSvsCatSave.tTmpK.checked.toRemove: " + key + " -> " + ttMpKVal);
                canSave = "yes";
                document.getElementById("cat_rtype").value = "5";

              }
            }
          }
        }
        tPGPPcatid = "";
        tPGPPnm = "";
        console.log("doSvsCatSave: " + key + " -> " + ttMpKVal);
      }
    }
  }




if(canSave == "yes") {
  console.log("doSvsCatSave.canSave: " + JSON.stringify(tmpCatSvArr));

  doACFrmQ = nCurrCnxOb();
  doACFrmQ["q"] = "batch" + JSON.stringify(tmpCatSvArr);
  doACFrmQ["cb"] = "tFnshSvsCatSv";
  doNurQComm(doACFrmQ);
} else {
  console.log("doSvsCatSave.canSave: " + canSave);
  JSSHOP.ui.doAlertBox("warning", stxt[906], stxt[908], "noQvalue");
  return;
} 

}
  
// this doShpPrtsLst function is the same as doPartsList but it is used as shops to add parts to the list

JSSHOP.admin.doShpPrtsLst = function(theTPDiv) {
    tCatArrStr = "";
    tCurrUmake = "";
    tCurrUseries = "";
    tCurrUmodel = "";
    tCurrUpart = "";
    tCurrUyear = "";
    tImpVstr = "";
    currDynMenuArr = null;
    currDynMenuArr = "";
    currDynMenuArr = [];
 
    mbrdrCls = "rtable brdrClrHdr"; 
    if(theTPDiv == "noQvalue") {
    mbrdrCls = "";
    }
    tPSBstr = "<table style=\"margin: 0 auto;width:90%\" align=\"center\" class=\"txtClrHdr" + mbrdrCls + "\">";
    tPSBstr += "<tr><td>";
    tPSBstr += "<div  class=\"slmtable bkgdClrNrml\" id=\"dvDoPSWrds\" style=\"margin: 0 auto;text-align:left\"></div>";
    
    tPSBstr += "<input type=\"hidden\" id=\"inpImpTParts\" value=\"\">";
    tPSBstr += "</td></tr>";
    
    tPSBstr += "<tr><td>";
 
    tPSBstr += "</td></tr>";
    
    tPSBstr += "<tr><td>&nbsp;</td></tr>";
     
    
    
    
    
    tPSBstr += "<tr><td>";
    
 
    tPSBstr += "<table style=\"margin: 0 auto;\" width=\"98%\" align=\"center\"><tr>";
    
    tPSBstr += "<td style=\"width:100%\">";
  
    tdITPplhldr = "<span class=\"txtSmall txtClrGrey\">Ex: Alternador</span>";
 
    if(JSSHOP.shared.isMobile()) {
        // tPSBstr += "<div name=\"inpTParts\"  id=\"inpTParts\"  class=\"form-control brdrClrRed bkgdClrNrml\" style=\"min-height:20px;\" contenteditable=\"true\"  placeholder=\"Parts\" value=\"\" onfocus=\"javascript:this.scrollIntoView({behavior: 'smooth', block: 'start'});doInpTFocus();\"  spellckeck=\"false\" data-ms-editor=\"false\">" + tdITPplhldr + "</div>";
    } else {
       //  tPSBstr += "<div name=\"inpTParts\"  id=\"inpTParts\"  class=\"form-control brdrClrRed bkgdClrNrml\" style=\"min-height:20px;\" contenteditable=\"true\"  placeholder=\"Parts\" value=\"\" onfocus=\"javascript:doInpTFocus();\"  spellckeck=\"false\" data-ms-editor=\"false\">" + tdITPplhldr + "</div>";
    }
    tPSBstr += "<div name=\"inpTParts\"  id=\"inpTParts\"  class=\"form-control brdrClrRed bkgdClrNrml\" style=\"min-height:20px;display:none;visibility:hidden;\" contenteditable=\"true\"  placeholder=\"Parts\" value=\"\" onfocus=\"javascript:doInpTFocus();\"  spellckeck=\"false\" data-ms-editor=\"false\">" + tdITPplhldr + "</div>";
    tPSBstr += stxt[561] + "<br>" + stxt[562];  
 
    tPSBstr += "</td>";
    // tPSBstr += "<td valign=\"top\">&nbsp;&nbsp; &nbsp;</td>";
    // tPSBstr += "<td valign=\"top\"><button class=\"brdrNone crsrPointer bkgdClrWhite\" onclick=\"javascript:inpTParts.value='';if(inpTParts.innerText)inpTParts.innerText='';JSSHOP.shared.closePartsList();JSSHOP.shared.doPartsWords(6,'prti');\"><i class=\"material-icons txtBigger txtClrDlg\" title=\"delete\">&#xe14c;</i></button></td>";
    
    tJSstr = "JSSHOP.ui.tglPrefModule('dvTglPSmain','dvPartsMain','tglPartsMain');";
    
    // tJSstr = "JSSHOP.ui.tglPrefModule('dvTglPSmain','dvPCmain','tglPrtsMain');";
    tPSBstr += "<td valign=\"top\" style=\"max-height: 42px\"></td>";
    
    tPSBstr += "</tr>";
    tPSBstr += "</table>";
    
    tPSBstr += "</td></tr>";
    
    tPSBstr += "<tr><td>&nbsp;</td></tr>";
    
    tPSBstr += "<tr><td valign=\"top\">";
    // <button id="btnPSearch" class="form-control"><ti data-ison="stxt[78]" data-desc="btn_search" onclick="javascript:qlDoNuPlSearch('tmp_qv','dvPSList',qlShowPlacesRes);">Search</ti></button>
    // tPSBstr += "<button class=\"form-control cls_hoover slmtable txtSmall bkgdClrRed crsrPonter txtClrWhite brdrClrHdr\" onclick=\"javascript:JSSHOP.shared.doPartsSearch('inpTParts')\">";
     // tPSBstr += "<button class=\"cls_button cls_button-medium\" onclick=\"javascript:JSSHOP.shared.doPartsSearch('inpTParts')\">";
    
    // tPSBstr += "<i class=\"nav-material-icons coll-menu-item txtClrWhite\" title=\"search\" style=\"vertical-align:center\">&#xe8b6;</i>&nbsp;<span data-ison=\"\" data-desc=\"btn_search\"  style=\"vertical-align:center\" class=\"txtBold txtClrWhite\">" + stxt[78] + "</span></button>
    tPSBstr += "</td></tr>";
    tPSBstr += "<tr><td>";
    
    
    if(currUrlArr.prti != null) {
    
        // tmpDvOLStr = "<div><a href=\"javascript:JSSHOP.ads.doPgLnkMedia('ebay',30);\">Ebay</a> | <a href=\"javascript:JSSHOP.ads.doPgLnkMedia('ggl',30);\")\">Google</a></div>";
       //  tPSBstr += tmpDvOLStr;
    // shout out stuff here!!! 
    // tPSBstr += "&nbsp; &nbsp; &nbsp;<img class=\"slmtable icndbtn brdrCldrDlg txtClrHdr\" style=\"margin-top: 5px;font-size:16px;margin-right:6px;\" alt=\"speaker\" title=\"speaker\" src=\"images/misc/shout_out.gif\"></img>  <a href=\"javascript:JSSHOP.shared.setListing();\" class=\"txtDecorNone\">List this Item</a>";
    }
    tPSBstr += "</td></tr>";
    tPSBstr += "<tr><td>&nbsp;</td></tr>";
    tPSBstr += "<tr><td><div class=\"crsrPointer txtBold txtClrRed bkgdClrNrml\" nowrap=\"nowrap\" onclick=\"javascript:" + tJSstr + "\">" + stxt[512];
    tPSBstr += "<div id=\"dvTglPSmain\" style=\"float:right\"><i class=\"material-icons txtClrDlg\" title=\"expand_more\">&#xe5cf;</i></div></div></td></tr>";
    
    
    tPSBstr += "<tr><td id=\"dvPartsMain\" style=\"visibility:hidden;display:none\" class=\"bkgdClrWhite\">";
    
    
    
    
    
    tEPobj = currPartsObj;
    tPPobj = tEPobj.pcats;
    
    tCatArrStr += tPSBstr;
    
    
    thePPBrdrClr = "brdrClrRed";
    thePPTextClr = "txtClrRed";
    
    
    
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
    
    tCatArrStr += "<div style=\"word-wrap:break-word;word-break: break-word;\" class=\"crsrPointer\" onclick=\"javascript:" + tJSstr + "\"><table class=\"collection\"  cellpadding=\"0px\" cellspacing=\"0px\">";
    tCatArrStr += "<tr><td><img src=\"images/misc/" + gkey + ".gif\" class=\"slmtable " + thePPBrdrClr + "\" style=\"max-width:30px;margin:0px;\"></td>";
    tCatArrStr += "<td class=\"txtSmall txtBold " + thePPTextClr + "\" style=\"word-wrap:break-word;word-break: break-word;text-align: left;width:100%\">&nbsp;" + tPPobj[gkey] + "</td>";
    
    tCatArrStr += "<td><div id=\"dvTglPC" + gkey + "\" class=\"icnbtn crsrPointer\"  style=\"float:right\">";
    tCatArrStr += "<i class=\"small-material-icons\" title=\"expand_more\">&#xe5cf;</i></div></td></tr></table></div>";
    
    // javascript:JSSHOP.ui.tglPrefModule('dvTglPCpc1','dvPCpc1','tglPrtspc1')
    
    
    
    
    
    if(tEPobj.pprts[gkey].pts){
    tCatArrStr += "<div style=\"display:none;visibility:hidden;word-wrap:break-word;word-break: break-word;\" class=\"collection\" id=\"dvPC" + gkey + "\">";
    tCatArrStr += "<table style=\"width:100%\" class=\"collection\" cellpadding=\"0px\" cellspacing=\"0px\">";
    tCatArrStr += "<tr><td>" + stxt[404] + "</td><td>" + stxt[18] + "</td></tr>";
    
    
    
    tCatPtsobj = tEPobj.pprts[gkey].pts;
    for(var pcgkey in tCatPtsobj) {
    tCleanName = tCatPtsobj[pcgkey].n.replace(/[^a-zA-Z0-9- ]/g, "");
    // currCstmQstr += " " + tCatPtsobj[pcgkey].n;
    tmpFPSstr = "&part=" + tCatPtsobj[pcgkey].n + "&prti=" + tCatPtsobj[pcgkey].pi + "&q=" + encodeURIComponent(currCstmQstr + " " + tCatPtsobj[pcgkey].n);
    tDataPrdStr = tCatPtsobj[pcgkey].id + ":" + tCatPtsobj[pcgkey].pi + ":" + tCleanName;
     // create a new string with an input box to set the part price
       tCatPrtNameStr = "<div  style=\"word-wrap:break-word;word-break: break-word;\"><a  class=\"collection-item\" href=\"javascript:document.location.href=JSSHOP.shared.doPartDynL('" + tCatPtsobj[pcgkey].id + "','" + tCatPtsobj[pcgkey].n + "');JSSHOP.ads.setPrtsPrefCC('part','" + tCatPtsobj[pcgkey].n + "');JSSHOP.ads.setPrtsPrefCC('prti','" +  + tCatPtsobj[pcgkey].id + "');\" class=\"collection-item crsrPointer\">" + tCatPtsobj[pcgkey].id + " : " + tCatPtsobj[pcgkey].n + "</a></div>";
       tCatPartTble = "<tr><td style=\"width:100%\">" + tCatPrtNameStr + "</td><td><input name=\"inpPCPrice" + tCatPtsobj[pcgkey].id + "\" id=\"inpPCPrice" + tCatPtsobj[pcgkey].id + "\" type=\"text\" class=\"form-control\" style=\"width:100px\" value=\"\" data-prti=\"" + tDataPrdStr + "\" data-ms-editor=\"false\" spellcheck=\"false\"></td></tr>";
       tCatArrStr += tCatPartTble;
     }
    tCatArrStr += "</table></div>";
    }
    
    if(thePPBrdrClr == "brdrClrRed") {
    thePPBrdrClr = "brdrClrHdr";
    thePPTextClr = "txtClrHdr";
    } else {
    thePPBrdrClr = "brdrClrRed";
    thePPTextClr = "txtClrRed";
    }
     
    } // end for gkey in tPPobj
    
    if(cid == 0) {
    // alert("cid: " + cid);
    currMenuArr = currDynMenuArr;
    // doProdCatTreeLoad();
    // doMainTreeLoad();
    // doCatTreeLoad();
    // doShopMnuLd("nada",JSON.stringify(currDynMenuArr),null);
    
    } else {
    // doShopMnuLd("nada",JSON.stringify(currMenuArr),null);
    }
    tCatArrStr += "</td></tr></table>";
    // create a button that calls the getListPrices function
 /*
 <div id="dvUploadBtn" style="display:block;visibility:visible;margin-right:10px; text-align:right"><button id="uploadBtn" class="cls_button cls_button-medium bkgdBBlue txtSmall"><i class="nav-material-icons coll-menu-item txtClrWhite" style="margin-right:4px;">?</i><ti data-ison="stxt[70]" data-desc="btn_upload">Adicionar</ti></button></div>
    */
    tCatArrStr += "<div id=\"dvAddIArr\" style=\"display:block;visibility:visible;margin-bottom: 10px; text-align:center\" onclick=\"javascript:getListPrices();\"><button id=\"btnAddIArr\" class=\"cls_button cls_button-medium bkgdBBlue txtSmall\"><i class=\"nav-material-icons coll-menu-item txtClrWhite\" style=\"margin-right:4px;\">&#xe145;</i><ti data-ison=\"stxt[70]\" data-desc=\"btn_add\">Adicionar</ti></button></div>";

    if(theTPDiv == "noQvalue") {
    return tCatArrStr;
    } else {
    theTPDiv.innerHTML = tCatArrStr;
    // fnshPartsList();
    } // end theTPDiv is not noQvalue
    // return tCatArrStr;
    // JSSHOP.ui.popAndFillLbox(tCatArrStr);
    };  // end of doShpPrtsLst
    

    setAPartsBox = function() {
      console.log("setAPartsBox: " + pid + " " + JSON.stringify(currPartsObj) + " " + pid.indexOf("-edit-"));
   
  tTmpPartsL = JSSHOP.admin.doShpPrtsLst("noQvalue");
   
   
  document.getElementById("dvATBPList").innerHTML = tTmpPartsL;
   
   
  JSSHOP.shared.fnshPartsList();
  };

  JSSHOP.admin.doSvsCatEdt = function(ttGkey) { 
    console.log("doSvsCatEdt: " + ttGkey)

    cleanttGk = ttGkey.replace("pc", "");
   for (var isvcc = 0; isvcc < currMenuArr.length; isvcc++) {
    tCMSVCObj =  currMenuArr[isvcc];
    console.log("doSvsCatEdt: " + tCMSVCObj.cat_pid + " . " + cleanttGk)
    if((tCMSVCObj.cat_pid == cleanttGk) && (tCMSVCObj.cat_coid == cid)) {
      eindex("aa-edit-svs-category", "pid=aa-edit-svs-category&cid=" + cid + "&catid=" + tCMSVCObj._id);
      return;
    }
  }
  };
  JSSHOP.admin.doCHbUIFix = function(tCHFxElem) {
    tELemID = tCHFxElem.id;
    tElemVal = tCHFxElem.value;
    tTeglEstr = tELemID.replace("chkPSvcpc", "");
    tTglAEstr = "dvPCpc" + tTeglEstr;
    tTglDvstr = "dvTglPCpc" + tTeglEstr;
    tTglBEdiStr = "dvTglEdpc" + tTeglEstr;
     
    // if the element is checked
    if(tCHFxElem.checked) {
    //  JSSHOP.ui.showHideElement(tTglAEstr, "show");
    if(tElemVal.indexOf(":") != -1) {
      JSSHOP.ui.showHideElement(tTglBEdiStr, "show");
    } else {
   JSSHOP.ui.showHideElement(tTglDvstr, "show");
    }
   
   tTDiv = document.getElementById(tTglDvstr);
   theCapt = tTDiv.innerHTML;
   if(theCapt.indexOf("expand_more") == -1) {
  //  JSSHOP.ui.showHideElement(tTglAEstr, "show");
  }
  } else {
      // alert("no: " + tChckddId);
       // JSSHOP.ui.tglPrefModule('dvTglPC' + tTglBtnEleStr,'dvPC' + tTglBtnEleStr,'tglPrts' + tTglBtnEleStr);
      JSSHOP.ui.showHideElement(tTglDvstr, "hide");

      JSSHOP.ui.showHideElement(tTglAEstr, "hide");
      JSSHOP.ui.showHideElement(tTglBEdiStr, "hide");
  }


  };


  JSSHOP.admin.doShpSvcLst = function(theTPDiv) {
    // this is the same as doShpPrtsLst but it is used to add services to the list
    tCatArrStr = "";
    tCurrUmake = "";
    tCurrUseries = "";
    tCurrUmodel = "";
    tCurrUpart = "";
    tCurrUyear = "";
    tImpVstr = "";
    currDynMenuArr = null;
    currDynMenuArr = "";
    currDynMenuArr = [];
    mbrdrCls = "rtable brdrClrHdr";
    if(theTPDiv == "noQvalue") {
    mbrdrCls = "";
    }
    tPSBstr = "<table style=\"margin: 0 auto;width:90%\" align=\"center\" class=\"txtClrHdr" + mbrdrCls + "\">";
    tPSBstr += "<tr><td>";
    tPSBstr += "<div  class=\"slmtable bkgdClrNrml\" id=\"dvDoPSWrds\" style=\"margin: 0 auto;text-align:left\"></div>";
    tPSBstr += "<input type=\"hidden\" id=\"inpImpTParts\" value=\"\">";
    tPSBstr += "</td></tr>";
    tPSBstr += "<tr><td>";
    tPSBstr += "</td></tr>";
    tPSBstr += "<tr><td>&nbsp;</td></tr>";
    tPSBstr += "<tr><td>";
    tPSBstr += "<table style=\"margin: 0 auto;\" width=\"98%\" align=\"center\"><tr>";
    tPSBstr += "<td style=\"width:100%\">";
    tdITPplhldr = "<span class=\"txtSmall txtClrGrey\">Ex: Alternador</span>";
    if(JSSHOP.shared.isMobile()) {
    // tPSBstr += "<div name=\"inpTParts\"  id=\"inpTParts\"  class=\"form-control brdrClrRed bkgdClrNrml\" style=\"min-height:20px;\" contenteditable=\"true\"  placeholder=\"Parts\" value=\"\" onfocus=\"javascript:this.scrollIntoView({behavior: 'smooth', block: 'start'});doInpTFocus();\"  spellckeck=\"false\" data-ms-editor=\"false\">" + tdITPplhldr + "</div>";
    }
    else {
    //  tPSBstr += "<div name=\"inpTParts\"  id=\"inpTParts\"  class=\"form-control brdrClrRed bkgdClrNrml\" style=\"min-height:20px;\" contenteditable=\"true\"  placeholder=\"Parts\" value=\"\" onfocus=\"javascript:doInpTFocus();\"  spellckeck=\"false\" data-ms-editor=\"false\">" + tdITPplhldr + "</div>";
    }
    tPSBstr += "<div name=\"inpTParts\"  id=\"inpTParts\"  class=\"form-control brdrClrRed bkgdClrNrml\" style=\"min-height:20px;display:none;visibility:hidden;\" contenteditable=\"true\"  placeholder=\"Parts\" value=\"\" onfocus=\"javascript:doInpTFocus();\"  spellckeck=\"false\" data-ms-editor=\"false\">" + tdITPplhldr + "</div>";
    tPSBstr += stxt[908];
    tPSBstr += "</td>";
    tJSstr = "JSSHOP.ui.tglPrefModule('dvTglPSmain','dvPartsMain','tglPartsMain');";
    tPSBstr += "<td valign=\"top\" style=\"max-height: 42px\"></td>";
    tPSBstr += "</tr>";
    tPSBstr += "</table>";
    tPSBstr += "</td></tr>";
    tPSBstr += "<tr><td>&nbsp;</td></tr>";
    tPSBstr += "<tr><td valign=\"top\">";
    tPSBstr += "</td></tr>";
    tPSBstr += "<tr><td>";
    if(currUrlArr.prti != null) {
    }
    tPSBstr += "</td></tr>";
    tPSBstr += "<tr><td>&nbsp;</td></tr>";
    tPSBstr += "<tr><td><div class=\"crsrPointer txtBold txtClrRed bkgdClrNrml\" nowrap=\"nowrap\" onclick=\"javascript:" + tJSstr + "\">" + stxt[906];
    tPSBstr += "<div id=\"dvTglPSmain\" style=\"float:right\"><i class=\"material-icons txtClrDlg\" title=\"expand_more\">&#xe5cf;</i></div></div></td></tr>";
    tPSBstr += "<tr><td id=\"dvPartsMain\" style=\"visibility:hidden;display:none\" class=\"bkgdClrWhite\">";
    tEPobj = currPartsObj;
    tPPobj = tEPobj.pcats;
    tCatArrStr += tPSBstr;
    thePPBrdrClr = "brdrClrRed";
    thePPTextClr = "txtClrRed";
    for(var gkey in tPPobj) {
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
  
    tCatArrStr += "<div  style=\"word-wrap:break-word;word-break: break-word;\"><table  class=\"collection\"  cellpadding=\"0px\" cellspacing=\"0px\"  style=\"width:100%\">";
    tCatArrStr += "<tr><td>";
    // add a checkbox here
    tCatArrStr += "<input type=\"checkbox\" id=\"chkPSvc" + gkey + "\" name=\"chkPSvc" + gkey + "\" value=\"" + gkey.replace("pc","") + "\" onclick=\"javascript:JSSHOP.admin.doCHbUIFix(this);\" class=\"txtBig\">";
    // tCatArrStr += "<input type=\"checkbox\" id=\"chkPSvc" + gkey + "\" name=\"chkPSvc" + gkey + "\" value=\"" + gkey.replace("pc","") + "\">";
    tCatArrStr += "<input type=\"hidden\" id=\"inpOldD" + gkey + "\" name=\"inpOldD" + gkey + "\" value=\"" + gkey.replace("pc","") + "\">";
   
    tCatArrStr += "</td>";
    tCatArrStr += "<td><img src=\"images/misc/" + gkey + ".gif\" class=\"slmtable " + thePPBrdrClr + "\" style=\"max-width:30px;margin:10px;\"></td>";
    tCatArrStr += "<td style=\"width:100%\"><div class=\"txtSmall txtBold " + thePPTextClr + "\" style=\"word-wrap:break-word;word-break: break-word;text-align: left;width:100%\">" + tPPobj[gkey] + "<div></td>";

    tCatArrStr += "<td nowrap=\"nowrap\"><div nowrap=\"nowrap\" onclick=\"javascript:JSSHOP.admin.doSvsCatEdt('" + gkey + "');\" id=\"dvTglEd" + gkey + "\" class=\"icnbtn crsrPointer\"  style=\"float:right;visibility:hidden;display:none;\">";
    tCatArrStr += "<i class=\"small-material-icons\" title=\"edit\">&#xe3c9;</i> Edit</div></td>";

    tCatArrStr += "<td><div id=\"dvTglPC" + gkey + "\" class=\"icnbtn crsrPointer\"  style=\"float:right;visibility:hidden;display:none;\">";
    tCatArrStr += "<i class=\"small-material-icons\" title=\"ccheck\">&#xe5ca;</i></div></td>";

    tCatArrStr += "</tr></table></div>";

    tCatArrStr += "<div style=\"display:none;visibility:hidden;word-wrap:break-word;word-break: break-word;\" class=\"collection\" id=\"dvPC" + gkey + "\">";
    tDefCatStr = tPPobj[gkey] + " " + stxt[912] + "<br>" + tPPobj[gkey] + " " + stxt[913];


   tChdrStr = c_header.value;
    tCsplyStr = "";
    if(tChdrStr.indexOf("1000") != -1) {
      tChdrStr += " all makes";
      tDefCatStr += " " + stxt[914];
    } else { // not 1000

    if(tChdrStr.indexOf(":") != -1) {
        tChdrSplit = tChdrStr.split(":");   
        tCsplyLen = tChdrSplit.length;
        tCinci = 0;

        while(tCinci < tCsplyLen) {
            if(tChdrSplit[tCinci] > 0) {
            // get make name from tChdrSplit[tCinci]
            tMknamed = objAllMakes["m" + tChdrSplit[tCinci]]["n"];
             tCsplyStr += tMknamed + " ";
             tDefCatStr += tMknamed + " ";
            tCinci++;
            } else {
            tCsplyStr += tChdrSplit[tCinci] + " ";
            tDefCatStr += tChdrSplit[tCinci] + " ";
            tCinci++;
            }
        }
     } else { // not :
        tCsplyStr += tChdrStr + " ";
        tDefCatStr += tChdrStr + " ";
     }
} // end else if(tChdrStr.indexOf("1000") != -1)

 
    tCatArrStr += "<div id=\"dvOldD" + gkey + "\" name=\"dvOldD" + gkey + "\" class=\"form-control\" style=\"min-height:20px;\" contenteditable=\"true\"  placeholder=\"Description\" value=\"\"  spellckeck=\"false\" data-ms-editor=\"false\">" +  tDefCatStr + "</div>";
    tCatArrStr += "</div>";
    /*
    if(tEPobj.pprts[gkey].pts){
 
    for(var pcgkey in tCatPtsobj) {
    tCleanName = tCatPtsobj[pcgkey].n.replace(/[^a-zA-Z0-9- ]/g, "");
     
    }
    tCatArrStr += "</table></div>";
    }
    */



    if(thePPBrdrClr == "brdrClrRed") {
    thePPBrdrClr = "brdrClrHdr";
    thePPTextClr = "txtClrHdr";
    }
    else {
    thePPBrdrClr = "brdrClrRed";
    thePPTextClr = "txtClrRed";
    }
    }
    if(cid == 0) {
    currMenuArr = currDynMenuArr;
    }
    else {
    }
    tCatArrStr += "</td></tr></table>";
    tCatArrStr += "<div id=\"dvAddIArr\" style=\"display:block;visibility:visible;margin-bottom: 10px; text-align:center\" onclick=\"javascript:doSvsCatSave();\"><button id=\"btnAddIArr\" class=\"cls_button cls_button-medium txtSmall\"><i class=\"nav-material-icons coll-menu-item txtClrWhite\" style=\"margin-right:4px;\">&#xe145;</i><ti data-ison=\"stxt[21]\" data-desc=\"btn_save\">Guardar</ti></button></div>";
    if(theTPDiv == "noQvalue") {
    return tCatArrStr;
    }
    else {
    theTPDiv.innerHTML = tCatArrStr;
    }
    };
  

JSSHOP.admin.getAddPartsBox = function(aw, bw,cw) {
  // remove all elements from dvPartsList


      console.log("getAPartsBox: " + aw + " " + bw + " " + cw);
  // includedContent.innerHTML = "";
  // alert("getPartsBox: " + cw);
  tCatArrStr = "";
  currPartsObj = null;
   
  currPartsObj = JSON.parse(bw);
  boolShwPrtsB = "no";
  
   
  dvPartsList.innerHTML = "";
  tIMtglbObj = null;
  tIMtglbObj = "";
  tIMtglbObj = JSSHOP.ui.nTglBxOb();
  
  console.log("getPartsBox.boolShwPrtsB.edit: " + pid);
  tIMtglbObj["ttl"] = stxt[17]; // the toggle box title
  tIMtglbObj["dvid"] = "dvATBPList"; // the toggle box div id
  tIMtglbObj["cntntFnc"] = "setAPartsBox";
  tIMtglbObj["content"] = "noQvalue"; // the toggle that goes in above toggle div
  tIMtglbObj["btn"] = "btnTglSBPtsL" // the toogle btn id
  tIMtglbObj["pref"] = "tglSBPrtsL"; // the toogle pref id saved in cookie
  tIMtglbObj["tbtmpCB"] = "noQvalue"; // null function as callback
  tIMtglbObj["icn"] = "&#xe145;"; //<img src=\"images/misc/parts_w.gif\" style=\"vertical-align: middle; max-width: 27px; max-height: 27px;\" class=\"icnsmlbtn\">;"; // the icon
  tIMtglbObj["pnid"] = "dvAPartsList"; // the parent node, will just return text if noQvalue
  tIMtglbObj["appnd"] = "y"; // append to parent node, will just return text if noQvalue
  // tIMtglbObj["clsmaintbl"] = "slmtable brdrClrRed bkgdClrWhite"; // main table class
  tIMtglbObj["clsmaintbl"] = "gradient-pop"; // main table class
  
  tIMtglbObj["clstitletd"] = "txtBold txtClrHdr"; // title box class
  tIMtglbObj["clsttltxt"] = "txtSmall txtBold txtClrNrml"; // title box text class
   
  JSSHOP.ui.doTglBox(tIMtglbObj);
  
  if(dvMMainParts.style.display == "block") {
  } else {
      JSSHOP.ui.showHideElement('dvMMainParts','show');
  }
   
  // JSSHOP.shared.doPartsList(document.getElementById("dvPartsList"));
  };





  setASvcBox = function() {
    console.log("setAPartsBox: " + pid + " " + JSON.stringify(currPartsObj) + " " + pid.indexOf("-edit-"));
 
tTmpPartsL = JSSHOP.admin.doShpSvcLst("noQvalue");
 
 
document.getElementById("dvATBPList").innerHTML = tTmpPartsL;
 
 
JSSHOP.shared.fnshPartsList();
};

  JSSHOP.admin.getAddSvcBox = function(aw, bw,cw) {
    tSvsMksStrtg = document.getElementById("c_header").value;
    if(tSvsMksStrtg.indexOf(":") != -1) {
        tmpSvsMksStr = tSvsMksStrtg;
        tmpSvsMksArr = tmpSvsMksStr.split(":");
    } else {
        tmpSvsMksStr = ":";
        tmpSvsMksArr = [];
    }


    // remove all elements from dvPartsList
    console.log("getASvcBox: " + aw + " " + bw + " " + cw);
    // includedContent.innerHTML = "";
    // alert("getPartsBox: " + cw);
    tCatArrStr = "";
    currPartsObj = null;
    currPartsObj = JSON.parse(bw);
    boolShwPrtsB = "no";
    dvPartsList.innerHTML = "";
    tSVtglbObj = null;
    tSVtglbObj = "";
    tSVtglbObj = JSSHOP.ui.nTglBxOb();
    console.log("getPartsBox.boolShwPrtsB.edit: " + pid);
    tSVtglbObj["ttl"] = stxt[902]; // the toggle box title
    tSVtglbObj["dvid"] = "dvATBPList"; // the toggle box div id
    tSVtglbObj["cntntFnc"] = "setASvcBox";
    tSVtglbObj["content"] = "noQvalue"; // the toggle that goes in above toggle div
    tSVtglbObj["btn"] = "btnTglSBSvsL" // the toogle btn id
    // tSVtglbObj["btn"] = "noQvalue" // the toogle btn id
    tSVtglbObj["pref"] = "tglSBSvsL"; // the toogle pref id saved in cookie
    tSVtglbObj["tbtmpCB"] = "noQvalue"; // null function as callback
    tSVtglbObj["icn"] = "&#xe145;"; //<img src=\"images/misc/parts_w.gif\" style=\"vertical-align: middle; max-width: 27px; max-height: 27px;\" class=\"icnsmlbtn\">;"; // the icon
    tSVtglbObj["pnid"] = "dvASvsList"; // the parent node, will just return text if noQvalue
    tSVtglbObj["appnd"] = "y"; // append to parent node, will just return text if noQvalue
    // tIMtglbObj["clsmaintbl"] = "slmtable brdrClrRed bkgdClrWhite"; // main table class
    tSVtglbObj["clsmaintbl"] = "gradient-pop"; // main table class
    tSVtglbObj["clstitled"] = "txtBold brdrNone"; // title box class
    tSVtglbObj["clsttltxt"] = "txtSmall txtBold txtClrNrml"; // title box text class
    JSSHOP.ui.doTglBox(tSVtglbObj);
    if(dvMMainParts.style.display == "block") {
    } else {
        JSSHOP.ui.showHideElement('dvMMainParts','show');
    }
    // JSSHOP.shared.doPartsList(document.getElementById("dvPartsList"));
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
  
  JSSHOP.admin.setSvsMksArr = function(theObj, theMkID) {
    console.log("setSvsMksArr: " + theObj + " " + theMkID);
    // alert("setSvsMksArr: " + theObj + " " + theMkID);
    if(theMkID == "1000") {
      tmpSvsMksArr = "";
      tmpSvsMksArr = [];
      lightbox_content.innerHTML = "";
        lightbox_content.innerHTML = JSSHOP.admin.doSvsMakesPop('clearAll');
        if(tmpSvsMksStr.indexOf("1000") != -1) {
            tmpSvsMksStr = ":";
            dvSSVSMk1000.className = "collection-item crsrPointer";
        } else {
            tmpSvsMksStr = ":1000:";
            tmpSvsMksArr.push("1000");
            dvSSVSMk1000.className = "collection-item crsrPointer bkgdClrRed";
        }
        return;
    }
     theTMstr = ":" + theMkID + ":";
     if(tmpSvsMksStr.indexOf("1000") != -1) {
      tmpSvsMksStr = ":";
      dvSSVSMk1000.className = "collection-item crsrPointer";
      lightbox_content.innerHTML = "";
      lightbox_content.innerHTML = JSSHOP.admin.doSvsMakesPop('clearAll');
     }
     if(tmpSvsMksStr.indexOf(":") != -1) {
      if(tmpSvsMksStr.charAt(0) == ":") {
         //  tmpSvsMksStr = tmpSvsMksStr.replace(":","");
      } else {
          tmpSvsMksStr = ":" + tmpSvsMksStr;
      }
      if(tmpSvsMksStr.charAt(tmpSvsMksStr.length - 1) == ":") {
          //  tmpSvsMksStr = tmpSvsMksStr.replace(":","");
     } else {
          tmpSvsMksStr = ":" + tmpSvsMksStr + ":";
      }
     if(tmpSvsMksStr.indexOf(theTMstr) != -1) {
     
        nuTServs = tmpSvsMksStr.replace(theTMstr,"");
        tmpSvsMksStr = nuTServs;
        tmpSvsMksArr.splice(tmpSvsMksArr.indexOf(theMkID),1);
        theObj.className = "collection-item crsrPointer";
    } else {
       tmpSvsMksStr += theTMstr;
       tmpSvsMksArr.push(theMkID);
       theObj.className = "collection-item crsrPointer bkgdClrRed";

    }
    } else {
      tmpSvsMksStr = ":" + theMkID + ":";
      tmpSvsMksArr.push(theMkID);
      theObj.className = "collection-item crsrPointer bkgdClrRed";
    }
    console.log("setSvsMksArr.tmpSvsMksArr: " + JSON.stringify(tmpSvsMksArr));
    console.log("setSvsMksArr.tmpSvsMksStr: " + tmpSvsMksStr);
  };
  
  function fnshSvsMksSave(aa,bb,cc) {
    console.log("fnshSvsMksSave.tmpSvsMksArr: " + JSON.stringify(tmpSvsMksArr));
    console.log("fnshSvsMksSave.tmpSvsMksStr: " + tmpSvsMksStr);
   
    JSSHOP.ui.closeLbox();
    
  }

  
  JSSHOP.admin.doSvsMksSave = function() {
    tmpCleanSvsMksStr = tmpSvsMksStr.replace(/::/gi, ":");
    if(tmpCleanSvsMksStr.indexOf(":") != -1) {
      if(tmpCleanSvsMksStr.charAt(0) == ":") {
        //  tmpSvsMksStr = tmpSvsMksStr.replace(":","");
     } else {
      tmpCleanSvsMksStr = ":" + tmpCleanSvsMksStr;
     }
     if(tmpCleanSvsMksStr.charAt(tmpSvsMksStr.length - 1) == ":") {
         //  tmpSvsMksStr = tmpSvsMksStr.replace(":","");
    } else {
      tmpCleanSvsMksStr = ":" + tmpCleanSvsMksStr + ":";
     }
    } else {
        tmpCleanSvsMksStr = ":" + tmpCleanSvsMksStr + ":";
    }

    document.getElementById("c_header").value = tmpCleanSvsMksStr;
    tmpSvsMksStr = tmpCleanSvsMksStr;
    tmpSvsMksArr = tmpCleanSvsMksStr.split(":");
    console.log("doSvsMksSave.tmpCleanSvsMksStr: " + tmpCleanSvsMksStr);
    procNuUIitem('qco', 'c_header',cid,tmpCleanSvsMksStr,'fnshSvsMksSave');
  };
JSSHOP.admin.doSvsMakesPop = function(tMCBBstr) {
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
  // add a clear all button here
  tPYS += "<table style=\"width:95%;margin: 0 auto\"><tr>";
  tPYS += "<td><div class=\"cls_button cls_button-small bkgdClrDlg txtSmall txtClrTtl\" onclick=\"javascript:tmpSvsMksArr = [];tmpSvsMksStr='';lightbox_content.innerHTML=JSSHOP.admin.doSvsMakesPop('clearAll');\">" + stxt[52] + "</div></td>";
  // tPYS += "</tr><tr>";
  tPYS += "<td>";
  // add a check all button here
   tPYS += "<div class=\"cls_button cls_button-small bkgdBBlue txtSmall\" onclick=\"javascript:JSSHOP.admin.doSvsMksSave();\">" + stxt[21] + "</div></td>";
  tPYS += "</tr></table>";
 
  console.log("doMakesPop.trArr: " + JSON.stringify(trArr));
  
  
  tPYS += "<div class=\"collection\">";
  // add a checkbox here
  tPYS += "<div id=\"dvSSVSMk1000\" class=\"collection-item crsrPointer txtBold txtClrHdr\" onclick=\"javascript:JSSHOP.admin.setSvsMksArr(this,'1000');\">";
  tPYS += "<input type=\"checkbox\" id=\"chkc1\" name=\"chkc1\" value=\"pc1\">";
  tPYS += stxt[905] + "</div>";
 

  tMkObj = objAllMakes;
  for(var gkey in tMkObj) {
      if(tMkObj[gkey].n) {
       TMPnOBJ = tMkObj[gkey];
       tSSv = TMPnOBJ.n;
       tSSI =  TMPnOBJ.id;
       tSMakesCls = "collection-item crsrPointer";
       tSMakesChkSTr = ":" + tSSI + ":";
       if(tmpSvsMksStr.indexOf(tSMakesChkSTr) != -1) {
           tSMakesCls = "collection-item crsrPointer bkgdClrRed";
       }
       //   tPYS += "<div class=\"collection-item crsrPointer\" onclick=\"javascript:JSSHOP.shared.setMakeStuff('" + tSSI + "','" + tSSv + "','" + tMCBBstr + "');JSSHOP.ads.clearAllPrtsPrefCC();JSSHOP.ads.setPrtsPrefCC('mk','" + tSSI + "');\">" + tSSv + "</div>";
       // tPYS += a clickable div that toggles color and ads or removes the TMPnOBJ.id from tmpSvsMksArr

        tPYS += "<div id=\"dvSSVSMk" + tSSI + "\" class=\"" + tSMakesCls + "\" onclick=\"javascript:JSSHOP.admin.setSvsMksArr(this,'" + tSSI + "');\" value=\"" + tSSI + "\">" + tSSv + "</div>";
        }
  }
  tPYS += "</div>";
  if(tMCBBstr == "noQvalue") {
  // alert(tPYS);
  JSSHOP.ui.popAndFillLbox(tPYS);
  } else {
  // alert(tPYS);
  return tPYS;
  }
  };
   

 

  
JSSHOP.admin.setCatDemo = function(tDemoInt, tDemoCAtELem) {
  /*
  
// english Engine and Transmission Repair strings
catSVSStrObj["pc6"] = {};
catSVSStrObj["pc6"]["n"] = cattxtObj["pc6"];
catSVSStrObj["pc6"]["d"] = "Engine and Transmission Repair";
catSVSStrObj["pc6"]["blist"] = [];
catSVSStrObj["pc6"]["blist"][1] = "Engine and Transmission Repair";
catSVSStrObj["pc6"]["blist"][2] = "Specialized in the repair of vehicle engines and transmissions.";
catSVSStrObj["pc6"]["blist"][3] = "We repair vehicle engines and transmissions of all brands and models.";
catSVSStrObj["pc6"]["blist"][4] = "Repair of vehicle engines and transmissions.";
catSVSStrObj["pc6"]["blist"][5] = "We are experts in repairing car engines and transmissions";
*/
  tDemoStr = "";
  tCatDemoOStr = "pc" + tDemoInt;
  tCatDemoObj = catSVSStrObj[tCatDemoOStr];
  console.log("setCatDemo: " + tCatDemoOStr + " " + JSON.stringify(tCatDemoObj));
  tCatDemoArr = tCatDemoObj["blist"];
  tCatImgSTr = "";
  for(var iaq = 1; iaq < 5; iaq++) {
  tCatImgSTr += "<img src=\"images/cat_svs_imgs/cat" + tDemoInt + "_" + iaq + ".jpg\" class=\"slmtable icnmedbtn\">&nbsp;&nbsp;";
  }


  tULstr = "<ul>";
  for (var i = 1; i < tCatDemoArr.length; i++) {
      tULstr += "<li>" + tCatDemoArr[i] + "</li>";
  }
  tULstr += "</ul>";

  tDemoStr = "<div class=\"txtBold txtClrHdr\">" + tCatDemoObj["d"] + "</div>";
  tDemoStr += "<div>" + tCatImgSTr + "</div>";
  // tDemoStr += 
  tDemoStr += "<div class=\"txtSmall\">" + tULstr + "</div>";
  /*
  if(tDemoInt == 5) {
  
 return LZString.compressToEncodedURIComponent(tDemoStr);
  } else {
  document.getElementById("tmp_cat_desc").innerHTML = tDemoStr;
  document.getElementById("cat_desc").value = LZString.compressToEncodedURIComponent(tDemoStr);
  }
 */
  // return tDemoStr;
  if(tDemoCAtELem == "noQvalue") {
    return tDemoStr;
  } else {
    document.getElementById(tDemoCAtELem).innerHTML = tDemoStr;

    JSSHOP.ui.setNuCBBClickClr(document.getElementById(tDemoCAtELem),'rtable brdrClrRed txtBold mrgin10',document.getElementById(tDemoCAtELem).className, function() { void(0); }, 300);
  }
 // return LZString.compressToEncodedURIComponent(tDemoStr);
};

