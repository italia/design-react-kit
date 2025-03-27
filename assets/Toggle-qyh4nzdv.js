import { e } from "./index-N7T0HPyM.js";
import { P as PropTypes, w as warnOnce, m as mapToCssModules, t as tagPropType } from "./utils-Cn8VSNph.js";
import { c as classNames } from "./index-xoeSAV6i.js";
import { L as Label } from "./Label-BeB_moJD.js";
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
var _excluded = ["className", "cssModule", "type", "bsSize", "valid", "invalid", "tag", "addon", "plaintext", "innerRef"];
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
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
var propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  bsSize: PropTypes.string,
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  tag: tagPropType,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  plaintext: PropTypes.bool,
  addon: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object
};
var Input = /* @__PURE__ */ function(_React$Component) {
  _inherits(Input2, _React$Component);
  var _super = _createSuper(Input2);
  function Input2(props) {
    var _this;
    _classCallCheck(this, Input2);
    _this = _super.call(this, props);
    _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
    _this.focus = _this.focus.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(Input2, [{
    key: "getRef",
    value: function getRef(ref) {
      if (this.props.innerRef) {
        this.props.innerRef(ref);
      }
      this.ref = ref;
    }
  }, {
    key: "focus",
    value: function focus() {
      if (this.ref) {
        this.ref.focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props, className = _this$props.className, cssModule = _this$props.cssModule, _this$props$type = _this$props.type, type = _this$props$type === void 0 ? "text" : _this$props$type, bsSize = _this$props.bsSize, valid = _this$props.valid, invalid = _this$props.invalid, tag = _this$props.tag, addon = _this$props.addon, plaintext = _this$props.plaintext, innerRef = _this$props.innerRef, attributes = _objectWithoutProperties(_this$props, _excluded);
      var checkInput = ["switch", "radio", "checkbox"].indexOf(type) > -1;
      var isNotaNumber = /\D/g;
      var textareaInput = type === "textarea";
      var selectInput = type === "select";
      var rangeInput = type === "range";
      var Tag = tag || (selectInput || textareaInput ? type : "input");
      var formControlClass = "form-control";
      if (plaintext) {
        formControlClass = "".concat(formControlClass, "-plaintext");
        Tag = tag || "input";
      } else if (rangeInput) {
        formControlClass = "form-range";
      } else if (selectInput) {
        formControlClass = "form-select";
      } else if (checkInput) {
        if (addon) {
          formControlClass = null;
        } else {
          formControlClass = "form-check-input";
        }
      }
      if (attributes.size && isNotaNumber.test(attributes.size)) {
        warnOnce(`Please use the prop "bsSize" instead of the "size" to bootstrap's input sizing.`);
        bsSize = attributes.size;
        delete attributes.size;
      }
      var classes = mapToCssModules(classNames(className, invalid && "is-invalid", valid && "is-valid", bsSize ? selectInput ? "form-select-".concat(bsSize) : "form-control-".concat(bsSize) : false, formControlClass), cssModule);
      if (Tag === "input" || tag && typeof tag === "function") {
        attributes.type = type === "switch" ? "checkbox" : type;
      }
      if (attributes.children && !(plaintext || type === "select" || typeof Tag !== "string" || Tag === "select")) {
        warnOnce('Input with a type of "'.concat(type, '" cannot have children. Please use "value"/"defaultValue" instead.'));
        delete attributes.children;
      }
      return /* @__PURE__ */ e.createElement(Tag, _extends({}, attributes, {
        ref: innerRef,
        className: classes,
        "aria-invalid": invalid
      }));
    }
  }]);
  return Input2;
}(e.Component);
Input.propTypes = propTypes;
const Toggle = ({ label, testId, ...rest }) => {
  return /* @__PURE__ */ e.createElement("div", { className: "toggles", "data-testid": testId }, /* @__PURE__ */ e.createElement(Label, { check: true, for: rest.id }, label, /* @__PURE__ */ e.createElement(Input, { ...rest, type: "checkbox", "aria-describedby": rest.id ? rest.id + "Description" : "" }), /* @__PURE__ */ e.createElement("span", { className: "lever" })));
};
Toggle.__docgenInfo = { "description": "", "methods": [], "displayName": "Toggle", "props": { "type": { "required": false, "tsType": { "name": "union", "raw": "| 'text'\n| 'email'\n| 'select'\n| 'file'\n| 'radio'\n| 'checkbox'\n| 'textarea'\n| 'button'\n| 'reset'\n| 'submit'\n| 'date'\n| 'datetime-local'\n| 'hidden'\n| 'image'\n| 'month'\n| 'number'\n| 'range'\n| 'search'\n| 'tel'\n| 'url'\n| 'week'\n| 'password'\n| 'datetime'\n| 'time'\n| 'color'\n| 'adaptive'\n| 'currency'\n| 'percentage'", "elements": [{ "name": "literal", "value": "'text'" }, { "name": "literal", "value": "'email'" }, { "name": "literal", "value": "'select'" }, { "name": "literal", "value": "'file'" }, { "name": "literal", "value": "'radio'" }, { "name": "literal", "value": "'checkbox'" }, { "name": "literal", "value": "'textarea'" }, { "name": "literal", "value": "'button'" }, { "name": "literal", "value": "'reset'" }, { "name": "literal", "value": "'submit'" }, { "name": "literal", "value": "'date'" }, { "name": "literal", "value": "'datetime-local'" }, { "name": "literal", "value": "'hidden'" }, { "name": "literal", "value": "'image'" }, { "name": "literal", "value": "'month'" }, { "name": "literal", "value": "'number'" }, { "name": "literal", "value": "'range'" }, { "name": "literal", "value": "'search'" }, { "name": "literal", "value": "'tel'" }, { "name": "literal", "value": "'url'" }, { "name": "literal", "value": "'week'" }, { "name": "literal", "value": "'password'" }, { "name": "literal", "value": "'datetime'" }, { "name": "literal", "value": "'time'" }, { "name": "literal", "value": "'color'" }, { "name": "literal", "value": "'adaptive'" }, { "name": "literal", "value": "'currency'" }, { "name": "literal", "value": "'percentage'" }] }, "description": "Il tipo specifico di input da utilizzare. Il valore di default è `text`." }, "bsSize": { "required": false, "tsType": { "name": "union", "raw": "'lg' | 'sm'", "elements": [{ "name": "literal", "value": "'lg'" }, { "name": "literal", "value": "'sm'" }] }, "description": "Dimensione personalizzate del campo di Input secondo le classi Bootstrap/Bootstrap Italia." }, "size": { "required": false, "tsType": { "name": "number" }, "description": "" }, "label": { "required": true, "tsType": { "name": "union", "raw": "string | ReactNode", "elements": [{ "name": "string" }, { "name": "ReactNode" }] }, "description": "Etichetta del campo Input." }, "incrementLabel": { "required": false, "tsType": { "name": "union", "raw": "string | ReactNode", "elements": [{ "name": "string" }, { "name": "ReactNode" }] }, "description": "Etichetta del pulsante incremento." }, "decrementLabel": { "required": false, "tsType": { "name": "union", "raw": "string | ReactNode", "elements": [{ "name": "string" }, { "name": "ReactNode" }] }, "description": "Etichetta del pulsante decremento." }, "placeholder": { "required": false, "tsType": { "name": "string" }, "description": "Testo di esempio da utilizzare per il campo." }, "validationText": { "required": false, "tsType": { "name": "string" }, "description": "Testo di validazione per l'elemento del modulo form." }, "infoText": { "required": false, "tsType": { "name": "string" }, "description": "Testo di aiuto per l'elemento del moduleo form. Richiede che il componente `Input` abbia la prop `id` impostata." }, "value": { "required": false, "tsType": { "name": "union", "raw": "string | number", "elements": [{ "name": "string" }, { "name": "number" }] }, "description": "Il valore nel campo Input." }, "readOnly": { "required": false, "tsType": { "name": "boolean" }, "description": "Da utilizzare per impedire la modifica del valore contenuto." }, "normalized": { "required": false, "tsType": { "name": "boolean" }, "description": "Associato all'attributo readOnly mostra il campo con lo stile classico, mantenendo lo stato di sola lettura." }, "valid": { "required": false, "tsType": { "name": "boolean" }, "description": "Utilizzare per mostrare il successo nella validazione del valore nel campo Input" }, "innerRef": { "required": false, "tsType": { "name": "ReactRef", "raw": "React.Ref<HTMLInputElement>", "elements": [{ "name": "HTMLInputElement" }] }, "description": "Da utilizzare per impostare un riferimento all'elemento DOM" }, "plaintext": { "required": false, "tsType": { "name": "boolean" }, "description": "Utilizzare per mostrare testo statico non modificabile." }, "addonText": { "required": false, "tsType": { "name": "string" }, "description": "Utilizzare per mostrare un elemento un simbolo attivando la proprietà addon nel campo input all'interno del componente" }, "cssModule": { "required": false, "tsType": { "name": "CSSModule" }, "description": "Oggetto contenente la nuova mappatura per le classi CSS." }, "wrapperClassName": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il wrapper del componente Input" }, "wrapperClass": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il wrapper del componente Input.\n@deprecated. Usare `wrapperClassName`." }, "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati" }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente Input" }, "static": { "required": false, "tsType": { "name": "boolean" }, "description": 'Usare "plaintext".\n@deprecated' }, "noWrapper": { "required": false, "tsType": { "name": "boolean" }, "description": "Quando attivo rimuove il componente contenitore dell'Input. Utile per un controllo maggiore dello styling" }, "hasButtonRight": { "required": false, "tsType": { "name": "boolean" }, "description": "Indica che il componente ha un bottone a destra rispetto all'input" }, "buttonRight": { "required": false, "tsType": { "name": "ReactNode" }, "description": "Componente per il bottone" }, "hasIconLeft": { "required": false, "tsType": { "name": "boolean" }, "description": "Indica che il componente ha una icona a sinistra rispetto all'input" }, "iconLeft": { "required": false, "tsType": { "name": "ReactNode" }, "description": "Componente per l'icona" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["InputHTMLAttributes"] };
export {
  Toggle as T
};
