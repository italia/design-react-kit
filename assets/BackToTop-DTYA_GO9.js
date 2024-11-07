import { j as jsxRuntimeExports } from "./jsx-runtime-BRc-Ic4i.js";
import { useMDXComponents } from "./index-BqkeGXjM.js";
import { M as Meta, d as Canvas, A as ArgTypes } from "./index-BELQvEUI.js";
import { B as BackToTopStories, E as Esempio, S as Small, a as Shadow, D as Dark, b as DarkShadow } from "./BackToTop.stories-t9yqGybA.js";
import "./index-C-_iGYWo.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-DtHJ-FZS.js";
import "../sb-preview/runtime.js";
import "./index-CClgydmT.js";
import "./index-ClxGM1EF.js";
import "./index-DLlB04eo.js";
import "./inheritsLoose-DBHupcN5.js";
import "./index-CX88d7aO.js";
import "./index-BdOSk9or.js";
import "./Icon-BNsLnf7r.js";
import "./index-xoeSAV6i.js";
import "./Button-vuvwJGEz.js";
import "./Button-MsrGxmE9.js";
import "./index-C6XlOQIa.js";
import "./utils-BFoSoHid.js";
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
      of: BackToTopStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "torna-su",
      children: "Torna su"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "esempio",
      children: "Esempio"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Per visualizzare il Back to top nella posizione corretta è necessario scrollare questa pagina. L'esempio del codice\r\nsottostante sarà visibile solo a scroll avvenuto."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Esempio
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "versione-ridotta",
      children: "Versione ridotta"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Aggiungendo la prop ", jsxRuntimeExports.jsx(_components.code, {
        children: "small"
      }), " al componente si ottiene un pulsante di dimensioni ridotte."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Small
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "versione-con-ombra",
      children: "Versione con ombra"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Aggiungendo la prop ", jsxRuntimeExports.jsx(_components.code, {
        children: "shadow"
      }), " al componente si aggiunge un'ombra al pulsante."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Shadow
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "versione-per-sfondo-scuro",
      children: "Versione per sfondo scuro"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Aggiungendo la prop ", jsxRuntimeExports.jsx(_components.code, {
        children: "dark"
      }), " al componente si ottiene un pulsante utilizzabile su sfondo scuro."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Dark
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "ombra-su-sfondo-scuro",
      children: "Ombra su sfondo scuro"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Aggiungendo le prop ", jsxRuntimeExports.jsx(_components.code, {
        children: "dark"
      }), " e ", jsxRuntimeExports.jsx(_components.code, {
        children: "shadow"
      }), " al componente si ottiente un pulsante con ombra utilizzabile su sfondo scuro."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: DarkShadow
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "argomenti-componente",
      children: "Argomenti componente"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: Esempio
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
