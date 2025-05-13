const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DocsRenderer-CFRXHY34-ByNviAOe.js","./iframe-B99PWC6O.js","./index-N7T0HPyM.js","./_commonjsHelpers-CcAunmGO.js","./index-BdnIcMZW.js","./index-DaSoJtbc.js","./jsx-runtime-Dd8filLf.js","./index-_6PbV05F.js","./index-9xAnpW0o.js","./index-BdOSk9or.js","./client-DfJhxb-N.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./iframe-B99PWC6O.js";
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, { get: all[name], enumerable: true });
};
var preview_exports = {};
__export(preview_exports, { parameters: () => parameters });
var excludeTags = Object.entries(globalThis.TAGS_OPTIONS ?? {}).reduce((acc, entry) => {
  let [tag, option] = entry;
  return option.excludeFromDocsStories && (acc[tag] = true), acc;
}, {}), parameters = { docs: { renderer: async () => {
  let { DocsRenderer } = await __vitePreload(() => import("./DocsRenderer-CFRXHY34-ByNviAOe.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]) : void 0, import.meta.url);
  return new DocsRenderer();
}, stories: { filter: (story) => {
  var _a;
  return (story.tags || []).filter((tag) => excludeTags[tag]).length === 0 && !((_a = story.parameters.docs) == null ? void 0 : _a.disable);
} } } };
export {
  parameters
};
