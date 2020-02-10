import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Nav, DropdownMenu, DropdownToggle, Dropdown } from 'reactstrap'

const propTypes = {
  className: PropTypes.string,
  displayLabel: PropTypes.string,
  toggle: PropTypes.func,
  isOpen: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

const Megamenu = ({
  className,
  displayLabel,
  toggle,
  isOpen,
  children,
  ...attributes
}) => {
  const classes = classNames(className, 'megamenu')
  return (
    <Nav>
      <Dropdown
        className={classes}
        isOpen={isOpen}
        toggle={toggle}
        direction={'down'}
        inNavbar
        nav>
        <DropdownToggle className={`nav-link`} tag={'a'} caret>
          {displayLabel}
        </DropdownToggle>
        <DropdownMenu
          style={{
            paddingTop: 32,
            paddingBottom: 32,
            paddingLeft: 24,
            paddingRight: 24
          }}>
          {children}
        </DropdownMenu>
      </Dropdown>
    </Nav>
  )
}

Megamenu.propTypes = propTypes
export default Megamenu
