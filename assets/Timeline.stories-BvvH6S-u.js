var _a, _b, _c;
import { R as React } from "./index-CQCy530F.js";
import { c as classNames } from "./index-CpyNLP69.js";
import { R as Row, C as Col } from "./Col-DTtAS2uD.js";
import { I as Icon } from "./Icon-io8Ds3f9.js";
import { C as Card } from "./Card-DwMgcAmL.js";
import { C as CardBody, a as CardText } from "./CardText-C_rsIDQI.js";
import { C as CardCategory } from "./CardCategory-DAyooAgu.js";
import { C as CardTitle } from "./CardTitle-9rUeaSmq.js";
import { C as CardSignature, a as CardReadMore } from "./CardSignature-9xh1GHVO.js";
const TimelinePin = ({
  iconName = "it-code-circle",
  icon = "it-code-circle",
  label = " ",
  past,
  now,
  nowText,
  testId,
  className,
  ...attributes
}) => {
  const { children, ...rest } = attributes;
  const classes = classNames("timeline-element", className);
  const innerClasses = classNames("it-pin-wrapper", className, {
    "it-evidence": past,
    "it-now": now
  });
  const pinIcon = /* @__PURE__ */ React.createElement("div", { className: "pin-icon" }, /* @__PURE__ */ React.createElement(Icon, { icon: iconName || icon }));
  const pinLabel = /* @__PURE__ */ React.createElement("div", { className: "pin-text" }, /* @__PURE__ */ React.createElement("span", null, label));
  const pinTextNow = now && /* @__PURE__ */ React.createElement("span", { className: "it-now-label d-none d-lg-flex" }, nowText);
  return /* @__PURE__ */ React.createElement("div", { className: classes, "data-testid": testId }, pinTextNow, /* @__PURE__ */ React.createElement("div", { className: innerClasses, ...rest }, pinIcon, pinLabel), children);
};
TimelinePin.__docgenInfo = { "description": "", "methods": [], "displayName": "TimelinePin", "props": { "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente TimelinePin" }, "iconName": { "required": false, "tsType": { "name": "string" }, "description": "Mostra un'icona all'interno del TimelinePin. Passare il nome dell'icona per utilizzarlo.", "defaultValue": { "value": "'it-code-circle'", "computed": false } }, "icon": { "required": false, "tsType": { "name": "string" }, "description": "Mostra un'icona all'interno del TimelinePin. Passare il nome dell'icona per utilizzarlo.\n@deprecated. Utilizzare `iconName`.", "defaultValue": { "value": "'it-code-circle'", "computed": false } }, "label": { "required": false, "tsType": { "name": "string" }, "description": "Etichetta da associare all'elemento", "defaultValue": { "value": "' '", "computed": false } }, "now": { "required": false, "tsType": { "name": "boolean" }, "description": "Quando abilitato indica che l'evento TimelinePin è collocato nel presente (azzurro)" }, "nowText": { "required": false, "tsType": { "name": "string" }, "description": "Da utilizzare per mostrare un'etichetta per l'evento nel presente" }, "past": { "required": false, "tsType": { "name": "boolean" }, "description": "Quando abilitato indica che l'evento TimelinePin è collocato nel passato (blu scuro)" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const Timeline = (props) => {
  const { className, testId, ...attributes } = props;
  const { children, ...rest } = attributes;
  const timelineWrapper = classNames(className, "it-timeline-wrapper");
  return /* @__PURE__ */ React.createElement("div", { className: timelineWrapper, ...rest, "data-testid": testId }, children);
};
Timeline.__docgenInfo = { "description": "", "methods": [], "displayName": "Timeline", "props": { "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente TimelineProps" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const meta = {
  title: "Documentazione/Componenti/Timeline",
  component: Timeline
};
const Esempi = {
  render: () => /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Timeline, null, /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, {
    xs: "12"
  }, /* @__PURE__ */ React.createElement(TimelinePin, {
    label: "maggio 2018",
    past: true
  }, /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(CardBody, null, /* @__PURE__ */ React.createElement(CardCategory, {
    date: "10/12/2018"
  }, "Category"), /* @__PURE__ */ React.createElement(CardTitle, {
    tag: "h5",
    className: "big-heading"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit…"), /* @__PURE__ */ React.createElement(CardText, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), /* @__PURE__ */ React.createElement(CardSignature, null, "di Federico De Paolis"), /* @__PURE__ */ React.createElement(CardReadMore, {
    text: "Leggi di più",
    iconName: "it-arrow-right"
  }))))), /* @__PURE__ */ React.createElement(Col, {
    xs: "12"
  }, /* @__PURE__ */ React.createElement(TimelinePin, {
    label: "giugno 2018",
    past: true
  }, /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(CardBody, null, /* @__PURE__ */ React.createElement(CardTitle, {
    tag: "h5"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"), /* @__PURE__ */ React.createElement(CardText, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))), /* @__PURE__ */ React.createElement(Col, {
    xs: "12"
  }, /* @__PURE__ */ React.createElement(TimelinePin, {
    label: "luglio 2018",
    past: true
  }, /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(CardBody, null, /* @__PURE__ */ React.createElement(CardCategory, {
    date: "10/12/2018"
  }, "Category"), /* @__PURE__ */ React.createElement(CardTitle, {
    tag: "h5",
    className: "big-heading"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit…"), /* @__PURE__ */ React.createElement(CardText, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), /* @__PURE__ */ React.createElement(CardSignature, null, "di Federico De Paolis"), /* @__PURE__ */ React.createElement(CardReadMore, {
    text: "Leggi di più",
    iconName: "it-arrow-right"
  }))))), /* @__PURE__ */ React.createElement(Col, {
    xs: "12"
  }, /* @__PURE__ */ React.createElement(TimelinePin, {
    label: "agosto 2018",
    now: true,
    nowText: "Oggi"
  }, /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(CardBody, null, /* @__PURE__ */ React.createElement(CardTitle, {
    tag: "h5"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"), /* @__PURE__ */ React.createElement(CardText, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))), /* @__PURE__ */ React.createElement(Col, {
    xs: "12"
  }, /* @__PURE__ */ React.createElement(TimelinePin, {
    label: "settembre 2018"
  }, /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(CardBody, null, /* @__PURE__ */ React.createElement(CardCategory, {
    date: "10/12/2018"
  }, "Category"), /* @__PURE__ */ React.createElement(CardTitle, {
    tag: "h5",
    className: "big-heading"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit…"), /* @__PURE__ */ React.createElement(CardText, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), /* @__PURE__ */ React.createElement(CardSignature, null, "di Federico De Paolis"), /* @__PURE__ */ React.createElement(CardReadMore, {
    text: "Leggi di più",
    iconName: "it-arrow-right"
  }))))), /* @__PURE__ */ React.createElement(Col, {
    xs: "12"
  }, /* @__PURE__ */ React.createElement(TimelinePin, {
    label: "ottobre 2018"
  }, /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(CardBody, null, /* @__PURE__ */ React.createElement(CardTitle, {
    tag: "h5"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"), /* @__PURE__ */ React.createElement(CardText, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))), /* @__PURE__ */ React.createElement(Col, {
    xs: "12"
  }, /* @__PURE__ */ React.createElement(TimelinePin, {
    label: "novembre 2018"
  }, /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(CardBody, null, /* @__PURE__ */ React.createElement(CardCategory, {
    date: "10/12/2018"
  }, "Category"), /* @__PURE__ */ React.createElement(CardTitle, {
    tag: "h5",
    className: "big-heading"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit…"), /* @__PURE__ */ React.createElement(CardText, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), /* @__PURE__ */ React.createElement(CardSignature, null, "di Federico De Paolis"), /* @__PURE__ */ React.createElement(CardReadMore, {
    text: "Leggi di più",
    iconName: "it-arrow-right"
  }))))), /* @__PURE__ */ React.createElement(Col, {
    xs: "12"
  }, /* @__PURE__ */ React.createElement(TimelinePin, {
    label: "dicembre 2018"
  }, /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(CardBody, null, /* @__PURE__ */ React.createElement(CardTitle, {
    tag: "h5"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"), /* @__PURE__ */ React.createElement(CardText, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))))))
};
Esempi.parameters = {
  ...Esempi.parameters,
  docs: {
    ...(_a = Esempi.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: () => <div>\n      <Timeline>\n        <Row>\n          <Col xs='12'>\n            <TimelinePin label='maggio 2018' past>\n              {/* start card */}\n              <Card>\n                <CardBody>\n                  <CardCategory date='10/12/2018'>Category</CardCategory>\n                  <CardTitle tag='h5' className='big-heading'>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit…\n                  </CardTitle>\n                  <CardText>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                    dolore magna aliqua.\n                  </CardText>\n                  <CardSignature>di Federico De Paolis</CardSignature>\n                  <CardReadMore text='Leggi di più' iconName='it-arrow-right' />\n                </CardBody>\n              </Card>\n              {/* end card */}\n            </TimelinePin>\n          </Col>\n          <Col xs='12'>\n            <TimelinePin label='giugno 2018' past>\n              {/* start card */}\n              <Card>\n                <CardBody>\n                  <CardTitle tag='h5'>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…\n                  </CardTitle>\n                  <CardText>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                    dolore magna aliqua.\n                  </CardText>\n                </CardBody>\n              </Card>\n              {/* end card */}\n            </TimelinePin>\n          </Col>\n          <Col xs='12'>\n            <TimelinePin label='luglio 2018' past>\n              {/* start card */}\n              <Card>\n                <CardBody>\n                  <CardCategory date='10/12/2018'>Category</CardCategory>\n                  <CardTitle tag='h5' className='big-heading'>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit…\n                  </CardTitle>\n                  <CardText>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                    dolore magna aliqua.\n                  </CardText>\n                  <CardSignature>di Federico De Paolis</CardSignature>\n                  <CardReadMore text='Leggi di più' iconName='it-arrow-right' />\n                </CardBody>\n              </Card>\n              {/* end card */}\n            </TimelinePin>\n          </Col>\n          <Col xs='12'>\n            <TimelinePin label='agosto 2018' now nowText='Oggi'>\n              {/* start card */}\n              <Card>\n                <CardBody>\n                  <CardTitle tag='h5'>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…\n                  </CardTitle>\n                  <CardText>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                    dolore magna aliqua.\n                  </CardText>\n                </CardBody>\n              </Card>\n              {/* end card */}\n            </TimelinePin>\n          </Col>\n          <Col xs='12'>\n            <TimelinePin label='settembre 2018'>\n              {/* start card */}\n              <Card>\n                <CardBody>\n                  <CardCategory date='10/12/2018'>Category</CardCategory>\n                  <CardTitle tag='h5' className='big-heading'>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit…\n                  </CardTitle>\n                  <CardText>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                    dolore magna aliqua.\n                  </CardText>\n                  <CardSignature>di Federico De Paolis</CardSignature>\n                  <CardReadMore text='Leggi di più' iconName='it-arrow-right' />\n                </CardBody>\n              </Card>\n              {/* end card */}\n            </TimelinePin>\n          </Col>\n          <Col xs='12'>\n            <TimelinePin label='ottobre 2018'>\n              {/* start card */}\n              <Card>\n                <CardBody>\n                  <CardTitle tag='h5'>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…\n                  </CardTitle>\n                  <CardText>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                    dolore magna aliqua.\n                  </CardText>\n                </CardBody>\n              </Card>\n              {/* end card */}\n            </TimelinePin>\n          </Col>\n          <Col xs='12'>\n            <TimelinePin label='novembre 2018'>\n              {/* start card */}\n              <Card>\n                <CardBody>\n                  <CardCategory date='10/12/2018'>Category</CardCategory>\n                  <CardTitle tag='h5' className='big-heading'>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit…\n                  </CardTitle>\n                  <CardText>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                    dolore magna aliqua.\n                  </CardText>\n                  <CardSignature>di Federico De Paolis</CardSignature>\n                  <CardReadMore text='Leggi di più' iconName='it-arrow-right' />\n                </CardBody>\n              </Card>\n              {/* end card */}\n            </TimelinePin>\n          </Col>\n          <Col xs='12'>\n            <TimelinePin label='dicembre 2018'>\n              {/* start card */}\n              <Card>\n                <CardBody>\n                  <CardTitle tag='h5'>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…\n                  </CardTitle>\n                  <CardText>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                    dolore magna aliqua.\n                  </CardText>\n                </CardBody>\n              </Card>\n              {/* end card */}\n            </TimelinePin>\n          </Col>\n        </Row>\n      </Timeline>\n    </div>\n}",
      ...(_c = (_b = Esempi.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["Esempi"];
const TimelineStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Esempi,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  Esempi as E,
  TimelineStories as T
};
