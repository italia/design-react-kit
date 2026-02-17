var _a, _b, _c, _d, _e, _f, _g, _h, _i;
import { e } from "./iframe-BMr-kR9u.js";
import { B as Button } from "./Button-B9FEd-mO.js";
import { C as Card } from "./Card-C5g2j2Kt.js";
import { D as Dimmer, a as DimmerButtons } from "./DimmerButtons-DuZOyB_x.js";
import "./track-focus-DbJ2CO43.js";
const colors = ["primary", "secondary"];
const meta = {
  title: "Documentazione/Componenti/Dimmer",
  component: Dimmer
};
const Esempi = {
  parameters: {
    docs: {
      controls: {
        include: ["color", "show", "icon"]
      }
    }
  },
  render: ({
    ...args
  }) => /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("div", { className: "row dimmable" }, /* @__PURE__ */ e.createElement("div", { className: "col-12 col-lg-4" }, /* @__PURE__ */ e.createElement(Card, { image: true, rounded: true, border: true }, /* @__PURE__ */ e.createElement("h3", { className: "it-card-title " }, /* @__PURE__ */ e.createElement("a", { href: "#" }, "Titolo del contenuto")), /* @__PURE__ */ e.createElement("div", { className: "it-card-image-wrapper" }, /* @__PURE__ */ e.createElement("div", { className: "ratio ratio-16x9" }, /* @__PURE__ */ e.createElement("figure", { className: "figure img-full" }, /* @__PURE__ */ e.createElement("img", { src: "https://placeholderimage.eu/api/city/800/600", alt: "Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto." })))), /* @__PURE__ */ e.createElement("div", { className: "it-card-body" }, /* @__PURE__ */ e.createElement("p", { className: "it-card-text" }, "Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.")), /* @__PURE__ */ e.createElement("footer", { className: "it-card-related it-card-footer" }, /* @__PURE__ */ e.createElement("time", { className: "it-card-date", dateTime: "2025-04-22" }, "22 aprile 2025")))), /* @__PURE__ */ e.createElement("div", { className: "col-12 col-lg-4 d-none d-lg-block" }, /* @__PURE__ */ e.createElement(Card, { image: true, rounded: true, border: true }, /* @__PURE__ */ e.createElement("h3", { className: "it-card-title " }, /* @__PURE__ */ e.createElement("a", { href: "#" }, "Titolo del contenuto")), /* @__PURE__ */ e.createElement("div", { className: "it-card-image-wrapper" }, /* @__PURE__ */ e.createElement("div", { className: "ratio ratio-16x9" }, /* @__PURE__ */ e.createElement("figure", { className: "figure img-full" }, /* @__PURE__ */ e.createElement("img", { src: "https://placeholderimage.eu/api/city/800/600", alt: "Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto." })))), /* @__PURE__ */ e.createElement("div", { className: "it-card-body" }, /* @__PURE__ */ e.createElement("p", { className: "it-card-text" }, "Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.")), /* @__PURE__ */ e.createElement("footer", { className: "it-card-related it-card-footer" }, /* @__PURE__ */ e.createElement("time", { className: "it-card-date", dateTime: "2025-04-22" }, "22 aprile 2025")))), /* @__PURE__ */ e.createElement("div", { className: "col-12 col-lg-4 d-none d-lg-block" }, /* @__PURE__ */ e.createElement(Card, { image: true, rounded: true, border: true }, /* @__PURE__ */ e.createElement("h3", { className: "it-card-title " }, /* @__PURE__ */ e.createElement("a", { href: "#" }, "Titolo del contenuto")), /* @__PURE__ */ e.createElement("div", { className: "it-card-image-wrapper" }, /* @__PURE__ */ e.createElement("div", { className: "ratio ratio-16x9" }, /* @__PURE__ */ e.createElement("figure", { className: "figure img-full" }, /* @__PURE__ */ e.createElement("img", { src: "https://placeholderimage.eu/api/city/800/600", alt: "Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto." })))), /* @__PURE__ */ e.createElement("div", { className: "it-card-body" }, /* @__PURE__ */ e.createElement("p", { className: "it-card-text" }, "Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.")), /* @__PURE__ */ e.createElement("footer", { className: "it-card-related it-card-footer" }, /* @__PURE__ */ e.createElement("time", { className: "it-card-date", dateTime: "2025-04-22" }, "22 aprile 2025"))))), /* @__PURE__ */ e.createElement(Dimmer, { ...args }, /* @__PURE__ */ e.createElement("p", null, "Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus."))),
  args: {
    color: "primary",
    show: true,
    icon: "it-unlocked"
  },
  argTypes: {
    color: {
      control: "radio",
      options: colors
    },
    show: {
      control: "boolean"
    },
    icon: {
      control: "text"
    }
  }
};
const DimmerConAzioni = {
  render: () => /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("div", { className: "row dimmable" }, /* @__PURE__ */ e.createElement("div", { className: "col-12 col-md-6 col-lg-6 my-3 my-md-4" }, /* @__PURE__ */ e.createElement(Card, { image: true, rounded: true, border: true }, /* @__PURE__ */ e.createElement("h3", { className: "it-card-title " }, /* @__PURE__ */ e.createElement("a", { href: "#" }, "Titolo del contenuto")), /* @__PURE__ */ e.createElement("div", { className: "it-card-image-wrapper" }, /* @__PURE__ */ e.createElement("div", { className: "ratio ratio-16x9" }, /* @__PURE__ */ e.createElement("figure", { className: "figure img-full" }, /* @__PURE__ */ e.createElement("img", { src: "https://placeholderimage.eu/api/city/800/600", alt: "Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto." })))), /* @__PURE__ */ e.createElement("div", { className: "it-card-body" }, /* @__PURE__ */ e.createElement("p", { className: "it-card-text" }, "Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.")), /* @__PURE__ */ e.createElement("footer", { className: "it-card-related it-card-footer" }, /* @__PURE__ */ e.createElement("time", { className: "it-card-date", dateTime: "2025-04-22" }, "22 aprile 2025")))), /* @__PURE__ */ e.createElement("div", { className: "col-12 col-md-6 col-lg-6 my-3 my-md-4" }, /* @__PURE__ */ e.createElement(Card, { image: true, rounded: true, border: true }, /* @__PURE__ */ e.createElement("h3", { className: "it-card-title " }, /* @__PURE__ */ e.createElement("a", { href: "#" }, "Titolo del contenuto")), /* @__PURE__ */ e.createElement("div", { className: "it-card-image-wrapper" }, /* @__PURE__ */ e.createElement("div", { className: "ratio ratio-16x9" }, /* @__PURE__ */ e.createElement("figure", { className: "figure img-full" }, /* @__PURE__ */ e.createElement("img", { src: "https://placeholderimage.eu/api/city/800/600", alt: "Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto." })))), /* @__PURE__ */ e.createElement("div", { className: "it-card-body" }, /* @__PURE__ */ e.createElement("p", { className: "it-card-text" }, "Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.")), /* @__PURE__ */ e.createElement("footer", { className: "it-card-related it-card-footer" }, /* @__PURE__ */ e.createElement("time", { className: "it-card-date", dateTime: "2025-04-22" }, "22 aprile 2025"))))), /* @__PURE__ */ e.createElement(Dimmer, { icon: "it-unlocked" }, /* @__PURE__ */ e.createElement("h4", null, "Titolo Dimmer"), /* @__PURE__ */ e.createElement(DimmerButtons, null, /* @__PURE__ */ e.createElement(Button, { color: "primary", outline: true }, "Azione secondaria"), /* @__PURE__ */ e.createElement(Button, { color: "primary" }, "Azione primaria"))))
};
const DimmerConAzioniColorePrimario = {
  render: () => /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("div", { className: "row dimmable" }, /* @__PURE__ */ e.createElement("div", { className: "col-12 col-md-6 col-lg-6 my-3 my-md-4" }, /* @__PURE__ */ e.createElement(Card, { image: true, rounded: true, border: true }, /* @__PURE__ */ e.createElement("h3", { className: "it-card-title " }, /* @__PURE__ */ e.createElement("a", { href: "#" }, "Titolo del contenuto")), /* @__PURE__ */ e.createElement("div", { className: "it-card-image-wrapper" }, /* @__PURE__ */ e.createElement("div", { className: "ratio ratio-16x9" }, /* @__PURE__ */ e.createElement("figure", { className: "figure img-full" }, /* @__PURE__ */ e.createElement("img", { src: "https://placeholderimage.eu/api/city/800/600", alt: "Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto." })))), /* @__PURE__ */ e.createElement("div", { className: "it-card-body" }, /* @__PURE__ */ e.createElement("p", { className: "it-card-text" }, "Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.")), /* @__PURE__ */ e.createElement("footer", { className: "it-card-related it-card-footer" }, /* @__PURE__ */ e.createElement("time", { className: "it-card-date", dateTime: "2025-04-22" }, "22 aprile 2025")))), /* @__PURE__ */ e.createElement("div", { className: "col-12 col-md-6 col-lg-6 my-3 my-md-4" }, /* @__PURE__ */ e.createElement(Card, { image: true, rounded: true, border: true }, /* @__PURE__ */ e.createElement("h3", { className: "it-card-title " }, /* @__PURE__ */ e.createElement("a", { href: "#" }, "Titolo del contenuto")), /* @__PURE__ */ e.createElement("div", { className: "it-card-image-wrapper" }, /* @__PURE__ */ e.createElement("div", { className: "ratio ratio-16x9" }, /* @__PURE__ */ e.createElement("figure", { className: "figure img-full" }, /* @__PURE__ */ e.createElement("img", { src: "https://placeholderimage.eu/api/city/800/600", alt: "Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto." })))), /* @__PURE__ */ e.createElement("div", { className: "it-card-body" }, /* @__PURE__ */ e.createElement("p", { className: "it-card-text" }, "Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.")), /* @__PURE__ */ e.createElement("footer", { className: "it-card-related it-card-footer" }, /* @__PURE__ */ e.createElement("time", { className: "it-card-date", dateTime: "2025-04-22" }, "22 aprile 2025"))))), /* @__PURE__ */ e.createElement(Dimmer, { color: "primary", icon: "it-unlocked" }, /* @__PURE__ */ e.createElement("h4", null, "Titolo Dimmer"), /* @__PURE__ */ e.createElement(DimmerButtons, { single: true }, /* @__PURE__ */ e.createElement(Button, { color: "primary" }, "Azione primaria"))))
};
Esempi.parameters = {
  ...Esempi.parameters,
  docs: {
    ...(_a = Esempi.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: `{
  parameters: {
    docs: {
      controls: {
        include: ['color', 'show', 'icon']
      }
    }
  },
  render: ({
    ...args
  }) => <div>
      <div className='row dimmable'>
        <div className='col-12 col-lg-4'>
          {/* start card */}
          <Card image rounded border>
            <h3 className="it-card-title ">
              <a href="#">Titolo del contenuto</a>
            </h3>
            <div className="it-card-image-wrapper">
              <div className="ratio ratio-16x9">
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
        </div>

        <div className='col-12 col-lg-4 d-none d-lg-block'>
          {/* start card */}
          <Card image rounded border>
            <h3 className="it-card-title ">
              <a href="#">Titolo del contenuto</a>
            </h3>
            <div className="it-card-image-wrapper">
              <div className="ratio ratio-16x9">
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
        </div>
        <div className='col-12 col-lg-4 d-none d-lg-block'>
          {/* start card */}
          <Card image rounded border>
            <h3 className="it-card-title ">
              <a href="#">Titolo del contenuto</a>
            </h3>
            <div className="it-card-image-wrapper">
              <div className="ratio ratio-16x9">
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
        </div>
      </div>
      <Dimmer {...args}>
        <p>
          Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo
          donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
        </p>
      </Dimmer>
    </div>,
  args: {
    color: 'primary',
    show: true,
    icon: 'it-unlocked'
  },
  argTypes: {
    color: {
      control: 'radio',
      options: colors
    },
    show: {
      control: 'boolean'
    },
    icon: {
      control: 'text'
    }
  }
}`,
      ...(_c = (_b = Esempi.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
DimmerConAzioni.parameters = {
  ...DimmerConAzioni.parameters,
  docs: {
    ...(_d = DimmerConAzioni.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: `{
  render: () => <div>
      <div className='row dimmable'>
        <div className='col-12 col-md-6 col-lg-6 my-3 my-md-4'>
          {/* start card */}
          <Card image rounded border>
            <h3 className="it-card-title ">
              <a href="#">Titolo del contenuto</a>
            </h3>
            <div className="it-card-image-wrapper">
              <div className="ratio ratio-16x9">
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
        </div>
        <div className='col-12 col-md-6 col-lg-6 my-3 my-md-4'>
          {/* start card */}
          <Card image rounded border>
            <h3 className="it-card-title ">
              <a href="#">Titolo del contenuto</a>
            </h3>
            <div className="it-card-image-wrapper">
              <div className="ratio ratio-16x9">
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
        </div>
      </div>
      <Dimmer icon='it-unlocked'>
        <h4>Titolo Dimmer</h4>
        <DimmerButtons>
          <Button color='primary' outline>
            Azione secondaria
          </Button>
          <Button color='primary'>Azione primaria</Button>
        </DimmerButtons>
      </Dimmer>
    </div>
}`,
      ...(_f = (_e = DimmerConAzioni.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
DimmerConAzioniColorePrimario.parameters = {
  ...DimmerConAzioniColorePrimario.parameters,
  docs: {
    ...(_g = DimmerConAzioniColorePrimario.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: `{
  render: () => <div>
      <div className='row dimmable'>
        <div className='col-12 col-md-6 col-lg-6 my-3 my-md-4'>
          {/* start card */}
          <Card image rounded border>
            <h3 className="it-card-title ">
              <a href="#">Titolo del contenuto</a>
            </h3>
            <div className="it-card-image-wrapper">
              <div className="ratio ratio-16x9">
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
        </div>
        <div className='col-12 col-md-6 col-lg-6 my-3 my-md-4'>
          {/* start card */}
          <Card image rounded border>
            <h3 className="it-card-title ">
              <a href="#">Titolo del contenuto</a>
            </h3>
            <div className="it-card-image-wrapper">
              <div className="ratio ratio-16x9">
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
        </div>
      </div>
      <Dimmer color='primary' icon='it-unlocked'>
        <h4>Titolo Dimmer</h4>
        <DimmerButtons single>
          <Button color='primary'>Azione primaria</Button>
        </DimmerButtons>
      </Dimmer>
    </div>
}`,
      ...(_i = (_h = DimmerConAzioniColorePrimario.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
const __namedExportsOrder = ["Esempi", "DimmerConAzioni", "DimmerConAzioniColorePrimario"];
const DimmerStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DimmerConAzioni,
  DimmerConAzioniColorePrimario,
  Esempi,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  DimmerStories as D,
  Esempi as E,
  DimmerConAzioni as a,
  DimmerConAzioniColorePrimario as b
};
