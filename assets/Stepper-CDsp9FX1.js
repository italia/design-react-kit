import { j as jsxRuntimeExports } from "./jsx-runtime-BKjOVojP.js";
import { useMDXComponents } from "./index-BDy3TOcs.js";
import { ae as Meta, af as Canvas } from "./index-TPQrYqDM.js";
import { C as Callout, a as CalloutText } from "./CalloutText-DuQn_Rtc.js";
import { C as CalloutTitle } from "./CalloutTitle-D5ep80ue.js";
import "./track-focus-DbJ2CO43.js";
import { ProgressBarDark, PalliniDark, SaveButtonDark, ConfirmButtonDark } from "./Stepper.NavigationDark.stories-DfkzzHX1.js";
import { ProgressBar, Pallini, SaveButton, ConfirmButton } from "./Stepper.Navigation.stories-DZ4Q6e9b.js";
import { S as StepperStories, T as TextOnly, a as TextAndIcons, O as OrderOfTheSteps, N as NavigationOfTheSteps, V as VersionOnADarkBackground, H as HeaderVariants } from "./Stepper.stories-_bZgmgDP.js";
import "./index-BehpJNG5.js";
import "./_commonjsHelpers-DWwsNxpa.js";
import "./iframe-DTIT4K-Y.js";
import "../sb-preview/runtime.js";
import "./index-D7280_ap.js";
import "./index-DmVNLg0t.js";
import "./index-DJdTjTnu.js";
import "./index-dukjSSyv.js";
import "./index-BdOSk9or.js";
import "./index-D3ELxcOV.js";
import "./Button-BVZxHsm7.js";
import "./Button-Bz_c481c.js";
import "./utils-CruPskUV.js";
import "./Icon-8QGY3vQl.js";
import "./Progress-CV0oZVXg.js";
import "./index-DH28g3wf.js";
import "./utils-CwYUlCuU.js";
import "./StepperNav-B1-znkkM.js";
import "./StepperDots-CAnCzpbE.js";
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: StepperStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "steppers",
      children: "Steppers"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "gli-stepper-mostrano-lavanzamento-del-progresso-di-una-procedura-a-più-passi-attraverso-la-numerazione-dei-passi-stessi",
      children: `Gli "Stepper" mostrano l'avanzamento del progresso di una procedura a più passi attraverso la numerazione dei passi stessi.`
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "intestazione",
      children: "Intestazione"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Il contenitore degli Stepper è sempre un componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "StepperContainer"
      }), ". La sua intestazione è contenuta in una lista\r\n", jsxRuntimeExports.jsx(_components.code, {
        children: "StepperHeader"
      }), ", all'interno della quali i singoli passi (o ", jsxRuntimeExports.jsx(_components.em, {
        children: "step"
      }), ") sono rappresentati da componenti\r\n", jsxRuntimeExports.jsx(_components.code, {
        children: "StepperHeaderElement"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx("div", {
      className: "docs",
      children: jsxRuntimeExports.jsxs(Callout, {
        color: "danger",
        children: [jsxRuntimeExports.jsx(CalloutTitle, {
          children: jsxRuntimeExports.jsx("span", {
            className: "text",
            children: "Mobile"
          })
        }), jsxRuntimeExports.jsx(CalloutText, {
          children: jsxRuntimeExports.jsx(_components.p, {
            children: "L’aspetto della modalità mobile degli Steppers è differente rispetto a quello desktop. Se si sta consultando\r\nquesta documentazione su un PC desktop, per visualizzare correttamente gli esempi seguenti in formato mobile sarà\r\nnecessario ridimensionare la finestra del browser al di sotto dei 992 pixel."
          })
        })]
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "varianti-intestazione",
      children: "Varianti intestazione"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "solo-testo",
      children: "Solo testo"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "I passi visibili nell'intestazione presentano tre varianti:"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: "confirmed"
        }), " per individuare uno step già confermato. È bene corredare tali step con un’icona che ne identifichi il\r\ncompletamento (vedi di seguito)."]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: "active"
        }), " per individuare lo step attualmente attivo; su dispositivi mobili è l’unico visualizzato."]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: "mobile"
        }), " per individuare un indice, visibile solo su mobile, che può contenere lo stato attuale di progresso\r\nindicato in forma testuale"]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "È necessario ridurre la finestra del browser per apprezzare il comportamente degli Stepper su dispositivi di dimensioni\r\nridotte."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: TextOnly
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "testo-e-icone",
      children: "Testo e icone"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Le label presenti negli step dell'intestazione possono essere anticipate da un'icona."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: TextAndIcons
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "ordine-degli-step",
      children: "Ordine degli step"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Le label presenti negli steps dell’header possono essere anticipate dal numero ordinale relativo allo stesso. Come\r\nmostrato nell’esempio, nel caso di uno step completato al posto del numero va inclusa un’icona di conferma con un testo\r\nriservato agli screen reader."
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["È necessario aggiungere la prop ", jsxRuntimeExports.jsx(_components.code, {
        children: "noLine"
      }), " allo ", jsxRuntimeExports.jsx(_components.code, {
        children: "<StepperHeaderElement>"
      }), " attivo per nascondere il bordo inferiore azzurro,\r\nin questo caso ridondante."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: OrderOfTheSteps
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "navigazione-degli-step",
      children: "Navigazione degli step"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["I pulsanti “Avanti” e “Indietro” dovranno essere utilizzati per implementare la logica di navigazione degli Steppers\r\nnelle web app e sono dotati di classi ", jsxRuntimeExports.jsx(_components.code, {
        children: ".steppers-btn-prev"
      }), " e ", jsxRuntimeExports.jsx(_components.code, {
        children: ".steppers-btn-next"
      }), "."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Il passaggio da uno step all’altro attraverso i pulsanti contenuti in ", jsxRuntimeExports.jsx(_components.code, {
        children: "StepperNav"
      }), " determina un cambiamento del\r\ncontenuto presente in ", jsxRuntimeExports.jsx(_components.code, {
        children: "StepperContent"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: NavigationOfTheSteps
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "varianti-navigazione-per-mobile",
      children: "Varianti navigazione per mobile"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["La versione mobile degli Steppers non visualizza l’elenco completo degli step disponibili, ma solo quello corrente. Per\r\nquesta ragione è possibile aggiungere degli indicatori di progresso allo ", jsxRuntimeExports.jsx(_components.code, {
        children: "StepperNav"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Questi indicatori saranno visualizzati solo su mobile, ma nei seguenti esempi sono stati resi disponibili anche nella\r\nvisualizzazione desktop. Si raccomanda comunque la visualizzazione in un viewport ridotto per ottenere un esempio\r\nrealistico dell’aspetto finale."
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "progress-bar",
      children: "Progress bar"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["La ", jsxRuntimeExports.jsx(_components.code, {
        children: "Progress"
      }), " è quella nativa di Bootstrap 5 ed è contenuta in un ", jsxRuntimeExports.jsx(_components.code, {
        children: "<div>"
      }), " con classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".steppers-progress"
      }), " situato fra i\r\npulsanti “Indietro” e “Avanti”."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ProgressBar
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "pallini",
      children: "Pallini"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["I pallini sono elementi ", jsxRuntimeExports.jsx(_components.code, {
        children: "<li>"
      }), " contenuti in un componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "StepperDots"
      }), " situato fra i pulsanti “Indietro” e “Avanti”."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per ragioni di accessibilità, i ", jsxRuntimeExports.jsx(_components.code, {
        children: "<li>"
      }), " devono contenere uno ", jsxRuntimeExports.jsx(_components.code, {
        children: "<span>"
      }), " con classe ", jsxRuntimeExports.jsx(_components.code, {
        children: ".visually-hidden"
      }), " riservato agli screen\r\nreader con un testo indicante il numero di step e lo stato."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Pallini
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "pulsante-salva",
      children: "Pulsante salva"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Su dispositivi mobili è possibile inserire un terzo pulsante “Salva” di aspetto differente con classe\r\n", jsxRuntimeExports.jsx(_components.code, {
        children: ".steppers-btn-save"
      }), " fra i pulsanti “Indietro” e “Avanti”."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: SaveButton
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "pulsante-conferma",
      children: "Pulsante conferma"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Su dispositivi mobili è possibile sostituire il pulsante “Avanti” con un pulsante “Conferma” di stile differente, con la\r\nclasse ", jsxRuntimeExports.jsx(_components.code, {
        children: ".steppers-btn-confirm"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ConfirmButton
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "versione-su-sfondo-scuro",
      children: "Versione su sfondo scuro"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per ottenere una versione scura degli Stepper è sufficiente passare la prop ", jsxRuntimeExports.jsx(_components.code, {
        children: "dark"
      }), " al componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "StepperContainer"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: VersionOnADarkBackground
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "varianti-intestazione-1",
      children: "Varianti intestazione"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: HeaderVariants
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "varianti-navigazione-per-mobile---dark",
      children: "Varianti navigazione per mobile - dark"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Si raccomanda la visualizzazione in un viewport ridotto per ottenere un esempio realistico dell’aspetto finale."
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "progress-bar-1",
      children: "Progress bar"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ProgressBarDark
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "pallini-1",
      children: "Pallini"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: PalliniDark
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "pulsante-salva-1",
      children: "Pulsante salva"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: SaveButtonDark
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "pulsante-conferma-1",
      children: "Pulsante conferma"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ConfirmButtonDark
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
