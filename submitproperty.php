<?php 
ini_set('session.cache_limiter','public');
session_cache_limiter(false);
session_start();
include("config.php");
if(!isset($_SESSION['uemail']))
{
	header("location:login.php");
}

//// code insert
//// add code
$error="";
$msg="";
if(isset($_POST['add']))
{
	
	$title=$_POST['title'];
	$content=$_POST['content'];
	$ptype=$_POST['ptype'];
	$bhk=$_POST['bhk'];
	$bed=$_POST['bed'];
	$balc=$_POST['balc'];
	$hall=$_POST['hall'];
	$stype=$_POST['stype'];
	$bath=$_POST['bath'];
	$kitc=$_POST['kitc'];
	$floor=$_POST['floor'];
	$price=$_POST['price'];
	$city=$_POST['city'];
	$asize=$_POST['asize'];
	$loc=$_POST['loc'];
	$state=$_POST['state'];
	$status=$_POST['status'];
	$uid=$_SESSION['uid'];
	$feature=$_POST['feature'];
	
	$totalfloor=$_POST['totalfl'];
	/*
	$aimage=$_FILES['aimage']['name'];
	$aimage1=$_FILES['aimage1']['name'];
	$aimage2=$_FILES['aimage2']['name'];
	$aimage3=$_FILES['aimage3']['name'];
	$aimage4=$_FILES['aimage4']['name'];
	
	$fimage=$_FILES['fimage']['name'];
	$fimage1=$_FILES['fimage1']['name'];
	$fimage2=$_FILES['fimage2']['name'];
	
	$temp_name  =$_FILES['aimage']['tmp_name'];
	$temp_name1 =$_FILES['aimage1']['tmp_name'];
	$temp_name2 =$_FILES['aimage2']['tmp_name'];
	$temp_name3 =$_FILES['aimage3']['tmp_name'];
	$temp_name4 =$_FILES['aimage4']['tmp_name'];
	
	$temp_name5 =$_FILES['fimage']['tmp_name'];
	$temp_name6 =$_FILES['fimage1']['tmp_name'];
	$temp_name7 =$_FILES['fimage2']['tmp_name'];
	
	move_uploaded_file($temp_name,"admin/property/$aimage");
	move_uploaded_file($temp_name1,"admin/property/$aimage1");
	move_uploaded_file($temp_name2,"admin/property/$aimage2");
	move_uploaded_file($temp_name3,"admin/property/$aimage3");
	move_uploaded_file($temp_name4,"admin/property/$aimage4");
	
	move_uploaded_file($temp_name5,"admin/property/$fimage");
	move_uploaded_file($temp_name6,"admin/property/$fimage1");
	move_uploaded_file($temp_name7,"admin/property/$fimage2");
	*/
	$sql="insert into property (title,pcontent,type,bhk,stype,bedroom,bathroom,balcony,kitchen,hall,floor,size,price,location,city,state,feature,pimage,pimage1,pimage2,pimage3,pimage4,uid,status,mapimage,topmapimage,groundmapimage,totalfloor)
	values('$title','$content','$ptype','5','$stype','$bed','$bath','$balc','$kitc','$hall','$floor','$asize','$price',
	'$loc','$city','$state','$feature','','','','','','$uid','$status','','','','$totalfloor')";
	$result=mysqli_query($con,$sql);
	if($result)
		{
			$msg="<p class='alert alert-success'>Property Inserted Successfully</p>";
					
		}
		else
		{
			$error="<p class='alert alert-warning'>Property Not Inserted Some Error</p>";
		}
		// echo $error;
		// echo $msg;
		// exit;
}							
?>
<html>
<head>
        <!--	HYML Header start  -->
		<?php  include("include/html_header.php");?>
        <!--	HYML Header end  -->
		
<script>
	window.onload = function() {
JSSHOP.shared.addCurrSlctObj(svftObj["contract"], stype, "noQvalue", "noQvalue", "noQvalue");
JSSHOP.shared.addCurrSlctObj(svftObj["propstat"], selPropStat, "noQvalue", "noQvalue", "noQvalue");
JSSHOP.shared.addCurrSlctObj(svftObj["proptype"], ptype, "noQvalue", "noQvalue", "noQvalue");
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
		<?php  include("include/header.php");?>
        <!--	Header end  -->
        
        <!--	Banner  
        <div class="" style="background-image:url('images/breadcromb.jpg');max-height:200px;">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <h2 class="page-name float-left text-white text-uppercase mt-1 mb-0"><b><ti data-ison="stxt[916]" data-desc="btn_addprop">Submit Property</ti></b></h2>
                    </div>
                    <div class="col-md-6">
                        <nav aria-label="breadcrumb" class="float-left float-md-right">
                            <ol class="breadcrumb bg-transparent m-0 p-0">
                                <li class="breadcrumb-item text-white"><a href="#">Home</a></li>
                                <li class="breadcrumb-item active"><ti data-ison="stxt[916]" data-desc="btn_addprop">Submit Property</ti></li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
         Banner   --->
		 
		 
		<!--	Submit property   -->
        <div class="full-row py-2">
            <div class="container" style="margin: 0 auto; max-width: 600px;">
                    <div class="row">
						<div class="col-lg-12">
							<h2 class="text-secondary double-down-line text-center"><ti data-ison="stxt[916]" data-desc="btn_addprop">Add Property</ti></h2>
                        </div>
					</div>
                   	 <form method="post" enctype="multipart/form-data">
                    <!-- form and fields -->
                    <?php  
					$rtitle = "";
					$rpcontent = "";
					$rtype = "";
					$rbhk = "0";
					$rstype = "";
					$rbedroom = "1";
					$rbathroom = "1";
					$rbalcony = "0";
					$rkitchen = "1";
					$rhall = "1";
					$rfloor = "1";
					$rsize = "";
					$rprice = "";
					$rlocation = "";
					$rcity = "";
					$rstate = "";
					$rfeature = "";
					$rpimage = "";
					$rpimage1 = "";
					$rpimage2 = "";
					$rpimage3 = "";
					$rpimage4 = "";
					$ruid = "";
					$rstatus = "";
					$rmapimage = "";
					$rtopmapimage = "";
					$rgroundmapimage = "";
					$rtotalfloor = "";
					$rdate = "";
					include("include/subprop.php");?>
								 <!-- end form and fields -->
                       </form>
                    </div>            
            </div>
    
	<!--	Submit property   -->
        
        

        <!--	Footer   start-->
		<?php  include("include/footer.php");?>
		<!--	Footer   start-->
        
        
        <script laguage="javascript" type="text/javascript">
// JSSHOP.shared.addCurrSlctObj(svftObj["proptype"], ptype, "noQvalue", "noQvalue", "Select");

</script>

    </div>
</div>

<!-- Wrapper End --> 

        <!--	HYML footer start  -->
		<?php include("include/html_footer.php");?>
        <!--	HYML footer end  -->
 
<script src="js/tinymce/tinymce.min.js"></script>
<script src="js/tinymce/init-tinymce.min.js"></script>
<script laguage="javascript" type="text/javascript">
sasas = "erer";
</script>
</body>
</html>