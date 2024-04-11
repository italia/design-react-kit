import{R as e}from"./index-BFWcBMrj.js";import{P as l}from"./index-D3ylJrlI.js";import{c as g}from"./index-Bl6ORisp.js";import{t as v,m as h}from"./utils-CUovxYU2.js";import{I as u}from"./Icon-Dn2FEDq_.js";var x=["className","listClassName","cssModule","children","tag","listTag","aria-label"];function N(){return N=Object.assign?Object.assign.bind():function(a){for(var s=1;s<arguments.length;s++){var t=arguments[s];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(a[r]=t[r])}return a},N.apply(this,arguments)}function q(a,s){if(a==null)return{};var t=L(a,s),r,n;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(a);for(n=0;n<c.length;n++)r=c[n],!(s.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(a,r)&&(t[r]=a[r])}return t}function L(a,s){if(a==null)return{};var t={},r=Object.keys(a),n,c;for(c=0;c<r.length;c++)n=r[c],!(s.indexOf(n)>=0)&&(t[n]=a[n]);return t}var W={"aria-label":l.string,children:l.node,className:l.string,cssModule:l.object,listClassName:l.string,listTag:v,tag:v};function P(a){var s=a.className,t=a.listClassName,r=a.cssModule,n=a.children,c=a.tag,d=c===void 0?"nav":c,m=a.listTag,E=m===void 0?"ol":m,I=a["aria-label"],M=I===void 0?"breadcrumb":I,w=q(a,x),H=h(g(s),r),$=h(g("breadcrumb",t),r);return e.createElement(d,N({},w,{className:H,"aria-label":M}),e.createElement(E,{className:$},n))}P.propTypes=W;var R=["className","cssModule","active","tag"];function B(){return B=Object.assign?Object.assign.bind():function(a){for(var s=1;s<arguments.length;s++){var t=arguments[s];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(a[r]=t[r])}return a},B.apply(this,arguments)}function U(a,s){if(a==null)return{};var t=A(a,s),r,n;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(a);for(n=0;n<c.length;n++)r=c[n],!(s.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(a,r)&&(t[r]=a[r])}return t}function A(a,s){if(a==null)return{};var t={},r=Object.keys(a),n,c;for(c=0;c<r.length;c++)n=r[c],!(s.indexOf(n)>=0)&&(t[n]=a[n]);return t}var D={active:l.bool,className:l.string,cssModule:l.object,tag:v};function i(a){var s=a.className,t=a.cssModule,r=a.active,n=a.tag,c=n===void 0?"li":n,d=U(a,R),m=h(g(s,r?"active":!1,"breadcrumb-item"),t);return e.createElement(c,B({},d,{className:m,"aria-current":r?"page":void 0}))}i.propTypes=D;const o=({className:a,listClassName:s,dark:t,"aria-label":r,testId:n,...c})=>{const d=g(a,"breadcrumb-container"),m=g(s,{dark:t},t&&"px-3"),E=r??"Percorso di navigazione";return e.createElement(P,{className:d,listClassName:m,"aria-label":E,"data-testid":n,...c})};o.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{tag:{required:!1,tsType:{name:"ElementType"},description:"Utilizzarlo in caso di utilizzo di componenti personalizzati"},listTag:{required:!1,tsType:{name:"ElementType"},description:"Utilizzarlo in caso di utilizzo di componenti personalizzati per la l'elemento lista interno"},className:{required:!1,tsType:{name:"string"},description:"Classi aggiuntive da usare per il componente Nav"},listClassName:{required:!1,tsType:{name:"string"},description:"Classi aggiuntive da usare per il componente di lista interno"},cssModule:{required:!1,tsType:{name:"CSSModule"},description:"Oggetto contenente la nuova mappatura per le classi CSS."},dark:{required:!1,tsType:{name:"boolean"},description:"Indica se si vuole la versione con fondo scuro"},"aria-label":{required:!1,tsType:{name:"string"},description:"Etichetta significativa per descrivere il tipo di navigazione"},testId:{required:!1,tsType:{name:"string"},description:""}},composes:["HTMLAttributes"]};const F={title:"Documentazione/Menu di navigazione/Breadcrumbs",component:o},p={render:()=>e.createElement("section",null,e.createElement(o,null,e.createElement(i,null,e.createElement("a",{href:"#"},"Home"),e.createElement("span",{className:"separator"},"/")),e.createElement(i,null,e.createElement("a",{href:"#"},"Subsection"),e.createElement("span",{className:"separator"},"/")),e.createElement(i,{active:!0},"Current section")),e.createElement(o,null,e.createElement(i,null,e.createElement("a",{href:"#"},"Home"),e.createElement("span",{className:"separator"},">")),e.createElement(i,null,e.createElement("a",{href:"#"},"Subsection"),e.createElement("span",{className:"separator"},">")),e.createElement(i,{active:!0},"Current section")))},b={render:()=>e.createElement("section",null,e.createElement(o,null,e.createElement(i,null,e.createElement(u,{className:"align-top me-1",icon:"it-link",color:"secondary","aria-hidden":!0,size:"sm"}),e.createElement("a",{href:"#"},"Home"),e.createElement("span",{className:"separator"},"/")),e.createElement(i,null,e.createElement(u,{className:"align-top me-1",icon:"it-link",color:"secondary","aria-hidden":!0,size:"sm"}),e.createElement("a",{href:"#"},"Subsection"),e.createElement("span",{className:"separator"},"/")),e.createElement(i,{active:!0},e.createElement(u,{className:"align-top me-1",icon:"it-link",color:"secondary","aria-hidden":!0,size:"sm"}),"Current section")))},f={render:()=>e.createElement("section",null,e.createElement(o,{dark:!0},e.createElement(i,null,e.createElement("a",{href:"#"},"Home"),e.createElement("span",{className:"separator"},"/")),e.createElement(i,null,e.createElement("a",{href:"#"},"Subsection"),e.createElement("span",{className:"separator"},"/")),e.createElement(i,{active:!0},"Current section")),e.createElement(o,{dark:!0},e.createElement(i,null,e.createElement(u,{className:"align-top me-1",icon:"it-link",color:"white","aria-hidden":!0,size:"sm"}),e.createElement("a",{href:"#"},"Home"),e.createElement("span",{className:"separator"},"/")),e.createElement(i,null,e.createElement(u,{className:"align-top me-1",icon:"it-link",color:"white","aria-hidden":!0,size:"sm"}),e.createElement("a",{href:"#"},"Subsection"),e.createElement("span",{className:"separator"},"/")),e.createElement(i,{active:!0},e.createElement(u,{className:"align-top me-1",icon:"it-link",color:"white","aria-hidden":!0,size:"sm"}),"Current section")))};var y,z,S;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <section>
            <Breadcrumb>
                <BreadcrumbItem>
                    <a href="#">Home</a>
                    <span className="separator">/</span>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <a href="#">Subsection</a>
                    <span className="separator">/</span>
                </BreadcrumbItem>
                <BreadcrumbItem active>Current section</BreadcrumbItem>
            </Breadcrumb>

            <Breadcrumb>
                <BreadcrumbItem>
                    <a href="#">Home</a>
                    <span className="separator">&gt;</span>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <a href="#">Subsection</a>
                    <span className="separator">&gt;</span>
                </BreadcrumbItem>
                <BreadcrumbItem active>Current section</BreadcrumbItem>
            </Breadcrumb>
        </section>
}`,...(S=(z=p.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var O,T,C;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <section>
            <Breadcrumb>
                <BreadcrumbItem>
                    <Icon className="align-top me-1" icon="it-link" color="secondary" aria-hidden size="sm" />
                    <a href="#">Home</a>
                    <span className="separator">/</span>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <Icon className="align-top me-1" icon="it-link" color="secondary" aria-hidden size="sm" />
                    <a href="#">Subsection</a>
                    <span className="separator">/</span>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    <Icon className="align-top me-1" icon="it-link" color="secondary" aria-hidden size="sm" />
                    Current section
                </BreadcrumbItem>
            </Breadcrumb>
        </section>
}`,...(C=(T=b.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var j,_,k;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <section>
            <Breadcrumb dark>
                <BreadcrumbItem>
                    <a href="#">Home</a>
                    <span className="separator">/</span>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <a href="#">Subsection</a>
                    <span className="separator">/</span>
                </BreadcrumbItem>
                <BreadcrumbItem active>Current section</BreadcrumbItem>
            </Breadcrumb>

            <Breadcrumb dark>
                <BreadcrumbItem>
                    <Icon className="align-top me-1" icon="it-link" color="white" aria-hidden size="sm" />
                    <a href="#">Home</a>
                    <span className="separator">/</span>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <Icon className="align-top me-1" icon="it-link" color="white" aria-hidden size="sm" />
                    <a href="#">Subsection</a>
                    <span className="separator">/</span>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    <Icon className="align-top me-1" icon="it-link" color="white" aria-hidden size="sm" />
                    Current section
                </BreadcrumbItem>
            </Breadcrumb>
        </section>
}`,...(k=(_=f.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};const G=["Esempi","ConIcone","SuSfondoScuro"],Y=Object.freeze(Object.defineProperty({__proto__:null,ConIcone:b,Esempi:p,SuSfondoScuro:f,__namedExportsOrder:G,default:F},Symbol.toStringTag,{value:"Module"}));export{Y as B,b as C,p as E,f as S};
