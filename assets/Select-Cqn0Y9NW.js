import { j as jsxRuntimeExports } from "./jsx-runtime-COvKL7u4.js";
import { useMDXComponents } from "./index-DMZ0ur-z.js";
import { M as Meta, C as Canvas, A as ArgTypes } from "./blocks-C66hpFDv.js";
import { S as Select } from "./Select-D2CXf02r.js";
import "./track-focus-DbJ2CO43.js";
import { S as SelectStories, a as SelectClassica, b as SelectDisabilitata, c as SelectConGruppi } from "./Select.stories-vqjsMTrG.js";
import "./iframe-BMr-kR9u.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-CJ9b0Pjr.js";
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    p: "p",
    pre: "pre",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: SelectStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "select",
      children: "Select"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "il-classico-menu-a-tendina-in-nuove-varianti",
      children: "Il classico “menu a tendina”, in nuove varianti."
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "select-classica",
      children: "Select classica"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["La ", jsxRuntimeExports.jsx(_components.code, {
        children: "Select"
      }), " accetta come ", jsxRuntimeExports.jsx(_components.em, {
        children: "children"
      }), " le opzioni selezionabili e ha una ", jsxRuntimeExports.jsx(_components.em, {
        children: "prop"
      }), " ", jsxRuntimeExports.jsx(_components.code, {
        children: "label"
      }), "con cui si definisce l'etichetta del\r\ncampo."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: SelectClassica
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [, setValue] = useState<string>();\r\n\r\nconst handleChange = (selectedOption: string) => setValue(selectedOption);\r\n\r\nreturn (\r\n  <Select id='example-reactstrap' label='Etichetta di esempio' onChange={handleChange}>\r\n    <option value=''>Scegli un'opzione</option>\r\n    <option value='Value 1'>Lorem ipsum dolor sit amet</option>\r\n    <option value='Value 2'>Duis vestibulum eleifend libero</option>\r\n    <option value='Value 3'>Phasellus pretium orci sed odio tempus</option>\r\n    <option value='Value 4'>Vestibulum bibendum ex vel augue porttitor sodales</option>\r\n    <option value='Value 5'>Praesent quis elementum turpis</option>\r\n  </Select>\r\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "select-disabilitata",
      children: "Select disabilitata"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per disabilitare una select, aggiungere la ", jsxRuntimeExports.jsx(_components.em, {
        children: "prop"
      }), " ", jsxRuntimeExports.jsx(_components.code, {
        children: "disabled"
      }), " al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Select"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: SelectDisabilitata
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice-1",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [, setValue] = useState<string>();\r\n\r\nconst handleChange = (selectedOption: string) => setValue(selectedOption);\r\n\r\nreturn (\r\n  <Select id='example-reactstrap' label='Etichetta di esempio' onChange={handleChange} disabled>\r\n    <option value=''>Scegli un'opzione</option>\r\n    <option value='Value 1'>Lorem ipsum dolor sit amet</option>\r\n    <option value='Value 2'>Duis vestibulum eleifend libero</option>\r\n    <option value='Value 3'>Phasellus pretium orci sed odio tempus</option>\r\n    <option value='Value 4'>Vestibulum bibendum ex vel augue porttitor sodales</option>\r\n    <option value='Value 5'>Praesent quis elementum turpis</option>\r\n  </Select>\r\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "select-con-gruppi",
      children: "Select con gruppi"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: SelectConGruppi
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice-2",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [, setValue] = useState<string>();\r\n\r\nconst handleChange = (selectedOption: string) => setValue(selectedOption);\r\n\r\nreturn (\r\n  <Select id='example-reactstrap' label='Etichetta di esempio' onChange={handleChange}>\r\n    <option value=''>Scegli un'opzione</option>\r\n    <optgroup label='Gruppo 1'>\r\n      <option value='Value 1'>Lorem ipsum dolor sit amet</option>\r\n      <option value='Value 2'>Duis vestibulum eleifend libero</option>\r\n      <option value='Value 3'>Phasellus pretium orci sed odio tempus</option>\r\n    </optgroup>\r\n    <optgroup label='Gruppo 2'>\r\n      <option value='Value 4'>Vestibulum bibendum ex vel augue porttitor sodales</option>\r\n      <option value='Value 5'>Praesent quis elementum turpis</option>\r\n    </optgroup>\r\n  </Select>\r\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "argomenti-componente",
      children: "Argomenti componente"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: Select
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
