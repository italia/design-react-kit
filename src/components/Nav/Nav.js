import React from 'react'
import PropTypes from 'prop-types'
import { Nav as NavBase } from 'reactstrap'

import NavHeader from './NavHeader'

const propTypes = {
  ...NavBase.propTypes,
  inHeader: PropTypes.bool
}

const defaultProps = {
  ...NavBase.defaultProps
}

const Nav = ({ inHeader, ...attributes }) => {
  if (inHeader) {
    // return Nav component just for Header
    return <NavHeader {...attributes} />
  }
  // return regular NavBase component
  return <NavBase {...attributes} />
}

Nav.propTypes = propTypes
Nav.defaultProps = defaultProps
export default Nav
