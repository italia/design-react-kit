class Callout extends React.Component {
	
	static propTypes = { 
		title: React.PropTypes.string,
		message: React.PropTypes.string,
		type: React.PropTypes.string
	};
	
	static defaultProps = { 
		title : 'callout',
		message : 'Voluptate ut voluptatem sit earum ipsam sint. Aut unde explicabo eos dolor rerum eum et. Maxime aliquam deserunt. Non officiis eos fugit in perferendis.',
		type : ''
	};
	
	constructor(props) {
		super(props);
		this.state = {
			title : this.props.title,
			message : this.props.message,
			type : this.props.type
		}
	}
	
	render() {
		return <div className={"Callout Callout--" + this.state.type + " u-text-r-xs"} role="note">
			<h2 className="Callout-title u-text-r-l">{this.state.title}</h2>
			<p className="u-layout-prose u-color-grey-90 u-text-p u-padding-r-all">{this.state.message}</p>
		</div>;
	}
	
}
