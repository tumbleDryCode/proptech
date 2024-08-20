<?php
session_start();
require("config.php");
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
            <div id="page-wrapper">
    <div class="row"> 
        <!--	Header start  -->
         <!--	Header end  -->
		<!--	newbanner start  -->
        <table style="margin:0 auto;max-width:90%" class="rtable brdrClrDlg">
			<tbody><tr>
		<td style="width: 37px"><div id="dvPartLicon"></div><div id="dvPLicon" style="visibility:hidden;display:none;"><img id="imgPLicon" src="images/mech_logo_small.png" style="max-width:40px;max-height:40px;"></div></td>
		<td>&nbsp;</td>
		<td style="width: 100%"><div id="dvPartLinks" style="max-width:90%; word-wrap:break-word;"><div class="txtSmall">Encuentra los mejores precios y servicios de reparacion de autos en tu area.</div></div></td>
        <td style="vertical-align:middle;"><div><a class="txtBold" href="javascript:JSSHOP.ui.popAndFillLbox(JSSHOP.ui.getMorBxStr('mmDdown'));" style="text-transform:none;visibility:visible;display: block;"><i class="material-icons txtClrHdr txtBold" style="margin-top: 5px;font-size:27px;margin-right:6px;" alt="More" title="More">
            &#xe5d4;</i></a></div></td>
			</tr>
			</tbody></table>
        <!--	newbanner end  -->
        <!--	Banner Start   
  
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
           Banner End  -->
 
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

</div> 
			<!-- /Main Wrapper -->
				        <!--	HYML footer start  -->
                        <?php include("includes/html_footer.php");?>
        <!--	HYML footer end  -->

    </body>
</html>
