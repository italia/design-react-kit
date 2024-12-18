import { j as jsxRuntimeExports } from "./jsx-runtime-BKjOVojP.js";
import { useMDXComponents } from "./index-BDy3TOcs.js";
import { ae as Meta, v as vu, af as Canvas, ah as Controls3, ai as Story2, ag as ArgTypes } from "./index-BVfv5SMh.js";
import { A as AvatarContainer, a as AvatarWrapper } from "./AvatarWrapper-3aHJJ4uj.js";
import { A as AvatarStories, a as AvatarWithImage, b as AvatarWithText, c as AvatarWithIcon, d as AvatarLink, e as AvatarLinkWithTooltip, f as AvatarExtraText } from "./Avatar.stories-BZ3HWnpM.js";
import { M as MediumOverlaidAvatars, S as SmallOverlappingAvatars, A as AvatarGroupContainer } from "./AvatarGroupsOverlapping.stories-Caoj4RYU.js";
import { A as AvatarIcon } from "./AvatarIcon-D9xAvvcE.js";
import { U as UserPresence, a as UserStatus, A as AvatarPresence, b as AvatarStatus } from "./AvatarBehaviour.stories-Jo2qDD1L.js";
import { C as Callout, a as CalloutText } from "./CalloutText-DuQn_Rtc.js";
import { C as CalloutTitle } from "./CalloutTitle-D5ep80ue.js";
import "./track-focus-DbJ2CO43.js";
import { AvatarSmallList, AvatarMediaList } from "./AvatarGroupsList.stories-BWD3AKLQ.js";
import "./index-BehpJNG5.js";
import "./_commonjsHelpers-DWwsNxpa.js";
import "./iframe-wO3SDMP-.js";
import "../sb-preview/runtime.js";
import "./index-D7280_ap.js";
import "./index-DmVNLg0t.js";
import "./index-DJdTjTnu.js";
import "./index-dukjSSyv.js";
import "./index-BdOSk9or.js";
import "./index-D3ELxcOV.js";
import "./UncontrolledTooltip-CukTvrvd.js";
import "./utils-CruPskUV.js";
import "./TooltipPopoverWrapper-DTl8WTia.js";
import "./Popper-oXY5zJ3Q.js";
import "./Fade-C6-39HuU.js";
import "./Transition-D-QAwXWC.js";
import "./Icon-Cp3-XjMA.js";
import "./DropdownToggle-D3DHr3EM.js";
import "./DropdownToggle-BUs3dEnq.js";
import "./DropdownMenu-DKFGiwZK.js";
import "./Button-Bz_c481c.js";
import "./LinkListItem-E5PaFpui.js";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: AvatarStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "avatar",
      children: "Avatar"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "rappresentazione-grafica-di-unimmagine-utente",
      children: "Rappresentazione grafica di un’immagine utente"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "L’elemento Avatar è la rappresentazione grafica di un utente e può includere un’immagine, un testo, un’icona o un dropdown con ulteriori contenuti."
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Gli Avatar sono disponibili in sei diverse dimensioni:"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["xs con attributo ", jsxRuntimeExports.jsx(_components.code, {
          children: 'size="xs"'
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["sm con attributo ", jsxRuntimeExports.jsx(_components.code, {
          children: 'size="sm"'
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["md (dimensioni di default) ", jsxRuntimeExports.jsx(_components.code, {
          children: 'size="md"'
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["lg con attributo ", jsxRuntimeExports.jsx(_components.code, {
          children: 'size="lg"'
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["xl con attributo ", jsxRuntimeExports.jsx(_components.code, {
          children: 'size="xl"'
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["xxl con attributo ", jsxRuntimeExports.jsx(_components.code, {
          children: 'size="xxl"'
        })]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx("div", {
      className: "docs",
      children: jsxRuntimeExports.jsxs(Callout, {
        color: "success",
        children: [jsxRuntimeExports.jsx(CalloutTitle, {
          children: jsxRuntimeExports.jsx("span", {
            className: "text",
            children: "Accessibilità delle immagini"
          })
        }), jsxRuntimeExports.jsx(CalloutText, {
          children: "Per ragioni di accessibilità è importante indicare all’interno dell’Avatar il nome dell’utente associato allo stesso."
        }), jsxRuntimeExports.jsx(CalloutText, {
          children: jsxRuntimeExports.jsxs(_components.p, {
            children: ["Nel caso di Avatar con immagine è consigliabile utilizzare l’attributo ", jsxRuntimeExports.jsx(vu, {
              children: 'alt=""'
            }), " della stessa."]
          })
        }), jsxRuntimeExports.jsx(CalloutText, {
          children: jsxRuntimeExports.jsxs(_components.p, {
            children: ["Un Avatar con testo conterrà uno ", jsxRuntimeExports.jsx(vu, {
              children: "<span>"
            }), " per soli screen reader con il nome dell’utente indicato per esteso:\r\n", jsxRuntimeExports.jsx(vu, {
              children: '<span class="visually-hidden">Nome Utente</span>'
            }), "."]
          })
        }), jsxRuntimeExports.jsx(CalloutText, {
          children: jsxRuntimeExports.jsxs(_components.p, {
            children: ["Per gli Avatar con icona inserire un testo alternativo: ", jsxRuntimeExports.jsx(vu, {
              children: '<span class="visually-hidden">Testo icona</span>'
            }), "."]
          })
        })]
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "avatar-con-immagine",
      children: "Avatar con immagine"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "L’Avatar ridimensiona automaticamente l’immagine adattandola al formato circolare e centrandola. Si consiglia in ogni caso di utilizzare immagini delle dimensioni corrette."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: AvatarWithImage
    }), "\n", jsxRuntimeExports.jsx(Controls3, {
      of: AvatarWithImage
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "avatar-con-testo",
      children: "Avatar con testo"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Avatar con testo"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "La versione con testo contiene le iniziali dell’utente (una sola nel caso delle dimensioni xs ed sm). Oltre ai colori di default è possibile utilizzare uno sfondo a scelta fra:"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Primario: aggiungendo l'attributo ", jsxRuntimeExports.jsx(_components.code, {
          children: 'color="primary"'
        }), " al componente ", jsxRuntimeExports.jsx(_components.code, {
          children: "AvatarIcon"
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Secondario: aggiungendo l'attributo ", jsxRuntimeExports.jsx(_components.code, {
          children: 'color="secondary"'
        }), " al componente ", jsxRuntimeExports.jsx(_components.code, {
          children: "AvatarIcon"
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Verde: aggiungendo l'attributo ", jsxRuntimeExports.jsx(_components.code, {
          children: 'color="green"'
        }), " al componente ", jsxRuntimeExports.jsx(_components.code, {
          children: "AvatarIcon"
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Arancione: aggiungendo l'attributo ", jsxRuntimeExports.jsx(_components.code, {
          children: 'color="orange"'
        }), " al componente ", jsxRuntimeExports.jsx(_components.code, {
          children: "AvatarIcon"
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Rosso: aggiungendo l'attributo ", jsxRuntimeExports.jsx(_components.code, {
          children: 'color="red"'
        }), " al componente ", jsxRuntimeExports.jsx(_components.code, {
          children: "AvatarIcon"
        })]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "In questi casi il testo sarà di colore bianco."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: AvatarWithText
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "avatar-con-icona",
      children: "Avatar con icona"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per utilizzare un’icona all’interno degli Avatar è sufficiente includere il codice dell’icona prescelta dalla ", jsxRuntimeExports.jsx(_components.a, {
        href: "?path=/docs/documentazione-utilities-icone--page#lista-delle-icone-disponibili",
        children: "libreria icone"
      }), " e indicarne il colore con una delle classi disponibili."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: AvatarWithIcon
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "avatar-link",
      children: "Avatar Link"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per associare un Avatar ad una navigazione, è possible inserire componenti di navigazione al suo interno, oppure sfruttare l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "href"
      }), ":"]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: AvatarLink
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "avatar-link-con-tooltip",
      children: "Avatar Link con Tooltip"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["E’ possibile associare un Tooltip con maggiori informazioni relative all’utente o all’azione associata utilizzando il componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Tooltip"
      }), " del kit."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: AvatarLinkWithTooltip
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: 'import {useRef} from "react";\r\nimport {AvatarContainer} from "./AvatarContainer";\r\nimport {AvatarIcon} from "./AvatarIcon";\r\nconst withImageRef = useRef(null);\r\nconst withTextRef = useRef(null);\r\nconst withIconRef = useRef(null);\r\nreturn (\r\n    <AvatarContainer>\r\n        <AvatarIcon size="xl" href="#" innerRef={withImageRef}>\r\n            <UncontrolledTooltip placement="left" target={withImageRef}>\r\n                Anna Barbieri\r\n                <br />\r\n                <i>Administrator</i>\r\n            </UncontrolledTooltip>\r\n            <img src="https://randomuser.me/api/portraits/women/41.jpg" alt="Anna Barbieri"></img>\r\n        </AvatarIcon>\r\n        <AvatarIcon size="xl" color="red" href="#" innerRef={withTextRef}>\r\n            <UncontrolledTooltip placement="top" target={withTextRef}>\r\n                Mario Rossi\r\n                <br />\r\n                <i>Editor</i>\r\n            </UncontrolledTooltip>\r\n            <p aria-hidden="true">MR</p>\r\n            <span className="visually-hidden">Mario Rossi</span>\r\n        </AvatarIcon>\r\n        <AvatarIcon size="xl" href="#" innerRef={withIconRef}>\r\n            <Icon icon="it-search" />\r\n            <UncontrolledTooltip placement="right" target={withIconRef}>\r\n                Search\r\n                <br />\r\n                <i>News Archive</i>\r\n            </UncontrolledTooltip>\r\n        </AvatarIcon>\r\n    </AvatarContainer>\r\n);\n'
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "gruppi-di-avatar",
      children: "Gruppi di Avatar"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Gli Avatar possono essere raggruppati in liste verticali ed orizzontali."
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "lista",
      children: "Lista"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Utilizzando un componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "LinkList"
      }), " con l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "avatar"
      }), " si ottiene una lista verticale con Avatar affiancati da link e testi."]
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "lista-piccola",
      children: "Lista piccola"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Lista verticale di Avatar di dimensione piccola con attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: 'size="sm"'
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: AvatarSmallList
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "lista-media",
      children: "Lista media"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Lista verticale di Avatar di dimensione media con attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: 'size="md"'
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: AvatarMediaList
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "avatar-sovrapposti",
      children: "Avatar Sovrapposti"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Racchiudendo una serie di Avatar in un componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "AvatarGroupContainer"
      }), " questi verranno visualizzati come una lista orizzontale in cui i singoli elementi sono parzialmente sovrapposti. In questo tipo di gruppo è possibile aggiungere un componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Dropdown"
      }), " per racchiudere ulteriori elementi Avatar."]
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "avatar-sovrapposti-piccoli",
      children: "Avatar Sovrapposti Piccoli"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Gruppo di Avatar sovrapposti di dimensione piccola con attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: 'size="xs"'
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: MediumOverlaidAvatars
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "avatar-sovrapposti-medi",
      children: "Avatar Sovrapposti Medi"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Gruppo di Avatar sovrapposti di dimensione media con attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: 'size="md"'
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      children: jsxRuntimeExports.jsx(Story2, {
        id: "componenti-avatar-avatar-groups-overlapping--medium-overlaid-avatars"
      })
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: SmallOverlappingAvatars
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "comportamento",
      children: "Comportamento"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "presenza-utente",
      children: "Presenza utente"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Affiancando un componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "AvatarIcon"
      }), " con il componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "AvatarPresence"
      }), " all'interno di un componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "AvatarWrapper"
      }), " si ottiene un indicatore dello stato di presenza dell’utente:"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["lo stato attivo si ottiene impostando l'attributo ", jsxRuntimeExports.jsx(_components.code, {
          children: "presence"
        }), " su ", jsxRuntimeExports.jsx(_components.code, {
          children: "active"
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["lo stato non disponibile si ottiene aggiungendo l'attributo ", jsxRuntimeExports.jsx(_components.code, {
          children: "presence"
        }), " su ", jsxRuntimeExports.jsx(_components.code, {
          children: "busy"
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["lo stato invisibile si ottiene aggiungendo l'attributo ", jsxRuntimeExports.jsx(_components.code, {
          children: "presence"
        }), " su ", jsxRuntimeExports.jsx(_components.code, {
          children: "hidden"
        })]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx("div", {
      className: "docs",
      children: jsxRuntimeExports.jsxs(Callout, {
        color: "success",
        children: [jsxRuntimeExports.jsx(CalloutTitle, {
          children: jsxRuntimeExports.jsx("span", {
            className: "text",
            children: "Accessibilità della presenza"
          })
        }), jsxRuntimeExports.jsxs(CalloutText, {
          children: [jsxRuntimeExports.jsx("p", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["Inserire un ", jsxRuntimeExports.jsx(vu, {
                children: "<span>"
              }), " riservato agli screen reader con indicazione della presenza dell’utente nel componente\r\n", jsxRuntimeExports.jsx(vu, {
                children: "AvatarPresence"
              }), "."]
            })
          }), jsxRuntimeExports.jsx("p", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["Ad esempio: ", jsxRuntimeExports.jsx(vu, {
                children: '<span class="visually-hidden">Presenza: (stato presenza)</span>'
              }), "."]
            })
          })]
        })]
      })
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: UserPresence
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "status-utente",
      children: "Status utente"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Affiancando un componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "AvatarIcon"
      }), " con il componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "AvatarStatus"
      }), " all'interno di un componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "AvatarWrapper"
      }), " si ottiene un indicatore dello stato dell'account utente:"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["lo stato attivo si ottiene impostando l'attributo ", jsxRuntimeExports.jsx(_components.code, {
          children: "status"
        }), " su ", jsxRuntimeExports.jsx(_components.code, {
          children: "approved"
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["lo stato non disponibile si ottiene aggiungendo l'attributo ", jsxRuntimeExports.jsx(_components.code, {
          children: "status"
        }), " su ", jsxRuntimeExports.jsx(_components.code, {
          children: "declined"
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["lo stato invisibile si ottiene aggiungendo l'attributo ", jsxRuntimeExports.jsx(_components.code, {
          children: "status"
        }), " su ", jsxRuntimeExports.jsx(_components.code, {
          children: "notify"
        })]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx("div", {
      className: "docs",
      children: jsxRuntimeExports.jsxs(Callout, {
        color: "success",
        children: [jsxRuntimeExports.jsx(CalloutTitle, {
          children: jsxRuntimeExports.jsx("span", {
            className: "text",
            children: "Accessibilità dello status"
          })
        }), jsxRuntimeExports.jsxs(CalloutText, {
          children: [jsxRuntimeExports.jsx("p", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["Inserire un ", jsxRuntimeExports.jsx(vu, {
                children: "<span>"
              }), " riservato agli screen reader con indicazione della presenza dell’utente nel componente\r\n", jsxRuntimeExports.jsx(vu, {
                children: "AvatarStatus"
              }), "."]
            })
          }), jsxRuntimeExports.jsx("p", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["Ad esempio: ", jsxRuntimeExports.jsx(vu, {
                children: '<span class="visually-hidden">Status: (stato utenza)</span>'
              }), "."]
            })
          })]
        })]
      })
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: UserStatus
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "avatar-con-testo-aggiuntivo",
      children: "Avatar con testo aggiuntivo"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per ottenere una versione più completa dell’Avatar con nome esteso ed eventuale testo accessorio affiancare un componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "AvatarIcon"
      }), " con il componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "AvatarExtraText"
      }), ", in cui aggiungere il testo esteso, all'interno di un componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "AvatarWrapper"
      }), "."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per il nome è possibile utilizzare i tag ", jsxRuntimeExports.jsx(_components.code, {
        children: "<h3>"
      }), " o ", jsxRuntimeExports.jsx(_components.code, {
        children: "<h4>"
      }), ". Il testo esteso può essere contenuto in un ", jsxRuntimeExports.jsx(_components.code, {
        children: "<p>"
      }), " o in un tag ", jsxRuntimeExports.jsx(_components.code, {
        children: "<time>"
      }), " nel caso di date/orari."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: AvatarWithText
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "argomenti-componente",
      children: "Argomenti componente"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "avatarcontainer",
      children: "AvatarContainer"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: AvatarContainer
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "avataricon",
      children: "AvatarIcon"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: AvatarIcon
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "avatargroupcontainer",
      children: "AvatarGroupContainer"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: AvatarGroupContainer
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "avatarwrapper",
      children: "AvatarWrapper"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: AvatarWrapper
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "avatarpresence",
      children: "AvatarPresence"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: AvatarPresence
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "avatarstatus",
      children: "AvatarStatus"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: AvatarStatus
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "avatarextratext",
      children: "AvatarExtraText"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: AvatarExtraText
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
