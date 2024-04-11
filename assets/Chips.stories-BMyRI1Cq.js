import{R as e}from"./index-BFWcBMrj.js";import{c as T}from"./index-Bl6ORisp.js";import{R as V,C as h}from"./Col-CzbmXXhQ.js";import{B as l}from"./Button-BvsBu0Bj.js";import{I as n}from"./Icon-Dn2FEDq_.js";const a=({className:m,color:c="",tag:p="div",simple:u=!1,large:d=!1,disabled:b=!1,testId:D,...S})=>{const R=p,M=T("chip",m,{"chip-simple":u,"chip-lg":d,"chip-disabled":b,[`chip-${c}`]:c});return e.createElement(R,{className:M,...S,"data-testid":D})};a.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{tag:{required:!1,tsType:{name:"ElementType"},description:"Utilizzarlo in caso di utilizzo di componenti personalizzati",defaultValue:{value:"'div'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Classi aggiuntive da usare per il componente Chip"},simple:{required:!1,tsType:{name:"boolean"},description:"Impostarlo su `true` per centrare la label all'interno",defaultValue:{value:"false",computed:!1}},large:{required:!1,tsType:{name:"boolean"},description:"Impostarlo su `true` per una versione più grande del componente Chip.",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Impostarlo su `true` per renderizzare il componente Chip come disabilitato",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'danger' | 'warning' | string",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"string"}]},description:"Le varianti di colore definite in Bootstrap Italia",defaultValue:{value:"''",computed:!1}},testId:{required:!1,tsType:{name:"string"},description:""}},composes:["HTMLAttributes"]};const t=({className:m,tag:c="span",testId:p,...u})=>{const d=c,b=T(m,"chip-label");return e.createElement(d,{...u,className:b,"data-testid":p})};t.__docgenInfo={description:"",methods:[],displayName:"ChipLabel",props:{tag:{required:!1,tsType:{name:"ElementType"},description:"Utilizzarlo in caso di utilizzo di componenti personalizzati",defaultValue:{value:"'span'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Classi aggiuntive da usare per il componente ChipLabel"},testId:{required:!1,tsType:{name:"string"},description:""}},composes:["HTMLAttributes"]};const j={title:"Documentazione/Componenti/Chips",component:a},i={render:()=>e.createElement(V,null,e.createElement(h,{xs:"12",md:{size:6}},e.createElement("h4",null,"Versione Standard"),e.createElement("p",{className:"mt-4 mb-2"},"Solo testo"),e.createElement(a,{simple:!0},e.createElement(t,null,"Label")),e.createElement("p",{className:"mt-4 mb-2"},"Testo e chiusura"),e.createElement(a,null,e.createElement(t,null,"Label"),e.createElement(l,null,e.createElement(n,{icon:"it-close"}))),e.createElement("p",{className:"mt-4 mb-2"},"Icona, testo e chiusura"),e.createElement(a,null,e.createElement(n,{icon:"it-github",size:"xs"}),e.createElement(t,null,"Label"),e.createElement(l,null,e.createElement(n,{icon:"it-close"}))),e.createElement("p",{className:"mt-4 mb-2"},"Avatar, testo e chiusura"),e.createElement(a,null,e.createElement("div",{className:"avatar size-xs"},e.createElement("img",{src:"https://randomuser.me/api/portraits/men/46.jpg",alt:"Mario Rossi"})),e.createElement(t,null,"Label"),e.createElement(l,null,e.createElement(n,{icon:"it-close"})))),e.createElement(h,{xs:"12",md:{size:6}},e.createElement("h4",null,"Versione Grande"),e.createElement("p",{className:"mt-4 mb-2"},"Solo testo"),e.createElement(a,{simple:!0,large:!0},e.createElement(t,null,"Label")),e.createElement("p",{className:"mt-4 mb-2"},"Testo e chiusura"),e.createElement(a,{large:!0},e.createElement(t,null,"Label"),e.createElement(l,null,e.createElement(n,{icon:"it-close"}))),e.createElement("p",{className:"mt-4 mb-2"},"Icona, testo e chiusura"),e.createElement(a,{large:!0},e.createElement(n,{icon:"it-github",size:"xs"}),e.createElement(t,null,"Label"),e.createElement(l,null,e.createElement(n,{icon:"it-close"}))),e.createElement("p",{className:"mt-4 mb-2"},"Avatar, testo e chiusura"),e.createElement(a,{large:!0},e.createElement("div",{className:"avatar size-xs"},e.createElement("img",{src:"https://randomuser.me/api/portraits/men/46.jpg",alt:"Mario Rossi"})),e.createElement(t,null,"Label"),e.createElement(l,null,e.createElement(n,{icon:"it-close"})))))},r={render:()=>e.createElement("div",null,e.createElement(a,{simple:!0,large:!0,disabled:!0},e.createElement(t,null,"Label Disabled")),e.createElement(a,{simple:!0,large:!0,disabled:!0},e.createElement(t,null,"Label Disabled"),e.createElement(l,{disabled:!0},e.createElement(n,{icon:"it-close"}))),e.createElement(a,{large:!0,disabled:!0},e.createElement(n,{icon:"it-github",size:"xs"}),e.createElement(t,null,"Label Disabled"),e.createElement(l,{disabled:!0},e.createElement(n,{icon:"it-close"}))),e.createElement(a,{large:!0,disabled:!0},e.createElement("div",{className:"avatar size-xs"},e.createElement("img",{src:"https://randomuser.me/api/portraits/men/46.jpg",alt:"Mario Rossi"})),e.createElement(t,null,"Label"),e.createElement(l,{disabled:!0},e.createElement(n,{icon:"it-close"}))))},s={render:()=>e.createElement("div",null,e.createElement(a,{simple:!0},e.createElement(t,null,"Label")),e.createElement(a,null,e.createElement(t,null,"Label"),e.createElement(l,null,e.createElement(n,{icon:"it-close"}))),e.createElement(a,null,e.createElement(n,{icon:"it-github",size:"xs"}),e.createElement(t,null,"Label "),e.createElement(l,null,e.createElement(n,{icon:"it-close"}))),e.createElement(a,null,e.createElement("div",{className:"avatar size-xs"},e.createElement("img",{src:"https://randomuser.me/api/portraits/men/46.jpg",alt:"Mario Rossi"})),e.createElement(t,null,"Label"),e.createElement(l,null,e.createElement(n,{icon:"it-close"}))),e.createElement("hr",null),e.createElement(a,{simple:!0,large:!0},e.createElement(t,null,"Label")),e.createElement(a,{large:!0},e.createElement(t,null,"Label"),e.createElement(l,null,e.createElement(n,{icon:"it-close"}))),e.createElement(a,{large:!0},e.createElement(n,{icon:"it-github",size:"xs"}),e.createElement(t,null,"Label "),e.createElement(l,null,e.createElement(n,{icon:"it-close"}))),e.createElement(a,{large:!0},e.createElement("div",{className:"avatar size-xs"},e.createElement("img",{src:"https://randomuser.me/api/portraits/men/46.jpg",alt:"Mario Rossi"})),e.createElement(t,null,"Label"),e.createElement(l,null,e.createElement(n,{icon:"it-close"}))))},o={render:()=>e.createElement("div",null,e.createElement("p",{className:"mt-4 mb-2"},"Primary color"),e.createElement(a,{simple:!0,color:"primary"},e.createElement(t,null,"Primary")),e.createElement("p",{className:"mt-4 mb-2"},"Warning Color"),e.createElement(a,{simple:!0,color:"warning"},e.createElement(t,null,"Warning")),e.createElement("p",{className:"mt-4 mb-2"},"Success Color"),e.createElement(a,{simple:!0,color:"success"},e.createElement(t,null,"Success")),e.createElement("p",{className:"mt-4 mb-2"},"Danger Color"),e.createElement(a,{simple:!0,color:"danger"},e.createElement(t,null,"Danger")),e.createElement("p",{className:"mt-4 mb-2"},"Info Color"),e.createElement(a,{simple:!0,color:"info"},e.createElement(t,null,"Information")))};var C,E,L;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Row>
      <Col xs='12' md={{
      size: 6
    }}>
        <h4>Versione Standard</h4>
        <p className='mt-4 mb-2'>Solo testo</p>
        <Chip simple>
          <ChipLabel>Label</ChipLabel>
        </Chip>
        <p className='mt-4 mb-2'>Testo e chiusura</p>
        <Chip>
          <ChipLabel>Label</ChipLabel>
          <Button>
            <Icon icon='it-close' />
          </Button>
        </Chip>
        <p className='mt-4 mb-2'>Icona, testo e chiusura</p>
        <Chip>
          <Icon icon='it-github' size='xs' />
          <ChipLabel>Label</ChipLabel>
          <Button>
            <Icon icon='it-close' />
          </Button>
        </Chip>
        <p className='mt-4 mb-2'>Avatar, testo e chiusura</p>
        <Chip>
          <div className='avatar size-xs'>
            <img src='https://randomuser.me/api/portraits/men/46.jpg' alt='Mario Rossi' />
          </div>
          <ChipLabel>Label</ChipLabel>
          <Button>
            <Icon icon='it-close' />
          </Button>
        </Chip>
      </Col>
      <Col xs='12' md={{
      size: 6
    }}>
        <h4>Versione Grande</h4>
        <p className='mt-4 mb-2'>Solo testo</p>
        <Chip simple large>
          <ChipLabel>Label</ChipLabel>
        </Chip>
        <p className='mt-4 mb-2'>Testo e chiusura</p>
        <Chip large>
          <ChipLabel>Label</ChipLabel>
          <Button>
            <Icon icon='it-close' />
          </Button>
        </Chip>
        <p className='mt-4 mb-2'>Icona, testo e chiusura</p>
        <Chip large>
          <Icon icon='it-github' size='xs' />
          <ChipLabel>Label</ChipLabel>
          <Button>
            <Icon icon='it-close' />
          </Button>
        </Chip>
        <p className='mt-4 mb-2'>Avatar, testo e chiusura</p>
        <Chip large>
          <div className='avatar size-xs'>
            <img src='https://randomuser.me/api/portraits/men/46.jpg' alt='Mario Rossi' />
          </div>
          <ChipLabel>Label</ChipLabel>
          <Button>
            <Icon icon='it-close' />
          </Button>
        </Chip>
      </Col>
    </Row>
}`,...(L=(E=i.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var g,v,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div>
      <Chip simple large disabled>
        <ChipLabel>Label Disabled</ChipLabel>
      </Chip>
      <Chip simple large disabled>
        <ChipLabel>Label Disabled</ChipLabel>
        <Button disabled>
          <Icon icon='it-close' />
        </Button>
      </Chip>
      <Chip large disabled>
        <Icon icon='it-github' size='xs' />
        <ChipLabel>Label Disabled</ChipLabel>
        <Button disabled>
          <Icon icon='it-close' />
        </Button>
      </Chip>
      <Chip large disabled>
        <div className='avatar size-xs'>
          <img src='https://randomuser.me/api/portraits/men/46.jpg' alt='Mario Rossi' />
        </div>
        <ChipLabel>Label</ChipLabel>
        <Button disabled>
          <Icon icon='it-close' />
        </Button>
      </Chip>
    </div>
}`,...(f=(v=r.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var N,z,I;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div>
      <Chip simple>
        <ChipLabel>Label</ChipLabel>
      </Chip>
      <Chip>
        <ChipLabel>Label</ChipLabel>
        <Button>
          <Icon icon='it-close' />
        </Button>
      </Chip>
      <Chip>
        <Icon icon='it-github' size='xs' />
        <ChipLabel>Label </ChipLabel>
        <Button>
          <Icon icon='it-close' />
        </Button>
      </Chip>
      <Chip>
        <div className='avatar size-xs'>
          <img src='https://randomuser.me/api/portraits/men/46.jpg' alt='Mario Rossi' />
        </div>
        <ChipLabel>Label</ChipLabel>
        <Button>
          <Icon icon='it-close' />
        </Button>
      </Chip>
      <hr />
      <Chip simple large>
        <ChipLabel>Label</ChipLabel>
      </Chip>
      <Chip large>
        <ChipLabel>Label</ChipLabel>
        <Button>
          <Icon icon='it-close' />
        </Button>
      </Chip>
      <Chip large>
        <Icon icon='it-github' size='xs' />
        <ChipLabel>Label </ChipLabel>
        <Button>
          <Icon icon='it-close' />
        </Button>
      </Chip>
      <Chip large>
        <div className='avatar size-xs'>
          <img src='https://randomuser.me/api/portraits/men/46.jpg' alt='Mario Rossi' />
        </div>
        <ChipLabel>Label</ChipLabel>
        <Button>
          <Icon icon='it-close' />
        </Button>
      </Chip>
    </div>
}`,...(I=(z=s.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var B,x,y;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div>
      <p className='mt-4 mb-2'>Primary color</p>
      <Chip simple color='primary'>
        <ChipLabel>Primary</ChipLabel>
      </Chip>
      <p className='mt-4 mb-2'>Warning Color</p>
      <Chip simple color='warning'>
        <ChipLabel>Warning</ChipLabel>
      </Chip>
      <p className='mt-4 mb-2'>Success Color</p>
      <Chip simple color='success'>
        <ChipLabel>Success</ChipLabel>
      </Chip>
      <p className='mt-4 mb-2'>Danger Color</p>
      <Chip simple color='danger'>
        <ChipLabel>Danger</ChipLabel>
      </Chip>
      <p className='mt-4 mb-2'>Info Color</p>
      <Chip simple color='info'>
        <ChipLabel>Information</ChipLabel>
      </Chip>
    </div>
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const q=["Esempi","ChipDisabilitata","GruppiDiChip","VariantiDiColore"],W=Object.freeze(Object.defineProperty({__proto__:null,ChipDisabilitata:r,Esempi:i,GruppiDiChip:s,VariantiDiColore:o,__namedExportsOrder:q,default:j},Symbol.toStringTag,{value:"Module"}));export{W as C,i as E,s as G,o as V,r as a,a as b,t as c};
