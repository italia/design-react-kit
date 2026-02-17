import { j as jsxRuntimeExports } from "./jsx-runtime-COvKL7u4.js";
import { useMDXComponents } from "./index-DMZ0ur-z.js";
import { M as Meta, c as ci, C as Canvas, A as ArgTypes } from "./blocks-C66hpFDv.js";
import { C as Callout, a as CalloutText } from "./CalloutText-Dfvy4CBZ.js";
import { C as CalloutTitle } from "./CalloutTitle-C5_6km6k.js";
import { M as ModalStories, _ as _EsempioBase, a as ModaleBase, b as ModaleBaseConBottoneChiusura, c as ModaleConIcona, d as ModaleConFormInputs, e as ModaleConLinkList, f as ModalePopConfirm, S as ScrollDiContenutiLunghi, g as ModaleConContenutoScrollabile, h as _CentraturaVerticale, A as AllineamentoASinistra, i as AllineamentoADestra, R as RimuovereLanimazione, j as _Dimensioni, k as Modal, l as ModalHeader, m as ModalBody, n as ModalFooter } from "./Modal.stories-BJuNRcNd.js";
import "./track-focus-DbJ2CO43.js";
import "./iframe-BMr-kR9u.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-CJ9b0Pjr.js";
import "./index-CuPZ171k.js";
import "./FormGroup-CGDGv27S.js";
import "./utils-R1pK7pq0.js";
import "./Label-Bxwu4ecG.js";
import "./Button-B9FEd-mO.js";
import "./Button-Cjou70v-.js";
import "./Icon-CB2E_ttD.js";
import "./Input-BekHOtbc.js";
import "./index-Bgh91DG-.js";
import "./utils-CwYUlCuU.js";
import "./LinkListItem-BvBww0Tm.js";
import "./Fade-Djpb1QwA.js";
import "./Transition-Du0bJJBs.js";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    p: "p",
    pre: "pre",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: ModalStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "modale",
      children: "Modale"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Le finestre modali si possono usare per mostrare contenuti in evidenza, notifiche agli utenti, o contenuti personalizzati.\r\nCliccando sulla parte che oscura la pagina (il cosiddetto ", jsxRuntimeExports.jsx(_components.code, {
        children: "backdrop"
      }), " della modale), questa verrà chiusa automativamente."]
    }), "\n", jsxRuntimeExports.jsx("div", {
      className: "docs",
      children: jsxRuntimeExports.jsxs(Callout, {
        color: "warning",
        children: [jsxRuntimeExports.jsx(CalloutTitle, {
          children: jsxRuntimeExports.jsx("span", {
            className: "text",
            children: "Accessibilità"
          })
        }), jsxRuntimeExports.jsx(CalloutText, {
          children: jsxRuntimeExports.jsxs(_components.p, {
            children: ["Per tutti i componenti Modale viene automaticamente aggiunto l'attributo ", jsxRuntimeExports.jsx(ci, {
              children: 'role="dialog"'
            }), " e ", jsxRuntimeExports.jsx(ci, {
              children: 'role="document"'
            }), " all'elemento contenitore.\r\n(", jsxRuntimeExports.jsx(_components.a, {
              href: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role",
              rel: "nofollow",
              children: "maggiori info su MDN"
            }), ")"]
          })
        }), jsxRuntimeExports.jsx(CalloutText, {
          children: jsxRuntimeExports.jsxs(_components.p, {
            children: ["L’attributo ", jsxRuntimeExports.jsx(ci, {
              children: 'aria-labelledby="..."'
            }), " deve essere assegnato al componente ", jsxRuntimeExports.jsx(ci, {
              children: "Modal"
            }), " ed usare come valore l'ID del componente ", jsxRuntimeExports.jsx(ci, {
              children: "ModalHeader"
            }), ".\r\n(", jsxRuntimeExports.jsx(_components.a, {
              href: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby",
              rel: "nofollow",
              children: "maggiori info su MDN"
            }), ")"]
          })
        }), jsxRuntimeExports.jsx(CalloutText, {
          children: jsxRuntimeExports.jsxs(_components.p, {
            children: ["Approfondisci l’argomento sul sito delle ", jsxRuntimeExports.jsx(_components.a, {
              href: "https://www.w3.org/WAI/ARIA/apg/#dialog_modal",
              rel: "nofollow",
              children: "WAI-ARIA Authoring Practices."
            })]
          })
        })]
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "componenti-della-modale",
      children: "Componenti della modale"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["In basso un esempio di una modale statica, senza componente principale ", jsxRuntimeExports.jsx(_components.code, {
        children: "Modal"
      }), ". Sono inclusi l’intestazione, il corpo, e il footer della modale come mostrato di seguito."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: _EsempioBase
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "È richiesta l’inclusione di intestazioni o elementi con funzione di chiusura della modale stessa."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ModaleBase
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [isOpen, toggleModal] = useState(false);\r\n\r\nreturn (\r\n  <div>\r\n    <Button color='primary' onClick={() => toggleModal(!isOpen)}>\r\n      Lancia la demo della modale\r\n    </Button>\r\n    <Modal isOpen={isOpen} toggle={() => toggleModal(!isOpen)} labelledBy='esempio1'>\r\n      <ModalHeader toggle={() => toggleModal(!isOpen)} id='esempio1'>\r\n        Titolo della modale\r\n      </ModalHeader>\r\n      <ModalBody>\r\n        <p>Woohoo, stai leggendo questo testo in una modale!</p>\r\n      </ModalBody>\r\n      <ModalFooter>\r\n        <Button color='primary' onClick={() => toggleModal(!isOpen)}>\r\n          Salva modifiche\r\n        </Button>\r\n      </ModalFooter>\r\n    </Modal>\r\n  </div>\r\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "modale-con-bottone-di-chiusura",
      children: "Modale con bottone di chiusura"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per chiudere la modale, si può utilizzare un bottone: il componente aggiungerà un testo apposito per gli screen reader.\r\nPer mostrare l'icona di chiusura, passare una funzione ", jsxRuntimeExports.jsx(_components.code, {
        children: "toggle"
      }), " al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "ModalHeader"
      }), " al fine di gestirne il comportamento quando l'utente cliccherà."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ModaleBaseConBottoneChiusura
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice-1",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [isOpen, toggleModal] = useState(false);\r\n\r\nreturn (\r\n  <div>\r\n    <Button color='primary' onClick={() => toggleModal(!isOpen)}>\r\n      Mostra modale con bottone di chiusura\r\n    </Button>\r\n    <Modal isOpen={isOpen} toggle={() => toggleModal(!isOpen)} labelledBy='esempio2'>\r\n      <ModalHeader toggle={() => toggleModal(!isOpen)} id='esempio2'>\r\n        Titolo della modale\r\n      </ModalHeader>\r\n      <ModalBody>\r\n        <p>Woohoo, stai leggendo questo testo in una modale!</p>\r\n      </ModalBody>\r\n      <ModalFooter>\r\n        <Button color='secondary' onClick={() => toggleModal(!isOpen)}>\r\n          Chiudi\r\n        </Button>\r\n        <Button color='primary' onClick={() => toggleModal(!isOpen)}>\r\n          Salva modifiche\r\n        </Button>\r\n      </ModalFooter>\r\n    </Modal>\r\n  </div>\r\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice-2",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "modale-con-icona",
      children: "Modale con icona"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "E’ possibie inserire un icona di alert (o altro tipo) affiancandola all’intestazione."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ModaleConIcona
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice-3",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [isOpen, toggleModal] = useState(false);\r\n\r\nreturn (\r\n  <div>\r\n    <Button color='primary' onClick={() => toggleModal(!isOpen)}>\r\n      Lancia modale con icona\r\n    </Button>\r\n    <Modal isOpen={isOpen} toggle={() => toggleModal(!isOpen)} withIcon labelledBy='esempio3'>\r\n      <ModalHeader icon='it-info-circle' id='esempio3'>\r\n        This is a notification message more long than usual\r\n      </ModalHeader>\r\n      <ModalBody>\r\n        <p>In the various types of information modal dialog, only one button to close dialog is provided.</p>\r\n      </ModalBody>\r\n      <ModalFooter>\r\n        <Button color='primary' onClick={() => toggleModal(!isOpen)}>\r\n          Ok\r\n        </Button>\r\n      </ModalFooter>\r\n    </Modal>\r\n  </div>\r\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "modale-con-radiobuttons",
      children: "Modale con radiobuttons"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "All’interno della modale è possibile inserire elementi form. Di seguito una modale con un elenco di radio button."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ModaleConFormInputs
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice-4",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [isOpen, toggleModal] = useState(false);\r\n\r\nreturn (\r\n  <div>\r\n    <Button color='primary' onClick={() => toggleModal(!isOpen)}>\r\n      Lancia modale con form\r\n    </Button>\r\n    <Modal isOpen={isOpen} toggle={() => toggleModal(!isOpen)} labelledBy='esempio4'>\r\n      <ModalHeader id='esempio4' toggle={() => toggleModal(!isOpen)}>\r\n        SCEGLI UNA OPZIONE\r\n      </ModalHeader>\r\n      <ModalBody>\r\n        <FormGroup check>\r\n          <Input name='gruppo1' type='radio' id='radio1' defaultChecked />\r\n          <Label check htmlFor='radio1'>\r\n            Opzione 1\r\n          </Label>\r\n        </FormGroup>\r\n        <FormGroup check>\r\n          <Input name='gruppo1' type='radio' id='radio2' />\r\n          <Label check htmlFor='radio2'>\r\n            Opzione 2\r\n          </Label>\r\n        </FormGroup>\r\n        <FormGroup check>\r\n          <Input name='gruppo1' type='radio' id='radio3' />\r\n          <Label check htmlFor='radio3'>\r\n            Opzione 3\r\n          </Label>\r\n        </FormGroup>\r\n      </ModalBody>\r\n      <ModalFooter>\r\n        <Button outline color='primary' onClick={() => toggleModal(!isOpen)}>\r\n          Chiudi\r\n        </Button>\r\n        <Button color='primary' onClick={() => toggleModal(!isOpen)} disabled>\r\n          Ok\r\n        </Button>\r\n      </ModalFooter>\r\n    </Modal>\r\n  </div>\r\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "modale-con-link-list",
      children: "Modale con Link List"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["All’interno della modale è possibile inserire delle Liste di link. Per formattare correttamente il contenuto di questa modale, aggiungere l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "withLinkList"
      }), " al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Modal"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ModaleConLinkList
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice-5",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [isOpen, toggleModal] = useState(false);\r\n\r\nreturn (\r\n  <div>\r\n    <Button color='primary' onClick={() => toggleModal(!isOpen)}>\r\n      Lancia modale con LinkList\r\n    </Button>\r\n    <Modal isOpen={isOpen} toggle={() => toggleModal(!isOpen)} withLinkList labelledBy='esempio5'>\r\n      <ModalHeader id='esempio5'>\r\n        <span>1.</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.\r\n      </ModalHeader>\r\n      <ModalBody>\r\n        <LinkList>\r\n          <LinkListItem className='icon-left'>\r\n            <Icon color='primary' icon='it-chevron-right' aria-hidden />\r\n            <span>Link list 1</span>\r\n          </LinkListItem>\r\n          <LinkListItem className='icon-left'>\r\n            <Icon color='primary' icon='it-chevron-right' aria-hidden />\r\n            <span>Link list 2</span>\r\n          </LinkListItem>\r\n          <LinkListItem className='icon-left'>\r\n            <Icon color='primary' icon='it-chevron-right' aria-hidden />\r\n            <span>Link list 3</span>\r\n          </LinkListItem>\r\n        </LinkList>\r\n      </ModalBody>\r\n      <ModalFooter>\r\n        <Button color='primary' onClick={() => toggleModal(!isOpen)}>\r\n          Ok\r\n        </Button>\r\n      </ModalFooter>\r\n    </Modal>\r\n  </div>\r\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "modale-popconfirm",
      children: "Modale Popconfirm"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["La Modale di tipo Popconfirm può essere utilizzata per brevi messaggi di conferma. Questo particolare design si ottiene applicando l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "popConfirm"
      }), " al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Modal"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ModalePopConfirm
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice-6",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [isOpenBase, toggleBaseModal] = useState(false);\r\nconst [isOpenWithHeader, toggleModalWithHeader] = useState(false);\r\n\r\nreturn (\r\n  <div>\r\n    <Button color='primary' onClick={() => toggleBaseModal(!isOpenBase)} className='me-3'>\r\n      Lancia modale pop-confirm base\r\n    </Button>\r\n    <Button color='primary' onClick={() => toggleModalWithHeader(!isOpenWithHeader)} className='me-3'>\r\n      Lancia modale pop-confirm con titolo\r\n    </Button>\r\n    <Modal isOpen={isOpenBase} toggle={() => toggleBaseModal(!isOpenBase)} popConfirm>\r\n      <ModalBody>\r\n        <p>Font Titillium 14px. Leading 21px.</p>\r\n      </ModalBody>\r\n      <ModalFooter>\r\n        <Button color='primary' onClick={() => toggleBaseModal(!isOpenBase)} size='sm'>\r\n          Action one\r\n        </Button>\r\n        <Button color='secondary' onClick={() => toggleBaseModal(!isOpenBase)} size='sm' outline>\r\n          Action two\r\n        </Button>\r\n      </ModalFooter>\r\n    </Modal>\r\n    <Modal\r\n      isOpen={isOpenWithHeader}\r\n      toggle={() => toggleModalWithHeader(!isOpenWithHeader)}\r\n      popConfirm\r\n      labelledBy='esempio6'\r\n    >\r\n      <ModalHeader labelledBy='esempio6'>Popconfirm header</ModalHeader>\r\n      <ModalBody>\r\n        <p>Font Titillium 14px. Leading 21px.</p>\r\n      </ModalBody>\r\n      <ModalFooter>\r\n        <Button color='primary' onClick={() => toggleModalWithHeader(!isOpenWithHeader)} size='sm'>\r\n          Action one\r\n        </Button>\r\n        <Button color='secondary' onClick={() => toggleModalWithHeader(!isOpenWithHeader)} size='sm' outline>\r\n          Action two\r\n        </Button>\r\n      </ModalFooter>\r\n    </Modal>\r\n  </div>\r\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "scroll-di-contenuti-lunghi",
      children: "Scroll di contenuti lunghi"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Quando le modali diventano troppo lunghe per il viewport o il dispositivo dell’utente, scorrono indipendentemente dalla pagina stessa."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ScrollDiContenutiLunghi
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice-7",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [isOpen, toggleModal] = useState(false);\r\n\r\nreturn (\r\n  <div>\r\n    <Button color='primary' onClick={() => toggleModal(!isOpen)}>\r\n      Lancia la demo della modale scrollabile\r\n    </Button>\r\n    <Modal isOpen={isOpen} toggle={() => toggleModal(!isOpen)} labelledBy='esempio7'>\r\n      <ModalHeader toggle={() => toggleModal(!isOpen)} id='esempio7'>\r\n        Titolo della modale\r\n      </ModalHeader>\r\n      <ModalBody>\r\n        <div>\r\n          <p>\r\n            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget\r\n            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\r\n          </p>\r\n          <p>\r\n            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet\r\n            rutrum faucibus dolor auctor.\r\n          </p>\r\n          <p>\r\n            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl\r\n            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.\r\n          </p>\r\n          <p>\r\n            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget\r\n            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\r\n          </p>\r\n          <p>\r\n            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet\r\n            rutrum faucibus dolor auctor.\r\n          </p>\r\n          <p>\r\n            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl\r\n            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.\r\n          </p>\r\n          <p>\r\n            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget\r\n            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\r\n          </p>\r\n          <p>\r\n            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet\r\n            rutrum faucibus dolor auctor.\r\n          </p>\r\n          <p>\r\n            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl\r\n            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.\r\n          </p>\r\n          <p>\r\n            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget\r\n            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\r\n          </p>\r\n          <p>\r\n            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet\r\n            rutrum faucibus dolor auctor.\r\n          </p>\r\n          <p>\r\n            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl\r\n            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.\r\n          </p>\r\n          <p>\r\n            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget\r\n            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\r\n          </p>\r\n          <p>\r\n            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet\r\n            rutrum faucibus dolor auctor.\r\n          </p>\r\n          <p>\r\n            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl\r\n            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.\r\n          </p>\r\n          <p>\r\n            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget\r\n            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\r\n          </p>\r\n          <p>\r\n            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet\r\n            rutrum faucibus dolor auctor.\r\n          </p>\r\n          <p>\r\n            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl\r\n            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.\r\n          </p>\r\n        </div>\r\n      </ModalBody>\r\n      <ModalFooter>\r\n        <Button color='secondary' onClick={() => toggleModal(!isOpen)}>\r\n          Chiudi\r\n        </Button>\r\n        <Button color='primary' onClick={() => toggleModal(!isOpen)}>\r\n          Salva modifiche\r\n        </Button>\r\n      </ModalFooter>\r\n    </Modal>\r\n  </div>\r\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "scroll-di-contenuti-allinterno-della-modale",
      children: "Scroll di contenuti all’interno della modale"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Si può scelgliere di utilizzare uno scroll interno alla madole, mantenendo sempre visibile l’intestazione ed il footer della modale stessa aggiungendo l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "scrollable"
      }), " al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Modal"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ModaleConContenutoScrollabile
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice-8",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [isOpen, toggleModal] = useState(false);\r\n\r\nreturn (\r\n  <div>\r\n    <Button color='primary' onClick={() => toggleModal(!isOpen)}>\r\n      Lancia modale con contenuto scrollabile\r\n    </Button>\r\n    <Modal isOpen={isOpen} toggle={() => toggleModal(!isOpen)} scrollable labelledBy='esempio8'>\r\n      <ModalHeader id='esempio8'>INTESTAZIONE MODALE</ModalHeader>\r\n      <ModalBody>\r\n        <p>\r\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\r\n          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\r\n          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\r\n          est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\r\n          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore\r\n          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\r\n          mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\r\n          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\r\n          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit\r\n          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\r\n          officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse\r\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\r\n          officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\r\n          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\r\n          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate\r\n          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\r\n          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing\r\n          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\r\n          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\r\n          in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\r\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,\r\n          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\r\n          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute\r\n          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\r\n          occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute\r\n          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\r\n          occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n        </p>\r\n      </ModalBody>\r\n      <ModalFooter>\r\n        <Button color='primary' outline onClick={() => toggleModal(!isOpen)} size='sm'>\r\n          Chiudi\r\n        </Button>\r\n        <Button color='primary' onClick={() => toggleModal(!isOpen)} size='sm'>\r\n          Azione Uno\r\n        </Button>\r\n      </ModalFooter>\r\n    </Modal>\r\n  </div>\r\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "posizionamento",
      children: "Posizionamento"
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "centratura-verticale",
      children: "Centratura verticale"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Aggiungi l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "centered"
      }), " al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Modal"
      }), " per centrare verticalmente la modale."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: _CentraturaVerticale
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice-9",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [isOpen, toggleModal] = useState(false);\r\n\r\nreturn (\r\n  <div>\r\n    <Button color='primary' onClick={() => toggleModal(!isOpen)}>\r\n      Lancia la demo della modale\r\n    </Button>\r\n    <Modal isOpen={isOpen} toggle={() => toggleModal(!isOpen)} centered labelledBy='esempio9'>\r\n      <ModalHeader toggle={() => toggleModal(!isOpen)} id='essempio9'>\r\n        Titolo della modale\r\n      </ModalHeader>\r\n      <ModalBody>\r\n        <p>Woohoo, stai leggendo questo testo in una modale!</p>\r\n      </ModalBody>\r\n      <ModalFooter>\r\n        <Button color='secondary' onClick={() => toggleModal(!isOpen)}>\r\n          Chiudi\r\n        </Button>\r\n        <Button color='primary' onClick={() => toggleModal(!isOpen)}>\r\n          Salva modifiche\r\n        </Button>\r\n      </ModalFooter>\r\n    </Modal>\r\n  </div>\r\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "allineamento-a-sinistra",
      children: "Allineamento a sinistra"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per aprire la modale da sinistra a destra aggiungere l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "align"
      }), " con valore ", jsxRuntimeExports.jsx(_components.code, {
        children: '"left"'
      }), " al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Modal"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: AllineamentoASinistra
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice-10",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [isOpen, toggleModal] = useState(false);\r\n\r\nreturn (\r\n  <div>\r\n    <Button color='primary' onClick={() => toggleModal(!isOpen)}>\r\n      Lancia la demo della modale a sinistra\r\n    </Button>\r\n    <Modal isOpen={isOpen} toggle={() => toggleModal(!isOpen)} align='left' scrollable labelledBy='esempio10'>\r\n      <ModalHeader toggle={() => toggleModal(!isOpen)} id='esempio10'>\r\n        This is a notification message\r\n      </ModalHeader>\r\n      <ModalBody>\r\n        <p>\r\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\r\n          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\r\n          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\r\n          est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\r\n          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore\r\n          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\r\n          mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\r\n          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\r\n          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit\r\n          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\r\n          officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse\r\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\r\n          officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\r\n          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\r\n          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate\r\n          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\r\n          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing\r\n          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\r\n          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\r\n          in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\r\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,\r\n          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\r\n          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute\r\n          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\r\n          occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute\r\n          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\r\n          occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n        </p>\r\n      </ModalBody>\r\n      <ModalFooter>\r\n        <Button color='primary' onClick={() => toggleModal(!isOpen)}>\r\n          Ok\r\n        </Button>\r\n      </ModalFooter>\r\n    </Modal>\r\n  </div>\r\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "allineamento-a-destra",
      children: "Allineamento a destra"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per aprire la modale da sinistra a destra aggiungere l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "align"
      }), " con valore ", jsxRuntimeExports.jsx(_components.code, {
        children: '"left"'
      }), " al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Modal"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: AllineamentoADestra
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice-11",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [isOpen, toggleModal] = useState(false);\r\n\r\nreturn (\r\n  <div>\r\n    <Button color='primary' onClick={() => toggleModal(!isOpen)}>\r\n      Lancia la demo della modale a destra\r\n    </Button>\r\n    <Modal isOpen={isOpen} toggle={() => toggleModal(!isOpen)} align='right' scrollable labelledBy='esempio11'>\r\n      <ModalHeader toggle={() => toggleModal(!isOpen)} id='esempio11'>\r\n        This is a notification message\r\n      </ModalHeader>\r\n      <ModalBody>\r\n        <p>\r\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\r\n          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\r\n          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\r\n          est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\r\n          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore\r\n          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\r\n          mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\r\n          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\r\n          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit\r\n          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\r\n          officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse\r\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\r\n          officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\r\n          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\r\n          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate\r\n          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\r\n          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing\r\n          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\r\n          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\r\n          in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\r\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,\r\n          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\r\n          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute\r\n          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\r\n          occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute\r\n          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\r\n          occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n        </p>\r\n      </ModalBody>\r\n      <ModalFooter>\r\n        <Button color='primary' onClick={() => toggleModal(!isOpen)}>\r\n          Ok\r\n        </Button>\r\n      </ModalFooter>\r\n    </Modal>\r\n  </div>\r\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "rimuovere-lanimazione",
      children: "Rimuovere l’animazione"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per avere modali che appaiono semplicemente senza dissolvenza, imposta l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "fade"
      }), " a ", jsxRuntimeExports.jsx(_components.code, {
        children: "false"
      }), " nel componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Modal"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: RimuovereLanimazione
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice-12",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [isOpen, toggleModal] = useState(false);\r\n\r\nreturn (\r\n  <div>\r\n    <Button color='primary' onClick={() => toggleModal(!isOpen)}>\r\n      Lancia la demo della modale\r\n    </Button>\r\n    <Modal isOpen={isOpen} toggle={() => toggleModal(!isOpen)} fade={false} labelledBy='esempio12'>\r\n      <ModalHeader toggle={() => toggleModal(!isOpen)} id='esempio12'>\r\n        Titolo della modale\r\n      </ModalHeader>\r\n      <ModalBody>\r\n        <p>Woohoo, stai leggendo questo testo in una modale!</p>\r\n      </ModalBody>\r\n      <ModalFooter>\r\n        <Button color='secondary' onClick={() => toggleModal(!isOpen)}>\r\n          Chiudi\r\n        </Button>\r\n        <Button color='primary' onClick={() => toggleModal(!isOpen)}>\r\n          Salva modifiche\r\n        </Button>\r\n      </ModalFooter>\r\n    </Modal>\r\n  </div>\r\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "dimensioni-opzionali",
      children: "Dimensioni opzionali"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Le modali hanno due dimensioni opzionali, disponibili tramite l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "size"
      }), " del componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Modal"
      }), ". Queste dimensioni entrano in gioco in determinati breakpoint per evitare barre di scorrimento orizzontali su finestre più strette."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: _Dimensioni
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice-13",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [isOpen, toggleModal] = useState(false);\r\nconst [size, setSize] = useState('');\r\n\r\nreturn (\r\n  <div>\r\n    <div>\r\n      <Button\r\n        color='primary'\r\n        onClick={() => {\r\n          setSize('lg');\r\n          toggleModal(true);\r\n        }}\r\n        className='me-3'\r\n      >\r\n        Modale grande\r\n      </Button>\r\n      <Button\r\n        color='primary'\r\n        onClick={() => {\r\n          setSize('sm');\r\n          toggleModal(true);\r\n        }}\r\n      >\r\n        Modale piccola\r\n      </Button>\r\n    </div>\r\n    <Modal isOpen={isOpen} toggle={() => toggleModal(!isOpen)} size={size} labelledBy='esempio13'>\r\n      <ModalHeader toggle={() => toggleModal(!isOpen)} id='esempio13'>\r\n        Titolo della modale\r\n      </ModalHeader>\r\n      <ModalBody>\r\n        <p>Woohoo, stai leggendo questo testo in una modale!</p>\r\n      </ModalBody>\r\n      <ModalFooter>\r\n        <Button color='secondary' onClick={() => toggleModal(!isOpen)}>\r\n          Chiudi\r\n        </Button>\r\n        <Button color='primary' onClick={() => toggleModal(!isOpen)}>\r\n          Salva modifiche\r\n        </Button>\r\n      </ModalFooter>\r\n    </Modal>\r\n  </div>\r\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "argomenti-componente",
      children: "Argomenti componente"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "modal",
      children: "Modal"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: Modal
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "modalheader",
      children: "ModalHeader"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: ModalHeader
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "modalbody",
      children: "ModalBody"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: ModalBody
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "modalfooter",
      children: "ModalFooter"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: ModalFooter
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
