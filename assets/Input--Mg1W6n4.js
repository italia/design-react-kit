import{j as e}from"./jsx-runtime-DezihaCc.js";import{useMDXComponents as s}from"./index-BtoTqJlz.js";import{M as c,d as i,A as d}from"./index-DQ1boyZV.js";import{I as p,E as u,U as m,a as h,b as g,D as x,R as j,c as f,_ as b,d as v,e as z,A as F,f as N}from"./Input.stories-B02LS0EH.js";import{C as r,a as t}from"./CalloutText-C98nfp7D.js";import{C as a}from"./CalloutTitle-DHbim7Vs.js";import{I}from"./Input-CLSFLk54.js";import"./index-BFWcBMrj.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-d7HZv50p.js";import"../sb-preview/runtime.js";import"./index-qAjVnZy2.js";import"./index-DKz4l_X4.js";import"./index-B_J8iUie.js";import"./inheritsLoose-B7h9gheN.js";import"./index-DLle_QMf.js";import"./index-DrFu-skq.js";import"./FormGroup-B-MqxR9s.js";import"./index-D3ylJrlI.js";import"./index-Bl6ORisp.js";import"./utils-CUovxYU2.js";import"./Icon-Dn2FEDq_.js";import"./index-GAri5u7x.js";import"./utils-Dujee42i.js";function l(o){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:p}),`
`,e.jsx(n.h1,{id:"input",children:"Input"}),`
`,e.jsx(n.h3,{id:"elementi-e-stili-per-la-creazione-di-input-accessibili-e-responsivi",children:"Elementi e stili per la creazione di input accessibili e responsivi."}),`
`,e.jsx(n.h2,{id:"esempi-di-campi-di-input",children:"Esempi di campi di input"}),`
`,e.jsxs(n.p,{children:["Per il corretto funzionamento degli elementi di tipo ",e.jsx(n.code,{children:"<input>"}),", è di fondamentale importanza l’utilizzo uno degli appositi attributi type (ad esempio, ",e.jsx(n.code,{children:"email"})," per l’inserimento di indirizzi email o ",e.jsx(n.code,{children:"number"})," per informazioni numeriche), in modo da sfruttare i controlli di input più recenti come la verifica dell’email, l’utilizzo di metodo di input numerico e altro."]}),`
`,e.jsx(n.p,{children:"Per l’inserimento guidato di campi di tipo numerico si può anche utilizzare l’elemento dedicato che fornisce migliorie per la validazione e per l’esperienza complessiva, descritto alla pagina dedicata all’input numerico."}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(n.h2,{id:"utilizzo-di-placeholder-e-label",children:"Utilizzo di placeholder e label"}),`
`,e.jsx(n.p,{children:"Si può includere un’etichetta che si riposiziona automaticamente quando l’utente utilizza il campo di testo."}),`
`,e.jsx(n.p,{children:"Si può abbinare all’etichetta un placeholder (testo di esempio) per ulteriore chiarezza."}),`
`,e.jsxs(n.p,{children:["In caso di necessità, è anche possibile utilizzare un ulteriore contenuto testuale sotto il campo di testo, aggiungendo il testo nel modificatore ",e.jsx(n.code,{children:"validationText"}),"."]}),`
`,e.jsx("div",{className:"docs",children:e.jsxs(r,{color:"warning",children:[e.jsx(a,{children:e.jsx("span",{className:"text",children:"Associazione del testo di aiuto con gli elementi del modulo form"})}),e.jsx(t,{children:e.jsx(n.p,{children:`Il testo di aiuto deve essere esplicitamente associato agli elementi del mudulo form a cui si riferisce\r
utilizzando l’attributo aria-describedby. Ciò garantirà che le tecnologie assistive, come gli screenreader,\r
leggano questo testo di aiuto quando l’utente avrà il focus sull’elemento.`})})]})}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h2,{id:"input-con-icona-o-bottoni",children:"Input con icona o bottoni"}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h4,{id:"codice",children:"Codice"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [isFocused1, toggleFocus1] = useState(false);\r
const [isFocused2, toggleFocus2] = useState(false);\r
const [isFocused3, toggleFocus3] = useState(false);\r
\r
const toggleFocusLabel1 = () => toggleFocus1(true);\r
// @ts-ignore: ignore types for now\r
const toggleBlurLabel1 = (e) => {\r
  if (e.target.value === '') {\r
    toggleFocus1(!isFocused1);\r
  }\r
};\r
const toggleFocusLabel2 = () => toggleFocus2(true);\r
// @ts-ignore: ignore types for now\r
const toggleBlurLabel2 = (e) => {\r
  if (e.target.value === '') {\r
    toggleFocus2(!isFocused2);\r
  }\r
};\r
const toggleFocusLabel3 = () => toggleFocus3(true);\r
// @ts-ignore: ignore types for no}w\r
const toggleBlurLabel3 = (e) => {\r
  if (e.target.value === '') {\r
    toggleFocus3(!isFocused3);\r
  }\r
};\r
return (\r
  <div>\r
    <div className='form-group'>\r
      <div className='input-group'>\r
        <span className='input-group-text'>\r
          <Icon icon='it-pencil' aria-hidden size='sm' />\r
        </span>\r
        <label htmlFor='input-group-1' className={isFocused1 ? 'active' : ''}>\r
          Con Etichetta\r
        </label>\r
        <input\r
          type='text'\r
          className={isFocused1 ? 'form-control focus--mouse' : 'form-control'}\r
          onFocus={toggleFocusLabel1}\r
          onBlur={toggleBlurLabel1}\r
          id='input-group-1'\r
          name='input-group-1'\r
        />\r
      </div>\r
    </div>\r
    <div className='form-group'>\r
      <div className='input-group'>\r
        <span className='input-group-text'>\r
          <Icon icon='it-pencil' color='danger' aria-hidden size='sm' />\r
        </span>\r
        <label htmlFor='input-group-2' className='active'>\r
          Con Etichetta e placeholder\r
        </label>\r
        <input\r
          type='text'\r
          className={isFocused2 ? 'form-control focus--mouse' : 'form-control'}\r
          onFocus={toggleFocusLabel2}\r
          onBlur={toggleBlurLabel2}\r
          id='input-group-2'\r
          name='input-group-2'\r
          placeholder='Lorem Ipsum'\r
        />\r
      </div>\r
    </div>\r
    <div className='form-group'>\r
      <div className='input-group'>\r
        <span className='input-group-text'>\r
          <Icon icon='it-pencil' color='primary' aria-hidden size='sm' />\r
        </span>\r
        <label htmlFor='input-group-3' className={isFocused3 ? 'active' : ''}>\r
          Con Etichetta e bottone di tipo primary\r
        </label>\r
        <input\r
          type='text'\r
          className={isFocused3 ? 'form-control focus--mouse' : 'form-control'}\r
          onFocus={toggleFocusLabel3}\r
          onBlur={toggleBlurLabel3}\r
          id='input-group-3'\r
          name='input-group-3'\r
        />\r
        <div className='input-group-append'>\r
          <button className='btn btn-primary' type='button' id='button-3'>\r
            Invio\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
);
`})}),`
`,e.jsx(n.h2,{id:"input-password",children:"Input password"}),`
`,e.jsx(n.p,{children:"Per rendere più semplice l’inserimento della password, l’elemento è stato dotato di un visualizzatore dei caratteri digitati."}),`
`,e.jsx("div",{className:"docs",children:e.jsxs(r,{color:"important",children:[e.jsx(a,{children:e.jsx("span",{className:"text",children:"Componente PasswordInput rimosso"})}),e.jsx(t,{children:e.jsxs(n.p,{children:["Qualora si fosse usato in precedenza il componente ",e.jsx("code",{children:"PasswordInput"}),` è possibile migrare all'esempio di\r
seguito.`]})})]})}),`
`,e.jsx(i,{of:g}),`
`,e.jsx("div",{className:"docs",children:e.jsxs(r,{color:"warning",children:[e.jsx(a,{children:e.jsx("span",{className:"text",children:"Nota"})}),e.jsx(t,{children:e.jsx(n.p,{children:'Al momento non è ancora disponibili la funzionalità di "password strength" in questo Design React Kit.'})})]})}),`
`,e.jsx(n.h2,{id:"disabilitato",children:"Disabilitato"}),`
`,e.jsxs(n.p,{children:["Aggiungi il modificatore ",e.jsx(n.code,{children:"disabled"})," ad un componente Input per impedire la modifica del valore contenuto e non inviare i dati in esso contenuti."]}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.h2,{id:"readonly",children:"Readonly"}),`
`,e.jsxs(n.p,{children:["Aggiungi il modificatore ",e.jsx(n.code,{children:"readOnly"})," ad un input per impedire la modifica del valore contenuto."]}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(n.h3,{id:"readonly-normalizzato",children:"Readonly normalizzato"}),`
`,e.jsxs(n.p,{children:["Se per qualche motivo vuoi avere i componenti ",e.jsx(n.code,{children:"<Input readOnly/>"})," nella forma stilizzata come testo normale usa il modificatore ",e.jsx(n.code,{children:"normalized"}),"."]}),`
`,e.jsx(i,{of:f}),`
`,e.jsx(n.h2,{id:"input-con-risultato-ricerca-o-autocompletamento",children:"Input con risultato ricerca o autocompletamento"}),`
`,e.jsx(n.h3,{id:"autocompletamento-accessibile-con-dati",children:"Autocompletamento Accessibile con dati"}),`
`,e.jsx(n.p,{children:"Cerca una regione italiana per verificarne il comportamento."}),`
`,e.jsx(n.p,{children:"Il completamento automatico è un componente che aiuta gli utenti a scegliere le risposte da un elenco fornito."}),`
`,e.jsxs(n.p,{children:["Per la creazione del componente, è stato utilizzato il plugin ",e.jsx("a",{target:"_blank",href:"https://github.com/alphagov/accessible-autocomplete",children:"Accessible autocomplete"}),"."]}),`
`,e.jsxs(n.p,{children:["Per una corretta implementazione si consiglia di consultare la ",e.jsx("a",{target:"_blank",href:"https://alphagov.github.io/accessible-autocomplete/",children:"documentazione"}),"."]}),`
`,e.jsx(i,{of:b}),`
`,e.jsx(n.h4,{id:"codice-1",children:"Codice"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const suggest = (query: any, populateResults: any) => {\r
  const filteredResults = multiOptions.filter((i) => i.label.toLowerCase().includes(query.toLowerCase()));\r
  let data = filteredResults.map((item) => {\r
    return item.label;\r
  });\r
  populateResults(data);\r
};\r
\r
return (\r
  <FormGroup className='select-wrapper'>\r
    <label htmlFor='autocomplete'>Provincia</label>\r
    <Autocomplete\r
      id='autocomplete'\r
      source={suggest}\r
      placeholder={'Testo da cercare'}\r
      defaultValue={''}\r
      displayMenu={'inline'}\r
      tNoResults={() => 'Nessun risultato'}\r
    />\r
  </FormGroup>\r
);
`})}),`
`,e.jsx(n.h2,{id:"input-ora",children:"Input Ora"}),`
`,e.jsx(n.h3,{id:"campo-per-la-selezione-di-un-orario",children:"Campo per la selezione di un orario."}),`
`,e.jsx(n.p,{children:"Il componente input time, o timepicker, è un componente dedicato alla selezione di un orario."}),`
`,e.jsx(n.p,{children:"Clicca sull’icona a destra per visualizzare il timepicker."}),`
`,e.jsx(i,{of:v}),`
`,e.jsx(n.h4,{id:"codice-2",children:"Codice"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [value, setValue] = useState('');\r
\r
return (\r
  <Input\r
    type='time'\r
    label='Hourpicker'\r
    className='active'\r
    value={value}\r
    onChange={(ev) => {\r
      setValue(ev.target.value);\r
    }}\r
  />\r
);
`})}),`
`,e.jsx(n.h2,{id:"input-calendario",children:"Input Calendario"}),`
`,e.jsx(n.h3,{id:"datepicker",children:"Datepicker"}),`
`,e.jsx(n.p,{children:"Campo di tipo calendario per la selezione di giorni dell’anno."}),`
`,e.jsx(n.p,{children:"Clicca sull’icona a destra per visualizzare il datepicker."}),`
`,e.jsx("div",{className:"docs",children:e.jsx(r,{highlight:!0,children:e.jsx(t,{children:e.jsx("span",{className:"text",children:e.jsx(n.p,{children:"Assicurarsi di aggiungere alla label la classe active per impedire la sovrapposizione della label al campo."})})})})}),`
`,e.jsx(i,{of:z}),`
`,e.jsx(n.h4,{id:"codice-3",children:"Codice"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [value, setValue] = useState('');\r
\r
return (\r
  <Input\r
    type='date'\r
    label='Datepicker'\r
    className='active'\r
    placeholder='22/12/2023'\r
    value={value}\r
    onChange={(ev) => {\r
      setValue(ev.target.value);\r
    }}\r
  />\r
);
`})}),`
`,e.jsx(n.h2,{id:"area-di-testo",children:"Area di testo"}),`
`,e.jsxs(n.p,{children:["Per permettere agli utenti di inserire del testo (ad esempio per lasciare commenti o informazioni), è bene utilizzare un elemento di tipo ",e.jsx(n.code,{children:"<textarea>"})," ridimensionabile."]}),`
`,e.jsx(n.p,{children:"Includendo l’elemento all’interno di un .form-group, la label assumerà lo stesso comportamento dinamico dei campi di input."}),`
`,e.jsx(i,{of:F}),`
`,e.jsx(n.h3,{id:"con-placeholder",children:"Con placeholder"}),`
`,e.jsx(i,{of:N}),`
`,e.jsx(n.h2,{id:"argomenti-componente",children:"Argomenti componente"}),`
`,e.jsx(n.h3,{id:"input-1",children:"Input"}),`
`,e.jsx(d,{of:I})]})}function J(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(l,{...o})}):l(o)}export{J as default};
