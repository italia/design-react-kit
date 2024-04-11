import{j as i}from"./jsx-runtime-DezihaCc.js";import{useMDXComponents as d}from"./index-BtoTqJlz.js";import{M as p,d as n,e as h,C as o,A as u}from"./index-DQ1boyZV.js";import{B as x,E as l,T as m,V as j,S as b,a as z,b as f,c as v}from"./Button.stories-DVKCvZYA.js";import{C as s,a}from"./CalloutText-C98nfp7D.js";import{C as r}from"./CalloutTitle-DHbim7Vs.js";import{B as g}from"./Button-BvsBu0Bj.js";import"./index-BFWcBMrj.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-d7HZv50p.js";import"../sb-preview/runtime.js";import"./index-qAjVnZy2.js";import"./index-DKz4l_X4.js";import"./index-B_J8iUie.js";import"./inheritsLoose-B7h9gheN.js";import"./index-DLle_QMf.js";import"./index-DrFu-skq.js";import"./Icon-Dn2FEDq_.js";import"./index-Bl6ORisp.js";import"./Button-Cn4Lrs6w.js";import"./index-D3ylJrlI.js";import"./utils-CUovxYU2.js";function c(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...d(),...t.components};return i.jsxs(i.Fragment,{children:[i.jsx(p,{of:x}),`
`,i.jsx(e.h1,{id:"bottoni",children:"Bottoni"}),`
`,i.jsx(e.h2,{id:"bootstrap-italia-definisce-alcuni-stili-per-i-bottoni-da-utilizzare-a-seconda-delle-necessità",children:"Bootstrap Italia definisce alcuni stili per i bottoni da utilizzare a seconda delle necessità"}),`
`,i.jsx(e.h3,{id:"utilizzo",children:"Utilizzo"}),`
`,i.jsxs(e.p,{children:["Per aggiungere un bottone personalizzato, è sufficiente utilizzare il componente ",i.jsx(e.code,{children:"Button"})," ed i relativi attributi per applicarne le varianti di stile, dimensione, ecc."]}),`
`,i.jsx(n,{of:l}),`
`,i.jsx(h,{of:l}),`
`,i.jsxs(e.p,{children:["Il componente ",i.jsx(e.code,{children:"Button"})," è state pensato per essere utilizzate con l’elemento ",i.jsx(e.code,{children:"<button/>"}),". Tuttavia, è possibile applicare lo stile per i bottoni anche ad elementi di tipo ",i.jsx(e.code,{children:"<a/>"})," o ",i.jsx(e.code,{children:"<input/>"}),", anche se alcuni browser potrebbero mostrare un rendering lievemente diverso."]}),`
`,i.jsxs(e.p,{children:["In questi casi, non dimenticare di utilizzare in modo appropriato gli attributi ",i.jsx(e.code,{children:'role="button"'})," per trasmettere il loro scopo alle tecnologie assistive."]}),`
`,i.jsx(n,{of:m}),`
`,i.jsx(e.h2,{id:"varianti-di-colore",children:"Varianti di colore"}),`
`,i.jsx(e.p,{children:"Gli stili definiti da Bootstrap Italia utilizzano un naming consistente con Bootstrap, con alcune personalizzazioni:"}),`
`,i.jsx(n,{of:j}),`
`,i.jsx(e.h4,{id:"note-sullo-stato-disabilitato",children:"Note sullo stato disabilitato"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:["I tag ",i.jsx(e.code,{children:"<a/>"})," non supportano l’attributo ",i.jsx(e.code,{children:"disabled"}),", per cui è necessario usare la classe ",i.jsx(e.code,{children:".disabled"})," per farli apparire visivamente disabilitati, e in modo da disabilitare pointer-events su di essi sui browser che lo supportano."]}),`
`,i.jsxs(e.li,{children:["I bottoni disabilitati includeranno l’attributo ",i.jsx(e.code,{children:'aria-disabled="true"'})," per indicare lo stato dell’elemento alle tecnologie assistive."]}),`
`]}),`
`,i.jsx("div",{className:"docs",children:i.jsxs(s,{color:"warning",children:[i.jsx(r,{children:i.jsx("span",{className:"text",children:"Disabilitazione link"})}),i.jsx(a,{children:i.jsxs(e.p,{children:["La classe ",i.jsx(o,{children:".disabled"})," usa ",i.jsx(o,{children:"pointer-events: none"}),` per provare a disabilitare l’attivazione dei comportamenti di default dei\r
link `,i.jsx(o,{children:"<a>"}),`, ma tale funzionalità non è gestita in alcuni browsers. Oltre a questo, la navigazione attraverso tastiera rimane\r
abilitata, per cui utenti che utilizzano tecnologie assistive saranno comunque in grado di attivare tali link. Per ovviare a questo problema, è\r
possibile aggiungere l’attributo `,i.jsx(o,{children:'tabindex="-1"'})," e utilizzare Javascript per disabilitare le loro funzionalità."]})})]})}),`
`,i.jsx(e.h4,{id:"su-sfondo-scuro",children:"Su sfondo scuro"}),`
`,i.jsx(n,{of:b}),`
`,i.jsx("div",{className:"docs",children:i.jsxs(s,{color:"success",children:[i.jsx(r,{children:i.jsx("span",{className:"text",children:"Trasmettere significato alle tecnologie assistive"})}),i.jsx(a,{children:i.jsx("p",{children:i.jsxs(e.p,{children:[`L’uso del colore per aggiungere un significato fornisce solo un’indicazione visiva, che non sarà trasmesso agli utenti di tecnologie assistive –\r
come gli screen reader. Assicurati che le informazioni denotate dal colore siano rese disponibili anche dal contenuto stesso (es.: il testo\r
visibile), o siano incluse attraverso mezzi alternativi, come testo aggiuntivo nascosto con la classe `,i.jsx(o,{children:".visually-hidden"}),"."]})})})]})}),`
`,i.jsx(e.h2,{id:"bottoni-con-icona",children:"Bottoni con icona"}),`
`,i.jsxs(e.p,{children:["E’ possibile aggiungere un’icona personalizzata al bottone con l'attributo ",i.jsx(e.code,{children:"icon"})," in aggiunta nel componente ",i.jsx(e.code,{children:"Button"})," e alle relative varianti cromatiche e di dimensione."]}),`
`,i.jsx(n,{of:z}),`
`,i.jsx(e.h3,{id:"icona-cerchiata",children:"Icona cerchiata"}),`
`,i.jsxs(e.p,{children:["Inoltre è possibile applicare un contorno cerchiato dell’icona utilizzando un contenitore con classe ",i.jsx(e.code,{children:".rounded-icon"})," da inserire all’interno della classe .btn con possibilità di personalizzazione del suo aspetto cromatico attraverso i modificatori ",i.jsx(e.code,{children:".rounded-_"})," e ",i.jsx(e.code,{children:".icon``.icon-_"}),"."]}),`
`,i.jsx(n,{of:f}),`
`,i.jsx("div",{className:"docs",children:i.jsxs(s,{color:"warning",children:[i.jsx(r,{children:i.jsx("span",{className:"text",children:"Allineamento e spaziatura dell’icona"})}),i.jsx(a,{children:i.jsx("p",{children:i.jsxs(e.p,{children:["Nel caso si utilizzi un’icona cerchiata all’interno di un componente ",i.jsx(o,{children:"Button"}),`, è necessario inserire il testo del bottone/link\r
all’interno di un tag `,i.jsx(o,{children:"<span>"}),` al fine di garantire un perfetto allineamento ed una corretta spaziatura tra l’icona e lo stesso\r
testo.`]})})})]})}),`
`,i.jsx(e.h2,{id:"varianti-di-dimensione",children:"Varianti di dimensione"}),`
`,i.jsxs(e.p,{children:["Per ottenere bottoni di dimensione più grande o più piccola, è sufficiente utilizzare l'attributo ",i.jsx(e.code,{children:"size"})," con i valori ",i.jsx(e.code,{children:'"lg"'}),", ",i.jsx(e.code,{children:'"sm"'}),", ",i.jsx(e.code,{children:'"xs"'}),"."]}),`
`,i.jsxs(e.p,{children:["Utilizzando invece l'attributo ",i.jsx(e.code,{children:"block"})," si ottengono invece bottoni che prendono tutta l’ampiezza a loro disposizione, a seconda delle dimensioni del loro contenitore. In questo caso, anche i bordi non sono più arrotondati."]}),`
`,i.jsx(n,{of:v}),`
`,i.jsx(e.h3,{id:"approfondimento",children:"Approfondimento"}),`
`,i.jsxs(e.p,{children:["È possibile provare a personalizzare live il componente ",i.jsx(e.code,{children:"Button"})," presso ",i.jsx(e.a,{href:"?path=/story/componenti-button--esempi-interattivi",children:"l'esempio interattivo"}),"."]}),`
`,i.jsxs(e.p,{children:["Per ulteriori informazioni sui bottoni si rimanda alla sezione ",i.jsx(e.code,{children:"buttons"})," del sito ",i.jsx(e.a,{href:"https://reactstrap.github.io/?path=/docs/components-button--button",rel:"nofollow",children:"Reactstrap (v9)"}),", quindi di ",i.jsx(e.a,{href:"https://getbootstrap.com/docs/5.1/components/buttons/",rel:"nofollow",children:"Bootstrap"}),"."]}),`
`,i.jsx(e.h2,{id:"argomenti-componente",children:"Argomenti componente"}),`
`,i.jsx(e.h3,{id:"button",children:"Button"}),`
`,i.jsx(u,{of:g})]})}function G(t={}){const{wrapper:e}={...d(),...t.components};return e?i.jsx(e,{...t,children:i.jsx(c,{...t})}):c(t)}export{G as default};
