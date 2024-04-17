function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./axe-CI4cxVlJ.js","./_commonjsHelpers-LQfde5yM.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import { _ as __vitePreload } from "./iframe-BrKLlVSK.js";
import "../sb-preview/runtime.js";
const { global } = __STORYBOOK_MODULE_GLOBAL__;
const { addons } = __STORYBOOK_MODULE_PREVIEW_API__;
var ADDON_ID = "storybook/a11y";
var RESULT = `${ADDON_ID}/result`, REQUEST = `${ADDON_ID}/request`, RUNNING = `${ADDON_ID}/running`, ERROR = `${ADDON_ID}/error`, MANUAL = `${ADDON_ID}/manual`, EVENTS = { RESULT, REQUEST, RUNNING, ERROR, MANUAL };
var { document } = global, channel = addons.getChannel(), active = false, activeStoryId, defaultParameters = { config: {}, options: {} }, handleRequest = async (storyId, input = defaultParameters) => {
  (input == null ? void 0 : input.manual) || await run(storyId, input);
}, run = async (storyId, input = defaultParameters) => {
  activeStoryId = storyId;
  try {
    if (!active) {
      active = true, channel.emit(EVENTS.RUNNING);
      let axe = (await __vitePreload(() => import("./axe-CI4cxVlJ.js").then((n) => n.a), true ? __vite__mapDeps([0,1]) : void 0, import.meta.url)).default, { element = "#storybook-root", config, options = {} } = input, htmlElement = document.querySelector(element);
      if (!htmlElement)
        return;
      axe.reset(), config && axe.configure(config);
      let result = await axe.run(htmlElement, options), resultJson = JSON.parse(JSON.stringify(result));
      activeStoryId === storyId ? channel.emit(EVENTS.RESULT, resultJson) : (active = false, run(activeStoryId));
    }
  } catch (error) {
    channel.emit(EVENTS.ERROR, error);
  } finally {
    active = false;
  }
};
channel.on(EVENTS.REQUEST, handleRequest);
channel.on(EVENTS.MANUAL, run);
