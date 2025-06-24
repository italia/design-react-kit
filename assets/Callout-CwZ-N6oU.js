import { j as jsxRuntimeExports } from "./jsx-runtime-CSOqN9Rs.js";
import { useMDXComponents } from "./index-ClSvUSci.js";
import { M as Meta, g as gu, C as Canvas, a as Controls3, A as ArgTypes } from "./index-QdT6tkzo.js";
import { C as Callout, a as CalloutText } from "./CalloutText-BgoYVD0G.js";
import { C as CalloutStories, E as EsempioBasico, a as EsempioConIcona, b as CalloutVariantiColore, c as CalloutHighlights, d as CalloutApprofondimento, e as CalloutMoreFooter } from "./Callout.stories-DcurlEb0.js";
import { C as CalloutTitle } from "./CalloutTitle-BIAcK1-2.js";
import "./track-focus-DbJ2CO43.js";
import "./index-CoR6MlO7.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-CoPLwh-N.js";
import "./index-C2Bg70Bz.js";
import "./index-CnhJHytA.js";
import "./index-9xAnpW0o.js";
import "./index-BdOSk9or.js";
import "./index-xoeSAV6i.js";
import "./Button-DWiqemTT.js";
import "./Button-9tmxVOl-.js";
import "./utils-Cn8VSNph.js";
import "./Icon-D-lIVtkA.js";
function _createMdxContent(props) {
  const _components = {
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
      of: CalloutStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "callout",
      children: "Callout"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "componente-per-evidenziare-contenuti-testuali",
      children: "Componente per evidenziare contenuti testuali"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "I Callout posso essere utilizzati per evidenziare alcune parti del testo che richiedono particolare attenzione. Possono contenere messaggi di errore, avvertimento suggerimenti, ecc."
    }), "\n", jsxRuntimeExports.jsx("div", {
      className: "docs",
      children: jsxRuntimeExports.jsxs(Callout, {
        color: "danger",
        children: [jsxRuntimeExports.jsx(CalloutTitle, {
          children: jsxRuntimeExports.jsx("span", {
            className: "text",
            children: "Breaking change"
          })
        }), jsxRuntimeExports.jsx(CalloutText, {
          children: jsxRuntimeExports.jsxs(_components.p, {
            children: ["Dalla versione 5 del kit, nel callout basico è necessario mettere il titolo in un tag ", jsxRuntimeExports.jsx(_components.code, {
              children: "span"
            }), ' con classe "text". Esempio:\r\n', jsxRuntimeExports.jsx(gu, {
              children: '<CalloutTitle><span class="text">Titolo callout</span></CalloutTitle>.'
            })]
          })
        })]
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "esempi",
      children: "Esempi"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Il Callout basico è costituito da un contenitore ", jsxRuntimeExports.jsx(_components.code, {
        children: "Callout"
      }), ", un titolo contenuto in un ", jsxRuntimeExports.jsx(_components.code, {
        children: "CalloutTitle"
      }), " e un testo contenuto in uno o più tag ", jsxRuntimeExports.jsx(_components.code, {
        children: "CalloutText"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EsempioBasico
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "con-icona",
      children: "Con icona"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Al titolo può essere aggiunta un’icona a scelta fra quelle disponibili, avendo cura di nasconderla agli screen reader con la proprietà ", jsxRuntimeExports.jsx(_components.code, {
        children: 'aria-hidden="true"'
      }), "."]
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
            children: ["Nel caso l’icona comunicasse visivamente contenuti non disponibili nel testo (ad esempio un allarme o una conferma) questa andrà affiancata da un\r\ntesto riservato agli screen reader: ", jsxRuntimeExports.jsx(gu, {
              children: '<span class="visually-hidden">Testo alternativo</span>'
            }), "."]
          })
        })]
      })
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EsempioConIcona
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Al Callout può essere aggiunto un attributo che determina il colore del bordo e del titolo. I colori disponibili sono elencati di seguito."
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "varianti-di-colore",
      children: "Varianti di colore"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Ecco un esempio interattivo per il cambio di colore"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Suggerimento colore->icona:"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "success | it-check-circle"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "warning | it-help-circle"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "danger | it-close-circle"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "note | it-info-circle"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "important | it-info-circle"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: CalloutVariantiColore
    }), "\n", jsxRuntimeExports.jsx(Controls3, {
      of: CalloutVariantiColore
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "callout-highlights",
      children: "Callout Highlights"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Aggiungere l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "highlight"
      }), " si ottiene una differente versione del Callout, con bordo solo sul lato sinistro."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per aumentare la dimensione di un paragrafo contenuto nel ", jsxRuntimeExports.jsx(_components.code, {
        children: "CalloutText"
      }), " aggiungere l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "bigText"
      }), " allo stesso."]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Suggerimento colore->icona:"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "success | it-check-circle"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "warning | it-help-circle"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "danger | it-close-circle"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "note | it-info-circle"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "important | it-info-circle"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: CalloutHighlights
    }), "\n", jsxRuntimeExports.jsx(Controls3, {
      of: CalloutHighlights
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "callout-approfondimento",
      children: "Callout Approfondimento"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Il Callout di tipo Approfondimento, ottenibile aggiungendo l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "detailed"
      }), " al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Callout"
      }), ", ha un aspetto\r\nradicalmente differente dagli altri stili disponibili ed è indicato per testi più estesi."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Come da esempio, è possibile aggiungere ulteriore testo all’interno di un componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "CalloutMoreFooter"
      }), ", avendo cura di\r\npassargli anche un id univoco."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Il bottone di controllo del ", jsxRuntimeExports.jsx(_components.code, {
        children: "CalloutMoreFooter"
      }), " può essere affiancato da un link per download di PDF o altri tipi di\r\ndocumento, con relativa icona."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: CalloutApprofondimento
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "argomenti-componente",
      children: "Argomenti componente"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "callout-1",
      children: "Callout"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: Callout
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "callouttitle",
      children: "CalloutTitle"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: CalloutTitle
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "callouttext",
      children: "CalloutText"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: CalloutText
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "calloutmorefooter",
      children: "CalloutMoreFooter"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: CalloutMoreFooter
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
