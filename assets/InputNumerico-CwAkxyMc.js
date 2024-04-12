import{j as e}from"./jsx-runtime-DezihaCc.js";import{useMDXComponents as l}from"./index-BtoTqJlz.js";import{M as o,d as i,A as c}from"./index-DQ1boyZV.js";import{I as a,a as s,b as d,c as m,d as u,e as p,f as h}from"./InputNumerico.stories-CaerN26K.js";import"./index-BFWcBMrj.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-d7HZv50p.js";import"../sb-preview/runtime.js";import"./index-qAjVnZy2.js";import"./index-DKz4l_X4.js";import"./index-B_J8iUie.js";import"./inheritsLoose-B7h9gheN.js";import"./index-DLle_QMf.js";import"./index-DrFu-skq.js";import"./Input-CLSFLk54.js";import"./index-GAri5u7x.js";import"./Icon-Dn2FEDq_.js";import"./index-Bl6ORisp.js";import"./utils-Dujee42i.js";function t(r){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...l(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:a}),`
`,e.jsx(n.h1,{id:"input-numerico",children:"Input Numerico"}),`
`,e.jsx(n.h3,{id:"campi-input-con-bottoni-per-incrementaredecrementare-valori-numerici",children:"Campi input con bottoni per incrementare/decrementare valori numerici"}),`
`,e.jsx(n.h2,{id:"esempi",children:"Esempi"}),`
`,e.jsx(n.p,{children:"La larghezza del campo predefinita è quella del suo contenitore, per limitare la larghezza alle dimensioni del valore contenuto utilizzare il ridimensionamento adattivo."}),`
`,e.jsx(i,{of:s}),`
`,e.jsx(n.h4,{id:"codice",children:"Codice"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [value, setValue] = useState('100');\r
const [value50, setValue50] = useState('100');\r
return (\r
  <>\r
    <div className='w-100'>\r
      <Input\r
        id='example-w100'\r
        type='number'\r
        label='Input Number inserito in una colonna a tutta larghezza'\r
        incrementLabel='Aumenta il valore  di 1'\r
        decrementLabel='Diminuisci il valore di 1'\r
        value={value}\r
        onChange={(ev) => {\r
          setValue(ev.target.value);\r
        }}\r
      />\r
    </div>\r
    <div className='w-50 mt-5'>\r
      <Input\r
        id='example-w50'\r
        type='number'\r
        label='Input Number inserito in una colonna di larghezza 50%'\r
        incrementLabel='Aumenta il valore  di 1'\r
        decrementLabel='Diminuisci il valore di 1'\r
        value={value50}\r
        onChange={(ev) => {\r
          setValue50(ev.target.value);\r
        }}\r
      />\r
    </div>\r
  </>\r
);
`})}),`
`,e.jsx(n.h2,{id:"limiti-e-step",children:"Limiti e Step"}),`
`,e.jsxs(n.p,{children:["Aggiungendo le ",e.jsx(n.code,{children:"props"})," ",e.jsx(n.code,{children:"min"}),", ",e.jsx(n.code,{children:"max"})," e ",e.jsx(n.code,{children:"step"})," al componente ",e.jsx(n.code,{children:"Input"})," è possibile limitare il valore minimo e massimo del campo e decidere di quanto varierà a ogni click sui bottoni."]}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(n.h4,{id:"codice-1",children:"Codice"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [value, setValue] = useState('100');\r
return (\r
  <Input\r
    id='example-steps'\r
    type='number'\r
    label='Min, Max & Step'\r
    incrementLabel='Aumenta il valore  di 500'\r
    decrementLabel='Diminuisci il valore di 500'\r
    value={value}\r
    min={-2000}\r
    max={15000}\r
    step={500}\r
    onChange={(ev) => {\r
      setValue(ev.target.value);\r
    }}\r
  />\r
);
`})}),`
`,e.jsx(n.h2,{id:"currency",children:"Currency"}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h4,{id:"codice-2",children:"Codice"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [value, setValue] = useState('100');\r
\r
return (\r
  <Input\r
    id='example-currency'\r
    addonText='€'\r
    type='currency'\r
    label='Currency'\r
    incrementLabel='Aumenta il valore di 1 euro'\r
    decrementLabel='Diminuisci il valore di 1 euro'\r
    value={value}\r
    step='any'\r
    min={3.5}\r
    max={100}\r
    onChange={(ev) => {\r
      setValue(ev.target.value);\r
    }}\r
  />\r
);
`})}),`
`,e.jsx(n.h2,{id:"percentuale",children:"Percentuale"}),`
`,e.jsxs(n.p,{children:["Si consiglia di impostare gli attributi ",e.jsx(n.code,{children:"min=0"})," e ",e.jsx(n.code,{children:'max="100"'}),"."]}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(n.h4,{id:"codice-3",children:"Codice"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [value, setValue] = useState('100');\r
\r
return (\r
  <Input\r
    id='example-percentage'\r
    addonText='%'\r
    type='percentage'\r
    label='Percentage'\r
    incrementLabel='Aumenta il valore in percentuale di 1'\r
    decrementLabel='Diminuisci il valore in percentuale di 1'\r
    value={value}\r
    min={0}\r
    max={100}\r
    onChange={(ev) => {\r
      setValue(ev.target.value);\r
    }}\r
  />\r
);
`})}),`
`,e.jsx(n.h2,{id:"disabilitato",children:"Disabilitato"}),`
`,e.jsxs(n.p,{children:["Per disabilitare un Input number, aggiungere la ",e.jsx(n.em,{children:"prop"})," ",e.jsx(n.code,{children:"disabled "}),"al componente ",e.jsx(n.code,{children:"Input"}),"."]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h2,{id:"ridimensionamento",children:"Ridimensionamento"}),`
`,e.jsx(n.p,{children:"È possibile far sì che il campo numerico si ridimensioni automaticamente a seconda del valore contenuto in esso."}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h4,{id:"codice-4",children:"Codice"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [value, setValue] = useState('100');\r
\r
return (\r
  <Input\r
    id='example-adaptive'\r
    type='adaptive'\r
    label='Ridimensionamento'\r
    incrementLabel='Aumenta il valore  di 1'\r
    decrementLabel='Diminuisci il valore di 1'\r
    value={value}\r
    placeholder={'0'}\r
    min={0}\r
    max={99999999999}\r
    onChange={(ev) => {\r
      setValue(ev.target.value);\r
    }}\r
  />\r
);
`})}),`
`,e.jsx(n.h2,{id:"argomenti-componente",children:"Argomenti componente"}),`
`,e.jsx(c,{of:a})]})}function R(r={}){const{wrapper:n}={...l(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{R as default};
