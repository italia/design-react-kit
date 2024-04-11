import{j as e}from"./jsx-runtime-DezihaCc.js";import{useMDXComponents as h}from"./index-BtoTqJlz.js";import{M as x,C as a,d as n,e as c,A as t}from"./index-DQ1boyZV.js";import{C as m,E as j,a as g,b as d,c as p,d as C,e as f}from"./Callout.stories-B3qgTa78.js";import{C as l,a as r}from"./CalloutText-C98nfp7D.js";import{C as s}from"./CalloutTitle-DHbim7Vs.js";import"./index-BFWcBMrj.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-d7HZv50p.js";import"../sb-preview/runtime.js";import"./index-qAjVnZy2.js";import"./index-DKz4l_X4.js";import"./index-B_J8iUie.js";import"./inheritsLoose-B7h9gheN.js";import"./index-DLle_QMf.js";import"./index-DrFu-skq.js";import"./Icon-Dn2FEDq_.js";import"./index-Bl6ORisp.js";import"./Button-BvsBu0Bj.js";import"./Button-Cn4Lrs6w.js";import"./index-D3ylJrlI.js";import"./utils-CUovxYU2.js";function u(o){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...h(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:m}),`
`,e.jsx(i.h1,{id:"callout",children:"Callout"}),`
`,e.jsx(i.h2,{id:"componente-per-evidenziare-contenuti-testuali",children:"Componente per evidenziare contenuti testuali"}),`
`,e.jsx(i.p,{children:"I Callout posso essere utilizzati per evidenziare alcune parti del testo che richiedono particolare attenzione. Possono contenere messaggi di errore, avvertimento suggerimenti, ecc."}),`
`,e.jsx("div",{className:"docs",children:e.jsxs(l,{color:"danger",children:[e.jsx(s,{children:e.jsx("span",{className:"text",children:"Breaking change"})}),e.jsx(r,{children:e.jsxs(i.p,{children:["Dalla versione 5 del kit, nel callout basico è necessario mettere il titolo in un tag ",e.jsx(i.code,{children:"span"}),` con classe "text". Esempio:\r
`,e.jsx(a,{children:'<CalloutTitle><span class="text">Titolo callout</span></CalloutTitle>.'})]})})]})}),`
`,e.jsx(i.h3,{id:"esempi",children:"Esempi"}),`
`,e.jsxs(i.p,{children:["Il Callout basico è costituito da un contenitore ",e.jsx(i.code,{children:"Callout"}),", un titolo contenuto in un ",e.jsx(i.code,{children:"CalloutTitle"})," e un testo contenuto in uno o più tag ",e.jsx(i.code,{children:"CalloutText"}),"."]}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(i.h3,{id:"con-icona",children:"Con icona"}),`
`,e.jsxs(i.p,{children:["Al titolo può essere aggiunta un’icona a scelta fra quelle disponibili, avendo cura di nasconderla agli screen reader con la proprietà ",e.jsx(i.code,{children:'aria-hidden="true"'}),"."]}),`
`,e.jsx("div",{className:"docs",children:e.jsxs(l,{color:"success",children:[e.jsx(s,{children:e.jsx("span",{className:"text",children:"Accessibilità"})}),e.jsx(r,{children:e.jsxs(i.p,{children:[`Nel caso l’icona comunicasse visivamente contenuti non disponibili nel testo (ad esempio un allarme o una conferma) questa andrà affiancata da un\r
testo riservato agli screen reader: `,e.jsx(a,{children:'<span class="visually-hidden">Testo alternativo</span>'}),"."]})})]})}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(i.p,{children:"Al Callout può essere aggiunto un attributo che determina il colore del bordo e del titolo. I colori disponibili sono elencati di seguito."}),`
`,e.jsx(i.h3,{id:"varianti-di-colore",children:"Varianti di colore"}),`
`,e.jsx(i.p,{children:"Ecco un esempio interattivo per il cambio di colore"}),`
`,e.jsx(i.p,{children:"Suggerimento colore->icona:"}),`
`,e.jsx(i.p,{children:"success | it-check-circle"}),`
`,e.jsx(i.p,{children:"warning | it-help-circle"}),`
`,e.jsx(i.p,{children:"danger | it-close-circle"}),`
`,e.jsx(i.p,{children:"note | it-info-circle"}),`
`,e.jsx(i.p,{children:"important | it-info-circle"}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(c,{of:d}),`
`,e.jsx(i.h2,{id:"callout-highlights",children:"Callout Highlights"}),`
`,e.jsxs(i.p,{children:["Aggiungere l'attributo ",e.jsx(i.code,{children:"highlight"})," si ottiene una differente versione del Callout, con bordo solo sul lato sinistro."]}),`
`,e.jsxs(i.p,{children:["Per aumentare la dimensione di un paragrafo contenuto nel ",e.jsx(i.code,{children:"CalloutText"})," aggiungere l'attributo ",e.jsx(i.code,{children:"bigText"})," allo stesso."]}),`
`,e.jsx(i.p,{children:"Suggerimento colore->icona:"}),`
`,e.jsx(i.p,{children:"success | it-check-circle"}),`
`,e.jsx(i.p,{children:"warning | it-help-circle"}),`
`,e.jsx(i.p,{children:"danger | it-close-circle"}),`
`,e.jsx(i.p,{children:"note | it-info-circle"}),`
`,e.jsx(i.p,{children:"important | it-info-circle"}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(c,{of:p}),`
`,e.jsx(i.h2,{id:"callout-approfondimento",children:"Callout Approfondimento"}),`
`,e.jsxs(i.p,{children:["Il Callout di tipo Approfondimento, ottenibile aggiungendo l'attributo ",e.jsx(i.code,{children:"detailed"})," al componente ",e.jsx(i.code,{children:"Callout"}),`, ha un aspetto\r
radicalmente differente dagli altri stili disponibili ed è indicato per testi più estesi.`]}),`
`,e.jsxs(i.p,{children:["Come da esempio, è possibile aggiungere ulteriore testo all’interno di un componente ",e.jsx(i.code,{children:"CalloutMoreFooter"}),`, avendo cura di\r
passargli anche un id univoco.`]}),`
`,e.jsxs(i.p,{children:["Il bottone di controllo del ",e.jsx(i.code,{children:"CalloutMoreFooter"}),` può essere affiancato da un link per download di PDF o altri tipi di\r
documento, con relativa icona.`]}),`
`,e.jsx(n,{of:C}),`
`,e.jsx(i.h2,{id:"argomenti-componente",children:"Argomenti componente"}),`
`,e.jsx(i.h3,{id:"callout-1",children:"Callout"}),`
`,e.jsx(t,{of:l}),`
`,e.jsx(i.h3,{id:"callouttitle",children:"CalloutTitle"}),`
`,e.jsx(t,{of:s}),`
`,e.jsx(i.h3,{id:"callouttext",children:"CalloutText"}),`
`,e.jsx(t,{of:r}),`
`,e.jsx(i.h3,{id:"calloutmorefooter",children:"CalloutMoreFooter"}),`
`,e.jsx(t,{of:f})]})}function L(o={}){const{wrapper:i}={...h(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(u,{...o})}):u(o)}export{L as default};
