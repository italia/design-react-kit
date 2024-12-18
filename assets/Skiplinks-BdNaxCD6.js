import { j as jsxRuntimeExports } from "./jsx-runtime-BKjOVojP.js";
import { useMDXComponents } from "./index-BDy3TOcs.js";
import { ae as Meta, af as Canvas } from "./index-BVfv5SMh.js";
import { S as SkiplinksStories, _ as _Esempi, a as _EsempiWithNav } from "./Skiplinks.stories-CLGqD4n5.js";
import "./index-BehpJNG5.js";
import "./_commonjsHelpers-DWwsNxpa.js";
import "./iframe-wO3SDMP-.js";
import "../sb-preview/runtime.js";
import "./index-D7280_ap.js";
import "./index-DmVNLg0t.js";
import "./index-DJdTjTnu.js";
import "./index-dukjSSyv.js";
import "./index-BdOSk9or.js";
import "./index-D3ELxcOV.js";
import "./track-focus-DbJ2CO43.js";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: SkiplinksStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "skiplinks",
      children: "Skiplinks"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Gli Skiplink sono collegamento interno alla pagina che consentono agli utenti di accedere direttamente al contenuto principale della pagina saltando il menu di navigazione."
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "È un componente particolarmente utile per coloro che accedono con screen reader e/o da tastiera."
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Gli elementi ", jsxRuntimeExports.jsx(_components.code, {
        children: "SkiplinkItem"
      }), " sono contraddistinti dalle classi:"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: "visually-hidden"
        }), ": renderizzati solo per gli screen reader. Sempre applicato."]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: "visually-hidden-focusable"
        }), ": renderizzati solo al focus. Controllato dall'attributo ", jsxRuntimeExports.jsx(_components.code, {
          children: "focusable"
        }), "."]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Per attivare la funzionalità si digita da tastiera il tasto: TAB."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: _Esempi
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const containerRef = useRef(null);\r\nconst footerRef = useRef(null);\r\n\r\nuseEffect(() => {\r\n  // We focus the container here since it is hosted inside Storybook's iframe\r\n  // @ts-expect-error: with no types annotated, never is inferred here\r\n  containerRef.current?.focus();\r\n}, []);\r\n\r\nconst onClick = () => {\r\n  // @ts-expect-error: with no types annotated, never is inferred here\r\n  footerRef.current?.scrollIntoView();\r\n};\r\n\r\nreturn (\r\n  <section tabIndex={-1} ref={containerRef}>\r\n    <div id='#main' />\r\n    <div id='#footer' ref={footerRef} />\r\n\r\n    <Skiplink>\r\n      <SkiplinkItem href='#main'>Skip to main content</SkiplinkItem>\r\n      <SkiplinkItem onClick={onClick}>Skip to footer</SkiplinkItem>\r\n    </Skiplink>\r\n  </section>\r\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "elenco",
      children: "Elenco"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Se la pagina è particolarmente complessa si possono inserire più collegamenti che permettano di saltare direttamente ai blocchi principali."
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Nell'esempio che segue, implementato per il sito ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://designers.italia.it",
        rel: "nofollow",
        children: "Designers Italia"
      }), ", sono inseriti due collegamenti che è utile approfondire:"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["un salto ad un ", jsxRuntimeExports.jsx(_components.strong, {
          children: "modulo per chiedere alle persone come stanno valutando l'esperienza d'uso"
        }), " della pagina. Il testo dello skiplink anticipa già la domanda;"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["un ", jsxRuntimeExports.jsx(_components.strong, {
          children: "collegamento diretto alla Dichiarazione di accessibilità disponibile sul form AgID"
        }), ", che accompagnerà il necessario link presente anche nel piede di pagina, per permettere a chi naviga con strumenti assistivi di trovarla facilmente senza dover scansionare tutti i contennuti."]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Consigliamo di non eccedere con il numero di elementi scorciatoia, altrimenti emergerebbe il bisogno di poter saltare le stesse scorciatoie."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: _EsempiWithNav
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
