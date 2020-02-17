import React from 'react'
import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs/react'

import {
  Megamenu,
  LinkList,
  LinkListItem,
  Navbar,
  Icon,
  Row,
  Col
} from '../../src'

import Classic from './docs/Classic.md'
import ClassicWithMore from './docs/ClassicWithMore.md'
import ClassicWithHeader from './docs/ClassicWithHeader.md'
import ClassicWithHeaderAndMore from './docs/ClassicWithHeaderAndMore.md'

// import MegamenuExample from './MegamenuExample'

const Classico = () => {
  return (
    <Navbar expand="lg">
      <Megamenu displayLabel={'Megamenu'}>
        <Row>
          <Col lg={4}>
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
          </Col>
          <Col lg={4}>
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
          </Col>
          <Col lg={4}>
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
          </Col>
        </Row>
      </Megamenu>
    </Navbar>
  )
}

const ClassicoConMore = () => {
  return (
    <Navbar expand="lg">
      <Megamenu displayLabel={'Megamenu'}>
        <Row>
          <Col lg={4}>
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
          </Col>
          <Col lg={4}>
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
          </Col>
          <Col lg={4}>
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
          </Col>
        </Row>
        <div className="it-external">
          <Row>
            <Col lg={4}>
              <LinkList>
                <LinkListItem></LinkListItem>
              </LinkList>
            </Col>
            <Col lg={4}>
              <LinkList>
                <LinkListItem></LinkListItem>
              </LinkList>
            </Col>
            <Col lg={4}>
              <LinkList>
                <LinkListItem divider />
                <LinkListItem>
                  <span>Link list 1 </span>
                  <Icon icon="it-arrow-right" size="sm" />
                </LinkListItem>
              </LinkList>
            </Col>
          </Row>
        </div>
      </Megamenu>
    </Navbar>
  )
}

const ClassicoConIntestazione = () => {
  return (
    <Navbar expand="lg">
      <Megamenu displayLabel={'Megamenu'}>
        <Row>
          <Col lg={4}>
            <LinkList>
              <LinkListItem header>Header 1</LinkListItem>
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
          </Col>
          <Col lg={4}>
            <LinkList>
              <LinkListItem header>Header 2</LinkListItem>
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
          </Col>
          <Col lg={4}>
            <LinkList>
              <LinkListItem header>Header 3</LinkListItem>
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
          </Col>
        </Row>
      </Megamenu>
    </Navbar>
  )
}

const ClassicoConIntestazioneMore = () => {
  return (
    <Navbar expand="lg">
      <Megamenu displayLabel={'Megamenu'}>
        <Row>
          <Col lg={4}>
            <LinkList>
              <LinkListItem header>Header 1</LinkListItem>
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
          </Col>
          <Col lg={4}>
            <LinkList>
              <LinkListItem header>Header 2</LinkListItem>
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
          </Col>
          <Col lg={4}>
            <LinkList>
              <LinkListItem header>Header 3</LinkListItem>
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
          </Col>
        </Row>
        <div className="it-external">
          <Row>
            <Col lg={4}>
              <LinkList>
                <LinkListItem divider />
                <LinkListItem>
                  <span>Link list 1 </span>
                  <Icon icon="it-arrow-right" size="sm" />
                </LinkListItem>
              </LinkList>
            </Col>
            <Col lg={4}>
              <LinkList>
                <LinkListItem divider />
                <LinkListItem>
                  <span>Link list 2 </span>
                  <Icon icon="it-arrow-right" size="sm" />
                </LinkListItem>
              </LinkList>
            </Col>
            <Col lg={4}>
              <LinkList>
                <LinkListItem divider />
                <LinkListItem>
                  <span>Link list 3 </span>
                  <Icon icon="it-arrow-right" size="sm" />
                </LinkListItem>
              </LinkList>
            </Col>
          </Row>
        </div>
      </Megamenu>
    </Navbar>
  )
}

const CallToActionInBasso = () => {
  return (
    <Navbar expand="lg">
      <Megamenu displayLabel={'Megamenu'}>
        <Row>
          <Col lg={4}>
            <LinkList>
              <LinkListItem header>Header 1</LinkListItem>
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
          </Col>
          <Col lg={4}>
            <LinkList>
              <LinkListItem header>Header 2</LinkListItem>
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
          </Col>
          <Col lg={4}>
            <LinkList>
              <LinkListItem header>Header 3</LinkListItem>
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
          </Col>
        </Row>
        <div className="it-megamenu-footer">
          <Row>
            <Col lg={4}>
              <LinkList>
                <LinkListItem>
                  <Icon icon="it-star-outline" size="sm" />
                  <span>Link list 1 </span>
                </LinkListItem>
              </LinkList>
            </Col>
            <Col lg={4}>
              <LinkList>
                <LinkListItem>
                  <Icon icon="it-star-outline" size="sm" />
                  <span>Link list 2 </span>
                </LinkListItem>
              </LinkList>
            </Col>
            <Col lg={4}>
              <LinkList>
                <LinkListItem>
                  <Icon icon="it-star-outline" size="sm" />
                  <span>Link list 3 </span>
                </LinkListItem>
              </LinkList>
            </Col>
          </Row>
        </div>
      </Megamenu>
    </Navbar>
  )
}

const CallToActionDestra = () => {
  return (
    <Navbar expand="lg">
      <Megamenu displayLabel={'Megamenu'}>
        <Row className="max-height-col">
          <Col xs={12} lg={8}>
            <Row className="margin-right-col">
              <Col lg={4}>
                <LinkList>
                  <LinkListItem header>Header 1</LinkListItem>
                  <LinkListItem>
                    <span>Link list 1</span>
                  </LinkListItem>
                  <LinkListItem>
                    <span>Link list 2</span>
                  </LinkListItem>
                  <LinkListItem>
                    <span>Link list 3</span>
                  </LinkListItem>
                  <LinkListItem>
                    <span>Link list 4</span>
                  </LinkListItem>
                </LinkList>
              </Col>
              <Col lg={4}>
                <LinkList>
                  <LinkListItem header>Header 2</LinkListItem>
                  <LinkListItem>
                    <span>Link list 1</span>
                  </LinkListItem>
                  <LinkListItem>
                    <span>Link list 2</span>
                  </LinkListItem>
                  <LinkListItem>
                    <span>Link list 3</span>
                  </LinkListItem>
                  <LinkListItem>
                    <span>Link list 4</span>
                  </LinkListItem>
                </LinkList>
              </Col>
              <Col lg={4}>
                <LinkList>
                  <LinkListItem header>Header 3</LinkListItem>
                  <LinkListItem>
                    <span>Link list 1</span>
                  </LinkListItem>
                  <LinkListItem>
                    <span>Link list 2</span>
                  </LinkListItem>
                  <LinkListItem>
                    <span>Link list 3</span>
                  </LinkListItem>
                  <LinkListItem>
                    <span>Link list 4</span>
                  </LinkListItem>
                </LinkList>
              </Col>
            </Row>
          </Col>
          <Col xs={12} lg={4}>
            <div className="max-height-col">
              <Col className="it-vertical">
                <LinkList>
                  <LinkListItem>
                    <span>Link list 1 </span>
                    <Icon icon="it-star-outline" size="sm" />
                  </LinkListItem>
                  <LinkListItem>
                    <span>Link list 2 </span>
                    <Icon icon="it-star-outline" size="sm" />
                  </LinkListItem>
                  <LinkListItem>
                    <span>Link list 3 </span>
                    <Icon icon="it-star-outline" size="sm" />
                  </LinkListItem>
                  <LinkListItem>
                    <span>Link list 3 </span>
                    <Icon icon="it-star-outline" size="sm" />
                  </LinkListItem>
                </LinkList>
              </Col>
            </div>
          </Col>
        </Row>
      </Megamenu>
    </Navbar>
  )
}

storiesOf('Componenti/Megamenu.Classic', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add(
    'Megamenu classico',
    withInfo({
      text: Classic
    })(Classico)
  )

  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add(
    'Classico con link “more”',
    withInfo({
      text: ClassicWithMore
    })(ClassicoConMore)
  )

  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add(
    'Classico con Intestazione',
    withInfo({
      text: ClassicWithHeader
    })(ClassicoConIntestazione)
  )

  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add(
    'Classico con Intestazione e link “more”',
    withInfo({
      text: ClassicWithHeaderAndMore
    })(ClassicoConIntestazioneMore)
  )

storiesOf('Componenti/Megamenu.With call to action', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add(
    'Call to action in basso',
    withInfo({
      text: 'Call to action below'
    })(CallToActionInBasso)
  )

  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add(
    'Call to action a destra',
    withInfo({
      text: 'Call to action on the side'
    })(CallToActionDestra)
  )
