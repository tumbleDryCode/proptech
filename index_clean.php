<?php 
global $jscssprefix, $isBareTest;
ini_set('session.cache_limiter','public');
session_cache_limiter(false);
session_start();
include("config.php");	
$jscssprefix = "";
$isBareTest = "no";						
?>
<html>
<head>
 
        <!--	HTML Header start  -->
		<?php include("include/html_header.php");?>
        <!--	HTML Header end  -->
</head>
<body>

<!--	Page Loader  -->
<!--<div class="page-loader position-fixed z-index-9999 w-100 bg-white vh-100">
	<div class="d-flex justify-content-center y-middle position-relative">
	  <div class="spinner-border" role="status">
		<span class="sr-only">Loading...</span>
	  </div>
	</div>
</div>  -->
<!--	Page Loader  -->

<div id="page-wrapper">
    <div class="row"> 
        <!--	Header start  -->
		<?php include("include/header.php");?>
        <!--	Header end  -->
		
        <!--	Banner Start  -->
  
        <div class="rtable brdrClrHdr" style="background-image: url('images/banner/04.jpg'); min-width: 95%; max-width: 95%;min-height: 105%;margin:0 auto;margin-top:2px;">

            <div class="container h-100">
                <div class="row h-100 align-items-center">

               
                    <div class="col-lg-12">
                        <div>
                            <span class="text-primary txtBig"><ti data-ison="stxt[971]" data-desc="btn_find">Find</ti></span><br>
                           <span class="txtClrWhite txtBigger"> <ti data-ison="stxt[972]" data-desc="btn_dreamhome"> your dream home</ti></span><br>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
         <!--	 Banner End  -->
 
        <!--	Text Block One
		======================================================-->
		<!-----  Our Services  ---->
		
        <!--	Recent Properties  -->
         
        <div id="includedContent" style="min-height:300px">
</div>

<div id="dvDynCtt" style="max-width:200px">
<IFRAME width="200px" height="10px" frameborder="0" border="0" src="blank.html" marginwidth="0" marginheight="0" id="ifrmDynCtt" name="ifrmDynCtt" title="DynContent Iframe">
</IFRAME>
</div>
<div id="dvSandMap"  style="margin: 0 auto;min-height:300px;min-width:95%;z-index:999999999;position:fixed;top:-500px;word-wrap: break-word;" class="bigtable brdrClrRed gradient-pop bkgdClrWhite"  align="center">
<div id="map" style="margin: 0 auto;min-height:400px;min-width:98%; max-width:98%;"></div>
</div>	
<div id="dvDummy"  class="zntainer"></div>


 
        <script src="js/bootstrap5.2/bootstrap.js"  language="javascript" type="text/javascript"></script>
	<script src="js/app/x_last.js"></script> 
<script src="js/app/x_all.js"></script> 
<script src="js/app/x_booter.js"></script>
<script src="js/app/x_admin.js"></script>
 
		<?php include("include/footer.php");?>
		<!--	Footer   start-->
        
        
        <!-- Scroll to top 
        <a href="#" class="bg-primary text-white hover-text-secondary" id="scroll"><i class="fas fa-angle-up"></i></a> 
          End Scroll To top --> 
    </div>
</div>
<!-- Wrapper End --> 
        <!--	HTML footer start  -->
		<?php include("include/html_footer.php");?>
        <!--	HTML footer end  -->
</body>
</html>