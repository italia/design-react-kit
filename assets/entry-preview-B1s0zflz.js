import { R as React, r as reactExports } from "./index-C-_iGYWo.js";
import { u as unmountElement, r as renderElement } from "./react-18-Cuw8iiT_.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./index-ClxGM1EF.js";
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, { get: all[name], enumerable: true });
};
const { global } = __STORYBOOK_MODULE_GLOBAL__;
var entry_preview_exports = {};
__export(entry_preview_exports, { parameters: () => parameters, render: () => render, renderToCanvas: () => renderToCanvas });
var render = (args, context) => {
  let { id, component: Component } = context;
  if (!Component) throw new Error(`Unable to render story ${id} as the component annotation is missing from the default export`);
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
  var _a, _b;
  let content = React.createElement(ErrorBoundary, { showMain, showException }, React.createElement(unboundStoryFn, { ...storyContext })), element = Wrapper ? React.createElement(Wrapper, null, content) : content;
  return forceRemount && unmountElement(canvasElement), await renderElement(element, canvasElement, (_b = (_a = storyContext == null ? void 0 : storyContext.parameters) == null ? void 0 : _a.react) == null ? void 0 : _b.rootOptions), () => unmountElement(canvasElement);
}
var parameters = { renderer: "react" };
export {
  parameters,
  render,
  renderToCanvas
};
