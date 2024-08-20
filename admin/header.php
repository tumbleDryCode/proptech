<?php
if(session_id() == '') {
    session_start();
}
require("config.php");
////code
 
if(!isset($_SESSION['auser']))
{
	header("location:index.php");
}
?>  
<div id="lightbox" class="lightbox"   onclick="javascript:JSSHOP.ui.closePopMenus();">
</div> <div id="lightbox_content" class="rtable bkgdClrWhite" style="min-height:400px;min-width:350px;z-index: 2147483647;position:fixed;top:-700px;left:-700px;word-wrap: break-word;max-width:80%;margin: 0 auto">
      </div>

  <div class="header">
			<div>



	
				 <!-- WideScreen Menu Toggle
												<a onclick="javascript:toggleVisibility('sidebara');" id="toggle_btn" style="float:right;padding: 2px;" class="bkgdWhite">
					<i class="fa fa-bars"></i>
				</a>
			 -->

			
				<!-- Mobile Menu Toggle -->
	 
				
								<div class="mobile_btn" id="mobile_btna" onclick="javascript:JSSHOP.ui.toggleVisibility('sidebara');" style="float:right;padding: 2px;" class="bkgdWhite">
					<i style="padding-top:10px"  class="fa fa-bars" ></i>
</div>

				<!-- /Mobile Menu Toggle -->
			
			</div>
				<!-- Logo -->
                <div class="header-left">
                
                </div>
				<!-- /Logo -->
				
				
				<!-- Header Right Menu -->
				<ul class="nav user-menu">

					<h4 style="color:white;text-transform:capitalize;padding-top:10px; vertical-align: middle"><a href="dashboard.php" class="logo logo-small"><img src="assets/img/logo-small.png" alt="Logo" width="30" height="30" class="rtable bkgdClrWhite">
					</a>  <span style="padding-top:10px;padding-right:10px;margin-right:15px; vertical-align: middle"><a href="../index.php" class="txtClrWhite txtDecorNone txtBig txtBold">Home</a> &nbsp;&nbsp;&nbsp;<a href="dashboard.php"  class="txtClrWhite txtDecorNone txtBig txtBold"><?php echo $_SESSION['auser'];?></a></span></h4>
					<!-- User Menu -->
					<h4 style="color:white;padding-top:10px;text-transform:capitalize; vertical-align: middle"></h4>
					<li class="nav-item dropdown app-dropdown">
						<a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
							<span class="user-img"><img style="padding-top:10px" class="rounded-circle" src="assets/img/profiles/avatar-01.png" width="31" alt="Admin Icon"></span>
						</a>
						
						<div class="dropdown-menu">
							<div class="user-header">
								<div class="avatar avatar-sm">
									<img style="padding-top:10px" src="assets/img/profiles/avatar-01.png" alt="User Image" class="avatar-img rounded-circle">
								</div>
								<div class="user-text">
									<h6><?php echo $_SESSION['auser'];?></h6>
									<p class="text-muted mb-0">Administrator</p>
								</div>
							</div>
							<a class="dropdown-item" href="profile.php">Profile</a>
							<a class="dropdown-item" href="logout.php">Logout</a>
						</div>
					</li>

					<!-- /User Menu -->
					
				</ul>
				<!-- /Header Right Menu -->
				
            </div>
			
			<!-- header --->
			
			
				
			
						<!-- Sidebar -->
            <div class="sidebara" id="sidebara"  style="max-width:250px; background-color:gray;z-index:1999999999;position:fixed;visibility:hidden;display:none;">
                <div class="sidebar-inner slimscroll" style="overflow:scroll">
					<div id="sidebar-menu" class="sidebar-menu">
						<ul>
							<li class="menu-title"> 
								<span>Main</span>
							</li>
							<li> 
								<a href="dashboard.php"><i class="fe fe-home"></i> <span>Dashboard</span></a>
							</li>
							
							<li class="menu-title"> 
								<span>Authentication</span>
							</li>
						
							<li class="submenu">
								<a href="#"><i class="fe fe-user"></i> <span> Authentication </span> <span class="menu-arrow"></span></a>
								<ul style="display: none;">
									<li><a href="index.php"> Login </a></li>
									<li><a href="register.php"><ti data-ison="stxt[961]" data-desc="btn_register">Register</ti></a></li>
									
								</ul>
							</li>
							<li class="menu-title"> 
								<span><ti data-ison="stxt[962]" data-desc="btn_all_users">All Users</ti></span>
							</li>
						
							<li class="submenu">
								<a href="#"><i class="fe fe-user"></i> <span><ti data-ison="stxt[617]" data-desc="btn_users">Users</span> <span class="menu-arrow"></span></a>
								<ul style="display: none;">
								<li><a href="javascript:eindex('aa-edit-aprops','pid=aa-edit-aprops&st=main')"><ti data-ison="stxt[617]" data-desc="btn_users">All</ti></a></li>
									<li><a href="adminlist.php"> Admin </a></li>
									<li><a href="useragent.php"><ti data-ison="stxt[943]" data-desc="btn_agent">Agent</ti></a></li>
									<li><a href="userbuilder.php"><ti data-ison="stxt[944]" data-desc="btn_builder">Builder</ti></a></li>
									<li><a href="userlist.php"><ti data-ison="stxt[75]" data-desc="btn_user">User</ti></a></li>
									
								</ul>
							</li>
						
							<li class="menu-title"> 
								<span>Property</span>
							</li>
							<li class="submenu">
								<a href="#"><i class="fe fe-user"></i> <span><ti data-ison="stxt[963]" data-desc="btn_property">Property</ti></span> <span class="menu-arrow"></span></a>
								<ul style="display: none;">
									<li><a href="propertyadd.php"><ti data-ison="stxt[964]" data-desc="btn_add_property">Add Property</ti></a></li>
									<li><a href="propertyview.php"><ti data-ison="stxt[965]" data-desc="btn_view_properties">View Properties</ti></a></li>
									
								</ul>
							</li>
							<!--
							<li class="menu-title"> 
								<span>State & City</span>
							</li>
							<li class="submenu">
								<a href="#"><i class="fe fe-user"></i> <span><ti data-ison="stxt[966]" data-desc="btn_state_city">State - City</ti></span> <span class="menu-arrow"></span></a>
								<ul style="display: none;">
									<li><a href="stateadd.php"><ti data-ison="stxt[211]" data-desc="btn_state">State</ti></a></li>
									<li><a href="cityadd.php"><ti data-ison="stxt[210]" data-desc="btn_city">City</ti></a></li>
								</ul>
							</li>
							-->
							<li class="menu-title"> 
								<span>Query</span>
							</li>
							<li class="submenu">
								<a href="#"><i class="fe fe-user"></i> <span> <ti data-ison="stxt[902]" data-desc="btn_contacts">Contact Us</ti> </span> <span class="menu-arrow"></span></a>
								<ul style="display: none;">
									<li><a href="contactview.php"> <ti data-ison="stxt[702]" data-desc="btn_messgs">Messages</ti> </a></li>
									<li><a href="feedbackview.php">Feedback</a></li>
								</ul>
							</li>
							<li class="menu-title"> 
								<span><ti data-ison="stxt[30]" data-desc="btn_about">About</ti></span>
							</li>
							<li class="submenu">
								<a href="#"><i class="fe fe-user"></i><span> <ti data-ison="stxt[1014]" data-desc="btn_about">About</ti> </span><span class="menu-arrow"></span></a>
								<ul style="display: none;">
									<li><a href="aboutadd.php"> <ti data-ison="stxt[1015]" data-desc="btn_about">About</ti> </a></li>
									<li><a href="aboutview.php"> <ti data-ison="stxt[1016]" data-desc="btn_view_about">View About</ti> </a></li>
								</ul>
							</li>
							
						</ul>
					</div>
                </div>
            </div>
			<!-- /Sidebar -->
			


 

