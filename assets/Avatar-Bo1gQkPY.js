import{j as e}from"./jsx-runtime-DezihaCc.js";import{useMDXComponents as h}from"./index-BtoTqJlz.js";import{M as x,C as a,d as i,e as j,f as u,A as r}from"./index-DQ1boyZV.js";import{A as m,a as c,b as d,c as v,d as A,e as g,f}from"./Avatar.stories-DLDxU5Dm.js";import{U as z,a as b,A as I,b as C}from"./AvatarBehaviour.stories-CWjVc9J_.js";import{AvatarSmallList as R,AvatarMediaList as T}from"./AvatarGroupsList.stories-357j_HlF.js";import{M as S,S as L,A as w}from"./AvatarGroupsOverlapping.stories-BfoRiFcY.js";import{C as s,a as t}from"./CalloutText-C98nfp7D.js";import{C as l}from"./CalloutTitle-DHbim7Vs.js";import{A as P,a as M}from"./AvatarWrapper-Ct7SoGAt.js";import{A as y}from"./AvatarIcon-sxZuOOIz.js";import"./index-BFWcBMrj.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-d7HZv50p.js";import"../sb-preview/runtime.js";import"./index-qAjVnZy2.js";import"./index-DKz4l_X4.js";import"./index-B_J8iUie.js";import"./inheritsLoose-B7h9gheN.js";import"./index-DLle_QMf.js";import"./index-DrFu-skq.js";import"./Icon-Dn2FEDq_.js";import"./index-Bl6ORisp.js";import"./UncontrolledTooltip-DsP5hi4G.js";import"./index-D3ylJrlI.js";import"./TooltipPopoverWrapper-D_sHTsDg.js";import"./utils-AMtBH2Nr.js";import"./popper-BAn7w8_p.js";import"./utils-CUovxYU2.js";import"./Fade-DLDWECFI.js";import"./Transition-GxAQdkDD.js";import"./LinkListItem-CJpjZu_u.js";import"./DropdownToggle-BdTyHQJO.js";import"./Button-BvsBu0Bj.js";import"./Button-Cn4Lrs6w.js";import"./DropdownMenu-B_Gh5UIE.js";function p(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...h(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:m}),`
`,e.jsx(n.h1,{id:"avatar",children:"Avatar"}),`
`,e.jsx(n.h2,{id:"rappresentazione-grafica-di-unimmagine-utente",children:"Rappresentazione grafica di un’immagine utente"}),`
`,e.jsx(n.p,{children:"L’elemento Avatar è la rappresentazione grafica di un utente e può includere un’immagine, un testo, un’icona o un dropdown con ulteriori contenuti."}),`
`,e.jsx(n.p,{children:"Gli Avatar sono disponibili in sei diverse dimensioni:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["xs con attributo ",e.jsx(n.code,{children:'size="xs"'})]}),`
`,e.jsxs(n.li,{children:["sm con attributo ",e.jsx(n.code,{children:'size="sm"'})]}),`
`,e.jsxs(n.li,{children:["md (dimensioni di default) ",e.jsx(n.code,{children:'size="md"'})]}),`
`,e.jsxs(n.li,{children:["lg con attributo ",e.jsx(n.code,{children:'size="lg"'})]}),`
`,e.jsxs(n.li,{children:["xl con attributo ",e.jsx(n.code,{children:'size="xl"'})]}),`
`,e.jsxs(n.li,{children:["xxl con attributo ",e.jsx(n.code,{children:'size="xxl"'})]}),`
`]}),`
`,e.jsx("div",{className:"docs",children:e.jsxs(s,{color:"success",children:[e.jsx(l,{children:e.jsx("span",{className:"text",children:"Accessibilità delle immagini"})}),e.jsx(t,{children:"Per ragioni di accessibilità è importante indicare all’interno dell’Avatar il nome dell’utente associato allo stesso."}),e.jsx(t,{children:e.jsxs(n.p,{children:["Nel caso di Avatar con immagine è consigliabile utilizzare l’attributo ",e.jsx(a,{children:'alt=""'})," della stessa."]})}),e.jsx(t,{children:e.jsxs(n.p,{children:["Un Avatar con testo conterrà uno ",e.jsx(a,{children:"<span>"}),` per soli screen reader con il nome dell’utente indicato per esteso:\r
`,e.jsx(a,{children:'<span class="visually-hidden">Nome Utente</span>'}),"."]})}),e.jsx(t,{children:e.jsxs(n.p,{children:["Per gli Avatar con icona inserire un testo alternativo: ",e.jsx(a,{children:'<span class="visually-hidden">Testo icona</span>'}),"."]})})]})}),`
`,e.jsx(n.h3,{id:"avatar-con-immagine",children:"Avatar con immagine"}),`
`,e.jsx(n.p,{children:"L’Avatar ridimensiona automaticamente l’immagine adattandola al formato circolare e centrandola. Si consiglia in ogni caso di utilizzare immagini delle dimensioni corrette."}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(j,{of:c}),`
`,e.jsx(n.h3,{id:"avatar-con-testo",children:"Avatar con testo"}),`
`,e.jsx(n.p,{children:"Avatar con testo"}),`
`,e.jsx(n.p,{children:"La versione con testo contiene le iniziali dell’utente (una sola nel caso delle dimensioni xs ed sm). Oltre ai colori di default è possibile utilizzare uno sfondo a scelta fra:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Primario: aggiungendo l'attributo ",e.jsx(n.code,{children:'color="primary"'})," al componente ",e.jsx(n.code,{children:"AvatarIcon"})]}),`
`,e.jsxs(n.li,{children:["Secondario: aggiungendo l'attributo ",e.jsx(n.code,{children:'color="secondary"'})," al componente ",e.jsx(n.code,{children:"AvatarIcon"})]}),`
`,e.jsxs(n.li,{children:["Verde: aggiungendo l'attributo ",e.jsx(n.code,{children:'color="green"'})," al componente ",e.jsx(n.code,{children:"AvatarIcon"})]}),`
`,e.jsxs(n.li,{children:["Arancione: aggiungendo l'attributo ",e.jsx(n.code,{children:'color="orange"'})," al componente ",e.jsx(n.code,{children:"AvatarIcon"})]}),`
`,e.jsxs(n.li,{children:["Rosso: aggiungendo l'attributo ",e.jsx(n.code,{children:'color="red"'})," al componente ",e.jsx(n.code,{children:"AvatarIcon"})]}),`
`]}),`
`,e.jsx(n.p,{children:"In questi casi il testo sarà di colore bianco."}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(n.h3,{id:"avatar-con-icona",children:"Avatar con icona"}),`
`,e.jsxs(n.p,{children:["Per utilizzare un’icona all’interno degli Avatar è sufficiente includere il codice dell’icona prescelta dalla ",e.jsx(n.a,{href:"?path=/docs/documentazione-utilities-icone--page#lista-delle-icone-disponibili",children:"libreria icone"})," e indicarne il colore con una delle classi disponibili."]}),`
`,e.jsx(i,{of:v}),`
`,e.jsx(n.h3,{id:"avatar-link",children:"Avatar Link"}),`
`,e.jsxs(n.p,{children:["Per associare un Avatar ad una navigazione, è possible inserire componenti di navigazione al suo interno, oppure sfruttare l'attributo ",e.jsx(n.code,{children:"href"}),":"]}),`
`,e.jsx(i,{of:A}),`
`,e.jsx(n.h4,{id:"avatar-link-con-tooltip",children:"Avatar Link con Tooltip"}),`
`,e.jsxs(n.p,{children:["E’ possibile associare un Tooltip con maggiori informazioni relative all’utente o all’azione associata utilizzando il componente ",e.jsx(n.code,{children:"Tooltip"})," del kit."]}),`
`,e.jsx(i,{of:g}),`
`,e.jsx(n.h4,{id:"codice",children:"Codice"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {useRef} from "react";\r
import {AvatarContainer} from "./AvatarContainer";\r
import {AvatarIcon} from "./AvatarIcon";\r
const withImageRef = useRef(null);\r
const withTextRef = useRef(null);\r
const withIconRef = useRef(null);\r
return (\r
    <AvatarContainer>\r
        <AvatarIcon size="xl" href="#" innerRef={withImageRef}>\r
            <UncontrolledTooltip placement="left" target={withImageRef}>\r
                Anna Barbieri\r
                <br />\r
                <i>Administrator</i>\r
            </UncontrolledTooltip>\r
            <img src="https://randomuser.me/api/portraits/women/41.jpg" alt="Anna Barbieri"></img>\r
        </AvatarIcon>\r
        <AvatarIcon size="xl" color="red" href="#" innerRef={withTextRef}>\r
            <UncontrolledTooltip placement="top" target={withTextRef}>\r
                Mario Rossi\r
                <br />\r
                <i>Editor</i>\r
            </UncontrolledTooltip>\r
            <p aria-hidden="true">MR</p>\r
            <span className="visually-hidden">Mario Rossi</span>\r
        </AvatarIcon>\r
        <AvatarIcon size="xl" href="#" innerRef={withIconRef}>\r
            <Icon icon="it-search" />\r
            <UncontrolledTooltip placement="right" target={withIconRef}>\r
                Search\r
                <br />\r
                <i>News Archive</i>\r
            </UncontrolledTooltip>\r
        </AvatarIcon>\r
    </AvatarContainer>\r
);
`})}),`
`,e.jsx(n.h2,{id:"gruppi-di-avatar",children:"Gruppi di Avatar"}),`
`,e.jsx(n.p,{children:"Gli Avatar possono essere raggruppati in liste verticali ed orizzontali."}),`
`,e.jsx(n.h3,{id:"lista",children:"Lista"}),`
`,e.jsxs(n.p,{children:["Utilizzando un componente ",e.jsx(n.code,{children:"LinkList"})," con l'attributo ",e.jsx(n.code,{children:"avatar"})," si ottiene una lista verticale con Avatar affiancati da link e testi."]}),`
`,e.jsx(n.h4,{id:"lista-piccola",children:"Lista piccola"}),`
`,e.jsxs(n.p,{children:["Lista verticale di Avatar di dimensione piccola con attributo ",e.jsx(n.code,{children:'size="sm"'}),"."]}),`
`,e.jsx(i,{of:R}),`
`,e.jsx(n.h4,{id:"lista-media",children:"Lista media"}),`
`,e.jsxs(n.p,{children:["Lista verticale di Avatar di dimensione media con attributo ",e.jsx(n.code,{children:'size="md"'}),"."]}),`
`,e.jsx(i,{of:T}),`
`,e.jsx(n.h3,{id:"avatar-sovrapposti",children:"Avatar Sovrapposti"}),`
`,e.jsxs(n.p,{children:["Racchiudendo una serie di Avatar in un componente ",e.jsx(n.code,{children:"AvatarGroupContainer"})," questi verranno visualizzati come una lista orizzontale in cui i singoli elementi sono parzialmente sovrapposti. In questo tipo di gruppo è possibile aggiungere un componente ",e.jsx(n.code,{children:"Dropdown"})," per racchiudere ulteriori elementi Avatar."]}),`
`,e.jsx(n.h4,{id:"avatar-sovrapposti-piccoli",children:"Avatar Sovrapposti Piccoli"}),`
`,e.jsxs(n.p,{children:["Gruppo di Avatar sovrapposti di dimensione piccola con attributo ",e.jsx(n.code,{children:'size="xs"'}),"."]}),`
`,e.jsx(i,{of:S}),`
`,e.jsx(n.h4,{id:"avatar-sovrapposti-medi",children:"Avatar Sovrapposti Medi"}),`
`,e.jsxs(n.p,{children:["Gruppo di Avatar sovrapposti di dimensione media con attributo ",e.jsx(n.code,{children:'size="md"'}),"."]}),`
`,e.jsx(i,{children:e.jsx(u,{id:"componenti-avatar-avatar-groups-overlapping--medium-overlaid-avatars"})}),`
`,e.jsx(i,{of:L}),`
`,e.jsx(n.h2,{id:"comportamento",children:"Comportamento"}),`
`,e.jsx(n.h3,{id:"presenza-utente",children:"Presenza utente"}),`
`,e.jsxs(n.p,{children:["Affiancando un componente ",e.jsx(n.code,{children:"AvatarIcon"})," con il componente ",e.jsx(n.code,{children:"AvatarPresence"})," all'interno di un componente ",e.jsx(n.code,{children:"AvatarWrapper"})," si ottiene un indicatore dello stato di presenza dell’utente:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["lo stato attivo si ottiene impostando l'attributo ",e.jsx(n.code,{children:"presence"})," su ",e.jsx(n.code,{children:"active"})]}),`
`,e.jsxs(n.li,{children:["lo stato non disponibile si ottiene aggiungendo l'attributo ",e.jsx(n.code,{children:"presence"})," su ",e.jsx(n.code,{children:"busy"})]}),`
`,e.jsxs(n.li,{children:["lo stato invisibile si ottiene aggiungendo l'attributo ",e.jsx(n.code,{children:"presence"})," su ",e.jsx(n.code,{children:"hidden"})]}),`
`]}),`
`,e.jsx("div",{className:"docs",children:e.jsxs(s,{color:"success",children:[e.jsx(l,{children:e.jsx("span",{className:"text",children:"Accessibilità della presenza"})}),e.jsxs(t,{children:[e.jsx("p",{children:e.jsxs(n.p,{children:["Inserire un ",e.jsx(a,{children:"<span>"}),` riservato agli screen reader con indicazione della presenza dell’utente nel componente\r
`,e.jsx(a,{children:"AvatarPresence"}),"."]})}),e.jsx("p",{children:e.jsxs(n.p,{children:["Ad esempio: ",e.jsx(a,{children:'<span class="visually-hidden">Presenza: (stato presenza)</span>'}),"."]})})]})]})}),`
`,e.jsx(i,{of:z}),`
`,e.jsx(n.h3,{id:"status-utente",children:"Status utente"}),`
`,e.jsxs(n.p,{children:["Affiancando un componente ",e.jsx(n.code,{children:"AvatarIcon"})," con il componente ",e.jsx(n.code,{children:"AvatarStatus"})," all'interno di un componente ",e.jsx(n.code,{children:"AvatarWrapper"})," si ottiene un indicatore dello stato dell'account utente:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["lo stato attivo si ottiene impostando l'attributo ",e.jsx(n.code,{children:"status"})," su ",e.jsx(n.code,{children:"approved"})]}),`
`,e.jsxs(n.li,{children:["lo stato non disponibile si ottiene aggiungendo l'attributo ",e.jsx(n.code,{children:"status"})," su ",e.jsx(n.code,{children:"declined"})]}),`
`,e.jsxs(n.li,{children:["lo stato invisibile si ottiene aggiungendo l'attributo ",e.jsx(n.code,{children:"status"})," su ",e.jsx(n.code,{children:"notify"})]}),`
`]}),`
`,e.jsx("div",{className:"docs",children:e.jsxs(s,{color:"success",children:[e.jsx(l,{children:e.jsx("span",{className:"text",children:"Accessibilità dello status"})}),e.jsxs(t,{children:[e.jsx("p",{children:e.jsxs(n.p,{children:["Inserire un ",e.jsx(a,{children:"<span>"}),` riservato agli screen reader con indicazione della presenza dell’utente nel componente\r
`,e.jsx(a,{children:"AvatarStatus"}),"."]})}),e.jsx("p",{children:e.jsxs(n.p,{children:["Ad esempio: ",e.jsx(a,{children:'<span class="visually-hidden">Status: (stato utenza)</span>'}),"."]})})]})]})}),`
`,e.jsx(i,{of:b}),`
`,e.jsx(n.h2,{id:"avatar-con-testo-aggiuntivo",children:"Avatar con testo aggiuntivo"}),`
`,e.jsxs(n.p,{children:["Per ottenere una versione più completa dell’Avatar con nome esteso ed eventuale testo accessorio affiancare un componente ",e.jsx(n.code,{children:"AvatarIcon"})," con il componente ",e.jsx(n.code,{children:"AvatarExtraText"}),", in cui aggiungere il testo esteso, all'interno di un componente ",e.jsx(n.code,{children:"AvatarWrapper"}),"."]}),`
`,e.jsxs(n.p,{children:["Per il nome è possibile utilizzare i tag ",e.jsx(n.code,{children:"<h3>"})," o ",e.jsx(n.code,{children:"<h4>"}),". Il testo esteso può essere contenuto in un ",e.jsx(n.code,{children:"<p>"})," o in un tag ",e.jsx(n.code,{children:"<time>"})," nel caso di date/orari."]}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(n.h2,{id:"argomenti-componente",children:"Argomenti componente"}),`
`,e.jsx(n.h3,{id:"avatarcontainer",children:"AvatarContainer"}),`
`,e.jsx(r,{of:P}),`
`,e.jsx(n.h3,{id:"avataricon",children:"AvatarIcon"}),`
`,e.jsx(r,{of:y}),`
`,e.jsx(n.h3,{id:"avatargroupcontainer",children:"AvatarGroupContainer"}),`
`,e.jsx(r,{of:w}),`
`,e.jsx(n.h3,{id:"avatarwrapper",children:"AvatarWrapper"}),`
`,e.jsx(r,{of:M}),`
`,e.jsx(n.h3,{id:"avatarpresence",children:"AvatarPresence"}),`
`,e.jsx(r,{of:I}),`
`,e.jsx(n.h3,{id:"avatarstatus",children:"AvatarStatus"}),`
`,e.jsx(r,{of:C}),`
`,e.jsx(n.h3,{id:"avatarextratext",children:"AvatarExtraText"}),`
`,e.jsx(r,{of:f})]})}function ue(o={}){const{wrapper:n}={...h(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(p,{...o})}):p(o)}export{ue as default};
