import{R as e}from"./index-BFWcBMrj.js";import{c as Q}from"./stories-helper-DNOoDksx.js";import{P as c}from"./index-D3ylJrlI.js";import{c as U}from"./index-Bl6ORisp.js";import{t as F,m as J}from"./utils-CUovxYU2.js";import{B as $}from"./Button-BvsBu0Bj.js";var K=["className","cssModule","color","innerRef","pill","tag"];function B(){return B=Object.assign?Object.assign.bind():function(a){for(var s=1;s<arguments.length;s++){var o=arguments[s];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(a[n]=o[n])}return a},B.apply(this,arguments)}function X(a,s){if(a==null)return{};var o=Y(a,s),n,t;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(t=0;t<l.length;t++)n=l[t],!(s.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(a,n)&&(o[n]=a[n])}return o}function Y(a,s){if(a==null)return{};var o={},n=Object.keys(a),t,l;for(l=0;l<n.length;l++)t=n[l],!(s.indexOf(t)>=0)&&(o[t]=a[t]);return o}var Z={children:c.node,className:c.string,color:c.string,cssModule:c.object,innerRef:c.oneOfType([c.object,c.func,c.string]),pill:c.bool,tag:F};function k(a){var s=a.className,o=a.cssModule,n=a.color,t=n===void 0?"secondary":n,l=a.innerRef,h=a.pill,G=h===void 0?!1:h,v=a.tag,y=v===void 0?"span":v,E=X(a,K),H=J(U(s,"badge","bg-"+t,G?"rounded-pill":!1),o);return E.href&&y==="span"&&(y="a"),e.createElement(y,B({},E,{className:H,ref:l}))}k.propTypes=Z;const r=({color:a="secondary",pill:s=!1,tag:o="span",children:n,testId:t,...l})=>e.createElement(k,{color:a,pill:s,tag:o,...l,"data-testid":t},n);r.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'danger' | 'warning' | string",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"string"}]},description:"Le varianti di colore definite in Bootstrap Italia",defaultValue:{value:"'secondary'",computed:!1}},pill:{required:!1,tsType:{name:"boolean"},description:"Quando attivo rende i Badge arrotondati",defaultValue:{value:"false",computed:!1}},tag:{required:!1,tsType:{name:"ElementType"},description:"Utilizzarlo in caso di utilizzo di componenti personalizzati",defaultValue:{value:"'span'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Classi aggiuntive da usare per il componente Badge"},cssModule:{required:!1,tsType:{name:"CSSModule"},description:"Oggetto contenente la nuova mappatura per le classi CSS."},innerRef:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLElement"}],raw:"Ref<HTMLElement>"},description:"Da utilizzare per impostare un riferimento all'elemento DOM"},children:{required:!0,tsType:{name:"ReactChild"},description:"Il contenuto del badge"},testId:{required:!1,tsType:{name:"string"},description:""}}};const ee={title:"Documentazione/Componenti/Badge",component:r,args:{color:"secondary"},argTypes:{color:{control:"select",options:Q}}},i={render:({...a})=>e.createElement(r,{...a},"Badge"),parameters:{layout:"centered"}},d={render:()=>e.createElement("div",null,e.createElement("h1",null,"Titolo di esempio ",e.createElement(r,{color:"secondary"},"New")),e.createElement("h2",null,"Titolo di esempio ",e.createElement(r,{color:"secondary"},"New")),e.createElement("h3",null,"Titolo di esempio ",e.createElement(r,{color:"secondary"},"New")),e.createElement("h4",null,"Titolo di esempio ",e.createElement(r,{color:"secondary"},"New")),e.createElement("h5",null,"Titolo di esempio ",e.createElement(r,{color:"secondary"},"New")),e.createElement("h6",null,"Titolo di esempio ",e.createElement(r,{color:"secondary"},"New")))},m={render:()=>e.createElement($,{color:"primary"},"Notifiche ",e.createElement(r,{color:"light",className:"text-secondary"},"4"))},p={render:()=>e.createElement($,{color:"primary"},"Notifiche ",e.createElement(r,{color:"light",className:"text-primary"},"9"),e.createElement("span",{className:"visually-hidden"},"Messaggi non letti"))},g={render:()=>e.createElement("div",{className:"d-flex justify-content-around"},e.createElement(r,{color:"primary"},"Primary"),e.createElement(r,{color:"secondary"},"Secondary"),e.createElement(r,{color:"success"},"Success"),e.createElement(r,{color:"danger"},"Danger"),e.createElement(r,{color:"warning"},"Warning"))},u={render:()=>e.createElement("div",{className:"d-flex justify-content-around"},e.createElement(r,{color:"primary",pill:!0},"Primary"),e.createElement(r,{color:"secondary",pill:!0},"Secondary"),e.createElement(r,{color:"success",pill:!0},"Success"),e.createElement(r,{color:"danger",pill:!0},"Danger"),e.createElement(r,{color:"warning",pill:!0},"Warning"))},f={render:()=>e.createElement("div",{className:"d-flex justify-content-around"},e.createElement(r,{href:"#",color:"primary",tag:"a"},"Primary"),e.createElement(r,{href:"#",color:"secondary",tag:"a"},"Secondary"),e.createElement(r,{href:"#",color:"success",tag:"a"},"Success"),e.createElement(r,{href:"#",color:"danger",tag:"a"},"Danger"),e.createElement(r,{href:"#",color:"warning",tag:"a"},"Warning"))};var N,T,b;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: ({
    ...args
  }) => <Badge {...args}>Badge</Badge>,
  parameters: {
    layout: "centered"
  }
}`,...(b=(T=i.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var S,w,j;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div>
            <h1>
                Titolo di esempio&nbsp;<Badge color="secondary">New</Badge>
            </h1>
            <h2>
                Titolo di esempio&nbsp;<Badge color="secondary">New</Badge>
            </h2>
            <h3>
                Titolo di esempio&nbsp;<Badge color="secondary">New</Badge>
            </h3>
            <h4>
                Titolo di esempio&nbsp;<Badge color="secondary">New</Badge>
            </h4>
            <h5>
                Titolo di esempio&nbsp;<Badge color="secondary">New</Badge>
            </h5>
            <h6>
                Titolo di esempio&nbsp;<Badge color="secondary">New</Badge>
            </h6>
        </div>
}`,...(j=(w=d.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var O,z,x;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <Button color="primary">
            Notifiche&nbsp;
            <Badge color="light" className="text-secondary">
                4
            </Badge>
        </Button>
}`,...(x=(z=m.parameters)==null?void 0:z.docs)==null?void 0:x.source}}};var P,_,C;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Button color="primary">
            Notifiche&nbsp;
            <Badge color="light" className="text-primary">
                9
            </Badge>
            <span className="visually-hidden">Messaggi non letti</span>
        </Button>
}`,...(C=(_=p.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var M,D,R;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className="d-flex justify-content-around">
            <Badge color="primary">Primary</Badge>
            <Badge color="secondary">Secondary</Badge>
            <Badge color="success">Success</Badge>
            <Badge color="danger">Danger</Badge>
            <Badge color="warning">Warning</Badge>
        </div>
}`,...(R=(D=g.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var q,W,I;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="d-flex justify-content-around">
            <Badge color="primary" pill>
                Primary
            </Badge>
            <Badge color="secondary" pill>
                Secondary
            </Badge>
            <Badge color="success" pill>
                Success
            </Badge>
            <Badge color="danger" pill>
                Danger
            </Badge>
            <Badge color="warning" pill>
                Warning
            </Badge>
        </div>
}`,...(I=(W=u.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var L,V,A;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div className="d-flex justify-content-around">
            <Badge href="#" color="primary" tag="a">
                Primary
            </Badge>
            <Badge href="#" color="secondary" tag="a">
                Secondary
            </Badge>
            <Badge href="#" color="success" tag="a">
                Success
            </Badge>
            <Badge href="#" color="danger" tag="a">
                Danger
            </Badge>
            <Badge href="#" color="warning" tag="a">
                Warning
            </Badge>
        </div>
}`,...(A=(V=f.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};const re=["EsempioInterattivo","DiffenteGrandezza","Contatore","ContatoreTestoAggiuntivo","Variazioni","BordiArrotondati","ConLink"],ce=Object.freeze(Object.defineProperty({__proto__:null,BordiArrotondati:u,ConLink:f,Contatore:m,ContatoreTestoAggiuntivo:p,DiffenteGrandezza:d,EsempioInterattivo:i,Variazioni:g,__namedExportsOrder:re,default:ee},Symbol.toStringTag,{value:"Module"}));export{ce as B,m as C,d as D,g as V,p as a,u as b,f as c};
