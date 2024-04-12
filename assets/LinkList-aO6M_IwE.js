import{j as e}from"./jsx-runtime-DezihaCc.js";import{useMDXComponents as t}from"./index-BtoTqJlz.js";import{M as r,d as n}from"./index-DQ1boyZV.js";import{L as l,_ as a,a as c,b as d,H as h,c as x,S as p,E as m,C as j,d as g,e as u,P as L,f,g as k,h as v,N as z}from"./LinkList.stories-CzUtBx9x.js";import"./index-BFWcBMrj.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-d7HZv50p.js";import"../sb-preview/runtime.js";import"./index-qAjVnZy2.js";import"./index-DKz4l_X4.js";import"./index-B_J8iUie.js";import"./inheritsLoose-B7h9gheN.js";import"./index-DLle_QMf.js";import"./index-DrFu-skq.js";import"./LinkListItem-CJpjZu_u.js";import"./index-Bl6ORisp.js";import"./Navbar-DLvLIaZ0.js";import"./index-D3ylJrlI.js";import"./utils-CUovxYU2.js";import"./NavLink-CmI6voTO.js";import"./FormGroup-B-MqxR9s.js";import"./Label-fWy_qovk.js";import"./Icon-Dn2FEDq_.js";import"./Toggle-CgWvXWae.js";import"./Input-CLSFLk54.js";import"./index-GAri5u7x.js";import"./utils-Dujee42i.js";import"./Collapse-BQdlK8Xy.js";import"./Transition-GxAQdkDD.js";function s(o){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
`,e.jsx(i.h1,{id:"liste-di-link",children:"Liste di link"}),`
`,e.jsx(i.h4,{id:"i-link-list-sono-un-componente-flessibile-e-potente-per-la-visualizzazione-di-una-serie-di-link-o-call-to-action",children:"I Link List sono un componente flessibile e potente per la visualizzazione di una serie di link o call to action."}),`
`,e.jsx(i.h2,{id:"single-line",children:"Single Line"}),`
`,e.jsx(n,{of:a}),`
`,e.jsx(i.h2,{id:"single-line---elemento-con-stato-attivo",children:"Single line - elemento con stato attivo"}),`
`,e.jsxs(i.p,{children:["Per determinare l’elemento attivo è sufficiente aggiungere il modificatore ",e.jsx(i.code,{children:"active"})," al relativo componente ",e.jsx(i.code,{children:"LinkListItem"})]}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(i.h2,{id:"single-line---elemento-con-stato-disabilitato",children:"Single line - elemento con stato disabilitato"}),`
`,e.jsxs(i.p,{children:["Per determinare l’elemento attivo è sufficiente aggiungere il modificatore ",e.jsx(i.code,{children:"disabled"})," al relativo componente ",e.jsx(i.code,{children:"LinkListItem"})]}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(i.h2,{id:"single-line-con-header-e-divider",children:"Single line con header e divider"}),`
`,e.jsxs(i.p,{children:[`I link list possono avere un header (con o senza link) e/o divisori per separare gruppi di link\r
L’header è costituito da un componente `,e.jsx(i.code,{children:"LinkListItem"})," con il modificatore ",e.jsx(i.code,{children:"header"}),`.\r
Il separatore è costituito dal componente `,e.jsx(i.code,{children:"LinkListItem"})," con il modificatore ",e.jsx(i.code,{children:"divider"}),"."]}),`
`,e.jsx(i.h4,{id:"header-senza-link",children:"Header senza link"}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(i.h4,{id:"header-con-link",children:"Header con link"}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h2,{id:"sizing",children:"Sizing"}),`
`,e.jsxs(i.p,{children:["Per ogni componente ",e.jsx(i.code,{children:"LinkListItem"})," è possibile definire una variante di dimensione maggiore utilizzando il modificatore ",e.jsx(i.code,{children:"large"})," e ",e.jsx(i.code,{children:"bold"})," per dare un aspetto maggiorato all'elemento."]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(i.h2,{id:"multiline",children:"Multiline"}),`
`,e.jsxs(i.p,{children:["È necessario usare il modificatore ",e.jsx(i.code,{children:"multiline"})," sul componente ",e.jsx(i.code,{children:"LinkList"}),` in questo caso per configurare correttamente gli spazi del contenitore.\r
Ogni componente `,e.jsx(i.code,{children:"LinkListItem"}),` può avere un icona (a destra o sinistra del testo) ed un abstract.\r
`,e.jsx(i.strong,{children:"Icone"})]}),`
`,e.jsxs(i.p,{children:["Per aggiungere un icona bisogna aggiungere al componente ",e.jsx(i.code,{children:"LinkListItem"})," la classi:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"icon-right"})," : se si vuole posizionare l’icona a destra del testo"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"icon-left"})," : se si vuole posizionare l’icona a sinistra del testo"]}),`
`]}),`
`,e.jsxs(i.p,{children:["All’interno del componente ",e.jsx(i.code,{children:"LinkListItem"})," subito dopo lo ",e.jsx(i.code,{children:"<span/>"})," contenente il testo, puoi inserire il componente ",e.jsx(i.code,{children:"Icon"})," (per maggiori informazioni consulta la sezione icone)."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(i.h3,{id:"avatar",children:"Avatar"}),`
`,e.jsxs(i.p,{children:["Per aggiungere un avatar a sinistra del testo bisogna aggiungere al ",e.jsx(i.code,{children:"LinkListItem"})," la classe: ",e.jsx(i.code,{children:"avatar"}),"."]}),`
`,e.jsxs(i.p,{children:["All’interno del ",e.jsx(i.code,{children:"LinkListItem"})," subito prima dello ",e.jsx(i.code,{children:"<span>"})," contenente il testo, andremo ad inserire il tag ",e.jsx(i.code,{children:"<img>"})," con classe ",e.jsx(i.code,{children:"avatar"}),"."]}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(i.h2,{id:"list-con-controlli",children:"List con controlli"}),`
`,e.jsxs(i.p,{children:["I ",e.jsx(i.code,{children:"LinkList"}),` con controlli sono caratterizzati da icone a destra e sinistra del testo\r
Quella di destra descrittiva e quella di sinistra un eventuale azione aggiuntiva da gestire in JavaScript.`]}),`
`,e.jsx(i.h3,{id:"primary-action",children:"Primary Action"}),`
`,e.jsx(i.h4,{id:"icona-sinistra",children:"Icona sinistra"}),`
`,e.jsxs(i.p,{children:["Per aggiungere un icona a sinistra del testo bisogna aggiungere al ",e.jsx(i.code,{children:"<LinkListItem>"})," la classe: ",e.jsx(i.code,{children:"icon-left"}),"."]}),`
`,e.jsxs(i.p,{children:["All’interno del ",e.jsx(i.code,{children:"<LinkListItem>"})," subito prima dello ",e.jsx(i.code,{children:"<span>"})," contenente il testo, andremo ad inserire il tag ",e.jsx(i.code,{children:"<i>"})," con classi ",e.jsx(i.code,{children:"left"})," (per definirne la posizione) e classe ",e.jsx(i.code,{children:"it-(classe icona)"})," per determinare quale icona inserire."]}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(i.h4,{id:"icona-destra",children:"Icona destra"}),`
`,e.jsxs(i.p,{children:["Per aggiungere un'icona a destra del testo bisogna aggiungere al ",e.jsx(i.code,{children:"LinkListItem"})," la classe: ",e.jsx(i.code,{children:"icon-right"}),"."]}),`
`,e.jsxs(i.p,{children:["All’interno del ",e.jsx(i.code,{children:"LinkListItem"})," subito prima dello ",e.jsx(i.code,{children:"<span>"})," contenente il testo, andremo ad inserire il tag ",e.jsx(i.code,{children:"<i>"})," con classi ",e.jsx(i.code,{children:"right"})," (per definirne la posizione) e classe ",e.jsx(i.code,{children:"it-(classe icona)"})," per determinare quale icona inserire."]}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(i.h4,{id:"icona-sinistra-1",children:"Icona sinistra"}),`
`,e.jsxs(i.p,{children:["Per aggiungere un'icona a sinistra del testo bisogna aggiungere al ",e.jsx(i.code,{children:"LinkListItem"})," la classe: ",e.jsx(i.code,{children:"icon-left"}),"."]}),`
`,e.jsxs(i.p,{children:["All’interno del ",e.jsx(i.code,{children:"LinkListItem"})," subito prima dello ",e.jsx(i.code,{children:"<span>"})," contenente il testo, andremo ad inserire il tag ",e.jsx(i.code,{children:"<i>"})," con classi ",e.jsx(i.code,{children:"left"})," (per definirne la posizione) e classe ",e.jsx(i.code,{children:"it-(classe icona)"})," per determinare quale icona inserire."]}),`
`,e.jsx(n,{of:L}),`
`,e.jsx(i.h3,{id:"collassabile",children:"Collassabile"}),`
`,e.jsxs(i.p,{children:[`Di seguito un esempio di navigazione annidiata collassabile.\r
Per questo tipo di link list è stato utilizzato, oltre alle classi custom, il componente `,e.jsx(i.code,{children:"<Collapse>"}),"."]}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(i.h3,{id:"switch-e-checkbox",children:"Switch e Checkbox"}),`
`,e.jsxs(i.p,{children:["Un ",e.jsx(i.code,{children:"LinkList"})," può contenere anche elementi form, di seguito un esempio contenente uno switch generato da un ",e.jsx(i.code,{children:"<Toggle>"}),"."]}),`
`,e.jsx(n,{of:k}),`
`,e.jsx(n,{of:v}),`
`,e.jsx(i.h2,{id:"nested-navigation",children:"Nested navigation"}),`
`,e.jsxs(i.p,{children:["I ",e.jsx(i.code,{children:"LinkList"})," possono contenere link con sottosezione espanse di default o collassabili."]}),`
`,e.jsx(i.h4,{id:"fixed",children:"Fixed"}),`
`,e.jsx(i.p,{children:"Di seguito un esempio di navigazione annidiata espansa di default."}),`
`,e.jsx(n,{of:z})]})}function Z(o={}){const{wrapper:i}={...t(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(s,{...o})}):s(o)}export{Z as default};
