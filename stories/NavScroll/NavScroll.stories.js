import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';

import MenuInline from './docs/MenuInline.md';
import PosizionamentoFondo from './docs/PosizionamentoFondo.md';
import PosizionamentoTesta from './docs/PosizionamentoTestaAlla.md';
import ComponenteMenuInline from './ComponenteMenuInline';
import PosizionamentoFondoPagina from './PosizionamentoFondoPagina';
import PosizionamentoTestaAlla from './PosizionamentoTestaAlla';

export default {
  title: 'Componenti/NavScroll',
  decorators: [withA11y],
};

export const PosizionamentoAFondoPaginaConLineaASinistra = withInfo({
  text: PosizionamentoFondo,
  propTables: [PosizionamentoFondoPagina],
})(() => <PosizionamentoFondoPagina />);

PosizionamentoAFondoPaginaConLineaASinistra.story = {
  name: 'Posizionamento a fondo pagina con linea a sinistra',
};

export const PosizionamentoInTestaAllaPaginaConLineaADestra = withInfo({
  text: PosizionamentoTesta,
  propTables: [PosizionamentoTestaAlla],
})(() => <PosizionamentoTestaAlla />);

PosizionamentoInTestaAllaPaginaConLineaADestra.story = {
  name: 'Posizionamento in testa alla pagina con linea a destra',
};

export const _MenuInline = withInfo({
  text: MenuInline,
  propTables: [ComponenteMenuInline],
})(() => <ComponenteMenuInline />);
