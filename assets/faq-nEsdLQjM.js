import { j as jsxRuntimeExports } from "./jsx-runtime-CSOqN9Rs.js";
import { useMDXComponents } from "./index-ClSvUSci.js";
import { M as Meta } from "./index-D3W_KmJT.js";
import "./index-CoR6MlO7.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-DF2Pyat-.js";
import "./index-C2Bg70Bz.js";
import "./index-CnhJHytA.js";
import "./index-9xAnpW0o.js";
import "./index-BdOSk9or.js";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h3: "h3",
    p: "p",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "Documentazione/Domande frequenti"
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "domande-frequenti",
      children: "Domande frequenti"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "In questa sezione puoi trovare risposta ad alcune delle domande frequenti riguardo il kit."
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "non-trovo-il-componente-x-nel-kit-ma-questo-è-presente-in-bootstrap-italia-dove-posso-trovarlo",
      children: "Non trovo il componente X nel kit, ma questo è presente in Bootstrap Italia. Dove posso trovarlo?"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Siamo consapevoli che non tutti i componenti in Bootstrap Italia sono ancora presenti nel kit.\r\nC'è una lista di componenti ancora da completare per il kit ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://github.com/italia/design-react-kit/issues",
        rel: "nofollow",
        children: "sul repository Github"
      }), ": se il componente richiesto non è stato ancora registrato, ti invitiamo a creare un ticket sulla pagina Github.\r\nQuesto kit aspira a coprire interamente i componenti disponibili sul sito Bootstrap Italia, ma ancora non dispone di tutti i componenti necessari per una copertura al 100%."]
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "non-trovo-la-documentazione-completa-del-componente-x-nel-kit-anche-se-ne-esiste-una-storiaappare-in-una-pagina-della-documentazione-dove-posso-trovarlo",
      children: "Non trovo la documentazione completa del componente X nel kit, anche se ne esiste una storia/appare in una pagina della documentazione. Dove posso trovarlo?"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Se si tratta di un componente Bootstrap, probabilmente è possibile trovare maggiore documentazione sul sito ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://github.com/reactstrap/reactstrap",
        rel: "nofollow",
        children: "reactstrap"
      }), ", cioè della libreria utilizzata da questo kit.\r\nSe si tratta di un componente Bootstrap Italia con documentazione mancante/parziale ti invitiamo ad aprire un ticket ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://github.com/italia/design-react-kit/issues",
        rel: "nofollow",
        children: "sul repository Github"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "il-componente-x-ha-uno-stile-diverso-rispetto-a-quello-in-bootstrap-italia-è-un-bug",
      children: "Il componente X ha uno stile diverso rispetto a quello in Bootstrap Italia. È un bug?"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Si. Ti invitiamo ad aprire un ticket ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://github.com/italia/design-react-kit/issues",
        rel: "nofollow",
        children: "sul repository Github"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "vorrei-personalizzare-laspetto-dello-stile-standard-bootstrap-italia-ie-colori-dimensioni-etc-usando-il-kit-come-posso-fare",
      children: "Vorrei personalizzare l'aspetto dello stile standard Bootstrap Italia (i.e. colori, dimensioni, etc...) usando il kit. Come posso fare?"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Una guida completa su come personalizzare lo stile è possibile reperirla sul sito Bootstrap Italia nell'apposita pagina: ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://italia.github.io/bootstrap-italia/docs/come-iniziare/personalizzazione-della-libreria/",
        rel: "nofollow",
        children: "Personalizzazione della libreria"
      }), ". Poichè il kit ha una dipendenza unicamente sul css di Bootstrap Italia, è possibile importare il nuovo stile personalizzato come mostrato nell'esempio finale nella pagina."]
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "i-tipi-typescript-del-componente-x-non-sono-corretti-è-un-bug",
      children: "I tipi Typescript del componente X non sono corretti. È un bug?"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Si. Ti invitiamo ad aprire un ticket ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://github.com/italia/design-react-kit/issues",
        rel: "nofollow",
        children: "sul repository Github"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "cosa-vuol-dire-che-lattributo-o-valore-x-è-stato-deprecato",
      children: "Cosa vuol dire che l'attributo o valore X è stato deprecato?"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Quando un attributo o valore viene segnato come ", jsxRuntimeExports.jsx(_components.code, {
        children: "@deprecated"
      }), " questo indica che dalla prossima versione major molto probabilmente non sarà più disponibile all'uso. Questi spesso però continuano a funzionare normalmente, mostrando solamente dei messaggi in console con indicazioni su come migrare al nuovo formato.\r\nPuò succedere che alcuni cambiamenti segnalati come ", jsxRuntimeExports.jsx(_components.code, {
        children: "@deprecated"
      }), " smettano di funzionare per motivi tecnici: in questo caso controllare la pagina di changelog o la documentazione in cui viene spiegato il cambiamento di comportamento e le indicazioni necessarie per ripristinarlo. Queste modifiche sono comunque accompagante da un cambio di versione minor."]
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "il-kit-segue-il-sistema-di-versionamento-semantic",
      children: 'Il kit segue il sistema di versionamento "semantic"?'
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ['Il kit cerca di seguire il più possibile il sistema di versionamento "semantic" nel formato ', jsxRuntimeExports.jsx(_components.code, {
        children: "major.minor.patch"
      }), " . In generale si tende a non imporre cambiamenti troppo repentini, provvedendo a fornire indicazioni di migrazione e/o documentazione adatta a supportare lo sviluppatore."]
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
