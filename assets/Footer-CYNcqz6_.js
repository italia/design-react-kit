import { j as jsxRuntimeExports } from "./jsx-runtime-BspMipD3.js";
import { useMDXComponents } from "./index-c4rbJj9s.js";
import { M as Meta, C as Canvas } from "./blocks-C9ottTgS.js";
import { F as FooterStories, a as FooterCompleto, b as FooterCompatto } from "./Footer.stories-DeiX4mJQ.js";
import "./iframe-WcRkBu1E.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-DtzevSMN.js";
import "./Container-C1UL6kzl.js";
import "./utils-H_KkLj11.js";
import "./index-_NcwzH_h.js";
import "./Col-BqJJlB9Y.js";
import "./Form-CM6HBYMA.js";
import "./Label-DwV8_VZi.js";
import "./Button-3_GjJ_nh.js";
import "./Button-CK4oupet.js";
import "./Icon-kqgzPNr6.js";
import "./Input-CjGp0E1P.js";
import "./index-DEHthorI.js";
import "./utils-CwYUlCuU.js";
import "./LinkListItem-DQM_rQjb.js";
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
