import { j as jsxRuntimeExports } from "./jsx-runtime-Dd8filLf.js";
import { useMDXComponents } from "./index-DKZlwgtl.js";
import { M as Meta, C as Canvas } from "./index-DBq2QLBj.js";
import { P as ProgressStories, E as Esempio, a as Etichette, b as ProgressoIndeterminato, C as Colori, B as BottoneConProgressBar } from "./Progress.stories-ClEtxiM7.js";
import { Esempio as Esempio$1, SpinnerDoppio } from "./Spinner.stories-DgG593XQ.js";
import "./index-N7T0HPyM.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-71tjp26B.js";
import "./index-DaSoJtbc.js";
import "./index-_6PbV05F.js";
import "./index-9xAnpW0o.js";
import "./index-BdOSk9or.js";
import "./Button-DzBfv9Kx.js";
import "./index-xoeSAV6i.js";
import "./Button-FBjU0jYp.js";
import "./utils-Cn8VSNph.js";
import "./Icon-D5Ay-CRR.js";
import "./Progress-DAzCsuy6.js";
import "./index-C2nrqh0v.js";
import "./utils-CwYUlCuU.js";
import "./track-focus-DbJ2CO43.js";
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
      of: ProgressStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "progress-indicators",
      children: "Progress Indicators"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "indicatori-di-stato-attivo-e-di-avanzamento-di-unoperazione",
      children: "Indicatori di stato attivo e di avanzamento di un’operazione"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "progress-bar",
      children: "Progress Bar"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Le Progress Bar sono costruite con due elementi HTML, CSS in linea per impostare la larghezza e alcuni attributi. Non è previsto l’utilizzo dell’elemento ", jsxRuntimeExports.jsx(_components.code, {
        children: "<progress/>"
      }), " di HTML5."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Esempio
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "etichette",
      children: "Etichette"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per aggiungere etichette con testo che indica il progresso utilizzare l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "label"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Etichette
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "progresso-indeterminato",
      children: "Progresso Indeterminato"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Quando non è possibile stabilire una percentuale di progressione utilizzare una Progress Bar di tipo indeterminato, aggiungendo un attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "indeterminate"
      }), " sul componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Progress"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ProgressoIndeterminato
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "colori",
      children: "Colori"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per variare il colore della barra è sufficiente utilzzare l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "color"
      }), " ed applicare uno dei colori contenuti nella pagina ", jsxRuntimeExports.jsx(_components.a, {
        href: "?path=/docs/documentazione-utilities-colori--page#colore-di-sfondo",
        children: "Utility colori"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Colori
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "bottone-con-progress-bar",
      children: "Bottone con Progress Bar"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["La Progress Bar può essere integrata in un bottone Primario o Secondario con classe aggiuntiva ", jsxRuntimeExports.jsx(_components.code, {
        children: ".btn-progress"
      }), " utilizzando la struttura e le classi riportate nei seguenti esempi:"]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: BottoneConProgressBar
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "spinner",
      children: "Spinner"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Il componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Spinner"
      }), " comunica lo stato attivo di un’operazione ma non il progresso percentuale della stessa. È utile quindi quando non è possibile determinare il tempo necessario a completare una procedura."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per ottenere una versione ridotta dello Spinner aggiungere allo stesso l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "small"
      }), ".\r\nL'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "label"
      }), " è riservato al messaggio per gli screen reader."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Esempio$1
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "spinner-doppio",
      children: "Spinner doppio"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Aggiungendo l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "double"
      }), " allo ", jsxRuntimeExports.jsx(_components.code, {
        children: "Spinner"
      }), " si ottiene un’animazione alternativa."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: SpinnerDoppio
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "argomenti-componente",
      children: "Argomenti componente"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Fare riferimento alla documentazione reactstrap (v9) per maggiori dettagli sui componenti ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://reactstrap.github.io/?path=/docs/components-progress--progress",
        rel: "nofollow",
        children: "Progress"
      })]
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
