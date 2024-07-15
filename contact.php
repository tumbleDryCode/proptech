<?php 
include("config.php");
$error="";
$msg="";
// display all errors on page
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if(isset($_POST['send']))
{
	$name=$_POST['name'];
	$email=$_POST['email'];
	$phone=$_POST['phone'];
	$subject=$_POST['subject'];
	$message=$_POST['message'];
	
	if(!empty($name) && !empty($email) && !empty($phone) && !empty($subject) && !empty($message))
	{
		
		$sql="INSERT INTO contact (name,email,phone,subject,message) VALUES ('$name','$email','$phone','$subject','$message')";
		   $result=mysqli_query($con, $sql);
		   if($result){
			   $msg = "<p class='alert alert-success'><ti data-ison='stxt[1006]'  data-desc='btn_msgok'>Message sent successfully</ti></p> ";
		   }
		   else{
			   $error = "<p class='alert alert-warning'><ti data-ison='stxt[1007]'   data-desc='btn_msgerr'>Message failed to send</ti></p> ";
		   }
	}else{
		$error = "<p class='alert alert-warning'><ti data-ison='stxt[1008]'   data-desc='btn_msgff'>Please fill in all fields</ti></p>";
	}
}
?>
<html>
<head>
	<!--	HYML Header start  -->
		<?php include("include/html_header.php"); ?>
<script>
var setPropInf = function(theAIa, theAIb, theAIc) {
    console.log("setPropInf: " + theAIa + " " + theAIb + " " + theAIc);
	if(theAIb.indexOf("pid") != -1) {
		tAiretArr = JSON.parse(theAIb);
		var len = tAiretArr.length;
		tAiretObj = tAiretArr[0];
		tpropid = tAiretObj["pid"];
		tproptitle = tAiretObj["title"];
		document.getElementById("fldsubject").value = tproptitle;
	}
};
var getPropInf = function() {
	currUrlArr = JSSHOP.shared.urlToArray(getCurrUrl()); 
	if(currUrlArr.propid) {

	tpropid = currUrlArr.propid;
    tmpFobj = null;
    tmpFobj = {};
    tmpFobj["ws"] = "where pid=?";
    tmpFobj["wa"] = [tpropid];
	tmpFobj["l"] = "1";
	tmpFobj["o"] = "pid";	
    oi = getNuDBFnvp("property", 5, null, tmpFobj);
    doQComm(oi["rq"], null, "setPropInf");
	}
};


window.onload = function() {
 getPropInf();
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
		<?php include("include/header.php");?>
        <!--	Header end  -->
		<div class="col-md-6">
                        <nav aria-label="breadcrumb" class="float-left float-md-right">
                            <ol class="breadcrumb bg-transparent m-0 p-0">
                                <li class="breadcrumb-item text-black"><a href="#">Home</a></li>
                                <li class="breadcrumb-item active"><ti data-ison="stxt[912]" data-desc="btn_contacts">Contact Us</ti></li>
                            </ol>
                        </nav>
                    </div>
        <!--	Banner -->
        <div class="rtable brdrClrHdr" style="background-image: url('images/banner/04.jpg'); min-width: 95%; max-width: 95%;min-height: 105%;margin:0 auto;margin-top:2px;">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <h2 class="page-name float-left text-white text-uppercase mt-1 mb-0"><b><ti data-ison="stxt[912]" data-desc="btn_contacts">Contact Us</ti></b></h2>
                    </div>

                </div>
            </div>
        </div>
        <!--	Banner -->
		
        <!--	Contact Information -->
        <div class="full-row">
            <div class="container">
                <div class="row">

				<div class="col-lg-1"></div>
                    <div class="col-md-12 col-lg-7">
						<div class="container">
                        <div class="row">
							<div class="col-lg-12">
								<h2 class="text-secondary double-down-line text-center mb-5"><ti data-ison="stxt[968]" data-desc="btn_getintouch">Get In Touch</ti></h2>
								<?php echo $msg; ?><?php echo $error; ?>
							</div>
						</div>
						<div class="row">
							<div class="col-md-12">
								<form class="w-100" action="#" method="post">
									<div class="row">
										<div class="row mb-4">
											<div class="form-group col-lg-6">
											<label class="col-lg-3 col-form-label"><ti data-ison="stxt[97]" data-desc="btn_name">Name</ti></label>			
												<input type="text" id="fldname"  name="name" class="form-control">
											</div>
											<div class="form-group col-lg-6">
											<label class="col-lg-3 col-form-label"><ti data-ison="stxt[50]" data-desc="btn_email">Email</ti></label>
												<input type="text" id="fldemail" name="email" class="form-control">
											</div>
											<div class="form-group col-lg-6">
											<label class="col-lg-3 col-form-label"><ti data-ison="stxt[24]" data-desc="btn_phone">Phone</ti></label>
												<input type="text" id="fldphone" name="phone" class="form-control" maxlength="10">
											</div>
											<div class="form-group col-lg-6">
											<label class="col-lg-3 col-form-label"><ti data-ison="stxt[969]" data-desc="btn_subject">Subject</ti></label>
												<input type="text" id="fldsubject" name="subject"  class="form-control">
											</div>
											<div class="col-lg-12">
												<div class="form-group">
												<label class="col-lg-3 col-form-label"><ti data-ison="stxt[970]" data-desc="btn_msg">Message</ti></label>
													<textarea name="message" id="fldmsg" class="form-control" rows="5"></textarea>
												</div>
											</div>
										</div>
										<button type="submit" value="send message" name="send" class="btn btn-primary"><ti data-ison="stxt[935]" data-desc="btn_getintouch">Send Message</ti></button>
									</div>
								</form>
							</div>
						</div>
						</div>
					</div>
					
                    <div class="col-lg-4 mb-5 bg-primary">
                        <div class="contact-info">
                            <h3 class="mb-4 mt-4 text-white"><ti data-ison="stxt[902]" data-desc="btn_contacts">Contacts</ti></h3>
							
                            <ul>
                                <li class="d-flex mb-4"> <i class="fas fa-map-marker-alt text-white mr-2 font-13 mt-1"></i>
                                    <div class="contact-address">
                                        <h5 class="text-white"><ti data-ison="stxt[209]" data-desc="btn_address">Address</ti></h5>
                                        <span class="text-secondary">Lisbon</span> 
 
										</div>
                                </li>
                                <li class="d-flex mb-4"> <i class="fas fa-phone-alt text-white mr-2 font-13 mt-1"></i>
                                    <div class="contact-address">
                                        <h5 class="text-white"><ti data-ison="stxt[24]" data-desc="btn_tel">Tel</ti></h5>
                                        <span class="d-table text-secondary">9123456</span>
 
									</div>
                                </li>
                                <li class="d-flex mb-4"> <i class="fas fa-envelope text-white mr-2 font-13 mt-1"></i>
                                    <div class="contact-address">
                                        <h5 class="text-white">Email</h5>
										<!-- <span class="d-table text-secondary">muemail</span> -->

										<span class="d-table text-secondary">myemail@mysite.com</span>

 
									</div>
                                </li>
                            </ul>
                        </div>
                    </div>
					
                </div>
            </div>
        </div>
        <!--	Contact Inforamtion -->
 
        <!--	Footer   start-->
		<?php include("include/footer.php");?>
		<!--	Footer   start-->
        
        <!-- Scroll to top  
        <a href="#" class="bg-secondary text-white hover-text-secondary" id="scroll"><i class="fas fa-angle-up"></i></a> 
         End Scroll To top --> 
    </div>
</div>
 
<!-- Wrapper End --> 
        <!--	HYML footer start  -->
		<?php include("include/html_footer.php");?>
        <!--	HYML footer end  -->

</body>
</html>