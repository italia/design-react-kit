import { j as jsxRuntimeExports } from "./jsx-runtime-Dd8filLf.js";
import { useMDXComponents } from "./index-DKZlwgtl.js";
import { M as Meta, C as Canvas, g as gu } from "./index-DBq2QLBj.js";
import { C as Callout, a as CalloutText } from "./CalloutText-BaMkNk9G.js";
import { C as CalloutTitle } from "./CalloutTitle-DHuv_iNr.js";
import "./track-focus-DbJ2CO43.js";
import { ValidazioneCompleta } from "./FormValidation.stories-Cw1FRNh3.js";
import { D as Disabilitato } from "./Input.stories-BFqSLUsx.js";
import { DimensionamentoColonneBase, DimensionamentoColonneComplesso, AutoDimensionamento, FormDisabilitato } from "./Introduzione.stories-C7oxNDX7.js";
import "./index-N7T0HPyM.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-71tjp26B.js";
import "./index-DaSoJtbc.js";
import "./index-_6PbV05F.js";
import "./index-9xAnpW0o.js";
import "./index-BdOSk9or.js";
import "./index-xoeSAV6i.js";
import "./Col-C4Vz86Og.js";
import "./utils-Cn8VSNph.js";
import "./Form-DJhLLesO.js";
import "./FormGroup-CBxBMrzE.js";
import "./FormText-BChjU0Yw.js";
import "./Label-BeB_moJD.js";
import "./Autocomplete-CtkxcN8E.js";
import "./Alert-C2Hkhrxm.js";
import "./Fade-CRSnVOOI.js";
import "./Transition-l9AVs-4D.js";
import "./Button-DzBfv9Kx.js";
import "./Button-FBjU0jYp.js";
import "./Input-BE3aeYug.js";
import "./index-C2nrqh0v.js";
import "./Icon-D5Ay-CRR.js";
import "./utils-CwYUlCuU.js";
import "./Select-DkwYjm9R.js";
import "./Toggle-qyh4nzdv.js";
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
            children: ["Le tecnologie assistive come gli screenreader avranno problemi con i tuoi moduli se non includi un’etichetta per\nogni input. Per questi moduli in linea, puoi nascondere le etichette usando la classe", " ", "\n", jsxRuntimeExports.jsx(gu, {
              children: ".visually-hidden"
            }), "\n.Esistono altri metodi alternativi per fornire un’etichetta per le tecnologie assistive, come l’attributo ", jsxRuntimeExports.jsx(gu, {
              children: "\naria-label\n"
            }), ", ", jsxRuntimeExports.jsx(gu, {
              children: "aria-labelledby"
            }), " o ", jsxRuntimeExports.jsx(gu, {
              children: "title"
            }), ". Se nessuno di questi è presente, le tecnologie assistive\npossono ricorrere all’uso dell’attributo\n", jsxRuntimeExports.jsx(gu, {
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
            children: ["Mentre Bootstrap applicherà questi stili in tutti i browser, Internet Explorer 11 e successivi non supportano\ncompletamente l’attributo\n", jsxRuntimeExports.jsx(gu, {
              children: "disabled"
            }), " nel ", jsxRuntimeExports.jsx(gu, {
              children: "<fieldset>"
            }), ". Usa un JavaScript personalizzato per disabilitare il fieldset\nin questi browser."]
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
        children: `  const [name, setName] = useState('Mario');
  const [surname, setSurname] = useState('Rossi');
  const [username, setUsername] = useState('');
  const [region, setRegion] = useState('');
  const [province, setProvince] = useState('');
  const [cap, setCap] = useState('');
  const [age, setAge] = useState(18);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [termsAndConditions, setTermsAndConditions] = useState(false);

  const regions = [
    'Abruzzo',
    'Basilicata',
    'Calabria',
    'Campania',
    'Emilia Romagna',
    'Friuli Venezia Giulia',
    'Lazio',
    'Liguria',
    'Lombardia',
    'Marche',
    'Molise',
    'Piemonte',
    'Puglia',
    'Sardegna',
    'Sicilia',
    'Toscana',
    'Trentino Alto Adige',
    'Umbria',
    "Valle d'Aosta",
    'Veneto'
  ];

  const suggest = (query: string, syncResults: (p: string[]) => void) => {
    syncResults(
      query
        ? regions.filter(function (result) {
            return result.toLowerCase().indexOf(query.toLowerCase()) !== -1;
          })
        : []
    );
  };

  return (
    <>
      <Form>
        <Row>
          <FormGroup className='col-md-3 mb-3'>
            <Input
              id='completeValidation-name'
              type='text'
              value={name}
              label='Nome'
              validationText='Validato!'
              valid={name != ''}
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
          <FormGroup className='col-md-3 mb-3'>
            <Input
              id='completeValidation-surname'
              type='text'
              value={surname}
              label='Cognome'
              validationText='Validato!'
              valid={surname != ''}
              onChange={(e) => setSurname(e.target.value)}
            />
          </FormGroup>
          <FormGroup className='col-md-3 mb-3'>
            <Input
              id='completeValidation-username'
              type='text'
              value={username}
              label='Username'
              validationText='Questo campo è richiesto'
              valid={username != ''}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormGroup>
          <FormGroup className='col-md-3 mb-3'>
            <Input
              id='completeValidation-age'
              type='number'
              value={age}
              label='Età (minimo 18 anni)'
              validationText='Questo campo è richiesto'
              valid={age >= 18}
              onChange={(e) => setAge(parseInt(e.target.value))}
            />
          </FormGroup>
        </Row>
        <Row>
          <FormGroup className='col-md-6 mb-6'>
            <Input
              id='completeValidation-date'
              type='date'
              value={date}
              label='Date picker'
              validationText='Questo campo è richiesto'
              valid={date != ''}
              onChange={(e) => setDate(e.target.value)}
            />
          </FormGroup>
          <FormGroup className='col-md-6 mb-6'>
            <Input
              id='completeValidation-time'
              type='time'
              value={time}
              label='Time picker'
              validationText='Questo campo è richiesto'
              valid={time != ''}
              onChange={(e) => setTime(e.target.value)}
            />
          </FormGroup>
        </Row>
        <Row>
          <FormGroup className='form-group col-md-4 mb-3'>
            <Autocomplete
              id='completeValidation-region"'
              label='Regione'
              source={suggest}
              tNoResults={() => 'Nessun risultato'}
              valid={regions.includes(region)}
              validationText='Per favore inserisci una regione valida.'
              onConfirm={(region) => {
                setRegion(region);
              }}
            />
          </FormGroup>
          <FormGroup className='col-md-4 mb-3'>
            <Input
              id='completeValidation-province'
              type='text'
              value={province}
              label='Provincia'
              validationText='Per favore inserisci un nome di provincia valida.'
              valid={province != ''}
              onChange={(e) => setProvince(e.target.value)}
            />
          </FormGroup>
          <FormGroup className='col-md-4 mb-3'>
            <Input
              id='completeValidation-cap'
              type='text'
              value={cap}
              label='CAP (5 cifre)'
              validationText='Questo campo è richiesto'
              valid={cap != ''}
              onChange={(e) => setCap(e.target.value)}
            />
          </FormGroup>
        </Row>
        <Row className='align-items-center'>
          <Col md='9' lg='6'>
            <FormGroup check>
              <Input
                id='termsAndConditions'
                type='checkbox'
                checked={termsAndConditions}
                onChange={() => setTermsAndConditions(!termsAndConditions)}
                valid={termsAndConditions}
              />
              <Label for='termsAndConditions' check>
                Accetto i termini e condizioni
              </Label>
              <FormText tag='div'>Devi accettare i termini e le condizioni prima di inviare il modulo.</FormText>
            </FormGroup>
          </Col>
          <Col
            md='3'
            lg='6'
            className='mt-3 mt-md-0 d-flex justify-content-center justify-content-md-end justify-content-lg-start'
          >
            <Button color='primary' type='submit'>
              Invia
            </Button>
          </Col>
        </Row>
      </Form>
      <Row className='mt-4'>
        <Col>
          <Alert color='danger'>
            <strong>Attenzione</strong> Alcuni campi inseriti sono da controllare.
          </Alert>
        </Col>
      </Row>
    </>
  );
`
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
