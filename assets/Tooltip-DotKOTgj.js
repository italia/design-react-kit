import { j as jsxRuntimeExports } from "./jsx-runtime-BK4VhY1o.js";
import { useMDXComponents } from "./index-D9eV9cM1.js";
import { M as Meta, C as Code, d as Canvas, e as Controls3 } from "./index-kBCZqCW6.js";
import { T as TooltipStories, _ as _EsempiInterattivi, E as Esempi, a as EsempiConControllo, P as Posizioni } from "./Tooltip.stories-uW6S82o7.js";
import { C as Callout, a as CalloutText } from "./CalloutText-Dnjo-EIS.js";
import { C as CalloutTitle } from "./CalloutTitle-Cuyx78Ax.js";
import "./index-CQCy530F.js";
import "./_commonjsHelpers-LQfde5yM.js";
import "./iframe-CotRnxHI.js";
import "../sb-preview/runtime.js";
import "./index-DTvnAYOg.js";
import "./index-Hv2vTVdx.js";
import "./index-Bm14aSjb.js";
import "./inheritsLoose-HEqISCW8.js";
import "./index-MBEdkwGi.js";
import "./index-BdOSk9or.js";
import "./UncontrolledTooltip-CwwPcv3i.js";
import "./index-Cas18JYw.js";
import "./index-CpyNLP69.js";
import "./TooltipPopoverWrapper-BffXJ8Kj.js";
import "./utils-whDkaA-u.js";
import "./popper-DTKBVcSS.js";
import "./utils-l7qJ8bIE.js";
import "./Fade-CLeEbCSE.js";
import "./Transition-DOLYtmQu.js";
import "./Button-CDo48zCf.js";
import "./Button-DfNj8dlY.js";
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
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
          children: jsxRuntimeExports.jsx(_components.p, {
            children: "Accessibiltà: I tooltip funzionano sia con la tastiera che per gli utenti dotati di tecnologia assistiva."
          })
        }), jsxRuntimeExports.jsx(CalloutText, {
          children: jsxRuntimeExports.jsx(_components.p, {
            children: "È importante aggiungere tooltip solo ad elementi HTML che sono tradizionalmente attivabili da tastiera e\r\ninterattivi (link, bottoni, o elementi di form)."
          })
        }), jsxRuntimeExports.jsx(CalloutText, {
          children: jsxRuntimeExports.jsxs(_components.p, {
            children: ["Sebbene arbitrariamente gli elementi HTML (come ", jsxRuntimeExports.jsx(Code, {
              children: "<span>"
            }), ") possano essere resi attivabili tramite\r\nl’attributo\r\n", jsxRuntimeExports.jsx(Code, {
              children: 'tabindex="0"'
            }), ", ciò aggiungerà interruzioni di tabulazioni potenzialmente dannose per gli utenti che usano\r\nla tastiera per navigare. Inoltre, la maggior parte delle tecnologie assistive in questa situazione non annuncia il\r\ntooltip come ci si potrebbe invece attendere."]
          })
        }), jsxRuntimeExports.jsx(CalloutText, {
          children: jsxRuntimeExports.jsx(_components.p, {
            children: "Infine, non fare affidamento esclusivamente sull’evento “mouse over” come innesco del tooltip, in quanto ciò\r\nrenderà impossibile l’attivazione per gli utenti che usano la tastiera per navigare."
          })
        })]
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "esempio-interattivo",
      children: "Esempio interattivo"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: _EsempiInterattivi
    }), "\n", jsxRuntimeExports.jsx(Controls3, {
      of: _EsempiInterattivi
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
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Qui trovi lo stesso esempio utilizzando il componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Tooltip"
      }), " con la gestione esplicita dello stato:"]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EsempiConControllo
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Passa il mouse sopra i bottoni sottostanti per vedere le quattro direzioni dei tooltip: sopra, destra, sotto, e sinistra."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Posizioni
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "argomenti-componente",
      children: "Argomenti componente"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Fare riferimento alla documentazione reactstrap (v9) per maggiori dettagli sui componenti ", jsxRuntimeExports.jsx(_components.code, {
        children: "Tooltip"
      }), " e ", jsxRuntimeExports.jsx(_components.code, {
        children: "UncontrolledTooltip"
      }), ": https://reactstrap.github.io/?path=/docs/components-tooltip--tooltip"]
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
