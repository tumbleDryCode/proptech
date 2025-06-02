<?php 
session_start();
require("config.php");
if(!isset($_SESSION['auser']))
{
	header("location:index.php");
}
$error="";
$msg="";
if(isset($_POST['addabout']))
{

	$title=$_POST['title'];
	$content=$_POST['content'];
	$aimage=$_FILES['aimage']['name'];
	
	$temp_name1 = $_FILES['aimage']['tmp_name'];


	move_uploaded_file($temp_name1,"upload/$aimage");
	
	$sql="insert into about (title,content,image) values('$title','$content','$aimage')";
	$result=mysqli_query($con,$sql);
	if($result)
		{
			$msg="<p class='alert alert-success'>Inserted Successfully</p>";
					
		}
		else
		{
			$error="<p class='alert alert-warning'>* Not Inserted Some Error</p>";
		}
}
?>
<html>
<head>
  		        <!--	HTML Header start  -->
				  <?php include("includes/html_header.php");?>
			<!--	HTML Header end  -->
    </head>
    <body>
	
		<!-- Main Wrapper -->
		
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
									<li class="breadcrumb-item active"><ti data-ison="stxt[1015]" data-desc="btn_addh">Add Story</ti></li>
								</ul>
							</div>
						</div>
					</div>
					<!-- /Page Header -->
					
					<div class="row">
						<div class="col-md-12">
							<div class="card">
								<div class="card-header">
									<h2 class="card-title"><ti data-ison="stxt[1015]" data-desc="btn_adminlist">Add Story</ti></h2>
								</div>
								<form method="post" enctype="multipart/form-data">
								<div class="card-body">
										<div class="row">
											<div class="col-xl-12">
												<?php echo $error; ?>
												<?php echo $msg; ?>
												<div class="form-group row">
													<label class="col-lg-2 col-form-label"><ti data-ison="stxt[10]" data-desc="btn_adminlist">Title</ti></label>
													<div class="col-lg-9">
														<input type="text" class="form-control" name="title" required="">
													</div>
												</div>
												<div class="form-group row">
													<label class="col-lg-2 col-form-label">Image</label>
													<div class="col-lg-9">
														<input class="form-control" name="aimage" type="file" required="">
													</div>
												</div>
												<div class="form-group row">
													<label class="col-lg-2 col-form-label"><ti data-ison="stxt[948]" data-desc="btn_desc">Content</ti></label>
													<div class="col-lg-9">
														<textarea class="tinymce form-control" name="content" rows="10" cols="30"></textarea>
													</div>
												</div>
											</div>
										</div>
										<div class="text-left">
											<input type="submit" class="btn btn-primary"  value="Submit" name="addabout" style="margin-left:200px;">
										</div>
									</form>
								</div>
								
							</div>
						</div>
					</div>
					
					
				</div>
			</div>
			<!-- /Page Wrapper -->
				<!--	HTML footer start  -->																
				<?php include("includes/html_footer.php");?>
				<!--	HTML footer end  -->
				<script src="assets/plugins/tinymce/tinymce.min.js"></script>
		<script src="assets/plugins/tinymce/init-tinymce.min.js"></script>
 
    </body>
</html>