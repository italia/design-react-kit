import { j as jsxRuntimeExports } from "./jsx-runtime-CSOqN9Rs.js";
import { useMDXComponents } from "./index-ClSvUSci.js";
import { M as Meta, C as Canvas } from "./index-D3W_KmJT.js";
import { C as CarouselStories, B as Base, E as EvidenceImage, H as HighImage, F as FullscreenImage, a as FullscreenStandardImage } from "./Carousel.stories-BDJiqFad.js";
import "./index-CoR6MlO7.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-DF2Pyat-.js";
import "./index-C2Bg70Bz.js";
import "./index-CnhJHytA.js";
import "./index-9xAnpW0o.js";
import "./index-BdOSk9or.js";
import "./Container-CQqTH9-0.js";
import "./utils-Cn8VSNph.js";
import "./index-xoeSAV6i.js";
import "./Card-BelSGraV.js";
import "./CardText-COYqCege.js";
import "./CardCategory-COBAOzMR.js";
import "./Icon-DiIdFz3Z.js";
import "./CardSignature-Ba5xHRge.js";
import "./CardTitle-DN0Dmyd8.js";
import "./ResponsiveImage-DzB1MyUS.js";
import "./track-focus-DbJ2CO43.js";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    p: "p",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: CarouselStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "carousel",
      children: "Carousel"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Il componente Carousel permette di scorrere una serie di contenuti ed è\nrealizzato attraverso il componente ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://splidejs.com/integration/react-splide/",
        rel: "nofollow",
        children: "Splide"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Può essere utilizzato con una serie di immagini, testo o codice personalizzato.\nInclude anche il supporto per i controlli e gli indicatori precedente/successivo\ned i dots di indicazione posizione."
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Il carousel può contenere vari tipi di componenti, solitamente cards o immagini."
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["L'implementazione corrente riprende le varie tipologie di Carousel che possono\nessere trovate in ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://italia.github.io/bootstrap-italia/docs/componenti/carousel/",
        rel: "nofollow",
        children: "Bootstrap Italia"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "È possibile utilizzare le stesse proprietà del componente Splide nel Carousel\ndi questo kit."
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "base",
      children: "Base"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Esempio di carousel con card articolo."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Base
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "con-immagine-in-evidenza",
      children: "Con immagine in evidenza"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Esempio di carousel contenente un’immagine associata ad una card “articolo”."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EvidenceImage
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "con-immagine-in-alto",
      children: "Con immagine in alto"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: HighImage
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "fullscreen-di-immagini",
      children: "Fullscreen di immagini"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: FullscreenImage
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "fullscreen-di-immagini-dimensione-tandard",
      children: "Fullscreen di immagini (dimensione tandard)"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: FullscreenStandardImage
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
