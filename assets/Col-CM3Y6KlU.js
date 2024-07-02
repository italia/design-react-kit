import { R as React } from "./index-C-_iGYWo.js";
import { P as PropTypes } from "./index-C6XlOQIa.js";
import { c as classNames } from "./index-xoeSAV6i.js";
import { t as tagPropType, d as deprecated, m as mapToCssModules, i as isObject } from "./utils-BFoSoHid.js";
var _excluded$1 = ["className", "cssModule", "noGutters", "tag", "widths"];
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
var rowColWidths = ["xs", "sm", "md", "lg", "xl", "xxl"];
var rowColsPropType = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
var propTypes$1 = {
  tag: tagPropType,
  noGutters: deprecated(PropTypes.bool, "Please use Bootstrap 5 gutter utility classes. https://getbootstrap.com/docs/5.0/layout/gutters/"),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  xs: rowColsPropType,
  sm: rowColsPropType,
  md: rowColsPropType,
  lg: rowColsPropType,
  xl: rowColsPropType,
  xxl: rowColsPropType,
  widths: PropTypes.array
};
function Row(props) {
  var className = props.className, cssModule = props.cssModule, noGutters = props.noGutters, _props$tag = props.tag, Tag = _props$tag === void 0 ? "div" : _props$tag, _props$widths = props.widths, widths = _props$widths === void 0 ? rowColWidths : _props$widths, attributes = _objectWithoutProperties$1(props, _excluded$1);
  var colClasses = [];
  widths.forEach(function(colWidth, i) {
    var colSize = props[colWidth];
    delete attributes[colWidth];
    if (!colSize) {
      return;
    }
    var isXs = !i;
    colClasses.push(isXs ? "row-cols-".concat(colSize) : "row-cols-".concat(colWidth, "-").concat(colSize));
  });
  var classes = mapToCssModules(classNames(className, noGutters ? "gx-0" : null, "row", colClasses), cssModule);
  return /* @__PURE__ */ React.createElement(Tag, _extends$1({}, attributes, {
    className: classes
  }));
}
Row.propTypes = propTypes$1;
var _excluded = ["className", "cssModule", "widths", "tag"];
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
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var colWidths = ["xs", "sm", "md", "lg", "xl", "xxl"];
var stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
var columnProps = PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string, PropTypes.shape({
  size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
  order: stringOrNumberProp,
  offset: stringOrNumberProp
})]);
var propTypes = {
  tag: tagPropType,
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  xxl: columnProps,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  widths: PropTypes.array
};
var getColumnSizeClass = function getColumnSizeClass2(isXs, colWidth, colSize) {
  if (colSize === true || colSize === "") {
    return isXs ? "col" : "col-".concat(colWidth);
  }
  if (colSize === "auto") {
    return isXs ? "col-auto" : "col-".concat(colWidth, "-auto");
  }
  return isXs ? "col-".concat(colSize) : "col-".concat(colWidth, "-").concat(colSize);
};
var getColumnClasses = function getColumnClasses2(attributes, cssModule) {
  var widths = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : colWidths;
  var modifiedAttributes = attributes;
  var colClasses = [];
  widths.forEach(function(colWidth, i) {
    var columnProp = modifiedAttributes[colWidth];
    delete modifiedAttributes[colWidth];
    if (!columnProp && columnProp !== "") {
      return;
    }
    var isXs = !i;
    if (isObject(columnProp)) {
      var _classNames;
      var colSizeInterfix = isXs ? "-" : "-".concat(colWidth, "-");
      var colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);
      colClasses.push(mapToCssModules(classNames((_classNames = {}, _defineProperty(_classNames, colClass, columnProp.size || columnProp.size === ""), _defineProperty(_classNames, "order".concat(colSizeInterfix).concat(columnProp.order), columnProp.order || columnProp.order === 0), _defineProperty(_classNames, "offset".concat(colSizeInterfix).concat(columnProp.offset), columnProp.offset || columnProp.offset === 0), _classNames)), cssModule));
    } else {
      var _colClass = getColumnSizeClass(isXs, colWidth, columnProp);
      colClasses.push(_colClass);
    }
  });
  return {
    colClasses,
    modifiedAttributes
  };
};
function Col(props) {
  var className = props.className, cssModule = props.cssModule, _props$widths = props.widths, widths = _props$widths === void 0 ? colWidths : _props$widths, _props$tag = props.tag, Tag = _props$tag === void 0 ? "div" : _props$tag, attributes = _objectWithoutProperties(props, _excluded);
  var _getColumnClasses = getColumnClasses(attributes, cssModule, widths), modifiedAttributes = _getColumnClasses.modifiedAttributes, colClasses = _getColumnClasses.colClasses;
  if (!colClasses.length) {
    colClasses.push("col");
  }
  var classes = mapToCssModules(classNames(className, colClasses), cssModule);
  return /* @__PURE__ */ React.createElement(Tag, _extends({}, modifiedAttributes, {
    className: classes
  }));
}
Col.propTypes = propTypes;
export {
  Col as C,
  Row as R
};
