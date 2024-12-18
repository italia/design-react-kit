import { e } from "./index-BehpJNG5.js";
import { c as classNames } from "./index-D3ELxcOV.js";
import { P as PropTypes, t as tagPropType, m as mapToCssModules } from "./utils-CruPskUV.js";
var _excluded = ["className", "cssModule", "color", "body", "inverse", "outline", "tag", "innerRef"];
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
  /** Toggles card padding using `.card-body` */
  body: PropTypes.bool,
  /** Add custom class */
  className: PropTypes.string,
  /** Change background color of component */
  color: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func]),
  /** Inverts the color */
  inverse: PropTypes.bool,
  /** Changes the card to have only outline */
  outline: PropTypes.bool,
  /** Set a custom element for this component */
  tag: tagPropType
};
function Card$1(props) {
  var className = props.className, cssModule = props.cssModule, color = props.color, body = props.body, inverse = props.inverse, outline = props.outline, _props$tag = props.tag, Tag = _props$tag === void 0 ? "div" : _props$tag, innerRef = props.innerRef, attributes = _objectWithoutProperties(props, _excluded);
  var classes = mapToCssModules(classNames(className, "card", inverse ? "text-white" : false, body ? "card-body" : false, color ? "".concat(outline ? "border" : "bg", "-").concat(color) : false), cssModule);
  return /* @__PURE__ */ e.createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref: innerRef
  }));
}
Card$1.propTypes = propTypes;
const Card = ({
  tag = "div",
  href = void 0,
  teaser,
  spacing,
  noWrapper = false,
  wrapperClassName,
  testId,
  ...attributes
}) => {
  const wrapperClasses = classNames("card-wrapper", wrapperClassName, {
    "card-space": spacing,
    "card-teaser-wrapper": teaser
  });
  const cardClasses = classNames(attributes.className, {
    "card-teaser": teaser
  });
  if (noWrapper) {
    return /* @__PURE__ */ e.createElement(
      Card$1,
      {
        ...attributes,
        className: cardClasses,
        tag,
        href: tag === "a" ? href : void 0,
        "data-testid": testId
      }
    );
  }
  return /* @__PURE__ */ e.createElement("div", { className: wrapperClasses, "data-testid": testId }, /* @__PURE__ */ e.createElement(Card$1, { ...attributes, className: cardClasses, tag, href: tag === "a" ? href : void 0 }));
};
Card.__docgenInfo = { "description": "", "methods": [], "displayName": "Card", "props": { "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati", "defaultValue": { "value": "'div'", "computed": false } }, "href": { "required": false, "tsType": { "name": "string" }, "description": "Utilizzarlo quando si passa `a` a `tag` per ottenere una special card cliccabile", "defaultValue": { "value": "undefined", "computed": true } }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente Card" }, "innerRef": { "required": false, "tsType": { "name": "Ref", "elements": [{ "name": "HTMLElement" }], "raw": "Ref<HTMLElement>" }, "description": "Da utilizzare per impostare un riferimento all'elemento DOM" }, "cssModule": { "required": false, "tsType": { "name": "CSSModule" }, "description": "Oggetto contenente la nuova mappatura per le classi CSS." }, "teaser": { "required": false, "tsType": { "name": "boolean" }, "description": "Abilita la versione teaser della Card" }, "spacing": { "required": false, "tsType": { "name": "boolean" }, "description": "Quando attivo distanzia la Card nella versione mobile" }, "noWrapper": { "required": false, "tsType": { "name": "boolean" }, "description": "Quando attivo rimuove il componente contenitore della carta. Utile per card multiple nello stesso contenitore", "defaultValue": { "value": "false", "computed": false } }, "wrapperClassName": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive per l'elemento contenitore" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
export {
  Card as C
};
