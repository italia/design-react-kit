import{r as u,R as n}from"./index-BFWcBMrj.js";import{r as vt}from"./index-DKz4l_X4.js";import{B as ve}from"./Button-BvsBu0Bj.js";import{c as gt}from"./index-Bl6ORisp.js";import{I as be}from"./Icon-Dn2FEDq_.js";const tt=u.createContext(void 0);function Nt(){return u.useContext(tt)}const nt=e=>{const t=["top","bottom","right","left"].filter(i=>e==="left"?i!=="right":i!=="left").map(i=>`border${i[0].toUpperCase()+i.substring(1)}`),o={};for(const i of t)o[i]="none";return o};function yt(e){switch(e){case"error":return"it-close-circle";case"info":return"it-info-circle";case"warning":return"it-error";case"success":return"it-check-circle";default:return}}function Et({closeToast:e,toastProps:t,title:o,body:i,options:r}){const l=Nt(),{icon:f,state:p,fix:a,dismissable:N}=r,c=a==null&&l?l:a||l,{autoClose:b,style:v}=t,S=typeof i=="string"?n.createElement("p",null,i):i,C=f||yt(p),R=nt(c),x=gt("notification",p,{[`${c}-fix`]:c,"with-icon":C,dismissable:N||!b}),O={...v,...R,display:"block"};return n.createElement("div",{className:x,style:O},n.createElement("h5",null,o,C?n.createElement(be,{icon:C}):null),S,(!b||N)&&n.createElement(ve,{className:"notification-close",onClick:e},n.createElement(be,{icon:"it-close"}),n.createElement("span",{className:"visually-hidden"},"Chiudi notifica: ",o)))}const ge=(e,t,o,i,r)=>n.createElement(Et,{title:e,body:t,options:o,closeToast:i,toastProps:r});ge.__docgenInfo={description:`Internal use only. Exported for documentation purposes.
@internal`,methods:[],displayName:"createNotification"};function ot(e){var t,o,i="";if(typeof e=="string"||typeof e=="number")i+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(o=ot(e[t]))&&(i&&(i+=" "),i+=o);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function q(){for(var e,t,o=0,i="";o<arguments.length;)(e=arguments[o++])&&(t=ot(e))&&(i&&(i+=" "),i+=t);return i}function j(){return j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e},j.apply(this,arguments)}function Tt(e,t){if(e==null)return{};var o={},i=Object.keys(e),r,l;for(l=0;l<i.length;l++)r=i[l],!(t.indexOf(r)>=0)&&(o[r]=e[r]);return o}function ie(e){return typeof e=="number"&&!isNaN(e)}function K(e){return typeof e=="boolean"}function ae(e){return typeof e=="string"}function w(e){return typeof e=="function"}function re(e){return ae(e)||w(e)?e:null}function ue(e){return e===0||e}function bt(e,t){return e===!1||ie(e)&&e>0?e:t}var it=!!(typeof window<"u"&&window.document&&window.document.createElement);function de(e){return u.isValidElement(e)||ae(e)||w(e)||ie(e)}var at={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},A={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default",DARK:"dark"};function ht(e,t,o){o===void 0&&(o=300);var i=e.scrollHeight,r=e.style;requestAnimationFrame(function(){r.minHeight="initial",r.height=i+"px",r.transition="all "+o+"ms",requestAnimationFrame(function(){r.height="0",r.padding="0",r.margin="0",setTimeout(t,o)})})}function Ne(e){var t=e.enter,o=e.exit,i=e.appendPosition,r=i===void 0?!1:i,l=e.collapse,f=l===void 0?!0:l,p=e.collapseDuration,a=p===void 0?300:p;return function(c){var b=c.children,v=c.position,S=c.preventExitTransition,C=c.done,R=c.nodeRef,x=c.isIn,O=r?t+"--"+v:t,P=r?o+"--"+v:o,_=u.useRef(),d=u.useRef(0);u.useLayoutEffect(function(){g()},[]),u.useEffect(function(){x||(S?s():T())},[x]);function g(){var y=R.current;_.current=y.className,y.className+=" "+O,y.addEventListener("animationend",E)}function E(){var y=R.current;y.removeEventListener("animationend",E),d.current===0&&(y.className=_.current)}function T(){d.current=1;var y=R.current;y.className+=" "+P,y.addEventListener("animationend",s)}function s(){var y=R.current;y.removeEventListener("animationend",s),f?ht(y,C,a):C()}return n.createElement(n.Fragment,null,b)}}var B={list:new Map,emitQueue:new Map,on:function(t,o){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(o),this},off:function(t,o){if(o){var i=this.list.get(t).filter(function(r){return r!==o});return this.list.set(t,i),this}return this.list.delete(t),this},cancelEmit:function(t){var o=this.emitQueue.get(t);return o&&(o.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit:function(t){for(var o=this,i=arguments.length,r=new Array(i>1?i-1:0),l=1;l<i;l++)r[l-1]=arguments[l];this.list.has(t)&&this.list.get(t).forEach(function(f){var p=setTimeout(function(){f.apply(void 0,r)},0);o.emitQueue.has(t)||o.emitQueue.set(t,[]),o.emitQueue.get(t).push(p)})}};function U(e,t){t===void 0&&(t=!1);var o=u.useRef(e);return u.useEffect(function(){t&&(o.current=e)}),o.current}function Ct(e,t){switch(t.type){case 0:return[].concat(e,[t.toastId]).filter(function(o){return o!==t.staleId});case 1:return ue(t.toastId)?e.filter(function(o){return o!==t.toastId}):[]}}function st(e){var t=u.useReducer(function(d){return d+1},0),o=t[1],i=u.useReducer(Ct,[]),r=i[0],l=i[1],f=u.useRef(null),p=U(0),a=U([]),N=U({}),c=U({toastKey:1,displayedToast:0,props:e,containerId:null,isToastActive:b,getToast:function(g){return N[g]||null}});u.useEffect(function(){return c.containerId=e.containerId,B.cancelEmit(3).on(0,x).on(1,function(d){return f.current&&S(d)}).on(5,v).emit(2,c),function(){return B.emit(3,c)}},[]),u.useEffect(function(){c.isToastActive=b,c.displayedToast=r.length,B.emit(4,r.length,e.containerId)},[r]),u.useEffect(function(){c.props=e});function b(d){return r.indexOf(d)!==-1}function v(d){var g=d.containerId,E=c.props.limit;E&&(!g||c.containerId===g)&&(p-=a.length,a=[])}function S(d){l({type:1,toastId:d})}function C(){var d=a.shift(),g=d.toastContent,E=d.toastProps,T=d.staleId;O(g,E,T)}function R(d){var g=d.containerId,E=d.toastId,T=d.updateId;return!!(!f.current||c.props.enableMultiContainer&&g!==c.props.containerId||N[E]&&T==null)}function x(d,g){var E=g.delay,T=g.staleId,s=Tt(g,["delay","staleId"]);if(!(!de(d)||R(s))){var y=s.toastId,h=s.updateId,m=c.props,H=function(){return S(y)},M=s.updateId==null;M&&p++;var L={toastId:y,updateId:h,isIn:!1,key:s.key||c.toastKey++,type:s.type,closeToast:H,closeButton:s.closeButton,rtl:m.rtl,position:s.position||m.position,transition:s.transition||m.transition,className:re(s.className||m.toastClassName),bodyClassName:re(s.bodyClassName||m.bodyClassName),style:s.style||m.toastStyle,bodyStyle:s.bodyStyle||m.bodyStyle,onClick:s.onClick||m.onClick,pauseOnHover:K(s.pauseOnHover)?s.pauseOnHover:m.pauseOnHover,pauseOnFocusLoss:K(s.pauseOnFocusLoss)?s.pauseOnFocusLoss:m.pauseOnFocusLoss,draggable:K(s.draggable)?s.draggable:m.draggable,draggablePercent:ie(s.draggablePercent)?s.draggablePercent:m.draggablePercent,draggableDirection:s.draggableDirection||m.draggableDirection,closeOnClick:K(s.closeOnClick)?s.closeOnClick:m.closeOnClick,progressClassName:re(s.progressClassName||m.progressClassName),progressStyle:s.progressStyle||m.progressStyle,autoClose:bt(s.autoClose,m.autoClose),hideProgressBar:K(s.hideProgressBar)?s.hideProgressBar:m.hideProgressBar,progress:s.progress,role:ae(s.role)?s.role:m.role,deleteToast:function(){P(y)}};w(s.onOpen)&&(L.onOpen=s.onOpen),w(s.onClose)&&(L.onClose=s.onClose),L.draggableDirection==="y"&&L.draggablePercent===80&&(L.draggablePercent*=1.5);var z=m.closeButton;s.closeButton===!1||de(s.closeButton)?z=s.closeButton:s.closeButton===!0&&(z=de(m.closeButton)?m.closeButton:!0),L.closeButton=z;var F=d;u.isValidElement(d)&&!ae(d.type)?F=u.cloneElement(d,{closeToast:H,toastProps:L}):w(d)&&(F=d({closeToast:H,toastProps:L})),m.limit&&m.limit>0&&p>m.limit&&M?a.push({toastContent:F,toastProps:L,staleId:T}):ie(E)&&E>0?setTimeout(function(){O(F,L,T)},E):O(F,L,T)}}function O(d,g,E){var T=g.toastId;E&&delete N[E],N[T]={content:d,props:g},l({type:0,toastId:T,staleId:E})}function P(d){delete N[d];var g=a.length;if(p=ue(d)?p-1:p-c.displayedToast,p<0&&(p=0),g>0){var E=ue(d)?1:c.props.limit;if(g===1||E===1)c.displayedToast++,C();else{var T=E>g?g:E;c.displayedToast=T;for(var s=0;s<T;s++)C()}}else o()}function _(d){for(var g={},E=e.newestOnTop?Object.keys(N).reverse():Object.keys(N),T=0;T<E.length;T++){var s=N[E[T]],y=s.props.position;g[y]||(g[y]=[]),g[y].push(s)}return Object.keys(g).map(function(h){return d(h,g[h])})}return{getToastToRender:_,collection:N,containerRef:f,isToastActive:b}}function he(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function Ce(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function rt(e){var t=u.useState(!0),o=t[0],i=t[1],r=u.useState(!1),l=r[0],f=r[1],p=u.useRef(null),a=U({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null}),N=U(e,!0),c=e.autoClose,b=e.pauseOnHover,v=e.closeToast,S=e.onClick,C=e.closeOnClick;u.useEffect(function(){return w(e.onOpen)&&e.onOpen(u.isValidElement(e.children)&&e.children.props),function(){w(N.onClose)&&N.onClose(u.isValidElement(N.children)&&N.children.props)}},[]),u.useEffect(function(){return e.draggable&&g(),function(){e.draggable&&E()}},[e.draggable]),u.useEffect(function(){return e.pauseOnFocusLoss&&_(),function(){e.pauseOnFocusLoss&&d()}},[e.pauseOnFocusLoss]);function R(h){if(e.draggable){var m=p.current;a.canCloseOnClick=!0,a.canDrag=!0,a.boundingRect=m.getBoundingClientRect(),m.style.transition="",a.x=he(h.nativeEvent),a.y=Ce(h.nativeEvent),e.draggableDirection==="x"?(a.start=a.x,a.removalDistance=m.offsetWidth*(e.draggablePercent/100)):(a.start=a.y,a.removalDistance=m.offsetHeight*(e.draggablePercent/100))}}function x(){if(a.boundingRect){var h=a.boundingRect,m=h.top,H=h.bottom,M=h.left,L=h.right;e.pauseOnHover&&a.x>=M&&a.x<=L&&a.y>=m&&a.y<=H?P():O()}}function O(){i(!0)}function P(){i(!1)}function _(){document.hasFocus()||P(),window.addEventListener("focus",O),window.addEventListener("blur",P)}function d(){window.removeEventListener("focus",O),window.removeEventListener("blur",P)}function g(){document.addEventListener("mousemove",T),document.addEventListener("mouseup",s),document.addEventListener("touchmove",T),document.addEventListener("touchend",s)}function E(){document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",s),document.removeEventListener("touchmove",T),document.removeEventListener("touchend",s)}function T(h){if(a.canDrag){h.preventDefault();var m=p.current;o&&P(),a.x=he(h),a.y=Ce(h),e.draggableDirection==="x"?a.delta=a.x-a.start:a.delta=a.y-a.start,a.start!==a.x&&(a.canCloseOnClick=!1),m.style.transform="translate"+e.draggableDirection+"("+a.delta+"px)",m.style.opacity=""+(1-Math.abs(a.delta/a.removalDistance))}}function s(){var h=p.current;if(a.canDrag){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance){f(!0),e.closeToast();return}h.style.transition="transform 0.2s, opacity 0.2s",h.style.transform="translate"+e.draggableDirection+"(0)",h.style.opacity="1"}}var y={onMouseDown:R,onTouchStart:R,onMouseUp:x,onTouchEnd:x};return c&&b&&(y.onMouseEnter=P,y.onMouseLeave=O),C&&(y.onClick=function(h){S&&S(h),a.canCloseOnClick&&v()}),{playToast:O,pauseToast:P,isRunning:o,preventExitTransition:l,toastRef:p,eventHandlers:y}}function ct(e){var t=e.closeToast,o=e.type,i=e.ariaLabel,r=i===void 0?"close":i;return u.createElement("button",{className:"Toastify__close-button Toastify__close-button--"+o,type:"button",onClick:function(f){f.stopPropagation(),t(f)},"aria-label":r},u.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},u.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function lt(e){var t,o,i=e.delay,r=e.isRunning,l=e.closeToast,f=e.type,p=e.hide,a=e.className,N=e.style,c=e.controlledProgress,b=e.progress,v=e.rtl,S=e.isIn,C=j({},N,{animationDuration:i+"ms",animationPlayState:r?"running":"paused",opacity:p?0:1});c&&(C.transform="scaleX("+b+")");var R=q("Toastify__progress-bar",c?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar--"+f,(t={},t["Toastify__progress-bar--rtl"]=v,t)),x=w(a)?a({rtl:v,type:f,defaultClassName:R}):q(R,a),O=(o={},o[c&&b>=1?"onTransitionEnd":"onAnimationEnd"]=c&&b<1?null:function(){S&&l()},o);return u.createElement("div",Object.assign({role:"progressbar","aria-hidden":p?"true":"false","aria-label":"notification timer",className:x,style:C},O))}lt.defaultProps={type:A.DEFAULT,hide:!1};var xt=function(t){var o,i=rt(t),r=i.isRunning,l=i.preventExitTransition,f=i.toastRef,p=i.eventHandlers,a=t.closeButton,N=t.children,c=t.autoClose,b=t.onClick,v=t.type,S=t.hideProgressBar,C=t.closeToast,R=t.transition,x=t.position,O=t.className,P=t.style,_=t.bodyClassName,d=t.bodyStyle,g=t.progressClassName,E=t.progressStyle,T=t.updateId,s=t.role,y=t.progress,h=t.rtl,m=t.toastId,H=t.deleteToast,M=t.isIn,L=q("Toastify__toast","Toastify__toast--"+v,(o={},o["Toastify__toast--rtl"]=h,o)),z=w(O)?O({rtl:h,position:x,type:v,defaultClassName:L}):q(L,O),F=!!y;function le(Q){if(Q){var Te={closeToast:C,type:v};if(w(Q))return Q(Te);if(u.isValidElement(Q))return u.cloneElement(Q,Te)}}return u.createElement(R,{isIn:M,done:H,position:x,preventExitTransition:l,nodeRef:f},u.createElement("div",Object.assign({id:m,onClick:b,className:z},p,{style:P,ref:f}),u.createElement("div",Object.assign({},M&&{role:s},{className:w(_)?_({type:v}):q("Toastify__toast-body",_),style:d}),N),le(a),(c||F)&&u.createElement(lt,Object.assign({},T&&!F?{key:"pb-"+T}:{},{rtl:h,delay:c,isRunning:r,isIn:M,closeToast:C,hide:S,type:v,style:E,className:g,controlledProgress:F,progress:y}))))},It=Ne({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),dt=function(t){var o=st(t),i=o.getToastToRender,r=o.containerRef,l=o.isToastActive,f=t.className,p=t.style,a=t.rtl,N=t.containerId;function c(b){var v,S=q("Toastify__toast-container","Toastify__toast-container--"+b,(v={},v["Toastify__toast-container--rtl"]=a,v));return w(f)?f({position:b,rtl:a,defaultClassName:S}):q(S,re(f))}return u.createElement("div",{ref:r,className:"Toastify",id:N},i(function(b,v){var S=v.length===0?j({},p,{pointerEvents:"none"}):j({},p);return u.createElement("div",{className:c(b),style:S,key:"container-"+b},v.map(function(C){var R=C.content,x=C.props;return u.createElement(xt,Object.assign({},x,{isIn:l(x.toastId),key:"toast-"+x.key,closeButton:x.closeButton===!0?ct:x.closeButton}),R)}))}))};dt.defaultProps={position:at.TOP_RIGHT,transition:It,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:ct,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert"};var W=new Map,me,oe,ut,fe=[],pe=!1;function Ot(){return W.size>0}function Dt(e,t){var o=t.containerId,i=W.get(o||me);return i?i.getToast(e):null}function mt(){return Math.random().toString(36).substr(2,9)}function St(e){return e&&(ae(e.toastId)||ie(e.toastId))?e.toastId:mt()}function ye(e,t){return Ot()?B.emit(0,e,t):(fe.push({content:e,options:t}),pe&&it&&(pe=!1,oe=document.createElement("div"),document.body.appendChild(oe),vt.render(u.createElement(dt,Object.assign({},ut)),oe))),t.toastId}function ft(e,t){return j({},t,{type:t&&t.type||e,toastId:St(t)})}var se=function(t){return function(o,i){return ye(o,ft(t,i))}},D=function(t,o){return ye(t,ft(A.DEFAULT,o))};D.success=se(A.SUCCESS);D.info=se(A.INFO);D.error=se(A.ERROR);D.warning=se(A.WARNING);D.dark=se(A.DARK);D.warn=D.warning;D.dismiss=function(e){return B.emit(1,e)};D.clearWaitingQueue=function(e){return e===void 0&&(e={}),B.emit(5,e)};D.isActive=function(e){var t=!1;return W.forEach(function(o){o.isToastActive&&o.isToastActive(e)&&(t=!0)}),t};D.update=function(e,t){t===void 0&&(t={}),setTimeout(function(){var o=Dt(e,t);if(o){var i=o.props,r=o.content,l=j({},i,t,{toastId:t.toastId||e,updateId:mt()});l.toastId!==e&&(l.staleId=e);var f=l.render||r;delete l.render,ye(f,l)}},0)};D.done=function(e){D.update(e,{progress:1})};D.onChange=function(e){return w(e)&&B.on(4,e),function(){w(e)&&B.off(4,e)}};D.configure=function(e){e===void 0&&(e={}),pe=!0,ut=e};D.POSITION=at;D.TYPE=A;B.on(2,function(e){me=e.containerId||e,W.set(me,e),fe.forEach(function(t){B.emit(0,t.content,t.options)}),fe=[]}).on(3,function(e){W.delete(e.containerId||e),W.size===0&&B.off(0).off(1).off(5),it&&oe&&document.body.removeChild(oe)});const Rt=Ne({enter:"",exit:""}),pt=e=>{const{toastRef:t,eventHandlers:o}=rt({...e,transition:Rt}),{children:i,autoClose:r,onClick:l,role:f,toastId:p,deleteToast:a,closeToast:N,isIn:c}=e,b={display:c?"block":"none"};return u.useEffect(()=>{c||a()},[c]),u.useEffect(()=>{let v;return r&&(v=setTimeout(()=>N(),r)),()=>{v!=null&&clearTimeout(Number(v))}},[r,N]),n.createElement("div",{id:p,onClick:l,...o,style:b,ref:t,...c&&{role:f}},i)};pt.__docgenInfo={description:"",methods:[],displayName:"Notification",props:{containerId:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},duration:{required:!1,tsType:{name:"number"},description:""},fix:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'right' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'right'"},{name:"literal",value:"'left'"}]},description:""},closeOnClick:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"string"},description:"Indica quale icona affiancare al titolo."},state:{required:!1,tsType:{name:"union",raw:"'success' | 'error' | 'info' | 'warning'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"}]},description:"Lo stato corrente della notifica (modifica il colore delle icone e bordo)"},title:{required:!1,tsType:{name:"string"},description:"Il titolo della notifica"}}};const Lt=Ne({enter:"d-block",exit:"d-none",appendPosition:!1}),ce=e=>{const t={...e.style,...nt(e.fix)},o={autoClose:e.duration??6e3,closeOnClick:e.closeOnClick??!0,hideProgressBar:!0,transition:Lt,rtl:!1,pauseOnHover:!0,pauseOnFocusLoss:!0,newestOnTop:!1,draggable:!1,role:"alert",style:t,enableMultiContainer:e.containerId!=null},{getToastToRender:i,containerRef:r,isToastActive:l}=st(o),{containerId:f,style:p,fix:a}=e;return n.createElement(tt.Provider,{value:a},n.createElement("div",{ref:r,id:f,style:p},i((N,c)=>c.map(({content:b,props:v})=>n.createElement(pt,{...v,isIn:l(v.toastId),key:`notification-${v.key}`},b)))))};ce.__docgenInfo={description:"",methods:[],displayName:"NotificationManager",props:{containerId:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},duration:{required:!1,tsType:{name:"number"},description:""},fix:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'right' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'right'"},{name:"literal",value:"'left'"}]},description:""},closeOnClick:{required:!1,tsType:{name:"boolean"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};function Ee(e,t,o){let i=xe(t)?t:void 0;const r=xe(t)?{...o}:t||{},l=ge(e,i,r),f={...r,autoClose:r.duration};return D(l,f)}function xe(e){return e!=null&&(typeof e=="string"||typeof e=="number"||"type"in e)}Ee.dismiss=e=>D.dismiss(e);const k={right:"auto",bottom:"auto",top:"auto",left:"auto"},wt={title:"Documentazione/Componenti/Notification",component:ce},I=({title:e,state:t,fix:o,dismissable:i,icon:r,style:l,children:f})=>ge(e,f,{state:t,fix:o,icon:r,dismissable:i},()=>{},{autoClose:!1,style:l}),V={render:()=>n.createElement("div",null,n.createElement(ve,{outline:!0,onClick:()=>Ee("Titolo","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…")},"Mostra Notifica"),n.createElement(ce,{containerId:"esempio-base"}))},G={render:()=>n.createElement("div",null,n.createElement(ve,{outline:!0,onClick:()=>Ee("Titolo",n.createElement("p",null,n.createElement("strong",null,"Lorem ipsum")," dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"))},"Mostra Notifica con componente React"),n.createElement(ce,{containerId:"esempio-avanzato"}))},Y={render:()=>n.createElement("div",{className:"container test-docs"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-12 col-md-6 mb-4 mb-md-0"},n.createElement("p",{className:"mb-4"},n.createElement("strong",null,"Notifica standard")),n.createElement(I,{id:"notifica-base",title:"Titolo Notifica",style:k})),n.createElement("div",{className:"col-12 col-md-6"},n.createElement("p",{className:"mb-4"},n.createElement("strong",null,"Notifica con icona")),n.createElement(I,{id:"notifica-base-con-icona",title:"Titolo Notifica",icon:"it-check-circle",style:k}))))},$={render:()=>n.createElement("div",{className:"container test-docs"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-12 col-md-6 mb-4 mb-md-0"},n.createElement("p",{className:"mb-4"},n.createElement("strong",null,"Notifica standard")),n.createElement(I,{title:"Titolo Notifica",style:k,id:"notifica-con-messaggio"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…")),n.createElement("div",{className:"col-12 col-md-6"},n.createElement("p",{className:"mb-4"},n.createElement("strong",null,"Notifica con icona")),n.createElement(I,{title:"Titolo Notifica",state:"success",style:k,id:"notifica-con-messaggio-e-icona"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"))))},X={render:()=>n.createElement("div",{className:"container test-docs"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-12 col-md-6 mb-4 mb-md-0"},n.createElement("p",{className:"mb-4"},n.createElement("strong",null,"Notifica standard")),n.createElement(I,{title:"Titolo Notifica",dismissable:!0,style:k,id:"notifica-base"})),n.createElement("div",{className:"col-12 col-md-6"},n.createElement("p",{className:"mb-4"},n.createElement("strong",null,"Notifica con icona")),n.createElement(I,{title:"Titolo Notifica",state:"success",dismissable:!0,style:k,id:"notifica-avvenuto-con-successo"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"))))},J={render:()=>n.createElement("div",{className:"container test-docs"},n.createElement("div",{className:"row mb-5"},n.createElement("div",{className:"col-12 col-md-6 mb-4 mb-md-0"},n.createElement("p",null,n.createElement("strong",null,"Success")),n.createElement(I,{state:"success",title:"Titolo Notifica",style:k,id:"notifica-con-success-state"})),n.createElement("div",{className:"col-12 col-md-6"},n.createElement("p",null,n.createElement("strong",null,"Error")),n.createElement(I,{state:"error",title:"Titolo Notifica",style:k,id:"notifica-con-error-state"}))),n.createElement("div",{className:"row mb-5"},n.createElement("div",{className:"col-12 col-md-6 mb-4 mb-md-0",style:{top:45}},n.createElement("p",null,n.createElement("strong",null,"Info")),n.createElement(I,{state:"info",title:"Titolo Notifica",style:k,id:"notifica-con-info-state"})),n.createElement("div",{className:"col-12 col-md-6",style:{top:45}},n.createElement("p",null,n.createElement("strong",null,"Warning")),n.createElement(I,{state:"warning",title:"Titolo Notifica",style:k,id:"notifica-con-warning-state"}))))},Z={render:()=>n.createElement("div",{className:"container test-docs"},n.createElement("div",{className:"row mb-5"},n.createElement("div",{className:"col-12 col-md-6 mb-4 mb-md-0"},n.createElement("p",null,n.createElement("strong",null,"Base (4 angoli arrotondati)")),n.createElement(I,{title:"Titolo Notifica",state:"success",style:k,id:"notifica-round-corners"})),n.createElement("div",{className:"col-12 col-md-6"},n.createElement("p",null,n.createElement("strong",null,"top-fix")),n.createElement("div",null,n.createElement(I,{title:"Titolo Notifica",state:"success",fix:"top",id:"notifica-round-corners-top"})),n.createElement("p",{className:"mt-4"},n.createElement("strong",null,"bottom-fix")),n.createElement("div",null,n.createElement(I,{title:"Titolo Notifica",state:"success",fix:"bottom",id:"notifica-round-corners-bottom"})),n.createElement("p",{className:"mt-4"},n.createElement("strong",null,"left-fix")),n.createElement("div",null,n.createElement(I,{title:"Titolo Notifica",state:"success",fix:"left",id:"notifica-round-corners-left"})),n.createElement("p",{className:"mt-4"},n.createElement("strong",null,"right-fix")),n.createElement("div",null,n.createElement(I,{title:"Titolo Notifica",state:"success",fix:"right",id:"notifica-round-corners-right"})))))},ee={render:()=>n.createElement("div",{className:"container test-desktop"},n.createElement(I,{state:"success",title:"Titolo Notifica",id:"notifica"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"))},te={render:()=>n.createElement("div",{className:"container test-desktop"},n.createElement("div",null,n.createElement(I,{title:"Top Fix",fix:"top",state:"success",id:"notifica-fixed-top"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…")),n.createElement("div",null,n.createElement(I,{title:"Left Fix",fix:"left",state:"success",id:"notifica-fixed-left"})),n.createElement("div",null,n.createElement(I,{title:"Right Fix",fix:"right",state:"success",id:"notifica-fixed-right"})),n.createElement("div",null,n.createElement(I,{title:"Bottom Fix",fix:"bottom",state:"success",id:"notifica-fixed-bottom"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…")))},ne=()=>null;var Ie,Oe,De;V.parameters={...V.parameters,docs:{...(Ie=V.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: () => {
    return <div>
        <Button outline onClick={() => notify('Titolo', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…')}>
          Mostra Notifica
        </Button>
        <NotificationManager containerId='esempio-base' />
      </div>;
  }
}`,...(De=(Oe=V.parameters)==null?void 0:Oe.docs)==null?void 0:De.source}}};var Se,Re,Le;G.parameters={...G.parameters,docs:{...(Se=G.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: () => {
    return <div>
        <Button outline onClick={() => notify('Titolo', <p>
                <strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
              </p>)}>
          Mostra Notifica con componente React
        </Button>
        <NotificationManager containerId='esempio-avanzato' />
      </div>;
  }
}`,...(Le=(Re=G.parameters)==null?void 0:Re.docs)==null?void 0:Le.source}}};var we,Pe,ke;Y.parameters={...Y.parameters,docs:{...(we=Y.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => <div className='container test-docs'>
      <div className='row'>
        <div className='col-12 col-md-6 mb-4 mb-md-0'>
          <p className='mb-4'>
            <strong>Notifica standard</strong>
          </p>
          <NotificationDoc id='notifica-base' title='Titolo Notifica' style={NotificationStyle} />
        </div>
        <div className='col-12 col-md-6'>
          <p className='mb-4'>
            <strong>Notifica con icona</strong>
          </p>
          <NotificationDoc id='notifica-base-con-icona' title='Titolo Notifica' icon='it-check-circle' style={NotificationStyle}></NotificationDoc>
        </div>
      </div>
    </div>
}`,...(ke=(Pe=Y.parameters)==null?void 0:Pe.docs)==null?void 0:ke.source}}};var Be,_e,Fe;$.parameters={...$.parameters,docs:{...(Be=$.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: () => <div className='container test-docs'>
      <div className='row'>
        <div className='col-12 col-md-6 mb-4 mb-md-0'>
          <p className='mb-4'>
            <strong>Notifica standard</strong>
          </p>
          <NotificationDoc title='Titolo Notifica' style={NotificationStyle} id='notifica-con-messaggio'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
          </NotificationDoc>
        </div>
        <div className='col-12 col-md-6'>
          <p className='mb-4'>
            <strong>Notifica con icona</strong>
          </p>
          <NotificationDoc title='Titolo Notifica' state='success' style={NotificationStyle} id='notifica-con-messaggio-e-icona'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
          </NotificationDoc>
        </div>
      </div>
    </div>
}`,...(Fe=(_e=$.parameters)==null?void 0:_e.docs)==null?void 0:Fe.source}}};var Me,Ae,He;X.parameters={...X.parameters,docs:{...(Me=X.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  render: () => <div className='container test-docs'>
      <div className='row'>
        <div className='col-12 col-md-6 mb-4 mb-md-0'>
          <p className='mb-4'>
            <strong>Notifica standard</strong>
          </p>
          <NotificationDoc title='Titolo Notifica' dismissable style={NotificationStyle} id='notifica-base' />
        </div>
        <div className='col-12 col-md-6'>
          <p className='mb-4'>
            <strong>Notifica con icona</strong>
          </p>
          <NotificationDoc title='Titolo Notifica' state='success' dismissable style={NotificationStyle} id='notifica-avvenuto-con-successo'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
          </NotificationDoc>
        </div>
      </div>
    </div>
}`,...(He=(Ae=X.parameters)==null?void 0:Ae.docs)==null?void 0:He.source}}};var qe,je,Ue;J.parameters={...J.parameters,docs:{...(qe=J.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  render: () => {
    return <div className='container test-docs'>
        <div className='row mb-5'>
          <div className='col-12 col-md-6 mb-4 mb-md-0'>
            <p>
              <strong>Success</strong>
            </p>
            <NotificationDoc state='success' title='Titolo Notifica' style={NotificationStyle} id='notifica-con-success-state' />
          </div>
          <div className='col-12 col-md-6'>
            <p>
              <strong>Error</strong>
            </p>
            <NotificationDoc state='error' title='Titolo Notifica' style={NotificationStyle} id='notifica-con-error-state' />
          </div>
        </div>
        <div className='row mb-5'>
          <div className='col-12 col-md-6 mb-4 mb-md-0' style={{
          top: 45
        }}>
            <p>
              <strong>Info</strong>
            </p>
            <NotificationDoc state='info' title='Titolo Notifica' style={NotificationStyle} id='notifica-con-info-state' />
          </div>
          <div className='col-12 col-md-6' style={{
          top: 45
        }}>
            <p>
              <strong>Warning</strong>
            </p>
            <NotificationDoc state='warning' title='Titolo Notifica' style={NotificationStyle} id='notifica-con-warning-state' />
          </div>
        </div>
      </div>;
  }
}`,...(Ue=(je=J.parameters)==null?void 0:je.docs)==null?void 0:Ue.source}}};var We,ze,Qe;Z.parameters={...Z.parameters,docs:{...(We=Z.parameters)==null?void 0:We.docs,source:{originalSource:`{
  render: () => {
    return <div className='container test-docs'>
        <div className='row mb-5'>
          <div className='col-12 col-md-6 mb-4 mb-md-0'>
            <p>
              <strong>Base (4 angoli arrotondati)</strong>
            </p>
            <NotificationDoc title='Titolo Notifica' state='success' style={NotificationStyle} id='notifica-round-corners' />
          </div>
          <div className='col-12 col-md-6'>
            <p>
              <strong>top-fix</strong>
            </p>
            <div>
              <NotificationDoc title='Titolo Notifica' state='success' fix='top' id='notifica-round-corners-top' />
            </div>
            <p className='mt-4'>
              <strong>bottom-fix</strong>
            </p>
            <div>
              <NotificationDoc title='Titolo Notifica' state='success' fix='bottom' id='notifica-round-corners-bottom' />
            </div>
            <p className='mt-4'>
              <strong>left-fix</strong>
            </p>
            <div>
              <NotificationDoc title='Titolo Notifica' state='success' fix='left' id='notifica-round-corners-left' />
            </div>
            <p className='mt-4'>
              <strong>right-fix</strong>
            </p>
            <div>
              <NotificationDoc title='Titolo Notifica' state='success' fix='right' id='notifica-round-corners-right' />
            </div>
          </div>
        </div>
      </div>;
  }
}`,...(Qe=(ze=Z.parameters)==null?void 0:ze.docs)==null?void 0:Qe.source}}};var Ke,Ve,Ge;ee.parameters={...ee.parameters,docs:{...(Ke=ee.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  render: () => {
    return <div className='container test-desktop'>
        <NotificationDoc state='success' title='Titolo Notifica' id='notifica'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
        </NotificationDoc>
      </div>;
  }
}`,...(Ge=(Ve=ee.parameters)==null?void 0:Ve.docs)==null?void 0:Ge.source}}};var Ye,$e,Xe;te.parameters={...te.parameters,docs:{...(Ye=te.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  render: () => {
    return <div className='container test-desktop'>
        <div>
          <NotificationDoc title='Top Fix' fix='top' state='success' id='notifica-fixed-top'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
          </NotificationDoc>
        </div>
        <div>
          <NotificationDoc title='Left Fix' fix='left' state='success' id='notifica-fixed-left' />
        </div>
        <div>
          <NotificationDoc title='Right Fix' fix='right' state='success' id='notifica-fixed-right' />
        </div>
        <div>
          <NotificationDoc title='Bottom Fix' fix='bottom' state='success' id='notifica-fixed-bottom'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
          </NotificationDoc>
        </div>
      </div>;
  }
}`,...(Xe=($e=te.parameters)==null?void 0:$e.docs)==null?void 0:Xe.source}}};var Je,Ze,et;ne.parameters={...ne.parameters,docs:{...(Je=ne.parameters)==null?void 0:Je.docs,source:{originalSource:`() => {
  return null;
}`,...(et=(Ze=ne.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};const Pt=["EsempioMinimo","EsempioMinimoComponente","_Example","_NotificationWithMessageStatic","Dismissable","States","_RoundingOfCorners","DefaultLocation","FixedPositions","NotificationOptionsComponent_Fake"],At=Object.freeze(Object.defineProperty({__proto__:null,DefaultLocation:ee,Dismissable:X,EsempioMinimo:V,EsempioMinimoComponente:G,FixedPositions:te,NotificationOptionsComponent_Fake:ne,States:J,_Example:Y,_NotificationWithMessageStatic:$,_RoundingOfCorners:Z,__namedExportsOrder:Pt,default:wt},Symbol.toStringTag,{value:"Module"}));export{X as D,V as E,te as F,At as N,J as S,Y as _,G as a,ce as b,ne as c,$ as d,Z as e,ee as f};
