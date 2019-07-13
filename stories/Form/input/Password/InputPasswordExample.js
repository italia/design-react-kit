import React from "react";

class InputPasswordExample extends React.Component {
    constructor(){
          super();
          this.state = {
                isFocused: false
          }
    }

    toggleFocusLabel = () => {
          this.setState({
                isFocused: true
          });
    }

    toggleBlurLabel = (e) => {
          if(e.target.value===""){
                this.setState({
                      isFocused: !this.state.isFocused
                });
          }
    }

    render() {
          return(
                <div className="form-group">
      <input type="password" className={this.state.isFocused? "form-control input-password focus--mouse": "form-control input-password"} onFocus={this.toggleFocusLabel} onBlur={(e)=>this.toggleBlurLabel(e)} id="exampleInputPassword"  aria-labelledby="infoPassword"/>
      <label htmlFor="exampleInputPassword" className={this.state.isFocused?"active":""}>Password con label, placeholder e testo di aiuto</label>
      <small id="infoPassword" className="form-text text-muted">Inserisci almeno 8 caratteri e una lettera maiuscola</small>
    </div>
          )
    }
}

export default InputPasswordExample;