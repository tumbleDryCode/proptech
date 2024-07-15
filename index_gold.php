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
</head>
<body>

<!--	Page Loader  -->
<!--<div class="page-loader position-fixed z-index-9999 w-100 bg-white vh-100">
	<div class="d-flex justify-content-center y-middle position-relative">
	  <div class="spinner-border" role="status">
		<span class="sr-only">Loading...</span>
	  </div>
	</div>
</div>  -->
<!--	Page Loader  -->

<div id="page-wrapper">
    <div class="row"> 
        <!--	Header start  -->
		<?php include("include/header.php");?>
        <!--	Header end  -->
		
        <!--	Banner Start  -->
  
        <div class="rtable brdrClrHdr" style="background-image: url('images/banner/04.jpg'); min-width: 95%; max-width: 95%;min-height: 105%;margin:0 auto;margin-top:2px;">

            <div class="container h-100">
                <div class="row h-100 align-items-center">

               
                    <div class="col-lg-12">
                        <div>
                            <span class="text-primary txtBig"><ti data-ison="stxt[971]" data-desc="btn_find">Find</ti></span><br>
                           <span class="txtClrWhite txtBigger"> <ti data-ison="stxt[972]" data-desc="btn_dreamhome"> your dream home</ti></span><br>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
         <!--	 Banner End  -->
 
        <!--	Text Block One
		======================================================-->
		<!-----  Our Services  ---->
		
        <!--	Recent Properties  -->
        <div class="full-row">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h2 class="text-secondary double-down-line text-center mb-4"><ti data-ison="stxt[941]" data-desc="btn_upload">Recent Propreties</ti></h2>
                    </div>
                    <!--- <div class="col-md-6">
                        <ul class="nav property-btn float-right" id="pills-tab" role="tablist">
                            <li class="nav-item"> <a class="nav-link py-3 active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">New</a> </li>
                            <li class="nav-item"> <a class="nav-link py-3" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Featured</a> </li>
                            <li class="nav-item"> <a class="nav-link py-3" id="pills-contact-tab2" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Top Sale</a> </li>
                            <li class="nav-item"> <a class="nav-link py-3" id="pills-contact-tab3" data-toggle="pill" href="#pills-resturant" role="tab" aria-controls="pills-contact" aria-selected="false">Best Sale</a> </li>
                        </ul>
                    </div> --->
                    <div class="col-md-12">
                        <div class="tab-content mt-4" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home">
                                <div class="row">
								
									<?php 
                                        $ruid = "";
                                        $rstatus = "";
                                        $rtype = "";
                                        $rstype = "";
                                        $rtitle = "";
                                        $rpcontent = "";
                                        
                                        
                                        $rbhk = "0";
                                        
                                        $rbedroom = "1";
                                        $rbathroom = "1";
                                        $rbalcony = "0";
                                        $rkitchen = "1";
                                        $rhall = "1";
                                        $rfloor = "1";
                                        $rsize = "";
                                        $rprice = "0";
                                        $rlocation = "";
                                        $rcity = "";
                                        $rstate = "";
                                        $rfeature = "";
                                        $rpimage = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
                                        $rpimage1 = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
                                        $rpimage2 = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
                                        $rpimage3 = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
                                        $rpimage4 = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
                                        
                                        
                                        
                                        $rmapimage = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
                                        $rtopmapimage = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
                                        $rgroundmapimage = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
                                        $rtotalfloor = "1";
                                        $rdate = "";
                                        
                                        $query=mysqli_query($con,"SELECT property.*, user.uname,user.utype,user.uimage FROM `property`,`user` WHERE property.uid=user.uid and property.bhk = '5' ORDER BY RAND() LIMIT 2");
										while($row=mysqli_fetch_array($query))
										{
                                            $rtitle = $row["title"];
			$rpcontent = $row["pcontent"];
			$rtype = $row["type"];
			$rbhk = $row["bhk"];
			$rstype = $row["stype"];
			$rbedroom = $row["bedroom"];
			$rbathroom = $row["bathroom"];
			$rbalcony = $row["balcony"];
			$rkitchen = $row["kitchen"];
			$rhall = $row["hall"];
			$rfloor = $row["floor"];
			$rsize = $row["size"];
			$rprice = $row["price"];
			$rlocation = $row["location"];
			$rcity = $row["city"];
			$rstate = $row["state"];
			$rfeature = $row["feature"];
			$rpimage = "admin/property/" . $row["pimage"];
			$rpimage1 = "admin/property/" . $row["pimage1"];
			$rpimage2 = "admin/property/" . $row["pimage2"];
			$rpimage3 = "admin/property/" . $row["pimage3"];
			$rpimage4 = "admin/property/" . $row["pimage4"];
			$ruid = $row["uid"];
			$rstatus = $row["status"];
			$rmapimage = "admin/property/" . $row["mapimage"];
			$rtopmapimage = "admin/property/" . $row["topmapimage"];
			$rgroundmapimage = "admin/property/" . $row["groundmapimage"];
			$rtotalfloor = $row["totalfloor"];
			$rdate = $row["date"];	

									?>
 

                                    <div class="col-md-6 col-lg-4">
                                    <div class="price text-primary">&euro;<b><?php echo $row['13'];?> </b><span class="txtClrHdr"><?php echo $row['12'];?> Area m2</span></div>

                                        <div class="featured-thumb hover-zoomer mb-4">
                                            <div class="overlay-black overflow-hidden position-relative"> <img src="admin/property/<?php echo $row['18'];?>" alt="pimage">
                                                <div class="featured bg-primary text-white">New</div>
                                                <div class="sale bg-secondary text-white text-capitalize"><?php echo getPropTypeStr($row['5']);?></div>
                                            </div>
                                            <div class="featured-thumb-data shadow-one">

                                                <div class="p-3">

                                                    <h5 class="text-secondary hover-text-primary mb-2 text-capitalize"><a href="propertydetail.php?pid=<?php echo $row['0'];?>"><?php echo $row['1'];?></a></h5>
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
									<?php } ?>

                                </div>
                            </div>
                            
                            
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
		 


 


		<?php include("include/footer.php");?>
		<!--	Footer   start-->
        
        
        <!-- Scroll to top 
        <a href="#" class="bg-primary text-white hover-text-secondary" id="scroll"><i class="fas fa-angle-up"></i></a> 
          End Scroll To top --> 
    </div>
</div>
<!-- Wrapper End --> 
        <!--	HTML footer start  -->
		<?php include("include/html_footer.php");?>
        <!--	HTML footer end  -->
</body>
</html>