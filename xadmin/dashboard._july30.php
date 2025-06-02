<?php
session_start();
include("config.php");
////code
 
if(!isset($_SESSION['auser']))
{
	header("location:index.php");
}
?>
<!DOCTYPE html>
<html lang="en">
    
<head>

    
		        <!--	HTML Header start  -->
				<?php include("includes/html_header.php");?>
        <!--	HTML Header end  -->
				

    </head>
    <body>
	
		<!-- Main Wrapper -->

		
			<!-- Header -->
				<?php include("header.php"); ?>
			<!-- /Header -->
			
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
									<li class="breadcrumb-item active"><ti data-ison="stxt[965]" data-desc="btn_vwprops">View Properties</ti></li>
								</ul>
							</div>
						</div>
					</div>
					<!-- /Page Header -->
					
					
					
					
					<div class="row">
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-body" style="overflow: scroll">

                                        <h4 class="header-title mt-0 mb-4"><ti data-ison="stxt[965]" data-desc="btn_vwprops">View Properties</ti></h4>
										<?php 
											if(isset($_GET['msg']))	
											echo $_GET['msg'];	
										?>
                                        <table id="datatable-buttons" class="table table-striped dt-responsive">
                                            <thead>
                                                <tr>
                                                    <th>P ID</th>
                                                    <th><ti data-ison="stxt[10]" data-desc="btn_title">Title</ti></th>
                                                    <th><ti data-ison="stxt[31]" data-desc="btn_edit">Edit</ti></th>
                                                    <th><ti data-ison="stxt[42]" data-desc="btn_delete">Delete</ti></th>
                                                    <th><ti data-ison="stxt[18]" data-desc="btn_price">Price</ti></th>
                                                   <!-- <th>Description</th> -->
                                                     <th><ti data-ison="stxt[992]" data-desc="btn_type">Type</ti></th> 
                                                    <!-- <th>BHK</th>
                                                    <th>Selling Type</th>
                                                     <th>Bedroom</th>
                                                    <th>Bathroom</th>
                                                    <th>Balcony</th>
                                                    <th>Kitchen</th>
                                                    <th>Hall</th>
                                                    <th>Floor</th> -->
													<th><ti data-ison="stxt[921]" data-desc="btn_area">Area m2</ti></th>
                                                    
                                                    <!-- <th>Location</th> -->
                                                    <th><ti data-ison="stxt[210]" data-desc="btn_city">City</ti></th>
                                                    <th><ti data-ison="stxt[211]" data-desc="btn_state">State</ti></th>
                                          
													<!-- <th>Image1</th>
                                                    <th>Image2</th>
                                                    <th>Image3</th>
                                                    <th>Image4</th>
                                                    <th>Image5</th> -->
                                                    <th>Uid</th>
													<th><ti data-ison="stxt[77]" data-desc="btn_area">Status</ti></th>
                                                    <!--
                                                    <th>Floor Plan</th>
                                                    <th>Basement Plan</th>
													<th>Ground Floor Plan</th>
                                                    <th>Total Floor</th>
                                                    -->
                                                    <th><ti data-ison="stxt[74]" data-desc="btn_date">Date</ti></th>

                                                    
                                                </tr>
                                            </thead>
                                        
                                        
                                            <tbody>
												<?php
													
													$query=mysqli_query($con,"select * from property");
													while($row=mysqli_fetch_row($query))
													{
												?>
											
                                                <tr>
                                                    <td><?php echo $row['0']; ?></td>
                                                    <td><a href="../propertydetail.php?pid=<?php echo $row['0'];?>"><?php echo $row['1']; ?></a></td>
                                                    <td><a href="propertyedit.php?id=<?php echo $row['0'];?>">Edit</a></td>
                                                    <td><a href="propertydelete.php?id=<?php echo $row['0'];?>">Delete</a></td>
                                                    <td><a href="propertyedit.php?id=<?php echo $row['0'];?>" target="_blank"><?php echo $row['13']; ?></a></td>
                                                    <td><?php echo $row['3']; ?></td>
 
                                                    <td><?php echo $row['12']; ?></td>

 
													 <td><?php echo $row['15']; ?></td>
                                                    <td><?php echo $row['16']; ?></td>
 
 
                                                    <td><?php echo $row['23']; ?></td> 
                                                    <td><?php echo $row['24']; ?></td>
 
                                                    <td><?php echo $row['29']; ?></td>

                                                </tr>
                                               <?php
												} 
												?>
                                            </tbody>
                                        </table>
                                        
                                    </div> <!-- end card body-->
                                </div> <!-- end card -->
                            </div><!-- end col-->
                        </div>
                        <!-- end row-->
					
				</div>			
			</div>
			<!-- /Page Wrapper -->
		

		<!-- /Main Wrapper -->
		
		         <!--	HYML footer start  -->
		<?php include("includes/html_footer.php");?>
        <!--	HYML footer end  -->

    </body>

</html>
