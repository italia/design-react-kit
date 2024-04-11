import{R as e}from"./index-BFWcBMrj.js";import{T as r}from"./Toggle-CgWvXWae.js";import{R as s,C as l}from"./Col-CzbmXXhQ.js";import{F as n}from"./Form-BOkbrBXv.js";import{F as o}from"./FormGroup-B-MqxR9s.js";import{F as m}from"./FormText-qdYYmIzq.js";const E={title:"Documentazione/Form/Toggles",component:r},t={render:()=>e.createElement(s,null,e.createElement(l,{sm:"6"},e.createElement(o,{check:!0,className:"m-3"},e.createElement(r,{label:"Label dell'interruttore 1",disabled:!1}))),e.createElement(l,{sm:"6"},e.createElement(o,{check:!0,className:"m-3"},e.createElement(r,{label:e.createElement("span",null,"Label dell'interruttore 2"),defaultChecked:!0,disabled:!1}))))},a={render:()=>e.createElement(s,null,e.createElement(l,{sm:"6"},e.createElement(o,{check:!0,className:"m-3"},e.createElement(r,{label:"Label dell'interruttore 1",disabled:!0}))),e.createElement(l,{sm:"6"},e.createElement(o,{check:!0,className:"m-3"},e.createElement(r,{label:e.createElement("span",null,"Label dell'interruttore 2"),defaultChecked:!0,disabled:!0}))))},c={render:()=>e.createElement(s,{className:"m-5"},e.createElement(l,{md:5},e.createElement(n,null,e.createElement(o,{check:!0,className:"form-check-group"},e.createElement(r,{defaultChecked:!0,label:"Toggle acceso"})),e.createElement(o,{check:!0,className:"form-check-group"},e.createElement(r,{label:"Toggle spento"})),e.createElement(o,{check:!0,className:"form-check-group"},e.createElement(r,{disabled:!0,label:"Toggle disabilitato"})))),e.createElement(l,{md:2}),e.createElement(l,{md:5},e.createElement(n,null,e.createElement(o,{check:!0,className:"form-check-group"},e.createElement(r,{defaultChecked:!0,label:"Toggle acceso"}),e.createElement(m,{color:"muted"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero")),e.createElement(o,{check:!0,className:"form-check-group"},e.createElement(r,{label:"Toggle spento"}),e.createElement(m,{color:"muted"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero")),e.createElement(o,{check:!0,className:"form-check-group"},e.createElement(r,{disabled:!0,label:"Toggle disabilitato"}),e.createElement(m,{color:"muted"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero")))))};var u,i,d;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    return <Row>
                <Col sm="6">
                    <FormGroup check className="m-3">
                        <Toggle label="Label dell'interruttore 1" disabled={false} />
                    </FormGroup>
                </Col>
                <Col sm="6">
                    <FormGroup check className="m-3">
                        <Toggle label={<span>Label dell&apos;interruttore 2</span>} defaultChecked disabled={false} />
                    </FormGroup>
                </Col>
            </Row>;
  }
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var g,p,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    return <Row>
                <Col sm="6">
                    <FormGroup check className="m-3">
                        <Toggle label="Label dell'interruttore 1" disabled={true} />
                    </FormGroup>
                </Col>
                <Col sm="6">
                    <FormGroup check className="m-3">
                        <Toggle label={<span>Label dell&apos;interruttore 2</span>} defaultChecked disabled={true} />
                    </FormGroup>
                </Col>
            </Row>;
  }
}`,...(b=(p=a.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var T,h,k;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    return <Row className="m-5">
                <Col md={5}>
                    <Form>
                        <FormGroup check className="form-check-group">
                            <Toggle defaultChecked label="Toggle acceso" />
                        </FormGroup>
                        <FormGroup check className="form-check-group">
                            <Toggle label="Toggle spento" />
                        </FormGroup>
                        <FormGroup check className="form-check-group">
                            <Toggle disabled label="Toggle disabilitato" />
                        </FormGroup>
                    </Form>
                </Col>
                <Col md={2} />
                <Col md={5}>
                    <Form>
                        <FormGroup check className="form-check-group">
                            <Toggle defaultChecked label="Toggle acceso" />
                            <FormText color="muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</FormText>
                        </FormGroup>
                        <FormGroup check className="form-check-group">
                            <Toggle label="Toggle spento" />
                            <FormText color="muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</FormText>
                        </FormGroup>
                        <FormGroup check className="form-check-group">
                            <Toggle disabled label="Toggle disabilitato" />
                            <FormText color="muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</FormText>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>;
  }
}`,...(k=(h=c.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};const F=["Toggles","TogglesDisabilitate","GruppiDiToggles"],x=Object.freeze(Object.defineProperty({__proto__:null,GruppiDiToggles:c,Toggles:t,TogglesDisabilitate:a,__namedExportsOrder:F,default:E},Symbol.toStringTag,{value:"Module"}));export{c as G,x as T,t as a,a as b};
