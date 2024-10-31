var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
import { R as React } from "./index-C-_iGYWo.js";
import { c as classNames } from "./index-xoeSAV6i.js";
import { R as Row, C as Col } from "./Col-CM3Y6KlU.js";
import { I as Icon } from "./Icon-CdS0NozM.js";
const GridItem = ({ tag: Tag = "div", className, children, testId, ...attributes }) => {
  const classes = classNames("it-grid-item-wrapper", className);
  return /* @__PURE__ */ React.createElement(Tag, { ...attributes, className: classes, "data-testid": testId }, children);
};
GridItem.__docgenInfo = { "description": "", "methods": [], "displayName": "GridItem", "props": { "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente LinkListItem" }, "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Indica il tag da utilizzare per il titolo", "defaultValue": { "value": "'div'", "computed": false } }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const GridItemText = ({ className, children, testId, ...attributes }) => {
  const classes = classNames("it-griditem-text", className);
  return /* @__PURE__ */ React.createElement("span", { ...attributes, className: classes, "data-testid": testId }, children);
};
GridItemText.__docgenInfo = { "description": "", "methods": [], "displayName": "GridItemText", "props": { "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per l'elemento" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const GridItemTextWrapper = ({ className, children, testId, ...attributes }) => {
  const classes = classNames("it-griditem-text-wrapper", className);
  return /* @__PURE__ */ React.createElement("span", { ...attributes, className: classes, "data-testid": testId }, children);
};
GridItemTextWrapper.__docgenInfo = { "description": "", "methods": [], "displayName": "GridItemTextWrapper", "props": { "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per l'elemento" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const GridList = ({ className, children, testId, ...attributes }) => {
  const classes = classNames("it-grid-list-wrapper", className);
  return /* @__PURE__ */ React.createElement("div", { ...attributes, className: classes, "data-testid": testId }, children);
};
GridList.__docgenInfo = { "description": "", "methods": [], "displayName": "GridList", "props": { "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente LinkListItem" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const GridRow = ({ className, children, testId, ...attributes }) => {
  const classes = classNames("grid-row", className);
  return /* @__PURE__ */ React.createElement("div", { ...attributes, className: classes, "data-testid": testId }, children);
};
GridRow.__docgenInfo = { "description": "", "methods": [], "displayName": "GridRow", "props": { "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente LinkListItem" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const ResponsiveImage = ({ alt, testId, ...attributes }) => {
  return /* @__PURE__ */ React.createElement("div", { className: "img-responsive-wrapper", "data-testid": testId }, /* @__PURE__ */ React.createElement("div", { className: "img-responsive" }, /* @__PURE__ */ React.createElement("div", { className: "img-wrapper" }, /* @__PURE__ */ React.createElement("img", { ...attributes, alt }))));
};
ResponsiveImage.__docgenInfo = { "description": "", "methods": [], "displayName": "ResponsiveImage", "props": { "alt": { "required": true, "tsType": { "name": "string" }, "description": "Un testo alternativo per descrivere l'immagine mostrata" }, "src": { "required": true, "tsType": { "name": "string" }, "description": "L'URI dell'immagine da mostrare" }, "title": { "required": false, "tsType": { "name": "string" }, "description": "Il titolo dell'immagine" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const meta = {
  title: "Documentazione/Organizzare i contenuti/Liste di Immagini",
  component: GridItem
};
const ElementoSingolo = {
  render: () => /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, {
    lg: 4,
    xs: 12
  }, /* @__PURE__ */ React.createElement(GridItem, null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement(ResponsiveImage, {
    src: "https://placehold.co/660x300/ebebeb/808080/?text=Immagine",
    alt: "Alternative Text",
    title: "Image Title"
  })))), /* @__PURE__ */ React.createElement(Col, {
    lg: 4,
    xs: 12
  }, /* @__PURE__ */ React.createElement(GridItem, null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement(ResponsiveImage, {
    src: "https://placehold.co/660x300/ebebeb/808080/?text=Immagine",
    alt: "Alternative Text",
    title: "Image Title"
  }), /* @__PURE__ */ React.createElement(GridItemTextWrapper, null, /* @__PURE__ */ React.createElement(GridItemText, null, "Didascalia"), /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-code-circle",
    size: "sm"
  }))))), /* @__PURE__ */ React.createElement(Col, {
    lg: 4,
    xs: 12
  }, /* @__PURE__ */ React.createElement(GridItem, {
    className: "it-grid-item-overlay"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement(ResponsiveImage, {
    src: "https://placehold.co/660x300/ebebeb/808080/?text=Immagine",
    alt: "Alternative Text",
    title: "Image Title"
  }), /* @__PURE__ */ React.createElement(GridItemTextWrapper, null, /* @__PURE__ */ React.createElement(GridItemText, null, "Didascalia"), /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-code-circle",
    size: "sm"
  }))))))
};
const GrigliaStandard = {
  render: () => /* @__PURE__ */ React.createElement(GridList, null, /* @__PURE__ */ React.createElement(GridRow, null, /* @__PURE__ */ React.createElement(Col, {
    lg: 4,
    xs: 6
  }, /* @__PURE__ */ React.createElement(GridItem, null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement(ResponsiveImage, {
    src: "https://placehold.co/660x300/ebebeb/808080/?text=Immagine",
    alt: "Alternative Text",
    title: "Image Title"
  })))), /* @__PURE__ */ React.createElement(Col, {
    lg: 4,
    xs: 6
  }, /* @__PURE__ */ React.createElement(GridItem, null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement(ResponsiveImage, {
    src: "https://placehold.co/660x300/ebebeb/808080/?text=Immagine",
    alt: "Alternative Text",
    title: "Image Title"
  })))), /* @__PURE__ */ React.createElement(Col, {
    lg: 4,
    xs: 6
  }, /* @__PURE__ */ React.createElement(GridItem, null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement(ResponsiveImage, {
    src: "https://placehold.co/660x300/ebebeb/808080/?text=Immagine",
    alt: "Alternative Text",
    title: "Image Title"
  })))), /* @__PURE__ */ React.createElement(Col, {
    lg: 4,
    xs: 6
  }, /* @__PURE__ */ React.createElement(GridItem, null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement(ResponsiveImage, {
    src: "https://placehold.co/660x300/ebebeb/808080/?text=Immagine",
    alt: "Alternative Text",
    title: "Image Title"
  })))), /* @__PURE__ */ React.createElement(Col, {
    lg: 4,
    xs: 6
  }, /* @__PURE__ */ React.createElement(GridItem, null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement(ResponsiveImage, {
    src: "https://placehold.co/660x300/ebebeb/808080/?text=Immagine",
    alt: "Alternative Text",
    title: "Image Title"
  })))), /* @__PURE__ */ React.createElement(Col, {
    lg: 4,
    xs: 6
  }, /* @__PURE__ */ React.createElement(GridItem, null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement(ResponsiveImage, {
    src: "https://placehold.co/660x300/ebebeb/808080/?text=Immagine",
    alt: "Alternative Text",
    title: "Image Title"
  }))))))
};
const StandardDidascalie = {
  render: () => /* @__PURE__ */ React.createElement(GridList, {
    className: "it-image-label-grid"
  }, /* @__PURE__ */ React.createElement(GridRow, null, /* @__PURE__ */ React.createElement(Col, {
    lg: 4,
    xs: 6
  }, /* @__PURE__ */ React.createElement(GridItem, null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement(ResponsiveImage, {
    src: "https://placehold.co/660x300/ebebeb/808080/?text=Immagine",
    alt: "Alternative Text",
    title: "Image Title"
  }), /* @__PURE__ */ React.createElement(GridItemTextWrapper, null, /* @__PURE__ */ React.createElement(GridItemText, null, "Didascalia"), /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-code-circle",
    size: "sm"
  }))))), /* @__PURE__ */ React.createElement(Col, {
    lg: 4,
    xs: 6
  }, /* @__PURE__ */ React.createElement(GridItem, null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement(ResponsiveImage, {
    src: "https://placehold.co/660x300/ebebeb/808080/?text=Immagine",
    alt: "Alternative Text",
    title: "Image Title"
  }), /* @__PURE__ */ React.createElement(GridItemTextWrapper, null, /* @__PURE__ */ React.createElement(GridItemText, null, "Didascalia"), /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-code-circle",
    size: "sm"
  }))))), /* @__PURE__ */ React.createElement(Col, {
    lg: 4,
    xs: 6
  }, /* @__PURE__ */ React.createElement(GridItem, null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement(ResponsiveImage, {
    src: "https://placehold.co/660x300/ebebeb/808080/?text=Immagine",
    alt: "Alternative Text",
    title: "Image Title"
  }), /* @__PURE__ */ React.createElement(GridItemTextWrapper, null, /* @__PURE__ */ React.createElement(GridItemText, null, "Didascalia"), /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-code-circle",
    size: "sm"
  }))))), /* @__PURE__ */ React.createElement(Col, {
    lg: 4,
    xs: 6
  }, /* @__PURE__ */ React.createElement(GridItem, null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement(ResponsiveImage, {
    src: "https://placehold.co/660x300/ebebeb/808080/?text=Immagine",
    alt: "Alternative Text",
    title: "Image Title"
  }), /* @__PURE__ */ React.createElement(GridItemTextWrapper, null, /* @__PURE__ */ React.createElement(GridItemText, null, "Didascalia"), /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-code-circle",
    size: "sm"
  }))))), /* @__PURE__ */ React.createElement(Col, {
    lg: 4,
    xs: 6
  }, /* @__PURE__ */ React.createElement(GridItem, null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement(ResponsiveImage, {
    src: "https://placehold.co/660x300/ebebeb/808080/?text=Immagine",
    alt: "Alternative Text",
    title: "Image Title"
  }), /* @__PURE__ */ React.createElement(GridItemTextWrapper, null, /* @__PURE__ */ React.createElement(GridItemText, null, "Didascalia"), /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-code-circle",
    size: "sm"
  }))))), /* @__PURE__ */ React.createElement(Col, {
    lg: 4,
    xs: 6
  }, /* @__PURE__ */ React.createElement(GridItem, null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement(ResponsiveImage, {
    src: "https://placehold.co/660x300/ebebeb/808080/?text=Immagine",
    alt: "Alternative Text",
    title: "Image Title"
  }), /* @__PURE__ */ React.createElement(GridItemTextWrapper, null, /* @__PURE__ */ React.createElement(GridItemText, null, "Didascalia"), /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-code-circle",
    size: "sm"
  })))))))
};
const Proporzionale = {
  render: () => /* @__PURE__ */ React.createElement(GridList, {
    className: "it-quilted-grid"
  }, /* @__PURE__ */ React.createElement(GridRow, null, /* @__PURE__ */ React.createElement(Col, {
    md: 6,
    xs: 12
  }, /* @__PURE__ */ React.createElement(GridItem, {
    className: "it-grid-item-overlay"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: ""
  }, /* @__PURE__ */ React.createElement(ResponsiveImage, {
    src: "https://placehold.co/660x300/ebebeb/808080/?text=Immagine",
    alt: "Alternative Text",
    title: "Image Title"
  }), /* @__PURE__ */ React.createElement(GridItemTextWrapper, null, /* @__PURE__ */ React.createElement(GridItemText, null, "Didascalia"), /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-code-circle",
    size: "sm"
  }))))), /* @__PURE__ */ React.createElement(Col, {
    md: 6,
    xs: 12
  }, /* @__PURE__ */ React.createElement(GridRow, null, /* @__PURE__ */ React.createElement(Col, {
    xs: 6
  }, /* @__PURE__ */ React.createElement(GridItem, {
    className: "it-grid-item-overlay"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement(ResponsiveImage, {
    src: "https://placehold.co/660x300/ebebeb/808080/?text=Immagine",
    alt: "Alternative Text",
    title: "Image Title"
  }), /* @__PURE__ */ React.createElement(GridItemTextWrapper, null, /* @__PURE__ */ React.createElement(GridItemText, null, "Didascalia"), /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-code-circle",
    size: "sm"
  }))))), /* @__PURE__ */ React.createElement(Col, {
    xs: 6
  }, /* @__PURE__ */ React.createElement(GridItem, {
    className: "it-grid-item-overlay"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement(ResponsiveImage, {
    src: "https://placehold.co/660x300/ebebeb/808080/?text=Immagine",
    alt: "Alternative Text",
    title: "Image Title"
  }), /* @__PURE__ */ React.createElement(GridItemTextWrapper, null, /* @__PURE__ */ React.createElement(GridItemText, null, "Didascalia"), /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-code-circle",
    size: "sm"
  }))))), /* @__PURE__ */ React.createElement(Col, {
    xs: 12
  }, /* @__PURE__ */ React.createElement(GridItem, {
    className: "it-grid-item-overlay it-grid-item-double-w"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement(ResponsiveImage, {
    src: "https://placehold.co/660x300/ebebeb/808080/?text=Immagine",
    alt: "Alternative Text",
    title: "Image Title"
  }), /* @__PURE__ */ React.createElement(GridItemTextWrapper, null, /* @__PURE__ */ React.createElement(GridItemText, null, "Didascalia"), /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-code-circle",
    size: "sm"
  })))))))))
};
const Masonry = {
  render: () => /* @__PURE__ */ React.createElement(GridList, {
    className: "it-image-label-grid it-masonry"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "card-columns"
  }, /* @__PURE__ */ React.createElement(Col, {
    xs: 12
  }, /* @__PURE__ */ React.createElement(GridItem, null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement(ResponsiveImage, {
    src: "https://placehold.co/400x300/ebebeb/808080/?text=Immagine",
    alt: "Alternative Text",
    title: "Image Title"
  }), /* @__PURE__ */ React.createElement(GridItemTextWrapper, null, /* @__PURE__ */ React.createElement(GridItemText, null, "Didascalia"), /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-code-circle",
    size: "sm"
  }))))), /* @__PURE__ */ React.createElement(Col, {
    xs: 12
  }, /* @__PURE__ */ React.createElement(GridItem, null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement(ResponsiveImage, {
    src: "https://placehold.co/400x500/ebebeb/808080/?text=Immagine",
    alt: "Alternative Text",
    title: "Image Title"
  }), /* @__PURE__ */ React.createElement(GridItemTextWrapper, null, /* @__PURE__ */ React.createElement(GridItemText, null, "Didascalia"), /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-code-circle",
    size: "sm"
  }))))), /* @__PURE__ */ React.createElement(Col, {
    xs: 12
  }, /* @__PURE__ */ React.createElement(GridItem, null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement(ResponsiveImage, {
    src: "https://placehold.co/400x700/ebebeb/808080/?text=Immagine",
    alt: "Alternative Text",
    title: "Image Title"
  }), /* @__PURE__ */ React.createElement(GridItemTextWrapper, null, /* @__PURE__ */ React.createElement(GridItemText, null, "Didascalia"), /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-code-circle",
    size: "sm"
  }))))), /* @__PURE__ */ React.createElement(Col, {
    xs: 12
  }, /* @__PURE__ */ React.createElement(GridItem, null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement(ResponsiveImage, {
    src: "https://placehold.co/400x600/ebebeb/808080/?text=Immagine",
    alt: "Alternative Text",
    title: "Image Title"
  }), /* @__PURE__ */ React.createElement(GridItemTextWrapper, null, /* @__PURE__ */ React.createElement(GridItemText, null, "Didascalia"), /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-code-circle",
    size: "sm"
  }))))), /* @__PURE__ */ React.createElement(Col, {
    xs: 12
  }, /* @__PURE__ */ React.createElement(GridItem, null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement(ResponsiveImage, {
    src: "https://placehold.co/400x500/ebebeb/808080/?text=Immagine",
    alt: "Alternative Text",
    title: "Image Title"
  }), /* @__PURE__ */ React.createElement(GridItemTextWrapper, null, /* @__PURE__ */ React.createElement(GridItemText, null, "Didascalia"), /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-code-circle",
    size: "sm"
  }))))), /* @__PURE__ */ React.createElement(Col, {
    xs: 12
  }, /* @__PURE__ */ React.createElement(GridItem, null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement(ResponsiveImage, {
    src: "https://placehold.co/400x400/ebebeb/808080/?text=Immagine",
    alt: "Alternative Text",
    title: "Image Title"
  }), /* @__PURE__ */ React.createElement(GridItemTextWrapper, null, /* @__PURE__ */ React.createElement(GridItemText, null, "Didascalia"), /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-code-circle",
    size: "sm"
  }))))), /* @__PURE__ */ React.createElement(Col, {
    xs: 12
  }, /* @__PURE__ */ React.createElement(GridItem, null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement(ResponsiveImage, {
    src: "https://placehold.co/400x600/ebebeb/808080/?text=Immagine",
    alt: "Alternative Text",
    title: "Image Title"
  }), /* @__PURE__ */ React.createElement(GridItemTextWrapper, null, /* @__PURE__ */ React.createElement(GridItemText, null, "Didascalia"), /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-code-circle",
    size: "sm"
  }))))), /* @__PURE__ */ React.createElement(Col, {
    xs: 12
  }, /* @__PURE__ */ React.createElement(GridItem, null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement(ResponsiveImage, {
    src: "https://placehold.co/400x500/ebebeb/808080/?text=Immagine",
    alt: "Alternative Text",
    title: "Image Title"
  }), /* @__PURE__ */ React.createElement(GridItemTextWrapper, null, /* @__PURE__ */ React.createElement(GridItemText, null, "Didascalia"), /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-code-circle",
    size: "sm"
  }))))), /* @__PURE__ */ React.createElement(Col, {
    xs: 12
  }, /* @__PURE__ */ React.createElement(GridItem, null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement(ResponsiveImage, {
    src: "https://placehold.co/400x400/ebebeb/808080/?text=Immagine",
    alt: "Alternative Text",
    title: "Image Title"
  }), /* @__PURE__ */ React.createElement(GridItemTextWrapper, null, /* @__PURE__ */ React.createElement(GridItemText, null, "Didascalia"), /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-code-circle",
    size: "sm"
  }))))), /* @__PURE__ */ React.createElement(Col, {
    xs: 12
  }, /* @__PURE__ */ React.createElement(GridItem, null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement(ResponsiveImage, {
    src: "https://placehold.co/400x600/ebebeb/808080/?text=Immagine",
    alt: "Alternative Text",
    title: "Image Title"
  }), /* @__PURE__ */ React.createElement(GridItemTextWrapper, null, /* @__PURE__ */ React.createElement(GridItemText, null, "Didascalia"), /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-code-circle",
    size: "sm"
  }))))), /* @__PURE__ */ React.createElement(Col, {
    xs: 12
  }, /* @__PURE__ */ React.createElement(GridItem, null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement(ResponsiveImage, {
    src: "https://placehold.co/400x500/ebebeb/808080/?text=Immagine",
    alt: "Alternative Text",
    title: "Image Title"
  }), /* @__PURE__ */ React.createElement(GridItemTextWrapper, null, /* @__PURE__ */ React.createElement(GridItemText, null, "Didascalia"), /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-code-circle",
    size: "sm"
  }))))), /* @__PURE__ */ React.createElement(Col, {
    xs: 12
  }, /* @__PURE__ */ React.createElement(GridItem, null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement(ResponsiveImage, {
    src: "https://placehold.co/400x400/ebebeb/808080/?text=Immagine",
    alt: "Alternative Text",
    title: "Image Title"
  }), /* @__PURE__ */ React.createElement(GridItemTextWrapper, null, /* @__PURE__ */ React.createElement(GridItemText, null, "Didascalia"), /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-code-circle",
    size: "sm"
  })))))))
};
ElementoSingolo.parameters = {
  ...ElementoSingolo.parameters,
  docs: {
    ...(_a = ElementoSingolo.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: () => <Row>\n      <Col lg={4} xs={12}>\n        <GridItem>\n          <a href='#'>\n            <ResponsiveImage src='https://placehold.co/660x300/ebebeb/808080/?text=Immagine' alt='Alternative Text' title='Image Title' />\n          </a>\n        </GridItem>\n      </Col>\n      <Col lg={4} xs={12}>\n        <GridItem>\n          <a href='#'>\n            <ResponsiveImage src='https://placehold.co/660x300/ebebeb/808080/?text=Immagine' alt='Alternative Text' title='Image Title' />\n            <GridItemTextWrapper>\n              <GridItemText>Didascalia</GridItemText>\n              <Icon icon='it-code-circle' size='sm' />\n            </GridItemTextWrapper>\n          </a>\n        </GridItem>\n      </Col>\n      <Col lg={4} xs={12}>\n        <GridItem className='it-grid-item-overlay'>\n          <a href='#'>\n            <ResponsiveImage src='https://placehold.co/660x300/ebebeb/808080/?text=Immagine' alt='Alternative Text' title='Image Title' />\n            <GridItemTextWrapper>\n              <GridItemText>Didascalia</GridItemText>\n              <Icon icon='it-code-circle' size='sm' />\n            </GridItemTextWrapper>\n          </a>\n        </GridItem>\n      </Col>\n    </Row>\n}",
      ...(_c = (_b = ElementoSingolo.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
GrigliaStandard.parameters = {
  ...GrigliaStandard.parameters,
  docs: {
    ...(_d = GrigliaStandard.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  render: () => <GridList>\n      <GridRow>\n        <Col lg={4} xs={6}>\n          <GridItem>\n            <a href='#'>\n              <ResponsiveImage src='https://placehold.co/660x300/ebebeb/808080/?text=Immagine' alt='Alternative Text' title='Image Title' />\n            </a>\n          </GridItem>\n        </Col>\n        <Col lg={4} xs={6}>\n          <GridItem>\n            <a href='#'>\n              <ResponsiveImage src='https://placehold.co/660x300/ebebeb/808080/?text=Immagine' alt='Alternative Text' title='Image Title' />\n            </a>\n          </GridItem>\n        </Col>\n        <Col lg={4} xs={6}>\n          <GridItem>\n            <a href='#'>\n              <ResponsiveImage src='https://placehold.co/660x300/ebebeb/808080/?text=Immagine' alt='Alternative Text' title='Image Title' />\n            </a>\n          </GridItem>\n        </Col>\n        <Col lg={4} xs={6}>\n          <GridItem>\n            <a href='#'>\n              <ResponsiveImage src='https://placehold.co/660x300/ebebeb/808080/?text=Immagine' alt='Alternative Text' title='Image Title' />\n            </a>\n          </GridItem>\n        </Col>\n        <Col lg={4} xs={6}>\n          <GridItem>\n            <a href='#'>\n              <ResponsiveImage src='https://placehold.co/660x300/ebebeb/808080/?text=Immagine' alt='Alternative Text' title='Image Title' />\n            </a>\n          </GridItem>\n        </Col>\n        <Col lg={4} xs={6}>\n          <GridItem>\n            <a href='#'>\n              <ResponsiveImage src='https://placehold.co/660x300/ebebeb/808080/?text=Immagine' alt='Alternative Text' title='Image Title' />\n            </a>\n          </GridItem>\n        </Col>\n      </GridRow>\n    </GridList>\n}",
      ...(_f = (_e = GrigliaStandard.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
StandardDidascalie.parameters = {
  ...StandardDidascalie.parameters,
  docs: {
    ...(_g = StandardDidascalie.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  render: () => <GridList className='it-image-label-grid'>\n      <GridRow>\n        <Col lg={4} xs={6}>\n          <GridItem>\n            <a href='#'>\n              <ResponsiveImage src='https://placehold.co/660x300/ebebeb/808080/?text=Immagine' alt='Alternative Text' title='Image Title' />\n              <GridItemTextWrapper>\n                <GridItemText>Didascalia</GridItemText>\n                <Icon icon='it-code-circle' size='sm' />\n              </GridItemTextWrapper>\n            </a>\n          </GridItem>\n        </Col>\n        <Col lg={4} xs={6}>\n          <GridItem>\n            <a href='#'>\n              <ResponsiveImage src='https://placehold.co/660x300/ebebeb/808080/?text=Immagine' alt='Alternative Text' title='Image Title' />\n              <GridItemTextWrapper>\n                <GridItemText>Didascalia</GridItemText>\n                <Icon icon='it-code-circle' size='sm' />\n              </GridItemTextWrapper>\n            </a>\n          </GridItem>\n        </Col>\n        <Col lg={4} xs={6}>\n          <GridItem>\n            <a href='#'>\n              <ResponsiveImage src='https://placehold.co/660x300/ebebeb/808080/?text=Immagine' alt='Alternative Text' title='Image Title' />\n              <GridItemTextWrapper>\n                <GridItemText>Didascalia</GridItemText>\n                <Icon icon='it-code-circle' size='sm' />\n              </GridItemTextWrapper>\n            </a>\n          </GridItem>\n        </Col>\n        <Col lg={4} xs={6}>\n          <GridItem>\n            <a href='#'>\n              <ResponsiveImage src='https://placehold.co/660x300/ebebeb/808080/?text=Immagine' alt='Alternative Text' title='Image Title' />\n              <GridItemTextWrapper>\n                <GridItemText>Didascalia</GridItemText>\n                <Icon icon='it-code-circle' size='sm' />\n              </GridItemTextWrapper>\n            </a>\n          </GridItem>\n        </Col>\n        <Col lg={4} xs={6}>\n          <GridItem>\n            <a href='#'>\n              <ResponsiveImage src='https://placehold.co/660x300/ebebeb/808080/?text=Immagine' alt='Alternative Text' title='Image Title' />\n              <GridItemTextWrapper>\n                <GridItemText>Didascalia</GridItemText>\n                <Icon icon='it-code-circle' size='sm' />\n              </GridItemTextWrapper>\n            </a>\n          </GridItem>\n        </Col>\n        <Col lg={4} xs={6}>\n          <GridItem>\n            <a href='#'>\n              <ResponsiveImage src='https://placehold.co/660x300/ebebeb/808080/?text=Immagine' alt='Alternative Text' title='Image Title' />\n              <GridItemTextWrapper>\n                <GridItemText>Didascalia</GridItemText>\n                <Icon icon='it-code-circle' size='sm' />\n              </GridItemTextWrapper>\n            </a>\n          </GridItem>\n        </Col>\n      </GridRow>\n    </GridList>\n}",
      ...(_i = (_h = StandardDidascalie.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
Proporzionale.parameters = {
  ...Proporzionale.parameters,
  docs: {
    ...(_j = Proporzionale.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  render: () => <GridList className='it-quilted-grid'>\n      <GridRow>\n        <Col md={6} xs={12}>\n          <GridItem className='it-grid-item-overlay'>\n            <a href='#' className=''>\n              <ResponsiveImage src='https://placehold.co/660x300/ebebeb/808080/?text=Immagine' alt='Alternative Text' title='Image Title' />\n              <GridItemTextWrapper>\n                <GridItemText>Didascalia</GridItemText>\n                <Icon icon='it-code-circle' size='sm' />\n              </GridItemTextWrapper>\n            </a>\n          </GridItem>\n        </Col>\n        <Col md={6} xs={12}>\n          <GridRow>\n            <Col xs={6}>\n              <GridItem className='it-grid-item-overlay'>\n                <a href='#'>\n                  <ResponsiveImage src='https://placehold.co/660x300/ebebeb/808080/?text=Immagine' alt='Alternative Text' title='Image Title' />\n                  <GridItemTextWrapper>\n                    <GridItemText>Didascalia</GridItemText>\n                    <Icon icon='it-code-circle' size='sm' />\n                  </GridItemTextWrapper>\n                </a>\n              </GridItem>\n            </Col>\n            <Col xs={6}>\n              <GridItem className='it-grid-item-overlay'>\n                <a href='#'>\n                  <ResponsiveImage src='https://placehold.co/660x300/ebebeb/808080/?text=Immagine' alt='Alternative Text' title='Image Title' />\n                  <GridItemTextWrapper>\n                    <GridItemText>Didascalia</GridItemText>\n                    <Icon icon='it-code-circle' size='sm' />\n                  </GridItemTextWrapper>\n                </a>\n              </GridItem>\n            </Col>\n            <Col xs={12}>\n              <GridItem className='it-grid-item-overlay it-grid-item-double-w'>\n                <a href='#'>\n                  <ResponsiveImage src='https://placehold.co/660x300/ebebeb/808080/?text=Immagine' alt='Alternative Text' title='Image Title' />\n                  <GridItemTextWrapper>\n                    <GridItemText>Didascalia</GridItemText>\n                    <Icon icon='it-code-circle' size='sm' />\n                  </GridItemTextWrapper>\n                </a>\n              </GridItem>\n            </Col>\n          </GridRow>\n        </Col>\n      </GridRow>\n    </GridList>\n}",
      ...(_l = (_k = Proporzionale.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
Masonry.parameters = {
  ...Masonry.parameters,
  docs: {
    ...(_m = Masonry.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "{\n  render: () => <GridList className='it-image-label-grid it-masonry'>\n      <div className='card-columns'>\n        <Col xs={12}>\n          <GridItem>\n            <a href='#'>\n              <ResponsiveImage src='https://placehold.co/400x300/ebebeb/808080/?text=Immagine' alt='Alternative Text' title='Image Title' />\n              <GridItemTextWrapper>\n                <GridItemText>Didascalia</GridItemText>\n                <Icon icon='it-code-circle' size='sm' />\n              </GridItemTextWrapper>\n            </a>\n          </GridItem>\n        </Col>\n        <Col xs={12}>\n          <GridItem>\n            <a href='#'>\n              <ResponsiveImage src='https://placehold.co/400x500/ebebeb/808080/?text=Immagine' alt='Alternative Text' title='Image Title' />\n              <GridItemTextWrapper>\n                <GridItemText>Didascalia</GridItemText>\n                <Icon icon='it-code-circle' size='sm' />\n              </GridItemTextWrapper>\n            </a>\n          </GridItem>\n        </Col>\n        <Col xs={12}>\n          <GridItem>\n            <a href='#'>\n              <ResponsiveImage src='https://placehold.co/400x700/ebebeb/808080/?text=Immagine' alt='Alternative Text' title='Image Title' />\n              <GridItemTextWrapper>\n                <GridItemText>Didascalia</GridItemText>\n                <Icon icon='it-code-circle' size='sm' />\n              </GridItemTextWrapper>\n            </a>\n          </GridItem>\n        </Col>\n        <Col xs={12}>\n          <GridItem>\n            <a href='#'>\n              <ResponsiveImage src='https://placehold.co/400x600/ebebeb/808080/?text=Immagine' alt='Alternative Text' title='Image Title' />\n              <GridItemTextWrapper>\n                <GridItemText>Didascalia</GridItemText>\n                <Icon icon='it-code-circle' size='sm' />\n              </GridItemTextWrapper>\n            </a>\n          </GridItem>\n        </Col>\n        <Col xs={12}>\n          <GridItem>\n            <a href='#'>\n              <ResponsiveImage src='https://placehold.co/400x500/ebebeb/808080/?text=Immagine' alt='Alternative Text' title='Image Title' />\n              <GridItemTextWrapper>\n                <GridItemText>Didascalia</GridItemText>\n                <Icon icon='it-code-circle' size='sm' />\n              </GridItemTextWrapper>\n            </a>\n          </GridItem>\n        </Col>\n        <Col xs={12}>\n          <GridItem>\n            <a href='#'>\n              <ResponsiveImage src='https://placehold.co/400x400/ebebeb/808080/?text=Immagine' alt='Alternative Text' title='Image Title' />\n              <GridItemTextWrapper>\n                <GridItemText>Didascalia</GridItemText>\n                <Icon icon='it-code-circle' size='sm' />\n              </GridItemTextWrapper>\n            </a>\n          </GridItem>\n        </Col>\n        <Col xs={12}>\n          <GridItem>\n            <a href='#'>\n              <ResponsiveImage src='https://placehold.co/400x600/ebebeb/808080/?text=Immagine' alt='Alternative Text' title='Image Title' />\n              <GridItemTextWrapper>\n                <GridItemText>Didascalia</GridItemText>\n                <Icon icon='it-code-circle' size='sm' />\n              </GridItemTextWrapper>\n            </a>\n          </GridItem>\n        </Col>\n        <Col xs={12}>\n          <GridItem>\n            <a href='#'>\n              <ResponsiveImage src='https://placehold.co/400x500/ebebeb/808080/?text=Immagine' alt='Alternative Text' title='Image Title' />\n              <GridItemTextWrapper>\n                <GridItemText>Didascalia</GridItemText>\n                <Icon icon='it-code-circle' size='sm' />\n              </GridItemTextWrapper>\n            </a>\n          </GridItem>\n        </Col>\n        <Col xs={12}>\n          <GridItem>\n            <a href='#'>\n              <ResponsiveImage src='https://placehold.co/400x400/ebebeb/808080/?text=Immagine' alt='Alternative Text' title='Image Title' />\n              <GridItemTextWrapper>\n                <GridItemText>Didascalia</GridItemText>\n                <Icon icon='it-code-circle' size='sm' />\n              </GridItemTextWrapper>\n            </a>\n          </GridItem>\n        </Col>\n        <Col xs={12}>\n          <GridItem>\n            <a href='#'>\n              <ResponsiveImage src='https://placehold.co/400x600/ebebeb/808080/?text=Immagine' alt='Alternative Text' title='Image Title' />\n              <GridItemTextWrapper>\n                <GridItemText>Didascalia</GridItemText>\n                <Icon icon='it-code-circle' size='sm' />\n              </GridItemTextWrapper>\n            </a>\n          </GridItem>\n        </Col>\n        <Col xs={12}>\n          <GridItem>\n            <a href='#'>\n              <ResponsiveImage src='https://placehold.co/400x500/ebebeb/808080/?text=Immagine' alt='Alternative Text' title='Image Title' />\n              <GridItemTextWrapper>\n                <GridItemText>Didascalia</GridItemText>\n                <Icon icon='it-code-circle' size='sm' />\n              </GridItemTextWrapper>\n            </a>\n          </GridItem>\n        </Col>\n        <Col xs={12}>\n          <GridItem>\n            <a href='#'>\n              <ResponsiveImage src='https://placehold.co/400x400/ebebeb/808080/?text=Immagine' alt='Alternative Text' title='Image Title' />\n              <GridItemTextWrapper>\n                <GridItemText>Didascalia</GridItemText>\n                <Icon icon='it-code-circle' size='sm' />\n              </GridItemTextWrapper>\n            </a>\n          </GridItem>\n        </Col>\n      </div>\n    </GridList>\n}",
      ...(_o = (_n = Masonry.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
const __namedExportsOrder = ["ElementoSingolo", "GrigliaStandard", "StandardDidascalie", "Proporzionale", "Masonry"];
const GridItemStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ElementoSingolo,
  GrigliaStandard,
  Masonry,
  Proporzionale,
  StandardDidascalie,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  ElementoSingolo as E,
  GridItemStories as G,
  Masonry as M,
  Proporzionale as P,
  ResponsiveImage as R,
  StandardDidascalie as S,
  GrigliaStandard as a,
  GridList as b,
  GridRow as c,
  GridItem as d,
  GridItemText as e,
  GridItemTextWrapper as f
};
