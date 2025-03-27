import { e } from "./index-N7T0HPyM.js";
import { m as mapToCssModules, P as PropTypes, t as tagPropType } from "./utils-Cn8VSNph.js";
import { c as classNames } from "./index-xoeSAV6i.js";
var _excluded = ["className", "cssModule", "fluid", "tag"];
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
  tag: tagPropType,
  fluid: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object
};
function Container(props) {
  var className = props.className, cssModule = props.cssModule, fluid = props.fluid, _props$tag = props.tag, Tag = _props$tag === void 0 ? "div" : _props$tag, attributes = _objectWithoutProperties(props, _excluded);
  var containerClass = "container";
  if (fluid === true) {
    containerClass = "container-fluid";
  } else if (fluid) {
    containerClass = "container-".concat(fluid);
  }
  var classes = mapToCssModules(classNames(className, containerClass), cssModule);
  return /* @__PURE__ */ e.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}
Container.propTypes = propTypes;
export {
  Container as C
};
