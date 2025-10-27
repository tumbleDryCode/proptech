<div id="lightbox" class="lightbox"   onclick="javascript:JSSHOP.ui.closePopMenus();">
</div> <div id="lightbox_content" class="rtable bkgdClrWhite bottom-shadow" style="min-height:100px;min-width:300px;width: auto;z-index: 2147483647;position:fixed;top:-700px;left:-700px;word-wrap: break-word;max-width:400px;margin-right:20px;">
      </div>



<header id="header" class="transparent-header-modern fixed-header-bg-white w-100" style="margin:0px;padding:0px;min-width:100%">
            <div class="top-header bg-secondary bigtable brdrClrHdr" style="margin:15px;visiility:hidden;display:none;">
                <div class="container" style="width:100%">
                    <div class="row">
                        <div class="col-md-8">
                            <ul class="top-contact list-text-white  d-table">
                                <li><a href="#"><i class="fas fa-phone-alt text-primary mr-1"></i>9611211215</a></li>
                                <li><a href="#"><i class="fas fa-envelope text-primary mr-1"></i>myemail@mysite</a></li>
                            </ul>
                        </div>
                        <div class="col-md-4">
                            <div class="top-contact float-right">
                                <ul class="list-text-white d-table">
								<li><i class="fas fa-user text-primary mr-1"></i>
								<?php  if(isset($_SESSION['uemail']))
								{ ?>
								<a href="logout.php">Logout</a>&nbsp;&nbsp;<?php } else { ?>
								<a href="login.php">Login</a>&nbsp;&nbsp;
                                <a href="register.php"><ti data-ison="stxt[30]" data-desc="btn_register">Register</ti>
								<?php } ?>
								| </li>
 								</ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main-nav secondary-nav hover-primary-nav py-6  bg-secondary"  style="">
                <div class="">
                    <div class="row">
                        <div class="col-lg-12" style="margin:0px;">
                            <nav class="navbar-expand-lg navbar-light p-0">
                              <span style="float:left;text-align:left;white-space: nowrap;"><a class="breadcrumb-item active" href="javascript:goHome();"><img id="imgMainLogo" class="icnRnd22" src="images/misc/thumb_logo_ai_trimmed.gif" alt="proptech" style="margin:4px;"> <b>proptech</b></a></span>

  <!-- menu icons 

  <a href="javascript:void(0);" onclick="javascript:JSSHOP.ui.setNuCBBClickClr(this,'kcoll-menu-item','collection-item txtClrRed', function(){JSSHOP.ui.popAndFillLbox(doFavoritesRndr('y', 'y', 'y', 60).replace(/::/g, '<br>'))});" class="collection-item txtClrRed"><span><i class="menu-material-icons collection-item txtClrRed"></i></span><span style="vertical-align:super;padding-left:12px;" class="collection-item txtClrRed">Favorites</span></a>


			<div style="">
 
			<ul class="shop-menu" > 

 

 
<li id="ahAccountIcon"  style="float:right"><a href="javascript:JSSHOP.ui.doDefCBBCC('ahAccountIcon', null, doEditUser());"><i class="material-icons"  style="margin-top: 5px;font-size:32px;" alt="person" title="person">&#xe7fd;</i></a></li>   
 <li id="ahNotifyIcon"  style="float:right"><span id="spnAlrtNotify" class="icnbtn slmtable txtSmall txtClrWhite bkgdClrHdr" style="float:right"></span><a href="javascript:JSSHOP.ui.doDefCBBCC('ahNotifyIcon', null, doMLinkM('aa-show-notifications', 'pid=aa-show-notifications'));"><i class="material-icons"  style="margin-top: 5px;font-size:27px;margin-right:6px;" alt="Notify" title="notifications">&#xe7f4;</i></a></li>   

<li id="ahMsgsIcon"  style="float:right"><span id="spnMsgsNotify" class="icnbtn slmtable txtSmall txtClrWhite bkgdClrHdr" style="float:right"></span><a href="javascript:JSSHOP.ui.doDefCBBCC('ahMsgsIcon', null, doMLinkM('aa-show-messages','pid=aa-show-messages'));"><i class="material-icons"  style="margin-top: 5px;font-size:27px;margin-right:6px;" alt="Messages" title="Messages">&#xe0b7;</i></a></li>   
                                </ul>

			</div>
				  -->






<!-- recamy stuff -->
 
 <!-- ols menu -->

<div style="padding:0px;margin:0px;float:right;" class="newNavCls shop-menu" id="newNavDiv">   
<ul style="" class=""> 

<!-- <li id="ahAccountIcon"  style="padding:0px;margin:0px;display:inline;float:left;" class="newNavCls"><a href="javascript:JSSHOP.ui.doDefCBBCC('ahAccountIcon', null, document.location.href='index.html?pid=aa-edit-uinfo&cid=' + cuid);" style="padding:2px"><i class="material-icons"  style="margin-top: 5px;font-size:27px;margin-right:6px;" alt="person" title="person"></li>
   <li id="ahSettingsIcon">  <span id="spnAlrtSettings" class="icnbtn slmtable txtSmall txtClrWhite bkgdClrHdr" style="float:right">5</span> <a href="javascript:JSSHOP.ui.doDefCBBCC('ahSettingsIcon', null, document.location.href='index.html?pid=aa-settings&cid=' + cid);"><i class="material-icons"  style="margin-top: 5px;font-size:27px;margin-right:6px;" alt="Settings" title="Settings">&#xe8b8;</i></a></li> 
     


   <li id="ahCartIcon"><a href="javascript:JSSHOP.ui.doDefCBBCC('ahCartIcon', null, document.location.href='index.html?pid=aa-show-cart&cid=' + cid + '&ppid=' + ppid);"><i class="material-icons"  style="margin-top: 5px;font-size:32px;margin-right:6px;"  alt="shopping_cart" title="shopping_cart">&#xe8cc;</i></a></li>
    
    
               <li id="ahMsgsIcon" style="padding:0px;margin:0px;display:inline;float:left;" class="newNavCls"><span id="spnMsgsNotify" class="icnbtn slmtable txtSmall txtClrWhite bkgdClrHdr" style="float:right"></span><a href="javascript:JSSHOP.ui.doDefCBBCC('ahMsgsIcon', null, document.location.href='index.html?pid=aa-show-messages&cid=' + cid);"><i class="material-icons"  style="margin-top: 5px;font-size:27px;margin-right:6px;" alt="Messages" title="Messages">
  &#57527;</i></a></li>-->

    
   <!--  <li id="ahCartIcon" style="padding:0px;margin:0px;display:inline;float:left;"><span id="spnCIcount" class="nada" style="float:right"></span><a href="javascript:JSSHOP.ui.doDefCBBCC('ahCartIcon', null, document.location.href='index.html?pid=aa-show-cart&cid=' + cid + '&ppid=' + ppid);"><i class="material-icons"  style="margin-top: 5px;font-size:27px;margin-right:6px; margin-bottom:0px;padding-bottom:0px;"  alt="shopping_cart" title="shopping_cart">
  &#59596;</i></a></li> -->


     <li id="ahMenuIcon"  style="padding:0px;margin:0px;display:inline;float:right;"><div class="crsrPointer hoover" style="border-radius : 10px; color : #E7E5E5; display : block; font-family : arial; font-size : 13px; font-style : normal; font-weight : bold; margin : 0; moz-border-radius : 10px;  text-decoration : none; text-shadow : 2px 2px 3px #000000; webkit-border-radius : 10px;">
     <i class="material-icons" style="margin-top: 5px;font-size:27px;margin-right:6px;" alt="home" title="home"  onclick="javascript:JSSHOP.ui.toggleVisibility('navbarSupportedContent');">
     &#xe241;</i></div></li> 

     <li id="ahAccnt" style="padding:0px;margin:0px;display:inline;float:right;"><a href="javascript:JSSHOP.shared.showUserProfile(0);" style="border-radius : 10px; color : #E7E5E5; display : block; font-family : arial; font-size : 13px; font-style : normal; font-weight : bold; margin : 0; moz-border-radius : 10px;   text-decoration : none; text-shadow : 2px 2px 3px #000000; webkit-border-radius : 10px;"><div id="dvUMicn"><i class="material-icons"  style="margin-top: 5px;font-size:27px;margin-right:6px;" alt="account" title="account"  onclick="javascript:JSSHOP.ui.setNuCBBClickClr(this,'material-icons txtClrHdr', 'material-icons crsrPointer hoover', function(){void(0);}, 300);">
     &#xe7fd;</i></div></a></li> 
 <!-- <li id="ahHomeIcon" style="padding:0px;margin:0px;display:inline;float:right;"><a href="index.html" style="border-radius : 10px; color : #E7E5E5; display : block; font-family : arial; font-size : 13px; font-style : normal; font-weight : bold; margin : 0; moz-border-radius : 10px;  text-decoration : none; text-shadow : 2px 2px 3px #000000; webkit-border-radius : 10px;"><i class="material-icons" style="margin-top: 5px;font-size:27px;margin-right:6px;" alt="home" title="home">
     &#59530;</i></a></li>--> 
     <li id="ahMsgsIcon" style="padding:0px;margin:0px;display:inline;float:right;"><a href="javascript:eindex('aa-show-messages','pid=aa-show-messages&cit=y');" style="border-radius : 10px; color : #E7E5E5; display : block; font-family : arial; font-size : 13px; font-style : normal; font-weight : bold; margin : 0; moz-border-radius : 10px;   text-decoration : none; text-shadow : 2px 2px 3px #000000; webkit-border-radius : 10px;"><i class="material-icons"  style="margin-top: 5px;font-size:27px;margin-right:6px;" alt="messages" title="messages"  onclick="javascript:JSSHOP.ui.setNuCBBClickClr(this,'material-icons txtClrHdr', 'material-icons crsrPointer hoover', function(){void(0);}, 300);">
     &#57527;</i></a></li>
  <li id="ahDeRecent" style="padding:0px;margin:0px;display:inline;float:right;"><div class="crsrPointer hoover" style="border-radius : 10px; color : #E7E5E5; display : block; font-family : arial; font-size : 13px; font-style : normal; font-weight : bold; margin : 0; moz-border-radius : 10px;   text-decoration : none; text-shadow : 2px 2px 3px #000000; webkit-border-radius : 10px;">
  <i class="material-icons"  style="margin-top: 5px;font-size:27px;margin-right:6px;" alt="ahDeRecent" title="ahDeRecent"  onclick="javascript:JSSHOP.ui.setNuCBBClickClr(this,'material-icons txtClrRed', 'material-icons crsrPointer hoover', function(){JSSHOP.ui.popAndFillLbox(doFavoritesRndr('y', 'y', 'y', 60).replace(/::/g, '<br>'));}, 300);">
 &#59517;</i></div></li> 


        <!--   
    <li id="ahNotifyIcon"  style="padding:0px;margin:0px;display:inline;float:right;"><span id="spnAlrtNotify" class="icnbtn slmtable txtSmall txtClrWhite bkgdClrHdr" style="float:right"></span><a href="javascript:JSSHOP.ui.doDefCBBCC('ahNotifyIcon', null, document.location.href='index.html?pid=aa-show-notifications&cid=' + cid);"  style="border-radius : 10px; color : #E7E5E5; display : block; font-family : arial; font-size : 13px; font-style : normal; font-weight : bold; margin : 0; moz-border-radius : 10px;   text-decoration : none; text-shadow : 2px 2px 3px #000000; webkit-border-radius : 10px;"><i class="material-icons"  style="margin-top: 5px;font-size:27px;margin-right:6px;" alt="Notify" title="notifications">
  &#59380;</i></a></li>  
 <li id="ahSearch" style="padding:0px;margin:0px;display:inline;float:right;"><a href="javascript:eindex('aa-show-search','pid=aa-show-search&cit=y');" style="border-radius : 10px; color : #E7E5E5; display : block; font-family : arial; font-size : 13px; font-style : normal; font-weight : bold; margin : 0; moz-border-radius : 10px;   text-decoration : none; text-shadow : 2px 2px 3px #000000; webkit-border-radius : 10px;"><i class="material-icons"  style="margin-top: 5px;font-size:27px;margin-right:6px;" alt="search" title="search"  onclick="javascript:JSSHOP.ui.setNuCBBClickClr(this,'material-icons txtClrHdr', 'material-icons crsrPointer hoover', function(){void(0);}, 300);">
 &#xe8b6;</i></a></li>
  <li id="ahAccnt" style="padding:0px;margin:0px;display:inline;float:right;"><a href="javascript:void(0);" onclick="javascript:JSSHOP.ui.setNuCBBClickClr(this,'kcoll-menu-item','collection-item txtClrRed', function(){eindex('aa-edit-user', 'pid=aa-edit-user&cit=y')}, 20);" style="border-radius : 10px; color : #E7E5E5; display : block; font-family : arial; font-size : 13px; font-style : normal; font-weight : bold; margin : 0; moz-border-radius : 10px;   text-decoration : none; text-shadow : 2px 2px 3px #000000; webkit-border-radius : 10px;"><i class="material-icons"  style="margin-top: 5px;font-size:27px;margin-right:6px;" alt="account" title="account">
  &#xe7fd;</i></a></li> 
               
               
    
   <li id="ahMsgsIcon" style="padding:0px;margin:0px;display:inline;float:left;" class="newNavCls"><span id="spnMsgsNotify" class="icnbtn slmtable txtSmall txtClrWhite" style="float:right"></span><div class="crsrPointer hoover" id="dvBtnNavMsg" style="border-radius : 10px; color : #E7E5E5; display : block; font-family : arial; font-size : 13px; font-style : normal; font-weight : bold; margin : 0; moz-border-radius : 10px;   text-decoration : none; text-shadow : 2px 2px 3px #000000; webkit-border-radius : 10px;"><i class="material-icons"  style="margin-top: 5px;font-size:27px;margin-right:6px;" alt="Messages" title="Messages"  onclick="javascript:JSSHOP.ui.setNuCBBClickClr(this,'material-icons txtClrHdr', 'material-icons crsrPointer hoover', function(){eindex('aa-show-messages', 'pid=aa-show-messages')}, 300);"  >
  &#57527;</i></div></li>   -->
</ul>
 
</div>

      <!-- end ols menu -->

<!-- end recamy stuff -->



                  
                              <!--  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"0% aria-label="Toggle navigation" style="padding: 2px;background-color: #fff;border:0px;"> <span class="navbar-toggler-icon"></span> </button> -->
                                
                            </nav>
                        </div>

                       
                    </div>
                </div>
            </div>
        </header>
        <div class="clearfix"></div>
        <div> 
            <table style="width:100%;"><tr><td style="width:90%"> </td><td style="min-width:300px;">
        <div class="slmtable txtClrHdr bkgdClrWhite" id="navbarSupportedContent" style="visibility:hidden;display:none;min-width:300px;max-width:350px;float:right;position:fixed;z-index: 2147483649;max-height:90%;overflow:auto;">
                                    <ul>
                                        <li class="nav-item"> <a class="nav-link" href="./" role="button" aria-haspopup="true" aria-expanded="false">Home</a></li>
										<li class="nav-item"> <a class="nav-link" href="javascript:eindex('aa-show-featured','pid=aa-show-featured');"><ti data-ison="stxt[940]" data-desc="btn_properties">Properties</ti></a> </li>					 
										<!-- <li class="nav-item"> <a class="nav-link" href="javascript:eindex('aa-show-search','pid=aa-show-search&cit=y');"><ti data-ison="stxt[936]" data-desc="btn_searchprops">Search Properties</ti></a> </li>
										<li class="nav-item"> <a class="nav-link" href="agent.php"><ti data-ison="stxt[900]" data-desc="btn_agentes">Agentes</ti></a> </li> -->
                                        <li class="nav-item"> <a class="nav-link" href="javascript:eindex('aa-contact-us','pid=aa-contact-us');"><ti data-ison="stxt[902]" data-desc="btn_contacts">Contacts</ti></a> </li>
										
									 
                                    <?php if(isset($_COOKIE['quid'])) { ?>
										<li class="" style="margin-top:10px;padding-left:8px;">
											 <ti data-ison="stxt[56]" data-desc="btn_account">Account</ti>
											<ul class="">
												<!-- <li class="nav-item"> <a class="nav-link" href="profile.php"><ti data-ison="stxt[903]" data-desc="btn_profile">Profile</ti></a> </li> -->
                                                <li class="nav-item"> <a class="nav-link" href="javascript:eindex('aa-add-prop','pid=aa-add-prop');"><ti data-ison="stxt[916]" data-desc="btn_addprop">Subit Property</ti></a> </li>
												 <li class="nav-item"> <a class="nav-link" href="javascript:eindex('aa-edit-uprops', 'pid=aa-edit-uprops');"><ti data-ison="stxt[905]" data-desc="btn_yourprops">Your Properties</ti></a> </li>
                                                    <li class="nav-item"> <table><tr><td><a class="nav-link" href="javascript:eindex('aa-edit-posts', 'pid=aa-edit-posts');"><ti data-ison="stxt[100]" data-desc="btn_yourinfo">Update</ti></a></td><td><a class="nav-link" href="javascript:eindex('aa-add-post', 'pid=aa-add-post');"><ti data-ison="stxt[107]" data-desc="btn_create">Create</ti></a></td></tr></table></li>
												<li class="nav-item"> <a class="nav-link" href="javascript:JSSHOP.shared.doLogout();">Logout</a> </li>	
											</ul>
                                        </li>
                                         
                                      

										<?php } else { ?>
										<li class="nav-item"> <a class="nav-link" href="javascript:eindex('aa-edit-user','pid=aa-edit-user');">Login</a> </li>
                                        <li class="nav-item"> <a class="nav-link"  href="javascript:eindex('register','pid=register');"><ti data-ison="stxt[961]" data-desc="btn_register">Register</ti></a></li>
										<?php } ?>


										
                                    </ul>
                                    
									
									<!-- <a class="btn btn-primary d-none d-xl-block" href="submitproperty.php"><ti data-ison="stxt[90]" data-desc="btn_about">About</ti></a> -->
                                    
        <!-- start of dvAlist -->                      
<div id="dvAMnuLnks" style="visibility:hidden;display:none;margin:0px;padding:0px;" class="bkgdClrHdr txtClrWhite">
 <ul>
 <li class="" style="margin-top:10px;padding-left:8px;padding-top:5px;">
											 <ti data-ison="stxt[83]" data-desc="btn_account">Admin</ti>
											<ul class="">
												<!-- <li class="nav-item"> <a class="nav-link" href="profile.php"><ti data-ison="stxt[903]" data-desc="btn_profile">Profile</ti></a> </li>
                                                <li class="nav-item txtClrWhite"> <a class="nav-link txtClrWhite" href="javascript:eindex('aa-edit-place','pid=aa-edit-place');" style="color:white;"><ti data-ison="stxt[68]" data-desc="btn_shpsettinhs">Shop Settings</ti></a> </li>
                                                     -->
                                                <li class="nav-item txtClrWhite"> <a class="nav-link txtClrWhite" href="javascript:eindex('aa-edit-aprops','pid=aa-edit-aprops');" style="color:white;"><ti data-ison="stxt[901]" data-desc="btn_addprop">Properties</ti></a> </li>
												 <li class="nav-item txtClrWhite"> <a class="nav-link txtClrWhite" href="javascript:eindex('aa-edit-ausers', 'pid=aa-edit-ausers');" style="color:white;"><ti data-ison="stxt[80]" data-desc="btn_yourprops">Users</ti></a> </li>
											</ul>
                                        </li>
    </ul>
</div> <!-- end of dvAMnuLnks -->  



</div> <!-- end of navbar-collapse -->
                                </td></tr></table>
        </div>

<div class="txtSmall txtClrWhite">.</div>