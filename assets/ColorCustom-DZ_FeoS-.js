import { j as jsxRuntimeExports } from "./jsx-runtime-BspMipD3.js";
import { useMDXComponents } from "./index-c4rbJj9s.js";
import { M as Meta, C as Canvas } from "./blocks-C9ottTgS.js";
import { C as ColorCustomStories, a as ColoriCustom, V as VariantiColore, b as ColoriCustomSecondari, c as ColoriCustomComplementariETriadici, d as ColoriCustomSecondariAnaloghi, e as ColoriSecondariCustomComplementariETriadici, f as ColoriNeutraliCustom, g as VarianteColoriNeutraliCustom, h as ColoriGrigiChiariCustom } from "./ColorCustom.stories-C7_bYs6J.js";
import "./iframe-WcRkBu1E.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-DtzevSMN.js";
import "./Col-BqJJlB9Y.js";
import "./utils-H_KkLj11.js";
import "./index-_NcwzH_h.js";
import "./track-focus-DbJ2CO43.js";
function _createMdxContent(props) {
  const _components = {
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    p: "p",
    strong: "strong",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: ColorCustomStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "colori-custom",
      children: "Colori Custom"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "modifica-colori-di-background-testo-e-bordi-con-colori-custom",
      children: "Modifica colori di background, testo e bordi con colori custom."
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Definisci colori di background, bordi, colore di testo attraverso specifiche classi."
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "colori-primari",
      children: "Colori Primari"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "I colori primari sono il Blu Italia e il bianco.\r\nIl Blu Italia è il colore identificativo dell’intera brand identity e rappresenta la radice per creare altri colori della palette primaria."
    }), "\n", jsxRuntimeExports.jsxs("div", {
      className: "primary-color-container",
      children: [jsxRuntimeExports.jsx("div", {
        className: "square-color primary-bg",
        children: jsxRuntimeExports.jsx("span", {
          className: "white-color",
          children: "#0066CC"
        })
      }), jsxRuntimeExports.jsx("div", {
        className: "square-color white-bg shadow",
        children: jsxRuntimeExports.jsx("span", {
          children: "#FFFFFF"
        })
      }), jsxRuntimeExports.jsx("div", {
        className: "clearfix"
      })]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ColoriCustom
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.strong, {
        children: "Utilizzo delle classi:"
      })
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.code, {
        children: ".primary-bg"
      }), " : per background color", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: ".primary-color"
      }), " : per text color", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: ".primary-border-color"
      }), " : per border color"]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "varianti-monocromatiche-del-colore-base",
      children: "Varianti monocromatiche del colore base"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Il colore primario possiede tre tipologie di varianti cromatiche. Per utilizzarle è sufficiente utilizzare la relativa classe"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.strong, {
        children: "Utilizzo delle classi:"
      })
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.code, {
        children: ".primary-bg- + variante-colore"
      }), " : per background color", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: ".primary-color- + variante-colore"
      }), " : per text color", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: ".primary-border-color- + variante-colore"
      }), " : per border color"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["(es. ", jsxRuntimeExports.jsx(_components.code, {
        children: ".primary-bg-a5"
      }), " per utilizzare come background il colore primario con variante a5 )"]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: VariantiColore
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "colori-secondari",
      children: "Colori secondari"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "analoghi",
      children: "Analoghi"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Ai colori monocromatici può essere affiancato un accent color, definito così perche si tratta di un colore molto luminoso, serve ad attirare l’attenzione."
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Devono essere usati in modo parsimonioso."
    }), "\n", jsxRuntimeExports.jsxs("div", {
      className: "primary-color-container",
      children: [jsxRuntimeExports.jsx("div", {
        className: "square-color analogue-1-bg",
        children: jsxRuntimeExports.jsx("span", {
          className: "white-color",
          children: "#3126ff"
        })
      }), jsxRuntimeExports.jsx("div", {
        className: "square-color analogue-2-bg",
        children: jsxRuntimeExports.jsx("span", {
          children: "#0bd9d2"
        })
      }), jsxRuntimeExports.jsx("div", {
        className: "clearfix"
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.strong, {
        children: "Utilizzo delle classi:"
      })
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.code, {
        children: ".analogue-(+ 1/2 +)-bg"
      }), " : per background color", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: ".analogue-(+ 1/2 +)-color"
      }), " : per text color", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: ".analogue-(+ 1/2 +)-border-color"
      }), " : per border color"]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ColoriCustomSecondari
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "complementari-e-triadici",
      children: "Complementari e triadici"
    }), "\n", jsxRuntimeExports.jsxs("div", {
      className: "primary-color-container",
      children: [jsxRuntimeExports.jsx("div", {
        className: "square-color complementary-1-bg",
        children: jsxRuntimeExports.jsx("span", {
          children: "#f73e5a"
        })
      }), jsxRuntimeExports.jsx("div", {
        className: "square-color complementary-2-bg",
        children: jsxRuntimeExports.jsx("span", {
          children: "#ff9900"
        })
      }), jsxRuntimeExports.jsx("div", {
        className: "square-color complementary-3-bg",
        children: jsxRuntimeExports.jsx("span", {
          children: "#00cf86"
        })
      }), jsxRuntimeExports.jsx("div", {
        className: "clearfix"
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.strong, {
        children: "Utilizzo delle classi:"
      })
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.code, {
        children: ".complementary-(+ 1/2/3 +)-bg"
      }), " : per background color", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: ".complementary-(+ 1/2/3 +)-color"
      }), " : per text color", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: ".complementary-(+ 1/2/3 +)-border-color "
      }), ": per border color"]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ColoriCustomComplementariETriadici
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "varianti-colori-secondari",
      children: "Varianti colori secondari"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "analoghi-1",
      children: "Analoghi"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "I colori analoghi possiedono due tipologie di varianti cromatiche. Per utilizzarle è sufficiente utilizzare la relativa classe"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.strong, {
        children: "Utilizzo delle classi:"
      })
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.code, {
        children: ".analogue-(+ 1/2 )-bg- + variante-colore"
      }), " : per background color\r\n", jsxRuntimeExports.jsx(_components.code, {
        children: ".analogue-(+ 1/2 )-color- + variante-colore"
      }), " : per text color\r\n", jsxRuntimeExports.jsx(_components.code, {
        children: ".analogue-(+ 1/2 )-border-color- + variante-colore"
      }), " : per border color"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["(es. ", jsxRuntimeExports.jsx(_components.code, {
        children: ".analogue-1-bg-a5"
      }), " per utilizzare come background il colore analogo 1 con variante a5 )"]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ColoriCustomSecondariAnaloghi
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "complementari-e-triadici-1",
      children: "Complementari e triadici"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "I colori Complementari possiedono due tipologie di varianti cromatiche. Per utilizzarle è sufficiente utilizzare la relativa classe"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.strong, {
        children: "Utilizzo delle classi:"
      })
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.code, {
        children: ".complementary-(+ 1/2/3 )-bg- + variante-colore"
      }), " : per background color\r\n", jsxRuntimeExports.jsx(_components.code, {
        children: ".complementary-(+ 1/2/3 )-color- + variante-colore"
      }), " : per text color\r\n", jsxRuntimeExports.jsx(_components.code, {
        children: ".complementary-(+ 1/2/3 )-border-color- + variante-colore"
      }), " : per border color"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["(es. ", jsxRuntimeExports.jsx(_components.code, {
        children: ".complementary-1-bg-a5"
      }), " per utilizzare come background il colore complementare 1 con variante a4 )"]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ColoriSecondariCustomComplementariETriadici
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "colori-neutrali",
      children: "Colori neutrali"
    }), "\n", jsxRuntimeExports.jsxs("div", {
      className: "primary-color-container",
      children: [jsxRuntimeExports.jsx("div", {
        className: "square-color neutral-1-bg",
        children: jsxRuntimeExports.jsx("span", {
          className: "white-color",
          children: "#17324d"
        })
      }), jsxRuntimeExports.jsx("div", {
        className: "square-color neutral-2-bg",
        children: jsxRuntimeExports.jsx("span", {
          children: "#e6ecf2"
        })
      }), jsxRuntimeExports.jsx("div", {
        className: "clearfix"
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.strong, {
        children: "Utilizzo delle classi:"
      })
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.code, {
        children: ".neutral-(+ 1/2 +)-bg "
      }), ": per background color", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: ".neutral-(+ 1/2 +)-color"
      }), " : per text color", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: ".neutral-(+ 1/2 +)-border-color "
      }), ": per border color"]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ColoriNeutraliCustom
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "varianti-colori-neutrali",
      children: "Varianti colori neutrali"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "I colori neutrali possiedono tre tipologie di varianti cromatiche. Per utilizzarle è sufficiente utilizzare la relativa classe"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.strong, {
        children: "Utilizzo delle classi:"
      })
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.code, {
        children: ".neutral-(+ 1/2 +)-bg- + variante-colore"
      }), " : per background color", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: ".neutral-(+ 1/2 +)-color- + variante-colore"
      }), " : per text color", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: ".neutral-(+ 1/2 +)-border-color- + variante-colore"
      }), " : per border color"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["(es. ", jsxRuntimeExports.jsx(_components.code, {
        children: ".neutral-1-bg-a5"
      }), " per utilizzare come background il colore neutrale 1 con variante a5 )"]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: VarianteColoriNeutraliCustom
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "grigi-chiari",
      children: "Grigi chiari"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "I grigi chiari sono di tre tipologie. Per utilizzarle è sufficiente utilizzare la relativa classe"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.strong, {
        children: "Utilizzo delle classi:"
      })
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.code, {
        children: ".lightgrey-bg- + variante-colore"
      }), " : per background color", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: ".lightgrey-color- + variante-colore"
      }), " : per text color", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: ".lightgrey-border-color- + variante-colore"
      }), " : per border color"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["(es. .", jsxRuntimeExports.jsx(_components.code, {
        children: "lightgrey-1-bg-a4"
      }), " per utilizzare come background il grigio chiaro 1 con variante a5 )"]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ColoriGrigiChiariCustom
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
