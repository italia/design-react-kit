import { j as jsxRuntimeExports } from "./jsx-runtime-BRc-Ic4i.js";
import { useMDXComponents } from "./index-BqkeGXjM.js";
import { M as Meta, d as Canvas, A as ArgTypes } from "./index-xkeXP2rK.js";
import { L as ListStories, a as ListaSemplice, b as ListaAvatar, c as ListaIcona, d as ListaImmagine, e as ListaFreccia, f as ListaAzioniMultiple, g as ListaMetadata, h as ListaTestoAzioniMultipleMetadata, i as List, j as ListItem } from "./List.stories-CZhSNc8Z.js";
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
import "./index-xoeSAV6i.js";
import "./Icon-DYKLX3fq.js";
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    p: "p",
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
