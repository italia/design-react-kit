var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J;
import { R as React } from "./index-CQCy530F.js";
import { P as PropTypes } from "./index-Cas18JYw.js";
import { c as classNames } from "./index-CpyNLP69.js";
import { t as tagPropType, m as mapToCssModules } from "./utils-l7qJ8bIE.js";
var _excluded = ["className", "cssModule", "size", "bordered", "borderless", "striped", "dark", "hover", "responsive", "tag", "responsiveTag", "innerRef"];
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
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var propTypes = {
  /** Adds border to all sides of table */
  bordered: PropTypes.bool,
  /** Removes all borders */
  borderless: PropTypes.bool,
  /** Adds custom class name to component */
  className: PropTypes.string,
  /**  */
  cssModule: PropTypes.object,
  /** Makes the table dark */
  dark: PropTypes.bool,
  /** Enables a hover state on the rows within `<tbody>` */
  hover: PropTypes.bool,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.object]),
  /** Responsive tables allow tables to be scrolled horizontally with ease */
  responsive: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  responsiveTag: tagPropType,
  /** Make tables more compact by cutting cell padding in half when setting size as sm. */
  size: PropTypes.string,
  /** Adds zebra-striping to any table row within the `<tbody>` */
  striped: PropTypes.bool,
  /** Add custom tag to the component */
  tag: tagPropType
};
function Table(props) {
  var className = props.className, cssModule = props.cssModule, size = props.size, bordered = props.bordered, borderless = props.borderless, striped = props.striped, dark = props.dark, hover = props.hover, responsive = props.responsive, _props$tag = props.tag, Tag = _props$tag === void 0 ? "table" : _props$tag, _props$responsiveTag = props.responsiveTag, ResponsiveTag = _props$responsiveTag === void 0 ? "div" : _props$responsiveTag, innerRef = props.innerRef, attributes = _objectWithoutProperties(props, _excluded);
  var classes = mapToCssModules(classNames(className, "table", size ? "table-" + size : false, bordered ? "table-bordered" : false, borderless ? "table-borderless" : false, striped ? "table-striped" : false, dark ? "table-dark" : false, hover ? "table-hover" : false), cssModule);
  var table = /* @__PURE__ */ React.createElement(Tag, _extends({}, attributes, {
    ref: innerRef,
    className: classes
  }));
  if (responsive) {
    var responsiveClassName = mapToCssModules(responsive === true ? "table-responsive" : "table-responsive-".concat(responsive), cssModule);
    return /* @__PURE__ */ React.createElement(ResponsiveTag, {
      className: responsiveClassName
    }, table);
  }
  return table;
}
Table.propTypes = propTypes;
const meta = {
  title: "Documentazione/Componenti/Tables"
};
const TableBase = () => /* @__PURE__ */ React.createElement(Table, null, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "#"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Nome"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Cognome"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Username"))), /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "row"
}, "1"), /* @__PURE__ */ React.createElement("td", null, "Mario"), /* @__PURE__ */ React.createElement("td", null, "Verdi"), /* @__PURE__ */ React.createElement("td", null, "mario.verdi")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "row"
}, "2"), /* @__PURE__ */ React.createElement("td", null, "Francesco"), /* @__PURE__ */ React.createElement("td", null, "Bianchi"), /* @__PURE__ */ React.createElement("td", null, "francesco.bianchi")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "row"
}, "3"), /* @__PURE__ */ React.createElement("td", null, "Alessandro"), /* @__PURE__ */ React.createElement("td", null, "Rossi"), /* @__PURE__ */ React.createElement("td", null, "alessandro.rossi"))));
const TableDark = () => /* @__PURE__ */ React.createElement(Table, {
  dark: true
}, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "#"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Nome"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Cognome"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Username"))), /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "row"
}, "1"), /* @__PURE__ */ React.createElement("td", null, "Mario"), /* @__PURE__ */ React.createElement("td", null, "Verdi"), /* @__PURE__ */ React.createElement("td", null, "mario.verdi")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "row"
}, "2"), /* @__PURE__ */ React.createElement("td", null, "Francesco"), /* @__PURE__ */ React.createElement("td", null, "Bianchi"), /* @__PURE__ */ React.createElement("td", null, "francesco.bianchi")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "row"
}, "3"), /* @__PURE__ */ React.createElement("td", null, "Alessandro"), /* @__PURE__ */ React.createElement("td", null, "Rossi"), /* @__PURE__ */ React.createElement("td", null, "alessandro.rossi"))));
const TableThead = () => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Table, null, /* @__PURE__ */ React.createElement("thead", {
  className: "table-dark"
}, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "#"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Nome"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Cognome"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Username"))), /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "row"
}, "1"), /* @__PURE__ */ React.createElement("td", null, "Mario"), /* @__PURE__ */ React.createElement("td", null, "Verdi"), /* @__PURE__ */ React.createElement("td", null, "mario.verdi")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "row"
}, "2"), /* @__PURE__ */ React.createElement("td", null, "Francesco"), /* @__PURE__ */ React.createElement("td", null, "Bianchi"), /* @__PURE__ */ React.createElement("td", null, "francesco.bianchi")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "row"
}, "3"), /* @__PURE__ */ React.createElement("td", null, "Alessandro"), /* @__PURE__ */ React.createElement("td", null, "Rossi"), /* @__PURE__ */ React.createElement("td", null, "alessandro.rossi")))), /* @__PURE__ */ React.createElement(Table, null, /* @__PURE__ */ React.createElement("thead", {
  className: "table-light"
}, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "#"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Nome"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Cognome"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Username"))), /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "row"
}, "1"), /* @__PURE__ */ React.createElement("td", null, "Mario"), /* @__PURE__ */ React.createElement("td", null, "Verdi"), /* @__PURE__ */ React.createElement("td", null, "mario.verdi")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "row"
}, "2"), /* @__PURE__ */ React.createElement("td", null, "Francesco"), /* @__PURE__ */ React.createElement("td", null, "Bianchi"), /* @__PURE__ */ React.createElement("td", null, "francesco.bianchi")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "row"
}, "3"), /* @__PURE__ */ React.createElement("td", null, "Alessandro"), /* @__PURE__ */ React.createElement("td", null, "Rossi"), /* @__PURE__ */ React.createElement("td", null, "alessandro.rossi")))));
const TableStriped = () => /* @__PURE__ */ React.createElement(Table, {
  striped: true
}, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "#"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Nome"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Cognome"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Username"))), /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "row"
}, "1"), /* @__PURE__ */ React.createElement("td", null, "Mario"), /* @__PURE__ */ React.createElement("td", null, "Verdi"), /* @__PURE__ */ React.createElement("td", null, "mario.verdi")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "row"
}, "2"), /* @__PURE__ */ React.createElement("td", null, "Francesco"), /* @__PURE__ */ React.createElement("td", null, "Bianchi"), /* @__PURE__ */ React.createElement("td", null, "francesco.bianchi")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "row"
}, "3"), /* @__PURE__ */ React.createElement("td", null, "Alessandro"), /* @__PURE__ */ React.createElement("td", null, "Rossi"), /* @__PURE__ */ React.createElement("td", null, "alessandro.rossi"))));
const TableBordered = () => /* @__PURE__ */ React.createElement(Table, {
  bordered: true
}, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "#"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Nome"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Cognome"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Username"))), /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "row"
}, "1"), /* @__PURE__ */ React.createElement("td", null, "Mario"), /* @__PURE__ */ React.createElement("td", null, "Verdi"), /* @__PURE__ */ React.createElement("td", null, "mario.verdi")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "row"
}, "2"), /* @__PURE__ */ React.createElement("td", null, "Francesco"), /* @__PURE__ */ React.createElement("td", null, "Bianchi"), /* @__PURE__ */ React.createElement("td", null, "francesco.bianchi")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "row"
}, "3"), /* @__PURE__ */ React.createElement("td", null, "Alessandro"), /* @__PURE__ */ React.createElement("td", null, "Rossi"), /* @__PURE__ */ React.createElement("td", null, "alessandro.rossi"))));
const TableBorderless = () => /* @__PURE__ */ React.createElement(Table, {
  borderless: true
}, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "#"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Nome"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Cognome"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Username"))), /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "row"
}, "1"), /* @__PURE__ */ React.createElement("td", null, "Mario"), /* @__PURE__ */ React.createElement("td", null, "Verdi"), /* @__PURE__ */ React.createElement("td", null, "mario.verdi")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "row"
}, "2"), /* @__PURE__ */ React.createElement("td", null, "Francesco"), /* @__PURE__ */ React.createElement("td", null, "Bianchi"), /* @__PURE__ */ React.createElement("td", null, "francesco.bianchi")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "row"
}, "3"), /* @__PURE__ */ React.createElement("td", null, "Alessandro"), /* @__PURE__ */ React.createElement("td", null, "Rossi"), /* @__PURE__ */ React.createElement("td", null, "alessandro.rossi"))));
const TableHover = () => /* @__PURE__ */ React.createElement(Table, {
  hover: true
}, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "#"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Nome"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Cognome"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Username"))), /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "row"
}, "1"), /* @__PURE__ */ React.createElement("td", null, "Mario"), /* @__PURE__ */ React.createElement("td", null, "Verdi"), /* @__PURE__ */ React.createElement("td", null, "mario.verdi")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "row"
}, "2"), /* @__PURE__ */ React.createElement("td", null, "Francesco"), /* @__PURE__ */ React.createElement("td", null, "Bianchi"), /* @__PURE__ */ React.createElement("td", null, "francesco.bianchi")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "row"
}, "3"), /* @__PURE__ */ React.createElement("td", null, "Alessandro"), /* @__PURE__ */ React.createElement("td", null, "Rossi"), /* @__PURE__ */ React.createElement("td", null, "alessandro.rossi"))));
const TableCompact = () => /* @__PURE__ */ React.createElement(Table, {
  size: "sm"
}, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "#"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Nome"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Cognome"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Username"))), /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "row"
}, "1"), /* @__PURE__ */ React.createElement("td", null, "Mario"), /* @__PURE__ */ React.createElement("td", null, "Verdi"), /* @__PURE__ */ React.createElement("td", null, "mario.verdi")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "row"
}, "2"), /* @__PURE__ */ React.createElement("td", null, "Francesco"), /* @__PURE__ */ React.createElement("td", null, "Bianchi"), /* @__PURE__ */ React.createElement("td", null, "francesco.bianchi")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "row"
}, "3"), /* @__PURE__ */ React.createElement("td", null, "Alessandro"), /* @__PURE__ */ React.createElement("td", null, "Rossi"), /* @__PURE__ */ React.createElement("td", null, "alessandro.rossi"))));
const TableContextual = () => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Table, null, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Class"), /* @__PURE__ */ React.createElement("th", null, "Heading"), /* @__PURE__ */ React.createElement("th", null, "Heading"))), /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement("tr", {
  className: "table-active"
}, /* @__PURE__ */ React.createElement("th", null, "Active"), /* @__PURE__ */ React.createElement("td", null, "Cell"), /* @__PURE__ */ React.createElement("td", null, "Cell")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Default"), /* @__PURE__ */ React.createElement("td", null, "Cell"), /* @__PURE__ */ React.createElement("td", null, "Cell")), /* @__PURE__ */ React.createElement("tr", {
  className: "table-primary"
}, /* @__PURE__ */ React.createElement("th", null, "Primary"), /* @__PURE__ */ React.createElement("td", null, "Cell"), /* @__PURE__ */ React.createElement("td", null, "Cell")), /* @__PURE__ */ React.createElement("tr", {
  className: "table-secondary"
}, /* @__PURE__ */ React.createElement("th", null, "Secondary"), /* @__PURE__ */ React.createElement("td", null, "Cell"), /* @__PURE__ */ React.createElement("td", null, "Cell")), /* @__PURE__ */ React.createElement("tr", {
  className: "table-success"
}, /* @__PURE__ */ React.createElement("th", null, "Success"), /* @__PURE__ */ React.createElement("td", null, "Cell"), /* @__PURE__ */ React.createElement("td", null, "Cell")), /* @__PURE__ */ React.createElement("tr", {
  className: "table-danger"
}, /* @__PURE__ */ React.createElement("th", null, "Danger"), /* @__PURE__ */ React.createElement("td", null, "Cell"), /* @__PURE__ */ React.createElement("td", null, "Cell")), /* @__PURE__ */ React.createElement("tr", {
  className: "table-warning"
}, /* @__PURE__ */ React.createElement("th", null, "Warning"), /* @__PURE__ */ React.createElement("td", null, "Cell"), /* @__PURE__ */ React.createElement("td", null, "Cell")))), /* @__PURE__ */ React.createElement(Table, null, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null), /* @__PURE__ */ React.createElement("th", null, "Heading"), /* @__PURE__ */ React.createElement("th", null, "Heading"), /* @__PURE__ */ React.createElement("th", null, "Heading"), /* @__PURE__ */ React.createElement("th", null, "Heading"), /* @__PURE__ */ React.createElement("th", null, "Heading"), /* @__PURE__ */ React.createElement("th", null, "Heading"))), /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, "Class"), /* @__PURE__ */ React.createElement("td", {
  className: "table-active"
}, "Active"), /* @__PURE__ */ React.createElement("td", {
  className: "table-primary"
}, "Primary"), /* @__PURE__ */ React.createElement("td", {
  className: "table-secondary"
}, "Secondary"), /* @__PURE__ */ React.createElement("td", {
  className: "table-success"
}, "Success"), /* @__PURE__ */ React.createElement("td", {
  className: "table-danger"
}, "Danger"), /* @__PURE__ */ React.createElement("td", {
  className: "table-warning"
}, "Warning")))));
const TableCaptions = () => /* @__PURE__ */ React.createElement(Table, null, /* @__PURE__ */ React.createElement("caption", null, "Lista di utenti"), /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "#"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "First"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Last"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Handle"))), /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "row"
}, "1"), /* @__PURE__ */ React.createElement("td", null, "Mark"), /* @__PURE__ */ React.createElement("td", null, "Otto"), /* @__PURE__ */ React.createElement("td", null, "@mdo")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "row"
}, "2"), /* @__PURE__ */ React.createElement("td", null, "Jacob"), /* @__PURE__ */ React.createElement("td", null, "Thornton"), /* @__PURE__ */ React.createElement("td", null, "@fat")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "row"
}, "3"), /* @__PURE__ */ React.createElement("td", null, "Larry"), /* @__PURE__ */ React.createElement("td", null, "the Bird"), /* @__PURE__ */ React.createElement("td", null, "@twitter"))));
const TableResponsive = () => /* @__PURE__ */ React.createElement(Table, {
  responsive: true
}, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "#"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Intestazione"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Intestazione"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Intestazione"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Intestazione"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Intestazione"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Intestazione"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Intestazione"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Intestazione"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Intestazione"))), /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "row"
}, "1"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "row"
}, "2"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "row"
}, "3"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"))));
const TableBreakpoint = () => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Table, {
  responsive: true,
  size: "sm"
}, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "#"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Intestazione"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Intestazione"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Intestazione"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Intestazione"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Intestazione"))), /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "row"
}, "1"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "row"
}, "2"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "row"
}, "3"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella")))), /* @__PURE__ */ React.createElement(Table, {
  responsive: true,
  size: "md"
}, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "#"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Intestazione"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Intestazione"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Intestazione"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Intestazione"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Intestazione"))), /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "row"
}, "1"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "row"
}, "2"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "row"
}, "3"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella")))), /* @__PURE__ */ React.createElement(Table, {
  responsive: true,
  size: "lg"
}, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "#"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Intestazione"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Intestazione"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Intestazione"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Intestazione"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Intestazione"))), /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "row"
}, "1"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "row"
}, "2"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "row"
}, "3"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella")))), /* @__PURE__ */ React.createElement(Table, {
  responsive: true,
  size: "xl"
}, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "#"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Intestazione"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Intestazione"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Intestazione"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Intestazione"), /* @__PURE__ */ React.createElement("th", {
  scope: "col"
}, "Intestazione"))), /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "row"
}, "1"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "row"
}, "2"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
  scope: "row"
}, "3"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella"), /* @__PURE__ */ React.createElement("td", null, "Cella")))));
TableBase.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TableBase"
};
TableDark.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TableDark"
};
TableThead.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TableThead"
};
TableStriped.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TableStriped"
};
TableBordered.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TableBordered"
};
TableBorderless.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TableBorderless"
};
TableHover.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TableHover"
};
TableCompact.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TableCompact"
};
TableContextual.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TableContextual"
};
TableCaptions.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TableCaptions"
};
TableResponsive.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TableResponsive"
};
TableBreakpoint.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TableBreakpoint"
};
TableBase.parameters = {
  ...TableBase.parameters,
  docs: {
    ...(_a = TableBase.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "() => <Table>\n    <thead>\n      <tr>\n        <th scope='col'>#</th>\n        <th scope='col'>Nome</th>\n        <th scope='col'>Cognome</th>\n        <th scope='col'>Username</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <th scope='row'>1</th>\n        <td>Mario</td>\n        <td>Verdi</td>\n        <td>mario.verdi</td>\n      </tr>\n      <tr>\n        <th scope='row'>2</th>\n        <td>Francesco</td>\n        <td>Bianchi</td>\n        <td>francesco.bianchi</td>\n      </tr>\n      <tr>\n        <th scope='row'>3</th>\n        <td>Alessandro</td>\n        <td>Rossi</td>\n        <td>alessandro.rossi</td>\n      </tr>\n    </tbody>\n  </Table>",
      ...(_c = (_b = TableBase.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
TableDark.parameters = {
  ...TableDark.parameters,
  docs: {
    ...(_d = TableDark.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "() => <Table dark>\n    <thead>\n      <tr>\n        <th scope='col'>#</th>\n        <th scope='col'>Nome</th>\n        <th scope='col'>Cognome</th>\n        <th scope='col'>Username</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <th scope='row'>1</th>\n        <td>Mario</td>\n        <td>Verdi</td>\n        <td>mario.verdi</td>\n      </tr>\n      <tr>\n        <th scope='row'>2</th>\n        <td>Francesco</td>\n        <td>Bianchi</td>\n        <td>francesco.bianchi</td>\n      </tr>\n      <tr>\n        <th scope='row'>3</th>\n        <td>Alessandro</td>\n        <td>Rossi</td>\n        <td>alessandro.rossi</td>\n      </tr>\n    </tbody>\n  </Table>",
      ...(_f = (_e = TableDark.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
TableThead.parameters = {
  ...TableThead.parameters,
  docs: {
    ...(_g = TableThead.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "() => <>\n    <Table>\n      <thead className='table-dark'>\n        <tr>\n          <th scope='col'>#</th>\n          <th scope='col'>Nome</th>\n          <th scope='col'>Cognome</th>\n          <th scope='col'>Username</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <th scope='row'>1</th>\n          <td>Mario</td>\n          <td>Verdi</td>\n          <td>mario.verdi</td>\n        </tr>\n        <tr>\n          <th scope='row'>2</th>\n          <td>Francesco</td>\n          <td>Bianchi</td>\n          <td>francesco.bianchi</td>\n        </tr>\n        <tr>\n          <th scope='row'>3</th>\n          <td>Alessandro</td>\n          <td>Rossi</td>\n          <td>alessandro.rossi</td>\n        </tr>\n      </tbody>\n    </Table>\n\n    <Table>\n      <thead className='table-light'>\n        <tr>\n          <th scope='col'>#</th>\n          <th scope='col'>Nome</th>\n          <th scope='col'>Cognome</th>\n          <th scope='col'>Username</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <th scope='row'>1</th>\n          <td>Mario</td>\n          <td>Verdi</td>\n          <td>mario.verdi</td>\n        </tr>\n        <tr>\n          <th scope='row'>2</th>\n          <td>Francesco</td>\n          <td>Bianchi</td>\n          <td>francesco.bianchi</td>\n        </tr>\n        <tr>\n          <th scope='row'>3</th>\n          <td>Alessandro</td>\n          <td>Rossi</td>\n          <td>alessandro.rossi</td>\n        </tr>\n      </tbody>\n    </Table>\n  </>",
      ...(_i = (_h = TableThead.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
TableStriped.parameters = {
  ...TableStriped.parameters,
  docs: {
    ...(_j = TableStriped.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "() => <Table striped>\n    <thead>\n      <tr>\n        <th scope='col'>#</th>\n        <th scope='col'>Nome</th>\n        <th scope='col'>Cognome</th>\n        <th scope='col'>Username</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <th scope='row'>1</th>\n        <td>Mario</td>\n        <td>Verdi</td>\n        <td>mario.verdi</td>\n      </tr>\n      <tr>\n        <th scope='row'>2</th>\n        <td>Francesco</td>\n        <td>Bianchi</td>\n        <td>francesco.bianchi</td>\n      </tr>\n      <tr>\n        <th scope='row'>3</th>\n        <td>Alessandro</td>\n        <td>Rossi</td>\n        <td>alessandro.rossi</td>\n      </tr>\n    </tbody>\n  </Table>",
      ...(_l = (_k = TableStriped.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
TableBordered.parameters = {
  ...TableBordered.parameters,
  docs: {
    ...(_m = TableBordered.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "() => <Table bordered>\n    <thead>\n      <tr>\n        <th scope='col'>#</th>\n        <th scope='col'>Nome</th>\n        <th scope='col'>Cognome</th>\n        <th scope='col'>Username</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <th scope='row'>1</th>\n        <td>Mario</td>\n        <td>Verdi</td>\n        <td>mario.verdi</td>\n      </tr>\n      <tr>\n        <th scope='row'>2</th>\n        <td>Francesco</td>\n        <td>Bianchi</td>\n        <td>francesco.bianchi</td>\n      </tr>\n      <tr>\n        <th scope='row'>3</th>\n        <td>Alessandro</td>\n        <td>Rossi</td>\n        <td>alessandro.rossi</td>\n      </tr>\n    </tbody>\n  </Table>",
      ...(_o = (_n = TableBordered.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
TableBorderless.parameters = {
  ...TableBorderless.parameters,
  docs: {
    ...(_p = TableBorderless.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: "() => <Table borderless>\n    <thead>\n      <tr>\n        <th scope='col'>#</th>\n        <th scope='col'>Nome</th>\n        <th scope='col'>Cognome</th>\n        <th scope='col'>Username</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <th scope='row'>1</th>\n        <td>Mario</td>\n        <td>Verdi</td>\n        <td>mario.verdi</td>\n      </tr>\n      <tr>\n        <th scope='row'>2</th>\n        <td>Francesco</td>\n        <td>Bianchi</td>\n        <td>francesco.bianchi</td>\n      </tr>\n      <tr>\n        <th scope='row'>3</th>\n        <td>Alessandro</td>\n        <td>Rossi</td>\n        <td>alessandro.rossi</td>\n      </tr>\n    </tbody>\n  </Table>",
      ...(_r = (_q = TableBorderless.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
TableHover.parameters = {
  ...TableHover.parameters,
  docs: {
    ...(_s = TableHover.parameters) == null ? void 0 : _s.docs,
    source: {
      originalSource: "() => <Table hover>\n    <thead>\n      <tr>\n        <th scope='col'>#</th>\n        <th scope='col'>Nome</th>\n        <th scope='col'>Cognome</th>\n        <th scope='col'>Username</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <th scope='row'>1</th>\n        <td>Mario</td>\n        <td>Verdi</td>\n        <td>mario.verdi</td>\n      </tr>\n      <tr>\n        <th scope='row'>2</th>\n        <td>Francesco</td>\n        <td>Bianchi</td>\n        <td>francesco.bianchi</td>\n      </tr>\n      <tr>\n        <th scope='row'>3</th>\n        <td>Alessandro</td>\n        <td>Rossi</td>\n        <td>alessandro.rossi</td>\n      </tr>\n    </tbody>\n  </Table>",
      ...(_u = (_t = TableHover.parameters) == null ? void 0 : _t.docs) == null ? void 0 : _u.source
    }
  }
};
TableCompact.parameters = {
  ...TableCompact.parameters,
  docs: {
    ...(_v = TableCompact.parameters) == null ? void 0 : _v.docs,
    source: {
      originalSource: "() => <Table size='sm'>\n    <thead>\n      <tr>\n        <th scope='col'>#</th>\n        <th scope='col'>Nome</th>\n        <th scope='col'>Cognome</th>\n        <th scope='col'>Username</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <th scope='row'>1</th>\n        <td>Mario</td>\n        <td>Verdi</td>\n        <td>mario.verdi</td>\n      </tr>\n      <tr>\n        <th scope='row'>2</th>\n        <td>Francesco</td>\n        <td>Bianchi</td>\n        <td>francesco.bianchi</td>\n      </tr>\n      <tr>\n        <th scope='row'>3</th>\n        <td>Alessandro</td>\n        <td>Rossi</td>\n        <td>alessandro.rossi</td>\n      </tr>\n    </tbody>\n  </Table>",
      ...(_x = (_w = TableCompact.parameters) == null ? void 0 : _w.docs) == null ? void 0 : _x.source
    }
  }
};
TableContextual.parameters = {
  ...TableContextual.parameters,
  docs: {
    ...(_y = TableContextual.parameters) == null ? void 0 : _y.docs,
    source: {
      originalSource: "() => <>\n    {/* On rows */}\n    <Table>\n      <thead>\n        <tr>\n          <th>Class</th>\n          <th>Heading</th>\n          <th>Heading</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr className='table-active'>\n          <th>Active</th>\n          <td>Cell</td>\n          <td>Cell</td>\n        </tr>\n        <tr>\n          <th>Default</th>\n          <td>Cell</td>\n          <td>Cell</td>\n        </tr>\n        <tr className='table-primary'>\n          <th>Primary</th>\n          <td>Cell</td>\n          <td>Cell</td>\n        </tr>\n        <tr className='table-secondary'>\n          <th>Secondary</th>\n          <td>Cell</td>\n          <td>Cell</td>\n        </tr>\n        <tr className='table-success'>\n          <th>Success</th>\n          <td>Cell</td>\n          <td>Cell</td>\n        </tr>\n        <tr className='table-danger'>\n          <th>Danger</th>\n          <td>Cell</td>\n          <td>Cell</td>\n        </tr>\n        <tr className='table-warning'>\n          <th>Warning</th>\n          <td>Cell</td>\n          <td>Cell</td>\n        </tr>\n      </tbody>\n    </Table>\n\n    {/* On cells (`td` or `th`) */}\n    <Table>\n      <thead>\n        <tr>\n          <th></th>\n          <th>Heading</th>\n          <th>Heading</th>\n          <th>Heading</th>\n          <th>Heading</th>\n          <th>Heading</th>\n          <th>Heading</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>Class</td>\n          <td className='table-active'>Active</td>\n          <td className='table-primary'>Primary</td>\n          <td className='table-secondary'>Secondary</td>\n          <td className='table-success'>Success</td>\n          <td className='table-danger'>Danger</td>\n          <td className='table-warning'>Warning</td>\n        </tr>\n      </tbody>\n    </Table>\n  </>",
      ...(_A = (_z = TableContextual.parameters) == null ? void 0 : _z.docs) == null ? void 0 : _A.source
    }
  }
};
TableCaptions.parameters = {
  ...TableCaptions.parameters,
  docs: {
    ...(_B = TableCaptions.parameters) == null ? void 0 : _B.docs,
    source: {
      originalSource: "() => <Table>\n    <caption>Lista di utenti</caption>\n    <thead>\n      <tr>\n        <th scope='col'>#</th>\n        <th scope='col'>First</th>\n        <th scope='col'>Last</th>\n        <th scope='col'>Handle</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <th scope='row'>1</th>\n        <td>Mark</td>\n        <td>Otto</td>\n        <td>@mdo</td>\n      </tr>\n      <tr>\n        <th scope='row'>2</th>\n        <td>Jacob</td>\n        <td>Thornton</td>\n        <td>@fat</td>\n      </tr>\n      <tr>\n        <th scope='row'>3</th>\n        <td>Larry</td>\n        <td>the Bird</td>\n        <td>@twitter</td>\n      </tr>\n    </tbody>\n  </Table>",
      ...(_D = (_C = TableCaptions.parameters) == null ? void 0 : _C.docs) == null ? void 0 : _D.source
    }
  }
};
TableResponsive.parameters = {
  ...TableResponsive.parameters,
  docs: {
    ...(_E = TableResponsive.parameters) == null ? void 0 : _E.docs,
    source: {
      originalSource: "() => <Table responsive>\n    <thead>\n      <tr>\n        <th scope='col'>#</th>\n        <th scope='col'>Intestazione</th>\n        <th scope='col'>Intestazione</th>\n        <th scope='col'>Intestazione</th>\n        <th scope='col'>Intestazione</th>\n        <th scope='col'>Intestazione</th>\n        <th scope='col'>Intestazione</th>\n        <th scope='col'>Intestazione</th>\n        <th scope='col'>Intestazione</th>\n        <th scope='col'>Intestazione</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <th scope='row'>1</th>\n        <td>Cella</td>\n        <td>Cella</td>\n        <td>Cella</td>\n        <td>Cella</td>\n        <td>Cella</td>\n        <td>Cella</td>\n        <td>Cella</td>\n        <td>Cella</td>\n        <td>Cella</td>\n      </tr>\n      <tr>\n        <th scope='row'>2</th>\n        <td>Cella</td>\n        <td>Cella</td>\n        <td>Cella</td>\n        <td>Cella</td>\n        <td>Cella</td>\n        <td>Cella</td>\n        <td>Cella</td>\n        <td>Cella</td>\n        <td>Cella</td>\n      </tr>\n      <tr>\n        <th scope='row'>3</th>\n        <td>Cella</td>\n        <td>Cella</td>\n        <td>Cella</td>\n        <td>Cella</td>\n        <td>Cella</td>\n        <td>Cella</td>\n        <td>Cella</td>\n        <td>Cella</td>\n        <td>Cella</td>\n      </tr>\n    </tbody>\n  </Table>",
      ...(_G = (_F = TableResponsive.parameters) == null ? void 0 : _F.docs) == null ? void 0 : _G.source
    }
  }
};
TableBreakpoint.parameters = {
  ...TableBreakpoint.parameters,
  docs: {
    ...(_H = TableBreakpoint.parameters) == null ? void 0 : _H.docs,
    source: {
      originalSource: "() => <>\n    <Table responsive size='sm'>\n      <thead>\n        <tr>\n          <th scope='col'>#</th>\n          <th scope='col'>Intestazione</th>\n          <th scope='col'>Intestazione</th>\n          <th scope='col'>Intestazione</th>\n          <th scope='col'>Intestazione</th>\n          <th scope='col'>Intestazione</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <th scope='row'>1</th>\n          <td>Cella</td>\n          <td>Cella</td>\n          <td>Cella</td>\n          <td>Cella</td>\n          <td>Cella</td>\n        </tr>\n        <tr>\n          <th scope='row'>2</th>\n          <td>Cella</td>\n          <td>Cella</td>\n          <td>Cella</td>\n          <td>Cella</td>\n          <td>Cella</td>\n        </tr>\n        <tr>\n          <th scope='row'>3</th>\n          <td>Cella</td>\n          <td>Cella</td>\n          <td>Cella</td>\n          <td>Cella</td>\n          <td>Cella</td>\n        </tr>\n      </tbody>\n    </Table>\n\n    <Table responsive size='md'>\n      <thead>\n        <tr>\n          <th scope='col'>#</th>\n          <th scope='col'>Intestazione</th>\n          <th scope='col'>Intestazione</th>\n          <th scope='col'>Intestazione</th>\n          <th scope='col'>Intestazione</th>\n          <th scope='col'>Intestazione</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <th scope='row'>1</th>\n          <td>Cella</td>\n          <td>Cella</td>\n          <td>Cella</td>\n          <td>Cella</td>\n          <td>Cella</td>\n        </tr>\n        <tr>\n          <th scope='row'>2</th>\n          <td>Cella</td>\n          <td>Cella</td>\n          <td>Cella</td>\n          <td>Cella</td>\n          <td>Cella</td>\n        </tr>\n        <tr>\n          <th scope='row'>3</th>\n          <td>Cella</td>\n          <td>Cella</td>\n          <td>Cella</td>\n          <td>Cella</td>\n          <td>Cella</td>\n        </tr>\n      </tbody>\n    </Table>\n\n    <Table responsive size='lg'>\n      <thead>\n        <tr>\n          <th scope='col'>#</th>\n          <th scope='col'>Intestazione</th>\n          <th scope='col'>Intestazione</th>\n          <th scope='col'>Intestazione</th>\n          <th scope='col'>Intestazione</th>\n          <th scope='col'>Intestazione</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <th scope='row'>1</th>\n          <td>Cella</td>\n          <td>Cella</td>\n          <td>Cella</td>\n          <td>Cella</td>\n          <td>Cella</td>\n        </tr>\n        <tr>\n          <th scope='row'>2</th>\n          <td>Cella</td>\n          <td>Cella</td>\n          <td>Cella</td>\n          <td>Cella</td>\n          <td>Cella</td>\n        </tr>\n        <tr>\n          <th scope='row'>3</th>\n          <td>Cella</td>\n          <td>Cella</td>\n          <td>Cella</td>\n          <td>Cella</td>\n          <td>Cella</td>\n        </tr>\n      </tbody>\n    </Table>\n\n    <Table responsive size='xl'>\n      <thead>\n        <tr>\n          <th scope='col'>#</th>\n          <th scope='col'>Intestazione</th>\n          <th scope='col'>Intestazione</th>\n          <th scope='col'>Intestazione</th>\n          <th scope='col'>Intestazione</th>\n          <th scope='col'>Intestazione</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <th scope='row'>1</th>\n          <td>Cella</td>\n          <td>Cella</td>\n          <td>Cella</td>\n          <td>Cella</td>\n          <td>Cella</td>\n        </tr>\n        <tr>\n          <th scope='row'>2</th>\n          <td>Cella</td>\n          <td>Cella</td>\n          <td>Cella</td>\n          <td>Cella</td>\n          <td>Cella</td>\n        </tr>\n        <tr>\n          <th scope='row'>3</th>\n          <td>Cella</td>\n          <td>Cella</td>\n          <td>Cella</td>\n          <td>Cella</td>\n          <td>Cella</td>\n        </tr>\n      </tbody>\n    </Table>\n  </>",
      ...(_J = (_I = TableBreakpoint.parameters) == null ? void 0 : _I.docs) == null ? void 0 : _J.source
    }
  }
};
const __namedExportsOrder = ["TableBase", "TableDark", "TableThead", "TableStriped", "TableBordered", "TableBorderless", "TableHover", "TableCompact", "TableContextual", "TableCaptions", "TableResponsive", "TableBreakpoint"];
const TablesStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TableBase,
  TableBordered,
  TableBorderless,
  TableBreakpoint,
  TableCaptions,
  TableCompact,
  TableContextual,
  TableDark,
  TableHover,
  TableResponsive,
  TableStriped,
  TableThead,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  TablesStories as T,
  TableBase as a,
  TableDark as b,
  TableThead as c,
  TableStriped as d,
  TableBordered as e,
  TableBorderless as f,
  TableHover as g,
  TableCompact as h,
  TableContextual as i,
  TableCaptions as j,
  TableResponsive as k,
  TableBreakpoint as l
};
