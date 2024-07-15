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


<script src="../js/app/x_allinit.js"></script> 
<script src="../js/app/x_all.js"></script> 
<script src="../js/app/x_admin.js"></script> 
<script src="../js/app/x_booter.js"></script> 
<script>
	
// JSSHOP.loadScript(" + usrlang + ".js", donada,"js");
</script>
<?php
// check for cookie userlan
if(isset($_COOKIE['usrlang'])) {
	$usrlang = $_COOKIE['usrlang'];
} else {
	$usrlang = "pt_pt";
}
echo "<scr" . "ipt src=\"../js/app/aa-" .  $usrlang . ".js\"></script>";
?>