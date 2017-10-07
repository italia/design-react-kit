class HelperComponent extends React.Component {
	constructor() {
		if (new.target === HelperComponent) {
		  throw new TypeError("Cannot construct directly");
		}
		
		this.state = { 
			item : {
				
			},
			functions : {
				willmount : function,
				didmount : function,
				willreceiveprops : function,
				shouldupdate : function,
				willupdate : function,
				didupdate : function,
				willunmount : function
			}
		}
	}
	
	componentWillMount() {}
	componentDidMount() {}
	componentWillReceiveProps() {}
	shouldComponentUpdate() {}
	componentWillUpdate() {}
	componentDidUpdate() {}
	componentWillUnmount() {}
	
	
	
	
	
	setState (function) {}
	setState (object)
	setState (optional callback)
	
	forceUpdate
	displayName
	defaultProps
}
