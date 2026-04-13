

function doGsearchOnPart(thePath, theMessage) {

try {
console.log("doGsearchOnPart: " + theMessage);
srDv = document.createElement("div");
srDv.className = "gcse-searchresults-only";
document.getElementById("ggAds").appendChild(srDv);

srDv.setAttribute("data-resultSetSize", 3);

const myImgResReadyCallback = function(gname, q, promos, results, resultsDiv) {
		console.log("myResultsReadyCallback : " + JSON.stringify(results));
      const makePromoElt = (promo) => {
        const anchor = document.createElement('a');
        anchor.href = promo['url'];
        anchor.target = '_blank';
        anchor.classList.add('gs-title');
        const span = document.createElement('span');
        span.innerHTML = 'Promo: ' + promo['title'];
        anchor.appendChild(span);
        return anchor;
      };
      const makeResultParts = (result) => {
        const anchor = document.createElement('a');
        anchor.href = result['url'];
        anchor.target = '_blank';
        anchor.classList.add('gs_title');
        anchor.appendChild(document.createTextNode(result['visibleUrl']));
        const span = document.createElement('span');
        span.innerHTML = ' ' + result['title'];
        return [anchor, span];
      };

      const table = document.createElement('table');
      if (promos) {
        for (const promo of promos) {
          const row = table.insertRow(-1);
          const cell = row.insertCell(-1);
          cell.appendChild(makePromoElt(promo));
        }
        resultsDiv.appendChild(table);
        resultsDiv.appendChild(document.createElement('br'));
      }
      if (results) {
console.log("doGsearchOnPart.results: " + JSON.stringify(results));

        const table = document.createElement('table');
		tCOArr = [];
		rCCCiI = 0;
		tNCostr = "";
        for (const result of results) {
		  tsCiObj = null;
		   tsCiObj = "";
			tsCiObj = {};
			tsCiObj["_id"] = "iai" + rCCCiI;
			tsCiObj["c_url"] = result["url"];
			tsCiObj["c_web"] = result["visibleUrl"];
			if(result["thumbnailImage"]) {
			tRTHI = result["thumbnailImage"];
			tsCiObj["c_logoimg"] = tRTHI.url;
			if(rCCCiI == 0) {
			// imgPLicon.src = tRTHI.url;
			}
			} else {
			tsCiObj["c_logoimg"] = "noQvalue";
			}
			tsCiObj["c_title"] = result["title"];
			tsCiObj["c_desc"] = result["content"];
			if(result["snippet"]) {
			tsCiObj["c_desc"] = result["snippet"].title + "<br>" + result["content"];
			}
			tCOArr.push(tsCiObj);
             tNCostr += "<img src=\"" + tsCiObj["c_logoimg"] + "\" class=\"rtable brdrClrHdr\" style=\"max-width: 120px;padding:10px;float: left\">";
		  rCCCiI++;
        }
		// tNCostr = JSSHOP.ads.doGenericRes(null, JSON.stringify(tCOArr), null);
	     tNCoDiv  = document.createElement('div');
		tNCoDiv.innerHTML = tNCostr;
		console.log("doGsearchOnPart:: " + tNCostr);
        // resultsDiv = document.getElementById("nresults");
        resultsDiv.appendChild(tNCoDiv);

      }
      return true;
    };







const myResultsReadyCallback = function(gname, q, promos, results, resultsDiv) {
		console.log("myResultsReadyCallback : " + JSON.stringify(results));
      const makePromoElt = (promo) => {
        const anchor = document.createElement('a');
        anchor.href = promo['url'];
        anchor.target = '_blank';
        anchor.classList.add('gs-title');
        const span = document.createElement('span');
        span.innerHTML = 'Promo: ' + promo['title'];
        anchor.appendChild(span);
        return anchor;
      };
      const makeResultParts = (result) => {
        const anchor = document.createElement('a');
        anchor.href = result['url'];
        anchor.target = '_blank';
        anchor.classList.add('gs_title');
        anchor.appendChild(document.createTextNode(result['visibleUrl']));
        const span = document.createElement('span');
        span.innerHTML = ' ' + result['title'];
        return [anchor, span];
      };

      const table = document.createElement('table');
      if (promos) {
        for (const promo of promos) {
          const row = table.insertRow(-1);
          const cell = row.insertCell(-1);
          cell.appendChild(makePromoElt(promo));
        }
        resultsDiv.appendChild(table);
        resultsDiv.appendChild(document.createElement('br'));
      }
      if (results) {
console.log("doGsearchOnPart.results: " + JSON.stringify(results));

        const table = document.createElement('table');
		tCOArr = [];
		rCCCiI = 0;
        for (const result of results) {
		  tsCiObj = null;
		   tsCiObj = "";
			tsCiObj = {};
			tsCiObj["_id"] = "iai" + rCCCiI;
			tsCiObj["c_url"] = result["url"];
			tsCiObj["c_web"] = result["visibleUrl"];
			if(result["thumbnailImage"]) {
			tRTHI = result["thumbnailImage"];
			tsCiObj["c_logoimg"] = tRTHI.url;
			if(rCCCiI == 0) {
			// imgPLicon.src = tRTHI.url;
			}
			} else {
			tsCiObj["c_logoimg"] = "noQvalue";
			}
			tsCiObj["c_title"] = result["title"];
			tsCiObj["c_desc"] = result["content"];
			if(result["snippet"]) {
			tsCiObj["c_desc"] = result["snippet"].title + "<br>" + result["content"];
			}
			tCOArr.push(tsCiObj);
          const row = table.insertRow(-1);
          const cell = row.insertCell(-1);
          const [anchor, span] = makeResultParts(result);
          cell.appendChild(anchor);
          const cell2 = row.insertCell(-1);
          cell2.appendChild(span);
		  rCCCiI++;
        }
		tNCostr = JSSHOP.ads.doGenericRes("cse", JSON.stringify(tCOArr), null);



	     tNCoDiv = document.createElement('div');
		 tNCoDiv.innerHTML = tNCostr;
          resultsDiv.appendChild(tNCoDiv);


/*
		//  console.log("doGsearchOnPart:: " + tNCostr);

        // resultsDiv = document.getElementById("nresults");
tIMtglbObj = JSSHOP.ui.nTglBxOb();
tIMtglbObj["ttl"] = stxt[93]; // the toggle box title
tIMtglbObj["dvid"] = "dvGPP"; // the toggle box div id
tIMtglbObj["content"] = tNCostr; // the toggle that goes in above toggle div
tIMtglbObj["btn"] = "btnTglGPP" // the toogle btn id
tIMtglbObj["pref"] = "tglGPP"; // the toogle pref id saved in cookie
tIMtglbObj["tbtmpCB"] = "doNada"; // null function as callback
tIMtglbObj["icn"] = "&#xe3ec;"; // the icon
tIMtglbObj["pnid"] = "noQvalue"; // the parent node, will just return text if noQvalue
tIMtglbObj["appnd"] = "y"; // the parent node, will just return text if noQvalue
tBoxStr = JSSHOP.ui.doTglBox(tIMtglbObj);

*/



      }
      return true;
    };




window.__gcse || (window.__gcse = {});
    window.__gcse.searchCallbacks = {
      web: {
        ready: myResultsReadyCallback,
      },
/**/
      image: {
        ready: myImgResReadyCallback,
      },

    };





} catch(e) {
alert("JSSHOP.ads.doGsearchOnPart:" + e);
// JSSHOP.loadScript("https://cse.google.com/cse.js?cx=e5956f3d7f1bbd535", JSSHOP.checkLoader,"js");
}
}


