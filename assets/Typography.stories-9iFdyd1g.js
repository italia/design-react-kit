var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca;
import { e } from "./index-BehpJNG5.js";
const meta = {
  title: "Documentazione/Organizzare i contenuti/Tipografia"
};
const Abbrevazioni = {
  render: () => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", null, /* @__PURE__ */ e.createElement("abbr", { title: "attribute" }, "attr")), /* @__PURE__ */ e.createElement("p", null, /* @__PURE__ */ e.createElement("abbr", { title: "HyperText Markup Language", className: "initialism" }, "HTML")))
};
const AllineamentoADestra = {
  render: () => /* @__PURE__ */ e.createElement("blockquote", { className: "blockquote text-end" }, /* @__PURE__ */ e.createElement("p", { className: "mb-0" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."), /* @__PURE__ */ e.createElement("footer", { className: "blockquote-footer" }, "Someone famous in ", /* @__PURE__ */ e.createElement("cite", { title: "Source Title" }, "Source Title")))
};
const AllineamentoCentrato = {
  render: () => /* @__PURE__ */ e.createElement("blockquote", { className: "blockquote text-center" }, /* @__PURE__ */ e.createElement("p", { className: "mb-0" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."), /* @__PURE__ */ e.createElement("footer", { className: "blockquote-footer" }, "Someone famous in ", /* @__PURE__ */ e.createElement("cite", { title: "Source Title" }, "Source Title")))
};
const Citazioni = {
  render: () => /* @__PURE__ */ e.createElement("blockquote", { className: "blockquote" }, /* @__PURE__ */ e.createElement("p", { className: "mb-0" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."))
};
const CitazioneFonte = {
  render: () => /* @__PURE__ */ e.createElement("blockquote", { className: "blockquote" }, /* @__PURE__ */ e.createElement("p", { className: "mb-0" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."), /* @__PURE__ */ e.createElement("footer", { className: "blockquote-footer" }, "Someone famous in ", /* @__PURE__ */ e.createElement("cite", { title: "Source Title" }, "Source Title")))
};
const Dimensioni = {
  render: () => /* @__PURE__ */ e.createElement("table", null, /* @__PURE__ */ e.createElement("thead", null, /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("th", null, "Intestazione"), /* @__PURE__ */ e.createElement("th", null, "Mobile"), /* @__PURE__ */ e.createElement("th", null, "Schermo > 576px"))), /* @__PURE__ */ e.createElement("tbody", null, /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("td", null, /* @__PURE__ */ e.createElement("h1", null, "h1")), /* @__PURE__ */ e.createElement("td", null, "Bold, 40px/48px"), /* @__PURE__ */ e.createElement("td", null, "Bold, 48px/60px")), /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("td", null, /* @__PURE__ */ e.createElement("h2", null, "h2")), /* @__PURE__ */ e.createElement("td", null, "Bold, 32px/40px"), /* @__PURE__ */ e.createElement("td", null, "Bold, 40px/48px")), /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("td", null, /* @__PURE__ */ e.createElement("h3", null, "h3")), /* @__PURE__ */ e.createElement("td", null, "Bold, 28px/32px"), /* @__PURE__ */ e.createElement("td", null, "Bold, 32px/40px")), /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("td", null, /* @__PURE__ */ e.createElement("h4", null, "h4")), /* @__PURE__ */ e.createElement("td", null, "SemiBold, 24px/28px"), /* @__PURE__ */ e.createElement("td", null, "SemiBold, 28px/40px")), /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("td", null, /* @__PURE__ */ e.createElement("h5", null, "h5")), /* @__PURE__ */ e.createElement("td", null, "Regular, 20px/24px"), /* @__PURE__ */ e.createElement("td", null, "Regular, 24px/40px")), /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("td", null, /* @__PURE__ */ e.createElement("h6", null, "h6")), /* @__PURE__ */ e.createElement("td", null, "SemiBold, 16px/24px"), /* @__PURE__ */ e.createElement("td", null, "SemiBold, 18px/28px"))))
};
const Intestazioni = {
  render: () => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("h1", null, "Intestazione di tipo h1"), /* @__PURE__ */ e.createElement("h2", null, "Intestazione di tipo h2"), /* @__PURE__ */ e.createElement("h3", null, "Intestazione di tipo h3"), /* @__PURE__ */ e.createElement("h4", null, "Intestazione di tipo h4"), /* @__PURE__ */ e.createElement("h5", null, "Intestazione di tipo h5"), /* @__PURE__ */ e.createElement("h6", null, "Intestazione di tipo h6"))
};
const IntestazioneTipo = {
  render: () => /* @__PURE__ */ e.createElement("h1", { className: "display-1" }, "Intestazione di tipo h1")
};
const IntestazioneSecondario = {
  render: () => /* @__PURE__ */ e.createElement("h4", null, "Intestazione ", /* @__PURE__ */ e.createElement("small", { className: "text-muted" }, "con testo secondario"))
};
const Link = {
  render: () => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", null, "Esempio di ", /* @__PURE__ */ e.createElement("a", { href: "#" }, "link normale"), "."), /* @__PURE__ */ e.createElement("p", null, "Esempio di ", /* @__PURE__ */ e.createElement("a", { href: "#", className: "text-decoration-none fw-bold" }, "link in grassetto senza sottolineatura"), "."))
};
const Liste = {
  render: () => /* @__PURE__ */ e.createElement("ul", { className: "list-unstyled" }, /* @__PURE__ */ e.createElement("li", null, "Lorem ipsum dolor sit amet"), /* @__PURE__ */ e.createElement("li", null, "Consectetur adipiscing elit"), /* @__PURE__ */ e.createElement("li", null, "Integer molestie lorem at massa"), /* @__PURE__ */ e.createElement("li", null, "Facilisis in pretium nisl aliquet"), /* @__PURE__ */ e.createElement("li", null, "Nulla volutpat aliquam velit", /* @__PURE__ */ e.createElement("ul", null, /* @__PURE__ */ e.createElement("li", null, "Phasellus iaculis neque"), /* @__PURE__ */ e.createElement("li", null, "Purus sodales ultricies"), /* @__PURE__ */ e.createElement("li", null, "Vestibulum laoreet porttitor sem"), /* @__PURE__ */ e.createElement("li", null, "Ac tristique libero volutpat at"))), /* @__PURE__ */ e.createElement("li", null, "Faucibus porta lacus fringilla vel"), /* @__PURE__ */ e.createElement("li", null, "Aenean sit amet erat nunc"), /* @__PURE__ */ e.createElement("li", null, "Eget porttitor lorem"))
};
const ListeAllineate = {
  render: () => /* @__PURE__ */ e.createElement("dl", { className: "row" }, /* @__PURE__ */ e.createElement("dt", { className: "col-sm-3" }, "Description lists"), /* @__PURE__ */ e.createElement("dd", { className: "col-sm-9" }, "A description list is perfect for defining terms."), /* @__PURE__ */ e.createElement("dt", { className: "col-sm-3" }, "Euismod"), /* @__PURE__ */ e.createElement("dd", { className: "col-sm-9" }, /* @__PURE__ */ e.createElement("p", null, "Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit."), /* @__PURE__ */ e.createElement("p", null, "Donec id elit non mi porta gravida at eget metus.")), /* @__PURE__ */ e.createElement("dt", { className: "col-sm-3" }, "Malesuada porta"), /* @__PURE__ */ e.createElement("dd", { className: "col-sm-9" }, "Etiam porta sem malesuada magna mollis euismod."), /* @__PURE__ */ e.createElement("dt", { className: "col-sm-3 text-truncate" }, "Truncated term is truncated"), /* @__PURE__ */ e.createElement("dd", { className: "col-sm-9" }, "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."), /* @__PURE__ */ e.createElement("dt", { className: "col-sm-3" }, "Nesting"), /* @__PURE__ */ e.createElement("dd", { className: "col-sm-9" }, /* @__PURE__ */ e.createElement("dl", { className: "row" }, /* @__PURE__ */ e.createElement("dt", { className: "col-sm-4" }, "Nested definition list"), /* @__PURE__ */ e.createElement("dd", { className: "col-sm-8" }, "Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc."))))
};
const ListeInline = {
  render: () => /* @__PURE__ */ e.createElement("ul", { className: "list-inline" }, /* @__PURE__ */ e.createElement("li", { className: "list-inline-item" }, "Lorem ipsum"), /* @__PURE__ */ e.createElement("li", { className: "list-inline-item" }, "Phasellus iaculis"), /* @__PURE__ */ e.createElement("li", { className: "list-inline-item" }, "Nulla volutpat"))
};
const Lora = {
  render: () => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", { className: "text-serif" }, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"), /* @__PURE__ */ e.createElement("p", { className: "text-serif" }, "abcdefghijklmnopqrstuvwxyz"), /* @__PURE__ */ e.createElement("p", { className: "text-serif" }, "0123456789"))
};
const Paragrafo = {
  render: () => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", null, "Ullamco laboris nisi ut aliquid ex ea commodi consequat. Curabitur blandit tempus ardua ridiculus sed magna. Curabitur est gravida et libero vitae dictum. Phasellus laoreet lorem vel dolor tempus vehicula. Magna pars studiorum, prodita quaerimus."), /* @__PURE__ */ e.createElement("p", null, "Ullamco laboris nisi ut aliquid ex ea commodi consequat. Curabitur blandit tempus ardua ridiculus sed magna. Curabitur est gravida et libero vitae dictum. Phasellus laoreet lorem vel dolor tempus vehicula. Magna pars studiorum, prodita quaerimus."))
};
const ParagrafoEvidenza = {
  render: () => /* @__PURE__ */ e.createElement("p", { className: "lead" }, "Paragrafo in evidenza")
};
const ParagrafiPersonalizzati = {
  render: () => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", null, "Esempio di testo ", /* @__PURE__ */ e.createElement("u", null, "sottolineato"), "."), /* @__PURE__ */ e.createElement("p", null, "Esempio di testo ", /* @__PURE__ */ e.createElement("mark", null, "evidenziato"), "."), /* @__PURE__ */ e.createElement("p", null, "Esempio di testo ", /* @__PURE__ */ e.createElement("em", null, "corsivo"), "."), /* @__PURE__ */ e.createElement("p", null, "Esempio di testo ", /* @__PURE__ */ e.createElement("strong", null, "in grassetto"), "."), /* @__PURE__ */ e.createElement("p", null, "Esempio di testo ", /* @__PURE__ */ e.createElement("small", null, "rimpicciolito"), "."), /* @__PURE__ */ e.createElement("p", null, "Esempio di testo ", /* @__PURE__ */ e.createElement("ins", null, "aggiuntivo"), "."), /* @__PURE__ */ e.createElement("p", null, "Esempio di testo ", /* @__PURE__ */ e.createElement("del", null, "cancellato"), " o ", /* @__PURE__ */ e.createElement("s", null, "invalido"), "."), /* @__PURE__ */ e.createElement("p", null, "Esempio di testo ", /* @__PURE__ */ e.createElement("code", null, "monospace"), "."))
};
const RobotoMono = {
  render: () => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", { className: "font-monospace" }, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"), /* @__PURE__ */ e.createElement("p", { className: "font-monospace" }, "abcdefghijklmnopqrstuvwxyz"), /* @__PURE__ */ e.createElement("p", { className: "font-monospace" }, "0123456789"))
};
const Titillium = {
  render: () => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", { className: "text-sans-serif" }, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"), /* @__PURE__ */ e.createElement("p", { className: "text-sans-serif" }, "abcdefghijklmnopqrstuvwxyz"), /* @__PURE__ */ e.createElement("p", { className: "text-sans-serif" }, "0123456789"))
};
Abbrevazioni.parameters = {
  ...Abbrevazioni.parameters,
  docs: {
    ...(_a = Abbrevazioni.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: () => <>\n      <p>\n        <abbr title='attribute'>attr</abbr>\n      </p>\n      <p>\n        <abbr title='HyperText Markup Language' className='initialism'>\n          HTML\n        </abbr>\n      </p>\n    </>\n}",
      ...(_c = (_b = Abbrevazioni.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
AllineamentoADestra.parameters = {
  ...AllineamentoADestra.parameters,
  docs: {
    ...(_d = AllineamentoADestra.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  render: () => <blockquote className='blockquote text-end'>\n      <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n      <footer className='blockquote-footer'>\n        Someone famous in <cite title='Source Title'>Source Title</cite>\n      </footer>\n    </blockquote>\n}",
      ...(_f = (_e = AllineamentoADestra.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
AllineamentoCentrato.parameters = {
  ...AllineamentoCentrato.parameters,
  docs: {
    ...(_g = AllineamentoCentrato.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  render: () => <blockquote className='blockquote text-center'>\n      <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n      <footer className='blockquote-footer'>\n        Someone famous in <cite title='Source Title'>Source Title</cite>\n      </footer>\n    </blockquote>\n}",
      ...(_i = (_h = AllineamentoCentrato.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
Citazioni.parameters = {
  ...Citazioni.parameters,
  docs: {
    ...(_j = Citazioni.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  render: () => <blockquote className='blockquote'>\n      <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n    </blockquote>\n}",
      ...(_l = (_k = Citazioni.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
CitazioneFonte.parameters = {
  ...CitazioneFonte.parameters,
  docs: {
    ...(_m = CitazioneFonte.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "{\n  render: () => <blockquote className='blockquote'>\n      <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n      <footer className='blockquote-footer'>\n        Someone famous in <cite title='Source Title'>Source Title</cite>\n      </footer>\n    </blockquote>\n}",
      ...(_o = (_n = CitazioneFonte.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
Dimensioni.parameters = {
  ...Dimensioni.parameters,
  docs: {
    ...(_p = Dimensioni.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: "{\n  render: () => <table>\n      <thead>\n        <tr>\n          <th>Intestazione</th>\n          <th>Mobile</th>\n          <th>Schermo &gt; 576px</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>\n            <h1>h1</h1>\n          </td>\n          <td>Bold, 40px/48px</td>\n          <td>Bold, 48px/60px</td>\n        </tr>\n        <tr>\n          <td>\n            <h2>h2</h2>\n          </td>\n          <td>Bold, 32px/40px</td>\n          <td>Bold, 40px/48px</td>\n        </tr>\n        <tr>\n          <td>\n            <h3>h3</h3>\n          </td>\n          <td>Bold, 28px/32px</td>\n          <td>Bold, 32px/40px</td>\n        </tr>\n        <tr>\n          <td>\n            <h4>h4</h4>\n          </td>\n          <td>SemiBold, 24px/28px</td>\n          <td>SemiBold, 28px/40px</td>\n        </tr>\n        <tr>\n          <td>\n            <h5>h5</h5>\n          </td>\n          <td>Regular, 20px/24px</td>\n          <td>Regular, 24px/40px</td>\n        </tr>\n        <tr>\n          <td>\n            <h6>h6</h6>\n          </td>\n          <td>SemiBold, 16px/24px</td>\n          <td>SemiBold, 18px/28px</td>\n        </tr>\n      </tbody>\n    </table>\n}",
      ...(_r = (_q = Dimensioni.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
Intestazioni.parameters = {
  ...Intestazioni.parameters,
  docs: {
    ...(_s = Intestazioni.parameters) == null ? void 0 : _s.docs,
    source: {
      originalSource: "{\n  render: () => <>\n      <h1>Intestazione di tipo h1</h1>\n      <h2>Intestazione di tipo h2</h2>\n      <h3>Intestazione di tipo h3</h3>\n      <h4>Intestazione di tipo h4</h4>\n      <h5>Intestazione di tipo h5</h5>\n      <h6>Intestazione di tipo h6</h6>\n    </>\n}",
      ...(_u = (_t = Intestazioni.parameters) == null ? void 0 : _t.docs) == null ? void 0 : _u.source
    }
  }
};
IntestazioneTipo.parameters = {
  ...IntestazioneTipo.parameters,
  docs: {
    ...(_v = IntestazioneTipo.parameters) == null ? void 0 : _v.docs,
    source: {
      originalSource: "{\n  render: () => <h1 className='display-1'>Intestazione di tipo h1</h1>\n}",
      ...(_x = (_w = IntestazioneTipo.parameters) == null ? void 0 : _w.docs) == null ? void 0 : _x.source
    }
  }
};
IntestazioneSecondario.parameters = {
  ...IntestazioneSecondario.parameters,
  docs: {
    ...(_y = IntestazioneSecondario.parameters) == null ? void 0 : _y.docs,
    source: {
      originalSource: "{\n  render: () => <h4>\n      Intestazione <small className='text-muted'>con testo secondario</small>\n    </h4>\n}",
      ...(_A = (_z = IntestazioneSecondario.parameters) == null ? void 0 : _z.docs) == null ? void 0 : _A.source
    }
  }
};
Link.parameters = {
  ...Link.parameters,
  docs: {
    ...(_B = Link.parameters) == null ? void 0 : _B.docs,
    source: {
      originalSource: "{\n  render: () => <>\n      <p>\n        Esempio di <a href='#'>link normale</a>.\n      </p>\n      <p>\n        Esempio di&nbsp;\n        <a href='#' className='text-decoration-none fw-bold'>\n          link in grassetto senza sottolineatura\n        </a>\n        .\n      </p>\n    </>\n}",
      ...(_D = (_C = Link.parameters) == null ? void 0 : _C.docs) == null ? void 0 : _D.source
    }
  }
};
Liste.parameters = {
  ...Liste.parameters,
  docs: {
    ...(_E = Liste.parameters) == null ? void 0 : _E.docs,
    source: {
      originalSource: "{\n  render: () => <ul className='list-unstyled'>\n      <li>Lorem ipsum dolor sit amet</li>\n      <li>Consectetur adipiscing elit</li>\n      <li>Integer molestie lorem at massa</li>\n      <li>Facilisis in pretium nisl aliquet</li>\n      <li>\n        Nulla volutpat aliquam velit\n        <ul>\n          <li>Phasellus iaculis neque</li>\n          <li>Purus sodales ultricies</li>\n          <li>Vestibulum laoreet porttitor sem</li>\n          <li>Ac tristique libero volutpat at</li>\n        </ul>\n      </li>\n      <li>Faucibus porta lacus fringilla vel</li>\n      <li>Aenean sit amet erat nunc</li>\n      <li>Eget porttitor lorem</li>\n    </ul>\n}",
      ...(_G = (_F = Liste.parameters) == null ? void 0 : _F.docs) == null ? void 0 : _G.source
    }
  }
};
ListeAllineate.parameters = {
  ...ListeAllineate.parameters,
  docs: {
    ...(_H = ListeAllineate.parameters) == null ? void 0 : _H.docs,
    source: {
      originalSource: "{\n  render: () => <dl className='row'>\n      <dt className='col-sm-3'>Description lists</dt>\n      <dd className='col-sm-9'>A description list is perfect for defining terms.</dd>\n\n      <dt className='col-sm-3'>Euismod</dt>\n      <dd className='col-sm-9'>\n        <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>\n        <p>Donec id elit non mi porta gravida at eget metus.</p>\n      </dd>\n\n      <dt className='col-sm-3'>Malesuada porta</dt>\n      <dd className='col-sm-9'>Etiam porta sem malesuada magna mollis euismod.</dd>\n\n      <dt className='col-sm-3 text-truncate'>Truncated term is truncated</dt>\n      <dd className='col-sm-9'>\n        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.\n      </dd>\n\n      <dt className='col-sm-3'>Nesting</dt>\n      <dd className='col-sm-9'>\n        <dl className='row'>\n          <dt className='col-sm-4'>Nested definition list</dt>\n          <dd className='col-sm-8'>Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>\n        </dl>\n      </dd>\n    </dl>\n}",
      ...(_J = (_I = ListeAllineate.parameters) == null ? void 0 : _I.docs) == null ? void 0 : _J.source
    }
  }
};
ListeInline.parameters = {
  ...ListeInline.parameters,
  docs: {
    ...(_K = ListeInline.parameters) == null ? void 0 : _K.docs,
    source: {
      originalSource: "{\n  render: () => <ul className='list-inline'>\n      <li className='list-inline-item'>Lorem ipsum</li>\n      <li className='list-inline-item'>Phasellus iaculis</li>\n      <li className='list-inline-item'>Nulla volutpat</li>\n    </ul>\n}",
      ...(_M = (_L = ListeInline.parameters) == null ? void 0 : _L.docs) == null ? void 0 : _M.source
    }
  }
};
Lora.parameters = {
  ...Lora.parameters,
  docs: {
    ...(_N = Lora.parameters) == null ? void 0 : _N.docs,
    source: {
      originalSource: "{\n  render: () => <>\n      <p className='text-serif'>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>\n      <p className='text-serif'>abcdefghijklmnopqrstuvwxyz</p>\n      <p className='text-serif'>0123456789</p>\n    </>\n}",
      ...(_P = (_O = Lora.parameters) == null ? void 0 : _O.docs) == null ? void 0 : _P.source
    }
  }
};
Paragrafo.parameters = {
  ...Paragrafo.parameters,
  docs: {
    ...(_Q = Paragrafo.parameters) == null ? void 0 : _Q.docs,
    source: {
      originalSource: "{\n  render: () => <>\n      <p>\n        Ullamco laboris nisi ut aliquid ex ea commodi consequat. Curabitur blandit tempus ardua ridiculus sed magna.\n        Curabitur est gravida et libero vitae dictum. Phasellus laoreet lorem vel dolor tempus vehicula. Magna pars\n        studiorum, prodita quaerimus.\n      </p>\n      <p>\n        Ullamco laboris nisi ut aliquid ex ea commodi consequat. Curabitur blandit tempus ardua ridiculus sed magna.\n        Curabitur est gravida et libero vitae dictum. Phasellus laoreet lorem vel dolor tempus vehicula. Magna pars\n        studiorum, prodita quaerimus.\n      </p>\n    </>\n}",
      ...(_S = (_R = Paragrafo.parameters) == null ? void 0 : _R.docs) == null ? void 0 : _S.source
    }
  }
};
ParagrafoEvidenza.parameters = {
  ...ParagrafoEvidenza.parameters,
  docs: {
    ...(_T = ParagrafoEvidenza.parameters) == null ? void 0 : _T.docs,
    source: {
      originalSource: "{\n  render: () => <p className='lead'>Paragrafo in evidenza</p>\n}",
      ...(_V = (_U = ParagrafoEvidenza.parameters) == null ? void 0 : _U.docs) == null ? void 0 : _V.source
    }
  }
};
ParagrafiPersonalizzati.parameters = {
  ...ParagrafiPersonalizzati.parameters,
  docs: {
    ...(_W = ParagrafiPersonalizzati.parameters) == null ? void 0 : _W.docs,
    source: {
      originalSource: "{\n  render: () => <>\n      <p>\n        Esempio di testo <u>sottolineato</u>.\n      </p>\n      <p>\n        Esempio di testo <mark>evidenziato</mark>.\n      </p>\n      <p>\n        Esempio di testo <em>corsivo</em>.\n      </p>\n      <p>\n        Esempio di testo <strong>in grassetto</strong>.\n      </p>\n      <p>\n        Esempio di testo <small>rimpicciolito</small>.\n      </p>\n      <p>\n        Esempio di testo <ins>aggiuntivo</ins>.\n      </p>\n      <p>\n        Esempio di testo <del>cancellato</del> o <s>invalido</s>.\n      </p>\n      <p>\n        Esempio di testo <code>monospace</code>.\n      </p>\n    </>\n}",
      ...(_Y = (_X = ParagrafiPersonalizzati.parameters) == null ? void 0 : _X.docs) == null ? void 0 : _Y.source
    }
  }
};
RobotoMono.parameters = {
  ...RobotoMono.parameters,
  docs: {
    ...(_Z = RobotoMono.parameters) == null ? void 0 : _Z.docs,
    source: {
      originalSource: "{\n  render: () => <>\n      <p className='font-monospace'>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>\n      <p className='font-monospace'>abcdefghijklmnopqrstuvwxyz</p>\n      <p className='font-monospace'>0123456789</p>\n    </>\n}",
      ...(_$ = (__ = RobotoMono.parameters) == null ? void 0 : __.docs) == null ? void 0 : _$.source
    }
  }
};
Titillium.parameters = {
  ...Titillium.parameters,
  docs: {
    ...(_aa = Titillium.parameters) == null ? void 0 : _aa.docs,
    source: {
      originalSource: "{\n  render: () => <>\n      <p className='text-sans-serif'>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>\n      <p className='text-sans-serif'>abcdefghijklmnopqrstuvwxyz</p>\n      <p className='text-sans-serif'>0123456789</p>\n    </>\n}",
      ...(_ca = (_ba = Titillium.parameters) == null ? void 0 : _ba.docs) == null ? void 0 : _ca.source
    }
  }
};
const __namedExportsOrder = ["Abbrevazioni", "AllineamentoADestra", "AllineamentoCentrato", "Citazioni", "CitazioneFonte", "Dimensioni", "Intestazioni", "IntestazioneTipo", "IntestazioneSecondario", "Link", "Liste", "ListeAllineate", "ListeInline", "Lora", "Paragrafo", "ParagrafoEvidenza", "ParagrafiPersonalizzati", "RobotoMono", "Titillium"];
const TypographyStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Abbrevazioni,
  AllineamentoADestra,
  AllineamentoCentrato,
  CitazioneFonte,
  Citazioni,
  Dimensioni,
  IntestazioneSecondario,
  IntestazioneTipo,
  Intestazioni,
  Link,
  Liste,
  ListeAllineate,
  ListeInline,
  Lora,
  ParagrafiPersonalizzati,
  Paragrafo,
  ParagrafoEvidenza,
  RobotoMono,
  Titillium,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  Abbrevazioni as A,
  Citazioni as C,
  Dimensioni as D,
  Intestazioni as I,
  Lora as L,
  Paragrafo as P,
  RobotoMono as R,
  TypographyStories as T,
  Titillium as a,
  IntestazioneTipo as b,
  IntestazioneSecondario as c,
  ParagrafoEvidenza as d,
  ParagrafiPersonalizzati as e,
  Link as f,
  CitazioneFonte as g,
  AllineamentoCentrato as h,
  AllineamentoADestra as i,
  Liste as j,
  ListeInline as k,
  ListeAllineate as l
};
