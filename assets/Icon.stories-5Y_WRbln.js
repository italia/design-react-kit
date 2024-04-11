import{R as e}from"./index-BFWcBMrj.js";import{I as n,i as D}from"./Icon-Dn2FEDq_.js";import{R as H,C as O}from"./Col-CzbmXXhQ.js";const j={title:"Documentazione/Utilities/Icon",component:n},i={render:({icon:o,title:a,size:d,padding:p,className:u,color:g})=>e.createElement(n,{icon:o,size:d,title:a,padding:p,color:g,className:u}),args:{icon:"it-tool",title:"Alt Text",size:"",padding:!1,color:"",className:""},argTypes:{icon:{control:"select",options:D},title:{control:"text"},size:{control:"select",options:{"Extra small":"xs",Small:"sm",default:"",Large:"lg","Extra Large":"xl"}},className:{control:"select",options:{default:"",Scuro:"bg-dark",Chiaro:"bg-light"}},color:{control:"select",options:["primary","secondary","success","warning","danger","light","white"]}}},r={render:({icon:o,padding:a,className:d,color:p})=>{const u=["xs","sm","","lg","xl"];return e.createElement(e.Fragment,null,u.map(g=>e.createElement(n,{key:g,icon:o,size:g,padding:a,color:p,className:d})))},args:{icon:"it-check-circle",padding:!1,color:"",className:"bg-grey"}},t={args:{...r.args,icon:"it-check-circle",padding:!0,color:"",className:"bg-grey"}},c={render:({icon:o})=>e.createElement(e.Fragment,null,["primary","secondary","success","warning","danger"].map(a=>e.createElement(n,{key:a,icon:o,color:a,className:"bg-grey"})),["light","white"].map(a=>e.createElement(n,{key:a,icon:o,color:a,className:"bg-dark"}))),args:{icon:"it-check-circle"}},s={render:()=>e.createElement("div",{style:{lineHeight:"4em"}},e.createElement(n,{className:"bg-light align-bottom",icon:"it-check-circle"}),e.createElement(n,{className:"bg-light align-middle",icon:"it-check-circle"}),e.createElement(n,{className:"bg-light align-top",icon:"it-check-circle"}))},l={render:()=>e.createElement(H,null,D.map(o=>e.createElement(O,{md:{size:6},lg:{size:4},key:o},e.createElement(n,{icon:o})," ",o)))},m={render:()=>e.createElement("div",{style:{lineHeight:"4em"}},e.createElement(n,{icon:"https://upload.wikimedia.org/wikipedia/it/f/f5/Palermo-Stemma_uff.png",title:"Stemma Palermo"}),e.createElement(n,{icon:"https://dati.comune.roma.it/catalog/img/Roma-Stemma.png",size:"lg",title:"Stemma Roma"}),e.createElement(n,{icon:"https://upload.wikimedia.org/wikipedia/commons/9/93/CoA_Citt%C3%A0_di_Milano.svg",size:"xl",title:"Stemma Milano"}))};var h,E,k;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: ({
    icon,
    title,
    size,
    padding,
    className,
    color
  }) => <Icon icon={icon} size={size} title={title} padding={padding} color={color} className={className} />,
  args: {
    icon: 'it-tool',
    title: 'Alt Text',
    size: '',
    padding: false,
    color: '',
    className: ''
  },
  argTypes: {
    icon: {
      control: 'select',
      options: icons
    },
    title: {
      control: 'text'
    },
    size: {
      control: 'select',
      options: {
        'Extra small': 'xs',
        Small: 'sm',
        default: '',
        Large: 'lg',
        'Extra Large': 'xl'
      }
    },
    className: {
      control: 'select',
      options: {
        default: '',
        Scuro: 'bg-dark',
        Chiaro: 'bg-light'
      }
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'light', 'white']
    }
  }
}`,...(k=(E=i.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var y,b,N;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: ({
    icon,
    padding,
    className,
    color
  }) => {
    const dimensions = (['xs', 'sm', '', 'lg', 'xl'] as const);
    return <>
        {dimensions.map(size => <Icon key={size} icon={icon} size={size} padding={padding} color={color} className={className} />)}
      </>;
  },
  args: {
    icon: 'it-check-circle',
    padding: false,
    color: '',
    className: 'bg-grey'
  }
}`,...(N=(b=r.parameters)==null?void 0:b.docs)==null?void 0:N.source}}};var S,f,x;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...EsempioDimensioni.args,
    icon: 'it-check-circle',
    padding: true,
    color: '',
    className: 'bg-grey'
  }
}`,...(x=(f=t.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var z,I,w;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: ({
    icon
  }) => {
    return <>
        {['primary', 'secondary', 'success', 'warning', 'danger'].map(color => <Icon key={color} icon={icon} color={color} className='bg-grey' />)}
        {['light', 'white'].map(color => <Icon key={color} icon={icon} color={color} className='bg-dark' />)}
      </>;
  },
  args: {
    icon: 'it-check-circle'
  }
}`,...(w=(I=c.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var C,_,v;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      lineHeight: '4em'
    }}>
        <Icon className='bg-light align-bottom' icon='it-check-circle' />
        <Icon className='bg-light align-middle' icon='it-check-circle' />
        <Icon className='bg-light align-top' icon='it-check-circle' />
      </div>;
  }
}`,...(v=(_=s.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};var L,R,A;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    return <Row>
        {icons.map(icon => <Col md={{
        size: 6
      }} lg={{
        size: 4
      }} key={icon}>
            <Icon icon={icon} />&nbsp;{icon}
          </Col>)}
      </Row>;
  }
}`,...(A=(R=l.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var P,M,T;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      lineHeight: '4em'
    }}>
        <Icon icon='https://upload.wikimedia.org/wikipedia/it/f/f5/Palermo-Stemma_uff.png' title='Stemma Palermo' />
        <Icon icon='https://dati.comune.roma.it/catalog/img/Roma-Stemma.png' size='lg' title='Stemma Roma' />
        <Icon icon='https://upload.wikimedia.org/wikipedia/commons/9/93/CoA_Citt%C3%A0_di_Milano.svg' size='xl' title='Stemma Milano' />
      </div>;
  }
}`,...(T=(M=m.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};const F=["EsempioInterattivo","EsempioDimensioni","EsempioPadding","EsempioColori","EsempioAllineamento","ListaIcone","EsempioLoghiEsterni"],G=Object.freeze(Object.defineProperty({__proto__:null,EsempioAllineamento:s,EsempioColori:c,EsempioDimensioni:r,EsempioInterattivo:i,EsempioLoghiEsterni:m,EsempioPadding:t,ListaIcone:l,__namedExportsOrder:F,default:j},Symbol.toStringTag,{value:"Module"}));export{i as E,G as I,l as L,r as a,t as b,c,s as d,m as e};
