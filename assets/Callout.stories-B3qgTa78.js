import{r as O,R as e}from"./index-BFWcBMrj.js";import{C as n,a}from"./CalloutText-C98nfp7D.js";import{C as i}from"./CalloutTitle-DHbim7Vs.js";import{I as s}from"./Icon-Dn2FEDq_.js";import{c as U}from"./index-Bl6ORisp.js";import{B as j}from"./Button-BvsBu0Bj.js";const z=({id:t="cm-footer",tag:k="div",className:V,fileUrl:p,children:$,...w})=>{const _=k,F=U("collapse-div",V),[d,P]=O.useState(!1);return e.createElement(_,{...w,className:F},e.createElement("div",{className:"collapse-header",id:`${t}-heading`},e.createElement(j,{color:"primary",className:"callout-more-toggle",onClick:()=>P(!d),"aria-controls":`${t}-collapse`,"aria-expanded":d,style:{fontFamily:"var(--bs-font-sans-serif)",fontSize:"1rem"}},"Leggi tutto ",e.createElement("span",null)),p&&e.createElement("a",{className:"callout-more-download",href:p,style:{fontFamily:"var(--bs-font-sans-serif)",fontSize:"1rem"}},e.createElement(s,{icon:"it-download"}),e.createElement("span",{className:"visually-hidden"},"PDF"),"Download")),e.createElement("div",{className:`collapse ${d?"show":""}`,role:"tabpanel",id:`${t}-collapse`,"aria-labelledby":`${t}-heading`},e.createElement("div",{className:"collapse-body"},$)))};z.__docgenInfo={description:"",methods:[],displayName:"CalloutMoreFooter",props:{id:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'cm-footer'",computed:!1}},tag:{required:!1,tsType:{name:"ElementType"},description:"Utilizzarlo in caso si utilizzo di componenti personalizzati",defaultValue:{value:"'div'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Classi aggiuntive da usare per il componente"},fileUrl:{required:!1,tsType:{name:"string"},description:""}}};const B={title:"Documentazione/Componenti/Callout",component:n,parameters:{layout:"centered"}},l={render:()=>e.createElement(n,null,e.createElement(i,null,e.createElement("span",{className:"text"},"Titolo Callout")),e.createElement(a,null,"Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non augue non purus vestibulum varius."))},o={render:()=>e.createElement(n,null,e.createElement(i,null,e.createElement(s,{icon:"it-info-circle",padding:!1,"aria-hidden":!0}),e.createElement("span",{className:"visually-hidden"},"Confermato"),e.createElement("span",{className:"text"},"Titolo Callout")),e.createElement(a,null,"Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non augue non purus vestibulum varius."))},u={render:()=>e.createElement(n,null,e.createElement(i,null,e.createElement(s,{icon:"it-check-circle",padding:!1,"aria-hidden":!0}),e.createElement("span",{className:"visually-hidden"},"Confermato"),e.createElement("span",{className:"text"},"Titolo Callout")),e.createElement(a,null,"Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non augue non purus vestibulum varius."))},r={render:({...t})=>e.createElement(n,{color:t.color},e.createElement(i,null,e.createElement(s,{icon:`it-${t.icon}-circle`,padding:!1,"aria-hidden":!0}),e.createElement("span",{className:"text"},t.title)),e.createElement(a,null,"Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non augue non purus vestibulum varius.")),parameters:{docs:{controls:{exclude:["title","className","tag","title","highlight","detailed","testId"]}}},args:{color:"success",icon:"check",title:"Usa"},argTypes:{color:{control:"radio",options:["success","warning","danger","note","important"]},icon:{control:"radio",options:["check","help","close","info"]}}},c={render:({...t})=>e.createElement(n,{highlight:!0,color:t.color},e.createElement(i,null,e.createElement(s,{icon:`it-${t.icon}-circle`,padding:!1,"aria-hidden":!0}),t.title),e.createElement(a,null,"Maecenas at erat id sem interdum efficitur eu sed nunc. Mauris sit amet erat eget augue molestie malesuada ut sed ex. In sed dignissim elit."),e.createElement(a,null,"Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non augue non purus vestibulum varius. Maecenas ullamcorper ",e.createElement("a",{href:"#"},"tincidunt nulla quis laoreet."))),parameters:{docs:{controls:{exclude:["title","className","tag","title","highlight","detailed","testId"]}}},args:{color:"success",icon:"check",title:"Titolo"},argTypes:{color:{control:"radio",options:["success","warning","danger","note","important"]},icon:{control:"radio",options:["check","help","close","info"]}}},m={render:()=>e.createElement(n,{color:"note",detailed:!0},e.createElement(i,null,e.createElement(s,{icon:"it-zoom-in",padding:!1,"aria-hidden":!0}),e.createElement("span",null,"Approfondimento")),e.createElement(a,null,"Quisque suscipit interdum augue non volutpat. Cras tristique arcu tortor. Mauris eu magna nibh. Curabitur malesuada neque in lectus sagittis accumsan. In vitae justo eros. Maecenas pellentesque lacinia ipsum vitae rhoncus. Vestibulum pretium tempor turpis, nec gravida eros viverra in. Proin dictum nibh ut semper tristique."),e.createElement(a,null,"Maecenas at erat id ",e.createElement("strong",null,"sem interdum efficitur eu sed nunc.")," Mauris sit amet erat eget augue molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat interdum magna, eu commodo odio mauris semper dolor."),e.createElement(a,null,"Maecenas vulputate ante dictum ",e.createElement("a",{href:"#"},"vestibulum volutpat"),". Lorem ipsum dolor sit amet,"," ",e.createElement("strong",null,"consectetur adipiscing elit.")," Aenean non augue non purus vestibulum varius. Maecenas ullamcorper tincidunt nulla quis laoreet."),e.createElement(z,{id:"example",fileUrl:"#"},e.createElement("p",null,"Aenean tortor enim, suscipit eget commodo at, imperdiet quis diam. Vestibulum non accumsan felis, at ultrices lorem. Pellentesque ac diam a ipsum cursus interdum id nec odio. Vestibulum nec congue mauris. Aliquam et dui purus. Mauris in imperdiet risus, sed blandit tellus. Donec posuere accumsan lacinia. Mauris dignissim, sem vel volutpat rhoncus, neque mi ullamcorper ante, vitae volutpat ipsum quam id purus. Duis tincidunt sodales nisl eget ultricies. Sed condimentum mi eu ex venenatis, quis bibendum dui ultrices. Quisque ex eros, pellentesque vitae enim sed, pharetra tempus dolor. Donec eu nibh ac lacus luctus pellentesque. Duis interdum scelerisque magna nec malesuada."),e.createElement("p",null,"Maecenas at erat id ",e.createElement("strong",null,"sem interdum efficitur eu sed nunc.")," Mauris sit amet erat eget augue molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat interdum magna, eu commodo odio mauris semper dolor."),e.createElement("p",null,"Maecenas vulputate ante dictum ",e.createElement("a",{href:"#"},"vestibulum volutpat"),". Lorem ipsum dolor sit amet,"," ",e.createElement("strong",null,"consectetur adipiscing elit.")," Aenean non augue non purus vestibulum varius. Maecenas ullamcorper tincidunt nulla quis laoreet.")))};var g,v,f;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Callout>
            <CalloutTitle>
                <span className="text">Titolo Callout</span>
            </CalloutTitle>
            <CalloutText>
                Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non augue non purus
                vestibulum varius.
            </CalloutText>
        </Callout>
}`,...(f=(v=l.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var C,h,b;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Callout>
            <CalloutTitle>
                <Icon icon="it-info-circle" padding={false} aria-hidden />
                <span className="visually-hidden">Confermato</span>
                <span className="text">Titolo Callout</span>
            </CalloutTitle>
            <CalloutText>
                Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non augue non purus
                vestibulum varius.
            </CalloutText>
        </Callout>
}`,...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var E,T,x;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Callout>
            <CalloutTitle>
                <Icon icon="it-check-circle" padding={false} aria-hidden />
                <span className="visually-hidden">Confermato</span>
                <span className="text">Titolo Callout</span>
            </CalloutTitle>
            <CalloutText>
                Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non augue non purus
                vestibulum varius.
            </CalloutText>
        </Callout>
}`,...(x=(T=u.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var M,q,N;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: ({
    ...args
  }) => <Callout color={args.color}>
            <CalloutTitle>
                <Icon icon={\`it-\${args.icon}-circle\`} padding={false} aria-hidden />
                <span className="text">{args.title}</span>
            </CalloutTitle>
            <CalloutText>
                Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non augue non purus
                vestibulum varius.
            </CalloutText>
        </Callout>,
  parameters: {
    docs: {
      controls: {
        exclude: ["title", "className", "tag", "title", "highlight", "detailed", "testId"]
      }
    }
  },
  /**
   * Da verificare un modo per modificare l'icon al cambio del colore
   */
  args: {
    color: "success",
    icon: "check",
    title: "Usa"
  },
  argTypes: {
    color: {
      control: "radio",
      options: ["success", "warning", "danger", "note", "important"]
    },
    icon: {
      control: "radio",
      options: ["check", "help", "close", "info"]
    }
  }
}`,...(N=(q=r.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var y,A,I;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: ({
    ...args
  }) => <Callout highlight color={args.color}>
            <CalloutTitle>
                <Icon icon={\`it-\${args.icon}-circle\`} padding={false} aria-hidden />
                {args.title}
            </CalloutTitle>
            <CalloutText>
                Maecenas at erat id sem interdum efficitur eu sed nunc. Mauris sit amet erat eget augue molestie malesuada ut sed ex. In sed dignissim elit.
            </CalloutText>
            <CalloutText>
                Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non augue non purus
                vestibulum varius. Maecenas ullamcorper <a href="#">tincidunt nulla quis laoreet.</a>
            </CalloutText>
        </Callout>,
  parameters: {
    docs: {
      controls: {
        exclude: ["title", "className", "tag", "title", "highlight", "detailed", "testId"]
      }
    }
  },
  /**
   * Da verificare un modo per modificare l'icon e il titolo al cambio del colore
   */
  args: {
    color: "success",
    icon: "check",
    title: "Titolo"
  },
  argTypes: {
    color: {
      control: "radio",
      options: ["success", "warning", "danger", "note", "important"]
    },
    icon: {
      control: "radio",
      options: ["check", "help", "close", "info"]
    }
  }
}`,...(I=(A=c.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var D,L,S;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Callout color="note" detailed>
            <CalloutTitle>
                <Icon icon="it-zoom-in" padding={false} aria-hidden />
                <span>Approfondimento</span>
            </CalloutTitle>
          <CalloutText>
            Quisque suscipit interdum augue non volutpat. Cras tristique arcu tortor. Mauris eu magna nibh. Curabitur
            malesuada neque in lectus sagittis
            accumsan. In vitae justo eros. Maecenas pellentesque lacinia ipsum vitae rhoncus. Vestibulum pretium tempor
            turpis, nec gravida eros viverra
            in. Proin dictum nibh ut semper tristique.
          </CalloutText>
          <CalloutText>
            Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue
            molestie malesuada ut sed ex. In
            sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat interdum magna, eu commodo odio
            mauris semper dolor.
          </CalloutText>
            <CalloutText>
            Maecenas vulputate ante dictum <a href="#">vestibulum volutpat</a>. Lorem ipsum dolor sit amet,{' '}
            <strong>consectetur adipiscing elit.</strong> Aenean non augue non purus vestibulum varius. Maecenas
            ullamcorper tincidunt nulla quis
            laoreet.
            </CalloutText>
            <CalloutMoreFooter id="example" fileUrl="#">
              <p>
                Aenean tortor enim, suscipit eget commodo at, imperdiet quis diam. Vestibulum non accumsan felis, at
                ultrices lorem. Pellentesque ac
                diam a ipsum cursus interdum id nec odio. Vestibulum nec congue mauris. Aliquam et dui purus. Mauris in
                imperdiet risus, sed blandit
                tellus. Donec posuere accumsan lacinia. Mauris dignissim, sem vel volutpat rhoncus, neque mi ullamcorper
                ante, vitae volutpat ipsum quam
                id purus. Duis tincidunt sodales nisl eget ultricies. Sed condimentum mi eu ex venenatis, quis bibendum
                dui ultrices. Quisque ex eros,
                pellentesque vitae enim sed, pharetra tempus dolor. Donec eu nibh ac lacus luctus pellentesque. Duis
                interdum scelerisque magna nec
                malesuada.
              </p>
              <p>
                Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue
                molestie malesuada ut sed ex.
                In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat interdum magna, eu commodo
                odio mauris semper dolor.
              </p>
              <p>
                Maecenas vulputate ante dictum <a href="#">vestibulum volutpat</a>. Lorem ipsum dolor sit amet,{' '}
                <strong>consectetur adipiscing elit.</strong> Aenean non augue non purus vestibulum varius. Maecenas
                ullamcorper tincidunt nulla quis
                laoreet.
              </p>
            </CalloutMoreFooter>
        </Callout>
}`,...(S=(L=m.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};const Q=["EsempioBasico","EsempioConIcona","EsempioAccessibilita","CalloutVariantiColore","CalloutHighlights","CalloutApprofondimento"],X=Object.freeze(Object.defineProperty({__proto__:null,CalloutApprofondimento:m,CalloutHighlights:c,CalloutVariantiColore:r,EsempioAccessibilita:u,EsempioBasico:l,EsempioConIcona:o,__namedExportsOrder:Q,default:B},Symbol.toStringTag,{value:"Module"}));export{X as C,l as E,o as a,r as b,c,m as d,z as e};
