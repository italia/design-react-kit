import { j as jsxRuntimeExports, M as Meta, d as Canvas, A as ArgTypes } from "./index-GgiJkObS.js";
import { useMDXComponents } from "./index-BqkeGXjM.js";
import { D as DimmerStories, E as Esempi, C as ColorePrimario, a as DimmerConAzioni, b as DimmerConAzioniColorePrimario, c as Dimmer } from "./Dimmer.stories-DsV9xHbs.js";
import "./iframe-C1JHnSCu.js";
import "../sb-preview/runtime.js";
import "./index-C-_iGYWo.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./index-CClgydmT.js";
import "./index-ClxGM1EF.js";
import "./index-DLlB04eo.js";
import "./inheritsLoose-DBHupcN5.js";
import "./index-CX88d7aO.js";
import "./index-BdOSk9or.js";
import "./index-xoeSAV6i.js";
import "./Icon-uenOWmYY.js";
import "./Card-BbLD9VPT.js";
import "./index-C6XlOQIa.js";
import "./utils-BFoSoHid.js";
import "./CardText-BXch16fi.js";
import "./CardTitle-M54T_6p1.js";
import "./Fade-DysH9QCn.js";
import "./Transition-QUIZHUz2.js";
import "./Button-vuvwJGEz.js";
import "./Button-MsrGxmE9.js";
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
      of: DimmerStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "dimmer",
      children: "Dimmer"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "un-componente-per-focalizzare-lattenzione-su-un-contenuto",
      children: "Un componente per focalizzare l’attenzione su un contenuto"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Un Dimmer occupa tutta l’altezza e la larghezza dell’elemento all’interno del quale è contenuto."
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "esempio",
      children: "Esempio"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Il componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Dimmer"
      }), " può contenere del testo, che può essere preceduto da un'icona, come da esempio:"]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Esempi
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "colore-primario",
      children: "Colore primario"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Impostando l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: 'color="primary"'
      }), " si ottiene una versione con sfondo di colore primario."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ColorePrimario
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "dimmer-con-azioni",
      children: "Dimmer con Azioni"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Un Dimmer può contenere tasti collegati ad azioni ed un titolo descrittivo."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: DimmerConAzioni
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "colore-primario-1",
      children: "Colore primario"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Impostando l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: 'color="primary"'
      }), " si ottiene una versione con sfondo di colore primario."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: DimmerConAzioniColorePrimario
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "argomenti-componente",
      children: "Argomenti componente"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "dimmer-1",
      children: "Dimmer"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: Dimmer
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
