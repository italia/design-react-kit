import React from 'react'
import PropTypes from 'prop-types'
import { boolean } from '@storybook/addon-knobs/react'

import { Icon, LinkList, LinkListItem } from '../../src'

const ComponenteMenuInline = () => {
  const isFirstOpen = boolean('Apri prima lista', false)
  const isSecondOpen = boolean('Apri seconda lista', false)
  const isThirdOpen = boolean('Apri terza lista', false)

  const opens = [isFirstOpen, isSecondOpen, isThirdOpen]
  return (
    <nav className="inline-menu">
      <LinkList>
        {['One', 'Two', 'Three'].map((collapseN, i) => {
          return (
            <LinkListItem
              key={collapseN}
              tag="a"
              className={`large medium right-icon ${
                opens[i] ? '' : 'collapsed'
              }`}
              aria-expanded={opens[i] ? 'true' : 'false'}
              aria-controls={`#collapse${collapseN}`}
              href={`#collapse${collapseN}`}>
              <span>Link list 1</span>
              <Icon
                color="primary"
                icon="it-expand"
                style={{ ariaHidden: true }}
                size="sm"
              />
              <LinkList
                sublist
                className={`collapse ${opens[i] ? 'show' : ''}`}
                id={`collapse${collapseN}`}>
                <LinkListItem>
                  <span>Link list 1</span>
                </LinkListItem>
                <LinkListItem>
                  <span>Link list 2</span>
                </LinkListItem>
                <LinkListItem>
                  <span>Link list 3</span>
                </LinkListItem>
              </LinkList>
            </LinkListItem>
          )
        })}
      </LinkList>
    </nav>
  )
}

export default ComponenteMenuInline

class ComponenteMenuList extends React.Component {
  state = { isNavOpen: false }

  onNavScrollToggle = e => {
    e.preventDefault()
    this.setState(prevState => ({
      ...prevState,
      isNavOpen: !prevState.isNavOpen
    }))
  }

  render() {
    const collapseN = this.props.collapseN
    return (
      <li>
        <a
          className={
            this.state.isNavOpen
              ? 'list-item large medium right-icon'
              : 'list-item large medium right-icon collapsed'
          }
          href={`#collapse${collapseN}`}
          data-toggle="collapse"
          aria-expanded="false"
          aria-controls="collapseOne"
          onClick={e => this.onNavScrollToggle(e)}>
          <span>Link list 1</span>
          <Icon
            color="primary"
            icon="it-expand"
            style={{ ariaHidden: true }}
            size="sm"
          />
        </a>
        <ul
          className={
            this.state.isNavOpen
              ? 'link-sublist collapse show'
              : 'link-sublist collapse'
          }
          id="collapseOne">
          <li>
            <a className="list-item" href="#">
              <span>Link list 1</span>
            </a>
          </li>
          <li>
            <a className="list-item" href="#">
              <span>Link list 1</span>
            </a>
          </li>
          <li>
            <a className="list-item" href="#">
              <span>Link list 1</span>
            </a>
          </li>
        </ul>
      </li>
    )
  }
}

ComponenteMenuList.propTypes = {
  collapseN: PropTypes.string
}

// export ComponenteMenuList;
