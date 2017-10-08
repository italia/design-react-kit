
class CookieLaw extends React.Component {
  componentWillMount () {
		var script = document.createElement("script");
		var content = [];
		var position = "";
		if ( this.props.text !== "" ) {
			content.push('"message" : "' + this.props.text + '"')
		
		} 
		if ( this.props.privacyLink !== "" ) {
			content.push('"href" : "' + this.props.privacyLink + '"')
		
		} 
		if (content.length > 0) {			
			content = ',"content": {' + content.join(",") + '}'		
		}
		if (this.props.position == "top" ) position = ',"position": "top"'
		if (this.props.position == "bottom-left" ) position = ',"position": "bottom-left"';
		if (this.props.position == "bottom-right" ) position = ',"position": "bottom-right"'
		
		script.innerHTML = 'window.cookieconsent.initialise({					\
			  "palette": {														\
				"popup": {														\
				  "background": "' + this.props.background + '"					\
				},																\
				"button": {														\
				  "background": "transparent",									\
				  "text": "' + this.props.buttonColor + '",											\
				  "border": "' + this.props.buttonColor + '"												\
				}																\
			  }' + position + content + '													\
			});';	
		document.head.appendChild(script);
    }
	render() {
		return <div></div>;
	}
}

CookieLaw.defaultProps = {
  background: "#000",
  buttonColor: "#f1d600",
  privacyLink: "",
  text: "",
  position: ""
};
