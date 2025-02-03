import { j as jsxRuntimeExports } from "./jsx-runtime-BKjOVojP.js";
import { useMDXComponents } from "./index-BDy3TOcs.js";
import { ae as Meta, af as Canvas } from "./index-TPQrYqDM.js";
import { F as FooterStories, a as FooterCompleto, b as FooterCompatto } from "./Footer.stories-DCj-vKLN.js";
import "./index-BehpJNG5.js";
import "./_commonjsHelpers-DWwsNxpa.js";
import "./iframe-DTIT4K-Y.js";
import "../sb-preview/runtime.js";
import "./index-D7280_ap.js";
import "./index-DmVNLg0t.js";
import "./index-DJdTjTnu.js";
import "./index-dukjSSyv.js";
import "./index-BdOSk9or.js";
import "./Container-WfghrAt_.js";
import "./utils-CruPskUV.js";
import "./index-D3ELxcOV.js";
import "./Col-DlU8lCnt.js";
import "./Form-IWuVEK-s.js";
import "./Label-BiPf8UIS.js";
import "./Button-BVZxHsm7.js";
import "./Button-Bz_c481c.js";
import "./Icon-8QGY3vQl.js";
import "./Input-Bdp6U6Ax.js";
import "./index-DH28g3wf.js";
import "./utils-CwYUlCuU.js";
import "./LinkListItem-E5PaFpui.js";
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
