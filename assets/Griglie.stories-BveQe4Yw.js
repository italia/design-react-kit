import{R as e}from"./index-BFWcBMrj.js";import{R as n,C as l}from"./Col-CzbmXXhQ.js";import{C as o}from"./Container-DxD9c0zF.js";const A={title:"Documentazione/Organizzare gli spazi/Griglie",component:n},a={render:()=>e.createElement("div",{className:"docs layout-example"},e.createElement(o,null,e.createElement(n,null,e.createElement(l,null,"Una di tre colonne"),e.createElement(l,null,"Una di tre colonne"),e.createElement(l,null,"Una di tre colonne"))))},t={render:()=>e.createElement("div",{className:"docs layout-example"},e.createElement(o,null,e.createElement(n,null,e.createElement(l,null,"1 di 2"),e.createElement(l,null,"2 di 2")),e.createElement(n,null,e.createElement(l,null,"1 di 3"),e.createElement(l,null,"2 di 3"),e.createElement(l,null,"3 di 3"))))},r={render:()=>e.createElement("div",{className:"docs layout-example"},e.createElement(o,null,e.createElement(n,null,e.createElement(l,null,"Colonna"),e.createElement(l,null,"Colonna"),e.createElement("div",{className:"w-100"}),e.createElement(l,null,"Colonna"),e.createElement(l,null,"Colonna"))))},c={render:()=>e.createElement("div",{className:"docs layout-example"},e.createElement(o,null,e.createElement(n,null,e.createElement(l,null,"1 di 3"),e.createElement(l,{xs:"6"},"2 di 3 (larga 6/12)"),e.createElement(l,null,"3 di 3")),e.createElement(n,null,e.createElement(l,null,"1 di 3"),e.createElement(l,{xs:"5"},"2 di 3 (larga 5/12)"),e.createElement(l,null,"3 di 3"))))},s={render:()=>e.createElement("div",{className:"docs layout-example"},e.createElement(o,null,e.createElement(n,{className:"justify-content-md-center"},e.createElement(l,{lg:"2"},"1 di 3"),e.createElement(l,{xs:"auto"},"Contenuto a larghezza variabile"),e.createElement(l,{lg:"2"},"3 di 3")),e.createElement(n,null,e.createElement(l,null,"1 di 3"),e.createElement(l,{md:"auto"},"Contenuto a larghezza variabile"),e.createElement(l,{lg:"2"},"3 di 3"))))},m={render:()=>e.createElement("div",{className:"docs layout-example"},e.createElement(o,null,e.createElement(n,null,e.createElement(l,null,"col"),e.createElement(l,null,"col")),e.createElement(n,null,e.createElement(l,null,"col"),e.createElement(l,null,"col"))))},d={render:()=>e.createElement("div",{className:"docs layout-example"},e.createElement(o,null,e.createElement(n,null,e.createElement(l,null,"col"),e.createElement(l,null,"col"),e.createElement(l,null,"col"),e.createElement(l,null,"col")),e.createElement(n,null,e.createElement(l,{xs:8},"col-8"),e.createElement(l,{xs:4},"col-4"))))},i={render:()=>e.createElement("div",{className:"docs layout-example"},e.createElement(o,null,e.createElement(n,null,e.createElement(l,{sm:"8"},"col-sm-8"),e.createElement(l,{sm:"4"},"col-sm-4")),e.createElement(n,null,e.createElement(l,{widths:["sm"]},"col-sm"),e.createElement(l,{widths:["sm"]},"col-sm"),e.createElement(l,{widths:["sm"]},"col-sm"))))},C={render:()=>e.createElement("div",{className:"docs layout-example"},e.createElement(o,null,e.createElement(n,null,e.createElement(l,{xs:"12",md:"8"},".col-12 .col-md-8"),e.createElement(l,{xs:"6",md:"4"},".col-6 .col-md-4")),e.createElement(n,null,e.createElement(l,{xs:"6",md:"4"},".col-6 .col-md-4"),e.createElement(l,{xs:"6",md:"4"},".col-6 .col-md-4"),e.createElement(l,{xs:"6",md:"4"},".col-6 .col-md-4")),e.createElement(n,null,e.createElement(l,{xs:"6"},".col-6"),e.createElement(l,{xs:"6"},".col-6"))))};var u,E,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className='docs layout-example'>
      <Container>
        <Row>
          <Col>Una di tre colonne</Col>
          <Col>Una di tre colonne</Col>
          <Col>Una di tre colonne</Col>
        </Row>
      </Container>
    </div>
}`,...(p=(E=a.parameters)==null?void 0:E.docs)==null?void 0:p.source}}};var w,R,x;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className='docs layout-example'>
      <Container>
        <Row>
          <Col>1 di 2</Col>
          <Col>2 di 2</Col>
        </Row>
        <Row>
          <Col>1 di 3</Col>
          <Col>2 di 3</Col>
          <Col>3 di 3</Col>
        </Row>
      </Container>
    </div>
}`,...(x=(R=t.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};var g,v,z;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className='docs layout-example'>
      <Container>
        <Row>
          <Col>Colonna</Col>
          <Col>Colonna</Col>
          <div className='w-100'></div>
          <Col>Colonna</Col>
          <Col>Colonna</Col>
        </Row>
      </Container>
    </div>
}`,...(z=(v=r.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var h,y,N;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className='docs layout-example'>
      <Container>
        <Row>
          <Col>1 di 3</Col>
          <Col xs='6'>2 di 3 (larga 6/12)</Col>
          <Col>3 di 3</Col>
        </Row>
        <Row>
          <Col>1 di 3</Col>
          <Col xs='5'>2 di 3 (larga 5/12)</Col>
          <Col>3 di 3</Col>
        </Row>
      </Container>
    </div>
}`,...(N=(y=c.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var S,b,f;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className='docs layout-example'>
      <Container>
        <Row className='justify-content-md-center'>
          <Col lg='2'>1 di 3</Col>
          <Col xs='auto'>Contenuto a larghezza variabile</Col>
          <Col lg='2'>3 di 3</Col>
        </Row>
        <Row>
          <Col>1 di 3</Col>
          <Col md='auto'>Contenuto a larghezza variabile</Col>
          <Col lg='2'>3 di 3</Col>
        </Row>
      </Container>
    </div>
}`,...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var M,I,L;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className='docs layout-example'>
      <Container>
        <Row>
          <Col>col</Col>
          <Col>col</Col>
        </Row>
        <Row>
          <Col>col</Col>
          <Col>col</Col>
        </Row>
      </Container>
    </div>
}`,...(L=(I=m.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var B,O,U;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div className='docs layout-example'>
      <Container>
        <Row>
          <Col>col</Col>
          <Col>col</Col>
          <Col>col</Col>
          <Col>col</Col>
        </Row>
        <Row>
          <Col xs={8}>col-8</Col>
          <Col xs={4}>col-4</Col>
        </Row>
      </Container>
    </div>
}`,...(U=(O=d.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var _,j,T;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div className='docs layout-example'>
      <Container>
        <Row>
          <Col sm='8'>col-sm-8</Col>
          <Col sm='4'>col-sm-4</Col>
        </Row>
        <Row>
          <Col widths={['sm']}>col-sm</Col>
          <Col widths={['sm']}>col-sm</Col>
          <Col widths={['sm']}>col-sm</Col>
        </Row>
      </Container>
    </div>
}`,...(T=(j=i.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var G,k,q;C.parameters={...C.parameters,docs:{...(G=C.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div className='docs layout-example'>
      <Container>
        <Row>
          <Col xs='12' md='8'>
            .col-12 .col-md-8
          </Col>
          <Col xs='6' md='4'>
            .col-6 .col-md-4
          </Col>
        </Row>
        <Row>
          <Col xs='6' md='4'>
            .col-6 .col-md-4
          </Col>
          <Col xs='6' md='4'>
            .col-6 .col-md-4
          </Col>
          <Col xs='6' md='4'>
            .col-6 .col-md-4
          </Col>
        </Row>
        <Row>
          <Col xs='6'>.col-6</Col>
          <Col xs='6'>.col-6</Col>
        </Row>
      </Container>
    </div>
}`,...(q=(k=C.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};const V=["EsempioBase","LarghezzeStandard","RigheMultipleBugSafari","ImpostaLarghezzaColonne","ContenutoLarghezzaVariabile","EqualWidthMultiRow","TuttiIBreakpoint","RaccoltiInOrizzontale","MischiareEAbbinare"],F=Object.freeze(Object.defineProperty({__proto__:null,ContenutoLarghezzaVariabile:s,EqualWidthMultiRow:m,EsempioBase:a,ImpostaLarghezzaColonne:c,LarghezzeStandard:t,MischiareEAbbinare:C,RaccoltiInOrizzontale:i,RigheMultipleBugSafari:r,TuttiIBreakpoint:d,__namedExportsOrder:V,default:A},Symbol.toStringTag,{value:"Module"}));export{s as C,a as E,F as G,c as I,t as L,C as M,r as R,d as T,m as a,i as b};
