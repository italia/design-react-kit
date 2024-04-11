import{j as i}from"./jsx-runtime-DezihaCc.js";import{useMDXComponents as s}from"./index-BtoTqJlz.js";import{M as l,d as n}from"./index-DQ1boyZV.js";import{T as t,a as r,L as c,R as d,I as p,D as h,b as m,c as u,P as x,d as g,e as j,f as z,A as f,C as b,g as v,h as L,i as C,j as P,k,l as I}from"./Typography.stories-xxB1-FJE.js";import{C as T,a as M}from"./CalloutText-C98nfp7D.js";import{C as A}from"./CalloutTitle-DHbim7Vs.js";import"./index-BFWcBMrj.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-d7HZv50p.js";import"../sb-preview/runtime.js";import"./index-qAjVnZy2.js";import"./index-DKz4l_X4.js";import"./index-B_J8iUie.js";import"./inheritsLoose-B7h9gheN.js";import"./index-DLle_QMf.js";import"./index-DrFu-skq.js";import"./index-Bl6ORisp.js";function o(a){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...a.components};return i.jsxs(i.Fragment,{children:[i.jsx(l,{of:t}),`
`,i.jsx(e.h1,{id:"tipografia",children:"Tipografia"}),`
`,i.jsx(e.h3,{id:"documentazione-sulla-gestione-della-tipografia-come-intestazioni-paragrafi-citazioni-elenchi-e-altro",children:"Documentazione sulla gestione della tipografia, come intestazioni, paragrafi, citazioni, elenchi e altro."}),`
`,i.jsxs(e.p,{children:["Bootstrap imposta alcune proprietà di base per la tipografia e gli stili dei link. Quando è necessario un maggiore controllo, fornisce delle ",i.jsx(e.a,{href:"https://italia.github.io/bootstrap-italia/docs/organizzare-i-contenuti/testo/",rel:"nofollow",children:"classi di utilità testuali"}),"."]}),`
`,i.jsx(e.h2,{id:"famiglie-di-caratteri",children:"Famiglie di Caratteri"}),`
`,i.jsx(e.p,{children:"Come descritto in dettaglio nel capitolo sullo UI Kit, le Linee Guida di Design suggeriscono di usare le seguenti famiglie di caratteri:"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:["il font senza grazie, o ",i.jsx(e.em,{children:"sans serif"}),", ",i.jsx(e.strong,{children:"Titillium Web"}),"."]}),`
`,i.jsxs(e.li,{children:["il font graziato, o ",i.jsx(e.em,{children:"serif"}),", ",i.jsx(e.strong,{children:"Lora"}),"."]}),`
`,i.jsxs(e.li,{children:["il font ",i.jsx(e.em,{children:"monospace"})," con dimensioni di caratteri normalizzate ",i.jsx(e.strong,{children:"Roboto Mono"}),"."]}),`
`]}),`
`,i.jsx(e.h3,{id:"titillium-web",children:"Titillium Web"}),`
`,i.jsxs(e.p,{children:["È la famiglia di caratteri utilizzata per i contenuti web, per cui di norma non è necessario applicarlo esplicitamente. In caso si renda necessario è possibile utilizzare la classe ",i.jsx(e.code,{children:"text-sans-serif"}),"."]}),`
`,i.jsx(n,{of:r}),`
`,i.jsx(e.h3,{id:"lora",children:"Lora"}),`
`,i.jsxs(e.p,{children:["È un carattere più adatto a testi lunghi, introdotto per la sua leggibilità, nato espressamente per la lettura su display. Può essere utilizzato applicando la classe ",i.jsx(e.code,{children:"text-serif"}),"."]}),`
`,i.jsx(n,{of:c}),`
`,i.jsx(e.h3,{id:"roboto-mono",children:"Roboto Mono"}),`
`,i.jsxs(e.p,{children:["È una famiglia di caratteri adatta ad essere utilizzata per la rappresentazione di numeri, codici, calcoli matematici, esempi con linguaggi di programmazione. Per il suo utilizzo, è sufficiente usare la classe ",i.jsx(e.code,{children:"font-monospace"}),"."]}),`
`,i.jsx(n,{of:d}),`
`,i.jsx(e.h3,{id:"tipografia-responsive",children:"Tipografia responsive"}),`
`,i.jsxs(e.p,{children:["Bootstrap Italia ridimensiona testo e alcune propietà dei componenti modificando il ",i.jsx(e.code,{children:"font-size"})," dell’elemento radice, con una media query che imposta dimensioni lievemente maggiori per schermi con dimensioni maggiori di ",i.jsx(e.code,{children:"576px"}),". Questa impostazione, unita all’utilizzo di dimensioni in ",i.jsx(e.code,{children:"rem"})," o in semplici valori numerici all’interno del CSS, fa sì che testo e altre proprietà occupino più spazio quando lo schermo lo permette:"]}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-css",children:`html {\r
  font-size: 16px;\r
  @include media-breakpoint-up(sm) {\r
    font-size: 18px;\r
  }\r
}
`})}),`
`,i.jsx(e.h3,{id:"intestazioni",children:"Intestazioni"}),`
`,i.jsxs(e.p,{children:["Tutte le intestazioni HTML, da ",i.jsx(e.code,{children:"<h1>"})," fino a ",i.jsx(e.code,{children:"<h6>"}),", sono disponibili, anche se è buona norma non utilizzare più di 4 livelli di intestazione."]}),`
`,i.jsxs(e.p,{children:["Nel caso in cui si voglia presentare il testo nello stesso stile delle intestazioni, ma non sia possibile utilizzare l’elemento HTML appropriato, sono disponibili anche classi di tipo ",i.jsx(e.code,{children:".h1"}),", ",i.jsx(e.code,{children:".h2"}),", ecc."]}),`
`,i.jsx(n,{of:p}),`
`,i.jsx(e.p,{children:"Queste le dimensioni nel dettaglio:"}),`
`,i.jsx(n,{of:h}),`
`,i.jsx(e.h4,{id:"intestazioni-in-evidenza",children:"Intestazioni in evidenza"}),`
`,i.jsxs(e.p,{children:["Gli elementi di intestazione tradizionali sono progettati per funzionare al meglio nel contesto della pagina. Nel caso sia necessario mettere in ulteriore evidenza un’intestazione di tipo ",i.jsx(e.code,{children:"<h1>"}),", si può prendere in considerazione l’uso della classe ",i.jsx(e.code,{children:".display-1"}),", che restituirà una dimensione sensibilmente più grande."]}),`
`,i.jsx(e.h1,{id:"intestazione-di-tipo-h1",children:"Intestazione di tipo h1"}),`
`,i.jsx(n,{of:m}),`
`,i.jsx(e.h3,{id:"personalizzazione-delle-intestazioni",children:"Personalizzazione delle intestazioni"}),`
`,i.jsx(e.p,{children:"È possibile utilizzare le classi di utilità incluse in Bootstrap per dare uno stile diverso per testi di intestazione secondaria."}),`
`,i.jsx(n,{of:u}),`
`,i.jsx(e.h3,{id:"paragrafi",children:"Paragrafi"}),`
`,i.jsxs(e.p,{children:["Il semplice paragrafo prevede una dimensione di testo e un’interlinea di ",i.jsx(e.code,{children:"16px/24px"})," per dispositivi mobili, e di ",i.jsx(e.code,{children:"18px/28px"})," per schermi con dimensioni maggiori di 576px."]}),`
`,i.jsx(n,{of:x}),`
`,i.jsx(e.p,{children:"Per una lettura più confortevole, è buona norma mantenere la lunghezza di un paragrafo compresa tra 45 e 74 caratteri. Per testo su colonne multiple, si considera una lunghezza compresa tra 40 e 50 caratteri. Per i testi a margine la lunghezza minima è di 12-15 caratteri."}),`
`,i.jsx(e.h4,{id:"paragrafi-in-evidenza",children:"Paragrafi in evidenza"}),`
`,i.jsxs(e.p,{children:["Per mettere in risalto un paragrafo è sufficiente aggiungere la classe ",i.jsx(e.code,{children:".lead."})]}),`
`,i.jsx(n,{of:g}),`
`,i.jsx(e.h4,{id:"personalizzazione-dei-paragrafi",children:"Personalizzazione dei paragrafi"}),`
`,i.jsx(e.p,{children:"È possibile stilizzare correttamente lo stile anche nel caso vengano utilizzati semplicemente gli elementi HTML5 per il trattamento di testo."}),`
`,i.jsx(n,{of:j}),`
`,i.jsxs(e.p,{children:["Le classi ",i.jsx(e.code,{children:".mark "})," e ",i.jsx(e.code,{children:".small"})," sono disponibili anche per applicare gli stessi stili di ",i.jsx(e.code,{children:"<mark>"})," e ",i.jsx(e.code,{children:"<small>"})," evitando eventuali implicazioni semantiche indesiderate che i tag porterebbero con sé."]}),`
`,i.jsxs(e.p,{children:["È possibile sfruttare le classi di Bootstrap anche per modificare allineamento, stile, peso e colore del testo. Per questo, si può fare riferimento alla documentazione delle ",i.jsx(e.a,{href:"https://italia.github.io/bootstrap-italia/docs/organizzare-i-contenuti/testo/",rel:"nofollow",children:"utilità di testo"})," e ",i.jsx(e.a,{href:"/story/documentazione-utilities-colori--page",children:"utilità di colore"}),"."]}),`
`,i.jsx(e.h3,{id:"link",children:"Link"}),`
`,i.jsx("div",{className:"docs",children:i.jsxs(T,{color:"success",children:[i.jsx(A,{children:i.jsx("span",{className:"text",children:"Accessibilità"})}),i.jsx(M,{children:i.jsx(e.p,{children:`È fondamentale evidenziare i link presenti in un paragrafo in modo adeguato, utilizzando la forma (grassetto,\r
sottolineato) oltre al colore per indicare la presenza di un collegamento ipertestuale.`})})]})}),`
`,i.jsxs(e.p,{children:["Nel rispetto delle regole di accessibilità vigenti, Bootstrap Italia mantiene la sottolineatura ai link di tipo ",i.jsx(e.code,{children:"<a>"}),". Nel caso di link già in evidenza (menu principali, liste di link, link in grassetto, ecc.), è possibile rimuovere la sottolineatura utilizzando la classe ",i.jsx(e.code,{children:".text-decoration-none"}),"."]}),`
`,i.jsx(n,{of:z}),`
`,i.jsx(e.h3,{id:"abbreviazioni",children:"Abbreviazioni"}),`
`,i.jsxs(e.p,{children:["Implementazione stilizzata dell’elemento HTML ",i.jsx(e.code,{children:"<abbr>"})," per abbreviazioni e acronimi per mostrare la versione espansa sull’ hover. Le abbreviazioni hanno una sottolineatura predefinita e ottengono un cursore di aiuto per fornire un contesto aggiuntivo al passaggio del mouse e agli utenti delle tecnologie assistive."]}),`
`,i.jsxs(e.p,{children:["Aggiungi ",i.jsx(e.code,{children:".initialism"})," a un’abbreviazione per una dimensione del font leggermente più piccola."]}),`
`,i.jsx(n,{of:f}),`
`,i.jsx(e.h3,{id:"citazioni",children:"Citazioni"}),`
`,i.jsxs(e.p,{children:["Per citare blocchi di contenuti da un’altra fonte all’interno del documento. Racchiudi ogni HTML all’interno di un ",i.jsx(e.code,{children:"<blockquote className='blockquote'>"})," come la citazione."]}),`
`,i.jsx(n,{of:b}),`
`,i.jsx(e.h4,{id:"citare-una-fonte",children:"Citare una fonte"}),`
`,i.jsxs(e.p,{children:["Aggiungi un ",i.jsx(e.code,{children:"<footer className='blockquote-footer'>"})," per identificare la fonte. Includi il nome delle fonte di origine in ",i.jsx(e.code,{children:"<cite>"}),"."]}),`
`,i.jsx(n,{of:v}),`
`,i.jsx(e.h3,{id:"allineamento",children:"Allineamento"}),`
`,i.jsx(e.p,{children:"Utilizza le utilità di testo necessarie per modificare l’allineamento del tuo blockquote."}),`
`,i.jsx(n,{of:L}),`
`,i.jsx(n,{of:C}),`
`,i.jsx(e.h3,{id:"liste",children:"Liste"}),`
`,i.jsxs(e.p,{children:["Rimuovi il predefinito ",i.jsx(e.code,{children:"list-style"})," e il margine sinistro sugli elementi elenco (solo per i figli diretti). ",i.jsx(e.strong,{children:"Questo si applica solo agli elementi della lista che sono figli diretti"}),", il che significa che dovrai aggiungere la classe per tutti gli elenchi annidati."]}),`
`,i.jsx(n,{of:P}),`
`,i.jsx(e.h4,{id:"inline",children:"Inline"}),`
`,i.jsxs(e.p,{children:["Rimuovi i punti elenco di una lista e applica un leggero margin con una combinazione di due classi, ",i.jsx(e.code,{children:".list-inline"})," e ",i.jsx(e.code,{children:".list-inline-item"}),"."]}),`
`,i.jsx(n,{of:k}),`
`,i.jsx(e.h4,{id:"allineamento-lista-descrizione",children:"Allineamento lista descrizione"}),`
`,i.jsxs(e.p,{children:["Allineare i termini e le descrizioni orizzontalmente utilizzando le classi predefinite del nostro sistema di griglia. Per termini più lunghi, puoi facoltativamente aggiungere la classe ",i.jsx(e.code,{children:".text-truncate"})," per troncare il testo con un ",i.jsx(e.code,{children:"ellipsis"}),"."]}),`
`,i.jsx(n,{of:I})]})}function K(a={}){const{wrapper:e}={...s(),...a.components};return e?i.jsx(e,{...a,children:i.jsx(o,{...a})}):o(a)}export{K as default};
