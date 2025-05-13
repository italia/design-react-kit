import { j as jsxRuntimeExports } from "./jsx-runtime-Dd8filLf.js";
import { useMDXComponents } from "./index-DKZlwgtl.js";
import { M as Meta, g as gu, C as Canvas, A as ArgTypes } from "./index-BdnIcMZW.js";
import "./track-focus-DbJ2CO43.js";
import { H as HeroStories, a as HeroConSfondo, b as HeroConSfondoSmall, c as HeroConTesto, d as HeroConTestoCentrato, e as HeroConTestoSuSfondo, f as HeroConTestoSuSfondoOverlayPrimario, g as HeroConSfondoOverlayFiltro, h as HeroConSfondoMargineNegativo, i as Hero, j as HeroBackground, k as HeroBody, l as HeroButton, m as HeroCategory, n as HeroTitle } from "./Hero.stories-w4Di9FSD.js";
import "./index-N7T0HPyM.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-B99PWC6O.js";
import "./index-DaSoJtbc.js";
import "./index-_6PbV05F.js";
import "./index-9xAnpW0o.js";
import "./index-BdOSk9or.js";
import "./Container-Bin81bHr.js";
import "./utils-Cn8VSNph.js";
import "./index-xoeSAV6i.js";
import "./Col-C4Vz86Og.js";
import "./Card-C_tzQcI4.js";
import "./CardText-B3_Owstv.js";
import "./CardSignature-BtmG-Ywg.js";
import "./Icon-Dz7RaEwn.js";
import "./CardTitle-CT3exvbd.js";
import "./Button-DzBfv9Kx.js";
import "./Button-FBjU0jYp.js";
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: HeroStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "hero",
      children: "Hero"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "lo-hero-ciò-che-bootstrap-definisce-jumbotron-è-un-componente-per-la-presentazione-di-contenuti-in-evidenza",
      children: "Lo Hero (ciò che Bootstrap definisce “Jumbotron”) è un componente per la presentazione di contenuti in evidenza."
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["La ", jsxRuntimeExports.jsx(_components.code, {
        children: "hero"
      }), " è un componente leggero e flessibile che può facoltativamente estendere l’intera finestra per mostrare i messaggi in evidenza sul tuo sito. Di seguito una serie di esempi con la descrizione degli elementi e delle classi applicabili."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Il componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Hero"
      }), " può contenere"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Sub head - ", jsxRuntimeExports.jsx(_components.code, {
          children: "HeroCategory"
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Heading (titolo) - ", jsxRuntimeExports.jsx(_components.code, {
          children: "HeroTitle"
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Paragrafo - ", jsxRuntimeExports.jsx(_components.code, {
          children: "HeroBody"
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Call to action - ", jsxRuntimeExports.jsx(_components.code, {
          children: "HeroButton"
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Immagine di background - ", jsxRuntimeExports.jsx(_components.code, {
          children: "HeroBackground"
        })]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "con-immagine",
      children: "Con immagine"
    }), "\n", jsxRuntimeExports.jsx("div", {
      className: "docs",
      children: jsxRuntimeExports.jsxs("div", {
        className: "bd-callout bd-callout-accessibility",
        children: [jsxRuntimeExports.jsx("h3", {
          id: "accessibilità",
          children: "Accessibilità sola immagine"
        }), jsxRuntimeExports.jsx("p", {
          children: jsxRuntimeExports.jsxs(_components.p, {
            children: ["Nel caso di un componente hero con sola immagine utilizzare il componente con attributo ", jsxRuntimeExports.jsx(gu, {
              children: 'aria-label="In evidenza"'
            }), "."]
          })
        })]
      })
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: HeroConSfondo
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "versione-small",
      children: "Versione small"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per ottenere il componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Hero"
      }), " nella sua versione più piccola utilizzare l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "small"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: HeroConSfondoSmall
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "con-contenuti-testuali",
      children: "Con contenuti testuali"
    }), "\n", jsxRuntimeExports.jsx("div", {
      className: "docs",
      children: jsxRuntimeExports.jsxs("div", {
        className: "bd-callout bd-callout-accessibility",
        children: [jsxRuntimeExports.jsx("h3", {
          id: "accessibilità",
          children: "Accessibilità contenuti testuali"
        }), jsxRuntimeExports.jsx("p", {
          children: jsxRuntimeExports.jsxs(_components.p, {
            children: ["Nei casi in cui fossero presenti contenuti testuali utilizzare per il titolo il livello ", jsxRuntimeExports.jsx(gu, {
              children: "h"
            }), " corretto a seconda del contesto."]
          })
        })]
      })
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Esempio di Hero con tutti i componenti testuali"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: HeroConTesto
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "con-contenuti-testuali-centrati",
      children: "Con contenuti testuali centrati"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per ottenere il componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Hero"
      }), " centrando i testi orizzontalmente aggiungere l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "centered"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: HeroConTestoCentrato
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "con-testi-ed-immagine-di-sfondo",
      children: "Con testi ed immagine di sfondo"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per visualizzare i testi in overlay sulle immagini, viene creato un div scuro in opacità per migliorare la leggibilità del testo in caso di immagini dai toni chiari. Aggiungere al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Hero"
      }), " l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "overlay"
      }), " con il colore desiderato (tra ", jsxRuntimeExports.jsx(_components.code, {
        children: "dark"
      }), ", ", jsxRuntimeExports.jsx(_components.code, {
        children: "primary"
      }), " o ", jsxRuntimeExports.jsx(_components.code, {
        children: "filter"
      }), "). Di seguito l'esempio con ", jsxRuntimeExports.jsx(_components.code, {
        children: "overlay='dark'"
      })]
    }), "\n", jsxRuntimeExports.jsx("div", {
      className: "docs",
      children: jsxRuntimeExports.jsxs("div", {
        className: "bd-callout bd-callout-accessibility",
        children: [jsxRuntimeExports.jsx("h3", {
          id: "accessibilità",
          children: "Accessibilità e contrasto"
        }), jsxRuntimeExports.jsx("p", {
          children: jsxRuntimeExports.jsx(_components.p, {
            children: "Verificare che l’immagine utilizzata assicuri sempre un adeguato contrasto rispetto al testo."
          })
        })]
      })
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: HeroConTestoSuSfondo
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "con-overlay-di-colore-primario",
      children: "Con overlay di colore primario"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per un div opaco di colore primario utilizzare ", jsxRuntimeExports.jsx(_components.code, {
        children: "overlay='primary'"
      }), ":"]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: HeroConTestoSuSfondoOverlayPrimario
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "con-overlay-e-filtro-di-colore-primario",
      children: "Con overlay e filtro di colore primario"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per aggiungere un filtro di tipo “screen” utilizzare ", jsxRuntimeExports.jsx(_components.code, {
        children: 'overlay="filter"'
      }), ":"]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: HeroConSfondoOverlayFiltro
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "con-immagine-e-margine-negativo-per-contenuti-sovrapposti",
      children: "Con immagine e margine negativo per contenuti sovrapposti"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["In alcuni casi, il contenuto che seguirà la card può sovrapporsi al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Hero"
      }), ". Aggiungere gli attributi ", jsxRuntimeExports.jsx(_components.code, {
        children: "overlap"
      }), " e ", jsxRuntimeExports.jsx(_components.code, {
        children: 'overlay="dark"'
      }), " per far si che il contenuto seguente si sovrapponga al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Hero"
      }), " (in questo caso il componente seguente è una card):"]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: HeroConSfondoMargineNegativo
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "argomenti-componente",
      children: "Argomenti componente"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "hero-1",
      children: "Hero"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: Hero
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "herobackground",
      children: "HeroBackground"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: HeroBackground
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "herobody",
      children: "HeroBody"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: HeroBody
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "herobutton",
      children: "HeroButton"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: HeroButton
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "herocategory",
      children: "HeroCategory"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: HeroCategory
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "herotitle",
      children: "HeroTitle"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: HeroTitle
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
