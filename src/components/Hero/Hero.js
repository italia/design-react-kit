import React from 'react'
import { Jumbotron } from 'reactstrap'

// We use this to override its display name (i.e. as shown into Storybook's info addon)
export default function Hero(props) {
  return <Jumbotron {...props} />
}

Hero.defaultProps = Jumbotron.defaultProps
Hero.propTypes = Jumbotron.propTypes
