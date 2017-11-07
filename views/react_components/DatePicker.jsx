
class DatePicker extends React.Component {
	componentDidMount(){
	
		var picker = new Pikaday({ 
			field: document.getElementById(this.props.id) ,
			trigger: document.getElementById(this.props.id+'-button'),
			format: 'DD-MM-YYYY',
			toString(date, format) {
				// you should do formatting based on the passed format,
				// but we will just return 'D/M/YYYY' for simplicity
				const day = ("0" + date.getDate()).slice(-2);
				const month = ("0" + (date.getMonth()+1)).slice(-2) ;
				const year = date.getFullYear();
				return `${year}-${month}-${day}`;
			},
		});
	}
	render() {
		return <fieldset className="Form-fieldset">

      <legend className="Form-legend" id={this.props.id + "-label"}>{this.props.legend}</legend>

      <div className="Form-field">

        <label className="Form-label" htmlFor={this.props.id}>Data (gg/mm/aaaa)</label>

        <div className="Grid Grid--alignMiddle Grid--fit Grid--withGutter">

          <div className="Grid-cell u-size10of12">
            <input className="Form-input u-text-r-s u-borderRadius-m js-Datepicker" type="date" id={this.props.id} />
          </div>

          <div className="Grid-cell u-size2of12">
            <button type="button" aria-describedby="appointment-label" aria-controls="appointment">
              <span className="u-hiddenVisually">Seleziona la data</span>
              <span id={this.props.id + "-button"} className="Icon-calendar u-text-r-l"></span>
            </button>
          </div>

        </div>
      </div>

    </fieldset>;
	}
}

DatePicker.defaultProps = {
	legend : "Appuntamento",
	id : "appointment"
};
