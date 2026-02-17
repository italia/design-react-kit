import { j as jsxRuntimeExports } from "./jsx-runtime-COvKL7u4.js";
import { useMDXComponents } from "./index-DMZ0ur-z.js";
import { M as Meta, C as Canvas, A as ArgTypes } from "./blocks-C66hpFDv.js";
import { C as Callout, a as CalloutText } from "./CalloutText-Dfvy4CBZ.js";
import { C as CalloutTitle } from "./CalloutTitle-C5_6km6k.js";
import { I as Input } from "./Input-BekHOtbc.js";
import "./track-focus-DbJ2CO43.js";
import { I as InputStories, E as EsempiDiCampiDiInput, U as UtilizzoDiPlaceholderELabel, a as InputConIconaOBottoni, b as InputPassword, D as Disabilitato, R as Readonly, c as ReadonlyNormalizzato, _ as _InputAutocompleteConDatiAccessibile, d as InputHourpicker, e as InputDatepicker, A as AreaDiTesto, f as AreaDiTestoConSegnaposto } from "./Input.stories-DuWueehu.js";
import "./iframe-BMr-kR9u.js";
import "./preload-helper-CQrtv1eE.js";
import "./index-CJ9b0Pjr.js";
import "./index-CuPZ171k.js";
import "./index-Bgh91DG-.js";
import "./Icon-CB2E_ttD.js";
import "./utils-CwYUlCuU.js";
import "./FormGroup-CGDGv27S.js";
import "./utils-R1pK7pq0.js";
import "./Autocomplete-iZl7HU7t.js";
import "./Button-B9FEd-mO.js";
import "./Button-Cjou70v-.js";
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
      of: InputStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "input",
      children: "Input"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "elementi-e-stili-per-la-creazione-di-input-accessibili-e-responsivi",
      children: "Elementi e stili per la creazione di input accessibili e responsivi."
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "esempi-di-campi-di-input",
      children: "Esempi di campi di input"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per il corretto funzionamento degli elementi di tipo ", jsxRuntimeExports.jsx(_components.code, {
        children: "<input>"
      }), ", è di fondamentale importanza l’utilizzo uno degli appositi attributi type (ad esempio, ", jsxRuntimeExports.jsx(_components.code, {
        children: "email"
      }), " per l’inserimento di indirizzi email o ", jsxRuntimeExports.jsx(_components.code, {
        children: "number"
      }), " per informazioni numeriche), in modo da sfruttare i controlli di input più recenti come la verifica dell’email, l’utilizzo di metodo di input numerico e altro."]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Per l’inserimento guidato di campi di tipo numerico si può anche utilizzare l’elemento dedicato che fornisce migliorie per la validazione e per l’esperienza complessiva, descritto alla pagina dedicata all’input numerico."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: EsempiDiCampiDiInput
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "utilizzo-di-placeholder-e-label",
      children: "Utilizzo di placeholder e label"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Si può includere un’etichetta che si riposiziona automaticamente quando l’utente utilizza il campo di testo."
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Si può abbinare all’etichetta un placeholder (testo di esempio) per ulteriore chiarezza."
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["In caso di necessità, è anche possibile utilizzare un ulteriore contenuto testuale sotto il campo di testo, aggiungendo il testo nel modificatore ", jsxRuntimeExports.jsx(_components.code, {
        children: "validationText"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx("div", {
      className: "docs",
      children: jsxRuntimeExports.jsxs(Callout, {
        color: "warning",
        children: [jsxRuntimeExports.jsx(CalloutTitle, {
          children: jsxRuntimeExports.jsx("span", {
            className: "text",
            children: "Associazione del testo di aiuto con gli elementi del modulo form"
          })
        }), jsxRuntimeExports.jsx(CalloutText, {
          children: jsxRuntimeExports.jsx(_components.p, {
            children: "Il testo di aiuto deve essere esplicitamente associato agli elementi del mudulo form a cui si riferisce\nutilizzando l’attributo aria-describedby. Ciò garantirà che le tecnologie assistive, come gli screenreader,\nleggano questo testo di aiuto quando l’utente avrà il focus sull’elemento."
          })
        })]
      })
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: UtilizzoDiPlaceholderELabel
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "input-con-icona-o-bottoni",
      children: "Input con icona o bottoni"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: InputConIconaOBottoni
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "input-password",
      children: "Input password"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Per rendere più semplice l’inserimento della password, l’elemento è stato dotato di un visualizzatore dei caratteri digitati."
    }), "\n", jsxRuntimeExports.jsx("div", {
      className: "docs",
      children: jsxRuntimeExports.jsxs(Callout, {
        color: "important",
        children: [jsxRuntimeExports.jsx(CalloutTitle, {
          children: jsxRuntimeExports.jsx("span", {
            className: "text",
            children: "Componente PasswordInput rimosso"
          })
        }), jsxRuntimeExports.jsx(CalloutText, {
          children: jsxRuntimeExports.jsxs(_components.p, {
            children: ["Qualora si fosse usato in precedenza il componente ", jsxRuntimeExports.jsx("code", {
              children: "PasswordInput"
            }), " è possibile migrare all'esempio di\nseguito."]
          })
        })]
      })
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: InputPassword
    }), "\n", jsxRuntimeExports.jsx("div", {
      className: "docs",
      children: jsxRuntimeExports.jsxs(Callout, {
        color: "warning",
        children: [jsxRuntimeExports.jsx(CalloutTitle, {
          children: jsxRuntimeExports.jsx("span", {
            className: "text",
            children: "Nota"
          })
        }), jsxRuntimeExports.jsx(CalloutText, {
          children: jsxRuntimeExports.jsx(_components.p, {
            children: 'Al momento non è ancora disponibili la funzionalità di "password strength" in questo Design React Kit.'
          })
        })]
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "disabilitato",
      children: "Disabilitato"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Aggiungi il modificatore ", jsxRuntimeExports.jsx(_components.code, {
        children: "disabled"
      }), " ad un componente Input per impedire la modifica del valore contenuto e non inviare i dati in esso contenuti."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Disabilitato
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "readonly",
      children: "Readonly"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Aggiungi il modificatore ", jsxRuntimeExports.jsx(_components.code, {
        children: "readOnly"
      }), " ad un input per impedire la modifica del valore contenuto."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Readonly
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "readonly-normalizzato",
      children: "Readonly normalizzato"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Se per qualche motivo vuoi avere i componenti ", jsxRuntimeExports.jsx(_components.code, {
        children: "<Input readOnly/>"
      }), " nella forma stilizzata come testo normale usa il modificatore ", jsxRuntimeExports.jsx(_components.code, {
        children: "normalized"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ReadonlyNormalizzato
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "input-con-risultato-ricerca-o-autocompletamento",
      children: "Input con risultato ricerca o autocompletamento"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "autocompletamento-accessibile-con-dati",
      children: "Autocompletamento Accessibile con dati"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Cerca una regione italiana per verificarne il comportamento."
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Il completamento automatico è un componente che aiuta gli utenti a scegliere le risposte da un elenco fornito."
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per la creazione del componente, è stato utilizzato il plugin ", jsxRuntimeExports.jsx("a", {
        target: "_blank",
        href: "https://github.com/alphagov/accessible-autocomplete",
        children: "Accessible autocomplete"
      }), "."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per una corretta implementazione si consiglia di consultare la ", jsxRuntimeExports.jsx("a", {
        target: "_blank",
        href: "https://alphagov.github.io/accessible-autocomplete/",
        children: "documentazione"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: _InputAutocompleteConDatiAccessibile
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const suggest = (query: string, syncResults: (p: string[]) => void)  => {\n  const results = [\n    'Abruzzo',\n    'Basilicata',\n    'Calabria',\n    'Campania',\n    'Emilia Romagna',\n    'Friuli Venezia Giulia',\n    'Lazio',\n    'Liguria',\n    'Lombardia',\n    'Marche',\n    'Molise',\n    'Piemonte',\n    'Puglia',\n    'Sardegna',\n    'Sicilia',\n    'Toscana',\n    'Trentino Alto Adige',\n    'Umbria',\n    'Valle d\\'Aosta',\n    'Veneto'\n  ];\n  syncResults(query\n    ? results.filter(function (result) {\n        return result.toLowerCase().indexOf(query.toLowerCase()) !== -1\n      })\n    : []\n  )\n}\n\nreturn (\n  <FormGroup className='form-group'>\n    <Autocomplete\n      id='autocomplete'\n      label='Regione'\n      source={suggest}\n      tNoResults={() => 'Nessun risultato'}\n    />\n  </FormGroup>\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "input-ora",
      children: "Input Ora"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "campo-per-la-selezione-di-un-orario",
      children: "Campo per la selezione di un orario."
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Il componente input time, o timepicker, è un componente dedicato alla selezione di un orario."
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Clicca sull’icona a destra per visualizzare il timepicker."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: InputHourpicker
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice-1",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [value, setValue] = useState('');\n\nreturn (\n  <Input\n    type='time'\n    label='Hourpicker'\n    className='active'\n    value={value}\n    onChange={(ev) => {\n      setValue(ev.target.value);\n    }}\n  />\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "input-calendario",
      children: "Input Calendario"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "datepicker",
      children: "Datepicker"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Campo di tipo calendario per la selezione di giorni dell’anno."
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Clicca sull’icona a destra per visualizzare il datepicker."
    }), "\n", jsxRuntimeExports.jsx("div", {
      className: "docs",
      children: jsxRuntimeExports.jsx(Callout, {
        highlight: true,
        children: jsxRuntimeExports.jsx(CalloutText, {
          children: jsxRuntimeExports.jsx("span", {
            className: "text",
            children: jsxRuntimeExports.jsx(_components.p, {
              children: "Assicurarsi di aggiungere alla label la classe active per impedire la sovrapposizione della label al campo."
            })
          })
        })
      })
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: InputDatepicker
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice-2",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [value, setValue] = useState('');\n\nreturn (\n  <Input\n    type='date'\n    label='Datepicker'\n    className='active'\n    placeholder='22/12/2023'\n    value={value}\n    onChange={(ev) => {\n      setValue(ev.target.value);\n    }}\n  />\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "area-di-testo",
      children: "Area di testo"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per permettere agli utenti di inserire del testo (ad esempio per lasciare commenti o informazioni), è bene utilizzare un elemento di tipo ", jsxRuntimeExports.jsx(_components.code, {
        children: "<textarea>"
      }), " ridimensionabile."]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Includendo l’elemento all’interno di un .form-group, la label assumerà lo stesso comportamento dinamico dei campi di input."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: AreaDiTesto
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "con-placeholder",
      children: "Con placeholder"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: AreaDiTestoConSegnaposto
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "argomenti-componente",
      children: "Argomenti componente"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "input-1",
      children: "Input"
    }), "\n", jsxRuntimeExports.jsx(ArgTypes, {
      of: Input
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
