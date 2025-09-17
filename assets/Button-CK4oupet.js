import { e, r as reactExports } from "./iframe-WcRkBu1E.js";
import { m as mapToCssModules, P as PropTypes, t as tagPropType } from "./utils-H_KkLj11.js";
import { c as classNames } from "./index-_NcwzH_h.js";
var _excluded$1 = ["className", "cssModule", "variant", "innerRef"];
function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends$1.apply(this, arguments);
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
function _objectWithoutProperties$1(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1(source, excluded);
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
function _objectWithoutPropertiesLoose$1(source, excluded) {
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
var propTypes$1 = {
  /** Disable the button if needed */
  active: PropTypes.bool,
  /** Aria label */
  "aria-label": PropTypes.string,
  /** Function to be triggered on click */
  onClick: PropTypes.func,
  /** Change the variant to white */
  variant: PropTypes.oneOf(["white"]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func])
};
function CloseButton(props) {
  var className = props.className;
  props.cssModule;
  var variant = props.variant, innerRef = props.innerRef, attributes = _objectWithoutProperties$1(props, _excluded$1);
  var classes = mapToCssModules(classNames(className, "btn-close", variant && "btn-close-".concat(variant)));
  return /* @__PURE__ */ e.createElement("button", _extends$1({
    ref: innerRef,
    type: "button",
    className: classes
  }, _objectSpread({
    "aria-label": "close"
  }, attributes)));
}
CloseButton.propTypes = propTypes$1;
var _excluded = ["active", "aria-label", "block", "className", "close", "cssModule", "color", "outline", "size", "tag", "innerRef"];
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
  /** Manually set the visual state of the button to active */
  active: PropTypes.bool,
  /** Aria label */
  "aria-label": PropTypes.string,
  block: PropTypes.bool,
  /** Pass children so this component can wrap them */
  children: PropTypes.node,
  /** Add custom class */
  className: PropTypes.string,
  /** Change existing className with a new className */
  cssModule: PropTypes.object,
  /** Use the button as a close button */
  close: PropTypes.bool,
  /** Change color of Button to one of the available colors */
  color: PropTypes.string,
  /** Disables the button */
  disabled: PropTypes.bool,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  /** Function to be triggered on click */
  onClick: PropTypes.func,
  /** Adds outline to the button */
  outline: PropTypes.bool,
  /** Make the button bigger or smaller */
  size: PropTypes.string,
  /** Set a custom element for this component */
  tag: tagPropType
};
function Button(props) {
  var onClick = reactExports.useCallback(function(e2) {
    if (props.disabled) {
      e2.preventDefault();
      return;
    }
    if (props.onClick) {
      return props.onClick(e2);
    }
  }, [props.onClick, props.disabled]);
  var active = props.active, ariaLabel = props["aria-label"], block = props.block, className = props.className, close = props.close, cssModule = props.cssModule, _props$color = props.color, color = _props$color === void 0 ? "secondary" : _props$color, outline = props.outline, size = props.size, _props$tag = props.tag, Tag = _props$tag === void 0 ? "button" : _props$tag, innerRef = props.innerRef, attributes = _objectWithoutProperties(props, _excluded);
  if (close) {
    return /* @__PURE__ */ e.createElement(CloseButton, attributes);
  }
  var btnOutlineColor = "btn".concat(outline ? "-outline" : "", "-").concat(color);
  var classes = mapToCssModules(classNames(className, "btn", btnOutlineColor, size ? "btn-".concat(size) : false, block ? "d-block w-100" : false, {
    active,
    disabled: props.disabled
  }), cssModule);
  if (attributes.href && Tag === "button") {
    Tag = "a";
  }
  return /* @__PURE__ */ e.createElement(Tag, _extends({
    type: Tag === "button" && attributes.onClick ? "button" : void 0
  }, attributes, {
    className: classes,
    ref: innerRef,
    onClick,
    "aria-label": ariaLabel
  }));
}
Button.propTypes = propTypes;
export {
  Button as B
};
