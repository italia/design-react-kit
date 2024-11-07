var _a, _b, _c, _d, _e, _f;
import { R as React } from "./index-C-_iGYWo.js";
import { C as Container } from "./Container-DhalTljb.js";
import { R as Row, C as Col } from "./Col-CM3Y6KlU.js";
import { F as Form } from "./Form-BekgtyA_.js";
import { L as Label } from "./Label-Dgx7kIS2.js";
import { I as Icon } from "./Icon-BNsLnf7r.js";
import { L as LinkList, a as LinkListItem } from "./LinkListItem-BcZlcF5e.js";
import { I as Input } from "./Input-BqSYI14t.js";
import { B as Button } from "./Button-vuvwJGEz.js";
const meta = {
  title: "Documentazione/Menu di navigazione/Footer",
  component: Container,
  args: {
    townName: "Nome del Comune",
    townTagLine: "Uno dei tanti Comuni d Italia"
  }
};
const FooterCompleto = {
  render: ({
    townName,
    townTagLine
  }) => /* @__PURE__ */ React.createElement("footer", {
    className: "it-footer"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "it-footer-main"
  }, /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement(Row, {
    className: "clearfix"
  }, /* @__PURE__ */ React.createElement(Col, {
    sm: 12
  }, /* @__PURE__ */ React.createElement("div", {
    className: "it-brand-wrapper"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: ""
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-pa"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "it-brand-text"
  }, /* @__PURE__ */ React.createElement("h2", null, townName), /* @__PURE__ */ React.createElement("h3", {
    className: "d-none d-md-block"
  }, townTagLine))))))), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, {
    lg: 3,
    md: 3,
    sm: 6,
    className: "pb-2"
  }, /* @__PURE__ */ React.createElement("h4", null, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    title: "Vai alla pagina: Amministrazione"
  }, "Amministrazione")), /* @__PURE__ */ React.createElement(LinkList, {
    className: "footer-list clearfix"
  }, ["Giunta e consiglio", "Aree di competenza", "Dipendenti", "Luoghi", "Associazioni e società partecipate"].map((label) => /* @__PURE__ */ React.createElement(LinkListItem, {
    key: label,
    href: "#",
    title: `Vai alla pagina: ${label}`
  }, label)))), /* @__PURE__ */ React.createElement(Col, {
    lg: 3,
    md: 3,
    sm: 6,
    className: "pb-2"
  }, /* @__PURE__ */ React.createElement("h4", null, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    title: "Vai alla pagina: Servizi"
  }, "Servizi")), /* @__PURE__ */ React.createElement(LinkList, {
    className: "footer-list clearfix"
  }, ["Pagamenti", "Sostegno", "Domande e iscrizioni", "Segnalazioni", "Autorizzazioni e concessioni", "Certificati e dichiarazioni"].map((label) => /* @__PURE__ */ React.createElement(LinkListItem, {
    key: label,
    href: "#",
    title: `Vai alla pagina: ${label}`
  }, label)))), /* @__PURE__ */ React.createElement(Col, {
    lg: 3,
    md: 3,
    sm: 6,
    className: "pb-2"
  }, /* @__PURE__ */ React.createElement("h4", null, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    title: "Vai alla pagina: Novità"
  }, "Novità")), /* @__PURE__ */ React.createElement(LinkList, {
    className: "footer-list clearfix"
  }, ["Notizie", "Eventi", "Comunicati Stampa"].map((label) => /* @__PURE__ */ React.createElement(LinkListItem, {
    key: label,
    href: "#",
    title: `Vai alla pagina: ${label}`
  }, label)))), /* @__PURE__ */ React.createElement(Col, {
    lg: 3,
    md: 3,
    sm: 6
  }, /* @__PURE__ */ React.createElement("h4", null, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    title: "Vai alla pagina: Documenti"
  }, "Documenti")), /* @__PURE__ */ React.createElement(LinkList, {
    className: "footer-list clearfix"
  }, ["Progetti e attività", "Delibere, determine e ordinanze", "Bandi", "Concorsi", "Albo pretorio"].map((label) => /* @__PURE__ */ React.createElement(LinkListItem, {
    key: label,
    href: "#",
    title: `Vai alla pagina: ${label}`
  }, label)))))), /* @__PURE__ */ React.createElement("section", {
    className: "py-4 border-white border-top"
  }, /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, {
    lg: 3,
    md: 3,
    className: "pb-2"
  }, /* @__PURE__ */ React.createElement("h4", null, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    title: "Vai alla pagina: Amministrazione"
  }, "Amministrazione trasparente")), /* @__PURE__ */ React.createElement("p", null, "I dati personali pubblicati sono riutilizzabili solo alle condizioni previste dalla direttiva comunitaria 2003/98/CE e dal d.lgs. 36/2006")), /* @__PURE__ */ React.createElement(Col, {
    lg: 3,
    md: 3,
    className: "pb-2"
  }, /* @__PURE__ */ React.createElement("h4", null, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    title: "Vai alla pagina: Contatti"
  }, "Contatti")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, "Nome del Comune"), /* @__PURE__ */ React.createElement("br", null), "Via Roma 0 - 00000 Lorem Ipsum Codice fiscale / P. IVA: 000000000"), /* @__PURE__ */ React.createElement(LinkList, {
    className: "footer-list clearfix"
  }, ["Posta Elettronica Certificata", "URP - Ufficio Relazioni con il Pubblico"].map((label) => /* @__PURE__ */ React.createElement(LinkListItem, {
    key: label,
    href: "#",
    title: `Vai alla pagina: ${label}`
  }, label)))), /* @__PURE__ */ React.createElement(Col, {
    lg: 3,
    md: 3,
    className: "pb-2"
  }, /* @__PURE__ */ React.createElement("h4", null, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    title: "Vai alla pagina: Newsletter"
  }, "Newsletter")), /* @__PURE__ */ React.createElement(Form, {
    action: "#",
    className: "form-newsletter",
    method: "post"
  }, /* @__PURE__ */ React.createElement(Label, {
    className: "text-white fw-semibold active",
    htmlFor: "input-newsletter",
    style: {
      transition: "none 0s ease 0s"
    }
  }, "Iscriviti per riceverla"), /* @__PURE__ */ React.createElement(Input, {
    id: "input-newsletter",
    name: "input-newsletter",
    placeholder: "mail@example.com",
    type: "email"
  }), /* @__PURE__ */ React.createElement(Button, {
    color: "primary",
    className: "btn-icon",
    type: "submit"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-mail",
    color: "white"
  }), /* @__PURE__ */ React.createElement("span", null, "Iscriviti")))), /* @__PURE__ */ React.createElement(Col, {
    lg: 3,
    md: 3,
    className: "pb-2"
  }, /* @__PURE__ */ React.createElement("h4", null, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    title: "Vai alla pagina: Seguici su"
  }, "Seguici su")), /* @__PURE__ */ React.createElement("ul", {
    className: "list-inline text-start social"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "list-inline-item"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "p-2 text-white",
    href: "#",
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-designers-italia",
    color: "white",
    size: "sm",
    className: "align-top"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "visually-hidden"
  }, "Designers Italia"))), /* @__PURE__ */ React.createElement("li", {
    className: "list-inline-item"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "p-2 text-white",
    href: "#",
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-twitter",
    color: "white",
    size: "sm",
    className: "align-top"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "visually-hidden"
  }, "Twitter"))), /* @__PURE__ */ React.createElement("li", {
    className: "list-inline-item"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "p-2 text-white",
    href: "#",
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-medium",
    color: "white",
    size: "sm",
    className: "align-top"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "visually-hidden"
  }, "Medium"))), /* @__PURE__ */ React.createElement("li", {
    className: "list-inline-item"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "p-2 text-white",
    href: "#",
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-behance",
    color: "white",
    size: "sm",
    className: "align-top"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "visually-hidden"
  }, "Behance"))))))))), /* @__PURE__ */ React.createElement("div", {
    className: "it-footer-small-prints clearfix"
  }, /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement("h3", {
    className: "visually-hidden"
  }, "Sezione Link Utili"), /* @__PURE__ */ React.createElement("ul", {
    className: "it-footer-small-prints-list list-inline mb-0 d-flex flex-column flex-md-row"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "list-inline-item"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    title: "Note Legali"
  }, "Media policy")), /* @__PURE__ */ React.createElement("li", {
    className: "list-inline-item"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    title: "Note Legali"
  }, "Note legali")), /* @__PURE__ */ React.createElement("li", {
    className: "list-inline-item"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    title: "Privacy-Cookies"
  }, "Privacy policy")), /* @__PURE__ */ React.createElement("li", {
    className: "list-inline-item"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    title: "Mappa del sito"
  }, "Mappa del sito"))))))
};
const FooterCompatto = {
  render: ({
    townName,
    townTagLine
  }) => /* @__PURE__ */ React.createElement("footer", {
    className: "it-footer"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "it-footer-main"
  }, /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement(Row, {
    className: "clearfix"
  }, /* @__PURE__ */ React.createElement(Col, {
    sm: 12
  }, /* @__PURE__ */ React.createElement("div", {
    className: "it-brand-wrapper"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: ""
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-pa"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "it-brand-text"
  }, /* @__PURE__ */ React.createElement("h2", null, townName), /* @__PURE__ */ React.createElement("h3", {
    className: "d-none d-md-block"
  }, townTagLine))))))), /* @__PURE__ */ React.createElement("section", {
    className: "py-4 border-white border-top"
  }, /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, {
    lg: 4,
    md: 4,
    className: "pb-2"
  }, /* @__PURE__ */ React.createElement("h4", null, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    title: "Vai alla pagina: Contatti"
  }, "Contatti")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, "Nome del Comune"), /* @__PURE__ */ React.createElement("br", null), "Via Roma 0 - 00000 Lorem Ipsum Codice fiscale / P. IVA: 000000000"), /* @__PURE__ */ React.createElement(LinkList, {
    className: "footer-list clearfix"
  }, ["Posta Elettronica Certificata", "URP - Ufficio Relazioni con il Pubblico"].map((label) => /* @__PURE__ */ React.createElement(LinkListItem, {
    key: label,
    href: "#",
    title: `Vai alla pagina: ${label}`
  }, label)))), /* @__PURE__ */ React.createElement(Col, {
    lg: 4,
    md: 4,
    className: "pb-2"
  }, /* @__PURE__ */ React.createElement("h4", null, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    title: "Vai alla pagina: Newsletter"
  }, "Newsletter")), /* @__PURE__ */ React.createElement(Form, {
    action: "#",
    className: "form-newsletter",
    method: "post"
  }, /* @__PURE__ */ React.createElement(Label, {
    className: "text-white fw-semibold active",
    htmlFor: "input-newsletter",
    style: {
      transition: "none 0s ease 0s"
    }
  }, "Iscriviti per riceverla"), /* @__PURE__ */ React.createElement(Input, {
    id: "input-newsletter",
    name: "input-newsletter",
    placeholder: "mail@example.com",
    type: "email"
  }), /* @__PURE__ */ React.createElement(Button, {
    color: "primary",
    className: "btn-icon",
    type: "submit"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-mail",
    color: "white"
  }), /* @__PURE__ */ React.createElement("span", null, "Iscriviti")))), /* @__PURE__ */ React.createElement(Col, {
    lg: 4,
    md: 4,
    className: "pb-2"
  }, /* @__PURE__ */ React.createElement("h4", null, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    title: "Vai alla pagina: Seguici su"
  }, "Seguici su")), /* @__PURE__ */ React.createElement("ul", {
    className: "list-inline text-start social"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "list-inline-item"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "p-2 text-white",
    href: "#",
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-designers-italia",
    color: "white",
    size: "sm",
    className: "align-top"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "visually-hidden"
  }, "Designers Italia"))), /* @__PURE__ */ React.createElement("li", {
    className: "list-inline-item"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "p-2 text-white",
    href: "#",
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-twitter",
    color: "white",
    size: "sm",
    className: "align-top"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "visually-hidden"
  }, "Twitter"))), /* @__PURE__ */ React.createElement("li", {
    className: "list-inline-item"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "p-2 text-white",
    href: "#",
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-medium",
    color: "white",
    size: "sm",
    className: "align-top"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "visually-hidden"
  }, "Medium"))), /* @__PURE__ */ React.createElement("li", {
    className: "list-inline-item"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "p-2 text-white",
    href: "#",
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-behance",
    color: "white",
    size: "sm",
    className: "align-top"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "visually-hidden"
  }, "Behance"))))))))), /* @__PURE__ */ React.createElement("div", {
    className: "it-footer-small-prints clearfix"
  }, /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement("h3", {
    className: "visually-hidden"
  }, "Sezione Link Utili"), /* @__PURE__ */ React.createElement("ul", {
    className: "it-footer-small-prints-list list-inline mb-0 d-flex flex-column flex-md-row"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "list-inline-item"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    title: "Note Legali"
  }, "Media policy")), /* @__PURE__ */ React.createElement("li", {
    className: "list-inline-item"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    title: "Note Legali"
  }, "Note legali")), /* @__PURE__ */ React.createElement("li", {
    className: "list-inline-item"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    title: "Privacy-Cookies"
  }, "Privacy policy")), /* @__PURE__ */ React.createElement("li", {
    className: "list-inline-item"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    title: "Mappa del sito"
  }, "Mappa del sito"))))))
};
FooterCompleto.parameters = {
  ...FooterCompleto.parameters,
  docs: {
    ...(_a = FooterCompleto.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: ({\n    townName,\n    townTagLine\n  }) => <footer className='it-footer'>\n      <div className='it-footer-main'>\n        <Container>\n          <section>\n            <Row className='clearfix'>\n              <Col sm={12}>\n                <div className='it-brand-wrapper'>\n                  <a href='#' className=''>\n                    <Icon icon='it-pa' />\n                    <div className='it-brand-text'>\n                      <h2>{townName}</h2>\n                      <h3 className='d-none d-md-block'>{townTagLine}</h3>\n                    </div>\n                  </a>\n                </div>\n              </Col>\n            </Row>\n          </section>\n          <section>\n            <Row>\n              <Col lg={3} md={3} sm={6} className='pb-2'>\n                <h4>\n                  <a href='#' title='Vai alla pagina: Amministrazione'>\n                    Amministrazione\n                  </a>\n                </h4>\n                <LinkList className='footer-list clearfix'>\n                  {['Giunta e consiglio', 'Aree di competenza', 'Dipendenti', 'Luoghi', 'Associazioni e società partecipate'].map(label => <LinkListItem key={label} href='#' title={`Vai alla pagina: ${label}`}>\n                      {label}\n                    </LinkListItem>)}\n                </LinkList>\n              </Col>\n              <Col lg={3} md={3} sm={6} className='pb-2'>\n                <h4>\n                  <a href='#' title='Vai alla pagina: Servizi'>\n                    Servizi\n                  </a>\n                </h4>\n                <LinkList className='footer-list clearfix'>\n                  {['Pagamenti', 'Sostegno', 'Domande e iscrizioni', 'Segnalazioni', 'Autorizzazioni e concessioni', 'Certificati e dichiarazioni'].map(label => <LinkListItem key={label} href='#' title={`Vai alla pagina: ${label}`}>\n                      {label}\n                    </LinkListItem>)}\n                </LinkList>\n              </Col>\n              <Col lg={3} md={3} sm={6} className='pb-2'>\n                <h4>\n                  <a href='#' title='Vai alla pagina: Novità'>\n                    Novità\n                  </a>\n                </h4>\n                <LinkList className='footer-list clearfix'>\n                  {['Notizie', 'Eventi', 'Comunicati Stampa'].map(label => <LinkListItem key={label} href='#' title={`Vai alla pagina: ${label}`}>\n                      {label}\n                    </LinkListItem>)}\n                </LinkList>\n              </Col>\n              <Col lg={3} md={3} sm={6}>\n                <h4>\n                  <a href='#' title='Vai alla pagina: Documenti'>\n                    Documenti\n                  </a>\n                </h4>\n                <LinkList className='footer-list clearfix'>\n                  {['Progetti e attività', 'Delibere, determine e ordinanze', 'Bandi', 'Concorsi', 'Albo pretorio'].map(label => <LinkListItem key={label} href='#' title={`Vai alla pagina: ${label}`}>\n                        {label}\n                      </LinkListItem>)}\n                </LinkList>\n              </Col>\n            </Row>\n          </section>\n          <section className='py-4 border-white border-top'>\n            <Row>\n              <Col lg={3} md={3} className='pb-2'>\n                <h4>\n                  <a href='#' title='Vai alla pagina: Amministrazione'>\n                    Amministrazione trasparente\n                  </a>\n                </h4>\n                <p>\n                  I dati personali pubblicati sono riutilizzabili solo alle condizioni previste dalla direttiva\n                  comunitaria 2003/98/CE e dal d.lgs. 36/2006\n                </p>\n              </Col>\n              <Col lg={3} md={3} className='pb-2'>\n                <h4>\n                  <a href='#' title='Vai alla pagina: Contatti'>\n                    Contatti\n                  </a>\n                </h4>\n                <p>\n                  <strong>Nome del Comune</strong>\n                  <br />\n                  Via Roma 0 - 00000 Lorem Ipsum Codice fiscale / P. IVA: 000000000\n                </p>\n                <LinkList className='footer-list clearfix'>\n                  {['Posta Elettronica Certificata', 'URP - Ufficio Relazioni con il Pubblico'].map(label => <LinkListItem key={label} href='#' title={`Vai alla pagina: ${label}`}>\n                      {label}\n                    </LinkListItem>)}\n                </LinkList>\n              </Col>\n              <Col lg={3} md={3} className='pb-2'>\n                <h4>\n                  <a href='#' title='Vai alla pagina: Newsletter'>\n                    Newsletter\n                  </a>\n                </h4>\n                <Form action='#' className='form-newsletter' method='post'>\n                  <Label className='text-white fw-semibold active' htmlFor='input-newsletter' style={{\n                  transition: 'none 0s ease 0s'\n                }}>\n                    Iscriviti per riceverla\n                  </Label>\n                  <Input id='input-newsletter' name='input-newsletter' placeholder='mail@example.com' type='email' />\n                  <Button color='primary' className='btn-icon' type='submit'>\n                    <Icon icon='it-mail' color='white' />\n                    <span>Iscriviti</span>\n                  </Button>\n                </Form>\n              </Col>\n              <Col lg={3} md={3} className='pb-2'>\n                <h4>\n                  <a href='#' title='Vai alla pagina: Seguici su'>\n                    Seguici su\n                  </a>\n                </h4>\n                <ul className='list-inline text-start social'>\n                  <li className='list-inline-item'>\n                    <a className='p-2 text-white' href='#' target='_blank'>\n                      <Icon icon='it-designers-italia' color='white' size='sm' className='align-top' />\n                      <span className='visually-hidden'>Designers Italia</span>\n                    </a>\n                  </li>\n                  <li className='list-inline-item'>\n                    <a className='p-2 text-white' href='#' target='_blank'>\n                      <Icon icon='it-twitter' color='white' size='sm' className='align-top' />\n                      <span className='visually-hidden'>Twitter</span>\n                    </a>\n                  </li>\n                  <li className='list-inline-item'>\n                    <a className='p-2 text-white' href='#' target='_blank'>\n                      <Icon icon='it-medium' color='white' size='sm' className='align-top' />\n                      <span className='visually-hidden'>Medium</span>\n                    </a>\n                  </li>\n                  <li className='list-inline-item'>\n                    <a className='p-2 text-white' href='#' target='_blank'>\n                      <Icon icon='it-behance' color='white' size='sm' className='align-top' />\n                      <span className='visually-hidden'>Behance</span>\n                    </a>\n                  </li>\n                </ul>\n              </Col>\n            </Row>\n          </section>\n        </Container>\n      </div>\n      <div className='it-footer-small-prints clearfix'>\n        <Container>\n          <h3 className='visually-hidden'>Sezione Link Utili</h3>\n          <ul className='it-footer-small-prints-list list-inline mb-0 d-flex flex-column flex-md-row'>\n            <li className='list-inline-item'>\n              <a href='#' title='Note Legali'>\n                Media policy\n              </a>\n            </li>\n            <li className='list-inline-item'>\n              <a href='#' title='Note Legali'>\n                Note legali\n              </a>\n            </li>\n            <li className='list-inline-item'>\n              <a href='#' title='Privacy-Cookies'>\n                Privacy policy\n              </a>\n            </li>\n            <li className='list-inline-item'>\n              <a href='#' title='Mappa del sito'>\n                Mappa del sito\n              </a>\n            </li>\n          </ul>\n        </Container>\n      </div>\n    </footer>\n}",
      ...(_c = (_b = FooterCompleto.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
FooterCompatto.parameters = {
  ...FooterCompatto.parameters,
  docs: {
    ...(_d = FooterCompatto.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  render: ({\n    townName,\n    townTagLine\n  }) => <footer className='it-footer'>\n      <div className='it-footer-main'>\n        <Container>\n          <section>\n            <Row className='clearfix'>\n              <Col sm={12}>\n                <div className='it-brand-wrapper'>\n                  <a href='#' className=''>\n                    <Icon icon='it-pa' />\n                    <div className='it-brand-text'>\n                      <h2>{townName}</h2>\n                      <h3 className='d-none d-md-block'>{townTagLine}</h3>\n                    </div>\n                  </a>\n                </div>\n              </Col>\n            </Row>\n          </section>\n          <section className='py-4 border-white border-top'>\n            <Row>\n              <Col lg={4} md={4} className='pb-2'>\n                <h4>\n                  <a href='#' title='Vai alla pagina: Contatti'>\n                    Contatti\n                  </a>\n                </h4>\n                <p>\n                  <strong>Nome del Comune</strong>\n                  <br />\n                  Via Roma 0 - 00000 Lorem Ipsum Codice fiscale / P. IVA: 000000000\n                </p>\n                <LinkList className='footer-list clearfix'>\n                  {['Posta Elettronica Certificata', 'URP - Ufficio Relazioni con il Pubblico'].map(label => <LinkListItem key={label} href='#' title={`Vai alla pagina: ${label}`}>\n                      {label}\n                    </LinkListItem>)}\n                </LinkList>\n              </Col>\n              <Col lg={4} md={4} className='pb-2'>\n                <h4>\n                  <a href='#' title='Vai alla pagina: Newsletter'>\n                    Newsletter\n                  </a>\n                </h4>\n                <Form action='#' className='form-newsletter' method='post'>\n                  <Label className='text-white fw-semibold active' htmlFor='input-newsletter' style={{\n                  transition: 'none 0s ease 0s'\n                }}>\n                    Iscriviti per riceverla\n                  </Label>\n                  <Input id='input-newsletter' name='input-newsletter' placeholder='mail@example.com' type='email' />\n                  <Button color='primary' className='btn-icon' type='submit'>\n                    <Icon icon='it-mail' color='white' />\n                    <span>Iscriviti</span>\n                  </Button>\n                </Form>\n              </Col>\n              <Col lg={4} md={4} className='pb-2'>\n                <h4>\n                  <a href='#' title='Vai alla pagina: Seguici su'>\n                    Seguici su\n                  </a>\n                </h4>\n                <ul className='list-inline text-start social'>\n                  <li className='list-inline-item'>\n                    <a className='p-2 text-white' href='#' target='_blank'>\n                      <Icon icon='it-designers-italia' color='white' size='sm' className='align-top' />\n                      <span className='visually-hidden'>Designers Italia</span>\n                    </a>\n                  </li>\n                  <li className='list-inline-item'>\n                    <a className='p-2 text-white' href='#' target='_blank'>\n                      <Icon icon='it-twitter' color='white' size='sm' className='align-top' />\n                      <span className='visually-hidden'>Twitter</span>\n                    </a>\n                  </li>\n                  <li className='list-inline-item'>\n                    <a className='p-2 text-white' href='#' target='_blank'>\n                      <Icon icon='it-medium' color='white' size='sm' className='align-top' />\n                      <span className='visually-hidden'>Medium</span>\n                    </a>\n                  </li>\n                  <li className='list-inline-item'>\n                    <a className='p-2 text-white' href='#' target='_blank'>\n                      <Icon icon='it-behance' color='white' size='sm' className='align-top' />\n                      <span className='visually-hidden'>Behance</span>\n                    </a>\n                  </li>\n                </ul>\n              </Col>\n            </Row>\n          </section>\n        </Container>\n      </div>\n      <div className='it-footer-small-prints clearfix'>\n        <Container>\n          <h3 className='visually-hidden'>Sezione Link Utili</h3>\n          <ul className='it-footer-small-prints-list list-inline mb-0 d-flex flex-column flex-md-row'>\n            <li className='list-inline-item'>\n              <a href='#' title='Note Legali'>\n                Media policy\n              </a>\n            </li>\n            <li className='list-inline-item'>\n              <a href='#' title='Note Legali'>\n                Note legali\n              </a>\n            </li>\n            <li className='list-inline-item'>\n              <a href='#' title='Privacy-Cookies'>\n                Privacy policy\n              </a>\n            </li>\n            <li className='list-inline-item'>\n              <a href='#' title='Mappa del sito'>\n                Mappa del sito\n              </a>\n            </li>\n          </ul>\n        </Container>\n      </div>\n    </footer>\n}",
      ...(_f = (_e = FooterCompatto.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
const __namedExportsOrder = ["FooterCompleto", "FooterCompatto"];
const FooterStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FooterCompatto,
  FooterCompleto,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  FooterStories as F,
  FooterCompleto as a,
  FooterCompatto as b
};
