import{j as n}from"./jsx-runtime-DezihaCc.js";import{useMDXComponents as o}from"./index-BtoTqJlz.js";import{M as t,d as l}from"./index-DQ1boyZV.js";import{S as a,_ as s}from"./Skiplink.stories-H-dYkq2Z.js";import"./index-BFWcBMrj.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-d7HZv50p.js";import"../sb-preview/runtime.js";import"./index-qAjVnZy2.js";import"./index-DKz4l_X4.js";import"./index-B_J8iUie.js";import"./inheritsLoose-B7h9gheN.js";import"./index-DLle_QMf.js";import"./index-DrFu-skq.js";import"./index-Bl6ORisp.js";function r(i){const e={code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:a}),`
`,n.jsx(e.h1,{id:"skiplinks",children:"Skiplinks"}),`
`,n.jsx(e.h2,{id:"gli-skiplink-sono-collegamento-interno-alla-pagina-che-consentono-agli-utenti-di-accedere-direttamente-al-contenuto-principale-della-pagina-saltando-il-menu-di-navigazione",children:"Gli Skiplink sono collegamento interno alla pagina che consentono agli utenti di accedere direttamente al contenuto principale della pagina saltando il menu di navigazione."}),`
`,n.jsx(e.p,{children:"È un componente particolarmente utile per coloro che accedono con screen reader e/o da tastiera."}),`
`,n.jsxs(e.p,{children:["Gli elementi ",n.jsx(e.code,{children:"SkiplinkItem"})," sono contraddistinti dalle classi:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"visually-hidden"}),": renderizzati solo per gli screen reader. Sempre applicato."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"visually-hidden-focusable"}),": renderizzati solo al focus. Controllato dall'attributo ",n.jsx(e.code,{children:"focusable"}),"."]}),`
`]}),`
`,n.jsx(e.p,{children:"Per attivare la funzionalità si digita da tastiera il tasto: TAB."}),`
`,n.jsx(l,{of:s}),`
`,n.jsx(e.h4,{id:"codice",children:"Codice"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Skiplink } from './Skiplink';\r
import { SkiplinkItem } from './SkiplinkItem';\r
import { useEffect, useRef } from 'react';\r
const containerRef = useRef(null);\r
\r
const footerRef = useRef(null);\r
\r
useEffect(() => {\r
  // We focus the container here since it is hosted inside Storybook's iframe\r
  // @ts-ignore: with no types annotated, never is inferred here\r
  containerRef.current?.focus();\r
}, []);\r
\r
const onClick = () => {\r
  // @ts-ignore: with no types annotated, never is inferred here\r
  footerRef.current?.scrollIntoView();\r
};\r
\r
return (\r
  <section tabIndex={-1} ref={containerRef}>\r
    <div id='#main' />\r
    <div id='#footer' ref={footerRef} />\r
\r
    <Skiplink>\r
      <SkiplinkItem href='#main'>Skip to main content</SkiplinkItem>\r
      <SkiplinkItem onClick={onClick}>Skip to footer</SkiplinkItem>\r
    </Skiplink>\r
  </section>\r
);
`})})]})}function I(i={}){const{wrapper:e}={...o(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(r,{...i})}):r(i)}export{I as default};
