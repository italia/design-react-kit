import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs/react'
import {
  Icon,
  Button,
  Collapse,
  LinkList,
  LinkListItem,
  Navbar,
  NavItem,
  NavLink,
  NavbarToggler,
  Scrollspy
} from '../../src'

import MenuInline from './docs/MenuInline.md'
import PosizionamentoFondo from './docs/PosizionamentoFondo.md'
import PosizionamentoTesta from './docs/PosizionamentoTestaAlla.md'
import ComponenteMenuInline from './ComponenteMenuInline'
import PosizionamentoFondoPagina from './PosizionamentoFondoPagina'
import PosizionamentoTestaAlta from './PosizionamentoTestaAlta'

storiesOf('Componenti/NavScroll', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add(
    'Posizionamento a fondo pagina con linea a sinistra',
    withInfo({
      text: PosizionamentoFondo,
      propTables: [
        Icon,
        Button,
        Collapse,
        LinkList,
        Navbar,
        NavItem,
        NavLink,
        NavbarToggler,
        Scrollspy
      ]
    })(PosizionamentoFondoPagina)
  )
  .add(
    'Posizionamento in testa alla pagina con linea a destra',
    withInfo({
      text: PosizionamentoTesta,
      propTables: [
        Icon,
        Button,
        Collapse,
        LinkList,
        Navbar,
        NavItem,
        NavLink,
        NavbarToggler,
        Scrollspy
      ]
    })(PosizionamentoTestaAlta)
  )
  .add(
    'Menu Inline',
    withInfo({
      text: MenuInline,
      propTables: [Icon, LinkList, LinkListItem]
    })(ComponenteMenuInline)
  )
