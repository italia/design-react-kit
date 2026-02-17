import { j as jsxRuntimeExports } from "./jsx-runtime-COvKL7u4.js";
import { useMDXComponents } from "./index-DMZ0ur-z.js";
import { M as Meta, C as Canvas } from "./blocks-C66hpFDv.js";
import { C as Callout, a as CalloutText } from "./CalloutText-Dfvy4CBZ.js";
import { C as CalloutTitle } from "./CalloutTitle-C5_6km6k.js";
import "./track-focus-DbJ2CO43.js";
import { T as TypographyStories, a as Titillium, L as Lora, R as RobotoMono, I as Intestazioni, D as Dimensioni, b as IntestazioneTipo, c as IntestazioneSecondario, P as Paragrafo, d as ParagrafoEvidenza, e as ParagrafiPersonalizzati, f as Link, A as Abbrevazioni, C as Citazioni, g as CitazioneFonte, h as AllineamentoCentrato, i as AllineamentoADestra, j as Liste, k as ListeInline, l as ListeAllineate } from "./Typography.stories-CQ1Nu-ss.js";
import "./iframe-BMr-kR9u.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-CJ9b0Pjr.js";
import "./index-CuPZ171k.js";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: TypographyStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "tipografia",
      children: "Tipografia"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "documentazione-sulla-gestione-della-tipografia-come-intestazioni-paragrafi-citazioni-elenchi-e-altro",
      children: "Documentazione sulla gestione della tipografia, come intestazioni, paragrafi, citazioni, elenchi e altro."
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Bootstrap imposta alcune proprietà di base per la tipografia e gli stili dei link. Quando è necessario un maggiore controllo, fornisce delle ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://italia.github.io/bootstrap-italia/docs/organizzare-i-contenuti/testo/",
        rel: "nofollow",
        children: "classi di utilità testuali"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "famiglie-di-caratteri",
      children: "Famiglie di Caratteri"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Come descritto in dettaglio nel capitolo sullo UI Kit, le Linee Guida di Design suggeriscono di usare le seguenti famiglie di caratteri:"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["il font senza grazie, o ", jsxRuntimeExports.jsx(_components.em, {
          children: "sans serif"
        }), ", ", jsxRuntimeExports.jsx(_components.strong, {
          children: "Titillium Web"
        }), "."]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["il font graziato, o ", jsxRuntimeExports.jsx(_components.em, {
          children: "serif"
        }), ", ", jsxRuntimeExports.jsx(_components.strong, {
          children: "Lora"
        }), "."]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["il font ", jsxRuntimeExports.jsx(_components.em, {
          children: "monospace"
        }), " con dimensioni di caratteri normalizzate ", jsxRuntimeExports.jsx(_components.strong, {
          children: "Roboto Mono"
        }), "."]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "titillium-web",
      children: "Titillium Web"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["È la famiglia di caratteri utilizzata per i contenuti web, per cui di norma non è necessario applicarlo esplicitamente. In caso si renda necessario è possibile utilizzare la classe ", jsxRuntimeExports.jsx(_components.code, {
        children: "text-sans-serif"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Titillium
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "lora",
      children: "Lora"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["È un carattere più adatto a testi lunghi, introdotto per la sua leggibilità, nato espressamente per la lettura su display. Può essere utilizzato applicando la classe ", jsxRuntimeExports.jsx(_components.code, {
        children: "text-serif"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Lora
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "roboto-mono",
      children: "Roboto Mono"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["È una famiglia di caratteri adatta ad essere utilizzata per la rappresentazione di numeri, codici, calcoli matematici, esempi con linguaggi di programmazione. Per il suo utilizzo, è sufficiente usare la classe ", jsxRuntimeExports.jsx(_components.code, {
        children: "font-monospace"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: RobotoMono
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "tipografia-responsive",
      children: "Tipografia responsive"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Bootstrap Italia ridimensiona testo e alcune propietà dei componenti modificando il ", jsxRuntimeExports.jsx(_components.code, {
        children: "font-size"
      }), " dell’elemento radice, con una media query che imposta dimensioni lievemente maggiori per schermi con dimensioni maggiori di ", jsxRuntimeExports.jsx(_components.code, {
        children: "576px"
      }), ". Questa impostazione, unita all’utilizzo di dimensioni in ", jsxRuntimeExports.jsx(_components.code, {
        children: "rem"
      }), " o in semplici valori numerici all’interno del CSS, fa sì che testo e altre proprietà occupino più spazio quando lo schermo lo permette:"]
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-css",
        children: "html {\r\n  font-size: 16px;\r\n  @include media-breakpoint-up(sm) {\r\n    font-size: 18px;\r\n  }\r\n}\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "intestazioni",
      children: "Intestazioni"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Tutte le intestazioni HTML, da ", jsxRuntimeExports.jsx(_components.code, {
        children: "<h1>"
      }), " fino a ", jsxRuntimeExports.jsx(_components.code, {
        children: "<h6>"
      }), ", sono disponibili, anche se è buona norma non utilizzare più di 4 livelli di intestazione."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Nel caso in cui si voglia presentare il testo nello stesso stile delle intestazioni, ma non sia possibile utilizzare l’elemento HTML appropriato, sono disponibili anche classi di tipo ", jsxRuntimeExports.jsx(_components.code, {
        children: ".h1"
      }), ", ", jsxRuntimeExports.jsx(_components.code, {
        children: ".h2"
      }), ", ecc."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Intestazioni
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Queste le dimensioni nel dettaglio:"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Dimensioni
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "intestazioni-in-evidenza",
      children: "Intestazioni in evidenza"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Gli elementi di intestazione tradizionali sono progettati per funzionare al meglio nel contesto della pagina. Nel caso sia necessario mettere in ulteriore evidenza un’intestazione di tipo ", jsxRuntimeExports.jsx(_components.code, {
        children: "<h1>"
      }), ", si può prendere in considerazione l’uso della classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".display-1"
      }), ", che restituirà una dimensione sensibilmente più grande."]
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "intestazione-di-tipo-h1",
      children: "Intestazione di tipo h1"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: IntestazioneTipo
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "personalizzazione-delle-intestazioni",
      children: "Personalizzazione delle intestazioni"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "È possibile utilizzare le classi di utilità incluse in Bootstrap per dare uno stile diverso per testi di intestazione secondaria."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: IntestazioneSecondario
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "paragrafi",
      children: "Paragrafi"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Il semplice paragrafo prevede una dimensione di testo e un’interlinea di ", jsxRuntimeExports.jsx(_components.code, {
        children: "16px/24px"
      }), " per dispositivi mobili, e di ", jsxRuntimeExports.jsx(_components.code, {
        children: "18px/28px"
      }), " per schermi con dimensioni maggiori di 576px."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Paragrafo
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Per una lettura più confortevole, è buona norma mantenere la lunghezza di un paragrafo compresa tra 45 e 74 caratteri. Per testo su colonne multiple, si considera una lunghezza compresa tra 40 e 50 caratteri. Per i testi a margine la lunghezza minima è di 12-15 caratteri."
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "paragrafi-in-evidenza",
      children: "Paragrafi in evidenza"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per mettere in risalto un paragrafo è sufficiente aggiungere la classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".lead."
      })]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ParagrafoEvidenza
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "personalizzazione-dei-paragrafi",
      children: "Personalizzazione dei paragrafi"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "È possibile stilizzare correttamente lo stile anche nel caso vengano utilizzati semplicemente gli elementi HTML5 per il trattamento di testo."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ParagrafiPersonalizzati
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Le classi ", jsxRuntimeExports.jsx(_components.code, {
        children: ".mark "
      }), " e ", jsxRuntimeExports.jsx(_components.code, {
        children: ".small"
      }), " sono disponibili anche per applicare gli stessi stili di ", jsxRuntimeExports.jsx(_components.code, {
        children: "<mark>"
      }), " e ", jsxRuntimeExports.jsx(_components.code, {
        children: "<small>"
      }), " evitando eventuali implicazioni semantiche indesiderate che i tag porterebbero con sé."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["È possibile sfruttare le classi di Bootstrap anche per modificare allineamento, stile, peso e colore del testo. Per questo, si può fare riferimento alla documentazione delle ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://italia.github.io/bootstrap-italia/docs/organizzare-i-contenuti/testo/",
        rel: "nofollow",
        children: "utilità di testo"
      }), " e ", jsxRuntimeExports.jsx(_components.a, {
        href: "/story/documentazione-utilities-colori--page",
        children: "utilità di colore"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "link",
      children: "Link"
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
            children: "È fondamentale evidenziare i link presenti in un paragrafo in modo adeguato, utilizzando la forma (grassetto,\r\nsottolineato) oltre al colore per indicare la presenza di un collegamento ipertestuale."
          })
        })]
      })
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Nel rispetto delle regole di accessibilità vigenti, Bootstrap Italia mantiene la sottolineatura ai link di tipo ", jsxRuntimeExports.jsx(_components.code, {
        children: "<a>"
      }), ". Nel caso di link già in evidenza (menu principali, liste di link, link in grassetto, ecc.), è possibile rimuovere la sottolineatura utilizzando la classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".text-decoration-none"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Link
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "abbreviazioni",
      children: "Abbreviazioni"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Implementazione stilizzata dell’elemento HTML ", jsxRuntimeExports.jsx(_components.code, {
        children: "<abbr>"
      }), " per abbreviazioni e acronimi per mostrare la versione espansa sull’ hover. Le abbreviazioni hanno una sottolineatura predefinita e ottengono un cursore di aiuto per fornire un contesto aggiuntivo al passaggio del mouse e agli utenti delle tecnologie assistive."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Aggiungi ", jsxRuntimeExports.jsx(_components.code, {
        children: ".initialism"
      }), " a un’abbreviazione per una dimensione del font leggermente più piccola."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Abbrevazioni
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "citazioni",
      children: "Citazioni"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per citare blocchi di contenuti da un’altra fonte all’interno del documento. Racchiudi ogni HTML all’interno di un ", jsxRuntimeExports.jsx(_components.code, {
        children: "<blockquote className='blockquote'>"
      }), " come la citazione."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Citazioni
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "citare-una-fonte",
      children: "Citare una fonte"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Aggiungi un ", jsxRuntimeExports.jsx(_components.code, {
        children: "<footer className='blockquote-footer'>"
      }), " per identificare la fonte. Includi il nome delle fonte di origine in ", jsxRuntimeExports.jsx(_components.code, {
        children: "<cite>"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: CitazioneFonte
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "allineamento",
      children: "Allineamento"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Utilizza le utilità di testo necessarie per modificare l’allineamento del tuo blockquote."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: AllineamentoCentrato
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: AllineamentoADestra
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "liste",
      children: "Liste"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Rimuovi il predefinito ", jsxRuntimeExports.jsx(_components.code, {
        children: "list-style"
      }), " e il margine sinistro sugli elementi elenco (solo per i figli diretti). ", jsxRuntimeExports.jsx(_components.strong, {
        children: "Questo si applica solo agli elementi della lista che sono figli diretti"
      }), ", il che significa che dovrai aggiungere la classe per tutti gli elenchi annidati."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Liste
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "inline",
      children: "Inline"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Rimuovi i punti elenco di una lista e applica un leggero margin con una combinazione di due classi, ", jsxRuntimeExports.jsx(_components.code, {
        children: ".list-inline"
      }), " e ", jsxRuntimeExports.jsx(_components.code, {
        children: ".list-inline-item"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ListeInline
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "allineamento-lista-descrizione",
      children: "Allineamento lista descrizione"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Allineare i termini e le descrizioni orizzontalmente utilizzando le classi predefinite del nostro sistema di griglia. Per termini più lunghi, puoi facoltativamente aggiungere la classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".text-truncate"
      }), " per troncare il testo con un ", jsxRuntimeExports.jsx(_components.code, {
        children: "ellipsis"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ListeAllineate
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
