import { r as reactExports } from "./iframe-BFi4fVCv.js";
import { c as clientExports } from "./client-d1NLKp2a.js";
import "./preload-helper-BbOs9S9B.js";
import "./index-D5O9zO1o.js";
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
export {
  renderElement,
  unmountElement
};
