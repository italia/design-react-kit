import{R as e}from"./index-BFWcBMrj.js";import{P as r}from"./Progress-m0JQ9nnc.js";import{B as c}from"./Button-BvsBu0Bj.js";import{I as i}from"./Icon-Dn2FEDq_.js";const O={title:"Documentazione/Componenti/Progress",component:r,parameters:{docs:{canvas:{sourceState:"none"}}}},o=()=>e.createElement(r,{value:"50"}),a=()=>e.createElement(r,{value:"35",label:"progresso"}),n=()=>e.createElement(r,{indeterminate:!0,label:"In elaborazione..."}),s=()=>e.createElement("div",null,e.createElement(r,{value:"25",color:"success"}),e.createElement(r,{value:"33",color:"info"}),e.createElement(r,{value:"50",color:"warning"}),e.createElement(r,{value:"66",color:"danger"})),t=()=>e.createElement("div",{className:"container"},e.createElement("div",{className:"row"},e.createElement("div",{className:"col-12 col-sm-6"},e.createElement("p",null,e.createElement("strong",null,"Bottone primario")),e.createElement(c,{color:"primary",className:"btn-progress",disabled:!0},"Label bottone ",e.createElement(i,{color:"light",icon:"it-github","aria-hidden":!0}),e.createElement("span",null,e.createElement(r,{value:"50"})))),e.createElement("div",{className:"col-12 col-sm-6"},e.createElement("p",null,e.createElement("strong",null,"Bottone secondario")),e.createElement(c,{color:"secondary",className:"btn-progress",disabled:!0},"Label bottone ",e.createElement(i,{color:"light",icon:"it-github","aria-hidden":!0}),e.createElement("span",null,e.createElement(r,{value:"50"})))))),l={render:({value:w,color:z,label:L})=>e.createElement("div",null,e.createElement(r,{value:w,label:L,color:z})),args:{color:"",value:25,label:"progresso"},argTypes:{color:{control:{type:"select",options:["","success","info","warning","danger"]}}}};o.__docgenInfo={description:"",methods:[],displayName:"Esempio"};a.__docgenInfo={description:"",methods:[],displayName:"Etichette"};n.__docgenInfo={description:"",methods:[],displayName:"ProgressoIndeterminato"};s.__docgenInfo={description:"",methods:[],displayName:"Colori"};t.__docgenInfo={description:"",methods:[],displayName:"BottoneConProgressBar"};var m,d,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:'() => <Progress value="50" />',...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,g,v;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:'() => <Progress value="35" label="progresso" />',...(v=(g=a.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var E,b,P;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:'() => <Progress indeterminate label="In elaborazione..." />',...(P=(b=n.parameters)==null?void 0:b.docs)==null?void 0:P.source}}};var h,_,B;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`() => <div>
        <Progress value="25" color="success" />
        <Progress value="33" color="info" />
        <Progress value="50" color="warning" />
        <Progress value="66" color="danger" />
    </div>`,...(B=(_=s.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var N,f,I;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`() => <div className="container">
        <div className="row">
            <div className="col-12 col-sm-6">
                <p>
                    <strong>Bottone primario</strong>
                </p>
                <Button color="primary" className="btn-progress" disabled>
                    Label bottone <Icon color="light" icon="it-github" aria-hidden />
                    <span>
                        <Progress value="50" />
                    </span>
                </Button>
            </div>
            <div className="col-12 col-sm-6">
                <p>
                    <strong>Bottone secondario</strong>
                </p>
                <Button color="secondary" className="btn-progress" disabled>
                    Label bottone <Icon color="light" icon="it-github" aria-hidden />
                    <span>
                        <Progress value="50" />
                    </span>
                </Button>
            </div>
        </div>
    </div>`,...(I=(f=t.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var y,S,C;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: ({
    value,
    color,
    label
  }) => {
    return <div>
                <Progress value={value} label={label} color={color} />
            </div>;
  },
  args: {
    color: "",
    value: 25,
    label: "progresso"
  },
  argTypes: {
    color: {
      control: {
        type: "select",
        options: ["", "success", "info", "warning", "danger"]
      }
    }
  }
}`,...(C=(S=l.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const T=["Esempio","Etichette","ProgressoIndeterminato","Colori","BottoneConProgressBar","_EsempiInterattivi"],M=Object.freeze(Object.defineProperty({__proto__:null,BottoneConProgressBar:t,Colori:s,Esempio:o,Etichette:a,ProgressoIndeterminato:n,_EsempiInterattivi:l,__namedExportsOrder:T,default:O},Symbol.toStringTag,{value:"Module"}));export{t as B,s as C,o as E,M as P,a,n as b};
