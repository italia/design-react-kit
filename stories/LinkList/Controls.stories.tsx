import React from 'react';

import { LinkList, LinkListItem, Toggle, Input, Label, FormGroup, Icon } from '../../src';

const ControlliComponent = () => (
  <LinkList>
    <LinkListItem active className='icon-left'>
      <LinkListItem.TitleIconWrapper>
        <Icon color='primary' icon='it-chevron-right' aria-hidden />
        <span>Link list 1 active</span>
      </LinkListItem.TitleIconWrapper>
    </LinkListItem>
    <LinkListItem className='icon-left'>
      <LinkListItem.TitleIconWrapper>
        <Icon color='primary' icon='it-chevron-right' aria-hidden />
        <span>Link list 2</span>
      </LinkListItem.TitleIconWrapper>
    </LinkListItem>
    <LinkListItem disabled className='icon-left'>
      <LinkListItem.TitleIconWrapper>
        <Icon color='primary' icon='it-chevron-right' aria-hidden />
        <span>Link list 3 disabled</span>
      </LinkListItem.TitleIconWrapper>
    </LinkListItem>
  </LinkList>
);

const ControlliSecondariComponent = () => (
  <LinkList>
    <LinkListItem active className='icon-right'>
      <LinkListItem.TitleIconWrapper>
        <span>Link list 1 active</span>
        <Icon color='primary' icon='it-link' aria-hidden />
      </LinkListItem.TitleIconWrapper>
    </LinkListItem>
    <LinkListItem className='icon-right'>
      <LinkListItem.TitleIconWrapper>
        <span>Link list 2</span>
        <Icon color='primary' icon='it-link' aria-hidden />
      </LinkListItem.TitleIconWrapper>
    </LinkListItem>
    <LinkListItem disabled className='icon-right'>
      <LinkListItem.TitleIconWrapper>
        <span>Link list 3 disabled</span>
        <Icon color='primary' icon='it-link' aria-hidden />
      </LinkListItem.TitleIconWrapper>
    </LinkListItem>
  </LinkList>
);

export const PrimaryESecondaryAction = () => (
  <LinkList>
    <LinkListItem active className='icon-right'>
      <LinkListItem.TitleIconWrapper>
        <span>Link list 1 active</span>
        <Icon color='primary' icon='it-link' aria-hidden />
      </LinkListItem.TitleIconWrapper>
    </LinkListItem>
    <LinkListItem className='icon-right'>
      <LinkListItem.TitleIconWrapper>
        <span>Link list 2</span>
        <Icon color='primary' icon='it-link' aria-hidden />
      </LinkListItem.TitleIconWrapper>
    </LinkListItem>
    <LinkListItem disabled className='icon-right'>
      <LinkListItem.TitleIconWrapper>
        <span>Link list 3 disabled</span>
        <Icon color='primary' icon='it-link' aria-hidden />
      </LinkListItem.TitleIconWrapper>
    </LinkListItem>
  </LinkList>
);

export const ConAvatar = () => (
  <LinkList>
    <LinkListItem active>
      <img className='avatar lg-size' src='http://via.placeholder.com/40x40' title='avatartitle' alt='avataralt' />
      <span>Link list 1 active </span>
    </LinkListItem>
    <LinkListItem>
      <img className='avatar lg-size' src='http://via.placeholder.com/40x40' title='avatartitle' alt='avataralt' />
      <span>Link list 2 </span>
    </LinkListItem>
    <LinkListItem disabled>
      <img className='avatar lg-size' src='http://via.placeholder.com/40x40' title='avatartitle' alt='avataralt' />
      <span>Link list 3 disabled </span>
    </LinkListItem>
  </LinkList>
);

export const ConSwitch = () => (
  <LinkList>
    <LinkListItem tag='div' active>
      <Toggle label='Label per toggle' />
    </LinkListItem>
    <LinkListItem tag='div' disabled>
      <Toggle disabled label='Label per disabled toggle' />
    </LinkListItem>
  </LinkList>
);

export const ConCheckbox = () => (
  <LinkList>
    <LinkListItem tag='div' active>
      <FormGroup check className='form-check-group'>
        <Input id='checkbox1' type='checkbox' defaultChecked />
        <Label for='checkbox1' check>
          Checkbox selezionato
        </Label>
      </FormGroup>
    </LinkListItem>
    <LinkListItem tag='div' active>
      <FormGroup check className='form-check-group'>
        <Input id='checkbox2' type='checkbox' />
        <Label for='checkbox2' check>
          Checkbox non selezionato
        </Label>
      </FormGroup>
    </LinkListItem>
    <LinkListItem tag='div' disabled>
      <FormGroup check className='form-check-group'>
        <Input id='checkbox3' type='checkbox' disabled />
        <Label for='checkbox3' check>
          Checkbox disabilitato non selezionato
        </Label>
      </FormGroup>
    </LinkListItem>
  </LinkList>
);

export default {
  title: 'Componenti/LinkList/Con controlli'
};

export const PrimaryAction = ControlliComponent;

export const SecondaryAction = ControlliSecondariComponent;

PrimaryESecondaryAction.storyName = 'Primary e Secondary Action';

ConAvatar.storyName = 'Con avatar';

ConSwitch.storyName = 'Con switch';

ConCheckbox.storyName = 'Con checkbox';
