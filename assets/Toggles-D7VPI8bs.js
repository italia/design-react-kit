import { j as jsxRuntimeExports } from "./jsx-runtime-Dd8filLf.js";
import { useMDXComponents } from "./index-DKZlwgtl.js";
import { M as Meta, C as Canvas, A as ArgTypes } from "./index-DBq2QLBj.js";
import { T as Toggle } from "./Toggle-qyh4nzdv.js";
import "./track-focus-DbJ2CO43.js";
import { T as TogglesStories, a as Toggles, b as TogglesDisabilitate, G as GruppiDiToggles } from "./Toggles.stories-DzYNp9go.js";
import "./index-N7T0HPyM.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-71tjp26B.js";
import "./index-DaSoJtbc.js";
import "./index-_6PbV05F.js";
import "./index-9xAnpW0o.js";
import "./index-BdOSk9or.js";
import "./utils-Cn8VSNph.js";
import "./index-xoeSAV6i.js";
import "./Label-BeB_moJD.js";
import "./Col-C4Vz86Og.js";
import "./Form-DJhLLesO.js";
import "./FormGroup-CBxBMrzE.js";
import "./FormText-BChjU0Yw.js";
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
