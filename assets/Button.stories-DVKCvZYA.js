import{R as e}from"./index-BFWcBMrj.js";import{B as n}from"./Button-BvsBu0Bj.js";import{I as t}from"./Icon-Dn2FEDq_.js";const L=["primary","secondary","success","info","danger","warning","link"],C={title:"Documentazione/Componenti/Button",component:n,parameters:{layout:"centered"}},o={render:({...R})=>e.createElement(n,{...R},"Bottone"),args:{color:"primary"},argTypes:{color:{control:"select",options:L}}},r={render:()=>e.createElement("div",null,e.createElement(n,{tag:"a",href:"#",role:"button"},"Link"),e.createElement(n,{type:"submit"},"Button"),e.createElement(n,{tag:"input",type:"button",value:"Input"}),e.createElement(n,{tag:"input",type:"submit",value:"Submit"}),e.createElement(n,{tag:"input",type:"reset",value:"Reset"}))},a={render:()=>e.createElement(e.Fragment,null,e.createElement("div",{className:"btn-example"},e.createElement(n,{color:"primary"},"Primary"),e.createElement(n,{outline:!0,color:"primary"},"Primary Outline"),e.createElement(n,{color:"primary",disabled:!0},"Primary disabled"),e.createElement(n,{color:"primary",outline:!0,disabled:!0},"Primary out. disabled")),e.createElement("div",{className:"btn-example"},e.createElement(n,{color:"secondary"},"Secondary"),e.createElement(n,{outline:!0,color:"secondary"},"Secondary Outline"),e.createElement(n,{color:"secondary",disabled:!0},"Secondary disabled"),e.createElement(n,{color:"secondary",outline:!0,disabled:!0},"Secondary out. disabled")),e.createElement("div",{className:"btn-example"},e.createElement(n,{color:"success"},"success"),e.createElement(n,{outline:!0,color:"success"},"success Outline"),e.createElement(n,{color:"success",disabled:!0},"success disabled"),e.createElement(n,{color:"success",outline:!0,disabled:!0},"success out. disabled")),e.createElement("div",{className:"btn-example"},e.createElement(n,{color:"danger"},"danger"),e.createElement(n,{outline:!0,color:"danger"},"danger Outline"),e.createElement(n,{color:"danger",disabled:!0},"danger disabled"),e.createElement(n,{color:"danger",outline:!0,disabled:!0},"danger out. disabled")),e.createElement("div",{className:"btn-example"},e.createElement(n,{color:"warning"},"warning"),e.createElement(n,{outline:!0,color:"warning"},"warning Outline"),e.createElement(n,{color:"warning",disabled:!0},"warning disabled"),e.createElement(n,{color:"warning",outline:!0,disabled:!0},"warning out. disabled")))},c={render:()=>e.createElement("div",{className:"bg-dark py-1"},e.createElement("div",{className:"btn-example"},e.createElement(n,{color:"primary"},"Primary"),e.createElement(n,{outline:!0,color:"primary"},"Primary Outline"),e.createElement(n,{color:"primary",disabled:!0},"Primary disabled"),e.createElement(n,{color:"primary",outline:!0,disabled:!0},"Primary out. disabled")),e.createElement("div",{className:"btn-example"},e.createElement(n,{color:"secondary"},"Secondary"),e.createElement(n,{outline:!0,color:"secondary"},"Secondary Outline"),e.createElement(n,{color:"secondary",disabled:!0},"Secondary disabled"),e.createElement(n,{color:"secondary",outline:!0,disabled:!0},"Secondary out. disabled")))},l={render:()=>e.createElement("section",{className:"col-12"},e.createElement("div",null,e.createElement(n,{className:"me-2",color:"primary",size:"lg"},"Primary Large"),e.createElement(n,{color:"secondary",size:"lg"},"Secondary Large"),e.createElement("div",{className:"mt-3"}),e.createElement(n,{className:"me-2",color:"primary",size:"sm"},"Primary Small"),e.createElement(n,{color:"secondary",size:"sm"},"Secondary Small"),e.createElement("div",{className:"mt-3"}),e.createElement(n,{className:"me-2",color:"primary",size:"xs"},"Primary Mini"),e.createElement(n,{color:"secondary",size:"xs"},"Secondary Mini"),e.createElement("div",{className:"mt-3"}),e.createElement(n,{color:"primary",block:!0},"Primary Block"),e.createElement(n,{color:"secondary",block:!0},"Secondary Block"))),parameters:{layout:"padded"}},s={render:()=>e.createElement("div",null,e.createElement(n,{className:"me-2",color:"success",size:"lg",icon:!0},e.createElement(t,{color:"white",icon:"it-star-full"})," Icon Button Large"),e.createElement(n,{className:"me-2",color:"primary",icon:!0},e.createElement(t,{color:"white",icon:"it-star-full"})," Icon Button"),e.createElement(n,{className:"me-2",color:"danger",size:"sm",icon:!0},e.createElement(t,{color:"white",icon:"it-star-full"})," Icon Button Small"),e.createElement(n,{color:"info",size:"xs",icon:!0},e.createElement(t,{color:"white",icon:"it-star-full"})," Icon Button Extra Small"))},i={render:()=>e.createElement("div",null,e.createElement(n,{className:"me-2",color:"success",size:"lg",icon:!0},e.createElement("span",{className:"rounded-icon"},e.createElement(t,{color:"success",icon:"it-user"})),e.createElement("span",null,"Round Icon Large")),e.createElement(n,{className:"me-2",color:"primary",icon:!0},e.createElement("span",{className:"rounded-icon"},e.createElement(t,{color:"primary",icon:"it-user"})),e.createElement("span",null,"Round Icon")),e.createElement(n,{className:"me-2",color:"danger",size:"sm",icon:!0},e.createElement("span",{className:"rounded-icon"},e.createElement(t,{color:"danger",icon:"it-user"})),e.createElement("span",null,"Round Icon Small")),e.createElement(n,{color:"info",size:"xs",icon:!0},e.createElement("span",{className:"rounded-icon"},e.createElement(t,{color:"secondary",icon:"it-user"})),e.createElement("span",null,"Round Icon Extra Small")))};var u,d,m;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: ({
    ...args
  }) => {
    return <Button {...args}>Bottone</Button>;
  },
  args: {
    color: "primary"
  },
  argTypes: {
    color: {
      control: "select",
      options: colors
    }
  }
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,y,B;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    return <div>
                <Button tag="a" href="#" role="button">
                    Link
                </Button>
                <Button type="submit">Button</Button>
                <Button tag="input" type="button" value="Input" />
                <Button tag="input" type="submit" value="Submit" />
                <Button tag="input" type="reset" value="Reset" />
            </div>;
  }
}`,...(B=(y=r.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var E,b,g;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    return <>
                <div className="btn-example">
                    <Button color="primary">Primary</Button>
                    <Button outline color="primary">
                        Primary Outline
                    </Button>
                    <Button color="primary" disabled>
                        Primary disabled
                    </Button>
                    <Button color="primary" outline disabled>
                        Primary out. disabled
                    </Button>
                </div>
                <div className="btn-example">
                    <Button color="secondary">Secondary</Button>
                    <Button outline color="secondary">
                        Secondary Outline
                    </Button>
                    <Button color="secondary" disabled>
                        Secondary disabled
                    </Button>
                    <Button color="secondary" outline disabled>
                        Secondary out. disabled
                    </Button>
                </div>
                <div className="btn-example">
                    <Button color="success">success</Button>
                    <Button outline color="success">
                        success Outline
                    </Button>
                    <Button color="success" disabled>
                        success disabled
                    </Button>
                    <Button color="success" outline disabled>
                        success out. disabled
                    </Button>
                </div>
                <div className="btn-example">
                    <Button color="danger">danger</Button>
                    <Button outline color="danger">
                        danger Outline
                    </Button>
                    <Button color="danger" disabled>
                        danger disabled
                    </Button>
                    <Button color="danger" outline disabled>
                        danger out. disabled
                    </Button>
                </div>
                <div className="btn-example">
                    <Button color="warning">warning</Button>
                    <Button outline color="warning">
                        warning Outline
                    </Button>
                    <Button color="warning" disabled>
                        warning disabled
                    </Button>
                    <Button color="warning" outline disabled>
                        warning out. disabled
                    </Button>
                </div>
            </>;
  }
}`,...(g=(b=a.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var S,v,N;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="bg-dark py-1">
            <div className="btn-example">
                <Button color="primary">Primary</Button>
                <Button outline color="primary">
                    Primary Outline
                </Button>
                <Button color="primary" disabled>
                    Primary disabled
                </Button>
                <Button color="primary" outline disabled>
                    Primary out. disabled
                </Button>
            </div>
            <div className="btn-example">
                <Button color="secondary">Secondary</Button>
                <Button outline color="secondary">
                    Secondary Outline
                </Button>
                <Button color="secondary" disabled>
                    Secondary disabled
                </Button>
                <Button color="secondary" outline disabled>
                    Secondary out. disabled
                </Button>
            </div>
        </div>
}`,...(N=(v=c.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var I,x,z;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <section className="col-12">
            <div>
                <Button className="me-2" color="primary" size="lg">
                    Primary Large
                </Button>
                <Button color="secondary" size="lg">
                    Secondary Large
                </Button>
                <div className="mt-3" />
                <Button className="me-2" color="primary" size="sm">
                    Primary Small
                </Button>
                <Button color="secondary" size="sm">
                    Secondary Small
                </Button>
                <div className="mt-3" />
                <Button className="me-2" color="primary" size="xs">
                    Primary Mini
                </Button>
                <Button color="secondary" size="xs">
                    Secondary Mini
                </Button>
                <div className="mt-3" />
                <Button color="primary" block>
                    Primary Block
                </Button>
                <Button color="secondary" block>
                    Secondary Block
                </Button>
            </div>
        </section>,
  parameters: {
    layout: "padded"
  }
}`,...(z=(x=l.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var w,P,f;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div>
            <Button className="me-2" color="success" size="lg" icon>
                <Icon color="white" icon="it-star-full" /> Icon Button Large
            </Button>
            <Button className="me-2" color="primary" icon>
                <Icon color="white" icon="it-star-full" /> Icon Button
            </Button>
            <Button className="me-2" color="danger" size="sm" icon>
                <Icon color="white" icon="it-star-full" /> Icon Button Small
            </Button>
            <Button color="info" size="xs" icon>
                <Icon color="white" icon="it-star-full" /> Icon Button Extra Small
            </Button>
        </div>
}`,...(f=(P=s.parameters)==null?void 0:P.docs)==null?void 0:f.source}}};var O,k,h;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div>
            <Button className="me-2" color="success" size="lg" icon>
                <span className="rounded-icon">
                    <Icon color="success" icon="it-user" />
                </span>
                <span>Round Icon Large</span>
            </Button>
            <Button className="me-2" color="primary" icon>
                <span className="rounded-icon">
                    <Icon color="primary" icon="it-user" />
                </span>
                <span>Round Icon</span>
            </Button>
            <Button className="me-2" color="danger" size="sm" icon>
                <span className="rounded-icon">
                    <Icon color="danger" icon="it-user" />
                </span>
                <span>Round Icon Small</span>
            </Button>
            <Button color="info" size="xs" icon>
                <span className="rounded-icon">
                    <Icon color="secondary" icon="it-user" />
                </span>
                <span>Round Icon Extra Small</span>
            </Button>
        </div>
}`,...(h=(k=i.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};const T=["EsempioInterattivo","Tipologie","VariantiColore","SfondoScuro","VariantiDiDimensione","BottoniConIcona","BottoniConIconaCerchiata"],V=Object.freeze(Object.defineProperty({__proto__:null,BottoniConIcona:s,BottoniConIconaCerchiata:i,EsempioInterattivo:o,SfondoScuro:c,Tipologie:r,VariantiColore:a,VariantiDiDimensione:l,__namedExportsOrder:T,default:C},Symbol.toStringTag,{value:"Module"}));export{V as B,o as E,c as S,r as T,a as V,s as a,i as b,l as c};
