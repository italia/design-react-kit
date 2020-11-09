import React from 'react'

import {
  Pager,
  PagerList,
  PagerItem,
  PagerLink,
  Form,
  FormGroup,
  Icon,
  Input,
  Label
} from '../../src'
import PageChangerExample from './PageChangerExample'

import More from './docs/More.md'
import Changer from './docs/Changer.md'
import Jump from './docs/Jump.md'
import Simple from './docs/Simple.md'
import Link from './docs/Link.md'
import Total from './docs/Total.md'

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

const ChangerComponent = () => (
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
    <PageChangerExample />
  </Pager>
)

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

export default {
  title: 'Componenti/Pager/Funzioni aggiuntive'
}

export const _More = MoreComponent

export const PageChanger = ChangerComponent

PageChanger.story = {
  name: 'Page changer'
}

export const JumpToPage = JumpComponent

JumpToPage.story = {
  name: 'Jump to page'
}

export const SimpleMode = SimpleComponent

SimpleMode.story = {
  name: 'Simple mode'
}

export const LinkTestuali = LinkComponent

LinkTestuali.story = {
  name: 'Link testuali'
}

export const TotalNumber = TotalComponent

TotalNumber.story = {
  name: 'Total number'
}
