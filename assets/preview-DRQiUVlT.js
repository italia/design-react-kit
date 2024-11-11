const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DocsRenderer-K4EAMTCU-1kNMcPS9.js","./chunk-HLWAVYOI-DyEaVEsi.js","./iframe-D6ES2N_w.js","./index-C-_iGYWo.js","./_commonjsHelpers-CcAunmGO.js","./react-18-Cuw8iiT_.js","./index-ClxGM1EF.js","./index-xkeXP2rK.js","./index-CClgydmT.js","./jsx-runtime-BRc-Ic4i.js","./index-DLlB04eo.js","./inheritsLoose-DBHupcN5.js","./index-CX88d7aO.js","./index-BdOSk9or.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./iframe-D6ES2N_w.js";
import "../sb-preview/runtime.js";
const { global } = __STORYBOOK_MODULE_GLOBAL__;
var excludeTags = Object.entries(global.TAGS_OPTIONS ?? {}).reduce((acc, entry) => {
  let [tag, option] = entry;
  return option.excludeFromDocsStories && (acc[tag] = true), acc;
}, {}), parameters = { docs: { renderer: async () => {
  let { DocsRenderer } = await __vitePreload(() => import("./DocsRenderer-K4EAMTCU-1kNMcPS9.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]) : void 0, import.meta.url);
  return new DocsRenderer();
}, stories: { filter: (story) => {
  var _a;
  return (story.tags || []).filter((tag) => excludeTags[tag]).length === 0 && !((_a = story.parameters.docs) == null ? void 0 : _a.disable);
} } } };
export {
  parameters
};
