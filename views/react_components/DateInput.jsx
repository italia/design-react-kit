
class DateInput extends React.Component {
	render() {
		return  <fieldset className="Form-fieldset">

      <legend className="Form-legend">{ this.props.legend }</legend>

      <div className="Grid Grid--fit Grid--withGutter">

        <div className="Form-field Form-field--date Grid-cell">
          <label className="Form-label" htmlFor={ this.props.id +"giorno"}>Giorno</label>
          <input className="Form-input u-text-r-s u-borderRadius-m" id={ this.props.id +"giorno"} type="number" pattern="0?[1-9]|1[0-9]|2[0-9]|3[01]" min="1" max="31"></input>
        </div>

        <div className="Form-field Form-field--date Grid-cell">
          <label className="Form-label" htmlFor={ this.props.id +"mese"}>Mese</label>
          <input className="Form-input u-text-r-s u-borderRadius-m" id={ this.props.id +"mese"}   type="number" pattern="0?[1-9]|1[012]" min="1" max="12"></input>
        </div>

        <div className="Form-field Form-field--date Grid-cell">
          <label className="Form-label" htmlFor={ this.props.id +"anno"}>Anno</label>
          <input className="Form-input u-text-r-s u-borderRadius-m" id={ this.props.id +"anno"} type="number" pattern="[0-9]{4}" min="1900" max="2010"></input>
        </div>

      </div>

    </fieldset>;
	}
}

DateInput.defaultProps = {
	legend : "Appuntamento",
	id : ""
};
