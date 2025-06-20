import { e } from "./index-CoR6MlO7.js";
import { m as mapToCssModules, P as PropTypes, t as tagPropType } from "./utils-Cn8VSNph.js";
import { c as classNames } from "./index-xoeSAV6i.js";
import { F as Fade } from "./Fade-DgKLy3U8.js";
var _excluded = ["className", "closeClassName", "closeAriaLabel", "cssModule", "tag", "color", "isOpen", "toggle", "children", "transition", "fade", "innerRef"];
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
  /** Pass children so this component can wrap the child elements */
  children: PropTypes.node,
  /** Add custom class */
  className: PropTypes.string,
  /** Add custom class for close button */
  closeClassName: PropTypes.string,
  /** Aria label for close button */
  closeAriaLabel: PropTypes.string,
  /** Change color of alert */
  color: PropTypes.string,
  /** Change existing className with a new className */
  cssModule: PropTypes.object,
  /** Toggle fade animation */
  fade: PropTypes.bool,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func]),
  /** Control visibility state of Alert */
  isOpen: PropTypes.bool,
  /** Set a custom element for this component */
  tag: tagPropType,
  /** Function to toggle visibility */
  toggle: PropTypes.func,
  /** Props to be passed to `Fade` to modify transition */
  transition: PropTypes.shape(Fade.propTypes)
};
function Alert$1(props) {
  var className = props.className, closeClassName = props.closeClassName, _props$closeAriaLabel = props.closeAriaLabel, closeAriaLabel = _props$closeAriaLabel === void 0 ? "Close" : _props$closeAriaLabel, cssModule = props.cssModule, _props$tag = props.tag, Tag = _props$tag === void 0 ? "div" : _props$tag, _props$color = props.color, color = _props$color === void 0 ? "success" : _props$color, _props$isOpen = props.isOpen, isOpen = _props$isOpen === void 0 ? true : _props$isOpen, toggle = props.toggle, children = props.children, _props$transition = props.transition, transition = _props$transition === void 0 ? _objectSpread(_objectSpread({}, Fade.defaultProps), {}, {
    unmountOnExit: true
  }) : _props$transition, _props$fade = props.fade, fade = _props$fade === void 0 ? true : _props$fade, innerRef = props.innerRef, attributes = _objectWithoutProperties(props, _excluded);
  var classes = mapToCssModules(classNames(className, "alert", "alert-".concat(color), {
    "alert-dismissible": toggle
  }), cssModule);
  var closeClasses = mapToCssModules(classNames("btn-close", closeClassName), cssModule);
  var alertTransition = _objectSpread(_objectSpread(_objectSpread({}, Fade.defaultProps), transition), {}, {
    baseClass: fade ? transition.baseClass : "",
    timeout: fade ? transition.timeout : 0
  });
  return /* @__PURE__ */ e.createElement(Fade, _extends({}, attributes, alertTransition, {
    tag: Tag,
    className: classes,
    "in": isOpen,
    role: "alert",
    innerRef
  }), toggle ? /* @__PURE__ */ e.createElement("button", {
    type: "button",
    className: closeClasses,
    "aria-label": closeAriaLabel,
    onClick: toggle
  }) : null, children);
}
Alert$1.propTypes = propTypes;
const Alert = ({ color = "success", isOpen = true, fade = true, testId, ...props }) => {
  const baseProps = {
    color,
    isOpen,
    fade
  };
  return /* @__PURE__ */ e.createElement(Alert$1, { "data-testid": testId, ...baseProps, ...props });
};
Alert.__docgenInfo = { "description": "", "methods": [], "displayName": "Alert", "props": { "closeClassName": { "required": false, "tsType": { "name": "string" }, "description": "" }, "closeAriaLabel": { "required": false, "tsType": { "name": "string" }, "description": "" }, "cssModule": { "required": false, "tsType": { "name": "CSSModule" }, "description": "Oggetto contenente la nuova mappatura per le classi CSS." }, "color": { "required": false, "tsType": { "name": "union", "raw": "'primary' | 'secondary' | 'success' | 'danger' | 'warning' | string", "elements": [{ "name": "literal", "value": "'primary'" }, { "name": "literal", "value": "'secondary'" }, { "name": "literal", "value": "'success'" }, { "name": "literal", "value": "'danger'" }, { "name": "literal", "value": "'warning'" }, { "name": "string" }] }, "description": "Le varianti di colore definite in Bootstrap Italia\n@default primary", "defaultValue": { "value": "'success'", "computed": false } }, "fade": { "required": false, "tsType": { "name": "boolean" }, "description": "Quando abilitato mostra un'animazione di entrata ed uscita del componente Alert.\n@default true", "defaultValue": { "value": "true", "computed": false } }, "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati" }, "transition": { "required": false, "tsType": { "name": "FadeProps" }, "description": "" }, "innerRef": { "required": false, "tsType": { "name": "Ref", "elements": [{ "name": "HTMLElement" }], "raw": "Ref<HTMLElement>" }, "description": "Da utilizzare per impostare un riferimento all'elemento DOM" }, "isOpen": { "required": false, "tsType": { "name": "boolean" }, "description": "Quando abilitato mostra l'alert\n@default true", "defaultValue": { "value": "true", "computed": false } }, "toggle": { "required": false, "tsType": { "name": "MouseEventHandler", "elements": [{ "name": "unknown" }], "raw": "MouseEventHandler<unknown>" }, "description": "" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
export {
  Alert as A
};
