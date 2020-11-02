import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, select, boolean } from '@storybook/addon-knobs/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

import {
  Pager,
  PagerList,
  PagerItem,
  PagerLink,
  Form,
  FormGroup,
  Icon,
  Input,
  Label,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  LinkList,
  LinkListItem
} from '../../src'

import Esempi from './docs/Esempi.md'
import StatoDisabilitatoAttivo from './docs/StatoDisabilitatoAttivo.md'
import Allineamento from './docs/Allineamento.md'
import Responsive from './docs/Responsive.md'
import More from './docs/More.md'
import Changer from './docs/Changer.md'
import Jump from './docs/Jump.md'
import Simple from './docs/Simple.md'
import Link from './docs/Link.md'
import Total from './docs/Total.md'
import EsempiInterattivi from './docs/EsempiInterattivi.md'

const EsempiComponent = () => (
  <Pager>
    <PagerList>
      <PagerItem>
        <PagerLink previous href="#">
          <Icon icon="it-chevron-left" style={{ ariaHidden: true }} />
        </PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink href="#">1</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink href="#">2</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink href="#">3</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink next href="#">
          <Icon icon="it-chevron-right" style={{ ariaHidden: true }} />
        </PagerLink>
      </PagerItem>
    </PagerList>
  </Pager>
)

const StatoDisabilitatoAttivoComponent = () => (
  <Pager>
    <PagerList>
      <PagerItem disabled>
        <PagerLink previous href="#">
          <Icon icon="it-chevron-left" style={{ ariaHidden: true }} />
        </PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink aria-current="page" href="#">
          1
        </PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink href="#">2</PagerLink>
      </PagerItem>
      <PagerItem disabled>
        <PagerLink href="#">3</PagerLink>
      </PagerItem>
      <PagerItem disabled>
        <PagerLink next href="#">
          <Icon icon="it-chevron-right" style={{ ariaHidden: true }} />
        </PagerLink>
      </PagerItem>
    </PagerList>
  </Pager>
)

const AllineamentoComponent = () => (
  <section>
    <Pager size="sm" className="justify-content-center mb-3">
      <PagerList>
        <PagerItem disabled>
          <PagerLink previous href="#">
            <Icon icon="it-chevron-left" style={{ ariaHidden: true }} />
          </PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink aria-current="page" href="#">
            1
          </PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink href="#">2</PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink href="#">3</PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink next href="#">
            <Icon icon="it-chevron-right" style={{ ariaHidden: true }} />
          </PagerLink>
        </PagerItem>
      </PagerList>
    </Pager>

    <Pager size="sm" className="justify-content-end mb-3">
      <PagerList>
        <PagerItem disabled>
          <PagerLink previous href="#">
            <Icon icon="it-chevron-left" style={{ ariaHidden: true }} />
          </PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink aria-current="page" href="#">
            1
          </PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink href="#">2</PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink href="#">3</PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink next href="#">
            <Icon icon="it-chevron-right" style={{ ariaHidden: true }} />
          </PagerLink>
        </PagerItem>
      </PagerList>
    </Pager>
  </section>
)

const ResponsiveComponent = () => (
  <Pager className="mb-3">
    <PagerList>
      <PagerItem>
        <PagerLink previous href="#">
          <Icon icon="it-chevron-left" style={{ ariaHidden: true }} />
        </PagerLink>
      </PagerItem>
      <PagerItem className="d-sm-block">
        <PagerLink href="#">9</PagerLink>
      </PagerItem>
      <PagerItem className="d-sm-block">
        <PagerLink href="#">10</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink aria-current="page" href="#">
          <span className="d-sm-none">Pagina&nbsp;</span>11
        </PagerLink>
      </PagerItem>
      <PagerItem className="d-sm-block">
        <PagerLink href="#">12</PagerLink>
      </PagerItem>
      <PagerItem className="d-sm-block">
        <PagerLink href="#">13</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink next href="#">
          <Icon icon="it-chevron-right" style={{ ariaHidden: true }} />
        </PagerLink>
      </PagerItem>
    </PagerList>
  </Pager>
)

const MoreComponent = () => (
  <Pager className="mb-3">
    <PagerList>
      <PagerItem>
        <PagerLink previous href="#">
          <Icon icon="it-chevron-left" style={{ ariaHidden: true }} />
        </PagerLink>
      </PagerItem>
      <PagerItem className="d-none d-sm-block">
        <PagerLink href="#">1</PagerLink>
      </PagerItem>
      <PagerItem className="d-none d-sm-block">
        <PagerLink tag="span">…</PagerLink>
      </PagerItem>
      <PagerItem className="d-none d-sm-block">
        <PagerLink href="#">24</PagerLink>
      </PagerItem>
      <PagerItem className="d-none d-sm-block">
        <PagerLink href="#">25</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink aria-current="page" href="#">
          26
        </PagerLink>
      </PagerItem>
      <PagerItem className="d-none d-sm-block">
        <PagerLink href="#">27</PagerLink>
      </PagerItem>
      <PagerItem className="d-none d-sm-block">
        <PagerLink href="#">28</PagerLink>
      </PagerItem>
      <PagerItem className="d-none d-sm-block">
        <PagerLink tag="span">…</PagerLink>
      </PagerItem>
      <PagerItem className="d-none d-sm-block">
        <PagerLink href="#">50</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink next href="#">
          <Icon icon="it-chevron-right" style={{ ariaHidden: true }} />
        </PagerLink>
      </PagerItem>
    </PagerList>
  </Pager>
)

const ChangerComponent = () => {
  const [isOpen, toggle] = useState(false)
  return (
    <Pager className="mb-3">
      <PagerList>
        <PagerItem>
          <PagerLink previous href="#">
            <Icon icon="it-chevron-left" style={{ ariaHidden: true }} />
          </PagerLink>
        </PagerItem>
        <PagerItem className="d-none d-sm-block">
          <PagerLink href="#">1</PagerLink>
        </PagerItem>
        <PagerItem className="d-none d-sm-block">
          <PagerLink tag="span">…</PagerLink>
        </PagerItem>
        <PagerItem className="d-none d-sm-block">
          <PagerLink href="#">24</PagerLink>
        </PagerItem>
        <PagerItem className="d-none d-sm-block">
          <PagerLink href="#">25</PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink aria-current="page" href="#">
            26
          </PagerLink>
        </PagerItem>
        <PagerItem className="d-none d-sm-block">
          <PagerLink href="#">27</PagerLink>
        </PagerItem>
        <PagerItem className="d-none d-sm-block">
          <PagerLink href="#">28</PagerLink>
        </PagerItem>
        <PagerItem className="d-none d-sm-block">
          <PagerLink tag="span">…</PagerLink>
        </PagerItem>
        <PagerItem className="d-none d-sm-block">
          <PagerLink href="#">50</PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink next href="#">
            <Icon icon="it-chevron-right" style={{ ariaHidden: true }} />
          </PagerLink>
        </PagerItem>
      </PagerList>
      <Dropdown isOpen={isOpen} toggle={() => toggle(!isOpen)}>
        <DropdownToggle
          tag="a"
          id="pagerChanger"
          className="btn btn-dropdown"
          caret>
          pag.10
        </DropdownToggle>
        <DropdownMenu>
          <LinkList>
            <LinkListItem active href="#">
              pag. 10
            </LinkListItem>
            <LinkListItem href="#">pag. 20</LinkListItem>
            <LinkListItem href="#">pag. 30</LinkListItem>
            <LinkListItem href="#">pag. 40</LinkListItem>
            <LinkListItem href="#">pag. 50</LinkListItem>
          </LinkList>
        </DropdownMenu>
      </Dropdown>
    </Pager>
  )
}

const PageJumper = () => (
  <Form>
    <FormGroup>
      <Input
        id="jumpToPage"
        type="text"
        className="form-control"
        maxLength="2"
      />
      <Label for="jumpToPage">Vai a ...</Label>
    </FormGroup>
  </Form>
)

const JumpComponent = () => (
  <Pager className="mb-3">
    <PagerList>
      <PagerItem>
        <PagerLink previous href="#">
          <Icon icon="it-chevron-left" style={{ ariaHidden: true }} />
        </PagerLink>
      </PagerItem>
      <PagerItem className="d-none d-sm-block">
        <PagerLink href="#">1</PagerLink>
      </PagerItem>
      <PagerItem className="d-none d-sm-block">
        <PagerLink tag="span">…</PagerLink>
      </PagerItem>
      <PagerItem className="d-none d-sm-block">
        <PagerLink href="#">24</PagerLink>
      </PagerItem>
      <PagerItem className="d-none d-sm-block">
        <PagerLink href="#">25</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink aria-current="page" href="#">
          26
        </PagerLink>
      </PagerItem>
      <PagerItem className="d-none d-sm-block">
        <PagerLink href="#">27</PagerLink>
      </PagerItem>
      <PagerItem className="d-none d-sm-block">
        <PagerLink href="#">28</PagerLink>
      </PagerItem>
      <PagerItem className="d-none d-sm-block">
        <PagerLink tag="span">…</PagerLink>
      </PagerItem>
      <PagerItem className="d-none d-sm-block">
        <PagerLink href="#">50</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink next href="#">
          <Icon icon="it-chevron-right" style={{ ariaHidden: true }} />
        </PagerLink>
      </PagerItem>
    </PagerList>
    <PageJumper />
  </Pager>
)

const SimpleComponent = () => (
  <Pager className="mb-3">
    <PagerList>
      <PagerItem disabled>
        <PagerLink previous href="#">
          <Icon icon="it-chevron-left" style={{ ariaHidden: true }} />
        </PagerLink>
      </PagerItem>
      <PagerItem className="d-none d-sm-block">
        <PagerLink tag="span">1</PagerLink>
      </PagerItem>
      <PagerItem className="d-none d-sm-block">
        <PagerLink tag="span">/</PagerLink>
      </PagerItem>
      <PagerItem className="d-none d-sm-block">
        <PagerLink tag="span">5</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink next href="#">
          <Icon icon="it-chevron-right" style={{ ariaHidden: true }} />
        </PagerLink>
      </PagerItem>
    </PagerList>
  </Pager>
)

const LinkComponent = () => (
  <Pager className="mb-3">
    <PagerList>
      <PagerItem>
        <PagerLink previous href="#" className="text">
          Precedente
        </PagerLink>
      </PagerItem>
      <PagerItem className="d-none d-sm-block">
        <PagerLink href="#">1</PagerLink>
      </PagerItem>
      <PagerItem className="d-none d-sm-block">
        <PagerLink tag="span">…</PagerLink>
      </PagerItem>
      <PagerItem className="d-none d-sm-block">
        <PagerLink href="#">24</PagerLink>
      </PagerItem>
      <PagerItem className="d-none d-sm-block">
        <PagerLink href="#">25</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink aria-current="page" href="#">
          26
        </PagerLink>
      </PagerItem>
      <PagerItem className="d-none d-sm-block">
        <PagerLink href="#">27</PagerLink>
      </PagerItem>
      <PagerItem className="d-none d-sm-block">
        <PagerLink href="#">28</PagerLink>
      </PagerItem>
      <PagerItem className="d-none d-sm-block">
        <PagerLink tag="span">…</PagerLink>
      </PagerItem>
      <PagerItem className="d-none d-sm-block">
        <PagerLink href="#">50</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink next href="#" className="text">
          Successiva
        </PagerLink>
      </PagerItem>
    </PagerList>
  </Pager>
)

const TotalComponent = () => (
  <Pager className="pagination-total mb-3">
    <PagerList>
      <PagerItem>
        <PagerLink previous href="#">
          <Icon icon="it-chevron-left" style={{ ariaHidden: true }} />
        </PagerLink>
      </PagerItem>
      <PagerItem className="d-none d-sm-block">
        <PagerLink href="#">1</PagerLink>
      </PagerItem>
      <PagerItem className="d-none d-sm-block">
        <PagerLink tag="span">…</PagerLink>
      </PagerItem>
      <PagerItem className="d-none d-sm-block">
        <PagerLink aria-current="page" href="#">
          24
        </PagerLink>
      </PagerItem>
      <PagerItem className="d-none d-sm-block">
        <PagerLink href="#">25</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink href="#">26</PagerLink>
      </PagerItem>
      <PagerItem className="d-none d-sm-block">
        <PagerLink href="#">27</PagerLink>
      </PagerItem>
      <PagerItem className="d-none d-sm-block">
        <PagerLink href="#">28</PagerLink>
      </PagerItem>
      <PagerItem className="d-none d-sm-block">
        <PagerLink tag="span">…</PagerLink>
      </PagerItem>
      <PagerItem className="d-none d-sm-block">
        <PagerLink href="#">50</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink next href="#">
          <Icon icon="it-chevron-right" style={{ ariaHidden: true }} />
        </PagerLink>
      </PagerItem>
    </PagerList>
    <p>
      <span className="sr-only">Pagina</span> 24 di 50
    </p>
  </Pager>
)

const EsempiInterattiviComponent = () => {
  const active = boolean('Attivo', false)
  const disabled = boolean('Disabilitato', false)
  const sizes = ['sm', '', 'lg']
  const size = select('Dimensioni', sizes, sizes[0])

  let current = {}
  if (active) {
    current = {
      'aria-current': 'page'
    }
  }
  return (
    <Pager size={size}>
      <PagerList>
        <PagerItem disabled={disabled}>
          <PagerLink {...current} previous href="#">
            <Icon icon="it-chevron-left" style={{ ariaHidden: true }} />
          </PagerLink>
        </PagerItem>
        <PagerItem disabled={disabled}>
          <PagerLink {...current} href="#">
            1
          </PagerLink>
        </PagerItem>
        <PagerItem disabled={disabled}>
          <PagerLink {...current} next href="#">
            <Icon icon="it-chevron-right" style={{ ariaHidden: true }} />
          </PagerLink>
        </PagerItem>
      </PagerList>
    </Pager>
  )
}

storiesOf('Componenti/Pager', module)
  .addDecorator(withA11y)
  .add(
    'Esempi',
    withInfo({
      text: Esempi
    })(EsempiComponent)
  )
  .add(
    'Stato disabilitato e attivo',
    withInfo({
      text: StatoDisabilitatoAttivo
    })(StatoDisabilitatoAttivoComponent)
  )
  .add(
    'Allineamento',
    withInfo({
      text: Allineamento
    })(AllineamentoComponent)
  )
  .addParameters({ viewport: { defaultViewport: 'iphone6' } })
  .add(
    'Responsive',
    withInfo({
      text: Responsive
    })(ResponsiveComponent)
  )
  .addDecorator(withKnobs)
  .add(
    'Esempi interattivi',
    withInfo({
      text: EsempiInterattivi
    })(EsempiInterattiviComponent)
  )

storiesOf('Componenti/Pager/Funzioni aggiuntive', module)
  .addDecorator(withA11y)
  .add(
    'More',
    withInfo({
      text: More
    })(MoreComponent)
  )
  .add(
    'Page changer',
    withInfo({
      text: Changer,
      propTablesExclude: []
    })(ChangerComponent)
  )
  .add(
    'Jump to page',
    withInfo({
      text: Jump,
      propTablesExclude: [Form, FormGroup, Input, Label]
    })(JumpComponent)
  )
  .add(
    'Simple mode',
    withInfo({
      text: Simple
    })(SimpleComponent)
  )
  .add(
    'Link testuali',
    withInfo({
      text: Link
    })(LinkComponent)
  )
  .add(
    'Total number',
    withInfo({
      text: Total
    })(TotalComponent)
  )
