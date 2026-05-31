
// ── Shared Comments System ────────────────────────────────────────────────────

var useCmntFUpload = "yes"; // use image uploading in comments
var useCmntRtDrw = "no";   // use route drawing in comments
var currShowGstCmnts = "no"; // allow guests to post comments/replies: yes|no
var useMsgsFUpload = "yes"; // use image uploading in messages
var cmntMapCaptureDelayMs = 900; // delay before html2canvas capture after map fit/center


// Returns aliased SELECT columns for a quser LEFT JOIN.
// Canonical aliases produced: u_icon, u_fname, u_lname, u_name.
var getCmntUserSelectFrag = function(tAlias) {
	var tA = tAlias ? (tAlias + ".") : "u.";
	var tParts = [];
	tParts.push(currQUserIconFld ? (tA + currQUserIconFld + " AS u_icon") : ("'' AS u_icon"));
	if(currQUserFNameFld) {
		tParts.push(tA + currQUserFNameFld + " AS u_fname");
	} else if(currQUserFullNameFld) {
		tParts.push(tA + currQUserFullNameFld + " AS u_fname");
	} else {
		tParts.push("'' AS u_fname");
	}
	tParts.push(currQUserLNameFld ? (tA + currQUserLNameFld + " AS u_lname") : ("'' AS u_lname"));
	tParts.push(currQUserUNameFld ? (tA + currQUserUNameFld + " AS u_name") : ("'' AS u_name"));
	return tParts.join(", ");
};

var _cmtProdId   = null;
var _cmtProdType = "prod";
var _cmtOwnerUid = null;

var getCmntFullName = function(rawName, rawFName, rawLName, rawUName, fallbackName) {
	var tName = (rawName || "").trim();
	var tFName = (rawFName || "").trim();
	var tLName = (rawLName || "").trim();
	var tUName = (rawUName || "").trim();
	if(tName !== "") { return tName; }
	if((tFName !== "") || (tLName !== "")) {
		return (tFName + " " + tLName).trim();
	}
	if(tUName !== "") { return tUName; }
	return fallbackName || "Anonymous";
};

var getCmntIconVal = function(rawIcon, joinedIcon) {
	var tIcon = (rawIcon || "").trim();
	var tJoined = (joinedIcon || "").trim();
	if(tIcon !== "") { return tIcon; }
	return tJoined;
};

var getCurrUserFullName = function() {
	if((typeof currQUsrObj !== "undefined") && currQUsrObj) {
		return getCmntFullName(
			currQUsrObj.u_fullname,
			currQUsrObj.u_fname,
			currQUsrObj.u_lname,
			currQUsrObj.u_name,
			""
		);
	}
	return "";
};

var getCurrUserIdNum = function() {
	var tUid = parseInt((typeof quid !== "undefined") ? quid : 0, 10);
	if(isNaN(tUid) || tUid < 1) {
		return 0;
	}
	return tUid;
};

var isGuestCommentUser = function() {
	return (getCurrUserIdNum() < 1);
};

var canGuestPostComments = function() {
	return (String(currShowGstCmnts || "yes").toLowerCase() === "yes");
};

var canCurrentUserPostComments = function() {
	if(!isGuestCommentUser()) { return true; }
	return canGuestPostComments();
};

var getLoginToCommentLinkHtml = function() {
	return "<a href=\"javascript:eindex('aa-edit-user','pid=aa-edit-user');\" class=\"txtSmall txtBold\" style=\"color:#1877f2;\">" + (stxt[1051] || "Log in to comment") + "</a>";
};

var sanitizeCommentMetaVal = function(tVal) {
	return String(tVal || "").replace(/'/g, "&#39;").trim();
};

var hasMeaningfulCommentHtml = function(tHtml) {
	var tPlain = String(tHtml || "")
		.replace(/<br\s*\/?>/gi, "")
		.replace(/&nbsp;/gi, "")
		.replace(/<[^>]*>/g, "")
		.trim();
	return tPlain !== "";
};

var parseDbRowsFromResp = function(tResp) {
	var tObj = tResp;
	if(typeof tObj === "string") {
		try {
			tObj = JSON.parse(tObj);
		} catch(e) {
			// Some legacy callbacks may wrap arrays in non-JSON prefixes/suffixes.
			var tArrMatch = String(tResp || "").match(/\[[\s\S]*\]/);
			if(tArrMatch && tArrMatch[0]) {
				try {
					var tLooseArr = JSON.parse(tArrMatch[0]);
					if(Array.isArray(tLooseArr)) {
						return tLooseArr;
					}
				} catch(eLoose) {
					return [];
				}
			}
			return [];
		}
	}
	if(!tObj) {
		return [];
	}
	if(Array.isArray(tObj)) {
		return tObj;
	}
	if(Array.isArray(tObj.data)) {
		return tObj.data;
	}
	if(Array.isArray(tObj.v)) {
		return tObj.v;
	}
	if(Array.isArray(tObj.rows)) {
		return tObj.rows;
	}
	if(Array.isArray(tObj.result)) {
		return tObj.result;
	}

	var tKey = "";
	for(tKey in tObj) {
		if(!Object.prototype.hasOwnProperty.call(tObj, tKey)) {
			continue;
		}
		var tVal = tObj[tKey];
		if(Array.isArray(tVal)) {
			return tVal;
		}
		if(tVal && typeof tVal === "object") {
			if(Array.isArray(tVal.v)) {
				return tVal.v;
			}
			if(Array.isArray(tVal.data)) {
				return tVal.data;
			}
			if(Array.isArray(tVal.rows)) {
				return tVal.rows;
			}
			if(Array.isArray(tVal.result)) {
				return tVal.result;
			}
		}
	}

	return [];
};

// Backport from newer shared code: minimal multipart uploader used by canvas map snapshots.
if(typeof JSSHOP.ajax.doNwstGenAjaxPost !== "function") {
	JSSHOP.ajax.doNwstGenAjaxPost = function(tNameValArr, tUrl, tMethdType, tCB, timeout) {
		try {
			var formData = new FormData();
			var i = 0;
			for(i = 0; i < tNameValArr.length; i++) {
				formData.append(tNameValArr[i].t, tNameValArr[i].v);
				if(document.getElementById(tNameValArr[i].t)) {
					document.getElementById(tNameValArr[i].t).value = tNameValArr[i].v;
				}
			}

			var xhr = new XMLHttpRequest();
			xhr.open(tMethdType, tUrl, true);
			xhr.timeout = timeout || 30000;

			xhr.onload = function() {
				if(tCB) {
					tCB(xhr.responseText);
				}
			};

			xhr.onerror = function(e) {
				console.log("doNwstGenAjaxPost.ERROR: " + e);
			};

			xhr.ontimeout = function() {
				console.log("doNwstGenAjaxPost.TIMEOUT");
			};

			xhr.send(formData);
		} catch(e) {
			console.log("doNwstGenAjaxPost.ERROR: " + e);
		}
	};
}

JSSHOP.cmnts._pendingMap = {
	comment: "",
	reply: {},
	ctx: null,
	mapDivId: "map"
};

JSSHOP.cmnts._pendingMapRoute = {
	comment: "",
	reply: {}
};

JSSHOP.cmnts._pendingUploadRows = {
	comment: [],
	reply: {}
};

JSSHOP.cmnts.cleanupMapTools = function() {
	var tTools = document.getElementById("dvCmtMapTools");
	if(tTools && tTools.parentNode) {
		tTools.parentNode.removeChild(tTools);
	}
};

JSSHOP.cmnts.escapeHtml = function(tStr) {
	tStr = String(tStr || "");
	return tStr.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

JSSHOP.cmnts.escapeAttr = function(tStr) {
	tStr = String(tStr || "");
	return tStr.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
};

JSSHOP.cmnts.appendPopupNoteToComposer = function(tScope, tOwnerId, tNote) {
	tNote = String(tNote || "").trim();
	if(!tNote) { return; }
	var tInpId = (tScope === "comment") ? "dvCmtInput" : ("dvCmtReplyInput" + tOwnerId);
	var tInp = document.getElementById(tInpId);
	if(!tInp) { return; }
	var tSafe = JSSHOP.cmnts.escapeHtml(tNote).replace(/\r\n|\r|\n/g, "<br>");
	if(!tInp.innerHTML || tInp.innerHTML === "<br>") {
		tInp.innerHTML = tSafe;
	} else {
		tInp.innerHTML += "<br>" + tSafe;
	}
};

JSSHOP.cmnts._popupUploadState = {
	comment: {},
	reply: {}
};

JSSHOP.cmnts.setPopupUploadState = function(tScope, tOwnerId, tStateObj) {
	tScope = String(tScope || "comment");
	tOwnerId = String(tOwnerId || "");
	tStateObj = tStateObj || {};
	if(tScope === "comment") {
		JSSHOP.cmnts._popupUploadState.comment = tStateObj;
		return;
	}
	if(tOwnerId) {
		JSSHOP.cmnts._popupUploadState.reply[tOwnerId] = tStateObj;
	}
};

JSSHOP.cmnts.getPopupUploadState = function(tScope, tOwnerId) {
	tScope = String(tScope || "comment");
	tOwnerId = String(tOwnerId || "");
	if(tScope === "comment") {
		return JSSHOP.cmnts._popupUploadState.comment || {};
	}
	return (tOwnerId && JSSHOP.cmnts._popupUploadState.reply[tOwnerId]) ? JSSHOP.cmnts._popupUploadState.reply[tOwnerId] : {};
};

JSSHOP.cmnts.clearPopupUploadState = function(tScope, tOwnerId) {
	tScope = String(tScope || "comment");
	tOwnerId = String(tOwnerId || "");
	if(tScope === "comment") {
		JSSHOP.cmnts._popupUploadState.comment = {};
		return;
	}
	if(tOwnerId) {
		delete JSSHOP.cmnts._popupUploadState.reply[tOwnerId];
	}
};

JSSHOP.cmnts.getComposerPreviewId = function(tScope, tOwnerId) {
	var tCtx = _cmtUploadCtx;
	if(tCtx && String(tCtx.scope || "") === String(tScope || "") && String(tCtx.ownerId || "") === String(tOwnerId || "") && tCtx.previewId) {
		return tCtx.previewId;
	}
	return (tScope === "comment") ? "dvCmtMapPrev_comment" : ("dvCmtMapPrev_reply_" + tOwnerId);
};

var _cmtMapLat = null;
var _cmtMapLng = null;
var _cmtSaveCtx = null;
var _cmtUploadCtx = null;

JSSHOP.cmnts._toFixedCoord = function(tNum) {
	tNum = parseFloat(tNum);
	if(isNaN(tNum)) { return null; }
	return Math.round(tNum * 1000000) / 1000000;
};

JSSHOP.cmnts._parseDrawPointsFromUrl = function(tDrawUrl) {
	tDrawUrl = String(tDrawUrl || "");
	if(!tDrawUrl) { return []; }
	var tPathRaw = "";
	var tPairs = tDrawUrl.split("&");
	for(var i = 0; i < tPairs.length; i++) {
		var tPair = tPairs[i];
		if(tPair.indexOf("path=") === -1) { continue; }
		var tEq = tPair.indexOf("=");
		if(tEq < 0) { continue; }
		tPathRaw = tPair.substring(tEq + 1);
		break;
	}
	if(!tPathRaw) { return []; }

	var tPathVal = "";
	try {
		tPathVal = decodeURIComponent(tPathRaw);
	} catch(eDec) {
		tPathVal = tPathRaw;
	}

	var tPts = [];
	var tSeen = {};
	var tSegs = tPathVal.split("|");
	for(var j = 0; j < tSegs.length; j++) {
		var tSeg = String(tSegs[j] || "").trim();
		if(!tSeg || tSeg.indexOf(":") > -1 || tSeg.indexOf(",") < 0) { continue; }
		var tLL = tSeg.split(",");
		if(tLL.length < 2) { continue; }
		var tLat = JSSHOP.cmnts._toFixedCoord(tLL[0]);
		var tLng = JSSHOP.cmnts._toFixedCoord(tLL[1]);
		if(tLat === null || tLng === null) { continue; }
		var tKey = tLat + "," + tLng;
		if(tSeen[tKey]) { continue; }
		tSeen[tKey] = 1;
		tPts.push({lat:tLat, lng:tLng});
	}
	return tPts;
};

JSSHOP.cmnts.buildRouteMediaData = function() {
	var tLat = JSSHOP.cmnts._toFixedCoord(_cmtMapLat);
	var tLng = JSSHOP.cmnts._toFixedCoord(_cmtMapLng);
	if(tLat === null || tLng === null) {
		tLat = JSSHOP.cmnts._toFixedCoord(currMapLatStr);
		tLng = JSSHOP.cmnts._toFixedCoord(currMapLngStr);
	}
	if(tLat === null || tLng === null) {
		tLat = JSSHOP.cmnts._toFixedCoord(currDefLat);
		tLng = JSSHOP.cmnts._toFixedCoord(currDefLng);
	}

	var tDrawUrl = "";
	try {
		if(JSSHOP.ui && typeof JSSHOP.ui.getCurrMapDrawUrl === "function") {
			tDrawUrl = JSSHOP.ui.getCurrMapDrawUrl();
		}
	} catch(eDraw) {
		tDrawUrl = "";
	}
	var tPts = JSSHOP.cmnts._parseDrawPointsFromUrl(tDrawUrl);
	if((tLat === null || tLng === null) && tPts.length === 0) {
		return "map_image";
	}

	var tPayload = {
		v: 1,
		type: "map_route",
		place: (tLat !== null && tLng !== null) ? {lat:tLat, lng:tLng} : null,
		points: tPts
	};
	return "route:" + encodeURIComponent(JSON.stringify(tPayload));
};

JSSHOP.cmnts.getPendingMapRoute = function(tScope, tOwnerId) {
	if(tScope === "comment") {
		return JSSHOP.cmnts._pendingMapRoute.comment || "";
	}
	tOwnerId = String(tOwnerId || "");
	if(!tOwnerId) { return ""; }
	return JSSHOP.cmnts._pendingMapRoute.reply[tOwnerId] || "";
};

JSSHOP.cmnts.setPendingMapRoute = function(tScope, tOwnerId, tRouteData) {
	tRouteData = String(tRouteData || "").trim();
	if(tScope === "comment") {
		JSSHOP.cmnts._pendingMapRoute.comment = tRouteData;
		return;
	}
	tOwnerId = String(tOwnerId || "");
	if(!tOwnerId) { return; }
	if(!tRouteData) {
		delete JSSHOP.cmnts._pendingMapRoute.reply[tOwnerId];
	} else {
		JSSHOP.cmnts._pendingMapRoute.reply[tOwnerId] = tRouteData;
	}
};

JSSHOP.cmnts.getPendingUploadRows = function(tScope, tOwnerId) {
	if(tScope === "comment") {
		return JSSHOP.cmnts._pendingUploadRows.comment || [];
	}
	tOwnerId = String(tOwnerId || "");
	if(!tOwnerId) { return []; }
	return JSSHOP.cmnts._pendingUploadRows.reply[tOwnerId] || [];
};

JSSHOP.cmnts.addPendingUploadRow = function(tScope, tOwnerId, tRowObj) {
	if(!tRowObj) { return; }
	if(tScope === "comment") {
		if(!JSSHOP.cmnts._pendingUploadRows.comment) { JSSHOP.cmnts._pendingUploadRows.comment = []; }
		JSSHOP.cmnts._pendingUploadRows.comment.push(tRowObj);
		return;
	}
	tOwnerId = String(tOwnerId || "");
	if(!tOwnerId) { return; }
	if(!JSSHOP.cmnts._pendingUploadRows.reply[tOwnerId]) {
		JSSHOP.cmnts._pendingUploadRows.reply[tOwnerId] = [];
	}
	JSSHOP.cmnts._pendingUploadRows.reply[tOwnerId].push(tRowObj);
};

JSSHOP.cmnts.clearPendingUploadRows = function(tScope, tOwnerId) {
	if(tScope === "comment") {
		JSSHOP.cmnts._pendingUploadRows.comment = [];
		return;
	}
	tOwnerId = String(tOwnerId || "");
	if(!tOwnerId) { return; }
	delete JSSHOP.cmnts._pendingUploadRows.reply[tOwnerId];
};

JSSHOP.cmnts.removePendingUploadRow = function(tScope, tOwnerId, tQmediaId) {
	tQmediaId = parseInt(tQmediaId, 10) || 0;
	if(!tQmediaId) { return; }
	console.log("cmntImg.stage.remove", {scope:tScope, ownerId:tOwnerId, qmediaId:tQmediaId});
	var tRows = JSSHOP.cmnts.getPendingUploadRows(tScope, tOwnerId);
	if(!tRows || tRows.length === 0) { return; }
	var tNewRows = [];
	for(var i = 0; i < tRows.length; i++) {
		var tRow = tRows[i] || {};
		if((parseInt(tRow.qmediaId, 10) || 0) !== tQmediaId) {
			tNewRows.push(tRow);
		}
	}
	if(tScope === "comment") {
		JSSHOP.cmnts._pendingUploadRows.comment = tNewRows;
	} else {
		tOwnerId = String(tOwnerId || "");
		if(tOwnerId) {
			JSSHOP.cmnts._pendingUploadRows.reply[tOwnerId] = tNewRows;
		}
	}
	var tDropQry = "UPDATE qmedia SET m_rtype='0' WHERE _id='" + tQmediaId + "' AND m_uid='" + quid + "' AND m_pid='0'";
	doQComm(tDropQry, null, "nada");
};

JSSHOP.cmnts.getRoutePayloadFromMediaData = function(tData) {
	tData = String(tData || "").trim();
	if(!tData || tData === "map_image") { return null; }
	if(tData.indexOf("http://") === 0 || tData.indexOf("https://") === 0) {
		return { type: "map_route_url", url: tData };
	}
	if(tData.indexOf("?") === 0 && tData.indexOf("path=") > -1) {
		return {
			v: 1,
			type: "map_route",
			place: null,
			points: JSSHOP.cmnts._parseDrawPointsFromUrl(tData)
		};
	}

	var tRaw = tData;
	if(tRaw.indexOf("route:") === 0) {
		tRaw = tRaw.substring(6);
		try {
			tRaw = decodeURIComponent(tRaw);
		} catch(eDec) {
			return null;
		}
	}

	var tObj = null;
	try {
		tObj = JSON.parse(tRaw);
	} catch(eJson) {
		return null;
	}
	if(!tObj || typeof tObj !== "object") { return null; }
	return tObj;
};

JSSHOP.cmnts.getRouteLinkFromMediaData = function(tData) {
	tData = String(tData || "").trim();
	if(!tData || tData === "map_image") { return ""; }
	if(tData.indexOf("http://") === 0 || tData.indexOf("https://") === 0) {
		return tData;
	}

	var tPayload = JSSHOP.cmnts.getRoutePayloadFromMediaData(tData);
	if(!tPayload) { return ""; }
	if(tPayload.url) { return String(tPayload.url || ""); }

	var tPts = [];
	if(tPayload.points && tPayload.points.length) {
		for(var i = 0; i < tPayload.points.length; i++) {
			var tP = tPayload.points[i] || {};
			var tLat = JSSHOP.cmnts._toFixedCoord(tP.lat);
			var tLng = JSSHOP.cmnts._toFixedCoord(tP.lng);
			if(tLat === null || tLng === null) { continue; }
			tPts.push(tLat + "," + tLng);
		}
	}

	var tDest = "";
	if(tPayload.place && typeof tPayload.place === "object") {
		var tPlaceLat = JSSHOP.cmnts._toFixedCoord(tPayload.place.lat);
		var tPlaceLng = JSSHOP.cmnts._toFixedCoord(tPayload.place.lng);
		if(tPlaceLat !== null && tPlaceLng !== null) {
			tDest = tPlaceLat + "," + tPlaceLng;
		}
	}

	var tStops = [];
	for(var iS = 0; iS < tPts.length; iS++) {
		tStops.push(tPts[iS]);
	}
	if(tDest) {
		if(tStops.length === 0 || tStops[tStops.length - 1] !== tDest) {
			tStops.push(tDest);
		}
	}

	if(tStops.length === 0) {
		return "";
	}
	if(tStops.length === 1) {
		return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(tStops[0]);
	}

	var tDirUrl = "https://www.google.com/maps/dir/";
	for(var iD = 0; iD < tStops.length; iD++) {
		tDirUrl += tStops[iD] + "/";
	}
	return tDirUrl;
};

JSSHOP.cmnts._routeReplayData = {};

JSSHOP.cmnts.popRouteReplayMap = function(tKey) {
	try {
		var tData = JSSHOP.cmnts._routeReplayData[tKey] || String(tKey || "");
		console.log("routeReplay.data", tKey, tData ? tData.substring(0, 120) : "(empty)");
		var tPayload = JSSHOP.cmnts.getRoutePayloadFromMediaData(tData);
		console.log("routeReplay.payload", JSON.stringify(tPayload ? {type:tPayload.type, hasPlace:!!tPayload.place, numPts:(tPayload.points||[]).length} : null));

		var tLat = NaN, tLng = NaN;
		if(tPayload) {
			if(tPayload.url) {
				window.open(tPayload.url, "_blank");
				return;
			}
			if(tPayload.place && tPayload.place.lat != null) {
				tLat = parseFloat(tPayload.place.lat);
				tLng = parseFloat(tPayload.place.lng);
			}
			if((isNaN(tLat) || isNaN(tLng)) && tPayload.points && tPayload.points.length > 0) {
				tLat = parseFloat(tPayload.points[0].lat);
				tLng = parseFloat(tPayload.points[0].lng);
			}
		}
		console.log("routeReplay.center", tLat, tLng);
		if(isNaN(tLat) || isNaN(tLng)) {
			var tFallback = JSSHOP.cmnts.getRouteLinkFromMediaData(tData);
			if(tFallback) { window.open(tFallback, "_blank"); }
			return;
		}

		var tGoogleHref = JSSHOP.cmnts.getRouteLinkFromMediaData(tData);
		var tWazeHref = "";
		if(tPayload && tPayload.place && tPayload.place.lat != null) {
			var tWLat = parseFloat(tPayload.place.lat);
			var tWLng = parseFloat(tPayload.place.lng);
			if(!isNaN(tWLat) && !isNaN(tWLng)) {
				tWazeHref = "https://www.waze.com/ul?ll=" + tWLat + "%2C" + tWLng + "&navigate=yes";
			}
		}

		var tmpLbox  = document.getElementById("lightbox");
		var tmpLCbox = document.getElementById("dvSandMap");
		if(!tmpLbox || !tmpLCbox) { return; }

		tmpLbox.style.display    = "inline";
		tmpLCbox.style.position  = "fixed";
		tmpLCbox.style.display   = "block";
		tmpLCbox.style.boxSizing = "border-box";
		tmpLCbox.style.width     = "320px";
		tmpLCbox.style.maxWidth  = "320px";
		tmpLCbox.style.minWidth  = "320px";
		tmpLCbox.style.margin    = "0";
		tmpLCbox.style.padding   = "0";
		tmpLCbox.style.overflow  = "hidden";
		tmpLCbox.style.wordWrap  = "normal";
		tmpLCbox.style.border       = "1px solid #ddd";
		tmpLCbox.style.borderRadius = "8px";
		tmpLCbox.style.background   = "#fff";
		tmpLCbox.style.zIndex       = "999999";
		tmpLCbox.style.top          = "8px";
		tmpLCbox.style.left         = "50%";
		tmpLCbox.style.transform    = "translateX(-50%)";

		var tMapDivId  = "mapRouteReplay";
		var tBtnsHtml  = "<div style=\"display:flex;gap:8px;align-items:center;padding:8px;border-top:1px solid #eee;\">";
		tBtnsHtml += "<a href=\"" + JSSHOP.cmnts.escapeAttr(tGoogleHref) + "\" target=\"_blank\" rel=\"noopener\" title=\"Google Maps\" style=\"display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:50%;border:1px solid #294759;background:#ffffff;color:#294759;text-decoration:none;\">";
		tBtnsHtml += "<i class=\"small-material-icons\" style=\"font-size:18px;line-height:1;\">&#xe55f;</i></a>";
		if(tWazeHref) {
			tBtnsHtml += "<a href=\"" + JSSHOP.cmnts.escapeAttr(tWazeHref) + "\" target=\"_blank\" rel=\"noopener\" title=\"Waze\" style=\"display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:50%;border:1px solid #294759;background:#ffffff;color:#294759;text-decoration:none;\">";
			tBtnsHtml += "<span class=\"txtBold\" style=\"font-size:14px;line-height:1;font-family:Verdana,Helvetica,Arial;\">W</span></a>";
		}
		tBtnsHtml += "<a href=\"javascript:JSSHOP.ui.closeLbox();\" title=\"Close\" style=\"display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:50%;border:1px solid #294759;background:#ffffff;color:#294759;text-decoration:none;margin-left:auto;\">";
		tBtnsHtml += "<i class=\"small-material-icons\" style=\"font-size:18px;line-height:1;\">&#xe5cd;</i></a>";
		tBtnsHtml += "</div>";

		tmpLCbox.innerHTML = "<div id=\"" + tMapDivId + "\" style=\"width:320px;height:320px;max-width:320px;max-height:320px;min-width:320px;min-height:320px;\"></div>" + tBtnsHtml;

		var tDGMretStr = JSSHOP.ui.doGenMap(tLat, tLng, tMapDivId, "", "", true, false);
		console.log("routeReplay.doGenMap", tDGMretStr);
		if(tDGMretStr !== "OK") {
			alert("Error opening map: " + tDGMretStr);
			return;
		}

		if(tPayload && tPayload.points && tPayload.points.length > 0) {
			var tReplayPts = tPayload.points;
			console.log("routeReplay.pts.count", tReplayPts.length, "first:", JSON.stringify(tReplayPts[0]));
			setTimeout(function() {
				try {
					console.log("routeReplay.draw.map", typeof map, typeof L);
					var tLLPts = [];
					for(var iRP = 0; iRP < tReplayPts.length; iRP++) {
						var tPLat = parseFloat(tReplayPts[iRP].lat);
						var tPLng = parseFloat(tReplayPts[iRP].lng);
						if(!isNaN(tPLat) && !isNaN(tPLng)) {
							tLLPts.push([tPLat, tPLng]);
						}
					}
					console.log("routeReplay.draw.pts", tLLPts.length, tLLPts[0]);
					if(tLLPts.length > 0) {
						var tLine = L.polyline(tLLPts, {color:"#ff0000", weight:3, opacity:1.0}).addTo(map);
						console.log("routeReplay.draw.done", !!tLine);
						if(tLLPts.length > 1) {
							map.fitBounds(tLine.getBounds(), {padding:[16,16]});
						} else {
							map.setView(tLLPts[0], 17);
						}
					}
				} catch(eP) { console.log("routeReplay.polyline.err", eP); }
			}, 350);
		} else {
			console.log("routeReplay.pts.none", tPayload ? JSON.stringify(tPayload) : "no payload");
		}

		if(typeof map !== "undefined" && map && typeof map.invalidateSize === "function") {
			setTimeout(function() { try { map.invalidateSize(true); } catch(eInv) {} }, 80);
		}
		setTimeout(function() { window.dispatchEvent(new Event("resize")); }, 1000);
	} catch(e) {
		console.log("popRouteReplayMap.ERROR", e);
		alert("popRouteReplayMap: " + e);
	}
};

JSSHOP.cmnts.getMapMediaSrc = function(tFile, tUseMedium) {
	tFile = String(tFile || "").trim();
	if(!tFile) { return ""; }
	if(tFile.indexOf("http://") === 0 || tFile.indexOf("https://") === 0 || tFile.indexOf("/") === 0) {
		return tFile;
	}
	return "images/ucontent/" + (tUseMedium ? "m_thumb" : "s_thumb") + tFile;
};

JSSHOP.cmnts.getPendingMap = function(tScope, tOwnerId) {
	if(tScope === "comment") {
		return JSSHOP.cmnts._pendingMap.comment || "";
	}
	tOwnerId = String(tOwnerId || "");
	if(!tOwnerId) { return ""; }
	return JSSHOP.cmnts._pendingMap.reply[tOwnerId] || "";
};

JSSHOP.cmnts.setPendingMap = function(tScope, tOwnerId, tFile) {
	tFile = String(tFile || "").trim();
	if(tScope === "comment") {
		JSSHOP.cmnts._pendingMap.comment = tFile;
		if(!tFile) { JSSHOP.cmnts.setPendingMapRoute("comment", "", ""); }
		return;
	}
	tOwnerId = String(tOwnerId || "");
	if(!tOwnerId) { return; }
	if(!tFile) {
		delete JSSHOP.cmnts._pendingMap.reply[tOwnerId];
		JSSHOP.cmnts.setPendingMapRoute("reply", tOwnerId, "");
	} else {
		JSSHOP.cmnts._pendingMap.reply[tOwnerId] = tFile;
	}
};

JSSHOP.cmnts.renderComposerMapPreview = function(tScope, tOwnerId) {
	var tId = JSSHOP.cmnts.getComposerPreviewId(tScope, tOwnerId);
	var tDv = document.getElementById(tId);
	if(!tDv) { return; }
	var tFile = JSSHOP.cmnts.getPendingMap(tScope, tOwnerId);
	var tRows = JSSHOP.cmnts.getPendingUploadRows(tScope, tOwnerId);
	if((!tFile) && (!tRows || tRows.length === 0)) {
		tDv.style.display = "none";
		tDv.innerHTML = "";
		return;
	}
	tDv.style.display = "block";
	var tHtml = "<div style=\"display:flex;gap:8px;flex-wrap:wrap;margin-top:6px;\">";
	if(tFile) {
		var tSrc = JSSHOP.cmnts.getMapMediaSrc(tFile, false);
		tHtml += "<div><img src=\"" + tSrc + "\" style=\"max-width:120px;border:1px solid #ddd;border-radius:6px;\"><br>" +
			"<a href=\"javascript:JSSHOP.cmnts.setPendingMap('" + tScope + "','" + tOwnerId + "','');JSSHOP.cmnts.setPendingMapRoute('" + tScope + "','" + tOwnerId + "','');JSSHOP.cmnts.renderComposerMapPreview('" + tScope + "','" + tOwnerId + "');\" class=\"txtSmall\" style=\"color:#c00;\">" + stxt[1046] + "</a></div>";
	}
	for(var i = 0; i < tRows.length; i++) {
		var tRow = tRows[i] || {};
		if(!tRow.file) { continue; }
		var tRowSrc = JSSHOP.cmnts.getMapMediaSrc(tRow.file, false);
		tHtml += "<div><img src=\"" + tRowSrc + "\" style=\"max-width:120px;border:1px solid #ddd;border-radius:6px;\"><br>" +
			"<a href=\"javascript:JSSHOP.cmnts.removePendingUploadRow('" + tScope + "','" + tOwnerId + "','" + (parseInt(tRow.qmediaId,10)||0) + "');JSSHOP.cmnts.renderComposerMapPreview('" + tScope + "','" + tOwnerId + "');\" class=\"txtSmall\" style=\"color:#c00;\">" + stxt[1046] + "</a></div>";
	}
	tHtml += "</div>";
	tDv.innerHTML = tHtml;
};

JSSHOP.cmnts._loadScriptList = function(tUrls, tDoneCb) {
	var i = 0;
	var loadNext = function() {
		if(i >= tUrls.length) {
			tDoneCb(false);
			return;
		}
		var tUrl = tUrls[i++];
		if(typeof JSSHOP.loadScript === "function") {
			JSSHOP.loadScript(tUrl, function() {
				tDoneCb(true);
			}, "js");
			setTimeout(function() {
				loadNext();
			}, 1200);
			return;
		}
		var s = document.createElement("script");
		s.src = tUrl;
		s.onload = function() { tDoneCb(true); };
		s.onerror = loadNext;
		document.head.appendChild(s);
	};
	loadNext();
};

JSSHOP.cmnts.ensureCaptureLibs = function(tCb) {
	var hasSnap = (typeof snapdom !== "undefined" && snapdom && typeof snapdom.toCanvas === "function");
	var hasH2c = (typeof html2canvas !== "undefined" && typeof html2canvas === "function");
	if(hasSnap || hasH2c) {
		tCb(true);
		return;
	}
	var snapUrls = [
		"js/thirdp/snapdom.js",
		"../incasa/js/thirdp/snapdom.js",
		"https://unpkg.com/@zumer/snapdom/dist/snapdom.min.js"
	];
	var h2cUrls = [
		"js/thirdp/html2canvas.js",
		"../incasa/js/thirdp/html2canvas.js",
		"https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js"
	];
	JSSHOP.cmnts._loadScriptList(snapUrls, function() {
		hasSnap = (typeof snapdom !== "undefined" && snapdom && typeof snapdom.toCanvas === "function");
		if(hasSnap) {
			tCb(true);
			return;
		}
		JSSHOP.cmnts._loadScriptList(h2cUrls, function() {
			hasH2c = (typeof html2canvas !== "undefined" && typeof html2canvas === "function");
			tCb(hasH2c);
		});
	});
};

JSSHOP.cmnts.captureMapCanvas = function(tTargetEl, tCb) {
	if(typeof snapdom !== "undefined" && snapdom && typeof snapdom.toCanvas === "function") {
		snapdom.toCanvas(tTargetEl).then(function(tCanvas) {
			tCb(tCanvas);
		}).catch(function() {
			if(typeof html2canvas !== "undefined" && typeof html2canvas === "function") {
				html2canvas(tTargetEl, {useCORS:true, allowTaint:false, scale:2}).then(function(tCanvas) {
					tCb(tCanvas);
				}).catch(function() { tCb(null); });
			} else {
				tCb(null);
			}
		});
		return;
	}
	if(typeof html2canvas !== "undefined" && typeof html2canvas === "function") {
		html2canvas(tTargetEl, {useCORS:true, allowTaint:false, scale:2}).then(function(tCanvas) {
			tCb(tCanvas);
		}).catch(function() { tCb(null); });
		return;
	}
	tCb(null);
};

JSSHOP.cmnts.afterCommentMapCaptureUpload = function(tResp) {
	try {
		console.log("cmntMap.upload.resp", tResp);
		var tObj = JSON.parse(tResp || "{}");
		if(!tObj || !tObj.in) {
			alert("Map image save failed");
			return;
		}
		if(!JSSHOP.cmnts._pendingMap.ctx) {
			return;
		}
		var tCtx = JSSHOP.cmnts._pendingMap.ctx;
		JSSHOP.cmnts.setPendingMap(tCtx.scope, tCtx.ownerId, tObj.in);

		// Capture note typed in the map popup before closing
		var tNoteEl = document.getElementById("inpCmtMapNote");
		var tNote = (tNoteEl && tNoteEl.value) ? tNoteEl.value.trim() : "";
		if(tNote) {
			var tInputId = (tCtx.scope === "comment") ? "dvCmtInput" : ("dvCmtReplyInput" + tCtx.ownerId);
			var tInputEl = document.getElementById(tInputId);
			if(tInputEl && !tInputEl.innerHTML.trim()) {
				tInputEl.innerHTML = tNote.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
			}
		}

		JSSHOP.cmnts.renderComposerMapPreview(tCtx.scope, tCtx.ownerId);
		JSSHOP.ui.closeLbox();

		// Auto-save: no need for user to click Save separately
		setTimeout(function() {
			if(tCtx.scope === "comment" && typeof doCommentSave === "function") {
				doCommentSave();
			} else if(tCtx.scope === "reply" && typeof doCommentReply === "function") {
				doCommentReply(tCtx.ownerId, tCtx.threadId, tCtx.cmtTo);
			}
		}, 150);
	} catch(e) {
		alert("afterCommentMapCaptureUpload: " + e);
	}
};
var afterCommentMapCaptureUpload = JSSHOP.cmnts.afterCommentMapCaptureUpload;

JSSHOP.cmnts.doCaptureCommentMap = function() {
	var tMapDivId = (JSSHOP.cmnts && JSSHOP.cmnts._pendingMap && JSSHOP.cmnts._pendingMap.mapDivId) ? JSSHOP.cmnts._pendingMap.mapDivId : "map";
	var tTargetEl = document.getElementById(tMapDivId);
	console.log("cmntMap.capture.start", !!tTargetEl);
	if(!tTargetEl) {
		alert("Map not ready");
		return;
	}
	JSSHOP.cmnts.ensureCaptureLibs(function(tOk) {
		console.log("cmntMap.capture.libs", tOk, typeof snapdom, typeof html2canvas);
		if(!tOk) {
			alert("Map capture library not available");
			return;
		}
		var tCtx = JSSHOP.cmnts._pendingMap && JSSHOP.cmnts._pendingMap.ctx ? JSSHOP.cmnts._pendingMap.ctx : {scope:"comment", ownerId:""};
		var tNoteEl = document.getElementById("inpCmtMapNote");
		var tMapNote = tNoteEl ? String(tNoteEl.value || "") : "";
		var tRouteData = JSSHOP.cmnts.buildRouteMediaData();
		JSSHOP.cmnts.setPendingMapRoute(tCtx.scope, tCtx.ownerId, tRouteData);

		var tDoCaptureNow = function() {
			var tHiddenEls = [];
			var tCtrls = tTargetEl.querySelectorAll('.leaflet-control-container, .leaflet-control');
			for(var iHC = 0; iHC < tCtrls.length; iHC++) {
				tHiddenEls.push({el: tCtrls[iHC], vis: tCtrls[iHC].style.visibility});
				tCtrls[iHC].style.visibility = 'hidden';
			}
			JSSHOP.cmnts.captureMapCanvas(tTargetEl, function(tCanvas) {
				for(var iHR = 0; iHR < tHiddenEls.length; iHR++) {
					tHiddenEls[iHR].el.style.visibility = tHiddenEls[iHR].vis;
				}
				console.log("cmntMap.capture.canvas", !!tCanvas);
				if(!tCanvas) {
					alert("Could not capture map");
					return;
				}
				try {
					JSSHOP.cmnts.appendPopupNoteToComposer(tCtx.scope, tCtx.ownerId, tMapNote);
					var tData = tCanvas.toDataURL("image/jpeg");
					console.log("cmntMap.capture.dataLen", tData ? tData.length : 0);
					var tEnc = LZString.compressToEncodedURIComponent(tData);
					console.log("cmntMap.capture.encLen", tEnc ? tEnc.length : 0);
					var tArr = [];
					tArr.push({t:"inpCnvsImg", v:tEnc});
					tArr.push({t:"in", v:String((typeof quid !== "undefined" && quid) ? quid : "anon")});
					JSSHOP.ajax.doNwstGenAjaxPost(tArr, "_p/fileCnvsImg.php", "POST", afterCommentMapCaptureUpload, 30000);
				} catch(eCap) {
					alert("Map capture save error: " + eCap);
				}
			});
		};

		var tPayload = JSSHOP.cmnts.getRoutePayloadFromMediaData(tRouteData);
		var tPts = [];
		if(tPayload && tPayload.points && tPayload.points.length > 0) {
			for(var iP = 0; iP < tPayload.points.length; iP++) {
				var tPLat = parseFloat(tPayload.points[iP].lat);
				var tPLng = parseFloat(tPayload.points[iP].lng);
				if(!isNaN(tPLat) && !isNaN(tPLng)) {
					tPts.push([tPLat, tPLng]);
				}
			}
		}

		if(typeof map !== "undefined" && map && tPts.length > 0) {
			try {
				if(tPts.length > 1) {
					var tTmpLine = L.polyline(tPts, {opacity:0});
					map.fitBounds(tTmpLine.getBounds(), {padding:[16,16]});
				} else {
					map.setView(tPts[0], 17);
				}
				setTimeout(function() {
					tDoCaptureNow();
				}, cmntMapCaptureDelayMs);
				return;
			} catch(eFit) {
				console.log("cmntMap.capture.fit.warn", eFit);
			}
		}

		tDoCaptureNow();
	});
};
var doCaptureCommentMap = JSSHOP.cmnts.doCaptureCommentMap;

JSSHOP.cmnts.finishCommentImageUpload = function(theImg) {
	try {	} catch(e) {
		alert("finishCommentImageUpload: " + e);
	}
		var tFile = String(theImg || "").trim();
		console.log("cmntImg.upload.resp", tFile);
		if(!tFile || tFile.toLowerCase().indexOf("error") > -1) {
			alert("Image upload failed: " + tFile);
			return;
		}
		if(!_cmtUploadCtx) {
			return;
		}
		var tCtx = _cmtUploadCtx;
		JSSHOP.cmnts.preSaveCommentUploadMedia(tCtx.scope, tCtx.ownerId, tFile, function(tQmediaId) {
			console.log("cmntImg.presave.done", {scope:tCtx.scope, ownerId:tCtx.ownerId, qmediaId:tQmediaId, file:tFile});
			if((parseInt(tQmediaId, 10) || 0) < 1) {
				alert("Could not stage uploaded image.");
				return;
			}
			JSSHOP.cmnts.addPendingUploadRow(tCtx.scope, tCtx.ownerId, {
				qmediaId: parseInt(tQmediaId, 10) || 0,
				file: tFile
			});
			JSSHOP.cmnts.renderComposerMapPreview(tCtx.scope, tCtx.ownerId);
			var tMsg = document.getElementById("cmumsgBox");
			if((!tMsg) && tCtx.uxPrefix) {
				tMsg = document.getElementById(tCtx.uxPrefix + "msgBox");
			}
			if(tMsg) {
				tMsg.innerHTML = "Image staged. Click Save to close.";
			}
		});

};
var finishCommentImageUpload = JSSHOP.cmnts.finishCommentImageUpload;

JSSHOP.cmnts._nativeCommentUploadInput = null;

JSSHOP.cmnts.uploadCommentImageNative = function(tFile, tDone) {
	try {
		if(!tFile) {
			if(typeof tDone === "function") { tDone("error:no_file"); }
			return;
		}
		var tUid = (typeof quid !== "undefined" && quid) ? quid : "anon";
		var tUrl = "_p/file_upload.php?in=" + encodeURIComponent(tUid) + "&ud=" + encodeURIComponent("images/ucontent");
		console.log("cmntImg.native.upload.start", {name:tFile.name, size:tFile.size, type:tFile.type, url:tUrl});
		var tFd = new FormData();
		tFd.append("uploadfile", tFile);
		var tXhr = new XMLHttpRequest();
		tXhr.open("POST", tUrl, true);
		tXhr.onreadystatechange = function() {
			if(tXhr.readyState !== 4) { return; }
			var tRespTxt = String(tXhr.responseText || "");
			console.log("cmntImg.native.upload.resp", {status:tXhr.status, resp:tRespTxt});
			if(tXhr.status < 200 || tXhr.status >= 300) {
				if(typeof tDone === "function") { tDone("error:http_" + tXhr.status); }
				return;
			}
			try {
				var tObj = JSON.parse(tRespTxt || "{}");
				if(tObj && tObj.success === true && tObj.in) {
					if(typeof tDone === "function") { tDone(tObj.in); }
					return;
				}
				if(tObj && tObj.msg) {
					if(typeof tDone === "function") { tDone(String(tObj.msg)); }
					return;
				}
			} catch(eJson) {
				void(0);
			}
			if(typeof tDone === "function") { tDone(tRespTxt); }
		};
		tXhr.send(tFd);
	} catch(e) {
		console.log("cmntImg.native.upload.error", e);
		if(typeof tDone === "function") { tDone("error:" + e); }
	}
};

JSSHOP.cmnts.openCommentImageChooser = function() {
	try {
		if(isJApp == "y") {
			if(_cmtUploadCtx && _cmtUploadCtx.uploadBtnId) {
				doMediaBtnSetup(_cmtUploadCtx.uploadBtnId, _cmtUploadCtx.uxPrefix || "cmu", "finishCommentImageUpload", "images/ucontent");
			}
			return;
		}
		var tCtx = _cmtUploadCtx || {};
		var tMsg = null;
		if(tCtx.uxPrefix) {
			tMsg = document.getElementById(tCtx.uxPrefix + "msgBox");
		}
		if(tMsg) { tMsg.innerHTML = ""; }
		if(!JSSHOP.cmnts._nativeCommentUploadInput) {
			var tInput = document.createElement("input");
			tInput.type = "file";
			tInput.accept = "image/*";
			tInput.style.display = "none";
			tInput.id = "cmtNativeUploadInput";
			tInput.onchange = function() {
				var tFile = (tInput.files && tInput.files[0]) ? tInput.files[0] : null;
				if(!tFile) { return; }
				var tPout = null;
				if(_cmtUploadCtx && _cmtUploadCtx.uxPrefix) {
					tPout = document.getElementById(_cmtUploadCtx.uxPrefix + "progressOuter");
					tMsg = document.getElementById(_cmtUploadCtx.uxPrefix + "msgBox");
				}
				if(tPout) { tPout.style.display = "block"; }
				if(tMsg) { tMsg.innerHTML = "Uploading..."; }
				JSSHOP.cmnts.uploadCommentImageNative(tFile, function(tRespIn) {
					if(tPout) { tPout.style.display = "none"; }
					finishCommentImageUpload(tRespIn);
					tInput.value = "";
				});
			};
			document.body.appendChild(tInput);
			JSSHOP.cmnts._nativeCommentUploadInput = tInput;
		}
		JSSHOP.cmnts._nativeCommentUploadInput.click();
	} catch(e) {
		console.log("cmntImg.native.choose.error", e);
	}
};

JSSHOP.cmnts.doSaveCommentImagePopup = function() {
	try {
		if(!_cmtUploadCtx) {
			JSSHOP.ui.closeLbox();
			return;
		}
		var tCtx = _cmtUploadCtx;
		var tNoteId = (tCtx.noteId) ? tCtx.noteId : "inpCmtImgNote";
		var tNoteEl = document.getElementById(tNoteId);
		var tNote = (tNoteEl && tNoteEl.value) ? tNoteEl.value.trim() : "";
		console.log("cmntImg.popup.save", {scope:tCtx.scope, ownerId:tCtx.ownerId, noteLen:tNote.length});
		JSSHOP.ui.closeLbox();
		if(tCtx.scope === "comment" && typeof doCommentSave === "function") {
			doCommentSave(tNote);
		} else if(tCtx.scope === "reply" && typeof doCommentReply === "function") {
			doCommentReply(tCtx.ownerId, tCtx.threadId, tCtx.cmtTo, tNote);
		}
	} catch(e) {
		alert("doSaveCommentImagePopup: " + e);
	}
};
var doSaveCommentImagePopup = JSSHOP.cmnts.doSaveCommentImagePopup;

JSSHOP.cmnts.doOpenCommentImagePopup = function(tScope, tOwnerId, tThreadId, tCmtTo) {
	if(isGuestCommentUser() && !canGuestPostComments()) {
		JSSHOP.shared.showUserProfile(0);
		return;
	}
	try {
		var tUxPrefix = "cmu" + String((typeof JSSHOP.getUnixMiliStamp === "function") ? JSSHOP.getUnixMiliStamp() : (new Date().getTime())) + String(Math.floor(Math.random() * 1000));
		var tUploadBtnId = tUxPrefix + "uploadBtn";
		var tNoteId = tUxPrefix + "ImgNote";
		_cmtUploadCtx = {
			scope: String(tScope || "comment"),
			ownerId: String(tOwnerId || ""),
			threadId: String(tThreadId || ""),
			cmtTo: String(tCmtTo || ""),
			uploadBtnId: tUploadBtnId,
			uxPrefix: tUxPrefix,
			noteId: tNoteId,
			previewId: tUxPrefix + "preview"
		};

		var tHtml = "";
		tHtml += "<div style=\"padding:10px;background:#fff;min-width:320px;max-width:360px;\">";
		tHtml += "<div class=\"txtSmall\" style=\"color:#888;margin-bottom:8px;\">" + (stxt[1048] || "Upload image and save comment.") + "</div>";
		tHtml += "<textarea id=\"" + tNoteId + "\" class=\"form-control\" style=\"min-height:48px;margin-bottom:8px;padding:6px 8px;font-size:12px;line-height:1.2;\" placeholder=\"Add note with this image...\"></textarea>";
		tHtml += "<div id=\"" + tUxPrefix + "preview\" style=\"display:none;margin-bottom:8px;\"></div>";
		tHtml += "<div id=\"" + tUxPrefix + "progressOuter\" style=\"display:none;margin-bottom:6px;\"><div id=\"" + tUxPrefix + "progressBar\" style=\"height:6px;background:#2a7;\"></div></div>";
		tHtml += "<div id=\"" + tUxPrefix + "msgBox\" class=\"txtSmall\" style=\"margin-bottom:6px;\"></div>";
		tHtml += "<div id=\"" + tUxPrefix + "dragbox\" style=\"display:none;\"></div>";
		tHtml += "<div style=\"display:flex;gap:8px;justify-content:flex-end;\">";
		tHtml += "<button id=\"" + tUploadBtnId + "\" onclick=\"JSSHOP.cmnts.openCommentImageChooser();return false;\" class=\"btn btn-sm btn-success color-bg-success-emphasis color-fg-on-emphasis\" style=\"font-size:11px;line-height:1.1;padding:2px 8px;\"><i class=\"small-material-icons\">&#xe439;</i></button>";
		tHtml += "<button type=\"button\" class=\"btn btn-sm btn-primary\" style=\"font-size:11px;line-height:1.1;padding:2px 8px;\" onclick=\"doSaveCommentImagePopup();\">Save</button>";
		tHtml += "<button type=\"button\" class=\"btn btn-outline-secondary btn-sm\" style=\"font-size:11px;line-height:1.1;padding:2px 6px;\" onclick=\"JSSHOP.ui.closeLbox();\">Cancel</button>";
		tHtml += "</div></div>";

		console.log("cmntImg.popup.open", _cmtUploadCtx);
		JSSHOP.ui.popNuFillLbox(tHtml, 0);
		currMediaID = (typeof quid !== "undefined" && quid) ? quid : "anon";
		JSSHOP.cmnts.clearPopupUploadState(_cmtUploadCtx.scope, _cmtUploadCtx.ownerId);
		setTimeout(function() {
			var tDupCnt = document.querySelectorAll("[id='" + tUploadBtnId + "']").length;
			console.log("cmntImg.popup.setupUploader", {btn:tUploadBtnId, prefix:tUxPrefix, currMediaID:currMediaID, dupCnt:tDupCnt});
			if(isJApp == "y") {
				doMediaBtnSetup(tUploadBtnId, tUxPrefix, "finishCommentImageUpload", "images/ucontent");
			}
		}, 60);
	} catch(e) {
		alert("doOpenCommentImagePopup: " + e);
	}
};
var doOpenCommentImagePopup = JSSHOP.cmnts.doOpenCommentImagePopup;

JSSHOP.cmnts._pendingUploadInsertCb = null;

var afterCommentUploadPreSave = function(a, theResp, c) {
	var tCb = JSSHOP.cmnts._pendingUploadInsertCb;
	JSSHOP.cmnts._pendingUploadInsertCb = null;
	var tId = getInsertedRowIdFromResp(theResp);
	console.log("cmntImg.presave.resp", {resp:theResp, qmediaId:tId});
	if(typeof tCb === "function") {
		tCb(tId, theResp);
	}
};

JSSHOP.cmnts.preSaveCommentUploadMedia = function(tScope, tOwnerId, tFileName, tDoneCb) {
	tFileName = String(tFileName || "").trim();
	if(!tFileName) {
		if(typeof tDoneCb === "function") { tDoneCb(0, ""); }
		return;
	}
	var tProdIdNum = parseInt(_cmtProdId, 10) || 0;
	JSSHOP.shared.setFrmFieldVal("qmedia", "m_rtype", "5");
	JSSHOP.shared.setFrmFieldVal("qmedia", "m_uid", quid);
	JSSHOP.shared.setFrmFieldVal("qmedia", "m_coid", tProdIdNum);
	JSSHOP.shared.setFrmFieldVal("qmedia", "m_catid", tProdIdNum);
	JSSHOP.shared.setFrmFieldVal("qmedia", "m_category", "cmnts");
	JSSHOP.shared.setFrmFieldVal("qmedia", "m_pid", "0");
	JSSHOP.shared.setFrmFieldVal("qmedia", "m_file", tFileName);
	JSSHOP.shared.setFrmFieldVal("qmedia", "m_file_thumb", "s_thumb" + tFileName);
	JSSHOP.shared.setFrmFieldVal("qmedia", "m_title", tFileName);
	JSSHOP.shared.setFrmFieldVal("qmedia", "m_data", "comment_image");
	JSSHOP.shared.setFrmFieldVal("qmedia", "m_vala", String(tScope || "comment"));
	JSSHOP.shared.setFrmFieldVal("qmedia", "m_valb", _cmtProdType || "");
	JSSHOP.shared.setFrmFieldVal("qmedia", "m_dadded", JSSHOP.getUnixTimeStamp());
	var tDO = {};
	tDO.knvp = JSSHOP.shared.getFrmVals(document["qmedia"], "nada");
	var oi = getNuDBFnvp("qmedia", 6, null, tDO);
	console.log("cmntImg.presave.query", {scope:tScope, ownerId:tOwnerId, file:tFileName});
	JSSHOP.cmnts._pendingUploadInsertCb = tDoneCb;
	doQComm(oi["rq"], null, "afterCommentUploadPreSave");
};

JSSHOP.cmnts.popLboxMapComment = function(tLocLat, tLocLng, tAfterOpen) {
	try {
		if(JSSHOP.cmnts && typeof JSSHOP.cmnts.cleanupMapTools === "function") {
			JSSHOP.cmnts.cleanupMapTools();
		}
		currMapLatStr = tLocLat;
		currMapLngStr = tLocLng;

		tmpLbox = document.getElementById('lightbox');
		tmpLCbox = document.getElementById('dvSandMap');
		if(!tmpLbox || !tmpLCbox) {
			console.log("cmntMap.pop: missing lightbox elements", !!tmpLbox, !!tmpLCbox);
			return;
		}
		tmpLbox.style.display = "inline";
		tmpLCbox.style.position = "fixed";
		tmpLCbox.style.display = 'block';
		tmpLCbox.style.boxSizing = 'border-box';
		tmpLCbox.style.width = '320px';
		tmpLCbox.style.maxWidth = '320px';
		tmpLCbox.style.minWidth = '320px';
		tmpLCbox.style.margin = '0';
		tmpLCbox.style.padding = '0';
		tmpLCbox.style.overflow = 'hidden';
		tmpLCbox.style.wordWrap = 'normal';
		tmpLCbox.style.border = '1px solid #ddd';
		tmpLCbox.style.borderRadius = '8px';
		tmpLCbox.style.background = '#fff';
		tmpLCbox.style.zIndex = '999999';
		tmpLCbox.style.top = '8px';
		tmpLCbox.style.left = '50%';
		tmpLCbox.style.transform = 'translateX(-50%)';

		var tMapDivId = "mapCmtPopup";
		tmpLCbox.innerHTML = "<div id=\"" + tMapDivId + "\" style=\"width:320px;height:320px;max-width:320px;max-height:320px;min-width:320px;min-height:320px;\"></div>";
		JSSHOP.cmnts._pendingMap.mapDivId = tMapDivId;
		var tDestIconUrl = "";
		var tDestTitle = "Destination";
		if(typeof currPlaceObj !== "undefined" && currPlaceObj) {
			var tPlLogo = String(currPlaceObj.qlogp_logoimg || "").trim();
			if(tPlLogo && tPlLogo !== "default.gif" && tPlLogo.indexOf(".") !== -1) {
				tDestIconUrl = JSSHOP.msgs.getMsgUserThumbSrc(tPlLogo);
			}
			if(currPlaceObj.qlogp_name) {
				tDestTitle = currPlaceObj.qlogp_name;
			}
		}

		console.log("cmntMap.pop: open", tLocLat, tLocLng);
		tDGMretStr = JSSHOP.ui.doGenMap(tLocLat, tLocLng, tMapDivId, tDestIconUrl, tDestTitle, true);
		console.log("cmntMap.pop: doGenMap", tDGMretStr);
		if(tDGMretStr !== "OK") {
			alert("Error: " + tDGMretStr);
			return;
		}
		if(typeof tAfterOpen === "function") {
			tAfterOpen();
		}
		if(typeof map !== "undefined" && map && typeof map.invalidateSize === "function") {
			setTimeout(function() {
				try { map.invalidateSize(true); } catch(eInv) { console.log("cmntMap.pop.invalidateWarn", eInv); }
			}, 80);
		}
		tmpLCbox.width = tmpLCbox.width + 2;
		setTimeout(function () {
			window.dispatchEvent(new Event('resize'));
		}, 1000);
	} catch(e) {
		console.log("cmntMap.pop.ERROR", e);
		alert("popLboxMapComment: " + e);
	}
};

JSSHOP.cmnts.doOpenCommentMapPopup = function(tScope, tOwnerId, tThreadId, tCmtTo) {
	if(isGuestCommentUser() && !canGuestPostComments()) {
		JSSHOP.shared.showUserProfile(0);
		return;
	}
	var tLat = parseFloat(_cmtMapLat);
	var tLng = parseFloat(_cmtMapLng);
	console.log("cmntMap.open.request", tScope, tOwnerId, _cmtMapLat, _cmtMapLng);
	if(isNaN(tLat) || isNaN(tLng)) {
		tLat = parseFloat(currMapLatStr);
		tLng = parseFloat(currMapLngStr);
	}
	if(isNaN(tLat) || isNaN(tLng)) {
		tLat = parseFloat(currDefLat);
		tLng = parseFloat(currDefLng);
	}
	if(isNaN(tLat) || isNaN(tLng)) {
		tLat = 0;
		tLng = 0;
	}
	console.log("cmntMap.open.coords", tLat, tLng);
	JSSHOP.cmnts._pendingMap.ctx = {scope: String(tScope || "comment"), ownerId: String(tOwnerId || ""), threadId: String(tThreadId || ""), cmtTo: String(tCmtTo || "") };
		JSSHOP.cmnts.popLboxMapComment(tLat, tLng, function() {
		setTimeout(function() {
			if(_drawBtn && _drawBtn.button && typeof _drawBtn.button.click === "function") {
				try {
					_drawBtn.button.click();
				} catch(eDrawAuto) {
					console.log("cmntMap.draw.auto.warn", eDrawAuto);
				}
			}
			var tDvSand = document.getElementById("dvSandMap");
			console.log("cmntMap.open.dvSand", !!tDvSand);
			if(!tDvSand) { return; }
			JSSHOP.cmnts.cleanupMapTools();
			var tTools = document.createElement("div");
			tTools.id = "dvCmtMapTools";
			tTools.style.cssText = "padding:6px 8px;background:#fff;border-top:1px solid #ddd;font-size:12px;line-height:1.2;";
			var tMapTip = stxt[1047] || "Click on map to draw route. Enter your message and save.";
			tTools.innerHTML = "<div class=\"txtSmall\" style=\"color:#888;margin-bottom:6px;\">" + JSSHOP.cmnts.escapeHtml(tMapTip) + "</div>" +
				"<textarea id=\"inpCmtMapNote\" class=\"form-control\" style=\"min-height:48px;margin-bottom:6px;padding:6px 8px;font-size:12px;line-height:1.2;\" placeholder=\"Add note with this map...\"></textarea>" +
				"<div style=\"text-align:right;font-size:12px;line-height:1.2;\">" +
				"<button type=\"button\" class=\"btn btn-outline-secondary btn-sm\" style=\"font-size:11px;line-height:1.1;padding:2px 6px;\" onclick=\"JSSHOP.ui.emptyMapDraw();\">Clear Draw</button> " +
				"<button type=\"button\" class=\"btn btn-sm btn-success color-bg-success-emphasis color-fg-on-emphasis\" style=\"font-size:11px;line-height:1.1;padding:2px 6px;\" onclick=\"doCaptureCommentMap();\">Post Comment</button> " +
				"<button type=\"button\" class=\"btn btn-outline-secondary btn-sm\" style=\"font-size:11px;line-height:1.1;padding:2px 6px;\" onclick=\"JSSHOP.ui.closeLbox();\">Cancel</button>" +
				"</div>";
			tDvSand.appendChild(tTools);
			console.log("cmntMap.open.toolsAdded", tTools.id);
		}, 450);
	});
};
var doOpenCommentMapPopup = JSSHOP.cmnts.doOpenCommentMapPopup;

var getInsertedRowIdFromResp = function(tResp) {
	var tId = 0;
	try {
		var tObj = JSON.parse(tResp || "{}");
		if(tObj && tObj.data) {
			tId = parseInt(tObj.data, 10) || 0;
		}
		if(!tId && tObj && tObj._id) {
			tId = parseInt(tObj._id, 10) || 0;
		}
	} catch(e) {
		tId = 0;
	}
	if(!tId) {
		var tM = String(tResp || "").match(/\"data\"\s*:\s*\"?(\d+)/);
		if(tM && tM[1]) {
			tId = parseInt(tM[1], 10) || 0;
		}
	}
	return tId;
};

var finalizeCommentSaveRefresh = function() {
	_cmtSaveCtx = null;
	getCommentsDiv(_cmtProdId, _cmtProdType, _cmtOwnerUid);
	var tCmtsDv = document.getElementById("dvComments");
	if(tCmtsDv) { tCmtsDv.scrollTop = tCmtsDv.scrollHeight; }
};

var afterCommentMediaSave = function(a, theResp, c) {
	var tRespStr = String(theResp || "");
	if(tRespStr.toLowerCase().indexOf("error") !== -1) {
		console.log("cmnt.media.save.error", tRespStr);
	}
	finalizeCommentSaveRefresh();
};

JSSHOP.cmnts._pendingUploadAttachCb = null;

var afterCommentUploadAttachSave = function(a, theResp, c) {
	var tCb = JSSHOP.cmnts._pendingUploadAttachCb;
	JSSHOP.cmnts._pendingUploadAttachCb = null;
	console.log("cmntImg.attach.resp", theResp);
	if(typeof tCb === "function") {
		tCb(theResp);
	}
};

JSSHOP.cmnts.attachPendingUploadsToRow = function(tScope, tOwnerId, tRowId, tDoneCb) {
	tRowId = parseInt(tRowId, 10) || 0;
	if(!tRowId) {
		if(typeof tDoneCb === "function") { tDoneCb(); }
		return;
	}
	var tRows = JSSHOP.cmnts.getPendingUploadRows(tScope, tOwnerId);
	if(!tRows || tRows.length === 0) {
		if(typeof tDoneCb === "function") { tDoneCb(); }
		return;
	}
	var tIds = [];
	for(var i = 0; i < tRows.length; i++) {
		var tId = parseInt((tRows[i] || {}).qmediaId, 10) || 0;
		if(tId > 0) { tIds.push(tId); }
	}
	if(tIds.length === 0) {
		if(typeof tDoneCb === "function") { tDoneCb(); }
		return;
	}
	var tQry = "UPDATE qmedia SET m_pid='" + tRowId + "' WHERE _id IN (" + tIds.join(",") + ") AND m_uid='" + quid + "' AND m_pid='0' AND m_catid='" + (parseInt(_cmtProdId, 10) || 0) + "' AND m_category='cmnts' AND m_rtype='5'";
	console.log("cmntImg.attach.query", {scope:tScope, ownerId:tOwnerId, rowId:tRowId, ids:tIds.join(",")});
	JSSHOP.cmnts._pendingUploadAttachCb = function() {
		JSSHOP.cmnts.clearPendingUploadRows(tScope, tOwnerId);
		if(typeof tDoneCb === "function") { tDoneCb(); }
	};
	doQComm(tQry, null, "afterCommentUploadAttachSave");
};

var saveCommentMediaRef = function(tKind, tRowId, tFileName) {
	tRowId = parseInt(tRowId, 10) || 0;
	tFileName = String(tFileName || "").trim();
	if(!tRowId || !tFileName) { return; }

	var tProdIdNum = parseInt(_cmtProdId, 10) || 0;
	console.log("cmnt.media.save", {kind:tKind, rowId:tRowId, file:tFileName, catid:tProdIdNum});
	JSSHOP.shared.setFrmFieldVal("qmedia", "m_rtype", "5");
	JSSHOP.shared.setFrmFieldVal("qmedia", "m_uid", quid);
	JSSHOP.shared.setFrmFieldVal("qmedia", "m_coid", tProdIdNum);
	JSSHOP.shared.setFrmFieldVal("qmedia", "m_catid", tProdIdNum);
	JSSHOP.shared.setFrmFieldVal("qmedia", "m_category", "cmnts");
	JSSHOP.shared.setFrmFieldVal("qmedia", "m_pid", tRowId);
	JSSHOP.shared.setFrmFieldVal("qmedia", "m_file", tFileName);
	JSSHOP.shared.setFrmFieldVal("qmedia", "m_file_thumb", "s_thumb" + tFileName);
	var tMediaData = (_cmtSaveCtx && _cmtSaveCtx.mediaData) ? String(_cmtSaveCtx.mediaData) : "";
	if(!tMediaData) { tMediaData = "map_image"; }
	JSSHOP.shared.setFrmFieldVal("qmedia", "m_data", tMediaData);
	JSSHOP.shared.setFrmFieldVal("qmedia", "m_vala", tKind);
	JSSHOP.shared.setFrmFieldVal("qmedia", "m_valb", _cmtProdType || "");
	JSSHOP.shared.setFrmFieldVal("qmedia", "m_dadded", JSSHOP.getUnixTimeStamp());

	var tDO = {};
	tDO.knvp = JSSHOP.shared.getFrmVals(document["qmedia"], "nada");
	var oi = getNuDBFnvp("qmedia", 6, null, tDO);
	doQComm(oi["rq"], null, "afterCommentMediaSave");
};

var setCmtsDiv = function(a, theResp, c) {
	console.log("setCmtsDiv.resp: " + theResp);
    var tCmtsDv = document.getElementById("dvComments");
    if(!tCmtsDv) { return; }

    var tCmtListDv = document.getElementById("dvCmtList");
    if(!tCmtListDv) { return; }

	var tCmtArr = parseDbRowsFromResp(theResp);
    console.log("cmnt.render.rows", {
		prodId: _cmtProdId,
		prodType: _cmtProdType,
		count: (tCmtArr && tCmtArr.length) ? tCmtArr.length : 0,
		rawType: typeof theResp
	});

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
			var tCmtFromNm = getCmntFullName(tCmt.cmts_from, tCmt.u_fname, tCmt.u_lname, tCmt.u_name, "Anonymous");
			var tCmtIcon = getCmntIconVal(tCmt.cmts_from_icon, tCmt.u_icon);
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
				tCmtStr += tCmtAvatarOpen + "<img src=\"" + JSSHOP.msgs.getMsgUserThumbSrc(tCmtIcon) + "\" style=\"width:30px;height:30px;border-radius:50%;margin-right:8px;\">" + tCmtAvatarClose;
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
			var tCmtMapFile = (tCmt.cmts_map_file && tCmt.cmts_map_file !== "normal") ? tCmt.cmts_map_file : ((tCmt.cmts_media && tCmt.cmts_media !== "normal") ? tCmt.cmts_media : "");
			if(tCmtMapFile) {
				var tCmtMapUrl = JSSHOP.cmnts.getMapMediaSrc(tCmtMapFile, true);
				var tCmtFullUrl = (tCmtMapFile.indexOf("http://") === 0 || tCmtMapFile.indexOf("https://") === 0 || tCmtMapFile.indexOf("/") === 0) ? tCmtMapFile : ("images/ucontent/" + tCmtMapFile);
				var tCmtRouteHref = JSSHOP.cmnts.getRouteLinkFromMediaData(tCmt.cmts_map_data);
				if(tCmtRouteHref) {
					console.log("cmnt.route.href", tCmt._id, tCmtRouteHref);
					JSSHOP.cmnts._routeReplayData[tCmt._id] = tCmt.cmts_map_data || "";
					tCmtStr += "<div style=\"margin-left:38px;margin-top:6px;\"><a href=\"javascript:JSSHOP.cmnts.popRouteReplayMap(" + tCmt._id + ");\" style=\"display:inline-block;\"><img src=\"" + tCmtMapUrl + "\" style=\"display:block;max-width:200px;max-height:200px;height:auto;border:1px solid #ddd;border-radius:6px;\"></a></div>";
				} else {
					tCmtStr += "<div style=\"margin-left:38px;margin-top:6px;\"><a href=\"" + tCmtFullUrl + "\" target=\"_blank\" style=\"display:inline-block;\"><img src=\"" + tCmtMapUrl + "\" style=\"display:block;max-width:200px;max-height:200px;width:100%;height:auto;border:1px solid #ddd;border-radius:6px;\"></a></div>";
				}
			}
            tCmtStr += "<div style=\"margin-left:38px;margin-top:6px;\">";
            var tCmtIsGuest = (typeof quid === "undefined" || quid === "0" || quid === 0 || quid === "noQvalue");
            var tCmtReplyHref = tCmtIsGuest ?
                "javascript:JSSHOP.shared.showUserProfile(0);" :
                "javascript:doShowCmtReply('" + tCmt._id + "');";
            var tCmtLikeHref  = tCmtIsGuest ?
                "javascript:JSSHOP.shared.showUserProfile(0);" :
                "javascript:doCommentLike('" + tCmt._id + "',0);";
			tCmtStr += "<a href=\"" + tCmtReplyHref + "\" class=\"txtSmall txtBold\" style=\"color:#1877f2;\">" + stxt[1030] + "</a>";
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
			tCmtStr += "<div id=\"dvCmtMapPrev_reply_" + tCmt._id + "\" style=\"display:none;\"></div>";
			if(useCmntRtDrw == "yes") {
				tCmtStr += "<button type=\"button\" onclick=\"doOpenCommentMapPopup('reply','" + tCmt._id + "','" + tCmt.cmts_threadid + "','" + tCmtFromNm + "');return false;\" title=\"" + (stxt[1047] || "Draw Route") + "\" style=\"padding:4px 8px; background:#f5f6f7; border:none; border-radius:4px; cursor:pointer; margin-right:10px;\"><i class=\"small-material-icons txtClrHdr\" style=\"font-size:20px;\">&#xe55b;</i></button>";
			}
			if(useCmntFUpload == "yes") {
				tCmtStr += "<button type=\"button\" onclick=\"doOpenCommentImagePopup('reply','" + tCmt._id + "','" + tCmt.cmts_threadid + "','" + tCmtFromNm + "');return false;\" title=\"" + (stxt[1049] || "Upload Image") + "\" style=\"padding:4px 8px; background:#f5f6f7; border:none; border-radius:4px; cursor:pointer; margin-right:10px;\"><i class=\"small-material-icons txtClrHdr\" style=\"font-size:20px;\">&#xe439;</i></button>";
			}
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
			var tSafeThreadId = String(tRCmt.cmts_threadid || "").replace(/'/g, "''");
			var tProdIdNumR = parseInt(_cmtProdId, 10) || 0;
			var tRepQstr = "SELECT r.*, " + getCmntUserSelectFrag("u") + ", m.m_file AS cm_map_file, m.m_data AS cm_map_data FROM qcmnt r LEFT JOIN " + currQUserTable + " u ON u." + currQUserIdFld + " = r.cm_userid LEFT JOIN qmedia m ON m.m_pid = r._id AND m.m_catid = " + tProdIdNumR + " AND m.m_category = 'cmnts' AND m.m_rtype = 5 WHERE r.cm_threadid='" + tSafeThreadId + "' AND r.cm_rtype=5 ORDER BY r.cm_dadded ASC";
			doQComm(tRepQstr, "dvCmtReplies_" + tRCmt._id, "setCmtReplies");
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

	var tRepArr = parseDbRowsFromResp(theResp);
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
		var tRepFrom   = getCmntFullName(tRep.cm_from, tRep.u_fname, tRep.u_lname, tRep.u_name, "Anonymous");
		var tRepIcon   = getCmntIconVal(tRep.cm_from_icon, tRep.u_icon);
        var tRepMatter = "";
        try { tRepMatter = decodeURIComponent(tRep.cm_matter); } catch(e) { tRepMatter = tRep.cm_matter; }

        tRepStr += "<div id=\"dvCmtRep_" + tRep._id + "\" style=\"margin:4px 0;padding:6px 8px;border-left:3px solid #ccc;border-radius:4px;\" class=\"bkgdClrNrml\">";
        tRepStr += "<div style=\"display:flex;align-items:center;margin-bottom:4px;\">";
        var tRepUsrLink    = (tRep.cm_userid && tRep.cm_userid != "0") ?
            "javascript:eindex('aa-show-user','pid=aa-show-user&tuid=" + tRep.cm_userid + "')" : null;
        var tRepAvatarOpen  = tRepUsrLink ? "<a href=\"" + tRepUsrLink + "\">" : "<span>";
        var tRepAvatarClose = tRepUsrLink ? "</a>" : "</span>";
        if(tRepIcon && tRepIcon !== "") {
			tRepStr += tRepAvatarOpen + "<img src=\"" + JSSHOP.msgs.getMsgUserThumbSrc(tRepIcon) + "\" style=\"width:22px;height:22px;border-radius:50%;margin-right:6px;\">" + tRepAvatarClose;
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
		var tRepMapFile = (tRep.cm_map_file && tRep.cm_map_file !== "normal") ? tRep.cm_map_file : ((tRep.cm_media && tRep.cm_media !== "normal") ? tRep.cm_media : "");
		if(tRepMapFile) {
			var tRepMapUrl = JSSHOP.cmnts.getMapMediaSrc(tRepMapFile, true);
			var tRepFullUrl = (tRepMapFile.indexOf("http://") === 0 || tRepMapFile.indexOf("https://") === 0 || tRepMapFile.indexOf("/") === 0) ? tRepMapFile : ("images/ucontent/" + tRepMapFile);
			var tRepRouteHref = JSSHOP.cmnts.getRouteLinkFromMediaData(tRep.cm_map_data);
			if(tRepRouteHref) {
				console.log("cmnt.route.reply.href", tRep._id, tRepRouteHref);
				JSSHOP.cmnts._routeReplayData[tRep._id] = tRep.cm_map_data || "";
				tRepStr += "<div style=\"margin-left:28px;margin-top:5px;\"><a href=\"javascript:JSSHOP.cmnts.popRouteReplayMap(" + tRep._id + ");\" style=\"display:inline-block;\"><img src=\"" + tRepMapUrl + "\" style=\"display:block;max-width:200px;max-height:200px;height:auto;border:1px solid #ddd;border-radius:6px;\"></a></div>";
			} else {
				tRepStr += "<div style=\"margin-left:28px;margin-top:5px;\"><a href=\"" + tRepFullUrl + "\" target=\"_blank\" style=\"display:inline-block;\"><img src=\"" + tRepMapUrl + "\" style=\"display:block;max-width:200px;max-height:200px;width:100%;height:auto;border:1px solid #ddd;border-radius:6px;\"></a></div>";
			}
		}
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

var getCommentsDiv = function(tProdId, tProdType, tOwnerUid, tMapLat, tMapLng) {
    _cmtProdId   = tProdId   || null;
    _cmtProdType = tProdType || "prod";
    _cmtOwnerUid = tOwnerUid || null;
	_cmtMapLat = (typeof tMapLat !== "undefined") ? tMapLat : _cmtMapLat;
	_cmtMapLng = (typeof tMapLng !== "undefined") ? tMapLng : _cmtMapLng;

    var tCmtsDv = document.getElementById("dvComments");
    if(!tCmtsDv) { return; }

	var tIsGuestUser = isGuestCommentUser();
	var tCanPostComments = canCurrentUserPostComments();

	var tCmtPrivOpts = "";
	if(!tIsGuestUser) {
        tCmtPrivOpts = "<div style=\"display:flex;align-items:center;gap:10px;margin-top:6px;\">" +
            "<label class=\"txtSmall\"><input type=\"radio\" name=\"cmtPrivacy\" id=\"cmtPrivPub\" value=\"pub\" checked> " + stxt[1032] + "</label>" +
            "<label class=\"txtSmall\"><input type=\"radio\" name=\"cmtPrivacy\" id=\"cmtPrivPrv\" value=\"prv\"> " + stxt[1033] + "</label>" +
            "</div>";
    }

    var tGuestFields = "";
	if(tIsGuestUser && tCanPostComments) {
        tGuestFields = "<input type=\"text\" id=\"dvCmtFromName\" placeholder=\"" + stxt[1038] + "\" class=\"form-control\" style=\"margin-bottom:5px;\">" +
            "<input type=\"text\" id=\"dvCmtFromEmail\" placeholder=\"" + stxt[50] + "\" class=\"form-control\" style=\"margin-bottom:5px;\">";
    }

	var tCmtMapBtnStr = "";
	if(useCmntRtDrw == "yes" && tCanPostComments) {
		tCmtMapBtnStr = "<button type=\"button\" onclick=\"doOpenCommentMapPopup('comment','');return false;\" title=\"" + (stxt[1047] || "Draw Route") + "\" style=\"padding:4px 8px; background:#f5f6f7; border:none; border-radius:4px; cursor:pointer; margin-right:10px;\"><i class=\"small-material-icons txtClrHdr\" style=\"font-size:20px;\">&#xe55b;</i></button>";
	}
	var tCmtImgBtnStr = "";
	if(useCmntFUpload == "yes" && tCanPostComments) {
		tCmtImgBtnStr = "<button type=\"button\" onclick=\"doOpenCommentImagePopup('comment','');return false;\" title=\"" + (stxt[1049] || "Upload Image") + "\" style=\"padding:4px 8px; background:#f5f6f7; border:none; border-radius:4px; cursor:pointer; margin-right:10px;\"><i class=\"small-material-icons txtClrHdr\" style=\"font-size:20px;\">&#xe439;</i></button>";
	}

	var tComposerHtml = "";
	if(tCanPostComments) {
		tComposerHtml =
			tGuestFields +
			"<div id=\"dvCmtInput\" contenteditable=\"true\" class=\"form-control\" style=\"min-height:50px;padding:6px;\"></div>" +
			"<div id=\"dvCmtMapPrev_comment\" style=\"display:none;\"></div>" +
			tCmtPrivOpts +
			"<div style=\"margin-top:8px;\">" +
			tCmtMapBtnStr +
			tCmtImgBtnStr +
			"<button class=\"cls_button cls_button-small\" onclick=\"doCommentSave();\">" + stxt[1031] + "</button>" +
			"</div>";
	} else {
		tComposerHtml = "<div style=\"padding:6px 0;\">" + getLoginToCommentLinkHtml() + "</div>";
	}

    var tCmtBoxStr =
        "<div class=\"fb-chat-box\" style=\"width:100%;border:1px solid #ccc;border-radius:8px;overflow:hidden;margin:10px 0;background:#fff;\">" +
        "<div class=\"chat-header bkgdClrNrml txtClrHdr\" style=\"padding:8px 12px;font-weight:bold;\">" + stxt[1029] + "</div>" +
        "<div id=\"dvCmtList\" style=\"padding:10px;max-height:400px;overflow-y:auto;background:#fff;\"></div>" +
        "<div style=\"padding:10px;border-top:1px solid #eee;background:#fff;\">" +
		tComposerHtml +
        "</div>" +
        "</div>";

    tCmtsDv.innerHTML = tCmtBoxStr;

	var tProdIdNum = parseInt(_cmtProdId, 10) || 0;
	var tProdType = String(_cmtProdType || "prod").replace(/'/g, "''");
	var tCanSeePrivate = (_cmtOwnerUid && (typeof quid !== "undefined") && String(_cmtOwnerUid) == String(quid));
	var tCmtQstr = "SELECT c.*, " + getCmntUserSelectFrag("u") + ", m.m_file AS cmts_map_file, m.m_data AS cmts_map_data FROM qcmnts c LEFT JOIN " + currQUserTable + " u ON u." + currQUserIdFld + " = c.cmts_userid LEFT JOIN qmedia m ON m.m_pid = c._id AND m.m_catid = " + tProdIdNum + " AND m.m_category = 'cmnts' AND m.m_rtype = 5 WHERE c.cmts_prodid=" + tProdIdNum + " AND c.cmts_prodtype='" + tProdType + "' AND c.cmts_rtype=5";
	if(!tCanSeePrivate) {
		tCmtQstr += " AND c.cmts_privacy='pub'";
	}
	tCmtQstr += " ORDER BY c.cmts_dadded DESC LIMIT 50";
	doQComm(tCmtQstr, null, "setCmtsDiv");
};

JSSHOP.cmnts.doCommentSave = function(tOverrideMatter) {
    if(isGuestCommentUser() && !canGuestPostComments()) {
		JSSHOP.shared.showUserProfile(0);
		return;
	}
    var tCmtMatter = String((typeof tOverrideMatter !== "undefined") ? tOverrideMatter : "");
	if(!tCmtMatter) {
		var tCmtInputEl = document.getElementById("dvCmtInput");
		tCmtMatter = tCmtInputEl ? tCmtInputEl.innerHTML : "";
	}
	var tPendingMap = JSSHOP.cmnts.getPendingMap("comment", "");
	var tPendingRoute = JSSHOP.cmnts.getPendingMapRoute("comment", "");
	var tPendingUploads = JSSHOP.cmnts.getPendingUploadRows("comment", "");
	if(!hasMeaningfulCommentHtml(tCmtMatter) && !tPendingMap && tPendingUploads.length === 0) {
		alert(stxt[1035]);
		return;
	}

    var tCmtPriv = "pub";
    var tPrivPrv = document.getElementById("cmtPrivPrv");
    if(tPrivPrv && tPrivPrv.checked) { tCmtPriv = "prv"; }

    var tCmtThreadId = Math.random().toString(36).slice(2);
	var tUidNum = getCurrUserIdNum();
	var tIsGuest = (tUidNum < 1);
	var tCmtRtype = tIsGuest ? "0" : "5";
    JSSHOP.shared.setFrmFieldVal("qcmnts", "cmts_rtype",     tCmtRtype);
    JSSHOP.shared.setFrmFieldVal("qcmnts", "cmts_threadid",  tCmtThreadId);
    JSSHOP.shared.setFrmFieldVal("qcmnts", "cmts_prodid",    _cmtProdId);
    JSSHOP.shared.setFrmFieldVal("qcmnts", "cmts_prodtype",  _cmtProdType);
	JSSHOP.shared.setFrmFieldVal("qcmnts", "cmts_userid",    tUidNum);
    JSSHOP.shared.setFrmFieldVal("qcmnts", "cmts_privacy",   tCmtPriv);
    JSSHOP.shared.setFrmFieldVal("qcmnts", "cmts_dadded",    JSSHOP.getUnixTimeStamp());
    JSSHOP.shared.setFrmFieldVal("qcmnts", "cmts_dmodified", JSSHOP.getUnixTimeStamp());
    JSSHOP.shared.setFrmFieldVal("qcmnts", "cmts_matter",    encodeURIComponent(tCmtMatter));
	JSSHOP.shared.setFrmFieldVal("qcmnts", "cmts_media", tPendingMap || "");

	if(tIsGuest) {
        var tGuestName  = document.getElementById("dvCmtFromName");
        var tGuestEmail = document.getElementById("dvCmtFromEmail");
        if((!tGuestName || tGuestName.value === "") && (!tGuestEmail || tGuestEmail.value === "")) {
            alert(stxt[1036]);
            return;
        }
		if(tGuestName)  { JSSHOP.shared.setFrmFieldVal("qcmnts", "cmts_from",         sanitizeCommentMetaVal(tGuestName.value)); }
		if(tGuestEmail) { JSSHOP.shared.setFrmFieldVal("qcmnts", "cmts_fromsg_email", sanitizeCommentMetaVal(tGuestEmail.value)); }
    } else {
		var tUsrName = getCurrUserFullName();
		if(!tUsrName && (typeof currQUsrObj !== "undefined") && currQUsrObj) {
			tUsrName = String(currQUsrObj.u_name || "").trim();
		}
		if(!tUsrName) {
			tUsrName = "User " + tUidNum;
		}
		JSSHOP.shared.setFrmFieldVal("qcmnts", "cmts_from", sanitizeCommentMetaVal(tUsrName));
		JSSHOP.shared.setFrmFieldVal("qcmnts", "cmts_from_icon", sanitizeCommentMetaVal((typeof currQUsrObj !== "undefined" && currQUsrObj) ? (currQUsrObj.u_icon || "") : ""));
    }

    var tCmtDOs = {};
    tCmtDOs["knvp"] = JSSHOP.shared.getFrmVals(document["qcmnts"], "nada");
    var oiCmt = getNuDBFnvp("qcmnts", 6, null, tCmtDOs);
	console.log("cmnt.save.request", {uid:tUidNum, isGuest:tIsGuest, hasText:hasMeaningfulCommentHtml(tCmtMatter), hasMap:!!tPendingMap, hasUploads:tPendingUploads.length, privacy:tCmtPriv});
	_cmtSaveCtx = { kind: "comment", mediaFile: tPendingMap || "", mediaData: tPendingRoute || "", ownerId: "" };
    doQComm(oiCmt["rq"], null, "afterCommentSave");
};
var doCommentSave = JSSHOP.cmnts.doCommentSave;

var afterCommentSave = function(a, theResp, c) {
	var tRespStr = String(theResp || "");
	console.log("cmnt.save.resp", tRespStr);
	if(tRespStr.toLowerCase().indexOf("error") !== -1) {
		alert("Comment save failed: " + tRespStr);
		return;
	}
	var tRowId = getInsertedRowIdFromResp(theResp);
	if(tRowId < 1) {
		finalizeCommentSaveRefresh();
		return;
	}
	if(!_cmtSaveCtx) {
		finalizeCommentSaveRefresh();
		return;
	}

	var tKind = _cmtSaveCtx.kind;
	var tOwnerId = _cmtSaveCtx.ownerId;
	var tMediaFile = _cmtSaveCtx.mediaFile || "";

	var tFinalizeAfterUploads = function() {
		if(tMediaFile) {
			saveCommentMediaRef(tKind, tRowId, tMediaFile);
		} else {
			finalizeCommentSaveRefresh();
		}
	};

	JSSHOP.cmnts.attachPendingUploadsToRow(tKind, tOwnerId, tRowId, function() {
		console.log("cmnt.save.attach.done", {kind:tKind, ownerId:tOwnerId, rowId:tRowId});
		tFinalizeAfterUploads();
	});

	if(tKind === "comment") {
		JSSHOP.cmnts.setPendingMap("comment", "", "");
		JSSHOP.cmnts.setPendingMapRoute("comment", "", "");
	} else {
		JSSHOP.cmnts.setPendingMap("reply", tOwnerId, "");
		JSSHOP.cmnts.setPendingMapRoute("reply", tOwnerId, "");
	}
};

var doShowCmtReply = function(tCmtId) {
    if(isGuestCommentUser() && !canGuestPostComments()) {
		JSSHOP.shared.showUserProfile(0);
		return;
	}
    var tRplyDv = document.getElementById("dvCmtReplyBox_" + tCmtId);
    if(!tRplyDv) { return; }
    tRplyDv.style.display = (tRplyDv.style.display !== "none") ? "none" : "block";
};

JSSHOP.cmnts.doCommentReply = function(tCmtId, tCmtThreadId, tCmtTo, tOverrideMatter) {
    if(isGuestCommentUser() && !canGuestPostComments()) {
		JSSHOP.shared.showUserProfile(0);
		return;
	}
    var tRepInp = document.getElementById("dvCmtReplyInput" + tCmtId);
    if(!tRepInp) { return; }
	var tRepMatter = String((typeof tOverrideMatter !== "undefined") ? tOverrideMatter : "");
	if(!tRepMatter) {
		tRepMatter = tRepInp.innerHTML;
	}
	var tRepMap = JSSHOP.cmnts.getPendingMap("reply", tCmtId);
	var tRepRoute = JSSHOP.cmnts.getPendingMapRoute("reply", tCmtId);
	var tRepUploads = JSSHOP.cmnts.getPendingUploadRows("reply", tCmtId);
	if(!hasMeaningfulCommentHtml(tRepMatter) && !tRepMap && tRepUploads.length === 0) {
        alert(stxt[1037]);
        return;
    }
	var tUidNum = getCurrUserIdNum();
	if(tUidNum < 1) {
		alert(stxt[1036]);
		return;
	}

	JSSHOP.shared.setFrmFieldVal("qcmnt", "cm_rtype",    "5");
    JSSHOP.shared.setFrmFieldVal("qcmnt", "cm_threadid", tCmtThreadId);
	JSSHOP.shared.setFrmFieldVal("qcmnt", "cm_to",       sanitizeCommentMetaVal(tCmtTo));
    JSSHOP.shared.setFrmFieldVal("qcmnt", "cm_matter",   encodeURIComponent(tRepMatter));
    JSSHOP.shared.setFrmFieldVal("qcmnt", "cm_dadded",   JSSHOP.getUnixTimeStamp());
	var tUsrName = getCurrUserFullName();
	if(!tUsrName && (typeof currQUsrObj !== "undefined") && currQUsrObj) {
		tUsrName = String(currQUsrObj.u_name || "").trim();
	}
	if(!tUsrName) {
		tUsrName = "User " + tUidNum;
	}
	JSSHOP.shared.setFrmFieldVal("qcmnt", "cm_from", sanitizeCommentMetaVal(tUsrName));
	JSSHOP.shared.setFrmFieldVal("qcmnt", "cm_from_icon", sanitizeCommentMetaVal((typeof currQUsrObj !== "undefined" && currQUsrObj) ? (currQUsrObj.u_icon || "") : ""));
	JSSHOP.shared.setFrmFieldVal("qcmnt", "cm_userid", tUidNum);
	JSSHOP.shared.setFrmFieldVal("qcmnt", "cm_media", tRepMap || "");

    var tRepDOs = {};
    tRepDOs["knvp"] = JSSHOP.shared.getFrmVals(document["qcmnt"], "nada");
    var oiRep = getNuDBFnvp("qcmnt", 6, null, tRepDOs);
	console.log("cmnt.reply.request", {uid:tUidNum, hasText:hasMeaningfulCommentHtml(tRepMatter), hasMap:!!tRepMap, hasUploads:tRepUploads.length, cmtId:tCmtId});
	_cmtSaveCtx = { kind: "reply", mediaFile: tRepMap || "", mediaData: tRepRoute || "", ownerId: String(tCmtId || "") };
    doQComm(oiRep["rq"], null, "afterCommentSave");
};
var doCommentReply = JSSHOP.cmnts.doCommentReply;

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
		JSSHOP.shared.setFrmFieldVal("qlikes", "ql_userid", quid);
		JSSHOP.shared.setFrmFieldVal("qlikes", "ql_uicon", (typeof currQUsrObj !== "undefined" && currQUsrObj) ? (currQUsrObj.u_icon || "") : "");
		JSSHOP.shared.setFrmFieldVal("qlikes", "ql_ufullname", getCurrUserFullName());
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
	var tRes = parseDbRowsFromResp(theResp);
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
	var tLkListQstr = "SELECT l.ql_userid, l.ql_uicon, l.ql_ufullname, " + getCmntUserSelectFrag("u") + " FROM qlikes l LEFT JOIN " + currQUserTable + " u ON u." + currQUserIdFld + " = l.ql_userid WHERE l.ql_cmntId=" + tCmtId +
		" AND l.ql_isreply=" + tIsReply + " AND l.ql_rtype=5 ORDER BY l._id desc LIMIT 50";
    doQComm(tLkListQstr, tCmtId + "|" + tIsReply, "showLikedListCB");
};

var showLikedListCB = function(tParam, theResp, c) {
	var tLkArr = parseDbRowsFromResp(theResp);
    if(!tLkArr || tLkArr.length === 0) { return; }

    var tLkStr = "<div style=\"padding:6px 0;\">";
    var iLk = 0;
    while(iLk < tLkArr.length) {
        var tLkr     = tLkArr[iLk];
		var tLkrName = getCmntFullName(tLkr.ql_ufullname, tLkr.u_fname, tLkr.u_lname, tLkr.u_name, "Anonymous");
		var tLkrIcon = getCmntIconVal(tLkr.ql_uicon, tLkr.u_icon);
        var tLkrUsrOnClick = (tLkr.ql_userid && tLkr.ql_userid != "0") ?
            "JSSHOP.ui.closeLbox();eindex('aa-show-user','pid=aa-show-user&tuid=" + tLkr.ql_userid + "');" : null;
        var tLkrAvatarOpen  = tLkrUsrOnClick ? "<a href=\"javascript:void(0)\" onclick=\"" + tLkrUsrOnClick + "\">" : "<span>";
        var tLkrAvatarClose = tLkrUsrOnClick ? "</a>" : "</span>";

        tLkStr += "<div style=\"display:flex;align-items:center;padding:6px 10px;\">";
        if(tLkrIcon && tLkrIcon !== "") {
			tLkStr += tLkrAvatarOpen + "<img src=\"" + JSSHOP.msgs.getMsgUserThumbSrc(tLkrIcon) + "\" style=\"width:30px;height:30px;border-radius:50%;margin-right:8px;\">" + tLkrAvatarClose;
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




/*
Messaging functions from incasa x_all.js
*/

JSSHOP.msgs.getSafeIconFile = function(rawIcon, fallbackIcon) {
	var tFallback = (fallbackIcon && String(fallbackIcon).trim() !== "") ? String(fallbackIcon).trim() : "default.jpg";
	var tIcon = (rawIcon && String(rawIcon).trim() !== "") ? String(rawIcon).trim() : tFallback;
	// Keep only the file segment if a path-like value is passed.
	tIcon = tIcon.split("/").pop();
	tIcon = tIcon.split("\\").pop();
	if (!tIcon || tIcon === "noQvalue") {
		return tFallback;
	}
	return tIcon;
};

JSSHOP.msgs.getMsgUserIconSrc = function(rawIcon) {
	var tIcon = JSSHOP.msgs.getSafeIconFile(rawIcon, "default_user.png");
	if (String(tIcon).indexOf("http://") === 0 || String(tIcon).indexOf("https://") === 0) {
		return tIcon;
	}
	if (String(tIcon).indexOf("/") !== -1) {
		return tIcon;
	}
	var tBaseDir = (typeof currUIconsFlr !== "undefined" && currUIconsFlr) ? String(currUIconsFlr) : "images/user_icons";
	tBaseDir = tBaseDir.replace(/\/+$/, "");
	return tBaseDir + "/" + tIcon;
};

JSSHOP.msgs.getMsgUserThumbSrc = function(rawIcon) {
	var tIcon = JSSHOP.msgs.getSafeIconFile(rawIcon, "default_user.png");
	if (String(tIcon).indexOf("http://") === 0 || String(tIcon).indexOf("https://") === 0) {
		return tIcon;
	}
	if (String(tIcon).indexOf("/") !== -1) {
		return tIcon;
	}
	if (String(tIcon).indexOf("s_thumb") !== 0 && String(tIcon).indexOf("default") !== 0) {
		tIcon = "s_thumb" + tIcon;
	}
	var tBaseDir = (typeof currUIconsFlr !== "undefined" && currUIconsFlr) ? String(currUIconsFlr) : "images/user_icons";
	tBaseDir = tBaseDir.replace(/\/+$/, "");
	return tBaseDir + "/" + tIcon;
};

JSSHOP.msgs.decodeMessageMatter = function(rawMatter) {
	var tRaw = String(rawMatter || "");
	if (!tRaw) {
		return "";
	}

	var tDecoded = tRaw;
	// Support legacy single-encoded and incasa-style double-encoded payloads.
	for (var iDec = 0; iDec < 3; iDec++) {
		try {
			var tNext = decodeURIComponent(tDecoded);
			if (tNext === tDecoded) {
				break;
			}
			tDecoded = tNext;
		} catch (eDec) {
			break;
		}
	}

	// Repair common mojibake produced when UTF-8 text is interpreted as latin1.
	if (tDecoded.indexOf("�") !== -1 || tDecoded.indexOf("�") !== -1 || tDecoded.indexOf("�?") !== -1) {
		try {
			tDecoded = decodeURIComponent(escape(tDecoded));
		} catch (eFix) {
			try {
				tDecoded = unescape(tDecoded);
			} catch (eUnesc) {
				void(0);
			}
		}
	}

	return tDecoded;
};

JSSHOP.msgs.encodeMessageMatterForSave = function(rawMatter) {
	var tRaw = String(rawMatter || "");
	// Match incasa transport style so latin1 storage does not mangle emoji bytes.
	return encodeURIComponent(encodeURIComponent(tRaw));
};

JSSHOP.msgs.decorateMessageForDisplay = function(rawMsg) {
	var tMsg = String(rawMsg || "");
	if(!tMsg) {
		return "";
	}
	// Normalize line breaks for HTML display.
	tMsg = tMsg.replace(/\r\n|\n|\r/g, "<br>");
	// Wrap emoji-like codepoints once (avoid repeated nested wrappers).
	tMsg = tMsg.replace(/([\u2600-\u27BF]|[\uD83C-\uDBFF][\uDC00-\uDFFF])/g, '<span class="emoji">$1</span>');
	return tMsg;
};

JSSHOP.msgs.safeSetMsgFormField = function(theForm, theField, theVal, theFallback) {
	try {
		if (!document[theForm] || !document[theForm][theField]) {
			return false;
		}
		var tVal = (typeof theVal === "undefined" || theVal === null || theVal === "") ? theFallback : theVal;
		document[theForm][theField].value = (typeof tVal === "undefined" || tVal === null) ? "" : tVal;
		return true;
	} catch (e) {
		JSSHOP.logJSerror(e, arguments, "JSSHOP.msgs.safeSetMsgFormField");
		return false;
	}
};

JSSHOP.msgs.ensureMsgFormField = function(theForm, theField, theVal, theFallback) {
	try {
		if (!document[theForm]) {
			return false;
		}
		var tVal = (typeof theVal === "undefined" || theVal === null || theVal === "") ? theFallback : theVal;
		if (!document[theForm][theField]) {
			var tHidden = document.createElement("input");
			tHidden.type = "hidden";
			tHidden.name = theField;
			tHidden.id = theField;
			document[theForm].appendChild(tHidden);
		}
		document[theForm][theField].value = (typeof tVal === "undefined" || tVal === null) ? "" : tVal;
		return true;
	} catch (e) {
		JSSHOP.logJSerror(e, arguments, "JSSHOP.msgs.ensureMsgFormField");
		return false;
	}
};

JSSHOP.msgs.syncMsgParticipantFields = function(opts) {
	try {
		opts = opts || {};
		var tCtx = JSSHOP.msgs.activeMsgCtx || {};
		var tCurrUserId = (typeof currQUsrObj !== "undefined" && currQUsrObj && currQUsrObj._id) ? currQUsrObj._id : ((typeof quid !== "undefined" && quid !== "noQvalue") ? quid : 0);
		var tCurrUserName = "";
		if (typeof currQUsrObj !== "undefined" && currQUsrObj) {
			tCurrUserName = currQUsrObj.u_fullname || [currQUsrObj.u_fname || "", currQUsrObj.u_lname || ""].join(" ").replace(/\s+/g, " ").trim() || currQUsrObj.u_name || "";
		}
		if (!tCurrUserName) {
			tCurrUserName = (tCurrUserId === 0 || tCurrUserId === "0") ? "Guest" : "User";
		}

		var tToUserId = (typeof opts.toUserId !== "undefined") ? opts.toUserId : ((typeof tCtx.toUserId !== "undefined") ? tCtx.toUserId : JSSHOP.shared.getFrmFieldVal("qmsgs", "msg_to_userid", 0));
		var tToName = (opts.toName && String(opts.toName).trim() !== "") ? String(opts.toName).trim() : ((tCtx.toName && String(tCtx.toName).trim() !== "") ? String(tCtx.toName).trim() : JSSHOP.shared.getFrmFieldVal("qmsgs", "msg_to", "User"));
		var tToIcon = JSSHOP.msgs.getSafeIconFile(opts.toIcon || tCtx.toIcon || JSSHOP.shared.getFrmFieldVal("qmsgs", "msg_to_icon", ""), "default.jpg");
		var tFromIcon = JSSHOP.msgs.getSafeIconFile(opts.fromIcon || tCtx.fromIcon || JSSHOP.shared.getFrmFieldVal("qmsgs", "msg_from_icon", ""), "default.jpg");

		JSSHOP.msgs.ensureMsgFormField("qmsgs", "msg_userid", tCurrUserId, 0);
		JSSHOP.msgs.ensureMsgFormField("qmsgs", "msg_from", tCurrUserName, "Guest");
		JSSHOP.msgs.ensureMsgFormField("qmsgs", "msg_to_userid", tToUserId, 0);
		JSSHOP.msgs.ensureMsgFormField("qmsgs", "msg_to", tToName, "User");
		JSSHOP.msgs.ensureMsgFormField("qmsgs", "msg_to_icon", tToIcon, "default.jpg");
		JSSHOP.msgs.ensureMsgFormField("qmsgs", "msg_from_icon", tFromIcon, "default.jpg");

		JSSHOP.shared.setFrmFieldVal("qmsg", "ms_from", tCurrUserName);
		JSSHOP.shared.setFrmFieldVal("qmsg", "ms_to", tToName || tToUserId);
		if (typeof opts.threadId !== "undefined" && opts.threadId !== null && opts.threadId !== "") {
			JSSHOP.shared.setFrmFieldVal("qmsg", "ms_threadid", opts.threadId);
		}
		return true;
	} catch (e) {
		JSSHOP.logJSerror(e, arguments, "JSSHOP.msgs.syncMsgParticipantFields");
		return false;
	}
};

JSSHOP.msgs._uploadCtx = null;
JSSHOP.msgs._pendingUploadRows = {};
JSSHOP.msgs._pendingUploadInsertCb = null;
JSSHOP.msgs._pendingUploadAttachCb = null;

JSSHOP.msgs.getUploadOwnerKey = function(toUserId) {
	return String((typeof toUserId !== "undefined" && toUserId !== null) ? toUserId : "0");
};

JSSHOP.msgs.getPendingUploadRows = function(toUserId) {
	var tKey = JSSHOP.msgs.getUploadOwnerKey(toUserId);
	if(!JSSHOP.msgs._pendingUploadRows[tKey]) {
		JSSHOP.msgs._pendingUploadRows[tKey] = [];
	}
	return JSSHOP.msgs._pendingUploadRows[tKey];
};

JSSHOP.msgs.addPendingUploadRow = function(toUserId, tRowObj) {
	var tRows = JSSHOP.msgs.getPendingUploadRows(toUserId);
	tRows.push(tRowObj || {});
};

JSSHOP.msgs.clearPendingUploadRows = function(toUserId) {
	var tKey = JSSHOP.msgs.getUploadOwnerKey(toUserId);
	JSSHOP.msgs._pendingUploadRows[tKey] = [];
};

JSSHOP.msgs.renderPendingUploadPreview = function(toUserId) {
	var tStageId = "dvMsgMediaStage" + String(toUserId || "");
	var tStageEl = document.getElementById(tStageId);
	if(!tStageEl) {
		return;
	}
	var tRows = JSSHOP.msgs.getPendingUploadRows(toUserId);
	if(!tRows || tRows.length === 0) {
		tStageEl.style.display = "none";
		tStageEl.innerHTML = "";
		return;
	}
	var tStr = "";
	for(var i = 0; i < tRows.length; i++) {
		var tFile = String((tRows[i] || {}).file || "");
		if(!tFile) { continue; }
		var tThumb = "images/ucontent/s_thumb" + tFile;
		tStr += "<img src=\"" + tThumb + "\" style=\"width:44px;height:44px;border-radius:6px;border:1px solid #ddd;margin-right:6px;margin-bottom:4px;\">";
	}
	if(!tStr) {
		tStageEl.style.display = "none";
		tStageEl.innerHTML = "";
		return;
	}
	tStageEl.style.display = "block";
	tStageEl.innerHTML = "<div class=\"txtSmall txtClrGrey\" style=\"margin-bottom:4px;\">" + (stxt[1050] || "Image staged. Send to post.") + "</div>" + tStr;
};

JSSHOP.msgs.finishMsgImageUpload = function(theImg) {
	try {
		console.log("msgs.upload.finish.cb", {raw:theImg, ctx:JSSHOP.msgs._uploadCtx});
		var tFile = String(theImg || "").trim();
		if(!tFile || tFile.toLowerCase().indexOf("error") > -1) {
			console.log("msgs.upload.finish.error", tFile);
			alert("Image upload failed: " + tFile);
			return;
		}
		if(!JSSHOP.msgs._uploadCtx) {
			console.log("msgs.upload.finish.noctx");
			return;
		}
		var tCtx = JSSHOP.msgs._uploadCtx;
		JSSHOP.msgs.preSaveMessageUploadMedia(tCtx.toUserId, tFile, function(tQmediaId) {
			console.log("msgs.upload.finish.presave.done", {toUserId:tCtx.toUserId, qmediaId:tQmediaId, file:tFile});
			if((parseInt(tQmediaId, 10) || 0) < 1) {
				alert("Could not stage uploaded image.");
				return;
			}
			JSSHOP.msgs.addPendingUploadRow(tCtx.toUserId, {
				qmediaId: parseInt(tQmediaId, 10) || 0,
				file: tFile
			});
			JSSHOP.msgs.renderPendingUploadPreview(tCtx.toUserId);
			var tMsg = document.getElementById(tCtx.uxPrefix + "msgBox");
			if(tMsg) {
				tMsg.innerHTML = stxt[1050] || "Image staged. Send to post.";
			}
		});
	} catch(e) {
		alert("finishMsgImageUpload: " + e);
	}
};
var finishMsgImageUpload = JSSHOP.msgs.finishMsgImageUpload;

JSSHOP.msgs._nativeMsgUploadInput = null;

JSSHOP.msgs.uploadMessageImageNative = function(tFile, tDone) {
	try {
		if(!tFile) {
			if(typeof tDone === "function") { tDone("error:no_file"); }
			return;
		}
		var tUid = (typeof quid !== "undefined" && quid) ? quid : "anon";
		var tUrl = "_p/file_upload.php?in=" + encodeURIComponent(tUid) + "&ud=" + encodeURIComponent("images/ucontent");
		console.log("msgs.native.upload.start", {name:tFile.name, size:tFile.size, type:tFile.type, url:tUrl});
		var tFd = new FormData();
		tFd.append("uploadfile", tFile);
		var tXhr = new XMLHttpRequest();
		tXhr.open("POST", tUrl, true);
		tXhr.onreadystatechange = function() {
			if(tXhr.readyState !== 4) { return; }
			var tRespTxt = String(tXhr.responseText || "");
			console.log("msgs.native.upload.resp", {status:tXhr.status, resp:tRespTxt});
			if(tXhr.status < 200 || tXhr.status >= 300) {
				if(typeof tDone === "function") { tDone("error:http_" + tXhr.status); }
				return;
			}
			try {
				var tObj = JSON.parse(tRespTxt || "{}");
				if(tObj && tObj.success === true && tObj.in) {
					if(typeof tDone === "function") { tDone(tObj.in); }
					return;
				}
				if(tObj && tObj.msg) {
					if(typeof tDone === "function") { tDone(String(tObj.msg)); }
					return;
				}
			} catch(eJson) {
				void(0);
			}
			if(typeof tDone === "function") { tDone(tRespTxt); }
		};
		tXhr.send(tFd);
	} catch(e) {
		console.log("msgs.native.upload.error", e);
		if(typeof tDone === "function") { tDone("error:" + e); }
	}
};

JSSHOP.msgs.openMessageImageChooser = function() {
	try {
		var tCtx = JSSHOP.msgs._uploadCtx || null;
		if(!tCtx) {
			console.log("msgs.native.choose.noctx");
			return;
		}
		if(isJApp == "y") {
			doMediaBtnSetup(tCtx.uxPrefix + "uploadBtn", tCtx.uxPrefix, "finishMsgImageUpload", "images/ucontent");
			return;
		}
		if(!JSSHOP.msgs._nativeMsgUploadInput) {
			var tInput = document.createElement("input");
			tInput.type = "file";
			tInput.accept = "image/*";
			tInput.style.display = "none";
			tInput.id = "msgNativeUploadInput";
			tInput.onchange = function() {
				var tFile = (tInput.files && tInput.files[0]) ? tInput.files[0] : null;
				if(!tFile) { return; }
				var tPout = document.getElementById(tCtx.uxPrefix + "progressOuter");
				var tMsg = document.getElementById(tCtx.uxPrefix + "msgBox");
				if(tPout) { tPout.style.display = "block"; }
				if(tMsg) { tMsg.innerHTML = "Uploading..."; }
				JSSHOP.msgs.uploadMessageImageNative(tFile, function(tRespIn) {
					if(tPout) { tPout.style.display = "none"; }
					finishMsgImageUpload(tRespIn);
					tInput.value = "";
				});
			};
			document.body.appendChild(tInput);
			JSSHOP.msgs._nativeMsgUploadInput = tInput;
		}
		console.log("msgs.native.choose.click", {inputId:JSSHOP.msgs._nativeMsgUploadInput.id, prefix:tCtx.uxPrefix});
		JSSHOP.msgs._nativeMsgUploadInput.click();
	} catch(e) {
		console.log("msgs.native.choose.error", e);
	}
};

JSSHOP.msgs.preSaveMessageUploadMedia = function(toUserId, tFileName, tDoneCb) {
	tFileName = String(tFileName || "").trim();
	console.log("msgs.upload.presave.start", {toUserId:toUserId, file:tFileName});
	if(!tFileName) {
		if(typeof tDoneCb === "function") { tDoneCb(0, ""); }
		return;
	}
	var tToUidNum = parseInt(toUserId, 10) || 0;
	JSSHOP.shared.setFrmFieldVal("qmedia", "m_rtype", "5");
	JSSHOP.shared.setFrmFieldVal("qmedia", "m_uid", quid);
	JSSHOP.shared.setFrmFieldVal("qmedia", "m_coid", tToUidNum);
	JSSHOP.shared.setFrmFieldVal("qmedia", "m_catid", tToUidNum);
	JSSHOP.shared.setFrmFieldVal("qmedia", "m_category", "msgs");
	JSSHOP.shared.setFrmFieldVal("qmedia", "m_pid", "0");
	JSSHOP.shared.setFrmFieldVal("qmedia", "m_file", tFileName);
	JSSHOP.shared.setFrmFieldVal("qmedia", "m_file_thumb", "s_thumb" + tFileName);
	JSSHOP.shared.setFrmFieldVal("qmedia", "m_title", tFileName);
	JSSHOP.shared.setFrmFieldVal("qmedia", "m_data", "msg_image");
	JSSHOP.shared.setFrmFieldVal("qmedia", "m_vala", "staged");
	JSSHOP.shared.setFrmFieldVal("qmedia", "m_valb", JSSHOP.shared.getFrmFieldVal("qmsg", "ms_threadid", ""));
	JSSHOP.shared.setFrmFieldVal("qmedia", "m_dadded", JSSHOP.getUnixTimeStamp());
	var tDO = {};
	tDO.knvp = JSSHOP.shared.getFrmVals(document["qmedia"], "nada");
	var oi = getNuDBFnvp("qmedia", 6, null, tDO);
	console.log("msgs.upload.presave.query", oi["rq"]);
	JSSHOP.msgs._pendingUploadInsertCb = tDoneCb;
	doQComm(oi["rq"], null, "afterMsgUploadPreSave");
};

var afterMsgUploadPreSave = function(a, theResp, c) {
	console.log("msgs.upload.presave.resp", theResp);
	var tCb = JSSHOP.msgs._pendingUploadInsertCb;
	JSSHOP.msgs._pendingUploadInsertCb = null;
	var tId = getInsertedRowIdFromResp(theResp);
	if(typeof tCb === "function") {
		tCb(tId, theResp);
	}
};

JSSHOP.msgs.attachPendingUploadsToRow = function(toUserId, tRowId, tTargetTable, tDoneCb) {
	tRowId = parseInt(tRowId, 10) || 0;
	console.log("msgs.upload.attach.start", {toUserId:toUserId, rowId:tRowId, target:tTargetTable});
	if(!tRowId) {
		if(typeof tDoneCb === "function") { tDoneCb(); }
		return;
	}
	var tRows = JSSHOP.msgs.getPendingUploadRows(toUserId);
	if(!tRows || tRows.length === 0) {
		if(typeof tDoneCb === "function") { tDoneCb(); }
		return;
	}
	var tIds = [];
	for(var i = 0; i < tRows.length; i++) {
		var tId = parseInt((tRows[i] || {}).qmediaId, 10) || 0;
		if(tId > 0) { tIds.push(tId); }
	}
	if(tIds.length === 0) {
		if(typeof tDoneCb === "function") { tDoneCb(); }
		return;
	}
	var tThreadId = JSSHOP.shared.getFrmFieldVal("qmsg", "ms_threadid", "");
	var tQry = "UPDATE qmedia SET m_pid='" + tRowId + "', m_vala='" + String(tTargetTable || "qmsg") + "', m_valb='" + String(tThreadId || "").replace(/'/g, "''") + "' WHERE _id IN (" + tIds.join(",") + ") AND m_uid='" + quid + "' AND m_pid='0' AND m_category='msgs' AND m_rtype='5'";
	console.log("msgs.upload.attach.query", tQry);
	JSSHOP.msgs._pendingUploadAttachCb = function() {
		JSSHOP.msgs.clearPendingUploadRows(toUserId);
		JSSHOP.msgs.renderPendingUploadPreview(toUserId);
		if(typeof tDoneCb === "function") { tDoneCb(); }
	};
	doQComm(tQry, null, "afterMsgUploadAttachSave");
};

var afterMsgUploadAttachSave = function(a, theResp, c) {
	console.log("msgs.upload.attach.resp", theResp);
	var tCb = JSSHOP.msgs._pendingUploadAttachCb;
	JSSHOP.msgs._pendingUploadAttachCb = null;
	if(typeof tCb === "function") {
		tCb(theResp);
	}
};

JSSHOP.msgs._pendingThreadSaveCtx = null;
JSSHOP.msgs._pendingReplySaveCtx = null;

var afterMsgThreadSave = function(a, theResp, c) {
	var tCtx = JSSHOP.msgs._pendingThreadSaveCtx;
	JSSHOP.msgs._pendingThreadSaveCtx = null;
	var tRowId = getInsertedRowIdFromResp(theResp);
	if(tCtx && tRowId > 0) {
		JSSHOP.msgs.attachPendingUploadsToRow(tCtx.toUserId, tRowId, "qmsgs", function() {
			if(tCtx.toUserId) {
				setTimeout(function() {
					JSSHOP.msgs.getMsgsFromTOU(tCtx.toUserId);
				}, 120);
			}
			if(tCtx.callbackName && typeof window[tCtx.callbackName] === "function") {
				window[tCtx.callbackName](a, theResp, c);
			}
		});
		return;
	}
	if(tCtx && tCtx.callbackName && typeof window[tCtx.callbackName] === "function") {
		window[tCtx.callbackName](a, theResp, c);
	}
};

var afterMsgReplySave = function(a, theResp, c) {
	var tCtx = JSSHOP.msgs._pendingReplySaveCtx;
	JSSHOP.msgs._pendingReplySaveCtx = null;
	var tRowId = getInsertedRowIdFromResp(theResp);
	if(tCtx && tRowId > 0) {
		JSSHOP.msgs.attachPendingUploadsToRow(tCtx.toUserId, tRowId, "qmsg", function() {
			if(tCtx.toUserId) {
				setTimeout(function() {
					JSSHOP.msgs.getMsgsFromTOU(tCtx.toUserId);
				}, 120);
			}
			if(tCtx.callbackName && typeof window[tCtx.callbackName] === "function") {
				window[tCtx.callbackName](a, theResp, c);
			}
		});
		return;
	}
	if(tCtx && tCtx.callbackName && typeof window[tCtx.callbackName] === "function") {
		window[tCtx.callbackName](a, theResp, c);
	}
};

JSSHOP.msgs.bindUploadToPopup = function(toUserId, uxPrefix) {
	var tUid = String(toUserId || "");
	var tPrefix = String(uxPrefix || ("mmu" + tUid));
	JSSHOP.msgs._uploadCtx = {
		toUserId: tUid,
		uxPrefix: tPrefix
	};
	var tBtnId = tPrefix + "uploadBtn";
	var tBtn = document.getElementById(tBtnId);
	var tSauReady = ((typeof window.ss !== "undefined") && (typeof doAIU === "function"));
	var tDupCnt = document.querySelectorAll("[id='" + tBtnId + "']").length;
	console.log("msgs.upload.bind.init", {btnId:tBtnId, hasBtn:!!tBtn, sauReady:tSauReady, prefix:tPrefix, dupCnt:tDupCnt});
	if(!tBtn) {
		console.log("msgs.upload.bind.missingBtn", tBtnId);
		return;
	}
	if(!tBtn._msgUploadDbgBound) {
		tBtn._msgUploadDbgBound = true;
		tBtn.addEventListener("click", function() {
			console.log("msgs.upload.btn.click", {btnId:tBtnId, prefix:tPrefix});
		});
	}
	if(isJApp == "y") {
		currMediaID = (typeof quid !== "undefined" && quid) ? quid : "anon";
		doMediaBtnSetup(tBtnId, tPrefix, "finishMsgImageUpload", "images/ucontent");
		console.log("msgs.upload.bind.setup.called", {btnId:tBtnId, prefix:tPrefix, mode:"sau-japp"});
	} else {
		console.log("msgs.upload.bind.setup.called", {btnId:tBtnId, prefix:tPrefix, mode:"native-web"});
	}
};

JSSHOP.msgs.appendMediaToMessageRow = function(tTargetElemId, tPid, tTargetTable) {
	tPid = parseInt(tPid, 10) || 0;
	if(!tPid) { return; }
	var tElem = document.getElementById(tTargetElemId);
	if(!tElem) { return; }
	var tTable = String(tTargetTable || "qmsg").replace(/'/g, "''");
	var tQry = "SELECT _id,m_file,m_file_thumb,m_data FROM qmedia WHERE m_pid=" + tPid + " AND m_category='msgs' AND m_vala='" + tTable + "' AND m_rtype=5 ORDER BY _id ASC";
	doQComm(tQry, tTargetElemId, "renderMsgRowMedia");
};

var renderMsgRowMedia = function(a, theResp, c) {
	var tElem = (typeof a === "string") ? document.getElementById(a) : a;
	if(!tElem) { return; }
	var tArr = [];
	try { tArr = JSON.parse(theResp || "[]"); } catch(e) { tArr = []; }
	if(!tArr || tArr.length === 0) { return; }
	if(tElem.querySelector(".msg-media-wrap")) { return; }
	var tWrap = document.createElement("div");
	tWrap.className = "msg-media-wrap";
	tWrap.style.marginTop = "6px";
	var tHtml = "";
	for(var i = 0; i < tArr.length; i++) {
		var tFile = String((tArr[i] || {}).m_file || "");
		if(!tFile) { continue; }
		var tThumb = "images/ucontent/s_thumb" + tFile;
		var tFull = "images/ucontent/" + tFile;
		tHtml += "<a href=\"" + tFull + "\" target=\"_blank\"><img src=\"" + tThumb + "\" style=\"max-width:200px;max-height:200px;border-radius:8px;border:1px solid #ddd;margin-right:6px;margin-top:4px;\"></a>";
	}
	if(!tHtml) { return; }
	tWrap.innerHTML = tHtml;
	tElem.appendChild(tWrap);
};


JSSHOP.msgs.doMsgThread = function(a,theResp,c) {
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
ttstr += "<span><a href=\"javascript:JSSHOP.msgs.showReplyMsgBox('nada','" + tts.ms_threadid + "','" + c + "');\">" + tts.ms_viewed + "</a></span>";
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


JSSHOP.msgs.doMsgList = function(a,theResp,ttcb) {


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
tstr += "<a href=\"javascript:JSSHOP.msgs.showReplyMsgBox('nada','" + ts._id + "','" + ttcb + "');\">" + ts.msg_status + "</a>";
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


JSSHOP.msgs.doNuMsgList = function(a,theResp,ttcb) {
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
			tstr += "<div id=\"dvMsgT" + ts._id + "\" onclick=\"JSSHOP.msgs.popGuestMsgBox('" + iint + "');\" style=\"margin:10px;padding:10px;border-radius:10px;cursor:pointer;\" class=\"bkgdClrNrml\">";
            tIAGstr = "<span class=\"txtSmall txtClrGrey\"> (" + stxt[731] + ")</span>";
        } else {
			tstr += "<div id=\"dvMsgT" + ts._id + "\" onclick=\"JSSHOP.msgs.prepMsgBox('" + otherUserId + "','" + otherUserName + "','" + otherUserIcon + "','noQvalue','donada');\" style=\"margin:10px;padding:10px;border-radius:10px;cursor:pointer;\" class=\"bkgdClrNrml\">";
        }
         tstr += "<div style=\"display:flex;align-items:center;margin-bottom:5px;\">";
                 if(ts.msg_userid == "0" || ts.msg_userid == "noQvalue" || ts.msg_userid == 0) {
            tstr += "<div style=\"width:30px;height:30px;border-radius:50%;background:#ccc;margin-right:10px;display:flex;align-items:center;justify-content:center;font-weight:bold;\">" + otherUserName.charAt(0).toUpperCase() + "</div>";
        } else if(otherUserIcon && otherUserIcon != "") {
			tstr += "<img src=\"" + JSSHOP.msgs.getMsgUserThumbSrc(otherUserIcon) + "\" style=\"width:30px;height:30px;border-radius:50%;margin-right:10px;\">";
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
		tNewDecdAndClnMtr = JSSHOP.msgs.decodeMessageMatter(ts.msg_matter);
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


JSSHOP.msgs.doNuMsgThread = function(a,theResp,c) {
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

			ttmsgmatter = JSSHOP.msgs.decodeMessageMatter(tThrdMtr);
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




JSSHOP.msgs.doUMsgThread = function(atmdiv,theResp,ttcb) {
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
		tTMMstr = JSSHOP.msgs.decodeMessageMatter(tATMMstr);

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
         var tCurrFullName = getCurrUserFullName();
         if(ts.ms_from == tCurrFullName) {
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
        if(ts.ms_from == tCurrFullName) {
            tstr += "<div style=\"margin-left:7px;margin-top:4px;\"><a href=\"javascript:JSSHOP.msgs.doMsgRemove('" + ts._id + "','qmsg');\" class=\"txtSmall\" style=\"color:#c00;\">" + stxt[1046] + "</a></div>";
        }
        tstr += "</div>";

        iint++;
    }
    // append to atmdiv
    tUTdv = document.createElement('div');
    tUTdv.innerHTML = tstr;
    document.getElementById(atmdiv).appendChild(tUTdv);
	for(var mj = 0; mj < len; mj++) {
		if(tFllArr[mj] && tFllArr[mj]._id) {
			JSSHOP.msgs.appendMediaToMessageRow("dvMsgT" + tFllArr[mj]._id, tFllArr[mj]._id, "qmsg");
		}
	}
    tGMsgDos = null;
    } else {
     //    document.getElementById(atmdiv).appendChild(document.createElement('div')).innerHTML = "<div class=\"txtClrHdr\" style=\"margin-left: 7px\">No messages found</div>";
    }
    // scroll to bottom of atmdiv
    var msgDiv = document.getElementById(atmdiv);
    msgDiv.scrollTop = msgDiv.scrollHeight;

}

JSSHOP.msgs.doUMsgHdr = function(atmdiv,theResp,ttcb) {
    console.log("doUMsgHdr: " + theResp);
document.getElementById("ms_threadid").value = "";
  var tFllArr = JSON.parse(theResp);
  var len = tFllArr.length;
  if(tFllArr[0]) {
document.getElementById("ms_threadid").value = tFllArr[0]._id;
JSSHOP.msgs.syncMsgParticipantFields({ threadId: tFllArr[0]._id });
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
	tmsgmatter = JSSHOP.msgs.decodeMessageMatter(tmsUEgmatter);
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
    if(ts.msg_userid == quid) {
        tstr += "<div style=\"margin-left:7px;margin-top:4px;\"><a href=\"javascript:JSSHOP.msgs.doMsgRemove('" + ts._id + "','qmsgs');\" class=\"txtSmall\" style=\"color:#c00;\">" + stxt[1046] + "</a></div>";
    }
    tstr += "</div>";
    iint++;
  }
  document.getElementById(atmdiv).innerHTML = tstr;
	for(var mi = 0; mi < len; mi++) {
		if(tFllArr[mi] && tFllArr[mi]._id) {
			JSSHOP.msgs.appendMediaToMessageRow("dvMsgHdr" + tFllArr[mi]._id, tFllArr[mi]._id, "qmsgs");
		}
	}
  tGMsgDos = null;
  tGMsgDos = {};
  tGMsgDos["ws"] = "where ms_threadid=? AND ms_rtype=5"
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

JSSHOP.msgs.doMsgRemove = function(tId, tTable) {
    if(!confirm(stxt[1046] + "?")) { return; }
    var tElemId, tQstr;
    if(tTable === "qmsg") {
        tQstr  = "UPDATE qmsg SET ms_rtype=0 WHERE _id=" + tId + " AND ms_from='" + quid + "'";
        tElemId = "dvMsgT" + tId;
    } else {
        tQstr  = "UPDATE qmsgs SET msg_rtype=0 WHERE _id=" + tId + " AND msg_userid=" + quid;
        tElemId = "dvMsgHdr" + tId;
    }
    doQComm(tQstr, tElemId, "afterMsgRemove");
};
var doMsgRemove = JSSHOP.msgs.doMsgRemove;

var afterMsgRemove = function(tElemId, theResp, c) {
    var tEl = (typeof tElemId === "string") ? document.getElementById(tElemId) : tElemId;
    if(tEl) { tEl.style.display = "none"; }
};

JSSHOP.msgs.showAReplyMsgSave = function(tamsg, tbmsg, tcmsg){
try {
JSSHOP.msgs.doMsgThread(tamsg, JSON.stringify(JSSHOP.shared.getKNVParr(JSSHOP.shared.getDynFrmVals(document["qmsg"], "tmp_"))), "doNada");
// JSSHOP.ui.popAndFillLbox(tamsg + tbmsg + tcmsg);
} catch(e) {
alert("no showReplyMsgSave: " + e);
}
};

JSSHOP.msgs.showReplyMsgSave = function(tamsg, tbmsg, tcmsg){
try {
// JSSHOP.ui.popAndFillLbox(tamsg + tbmsg + tcmsg);

procNuUIitem("qmsgs","msg_dmodified",tamsg,JSSHOP.getUnixTimeStamp(),tamsg);

} catch(e) {
alert("no showReplyMsgSave: " + e);
}
};

JSSHOP.msgs.doReplyMsgSave = function(tmpMsgType, tmpMsgVal, tTrmsCB){
try {
alert("JSSHOP.ui.doReplyMsgSave: " + tmpMsgType + " .." + tmpMsgVal)
JSSHOP.msgs.syncMsgParticipantFields({ threadId: tmpMsgVal });
JSSHOP.shared.setFrmFieldVal("qmsg","ms_threadid", tmpMsgVal);
JSSHOP.shared.setFrmFieldVal("qmsg", "ms_from", JSSHOP.shared.getFrmFieldVal("qmsg", "ms_from", quid));
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

JSSHOP.msgs.showReplyMsgBox = function(tmpMsgType, tmpMsgVal, theTcb){
try {
} catch(e) {
    alert("no JSSHOP.ui.showMsgBox: " + e);
    }
tfsb = nCurrFFieldOb();
tfsb.fid = "btnMsgsave";
tfsb.fty = "button";
tfsb.fcl = function() { JSSHOP.ui.setSaveBtnClick(this, function(){JSSHOP.msgs.doReplyMsgSave(tmpMsgType, tmpMsgVal, theTcb)}) };

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




JSSHOP.msgs.showMsgSave = function(tamsg, tbmsg, tcmsg){
JSSHOP.ui.popAndFillLbox(tamsg + tbmsg + tcmsg);
};

JSSHOP.msgs.fnishGstMsgSave = function(tamsg, tbmsg, tcmsg){
try {
JSSHOP.ui.popAndFillLbox(stxt[709]); // thank you message
} catch(e) {
alert("no fnishGstMsgSave: " + e);
}
};

JSSHOP.msgs.doMsgSave = function(tmpMsgType, tmpMsgVal, tempCB){
   //  JSSHOP.shared.setDynFrmVals(document["qmsgs"], "tmp_");
    console.log("doMsgSave: " + tmpMsgType + " :: " + tmpMsgVal + " :: " + tempCB);
JSSHOP.msgs.syncMsgParticipantFields({ toUserId: tmpMsgVal });
var tMsgToIcon = JSSHOP.msgs.getSafeIconFile(JSSHOP.shared.getFrmFieldVal("qmsgs","msg_to_icon",""), "default.jpg");
var tMsgFromIconSeed = (quid == "0" || quid == 0 || quid == "noQvalue") ? "guest.png" : ((typeof currQUsrObj !== "undefined" && currQUsrObj && currQUsrObj.u_icon) ? currQUsrObj.u_icon : "");
var tMsgFromIcon = JSSHOP.msgs.getSafeIconFile(JSSHOP.shared.getFrmFieldVal("qmsgs","msg_from_icon", tMsgFromIconSeed), "default.jpg");
JSSHOP.msgs.ensureMsgFormField("qmsgs", "msg_to_userid", tmpMsgVal, 0);
JSSHOP.msgs.ensureMsgFormField("qmsgs", "msg_to_icon", tMsgToIcon, "default.jpg");
JSSHOP.msgs.ensureMsgFormField("qmsgs", "msg_from_icon", tMsgFromIcon, "default.jpg");
tmpmtid = Math.random().toString(36).slice(2);
JSSHOP.shared.setFrmFieldVal("qmsgs","msg_threadid", tmpmtid);
JSSHOP.shared.setFrmFieldVal("qmsgs","msg_userid", JSSHOP.shared.getFrmFieldVal("qmsgs", "msg_userid", quid));
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
JSSHOP.msgs._pendingThreadSaveCtx = {
	toUserId: tmpMsgVal,
	callbackName: tempCB
};
doQComm(oi["rq"], null, "afterMsgThreadSave");
// alert(oi["rq"]);
// JSSHOP.ui.popAndFillLbox("Thank you!<b>" + oi["rq"]);
};

JSSHOP.msgs.nTmpMsgBxOb = function() {
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


JSSHOP.msgs.getMsgsFromTOU = function(touid) {
tmpDOs = null;
tmpDOs = {};
// tmpDOs["ws"] = "where msg_to_userid=? or msg_userid=?";
tmpDOs["ws"] = "where ((msg_to_userid=? and msg_userid=?) or (msg_userid=? and msg_to_userid=?)) and msg_rtype=5";
tmpDOs["wa"] = [touid,quid, touid, quid];
oi = getNuDBFnvp("qmsgs",5,null,tmpDOs);
doQComm(oi["rq"], "chat-messages-" + touid, "doUMsgHdr");
};


JSSHOP.msgs.doUMsglinks = function(tULUID, tdivMID) {
    tmpDOs = null;
    tmpDOs = {};
    tmpDOs["ws"] = "where k_userid=? and k_rtype=?";
    tmpDOs["wa"] = [tULUID,5];
    oi = getNuDBFnvp("qlinks",5,null,tmpDOs);
    doQComm(oi["rq"], tdivMID, "getUMsgLnkStr");
     //  JSSHOP.ui.showMsgBox(tPPrpTy,tPPrpI,tTPcb);
	};

	JSSHOP.msgs.rndrUMsgBtns = function(za,zb,zc) {
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


	  JSSHOP.msgs.rndrUMsgLnks = function(za,zb,zc) {
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
		JSSHOP.msgs.rndrUMsgBtns(za,zb,zc);
	 };

	JSSHOP.msgs.getUMsgLnkStr = function(tCCLA, tCCLB, tCCLC) {
    if(tCCLB.indexOf("_id") != -1) {
        currCoLinksArr = null;
        currCoLinksArr = [];
    // alert("setCurrCoLinks: " + tCCLB);
	JSSHOP.msgs.rndrUMsgBtns(tCCLA, tCCLB, tCCLC);
    // rndrUMsgLnks(tCCLA, tCCLB, tCCLC);
    }
    }


 JSSHOP.msgs.showNuMsgBox = function(ttMsgBxObj){


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
var tMsgCurrUserId = (typeof currQUsrObj !== "undefined" && currQUsrObj && currQUsrObj._id) ? currQUsrObj._id : ((typeof quid !== "undefined" && quid !== "noQvalue") ? quid : 0);
var tMsgCurrUserName = (typeof currQUsrObj !== "undefined" && currQUsrObj) ? (currQUsrObj.u_fullname || [currQUsrObj.u_fname || "", currQUsrObj.u_lname || ""].join(" ").replace(/\s+/g, " ").trim() || currQUsrObj.u_name || "") : "";
if (!tMsgCurrUserName) {
tMsgCurrUserName = ((tMsgCurrUserId === 0 || tMsgCurrUserId === "0") ? "Guest" : "User");
}
var tMsgToUserId = (ttMsgBxObj && ttMsgBxObj["m_to_userid"]) ? ttMsgBxObj["m_to_userid"] : 0;
var tMsgToName = (ttMsgBxObj && ttMsgBxObj["m_to"] && String(ttMsgBxObj["m_to"]).trim() !== "") ? String(ttMsgBxObj["m_to"]).trim() : "User";
var tMsgToIcon = JSSHOP.msgs.getSafeIconFile(ttMsgBxObj ? ttMsgBxObj["m_to_icon"] : "", "default.jpg");
var tMsgFromIcon = JSSHOP.msgs.getSafeIconFile(ttMsgBxObj ? ttMsgBxObj["m_from_icon"] : "", "default.jpg");
var tMsgToIconSrc = JSSHOP.msgs.getMsgUserIconSrc(tMsgToIcon);

JSSHOP.msgs.safeSetMsgFormField("qmsgs", "msg_userid", tMsgCurrUserId, 0);
JSSHOP.msgs.safeSetMsgFormField("qmsgs", "msg_from", tMsgCurrUserName, "Guest");
JSSHOP.msgs.safeSetMsgFormField("qmsgs", "msg_to_userid", tMsgToUserId, 0);
JSSHOP.msgs.safeSetMsgFormField("qmsgs", "msg_to", tMsgToName, "User");
JSSHOP.msgs.safeSetMsgFormField("qmsgs", "msg_to_icon", tMsgToIcon, "default.jpg");
JSSHOP.msgs.safeSetMsgFormField("qmsgs", "msg_from_icon", tMsgFromIcon, "default.jpg");
JSSHOP.msgs.activeMsgCtx = {
toUserId: tMsgToUserId,
toName: tMsgToName,
toIcon: tMsgToIcon,
fromIcon: tMsgFromIcon
};
JSSHOP.msgs.syncMsgParticipantFields({
toUserId: tMsgToUserId,
toName: tMsgToName,
toIcon: tMsgToIcon,
fromIcon: tMsgFromIcon
});

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
var tMsgUploadUxPrefix = "mmu" + String((ttMsgBxObj && ttMsgBxObj["m_to_userid"]) ? ttMsgBxObj["m_to_userid"] : "0") + "_" + String((typeof JSSHOP.getUnixMiliStamp === "function") ? JSSHOP.getUnixMiliStamp() : (new Date().getTime()));

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
tfsb.fcl = function() { JSSHOP.ui.setSaveBtnClick(this, function(){JSSHOP.msgs.doMsgSave(tmpMsgType, tmpMsgVal, atmpCB)}) };
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
'<table style="width:100%;"><tr><td><a href="javascript:JSSHOP.ui.closeLbox();eindex(\'aa-show-user\',\'pid=aa-show-user&tuid=' + ttMsgBxObj["m_to_userid"] + '\')"><img src="' + tMsgToIconSrc + '" alt="User" style="width:40px; height:40px; border-radius:50%; margin-right:10px;"></a></td>' +
// javascript:eindex('aa-show-user','pid=aa-show-user&tuid=' + ttMsgBxObj["m_to_userid"])
'<td style="flex-grow:1;"><span style="font-weight:bold;color:white;"><a href="javascript:JSSHOP.ui.closeLbox();eindex(\'aa-show-user\',\'pid=aa-show-user&tuid=' + ttMsgBxObj["m_to_userid"] + '\')" class="txtClrWhite">' + tMsgToName + '</a><br><span class="txtSmall">';
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
tMBemojistr = JSSHOP.msgs.getEmojiPickerHTML('chat-input-' + ttMsgBxObj["m_to_userid"], 'dvEmogiList' + ttMsgBxObj["m_to_userid"]);
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
var tMsgUxPrefixBtn = tMsgUploadUxPrefix;
tMsgBxHdrSTr += '<button onclick="JSSHOP.msgs.toggleEmojiPicker(\'dvEmogiList' + ttMsgBxObj["m_to_userid"] + '\');" style="padding:4px 8px; background:#f5f6f7; border:none; border-radius:4px; cursor:pointer; margin-right:10px;"><i class="nav-material-icons txtClrDrkGrn" style="font-size:20px;">&#xe420;</i></button>' +
// create dvEmogiList with a list of emojis and smileys to pick from. they will be inserted into the chat input div at cursor position
'<div id="dvEmogiList' + ttMsgBxObj["m_to_userid"] + '" style="display:none; position:absolute; bottom:60px; background:white; border:1px solid #ccc; border-radius:4px; padding:10px; box-shadow:0 2px 8px rgba(0,0,0,0.2); max-width:280px; max-height:200px; overflow-y:auto;min-width:280px;min-height:200px;">' +
 tMBemojistr +
'</div>';
	if(useMsgsFUpload == "yes") {
		tMsgBxHdrSTr += '<button type="button" id="' + tMsgUxPrefixBtn + 'uploadBtn" onclick="JSSHOP.msgs.openMessageImageChooser();return false;" title="' + (stxt[1049] || 'Upload Image') + '" style="padding:4px 8px; background:#f5f6f7; border:none; border-radius:4px; cursor:pointer; margin-right:10px;"><i class="small-material-icons txtClrHdr" style="font-size:20px;">&#xe439;</i></button>';
	}
}

tMsgBxHdrSTr += '<div contenteditable="true" id="chat-input-' + ttMsgBxObj["m_to_userid"] + '" placeholder="Type a message..." style="flex:1; padding:8px; border:1px solid #ccc; border-radius:4px; margin-right:10px; max-height:80px; overflow-y:auto;">';
tMsgBxHdrSTr += '</div>';
tMsgBxHdrSTr += '<button onclick="JSSHOP.msgs.sendChatMessage(' + ttMsgBxObj["m_to_userid"] + ',\'' + tSNMBItemID + '\')" style="padding:8px 12px; background:#4267b2; color:white; border:none; border-radius:4px; cursor:pointer;" class="txtSmall">' + stxt[708] + '</button>' +
'</div>'; // end chat-input-area

if(!(quid == "0" || quid == "noQvalue")) {
	var tMsgUxPrefix = tMsgUploadUxPrefix;
	tMsgBxHdrSTr += '<div id="dvMsgMediaStage' + ttMsgBxObj["m_to_userid"] + '" style="display:none;padding:4px 8px;background:#fff;border-top:1px solid #eee;"></div>';
	tMsgBxHdrSTr += '<div id="' + tMsgUxPrefix + 'progressOuter" style="display:none;padding:0 8px 4px 8px;"><div id="' + tMsgUxPrefix + 'progressBar" style="height:6px;background:#2a7;"></div></div>';
	tMsgBxHdrSTr += '<div id="' + tMsgUxPrefix + 'msgBox" class="txtSmall txtClrGrey" style="padding:0 8px 6px 8px;"></div>';
	tMsgBxHdrSTr += '<div id="' + tMsgUxPrefix + 'dragbox" style="display:none;"></div>';
}


'</div>'; // end fb-chat-box
JSSHOP.ui.popNuFillLbox(tMsgBxHdrSTr + tsbstr, 10, false);
if(!(quid == "0" || quid == "noQvalue")) {
	JSSHOP.msgs.clearPendingUploadRows(ttMsgBxObj["m_to_userid"]);
	JSSHOP.msgs.bindUploadToPopup(ttMsgBxObj["m_to_userid"], tMsgUploadUxPrefix);
	JSSHOP.msgs.renderPendingUploadPreview(ttMsgBxObj["m_to_userid"]);
}
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
setTimeout("JSSHOP.msgs.getMsgsFromTOU(" + ttMsgBxObj['m_to_userid'] + ");", 1000);
}
setTimeout("JSSHOP.msgs.doUMsglinks(" + ttMsgBxObj['m_to_userid'] + ", 'dvMsgUlinks');", 1400);

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

JSSHOP.msgs.popGuestMsgBox = function(cMAinc) {
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
	tgmsg = JSSHOP.msgs.decodeMessageMatter(tgmsg);
	tgnewMsg = JSSHOP.msgs.decorateMessageForDisplay(tgmsg);
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


JSSHOP.msgs.prepMsgBox = function(vToUid,vToUFn,vToUicn,vToItem,vTcb){
    atMBObg = null;
    atMBObg = "";
	atMBObg = JSSHOP.msgs.nTmpMsgBxOb();
    atMBObg["m_to_userid"] = vToUid; // send to user id
    atMBObg["m_to"] = vToUFn; // send to user field name
	atMBObg["m_to_icon"] = JSSHOP.msgs.getSafeIconFile(vToUicn, "default.jpg"); // send to user icon
    if(quid == "0" || quid == "noQvalue") {
		atMBObg["m_from_icon"] = JSSHOP.msgs.getSafeIconFile("guest.png", "default.jpg"); // from user icon
    } else {
	atMBObg["m_from_icon"] = JSSHOP.msgs.getSafeIconFile(currQUsrObj.u_icon, "default.jpg"); // from user icon
    }
    atMBObg["m_type"] = "user"; // internal msg type
    atMBObg["m_val"] = vToUid; // internal msg token
    atMBObg["m_strAll"] = "msg_subjectmsg_matter"; // message form values to render
    atMBObg["m_useAnx"] = "n"; // add image upload btn
    atMBObg["m_tmpCB"] = vTcb; // null function as callback
    atMBObg["m_type"] = "user"; // internal msg type
    atMBObg["m_item"] = vToItem; // internal msg token
	JSSHOP.msgs.showNuMsgBox(atMBObg);
};
JSSHOP.msgs.fnshNuMsgIDSave = function(tCCLA, tCCLB, tCCLC) {
    if(tCCLB.indexOf("Error") != -1) {
        alert("Error saving message ID: " + tCCLB);
    } else {
         alert("Message ID saved: " + tCCLB);

    }
};

JSSHOP.msgs.getNewMsgId = function(tCCLA, tCCLB, tCCLC) {
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
};
JSSHOP.msgs.fnishNuMsgSave = function(tCCLA, tCCLB, tCCLC) {
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
	};
	JSSHOP.msgs.sendChatMessage = function(toUserId, tMitemID) {
    var inputField = document.getElementById('chat-input-' + toUserId);
    var message = inputField.innerText || inputField.textContent;
			var tPendingUploads = [];
			if(!(quid == "0" || quid == "noQvalue")) {
			tPendingUploads = JSSHOP.msgs.getPendingUploadRows(toUserId) || [];
		}


        if(tMitemID && tMitemID != "noQvalue") {
        message += " #PROPID:" + tMitemID + " ";
    }

    // document.getElementById("ms_matter").value = message;
    // document.getElementById("ms_matter").value = message;
	JSSHOP.msgs.syncMsgParticipantFields({ toUserId: toUserId });

	if (message.trim() === "" && tPendingUploads.length === 0) {
        alert("Please enter a message.");
        return;
    }
    // Send the message using your preferred method (e.g., AJAX)
    console.log("Sending message to user " + toUserId + ": " + message);
    // Clear the input field
    inputField.innerText = "";
    inputField.textContent = "";

    // Optionally, append the message to the chat window

	newMsg = JSSHOP.msgs.decorateMessageForDisplay(message);
	document.getElementById("ms_matter").value = JSSHOP.msgs.encodeMessageMatterForSave(newMsg);
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
	document.getElementById("msg_matter").value = JSSHOP.msgs.encodeMessageMatterForSave(FmSgSTr);
		JSSHOP.msgs.doMsgSave('user', toUserId,  "fnishGstMsgSave");
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
	document.getElementById("msg_matter").value = JSSHOP.msgs.encodeMessageMatterForSave(newMsg);
 tJFarr = JSSHOP.shared.getDynFrmVals(document["qmsgs"], "tmp_");

	JSSHOP.msgs.doMsgSave('user', toUserId,  "donada");

} else {

tmpDOs = null;
tmpDOs = {};

tDModThreadID = document.getElementById("ms_threadid").value;

tmpDOs["knvp"] = JSSHOP.shared.getFrmVals(document["qmsg"], "nada");
oi = getNuDBFnvp("qmsg",6,null,tmpDOs);
JSSHOP.msgs._pendingReplySaveCtx = {
	toUserId: toUserId,
	callbackName: "doNada"
};
doQComm(oi["rq"], null, "afterMsgReplySave");
console.log("sendChatMessage.update: " + oi["rq"]);
// update msg_dmodified with procNuUIitem
  procNuUIitem("qmsgs","msg_dmodified",tDModThreadID,JSSHOP.getUnixTimeStamp(),"doNada");
// alert(oi["rq"]);
}
   } // end if not guest
};

JSSHOP.msgs.showMsgBox = function(tmpMsgType, tmpMsgVal,atmpCB){
    alert("showMsgBox: " + tmpMsgType + " :: " + tmpMsgVal + " :: " + atmpCB);
    try {
        ttMBox = null;
        ttMBox = "";
	ttMBox = JSSHOP.msgs.nTmpMsgBxOb();
    ttMBox["m_val"] = tmpMsgVal;
    ttMBox["m_tmpCB"] = atmpCB;
    ttMBox["m_type"] = tmpMsgType;
	JSSHOP.msgs.showNuMsgBox(ttMBox);
    } catch(e) {
    alert("no JSSHOP.ui.showMsgBox: " + e);
    }
    };

// Legacy compatibility aliases for string callbacks and older call sites.
var doUMsgThread = JSSHOP.msgs.doUMsgThread;
var doUMsgHdr = JSSHOP.msgs.doUMsgHdr;
var showAReplyMsgSave = JSSHOP.msgs.showAReplyMsgSave;
var showReplyMsgSave = JSSHOP.msgs.showReplyMsgSave;
var showMsgSave = JSSHOP.msgs.showMsgSave;
var fnishGstMsgSave = JSSHOP.msgs.fnishGstMsgSave;
var fnshNuMsgIDSave = JSSHOP.msgs.fnshNuMsgIDSave;
var getNewMsgId = JSSHOP.msgs.getNewMsgId;
var fnishNuMsgSave = JSSHOP.msgs.fnishNuMsgSave;
var getUMsgLnkStr = JSSHOP.msgs.getUMsgLnkStr;

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
JSSHOP.msgs.decodeEmojiEscapes = function(tEscapedEmoji) {
	tEscapedEmoji = String(tEscapedEmoji || "");
	if(!tEscapedEmoji) {
		return "";
	}
	return tEscapedEmoji.replace(/\\u([0-9a-fA-F]{4})/g, function(_, tHex) {
		return String.fromCharCode(parseInt(tHex, 16));
	});
};

JSSHOP.msgs.insertEmoji = function(editorDivId, escapedEmoji) {
	var editorDiv = document.getElementById(editorDivId);
	if (editorDiv) {
		editorDiv.innerHTML += JSSHOP.msgs.decodeEmojiEscapes(escapedEmoji);
	}
};

JSSHOP.msgs.getEmojiPickerHTML = function(theEEditorDiv, theEEmojiDiv) {
	try {
		var emojiPickerHTML = "";
		// Keep emoji values as explicit unicode escapes to avoid charset/mojibake issues in inline handlers.
		var emojis = ['\\uD83D\\uDE00', '\\uD83D\\uDE02', '\\uD83D\\uDE0D', '\\uD83D\\uDE0E', '\\uD83D\\uDE22'];
		emojis.forEach(function(emojiEsc) {
			var emojiChar = JSSHOP.msgs.decodeEmojiEscapes(emojiEsc);
			emojiPickerHTML += '<span class="emoji" style="font-size:24px; cursor:pointer; margin:5px;" onclick="JSSHOP.msgs.insertEmoji(\'' + theEEditorDiv + '\', \'' + emojiEsc + '\');JSSHOP.msgs.toggleEmojiPicker(\'' + theEEmojiDiv + '\')">' + emojiChar + '</span>';
		});
	} catch(e) {
		alert("getEmojiPickerHTML: " + e);
	}
	console.log("emojiPickerHTML: " + emojiPickerHTML);
	return emojiPickerHTML;
};

JSSHOP.msgs.toggleEmojiPicker = function(theEmojoDiv) {
	var tEmojoDiv = document.getElementById(theEmojoDiv);
	if (tEmojoDiv) {
		tEmojoDiv.style.display = tEmojoDiv.style.display === 'none' ? 'block' : 'none';
	}
};

// Compatibility bridges for older call sites.
JSSHOP.ui.insertEmoji = JSSHOP.msgs.insertEmoji;
JSSHOP.ui.getEmojiPickerHTML = JSSHOP.msgs.getEmojiPickerHTML;
JSSHOP.ui.toggleEmojiPicker = JSSHOP.msgs.toggleEmojiPicker;
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


/*
end of messaging functions from incasa x_all.js
*/