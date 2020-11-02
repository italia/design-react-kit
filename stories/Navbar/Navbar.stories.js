import React from 'react';
import { withKnobs, select, color } from '@storybook/addon-knobs/react';
import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  NavbarToggler,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  LinkList,
  LinkListItem,
} from '../../src';

import NavbarExample from './NavbarExample';
import NavbarDropdownExample from './NavbarDropdownExample';
import NavbarMegamenuExample from './NavbarMegamenuExample';
import NavbarInlineExample from './NavbarInlineExample';

import Esempi from './docs/Esempi.md';
import Dropdown from './docs/Dropdown.md';
import Megamenu from './docs/Megamenu.md';
import Inline from './docs/Inline.md';
import EsempiInterattivi from './docs/EsempiInterattivi.md';

const EsempiInterattiviComponent = () => {
  const variations = ['', 'primary', 'dark'];
  const variation = select('Variazioni', variations, variations[0]);
  const selectedColor = color('Color', '#e3f2fd');
  const placements = ['', 'top', 'bottom'];
  const placement = select('Posizionamento', placements, placements[0]);

  return (
    <Navbar
      light
      expand="lg"
      fixed={placement}
      sticky={placement}
      className={`bg-${variation}`}
      style={{ backgroundColor: selectedColor }}
    >
      <NavbarBrand href="#">Brand</NavbarBrand>
    </Navbar>
  );
};

export default {
  title: 'Componenti/Navbar',
  decorators: [withA11y, withKnobs],
};

export const _Esempi = withInfo({
  text: Esempi,
  propTables: [Navbar, NavbarToggler, Collapse, Nav, NavItem, NavLink],
  propTablesExclude: [NavbarExample],
})(NavbarExample);

export const ConDropdown = withInfo({
  text: Dropdown,
  propTables: [
    Navbar,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
  ],
  propTablesExclude: [NavbarExample],
})(NavbarDropdownExample);

export const ConMegamenuInProgress = withInfo({
  text: Megamenu,
  propTables: [
    Navbar,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    LinkList,
    LinkListItem,
  ],
  propTablesExclude: [NavbarExample],
})(NavbarMegamenuExample);

ConMegamenuInProgress.story = {
  name: 'Con Megamenu (in progress)',
};

export const InlineMenu = withInfo({
  text: Inline,
  propTables: [LinkList, LinkListItem, Collapse],
  propTablesExclude: [NavbarInlineExample],
})(NavbarInlineExample);

InlineMenu.story = {
  name: 'Inline Menù',
};

export const _EsempiInterattivi = withInfo({
  text: EsempiInterattivi,
})(EsempiInterattiviComponent);

_EsempiInterattivi.story = {
  name: 'Esempi interattivi',
};
