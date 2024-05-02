import { j as jsxRuntimeExports } from "./jsx-runtime-BK4VhY1o.js";
import { useMDXComponents } from "./index-D9eV9cM1.js";
import { M as Meta, d as Canvas, e as Controls3, A as ArgTypes } from "./index-B6OeFasa.js";
import { CenterHeaderBasic, HeaderCenterNarrow } from "./CenterHeader.stories-kFTCyGM3.js";
import { C as CompleteHeaderStory, H as Headers } from "./CompleteHeader.stories-DkvXXyn4.js";
import { NavHeader, NavHeaderSecondary } from "./NavHeader.stories-CJuDgdzL.js";
import { SlimHeader, SlimHeaderFullResponse } from "./SlimHeader.stories----cDQXB.js";
import { H as Header, a as HeaderContent } from "./HeaderContent-DeePoa8e.js";
import { H as HeaderBrand, a as HeaderRightZone } from "./HeaderRightZone-BHGd2sXY.js";
import { H as HeaderToggler } from "./HeaderToggler-C0etEggg.js";
import { H as HeaderLinkZone } from "./HeaderLinkZone-arA137IK.js";
import { a as HeaderSearch, H as HeaderSocialsZone } from "./HeaderSocialsZone-D37TPJ9L.js";
import "./index-CQCy530F.js";
import "./_commonjsHelpers-LQfde5yM.js";
import "./iframe-ADcXWQ_9.js";
import "../sb-preview/runtime.js";
import "./index-DTvnAYOg.js";
import "./index-Hv2vTVdx.js";
import "./index-CTx2sqk_.js";
import "./inheritsLoose-HEqISCW8.js";
import "./index-MBEdkwGi.js";
import "./index-BdOSk9or.js";
import "./Icon-io8Ds3f9.js";
import "./index-CpyNLP69.js";
import "./Container-ChumJ9z3.js";
import "./index-Cas18JYw.js";
import "./utils-l7qJ8bIE.js";
import "./Col-DTtAS2uD.js";
import "./Navbar-C82d94Yg.js";
import "./NavbarBrand-Cy1-5-LH.js";
import "./Collapse-DEWj2kdJ.js";
import "./Transition-DOLYtmQu.js";
import "./Nav-58kYoJuE.js";
import "./NavLink-f2w7L1cX.js";
import "./DropdownToggle-B_RMNwkM.js";
import "./popper-DTKBVcSS.js";
import "./Button-CDo48zCf.js";
import "./Button-DfNj8dlY.js";
import "./DropdownMenu-D4O4lxvn.js";
import "./LinkListItem-Bip2UIsY.js";
import "./MegamenuItem-CiTMPU_y.js";
import "./NavbarToggler-CkfoPab3.js";
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
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
      title: "Documentazione/Menu di navigazione/Header"
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "header",
      children: "Header"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "documentazione-ed-esempi-per-la-creazione-di-una-testata-di-navigazione",
      children: "Documentazione ed esempi per la creazione di una testata di navigazione."
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "L’header di un sito della Pubblica Amministrazione è solitamente composto di 3 elementi principali:"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Un cosiddetto “", jsxRuntimeExports.jsx(_components.em, {
          children: "Slim header"
        }), "”, una sottile fascia dello stesso colore o, preferibilmente, di colore lievemente più scuro rispetto al tema principale del sito, che mostra alcuni link funzionali con impatto globale o esterno al sito stesso."]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Una parte centrale “", jsxRuntimeExports.jsx(_components.em, {
          children: "Center header"
        }), "“ che identifica in modo chiaro il sito attraverso logo, testo e social, e può contenere un link per effettuare ricerche sul sito."]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Una parte dedicata alla navigazione “", jsxRuntimeExports.jsx(_components.em, {
          children: "Nav header"
        }), "“, visibile su schermi di grandi dimensioni ed accessibile attraverso il classico bottone di tipo “burger menu” per dispositivi mobili."]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "slim-header",
      children: "Slim header"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Lo ", jsxRuntimeExports.jsx(_components.em, {
        children: "Slim header"
      }), " header mostra un’intestazione, solitamente con riferimento all’ente di appartenenza del progetto o riferimenti utili, oltre ad un eventuale menu per il cambio lingua e l’accesso ad area riservata. Il cambio lingua è gestito con il componente dropdown."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: SlimHeader
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "right-action-con-bottone-full-responsive",
      children: "Right action con bottone full responsive"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per trasformare il bottone di action situato nella ", jsxRuntimeExports.jsx(_components.code, {
        children: "HeaderRightZone"
      }), " e renderlo full-responsive è sufficiente aggiungere la classe ", jsxRuntimeExports.jsx(_components.code, {
        children: "btn-full"
      }), " alla prop ", jsxRuntimeExports.jsx(_components.code, {
        children: "classNames"
      }), " del bottone."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: SlimHeaderFullResponse
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "versione-chiara",
      children: "Versione chiara"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per cambiare tema all’header slim è sufficiente aggiungere il modificatore ", jsxRuntimeExports.jsx(_components.code, {
        children: 'theme="light"'
      }), " al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Header"
      }), " di tipo ", jsxRuntimeExports.jsx(_components.code, {
        children: "slim"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Controls3, {
      of: SlimHeader
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "header-centrale",
      children: "Header Centrale"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["L'", jsxRuntimeExports.jsx(_components.em, {
        children: "Header centrale"
      }), ", per mostrare il logo dell’ente e la sua descrizione, dei link aggiuntivi ai social media, l’accesso al motore di ricerca, se presente."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: CenterHeaderBasic
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "versione-stretta",
      children: "Versione stretta"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per utilizzare la versione più stretta dell’header centrale è sufficiente aggiungere l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "small"
      }), " al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Header"
      }), " di tipo ", jsxRuntimeExports.jsx(_components.code, {
        children: "center"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: HeaderCenterNarrow
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "versione-chiara-1",
      children: "Versione chiara"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per cambiare tema all’header centrale è sufficiente aggiungere l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: 'theme="light"'
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Controls3, {
      of: CenterHeaderBasic
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "header-nav",
      children: "Header Nav"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.em, {
        children: "Header Nav"
      }), ", per elencare le voci di navigazione, siano esse semplici link, menu a tendina oppure un Megamenu a tutta larghezza."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: NavHeader
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["L’", jsxRuntimeExports.jsx(_components.em, {
        children: "Header Nav"
      }), " ha due versioni, una chiara (“light”) e una scura (“dark”). Lo stile di default ha differenti caratteristiche colore a seconda della versione desktop e mobile:"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Su Desktop lo stile di default ha un background di colore primario e link bianchi. Gli elementi ", jsxRuntimeExports.jsx(_components.code, {
          children: "Dropdown"
        }), " e Megamenu hanno background bianco, testi neri e link di colore primario."]
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "Su Mobile lo stile di default ha un background bianco e testi e link di colore primario."
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "versione-chiara-2",
      children: "Versione chiara"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per modificare la versione dell’Header Nav è sufficiente utilizzare la classe ", jsxRuntimeExports.jsx(_components.code, {
        children: "theme"
      }), " con i valori ", jsxRuntimeExports.jsx(_components.code, {
        children: '"dark"'
      }), " o ", jsxRuntimeExports.jsx(_components.code, {
        children: '"light"'
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Controls3, {
      of: NavHeader
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "navigazione-secondaria",
      children: "Navigazione secondaria"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Al menù di navigazione principale può essere aggiunto anche un menù di navigazione secondario aggiungendo l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "secondary"
      }), " al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Nav"
      }), ", contenente una seconda lista e la stessa struttura dati della lista ", jsxRuntimeExports.jsx(_components.code, {
        children: "Nav"
      }), " principale."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: NavHeaderSecondary
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "header-completa",
      children: "Header Completa"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Combinando i tre header sopra descritti è possibile creare un ", jsxRuntimeExports.jsx(_components.em, {
        children: "Header completo"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: CompleteHeaderStory
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "versione-chiara-3",
      children: "Versione chiara"
    }), "\n", jsxRuntimeExports.jsx(Controls3, {
      of: CompleteHeaderStory
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "header-sticky",
      children: "Header sticky"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Affinché la testata rimanga parzialmente visibile anche allo scorrere della pagina, è sufficiente utilizzare l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "sticky"
      }), " nel componente contenitore ", jsxRuntimeExports.jsx(_components.code, {
        children: "Headers"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "argomenti-componente",
      children: "Argomenti componente"
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "header-1",
      children: "Header"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: Header
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "headers",
      children: "Headers"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: Headers
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "headercontent",
      children: "HeaderContent"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: HeaderContent
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "headerbrand",
      children: "HeaderBrand"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: HeaderBrand
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "headertoggler",
      children: "HeaderToggler"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: HeaderToggler
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "headerlinkzone",
      children: "HeaderLinkZone"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: HeaderLinkZone
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "headerrightzone",
      children: "HeaderRightZone"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: HeaderRightZone
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "headersearch",
      children: "HeaderSearch"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: HeaderSearch
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "headersocialszone",
      children: "HeaderSocialsZone"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: HeaderSocialsZone
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
