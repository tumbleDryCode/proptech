<?php 
ini_set('session.cache_limiter','public');
session_cache_limiter(false);
session_start();
include("config.php");		
?>
<html>
<head>
        <!--	HTML Header start  -->
		<?php include("include/html_header.php");?>
        <!--	HTML Header end  -->
        <script src="js/swiper-bundle.min.js"></script>
        <link rel="stylesheet" type="text/css" href="css/swiper-bundle.min.css">
        <script>

if(currUrlArr.pid) {
    cid = currUrlArr.pid;
}
var fnshProdMDel = function(aa,bb,cc) { 
	getPropImgs();
JSSHOP.ui.closeLbox();
};

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
	</script>
</head>
<body>

<!--	Page Loader
=============================================================
<div class="page-loader position-fixed z-index-9999 w-100 bg-white vh-100">
	<div class="d-flex justify-content-center y-middle position-relative">
	  <div class="spinner-border" role="status">
		<span class="sr-only">Loading...</span>
	  </div>
	</div>
</div>
--> 


<div id="page-wrapper">
    <div class="row"> 
        <!--	Header start  -->
		<?php include("include/header.php");?>
        <!--	Header end  -->
        
        <!--	Banner -->
        <div class="rtable brdrClrHdr" style="background-image: url('images/breadcromb.jpg'); min-width: 95%; max-width: 95%;min-height: 105%;margin:0 auto;margin-top:2px;">
        <!--	Banner 
        <div class="banner-full-row page-banner" style="background-image:url('images/breadcromb.jpg');">   --->
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <h2 class="page-name float-left text-white text-uppercase mt-1 mb-0"><b><ti data-ison="stxt[920]" data-desc="btn_pdetail">Property Detail</ti></b></h2>
                    </div>
                    <div class="col-md-6">
                        <nav aria-label="breadcrumb" class="float-left float-md-right">
                            <ol class="breadcrumb bg-transparent m-0 p-0">
                                <li class="breadcrumb-item text-white"><a href="#">Home</a></li>
                                <li class="breadcrumb-item active"><ti data-ison="stxt[920]" data-desc="btn_pdetail">Property Detail</ti></li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
         <!--	Banner   --->

		
        <div class="full-row">
            <div class="container">
                <div class="row">
				
					<?php
						$id=$_REQUEST['pid']; 
						$query=mysqli_query($con,"SELECT property.*, user.* FROM `property`,`user` WHERE property.uid=user.uid and pid='$id'");
						while($row=mysqli_fetch_array($query))
						{
						
						echo '<input type="hidden" id="inpPropCtrct" value="' . $row['5'] . '">';
					  ?>
				   
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
					
					<?php } ?>
					<!-- just trying this contact form for now -->
                  
                     <!-- <div class="col-lg-4">
                        <h4 class="double-down-line-left text-secondary position-relative pb-4 mb-4 mt-md-50"><ti data-ison="stxt[935]" data-desc="btn_send_message">Send Message</ti></h4>
                        <form method="post" action="#">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Enter Name">
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Enter Email">
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Enter Phone">
                                    </div>
                                </div>
								<div class="col-md-12">
                                    <div class="form-group">
										<textarea class="form-control" placeholder="Enter Message"></textarea>
                                    </div>
                                </div>
								
                                <div class="col-md-12">
                                    <div class="form-group mt-4">
                                        <button type="submit" class="btn btn-primary w-100"><ti data-ison="stxt[936]" data-desc="btn_search_property">Search Property</ti></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <h4 class="double-down-line-left text-secondary position-relative pb-4 my-4"><ti data-ison="stxt[937]" data-desc="btn_instalment_calculator">Instalment Calculator</ti></h4>
                        <form class="d-inline-block w-100" action="calc.php" method="post">
                            <label class="sr-only"><ti data-ison="stxt[938]" data-desc="btn_property_amount">Property Amount</ti></label>
                            <div class="input-group mb-2 mr-sm-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">$</div>
                                </div>
                                <input type="text" class="form-control" name="amount" placeholder="Property Price">
                            </div>
                            <label class="sr-only">Month</label>
                            <div class="input-group mb-2 mr-sm-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text"><i class="far fa-calendar-alt"></i></div>
                                </div>
                                <input type="text" class="form-control" name="month" placeholder="Duration Year">
                            </div>
                            <label class="sr-only">Interest Rate</label>
                            <div class="input-group mb-2 mr-sm-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">%</div>
                                </div>
                                <input type="text" class="form-control" name="interest" placeholder="Interest Rate">
                            </div>
                            <button type="submit" value="submit" name="calc" class="btn btn-primary mt-4"><ti data-ison="stxt[939]" data-desc="btn_calclute_instalment">Calclute Instalment</ti></button>
                        </form>
                        <h4 class="double-down-line-left text-secondary position-relative pb-4 mb-4 mt-5"><ti data-ison="stxt[940]" data-desc="btn_featured_property">Featured Property</ti></h4>

                        <div class="sidebar-widget mt-5">
                            <h4 class="double-down-line-left text-secondary position-relative pb-4 mb-4"><ti data-ison="stxt[941]" data-desc="btn_recent_property_add">Recent Property Add</ti></h4>
                            <ul class="property_list_widget">
							
								<?php 
								$query=mysqli_query($con,"SELECT * FROM `property` ORDER BY date DESC LIMIT 6");
										while($row=mysqli_fetch_array($query))
										{
								?>
                                <li> <img src="admin/property/<?php echo $row['18'];?>" alt="pimage">
                                    <h6 class="text-secondary hover-text-primary text-capitalize"><a href="propertydetail.php?pid=<?php echo $row['0'];?>"><?php echo $row['1'];?></a></h6>
                                    <span class="font-14"><i class="fas fa-map-marker-alt icon-primary icon-small"></i> <?php echo $row['14'];?></span>
                                    
                                </li>
                                <?php } ?>

                            </ul>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>

         <!--	Footer   start-->
		<?php include("include/footer.php");?>
		<!--	Footer   start-->
        
        
        <!-- Scroll to top 
        <a href="#" class="bg-secondary text-white hover-text-secondary" id="scroll"><i class="fas fa-angle-up"></i></a> 
         End Scroll To top --> 
 
        <!--	HTML footer start  -->
		<?php include("include/html_footer.php");?>
        <!--	HTML footer end  -->

 
</body>
</html>