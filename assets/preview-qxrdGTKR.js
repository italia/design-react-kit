const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./axe-CCuM-UcW.js","./_commonjsHelpers-CcAunmGO.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./iframe-DgllHHqV.js";
import { e as expect3 } from "./index-C_vOVts8.js";
const { addons } = __STORYBOOK_MODULE_PREVIEW_API__;
const { global } = __STORYBOOK_MODULE_GLOBAL__;
var ADDON_ID = "storybook/a11y";
var RESULT = `${ADDON_ID}/result`, REQUEST = `${ADDON_ID}/request`, RUNNING = `${ADDON_ID}/running`, ERROR = `${ADDON_ID}/error`, MANUAL = `${ADDON_ID}/manual`;
var EVENTS = { RESULT, REQUEST, RUNNING, ERROR, MANUAL };
var { document } = global, channel = addons.getChannel(), defaultParameters = { config: {}, options: {} }, disabledRules = ["region"], queue = [], isRunning = false, runNext = async () => {
  if (queue.length === 0) {
    isRunning = false;
    return;
  }
  isRunning = true;
  let next = queue.shift();
  next && await next(), runNext();
}, run = async (input = defaultParameters) => {
  let { default: axe } = await __vitePreload(async () => {
    const { default: axe2 } = await import("./axe-CCuM-UcW.js").then((n) => n.a);
    return { default: axe2 };
  }, true ? __vite__mapDeps([0,1]) : void 0, import.meta.url), { element = "body", config = {}, options = {} } = input, htmlElement = document.querySelector(element) ?? document.body;
  if (!htmlElement) return;
  axe.reset();
  let configWithDefault = { ...config, rules: [...disabledRules.map((id) => ({ id, enabled: false })), ...(config == null ? void 0 : config.rules) ?? []] };
  return axe.configure(configWithDefault), new Promise((resolve, reject) => {
    let task = async () => {
      try {
        let result = await axe.run(htmlElement, options);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    };
    queue.push(task), isRunning || runNext();
  });
};
channel.on(EVENTS.MANUAL, async (storyId, input = defaultParameters) => {
  try {
    let result = await run(input), resultJson = JSON.parse(JSON.stringify(result));
    channel.emit(EVENTS.RESULT, resultJson, storyId);
  } catch (error) {
    channel.emit(EVENTS.ERROR, error);
  }
});
function getIsVitestStandaloneRun() {
  try {
    return false;
  } catch {
    return false;
  }
}
var vitestMatchersExtended = false, experimental_afterEach = async ({ reporting, parameters: parameters2, globals }) => {
  let a11yParameter = parameters2.a11y, a11yGlobals = globals.a11y, shouldRunEnvironmentIndependent = (a11yParameter == null ? void 0 : a11yParameter.manual) !== true && (a11yParameter == null ? void 0 : a11yParameter.disable) !== true && (a11yParameter == null ? void 0 : a11yParameter.test) !== "off" && (a11yGlobals == null ? void 0 : a11yGlobals.manual) !== true, getMode = () => {
    switch (a11yParameter == null ? void 0 : a11yParameter.test) {
      case "todo":
        return "warning";
      case "error":
      default:
        return "failed";
    }
  };
  if (shouldRunEnvironmentIndependent) try {
    let result = await run(a11yParameter);
    if (result) {
      let hasViolations = ((result == null ? void 0 : result.violations.length) ?? 0) > 0;
      if (reporting.addReport({ type: "a11y", version: 1, result, status: hasViolations ? getMode() : "passed" }), getIsVitestStandaloneRun() && hasViolations && getMode() === "failed") {
        if (!vitestMatchersExtended) {
          let { toHaveNoViolations } = await __vitePreload(async () => {
            const { toHaveNoViolations: toHaveNoViolations2 } = await import("./matchers-7Z3WT2CE-slkB5ylZ.js");
            return { toHaveNoViolations: toHaveNoViolations2 };
          }, true ? [] : void 0, import.meta.url);
          expect3.extend({ toHaveNoViolations }), vitestMatchersExtended = true;
        }
        expect3(result).toHaveNoViolations();
      }
    }
  } catch (e) {
    if (reporting.addReport({ type: "a11y", version: 1, result: { error: e }, status: "failed" }), getIsVitestStandaloneRun()) throw e;
  }
}, initialGlobals = { a11y: { manual: false } }, parameters = { a11y: { test: "todo" } };
export {
  experimental_afterEach,
  initialGlobals,
  parameters
};
