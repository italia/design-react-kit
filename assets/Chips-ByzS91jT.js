import { j as jsxRuntimeExports, M as Meta, d as Canvas, A as ArgTypes } from "./index-GgiJkObS.js";
import { useMDXComponents } from "./index-BqkeGXjM.js";
import { C as ChipStories, E as Esempi, V as VariantiDiColore, a as ChipDisabilitata, G as GruppiDiChip, b as Chip, c as ChipLabel } from "./Chips.stories-B6N3xd4M.js";
import "./iframe-C1JHnSCu.js";
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
import "./Col-CM3Y6KlU.js";
import "./index-C6XlOQIa.js";
import "./utils-BFoSoHid.js";
import "./Button-vuvwJGEz.js";
import "./Button-MsrGxmE9.js";
import "./Icon-uenOWmYY.js";
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
      of: ChipStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "chips",
      children: "Chips"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "elementi-compatti-che-rappresentano-un-input-attributo-o-azione",
      children: "Elementi compatti che rappresentano un input, attributo o azione"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Una “chip” è composta da una label e, opzionalmente, un bottone di chiusura/rimozione, un’icona o un avatar."
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["La versione con sola label deve centrario il testo al suo interno: utilizzare l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "simple"
      }), " sul componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Chip"
      }), " per ottenere il giusto layout."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["L’azione richiesta per l’eliminazione della chip andrà associata al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Button"
      }), "."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Assegnando l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "large"
      }), " sul componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Chip"
      }), " si ottiene una versione più grande del componente."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Esempi
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "varianti-di-colore",
      children: "Varianti di colore"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Gli stili definiti da Bootstrap Italia utilizzano un naming consistente con Bootstrap:"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: VariantiDiColore
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "chip-disabilitata",
      children: "Chip Disabilitata"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Aggiungendo l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "disabled"
      }), " al componente si ottiene una chip disabilitata."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ChipDisabilitata
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "gruppi-di-chip",
      children: "Gruppi di Chip"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "I gruppi di Chip vengono visualizzati in linea."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: GruppiDiChip
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "argomenti-componente",
      children: "Argomenti componente"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "chip",
      children: "Chip"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: Chip
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "chiplabel",
      children: "ChipLabel"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: ChipLabel
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