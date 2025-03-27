import { e } from "./index-N7T0HPyM.js";
import { m as mapToCssModules, P as PropTypes, t as tagPropType } from "./utils-Cn8VSNph.js";
import { c as classNames } from "./index-xoeSAV6i.js";
var _excluded$1 = ["className", "cssModule", "innerRef", "tag"];
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
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func]),
  /** Set a custom element for this component */
  tag: tagPropType
};
function CardBody$1(props) {
  var className = props.className, cssModule = props.cssModule, innerRef = props.innerRef, _props$tag = props.tag, Tag = _props$tag === void 0 ? "div" : _props$tag, attributes = _objectWithoutProperties$1(props, _excluded$1);
  var classes = mapToCssModules(classNames(className, "card-body"), cssModule);
  return /* @__PURE__ */ e.createElement(Tag, _extends$1({}, attributes, {
    className: classes,
    ref: innerRef
  }));
}
CardBody$1.propTypes = propTypes$1;
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
function CardText$1(props) {
  var className = props.className, cssModule = props.cssModule, _props$tag = props.tag, Tag = _props$tag === void 0 ? "p" : _props$tag, attributes = _objectWithoutProperties(props, _excluded);
  var classes = mapToCssModules(classNames(className, "card-text"), cssModule);
  return /* @__PURE__ */ e.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}
CardText$1.propTypes = propTypes;
const CardBody = ({ tag = "div", testId, ...props }) => /* @__PURE__ */ e.createElement(CardBody$1, { ...props, tag, "data-testid": testId });
CardBody.__docgenInfo = { "description": "", "methods": [], "displayName": "CardBody", "props": { "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati", "defaultValue": { "value": "'div'", "computed": false } }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente Card" }, "innerRef": { "required": false, "tsType": { "name": "Ref", "elements": [{ "name": "HTMLElement" }], "raw": "Ref<HTMLElement>" }, "description": "Da utilizzare per impostare un riferimento all'elemento DOM" }, "cssModule": { "required": false, "tsType": { "name": "CSSModule" }, "description": "Oggetto contenente la nuova mappatura per le classi CSS." }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const CardText = (props) => {
  return /* @__PURE__ */ e.createElement(CardText$1, { ...props, "data-testid": props.testId });
};
CardText.__docgenInfo = { "description": "", "methods": [], "displayName": "CardText", "props": { "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati" }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente CardText" }, "cssModule": { "required": false, "tsType": { "name": "CSSModule" }, "description": "Oggetto contenente la nuova mappatura per le classi CSS." }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
export {
  CardBody as C,
  CardText as a
};
