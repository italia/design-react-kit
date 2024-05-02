import { j as jsxRuntimeExports } from "./jsx-runtime-BK4VhY1o.js";
import { useMDXComponents } from "./index-D9eV9cM1.js";
import { M as Meta, d as Canvas, A as ArgTypes } from "./index-B6OeFasa.js";
import { I as InputStories, E as EsempiDiCampiDiInput, U as UtilizzoDiPlaceholderELabel, a as InputConIconaOBottoni, b as InputPassword, D as Disabilitato, R as Readonly, c as ReadonlyNormalizzato, _ as _InputAutocompleteConDatiAccessibile, d as InputHourpicker, e as InputDatepicker, A as AreaDiTesto, f as AreaDiTestoConSegnaposto } from "./Input.stories-BsJHHrcl.js";
import { C as Callout, a as CalloutText } from "./CalloutText-Dnjo-EIS.js";
import { C as CalloutTitle } from "./CalloutTitle-Cuyx78Ax.js";
import { I as Input } from "./Input-DZeimXQj.js";
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
import "./FormGroup-CLeJ8HCL.js";
import "./index-Cas18JYw.js";
import "./index-CpyNLP69.js";
import "./utils-l7qJ8bIE.js";
import "./Icon-io8Ds3f9.js";
import "./index-CTmVYaih.js";
import "./utils-DNvasP3d.js";
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
            children: "Il testo di aiuto deve essere esplicitamente associato agli elementi del mudulo form a cui si riferisce\r\nutilizzando l’attributo aria-describedby. Ciò garantirà che le tecnologie assistive, come gli screenreader,\r\nleggano questo testo di aiuto quando l’utente avrà il focus sull’elemento."
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
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "codice",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [isFocused1, toggleFocus1] = useState(false);\r\nconst [isFocused2, toggleFocus2] = useState(false);\r\nconst [isFocused3, toggleFocus3] = useState(false);\r\n\r\nconst toggleFocusLabel1 = () => toggleFocus1(true);\r\n// @ts-ignore: ignore types for now\r\nconst toggleBlurLabel1 = (e) => {\r\n  if (e.target.value === '') {\r\n    toggleFocus1(!isFocused1);\r\n  }\r\n};\r\nconst toggleFocusLabel2 = () => toggleFocus2(true);\r\n// @ts-ignore: ignore types for now\r\nconst toggleBlurLabel2 = (e) => {\r\n  if (e.target.value === '') {\r\n    toggleFocus2(!isFocused2);\r\n  }\r\n};\r\nconst toggleFocusLabel3 = () => toggleFocus3(true);\r\n// @ts-ignore: ignore types for no}w\r\nconst toggleBlurLabel3 = (e) => {\r\n  if (e.target.value === '') {\r\n    toggleFocus3(!isFocused3);\r\n  }\r\n};\r\nreturn (\r\n  <div>\r\n    <div className='form-group'>\r\n      <div className='input-group'>\r\n        <span className='input-group-text'>\r\n          <Icon icon='it-pencil' aria-hidden size='sm' />\r\n        </span>\r\n        <label htmlFor='input-group-1' className={isFocused1 ? 'active' : ''}>\r\n          Con Etichetta\r\n        </label>\r\n        <input\r\n          type='text'\r\n          className={isFocused1 ? 'form-control focus--mouse' : 'form-control'}\r\n          onFocus={toggleFocusLabel1}\r\n          onBlur={toggleBlurLabel1}\r\n          id='input-group-1'\r\n          name='input-group-1'\r\n        />\r\n      </div>\r\n    </div>\r\n    <div className='form-group'>\r\n      <div className='input-group'>\r\n        <span className='input-group-text'>\r\n          <Icon icon='it-pencil' color='danger' aria-hidden size='sm' />\r\n        </span>\r\n        <label htmlFor='input-group-2' className='active'>\r\n          Con Etichetta e placeholder\r\n        </label>\r\n        <input\r\n          type='text'\r\n          className={isFocused2 ? 'form-control focus--mouse' : 'form-control'}\r\n          onFocus={toggleFocusLabel2}\r\n          onBlur={toggleBlurLabel2}\r\n          id='input-group-2'\r\n          name='input-group-2'\r\n          placeholder='Lorem Ipsum'\r\n        />\r\n      </div>\r\n    </div>\r\n    <div className='form-group'>\r\n      <div className='input-group'>\r\n        <span className='input-group-text'>\r\n          <Icon icon='it-pencil' color='primary' aria-hidden size='sm' />\r\n        </span>\r\n        <label htmlFor='input-group-3' className={isFocused3 ? 'active' : ''}>\r\n          Con Etichetta e bottone di tipo primary\r\n        </label>\r\n        <input\r\n          type='text'\r\n          className={isFocused3 ? 'form-control focus--mouse' : 'form-control'}\r\n          onFocus={toggleFocusLabel3}\r\n          onBlur={toggleBlurLabel3}\r\n          id='input-group-3'\r\n          name='input-group-3'\r\n        />\r\n        <div className='input-group-append'>\r\n          <button className='btn btn-primary' type='button' id='button-3'>\r\n            Invio\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n);\n"
      })
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
            }), " è possibile migrare all'esempio di\r\nseguito."]
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
      id: "codice-1",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const suggest = (query: any, populateResults: any) => {\r\n  const filteredResults = multiOptions.filter((i) => i.label.toLowerCase().includes(query.toLowerCase()));\r\n  let data = filteredResults.map((item) => {\r\n    return item.label;\r\n  });\r\n  populateResults(data);\r\n};\r\n\r\nreturn (\r\n  <FormGroup className='select-wrapper'>\r\n    <label htmlFor='autocomplete'>Provincia</label>\r\n    <Autocomplete\r\n      id='autocomplete'\r\n      source={suggest}\r\n      placeholder={'Testo da cercare'}\r\n      defaultValue={''}\r\n      displayMenu={'inline'}\r\n      tNoResults={() => 'Nessun risultato'}\r\n    />\r\n  </FormGroup>\r\n);\n"
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
      id: "codice-2",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [value, setValue] = useState('');\r\n\r\nreturn (\r\n  <Input\r\n    type='time'\r\n    label='Hourpicker'\r\n    className='active'\r\n    value={value}\r\n    onChange={(ev) => {\r\n      setValue(ev.target.value);\r\n    }}\r\n  />\r\n);\n"
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
      id: "codice-3",
      children: "Codice"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [value, setValue] = useState('');\r\n\r\nreturn (\r\n  <Input\r\n    type='date'\r\n    label='Datepicker'\r\n    className='active'\r\n    placeholder='22/12/2023'\r\n    value={value}\r\n    onChange={(ev) => {\r\n      setValue(ev.target.value);\r\n    }}\r\n  />\r\n);\n"
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
