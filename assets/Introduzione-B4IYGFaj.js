import{j as e}from"./jsx-runtime-DezihaCc.js";import{useMDXComponents as c}from"./index-BtoTqJlz.js";import{M as d,d as r,C as i}from"./index-DQ1boyZV.js";import{ValidazioneCompleta as m}from"./FormValidation.stories-BWs3lmMA.js";import{D as p}from"./Input.stories-B02LS0EH.js";import{DimensionamentoColonneBase as u,DimensionamentoColonneComplesso as h,AutoDimensionamento as x,FormDisabilitato as v}from"./Introduzione.stories-XDXrenSI.js";import{C as t,a}from"./CalloutText-C98nfp7D.js";import{C as l}from"./CalloutTitle-DHbim7Vs.js";import"./index-BFWcBMrj.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-d7HZv50p.js";import"../sb-preview/runtime.js";import"./index-qAjVnZy2.js";import"./index-DKz4l_X4.js";import"./index-B_J8iUie.js";import"./inheritsLoose-B7h9gheN.js";import"./index-DLle_QMf.js";import"./index-DrFu-skq.js";import"./Input-CLSFLk54.js";import"./index-GAri5u7x.js";import"./Icon-Dn2FEDq_.js";import"./index-Bl6ORisp.js";import"./utils-Dujee42i.js";import"./Form-BOkbrBXv.js";import"./index-D3ylJrlI.js";import"./utils-CUovxYU2.js";import"./Col-CzbmXXhQ.js";import"./FormGroup-B-MqxR9s.js";import"./FormText-qdYYmIzq.js";import"./Label-fWy_qovk.js";import"./Button-BvsBu0Bj.js";import"./Button-Cn4Lrs6w.js";import"./Alert-BtD15DuB.js";import"./Fade-DLDWECFI.js";import"./Transition-GxAQdkDD.js";import"./Select-Dzs6Q_Jv.js";import"./Toggle-CgWvXWae.js";function s(o){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...c(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Documentazione/Form"}),`
`,e.jsx(n.h1,{id:"introduzione",children:"Introduzione"}),`
`,e.jsx(n.h3,{id:"elementi-e-stili-per-la-creazione-di-form-accessibili-e-responsivi",children:"Elementi e stili per la creazione di form accessibili e responsivi"}),`
`,e.jsx(n.p,{children:"All’interno di un form, nella visualizzazione predefinita gli elementi sono allineati verticalmente, ma è possibile utilizzare classi aggiuntive per variare questo tipo di layout."}),`
`,e.jsxs(n.p,{children:["Bootstrap Italia applica automaticamente a tutti i form ",e.jsx(n.code,{children:"display: block"})," e ",e.jsx(n.code,{children:"width: 100%"}),"."]}),`
`,e.jsx(n.h2,{id:"organizzazione-dei-campi",children:"Organizzazione dei campi"}),`
`,e.jsxs(n.p,{children:["Per raggruppare correttamente gli elementi di un modulo form è bene utilizzare la classe .form-group per ogni singolo blocco, in questo modo l’elemento input, l’etichetta, il testo di aiuto opzionale e la messaggistica di validazione otterranno lo stile grafico e le funzionalità predisposte per loro. Puoi usarlo con ",e.jsx(n.code,{children:"<fieldset/>"}),", ",e.jsx(n.code,{children:"<div/>"})," o qualsiasi altro elemento."]}),`
`,e.jsx(n.h3,{id:"dimensionamento-delle-colonne",children:"Dimensionamento delle colonne"}),`
`,e.jsx(n.p,{children:"Strutture più complesse possono essere costruite usando il sistema a griglia, da utilizzare per layout che richiedono più colonne, larghezze diverse e opzioni di allineamento aggiuntive."}),`
`,e.jsxs(n.p,{children:["Puoi scegliere di dare una dimensione a una colonna, ad esempio dandogli un valore di ",e.jsx(n.code,{children:"size={7}"}),", mentre le restanti ",e.jsx(n.code,{children:"Col"})," si divideranno il resto dello spazio."]}),`
`,e.jsx(r,{of:u}),`
`,e.jsx(n.p,{children:"Ecco l’esempio di una struttura più complessa creata con il sistema a griglie."}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(n.h3,{id:"auto-dimensionamento",children:"Auto-dimensionamento"}),`
`,e.jsxs(n.p,{children:["L’esempio seguente usa una delle utilità di flexbox per centrare verticalmente il contenuto e cambiando ",e.jsx(n.code,{children:".col"})," con ",e.jsx(n.code,{children:".col-auto"})," in modo che le colonne occupino solo lo spazio necessario. In altre parole, la colonna si dimensiona in base al contenuto. È possibile usarlo anche quando sono presenti altre colonne con dimensioni specifiche (es.: ",e.jsx(n.code,{children:"col-sm-3"}),")."]}),`
`,e.jsx(r,{of:x}),`
`,e.jsx("div",{className:"docs",children:e.jsxs(t,{color:"warning",children:[e.jsx(l,{children:e.jsx("span",{className:"text",children:"Alternative alle etichette nascoste"})}),e.jsx(a,{children:e.jsxs(n.p,{children:[`Le tecnologie assistive come gli screenreader avranno problemi con i tuoi moduli se non includi un’etichetta per\r
ogni input. Per questi moduli in linea, puoi nascondere le etichette usando la classe`," ",`\r
`,e.jsx(i,{children:".visually-hidden"}),`\r
.Esistono altri metodi alternativi per fornire un’etichetta per le tecnologie assistive, come l’attributo `,e.jsx(i,{children:`\r
aria-label\r
`}),", ",e.jsx(i,{children:"aria-labelledby"})," o ",e.jsx(i,{children:"title"}),`. Se nessuno di questi è presente, le tecnologie assistive\r
possono ricorrere all’uso dell’attributo\r
`,e.jsx(i,{children:"placeholder"}),", se presente, ma è sconsigliato."]})})]})}),`
`,e.jsx(n.h2,{id:"disabilitazione-di-campi",children:"Disabilitazione di campi"}),`
`,e.jsxs(n.p,{children:["Aggiungi l’attributo booleano ",e.jsx(n.code,{children:"disabled"})," su un input per impedire le interazioni dell’utente e renderlo più chiaro."]}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(n.h3,{id:"disabilitazione-di-un-intero-form",children:"Disabilitazione di un intero form"}),`
`,e.jsxs(n.p,{children:["Aggiungi l’attributo disabled al ",e.jsx(n.code,{children:"<fieldset/>"})," per disabilitare tutti gli elementi del form contenuti."]}),`
`,e.jsx(r,{of:v}),`
`,e.jsx("div",{className:"docs",children:e.jsxs(t,{color:"warning",children:[e.jsx(l,{children:e.jsx("span",{className:"text",children:"Compatibilità Cross-browser"})}),e.jsx(a,{children:e.jsxs(n.p,{children:[`Mentre Bootstrap applicherà questi stili in tutti i browser, Internet Explorer 11 e successivi non supportano\r
completamente l’attributo\r
`,e.jsx(i,{children:"disabled"})," nel ",e.jsx(i,{children:"<fieldset>"}),`. Usa un JavaScript personalizzato per disabilitare il fieldset\r
in questi browser.`]})})]})}),`
`,e.jsx(n.h2,{id:"validazione",children:"Validazione"}),`
`,e.jsx(n.p,{children:"Fornisci un feedback ai tuoi utenti con la validazione del form HTML5 disponibile nei browser supportati. Scegli tra le risposte di convalida predefinite del browser o implementa messaggi personalizzati con le classi integrate inizializzate con JavaScript."}),`
`,e.jsx(n.h3,{id:"come-funziona",children:"Come funziona"}),`
`,e.jsxs(n.p,{children:["La validazione viene applicata tramite i due modificatori ",e.jsx(n.code,{children:"valid"})," e ",e.jsx(n.code,{children:"invalid"}),": come nella convenzione di ",e.jsx(n.code,{children:"reactstrap"})," questi attivano delle classi CSS ",e.jsx(n.code,{children:"is-valid"})," e ",e.jsx(n.code,{children:"is-invalid"})," solo quando hanno un valore ",e.jsx(n.code,{children:"true"}),"."]}),`
`,e.jsx(n.h3,{id:"stili-personalizzati",children:"Stili personalizzati"}),`
`,e.jsx(r,{of:m}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [name, setName] = useState('Mario');\r
const [surname, setSurname] = useState('Rossi');\r
const [username, setUsername] = useState('');\r
const [city, setCity] = useState('');\r
const [province, setProvince] = useState('');\r
const [cap, setCap] = useState('');\r
const [age, setAge] = useState(18);\r
const [termsAndConditions, setTermsAndConditions] = useState(false);\r
\r
return (\r
  <>\r
    <Form>\r
      <Row>\r
        <FormGroup className='col-md-3 mb-3'>\r
          <Input\r
            id='completeValidation-name'\r
            type='text'\r
            value={name}\r
            label='Nome'\r
            validationText='Validato!'\r
            valid\r
            onChange={(e) => setName(e.target.value)}\r
          />\r
        </FormGroup>\r
        <FormGroup className='col-md-3 mb-3'>\r
          <Input\r
            id='completeValidation-surname'\r
            type='text'\r
            value={surname}\r
            label='Cognome'\r
            validationText='Validato!'\r
            valid\r
            onChange={(e) => setSurname(e.target.value)}\r
          />\r
        </FormGroup>\r
        <FormGroup className='col-md-3 mb-3'>\r
          <Input\r
            id='completeValidation-username'\r
            type='text'\r
            value={username}\r
            label='Username'\r
            validationText='Questo campo è richiesto'\r
            valid={false}\r
            onChange={(e) => setUsername(e.target.value)}\r
          />\r
        </FormGroup>\r
        <FormGroup className='col-md-3 mb-3'>\r
          <Input\r
            id='completeValidation-age'\r
            type='number'\r
            value={age}\r
            label='Età (minimo 18 anni)'\r
            validationText='Questo campo è richiesto'\r
            valid={age >= 18}\r
            onChange={(e) => setAge(parseInt(e.target.value))}\r
          />\r
        </FormGroup>\r
      </Row>\r
      <Row>\r
        <FormGroup className='col-md-6 mb-6'>\r
          <Input\r
            id='completeValidation-date'\r
            type='date'\r
            label='Date picker'\r
            validationText='Questo campo è richiesto'\r
            valid={false}\r
          />\r
        </FormGroup>\r
        <FormGroup className='col-md-6 mb-6'>\r
          <Input\r
            id='completeValidation-time'\r
            type='time'\r
            label='Time picker'\r
            validationText='Questo campo è richiesto'\r
            valid={false}\r
          />\r
        </FormGroup>\r
      </Row>\r
      <Row>\r
        <FormGroup className='col-md-6 mb-3'>\r
          <Input\r
            id='completeValidation-city'\r
            type='text'\r
            value={city}\r
            label='Città'\r
            validationText='Questo campo è richiesto'\r
            valid={false}\r
            onChange={(e) => setCity(e.target.value)}\r
          />\r
        </FormGroup>\r
        <FormGroup className='col-md-3 mb-3'>\r
          <Input\r
            id='completeValidation-province'\r
            type='text'\r
            value={province}\r
            label='Provincia'\r
            validationText='Per favore inserisci un nome di provincia valida.'\r
            valid={false}\r
            onChange={(e) => setProvince(e.target.value)}\r
          />\r
        </FormGroup>\r
\r
        <FormGroup className='col-md-3 mb-3'>\r
          <Input\r
            id='completeValidation-cap'\r
            type='text'\r
            value={cap}\r
            label='CAP (5 cifre)'\r
            validationText='Questo campo è richiesto'\r
            valid={false}\r
            onChange={(e) => setCap(e.target.value)}\r
          />\r
        </FormGroup>\r
      </Row>\r
      <Row className='align-items-center'>\r
        <Col md='9' lg='6'>\r
          <FormGroup check>\r
            <Input\r
              id='termsAndConditions'\r
              type='checkbox'\r
              checked={termsAndConditions}\r
              onChange={() => setTermsAndConditions(!termsAndConditions)}\r
              valid={termsAndConditions}\r
            />\r
            <Label for='termsAndConditions' check>\r
              Accetto i termini e condizioni\r
            </Label>\r
            <FormText tag='div'>Devi accettare i termini e le condizioni prima di inviare il modulo.</FormText>\r
          </FormGroup>\r
        </Col>\r
        <Col\r
          md='3'\r
          lg='6'\r
          className='mt-3 mt-md-0 d-flex justify-content-center justify-content-md-end justify-content-lg-start'\r
        >\r
          <Button color='primary' type='submit'>\r
            Invia\r
          </Button>\r
        </Col>\r
      </Row>\r
    </Form>\r
    <Row className='mt-4'>\r
      <Col>\r
        <Alert color='danger'>\r
          <strong>Attenzione</strong> Alcuni campi inseriti sono da controllare.\r
        </Alert>\r
      </Col>\r
    </Row>\r
  </>\r
);
`})})]})}function ee(o={}){const{wrapper:n}={...c(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{ee as default};
