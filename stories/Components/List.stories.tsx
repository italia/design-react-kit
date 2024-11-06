import React from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { Icon, List, ListItem } from '../../src';

const meta: Meta<typeof List> = {
  title: 'Documentazione/Organizzare i contenuti/Liste',
  component: List
};

export default meta;

type Story = StoryObj<typeof ListItem>;

const ListaTemplate: Story = {
  render: ({ ...args }) => (
    <List>
      <ListItem {...args}>
        <span className='text'>Testo</span>
      </ListItem>
      <ListItem tag={'a'} {...args}>
        <span className='text'>Link</span>
      </ListItem>
      <ListItem active tag={'a'} {...args}>
        <span className='text'>Link attivo</span>
      </ListItem>
    </List>
  )
};

export const ListaSemplice: Story = {
  ...ListaTemplate
};

export const ListaAvatar: Story = {
  ...ListaTemplate,
  args: {
    avatar: <img src='https://randomuser.me/api/portraits/women/41.jpg' alt='Anna Barbieri' />
  }
};

export const ListaIcona: Story = {
  ...ListaTemplate,
  args: {
    icon: <Icon icon='it-folder' />
  }
};

export const ListaImmagine: Story = {
  ...ListaTemplate,
  args: {
    img: <img src='https://placehold.jp/40x40.png' alt='descrizione immagine' />
  }
};

export const ListaFreccia: Story = {
  render: () => (
    <List>
      <ListItem>
        <span className='text'>Testo</span>
        <Icon icon='it-chevron-right' title='Freccia destra' />
      </ListItem>
      <ListItem href="#">
        <span className='text'>Link</span>
        <Icon icon='it-chevron-right' title='Freccia destra' />
      </ListItem>
      <ListItem active href="#">
        <span className='text'>Link attivo</span>
        <Icon icon='it-chevron-right' title='Freccia destra' />
      </ListItem>
    </List>
  )
};

export const ListaAzioniMultiple: Story = {
  render: () => (
    <List>
      <ListItem>
        <span className='text'>Testo</span>
        <ListItem.MultipleAction>
          <a href='#' aria-label='Testo - Azione 1'>
            <Icon icon='it-code-circle' title='Codice' />
          </a>
          <a href='#' aria-label='Testo - Azione 2'>
            <Icon icon='it-code-circle' title='Codice' />
          </a>
          <a href='#' aria-label='Testo - Azione 3'>
            <Icon icon='it-code-circle' title='Codice' />
          </a>
        </ListItem.MultipleAction>
      </ListItem>
      <ListItem>
        <a href='#'>
          <span className='text'>Link</span>
        </a>
        <ListItem.MultipleAction>
          <a href='#' aria-label='Testo - Azione '>
            <Icon icon='it-code-circle' title='Codice' />
          </a>
          <a href='#' aria-label='Testo - Azione '>
            <Icon icon='it-code-circle' title='Codice' />
          </a>
          <a href='#' aria-label='Testo - Azione '>
            <Icon icon='it-code-circle' title='Codice' />
          </a>
        </ListItem.MultipleAction>
      </ListItem>
      <ListItem active>
        <a href='#'>
          <span className='text'>Link attivo</span>
        </a>
        <ListItem.MultipleAction>
          <a href='#' aria-label='Testo - Azione '>
            <Icon icon='it-code-circle' title='Codice' />
          </a>
          <a href='#' aria-label='Testo - Azione '>
            <Icon icon='it-code-circle' title='Codice' />
          </a>
          <a href='#' aria-label='Testo - Azione '>
            <Icon icon='it-code-circle' title='Codice' />
          </a>
        </ListItem.MultipleAction>
      </ListItem>
    </List>
  ),
  parameters: {
    docs: {
      /**
       * Sostituisco nel sorgente MultipleAction con ListItem.MultipleAction
       * altrimenti non si capisce da dove si importa
       */
      source: { transform: (code: string) => code.replaceAll('MultipleAction', 'ListItem.MultipleAction') }
    }
  }
};

export const ListaMetadata: Story = {
  render: ({ ...args }) => (
    <List>
      <ListItem {...args}>
        <span className='text'>Testo</span>
        <span className='metadata'>metadata testo</span>
      </ListItem>
      <ListItem {...args}>
        <span className='text'>Testo 2</span>
        <span className='metadata'>
          <a href='#'>metadata link</a>
        </span>
      </ListItem>
      <ListItem {...args}>
        <a href='#'>
          <span className='text'>Link</span>
        </a>
        <span className='metadata'>metadata testo</span>
      </ListItem>
      <ListItem {...args}>
        <a href='#'>
          <span className='text'>Link 2</span>
        </a>
        <span className='metadata'>
          <a href='#'>metadata link</a>
        </span>
      </ListItem>
      <ListItem active tag={'a'} {...args}>
        <span className='text'>Link attivo</span>
        <span className='metadata'>metadata testo</span>
      </ListItem>
      <ListItem active {...args}>
        <a href='#'>
          <span className='text'>Link attivo</span>
        </a>
        <span className='metadata'>
          <a href='#'>metadata link</a>
        </span>
      </ListItem>
    </List>
  ),
  args: {
    avatar: <img src='https://randomuser.me/api/portraits/women/41.jpg' alt='Anna Barbieri' />
  }
};

export const ListaTestoAzioniMultipleMetadata: Story = {
  render: () => (
    <List>
      <ListItem>
        <div className='text'>
          <h4 className='text m-0'>Testo</h4>
          <p className='small m-0'>Lorem ipsum dolor sit amet.</p>
        </div>
        <ListItem.MultipleAction>
          <span className='metadata'>metadata testo</span>
          <a href='#' aria-label='Testo - Azione '>
            <Icon icon='it-code-circle' title='Codice' />
          </a>
          <a href='#' aria-label='Testo - Azione '>
            <Icon icon='it-code-circle' title='Codice' />
          </a>
          <a href='#' aria-label='Testo - Azione '>
            <Icon icon='it-code-circle' title='Codice' />
          </a>
        </ListItem.MultipleAction>
      </ListItem>
      <ListItem>
        <div className='text'>
          <h4 className='text m-0'>Testo</h4>
          <p className='small m-0'>Lorem ipsum dolor sit amet.</p>
        </div>
        <ListItem.MultipleAction>
          <span className='metadata'>
            <a href='#'>metadata link</a>
          </span>
          <a href='#' aria-label='Testo - Azione '>
            <Icon icon='it-code-circle' title='Codice' />
          </a>
          <a href='#' aria-label='Testo - Azione '>
            <Icon icon='it-code-circle' title='Codice' />
          </a>
          <a href='#' aria-label='Testo - Azione '>
            <Icon icon='it-code-circle' title='Codice' />
          </a>
        </ListItem.MultipleAction>
      </ListItem>
      <ListItem>
        <div>
          <h4 className='text m-0'><a href='#'>Testo</a></h4>
          <p className='small m-0'>Lorem ipsum dolor sit amet.</p>
        </div>
        <ListItem.MultipleAction>
          <span className='metadata'>
            <a href='#'>metadata link</a>
          </span>
          <a href='#' aria-label='Testo - Azione '>
            <Icon icon='it-code-circle' title='Codice' />
          </a>
          <a href='#' aria-label='Testo - Azione '>
            <Icon icon='it-code-circle' title='Codice' />
          </a>
          <a href='#' aria-label='Testo - Azione '>
            <Icon icon='it-code-circle' title='Codice' />
          </a>
        </ListItem.MultipleAction>
      </ListItem>
      <ListItem active>
        <div>
          <h4 className='text m-0'><a href='#'>Testo</a></h4>
          <p className='small m-0'>Lorem ipsum dolor sit amet.</p>
        </div>
        <ListItem.MultipleAction>
          <span className='metadata'>metadata testo</span>
          <a href='#' aria-label='Testo - Azione '>
            <Icon icon='it-code-circle' title='Codice' />
          </a>
          <a href='#' aria-label='Testo - Azione '>
            <Icon icon='it-code-circle' title='Codice' />
          </a>
          <a href='#' aria-label='Testo - Azione '>
            <Icon icon='it-code-circle' title='Codice' />
          </a>
        </ListItem.MultipleAction>
      </ListItem>
    </List>
  ),
  parameters: {
    docs: {
      /**
       * Sostituisco nel sorgente MultipleAction con ListItem.MultipleAction
       * altrimenti non si capisce da dove si importa
       */
      source: { transform: (code: string) => code.replaceAll('MultipleAction', 'ListItem.MultipleAction') }
    }
  }
};
