import{j as e}from"./jsx-runtime-DezihaCc.js";import{useMDXComponents as r}from"./index-BtoTqJlz.js";import{M as a,d as n}from"./index-DQ1boyZV.js";import{ProgressBarDark as t,PalliniDark as l,SaveButtonDark as d,ConfirmButtonDark as p}from"./Stepper.NavigationDark.stories-DaPi2ypS.js";import{ProgressBar as c,Pallini as u,SaveButton as m,ConfirmButton as h}from"./Stepper.Navigation.stories-CUtOGeiY.js";import{S as x,T as j,a as v,O as f,N as g,V as z,H as b}from"./Stepper.stories-D83w-IVe.js";import{C as S,a as C}from"./CalloutText-C98nfp7D.js";import{C as P}from"./CalloutTitle-DHbim7Vs.js";import"./index-BFWcBMrj.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-d7HZv50p.js";import"../sb-preview/runtime.js";import"./index-qAjVnZy2.js";import"./index-DKz4l_X4.js";import"./index-B_J8iUie.js";import"./inheritsLoose-B7h9gheN.js";import"./index-DLle_QMf.js";import"./index-DrFu-skq.js";import"./StepperNav-DlUBRm_X.js";import"./index-Bl6ORisp.js";import"./Button-BvsBu0Bj.js";import"./Button-Cn4Lrs6w.js";import"./index-D3ylJrlI.js";import"./utils-CUovxYU2.js";import"./Icon-Dn2FEDq_.js";import"./Progress-m0JQ9nnc.js";import"./index-GAri5u7x.js";import"./utils-Dujee42i.js";import"./StepperDots-zrtNGsuE.js";function o(s){const i={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:x}),`
`,e.jsx(i.h1,{id:"steppers",children:"Steppers"}),`
`,e.jsx(i.h2,{id:"gli-stepper-mostrano-lavanzamento-del-progresso-di-una-procedura-a-più-passi-attraverso-la-numerazione-dei-passi-stessi",children:`Gli "Stepper" mostrano l'avanzamento del progresso di una procedura a più passi attraverso la numerazione dei passi stessi.`}),`
`,e.jsx(i.h3,{id:"intestazione",children:"Intestazione"}),`
`,e.jsxs(i.p,{children:["Il contenitore degli Stepper è sempre un componente ",e.jsx(i.code,{children:"StepperContainer"}),`. La sua intestazione è contenuta in una lista\r
`,e.jsx(i.code,{children:"StepperHeader"}),", all'interno della quali i singoli passi (o ",e.jsx(i.em,{children:"step"}),`) sono rappresentati da componenti\r
`,e.jsx(i.code,{children:"StepperHeaderElement"}),"."]}),`
`,e.jsx("div",{className:"docs",children:e.jsxs(S,{color:"danger",children:[e.jsx(P,{children:e.jsx("span",{className:"text",children:"Mobile"})}),e.jsx(C,{children:e.jsx(i.p,{children:`L’aspetto della modalità mobile degli Steppers è differente rispetto a quello desktop. Se si sta consultando\r
questa documentazione su un PC desktop, per visualizzare correttamente gli esempi seguenti in formato mobile sarà\r
necessario ridimensionare la finestra del browser al di sotto dei 992 pixel.`})})]})}),`
`,e.jsx(i.h2,{id:"varianti-intestazione",children:"Varianti intestazione"}),`
`,e.jsx(i.h3,{id:"solo-testo",children:"Solo testo"}),`
`,e.jsx(i.p,{children:"I passi visibili nell'intestazione presentano tre varianti:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"confirmed"}),` per individuare uno step già confermato. È bene corredare tali step con un’icona che ne identifichi il\r
completamento (vedi di seguito).`]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"active"})," per individuare lo step attualmente attivo; su dispositivi mobili è l’unico visualizzato."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"mobile"}),` per individuare un indice, visibile solo su mobile, che può contenere lo stato attuale di progresso\r
indicato in forma testuale`]}),`
`]}),`
`,e.jsx(i.p,{children:`È necessario ridurre la finestra del browser per apprezzare il comportamente degli Stepper su dispositivi di dimensioni\r
ridotte.`}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(i.h3,{id:"testo-e-icone",children:"Testo e icone"}),`
`,e.jsx(i.p,{children:"Le label presenti negli step dell'intestazione possono essere anticipate da un'icona."}),`
`,e.jsx(n,{of:v}),`
`,e.jsx(i.h3,{id:"ordine-degli-step",children:"Ordine degli step"}),`
`,e.jsx(i.p,{children:`Le label presenti negli steps dell’header possono essere anticipate dal numero ordinale relativo allo stesso. Come\r
mostrato nell’esempio, nel caso di uno step completato al posto del numero va inclusa un’icona di conferma con un testo\r
riservato agli screen reader.`}),`
`,e.jsxs(i.p,{children:["È necessario aggiungere la prop ",e.jsx(i.code,{children:"noLine"})," allo ",e.jsx(i.code,{children:"<StepperHeaderElement>"}),` attivo per nascondere il bordo inferiore azzurro,\r
in questo caso ridondante.`]}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(i.h3,{id:"navigazione-degli-step",children:"Navigazione degli step"}),`
`,e.jsxs(i.p,{children:[`I pulsanti “Avanti” e “Indietro” dovranno essere utilizzati per implementare la logica di navigazione degli Steppers\r
nelle web app e sono dotati di classi `,e.jsx(i.code,{children:".steppers-btn-prev"})," e ",e.jsx(i.code,{children:".steppers-btn-next"}),"."]}),`
`,e.jsxs(i.p,{children:["Il passaggio da uno step all’altro attraverso i pulsanti contenuti in ",e.jsx(i.code,{children:"StepperNav"}),` determina un cambiamento del\r
contenuto presente in `,e.jsx(i.code,{children:"StepperContent"}),"."]}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(i.h2,{id:"varianti-navigazione-per-mobile",children:"Varianti navigazione per mobile"}),`
`,e.jsxs(i.p,{children:[`La versione mobile degli Steppers non visualizza l’elenco completo degli step disponibili, ma solo quello corrente. Per\r
questa ragione è possibile aggiungere degli indicatori di progresso allo `,e.jsx(i.code,{children:"StepperNav"}),"."]}),`
`,e.jsx(i.p,{children:`Questi indicatori saranno visualizzati solo su mobile, ma nei seguenti esempi sono stati resi disponibili anche nella\r
visualizzazione desktop. Si raccomanda comunque la visualizzazione in un viewport ridotto per ottenere un esempio\r
realistico dell’aspetto finale.`}),`
`,e.jsx(i.h3,{id:"progress-bar",children:"Progress bar"}),`
`,e.jsxs(i.p,{children:["La ",e.jsx(i.code,{children:"Progress"})," è quella nativa di Bootstrap 5 ed è contenuta in un ",e.jsx(i.code,{children:"<div>"})," con classe ",e.jsx(i.code,{children:".steppers-progress"}),` situato fra i\r
pulsanti “Indietro” e “Avanti”.`]}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(i.h3,{id:"pallini",children:"Pallini"}),`
`,e.jsxs(i.p,{children:["I pallini sono elementi ",e.jsx(i.code,{children:"<li>"})," contenuti in un componente ",e.jsx(i.code,{children:"StepperDots"})," situato fra i pulsanti “Indietro” e “Avanti”."]}),`
`,e.jsxs(i.p,{children:["Per ragioni di accessibilità, i ",e.jsx(i.code,{children:"<li>"})," devono contenere uno ",e.jsx(i.code,{children:"<span>"})," con classe ",e.jsx(i.code,{children:".visually-hidden"}),` riservato agli screen\r
reader con un testo indicante il numero di step e lo stato.`]}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(i.h3,{id:"pulsante-salva",children:"Pulsante salva"}),`
`,e.jsxs(i.p,{children:[`Su dispositivi mobili è possibile inserire un terzo pulsante “Salva” di aspetto differente con classe\r
`,e.jsx(i.code,{children:".steppers-btn-save"})," fra i pulsanti “Indietro” e “Avanti”."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(i.h3,{id:"pulsante-conferma",children:"Pulsante conferma"}),`
`,e.jsxs(i.p,{children:[`Su dispositivi mobili è possibile sostituire il pulsante “Avanti” con un pulsante “Conferma” di stile differente, con la\r
classe `,e.jsx(i.code,{children:".steppers-btn-confirm"}),"."]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(i.h2,{id:"versione-su-sfondo-scuro",children:"Versione su sfondo scuro"}),`
`,e.jsxs(i.p,{children:["Per ottenere una versione scura degli Stepper è sufficiente passare la prop ",e.jsx(i.code,{children:"dark"})," al componente ",e.jsx(i.code,{children:"StepperContainer"}),"."]}),`
`,e.jsx(n,{of:z}),`
`,e.jsx(i.h3,{id:"varianti-intestazione-1",children:"Varianti intestazione"}),`
`,e.jsx(n,{of:b}),`
`,e.jsx(i.h2,{id:"varianti-navigazione-per-mobile---dark",children:"Varianti navigazione per mobile - dark"}),`
`,e.jsx(i.p,{children:"Si raccomanda la visualizzazione in un viewport ridotto per ottenere un esempio realistico dell’aspetto finale."}),`
`,e.jsx(i.h3,{id:"progress-bar-1",children:"Progress bar"}),`
`,e.jsx(n,{of:t}),`
`,e.jsx(i.h3,{id:"pallini-1",children:"Pallini"}),`
`,e.jsx(n,{of:l}),`
`,e.jsx(i.h3,{id:"pulsante-salva-1",children:"Pulsante salva"}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(i.h3,{id:"pulsante-conferma-1",children:"Pulsante conferma"}),`
`,e.jsx(n,{of:p})]})}function ee(s={}){const{wrapper:i}={...r(),...s.components};return i?e.jsx(i,{...s,children:e.jsx(o,{...s})}):o(s)}export{ee as default};
