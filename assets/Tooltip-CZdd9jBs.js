import { j as jsxRuntimeExports } from "./jsx-runtime-Dd8filLf.js";
import { useMDXComponents } from "./index-DKZlwgtl.js";
import { M as Meta, g as gu, C as Canvas, a as Controls3 } from "./index-BdnIcMZW.js";
import { C as Callout, a as CalloutText } from "./CalloutText-BaMkNk9G.js";
import { C as CalloutTitle } from "./CalloutTitle-DHuv_iNr.js";
import "./track-focus-DbJ2CO43.js";
import { T as TooltipStories, E as EsempiInterattivi, a as Esempi, b as EsempiConControllo, P as Posizioni } from "./Tooltip.stories-BuDTVq1S.js";
import "./index-N7T0HPyM.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-B99PWC6O.js";
import "./index-DaSoJtbc.js";
import "./index-_6PbV05F.js";
import "./index-9xAnpW0o.js";
import "./index-BdOSk9or.js";
import "./index-xoeSAV6i.js";
import "./UncontrolledTooltip-Ds-1nXvH.js";
import "./utils-Cn8VSNph.js";
import "./TooltipPopoverWrapper-IIwAcD3y.js";
import "./Popper-CBwCuBfF.js";
import "./Fade-CRSnVOOI.js";
import "./Transition-l9AVs-4D.js";
import "./Button-DzBfv9Kx.js";
import "./Button-FBjU0jYp.js";
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
      of: TooltipStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "tooltip",
      children: "Tooltip"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "documentazione-ed-esempi-per-aggiungere-tooltip-personalizzati",
      children: "Documentazione ed esempi per aggiungere tooltip personalizzati"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["I Tooltip di reactstrap con CSS e JavaScript utilizzano CSS3 per animazioni e la libreria ", jsxRuntimeExports.jsx(_components.code, {
        children: "Popper.js"
      }), " per il corretto posizionamento."]
    }), "\n", jsxRuntimeExports.jsx("div", {
      className: "docs",
      children: jsxRuntimeExports.jsxs(Callout, {
        color: "success",
        children: [jsxRuntimeExports.jsx(CalloutTitle, {
          children: jsxRuntimeExports.jsx("span", {
            className: "text",
            children: "Accessibilità"
          })
        }), jsxRuntimeExports.jsxs(CalloutText, {
          children: [jsxRuntimeExports.jsx(_components.p, {
            children: "I tooltip funzionano sia con la tastiera che per gli utenti dotati di tecnologia assistiva.\r\nÈ importante aggiungere tooltip solo ad elementi HTML che sono tradizionalmente attivabili da tastiera e\r\ninterattivi (link, bottoni, o elementi di form)."
          }), jsxRuntimeExports.jsxs(_components.p, {
            children: ["Sebbene arbitrariamente gli elementi HTML (come ", jsxRuntimeExports.jsx(gu, {
              children: "<span>"
            }), ") possano essere resi attivabili tramite\r\nl’attributo\r\n", jsxRuntimeExports.jsx(gu, {
              children: 'tabindex="0"'
            }), ", ciò aggiungerà interruzioni di tabulazioni potenzialmente dannose per gli utenti che usano\r\nla tastiera per navigare. Inoltre, la maggior parte delle tecnologie assistive in questa situazione non annuncia il\r\ntooltip come ci si potrebbe invece attendere."]
          }), jsxRuntimeExports.jsx(_components.p, {
            children: "Infine, non fare affidamento esclusivamente sull’evento “mouse over” come innesco del tooltip, in quanto ciò\r\nrenderà impossibile l’attivazione per gli utenti che usano la tastiera per navigare."
          })]
        })]
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "esempio-interattivo",
      children: "Esempio interattivo"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EsempiInterattivi
    }), "\n", jsxRuntimeExports.jsx(Controls3, {
      of: EsempiInterattivi
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "source",
      children: "Source"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const ref = useRef(null);\r\nreturn (\r\n  <div>\r\n    <Button innerRef={ref} className='m-3'>\r\n      Tooltip\r\n    </Button>\r\n\r\n    <UncontrolledTooltip placement={x.placement} target={ref}>\r\n      {x.text}\r\n    </UncontrolledTooltip>\r\n  </div>\r\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Cose da sapere quando usi il plugin tooltip:"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["I tooltip si basano sulla libreria di terze parti ", jsxRuntimeExports.jsx(_components.code, {
          children: "Popper.js"
        }), "."]
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "I tooltip con titoli vuoti non saranno mai visualizzati."
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "Attivare i tooltip su elementi nascosti non funzionerà."
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["I tooltip per gli elementi ", jsxRuntimeExports.jsx(_components.code, {
          children: ".disabled"
        }), " o ", jsxRuntimeExports.jsx(_components.code, {
          children: "disabled"
        }), " devono essere attivati da un elemento contenitore."]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Quando attivati da collegamenti ipertestuali che si estendono su più righe, i tooltip verranno centrati. Usa ", jsxRuntimeExports.jsx(_components.code, {
          children: "white-space: nowrap;"
        }), " sui tuoi ", jsxRuntimeExports.jsx(_components.code, {
          children: "<a/>"
        }), " per evitare questo comportamento."]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Il kit fornisce due tipologie di componenti per mostrare tooltip, ereditandoli da ", jsxRuntimeExports.jsx(_components.code, {
        children: "reactstrap"
      }), ": ", jsxRuntimeExports.jsx(_components.code, {
        children: "Tooltip"
      }), " e ", jsxRuntimeExports.jsx(_components.code, {
        children: "UncontrolledTooltip"
      }), ".\r\nPer la maggior parte dei casi ", jsxRuntimeExports.jsx(_components.code, {
        children: "UncontrolledTooltip"
      }), " fornisce tutte le funzionalità richieste senza dove controllare esplicitamente lo stato del componente. Per situazioni più sofisticate dove è richiesta la gestione dello stato utilizzare il componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Tooltip"
      }), "."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Passa il mouse sopra i link sottostanti per visualizzare i tooltip (con ", jsxRuntimeExports.jsx(_components.code, {
        children: "UncontrolledTooltip"
      }), "):"]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Esempi
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "source-1",
      children: "Source"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const ref1 = useRef(null);\r\nconst ref2 = useRef(null);\r\nconst ref3 = useRef(null);\r\n\r\nreturn (\r\n  <div className='bd-example tooltip-demo'>\r\n    <p className='muted'>\r\n      Ecco un{' '}\r\n      <a href='#' ref={ref1}>\r\n        bianco scenario\r\n      </a>\r\n      <br />\r\n      per tratteggiarvi l’accompagnamento\r\n      <br />\r\n      degli oggetti di sfondo che pur vivono.\r\n      <br />\r\n      Non ne sarò{' '}\r\n      <a href='#' ref={ref2}>\r\n        l’artefice\r\n      </a>{' '}\r\n      impaziente.\r\n      <br />\r\n      Berrò alle coppe della nostalgia,\r\n      <br />\r\n      avrò preteso d’ozio nelle lacrime...\r\n      <br />\r\n      perché non mi ribello alla natura:\r\n      <br />\r\n      la mia lentezza li esaspera...\r\n      <br />\r\n      La mia lentezza? No, la mia fiducia.\r\n      <br />\r\n      Per adesso è deserto.\r\n      <br />\r\n      <a href='#' ref={ref3}>\r\n        Il mondo può rifarsi senza me\r\n      </a>\r\n      ,\r\n      <br />E intanto gli altri mi denigreranno\r\n    </p>\r\n    <p>\r\n      <em>La città nuova, Alda Merini</em>\r\n    </p>\r\n\r\n    <UncontrolledTooltip placement='top' target={ref1}>\r\n      Primo tooltip\r\n    </UncontrolledTooltip>\r\n    <UncontrolledTooltip placement='top' target={ref2}>\r\n      Secondo tooltip\r\n    </UncontrolledTooltip>\r\n    <UncontrolledTooltip placement='top' target={ref3}>\r\n      Terzo tooltip\r\n    </UncontrolledTooltip>\r\n  </div>\r\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Qui trovi lo stesso esempio utilizzando il componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Tooltip"
      }), " con la gestione esplicita dello stato:"]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EsempiConControllo
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "source-2",
      children: "Source"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [openOne, toggleOne] = useState(false);\r\nconst [openTwo, toggleTwo] = useState(false);\r\nconst [openThree, toggleThree] = useState(false);\r\n\r\nconst ref1 = useRef(null);\r\nconst ref2 = useRef(null);\r\nconst ref3 = useRef(null);\r\n\r\nreturn (\r\n  <div className='bd-example tooltip-demo'>\r\n    <p className='muted'>\r\n      Ecco un{' '}\r\n      <a href='#' ref={ref1}>\r\n        bianco scenario\r\n      </a>\r\n      <br />\r\n      per tratteggiarvi l’accompagnamento\r\n      <br />\r\n      degli oggetti di sfondo che pur vivono.\r\n      <br />\r\n      Non ne sarò{' '}\r\n      <a href='#' ref={ref2}>\r\n        l’artefice\r\n      </a>{' '}\r\n      impaziente.\r\n      <br />\r\n      Berrò alle coppe della nostalgia,\r\n      <br />\r\n      avrò preteso d’ozio nelle lacrime...\r\n      <br />\r\n      perché non mi ribello alla natura:\r\n      <br />\r\n      la mia lentezza li esaspera...\r\n      <br />\r\n      La mia lentezza? No, la mia fiducia.\r\n      <br />\r\n      Per adesso è deserto.\r\n      <br />\r\n      <a href='#' ref={ref3}>\r\n        Il mondo può rifarsi senza me\r\n      </a>\r\n      ,\r\n      <br />E intanto gli altri mi denigreranno\r\n    </p>\r\n    <p>\r\n      <em>La città nuova, Alda Merini</em>\r\n    </p>\r\n\r\n    <Tooltip placement='top' target={ref1} isOpen={openOne} toggle={() => toggleOne(!openOne)}>\r\n      Primo tooltip\r\n    </Tooltip>\r\n    <Tooltip placement='top' target={ref2} isOpen={openTwo} toggle={() => toggleTwo(!openTwo)}>\r\n      Secondo tooltip\r\n    </Tooltip>\r\n    <Tooltip placement='top' target={ref3} isOpen={openThree} toggle={() => toggleThree(!openThree)}>\r\n      Terzo tooltip\r\n    </Tooltip>\r\n  </div>\r\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Passa il mouse sopra i bottoni sottostanti per vedere le quattro direzioni dei tooltip: sopra, destra, sotto, e sinistra."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Posizioni
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "source-3",
      children: "Source"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const ref1 = useRef(null);\r\nconst ref2 = useRef(null);\r\nconst ref3 = useRef(null);\r\nconst ref4 = useRef(null);\r\nconst ref5 = useRef(null);\r\n\r\nreturn (\r\n  <div style={{ padding: 100 }}>\r\n    <Button innerRef={ref1} className='m-3'>\r\n      Tooltip in alto\r\n    </Button>\r\n    <Button innerRef={ref2} className='m-3'>\r\n      Tooltip a destra\r\n    </Button>\r\n    <Button innerRef={ref3} className='m-3'>\r\n      Tooltip in basso\r\n    </Button>\r\n    <Button innerRef={ref4} className='m-3'>\r\n      Tooltip a sinistra\r\n    </Button>\r\n    <Button innerRef={ref5} className='m-3'>\r\n      Tooltip con HTML\r\n    </Button>\r\n\r\n    <UncontrolledTooltip placement='top' target={ref1}>\r\n      Tooltip on top\r\n    </UncontrolledTooltip>\r\n    <UncontrolledTooltip placement='right' target={ref2}>\r\n      Tooltip on right\r\n    </UncontrolledTooltip>\r\n    <UncontrolledTooltip placement='bottom' target={ref3}>\r\n      Tooltip on bottom\r\n    </UncontrolledTooltip>\r\n    <UncontrolledTooltip placement='left' target={ref4}>\r\n      Tooltip on left\r\n    </UncontrolledTooltip>\r\n    <UncontrolledTooltip placement='top' target={ref5}>\r\n      <em>Tooltip</em> <u>with</u> <b>HTML</b>\r\n    </UncontrolledTooltip>\r\n  </div>\r\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "argomenti-componente",
      children: "Argomenti componente"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Fare riferimento alla documentazione reactstrap (v9) per maggiori dettagli sui componenti ", jsxRuntimeExports.jsx(_components.code, {
        children: "Tooltip"
      }), " e ", jsxRuntimeExports.jsx(_components.code, {
        children: "UncontrolledTooltip"
      }), ": ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://reactstrap.github.io/?path=/docs/components-tooltip--tooltip",
        rel: "nofollow",
        children: "Tooltip"
      })]
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
