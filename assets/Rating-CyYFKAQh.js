import{j as n}from"./jsx-runtime-DezihaCc.js";import{useMDXComponents as c}from"./index-BtoTqJlz.js";import{M as d,d as r,e as u,C as i,A as p}from"./index-DQ1boyZV.js";import{R as h,a as t,b as m,c as x,d as g}from"./Rating.stories-C7unj8Ng.js";import{C as a,a as o}from"./CalloutText-C98nfp7D.js";import"./index-BFWcBMrj.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-d7HZv50p.js";import"../sb-preview/runtime.js";import"./index-qAjVnZy2.js";import"./index-DKz4l_X4.js";import"./index-B_J8iUie.js";import"./inheritsLoose-B7h9gheN.js";import"./index-DLle_QMf.js";import"./index-DrFu-skq.js";import"./index-Bl6ORisp.js";import"./FormGroup-B-MqxR9s.js";import"./index-D3ylJrlI.js";import"./utils-CUovxYU2.js";import"./Label-fWy_qovk.js";import"./Input-CLSFLk54.js";import"./index-GAri5u7x.js";import"./Icon-Dn2FEDq_.js";import"./utils-Dujee42i.js";function l(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...c(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{of:h}),`
`,n.jsx(e.h1,{id:"rating",children:"Rating"}),`
`,n.jsx(e.h2,{id:"per-esprimere-una-valutazione-su-un-contenuto",children:"Per esprimere una valutazione su un contenuto"}),`
`,n.jsx(e.h3,{id:"esempio",children:"Esempio"}),`
`,n.jsx(r,{of:t}),`
`,n.jsx(u,{of:t}),`
`,n.jsx(e.h3,{id:"con-label",children:"Con label"}),`
`,n.jsxs(e.p,{children:["Per visualizzare una label utilizzare l'attributo ",n.jsx(e.code,{children:"legend"})," del componente ",n.jsx(e.code,{children:"Rating"}),". In questo caso viene passato un nodo tsx all'attributo, che però accetta anche una struttura JSON (vedi documentazione)."]}),`
`,n.jsx("div",{className:"docs",children:n.jsx(a,{color:"success",children:n.jsx(o,{children:n.jsxs(e.p,{children:["L'attributo ",n.jsx(i,{children:"<legend>"}),` contiene testo aggiuntivo per Screen Reader all’interno di uno\r
`,n.jsx(i,{children:'<span class="visually-hidden">'}),`\r
.`,n.jsx("br",{}),`\r
La label con il numero di stelle dev’essere contenuta in uno `,n.jsx(i,{children:"<span>"})," semplice."]})})})}),`
`,n.jsx(r,{of:m}),`
`,n.jsx(e.h4,{id:"codice",children:"Codice"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const [rating, setRating] = useState(4);\r
return (\r
  <Rating\r
    value={rating}\r
    legend={\r
      <>\r
        <span className='visually-hidden'>Valutazione</span> <span>{rating} stelle</span>\r
        <span className='visually-hidden'>su 5</span>\r
      </>\r
    }\r
    inputs={['star1b', 'star2b', 'star3b', 'star4b', 'star5b']}\r
    name='ratingB'\r
    onChangeRating={setRating}\r
  />\r
);
`})}),`
`,n.jsx(e.h3,{id:"sola-lettura",children:"Sola lettura"}),`
`,n.jsx("div",{className:"docs",children:n.jsx(a,{color:"success",children:n.jsx(o,{children:n.jsxs(e.p,{children:["Per rendere accessibile il contenuto è necessario aggiungere l'attributo ",n.jsx(i,{children:"<legend>"})," con classe"," ",`\r
`,n.jsx("code",{children:".visually-hidden"}),"."]})})})}),`
`,n.jsxs(e.p,{children:["Aggiungendo l'attributo ",n.jsx(e.code,{children:"readOnly"})," si ottiene un Rating non modificabile di sola lettura."]}),`
`,n.jsx(r,{of:x}),`
`,n.jsxs(e.p,{children:["I seguenti valori per l'attributo ",n.jsx(e.code,{children:"legend"})," sono equivalenti:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Rating legend={{ content: 'Valutazione 4 stelle su 5', srOnly: true }} />
`})}),`
`,n.jsx(e.p,{children:"oppure"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Rating legend={<legend className='visually-hidden'>Valutazione 4 stelle su 5</legend>} />
`})}),`
`,n.jsx(e.h2,{id:"argomenti-componente",children:"Argomenti componente"}),`
`,n.jsx(e.h3,{id:"rating-1",children:"Rating"}),`
`,n.jsx(p,{of:g})]})}function w(s={}){const{wrapper:e}={...c(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(l,{...s})}):l(s)}export{w as default};
