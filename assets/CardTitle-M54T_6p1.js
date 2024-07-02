import { R as React } from "./index-C-_iGYWo.js";
import { P as PropTypes } from "./index-C6XlOQIa.js";
import { c as classNames } from "./index-xoeSAV6i.js";
import { t as tagPropType, m as mapToCssModules } from "./utils-BFoSoHid.js";
var _excluded = ["className", "cssModule", "tag"];
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
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Set a custom element for this component */
  tag: tagPropType
};
function CardTitle$1(props) {
  var className = props.className, cssModule = props.cssModule, _props$tag = props.tag, Tag = _props$tag === void 0 ? "div" : _props$tag, attributes = _objectWithoutProperties(props, _excluded);
  var classes = mapToCssModules(classNames(className, "card-title"), cssModule);
  return /* @__PURE__ */ React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}
CardTitle$1.propTypes = propTypes;
const CardTitle = (props) => {
  return /* @__PURE__ */ React.createElement(CardTitle$1, { ...props, "data-testid": props.testId });
};
CardTitle.__docgenInfo = { "description": "", "methods": [], "displayName": "CardTitle", "props": { "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati" }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente CardTitle" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
export {
  CardTitle as C
};
