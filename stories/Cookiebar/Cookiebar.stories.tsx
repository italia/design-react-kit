import { Story } from '@storybook/react';
import React from 'react';

import { CookieBar, CookieBarButtons, CookieBarButton } from '../../src';

type ComeUsarloProps = {
  open: boolean;
};
export const ComeUsarlo: Story<ComeUsarloProps> = ({ open }) => {
  return (
    <CookieBar style={{ display: open ? 'block' : 'none' }}>
      <p>
        Questo sito utilizza cookie tecnici, analytics e di terze parti. <br />
        Proseguendo nella navigazione accetti l’utilizzo dei cookie.
      </p>
      <CookieBarButtons>
        <CookieBarButton href='#'>
          Preferenze<span className='visually-hidden'>cookies</span>
        </CookieBarButton>
        <CookieBarButton>
          Accetto<span className='visually-hidden'> i cookies</span>
        </CookieBarButton>
      </CookieBarButtons>
    </CookieBar>
  );
};

export default {
  title: 'Componenti/Cookiebar'
};

ComeUsarlo.args = {
  open: true
};
