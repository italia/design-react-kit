const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./react-Dp3Ue3rJ.js","./iframe-BFi4fVCv.js","./preload-helper-BbOs9S9B.js","./iframe-DmyK_xOB.css"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./preload-helper-BbOs9S9B.js";
import { r as reactExports, e } from "./iframe-BFi4fVCv.js";
import { c as clientExports } from "./client-d1NLKp2a.js";
import { H as HeadersMdx, h as AnchorMdx, i as CodeOrSourceMdx, D as Docs } from "./blocks-DcvFQ991.js";
import "./index-D5O9zO1o.js";
import "./jsx-runtime-C3jYCFYn.js";
import "./index-DyLrPIr7.js";
var nodes = /* @__PURE__ */ new Map();
function getIsReactActEnvironment() {
  return globalThis.IS_REACT_ACT_ENVIRONMENT;
}
var WithCallback = ({ callback, children }) => {
  let once = reactExports.useRef();
  return reactExports.useLayoutEffect(() => {
    once.current !== callback && (once.current = callback, callback());
  }, [callback]), children;
};
typeof Promise.withResolvers > "u" && (Promise.withResolvers = () => {
  let resolve = null, reject = null;
  return { promise: new Promise((res, rej) => {
    resolve = res, reject = rej;
  }), resolve, reject };
});
var renderElement = async (node, el, rootOptions) => {
  let root = await getReactRoot(el, rootOptions);
  if (getIsReactActEnvironment()) {
    root.render(node);
    return;
  }
  let { promise, resolve } = Promise.withResolvers();
  return root.render(reactExports.createElement(WithCallback, { callback: resolve }, node)), promise;
}, unmountElement = (el, shouldUseNewRootApi) => {
  let root = nodes.get(el);
  root && (root.unmount(), nodes.delete(el));
}, getReactRoot = async (el, rootOptions) => {
  let root = nodes.get(el);
  return root || (root = clientExports.createRoot(el, rootOptions), nodes.set(el, root)), root;
};
var defaultComponents = { code: CodeOrSourceMdx, a: AnchorMdx, ...HeadersMdx }, ErrorBoundary = class extends reactExports.Component {
  constructor() {
    super(...arguments);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(err) {
    let { showException } = this.props;
    showException(err);
  }
  render() {
    let { hasError } = this.state, { children } = this.props;
    return hasError ? null : e.createElement(e.Fragment, null, children);
  }
}, DocsRenderer = class {
  constructor() {
    this.render = async (context, docsParameter, element) => {
      let components = { ...defaultComponents, ...docsParameter == null ? void 0 : docsParameter.components }, TDocs = Docs;
      return new Promise((resolve, reject) => {
        __vitePreload(async () => {
          const { MDXProvider } = await import("./react-Dp3Ue3rJ.js");
          return { MDXProvider };
        }, true ? __vite__mapDeps([0,1,2,3]) : void 0, import.meta.url).then(({ MDXProvider }) => renderElement(e.createElement(ErrorBoundary, { showException: reject, key: Math.random() }, e.createElement(MDXProvider, { components }, e.createElement(TDocs, { context, docsParameter }))), element)).then(() => resolve());
      });
    }, this.unmount = (element) => {
      unmountElement(element);
    };
  }
};
export {
  DocsRenderer,
  defaultComponents
};
