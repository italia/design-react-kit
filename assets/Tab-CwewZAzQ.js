import { j as jsxRuntimeExports } from "./jsx-runtime-BK4VhY1o.js";
import { useMDXComponents } from "./index-D9eV9cM1.js";
import { M as Meta, d as Canvas } from "./index-kBCZqCW6.js";
import { T as TabStories, E as Esempi, a as Testo, I as Icona, b as TestoIcona, B as Bottone, V as Verticale } from "./Tab.stories-aQvZPr-u.js";
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
import "./Nav-58kYoJuE.js";
import "./index-Cas18JYw.js";
import "./index-CpyNLP69.js";
import "./utils-l7qJ8bIE.js";
import "./NavLink-f2w7L1cX.js";
import "./Container-ChumJ9z3.js";
import "./Col-DTtAS2uD.js";
import "./Icon-CYxksTIN.js";
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    p: "p",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: TabStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "tab",
      children: "Tab"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "esempi",
      children: "Esempi"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["L'interfaccia a tab (o schede) di Bootstrap si basa sull'utilizzo del layout di navigazione ", jsxRuntimeExports.jsx(_components.code, {
        children: "Nav"
      }), ", con l'aggiunta della proprietà ", jsxRuntimeExports.jsx(_components.code, {
        children: "tabs"
      }), ". Per ottenere una versione con sfondo scuro e testo chiaro bisognerà aggiungere un'ulteriore classe: ", jsxRuntimeExports.jsx(_components.code, {
        children: ".nav-dark"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Esempi
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "con-testo",
      children: "Con Testo"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Gli esempi sopra riportati non hanno molto senso senza un contenuto che cambi al di sotto di essi; per rendere tali interfacce navigabili è necessario collegare Tab e Pannelli collegando il tag ", jsxRuntimeExports.jsx(_components.code, {
        children: "<a>"
      }), " dei primi all’attributo id dei secondi, come mostrato di seguito:"]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Testo
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "icona",
      children: "Icona"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Oppure al posto della label usare una icona."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Icona
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "testo-e-icona",
      children: "Testo e icona"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Oppure con label e icona insieme."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: TestoIcona
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "bottone",
      children: "Bottone"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["I tab possono ereditare dalla navigazione l'utilizzo della proprietà ", jsxRuntimeExports.jsx(_components.code, {
        children: "pills"
      }), " per generare tab a bottoni."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Bottone
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "allineamento-verticale",
      children: "Allineamento verticale"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Verticale
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
