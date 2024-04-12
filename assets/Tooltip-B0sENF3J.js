import{j as i}from"./jsx-runtime-DezihaCc.js";import{useMDXComponents as l}from"./index-BtoTqJlz.js";import{M as p,C as r,d as t,e as c}from"./index-DQ1boyZV.js";import{T as d,_ as s,E as m,a as h,P as u}from"./Tooltip.stories-CFNOFYrw.js";import{C as x,a as n}from"./CalloutText-C98nfp7D.js";import{C as j}from"./CalloutTitle-DHbim7Vs.js";import"./index-BFWcBMrj.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-d7HZv50p.js";import"../sb-preview/runtime.js";import"./index-qAjVnZy2.js";import"./index-DKz4l_X4.js";import"./index-B_J8iUie.js";import"./inheritsLoose-B7h9gheN.js";import"./index-DLle_QMf.js";import"./index-DrFu-skq.js";import"./UncontrolledTooltip-DsP5hi4G.js";import"./index-D3ylJrlI.js";import"./index-Bl6ORisp.js";import"./TooltipPopoverWrapper-D_sHTsDg.js";import"./utils-AMtBH2Nr.js";import"./popper-BAn7w8_p.js";import"./utils-CUovxYU2.js";import"./Fade-DLDWECFI.js";import"./Transition-GxAQdkDD.js";import"./Button-BvsBu0Bj.js";import"./Button-Cn4Lrs6w.js";function a(o){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...l(),...o.components};return i.jsxs(i.Fragment,{children:[i.jsx(p,{of:d}),`
`,i.jsx(e.h1,{id:"tooltip",children:"Tooltip"}),`
`,i.jsx(e.h2,{id:"documentazione-ed-esempi-per-aggiungere-tooltip-personalizzati",children:"Documentazione ed esempi per aggiungere tooltip personalizzati"}),`
`,i.jsxs(e.p,{children:["I Tooltip di reactstrap con CSS e JavaScript utilizzano CSS3 per animazioni e la libreria ",i.jsx(e.code,{children:"Popper.js"})," per il corretto posizionamento."]}),`
`,i.jsx("div",{className:"docs",children:i.jsxs(x,{color:"success",children:[i.jsx(j,{children:i.jsx(e.p,{children:"Accessibiltà: I tooltip funzionano sia con la tastiera che per gli utenti dotati di tecnologia assistiva."})}),i.jsx(n,{children:i.jsx(e.p,{children:`È importante aggiungere tooltip solo ad elementi HTML che sono tradizionalmente attivabili da tastiera e\r
interattivi (link, bottoni, o elementi di form).`})}),i.jsx(n,{children:i.jsxs(e.p,{children:["Sebbene arbitrariamente gli elementi HTML (come ",i.jsx(r,{children:"<span>"}),`) possano essere resi attivabili tramite\r
l’attributo\r
`,i.jsx(r,{children:'tabindex="0"'}),`, ciò aggiungerà interruzioni di tabulazioni potenzialmente dannose per gli utenti che usano\r
la tastiera per navigare. Inoltre, la maggior parte delle tecnologie assistive in questa situazione non annuncia il\r
tooltip come ci si potrebbe invece attendere.`]})}),i.jsx(n,{children:i.jsx(e.p,{children:`Infine, non fare affidamento esclusivamente sull’evento “mouse over” come innesco del tooltip, in quanto ciò\r
renderà impossibile l’attivazione per gli utenti che usano la tastiera per navigare.`})})]})}),`
`,i.jsx(e.h3,{id:"esempio-interattivo",children:"Esempio interattivo"}),`
`,i.jsx(t,{of:s}),`
`,i.jsx(c,{of:s}),`
`,i.jsx(e.p,{children:"Cose da sapere quando usi il plugin tooltip:"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:["I tooltip si basano sulla libreria di terze parti ",i.jsx(e.code,{children:"Popper.js"}),"."]}),`
`,i.jsx(e.li,{children:"I tooltip con titoli vuoti non saranno mai visualizzati."}),`
`,i.jsx(e.li,{children:"Attivare i tooltip su elementi nascosti non funzionerà."}),`
`,i.jsxs(e.li,{children:["I tooltip per gli elementi ",i.jsx(e.code,{children:".disabled"})," o ",i.jsx(e.code,{children:"disabled"})," devono essere attivati da un elemento contenitore."]}),`
`,i.jsxs(e.li,{children:["Quando attivati da collegamenti ipertestuali che si estendono su più righe, i tooltip verranno centrati. Usa ",i.jsx(e.code,{children:"white-space: nowrap;"})," sui tuoi ",i.jsx(e.code,{children:"<a/>"})," per evitare questo comportamento."]}),`
`]}),`
`,i.jsxs(e.p,{children:["Il kit fornisce due tipologie di componenti per mostrare tooltip, ereditandoli da ",i.jsx(e.code,{children:"reactstrap"}),": ",i.jsx(e.code,{children:"Tooltip"})," e ",i.jsx(e.code,{children:"UncontrolledTooltip"}),`.\r
Per la maggior parte dei casi `,i.jsx(e.code,{children:"UncontrolledTooltip"})," fornisce tutte le funzionalità richieste senza dove controllare esplicitamente lo stato del componente. Per situazioni più sofisticate dove è richiesta la gestione dello stato utilizzare il componente ",i.jsx(e.code,{children:"Tooltip"}),"."]}),`
`,i.jsxs(e.p,{children:["Passa il mouse sopra i link sottostanti per visualizzare i tooltip (con ",i.jsx(e.code,{children:"UncontrolledTooltip"}),"):"]}),`
`,i.jsx(t,{of:m}),`
`,i.jsxs(e.p,{children:["Qui trovi lo stesso esempio utilizzando il componente ",i.jsx(e.code,{children:"Tooltip"})," con la gestione esplicita dello stato:"]}),`
`,i.jsx(t,{of:h}),`
`,i.jsx(e.p,{children:"Passa il mouse sopra i bottoni sottostanti per vedere le quattro direzioni dei tooltip: sopra, destra, sotto, e sinistra."}),`
`,i.jsx(t,{of:u}),`
`,i.jsx(e.h2,{id:"argomenti-componente",children:"Argomenti componente"}),`
`,i.jsxs(e.p,{children:["Fare riferimento alla documentazione reactstrap (v9) per maggiori dettagli sui componenti ",i.jsx(e.code,{children:"Tooltip"})," e ",i.jsx(e.code,{children:"UncontrolledTooltip"}),": https://reactstrap.github.io/?path=/docs/components-tooltip--tooltip"]})]})}function R(o={}){const{wrapper:e}={...l(),...o.components};return e?i.jsx(e,{...o,children:i.jsx(a,{...o})}):a(o)}export{R as default};
