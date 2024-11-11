import { j as jsxRuntimeExports } from "./jsx-runtime-BRc-Ic4i.js";
import { useMDXComponents } from "./index-BqkeGXjM.js";
import { M as Meta, d as Canvas } from "./index-xkeXP2rK.js";
import { G as GoBackStories, E as Esempi, P as Pulsanti, a as PulsantiSoloIcona } from "./GoBack.stories-DTOkjueJ.js";
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
import "./Button-vuvwJGEz.js";
import "./Button-MsrGxmE9.js";
import "./index-C6XlOQIa.js";
import "./utils-BFoSoHid.js";
import "./Icon-DYKLX3fq.js";
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
      of: GoBackStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "torna-indietro",
      children: "Torna indietro"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "esempio-link",
      children: "Esempio link"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Per visualizzare il Back to top nella posizione corretta è necessario scrollare questa pagina. L'esempio del codice\r\nsottostante sarà visibile solo a scroll avvenuto."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Esempi
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "pulsanti",
      children: "Pulsanti"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Aggiungendo la prop ", jsxRuntimeExports.jsx(_components.code, {
        children: "up"
      }), " si ottiene l'icona che punta in alto."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Pulsanti
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "pulsanti-con-sola-icona",
      children: "Pulsanti con sola icona"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Non specificando il testo, il pulsante rimane con sola icona."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: PulsantiSoloIcona
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
