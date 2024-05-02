var _a, _b, _c;
import { R as React } from "./index-CQCy530F.js";
import { c as classNames } from "./index-CpyNLP69.js";
import { C as Card } from "./Card-DwMgcAmL.js";
import { I as Icon } from "./Icon-io8Ds3f9.js";
const Forward = ({ className, scrollToRef, children, testId, ...attributes }) => {
  const classes = classNames(className, "forward");
  return /* @__PURE__ */ React.createElement(
    "a",
    {
      className: classes,
      onClick: () => {
        var _a2;
        return (_a2 = scrollToRef.current) == null ? void 0 : _a2.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      },
      "data-testid": testId,
      ...attributes
    },
    children
  );
};
Forward.__docgenInfo = { "description": "", "methods": [], "displayName": "Forward", "props": { "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente Forward" }, "scrollToRef": { "required": true, "tsType": { "name": "MutableRefObject", "elements": [{ "name": "union", "raw": "Element | null", "elements": [{ "name": "Element" }, { "name": "null" }] }], "raw": "MutableRefObject<Element | null>" }, "description": "Riferimento al nodo a cui scorrere quando premuto" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["AnchorHTMLAttributes"] };
const meta = {
  title: "Documentazione/Menu di navigazione/Forward",
  component: Forward,
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
const EsempiHooks = () => {
  const ref = React.useRef(null);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(Forward, {
    scrollToRef: ref
  }, /* @__PURE__ */ React.createElement(Icon, {
    color: "primary",
    icon: "it-expand"
  }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam. Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit non irure adipisicing aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non minim occaecat. Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do pain. Duis reprehenderit occaecat anim ullamco ad duis occaecat ex."), /* @__PURE__ */ React.createElement("p", null, "Nulla est ullamco ut irure incididunt nothing Lorem Lorem minim irure officia enim reprehenderit. Magna duis labore cillum sint adipisicing exercitation ipsum. Nostrud ut anim non exercitation velit laboris fugiat cupidatat. Commodo esse pain fugiat sint velit ullamco magna consequat voluptate minim amet aliquip ipsum aute laboris nisi. Labore labore veniam irure irure ipsum pariatur mollit magna in cupidatat pain magna irure esse tempor ad mollit. Pain in pain nothing minim amet ipsum officia consectetur amet ullamco voluptate nisi commodo ea sit eu."), /* @__PURE__ */ React.createElement("p", null, "Sint sit mollit irure quis est nostrud cillum consequat Lorem esse do quis dolor esse fugiat sunt do. Eu ex commodo veniam Lorem aliquip laborum occaecat qui Lorem esse mollit pain anim cupidatat. Deserunt officia id Lorem nostrud aute id commodo elit eiusmod enim irure amet eiusmod qui reprehenderit nostrud tempor. Fugiat ipsum excepteur in aliqua non et quis aliquip ad irure in labore cillum elit enim. Consequat aliquip incididunt ipsum et minim laborum laborum laborum et cillum labore. Deserunt adipisicing cillum id nulla minim nostrud labore eiusmod et amet. Laboris consequat consequat commodo non ut non aliquip reprehenderit nulla anim occaecat. Sunt sit ullamco reprehenderit irure ea ullamco Lorem aute nostrud magna."), /* @__PURE__ */ React.createElement("p", null, "Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam. Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit non irure adipisicing aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non minim occaecat. Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do pain. Duis reprehenderit occaecat anim ullamco ad duis occaecat ex."), /* @__PURE__ */ React.createElement("p", null, "Sint sit mollit irure quis est nostrud cillum consequat Lorem esse do quis dolor esse fugiat sunt do. Eu ex commodo veniam Lorem aliquip laborum occaecat qui Lorem esse mollit pain anim cupidatat. Deserunt officia id Lorem nostrud aute id commodo elit eiusmod enim irure amet eiusmod qui reprehenderit nostrud tempor. Fugiat ipsum excepteur in aliqua non et quis aliquip ad irure in labore cillum elit enim. Consequat aliquip incididunt ipsum et minim laborum laborum laborum et cillum labore. Deserunt adipisicing cillum id nulla minim nostrud labore eiusmod et amet. Laboris consequat consequat commodo non ut non aliquip reprehenderit nulla anim occaecat. Sunt sit ullamco reprehenderit irure ea ullamco Lorem aute nostrud magna."), /* @__PURE__ */ React.createElement("p", null, "Nulla est ullamco ut irure incididunt nothing Lorem Lorem minim irure officia enim reprehenderit. Magna duis labore cillum sint adipisicing exercitation ipsum. Nostrud ut anim non exercitation velit laboris fugiat cupidatat. Commodo esse pain fugiat sint velit ullamco magna consequat voluptate minim amet aliquip ipsum aute laboris nisi. Labore labore veniam irure irure ipsum pariatur mollit magna in cupidatat pain magna irure esse tempor ad mollit. Pain in pain nothing minim amet ipsum officia consectetur amet ullamco voluptate nisi commodo ea sit eu.")), /* @__PURE__ */ React.createElement("div", {
    ref
  }, "Scroll to Here"));
};
const Esempi = {
  render: () => {
    return /* @__PURE__ */ React.createElement(EsempiHooks, null);
  }
};
Esempi.parameters = {
  ...Esempi.parameters,
  docs: {
    ...(_a = Esempi.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: () => {\n    return <EsempiHooks />;\n  }\n}",
      ...(_c = (_b = Esempi.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["Esempi"];
const ForwardStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Esempi,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  Esempi as E,
  ForwardStories as F
};
