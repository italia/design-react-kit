import React from 'react'
import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

//#TODO - remove md files
import Esempi from './docs/example.md'

import { CookieBar,CookieBarButtons,CookieBarButton } from '../../src'

class CookieBarComponent extends React.Component {
    render(){
      return(
      <CookieBar> 
            <p>Questo sito utilizza cookie tecnici, analytics e di terze parti. <br/>Proseguendo nella navigazione accetti l’utilizzo dei cookie.</p> 
            <CookieBarButtons>  
             <CookieBarButton href="#">Preferenze<span class="sr-only">cookies</span></CookieBarButton>
             <CookieBarButton>Accetto<span class="sr-only"> i cookies</span></CookieBarButton> 
            </CookieBarButtons>
         </CookieBar>
      )}
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