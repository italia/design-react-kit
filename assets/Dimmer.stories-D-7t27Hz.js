import{R as e}from"./index-BFWcBMrj.js";import{c as y}from"./index-Bl6ORisp.js";import{I as S}from"./Icon-Dn2FEDq_.js";import{F as g}from"./Fade-DLDWECFI.js";import{C as t}from"./Card-Cfsa-JCi.js";import{C as i,a as n}from"./CardText-F4-nMFN7.js";import{C as a}from"./CardTitle-DAOYpoqU.js";import{B as L}from"./Button-BvsBu0Bj.js";const r=({icon:C,color:m,className:c,wrapperClassName:u,testId:v,...E})=>{const{children:T,...p}=E,b=y("dimmer",u===!0?c:u,{[`dimmer-${m}`]:m}),I=y("dimmer-inner",c),_=C&&e.createElement("div",{className:"dimmer-icon"},e.createElement(S,{icon:C}));return e.createElement("div",{className:b,...p,style:{display:"flex"},"data-testid":v},e.createElement("div",{className:I,...p},_,T))};r.__docgenInfo={description:"",methods:[],displayName:"Dimmer",props:{icon:{required:!1,tsType:{name:"string"},description:"Il nome dell'icona da mostrare. Per una lista completa vedi: @TODO-URL"},color:{required:!1,tsType:{name:"union",raw:"'success' | 'warning' | 'danger' | 'note' | 'important' | string",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'note'"},{name:"literal",value:"'important'"},{name:"string"}]},description:"Le varianti di colore definite in Bootstrap Italia"},className:{required:!1,tsType:{name:"string"},description:"Classi aggiuntive da usare per il componente Dimmer"},wrapperClassName:{required:!1,tsType:{name:"union",raw:"string | true",elements:[{name:"string"},{name:"literal",value:"true"}]},description:"Classi aggiuntive da usare per il componente contenitore del Dimmer\nPer replicare il comportamento precedente, in cui `className` veniva applicato anche al wrapper,\npassare `true`."},testId:{required:!1,tsType:{name:"string"},description:""}},composes:["HTMLAttributes"]};const N=({color:C,className:m,single:c=!1,dark:u=!0,testId:v,...E})=>{const{children:T,...p}=E,b=y("dimmer-buttons",m,{"bg-dark":u,"single-button":c});return e.createElement("div",{className:b,...p,"data-testid":v},T)};N.__docgenInfo={description:"",methods:[],displayName:"DimmerButtons",props:{color:{required:!1,tsType:{name:"union",raw:"'primary' | string",elements:[{name:"literal",value:"'primary'"},{name:"string"}]},description:"Le varianti di colore definite in Bootstrap Italia per il componente Dimmer"},className:{required:!1,tsType:{name:"string"},description:"Classi aggiuntive da usare per il componente Dimmer"},single:{required:!1,tsType:{name:"boolean"},description:"Da utilizzare in presenza di un singolo bottone: quando abilitato ne centra il contenuto.",defaultValue:{value:"false",computed:!1}},dark:{required:!1,tsType:{name:"boolean"},description:"Da utilizzare con `false` per abilitare il precedente comportamento senza sfondo scuro.\n@deprecated",defaultValue:{value:"true",computed:!1}},testId:{required:!1,tsType:{name:"string"},description:""}},composes:["HTMLAttributes"]};const j={title:"Documentazione/Componenti/Dimmer",component:r},o={render:()=>e.createElement("div",null,e.createElement(g,{in:!0,tag:"div",className:"mt-3"},e.createElement(r,{icon:"it-unlocked"},e.createElement("p",null,"Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus."))),e.createElement("div",{className:"row"},e.createElement("div",{className:"col-12 col-lg-4"},e.createElement(t,null,e.createElement(i,null,e.createElement(a,{tag:"h5"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"),e.createElement(n,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))),e.createElement("div",{className:"col-12 col-lg-4 d-none d-lg-block"},e.createElement(t,null,e.createElement(i,null,e.createElement(a,{tag:"h5"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"),e.createElement(n,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))),e.createElement("div",{className:"col-12 col-lg-4 d-none d-lg-block"},e.createElement(t,null,e.createElement(i,null,e.createElement(a,{tag:"h5"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"),e.createElement(n,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))))},l={render:()=>e.createElement("div",null,e.createElement(g,{in:!0,tag:"div",className:"mt-3"},e.createElement(r,{color:"primary",icon:"it-unlocked"},e.createElement("p",null,"Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus."))),e.createElement("div",{className:"row"},e.createElement("div",{className:"col-12 col-lg-4"},e.createElement(t,null,e.createElement(i,null,e.createElement(a,{tag:"h5"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"),e.createElement(n,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))),e.createElement("div",{className:"col-12 col-lg-4 d-none d-lg-block"},e.createElement(t,null,e.createElement(i,null,e.createElement(a,{tag:"h5"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"),e.createElement(n,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))),e.createElement("div",{className:"col-12 col-lg-4 d-none d-lg-block"},e.createElement(t,null,e.createElement(i,null,e.createElement(a,{tag:"h5"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"),e.createElement(n,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))))},d={render:()=>e.createElement("div",null,e.createElement(g,{in:!0,tag:"div",className:"mt-3"},e.createElement(r,{icon:"it-unlocked"},e.createElement("h4",null,"Titolo Dimmer"),e.createElement(N,null,e.createElement(L,{color:"primary",outline:!0},"Azione secondaria"),e.createElement(L,{color:"primary"},"Azione primaria")))),e.createElement("div",{className:"col"},e.createElement("div",{className:"col-12 col-lg-4"},e.createElement(t,null,e.createElement(i,null,e.createElement(a,{tag:"h5"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"),e.createElement(n,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))),e.createElement("div",{className:"col-12 col-lg-4 d-none d-lg-block"},e.createElement(t,null,e.createElement(i,null,e.createElement(a,{tag:"h5"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"),e.createElement(n,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))))},s={render:()=>e.createElement("div",null,e.createElement(g,{in:!0,tag:"div",className:"mt-3"},e.createElement(r,{color:"primary",icon:"it-unlocked"},e.createElement("h4",null,"Titolo Dimmer"),e.createElement(N,{single:!0},e.createElement(L,{color:"primary"},"Azione primaria")))),e.createElement("div",{className:"col"},e.createElement("div",{className:"col-12 col-lg-4"},e.createElement(t,null,e.createElement(i,null,e.createElement(a,{tag:"h5"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"),e.createElement(n,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))),e.createElement("div",{className:"col-12 col-lg-4 d-none d-lg-block"},e.createElement(t,null,e.createElement(i,null,e.createElement(a,{tag:"h5"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"),e.createElement(n,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))))};var D,f,B;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div>
      <Fade in={true} tag='div' className='mt-3'>
        <Dimmer icon='it-unlocked'>
          <p>
            Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo
            donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
          </p>
        </Dimmer>
      </Fade>
      <div className='row'>
        <div className='col-12 col-lg-4'>
          {/* start card */}
          <Card>
            <CardBody>
              <CardTitle tag='h5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </CardText>
            </CardBody>
          </Card>
          {/* end card */}
        </div>

        <div className='col-12 col-lg-4 d-none d-lg-block'>
          {/* start card */}
          <Card>
            <CardBody>
              <CardTitle tag='h5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </CardText>
            </CardBody>
          </Card>
          {/* end card */}
        </div>
        <div className='col-12 col-lg-4 d-none d-lg-block'>
          {/* start card */}
          <Card>
            <CardBody>
              <CardTitle tag='h5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </CardText>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
}`,...(B=(f=o.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var h,q,x;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div>
      <Fade in={true} tag='div' className='mt-3'>
        <Dimmer color='primary' icon='it-unlocked'>
          <p>
            Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo
            donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
          </p>
        </Dimmer>
      </Fade>
      <div className='row'>
        <div className='col-12 col-lg-4'>
          {/* start card */}
          <Card>
            <CardBody>
              <CardTitle tag='h5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </CardText>
            </CardBody>
          </Card>
          {/* end card */}
        </div>

        <div className='col-12 col-lg-4 d-none d-lg-block'>
          {/* start card */}
          <Card>
            <CardBody>
              <CardTitle tag='h5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </CardText>
            </CardBody>
          </Card>
          {/* end card */}
        </div>
        <div className='col-12 col-lg-4 d-none d-lg-block'>
          {/* start card */}
          <Card>
            <CardBody>
              <CardTitle tag='h5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </CardText>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
}`,...(x=(q=l.parameters)==null?void 0:q.docs)==null?void 0:x.source}}};var k,z,A;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div>
      <Fade in={true} tag='div' className='mt-3'>
        <Dimmer icon='it-unlocked'>
          <h4>Titolo Dimmer</h4>
          <DimmerButtons>
            <Button color='primary' outline>
              Azione secondaria
            </Button>
            <Button color='primary'>Azione primaria</Button>
          </DimmerButtons>
        </Dimmer>
      </Fade>
      <div className='col'>
        <div className='col-12 col-lg-4'>
          {/* start card */}
          <Card>
            <CardBody>
              <CardTitle tag='h5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </CardText>
            </CardBody>
          </Card>
          {/* end card */}
        </div>
        <div className='col-12 col-lg-4 d-none d-lg-block'>
          {/* start card */}
          <Card>
            <CardBody>
              <CardTitle tag='h5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </CardText>
            </CardBody>
          </Card>
          {/* end card */}
        </div>
      </div>
    </div>
}`,...(A=(z=d.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var P,w,F;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div>
      <Fade in={true} tag='div' className='mt-3'>
        <Dimmer color='primary' icon='it-unlocked'>
          <h4>Titolo Dimmer</h4>
          <DimmerButtons single>
            <Button color='primary'>Azione primaria</Button>
          </DimmerButtons>
        </Dimmer>
      </Fade>
      <div className='col'>
        <div className='col-12 col-lg-4'>
          {/* start card */}
          <Card>
            <CardBody>
              <CardTitle tag='h5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </CardText>
            </CardBody>
          </Card>
          {/* end card */}
        </div>
        <div className='col-12 col-lg-4 d-none d-lg-block'>
          {/* start card */}
          <Card>
            <CardBody>
              <CardTitle tag='h5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </CardText>
            </CardBody>
          </Card>
          {/* end card */}
        </div>
      </div>
    </div>
}`,...(F=(w=s.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};const O=["Esempi","ColorePrimario","DimmerConAzioni","DimmerConAzioniColorePrimario"],K=Object.freeze(Object.defineProperty({__proto__:null,ColorePrimario:l,DimmerConAzioni:d,DimmerConAzioniColorePrimario:s,Esempi:o,__namedExportsOrder:O,default:j},Symbol.toStringTag,{value:"Module"}));export{l as C,K as D,o as E,d as a,s as b,r as c};
