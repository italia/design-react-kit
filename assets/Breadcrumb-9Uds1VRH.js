import { j as jsxRuntimeExports, M as Meta, C as Code, d as Canvas, A as ArgTypes } from "./index-Bl7n20tk.js";
import { useMDXComponents } from "./index-BqkeGXjM.js";
import { B as BreadcrumbStories, E as Esempi, C as ConIcone, S as SuSfondoScuro } from "./Breadcrumb.stories-Bq2Fr-SI.js";
import { C as Callout, a as CalloutText } from "./CalloutText-B3REk1Nj.js";
import { C as CalloutTitle } from "./CalloutTitle-B1JkYBwS.js";
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
import "./index-C6XlOQIa.js";
import "./index-xoeSAV6i.js";
import "./utils-BFoSoHid.js";
import "./Icon-CdS0NozM.js";
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
      of: BreadcrumbStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "breadcrumbs",
      children: "Breadcrumbs"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "indica-la-posizione-della-pagina-corrente-allinterno-di-una-gerarchia-di-navigazione",
      children: "Indica la posizione della pagina corrente all’interno di una gerarchia di navigazione."
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Le breadcrumb (in italiano: briciole di pane) mostrano la pagina corrente e danno la possibilità di risalire nella gerarchia delle pagine attraverso dei comodi link ai livelli superiori."
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Nelle breadcrumb c’è la possibilità di scegliere il carattere da usare come separatore inserendolo all’interno del tag ", jsxRuntimeExports.jsx(_components.code, {
        children: '<span class="separator"/>'
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
            children: ["Dato che le breadcrumb sono uno strumento di navigazione del sito, è buona idea aggiungere un’etichetta significativa come\r\n", jsxRuntimeExports.jsx(Code, {
              children: 'aria-label="Percorso di navigazione"'
            }), " per descrivere il tipo di navigazione fornito nell’elemento ", jsxRuntimeExports.jsx(Code, {
              children: "<nav>"
            }), ". L'attributo\r\n", jsxRuntimeExports.jsx(Code, {
              children: 'aria-current="page"'
            }), " viene invece inserito in automatico per l'elemento ", jsxRuntimeExports.jsx(Code, {
              children: "BreadcrumbItem"
            }), " segnato come ", jsxRuntimeExports.jsx(_components.code, {
              children: "active"
            }), " per indicare\r\nche rappresenta la pagina corrente."]
          })
        }), jsxRuntimeExports.jsx(CalloutText, {
          children: jsxRuntimeExports.jsxs(_components.p, {
            children: ["Per maggiori informazioni, guarda le\r\n", jsxRuntimeExports.jsx("a", {
              href: "https://www.w3.org/TR/wai-aria-practices/#breadcrumb",
              children: "linee guida WAI-ARIA per la creazione di breadcrumb."
            })]
          })
        })]
      })
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Esempi
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "con-icona",
      children: "Con icona"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per aggiungere un icona all’elemento ", jsxRuntimeExports.jsx(_components.code, {
        children: "BreadcrumbItem"
      }), " è sufficiente inserire un componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Icon"
      }), " corrispondente prima del tag ", jsxRuntimeExports.jsx(_components.code, {
        children: "<a/>"
      }), " con l’icona che si intende visualizzare."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ConIcone
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "su-sfondo-scuro",
      children: "Su sfondo scuro"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per la versione su sfondo scuro delle breadcrumbs è sufficiente aggiungere l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "dark"
      }), " al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Breadcrumb"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: SuSfondoScuro
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "argomenti-componente",
      children: "Argomenti componente"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "breadcrumb",
      children: "Breadcrumb"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: BreadcrumbStories
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per ulteriori informazioni sui breadcrumbs si rimanda alla sezione ", jsxRuntimeExports.jsx(_components.code, {
        children: "breadcrumbs"
      }), " del sito ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://reactstrap.github.io/?path=/docs/components-breadcrumb--breadcrumb",
        rel: "nofollow",
        children: "Reactstrap"
      }), "."]
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
