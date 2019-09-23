import React from 'react'
import { Collapse, LinkList, LinkListItem } from '../../src'

class CollapseExample extends React.Component {
  defaultState = {
    collapseOpen1: false,
    collapseOpen2: false,
    collapseOpen3: false
  }

  state = {
    ...this.defaultState
  }

  toggle = (e, id) => {
    e.preventDefault()
    this.setState({
      [`collapseOpen${id}`]: !this.state[`collapseOpen${id}`]
    })
  }

  render() {
    const { collapseOpen1, collapseOpen2, collapseOpen3 } = this.state

    const expanded = {
      'aria-expanded': true
    }
    return (
      <LinkList>
        <LinkListItem
          size="medium"
          className="right-icon"
          onClick={e => this.toggle(e, 1)}
          {...(collapseOpen1 ? expanded : {})}>
          <span>Link list 1 </span>
          <i className="it-expand right" />
          <svg className="icon icon-primary right">
            <use xlinkHref="/svg/sprite.svg#it-expand"></use>
          </svg>
        </LinkListItem>
        <Collapse isOpen={collapseOpen1}>
          <LinkList sublist>
            <LinkListItem>
              <span>Link list 4 </span>
            </LinkListItem>
            <LinkListItem>
              <span>Link list 5 </span>
            </LinkListItem>
            <LinkListItem>
              <span>Link list 6 </span>
            </LinkListItem>
          </LinkList>
        </Collapse>
        <LinkListItem
          size="medium"
          className="right-icon"
          onClick={e => this.toggle(e, 2)}
          {...(collapseOpen2 ? expanded : {})}>
          <span>Link list 2 </span>
          <i className="it-expand right" />
          <svg className="icon icon-primary right">
            <use xlinkHref="/svg/sprite.svg#it-expand"></use>
          </svg>
        </LinkListItem>
        <Collapse isOpen={collapseOpen2}>
          <LinkList sublist>
            <LinkListItem>
              <span>Link list 7 </span>
            </LinkListItem>
            <LinkListItem>
              <span>Link list 8 </span>
            </LinkListItem>
            <LinkListItem>
              <span>Link list 9 </span>
            </LinkListItem>
          </LinkList>
        </Collapse>
        <LinkListItem
          size="medium"
          className="right-icon"
          onClick={e => this.toggle(e, 3)}
          {...(collapseOpen3 ? expanded : {})}>
          <span>Link list 3 </span>
          <i className="it-expand right" />
          <svg className="icon icon-primary right">
            <use xlinkHref="/svg/sprite.svg#it-expand"></use>
          </svg>
        </LinkListItem>
        <Collapse isOpen={collapseOpen3}>
          <LinkList sublist>
            <LinkListItem>
              <span>Link list 10 </span>
            </LinkListItem>
            <LinkListItem>
              <span>Link list 11 </span>
            </LinkListItem>
            <LinkListItem>
              <span>Link list 12 </span>
            </LinkListItem>
          </LinkList>
        </Collapse>
      </LinkList>
    )
  }
}

export default CollapseExample
