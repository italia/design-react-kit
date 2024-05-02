const __vite__fileDeps=["./DocsRenderer-K4EAMTCU-CFH2Pm_e.js","./chunk-HLWAVYOI-_aHCoE2Z.js","./iframe-ADcXWQ_9.js","./index-CQCy530F.js","./_commonjsHelpers-LQfde5yM.js","./index-Hv2vTVdx.js","./index-B6OeFasa.js","./index-DTvnAYOg.js","./index-CTx2sqk_.js","./inheritsLoose-HEqISCW8.js","./index-MBEdkwGi.js","./index-BdOSk9or.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import { _ as __vitePreload } from "./iframe-ADcXWQ_9.js";
import "../sb-preview/runtime.js";
const { global } = __STORYBOOK_MODULE_GLOBAL__;
var excludeTags = Object.entries(global.TAGS_OPTIONS ?? {}).reduce((acc, entry) => {
  let [tag, option] = entry;
  return option.excludeFromDocsStories && (acc[tag] = true), acc;
}, {}), parameters = { docs: { renderer: async () => {
  let { DocsRenderer } = await __vitePreload(() => import("./DocsRenderer-K4EAMTCU-CFH2Pm_e.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url);
  return new DocsRenderer();
}, stories: { filter: (story) => {
  var _a;
  return (story.tags || []).filter((tag) => excludeTags[tag]).length === 0 && !((_a = story.parameters.docs) == null ? void 0 : _a.disable);
} } } };
export {
  parameters
};
