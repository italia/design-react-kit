import{R as e}from"./index-BFWcBMrj.js";import{P as a}from"./index-D3ylJrlI.js";import{c as we}from"./index-Bl6ORisp.js";import{t as N,m as _}from"./utils-CUovxYU2.js";var ye=["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"];function v(){return v=Object.assign?Object.assign.bind():function(t){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},v.apply(this,arguments)}function Te(t,o){if(t==null)return{};var r=ve(t,o),n,c;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(t);for(c=0;c<d.length;c++)n=d[c],!(o.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function ve(t,o){if(t==null)return{};var r={},n=Object.keys(t),c,d;for(d=0;d<n.length;d++)c=n[d],!(o.indexOf(c)>=0)&&(r[c]=t[c]);return r}var fe={bordered:a.bool,borderless:a.bool,className:a.string,cssModule:a.object,dark:a.bool,hover:a.bool,innerRef:a.oneOfType([a.func,a.string,a.object]),responsive:a.oneOfType([a.bool,a.string]),responsiveTag:N,size:a.string,striped:a.bool,tag:N};function l(t){var o=t.className,r=t.cssModule,n=t.size,c=t.bordered,d=t.borderless,me=t.striped,he=t.dark,Ee=t.hover,T=t.responsive,f=t.tag,ie=f===void 0?"table":f,z=t.responsiveTag,ue=z===void 0?"div":z,pe=t.innerRef,Ce=Te(t,ye),be=_(we(o,"table",n?"table-"+n:!1,c?"table-bordered":!1,d?"table-borderless":!1,me?"table-striped":!1,he?"table-dark":!1,Ee?"table-hover":!1),r),I=e.createElement(ie,v({},Ce,{ref:pe,className:be}));if(T){var ge=_(T===!0?"table-responsive":"table-responsive-".concat(T),r);return e.createElement(ue,{className:ge},I)}return I}l.propTypes=fe;const ze={title:"Documentazione/Componenti/Tables"},s=()=>e.createElement(l,null,e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{scope:"col"},"#"),e.createElement("th",{scope:"col"},"Nome"),e.createElement("th",{scope:"col"},"Cognome"),e.createElement("th",{scope:"col"},"Username"))),e.createElement("tbody",null,e.createElement("tr",null,e.createElement("th",{scope:"row"},"1"),e.createElement("td",null,"Mario"),e.createElement("td",null,"Verdi"),e.createElement("td",null,"mario.verdi")),e.createElement("tr",null,e.createElement("th",{scope:"row"},"2"),e.createElement("td",null,"Francesco"),e.createElement("td",null,"Bianchi"),e.createElement("td",null,"francesco.bianchi")),e.createElement("tr",null,e.createElement("th",{scope:"row"},"3"),e.createElement("td",null,"Alessandro"),e.createElement("td",null,"Rossi"),e.createElement("td",null,"alessandro.rossi")))),m=()=>e.createElement(l,{dark:!0},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{scope:"col"},"#"),e.createElement("th",{scope:"col"},"Nome"),e.createElement("th",{scope:"col"},"Cognome"),e.createElement("th",{scope:"col"},"Username"))),e.createElement("tbody",null,e.createElement("tr",null,e.createElement("th",{scope:"row"},"1"),e.createElement("td",null,"Mario"),e.createElement("td",null,"Verdi"),e.createElement("td",null,"mario.verdi")),e.createElement("tr",null,e.createElement("th",{scope:"row"},"2"),e.createElement("td",null,"Francesco"),e.createElement("td",null,"Bianchi"),e.createElement("td",null,"francesco.bianchi")),e.createElement("tr",null,e.createElement("th",{scope:"row"},"3"),e.createElement("td",null,"Alessandro"),e.createElement("td",null,"Rossi"),e.createElement("td",null,"alessandro.rossi")))),h=()=>e.createElement(e.Fragment,null,e.createElement(l,null,e.createElement("thead",{className:"table-dark"},e.createElement("tr",null,e.createElement("th",{scope:"col"},"#"),e.createElement("th",{scope:"col"},"Nome"),e.createElement("th",{scope:"col"},"Cognome"),e.createElement("th",{scope:"col"},"Username"))),e.createElement("tbody",null,e.createElement("tr",null,e.createElement("th",{scope:"row"},"1"),e.createElement("td",null,"Mario"),e.createElement("td",null,"Verdi"),e.createElement("td",null,"mario.verdi")),e.createElement("tr",null,e.createElement("th",{scope:"row"},"2"),e.createElement("td",null,"Francesco"),e.createElement("td",null,"Bianchi"),e.createElement("td",null,"francesco.bianchi")),e.createElement("tr",null,e.createElement("th",{scope:"row"},"3"),e.createElement("td",null,"Alessandro"),e.createElement("td",null,"Rossi"),e.createElement("td",null,"alessandro.rossi")))),e.createElement(l,null,e.createElement("thead",{className:"table-light"},e.createElement("tr",null,e.createElement("th",{scope:"col"},"#"),e.createElement("th",{scope:"col"},"Nome"),e.createElement("th",{scope:"col"},"Cognome"),e.createElement("th",{scope:"col"},"Username"))),e.createElement("tbody",null,e.createElement("tr",null,e.createElement("th",{scope:"row"},"1"),e.createElement("td",null,"Mario"),e.createElement("td",null,"Verdi"),e.createElement("td",null,"mario.verdi")),e.createElement("tr",null,e.createElement("th",{scope:"row"},"2"),e.createElement("td",null,"Francesco"),e.createElement("td",null,"Bianchi"),e.createElement("td",null,"francesco.bianchi")),e.createElement("tr",null,e.createElement("th",{scope:"row"},"3"),e.createElement("td",null,"Alessandro"),e.createElement("td",null,"Rossi"),e.createElement("td",null,"alessandro.rossi"))))),E=()=>e.createElement(l,{striped:!0},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{scope:"col"},"#"),e.createElement("th",{scope:"col"},"Nome"),e.createElement("th",{scope:"col"},"Cognome"),e.createElement("th",{scope:"col"},"Username"))),e.createElement("tbody",null,e.createElement("tr",null,e.createElement("th",{scope:"row"},"1"),e.createElement("td",null,"Mario"),e.createElement("td",null,"Verdi"),e.createElement("td",null,"mario.verdi")),e.createElement("tr",null,e.createElement("th",{scope:"row"},"2"),e.createElement("td",null,"Francesco"),e.createElement("td",null,"Bianchi"),e.createElement("td",null,"francesco.bianchi")),e.createElement("tr",null,e.createElement("th",{scope:"row"},"3"),e.createElement("td",null,"Alessandro"),e.createElement("td",null,"Rossi"),e.createElement("td",null,"alessandro.rossi")))),i=()=>e.createElement(l,{bordered:!0},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{scope:"col"},"#"),e.createElement("th",{scope:"col"},"Nome"),e.createElement("th",{scope:"col"},"Cognome"),e.createElement("th",{scope:"col"},"Username"))),e.createElement("tbody",null,e.createElement("tr",null,e.createElement("th",{scope:"row"},"1"),e.createElement("td",null,"Mario"),e.createElement("td",null,"Verdi"),e.createElement("td",null,"mario.verdi")),e.createElement("tr",null,e.createElement("th",{scope:"row"},"2"),e.createElement("td",null,"Francesco"),e.createElement("td",null,"Bianchi"),e.createElement("td",null,"francesco.bianchi")),e.createElement("tr",null,e.createElement("th",{scope:"row"},"3"),e.createElement("td",null,"Alessandro"),e.createElement("td",null,"Rossi"),e.createElement("td",null,"alessandro.rossi")))),u=()=>e.createElement(l,{borderless:!0},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{scope:"col"},"#"),e.createElement("th",{scope:"col"},"Nome"),e.createElement("th",{scope:"col"},"Cognome"),e.createElement("th",{scope:"col"},"Username"))),e.createElement("tbody",null,e.createElement("tr",null,e.createElement("th",{scope:"row"},"1"),e.createElement("td",null,"Mario"),e.createElement("td",null,"Verdi"),e.createElement("td",null,"mario.verdi")),e.createElement("tr",null,e.createElement("th",{scope:"row"},"2"),e.createElement("td",null,"Francesco"),e.createElement("td",null,"Bianchi"),e.createElement("td",null,"francesco.bianchi")),e.createElement("tr",null,e.createElement("th",{scope:"row"},"3"),e.createElement("td",null,"Alessandro"),e.createElement("td",null,"Rossi"),e.createElement("td",null,"alessandro.rossi")))),p=()=>e.createElement(l,{hover:!0},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{scope:"col"},"#"),e.createElement("th",{scope:"col"},"Nome"),e.createElement("th",{scope:"col"},"Cognome"),e.createElement("th",{scope:"col"},"Username"))),e.createElement("tbody",null,e.createElement("tr",null,e.createElement("th",{scope:"row"},"1"),e.createElement("td",null,"Mario"),e.createElement("td",null,"Verdi"),e.createElement("td",null,"mario.verdi")),e.createElement("tr",null,e.createElement("th",{scope:"row"},"2"),e.createElement("td",null,"Francesco"),e.createElement("td",null,"Bianchi"),e.createElement("td",null,"francesco.bianchi")),e.createElement("tr",null,e.createElement("th",{scope:"row"},"3"),e.createElement("td",null,"Alessandro"),e.createElement("td",null,"Rossi"),e.createElement("td",null,"alessandro.rossi")))),C=()=>e.createElement(l,{size:"sm"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{scope:"col"},"#"),e.createElement("th",{scope:"col"},"Nome"),e.createElement("th",{scope:"col"},"Cognome"),e.createElement("th",{scope:"col"},"Username"))),e.createElement("tbody",null,e.createElement("tr",null,e.createElement("th",{scope:"row"},"1"),e.createElement("td",null,"Mario"),e.createElement("td",null,"Verdi"),e.createElement("td",null,"mario.verdi")),e.createElement("tr",null,e.createElement("th",{scope:"row"},"2"),e.createElement("td",null,"Francesco"),e.createElement("td",null,"Bianchi"),e.createElement("td",null,"francesco.bianchi")),e.createElement("tr",null,e.createElement("th",{scope:"row"},"3"),e.createElement("td",null,"Alessandro"),e.createElement("td",null,"Rossi"),e.createElement("td",null,"alessandro.rossi")))),b=()=>e.createElement(e.Fragment,null,e.createElement(l,null,e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"Class"),e.createElement("th",null,"Heading"),e.createElement("th",null,"Heading"))),e.createElement("tbody",null,e.createElement("tr",{className:"table-active"},e.createElement("th",null,"Active"),e.createElement("td",null,"Cell"),e.createElement("td",null,"Cell")),e.createElement("tr",null,e.createElement("th",null,"Default"),e.createElement("td",null,"Cell"),e.createElement("td",null,"Cell")),e.createElement("tr",{className:"table-primary"},e.createElement("th",null,"Primary"),e.createElement("td",null,"Cell"),e.createElement("td",null,"Cell")),e.createElement("tr",{className:"table-secondary"},e.createElement("th",null,"Secondary"),e.createElement("td",null,"Cell"),e.createElement("td",null,"Cell")),e.createElement("tr",{className:"table-success"},e.createElement("th",null,"Success"),e.createElement("td",null,"Cell"),e.createElement("td",null,"Cell")),e.createElement("tr",{className:"table-danger"},e.createElement("th",null,"Danger"),e.createElement("td",null,"Cell"),e.createElement("td",null,"Cell")),e.createElement("tr",{className:"table-warning"},e.createElement("th",null,"Warning"),e.createElement("td",null,"Cell"),e.createElement("td",null,"Cell")))),e.createElement(l,null,e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null),e.createElement("th",null,"Heading"),e.createElement("th",null,"Heading"),e.createElement("th",null,"Heading"),e.createElement("th",null,"Heading"),e.createElement("th",null,"Heading"),e.createElement("th",null,"Heading"))),e.createElement("tbody",null,e.createElement("tr",null,e.createElement("td",null,"Class"),e.createElement("td",{className:"table-active"},"Active"),e.createElement("td",{className:"table-primary"},"Primary"),e.createElement("td",{className:"table-secondary"},"Secondary"),e.createElement("td",{className:"table-success"},"Success"),e.createElement("td",{className:"table-danger"},"Danger"),e.createElement("td",{className:"table-warning"},"Warning"))))),g=()=>e.createElement(l,null,e.createElement("caption",null,"Lista di utenti"),e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{scope:"col"},"#"),e.createElement("th",{scope:"col"},"First"),e.createElement("th",{scope:"col"},"Last"),e.createElement("th",{scope:"col"},"Handle"))),e.createElement("tbody",null,e.createElement("tr",null,e.createElement("th",{scope:"row"},"1"),e.createElement("td",null,"Mark"),e.createElement("td",null,"Otto"),e.createElement("td",null,"@mdo")),e.createElement("tr",null,e.createElement("th",{scope:"row"},"2"),e.createElement("td",null,"Jacob"),e.createElement("td",null,"Thornton"),e.createElement("td",null,"@fat")),e.createElement("tr",null,e.createElement("th",{scope:"row"},"3"),e.createElement("td",null,"Larry"),e.createElement("td",null,"the Bird"),e.createElement("td",null,"@twitter")))),w=()=>e.createElement(l,{responsive:!0},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{scope:"col"},"#"),e.createElement("th",{scope:"col"},"Intestazione"),e.createElement("th",{scope:"col"},"Intestazione"),e.createElement("th",{scope:"col"},"Intestazione"),e.createElement("th",{scope:"col"},"Intestazione"),e.createElement("th",{scope:"col"},"Intestazione"),e.createElement("th",{scope:"col"},"Intestazione"),e.createElement("th",{scope:"col"},"Intestazione"),e.createElement("th",{scope:"col"},"Intestazione"),e.createElement("th",{scope:"col"},"Intestazione"))),e.createElement("tbody",null,e.createElement("tr",null,e.createElement("th",{scope:"row"},"1"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella")),e.createElement("tr",null,e.createElement("th",{scope:"row"},"2"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella")),e.createElement("tr",null,e.createElement("th",{scope:"row"},"3"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella")))),y=()=>e.createElement(e.Fragment,null,e.createElement(l,{responsive:!0,size:"sm"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{scope:"col"},"#"),e.createElement("th",{scope:"col"},"Intestazione"),e.createElement("th",{scope:"col"},"Intestazione"),e.createElement("th",{scope:"col"},"Intestazione"),e.createElement("th",{scope:"col"},"Intestazione"),e.createElement("th",{scope:"col"},"Intestazione"))),e.createElement("tbody",null,e.createElement("tr",null,e.createElement("th",{scope:"row"},"1"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella")),e.createElement("tr",null,e.createElement("th",{scope:"row"},"2"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella")),e.createElement("tr",null,e.createElement("th",{scope:"row"},"3"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella")))),e.createElement(l,{responsive:!0,size:"md"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{scope:"col"},"#"),e.createElement("th",{scope:"col"},"Intestazione"),e.createElement("th",{scope:"col"},"Intestazione"),e.createElement("th",{scope:"col"},"Intestazione"),e.createElement("th",{scope:"col"},"Intestazione"),e.createElement("th",{scope:"col"},"Intestazione"))),e.createElement("tbody",null,e.createElement("tr",null,e.createElement("th",{scope:"row"},"1"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella")),e.createElement("tr",null,e.createElement("th",{scope:"row"},"2"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella")),e.createElement("tr",null,e.createElement("th",{scope:"row"},"3"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella")))),e.createElement(l,{responsive:!0,size:"lg"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{scope:"col"},"#"),e.createElement("th",{scope:"col"},"Intestazione"),e.createElement("th",{scope:"col"},"Intestazione"),e.createElement("th",{scope:"col"},"Intestazione"),e.createElement("th",{scope:"col"},"Intestazione"),e.createElement("th",{scope:"col"},"Intestazione"))),e.createElement("tbody",null,e.createElement("tr",null,e.createElement("th",{scope:"row"},"1"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella")),e.createElement("tr",null,e.createElement("th",{scope:"row"},"2"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella")),e.createElement("tr",null,e.createElement("th",{scope:"row"},"3"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella")))),e.createElement(l,{responsive:!0,size:"xl"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{scope:"col"},"#"),e.createElement("th",{scope:"col"},"Intestazione"),e.createElement("th",{scope:"col"},"Intestazione"),e.createElement("th",{scope:"col"},"Intestazione"),e.createElement("th",{scope:"col"},"Intestazione"),e.createElement("th",{scope:"col"},"Intestazione"))),e.createElement("tbody",null,e.createElement("tr",null,e.createElement("th",{scope:"row"},"1"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella")),e.createElement("tr",null,e.createElement("th",{scope:"row"},"2"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella")),e.createElement("tr",null,e.createElement("th",{scope:"row"},"3"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella"),e.createElement("td",null,"Cella")))));s.__docgenInfo={description:"",methods:[],displayName:"TableBase"};m.__docgenInfo={description:"",methods:[],displayName:"TableDark"};h.__docgenInfo={description:"",methods:[],displayName:"TableThead"};E.__docgenInfo={description:"",methods:[],displayName:"TableStriped"};i.__docgenInfo={description:"",methods:[],displayName:"TableBordered"};u.__docgenInfo={description:"",methods:[],displayName:"TableBorderless"};p.__docgenInfo={description:"",methods:[],displayName:"TableHover"};C.__docgenInfo={description:"",methods:[],displayName:"TableCompact"};b.__docgenInfo={description:"",methods:[],displayName:"TableContextual"};g.__docgenInfo={description:"",methods:[],displayName:"TableCaptions"};w.__docgenInfo={description:"",methods:[],displayName:"TableResponsive"};y.__docgenInfo={description:"",methods:[],displayName:"TableBreakpoint"};var B,R,S;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`() => <Table>
    <thead>
      <tr>
        <th scope='col'>#</th>
        <th scope='col'>Nome</th>
        <th scope='col'>Cognome</th>
        <th scope='col'>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope='row'>1</th>
        <td>Mario</td>
        <td>Verdi</td>
        <td>mario.verdi</td>
      </tr>
      <tr>
        <th scope='row'>2</th>
        <td>Francesco</td>
        <td>Bianchi</td>
        <td>francesco.bianchi</td>
      </tr>
      <tr>
        <th scope='row'>3</th>
        <td>Alessandro</td>
        <td>Rossi</td>
        <td>alessandro.rossi</td>
      </tr>
    </tbody>
  </Table>`,...(S=(R=s.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var M,F,A;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`() => <Table dark>
    <thead>
      <tr>
        <th scope='col'>#</th>
        <th scope='col'>Nome</th>
        <th scope='col'>Cognome</th>
        <th scope='col'>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope='row'>1</th>
        <td>Mario</td>
        <td>Verdi</td>
        <td>mario.verdi</td>
      </tr>
      <tr>
        <th scope='row'>2</th>
        <td>Francesco</td>
        <td>Bianchi</td>
        <td>francesco.bianchi</td>
      </tr>
      <tr>
        <th scope='row'>3</th>
        <td>Alessandro</td>
        <td>Rossi</td>
        <td>alessandro.rossi</td>
      </tr>
    </tbody>
  </Table>`,...(A=(F=m.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};var H,O,k;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`() => <>
    <Table>
      <thead className='table-dark'>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Nome</th>
          <th scope='col'>Cognome</th>
          <th scope='col'>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope='row'>1</th>
          <td>Mario</td>
          <td>Verdi</td>
          <td>mario.verdi</td>
        </tr>
        <tr>
          <th scope='row'>2</th>
          <td>Francesco</td>
          <td>Bianchi</td>
          <td>francesco.bianchi</td>
        </tr>
        <tr>
          <th scope='row'>3</th>
          <td>Alessandro</td>
          <td>Rossi</td>
          <td>alessandro.rossi</td>
        </tr>
      </tbody>
    </Table>

    <Table>
      <thead className='table-light'>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Nome</th>
          <th scope='col'>Cognome</th>
          <th scope='col'>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope='row'>1</th>
          <td>Mario</td>
          <td>Verdi</td>
          <td>mario.verdi</td>
        </tr>
        <tr>
          <th scope='row'>2</th>
          <td>Francesco</td>
          <td>Bianchi</td>
          <td>francesco.bianchi</td>
        </tr>
        <tr>
          <th scope='row'>3</th>
          <td>Alessandro</td>
          <td>Rossi</td>
          <td>alessandro.rossi</td>
        </tr>
      </tbody>
    </Table>
  </>`,...(k=(O=h.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var U,V,j;E.parameters={...E.parameters,docs:{...(U=E.parameters)==null?void 0:U.docs,source:{originalSource:`() => <Table striped>
    <thead>
      <tr>
        <th scope='col'>#</th>
        <th scope='col'>Nome</th>
        <th scope='col'>Cognome</th>
        <th scope='col'>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope='row'>1</th>
        <td>Mario</td>
        <td>Verdi</td>
        <td>mario.verdi</td>
      </tr>
      <tr>
        <th scope='row'>2</th>
        <td>Francesco</td>
        <td>Bianchi</td>
        <td>francesco.bianchi</td>
      </tr>
      <tr>
        <th scope='row'>3</th>
        <td>Alessandro</td>
        <td>Rossi</td>
        <td>alessandro.rossi</td>
      </tr>
    </tbody>
  </Table>`,...(j=(V=E.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var P,x,D;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`() => <Table bordered>
    <thead>
      <tr>
        <th scope='col'>#</th>
        <th scope='col'>Nome</th>
        <th scope='col'>Cognome</th>
        <th scope='col'>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope='row'>1</th>
        <td>Mario</td>
        <td>Verdi</td>
        <td>mario.verdi</td>
      </tr>
      <tr>
        <th scope='row'>2</th>
        <td>Francesco</td>
        <td>Bianchi</td>
        <td>francesco.bianchi</td>
      </tr>
      <tr>
        <th scope='row'>3</th>
        <td>Alessandro</td>
        <td>Rossi</td>
        <td>alessandro.rossi</td>
      </tr>
    </tbody>
  </Table>`,...(D=(x=i.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var L,W,J;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`() => <Table borderless>
    <thead>
      <tr>
        <th scope='col'>#</th>
        <th scope='col'>Nome</th>
        <th scope='col'>Cognome</th>
        <th scope='col'>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope='row'>1</th>
        <td>Mario</td>
        <td>Verdi</td>
        <td>mario.verdi</td>
      </tr>
      <tr>
        <th scope='row'>2</th>
        <td>Francesco</td>
        <td>Bianchi</td>
        <td>francesco.bianchi</td>
      </tr>
      <tr>
        <th scope='row'>3</th>
        <td>Alessandro</td>
        <td>Rossi</td>
        <td>alessandro.rossi</td>
      </tr>
    </tbody>
  </Table>`,...(J=(W=u.parameters)==null?void 0:W.docs)==null?void 0:J.source}}};var $,q,G;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`() => <Table hover>
    <thead>
      <tr>
        <th scope='col'>#</th>
        <th scope='col'>Nome</th>
        <th scope='col'>Cognome</th>
        <th scope='col'>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope='row'>1</th>
        <td>Mario</td>
        <td>Verdi</td>
        <td>mario.verdi</td>
      </tr>
      <tr>
        <th scope='row'>2</th>
        <td>Francesco</td>
        <td>Bianchi</td>
        <td>francesco.bianchi</td>
      </tr>
      <tr>
        <th scope='row'>3</th>
        <td>Alessandro</td>
        <td>Rossi</td>
        <td>alessandro.rossi</td>
      </tr>
    </tbody>
  </Table>`,...(G=(q=p.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var K,Q,X;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`() => <Table size='sm'>
    <thead>
      <tr>
        <th scope='col'>#</th>
        <th scope='col'>Nome</th>
        <th scope='col'>Cognome</th>
        <th scope='col'>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope='row'>1</th>
        <td>Mario</td>
        <td>Verdi</td>
        <td>mario.verdi</td>
      </tr>
      <tr>
        <th scope='row'>2</th>
        <td>Francesco</td>
        <td>Bianchi</td>
        <td>francesco.bianchi</td>
      </tr>
      <tr>
        <th scope='row'>3</th>
        <td>Alessandro</td>
        <td>Rossi</td>
        <td>alessandro.rossi</td>
      </tr>
    </tbody>
  </Table>`,...(X=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`() => <>
    {/* On rows */}
    <Table>
      <thead>
        <tr>
          <th>Class</th>
          <th>Heading</th>
          <th>Heading</th>
        </tr>
      </thead>
      <tbody>
        <tr className='table-active'>
          <th>Active</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th>Default</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr className='table-primary'>
          <th>Primary</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr className='table-secondary'>
          <th>Secondary</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr className='table-success'>
          <th>Success</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr className='table-danger'>
          <th>Danger</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr className='table-warning'>
          <th>Warning</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
      </tbody>
    </Table>

    {/* On cells (\`td\` or \`th\`) */}
    <Table>
      <thead>
        <tr>
          <th></th>
          <th>Heading</th>
          <th>Heading</th>
          <th>Heading</th>
          <th>Heading</th>
          <th>Heading</th>
          <th>Heading</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Class</td>
          <td className='table-active'>Active</td>
          <td className='table-primary'>Primary</td>
          <td className='table-secondary'>Secondary</td>
          <td className='table-success'>Success</td>
          <td className='table-danger'>Danger</td>
          <td className='table-warning'>Warning</td>
        </tr>
      </tbody>
    </Table>
  </>`,...(ee=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,le,ne;g.parameters={...g.parameters,docs:{...(te=g.parameters)==null?void 0:te.docs,source:{originalSource:`() => <Table>
    <caption>Lista di utenti</caption>
    <thead>
      <tr>
        <th scope='col'>#</th>
        <th scope='col'>First</th>
        <th scope='col'>Last</th>
        <th scope='col'>Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope='row'>1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope='row'>2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope='row'>3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </Table>`,...(ne=(le=g.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var ae,re,ce;w.parameters={...w.parameters,docs:{...(ae=w.parameters)==null?void 0:ae.docs,source:{originalSource:`() => <Table responsive>
    <thead>
      <tr>
        <th scope='col'>#</th>
        <th scope='col'>Intestazione</th>
        <th scope='col'>Intestazione</th>
        <th scope='col'>Intestazione</th>
        <th scope='col'>Intestazione</th>
        <th scope='col'>Intestazione</th>
        <th scope='col'>Intestazione</th>
        <th scope='col'>Intestazione</th>
        <th scope='col'>Intestazione</th>
        <th scope='col'>Intestazione</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope='row'>1</th>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
      </tr>
      <tr>
        <th scope='row'>2</th>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
      </tr>
      <tr>
        <th scope='row'>3</th>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
      </tr>
    </tbody>
  </Table>`,...(ce=(re=w.parameters)==null?void 0:re.docs)==null?void 0:ce.source}}};var oe,de,se;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`() => <>
    <Table responsive size='sm'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Intestazione</th>
          <th scope='col'>Intestazione</th>
          <th scope='col'>Intestazione</th>
          <th scope='col'>Intestazione</th>
          <th scope='col'>Intestazione</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope='row'>1</th>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
        </tr>
        <tr>
          <th scope='row'>2</th>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
        </tr>
        <tr>
          <th scope='row'>3</th>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
        </tr>
      </tbody>
    </Table>

    <Table responsive size='md'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Intestazione</th>
          <th scope='col'>Intestazione</th>
          <th scope='col'>Intestazione</th>
          <th scope='col'>Intestazione</th>
          <th scope='col'>Intestazione</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope='row'>1</th>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
        </tr>
        <tr>
          <th scope='row'>2</th>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
        </tr>
        <tr>
          <th scope='row'>3</th>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
        </tr>
      </tbody>
    </Table>

    <Table responsive size='lg'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Intestazione</th>
          <th scope='col'>Intestazione</th>
          <th scope='col'>Intestazione</th>
          <th scope='col'>Intestazione</th>
          <th scope='col'>Intestazione</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope='row'>1</th>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
        </tr>
        <tr>
          <th scope='row'>2</th>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
        </tr>
        <tr>
          <th scope='row'>3</th>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
        </tr>
      </tbody>
    </Table>

    <Table responsive size='xl'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Intestazione</th>
          <th scope='col'>Intestazione</th>
          <th scope='col'>Intestazione</th>
          <th scope='col'>Intestazione</th>
          <th scope='col'>Intestazione</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope='row'>1</th>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
        </tr>
        <tr>
          <th scope='row'>2</th>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
        </tr>
        <tr>
          <th scope='row'>3</th>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
        </tr>
      </tbody>
    </Table>
  </>`,...(se=(de=y.parameters)==null?void 0:de.docs)==null?void 0:se.source}}};const Ie=["TableBase","TableDark","TableThead","TableStriped","TableBordered","TableBorderless","TableHover","TableCompact","TableContextual","TableCaptions","TableResponsive","TableBreakpoint"],Se=Object.freeze(Object.defineProperty({__proto__:null,TableBase:s,TableBordered:i,TableBorderless:u,TableBreakpoint:y,TableCaptions:g,TableCompact:C,TableContextual:b,TableDark:m,TableHover:p,TableResponsive:w,TableStriped:E,TableThead:h,__namedExportsOrder:Ie,default:ze},Symbol.toStringTag,{value:"Module"}));export{Se as T,s as a,m as b,h as c,E as d,i as e,u as f,p as g,C as h,b as i,g as j,w as k,y as l};
