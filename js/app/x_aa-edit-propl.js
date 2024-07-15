currIContent == "y"

var doPrdMDelete = function() { 
    if(confirm(stxt[42] + " " + stxt[19] + "?")) {
    procNuUIitem("qmedia","m_rtype",JSSHOP.shared.getFrmFieldVal("qmedia", "_id", 0),"0","fnshProdMDel");
    }
};



var fnshProdMMain = function(aa,bb,cc) { 
// alert(bb);
getPropImgs();
JSSHOP.ui.closeLbox();

};


var doPrdMMain = function() { 
if(confirm("Set as main product picture?" + JSSHOP.shared.getFrmFieldVal("qmedia", "m_file", 0))) {
procNuUIitem("qmedia","m_vala",JSSHOP.shared.getFrmFieldVal("qmedia", "_id", "0"),JSSHOP.getUnixTimeStamp(),"fnshProdMMain");
    }
};
 

var getPrdImgEditDv = function(tpIncrNPI, tpFImg) {
tpPIEDv = document.createElement('div');
JSSHOP.shared.setFrmFieldVal("qmedia", "_id", tpIncrNPI);
JSSHOP.shared.setFrmFieldVal("qmedia", "m_file", tpFImg);
 
tmpRetStr = "<img src=\"admin/property/" + tpFImg +  "\" style=\"width: 100%\"  class=\"\" onclick=\"alert('" + JSSHOP.shared.getFrmFieldVal("qmedia", "_id", "0") + "');\">"
 try {
tmpRetStr += "<div class=\"dvTxtBtns\"><input type=\"button\" class=\"btnTxtLabel\" value=\"Set as Main\" onclick=\"javascript:doPrdMMain();\">   |   <input type=\"button\" class=\"btnTxtLabel\" value=\"Delete\" onclick=\"javascript:doPrdMDelete();\"></div>";
tmpRetStr += "<br><br>";
 
return tmpRetStr;
} catch(e) {
alert("getPrdImgEditDv " + e);
tmpRetStr = "oops. something wrong..";
return tmpRetStr;
}
};

var setSliderPropImgs = function(theAIa, theAIb, theAIc) {
    console.log("setPropImgs: " + theAIa + " " + theAIb + " " + theAIc);
    console.log("setPropImgs: " + theAIa + " " + theAIb + " " + theAIc);
    console.log("setPropImgs: " + theAIa + " " + theAIb + " " + theAIc);
	if(theAIb.indexOf("_id") != -1) {
		tAiretArr = JSON.parse(theAIb);
		var len = tAiretArr.length;
        tstr = "";
        iint = 0;
        while (iint < len) {
            tstr += "<div class=\"ls-slide\" data-ls=\"duration:7500; transition2d:5; kenburnszoom:in; kenburnsscale:1.2;\"> <img width=\"1920\" height=\"1080\"    src=\"admin/property/" + tAiretArr[iint]["m_file"] + "\" class=\"ls-bg\" alt=\"\" /> </div>";
 
 
			iint++;
		}
        tmpItDiv = document.createElement('span');
        tmpItDiv.innerHTML = tstr;
		// document.getElementById("single-property").innerHTML = tstr;
        document.getElementById("single-property").appendChild(tmpItDiv);
	}
	// alert(inpPropCtrct.value);
	
};

var doSwipe = function() {
    var swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    });
};

var setPropImgs = function(theAIa, theAIb, theAIc) {
    console.log("setPropImgs: " + theAIa + " " + theAIb + " " + theAIc);
    console.log("setPropImgs: " + theAIa + " " + theAIb + " " + theAIc);
    console.log("setPropImgs: " + theAIa + " " + theAIb + " " + theAIc);
	if(theAIb.indexOf("_id") != -1) {
		tAiretArr = JSON.parse(theAIb);
		var len = tAiretArr.length;
        tstr = "";
        iint = 0;
        tstr += "<div class=\"swiper\"> <div class=\"swiper-wrapper\">";
        while (iint < len) {
            tstr += "<div class=\"swiper-slide\"> <img width=\"100%\"  src=\"admin/property/" + tAiretArr[iint]["m_file"] + "\"  alt=\"\"> </div>";
 
 
			iint++;
		}
        tstr += "</div><div class=\"swiper-pagination\"></div><div class=\"swiper-button-prev\"></div><div class=\"swiper-button-next\"></div></div>";
        // tmpItDiv = document.createElement('span');
        // tmpItDiv.innerHTML = tstr;
		document.getElementById("singlerproperty").innerHTML = tstr;
       //  document.getElementById("single-property").appendChild(tmpItDiv);
      setTimeout(function(){ doSwipe(); }, 1000);
	}
	// alert(inpPropCtrct.value);
	
};



var getPropImgs = function() {
    tmpFobj = null;
    tmpFobj = {};
    tmpFobj["ws"] = "where m_pid=? and m_rtype=?";
    tmpFobj["wa"] = [cid, 5];
	tmpFobj["o"] = "m_vala desc";
    oi = getNuDBFnvp("qmedia", 5, null, tmpFobj);
    doQComm(oi["rq"], null, "setPropImgs");
};

 
	window.onload = function() {
        getPropImgs();
 doWinLoad();
	};


function doMPropDeatils(aaw,aww,cww) {
/*


CREATE TABLE `property` (
  `_id` int(50) NOT NULL,
  `title` varchar(200) NOT NULL,
  `pcontent` longtext NOT NULL,
  `type` varchar(100) NOT NULL,
  `bhk` varchar(50) NOT NULL,
  `stype` varchar(100) NOT NULL,
  `bedroom` int(50) NOT NULL,
  `bathroom` int(50) NOT NULL,
  `balcony` int(50) NOT NULL,
  `kitchen` int(50) NOT NULL,
  `hall` int(50) NOT NULL,
  `floor` varchar(50) NOT NULL,
  `size` int(50) NOT NULL,
  `price` int(50) NOT NULL,
  `location` varchar(200) NOT NULL,
  `city` varchar(100) NOT NULL,
  `state` varchar(100) NOT NULL,
  `feature` longtext NOT NULL,
  `pimage` varchar(300) NOT NULL,
  `pimage1` varchar(300) NOT NULL,
  `pimage2` varchar(300) NOT NULL,
  `pimage3` varchar(300) NOT NULL,
  `pimage4` varchar(300) NOT NULL,
  `uid` int(50) NOT NULL,
  `status` varchar(50) NOT NULL,
  `mapimage` varchar(300) NOT NULL,
  `topmapimage` varchar(300) NOT NULL,
  `groundmapimage` varchar(300) NOT NULL,
  `totalfloor` varchar(50) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


<input type="hidden" id="inpPropCtrct" value="<?php echo $row['5'];?>">
                    <div class="col-lg-8">

                        <div class="row">
                            <div class="col-md-12">
                                <div id="singlerproperty" style="margin: 12px;"> 
                                </div>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-md-6">
                            <div class="float-right"><i class="nav-material-icons coll-menu-item txtClrHdr" style="margin-right:4px;margin-top:2px;">&#xe0b7;</i> <a href="contact.php?propid=<?php echo $row['0'];?>" class="txtSmall txtBold txtDecorNone"><ti data-ison="stxt[98]" data-desc="btn_contact">Contact</ti></a> </div>

                                <div class="bg-primary d-table px-3 py-2 rounded text-white text-capitalize" id="dvPropTypeK"><?php echo getPropTypeStr($row['5']);?></div>
                                <h5 class="mt-2 text-secondary text-capitalize"><?php echo $row['1'];?></h5>
                                <span class="mb-sm-20 d-block text-capitalize"><i class="fas fa-map-marker-alt text-primary font-12"></i> &nbsp;<?php echo $row['16'];?></span>

							</div>
                            <div class="col-md-6">
                                <div class="text-primary text-left h5 my-2 text-md-right"><?php echo $row['13'];?></div>
                                <div class="text-left text-md-right"><ti data-ison="stxt[18]" data-desc="btn_price">Price</ti></div>
                            </div>
                        </div>
                        <div class="property-details">
                            <div class="bg-gray property-quantity px-4 pt-4 w-100">
                                <ul>
                                <li><span class="text-secondary"><?php echo $row['12'];?></span><ti data-ison="stxt[921]" data-desc="btn_ms">M2</ti></li>
                                <li><span class="text-secondary"><?php echo $row['6'];?></span><ti data-ison="stxt[922]" data-desc="btn_bedroom">Bedroom</ti></li>
                                <li><span class="text-secondary"><?php echo $row['7'];?></span><ti data-ison="stxt[923]" data-desc="btn_bath">Bathroom</ti></li>
                                <li><span class="text-secondary"><?php echo $row['8'];?></span><ti data-ison="stxt[924]" data-desc="btn_balcony">Balcony</ti></li>
                                <li><span class="text-secondary"><?php echo $row['10'];?></span><ti data-ison="stxt[925]" data-desc="btn_hall">Hall</ti></li>
                                <li><span class="text-secondary"><?php echo $row['9'];?></span><ti data-ison="stxt[926]" data-desc="btn_kitchen">Kitchen</ti></li>
                                </ul>
                            </div>
                            <h4 class="text-secondary my-4"><ti data-ison="stxt[40]" data-desc="btn_desc">Description</ti></h4>
                            <p><?php echo $row['2'];?></p>
                            
                            <!-- <h5 class="mt-5 mb-4 text-secondary">Property Summary</h5>
                            <div  class="table-striped font-14 pb-2">
                                <table class="w-100">
                                    <tbody>
                                        <tr>
                                            <td>BHK:</td>
                                            <td class="text-capitalize"><?php echo $row['4'];?></td>
                                            <td>Property Type:</td>
                                            <td class="text-capitalize"><?php echo $row['3'];?></td>
                                        </tr>
                                        <tr>
                                            <td><ti data-ison="stxt[928]" data-desc="btn_desc">Floor</ti></td>
                                            <td class="text-capitalize"><?php echo $row['11'];?></td>
                                            <td><ti data-ison="stxt[929]" data-desc="btn_desc">Total Floor</ti></td>
                                            <td class="text-capitalize"><?php echo $row['28'];?></td>
                                        </tr>
                                        <tr>
                                            <td><ti data-ison="stxt[210]" data-desc="btn_desc">City</ti></td>
                                            <td class="text-capitalize"><?php echo $row['15'];?></td>
                                            <td><ti data-ison="stxt[211]" data-desc="btn_desc">State</ti></td>
                                            <td class="text-capitalize"><?php echo $row['16'];?></td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                            </div> -->
                            <!-- not showing features for now
                            <h5 class="mt-5 mb-4 text-secondary"><ti data-ison="stxt[930]" data-desc="btn_features">Features</ti></h5>
                            <div class="row">
								<?php // echo $row['17'];?>
								
                            </div> 
                            -->  
							<!-- start of floor plans
                            <h5 class="mt-5 mb-4 text-secondary">Floor Plans</h5>
                            <div class="accordion" id="accordionExample">
                                <button class="bg-gray hover-bg-primary hover-text-white text-ordinary py-3 px-4 mb-1 w-100 text-left rounded position-relative" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><ti data-ison="stxt[931]" data-desc="btn_floor_plans">Floor Plans</ti></button>
                                <div id="collapseOne" class="collapse show p-4" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <img src="admin/property/<?php echo $row['25'];?>" alt="Not Available"> </div>
                                <button class="bg-gray hover-bg-primary hover-text-white text-ordinary py-3 px-4 mb-1 w-100 text-left rounded position-relative collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><ti data-ison="stxt[932]" data-desc="btn_basement_floor">Basement Floor</ti></button>
                                <div id="collapseTwo" class="collapse p-4" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                    <img src="admin/property/<?php echo $row['26'];?>" alt="Not Available"> </div>
                                <button class="bg-gray hover-bg-primary hover-text-white text-ordinary py-3 px-4 mb-1 w-100 text-left rounded position-relative collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"><ti data-ison="stxt[933]" data-desc="btn_ground_floor">Ground Floor</ti></button>
                                <div id="collapseThree" class="collapse p-4" aria-labelledby="headingThree" data-parent="#accordionExample">
                                    <img src="admin/property/<?php echo $row['27'];?>" alt="Not Available"> </div>
                            </div>
							 end of floor plans -->
                            <!-- start agente data  
                              <h5 class="mt-5 mb-4 text-secondary double-down-line-left position-relative"><ti data-ison="stxt[934]" data-desc="btn_contact_agent">Contact Agent</ti></h5>
                            <div class="agent-contact pt-60">
                                <div class="row">
                                    <div class="col-sm-4 col-lg-3"> <img src="admin/user/<?php echo $row['uimage']; ?>" alt="" height="200" width="170"> </div>
                                    <div class="col-sm-8 col-lg-9">
                                        <div class="agent-data text-ordinary mt-sm-20">
                                            <h6 class="text-primary text-capitalize"><?php echo $row['uname'];?></h6>
                                            <ul class="mb-3">
                                                <li><?php echo $row['uphone'];?></li>
                                                <li><?php echo $row['uemail'];?></li>
                                            </ul>
                                            
                                            <div class="mt-3 text-secondary hover-text-primary">
                                                <ul>
                                                    <li class="float-left mr-3"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                                    <li class="float-left mr-3"><a href="#"><i class="fab fa-twitter"></i></a></li>
                                                    <li class="float-left mr-3"><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                                                    <li class="float-left mr-3"><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                                    <li class="float-left mr-3"><a href="#"><i class="fas fa-rss"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-lg-12">
                                        <form class="bg-gray-form mt-5" action="#" method="post">
                                            <div class="row">
                                                <div class="col-md-5">
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <div class="form-group">
                                                                <input class="form-control bg-gray" id="name" name="firstname" placeholder="Name" type="text">
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12">
                                                            <div class="form-group">
                                                                <input class="form-control bg-gray" id="email" name="email" placeholder="Email" type="text">
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12">
                                                            <div class="form-group">
                                                                <input class="form-control bg-gray" id="phone" name="phone" placeholder="Phone" type="text">
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12">
                                                            <button type="submit" id="send" value="submit" class="btn btn-primary">Send Message</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-7">
                                                    <div class="row">
                                                        <div class="col-md-12 col-lg-12">
                                                            <div class="form-group">
                                                                <textarea class="form-control bg-gray mt-sm-20" id="massage" name="massage" cols="30" rows="7" placeholder="Massage"></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>  
                                     end agente data -->
                                </div>
                            </div>
                        </div>
                    </div>
                    */
iprpinc = 0;

// iprpdetaLen = iprpdetaArr.length;
retPDetStr = "";
if(aww.indexOf("_id") != -1) {
    iprpdetaArr = JSON.parse(aww);
    aprpObj = iprpdetaArr[0];
    aprpTitle = aprpObj["title"];
    aprpContent = aprpObj["pcontent"];
    aprpType = aprpObj["type"];
    aprpBhk = aprpObj["bhk"];
    aprpStype = aprpObj["stype"];
    aprpBedroom = aprpObj["bedroom"];
    aprpBathroom = aprpObj["bathroom"];
    aprpBalcony = aprpObj["balcony"];
    aprpKitchen = aprpObj["kitchen"];
    aprpHall = aprpObj["hall"];
    aprpFloor = aprpObj["floor"];
    aprpSize = aprpObj["size"];
    aprpPrice = aprpObj["price"];
    aprpLocation = aprpObj["location"];
    aprpCity = aprpObj["city"];
    aprpState = aprpObj["state"];
    aprpFeature = aprpObj["feature"];
    aprpPimage = aprpObj["pimage"];
    aprpPimage1 = aprpObj["pimage1"];
    aprpPimage2 = aprpObj["pimage2"];
    aprpPimage3 = aprpObj["pimage3"];
    aprpPimage4 = aprpObj["pimage4"];
    aprpUid = aprpObj["uid"];
    aprpStatus = aprpObj["status"];
    aprpMapimage = aprpObj["mapimage"];
    aprpTopmapimage = aprpObj["topmapimage"];
    aprpGroundmapimage = aprpObj["groundmapimage"];
    aprpTotalfloor = aprpObj["totalfloor"];
    aprpDate = aprpObj["date"];
    // alert(aprpTitle);
    // alert(aprpContent);
    // alert(aprpType);
    retPDetStr += "<div class=\"col-lg-8\">";
    retPDetStr += "<div class=\"row\">";
    retPDetStr += "<div class=\"col-md-12\">";
    retPDetStr += "<div id=\"singlerproperty\" style=\"margin: 12px;\"> </div>";
    retPDetStr += "</div>";
    retPDetStr += "</div>";
    retPDetStr += "<div class=\"row mb-4\">";
    retPDetStr += "<div class=\"col-md-6\">";
    retPDetStr += "<div class=\"float-right\"><i class=\"nav-material-icons coll-menu-item txtClrHdr\" style=\"margin-right:4px;margin-top:2px;\">&#xe0b7;</i> <a href=\"contact.php?propid=" + aprpUid + "\" class=\"txtSmall txtBold txtDecorNone\">" + stxt[98] + "</a> </div>";
    retPDetStr += "<div class=\"bg-primary d-table px-3 py-2 rounded text-white text-capitalize\" id=\"dvPropTypeK\">" + aprpType + "</div>";
    retPDetStr += "<h5 class=\"mt-2 text-secondary text-capitalize\">" + aprpTitle + "</h5>";
    retPDetStr += "<span class=\"mb-sm-20 d-block text-capitalize\"><i class=\"fas fa-map-marker-alt text-primary font-12\"></i> &nbsp;" + aprpLocation + "</span>";
    retPDetStr += "</div>";
    retPDetStr += "<div class=\"col-md-6\">";
    retPDetStr += "<div class=\"text-primary text-left h5 my-2 text-md-right\">" + aprpPrice + "</div>";
    retPDetStr += "<div class=\"text-left text-md-right\">" + stxt[18] + "</div>";
    retPDetStr += "</div>";
    retPDetStr += "</div>";
    retPDetStr += "<div class=\"property-details\">";
    retPDetStr += "<div class=\"bg-gray property-quantity px-4 pt-4 w-100\">";
    retPDetStr += "<ul>";

    retPDetStr += "<li><span class=\"text-secondary\">" + aprpSize + "</span>" + stxt[921] + "</li>";
    retPDetStr += "<li><span class=\"text-secondary\">" + aprpBedroom + "</span>" + stxt[922] + "</li>";
    retPDetStr += "<li><span class=\"text-secondary\">" + aprpBathroom + "</span>" + stxt[923] + "</li>";
    retPDetStr += "<li><span class=\"text-secondary\">" + aprpBalcony + "</span>" + stxt[924] + "</li>";
    retPDetStr += "<li><span class=\"text-secondary\">" + aprpHall + "</span>" + stxt[925] + "</li>";
    retPDetStr += "<li><span class=\"text-secondary\">" + aprpKitchen + "</span>" + stxt[928] + "</li>";
    retPDetStr += "</ul>";
    retPDetStr += "</div>";
    retPDetStr += "<h4 class=\"text-secondary my-4\">" + stxt[40] + "</h4>";
    retPDetStr += "<p>" + aprpContent + "</p>";
    retPDetStr += "</div>";
    retPDetStr += "</div>";
    retPDetStr += "</div>";
    retPDetStr += "</div>";
    // alert(retPDetStr);
    JSSHOP.ui.setTinnerHTML("includedContent", retPDetStr);
    tmpFobj = null;
    tmpFobj = {};
    tmpFobj["ws"] = "where m_pid=? and m_rtype=?";
    tmpFobj["wa"] = [aprpUid, 5];
    tmpFobj["o"] = "m_vala desc";
    oi = getNuDBFnvp("qmedia", 5, null, tmpFobj);
    doQComm(oi["rq"], null, "setPropImgs");
}
}


 

var dmyFnishCntLoad = fnishCntLoad;
fnishCntLoad = function() {
  // alert('fnishCntLoad');
 tmpDOqs = null;
tmpDOqs = {};
tmpDOqs["ws"] = "where _id=?";
tmpDOqs["wa"] = [prpid];
tmpDOqs["l"] = 45;
oia = getNuDBFnvp("property",5,null,tmpDOqs);

doQComm(oia["rq"], null, "doMPropDeatils");
return dmyFnishCntLoad;
};