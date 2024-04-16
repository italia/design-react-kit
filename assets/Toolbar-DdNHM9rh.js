import { j as jsxRuntimeExports } from "./jsx-runtime-BK4VhY1o.js";
import { useMDXComponents } from "./index-D9eV9cM1.js";
import { M as Meta, d as Canvas } from "./index-kBCZqCW6.js";
import { T as ToolbarStories, E as Esempio, a as EsempioMedium, b as EsempioSmall, c as EsempioWithDivider, d as EsempioConBadgeGrande, e as EsempioConBadgeMedio, f as EsempioConBadgePiccolo, g as EsempioConDropdownGrande, h as EsempioConDropdownMedia, i as EsempioConDropdownPiccola, j as EsempioVerticaleGrande, k as EsempioVerticaleMedia, l as EsempioVerticalePiccola } from "./Toolbar.stories-6bLq9K2P.js";
import "./index-CQCy530F.js";
import "./_commonjsHelpers-LQfde5yM.js";
import "./iframe-CotRnxHI.js";
import "../sb-preview/runtime.js";
import "./index-DTvnAYOg.js";
import "./index-Hv2vTVdx.js";
import "./index-Bm14aSjb.js";
import "./inheritsLoose-HEqISCW8.js";
import "./index-MBEdkwGi.js";
import "./index-BdOSk9or.js";
import "./index-CpyNLP69.js";
import "./Icon-CYxksTIN.js";
import "./index-Cas18JYw.js";
import "./utils-whDkaA-u.js";
import "./utils-l7qJ8bIE.js";
import "./Button-DfNj8dlY.js";
import "./DropdownMenu-D4O4lxvn.js";
import "./LinkListItem-Bip2UIsY.js";
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
      of: ToolbarStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "toolbar",
      children: "Toolbar"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Elemento contenitore di link, bottoni o dropdown"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["L’elemento Toolbar è un contenitore di link, bottoni o dropdown. Consiste in un elenco ", jsxRuntimeExports.jsx(_components.code, {
        children: "Toolbar"
      }), " con tanti elementi ", jsxRuntimeExports.jsx(_components.code, {
        children: "ToolbarItem"
      }), " quante sono le voci richieste."]
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "dimensioni",
      children: "Dimensioni"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "La Toolbar si adatta automaticamente in larghezza al suo contenitore. È consigliabile utilizzare contenitori di dimensione orizzontale (o verticale, nel caso del Toolbar verticale) ridotta, per evitare che gli elementi si disperdano in uno spazio troppo ampio."
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Per ottimizzare lo spazio disponibile l’elemento è fornito in tre versioni: grande, media e piccola."
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "componente-toolbar",
      children: "Componente Toolbar"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "La versione predefinita dell’elemento è quella con icone grandi e label."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Esempio
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "versione-media",
      children: "Versione media"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Applicando un attributo aggiuntivao ", jsxRuntimeExports.jsx(_components.code, {
        children: 'size="medium"'
      }), " alla ", jsxRuntimeExports.jsx(_components.code, {
        children: "Toolbar"
      }), " si ottiene una versione di dimensioni medie."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["In questo caso le label, nascoste visivamente, saranno contenute in uno ", jsxRuntimeExports.jsx(_components.code, {
        children: "<span>"
      }), " con classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".visually-hidden"
      }), ", per rendere disponibile la descrizione agli screen reader."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EsempioMedium
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "versione-piccola",
      children: "Versione piccola"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Applicando un attributo aggiuntivao ", jsxRuntimeExports.jsx(_components.code, {
        children: 'size="small"'
      }), " alla ", jsxRuntimeExports.jsx(_components.code, {
        children: "Toolbar"
      }), " si ottiene una versione di dimensioni piccola."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["In questo caso le label, nascoste visivamente, saranno contenute in uno ", jsxRuntimeExports.jsx(_components.code, {
        children: "<span>"
      }), " con classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".visually-hidden"
      }), ", per rendere disponibile la descrizione agli screen reader."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EsempioSmall
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "stato-degli-elementi",
      children: "Stato degli elementi"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "ToolbarItem"
      }), " dell’elemento attivo va applicata l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "active"
      }), "."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Gli elementi disabilitati avranno invece un attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "disabled"
      }), ". Il componente provvederà agli accorgimenti relativi all'accessibilità."]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "divisori",
      children: "Divisori"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per aggiungere degli elementi divisori fra gli elementi utilizzare il componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "ToolbarItemDivider"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EsempioWithDivider
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "toolbar-con-badge",
      children: "Toolbar con Badge"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "I Badge possono essere utilizzati per indicare contenuti non letti o alert di vario tipo."
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "grande-con-badge",
      children: "Grande con Badge"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Nella versione grande i Badge possono contenere dei numeri. È possibile specificare una label che verrà mostrata agli screen reader."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EsempioConBadgeGrande
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "media-con-badge",
      children: "Media con Badge"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Nella versione media i badge non contengono numeri ma possono essere usati come alert generici. Il numero dei contenuti non letti o nuovi va indicato all’interno della label che verrà mostrata agli screen reader."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EsempioConBadgeMedio
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "piccola-con-badge",
      children: "Piccola con Badge"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Nella versione piccola i Badge non contengono numeri ma possono essere usati come alert generici. Il numero dei contenuti non letti o nuovi va indicato all’interno della label che verrà mostrata agli screen reader."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EsempioConBadgePiccolo
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "toolbar-con-dropdown",
      children: "Toolbar con Dropdown"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "All’interno della Toolbar è possibile implementare dei bottoni dropdown con relativo sottomenù."
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per definire un comportamento con dropdown per il componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "ToolbarItem"
      }), " è necessario aggiungere l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "dropdown"
      }), " al componente. Tramite l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "dropdownProps"
      }), " è possibile inoltrare degli attributi per il dropdown usato internamente.\r\nInfine definire il contenuto del dropdown come JSX all'interno del componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "ToolbarItem"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "grande-con-dropdown",
      children: "Grande con Dropdown"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EsempioConDropdownGrande
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "medio-con-dropdown",
      children: "Medio con Dropdown"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EsempioConDropdownMedia
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "piccolo-con-dropdown",
      children: "Piccolo con Dropdown"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EsempioConDropdownPiccola
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "toolbar-verticale",
      children: "Toolbar verticale"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Applicando un attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "vertical"
      }), " alla Toolbar gli elementi vengono visualizzati in colonna."]
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "grande-verticale",
      children: "Grande verticale"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EsempioVerticaleGrande
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "medio-verticale",
      children: "Medio verticale"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EsempioVerticaleMedia
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "piccolo-verticale",
      children: "Piccolo verticale"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EsempioVerticalePiccola
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
