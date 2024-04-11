import{R as e}from"./index-BFWcBMrj.js";import{I as r}from"./Input-CLSFLk54.js";import{F as l}from"./Form-BOkbrBXv.js";import{R as G,C as m}from"./Col-CzbmXXhQ.js";import{F as o}from"./FormGroup-B-MqxR9s.js";import{F as d}from"./FormText-qdYYmIzq.js";import{L as a}from"./Label-fWy_qovk.js";const y={title:"Documentazione/Form/Radio",component:r},t={render:()=>e.createElement(l,{className:"m-3"},e.createElement("fieldset",null,e.createElement("legend",null,"Radio"),e.createElement(o,{check:!0},e.createElement(r,{name:"gruppo1",type:"radio",id:"radio1",defaultChecked:!0}),e.createElement(a,{check:!0,htmlFor:"radio1"},"Radio di esempio 1")),e.createElement(o,{check:!0},e.createElement(r,{name:"gruppo1",type:"radio",id:"radio2"}),e.createElement(a,{check:!0,htmlFor:"radio2"},"Radio di esempio 2"))))},n={render:()=>e.createElement("section",null,e.createElement("fieldset",null,e.createElement("legend",null,"Radio"),e.createElement(l,{className:"m-3"},e.createElement(o,{check:!0,inline:!0},e.createElement(r,{name:"gruppo1",type:"radio",id:"radio3",defaultChecked:!0}),e.createElement(a,{check:!0,htmlFor:"radio3"},"Opzione 1")),e.createElement(o,{check:!0,inline:!0},e.createElement(r,{name:"gruppo1",type:"radio",id:"radio4"}),e.createElement(a,{check:!0,htmlFor:"radio4"},"Opzione 2")))))},c={render:()=>e.createElement("section",null,e.createElement("fieldset",null,e.createElement("legend",null,"Radio"),e.createElement(l,{className:"m-3"},e.createElement(o,{check:!0},e.createElement(r,{disabled:!0,name:"gruppo1",type:"radio",id:"radio5",defaultChecked:!0}),e.createElement(a,{check:!0,htmlFor:"radio5"},"Opzione disabilitata selezionata")),e.createElement(o,{check:!0},e.createElement(r,{disabled:!0,name:"gruppo1",type:"radio",id:"radio6"}),e.createElement(a,{check:!0,htmlFor:"radio6"},"Opzione disabilitata non selezionata")))))},i={render:()=>e.createElement("section",null,e.createElement(G,{className:"m-5"},e.createElement(m,{md:5},e.createElement("fieldset",null,e.createElement("legend",null,"Radio"),e.createElement(l,null,e.createElement(o,{check:!0,className:"form-check-group"},e.createElement(r,{id:"radio7",name:"group1",type:"radio",defaultChecked:!0}),e.createElement(a,{htmlFor:"radio7",check:!0},"Opzione 1")),e.createElement(o,{check:!0,className:"form-check-group"},e.createElement(r,{id:"radio8",name:"group1",type:"radio"}),e.createElement(a,{htmlFor:"radio8",check:!0},"Opzione 2")),e.createElement(o,{check:!0,className:"form-check-group"},e.createElement(r,{id:"radio9",name:"group1",type:"radio",disabled:!0}),e.createElement(a,{htmlFor:"radio9",check:!0},"Opzione 3"))))),e.createElement(m,{md:2}),e.createElement(m,{md:5},e.createElement("fieldset",null,e.createElement("legend",null,"Radio"),e.createElement(l,null,e.createElement(o,{check:!0,className:"form-check-group"},e.createElement(r,{id:"radio10",name:"group2",type:"radio",defaultChecked:!0}),e.createElement(a,{htmlFor:"radio10",check:!0},"Opzione 1"),e.createElement(d,{color:""},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero")),e.createElement(o,{check:!0,className:"form-check-group"},e.createElement(r,{id:"radio11",name:"group2",type:"radio"}),e.createElement(a,{htmlFor:"radio11",check:!0},"Opzione 2"),e.createElement(d,{color:""},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero")),e.createElement(o,{check:!0,className:"form-check-group"},e.createElement(r,{id:"radio12",name:"group2",type:"radio",disabled:!0}),e.createElement(a,{htmlFor:"radio12",check:!0},"Opzione 3"),e.createElement(d,{color:""},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero")))))))};var s,p,u;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <Form className="m-3">
            <fieldset>
                <legend>Radio</legend>

                <FormGroup check>
                    <Input name="gruppo1" type="radio" id="radio1" defaultChecked />
                    <Label check htmlFor="radio1">
                        Radio di esempio 1
                    </Label>
                </FormGroup>

                <FormGroup check>
                    <Input name="gruppo1" type="radio" id="radio2" />
                    <Label check htmlFor="radio2">
                        Radio di esempio 2
                    </Label>
                </FormGroup>
            </fieldset>
        </Form>
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,F,k;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <section>
            <fieldset>
                <legend>Radio</legend>
                <Form className="m-3">
                    <FormGroup check inline>
                        <Input name="gruppo1" type="radio" id="radio3" defaultChecked />
                        <Label check htmlFor="radio3">
                            Opzione 1
                        </Label>
                    </FormGroup>
                    <FormGroup check inline>
                        <Input name="gruppo1" type="radio" id="radio4" />
                        <Label check htmlFor="radio4">
                            Opzione 2
                        </Label>
                    </FormGroup>
                </Form>
            </fieldset>
        </section>
}`,...(k=(F=n.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var g,E,b;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <section>
            <fieldset>
                <legend>Radio</legend>
                <Form className="m-3">
                    <FormGroup check>
                        <Input disabled name="gruppo1" type="radio" id="radio5" defaultChecked />
                        <Label check htmlFor="radio5">
                            Opzione disabilitata selezionata
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input disabled name="gruppo1" type="radio" id="radio6" />
                        <Label check htmlFor="radio6">
                            Opzione disabilitata non selezionata
                        </Label>
                    </FormGroup>
                </Form>
            </fieldset>
        </section>
}`,...(b=(E=c.parameters)==null?void 0:E.docs)==null?void 0:b.source}}};var f,L,R;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <section>
            <Row className="m-5">
                <Col md={5}>
                    <fieldset>
                        <legend>Radio</legend>
                        <Form>
                            <FormGroup check className="form-check-group">
                                <Input id="radio7" name="group1" type="radio" defaultChecked />
                                <Label htmlFor="radio7" check>
                                    Opzione 1
                                </Label>
                            </FormGroup>
                            <FormGroup check className="form-check-group">
                                <Input id="radio8" name="group1" type="radio" />
                                <Label htmlFor="radio8" check>
                                    Opzione 2
                                </Label>
                            </FormGroup>
                            <FormGroup check className="form-check-group">
                                <Input id="radio9" name="group1" type="radio" disabled />
                                <Label htmlFor="radio9" check>
                                    Opzione 3
                                </Label>
                            </FormGroup>
                        </Form>
                    </fieldset>
                </Col>
                <Col md={2} />
                <Col md={5}>
                    <fieldset>
                        <legend>Radio</legend>
                        <Form>
                            <FormGroup check className="form-check-group">
                                <Input id="radio10" name="group2" type="radio" defaultChecked />
                                <Label htmlFor="radio10" check>
                                    Opzione 1
                                </Label>
                                <FormText color="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</FormText>
                            </FormGroup>
                            <FormGroup check className="form-check-group">
                                <Input id="radio11" name="group2" type="radio" />
                                <Label htmlFor="radio11" check>
                                    Opzione 2
                                </Label>
                                <FormText color="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</FormText>
                            </FormGroup>
                            <FormGroup check className="form-check-group">
                                <Input id="radio12" name="group2" type="radio" disabled />
                                <Label htmlFor="radio12" check>
                                    Opzione 3
                                </Label>
                                <FormText color="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</FormText>
                            </FormGroup>
                        </Form>
                    </fieldset>
                </Col>
            </Row>
        </section>
}`,...(R=(L=i.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};const z=["RadioBase","RadioInline","RadioDisabilitato","RadioGruppi"],S=Object.freeze(Object.defineProperty({__proto__:null,RadioBase:t,RadioDisabilitato:c,RadioGruppi:i,RadioInline:n,__namedExportsOrder:z,default:y},Symbol.toStringTag,{value:"Module"}));export{S as R,t as a,n as b,c,i as d};
