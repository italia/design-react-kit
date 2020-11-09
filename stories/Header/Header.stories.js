import React from 'react'

import {
  // Components to exclude from the table
  Button,
  Collapse,
  Icon,
  Nav,
  NavItem,
  NavLink,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  // Components to include
  Header,
  HeaderContent,
  HeaderLinkZone,
  HeaderRightZone,
  HeaderBrand,
  HeaderSearch,
  HeaderSocialsZone,
  HeaderToggler
} from '../../src'

import SlimHeaderBasic from './SlimHeader/basic'
import SlimHeaderFull from './SlimHeader/basic-full-responsive'
import CenterHeaderBasic from './CenterHeader/basic'
import NavHeaderBasic from './NavHeader/basic'
import CompleteHeaderBasic, {
  SlimHeader,
  CenterHeader,
  NavHeader
} from './CompleteHeader/basic'

import Introduction from './Introduction'

import SlimBasicDoc from './SlimHeader/basic.md'
import SlimFullDoc from './SlimHeader/basic-full-responsive.md'
import CenterBasicDoc from './CenterHeader/basic.md'
import NavBasicDoc from './NavHeader/basic.md'
import CompleteBasicDoc from './CompleteHeader/basic.md'

export default {
  title: 'Componenti/Header',

  parameters: {
    options: {
      showPanel: false
    }
  },
  args: {
    theme: ''
  },
  argTypes: {
    theme: {
      control: {
        type: 'select',
        options: { default: '', light: 'light' }
      }
    }
  }
}

export const Introduzione = () => <Introduction />

export const HeaderSlim = SlimHeaderBasic

HeaderSlim.story = {
  name: 'Header slim'
}
HeaderSlim.args = {
  isOpen: false,
  brandText: 'Ente appartenenza/Owner'
}

export const HeaderSlimWithFullButton = SlimHeaderFull

HeaderSlimWithFullButton.story = {
  name: 'Header slim with full button'
}

export const HeaderCenter = CenterHeaderBasic

HeaderCenter.story = {
  name: 'Header center'
}
HeaderCenter.args = {
  isSmall: false
}

export const HeaderNav = NavHeaderBasic

HeaderNav.story = {
  name: 'Header nav'
}
HeaderNav.args = {
  isOpen: false
}

export const HeaderComplete = CompleteHeaderBasic
HeaderComplete.args = {
  slimHeaderType: 'default',
  sticky: false
}
HeaderComplete.argTypes = {
  slimHeaderType: {
    control: {
      type: 'select',
      options: ['default', 'Full responsive']
    }
  }
}
