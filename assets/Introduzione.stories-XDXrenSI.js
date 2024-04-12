import{R as e}from"./index-BFWcBMrj.js";import{I as l}from"./Input-CLSFLk54.js";import{R as a,C as n}from"./Col-CzbmXXhQ.js";import{L as z}from"./Label-fWy_qovk.js";import{S as I}from"./Select-Dzs6Q_Jv.js";import{T as k}from"./Toggle-CgWvXWae.js";import{B as s}from"./Button-BvsBu0Bj.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-GAri5u7x.js";import"./Icon-Dn2FEDq_.js";import"./index-Bl6ORisp.js";import"./iframe-d7HZv50p.js";import"../sb-preview/runtime.js";import"./utils-Dujee42i.js";import"./index-D3ylJrlI.js";import"./utils-CUovxYU2.js";import"./Button-Cn4Lrs6w.js";const H={title:"Documentazione/Form",component:l},o={render:()=>e.createElement("div",null,e.createElement(a,null,e.createElement(l,{type:"text",label:"Nome",id:"formNome",wrapperClassName:"col col-md-6"}),e.createElement(l,{type:"text",label:"Cognome",id:"formCognome",wrapperClassName:"col col-md-6"})),e.createElement(a,null,e.createElement(l,{type:"text",label:"Città",id:"Citta",wrapperClassName:"col col-7"}),e.createElement(l,{type:"text",label:"Comune",id:"Comune",wrapperClassName:"col"}),e.createElement(l,{type:"text",label:"CAP",id:"CAP",wrapperClassName:"col"})))},r={render:()=>{const p=[{value:"Value 1",label:"Opzione 1"},{value:"Value 2",label:"Opzione 2"},{value:"Value 3",label:"Opzione 3"},{value:"Value 4",label:"Opzione 4"},{value:"Value 5",label:"Opzione 5"}],c=()=>{};return e.createElement("div",null,e.createElement(a,null,e.createElement(l,{type:"email",label:"Nome",id:"inputEmail4",placeholder:"inserisci il tuo indirizzo email",wrapperClassName:"col col-md-6"}),e.createElement(l,{type:"password",label:"Password",id:"exampleInputPassword",placeholder:"Inserisci la tua password",wrapperClassName:"col col-md-6"})),e.createElement(a,null,e.createElement(l,{type:"text",label:"Indirizzo",id:"inputAddress",placeholder:"Via Roma, 1",wrapperClassName:"col"})),e.createElement(a,null,e.createElement(l,{type:"text",label:"Comune",id:"inputCity",wrapperClassName:"col col-md-6"}),e.createElement(l,{type:"text",label:"CAP",id:"inputCAP",wrapperClassName:"col col-md-2"}),e.createElement(n,{md:"4"},e.createElement(I,{id:"selectExampleClassic",label:"Provincia",onChange:c},p.map((t,u)=>e.createElement("option",{label:t.label,key:u},t.value))))),e.createElement(a,null,e.createElement(n,{md:"6",className:"form-group"},e.createElement(k,{label:"Label dell'interruttore 1",disabled:!1,id:"toggleEsempio1a"}))),e.createElement(a,null,e.createElement(n,{sm:"auto"},e.createElement(s,{color:"primary",outline:!0},"Annulla")),e.createElement(n,{sm:"auto"},e.createElement(s,{type:"submit",color:"primary"},"Conferma"))))}},i={render:()=>e.createElement(a,{className:"align-items-center"},e.createElement(n,null,e.createElement("label",{className:"visually-hidden",htmlFor:"inlineFormInput"},"Nome"),e.createElement("input",{type:"text",className:"form-control",id:"inlineFormInput",placeholder:"Mario Rossi"})),e.createElement(n,null,e.createElement("label",{className:"visually-hidden",htmlFor:"inlineFormInputGroup"},"Username"),e.createElement("div",{className:"input-group"},e.createElement("span",{className:"input-group-text"},"@"),e.createElement("input",{type:"text",className:"form-control",id:"inlineFormInputGroup",placeholder:"Username"}))),e.createElement(n,null,e.createElement("div",{className:"form-check m-0"},e.createElement("input",{className:"form-check-input",type:"checkbox",id:"autoSizingCheck"}),e.createElement("label",{className:"form-check-label",htmlFor:"autoSizingCheck"},"Ricordami"))),e.createElement(n,null,e.createElement(s,{type:"submit",color:"primary"},"Invia")))},m={render:()=>{const p=[{value:"Value 1",label:"Opzione 1"},{value:"Value 2",label:"Opzione 2"},{value:"Value 3",label:"Opzione 3"},{value:"Value 4",label:"Opzione 4"},{value:"Value 5",label:"Opzione 5"}],c=()=>{};return e.createElement("div",null,e.createElement("fieldset",{disabled:!0,"aria-label":"Form disabilitato"},e.createElement("legend",null,"Esempio di form disabilitato"),e.createElement("div",{className:"form-group"},e.createElement(l,{type:"text",label:"Input",id:"disabledTextInput",placeholder:"input disabilitato",disabled:!0})),e.createElement("div",{className:"form-group"},e.createElement(I,{id:"selectExampleClassic",label:"Field Label",onChange:c},p.map((t,u)=>e.createElement("option",{label:t.label,key:u},t.value)))),e.createElement("div",{className:"form-check"},e.createElement(l,{id:"checkbox1",type:"checkbox",disabled:!0}),e.createElement(z,{for:"checkbox1",check:!0},"Check disabilitato")),e.createElement(s,{type:"submit",color:"primary",className:"mt-3"},"Submit")))}};var d,b,C;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div>
            <Row>
                <Input type="text" label="Nome" id="formNome" wrapperClassName="col col-md-6" />
                <Input type="text" label="Cognome" id="formCognome" wrapperClassName="col col-md-6" />
            </Row>
            <Row>
                <Input type="text" label="Città" id="Citta" wrapperClassName="col col-7" />
                <Input type="text" label="Comune" id="Comune" wrapperClassName="col" />
                <Input type="text" label="CAP" id="CAP" wrapperClassName="col" />
            </Row>
        </div>
}`,...(C=(b=o.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var E,h,N;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const options = [{
      value: "Value 1",
      label: "Opzione 1"
    }, {
      value: "Value 2",
      label: "Opzione 2"
    }, {
      value: "Value 3",
      label: "Opzione 3"
    }, {
      value: "Value 4",
      label: "Opzione 4"
    }, {
      value: "Value 5",
      label: "Opzione 5"
    }];
    const handleChange = () => {};
    return <div>
                <Row>
                    <Input type="email" label="Nome" id="inputEmail4" placeholder="inserisci il tuo indirizzo email" wrapperClassName="col col-md-6" />
                    <Input type="password" label="Password" id="exampleInputPassword" placeholder="Inserisci la tua password" wrapperClassName="col col-md-6" />
                </Row>
                <Row>
                    <Input type="text" label="Indirizzo" id="inputAddress" placeholder="Via Roma, 1" wrapperClassName="col" />
                </Row>
                <Row>
                    <Input type="text" label="Comune" id="inputCity" wrapperClassName="col col-md-6" />
                    <Input type="text" label="CAP" id="inputCAP" wrapperClassName="col col-md-2" />
                    <Col md="4">
                        <Select id="selectExampleClassic" label="Provincia" onChange={handleChange}>
                            {options.map((opt, i) => <option label={opt.label} key={i}>
                                    {opt.value}
                                </option>)}
                        </Select>
                    </Col>
                </Row>
                <Row>
                    <Col md="6" className="form-group">
                        <Toggle label="Label dell'interruttore 1" disabled={false} id="toggleEsempio1a" />
                    </Col>
                </Row>
                <Row>
                    <Col sm="auto">
                        <Button color="primary" outline>
                            Annulla
                        </Button>
                    </Col>
                    <Col sm="auto">
                        <Button type="submit" color="primary">
                            Conferma
                        </Button>
                    </Col>
                </Row>
            </div>;
  }
}`,...(N=(h=r.parameters)==null?void 0:h.docs)==null?void 0:N.source}}};var v,y,g;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Row className="align-items-center">
            <Col>
                <label className="visually-hidden" htmlFor="inlineFormInput">
                    Nome
                </label>
                <input type="text" className="form-control" id="inlineFormInput" placeholder="Mario Rossi" />
            </Col>
            <Col>
                <label className="visually-hidden" htmlFor="inlineFormInputGroup">
                    Username
                </label>
                <div className="input-group">
                    <span className="input-group-text">@</span>
                    <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Username" />
                </div>
            </Col>
            <Col>
                <div className="form-check m-0">
                    <input className="form-check-input" type="checkbox" id="autoSizingCheck" />
                    <label className="form-check-label" htmlFor="autoSizingCheck">
                        Ricordami
                    </label>
                </div>
            </Col>
            <Col>
                <Button type="submit" color="primary">
                    Invia
                </Button>
            </Col>
        </Row>
}`,...(g=(y=i.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var w,x,f;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const options = [{
      value: "Value 1",
      label: "Opzione 1"
    }, {
      value: "Value 2",
      label: "Opzione 2"
    }, {
      value: "Value 3",
      label: "Opzione 3"
    }, {
      value: "Value 4",
      label: "Opzione 4"
    }, {
      value: "Value 5",
      label: "Opzione 5"
    }];
    const handleChange = () => {};
    return <div>
                <fieldset disabled aria-label="Form disabilitato">
                    <legend>Esempio di form disabilitato</legend>
                    <div className="form-group">
                        <Input type="text" label="Input" id="disabledTextInput" placeholder="input disabilitato" disabled />
                    </div>
                    <div className="form-group">
                        <Select id="selectExampleClassic" label="Field Label" onChange={handleChange}>
                            {options.map((opt, i) => <option label={opt.label} key={i}>
                                    {opt.value}
                                </option>)}
                        </Select>
                    </div>
                    <div className="form-check">
                        <Input id="checkbox1" type="checkbox" disabled />
                        <Label for="checkbox1" check>
                            Check disabilitato
                        </Label>
                    </div>
                    <Button type="submit" color="primary" className="mt-3">
                        Submit
                    </Button>
                </fieldset>
            </div>;
  }
}`,...(f=(x=m.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const J=["DimensionamentoColonneBase","DimensionamentoColonneComplesso","AutoDimensionamento","FormDisabilitato"];export{i as AutoDimensionamento,o as DimensionamentoColonneBase,r as DimensionamentoColonneComplesso,m as FormDisabilitato,J as __namedExportsOrder,H as default};
