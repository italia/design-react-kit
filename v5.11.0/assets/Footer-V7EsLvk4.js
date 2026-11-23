import { j as jsxRuntimeExports } from "./jsx-runtime-C3jYCFYn.js";
import { useMDXComponents } from "./react-Dp3Ue3rJ.js";
import { M as Meta, C as Canvas } from "./blocks-DcvFQ991.js";
import { F as FooterStories, a as FooterCompleto, b as FooterCompatto } from "./Footer.stories-COty6HgS.js";
import "./iframe-BFi4fVCv.js";
import "./preload-helper-BbOs9S9B.js";
import "./index-DyLrPIr7.js";
import "./index-D5O9zO1o.js";
import "./Container-b9ORjQIB.js";
import "./utils-MyL9kXd1.js";
import "./index-XoHdhAmz.js";
import "./Col-Dox3aL0Q.js";
import "./Form-C5OGa4sg.js";
import "./Label-BGjrwwsm.js";
import "./Button-CS_eq4Vx.js";
import "./Button-O6zFse-8.js";
import "./Icon-BWTpzkXQ.js";
import "./Input-CnyK3hrr.js";
import "./index-D-uh4zs9.js";
import "./utils-CnZuC-7B.js";
import "./LinkListItem-C_eRjKi7.js";
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
