function doMPropsList(aaw,aww,cww) {
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



    <div class="col-md-6 col-lg-4">
							<div class="price text-primary">&euro;<b><?php echo $row['13'];?> </b><span class="txtClrHdr"><?php echo $row['12'];?> Area m2</span></div>

								<div class="featured-thumb hover-zoomer mb-4">
									<div class="overlay-black overflow-hidden position-relative"> <img src="admin/property/<?php echo $row['18'];?>" alt="pimage">
										<div class="featured bg-primary text-white">New</div>
										<div class="sale bg-secondary text-white text-capitalize"><?php echo getPropTypeStr($row['5']);?></div>
									</div>
									<div class="featured-thumb-data shadow-one">

										<div class="p-3">

											<h5 class="text-secondary hover-text-primary mb-2 text-capitalize"><a href="javascript:eindex('aa-pdetail', 'aa-pdetail.php?prpid=' + .php?prpid=<?php echo $row['0'];?>"><?php echo $row['1'];?></a></h5>
											<span class="location text-capitalize"><i class="fas fa-map-marker-alt text-primary"></i> <?php echo $row['14'];?></span> </div>

											<div class="px-4 pb-4 d-inline-block w-100">
									<div class=""> <a href="propertydetail.php?pid=<?php echo $row['0'];?>" class="txtSmall txtBold txtDecorNone"><ti data-ison="stxt[99]" data-desc="btn_moredet">more details</ti>...</a> </div>
									<div class="float-right"><i class="nav-material-icons coll-menu-item txtClrHdr" style="margin-right:4px;margin-top:2px;">&#xe0b7;</i> <a href="contact.php?propid=<?php echo $row['0'];?>" class="txtSmall txtBold txtDecorNone"><ti data-ison="stxt[98]" data-desc="btn_contact">Contact</ti></a> </div>
								</div>


										 <div class="bg-gray quantity px-4 pt-4">
											<ul>
											<li><b><?php echo $row['12'];?></b> Area m2</li>
												<li><b><?php echo $row['6'];?></b> <ti data-ison="stxt[922]" data-desc="btn_bedroos">Bedrooms</ti></li>
												<li><b><?php echo $row['7'];?></b> <ti data-ison="stxt[923]" data-desc="btn_bathrooms">Bathrooms</ti></li>
												<li><b><?php echo $row['9'];?></b> <ti data-ison="stxt[926]" data-desc="btn_kitchend">Kitchens</ti></li>
											<!--    <li><span><?php echo $rhall; ?></span> <ti data-ison="stxt[925]" data-desc="btn_halls">Halls</ti></li>
												<li><span><?php echo $row['8'];?></span> <ti data-ison="stxt[924]" data-desc="btn_terrace">Terrace</ti></li>
												-->
											</ul>
										</div> 
										<!-- <div class="p-4 d-inline-block w-100">
											<div class="float-left text-capitalize"><i class="fas fa-user text-primary mr-1"></i>By : <?php echo $row['uname'];?></div>
											<div class="float-right"><i class="far fa-calendar-alt text-primary mr-1"></i> 6 Months Ago</div>
										</div> -->
									</div>
								</div>
							</div>
                            */
// JSSHOP.ui.setTinnerHTML("includedContent",aaw + aww);

istrt = 0;
iprplen = 0;
fullPrpLstA = JSON.parse(aww);
iprplen = fullPrpLstA.length;
retPLstSTr = "";
// alert('doMPropsList - iprplen: ' + iprplen);
while(istrt < iprplen){
aprpObj = fullPrpLstA[istrt];
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

retPLstSTr += "<div class=\"col-md-6 col-lg-4\">";
retPLstSTr += "<div class=\"price text-primary\">&euro;<b>" + aprpPrice + "</b><span class=\"txtClrHdr\">" + aprpSize + " Area m2</span></div>";
retPLstSTr += "<div class=\"featured-thumb hover-zoomer mb-4\">";
retPLstSTr += "<div class=\"overlay-black overflow-hidden position-relative\"> <img src=\"admin/property/" + aprpPimage + "\" alt=\"pimage\">";
retPLstSTr += "<div class=\"featured bg-primary text-white\">New</div>";
retPLstSTr += "<div class=\"sale bg-secondary text-white text-capitalize\">" + aprpType + "</div>";
retPLstSTr += "</div>";
retPLstSTr += "<div class=\"featured-thumb-data shadow-one\">";
retPLstSTr += "<div class=\"p-3\">";
retPLstSTr += "<h5 class=\"text-secondary hover-text-primary mb-2 text-capitalize\"><a href=\"javascript:eindex('aa-pdetail','pid=aa-pdetail&prpid=" + aprpObj._id + "')\">" + aprpTitle + "</a></h5>";
retPLstSTr += "<span class=\"location text-capitalize\"><i class=\"fas fa-map-marker-alt text-primary\"></i> " + aprpLocation + "</span> </div>";
retPLstSTr += "<div class=\"px-4 pb-4 d-inline-block w-100\">";
retPLstSTr += "<div class=\"\"> <a href=\"propertydetail.php?pid=" + aprpUid + "\" class=\"txtSmall txtBold txtDecorNone\"><ti data-ison=\"stxt[99]\" data-desc=\"btn_moredet\">more details</ti>...</a> </div>";
retPLstSTr += "<div class=\"float-right\"><i class=\"nav-material-icons coll-menu-item txtClrHdr\" style=\"margin-right:4px;margin-top:2px;\">&#xe0b7;</i> <a href=\"contact.php?propid=" + aprpUid + "\" class=\"txtSmall txtBold txtDecorNone\"><ti data-ison=\"stxt[98]\" data-desc=\"btn_contact\">Contact</ti></a> </div>";
retPLstSTr += "</div>";
retPLstSTr += "<div class=\"bg-gray quantity px-4 pt-4\">";
retPLstSTr += "<ul>";
retPLstSTr += "<li><b>" + aprpSize + "</b> Area m2</li>";
retPLstSTr += "<li><b>" + aprpBedroom + "</b> <ti data-ison=\"stxt[922]\" data-desc=\"btn_bedroos\">Bedrooms</ti></li>";
retPLstSTr += "<li><b>" + aprpBathroom + "</b> <ti data-ison=\"stxt[923]\" data-desc=\"btn_bathrooms\">Bathrooms</ti></li>";
retPLstSTr += "<li><b>" + aprpKitchen + "</b> <ti data-ison=\"stxt[926]\" data-desc=\"btn_kitchend\">Kitchens</ti></li>";
retPLstSTr += "</ul>";
retPLstSTr += "</div>";
retPLstSTr += "</div>";
retPLstSTr += "</div>";
retPLstSTr += "</div>";

istrt++;
}
JSSHOP.ui.setTinnerHTML("includedContent",retPLstSTr);
// alert('doMPropsList - aaw: ' + aaw);


 };

var dmyFnishCntLoad = fnishCntLoad;
fnishCntLoad = function() {
 //  alert('fnishCntLoad');
 tmpDOqs = null;
tmpDOqs = {};
tmpDOqs["ws"] = "where _id>?";
tmpDOqs["wa"] = [0];
tmpDOqs["l"] = 45;
oia = getNuDBFnvp("property",5,null,tmpDOqs);
 doQComm(oia["rq"], null, "doMPropsList");
// return dmyFnishCntLoad;
};