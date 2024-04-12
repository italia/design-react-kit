import{R as e}from"./index-BFWcBMrj.js";import{c as S}from"./index-Bl6ORisp.js";import{P as o}from"./index-D3ylJrlI.js";import{t as ge,m as de}from"./utils-CUovxYU2.js";import{F as Pe}from"./Form-BOkbrBXv.js";import{F as ue}from"./FormGroup-B-MqxR9s.js";import{L as pe}from"./Label-fWy_qovk.js";import{I as c}from"./Icon-Dn2FEDq_.js";import{D as ke,a as he}from"./DropdownToggle-BdTyHQJO.js";import{D as Ee}from"./DropdownMenu-B_Gh5UIE.js";import{L as fe,a as E}from"./LinkListItem-CJpjZu_u.js";import{I as Le}from"./Input-CLSFLk54.js";var Ie=["active","className","cssModule","disabled","tag"];function _(){return _=Object.assign?Object.assign.bind():function(r){for(var s=1;s<arguments.length;s++){var m=arguments[s];for(var t in m)Object.prototype.hasOwnProperty.call(m,t)&&(r[t]=m[t])}return r},_.apply(this,arguments)}function be(r,s){if(r==null)return{};var m=Ne(r,s),t,i;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(r);for(i=0;i<l.length;i++)t=l[i],!(s.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(r,t)&&(m[t]=r[t])}return m}function Ne(r,s){if(r==null)return{};var m={},t=Object.keys(r),i,l;for(l=0;l<t.length;l++)i=t[l],!(s.indexOf(i)>=0)&&(m[i]=r[i]);return m}var ve={active:o.bool,children:o.node,className:o.string,cssModule:o.object,disabled:o.bool,tag:ge};function a(r){var s=r.active,m=r.className,t=r.cssModule,i=r.disabled,l=r.tag,P=l===void 0?"li":l,h=be(r,Ie),u=de(S(m,"page-item",{active:s,disabled:i}),t);return e.createElement(P,_({},h,{className:u}))}a.propTypes=ve;var ye=["className","cssModule","next","previous","first","last","tag"];function w(){return w=Object.assign?Object.assign.bind():function(r){for(var s=1;s<arguments.length;s++){var m=arguments[s];for(var t in m)Object.prototype.hasOwnProperty.call(m,t)&&(r[t]=m[t])}return r},w.apply(this,arguments)}function xe(r,s){if(r==null)return{};var m=ze(r,s),t,i;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(r);for(i=0;i<l.length;i++)t=l[i],!(s.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(r,t)&&(m[t]=r[t])}return m}function ze(r,s){if(r==null)return{};var m={},t=Object.keys(r),i,l;for(l=0;l<t.length;l++)i=t[l],!(s.indexOf(i)>=0)&&(m[i]=r[i]);return m}var Te={"aria-label":o.string,children:o.node,className:o.string,cssModule:o.object,next:o.bool,previous:o.bool,first:o.bool,last:o.bool,tag:ge};function n(r){var s=r.className,m=r.cssModule,t=r.next,i=r.previous,l=r.first,P=r.last,h=r.tag,u=h===void 0?"a":h,j=xe(r,ye),M=de(S(s,"page-link"),m),d;i?d="Previous":t?d="Next":l?d="First":P&&(d="Last");var O=r["aria-label"]||d,p;i?p="‹":t?p="›":l?p="«":P&&(p="»");var k=r.children;return k&&Array.isArray(k)&&k.length===0&&(k=null),!j.href&&u==="a"&&(u="button"),(i||t||l||P)&&(k=[e.createElement("span",{"aria-hidden":"true",key:"caret"},k||p),e.createElement("span",{className:"visually-hidden",key:"ariaLabel"},O)]),e.createElement(u,w({},j,{className:M,"aria-label":O}),k)}n.propTypes=Te;const g=({className:r,tag:s="nav",listTag:m="ul",listClassName:t,children:i,total:l,testId:P,...h})=>{const u=s,j=S(r,"pagination-wrapper",{"pagination-total":l}),M=S(t,"pagination"),{ariaLabel:d,label:O}=l||{},p=d?e.createElement("span",{className:"visually-hidden"},d):null;return e.createElement(u,{className:j,...h,"data-testid":P},e.createElement(m,{className:M},i),l?e.createElement("p",null,p,O):null)};g.__docgenInfo={description:"",methods:[],displayName:"Pager",props:{"aria-label":{required:!0,tsType:{name:"string"},description:"Etichetta di descrizione del contenuto del componente Pager"},tag:{required:!1,tsType:{name:"ElementType"},description:"Utilizzarlo in caso di utilizzo di componenti personalizzati",defaultValue:{value:"'nav'",computed:!1}},listTag:{required:!1,tsType:{name:"ElementType"},description:"Utilizzarlo in caso di utilizzo di componenti personalizzati per la l'elemento lista interno",defaultValue:{value:"'ul'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Classi aggiuntive da usare per il componente Pager"},listClassName:{required:!1,tsType:{name:"string"},description:"Classi aggiuntive da usare per il componente di lista interno Pager"},total:{required:!1,tsType:{name:"signature",type:"object",raw:"{ ariaLabel: string; label: string }",signature:{properties:[{key:"ariaLabel",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}},description:"Utilizzare questo attributo per indicare il numero totale di pagine"},testId:{required:!1,tsType:{name:"string"},description:""}},composes:["HTMLAttributes"]};const je={title:"Documentazione/Componenti/Pager",component:g},f={render:()=>e.createElement(g,{"aria-label":"Esempio di navigazione"},e.createElement("ul",{className:"pagination"},e.createElement(a,null,e.createElement(n,{previous:!0,href:"#"},e.createElement(c,{icon:"it-chevron-left","aria-hidden":!0}))),e.createElement(a,null,e.createElement(n,{href:"#"},"1")),e.createElement(a,null,e.createElement(n,{href:"#"},"2")),e.createElement(a,null,e.createElement(n,{href:"#"},"3")),e.createElement(a,null,e.createElement(n,{next:!0,href:"#"},e.createElement(c,{icon:"it-chevron-right","aria-hidden":!0})))))},L={render:()=>e.createElement(g,{"aria-label":"Esempio di navigazione"},e.createElement("ul",{className:"pagination"},e.createElement(a,{disabled:!0},e.createElement(n,{previous:!0,href:"#"},e.createElement(c,{icon:"it-chevron-left","aria-hidden":!0}))),e.createElement(a,null,e.createElement(n,{"aria-current":"page",href:"#"},"1")),e.createElement(a,null,e.createElement(n,{href:"#"},"2")),e.createElement(a,{disabled:!0},e.createElement(n,{href:"#"},"3")),e.createElement(a,{disabled:!0},e.createElement(n,{next:!0,href:"#"},e.createElement(c,{icon:"it-chevron-right","aria-hidden":!0})))))},I={render:()=>e.createElement("section",null,e.createElement(g,{className:"justify-content-center","aria-label":"Esempio di navigazione"},e.createElement("ul",{className:"pagination"},e.createElement(a,{disabled:!0},e.createElement(n,{previous:!0,href:"#"},e.createElement(c,{icon:"it-chevron-left","aria-hidden":!0}))),e.createElement(a,null,e.createElement(n,{"aria-current":"page",href:"#"},"1")),e.createElement(a,null,e.createElement(n,{href:"#"},"2")),e.createElement(a,null,e.createElement(n,{href:"#"},"3")),e.createElement(a,null,e.createElement(n,{next:!0,href:"#"},e.createElement(c,{icon:"it-chevron-right","aria-hidden":!0}))))),e.createElement(g,{className:"justify-content-end","aria-label":"Esempio di navigazione"},e.createElement("ul",{className:"pagination"},e.createElement(a,{disabled:!0},e.createElement(n,{previous:!0,href:"#"},e.createElement(c,{icon:"it-chevron-left","aria-hidden":!0}))),e.createElement(a,null,e.createElement(n,{"aria-current":"page",href:"#"},"1")),e.createElement(a,null,e.createElement(n,{href:"#"},"2")),e.createElement(a,null,e.createElement(n,{href:"#"},"3")),e.createElement(a,null,e.createElement(n,{next:!0,href:"#"},e.createElement(c,{icon:"it-chevron-right","aria-hidden":!0}))))))},b={render:()=>e.createElement(g,{"aria-label":"Esempio di navigazione"},e.createElement("ul",{className:"pagination"},e.createElement(a,null,e.createElement(n,{previous:!0,href:"#"},e.createElement(c,{icon:"it-chevron-left","aria-hidden":!0}))),e.createElement(a,{className:"d-sm-block"},e.createElement(n,{href:"#"},"9")),e.createElement(a,{className:"d-sm-block"},e.createElement(n,{href:"#"},"10")),e.createElement(a,null,e.createElement(n,{"aria-current":"page",href:"#"},e.createElement("span",{className:"d-sm-none"},"Pagina "),"11")),e.createElement(a,{className:"d-sm-block"},e.createElement(n,{href:"#"},"12")),e.createElement(a,{className:"d-sm-block"},e.createElement(n,{href:"#"},"13")),e.createElement(a,null,e.createElement(n,{next:!0,href:"#"},e.createElement(c,{icon:"it-chevron-right","aria-hidden":!0})))))},N={render:()=>e.createElement(g,{className:"mb-3","aria-label":"Esempio di paginazione"},e.createElement("ul",{className:"pagination"},e.createElement(a,null,e.createElement(n,{previous:!0,href:"#"},e.createElement(c,{icon:"it-chevron-left","aria-hidden":!0}))),e.createElement(a,{className:"d-none d-sm-block"},e.createElement(n,{href:"#"},"1")),e.createElement(a,{className:"d-none d-sm-block"},e.createElement(n,{tag:"span"},"…")),e.createElement(a,{className:"d-none d-sm-block"},e.createElement(n,{href:"#"},"24")),e.createElement(a,{className:"d-none d-sm-block"},e.createElement(n,{href:"#"},"25")),e.createElement(a,null,e.createElement(n,{"aria-current":"page",href:"#"},"26")),e.createElement(a,{className:"d-none d-sm-block"},e.createElement(n,{href:"#"},"27")),e.createElement(a,{className:"d-none d-sm-block"},e.createElement(n,{href:"#"},"28")),e.createElement(a,{className:"d-none d-sm-block"},e.createElement(n,{tag:"span"},"…")),e.createElement(a,{className:"d-none d-sm-block"},e.createElement(n,{href:"#"},"50")),e.createElement(a,null,e.createElement(n,{next:!0,href:"#"},e.createElement(c,{icon:"it-chevron-right","aria-hidden":!0})))))},v={render:()=>e.createElement(g,{className:"mb-3","aria-label":"Esempio di paginazione"},e.createElement("ul",{className:"pagination"},e.createElement(a,null,e.createElement(n,{previous:!0,href:"#"},e.createElement(c,{icon:"it-chevron-left","aria-hidden":!0}))),e.createElement(a,{className:"d-none d-sm-block"},e.createElement(n,{href:"#"},"1")),e.createElement(a,{className:"d-none d-sm-block"},e.createElement(n,{tag:"span"},"…")),e.createElement(a,{className:"d-none d-sm-block"},e.createElement(n,{href:"#"},"24")),e.createElement(a,{className:"d-none d-sm-block"},e.createElement(n,{href:"#"},"25")),e.createElement(a,null,e.createElement(n,{"aria-current":"page",href:"#"},"26")),e.createElement(a,{className:"d-none d-sm-block"},e.createElement(n,{href:"#"},"27")),e.createElement(a,{className:"d-none d-sm-block"},e.createElement(n,{href:"#"},"28")),e.createElement(a,{className:"d-none d-sm-block"},e.createElement(n,{tag:"span"},"…")),e.createElement(a,{className:"d-none d-sm-block"},e.createElement(n,{href:"#"},"50")),e.createElement(a,null,e.createElement(n,{next:!0,href:"#"},e.createElement(c,{icon:"it-chevron-right","aria-hidden":!0})))),e.createElement(ke,null,e.createElement(he,{id:"pagerChanger","aria-label":"Salta alla pagina",caret:!0},"10/pagina",e.createElement(c,{className:"icon icon-primary icon-sm",icon:"it-expand"})),e.createElement(Ee,null,e.createElement(fe,null,e.createElement(E,{active:!0},"pag. 10"),e.createElement(E,null,"pag. 20"),e.createElement(E,null,"pag. 30"),e.createElement(E,null,"pag. 40"),e.createElement(E,null,"pag. 50")))))},y={render:()=>e.createElement(g,{className:"mb-3","aria-label":"Esempio di paginazione"},e.createElement("ul",{className:"pagination"},e.createElement(a,null,e.createElement(n,{previous:!0,href:"#"},e.createElement(c,{icon:"it-chevron-left","aria-hidden":!0}))),e.createElement(a,{className:"d-none d-sm-block"},e.createElement(n,{href:"#"},"1")),e.createElement(a,{className:"d-none d-sm-block"},e.createElement(n,{tag:"span"},"…")),e.createElement(a,{className:"d-none d-sm-block"},e.createElement(n,{href:"#"},"24")),e.createElement(a,{className:"d-none d-sm-block"},e.createElement(n,{href:"#"},"25")),e.createElement(a,null,e.createElement(n,{"aria-current":"page",href:"#"},"26")),e.createElement(a,{className:"d-none d-sm-block"},e.createElement(n,{href:"#"},"27")),e.createElement(a,{className:"d-none d-sm-block"},e.createElement(n,{href:"#"},"28")),e.createElement(a,{className:"d-none d-sm-block"},e.createElement(n,{tag:"span"},"…")),e.createElement(a,{className:"d-none d-sm-block"},e.createElement(n,{href:"#"},"50")),e.createElement(a,null,e.createElement(n,{next:!0,href:"#"},e.createElement(c,{icon:"it-chevron-right","aria-hidden":!0})))),e.createElement(Pe,null,e.createElement(ue,null,e.createElement(Le,{id:"jumpToPage",type:"text",className:"form-control",maxLength:2}),e.createElement(pe,{for:"jumpToPage"},"Vai a ..."))))},x={render:()=>e.createElement(g,{className:"mb-3","aria-label":"Esempio di paginazione"},e.createElement("ul",{className:"pagination"},e.createElement(a,{disabled:!0},e.createElement(n,{previous:!0,href:"#"},e.createElement(c,{icon:"it-chevron-left","aria-hidden":!0}))),e.createElement(a,{className:"d-none d-sm-block"},e.createElement(n,{tag:"span"},"1")),e.createElement(a,{className:"d-none d-sm-block"},e.createElement(n,{tag:"span"},"/")),e.createElement(a,{className:"d-none d-sm-block"},e.createElement(n,{tag:"span"},"5")),e.createElement(a,null,e.createElement(n,{next:!0,href:"#"},e.createElement(c,{icon:"it-chevron-right","aria-hidden":!0})))))},z={render:()=>e.createElement(g,{className:"mb-3","aria-label":"Esempio di paginazione"},e.createElement("ul",{className:"pagination"},e.createElement(a,null,e.createElement(n,{previous:!0,href:"#",className:"text"},"Precedente")),e.createElement(a,{className:"d-none d-sm-block"},e.createElement(n,{href:"#"},"1")),e.createElement(a,{className:"d-none d-sm-block"},e.createElement(n,{tag:"span"},"…")),e.createElement(a,{className:"d-none d-sm-block"},e.createElement(n,{href:"#"},"24")),e.createElement(a,{className:"d-none d-sm-block"},e.createElement(n,{href:"#"},"25")),e.createElement(a,null,e.createElement(n,{"aria-current":"page",href:"#"},"26")),e.createElement(a,{className:"d-none d-sm-block"},e.createElement(n,{href:"#"},"27")),e.createElement(a,{className:"d-none d-sm-block"},e.createElement(n,{href:"#"},"28")),e.createElement(a,{className:"d-none d-sm-block"},e.createElement(n,{tag:"span"},"…")),e.createElement(a,{className:"d-none d-sm-block"},e.createElement(n,{href:"#"},"50")),e.createElement(a,null,e.createElement(n,{next:!0,href:"#",className:"text"},"Successiva"))))},T={render:()=>e.createElement(g,{total:{ariaLabel:"Pagina",label:" 24 di 50"},"aria-label":"Esempio di paginazione"},e.createElement("ul",{className:"pagination"},e.createElement(a,null,e.createElement(n,{previous:!0,href:"#"},e.createElement(c,{icon:"it-chevron-left","aria-hidden":!0}))),e.createElement(a,{className:"d-none d-sm-block"},e.createElement(n,{href:"#"},"1")),e.createElement(a,{className:"d-none d-sm-block"},e.createElement(n,{tag:"span"},"…")),e.createElement(a,{className:"d-none d-sm-block"},e.createElement(n,{"aria-current":"page",href:"#"},"24")),e.createElement(a,{className:"d-none d-sm-block"},e.createElement(n,{href:"#"},"25")),e.createElement(a,null,e.createElement(n,{href:"#"},"26")),e.createElement(a,{className:"d-none d-sm-block"},e.createElement(n,{href:"#"},"27")),e.createElement(a,{className:"d-none d-sm-block"},e.createElement(n,{href:"#"},"28")),e.createElement(a,{className:"d-none d-sm-block"},e.createElement(n,{tag:"span"},"…")),e.createElement(a,{className:"d-none d-sm-block"},e.createElement(n,{href:"#"},"50")),e.createElement(a,null,e.createElement(n,{next:!0,href:"#"},e.createElement(c,{icon:"it-chevron-right","aria-hidden":!0})))))};var D,C,A;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Pager aria-label='Esempio di navigazione'>
      <ul className='pagination'>
        <PagerItem>
          <PagerLink previous href='#'>
            <Icon icon='it-chevron-left' aria-hidden />
          </PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink href='#'>1</PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink href='#'>2</PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink href='#'>3</PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink next href='#'>
            <Icon icon='it-chevron-right' aria-hidden />
          </PagerLink>
        </PagerItem>
      </ul>
    </Pager>
}`,...(A=(C=f.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var q,F,$;L.parameters={...L.parameters,docs:{...(q=L.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Pager aria-label='Esempio di navigazione'>
      <ul className='pagination'>
        <PagerItem disabled>
          <PagerLink previous href='#'>
            <Icon icon='it-chevron-left' aria-hidden />
          </PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink aria-current='page' href='#'>
            1
          </PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink href='#'>2</PagerLink>
        </PagerItem>
        <PagerItem disabled>
          <PagerLink href='#'>3</PagerLink>
        </PagerItem>
        <PagerItem disabled>
          <PagerLink next href='#'>
            <Icon icon='it-chevron-right' aria-hidden />
          </PagerLink>
        </PagerItem>
      </ul>
    </Pager>
}`,...($=(F=L.parameters)==null?void 0:F.docs)==null?void 0:$.source}}};var R,V,W;I.parameters={...I.parameters,docs:{...(R=I.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <section>
      <Pager className='justify-content-center' aria-label='Esempio di navigazione'>
        <ul className='pagination'>
          <PagerItem disabled>
            <PagerLink previous href='#'>
              <Icon icon='it-chevron-left' aria-hidden />
            </PagerLink>
          </PagerItem>
          <PagerItem>
            <PagerLink aria-current='page' href='#'>
              1
            </PagerLink>
          </PagerItem>
          <PagerItem>
            <PagerLink href='#'>2</PagerLink>
          </PagerItem>
          <PagerItem>
            <PagerLink href='#'>3</PagerLink>
          </PagerItem>
          <PagerItem>
            <PagerLink next href='#'>
              <Icon icon='it-chevron-right' aria-hidden />
            </PagerLink>
          </PagerItem>
        </ul>
      </Pager>

      <Pager className='justify-content-end' aria-label='Esempio di navigazione'>
        <ul className='pagination'>
          <PagerItem disabled>
            <PagerLink previous href='#'>
              <Icon icon='it-chevron-left' aria-hidden />
            </PagerLink>
          </PagerItem>
          <PagerItem>
            <PagerLink aria-current='page' href='#'>
              1
            </PagerLink>
          </PagerItem>
          <PagerItem>
            <PagerLink href='#'>2</PagerLink>
          </PagerItem>
          <PagerItem>
            <PagerLink href='#'>3</PagerLink>
          </PagerItem>
          <PagerItem>
            <PagerLink next href='#'>
              <Icon icon='it-chevron-right' aria-hidden />
            </PagerLink>
          </PagerItem>
        </ul>
      </Pager>
    </section>
}`,...(W=(V=I.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var B,G,J;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Pager aria-label='Esempio di navigazione'>
      <ul className='pagination'>
        <PagerItem>
          <PagerLink previous href='#'>
            <Icon icon='it-chevron-left' aria-hidden />
          </PagerLink>
        </PagerItem>
        <PagerItem className='d-sm-block'>
          <PagerLink href='#'>9</PagerLink>
        </PagerItem>
        <PagerItem className='d-sm-block'>
          <PagerLink href='#'>10</PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink aria-current='page' href='#'>
            <span className='d-sm-none'>Pagina&nbsp;</span>11
          </PagerLink>
        </PagerItem>
        <PagerItem className='d-sm-block'>
          <PagerLink href='#'>12</PagerLink>
        </PagerItem>
        <PagerItem className='d-sm-block'>
          <PagerLink href='#'>13</PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink next href='#'>
            <Icon icon='it-chevron-right' aria-hidden />
          </PagerLink>
        </PagerItem>
      </ul>
    </Pager>
}`,...(J=(G=b.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var U,H,K;N.parameters={...N.parameters,docs:{...(U=N.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <Pager className='mb-3' aria-label='Esempio di paginazione'>
      <ul className='pagination'>
        <PagerItem>
          <PagerLink previous href='#'>
            <Icon icon='it-chevron-left' aria-hidden />
          </PagerLink>
        </PagerItem>
        <PagerItem className='d-none d-sm-block'>
          <PagerLink href='#'>1</PagerLink>
        </PagerItem>
        <PagerItem className='d-none d-sm-block'>
          <PagerLink tag='span'>…</PagerLink>
        </PagerItem>
        <PagerItem className='d-none d-sm-block'>
          <PagerLink href='#'>24</PagerLink>
        </PagerItem>
        <PagerItem className='d-none d-sm-block'>
          <PagerLink href='#'>25</PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink aria-current='page' href='#'>
            26
          </PagerLink>
        </PagerItem>
        <PagerItem className='d-none d-sm-block'>
          <PagerLink href='#'>27</PagerLink>
        </PagerItem>
        <PagerItem className='d-none d-sm-block'>
          <PagerLink href='#'>28</PagerLink>
        </PagerItem>
        <PagerItem className='d-none d-sm-block'>
          <PagerLink tag='span'>…</PagerLink>
        </PagerItem>
        <PagerItem className='d-none d-sm-block'>
          <PagerLink href='#'>50</PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink next href='#'>
            <Icon icon='it-chevron-right' aria-hidden />
          </PagerLink>
        </PagerItem>
      </ul>
    </Pager>
}`,...(K=(H=N.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var Q,X,Y;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <Pager className='mb-3' aria-label='Esempio di paginazione'>
      <ul className='pagination'>
        <PagerItem>
          <PagerLink previous href='#'>
            <Icon icon='it-chevron-left' aria-hidden />
          </PagerLink>
        </PagerItem>
        <PagerItem className='d-none d-sm-block'>
          <PagerLink href='#'>1</PagerLink>
        </PagerItem>
        <PagerItem className='d-none d-sm-block'>
          <PagerLink tag='span'>…</PagerLink>
        </PagerItem>
        <PagerItem className='d-none d-sm-block'>
          <PagerLink href='#'>24</PagerLink>
        </PagerItem>
        <PagerItem className='d-none d-sm-block'>
          <PagerLink href='#'>25</PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink aria-current='page' href='#'>
            26
          </PagerLink>
        </PagerItem>
        <PagerItem className='d-none d-sm-block'>
          <PagerLink href='#'>27</PagerLink>
        </PagerItem>
        <PagerItem className='d-none d-sm-block'>
          <PagerLink href='#'>28</PagerLink>
        </PagerItem>
        <PagerItem className='d-none d-sm-block'>
          <PagerLink tag='span'>…</PagerLink>
        </PagerItem>
        <PagerItem className='d-none d-sm-block'>
          <PagerLink href='#'>50</PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink next href='#'>
            <Icon icon='it-chevron-right' aria-hidden />
          </PagerLink>
        </PagerItem>
      </ul>
      <Dropdown>
        <DropdownToggle id='pagerChanger' aria-label='Salta alla pagina' caret>
          10/pagina
          <Icon className='icon icon-primary icon-sm' icon='it-expand' />
        </DropdownToggle>
        <DropdownMenu>
          <LinkList>
            <LinkListItem active>pag. 10</LinkListItem>
            <LinkListItem>pag. 20</LinkListItem>
            <LinkListItem>pag. 30</LinkListItem>
            <LinkListItem>pag. 40</LinkListItem>
            <LinkListItem>pag. 50</LinkListItem>
          </LinkList>
        </DropdownMenu>
      </Dropdown>
    </Pager>
}`,...(Y=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <Pager className='mb-3' aria-label='Esempio di paginazione'>
      <ul className='pagination'>
        <PagerItem>
          <PagerLink previous href='#'>
            <Icon icon='it-chevron-left' aria-hidden />
          </PagerLink>
        </PagerItem>
        <PagerItem className='d-none d-sm-block'>
          <PagerLink href='#'>1</PagerLink>
        </PagerItem>
        <PagerItem className='d-none d-sm-block'>
          <PagerLink tag='span'>…</PagerLink>
        </PagerItem>
        <PagerItem className='d-none d-sm-block'>
          <PagerLink href='#'>24</PagerLink>
        </PagerItem>
        <PagerItem className='d-none d-sm-block'>
          <PagerLink href='#'>25</PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink aria-current='page' href='#'>
            26
          </PagerLink>
        </PagerItem>
        <PagerItem className='d-none d-sm-block'>
          <PagerLink href='#'>27</PagerLink>
        </PagerItem>
        <PagerItem className='d-none d-sm-block'>
          <PagerLink href='#'>28</PagerLink>
        </PagerItem>
        <PagerItem className='d-none d-sm-block'>
          <PagerLink tag='span'>…</PagerLink>
        </PagerItem>
        <PagerItem className='d-none d-sm-block'>
          <PagerLink href='#'>50</PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink next href='#'>
            <Icon icon='it-chevron-right' aria-hidden />
          </PagerLink>
        </PagerItem>
      </ul>
      <Form>
        <FormGroup>
          <Input id='jumpToPage' type='text' className='form-control' maxLength={2} />
          <Label for='jumpToPage'>Vai a ...</Label>
        </FormGroup>
      </Form>
    </Pager>
}`,...(ae=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ne,re,te;x.parameters={...x.parameters,docs:{...(ne=x.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <Pager className='mb-3' aria-label='Esempio di paginazione'>
      <ul className='pagination'>
        <PagerItem disabled>
          <PagerLink previous href='#'>
            <Icon icon='it-chevron-left' aria-hidden />
          </PagerLink>
        </PagerItem>
        <PagerItem className='d-none d-sm-block'>
          <PagerLink tag='span'>1</PagerLink>
        </PagerItem>
        <PagerItem className='d-none d-sm-block'>
          <PagerLink tag='span'>/</PagerLink>
        </PagerItem>
        <PagerItem className='d-none d-sm-block'>
          <PagerLink tag='span'>5</PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink next href='#'>
            <Icon icon='it-chevron-right' aria-hidden />
          </PagerLink>
        </PagerItem>
      </ul>
    </Pager>
}`,...(te=(re=x.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var ie,le,me;z.parameters={...z.parameters,docs:{...(ie=z.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <Pager className='mb-3' aria-label='Esempio di paginazione'>
      <ul className='pagination'>
        <PagerItem>
          <PagerLink previous href='#' className='text'>
            Precedente
          </PagerLink>
        </PagerItem>
        <PagerItem className='d-none d-sm-block'>
          <PagerLink href='#'>1</PagerLink>
        </PagerItem>
        <PagerItem className='d-none d-sm-block'>
          <PagerLink tag='span'>…</PagerLink>
        </PagerItem>
        <PagerItem className='d-none d-sm-block'>
          <PagerLink href='#'>24</PagerLink>
        </PagerItem>
        <PagerItem className='d-none d-sm-block'>
          <PagerLink href='#'>25</PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink aria-current='page' href='#'>
            26
          </PagerLink>
        </PagerItem>
        <PagerItem className='d-none d-sm-block'>
          <PagerLink href='#'>27</PagerLink>
        </PagerItem>
        <PagerItem className='d-none d-sm-block'>
          <PagerLink href='#'>28</PagerLink>
        </PagerItem>
        <PagerItem className='d-none d-sm-block'>
          <PagerLink tag='span'>…</PagerLink>
        </PagerItem>
        <PagerItem className='d-none d-sm-block'>
          <PagerLink href='#'>50</PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink next href='#' className='text'>
            Successiva
          </PagerLink>
        </PagerItem>
      </ul>
    </Pager>
}`,...(me=(le=z.parameters)==null?void 0:le.docs)==null?void 0:me.source}}};var se,ce,oe;T.parameters={...T.parameters,docs:{...(se=T.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <Pager total={{
    ariaLabel: 'Pagina',
    label: ' 24 di 50'
  }} aria-label='Esempio di paginazione'>
      <ul className='pagination'>
        <PagerItem>
          <PagerLink previous href='#'>
            <Icon icon='it-chevron-left' aria-hidden />
          </PagerLink>
        </PagerItem>
        <PagerItem className='d-none d-sm-block'>
          <PagerLink href='#'>1</PagerLink>
        </PagerItem>
        <PagerItem className='d-none d-sm-block'>
          <PagerLink tag='span'>…</PagerLink>
        </PagerItem>
        <PagerItem className='d-none d-sm-block'>
          <PagerLink aria-current='page' href='#'>
            24
          </PagerLink>
        </PagerItem>
        <PagerItem className='d-none d-sm-block'>
          <PagerLink href='#'>25</PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink href='#'>26</PagerLink>
        </PagerItem>
        <PagerItem className='d-none d-sm-block'>
          <PagerLink href='#'>27</PagerLink>
        </PagerItem>
        <PagerItem className='d-none d-sm-block'>
          <PagerLink href='#'>28</PagerLink>
        </PagerItem>
        <PagerItem className='d-none d-sm-block'>
          <PagerLink tag='span'>…</PagerLink>
        </PagerItem>
        <PagerItem className='d-none d-sm-block'>
          <PagerLink href='#'>50</PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink next href='#'>
            <Icon icon='it-chevron-right' aria-hidden />
          </PagerLink>
        </PagerItem>
      </ul>
    </Pager>
}`,...(oe=(ce=T.parameters)==null?void 0:ce.docs)==null?void 0:oe.source}}};const Oe=["Esempi","StatoDisabilitatoEAttivo","Allineamento","Responsive","MoreComponent","PageChanger","JumpToPage","SimpleMode","LinkTestuali","TotalNumber"],We=Object.freeze(Object.defineProperty({__proto__:null,Allineamento:I,Esempi:f,JumpToPage:y,LinkTestuali:z,MoreComponent:N,PageChanger:v,Responsive:b,SimpleMode:x,StatoDisabilitatoEAttivo:L,TotalNumber:T,__namedExportsOrder:Oe,default:je},Symbol.toStringTag,{value:"Module"}));export{I as A,f as E,y as J,z as L,N as M,We as P,b as R,L as S,T,v as a,x as b};
