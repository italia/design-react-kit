import { j as jsxRuntimeExports } from "./jsx-runtime-BKjOVojP.js";
import { useMDXComponents } from "./index-BDy3TOcs.js";
import { ae as Meta, v as vu, af as Canvas, ag as ArgTypes } from "./index-BmEp6qTd.js";
import { A as AccordionStories, G as GruppiDiElementiRichiudibili, _ as _Accordion, a as AccordionAnnidati, H as HeaderAttivi, b as HeaderHover, I as IconaSinistra, c as AccordionItem, d as AccordionHeader, e as AccordionBody } from "./Accordion.stories-CJmwqX2Y.js";
import { C as Callout, a as CalloutText } from "./CalloutText-DuQn_Rtc.js";
import { C as CalloutTitle } from "./CalloutTitle-D5ep80ue.js";
import "./track-focus-DbJ2CO43.js";
import "./index-BehpJNG5.js";
import "./_commonjsHelpers-DWwsNxpa.js";
import "./iframe-BZF18Iv0.js";
import "../sb-preview/runtime.js";
import "./index-D7280_ap.js";
import "./index-DmVNLg0t.js";
import "./index-DJdTjTnu.js";
import "./index-dukjSSyv.js";
import "./index-BdOSk9or.js";
import "./index-D3ELxcOV.js";
import "./utils-CwYUlCuU.js";
import "./Transition-D0u52PR9.js";
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    p: "p",
    pre: "pre",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: AccordionStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "accordion",
      children: "Accordion"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "attivadisattiva-la-visibilità-di-contenuti",
      children: "Attiva/disattiva la visibilità di contenuti"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Per ottimizzare l’ingombro dei contenuti di una pagina a volte è necessario usare degli elementi richiudibili (in gergo definiti collassabili o collapse), che possono essere attivati indipendentemente l’uno dall’altro oppure in modo esclusivo con l’attivazione di solo un blocco alla volta (in gergo definiti fisarmoniche o accordion)."
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "gruppi-di-elementi-richiudibili",
      children: "Gruppi di elementi richiudibili"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Gli elementi richiudibili sono molto spesso mostrati in gruppo, tipicamente usati per approfondire voci o argomenti mostrati nelle singole barre cliccabili."
    }), "\n", jsxRuntimeExports.jsx("div", {
      className: "docs",
      children: jsxRuntimeExports.jsxs(Callout, {
        color: "success",
        children: [jsxRuntimeExports.jsx(CalloutTitle, {
          children: jsxRuntimeExports.jsx("span", {
            className: "text",
            children: "Accessibilità"
          })
        }), jsxRuntimeExports.jsx(CalloutText, {
          children: jsxRuntimeExports.jsxs(_components.p, {
            children: ["Nell’esempio di codice ogni elemento ", jsxRuntimeExports.jsx(vu, {
              children: "<button>"
            }), " è inserito all’interno di un elemento <h2> (o altro livello h in funzione del\r\ncontesto) in quanto, frequentemente, i pulsanti di azione di un accordion sono anche i titoli della sezione che segue."]
          })
        })]
      })
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: GruppiDiElementiRichiudibili
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: 'const [collapseElementOpen, setCollapseElement] = useState("");\r\nreturn (\r\n    <Accordion>\r\n        <AccordionItem>\r\n            <AccordionHeader active={collapseElementOpen === "1"} onToggle={() => setCollapseElement(collapseElementOpen !== "1" ? "1" : "")}>\r\n                Elemento Richiudibile #1\r\n            </AccordionHeader>\r\n            <AccordionBody active={collapseElementOpen === "1"}>\r\n                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat\r\n                skateboard dolor brunch.\r\n            </AccordionBody>\r\n        </AccordionItem>\r\n        <AccordionItem>\r\n            <AccordionHeader active={collapseElementOpen === "2"} onToggle={() => setCollapseElement(collapseElementOpen !== "2" ? "2" : "")}>\r\n                Elemento Richiudibile #2\r\n            </AccordionHeader>\r\n            <AccordionBody active={collapseElementOpen === "2"}>\r\n                Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven&apos;t\r\n                heard of them accusamus labore sustainable VHS.\r\n            </AccordionBody>\r\n        </AccordionItem>\r\n        <AccordionItem>\r\n            <AccordionHeader active={collapseElementOpen === "3"} onToggle={() => setCollapseElement(collapseElementOpen !== "3" ? "3" : "")}>\r\n                Elemento Richiudibile #3\r\n            </AccordionHeader>\r\n            <AccordionBody active={collapseElementOpen === "3"}>\r\n                Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda\r\n                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r\n            </AccordionBody>\r\n        </AccordionItem>\r\n    </Accordion>\r\n);\n'
      })
    }), "\n", jsxRuntimeExports.jsx("div", {
      className: "docs",
      children: jsxRuntimeExports.jsxs(Callout, {
        color: "success",
        children: [jsxRuntimeExports.jsx(CalloutTitle, {
          children: jsxRuntimeExports.jsx("span", {
            className: "text",
            children: "Accessibilità"
          })
        }), jsxRuntimeExports.jsx(CalloutText, {
          children: jsxRuntimeExports.jsxs(_components.p, {
            children: ["Assicurati di aggiungere ", jsxRuntimeExports.jsx(vu, {
              children: "aria-expanded"
            }), " all’elemento di controllo. Questo attributo trasmette esplicitamente lo stato corrente\r\ndell’elemento comprimibile legato al controllo a screen reader e tecnologie assistive simili. Se l’elemento comprimibile è chiuso in modo\r\npredefinito, l’attributo sull’elemento di controllo dovrebbe avere il valore ", jsxRuntimeExports.jsx(vu, {
              children: 'aria-expanded="false"'
            }), ". Se imposti l’elemento comprimibile\r\naperto in modo predefinito, sul controllo invece imposta\r\n", jsxRuntimeExports.jsx(vu, {
              children: 'aria-expanded="true"'
            }), ". Il componente\r\n", jsxRuntimeExports.jsx(vu, {
              children: "AccordionHeader"
            }), " applica automaticamente questo attributo, ma qualora venisse usato un componente di controllo esterno - come un\r\n", jsxRuntimeExports.jsx(_components.code, {
              children: "Button"
            }), " del primo esempio - sarà necessario aggiungerlo manualmente. Se il componente HTML dell’elemento di controllo non è un bottone (ad esempio\r\nun ", jsxRuntimeExports.jsx(vu, {
              children: "<a>"
            }), " o ", jsxRuntimeExports.jsx(vu, {
              children: "<div>"
            }), "\r\n), l’attributo ", jsxRuntimeExports.jsx(vu, {
              children: 'role="button"'
            }), " dovrebbe essere aggiunto al componente."]
          })
        })]
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "accordion-1",
      children: "Accordion"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per ottenere un gruppo di elementi ", jsxRuntimeExports.jsx(_components.em, {
        children: "mutualmente"
      }), " richiudibili (o ", jsxRuntimeExports.jsx(_components.em, {
        children: "accordion"
      }), "), è sufficiente utilizzare uno stato con singolo id da verificare per ciascun elemento come da esempio:"]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: _Accordion
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice-1",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: 'const [collapseElementOpen, setCollapseElement] = useState("");\r\nreturn (\r\n    <Accordion>\r\n        <AccordionItem>\r\n            <AccordionHeader active={collapseElementOpen === "1"} onToggle={() => setCollapseElement(collapseElementOpen !== "1" ? "1" : "")}>\r\n                Accordion Group Item #1\r\n            </AccordionHeader>\r\n            <AccordionBody active={collapseElementOpen === "1"} listClassName={"custom-class"}>\r\n                Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh.\r\n                Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.\r\n            </AccordionBody>\r\n        </AccordionItem>\r\n        <AccordionItem>\r\n            <AccordionHeader active={collapseElementOpen === "2"} onToggle={() => setCollapseElement(collapseElementOpen !== "2" ? "2" : "")}>\r\n                Accordion Group Item #2\r\n            </AccordionHeader>\r\n            <AccordionBody active={collapseElementOpen === "2"} listClassName={"custom-class"}>\r\n                Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven&apos;t\r\n                heard of them accusamus labore sustainable VHS.\r\n            </AccordionBody>\r\n        </AccordionItem>\r\n        <AccordionItem>\r\n            <AccordionHeader active={collapseElementOpen === "3"} onToggle={() => setCollapseElement(collapseElementOpen !== "3" ? "3" : "")}>\r\n                Accordion Group Item #3\r\n            </AccordionHeader>\r\n            <AccordionBody active={collapseElementOpen === "3"} listClassName={"custom-class"}>\r\n                Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda\r\n                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r\n            </AccordionBody>\r\n        </AccordionItem>\r\n    </Accordion>\r\n);\n'
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "accordion-annidati",
      children: "Accordion annidati"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Più gruppi di collapse possono essere annidati."
    }), "\n", jsxRuntimeExports.jsx("div", {
      className: "docs",
      children: jsxRuntimeExports.jsxs(Callout, {
        color: "success",
        children: [jsxRuntimeExports.jsx(CalloutTitle, {
          children: jsxRuntimeExports.jsx("span", {
            className: "text",
            children: "Accessibilità"
          })
        }), jsxRuntimeExports.jsx(CalloutText, {
          children: jsxRuntimeExports.jsx(_components.p, {
            children: "Utilizzare questo approccio solo quando strettamente necessario: dal punto di vista dell’accessibilità non si tratta di una soluzione ottimale."
          })
        })]
      })
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: AccordionAnnidati
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice-2",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: 'const [collapseElementOpen, setCollapseElement] = useState("");\r\nconst [nestedCollapseOpen, setNestedCollapseOpen] = useState("");\r\nreturn (\r\n    <Accordion>\r\n        <AccordionItem>\r\n            <AccordionHeader active={collapseElementOpen === "1"} onToggle={() => setCollapseElement(collapseElementOpen !== "1" ? "1" : "")}>\r\n                Elemento Accordion #1\r\n            </AccordionHeader>\r\n            <AccordionBody active={collapseElementOpen === "1"}>\r\n                <Accordion>\r\n                    <AccordionItem>\r\n                        <AccordionHeader active={nestedCollapseOpen === "1"} onToggle={() => setNestedCollapseOpen(nestedCollapseOpen !== "1" ? "1" : "")}>\r\n                            Elemento Accordion annidato #1\r\n                        </AccordionHeader>\r\n                        <AccordionBody active={nestedCollapseOpen === "1"}>\r\n                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non\r\n                            cupidatat skateboard dolor brunch.\r\n                        </AccordionBody>\r\n                    </AccordionItem>\r\n                    <AccordionItem>\r\n                        <AccordionHeader active={nestedCollapseOpen === "2"} onToggle={() => setNestedCollapseOpen(nestedCollapseOpen !== "2" ? "2" : "")}>\r\n                            Elemento Accordion annidato #2\r\n                        </AccordionHeader>\r\n                        <AccordionBody active={nestedCollapseOpen === "2"}>\r\n                            Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably\r\n                            haven&apos;t heard of them accusamus labore sustainable VHS.\r\n                        </AccordionBody>\r\n                    </AccordionItem>\r\n                    <AccordionItem>\r\n                        <AccordionHeader active={nestedCollapseOpen === "3"} onToggle={() => setNestedCollapseOpen(nestedCollapseOpen !== "3" ? "3" : "")}>\r\n                            Elemento Accordion annidato #3\r\n                        </AccordionHeader>\r\n                        <AccordionBody active={nestedCollapseOpen === "3"}>\r\n                            Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla\r\n                            assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r\n                        </AccordionBody>\r\n                    </AccordionItem>\r\n                </Accordion>\r\n            </AccordionBody>\r\n        </AccordionItem>\r\n        <AccordionHeader active={collapseElementOpen === "2"} onToggle={() => setCollapseElement(collapseElementOpen !== "2" ? "2" : "")}>\r\n            Elemento Accordion #2\r\n        </AccordionHeader>\r\n        <AccordionBody active={collapseElementOpen === "2"}>\r\n            Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven&apos;t heard\r\n            of them accusamus labore sustainable VHS.\r\n        </AccordionBody>\r\n\r\n        <AccordionHeader active={collapseElementOpen === "3"} onToggle={() => setCollapseElement(collapseElementOpen !== "3" ? "3" : "")}>\r\n            Elemento Accordion #3\r\n        </AccordionHeader>\r\n        <AccordionBody active={collapseElementOpen === "3"}>\r\n            Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda\r\n            shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r\n        </AccordionBody>\r\n    </Accordion>\r\n);\n'
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "sfondo-primario",
      children: "Sfondo primario"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Applicando attributi aggiuntivi al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Accordion"
      }), " è possibile utilizzare il colore primario come sfondo degli header."]
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "header-attivi",
      children: "Header attivi"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Aggiungere l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: 'background="active"'
      }), " al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Accordion"
      }), " per ottenere header con sfondo di colore primario quando questi sono attivi e il contenuto relativo è visibile."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: HeaderAttivi
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice-3",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: 'const [collapseElementOpen, setCollapseElement] = useState("");\r\nreturn (\r\n    <Accordion background="active">\r\n        <AccordionItem>\r\n            <AccordionHeader active={collapseElementOpen === "1"} onToggle={() => setCollapseElement(collapseElementOpen !== "1" ? "1" : "")}>\r\n                Elemento Accordion #1\r\n            </AccordionHeader>\r\n            <AccordionBody active={collapseElementOpen === "1"}>\r\n                Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh.\r\n                Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.\r\n            </AccordionBody>\r\n        </AccordionItem>\r\n        <AccordionItem>\r\n            <AccordionHeader active={collapseElementOpen === "2"} onToggle={() => setCollapseElement(collapseElementOpen !== "2" ? "2" : "")}>\r\n                Elemento Accordion #2\r\n            </AccordionHeader>\r\n            <AccordionBody active={collapseElementOpen === "2"}>\r\n                Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven&apos;t\r\n                heard of them accusamus labore sustainable VHS.\r\n            </AccordionBody>\r\n        </AccordionItem>\r\n        <AccordionItem>\r\n            <AccordionHeader active={collapseElementOpen === "3"} onToggle={() => setCollapseElement(collapseElementOpen !== "3" ? "3" : "")}>\r\n                Elemento Accordion #3\r\n            </AccordionHeader>\r\n            <AccordionBody active={collapseElementOpen === "3"}>\r\n                Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda\r\n                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r\n            </AccordionBody>\r\n        </AccordionItem>\r\n    </Accordion>\r\n);\n'
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "hover-degli-header",
      children: "Hover degli Header"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Aggiungere l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: 'background="hover"'
      }), " al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Accordion"
      }), " per ottenere header con sfondo di colore primario all’hover."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: HeaderHover
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice-4",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: 'const [collapseElementOpen, setCollapseElement] = useState("");\r\nreturn (\r\n    <Accordion background="hover">\r\n        <AccordionItem>\r\n            <AccordionHeader active={collapseElementOpen === "1"} onToggle={() => setCollapseElement(collapseElementOpen !== "1" ? "1" : "")}>\r\n                Elemento Accordion #1\r\n            </AccordionHeader>\r\n            <AccordionBody active={collapseElementOpen === "1"}>\r\n                Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh.\r\n                Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.\r\n            </AccordionBody>\r\n        </AccordionItem>\r\n        <AccordionItem>\r\n            <AccordionHeader active={collapseElementOpen === "2"} onToggle={() => setCollapseElement(collapseElementOpen !== "2" ? "2" : "")}>\r\n                Elemento Accordion #2\r\n            </AccordionHeader>\r\n            <AccordionBody active={collapseElementOpen === "2"}>\r\n                Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven&apos;t\r\n                heard of them accusamus labore sustainable VHS.\r\n            </AccordionBody>\r\n        </AccordionItem>\r\n        <AccordionItem>\r\n            <AccordionHeader active={collapseElementOpen === "3"} onToggle={() => setCollapseElement(collapseElementOpen !== "3" ? "3" : "")}>\r\n                Elemento Accordion #3\r\n            </AccordionHeader>\r\n            <AccordionBody active={collapseElementOpen === "3"}>\r\n                Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda\r\n                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r\n            </AccordionBody>\r\n        </AccordionItem>\r\n    </Accordion>\r\n);\n'
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "icona-a-sinistra",
      children: "Icona a sinistra"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Aggiungere l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "iconLeft={true}"
      }), " al 11componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Accordion"
      }), " per ottenere una variante in cui l’icona chevron che indica lo stato di apertura è sostituita da segni meno/più allineati a sinistra del titolo dell’header."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: IconaSinistra
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice-5",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: 'const [collapseElementOpen, setCollapseElement] = useState("");\r\nreturn (\r\n    <Accordion iconLeft>\r\n        <AccordionItem>\r\n            <AccordionHeader active={collapseElementOpen === "1"} onToggle={() => setCollapseElement(collapseElementOpen !== "1" ? "1" : "")}>\r\n                Elemento Accordion #1\r\n            </AccordionHeader>\r\n            <AccordionBody active={collapseElementOpen === "1"}>\r\n                Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh.\r\n                Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.\r\n            </AccordionBody>\r\n        </AccordionItem>\r\n        <AccordionItem>\r\n            <AccordionHeader active={collapseElementOpen === "2"} onToggle={() => setCollapseElement(collapseElementOpen !== "2" ? "2" : "")}>\r\n                Elemento Accordion #2\r\n            </AccordionHeader>\r\n            <AccordionBody active={collapseElementOpen === "2"}>\r\n                Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh.\r\n                Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.\r\n            </AccordionBody>\r\n        </AccordionItem>\r\n        <AccordionItem>\r\n            <AccordionHeader active={collapseElementOpen === "3"} onToggle={() => setCollapseElement(collapseElementOpen !== "3" ? "3" : "")}>\r\n                Elemento Accordion #3\r\n            </AccordionHeader>\r\n            <AccordionBody active={collapseElementOpen === "3"}>\r\n                Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh.\r\n                Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.\r\n            </AccordionBody>\r\n        </AccordionItem>\r\n    </Accordion>\r\n);\n'
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "argomenti-componente",
      children: "Argomenti componente"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "accordion-2",
      children: "Accordion"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: GruppiDiElementiRichiudibili
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "accordion-item",
      children: "Accordion Item"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: AccordionItem
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "accordionheader",
      children: "AccordionHeader"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: AccordionHeader
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "accordionbody",
      children: "AccordionBody"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: AccordionBody
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsxRuntimeExports.jsx(MDXLayout, {
    ...props,
    children: jsxRuntimeExports.jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
export {
  MDXContent as default
};
