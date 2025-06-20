import { i as instrument } from "./index-C_vOVts8.js";
var runStep = instrument({ step: (label, play, context) => play(context) }, { intercept: true }).step, parameters = { throwPlayFunctionExceptions: false };
export {
  parameters,
  runStep
};
