<?php
global $jscssprefix, $isBareTest, $usrlang;
session_start();
include("config.php");
$error="";
$msg="";
if(isset($_REQUEST['login']))
{
	$email=$_REQUEST['email'];
	$pass=$_REQUEST['pass'];
	
	
	if(!empty($email) && !empty($pass))
	{
		$sql = "SELECT * FROM quser where u_email='$email' && u_pass='$pass'";
		$result=mysqli_query($con, $sql);
		$row=mysqli_fetch_array($result);
		   if($row){
			   
				$_SESSION['uid']=$row['_id'];
				// set a quid cookie with the uid value
				setcookie('quid', $row['_id'], time() + (86400 * 30), "/"); // 86400 = 1 day
				$_SESSION['uemail']=$email;
				header("location:index.php");
				
		   }
		   else{
			   $error = "<p class='alert alert-warning'><ti data-ison='stxt[976]' data-desc='btn_loginerr'>Login Error</ti></p>";
		   }
	}else{
		$error = "<p class='alert alert-warning'><ti data-ison='stxt[1008]' data-desc='btn_regerr'>Fill all</ti></p>";
	}
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
        <!--	HYML Header start  -->
		<?php include("include/html_header.php");?>
        <!--	HYML Header end  -->
</head>
<script>
window.onload = function() {
document.getElementsByName('email')[0].placeholder= stxt[977];
document.getElementsByName('pass')[0].placeholder= stxt[978];
// doWinLoad();
};
</script>
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
                                <li class="breadcrumb-item active">Login</li>
                            </ol>
                        </nav>
                    </div>
		 
		 
		 
        <div class="page-wrappers full-row" style="padding: 15px;">
            <div class="">
            	<div class="container">
                	<div class="rtable bkgdClrWhite brdrClrHdr" style="max-width:600px;margin: 0 auto">
                        <div class="login-right">
							<div class="login-right-wrap">
							 
								<p class="account-subtitle" style="margin:0px;padding:0px;"><ti data-ison="stxt[974]" data-desc="btn_login">Login</ti></p>
								<span class="txtSmall txtClrGrey"><ti data-ison="stxt[37]" data-desc="btn_login">Email Password</ti>:</span>
								
								<?php echo $error; ?><?php echo $msg; ?>
								<!-- Form -->
								<form method="post">
									<div class="form-group">
										<input type="email"  name="email" class="form-control" placeholder="Your Email*">
									</div>
									<div class="form-group">
										<input type="password" name="pass"  class="form-control" placeholder="Your Password">
									</div>
									
										<button class="btn btn-primary" name="login" value="Login" type="submit">Login</button>
									
								</form>
																<!-- Social Login 
								<div class="login-or">
									<span class="or-line"></span>
									<span class="span-or">or</span>
								</div>
								

								<div class="social-login">
									<span>Login with</span>
									<a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a>
									<a href="#" class="google"><i class="fab fa-google"></i></a>
									<a href="#" class="facebook"><i class="fab fa-twitter"></i></a>
									<a href="#" class="google"><i class="fab fa-instagram"></i></a>
								</div>
								  /Social Login -->
								<br>
								<div class="text-center dont-have"><ti data-ison="stxt[975]" data-desc="btn_reg">Dont have an Account</ti> <a href="register.php"><ti data-ison="stxt[36]" data-desc="btn_reg">Register</ti></a></div>
								
							</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	<!--	login  -->
        
        
        <!--	Footer   start-->
		<?php include("include/footer.php");?>
		<!--	Footer   start-->
        
        <!-- Scroll to top --> 
        <a href="#" class="bg-secondary text-white" id="scroll"><i class="fas fa-angle-up"></i></a> 
        <!-- End Scroll To top --> 
    </div>
</div>
<!-- Wrapper End --> 
        <!--	HTML footer start  -->
		<?php include("include/html_footer.php");?>
        <!--	HTML footer end  -->

</body>
</html>