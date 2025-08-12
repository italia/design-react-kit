import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import {
  Header,
  HeaderBrand,
  HeaderContent,
  HeaderProps,
  HeaderRightZone,
  HeaderSearch,
  HeaderSocialsZone,
  Icon
} from '../../../src';

const meta: Meta = {
  title: 'Documentazione/Menu di navigazione/Header/Center',
  component: Header,
  parameters: {
    docs: {
      controls: {
        exclude: ['isOpen', 'className', 'type', 'small', 'testId']
      }
    }
  }
};
export default meta;

type Story = StoryObj<HeaderProps>;

export const CenterHeaderBasic: Story = {
  render: ({ theme, small }) => (
    <Header type='center' theme={theme} small={small}>
      <HeaderContent>
        <HeaderBrand iconName='it-code-circle' iconAlt='it code circle icon'>
          <h2>Lorem Ipsum Lorem Ipsum</h2>
          <h3>Inserire qui la tag line</h3>
        </HeaderBrand>
        <HeaderRightZone>
          <HeaderSocialsZone label='Seguici su'>
            <ul>
              <li>
                <a href='#' aria-label='Facebook' target='_blank'>
                  <Icon icon='it-facebook' />
                </a>
              </li>
              <li>
                <a href='#' aria-label='Github' target='_blank'>
                  <Icon icon='it-github' />
                </a>
              </li>
              <li>
                <a href='#' aria-label='Twitter' target='_blank'>
                  <Icon icon='it-twitter' />
                </a>
              </li>
            </ul>
          </HeaderSocialsZone>
          <HeaderSearch label='Cerca' iconName='it-search' />
        </HeaderRightZone>
      </HeaderContent>
    </Header>
  ),
  args: {
    theme: '',
    small: false
  },
  argTypes: {
    theme: {
      control: 'radio',
      options: ['', 'light', 'dark']
    }
  }
};

export const HeaderCenterNarrow = {
  ...CenterHeaderBasic,
  args: {
    theme: '',
    small: true
  }
};
