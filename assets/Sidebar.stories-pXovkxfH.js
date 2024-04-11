import{R as e,r as S}from"./index-BFWcBMrj.js";import{c as g}from"./index-Bl6ORisp.js";import{L as t,a as n}from"./LinkListItem-CJpjZu_u.js";import{I as l}from"./Icon-Dn2FEDq_.js";import{C as y}from"./Collapse-BQdlK8Xy.js";const a=({className:r,testId:E,tag:s="div",secondary:k=!1,left:c=!1,right:b=!1,dark:i=!1,...v})=>{const I=s,j=g("sidebar-wrapper",r,{"it-line-left-side":c,"it-line-right-side":b,"theme-dark":i}),f=g("sidebar-linklist-wrapper",{"linklist-secondary":k});return k?e.createElement(I,{...v,className:f,"data-testid":E}):e.createElement(I,{className:j,"data-testid":E},e.createElement(I,{...v,className:f}))};a.__docgenInfo={description:"",methods:[],displayName:"Sidebar",props:{tag:{required:!1,tsType:{name:"ElementType"},description:"Utilizzarlo in caso di utilizzo di componenti personalizzati",defaultValue:{value:"'div'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Classi aggiuntive da usare per il componente Sidebar"},secondary:{required:!1,tsType:{name:"boolean"},description:"Indica se il componente Sideebar corrente è di tipo annidato o no",defaultValue:{value:"false",computed:!1}},left:{required:!1,tsType:{name:"boolean"},description:"Quando attivo aggiunge una linea separatrice a sinistra",defaultValue:{value:"false",computed:!1}},right:{required:!1,tsType:{name:"boolean"},description:"Quando attivo aggiunge una linea separatrice a destra",defaultValue:{value:"false",computed:!1}},dark:{required:!1,tsType:{name:"boolean"},description:"Quando attivo cambia il tema del componente Sidebar rendendola scura",defaultValue:{value:"false",computed:!1}},testId:{required:!1,tsType:{name:"string"},description:""}},composes:["HTMLAttributes"]};const M={title:"Documentazione/Componenti/Sidebar",component:a},m={render:()=>e.createElement(a,null,e.createElement(t,null,e.createElement(n,{header:!0},"HEADER"),e.createElement(n,{bold:!0,active:!0},e.createElement("span",null,"Link list active")),e.createElement(n,{bold:!0,disabled:!0},e.createElement("span",null,"Link list disabled")),e.createElement(n,{bold:!0},e.createElement("span",null,"Link list")),e.createElement(n,{bold:!0},e.createElement("span",null,"Link list"))),e.createElement(a,{secondary:!0}),e.createElement(t,null,e.createElement(n,null,e.createElement("span",null,"Secondary item")),e.createElement(n,{active:!0},e.createElement("span",null,"Secondary item active")),e.createElement(n,{disabled:!0},e.createElement("span",null,"Secondary item disabled"))))},d={render:()=>e.createElement(a,null,e.createElement(t,null,e.createElement(n,{header:!0},"HEADER"),e.createElement(n,{bold:!0,active:!0,className:"left-icon"},e.createElement(n.TitleIconWrapper,null,e.createElement(l,{icon:"it-star-outline",color:"primary","aria-hidden":!0,size:"sm"}),e.createElement("span",null,"Link list active"))),e.createElement(n,{bold:!0,disabled:!0,className:"left-icon"},e.createElement(n.TitleIconWrapper,null,e.createElement(l,{icon:"it-star-outline",color:"primary","aria-hidden":!0,size:"sm"}),e.createElement("span",null,"Link list disabled"))),e.createElement(n,{bold:!0,className:"left-icon"},e.createElement(n.TitleIconWrapper,null,e.createElement(l,{icon:"it-star-outline",color:"primary","aria-hidden":!0,size:"sm"}),e.createElement("span",null,"Link list"))),e.createElement(n,{bold:!0,className:"left-icon"},e.createElement(n.TitleIconWrapper,null,e.createElement(l,{icon:"it-star-outline",color:"primary","aria-hidden":!0,size:"sm"}),e.createElement("span",null,"Link list")))),e.createElement(a,{secondary:!0}),e.createElement(t,null,e.createElement(n,null,e.createElement("span",null,"Secondary item")),e.createElement(n,{active:!0},e.createElement("span",null,"Secondary item active")),e.createElement(n,{disabled:!0},e.createElement("span",null,"Secondary item disabled"))))},o={render:()=>e.createElement(a,{right:!0},e.createElement(t,null,e.createElement(n,{header:!0},"HEADER"),e.createElement(n,{bold:!0,active:!0},e.createElement("span",null,"Link list active")),e.createElement(n,{bold:!0,disabled:!0},e.createElement("span",null,"Link list disabled")),e.createElement(n,{bold:!0},e.createElement("span",null,"Link list")),e.createElement(n,{bold:!0},e.createElement("span",null,"Link list"))),e.createElement(a,{secondary:!0}),e.createElement(t,null,e.createElement(n,null,e.createElement("span",null,"Secondary item")),e.createElement(n,{active:!0},e.createElement("span",null,"Secondary item active")),e.createElement(n,{disabled:!0},e.createElement("span",null,"Secondary item disabled"))))},L={render:()=>e.createElement(a,{left:!0},e.createElement(t,null,e.createElement(n,{header:!0},"HEADER"),e.createElement(n,{bold:!0,active:!0},e.createElement("span",null,"Link list active")),e.createElement(n,{bold:!0,disabled:!0},e.createElement("span",null,"Link list disabled")),e.createElement(n,{bold:!0},e.createElement("span",null,"Link list")),e.createElement(n,{bold:!0},e.createElement("span",null,"Link list"))),e.createElement(a,{secondary:!0}),e.createElement(t,null,e.createElement(n,null,e.createElement("span",null,"Secondary item")),e.createElement(n,{active:!0},e.createElement("span",null,"Secondary item active")),e.createElement(n,{disabled:!0},e.createElement("span",null,"Secondary item disabled"))))},p={render:()=>e.createElement(a,{dark:!0},e.createElement(t,null,e.createElement(n,{header:!0},"HEADER"),e.createElement(n,{bold:!0,active:!0},e.createElement("span",null,"Link list active")),e.createElement(n,{bold:!0,disabled:!0},e.createElement("span",null,"Link list disabled")),e.createElement(n,{bold:!0},e.createElement("span",null,"Link list")),e.createElement(n,{bold:!0},e.createElement("span",null,"Link list"))),e.createElement(a,{secondary:!0}),e.createElement(t,null,e.createElement(n,null,e.createElement("span",null,"Secondary item")),e.createElement(n,{active:!0},e.createElement("span",null,"Secondary item active")),e.createElement(n,{disabled:!0},e.createElement("span",null,"Secondary item disabled"))))},P=()=>{const[r,E]=S.useState(!1),[s,k]=S.useState(!1),[c,b]=S.useState(!1);return e.createElement(a,{left:!0},e.createElement(t,null,e.createElement(n,{large:!0,bold:!0,className:"right-icon",onClick:i=>{i.preventDefault(),E(!r)},"aria-expanded":r},e.createElement(n.TitleIconWrapper,null,e.createElement("span",null,"Link list 1 "),e.createElement(l,{className:"right",icon:"it-expand",color:"primary","aria-hidden":!0}))),e.createElement(y,{isOpen:r},e.createElement(t,{sublist:!0},e.createElement(n,null,e.createElement("span",null,"Link list 4 ")),e.createElement(n,null,e.createElement("span",null,"Link list 5 ")),e.createElement(n,null,e.createElement("span",null,"Link list 6 ")))),e.createElement(n,{large:!0,bold:!0,className:"right-icon",onClick:i=>{i.preventDefault(),k(!s)},"aria-expanded":s},e.createElement(n.TitleIconWrapper,null,e.createElement("span",null,"Link list 2 "),e.createElement(l,{className:"right",icon:"it-expand",color:"primary","aria-hidden":!0}))),e.createElement(y,{isOpen:s},e.createElement(t,{sublist:!0},e.createElement(n,null,e.createElement("span",null,"Link list 7 ")),e.createElement(n,null,e.createElement("span",null,"Link list 8 ")),e.createElement(n,null,e.createElement("span",null,"Link list 9 ")))),e.createElement(n,{large:!0,bold:!0,className:"right-icon",onClick:i=>{i.preventDefault(),b(!c)},"aria-expanded":c},e.createElement(n.TitleIconWrapper,null,e.createElement("span",null,"Link list 3 "),e.createElement(l,{className:"right",icon:"it-expand",color:"primary","aria-hidden":!0}))),e.createElement(y,{isOpen:c},e.createElement(t,{sublist:!0},e.createElement(n,null,e.createElement("span",null,"Link list 10 ")),e.createElement(n,null,e.createElement("span",null,"Link list 11 ")),e.createElement(n,null,e.createElement("span",null,"Link list 12 ")))),e.createElement(a,{secondary:!0}),e.createElement(n,null,e.createElement("span",null,"Secondary item")),e.createElement(n,{active:!0},e.createElement("span",null,"Secondary item active")),e.createElement(n,{disabled:!0},e.createElement("span",null,"Secondary item disabled"))))},u={render:()=>e.createElement(P,null)};var h,T,N;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Sidebar>
      <LinkList>
        <LinkListItem header>HEADER</LinkListItem>
        <LinkListItem bold active>
          <span>Link list active</span>
        </LinkListItem>
        <LinkListItem bold disabled>
          <span>Link list disabled</span>
        </LinkListItem>
        <LinkListItem bold>
          <span>Link list</span>
        </LinkListItem>
        <LinkListItem bold>
          <span>Link list</span>
        </LinkListItem>
      </LinkList>
      <Sidebar secondary />
      <LinkList>
        <LinkListItem>
          <span>Secondary item</span>
        </LinkListItem>
        <LinkListItem active>
          <span>Secondary item active</span>
        </LinkListItem>
        <LinkListItem disabled>
          <span>Secondary item disabled</span>
        </LinkListItem>
      </LinkList>
    </Sidebar>
}`,...(N=(T=m.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var A,C,W;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Sidebar>
      <LinkList>
        <LinkListItem header>HEADER</LinkListItem>
        <LinkListItem bold active className="left-icon">
          <LinkListItem.TitleIconWrapper>
            <Icon icon="it-star-outline" color="primary" aria-hidden size="sm" />
            <span>Link list active</span>
          </LinkListItem.TitleIconWrapper>
        </LinkListItem>
        <LinkListItem bold disabled className="left-icon">
          <LinkListItem.TitleIconWrapper>
            <Icon icon="it-star-outline" color="primary" aria-hidden size="sm" />
            <span>Link list disabled</span>
          </LinkListItem.TitleIconWrapper>
        </LinkListItem>
        <LinkListItem bold className="left-icon">
          <LinkListItem.TitleIconWrapper>
            <Icon icon="it-star-outline" color="primary" aria-hidden size="sm" />
            <span>Link list</span>
          </LinkListItem.TitleIconWrapper>
        </LinkListItem>
        <LinkListItem bold className="left-icon">
          <LinkListItem.TitleIconWrapper>
            <Icon icon="it-star-outline" color="primary" aria-hidden size="sm" />
            <span>Link list</span>
          </LinkListItem.TitleIconWrapper>
        </LinkListItem>
      </LinkList>
      <Sidebar secondary />
      <LinkList>
        <LinkListItem>
          <span>Secondary item</span>
        </LinkListItem>
        <LinkListItem active>
          <span>Secondary item active</span>
        </LinkListItem>
        <LinkListItem disabled>
          <span>Secondary item disabled</span>
        </LinkListItem>
      </LinkList>
    </Sidebar>
}`,...(W=(C=d.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var z,D,_;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Sidebar right>
      <LinkList>
        <LinkListItem header>HEADER</LinkListItem>
        <LinkListItem bold active>
          <span>Link list active</span>
        </LinkListItem>
        <LinkListItem bold disabled>
          <span>Link list disabled</span>
        </LinkListItem>
        <LinkListItem bold>
          <span>Link list</span>
        </LinkListItem>
        <LinkListItem bold>
          <span>Link list</span>
        </LinkListItem>
      </LinkList>
      <Sidebar secondary />
      <LinkList>
        <LinkListItem>
          <span>Secondary item</span>
        </LinkListItem>
        <LinkListItem active>
          <span>Secondary item active</span>
        </LinkListItem>
        <LinkListItem disabled>
          <span>Secondary item disabled</span>
        </LinkListItem>
      </LinkList>
    </Sidebar>
}`,...(_=(D=o.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var H,R,x;L.parameters={...L.parameters,docs:{...(H=L.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <Sidebar left>
      <LinkList>
        <LinkListItem header>HEADER</LinkListItem>
        <LinkListItem bold active>
          <span>Link list active</span>
        </LinkListItem>
        <LinkListItem bold disabled>
          <span>Link list disabled</span>
        </LinkListItem>
        <LinkListItem bold>
          <span>Link list</span>
        </LinkListItem>
        <LinkListItem bold>
          <span>Link list</span>
        </LinkListItem>
      </LinkList>
      <Sidebar secondary />
      <LinkList>
        <LinkListItem>
          <span>Secondary item</span>
        </LinkListItem>
        <LinkListItem active>
          <span>Secondary item active</span>
        </LinkListItem>
        <LinkListItem disabled>
          <span>Secondary item disabled</span>
        </LinkListItem>
      </LinkList>
    </Sidebar>
}`,...(x=(R=L.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};var O,q,V;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <Sidebar dark>
      <LinkList>
        <LinkListItem header>HEADER</LinkListItem>
        <LinkListItem bold active>
          <span>Link list active</span>
        </LinkListItem>
        <LinkListItem bold disabled>
          <span>Link list disabled</span>
        </LinkListItem>
        <LinkListItem bold>
          <span>Link list</span>
        </LinkListItem>
        <LinkListItem bold>
          <span>Link list</span>
        </LinkListItem>
      </LinkList>
      <Sidebar secondary />
      <LinkList>
        <LinkListItem>
          <span>Secondary item</span>
        </LinkListItem>
        <LinkListItem active>
          <span>Secondary item active</span>
        </LinkListItem>
        <LinkListItem disabled>
          <span>Secondary item disabled</span>
        </LinkListItem>
      </LinkList>
    </Sidebar>
}`,...(V=(q=p.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var w,B,Q;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <_AnnidataWithHooks />
}`,...(Q=(B=u.parameters)==null?void 0:B.docs)==null?void 0:Q.source}}};const U=["BasicSidebar","_ConIcona","ConLineaADestra","ConLineaASinistra","SidebarVersioneScura","_Annidata"],Y=Object.freeze(Object.defineProperty({__proto__:null,BasicSidebar:m,ConLineaADestra:o,ConLineaASinistra:L,SidebarVersioneScura:p,_Annidata:u,_ConIcona:d,__namedExportsOrder:U,default:M},Symbol.toStringTag,{value:"Module"}));export{m as B,o as C,Y as S,d as _,L as a,u as b,p as c};
