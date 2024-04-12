import{j as e}from"./jsx-runtime-DezihaCc.js";import{useMDXComponents as s}from"./index-BtoTqJlz.js";import{M as d,C as r,d as o,A as a}from"./index-DQ1boyZV.js";import{M as u,_ as c,a as m,b as p,c as g,d as h,e as M,f as x,S as f,g as b,h as v,A as j,i as B,R as q,j as O,k as C,l as y,m as L,n as k}from"./Modal.stories-DtU7Bh70.js";import{C as D,a as t}from"./CalloutText-C98nfp7D.js";import{C as z}from"./CalloutTitle-DHbim7Vs.js";import"./index-BFWcBMrj.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-d7HZv50p.js";import"../sb-preview/runtime.js";import"./index-qAjVnZy2.js";import"./index-DKz4l_X4.js";import"./index-B_J8iUie.js";import"./inheritsLoose-B7h9gheN.js";import"./index-DLle_QMf.js";import"./index-DrFu-skq.js";import"./index-D3ylJrlI.js";import"./index-Bl6ORisp.js";import"./utils-CUovxYU2.js";import"./Icon-Dn2FEDq_.js";import"./utils-Dujee42i.js";import"./Button-BvsBu0Bj.js";import"./Button-Cn4Lrs6w.js";import"./Fade-DLDWECFI.js";import"./Transition-GxAQdkDD.js";import"./FormGroup-B-MqxR9s.js";import"./Label-fWy_qovk.js";import"./Input-CLSFLk54.js";import"./index-GAri5u7x.js";import"./LinkListItem-CJpjZu_u.js";function l(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:u}),`
`,e.jsx(n.h1,{id:"modale",children:"Modale"}),`
`,e.jsxs(n.p,{children:[`Le finestre modali si possono usare per mostrare contenuti in evidenza, notifiche agli utenti, o contenuti personalizzati.\r
Cliccando sulla parte che oscura la pagina (il cosiddetto `,e.jsx(n.code,{children:"backdrop"})," della modale), questa verrà chiusa automativamente."]}),`
`,e.jsx("div",{className:"docs",children:e.jsxs(D,{color:"warning",children:[e.jsx(z,{children:e.jsx("span",{className:"text",children:"Accessibilità"})}),e.jsxs(t,{children:[e.jsxs(n.p,{children:["Per tutti i componenti Modale viene automaticamente aggiunto l'attributo ",e.jsx(r,{children:'role="dialog"'})," e"," ",`\r
`,e.jsx(r,{children:'role="document"'})," all'elemento contenitore. ("]}),e.jsx("a",{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_dialog_role",target:"_blank",rel:"noreferrer",children:e.jsx(n.p,{children:"maggiori info su MDN"})}),e.jsx(n.p,{children:")."})]}),e.jsxs(t,{children:[e.jsxs(n.p,{children:["L’attributo ",e.jsx(r,{children:'labelledby="..."'})," deve essere assegnato al componente ",e.jsx(r,{children:"Modal"}),` ed usare come\r
valore l'ID del componente\r
`,e.jsx(r,{children:"ModalHeader"}),".("]}),e.jsx("a",{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute",target:"_blank",rel:"noreferrer",children:e.jsx(n.p,{children:"maggiori info su MDN"})}),e.jsx(n.p,{children:")."})]}),e.jsxs(t,{children:[e.jsx(n.p,{children:"Approfondisci l’argomento sul sito delle"}),e.jsx("a",{href:"https://www.w3.org/TR/wai-aria-practices/#dialog_modal",target:"_blank",rel:"noreferrer",children:e.jsx(n.p,{children:"WAI-ARIA Authoring Practices."})})]})]})}),`
`,e.jsx(n.h3,{id:"componenti-della-modale",children:"Componenti della modale"}),`
`,e.jsxs(n.p,{children:["In basso un esempio di una modale statica, senza componente principale ",e.jsx(n.code,{children:"Modal"}),". Sono inclusi l’intestazione, il corpo, e il footer della modale come mostrato di seguito."]}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(n.p,{children:"È richiesta l’inclusione di intestazioni o elementi con funzione di chiusura della modale stessa."}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(n.h4,{id:"codice",children:"Codice"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [isOpen, toggleModal] = useState(false);\r
\r
return (\r
  <div>\r
    <Button color='primary' onClick={() => toggleModal(!isOpen)}>\r
      Lancia la demo della modale\r
    </Button>\r
    <Modal isOpen={isOpen} toggle={() => toggleModal(!isOpen)} labelledBy='esempio1'>\r
      <ModalHeader toggle={() => toggleModal(!isOpen)} id='esempio1'>\r
        Titolo della modale\r
      </ModalHeader>\r
      <ModalBody>\r
        <p>Woohoo, stai leggendo questo testo in una modale!</p>\r
      </ModalBody>\r
      <ModalFooter>\r
        <Button color='primary' onClick={() => toggleModal(!isOpen)}>\r
          Salva modifiche\r
        </Button>\r
      </ModalFooter>\r
    </Modal>\r
  </div>\r
);
`})}),`
`,e.jsx(n.h3,{id:"modale-con-bottone-di-chiusura",children:"Modale con bottone di chiusura"}),`
`,e.jsxs(n.p,{children:[`Per chiudere la modale, si può utilizzare un bottone: il componente aggiungerà un testo apposito per gli screen reader.\r
Per mostrare l'icona di chiusura, passare una funzione `,e.jsx(n.code,{children:"toggle"})," al componente ",e.jsx(n.code,{children:"ModalHeader"})," al fine di gestirne il comportamento quando l'utente cliccherà."]}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(n.h4,{id:"codice-1",children:"Codice"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [isOpen, toggleModal] = useState(false);\r
\r
return (\r
  <div>\r
    <Button color='primary' onClick={() => toggleModal(!isOpen)}>\r
      Mostra modale con bottone di chiusura\r
    </Button>\r
    <Modal isOpen={isOpen} toggle={() => toggleModal(!isOpen)} labelledBy='esempio2'>\r
      <ModalHeader toggle={() => toggleModal(!isOpen)} id='esempio2'>\r
        Titolo della modale\r
      </ModalHeader>\r
      <ModalBody>\r
        <p>Woohoo, stai leggendo questo testo in una modale!</p>\r
      </ModalBody>\r
      <ModalFooter>\r
        <Button color='secondary' onClick={() => toggleModal(!isOpen)}>\r
          Chiudi\r
        </Button>\r
        <Button color='primary' onClick={() => toggleModal(!isOpen)}>\r
          Salva modifiche\r
        </Button>\r
      </ModalFooter>\r
    </Modal>\r
  </div>\r
);
`})}),`
`,e.jsx(n.h4,{id:"codice-2",children:"Codice"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx"})}),`
`,e.jsx(n.h3,{id:"modale-con-icona",children:"Modale con icona"}),`
`,e.jsx(n.p,{children:"E’ possibie inserire un icona di alert (o altro tipo) affiancandola all’intestazione."}),`
`,e.jsx(o,{of:g}),`
`,e.jsx(n.h4,{id:"codice-3",children:"Codice"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [isOpen, toggleModal] = useState(false);\r
\r
return (\r
  <div>\r
    <Button color='primary' onClick={() => toggleModal(!isOpen)}>\r
      Lancia modale con icona\r
    </Button>\r
    <Modal isOpen={isOpen} toggle={() => toggleModal(!isOpen)} withIcon labelledBy='esempio3'>\r
      <ModalHeader icon='it-info-circle' id='esempio3'>\r
        This is a notification message more long than usual\r
      </ModalHeader>\r
      <ModalBody>\r
        <p>In the various types of information modal dialog, only one button to close dialog is provided.</p>\r
      </ModalBody>\r
      <ModalFooter>\r
        <Button color='primary' onClick={() => toggleModal(!isOpen)}>\r
          Ok\r
        </Button>\r
      </ModalFooter>\r
    </Modal>\r
  </div>\r
);
`})}),`
`,e.jsx(n.h3,{id:"modale-con-radiobuttons",children:"Modale con radiobuttons"}),`
`,e.jsx(n.p,{children:"All’interno della modale è possibile inserire elementi form. Di seguito una modale con un elenco di radio button."}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(n.h4,{id:"codice-4",children:"Codice"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [isOpen, toggleModal] = useState(false);\r
\r
return (\r
  <div>\r
    <Button color='primary' onClick={() => toggleModal(!isOpen)}>\r
      Lancia modale con form\r
    </Button>\r
    <Modal isOpen={isOpen} toggle={() => toggleModal(!isOpen)} labelledBy='esempio4'>\r
      <ModalHeader id='esempio4' toggle={() => toggleModal(!isOpen)}>\r
        SCEGLI UNA OPZIONE\r
      </ModalHeader>\r
      <ModalBody>\r
        <FormGroup check>\r
          <Input name='gruppo1' type='radio' id='radio1' defaultChecked />\r
          <Label check htmlFor='radio1'>\r
            Opzione 1\r
          </Label>\r
        </FormGroup>\r
        <FormGroup check>\r
          <Input name='gruppo1' type='radio' id='radio2' />\r
          <Label check htmlFor='radio2'>\r
            Opzione 2\r
          </Label>\r
        </FormGroup>\r
        <FormGroup check>\r
          <Input name='gruppo1' type='radio' id='radio3' />\r
          <Label check htmlFor='radio3'>\r
            Opzione 3\r
          </Label>\r
        </FormGroup>\r
      </ModalBody>\r
      <ModalFooter>\r
        <Button outline color='primary' onClick={() => toggleModal(!isOpen)}>\r
          Chiudi\r
        </Button>\r
        <Button color='primary' onClick={() => toggleModal(!isOpen)} disabled>\r
          Ok\r
        </Button>\r
      </ModalFooter>\r
    </Modal>\r
  </div>\r
);
`})}),`
`,e.jsx(n.h3,{id:"modale-con-link-list",children:"Modale con Link List"}),`
`,e.jsxs(n.p,{children:["All’interno della modale è possibile inserire delle Liste di link. Per formattare correttamente il contenuto di questa modale, aggiungere l'attributo ",e.jsx(n.code,{children:"withLinkList"})," al componente ",e.jsx(n.code,{children:"Modal"}),"."]}),`
`,e.jsx(o,{of:M}),`
`,e.jsx(n.h4,{id:"codice-5",children:"Codice"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [isOpen, toggleModal] = useState(false);\r
\r
return (\r
  <div>\r
    <Button color='primary' onClick={() => toggleModal(!isOpen)}>\r
      Lancia modale con LinkList\r
    </Button>\r
    <Modal isOpen={isOpen} toggle={() => toggleModal(!isOpen)} withLinkList labelledBy='esempio5'>\r
      <ModalHeader id='esempio5'>\r
        <span>1.</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.\r
      </ModalHeader>\r
      <ModalBody>\r
        <LinkList>\r
          <LinkListItem className='icon-left'>\r
            <Icon color='primary' icon='it-chevron-right' aria-hidden />\r
            <span>Link list 1</span>\r
          </LinkListItem>\r
          <LinkListItem className='icon-left'>\r
            <Icon color='primary' icon='it-chevron-right' aria-hidden />\r
            <span>Link list 2</span>\r
          </LinkListItem>\r
          <LinkListItem className='icon-left'>\r
            <Icon color='primary' icon='it-chevron-right' aria-hidden />\r
            <span>Link list 3</span>\r
          </LinkListItem>\r
        </LinkList>\r
      </ModalBody>\r
      <ModalFooter>\r
        <Button color='primary' onClick={() => toggleModal(!isOpen)}>\r
          Ok\r
        </Button>\r
      </ModalFooter>\r
    </Modal>\r
  </div>\r
);
`})}),`
`,e.jsx(n.h3,{id:"modale-popconfirm",children:"Modale Popconfirm"}),`
`,e.jsxs(n.p,{children:["La Modale di tipo Popconfirm può essere utilizzata per brevi messaggi di conferma. Questo particolare design si ottiene applicando l'attributo ",e.jsx(n.code,{children:"popConfirm"})," al componente ",e.jsx(n.code,{children:"Modal"}),"."]}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(n.h4,{id:"codice-6",children:"Codice"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [isOpenBase, toggleBaseModal] = useState(false);\r
const [isOpenWithHeader, toggleModalWithHeader] = useState(false);\r
\r
return (\r
  <div>\r
    <Button color='primary' onClick={() => toggleBaseModal(!isOpenBase)} className='me-3'>\r
      Lancia modale pop-confirm base\r
    </Button>\r
    <Button color='primary' onClick={() => toggleModalWithHeader(!isOpenWithHeader)} className='me-3'>\r
      Lancia modale pop-confirm con titolo\r
    </Button>\r
    <Modal isOpen={isOpenBase} toggle={() => toggleBaseModal(!isOpenBase)} popConfirm>\r
      <ModalBody>\r
        <p>Font Titillium 14px. Leading 21px.</p>\r
      </ModalBody>\r
      <ModalFooter>\r
        <Button color='primary' onClick={() => toggleBaseModal(!isOpenBase)} size='sm'>\r
          Action one\r
        </Button>\r
        <Button color='secondary' onClick={() => toggleBaseModal(!isOpenBase)} size='sm' outline>\r
          Action two\r
        </Button>\r
      </ModalFooter>\r
    </Modal>\r
    <Modal\r
      isOpen={isOpenWithHeader}\r
      toggle={() => toggleModalWithHeader(!isOpenWithHeader)}\r
      popConfirm\r
      labelledBy='esempio6'\r
    >\r
      <ModalHeader labelledBy='esempio6'>Popconfirm header</ModalHeader>\r
      <ModalBody>\r
        <p>Font Titillium 14px. Leading 21px.</p>\r
      </ModalBody>\r
      <ModalFooter>\r
        <Button color='primary' onClick={() => toggleModalWithHeader(!isOpenWithHeader)} size='sm'>\r
          Action one\r
        </Button>\r
        <Button color='secondary' onClick={() => toggleModalWithHeader(!isOpenWithHeader)} size='sm' outline>\r
          Action two\r
        </Button>\r
      </ModalFooter>\r
    </Modal>\r
  </div>\r
);
`})}),`
`,e.jsx(n.h3,{id:"scroll-di-contenuti-lunghi",children:"Scroll di contenuti lunghi"}),`
`,e.jsx(n.p,{children:"Quando le modali diventano troppo lunghe per il viewport o il dispositivo dell’utente, scorrono indipendentemente dalla pagina stessa."}),`
`,e.jsx(o,{of:f}),`
`,e.jsx(n.h4,{id:"codice-7",children:"Codice"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [isOpen, toggleModal] = useState(false);\r
\r
return (\r
  <div>\r
    <Button color='primary' onClick={() => toggleModal(!isOpen)}>\r
      Lancia la demo della modale scrollabile\r
    </Button>\r
    <Modal isOpen={isOpen} toggle={() => toggleModal(!isOpen)} labelledBy='esempio7'>\r
      <ModalHeader toggle={() => toggleModal(!isOpen)} id='esempio7'>\r
        Titolo della modale\r
      </ModalHeader>\r
      <ModalBody>\r
        <div>\r
          <p>\r
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget\r
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\r
          </p>\r
          <p>\r
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet\r
            rutrum faucibus dolor auctor.\r
          </p>\r
          <p>\r
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl\r
            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.\r
          </p>\r
          <p>\r
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget\r
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\r
          </p>\r
          <p>\r
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet\r
            rutrum faucibus dolor auctor.\r
          </p>\r
          <p>\r
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl\r
            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.\r
          </p>\r
          <p>\r
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget\r
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\r
          </p>\r
          <p>\r
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet\r
            rutrum faucibus dolor auctor.\r
          </p>\r
          <p>\r
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl\r
            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.\r
          </p>\r
          <p>\r
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget\r
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\r
          </p>\r
          <p>\r
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet\r
            rutrum faucibus dolor auctor.\r
          </p>\r
          <p>\r
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl\r
            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.\r
          </p>\r
          <p>\r
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget\r
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\r
          </p>\r
          <p>\r
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet\r
            rutrum faucibus dolor auctor.\r
          </p>\r
          <p>\r
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl\r
            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.\r
          </p>\r
          <p>\r
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget\r
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\r
          </p>\r
          <p>\r
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet\r
            rutrum faucibus dolor auctor.\r
          </p>\r
          <p>\r
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl\r
            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.\r
          </p>\r
        </div>\r
      </ModalBody>\r
      <ModalFooter>\r
        <Button color='secondary' onClick={() => toggleModal(!isOpen)}>\r
          Chiudi\r
        </Button>\r
        <Button color='primary' onClick={() => toggleModal(!isOpen)}>\r
          Salva modifiche\r
        </Button>\r
      </ModalFooter>\r
    </Modal>\r
  </div>\r
);
`})}),`
`,e.jsx(n.h4,{id:"scroll-di-contenuti-allinterno-della-modale",children:"Scroll di contenuti all’interno della modale"}),`
`,e.jsxs(n.p,{children:["Si può scelgliere di utilizzare uno scroll interno alla madole, mantenendo sempre visibile l’intestazione ed il footer della modale stessa aggiungendo l'attributo ",e.jsx(n.code,{children:"scrollable"})," al componente ",e.jsx(n.code,{children:"Modal"}),"."]}),`
`,e.jsx(o,{of:b}),`
`,e.jsx(n.h4,{id:"codice-8",children:"Codice"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [isOpen, toggleModal] = useState(false);\r
\r
return (\r
  <div>\r
    <Button color='primary' onClick={() => toggleModal(!isOpen)}>\r
      Lancia modale con contenuto scrollabile\r
    </Button>\r
    <Modal isOpen={isOpen} toggle={() => toggleModal(!isOpen)} scrollable labelledBy='esempio8'>\r
      <ModalHeader id='esempio8'>INTESTAZIONE MODALE</ModalHeader>\r
      <ModalBody>\r
        <p>\r
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\r
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\r
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\r
          est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\r
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore\r
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\r
          mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\r
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\r
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit\r
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\r
          officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse\r
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\r
          officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\r
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\r
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate\r
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\r
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing\r
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\r
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\r
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\r
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,\r
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\r
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute\r
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\r
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute\r
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\r
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r
        </p>\r
      </ModalBody>\r
      <ModalFooter>\r
        <Button color='primary' outline onClick={() => toggleModal(!isOpen)} size='sm'>\r
          Chiudi\r
        </Button>\r
        <Button color='primary' onClick={() => toggleModal(!isOpen)} size='sm'>\r
          Azione Uno\r
        </Button>\r
      </ModalFooter>\r
    </Modal>\r
  </div>\r
);
`})}),`
`,e.jsx(n.h3,{id:"posizionamento",children:"Posizionamento"}),`
`,e.jsx(n.h4,{id:"centratura-verticale",children:"Centratura verticale"}),`
`,e.jsxs(n.p,{children:["Aggiungi l'attributo ",e.jsx(n.code,{children:"centered"})," al componente ",e.jsx(n.code,{children:"Modal"})," per centrare verticalmente la modale."]}),`
`,e.jsx(o,{of:v}),`
`,e.jsx(n.h4,{id:"codice-9",children:"Codice"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [isOpen, toggleModal] = useState(false);\r
\r
return (\r
  <div>\r
    <Button color='primary' onClick={() => toggleModal(!isOpen)}>\r
      Lancia la demo della modale\r
    </Button>\r
    <Modal isOpen={isOpen} toggle={() => toggleModal(!isOpen)} centered labelledBy='esempio9'>\r
      <ModalHeader toggle={() => toggleModal(!isOpen)} id='essempio9'>\r
        Titolo della modale\r
      </ModalHeader>\r
      <ModalBody>\r
        <p>Woohoo, stai leggendo questo testo in una modale!</p>\r
      </ModalBody>\r
      <ModalFooter>\r
        <Button color='secondary' onClick={() => toggleModal(!isOpen)}>\r
          Chiudi\r
        </Button>\r
        <Button color='primary' onClick={() => toggleModal(!isOpen)}>\r
          Salva modifiche\r
        </Button>\r
      </ModalFooter>\r
    </Modal>\r
  </div>\r
);
`})}),`
`,e.jsx(n.h4,{id:"allineamento-a-sinistra",children:"Allineamento a sinistra"}),`
`,e.jsxs(n.p,{children:["Per aprire la modale da sinistra a destra aggiungere l'attributo ",e.jsx(n.code,{children:"align"})," con valore ",e.jsx(n.code,{children:'"left"'})," al componente ",e.jsx(n.code,{children:"Modal"}),"."]}),`
`,e.jsx(o,{of:j}),`
`,e.jsx(n.h4,{id:"codice-10",children:"Codice"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [isOpen, toggleModal] = useState(false);\r
\r
return (\r
  <div>\r
    <Button color='primary' onClick={() => toggleModal(!isOpen)}>\r
      Lancia la demo della modale a sinistra\r
    </Button>\r
    <Modal isOpen={isOpen} toggle={() => toggleModal(!isOpen)} align='left' scrollable labelledBy='esempio10'>\r
      <ModalHeader toggle={() => toggleModal(!isOpen)} id='esempio10'>\r
        This is a notification message\r
      </ModalHeader>\r
      <ModalBody>\r
        <p>\r
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\r
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\r
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\r
          est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\r
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore\r
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\r
          mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\r
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\r
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit\r
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\r
          officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse\r
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\r
          officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\r
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\r
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate\r
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\r
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing\r
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\r
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\r
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\r
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,\r
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\r
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute\r
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\r
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute\r
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\r
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r
        </p>\r
      </ModalBody>\r
      <ModalFooter>\r
        <Button color='primary' onClick={() => toggleModal(!isOpen)}>\r
          Ok\r
        </Button>\r
      </ModalFooter>\r
    </Modal>\r
  </div>\r
);
`})}),`
`,e.jsx(n.h4,{id:"allineamento-a-destra",children:"Allineamento a destra"}),`
`,e.jsxs(n.p,{children:["Per aprire la modale da sinistra a destra aggiungere l'attributo ",e.jsx(n.code,{children:"align"})," con valore ",e.jsx(n.code,{children:'"left"'})," al componente ",e.jsx(n.code,{children:"Modal"}),"."]}),`
`,e.jsx(o,{of:B}),`
`,e.jsx(n.h4,{id:"codice-11",children:"Codice"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [isOpen, toggleModal] = useState(false);\r
\r
return (\r
  <div>\r
    <Button color='primary' onClick={() => toggleModal(!isOpen)}>\r
      Lancia la demo della modale a destra\r
    </Button>\r
    <Modal isOpen={isOpen} toggle={() => toggleModal(!isOpen)} align='right' scrollable labelledBy='esempio11'>\r
      <ModalHeader toggle={() => toggleModal(!isOpen)} id='esempio11'>\r
        This is a notification message\r
      </ModalHeader>\r
      <ModalBody>\r
        <p>\r
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\r
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\r
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\r
          est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\r
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore\r
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\r
          mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\r
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\r
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit\r
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\r
          officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse\r
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\r
          officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\r
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\r
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate\r
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\r
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing\r
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\r
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\r
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\r
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,\r
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\r
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute\r
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\r
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute\r
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\r
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r
        </p>\r
      </ModalBody>\r
      <ModalFooter>\r
        <Button color='primary' onClick={() => toggleModal(!isOpen)}>\r
          Ok\r
        </Button>\r
      </ModalFooter>\r
    </Modal>\r
  </div>\r
);
`})}),`
`,e.jsx(n.h3,{id:"rimuovere-lanimazione",children:"Rimuovere l’animazione"}),`
`,e.jsxs(n.p,{children:["Per avere modali che appaiono semplicemente senza dissolvenza, imposta l'attributo ",e.jsx(n.code,{children:"fade"})," a ",e.jsx(n.code,{children:"false"})," nel componente ",e.jsx(n.code,{children:"Modal"}),"."]}),`
`,e.jsx(o,{of:q}),`
`,e.jsx(n.h4,{id:"codice-12",children:"Codice"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [isOpen, toggleModal] = useState(false);\r
\r
return (\r
  <div>\r
    <Button color='primary' onClick={() => toggleModal(!isOpen)}>\r
      Lancia la demo della modale\r
    </Button>\r
    <Modal isOpen={isOpen} toggle={() => toggleModal(!isOpen)} fade={false} labelledBy='esempio12'>\r
      <ModalHeader toggle={() => toggleModal(!isOpen)} id='esempio12'>\r
        Titolo della modale\r
      </ModalHeader>\r
      <ModalBody>\r
        <p>Woohoo, stai leggendo questo testo in una modale!</p>\r
      </ModalBody>\r
      <ModalFooter>\r
        <Button color='secondary' onClick={() => toggleModal(!isOpen)}>\r
          Chiudi\r
        </Button>\r
        <Button color='primary' onClick={() => toggleModal(!isOpen)}>\r
          Salva modifiche\r
        </Button>\r
      </ModalFooter>\r
    </Modal>\r
  </div>\r
);
`})}),`
`,e.jsx(n.h3,{id:"dimensioni-opzionali",children:"Dimensioni opzionali"}),`
`,e.jsxs(n.p,{children:["Le modali hanno due dimensioni opzionali, disponibili tramite l'attributo ",e.jsx(n.code,{children:"size"})," del componente ",e.jsx(n.code,{children:"Modal"}),". Queste dimensioni entrano in gioco in determinati breakpoint per evitare barre di scorrimento orizzontali su finestre più strette."]}),`
`,e.jsx(o,{of:O}),`
`,e.jsx(n.h4,{id:"codice-13",children:"Codice"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [isOpen, toggleModal] = useState(false);\r
const [size, setSize] = useState('');\r
\r
return (\r
  <div>\r
    <div>\r
      <Button\r
        color='primary'\r
        onClick={() => {\r
          setSize('lg');\r
          toggleModal(true);\r
        }}\r
        className='me-3'\r
      >\r
        Modale grande\r
      </Button>\r
      <Button\r
        color='primary'\r
        onClick={() => {\r
          setSize('sm');\r
          toggleModal(true);\r
        }}\r
      >\r
        Modale piccola\r
      </Button>\r
    </div>\r
    <Modal isOpen={isOpen} toggle={() => toggleModal(!isOpen)} size={size} labelledBy='esempio13'>\r
      <ModalHeader toggle={() => toggleModal(!isOpen)} id='esempio13'>\r
        Titolo della modale\r
      </ModalHeader>\r
      <ModalBody>\r
        <p>Woohoo, stai leggendo questo testo in una modale!</p>\r
      </ModalBody>\r
      <ModalFooter>\r
        <Button color='secondary' onClick={() => toggleModal(!isOpen)}>\r
          Chiudi\r
        </Button>\r
        <Button color='primary' onClick={() => toggleModal(!isOpen)}>\r
          Salva modifiche\r
        </Button>\r
      </ModalFooter>\r
    </Modal>\r
  </div>\r
);
`})}),`
`,e.jsx(n.h2,{id:"argomenti-componente",children:"Argomenti componente"}),`
`,e.jsx(n.h3,{id:"modal",children:"Modal"}),`
`,e.jsx(a,{of:C}),`
`,e.jsx(n.h3,{id:"modalheader",children:"ModalHeader"}),`
`,e.jsx(a,{of:y}),`
`,e.jsx(n.h3,{id:"modalbody",children:"ModalBody"}),`
`,e.jsx(a,{of:L}),`
`,e.jsx(n.h3,{id:"modalfooter",children:"ModalFooter"}),`
`,e.jsx(a,{of:k})]})}function le(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(l,{...i})}):l(i)}export{le as default};
