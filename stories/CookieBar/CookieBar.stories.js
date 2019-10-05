import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

import {Button} from '../../src' 
//#[TODO] replace docs with correct file
import Esempi from '../Collapse/docs/Innestati.md'


//styling of the CookieBar
const textStyle = {color: "white", 
        fontSize:14 , 
        paddingTop: "30px", 
        paddingLeft: "45px", 
        paddingBottom: "20px", 
        borderColor: "white", 
        borderWeight: "7px" 
};
const divStyle = {backgroundColor: "#435A70",
        bottom: 0, 
        left: 0, 
        borderTopLeftRadius: "4px",
        borderTopRightRadius: "4px",
        width: "80%", 
        display:"grid", 
        gridTemplateColumns: "auto auto auto"
}
const divStyle2 = {backgroundColor: "#435A70",
      marginTop:"20px",
      marginBottom:"30px",
      marginLeft:"100px",
      paddingLeft:"50px",
      display:"grid",
      gridTemplateColumns:"auto auto",
      paddingTop:"14px"
}


const CookieBarExample = (props) => (
   <div style={divStyle} >
     <p style={textStyle}>Questo sito utilizza cookie tecnici, analytics e di terze parti. <br/> Proseguendo nella navigazione accetti l’utilizzo dei cookie.</p>
      <div style={divStyle2}>
          <a href="https://designers.italia.it/privacy-policy/" style={{backgroundColor:"#435A70" ,color:"#E6ECF2",textTransform:"uppercase", fontSize:14, fontWeight:"bold"}}>Preferenzo</a>
          <Button color="link" style={{backgroundColor:"#435A70",color:"#E6ECF2",textTransform:"uppercase",fontSize:14, 
          fontWeight:"bold",marginTop:-24,borderWidth:0}} onClick={props.addTrip}>accetto</Button>
      </div>
   </div>
)
const Empty = () => (
  <div>
  </div>
)

class App extends Component{
  constructor(props){
    super(props)
    this.state = { isEmptyState: true}
  }
  triggerAddTripState = () => {
    this.setState({
      ...this.state,
      isEmptyState: false,
      isAddTripState: true
    })
  }
  render(){
    return(
      <div>
         {this.state.isEmptyState && <CookieBarExample addTrip = {this.triggerAddTripState} />}
         {this.state.isAddTripState && <Empty />}
      </div>
    )
  }
}

storiesOf('Componenti/CookieBar', module)
  .addDecorator(withA11y)
  .add(
    'Esempi',
    withInfo({
      text: Esempi,
      propTables: [CookieBarExample],
      propTablesExclude: [CookieBarExample]
    })(()=><App/>)
  )