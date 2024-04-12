import{j as e}from"./jsx-runtime-DezihaCc.js";import{useMDXComponents as u}from"./index-BtoTqJlz.js";import{M as l,d as r}from"./index-DQ1boyZV.js";import{N as m,P as o,a as c,C as p,b as d}from"./NavScroll.stories-B5HCrqgx.js";import{C as s,a as n}from"./CalloutText-C98nfp7D.js";import"./index-BFWcBMrj.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-d7HZv50p.js";import"../sb-preview/runtime.js";import"./index-qAjVnZy2.js";import"./index-DKz4l_X4.js";import"./index-B_J8iUie.js";import"./inheritsLoose-B7h9gheN.js";import"./index-DLle_QMf.js";import"./index-DrFu-skq.js";import"./Container-DxD9c0zF.js";import"./index-D3ylJrlI.js";import"./index-Bl6ORisp.js";import"./utils-CUovxYU2.js";import"./Col-CzbmXXhQ.js";import"./Navbar-DLvLIaZ0.js";import"./NavbarToggler-V5kq2vQO.js";import"./NavLink-CmI6voTO.js";import"./Collapse-BQdlK8Xy.js";import"./Transition-GxAQdkDD.js";import"./Icon-Dn2FEDq_.js";import"./LinkListItem-CJpjZu_u.js";function t(i){const a={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...u(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:m}),`
`,e.jsx(a.h1,{id:"navscroll",children:"Navscroll"}),`
`,e.jsx(a.h2,{id:"layout-della-navscroll",children:"Layout della Navscroll"}),`
`,e.jsxs(a.p,{children:["La composizione delle componenti ",e.jsx(a.code,{children:"Navbar"})," e ",e.jsx(a.code,{children:"LinkList"}),", oltre all'utilizzo dell'hook React ",e.jsx(a.code,{children:"useNavScroll"}),", rendono possibile la creazione di un componente ",e.jsx(a.code,{children:"Navscroll"}),`.\r
Nella sua versione mobile, la navigazione viene collassata all'interno di un menù, posizionabile a inizio o fine pagina.`]}),`
`,e.jsx("div",{className:"docs",children:e.jsx(s,{color:"info",children:e.jsxs(n,{children:[e.jsxs(a.p,{children:["L'hook ",e.jsx("code",{children:"useNavScroll"})," utilizza l'API native ",e.jsx("code",{children:"IntersectionObserver"}),` supportata da browser\r
moderni. Qualora il browser richiesto non lo supportasse (ad esempio Internet Explorer 11) è possibile utilizzare`]}),e.jsx("a",{href:"https://github.com/w3c/IntersectionObserver/tree/main/polyfill",target:"_blank",rel:"noopener noreferrer",children:e.jsx(a.p,{children:"una libreria polyfill."})})]})})}),`
`,e.jsxs(a.p,{children:["Per posizionare tale menù in alto, è sufficiente aggiungere al componente ",e.jsx(a.code,{children:"Navbar"})," la classe ",e.jsx(a.code,{children:".it-top-navscroll"}),". Al contrario, per posizionare il menù in basso, è sufficiente aggiungere la classe ",e.jsx(a.code,{children:".it-bottom-navscroll"}),"."]}),`
`,e.jsxs(a.p,{children:["La Navscroll può avere una linea-separatore a destra o a sinistra dell’elemento, semplicemente aggiungendo al componente ",e.jsx(a.code,{children:"Navbar"})," la classe ",e.jsx(a.code,{children:".it-left-side"})," per aggiungere una linea a sinistra, e ",e.jsx(a.code,{children:".it-right-side"})," per aggiungerla a destra."]}),`
`,e.jsx("div",{className:"docs",children:e.jsx(s,{color:"info",children:e.jsx(n,{children:e.jsxs(a.p,{children:["Ogni link all’interno della Navscroll contiene l’attributo ",e.jsx("code",{children:"href"}),` con il valore dell’id relativo\r
all’elemento correlato in pagina:\r
`,e.jsx("code",{children:'href="#idElemento"'}),"."]})})})}),`
`,e.jsx(a.h3,{id:"posizionamento-a-fondo-pagina-con-linea-a-sinistra",children:"Posizionamento a fondo pagina con linea a sinistra"}),`
`,e.jsx(a.p,{children:"In questo esempio, la linea che limita la barra di navigazione è posizionata a sinistra. Su dispositivi con schermi a dimensione inferiore a 992px, la barra che permette di aprire la navigazione si sposterà in basso nella pagina."}),`
`,e.jsx(r,{of:o}),`
`,e.jsx(a.h4,{id:"codice",children:"Codice"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-tsx",children:`const [isOpen, toggleNavScroll] = useState(false);\r
/* Richiesto per contenuto confinato */\r
/* Nota che i componenti Col e Row non inoltrano le ref, \r
      /* usare quindi tag div con classi css come nell'esempio */\r
const containerRef = useRef(null);\r
const { register, isActive, getActiveRef } = useNavScroll({\r
  root: containerRef.current || undefined\r
});\r
\r
const getActiveClass = (id: string) => (isActive(id) ? 'active' : undefined);\r
return (\r
  <Container>\r
    <Row>\r
      <Col md={12} lg={4}>\r
        <Navbar expand='lg' className='it-navscroll-wrapper it-bottom-navscroll it-left-side affix-top'>\r
          <NavbarToggler\r
            className={isOpen ? 'custom-navbar-toggler focus--mouse' : 'custom-navbar-toggler'}\r
            data-target='#navbarNavA'\r
            onClick={() => toggleNavScroll(!isOpen)}\r
          >\r
            <span className='it-list'></span>\r
            {getActiveRef()?.current?.textContent}\r
          </NavbarToggler>\r
          <Collapse isOpen={isOpen} navbar id='navbarNavA'>\r
            <button\r
              className='it-back-button btn w-100 text-start'\r
              style={{ display: isOpen ? 'block' : 'none' }}\r
              onClick={() => toggleNavScroll(!isOpen)}\r
            >\r
              <Icon className='align-top' color='primary' icon='it-chevron-left' aria-hidden size='sm' />\r
              <span>Back </span>\r
            </button>\r
            <div className='menu-wrapper'>\r
              <div className='link-list-wrapper'>\r
                <h3>header</h3>\r
                <LinkList noWrapper>\r
                  <NavItem>\r
                    <NavLink href='#1' className={getActiveClass('1')}>\r
                      <span>1. Introduzione</span>\r
                    </NavLink>\r
                    <LinkList noWrapper>\r
                      <NavLink tag='li' className={getActiveClass('1_1')}>\r
                        <NavLink href='#1_1' className={getActiveClass('1_1')}>\r
                          <span>1.1 Nested Item</span>\r
                        </NavLink>\r
                        <LinkList className='tertiary' noWrapper>\r
                          <NavLink tag='li' className={getActiveClass('1_1_1')}>\r
                            <NavLink href='#1_1_1' className={getActiveClass('1_1_1')}>\r
                              <span>1.1.1 Nested Item</span>\r
                            </NavLink>\r
                          </NavLink>\r
                          <NavLink tag='li' className={getActiveClass('1_1_2')}>\r
                            <NavLink href='#1_1_2' className={getActiveClass('1_1_2')}>\r
                              <span>1.1.2 Nested Item</span>\r
                            </NavLink>\r
                          </NavLink>\r
                          <NavLink tag='li' className={getActiveClass('1_1_3')}>\r
                            <NavLink href='#1_1_3' className={getActiveClass('1_1_3')}>\r
                              <span>1.1.3 Nested Item</span>\r
                            </NavLink>\r
                          </NavLink>\r
                        </LinkList>\r
                      </NavLink>\r
                      <NavLink tag='li' className={getActiveClass('1_2')}>\r
                        <NavLink href='#1_2' className={getActiveClass('1_2')}>\r
                          <span>1.2 Nested Item</span>\r
                        </NavLink>\r
                      </NavLink>\r
                      <NavLink tag='li' className={getActiveClass('1_3')}>\r
                        <NavLink href='#1_3' className={getActiveClass('1_3')}>\r
                          <span>1.3 Nested Item</span>\r
                        </NavLink>\r
                      </NavLink>\r
                    </LinkList>\r
                  </NavItem>\r
                  <NavItem>\r
                    <NavLink href='#2' className={getActiveClass('2')}>\r
                      <span>2. List item</span>\r
                    </NavLink>\r
                    <LinkList noWrapper>\r
                      <NavLink active tag='li' className={getActiveClass('2_1')}>\r
                        <NavLink href='#2_1' className={getActiveClass('2_1')}>\r
                          <span>2.1 Nested Item</span>\r
                        </NavLink>\r
                        <LinkList className='tertiary' noWrapper>\r
                          <NavLink tag='li' className={getActiveClass('2_1_1')}>\r
                            <NavLink href='#2_1_1' className={getActiveClass('2_1_1')}>\r
                              <span>2.1.1 Nested Item</span>\r
                            </NavLink>\r
                          </NavLink>\r
                          <NavLink tag='li' className={getActiveClass('2_1_2')}>\r
                            <NavLink href='#2_1_2' className={getActiveClass('2_1_2')}>\r
                              <span>2.1.2 Nested Item</span>\r
                            </NavLink>\r
                          </NavLink>\r
                          <NavLink tag='li' className={getActiveClass('2_1_3')}>\r
                            <NavLink href='#2_1_3' className={getActiveClass('2_1_3')}>\r
                              <span>2.1.3 Nested Item</span>\r
                            </NavLink>\r
                          </NavLink>\r
                        </LinkList>\r
                      </NavLink>\r
                      <NavLink tag='li' className={getActiveClass('2_2')}>\r
                        <NavLink href='#2_2' className={getActiveClass('2_2')}>\r
                          <span>2.2 Nested Item</span>\r
                        </NavLink>\r
                      </NavLink>\r
                      <NavLink tag='li' className={getActiveClass('2_3')}>\r
                        <NavLink href='#2_3' className={getActiveClass('2_3')}>\r
                          <span>2.3 Nested Item</span>\r
                        </NavLink>\r
                      </NavLink>\r
                    </LinkList>\r
                  </NavItem>\r
                </LinkList>\r
              </div>\r
            </div>\r
          </Collapse>\r
        </Navbar>\r
      </Col>\r
      <div className='it-page-sections-container col-12 col-lg-8' ref={containerRef} style={getStorybookExtraStyles()}>\r
        <p>\r
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec congue eros. Maecenas sagittis commodo\r
          libero nec porta. Nunc semper velit venenatis ligula condimentum ultricies. In hac habitasse platea dictumst.\r
          In malesuada pharetra nulla, id aliquam metus egestas ut. Nulla sollicitudin cursus felis, eu sagittis ante\r
          porta id. Suspendisse pellentesque ex non sem tincidunt, aliquam rhoncus turpis maximus. Vivamus eget massa\r
          turpis. Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue, sodales ac rhoncus in,\r
          ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames\r
          ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel\r
          sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut\r
          quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod\r
          pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient\r
          montes, nascetur ridiculus mus. Integer feugiat et massa nec rhoncus. Morbi vitae metus et sapien suscipit\r
          mattis vitae ac ex. Proin pharetra, sem vitae varius malesuada, risus tortor sodales arcu, eu aliquam lorem\r
          libero vel urna. Aliquam massa lacus, faucibus quis urna ac, pharetra pretium ex. In facilisis urna non urna\r
          luctus, a bibendum tortor facilisis. Mauris sed risus justo. In et erat fermentum eros hendrerit tempor.\r
          Quisque accumsan magna ac risus ultricies, vel condimentum ipsum accumsan. Proin blandit mauris sed sodales\r
          sollicitudin.\r
        </p>\r
        <h2 className='it-page-section' {...register('1')}>\r
          Introduzione\r
        </h2>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue, sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
        <h3 className='it-page-section' {...register('1_1', { parent: '1' })}>\r
          Nested item 1.1\r
        </h3>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
        <h4 className='it-page-section' {...register('1_1_1', { parent: '1_1' })}>\r
          Nested item 1.1.1\r
        </h4>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
        <h4 className='it-page-section' {...register('1_1_2', { parent: '1_1' })}>\r
          Nested item 1.1.2\r
        </h4>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
        <h4 className='it-page-section' {...register('1_1_3', { parent: '1_1' })}>\r
          Nested item 1.1.3\r
        </h4>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
        <h3 className='it-page-section' {...register('1_2', { parent: '1' })}>\r
          Nested item 1.2\r
        </h3>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
        <h3 className='it-page-section' {...register('1_3', { parent: '1' })}>\r
          Nested item 1.3\r
        </h3>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
        <h2 className='it-page-section' {...register('2')}>\r
          Introduzione 2\r
        </h2>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
        <h3 className='it-page-section' {...register('2_1', { parent: '2' })}>\r
          Nested item 2.1\r
        </h3>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
        <h4 className='it-page-section' {...register('2_1_1', { parent: '2_1' })}>\r
          Nested item 2.1.1\r
        </h4>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
        <h4 className='it-page-section' {...register('2_1_2', { parent: '2_1' })}>\r
          Nested item 2.1.2\r
        </h4>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
        <h4 className='it-page-section' {...register('2_1_3', { parent: '2_1' })}>\r
          Nested item 2.1.3\r
        </h4>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
        <h3 className='it-page-section' {...register('2_2', { parent: '2' })}>\r
          Nested item 2.2\r
        </h3>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
        <h3 className='it-page-section' {...register('2_3', { parent: '2' })}>\r
          Nested item 2.3\r
        </h3>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
      </div>\r
    </Row>\r
  </Container>\r
);
`})}),`
`,e.jsx(a.h3,{id:"posizionamento-in-testa-alla-pagina-con-linea-a-destra",children:"Posizionamento in testa alla pagina con linea a destra"}),`
`,e.jsx(a.p,{children:"In questo esempio, la linea che limita la barra di navigazione è posizionata a destra. Su dispositivi con schermi a dimensione inferiore a 992px, la barra che permette di aprire la navigazione si sposterà in alto nella pagina."}),`
`,e.jsx(r,{of:c}),`
`,e.jsx(a.h4,{id:"codice-1",children:"Codice"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-tsx",children:`const [isOpen, toggleNavScroll] = useState(false);\r
/* Richiesto per contenuto confinato */\r
/* Nota che i componenti Col e Row non inoltrano le ref, \r
      /* usare quindi tag div con classi css come nell'esempio */\r
const containerRef = useRef(null);\r
const { register, isActive, getActiveRef } = useNavScroll({\r
  root: containerRef.current || undefined\r
});\r
\r
const getActiveClass = (id: string) => (isActive(id) ? 'active' : undefined);\r
return (\r
  <Container>\r
    <Row>\r
      <Col md={12} lg={4}>\r
        <Navbar expand='lg' className='it-navscroll-wrapper navbar-expand-lg it-top-navscroll it-right-side affix-top'>\r
          <NavbarToggler\r
            className={isOpen ? 'custom-navbar-toggler focus--mouse' : 'custom-navbar-toggler'}\r
            data-target='#navbarNavB'\r
            onClick={() => toggleNavScroll(!isOpen)}\r
          >\r
            <span className='it-list'></span>\r
            {getActiveRef()?.current?.textContent}\r
          </NavbarToggler>\r
          <Collapse isOpen={isOpen} navbar id='navbarNavB'>\r
            <button\r
              className='it-back-button btn w-100 text-start'\r
              style={{ display: isOpen ? 'block' : 'none' }}\r
              onClick={() => toggleNavScroll(!isOpen)}\r
            >\r
              <Icon className='align-top' color='primary' icon='it-chevron-left' aria-hidden size='sm' />\r
              <span>Back </span>\r
            </button>\r
            <div className='menu-wrapper'>\r
              <div className='link-list-wrapper'>\r
                <h3>header</h3>\r
                <LinkList noWrapper>\r
                  <NavItem>\r
                    <NavLink href='#1' className={getActiveClass('1')}>\r
                      <span>1. Introduzione</span>\r
                    </NavLink>\r
                    <LinkList noWrapper>\r
                      <NavLink tag='li' className={getActiveClass('1_1')}>\r
                        <NavLink href='#1_1' className={getActiveClass('1_1')}>\r
                          <span>1.1 Nested Item</span>\r
                        </NavLink>\r
                        <LinkList className='tertiary' noWrapper>\r
                          <NavLink tag='li' className={getActiveClass('1_1_1')}>\r
                            <NavLink href='#1_1_1' className={getActiveClass('1_1_1')}>\r
                              <span>1.1.1 Nested Item</span>\r
                            </NavLink>\r
                          </NavLink>\r
                          <NavLink tag='li' className={getActiveClass('1_1_2')}>\r
                            <NavLink href='#1_1_2' className={getActiveClass('1_1_2')}>\r
                              <span>1.1.2 Nested Item</span>\r
                            </NavLink>\r
                          </NavLink>\r
                          <NavLink tag='li' className={getActiveClass('1_1_3')}>\r
                            <NavLink href='#1_1_3' className={getActiveClass('1_1_3')}>\r
                              <span>1.1.3 Nested Item</span>\r
                            </NavLink>\r
                          </NavLink>\r
                        </LinkList>\r
                      </NavLink>\r
                      <NavLink tag='li' className={getActiveClass('1_2')}>\r
                        <NavLink href='#1_2' className={getActiveClass('1_2')}>\r
                          <span>1.2 Nested Item</span>\r
                        </NavLink>\r
                      </NavLink>\r
                      <NavLink tag='li' className={getActiveClass('1_3')}>\r
                        <NavLink href='#1_3' className={getActiveClass('1_3')}>\r
                          <span>1.3 Nested Item</span>\r
                        </NavLink>\r
                      </NavLink>\r
                    </LinkList>\r
                  </NavItem>\r
                  <NavItem>\r
                    <NavLink href='#2' className={getActiveClass('2')}>\r
                      <span>2. List item</span>\r
                    </NavLink>\r
                    <LinkList noWrapper>\r
                      <NavLink active tag='li' className={getActiveClass('2_1')}>\r
                        <NavLink href='#2_1' className={getActiveClass('2_1')}>\r
                          <span>2.1 Nested Item</span>\r
                        </NavLink>\r
                        <LinkList className='tertiary' noWrapper>\r
                          <NavLink tag='li' className={getActiveClass('2_1_1')}>\r
                            <NavLink href='#2_1_1' className={getActiveClass('2_1_1')}>\r
                              <span>2.1.1 Nested Item</span>\r
                            </NavLink>\r
                          </NavLink>\r
                          <NavLink tag='li' className={getActiveClass('2_1_2')}>\r
                            <NavLink href='#2_1_2' className={getActiveClass('2_1_2')}>\r
                              <span>2.1.2 Nested Item</span>\r
                            </NavLink>\r
                          </NavLink>\r
                          <NavLink tag='li' className={getActiveClass('2_1_3')}>\r
                            <NavLink href='#2_1_3' className={getActiveClass('2_1_3')}>\r
                              <span>2.1.3 Nested Item</span>\r
                            </NavLink>\r
                          </NavLink>\r
                        </LinkList>\r
                      </NavLink>\r
                      <NavLink tag='li' className={getActiveClass('2_2')}>\r
                        <NavLink href='#2_2' className={getActiveClass('2_2')}>\r
                          <span>2.2 Nested Item</span>\r
                        </NavLink>\r
                      </NavLink>\r
                      <NavLink tag='li' className={getActiveClass('2_3')}>\r
                        <NavLink href='#2_3' className={getActiveClass('2_3')}>\r
                          <span>2.3 Nested Item</span>\r
                        </NavLink>\r
                      </NavLink>\r
                    </LinkList>\r
                  </NavItem>\r
                </LinkList>\r
              </div>\r
            </div>\r
          </Collapse>\r
        </Navbar>\r
      </Col>\r
      <div className='it-page-sections-container col-12 col-lg-8' ref={containerRef} style={getStorybookExtraStyles()}>\r
        <p>\r
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec congue eros. Maecenas sagittis commodo\r
          libero nec porta. Nunc semper velit venenatis ligula condimentum ultricies. In hac habitasse platea dictumst.\r
          In malesuada pharetra nulla, id aliquam metus egestas ut. Nulla sollicitudin cursus felis, eu sagittis ante\r
          porta id. Suspendisse pellentesque ex non sem tincidunt, aliquam rhoncus turpis maximus. Vivamus eget massa\r
          turpis. Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue, sodales ac rhoncus in,\r
          ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames\r
          ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel\r
          sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut\r
          quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod\r
          pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient\r
          montes, nascetur ridiculus mus. Integer feugiat et massa nec rhoncus. Morbi vitae metus et sapien suscipit\r
          mattis vitae ac ex. Proin pharetra, sem vitae varius malesuada, risus tortor sodales arcu, eu aliquam lorem\r
          libero vel urna. Aliquam massa lacus, faucibus quis urna ac, pharetra pretium ex. In facilisis urna non urna\r
          luctus, a bibendum tortor facilisis. Mauris sed risus justo. In et erat fermentum eros hendrerit tempor.\r
          Quisque accumsan magna ac risus ultricies, vel condimentum ipsum accumsan. Proin blandit mauris sed sodales\r
          sollicitudin.\r
        </p>\r
        <h2 className='it-page-section' {...register('1')}>\r
          Introduzione\r
        </h2>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue, sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
        <h3 className='it-page-section' {...register('1_1', { parent: '1' })}>\r
          Nested item 1.1\r
        </h3>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
        <h4 className='it-page-section' {...register('1_1_1', { parent: '1_1' })}>\r
          Nested item 1.1.1\r
        </h4>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
        <h4 className='it-page-section' {...register('1_1_2', { parent: '1_1' })}>\r
          Nested item 1.1.2\r
        </h4>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
        <h4 className='it-page-section' {...register('1_1_3', { parent: '1_1' })}>\r
          Nested item 1.1.3\r
        </h4>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
        <h3 className='it-page-section' {...register('1_2', { parent: '1' })}>\r
          Nested item 1.2\r
        </h3>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
        <h3 className='it-page-section' {...register('1_3', { parent: '1' })}>\r
          Nested item 1.3\r
        </h3>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
        <h2 className='it-page-section' {...register('2')}>\r
          Introduzione 2\r
        </h2>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
        <h3 className='it-page-section' {...register('2_1', { parent: '2' })}>\r
          Nested item 2.1\r
        </h3>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
        <h4 className='it-page-section' {...register('2_1_1', { parent: '2_1' })}>\r
          Nested item 2.1.1\r
        </h4>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
        <h4 className='it-page-section' {...register('2_1_2', { parent: '2_1' })}>\r
          Nested item 2.1.2\r
        </h4>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
        <h4 className='it-page-section' {...register('2_1_3', { parent: '2_1' })}>\r
          Nested item 2.1.3\r
        </h4>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
        <h3 className='it-page-section' {...register('2_2', { parent: '2' })}>\r
          Nested item 2.2\r
        </h3>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
        <h3 className='it-page-section' {...register('2_3', { parent: '2' })}>\r
          Nested item 2.3\r
        </h3>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
      </div>\r
    </Row>\r
  </Container>\r
);
`})}),`
`,e.jsx(a.h3,{id:"variante-scura",children:"Variante scura"}),`
`,e.jsx(a.p,{children:"La Navscroll può avere due versioni, light e dark."}),`
`,e.jsx(a.p,{children:"Lo stile di default è di background bianco con testo di colore primario su desktop e mobile."}),`
`,e.jsx(a.h4,{id:"temi-navscroll",children:"Temi Navscroll"}),`
`,e.jsxs(a.p,{children:["Per cambiare il tema è sufficiente aggiungere le seguenti classi al componente ",e.jsx(a.code,{children:"Navbar"}),":"]}),`
`,e.jsxs(a.p,{children:[e.jsx(a.code,{children:".theme-dark-mobile"}),": background scuro, testi e links bianco. (modifica unicamente la versione mobile del Navscroll)."]}),`
`,e.jsxs(a.p,{children:[e.jsx(a.code,{children:".theme-dark-desktop"}),": background scuro, testi e links di colore bianco. (modifica unicamente la versione desktop del Navscroll)"]}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(a.h4,{id:"codice-2",children:"Codice"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-tsx",children:`const [isOpen, toggleNavScroll] = useState(false);\r
/* Richiesto per contenuto confinato */\r
/* Nota che i componenti Col e Row non inoltrano le ref, \r
      /* usare quindi tag div con classi css come nell'esempio */\r
const containerRef = useRef(null);\r
const { register, isActive, getActiveRef } = useNavScroll({\r
  root: containerRef.current || undefined\r
});\r
\r
const getActiveClass = (id: string) => (isActive(id) ? 'active' : undefined);\r
return (\r
  <Container>\r
    <Row>\r
      <Col md={12} lg={4}>\r
        <Navbar\r
          expand='lg'\r
          className='it-navscroll-wrapper navbar-expand-lg it-top-navscroll it-right-side affix-top theme-dark-desk theme-dark-mobile'\r
        >\r
          <NavbarToggler\r
            className={isOpen ? 'custom-navbar-toggler focus--mouse' : 'custom-navbar-toggler'}\r
            data-target='#navbarNavB'\r
            onClick={() => toggleNavScroll(!isOpen)}\r
          >\r
            <span className='it-list'></span>\r
            {getActiveRef()?.current?.textContent}\r
          </NavbarToggler>\r
          <Collapse isOpen={isOpen} navbar id='navbarNavB'>\r
            <button\r
              className='it-back-button btn w-100 text-start'\r
              style={{ display: isOpen ? 'block' : 'none' }}\r
              onClick={() => toggleNavScroll(!isOpen)}\r
            >\r
              <Icon className='align-top' color='primary' icon='it-chevron-left' aria-hidden size='sm' />\r
              <span>Back </span>\r
            </button>\r
            <div className='menu-wrapper'>\r
              <div className='link-list-wrapper'>\r
                <h3>header</h3>\r
                <LinkList noWrapper>\r
                  <NavItem>\r
                    <NavLink href='#1' className={getActiveClass('1')}>\r
                      <span>1. Introduzione</span>\r
                    </NavLink>\r
                    <LinkList noWrapper>\r
                      <NavLink tag='li' className={getActiveClass('1_1')}>\r
                        <NavLink href='#1_1' className={getActiveClass('1_1')}>\r
                          <span>1.1 Nested Item</span>\r
                        </NavLink>\r
                        <LinkList className='tertiary' noWrapper>\r
                          <NavLink tag='li' className={getActiveClass('1_1_1')}>\r
                            <NavLink href='#1_1_1' className={getActiveClass('1_1_1')}>\r
                              <span>1.1.1 Nested Item</span>\r
                            </NavLink>\r
                          </NavLink>\r
                          <NavLink tag='li' className={getActiveClass('1_1_2')}>\r
                            <NavLink href='#1_1_2' className={getActiveClass('1_1_2')}>\r
                              <span>1.1.2 Nested Item</span>\r
                            </NavLink>\r
                          </NavLink>\r
                          <NavLink tag='li' className={getActiveClass('1_1_3')}>\r
                            <NavLink href='#1_1_3' className={getActiveClass('1_1_3')}>\r
                              <span>1.1.3 Nested Item</span>\r
                            </NavLink>\r
                          </NavLink>\r
                        </LinkList>\r
                      </NavLink>\r
                      <NavLink tag='li' className={getActiveClass('1_2')}>\r
                        <NavLink href='#1_2' className={getActiveClass('1_2')}>\r
                          <span>1.2 Nested Item</span>\r
                        </NavLink>\r
                      </NavLink>\r
                      <NavLink tag='li' className={getActiveClass('1_3')}>\r
                        <NavLink href='#1_3' className={getActiveClass('1_3')}>\r
                          <span>1.3 Nested Item</span>\r
                        </NavLink>\r
                      </NavLink>\r
                    </LinkList>\r
                  </NavItem>\r
                  <NavItem>\r
                    <NavLink href='#2' className={getActiveClass('2')}>\r
                      <span>2. List item</span>\r
                    </NavLink>\r
                    <LinkList noWrapper>\r
                      <NavLink active tag='li' className={getActiveClass('2_1')}>\r
                        <NavLink href='#2_1' className={getActiveClass('2_1')}>\r
                          <span>2.1 Nested Item</span>\r
                        </NavLink>\r
                        <LinkList className='tertiary' noWrapper>\r
                          <NavLink tag='li' className={getActiveClass('2_1_1')}>\r
                            <NavLink href='#2_1_1' className={getActiveClass('2_1_1')}>\r
                              <span>2.1.1 Nested Item</span>\r
                            </NavLink>\r
                          </NavLink>\r
                          <NavLink tag='li' className={getActiveClass('2_1_2')}>\r
                            <NavLink href='#2_1_2' className={getActiveClass('2_1_2')}>\r
                              <span>2.1.2 Nested Item</span>\r
                            </NavLink>\r
                          </NavLink>\r
                          <NavLink tag='li' className={getActiveClass('2_1_3')}>\r
                            <NavLink href='#2_1_3' className={getActiveClass('2_1_3')}>\r
                              <span>2.1.3 Nested Item</span>\r
                            </NavLink>\r
                          </NavLink>\r
                        </LinkList>\r
                      </NavLink>\r
                      <NavLink tag='li' className={getActiveClass('2_2')}>\r
                        <NavLink href='#2_2' className={getActiveClass('2_2')}>\r
                          <span>2.2 Nested Item</span>\r
                        </NavLink>\r
                      </NavLink>\r
                      <NavLink tag='li' className={getActiveClass('2_3')}>\r
                        <NavLink href='#2_3' className={getActiveClass('2_3')}>\r
                          <span>2.3 Nested Item</span>\r
                        </NavLink>\r
                      </NavLink>\r
                    </LinkList>\r
                  </NavItem>\r
                </LinkList>\r
              </div>\r
            </div>\r
          </Collapse>\r
        </Navbar>\r
      </Col>\r
      <div className='it-page-sections-container col-12 col-lg-8' ref={containerRef} style={getStorybookExtraStyles()}>\r
        <p>\r
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec congue eros. Maecenas sagittis commodo\r
          libero nec porta. Nunc semper velit venenatis ligula condimentum ultricies. In hac habitasse platea dictumst.\r
          In malesuada pharetra nulla, id aliquam metus egestas ut. Nulla sollicitudin cursus felis, eu sagittis ante\r
          porta id. Suspendisse pellentesque ex non sem tincidunt, aliquam rhoncus turpis maximus. Vivamus eget massa\r
          turpis. Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue, sodales ac rhoncus in,\r
          ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames\r
          ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel\r
          sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut\r
          quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod\r
          pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient\r
          montes, nascetur ridiculus mus. Integer feugiat et massa nec rhoncus. Morbi vitae metus et sapien suscipit\r
          mattis vitae ac ex. Proin pharetra, sem vitae varius malesuada, risus tortor sodales arcu, eu aliquam lorem\r
          libero vel urna. Aliquam massa lacus, faucibus quis urna ac, pharetra pretium ex. In facilisis urna non urna\r
          luctus, a bibendum tortor facilisis. Mauris sed risus justo. In et erat fermentum eros hendrerit tempor.\r
          Quisque accumsan magna ac risus ultricies, vel condimentum ipsum accumsan. Proin blandit mauris sed sodales\r
          sollicitudin.\r
        </p>\r
        <h2 className='it-page-section' {...register('1')}>\r
          Introduzione\r
        </h2>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue, sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
        <h3 className='it-page-section' {...register('1_1', { parent: '1' })}>\r
          Nested item 1.1\r
        </h3>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
        <h4 className='it-page-section' {...register('1_1_1', { parent: '1_1' })}>\r
          Nested item 1.1.1\r
        </h4>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
        <h4 className='it-page-section' {...register('1_1_2', { parent: '1_1' })}>\r
          Nested item 1.1.2\r
        </h4>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
        <h4 className='it-page-section' {...register('1_1_3', { parent: '1_1' })}>\r
          Nested item 1.1.3\r
        </h4>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
        <h3 className='it-page-section' {...register('1_2', { parent: '1' })}>\r
          Nested item 1.2\r
        </h3>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
        <h3 className='it-page-section' {...register('1_3', { parent: '1' })}>\r
          Nested item 1.3\r
        </h3>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
        <h2 className='it-page-section' {...register('2')}>\r
          Introduzione 2\r
        </h2>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
        <h3 className='it-page-section' {...register('2_1', { parent: '2' })}>\r
          Nested item 2.1\r
        </h3>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
        <h4 className='it-page-section' {...register('2_1_1', { parent: '2_1' })}>\r
          Nested item 2.1.1\r
        </h4>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
        <h4 className='it-page-section' {...register('2_1_2', { parent: '2_1' })}>\r
          Nested item 2.1.2\r
        </h4>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
        <h4 className='it-page-section' {...register('2_1_3', { parent: '2_1' })}>\r
          Nested item 2.1.3\r
        </h4>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
        <h3 className='it-page-section' {...register('2_2', { parent: '2' })}>\r
          Nested item 2.2\r
        </h3>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
        <h3 className='it-page-section' {...register('2_3', { parent: '2' })}>\r
          Nested item 2.3\r
        </h3>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
      </div>\r
    </Row>\r
  </Container>\r
);
`})}),`
`,e.jsx(a.h3,{id:"menu-inline",children:"Menu Inline"}),`
`,e.jsxs(a.p,{children:["La classe distintiva del wrapper esterno è ",e.jsx(a.code,{children:".inline-menu"}),"."]}),`
`,e.jsx(a.p,{children:"Gli inline menù possono contenere liste di link di ogni tipo; nell’esempio che segue è stata inserita una link list collassabile."}),`
`,e.jsx(a.p,{children:"Per maggiori informazioni, si può fare riferimento alla documentazione dei Link List."}),`
`,e.jsx(r,{of:d}),`
`,e.jsx(a.h4,{id:"codice-3",children:"Codice"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-tsx",children:`const [isOpenOne, toggleNavScrollOne] = useState(false);\r
const [isOpenTwo, toggleNavScrollTwo] = useState(false);\r
const [isOpenThree, toggleNavScrollThree] = useState(false);\r
/* Richiesto per contenuto confinato */\r
/* Nota che i componenti Col e Row non inoltrano le ref, \r
      /* usare quindi tag div con classi css come nell'esempio */\r
const containerRef = useRef(null);\r
const { register, isActive } = useNavScroll({\r
  root: containerRef.current || undefined\r
});\r
\r
const getActiveClass = (id: string) => (isActive(id) ? 'active' : undefined);\r
\r
const isFirstOpen = isOpenOne || isActive('1');\r
const isSecondOpen = isOpenTwo || isActive('2');\r
const isThirdOpen = isOpenThree || isActive('3');\r
return (\r
  <Container>\r
    <Row>\r
      <Col md={12} lg={4}>\r
        <Navbar className='inline-menu affix-top' cssModule={{ navbar: ' ' }}>\r
          <LinkList>\r
            <li>\r
              <a\r
                className={\`list-item large medium right-icon \${isFirstOpen ? '' : 'collapsed'} \${getActiveClass('1')}\`}\r
                href={\`#collapseOne\`}\r
                data-toggle='collapse'\r
                aria-expanded='false'\r
                aria-controls='collapseOne'\r
                onClick={(e) => {\r
                  e.preventDefault();\r
                  toggleNavScrollOne(!isOpenOne);\r
                }}\r
              >\r
                <LinkListItem.TitleIconWrapper>\r
                  <span>Link list 1</span>\r
                  <Icon color='primary' icon='it-expand' aria-hidden size='sm' />\r
                </LinkListItem.TitleIconWrapper>\r
              </a>\r
              <LinkList sublist className={isFirstOpen ? 'collapse show' : 'collapse'} id='collapseOne'>\r
                <LinkListItem className={getActiveClass('1_1')}>Link list 1.1</LinkListItem>\r
                <LinkListItem className={getActiveClass('1_2')}>Link list 1.2</LinkListItem>\r
                <LinkListItem className={getActiveClass('1_3')}>Link list 1.3</LinkListItem>\r
              </LinkList>\r
            </li>\r
            <li>\r
              <a\r
                className={\`list-item large medium right-icon \${isSecondOpen ? '' : 'collapsed'} \${getActiveClass('2')}\`}\r
                href={\`#collapseTwo\`}\r
                data-toggle='collapse'\r
                aria-expanded='false'\r
                aria-controls='collapseTwo'\r
                onClick={(e) => {\r
                  e.preventDefault();\r
                  toggleNavScrollTwo(!isOpenTwo);\r
                }}\r
              >\r
                <LinkListItem.TitleIconWrapper>\r
                  <span>Link list 2</span>\r
                  <Icon color='primary' icon='it-expand' aria-hidden size='sm' />\r
                </LinkListItem.TitleIconWrapper>\r
              </a>\r
              <LinkList sublist className={isSecondOpen ? 'collapse show' : 'collapse'} id='collapseTwo'>\r
                <LinkListItem className={getActiveClass('2_1')}>Link list 2.1</LinkListItem>\r
                <LinkListItem className={getActiveClass('2_2')}>Link list 2.2</LinkListItem>\r
                <LinkListItem className={getActiveClass('2_3')}>Link list 2.3</LinkListItem>\r
              </LinkList>\r
            </li>\r
            <li>\r
              <a\r
                className={\`list-item large medium right-icon \${isThirdOpen ? '' : 'collapsed'} \${getActiveClass('3')}\`}\r
                href={\`#collapseThree\`}\r
                data-toggle='collapse'\r
                aria-expanded='false'\r
                aria-controls='collapseThree'\r
                onClick={(e) => {\r
                  e.preventDefault();\r
                  toggleNavScrollThree(!isOpenThree);\r
                }}\r
              >\r
                <LinkListItem.TitleIconWrapper>\r
                  <span>Link list 3</span>\r
                  <Icon color='primary' icon='it-expand' aria-hidden size='sm' />\r
                </LinkListItem.TitleIconWrapper>\r
              </a>\r
              <LinkList sublist className={isThirdOpen ? 'collapse show' : 'collapse'} id='collapseThree'>\r
                <LinkListItem className={getActiveClass('3_1')}>Link list 3.1</LinkListItem>\r
                <LinkListItem className={getActiveClass('3_2')}>Link list 3.2</LinkListItem>\r
                <LinkListItem className={getActiveClass('3_3')}>Link list 3.3</LinkListItem>\r
              </LinkList>\r
            </li>\r
          </LinkList>\r
        </Navbar>\r
      </Col>\r
      <div className='it-page-sections-container col-12 col-lg-8' ref={containerRef} style={getStorybookExtraStyles()}>\r
        <p>\r
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec congue eros. Maecenas sagittis commodo\r
          libero nec porta. Nunc semper velit venenatis ligula condimentum ultricies. In hac habitasse platea dictumst.\r
          In malesuada pharetra nulla, id aliquam metus egestas ut. Nulla sollicitudin cursus felis, eu sagittis ante\r
          porta id. Suspendisse pellentesque ex non sem tincidunt, aliquam rhoncus turpis maximus. Vivamus eget massa\r
          turpis. Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue, sodales ac rhoncus in,\r
          ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames\r
          ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel\r
          sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut\r
          quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod\r
          pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient\r
          montes, nascetur ridiculus mus. Integer feugiat et massa nec rhoncus. Morbi vitae metus et sapien suscipit\r
          mattis vitae ac ex. Proin pharetra, sem vitae varius malesuada, risus tortor sodales arcu, eu aliquam lorem\r
          libero vel urna. Aliquam massa lacus, faucibus quis urna ac, pharetra pretium ex. In facilisis urna non urna\r
          luctus, a bibendum tortor facilisis. Mauris sed risus justo. In et erat fermentum eros hendrerit tempor.\r
          Quisque accumsan magna ac risus ultricies, vel condimentum ipsum accumsan. Proin blandit mauris sed sodales\r
          sollicitudin.\r
        </p>\r
        <h2 className='it-page-section' {...register('1')}>\r
          Introduzione\r
        </h2>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue, sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
        <h3 className='it-page-section' {...register('1_1', { parent: '1' })}>\r
          Nested item 1.1\r
        </h3>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
        <h3 className='it-page-section' {...register('1_2', { parent: '1' })}>\r
          Nested item 1.2\r
        </h3>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
        <h3 className='it-page-section' {...register('1_3', { parent: '1' })}>\r
          Nested item 1.3\r
        </h3>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
        <h2 className='it-page-section' {...register('2')}>\r
          Introduzione 2\r
        </h2>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
        <h3 className='it-page-section' {...register('2_1', { parent: '2' })}>\r
          Nested item 2.1\r
        </h3>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
        <h3 className='it-page-section' {...register('2_2', { parent: '2' })}>\r
          Nested item 2.2\r
        </h3>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
        <h3 className='it-page-section' {...register('2_3', { parent: '2' })}>\r
          Nested item 2.3\r
        </h3>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
        <h2 className='it-page-section' {...register('3')}>\r
          Introduzione 3\r
        </h2>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
        <h3 className='it-page-section' {...register('3_1', { parent: '3' })}>\r
          Nested item 3.1\r
        </h3>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
        <h3 className='it-page-section' {...register('3_2', { parent: '3' })}>\r
          Nested item 3.2\r
        </h3>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
        <h3 className='it-page-section' {...register('3_3', { parent: '3' })}>\r
          Nested item 3.3\r
        </h3>\r
        <p>\r
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a\r
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum\r
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam\r
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula\r
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non\r
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\r
          ridiculus mus.\r
        </p>\r
      </div>\r
    </Row>\r
  </Container>\r
);
`})})]})}function D(i={}){const{wrapper:a}={...u(),...i.components};return a?e.jsx(a,{...i,children:e.jsx(t,{...i})}):t(i)}export{D as default};
