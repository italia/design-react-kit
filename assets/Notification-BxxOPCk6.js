import { j as jsxRuntimeExports } from "./jsx-runtime-BK4VhY1o.js";
import { useMDXComponents } from "./index-D9eV9cM1.js";
import { M as Meta, d as Canvas, A as ArgTypes, C as Code } from "./index-Cr0aQxsR.js";
import { N as NotificationStories, E as EsempioMinimo, a as EsempioMinimoComponente, b as NotificationManager, c as NotificationOptionsComponent_Fake, _ as _Example, d as _NotificationWithMessageStatic, D as Dismissable, S as States, e as _RoundingOfCorners, f as DefaultLocation, F as FixedPositions } from "./Notification.stories-DGrZSTmc.js";
import { C as Callout, a as CalloutText } from "./CalloutText-Dnjo-EIS.js";
import { C as CalloutTitle } from "./CalloutTitle-Cuyx78Ax.js";
import "./index-CQCy530F.js";
import "./_commonjsHelpers-LQfde5yM.js";
import "./iframe-8XlFCvOj.js";
import "../sb-preview/runtime.js";
import "./index-DTvnAYOg.js";
import "./index-Hv2vTVdx.js";
import "./index-CTx2sqk_.js";
import "./inheritsLoose-HEqISCW8.js";
import "./index-MBEdkwGi.js";
import "./index-BdOSk9or.js";
import "./Button-CDo48zCf.js";
import "./index-CpyNLP69.js";
import "./Button-DfNj8dlY.js";
import "./index-Cas18JYw.js";
import "./utils-l7qJ8bIE.js";
import "./Icon-Dropx6Zw.js";
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: NotificationStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "notifiche",
      children: "Notifiche"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "utilizzo",
      children: "Utilizzo"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per utilizzare le notifiche all'interno della propria applicazione sono necessari due elementi del kit React: ", jsxRuntimeExports.jsx(_components.code, {
        children: "NotificationManager"
      }), " e la funzione ", jsxRuntimeExports.jsx(_components.code, {
        children: "notify"
      }), "."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.code, {
        children: "NotificationManager"
      }), ` è il "contenitore" delle notifiche generate e gestisce l'intero ciclo di vita di ciascuna notifica. È necessario almeno un `, jsxRuntimeExports.jsx(_components.code, {
        children: "NotificationManager"
      }), " per poter mostrare le notifiche all'interno della vostra applicazione."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per lanciare una notifica invece necessario invocare la funzione ", jsxRuntimeExports.jsx(_components.code, {
        children: "notify"
      }), " che accetta due argomenti obbligatori: titolo e messaggio."]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "L'implementazione più minimale è la seguente:"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EsempioMinimo
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Il messaggio può essere anche un componente React, come nel seguente esempio:"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EsempioMinimoComponente
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["La durata di default di una notifica è 6 secondi (", jsxRuntimeExports.jsx(_components.code, {
        children: "6000 ms"
      }), "), ma questa può essere cambiata tramite il parametro ", jsxRuntimeExports.jsx(_components.code, {
        children: "duration"
      }), ". Per rimuovere la chiusura automatica della notifica impostare il valore ", jsxRuntimeExports.jsx(_components.code, {
        children: "duration=0"
      }), ": in questo modo la notifica potrà essere chiusa solamente da un'azione dell'utente o da una chiamata programmatica di ", jsxRuntimeExports.jsx(_components.code, {
        children: "notify.dismiss()"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "notificationmanager",
      children: "NotificationManager"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["È necessario almeno un ", jsxRuntimeExports.jsx(_components.code, {
        children: "NotificationManager"
      }), " per mostrare le notifiche: nella maggior parte dei casi avere un unico manager è sufficiente.\r\nQualora fosse necessario avere più ", jsxRuntimeExports.jsx(_components.code, {
        children: "NotificationManager"
      }), ", ad esempio nel caso in cui si carichino più app ciascuna con il suo manager, sarà necessario specificare il parametro ", jsxRuntimeExports.jsx(_components.code, {
        children: "containerId"
      }), " nel componente ", jsxRuntimeExports.jsx(_components.code, {
        children: "NotificationManager"
      }), ", oltre che passare lo stesso parametro nelle opzioni della funzione ", jsxRuntimeExports.jsx(_components.code, {
        children: "notify"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: NotificationManager
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "notify",
      children: "notify"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["La funzione ", jsxRuntimeExports.jsx(_components.code, {
        children: "notify"
      }), " ha la seguente firma:"]
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        children: "notify(title, message?, options?);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "notificationoptions",
      children: "NotificationOptions"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Il dettaglio del tipo ", jsxRuntimeExports.jsx(_components.code, {
        children: "NotificationOptions"
      }), " è riportato di seguito:"]
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: NotificationOptionsComponent_Fake
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "stile-notifiche",
      children: "Stile notifiche"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "per-attirare-lattenzione-su-brevi-messaggi-di-stato",
      children: "Per attirare l’attenzione su brevi messaggi di stato"
    }), "\n", jsxRuntimeExports.jsx("div", {
      className: "docs",
      children: jsxRuntimeExports.jsxs(Callout, {
        color: "warning",
        children: [jsxRuntimeExports.jsx(CalloutTitle, {
          children: jsxRuntimeExports.jsx("span", {
            className: "text",
            children: "Componente statico per la documentazione"
          })
        }), jsxRuntimeExports.jsx(CalloutText, {
          children: jsxRuntimeExports.jsxs(_components.p, {
            children: ["Di seguito verrà utilizzato un componente ", jsxRuntimeExports.jsx(Code, {
              children: "NotificationDoc"
            }), ", di tipo statico, creato appositamente per\r\nlo scopo di questa documentazione e ", jsxRuntimeExports.jsx("strong", {
              children: "che non deve essere utilizzato"
            }), " nel codice ai fini di\r\nproduzione."]
          })
        })]
      })
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "La notifica viene utilizzata per portare l’attenzione dell’utente su un messaggio o un cambiamento di stato. Es: la ricezione di una nuova email."
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Lo stato naturale dell’elemento è invisibile. Gli esempi di questa pagina sono stati resi statici per facilitare un confronto fra le varie tipologie di design."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: _Example
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "notification-con-messaggio",
      children: "Notification con messaggio"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Si può aggiungere un breve testo al di sotto del titolo, questo verrà inserito in un tag ", jsxRuntimeExports.jsx(_components.code, {
        children: "<p/>"
      }), ".\r\nÈ possibile anche passare contenuti JSX come messaggio qualora necessario."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: _NotificationWithMessageStatic
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "dismissable",
      children: "Dismissable"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Le Notification Dismissable non vengono nascoste dopo un intervallo di tempo ma vengono chiuse solo quando si clicca sul rispettivo bottone di chiusura."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Dismissable
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "stati",
      children: "Stati"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Alle Notification possono essere stilizzate in modo da determinare lo stato modificando il colore delle icone e del bordo, mediante l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "state"
      }), ":"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: '"success"'
        }), " - per messaggi di procedure andate a buon fine"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: '"error"'
        }), " - per messaggi di errore"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: '"info"'
        }), " - per info generiche"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: '"warning"'
        }), " - per messaggi di precauzione"]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: States
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "posizione-e-arrotondamento-degli-angoli",
      children: "Posizione e arrotondamento degli angoli"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "La posizione predefinita della Notification è nella parte destra inferiore della finestra."
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Utilizzando l'attributo ", jsxRuntimeExports.jsx(_components.code, {
        children: "fix"
      }), " con i valori elencati di seguito la Notification verrà posizionata a filo di uno dei margini indicati, modificando l’arrotondamento degli angoli di conseguenza."]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.em, {
        children: "N.B. queste classi non influenzano il posizionamento su device mobile, in questo caso la Notification è sempre a piede della finestra e ne occupa tutta la larghezza"
      })
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: _RoundingOfCorners
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "posizione-predefinita",
      children: "Posizione predefinita"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Posizionamento predefinito della Notification."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: DefaultLocation
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "posizione-fissa",
      children: "Posizione fissa"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Esempi delle quattro posizioni fisse possibili."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: FixedPositions
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
