import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Header } from '../../src';

import SlimHeaderBasic from './SlimHeader/basic';
import SlimHeaderFull from './SlimHeader/basic-full-responsive';
import CenterHeaderBasic from './CenterHeader/basic';
import NavHeaderBasic from './NavHeader/basic';
import CompleteHeaderBasic from './CompleteHeader/basic';
import NavHeaderSecondary from './NavHeaderSecondary/NavHeaderSecondary';

import Introduction from './Introduction';

const meta: Meta = {
  title: 'Componenti/Header',
  component: Header
};
export default meta;

export const Introduzione = () => <Introduction />;

type ThemeType = {
  theme: string;
};
type HeaderSlimProps = ThemeType & {
  isOpen: boolean;
  brandText: string;
};
export const _HeaderSlim: Story<HeaderSlimProps> = SlimHeaderBasic.bind({});
_HeaderSlim.args = {
  theme: '',
  isOpen: false,
  brandText: 'Ente appartenenza/Owner'
};
_HeaderSlim.argTypes = {
  theme: {
    name: 'Tema',
    control: {
      type: 'select',
      options: ['', 'dark', 'light']
    }
  }
};

export const _SlimHeaderWithFullButton: Story<ThemeType> = SlimHeaderFull.bind(
  {}
);

_SlimHeaderWithFullButton.args = {
  theme: ''
};

_SlimHeaderWithFullButton.argTypes = {
  theme: {
    control: {
      type: 'select',
      options: ['', 'dark', 'light']
    }
  }
};

type HeaderCenterProps = ThemeType & {
  isSmall: boolean;
  type: string;
};
export const _HeaderCenter: Story<HeaderCenterProps> = CenterHeaderBasic.bind(
  {}
);

_HeaderCenter.args = {
  theme: '',
  isSmall: false,
  type: 'center'
};

_HeaderCenter.argTypes = {
  theme: {
    control: {
      type: 'select',
      options: ['', 'dark', 'light']
    }
  }
};

type HeaderNavProps = ThemeType & {
  isOpen: boolean;
};

export const _HeaderNav: Story<HeaderNavProps> = NavHeaderBasic.bind({});

_HeaderNav.parameters = {
  options: {
    showPanel: false
  }
};
_HeaderNav.args = {
  theme: '',
  isOpen: false
};

_HeaderNav.argTypes = {
  theme: {
    control: {
      type: 'select',
      options: ['', 'dark', 'light']
    }
  }
};

export const _HeaderNavSecondary: Story<ThemeType> = NavHeaderSecondary.bind(
  {}
);
_HeaderNavSecondary.args = {
  theme: ''
};

type HeaderCompleteProps = ThemeType & {
  slimHeaderType: string;
  sticky: boolean;
};

export const _HeaderComplete: Story<HeaderCompleteProps> = CompleteHeaderBasic.bind(
  {}
);
_HeaderComplete.args = {
  theme: '',
  slimHeaderType: 'default',
  sticky: false
};
_HeaderComplete.argTypes = {
  slimHeaderType: {
    control: {
      type: 'select',
      options: ['default', 'Full responsive']
    }
  },
  theme: {
    control: {
      type: 'select',
      options: ['', 'dark', 'light']
    }
  }
};

type HeaderSlimLightProps = Omit<HeaderSlimProps, 'isOpen'> & {
  brandText: string;
};
export const _HeaderSlimLight: Story<HeaderSlimLightProps> = SlimHeaderBasic.bind(
  {}
);
_HeaderSlimLight.args = {
  theme: 'light',
  brandText: 'Ente appartenenza/Owner'
};

type CenterHeaderBasicProps = HeaderCenterProps & {
  brandText: string;
};
export const _HeaderCenterNarrow: Story<CenterHeaderBasicProps> = CenterHeaderBasic.bind(
  {}
);
_HeaderCenterNarrow.args = {
  theme: '',
  type: 'center',
  brandText: 'Ente appartenenza/Owner',
  isSmall: true
};
export const _HeaderCenterNarrowLight: Story<CenterHeaderBasicProps> = CenterHeaderBasic.bind(
  {}
);
_HeaderCenterNarrowLight.args = {
  theme: 'light',
  type: 'center',
  brandText: 'Ente appartenenza/Owner',
  isSmall: true
};
export const _HeaderNavLight: Story<HeaderNavProps> = NavHeaderBasic.bind({});
_HeaderNavLight.args = {
  theme: 'light'
};
export const _HeaderCompleteLight: Story<HeaderCompleteProps> = CompleteHeaderBasic.bind(
  {}
);
_HeaderCompleteLight.args = {
  theme: 'light',
  slimHeaderType: 'default',
  sticky: false
};
