import { j as jsxRuntimeExports } from "./jsx-runtime-BKjOVojP.js";
import { useMDXComponents } from "./index-BDy3TOcs.js";
import { ae as Meta, v as vu, af as Canvas } from "./index-TPQrYqDM.js";
import { C as Callout, a as CalloutText } from "./CalloutText-DuQn_Rtc.js";
import { C as CalloutTitle } from "./CalloutTitle-D5ep80ue.js";
import "./track-focus-DbJ2CO43.js";
import { T as ThumbNavStories, E as Esempio, a as EsempioSmall, b as EsempioNoZoom, c as EsempioBlackLayer, d as EsempioPrimaryLayer, e as EsempioVerticale, O as Overlay, f as OverlayTop, g as OverlayLeft, h as OverlayRight, i as EsempioFixed, j as EsempioAutoWidth, k as EsempioAutoWidthFive } from "./ThumbNav.stories-6dsNpYb-.js";
import "./index-BehpJNG5.js";
import "./_commonjsHelpers-DWwsNxpa.js";
import "./iframe-DTIT4K-Y.js";
import "../sb-preview/runtime.js";
import "./index-D7280_ap.js";
import "./index-DmVNLg0t.js";
import "./index-DJdTjTnu.js";
import "./index-dukjSSyv.js";
import "./index-BdOSk9or.js";
import "./index-D3ELxcOV.js";
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    li: "li",
    p: "p",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: ThumbNavStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "thumbnav",
      children: "ThumbNav"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "componente-di-navigazione-con-immagini-thumbnail",
      children: "Componente di navigazione con immagini thumbnail"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Il componente Thumbnav consiste in un contenitore ", jsxRuntimeExports.jsx(_components.code, {
        children: "ThumbNav"
      }), " contenente tanti elementi ", jsxRuntimeExports.jsx(_components.code, {
        children: "ThumbNavItem"
      }), " quante sono i link/thumbnail richiesti."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Ogni elemento ", jsxRuntimeExports.jsx(_components.code, {
        children: "ThumbNavItem"
      }), " contiene un resizer per mantenere le corrette proporzioni di 3:2 a prescindere dalle dimensioni dell’immagine utilizzata per la thumbnail."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per indicare il link/thumbail attivo applicare l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "active"
      }), " al relativo ", jsxRuntimeExports.jsx(_components.code, {
        children: "ThumbNavItem"
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
            children: ["Per ragioni di accessibilità è importante indicare all’interno dell’attributo ", jsxRuntimeExports.jsx(vu, {
              children: 'alt=""'
            }), " dell’immagine\r\nthumbnail l’azione associata al link relativo."]
          })
        })]
      })
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Esempio
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "versione-small",
      children: "Versione small"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Applicando l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "isSmall"
      }), " al contenitore ", jsxRuntimeExports.jsx(_components.code, {
        children: "ThumbNav"
      }), " si otterranno thumbnail di dimensione ridotta."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EsempioSmall
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "stati-hover",
      children: "Stati hover"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Applicando attributi specifici è possibile customizzare l’effetto di hover."
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "hover-senza-zoom",
      children: "Hover senza zoom"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Utilizzare l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "noZoomOnHover"
      }), " per disabilitare l’effetto di zoom sull’immagine."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EsempioNoZoom
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "hover-con-layer-nero",
      children: "Hover con layer nero"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Utilizzare l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: 'overlayOnHover="black"'
      }), " per ottenere un effetto di overlay nero trasparente sull’immagine."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EsempioBlackLayer
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "hover-con-layer-primary",
      children: "Hover con layer primary"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Utilizzare l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: 'overlayOnHover="primary"'
      }), " per ottenere un effetto di overlay di colore primary sull’immagine."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EsempioPrimaryLayer
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "thumbnav-verticale",
      children: "Thumbnav verticale"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Applicando l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "isVertical"
      }), " al contenitore ", jsxRuntimeExports.jsx(_components.code, {
        children: "ThumbNav"
      }), " si ottiene una versione verticale."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EsempioVerticale
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "posizione-in-overlay",
      children: "Posizione in overlay"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["La ", jsxRuntimeExports.jsx(_components.code, {
        children: "ThumbNav "
      }), "può essere inserita in overlay all’interno di un contenitore come ad esempio una galleria immagini. Il contenitore dovrà utilizzare la classe di Bootstrap ", jsxRuntimeExports.jsx(_components.code, {
        children: ".position-relative"
      }), " per posizionare correttamente la ", jsxRuntimeExports.jsx(_components.code, {
        children: "ThumbNav"
      }), " al proprio interno. Alla ", jsxRuntimeExports.jsx(_components.code, {
        children: "ThumbNav"
      }), " dovrà essere applicato un attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "position"
      }), " con valore a scelta fra:"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: "bottom"
        }), " per posizonarla nella parte inferiore"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: "top"
        }), " per posizonarla nella parte superiore"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: "left"
        }), " per posizonare una thumbnav vertical nella parte sinistra"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: "right"
        }), " per posizonare una thumbnav vertical nella parte destra"]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "overlay-orizzontale-inferiore",
      children: "Overlay orizzontale inferiore"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Overlay
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "overlay-orizzontale-top",
      children: "Overlay orizzontale top"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: OverlayTop
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "overlay-verticale-sinistra",
      children: "Overlay verticale sinistra"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: OverlayLeft
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "overlay-verticale-destra",
      children: "Overlay verticale destra"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: OverlayRight
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "griglia-a-larghezza-fissa",
      children: "Griglia a larghezza fissa"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Applicando l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "fixedWidth"
      }), " alla ", jsxRuntimeExports.jsx(_components.code, {
        children: "ThumbNav"
      }), " le thumbnail avranno una larghezza fissa di 240px oppure di 120px se è stata utilizzata anche l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "isSmall"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EsempioFixed
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "griglia-a-larghezza-automatica",
      children: "Griglia a larghezza automatica"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Applicando la classe ", jsxRuntimeExports.jsx(vu, {
        children: ".thumb-nav-auto"
      }), " alla Thumbnav le thumbnail occuperanno automaticamente l’intera larghezza del contenitore. È necessario indicare il numero degli elementi presenti su ogni riga con una delle seguenti classi aggiuntive:"]
    }), "\n", jsxRuntimeExports.jsx(_components.h5, {
      id: "esempio-3-thumbnail-per-riga",
      children: "Esempio: 3 thumbnail per riga"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EsempioAutoWidth
    }), "\n", jsxRuntimeExports.jsx(_components.h5, {
      id: "esempio-5-thumbnail-per-riga",
      children: "Esempio: 5 thumbnail per riga"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EsempioAutoWidthFive
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
