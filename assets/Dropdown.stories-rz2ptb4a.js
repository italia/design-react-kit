import{R as e}from"./index-BFWcBMrj.js";import{D as c,a as u}from"./DropdownToggle-BdTyHQJO.js";import{P as l}from"./index-D3ylJrlI.js";import{c as T}from"./index-Bl6ORisp.js";import{t as M,m as N}from"./utils-CUovxYU2.js";import{D as L}from"./DropdownMenu-B_Gh5UIE.js";import{L as w,a as i}from"./LinkListItem-CJpjZu_u.js";var S=["className","cssModule","size","vertical","tag"];function g(){return g=Object.assign?Object.assign.bind():function(n){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},g.apply(this,arguments)}function D(n,o){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);o&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function h(n){for(var o=1;o<arguments.length;o++){var t=arguments[o]!=null?arguments[o]:{};o%2?D(Object(t),!0).forEach(function(r){x(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):D(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function x(n,o,t){return o in n?Object.defineProperty(n,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[o]=t,n}function C(n,o){if(n==null)return{};var t=B(n,o),r,a;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(a=0;a<s.length;a++)r=s[a],!(o.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function B(n,o){if(n==null)return{};var t={},r=Object.keys(n),a,s;for(s=0;s<r.length;s++)a=r[s],!(o.indexOf(a)>=0)&&(t[a]=n[a]);return t}var G={"aria-label":l.string,className:l.string,cssModule:l.object,role:l.string,size:l.string,tag:M,vertical:l.bool};function I(n){var o=n.className,t=n.cssModule,r=n.size,a=n.vertical,s=n.tag,j=s===void 0?"div":s,_=C(n,S),P=N(T(o,r?"btn-group-"+r:!1,a?"btn-group-vertical":"btn-group"),t);return e.createElement(j,g({},h({role:"group"},_),{className:P}))}I.propTypes=G;const R={title:"Documentazione/Componenti/Dropdown",component:c,parameters:{docs:{story:{height:"225px"}}}},m={render:()=>e.createElement(I,{className:"d-flex justify-content-around"},e.createElement(c,null,e.createElement(u,{color:"primary",caret:!0},"Apri dropdown"),e.createElement(L,null,e.createElement(w,null,e.createElement(i,{inDropdown:!0},"Azione 1"),e.createElement(i,{inDropdown:!0},"Azione 2"),e.createElement(i,{inDropdown:!0},"Azione 3")))),e.createElement(c,null,e.createElement(u,{color:"secondary",caret:!0},"Apri dropdown"),e.createElement(L,null,e.createElement(w,null,e.createElement(i,{inDropdown:!0},"Azione 1"),e.createElement(i,{inDropdown:!0},"Azione 2"),e.createElement(i,{inDropdown:!0},"Azione 3")))),e.createElement(c,null,e.createElement(u,{color:"danger",caret:!0},"Apri dropdown"),e.createElement(L,null,e.createElement(w,null,e.createElement(i,null,"Azione 1"),e.createElement(i,null,"Azione 2"),e.createElement(i,null,"Azione 3"))))),decorators:[n=>e.createElement("div",{className:"m-2"},e.createElement(n,null))]},p={render:()=>e.createElement("section",null,e.createElement(c,{className:"me-3"},e.createElement(u,{color:"primary",caret:!0},"Apri dropdown"),e.createElement(L,null,e.createElement(w,null,e.createElement(i,{inDropdown:!0},"Azione 1"),e.createElement(i,{inDropdown:!0},"Azione 2"),e.createElement(i,{inDropdown:!0},"Azione 3"))))),parameters:{layout:"centered"},decorators:[n=>e.createElement("div",{className:"m-2"},e.createElement(n,null))]},d={render:()=>e.createElement("section",null,e.createElement(c,{className:"me-3"},e.createElement(u,{color:"primary",tag:"a",caret:!0},"Apri dropdown"),e.createElement(L,null,e.createElement(w,null,e.createElement(i,{inDropdown:!0},"Azione 1"),e.createElement(i,{inDropdown:!0},"Azione 2"),e.createElement(i,{inDropdown:!0},"Azione 3")))))};var E,f,k;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    return <ButtonGroup className="d-flex justify-content-around">
                <Dropdown>
                    <DropdownToggle color="primary" caret>
                        Apri dropdown
                    </DropdownToggle>
                    <DropdownMenu>
                        <LinkList>
                            <LinkListItem inDropdown>Azione 1</LinkListItem>
                            <LinkListItem inDropdown>Azione 2</LinkListItem>
                            <LinkListItem inDropdown>Azione 3</LinkListItem>
                        </LinkList>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown>
                    <DropdownToggle color="secondary" caret>
                        Apri dropdown
                    </DropdownToggle>
                    <DropdownMenu>
                        <LinkList>
                            <LinkListItem inDropdown>Azione 1</LinkListItem>
                            <LinkListItem inDropdown>Azione 2</LinkListItem>
                            <LinkListItem inDropdown>Azione 3</LinkListItem>
                        </LinkList>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown>
                    <DropdownToggle color="danger" caret>
                        Apri dropdown
                    </DropdownToggle>
                    <DropdownMenu>
                        <LinkList>
                            <LinkListItem>Azione 1</LinkListItem>
                            <LinkListItem>Azione 2</LinkListItem>
                            <LinkListItem>Azione 3</LinkListItem>
                        </LinkList>
                    </DropdownMenu>
                </Dropdown>
            </ButtonGroup>;
  },
  //Aggiungo del margine alla storia così da visualizzare il bordo onClick correttamente
  decorators: [Story => <div className="m-2">
                <Story />
            </div>]
}`,...(k=(f=m.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var A,y,z;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    return <section>
                <Dropdown className="me-3">
                    <DropdownToggle color="primary" caret>
                        Apri dropdown
                    </DropdownToggle>
                    <DropdownMenu>
                        <LinkList>
                            <LinkListItem inDropdown>Azione 1</LinkListItem>
                            <LinkListItem inDropdown>Azione 2</LinkListItem>
                            <LinkListItem inDropdown>Azione 3</LinkListItem>
                        </LinkList>
                    </DropdownMenu>
                </Dropdown>
            </section>;
  },
  parameters: {
    layout: 'centered'
  },
  //Aggiungo del margine alla storia così da visualizzare il bordo onClick correttamente
  decorators: [Story => <div className="m-2">
                <Story />
            </div>]
}`,...(z=(y=p.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var b,v,O;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    return <section>
                <Dropdown className="me-3">
                    <DropdownToggle color="primary" tag="a" caret>
                        Apri dropdown
                    </DropdownToggle>
                    <DropdownMenu>
                        <LinkList>
                            <LinkListItem inDropdown>Azione 1</LinkListItem>
                            <LinkListItem inDropdown>Azione 2</LinkListItem>
                            <LinkListItem inDropdown>Azione 3</LinkListItem>
                        </LinkList>
                    </DropdownMenu>
                </Dropdown>
            </section>;
  }
}`,...(O=(v=d.parameters)==null?void 0:v.docs)==null?void 0:O.source}}};const V=["_VarianteBottoni","_Esempi","_Link"],Q=Object.freeze(Object.defineProperty({__proto__:null,_Esempi:p,_Link:d,_VarianteBottoni:m,__namedExportsOrder:V,default:R},Symbol.toStringTag,{value:"Module"}));export{Q as D,p as _,m as a,d as b};
