import { j as jsxRuntimeExports } from "./jsx-runtime-COvKL7u4.js";
import { useMDXComponents } from "./index-DMZ0ur-z.js";
import { M as Meta, c as ci, C as Canvas, A as ArgTypes } from "./blocks-C66hpFDv.js";
import { a as AccordionItem, b as AccordionHeader, c as AccordionBody } from "./AccordionItem-C3Mr2AiE.js";
import { C as Callout, a as CalloutText } from "./CalloutText-Dfvy4CBZ.js";
import { C as CalloutTitle } from "./CalloutTitle-C5_6km6k.js";
import "./track-focus-DbJ2CO43.js";
import { A as AccordionStories, G as GruppiDiElementiRichiudibili, _ as _Accordion, a as AccordionAnnidati, H as HeaderAttivi, b as HeaderHover, I as IconaSinistra } from "./Accordion.stories-BLm247Ym.js";
import "./iframe-BMr-kR9u.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-CJ9b0Pjr.js";
import "./index-CuPZ171k.js";
import "./utils-CwYUlCuU.js";
import "./Transition-Du0bJJBs.js";
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
            children: ["Nell’esempio di codice ogni elemento ", jsxRuntimeExports.jsx(ci, {
              children: "<button>"
            }), " è inserito all’interno di un elemento <h2>\n(o altro livello h in funzione del contesto) in quanto, frequentemente, i pulsanti di azione di un accordion sono\nanche i titoli della sezione che segue."]
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
        children: "const [collapseElementOpen, setCollapseElement] = useState('');\nreturn (\n  <Accordion>\n    <AccordionItem>\n      <AccordionHeader\n        active={collapseElementOpen === '1'}\n        onToggle={() => setCollapseElement(collapseElementOpen !== '1' ? '1' : '')}\n      >\n        Elemento Richiudibile #1\n      </AccordionHeader>\n      <AccordionBody active={collapseElementOpen === '1'}>\n        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon\n        officia aute, non cupidatat skateboard dolor brunch.\n      </AccordionBody>\n    </AccordionItem>\n    <AccordionItem>\n      <AccordionHeader\n        active={collapseElementOpen === '2'}\n        onToggle={() => setCollapseElement(collapseElementOpen !== '2' ? '2' : '')}\n      >\n        Elemento Richiudibile #2\n      </AccordionHeader>\n      <AccordionBody active={collapseElementOpen === '2'}>\n        Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth\n        nesciunt you probably haven&apos;t heard of them accusamus labore sustainable VHS.\n      </AccordionBody>\n    </AccordionItem>\n    <AccordionItem>\n      <AccordionHeader\n        active={collapseElementOpen === '3'}\n        onToggle={() => setCollapseElement(collapseElementOpen !== '3' ? '3' : '')}\n      >\n        Elemento Richiudibile #3\n      </AccordionHeader>\n      <AccordionBody active={collapseElementOpen === '3'}>\n        Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid\n        single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes\n        anderson cred nesciunt sapiente ea proident.\n      </AccordionBody>\n    </AccordionItem>\n  </Accordion>\n);\n"
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
        }), jsxRuntimeExports.jsxs(CalloutText, {
          children: [jsxRuntimeExports.jsxs(_components.p, {
            children: ["Assicurati di aggiungere ", jsxRuntimeExports.jsx(ci, {
              children: "aria-expanded"
            }), " all’elemento di controllo. Questo attributo trasmette esplicitamente lo stato corrente\ndell’elemento comprimibile legato al controllo a screen reader e tecnologie assistive simili. Se l’elemento comprimibile è chiuso in modo\npredefinito, l’attributo sull’elemento di controllo dovrebbe avere il valore ", jsxRuntimeExports.jsx(ci, {
              children: 'aria-expanded="false"'
            }), ". Se imposti l’elemento comprimibile\naperto in modo predefinito, sul controllo invece imposta\n", jsxRuntimeExports.jsx(ci, {
              children: 'aria-expanded="true"'
            }), ". Il componente\n", jsxRuntimeExports.jsx(ci, {
              children: "AccordionHeader"
            }), " applica automaticamente questo attributo, ma qualora venisse usato un componente di controllo esterno sarà necessario aggiungerlo manualmente. Se utilizzi un elemento non-button come controllo:\nSe utilizzi un elemento non-button come controllo (ad esempio un ", jsxRuntimeExports.jsx(ci, {
              children: "<div>"
            }), " o un ", jsxRuntimeExports.jsx(ci, {
              children: "<a>"
            }), "):"]
          }), jsxRuntimeExports.jsxs(_components.p, {
            children: ["• Per link (", jsxRuntimeExports.jsx(ci, {
              children: "<a>"
            }), "): generalmente non assegnare ", jsxRuntimeExports.jsx(ci, {
              children: 'role="button"'
            }), ". Mantieni il ruolo nativo link e assicurati che abbia una funzione di navigazione. Se la sua funzione è esclusivamente controllare l'espansione, preferisci l'uso di un ", jsxRuntimeExports.jsx(ci, {
              children: "<button>"
            }), "."]
          }), jsxRuntimeExports.jsxs(_components.p, {
            children: ["• Per elementi generici (", jsxRuntimeExports.jsx(ci, {
              children: "<div>"
            }), ", ", jsxRuntimeExports.jsx(ci, {
              children: "<span>"
            }), "): aggiungi ", jsxRuntimeExports.jsx(ci, {
              children: 'role="button"'
            }), ", rendilo focusabile con ", jsxRuntimeExports.jsx(ci, {
              children: 'tabindex="0"'
            }), ", gestisci il click tramite ", jsxRuntimeExports.jsx(ci, {
              children: "onClick"
            }), ", gestisci l'attivazione da tastiera (tasti Enter e Spazio tramite ", jsxRuntimeExports.jsx(ci, {
              children: "onKeyDown"
            }), ") e rendi visibile il focus (ad esempio con outline CSS)."]
          })]
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
        children: "const [collapseElementOpen, setCollapseElement] = useState('');\nreturn (\n  <Accordion>\n    <AccordionItem>\n      <AccordionHeader\n        active={collapseElementOpen === '1'}\n        onToggle={() => setCollapseElement(collapseElementOpen !== '1' ? '1' : '')}\n      >\n        Accordion Group Item #1\n      </AccordionHeader>\n      <AccordionBody active={collapseElementOpen === '1'} listClassName={'custom-class'}>\n        Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus\n        facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.\n      </AccordionBody>\n    </AccordionItem>\n    <AccordionItem>\n      <AccordionHeader\n        active={collapseElementOpen === '2'}\n        onToggle={() => setCollapseElement(collapseElementOpen !== '2' ? '2' : '')}\n      >\n        Accordion Group Item #2\n      </AccordionHeader>\n      <AccordionBody active={collapseElementOpen === '2'} listClassName={'custom-class'}>\n        Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth\n        nesciunt you probably haven&apos;t heard of them accusamus labore sustainable VHS.\n      </AccordionBody>\n    </AccordionItem>\n    <AccordionItem>\n      <AccordionHeader\n        active={collapseElementOpen === '3'}\n        onToggle={() => setCollapseElement(collapseElementOpen !== '3' ? '3' : '')}\n      >\n        Accordion Group Item #3\n      </AccordionHeader>\n      <AccordionBody active={collapseElementOpen === '3'} listClassName={'custom-class'}>\n        Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid\n        single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes\n        anderson cred nesciunt sapiente ea proident.\n      </AccordionBody>\n    </AccordionItem>\n  </Accordion>\n);\n"
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
            children: "Utilizzare questo approccio solo quando strettamente necessario: dal punto di vista dell’accessibilità non si\ntratta di una soluzione ottimale."
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
        children: "const [collapseElementOpen, setCollapseElement] = useState('');\nconst [nestedCollapseOpen, setNestedCollapseOpen] = useState('');\nreturn (\n  <Accordion>\n    <AccordionItem>\n      <AccordionHeader\n        active={collapseElementOpen === '1'}\n        onToggle={() => setCollapseElement(collapseElementOpen !== '1' ? '1' : '')}\n      >\n        Elemento Accordion #1\n      </AccordionHeader>\n      <AccordionBody active={collapseElementOpen === '1'}>\n        <Accordion>\n          <AccordionItem>\n            <AccordionHeader\n              active={nestedCollapseOpen === '1'}\n              onToggle={() => setNestedCollapseOpen(nestedCollapseOpen !== '1' ? '1' : '')}\n            >\n              Elemento Accordion annidato #1\n            </AccordionHeader>\n            <AccordionBody active={nestedCollapseOpen === '1'}>\n              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf\n              moon officia aute, non cupidatat skateboard dolor brunch.\n            </AccordionBody>\n          </AccordionItem>\n          <AccordionItem>\n            <AccordionHeader\n              active={nestedCollapseOpen === '2'}\n              onToggle={() => setNestedCollapseOpen(nestedCollapseOpen !== '2' ? '2' : '')}\n            >\n              Elemento Accordion annidato #2\n            </AccordionHeader>\n            <AccordionBody active={nestedCollapseOpen === '2'}>\n              Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic\n              synth nesciunt you probably haven&apos;t heard of them accusamus labore sustainable VHS.\n            </AccordionBody>\n          </AccordionItem>\n          <AccordionItem>\n            <AccordionHeader\n              active={nestedCollapseOpen === '3'}\n              onToggle={() => setNestedCollapseOpen(nestedCollapseOpen !== '3' ? '3' : '')}\n            >\n              Elemento Accordion annidato #3\n            </AccordionHeader>\n            <AccordionBody active={nestedCollapseOpen === '3'}>\n              Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid\n              single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes\n              anderson cred nesciunt sapiente ea proident.\n            </AccordionBody>\n          </AccordionItem>\n        </Accordion>\n      </AccordionBody>\n    </AccordionItem>\n    <AccordionHeader\n      active={collapseElementOpen === '2'}\n      onToggle={() => setCollapseElement(collapseElementOpen !== '2' ? '2' : '')}\n    >\n      Elemento Accordion #2\n    </AccordionHeader>\n    <AccordionBody active={collapseElementOpen === '2'}>\n      Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth\n      nesciunt you probably haven&apos;t heard of them accusamus labore sustainable VHS.\n    </AccordionBody>\n\n    <AccordionHeader\n      active={collapseElementOpen === '3'}\n      onToggle={() => setCollapseElement(collapseElementOpen !== '3' ? '3' : '')}\n    >\n      Elemento Accordion #3\n    </AccordionHeader>\n    <AccordionBody active={collapseElementOpen === '3'}>\n      Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid\n      single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson\n      cred nesciunt sapiente ea proident.\n    </AccordionBody>\n  </Accordion>\n);\n"
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
        children: "const [collapseElementOpen, setCollapseElement] = useState('');\nreturn (\n  <Accordion background='active'>\n    <AccordionItem>\n      <AccordionHeader\n        active={collapseElementOpen === '1'}\n        onToggle={() => setCollapseElement(collapseElementOpen !== '1' ? '1' : '')}\n      >\n        Elemento Accordion #1\n      </AccordionHeader>\n      <AccordionBody active={collapseElementOpen === '1'}>\n        Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus\n        facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.\n      </AccordionBody>\n    </AccordionItem>\n    <AccordionItem>\n      <AccordionHeader\n        active={collapseElementOpen === '2'}\n        onToggle={() => setCollapseElement(collapseElementOpen !== '2' ? '2' : '')}\n      >\n        Elemento Accordion #2\n      </AccordionHeader>\n      <AccordionBody active={collapseElementOpen === '2'}>\n        Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth\n        nesciunt you probably haven&apos;t heard of them accusamus labore sustainable VHS.\n      </AccordionBody>\n    </AccordionItem>\n    <AccordionItem>\n      <AccordionHeader\n        active={collapseElementOpen === '3'}\n        onToggle={() => setCollapseElement(collapseElementOpen !== '3' ? '3' : '')}\n      >\n        Elemento Accordion #3\n      </AccordionHeader>\n      <AccordionBody active={collapseElementOpen === '3'}>\n        Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid\n        single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes\n        anderson cred nesciunt sapiente ea proident.\n      </AccordionBody>\n    </AccordionItem>\n  </Accordion>\n);\n"
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
        children: "const [collapseElementOpen, setCollapseElement] = useState('');\nreturn (\n  <Accordion background='hover'>\n    <AccordionItem>\n      <AccordionHeader\n        active={collapseElementOpen === '1'}\n        onToggle={() => setCollapseElement(collapseElementOpen !== '1' ? '1' : '')}\n      >\n        Elemento Accordion #1\n      </AccordionHeader>\n      <AccordionBody active={collapseElementOpen === '1'}>\n        Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus\n        facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.\n      </AccordionBody>\n    </AccordionItem>\n    <AccordionItem>\n      <AccordionHeader\n        active={collapseElementOpen === '2'}\n        onToggle={() => setCollapseElement(collapseElementOpen !== '2' ? '2' : '')}\n      >\n        Elemento Accordion #2\n      </AccordionHeader>\n      <AccordionBody active={collapseElementOpen === '2'}>\n        Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth\n        nesciunt you probably haven&apos;t heard of them accusamus labore sustainable VHS.\n      </AccordionBody>\n    </AccordionItem>\n    <AccordionItem>\n      <AccordionHeader\n        active={collapseElementOpen === '3'}\n        onToggle={() => setCollapseElement(collapseElementOpen !== '3' ? '3' : '')}\n      >\n        Elemento Accordion #3\n      </AccordionHeader>\n      <AccordionBody active={collapseElementOpen === '3'}>\n        Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid\n        single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes\n        anderson cred nesciunt sapiente ea proident.\n      </AccordionBody>\n    </AccordionItem>\n  </Accordion>\n);\n"
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
        children: "const [collapseElementOpen, setCollapseElement] = useState('');\nreturn (\n  <Accordion iconLeft>\n    <AccordionItem>\n      <AccordionHeader\n        active={collapseElementOpen === '1'}\n        onToggle={() => setCollapseElement(collapseElementOpen !== '1' ? '1' : '')}\n      >\n        Elemento Accordion #1\n      </AccordionHeader>\n      <AccordionBody active={collapseElementOpen === '1'}>\n        Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus\n        facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.\n      </AccordionBody>\n    </AccordionItem>\n    <AccordionItem>\n      <AccordionHeader\n        active={collapseElementOpen === '2'}\n        onToggle={() => setCollapseElement(collapseElementOpen !== '2' ? '2' : '')}\n      >\n        Elemento Accordion #2\n      </AccordionHeader>\n      <AccordionBody active={collapseElementOpen === '2'}>\n        Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus\n        facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.\n      </AccordionBody>\n    </AccordionItem>\n    <AccordionItem>\n      <AccordionHeader\n        active={collapseElementOpen === '3'}\n        onToggle={() => setCollapseElement(collapseElementOpen !== '3' ? '3' : '')}\n      >\n        Elemento Accordion #3\n      </AccordionHeader>\n      <AccordionBody active={collapseElementOpen === '3'}>\n        Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus\n        facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.\n      </AccordionBody>\n    </AccordionItem>\n  </Accordion>\n);\n"
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
