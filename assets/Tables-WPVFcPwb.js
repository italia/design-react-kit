import { j as jsxRuntimeExports } from "./jsx-runtime-BKjOVojP.js";
import { useMDXComponents } from "./index-BDy3TOcs.js";
import { ae as Meta, af as Canvas } from "./index-TPQrYqDM.js";
import { C as Callout, a as CalloutText } from "./CalloutText-DuQn_Rtc.js";
import { C as CalloutTitle } from "./CalloutTitle-D5ep80ue.js";
import "./track-focus-DbJ2CO43.js";
import { T as TablesStories, a as TableBase, b as TableDark, c as TableThead, d as TableStriped, e as TableBordered, f as TableBorderless, g as TableHover, h as TableCompact, i as TableContextual, j as TableCaptions, k as TableResponsive, l as TableBreakpoint } from "./Tables.stories-BgK1iNMb.js";
import "./index-BehpJNG5.js";
import "./_commonjsHelpers-DWwsNxpa.js";
import "./iframe-DTIT4K-Y.js";
import "../sb-preview/runtime.js";
import "./index-D7280_ap.js";
import "./index-DmVNLg0t.js";
import "./index-DJdTjTnu.js";
import "./index-dukjSSyv.js";
import "./index-BdOSk9or.js";
import "./index-D3ELxcOV.js";
import "./utils-CruPskUV.js";
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    p: "p",
    strong: "strong",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: TablesStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "tabelle",
      children: "Tabelle"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "documentazione-ed-esempi-per-lo-stile-delle-tabelle",
      children: "Documentazione ed esempi per lo stile delle tabelle."
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "esempi",
      children: "Esempi"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Usando il markup di base della tabella, ecco come appaiono le tabelle che utilizzano il componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Table"
      }), ". ", jsxRuntimeExports.jsx(_components.strong, {
        children: "Tutti gli stili di tabella sono ereditari"
      }), ", il che significa che tutte le tabelle nidificate saranno stilizzate nello stesso modo del genitore."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: TableBase
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Puoi anche invertire i colori, con testo chiaro su sfondi scuri con l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "dark"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: TableDark
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "opzioni-delle-intestazioni-di-tabella",
      children: "Opzioni delle intestazioni di tabella"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Utilizzare le classi di modifica ", jsxRuntimeExports.jsx(_components.code, {
        children: ".table-light"
      }), " o ", jsxRuntimeExports.jsx(_components.code, {
        children: ".table-dark"
      }), " per far apparire ", jsxRuntimeExports.jsx(_components.code, {
        children: "<thead>, <tbody>, <tfoot>, <tr>, <th> e <td>"
      }), ". chiaro o grigio scuro."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: TableThead
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "righe-striate",
      children: "Righe striate"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Usa l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "striped"
      }), " per aggiungere delle striature zebrate ad ogni riga della tabella contenute in ", jsxRuntimeExports.jsx(_components.code, {
        children: "<tbody/>"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: TableStriped
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "tabella-con-bordi",
      children: "Tabella con bordi"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Usa l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "bordered"
      }), " per avere i bordi a tutti i lati della tabella e su tutte le celle."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: TableBordered
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "tabella-senza-bordi",
      children: "Tabella senza bordi"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Usa l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "borderless"
      }), " per una tabella senza bordi."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: TableBorderless
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "righe-ed-hover",
      children: "Righe ed hover"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Usa l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "hover"
      }), " per abilitare lo stato hover sulle righe della tabella contenute in ", jsxRuntimeExports.jsx(_components.code, {
        children: "<tbody/>"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: TableHover
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "tabella-compatta",
      children: "Tabella compatta"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Aggiungi l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: 'size="sm"'
      }), " per rendere le tabelle più compatte dimezzando il cell padding."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: TableCompact
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "classi-contestuali",
      children: "Classi contestuali"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Usa le classi contestuali per colorare le righe delle tabelle o le singole celle."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: TableContextual
    }), "\n", jsxRuntimeExports.jsx("div", {
      className: "docs",
      children: jsxRuntimeExports.jsxs(Callout, {
        color: "success",
        children: [jsxRuntimeExports.jsx(CalloutTitle, {
          children: jsxRuntimeExports.jsx("span", {
            className: "text",
            children: "Trasmettere significato alle tecnologie assistive"
          })
        }), jsxRuntimeExports.jsx(CalloutText, {
          children: jsxRuntimeExports.jsxs(_components.p, {
            children: ["L'uso del colore per aggiungere un significato fornisce solo un’indicazione visiva, che non sarà trasmesso agli\r\nutenti di tecnologie assistive – come gli screen reader. Assicurati che le informazioni denotate dal colore siano\r\nrese disponibili anche dal contenuto stesso (es.: il testo visibile), o siano incluse attraverso mezzi\r\nalternativi, come testo aggiuntivo nascosto con la classe\r\n", jsxRuntimeExports.jsx("code", {
              children: ".visually-hidden"
            }), "."]
          })
        })]
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "captions",
      children: "Captions"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Un ", jsxRuntimeExports.jsx(_components.code, {
        children: "<caption/>"
      }), " funziona come un’intestazione per una tabella. Aiuta gli utenti con screen reader a trovare una tabella e capire di cosa si tratta e decidere se vogliono leggerla."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: TableCaptions
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "tabelle-responsive",
      children: "Tabelle responsive"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Le tabelle responsive consentono di scorrere le tabelle orizzontalmente con facilità. Rendi ogni tabella responsive su tutti i viewports aggiungendo al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Table"
      }), " l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "responsive"
      }), ". Oppure, scegli un breakpoint massimo con il quale ottenere una tabella responsive combinando gli attributi ", jsxRuntimeExports.jsx(_components.code, {
        children: "responsive"
      }), " e ", jsxRuntimeExports.jsx(_components.code, {
        children: "size"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx("div", {
      className: "docs",
      children: jsxRuntimeExports.jsxs(Callout, {
        color: "primary",
        children: [jsxRuntimeExports.jsx(CalloutTitle, {
          children: jsxRuntimeExports.jsx("span", {
            className: "text",
            children: "Ritaglio / troncamento verticale"
          })
        }), jsxRuntimeExports.jsx(CalloutText, {
          children: jsxRuntimeExports.jsxs(_components.p, {
            children: ["Le tabelle responsive fanno uso di ", jsxRuntimeExports.jsx("code", {
              children: "overflow-y: hidden"
            }), ", che rimuove qualsiasi contenuto che va oltre i\r\nbordi inferiore o superiore della tabella. In particolare, questo può ritagliare i menu a discesa e altri widget\r\ndi terze parti."]
          })
        })]
      })
    }), "\n", jsxRuntimeExports.jsx("div", {
      className: "docs",
      children: jsxRuntimeExports.jsx(Callout, {
        color: "primary",
        children: jsxRuntimeExports.jsx(CalloutText, {
          children: jsxRuntimeExports.jsxs(_components.p, {
            children: ["Nota che in quanto i browser non supportano attualmente i range context queries, stiamo aggirando i limiti dei\r\nprefissi ", jsxRuntimeExports.jsx("code", {
              children: "min-"
            }), " and\r\n", jsxRuntimeExports.jsx("code", {
              children: "max-"
            }), " e viewports con larghezze frazionarie (che possono verificarsi in determinate condizioni su dispositivi\r\nad alta risoluzione, ad esempio) utilizzando valori con maggiore precisione per questi confronti."]
          })
        })
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "sempre-responsive",
      children: "Sempre responsive"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Attraverso ogni breakpoint, usa l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "responsive"
      }), " per tabelle con scorrimento verticale."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: TableResponsive
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "breakpoint-specifici",
      children: "Breakpoint specifici"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Combina gli attributi ", jsxRuntimeExports.jsx(_components.code, {
        children: "responsive"
      }), " e ", jsxRuntimeExports.jsx(_components.code, {
        children: "size"
      }), " come necessario per creare tabelle responsive fino a un punto di interruzione particolare. Da quel punto di interruzione in su, la tabella si comporterà normalmente e non scorrerà orizzontalmente."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: TableBreakpoint
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
