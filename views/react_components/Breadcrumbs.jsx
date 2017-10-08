class Breadcrumbs extends React.Component {
	
	
	render() {
		const childrenItems = React.Children.map(this.props.children,
		 (child, ind) => {
			 if ( child.type.name == "BreadcrumbItem" ) return child
		 }
		);
		return <nav aria-label="sei qui:" role="navigation">
				<ul class="Breadcrumb">
					{childrenItems}
				</ul>
			   </nav>;
	}
}
class BreadcrumbItem extends React.Component {
	
	render() {
		return <li className="Breadcrumb-item"><a className="Breadcrumb-link u-color-50" href={this.props.url}>{this.props.children}</a></li>;
	}
}
