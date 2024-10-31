import { j as jsxRuntimeExports, M as Meta, d as Canvas, f as Story2 } from "./index-Bl7n20tk.js";
import { useMDXComponents } from "./index-BqkeGXjM.js";
import { S as SidebarStories, B as BasicSidebar, _ as _ConIcona, C as ConLineaADestra, a as ConLineaASinistra, b as _Annidata, c as SidebarVersioneScura } from "./Sidebar.stories-IwMyB4z2.js";
import "./iframe-DcWTh_ko.js";
import "../sb-preview/runtime.js";
import "./index-C-_iGYWo.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./index-CClgydmT.js";
import "./index-ClxGM1EF.js";
import "./index-DLlB04eo.js";
import "./inheritsLoose-DBHupcN5.js";
import "./index-CX88d7aO.js";
import "./index-BdOSk9or.js";
import "./index-xoeSAV6i.js";
import "./LinkListItem-BcZlcF5e.js";
import "./Icon-CdS0NozM.js";
import "./Collapse-DXWFzISy.js";
import "./index-C6XlOQIa.js";
import "./utils-BFoSoHid.js";
import "./Transition-QUIZHUz2.js";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: SidebarStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "sidebar",
      children: "Sidebar"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "barra-di-navigazione-laterale-include-liste-di-link-e-liste-di-link-innestate",
      children: "Barra di navigazione laterale, include liste di link e liste di link innestate."
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "basic-sidebar",
      children: "Basic sidebar"
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "default",
      children: "Default"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "La sidebar semplice può contenere:"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "Header"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "Lista di link primaria"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "Lista di link secondaria"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per differenziare a livello stilistico i link secondari, è sufficiente aggiungere l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "secondary"
      }), " al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Sidebar"
      }), " contenente la ", jsxRuntimeExports.jsx(_components.a, {
        href: "?path=/docs/documentazione-organizzare-i-contenuti-linklist",
        children: "lista di link"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: BasicSidebar
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "con-icona",
      children: "Con icona"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["La sidebar può contenere icone nella sua ", jsxRuntimeExports.jsx(_components.a, {
        href: "?path=/docs/documentazione-organizzare-i-contenuti-linklist",
        children: "lista di link"
      }), " primaria."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: _ConIcona,
      children: jsxRuntimeExports.jsx(Story2, {
        id: "componenti-sidebar--con-icona"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "con-linea-a-destra",
      children: "Con linea a destra"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per creare una sidebar con linea separatrice a destra è sufficiente aggiungere l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "right"
      }), " al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Sidebar"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ConLineaADestra
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "con-linea-a-sinistra",
      children: "Con linea a sinistra"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per creare una sidebar con linea separatrice a sinistra è sufficiente aggiungere l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "left"
      }), " al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Sidebar"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ConLineaASinistra
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "annidata",
      children: "Annidata"
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "default-1",
      children: "Default"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["La sidebar può contenere una ", jsxRuntimeExports.jsx(_components.a, {
        href: "?path=/docs/documentazione-organizzare-i-contenuti-linklist",
        children: "lista di link"
      }), " primaria annidata."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: _Annidata
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "sidebar-versione-scura",
      children: "Sidebar versione scura"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per cambiare il tema della sidebar e renderla scura è sufficiente aggiungere al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Sidebar"
      }), " l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "dark"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: SidebarVersioneScura
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
