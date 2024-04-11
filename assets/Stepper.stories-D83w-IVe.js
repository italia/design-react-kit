import{R as e}from"./index-BFWcBMrj.js";import{S as o,a as R,b as j}from"./StepperNav-DlUBRm_X.js";import{c as v}from"./index-Bl6ORisp.js";import{I as r}from"./Icon-Dn2FEDq_.js";import{B as d}from"./Button-BvsBu0Bj.js";const n=({tag:H="div",testId:u,className:f,children:a,...g})=>{var E;const b=H,I=v("steppers-header",f),S=((E=a==null?void 0:a.props)==null?void 0:E.variant)==="mobile";return e.createElement(b,{...g,className:I,"data-testid":u},S?e.createElement("span",null,a):e.createElement("ul",null,a))};n.__docgenInfo={description:"",methods:[],displayName:"StepperHeader",props:{tag:{required:!1,tsType:{name:"ElementType"},description:"Utilizzarlo in caso di utilizzo di componenti personalizzati",defaultValue:{value:"'div'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Classi aggiuntive da usare per il componente StepperHeader"},testId:{required:!1,tsType:{name:"string"},description:""}},composes:["HTMLAttributes"]};const Y={confirmed:"confirmed",active:"active",done:"done",mobile:"steppers-index","steppers-index":"steppers-index"},t=({tag:H="li",variant:u,appendIcon:f,prependIcon:a,icon:g,iconName:b,noLine:I,stepperNumber:S,testId:E,children:F,className:G,...J})=>{const K=H,Q=v(u?Y[u]:"",G,{"no-line":I}),W=v("icon","steppers-success"),X=v("steppers-number"),N=f||g,T=a||b;return e.createElement(K,{...J,className:Q,"data-testid":E},T&&e.createElement(r,{icon:T}),S&&e.createElement("span",{className:X},S),F,N&&e.createElement(r,{icon:N,className:W}))};t.__docgenInfo={description:"",methods:[],displayName:"StepperHeaderElement",props:{tag:{required:!1,tsType:{name:"ElementType"},description:"Utilizzarlo in caso di utilizzo di componenti personalizzati",defaultValue:{value:"'li'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Classi aggiuntive da usare per il componente StepperHeader"},variant:{required:!1,tsType:{name:"union",raw:"keyof typeof variants",elements:[{name:"literal",value:"confirmed"},{name:"literal",value:"active"},{name:"literal",value:"done"},{name:"literal",value:"mobile"},{name:"literal",value:"'steppers-index'"}]},description:`Il tipo di step:
* confirmed (confermato),
* active (attivo - su mobile viene mostrato solo questo)
* done (completato)
* mobile (visibile solo su mobile, usato per mostrare lo stato attuale di progresso)
* steppers-index (deprecato) usare mobile`},appendIcon:{required:!1,tsType:{name:"string"},description:"Icona da mostrare alla destra dell'etichetta dello step"},prependIcon:{required:!1,tsType:{name:"string"},description:"Icona da mostrare alla sinistra dell'etichetta dello step"},stepperNumber:{required:!1,tsType:{name:"ReactNode"},description:"Utilizzare questo attributo per elementi aggiuntivi da mostrare su dispositivi mobile per lo step attivo"},noLine:{required:!1,tsType:{name:"boolean"},description:"Nasconde il bordo inferiore azzurro per lo step"},icon:{required:!1,tsType:{name:"string"},description:"@deprecated Usare `appendIcon`"},iconName:{required:!1,tsType:{name:"string"},description:"@deprecated Usare `prependIcon`"},testId:{required:!1,tsType:{name:"string"},description:""}},composes:["HTMLAttributes"]};const Z={title:"Documentazione/Componenti/Stepper",component:o},p=()=>e.createElement(o,null,e.createElement(n,null,e.createElement(t,{variant:"confirmed",appendIcon:"it-check"},"Primo contenuto"),e.createElement(t,{variant:"active"},"Secondo contenuto"),e.createElement(t,null,"Terzo contenuto"),e.createElement(t,{variant:"mobile",tag:"span"},"2/6"))),c=()=>e.createElement(o,null,e.createElement(n,null,e.createElement(t,{variant:"confirmed",appendIcon:"it-check",prependIcon:"it-calendar"},"Primo contenuto"),e.createElement(t,{variant:"active",prependIcon:"it-lock"},"Secondo contenuto"),e.createElement(t,{prependIcon:"it-settings"},"Terzo contenuto"),e.createElement(t,{variant:"mobile",tag:"span"},"2/6"))),i=()=>e.createElement(o,null,e.createElement(n,null,e.createElement(t,{variant:"confirmed",stepperNumber:e.createElement(r,{icon:"it-check"})},"Primo contenuto"),e.createElement(t,{variant:"active",noLine:!0,stepperNumber:e.createElement("span",null,"2")},"Secondo contenuto"),e.createElement(t,{stepperNumber:e.createElement("span",null,"3")},"Terzo contenuto"))),s=()=>e.createElement(o,null,e.createElement(n,null,e.createElement(t,{variant:"confirmed",prependIcon:"it-check"},"Primo contenuto"),e.createElement(t,{variant:"active"},"Secondo contenuto"),e.createElement(t,null,"Terzo contenuto"),e.createElement(t,{variant:"mobile",tag:"span"},"2/6")),e.createElement(R,null,e.createElement("p",null,"Contenuto di esempio dello step corrente")),e.createElement(j,null,e.createElement(d,{outline:!0,color:"primary",size:"sm",className:"steppers-btn-prev"},e.createElement(r,{icon:"it-chevron-left",color:"primary"}),"Indietro"),e.createElement(d,{outline:!0,color:"primary",size:"sm",className:"steppers-btn-next"},"Avanti",e.createElement(r,{icon:"it-chevron-right",color:"primary"})),e.createElement(d,{color:"primary",size:"sm",className:"steppers-btn-confirm d-none d-lg-block"},"Conferma"))),l=()=>e.createElement(o,{dark:!0},e.createElement(n,null,e.createElement(t,{variant:"confirmed",prependIcon:"it-check"},"Primo contenuto"),e.createElement(t,{variant:"active"},"Secondo contenuto"),e.createElement(t,null,"Terzo contenuto"),e.createElement(t,{variant:"mobile",tag:"span"},"2/6")),e.createElement(R,{dark:!0},e.createElement("p",null,"Contenuto di esempio dello step corrente")),e.createElement(j,null,e.createElement(d,{outline:!0,color:"primary",size:"sm",className:"steppers-btn-prev"},e.createElement(r,{icon:"it-chevron-left",color:"primary"}),"Indietro"),e.createElement(d,{outline:!0,color:"primary",size:"sm",className:"steppers-btn-next"},"Avanti",e.createElement(r,{icon:"it-chevron-right",color:"primary"})),e.createElement(d,{color:"primary",size:"sm",className:"stepper-btn-confirm d-none d-lg-block"},"Conferma"))),m=()=>e.createElement(o,{dark:!0},e.createElement(n,null,e.createElement(t,{variant:"confirmed",prependIcon:"it-check"},"Primo contenuto"),e.createElement(t,{variant:"active"},"Secondo contenuto"),e.createElement(t,null,"Terzo contnuto"),e.createElement(t,{variant:"mobile",tag:"span"},"2/6")),e.createElement(n,null,e.createElement(t,{variant:"confirmed",appendIcon:"it-check",prependIcon:"it-calendar"},"Primo contenuto"),e.createElement(t,{variant:"active",prependIcon:"it-lock"},"Secondo contenuto"),e.createElement(t,{prependIcon:"it-settings"},"Terzo contenuto"),e.createElement(t,{variant:"mobile",tag:"span"},"2/6")),e.createElement(n,null,e.createElement(t,{variant:"confirmed",stepperNumber:e.createElement(r,{icon:"it-check"})},"Primo contenuto"),e.createElement(t,{variant:"active",noLine:!0,stepperNumber:e.createElement("span",null,"2")},"Secondo contenuto"),e.createElement(t,{stepperNumber:e.createElement("span",null,"3")},"Terzo contenuto")));p.__docgenInfo={description:"",methods:[],displayName:"TextOnly"};c.__docgenInfo={description:"",methods:[],displayName:"TextAndIcons"};i.__docgenInfo={description:"",methods:[],displayName:"OrderOfTheSteps"};s.__docgenInfo={description:"",methods:[],displayName:"NavigationOfTheSteps"};l.__docgenInfo={description:"",methods:[],displayName:"VersionOnADarkBackground"};m.__docgenInfo={description:"",methods:[],displayName:"HeaderVariants"};var y,z,h;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  return <StepperContainer>
            <StepperHeader>
                <StepperHeaderElement variant="confirmed" appendIcon="it-check">
                    Primo contenuto
                </StepperHeaderElement>
                <StepperHeaderElement variant="active">Secondo contenuto</StepperHeaderElement>
                <StepperHeaderElement>Terzo contenuto</StepperHeaderElement>
                <StepperHeaderElement variant="mobile" tag={"span"}>
                    2/6
                </StepperHeaderElement>
            </StepperHeader>
        </StepperContainer>;
}`,...(h=(z=p.parameters)==null?void 0:z.docs)==null?void 0:h.source}}};var k,C,_;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  return <StepperContainer>
            <StepperHeader>
                <StepperHeaderElement variant="confirmed" appendIcon="it-check" prependIcon="it-calendar">
                    Primo contenuto
                </StepperHeaderElement>
                <StepperHeaderElement variant="active" prependIcon="it-lock">
                    Secondo contenuto
                </StepperHeaderElement>
                <StepperHeaderElement prependIcon="it-settings">Terzo contenuto</StepperHeaderElement>
                <StepperHeaderElement variant="mobile" tag={"span"}>
                    2/6
                </StepperHeaderElement>
            </StepperHeader>
        </StepperContainer>;
}`,...(_=(C=c.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var O,P,x;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return <StepperContainer>
            <StepperHeader>
                <StepperHeaderElement variant="confirmed" stepperNumber={<Icon icon="it-check" />}>
                    Primo contenuto
                </StepperHeaderElement>
                <StepperHeaderElement variant="active" noLine stepperNumber={<span>2</span>}>
                    Secondo contenuto
                </StepperHeaderElement>
                <StepperHeaderElement stepperNumber={<span>3</span>}>Terzo contenuto</StepperHeaderElement>
            </StepperHeader>
        </StepperContainer>;
}`,...(x=(P=i.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};var B,q,A;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  return <StepperContainer>
            <StepperHeader>
                <StepperHeaderElement variant="confirmed" prependIcon="it-check">
                    Primo contenuto
                </StepperHeaderElement>
                <StepperHeaderElement variant="active">Secondo contenuto</StepperHeaderElement>
                <StepperHeaderElement>Terzo contenuto</StepperHeaderElement>
                <StepperHeaderElement variant="mobile" tag={"span"}>
                    2/6
                </StepperHeaderElement>
            </StepperHeader>
            <StepperContent>
                <p>Contenuto di esempio dello step corrente</p>
            </StepperContent>
            <StepperNav>
                <Button outline color="primary" size="sm" className="steppers-btn-prev">
                    <Icon icon="it-chevron-left" color="primary" />
                    Indietro
                </Button>
                <Button outline color="primary" size="sm" className="steppers-btn-next">
                    Avanti
                    <Icon icon="it-chevron-right" color="primary" />
                </Button>
                <Button color="primary" size="sm" className="steppers-btn-confirm d-none d-lg-block">
                    Conferma
                </Button>
            </StepperNav>
        </StepperContainer>;
}`,...(A=(q=s.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var V,L,U;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <StepperContainer dark>
            <StepperHeader>
                <StepperHeaderElement variant="confirmed" prependIcon="it-check">
                    Primo contenuto
                </StepperHeaderElement>
                <StepperHeaderElement variant="active">Secondo contenuto</StepperHeaderElement>
                <StepperHeaderElement>Terzo contenuto</StepperHeaderElement>
                <StepperHeaderElement variant="mobile" tag={"span"}>
                    2/6
                </StepperHeaderElement>
            </StepperHeader>
            <StepperContent dark>
                <p>Contenuto di esempio dello step corrente</p>
            </StepperContent>
            <StepperNav>
                <Button outline color="primary" size="sm" className="steppers-btn-prev">
                    <Icon icon="it-chevron-left" color="primary" />
                    Indietro
                </Button>
                <Button outline color="primary" size="sm" className="steppers-btn-next">
                    Avanti
                    <Icon icon="it-chevron-right" color="primary" />
                </Button>
                <Button color="primary" size="sm" className="stepper-btn-confirm d-none d-lg-block">
                    Conferma
                </Button>
            </StepperNav>
        </StepperContainer>;
}`,...(U=(L=l.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var D,M,w;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <StepperContainer dark>
            <StepperHeader>
                <StepperHeaderElement variant="confirmed" prependIcon="it-check">
                    Primo contenuto
                </StepperHeaderElement>
                <StepperHeaderElement variant="active">Secondo contenuto</StepperHeaderElement>
                <StepperHeaderElement>Terzo contnuto</StepperHeaderElement>
                <StepperHeaderElement variant="mobile" tag={"span"}>
                    2/6
                </StepperHeaderElement>
            </StepperHeader>
            <StepperHeader>
                <StepperHeaderElement variant="confirmed" appendIcon="it-check" prependIcon="it-calendar">
                    Primo contenuto
                </StepperHeaderElement>
                <StepperHeaderElement variant="active" prependIcon="it-lock">
                    Secondo contenuto
                </StepperHeaderElement>
                <StepperHeaderElement prependIcon="it-settings">Terzo contenuto</StepperHeaderElement>
                <StepperHeaderElement variant="mobile" tag={"span"}>
                    2/6
                </StepperHeaderElement>
            </StepperHeader>
            <StepperHeader>
                <StepperHeaderElement variant="confirmed" stepperNumber={<Icon icon="it-check" />}>
                    Primo contenuto
                </StepperHeaderElement>
                <StepperHeaderElement variant="active" noLine stepperNumber={<span>2</span>}>
                    Secondo contenuto
                </StepperHeaderElement>
                <StepperHeaderElement stepperNumber={<span>3</span>}>Terzo contenuto</StepperHeaderElement>
            </StepperHeader>
        </StepperContainer>;
}`,...(w=(M=m.parameters)==null?void 0:M.docs)==null?void 0:w.source}}};const $=["TextOnly","TextAndIcons","OrderOfTheSteps","NavigationOfTheSteps","VersionOnADarkBackground","HeaderVariants"],oe=Object.freeze(Object.defineProperty({__proto__:null,HeaderVariants:m,NavigationOfTheSteps:s,OrderOfTheSteps:i,TextAndIcons:c,TextOnly:p,VersionOnADarkBackground:l,__namedExportsOrder:$,default:Z},Symbol.toStringTag,{value:"Module"}));export{m as H,s as N,i as O,oe as S,p as T,l as V,c as a};
