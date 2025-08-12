import { Meta } from '@storybook/react-vite';
import React from 'react';
import {
  AvatarGroupContainer,
  AvatarIcon,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  Icon,
  LinkList,
  LinkListItem
} from '../../../src';

const meta: Meta<typeof AvatarGroupContainer> = {
  title: 'Documentazione/Componenti/Avatar/Groups Overlapping',
  component: AvatarGroupContainer
};

export default meta;

export const SmallOverlappingAvatars = () => {
  return (
    <AvatarGroupContainer>
      <li>
        <AvatarIcon size='sm' href='#'>
          <img src='https://randomuser.me/api/portraits/women/12.jpg' alt='Arianna Rossi' />
        </AvatarIcon>
      </li>
      <li>
        <AvatarIcon size='sm' href='#'>
          <img src='https://randomuser.me/api/portraits/men/13.jpg' alt='Giulio Neri' />
        </AvatarIcon>
      </li>
      <li>
        <AvatarIcon size='sm' color='primary' href='#'>
          <p aria-hidden='true'>A</p>
          <span className='visually-hidden'>Andrea Gallo</span>
        </AvatarIcon>
      </li>
      <li>
        <AvatarIcon size='sm' color='secondary' href='#'>
          <p aria-hidden='true'>S</p>
          <span className='visually-hidden'>Sara Ghioni</span>
        </AvatarIcon>
      </li>
      <li>
        <AvatarIcon size='sm' color='green' href='#'>
          <p aria-hidden='true'>T</p>
          <span className='visually-hidden'>Tomasso Sordi</span>
        </AvatarIcon>
      </li>
      <li>
        <AvatarIcon size='sm' color='orange' href='#'>
          <p aria-hidden='true'>B</p>
          <span className='visually-hidden'>Barbera Tosi</span>
        </AvatarIcon>
      </li>
      <li>
        <AvatarIcon size='sm' color='red' href='#'>
          <p aria-hidden='true'>R</p>
          <span className='visually-hidden'>Roberto Milano</span>
        </AvatarIcon>
      </li>
      <li>
        <AvatarIcon size='sm' href='#'>
          <Icon icon='it-search' />
        </AvatarIcon>
      </li>
      <li>
        <AvatarIcon size='sm' color='dropdown'>
          <Dropdown>
            <DropdownToggle id='dropdownMenuLink'>
              <span className='visually-hidden'>Visualizza altri 4 utenti</span>
              <span aria-hidden='true'>+4</span>
            </DropdownToggle>
            <DropdownMenu>
              <LinkList>
                <LinkListItem inDropdown>
                  <AvatarIcon size='sm'>
                    <img src='https://randomuser.me/api/portraits/men/46.jpg' alt='Mario Rossi' />
                  </AvatarIcon>
                  <span>Mario Rossi</span>
                </LinkListItem>
                <LinkListItem inDropdown>
                  <AvatarIcon size='sm' color='green'>
                    <p aria-hidden='true'>A</p>
                  </AvatarIcon>
                  <span>Arianna Gello</span>
                </LinkListItem>
                <LinkListItem inDropdown>
                  <AvatarIcon size='sm' color='primary'>
                    <p aria-hidden='true'>S</p>
                  </AvatarIcon>
                  <span>Sara Ghioni</span>
                </LinkListItem>
                <LinkListItem inDropdown>
                  <AvatarIcon size='sm'>
                    <Icon icon='it-search' />
                  </AvatarIcon>
                  <span>Antonio Esposito</span>
                </LinkListItem>
              </LinkList>
            </DropdownMenu>
          </Dropdown>
        </AvatarIcon>
      </li>
    </AvatarGroupContainer>
  );
};

export const MediumOverlaidAvatars = () => {
  return (
    <AvatarGroupContainer>
      <li>
        <AvatarIcon size='md' href='#'>
          <img src='https://randomuser.me/api/portraits/women/12.jpg' alt='Arianna Rossi' />
        </AvatarIcon>
      </li>
      <li>
        <AvatarIcon size='md' href='#'>
          <img src='https://randomuser.me/api/portraits/men/13.jpg' alt='Giulio Neri' />
        </AvatarIcon>
      </li>
      <li>
        <AvatarIcon size='md' color='orange' href='#'>
          <p aria-hidden='true'>B</p>
          <span className='visually-hidden'>Barbera Tosi</span>
        </AvatarIcon>
      </li>
      <li>
        <AvatarIcon size='md' color='red' href='#'>
          <p aria-hidden='true'>R</p>
          <span className='visually-hidden'>Roberto Milano</span>
        </AvatarIcon>
      </li>
      <li>
        <AvatarIcon size='md' href='#'>
          <Icon icon='it-search' />
        </AvatarIcon>
      </li>
      <li>
        <AvatarIcon size='md' color='dropdown'>
          <Dropdown>
            <DropdownToggle id='dropdownMenuLink2'>
              <span className='visually-hidden'>Visualizza altri 4 utenti</span>
              <span aria-hidden='true'>+4</span>
            </DropdownToggle>
            <DropdownMenu>
              <LinkListItem inDropdown>
                <AvatarIcon size='md'>
                  <img src='https://randomuser.me/api/portraits/men/46.jpg' alt='Mario Rossi' />
                </AvatarIcon>
                <span>Mario Rossi</span>
              </LinkListItem>
              <LinkListItem inDropdown>
                <AvatarIcon size='md' color='green'>
                  <p aria-hidden='true'>A</p>
                </AvatarIcon>
                <span>Arianna Gello</span>
              </LinkListItem>
              <LinkListItem inDropdown>
                <AvatarIcon size='md' color='primary'>
                  <p aria-hidden='true'>S</p>
                </AvatarIcon>
                <span>Sara Ghioni</span>
              </LinkListItem>
              <LinkListItem inDropdown>
                <AvatarIcon size='md'>
                  <Icon icon='it-search' />
                </AvatarIcon>
                <span>Antonio Esposito</span>
              </LinkListItem>
            </DropdownMenu>
          </Dropdown>
        </AvatarIcon>
      </li>
    </AvatarGroupContainer>
  );
};
