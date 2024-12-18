var PARAM_KEY = "viewport";
var modern = { [PARAM_KEY]: { value: void 0, isRotated: false } }, legacy = { viewport: "reset", viewportRotated: false }, initialGlobals = (FEATURES == null ? void 0 : FEATURES.viewportStoryGlobals) ? modern : legacy;
export {
  initialGlobals
};
