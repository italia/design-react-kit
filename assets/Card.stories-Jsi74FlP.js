var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M;
import { e } from "./index-N7T0HPyM.js";
import { R as Row, C as Col } from "./Col-C4Vz86Og.js";
import { B as Button } from "./Button-DzBfv9Kx.js";
import { C as Card } from "./Card-C_tzQcI4.js";
import { C as CardBody, a as CardText } from "./CardText-B3_Owstv.js";
import { C as CardCategory } from "./CardCategory-BFNAOVYm.js";
import { C as CardSignature, a as CardReadMore } from "./CardSignature-CjJXGj7r.js";
import { c as classNames } from "./index-xoeSAV6i.js";
import { C as CardTitle } from "./CardTitle-CT3exvbd.js";
import { I as Icon } from "./Icon-CpFYfyxV.js";
import "./track-focus-DbJ2CO43.js";
const CardTag = ({ className, tag = "a", testId, ...attributes }) => {
  const Tag = tag;
  const classes = classNames(className, "card-tag");
  return /* @__PURE__ */ e.createElement(Tag, { className: classes, ...attributes, "data-testid": testId });
};
CardTag.__docgenInfo = { "description": "", "methods": [], "displayName": "CardTag", "props": { "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati", "defaultValue": { "value": "'a'", "computed": false } }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente CardTag" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["AnchorHTMLAttributes"] };
const CardTagsHeader = ({
  date,
  children,
  className,
  tag = "div",
  testId,
  ...attributes
}) => {
  const Tag = tag;
  const classes = classNames("head-tags", className);
  return /* @__PURE__ */ e.createElement(Tag, { className: classes, ...attributes, "data-testid": testId }, children, date && /* @__PURE__ */ e.createElement("span", { className: "data" }, date));
};
CardTagsHeader.__docgenInfo = { "description": "", "methods": [], "displayName": "CardTagsHeader", "props": { "date": { "required": false, "tsType": { "name": "string" }, "description": "Mostra la data nella Card. Passare una data già formattata come stringa." }, "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati", "defaultValue": { "value": "'div'", "computed": false } }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente CardTagsHeader" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const meta = {
  title: "Documentazione/Componenti/Cards",
  component: Card
};
const SimpleCard = {
  render: () => /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "4" }, /* @__PURE__ */ e.createElement(Card, null, /* @__PURE__ */ e.createElement(CardBody, null, /* @__PURE__ */ e.createElement(CardTitle, { tag: "h5" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"), /* @__PURE__ */ e.createElement(CardText, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))))
};
const SimpleCardMultipleColumns = {
  render: () => /* @__PURE__ */ e.createElement(Row, null, [1, 2, 3].map((i) => /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "4", key: i }, /* @__PURE__ */ e.createElement(Card, null, /* @__PURE__ */ e.createElement(CardBody, null, /* @__PURE__ */ e.createElement(CardTitle, { tag: "h5" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"), /* @__PURE__ */ e.createElement(CardText, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))))
};
const SimpleArticle = {
  render: () => /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "6" }, /* @__PURE__ */ e.createElement(Card, null, /* @__PURE__ */ e.createElement(CardBody, null, /* @__PURE__ */ e.createElement(CardCategory, { date: "10/12/2018" }, "Category"), /* @__PURE__ */ e.createElement(CardTitle, { tag: "h5", className: "big-heading" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit…"), /* @__PURE__ */ e.createElement(CardText, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), /* @__PURE__ */ e.createElement(CardSignature, null, "di Federico De Paolis"), /* @__PURE__ */ e.createElement(CardReadMore, { text: "Leggi di più", iconName: "it-arrow-right" })))))
};
const CardIcon = {
  render: () => /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "6" }, /* @__PURE__ */ e.createElement(Card, null, /* @__PURE__ */ e.createElement(CardBody, null, /* @__PURE__ */ e.createElement(CardCategory, { iconName: "it-file" }, /* @__PURE__ */ e.createElement("span", { className: "text" }, "Category", /* @__PURE__ */ e.createElement("br", null), "Name")), /* @__PURE__ */ e.createElement("a", { href: "#" }, /* @__PURE__ */ e.createElement(CardTitle, { tag: "h5" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…")), /* @__PURE__ */ e.createElement(CardText, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))))
};
const CardIconAdvanced = {
  render: () => /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "6" }, /* @__PURE__ */ e.createElement(Card, null, /* @__PURE__ */ e.createElement(CardBody, null, /* @__PURE__ */ e.createElement(CardCategory, { iconName: "it-file" }, /* @__PURE__ */ e.createElement("span", { className: "text" }, "(2) Files")), /* @__PURE__ */ e.createElement("a", { href: "#" }, /* @__PURE__ */ e.createElement(CardTitle, { tag: "h5" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…")), /* @__PURE__ */ e.createElement(CardText, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), /* @__PURE__ */ e.createElement("a", { className: "simple-link", href: "#" }, "Link")))))
};
const CardWithShading = {
  render: () => /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "6" }, /* @__PURE__ */ e.createElement(Card, { spacing: true, className: "card-bg" }, /* @__PURE__ */ e.createElement(CardBody, null, /* @__PURE__ */ e.createElement(CardTitle, { tag: "h5" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"), /* @__PURE__ */ e.createElement(CardText, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), /* @__PURE__ */ e.createElement(CardReadMore, { iconName: "it-arrow-right", text: "Leggi di più", href: "#" })))))
};
const BigCard = {
  render: () => /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "6" }, /* @__PURE__ */ e.createElement(Card, { spacing: true, className: "card-bg card-big" }, /* @__PURE__ */ e.createElement(CardBody, null, /* @__PURE__ */ e.createElement("div", { className: "top-icon" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-card" })), /* @__PURE__ */ e.createElement(CardTitle, { tag: "h5" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"), /* @__PURE__ */ e.createElement(CardText, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), /* @__PURE__ */ e.createElement(CardReadMore, { iconName: "it-arrow-right", text: "Leggi di più", href: "#" })))))
};
const BigCardExampleTwo = {
  render: () => /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "6" }, /* @__PURE__ */ e.createElement(Card, { spacing: true, className: "card-bg card-big border-bottom-card" }, /* @__PURE__ */ e.createElement("div", { className: "flag-icon" }), /* @__PURE__ */ e.createElement("div", { className: "etichetta" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-settings" }), /* @__PURE__ */ e.createElement("span", null, "Sviluppo")), /* @__PURE__ */ e.createElement(CardBody, null, /* @__PURE__ */ e.createElement("div", { className: "top-icon" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-card" })), /* @__PURE__ */ e.createElement(CardTitle, { tag: "h5" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"), /* @__PURE__ */ e.createElement(CardText, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), /* @__PURE__ */ e.createElement(CardReadMore, { iconName: "it-arrow-right", text: "Leggi di più", href: "#" })))))
};
const BigCardWithTag = {
  render: () => /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "6" }, /* @__PURE__ */ e.createElement(Card, { spacing: true, className: "card-bg card-big no-after" }, /* @__PURE__ */ e.createElement(CardBody, null, /* @__PURE__ */ e.createElement(CardTagsHeader, { date: "10/10/2018" }, /* @__PURE__ */ e.createElement(CardTag, { href: "#" }, "Tag")), /* @__PURE__ */ e.createElement(CardTitle, { tag: "h5" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"), /* @__PURE__ */ e.createElement(CardText, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), /* @__PURE__ */ e.createElement("div", { className: "it-card-footer" }, /* @__PURE__ */ e.createElement(CardSignature, null, "di Federico De Paolis"), /* @__PURE__ */ e.createElement(Button, { outline: true, color: "primary", size: "sm" }, "Action"))))))
};
const CardsWithImages = {
  render: () => /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "6" }, /* @__PURE__ */ e.createElement(Card, { className: "card-img no-after" }, /* @__PURE__ */ e.createElement("div", { className: "img-responsive-wrapper" }, /* @__PURE__ */ e.createElement("div", { className: "img-responsive" }, /* @__PURE__ */ e.createElement("figure", { className: "img-wrapper" }, /* @__PURE__ */ e.createElement("img", { src: "https://placehold.co/310x190/0066cc/FFFFFF/?text=IMMAGINE%20DI%20ESEMPIO", title: "img title", alt: "imagealt" })))), /* @__PURE__ */ e.createElement(CardBody, null, /* @__PURE__ */ e.createElement(CardTitle, { tag: "h5" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"), /* @__PURE__ */ e.createElement(CardReadMore, { iconName: "it-arrow-right", text: "Leggi di più", href: "#" })))), /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "6" }, /* @__PURE__ */ e.createElement(Card, { className: "card-img no-after" }, /* @__PURE__ */ e.createElement("div", { className: "img-responsive-wrapper" }, /* @__PURE__ */ e.createElement("div", { className: "img-responsive img-responsive-panoramic" }, /* @__PURE__ */ e.createElement("figure", { className: "img-wrapper" }, /* @__PURE__ */ e.createElement("img", { src: "https://placehold.co/310x94/0066cc/FFFFFF/?text=IMMAGINE%20DI%20ESEMPIO", title: "img title", alt: "imagealt" })))), /* @__PURE__ */ e.createElement(CardBody, null, /* @__PURE__ */ e.createElement(CardTitle, { tag: "h5" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"), /* @__PURE__ */ e.createElement(CardReadMore, { iconName: "it-arrow-right", text: "Leggi di più", href: "#" })))), /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "6" }, /* @__PURE__ */ e.createElement(Card, { className: "card-img no-after" }, /* @__PURE__ */ e.createElement("div", { className: "img-responsive-wrapper" }, /* @__PURE__ */ e.createElement("div", { className: "img-responsive" }, /* @__PURE__ */ e.createElement("figure", { className: "img-wrapper" }, /* @__PURE__ */ e.createElement("img", { src: "https://placehold.co/310x190/0066cc/FFFFFF/?text=IMMAGINE%20DI%20ESEMPIO", title: "img title", alt: "imagealt" })), /* @__PURE__ */ e.createElement("div", { className: "card-calendar d-flex flex-column justify-content-center" }, /* @__PURE__ */ e.createElement("span", { className: "card-date" }, "31"), /* @__PURE__ */ e.createElement("span", { className: "card-day" }, "novembre")))), /* @__PURE__ */ e.createElement(CardBody, null, /* @__PURE__ */ e.createElement(CardTitle, { tag: "h5" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"), /* @__PURE__ */ e.createElement(CardReadMore, { iconName: "it-arrow-right", text: "Leggi di più", href: "#" })))), /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "6" }, /* @__PURE__ */ e.createElement(Card, { className: "card-img no-after" }, /* @__PURE__ */ e.createElement("div", { className: "img-responsive-wrapper" }, /* @__PURE__ */ e.createElement("div", { className: "img-responsive img-responsive-panoramic" }, /* @__PURE__ */ e.createElement("figure", { className: "img-wrapper" }, /* @__PURE__ */ e.createElement("img", { src: "https://placehold.co/310x94/0066cc/FFFFFF/?text=IMMAGINE%20DI%20ESEMPIO", title: "img title", alt: "imagealt" })), /* @__PURE__ */ e.createElement("div", { className: "card-calendar d-flex flex-column justify-content-center" }, /* @__PURE__ */ e.createElement("span", { className: "card-date" }, "31"), /* @__PURE__ */ e.createElement("span", { className: "card-day" }, "novembre")))), /* @__PURE__ */ e.createElement(CardBody, null, /* @__PURE__ */ e.createElement(CardTitle, { tag: "h5" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"), /* @__PURE__ */ e.createElement(CardReadMore, { iconName: "it-arrow-right", text: "Leggi di più", href: "#" })))))
};
const SpecialCard = {
  render: () => /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "6" }, /* @__PURE__ */ e.createElement(Card, { className: "card-img no-after special-card", tag: "a", href: "#" }, /* @__PURE__ */ e.createElement("div", { className: "img-responsive-wrapper" }, /* @__PURE__ */ e.createElement("div", { className: "img-responsive" }, /* @__PURE__ */ e.createElement("figure", { className: "img-wrapper" }, /* @__PURE__ */ e.createElement("img", { src: "https://placehold.co/174x214/F9F9FE/0066CC/?text=IMMAGINE%20DI%20ESEMPIO", title: "img title", alt: "imagealt" })))), /* @__PURE__ */ e.createElement(CardBody, null, /* @__PURE__ */ e.createElement(CardTagsHeader, { date: "10/10/2018" }), /* @__PURE__ */ e.createElement(CardTitle, { tag: "h5" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…")))))
};
const SimpleCardTeaser = {
  render: () => /* @__PURE__ */ e.createElement(Card, { teaser: true }, /* @__PURE__ */ e.createElement(CardBody, null, /* @__PURE__ */ e.createElement(CardTitle, { tag: "h5" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"), /* @__PURE__ */ e.createElement(CardText, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))
};
const CardTeaserMultiple = {
  render: () => /* @__PURE__ */ e.createElement("div", { className: "card-wrapper card-teaser-wrapper" }, /* @__PURE__ */ e.createElement(Card, { teaser: true, noWrapper: true }, /* @__PURE__ */ e.createElement(CardBody, null, /* @__PURE__ */ e.createElement(CardTitle, { tag: "h5" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"), /* @__PURE__ */ e.createElement(CardText, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))), /* @__PURE__ */ e.createElement(Card, { teaser: true, noWrapper: true, className: "rounded shadow" }, /* @__PURE__ */ e.createElement(CardBody, null, /* @__PURE__ */ e.createElement(CardTitle, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"), /* @__PURE__ */ e.createElement(CardText, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))), /* @__PURE__ */ e.createElement(Card, { teaser: true, noWrapper: true, className: "rounded shadow" }, /* @__PURE__ */ e.createElement(CardBody, null, /* @__PURE__ */ e.createElement(CardCategory, { iconName: "it-clip" }), /* @__PURE__ */ e.createElement("a", { href: "#" }, /* @__PURE__ */ e.createElement(CardTitle, { tag: "h5" }, "Lorem ipsum dolor sit amet")), /* @__PURE__ */ e.createElement(CardText, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))
};
SimpleCard.parameters = {
  ...SimpleCard.parameters,
  docs: {
    ...(_a = SimpleCard.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: () => <Row>\n      <Col xs='12' lg='4'>\n        {/* start card */}\n        <Card>\n          <CardBody>\n            <CardTitle tag='h5'>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…\n            </CardTitle>\n            <CardText>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n              dolore magna aliqua.\n            </CardText>\n          </CardBody>\n        </Card>\n        {/* end card */}\n      </Col>\n    </Row>\n}",
      ...(_c = (_b = SimpleCard.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
SimpleCardMultipleColumns.parameters = {
  ...SimpleCardMultipleColumns.parameters,
  docs: {
    ...(_d = SimpleCardMultipleColumns.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  render: () => <Row>\n      {[1, 2, 3].map(i => <Col xs='12' lg='4' key={i}>\n          <Card>\n            <CardBody>\n              <CardTitle tag='h5'>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…\n              </CardTitle>\n              <CardText>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua.\n              </CardText>\n            </CardBody>\n          </Card>\n        </Col>)}\n    </Row>\n}",
      ...(_f = (_e = SimpleCardMultipleColumns.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
SimpleArticle.parameters = {
  ...SimpleArticle.parameters,
  docs: {
    ...(_g = SimpleArticle.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  render: () => <Row>\n      <Col xs='12' lg='6'>\n        {/* start card */}\n        <Card>\n          <CardBody>\n            <CardCategory date='10/12/2018'>Category</CardCategory>\n            <CardTitle tag='h5' className='big-heading'>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit…\n            </CardTitle>\n            <CardText>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n              dolore magna aliqua.\n            </CardText>\n            <CardSignature>di Federico De Paolis</CardSignature>\n            <CardReadMore text='Leggi di più' iconName='it-arrow-right' />\n          </CardBody>\n        </Card>\n        {/* end card */}\n      </Col>\n    </Row>\n}",
      ...(_i = (_h = SimpleArticle.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
CardIcon.parameters = {
  ...CardIcon.parameters,
  docs: {
    ...(_j = CardIcon.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  render: () => <Row>\n      <Col xs='12' lg='6'>\n        {/* Start card */}\n        <Card>\n          <CardBody>\n            <CardCategory iconName='it-file'>\n              <span className='text'>\n                Category\n                <br />\n                Name\n              </span>\n            </CardCategory>\n            <a href='#'>\n              <CardTitle tag='h5'>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…\n              </CardTitle>\n            </a>\n            <CardText>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n              dolore magna aliqua.\n            </CardText>\n          </CardBody>\n        </Card>\n        {/* end card */}\n      </Col>\n    </Row>\n}",
      ...(_l = (_k = CardIcon.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
CardIconAdvanced.parameters = {
  ...CardIconAdvanced.parameters,
  docs: {
    ...(_m = CardIconAdvanced.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "{\n  render: () => <Row>\n      <Col xs='12' lg='6'>\n        {/* Start card */}\n        <Card>\n          <CardBody>\n            <CardCategory iconName='it-file'>\n              <span className='text'>(2) Files</span>\n            </CardCategory>\n            <a href='#'>\n              <CardTitle tag='h5'>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…\n              </CardTitle>\n            </a>\n            <CardText>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n              dolore magna aliqua.\n            </CardText>\n            <a className='simple-link' href='#'>\n              Link\n            </a>\n          </CardBody>\n        </Card>\n\n        {/* end card */}\n      </Col>\n    </Row>\n}",
      ...(_o = (_n = CardIconAdvanced.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
CardWithShading.parameters = {
  ...CardWithShading.parameters,
  docs: {
    ...(_p = CardWithShading.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: "{\n  render: () => <Row>\n      <Col xs='12' lg='6'>\n        {/* Start card */}\n        <Card spacing className='card-bg'>\n          <CardBody>\n            <CardTitle tag='h5'>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…\n            </CardTitle>\n            <CardText>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n              dolore magna aliqua.\n            </CardText>\n            <CardReadMore iconName='it-arrow-right' text='Leggi di più' href='#' />\n          </CardBody>\n        </Card>\n        {/* end card */}\n      </Col>\n    </Row>\n}",
      ...(_r = (_q = CardWithShading.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
BigCard.parameters = {
  ...BigCard.parameters,
  docs: {
    ...(_s = BigCard.parameters) == null ? void 0 : _s.docs,
    source: {
      originalSource: "{\n  render: () => <Row>\n      <Col xs='12' lg='6'>\n        {/* Start card */}\n        <Card spacing className='card-bg card-big'>\n          <CardBody>\n            <div className='top-icon'>\n              <Icon icon='it-card' />\n            </div>\n            <CardTitle tag='h5'>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…\n            </CardTitle>\n            <CardText>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n              dolore magna aliqua.\n            </CardText>\n            <CardReadMore iconName='it-arrow-right' text='Leggi di più' href='#' />\n          </CardBody>\n        </Card>\n        {/* end card */}\n      </Col>\n    </Row>\n}",
      ...(_u = (_t = BigCard.parameters) == null ? void 0 : _t.docs) == null ? void 0 : _u.source
    }
  }
};
BigCardExampleTwo.parameters = {
  ...BigCardExampleTwo.parameters,
  docs: {
    ...(_v = BigCardExampleTwo.parameters) == null ? void 0 : _v.docs,
    source: {
      originalSource: "{\n  render: () => <Row>\n      <Col xs='12' lg='6'>\n        {/* Start card */}\n        <Card spacing className='card-bg card-big border-bottom-card'>\n          <div className='flag-icon'></div>\n          <div className='etichetta'>\n            <Icon icon='it-settings' />\n            <span>Sviluppo</span>\n          </div>\n          <CardBody>\n            <div className='top-icon'>\n              <Icon icon='it-card' />\n            </div>\n            <CardTitle tag='h5'>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…\n            </CardTitle>\n            <CardText>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n              dolore magna aliqua.\n            </CardText>\n            <CardReadMore iconName='it-arrow-right' text='Leggi di più' href='#' />\n          </CardBody>\n        </Card>\n        {/* end card */}\n      </Col>\n    </Row>\n}",
      ...(_x = (_w = BigCardExampleTwo.parameters) == null ? void 0 : _w.docs) == null ? void 0 : _x.source
    }
  }
};
BigCardWithTag.parameters = {
  ...BigCardWithTag.parameters,
  docs: {
    ...(_y = BigCardWithTag.parameters) == null ? void 0 : _y.docs,
    source: {
      originalSource: "{\n  render: () => <Row>\n      <Col xs='12' lg='6'>\n        {/* Start card */}\n        <Card spacing className='card-bg card-big no-after'>\n          <CardBody>\n            <CardTagsHeader date='10/10/2018'>\n              <CardTag href='#'>Tag</CardTag>\n            </CardTagsHeader>\n            <CardTitle tag='h5'>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…\n            </CardTitle>\n            <CardText>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n              dolore magna aliqua.\n            </CardText>\n            <div className='it-card-footer'>\n              <CardSignature>di Federico De Paolis</CardSignature>\n              <Button outline color='primary' size='sm'>\n                Action\n              </Button>\n            </div>\n          </CardBody>\n        </Card>\n        {/* end card */}\n      </Col>\n    </Row>\n}",
      ...(_A = (_z = BigCardWithTag.parameters) == null ? void 0 : _z.docs) == null ? void 0 : _A.source
    }
  }
};
CardsWithImages.parameters = {
  ...CardsWithImages.parameters,
  docs: {
    ...(_B = CardsWithImages.parameters) == null ? void 0 : _B.docs,
    source: {
      originalSource: "{\n  render: () => <Row>\n      <Col xs='12' lg='6'>\n        {/* Start card */}\n        <Card className='card-img no-after'>\n          <div className='img-responsive-wrapper'>\n            <div className='img-responsive'>\n              <figure className='img-wrapper'>\n                <img src='https://placehold.co/310x190/0066cc/FFFFFF/?text=IMMAGINE%20DI%20ESEMPIO' title='img title' alt='imagealt' />\n              </figure>\n            </div>\n          </div>\n          <CardBody>\n            <CardTitle tag='h5'>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…\n            </CardTitle>\n            <CardReadMore iconName='it-arrow-right' text='Leggi di più' href='#' />\n          </CardBody>\n        </Card>\n        {/* end card */}\n      </Col>\n      <Col xs='12' lg='6'>\n        {/* Start card */}\n        <Card className='card-img no-after'>\n          <div className='img-responsive-wrapper'>\n            <div className='img-responsive img-responsive-panoramic'>\n              <figure className='img-wrapper'>\n                <img src='https://placehold.co/310x94/0066cc/FFFFFF/?text=IMMAGINE%20DI%20ESEMPIO' title='img title' alt='imagealt' />\n              </figure>\n            </div>\n          </div>\n          <CardBody>\n            <CardTitle tag='h5'>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…\n            </CardTitle>\n            <CardReadMore iconName='it-arrow-right' text='Leggi di più' href='#' />\n          </CardBody>\n        </Card>\n        {/* end card */}\n      </Col>\n      <Col xs='12' lg='6'>\n        {/* Start card */}\n        <Card className='card-img no-after'>\n          <div className='img-responsive-wrapper'>\n            <div className='img-responsive'>\n              <figure className='img-wrapper'>\n                <img src='https://placehold.co/310x190/0066cc/FFFFFF/?text=IMMAGINE%20DI%20ESEMPIO' title='img title' alt='imagealt' />\n              </figure>\n              <div className='card-calendar d-flex flex-column justify-content-center'>\n                <span className='card-date'>31</span>\n                <span className='card-day'>novembre</span>\n              </div>\n            </div>\n          </div>\n          <CardBody>\n            <CardTitle tag='h5'>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…\n            </CardTitle>\n            <CardReadMore iconName='it-arrow-right' text='Leggi di più' href='#' />\n          </CardBody>\n        </Card>\n        {/* end card */}\n      </Col>\n      <Col xs='12' lg='6'>\n        {/* Start card */}\n        <Card className='card-img no-after'>\n          <div className='img-responsive-wrapper'>\n            <div className='img-responsive img-responsive-panoramic'>\n              <figure className='img-wrapper'>\n                <img src='https://placehold.co/310x94/0066cc/FFFFFF/?text=IMMAGINE%20DI%20ESEMPIO' title='img title' alt='imagealt' />\n              </figure>\n              <div className='card-calendar d-flex flex-column justify-content-center'>\n                <span className='card-date'>31</span>\n                <span className='card-day'>novembre</span>\n              </div>\n            </div>\n          </div>\n          <CardBody>\n            <CardTitle tag='h5'>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…\n            </CardTitle>\n            <CardReadMore iconName='it-arrow-right' text='Leggi di più' href='#' />\n          </CardBody>\n        </Card>\n        {/* end card */}\n      </Col>\n    </Row>\n}",
      ...(_D = (_C = CardsWithImages.parameters) == null ? void 0 : _C.docs) == null ? void 0 : _D.source
    }
  }
};
SpecialCard.parameters = {
  ...SpecialCard.parameters,
  docs: {
    ...(_E = SpecialCard.parameters) == null ? void 0 : _E.docs,
    source: {
      originalSource: "{\n  render: () => <Row>\n      <Col xs='12' lg='6'>\n        {/* Start card */}\n        <Card className='card-img no-after special-card' tag='a' href='#'>\n          <div className='img-responsive-wrapper'>\n            <div className='img-responsive'>\n              <figure className='img-wrapper'>\n                <img src='https://placehold.co/174x214/F9F9FE/0066CC/?text=IMMAGINE%20DI%20ESEMPIO' title='img title' alt='imagealt' />\n              </figure>\n            </div>\n          </div>\n          <CardBody>\n            <CardTagsHeader date='10/10/2018' />\n            <CardTitle tag='h5'>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…\n            </CardTitle>\n          </CardBody>\n        </Card>\n        {/* end card */}\n      </Col>\n    </Row>\n}",
      ...(_G = (_F = SpecialCard.parameters) == null ? void 0 : _F.docs) == null ? void 0 : _G.source
    }
  }
};
SimpleCardTeaser.parameters = {
  ...SimpleCardTeaser.parameters,
  docs: {
    ...(_H = SimpleCardTeaser.parameters) == null ? void 0 : _H.docs,
    source: {
      originalSource: "{\n  render: () => <Card teaser>\n      <CardBody>\n        <CardTitle tag='h5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</CardTitle>\n        <CardText>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n          magna aliqua.\n        </CardText>\n      </CardBody>\n    </Card>\n}",
      ...(_J = (_I = SimpleCardTeaser.parameters) == null ? void 0 : _I.docs) == null ? void 0 : _J.source
    }
  }
};
CardTeaserMultiple.parameters = {
  ...CardTeaserMultiple.parameters,
  docs: {
    ...(_K = CardTeaserMultiple.parameters) == null ? void 0 : _K.docs,
    source: {
      originalSource: "{\n  render: () => <div className='card-wrapper card-teaser-wrapper'>\n      <Card teaser noWrapper>\n        <CardBody>\n          <CardTitle tag='h5'>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…\n          </CardTitle>\n          <CardText>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n            dolore magna aliqua.\n          </CardText>\n        </CardBody>\n      </Card>\n      <Card teaser noWrapper className='rounded shadow'>\n        <CardBody>\n          <CardTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</CardTitle>\n          <CardText>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n            dolore magna aliqua.\n          </CardText>\n        </CardBody>\n      </Card>\n      <Card teaser noWrapper className='rounded shadow'>\n        <CardBody>\n          <CardCategory iconName='it-clip'></CardCategory>\n          <a href='#'>\n            <CardTitle tag='h5'>Lorem ipsum dolor sit amet</CardTitle>\n          </a>\n          <CardText>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n            dolore magna aliqua.\n          </CardText>\n        </CardBody>\n      </Card>\n    </div>\n}",
      ...(_M = (_L = CardTeaserMultiple.parameters) == null ? void 0 : _L.docs) == null ? void 0 : _M.source
    }
  }
};
const __namedExportsOrder = ["SimpleCard", "SimpleCardMultipleColumns", "SimpleArticle", "CardIcon", "CardIconAdvanced", "CardWithShading", "BigCard", "BigCardExampleTwo", "BigCardWithTag", "CardsWithImages", "SpecialCard", "SimpleCardTeaser", "CardTeaserMultiple"];
const CardStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BigCard,
  BigCardExampleTwo,
  BigCardWithTag,
  CardIcon,
  CardIconAdvanced,
  CardTeaserMultiple,
  CardWithShading,
  CardsWithImages,
  SimpleArticle,
  SimpleCard,
  SimpleCardMultipleColumns,
  SimpleCardTeaser,
  SpecialCard,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  BigCard as B,
  CardStories as C,
  SimpleCard as S,
  SimpleCardMultipleColumns as a,
  SimpleArticle as b,
  CardIcon as c,
  CardIconAdvanced as d,
  CardWithShading as e,
  BigCardExampleTwo as f,
  BigCardWithTag as g,
  CardsWithImages as h,
  SpecialCard as i,
  SimpleCardTeaser as j,
  CardTeaserMultiple as k,
  CardTagsHeader as l,
  CardTag as m
};
