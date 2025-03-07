import { j as jsxRuntimeExports } from "./jsx-runtime-BKjOVojP.js";
import { useMDXComponents } from "./index-BDy3TOcs.js";
import { ae as Meta, af as Canvas, v as vu } from "./index-BP7wnZHW.js";
import { C as Callout, a as CalloutText } from "./CalloutText-DuQn_Rtc.js";
import { C as CalloutTitle } from "./CalloutTitle-D5ep80ue.js";
import "./track-focus-DbJ2CO43.js";
import { ValidazioneCompleta } from "./FormValidation.stories-aGbvBnJm.js";
import { D as Disabilitato } from "./Input.stories-CGzRl6w4.js";
import { DimensionamentoColonneBase, DimensionamentoColonneComplesso, AutoDimensionamento, FormDisabilitato } from "./Introduzione.stories-B3NLhKBo.js";
import "./index-BehpJNG5.js";
import "./_commonjsHelpers-DWwsNxpa.js";
import "./iframe-Bk-Jkb3q.js";
import "../sb-preview/runtime.js";
import "./index-D7280_ap.js";
import "./index-DmVNLg0t.js";
import "./index-DJdTjTnu.js";
import "./index-dukjSSyv.js";
import "./index-BdOSk9or.js";
import "./index-D3ELxcOV.js";
import "./Col-DlU8lCnt.js";
import "./utils-CruPskUV.js";
import "./Form-IWuVEK-s.js";
import "./FormGroup-BKi20UUN.js";
import "./FormText-8bjBekMJ.js";
import "./Label-BiPf8UIS.js";
import "./Alert-DJEUAWBD.js";
import "./Fade-BZ6Dtg_A.js";
import "./Transition-D0u52PR9.js";
import "./Button-BVZxHsm7.js";
import "./Button-Bz_c481c.js";
import "./Input-D1IBd2i9.js";
import "./index-DH28g3wf.js";
import "./Icon-DyWUmh-K.js";
import "./utils-CwYUlCuU.js";
import "./Select-DYLUvc-D.js";
import "./Toggle-DOQnSE9x.js";
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "Documentazione/Form"
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "introduzione",
      children: "Introduzione"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "elementi-e-stili-per-la-creazione-di-form-accessibili-e-responsivi",
      children: "Elementi e stili per la creazione di form accessibili e responsivi"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "All’interno di un form, nella visualizzazione predefinita gli elementi sono allineati verticalmente, ma è possibile utilizzare classi aggiuntive per variare questo tipo di layout."
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Bootstrap Italia applica automaticamente a tutti i form ", jsxRuntimeExports.jsx(_components.code, {
        children: "display: block"
      }), " e ", jsxRuntimeExports.jsx(_components.code, {
        children: "width: 100%"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "organizzazione-dei-campi",
      children: "Organizzazione dei campi"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Per raggruppare correttamente gli elementi di un modulo form è bene utilizzare la classe .form-group per ogni singolo blocco, in questo modo l’elemento input, l’etichetta, il testo di aiuto opzionale e la messaggistica di validazione otterranno lo stile grafico e le funzionalità predisposte per loro. Puoi usarlo con ", jsxRuntimeExports.jsx(_components.code, {
        children: "<fieldset/>"
      }), ", ", jsxRuntimeExports.jsx(_components.code, {
        children: "<div/>"
      }), " o qualsiasi altro elemento."]
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "dimensionamento-delle-colonne",
      children: "Dimensionamento delle colonne"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Strutture più complesse possono essere costruite usando il sistema a griglia, da utilizzare per layout che richiedono più colonne, larghezze diverse e opzioni di allineamento aggiuntive."
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Puoi scegliere di dare una dimensione a una colonna, ad esempio dandogli un valore di ", jsxRuntimeExports.jsx(_components.code, {
        children: "size={7}"
      }), ", mentre le restanti ", jsxRuntimeExports.jsx(_components.code, {
        children: "Col"
      }), " si divideranno il resto dello spazio."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: DimensionamentoColonneBase
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Ecco l’esempio di una struttura più complessa creata con il sistema a griglie."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: DimensionamentoColonneComplesso
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "auto-dimensionamento",
      children: "Auto-dimensionamento"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["L’esempio seguente usa una delle utilità di flexbox per centrare verticalmente il contenuto e cambiando ", jsxRuntimeExports.jsx(_components.code, {
        children: ".col"
      }), " con ", jsxRuntimeExports.jsx(_components.code, {
        children: ".col-auto"
      }), " in modo che le colonne occupino solo lo spazio necessario. In altre parole, la colonna si dimensiona in base al contenuto. È possibile usarlo anche quando sono presenti altre colonne con dimensioni specifiche (es.: ", jsxRuntimeExports.jsx(_components.code, {
        children: "col-sm-3"
      }), ")."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: AutoDimensionamento
    }), "\n", jsxRuntimeExports.jsx("div", {
      className: "docs",
      children: jsxRuntimeExports.jsxs(Callout, {
        color: "warning",
        children: [jsxRuntimeExports.jsx(CalloutTitle, {
          children: jsxRuntimeExports.jsx("span", {
            className: "text",
            children: "Alternative alle etichette nascoste"
          })
        }), jsxRuntimeExports.jsx(CalloutText, {
          children: jsxRuntimeExports.jsxs(_components.p, {
            children: ["Le tecnologie assistive come gli screenreader avranno problemi con i tuoi moduli se non includi un’etichetta per\r\nogni input. Per questi moduli in linea, puoi nascondere le etichette usando la classe", " ", "\r\n", jsxRuntimeExports.jsx(vu, {
              children: ".visually-hidden"
            }), "\r\n.Esistono altri metodi alternativi per fornire un’etichetta per le tecnologie assistive, come l’attributo ", jsxRuntimeExports.jsx(vu, {
              children: "\r\naria-label\r\n"
            }), ", ", jsxRuntimeExports.jsx(vu, {
              children: "aria-labelledby"
            }), " o ", jsxRuntimeExports.jsx(vu, {
              children: "title"
            }), ". Se nessuno di questi è presente, le tecnologie assistive\r\npossono ricorrere all’uso dell’attributo\r\n", jsxRuntimeExports.jsx(vu, {
              children: "placeholder"
            }), ", se presente, ma è sconsigliato."]
          })
        })]
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "disabilitazione-di-campi",
      children: "Disabilitazione di campi"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Aggiungi l’attributo booleano ", jsxRuntimeExports.jsx(_components.code, {
        children: "disabled"
      }), " su un input per impedire le interazioni dell’utente e renderlo più chiaro."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Disabilitato
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "disabilitazione-di-un-intero-form",
      children: "Disabilitazione di un intero form"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Aggiungi l’attributo disabled al ", jsxRuntimeExports.jsx(_components.code, {
        children: "<fieldset/>"
      }), " per disabilitare tutti gli elementi del form contenuti."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: FormDisabilitato
    }), "\n", jsxRuntimeExports.jsx("div", {
      className: "docs",
      children: jsxRuntimeExports.jsxs(Callout, {
        color: "warning",
        children: [jsxRuntimeExports.jsx(CalloutTitle, {
          children: jsxRuntimeExports.jsx("span", {
            className: "text",
            children: "Compatibilità Cross-browser"
          })
        }), jsxRuntimeExports.jsx(CalloutText, {
          children: jsxRuntimeExports.jsxs(_components.p, {
            children: ["Mentre Bootstrap applicherà questi stili in tutti i browser, Internet Explorer 11 e successivi non supportano\r\ncompletamente l’attributo\r\n", jsxRuntimeExports.jsx(vu, {
              children: "disabled"
            }), " nel ", jsxRuntimeExports.jsx(vu, {
              children: "<fieldset>"
            }), ". Usa un JavaScript personalizzato per disabilitare il fieldset\r\nin questi browser."]
          })
        })]
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "validazione",
      children: "Validazione"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Fornisci un feedback ai tuoi utenti con la validazione del form HTML5 disponibile nei browser supportati. Scegli tra le risposte di convalida predefinite del browser o implementa messaggi personalizzati con le classi integrate inizializzate con JavaScript."
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "come-funziona",
      children: "Come funziona"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["La validazione viene applicata tramite i due modificatori ", jsxRuntimeExports.jsx(_components.code, {
        children: "valid"
      }), " e ", jsxRuntimeExports.jsx(_components.code, {
        children: "invalid"
      }), ": come nella convenzione di ", jsxRuntimeExports.jsx(_components.code, {
        children: "reactstrap"
      }), " questi attivano delle classi CSS ", jsxRuntimeExports.jsx(_components.code, {
        children: "is-valid"
      }), " e ", jsxRuntimeExports.jsx(_components.code, {
        children: "is-invalid"
      }), " solo quando hanno un valore ", jsxRuntimeExports.jsx(_components.code, {
        children: "true"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "stili-personalizzati",
      children: "Stili personalizzati"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ValidazioneCompleta
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [name, setName] = useState('Mario');\r\nconst [surname, setSurname] = useState('Rossi');\r\nconst [username, setUsername] = useState('');\r\nconst [city, setCity] = useState('');\r\nconst [province, setProvince] = useState('');\r\nconst [cap, setCap] = useState('');\r\nconst [age, setAge] = useState(18);\r\nconst [termsAndConditions, setTermsAndConditions] = useState(false);\r\n\r\nreturn (\r\n  <>\r\n    <Form>\r\n      <Row>\r\n        <FormGroup className='col-md-3 mb-3'>\r\n          <Input\r\n            id='completeValidation-name'\r\n            type='text'\r\n            value={name}\r\n            label='Nome'\r\n            validationText='Validato!'\r\n            valid\r\n            onChange={(e) => setName(e.target.value)}\r\n          />\r\n        </FormGroup>\r\n        <FormGroup className='col-md-3 mb-3'>\r\n          <Input\r\n            id='completeValidation-surname'\r\n            type='text'\r\n            value={surname}\r\n            label='Cognome'\r\n            validationText='Validato!'\r\n            valid\r\n            onChange={(e) => setSurname(e.target.value)}\r\n          />\r\n        </FormGroup>\r\n        <FormGroup className='col-md-3 mb-3'>\r\n          <Input\r\n            id='completeValidation-username'\r\n            type='text'\r\n            value={username}\r\n            label='Username'\r\n            validationText='Questo campo è richiesto'\r\n            valid={false}\r\n            onChange={(e) => setUsername(e.target.value)}\r\n          />\r\n        </FormGroup>\r\n        <FormGroup className='col-md-3 mb-3'>\r\n          <Input\r\n            id='completeValidation-age'\r\n            type='number'\r\n            value={age}\r\n            label='Età (minimo 18 anni)'\r\n            validationText='Questo campo è richiesto'\r\n            valid={age >= 18}\r\n            onChange={(e) => setAge(parseInt(e.target.value))}\r\n          />\r\n        </FormGroup>\r\n      </Row>\r\n      <Row>\r\n        <FormGroup className='col-md-6 mb-6'>\r\n          <Input\r\n            id='completeValidation-date'\r\n            type='date'\r\n            label='Date picker'\r\n            validationText='Questo campo è richiesto'\r\n            valid={false}\r\n          />\r\n        </FormGroup>\r\n        <FormGroup className='col-md-6 mb-6'>\r\n          <Input\r\n            id='completeValidation-time'\r\n            type='time'\r\n            label='Time picker'\r\n            validationText='Questo campo è richiesto'\r\n            valid={false}\r\n          />\r\n        </FormGroup>\r\n      </Row>\r\n      <Row>\r\n        <FormGroup className='col-md-6 mb-3'>\r\n          <Input\r\n            id='completeValidation-city'\r\n            type='text'\r\n            value={city}\r\n            label='Città'\r\n            validationText='Questo campo è richiesto'\r\n            valid={false}\r\n            onChange={(e) => setCity(e.target.value)}\r\n          />\r\n        </FormGroup>\r\n        <FormGroup className='col-md-3 mb-3'>\r\n          <Input\r\n            id='completeValidation-province'\r\n            type='text'\r\n            value={province}\r\n            label='Provincia'\r\n            validationText='Per favore inserisci un nome di provincia valida.'\r\n            valid={false}\r\n            onChange={(e) => setProvince(e.target.value)}\r\n          />\r\n        </FormGroup>\r\n\r\n        <FormGroup className='col-md-3 mb-3'>\r\n          <Input\r\n            id='completeValidation-cap'\r\n            type='text'\r\n            value={cap}\r\n            label='CAP (5 cifre)'\r\n            validationText='Questo campo è richiesto'\r\n            valid={false}\r\n            onChange={(e) => setCap(e.target.value)}\r\n          />\r\n        </FormGroup>\r\n      </Row>\r\n      <Row className='align-items-center'>\r\n        <Col md='9' lg='6'>\r\n          <FormGroup check>\r\n            <Input\r\n              id='termsAndConditions'\r\n              type='checkbox'\r\n              checked={termsAndConditions}\r\n              onChange={() => setTermsAndConditions(!termsAndConditions)}\r\n              valid={termsAndConditions}\r\n            />\r\n            <Label for='termsAndConditions' check>\r\n              Accetto i termini e condizioni\r\n            </Label>\r\n            <FormText tag='div'>Devi accettare i termini e le condizioni prima di inviare il modulo.</FormText>\r\n          </FormGroup>\r\n        </Col>\r\n        <Col\r\n          md='3'\r\n          lg='6'\r\n          className='mt-3 mt-md-0 d-flex justify-content-center justify-content-md-end justify-content-lg-start'\r\n        >\r\n          <Button color='primary' type='submit'>\r\n            Invia\r\n          </Button>\r\n        </Col>\r\n      </Row>\r\n    </Form>\r\n    <Row className='mt-4'>\r\n      <Col>\r\n        <Alert color='danger'>\r\n          <strong>Attenzione</strong> Alcuni campi inseriti sono da controllare.\r\n        </Alert>\r\n      </Col>\r\n    </Row>\r\n  </>\r\n);\n"
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
