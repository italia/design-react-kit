<!DOCTYPE html>
<?php include("../reacts.php") ?>
<html lang="it">
<head>
<script src="https://code.jquery.com/jquery-1.12.4.js"></script>

<script src="../../assets/fraccordion.min.js"></script>

<?php react_dependencies() ?>

<?php register_react_element("Accordion"); ?>
<?php print_react_elements() ?>
<link rel="stylesheet" href="https://italia.github.io/design-web-toolkit/build/build.css"></link>
<link rel="stylesheet" href="https://italia.github.io/design-web-toolkit/components/raw/accordion/index.css"></link>
</head>
<body>

<?php ob_start() ?>
<Accordion multi="false" >
	<AccordionItemTitle title="1" />
	<AccordionItem >
		<p className="u-layout-prose u-color-grey-90 u-text-p u-padding-r-all">
		Voluptate ut voluptatem sit earum ipsam sint. Aut unde explicabo eos dolor rerum eum et. Maxime aliquam deserunt. Non officiis eos fugit in perferendis.
		</p>
	</AccordionItem>
	<AccordionItemTitle title="Titolo" />
	<AccordionItem >
		<p className="u-layout-prose u-color-grey-90 u-text-p u-padding-r-all">
		Voluptate ut voluptatem sit earum ipsam sint. Aut unde explicabo eos dolor rerum eum et. Maxime aliquam deserunt. Non officiis eos fugit in perferendis.
		</p>
	</AccordionItem>
	<AccordionItemTitle title="2"/>
	<AccordionItem >
		<p className="u-layout-prose u-color-grey-90 u-text-p u-padding-r-all">
		Voluptate ut voluptatem sit earum ipsam sint. Aut unde explicabo eos dolor rerum eum et. Maxime aliquam deserunt. Non officiis eos fugit in perferendis.
		</p>
	</AccordionItem>
	<AccordionItemTitle title="3"/>
	<AccordionItem >
		<p className="u-layout-prose u-color-grey-90 u-text-p u-padding-r-all">
		Voluptate ut voluptatem sit earum ipsam sint. Aut unde explicabo eos dolor rerum eum et. Maxime aliquam deserunt. Non officiis eos fugit in perferendis.
		</p>
	</AccordionItem>
</Accordion>
<?php 
$out = ob_get_clean() ;
?>

<pre>
<?php
echo  htmlentities($out, ENT_COMPAT, 'UTF-8'); 
?>
</pre>

<div id="accordion"></div>

<script type="text/babel">

ReactDOM.render(
<Accordion multi="false" >
	<AccordionItemTitle title="1" />
	<AccordionItem >
		<p className="u-layout-prose u-color-grey-90 u-text-p u-padding-r-all">
		Voluptate ut voluptatem sit earum ipsam sint. Aut unde explicabo eos dolor rerum eum et. Maxime aliquam deserunt. Non officiis eos fugit in perferendis.
		</p>
	</AccordionItem>
	<AccordionItemTitle title="Titolo" />
	<AccordionItem >
		<p className="u-layout-prose u-color-grey-90 u-text-p u-padding-r-all">
		Voluptate ut voluptatem sit earum ipsam sint. Aut unde explicabo eos dolor rerum eum et. Maxime aliquam deserunt. Non officiis eos fugit in perferendis.
		</p>
	</AccordionItem>
	<AccordionItemTitle title="2"/>
	<AccordionItem >
		<p className="u-layout-prose u-color-grey-90 u-text-p u-padding-r-all">
		Voluptate ut voluptatem sit earum ipsam sint. Aut unde explicabo eos dolor rerum eum et. Maxime aliquam deserunt. Non officiis eos fugit in perferendis.
		</p>
	</AccordionItem>
	<AccordionItemTitle title="3"/>
	<AccordionItem >
		<p className="u-layout-prose u-color-grey-90 u-text-p u-padding-r-all">
		Voluptate ut voluptatem sit earum ipsam sint. Aut unde explicabo eos dolor rerum eum et. Maxime aliquam deserunt. Non officiis eos fugit in perferendis.
		</p>
	</AccordionItem>
</Accordion>,
document.getElementById("accordion")
);
</script>

</body>
</html>
