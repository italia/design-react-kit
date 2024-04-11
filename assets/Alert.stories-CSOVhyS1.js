import{R as e,r as S}from"./index-BFWcBMrj.js";import{c as f}from"./stories-helper-DNOoDksx.js";import{A as s}from"./Alert-BtD15DuB.js";const b={title:"Documentazione/Componenti/Alert",component:s,args:{color:"success"},argTypes:{color:{control:"select",options:f}}},n={render:({...r})=>e.createElement(s,{...r},"Questo è un alert di",e.createElement("b",null,r.color),"!")},a={render:({...r})=>e.createElement(s,{...r},"Questo è un alert con un esempio di",e.createElement("a",{href:"#",className:"alert-link"},"link"),"evidenziato."),args:{color:"danger"}},o={render:({...r})=>e.createElement(s,{...r},e.createElement("h4",{className:"alert-heading"},"Avviso di successo!"),e.createElement("p",null,"Stai leggendo questo importante messaggio di avviso di successo. Questo testo di esempio sarà più a lungo in modo da poter vedere come funzioni la spaziatura all'interno di un avviso con questo tipo di contenuto."),e.createElement("hr",null),e.createElement("p",{className:"mb-0"},"Quando necessario, assicurarti di inserire le utilità di margine per mantenere gli spazi equilibrati."))},k=({...r})=>{const[z,C]=S.useState(!0),_=()=>C(!1);return e.createElement("div",null,e.createElement(s,{...r,isOpen:z,toggle:_},e.createElement("strong",null,"Attenzione"),"Alcuni campi inseriti sono da controllare."))},t={render:r=>e.createElement(k,{...r}),parameters:{docs:{canvas:{sourceState:"none"}}},args:{color:"warning"}};var i,l,c;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: ({
    ...args
  }) => <Alert {...args}>
            Questo è un alert di<b>{args.color}</b>!
        </Alert>
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var u,m,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: ({
    ...args
  }) => <Alert {...args}>
            Questo è un alert con un esempio di
            <a href="#" className="alert-link">
                link
            </a>
            evidenziato.
        </Alert>,
  args: {
    color: "danger"
  }
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,g,v;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: ({
    ...args
  }) => <Alert {...args}>
            <h4 className="alert-heading">Avviso di successo!</h4>
            <p>
                Stai leggendo questo importante messaggio di avviso di successo. Questo testo di esempio sarà più a lungo in modo da poter vedere come funzioni
                la spaziatura all&#39;interno di un avviso con questo tipo di contenuto.
            </p>
            <hr />
            <p className="mb-0">Quando necessario, assicurarti di inserire le utilità di margine per mantenere gli spazi equilibrati.</p>
        </Alert>
}`,...(v=(g=o.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var E,A,h;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <ChiusuraControllataWithHooks {...args} />,
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  },
  args: {
    color: "warning"
  }
}`,...(h=(A=t.parameters)==null?void 0:A.docs)==null?void 0:h.source}}};const x=["_EsempiInterattivi","_LinkEvidenziato","_ContenutoAggiuntivo","ChiusuraControllata"],O=Object.freeze(Object.defineProperty({__proto__:null,ChiusuraControllata:t,_ContenutoAggiuntivo:o,_EsempiInterattivi:n,_LinkEvidenziato:a,__namedExportsOrder:x,default:b},Symbol.toStringTag,{value:"Module"}));export{O as A,t as C,a as _,o as a};
