import React from 'react'

import Esempi from './docs/example.md'

import { CookieBar, CookieBarButtons, CookieBarButton } from '../../src'

const CookieBarComponent = ({ open }) => {
  if (!open) {
    return null
  }
  return (
    <CookieBar>
      <p>
        Questo sito utilizza cookie tecnici, analytics e di terze parti. <br />
        Proseguendo nella navigazione accetti l’utilizzo dei cookie.
      </p>
      <CookieBarButtons>
        <CookieBarButton href="#">
          Preferenze<span className="sr-only">cookies</span>
        </CookieBarButton>
        <CookieBarButton>
          Accetto<span className="sr-only"> i cookies</span>
        </CookieBarButton>
      </CookieBarButtons>
    </CookieBar>
  )
}

export default {
  title: 'Componenti/Cookiebar'
}

export const ComeUsarlo = () => <CookieBarComponent />

ComeUsarlo.args = {
  open: true
}
