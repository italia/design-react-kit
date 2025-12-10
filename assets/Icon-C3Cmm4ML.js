import { j as jsxRuntimeExports } from "./jsx-runtime-N7AT_UjA.js";
import { useMDXComponents } from "./index-C1bMAJWQ.js";
import { M as Meta, C as Canvas, a as Controls3, A as ArgTypes } from "./blocks-D0jj8ryq.js";
import { I as Icon } from "./Icon-CHxeXU0Z.js";
import "./track-focus-DbJ2CO43.js";
import { I as IconStories, E as EsempioInterattivo, a as EsempioDimensioni, b as EsempioPadding, c as EsempioColori, d as EsempioAllineamento, e as EsempioLoghiEsterni, L as ListaIcone } from "./Icon.stories-Cs_If9iA.js";
import "./iframe-BhIAR_-T.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-P2kQKrIy.js";
import "./index-DlmjVlZ8.js";
import "./Col-Djg71hTG.js";
import "./utils-CdC3xm3i.js";
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
      of: IconStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "icone",
      children: "Icone"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "informazioni-e-suggerimenti-per-lutilizzo-di-icone-con-bootstrap-italia",
      children: "Informazioni e suggerimenti per l’utilizzo di icone con Bootstrap Italia."
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Le icone di Bootstrap Italia utilizzano sono state incapsulate in un componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Icon"
      }), ", e vengono caricate unicamente (in modalià asincrona) su richiesta quando si utilizza la nuova versione ESM."]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "esempi",
      children: "Esempi"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Ogni icona può essere inclusa con il componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Icon"
      }), " con il riferimento desiderato:"]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EsempioInterattivo
    }), "\n", jsxRuntimeExports.jsx(Controls3, {
      of: EsempioInterattivo
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "dimensioni",
      children: "Dimensioni"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["È possibile utilizzare il modificatore ", jsxRuntimeExports.jsx(_components.code, {
        children: "size"
      }), " con il valori ", jsxRuntimeExports.jsx(_components.code, {
        children: "xs"
      }), ", ", jsxRuntimeExports.jsx(_components.code, {
        children: "sm"
      }), ", ", jsxRuntimeExports.jsx(_components.code, {
        children: "lg"
      }), ", ", jsxRuntimeExports.jsx(_components.code, {
        children: "xl"
      }), ", per ottenere icone di diverse dimensioni."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EsempioDimensioni
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["È anche possibile applicare il modificatore ", jsxRuntimeExports.jsx(_components.code, {
        children: "padding"
      }), " all’icona per creare un padding proporzionale alla dimensione dell’icona attorno ad essa."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EsempioPadding
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "colori",
      children: "Colori"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EsempioColori
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "allineamenti",
      children: "Allineamenti"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "È possibile usare le classi di allineamento per posizionare le icone all’interno di un elemento."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EsempioAllineamento
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "immagini-esterne",
      children: "Immagini esterne"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["È possibile utilizzare un'immagine esterna come icona, utilizzando l'URL dell'immagine nell'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "icon"
      }), " del componente."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EsempioLoghiEsterni
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "lista-delle-icone-disponibili",
      children: "Lista delle icone disponibili"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ListaIcone
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "argomenti-componente",
      children: "Argomenti componente"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "icon",
      children: "Icon"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: Icon
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
