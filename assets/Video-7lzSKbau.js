import { j as jsxRuntimeExports } from "./jsx-runtime-OvI7NoMr.js";
import { useMDXComponents } from "./index-BKc5zArI.js";
import { M as Meta, C as Canvas, A as ArgTypes } from "./blocks-ipDcqZCV.js";
import { V as VideoStories, B as Base, T as Trascription, a as Tracks, A as AutoplayAndControls, Y as YouTubeVideo, b as Video } from "./Video.stories-sUuyp-bJ.js";
import "./track-focus-DbJ2CO43.js";
import "./iframe-DGcxMoyJ.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-DtiUNGrX.js";
import "./extends-BllNL3fH.js";
import "./Input-DPclf-CR.js";
import "./index-DAwvaHyD.js";
import "./index-yYkzrc3Z.js";
import "./Icon-DyCGQbBS.js";
import "./utils-CwYUlCuU.js";
import "./AccordionItem-DJilXIB5.js";
import "./Transition-CLiuIDXl.js";
import "./DimmerButtons-CQ8Y55Yk.js";
import "./Button-wosI7fwo.js";
import "./Button-CHYK7K12.js";
import "./utils-_G002CXH.js";
import "./FormGroup-CVtCuC0Z.js";
import "./Label-BkfP5R3n.js";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: VideoStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "video",
      children: "VIDEO"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Il componente Video utilizza la libreria video.js per implementare funzionalità\navanzate come il supporto a diversi formati video, la personalizzazione\ndell’interfaccia utente e l’integrazione con API esterne."
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Fare riferimento alla ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://italia.github.io/bootstrap-italia/docs/componenti/video-player/",
        rel: "nofollow",
        children: "documentazione Bootstrap per il video"
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "esempio-base",
      children: "Esempio base"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "In questo esempio vengono passati al compomente solamente la prorietà relativa\nall'array delle sorgenti, contente per ogni sorgente l'url della sorgente\ne sua tipologia."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Base
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "trascrizioni",
      children: "Trascrizioni"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "In questo esempio viene passato del testo relativo alla trascrizione video"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Trascription
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "tracce",
      children: "Tracce"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "In questo esempio vengono passate diverse tracce per i sottotitoli:\nin italiano (predefinito) , inglese e spagnolo"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Tracks
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "autoplay-e-controlli",
      children: "Autoplay e controlli"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "In questo esempio vengono impostati seguenti parametri:"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "autoPlay: true"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "fluid: true"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "controls: true"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "loop: true"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: AutoplayAndControls
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "video-youtube-con-accettazione",
      children: "Video YouTube con accettazione"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["In questo esempio viene passato nella prorietà ", jsxRuntimeExports.jsx(_components.code, {
        children: "youtubeUrl"
      }), " un url di un video\ndi YouTube."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: YouTubeVideo
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: Video
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
