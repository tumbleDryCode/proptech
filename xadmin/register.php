<?php 
include("config.php");
$error="";
$msg="";
if(isset($_REQUEST['insert']))
{
	$name=$_REQUEST['name'];
	$email=$_REQUEST['email'];
	$pass=$_REQUEST['pass'];
	// $dob=$_REQUEST['dob'];
	$phone=$_REQUEST['phone'];
	
	if(!empty($name) && !empty($email) && !empty($pass)  && !empty($phone))
	{
		$dob = date("Y-m-d");
		$sql="insert into admin (auser,aemail,apass,adob,aphone) values('$name','$email','$pass','$dob','$phone')";
		$result=mysqli_query($con,$sql);
		if($result)
			{
				$msg = "<p class='alert alert-success'><ti data-ison='stxt[1010]' data-desc='btn_regok'>Reg ok</ti></p> ";
				
						
			}
			else
			{
				$error = "<p class='alert alert-warning'><ti data-ison='stxt[1009]' data-desc='btn_regerr'>Reg Error</ti></p> ";
			}
	}
	else{
		$error = "<p class='alert alert-warning'><ti data-ison='stxt[1008]' data-desc='btn_fillall'>Fill all</ti></p>";
	}
	
	
}
?>
<html>  
<head>
<!--	HTML Header start  -->
<?php include("includes/html_header.php");?>
<!--	HTML Header end  -->
<script>
window.onload = function() {
document.getElementsByName('name')[0].placeholder= stxt[97];
document.getElementsByName('phone')[0].placeholder= stxt[24];
document.getElementsByName('email')[0].placeholder= stxt[977];
document.getElementsByName('pass')[0].placeholder= stxt[978];
doWinLoad();
};
</script>
</head>
	
		<!-- Main Wrapper -->
        <div class="page-wrappers login-body">
            <div class="login-wrapper">
            	<div class="container">
                	<div class="loginbox">
                    	
                        <div class="login-right">
							<div class="login-right-wrap">
							<p class="account-subtitle" style="margin:0px;padding:0px;"><ti data-ison="stxt[36]" data-desc="btn_register">Register</ti></p>
								<span class="txtSmall txtClrGrey"><ti data-ison="stxt[1012]" data-desc="btn_login">Email Password</ti>:</span>
								
								<p style="color:red;"><?php echo $error; ?></p>
								<p style="color:green;"><?php echo $msg; ?></p>
								<!-- Form -->
								<form method="post">
									<div class="form-group">
										<input class="form-control" type="text" placeholder="Name" name="name">
									</div>
									<div class="form-group">
										<input class="form-control" type="email" placeholder="Email" name="email">
									</div>
									<div class="form-group">
										<input class="form-control" type="text" placeholder="Password" name="pass">
									</div>
									<!-- <div class="form-group">
										<input class="form-control" type="date" placeholder="Date of Birth" name="dob">
									</div> -->
									<div class="form-group">
										<input class="form-control" type="text" placeholder="Phone" name="phone" maxlength="10">
									</div>
									<div class="form-group mb-0">
										<input class="btn btn-primary btn-block" type="submit" name="insert" Value="Register">
									</div>
								</form>
								<!-- /Form -->
								<!-- Social Login 
								<div class="login-or">
									<span class="or-line"></span>
									<span class="span-or">or</span>
								</div>
								
								
								<div class="social-login">
									<span>Register with</span>
									<a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
									<a href="#" class="google"><i class="fa fa-google"></i></a>
									<a href="#" class="facebook"><i class="fa fa-twitter"></i></a>
									<a href="#" class="google"><i class="fa fa-instagram"></i></a>
								</div>
								  /Social Login -->
								
								  <div class="text-center dont-have"><ti data-ison="stxt[946]" data-desc="btn_already_have_an_account">Already have an account?</ti> <a href="index.php">Login</a></div>
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