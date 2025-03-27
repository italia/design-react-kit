import { j as jsxRuntimeExports } from "./jsx-runtime-Dd8filLf.js";
import { useMDXComponents } from "./index-DKZlwgtl.js";
import { M as Meta, C as Canvas, A as ArgTypes } from "./index-B2URnjlY.js";
import { L as LinkList, a as LinkListItem } from "./LinkListItem-D-pDHaAX.js";
import { L as ListStories, a as ListaSemplice, b as ListaAvatar, c as ListaIcona, d as ListaImmagine, e as ListaFreccia, f as ListaAzioniMultiple, g as ListaMetadata, h as ListaTestoAzioniMultipleMetadata, i as List, j as ListItem } from "./List.stories-DesHK_a-.js";
import "./track-focus-DbJ2CO43.js";
import { _Esempi, _StatoAttivo, _StatoDisabilitato, HeaderEDividerNoLink, HeaderEDividerConLink, Sizing, EsempioMultiline, ConAvatar, ControlliComponent, ControlliSecondariComponent, PrimaryESecondaryAction, ConSwitch, ConCheckbox, NavigationComponentFixed, CollapseExample } from "./LinkList.stories-D6wUDRQE.js";
import "./index-N7T0HPyM.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-rvTl_Dr5.js";
import "./index-DaSoJtbc.js";
import "./index-_6PbV05F.js";
import "./index-9xAnpW0o.js";
import "./index-BdOSk9or.js";
import "./index-xoeSAV6i.js";
import "./Icon-CpFYfyxV.js";
import "./Navbar-BmFgHm97.js";
import "./utils-Cn8VSNph.js";
import "./NavLink-CE4cVwmb.js";
import "./FormGroup-CBxBMrzE.js";
import "./Label-BeB_moJD.js";
import "./Collapse-RbeRIZPl.js";
import "./Transition-l9AVs-4D.js";
import "./Input-g0l9fsrK.js";
import "./index-C2nrqh0v.js";
import "./utils-CwYUlCuU.js";
import "./Toggle-qyh4nzdv.js";
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: ListStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "liste",
      children: "Liste"
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "la-lista-è-un-componente-flessibile-per-la-visualizzazione-di-liste-con-testo-link-o-elementi-correlati",
      children: "La lista è un componente flessibile per la visualizzazione di liste con testo, link o elementi correlati."
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "tipologie-di-lista",
      children: "Tipologie di lista"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Le liste, costituite da tag ", jsxRuntimeExports.jsx(_components.code, {
        children: "<ul>"
      }), " con classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".it-list"
      }), " all’interno di un wrapper con classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".it-list-wrapper"
      }), ", possono contenere testi, link, icone, avatar, immagini o una combinazione di questi elementi."]
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "lista-semplice-solo-testo",
      children: "Lista semplice solo testo"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ListaSemplice
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "lista-con-avatar",
      children: "Lista con avatar"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["L’elemento ", jsxRuntimeExports.jsx(_components.code, {
        children: ".avatar"
      }), " precede l’elemento ", jsxRuntimeExports.jsx(_components.code, {
        children: ".it-right-zone"
      }), " che contiene il testo."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ListaAvatar
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "lista-con-icona",
      children: "Lista con icona"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["L’elemento ", jsxRuntimeExports.jsx(_components.code, {
        children: ".it-rounded-icon"
      }), " con all’interno la relativa icona, precede l’elemento ", jsxRuntimeExports.jsx(_components.code, {
        children: ".it-right-zone"
      }), " che contiene il testo."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ListaIcona
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "lista-con-immagine",
      children: "Lista con immagine"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["L’elemento ", jsxRuntimeExports.jsx(_components.code, {
        children: ".it-thumb"
      }), " con all’interno la relativa immagine, precede l’elemento ", jsxRuntimeExports.jsx(_components.code, {
        children: ".it-right-zone"
      }), " che contiene il testo."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ListaImmagine
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "lista-con-azioni",
      children: "Lista con azioni"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Le liste con azioni hanno al loro interno icone o elementi interattivi da associare ad azioni specifiche decise in base alle esigenze."
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "con-freccia",
      children: "Con freccia"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["L’elemento ", jsxRuntimeExports.jsx(_components.code, {
        children: ".icon"
      }), " con all’interno la relativa icona segue l’elemento ", jsxRuntimeExports.jsx(_components.code, {
        children: ".text"
      }), " che contiene il testo."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ListaFreccia
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "con-azioni-multiple",
      children: "Con azioni multiple"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["L’elemento ", jsxRuntimeExports.jsx(_components.code, {
        children: ".it-multiple "
      }), "con all’interno le relative icone, segue l’elemento ", jsxRuntimeExports.jsx(_components.code, {
        children: ".text"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ListaAzioniMultiple
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "altre-variazioni",
      children: "Altre variazioni"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "con-metadata",
      children: "Con metadata"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Ad ogni lista si può aggiungere un campo testuale metadata, come nell’esempio seguente. L’elemento ", jsxRuntimeExports.jsx(_components.code, {
        children: ".metadata"
      }), ", segue l’elemento ", jsxRuntimeExports.jsx(_components.code, {
        children: ".text"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ListaMetadata
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "con-testo-aggiuntivo-azioni-multiple-e-metadata",
      children: "Con testo aggiuntivo, azioni multiple e metadata"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per il testo aggiuntivo, utilizzare il tag ", jsxRuntimeExports.jsx(_components.code, {
        children: "<em>"
      }), " all’interno dell’elemento ", jsxRuntimeExports.jsx(_components.code, {
        children: ".text"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ListaTestoAzioniMultipleMetadata
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "liste-per-menu-di-navigazione",
      children: "Liste per menu di navigazione"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Le liste per menu di navigazione, costituite da tag ", jsxRuntimeExports.jsx(_components.code, {
        children: "<ul>"
      }), " con classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".link-list"
      }), " all’interno di un wrapper con classe .link-list-wrapper"]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "linea-singola",
      children: "Linea singola"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: _Esempi
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "elemento-con-stato-attivo",
      children: "Elemento con stato attivo"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per determinare l’elemento attivo è sufficiente aggiungere il modificatore ", jsxRuntimeExports.jsx(_components.code, {
        children: "active"
      }), " al relativo componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "LinkListItem"
      })]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: _StatoAttivo
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "elemento-con-stato-disabilitato",
      children: "Elemento con stato disabilitato"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per determinare l’elemento attivo è sufficiente aggiungere il modificatore ", jsxRuntimeExports.jsx(_components.code, {
        children: "disabled"
      }), " al relativo componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "LinkListItem"
      })]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: _StatoDisabilitato
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "intestazione-e-divisore",
      children: "Intestazione e divisore"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Le liste di link possono avere un’intestazione (con o senza link) e/o divisori per separare gruppi di link.\r\nL’header è costituito da un componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "LinkListItem"
      }), " con il modificatore ", jsxRuntimeExports.jsx(_components.code, {
        children: "header"
      }), ".\r\nIl separatore è costituito dal componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "LinkListItem"
      }), " con il modificatore ", jsxRuntimeExports.jsx(_components.code, {
        children: "divider"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "header-senza-link",
      children: "Header senza link"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: HeaderEDividerNoLink
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "header-con-link",
      children: "Header con link"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: HeaderEDividerConLink
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "dimensioni",
      children: "Dimensioni"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per ogni componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "LinkListItem"
      }), " è possibile definire una variante di dimensione maggiore utilizzando il modificatore ", jsxRuntimeExports.jsx(_components.code, {
        children: "large"
      }), " e ", jsxRuntimeExports.jsx(_components.code, {
        children: "bold"
      }), " per dare un aspetto maggiorato all'elemento."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Sizing
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "multiline-con-icona",
      children: "Multiline con icona"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["È necessario usare il modificatore ", jsxRuntimeExports.jsx(_components.code, {
        children: "multiline"
      }), " sul componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "LinkList"
      }), " in questo caso per configurare correttamente gli spazi del contenitore.\r\nOgni componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "LinkListItem"
      }), " può avere un icona (a destra o sinistra del testo) ed un abstract.\r\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "Icone"
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per aggiungere un icona bisogna aggiungere al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "LinkListItem"
      }), " la classi:"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: "icon-right"
        }), " : se si vuole posizionare l’icona a destra del testo"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: "icon-left"
        }), " : se si vuole posizionare l’icona a sinistra del testo"]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["All’interno del componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "LinkListItem"
      }), " subito dopo lo ", jsxRuntimeExports.jsx(_components.code, {
        children: "<span/>"
      }), " contenente il testo, puoi inserire il componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Icon"
      }), " (per maggiori informazioni consulta la sezione icone)."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EsempioMultiline
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "avatar",
      children: "Avatar"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per aggiungere un avatar a sinistra del testo bisogna aggiungere al ", jsxRuntimeExports.jsx(_components.code, {
        children: "LinkListItem"
      }), " la classe: ", jsxRuntimeExports.jsx(_components.code, {
        children: "avatar"
      }), "."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["All’interno del ", jsxRuntimeExports.jsx(_components.code, {
        children: "LinkListItem"
      }), " subito prima dello ", jsxRuntimeExports.jsx(_components.code, {
        children: "<span>"
      }), " contenente il testo, andremo ad inserire il tag ", jsxRuntimeExports.jsx(_components.code, {
        children: "<img>"
      }), " con classe ", jsxRuntimeExports.jsx(_components.code, {
        children: "avatar"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ConAvatar
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "lista-con-controlli",
      children: "Lista con controlli"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["I ", jsxRuntimeExports.jsx(_components.code, {
        children: "LinkList"
      }), " con controlli sono caratterizzati da icone a destra e sinistra del testo\r\nQuella di destra descrittiva e quella di sinistra un eventuale azione aggiuntiva da gestire in JavaScript."]
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "azione-primaria",
      children: "Azione primaria"
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "icona-sinistra",
      children: "Icona sinistra"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per aggiungere un icona a sinistra del testo bisogna aggiungere al ", jsxRuntimeExports.jsx(_components.code, {
        children: "<LinkListItem>"
      }), " la classe: ", jsxRuntimeExports.jsx(_components.code, {
        children: "icon-left"
      }), "."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["All’interno del ", jsxRuntimeExports.jsx(_components.code, {
        children: "<LinkListItem>"
      }), " subito prima dello ", jsxRuntimeExports.jsx(_components.code, {
        children: "<span>"
      }), " contenente il testo, andremo ad inserire il tag ", jsxRuntimeExports.jsx(_components.code, {
        children: "<i>"
      }), " con classi ", jsxRuntimeExports.jsx(_components.code, {
        children: "left"
      }), " (per definirne la posizione) e classe ", jsxRuntimeExports.jsx(_components.code, {
        children: "it-(classe icona)"
      }), " per determinare quale icona inserire."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ControlliComponent
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "icona-destra",
      children: "Icona destra"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per aggiungere un'icona a destra del testo bisogna aggiungere al ", jsxRuntimeExports.jsx(_components.code, {
        children: "LinkListItem"
      }), " la classe: ", jsxRuntimeExports.jsx(_components.code, {
        children: "icon-right"
      }), "."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["All’interno del ", jsxRuntimeExports.jsx(_components.code, {
        children: "LinkListItem"
      }), " subito prima dello ", jsxRuntimeExports.jsx(_components.code, {
        children: "<span>"
      }), " contenente il testo, andremo ad inserire il tag ", jsxRuntimeExports.jsx(_components.code, {
        children: "<i>"
      }), " con classi ", jsxRuntimeExports.jsx(_components.code, {
        children: "right"
      }), " (per definirne la posizione) e classe ", jsxRuntimeExports.jsx(_components.code, {
        children: "it-(classe icona)"
      }), " per determinare quale icona inserire."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ControlliSecondariComponent
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "icona-sinistra-1",
      children: "Icona sinistra"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per aggiungere un'icona a sinistra del testo bisogna aggiungere al ", jsxRuntimeExports.jsx(_components.code, {
        children: "LinkListItem"
      }), " la classe: ", jsxRuntimeExports.jsx(_components.code, {
        children: "icon-left"
      }), "."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["All’interno del ", jsxRuntimeExports.jsx(_components.code, {
        children: "LinkListItem"
      }), " subito prima dello ", jsxRuntimeExports.jsx(_components.code, {
        children: "<span>"
      }), " contenente il testo, andremo ad inserire il tag ", jsxRuntimeExports.jsx(_components.code, {
        children: "<i>"
      }), " con classi ", jsxRuntimeExports.jsx(_components.code, {
        children: "left"
      }), " (per definirne la posizione) e classe ", jsxRuntimeExports.jsx(_components.code, {
        children: "it-(classe icona)"
      }), " per determinare quale icona inserire."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: PrimaryESecondaryAction
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "lista-con-toggle",
      children: "Lista con toggle"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Un ", jsxRuntimeExports.jsx(_components.code, {
        children: "LinkList"
      }), " può contenere anche elementi form, di seguito un esempio contenente uno switch generato da un ", jsxRuntimeExports.jsx(_components.code, {
        children: "<Toggle>"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ConSwitch
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "lista-con-checkbox",
      children: "Lista con checkbox"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ConCheckbox
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "liste-annidate",
      children: "Liste annidate"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["I ", jsxRuntimeExports.jsx(_components.code, {
        children: "LinkList"
      }), " possono contenere link con sottosezione espanse di default o collassabili."]
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "espansa",
      children: "Espansa"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Di seguito un esempio di navigazione annidiata espansa di default."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: NavigationComponentFixed
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "collassabile",
      children: "Collassabile"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Di seguito un esempio di navigazione annidiata collassabile.\r\nPer questo tipo di link list è stato utilizzato, oltre alle classi custom, il componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "<Collapse>"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: CollapseExample
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "argomenti-componente",
      children: "Argomenti componente"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "list",
      children: "List"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: List
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "listitem",
      children: "ListItem"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: ListItem
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "link-list",
      children: "Link List"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: LinkList
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "link-listitem",
      children: "Link ListItem"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: LinkListItem
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
