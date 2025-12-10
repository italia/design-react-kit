import { j as jsxRuntimeExports } from "./jsx-runtime-N7AT_UjA.js";
import { useMDXComponents } from "./index-C1bMAJWQ.js";
import { M as Meta, C as Canvas } from "./blocks-D0jj8ryq.js";
import { F as FooterStories, a as FooterCompleto, b as FooterCompatto } from "./Footer.stories-DiP8rJP7.js";
import "./iframe-BhIAR_-T.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-P2kQKrIy.js";
import "./Container-vI2-po0G.js";
import "./utils-CdC3xm3i.js";
import "./index-DlmjVlZ8.js";
import "./Col-Djg71hTG.js";
import "./Form-C4y2o2N4.js";
import "./Label-5Tpg5dqS.js";
import "./Button-BopGG2B1.js";
import "./Button-sifl4a-D.js";
import "./Icon-CHxeXU0Z.js";
import "./Input-DOP-qbLg.js";
import "./index-CTC36P3x.js";
import "./utils-CwYUlCuU.js";
import "./LinkListItem-DX5BIL8p.js";
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
