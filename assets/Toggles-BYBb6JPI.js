import { j as jsxRuntimeExports } from "./jsx-runtime-BK4VhY1o.js";
import { useMDXComponents } from "./index-D9eV9cM1.js";
import { M as Meta, d as Canvas, A as ArgTypes } from "./index-CNKyf03E.js";
import { T as TogglesStories, a as Toggles, b as TogglesDisabilitate, G as GruppiDiToggles } from "./Toggles.stories-C55ylPGx.js";
import { T as Toggle } from "./Toggle-DWAfohg0.js";
import "./index-CQCy530F.js";
import "./_commonjsHelpers-LQfde5yM.js";
import "./iframe-BrKLlVSK.js";
import "../sb-preview/runtime.js";
import "./index-DTvnAYOg.js";
import "./index-Hv2vTVdx.js";
import "./index-Bm14aSjb.js";
import "./inheritsLoose-HEqISCW8.js";
import "./index-MBEdkwGi.js";
import "./index-BdOSk9or.js";
import "./Col-DTtAS2uD.js";
import "./index-Cas18JYw.js";
import "./index-CpyNLP69.js";
import "./utils-l7qJ8bIE.js";
import "./Form-DhHNlI4v.js";
import "./FormGroup-CLeJ8HCL.js";
import "./FormText-Cq6ChLH_.js";
import "./Label-D5MqlDDw.js";
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    p: "p",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: TogglesStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "toggles",
      children: "Toggles"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "campi-di-tipo-interruttore",
      children: "Campi di tipo “interruttore”"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "toggles-1",
      children: "Toggles"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per ottenere un interruttore con levetta basterà usare il componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Toggle"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Toggles
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "disabilitato",
      children: "Disabilitato"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Affinchè l’interruttore risulti disabilitato occorrerà aggiungere la ", jsxRuntimeExports.jsx(_components.em, {
        children: "prop"
      }), " ", jsxRuntimeExports.jsx(_components.code, {
        children: "disabled"
      }), " al checkbox."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: TogglesDisabilitate
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "gruppi",
      children: "Gruppi"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per poter raggruppare gli elementi toggle occorrerà aggiungere al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "FormGroup"
      }), " la classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".form-check-group"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: GruppiDiToggles
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "argomenti-componente",
      children: "Argomenti componente"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: Toggle
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
