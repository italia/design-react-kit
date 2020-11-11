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
  component: Header,
  args: {
    theme: ''
  },
  argTypes: {
    theme: {
      name: 'Tema',
      control: {
        type: 'select',
        options: ['', 'dark', 'light']
      }
    }
  }
}

export const Introduzione = () => <Introduction />

export const HeaderSlim = SlimHeaderBasic

HeaderSlim.story = {
  name: 'Header slim'
}
HeaderSlim.story.args = {
  theme: '',
  isOpen: false,
  brandText: 'Ente appartenenza/Owner'
}

HeaderSlim.argTypes = {
  theme: {
    name: 'Tema',
    control: {
      type: 'select',
      options: ['', 'dark', 'light']
    }
  }
}

export const SlimHeaderWithFullButton = SlimHeaderFull

SlimHeaderWithFullButton.story = {
  name: 'Header slim with full button'
}

SlimHeaderWithFullButton.args = {
  theme: ''
}

SlimHeaderWithFullButton.argTypes = {
  theme: {
    control: {
      type: 'select',
      options: ['', 'dark', 'light']
    }
  }
}

export const HeaderCenter = CenterHeaderBasic

HeaderCenter.story = {
  name: 'Header center'
}
HeaderCenter.args = {
  theme: '',
  isSmall: false
}

HeaderCenter.argTypes = {
  theme: {
    control: {
      type: 'select',
      options: ['', 'dark', 'light']
    }
  }
}

export const HeaderNav = NavHeaderBasic

HeaderNav.story = {
  name: 'Header nav',
  parameters: {
    options: {
      showPanel: false
    }
  }
}
HeaderNav.args = {
  theme: '',
  isOpen: false
}

HeaderNav.argTypes = {
  theme: {
    control: {
      type: 'select',
      options: ['', 'dark', 'light']
    }
  }
}

export const HeaderComplete = CompleteHeaderBasic
HeaderComplete.args = {
  theme: '',
  slimHeaderType: 'default',
  sticky: false
}
HeaderComplete.argTypes = {
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
}
