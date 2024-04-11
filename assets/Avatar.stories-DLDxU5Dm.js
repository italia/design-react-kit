import{R as e,r as h}from"./index-BFWcBMrj.js";import{A as a}from"./AvatarIcon-sxZuOOIz.js";import{A as s,a as v}from"./AvatarWrapper-Ct7SoGAt.js";import{I as r}from"./Icon-Dn2FEDq_.js";import{c as H}from"./index-Bl6ORisp.js";import{U as E}from"./UncontrolledTooltip-DsP5hi4G.js";const u=({className:t,tag:n="div",testId:d,...L})=>{const _=n,U=H("extra-text",t);return e.createElement(_,{className:U,...L,"data-testid":d})};u.__docgenInfo={description:"",methods:[],displayName:"AvatarExtraText",props:{tag:{required:!1,tsType:{name:"ElementType"},description:"Utilizzarlo in caso di utilizzo di componenti personalizzati",defaultValue:{value:"'div'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Classi aggiuntive da usare per il componente AvatarExtraText"},testId:{required:!1,tsType:{name:"string"},description:""}},composes:["HTMLAttributes"]};const D={title:"Documentazione/Componenti/Avatar",component:a,argTypes:{color:{control:"select",options:["primary","secondary","green","orange","red"]}}},B=t=>e.createElement(s,null,e.createElement(a,{size:"lg"},t.results&&t.results.length?e.createElement("img",{src:t.results.at(0).picture.large,alt:`${t.results.at(0).name.last} ${t.results.at(0).name.first}`}):null)),i={loaders:[async()=>({fakeUser:await(await fetch("https://randomuser.me/api")).json()})],render:(t,{loaded:{fakeUser:n}})=>e.createElement(B,{...t,...n})},o={render:()=>e.createElement(s,null,e.createElement(a,{size:"xs"},e.createElement("p",{"aria-hidden":"true"},"M"),e.createElement("span",{className:"visually-hidden"},"Mario Rossi")),e.createElement(a,{color:"primary",size:"sm"},e.createElement("p",{"aria-hidden":"true"},"M"),e.createElement("span",{className:"visually-hidden"},"Mario Rossi")),e.createElement(a,{color:"secondary"},e.createElement("p",{"aria-hidden":"true"},"MR"),e.createElement("span",{className:"visually-hidden"},"Mario Rossi")),e.createElement(a,{color:"green",size:"lg"},e.createElement("p",{"aria-hidden":"true"},"MR"),e.createElement("span",{className:"visually-hidden"},"Mario Rossi")),e.createElement(a,{color:"orange",size:"xl"},e.createElement("p",{"aria-hidden":"true"},"MR"),e.createElement("span",{className:"visually-hidden"},"Mario Rossi")),e.createElement(a,{color:"red",size:"xxl"},e.createElement("p",{"aria-hidden":"true"},"MR"),e.createElement("span",{className:"visually-hidden"},"Mario Rossi")))},l={render:()=>e.createElement(s,null,e.createElement(a,{size:"xs"},e.createElement(r,{icon:"it-search"})),e.createElement(a,{size:"sm"},e.createElement(r,{icon:"it-search"})),e.createElement(a,null,e.createElement(r,{icon:"it-search"})),e.createElement(a,{size:"lg"},e.createElement(r,{icon:"it-search"})),e.createElement(a,{size:"xl"},e.createElement(r,{icon:"it-search"})),e.createElement(a,{size:"xxl"},e.createElement(r,{icon:"it-search"})))},c={render:()=>e.createElement(s,null,e.createElement(a,{size:"xl",href:"#"},e.createElement("img",{src:"https://randomuser.me/api/portraits/women/41.jpg",alt:"Anna Barbieri"})),e.createElement(a,{size:"xl",color:"red",href:"#"},e.createElement("p",{"aria-hidden":"true"},"MR"),e.createElement("span",{className:"visually-hidden"},"Mario Rossi")),e.createElement(a,{size:"xl"},e.createElement(r,{icon:"it-search",onClick:()=>console.log("Click")})))},G=()=>{const t=h.useRef(null),n=h.useRef(null),d=h.useRef(null);return e.createElement(s,null,e.createElement(a,{size:"xl",href:"#",innerRef:t},e.createElement(E,{placement:"left",target:t},"Anna Barbieri",e.createElement("br",null),e.createElement("i",null,"Administrator")),e.createElement("img",{src:"https://randomuser.me/api/portraits/women/41.jpg",alt:"Anna Barbieri"})),e.createElement(a,{size:"xl",color:"red",href:"#",innerRef:n},e.createElement(E,{placement:"top",target:n},"Mario Rossi",e.createElement("br",null),e.createElement("i",null,"Editor")),e.createElement("p",{"aria-hidden":"true"},"MR"),e.createElement("span",{className:"visually-hidden"},"Mario Rossi")),e.createElement(a,{size:"xl",href:"#",innerRef:d},e.createElement(r,{icon:"it-search"}),e.createElement(E,{placement:"right",target:d},"Search",e.createElement("br",null),e.createElement("i",null,"News Archive"))))},m={render:()=>e.createElement(G,null),parameters:{docs:{canvas:{sourceState:"none"}}}},p={render:()=>e.createElement(s,null,e.createElement(v,{extra:"text"},e.createElement(a,{size:"xl"},e.createElement("img",{src:"https://randomuser.me/api/portraits/men/33.jpg",alt:"Mario Rossi"})),e.createElement(u,null,e.createElement("h4",null,e.createElement("a",{href:"#"},"Mario Rossi")),e.createElement("time",{dateTime:"2018-09-15"},"15 Set 2018"))),e.createElement(v,{extra:"text"},e.createElement(a,{size:"xl"},e.createElement("img",{src:"https://randomuser.me/api/portraits/women/33.jpg",alt:"Guilia Neri"})),e.createElement(u,null,e.createElement("h4",null,"Guilia Neri"),e.createElement("p",null,"Lorem ipsum dolor"))),e.createElement(v,{extra:"text"},e.createElement(a,{size:"xl"},e.createElement("img",{src:"https://randomuser.me/api/portraits/men/15.jpg",alt:"Michele Dotti"})),e.createElement(u,null,e.createElement("h4",null,e.createElement("a",{href:"#"},"Micehele Dotti")),e.createElement("time",{dateTime:"2018-09-15"},"15 Mag 2018"))))};var A,x,g;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  loaders: [async () => ({
    fakeUser: await (await fetch("https://randomuser.me/api")).json() //https://randomuser.me/documentation#howto
  })],
  render: (args, {
    loaded: {
      fakeUser
    }
  }) => <AvatarWithImageWithHooks {...args} {...fakeUser} />
}`,...(g=(x=i.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var I,f,z;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <AvatarContainer>
            <AvatarIcon size="xs">
                <p aria-hidden="true">M</p>
                <span className="visually-hidden">Mario Rossi</span>
            </AvatarIcon>
            <AvatarIcon color="primary" size="sm">
                <p aria-hidden="true">M</p>
                <span className="visually-hidden">Mario Rossi</span>
            </AvatarIcon>
            <AvatarIcon color="secondary">
                <p aria-hidden="true">MR</p>
                <span className="visually-hidden">Mario Rossi</span>
            </AvatarIcon>
            <AvatarIcon color="green" size="lg">
                <p aria-hidden="true">MR</p>
                <span className="visually-hidden">Mario Rossi</span>
            </AvatarIcon>
            <AvatarIcon color="orange" size="xl">
                <p aria-hidden="true">MR</p>
                <span className="visually-hidden">Mario Rossi</span>
            </AvatarIcon>
            <AvatarIcon color="red" size="xxl">
                <p aria-hidden="true">MR</p>
                <span className="visually-hidden">Mario Rossi</span>
            </AvatarIcon>
        </AvatarContainer>
}`,...(z=(f=o.parameters)==null?void 0:f.docs)==null?void 0:z.source}}};var M,R,T;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <AvatarContainer>
            <AvatarIcon size="xs">
                <Icon icon="it-search" />
            </AvatarIcon>
            <AvatarIcon size="sm">
                <Icon icon="it-search" />
            </AvatarIcon>
            <AvatarIcon>
                <Icon icon="it-search" />
            </AvatarIcon>
            <AvatarIcon size="lg">
                <Icon icon="it-search" />
            </AvatarIcon>
            <AvatarIcon size="xl">
                <Icon icon="it-search" />
            </AvatarIcon>
            <AvatarIcon size="xxl">
                <Icon icon="it-search" />
            </AvatarIcon>
        </AvatarContainer>
}`,...(T=(R=l.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var y,W,N;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <AvatarContainer>
            <AvatarIcon size="xl" href="#">
                <img src="https://randomuser.me/api/portraits/women/41.jpg" alt="Anna Barbieri"></img>
            </AvatarIcon>
            <AvatarIcon size="xl" color="red" href="#">
                <p aria-hidden="true">MR</p>
                <span className="visually-hidden">Mario Rossi</span>
            </AvatarIcon>
            <AvatarIcon size="xl">
                <Icon icon="it-search" onClick={() => console.log("Click")} />
            </AvatarIcon>
        </AvatarContainer>
}`,...(N=(W=c.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var k,C,w;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <AvatarLinkWithTooltipWithHooks></AvatarLinkWithTooltipWithHooks>,
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
}`,...(w=(C=m.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var S,j,b;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <AvatarContainer>
            <AvatarWrapper extra="text">
                <AvatarIcon size="xl">
                    <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="Mario Rossi" />
                </AvatarIcon>
                <AvatarExtraText>
                    <h4>
                        <a href="#">Mario Rossi</a>
                    </h4>
                    <time dateTime="2018-09-15">15 Set 2018</time>
                </AvatarExtraText>
            </AvatarWrapper>
            <AvatarWrapper extra="text">
                <AvatarIcon size="xl">
                    <img src="https://randomuser.me/api/portraits/women/33.jpg" alt="Guilia Neri" />
                </AvatarIcon>
                <AvatarExtraText>
                    <h4>Guilia Neri</h4>
                    <p>Lorem ipsum dolor</p>
                </AvatarExtraText>
            </AvatarWrapper>
            <AvatarWrapper extra="text">
                <AvatarIcon size="xl">
                    <img src="https://randomuser.me/api/portraits/men/15.jpg" alt="Michele Dotti" />
                </AvatarIcon>
                <AvatarExtraText>
                    <h4>
                        <a href="#">Micehele Dotti</a>
                    </h4>
                    <time dateTime="2018-09-15">15 Mag 2018</time>
                </AvatarExtraText>
            </AvatarWrapper>
        </AvatarContainer>
}`,...(b=(j=p.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};const q=["AvatarWithImage","AvatarWithText","AvatarWithIcon","AvatarLink","AvatarLinkWithTooltip","AvatarWithAdditionalText"],K=Object.freeze(Object.defineProperty({__proto__:null,AvatarLink:c,AvatarLinkWithTooltip:m,AvatarWithAdditionalText:p,AvatarWithIcon:l,AvatarWithImage:i,AvatarWithText:o,__namedExportsOrder:q,default:D},Symbol.toStringTag,{value:"Module"}));export{K as A,i as a,o as b,l as c,c as d,m as e,u as f};
