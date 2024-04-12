import{R as e}from"./index-BFWcBMrj.js";import{c as p}from"./index-Bl6ORisp.js";import"./_commonjsHelpers-BosuxZz1.js";const a=({className:f,tag:S="span",active:b=!1,small:z=!1,double:s=!1,label:r="Caricamento",testId:o,...c})=>{const l=S,i=p("progress-spinner",{"progress-spinner-active":b,"size-sm":z,"progress-spinner-double":s}),m=p(f,"visually-hidden");return s?e.createElement(l,{className:i,"data-testid":o},e.createElement("div",{className:"progress-spinner-inner"}),e.createElement("div",{className:"progress-spinner-inner"}),e.createElement(l,{...c,className:m},r)):e.createElement(l,{className:i,"data-testid":o},e.createElement(l,{...c,className:m},r))};a.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{tag:{required:!1,tsType:{name:"ElementType"},description:"Utilizzarlo in caso di utilizzo di componenti personalizzati",defaultValue:{value:"'span'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Classi aggiuntive da usare per il componente Spinner"},active:{required:!1,tsType:{name:"boolean"},description:"Utilizzato per indicare lo stato attivo di caricamento (animato)",defaultValue:{value:"false",computed:!1}},small:{required:!1,tsType:{name:"boolean"},description:"Utilizzato per ottenere la versione ridotta del componente Spinner",defaultValue:{value:"false",computed:!1}},double:{required:!1,tsType:{name:"boolean"},description:"Utilizzato per ottenere una animazione alternativa in fase di caricamento",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Etichetta con testo da mostrare ai dispositivi screen reader",defaultValue:{value:"'Caricamento'",computed:!1}},testId:{required:!1,tsType:{name:"string"},description:""}},composes:["HTMLAttributes"]};const _={title:"Documentazione/Componenti/Spinner",component:a,parameters:{docs:{canvas:{sourceState:"none"}}}},t=()=>e.createElement("div",{className:"container"},e.createElement("div",{className:"row"},e.createElement("div",{className:"col-6 col-lg-3"},e.createElement("p",{className:"mb-3"},e.createElement("strong",null,"Spinner standard")),e.createElement(a,null)),e.createElement("div",{className:"col-6 col-lg-3"},e.createElement("p",{className:"mb-3"},e.createElement("strong",null,"Spinner Attivo")),e.createElement(a,{active:!0})),e.createElement("div",{className:"col-6 col-lg-3 mt-3 mt-lg-0"},e.createElement("p",{className:"mb-3"},e.createElement("strong",null,"Small")),e.createElement(a,{small:!0})),e.createElement("div",{className:"col-6 col-lg-3 mt-3 mt-lg-0"},e.createElement("p",{className:"mb-3"},e.createElement("strong",null,"Small attivo")),e.createElement(a,{small:!0,active:!0})))),n=()=>e.createElement("div",{className:"container"},e.createElement("div",{className:"row"},e.createElement("div",{className:"col-6 col-lg-3"},e.createElement("p",{className:"mb-3"},e.createElement("strong",null,"Spinner doppio")),e.createElement(a,{double:!0})),e.createElement("div",{className:"col-6 col-lg-3"},e.createElement("p",{className:"mb-3"},e.createElement("strong",null,"Doppio attivo")),e.createElement(a,{double:!0,active:!0})),e.createElement("div",{className:"col-6 col-lg-3 mt-3 mt-lg-0"},e.createElement("p",{className:"mb-3"},e.createElement("strong",null,"Doppio small")),e.createElement(a,{double:!0,small:!0})),e.createElement("div",{className:"col-6 col-lg-3 mt-3 mt-lg-0"},e.createElement("p",{className:"mb-3"},e.createElement("strong",null,"Doppio small attivo")),e.createElement(a,{double:!0,small:!0,active:!0}))));t.__docgenInfo={description:"",methods:[],displayName:"Esempio"};n.__docgenInfo={description:"",methods:[],displayName:"SpinnerDoppio"};var d,u,v;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`() => <div className="container">
        <div className="row">
            <div className="col-6 col-lg-3">
                <p className="mb-3">
                    <strong>Spinner standard</strong>
                </p>
                <Spinner />
            </div>
            <div className="col-6 col-lg-3">
                <p className="mb-3">
                    <strong>Spinner Attivo</strong>
                </p>
                <Spinner active />
            </div>
            <div className="col-6 col-lg-3 mt-3 mt-lg-0">
                <p className="mb-3">
                    <strong>Small</strong>
                </p>
                <Spinner small />
            </div>
            <div className="col-6 col-lg-3 mt-3 mt-lg-0">
                <p className="mb-3">
                    <strong>Small attivo</strong>
                </p>
                <Spinner small active />
            </div>
        </div>
    </div>`,...(v=(u=t.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var g,N,E;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`() => <div className="container">
        <div className="row">
            <div className="col-6 col-lg-3">
                <p className="mb-3">
                    <strong>Spinner doppio</strong>
                </p>
                <Spinner double />
            </div>
            <div className="col-6 col-lg-3">
                <p className="mb-3">
                    <strong>Doppio attivo</strong>
                </p>
                <Spinner double active />
            </div>
            <div className="col-6 col-lg-3 mt-3 mt-lg-0">
                <p className="mb-3">
                    <strong>Doppio small</strong>
                </p>
                <Spinner double small />
            </div>
            <div className="col-6 col-lg-3 mt-3 mt-lg-0">
                <p className="mb-3">
                    <strong>Doppio small attivo</strong>
                </p>
                <Spinner double small active />
            </div>
        </div>
    </div>`,...(E=(N=n.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};const q=["Esempio","SpinnerDoppio"];export{t as Esempio,n as SpinnerDoppio,q as __namedExportsOrder,_ as default};
