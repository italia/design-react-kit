import { j as jsxRuntimeExports } from "./jsx-runtime-OvI7NoMr.js";
import { useMDXComponents } from "./index-BKc5zArI.js";
import { M as Meta, C as Canvas, A as ArgTypes } from "./blocks-ipDcqZCV.js";
import "./track-focus-DbJ2CO43.js";
import { B as BackToTopStories, E as Esempio, S as Small, a as Shadow, D as Dark, b as DarkShadow } from "./BackToTop.stories-CotoI5Us.js";
import "./iframe-DGcxMoyJ.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-DtiUNGrX.js";
import "./Icon-DyCGQbBS.js";
import "./index-yYkzrc3Z.js";
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
