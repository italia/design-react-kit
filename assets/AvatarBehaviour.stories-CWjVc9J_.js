import{R as e}from"./index-BFWcBMrj.js";import{A as a}from"./AvatarIcon-sxZuOOIz.js";import{A as o,a as t}from"./AvatarWrapper-Ct7SoGAt.js";import{c as I}from"./index-Bl6ORisp.js";import{I as n}from"./Icon-Dn2FEDq_.js";const r=({className:w,tag:c="div",presence:p,testId:m,...d})=>{const u=c,v=I("avatar-presence",{presence:p});return e.createElement(u,{...d,className:v,"data-testid":m})};r.__docgenInfo={description:"",methods:[],displayName:"AvatarPresence",props:{tag:{required:!1,tsType:{name:"ElementType"},description:"Utilizzarlo in caso di utilizzo di componenti personalizzati",defaultValue:{value:"'div'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Classi aggiuntive da usare per il componente AvatarPresence"},presence:{required:!0,tsType:{name:"union",raw:"'active' | 'busy' | 'hidden' | string",elements:[{name:"literal",value:"'active'"},{name:"literal",value:"'busy'"},{name:"literal",value:"'hidden'"},{name:"string"}]},description:"Utilizzare questo attributo per indicare il tipo di presenza dell'utente."},testId:{required:!1,tsType:{name:"string"},description:""}},composes:["HTMLAttributes"]};const s=({className:w,tag:c="div",status:p,testId:m,...d})=>{const u=c,v=I("avatar-status",{status:p});return e.createElement(u,{...d,className:v,"data-testid":m})};s.__docgenInfo={description:"",methods:[],displayName:"AvatarStatus",props:{tag:{required:!1,tsType:{name:"ElementType"},description:"Utilizzarlo in caso di utilizzo di componenti personalizzati",defaultValue:{value:"'div'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Classi aggiuntive da usare per il componente AvatarStatus"},status:{required:!0,tsType:{name:"union",raw:"'approved' | 'declined' | 'notify' | string",elements:[{name:"literal",value:"'approved'"},{name:"literal",value:"'declined'"},{name:"literal",value:"'notify'"},{name:"string"}]},description:"Utilizzare questo attributo per indicare il tipo di stato dell'utente."},testId:{required:!1,tsType:{name:"string"},description:""}},composes:["HTMLAttributes"]};const N={title:"Documentazione/Componenti/Avatar/Behavior",component:a},i={render:()=>e.createElement("div",null,e.createElement(o,null,e.createElement(t,null,e.createElement(a,{size:"xl"},e.createElement("img",{src:"https://randomuser.me/api/portraits/men/43.jpg",alt:"Mario Rossi"}),e.createElement(r,{presence:"active"},e.createElement("span",{className:"visually-hidden"},"Presenza:attivo")))),e.createElement(t,null,e.createElement(a,{size:"xl"},e.createElement("img",{src:"https://randomuser.me/api/portraits/women/41.jpg",alt:"Luisa Neri"}),e.createElement(r,{presence:"busy"},e.createElement(n,{color:"white",icon:"it-minus"}),e.createElement("span",{className:"visually-hidden"},"Presenza: non disponibile")))),e.createElement(t,null,e.createElement(a,{size:"xl"},e.createElement("img",{src:"https://randomuser.me/api/portraits/men/33.jpg",alt:"Gioacchino Romani"}),e.createElement(r,{presence:"hidden"},e.createElement("span",{className:"visually-hidden"},"Presenza: invisible"))))),e.createElement(o,null,e.createElement(t,null,e.createElement(a,{size:"md"},e.createElement("img",{src:"https://randomuser.me/api/portraits/women/32.jpg",alt:"Ludovica Galli"}),e.createElement(r,{presence:"busy"},e.createElement(n,{color:"white",icon:"it-minus"}),e.createElement("span",{className:"visually-hidden"},"Presenza: non disponibile")))),e.createElement(t,null,e.createElement(a,{size:"lg"},e.createElement("img",{src:"https://randomuser.me/api/portraits/women/32.jpg",alt:"Ludovica Galli"}),e.createElement(r,{presence:"busy"},e.createElement(n,{color:"white",icon:"it-minus"}),e.createElement("span",{className:"visually-hidden"},"Presenza: non disponibile")))),e.createElement(t,null,e.createElement(a,{size:"xl"},e.createElement("img",{src:"https://randomuser.me/api/portraits/women/32.jpg",alt:"Ludovica Galli"}),e.createElement(r,{presence:"busy"},e.createElement(n,{color:"white",icon:"it-minus"}),e.createElement("span",{className:"visually-hidden"},"Presenza: non disponibile")))),e.createElement(t,null,e.createElement(a,{size:"xxl"},e.createElement("img",{src:"https://randomuser.me/api/portraits/women/32.jpg",alt:"Ludovica Galli"}),e.createElement(r,{presence:"busy"},e.createElement(n,{color:"white",icon:"it-minus"}),e.createElement("span",{className:"visually-hidden"},"Presenza: non disponibile"))))))},l={render:()=>e.createElement("div",null,e.createElement(o,null,e.createElement(t,null,e.createElement(a,{size:"xl"},e.createElement("img",{src:"https://randomuser.me/api/portraits/men/43.jpg",alt:"Mario Rossi"}),e.createElement(s,{status:"approved"},e.createElement(n,{color:"white",icon:"it-check"}),e.createElement("span",{className:"visually-hidden"},"Stato: approvato")))),e.createElement(t,null,e.createElement(a,{size:"xl"},e.createElement("img",{src:"https://randomuser.me/api/portraits/women/41.jpg",alt:"Luisa Neri"}),e.createElement(s,{status:"declined"},e.createElement(n,{color:"white",icon:"it-close"}),e.createElement("span",{className:"visually-hidden"},"Stato: respinto")))),e.createElement(t,null,e.createElement(a,{size:"xl"},e.createElement("img",{src:"https://randomuser.me/api/portraits/men/33.jpg",alt:"Gioacchino Romani"}),e.createElement(s,{status:"notify"},e.createElement("span",{className:"visually-hidden"},"Testa notifica"))))),e.createElement(o,null,e.createElement(t,null,e.createElement(a,{size:"md"},e.createElement("img",{src:"https://randomuser.me/api/portraits/women/32.jpg",alt:"Ludovica Galli"}),e.createElement(s,{status:"approved"},e.createElement(n,{color:"white",icon:"it-check"}),e.createElement("span",{className:"visually-hidden"},"Stato: approvato")))),e.createElement(t,null,e.createElement(a,{size:"lg"},e.createElement("img",{src:"https://randomuser.me/api/portraits/women/32.jpg",alt:"Ludovica Galli"}),e.createElement(s,{status:"declined"},e.createElement(n,{color:"white",icon:"it-close"}),e.createElement("span",{className:"visually-hidden"},"Stato: respinto")))),e.createElement(t,null,e.createElement(a,{size:"xl"},e.createElement("img",{src:"https://randomuser.me/api/portraits/women/32.jpg",alt:"Ludovica Galli"}),e.createElement(s,{status:"approved"},e.createElement(n,{color:"white",icon:"it-check"}),e.createElement("span",{className:"visually-hidden"},"Stato: approvato")))),e.createElement(t,null,e.createElement(a,{size:"xxl"},e.createElement("img",{src:"https://randomuser.me/api/portraits/women/32.jpg",alt:"Ludovica Galli"}),e.createElement(s,{status:"declined"},e.createElement(n,{color:"white",icon:"it-close"}),e.createElement("span",{className:"visually-hidden"},"Stato: approvato"))))))};var A,h,E;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div>
            <AvatarContainer>
                <AvatarWrapper>
                    <AvatarIcon size="xl">
                        <img src="https://randomuser.me/api/portraits/men/43.jpg" alt="Mario Rossi" />
                        <AvatarPresence presence="active">
                            <span className="visually-hidden">Presenza:attivo</span>
                        </AvatarPresence>
                    </AvatarIcon>
                </AvatarWrapper>
                <AvatarWrapper>
                    <AvatarIcon size="xl">
                        <img src="https://randomuser.me/api/portraits/women/41.jpg" alt="Luisa Neri" />
                        <AvatarPresence presence="busy">
                            <Icon color="white" icon="it-minus" />
                            <span className="visually-hidden">Presenza: non disponibile</span>
                        </AvatarPresence>
                    </AvatarIcon>
                </AvatarWrapper>
                <AvatarWrapper>
                    <AvatarIcon size="xl">
                        <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="Gioacchino Romani" />
                        <AvatarPresence presence="hidden">
                            <span className="visually-hidden">Presenza: invisible</span>
                        </AvatarPresence>
                    </AvatarIcon>
                </AvatarWrapper>
            </AvatarContainer>
            <AvatarContainer>
                <AvatarWrapper>
                    <AvatarIcon size="md">
                        <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Ludovica Galli" />
                        <AvatarPresence presence="busy">
                            <Icon color="white" icon="it-minus" />
                            <span className="visually-hidden">Presenza: non disponibile</span>
                        </AvatarPresence>
                    </AvatarIcon>
                </AvatarWrapper>
                <AvatarWrapper>
                    <AvatarIcon size="lg">
                        <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Ludovica Galli" />
                        <AvatarPresence presence="busy">
                            <Icon color="white" icon="it-minus" />
                            <span className="visually-hidden">Presenza: non disponibile</span>
                        </AvatarPresence>
                    </AvatarIcon>
                </AvatarWrapper>
                <AvatarWrapper>
                    <AvatarIcon size="xl">
                        <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Ludovica Galli" />
                        <AvatarPresence presence="busy">
                            <Icon color="white" icon="it-minus" />
                            <span className="visually-hidden">Presenza: non disponibile</span>
                        </AvatarPresence>
                    </AvatarIcon>
                </AvatarWrapper>
                <AvatarWrapper>
                    <AvatarIcon size="xxl">
                        <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Ludovica Galli" />
                        <AvatarPresence presence="busy">
                            <Icon color="white" icon="it-minus" />
                            <span className="visually-hidden">Presenza: non disponibile</span>
                        </AvatarPresence>
                    </AvatarIcon>
                </AvatarWrapper>
            </AvatarContainer>
        </div>
}`,...(E=(h=i.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var g,z,y;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div>
            <AvatarContainer>
                <AvatarWrapper>
                    <AvatarIcon size="xl">
                        <img src="https://randomuser.me/api/portraits/men/43.jpg" alt="Mario Rossi" />
                        <AvatarStatus status="approved">
                            <Icon color="white" icon="it-check" />
                            <span className="visually-hidden">Stato: approvato</span>
                        </AvatarStatus>
                    </AvatarIcon>
                </AvatarWrapper>
                <AvatarWrapper>
                    <AvatarIcon size="xl">
                        <img src="https://randomuser.me/api/portraits/women/41.jpg" alt="Luisa Neri" />
                        <AvatarStatus status="declined">
                            <Icon color="white" icon="it-close" />
                            <span className="visually-hidden">Stato: respinto</span>
                        </AvatarStatus>
                    </AvatarIcon>
                </AvatarWrapper>
                <AvatarWrapper>
                    <AvatarIcon size="xl">
                        <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="Gioacchino Romani" />
                        <AvatarStatus status="notify">
                            <span className="visually-hidden">Testa notifica</span>
                        </AvatarStatus>
                    </AvatarIcon>
                </AvatarWrapper>
            </AvatarContainer>
            <AvatarContainer>
                <AvatarWrapper>
                    <AvatarIcon size="md">
                        <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Ludovica Galli" />
                        <AvatarStatus status="approved">
                            <Icon color="white" icon="it-check" />
                            <span className="visually-hidden">Stato: approvato</span>
                        </AvatarStatus>
                    </AvatarIcon>
                </AvatarWrapper>
                <AvatarWrapper>
                    <AvatarIcon size="lg">
                        <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Ludovica Galli" />
                        <AvatarStatus status="declined">
                            <Icon color="white" icon="it-close" />
                            <span className="visually-hidden">Stato: respinto</span>
                        </AvatarStatus>
                    </AvatarIcon>
                </AvatarWrapper>
                <AvatarWrapper>
                    <AvatarIcon size="xl">
                        <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Ludovica Galli" />
                        <AvatarStatus status="approved">
                            <Icon color="white" icon="it-check" />
                            <span className="visually-hidden">Stato: approvato</span>
                        </AvatarStatus>
                    </AvatarIcon>
                </AvatarWrapper>
                <AvatarWrapper>
                    <AvatarIcon size="xxl">
                        <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Ludovica Galli" />
                        <AvatarStatus status="declined">
                            <Icon color="white" icon="it-close" />
                            <span className="visually-hidden">Stato: approvato</span>
                        </AvatarStatus>
                    </AvatarIcon>
                </AvatarWrapper>
            </AvatarContainer>
        </div>
}`,...(y=(z=l.parameters)==null?void 0:z.docs)==null?void 0:y.source}}};const S=["UserPresence","UserStatus"],x=Object.freeze(Object.defineProperty({__proto__:null,UserPresence:i,UserStatus:l,__namedExportsOrder:S,default:N},Symbol.toStringTag,{value:"Module"}));export{r as A,i as U,l as a,s as b,x as c};
