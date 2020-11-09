import React from 'react'

import { Pager, PagerList, PagerItem, PagerLink, Icon } from '../../src'

import Esempi from './docs/Esempi.md'
import StatoDisabilitatoAttivo from './docs/StatoDisabilitatoAttivo.md'
import Allineamento from './docs/Allineamento.md'
import Responsive from './docs/Responsive.md'
import EsempiInterattivi from './docs/EsempiInterattivi.md'

const EsempiComponent = () => (
  <Pager>
    <PagerList>
      <PagerItem>
        <PagerLink previous href="#">
          <Icon icon="it-chevron-left" style={{ ariaHidden: true }} />
        </PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink href="#">1</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink href="#">2</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink href="#">3</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink next href="#">
          <Icon icon="it-chevron-right" style={{ ariaHidden: true }} />
        </PagerLink>
      </PagerItem>
    </PagerList>
  </Pager>
)

const StatoDisabilitatoAttivoComponent = () => (
  <Pager>
    <PagerList>
      <PagerItem disabled>
        <PagerLink previous href="#">
          <Icon icon="it-chevron-left" style={{ ariaHidden: true }} />
        </PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink aria-current="page" href="#">
          1
        </PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink href="#">2</PagerLink>
      </PagerItem>
      <PagerItem disabled>
        <PagerLink href="#">3</PagerLink>
      </PagerItem>
      <PagerItem disabled>
        <PagerLink next href="#">
          <Icon icon="it-chevron-right" style={{ ariaHidden: true }} />
        </PagerLink>
      </PagerItem>
    </PagerList>
  </Pager>
)

const AllineamentoComponent = () => (
  <section>
    <Pager size="sm" className="justify-content-center mb-3">
      <PagerList>
        <PagerItem disabled>
          <PagerLink previous href="#">
            <Icon icon="it-chevron-left" style={{ ariaHidden: true }} />
          </PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink aria-current="page" href="#">
            1
          </PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink href="#">2</PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink href="#">3</PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink next href="#">
            <Icon icon="it-chevron-right" style={{ ariaHidden: true }} />
          </PagerLink>
        </PagerItem>
      </PagerList>
    </Pager>

    <Pager size="sm" className="justify-content-end mb-3">
      <PagerList>
        <PagerItem disabled>
          <PagerLink previous href="#">
            <Icon icon="it-chevron-left" style={{ ariaHidden: true }} />
          </PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink aria-current="page" href="#">
            1
          </PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink href="#">2</PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink href="#">3</PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink next href="#">
            <Icon icon="it-chevron-right" style={{ ariaHidden: true }} />
          </PagerLink>
        </PagerItem>
      </PagerList>
    </Pager>
  </section>
)

const ResponsiveComponent = () => (
  <Pager className="mb-3">
    <PagerList>
      <PagerItem>
        <PagerLink previous href="#">
          <Icon icon="it-chevron-left" style={{ ariaHidden: true }} />
        </PagerLink>
      </PagerItem>
      <PagerItem className="d-sm-block">
        <PagerLink href="#">9</PagerLink>
      </PagerItem>
      <PagerItem className="d-sm-block">
        <PagerLink href="#">10</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink aria-current="page" href="#">
          <span className="d-sm-none">Pagina&nbsp;</span>11
        </PagerLink>
      </PagerItem>
      <PagerItem className="d-sm-block">
        <PagerLink href="#">12</PagerLink>
      </PagerItem>
      <PagerItem className="d-sm-block">
        <PagerLink href="#">13</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink next href="#">
          <Icon icon="it-chevron-right" style={{ ariaHidden: true }} />
        </PagerLink>
      </PagerItem>
    </PagerList>
  </Pager>
)

const EsempiInterattiviComponent = () => {
  const active = boolean('Attivo', false)
  const disabled = boolean('Disabilitato', false)
  const sizes = ['sm', '', 'lg']
  const size = select('Dimensioni', sizes, sizes[0])

  let current = {}
  if (active) {
    current = {
      'aria-current': 'page'
    }
  }
  return (
    <Pager size={size}>
      <PagerList>
        <PagerItem disabled={disabled}>
          <PagerLink {...current} previous href="#">
            <Icon icon="it-chevron-left" style={{ ariaHidden: true }} />
          </PagerLink>
        </PagerItem>
        <PagerItem disabled={disabled}>
          <PagerLink {...current} href="#">
            1
          </PagerLink>
        </PagerItem>
        <PagerItem disabled={disabled}>
          <PagerLink {...current} next href="#">
            <Icon icon="it-chevron-right" style={{ ariaHidden: true }} />
          </PagerLink>
        </PagerItem>
      </PagerList>
    </Pager>
  )
}

export default {
  title: 'Componenti/Pager',

  parameters: {
    viewport: { defaultViewport: 'iphone6' }
  }
}

export const _Esempi = EsempiComponent

export const StatoDisabilitatoEAttivo = StatoDisabilitatoAttivoComponent

StatoDisabilitatoEAttivo.story = {
  name: 'Stato disabilitato e attivo'
}

export const _Allineamento = AllineamentoComponent

export const _Responsive = ResponsiveComponent

export const _EsempiInterattivi = EsempiInterattiviComponent

_EsempiInterattivi.story = {
  name: 'Esempi interattivi'
}
