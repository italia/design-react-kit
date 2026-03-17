import { j as jsxRuntimeExports } from "./jsx-runtime-CWPbvgq7.js";
import { useMDXComponents } from "./index-CUfwWRpR.js";
import { M as Meta, C as Canvas } from "./blocks-zMagDhsF.js";
import { F as FooterStories, a as FooterCompleto, b as FooterCompatto } from "./Footer.stories-B4-eiJQ2.js";
import "./iframe-DX9ezpjg.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-Bny4XHW3.js";
import "./Container-BayWV13h.js";
import "./utils-CuFJfndW.js";
import "./index-BqHsiMZl.js";
import "./Col-DQOy5G5x.js";
import "./Form-Bny13QCd.js";
import "./Label-CYeCcctW.js";
import "./Button-Cn1YpiFZ.js";
import "./Button-D9uph8Gj.js";
import "./Icon-BX4s2E3L.js";
import "./Input-dmLkN2ns.js";
import "./index-fpIdYNSg.js";
import "./utils-CwYUlCuU.js";
import "./LinkListItem-CEwGW59a.js";
import "./track-focus-DbJ2CO43.js";
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    p: "p",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: FooterStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "footer",
      children: "Footer"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Il componente definisce un'area a piè di pagina per visualizzare contenuti secondari, una mappa di navigazione, informazioni sul sito e sulla PA titolare e i riferimenti obbligatori richiesti dalle norme"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "completo",
      children: "Completo"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: FooterCompleto
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "compatto",
      children: "Compatto"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: FooterCompatto
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
