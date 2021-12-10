import ComponenteMenuInline from './ComponenteMenuInline';
import PosizionamentoFondoPagina from './PosizionamentoFondoPagina';
import PosizionamentoTestaAlla from './PosizionamentoTestaAlla';
import ComponenteVersioneScura from './VersioneScura';

export default {
  title: 'Componenti/Navscroll'
};

export const PosizionamentoAFondoPaginaConLineaASinistra = PosizionamentoFondoPagina.bind(
  {}
);

PosizionamentoAFondoPaginaConLineaASinistra.storyName =
  'Posizionamento a fondo pagina con linea a sinistra';

export const PosizionamentoInTestaAllaPaginaConLineaADestra = PosizionamentoTestaAlla.bind(
  {}
);

PosizionamentoInTestaAllaPaginaConLineaADestra.storyName =
  'Posizionamento in testa alla pagina con linea a destra';

export const MenuInline = ComponenteMenuInline.bind({});
MenuInline.storyName = 'Menu inline';

export const VersioneScura = ComponenteVersioneScura.bind({});
VersioneScura.storyName = 'Variante scura';
