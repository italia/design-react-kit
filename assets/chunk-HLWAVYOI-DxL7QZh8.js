function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index-BtoTqJlz.js","./index-BFWcBMrj.js","./_commonjsHelpers-BosuxZz1.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as l}from"./iframe-d7HZv50p.js";import{R as t,r as p}from"./index-BFWcBMrj.js";import{R as o}from"./index-DKz4l_X4.js";import{g as u,h,H as d,D as E}from"./index-DQ1boyZV.js";var D=async(e,r)=>new Promise(n=>{o.render(e,r,()=>n(null))}),x=e=>{o.unmountComponentAtNode(e)},_={code:u,a:h,...d},R=class extends p.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:r}=this.props;r(e)}render(){let{hasError:e}=this.state,{children:r}=this.props;return e?null:t.createElement(t.Fragment,null,r)}},g=class{constructor(){this.render=async(e,r,n)=>{let s={..._,...r==null?void 0:r.components},a=E;return new Promise((m,c)=>{l(()=>import("./index-BtoTqJlz.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(({MDXProvider:i})=>D(t.createElement(R,{showException:c,key:Math.random()},t.createElement(i,{components:s},t.createElement(a,{context:e,docsParameter:r}))),n)).then(()=>m())})},this.unmount=e=>{x(e)}}};export{g as D,_ as d};
