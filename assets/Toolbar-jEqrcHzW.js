import{j as e}from"./jsx-runtime-DezihaCc.js";import{useMDXComponents as a}from"./index-BtoTqJlz.js";import{M as l,d as i}from"./index-DQ1boyZV.js";import{T as d,E as t,a as s,b as c,c as p,d as m,e as h,f as x,g as j,h as u,i as b,j as v,k as g,l as f}from"./Toolbar.stories-Dvy0QulG.js";import"./index-BFWcBMrj.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-d7HZv50p.js";import"../sb-preview/runtime.js";import"./index-qAjVnZy2.js";import"./index-DKz4l_X4.js";import"./index-B_J8iUie.js";import"./inheritsLoose-B7h9gheN.js";import"./index-DLle_QMf.js";import"./index-DrFu-skq.js";import"./index-Bl6ORisp.js";import"./Icon-Dn2FEDq_.js";import"./index-D3ylJrlI.js";import"./utils-AMtBH2Nr.js";import"./utils-CUovxYU2.js";import"./Button-Cn4Lrs6w.js";import"./DropdownMenu-B_Gh5UIE.js";import"./LinkListItem-CJpjZu_u.js";function r(n){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:d}),`
`,e.jsx(o.h1,{id:"toolbar",children:"Toolbar"}),`
`,e.jsx(o.p,{children:"Elemento contenitore di link, bottoni o dropdown"}),`
`,e.jsxs(o.p,{children:["L’elemento Toolbar è un contenitore di link, bottoni o dropdown. Consiste in un elenco ",e.jsx(o.code,{children:"Toolbar"})," con tanti elementi ",e.jsx(o.code,{children:"ToolbarItem"})," quante sono le voci richieste."]}),`
`,e.jsx(o.h3,{id:"dimensioni",children:"Dimensioni"}),`
`,e.jsx(o.p,{children:"La Toolbar si adatta automaticamente in larghezza al suo contenitore. È consigliabile utilizzare contenitori di dimensione orizzontale (o verticale, nel caso del Toolbar verticale) ridotta, per evitare che gli elementi si disperdano in uno spazio troppo ampio."}),`
`,e.jsx(o.p,{children:"Per ottimizzare lo spazio disponibile l’elemento è fornito in tre versioni: grande, media e piccola."}),`
`,e.jsx(o.h2,{id:"componente-toolbar",children:"Componente Toolbar"}),`
`,e.jsx(o.p,{children:"La versione predefinita dell’elemento è quella con icone grandi e label."}),`
`,e.jsx(i,{of:t}),`
`,e.jsx(o.h3,{id:"versione-media",children:"Versione media"}),`
`,e.jsxs(o.p,{children:["Applicando un attributo aggiuntivao ",e.jsx(o.code,{children:'size="medium"'})," alla ",e.jsx(o.code,{children:"Toolbar"})," si ottiene una versione di dimensioni medie."]}),`
`,e.jsxs(o.p,{children:["In questo caso le label, nascoste visivamente, saranno contenute in uno ",e.jsx(o.code,{children:"<span>"})," con classe ",e.jsx(o.code,{children:".visually-hidden"}),", per rendere disponibile la descrizione agli screen reader."]}),`
`,e.jsx(i,{of:s}),`
`,e.jsx(o.h3,{id:"versione-piccola",children:"Versione piccola"}),`
`,e.jsxs(o.p,{children:["Applicando un attributo aggiuntivao ",e.jsx(o.code,{children:'size="small"'})," alla ",e.jsx(o.code,{children:"Toolbar"})," si ottiene una versione di dimensioni piccola."]}),`
`,e.jsxs(o.p,{children:["In questo caso le label, nascoste visivamente, saranno contenute in uno ",e.jsx(o.code,{children:"<span>"})," con classe ",e.jsx(o.code,{children:".visually-hidden"}),", per rendere disponibile la descrizione agli screen reader."]}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(o.h3,{id:"stato-degli-elementi",children:"Stato degli elementi"}),`
`,e.jsxs(o.p,{children:["Al componente ",e.jsx(o.code,{children:"ToolbarItem"})," dell’elemento attivo va applicata l'attributo ",e.jsx(o.code,{children:"active"}),"."]}),`
`,e.jsxs(o.p,{children:["Gli elementi disabilitati avranno invece un attributo ",e.jsx(o.code,{children:"disabled"}),". Il componente provvederà agli accorgimenti relativi all'accessibilità."]}),`
`,e.jsx(o.h2,{id:"divisori",children:"Divisori"}),`
`,e.jsxs(o.p,{children:["Per aggiungere degli elementi divisori fra gli elementi utilizzare il componente ",e.jsx(o.code,{children:"ToolbarItemDivider"}),"."]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(o.h2,{id:"toolbar-con-badge",children:"Toolbar con Badge"}),`
`,e.jsx(o.p,{children:"I Badge possono essere utilizzati per indicare contenuti non letti o alert di vario tipo."}),`
`,e.jsx(o.h3,{id:"grande-con-badge",children:"Grande con Badge"}),`
`,e.jsx(o.p,{children:"Nella versione grande i Badge possono contenere dei numeri. È possibile specificare una label che verrà mostrata agli screen reader."}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(o.h3,{id:"media-con-badge",children:"Media con Badge"}),`
`,e.jsx(o.p,{children:"Nella versione media i badge non contengono numeri ma possono essere usati come alert generici. Il numero dei contenuti non letti o nuovi va indicato all’interno della label che verrà mostrata agli screen reader."}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(o.h3,{id:"piccola-con-badge",children:"Piccola con Badge"}),`
`,e.jsx(o.p,{children:"Nella versione piccola i Badge non contengono numeri ma possono essere usati come alert generici. Il numero dei contenuti non letti o nuovi va indicato all’interno della label che verrà mostrata agli screen reader."}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(o.h2,{id:"toolbar-con-dropdown",children:"Toolbar con Dropdown"}),`
`,e.jsx(o.p,{children:"All’interno della Toolbar è possibile implementare dei bottoni dropdown con relativo sottomenù."}),`
`,e.jsxs(o.p,{children:["Per definire un comportamento con dropdown per il componente ",e.jsx(o.code,{children:"ToolbarItem"})," è necessario aggiungere l'attributo ",e.jsx(o.code,{children:"dropdown"})," al componente. Tramite l'attributo ",e.jsx(o.code,{children:"dropdownProps"}),` è possibile inoltrare degli attributi per il dropdown usato internamente.\r
Infine definire il contenuto del dropdown come JSX all'interno del componente `,e.jsx(o.code,{children:"ToolbarItem"}),"."]}),`
`,e.jsx(o.h3,{id:"grande-con-dropdown",children:"Grande con Dropdown"}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(o.h3,{id:"medio-con-dropdown",children:"Medio con Dropdown"}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(o.h3,{id:"piccolo-con-dropdown",children:"Piccolo con Dropdown"}),`
`,e.jsx(i,{of:b}),`
`,e.jsx(o.h2,{id:"toolbar-verticale",children:"Toolbar verticale"}),`
`,e.jsxs(o.p,{children:["Applicando un attributo ",e.jsx(o.code,{children:"vertical"})," alla Toolbar gli elementi vengono visualizzati in colonna."]}),`
`,e.jsx(o.h3,{id:"grande-verticale",children:"Grande verticale"}),`
`,e.jsx(i,{of:v}),`
`,e.jsx(o.h3,{id:"medio-verticale",children:"Medio verticale"}),`
`,e.jsx(i,{of:g}),`
`,e.jsx(o.h3,{id:"piccolo-verticale",children:"Piccolo verticale"}),`
`,e.jsx(i,{of:f})]})}function J(n={}){const{wrapper:o}={...a(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(r,{...n})}):r(n)}export{J as default};
