import React from 'react'
import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, boolean } from '@storybook/addon-knobs/react'

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
  var toggleState = boolean('Toggle Open', false)
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

const ClassicoConIntestazioneEMore = () => {
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
    })(ClassicoConIntestazioneEMore)
  )
