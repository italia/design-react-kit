import{j as e}from"./jsx-runtime-DezihaCc.js";import{useMDXComponents as i}from"./index-BtoTqJlz.js";import{M as s,d as r}from"./index-DQ1boyZV.js";import{P as p,E as a,D as l,T as c,M as d,C as v,a as u}from"./Popover.stories-p-BttshL.js";import{C as g,a as m}from"./CalloutText-C98nfp7D.js";import{C as h}from"./CalloutTitle-DHbim7Vs.js";import"./index-BFWcBMrj.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-d7HZv50p.js";import"../sb-preview/runtime.js";import"./index-qAjVnZy2.js";import"./index-DKz4l_X4.js";import"./index-B_J8iUie.js";import"./inheritsLoose-B7h9gheN.js";import"./index-DLle_QMf.js";import"./index-DrFu-skq.js";import"./index-Bl6ORisp.js";import"./TooltipPopoverWrapper-D_sHTsDg.js";import"./index-D3ylJrlI.js";import"./utils-AMtBH2Nr.js";import"./popper-BAn7w8_p.js";import"./utils-CUovxYU2.js";import"./Fade-DLDWECFI.js";import"./Transition-GxAQdkDD.js";import"./Button-BvsBu0Bj.js";import"./Button-Cn4Lrs6w.js";import"./Icon-Dn2FEDq_.js";function t(n){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:p}),`
`,e.jsx(o.h1,{id:"popover",children:"Popover"}),`
`,e.jsx(o.h2,{id:"documentazione-ed-esempi-per-aggiungere-popover-tooltip-informativi-a-qualsiasi-elemento-del-tuo-sito",children:"Documentazione ed esempi per aggiungere popover (tooltip informativi) a qualsiasi elemento del tuo sito."}),`
`,e.jsx("div",{className:"docs",children:e.jsxs(g,{color:"success",children:[e.jsx(h,{children:e.jsx("span",{className:"text",children:"Accessibilità"})}),e.jsx(m,{children:e.jsx(o.p,{children:`I popover funzionano sia con la tastiera che per gli utenti dotati di tecnologia assistiva. Allo stesso modo di\r
quanto avviene per i Tooltip, il codice generato per i Popover è accessibile.`})})]})}),`
`,e.jsx(o.p,{children:"Cose da sapere quando si utilizza il plugin popover:"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:"I title e i content con valori vuoti non mostreranno mai popover."}),`
`,e.jsx(o.li,{children:"Attivare i popover su elementi nascosti non funzionerà."}),`
`,e.jsxs(o.li,{children:["I popover per gli elementi ",e.jsx(o.code,{children:".disabled"})," o ",e.jsx(o.code,{children:"disabled"})," devono essere attivati da un elemento contenitore."]}),`
`,e.jsxs(o.li,{children:["Quanto attivato da ancore che si estendono su più linee, i popover verranno centrati tra la larghezza complessiva delle ancore. Usa ",e.jsx(o.code,{children:"white-space: nowrap;"})," sugli elementi ",e.jsx(o.code,{children:"<a/>"})," per evitare questo comportamento."]}),`
`]}),`
`,e.jsx(o.h3,{id:"esempi",children:"Esempi"}),`
`,e.jsx(r,{of:a}),`
`,e.jsx(o.h4,{id:"codice",children:"Codice"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`const [popoverOpen, setPopoverOpen] = useState(false);\r
const targetRef = useRef(null);\r
\r
const togglePopover = () => {\r
  setPopoverOpen(!popoverOpen);\r
};\r
\r
return (\r
  <div>\r
    <Button color='danger' size='lg' innerRef={targetRef} onClick={togglePopover}>\r
      Clicca per attivare/disattivare il popover\r
    </Button>\r
\r
    <Popover placement='right' target={targetRef} isOpen={popoverOpen} toggle={togglePopover}>\r
      <PopoverHeader>Titolo del popover</PopoverHeader>\r
      <PopoverBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.</PopoverBody>\r
    </Popover>\r
  </div>\r
);
`})}),`
`,e.jsx(o.h4,{id:"direzioni",children:"Direzioni"}),`
`,e.jsx(o.p,{children:"Sono disponibili quattro opzioni: allineato in alto, a destra, in basso e a sinistra."}),`
`,e.jsx(r,{of:l}),`
`,e.jsx(o.h4,{id:"codice-1",children:"Codice"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`const [popoverOpenSx, setPopoverOpenSx] = useState(false);\r
const [popoverOpenDx, setPopoverOpenDx] = useState(false);\r
const [popoverOpenAlto, setPopoverOpenAlto] = useState(false);\r
const [popoverOpenBasso, setPopoverOpenBasso] = useState(false);\r
\r
const targetRefSx = useRef(null);\r
const targetRefDx = useRef(null);\r
const targetRefAlto = useRef(null);\r
const targetRefBasso = useRef(null);\r
\r
return (\r
  <div className='d-flex flex-column'>\r
    <div className='mx-auto align-self-center p-2'>\r
      <span>\r
        <Button\r
          className='me-1'\r
          color='secondary'\r
          innerRef={targetRefSx}\r
          onClick={() => {\r
            setPopoverOpenSx(!popoverOpenSx);\r
          }}\r
        >\r
          Popover {'a sinistra'}\r
        </Button>\r
        <Popover\r
          placement={'left'}\r
          isOpen={popoverOpenSx}\r
          target={targetRefSx}\r
          toggle={() => {\r
            setPopoverOpenSx(!popoverOpenSx);\r
          }}\r
        >\r
          <PopoverBody>Vivamus sagittis lacus vel augue laoreet rutrum faucibus</PopoverBody>\r
        </Popover>\r
      </span>\r
    </div>\r
    <div className='mx-auto align-self-center p-2'>\r
      <span>\r
        <Button\r
          className='me-1'\r
          color='secondary'\r
          innerRef={targetRefDx}\r
          onClick={() => {\r
            setPopoverOpenDx(!popoverOpenDx);\r
          }}\r
        >\r
          Popover {'a destra'}\r
        </Button>\r
        <Popover\r
          placement={'right'}\r
          isOpen={popoverOpenDx}\r
          target={targetRefDx}\r
          toggle={() => {\r
            setPopoverOpenDx(!popoverOpenDx);\r
          }}\r
        >\r
          <PopoverBody>Vivamus sagittis lacus vel augue laoreet rutrum faucibus</PopoverBody>\r
        </Popover>\r
      </span>\r
    </div>\r
    <div className='mx-auto align-self-center p-2'>\r
      <span>\r
        <Button\r
          className='me-1'\r
          color='secondary'\r
          innerRef={targetRefAlto}\r
          onClick={() => {\r
            setPopoverOpenAlto(!popoverOpenAlto);\r
          }}\r
        >\r
          Popover {'in alto'}\r
        </Button>\r
        <Popover\r
          placement={'top'}\r
          isOpen={popoverOpenAlto}\r
          target={targetRefAlto}\r
          toggle={() => {\r
            setPopoverOpenAlto(!popoverOpenAlto);\r
          }}\r
        >\r
          <PopoverBody>Vivamus sagittis lacus vel augue laoreet rutrum faucibus</PopoverBody>\r
        </Popover>\r
      </span>\r
    </div>\r
    <div className='mx-auto align-self-center p-2'>\r
      <span>\r
        <Button\r
          className='me-1'\r
          color='secondary'\r
          innerRef={targetRefBasso}\r
          onClick={() => {\r
            setPopoverOpenBasso(!popoverOpenBasso);\r
          }}\r
        >\r
          Popover {'in basso'}\r
        </Button>\r
        <Popover\r
          placement={'bottom'}\r
          isOpen={popoverOpenBasso}\r
          target={targetRefBasso}\r
          toggle={() => {\r
            setPopoverOpenBasso(!popoverOpenBasso);\r
          }}\r
        >\r
          <PopoverBody>Vivamus sagittis lacus vel augue laoreet rutrum faucibus</PopoverBody>\r
        </Popover>\r
      </span>\r
    </div>\r
  </div>\r
);
`})}),`
`,e.jsx(o.h4,{id:"titolo-con-icona-e-link",children:"Titolo con icona e link"}),`
`,e.jsx(o.p,{children:"È possibile aggiungere un’icona in testa al titolo ed un link in coda al contenuto."}),`
`,e.jsx(r,{of:c}),`
`,e.jsx(o.h4,{id:"codice-2",children:"Codice"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`const [popoverOpen, setPopoverOpen] = useState(false);\r
const targetRef = useRef(null);\r
\r
const togglePopover = () => {\r
  setPopoverOpen(!popoverOpen);\r
};\r
return (\r
  <div>\r
    <Button color='secondary' innerRef={targetRef} onClick={togglePopover}>\r
      Popover con icona e link\r
    </Button>\r
\r
    <Popover placement='right' target={targetRef} isOpen={popoverOpen} toggle={togglePopover}>\r
      <PopoverHeader>\r
        <Icon icon='it-help-circle' aria-hidden />\r
        Titolo con icona\r
      </PopoverHeader>\r
      <PopoverBody>\r
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.\r
        <a href='#' className='popover-inner-link'>\r
          More info\r
          <Icon icon='it-arrow-right' aria-hidden />\r
        </a>\r
      </PopoverBody>\r
    </Popover>\r
  </div>\r
);
`})}),`
`,e.jsx(o.h4,{id:"modalità-hover",children:"Modalità Hover"}),`
`,e.jsxs(o.p,{children:["Per aprire il ",e.jsx(o.code,{children:"Popover"})," all’hover del mouse sull’elemento è necessario impostare l'attributo ",e.jsx(o.code,{children:"trigger"})," del componente su ",e.jsx(o.code,{children:'"hover"'}),"."]}),`
`,e.jsx(r,{of:d}),`
`,e.jsx(o.h4,{id:"codice-3",children:"Codice"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`const [popoverOpen, setPopoverOpen] = useState(false);\r
const targetRef = useRef(null);\r
\r
const togglePopover = () => {\r
  setPopoverOpen(!popoverOpen);\r
};\r
return (\r
  <div>\r
    <Button color='secondary' innerRef={targetRef}>\r
      Apertura in Hover\r
    </Button>\r
\r
    <Popover placement='right' trigger='hover' target={targetRef} isOpen={popoverOpen} toggle={togglePopover}>\r
      <PopoverHeader>Popover in Hover</PopoverHeader>\r
      <PopoverBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.</PopoverBody>\r
    </Popover>\r
  </div>\r
);
`})}),`
`,e.jsx(o.h4,{id:"chiusura-al-click-successivo",children:"Chiusura al click successivo"}),`
`,e.jsxs(o.p,{children:["Usa l'attributo ",e.jsx(o.code,{children:'trigger="focus"'})," per ignorare i popover sul clic successivo dell’utente di un elemento diverso rispetto all’elemento di attivazione / disattivazione."]}),`
`,e.jsx(r,{of:v}),`
`,e.jsx(o.h4,{id:"codice-4",children:"Codice"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`const [popoverOpen, setPopoverOpen] = useState(false);\r
const targetRef = useRef(null);\r
\r
const togglePopover = () => {\r
  setPopoverOpen(!popoverOpen);\r
};\r
return (\r
  <div>\r
    <Button tabIndex={0} color='danger' innerRef={targetRef}>\r
      Popover richiudibile\r
    </Button>\r
\r
    <Popover placement='right' trigger='focus' target={targetRef} isOpen={popoverOpen} toggle={togglePopover}>\r
      <PopoverHeader>Dismissible popover</PopoverHeader>\r
      <PopoverBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.</PopoverBody>\r
    </Popover>\r
  </div>\r
);
`})}),`
`,e.jsx(o.h4,{id:"elementi-disabilitati",children:"Elementi disabilitati"}),`
`,e.jsxs(o.p,{children:["Elementi con l’attributo ",e.jsx(o.code,{children:"disabled"})," non sono interattivi, il che significa che gli utenti non possono attivare il popover (o un tooltip) con il passaggio del mouse o facendo click su di essi."]}),`
`,e.jsxs(o.p,{children:["Come soluzione, ti consigliamo di attivare il ",e.jsx(o.code,{children:"Popover"})," da un elemento ",e.jsx(o.code,{children:"<div/>"})," o ",e.jsx(o.code,{children:"<span/>"})," contenitore e sovrascrivere il ",e.jsx(o.code,{children:"pointer-events"})," su un elemento disabilitato."]}),`
`,e.jsx(r,{of:u}),`
`,e.jsx(o.h4,{id:"codice-5",children:"Codice"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`const [popoverOpen, setPopoverOpen] = useState(false);\r
const targetRef = useRef(null);\r
\r
return (\r
  <>\r
    <span ref={targetRef}>\r
      <Button color='primary' disabled style={{ pointerEvents: 'none' }}>\r
        Popover disabilitato\r
      </Button>\r
    </span>\r
    <Popover\r
      placement='right'\r
      target={targetRef}\r
      trigger='hover'\r
      toggle={() => setPopoverOpen(!popoverOpen)}\r
      isOpen={popoverOpen}\r
    >\r
      <PopoverHeader>Titolo del popover</PopoverHeader>\r
      <PopoverBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.</PopoverBody>\r
    </Popover>\r
  </>\r
);
`})}),`
`,e.jsx(o.h2,{id:"argomenti-componente",children:"Argomenti componente"}),`
`,e.jsx(o.p,{children:"Fare riferimento alla documentazione reactstrap (v9) per maggiori dettagli sui componenti `Popover: https://reactstrap.github.io/?path=/docs/components-popover--popover"})]})}function F(n={}){const{wrapper:o}={...i(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(t,{...n})}):t(n)}export{F as default};
