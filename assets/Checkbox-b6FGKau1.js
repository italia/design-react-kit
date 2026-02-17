import { j as jsxRuntimeExports } from "./jsx-runtime-COvKL7u4.js";
import { useMDXComponents } from "./index-DMZ0ur-z.js";
import { M as Meta, C as Canvas } from "./blocks-C66hpFDv.js";
import { C as CheckboxStories, a as CheckboxBase, b as CheckboxInline, c as CheckboxDisabilitato, d as CheckboxGruppi, e as CheckboxMixedButton } from "./Checkbox.stories-BfWle-bJ.js";
import "./iframe-BMr-kR9u.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-CJ9b0Pjr.js";
import "./Col-HPJviJYk.js";
import "./utils-R1pK7pq0.js";
import "./index-CuPZ171k.js";
import "./Form-B8XhySge.js";
import "./FormGroup-CGDGv27S.js";
import "./FormText-3ekJDN4h.js";
import "./Label-Bxwu4ecG.js";
import "./Input-BekHOtbc.js";
import "./index-Bgh91DG-.js";
import "./Icon-CB2E_ttD.js";
import "./utils-CwYUlCuU.js";
import "./track-focus-DbJ2CO43.js";
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
      of: CheckboxStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "checkbox",
      children: "Checkbox"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "elementi-e-stili-per-la-creazione-di-checkbox-accessibili",
      children: "Elementi e stili per la creazione di checkbox accessibili."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: CheckboxBase
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "inline",
      children: "Inline"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per allineare orizzontalmente le checkbox basterà aggiungere la ", jsxRuntimeExports.jsx(_components.em, {
        children: "prop"
      }), " ", jsxRuntimeExports.jsx(_components.code, {
        children: "inline"
      }), " al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "FormGroup"
      }), " padre."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: CheckboxInline
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "disabilitato",
      children: "Disabilitato"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Affinchè i campi checkbox risultino disabilitati occorrerà aggiungere la ", jsxRuntimeExports.jsx(_components.em, {
        children: "prop"
      }), " ", jsxRuntimeExports.jsx(_components.code, {
        children: "disabled"
      }), " al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Input"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: CheckboxDisabilitato
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "gruppi",
      children: "Gruppi"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per poter raggruppare gli elementi checkbox occorrerà aggiungere al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "FormGroup"
      }), " la classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".form-check-group"
      }), ". L’elemento grafico di spunta verrà allineato alla destra del contenuto testuale."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: CheckboxGruppi
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "mixed-button",
      children: "Mixed Button"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per ottenere uno stato di tipo Mixed basterà aggiungere la classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".semi-checked"
      }), " al componente Input."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: CheckboxMixedButton
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
