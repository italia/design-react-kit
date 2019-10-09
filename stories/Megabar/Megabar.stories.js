import React from 'react'
import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

import {
    ButtonDropdown,
    ButtonGroup,
    Nav,
    NavItem,
    NavLink,
    Row,
    Icon,
    Col,
    Container,
    DropdownToggle,
    DropdownMenu,
    LinkList,
    LinkListItem
} from '../../src'

import BasicMegabarExample from './BasicMegabar'
import MegabarExampleWithHeadAndLink from './MegaBar'
import MegamenuWithImage from './MegamenuWithImage'
import MegamenuWithMoreLink from './MegamenuWithMoreLink'
import MegamenuWithHeader from './MegamenuWithHeader'


const BasicMegabarComponent = () => (
  <section>
    <BasicMegabarExample color="primary" />
    
  </section>
)
const MegaBarHeadandLinkComponent = () => (
  <section>
    <MegabarExampleWithHeadAndLink color="primary" />
    
  </section>
)

const MegabarWithImageComponent = () => (
    <section>
    <MegamenuWithImage color="primary" />
    
  </section>
)
const MegabarWithHeadComponent = () => (
  <section>
  <MegamenuWithHeader color="primary" />
  
</section>
)

const MegamenuWithMoreLinkComponent = () => (
    <section>
      <MegamenuWithMoreLink color="primary" />
      
    </section>
  )
  
  storiesOf('Componenti/Megabar', module)
  .addDecorator(withA11y)
  .add(
    ' Basic Megamenu',
    withInfo({
      propTables: [
        Nav,
        NavItem,
        NavLink,
        Container,
        Row,
        Col
      ],
      propTablesExclude: [BasicMegabarExample]
    })(() => <BasicMegabarExample color="primary" />)
  ) 

storiesOf('Componenti/Megabar', module)
  .addDecorator(withA11y)
  .add(
    'Megabar with header and more link',
    withInfo({
      propTables: [
        Nav,
        NavItem,
        NavLink,
        Container,
        Row,
        Col
      ],
      propTablesExclude: [MegabarExampleWithHeadAndLink]
    })(() => <MegabarExampleWithHeadAndLink color="primary" />)
  )
 
storiesOf('Componenti/Megabar', module)
.addDecorator(withA11y)
.add(
  'Megabar with Image',
  withInfo({
    propTables: [
      Nav,
      NavItem,
      NavLink,
      Container,
      Row,
      Col
    ],
    propTablesExclude: [MegamenuWithImage]
  })(() => <MegamenuWithImage color="primary" />)
)

storiesOf('Componenti/Megabar', module)
.addDecorator(withA11y)
.add(
  'Megamenu with more link',
  withInfo({
    propTables: [
      Nav,
      NavItem,
      NavLink,
      Container,
      Row,
      Col
    ],
    propTablesExclude: [MegamenuWithMoreLink]
  })(() => <MegamenuWithMoreLink color="primary" />)
)

storiesOf('Componenti/Megabar', module)
.addDecorator(withA11y)
.add(
  'Megamenu with Header',
  withInfo({
    propTables: [
      Nav,
      NavItem,
      NavLink,
      Container,
      Row,
      Col
    ],
    propTablesExclude: [MegamenuWithHeader]
  })(() => <MegamenuWithHeader color="primary" />)
)