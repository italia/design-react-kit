class Hero extends React.Component {
	
	
	render() {
		return <section style={{background :  this.props.background }} className="Hero">
					<div className="Hero-content">
					{this.props.children}
				</div>
			   </section>;
	}
}
