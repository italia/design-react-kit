const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DocsRenderer-CFRXHY34-BLFUiSpj.js","./chunk-NUUEMKO5-DLwbj6bF.js","./iframe-Blg4YaEd.js","./index-BehpJNG5.js","./_commonjsHelpers-DWwsNxpa.js","./index-BvRgJbWC.js","./index-D7280_ap.js","./jsx-runtime-BKjOVojP.js","./index-DmVNLg0t.js","./index-DJdTjTnu.js","./index-dukjSSyv.js","./index-BdOSk9or.js","./react-18-DS5g-8ln.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./iframe-Blg4YaEd.js";
import "../sb-preview/runtime.js";
var excludeTags = Object.entries(globalThis.TAGS_OPTIONS ?? {}).reduce((acc, entry) => {
  let [tag, option] = entry;
  return option.excludeFromDocsStories && (acc[tag] = true), acc;
}, {}), parameters = { docs: { renderer: async () => {
  let { DocsRenderer } = await __vitePreload(() => import("./DocsRenderer-CFRXHY34-BLFUiSpj.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]) : void 0, import.meta.url);
  return new DocsRenderer();
}, stories: { filter: (story) => {
  var _a;
  return (story.tags || []).filter((tag) => excludeTags[tag]).length === 0 && !((_a = story.parameters.docs) == null ? void 0 : _a.disable);
} } } };
export {
  parameters
};
