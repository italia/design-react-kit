import { j as jsxRuntimeExports } from "./jsx-runtime-BRc-Ic4i.js";
import { useMDXComponents } from "./index-BqkeGXjM.js";
import { M as Meta, d as Canvas } from "./index-xkeXP2rK.js";
import { L as LinkListStories, _ as _Esempi, a as _StatoAttivo, b as _StatoDisabilitato, H as HeaderEDividerNoLink, c as HeaderEDividerConLink, S as Sizing, E as EsempioMultiline, C as ConAvatar, d as ControlliComponent, e as ControlliSecondariComponent, P as PrimaryESecondaryAction, f as CollapseExample, g as ConSwitch, h as ConCheckbox, N as NavigationComponentFixed } from "./LinkList.stories-I-pb938J.js";
import "./index-C-_iGYWo.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-D6ES2N_w.js";
import "../sb-preview/runtime.js";
import "./index-CClgydmT.js";
import "./index-ClxGM1EF.js";
import "./index-DLlB04eo.js";
import "./inheritsLoose-DBHupcN5.js";
import "./index-CX88d7aO.js";
import "./index-BdOSk9or.js";
import "./LinkListItem-BcZlcF5e.js";
import "./index-xoeSAV6i.js";
import "./Navbar-BzESDADg.js";
import "./index-C6XlOQIa.js";
import "./utils-BFoSoHid.js";
import "./NavLink-DiRF8l1-.js";
import "./FormGroup-Dm03kL2Q.js";
import "./Label-Dgx7kIS2.js";
import "./Icon-DYKLX3fq.js";
import "./Toggle-BWGPiEzQ.js";
import "./Input-tLhZq-qe.js";
import "./index-C2nrqh0v.js";
import "./utils-CwYUlCuU.js";
import "./Collapse-DXWFzISy.js";
import "./Transition-QUIZHUz2.js";
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: LinkListStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "liste-di-link",
      children: "Liste di link"
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "i-link-list-sono-un-componente-flessibile-e-potente-per-la-visualizzazione-di-una-serie-di-link-o-call-to-action",
      children: "I Link List sono un componente flessibile e potente per la visualizzazione di una serie di link o call to action."
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "single-line",
      children: "Single Line"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: _Esempi
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "single-line---elemento-con-stato-attivo",
      children: "Single line - elemento con stato attivo"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per determinare l’elemento attivo è sufficiente aggiungere il modificatore ", jsxRuntimeExports.jsx(_components.code, {
        children: "active"
      }), " al relativo componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "LinkListItem"
      })]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: _StatoAttivo
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "single-line---elemento-con-stato-disabilitato",
      children: "Single line - elemento con stato disabilitato"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per determinare l’elemento attivo è sufficiente aggiungere il modificatore ", jsxRuntimeExports.jsx(_components.code, {
        children: "disabled"
      }), " al relativo componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "LinkListItem"
      })]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: _StatoDisabilitato
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "single-line-con-header-e-divider",
      children: "Single line con header e divider"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["I link list possono avere un header (con o senza link) e/o divisori per separare gruppi di link\r\nL’header è costituito da un componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "LinkListItem"
      }), " con il modificatore ", jsxRuntimeExports.jsx(_components.code, {
        children: "header"
      }), ".\r\nIl separatore è costituito dal componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "LinkListItem"
      }), " con il modificatore ", jsxRuntimeExports.jsx(_components.code, {
        children: "divider"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "header-senza-link",
      children: "Header senza link"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: HeaderEDividerNoLink
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "header-con-link",
      children: "Header con link"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: HeaderEDividerConLink
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "sizing",
      children: "Sizing"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per ogni componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "LinkListItem"
      }), " è possibile definire una variante di dimensione maggiore utilizzando il modificatore ", jsxRuntimeExports.jsx(_components.code, {
        children: "large"
      }), " e ", jsxRuntimeExports.jsx(_components.code, {
        children: "bold"
      }), " per dare un aspetto maggiorato all'elemento."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Sizing
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "multiline",
      children: "Multiline"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["È necessario usare il modificatore ", jsxRuntimeExports.jsx(_components.code, {
        children: "multiline"
      }), " sul componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "LinkList"
      }), " in questo caso per configurare correttamente gli spazi del contenitore.\r\nOgni componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "LinkListItem"
      }), " può avere un icona (a destra o sinistra del testo) ed un abstract.\r\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "Icone"
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per aggiungere un icona bisogna aggiungere al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "LinkListItem"
      }), " la classi:"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: "icon-right"
        }), " : se si vuole posizionare l’icona a destra del testo"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: "icon-left"
        }), " : se si vuole posizionare l’icona a sinistra del testo"]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["All’interno del componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "LinkListItem"
      }), " subito dopo lo ", jsxRuntimeExports.jsx(_components.code, {
        children: "<span/>"
      }), " contenente il testo, puoi inserire il componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Icon"
      }), " (per maggiori informazioni consulta la sezione icone)."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EsempioMultiline
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "avatar",
      children: "Avatar"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per aggiungere un avatar a sinistra del testo bisogna aggiungere al ", jsxRuntimeExports.jsx(_components.code, {
        children: "LinkListItem"
      }), " la classe: ", jsxRuntimeExports.jsx(_components.code, {
        children: "avatar"
      }), "."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["All’interno del ", jsxRuntimeExports.jsx(_components.code, {
        children: "LinkListItem"
      }), " subito prima dello ", jsxRuntimeExports.jsx(_components.code, {
        children: "<span>"
      }), " contenente il testo, andremo ad inserire il tag ", jsxRuntimeExports.jsx(_components.code, {
        children: "<img>"
      }), " con classe ", jsxRuntimeExports.jsx(_components.code, {
        children: "avatar"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ConAvatar
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "list-con-controlli",
      children: "List con controlli"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["I ", jsxRuntimeExports.jsx(_components.code, {
        children: "LinkList"
      }), " con controlli sono caratterizzati da icone a destra e sinistra del testo\r\nQuella di destra descrittiva e quella di sinistra un eventuale azione aggiuntiva da gestire in JavaScript."]
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "primary-action",
      children: "Primary Action"
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "icona-sinistra",
      children: "Icona sinistra"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per aggiungere un icona a sinistra del testo bisogna aggiungere al ", jsxRuntimeExports.jsx(_components.code, {
        children: "<LinkListItem>"
      }), " la classe: ", jsxRuntimeExports.jsx(_components.code, {
        children: "icon-left"
      }), "."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["All’interno del ", jsxRuntimeExports.jsx(_components.code, {
        children: "<LinkListItem>"
      }), " subito prima dello ", jsxRuntimeExports.jsx(_components.code, {
        children: "<span>"
      }), " contenente il testo, andremo ad inserire il tag ", jsxRuntimeExports.jsx(_components.code, {
        children: "<i>"
      }), " con classi ", jsxRuntimeExports.jsx(_components.code, {
        children: "left"
      }), " (per definirne la posizione) e classe ", jsxRuntimeExports.jsx(_components.code, {
        children: "it-(classe icona)"
      }), " per determinare quale icona inserire."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ControlliComponent
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "icona-destra",
      children: "Icona destra"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per aggiungere un'icona a destra del testo bisogna aggiungere al ", jsxRuntimeExports.jsx(_components.code, {
        children: "LinkListItem"
      }), " la classe: ", jsxRuntimeExports.jsx(_components.code, {
        children: "icon-right"
      }), "."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["All’interno del ", jsxRuntimeExports.jsx(_components.code, {
        children: "LinkListItem"
      }), " subito prima dello ", jsxRuntimeExports.jsx(_components.code, {
        children: "<span>"
      }), " contenente il testo, andremo ad inserire il tag ", jsxRuntimeExports.jsx(_components.code, {
        children: "<i>"
      }), " con classi ", jsxRuntimeExports.jsx(_components.code, {
        children: "right"
      }), " (per definirne la posizione) e classe ", jsxRuntimeExports.jsx(_components.code, {
        children: "it-(classe icona)"
      }), " per determinare quale icona inserire."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ControlliSecondariComponent
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "icona-sinistra-1",
      children: "Icona sinistra"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per aggiungere un'icona a sinistra del testo bisogna aggiungere al ", jsxRuntimeExports.jsx(_components.code, {
        children: "LinkListItem"
      }), " la classe: ", jsxRuntimeExports.jsx(_components.code, {
        children: "icon-left"
      }), "."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["All’interno del ", jsxRuntimeExports.jsx(_components.code, {
        children: "LinkListItem"
      }), " subito prima dello ", jsxRuntimeExports.jsx(_components.code, {
        children: "<span>"
      }), " contenente il testo, andremo ad inserire il tag ", jsxRuntimeExports.jsx(_components.code, {
        children: "<i>"
      }), " con classi ", jsxRuntimeExports.jsx(_components.code, {
        children: "left"
      }), " (per definirne la posizione) e classe ", jsxRuntimeExports.jsx(_components.code, {
        children: "it-(classe icona)"
      }), " per determinare quale icona inserire."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: PrimaryESecondaryAction
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "collassabile",
      children: "Collassabile"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Di seguito un esempio di navigazione annidiata collassabile.\r\nPer questo tipo di link list è stato utilizzato, oltre alle classi custom, il componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "<Collapse>"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: CollapseExample
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "switch-e-checkbox",
      children: "Switch e Checkbox"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Un ", jsxRuntimeExports.jsx(_components.code, {
        children: "LinkList"
      }), " può contenere anche elementi form, di seguito un esempio contenente uno switch generato da un ", jsxRuntimeExports.jsx(_components.code, {
        children: "<Toggle>"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ConSwitch
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ConCheckbox
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "nested-navigation",
      children: "Nested navigation"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["I ", jsxRuntimeExports.jsx(_components.code, {
        children: "LinkList"
      }), " possono contenere link con sottosezione espanse di default o collassabili."]
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "fixed",
      children: "Fixed"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Di seguito un esempio di navigazione annidiata espansa di default."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: NavigationComponentFixed
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
