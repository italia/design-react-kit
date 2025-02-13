import { j as jsxRuntimeExports } from "./jsx-runtime-BKjOVojP.js";
import { useMDXComponents } from "./index-BDy3TOcs.js";
import { ae as Meta, af as Canvas } from "./index-BvRgJbWC.js";
import { T as ToolbarStories, E as Esempio, a as EsempioMedium, b as EsempioSmall, c as EsempioWithDivider, d as EsempioConBadgeGrande, e as EsempioConBadgeMedio, f as EsempioConBadgePiccolo, g as EsempioConDropdownGrande, h as EsempioConDropdownMedia, i as EsempioConDropdownPiccola, j as EsempioVerticaleGrande, k as EsempioVerticaleMedia, l as EsempioVerticalePiccola } from "./Toolbar.stories-B0UvBUGU.js";
import "./index-BehpJNG5.js";
import "./_commonjsHelpers-DWwsNxpa.js";
import "./iframe-Blg4YaEd.js";
import "../sb-preview/runtime.js";
import "./index-D7280_ap.js";
import "./index-DmVNLg0t.js";
import "./index-DJdTjTnu.js";
import "./index-dukjSSyv.js";
import "./index-BdOSk9or.js";
import "./DropdownMenu-DV6KduIR.js";
import "./utils-CruPskUV.js";
import "./index-D3ELxcOV.js";
import "./Popper-oXY5zJ3Q.js";
import "./HeaderContext-Dzs8nqu1.js";
import "./Icon-ruXWv551.js";
import "./LinkListItem-E5PaFpui.js";
import "./DropdownToggle-CIK1qVdC.js";
import "./Button-Bz_c481c.js";
import "./track-focus-DbJ2CO43.js";
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    p: "p",
    pre: "pre",
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
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "source",
      children: "Source"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [openFirst, toggleFirst] = useState(false);\r\nconst [openSecond, toggleSecond] = useState(false);\r\nconst [openThird, toggleThird] = useState(false);\r\nconst [openFourth, toggleFourth] = useState(false);\r\nconst [openFifth, toggleFifth] = useState(false);\r\nreturn (\r\n  <div className='toolbar-docs-style'>\r\n    <Toolbar size='large'>\r\n      <ToolbarItem\r\n        label='messaggi'\r\n        iconName='it-comment'\r\n        active\r\n        badge={{\r\n          value: 1,\r\n          label: 'da leggere',\r\n          srText: `c'è un messaggio da leggere`\r\n        }}\r\n        dropdown\r\n        isDropdownOpen={openFirst}\r\n        onClick={() => toggleFirst(!openFirst)}\r\n      >\r\n        <DropdownMenu>\r\n          <LinkList>\r\n            <LinkListItem>Azione 1</LinkListItem>\r\n            <LinkListItem>Azione 2</LinkListItem>\r\n            <LinkListItem>Azione 3</LinkListItem>\r\n          </LinkList>\r\n        </DropdownMenu>\r\n      </ToolbarItem>\r\n      <ToolbarItem\r\n        label='immagini'\r\n        iconName='it-camera'\r\n        badge={{\r\n          value: 42,\r\n          label: 'da visualizzare',\r\n          srText: `ci sono 42 immagini da visualizzare`\r\n        }}\r\n        dropdown\r\n        isDropdownOpen={openSecond}\r\n        onClick={() => toggleSecond(!openSecond)}\r\n      >\r\n        <DropdownMenu>\r\n          <LinkList>\r\n            <LinkListItem>Azione 1</LinkListItem>\r\n            <LinkListItem>Azione 2</LinkListItem>\r\n            <LinkListItem>Azione 3</LinkListItem>\r\n          </LinkList>\r\n        </DropdownMenu>\r\n      </ToolbarItem>\r\n      <ToolbarItem\r\n        label='documenti'\r\n        iconName='it-file'\r\n        dropdown\r\n        isDropdownOpen={openThird}\r\n        onClick={() => toggleThird(!openThird)}\r\n      >\r\n        <DropdownMenu>\r\n          <LinkList>\r\n            <LinkListItem>Azione 1</LinkListItem>\r\n            <LinkListItem>Azione 2</LinkListItem>\r\n            <LinkListItem>Azione 3</LinkListItem>\r\n          </LinkList>\r\n        </DropdownMenu>\r\n      </ToolbarItem>\r\n      <ToolbarItem\r\n        label='privacy'\r\n        iconName='it-lock'\r\n        disabled\r\n        dropdown\r\n        isDropdownOpen={openFourth}\r\n        onClick={() => toggleFourth(!openFourth)}\r\n      >\r\n        <DropdownMenu>\r\n          <LinkList>\r\n            <LinkListItem>Azione 1</LinkListItem>\r\n            <LinkListItem>Azione 2</LinkListItem>\r\n            <LinkListItem>Azione 3</LinkListItem>\r\n          </LinkList>\r\n        </DropdownMenu>\r\n      </ToolbarItem>\r\n      <ToolbarItem\r\n        label='altro'\r\n        iconName='it-more-actions'\r\n        dropdown\r\n        isDropdownOpen={openFifth}\r\n        onClick={() => toggleFifth(!openFifth)}\r\n        showMore\r\n      >\r\n        <DropdownMenu>\r\n          <LinkList>\r\n            <LinkListItem className='left-icon'>\r\n              <Icon className='me-2' icon='it-link'></Icon>\r\n              <span>Azione 1</span>\r\n            </LinkListItem>\r\n            <LinkListItem className='left-icon'>\r\n              <Icon className='me-2' icon='it-mail'></Icon>\r\n              <span>Azione 2</span>\r\n            </LinkListItem>\r\n            <LinkListItem className='left-icon'>\r\n              <Icon className='me-2' icon='it-settings'></Icon>\r\n              <span>Azione 3</span>\r\n            </LinkListItem>\r\n          </LinkList>\r\n        </DropdownMenu>\r\n      </ToolbarItem>\r\n    </Toolbar>\r\n  </div>\r\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "medio-con-dropdown",
      children: "Medio con Dropdown"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EsempioConDropdownMedia
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "source-1",
      children: "Source"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [openFirst, toggleFirst] = useState(false);\r\nconst [openSecond, toggleSecond] = useState(false);\r\nconst [openThird, toggleThird] = useState(false);\r\nconst [openFourth, toggleFourth] = useState(false);\r\nconst [openFifth, toggleFifth] = useState(false);\r\nconst [openSixth, toggleSixth] = useState(false);\r\nreturn (\r\n  <div className='toolbar-docs-style'>\r\n    <Toolbar size='medium'>\r\n      <ToolbarItem\r\n        label='messaggi'\r\n        iconName='it-comment'\r\n        active\r\n        badge={{\r\n          value: 1,\r\n          label: 'da leggere',\r\n          srText: `c'è un messaggio da leggere`\r\n        }}\r\n        dropdown\r\n        isDropdownOpen={openFirst}\r\n        onClick={() => toggleFirst(!openFirst)}\r\n      >\r\n        <DropdownMenu>\r\n          <LinkList>\r\n            <LinkListItem>Azione 1</LinkListItem>\r\n            <LinkListItem>Azione 2</LinkListItem>\r\n            <LinkListItem>Azione 3</LinkListItem>\r\n          </LinkList>\r\n        </DropdownMenu>\r\n      </ToolbarItem>\r\n      <ToolbarItem\r\n        label='immagini'\r\n        iconName='it-camera'\r\n        badge={{\r\n          value: 42,\r\n          label: 'da visualizzare',\r\n          srText: `ci sono 42 immagini da visualizzare`\r\n        }}\r\n        dropdown\r\n        isDropdownOpen={openSecond}\r\n        onClick={() => toggleSecond(!openSecond)}\r\n      >\r\n        <DropdownMenu>\r\n          <LinkList>\r\n            <LinkListItem>Azione 1</LinkListItem>\r\n            <LinkListItem>Azione 2</LinkListItem>\r\n            <LinkListItem>Azione 3</LinkListItem>\r\n          </LinkList>\r\n        </DropdownMenu>\r\n      </ToolbarItem>\r\n      <ToolbarItem\r\n        label='documenti'\r\n        iconName='it-file'\r\n        dropdown\r\n        isDropdownOpen={openThird}\r\n        onClick={() => toggleThird(!openThird)}\r\n      >\r\n        <DropdownMenu>\r\n          <LinkList>\r\n            <LinkListItem>Azione 1</LinkListItem>\r\n            <LinkListItem>Azione 2</LinkListItem>\r\n            <LinkListItem>Azione 3</LinkListItem>\r\n          </LinkList>\r\n        </DropdownMenu>\r\n      </ToolbarItem>\r\n      <ToolbarItem\r\n        label='privacy'\r\n        iconName='it-lock'\r\n        dropdown\r\n        isDropdownOpen={openFourth}\r\n        onClick={() => toggleFourth(!openFourth)}\r\n      >\r\n        <DropdownMenu>\r\n          <LinkList>\r\n            <LinkListItem>Azione 1</LinkListItem>\r\n            <LinkListItem>Azione 2</LinkListItem>\r\n            <LinkListItem>Azione 3</LinkListItem>\r\n          </LinkList>\r\n        </DropdownMenu>\r\n      </ToolbarItem>\r\n      <ToolbarItem\r\n        label='preferiti'\r\n        iconName='it-star-outline'\r\n        disabled\r\n        dropdown\r\n        isDropdownOpen={openFifth}\r\n        onClick={() => toggleFifth(!openFifth)}\r\n      >\r\n        <DropdownMenu>\r\n          <LinkList>\r\n            <LinkListItem>Azione 1</LinkListItem>\r\n            <LinkListItem>Azione 2</LinkListItem>\r\n            <LinkListItem>Azione 3</LinkListItem>\r\n          </LinkList>\r\n        </DropdownMenu>\r\n      </ToolbarItem>\r\n      <ToolbarItem\r\n        label='altro'\r\n        iconName='it-more-actions'\r\n        dropdown\r\n        isDropdownOpen={openSixth}\r\n        onClick={() => toggleSixth(!openSixth)}\r\n        showMore\r\n      >\r\n        <DropdownMenu>\r\n          <LinkList>\r\n            <LinkListItem className='left-icon'>\r\n              <Icon className='me-2' icon='it-link'></Icon>\r\n              <span>Azione 1</span>\r\n            </LinkListItem>\r\n            <LinkListItem className='left-icon'>\r\n              <Icon className='me-2' icon='it-mail'></Icon>\r\n              <span>Azione 2</span>\r\n            </LinkListItem>\r\n            <LinkListItem className='left-icon'>\r\n              <Icon className='me-2' icon='it-settings'></Icon>\r\n              <span>Azione 3</span>\r\n            </LinkListItem>\r\n          </LinkList>\r\n        </DropdownMenu>\r\n      </ToolbarItem>\r\n    </Toolbar>\r\n  </div>\r\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "piccolo-con-dropdown",
      children: "Piccolo con Dropdown"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EsempioConDropdownPiccola
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "source-2",
      children: "Source"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [openFirst, toggleFirst] = useState(false);\r\nconst [openSecond, toggleSecond] = useState(false);\r\nconst [openThird, toggleThird] = useState(false);\r\nconst [openFourth, toggleFourth] = useState(false);\r\nconst [openFifth, toggleFifth] = useState(false);\r\nconst [openSixth, toggleSixth] = useState(false);\r\nreturn (\r\n  <div className='toolbar-docs-style'>\r\n    <Toolbar size='small'>\r\n      <ToolbarItem\r\n        label='messaggi'\r\n        iconName='it-comment'\r\n        active\r\n        badge={{\r\n          value: 1,\r\n          label: 'da leggere',\r\n          srText: `c'è un messaggio da leggere`\r\n        }}\r\n        dropdown\r\n        isDropdownOpen={openFirst}\r\n        onClick={() => toggleFirst(!openFirst)}\r\n      >\r\n        <DropdownMenu>\r\n          <LinkList>\r\n            <LinkListItem>Azione 1</LinkListItem>\r\n            <LinkListItem>Azione 2</LinkListItem>\r\n            <LinkListItem>Azione 3</LinkListItem>\r\n          </LinkList>\r\n        </DropdownMenu>\r\n      </ToolbarItem>\r\n      <ToolbarItem\r\n        label='immagini'\r\n        iconName='it-camera'\r\n        badge={{\r\n          value: 42,\r\n          label: 'da visualizzare',\r\n          srText: `ci sono 42 immagini da visualizzare`\r\n        }}\r\n        dropdown\r\n        isDropdownOpen={openSecond}\r\n        onClick={() => toggleSecond(!openSecond)}\r\n      >\r\n        <DropdownMenu>\r\n          <LinkList>\r\n            <LinkListItem>Azione 1</LinkListItem>\r\n            <LinkListItem>Azione 2</LinkListItem>\r\n            <LinkListItem>Azione 3</LinkListItem>\r\n          </LinkList>\r\n        </DropdownMenu>\r\n      </ToolbarItem>\r\n      <ToolbarItem\r\n        label='documenti'\r\n        iconName='it-file'\r\n        dropdown\r\n        isDropdownOpen={openThird}\r\n        onClick={() => toggleThird(!openThird)}\r\n      >\r\n        <DropdownMenu>\r\n          <LinkList>\r\n            <LinkListItem>Azione 1</LinkListItem>\r\n            <LinkListItem>Azione 2</LinkListItem>\r\n            <LinkListItem>Azione 3</LinkListItem>\r\n          </LinkList>\r\n        </DropdownMenu>\r\n      </ToolbarItem>\r\n      <ToolbarItem\r\n        label='privacy'\r\n        iconName='it-lock'\r\n        dropdown\r\n        isDropdownOpen={openFourth}\r\n        onClick={() => toggleFourth(!openFourth)}\r\n      >\r\n        <DropdownMenu>\r\n          <LinkList>\r\n            <LinkListItem>Azione 1</LinkListItem>\r\n            <LinkListItem>Azione 2</LinkListItem>\r\n            <LinkListItem>Azione 3</LinkListItem>\r\n          </LinkList>\r\n        </DropdownMenu>\r\n      </ToolbarItem>\r\n      <ToolbarItem\r\n        label='preferiti'\r\n        iconName='it-star-outline'\r\n        disabled\r\n        dropdown\r\n        isDropdownOpen={openFifth}\r\n        onClick={() => toggleFifth(!openFifth)}\r\n      >\r\n        <DropdownMenu>\r\n          <LinkList>\r\n            <LinkListItem>Azione 1</LinkListItem>\r\n            <LinkListItem>Azione 2</LinkListItem>\r\n            <LinkListItem>Azione 3</LinkListItem>\r\n          </LinkList>\r\n        </DropdownMenu>\r\n      </ToolbarItem>\r\n      <ToolbarItem\r\n        label='altro'\r\n        iconName='it-more-actions'\r\n        dropdown\r\n        isDropdownOpen={openSixth}\r\n        onClick={() => toggleSixth(!openSixth)}\r\n        showMore\r\n      >\r\n        <DropdownMenu>\r\n          <LinkList>\r\n            <LinkListItem className='left-icon'>\r\n              <Icon className='me-2' icon='it-link'></Icon>\r\n              <span>Azione 1</span>\r\n            </LinkListItem>\r\n            <LinkListItem className='left-icon'>\r\n              <Icon className='me-2' icon='it-mail'></Icon>\r\n              <span>Azione 2</span>\r\n            </LinkListItem>\r\n            <LinkListItem className='left-icon'>\r\n              <Icon className='me-2' icon='it-settings'></Icon>\r\n              <span>Azione 3</span>\r\n            </LinkListItem>\r\n          </LinkList>\r\n        </DropdownMenu>\r\n      </ToolbarItem>\r\n    </Toolbar>\r\n  </div>\r\n);\n"
      })
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
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "source-3",
      children: "Source"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [openFirst, toggleFirst] = useState(false);\r\nreturn (\r\n  <div className='toolbar-docs-style'>\r\n    <Toolbar vertical>\r\n      <ToolbarItem\r\n        label='messaggi'\r\n        iconName='it-comment'\r\n        active\r\n        badge={{\r\n          value: 1,\r\n          label: 'da leggere',\r\n          srText: `c'è un messaggio da leggere`\r\n        }}\r\n      />\r\n      <ToolbarItem\r\n        label='immagini'\r\n        iconName='it-camera'\r\n        badge={{\r\n          value: 42,\r\n          label: 'da visualizzare',\r\n          srText: `ci sono 42 immagini da visualizzare`\r\n        }}\r\n        dropdown\r\n        isDropdownOpen={openFirst}\r\n        onClick={() => toggleFirst(!openFirst)}\r\n      >\r\n        <DropdownMenu>\r\n          <LinkList>\r\n            <LinkListItem>Azione 1</LinkListItem>\r\n            <LinkListItem>Azione 2</LinkListItem>\r\n            <LinkListItem>Azione 3</LinkListItem>\r\n          </LinkList>\r\n        </DropdownMenu>\r\n      </ToolbarItem>\r\n      <ToolbarDividerItem />\r\n      <ToolbarItem label='immagini' iconName='it-camera' />\r\n      <ToolbarItem label='privacy' iconName='it-lock' />\r\n      <ToolbarItem label='preferiti' iconName='it-star-outline' disabled />\r\n    </Toolbar>\r\n  </div>\r\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "medio-verticale",
      children: "Medio verticale"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EsempioVerticaleMedia
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "source-4",
      children: "Source"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [openFirst, toggleFirst] = useState(false);\r\nreturn (\r\n  <div className='toolbar-docs-style'>\r\n    <Toolbar vertical size='medium'>\r\n      <ToolbarItem\r\n        label='messaggi'\r\n        iconName='it-comment'\r\n        active\r\n        badge={{\r\n          value: 1,\r\n          label: 'da leggere',\r\n          srText: `c'è un messaggio da leggere`\r\n        }}\r\n      />\r\n      <ToolbarItem\r\n        label='immagini'\r\n        iconName='it-camera'\r\n        badge={{\r\n          value: 42,\r\n          label: 'da visualizzare',\r\n          srText: `ci sono 42 immagini da visualizzare`\r\n        }}\r\n        dropdown\r\n        isDropdownOpen={openFirst}\r\n        onClick={() => toggleFirst(!openFirst)}\r\n      >\r\n        <DropdownMenu>\r\n          <LinkList>\r\n            <LinkListItem>Azione 1</LinkListItem>\r\n            <LinkListItem>Azione 2</LinkListItem>\r\n            <LinkListItem>Azione 3</LinkListItem>\r\n          </LinkList>\r\n        </DropdownMenu>\r\n      </ToolbarItem>\r\n      <ToolbarDividerItem />\r\n      <ToolbarItem label='immagini' iconName='it-camera' />\r\n      <ToolbarItem label='privacy' iconName='it-lock' />\r\n      <ToolbarItem label='preferiti' iconName='it-star-outline' disabled />\r\n    </Toolbar>\r\n  </div>\r\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "piccolo-verticale",
      children: "Piccolo verticale"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EsempioVerticalePiccola
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "source-5",
      children: "Source"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [openFirst, toggleFirst] = useState(false);\r\nreturn (\r\n  <div className='toolbar-docs-style'>\r\n    <Toolbar vertical size='small'>\r\n      <ToolbarItem\r\n        label='messaggi'\r\n        iconName='it-comment'\r\n        active\r\n        badge={{\r\n          value: 1,\r\n          label: 'da leggere',\r\n          srText: `c'è un messaggio da leggere`\r\n        }}\r\n      />\r\n      <ToolbarItem\r\n        label='immagini'\r\n        iconName='it-camera'\r\n        badge={{\r\n          value: 42,\r\n          label: 'da visualizzare',\r\n          srText: `ci sono 42 immagini da visualizzare`\r\n        }}\r\n        dropdown\r\n        isDropdownOpen={openFirst}\r\n        onClick={() => toggleFirst(!openFirst)}\r\n      >\r\n        <DropdownMenu>\r\n          <LinkList>\r\n            <LinkListItem>Azione 1</LinkListItem>\r\n            <LinkListItem>Azione 2</LinkListItem>\r\n            <LinkListItem>Azione 3</LinkListItem>\r\n          </LinkList>\r\n        </DropdownMenu>\r\n      </ToolbarItem>\r\n      <ToolbarDividerItem />\r\n      <ToolbarItem label='immagini' iconName='it-camera' />\r\n      <ToolbarItem label='privacy' iconName='it-lock' />\r\n      <ToolbarItem label='preferiti' iconName='it-star-outline' />\r\n      <ToolbarItem label='download' iconName='it-download' disabled />\r\n    </Toolbar>\r\n  </div>\r\n);\n"
      })
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
