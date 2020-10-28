import React, { useState } from 'react'
import { Collapse, Icon, LinkList, LinkListItem } from '../../src'

const NavbarInlineExample = () => {
  const [collapseOpen1, setCollapseOpen1] = useState(false)
  const [collapseOpen2, setCollapseOpen2] = useState(false)
  const [collapseOpen3, setCollapseOpen3] = useState(false)

  const expanded = {
    'aria-expanded': true
  }
  const toggle = (e, id) => {
    e.preventDefault()
    switch (id) {
      case 1:
        return setCollapseOpen1(!collapseOpen1)
      case 2:
        return setCollapseOpen2(!collapseOpen2)
      case 3:
        return setCollapseOpen3(!collapseOpen3)
    }
  }
  return (
    <nav className="inline-menu">
      <LinkList>
        <LinkListItem
          size="large medium"
          className="right-icon"
          onClick={e => toggle(e, 1)}
          {...(collapseOpen1 ? expanded : {})}>
          <span>Link list 1 </span>
          <Icon
            className="right"
            icon="it-expand"
            style={{ ariaHidden: true }}
          />
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
          size="large medium"
          className="right-icon"
          onClick={e => toggle(e, 2)}
          {...(collapseOpen2 ? expanded : {})}>
          <span>Link list 2 </span>
          <Icon
            className="right"
            icon="it-expand"
            style={{ ariaHidden: true }}
          />
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
          size="large medium"
          className="right-icon"
          onClick={e => toggle(e, 3)}
          {...(collapseOpen3 ? expanded : {})}>
          <span>Link list 3 </span>
          <Icon
            className="right"
            icon="it-expand"
            style={{ ariaHidden: true }}
          />
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
    </nav>
  )
}

export default NavbarInlineExample
