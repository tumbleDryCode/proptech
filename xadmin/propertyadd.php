<?php
session_start();
require("config.php");
////code
 
if(!isset($_SESSION['auser']))
{
	header("location:index.php");
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
	$uid=$_POST['uid'];
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
	
	move_uploaded_file($temp_name,"property/$aimage");
	move_uploaded_file($temp_name1,"property/$aimage1");
	move_uploaded_file($temp_name2,"property/$aimage2");
	move_uploaded_file($temp_name3,"property/$aimage3");
	move_uploaded_file($temp_name4,"property/$aimage4");
	
	move_uploaded_file($temp_name5,"property/$fimage");
	move_uploaded_file($temp_name6,"property/$fimage1");
	move_uploaded_file($temp_name7,"property/$fimage2");
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
}
?>
<html>
<head>

<?php include("includes/html_header.php");?>
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

		
			<!-- Header -->
			<?php include("header.php"); ?>
			<!-- /Sidebar -->
			
			<!-- Page Wrapper -->
            <div class="page-wrapper">
                <div class="content container-fluid">
				
					<!-- Page Header -->
					<div class="page-header">
						<div class="row">
							<div class="col">
								<h3 class="page-title">Admin</h3>
								<ul class="breadcrumb">
									<li class="breadcrumb-item"><a href="dashboard.php">Dashboard</a></li>
									<li class="breadcrumb-item active"><ti data-ison="stxt[916]" data-desc="btn_addprop">Add Property</ti></li>
								</ul>
							</div>
						</div>
					</div>
					<!-- /Page Header -->
					
					<div class="row">
						<div class="col-md-12">
							<div class="">
								<div class="card-header">
									<h4 class="card-title"><ti data-ison="stxt[916]" data-desc="btn_addprop">Add Property</ti></h4>
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
					include("../include/subprop.php");?>
								 <!-- end form and fields -->
								</form>
							</div>
						</div>
					</div>
				
				</div>			
			</div>
			<!-- /Main Wrapper -->

		
 
 
				        <!--	HYML footer start  -->
		<?php include("includes/html_footer.php");?>
        <!--	HYML footer end  -->
		<script src="assets/plugins/tinymce/tinymce.min.js"></script>
		<script src="assets/plugins/tinymce/init-tinymce.min.js"></script>
 
    </body>

</html>