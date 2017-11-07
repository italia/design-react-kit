class DialogButton extends React.Component {

	 static defaultProps = {
		title : 'Do it!',
		purpose : 'open',
		control : 'modal',
		classes : '',
		type : 'default'
	 }
	 
	render() {
		return <button className={"Button Button--" + this.props.type + " js-fr-dialogmodal-" + this.props.purpose + " " + this.props.classes} aria-controls={this.props.control}>{this.props.title}</button>;
	}
}

class DialogOpen extends DialogButton {
	 static defaultProps = {
		title : 'Open',
		purpose : 'open',
		control : 'modal',
	 }
}

class DialogClose extends DialogButton {
	 static defaultProps = {
		title : 'Close',
		purpose : 'close',
		control : 'modal',
		classes : 'u-floatRight',
		type : 'danger'
	 }
}

class Dialog extends React.Component {
	
	 static defaultProps = {
		control : 'modal',
		classes : ''
	 }
	 
	render() {
		return <div className="Dialog js-fr-dialogmodal" id={this.props.control}>
			<div className={"Dialog-content Dialog-content--centered u-background-white u-layout-prose u-margin-all-xl u-padding-all-xl js-fr-dialogmodal-modal " + this.props.classes } aria-labelledby="modal-title">
				<div role="document" className="Prose">
					{this.props.children}
				</div>
			</div>
		</div>;
	}
	
	componentDidMount() {
		var dialog = Frdialogmodal({
		  // String - Outer container selector, hook for JS init() method
		  selector: '.js-fr-dialogmodal',

		  // String - Modal selector, the element that represents the modal
		  modalSelector: '.js-fr-dialogmodal-modal',

		  // String - Selector for the open button
		  openSelector: '.js-fr-dialogmodal-open',

		  // String - Selector for the close button
		  closeSelector: '.js-fr-dialogmodal-close',

		  // Boolean - Switches the dialog role to alertdialog, only use this when representing an alert, error or warning
		  isAlert: false,

		  // String - Class name that will be added to the selector when the component has been initialised
		  readyClass: 'fr-dialogmodal--is-ready',

		  // String - Class name that will be added to the selector when the component is active
		  activeClass: 'fr-dialogmodal--is-active'
		});
	}
}

class DialogTitle extends React.Component {
	static defaultProps = {
		title : 'Title'
	}
	render() {
		return <h2 className="u-cf u-text-h2 u-borderHideFocus" id="modal-title" tabIndex="0">{this.props.title}</h2>
	}
}

