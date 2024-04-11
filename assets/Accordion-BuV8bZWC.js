import{j as e}from"./jsx-runtime-DezihaCc.js";import{useMDXComponents as m}from"./index-BtoTqJlz.js";import{M as p,C as o,d as i,A as c}from"./index-DQ1boyZV.js";import{A as u,G as s,_ as h,a as A,H as g,b,I as x,c as v,d as f,e as E}from"./Accordion.stories-D2Z30Bt8.js";import{C as t,a}from"./CalloutText-C98nfp7D.js";import{C as l}from"./CalloutTitle-DHbim7Vs.js";import"./index-BFWcBMrj.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-d7HZv50p.js";import"../sb-preview/runtime.js";import"./index-qAjVnZy2.js";import"./index-DKz4l_X4.js";import"./index-B_J8iUie.js";import"./inheritsLoose-B7h9gheN.js";import"./index-DLle_QMf.js";import"./index-DrFu-skq.js";import"./index-Bl6ORisp.js";import"./utils-Dujee42i.js";import"./Transition-GxAQdkDD.js";function d(r){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...m(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:u}),`
`,e.jsx(n.h1,{id:"accordion",children:"Accordion"}),`
`,e.jsx(n.h2,{id:"attivadisattiva-la-visibilità-di-contenuti",children:"Attiva/disattiva la visibilità di contenuti"}),`
`,e.jsx(n.p,{children:"Per ottimizzare l’ingombro dei contenuti di una pagina a volte è necessario usare degli elementi richiudibili (in gergo definiti collassabili o collapse), che possono essere attivati indipendentemente l’uno dall’altro oppure in modo esclusivo con l’attivazione di solo un blocco alla volta (in gergo definiti fisarmoniche o accordion)."}),`
`,e.jsx(n.h3,{id:"gruppi-di-elementi-richiudibili",children:"Gruppi di elementi richiudibili"}),`
`,e.jsx(n.p,{children:"Gli elementi richiudibili sono molto spesso mostrati in gruppo, tipicamente usati per approfondire voci o argomenti mostrati nelle singole barre cliccabili."}),`
`,e.jsx("div",{className:"docs",children:e.jsxs(t,{color:"success",children:[e.jsx(l,{children:e.jsx("span",{className:"text",children:"Accessibilità"})}),e.jsx(a,{children:e.jsxs(n.p,{children:["Nell’esempio di codice ogni elemento ",e.jsx(o,{children:"<button>"}),` è inserito all’interno di un elemento <h2> (o altro livello h in funzione del\r
contesto) in quanto, frequentemente, i pulsanti di azione di un accordion sono anche i titoli della sezione che segue.`]})})]})}),`
`,e.jsx(i,{of:s}),`
`,e.jsx(n.h4,{id:"codice",children:"Codice"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [collapseElementOpen, setCollapseElement] = useState("");\r
return (\r
    <Accordion>\r
        <AccordionItem>\r
            <AccordionHeader active={collapseElementOpen === "1"} onToggle={() => setCollapseElement(collapseElementOpen !== "1" ? "1" : "")}>\r
                Elemento Richiudibile #1\r
            </AccordionHeader>\r
            <AccordionBody active={collapseElementOpen === "1"}>\r
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat\r
                skateboard dolor brunch.\r
            </AccordionBody>\r
        </AccordionItem>\r
        <AccordionItem>\r
            <AccordionHeader active={collapseElementOpen === "2"} onToggle={() => setCollapseElement(collapseElementOpen !== "2" ? "2" : "")}>\r
                Elemento Richiudibile #2\r
            </AccordionHeader>\r
            <AccordionBody active={collapseElementOpen === "2"}>\r
                Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven&apos;t\r
                heard of them accusamus labore sustainable VHS.\r
            </AccordionBody>\r
        </AccordionItem>\r
        <AccordionItem>\r
            <AccordionHeader active={collapseElementOpen === "3"} onToggle={() => setCollapseElement(collapseElementOpen !== "3" ? "3" : "")}>\r
                Elemento Richiudibile #3\r
            </AccordionHeader>\r
            <AccordionBody active={collapseElementOpen === "3"}>\r
                Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda\r
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r
            </AccordionBody>\r
        </AccordionItem>\r
    </Accordion>\r
);
`})}),`
`,e.jsx("div",{className:"docs",children:e.jsxs(t,{color:"success",children:[e.jsx(l,{children:e.jsx("span",{className:"text",children:"Accessibilità"})}),e.jsx(a,{children:e.jsxs(n.p,{children:["Assicurati di aggiungere ",e.jsx(o,{children:"aria-expanded"}),` all’elemento di controllo. Questo attributo trasmette esplicitamente lo stato corrente\r
dell’elemento comprimibile legato al controllo a screen reader e tecnologie assistive simili. Se l’elemento comprimibile è chiuso in modo\r
predefinito, l’attributo sull’elemento di controllo dovrebbe avere il valore `,e.jsx(o,{children:'aria-expanded="false"'}),`. Se imposti l’elemento comprimibile\r
aperto in modo predefinito, sul controllo invece imposta\r
`,e.jsx(o,{children:'aria-expanded="true"'}),`. Il componente\r
`,e.jsx(o,{children:"AccordionHeader"}),` applica automaticamente questo attributo, ma qualora venisse usato un componente di controllo esterno - come un\r
`,e.jsx(n.code,{children:"Button"}),` del primo esempio - sarà necessario aggiungerlo manualmente. Se il componente HTML dell’elemento di controllo non è un bottone (ad esempio\r
un `,e.jsx(o,{children:"<a>"})," o ",e.jsx(o,{children:"<div>"}),`\r
), l’attributo `,e.jsx(o,{children:'role="button"'})," dovrebbe essere aggiunto al componente."]})})]})}),`
`,e.jsx(n.h2,{id:"accordion-1",children:"Accordion"}),`
`,e.jsxs(n.p,{children:["Per ottenere un gruppo di elementi ",e.jsx(n.em,{children:"mutualmente"})," richiudibili (o ",e.jsx(n.em,{children:"accordion"}),"), è sufficiente utilizzare uno stato con singolo id da verificare per ciascun elemento come da esempio:"]}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h4,{id:"codice-1",children:"Codice"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [collapseElementOpen, setCollapseElement] = useState("");\r
return (\r
    <Accordion>\r
        <AccordionItem>\r
            <AccordionHeader active={collapseElementOpen === "1"} onToggle={() => setCollapseElement(collapseElementOpen !== "1" ? "1" : "")}>\r
                Accordion Group Item #1\r
            </AccordionHeader>\r
            <AccordionBody active={collapseElementOpen === "1"} listClassName={"custom-class"}>\r
                Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh.\r
                Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.\r
            </AccordionBody>\r
        </AccordionItem>\r
        <AccordionItem>\r
            <AccordionHeader active={collapseElementOpen === "2"} onToggle={() => setCollapseElement(collapseElementOpen !== "2" ? "2" : "")}>\r
                Accordion Group Item #2\r
            </AccordionHeader>\r
            <AccordionBody active={collapseElementOpen === "2"} listClassName={"custom-class"}>\r
                Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven&apos;t\r
                heard of them accusamus labore sustainable VHS.\r
            </AccordionBody>\r
        </AccordionItem>\r
        <AccordionItem>\r
            <AccordionHeader active={collapseElementOpen === "3"} onToggle={() => setCollapseElement(collapseElementOpen !== "3" ? "3" : "")}>\r
                Accordion Group Item #3\r
            </AccordionHeader>\r
            <AccordionBody active={collapseElementOpen === "3"} listClassName={"custom-class"}>\r
                Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda\r
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r
            </AccordionBody>\r
        </AccordionItem>\r
    </Accordion>\r
);
`})}),`
`,e.jsx(n.h2,{id:"accordion-annidati",children:"Accordion annidati"}),`
`,e.jsx(n.p,{children:"Più gruppi di collapse possono essere annidati."}),`
`,e.jsx("div",{className:"docs",children:e.jsxs(t,{color:"success",children:[e.jsx(l,{children:e.jsx("span",{className:"text",children:"Accessibilità"})}),e.jsx(a,{children:e.jsx(n.p,{children:"Utilizzare questo approccio solo quando strettamente necessario: dal punto di vista dell’accessibilità non si tratta di una soluzione ottimale."})})]})}),`
`,e.jsx(i,{of:A}),`
`,e.jsx(n.h4,{id:"codice-2",children:"Codice"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [collapseElementOpen, setCollapseElement] = useState("");\r
const [nestedCollapseOpen, setNestedCollapseOpen] = useState("");\r
return (\r
    <Accordion>\r
        <AccordionItem>\r
            <AccordionHeader active={collapseElementOpen === "1"} onToggle={() => setCollapseElement(collapseElementOpen !== "1" ? "1" : "")}>\r
                Elemento Accordion #1\r
            </AccordionHeader>\r
            <AccordionBody active={collapseElementOpen === "1"}>\r
                <Accordion>\r
                    <AccordionItem>\r
                        <AccordionHeader active={nestedCollapseOpen === "1"} onToggle={() => setNestedCollapseOpen(nestedCollapseOpen !== "1" ? "1" : "")}>\r
                            Elemento Accordion annidato #1\r
                        </AccordionHeader>\r
                        <AccordionBody active={nestedCollapseOpen === "1"}>\r
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non\r
                            cupidatat skateboard dolor brunch.\r
                        </AccordionBody>\r
                    </AccordionItem>\r
                    <AccordionItem>\r
                        <AccordionHeader active={nestedCollapseOpen === "2"} onToggle={() => setNestedCollapseOpen(nestedCollapseOpen !== "2" ? "2" : "")}>\r
                            Elemento Accordion annidato #2\r
                        </AccordionHeader>\r
                        <AccordionBody active={nestedCollapseOpen === "2"}>\r
                            Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably\r
                            haven&apos;t heard of them accusamus labore sustainable VHS.\r
                        </AccordionBody>\r
                    </AccordionItem>\r
                    <AccordionItem>\r
                        <AccordionHeader active={nestedCollapseOpen === "3"} onToggle={() => setNestedCollapseOpen(nestedCollapseOpen !== "3" ? "3" : "")}>\r
                            Elemento Accordion annidato #3\r
                        </AccordionHeader>\r
                        <AccordionBody active={nestedCollapseOpen === "3"}>\r
                            Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla\r
                            assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r
                        </AccordionBody>\r
                    </AccordionItem>\r
                </Accordion>\r
            </AccordionBody>\r
        </AccordionItem>\r
        <AccordionHeader active={collapseElementOpen === "2"} onToggle={() => setCollapseElement(collapseElementOpen !== "2" ? "2" : "")}>\r
            Elemento Accordion #2\r
        </AccordionHeader>\r
        <AccordionBody active={collapseElementOpen === "2"}>\r
            Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven&apos;t heard\r
            of them accusamus labore sustainable VHS.\r
        </AccordionBody>\r
\r
        <AccordionHeader active={collapseElementOpen === "3"} onToggle={() => setCollapseElement(collapseElementOpen !== "3" ? "3" : "")}>\r
            Elemento Accordion #3\r
        </AccordionHeader>\r
        <AccordionBody active={collapseElementOpen === "3"}>\r
            Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda\r
            shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r
        </AccordionBody>\r
    </Accordion>\r
);
`})}),`
`,e.jsx(n.h2,{id:"sfondo-primario",children:"Sfondo primario"}),`
`,e.jsxs(n.p,{children:["Applicando attributi aggiuntivi al componente ",e.jsx(n.code,{children:"Accordion"})," è possibile utilizzare il colore primario come sfondo degli header."]}),`
`,e.jsx(n.h3,{id:"header-attivi",children:"Header attivi"}),`
`,e.jsxs(n.p,{children:["Aggiungere l'attributo ",e.jsx(n.code,{children:'background="active"'})," al componente ",e.jsx(n.code,{children:"Accordion"})," per ottenere header con sfondo di colore primario quando questi sono attivi e il contenuto relativo è visibile."]}),`
`,e.jsx(i,{of:g}),`
`,e.jsx(n.h4,{id:"codice-3",children:"Codice"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [collapseElementOpen, setCollapseElement] = useState("");\r
return (\r
    <Accordion background="active">\r
        <AccordionItem>\r
            <AccordionHeader active={collapseElementOpen === "1"} onToggle={() => setCollapseElement(collapseElementOpen !== "1" ? "1" : "")}>\r
                Elemento Accordion #1\r
            </AccordionHeader>\r
            <AccordionBody active={collapseElementOpen === "1"}>\r
                Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh.\r
                Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.\r
            </AccordionBody>\r
        </AccordionItem>\r
        <AccordionItem>\r
            <AccordionHeader active={collapseElementOpen === "2"} onToggle={() => setCollapseElement(collapseElementOpen !== "2" ? "2" : "")}>\r
                Elemento Accordion #2\r
            </AccordionHeader>\r
            <AccordionBody active={collapseElementOpen === "2"}>\r
                Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven&apos;t\r
                heard of them accusamus labore sustainable VHS.\r
            </AccordionBody>\r
        </AccordionItem>\r
        <AccordionItem>\r
            <AccordionHeader active={collapseElementOpen === "3"} onToggle={() => setCollapseElement(collapseElementOpen !== "3" ? "3" : "")}>\r
                Elemento Accordion #3\r
            </AccordionHeader>\r
            <AccordionBody active={collapseElementOpen === "3"}>\r
                Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda\r
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r
            </AccordionBody>\r
        </AccordionItem>\r
    </Accordion>\r
);
`})}),`
`,e.jsx(n.h3,{id:"hover-degli-header",children:"Hover degli Header"}),`
`,e.jsxs(n.p,{children:["Aggiungere l'attributo ",e.jsx(n.code,{children:'background="hover"'})," al componente ",e.jsx(n.code,{children:"Accordion"})," per ottenere header con sfondo di colore primario all’hover."]}),`
`,e.jsx(i,{of:b}),`
`,e.jsx(n.h4,{id:"codice-4",children:"Codice"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [collapseElementOpen, setCollapseElement] = useState("");\r
return (\r
    <Accordion background="hover">\r
        <AccordionItem>\r
            <AccordionHeader active={collapseElementOpen === "1"} onToggle={() => setCollapseElement(collapseElementOpen !== "1" ? "1" : "")}>\r
                Elemento Accordion #1\r
            </AccordionHeader>\r
            <AccordionBody active={collapseElementOpen === "1"}>\r
                Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh.\r
                Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.\r
            </AccordionBody>\r
        </AccordionItem>\r
        <AccordionItem>\r
            <AccordionHeader active={collapseElementOpen === "2"} onToggle={() => setCollapseElement(collapseElementOpen !== "2" ? "2" : "")}>\r
                Elemento Accordion #2\r
            </AccordionHeader>\r
            <AccordionBody active={collapseElementOpen === "2"}>\r
                Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven&apos;t\r
                heard of them accusamus labore sustainable VHS.\r
            </AccordionBody>\r
        </AccordionItem>\r
        <AccordionItem>\r
            <AccordionHeader active={collapseElementOpen === "3"} onToggle={() => setCollapseElement(collapseElementOpen !== "3" ? "3" : "")}>\r
                Elemento Accordion #3\r
            </AccordionHeader>\r
            <AccordionBody active={collapseElementOpen === "3"}>\r
                Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda\r
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r
            </AccordionBody>\r
        </AccordionItem>\r
    </Accordion>\r
);
`})}),`
`,e.jsx(n.h3,{id:"icona-a-sinistra",children:"Icona a sinistra"}),`
`,e.jsxs(n.p,{children:["Aggiungere l'attributo ",e.jsx(n.code,{children:"iconLeft={true}"})," al 11componente ",e.jsx(n.code,{children:"Accordion"})," per ottenere una variante in cui l’icona chevron che indica lo stato di apertura è sostituita da segni meno/più allineati a sinistra del titolo dell’header."]}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.h4,{id:"codice-5",children:"Codice"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [collapseElementOpen, setCollapseElement] = useState("");\r
return (\r
    <Accordion iconLeft>\r
        <AccordionItem>\r
            <AccordionHeader active={collapseElementOpen === "1"} onToggle={() => setCollapseElement(collapseElementOpen !== "1" ? "1" : "")}>\r
                Elemento Accordion #1\r
            </AccordionHeader>\r
            <AccordionBody active={collapseElementOpen === "1"}>\r
                Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh.\r
                Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.\r
            </AccordionBody>\r
        </AccordionItem>\r
        <AccordionItem>\r
            <AccordionHeader active={collapseElementOpen === "2"} onToggle={() => setCollapseElement(collapseElementOpen !== "2" ? "2" : "")}>\r
                Elemento Accordion #2\r
            </AccordionHeader>\r
            <AccordionBody active={collapseElementOpen === "2"}>\r
                Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh.\r
                Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.\r
            </AccordionBody>\r
        </AccordionItem>\r
        <AccordionItem>\r
            <AccordionHeader active={collapseElementOpen === "3"} onToggle={() => setCollapseElement(collapseElementOpen !== "3" ? "3" : "")}>\r
                Elemento Accordion #3\r
            </AccordionHeader>\r
            <AccordionBody active={collapseElementOpen === "3"}>\r
                Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh.\r
                Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.\r
            </AccordionBody>\r
        </AccordionItem>\r
    </Accordion>\r
);
`})}),`
`,e.jsx(n.h2,{id:"argomenti-componente",children:"Argomenti componente"}),`
`,e.jsx(n.h2,{id:"accordion-2",children:"Accordion"}),`
`,e.jsx(c,{of:s}),`
`,e.jsx(n.h2,{id:"accordion-item",children:"Accordion Item"}),`
`,e.jsx(c,{of:v}),`
`,e.jsx(n.h3,{id:"accordionheader",children:"AccordionHeader"}),`
`,e.jsx(c,{of:f}),`
`,e.jsx(n.h3,{id:"accordionbody",children:"AccordionBody"}),`
`,e.jsx(c,{of:E})]})}function G(r={}){const{wrapper:n}={...m(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(d,{...r})}):d(r)}export{G as default};
