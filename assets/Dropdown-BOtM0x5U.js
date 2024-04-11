import{j as e}from"./jsx-runtime-DezihaCc.js";import{useMDXComponents as d}from"./index-BtoTqJlz.js";import{M as l,C as s,d as n,A as t}from"./index-DQ1boyZV.js";import{D as c,_ as p,a as u,b as h}from"./Dropdown.stories-rz2ptb4a.js";import{_MenuVociAttive as m,_MenuVociDisabilitate as x,MenuHeadersESeparatori as j,MenuConVociLarge as g,MenuFullWidth as v,MenuIconaADestra as f,MenuIconaASinistra as w,_MenuDark as b}from"./DropdownMenu.stories-CEiFtOPg.js";import{C as z,a as r}from"./CalloutText-C98nfp7D.js";import{C as M}from"./CalloutTitle-DHbim7Vs.js";import{D as k,a as D}from"./DropdownToggle-BdTyHQJO.js";import{D as I}from"./DropdownMenu-B_Gh5UIE.js";import"./index-BFWcBMrj.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-d7HZv50p.js";import"../sb-preview/runtime.js";import"./index-qAjVnZy2.js";import"./index-DKz4l_X4.js";import"./index-B_J8iUie.js";import"./inheritsLoose-B7h9gheN.js";import"./index-DLle_QMf.js";import"./index-DrFu-skq.js";import"./index-D3ylJrlI.js";import"./index-Bl6ORisp.js";import"./utils-CUovxYU2.js";import"./LinkListItem-CJpjZu_u.js";import"./Icon-Dn2FEDq_.js";import"./popper-BAn7w8_p.js";import"./Button-BvsBu0Bj.js";import"./Button-Cn4Lrs6w.js";function a(o){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:c}),`
`,e.jsx(i.h1,{id:"dropdown",children:"Dropdown"}),`
`,e.jsx(i.h2,{id:"attiva-o-disattiva-overlay-contestuali-per-visualizzare-elenchi-di-link-e-altro-ancora-con-questi-menù-a-tendina",children:"Attiva o disattiva overlay contestuali per visualizzare elenchi di link e altro ancora con questi menù a tendina."}),`
`,e.jsxs(i.p,{children:["I dropdown possono essere attivati da elementi ",e.jsx(i.code,{children:"<a/>"})," o ",e.jsx(i.code,{children:"<button/>"})," per soddisfare al meglio le tue esigenze."]}),`
`,e.jsx("div",{className:"docs",children:e.jsxs(z,{color:"success",children:[e.jsx(M,{children:e.jsx("span",{className:"text",children:"Accessibilità"})}),e.jsxs(r,{children:[e.jsx(i.p,{children:"Lo standard"}),e.jsx("a",{href:"https://www.w3.org/TR/wai-aria/",target:"_blank noreferrer",children:e.jsx(i.p,{children:"WAI ARIA"})}),e.jsxs(i.p,{children:["definisce un widget ",e.jsx(s,{children:'role="menu"'}),`, che però è specifico per i menu applicativi che attivano azioni o\r
funzioni. I menu ARIA possono contenere solo voci di menu, voci di menu di caselle di controllo, voci di menu dei\r
pulsanti di opzione, gruppi di pulsanti di opzione e sottomenu.`]})]}),e.jsx(r,{children:e.jsx(i.p,{children:`I dropdown di Bootstrap, al contrario, sono progettati per essere generici e applicabili a una varietà di\r
situazioni e strutture di markup. Ad esempio, è possibile creare elenchi a discesa contenenti input e controlli di\r
moduli aggiuntivi, ad esempio campi di ricerca o moduli di accesso. Per questo motivo, Bootstrap non si aspetta\r
(né aggiunge automaticamente) alcuno degli attributi di aria e di ruolo richiesti per i veri menu ARIA. Gli autori\r
dovranno includere questi attributi più specifici.`})}),e.jsx(r,{children:e.jsxs(i.p,{children:[`Tuttavia, Bootstrap aggiunge il supporto integrato per la maggior parte delle interazioni standard del menu della\r
tastiera, come la possibilità di spostarsi tra i singoli elementi `,e.jsx(s,{children:"LinkListItem"}),` usando i tasti cursore\r
e chiude il menu con il tasto ESC.`]})})]})}),`
`,e.jsx(i.h3,{id:"dropdown-button",children:"Dropdown button"}),`
`,e.jsxs(i.p,{children:["Il componente ",e.jsx(i.code,{children:"DropdownToggle"})," utilizza il componente ",e.jsx(i.code,{children:"Button"})," internamente, quindi accetta i medesimi attributi. I link o le voci all’interno del dropdown devono essere contenute in un elemento ",e.jsx(i.code,{children:"LinkList"}),"."]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(i.h3,{id:"dropdown-button-varianti",children:"Dropdown button varianti"}),`
`,e.jsxs(i.p,{children:["Ovviamente, funzionano anche ",e.jsx(i.a,{href:"?path=/docs/documentazione-componenti-bottoni--page#varianti-di-colore",children:"tutte le varianti"})," già disponibili per i bottoni."]}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(i.h4,{id:"dropdown-link",children:"Dropdown link"}),`
`,e.jsxs(i.p,{children:["Si può utilizzare ",e.jsx(i.code,{children:"DropdownToggle"})," anche con un anchor link:"]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(i.h3,{id:"dropdown-menu",children:"Dropdown menu"}),`
`,e.jsx(i.p,{children:"Le voci del menu che viene aperto al click sul bottone possono essere personalizzate, così come il menù stesso."}),`
`,e.jsx(i.h4,{id:"menu-voci-attive",children:"Menu voci attive"}),`
`,e.jsxs(i.p,{children:["Aggiungere l'attributo ",e.jsx(i.code,{children:"active"})," ai ",e.jsx(i.code,{children:"LinkListItem"})," del dropdown che si vogliono mostrare come attivi. Per questioni di accessibilità è consigliabile aggiungere ",e.jsx(i.code,{children:'<span class="visually-hidden"> attivo</span>'})," in coda al testo degli elementi attivi."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(i.h4,{id:"menu-voci-disabilitate",children:"Menu voci disabilitate"}),`
`,e.jsxs(i.p,{children:["Aggiungere l'attributo ",e.jsx(i.code,{children:"disabled"})," ai ",e.jsx(i.code,{children:"LinkListItem"})," del dropdown che si vogliono mostrare come disabilitati. Includere anche la proprietà ",e.jsx(i.code,{children:'aria-disabled="true"'})," per comunicare lo stato disabilitato agli utenti dotati di screen reader."]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h4,{id:"menu-headers-e-separatori",children:"Menu headers e separatori"}),`
`,e.jsx(i.p,{children:"All’interno del menu dropdown possono essere inseriti header e separatori."}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(i.h4,{id:"menu-con-voci-large",children:"Menu con voci large"}),`
`,e.jsxs(i.p,{children:["Per aumentare la dimensione dei link contenuti nel dropdown è sufficiente aggiungere agli stessi l'attributo ",e.jsx(i.code,{children:"size='large'"}),"."]}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(i.h4,{id:"menu-full-width",children:"Menu full width"}),`
`,e.jsxs(i.p,{children:["Per ottenere un dropdown menu largo quanto l’elemento che contiene il dropdown button è sufficiente aggiungere la classe",e.jsx(i.code,{children:".full-width"})," al componente ",e.jsx(i.code,{children:"DropdownMenu"}),". I link e testi contenuti al suo interno saranno disposti in orizzontale."]}),`
`,e.jsx(n,{of:v}),`
`,e.jsx(i.h4,{id:"menu-icona-a-destra",children:"Menu icona a destra"}),`
`,e.jsxs(i.p,{children:["Ai ",e.jsx(i.code,{children:"LinkListItem"})," contenuti nel menù può essere aggiunta un’icona illustrativa allineata a destra utilizzando le classi ",e.jsx(i.code,{children:".right-icon"})," sul componente ",e.jsx(i.code,{children:"LinkListItem"})," e ",e.jsx(i.code,{children:".right"})," sul componente ",e.jsx(i.code,{children:"Icon"}),"."]}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(i.h4,{id:"menu-icona-a-sinistra",children:"Menu icona a sinistra"}),`
`,e.jsxs(i.p,{children:["Ai ",e.jsx(i.code,{children:"LinkListItem"})," contenuti nel menù può essere aggiunta un’icona illustrativa allineata a sinistra utilizzando le classi ",e.jsx(i.code,{children:".left-icon"})," sul componente ",e.jsx(i.code,{children:"LinkListItem"})," e ",e.jsx(i.code,{children:".left"})," sul componente ",e.jsx(i.code,{children:"Icon"}),"."]}),`
`,e.jsx(n,{of:w}),`
`,e.jsx(i.h4,{id:"menu-dark",children:"Menu dark"}),`
`,e.jsxs(i.p,{children:["Aggiungendo la classe ",e.jsx(i.code,{children:".dark"})," al componente ",e.jsx(i.code,{children:"DropdownMenu"})," si ottiene una versione in negativo del menu, con link ed elementi interni declinati di conseguenza."]}),`
`,e.jsx(n,{of:b}),`
`,e.jsx(i.h3,{id:"informazioni-aggiuntive",children:"Informazioni aggiuntive"}),`
`,e.jsxs(i.p,{children:["Per consultare altri esempi, vedere l’utilizzo di una dropdown con interi form al suo interno, capire meglio come utilizzare attributi di Bootstrap 5.3, si rimanda alla documentazione sul sito di ",e.jsx(i.a,{href:"https://reactstrap.github.io/?path=/docs/components-dropdown--dropdown",rel:"nofollow",children:"reactstrap (v9)"})," e ",e.jsx(i.a,{href:"https://getbootstrap.com/docs/5.3/components/dropdowns/",rel:"nofollow",children:"Bootstrap"}),"."]}),`
`,e.jsx(i.h2,{id:"argomenti-componente",children:"Argomenti componente"}),`
`,e.jsx(i.h3,{id:"dropdown-1",children:"Dropdown"}),`
`,e.jsx(t,{of:k}),`
`,e.jsx(i.h3,{id:"dropdowntoggle",children:"DropdownToggle"}),`
`,e.jsx(t,{of:D}),`
`,e.jsx(i.h3,{id:"dropdownmenu",children:"DropdownMenu"}),`
`,e.jsx(t,{of:I})]})}function ee(o={}){const{wrapper:i}={...d(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(a,{...o})}):a(o)}export{ee as default};
