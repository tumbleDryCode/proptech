<?php
if(session_id() == '') {
	session_start();
	include("config.php");
	$error="";
	if(isset($_POST['login']))
	{
		$user=$_REQUEST['user'];
		$pass=$_REQUEST['pass'];
		
		if(!empty($user) && !empty($pass))
		{
			$query = "SELECT auser, apass FROM admin WHERE auser='$user' AND apass='$pass'";
			$result = mysqli_query($con,$query)or die(mysqli_error());
			$num_row = mysqli_num_rows($result);
			$row=mysqli_fetch_array($result);
			if( $num_row ==1 )
			{
				$_SESSION['auser']=$user;
				header("Location: dashboard.php");
			}
			else
			{
				$error='* Invalid User Name and Password';
			}
		} else {
			$error="* Please Fill all the Fileds!";
		}
		
	}   
	
	} else {
		header("Location:dashboard.php");
	}
?>
<html>
<head>
        
		<!--	HTML Header start  -->
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">

<title>in-casa - Dashboard</title>

<!-- Favicon -->
<link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.png">

<!-- Bootstrap CSS -->
<link rel="stylesheet" href="assets/css/bootstrap.min.css">

<!-- Fontawesome CSS -->
<link rel="stylesheet" href="assets/css/font-awesome.min.css">

<!-- Feathericon CSS -->
<link rel="stylesheet" href="assets/css/feathericon.min.css">

<link rel="stylesheet" href="assets/plugins/morris/morris.css">

		<link rel="stylesheet" href="../css/jquery-ui.css">
		<link rel="stylesheet" href="../css/jquery-ui.structure.css">
		<link rel="stylesheet" href="../css/jquery-ui.theme.css">

		
<!-- Datatables CSS -->
<link rel="stylesheet" href="assets/plugins/datatables/dataTables.bootstrap4.min.css">
<link rel="stylesheet" href="assets/plugins/datatables/responsive.bootstrap4.min.css">
<link rel="stylesheet" href="assets/plugins/datatables/select.bootstrap4.min.css">
<link rel="stylesheet" href="assets/plugins/datatables/buttons.bootstrap4.min.css">

<!-- Main CSS -->

<!--[if lt IE 9]>
	<script src="assets/js/html5shiv.min.js"></script>
	<script src="assets/js/respond.min.js"></script>
<![endif]-->

<link rel="stylesheet" href="../css/x_dev.css">
<link rel="stylesheet" href="../css/x_forms.css">
<link rel="stylesheet" type="text/css" href="../css/x_nav.css">
<link href="../js/bootstrap5.2/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" href="assets/css/style.css">

<link rel="stylesheet" type="text/css" href="../css/x_bs-fixes.css">

<script src="../js/bootstrap5.2/bootstrap.js"  language="javascript" type="text/javascript"></script>
 
     <!--	HTML Header end  -->
    </head>
    <body>
	 
		<!-- Main Wrapper -->
        <div class="page-wrappers login-body">
            <div class="login-wrapper">
            	<div class="container">
                	<div class="loginbox">
                        <div class="login-right">
							<div class="login-right-wrap">
							<p class="account-subtitle" style="margin:0px;padding:0px;"><ti data-ison="stxt[974]" data-desc="btn_login">Login</ti></p>
								<span class="txtSmall txtClrGrey"><ti data-ison="stxt[1011]" data-desc="btn_login">Email Password</ti>:</span>
								
								<p style="color:red;"><?php echo $error; ?></p>
								<!-- Form -->
								<form method="post">
									<div class="form-group">
										<input class="form-control" name="user" type="text" placeholder="Name" value="">
									</div>
									<div class="form-group">
										<input class="form-control" type="password" name="pass" placeholder="Password"  value="">
									</div>
									<div class="form-group">
										<button class="btn btn-primary btn-block" name="login" type="submit">Login</button>
									</div>
								</form>
								<!-- Social Login
								<div class="login-or">
									<span class="or-line"></span>
									<span class="span-or">or</span>
								</div>
								
								
								<div class="social-login">
									<span>Login with</span>
									<a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
									<a href="#" class="google"><i class="fa fa-google"></i></a>
									<a href="#" class="facebook"><i class="fa fa-twitter"></i></a>
									<a href="#" class="google"><i class="fa fa-instagram"></i></a>
								</div>
								Social Login -->
								<br>
								<div class="text-center dont-have"><ti data-ison="stxt[975]" data-desc="btn_reg">Dont have an Account</ti> <a href="register.php"><ti data-ison="stxt[36]" data-desc="btn_reg">Register</ti></a></div>
								
							</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		<!-- /Main Wrapper -->
				         <!--	HYML footer start  -->
						 <?php include("includes/html_footer.php");?>
        <!--	HYML footer end  -->
    </body>

</html>