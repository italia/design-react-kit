import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Dropdown, DropdownMenu, DropdownToggle, Form, FormGroup, Icon, Input, Label, LinkList, LinkListItem, Pager, PagerItem, PagerLink } from '../../src';

const meta: Meta<typeof Pager> = {
  title: "Documentazione/Componenti/Pager",
  component: Pager,
};

export default meta;

type Story = StoryObj<typeof Pager>;

export const Esempi: Story = {
  render: () => (
    <Pager aria-label='Esempio di navigazione'>
      <PagerItem>
        <PagerLink previous href='#'>
          <Icon icon='it-chevron-left' aria-hidden />
        </PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink href='#'>1</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink href='#'>2</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink href='#'>3</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink next href='#'>
          <Icon icon='it-chevron-right' aria-hidden />
        </PagerLink>
      </PagerItem>
    </Pager>
  )
};

export const StatoDisabilitatoEAttivo: Story = {
  render: () => (
    <Pager aria-label='Esempio di navigazione'>
      <PagerItem disabled>
        <PagerLink previous href='#'>
          <Icon icon='it-chevron-left' aria-hidden />
        </PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink aria-current='page' href='#'>
          1
        </PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink href='#'>2</PagerLink>
      </PagerItem>
      <PagerItem disabled>
        <PagerLink href='#'>3</PagerLink>
      </PagerItem>
      <PagerItem disabled>
        <PagerLink next href='#'>
          <Icon icon='it-chevron-right' aria-hidden />
        </PagerLink>
      </PagerItem>
    </Pager>
  )
};

export const Allineamento: Story = {
  render: () => (
    <section>
      <Pager className='justify-content-center' aria-label='Esempio di navigazione'>
        <PagerItem disabled>
          <PagerLink previous href='#'>
            <Icon icon='it-chevron-left' aria-hidden />
          </PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink aria-current='page' href='#'>
            1
          </PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink href='#'>2</PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink href='#'>3</PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink next href='#'>
            <Icon icon='it-chevron-right' aria-hidden />
          </PagerLink>
        </PagerItem>
      </Pager>

      <Pager className='justify-content-end' aria-label='Esempio di navigazione'>
        <PagerItem disabled>
          <PagerLink previous href='#'>
            <Icon icon='it-chevron-left' aria-hidden />
          </PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink aria-current='page' href='#'>
            1
          </PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink href='#'>2</PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink href='#'>3</PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink next href='#'>
            <Icon icon='it-chevron-right' aria-hidden />
          </PagerLink>
        </PagerItem>
      </Pager>
    </section>
  )
};

export const Responsive: Story = {
  render: () => (
    <Pager aria-label='Esempio di navigazione'>
      <PagerItem>
        <PagerLink previous href='#'>
          <Icon icon='it-chevron-left' aria-hidden />
        </PagerLink>
      </PagerItem>
      <PagerItem className='d-sm-block'>
        <PagerLink href='#'>9</PagerLink>
      </PagerItem>
      <PagerItem className='d-sm-block'>
        <PagerLink href='#'>10</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink aria-current='page' href='#'>
          <span className='d-sm-none'>Pagina&nbsp;</span>11
        </PagerLink>
      </PagerItem>
      <PagerItem className='d-sm-block'>
        <PagerLink href='#'>12</PagerLink>
      </PagerItem>
      <PagerItem className='d-sm-block'>
        <PagerLink href='#'>13</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink next href='#'>
          <Icon icon='it-chevron-right' aria-hidden />
        </PagerLink>
      </PagerItem>
    </Pager>
  )
};

export const MoreComponent: Story = {
  render: () => (
    <Pager className='mb-3' aria-label='Esempio di paginazione'>
      <PagerItem>
        <PagerLink previous href='#'>
          <Icon icon='it-chevron-left' aria-hidden />
        </PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>1</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink tag='span'>…</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>24</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>25</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink aria-current='page' href='#'>
          26
        </PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>27</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>28</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink tag='span'>…</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>50</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink next href='#'>
          <Icon icon='it-chevron-right' aria-hidden />
        </PagerLink>
      </PagerItem>
    </Pager>
  )
};

export const PageChanger: Story = {
  render: () => (
    <Pager className='mb-3' aria-label='Esempio di paginazione'>
      <PagerItem>
        <PagerLink previous href='#'>
          <Icon icon='it-chevron-left' aria-hidden />
        </PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>1</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink tag='span'>…</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>24</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>25</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink aria-current='page' href='#'>
          26
        </PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>27</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>28</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink tag='span'>…</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>50</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink next href='#'>
          <Icon icon='it-chevron-right' aria-hidden />
        </PagerLink>
      </PagerItem>
      <Dropdown>
        <DropdownToggle id='pagerChanger' aria-label='Salta alla pagina' caret>
          10/pagina
          <Icon className='icon icon-primary icon-sm' icon='it-expand' />
        </DropdownToggle>
        <DropdownMenu>
          <LinkList>
            <LinkListItem active>pag. 10</LinkListItem>
            <LinkListItem>pag. 20</LinkListItem>
            <LinkListItem>pag. 30</LinkListItem>
            <LinkListItem>pag. 40</LinkListItem>
            <LinkListItem>pag. 50</LinkListItem>
          </LinkList>
        </DropdownMenu>
      </Dropdown>
    </Pager>
  )
};

export const JumpToPage: Story = {
  render: () => (
    <Pager className='mb-3' aria-label='Esempio di paginazione'>
      <PagerItem>
        <PagerLink previous href='#'>
          <Icon icon='it-chevron-left' aria-hidden />
        </PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>1</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink tag='span'>…</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>24</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>25</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink aria-current='page' href='#'>
          26
        </PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>27</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>28</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink tag='span'>…</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>50</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink next href='#'>
          <Icon icon='it-chevron-right' aria-hidden />
        </PagerLink>
      </PagerItem>
      <Form>
        <FormGroup>
          <Input id='jumpToPage' type='text' className='form-control' maxLength={2} />
          <Label for='jumpToPage'>Vai a ...</Label>
        </FormGroup>
      </Form>
    </Pager>
  )
};

export const SimpleMode: Story = {
  render: () => (
    <Pager className='mb-3' aria-label='Esempio di paginazione'>
      <PagerItem disabled>
        <PagerLink previous href='#'>
          <Icon icon='it-chevron-left' aria-hidden />
        </PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink tag='span'>1</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink tag='span'>/</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink tag='span'>5</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink next href='#'>
          <Icon icon='it-chevron-right' aria-hidden />
        </PagerLink>
      </PagerItem>
    </Pager>
  )
};

export const LinkTestuali: Story = {
  render: () => (
    <Pager className='mb-3' aria-label='Esempio di paginazione'>
      <PagerItem>
        <PagerLink previous href='#' className='text'>
          Precedente
        </PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>1</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink tag='span'>…</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>24</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>25</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink aria-current='page' href='#'>
          26
        </PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>27</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>28</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink tag='span'>…</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>50</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink next href='#' className='text'>
          Successiva
        </PagerLink>
      </PagerItem>
    </Pager>
  )
};

export const TotalNumber: Story = {
  render: () => (
    <Pager total={{ ariaLabel: 'Pagina', label: ' 24 di 50' }} aria-label='Esempio di paginazione'>
      <PagerItem>
        <PagerLink previous href='#'>
          <Icon icon='it-chevron-left' aria-hidden />
        </PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>1</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink tag='span'>…</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink aria-current='page' href='#'>
          24
        </PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>25</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink href='#'>26</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>27</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>28</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink tag='span'>…</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>50</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink next href='#'>
          <Icon icon='it-chevron-right' aria-hidden />
        </PagerLink>
      </PagerItem>
    </Pager>
  )
};
