import{j as e}from"./jsx-runtime-DezihaCc.js";import{useMDXComponents as s}from"./index-BtoTqJlz.js";import{M as t,d as n}from"./index-DQ1boyZV.js";import{P as r,E as l,S as c,A as d,R as p,M as m,a as u,J as h,b as g,L as x,T as j}from"./Pager.stories--wL5EznP.js";import"./index-BFWcBMrj.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-d7HZv50p.js";import"../sb-preview/runtime.js";import"./index-qAjVnZy2.js";import"./index-DKz4l_X4.js";import"./index-B_J8iUie.js";import"./inheritsLoose-B7h9gheN.js";import"./index-DLle_QMf.js";import"./index-DrFu-skq.js";import"./index-Bl6ORisp.js";import"./index-D3ylJrlI.js";import"./utils-CUovxYU2.js";import"./Form-BOkbrBXv.js";import"./FormGroup-B-MqxR9s.js";import"./Label-fWy_qovk.js";import"./Icon-Dn2FEDq_.js";import"./DropdownToggle-BdTyHQJO.js";import"./popper-BAn7w8_p.js";import"./Button-BvsBu0Bj.js";import"./Button-Cn4Lrs6w.js";import"./DropdownMenu-B_Gh5UIE.js";import"./LinkListItem-CJpjZu_u.js";import"./Input-CLSFLk54.js";import"./index-GAri5u7x.js";import"./utils-Dujee42i.js";function a(o){const i={code:"code",h1:"h1",h2:"h2",p:"p",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:r}),`
`,e.jsx(i.h1,{id:"paginazione",children:"Paginazione"}),`
`,e.jsx(i.h2,{id:"esempio",children:"Esempio"}),`
`,e.jsxs(i.p,{children:["A seguire il componente ",e.jsx(i.code,{children:"Pager"}),", utile per indicare una serie di contenuti correlati tra più pagine."]}),`
`,e.jsx(n,{of:l}),`
`,e.jsx(i.h2,{id:"stato-disabilitato-e-attivo",children:"Stato disabilitato e attivo"}),`
`,e.jsxs(i.p,{children:["I link della paginazione assumonono uno stato disabilitato usando l'attributo ",e.jsx(i.code,{children:"disabled"})," sul componente ",e.jsx(i.code,{children:"<PagerItem>"}),`.\r
Per indicare la pagina attiva corrente utilizzare l’attributo `,e.jsx(i.code,{children:'aria-current="page"'})," sul componente ",e.jsx(i.code,{children:"<PagerLink>"}),", l’aspetto grafico cambierà di conseguenza."]}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(i.h2,{id:"allineamento",children:"Allineamento"}),`
`,e.jsxs(i.p,{children:["Per centrare la navigazione aggiungere la classe ",e.jsx(i.code,{children:"justify-content-center"})," al ",e.jsx(i.code,{children:"<Pager>"}),"."]}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(i.h2,{id:"responsive",children:"Responsive"}),`
`,e.jsx(i.p,{children:"Con i dovuti accorgimenti precedentemente elencati e inserendo alcune classi delle utilità display si può trasformare la paginazione in base alla risoluzione del dispositivo in uso dell'utente."}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(i.h2,{id:"more",children:"More"}),`
`,e.jsxs(i.p,{children:[`Quando è presente un grande numero di pagine è consigliabile visualizzare unicamente le pagine più prossime a quella corrente, inserendo delle ellissi (…) fra queste e la prima ed ultima pagina.\r
Non essendo collegate a nessuna pagina le ellissi vanno inserite in un tag `,e.jsx(i.code,{children:"<span>"}),"."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(i.h2,{id:"changer",children:"Changer"}),`
`,e.jsx(i.p,{children:"Per velocizzare la navigazione è possibile inserire un menu “Page changer”."}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(i.h2,{id:"jump-to-page",children:"Jump To Page"}),`
`,e.jsx(i.p,{children:"Con l’elemento aggiuntivo “Jump to page” l’utente può specificare un numero di pagina concreto."}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(i.h2,{id:"simple-mode",children:"Simple Mode"}),`
`,e.jsx(i.p,{children:`La paginazione in versione “Simple mode” è ottimizzata per i dispositivi mobile.\r
Può essere utilizzata anche su tablet e desktop quando il numero di pagine è ridotto.`}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(i.h2,{id:"link-testuali",children:"Link Testuali"}),`
`,e.jsxs(i.p,{children:[`Le icone chevron utilizzate come link di navigazione possono essere sostituite da link testuali come “precedente” e “successiva”.\r
In tal caso al `,e.jsx(i.code,{children:"<PagerLink>"})," contenente il testo dovrà essere aggiunta la classe ",e.jsx(i.code,{children:".text"}),". Es: ",e.jsx(i.code,{children:'<PagerLink className="text">Precedente</PagerLink>'}),". Notare come sia stato inserito il testo “Pagina” in un elemento ",e.jsx(i.code,{children:'<span class="visually-hidden">'})," invisibile su schermo ma enunciabile dagli screen reader per facilitare la comprensione agli utenti che utilizzano tecnologie assistive."]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h2,{id:"total-number",children:"Total Number"}),`
`,e.jsxs(i.p,{children:["Aggiungendo la classe ",e.jsx(i.code,{children:".pagination-total"})," al componente ",e.jsx(i.code,{children:"<Pager>"})," che contiene la paginazione è possibile indicare il numero totale di pagine all’interno di un componente ",e.jsx(i.code,{children:"<p>"})," collocato prima della chiusura del ",e.jsx(i.code,{children:'<ul className="pagination">'}),"."]}),`
`,e.jsx(n,{of:j})]})}function U(o={}){const{wrapper:i}={...s(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(a,{...o})}):a(o)}export{U as default};
