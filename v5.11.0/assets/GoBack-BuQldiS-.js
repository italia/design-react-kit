import { j as jsxRuntimeExports } from "./jsx-runtime-C3jYCFYn.js";
import { useMDXComponents } from "./react-Dp3Ue3rJ.js";
import { M as Meta, C as Canvas } from "./blocks-DcvFQ991.js";
import { G as GoBackStories, E as Esempi, P as Pulsanti, a as PulsantiSoloIcona } from "./GoBack.stories-Du7ih6h7.js";
import "./iframe-BFi4fVCv.js";
import "./preload-helper-BbOs9S9B.js";
import "./index-DyLrPIr7.js";
import "./index-D5O9zO1o.js";
import "./index-XoHdhAmz.js";
import "./Button-CS_eq4Vx.js";
import "./Button-O6zFse-8.js";
import "./utils-MyL9kXd1.js";
import "./Icon-BWTpzkXQ.js";
import "./track-focus-DbJ2CO43.js";
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
