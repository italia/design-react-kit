import{j as n}from"./jsx-runtime-DezihaCc.js";import{useMDXComponents as s}from"./index-BtoTqJlz.js";import{M as t,d as i,A as a}from"./index-DQ1boyZV.js";import{M as l,C as m,a as c,b as p,c as g,d as L,e as d}from"./Megamenu.stories-kiR7YNh2.js";import{M as h,a as u}from"./MegamenuItem-D6UUeD9Y.js";import"./index-BFWcBMrj.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-d7HZv50p.js";import"../sb-preview/runtime.js";import"./index-qAjVnZy2.js";import"./index-DKz4l_X4.js";import"./index-B_J8iUie.js";import"./inheritsLoose-B7h9gheN.js";import"./index-DLle_QMf.js";import"./index-DrFu-skq.js";import"./Navbar-DLvLIaZ0.js";import"./index-D3ylJrlI.js";import"./index-Bl6ORisp.js";import"./utils-CUovxYU2.js";import"./Col-CzbmXXhQ.js";import"./NavbarBrand-DSeOht-B.js";import"./NavbarToggler-V5kq2vQO.js";import"./Icon-Dn2FEDq_.js";import"./Collapse-BQdlK8Xy.js";import"./Transition-GxAQdkDD.js";import"./Nav-CsW7vhYc.js";import"./LinkListItem-CJpjZu_u.js";import"./DropdownToggle-BdTyHQJO.js";import"./popper-BAn7w8_p.js";import"./Button-BvsBu0Bj.js";import"./Button-Cn4Lrs6w.js";import"./DropdownMenu-B_Gh5UIE.js";function o(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...s(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:l}),`
`,n.jsx(r.h1,{id:"megamenu",children:"Megamenu"}),`
`,n.jsx(r.h2,{id:"presenta-un-sottomenu-contenente-elenchi-di-links-relativo-ad-una-voce-della-navbar",children:"Presenta un sottomenu contenente elenchi di links relativo ad una voce della navbar."}),`
`,n.jsxs(r.p,{children:["Il megamenu all'interno del nav è una variazione del componente ",n.jsx(r.a,{href:"?path=/docs/documentazione-componenti-dropdown--documentazione",children:"Dropdown"}),`.\r
Gli elementi megamenu contenuti nelle navbar sono gestiti come elementi di tipo `,n.jsx(r.strong,{children:"collapse"})," nella loro versione mobile."]}),`
`,n.jsx(r.h3,{id:"megamenu-con-immagine-e-descrizione",children:"Megamenu con immagine e descrizione"}),`
`,n.jsx(r.p,{children:"Possiamo inserire a sinistra del megamenu un'immagine ed una descrizione riguardante la sezione."}),`
`,n.jsxs(r.p,{children:["Esattamente come con le ",n.jsx(r.em,{children:"call to action"}),", inseriremo il contenuto all'interno del componente ",n.jsx(r.code,{children:"MegamenuHighlightColumn"}),", avendo cura di aggiungere la props ",n.jsx(r.code,{children:"description"})]}),`
`,n.jsx(i,{of:m}),`
`,n.jsx(r.h4,{id:"codice",children:"Codice"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-tsx",children:`const [openNav, setOpenNav] = useState(false);\r
const toggle = () => {\r
  setOpenNav(!openNav);\r
};\r
return (\r
  <Navbar expand='lg' className='has-megamenu'>\r
    <NavbarBrand />\r
    <NavbarToggler className='custom-navbar-toggler' onClick={toggle}>\r
      <Icon icon='it-list' size='sm' />\r
    </NavbarToggler>\r
    <Collapse isOpen={openNav} navbar header megamenu>\r
      <Nav className='mt-0' navbar>\r
        <MegamenuItem itemName='Megamenu con Immagine e Descrizione'>\r
          <Row>\r
            <MegamenuHighlightColumn xs='12' lg='4' description>\r
              <div className='ratio ratio-21x9 lightgrey-bg-a1 mb-4 rounded'>\r
                <figure className='figure'>\r
                  <img\r
                    src='https://via.placeholder.com/560x240/ebebeb/808080/?text=Immagine'\r
                    className='figure-img img-fluid rounded'\r
                    alt='Segnaposto'\r
                  />\r
                </figure>\r
              </div>\r
              <p>Omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>\r
            </MegamenuHighlightColumn>\r
            <Col xs='12' lg='8'>\r
              <div className='it-heading-link-wrapper'>\r
                <a className='it-heading-link' href='#'>\r
                  <Icon className='icon icon-sm me-2 mb-1' icon='it-arrow-right-triangle'></Icon>\r
                  <span>Esplora la sezione megamenu</span>\r
                </a>\r
              </div>\r
              <Row>\r
                <Col xs='12' lg='6'>\r
                  <LinkList>\r
                    <LinkListItem inDropdown href='#'>\r
                      <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                      <span>Link lista 1</span>\r
                    </LinkListItem>\r
                    <LinkListItem inDropdown href='#'>\r
                      <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                      <span>Link lista 2</span>\r
                    </LinkListItem>\r
                    <LinkListItem inDropdown href='#'>\r
                      <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                      <span>Link lista 3</span>\r
                    </LinkListItem>\r
                  </LinkList>\r
                </Col>\r
                <Col xs='12' lg='6'>\r
                  <LinkList>\r
                    <LinkListItem inDropdown href='#'>\r
                      <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                      <span>Link lista 4</span>\r
                    </LinkListItem>\r
                    <LinkListItem inDropdown href='#'>\r
                      <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                      <span>Link lista 5</span>\r
                    </LinkListItem>\r
                    <LinkListItem inDropdown href='#'>\r
                      <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                      <span>Link lista 6</span>\r
                    </LinkListItem>\r
                  </LinkList>\r
                </Col>\r
              </Row>\r
            </Col>\r
          </Row>\r
        </MegamenuItem>\r
      </Nav>\r
    </Collapse>\r
  </Navbar>\r
);
`})}),`
`,n.jsx(r.h4,{id:"con-link-more",children:'Con link "more"'}),`
`,n.jsx(r.p,{children:"Il megamenu può contenere un link relativo agli elenchi in esso contenuti."}),`
`,n.jsxs(r.p,{children:["Qualora i link mostrati nel megamenu non siano tutti quelli relativi alla voce primaria (perché troppi numerosi), si può includere l'elemento con classe ",n.jsx(r.code,{children:".it-external"})," subito dopo l'elemento ",n.jsx(r.code,{children:"Row"}),` che contiene le liste di link.\r
La struttura colonnare dell'elemento con classe `,n.jsx(r.code,{children:".it-external"})," dev'essere la stessa di quella contentente le liste di link."]}),`
`,n.jsxs(r.p,{children:[`All'interno dell'ultima colonna andremo ad inserire la lista di link contenente il link che porterà ad un'eventuale pagine in cui sarà mostrato tutto il contenuto di sezione.\r
Per stilare correttamente il link è sufficiente aggiungere la classe `,n.jsx(r.code,{children:".it-more"})," a un elemento con tag ",n.jsx(r.code,{children:"li"})," che lo contiene."]}),`
`,n.jsx(i,{of:c}),`
`,n.jsx(r.h4,{id:"codice-1",children:"Codice"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-tsx",children:`const [openNav, setOpenNav] = useState(false);\r
const toggle = () => {\r
  setOpenNav(!openNav);\r
};\r
return (\r
  <Navbar expand='lg' className='has-megamenu'>\r
    <NavbarBrand />\r
    <NavbarToggler className='custom-navbar-toggler' onClick={toggle}>\r
      <Icon icon='it-list' size='sm' />\r
    </NavbarToggler>\r
    <Collapse isOpen={openNav} navbar header megamenu>\r
      <Nav className='mt-0' navbar>\r
        <MegamenuItem itemName='Megamenu con link "Esplora tutti"'>\r
          <Row>\r
            <Col xs='12' lg='4'>\r
              <LinkList>\r
                <LinkListItem inDropdown href='#'>\r
                  <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                  <span>Link lista 1</span>\r
                </LinkListItem>\r
                <LinkListItem inDropdown href='#'>\r
                  <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                  <span>Link lista 2</span>\r
                </LinkListItem>\r
                <LinkListItem inDropdown href='#'>\r
                  <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                  <span>Link lista 3</span>\r
                </LinkListItem>\r
              </LinkList>\r
            </Col>\r
            <Col xs='12' lg='4'>\r
              <LinkList>\r
                <LinkListItem inDropdown href='#'>\r
                  <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                  <span>Link lista 4</span>\r
                </LinkListItem>\r
                <LinkListItem inDropdown href='#'>\r
                  <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                  <span>Link lista 5</span>\r
                </LinkListItem>\r
                <LinkListItem inDropdown href='#'>\r
                  <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                  <span>Link lista 6</span>\r
                </LinkListItem>\r
              </LinkList>\r
            </Col>\r
            <Col xs='12' lg='4'>\r
              <LinkList>\r
                <LinkListItem inDropdown href='#'>\r
                  <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                  <span>Link lista 7</span>\r
                </LinkListItem>\r
                <LinkListItem inDropdown href='#'>\r
                  <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                  <span>Link lista 8</span>\r
                </LinkListItem>\r
                <LinkListItem inDropdown href='#'>\r
                  <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                  <span>Link lista 9</span>\r
                </LinkListItem>\r
              </LinkList>\r
            </Col>\r
          </Row>\r
          <MegamenuFooter className='text-end'>\r
            <MegamenuFooter.Item href='#'>\r
              <span>\r
                Esplora tutti i contenuti del megamenu{' '}\r
                <Icon className='ms-2' color='primary' icon='it-arrow-right' size='sm' />\r
              </span>\r
            </MegamenuFooter.Item>\r
          </MegamenuFooter>\r
        </MegamenuItem>\r
      </Nav>\r
    </Collapse>\r
  </Navbar>\r
);
`})}),`
`,n.jsx(r.h4,{id:"classico-con-intestazione-e-link-more",children:'Classico con Intestazione e link "more"'}),`
`,n.jsx(r.p,{children:'Si possono combinare header e link "more".'}),`
`,n.jsxs(r.p,{children:[`Nell'esempio di seguito, il link "more" è relativo alla sola colonna in cui è inserito. Per aggiungere un link "more" è sufficiente aggiungere la classe `,n.jsx(r.code,{children:".it-more"})," all'elemento con tag ",n.jsx(r.code,{children:"li"})," al fondo della lista relativa."]}),`
`,n.jsx(i,{of:p}),`
`,n.jsx(r.h4,{id:"codice-2",children:"Codice"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-tsx",children:`const [openNav, setOpenNav] = useState(false);\r
const toggle = () => {\r
  setOpenNav(!openNav);\r
};\r
return (\r
  <Navbar expand='lg' className='has-megamenu'>\r
    <NavbarBrand />\r
    <NavbarToggler className='custom-navbar-toggler' onClick={toggle}>\r
      <Icon icon='it-list' size='sm' />\r
    </NavbarToggler>\r
    <Collapse isOpen={openNav} navbar header megamenu>\r
      <Nav className='mt-0' navbar>\r
        <MegamenuItem itemName='Megamenu con intestazione e "esplora tutti"'>\r
          <Row>\r
            <Col xs='12'>\r
              <div className='it-heading-link-wrapper'>\r
                <a className='it-heading-link' href='#'>\r
                  <Icon className='me-2 mb-1' icon='it-arrow-right-triangle'></Icon>\r
                  <span>Esplora la sezione megamenu</span>\r
                </a>\r
              </div>\r
              <Row>\r
                <Col xs='12' lg='4'>\r
                  <LinkList>\r
                    <LinkListItem inDropdown href='#'>\r
                      <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                      <span>Link lista 1</span>\r
                    </LinkListItem>\r
                    <LinkListItem inDropdown href='#'>\r
                      <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                      <span>Link lista 2</span>\r
                    </LinkListItem>\r
                    <LinkListItem inDropdown href='#'>\r
                      <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                      <span>Link lista 3</span>\r
                    </LinkListItem>\r
                  </LinkList>\r
                </Col>\r
                <Col xs='12' lg='4'>\r
                  <LinkList>\r
                    <LinkListItem inDropdown href='#'>\r
                      <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                      <span>Link lista 4</span>\r
                    </LinkListItem>\r
                    <LinkListItem inDropdown href='#'>\r
                      <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                      <span>Link lista 5</span>\r
                    </LinkListItem>\r
                    <LinkListItem inDropdown href='#'>\r
                      <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                      <span>Link lista 6</span>\r
                    </LinkListItem>\r
                  </LinkList>\r
                </Col>\r
                <Col xs='12' lg='4'>\r
                  <LinkList>\r
                    <LinkListItem inDropdown href='#'>\r
                      <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                      <span>Link lista 7</span>\r
                    </LinkListItem>\r
                    <LinkListItem inDropdown href='#'>\r
                      <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                      <span>Link lista 8</span>\r
                    </LinkListItem>\r
                    <LinkListItem inDropdown href='#'>\r
                      <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                      <span>Link lista 9</span>\r
                    </LinkListItem>\r
                  </LinkList>\r
                </Col>\r
              </Row>\r
            </Col>\r
          </Row>\r
        </MegamenuItem>\r
      </Nav>\r
    </Collapse>\r
  </Navbar>\r
);
`})}),`
`,n.jsx(r.h3,{id:"megamenu-con-call-to-action",children:"Megamenu con call to action"}),`
`,n.jsx(r.p,{children:"I megamenu possono contenere delle liste di call to action che possono essere posizionate in fondo o a sinistra del megamenu."}),`
`,n.jsx(r.h4,{id:"call-to-action-in-basso",children:"Call to action in basso"}),`
`,n.jsxs(r.p,{children:["Per aggiungere un elenco di ",n.jsx(r.em,{children:"call to cation"})," è sufficiente inserirle all'interno del componente ",n.jsx(r.code,{children:"MegamenuFooter"}),"."]}),`
`,n.jsx(i,{of:g}),`
`,n.jsx(r.h4,{id:"codice-3",children:"Codice"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-tsx",children:`const [openNav, setOpenNav] = useState(false);\r
const toggle = () => {\r
  setOpenNav(!openNav);\r
};\r
return (\r
  <Navbar expand='lg' className='has-megamenu'>\r
    <NavbarBrand />\r
    <NavbarToggler className='custom-navbar-toggler' onClick={toggle}>\r
      <Icon icon='it-list' size='sm' />\r
    </NavbarToggler>\r
    <Collapse isOpen={openNav} navbar header megamenu>\r
      <Nav className='mt-0' navbar>\r
        <MegamenuItem itemName='Megamenu con Call to Action in basso'>\r
          <Row>\r
            <Col xs='12' lg='4'>\r
              <LinkList>\r
                <LinkListItem inDropdown href='#'>\r
                  <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                  <span>Link lista 1</span>\r
                </LinkListItem>\r
                <LinkListItem inDropdown href='#'>\r
                  <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                  <span>Link lista 2</span>\r
                </LinkListItem>\r
                <LinkListItem inDropdown href='#'>\r
                  <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                  <span>Link lista 3</span>\r
                </LinkListItem>\r
              </LinkList>\r
            </Col>\r
            <Col xs='12' lg='4'>\r
              <LinkList>\r
                <LinkListItem inDropdown href='#'>\r
                  <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                  <span>Link lista 4</span>\r
                </LinkListItem>\r
                <LinkListItem inDropdown href='#'>\r
                  <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                  <span>Link lista 5</span>\r
                </LinkListItem>\r
                <LinkListItem inDropdown href='#'>\r
                  <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                  <span>Link lista 6</span>\r
                </LinkListItem>\r
              </LinkList>\r
            </Col>\r
            <Col xs='12' lg='4'>\r
              <LinkList>\r
                <LinkListItem inDropdown href='#'>\r
                  <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                  <span>Link lista 7</span>\r
                </LinkListItem>\r
                <LinkListItem inDropdown href='#'>\r
                  <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                  <span>Link lista 8</span>\r
                </LinkListItem>\r
                <LinkListItem inDropdown href='#'>\r
                  <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                  <span>Link lista 9</span>\r
                </LinkListItem>\r
              </LinkList>\r
            </Col>\r
          </Row>\r
          <MegamenuFooter>\r
            <div className='d-flex flex-column flex-lg-row justify-content-around'>\r
              <MegamenuFooter.Item href='#'>\r
                <Icon className='me-2' color='primary' icon='it-bookmark' size='sm' />\r
                <span>Call to action 1</span>\r
              </MegamenuFooter.Item>\r
              <MegamenuFooter.Item href='#'>\r
                <Icon className='me-2' color='primary' icon='it-bookmark' size='sm' />\r
                <span>Call to action 2</span>\r
              </MegamenuFooter.Item>\r
            </div>\r
          </MegamenuFooter>\r
        </MegamenuItem>\r
      </Nav>\r
    </Collapse>\r
  </Navbar>\r
);
`})}),`
`,n.jsx(r.h4,{id:"call-to-action-a-destra",children:"Call to action a destra"}),`
`,n.jsxs(r.p,{children:["Per aggiungere un elenco di ",n.jsx(r.em,{children:"call to action"})," posizionato a destra, inseriremo tale lista di link particolare all'interno del componente ",n.jsx(r.code,{children:"MegamenuHighlightColumn"}),"."]}),`
`,n.jsx(i,{of:L}),`
`,n.jsx(r.h4,{id:"codice-4",children:"Codice"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-tsx",children:`const [openNav, setOpenNav] = useState(false);\r
const toggle = () => {\r
  setOpenNav(!openNav);\r
};\r
return (\r
  <Navbar expand='lg' className='has-megamenu'>\r
    <NavbarBrand />\r
    <NavbarToggler className='custom-navbar-toggler' onClick={toggle}>\r
      <Icon icon='it-list' size='sm' />\r
    </NavbarToggler>\r
    <Collapse isOpen={openNav} navbar header megamenu>\r
      <Nav className='mt-0' navbar>\r
        <MegamenuItem itemName='Megamenu con Call to Action a destra'>\r
          <Row>\r
            <Col xs='12' lg='8'>\r
              <Row>\r
                <Col xs='12' lg='6'>\r
                  <LinkList>\r
                    <LinkListItem inDropdown href='#'>\r
                      <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                      <span>Link lista 1</span>\r
                    </LinkListItem>\r
                    <LinkListItem inDropdown href='#'>\r
                      <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                      <span>Link lista 2</span>\r
                    </LinkListItem>\r
                    <LinkListItem inDropdown href='#'>\r
                      <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                      <span>Link lista 3</span>\r
                    </LinkListItem>\r
                  </LinkList>\r
                </Col>\r
                <Col xs='12' lg='6'>\r
                  <LinkList>\r
                    <LinkListItem inDropdown href='#'>\r
                      <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                      <span>Link lista 1</span>\r
                    </LinkListItem>\r
                    <LinkListItem inDropdown href='#'>\r
                      <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                      <span>Link lista 2</span>\r
                    </LinkListItem>\r
                    <LinkListItem inDropdown href='#'>\r
                      <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\r
                      <span>Link lista 3</span>\r
                    </LinkListItem>\r
                  </LinkList>\r
                </Col>\r
              </Row>\r
            </Col>\r
            <Col xs='12' lg='4'>\r
              <MegamenuFooter vertical>\r
                <div className='d-flex flex-column justify-content-around'>\r
                  <MegamenuFooter.Item href='#'>\r
                    <Icon className='me-2' color='primary' icon='it-bookmark' size='sm' />\r
                    <span>Call to action 1</span>\r
                  </MegamenuFooter.Item>\r
                  <MegamenuFooter.Item href='#'>\r
                    <Icon className='me-2' color='primary' icon='it-bookmark' size='sm' />\r
                    <span>Call to action 2</span>\r
                  </MegamenuFooter.Item>\r
                </div>\r
              </MegamenuFooter>\r
            </Col>\r
          </Row>\r
        </MegamenuItem>\r
      </Nav>\r
    </Collapse>\r
  </Navbar>\r
);
`})}),`
`,n.jsx(r.h2,{id:"argomenti-componente",children:"Argomenti componente"}),`
`,n.jsx(r.h3,{id:"megamenuitem",children:"MegamenuItem"}),`
`,n.jsx(a,{of:h}),`
`,n.jsx(r.h3,{id:"megamenufooter",children:"MegamenuFooter"}),`
`,n.jsx(a,{of:d}),`
`,n.jsx(r.h3,{id:"megamenuhighlightcolumn",children:"MegamenuHighlightColumn"}),`
`,n.jsxs(r.p,{children:["È un wrapper che utilizza come elemento principale ",n.jsx(r.code,{children:"Col"}),". Ne accetta quindi tutti gli attributi."]}),`
`,n.jsx(a,{of:u})]})}function V(e={}){const{wrapper:r}={...s(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(o,{...e})}):o(e)}export{V as default};
