import{R as e}from"./index-BFWcBMrj.js";import{S as i,a as l,b as p}from"./StepperNav-DlUBRm_X.js";import{B as t}from"./Button-BvsBu0Bj.js";import{I as n}from"./Icon-Dn2FEDq_.js";import{P as k}from"./Progress-m0JQ9nnc.js";import{S as B}from"./StepperDots-zrtNGsuE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";import"./Button-Cn4Lrs6w.js";import"./index-D3ylJrlI.js";import"./utils-CUovxYU2.js";import"./iframe-d7HZv50p.js";import"../sb-preview/runtime.js";import"./index-GAri5u7x.js";import"./utils-Dujee42i.js";const F={title:"Documentazione/Componenti/Stepper/Mobile - dark version",component:i},r=()=>e.createElement(i,{mobile:!0,dark:!0},e.createElement(l,{dark:!0},e.createElement("p",null,"Contenuto di esempio dello step corrente")),e.createElement(p,null,e.createElement(t,{outline:!0,color:"primary",size:"sm",className:"steppers-btn-prev"},e.createElement(n,{icon:"it-chevron-left",color:"primary"}),"Indietro"),e.createElement("div",{className:"steppers-progress"},e.createElement(k,{indeterminate:!1,value:"33",tag:"div",style:{width:"33%"}})),e.createElement(t,{outline:!0,color:"primary",size:"sm",className:"steppers-btn-next"},"Avanti",e.createElement(n,{icon:"it-chevron-right",color:"primary"})))),a=()=>e.createElement(i,{mobile:!0,dark:!0},e.createElement(l,{dark:!0},e.createElement("p",null,"Contenuto di esempio dello step corrente")),e.createElement(p,null,e.createElement(t,{outline:!0,color:"primary",size:"sm",className:"steppers-btn-prev"},e.createElement(n,{icon:"it-chevron-left",color:"primary"}),"Indietro"),e.createElement(B,null,e.createElement("li",{className:"done"},e.createElement("span",{className:"visually-hidden"},"Step 1 di 6 - Confermato")),e.createElement("li",{className:"done"},e.createElement("span",{className:"visually-hidden"},"Step 2 di 6 - Confermato")),e.createElement("li",{className:"done"},e.createElement("span",{className:"visually-hidden"},"Step 3 di 6 - Confermato")),e.createElement("li",null,e.createElement("span",{className:"visually-hidden"},"Step 4 di 6")),e.createElement("li",null,e.createElement("span",{className:"visually-hidden"},"Step 5 di 6")),e.createElement("li",null,e.createElement("span",{className:"visually-hidden"},"Step 6 di 6"))),e.createElement(t,{outline:!0,color:"primary",size:"sm",className:"steppers-btn-next"},"Avanti",e.createElement(n,{icon:"it-chevron-right",color:"primary"})))),o=()=>e.createElement(i,{mobile:!0,dark:!0},e.createElement(l,{dark:!0},e.createElement("p",null,"Contenuto di esempio dello step corrente")),e.createElement(p,null,e.createElement(t,{outline:!0,color:"primary",size:"sm",className:"steppers-btn-prev"},e.createElement(n,{icon:"it-chevron-left"}),"Indietro"),e.createElement(t,{color:"primary",size:"sm",className:"steppers-btn-save"},"Salva"),e.createElement(t,{outline:!0,color:"primary",size:"sm",className:"stepper-btn-next"},"Avanti",e.createElement(n,{icon:"it-chevron-right"})))),s=()=>e.createElement(i,{mobile:!0,dark:!0},e.createElement(l,{dark:!0},e.createElement("p",null,"Contenuto di esempio dello step corrente")),e.createElement(p,null,e.createElement(t,{outline:!0,color:"primary",size:"sm",className:"steppers-btn-prev"},e.createElement(n,{icon:"it-chevron-left"}),"Indietro"),e.createElement(t,{color:"primary",size:"sm",className:"steppers-btn-confirm"},"Conferma")));r.__docgenInfo={description:"",methods:[],displayName:"ProgressBarDark"};a.__docgenInfo={description:"",methods:[],displayName:"PalliniDark"};o.__docgenInfo={description:"",methods:[],displayName:"SaveButtonDark"};s.__docgenInfo={description:"",methods:[],displayName:"ConfirmButtonDark"};var m,c,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return <StepperContainer mobile dark>
            <StepperContent dark>
                <p>Contenuto di esempio dello step corrente</p>
            </StepperContent>
            <StepperNav>
                <Button outline color="primary" size="sm" className="steppers-btn-prev">
                    <Icon icon="it-chevron-left" color="primary" />
                    Indietro
                </Button>
                <div className="steppers-progress">
                    <Progress indeterminate={false} value="33" tag="div" style={{
          width: "33%"
        }} />
                </div>
                <Button outline color="primary" size="sm" className="steppers-btn-next">
                    Avanti
                    <Icon icon="it-chevron-right" color="primary" />
                </Button>
            </StepperNav>
        </StepperContainer>;
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,v,S;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <StepperContainer mobile dark>
            <StepperContent dark>
                <p>Contenuto di esempio dello step corrente</p>
            </StepperContent>
            <StepperNav>
                <Button outline color="primary" size="sm" className="steppers-btn-prev">
                    <Icon icon="it-chevron-left" color="primary" />
                    Indietro
                </Button>
                <StepperDots>
                    <li className="done">
                        <span className="visually-hidden">Step 1 di 6 - Confermato</span>
                    </li>
                    <li className="done">
                        <span className="visually-hidden">Step 2 di 6 - Confermato</span>
                    </li>
                    <li className="done">
                        <span className="visually-hidden">Step 3 di 6 - Confermato</span>
                    </li>
                    <li>
                        <span className="visually-hidden">Step 4 di 6</span>
                    </li>
                    <li>
                        <span className="visually-hidden">Step 5 di 6</span>
                    </li>
                    <li>
                        <span className="visually-hidden">Step 6 di 6</span>
                    </li>
                </StepperDots>
                <Button outline color="primary" size="sm" className="steppers-btn-next">
                    Avanti
                    <Icon icon="it-chevron-right" color="primary" />
                </Button>
            </StepperNav>
        </StepperContainer>;
}`,...(S=(v=a.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var N,E,y;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <StepperContainer mobile dark>
            <StepperContent dark>
                <p>Contenuto di esempio dello step corrente</p>
            </StepperContent>
            <StepperNav>
                <Button outline color="primary" size="sm" className="steppers-btn-prev">
                    <Icon icon="it-chevron-left" />
                    Indietro
                </Button>
                <Button color="primary" size="sm" className="steppers-btn-save">
                    Salva
                </Button>
                <Button outline color="primary" size="sm" className="stepper-btn-next">
                    Avanti
                    <Icon icon="it-chevron-right" />
                </Button>
            </StepperNav>
        </StepperContainer>;
}`,...(y=(E=o.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};var h,C,f;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  return <StepperContainer mobile dark>
            <StepperContent dark>
                <p>Contenuto di esempio dello step corrente</p>
            </StepperContent>
            <StepperNav>
                <Button outline color="primary" size="sm" className="steppers-btn-prev">
                    <Icon icon="it-chevron-left" />
                    Indietro
                </Button>
                <Button color="primary" size="sm" className="steppers-btn-confirm">
                    Conferma
                </Button>
            </StepperNav>
        </StepperContainer>;
}`,...(f=(C=s.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};const G=["ProgressBarDark","PalliniDark","SaveButtonDark","ConfirmButtonDark"];export{s as ConfirmButtonDark,a as PalliniDark,r as ProgressBarDark,o as SaveButtonDark,G as __namedExportsOrder,F as default};
