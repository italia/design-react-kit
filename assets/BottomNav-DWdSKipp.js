import { j as jsxRuntimeExports } from "./jsx-runtime-BK4VhY1o.js";
import { useMDXComponents } from "./index-D9eV9cM1.js";
import { M as Meta, d as Canvas, f as Story2, C as Code, A as ArgTypes } from "./index-CNKyf03E.js";
import { B as BottomNavStories, a as BottomNav, b as BottomNavItem } from "./BottomNav.stories-Y7htGAxg.js";
import { C as Callout, a as CalloutText } from "./CalloutText-Dnjo-EIS.js";
import { C as CalloutTitle } from "./CalloutTitle-Cuyx78Ax.js";
import "./index-CQCy530F.js";
import "./_commonjsHelpers-LQfde5yM.js";
import "./iframe-BrKLlVSK.js";
import "../sb-preview/runtime.js";
import "./index-DTvnAYOg.js";
import "./index-Hv2vTVdx.js";
import "./index-Bm14aSjb.js";
import "./inheritsLoose-HEqISCW8.js";
import "./index-MBEdkwGi.js";
import "./index-BdOSk9or.js";
import "./index-CpyNLP69.js";
import "./Icon-JP3vHaan.js";
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
      of: BottomNavStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "bottomnav",
      children: "BottomNav"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "componente-di-navigazione-per-dispositivi-mobile",
      children: "Componente di navigazione per dispositivi mobile"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.code, {
        children: "BottomNav"
      }), " è un componente pensato per la navigazione su dispositivi mobile il cui aspetto ricalca quello di alcune popolari app."]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Il componente, di altezza fissa, è ancorato la fondo della pagina e ne occupa tutta la larghezza."
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "esempio",
      children: "Esempio"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["È composto da un componente contenitore ", jsxRuntimeExports.jsx(_components.code, {
        children: "BottomNav"
      }), " e contiene un elenco con più elementi ", jsxRuntimeExports.jsx(_components.code, {
        children: "BottomNavItem"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      children: jsxRuntimeExports.jsx(Story2, {
        id: "componenti-bottomnav--esempi"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "I link occupano automaticamente tutto lo spazio disponibile. Qui di seguito un esempio con 4 link."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      children: jsxRuntimeExports.jsx(Story2, {
        id: "componenti-bottomnav--esempi-4-links"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "badge",
      children: "Badge"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Aggiungere un attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "badge"
      }), " per visualizzare dei badge con indicazioni numeriche relative, ad esempio, al numero di messaggi non letti."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      children: jsxRuntimeExports.jsx(Story2, {
        id: "componenti-bottomnav--badge"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "alert",
      children: "Alert"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Aggiungere un attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "alert"
      }), " per identificare una sezione che richiede attenzione o presenta nuovi contenuti."]
    }), "\n", jsxRuntimeExports.jsx("div", {
      className: "docs",
      children: jsxRuntimeExports.jsxs(Callout, {
        color: "warning",
        children: [jsxRuntimeExports.jsx(CalloutTitle, {
          children: jsxRuntimeExports.jsx("span", {
            className: "text",
            children: "Accessibilità"
          })
        }), jsxRuntimeExports.jsx(CalloutText, {
          children: jsxRuntimeExports.jsxs(_components.p, {
            children: ["I badge e gli alert sono nascosti agli screen reader. Per garantire l’accessibilità è necessario aggiungere un attributo ", jsxRuntimeExports.jsx(Code, {
              children: "srText"
            }), " label\r\nche contenga un testo esplicativo."]
          })
        })]
      })
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      children: jsxRuntimeExports.jsx(Story2, {
        id: "componenti-bottomnav--alert"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "argomenti-componente",
      children: "Argomenti componente"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "bottomnav-1",
      children: "BottomNav"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: BottomNav
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "bottomnavitem",
      children: "BottomNavItem"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: BottomNavItem
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
