import { j as jsxRuntimeExports, M as Meta, d as Canvas } from "./index-dIfejrFL.js";
import { useMDXComponents } from "./index-BqkeGXjM.js";
import { C as CheckboxStories, a as CheckboxBase, b as CheckboxInline, c as CheckboxDisabilitato, d as CheckboxGruppi, e as CheckboxMixedButton } from "./Checkbox.stories-8VCxSbzH.js";
import "./iframe-MlAXxqxI.js";
import "../sb-preview/runtime.js";
import "./index-C-_iGYWo.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./index-CClgydmT.js";
import "./index-ClxGM1EF.js";
import "./index-DLlB04eo.js";
import "./inheritsLoose-DBHupcN5.js";
import "./index-CX88d7aO.js";
import "./index-BdOSk9or.js";
import "./Input-3mdvAx-k.js";
import "./index-C2nrqh0v.js";
import "./index-xoeSAV6i.js";
import "./Icon-DRwA3K3x.js";
import "./utils-DNvasP3d.js";
import "./Form-BekgtyA_.js";
import "./index-C6XlOQIa.js";
import "./utils-BFoSoHid.js";
import "./Col-CM3Y6KlU.js";
import "./FormGroup-Dm03kL2Q.js";
import "./FormText-Bpc0R-vF.js";
import "./Label-Dgx7kIS2.js";
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
