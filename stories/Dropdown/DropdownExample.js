import React from 'react'
import PropTypes from 'prop-types'

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  LinkList,
  LinkListItem
} from '../../src'

const propTypes = {
  tag: PropTypes.string
}

class DropdownExample extends React.Component {
  state = {
    dropdownOpen: false
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  render() {
    const { tag } = this.props
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle
          className={`btn btn-dropdown`}
          color=""
          tag={tag || 'button'}
          caret>
          Apri dropdown
        </DropdownToggle>
        <DropdownMenu>
          <LinkList>
            <LinkListItem>Azione 1</LinkListItem>
            <LinkListItem>Azione 2</LinkListItem>
            <LinkListItem>Azione 3</LinkListItem>
          </LinkList>
        </DropdownMenu>
      </Dropdown>
    )
  }
}

export default DropdownExample

DropdownExample.propTypes = propTypes
