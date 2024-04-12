import{j as e}from"./jsx-runtime-DezihaCc.js";import{useMDXComponents as l}from"./index-BtoTqJlz.js";import{M as r,d as t,A as a}from"./index-DQ1boyZV.js";import{S as s,a as c,b as p,c as u}from"./Select.stories-DN6kqsbo.js";import{S as d}from"./Select-Dzs6Q_Jv.js";import"./index-BFWcBMrj.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-d7HZv50p.js";import"../sb-preview/runtime.js";import"./index-qAjVnZy2.js";import"./index-DKz4l_X4.js";import"./index-B_J8iUie.js";import"./inheritsLoose-B7h9gheN.js";import"./index-DLle_QMf.js";import"./index-DrFu-skq.js";function i(o){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:s}),`
`,e.jsx(n.h1,{id:"select",children:"Select"}),`
`,e.jsx(n.h3,{id:"il-classico-menu-a-tendina-in-nuove-varianti",children:"Il classico “menu a tendina”, in nuove varianti."}),`
`,e.jsx(n.h2,{id:"select-classica",children:"Select classica"}),`
`,e.jsxs(n.p,{children:["La ",e.jsx(n.code,{children:"Select"})," accetta come ",e.jsx(n.em,{children:"children"})," le opzioni selezionabili e ha una ",e.jsx(n.em,{children:"prop"})," ",e.jsx(n.code,{children:"label"}),`con cui si definisce l'etichetta del\r
campo.`]}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(n.h4,{id:"codice",children:"Codice"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [, setValue] = useState<string>();\r
\r
const handleChange = (selectedOption: string) => setValue(selectedOption);\r
\r
return (\r
  <Select id='example-reactstrap' label='Etichetta di esempio' onChange={handleChange}>\r
    <option value=''>Scegli un'opzione</option>\r
    <option value='Value 1'>Lorem ipsum dolor sit amet</option>\r
    <option value='Value 2'>Duis vestibulum eleifend libero</option>\r
    <option value='Value 3'>Phasellus pretium orci sed odio tempus</option>\r
    <option value='Value 4'>Vestibulum bibendum ex vel augue porttitor sodales</option>\r
    <option value='Value 5'>Praesent quis elementum turpis</option>\r
  </Select>\r
);
`})}),`
`,e.jsx(n.h2,{id:"select-disabilitata",children:"Select disabilitata"}),`
`,e.jsxs(n.p,{children:["Per disabilitare una select, aggiungere la ",e.jsx(n.em,{children:"prop"})," ",e.jsx(n.code,{children:"disabled"})," al componente ",e.jsx(n.code,{children:"Select"}),"."]}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(n.h4,{id:"codice-1",children:"Codice"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [, setValue] = useState<string>();\r
\r
const handleChange = (selectedOption: string) => setValue(selectedOption);\r
\r
return (\r
  <Select id='example-reactstrap' label='Etichetta di esempio' onChange={handleChange} disabled>\r
    <option value=''>Scegli un'opzione</option>\r
    <option value='Value 1'>Lorem ipsum dolor sit amet</option>\r
    <option value='Value 2'>Duis vestibulum eleifend libero</option>\r
    <option value='Value 3'>Phasellus pretium orci sed odio tempus</option>\r
    <option value='Value 4'>Vestibulum bibendum ex vel augue porttitor sodales</option>\r
    <option value='Value 5'>Praesent quis elementum turpis</option>\r
  </Select>\r
);
`})}),`
`,e.jsx(n.h2,{id:"select-con-gruppi",children:"Select con gruppi"}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(n.h4,{id:"codice-2",children:"Codice"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [, setValue] = useState<string>();\r
\r
const handleChange = (selectedOption: string) => setValue(selectedOption);\r
\r
return (\r
  <Select id='example-reactstrap' label='Etichetta di esempio' onChange={handleChange}>\r
    <option value=''>Scegli un'opzione</option>\r
    <optgroup label='Gruppo 1'>\r
      <option value='Value 1'>Lorem ipsum dolor sit amet</option>\r
      <option value='Value 2'>Duis vestibulum eleifend libero</option>\r
      <option value='Value 3'>Phasellus pretium orci sed odio tempus</option>\r
    </optgroup>\r
    <optgroup label='Gruppo 2'>\r
      <option value='Value 4'>Vestibulum bibendum ex vel augue porttitor sodales</option>\r
      <option value='Value 5'>Praesent quis elementum turpis</option>\r
    </optgroup>\r
  </Select>\r
);
`})}),`
`,e.jsx(n.h2,{id:"argomenti-componente",children:"Argomenti componente"}),`
`,e.jsx(a,{of:d})]})}function z(o={}){const{wrapper:n}={...l(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(i,{...o})}):i(o)}export{z as default};
