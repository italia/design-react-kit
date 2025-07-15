import { e } from "./index-CoR6MlO7.js";
import { C as Col, R as Row } from "./Col-DbKMWTUR.js";
import { c as classNames } from "./index-xoeSAV6i.js";
import { D as Dropdown, a as DropdownToggle } from "./DropdownToggle-DuDjCjD_.js";
import { D as DropdownMenu } from "./DropdownMenu-CqhZmjXk.js";
import { m as mapToCssModules, P as PropTypes, t as tagPropType } from "./utils-Cn8VSNph.js";
var _excluded = ["className", "cssModule", "tabs", "pills", "vertical", "horizontal", "justified", "fill", "navbar", "card", "tag"];
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
  /** Adding card prop adds `.card-header-tabs` or `.card-header-pills` class */
  card: PropTypes.bool,
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** fills the nav to extend to full available width */
  fill: PropTypes.bool,
  /** Change the horizontal alignment of your nav */
  horizontal: PropTypes.oneOf(["center", "end"]),
  /**  All horizontal space will be occupied by nav links, but unlike the `fill` above, every nav item will be the same width. */
  justified: PropTypes.bool,
  /** Add navbar for a full-height and lightweight navigation */
  navbar: PropTypes.bool,
  /** Make NavItems look like pills */
  pills: PropTypes.bool,
  /** Make NavItems look like tabs */
  tabs: PropTypes.bool,
  /** Set a custom element for this component */
  tag: tagPropType,
  /** Stack your navigation by changing the flex item direction */
  vertical: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
};
var getVerticalClass = function getVerticalClass2(vertical) {
  if (vertical === false) {
    return false;
  }
  if (vertical === true || vertical === "xs") {
    return "flex-column";
  }
  return "flex-".concat(vertical, "-column");
};
function Nav$1(props) {
  var className = props.className, cssModule = props.cssModule, tabs = props.tabs, pills = props.pills, _props$vertical = props.vertical, vertical = _props$vertical === void 0 ? false : _props$vertical, horizontal = props.horizontal, justified = props.justified, fill = props.fill, navbar = props.navbar, card = props.card, _props$tag = props.tag, Tag = _props$tag === void 0 ? "ul" : _props$tag, attributes = _objectWithoutProperties(props, _excluded);
  var classes = mapToCssModules(classNames(className, navbar ? "navbar-nav" : "nav", horizontal ? "justify-content-".concat(horizontal) : false, getVerticalClass(vertical), {
    "nav-tabs": tabs,
    "card-header-tabs": card && tabs,
    "nav-pills": pills,
    "card-header-pills": card && pills,
    "nav-justified": justified,
    "nav-fill": fill
  }), cssModule);
  return /* @__PURE__ */ e.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}
Nav$1.propTypes = propTypes;
const MegamenuHighlightColumn = ({ description, className, children, ...attributes }) => {
  const classes = classNames(className, "it-vertical", {
    "it-description": description
  });
  return /* @__PURE__ */ e.createElement(Col, { ...attributes }, /* @__PURE__ */ e.createElement(Row, { className: "max-height-col" }, /* @__PURE__ */ e.createElement(Col, { className: classes }, description ? /* @__PURE__ */ e.createElement("div", { className: "description-content" }, children) : /* @__PURE__ */ e.createElement(e.Fragment, null, children))));
};
MegamenuHighlightColumn.__docgenInfo = { "description": "", "methods": [], "displayName": "MegamenuHighlightColumn", "props": { "description": { "required": false, "tsType": { "name": "boolean" }, "description": "Quanto abilitato gestisce il contenuto della colonna come una sezione che può contentere immagini, testo, ect." }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente Megamenu Highlight Column" } }, "composes": ["ColProps"] };
const MegamenuItem = ({ itemName, className, children, ...attributes }) => {
  const classes = classNames(className, "megamenu");
  const [dropdownOpen, setDropdownOpen] = e.useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const toggleClasses = classNames("px-lg-2", "px-xl-3", dropdownOpen ? "show" : "");
  return /* @__PURE__ */ e.createElement(Dropdown, { className: classes, inNavbar: true, ...attributes, isOpen: dropdownOpen, toggle }, /* @__PURE__ */ e.createElement(DropdownToggle, { inNavbar: true, caret: true, className: toggleClasses }, /* @__PURE__ */ e.createElement("span", null, itemName)), /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement("div", { className: "megamenu pb-5 pt-3 py-lg-0" }, children)));
};
MegamenuItem.__docgenInfo = { "description": "", "methods": [], "displayName": "MegamenuItem", "props": { "itemName": { "required": true, "tsType": { "name": "string" }, "description": "Etichetta del megamenu visibile all'interno della barra di navigazione" }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente Dropdown" } }, "composes": ["HTMLAttributes"] };
const Nav = ({ className, tag = "ul", vertical = false, secondary, ...attributes }) => {
  const classes = classNames(className, {
    "navbar-secondary": secondary
  });
  return /* @__PURE__ */ e.createElement(Nav$1, { className: classes, tag, vertical, ...attributes });
};
Nav.__docgenInfo = { "description": "", "methods": [], "displayName": "Nav", "props": { "tabs": { "required": false, "tsType": { "name": "boolean" }, "description": "Renderizza i componenti NavItem al suo interno come tab." }, "pills": { "required": false, "tsType": { "name": "boolean" }, "description": "Renderizza i componenti NavItem al suo interno come pills." }, "card": { "required": false, "tsType": { "name": "boolean" }, "description": "Renderizza i componenti NavItem al suo interno come card." }, "navbar": { "required": false, "tsType": { "name": "boolean" }, "description": "Se utilizzata all'interno di una navbar, impostarlo su `true`. In caso di Header Nav, impostarlo a `true`." }, "justified": { "required": false, "tsType": { "name": "boolean" }, "description": "Se abilitato tutti i NavItem all'interno avranno la stessa larghezza" }, "fill": { "required": false, "tsType": { "name": "boolean" }, "description": "Se abilitato i NavItem all'intero occuperanno tutto lo spazio disponibile" }, "vertical": { "required": false, "tsType": { "name": "union", "raw": "boolean | 'xs'", "elements": [{ "name": "boolean" }, { "name": "literal", "value": "'xs'" }] }, "description": 'Da utilizzare per rendere il componente Nav verticale. Viene abilitato automaticamente in versione mobile. Valori possibili sono `true`, `false` o `"xs"`', "defaultValue": { "value": "false", "computed": false } }, "horizontal": { "required": false, "tsType": { "name": "union", "raw": "'center' | 'end'", "elements": [{ "name": "literal", "value": "'center'" }, { "name": "literal", "value": "'end'" }] }, "description": 'Da utilizzare per cambiare l\'allineamento all\'interno della Nav. Valori possibili sono `"center"` o `"end"` per posizionare il contenuto a centro o sulla destra.' }, "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati", "defaultValue": { "value": "'ul'", "computed": false } }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente Nav" }, "secondary": { "required": false, "tsType": { "name": "boolean" }, "description": "Adds ability to incorporate secondary nav items" } }, "composes": ["HTMLAttributes"] };
export {
  MegamenuItem as M,
  Nav as N,
  MegamenuHighlightColumn as a
};
