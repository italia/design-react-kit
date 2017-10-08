<!DOCTYPE html>
<?php include("../reacts.php") ?>
<html lang="it">
	<head>
		<title>Dropdown</title>
		<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
		<script src="https://italia.github.io/design-web-toolkit/build/vendor/modernizr.js"></script>
		
		<?php react_dependencies(); ?>
		
		<!-- Scripts -->
		<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.5/umd/popper.js"></script>
		<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.5/umd/popper-utils.js"></script>
		
		<!-- Css -->
		<link rel="stylesheet" href="https://italia.github.io/design-web-toolkit/build/build.css"></link>
		
	</head>
	<body>
		

<div class="u-textLeft">
    <a href="#options" data-menu-trigger="options" class="Button Button--info">Menu</a>
    <div id="options" data-menu class="Dropdown-menu u-borderShadow-m u-background-white">
        <span class="Icon-drop-down Dropdown-arrow u-color-white"></span>
        <ul class="Linklist">
            <li><a href="#" class="u-color-50 u-padding-r-all">Aut quod dicta maiores aut cupiditate.</a></li>
            <li><a href="#" class="u-color-50 u-padding-r-all">Dolor itaque ad asperiores et.</a></li>
            <li><a href="#" class="u-color-50 u-padding-r-all">Odit perspiciatis dignissimos velit architecto.</a></li>
            <li><a href="#" class="u-color-50 u-padding-r-all">Quam id non.</a></li>

        </ul>
    </div>
</div>

<div class="u-textRight">
    <a href="#options-2" data-menu-trigger="options-2" class="Button Button--info">Menu</a>
    <div id="options-2" data-menu class="Dropdown-menu u-borderShadow-m u-background-white">
        <span class="Icon-drop-down Dropdown-arrow u-color-white"></span>
        <ul class="Linklist">
            <li><a href="#" class="u-color-50 u-padding-r-all">Aut quod dicta maiores aut cupiditate.</a></li>
            <li><a href="#" class="u-color-50 u-padding-r-all">Dolor itaque ad asperiores et.</a></li>
            <li><a href="#" class="u-color-50 u-padding-r-all">Odit perspiciatis dignissimos velit architecto.</a></li>
            <li><a href="#" class="u-color-50 u-padding-r-all">Quam id non.</a></li>

        </ul>
    </div>
</div>

<div class="u-textCenter">
    <a href="#options-3" data-menu-trigger="options-3" class="Button Button--info">Menu</a>
    <div id="options-3" data-menu class="Dropdown-menu u-borderShadow-m u-background-white">
        <span class="Icon-drop-down Dropdown-arrow u-color-white"></span>
        <ul class="Linklist">
            <li><a href="#" class="u-color-50 u-padding-r-all">Aut quod dicta maiores aut cupiditate.</a></li>
            <li><a href="#" class="u-color-50 u-padding-r-all">Dolor itaque ad asperiores et.</a></li>
            <li><a href="#" class="u-color-50 u-padding-r-all">Odit perspiciatis dignissimos velit architecto.</a></li>
            <li><a href="#" class="u-color-50 u-padding-r-all">Quam id non.</a></li>

        </ul>
    </div>
</div>
		<script type="text/javascript">
			
			
			var popper = new Popper(jQuery('.Button--info'), jQuery('.Dropdown-menu'), {
				placement: 'bottom'
			});
			
			
		</script>
		<?php print_react_elements(); ?>
	</body>
</html>
