import { j as jsxRuntimeExports } from "./jsx-runtime-CSOqN9Rs.js";
import { useMDXComponents } from "./index-ClSvUSci.js";
import { M as Meta, C as Canvas, g as gu } from "./index-BVpq9B0D.js";
import { C as Callout, a as CalloutText } from "./CalloutText-BgoYVD0G.js";
import { C as CalloutTitle } from "./CalloutTitle-BIAcK1-2.js";
import "./track-focus-DbJ2CO43.js";
import { C as ColorStories, a as ColoriTesto, b as ColoriSfondo } from "./Color.stories-TMU46o7v.js";
import "./index-CoR6MlO7.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-DgllHHqV.js";
import "./index-C2Bg70Bz.js";
import "./index-CnhJHytA.js";
import "./index-9xAnpW0o.js";
import "./index-BdOSk9or.js";
import "./index-xoeSAV6i.js";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    p: "p",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: ColorStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "colori",
      children: "Colori"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "una-serie-di-classi-di-utilità-per-applicare-colori-a-testi-e-sfondi",
      children: "Una serie di classi di utilità per applicare colori a testi e sfondi."
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
          children: [jsxRuntimeExports.jsx(_components.p, {
            children: "Il colore è uno degli strumenti principali per la trasmissione delle informazioni, ma non dimenticare mai di\r\naffiancare all’uso del colore altri mezzi più espliciti. Leggi la sezione sull’"
          }), jsxRuntimeExports.jsx("a", {
            href: "https://docs.italia.it/italia/designers-italia/design-linee-guida-docs/it/stabile/doc/service-design/accessibilita.html#uso-del-colore",
            target: "_blank",
            rel: "noopener noreferrer",
            children: jsxRuntimeExports.jsx(_components.p, {
              children: "uso del colore"
            })
          }), jsxRuntimeExports.jsx(_components.p, {
            children: "delle Linee Guida di design per maggiori informazioni."
          })]
        })]
      })
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Bootstrap Italia eredita gli stessi meccanisimi per la gestione dei colori di Bootstrap 4.5.0, dove i colori del tema sono descritti attraverso una variabile Sass nominata ", jsxRuntimeExports.jsx(_components.code, {
        children: "$theme-colors"
      }), "."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["La principale novità introdotta da Bootstrap Italia è una serie di varianti della tonalità primaria primary basate sullo spazio colore ", jsxRuntimeExports.jsx("a", {
        href: "https://it.wikipedia.org/wiki/Hue_Saturation_Brightness",
        target: "_blank",
        rel: "noopener noreferrer",
        children: "HSB"
      }), " (coincidente con il modello HSV)."]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Questo permette di avere a disposizione 16 diverse varianti “monocromatiche” (in quanto hue e, in gran parte anche saturation rimangono invariate) che, essendo aggiunte alla lista di $theme-colors, sono disponibili per tutti quei componenti ed utilità che ne fanno uso, come ad esempio .text- e .bg-*."
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Puoi trovare maggiori informazioni sulla palette di colori a disposizione alla pagina ", jsxRuntimeExports.jsx(_components.a, {
        href: "?path=/docs/documentazione-utilities-colori-custom--page",
        children: "Colori Custom"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "colore-del-testo",
      children: "Colore del testo"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ColoriTesto
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "colore-di-sfondo",
      children: "Colore di sfondo"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Allo stesso modo di quanto avviene per il testo, le classi ", jsxRuntimeExports.jsx(_components.code, {
        children: "bg-*"
      }), " permettono di colorare lo sfondo di un elemento; le classi per gli sfondi non hanno alcun impatto sulla proprità color, per cui in alcuni casi sarà necessario affiancarle alle classi ", jsxRuntimeExports.jsx(_components.code, {
        children: ".text-*"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ColoriSfondo
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "colore-di-sfondo-con-gradiente",
      children: "Colore di sfondo con gradiente"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Bootstrap Italia eredita da Bootstrap la possibilità di avere sfondi con gradiente. Tale funzionalità non è però attiva, e va esplicitamente impostata attraverso la variabile SASS ", jsxRuntimeExports.jsx(_components.code, {
        children: "$enable-gradients"
      }), ", e ricompilando i file sorgente."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Si possono trovare maggiori informazioni a riguardo sul ", jsxRuntimeExports.jsx("a", {
        href: "https://getbootstrap.com/docs/5.2/utilities/colors/#background-gradient",
        target: "_blank",
        rel: "noopener noreferrer",
        children: "sito di Bootstrap"
      }), "."]
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
          children: jsxRuntimeExports.jsxs(_components.p, {
            children: ["L’uso del colore per aggiungere un significato fornisce solo un’indicazione visiva, che non sarà trasmesso agli\r\nutenti di tecnologie assistive – come gli screen reader. Assicurati che le informazioni denotate dal colore siano\r\nrese disponibili anche dal contenuto stesso (es.: il testo visibile), o siano incluse attraverso mezzi\r\nalternativi, come testo aggiuntivo nascosto con la classe\r\n", jsxRuntimeExports.jsx(gu, {
              children: ".visually-hidden"
            }), "."]
          })
        })]
      })
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
