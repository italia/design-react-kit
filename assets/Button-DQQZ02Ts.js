import { j as jsxRuntimeExports } from "./jsx-runtime-Dd8filLf.js";
import { useMDXComponents } from "./index-DKZlwgtl.js";
import { M as Meta, C as Canvas, a as Controls3, g as gu, A as ArgTypes } from "./index-BPANlHNH.js";
import { B as Button } from "./Button-DzBfv9Kx.js";
import { C as Callout, a as CalloutText } from "./CalloutText-BaMkNk9G.js";
import { C as CalloutTitle } from "./CalloutTitle-DHuv_iNr.js";
import "./track-focus-DbJ2CO43.js";
import { B as ButtonStories, E as EsempioInterattivo, T as Tipologie, V as VariantiColore, S as SfondoScuro, a as BottoniConIcona, b as BottoniConIconaCerchiata, c as VariantiDiDimensione } from "./Button.stories-D7H6XwrM.js";
import "./index-N7T0HPyM.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-CRwMvLv-.js";
import "./index-DaSoJtbc.js";
import "./index-_6PbV05F.js";
import "./index-9xAnpW0o.js";
import "./index-BdOSk9or.js";
import "./index-xoeSAV6i.js";
import "./Button-FBjU0jYp.js";
import "./utils-Cn8VSNph.js";
import "./Icon-Dnsb7XVC.js";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: ButtonStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "bottoni",
      children: "Bottoni"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "bootstrap-italia-definisce-alcuni-stili-per-i-bottoni-da-utilizzare-a-seconda-delle-necessità",
      children: "Bootstrap Italia definisce alcuni stili per i bottoni da utilizzare a seconda delle necessità"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "utilizzo",
      children: "Utilizzo"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per aggiungere un bottone personalizzato, è sufficiente utilizzare il componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Button"
      }), " ed i relativi attributi per applicarne le varianti di stile, dimensione, ecc."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EsempioInterattivo
    }), "\n", jsxRuntimeExports.jsx(Controls3, {
      of: EsempioInterattivo
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Il componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Button"
      }), " è state pensato per essere utilizzate con l’elemento ", jsxRuntimeExports.jsx(_components.code, {
        children: "<button/>"
      }), ". Tuttavia, è possibile applicare lo stile per i bottoni anche ad elementi di tipo ", jsxRuntimeExports.jsx(_components.code, {
        children: "<a/>"
      }), " o ", jsxRuntimeExports.jsx(_components.code, {
        children: "<input/>"
      }), ", anche se alcuni browser potrebbero mostrare un rendering lievemente diverso."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["In questi casi, non dimenticare di utilizzare in modo appropriato gli attributi ", jsxRuntimeExports.jsx(_components.code, {
        children: 'role="button"'
      }), " per trasmettere il loro scopo alle tecnologie assistive."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Tipologie
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "varianti-di-colore",
      children: "Varianti di colore"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Gli stili definiti da Bootstrap Italia utilizzano un naming consistente con Bootstrap, con alcune personalizzazioni:"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: VariantiColore
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "note-sullo-stato-disabilitato",
      children: "Note sullo stato disabilitato"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["I tag ", jsxRuntimeExports.jsx(_components.code, {
          children: "<a/>"
        }), " non supportano l’attributo ", jsxRuntimeExports.jsx(_components.code, {
          children: "disabled"
        }), ", per cui è necessario usare la classe ", jsxRuntimeExports.jsx(_components.code, {
          children: ".disabled"
        }), " per farli apparire visivamente disabilitati, e in modo da disabilitare pointer-events su di essi sui browser che lo supportano."]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["I bottoni disabilitati includeranno l’attributo ", jsxRuntimeExports.jsx(_components.code, {
          children: 'aria-disabled="true"'
        }), " per indicare lo stato dell’elemento alle tecnologie assistive."]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx("div", {
      className: "docs",
      children: jsxRuntimeExports.jsxs(Callout, {
        color: "warning",
        children: [jsxRuntimeExports.jsx(CalloutTitle, {
          children: jsxRuntimeExports.jsx("span", {
            className: "text",
            children: "Disabilitazione link"
          })
        }), jsxRuntimeExports.jsx(CalloutText, {
          children: jsxRuntimeExports.jsxs(_components.p, {
            children: ["La classe ", jsxRuntimeExports.jsx(gu, {
              children: ".disabled"
            }), " usa ", jsxRuntimeExports.jsx(gu, {
              children: "pointer-events: none"
            }), " per provare a disabilitare l’attivazione dei comportamenti di default dei\r\nlink ", jsxRuntimeExports.jsx(gu, {
              children: "<a>"
            }), ", ma tale funzionalità non è gestita in alcuni browsers. Oltre a questo, la navigazione attraverso tastiera rimane\r\nabilitata, per cui utenti che utilizzano tecnologie assistive saranno comunque in grado di attivare tali link. Per ovviare a questo problema, è\r\npossibile aggiungere l’attributo ", jsxRuntimeExports.jsx(gu, {
              children: 'tabindex="-1"'
            }), " e utilizzare Javascript per disabilitare le loro funzionalità."]
          })
        })]
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "su-sfondo-scuro",
      children: "Su sfondo scuro"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: SfondoScuro
    }), "\n", jsxRuntimeExports.jsx("div", {
      className: "docs",
      children: jsxRuntimeExports.jsxs(Callout, {
        color: "success",
        children: [jsxRuntimeExports.jsx(CalloutTitle, {
          children: jsxRuntimeExports.jsx("span", {
            className: "text",
            children: "Trasmettere significato alle tecnologie assistive"
          })
        }), jsxRuntimeExports.jsx(CalloutText, {
          children: jsxRuntimeExports.jsx("p", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["L’uso del colore per aggiungere un significato fornisce solo un’indicazione visiva, che non sarà trasmesso agli utenti di tecnologie assistive –\r\ncome gli screen reader. Assicurati che le informazioni denotate dal colore siano rese disponibili anche dal contenuto stesso (es.: il testo\r\nvisibile), o siano incluse attraverso mezzi alternativi, come testo aggiuntivo nascosto con la classe ", jsxRuntimeExports.jsx(gu, {
                children: ".visually-hidden"
              }), "."]
            })
          })
        })]
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "bottoni-con-icona",
      children: "Bottoni con icona"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["E’ possibile aggiungere un’icona personalizzata al bottone con l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "icon"
      }), " in aggiunta nel componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Button"
      }), " e alle relative varianti cromatiche e di dimensione."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: BottoniConIcona
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "icona-cerchiata",
      children: "Icona cerchiata"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Inoltre è possibile applicare un contorno cerchiato dell’icona utilizzando un contenitore con classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".rounded-icon"
      }), " da inserire all’interno della classe .btn con possibilità di personalizzazione del suo aspetto cromatico attraverso i modificatori ", jsxRuntimeExports.jsx(_components.code, {
        children: ".rounded-_"
      }), " e ", jsxRuntimeExports.jsx(_components.code, {
        children: ".icon``.icon-_"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: BottoniConIconaCerchiata
    }), "\n", jsxRuntimeExports.jsx("div", {
      className: "docs",
      children: jsxRuntimeExports.jsxs(Callout, {
        color: "warning",
        children: [jsxRuntimeExports.jsx(CalloutTitle, {
          children: jsxRuntimeExports.jsx("span", {
            className: "text",
            children: "Allineamento e spaziatura dell’icona"
          })
        }), jsxRuntimeExports.jsx(CalloutText, {
          children: jsxRuntimeExports.jsx("p", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["Nel caso si utilizzi un’icona cerchiata all’interno di un componente ", jsxRuntimeExports.jsx(gu, {
                children: "Button"
              }), ", è necessario inserire il testo del bottone/link\r\nall’interno di un tag ", jsxRuntimeExports.jsx(gu, {
                children: "<span>"
              }), " al fine di garantire un perfetto allineamento ed una corretta spaziatura tra l’icona e lo stesso\r\ntesto."]
            })
          })
        })]
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "varianti-di-dimensione",
      children: "Varianti di dimensione"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per ottenere bottoni di dimensione più grande o più piccola, è sufficiente utilizzare l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "size"
      }), " con i valori ", jsxRuntimeExports.jsx(_components.code, {
        children: '"lg"'
      }), ", ", jsxRuntimeExports.jsx(_components.code, {
        children: '"sm"'
      }), ", ", jsxRuntimeExports.jsx(_components.code, {
        children: '"xs"'
      }), "."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Utilizzando invece l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "block"
      }), " si ottengono invece bottoni che prendono tutta l’ampiezza a loro disposizione, a seconda delle dimensioni del loro contenitore. In questo caso, anche i bordi non sono più arrotondati."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: VariantiDiDimensione
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "approfondimento",
      children: "Approfondimento"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["È possibile provare a personalizzare live il componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Button"
      }), " presso ", jsxRuntimeExports.jsx(_components.a, {
        href: "?path=/story/componenti-button--esempi-interattivi",
        children: "l'esempio interattivo"
      }), "."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per ulteriori informazioni sui bottoni si rimanda alla sezione ", jsxRuntimeExports.jsx(_components.code, {
        children: "buttons"
      }), " del sito ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://reactstrap.github.io/?path=/docs/components-button--button",
        rel: "nofollow",
        children: "Reactstrap (v9)"
      }), ", quindi di ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://getbootstrap.com/docs/5.1/components/buttons/",
        rel: "nofollow",
        children: "Bootstrap"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "argomenti-componente",
      children: "Argomenti componente"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "button",
      children: "Button"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: Button
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
