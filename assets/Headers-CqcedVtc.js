import { j as jsxRuntimeExports } from "./jsx-runtime-Dd8filLf.js";
import { useMDXComponents } from "./index-DKZlwgtl.js";
import { M as Meta, C as Canvas, a as Controls3, A as ArgTypes } from "./index-BdnIcMZW.js";
import { H as Header, a as HeaderContent } from "./HeaderContent-DV8_z36O.js";
import { H as HeaderBrand, a as HeaderRightZone } from "./HeaderRightZone-DNqc_Oaz.js";
import { H as HeaderLinkZone } from "./HeaderLinkZone-CrST25Yd.js";
import { C as CompleteHeaderStory, H as Headers } from "./CompleteHeader.stories-Dh4Mi2gz.js";
import { a as HeaderSearch, H as HeaderSocialsZone } from "./HeaderSocialsZone-Gxu-5Ba9.js";
import { H as HeaderToggler } from "./HeaderToggler-Dbg2iRRU.js";
import "./track-focus-DbJ2CO43.js";
import { CenterHeaderBasic, HeaderCenterNarrow } from "./CenterHeader.stories-BcX5gn4M.js";
import { NavHeader, NavHeaderSecondary } from "./NavHeader.stories-BgpsUhcP.js";
import { SlimHeader, SlimHeaderFullResponse } from "./SlimHeader.stories-BYTXRgKI.js";
import "./index-N7T0HPyM.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-B99PWC6O.js";
import "./index-DaSoJtbc.js";
import "./index-_6PbV05F.js";
import "./index-9xAnpW0o.js";
import "./index-BdOSk9or.js";
import "./index-xoeSAV6i.js";
import "./HeaderContext-B9tXk8jD.js";
import "./Container-Bin81bHr.js";
import "./utils-Cn8VSNph.js";
import "./Col-C4Vz86Og.js";
import "./Navbar-BmFgHm97.js";
import "./NavbarBrand-Cuf2knI6.js";
import "./Icon-Dz7RaEwn.js";
import "./NavLink-CE4cVwmb.js";
import "./Button-DzBfv9Kx.js";
import "./Button-FBjU0jYp.js";
import "./Collapse-D3YfEsku.js";
import "./Transition-l9AVs-4D.js";
import "./DropdownToggle-kbgiaL4q.js";
import "./DropdownToggle-k821C5Fo.js";
import "./Popper-CBwCuBfF.js";
import "./DropdownMenu-CHVBdGUY.js";
import "./LinkListItem-D-pDHaAX.js";
import "./Nav-UcuFK7Q0.js";
import "./NavbarToggler-TuhLXCHK.js";
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
