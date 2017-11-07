class Alert extends React.Component {

	static propTypes = { 
		title: React.PropTypes.string,
		message: React.PropTypes.string,
		type: React.PropTypes.string
	};
	
	static defaultProps = { 
		title : 'Alert',
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
		return <div className={"Prose Alert Alert--" + this.state.type + " Alert--withIcon u-layout-prose u-padding-r-bottom u-padding-r-right u-margin-r-bottom"} role="alert">
			<h2 className="u-text-h3">{this.state.title}</h2>
			<p className="u-text-p">{this.state.message}</p>
		</div>;
	}
	
}
