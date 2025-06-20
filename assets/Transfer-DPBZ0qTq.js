import { j as jsxRuntimeExports } from "./jsx-runtime-CSOqN9Rs.js";
import { useMDXComponents } from "./index-ClSvUSci.js";
import { M as Meta, C as Canvas } from "./index-D3W_KmJT.js";
import { T as TransferStories, B as Base } from "./Transfer.stories-CkBHa1Ke.js";
import "./index-CoR6MlO7.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-DF2Pyat-.js";
import "./index-C2Bg70Bz.js";
import "./index-CnhJHytA.js";
import "./index-9xAnpW0o.js";
import "./index-BdOSk9or.js";
import "./Col-DbKMWTUR.js";
import "./utils-Cn8VSNph.js";
import "./index-xoeSAV6i.js";
import "./Icon-DiIdFz3Z.js";
import "./FormGroup-DDSqtlx4.js";
import "./Label-BDijq1tJ.js";
import "./Input-DoJtmhsT.js";
import "./index-C2nrqh0v.js";
import "./utils-CwYUlCuU.js";
import "./track-focus-DbJ2CO43.js";
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: TransferStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "transfer",
      children: "Transfer"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "un-componente-che-consente-la-creazione-di-liste-di-checkbox",
      children: "Un componente che consente la creazione di liste di checkbox."
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Il componente Transfer consente di trasferire gli elementi di una lista di checkbox ad un’altra lista di checkbox."
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Il componente Transfer contiene"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "Lista checkbox di sinistra"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "Pulsanti per il trasferimento dei contenuti da lista a lista"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "Lista checkbox di destra"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Le liste di checkbox, sono composte da:"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "Header: contiene un checkbox per la selezione / deselezione di tutti i campi sottostanti e la label che contiene il numero di elementi della lista"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "Lista checkbox"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["All'interno del componente Transfer è possibile utilizzare l'hook ", jsxRuntimeExports.jsx(_components.code, {
        children: "Transfer.useTransfer()"
      }), " per accedere agli elementi selezionati."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Base
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
