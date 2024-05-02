import { j as jsxRuntimeExports } from "./jsx-runtime-BK4VhY1o.js";
import { useMDXComponents } from "./index-D9eV9cM1.js";
import { M as Meta, d as Canvas, A as ArgTypes } from "./index-B6OeFasa.js";
import { M as MegamenuStories, C as ConImmagineEDescrizione, a as ConLinkMore, b as ConIntestazioneELinkMore, c as ConCallToActionInBasso, d as ConCallToActionADestra, e as MegamenuFooter } from "./Megamenu.stories-Db8dqHcp.js";
import { M as MegamenuItem, a as MegamenuHighlightColumn } from "./MegamenuItem-CiTMPU_y.js";
import "./index-CQCy530F.js";
import "./_commonjsHelpers-LQfde5yM.js";
import "./iframe-ADcXWQ_9.js";
import "../sb-preview/runtime.js";
import "./index-DTvnAYOg.js";
import "./index-Hv2vTVdx.js";
import "./index-CTx2sqk_.js";
import "./inheritsLoose-HEqISCW8.js";
import "./index-MBEdkwGi.js";
import "./index-BdOSk9or.js";
import "./Navbar-C82d94Yg.js";
import "./index-Cas18JYw.js";
import "./index-CpyNLP69.js";
import "./utils-l7qJ8bIE.js";
import "./Col-DTtAS2uD.js";
import "./NavbarBrand-Cy1-5-LH.js";
import "./NavbarToggler-CkfoPab3.js";
import "./Icon-io8Ds3f9.js";
import "./Collapse-DEWj2kdJ.js";
import "./Transition-DOLYtmQu.js";
import "./Nav-58kYoJuE.js";
import "./LinkListItem-Bip2UIsY.js";
import "./DropdownToggle-B_RMNwkM.js";
import "./popper-DTKBVcSS.js";
import "./Button-CDo48zCf.js";
import "./Button-DfNj8dlY.js";
import "./DropdownMenu-D4O4lxvn.js";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: MegamenuStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "megamenu",
      children: "Megamenu"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "presenta-un-sottomenu-contenente-elenchi-di-links-relativo-ad-una-voce-della-navbar",
      children: "Presenta un sottomenu contenente elenchi di links relativo ad una voce della navbar."
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Il megamenu all'interno del nav è una variazione del componente ", jsxRuntimeExports.jsx(_components.a, {
        href: "?path=/docs/documentazione-componenti-dropdown--documentazione",
        children: "Dropdown"
      }), ".\r\nGli elementi megamenu contenuti nelle navbar sono gestiti come elementi di tipo ", jsxRuntimeExports.jsx(_components.strong, {
        children: "collapse"
      }), " nella loro versione mobile."]
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "megamenu-con-immagine-e-descrizione",
      children: "Megamenu con immagine e descrizione"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Possiamo inserire a sinistra del megamenu un'immagine ed una descrizione riguardante la sezione."
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Esattamente come con le ", jsxRuntimeExports.jsx(_components.em, {
        children: "call to action"
      }), ", inseriremo il contenuto all'interno del componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "MegamenuHighlightColumn"
      }), ", avendo cura di aggiungere la props ", jsxRuntimeExports.jsx(_components.code, {
        children: "description"
      })]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ConImmagineEDescrizione
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [openNav, setOpenNav] = useState(false);\r\nconst toggle = () => {\r\n  setOpenNav(!openNav);\r\n};\r\nreturn (\r\n  <Navbar expand='lg' className='has-megamenu'>\r\n    <NavbarBrand />\r\n    <NavbarToggler className='custom-navbar-toggler' onClick={toggle}>\r\n      <Icon icon='it-list' size='sm' />\r\n    </NavbarToggler>\r\n    <Collapse isOpen={openNav} navbar header megamenu>\r\n      <Nav className='mt-0' navbar>\r\n        <MegamenuItem itemName='Megamenu con Immagine e Descrizione'>\r\n          <Row>\r\n            <MegamenuHighlightColumn xs='12' lg='4' description>\r\n              <div className='ratio ratio-21x9 lightgrey-bg-a1 mb-4 rounded'>\r\n                <figure className='figure'>\r\n                  <img\r\n                    src='https://via.placeholder.com/560x240/ebebeb/808080/?text=Immagine'\r\n                    className='figure-img img-fluid rounded'\r\n                    alt='Segnaposto'\r\n                  />\r\n                </figure>\r\n              </div>\r\n              <p>Omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>\r\n            </MegamenuHighlightColumn>\r\n            <Col xs='12' lg='8'>\r\n              <div className='it-heading-link-wrapper'>\r\n                <a className='it-heading-link' href='#'>\r\n                  <Icon className='icon icon-sm me-2 mb-1' icon='it-arrow-right-triangle'></Icon>\r\n                  <span>Esplora la sezione megamenu</span>\r\n                </a>\r\n              </div>\r\n              <Row>\r\n                <Col xs='12' lg='6'>\r\n                  <LinkList>\r\n                    <LinkListItem inDropdown href='#'>\r\n                      <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r\n                      <span>Link lista 1</span>\r\n                    </LinkListItem>\r\n                    <LinkListItem inDropdown href='#'>\r\n                      <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r\n                      <span>Link lista 2</span>\r\n                    </LinkListItem>\r\n                    <LinkListItem inDropdown href='#'>\r\n                      <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r\n                      <span>Link lista 3</span>\r\n                    </LinkListItem>\r\n                  </LinkList>\r\n                </Col>\r\n                <Col xs='12' lg='6'>\r\n                  <LinkList>\r\n                    <LinkListItem inDropdown href='#'>\r\n                      <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r\n                      <span>Link lista 4</span>\r\n                    </LinkListItem>\r\n                    <LinkListItem inDropdown href='#'>\r\n                      <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r\n                      <span>Link lista 5</span>\r\n                    </LinkListItem>\r\n                    <LinkListItem inDropdown href='#'>\r\n                      <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r\n                      <span>Link lista 6</span>\r\n                    </LinkListItem>\r\n                  </LinkList>\r\n                </Col>\r\n              </Row>\r\n            </Col>\r\n          </Row>\r\n        </MegamenuItem>\r\n      </Nav>\r\n    </Collapse>\r\n  </Navbar>\r\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "con-link-more",
      children: 'Con link "more"'
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Il megamenu può contenere un link relativo agli elenchi in esso contenuti."
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Qualora i link mostrati nel megamenu non siano tutti quelli relativi alla voce primaria (perché troppi numerosi), si può includere l'elemento con classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".it-external"
      }), " subito dopo l'elemento ", jsxRuntimeExports.jsx(_components.code, {
        children: "Row"
      }), " che contiene le liste di link.\r\nLa struttura colonnare dell'elemento con classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".it-external"
      }), " dev'essere la stessa di quella contentente le liste di link."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["All'interno dell'ultima colonna andremo ad inserire la lista di link contenente il link che porterà ad un'eventuale pagine in cui sarà mostrato tutto il contenuto di sezione.\r\nPer stilare correttamente il link è sufficiente aggiungere la classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".it-more"
      }), " a un elemento con tag ", jsxRuntimeExports.jsx(_components.code, {
        children: "li"
      }), " che lo contiene."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ConLinkMore
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice-1",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: `const [openNav, setOpenNav] = useState(false);\r
const toggle = () => {\r
  setOpenNav(!openNav);\r
};\r
return (\r
  <Navbar expand='lg' className='has-megamenu'>\r
    <NavbarBrand />\r
    <NavbarToggler className='custom-navbar-toggler' onClick={toggle}>\r
      <Icon icon='it-list' size='sm' />\r
    </NavbarToggler>\r
    <Collapse isOpen={openNav} navbar header megamenu>\r
      <Nav className='mt-0' navbar>\r
        <MegamenuItem itemName='Megamenu con link "Esplora tutti"'>\r
          <Row>\r
            <Col xs='12' lg='4'>\r
              <LinkList>\r
                <LinkListItem inDropdown href='#'>\r
                  <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                  <span>Link lista 1</span>\r
                </LinkListItem>\r
                <LinkListItem inDropdown href='#'>\r
                  <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                  <span>Link lista 2</span>\r
                </LinkListItem>\r
                <LinkListItem inDropdown href='#'>\r
                  <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                  <span>Link lista 3</span>\r
                </LinkListItem>\r
              </LinkList>\r
            </Col>\r
            <Col xs='12' lg='4'>\r
              <LinkList>\r
                <LinkListItem inDropdown href='#'>\r
                  <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                  <span>Link lista 4</span>\r
                </LinkListItem>\r
                <LinkListItem inDropdown href='#'>\r
                  <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                  <span>Link lista 5</span>\r
                </LinkListItem>\r
                <LinkListItem inDropdown href='#'>\r
                  <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                  <span>Link lista 6</span>\r
                </LinkListItem>\r
              </LinkList>\r
            </Col>\r
            <Col xs='12' lg='4'>\r
              <LinkList>\r
                <LinkListItem inDropdown href='#'>\r
                  <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                  <span>Link lista 7</span>\r
                </LinkListItem>\r
                <LinkListItem inDropdown href='#'>\r
                  <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                  <span>Link lista 8</span>\r
                </LinkListItem>\r
                <LinkListItem inDropdown href='#'>\r
                  <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                  <span>Link lista 9</span>\r
                </LinkListItem>\r
              </LinkList>\r
            </Col>\r
          </Row>\r
          <MegamenuFooter className='text-end'>\r
            <MegamenuFooter.Item href='#'>\r
              <span>\r
                Esplora tutti i contenuti del megamenu{' '}\r
                <Icon className='ms-2' color='primary' icon='it-arrow-right' size='sm' />\r
              </span>\r
            </MegamenuFooter.Item>\r
          </MegamenuFooter>\r
        </MegamenuItem>\r
      </Nav>\r
    </Collapse>\r
  </Navbar>\r
);
`
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "classico-con-intestazione-e-link-more",
      children: 'Classico con Intestazione e link "more"'
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: 'Si possono combinare header e link "more".'
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [`Nell'esempio di seguito, il link "more" è relativo alla sola colonna in cui è inserito. Per aggiungere un link "more" è sufficiente aggiungere la classe `, jsxRuntimeExports.jsx(_components.code, {
        children: ".it-more"
      }), " all'elemento con tag ", jsxRuntimeExports.jsx(_components.code, {
        children: "li"
      }), " al fondo della lista relativa."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ConIntestazioneELinkMore
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice-2",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: `const [openNav, setOpenNav] = useState(false);\r
const toggle = () => {\r
  setOpenNav(!openNav);\r
};\r
return (\r
  <Navbar expand='lg' className='has-megamenu'>\r
    <NavbarBrand />\r
    <NavbarToggler className='custom-navbar-toggler' onClick={toggle}>\r
      <Icon icon='it-list' size='sm' />\r
    </NavbarToggler>\r
    <Collapse isOpen={openNav} navbar header megamenu>\r
      <Nav className='mt-0' navbar>\r
        <MegamenuItem itemName='Megamenu con intestazione e "esplora tutti"'>\r
          <Row>\r
            <Col xs='12'>\r
              <div className='it-heading-link-wrapper'>\r
                <a className='it-heading-link' href='#'>\r
                  <Icon className='me-2 mb-1' icon='it-arrow-right-triangle'></Icon>\r
                  <span>Esplora la sezione megamenu</span>\r
                </a>\r
              </div>\r
              <Row>\r
                <Col xs='12' lg='4'>\r
                  <LinkList>\r
                    <LinkListItem inDropdown href='#'>\r
                      <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                      <span>Link lista 1</span>\r
                    </LinkListItem>\r
                    <LinkListItem inDropdown href='#'>\r
                      <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                      <span>Link lista 2</span>\r
                    </LinkListItem>\r
                    <LinkListItem inDropdown href='#'>\r
                      <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                      <span>Link lista 3</span>\r
                    </LinkListItem>\r
                  </LinkList>\r
                </Col>\r
                <Col xs='12' lg='4'>\r
                  <LinkList>\r
                    <LinkListItem inDropdown href='#'>\r
                      <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                      <span>Link lista 4</span>\r
                    </LinkListItem>\r
                    <LinkListItem inDropdown href='#'>\r
                      <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                      <span>Link lista 5</span>\r
                    </LinkListItem>\r
                    <LinkListItem inDropdown href='#'>\r
                      <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                      <span>Link lista 6</span>\r
                    </LinkListItem>\r
                  </LinkList>\r
                </Col>\r
                <Col xs='12' lg='4'>\r
                  <LinkList>\r
                    <LinkListItem inDropdown href='#'>\r
                      <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                      <span>Link lista 7</span>\r
                    </LinkListItem>\r
                    <LinkListItem inDropdown href='#'>\r
                      <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                      <span>Link lista 8</span>\r
                    </LinkListItem>\r
                    <LinkListItem inDropdown href='#'>\r
                      <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                      <span>Link lista 9</span>\r
                    </LinkListItem>\r
                  </LinkList>\r
                </Col>\r
              </Row>\r
            </Col>\r
          </Row>\r
        </MegamenuItem>\r
      </Nav>\r
    </Collapse>\r
  </Navbar>\r
);
`
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "megamenu-con-call-to-action",
      children: "Megamenu con call to action"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "I megamenu possono contenere delle liste di call to action che possono essere posizionate in fondo o a sinistra del megamenu."
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "call-to-action-in-basso",
      children: "Call to action in basso"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per aggiungere un elenco di ", jsxRuntimeExports.jsx(_components.em, {
        children: "call to cation"
      }), " è sufficiente inserirle all'interno del componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "MegamenuFooter"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ConCallToActionInBasso
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice-3",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [openNav, setOpenNav] = useState(false);\r\nconst toggle = () => {\r\n  setOpenNav(!openNav);\r\n};\r\nreturn (\r\n  <Navbar expand='lg' className='has-megamenu'>\r\n    <NavbarBrand />\r\n    <NavbarToggler className='custom-navbar-toggler' onClick={toggle}>\r\n      <Icon icon='it-list' size='sm' />\r\n    </NavbarToggler>\r\n    <Collapse isOpen={openNav} navbar header megamenu>\r\n      <Nav className='mt-0' navbar>\r\n        <MegamenuItem itemName='Megamenu con Call to Action in basso'>\r\n          <Row>\r\n            <Col xs='12' lg='4'>\r\n              <LinkList>\r\n                <LinkListItem inDropdown href='#'>\r\n                  <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r\n                  <span>Link lista 1</span>\r\n                </LinkListItem>\r\n                <LinkListItem inDropdown href='#'>\r\n                  <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r\n                  <span>Link lista 2</span>\r\n                </LinkListItem>\r\n                <LinkListItem inDropdown href='#'>\r\n                  <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r\n                  <span>Link lista 3</span>\r\n                </LinkListItem>\r\n              </LinkList>\r\n            </Col>\r\n            <Col xs='12' lg='4'>\r\n              <LinkList>\r\n                <LinkListItem inDropdown href='#'>\r\n                  <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r\n                  <span>Link lista 4</span>\r\n                </LinkListItem>\r\n                <LinkListItem inDropdown href='#'>\r\n                  <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r\n                  <span>Link lista 5</span>\r\n                </LinkListItem>\r\n                <LinkListItem inDropdown href='#'>\r\n                  <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r\n                  <span>Link lista 6</span>\r\n                </LinkListItem>\r\n              </LinkList>\r\n            </Col>\r\n            <Col xs='12' lg='4'>\r\n              <LinkList>\r\n                <LinkListItem inDropdown href='#'>\r\n                  <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r\n                  <span>Link lista 7</span>\r\n                </LinkListItem>\r\n                <LinkListItem inDropdown href='#'>\r\n                  <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r\n                  <span>Link lista 8</span>\r\n                </LinkListItem>\r\n                <LinkListItem inDropdown href='#'>\r\n                  <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r\n                  <span>Link lista 9</span>\r\n                </LinkListItem>\r\n              </LinkList>\r\n            </Col>\r\n          </Row>\r\n          <MegamenuFooter>\r\n            <div className='d-flex flex-column flex-lg-row justify-content-around'>\r\n              <MegamenuFooter.Item href='#'>\r\n                <Icon className='me-2' color='primary' icon='it-bookmark' size='sm' />\r\n                <span>Call to action 1</span>\r\n              </MegamenuFooter.Item>\r\n              <MegamenuFooter.Item href='#'>\r\n                <Icon className='me-2' color='primary' icon='it-bookmark' size='sm' />\r\n                <span>Call to action 2</span>\r\n              </MegamenuFooter.Item>\r\n            </div>\r\n          </MegamenuFooter>\r\n        </MegamenuItem>\r\n      </Nav>\r\n    </Collapse>\r\n  </Navbar>\r\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "call-to-action-a-destra",
      children: "Call to action a destra"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per aggiungere un elenco di ", jsxRuntimeExports.jsx(_components.em, {
        children: "call to action"
      }), " posizionato a destra, inseriremo tale lista di link particolare all'interno del componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "MegamenuHighlightColumn"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ConCallToActionADestra
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice-4",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [openNav, setOpenNav] = useState(false);\r\nconst toggle = () => {\r\n  setOpenNav(!openNav);\r\n};\r\nreturn (\r\n  <Navbar expand='lg' className='has-megamenu'>\r\n    <NavbarBrand />\r\n    <NavbarToggler className='custom-navbar-toggler' onClick={toggle}>\r\n      <Icon icon='it-list' size='sm' />\r\n    </NavbarToggler>\r\n    <Collapse isOpen={openNav} navbar header megamenu>\r\n      <Nav className='mt-0' navbar>\r\n        <MegamenuItem itemName='Megamenu con Call to Action a destra'>\r\n          <Row>\r\n            <Col xs='12' lg='8'>\r\n              <Row>\r\n                <Col xs='12' lg='6'>\r\n                  <LinkList>\r\n                    <LinkListItem inDropdown href='#'>\r\n                      <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r\n                      <span>Link lista 1</span>\r\n                    </LinkListItem>\r\n                    <LinkListItem inDropdown href='#'>\r\n                      <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r\n                      <span>Link lista 2</span>\r\n                    </LinkListItem>\r\n                    <LinkListItem inDropdown href='#'>\r\n                      <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r\n                      <span>Link lista 3</span>\r\n                    </LinkListItem>\r\n                  </LinkList>\r\n                </Col>\r\n                <Col xs='12' lg='6'>\r\n                  <LinkList>\r\n                    <LinkListItem inDropdown href='#'>\r\n                      <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r\n                      <span>Link lista 1</span>\r\n                    </LinkListItem>\r\n                    <LinkListItem inDropdown href='#'>\r\n                      <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r\n                      <span>Link lista 2</span>\r\n                    </LinkListItem>\r\n                    <LinkListItem inDropdown href='#'>\r\n                      <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r\n                      <span>Link lista 3</span>\r\n                    </LinkListItem>\r\n                  </LinkList>\r\n                </Col>\r\n              </Row>\r\n            </Col>\r\n            <Col xs='12' lg='4'>\r\n              <MegamenuFooter vertical>\r\n                <div className='d-flex flex-column justify-content-around'>\r\n                  <MegamenuFooter.Item href='#'>\r\n                    <Icon className='me-2' color='primary' icon='it-bookmark' size='sm' />\r\n                    <span>Call to action 1</span>\r\n                  </MegamenuFooter.Item>\r\n                  <MegamenuFooter.Item href='#'>\r\n                    <Icon className='me-2' color='primary' icon='it-bookmark' size='sm' />\r\n                    <span>Call to action 2</span>\r\n                  </MegamenuFooter.Item>\r\n                </div>\r\n              </MegamenuFooter>\r\n            </Col>\r\n          </Row>\r\n        </MegamenuItem>\r\n      </Nav>\r\n    </Collapse>\r\n  </Navbar>\r\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "argomenti-componente",
      children: "Argomenti componente"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "megamenuitem",
      children: "MegamenuItem"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: MegamenuItem
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "megamenufooter",
      children: "MegamenuFooter"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: MegamenuFooter
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "megamenuhighlightcolumn",
      children: "MegamenuHighlightColumn"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["È un wrapper che utilizza come elemento principale ", jsxRuntimeExports.jsx(_components.code, {
        children: "Col"
      }), ". Ne accetta quindi tutti gli attributi."]
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: MegamenuHighlightColumn
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsxRuntimeExports.jsx(MDXLayout, {
    ...props,
    children: jsxRuntimeExports.jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
export {
  MDXContent as default
};
