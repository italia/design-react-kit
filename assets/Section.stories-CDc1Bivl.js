import{R as e}from"./index-BFWcBMrj.js";import{c}from"./index-Bl6ORisp.js";import{a as G}from"./utils-Dujee42i.js";import{C as o}from"./Container-DxD9c0zF.js";import{R as s,C as t}from"./Col-CzbmXXhQ.js";import{C as h}from"./Card-Cfsa-JCi.js";import{C as x,a as b}from"./CardText-F4-nMFN7.js";const a=({color:g,image:d,testId:O,wrapperClassName:E,className:C,children:U,neutral:p,muted:f,...$})=>{const A=c("section",E===!0?C:E,{[`section-${g}`]:g,"section-image":d});(p||f)&&G(`Please use the prop "color" instead of the "${p?"neutral":"muted"}" for the Section component.`);const L=c({"section-neutral":p,"section-muted":f}),Q=c("section-content",C),H={backgroundImageClass:d?{backgroundImage:`url(${d})`}:{}},F=c(A,L);return e.createElement("div",{className:F,style:H.backgroundImageClass,"data-testid":O,...$},e.createElement("div",{className:Q},U))};a.__docgenInfo={description:"",methods:[],displayName:"Section",props:{wrapperClassName:{required:!1,tsType:{name:"union",raw:"string | true",elements:[{name:"string"},{name:"literal",value:"true"}]},description:"Classi aggiuntive da usare per il contenitore più esterno\nPer replicare il comportamento precedente, in cui `className` veniva applicato anche al wrapper,\npassare `true`."},className:{required:!1,tsType:{name:"string"},description:"Classi aggiuntive da usare per il contenitore più interno"},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'neutral' | 'muted' | string",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'neutral'"},{name:"literal",value:"'muted'"},{name:"string"}]},description:"Colore utilizzato per lo sfondo del componente Section.\nIn caso di `primary` o `neutral` si consiglia di applicare la classe `.white-color` al contenuto per garantire la leggibilità dei testi."},image:{required:!1,tsType:{name:"string"},description:"Indicare l'URL dell'immagine da utilizzare come sfondo della sezione."},children:{required:!1,tsType:{name:"union",raw:"ReactChild | ReactChild[]",elements:[{name:"ReactChild"},{name:"Array",elements:[{name:"ReactChild"}],raw:"ReactChild[]"}]},description:"Il contenuto della sezione"},neutral:{required:!1,tsType:{name:"boolean"},description:'Quando abilitato applica lo sfondo di tipo "neutral" al componente.\n@deprecated. Utilizzare `color="neutral"`'},muted:{required:!1,tsType:{name:"boolean"},description:'Quando abilitato applica lo sfondo di tipo "muted" al componente.\n@deprecated. Utilizzare `color="muted"`'},testId:{required:!1,tsType:{name:"string"},description:""}},composes:["HTMLAttributes"]};const J={title:"Documentazione/Componenti/Section",component:a},u=()=>e.createElement(a,null,e.createElement(o,null,e.createElement(s,{className:"mb-3"},e.createElement(t,{xs:"12"},e.createElement("h4",null,"Morbi fermentum amet"))),e.createElement(s,null,e.createElement(t,{xs:"12",lg:"6",xl:"4",className:"pe-0 pe-md-5 mb-3"},"Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus."),e.createElement(t,{xs:"12",lg:"6",xl:"4",className:"pe-0 pe-md-5 mb-3"},"Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim diam quis enim. Eu nisl nunc mi ipsum faucibus."),e.createElement(t,{xs:"12",lg:"6",xl:"4",className:"pe-0 pe-md-5 mb-3"},"Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna condimentum. Mattis enim ut tellus elementum sagittis.")))),m=()=>e.createElement(a,{color:"muted"},e.createElement(o,null,e.createElement(s,{className:"mb-3"},e.createElement(t,{xs:"12"},e.createElement("h4",null,"Morbi fermentum amet"))),e.createElement(s,null,e.createElement(t,{xs:"12",lg:"6",xl:"4"},"Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus."),e.createElement(t,{xs:"12",lg:"6",xl:"4"},"Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim diam quis enim. Eu nisl nunc mi ipsum faucibus."),e.createElement(t,{xs:"12",lg:"6",xl:"4"},"Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna condimentum. Mattis enim ut tellus elementum sagittis.")))),l=()=>e.createElement(a,{color:"primary"},e.createElement(o,{className:"white-color"},e.createElement(s,null,e.createElement(t,{xs:"12"},e.createElement("h4",null,"Morbi fermentum amet"))),e.createElement(s,null,e.createElement(t,{xs:"12",lg:"6",xl:"4"},"Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus."),e.createElement(t,{xs:"12",lg:"6",xl:"4"},"Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim diam quis enim. Eu nisl nunc mi ipsum faucibus."),e.createElement(t,{xs:"12",lg:"6",xl:"4"},"Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna condimentum. Mattis enim ut tellus elementum sagittis.")))),r=()=>e.createElement(a,{color:"neutral"},e.createElement(o,{className:"white-color"},e.createElement(s,null,e.createElement(t,{xs:"12"},e.createElement("h4",null,"Morbi fermentum amet"))),e.createElement(s,null,e.createElement(t,{xs:"12",lg:"6",xl:"4"},"Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus."),e.createElement(t,{xs:"12",lg:"6",xl:"4"},"Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim diam quis enim. Eu nisl nunc mi ipsum faucibus."),e.createElement(t,{xs:"12",lg:"6",xl:"4"},"Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna condimentum. Mattis enim ut tellus elementum sagittis.")))),i=()=>e.createElement(a,{image:"https://picsum.photos/1280/720?image=811"},e.createElement(o,{className:"white-color"},e.createElement(s,null,e.createElement(t,{xs:"12"},e.createElement("h4",null,"Morbi fermentum amet"))),e.createElement(s,null,e.createElement(t,{xs:"12",lg:"6",xl:"4"},"Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus."),e.createElement(t,{xs:"12",lg:"6",xl:"4"},"Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim diam quis enim. Eu nisl nunc mi ipsum faucibus."),e.createElement(t,{xs:"12",lg:"6",xl:"4"},"Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna condimentum. Mattis enim ut tellus elementum sagittis.")))),n=()=>e.createElement(a,{color:"muted"},e.createElement("h4",null,"Morbi fermentum amet"),e.createElement(s,null,e.createElement(t,{sm:6},e.createElement(h,{className:"shadow h-100",noWrapper:!0},e.createElement(x,null,e.createElement(b,null,"Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus. Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et."," ")))),e.createElement(t,{sm:6},e.createElement(h,{className:"shadow h-100",noWrapper:!0},e.createElement(x,null,e.createElement(b,null,"Etiam dignissim diam quis enim. Eu nisl nunc mi ipsum faucibus. Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna condimentum. Mattis enim ut tellus elementum sagittis."))))));i.storyName="Immagine di sfondo";n.storyName="Section con Card";u.__docgenInfo={description:"",methods:[],displayName:"Esempio"};m.__docgenInfo={description:"",methods:[],displayName:"SfondoTenue"};l.__docgenInfo={description:"",methods:[],displayName:"SfondoPrimario"};r.__docgenInfo={description:"",methods:[],displayName:"SfondoNeutrale"};i.__docgenInfo={description:"",methods:[],displayName:"ImmagineDiSfondo"};n.__docgenInfo={description:"",methods:[],displayName:"SectionConCard"};var v,q,S;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  return <Section>
      <Container>
        <Row className='mb-3'>
          <Col xs={'12'}>
            <h4>Morbi fermentum amet</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={'12'} lg={'6'} xl={'4'} className='pe-0 pe-md-5 mb-3'>
            Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo
            donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'} className='pe-0 pe-md-5 mb-3'>
            Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim
            diam quis enim. Eu nisl nunc mi ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'} className='pe-0 pe-md-5 mb-3'>
            Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna
            condimentum. Mattis enim ut tellus elementum sagittis.
          </Col>
        </Row>
      </Container>
    </Section>;
}`,...(S=(q=u.parameters)==null?void 0:q.docs)==null?void 0:S.source}}};var w,N,y;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  return <Section color='muted'>
      <Container>
        <Row className='mb-3'>
          <Col xs={'12'}>
            <h4>Morbi fermentum amet</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo
            donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim
            diam quis enim. Eu nisl nunc mi ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna
            condimentum. Mattis enim ut tellus elementum sagittis.
          </Col>
        </Row>
      </Container>
    </Section>;
}`,...(y=(N=m.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};var R,D,M;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <Section color='primary'>
      <Container className='white-color'>
        <Row>
          <Col xs={'12'}>
            <h4>Morbi fermentum amet</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo
            donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim
            diam quis enim. Eu nisl nunc mi ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna
            condimentum. Mattis enim ut tellus elementum sagittis.
          </Col>
        </Row>
      </Container>
    </Section>;
}`,...(M=(D=l.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var _,I,P;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  return <Section color='neutral'>
      <Container className='white-color'>
        <Row>
          <Col xs={'12'}>
            <h4>Morbi fermentum amet</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo
            donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim
            diam quis enim. Eu nisl nunc mi ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna
            condimentum. Mattis enim ut tellus elementum sagittis.
          </Col>
        </Row>
      </Container>
    </Section>;
}`,...(P=(I=r.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var T,j,z;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  return <Section image='https://picsum.photos/1280/720?image=811'>
      <Container className='white-color'>
        <Row>
          <Col xs={'12'}>
            <h4>Morbi fermentum amet</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo
            donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim
            diam quis enim. Eu nisl nunc mi ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna
            condimentum. Mattis enim ut tellus elementum sagittis.
          </Col>
        </Row>
      </Container>
    </Section>;
}`,...(z=(j=i.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var B,W,k;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  return <Section color='muted'>
      <h4>Morbi fermentum amet</h4>
      <Row>
        <Col sm={6}>
          <Card className='shadow h-100' noWrapper>
            <CardBody>
              <CardText>
                Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet
                justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus. Eget egestas purus viverra accumsan.
                Diam maecenas ultricies mi eget mauris pharetra et.{' '}
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm={6}>
          <Card className='shadow h-100' noWrapper>
            <CardBody>
              <CardText>
                Etiam dignissim diam quis enim. Eu nisl nunc mi ipsum faucibus. Euismod lacinia at quis risus sed
                vulputate. Scelerisque purus semper eget duis at tellus at urna condimentum. Mattis enim ut tellus
                elementum sagittis.
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Section>;
}`,...(k=(W=n.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};const K=["Esempio","SfondoTenue","SfondoPrimario","SfondoNeutrale","ImmagineDiSfondo","SectionConCard"],ae=Object.freeze(Object.defineProperty({__proto__:null,Esempio:u,ImmagineDiSfondo:i,SectionConCard:n,SfondoNeutrale:r,SfondoPrimario:l,SfondoTenue:m,__namedExportsOrder:K,default:J},Symbol.toStringTag,{value:"Module"}));export{u as E,i as I,ae as S,m as a,l as b,r as c,n as d};
