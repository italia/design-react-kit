import { j as jsxRuntimeExports } from "./jsx-runtime-BRc-Ic4i.js";
import { useMDXComponents } from "./index-BqkeGXjM.js";
import { M as Meta, d as Canvas } from "./index-xkeXP2rK.js";
import { G as GriglieStories, E as EsempioBase, L as LarghezzeStandard, R as RigheMultipleBugSafari, I as ImpostaLarghezzaColonne, C as ContenutoLarghezzaVariabile, a as EqualWidthMultiRow, T as TuttiIBreakpoint, b as RaccoltiInOrizzontale, M as MischiareEAbbinare } from "./Griglie.stories-B9ZEX7x5.js";
import { C as Callout, a as CalloutText } from "./CalloutText-B3REk1Nj.js";
import { C as CalloutTitle } from "./CalloutTitle-B1JkYBwS.js";
import "./index-C-_iGYWo.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-D6ES2N_w.js";
import "../sb-preview/runtime.js";
import "./index-CClgydmT.js";
import "./index-ClxGM1EF.js";
import "./index-DLlB04eo.js";
import "./inheritsLoose-DBHupcN5.js";
import "./index-CX88d7aO.js";
import "./index-BdOSk9or.js";
import "./Col-CM3Y6KlU.js";
import "./index-C6XlOQIa.js";
import "./index-xoeSAV6i.js";
import "./utils-BFoSoHid.js";
import "./Container-DhalTljb.js";
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
      of: GriglieStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "le-griglie",
      children: "Le Griglie"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Nella definizione del layout di una interfaccia utente, la griglia è una suddivisione dello spazio tramite precise spaziature verticali ed orizzontali."
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Il Design React Kit eredita la potente griglia flexbox mobile-first di Bootstrap per costruire layout di tutte le forme e dimensioni grazie a un sistema a dodici colonne."
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "come-funziona",
      children: "Come funziona"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Il sistema di griglie di Bootstrap usa una serie di contenitori, righe e colonne per disporre ed allineare i contenuti, costruito su ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes",
        rel: "nofollow",
        children: "flexbox"
      }), " e completamente responsive."]
    }), "\n", jsxRuntimeExports.jsx("div", {
      className: "docs",
      children: jsxRuntimeExports.jsxs(Callout, {
        children: [jsxRuntimeExports.jsx(CalloutTitle, {
          children: jsxRuntimeExports.jsx("span", {
            className: "text",
            children: "Approfondimento"
          })
        }), jsxRuntimeExports.jsxs(CalloutText, {
          children: [jsxRuntimeExports.jsx(_components.p, {
            children: "Se sei poco pratico di flexbox, puoi iniziare da questi link per trovare informazioni di carattere generale,\r\nspecifiche e frammenti di codice."
          }), jsxRuntimeExports.jsxs("ul", {
            children: [jsxRuntimeExports.jsxs("li", {
              children: [jsxRuntimeExports.jsx("a", {
                href: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox",
                target: "_blank",
                rel: "noreferrer",
                children: jsxRuntimeExports.jsx(_components.p, {
                  children: "guida su flexbox su MSDN"
                })
              }), jsxRuntimeExports.jsx(_components.p, {
                children: "(in inglese)"
              })]
            }), jsxRuntimeExports.jsxs("li", {
              children: [jsxRuntimeExports.jsx("a", {
                href: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background",
                target: "_blank",
                rel: "noreferrer",
                children: jsxRuntimeExports.jsx(_components.p, {
                  children: "guida su flexbox su CSS tricks"
                })
              }), jsxRuntimeExports.jsx(_components.p, {
                children: "(in inglese)"
              })]
            }), jsxRuntimeExports.jsx("li", {
              children: jsxRuntimeExports.jsx("a", {
                href: "http://flexboxfroggy.com/#it",
                target: "_blank",
                rel: "noreferrer",
                children: jsxRuntimeExports.jsx(_components.p, {
                  children: "un simpatico quiz per verificare le tue conoscenze"
                })
              })
            })]
          })]
        })]
      })
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Di seguito puoi trovare un esempio e uno sguardo approfondito su come la griglia viene costruita."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EsempioBase
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["L’esempio precedente crea tre colonne di uguale larghezza su dispositivi piccoli, medi, grandi e extra large usando le classi di griglia predefinite. Le colonne sono centrate nella pagina attraverso l’utilizzo del componente genitore ", jsxRuntimeExports.jsx(_components.code, {
        children: "Container"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Analizzandolo nel dettaglio, ecco come funziona:"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["I contenitori forniscono un mezzo per centrare e riempire orizzontalmente il contenuto del tuo sito. Utilizza il ", jsxRuntimeExports.jsx(_components.code, {
          children: "Container"
        }), " per una larghezza al pixel responsive o aggingi l'attributo ", jsxRuntimeExports.jsx(_components.code, {
          children: "fluid"
        }), " per una larghezza del ", jsxRuntimeExports.jsx(_components.code, {
          children: "width: 100%"
        }), " su tutti i viewport e dimensioni dei device."]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["I componenti ", jsxRuntimeExports.jsx(_components.code, {
          children: "Row"
        }), " sono involucri per ", jsxRuntimeExports.jsx(_components.code, {
          children: "Column"
        }), " (colonne). Ogni colonna ha un spaziature orizzontale (", jsxRuntimeExports.jsx(_components.code, {
          children: "gutter"
        }), ") per regolare lo spazio tra di esse. Questo ", jsxRuntimeExports.jsx(_components.code, {
          children: "padding"
        }), " viene poi neutralizzato dalle righe con margini negativi. In questo modo, tutto il contenuto nelle colonne viene allineato sul lato sinistro."]
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "In un layout a griglia, il contenuto deve essere posizionato all’interno di colonne e solo le colonne possono essere figlie dirette delle righe."
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Grazie a flexbox, le colonne della griglia senza uno specifico ", jsxRuntimeExports.jsx(_components.code, {
          children: "width"
        }), " verranno automaticamente impostate come colonne di uguale larghezza. Per esempio, quattro casi di ", jsxRuntimeExports.jsx(_components.code, {
          children: '<Col size="sm"/>'
        }), " avranno automaticamente una larghezza del 25% dal più piccolo breakpoint in su. Guarda la sezione ", jsxRuntimeExports.jsx(_components.a, {
          href: "#colonne-a-disposizione-automatica",
          children: "colonne a disposizione automatica"
        }), " per maggiori informazioni."]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Le classi delle colonne indicano il numero delle colonne che dovresti utilizzare in base alle 12 possibili per riga. Quindi, se vuoi tre colonne di uguale larghezza , puoi usare l'attributo ", jsxRuntimeExports.jsx(_components.code, {
          children: "xs='4'"
        }), "."]
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "Le width delle colonne sono stabilite in percentuale, quindi sono sempre fluide e dimensionate rispetto al loro elemento genitore."
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Le colonne hanno un ", jsxRuntimeExports.jsx(_components.code, {
          children: "padding"
        }), " orizzontale per creare il ", jsxRuntimeExports.jsx(_components.code, {
          children: "gutter"
        }), " tra le singole colonne. Per rimuovere il ", jsxRuntimeExports.jsx(_components.code, {
          children: "margin"
        }), " dalle righe e il ", jsxRuntimeExports.jsx(_components.code, {
          children: "padding"
        }), " dalle colonne aggiungendo l'attributo ", jsxRuntimeExports.jsx(_components.code, {
          children: "noGutters"
        }), " al componente ", jsxRuntimeExports.jsx(_components.code, {
          children: "Row"
        }), "."]
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "Per renderla responsive, esistono cinque breakpoint della griglia, uno per ogni responsive breakpoint: tutti i breakpoint (extra small), small, medium, large, and extra large."
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["I breakpoint della griglia si basano su media query con larghezza minima, significa che si applicano a quel breakpoint e a tutti quelli sopra di esso (e.g., ", jsxRuntimeExports.jsx(_components.code, {
          children: "sm='4'"
        }), " si applica a device piccoli, medi, grandi e extra large, ma non al primo breakpoint xs)."]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["È possibile utilizzare classi di griglia predefinite (come ", jsxRuntimeExports.jsx(_components.code, {
          children: "xs='4'"
        }), ") per altri markup semantici."]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Sii consapevole dei limiti e dei ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://github.com/philipwalton/flexbugs",
        rel: "nofollow",
        children: "bug di flexbox"
      }), ", come l’ ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://github.com/philipwalton/flexbugs#9-some-html-elements-cant-be-flex-containers",
        rel: "nofollow",
        children: "incapacità di utilizzare alcuni elementi HTML come i contenitori di flex"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "le-opzioni",
      children: "Le opzioni"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Mentre Bootstrap utilizza ", jsxRuntimeExports.jsx(_components.code, {
        children: "em"
      }), " o ", jsxRuntimeExports.jsx(_components.code, {
        children: "rem"
      }), " per definire gran parte delle misure, i ", jsxRuntimeExports.jsx(_components.code, {
        children: "px"
      }), " sono utilizzati per i breakpoint della griglia e la larghezza dei contenitori. Questo perché la larghezza della viewport è definita in pixel e non cambia con il ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://drafts.csswg.org/mediaqueries-3/#units",
        rel: "nofollow",
        children: "font size"
      }), "."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Scopri come gli aspetti della griglia di Bootstrap funzionano su più dispositivi ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://italia.github.io/bootstrap-italia/docs/organizzare-gli-spazi/griglie/#le-opzioni",
        rel: "nofollow",
        children: "con una comoda tabella"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "colonne-a-disposizione-automatica",
      children: "Colonne a disposizione automatica"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Utilizza classi di colonne specifiche ad ogni breakpoint per un facile ridimensionamento delle colonne senza uno specifico attributo numerato come ", jsxRuntimeExports.jsx(_components.code, {
        children: "sm='6'"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "uniformare-larghezze-tra-colonne",
      children: "Uniformare larghezze tra colonne"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Ad esempio, qui ci sono due layout di griglia che si applicano a ogni dispositivo e viewport, da ", jsxRuntimeExports.jsx(_components.code, {
        children: "xs"
      }), " a ", jsxRuntimeExports.jsx(_components.code, {
        children: "xl"
      }), ". Aggiungi un numero qualsiasi di classi senza unità per ogni breakpoint di cui hai bisogno e ogni colonna avrà la stessa larghezza."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: LarghezzeStandard
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Colonne con uguale larghezza possono essere spezzate su più linee, ma c’è ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://github.com/philipwalton/flexbugs#11-min-and-max-size-declarations-are-ignored-when-wrapping-flex-items",
        rel: "nofollow",
        children: "un bug di flexbox su Safari"
      }), " che gli ha impedito di lavorare senza uno specifico ", jsxRuntimeExports.jsx(_components.code, {
        children: "flex-basis"
      }), " o ", jsxRuntimeExports.jsx(_components.code, {
        children: "border"
      }), ". Esistono soluzioni alternative per le versioni precedenti dei browser, ma non dovrebbero essere necessarie se si è aggiornati."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: RigheMultipleBugSafari
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "impostare-la-larghezza-di-una-colonna",
      children: "Impostare la larghezza di una colonna"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "La disposizione automatica per le colonne della griglia di flexbox significa anche che puoi impostare la larghezza di una colonna e avere le colonne sorelle automaticamente ridimensionate in base ad essa. È possibile utilizzare classi di griglia predefinite (come mostrato di seguito), mixins di griglia o larghezze in linea. Notare che le altre colonne si ridimensioneranno indipendentemente dalla larghezza della colonna centrale."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ImpostaLarghezzaColonne
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "contenuto-a-larghezza-variabile",
      children: "Contenuto a larghezza variabile"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Puoi usare la dimensione ", jsxRuntimeExports.jsx(_components.code, {
        children: "auto"
      }), " per ridimensionare le colonne in base alla naturale larghezza del loro contenuto."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ContenutoLarghezzaVariabile
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "equal-width-multi-row",
      children: "Equal-width multi-row"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Crea colonne di uguale larghezza che si estendono su più righe inserendo un .w-100 dove vuoi che le colonne vengano divise su un’altra riga."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EqualWidthMultiRow
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "classi-responsive",
      children: "Classi responsive"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "La griglia di Bootstrap include cinque livelli di classi predefinite per la creazione di layout responsive complessi. Personalizza le dimensioni delle tue colonne su dispositivi piccoli, medi, grandi o extra large a tuo piacimento."
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "tutti-i-breakpoint",
      children: "Tutti i breakpoint"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per le griglie che sono le stesse dal più piccolo dei dispositivi al più grande, usa il componente senza attributi, oppure specifica una dimensione con l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "size"
      }), " o per il breakpoint specifico. Specifica una dimensione numerata quando hai bisogno di una colonna particolarmente grande; altrimenti, sentiti libero di attenerti al componente senza attributi."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: TuttiIBreakpoint
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "raccolti-in-orizzontale",
      children: "Raccolti in orizzontale"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Utilizzando un singolo set di classi .col-sm-*, puoi creare un sistema di base che inizia raccolto su dispositivi extra-small prima di diventare orizzontale su dispositivi desktop (medi)."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: RaccoltiInOrizzontale
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "mischiare-e-abbinare",
      children: "Mischiare e abbinare"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Non vuoi che le tue colonne si raccolgano semplicemente su alcune righe della di griglia? Puoi utilizzare una combinazione di classi diverse per ogni riga secondo necessità. Guarda l’esempio di seguito per farti un’idea migliore di come funziona."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: MischiareEAbbinare
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per maggiori informazioni sui componenti ", jsxRuntimeExports.jsx(_components.code, {
        children: "Container"
      }), ", ", jsxRuntimeExports.jsx(_components.code, {
        children: "Row"
      }), " e ", jsxRuntimeExports.jsx(_components.code, {
        children: "Column"
      }), " fare riferimento ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://reactstrap.github.io/?path=/docs/components-layout--layout",
        rel: "nofollow",
        children: "alla documentazione Reactstrap"
      }), ".\r\nPer maggiori informazioni su griglie e configurazioni aggiuntive fare riferimento ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://italia.github.io/bootstrap-italia/docs/organizzare-gli-spazi/griglie/",
        rel: "nofollow",
        children: "alla documentazione di Bootstrap Italia"
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
