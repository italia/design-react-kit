import{R as e}from"./index-BFWcBMrj.js";import{S as l,a as i,b as p}from"./StepperNav-DlUBRm_X.js";import{B as t}from"./Button-BvsBu0Bj.js";import{I as n}from"./Icon-Dn2FEDq_.js";import{P as B}from"./Progress-m0JQ9nnc.js";import{S as b}from"./StepperDots-zrtNGsuE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";import"./Button-Cn4Lrs6w.js";import"./index-D3ylJrlI.js";import"./utils-CUovxYU2.js";import"./iframe-d7HZv50p.js";import"../sb-preview/runtime.js";import"./index-GAri5u7x.js";import"./utils-Dujee42i.js";const F={title:"Documentazione/Componenti/Stepper/Mobile",component:l},r=()=>e.createElement(l,{mobile:!0},e.createElement(i,null,e.createElement("p",null,"Contenuto di esempio dello step corrente")),e.createElement(p,null,e.createElement(t,{outline:!0,color:"primary",size:"sm",className:"steppers-btn-prev"},e.createElement(n,{icon:"it-chevron-left",color:"primary"}),"Indietro"),e.createElement("div",{className:"steppers-progress"},e.createElement(B,{indeterminate:!1,value:"33",tag:"div",style:{width:"33%"}})),e.createElement(t,{outline:!0,color:"primary",size:"sm",className:"steppers-btn-next"},"Avanti",e.createElement(n,{icon:"it-chevron-right",color:"primary"})))),o=()=>e.createElement(l,{mobile:!0},e.createElement(i,null,e.createElement("p",null,"Contenuto di esempio dello step corrente")),e.createElement(p,null,e.createElement(t,{outline:!0,color:"primary",size:"sm",className:"steppers-btn-prev"},e.createElement(n,{icon:"it-chevron-left",color:"primary"}),"Indietro"),e.createElement(b,null,e.createElement("li",{className:"done"},e.createElement("span",{className:"visually-hidden"},"Step 1 di 6 - Confermato")),e.createElement("li",{className:"done"},e.createElement("span",{className:"visually-hidden"},"Step 2 di 6 - Confermato")),e.createElement("li",{className:"done"},e.createElement("span",{className:"visually-hidden"},"Step 3 di 6 - Confermato")),e.createElement("li",null,e.createElement("span",{className:"visually-hidden"},"Step 4 di 6")),e.createElement("li",null,e.createElement("span",{className:"visually-hidden"},"Step 5 di 6")),e.createElement("li",null,e.createElement("span",{className:"visually-hidden"},"Step 6 di 6"))),e.createElement(t,{outline:!0,color:"primary",size:"sm",className:"steppers-btn-next"},"Avanti",e.createElement(n,{icon:"it-chevron-right",color:"primary"})))),a=()=>e.createElement(l,{mobile:!0},e.createElement(i,null,e.createElement("p",null,"Contenuto di esempio dello step corrente")),e.createElement(p,null,e.createElement(t,{outline:!0,color:"primary",size:"sm",className:"steppers-btn-prev"},e.createElement(n,{icon:"it-chevron-left"}),"Indietro"),e.createElement(t,{color:"primary",size:"sm",className:"steppers-btn-save"},"Salva"),e.createElement(t,{outline:!0,color:"primary",size:"sm",className:"stepper-btn-next"},"Avanti",e.createElement(n,{icon:"it-chevron-right"})))),s=()=>e.createElement(l,{mobile:!0},e.createElement(i,null,e.createElement("p",null,"Contenuto di esempio dello step corrente")),e.createElement(p,null,e.createElement(t,{outline:!0,color:"primary",size:"sm",className:"steppers-btn-prev"},e.createElement(n,{icon:"it-chevron-left"}),"Indietro"),e.createElement(t,{color:"primary",size:"sm",className:"steppers-btn-confirm"},"Conferma")));r.__docgenInfo={description:"",methods:[],displayName:"ProgressBar"};o.__docgenInfo={description:"",methods:[],displayName:"Pallini"};a.__docgenInfo={description:"",methods:[],displayName:"SaveButton"};s.__docgenInfo={description:"",methods:[],displayName:"ConfirmButton"};var m,c,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return <StepperContainer mobile>
            <StepperContent>
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
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var d,v,S;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return <StepperContainer mobile>
            <StepperContent>
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
}`,...(S=(v=o.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var N,E,y;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <StepperContainer mobile>
            <StepperContent>
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
}`,...(y=(E=a.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};var h,C,f;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  return <StepperContainer mobile>
            <StepperContent>
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
}`,...(f=(C=s.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};const G=["ProgressBar","Pallini","SaveButton","ConfirmButton"];export{s as ConfirmButton,o as Pallini,r as ProgressBar,a as SaveButton,G as __namedExportsOrder,F as default};
