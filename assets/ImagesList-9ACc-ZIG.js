import { j as jsxRuntimeExports } from "./jsx-runtime-BK4VhY1o.js";
import { useMDXComponents } from "./index-D9eV9cM1.js";
import { M as Meta, d as Canvas, A as ArgTypes } from "./index-Cr0aQxsR.js";
import { G as GridItemStories, E as ElementoSingolo, a as GrigliaStandard, S as StandardDidascalie, P as Proporzionale, M as Masonry, b as GridList, c as GridRow, d as GridItem, e as GridItemText, f as GridItemTextWrapper, R as ResponsiveImage } from "./ImagesList.stories-__zChpnn.js";
import "./index-CQCy530F.js";
import "./_commonjsHelpers-LQfde5yM.js";
import "./iframe-8XlFCvOj.js";
import "../sb-preview/runtime.js";
import "./index-DTvnAYOg.js";
import "./index-Hv2vTVdx.js";
import "./index-CTx2sqk_.js";
import "./inheritsLoose-HEqISCW8.js";
import "./index-MBEdkwGi.js";
import "./index-BdOSk9or.js";
import "./index-CpyNLP69.js";
import "./Col-DTtAS2uD.js";
import "./index-Cas18JYw.js";
import "./utils-l7qJ8bIE.js";
import "./Icon-Dropx6Zw.js";
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: GridItemStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "liste-di-immagini",
      children: "Liste di Immagini"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "La lista di immagini è un componente flessibile per la visualizzazione di serie di immagini sottoforma di griglia"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "elemento-singolo",
      children: "Elemento singolo"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Di seguito gli esempi di elemento singolo della grid list:"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "Immagine semplice"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "Immagine con didascalia in basso"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "Immagine con didascalia sovrapposta"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per utilizzare la didascalia sovrapposta è sufficiente aggiungere la classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".it-grid-system-overlay"
      }), " al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "GridList"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ElementoSingolo
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "tipi-di-griglia",
      children: "Tipi di griglia"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "standard",
      children: "Standard"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["La griglia utilizzata è una variante delle classi di Bootstrap, dove cambiano sostanzialmente i margini.\r\nIl contenitore della griglia è il componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "GridList"
      }), ".\r\nAl posto del componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Row"
      }), " viene utilizzata il componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "GridRow"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Di seguito l’esempio"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: GrigliaStandard
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "standard-con-didascalie",
      children: "Standard con didascalie"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per la corretta formattazione degli spazi di questo tipo di griglia, occorre aggiungere la classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".it-image-label-grid"
      }), " al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "GridList"
      }), " se gli elementi al suo interno contengono una didascalia."]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Di seguito l’esempio"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: StandardDidascalie
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "proporzionale",
      children: "Proporzionale"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["La griglia “proporzionale” contiene elementi griglia con immagine e testo in overlay.\r\nPer la corretta formattazione degli spazi di questo tipo di griglia, occorre aggiungere la classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".it-quilted-grid"
      }), " al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "GridList"
      }), ". La griglia utilizza componenti ", jsxRuntimeExports.jsx(_components.code, {
        children: "Col"
      }), " classici."]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "I tipi di immagini utilizzabili sono sostanzialmente 2:"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "standard"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "orizzontale (come proporzione sono il doppio della larghezza rispetto all’immagine standard e di altezza uguale)"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per utilizzare l’immagine orizzontale, occorre aggiungere la classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".it-grid-item-double-w"
      }), " al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "GridItem"
      }), " che contiene l’immagine."]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Di seguito l’esempio"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Proporzionale
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "masonry",
      children: "Masonry"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per realizzare l’elemento Masonry è stata usata la classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".card-columns"
      }), " che contiene al suo interno gli elementi distribuendoli su più colonne. Per la corretta formattazione degli spazi di questo tipo di griglia, occorre aggiungere la classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".it-masonry"
      }), " al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "GridList"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Di seguito l’esempio"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Masonry
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "argomenti-componente",
      children: "Argomenti componente"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "gridlist",
      children: "GridList"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: GridList
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "gridrow",
      children: "GridRow"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: GridRow
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "griditem",
      children: "GridItem"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: GridItem
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "griditemtext",
      children: "GridItemText"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: GridItemText
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "griditemtextwrapper",
      children: "GridItemTextWrapper"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: GridItemTextWrapper
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "responsiveimage",
      children: "ResponsiveImage"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: ResponsiveImage
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
