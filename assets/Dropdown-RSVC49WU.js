import { j as jsxRuntimeExports } from "./jsx-runtime-BK4VhY1o.js";
import { useMDXComponents } from "./index-D9eV9cM1.js";
import { M as Meta, C as Code, d as Canvas, A as ArgTypes } from "./index-kBCZqCW6.js";
import { D as DropdownStories, _ as _Esempi, a as _VarianteBottoni, b as _Link } from "./Dropdown.stories-CZlTJKLa.js";
import { _MenuVociAttive, _MenuVociDisabilitate, MenuHeadersESeparatori, MenuConVociLarge, MenuFullWidth, MenuIconaADestra, MenuIconaASinistra, _MenuDark } from "./DropdownMenu.stories-DdSxnrBY.js";
import { C as Callout, a as CalloutText } from "./CalloutText-Dnjo-EIS.js";
import { C as CalloutTitle } from "./CalloutTitle-Cuyx78Ax.js";
import { D as Dropdown, a as DropdownToggle } from "./DropdownToggle-D9gE_sRW.js";
import { D as DropdownMenu } from "./DropdownMenu-D4O4lxvn.js";
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
import "./index-Cas18JYw.js";
import "./index-CpyNLP69.js";
import "./utils-l7qJ8bIE.js";
import "./LinkListItem-Bip2UIsY.js";
import "./Icon-CYxksTIN.js";
import "./popper-DTKBVcSS.js";
import "./Button-CDo48zCf.js";
import "./Button-DfNj8dlY.js";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    p: "p",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: DropdownStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "dropdown",
      children: "Dropdown"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "attiva-o-disattiva-overlay-contestuali-per-visualizzare-elenchi-di-link-e-altro-ancora-con-questi-menù-a-tendina",
      children: "Attiva o disattiva overlay contestuali per visualizzare elenchi di link e altro ancora con questi menù a tendina."
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["I dropdown possono essere attivati da elementi ", jsxRuntimeExports.jsx(_components.code, {
        children: "<a/>"
      }), " o ", jsxRuntimeExports.jsx(_components.code, {
        children: "<button/>"
      }), " per soddisfare al meglio le tue esigenze."]
    }), "\n", jsxRuntimeExports.jsx("div", {
      className: "docs",
      children: jsxRuntimeExports.jsxs(Callout, {
        color: "success",
        children: [jsxRuntimeExports.jsx(CalloutTitle, {
          children: jsxRuntimeExports.jsx("span", {
            className: "text",
            children: "Accessibilità"
          })
        }), jsxRuntimeExports.jsxs(CalloutText, {
          children: [jsxRuntimeExports.jsx(_components.p, {
            children: "Lo standard"
          }), jsxRuntimeExports.jsx("a", {
            href: "https://www.w3.org/TR/wai-aria/",
            target: "_blank noreferrer",
            children: jsxRuntimeExports.jsx(_components.p, {
              children: "WAI ARIA"
            })
          }), jsxRuntimeExports.jsxs(_components.p, {
            children: ["definisce un widget ", jsxRuntimeExports.jsx(Code, {
              children: 'role="menu"'
            }), ", che però è specifico per i menu applicativi che attivano azioni o\r\nfunzioni. I menu ARIA possono contenere solo voci di menu, voci di menu di caselle di controllo, voci di menu dei\r\npulsanti di opzione, gruppi di pulsanti di opzione e sottomenu."]
          })]
        }), jsxRuntimeExports.jsx(CalloutText, {
          children: jsxRuntimeExports.jsx(_components.p, {
            children: "I dropdown di Bootstrap, al contrario, sono progettati per essere generici e applicabili a una varietà di\r\nsituazioni e strutture di markup. Ad esempio, è possibile creare elenchi a discesa contenenti input e controlli di\r\nmoduli aggiuntivi, ad esempio campi di ricerca o moduli di accesso. Per questo motivo, Bootstrap non si aspetta\r\n(né aggiunge automaticamente) alcuno degli attributi di aria e di ruolo richiesti per i veri menu ARIA. Gli autori\r\ndovranno includere questi attributi più specifici."
          })
        }), jsxRuntimeExports.jsx(CalloutText, {
          children: jsxRuntimeExports.jsxs(_components.p, {
            children: ["Tuttavia, Bootstrap aggiunge il supporto integrato per la maggior parte delle interazioni standard del menu della\r\ntastiera, come la possibilità di spostarsi tra i singoli elementi ", jsxRuntimeExports.jsx(Code, {
              children: "LinkListItem"
            }), " usando i tasti cursore\r\ne chiude il menu con il tasto ESC."]
          })
        })]
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "dropdown-button",
      children: "Dropdown button"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Il componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "DropdownToggle"
      }), " utilizza il componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Button"
      }), " internamente, quindi accetta i medesimi attributi. I link o le voci all’interno del dropdown devono essere contenute in un elemento ", jsxRuntimeExports.jsx(_components.code, {
        children: "LinkList"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: _Esempi
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "dropdown-button-varianti",
      children: "Dropdown button varianti"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Ovviamente, funzionano anche ", jsxRuntimeExports.jsx(_components.a, {
        href: "?path=/docs/documentazione-componenti-bottoni--page#varianti-di-colore",
        children: "tutte le varianti"
      }), " già disponibili per i bottoni."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: _VarianteBottoni
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "dropdown-link",
      children: "Dropdown link"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Si può utilizzare ", jsxRuntimeExports.jsx(_components.code, {
        children: "DropdownToggle"
      }), " anche con un anchor link:"]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: _Link
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "dropdown-menu",
      children: "Dropdown menu"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Le voci del menu che viene aperto al click sul bottone possono essere personalizzate, così come il menù stesso."
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "menu-voci-attive",
      children: "Menu voci attive"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Aggiungere l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "active"
      }), " ai ", jsxRuntimeExports.jsx(_components.code, {
        children: "LinkListItem"
      }), " del dropdown che si vogliono mostrare come attivi. Per questioni di accessibilità è consigliabile aggiungere ", jsxRuntimeExports.jsx(_components.code, {
        children: '<span class="visually-hidden"> attivo</span>'
      }), " in coda al testo degli elementi attivi."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: _MenuVociAttive
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "menu-voci-disabilitate",
      children: "Menu voci disabilitate"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Aggiungere l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "disabled"
      }), " ai ", jsxRuntimeExports.jsx(_components.code, {
        children: "LinkListItem"
      }), " del dropdown che si vogliono mostrare come disabilitati. Includere anche la proprietà ", jsxRuntimeExports.jsx(_components.code, {
        children: 'aria-disabled="true"'
      }), " per comunicare lo stato disabilitato agli utenti dotati di screen reader."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: _MenuVociDisabilitate
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "menu-headers-e-separatori",
      children: "Menu headers e separatori"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "All’interno del menu dropdown possono essere inseriti header e separatori."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: MenuHeadersESeparatori
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "menu-con-voci-large",
      children: "Menu con voci large"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per aumentare la dimensione dei link contenuti nel dropdown è sufficiente aggiungere agli stessi l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "size='large'"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: MenuConVociLarge
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "menu-full-width",
      children: "Menu full width"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per ottenere un dropdown menu largo quanto l’elemento che contiene il dropdown button è sufficiente aggiungere la classe", jsxRuntimeExports.jsx(_components.code, {
        children: ".full-width"
      }), " al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "DropdownMenu"
      }), ". I link e testi contenuti al suo interno saranno disposti in orizzontale."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: MenuFullWidth
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "menu-icona-a-destra",
      children: "Menu icona a destra"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Ai ", jsxRuntimeExports.jsx(_components.code, {
        children: "LinkListItem"
      }), " contenuti nel menù può essere aggiunta un’icona illustrativa allineata a destra utilizzando le classi ", jsxRuntimeExports.jsx(_components.code, {
        children: ".right-icon"
      }), " sul componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "LinkListItem"
      }), " e ", jsxRuntimeExports.jsx(_components.code, {
        children: ".right"
      }), " sul componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Icon"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: MenuIconaADestra
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "menu-icona-a-sinistra",
      children: "Menu icona a sinistra"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Ai ", jsxRuntimeExports.jsx(_components.code, {
        children: "LinkListItem"
      }), " contenuti nel menù può essere aggiunta un’icona illustrativa allineata a sinistra utilizzando le classi ", jsxRuntimeExports.jsx(_components.code, {
        children: ".left-icon"
      }), " sul componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "LinkListItem"
      }), " e ", jsxRuntimeExports.jsx(_components.code, {
        children: ".left"
      }), " sul componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "Icon"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: MenuIconaASinistra
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "menu-dark",
      children: "Menu dark"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Aggiungendo la classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".dark"
      }), " al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "DropdownMenu"
      }), " si ottiene una versione in negativo del menu, con link ed elementi interni declinati di conseguenza."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: _MenuDark
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "informazioni-aggiuntive",
      children: "Informazioni aggiuntive"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per consultare altri esempi, vedere l’utilizzo di una dropdown con interi form al suo interno, capire meglio come utilizzare attributi di Bootstrap 5.3, si rimanda alla documentazione sul sito di ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://reactstrap.github.io/?path=/docs/components-dropdown--dropdown",
        rel: "nofollow",
        children: "reactstrap (v9)"
      }), " e ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://getbootstrap.com/docs/5.3/components/dropdowns/",
        rel: "nofollow",
        children: "Bootstrap"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "argomenti-componente",
      children: "Argomenti componente"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "dropdown-1",
      children: "Dropdown"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: Dropdown
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "dropdowntoggle",
      children: "DropdownToggle"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: DropdownToggle
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "dropdownmenu",
      children: "DropdownMenu"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: DropdownMenu
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
