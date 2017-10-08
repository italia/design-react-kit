<html>
<head>
</head>
<body><ul>
<?php

$dirdone = array();
foreach (glob("*/*") as $filename) {
	if ( strpos($filename,"index.php") !== false ) {
		$name = str_replace("/index.php","",$filename);
		$baseurl = str_replace(basename(__FILE__),"",'http://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF']);
		$url = $baseurl . $name;
		//~ $url = basename(__FILE__);
		?> <li><a href="<?php echo $url ?>"><?php echo $name ?></a></li> <?php
	} else {
		$d = explode("/",$filename);
		if ( !in_array($d[0],$dirdone)) {
			$dirdone[] = $d[0] ;
			$baseurl = str_replace(basename(__FILE__),"",'http://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF']);
			$name = $d[0];
			$url = $baseurl . $d[0];
			?> <li><a href="<?php echo $url ?>"><?php echo $name ?></a></li> <?php
		}
	}
}
?>
</ul>
</body>
</html>
