import { j as jsxRuntimeExports } from "./jsx-runtime-BK4VhY1o.js";
import { useMDXComponents } from "./index-D9eV9cM1.js";
import { M as Meta, d as Canvas } from "./index-B6OeFasa.js";
import { G as GoBackStories, E as Esempi, P as Pulsanti, a as PulsantiSoloIcona } from "./GoBack.stories-BU-m-7Xb.js";
import "./index-CQCy530F.js";
import "./_commonjsHelpers-LQfde5yM.js";
import "./iframe-ADcXWQ_9.js";
import "../sb-preview/runtime.js";
import "./index-DTvnAYOg.js";
import "./index-Hv2vTVdx.js";
import "./index-CTx2sqk_.js";
import "./inheritsLoose-HEqISCW8.js";
import "./index-MBEdkwGi.js";
import "./index-BdOSk9or.js";
import "./index-CpyNLP69.js";
import "./Button-CDo48zCf.js";
import "./Button-DfNj8dlY.js";
import "./index-Cas18JYw.js";
import "./utils-l7qJ8bIE.js";
import "./Icon-io8Ds3f9.js";
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
