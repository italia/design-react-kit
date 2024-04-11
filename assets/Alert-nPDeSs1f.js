import{j as e}from"./jsx-runtime-DezihaCc.js";import{useMDXComponents as r}from"./index-BtoTqJlz.js";import{M as t,d as o,e as a,C as l,A as c}from"./index-DQ1boyZV.js";import{A as d,_ as p,a as u,C as m}from"./Alert.stories-CSOVhyS1.js";import{C as h,a as x}from"./CalloutText-C98nfp7D.js";import{C as g}from"./CalloutTitle-DHbim7Vs.js";import"./index-BFWcBMrj.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-d7HZv50p.js";import"../sb-preview/runtime.js";import"./index-qAjVnZy2.js";import"./index-DKz4l_X4.js";import"./index-B_J8iUie.js";import"./inheritsLoose-B7h9gheN.js";import"./index-DLle_QMf.js";import"./index-DrFu-skq.js";import"./stories-helper-DNOoDksx.js";import"./Alert-BtD15DuB.js";import"./index-D3ylJrlI.js";import"./index-Bl6ORisp.js";import"./utils-CUovxYU2.js";import"./Fade-DLDWECFI.js";import"./Transition-GxAQdkDD.js";function s(n){const i={code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:d}),`
`,e.jsx(i.h1,{id:"alert",children:"Alert"}),`
`,e.jsx(i.p,{children:"Gli avvisi sono disponibili in quattro tipologie diverse e per qualsiasi lunghezza di testo. Inoltre possono prevedere un pulsante di chiusura"}),`
`,e.jsx(i.h2,{id:"esempio-interattivo",children:"Esempio Interattivo"}),`
`,e.jsx(o,{}),`
`,e.jsx(a,{}),`
`,e.jsx("div",{className:"docs",children:e.jsxs(h,{color:"success",children:[e.jsx(g,{children:e.jsx("span",{className:"text",children:"Trasmettere significato alle tecnologie assistive"})}),e.jsx(x,{children:e.jsxs(i.p,{children:[`L’uso del colore per aggiungere un significato fornisce solo un’indicazione visiva, che non sarà trasmesso agli utenti di tecnologie assistive –\r
come gli screen reader. Assicurati che le informazioni denotate dal colore siano rese disponibili anche dal contenuto stesso (es.: il testo\r
visibile), o siano incluse attraverso mezzi alternativi, come testo aggiuntivo nascosto con la classe\r
`,e.jsx(l,{children:".visually-hidden"}),"."]})})]})}),`
`,e.jsx(i.h2,{id:"link-evidenziato",children:"Link evidenziato"}),`
`,e.jsxs(i.p,{children:["Usa la classe ",e.jsx(i.code,{children:".alert-link"})," per dare risalto ad un link all'interno dell'alert."]}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(i.h2,{id:"contenuto-aggiuntivo",children:"Contenuto aggiuntivo"}),`
`,e.jsx(i.p,{children:"I messaggi di avviso possono avere del contenuto HTML aggiuntivo come degli heading, paragrafi e divisori."}),`
`,e.jsx(o,{of:u}),`
`,e.jsx(i.h2,{id:"chiusura",children:"Chiusura"}),`
`,e.jsx(i.p,{children:"È possibile eliminare qualsiasi avviso mediante un pulsante di chiusura:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Definisci una funzione che chiuda l'alert controllando la sua prop ",e.jsx(i.code,{children:"isOpen"})]}),`
`,e.jsxs(i.li,{children:["Passa la funzione alla prop ",e.jsx(i.code,{children:"toggle"})," del componente"]}),`
`]}),`
`,e.jsx(i.p,{children:"Clicca sul pulsante di chiusura per vedere la funzionalità di rimozione altert in azione:"}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(i.h4,{id:"codice",children:"Codice"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`const [open, setOpen] = useState(true);\r
\r
const closeAlert = () => setOpen(false);\r
\r
return (\r
    <div>\r
        <Alert {...args} isOpen={open} toggle={closeAlert}>\r
            <strong>Attenzione</strong>Alcuni campi inseriti sono da controllare.\r
        </Alert>\r
    </div>\r
);
`})}),`
`,e.jsx(i.h2,{id:"argomenti-componente",children:"Argomenti componente"}),`
`,e.jsx(c,{})]})}function G(n={}){const{wrapper:i}={...r(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(s,{...n})}):s(n)}export{G as default};
