var _a, _b, _c;
import { e } from "./iframe-DGcxMoyJ.js";
import { R as Row, C as Col } from "./Col-Kbz4ORpX.js";
import { C as Card } from "./Card-C0lPOQDF.js";
import { c as classNames } from "./index-yYkzrc3Z.js";
import { I as Icon } from "./Icon-DyCGQbBS.js";
import "./track-focus-DbJ2CO43.js";
const TimelinePin = ({
  iconName = "it-code-circle",
  icon = "it-code-circle",
  iconTitle = "",
  label = " ",
  past,
  now,
  nowText,
  testId,
  className,
  tag = "h3",
  ...attributes
}) => {
  const { children, ...rest } = attributes;
  const classes = classNames("timeline-element", className);
  const innerClasses = classNames("it-pin-wrapper", className, {
    "it-evidence": past,
    "it-now": now
  });
  const pinIcon = /* @__PURE__ */ e.createElement("div", { className: "pin-icon" }, /* @__PURE__ */ e.createElement(Icon, { icon: iconName || icon, role: "img", title: iconTitle }));
  const pinLabel = /* @__PURE__ */ e.createElement("div", { className: "pin-text" }, /* @__PURE__ */ e.createElement("span", null, label));
  const pinTextNow = now && /* @__PURE__ */ e.createElement("span", { className: "it-now-label d-none d-lg-flex" }, nowText);
  const Tag = tag;
  return /* @__PURE__ */ e.createElement("div", { className: classes, "data-testid": testId }, pinTextNow, /* @__PURE__ */ e.createElement(Tag, { className: innerClasses, ...rest }, pinIcon, pinLabel), children);
};
TimelinePin.__docgenInfo = { "description": "", "methods": [], "displayName": "TimelinePin", "props": { "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente TimelinePin" }, "iconName": { "required": false, "tsType": { "name": "string" }, "description": "Mostra un'icona all'interno del TimelinePin. Passare il nome dell'icona per utilizzarlo.", "defaultValue": { "value": "'it-code-circle'", "computed": false } }, "icon": { "required": false, "tsType": { "name": "string" }, "description": "Mostra un'icona all'interno del TimelinePin. Passare il nome dell'icona per utilizzarlo.\n@deprecated. Utilizzare `iconName`.", "defaultValue": { "value": "'it-code-circle'", "computed": false } }, "iconTitle": { "required": false, "tsType": { "name": "string" }, "description": "Titolo dell'icona all'interno del TimelinePin.", "defaultValue": { "value": "''", "computed": false } }, "label": { "required": false, "tsType": { "name": "string" }, "description": "Etichetta da associare all'elemento", "defaultValue": { "value": "' '", "computed": false } }, "now": { "required": false, "tsType": { "name": "boolean" }, "description": "Quando abilitato indica che l'evento TimelinePin è collocato nel presente (azzurro)" }, "nowText": { "required": false, "tsType": { "name": "string" }, "description": "Da utilizzare per mostrare un'etichetta per l'evento nel presente" }, "past": { "required": false, "tsType": { "name": "boolean" }, "description": "Quando abilitato indica che l'evento TimelinePin è collocato nel passato (blu scuro)" }, "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Tag del pin da utilizzare a seconda della struttura", "defaultValue": { "value": "'h3'", "computed": false } }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const Timeline = (props) => {
  const { className, testId, ...attributes } = props;
  const { children, ...rest } = attributes;
  const timelineWrapper = classNames(className, "it-timeline-wrapper");
  return /* @__PURE__ */ e.createElement("div", { className: timelineWrapper, ...rest, "data-testid": testId }, children);
};
Timeline.__docgenInfo = { "description": "", "methods": [], "displayName": "Timeline", "props": { "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente TimelineProps" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const meta = {
  title: "Documentazione/Componenti/Timeline",
  component: Timeline
};
const Esempi = {
  render: () => /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(Timeline, null, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { xs: "12" }, /* @__PURE__ */ e.createElement(TimelinePin, { label: "maggio 2018", past: true, iconTitle: "Segnaposto" }, /* @__PURE__ */ e.createElement(Card, { rounded: true, image: true, shadow: "sm" }, /* @__PURE__ */ e.createElement("h4", { className: "it-card-title " }, /* @__PURE__ */ e.createElement("a", { href: "#" }, "Titolo del contenuto")), /* @__PURE__ */ e.createElement("div", { className: "it-card-image-wrapper" }, /* @__PURE__ */ e.createElement("div", { className: "ratio ratio-21x9" }, /* @__PURE__ */ e.createElement("figure", { className: "figure img-full" }, /* @__PURE__ */ e.createElement("img", { src: "https://placeholderimage.eu/api/city/800/600", alt: "Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto." })))), /* @__PURE__ */ e.createElement("div", { className: "it-card-body" }, /* @__PURE__ */ e.createElement("p", { className: "it-card-text" }, "Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.")), /* @__PURE__ */ e.createElement("footer", { className: "it-card-related it-card-footer" }, /* @__PURE__ */ e.createElement("time", { className: "it-card-date", dateTime: "2025-04-22" }, "22 aprile 2025"))))), /* @__PURE__ */ e.createElement(Col, { xs: "12" }, /* @__PURE__ */ e.createElement(TimelinePin, { label: "giugno 2018", past: true, iconTitle: "Segnaposto" }, /* @__PURE__ */ e.createElement(Card, { rounded: true, border: true, image: true }, /* @__PURE__ */ e.createElement("h4", { className: "it-card-title " }, /* @__PURE__ */ e.createElement("a", { href: "#" }, "Titolo del contenuto")), /* @__PURE__ */ e.createElement("div", { className: "it-card-image-wrapper" }, /* @__PURE__ */ e.createElement("div", { className: "ratio ratio-21x9" }, /* @__PURE__ */ e.createElement("figure", { className: "figure img-full" }, /* @__PURE__ */ e.createElement("img", { src: "https://placeholderimage.eu/api/city/800/600", alt: "Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto." })))), /* @__PURE__ */ e.createElement("div", { className: "it-card-body" }, /* @__PURE__ */ e.createElement("p", { className: "it-card-text" }, "Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.")), /* @__PURE__ */ e.createElement("footer", { className: "it-card-related it-card-footer" }, /* @__PURE__ */ e.createElement("time", { className: "it-card-date", dateTime: "2025-04-22" }, "22 aprile 2025"))))), /* @__PURE__ */ e.createElement(Col, { xs: "12" }, /* @__PURE__ */ e.createElement(TimelinePin, { label: "luglio 2018", past: true, iconTitle: "Segnaposto" }, /* @__PURE__ */ e.createElement(Card, { rounded: true, border: true, image: true }, /* @__PURE__ */ e.createElement("h4", { className: "it-card-title " }, /* @__PURE__ */ e.createElement("a", { href: "#" }, "Titolo del contenuto")), /* @__PURE__ */ e.createElement("div", { className: "it-card-image-wrapper" }, /* @__PURE__ */ e.createElement("div", { className: "ratio ratio-21x9" }, /* @__PURE__ */ e.createElement("figure", { className: "figure img-full" }, /* @__PURE__ */ e.createElement("img", { src: "https://placeholderimage.eu/api/city/800/600", alt: "Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto." })))), /* @__PURE__ */ e.createElement("div", { className: "it-card-body" }, /* @__PURE__ */ e.createElement("p", { className: "it-card-text" }, "Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.")), /* @__PURE__ */ e.createElement("footer", { className: "it-card-related it-card-footer" }, /* @__PURE__ */ e.createElement("time", { className: "it-card-date", dateTime: "2025-04-22" }, "22 aprile 2025"))))), /* @__PURE__ */ e.createElement(Col, { xs: "12" }, /* @__PURE__ */ e.createElement(TimelinePin, { label: "agosto 2018", now: true, nowText: "Oggi", iconTitle: "Segnaposto" }, /* @__PURE__ */ e.createElement(Card, { rounded: true, border: true, image: true }, /* @__PURE__ */ e.createElement("h4", { className: "it-card-title " }, /* @__PURE__ */ e.createElement("a", { href: "#" }, "Titolo del contenuto")), /* @__PURE__ */ e.createElement("div", { className: "it-card-image-wrapper" }, /* @__PURE__ */ e.createElement("div", { className: "ratio ratio-21x9" }, /* @__PURE__ */ e.createElement("figure", { className: "figure img-full" }, /* @__PURE__ */ e.createElement("img", { src: "https://placeholderimage.eu/api/city/800/600", alt: "Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto." })))), /* @__PURE__ */ e.createElement("div", { className: "it-card-body" }, /* @__PURE__ */ e.createElement("p", { className: "it-card-text" }, "Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.")), /* @__PURE__ */ e.createElement("footer", { className: "it-card-related it-card-footer" }, /* @__PURE__ */ e.createElement("time", { className: "it-card-date", dateTime: "2025-04-22" }, "22 aprile 2025"))))), /* @__PURE__ */ e.createElement(Col, { xs: "12" }, /* @__PURE__ */ e.createElement(TimelinePin, { label: "settembre 2018", iconTitle: "Segnaposto" }, /* @__PURE__ */ e.createElement(Card, { rounded: true, border: true, image: true }, /* @__PURE__ */ e.createElement("h4", { className: "it-card-title " }, /* @__PURE__ */ e.createElement("a", { href: "#" }, "Titolo del contenuto")), /* @__PURE__ */ e.createElement("div", { className: "it-card-image-wrapper" }, /* @__PURE__ */ e.createElement("div", { className: "ratio ratio-21x9" }, /* @__PURE__ */ e.createElement("figure", { className: "figure img-full" }, /* @__PURE__ */ e.createElement("img", { src: "https://placeholderimage.eu/api/city/800/600", alt: "Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto." })))), /* @__PURE__ */ e.createElement("div", { className: "it-card-body" }, /* @__PURE__ */ e.createElement("p", { className: "it-card-text" }, "Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.")), /* @__PURE__ */ e.createElement("footer", { className: "it-card-related it-card-footer" }, /* @__PURE__ */ e.createElement("time", { className: "it-card-date", dateTime: "2025-04-22" }, "22 aprile 2025"))))), /* @__PURE__ */ e.createElement(Col, { xs: "12" }, /* @__PURE__ */ e.createElement(TimelinePin, { label: "ottobre 2018", iconTitle: "Segnaposto" }, /* @__PURE__ */ e.createElement(Card, { rounded: true, border: true, image: true }, /* @__PURE__ */ e.createElement("h4", { className: "it-card-title " }, /* @__PURE__ */ e.createElement("a", { href: "#" }, "Titolo del contenuto")), /* @__PURE__ */ e.createElement("div", { className: "it-card-image-wrapper" }, /* @__PURE__ */ e.createElement("div", { className: "ratio ratio-21x9" }, /* @__PURE__ */ e.createElement("figure", { className: "figure img-full" }, /* @__PURE__ */ e.createElement("img", { src: "https://placeholderimage.eu/api/city/800/600", alt: "Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto." })))), /* @__PURE__ */ e.createElement("div", { className: "it-card-body" }, /* @__PURE__ */ e.createElement("p", { className: "it-card-text" }, "Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.")), /* @__PURE__ */ e.createElement("footer", { className: "it-card-related it-card-footer" }, /* @__PURE__ */ e.createElement("time", { className: "it-card-date", dateTime: "2025-04-22" }, "22 aprile 2025"))))), /* @__PURE__ */ e.createElement(Col, { xs: "12" }, /* @__PURE__ */ e.createElement(TimelinePin, { label: "novembre 2018", iconTitle: "Segnaposto" }, /* @__PURE__ */ e.createElement(Card, { rounded: true, border: true, image: true }, /* @__PURE__ */ e.createElement("h4", { className: "it-card-title " }, /* @__PURE__ */ e.createElement("a", { href: "#" }, "Titolo del contenuto")), /* @__PURE__ */ e.createElement("div", { className: "it-card-image-wrapper" }, /* @__PURE__ */ e.createElement("div", { className: "ratio ratio-21x9" }, /* @__PURE__ */ e.createElement("figure", { className: "figure img-full" }, /* @__PURE__ */ e.createElement("img", { src: "https://placeholderimage.eu/api/city/800/600", alt: "Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto." })))), /* @__PURE__ */ e.createElement("div", { className: "it-card-body" }, /* @__PURE__ */ e.createElement("p", { className: "it-card-text" }, "Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.")), /* @__PURE__ */ e.createElement("footer", { className: "it-card-related it-card-footer" }, /* @__PURE__ */ e.createElement("time", { className: "it-card-date", dateTime: "2025-04-22" }, "22 aprile 2025"))))), /* @__PURE__ */ e.createElement(Col, { xs: "12" }, /* @__PURE__ */ e.createElement(TimelinePin, { label: "dicembre 2018", iconTitle: "Segnaposto" }, /* @__PURE__ */ e.createElement(Card, { rounded: true, border: true, image: true }, /* @__PURE__ */ e.createElement("h4", { className: "it-card-title " }, /* @__PURE__ */ e.createElement("a", { href: "#" }, "Titolo del contenuto")), /* @__PURE__ */ e.createElement("div", { className: "it-card-image-wrapper" }, /* @__PURE__ */ e.createElement("div", { className: "ratio ratio-21x9" }, /* @__PURE__ */ e.createElement("figure", { className: "figure img-full" }, /* @__PURE__ */ e.createElement("img", { src: "https://placeholderimage.eu/api/city/800/600", alt: "Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto." })))), /* @__PURE__ */ e.createElement("div", { className: "it-card-body" }, /* @__PURE__ */ e.createElement("p", { className: "it-card-text" }, "Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.")), /* @__PURE__ */ e.createElement("footer", { className: "it-card-related it-card-footer" }, /* @__PURE__ */ e.createElement("time", { className: "it-card-date", dateTime: "2025-04-22" }, "22 aprile 2025"))))))))
};
Esempi.parameters = {
  ...Esempi.parameters,
  docs: {
    ...(_a = Esempi.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: `{
  render: () => <div>
      <Timeline>
        <Row>
          <Col xs='12'>
            <TimelinePin label='maggio 2018' past iconTitle='Segnaposto'>
              {/* start card */}
              <Card rounded image shadow={'sm'}>
                <h4 className="it-card-title ">
                  <a href="#">Titolo del contenuto</a>
                </h4>
                <div className="it-card-image-wrapper">
                  <div className="ratio ratio-21x9">
                    <figure className="figure img-full">
                      <img src="https://placeholderimage.eu/api/city/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."></img>
                    </figure>
                  </div>
                </div>
                <div className="it-card-body">
                  <p className="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
                </div>
                <footer className="it-card-related it-card-footer">
                  <time className="it-card-date" dateTime="2025-04-22">22 aprile 2025</time>
                </footer>
              </Card>
              {/* end card */}
            </TimelinePin>
          </Col>
          <Col xs='12'>
            <TimelinePin label='giugno 2018' past iconTitle='Segnaposto'>
              {/* start card */}
              <Card rounded border image>
                <h4 className="it-card-title ">
                  <a href="#">Titolo del contenuto</a>
                </h4>
                <div className="it-card-image-wrapper">
                  <div className="ratio ratio-21x9">
                    <figure className="figure img-full">
                      <img src="https://placeholderimage.eu/api/city/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."></img>
                    </figure>
                  </div>
                </div>
                <div className="it-card-body">
                  <p className="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
                </div>
                <footer className="it-card-related it-card-footer">
                  <time className="it-card-date" dateTime="2025-04-22">22 aprile 2025</time>
                </footer>
              </Card>
              {/* end card */}
            </TimelinePin>
          </Col>
          <Col xs='12'>
            <TimelinePin label='luglio 2018' past iconTitle='Segnaposto'>
              {/* start card */}
              <Card rounded border image>
                <h4 className="it-card-title ">
                  <a href="#">Titolo del contenuto</a>
                </h4>
                <div className="it-card-image-wrapper">
                  <div className="ratio ratio-21x9">
                    <figure className="figure img-full">
                      <img src="https://placeholderimage.eu/api/city/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."></img>
                    </figure>
                  </div>
                </div>
                <div className="it-card-body">
                  <p className="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
                </div>
                <footer className="it-card-related it-card-footer">
                  <time className="it-card-date" dateTime="2025-04-22">22 aprile 2025</time>
                </footer>
              </Card>
              {/* end card */}
            </TimelinePin>
          </Col>
          <Col xs='12'>
            <TimelinePin label='agosto 2018' now nowText='Oggi' iconTitle='Segnaposto'>
              {/* start card */}
              <Card rounded border image>
                <h4 className="it-card-title ">
                  <a href="#">Titolo del contenuto</a>
                </h4>
                <div className="it-card-image-wrapper">
                  <div className="ratio ratio-21x9">
                    <figure className="figure img-full">
                      <img src="https://placeholderimage.eu/api/city/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."></img>
                    </figure>
                  </div>
                </div>
                <div className="it-card-body">
                  <p className="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
                </div>
                <footer className="it-card-related it-card-footer">
                  <time className="it-card-date" dateTime="2025-04-22">22 aprile 2025</time>
                </footer>
              </Card>
              {/* end card */}
            </TimelinePin>
          </Col>
          <Col xs='12'>
            <TimelinePin label='settembre 2018' iconTitle='Segnaposto'>
              {/* start card */}
              <Card rounded border image>
                <h4 className="it-card-title ">
                  <a href="#">Titolo del contenuto</a>
                </h4>
                <div className="it-card-image-wrapper">
                  <div className="ratio ratio-21x9">
                    <figure className="figure img-full">
                      <img src="https://placeholderimage.eu/api/city/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."></img>
                    </figure>
                  </div>
                </div>
                <div className="it-card-body">
                  <p className="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
                </div>
                <footer className="it-card-related it-card-footer">
                  <time className="it-card-date" dateTime="2025-04-22">22 aprile 2025</time>
                </footer>
              </Card>
              {/* end card */}
            </TimelinePin>
          </Col>
          <Col xs='12'>
            <TimelinePin label='ottobre 2018' iconTitle='Segnaposto'>
              {/* start card */}
              <Card rounded border image>
                <h4 className="it-card-title ">
                  <a href="#">Titolo del contenuto</a>
                </h4>
                <div className="it-card-image-wrapper">
                  <div className="ratio ratio-21x9">
                    <figure className="figure img-full">
                      <img src="https://placeholderimage.eu/api/city/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."></img>
                    </figure>
                  </div>
                </div>
                <div className="it-card-body">
                  <p className="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
                </div>
                <footer className="it-card-related it-card-footer">
                  <time className="it-card-date" dateTime="2025-04-22">22 aprile 2025</time>
                </footer>
              </Card>
              {/* end card */}
            </TimelinePin>
          </Col>
          <Col xs='12'>
            <TimelinePin label='novembre 2018' iconTitle='Segnaposto'>
              {/* start card */}
              <Card rounded border image>
                <h4 className="it-card-title ">
                  <a href="#">Titolo del contenuto</a>
                </h4>
                <div className="it-card-image-wrapper">
                  <div className="ratio ratio-21x9">
                    <figure className="figure img-full">
                      <img src="https://placeholderimage.eu/api/city/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."></img>
                    </figure>
                  </div>
                </div>
                <div className="it-card-body">
                  <p className="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
                </div>
                <footer className="it-card-related it-card-footer">
                  <time className="it-card-date" dateTime="2025-04-22">22 aprile 2025</time>
                </footer>
              </Card>
              {/* end card */}
            </TimelinePin>
          </Col>
          <Col xs='12'>
            <TimelinePin label='dicembre 2018' iconTitle='Segnaposto'>
              {/* start card */}
              <Card rounded border image>
                <h4 className="it-card-title ">
                  <a href="#">Titolo del contenuto</a>
                </h4>
                <div className="it-card-image-wrapper">
                  <div className="ratio ratio-21x9">
                    <figure className="figure img-full">
                      <img src="https://placeholderimage.eu/api/city/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."></img>
                    </figure>
                  </div>
                </div>
                <div className="it-card-body">
                  <p className="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
                </div>
                <footer className="it-card-related it-card-footer">
                  <time className="it-card-date" dateTime="2025-04-22">22 aprile 2025</time>
                </footer>
              </Card>
              {/* end card */}
            </TimelinePin>
          </Col>
        </Row>
      </Timeline>
    </div>
}`,
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
