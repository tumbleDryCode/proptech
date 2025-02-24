<?php 
ini_set('session.cache_limiter','public');
session_cache_limiter(false);
session_start();
include("config.php");
///code								
?>
<html>
<head>
        <!--	HYML Header start  -->
		<?php include("include/html_header.php");?>
        <!--	HYML Header end  -->
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
        <div class="col-md-6">
                        <nav aria-label="breadcrumb" class="float-left float-md-right">
                            <ol class="breadcrumb bg-transparent m-0 p-0">
                                <li class="breadcrumb-item text-black"><a href="./">Home</a></li>
                                <li class="breadcrumb-item active"><ti data-ison="stxt[940]" data-desc="btn_property_featured">Featured</ti></li>
                            </ol>
                        </nav>
        </div>
        <!--	Banner   --->
        <div class="rtable brdrClrHdr" style="background-image: url('images/banner/04.jpg'); min-width: 95%; max-width: 95%;min-height: 105%;margin:0 auto;margin-top:2px;">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <h2 class="page-name float-left text-white text-uppercase mt-1 mb-0"><b><ti data-ison="stxt[940]" data-desc="btn_pdetail">Featured</ti></b></h2>
                    </div>

                </div>
            </div>
        </div>
         <!--	Banner   --->
        
        <!--	Property Grid
		===============================================================-->
        <div class="full-row">
            <div class="container">
                <div class="row">
				
					<div class="col-lg-8">
                        <div class="row">
						
							<?php 
                                          //              $query=mysqli_query($con,"SELECT * FROM `property` WHERE property.bhk='5' limit 5");
							 $query=mysqli_query($con,"SELECT property.*,  user.uname,user.utype,user.uimage FROM `property`, `user` WHERE property.bhk='5' and user.uid=property.uid  limit 5");
								while($row=mysqli_fetch_array($query))
								{
                                   
							?>
									
                            <div class="col-md-6">
                                <div class="featured-thumb hover-zoomer mb-4">
                                    <div class="overlay-black overflow-hidden position-relative"> <img src="admin/property/<?php echo $row["pimage"];?>" alt="pimage">
                                        
                                        <div class="sale bg-secondary text-white"><?php echo getPropTypeStr($row['5']);?></div>
                                        <div class="price text-primary"><?php echo $row['13'];?> <span class="text-white"><?php echo $row['12'];?> Area m2</span></div>
                                        
                                    </div>
                                    <div class="featured-thumb-data shadow-one">
                                        <div class="">
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


                                    </div>
                                </div>
                            </div>
                            <?php } ?>
                            

                            
                            
                           
                        </div> <!-- end of row -->
                    </div> <!-- end of col-lg-8 -->
                    
                </div> <!-- end of row -->
            </div> <!-- end of container -->
        </div> <!-- end of full-row -->

        
        <!--	Footer   start-->
		<?php include("include/footer.php");?>
		<!--	Footer   start-->
        
        <!-- Scroll to top --> 
        <a href="#" class="bg-secondary text-white hover-text-secondary" id="scroll"><i class="fas fa-angle-up"></i></a> 
        <!-- End Scroll To top --> 
         
    </div> <!-- end of row -->
</div> <!-- end of page-wrapper -->
<!-- Wrapper End --> 
        <!--	HYML footer start  -->
		<?php include("include/html_footer.php");?>
        <!--	HYML footer end  -->
</body>

</html>

<?php
/*
// write sql statement to create table qlogifleettkt in mysql with the following fields _id, qlogit_rtype, qlogit_vid, qlogit_coid, qlogit_uid, qlogit_tlst, qlogit_notes, qlogit_tractr, qlogit_uco, qlogit_tusr, qlogit_tuid, qlogit_tco, qlogit_tcoid, qlogit_dadded where only qlogit_notes is text and a�� inclided id are integer and the rest are varchar(255) and _id is primary key and auto increment
create table qlogifleettkt(_id int primary key auto_increment, qlogit_rtype int(12), qlogit_vid int(12), qlogit_coid int(12), qlogit_uid int(12), qlogit_tlst text, qlogit_notes text, qlogit_tractr varchar(64), qlogit_uco varchar(255), qlogit_tusr varchar(255), qlogit_tuid int(12), qlogit_tco varchar(255), qlogit_tcoid int(12), qlogit_dadded varchar(24));

create table qlogifleetfwl(_id int primary key auto_increment, qlogif_rtype int(12), qlogif_vid int(12), qlogif_coid int(12), qlogif_uid int(12), qlogif_fwltype varchar(24), qlogif_vusage varchar(26), qlogif_tractr varchar(64), qlogif_uco int(12), qlogif_tusr varchar(255), qlogif_tuid int(12), qlogif_tco varchar(255), qlogif_tcoid int(12), qlogif_dadded varchar(24));
*/
?>