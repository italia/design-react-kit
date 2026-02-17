import { j as jsxRuntimeExports } from "./jsx-runtime-COvKL7u4.js";
import { useMDXComponents } from "./index-DMZ0ur-z.js";
import { M as Meta, C as Canvas, A as ArgTypes } from "./blocks-C66hpFDv.js";
import { C as Card } from "./Card-C5g2j2Kt.js";
import "./track-focus-DbJ2CO43.js";
import { C as CardStories, S as SimpleCard, E as EditorialStandard } from "./Card.stories-DVIqwVWl.js";
import "./iframe-BMr-kR9u.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-CJ9b0Pjr.js";
import "./index-CuPZ171k.js";
import "./Col-HPJviJYk.js";
import "./utils-R1pK7pq0.js";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    p: "p",
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
      }), " sono contenitori flessibili ed estendibili. Rispetto alla precedente versione\nle nuove Card del Design Kit di React sono costituite dal solo componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Card"
      }), "\nin modo tale da lasciare l'utente libero nelle personalizzazioni all'interno del\ncomponente."]
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
      id: "card-editoriale-editorialstandard",
      children: "Card editoriale EditorialStandard"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Esempi con descrizione e data di pubblicazione della scheda, con categoria oppure con argomenti (tag) di appartenenza, con e senza immagine."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EditorialStandard
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "altre-varianti-di-card",
      children: "Altre varianti di Card"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per tutti gli altri esempi seguire la documentazione ufficiale di ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://italia.github.io/bootstrap-italia/docs/componenti/card/",
        rel: "nofollow",
        children: "Bootstrap Italia"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "argomenti-componente",
      children: "Argomenti componente"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "card-1",
      children: "Card"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: Card
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
