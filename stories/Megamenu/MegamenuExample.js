import React from 'react'

import { Megamenu, LinkList, LinkListItem, Navbar, Icon } from '../../src'

class MegamenuExample extends React.Component {
  state = {
    megamenuOpen: false
  }

  toggleShow = () => {
    this.setState({
      megamenuOpen: !this.state.megamenuOpen
    })
  }

  render() {
    return (
      <Navbar expand="lg">
        <Megamenu
          isOpen={this.state.megamenuOpen}
          toggle={this.toggleShow}
          displayLabel={'Megamenu'}>
          <div className="row">
            <div className="col-12 col-lg-4">
              <LinkList>
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
            </div>
            <div className="col-12 col-lg-4">
              <LinkList>
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
            </div>
            <div className="col-12 col-lg-4">
              <LinkList>
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
            </div>
          </div>
          <div className="it-external">
            <div className="row">
              <div className="col-12 col-lg-4">
                <LinkList>
                  <LinkListItem></LinkListItem>
                </LinkList>
              </div>
              <div className="col-12 col-lg-4">
                <LinkList>
                  <LinkListItem></LinkListItem>
                </LinkList>
              </div>
              <div className="col-12 col-lg-4">
                <LinkList>
                  <LinkListItem divider />
                  <LinkListItem>
                    <span>Link list 1 </span>
                    <Icon icon="it-arrow-right" size="sm" />
                  </LinkListItem>
                </LinkList>
              </div>
            </div>
          </div>
        </Megamenu>
      </Navbar>
    )
  }
}

export default MegamenuExample
