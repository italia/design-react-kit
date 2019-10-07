import React from 'react'
import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'


import Esempi from './docs/example.md'

import { CookieBar,CookieBarButtons,CookieBarButton } from '../../src'

class CookieBarComponent extends React.Component {
    defaultState = {
        clicked : true
    }
    state = {
        ...this.defaultState,
        clicked: false
    }
    toggle = () => {
        this.setState({
            ...this.defaultState,
            clicked: !this.state.clicked
        })
    }

    render(){
        if(this.state.clicked==false){
      return(
    <div style = {{display: "block"}}>
      <CookieBar> 
            <p>Questo sito utilizza cookie tecnici, analytics e di terze parti. <br/>Proseguendo nella navigazione accetti l’utilizzo dei cookie.</p> 
            <CookieBarButtons>  
             <CookieBarButton href="#">Preferenze<span class="sr-only">cookies</span></CookieBarButton>
             <CookieBarButton onClick={()=>this.toggle()}>Accetto<span class="sr-only"> i cookies</span></CookieBarButton> 
            </CookieBarButtons>
         </CookieBar>
    </div>
      )}
    }
}

storiesOf('Componenti/Cookiebar',module)
    .addDecorator(withA11y)
    .add(
        'Come Usarlo',
        withInfo({
            text: Esempi,
            propTables: [CookieBar, CookieBarButton, CookieBarButtons]
        })(()=><CookieBarComponent />)
    )