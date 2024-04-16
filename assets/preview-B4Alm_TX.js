import { d as dedent } from "./index-BdOSk9or.js";
const { useMemo, useEffect } = __STORYBOOK_MODULE_PREVIEW_API__;
const { global } = __STORYBOOK_MODULE_GLOBAL__;
const { logger } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
var PARAM_KEY = "backgrounds";
var { document, window } = global, isReduceMotionEnabled = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches, getBackgroundColorByName = (currentSelectedValue, backgrounds = [], defaultName) => {
  if (currentSelectedValue === "transparent")
    return "transparent";
  if (backgrounds.find((background) => background.value === currentSelectedValue))
    return currentSelectedValue;
  let defaultBackground = backgrounds.find((background) => background.name === defaultName);
  if (defaultBackground)
    return defaultBackground.value;
  if (defaultName) {
    let availableColors = backgrounds.map((background) => background.name).join(", ");
    logger.warn(dedent`
        Backgrounds Addon: could not find the default color "${defaultName}".
        These are the available colors for your story based on your configuration:
        ${availableColors}.
      `);
  }
  return "transparent";
}, clearStyles = (selector) => {
  (Array.isArray(selector) ? selector : [selector]).forEach(clearStyle);
}, clearStyle = (selector) => {
  var _a;
  let element = document.getElementById(selector);
  element && ((_a = element.parentElement) == null ? void 0 : _a.removeChild(element));
}, addGridStyle = (selector, css) => {
  let existingStyle = document.getElementById(selector);
  if (existingStyle)
    existingStyle.innerHTML !== css && (existingStyle.innerHTML = css);
  else {
    let style = document.createElement("style");
    style.setAttribute("id", selector), style.innerHTML = css, document.head.appendChild(style);
  }
}, addBackgroundStyle = (selector, css, storyId) => {
  var _a;
  let existingStyle = document.getElementById(selector);
  if (existingStyle)
    existingStyle.innerHTML !== css && (existingStyle.innerHTML = css);
  else {
    let style = document.createElement("style");
    style.setAttribute("id", selector), style.innerHTML = css;
    let gridStyleSelector = `addon-backgrounds-grid${storyId ? `-docs-${storyId}` : ""}`, existingGridStyle = document.getElementById(gridStyleSelector);
    existingGridStyle ? (_a = existingGridStyle.parentElement) == null ? void 0 : _a.insertBefore(style, existingGridStyle) : document.head.appendChild(style);
  }
};
var withBackground = (StoryFn, context) => {
  var _a;
  let { globals: globals2, parameters: parameters2 } = context, globalsBackgroundColor = (_a = globals2[PARAM_KEY]) == null ? void 0 : _a.value, backgroundsConfig = parameters2[PARAM_KEY], selectedBackgroundColor = useMemo(() => backgroundsConfig.disable ? "transparent" : getBackgroundColorByName(globalsBackgroundColor, backgroundsConfig.values, backgroundsConfig.default), [backgroundsConfig, globalsBackgroundColor]), isActive = useMemo(() => selectedBackgroundColor && selectedBackgroundColor !== "transparent", [selectedBackgroundColor]), selector = context.viewMode === "docs" ? `#anchor--${context.id} .docs-story` : ".sb-show-main", backgroundStyles = useMemo(() => `
      ${selector} {
        background: ${selectedBackgroundColor} !important;
        ${isReduceMotionEnabled() ? "" : "transition: background-color 0.3s;"}
      }
    `, [selectedBackgroundColor, selector]);
  return useEffect(() => {
    let selectorId = context.viewMode === "docs" ? `addon-backgrounds-docs-${context.id}` : "addon-backgrounds-color";
    if (!isActive) {
      clearStyles(selectorId);
      return;
    }
    addBackgroundStyle(selectorId, backgroundStyles, context.viewMode === "docs" ? context.id : null);
  }, [isActive, backgroundStyles, context]), StoryFn();
};
var withGrid = (StoryFn, context) => {
  var _a;
  let { globals: globals2, parameters: parameters2 } = context, gridParameters = parameters2[PARAM_KEY].grid, isActive = ((_a = globals2[PARAM_KEY]) == null ? void 0 : _a.grid) === true && gridParameters.disable !== true, { cellAmount, cellSize, opacity } = gridParameters, isInDocs = context.viewMode === "docs", defaultOffset = parameters2.layout === void 0 || parameters2.layout === "padded" ? 16 : 0, offsetX = gridParameters.offsetX ?? (isInDocs ? 20 : defaultOffset), offsetY = gridParameters.offsetY ?? (isInDocs ? 20 : defaultOffset), gridStyles = useMemo(() => {
    let selector = context.viewMode === "docs" ? `#anchor--${context.id} .docs-story` : ".sb-show-main", backgroundSize = [`${cellSize * cellAmount}px ${cellSize * cellAmount}px`, `${cellSize * cellAmount}px ${cellSize * cellAmount}px`, `${cellSize}px ${cellSize}px`, `${cellSize}px ${cellSize}px`].join(", ");
    return `
      ${selector} {
        background-size: ${backgroundSize} !important;
        background-position: ${offsetX}px ${offsetY}px, ${offsetX}px ${offsetY}px, ${offsetX}px ${offsetY}px, ${offsetX}px ${offsetY}px !important;
        background-blend-mode: difference !important;
        background-image: linear-gradient(rgba(130, 130, 130, ${opacity}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${opacity}) 1px, transparent 1px),
         linear-gradient(rgba(130, 130, 130, ${opacity / 2}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${opacity / 2}) 1px, transparent 1px) !important;
      }
    `;
  }, [cellSize]);
  return useEffect(() => {
    let selectorId = context.viewMode === "docs" ? `addon-backgrounds-grid-docs-${context.id}` : "addon-backgrounds-grid";
    if (!isActive) {
      clearStyles(selectorId);
      return;
    }
    addGridStyle(selectorId, gridStyles);
  }, [isActive, gridStyles, context]), StoryFn();
};
var decorators = [withGrid, withBackground], parameters = { [PARAM_KEY]: { grid: { cellSize: 20, opacity: 0.5, cellAmount: 5 }, values: [{ name: "light", value: "#F8F8F8" }, { name: "dark", value: "#333333" }] } }, globals = { [PARAM_KEY]: null };
export {
  decorators,
  globals,
  parameters
};
