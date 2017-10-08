<!DOCTYPE html>
<?php include("../reacts.php") ?>
<html lang="it">
<head>
	<title>Alerts</title>
<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<link rel="stylesheet" href="https://italia.github.io/design-web-toolkit/components/raw/alert/index.css"></link>
<?php react_dependencies() ?>
<?php register_react_element("Alert"); ?>
<?php print_react_elements() ?>
<link rel="stylesheet" href="https://italia.github.io/design-web-toolkit/build/build.css"></link>
</head>
<body>
	
<?php ob_start() ?>
	<Alert />
	<Alert type="error" title="Error" />
	<Alert type="warning" title="Warning" />
	<Alert type="success" title="Success" />
	<Alert type="info" title="Info" />
	
<?php 
$out = ob_get_clean() ;
?>

<pre>
<?php
echo  htmlentities($out, ENT_COMPAT, 'UTF-8'); 
?>
</pre>

<div id="alert"></div>
<div id="alert1"></div>
<div id="alert2"></div>
<div id="alert3"></div>
<div id="alert4"></div>
<div id="alert5"></div>
<script type="text/babel">

ReactDOM.render(
	<Alert />,
	document.getElementById("alert1")
);
ReactDOM.render(
<Alert type="error" title="Error" />,
	document.getElementById("alert2")
);
ReactDOM.render(
<Alert type="warning" title="Warning" />,
	document.getElementById("alert3")
);
ReactDOM.render(
<Alert type="success" title="Success" />,
	document.getElementById("alert4")
);
ReactDOM.render(
<Alert type="info" title="Info" />,
	document.getElementById("alert5")
);

</script>

</body>
</html>
