import { j as jsxRuntimeExports } from "./jsx-runtime-BspMipD3.js";
import { useMDXComponents } from "./index-c4rbJj9s.js";
import { M as Meta, C as Canvas } from "./blocks-C9ottTgS.js";
import { C as Callout, a as CalloutText } from "./CalloutText-1zhjz859.js";
import { C as CalloutTitle } from "./CalloutTitle-C8wmJAyP.js";
import "./track-focus-DbJ2CO43.js";
import { T as TabStories, a as TestualeFull, I as IconaFull, b as IconaGrandeFull, c as TestoIconaFull, d as Testuale, e as Icona, f as IconaGrande, g as TestoIcona, H as Hidescroll, h as TestualePannel, i as IconaPannel, j as IconaGrandePannel, k as TestoIconaPannel, l as TestualePannelVertical, m as TestualePannelVerticalBackground, n as TestoIconaPannelVertical, o as TestoPannelVertical, p as TestualePannelReverseBottom, q as TestualePannelReverseRight, r as TestualeFullDark, s as TestoIconaFullDark, t as TestoIconaPannelVerticalDark, u as TestualePannelReverseRightDark, v as TestualePannelCard, w as TestualePannelCardEditable } from "./Tab.stories-_jxOYx-5.js";
import "./iframe-WcRkBu1E.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-DtzevSMN.js";
import "./index-_NcwzH_h.js";
import "./Col-BqJJlB9Y.js";
import "./utils-H_KkLj11.js";
import "./Icon-kqgzPNr6.js";
import "./extends-BllNL3fH.js";
import "./Transition-DMM8Eqa4.js";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: TabStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "tab",
      children: "Tab"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["L'interfaccia a tab (o schede) di Bootstrap si basa sull'utilizzo del layout di navigazione ", jsxRuntimeExports.jsx(_components.code, {
        children: "Nav"
      }), ", con l'aggiunta della proprietà ", jsxRuntimeExports.jsx(_components.code, {
        children: "tabs"
      }), ". Per ottenere una versione con sfondo scuro e testo chiaro bisognerà aggiungere un'ulteriore classe: ", jsxRuntimeExports.jsx(_components.code, {
        children: ".nav-dark"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx("div", {
      className: "docs",
      children: jsxRuntimeExports.jsxs(Callout, {
        color: "warning",
        children: [jsxRuntimeExports.jsx(CalloutTitle, {
          children: jsxRuntimeExports.jsx("span", {
            className: "text",
            children: "Info documentazione"
          })
        }), jsxRuntimeExports.jsx(CalloutText, {
          children: jsxRuntimeExports.jsxs(_components.p, {
            children: ["La maggior parte degli esempi riguardanti il componente Tab non hanno pannelli di contenuto associati, pertanto la\r\nfunzionalità per selezionare il pannello risulterà disattivata. Per vedere il componente Tab in azione fare\r\nriferimento alla sezione ", jsxRuntimeExports.jsx(_components.a, {
              href: "#controllo-dei-pannelli-associati",
              children: "Controllo dei pannelli associati"
            }), "."]
          })
        })]
      })
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
          children: [jsxRuntimeExports.jsxs(_components.p, {
            children: ["Le interfacce a tab, come descritto nelle ", jsxRuntimeExports.jsx(_components.a, {
              href: "https://www.w3.org/TR/wai-aria-practices/#tabpanel",
              rel: "nofollow",
              children: "pratiche di implementazione WAI ARIA"
            }), ", richiedono l’utilizzo di attributi ", jsxRuntimeExports.jsx(_components.code, {
              children: 'role="tablist"'
            }), ", ", jsxRuntimeExports.jsx(_components.code, {
              children: 'role="tab"'
            }), ", ", jsxRuntimeExports.jsx(_components.code, {
              children: 'role="tabpanel"'
            }), ", e ulteriori attributi ", jsxRuntimeExports.jsx(_components.code, {
              children: "aria-"
            }), ", al fine di trasmettere la loro struttura, funzionalità e stato attuale agli utenti delle tecnologie assistive (come i lettori di schermo)."]
          }), jsxRuntimeExports.jsxs(_components.p, {
            children: ["Nota che le interfacce dinamiche a tab ", jsxRuntimeExports.jsx(_components.strong, {
              children: "non devono"
            }), " contenere menu a discesa, poiché ciò causa problemi di usabilità e accessibilità. Dal punto di vista dell’usabilità, il fatto che l’elemento trigger del tab attualmente visualizzato non sia immediatamente visibile (dato che si trova all’interno del menu a discesa chiuso) può causare confusione."]
          })]
        })]
      })
    }), "\n", jsxRuntimeExports.jsx("div", {
      className: "docs",
      children: jsxRuntimeExports.jsxs(Callout, {
        color: "danger",
        children: [jsxRuntimeExports.jsx(CalloutTitle, {
          children: jsxRuntimeExports.jsx("span", {
            className: "text",
            children: "Breaking change"
          })
        }), jsxRuntimeExports.jsx(CalloutText, {
          children: jsxRuntimeExports.jsxs(_components.p, {
            children: ["Dalla versione 5.x.x il componente ", jsxRuntimeExports.jsx(_components.code, {
              children: "Tab"
            }), " è stato completamente ridisegnato per una migliore implementazione dei\r\npattern ARIA."]
          })
        })]
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "tab-orizzontali-a-tutta-larghezza",
      children: "Tab orizzontali a tutta larghezza"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Aggiungendo la classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".auto"
      }), " al contenitore ", jsxRuntimeExports.jsx(_components.code, {
        children: "TabContainer"
      }), " i tab occupano automaticamente l’intera larghezza disponibile. Se su schermi particolarme piccoli (es: smartphone) le dimensioni dei tab dovessero superare quelle dello schermo, verrà attivato lo scrolling orizzontale dei tab stessi."]
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "tab-testuale",
      children: "Tab testuale"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Lo stato dei tab può essere attivo, non attivo e disabilitato. Utilizzare la proprietà ", jsxRuntimeExports.jsx(_components.code, {
        children: "disabled"
      }), " sul link dei tab da disabilitare."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: TestualeFull
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "tab-con-icona",
      children: "Tab con icona"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Le label dei tab possono essere sostituite da icone con classi che ne indicano il tipo, avendo cura di includere all’interno del link un elemento ", jsxRuntimeExports.jsx(_components.code, {
        children: "<span>"
      }), " con classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".visually-hidden"
      }), " contenente la descrizione dedicata agli screen reader. La classe .visually-hidden impedisce la visualizzazione del testo sui browser visuali."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: IconaFull
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "tab-con-icona-grande",
      children: "Tab con icona grande"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per ottenere icone più grandi utilizzare la classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".icon-lg"
      }), " alle icone. Aggiungere la classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".nav-tabs-icon-lg"
      }), " al contenitore ", jsxRuntimeExports.jsx(_components.code, {
        children: "TabContainer"
      }), " per ottimizzare i margini fra tab."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: IconaGrandeFull
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "tab-con-testo-e-icona",
      children: "Tab con testo e icona"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Icone e testi possono convivere all’interno dei tab, l’allineamento verticale dei due elementi è automatico. Per ottenere il corretto margine fra testo e icona nei tab a sviluppo orizzontale è necessario aggiungere la classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".nav-tabs-icon-text"
      }), " al contenitore ", jsxRuntimeExports.jsx(_components.code, {
        children: "TabContainer"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: TestoIconaFull
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "tab-orizzontali",
      children: "Tab orizzontali"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["In assenza della classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".auto"
      }), " i tab vengono dimensionati in base al contenuto."]
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "tab-testuale-1",
      children: "Tab testuale"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Testuale
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "tab-con-icona-1",
      children: "Tab con icona"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Icona
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "tab-con-icona-grande-1",
      children: "Tab con icona grande"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: IconaGrande
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "tab-con-testo-e-icona-1",
      children: "Tab con testo e icona"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: TestoIcona
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "rimozione-delle-scrollbar-su-dispositivi-touch",
      children: "Rimozione delle scrollbar su dispositivi touch"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Se per motivi estetici si volessero nascondere le scrollbar che appaiono sui dispositivi touch quando vengono scrollati orizzontalmente i tab sarà necessario inserire l’html dei tab all’interno di un wrapper con classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".nav-tabs-hidescroll"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Se i tab contengono icone è necessario aggiungere un’ulteriore classe al wrapper:"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: ".hidescroll-ico"
        }), " nel caso di icone normali"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: ".hidescroll-ico-lg"
        }), " nel caso di icone piccole"]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Hidescroll
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "controllo-dei-pannelli-associati",
      children: "Controllo dei pannelli associati"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Gli esempi sopra riportati non hanno molto senso senza un contenuto che cambi al di sotto di essi; per rendere tali interfacce navigabili è necessario inserire i componenti ", jsxRuntimeExports.jsx(_components.code, {
        children: "TabContent"
      }), " e ", jsxRuntimeExports.jsx(_components.code, {
        children: "TabPane"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "tab-testuale-2",
      children: "Tab testuale"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: TestualePannel
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "tab-con-icona-2",
      children: "Tab con icona"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: IconaPannel
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "tab-con-icona-grande-2",
      children: "Tab con icona grande"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: IconaGrandePannel
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "tab-con-testo-e-icona-2",
      children: "Tab con testo e icona"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: TestoIconaPannel
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "tab-verticali",
      children: "Tab verticali"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Impostando il parametro ", jsxRuntimeExports.jsx(_components.code, {
        children: "vertical"
      }), " al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "TabNav"
      }), " e aggiungendo i dovuti componenti per la spaziatura verticale, è possibile realizzare tab a orientamento verticale."]
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "tab-testuale-3",
      children: "Tab testuale"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: TestualePannelVertical
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "tab-testuale-con-colore-di-sfondo",
      children: "Tab testuale con colore di sfondo"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Aggiungendo la classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".nav-tabs-vertical-background"
      }), " al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "TabNav"
      }), " contenitore dei link i tab selezionati avranno un colore di sfondo."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: TestualePannelVerticalBackground
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "tab-con-testo-e-icona-3",
      children: "Tab con testo e icona"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: TestoIconaPannelVertical
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "tab-con-icona-3",
      children: "Tab con icona"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Le label dei Tab possono essere sostituite da icone, avendo cura di includere all’interno del link un elemento ", jsxRuntimeExports.jsx(_components.code, {
        children: "<span>"
      }), " contenente la descrizione per non gli screen reader del tab con classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".visually-hidden"
      }), " per nascondere la descrizione agli altri browser. Al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "TabNavLink"
      }), " contenente l’icona va aggiunta la classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".justify-content-end"
      }), " per allineare l’icona a destra."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: TestoPannelVertical
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "posizione-dei-tab",
      children: "Posizione dei Tab"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Per questioni di accessibilità è preferibile utilizzare le proprietà Flex di CSS a un cambio di posizione dei Tab nell’HTML. Per garantire un flusso di lettura naturale della pagina i tab di navigazione devono precedere il contenuto a loro associato."
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "orizzontale-in-fondo",
      children: "Orizzontale in fondo"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per posizionare i tab al di sotto del contenuto è necessario utilizzare un elemento contenitore (ad esempio un ", jsxRuntimeExports.jsx(_components.code, {
        children: "<div>"
      }), ") con classi ", jsxRuntimeExports.jsx(_components.code, {
        children: ".d-flex .flex-column-reverse"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: TestualePannelReverseBottom
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "verticale-a-destra",
      children: "Verticale a destra"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per posizionare i tab verticali a destra contenuto è necessario applicare la classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".flex-row-reverse"
      }), " all’elemento con classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".row"
      }), " che li contiene."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: TestualePannelReverseRight
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "tab-con-sfondo-scuro",
      children: "Tab con sfondo scuro"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "tab-orizzontali-a-tutta-larghezza-1",
      children: "Tab orizzontali a tutta larghezza"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: TestualeFullDark
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "tab-con-testo-e-icona-4",
      children: "Tab con testo e icona"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: TestoIconaFullDark
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "tab-verticali-1",
      children: "Tab verticali"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: TestoIconaPannelVerticalDark
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "tab-verticali-destra",
      children: "Tab verticali destra"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: TestualePannelReverseRightDark
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "tab-tipo-card",
      children: "Tab tipo Card"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Aggiungere la proprietà ", jsxRuntimeExports.jsx(_components.code, {
        children: "card"
      }), " al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "TabNav"
      }), " per ottenere un design tipo card."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: TestualePannelCard
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "tab-tipo-card-con-pulsanti-aggiungielimina",
      children: "Tab tipo Card con pulsanti aggiungi/elimina"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: TestualePannelCardEditable
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
