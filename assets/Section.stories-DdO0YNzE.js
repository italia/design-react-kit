var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
import { R as React } from "./index-C-_iGYWo.js";
import { c as classNames } from "./index-xoeSAV6i.js";
import { a as notifyDeprecation } from "./utils-DNvasP3d.js";
import { C as Container } from "./Container-DhalTljb.js";
import { R as Row, C as Col } from "./Col-CM3Y6KlU.js";
import { C as Card } from "./Card-BbLD9VPT.js";
import { C as CardBody, a as CardText } from "./CardText-BXch16fi.js";
const Section = ({
  color,
  image,
  testId,
  wrapperClassName,
  className,
  children,
  neutral,
  muted,
  ...rest
}) => {
  const classes = classNames("section", wrapperClassName === true ? className : wrapperClassName, {
    [`section-${color}`]: color,
    "section-image": image
  });
  if (neutral || muted) {
    notifyDeprecation(
      `Please use the prop "color" instead of the "${neutral ? "neutral" : "muted"}" for the Section component.`
    );
  }
  const deprecatedClasses = classNames({
    "section-neutral": neutral,
    "section-muted": muted
  });
  const innerClasses = classNames("section-content", className);
  const styleClass = {
    backgroundImageClass: image ? { backgroundImage: `url(${image})` } : {}
  };
  const finalWrapperClassName = classNames(classes, deprecatedClasses);
  return /* @__PURE__ */ React.createElement("div", { className: finalWrapperClassName, style: styleClass.backgroundImageClass, "data-testid": testId, ...rest }, /* @__PURE__ */ React.createElement("div", { className: innerClasses }, children));
};
Section.__docgenInfo = { "description": "", "methods": [], "displayName": "Section", "props": { "wrapperClassName": { "required": false, "tsType": { "name": "union", "raw": "string | true", "elements": [{ "name": "string" }, { "name": "literal", "value": "true" }] }, "description": "Classi aggiuntive da usare per il contenitore più esterno\nPer replicare il comportamento precedente, in cui `className` veniva applicato anche al wrapper,\npassare `true`." }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il contenitore più interno" }, "color": { "required": false, "tsType": { "name": "union", "raw": "'primary' | 'neutral' | 'muted' | string", "elements": [{ "name": "literal", "value": "'primary'" }, { "name": "literal", "value": "'neutral'" }, { "name": "literal", "value": "'muted'" }, { "name": "string" }] }, "description": "Colore utilizzato per lo sfondo del componente Section.\nIn caso di `primary` o `neutral` si consiglia di applicare la classe `.white-color` al contenuto per garantire la leggibilità dei testi." }, "image": { "required": false, "tsType": { "name": "string" }, "description": "Indicare l'URL dell'immagine da utilizzare come sfondo della sezione." }, "children": { "required": false, "tsType": { "name": "union", "raw": "ReactNode | ReactNode[]", "elements": [{ "name": "ReactNode" }, { "name": "Array", "elements": [{ "name": "ReactNode" }], "raw": "ReactNode[]" }] }, "description": "Il contenuto della sezione" }, "neutral": { "required": false, "tsType": { "name": "boolean" }, "description": 'Quando abilitato applica lo sfondo di tipo "neutral" al componente.\n@deprecated. Utilizzare `color="neutral"`' }, "muted": { "required": false, "tsType": { "name": "boolean" }, "description": 'Quando abilitato applica lo sfondo di tipo "muted" al componente.\n@deprecated. Utilizzare `color="muted"`' }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const meta = {
  title: "Documentazione/Componenti/Section",
  component: Section
};
const Esempio = () => {
  return /* @__PURE__ */ React.createElement(Section, null, /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(Row, {
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement(Col, {
    xs: "12"
  }, /* @__PURE__ */ React.createElement("h4", null, "Morbi fermentum amet"))), /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, {
    xs: "12",
    lg: "6",
    xl: "4",
    className: "pe-0 pe-md-5 mb-3"
  }, "Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus."), /* @__PURE__ */ React.createElement(Col, {
    xs: "12",
    lg: "6",
    xl: "4",
    className: "pe-0 pe-md-5 mb-3"
  }, "Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim diam quis enim. Eu nisl nunc mi ipsum faucibus."), /* @__PURE__ */ React.createElement(Col, {
    xs: "12",
    lg: "6",
    xl: "4",
    className: "pe-0 pe-md-5 mb-3"
  }, "Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna condimentum. Mattis enim ut tellus elementum sagittis."))));
};
const SfondoTenue = () => {
  return /* @__PURE__ */ React.createElement(Section, {
    color: "muted"
  }, /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(Row, {
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement(Col, {
    xs: "12"
  }, /* @__PURE__ */ React.createElement("h4", null, "Morbi fermentum amet"))), /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, {
    xs: "12",
    lg: "6",
    xl: "4"
  }, "Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus."), /* @__PURE__ */ React.createElement(Col, {
    xs: "12",
    lg: "6",
    xl: "4"
  }, "Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim diam quis enim. Eu nisl nunc mi ipsum faucibus."), /* @__PURE__ */ React.createElement(Col, {
    xs: "12",
    lg: "6",
    xl: "4"
  }, "Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna condimentum. Mattis enim ut tellus elementum sagittis."))));
};
const SfondoPrimario = () => {
  return /* @__PURE__ */ React.createElement(Section, {
    color: "primary"
  }, /* @__PURE__ */ React.createElement(Container, {
    className: "white-color"
  }, /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, {
    xs: "12"
  }, /* @__PURE__ */ React.createElement("h4", null, "Morbi fermentum amet"))), /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, {
    xs: "12",
    lg: "6",
    xl: "4"
  }, "Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus."), /* @__PURE__ */ React.createElement(Col, {
    xs: "12",
    lg: "6",
    xl: "4"
  }, "Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim diam quis enim. Eu nisl nunc mi ipsum faucibus."), /* @__PURE__ */ React.createElement(Col, {
    xs: "12",
    lg: "6",
    xl: "4"
  }, "Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna condimentum. Mattis enim ut tellus elementum sagittis."))));
};
const SfondoNeutrale = () => {
  return /* @__PURE__ */ React.createElement(Section, {
    color: "neutral"
  }, /* @__PURE__ */ React.createElement(Container, {
    className: "white-color"
  }, /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, {
    xs: "12"
  }, /* @__PURE__ */ React.createElement("h4", null, "Morbi fermentum amet"))), /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, {
    xs: "12",
    lg: "6",
    xl: "4"
  }, "Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus."), /* @__PURE__ */ React.createElement(Col, {
    xs: "12",
    lg: "6",
    xl: "4"
  }, "Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim diam quis enim. Eu nisl nunc mi ipsum faucibus."), /* @__PURE__ */ React.createElement(Col, {
    xs: "12",
    lg: "6",
    xl: "4"
  }, "Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna condimentum. Mattis enim ut tellus elementum sagittis."))));
};
const ImmagineDiSfondo = () => {
  return /* @__PURE__ */ React.createElement(Section, {
    image: "https://picsum.photos/1280/720?image=811"
  }, /* @__PURE__ */ React.createElement(Container, {
    className: "white-color"
  }, /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, {
    xs: "12"
  }, /* @__PURE__ */ React.createElement("h4", null, "Morbi fermentum amet"))), /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, {
    xs: "12",
    lg: "6",
    xl: "4"
  }, "Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus."), /* @__PURE__ */ React.createElement(Col, {
    xs: "12",
    lg: "6",
    xl: "4"
  }, "Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim diam quis enim. Eu nisl nunc mi ipsum faucibus."), /* @__PURE__ */ React.createElement(Col, {
    xs: "12",
    lg: "6",
    xl: "4"
  }, "Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna condimentum. Mattis enim ut tellus elementum sagittis."))));
};
const SectionConCard = () => {
  return /* @__PURE__ */ React.createElement(Section, {
    color: "muted"
  }, /* @__PURE__ */ React.createElement("h4", null, "Morbi fermentum amet"), /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, {
    sm: 6
  }, /* @__PURE__ */ React.createElement(Card, {
    className: "shadow h-100",
    noWrapper: true
  }, /* @__PURE__ */ React.createElement(CardBody, null, /* @__PURE__ */ React.createElement(CardText, null, "Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus. Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et.", " ")))), /* @__PURE__ */ React.createElement(Col, {
    sm: 6
  }, /* @__PURE__ */ React.createElement(Card, {
    className: "shadow h-100",
    noWrapper: true
  }, /* @__PURE__ */ React.createElement(CardBody, null, /* @__PURE__ */ React.createElement(CardText, null, "Etiam dignissim diam quis enim. Eu nisl nunc mi ipsum faucibus. Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna condimentum. Mattis enim ut tellus elementum sagittis."))))));
};
ImmagineDiSfondo.storyName = "Immagine di sfondo";
SectionConCard.storyName = "Section con Card";
Esempio.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Esempio"
};
SfondoTenue.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SfondoTenue"
};
SfondoPrimario.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SfondoPrimario"
};
SfondoNeutrale.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SfondoNeutrale"
};
ImmagineDiSfondo.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ImmagineDiSfondo"
};
SectionConCard.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SectionConCard"
};
Esempio.parameters = {
  ...Esempio.parameters,
  docs: {
    ...(_a = Esempio.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "() => {\n  return <Section>\n      <Container>\n        <Row className='mb-3'>\n          <Col xs={'12'}>\n            <h4>Morbi fermentum amet</h4>\n          </Col>\n        </Row>\n        <Row>\n          <Col xs={'12'} lg={'6'} xl={'4'} className='pe-0 pe-md-5 mb-3'>\n            Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo\n            donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.\n          </Col>\n          <Col xs={'12'} lg={'6'} xl={'4'} className='pe-0 pe-md-5 mb-3'>\n            Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim\n            diam quis enim. Eu nisl nunc mi ipsum faucibus.\n          </Col>\n          <Col xs={'12'} lg={'6'} xl={'4'} className='pe-0 pe-md-5 mb-3'>\n            Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna\n            condimentum. Mattis enim ut tellus elementum sagittis.\n          </Col>\n        </Row>\n      </Container>\n    </Section>;\n}",
      ...(_c = (_b = Esempio.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
SfondoTenue.parameters = {
  ...SfondoTenue.parameters,
  docs: {
    ...(_d = SfondoTenue.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "() => {\n  return <Section color='muted'>\n      <Container>\n        <Row className='mb-3'>\n          <Col xs={'12'}>\n            <h4>Morbi fermentum amet</h4>\n          </Col>\n        </Row>\n        <Row>\n          <Col xs={'12'} lg={'6'} xl={'4'}>\n            Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo\n            donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.\n          </Col>\n          <Col xs={'12'} lg={'6'} xl={'4'}>\n            Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim\n            diam quis enim. Eu nisl nunc mi ipsum faucibus.\n          </Col>\n          <Col xs={'12'} lg={'6'} xl={'4'}>\n            Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna\n            condimentum. Mattis enim ut tellus elementum sagittis.\n          </Col>\n        </Row>\n      </Container>\n    </Section>;\n}",
      ...(_f = (_e = SfondoTenue.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
SfondoPrimario.parameters = {
  ...SfondoPrimario.parameters,
  docs: {
    ...(_g = SfondoPrimario.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "() => {\n  return <Section color='primary'>\n      <Container className='white-color'>\n        <Row>\n          <Col xs={'12'}>\n            <h4>Morbi fermentum amet</h4>\n          </Col>\n        </Row>\n        <Row>\n          <Col xs={'12'} lg={'6'} xl={'4'}>\n            Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo\n            donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.\n          </Col>\n          <Col xs={'12'} lg={'6'} xl={'4'}>\n            Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim\n            diam quis enim. Eu nisl nunc mi ipsum faucibus.\n          </Col>\n          <Col xs={'12'} lg={'6'} xl={'4'}>\n            Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna\n            condimentum. Mattis enim ut tellus elementum sagittis.\n          </Col>\n        </Row>\n      </Container>\n    </Section>;\n}",
      ...(_i = (_h = SfondoPrimario.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
SfondoNeutrale.parameters = {
  ...SfondoNeutrale.parameters,
  docs: {
    ...(_j = SfondoNeutrale.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "() => {\n  return <Section color='neutral'>\n      <Container className='white-color'>\n        <Row>\n          <Col xs={'12'}>\n            <h4>Morbi fermentum amet</h4>\n          </Col>\n        </Row>\n        <Row>\n          <Col xs={'12'} lg={'6'} xl={'4'}>\n            Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo\n            donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.\n          </Col>\n          <Col xs={'12'} lg={'6'} xl={'4'}>\n            Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim\n            diam quis enim. Eu nisl nunc mi ipsum faucibus.\n          </Col>\n          <Col xs={'12'} lg={'6'} xl={'4'}>\n            Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna\n            condimentum. Mattis enim ut tellus elementum sagittis.\n          </Col>\n        </Row>\n      </Container>\n    </Section>;\n}",
      ...(_l = (_k = SfondoNeutrale.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
ImmagineDiSfondo.parameters = {
  ...ImmagineDiSfondo.parameters,
  docs: {
    ...(_m = ImmagineDiSfondo.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "() => {\n  return <Section image='https://picsum.photos/1280/720?image=811'>\n      <Container className='white-color'>\n        <Row>\n          <Col xs={'12'}>\n            <h4>Morbi fermentum amet</h4>\n          </Col>\n        </Row>\n        <Row>\n          <Col xs={'12'} lg={'6'} xl={'4'}>\n            Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo\n            donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.\n          </Col>\n          <Col xs={'12'} lg={'6'} xl={'4'}>\n            Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim\n            diam quis enim. Eu nisl nunc mi ipsum faucibus.\n          </Col>\n          <Col xs={'12'} lg={'6'} xl={'4'}>\n            Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna\n            condimentum. Mattis enim ut tellus elementum sagittis.\n          </Col>\n        </Row>\n      </Container>\n    </Section>;\n}",
      ...(_o = (_n = ImmagineDiSfondo.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
SectionConCard.parameters = {
  ...SectionConCard.parameters,
  docs: {
    ...(_p = SectionConCard.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: "() => {\n  return <Section color='muted'>\n      <h4>Morbi fermentum amet</h4>\n      <Row>\n        <Col sm={6}>\n          <Card className='shadow h-100' noWrapper>\n            <CardBody>\n              <CardText>\n                Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet\n                justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus. Eget egestas purus viverra accumsan.\n                Diam maecenas ultricies mi eget mauris pharetra et.{' '}\n              </CardText>\n            </CardBody>\n          </Card>\n        </Col>\n        <Col sm={6}>\n          <Card className='shadow h-100' noWrapper>\n            <CardBody>\n              <CardText>\n                Etiam dignissim diam quis enim. Eu nisl nunc mi ipsum faucibus. Euismod lacinia at quis risus sed\n                vulputate. Scelerisque purus semper eget duis at tellus at urna condimentum. Mattis enim ut tellus\n                elementum sagittis.\n              </CardText>\n            </CardBody>\n          </Card>\n        </Col>\n      </Row>\n    </Section>;\n}",
      ...(_r = (_q = SectionConCard.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
const __namedExportsOrder = ["Esempio", "SfondoTenue", "SfondoPrimario", "SfondoNeutrale", "ImmagineDiSfondo", "SectionConCard"];
const SectionStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Esempio,
  ImmagineDiSfondo,
  SectionConCard,
  SfondoNeutrale,
  SfondoPrimario,
  SfondoTenue,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  Esempio as E,
  ImmagineDiSfondo as I,
  SectionStories as S,
  SfondoTenue as a,
  SfondoPrimario as b,
  SfondoNeutrale as c,
  SectionConCard as d
};
