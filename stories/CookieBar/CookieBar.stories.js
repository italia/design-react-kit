import React from 'react'
import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

import { CookieBtn } from '../../src'
import Esempi from '../Collapse/docs/Innestati.md'
const textStyle = {color: "white", fontSize:16 , paddingTop: "20px", paddingLeft: "15px",  };
const divStyle = {backgroundColor: "#435A70",bottom: 0, left: 0, borderTopLeftRadius: "3px", borderTopRightRadius: "3px"}

const CookieBarExample = () => (
   <div style={divStyle}>
     <p style = {textStyle}>Questo sito utilizza cookie tecnici, analytics e di terze parti. <br/> Proseguendo nella navigazione accetti l’utilizzo dei cookie.</p>
     <div className = "mb-2">
      <CookieBtn buttonName = "Accept"/>
      <CookieBtn buttonName = "Reject"/>
     </div>
   </div>
)

storiesOf('Componenti/CookieBar', module)
  .addDecorator(withA11y)
  .add(
    'Esempi',
    withInfo({
      text: Esempi,
      propTables: [CookieBtn],
      propTablesExclude: [CookieBarExample]
    })(CookieBarExample)
  )