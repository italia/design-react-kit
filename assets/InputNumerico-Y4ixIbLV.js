import { j as jsxRuntimeExports } from "./jsx-runtime-N7AT_UjA.js";
import { useMDXComponents } from "./index-C1bMAJWQ.js";
import { M as Meta, C as Canvas, A as ArgTypes } from "./blocks-D0jj8ryq.js";
import { I as InputNumericoStories, a as InputNumericoDimensionamento, b as InputNumericoSteps, c as InputNumericoValuta, d as InputNumericoPercentuale, e as InputNumericoDisabilitato, f as InputNumericoRidimensionamento } from "./InputNumerico.stories-Cq1XHpcO.js";
import "./iframe-BhIAR_-T.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-P2kQKrIy.js";
import "./Input-DOP-qbLg.js";
import "./index-CTC36P3x.js";
import "./index-DlmjVlZ8.js";
import "./Icon-CHxeXU0Z.js";
import "./utils-CwYUlCuU.js";
import "./track-focus-DbJ2CO43.js";
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
      of: InputNumericoStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "input-numerico",
      children: "Input Numerico"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "campi-input-con-bottoni-per-incrementaredecrementare-valori-numerici",
      children: "Campi input con bottoni per incrementare/decrementare valori numerici"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "esempi",
      children: "Esempi"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "La larghezza del campo predefinita è quella del suo contenitore, per limitare la larghezza alle dimensioni del valore contenuto utilizzare il ridimensionamento adattivo."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: InputNumericoDimensionamento
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [value, setValue] = useState('100');\r\nconst [value50, setValue50] = useState('100');\r\nreturn (\r\n  <>\r\n    <div className='w-100'>\r\n      <Input\r\n        id='example-w100'\r\n        type='number'\r\n        label='Input Number inserito in una colonna a tutta larghezza'\r\n        incrementLabel='Aumenta il valore  di 1'\r\n        decrementLabel='Diminuisci il valore di 1'\r\n        value={value}\r\n        onChange={(ev) => {\r\n          setValue(ev.target.value);\r\n        }}\r\n      />\r\n    </div>\r\n    <div className='w-50 mt-5'>\r\n      <Input\r\n        id='example-w50'\r\n        type='number'\r\n        label='Input Number inserito in una colonna di larghezza 50%'\r\n        incrementLabel='Aumenta il valore  di 1'\r\n        decrementLabel='Diminuisci il valore di 1'\r\n        value={value50}\r\n        onChange={(ev) => {\r\n          setValue50(ev.target.value);\r\n        }}\r\n      />\r\n    </div>\r\n  </>\r\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "limiti-e-step",
      children: "Limiti e Step"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Aggiungendo le ", jsxRuntimeExports.jsx(_components.code, {
        children: "props"
      }), " ", jsxRuntimeExports.jsx(_components.code, {
        children: "min"
      }), ", ", jsxRuntimeExports.jsx(_components.code, {
        children: "max"
      }), " e ", jsxRuntimeExports.jsx(_components.code, {
        children: "step"
      }), " al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Input"
      }), " è possibile limitare il valore minimo e massimo del campo e decidere di quanto varierà a ogni click sui bottoni."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: InputNumericoSteps
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice-1",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [value, setValue] = useState('100');\r\nreturn (\r\n  <Input\r\n    id='example-steps'\r\n    type='number'\r\n    label='Min, Max & Step'\r\n    incrementLabel='Aumenta il valore  di 500'\r\n    decrementLabel='Diminuisci il valore di 500'\r\n    value={value}\r\n    min={-2000}\r\n    max={15000}\r\n    step={500}\r\n    onChange={(ev) => {\r\n      setValue(ev.target.value);\r\n    }}\r\n  />\r\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "currency",
      children: "Currency"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: InputNumericoValuta
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice-2",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [value, setValue] = useState('100');\r\n\r\nreturn (\r\n  <Input\r\n    id='example-currency'\r\n    addonText='€'\r\n    type='currency'\r\n    label='Currency'\r\n    incrementLabel='Aumenta il valore di 1 euro'\r\n    decrementLabel='Diminuisci il valore di 1 euro'\r\n    value={value}\r\n    step='any'\r\n    min={3.5}\r\n    max={100}\r\n    onChange={(ev) => {\r\n      setValue(ev.target.value);\r\n    }}\r\n  />\r\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "percentuale",
      children: "Percentuale"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Si consiglia di impostare gli attributi ", jsxRuntimeExports.jsx(_components.code, {
        children: "min=0"
      }), " e ", jsxRuntimeExports.jsx(_components.code, {
        children: 'max="100"'
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: InputNumericoPercentuale
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice-3",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [value, setValue] = useState('100');\r\n\r\nreturn (\r\n  <Input\r\n    id='example-percentage'\r\n    addonText='%'\r\n    type='percentage'\r\n    label='Percentage'\r\n    incrementLabel='Aumenta il valore in percentuale di 1'\r\n    decrementLabel='Diminuisci il valore in percentuale di 1'\r\n    value={value}\r\n    min={0}\r\n    max={100}\r\n    onChange={(ev) => {\r\n      setValue(ev.target.value);\r\n    }}\r\n  />\r\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "disabilitato",
      children: "Disabilitato"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per disabilitare un Input number, aggiungere la ", jsxRuntimeExports.jsx(_components.em, {
        children: "prop"
      }), " ", jsxRuntimeExports.jsx(_components.code, {
        children: "disabled "
      }), "al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Input"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: InputNumericoDisabilitato
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "ridimensionamento",
      children: "Ridimensionamento"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "È possibile far sì che il campo numerico si ridimensioni automaticamente a seconda del valore contenuto in esso."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: InputNumericoRidimensionamento
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice-4",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [value, setValue] = useState('100');\r\n\r\nreturn (\r\n  <Input\r\n    id='example-adaptive'\r\n    type='adaptive'\r\n    label='Ridimensionamento'\r\n    incrementLabel='Aumenta il valore  di 1'\r\n    decrementLabel='Diminuisci il valore di 1'\r\n    value={value}\r\n    placeholder={'0'}\r\n    min={0}\r\n    max={99999999999}\r\n    onChange={(ev) => {\r\n      setValue(ev.target.value);\r\n    }}\r\n  />\r\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "argomenti-componente",
      children: "Argomenti componente"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: InputNumericoStories
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
