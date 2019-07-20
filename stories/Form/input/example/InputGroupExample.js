import React from 'react';

class InputGroupExample extends React.Component {

      constructor() {
            super();
      }

      render() {
            return (
                  <div>
                        <ExampleInputText></ExampleInputText>
                        <ExampleInputEmail></ExampleInputEmail>
                        <ExampleInputNumber></ExampleInputNumber>
                        <ExampleInputTelephone></ExampleInputTelephone>
                        <ExampleInputTime></ExampleInputTime>
                  </div>
            )
      }
}

export default InputGroupExample;


class ExampleInputText extends React.Component {
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
        <input type="text" className={this.state.isFocused? "form-control focus--mouse": "form-control"} onFocus={this.toggleFocusLabel} onBlur={(e)=>this.toggleBlurLabel(e)} id="exampleInputText" />
        <label htmlFor="exampleInputText" className={this.state.isFocused?"active":""}>Campo di tipo testuale</label>
      </div>
            )
      }
}

class ExampleInputEmail extends React.Component {
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
        <input type="email" className={this.state.isFocused? "form-control focus--mouse": "form-control"} onFocus={this.toggleFocusLabel} onBlur={(e)=>this.toggleBlurLabel(e)} id="exampleInputEmail" />
        <label htmlFor="exampleInputEmail" className={this.state.isFocused?"active":""}>Campo di tipo email</label>
      </div>
            )
      }
}

class ExampleInputNumber extends React.Component {
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
        <input type="number" className={this.state.isFocused? "form-control focus--mouse": "form-control"} onFocus={this.toggleFocusLabel} onBlur={(e)=>this.toggleBlurLabel(e)} id="exampleInputNumber" />
        <label htmlFor="exampleInputNumber" className={this.state.isFocused?"active":""}>Campo di tipo numerico</label>
      </div>
            )
      }
}

class ExampleInputTelephone extends React.Component {
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
        <input type="tel" className={this.state.isFocused? "form-control focus--mouse": "form-control"} onFocus={this.toggleFocusLabel} onBlur={(e)=>this.toggleBlurLabel(e)} id="exampleInputTelephone" />
        <label htmlFor="exampleInputTelephone" className={this.state.isFocused?"active":""}>Campo di tipo telefono</label>
      </div>
            )
      }
}

class ExampleInputTime extends React.Component {
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
        <input type="time" className={this.state.isFocused? "form-control focus--mouse": "form-control"} onFocus={this.toggleFocusLabel} onBlur={()=>this.toggleBlurLabel(e)} id="exampleInputTime" min="9:00" max="18:00" />
        <label htmlFor="exampleInputTime" className={this.state.isFocused?"active":""}>Campo di tipo ora</label>
      </div>
            )
      }
}

class ExampleInputPassword extends React.Component {
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

class ExampleInputPasswordConfirm extends React.Component {
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
        <input type="password" className={this.state.isFocused? "form-control input-password input-password-strength-meter focus--mouse": "form-control input-password input-password-strength-meter"} onFocus={this.toggleFocusLabel} onBlur={(e)=>this.toggleBlurLabel(e)} id="exampleInputPassword3" />
        <label htmlFor="exampleInputPassword3" className={this.state.isFocused?"active":""}>Password con strength meter</label>
      </div>
            )
      }
}

class ExampleInputDisable extends React.Component {
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
        <input type="text" className={this.state.isFocused? "form-control focus--mouse": "form-control"} onFocus={this.toggleFocusLabel} onBlur={(e)=>this.toggleBlurLabel(e)} id="input-text-disabled" disabled/>
        <label htmlFor="input-text-disabled" className={this.state.isFocused?"active":""}>Contenuto disabilitato</label>
      </div>
            )
      }
}



//TODO autocomplete functionality
class ExampleInputAutoComplete extends React.Component {
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

      render() {
            return(
                  <div className="form-group"> 
                        <input type="search" className="autocomplete" placeholder="Testo da cercare" id="autocomplete-regioni" name="autocomplete-regioni" data-autocomplete='[{"text":"Abruzzo","link":"#"},{"text":"Basilicata","link":"#"},{"text":"Calabria","link":"#"},{"text":"Campania","link":"#"},{"text":"Emilia Romagna","link":"#"},{"text":"Friuli Venezia Giulia","link":"#"},{"text":"Lazio","link":"#"},{"text":"Liguria","link":"#"},{"text":"Lombardia","link":"#"},{"text":"Marche","link":"#"},{"text":"Molise","link":"#"},{"text":"Piemonte","link":"#"},{"text":"Puglia","link":"#"},{"text":"Sardegna","link":"#"},{"text":"Sicilia","link":"#"},{"text":"Toscana","link":"#"},{"text":"Trentino Alto Adige","link":"#"},{"text":"Umbria","link":"#"},{"text":"Valle d’Aosta","link":"#"},{"text":"Veneto","link":"#"}]' />
                        <ul className="autocomplete-list"></ul>
                        <label htmlFor="autocomplete-regioni" className="sr-only">Cerca nel sito</label>
                  </div>
            )
      }
}


