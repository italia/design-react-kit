import{R as e,r as o}from"./index-BFWcBMrj.js";import{I as t}from"./Input-CLSFLk54.js";const z={title:"Documentazione/Form/InputNumerico",component:t},A=()=>{const[n,a]=o.useState("100"),[r,f]=o.useState("100");return e.createElement(e.Fragment,null,e.createElement("div",{className:"w-100"},e.createElement(t,{id:"example-w100",type:"number",label:"Input Number inserito in una colonna a tutta larghezza",incrementLabel:"Aumenta il valore  di 1",decrementLabel:"Diminuisci il valore di 1",value:n,onChange:p=>{a(p.target.value)}})),e.createElement("div",{className:"w-50 mt-5"},e.createElement(t,{id:"example-w50",type:"number",label:"Input Number inserito in una colonna di larghezza 50%",incrementLabel:"Aumenta il valore  di 1",decrementLabel:"Diminuisci il valore di 1",value:r,onChange:p=>{f(p.target.value)}})))},s={render:()=>e.createElement(A,null),parameters:{docs:{canvas:{sourceState:"none"}}}},P=()=>{const[n,a]=o.useState("100");return e.createElement(t,{id:"example-steps",type:"number",label:"Min, Max & Step",incrementLabel:"Aumenta il valore  di 500",decrementLabel:"Diminuisci il valore di 500",value:n,min:-2e3,max:15e3,step:500,onChange:r=>{a(r.target.value)}})},u={render:()=>e.createElement(P,null),parameters:{docs:{canvas:{sourceState:"none"}}}},c={render:()=>e.createElement(t,{type:"number",label:"Disabled",value:"50",min:0,max:100,disabled:!0})},_=()=>{const[n,a]=o.useState("100");return e.createElement(t,{id:"example-currency",addonText:"€",type:"currency",label:"Currency",incrementLabel:"Aumenta il valore di 1 euro",decrementLabel:"Diminuisci il valore di 1 euro",value:n,step:"any",min:3.5,max:100,onChange:r=>{a(r.target.value)}})},i={render:()=>e.createElement(_,null),parameters:{docs:{canvas:{sourceState:"none"}}}},w=()=>{const[n,a]=o.useState("100");return e.createElement(t,{id:"example-percentage",addonText:"%",type:"percentage",label:"Percentage",incrementLabel:"Aumenta il valore in percentuale di 1",decrementLabel:"Diminuisci il valore in percentuale di 1",value:n,min:0,max:100,onChange:r=>{a(r.target.value)}})},m={render:()=>e.createElement(w,null),parameters:{docs:{canvas:{sourceState:"none"}}}},M=()=>{const[n,a]=o.useState("100");return e.createElement(t,{id:"example-adaptive",type:"adaptive",label:"Ridimensionamento",incrementLabel:"Aumenta il valore  di 1",decrementLabel:"Diminuisci il valore di 1",value:n,placeholder:"0",min:0,max:99999999999,onChange:r=>{a(r.target.value)}})},l={render:()=>e.createElement(M,null),parameters:{docs:{canvas:{sourceState:"none"}}}};var d,v,b;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    return <InputNumericoDimensionamentoHooks />;
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
}`,...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var I,S,N;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    return <InputNumericoStepsHooks />;
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
}`,...(N=(S=u.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var g,x,E;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    return <Input type="number" label="Disabled" value="50" min={0} max={100} disabled />;
  }
}`,...(E=(x=c.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var D,y,L;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    return <InputNumericoValutaHooks />;
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
}`,...(L=(y=i.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};var k,H,V;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    return <InputNumericoPercentualeHooks />;
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
}`,...(V=(H=m.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var h,C,R;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    return <InputNumericoRidimensionamentoHooks />;
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
}`,...(R=(C=l.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};const O=["InputNumericoDimensionamento","InputNumericoSteps","InputNumericoDisabilitato","InputNumericoValuta","InputNumericoPercentuale","InputNumericoRidimensionamento"],F=Object.freeze(Object.defineProperty({__proto__:null,InputNumericoDimensionamento:s,InputNumericoDisabilitato:c,InputNumericoPercentuale:m,InputNumericoRidimensionamento:l,InputNumericoSteps:u,InputNumericoValuta:i,__namedExportsOrder:O,default:z},Symbol.toStringTag,{value:"Module"}));export{F as I,s as a,u as b,i as c,m as d,c as e,l as f};
