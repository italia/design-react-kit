import{R as e,r as w}from"./index-BFWcBMrj.js";import{c as d}from"./index-Bl6ORisp.js";import{F as $}from"./FormGroup-B-MqxR9s.js";import{L as D}from"./Label-fWy_qovk.js";import{I as H}from"./Input-CLSFLk54.js";import{I as W}from"./Icon-Dn2FEDq_.js";import{n as y}from"./utils-Dujee42i.js";const f=a=>a!=null&&typeof a=="object"&&"content"in a,o=({className:a,inputs:t,legend:n,name:p,readOnly:i,value:z,wrapperClassName:S,testId:I,labelTemplate:L=m=>`Valuta ${m} stelle su 5`,onChangeRating:x=y,...V})=>{const m=(t||[]).reverse(),_=L,k=i?y:x,F=d(S,{"rating rating-read-only":i,"rating rating-label":n}),j=d(a),A=i?{"aria-hidden":!0}:{},B=typeof n=="string";let g="",v=n;f(n)&&(g=d({"visually-hidden":n.srOnly}),v=n.content);const M=f(n)||B?e.createElement("legend",{className:g},v):n;return e.createElement($,{cssModule:{"form-group":"rating"},tag:"fieldset",className:F,"data-testid":I,...V},n&&M,m.map((c,P)=>{const u=5-P;return e.createElement(w.Fragment,{key:c},e.createElement(H,{type:"radio",id:c,name:p,value:String(u),cssModule:{"form-control":""},className:j,onChange:()=>k(u,p),checked:z===u,disabled:i,...A}),e.createElement(D,{className:"full",for:c},e.createElement(W,{icon:"it-star-full",size:"sm"}),e.createElement("span",{className:"visually-hidden"},_(u))))}))};o.__docgenInfo={description:"",methods:[],displayName:"Rating",props:{inputs:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"La lista di 5 id, per ciascun elemento intero del Rating. La lista deve essere ordinata dal rating 1 al rating 5."},labelTemplate:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: 1 | 2 | 3 | 4 | 5) => string",signature:{arguments:[{type:{name:"union",raw:"1 | 2 | 3 | 4 | 5",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"}]},name:"value"}],return:{name:"string"}}},description:'Il campo "label" è impostato di default su "Valuta ${n} stelle su 5", ma può essere personalizzato con questa funzione che riceve il numero input come argomento `function (n: number) => string`.',defaultValue:{value:"(value: 1 | 2 | 3 | 4 | 5) => `Valuta ${value} stelle su 5`",computed:!1}},legend:{required:!1,tsType:{name:"union",raw:"ReactNode | { content: ReactNode; srOnly: boolean }",elements:[{name:"ReactNode"},{name:"signature",type:"object",raw:"{ content: ReactNode; srOnly: boolean }",signature:{properties:[{key:"content",value:{name:"ReactNode",required:!0}},{key:"srOnly",value:{name:"boolean",required:!0}}]}}]},description:"Da utilizzare in caso legenda principale del Rating. Passare una componente React da mostrare come legenda (all'interno del tag `<legend>`). È possibile mostrare la leggenda solo ai dispositivi screen reader"},name:{required:!0,tsType:{name:"string"},description:"Parametro name da dare all'input"},wrapperClassName:{required:!1,tsType:{name:"string"},description:"Classi aggiuntive da usare per il componente wrapper del Rating"},className:{required:!1,tsType:{name:"string"},description:"Classi aggiuntive da usare per ciascun elemento all'interno del componente Rating"},onChangeRating:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: 1 | 2 | 3 | 4 | 5 | number, name: string) => void",signature:{arguments:[{type:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | number",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"number"}]},name:"value"},{type:{name:"string"},name:"name"}],return:{name:"void"}}},description:"Callback chiamata ad ogni cambio di valore di rating. Il nuovo valore ed il name verranno passati: `function (n, name) => void`",defaultValue:{value:"() => {}",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"Rende il componente read-only"},value:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | number",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"number"}]},description:"Il valore corrente del componente: deve essere compreso tra 1 e 5"},testId:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const G={title:"Documentazione/Componenti/Rating",component:o},r={render:({value:a,legend:t})=>e.createElement(o,{value:a,legend:t,inputs:["star1a","star2a","star3a","star4a","star5a"],name:"ratingA"}),args:{value:0,legend:"Rating"},argTypes:{value:{control:{type:"range",min:0,max:5,step:1}},legend:{control:{type:"text"}}}},J=()=>{const[a,t]=w.useState(4);return e.createElement(o,{value:a,legend:e.createElement(e.Fragment,null,e.createElement("span",{className:"visually-hidden"},"Valutazione")," ",e.createElement("span",null,a," stelle"),e.createElement("span",{className:"visually-hidden"},"su 5")),inputs:["star1b","star2b","star3b","star4b","star5b"],name:"ratingB",onChangeRating:t})},s={render:()=>e.createElement(J,null),parameters:{docs:{canvas:{sourceState:"none"}}}},l={render:()=>e.createElement(o,{value:4,readOnly:!0,legend:{content:"Valutazione 4 stelle su 5",srOnly:!0},inputs:["star1c","star2c","star3c","star4c","star5c"],name:"ratingC"})};var b,R,C;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: ({
    value,
    legend
  }) => {
    return <Rating value={value} legend={legend} inputs={['star1a', 'star2a', 'star3a', 'star4a', 'star5a']} name='ratingA' />;
  },
  args: {
    value: 0,
    legend: 'Rating'
  },
  argTypes: {
    value: {
      control: {
        type: 'range',
        min: 0,
        max: 5,
        step: 1
      }
    },
    legend: {
      control: {
        type: 'text'
      }
    }
  }
}`,...(C=(R=r.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var E,N,h;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <RatingConLabelWithHooks />,
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
}`,...(h=(N=s.parameters)==null?void 0:N.docs)==null?void 0:h.source}}};var T,q,O;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Rating value={4} readOnly legend={{
    content: 'Valutazione 4 stelle su 5',
    srOnly: true
  }} inputs={['star1c', 'star2c', 'star3c', 'star4c', 'star5c']} name='ratingC' />
}`,...(O=(q=l.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};const K=["RatingBase","RatingConLabel","RatingReadOnly"],ne=Object.freeze(Object.defineProperty({__proto__:null,RatingBase:r,RatingConLabel:s,RatingReadOnly:l,__namedExportsOrder:K,default:G},Symbol.toStringTag,{value:"Module"}));export{ne as R,r as a,s as b,l as c,o as d};
