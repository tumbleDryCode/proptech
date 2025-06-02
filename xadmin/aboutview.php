<?php
session_start();
require("config.php");
////code
 
if(!isset($_SESSION['auser']))
{
	header("location:index.php");
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
									<li class="breadcrumb-item active"><ti data-ison="stxt[1016]" data-desc="btn_editstrys">Edit Stories</ti></li>
								</ul>
							</div>
						</div>
					</div>
					<!-- /Page Header -->
					
					<div class="row">
						<div class="col-sm-12">
							<div class="card">
								<div class="card-header">
									<h4 class="card-title"><ti data-ison="stxt[1016]" data-desc="btn_editstrys">Edit Stories</ti></h4>
									<?php 
											if(isset($_GET['msg']))	
											echo $_GET['msg'];
											
									?>
								</div>
								<div class="card-body">

									<div class="table-responsive">
										<table class="table table-stripped">
											<thead>
												<tr>
													<th>Id</th>
													<th>Title</th>
													<th>Content</th>
													<th>Image</th>
													<th>Edit</th>
													<th>Delete</th>
													
												</tr>
											</thead>
											<?php
													
													$query=mysqli_query($con,"select * from about");
													$cnt=1;
													while($row=mysqli_fetch_row($query))
														{
											?>
											<tbody>
												<tr>
													<td><?php echo $cnt; ?></td>
													<td><?php echo $row['1']; ?></td>
													<td><?php echo $row['2']; ?></td>
													<td><img src="upload/<?php echo $row['3']; ?>" height="200px" width="200px"></td>
													<td><a href="aboutedit.php?id=<?php echo $row['0']; ?>">Edit</a></td>
													<td><a href="aboutdelete.php?id=<?php echo $row['0']; ?>">Delete</a></td>
												</tr>
											</tbody>
												<?php
												$cnt=$cnt+1;
												} 
												?>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				
				</div>			
			</div>
			<!-- /Main Wrapper -->
				<!--	HTML footer start  -->																
				<?php include("includes/html_footer.php");?>
				<!--	HTML footer end  -->
    </body>
</html>
