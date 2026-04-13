import { j as jsxRuntimeExports } from "./jsx-runtime-W6GASMFp.js";
import { useMDXComponents } from "./index-ikbbSR_c.js";
import { M as Meta, C as Canvas } from "./blocks-Dz1Dle3S.js";
import { C as CheckboxStories, a as CheckboxBase, b as CheckboxInline, c as CheckboxDisabilitato, d as CheckboxGruppi, e as CheckboxMixedButton } from "./Checkbox.stories-Cai2rvba.js";
import "./iframe-BCTfBavy.js";
import "./preload-helper-BbOs9S9B.js";
import "./index-CvNm2WlK.js";
import "./index-IoIUxGgY.js";
import "./Col-BiPkhV1k.js";
import "./utils-C9pDOpcZ.js";
import "./index-FT2ekEOf.js";
import "./Form-B1vK5Wkt.js";
import "./FormGroup-BWKY-1o6.js";
import "./FormText-Bw3kMXon.js";
import "./Label-DBD_H2CU.js";
import "./Input-B0vZLe6d.js";
import "./index-mfTKDENv.js";
import "./Icon-Ds5hBZDo.js";
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
