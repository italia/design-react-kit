import{R as e}from"./index-BFWcBMrj.js";import{c as E}from"./index-Bl6ORisp.js";import{C as Q}from"./Container-DxD9c0zF.js";import{R as G,C as J}from"./Col-CzbmXXhQ.js";import{B as Z}from"./Button-BvsBu0Bj.js";import{C as $}from"./Card-Cfsa-JCi.js";import{C as ee,a as te}from"./CardText-F4-nMFN7.js";import{C as ae}from"./CardTitle-DAOYpoqU.js";import{C as re,a as oe}from"./CardSignature-BsPG8hhK.js";const n=({tag:t="div",small:a,centered:r,overlay:o,overlap:C,className:K,testId:W,...X})=>{const Y=E("it-hero-wrapper",K,{"it-overlay":o,["it-"+o]:o,"it-hero-small-size":a,"it-text-centered":r,"it-bottom-overlapping-content":C});return e.createElement(t,{className:Y,...X,"data-testid":W})};n.__docgenInfo={description:"",methods:[],displayName:"Hero",props:{tag:{required:!1,tsType:{name:"ElementType"},description:"Utilizzarlo in caso di utilizzo di componenti personalizzati",defaultValue:{value:"'div'",computed:!1}},small:{required:!1,tsType:{name:"boolean"},description:"Indica se il componente Hero deve ridurre l'altezza"},centered:{required:!1,tsType:{name:"boolean"},description:"Indica al componente Hero di centrare i contenuti testuali orizzontalmente"},overlay:{required:!1,tsType:{name:"union",raw:"'dark' | 'primary' | 'filter'",elements:[{name:"literal",value:"'dark'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'filter'"}]},description:"Da utilizzare per creare un testi in overlay su immagini, al fine di migliorare la leggibilità di testo"},overlap:{required:!1,tsType:{name:"boolean"},description:"Aggiunge margine negativo in fondo al componente Hero per creare una sovrapposizione con il contenuto seguente."},testId:{required:!1,tsType:{name:"string"},description:""}},composes:["HTMLAttributes"]};const i=({alt:t,testId:a,...r})=>e.createElement("div",{className:"img-responsive-wrapper","data-testid":a},e.createElement("div",{className:"img-responsive"},e.createElement("div",{className:"img-wrapper"},e.createElement("img",{...r,alt:t}))));i.__docgenInfo={description:"",methods:[],displayName:"HeroBackground",props:{alt:{required:!0,tsType:{name:"string"},description:"Un testo alternativo per descrivere l'immagine mostrata"},src:{required:!0,tsType:{name:"string"},description:"L'URI dell'immagine da mostrare"},title:{required:!1,tsType:{name:"string"},description:"Il titolo dell'immagine"},testId:{required:!1,tsType:{name:"string"},description:""}},composes:["HTMLAttributes"]};const s=({children:t,className:a,testId:r})=>{const o=E("it-hero-text-wrapper","bg-dark",a);return e.createElement(Q,null,e.createElement(G,null,e.createElement(J,null,e.createElement("div",{className:o,"data-testid":r},t))))};s.__docgenInfo={description:"",methods:[],displayName:"HeroBody",props:{className:{required:!1,tsType:{name:"string"},description:"Eventuali classi aggiuntive"},testId:{required:!1,tsType:{name:"string"},description:""}},composes:["HTMLAttributes"]};const l=({wrapperClassName:t,testId:a,...r})=>{const o=E("it-btn-container",t);return e.createElement("div",{className:o,"data-testid":a},e.createElement(Z,{size:"sm",...r}))};l.__docgenInfo={description:"",methods:[],displayName:"HeroButton",props:{block:{required:!1,tsType:{name:"boolean"},description:"Quando abilitato, estende il componente Button fino a prendere tutta la larghezza disponibile"},outline:{required:!1,tsType:{name:"boolean"},description:"Utilizzarlo disabilitare il colore di sfondo, ed applicarlo invece al bordo."},tag:{required:!1,tsType:{name:"ElementType"},description:"Utilizzarlo in caso di componenti personalizzati"},className:{required:!1,tsType:{name:"string"},description:"Classi aggiuntive da usare per il componente Button"},cssModule:{required:!1,tsType:{name:"CSSModule"},description:"Oggetto contenente la nuova mappatura per le classi CSS."},innerRef:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLButtonElement"}],raw:"Ref<HTMLButtonElement>"},description:""},icon:{required:!1,tsType:{name:"boolean"},description:"Da utilizzare si usa una icona nel contenuto del Button"},size:{required:!1,tsType:{name:"union",raw:"'lg' | 'sm' | 'xs'",elements:[{name:"literal",value:"'lg'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'xs'"}]},description:"Da utilizzare per le varianti di dimensione del componente Button"},close:{required:!1,tsType:{name:"boolean"},description:"Da utilizzare per i bottoni di chiusura all'interno di altri componenti (i.e. Chips, Modali, etc...)"},active:{required:!1,tsType:{name:"boolean"},description:""},href:{required:!1,tsType:{name:"string"},description:""},testId:{required:!1,tsType:{name:"string"},description:""},wrapperClassName:{required:!1,tsType:{name:"string"},description:""}},composes:["ButtonHTMLAttributes"]};const m=({className:t,testId:a,...r})=>{const o=E("it-category",t);return e.createElement("span",{...r,className:o,"data-testid":a})};m.__docgenInfo={description:"",methods:[],displayName:"HeroCategory",props:{className:{required:!1,tsType:{name:"string"},description:"Eventuali classi aggiuntive per la categoria"},testId:{required:!1,tsType:{name:"string"},description:""}},composes:["HTMLAttributes"]};const c=({tag:t="h1",className:a,testId:r,...o})=>{const C=E(a);return e.createElement(t,{...o,className:C,"data-testid":r})};c.__docgenInfo={description:"",methods:[],displayName:"HeroTitle",props:{tag:{required:!1,tsType:{name:"ElementType"},description:"Indica il tag da utilizzare per il titolo",defaultValue:{value:"'h1'",computed:!1}},testId:{required:!1,tsType:{name:"string"},description:""}},composes:["HTMLAttributes"]};const ne={title:"Documentazione/Menu di navigazione/Hero",component:n},u={render:()=>e.createElement(n,null,e.createElement(i,{src:"https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg",title:"image title",alt:"imagealt"}))},d={render:()=>e.createElement(n,{small:!0},e.createElement(i,{src:"https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg",title:"image title",alt:"imagealt"}))},p={render:()=>e.createElement(n,null,e.createElement(s,null,e.createElement(m,null,"Category"),e.createElement(c,null,"Heading lorem ipsum dolor sit amet, consetetur sadipscing."),e.createElement("p",{className:"d-none d-lg-block"},"Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus."),e.createElement(l,{outline:!0,color:"primary"},"Label button")))},g={render:()=>e.createElement(n,{centered:!0},e.createElement(s,null,e.createElement(m,null,"Category"),e.createElement(c,null,"Heading lorem ipsum dolor sit amet, consetetur sadipscing."),e.createElement("p",{className:"d-none d-lg-block"},"Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus."),e.createElement(l,{outline:!0,color:"primary"},"Label button")))},H={render:()=>e.createElement(n,{overlay:"dark"},e.createElement(i,{src:"https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg",title:"image title",alt:"imagealt"}),e.createElement(s,null,e.createElement(m,null,"Category"),e.createElement(c,null,"Heading lorem ipsum dolor sit amet, consetetur sadipscing."),e.createElement("p",{className:"d-none d-lg-block"},"Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus."),e.createElement(l,{color:"secondary"},"Label button")))},f={render:()=>e.createElement(n,{overlay:"primary"},e.createElement(i,{src:"https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg",title:"image title",alt:"imagealt"}),e.createElement(s,null,e.createElement(m,null,"Category"),e.createElement(c,null,"Heading lorem ipsum dolor sit amet, consetetur sadipscing."),e.createElement("p",{className:"d-none d-lg-block"},"Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus."),e.createElement(l,{outline:!0,color:"primary"},"Label button")))},y={render:()=>e.createElement(n,{overlay:"filter"},e.createElement(i,{src:"https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg",title:"image title",alt:"imagealt"}))},b={render:()=>e.createElement(e.Fragment,null,e.createElement(n,{overlap:!0},e.createElement(i,{src:"https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg",title:"image title",alt:"imagealt"}),e.createElement(s,null,e.createElement(m,null,"Category"),e.createElement(c,null,"Heading lorem ipsum dolor sit amet, consetetur sadipscing."),e.createElement("p",{className:"d-none d-lg-block"},"Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus."),e.createElement(l,{color:"secondary"},"Label button"))),e.createElement(Q,null,e.createElement(G,null,e.createElement(J,null,e.createElement($,{spacing:!0,className:"card-bg"},e.createElement(ee,null,e.createElement(ae,{tag:"h5",className:"big-heading"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit…"),e.createElement(te,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),e.createElement(re,null,"di Federico De Paolis"),e.createElement(oe,{text:"Leggi di più",iconName:"it-arrow-right"})))))))};var v,T,h;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Hero>
      <HeroBackground src='https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg' title='image title' alt='imagealt' />
    </Hero>
}`,...(h=(T=u.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var z,B,_;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Hero small>
      <HeroBackground src='https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg' title='image title' alt='imagealt' />
    </Hero>
}`,...(_=(B=d.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var q,N,S;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Hero>
      <HeroBody>
        <HeroCategory>Category</HeroCategory>
        <HeroTitle>Heading lorem ipsum dolor sit amet, consetetur sadipscing.</HeroTitle>
        <p className='d-none d-lg-block'>
          Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo
          donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
        </p>
        <HeroButton outline color='primary'>
          Label button
        </HeroButton>
      </HeroBody>
    </Hero>
}`,...(S=(N=p.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var j,k,L;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Hero centered>
      <HeroBody>
        <HeroCategory>Category</HeroCategory>
        <HeroTitle>Heading lorem ipsum dolor sit amet, consetetur sadipscing.</HeroTitle>
        <p className='d-none d-lg-block'>
          Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo
          donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
        </p>
        <HeroButton outline color='primary'>
          Label button
        </HeroButton>
      </HeroBody>
    </Hero>
}`,...(L=(k=g.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var D,I,M;H.parameters={...H.parameters,docs:{...(D=H.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Hero overlay='dark'>
      <HeroBackground src='https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg' title='image title' alt='imagealt' />
      <HeroBody>
        <HeroCategory>Category</HeroCategory>
        <HeroTitle>Heading lorem ipsum dolor sit amet, consetetur sadipscing.</HeroTitle>
        <p className='d-none d-lg-block'>
          Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo
          donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
        </p>
        <HeroButton color='secondary'>Label button</HeroButton>
      </HeroBody>
    </Hero>
}`,...(M=(I=H.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var P,w,x;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Hero overlay='primary'>
      <HeroBackground src='https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg' title='image title' alt='imagealt' />
      <HeroBody>
        <HeroCategory>Category</HeroCategory>
        <HeroTitle>Heading lorem ipsum dolor sit amet, consetetur sadipscing.</HeroTitle>
        <p className='d-none d-lg-block'>
          Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo
          donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
        </p>
        <HeroButton outline color='primary'>
          Label button
        </HeroButton>
      </HeroBody>
    </Hero>
}`,...(x=(w=f.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var R,O,A;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Hero overlay='filter'>
      <HeroBackground src='https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg' title='image title' alt='imagealt' />
    </Hero>
}`,...(A=(O=y.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var F,U,V;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <>
      <Hero overlap>
        <HeroBackground src='https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg' title='image title' alt='imagealt' />
        <HeroBody>
          <HeroCategory>Category</HeroCategory>
          <HeroTitle>Heading lorem ipsum dolor sit amet, consetetur sadipscing.</HeroTitle>
          <p className='d-none d-lg-block'>
            Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo
            donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
          </p>
          <HeroButton color='secondary'>Label button</HeroButton>
        </HeroBody>
      </Hero>
      <Container>
        <Row>
          <Col>
            <Card spacing className='card-bg'>
              <CardBody>
                <CardTitle tag='h5' className='big-heading'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit…
                </CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </CardText>
                <CardSignature>di Federico De Paolis</CardSignature>
                <CardReadMore text='Leggi di più' iconName='it-arrow-right' />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
}`,...(V=(U=b.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};const ie=["HeroConSfondo","HeroConSfondoSmall","HeroConTesto","HeroConTestoCentrato","HeroConTestoSuSfondo","HeroConTestoSuSfondoOverlayPrimario","HeroConSfondoOverlayFiltro","HeroConSfondoMargineNegativo"],fe=Object.freeze(Object.defineProperty({__proto__:null,HeroConSfondo:u,HeroConSfondoMargineNegativo:b,HeroConSfondoOverlayFiltro:y,HeroConSfondoSmall:d,HeroConTesto:p,HeroConTestoCentrato:g,HeroConTestoSuSfondo:H,HeroConTestoSuSfondoOverlayPrimario:f,__namedExportsOrder:ie,default:ne},Symbol.toStringTag,{value:"Module"}));export{fe as H,u as a,d as b,p as c,g as d,H as e,f,y as g,b as h,n as i,i as j,s as k,l,m,c as n};
