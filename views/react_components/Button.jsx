


var button_styles = ["default","info","danger"];
const LIMIT_STYLES = true;

class Button extends React.Component {
	render() {
		var link = "";
		var style = "default"
		var controls = ""
		if ( LIMIT_STYLES ) 
			for (var i = 0; i < button_styles.length; i++) {
				if (button_styles[i] ==  this.props.style ) style =  this.props.style;
			}
		let classes = "Button u-text-r-xs" + " Button--" + style + " " + this.props.classes
		let type = "button"
		if (this.props.shadow) classes = classes + "  Button--shadow"
		if (this.props.round) classes = classes + "  Button--round"
		if (this.props.pressed) classes = classes + "  is-pressed"
		if (this.props.disabled) classes = classes + "  is-disabled"
		
		if (this.props.dialog == "open" || this.props.dialog == "close" ) controls = this.props.dialogcontrol 
		if (this.props.dialog == "open") classes = classes + " js-fr-dialogmodal-open"
		if (this.props.dialog == "close") classes = classes + " js-fr-dialogmodal-close"
		if (this.props.link) { link = this.props.link; type="anchor"; }
		
		if (controls !== "") type="button"
		
		if ( type == "button" ) 
			if (controls === "") return 	<button type="button" className={ classes }>{this.props.text}</button>
			else return 	<button type="button" aria-controls={controls} className={ classes }>{this.props.text}</button>
		else if ( type == "anchor" ) 
			return 	<a type="button" href={link} className={ classes }>{this.props.text}</a>
	}
};


Button.defaultProps = {
  round: false,
  classes: "",
  pressed: false,
  shadow: false,
  style: "default",
  dialog: "none",
  dialogcontrol: "modal",
  link: ""
};
