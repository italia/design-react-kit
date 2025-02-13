import { j as jsxRuntimeExports } from "./jsx-runtime-BKjOVojP.js";
import { useMDXComponents } from "./index-BDy3TOcs.js";
import { ae as Meta, af as Canvas, v as vu, ag as ArgTypes } from "./index-BvRgJbWC.js";
import { B as BottomNavStories, E as Esempi, a as Esempi4Links, b as EsempioBadge, A as Alert, c as BottomNav, d as BottomNavItem } from "./BottomNav.stories-CI-1jrc2.js";
import { C as Callout, a as CalloutText } from "./CalloutText-DuQn_Rtc.js";
import { C as CalloutTitle } from "./CalloutTitle-D5ep80ue.js";
import "./track-focus-DbJ2CO43.js";
import "./index-BehpJNG5.js";
import "./_commonjsHelpers-DWwsNxpa.js";
import "./iframe-Blg4YaEd.js";
import "../sb-preview/runtime.js";
import "./index-D7280_ap.js";
import "./index-DmVNLg0t.js";
import "./index-DJdTjTnu.js";
import "./index-dukjSSyv.js";
import "./index-BdOSk9or.js";
import "./index-D3ELxcOV.js";
import "./Icon-ruXWv551.js";
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
      of: Esempi
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "I link occupano automaticamente tutto lo spazio disponibile. Qui di seguito un esempio con 4 link."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Esempi4Links
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "badge",
      children: "Badge"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Aggiungere un attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "badge"
      }), " per visualizzare dei badge con indicazioni numeriche relative, ad esempio, al numero di messaggi non letti."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EsempioBadge
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
            children: ["I badge e gli alert sono nascosti agli screen reader. Per garantire l’accessibilità è necessario aggiungere un attributo ", jsxRuntimeExports.jsx(vu, {
              children: "srText"
            }), " label\r\nche contenga un testo esplicativo."]
          })
        })]
      })
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Alert
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
