import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';

import { Nav, NavItem, NavLink, TabContent, TabPane } from '../../src';

import TabExample from './TabExample';
import TabButtonExample from './TabButtonExample';

import Esempi from './docs/Esempi.md';
import Contenuto from './docs/Contenuto.md';
import Icone from './docs/Icone.md';
import IconeTesto from './docs/IconeTesto.md';
import TabBottoni from './docs/TabBottoni.md';
import AllineamentoVerticale from './docs/AllineamentoVerticale.md';

const EsempiComponent = () => (
  <div>
    <Nav tabs className="mb-3">
      <NavItem>
        <NavLink href="#" active>
          Link Attivo
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#" disabled>
          Link disabilitato
        </NavLink>
      </NavItem>
    </Nav>

    <Nav tabs className="nav-dark">
      <NavItem>
        <NavLink href="#" active>
          Link Attivo
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#" disabled>
          Link disabilitato
        </NavLink>
      </NavItem>
    </Nav>
  </div>
);

export default {
  title: 'Componenti/Tab',
  decorators: [withA11y],
};

export const _Esempi = withInfo({
  text: Esempi,
})(EsempiComponent);

export const _Contenuto = withInfo({
  text: Contenuto,
  propTables: [Nav, NavItem, NavLink, TabContent, TabPane],
  propTablesExclude: [TabExample],
})(() => <TabExample text />);

export const _Icone = withInfo({
  text: Icone,
  propTables: [Nav, NavItem, NavLink, TabContent, TabPane],
  propTablesExclude: [TabExample],
})(() => <TabExample icons />);

export const IconeETesto = withInfo({
  text: IconeTesto,
  propTables: [Nav, NavItem, NavLink, TabContent, TabPane],
  propTablesExclude: [TabExample],
})(() => <TabExample text icons />);

IconeETesto.story = {
  name: 'Icone e testo',
};

export const TabABottoni = withInfo({
  text: TabBottoni,
  propTables: [Nav, NavItem, NavLink, TabContent, TabPane],
  propTablesExclude: [TabButtonExample],
})(() => <TabButtonExample />);

TabABottoni.story = {
  name: 'Tab a bottoni',
};

export const _AllineamentoVerticale = withInfo({
  text: AllineamentoVerticale,
  propTables: [Nav, NavItem, NavLink, TabContent, TabPane],
  propTablesExclude: [TabButtonExample],
})(() => <TabButtonExample vertical />);
