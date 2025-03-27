var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
import { e } from "./index-N7T0HPyM.js";
import { C as Container } from "./Container-Bin81bHr.js";
import { R as Row, C as Col } from "./Col-C4Vz86Og.js";
import { C as Card } from "./Card-C_tzQcI4.js";
import { C as CardBody, a as CardText } from "./CardText-B3_Owstv.js";
import { c as classNames } from "./index-xoeSAV6i.js";
import { a as notifyDeprecation } from "./utils-CwYUlCuU.js";
import "./track-focus-DbJ2CO43.js";
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
  return /* @__PURE__ */ e.createElement("div", { className: finalWrapperClassName, style: styleClass.backgroundImageClass, "data-testid": testId, ...rest }, /* @__PURE__ */ e.createElement("div", { className: innerClasses }, children));
};
Section.__docgenInfo = { "description": "", "methods": [], "displayName": "Section", "props": { "wrapperClassName": { "required": false, "tsType": { "name": "union", "raw": "string | true", "elements": [{ "name": "string" }, { "name": "literal", "value": "true" }] }, "description": "Classi aggiuntive da usare per il contenitore più esterno\nPer replicare il comportamento precedente, in cui `className` veniva applicato anche al wrapper,\npassare `true`." }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il contenitore più interno" }, "color": { "required": false, "tsType": { "name": "union", "raw": "'primary' | 'neutral' | 'muted' | string", "elements": [{ "name": "literal", "value": "'primary'" }, { "name": "literal", "value": "'neutral'" }, { "name": "literal", "value": "'muted'" }, { "name": "string" }] }, "description": "Colore utilizzato per lo sfondo del componente Section.\nIn caso di `primary` o `neutral` si consiglia di applicare la classe `.white-color` al contenuto per garantire la leggibilità dei testi." }, "image": { "required": false, "tsType": { "name": "string" }, "description": "Indicare l'URL dell'immagine da utilizzare come sfondo della sezione." }, "children": { "required": false, "tsType": { "name": "union", "raw": "ReactNode | ReactNode[]", "elements": [{ "name": "ReactNode" }, { "name": "Array", "elements": [{ "name": "ReactNode" }], "raw": "ReactNode[]" }] }, "description": "Il contenuto della sezione" }, "neutral": { "required": false, "tsType": { "name": "boolean" }, "description": 'Quando abilitato applica lo sfondo di tipo "neutral" al componente.\n@deprecated. Utilizzare `color="neutral"`' }, "muted": { "required": false, "tsType": { "name": "boolean" }, "description": 'Quando abilitato applica lo sfondo di tipo "muted" al componente.\n@deprecated. Utilizzare `color="muted"`' }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const meta = {
  title: "Documentazione/Componenti/Section",
  component: Section
};
const Esempio = () => {
  return /* @__PURE__ */ e.createElement(Section, { "aria-labelledby": "titleEx1" }, /* @__PURE__ */ e.createElement(Container, null, /* @__PURE__ */ e.createElement(Row, { className: "mb-3" }, /* @__PURE__ */ e.createElement(Col, { xs: "12" }, /* @__PURE__ */ e.createElement("h2", { id: "titleEx1" }, "Morbi fermentum amet"))), /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "6", xl: "4", className: "pe-0 pe-md-5 mb-3" }, "Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus."), /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "6", xl: "4", className: "pe-0 pe-md-5 mb-3" }, "Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim diam quis enim. Eu nisl nunc mi ipsum faucibus."), /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "6", xl: "4", className: "pe-0 pe-md-5 mb-3" }, "Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna condimentum. Mattis enim ut tellus elementum sagittis."))));
};
const SfondoTenue = () => {
  return /* @__PURE__ */ e.createElement(Section, { color: "muted", "aria-labelledby": "titleEx2" }, /* @__PURE__ */ e.createElement(Container, null, /* @__PURE__ */ e.createElement(Row, { className: "mb-3" }, /* @__PURE__ */ e.createElement(Col, { xs: "12" }, /* @__PURE__ */ e.createElement("h2", { id: "titleEx2" }, "Morbi fermentum amet"))), /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "6", xl: "4" }, "Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus."), /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "6", xl: "4" }, "Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim diam quis enim. Eu nisl nunc mi ipsum faucibus."), /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "6", xl: "4" }, "Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna condimentum. Mattis enim ut tellus elementum sagittis."))));
};
const SfondoPrimario = () => {
  return /* @__PURE__ */ e.createElement(Section, { color: "primary", "aria-labelledby": "titleEx3" }, /* @__PURE__ */ e.createElement(Container, { className: "white-color" }, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { xs: "12" }, /* @__PURE__ */ e.createElement("h2", { id: "titleEx3" }, "Morbi fermentum amet"))), /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "6", xl: "4" }, "Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus."), /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "6", xl: "4" }, "Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim diam quis enim. Eu nisl nunc mi ipsum faucibus."), /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "6", xl: "4" }, "Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna condimentum. Mattis enim ut tellus elementum sagittis."))));
};
const SfondoNeutrale = () => {
  return /* @__PURE__ */ e.createElement(Section, { color: "neutral", "aria-labelledby": "titleEx4" }, /* @__PURE__ */ e.createElement(Container, { className: "white-color" }, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { xs: "12" }, /* @__PURE__ */ e.createElement("h2", { id: "titleEx4" }, "Morbi fermentum amet"))), /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "6", xl: "4" }, "Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus."), /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "6", xl: "4" }, "Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim diam quis enim. Eu nisl nunc mi ipsum faucibus."), /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "6", xl: "4" }, "Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna condimentum. Mattis enim ut tellus elementum sagittis."))));
};
const ImmagineDiSfondo = () => {
  return /* @__PURE__ */ e.createElement(Section, { image: "https://picsum.photos/1280/720?image=811", "aria-labelledby": "titleEx5" }, /* @__PURE__ */ e.createElement(Container, { className: "white-color" }, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { xs: "12" }, /* @__PURE__ */ e.createElement("h2", { id: "titleEx5" }, "Morbi fermentum amet"))), /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "6", xl: "4" }, "Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus."), /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "6", xl: "4" }, "Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim diam quis enim. Eu nisl nunc mi ipsum faucibus."), /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "6", xl: "4" }, "Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna condimentum. Mattis enim ut tellus elementum sagittis."))));
};
const SectionConCard = () => {
  return /* @__PURE__ */ e.createElement(Section, { color: "muted", "aria-labelledby": "titleEx6" }, /* @__PURE__ */ e.createElement("h2", { id: "titleEx6" }, "Morbi fermentum amet"), /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { sm: 6 }, /* @__PURE__ */ e.createElement(Card, { className: "shadow h-100", noWrapper: true }, /* @__PURE__ */ e.createElement(CardBody, null, /* @__PURE__ */ e.createElement(CardText, null, "Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus. Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et.", " ")))), /* @__PURE__ */ e.createElement(Col, { sm: 6 }, /* @__PURE__ */ e.createElement(Card, { className: "shadow h-100", noWrapper: true }, /* @__PURE__ */ e.createElement(CardBody, null, /* @__PURE__ */ e.createElement(CardText, null, "Etiam dignissim diam quis enim. Eu nisl nunc mi ipsum faucibus. Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna condimentum. Mattis enim ut tellus elementum sagittis."))))));
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
      originalSource: `() => {
  return <Section aria-labelledby="titleEx1">
      <Container>
        <Row className='mb-3'>
          <Col xs={'12'}>
            <h2 id="titleEx1">Morbi fermentum amet</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={'12'} lg={'6'} xl={'4'} className='pe-0 pe-md-5 mb-3'>
            Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo
            donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'} className='pe-0 pe-md-5 mb-3'>
            Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim
            diam quis enim. Eu nisl nunc mi ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'} className='pe-0 pe-md-5 mb-3'>
            Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna
            condimentum. Mattis enim ut tellus elementum sagittis.
          </Col>
        </Row>
      </Container>
    </Section>;
}`,
      ...(_c = (_b = Esempio.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
SfondoTenue.parameters = {
  ...SfondoTenue.parameters,
  docs: {
    ...(_d = SfondoTenue.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: `() => {
  return <Section color='muted' aria-labelledby="titleEx2">
      <Container>
        <Row className='mb-3'>
          <Col xs={'12'}>
            <h2 id="titleEx2">Morbi fermentum amet</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo
            donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim
            diam quis enim. Eu nisl nunc mi ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna
            condimentum. Mattis enim ut tellus elementum sagittis.
          </Col>
        </Row>
      </Container>
    </Section>;
}`,
      ...(_f = (_e = SfondoTenue.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
SfondoPrimario.parameters = {
  ...SfondoPrimario.parameters,
  docs: {
    ...(_g = SfondoPrimario.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: `() => {
  return <Section color='primary' aria-labelledby="titleEx3">
      <Container className='white-color'>
        <Row>
          <Col xs={'12'}>
            <h2 id="titleEx3">Morbi fermentum amet</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo
            donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim
            diam quis enim. Eu nisl nunc mi ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna
            condimentum. Mattis enim ut tellus elementum sagittis.
          </Col>
        </Row>
      </Container>
    </Section>;
}`,
      ...(_i = (_h = SfondoPrimario.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
SfondoNeutrale.parameters = {
  ...SfondoNeutrale.parameters,
  docs: {
    ...(_j = SfondoNeutrale.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: `() => {
  return <Section color='neutral' aria-labelledby="titleEx4">
      <Container className='white-color'>
        <Row>
          <Col xs={'12'}>
            <h2 id="titleEx4">Morbi fermentum amet</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo
            donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim
            diam quis enim. Eu nisl nunc mi ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna
            condimentum. Mattis enim ut tellus elementum sagittis.
          </Col>
        </Row>
      </Container>
    </Section>;
}`,
      ...(_l = (_k = SfondoNeutrale.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
ImmagineDiSfondo.parameters = {
  ...ImmagineDiSfondo.parameters,
  docs: {
    ...(_m = ImmagineDiSfondo.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: `() => {
  return <Section image='https://picsum.photos/1280/720?image=811' aria-labelledby="titleEx5">
      <Container className='white-color'>
        <Row>
          <Col xs={'12'}>
            <h2 id="titleEx5">Morbi fermentum amet</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo
            donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim
            diam quis enim. Eu nisl nunc mi ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna
            condimentum. Mattis enim ut tellus elementum sagittis.
          </Col>
        </Row>
      </Container>
    </Section>;
}`,
      ...(_o = (_n = ImmagineDiSfondo.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
SectionConCard.parameters = {
  ...SectionConCard.parameters,
  docs: {
    ...(_p = SectionConCard.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: `() => {
  return <Section color='muted' aria-labelledby="titleEx6">
      <h2 id="titleEx6">Morbi fermentum amet</h2>
      <Row>
        <Col sm={6}>
          <Card className='shadow h-100' noWrapper>
            <CardBody>
              <CardText>
                Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet
                justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus. Eget egestas purus viverra accumsan.
                Diam maecenas ultricies mi eget mauris pharetra et.{' '}
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm={6}>
          <Card className='shadow h-100' noWrapper>
            <CardBody>
              <CardText>
                Etiam dignissim diam quis enim. Eu nisl nunc mi ipsum faucibus. Euismod lacinia at quis risus sed
                vulputate. Scelerisque purus semper eget duis at tellus at urna condimentum. Mattis enim ut tellus
                elementum sagittis.
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Section>;
}`,
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
