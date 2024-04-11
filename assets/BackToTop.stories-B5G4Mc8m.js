import{r as i,R as e}from"./index-BFWcBMrj.js";import{I as q}from"./Icon-Dn2FEDq_.js";import{c as I}from"./index-Bl6ORisp.js";import{B as O}from"./Button-BvsBu0Bj.js";const R=()=>{window.scrollTo({top:0,behavior:"smooth"})},a=({className:l,dark:c=!1,small:N=!1,shadow:_=!1,showOffset:d=200})=>{const[D,m]=i.useState(!1);return i.useLayoutEffect(()=>{window.addEventListener("scroll",()=>{window.scrollY>d?m(!0):m(!1)})},[d]),e.createElement(O,{"aria-hidden":"true",tabIndex:-1,className:I(l,"back-to-top",N&&"back-to-top-small",D&&"back-to-top-show",c&&"dark",_&&"shadow"),id:"back-to-top-btn",onClick:R,style:{padding:0},color:c?"":"primary"},e.createElement(q,{color:c?"secondary":"white",icon:"it-arrow-up",style:{top:0}}))};a.__docgenInfo={description:"",methods:[],displayName:"BackToTop",props:{className:{required:!1,tsType:{name:"string"},description:"Optional classnames to pass to <a> element"},dark:{required:!1,tsType:{name:"boolean"},description:"Render the dark variant of the back to top button",defaultValue:{value:"false",computed:!1}},small:{required:!1,tsType:{name:"boolean"},description:"Render the small variant of the back to top button",defaultValue:{value:"false",computed:!1}},shadow:{required:!1,tsType:{name:"boolean"},description:"Add a shadow to the button",defaultValue:{value:"false",computed:!1}},showOffset:{required:!1,tsType:{name:"number"},description:"Configure after how many scrolled pixels the button is shown",defaultValue:{value:"200",computed:!1}}}};const V={title:"Documentazione/Componenti/BackToTop",component:a},r={render:()=>e.createElement(a,null)},o={render:l=>e.createElement(a,{...l}),args:{small:!0}},t={render:()=>e.createElement("div",{className:"d-flex align-items-center"},e.createElement(a,{shadow:!0}),e.createElement(a,{shadow:!0,small:!0}))},s={render:()=>e.createElement("div",{className:"d-flex align-items-center"},e.createElement(a,{dark:!0}),e.createElement(a,{dark:!0,small:!0}))},n={render:()=>e.createElement("div",{className:"d-flex align-items-center"},e.createElement(a,{dark:!0,shadow:!0}),e.createElement(a,{dark:!0,shadow:!0,small:!0}))};var p,u,f;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <BackToTop />
}`,...(f=(u=r.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var k,T,h;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <BackToTop {...args} />,
  args: {
    small: true
  }
}`,...(h=(T=o.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var w,b,g;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="d-flex align-items-center">
            <BackToTop shadow />
            <BackToTop shadow small />
        </div>
}`,...(g=(b=t.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var E,v,B;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="d-flex align-items-center">
            <BackToTop dark />
            <BackToTop dark small />
        </div>
}`,...(B=(v=s.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var S,y,x;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="d-flex align-items-center">
            <BackToTop dark shadow />
            <BackToTop dark shadow small />
        </div>
}`,...(x=(y=n.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const C=["Esempio","Small","Shadow","Dark","DarkShadow"],M=Object.freeze(Object.defineProperty({__proto__:null,Dark:s,DarkShadow:n,Esempio:r,Shadow:t,Small:o,__namedExportsOrder:C,default:V},Symbol.toStringTag,{value:"Module"}));export{M as B,s as D,r as E,o as S,t as a,n as b};
