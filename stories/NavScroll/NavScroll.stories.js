import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

import MenuInline from './docs/MenuInline.md'
import PosizionamentoFondo from './docs/PosizionamentoFondo.md'
import PosizionamentoTesta from './docs/PosizionamentoTestaAlla.md'
import ComponenteMenuInline from './ComponenteMenuInline'
import PosizionamentoFondoPagina from './PosizionamentoFondoPagina'
import PosizionamentoTestaAlla from './PosizionamentoTestaAlla'

storiesOf('Componenti/NavScroll', module)
  .addDecorator(withA11y)
  .add(
    'Posizionamento a fondo pagina con linea a sinistra',
    withInfo({
      text: PosizionamentoFondo,
      propTables: [PosizionamentoFondoPagina]
    })(PosizionamentoFondoPagina)
  )
  .add(
    'Posizionamento in testa alla pagina con linea a destra',
    withInfo({
      text: PosizionamentoTesta,
      propTables: [PosizionamentoTestaAlla]
    })(PosizionamentoTestaAlla)
  )
  .add(
    'Menu Inline',
    withInfo({
      text: MenuInline,
      propTables: [ComponenteMenuInline]
    })(ComponenteMenuInline)
  )
