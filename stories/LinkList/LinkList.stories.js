import React from 'react'
import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

import {
  LinkList,
  LinkListItem,
  Toggle,
  Input,
  Label,
  FormGroup,
  Collapse,
  Icon,
  NavItem,
  NavLink,
  Navbar
} from '../../src'

import LinkListCollapsibleExample from './LinkListCollapsibleExample'

import Esempi from './docs/Esempi.md'
import StatoAttivo from './docs/StatoAttivo.md'
import StatoDisabilitato from './docs/StatoDisabilitato.md'
import HeaderDivider from './docs/HeaderDivider.md'
import Large from './docs/Large.md'
import Multiline from './docs/Multiline.md'
import Controlli from './docs/Controlli.md'
import ControlliSecondari from './docs/ControlliSecondari.md'
import ControlliPrimariSecondari from './docs/ControlliPrimariSecondari.md'
import Avatar from './docs/Avatar.md'
import Switch from './docs/Switch.md'
import Checkbox from './docs/Checkbox.md'
import Navigation from './docs/Navigation.md'
import Collapsible from './docs/Collapsible.md'
import Titolo from './docs/Titolo.md'

const EsempiComponent = () => (
  <LinkList>
    <LinkListItem>
      <span>Link list 1</span>
    </LinkListItem>
    <LinkListItem>
      <span>Link list 2</span>
    </LinkListItem>
    <LinkListItem>
      <span>Link list 3</span>
    </LinkListItem>
  </LinkList>
)

const StatoAttivoComponent = () => (
  <LinkList>
    <LinkListItem>
      <span>Link list 1</span>
    </LinkListItem>
    <LinkListItem active>
      <span>Link list 2 active</span>
    </LinkListItem>
    <LinkListItem>
      <span>Link list 3</span>
    </LinkListItem>
  </LinkList>
)

const StatoDisabilitatoComponent = () => (
  <LinkList>
    <LinkListItem>
      <span>Link list 1</span>
    </LinkListItem>
    <LinkListItem disabled>
      <span>Link list 2 disabled</span>
    </LinkListItem>
    <LinkListItem>
      <span>Link list 3</span>
    </LinkListItem>
  </LinkList>
)

const HeaderDividerComponent = () => (
  <section>
    <LinkList>
      <LinkListItem header>Heading senza link</LinkListItem>
      <LinkListItem>
        <span>Link list 1</span>
      </LinkListItem>
      <LinkListItem>
        <span>Link list 2</span>
      </LinkListItem>
      <LinkListItem>
        <span>Link list 3</span>
      </LinkListItem>
      <LinkListItem divider />
      <LinkListItem>
        <span>Link list 4</span>
      </LinkListItem>
    </LinkList>

    <LinkList>
      <LinkListItem header href="#">
        Heading con link
      </LinkListItem>
      <LinkListItem>
        <span>Link list 1</span>
      </LinkListItem>
      <LinkListItem>
        <span>Link list 2</span>
      </LinkListItem>
      <LinkListItem>
        <span>Link list 3</span>
      </LinkListItem>
      <LinkListItem divider />
      <LinkListItem>
        <span>Link list 4</span>
      </LinkListItem>
    </LinkList>
  </section>
)

const LargeComponent = () => (
  <LinkList>
    <LinkListItem header href="#">
      Heading
    </LinkListItem>
    <LinkListItem size="large">
      <span>Link list 1</span>
    </LinkListItem>
    <LinkListItem size="large">
      <span>Link list 2</span>
    </LinkListItem>
    <LinkListItem size="large">
      <span>Link list 3</span>
    </LinkListItem>
    <LinkListItem divider />
    <LinkListItem size="large">
      <span>Link list 4</span>
    </LinkListItem>
  </LinkList>
)

const MultilineComponent = () => (
  <LinkList multiline>
    <LinkListItem active className="right-icon">
      <span>Link list 1 active</span>
      <i className="it-chevron-right right" />
      <Icon
        className="icon-right"
        color="primary"
        icon="it-chevron-right"
        style={{ ariaHidden: true }}
      />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit…</p>
    </LinkListItem>
    <LinkListItem divider />
    <LinkListItem className="right-icon">
      <span>Link list 2</span>
      <i className="it-chevron-right right" />
      <Icon
        className="icon-right"
        color="primary"
        icon="it-chevron-right"
        style={{ ariaHidden: true }}
      />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit…</p>
    </LinkListItem>
    <LinkListItem divider />
    <LinkListItem disabled className="right-icon">
      <span>Link list 3 disabled</span>
      <i className="it-chevron-right right" />{' '}
      <Icon
        className="icon-right"
        color="primary"
        icon="it-chevron-right"
        style={{ ariaHidden: true }}
      />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit…</p>
    </LinkListItem>
  </LinkList>
)

const ControlliComponent = () => (
  <LinkList>
    <LinkListItem active className="left-icon">
      <i className="it-chevron-right left" aria-hidden="true" />
      <Icon
        className="left"
        color="primary"
        icon="it-chevron-right"
        style={{ ariaHidden: true }}
      />
      <span>Link list 1 active</span>
    </LinkListItem>
    <LinkListItem className="left-icon">
      <i className="it-chevron-right left" aria-hidden="true" />
      <Icon
        className="left"
        color="primary"
        icon="it-chevron-right"
        style={{ ariaHidden: true }}
      />
      <span>Link list 2</span>
    </LinkListItem>
    <LinkListItem disabled className="left-icon">
      <i className="it-chevron-right left" aria-hidden="true" />
      <Icon
        className="left"
        color="primary"
        icon="it-chevron-right"
        style={{ ariaHidden: true }}
      />
      <span>Link list 3 disabled</span>
    </LinkListItem>
  </LinkList>
)

const ControlliSecondariComponent = () => (
  <LinkList>
    <LinkListItem active className="right-icon">
      <span>Link list 1 active</span>
      <i className="it-app right secondary" />
      <Icon
        className="icon-right"
        color="primary"
        icon="it-link"
        style={{ ariaHidden: true }}
      />
    </LinkListItem>
    <LinkListItem className="right-icon">
      <span>Link list 2</span>
      <i className="it-app right secondary" />
      <Icon
        className="icon-right"
        color="primary"
        icon="it-link"
        style={{ ariaHidden: true }}
      />
    </LinkListItem>
    <LinkListItem disabled className="right-icon">
      <span>Link list 3 disabled</span>
      <i className="it-app right secondary" />
      <Icon
        className="icon-right"
        color="primary"
        icon="it-link"
        style={{ ariaHidden: true }}
      />
    </LinkListItem>
  </LinkList>
)

const ControlliPrimariSecondariComponent = () => (
  <LinkList>
    <LinkListItem active className="left-icon right-icon">
      <i className="it-favorite left" />
      <Icon
        className="left"
        color="primary"
        icon="it-link"
        style={{ ariaHidden: true }}
      />
      <span>Link list 1 active</span>
      <i className="it-app right secondary" />
      <Icon
        className="right"
        color="secondary"
        icon="it-chevron-right"
        style={{ ariaHidden: true }}
      />
    </LinkListItem>
    <LinkListItem className="left-icon right-icon">
      <i className="it-favorite left" />
      <Icon
        className="left"
        color="primary"
        icon="it-link"
        style={{ ariaHidden: true }}
      />
      <span>Link list 2</span>
      <i className="it-app right secondary" />
      <Icon
        className="right"
        color="secondary"
        icon="it-chevron-right"
        style={{ ariaHidden: true }}
      />
    </LinkListItem>
    <LinkListItem disabled className="left-icon right-icon">
      <i className="it-favorite left" />
      <Icon
        className="left"
        color="primary"
        icon="it-link"
        style={{ ariaHidden: true }}
      />
      <span>Link list 3 disabled</span>
      <i className="it-app right secondary" />
      <Icon
        className="right"
        color="secondary"
        icon="it-chevron-right"
        style={{ ariaHidden: true }}
      />
    </LinkListItem>
  </LinkList>
)

const AvatarComponent = () => (
  <LinkList>
    <LinkListItem active>
      <img
        className="avatar lg-size"
        src="http://via.placeholder.com/40x40"
        title="avatartitle"
        alt="avataralt"
      />
      <span>Link list 1 active </span>
    </LinkListItem>
    <LinkListItem>
      <img
        className="avatar lg-size"
        src="http://via.placeholder.com/40x40"
        title="avatartitle"
        alt="avataralt"
      />
      <span>Link list 2 </span>
    </LinkListItem>
    <LinkListItem disabled>
      <img
        className="avatar lg-size"
        src="http://via.placeholder.com/40x40"
        title="avatartitle"
        alt="avataralt"
      />
      <span>Link list 3 disabled </span>
    </LinkListItem>
  </LinkList>
)

const SwitchComponent = () => (
  <LinkList>
    <LinkListItem tag="div" active>
      <Toggle label="Label per toggle" />
    </LinkListItem>
    <LinkListItem tag="div" disabled>
      <Toggle disabled label="Label per disabled toggle" />
    </LinkListItem>
  </LinkList>
)

const CheckboxComponent = () => (
  <LinkList>
    <LinkListItem tag="div" active>
      <FormGroup check className="form-check-group">
        <Input id="checkbox1" type="checkbox" defaultChecked />
        <Label for="checkbox1" check>
          Checkbox selezionato
        </Label>
      </FormGroup>
    </LinkListItem>
    <LinkListItem tag="div" active>
      <FormGroup check className="form-check-group">
        <Input id="checkbox2" type="checkbox" />
        <Label for="checkbox2" check>
          Checkbox non selezionato
        </Label>
      </FormGroup>
    </LinkListItem>
    <LinkListItem tag="div" disabled>
      <FormGroup check className="form-check-group">
        <Input id="checkbox3" type="checkbox" disabled />
        <Label for="checkbox3" check>
          Checkbox disabilitato non selezionato
        </Label>
      </FormGroup>
    </LinkListItem>
  </LinkList>
)

const NavigationComponent = () => (
  <LinkList>
    <LinkListItem size="medium" className="right-icon">
      <span>Link list 1 </span>
      <i className="it-favorite right" />
      <Icon icon="it-link" color="primary" className="right" />
    </LinkListItem>
    <LinkListItem size="medium" className="right-icon">
      <span>Link list 2 </span>
      <i className="it-favorite right" />
      <Icon icon="it-link" color="primary" className="right" />
    </LinkListItem>
    <LinkList sublist>
      <LinkListItem>
        <span>Link list 4 </span>
      </LinkListItem>
      <LinkListItem>
        <span>Link list 5 </span>
      </LinkListItem>
      <LinkListItem>
        <span>Link list 6 </span>
      </LinkListItem>
    </LinkList>
    <LinkListItem size="medium" className="right-icon">
      <span>Link list 3 </span>
      <i className="it-favorite right" />
      <Icon icon="it-link" color="primary" className="right" />
    </LinkListItem>
  </LinkList>
)

const NavigationMenuWithTitle = () => {
  return (
    <div className="sticky-wrapper navbar-wrapper">
      <Navbar expand="lg" className="it-navscroll-wrapper it-top-navscroll">
        <div className="menu-wrapper">
          <LinkList
            wrapperClassName="menu-link-list"
            header={<h3 className="no_toc">Indice della pagina</h3>}>
            <NavItem>
              <NavLink href="#cos-e">
                <span>Cos&#39;è</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#luogo">
                <span>Luogo</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#date-e-orari">
                <span>Date e orari</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#costi">
                <span>Costi</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#documenti">
                <span>Documenti</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contatti">
                <span>Contatti</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#appuntamenti">
                <span>Appuntamenti</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#ulteriori-informazioni">
                <span>Ulteriori informazioni</span>
              </NavLink>
            </NavItem>
          </LinkList>
        </div>
      </Navbar>
    </div>
  )
}

storiesOf('Componenti/LinkList', module)
  .addDecorator(withA11y)
  .add(
    'Esempi',
    withInfo({
      text: Esempi
    })(EsempiComponent)
  )
  .add(
    'Stato Attivo',
    withInfo({
      text: StatoAttivo
    })(StatoAttivoComponent)
  )
  .add(
    'Stato Disabilitato',
    withInfo({
      text: StatoDisabilitato
    })(StatoDisabilitatoComponent)
  )
  .add(
    'Header e Divider',
    withInfo({
      text: HeaderDivider
    })(HeaderDividerComponent)
  )
  .add(
    'Sizing',
    withInfo({
      text: Large
    })(LargeComponent)
  )
  .add(
    'Titolo lista',
    withInfo({
      text: Titolo
    })(NavigationMenuWithTitle)
  )

storiesOf('Componenti/LinkList.Multiline', module)
  .addDecorator(withA11y)
  .add(
    'Esempio Multiline',
    withInfo({
      text: Multiline
    })(MultilineComponent)
  )

storiesOf('Componenti/LinkList.Con controlli', module)
  .addDecorator(withA11y)
  .add(
    'Primary Action',
    withInfo({
      text: Controlli
    })(ControlliComponent)
  )
  .add(
    'Secondary Action',
    withInfo({
      text: ControlliSecondari
    })(ControlliSecondariComponent)
  )
  .add(
    'Primary e Secondary Action',
    withInfo({
      text: ControlliPrimariSecondari
    })(ControlliPrimariSecondariComponent)
  )
  .add(
    'Con avatar',
    withInfo({
      text: Avatar
    })(AvatarComponent)
  )
  .add(
    'Con switch',
    withInfo({
      text: Switch
    })(SwitchComponent)
  )
  .add(
    'Con checkbox',
    withInfo({
      text: Checkbox
    })(CheckboxComponent)
  )

storiesOf('Componenti/LinkList.Nested navigation', module)
  .addDecorator(withA11y)
  .add(
    'Fixed',
    withInfo({
      text: Navigation
    })(NavigationComponent)
  )
  .add(
    'Collapsible',
    withInfo({
      text: Collapsible,
      propTables: [Collapse, LinkList, LinkListItem],
      propTablesExclude: []
    })(LinkListCollapsibleExample)
  )
