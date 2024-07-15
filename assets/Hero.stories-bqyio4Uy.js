var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
import { R as React } from "./index-C-_iGYWo.js";
import { c as classNames } from "./index-xoeSAV6i.js";
import { C as Container } from "./Container-DhalTljb.js";
import { R as Row, C as Col } from "./Col-CM3Y6KlU.js";
import { B as Button } from "./Button-vuvwJGEz.js";
import { C as Card } from "./Card-BbLD9VPT.js";
import { C as CardBody, a as CardText } from "./CardText-BXch16fi.js";
import { C as CardTitle } from "./CardTitle-M54T_6p1.js";
import { C as CardSignature, a as CardReadMore } from "./CardSignature-D0_8Er1M.js";
const Hero = ({
  tag: Tag = "div",
  small,
  centered,
  overlay,
  overlap,
  className,
  testId,
  ...attributes
}) => {
  const classes = classNames("it-hero-wrapper", className, {
    "it-overlay": overlay,
    ["it-" + overlay]: overlay,
    "it-hero-small-size": small,
    "it-text-centered": centered,
    "it-bottom-overlapping-content": overlap
  });
  return /* @__PURE__ */ React.createElement(Tag, { className: classes, ...attributes, "data-testid": testId });
};
Hero.__docgenInfo = { "description": "", "methods": [], "displayName": "Hero", "props": { "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati", "defaultValue": { "value": "'div'", "computed": false } }, "small": { "required": false, "tsType": { "name": "boolean" }, "description": "Indica se il componente Hero deve ridurre l'altezza" }, "centered": { "required": false, "tsType": { "name": "boolean" }, "description": "Indica al componente Hero di centrare i contenuti testuali orizzontalmente" }, "overlay": { "required": false, "tsType": { "name": "union", "raw": "'dark' | 'primary' | 'filter'", "elements": [{ "name": "literal", "value": "'dark'" }, { "name": "literal", "value": "'primary'" }, { "name": "literal", "value": "'filter'" }] }, "description": "Da utilizzare per creare un testi in overlay su immagini, al fine di migliorare la leggibilità di testo" }, "overlap": { "required": false, "tsType": { "name": "boolean" }, "description": "Aggiunge margine negativo in fondo al componente Hero per creare una sovrapposizione con il contenuto seguente." }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const HeroBackground = ({ alt, testId, ...attributes }) => {
  return /* @__PURE__ */ React.createElement("div", { className: "img-responsive-wrapper", "data-testid": testId }, /* @__PURE__ */ React.createElement("div", { className: "img-responsive" }, /* @__PURE__ */ React.createElement("div", { className: "img-wrapper" }, /* @__PURE__ */ React.createElement("img", { ...attributes, alt }))));
};
HeroBackground.__docgenInfo = { "description": "", "methods": [], "displayName": "HeroBackground", "props": { "alt": { "required": true, "tsType": { "name": "string" }, "description": "Un testo alternativo per descrivere l'immagine mostrata" }, "src": { "required": true, "tsType": { "name": "string" }, "description": "L'URI dell'immagine da mostrare" }, "title": { "required": false, "tsType": { "name": "string" }, "description": "Il titolo dell'immagine" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const HeroBody = ({ children, className, testId }) => {
  const classes = classNames("it-hero-text-wrapper", "bg-dark", className);
  return /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, null, /* @__PURE__ */ React.createElement("div", { className: classes, "data-testid": testId }, children))));
};
HeroBody.__docgenInfo = { "description": "", "methods": [], "displayName": "HeroBody", "props": { "className": { "required": false, "tsType": { "name": "string" }, "description": "Eventuali classi aggiuntive" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const HeroButton = ({ wrapperClassName, testId, ...attributes }) => {
  const classes = classNames("it-btn-container", wrapperClassName);
  return /* @__PURE__ */ React.createElement("div", { className: classes, "data-testid": testId }, /* @__PURE__ */ React.createElement(Button, { size: "sm", ...attributes }));
};
HeroButton.__docgenInfo = { "description": "", "methods": [], "displayName": "HeroButton", "props": { "block": { "required": false, "tsType": { "name": "boolean" }, "description": "Quando abilitato, estende il componente Button fino a prendere tutta la larghezza disponibile" }, "outline": { "required": false, "tsType": { "name": "boolean" }, "description": "Utilizzarlo disabilitare il colore di sfondo, ed applicarlo invece al bordo." }, "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di componenti personalizzati" }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente Button" }, "cssModule": { "required": false, "tsType": { "name": "CSSModule" }, "description": "Oggetto contenente la nuova mappatura per le classi CSS." }, "innerRef": { "required": false, "tsType": { "name": "Ref", "elements": [{ "name": "HTMLButtonElement" }], "raw": "Ref<HTMLButtonElement>" }, "description": "" }, "icon": { "required": false, "tsType": { "name": "boolean" }, "description": "Da utilizzare si usa una icona nel contenuto del Button" }, "size": { "required": false, "tsType": { "name": "union", "raw": "'lg' | 'sm' | 'xs'", "elements": [{ "name": "literal", "value": "'lg'" }, { "name": "literal", "value": "'sm'" }, { "name": "literal", "value": "'xs'" }] }, "description": "Da utilizzare per le varianti di dimensione del componente Button" }, "close": { "required": false, "tsType": { "name": "boolean" }, "description": "Da utilizzare per i bottoni di chiusura all'interno di altri componenti (i.e. Chips, Modali, etc...)" }, "active": { "required": false, "tsType": { "name": "boolean" }, "description": "" }, "href": { "required": false, "tsType": { "name": "string" }, "description": "" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" }, "wrapperClassName": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["ButtonHTMLAttributes"] };
const HeroCategory = ({ className, testId, ...attributes }) => {
  const classes = classNames("it-category", className);
  return /* @__PURE__ */ React.createElement("span", { ...attributes, className: classes, "data-testid": testId });
};
HeroCategory.__docgenInfo = { "description": "", "methods": [], "displayName": "HeroCategory", "props": { "className": { "required": false, "tsType": { "name": "string" }, "description": "Eventuali classi aggiuntive per la categoria" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const HeroTitle = ({ tag: Tag = "h1", className, testId, ...attributes }) => {
  const classes = classNames(className);
  return /* @__PURE__ */ React.createElement(Tag, { ...attributes, className: classes, "data-testid": testId });
};
HeroTitle.__docgenInfo = { "description": "", "methods": [], "displayName": "HeroTitle", "props": { "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Indica il tag da utilizzare per il titolo", "defaultValue": { "value": "'h1'", "computed": false } }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const meta = {
  title: "Documentazione/Menu di navigazione/Hero",
  component: Hero
};
const HeroConSfondo = {
  render: () => /* @__PURE__ */ React.createElement(Hero, null, /* @__PURE__ */ React.createElement(HeroBackground, {
    src: "https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg",
    title: "image title",
    alt: "imagealt"
  }))
};
const HeroConSfondoSmall = {
  render: () => /* @__PURE__ */ React.createElement(Hero, {
    small: true
  }, /* @__PURE__ */ React.createElement(HeroBackground, {
    src: "https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg",
    title: "image title",
    alt: "imagealt"
  }))
};
const HeroConTesto = {
  render: () => /* @__PURE__ */ React.createElement(Hero, null, /* @__PURE__ */ React.createElement(HeroBody, null, /* @__PURE__ */ React.createElement(HeroCategory, null, "Category"), /* @__PURE__ */ React.createElement(HeroTitle, null, "Heading lorem ipsum dolor sit amet, consetetur sadipscing."), /* @__PURE__ */ React.createElement("p", {
    className: "d-none d-lg-block"
  }, "Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus."), /* @__PURE__ */ React.createElement(HeroButton, {
    outline: true,
    color: "primary"
  }, "Label button")))
};
const HeroConTestoCentrato = {
  render: () => /* @__PURE__ */ React.createElement(Hero, {
    centered: true
  }, /* @__PURE__ */ React.createElement(HeroBody, null, /* @__PURE__ */ React.createElement(HeroCategory, null, "Category"), /* @__PURE__ */ React.createElement(HeroTitle, null, "Heading lorem ipsum dolor sit amet, consetetur sadipscing."), /* @__PURE__ */ React.createElement("p", {
    className: "d-none d-lg-block"
  }, "Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus."), /* @__PURE__ */ React.createElement(HeroButton, {
    outline: true,
    color: "primary"
  }, "Label button")))
};
const HeroConTestoSuSfondo = {
  render: () => /* @__PURE__ */ React.createElement(Hero, {
    overlay: "dark"
  }, /* @__PURE__ */ React.createElement(HeroBackground, {
    src: "https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg",
    title: "image title",
    alt: "imagealt"
  }), /* @__PURE__ */ React.createElement(HeroBody, null, /* @__PURE__ */ React.createElement(HeroCategory, null, "Category"), /* @__PURE__ */ React.createElement(HeroTitle, null, "Heading lorem ipsum dolor sit amet, consetetur sadipscing."), /* @__PURE__ */ React.createElement("p", {
    className: "d-none d-lg-block"
  }, "Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus."), /* @__PURE__ */ React.createElement(HeroButton, {
    color: "secondary"
  }, "Label button")))
};
const HeroConTestoSuSfondoOverlayPrimario = {
  render: () => /* @__PURE__ */ React.createElement(Hero, {
    overlay: "primary"
  }, /* @__PURE__ */ React.createElement(HeroBackground, {
    src: "https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg",
    title: "image title",
    alt: "imagealt"
  }), /* @__PURE__ */ React.createElement(HeroBody, null, /* @__PURE__ */ React.createElement(HeroCategory, null, "Category"), /* @__PURE__ */ React.createElement(HeroTitle, null, "Heading lorem ipsum dolor sit amet, consetetur sadipscing."), /* @__PURE__ */ React.createElement("p", {
    className: "d-none d-lg-block"
  }, "Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus."), /* @__PURE__ */ React.createElement(HeroButton, {
    outline: true,
    color: "primary"
  }, "Label button")))
};
const HeroConSfondoOverlayFiltro = {
  render: () => /* @__PURE__ */ React.createElement(Hero, {
    overlay: "filter"
  }, /* @__PURE__ */ React.createElement(HeroBackground, {
    src: "https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg",
    title: "image title",
    alt: "imagealt"
  }))
};
const HeroConSfondoMargineNegativo = {
  render: () => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Hero, {
    overlap: true
  }, /* @__PURE__ */ React.createElement(HeroBackground, {
    src: "https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg",
    title: "image title",
    alt: "imagealt"
  }), /* @__PURE__ */ React.createElement(HeroBody, null, /* @__PURE__ */ React.createElement(HeroCategory, null, "Category"), /* @__PURE__ */ React.createElement(HeroTitle, null, "Heading lorem ipsum dolor sit amet, consetetur sadipscing."), /* @__PURE__ */ React.createElement("p", {
    className: "d-none d-lg-block"
  }, "Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus."), /* @__PURE__ */ React.createElement(HeroButton, {
    color: "secondary"
  }, "Label button"))), /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, null, /* @__PURE__ */ React.createElement(Card, {
    spacing: true,
    className: "card-bg"
  }, /* @__PURE__ */ React.createElement(CardBody, null, /* @__PURE__ */ React.createElement(CardTitle, {
    tag: "h5",
    className: "big-heading"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit…"), /* @__PURE__ */ React.createElement(CardText, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), /* @__PURE__ */ React.createElement(CardSignature, null, "di Federico De Paolis"), /* @__PURE__ */ React.createElement(CardReadMore, {
    text: "Leggi di più",
    iconName: "it-arrow-right"
  })))))))
};
HeroConSfondo.parameters = {
  ...HeroConSfondo.parameters,
  docs: {
    ...(_a = HeroConSfondo.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: () => <Hero>\n      <HeroBackground src='https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg' title='image title' alt='imagealt' />\n    </Hero>\n}",
      ...(_c = (_b = HeroConSfondo.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
HeroConSfondoSmall.parameters = {
  ...HeroConSfondoSmall.parameters,
  docs: {
    ...(_d = HeroConSfondoSmall.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  render: () => <Hero small>\n      <HeroBackground src='https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg' title='image title' alt='imagealt' />\n    </Hero>\n}",
      ...(_f = (_e = HeroConSfondoSmall.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
HeroConTesto.parameters = {
  ...HeroConTesto.parameters,
  docs: {
    ...(_g = HeroConTesto.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  render: () => <Hero>\n      <HeroBody>\n        <HeroCategory>Category</HeroCategory>\n        <HeroTitle>Heading lorem ipsum dolor sit amet, consetetur sadipscing.</HeroTitle>\n        <p className='d-none d-lg-block'>\n          Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo\n          donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.\n        </p>\n        <HeroButton outline color='primary'>\n          Label button\n        </HeroButton>\n      </HeroBody>\n    </Hero>\n}",
      ...(_i = (_h = HeroConTesto.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
HeroConTestoCentrato.parameters = {
  ...HeroConTestoCentrato.parameters,
  docs: {
    ...(_j = HeroConTestoCentrato.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  render: () => <Hero centered>\n      <HeroBody>\n        <HeroCategory>Category</HeroCategory>\n        <HeroTitle>Heading lorem ipsum dolor sit amet, consetetur sadipscing.</HeroTitle>\n        <p className='d-none d-lg-block'>\n          Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo\n          donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.\n        </p>\n        <HeroButton outline color='primary'>\n          Label button\n        </HeroButton>\n      </HeroBody>\n    </Hero>\n}",
      ...(_l = (_k = HeroConTestoCentrato.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
HeroConTestoSuSfondo.parameters = {
  ...HeroConTestoSuSfondo.parameters,
  docs: {
    ...(_m = HeroConTestoSuSfondo.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "{\n  render: () => <Hero overlay='dark'>\n      <HeroBackground src='https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg' title='image title' alt='imagealt' />\n      <HeroBody>\n        <HeroCategory>Category</HeroCategory>\n        <HeroTitle>Heading lorem ipsum dolor sit amet, consetetur sadipscing.</HeroTitle>\n        <p className='d-none d-lg-block'>\n          Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo\n          donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.\n        </p>\n        <HeroButton color='secondary'>Label button</HeroButton>\n      </HeroBody>\n    </Hero>\n}",
      ...(_o = (_n = HeroConTestoSuSfondo.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
HeroConTestoSuSfondoOverlayPrimario.parameters = {
  ...HeroConTestoSuSfondoOverlayPrimario.parameters,
  docs: {
    ...(_p = HeroConTestoSuSfondoOverlayPrimario.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: "{\n  render: () => <Hero overlay='primary'>\n      <HeroBackground src='https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg' title='image title' alt='imagealt' />\n      <HeroBody>\n        <HeroCategory>Category</HeroCategory>\n        <HeroTitle>Heading lorem ipsum dolor sit amet, consetetur sadipscing.</HeroTitle>\n        <p className='d-none d-lg-block'>\n          Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo\n          donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.\n        </p>\n        <HeroButton outline color='primary'>\n          Label button\n        </HeroButton>\n      </HeroBody>\n    </Hero>\n}",
      ...(_r = (_q = HeroConTestoSuSfondoOverlayPrimario.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
HeroConSfondoOverlayFiltro.parameters = {
  ...HeroConSfondoOverlayFiltro.parameters,
  docs: {
    ...(_s = HeroConSfondoOverlayFiltro.parameters) == null ? void 0 : _s.docs,
    source: {
      originalSource: "{\n  render: () => <Hero overlay='filter'>\n      <HeroBackground src='https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg' title='image title' alt='imagealt' />\n    </Hero>\n}",
      ...(_u = (_t = HeroConSfondoOverlayFiltro.parameters) == null ? void 0 : _t.docs) == null ? void 0 : _u.source
    }
  }
};
HeroConSfondoMargineNegativo.parameters = {
  ...HeroConSfondoMargineNegativo.parameters,
  docs: {
    ...(_v = HeroConSfondoMargineNegativo.parameters) == null ? void 0 : _v.docs,
    source: {
      originalSource: "{\n  render: () => <>\n      <Hero overlap>\n        <HeroBackground src='https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg' title='image title' alt='imagealt' />\n        <HeroBody>\n          <HeroCategory>Category</HeroCategory>\n          <HeroTitle>Heading lorem ipsum dolor sit amet, consetetur sadipscing.</HeroTitle>\n          <p className='d-none d-lg-block'>\n            Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo\n            donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.\n          </p>\n          <HeroButton color='secondary'>Label button</HeroButton>\n        </HeroBody>\n      </Hero>\n      <Container>\n        <Row>\n          <Col>\n            <Card spacing className='card-bg'>\n              <CardBody>\n                <CardTitle tag='h5' className='big-heading'>\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit…\n                </CardTitle>\n                <CardText>\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                  dolore magna aliqua.\n                </CardText>\n                <CardSignature>di Federico De Paolis</CardSignature>\n                <CardReadMore text='Leggi di più' iconName='it-arrow-right' />\n              </CardBody>\n            </Card>\n          </Col>\n        </Row>\n      </Container>\n    </>\n}",
      ...(_x = (_w = HeroConSfondoMargineNegativo.parameters) == null ? void 0 : _w.docs) == null ? void 0 : _x.source
    }
  }
};
const __namedExportsOrder = ["HeroConSfondo", "HeroConSfondoSmall", "HeroConTesto", "HeroConTestoCentrato", "HeroConTestoSuSfondo", "HeroConTestoSuSfondoOverlayPrimario", "HeroConSfondoOverlayFiltro", "HeroConSfondoMargineNegativo"];
const HeroStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  HeroConSfondo,
  HeroConSfondoMargineNegativo,
  HeroConSfondoOverlayFiltro,
  HeroConSfondoSmall,
  HeroConTesto,
  HeroConTestoCentrato,
  HeroConTestoSuSfondo,
  HeroConTestoSuSfondoOverlayPrimario,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  HeroStories as H,
  HeroConSfondo as a,
  HeroConSfondoSmall as b,
  HeroConTesto as c,
  HeroConTestoCentrato as d,
  HeroConTestoSuSfondo as e,
  HeroConTestoSuSfondoOverlayPrimario as f,
  HeroConSfondoOverlayFiltro as g,
  HeroConSfondoMargineNegativo as h,
  Hero as i,
  HeroBackground as j,
  HeroBody as k,
  HeroButton as l,
  HeroCategory as m,
  HeroTitle as n
};
