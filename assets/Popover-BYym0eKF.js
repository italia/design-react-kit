import { j as jsxRuntimeExports } from "./jsx-runtime-BKjOVojP.js";
import { useMDXComponents } from "./index-BDy3TOcs.js";
import { ae as Meta, af as Canvas } from "./index-BmEp6qTd.js";
import { C as Callout, a as CalloutText } from "./CalloutText-DuQn_Rtc.js";
import { C as CalloutTitle } from "./CalloutTitle-D5ep80ue.js";
import "./track-focus-DbJ2CO43.js";
import { P as PopoverStories, E as Example, D as Direzioni, T as TitoloIconaLink, M as Modalit_Hover, C as ClickSuccessivo, a as ElementiDisabilitati } from "./Popover.stories-CL3EsNiv.js";
import "./index-BehpJNG5.js";
import "./_commonjsHelpers-DWwsNxpa.js";
import "./iframe-BZF18Iv0.js";
import "../sb-preview/runtime.js";
import "./index-D7280_ap.js";
import "./index-DmVNLg0t.js";
import "./index-DJdTjTnu.js";
import "./index-dukjSSyv.js";
import "./index-BdOSk9or.js";
import "./index-D3ELxcOV.js";
import "./TooltipPopoverWrapper-y-xHxUdF.js";
import "./utils-CruPskUV.js";
import "./Popper-oXY5zJ3Q.js";
import "./Fade-BZ6Dtg_A.js";
import "./Transition-D0u52PR9.js";
import "./Button-BVZxHsm7.js";
import "./Button-Bz_c481c.js";
import "./Icon-CKsmCXXk.js";
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: PopoverStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "popover",
      children: "Popover"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "documentazione-ed-esempi-per-aggiungere-popover-tooltip-informativi-a-qualsiasi-elemento-del-tuo-sito",
      children: "Documentazione ed esempi per aggiungere popover (tooltip informativi) a qualsiasi elemento del tuo sito."
    }), "\n", jsxRuntimeExports.jsx("div", {
      className: "docs",
      children: jsxRuntimeExports.jsxs(Callout, {
        color: "success",
        children: [jsxRuntimeExports.jsx(CalloutTitle, {
          children: jsxRuntimeExports.jsx("span", {
            className: "text",
            children: "Accessibilità"
          })
        }), jsxRuntimeExports.jsx(CalloutText, {
          children: jsxRuntimeExports.jsx(_components.p, {
            children: "I popover funzionano sia con la tastiera che per gli utenti dotati di tecnologia assistiva. Allo stesso modo di\r\nquanto avviene per i Tooltip, il codice generato per i Popover è accessibile."
          })
        })]
      })
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Cose da sapere quando si utilizza il plugin popover:"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "I title e i content con valori vuoti non mostreranno mai popover."
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "Attivare i popover su elementi nascosti non funzionerà."
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["I popover per gli elementi ", jsxRuntimeExports.jsx(_components.code, {
          children: ".disabled"
        }), " o ", jsxRuntimeExports.jsx(_components.code, {
          children: "disabled"
        }), " devono essere attivati da un elemento contenitore."]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Quanto attivato da ancore che si estendono su più linee, i popover verranno centrati tra la larghezza complessiva delle ancore. Usa ", jsxRuntimeExports.jsx(_components.code, {
          children: "white-space: nowrap;"
        }), " sugli elementi ", jsxRuntimeExports.jsx(_components.code, {
          children: "<a/>"
        }), " per evitare questo comportamento."]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "esempi",
      children: "Esempi"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Example
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [popoverOpen, setPopoverOpen] = useState(false);\r\nconst targetRef = useRef(null);\r\n\r\nconst togglePopover = () => {\r\n  setPopoverOpen(!popoverOpen);\r\n};\r\n\r\nreturn (\r\n  <div>\r\n    <Button color='danger' size='lg' innerRef={targetRef} onClick={togglePopover}>\r\n      Clicca per attivare/disattivare il popover\r\n    </Button>\r\n\r\n    <Popover placement='right' target={targetRef} isOpen={popoverOpen} toggle={togglePopover}>\r\n      <PopoverHeader>Titolo del popover</PopoverHeader>\r\n      <PopoverBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.</PopoverBody>\r\n    </Popover>\r\n  </div>\r\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "direzioni",
      children: "Direzioni"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Sono disponibili quattro opzioni: allineato in alto, a destra, in basso e a sinistra."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Direzioni
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice-1",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [popoverOpenSx, setPopoverOpenSx] = useState(false);\r\nconst [popoverOpenDx, setPopoverOpenDx] = useState(false);\r\nconst [popoverOpenAlto, setPopoverOpenAlto] = useState(false);\r\nconst [popoverOpenBasso, setPopoverOpenBasso] = useState(false);\r\n\r\nconst targetRefSx = useRef(null);\r\nconst targetRefDx = useRef(null);\r\nconst targetRefAlto = useRef(null);\r\nconst targetRefBasso = useRef(null);\r\n\r\nreturn (\r\n  <div className='d-flex flex-column'>\r\n    <div className='mx-auto align-self-center p-2'>\r\n      <span>\r\n        <Button\r\n          className='me-1'\r\n          color='secondary'\r\n          innerRef={targetRefSx}\r\n          onClick={() => {\r\n            setPopoverOpenSx(!popoverOpenSx);\r\n          }}\r\n        >\r\n          Popover {'a sinistra'}\r\n        </Button>\r\n        <Popover\r\n          placement={'left'}\r\n          isOpen={popoverOpenSx}\r\n          target={targetRefSx}\r\n          toggle={() => {\r\n            setPopoverOpenSx(!popoverOpenSx);\r\n          }}\r\n        >\r\n          <PopoverBody>Vivamus sagittis lacus vel augue laoreet rutrum faucibus</PopoverBody>\r\n        </Popover>\r\n      </span>\r\n    </div>\r\n    <div className='mx-auto align-self-center p-2'>\r\n      <span>\r\n        <Button\r\n          className='me-1'\r\n          color='secondary'\r\n          innerRef={targetRefDx}\r\n          onClick={() => {\r\n            setPopoverOpenDx(!popoverOpenDx);\r\n          }}\r\n        >\r\n          Popover {'a destra'}\r\n        </Button>\r\n        <Popover\r\n          placement={'right'}\r\n          isOpen={popoverOpenDx}\r\n          target={targetRefDx}\r\n          toggle={() => {\r\n            setPopoverOpenDx(!popoverOpenDx);\r\n          }}\r\n        >\r\n          <PopoverBody>Vivamus sagittis lacus vel augue laoreet rutrum faucibus</PopoverBody>\r\n        </Popover>\r\n      </span>\r\n    </div>\r\n    <div className='mx-auto align-self-center p-2'>\r\n      <span>\r\n        <Button\r\n          className='me-1'\r\n          color='secondary'\r\n          innerRef={targetRefAlto}\r\n          onClick={() => {\r\n            setPopoverOpenAlto(!popoverOpenAlto);\r\n          }}\r\n        >\r\n          Popover {'in alto'}\r\n        </Button>\r\n        <Popover\r\n          placement={'top'}\r\n          isOpen={popoverOpenAlto}\r\n          target={targetRefAlto}\r\n          toggle={() => {\r\n            setPopoverOpenAlto(!popoverOpenAlto);\r\n          }}\r\n        >\r\n          <PopoverBody>Vivamus sagittis lacus vel augue laoreet rutrum faucibus</PopoverBody>\r\n        </Popover>\r\n      </span>\r\n    </div>\r\n    <div className='mx-auto align-self-center p-2'>\r\n      <span>\r\n        <Button\r\n          className='me-1'\r\n          color='secondary'\r\n          innerRef={targetRefBasso}\r\n          onClick={() => {\r\n            setPopoverOpenBasso(!popoverOpenBasso);\r\n          }}\r\n        >\r\n          Popover {'in basso'}\r\n        </Button>\r\n        <Popover\r\n          placement={'bottom'}\r\n          isOpen={popoverOpenBasso}\r\n          target={targetRefBasso}\r\n          toggle={() => {\r\n            setPopoverOpenBasso(!popoverOpenBasso);\r\n          }}\r\n        >\r\n          <PopoverBody>Vivamus sagittis lacus vel augue laoreet rutrum faucibus</PopoverBody>\r\n        </Popover>\r\n      </span>\r\n    </div>\r\n  </div>\r\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "titolo-con-icona-e-link",
      children: "Titolo con icona e link"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "È possibile aggiungere un’icona in testa al titolo ed un link in coda al contenuto."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: TitoloIconaLink
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice-2",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [popoverOpen, setPopoverOpen] = useState(false);\r\nconst targetRef = useRef(null);\r\n\r\nconst togglePopover = () => {\r\n  setPopoverOpen(!popoverOpen);\r\n};\r\nreturn (\r\n  <div>\r\n    <Button color='secondary' innerRef={targetRef} onClick={togglePopover}>\r\n      Popover con icona e link\r\n    </Button>\r\n\r\n    <Popover placement='right' target={targetRef} isOpen={popoverOpen} toggle={togglePopover}>\r\n      <PopoverHeader>\r\n        <Icon icon='it-help-circle' aria-hidden />\r\n        Titolo con icona\r\n      </PopoverHeader>\r\n      <PopoverBody>\r\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.\r\n        <a href='#' className='popover-inner-link'>\r\n          More info\r\n          <Icon icon='it-arrow-right' aria-hidden />\r\n        </a>\r\n      </PopoverBody>\r\n    </Popover>\r\n  </div>\r\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "modalità-hover",
      children: "Modalità Hover"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per aprire il ", jsxRuntimeExports.jsx(_components.code, {
        children: "Popover"
      }), " all’hover del mouse sull’elemento è necessario impostare l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "trigger"
      }), " del componente su ", jsxRuntimeExports.jsx(_components.code, {
        children: '"hover"'
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Modalit_Hover
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice-3",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [popoverOpen, setPopoverOpen] = useState(false);\r\nconst targetRef = useRef(null);\r\n\r\nconst togglePopover = () => {\r\n  setPopoverOpen(!popoverOpen);\r\n};\r\nreturn (\r\n  <div>\r\n    <Button color='secondary' innerRef={targetRef}>\r\n      Apertura in Hover\r\n    </Button>\r\n\r\n    <Popover placement='right' trigger='hover' target={targetRef} isOpen={popoverOpen} toggle={togglePopover}>\r\n      <PopoverHeader>Popover in Hover</PopoverHeader>\r\n      <PopoverBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.</PopoverBody>\r\n    </Popover>\r\n  </div>\r\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "chiusura-al-click-successivo",
      children: "Chiusura al click successivo"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Usa l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: 'trigger="focus"'
      }), " per ignorare i popover sul clic successivo dell’utente di un elemento diverso rispetto all’elemento di attivazione / disattivazione."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ClickSuccessivo
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice-4",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [popoverOpen, setPopoverOpen] = useState(false);\r\nconst targetRef = useRef(null);\r\n\r\nconst togglePopover = () => {\r\n  setPopoverOpen(!popoverOpen);\r\n};\r\nreturn (\r\n  <div>\r\n    <Button tabIndex={0} color='danger' innerRef={targetRef}>\r\n      Popover richiudibile\r\n    </Button>\r\n\r\n    <Popover placement='right' trigger='focus' target={targetRef} isOpen={popoverOpen} toggle={togglePopover}>\r\n      <PopoverHeader>Dismissible popover</PopoverHeader>\r\n      <PopoverBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.</PopoverBody>\r\n    </Popover>\r\n  </div>\r\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "elementi-disabilitati",
      children: "Elementi disabilitati"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Elementi con l’attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "disabled"
      }), " non sono interattivi, il che significa che gli utenti non possono attivare il popover (o un tooltip) con il passaggio del mouse o facendo click su di essi."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Come soluzione, ti consigliamo di attivare il ", jsxRuntimeExports.jsx(_components.code, {
        children: "Popover"
      }), " da un elemento ", jsxRuntimeExports.jsx(_components.code, {
        children: "<div/>"
      }), " o ", jsxRuntimeExports.jsx(_components.code, {
        children: "<span/>"
      }), " contenitore e sovrascrivere il ", jsxRuntimeExports.jsx(_components.code, {
        children: "pointer-events"
      }), " su un elemento disabilitato."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ElementiDisabilitati
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice-5",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [popoverOpen, setPopoverOpen] = useState(false);\r\nconst targetRef = useRef(null);\r\n\r\nreturn (\r\n  <>\r\n    <span ref={targetRef}>\r\n      <Button color='primary' disabled style={{ pointerEvents: 'none' }}>\r\n        Popover disabilitato\r\n      </Button>\r\n    </span>\r\n    <Popover\r\n      placement='right'\r\n      target={targetRef}\r\n      trigger='hover'\r\n      toggle={() => setPopoverOpen(!popoverOpen)}\r\n      isOpen={popoverOpen}\r\n    >\r\n      <PopoverHeader>Titolo del popover</PopoverHeader>\r\n      <PopoverBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.</PopoverBody>\r\n    </Popover>\r\n  </>\r\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "argomenti-componente",
      children: "Argomenti componente"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Fare riferimento alla documentazione reactstrap (v9) per maggiori dettagli sui componenti `Popover: https://reactstrap.github.io/?path=/docs/components-popover--popover"
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
