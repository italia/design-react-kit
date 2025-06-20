import { j as jsxRuntimeExports } from "./jsx-runtime-CSOqN9Rs.js";
import { useMDXComponents } from "./index-ClSvUSci.js";
import { M as Meta, C as Canvas, A as ArgTypes } from "./index-D3W_KmJT.js";
import { C as Card } from "./Card-BelSGraV.js";
import { C as CardBody, a as CardText } from "./CardText-COYqCege.js";
import { C as CardCategory } from "./CardCategory-COBAOzMR.js";
import { C as CardSignature, a as CardReadMore } from "./CardSignature-Ba5xHRge.js";
import { C as CardStories, S as SimpleCard, a as SimpleCardMultipleColumns, b as SimpleArticle, c as CardIcon, d as CardIconAdvanced, e as CardWithShading, B as BigCard, f as BigCardExampleTwo, g as BigCardWithTag, h as CardsWithImages, i as SpecialCard, j as SimpleCardTeaser, k as CardTeaserMultiple, l as CardTagsHeader, m as CardTag } from "./Card.stories-DT1ut28F.js";
import { C as CardTitle } from "./CardTitle-DN0Dmyd8.js";
import "./track-focus-DbJ2CO43.js";
import "./index-CoR6MlO7.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-DF2Pyat-.js";
import "./index-C2Bg70Bz.js";
import "./index-CnhJHytA.js";
import "./index-9xAnpW0o.js";
import "./index-BdOSk9or.js";
import "./index-xoeSAV6i.js";
import "./utils-Cn8VSNph.js";
import "./Icon-DiIdFz3Z.js";
import "./Col-DbKMWTUR.js";
import "./Button-DWiqemTT.js";
import "./Button-9tmxVOl-.js";
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: CardStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "card",
      children: "Card"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "un-contenitore-di-testi-e-immagini-con-molte-opzioni-e-varianti",
      children: "Un contenitore di testi e immagini con molte opzioni e varianti."
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Le ", jsxRuntimeExports.jsx(_components.em, {
        children: "card"
      }), " sono contenitori flessibili ed estendibili. Costruite con flexbox, offrono un facile posizionamento nella\r\ngriglia e si combinano bene con altri componenti."]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Di default le card occupano l'intero spazio orizzontale del loro elemento contenitore."
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "card-semplice",
      children: "Card semplice"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Negli esempi seguenti le card sono all’interno di una struttura colonnare di Bootstrap."
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Esempio di card semplice con titolo e testo:"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: SimpleCard
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "card-semplice-su-più-colonne",
      children: "Card semplice su più colonne"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: SimpleCardMultipleColumns
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "card-articolo-semplice",
      children: "Card Articolo semplice"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Esempio di card contenente categorizzazione e data, firma dell’articolo e link all’articolo.\r\nPer inserire la categorizzazione e/o la data di pubblicazione, usare il componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "CardCategory"
      }), " ed inserire al suo\r\ninterno gli elementi come da esempio.\r\nLa categoria nell’esempio seguente è un link, ma potrebbe essere un testo semplice senza link, utilizzando il tag\r\n", jsxRuntimeExports.jsx(_components.code, {
        children: "<span/>"
      }), " invece del tag di default (", jsxRuntimeExports.jsx(_components.code, {
        children: "<a/>"
      }), ")."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: SimpleArticle
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "card-con-icona",
      children: "Card con icona"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Esempio di card contenente categorizzazione e icona.\r\nPer inserire la categorizzazione con relativa icona, passare al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "CardCategory"
      }), " la proprietà ", jsxRuntimeExports.jsx(_components.code, {
        children: "iconName"
      }), " con\r\nl'identificativo dell'icona da utilizzare."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: CardIcon
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Un’altro esempio di card contenente intestazione (in questo caso numero di files presenti) e icona: la struttura è\r\nuguale alla card precedente, per l’intestazione è sufficiente usare l’elemento ", jsxRuntimeExports.jsx(_components.code, {
        children: ".categoryicon-top"
      }), " ed inserire al suo\r\ninterno gli elementi come da esempio."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Nell’esempio seguente sono stati inseriti un sottotitolo ed un link semplice che segue il paragrafo. Per i sottotitoli\r\nutilizzare il tag ", jsxRuntimeExports.jsx(_components.code, {
        children: "<h6/>"
      }), ", per i link semplici utilizzare la classe .simple-link."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: CardIconAdvanced
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "card-con-ombreggiatura",
      children: "Card con ombreggiatura"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Le card con ombreggiatura sono caratterizzate dagli attributi:"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: "spacing"
        }), ": utilizzata nel componente ", jsxRuntimeExports.jsx(_components.code, {
          children: "Card"
        }), " serve a distanziare le card nella loro versione mobile."]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["La classe ", jsxRuntimeExports.jsx(_components.code, {
          children: ".card-bg"
        }), ": utilizzata nel componente ", jsxRuntimeExports.jsx(_components.code, {
          children: "Card"
        }), " serve a creare background e ombra della card."]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: CardWithShading
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "card-grande",
      children: "Card grande"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Le card con ombreggiatura grandi sono caratterizzate dalle classi:"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: ".card-bg"
        }), ": utilizzata nel componente ", jsxRuntimeExports.jsx(_components.code, {
          children: "Card"
        }), " serve a creare background e ombra della card."]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: ".card-big"
        }), ": utilizzata nel componente ", jsxRuntimeExports.jsx(_components.code, {
          children: "Card"
        }), " serve a al dimensionamento dei suoi contenuti."]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Nell’esempio seguente è stata inserita un icona grande prima del titolo della card, il div contenente l’icona è di\r\nclasse ", jsxRuntimeExports.jsx(_components.code, {
        children: ".top-icon"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "esempio-1",
      children: "Esempio 1:"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: BigCard
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["L’esempio seguente contiene una icona custom (non SVG ma CSS) ed una categorizzazione con icona SVG.\r\nL’icona custom viene creata dal div ", jsxRuntimeExports.jsx(_components.code, {
        children: ".flag-icon"
      }), ".\r\nLa categorizzazione dal div con classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".etichetta"
      }), ".\r\nPer creare un bordo di colore primario a chiusura card, potete utilizzare la classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".border-bottom-card"
      }), " applicata al\r\ncomponente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Card"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "esempio-2",
      children: "Esempio 2:"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: BigCardExampleTwo
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "card-grande-con-tag-data-e-call-to-action",
      children: "Card grande con tag, data e call to action"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per inserire tags e/o data in testa alla card utilizzare l’elemento: ", jsxRuntimeExports.jsx(_components.code, {
        children: "CardTagsHeader"
      }), ".\r\nPer inserire il pulsante a fondo card, utilizzare l’elemento: ", jsxRuntimeExports.jsx(_components.code, {
        children: ".it-card-footer"
      }), ". Nell’esempio seguente sono state\r\ninserite firma e pulsante nel footer della card.\r\nUtilizzate la classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".no-after"
      }), " applicata al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Card"
      }), " se volete ridurre lo spazio inferiore del componente."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: BigCardWithTag
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "card-con-immagine",
      children: "Card con immagine"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["La card con immagine è contraddistinta dalla classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".card-img"
      }), " applicata al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Card"
      }), "."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["L’elemento immagine è ", jsxRuntimeExports.jsx(_components.code, {
        children: ".img-responsive-wrapper"
      }), " per proporzioni dell’immagine pari a circa 31:19; se associato alla\r\nclasse ", jsxRuntimeExports.jsx(_components.code, {
        children: ".img-responsive-panoramic"
      }), " l’ottimo è 62:19. Si consiglia in ogni caso un'immagine orizzontale.\r\nQualora le proporzioni non fossero esatte, l’immagine occuperà il massimo dell’altezza o della larghezza disponibile\r\nescludendo il resto dell’immagine e centrandola nell’elemento."]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "È anche possibile aggiungere un piccolo box con l’indicazione della data, per card di tipo evento."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: CardsWithImages
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "card-speciali",
      children: "Card speciali"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["La card speciale è contraddistinta dalla classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".special-card"
      }), " applicata al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Card"
      }), ".\r\nTutta la card è un link al relativo contenuto - notare il ", jsxRuntimeExports.jsx(_components.code, {
        children: 'tag="a"'
      }), ". Le proporzioni ottimali dell’immagine per questa\r\ncard sono 17:21."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: SpecialCard
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "card-teaser",
      children: "Card teaser"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per creare Card con contenuti brevi o di “anteprima” è sufficiente aggiungere l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "teaser"
      }), " al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Card"
      }), "."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Come per ogni elemento, è possibile aggiungere le classi ", jsxRuntimeExports.jsx(_components.code, {
        children: ".rounded"
      }), " o ", jsxRuntimeExports.jsx(_components.code, {
        children: ".shadow"
      }), " per aggiungere bordi, effetti di arrotondamento o ombreggiatura."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: SimpleCardTeaser
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["In alcuni casi può essere necessario raccogliere più card teasers all'interno dello stesso componente contenitore. Per questo motivo è disponibile l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "noWrapper"
      }), " per disabilitare il wrapper automatico del componente al fine di gestirne la composizione in modo più granulare:"]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: CardTeaserMultiple
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "argomenti-componente",
      children: "Argomenti componente"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "card-1",
      children: "Card"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: Card
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "cardbody",
      children: "CardBody"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: CardBody
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "cardtitle",
      children: "CardTitle"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: CardTitle
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "cardtext",
      children: "CardText"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: CardText
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "cardcategory",
      children: "CardCategory"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: CardCategory
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "cardsignature",
      children: "CardSignature"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: CardSignature
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "cardreadmore",
      children: "CardReadMore"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: CardReadMore
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "cardtagsheader",
      children: "CardTagsHeader"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: CardTagsHeader
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "cardtag",
      children: "CardTag"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: CardTag
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
