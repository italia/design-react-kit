var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A;
import { e } from "./index-CoR6MlO7.js";
import { C as Container } from "./Container-CQqTH9-0.js";
import { R as Row, C as Col } from "./Col-DbKMWTUR.js";
import "./track-focus-DbJ2CO43.js";
const meta = {
  title: "Documentazione/Organizzare gli spazi/Griglie",
  component: Row
};
const EsempioBase = {
  render: () => /* @__PURE__ */ e.createElement("div", { className: "docs layout-example" }, /* @__PURE__ */ e.createElement(Container, null, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, null, "Una di tre colonne"), /* @__PURE__ */ e.createElement(Col, null, "Una di tre colonne"), /* @__PURE__ */ e.createElement(Col, null, "Una di tre colonne"))))
};
const LarghezzeStandard = {
  render: () => /* @__PURE__ */ e.createElement("div", { className: "docs layout-example" }, /* @__PURE__ */ e.createElement(Container, null, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, null, "1 di 2"), /* @__PURE__ */ e.createElement(Col, null, "2 di 2")), /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, null, "1 di 3"), /* @__PURE__ */ e.createElement(Col, null, "2 di 3"), /* @__PURE__ */ e.createElement(Col, null, "3 di 3"))))
};
const RigheMultipleBugSafari = {
  render: () => /* @__PURE__ */ e.createElement("div", { className: "docs layout-example" }, /* @__PURE__ */ e.createElement(Container, null, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, null, "Colonna"), /* @__PURE__ */ e.createElement(Col, null, "Colonna"), /* @__PURE__ */ e.createElement("div", { className: "w-100" }), /* @__PURE__ */ e.createElement(Col, null, "Colonna"), /* @__PURE__ */ e.createElement(Col, null, "Colonna"))))
};
const ImpostaLarghezzaColonne = {
  render: () => /* @__PURE__ */ e.createElement("div", { className: "docs layout-example" }, /* @__PURE__ */ e.createElement(Container, null, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, null, "1 di 3"), /* @__PURE__ */ e.createElement(Col, { xs: "6" }, "2 di 3 (larga 6/12)"), /* @__PURE__ */ e.createElement(Col, null, "3 di 3")), /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, null, "1 di 3"), /* @__PURE__ */ e.createElement(Col, { xs: "5" }, "2 di 3 (larga 5/12)"), /* @__PURE__ */ e.createElement(Col, null, "3 di 3"))))
};
const ContenutoLarghezzaVariabile = {
  render: () => /* @__PURE__ */ e.createElement("div", { className: "docs layout-example" }, /* @__PURE__ */ e.createElement(Container, null, /* @__PURE__ */ e.createElement(Row, { className: "justify-content-md-center" }, /* @__PURE__ */ e.createElement(Col, { lg: "2" }, "1 di 3"), /* @__PURE__ */ e.createElement(Col, { xs: "auto" }, "Contenuto a larghezza variabile"), /* @__PURE__ */ e.createElement(Col, { lg: "2" }, "3 di 3")), /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, null, "1 di 3"), /* @__PURE__ */ e.createElement(Col, { md: "auto" }, "Contenuto a larghezza variabile"), /* @__PURE__ */ e.createElement(Col, { lg: "2" }, "3 di 3"))))
};
const EqualWidthMultiRow = {
  render: () => /* @__PURE__ */ e.createElement("div", { className: "docs layout-example" }, /* @__PURE__ */ e.createElement(Container, null, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, null, "col"), /* @__PURE__ */ e.createElement(Col, null, "col")), /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, null, "col"), /* @__PURE__ */ e.createElement(Col, null, "col"))))
};
const TuttiIBreakpoint = {
  render: () => /* @__PURE__ */ e.createElement("div", { className: "docs layout-example" }, /* @__PURE__ */ e.createElement(Container, null, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, null, "col"), /* @__PURE__ */ e.createElement(Col, null, "col"), /* @__PURE__ */ e.createElement(Col, null, "col"), /* @__PURE__ */ e.createElement(Col, null, "col")), /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { xs: 8 }, "col-8"), /* @__PURE__ */ e.createElement(Col, { xs: 4 }, "col-4"))))
};
const RaccoltiInOrizzontale = {
  render: () => /* @__PURE__ */ e.createElement("div", { className: "docs layout-example" }, /* @__PURE__ */ e.createElement(Container, null, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { sm: "8" }, "col-sm-8"), /* @__PURE__ */ e.createElement(Col, { sm: "4" }, "col-sm-4")), /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { widths: ["sm"] }, "col-sm"), /* @__PURE__ */ e.createElement(Col, { widths: ["sm"] }, "col-sm"), /* @__PURE__ */ e.createElement(Col, { widths: ["sm"] }, "col-sm"))))
};
const MischiareEAbbinare = {
  render: () => /* @__PURE__ */ e.createElement("div", { className: "docs layout-example" }, /* @__PURE__ */ e.createElement(Container, null, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { xs: "12", md: "8" }, ".col-12 .col-md-8"), /* @__PURE__ */ e.createElement(Col, { xs: "6", md: "4" }, ".col-6 .col-md-4")), /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { xs: "6", md: "4" }, ".col-6 .col-md-4"), /* @__PURE__ */ e.createElement(Col, { xs: "6", md: "4" }, ".col-6 .col-md-4"), /* @__PURE__ */ e.createElement(Col, { xs: "6", md: "4" }, ".col-6 .col-md-4")), /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { xs: "6" }, ".col-6"), /* @__PURE__ */ e.createElement(Col, { xs: "6" }, ".col-6"))))
};
EsempioBase.parameters = {
  ...EsempioBase.parameters,
  docs: {
    ...(_a = EsempioBase.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: () => <div className='docs layout-example'>\n      <Container>\n        <Row>\n          <Col>Una di tre colonne</Col>\n          <Col>Una di tre colonne</Col>\n          <Col>Una di tre colonne</Col>\n        </Row>\n      </Container>\n    </div>\n}",
      ...(_c = (_b = EsempioBase.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
LarghezzeStandard.parameters = {
  ...LarghezzeStandard.parameters,
  docs: {
    ...(_d = LarghezzeStandard.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  render: () => <div className='docs layout-example'>\n      <Container>\n        <Row>\n          <Col>1 di 2</Col>\n          <Col>2 di 2</Col>\n        </Row>\n        <Row>\n          <Col>1 di 3</Col>\n          <Col>2 di 3</Col>\n          <Col>3 di 3</Col>\n        </Row>\n      </Container>\n    </div>\n}",
      ...(_f = (_e = LarghezzeStandard.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
RigheMultipleBugSafari.parameters = {
  ...RigheMultipleBugSafari.parameters,
  docs: {
    ...(_g = RigheMultipleBugSafari.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  render: () => <div className='docs layout-example'>\n      <Container>\n        <Row>\n          <Col>Colonna</Col>\n          <Col>Colonna</Col>\n          <div className='w-100'></div>\n          <Col>Colonna</Col>\n          <Col>Colonna</Col>\n        </Row>\n      </Container>\n    </div>\n}",
      ...(_i = (_h = RigheMultipleBugSafari.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
ImpostaLarghezzaColonne.parameters = {
  ...ImpostaLarghezzaColonne.parameters,
  docs: {
    ...(_j = ImpostaLarghezzaColonne.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  render: () => <div className='docs layout-example'>\n      <Container>\n        <Row>\n          <Col>1 di 3</Col>\n          <Col xs='6'>2 di 3 (larga 6/12)</Col>\n          <Col>3 di 3</Col>\n        </Row>\n        <Row>\n          <Col>1 di 3</Col>\n          <Col xs='5'>2 di 3 (larga 5/12)</Col>\n          <Col>3 di 3</Col>\n        </Row>\n      </Container>\n    </div>\n}",
      ...(_l = (_k = ImpostaLarghezzaColonne.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
ContenutoLarghezzaVariabile.parameters = {
  ...ContenutoLarghezzaVariabile.parameters,
  docs: {
    ...(_m = ContenutoLarghezzaVariabile.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "{\n  render: () => <div className='docs layout-example'>\n      <Container>\n        <Row className='justify-content-md-center'>\n          <Col lg='2'>1 di 3</Col>\n          <Col xs='auto'>Contenuto a larghezza variabile</Col>\n          <Col lg='2'>3 di 3</Col>\n        </Row>\n        <Row>\n          <Col>1 di 3</Col>\n          <Col md='auto'>Contenuto a larghezza variabile</Col>\n          <Col lg='2'>3 di 3</Col>\n        </Row>\n      </Container>\n    </div>\n}",
      ...(_o = (_n = ContenutoLarghezzaVariabile.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
EqualWidthMultiRow.parameters = {
  ...EqualWidthMultiRow.parameters,
  docs: {
    ...(_p = EqualWidthMultiRow.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: "{\n  render: () => <div className='docs layout-example'>\n      <Container>\n        <Row>\n          <Col>col</Col>\n          <Col>col</Col>\n        </Row>\n        <Row>\n          <Col>col</Col>\n          <Col>col</Col>\n        </Row>\n      </Container>\n    </div>\n}",
      ...(_r = (_q = EqualWidthMultiRow.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
TuttiIBreakpoint.parameters = {
  ...TuttiIBreakpoint.parameters,
  docs: {
    ...(_s = TuttiIBreakpoint.parameters) == null ? void 0 : _s.docs,
    source: {
      originalSource: "{\n  render: () => <div className='docs layout-example'>\n      <Container>\n        <Row>\n          <Col>col</Col>\n          <Col>col</Col>\n          <Col>col</Col>\n          <Col>col</Col>\n        </Row>\n        <Row>\n          <Col xs={8}>col-8</Col>\n          <Col xs={4}>col-4</Col>\n        </Row>\n      </Container>\n    </div>\n}",
      ...(_u = (_t = TuttiIBreakpoint.parameters) == null ? void 0 : _t.docs) == null ? void 0 : _u.source
    }
  }
};
RaccoltiInOrizzontale.parameters = {
  ...RaccoltiInOrizzontale.parameters,
  docs: {
    ...(_v = RaccoltiInOrizzontale.parameters) == null ? void 0 : _v.docs,
    source: {
      originalSource: "{\n  render: () => <div className='docs layout-example'>\n      <Container>\n        <Row>\n          <Col sm='8'>col-sm-8</Col>\n          <Col sm='4'>col-sm-4</Col>\n        </Row>\n        <Row>\n          <Col widths={['sm']}>col-sm</Col>\n          <Col widths={['sm']}>col-sm</Col>\n          <Col widths={['sm']}>col-sm</Col>\n        </Row>\n      </Container>\n    </div>\n}",
      ...(_x = (_w = RaccoltiInOrizzontale.parameters) == null ? void 0 : _w.docs) == null ? void 0 : _x.source
    }
  }
};
MischiareEAbbinare.parameters = {
  ...MischiareEAbbinare.parameters,
  docs: {
    ...(_y = MischiareEAbbinare.parameters) == null ? void 0 : _y.docs,
    source: {
      originalSource: "{\n  render: () => <div className='docs layout-example'>\n      <Container>\n        <Row>\n          <Col xs='12' md='8'>\n            .col-12 .col-md-8\n          </Col>\n          <Col xs='6' md='4'>\n            .col-6 .col-md-4\n          </Col>\n        </Row>\n        <Row>\n          <Col xs='6' md='4'>\n            .col-6 .col-md-4\n          </Col>\n          <Col xs='6' md='4'>\n            .col-6 .col-md-4\n          </Col>\n          <Col xs='6' md='4'>\n            .col-6 .col-md-4\n          </Col>\n        </Row>\n        <Row>\n          <Col xs='6'>.col-6</Col>\n          <Col xs='6'>.col-6</Col>\n        </Row>\n      </Container>\n    </div>\n}",
      ...(_A = (_z = MischiareEAbbinare.parameters) == null ? void 0 : _z.docs) == null ? void 0 : _A.source
    }
  }
};
const __namedExportsOrder = ["EsempioBase", "LarghezzeStandard", "RigheMultipleBugSafari", "ImpostaLarghezzaColonne", "ContenutoLarghezzaVariabile", "EqualWidthMultiRow", "TuttiIBreakpoint", "RaccoltiInOrizzontale", "MischiareEAbbinare"];
const GriglieStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ContenutoLarghezzaVariabile,
  EqualWidthMultiRow,
  EsempioBase,
  ImpostaLarghezzaColonne,
  LarghezzeStandard,
  MischiareEAbbinare,
  RaccoltiInOrizzontale,
  RigheMultipleBugSafari,
  TuttiIBreakpoint,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  ContenutoLarghezzaVariabile as C,
  EsempioBase as E,
  GriglieStories as G,
  ImpostaLarghezzaColonne as I,
  LarghezzeStandard as L,
  MischiareEAbbinare as M,
  RigheMultipleBugSafari as R,
  TuttiIBreakpoint as T,
  EqualWidthMultiRow as a,
  RaccoltiInOrizzontale as b
};
