import{R as e}from"./index-BFWcBMrj.js";import{I as c}from"./Input-CLSFLk54.js";import{F as n}from"./Form-BOkbrBXv.js";import{R as z,C as i}from"./Col-CzbmXXhQ.js";import{F as o}from"./FormGroup-B-MqxR9s.js";import{F as h}from"./FormText-qdYYmIzq.js";import{L as t}from"./Label-fWy_qovk.js";const I={title:"Documentazione/Form/Checkbox",component:c},r={render:()=>e.createElement(n,{className:"m-3"},e.createElement("fieldset",null,e.createElement("legend",null,"Checkbox"),e.createElement(o,{check:!0},e.createElement(c,{id:"checkbox1",type:"checkbox"}),e.createElement(t,{for:"checkbox1",check:!0},"Checkbox di esempio"))))},l={render:()=>e.createElement("section",null,e.createElement("fieldset",null,e.createElement("legend",null,"Checkbox"),e.createElement(n,{className:"m-3"},e.createElement(o,{check:!0,inline:!0},e.createElement(c,{id:"inline-checkbox1",type:"checkbox"}),e.createElement(t,{for:"inline-checkbox1",check:!0},"Checkbox non selezionato")),e.createElement(o,{check:!0,inline:!0},e.createElement(c,{id:"inline-checkbox2",type:"checkbox",defaultChecked:!0}),e.createElement(t,{for:"inline-checkbox2",check:!0},"Checkbox selezionato")))))},a={render:()=>e.createElement("section",null,e.createElement("fieldset",null,e.createElement("legend",null,"Checkbox"),e.createElement(n,{className:"m-3"},e.createElement(o,{check:!0},e.createElement(c,{disabled:!0,id:"disabled-checkbox1",type:"checkbox"}),e.createElement(t,{for:"disabled-checkbox1",check:!0},"Checkbox disabilitato non selezionato")),e.createElement(o,{check:!0},e.createElement(c,{disabled:!0,id:"disabled-checkbox2",type:"checkbox",defaultChecked:!0}),e.createElement(t,{for:"disabled-checkbox2",check:!0},"Checkbox disabilitato selezionato")))))},s={render:()=>e.createElement("section",null,e.createElement(z,{className:"m-5"},e.createElement(i,{md:5},e.createElement("fieldset",null,e.createElement("legend",null,"Checkbox"),e.createElement(n,null,e.createElement(o,{check:!0,className:"form-check-group"},e.createElement(c,{id:"group-checkbox1",type:"checkbox",defaultChecked:!0}),e.createElement(t,{for:"group-checkbox1",check:!0},"Checkbox selezionato")),e.createElement(o,{check:!0,className:"form-check-group"},e.createElement(c,{id:"group-checkbox2",type:"checkbox"}),e.createElement(t,{for:"group-checkbox2",check:!0},"Checkbox non selezionato")),e.createElement(o,{check:!0,className:"form-check-group"},e.createElement(c,{id:"group-checkbox3",type:"checkbox",disabled:!0}),e.createElement(t,{for:"group-checkbox3",check:!0},"Checkbox disabilitato non selezionato"))))),e.createElement(i,{md:2}),e.createElement(i,{md:5},e.createElement("fieldset",null,e.createElement("legend",null,"Checkbox"),e.createElement(n,null,e.createElement(o,{check:!0,className:"form-check-group"},e.createElement(c,{id:"group-checkbox4",type:"checkbox",defaultChecked:!0}),e.createElement(t,{for:"group-checkbox4",check:!0},"Checkbox selezionato"),e.createElement(h,{color:""},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero")),e.createElement(o,{check:!0,className:"form-check-group"},e.createElement(c,{id:"group-checkbox5",type:"checkbox"}),e.createElement(t,{for:"group-checkbox5",check:!0},"Checkbox non selezionato"),e.createElement(h,{color:""},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero")),e.createElement(o,{check:!0,className:"form-check-group"},e.createElement(c,{id:"group-checkbox6",type:"checkbox",disabled:!0}),e.createElement(t,{for:"group-checkbox6",check:!0},"Checkbox disabilitato non selezionato"),e.createElement(h,{color:""},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero")))))))},m={render:()=>e.createElement("section",null,e.createElement(z,{className:"m-5"},e.createElement(i,{sm:"12"},e.createElement("fieldset",null,e.createElement("legend",null,"Checkbox"),e.createElement(n,{className:"m-3"},e.createElement(o,{check:!0,inline:!0},e.createElement(c,{id:"checkbox3",type:"checkbox",defaultChecked:!0,className:"semi-checked",label:"Mixed button attivo"})))))))};var k,b,d;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Form className="m-3">
            <fieldset>
                <legend>Checkbox</legend>
                <FormGroup check>
                    <Input id="checkbox1" type="checkbox" />
                    <Label for="checkbox1" check>
                        Checkbox di esempio
                    </Label>
                </FormGroup>
            </fieldset>
        </Form>
}`,...(d=(b=r.parameters)==null?void 0:b.docs)==null?void 0:d.source}}};var u,p,x;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <section>
            <fieldset>
                <legend>Checkbox</legend>
                <Form className="m-3">
                    <FormGroup check inline>
                        <Input id="inline-checkbox1" type="checkbox" />
                        <Label for="inline-checkbox1" check>
                            Checkbox non selezionato
                        </Label>
                    </FormGroup>
                    <FormGroup check inline>
                        <Input id="inline-checkbox2" type="checkbox" defaultChecked />
                        <Label for="inline-checkbox2" check>
                            Checkbox selezionato
                        </Label>
                    </FormGroup>
                </Form>
            </fieldset>
        </section>
}`,...(x=(p=l.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var f,g,E;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <section>
            <fieldset>
                <legend>Checkbox</legend>
                <Form className="m-3">
                    <FormGroup check>
                        <Input disabled id="disabled-checkbox1" type="checkbox" />
                        <Label for="disabled-checkbox1" check>
                            Checkbox disabilitato non selezionato
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input disabled id="disabled-checkbox2" type="checkbox" defaultChecked />
                        <Label for="disabled-checkbox2" check>
                            Checkbox disabilitato selezionato
                        </Label>
                    </FormGroup>
                </Form>
            </fieldset>
        </section>
}`,...(E=(g=a.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var C,F,L;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <section>
            <Row className="m-5">
                <Col md={5}>
                    <fieldset>
                        <legend>Checkbox</legend>
                        <Form>
                            <FormGroup check className="form-check-group">
                                <Input id="group-checkbox1" type="checkbox" defaultChecked />
                                <Label for="group-checkbox1" check>
                                    Checkbox selezionato
                                </Label>
                            </FormGroup>
                            <FormGroup check className="form-check-group">
                                <Input id="group-checkbox2" type="checkbox" />
                                <Label for="group-checkbox2" check>
                                    Checkbox non selezionato
                                </Label>
                            </FormGroup>
                            <FormGroup check className="form-check-group">
                                <Input id="group-checkbox3" type="checkbox" disabled />
                                <Label for="group-checkbox3" check>
                                    Checkbox disabilitato non selezionato
                                </Label>
                            </FormGroup>
                        </Form>
                    </fieldset>
                </Col>
                <Col md={2} />
                <Col md={5}>
                    <fieldset>
                        <legend>Checkbox</legend>
                        <Form>
                            <FormGroup check className="form-check-group">
                                <Input id="group-checkbox4" type="checkbox" defaultChecked />
                                <Label for="group-checkbox4" check>
                                    Checkbox selezionato
                                </Label>
                                <FormText color="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</FormText>
                            </FormGroup>
                            <FormGroup check className="form-check-group">
                                <Input id="group-checkbox5" type="checkbox" />
                                <Label for="group-checkbox5" check>
                                    Checkbox non selezionato
                                </Label>
                                <FormText color="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</FormText>
                            </FormGroup>
                            <FormGroup check className="form-check-group">
                                <Input id="group-checkbox6" type="checkbox" disabled />
                                <Label for="group-checkbox6" check>
                                    Checkbox disabilitato non selezionato
                                </Label>
                                <FormText color="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</FormText>
                            </FormGroup>
                        </Form>
                    </fieldset>
                </Col>
            </Row>
        </section>
}`,...(L=(F=s.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var G,y,N;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <section>
            <Row className="m-5">
                <Col sm="12">
                    <fieldset>
                        <legend>Checkbox</legend>
                        <Form className="m-3">
                            <FormGroup check inline>
                                <Input id="checkbox3" type="checkbox" defaultChecked className="semi-checked" label="Mixed button attivo" />
                            </FormGroup>
                        </Form>
                    </fieldset>
                </Col>
            </Row>
        </section>
}`,...(N=(y=m.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};const M=["CheckboxBase","CheckboxInline","CheckboxDisabilitato","CheckboxGruppi","CheckboxMixedButton"],D=Object.freeze(Object.defineProperty({__proto__:null,CheckboxBase:r,CheckboxDisabilitato:a,CheckboxGruppi:s,CheckboxInline:l,CheckboxMixedButton:m,__namedExportsOrder:M,default:I},Symbol.toStringTag,{value:"Module"}));export{D as C,r as a,l as b,a as c,s as d,m as e};
