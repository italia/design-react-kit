class Accordion extends React.Component {
	componentDidMount() {
		var multi = this.props.multi;
		if ( null !== this.props.multi ) { multi = ( this.props.multi == "true" ) }
		jQuery( document ).ready(function() {
			
				var myAccordion = Fraccordion({
					// String - Use header id on element to tie each accordion panel to its header - see panelIdPrefix
					headerIdPrefix: 'accordion-header',
					// String - Use panel id on element to tie each accordion header to its panel - see headerIdPrefix
					panelIdPrefix: 'accordion-panel',
					// Boolean - If set to false, all accordion panels will be closed on init()
					firstPanelsOpenByDefault: false,
					// Boolean - If set to false, each accordion instance will only allow a single panel to be open at a time
					multiselectable:  multi ,
					// String - Class name that will be added to the selector when the component has been initialised
					readyClass: 'fr-accordion--is-ready'
				});
		});
	}
	render() {
		var i = -1
		const childrenWithProps = React.Children.map(this.props.children,
		 (child, ind) => {
			 if ( child.type.name == "AccordionItemTitle" ) i = i + 1;
			 return React.cloneElement(child, {
				index : i 
			})
		 }
		);
		return <div className="Accordion Accordion--default fr-accordion js-fr-accordion" id="accordion-1"> 
			{childrenWithProps}
		</div>;
	}

};

Accordion.defaultProps = {
  multi: "true"
};
class AccordionItem extends React.Component {
	render() {
		return <div id={"accordion-panel-"+this.props.index} className="Accordion-panel fr-accordion__panel js-fr-accordion__panel">
			{this.props.children}
		</div>;
	}

};

class AccordionItemTitle extends React.Component {
	render() {
		return <h2 className="Accordion-header js-fr-accordion__header fr-accordion__header" id={"accordion-header-"+this.props.index}>
			<span className="Accordion-link">{this.props.title}</span>
		</h2>;
	}

};
