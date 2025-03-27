var _a, _b, _c, _d, _e, _f, _g, _h, _i;
import { e } from "./index-N7T0HPyM.js";
import { m as mapToCssModules, P as PropTypes, t as tagPropType } from "./utils-Cn8VSNph.js";
import { c as classNames } from "./index-xoeSAV6i.js";
import { D as Dropdown, a as DropdownToggle } from "./DropdownToggle-DSMAQlgK.js";
import { D as DropdownMenu } from "./DropdownMenu-CHVBdGUY.js";
import { L as LinkList, a as LinkListItem } from "./LinkListItem-D-pDHaAX.js";
import "./track-focus-DbJ2CO43.js";
var _excluded = ["className", "cssModule", "size", "vertical", "tag"];
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var propTypes = {
  /** Aria label */
  "aria-label": PropTypes.string,
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** In order for assistive technologies (such as screen readers) to convey that a series of buttons is grouped, an appropriate role attribute needs to be provided. For button groups, this would be role="group", while toolbars should have a role="toolbar". */
  role: PropTypes.string,
  /** Make the button bigger or smaller */
  size: PropTypes.string,
  /** Set a custom element for this component */
  tag: tagPropType,
  /** Make button group vertical */
  vertical: PropTypes.bool
};
function ButtonGroup(props) {
  var className = props.className, cssModule = props.cssModule, size = props.size, vertical = props.vertical, _props$tag = props.tag, Tag = _props$tag === void 0 ? "div" : _props$tag, attributes = _objectWithoutProperties(props, _excluded);
  var classes = mapToCssModules(classNames(className, size ? "btn-group-" + size : false, vertical ? "btn-group-vertical" : "btn-group"), cssModule);
  return /* @__PURE__ */ e.createElement(Tag, _extends({}, _objectSpread({
    role: "group"
  }, attributes), {
    className: classes
  }));
}
ButtonGroup.propTypes = propTypes;
const meta = {
  title: "Documentazione/Componenti/Dropdown",
  component: Dropdown,
  parameters: {
    docs: {
      story: {
        height: "225px"
      }
    }
  }
};
const _VarianteBottoni = {
  render: () => {
    return /* @__PURE__ */ e.createElement(ButtonGroup, { className: "d-flex justify-content-around" }, /* @__PURE__ */ e.createElement(Dropdown, null, /* @__PURE__ */ e.createElement(DropdownToggle, { color: "primary", caret: true }, "Apri dropdown"), /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true }, "Azione 1"), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true }, "Azione 2"), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true }, "Azione 3")))), /* @__PURE__ */ e.createElement(Dropdown, null, /* @__PURE__ */ e.createElement(DropdownToggle, { color: "secondary", caret: true }, "Apri dropdown"), /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true }, "Azione 1"), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true }, "Azione 2"), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true }, "Azione 3")))), /* @__PURE__ */ e.createElement(Dropdown, null, /* @__PURE__ */ e.createElement(DropdownToggle, { color: "danger", caret: true }, "Apri dropdown"), /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 1"), /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 2"), /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 3")))));
  },
  //Aggiungo del margine alla storia così da visualizzare il bordo onClick correttamente
  decorators: [(Story) => /* @__PURE__ */ e.createElement("div", { className: "m-2" }, /* @__PURE__ */ e.createElement(Story, null))]
};
const _Esempi = {
  render: () => {
    return /* @__PURE__ */ e.createElement("section", null, /* @__PURE__ */ e.createElement(Dropdown, { className: "me-3" }, /* @__PURE__ */ e.createElement(DropdownToggle, { color: "primary", caret: true }, "Apri dropdown"), /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true }, "Azione 1"), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true }, "Azione 2"), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true }, "Azione 3")))));
  },
  parameters: {
    layout: "centered"
  },
  //Aggiungo del margine alla storia così da visualizzare il bordo onClick correttamente
  decorators: [(Story) => /* @__PURE__ */ e.createElement("div", { className: "m-2" }, /* @__PURE__ */ e.createElement(Story, null))]
};
const _Link = {
  render: () => {
    return /* @__PURE__ */ e.createElement("section", null, /* @__PURE__ */ e.createElement(Dropdown, { className: "me-3" }, /* @__PURE__ */ e.createElement(DropdownToggle, { color: "primary", tag: "a", caret: true }, "Apri dropdown"), /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true }, "Azione 1"), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true }, "Azione 2"), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true }, "Azione 3")))));
  }
};
_VarianteBottoni.parameters = {
  ..._VarianteBottoni.parameters,
  docs: {
    ...(_a = _VarianteBottoni.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  render: () => {\n    return <ButtonGroup className="d-flex justify-content-around">\n                <Dropdown>\n                    <DropdownToggle color="primary" caret>\n                        Apri dropdown\n                    </DropdownToggle>\n                    <DropdownMenu>\n                        <LinkList>\n                            <LinkListItem inDropdown>Azione 1</LinkListItem>\n                            <LinkListItem inDropdown>Azione 2</LinkListItem>\n                            <LinkListItem inDropdown>Azione 3</LinkListItem>\n                        </LinkList>\n                    </DropdownMenu>\n                </Dropdown>\n                <Dropdown>\n                    <DropdownToggle color="secondary" caret>\n                        Apri dropdown\n                    </DropdownToggle>\n                    <DropdownMenu>\n                        <LinkList>\n                            <LinkListItem inDropdown>Azione 1</LinkListItem>\n                            <LinkListItem inDropdown>Azione 2</LinkListItem>\n                            <LinkListItem inDropdown>Azione 3</LinkListItem>\n                        </LinkList>\n                    </DropdownMenu>\n                </Dropdown>\n                <Dropdown>\n                    <DropdownToggle color="danger" caret>\n                        Apri dropdown\n                    </DropdownToggle>\n                    <DropdownMenu>\n                        <LinkList>\n                            <LinkListItem>Azione 1</LinkListItem>\n                            <LinkListItem>Azione 2</LinkListItem>\n                            <LinkListItem>Azione 3</LinkListItem>\n                        </LinkList>\n                    </DropdownMenu>\n                </Dropdown>\n            </ButtonGroup>;\n  },\n  //Aggiungo del margine alla storia così da visualizzare il bordo onClick correttamente\n  decorators: [Story => <div className="m-2">\n                <Story />\n            </div>]\n}',
      ...(_c = (_b = _VarianteBottoni.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
_Esempi.parameters = {
  ..._Esempi.parameters,
  docs: {
    ...(_d = _Esempi.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: `{
  render: () => {
    return <section>
                <Dropdown className="me-3">
                    <DropdownToggle color="primary" caret>
                        Apri dropdown
                    </DropdownToggle>
                    <DropdownMenu>
                        <LinkList>
                            <LinkListItem inDropdown>Azione 1</LinkListItem>
                            <LinkListItem inDropdown>Azione 2</LinkListItem>
                            <LinkListItem inDropdown>Azione 3</LinkListItem>
                        </LinkList>
                    </DropdownMenu>
                </Dropdown>
            </section>;
  },
  parameters: {
    layout: 'centered'
  },
  //Aggiungo del margine alla storia così da visualizzare il bordo onClick correttamente
  decorators: [Story => <div className="m-2">
                <Story />
            </div>]
}`,
      ...(_f = (_e = _Esempi.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
_Link.parameters = {
  ..._Link.parameters,
  docs: {
    ...(_g = _Link.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '{\n  render: () => {\n    return <section>\n                <Dropdown className="me-3">\n                    <DropdownToggle color="primary" tag="a" caret>\n                        Apri dropdown\n                    </DropdownToggle>\n                    <DropdownMenu>\n                        <LinkList>\n                            <LinkListItem inDropdown>Azione 1</LinkListItem>\n                            <LinkListItem inDropdown>Azione 2</LinkListItem>\n                            <LinkListItem inDropdown>Azione 3</LinkListItem>\n                        </LinkList>\n                    </DropdownMenu>\n                </Dropdown>\n            </section>;\n  }\n}',
      ...(_i = (_h = _Link.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
const __namedExportsOrder = ["_VarianteBottoni", "_Esempi", "_Link"];
const DropdownStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  _Esempi,
  _Link,
  _VarianteBottoni,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  DropdownStories as D,
  _Esempi as _,
  _VarianteBottoni as a,
  _Link as b
};
