var _a, _b, _c;
import { r as reactExports, e } from "./index-N7T0HPyM.js";
import { R as Row, C as Col } from "./Col-C4Vz86Og.js";
import { I as Icon } from "./Icon-D5Ay-CRR.js";
import { F as FormGroup } from "./FormGroup-CBxBMrzE.js";
import { L as Label } from "./Label-BeB_moJD.js";
import { I as Input } from "./Input-BE3aeYug.js";
import "./track-focus-DbJ2CO43.js";
const TransferContext = reactExports.createContext({
  sourceItems: [],
  targetItems: [],
  sourceCandidates: [],
  targetCandidates: [],
  setSourceItems: () => {
  },
  setTargetItems: () => {
  },
  setSourceCandidates: () => {
  },
  setTargetCandidates: () => {
  },
  isChanged: false,
  reset: () => {
  }
});
const useTransferContext = () => reactExports.useContext(TransferContext);
const TransferContextProvider = ({ children }) => {
  const [sourceItems, setSourceItems] = reactExports.useState([]);
  const [targetItems, setTargetItems] = reactExports.useState([]);
  const [sourceCandidates, setSourceCandidates] = reactExports.useState([]);
  const [targetCandidates, setTargetCandidates] = reactExports.useState([]);
  const [originalSourceItems, setOriginalSourceItems] = reactExports.useState([]);
  const [originalTargetItems, setOriginalTargetItems] = reactExports.useState([]);
  const value = reactExports.useMemo(
    () => ({
      sourceCandidates,
      targetCandidates,
      sourceItems,
      targetItems,
      setSourceItems: ({
        items,
        setOriginals
      }) => {
        setSourceItems(items);
        if (setOriginals) {
          setOriginalSourceItems(items);
        }
      },
      setTargetItems: ({
        items,
        setOriginals
      }) => {
        setTargetItems(items);
        if (setOriginals) {
          setOriginalTargetItems(items);
        }
      },
      setSourceCandidates,
      setTargetCandidates,
      reset: () => {
        setSourceItems(originalSourceItems);
        setTargetItems(originalTargetItems);
        setSourceCandidates([]);
        setTargetCandidates([]);
      },
      isChanged: JSON.stringify(sourceItems) !== JSON.stringify(originalSourceItems) || JSON.stringify(targetItems) !== JSON.stringify(originalTargetItems)
    }),
    [sourceItems, targetItems, sourceCandidates, targetCandidates, originalSourceItems, originalTargetItems]
  );
  return /* @__PURE__ */ e.createElement(TransferContext.Provider, { value }, children);
};
const useTransfer = () => {
  const { sourceItems, targetItems, sourceCandidates, targetCandidates } = useTransferContext();
  return {
    source: sourceItems.map((item) => {
      return { ...item, checked: sourceCandidates.includes(item.id) };
    }),
    target: targetItems.map((item) => {
      return { ...item, checked: targetCandidates.includes(item.id) };
    })
  };
};
TransferContextProvider.__docgenInfo = { "description": "", "methods": [], "displayName": "TransferContextProvider", "props": { "children": { "required": true, "tsType": { "name": "ReactReactNode", "raw": "React.ReactNode" }, "description": "" } } };
const BacktransferButton = () => {
  const { targetCandidates, sourceItems, targetItems, setSourceItems, setTargetItems, setTargetCandidates } = useTransferContext();
  const handleTransfer = (e2) => {
    e2.preventDefault();
    const newTargetItems = targetItems.filter((item) => !targetCandidates.includes(item.id));
    const newSourceItems = sourceItems.concat(targetItems.filter((item) => targetCandidates.includes(item.id)));
    setSourceItems({ items: newSourceItems });
    setTargetItems({ items: newTargetItems });
    setTargetCandidates([]);
  };
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
    "a",
    {
      className: `backtransfer ${targetCandidates.length > 0 ? "active" : ""}`,
      href: "#",
      role: "button",
      "aria-label": "Sposta indietro",
      onClick: handleTransfer,
      "data-testid": "backtransfer-button"
    },
    /* @__PURE__ */ e.createElement(Icon, { icon: "it-arrow-left" })
  ), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Etichetta per freccia sinistra"));
};
BacktransferButton.__docgenInfo = { "description": "", "methods": [], "displayName": "BacktransferButton" };
const Item = ({ id, children }) => {
  return /* @__PURE__ */ e.createElement(e.Fragment, null, id, " - ", children);
};
const InternalItem = ({
  id,
  checked,
  children,
  onChange
}) => {
  return /* @__PURE__ */ e.createElement(FormGroup, { check: true }, /* @__PURE__ */ e.createElement(Input, { checked, onChange, id, type: "checkbox" }), /* @__PURE__ */ e.createElement(Label, { for: id, check: true }, children));
};
InternalItem.__docgenInfo = { "description": "", "methods": [], "displayName": "InternalItem", "props": { "id": { "required": true, "tsType": { "name": "string" }, "description": "" }, "checked": { "required": false, "tsType": { "name": "boolean" }, "description": "" }, "children": { "required": true, "tsType": { "name": "ReactReactNode", "raw": "React.ReactNode" }, "description": "" }, "onChange": { "required": false, "tsType": { "name": "ReactChangeEventHandler", "raw": "React.ChangeEventHandler<HTMLInputElement>", "elements": [{ "name": "HTMLInputElement" }] }, "description": "" } } };
Item.__docgenInfo = { "description": "", "methods": [], "displayName": "Item", "props": { "id": { "required": true, "tsType": { "name": "string" }, "description": "" }, "children": { "required": true, "tsType": { "name": "ReactReactNode", "raw": "React.ReactNode" }, "description": "" } } };
const ResetButton = () => {
  const { reset, isChanged } = useTransferContext();
  const handleReset = (e2) => {
    e2.preventDefault();
    reset();
  };
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
    "a",
    {
      className: `reset ${isChanged ? "active" : ""}`,
      href: "#",
      role: "button",
      "aria-label": "Reset",
      onClick: handleReset,
      "data-testid": "reset-button"
    },
    /* @__PURE__ */ e.createElement(Icon, { icon: "it-restore" })
  ), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Etichetta per icona di reset"));
};
ResetButton.__docgenInfo = { "description": "", "methods": [], "displayName": "ResetButton" };
const SelectAllCheckbox = ({
  className,
  description,
  checked,
  id,
  onChange,
  children
}) => {
  return /* @__PURE__ */ e.createElement(FormGroup, { check: true }, /* @__PURE__ */ e.createElement(Input, { className, checked, onChange, id, type: "checkbox" }), /* @__PURE__ */ e.createElement(Label, { for: id, check: true }, children, description && /* @__PURE__ */ e.createElement("span", { className: "descr" }, description)));
};
SelectAllCheckbox.__docgenInfo = { "description": "", "methods": [], "displayName": "SelectAllCheckbox", "props": { "className": { "required": false, "tsType": { "name": "string" }, "description": "" }, "id": { "required": true, "tsType": { "name": "string" }, "description": "" }, "checked": { "required": false, "tsType": { "name": "boolean" }, "description": "" }, "onChange": { "required": true, "tsType": { "name": "ReactChangeEventHandler", "raw": "React.ChangeEventHandler<HTMLInputElement>", "elements": [{ "name": "HTMLInputElement" }] }, "description": "" }, "children": { "required": true, "tsType": { "name": "ReactReactNode", "raw": "React.ReactNode" }, "description": "" }, "description": { "required": false, "tsType": { "name": "string" }, "description": "" } } };
const SourceItem = ({ id, children }) => {
  const { sourceCandidates, setSourceCandidates } = useTransferContext();
  const handleChange = (e2) => {
    if (e2.target.checked) {
      setSourceCandidates([.../* @__PURE__ */ new Set([...sourceCandidates, e2.target.id])]);
    } else {
      setSourceCandidates(sourceCandidates.filter((item) => item !== e2.target.id));
    }
  };
  const isChecked = sourceCandidates.includes(id);
  return /* @__PURE__ */ e.createElement(InternalItem, { checked: isChecked, id, onChange: handleChange }, children);
};
const Source = ({ children }) => {
  var _a2;
  const { sourceItems, setSourceItems } = useTransferContext();
  const otherComponents = [];
  const childrenSource = (_a2 = e.Children.map(children, (child) => {
    if (e.isValidElement(child) && child.type === Item) {
      const { id, children: children2 } = child.props;
      return { id, content: children2 };
    }
    otherComponents.push(child);
    return null;
  })) == null ? void 0 : _a2.filter((item) => item !== null);
  reactExports.useEffect(() => {
    if (!childrenSource) return;
    setSourceItems({ items: childrenSource, setOriginals: true });
  }, []);
  return /* @__PURE__ */ e.createElement("div", { className: "it-transfer-wrapper source", "data-testid": "transfer-source" }, otherComponents, sourceItems.map(({ id, content }) => /* @__PURE__ */ e.createElement(SourceItem, { key: id, id }, content)), /* @__PURE__ */ e.createElement("br", null));
};
Source.Header = ({ children }) => {
  const { sourceItems, sourceCandidates, setSourceCandidates } = useTransferContext();
  const getStatus = () => {
    if (sourceCandidates.length === 0) {
      return { checked: false };
    }
    if (sourceItems.every((item) => sourceCandidates.includes(item.id))) {
      return { checked: true };
    }
    return { checked: false, className: "semi-checked" };
  };
  return /* @__PURE__ */ e.createElement("div", { className: "transfer-header", "data-testid": "transfer-source-header" }, /* @__PURE__ */ e.createElement(
    SelectAllCheckbox,
    {
      ...getStatus(),
      onChange: (e2) => {
        if (e2.target.checked) {
          setSourceCandidates([...new Set(sourceItems.map((item) => item.id))]);
        } else {
          setSourceCandidates([]);
        }
      },
      id: "transfer-source-header",
      description: children ? "Source" : void 0
    },
    children ? children : "Source"
  ));
};
Source.__docgenInfo = { "description": "", "methods": [{ "name": "Header", "docblock": null, "modifiers": ["static"], "params": [{ "name": "{ children }: { children?: React.ReactNode }", "optional": false, "type": { "name": "signature", "type": "object", "raw": "{ children?: React.ReactNode }", "signature": { "properties": [{ "key": "children", "value": { "name": "ReactReactNode", "raw": "React.ReactNode", "required": false } }] } } }], "returns": null }], "displayName": "Source" };
const TargetItem = ({ id, children }) => {
  const { targetCandidates, setTargetCandidates } = useTransferContext();
  const handleChange = (e2) => {
    if (e2.target.checked) {
      setTargetCandidates([.../* @__PURE__ */ new Set([...targetCandidates, e2.target.id])]);
    } else {
      setTargetCandidates(targetCandidates.filter((item) => item !== e2.target.id));
    }
  };
  const isChecked = targetCandidates.includes(id);
  return /* @__PURE__ */ e.createElement(InternalItem, { checked: isChecked, id, onChange: handleChange }, children);
};
const Target = ({ children }) => {
  var _a2;
  const { targetItems, setTargetItems } = useTransferContext();
  const otherComponents = [];
  const childrenTarget = (_a2 = e.Children.map(children, (child) => {
    if (e.isValidElement(child) && child.type === Item) {
      const { id, children: children2 } = child.props;
      return { id, content: children2 };
    }
    otherComponents.push(child);
    return null;
  })) == null ? void 0 : _a2.filter((item) => item !== null);
  reactExports.useEffect(() => {
    if (!childrenTarget) return;
    setTargetItems({ items: childrenTarget, setOriginals: true });
  }, []);
  return /* @__PURE__ */ e.createElement("div", { className: "it-transfer-wrapper target", "data-testid": "transfer-target" }, otherComponents, targetItems.map(({ id, content }) => /* @__PURE__ */ e.createElement(TargetItem, { key: id, id }, content)));
};
Target.Header = ({ children }) => {
  const { targetItems, targetCandidates, setTargetCandidates } = useTransferContext();
  const getStatus = () => {
    if (targetCandidates.length === 0) {
      return { checked: false };
    }
    if (targetItems.every((item) => targetCandidates.includes(item.id))) {
      return { checked: true };
    }
    return { checked: false, className: "semi-checked" };
  };
  return /* @__PURE__ */ e.createElement("div", { className: "transfer-header", "data-testid": "transfer-target-header" }, /* @__PURE__ */ e.createElement(
    SelectAllCheckbox,
    {
      ...getStatus(),
      onChange: (e2) => {
        if (e2.target.checked) {
          setTargetCandidates([...new Set(targetItems.map((item) => item.id))]);
        } else {
          setTargetCandidates([]);
        }
      },
      id: "transfer-target-header",
      description: children ? "Target" : void 0
    },
    children ? children : "Target"
  ));
};
Target.__docgenInfo = { "description": "", "methods": [{ "name": "Header", "docblock": null, "modifiers": ["static"], "params": [{ "name": "{ children }: { children?: React.ReactNode }", "optional": false, "type": { "name": "signature", "type": "object", "raw": "{ children?: React.ReactNode }", "signature": { "properties": [{ "key": "children", "value": { "name": "ReactReactNode", "raw": "React.ReactNode", "required": false } }] } } }], "returns": null }], "displayName": "Target" };
const TransferButton = () => {
  const { sourceCandidates, sourceItems, targetItems, setSourceItems, setTargetItems, setSourceCandidates } = useTransferContext();
  const handleTransfer = (e2) => {
    e2.preventDefault();
    const newSourceItems = sourceItems.filter((item) => !sourceCandidates.includes(item.id));
    const newTargetItems = targetItems.concat(sourceItems.filter((item) => sourceCandidates.includes(item.id)));
    setSourceItems({ items: newSourceItems });
    setTargetItems({ items: newTargetItems });
    setSourceCandidates([]);
  };
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
    "a",
    {
      "data-testid": "transfer-button",
      className: `transfer ${sourceCandidates.length > 0 ? "active" : ""}`,
      href: "#",
      role: "button",
      "aria-label": "Sposta avanti",
      onClick: handleTransfer
    },
    /* @__PURE__ */ e.createElement(Icon, { icon: "it-arrow-right" })
  ), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Etichetta per freccia destra"));
};
TransferButton.__docgenInfo = { "description": "", "methods": [], "displayName": "TransferButton" };
const Transfer = ({ children }) => {
  return /* @__PURE__ */ e.createElement(TransferContextProvider, null, /* @__PURE__ */ e.createElement("div", { "data-testid": "test-id-transfer" }, children));
};
Transfer.Source = Source;
Transfer.Target = Target;
Transfer.Item = Item;
Transfer.TransferButton = TransferButton;
Transfer.BacktransferButton = BacktransferButton;
Transfer.ResetButton = ResetButton;
Transfer.useTransfer = useTransfer;
Transfer.__docgenInfo = { "description": "", "methods": [{ "name": "Source", "docblock": null, "modifiers": ["static"], "params": [{ "name": "{ children }", "optional": false, "type": null }], "returns": null }, { "name": "Target", "docblock": null, "modifiers": ["static"], "params": [{ "name": "{ children }", "optional": false, "type": null }], "returns": null }, { "name": "Item", "docblock": null, "modifiers": ["static"], "params": [{ "name": "{ id, children }: { id: string; children: React.ReactNode }", "optional": false, "type": { "name": "signature", "type": "object", "raw": "{ id: string; children: React.ReactNode }", "signature": { "properties": [{ "key": "id", "value": { "name": "string", "required": true } }, { "key": "children", "value": { "name": "ReactReactNode", "raw": "React.ReactNode", "required": true } }] } } }], "returns": null }, { "name": "TransferButton", "docblock": null, "modifiers": ["static"], "params": [], "returns": null }, { "name": "BacktransferButton", "docblock": null, "modifiers": ["static"], "params": [], "returns": null }, { "name": "ResetButton", "docblock": null, "modifiers": ["static"], "params": [], "returns": null }, { "name": "useTransfer", "docblock": null, "modifiers": ["static"], "params": [], "returns": null }], "displayName": "Transfer", "props": { "children": { "required": true, "tsType": { "name": "ReactReactNode", "raw": "React.ReactNode" }, "description": "" } } };
const meta = {
  title: "Documentazione/Form/Transfer",
  component: Transfer
};
const SourceHeader = () => {
  const {
    source
  } = Transfer.useTransfer();
  const selected = source.filter((item) => item.checked).length;
  return /* @__PURE__ */ e.createElement(Transfer.Source.Header, null, selected, " ITEMS");
};
const TargetHeader = () => {
  const {
    target
  } = Transfer.useTransfer();
  const selected = target.filter((item) => item.checked).length;
  return /* @__PURE__ */ e.createElement(Transfer.Target.Header, null, selected, " ITEMS");
};
const Base = {
  render: () => /* @__PURE__ */ e.createElement(Transfer, null, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, null, /* @__PURE__ */ e.createElement(Transfer.Source, null, /* @__PURE__ */ e.createElement(SourceHeader, null), /* @__PURE__ */ e.createElement(Transfer.Item, { id: "checkbox1" }, "List item 1"), /* @__PURE__ */ e.createElement(Transfer.Item, { id: "checkbox2" }, "List item 2"), /* @__PURE__ */ e.createElement(Transfer.Item, { id: "checkbox3" }, "List item 3"), /* @__PURE__ */ e.createElement(Transfer.Item, { id: "checkbox4" }, "List item 4"), /* @__PURE__ */ e.createElement(Transfer.Item, { id: "checkbox5" }, "List item 5"), /* @__PURE__ */ e.createElement(Transfer.Item, { id: "checkbox6" }, "List item 6"))), /* @__PURE__ */ e.createElement(Col, null, /* @__PURE__ */ e.createElement("div", { className: "it-transfer-buttons" }, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, null, /* @__PURE__ */ e.createElement(Transfer.TransferButton, null))), /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, null, /* @__PURE__ */ e.createElement(Transfer.BacktransferButton, null))), /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, null, /* @__PURE__ */ e.createElement(Transfer.ResetButton, null))))), /* @__PURE__ */ e.createElement(Col, null, /* @__PURE__ */ e.createElement(Transfer.Target, null, /* @__PURE__ */ e.createElement(TargetHeader, null), /* @__PURE__ */ e.createElement(Transfer.Item, { id: "checkbox7" }, "List item 7"), /* @__PURE__ */ e.createElement(Transfer.Item, { id: "checkbox8" }, "List item 8"), /* @__PURE__ */ e.createElement(Transfer.Item, { id: "checkbox9" }, "List item 9"), /* @__PURE__ */ e.createElement(Transfer.Item, { id: "checkbox10" }, "List item 10"), /* @__PURE__ */ e.createElement(Transfer.Item, { id: "checkbox11" }, "List item 11"), /* @__PURE__ */ e.createElement(Transfer.Item, { id: "checkbox12" }, "List item 12")))))
};
Base.parameters = {
  ...Base.parameters,
  docs: {
    ...(_a = Base.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: () => <Transfer>\n      <Row>\n        <Col>\n          <Transfer.Source>\n            <SourceHeader />\n            <Transfer.Item id='checkbox1'>List item 1</Transfer.Item>\n            <Transfer.Item id='checkbox2'>List item 2</Transfer.Item>\n            <Transfer.Item id='checkbox3'>List item 3</Transfer.Item>\n            <Transfer.Item id='checkbox4'>List item 4</Transfer.Item>\n            <Transfer.Item id='checkbox5'>List item 5</Transfer.Item>\n            <Transfer.Item id='checkbox6'>List item 6</Transfer.Item>\n          </Transfer.Source>\n        </Col>\n        <Col>\n          <div className='it-transfer-buttons'>\n            <Row>\n              <Col>\n                <Transfer.TransferButton />\n              </Col>\n            </Row>\n            <Row>\n              <Col>\n                <Transfer.BacktransferButton />\n              </Col>\n            </Row>\n            <Row>\n              <Col>\n                <Transfer.ResetButton />\n              </Col>\n            </Row>\n          </div>\n        </Col>\n        <Col>\n          <Transfer.Target>\n            <TargetHeader />\n            <Transfer.Item id='checkbox7'>List item 7</Transfer.Item>\n            <Transfer.Item id='checkbox8'>List item 8</Transfer.Item>\n            <Transfer.Item id='checkbox9'>List item 9</Transfer.Item>\n            <Transfer.Item id='checkbox10'>List item 10</Transfer.Item>\n            <Transfer.Item id='checkbox11'>List item 11</Transfer.Item>\n            <Transfer.Item id='checkbox12'>List item 12</Transfer.Item>\n          </Transfer.Target>\n        </Col>\n      </Row>\n    </Transfer>\n}",
      ...(_c = (_b = Base.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["Base"];
const TransferStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Base,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  Base as B,
  TransferStories as T
};
