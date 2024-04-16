import { R as React, r as reactExports } from "./index-CQCy530F.js";
import { R as ReactDOM } from "./index-Hv2vTVdx.js";
import "./_commonjsHelpers-LQfde5yM.js";
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var renderElement = async (node, el) => new Promise((resolve) => {
  ReactDOM.render(node, el, () => resolve(null));
}), unmountElement = (el) => {
  ReactDOM.unmountComponentAtNode(el);
};
const { global } = __STORYBOOK_MODULE_GLOBAL__;
var entry_preview_exports = {};
__export(entry_preview_exports, { parameters: () => parameters, render: () => render, renderToCanvas: () => renderToCanvas });
var render = (args, context) => {
  let { id, component: Component } = context;
  if (!Component)
    throw new Error(`Unable to render story ${id} as the component annotation is missing from the default export`);
  return React.createElement(Component, { ...args });
};
var { FRAMEWORK_OPTIONS } = global, ErrorBoundary = class extends reactExports.Component {
  constructor() {
    super(...arguments);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidMount() {
    let { hasError } = this.state, { showMain } = this.props;
    hasError || showMain();
  }
  componentDidCatch(err) {
    let { showException } = this.props;
    showException(err);
  }
  render() {
    let { hasError } = this.state, { children } = this.props;
    return hasError ? null : children;
  }
}, Wrapper = (FRAMEWORK_OPTIONS == null ? void 0 : FRAMEWORK_OPTIONS.strictMode) ? reactExports.StrictMode : reactExports.Fragment;
async function renderToCanvas({ storyContext, unboundStoryFn, showMain, showException, forceRemount }, canvasElement) {
  let content = React.createElement(ErrorBoundary, { showMain, showException }, React.createElement(unboundStoryFn, { ...storyContext })), element = Wrapper ? React.createElement(Wrapper, null, content) : content;
  return forceRemount && unmountElement(canvasElement), await renderElement(element, canvasElement), () => unmountElement(canvasElement);
}
var parameters = { renderer: "react" };
export {
  parameters,
  render,
  renderToCanvas
};
