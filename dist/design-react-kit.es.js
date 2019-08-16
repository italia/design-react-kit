import WebFont from 'webfontloader';
import { Util, Badge as Badge$1, FormGroup as FormGroup$1, Input as Input$1, Label, Jumbotron, Button } from 'reactstrap';
export { Alert, Breadcrumb, BreadcrumbItem, Button, ButtonDropdown, ButtonGroup, ButtonToolbar, CardBody, CardColumns, CardDeck, CardFooter, CardGroup, CardHeader, CardImg, CardImgOverlay, CardLink, CardSubtitle, CardText, CardTitle, Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem, Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Fade, Form, FormFeedback, FormText, InputGroup, InputGroupAddon, InputGroupButtonDropdown, InputGroupText, Jumbotron, Label, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Media, Modal, ModalBody, ModalFooter, ModalHeader, Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarToggler, PaginationItem as PagerItem, PaginationLink as PagerLink, Popover, PopoverBody, PopoverHeader, PopperContent, PopperTargetHelper, Row, TabContent, TabPane, Table, Tooltip, UncontrolledAlert, UncontrolledButtonDropdown, UncontrolledCarousel, UncontrolledDropdown, UncontrolledTooltip, Util } from 'reactstrap';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import Transition from 'react-transition-group/Transition';

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var interopRequireDefault = createCommonjsModule(function (module) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  module.exports = _interopRequireDefault;
});
unwrapExports(interopRequireDefault);

var _extends_1 = createCommonjsModule(function (module) {
  function _extends() {
    module.exports = _extends = Object.assign || function (target) {
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

  module.exports = _extends;
});

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty;

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

var arrayWithoutHoles = _arrayWithoutHoles;

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

var iterableToArray = _iterableToArray;

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var nonIterableSpread = _nonIterableSpread;

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

var toConsumableArray = _toConsumableArray;

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck;

var _typeof_1 = createCommonjsModule(function (module) {
  function _typeof2(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof2 = function _typeof2(obj) {
        return typeof obj;
      };
    } else {
      _typeof2 = function _typeof2(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof2(obj);
  }

  function _typeof(obj) {
    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      module.exports = _typeof = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      module.exports = _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return _typeof(obj);
  }

  module.exports = _typeof;
});

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var assertThisInitialized = _assertThisInitialized;

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

var possibleConstructorReturn = _possibleConstructorReturn;

var getPrototypeOf = createCommonjsModule(function (module) {
  function _getPrototypeOf(o) {
    module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  module.exports = _getPrototypeOf;
});

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
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var createClass = _createClass;

var setPrototypeOf = createCommonjsModule(function (module) {
  function _setPrototypeOf(o, p) {
    module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  module.exports = _setPrototypeOf;
});

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

var inherits = _inherits;

var classnames = createCommonjsModule(function (module) {
  /*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */

  /* global define */
  (function () {

    var hasOwn = {}.hasOwnProperty;

    function classNames() {
      var classes = [];

      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg) continue;
        var argType = typeof arg;

        if (argType === 'string' || argType === 'number') {
          classes.push(arg);
        } else if (Array.isArray(arg) && arg.length) {
          var inner = classNames.apply(null, arg);

          if (inner) {
            classes.push(inner);
          }
        } else if (argType === 'object') {
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes.push(key);
            }
          }
        }
      }

      return classes.join(' ');
    }

    if ( module.exports) {
      classNames["default"] = classNames;
      module.exports = classNames;
    } else {
      window.classNames = classNames;
    }
  })();
});

var throttle_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;

  var throttle = function throttle(fn) {
    var threshold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
    var last;
    var timer;
    return function () {
      var now = +new Date();
      var timePassed = !!last && now < last + threshold;

      if (timePassed) {
        clearTimeout(timer);
        timer = setTimeout(function () {
          last = now;
          fn();
        }, threshold);
      } else {
        last = now;
        fn();
      }
    };
  };

  var _default = throttle;
  exports["default"] = _default;
});
unwrapExports(throttle_1);

var Scrollspy_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;

  var _extends2 = interopRequireDefault(_extends_1);

  var _defineProperty2 = interopRequireDefault(defineProperty);

  var _toConsumableArray2 = interopRequireDefault(toConsumableArray);

  var _classCallCheck2 = interopRequireDefault(classCallCheck);

  var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn);

  var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf);

  var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized);

  var _createClass2 = interopRequireDefault(createClass);

  var _inherits2 = interopRequireDefault(inherits);

  var _propTypes = interopRequireDefault(PropTypes);

  var _react = interopRequireDefault(React);

  var _classnames = interopRequireDefault(classnames);

  var _throttle = interopRequireDefault(throttle_1);

  function isEqualArray(a, b) {
    return a.length === b.length && a.every(function (item, index) {
      return item === b[index];
    });
  }

  var Scrollspy =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2["default"])(Scrollspy, _React$Component);
    (0, _createClass2["default"])(Scrollspy, null, [{
      key: "propTypes",
      get: function get() {
        return {
          items: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired,
          currentClassName: _propTypes["default"].string.isRequired,
          scrolledPastClassName: _propTypes["default"].string,
          style: _propTypes["default"].object,
          componentTag: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
          offset: _propTypes["default"].number,
          rootEl: _propTypes["default"].string,
          onUpdate: _propTypes["default"].func
        };
      }
    }, {
      key: "defaultProps",
      get: function get() {
        return {
          items: [],
          currentClassName: '',
          style: {},
          componentTag: 'ul',
          offset: 0,
          onUpdate: function onUpdate() {}
        };
      }
    }]);

    function Scrollspy(props) {
      var _this;

      (0, _classCallCheck2["default"])(this, Scrollspy);
      _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Scrollspy).call(this, props));
      _this.state = {
        targetItems: [],
        inViewState: [],
        isScrolledPast: [] // manually bind as ES6 does not apply this
        // auto binding as React.createClass does

      };
      _this._handleSpy = _this._handleSpy.bind((0, _assertThisInitialized2["default"])(_this));
      return _this;
    }

    (0, _createClass2["default"])(Scrollspy, [{
      key: "_initSpyTarget",
      value: function _initSpyTarget(items) {
        var targetItems = items.map(function (item) {
          return document.getElementById(item);
        });
        return targetItems;
      } // https://github.com/makotot/react-scrollspy/pull/45

    }, {
      key: "_fillArray",
      value: function _fillArray(array, val) {
        var newArray = [];

        for (var i = 0, max = array.length; i < max; i++) {
          newArray[i] = val;
        }

        return newArray;
      }
    }, {
      key: "_isScrolled",
      value: function _isScrolled() {
        return this._getScrollDimension().scrollTop > 0;
      }
    }, {
      key: "_getScrollDimension",
      value: function _getScrollDimension() {
        var doc = document;
        var rootEl = this.props.rootEl;
        var scrollTop = rootEl ? doc.querySelector(rootEl).scrollTop : doc.documentElement.scrollTop || doc.body.parentNode.scrollTop || doc.body.scrollTop;
        var scrollHeight = rootEl ? doc.querySelector(rootEl).scrollHeight : doc.documentElement.scrollHeight || doc.body.parentNode.scrollHeight || doc.body.scrollHeight;
        return {
          scrollTop: scrollTop,
          scrollHeight: scrollHeight
        };
      }
    }, {
      key: "_getElemsViewState",
      value: function _getElemsViewState(targets) {
        var elemsInView = [];
        var elemsOutView = [];
        var viewStatusList = [];
        var targetItems = targets ? targets : this.state.targetItems;
        var hasInViewAlready = false;

        for (var i = 0, max = targetItems.length; i < max; i++) {
          var currentContent = targetItems[i];
          var isInView = hasInViewAlready ? false : this._isInView(currentContent);

          if (isInView) {
            hasInViewAlready = true;
            elemsInView.push(currentContent);
          } else {
            elemsOutView.push(currentContent);
          }

          var isLastItem = i === max - 1;

          var isScrolled = this._isScrolled(); // https://github.com/makotot/react-scrollspy/pull/26#issue-167413769


          var isLastShortItemAtBottom = this._isAtBottom() && this._isInView(currentContent) && !isInView && isLastItem && isScrolled;

          if (isLastShortItemAtBottom) {
            elemsOutView.pop();
            elemsOutView.push.apply(elemsOutView, (0, _toConsumableArray2["default"])(elemsInView));
            elemsInView = [currentContent];
            viewStatusList = this._fillArray(viewStatusList, false);
            isInView = true;
          }

          viewStatusList.push(isInView);
        }

        return {
          inView: elemsInView,
          outView: elemsOutView,
          viewStatusList: viewStatusList,
          scrolledPast: this.props.scrolledPastClassName && this._getScrolledPast(viewStatusList)
        };
      }
    }, {
      key: "_isInView",
      value: function _isInView(el) {
        if (!el) {
          return false;
        }

        var _this$props = this.props,
            rootEl = _this$props.rootEl,
            offset = _this$props.offset;
        var rootRect;

        if (rootEl) {
          rootRect = document.querySelector(rootEl).getBoundingClientRect();
        }

        var rect = el.getBoundingClientRect();
        var winH = rootEl ? rootRect.height : window.innerHeight;

        var _this$_getScrollDimen = this._getScrollDimension(),
            scrollTop = _this$_getScrollDimen.scrollTop;

        var scrollBottom = scrollTop + winH;
        var elTop = rootEl ? rect.top + scrollTop - rootRect.top + offset : rect.top + scrollTop + offset;
        var elBottom = elTop + el.offsetHeight;
        return elTop < scrollBottom && elBottom > scrollTop;
      }
    }, {
      key: "_isAtBottom",
      value: function _isAtBottom() {
        var rootEl = this.props.rootEl;

        var _this$_getScrollDimen2 = this._getScrollDimension(),
            scrollTop = _this$_getScrollDimen2.scrollTop,
            scrollHeight = _this$_getScrollDimen2.scrollHeight;

        var winH = rootEl ? document.querySelector(rootEl).getBoundingClientRect().height : window.innerHeight;
        var scrolledToBottom = scrollTop + winH >= scrollHeight;
        return scrolledToBottom;
      }
    }, {
      key: "_getScrolledPast",
      value: function _getScrolledPast(viewStatusList) {
        if (!viewStatusList.some(function (item) {
          return item;
        })) {
          return viewStatusList;
        }

        var hasFoundInView = false;
        var scrolledPastItems = viewStatusList.map(function (item) {
          if (item && !hasFoundInView) {
            hasFoundInView = true;
            return false;
          }

          return !hasFoundInView;
        });
        return scrolledPastItems;
      }
    }, {
      key: "_spy",
      value: function _spy(targets) {
        var _this2 = this;

        var elemensViewState = this._getElemsViewState(targets);

        var currentStatuses = this.state.inViewState;
        this.setState({
          inViewState: elemensViewState.viewStatusList,
          isScrolledPast: elemensViewState.scrolledPast
        }, function () {
          _this2._update(currentStatuses);
        });
      }
    }, {
      key: "_update",
      value: function _update(prevStatuses) {
        if (isEqualArray(this.state.inViewState, prevStatuses)) {
          return;
        }

        this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(true)]);
      }
    }, {
      key: "_handleSpy",
      value: function _handleSpy() {
        (0, _throttle["default"])(this._spy(), 100);
      }
    }, {
      key: "_initFromProps",
      value: function _initFromProps() {
        var targetItems = this._initSpyTarget(this.props.items);

        this.setState({
          targetItems: targetItems
        });

        this._spy(targetItems);
      }
    }, {
      key: "offEvent",
      value: function offEvent() {
        var el = this.props.rootEl ? document.querySelector(this.props.rootEl) : window;
        el.removeEventListener('scroll', this._handleSpy);
      }
    }, {
      key: "onEvent",
      value: function onEvent() {
        var el = this.props.rootEl ? document.querySelector(this.props.rootEl) : window;
        el.addEventListener('scroll', this._handleSpy);
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        this._initFromProps();

        this.onEvent();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.offEvent();
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps() {
        this._initFromProps();
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        var Tag = this.props.componentTag;
        var _this$props2 = this.props,
            children = _this$props2.children,
            className = _this$props2.className,
            scrolledPastClassName = _this$props2.scrolledPastClassName,
            style = _this$props2.style;
        var counter = 0;

        var items = _react["default"].Children.map(children, function (child, idx) {
          var _classNames;

          if (!child) {
            return null;
          }

          var ChildTag = child.type;
          var isScrolledPast = scrolledPastClassName && _this3.state.isScrolledPast[idx];
          var childClass = (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(child.props.className), child.props.className), (0, _defineProperty2["default"])(_classNames, "".concat(_this3.props.currentClassName), _this3.state.inViewState[idx]), (0, _defineProperty2["default"])(_classNames, "".concat(_this3.props.scrolledPastClassName), isScrolledPast), _classNames));
          return _react["default"].createElement(ChildTag, (0, _extends2["default"])({}, child.props, {
            className: childClass,
            key: counter++
          }), child.props.children);
        });

        var itemClass = (0, _classnames["default"])((0, _defineProperty2["default"])({}, "".concat(className), className));
        return _react["default"].createElement(Tag, {
          className: itemClass,
          style: style
        }, items);
      }
    }]);
    return Scrollspy;
  }(_react["default"].Component);

  exports["default"] = Scrollspy;
});
var Scrollspy = unwrapExports(Scrollspy_1);

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
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

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
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

function _assertThisInitialized$1(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};
var defaultProps = {
  tag: 'div'
};
function Accordion(props) {
  var className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "tag"]);

  var classes = classnames('collapse-div', className);
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}
Accordion.propTypes = propTypes;
Accordion.defaultProps = defaultProps;

var propTypes$1 = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  active: PropTypes.bool,
  onToggle: PropTypes.func
};
var defaultProps$1 = {
  tag: 'button'
};
function AccordionHeader(props) {
  var className = props.className,
      Tag = props.tag,
      active = props.active,
      onToggle = props.onToggle,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "tag", "active", "onToggle"]);

  var classes = classnames('collapse-header');
  var toggleClasses = classnames(className, {
    collapsed: active
  });
  return React.createElement("div", {
    className: classes
  }, React.createElement(Tag, _extends({
    "data-toggle": "collapse",
    "aria-expanded": active ? 'true' : 'false',
    className: toggleClasses,
    onClick: onToggle
  }, attributes)));
}
AccordionHeader.propTypes = propTypes$1;
AccordionHeader.defaultProps = defaultProps$1;

var _transitionStatusToCl;
var TransitionTimeouts = Util.TransitionTimeouts,
    TransitionPropTypeKeys = Util.TransitionPropTypeKeys,
    TransitionStatuses = Util.TransitionStatuses,
    pick = Util.pick,
    omit = Util.omit;

var propTypes$2 = _extends({}, Transition.propTypes, {
  // eslint-disable-line react/forbid-foreign-prop-types
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  active: PropTypes.bool,
  onToggle: PropTypes.func
});

var defaultProps$2 = _extends({}, Transition.defaultProps, {
  timeout: TransitionTimeouts.Collapse,
  tag: 'div'
});

var transitionStatusToClassHash = (_transitionStatusToCl = {}, _transitionStatusToCl[TransitionStatuses.ENTERING] = 'collapsing', _transitionStatusToCl[TransitionStatuses.ENTERED] = 'collapse show', _transitionStatusToCl[TransitionStatuses.EXITING] = 'collapsing', _transitionStatusToCl[TransitionStatuses.EXITED] = 'collapse', _transitionStatusToCl);

function getTransitionClass(status) {
  return transitionStatusToClassHash[status] || 'collapse';
}

function getHeight(node) {
  return node.scrollHeight;
}

var AccordionBody =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(AccordionBody, _Component);

  function AccordionBody() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty$1(_assertThisInitialized$1(_this), "state", {
      height: null
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onEntering", function (node, isAppearing) {
      _this.setState({
        height: getHeight(node)
      });

      _this.props.onEntering(node, isAppearing);
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onEntered", function (node, isAppearing) {
      _this.setState({
        height: null
      });

      _this.props.onEntered(node, isAppearing);
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onExit", function (node) {
      _this.setState({
        height: getHeight(node)
      });

      _this.props.onExit(node);
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onExiting", function (node) {
      // getting this variable triggers a reflow
      _this.setState({
        height: 0
      });

      _this.props.onExiting(node);
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onExited", function (node) {
      _this.setState({
        height: null
      });

      _this.props.onExited(node);
    });

    return _this;
  }

  var _proto = AccordionBody.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        Tag = _this$props.tag,
        active = _this$props.active,
        children = _this$props.children,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "tag", "active", "children"]);

    var height = this.state.height;
    var transitionProps = pick(attributes, TransitionPropTypeKeys);
    var childProps = omit(attributes, TransitionPropTypeKeys);
    return React.createElement(Transition, _extends({}, transitionProps, {
      "in": active,
      onEntering: this.onEntering,
      onEntered: this.onEntered,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }), function (status) {
      var transitionClass = getTransitionClass(status);
      var classes = classnames(className, transitionClass);
      var style = height === null ? null : {
        height: height
      };
      return React.createElement(Tag, _extends({
        className: classes,
        style: _extends({}, childProps.style, {}, style)
      }, childProps), React.createElement("div", {
        className: "collapse-body"
      }, children));
    });
  };

  return AccordionBody;
}(Component);
AccordionBody.propTypes = propTypes$2;
AccordionBody.defaultProps = defaultProps$2;

var propTypes$3 = {
  color: PropTypes.string,
  pill: PropTypes.bool,
  tag: PropTypes.string,
  children: PropTypes.node,
  cssModule: PropTypes.object,
  className: PropTypes.string
};
var defaultProps$3 = {
  color: 'secondary',
  pill: false,
  tag: 'span'
};

var Badge = function Badge(props) {
  var children = props.children;
  return React.createElement(Badge$1, props, children);
};

Badge.propTypes = propTypes$3;
Badge.defaultProps = defaultProps$3;

var _transitionStatusToCl$1;
var mapToCssModules = Util.mapToCssModules,
    omit$1 = Util.omit,
    pick$1 = Util.pick,
    TransitionTimeouts$1 = Util.TransitionTimeouts,
    TransitionPropTypeKeys$1 = Util.TransitionPropTypeKeys,
    TransitionStatuses$1 = Util.TransitionStatuses;

var propTypes$4 = _extends({}, Transition.propTypes, {
  // eslint-disable-line react/forbid-foreign-prop-types
  isOpen: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.node,
  navbar: PropTypes.bool,
  cssModule: PropTypes.object
});

var defaultProps$4 = _extends({}, Transition.defaultProps, {
  isOpen: false,
  appear: false,
  enter: true,
  exit: true,
  tag: 'div',
  timeout: TransitionTimeouts$1.Collapse
});

var transitionStatusToClassHash$1 = (_transitionStatusToCl$1 = {}, _transitionStatusToCl$1[TransitionStatuses$1.ENTERING] = 'collapsing', _transitionStatusToCl$1[TransitionStatuses$1.ENTERED] = 'collapse show', _transitionStatusToCl$1[TransitionStatuses$1.EXITING] = 'collapsing', _transitionStatusToCl$1[TransitionStatuses$1.EXITED] = 'collapse', _transitionStatusToCl$1);

function getTransitionClass$1(status) {
  return transitionStatusToClassHash$1[status] || 'collapse';
}

function getHeight$1(node) {
  return node.scrollHeight;
}

var Collapse =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Collapse, _Component);

  function Collapse(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      height: null
    };
    ['onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'].forEach(function (name) {
      _this[name] = _this[name].bind(_assertThisInitialized$1(_this));
    });
    return _this;
  }

  var _proto = Collapse.prototype;

  _proto.onEntering = function onEntering(node, isAppearing) {
    this.setState({
      height: getHeight$1(node)
    });
    this.props.onEntering(node, isAppearing);
  };

  _proto.onEntered = function onEntered(node, isAppearing) {
    this.setState({
      height: null
    });
    this.props.onEntered(node, isAppearing);
  };

  _proto.onExit = function onExit(node) {
    this.setState({
      height: getHeight$1(node)
    });
    this.props.onExit(node);
  };

  _proto.onExiting = function onExiting(node) {
    // getting this variable triggers a reflow
    this.setState({
      height: 0
    });
    this.props.onExiting(node);
  };

  _proto.onExited = function onExited(node) {
    this.setState({
      height: null
    });
    this.props.onExited(node);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Tag = _this$props.tag,
        isOpen = _this$props.isOpen,
        className = _this$props.className,
        navbar = _this$props.navbar,
        cssModule = _this$props.cssModule,
        children = _this$props.children,
        otherProps = _objectWithoutPropertiesLoose(_this$props, ["tag", "isOpen", "className", "navbar", "cssModule", "children"]);

    var height = this.state.height; // In NODE_ENV=production the Transition.propTypes are wrapped which results in an
    // empty object "{}". This is the result of the `react-transition-group` babel
    // configuration settings. Therefore, to ensure that production builds work without
    // error, we can either explicitly define keys or use the Transition.defaultProps.
    // Using the Transition.defaultProps excludes any required props. Thus, the best
    // solution is to explicitly define required props in our utilities and reference these.
    // This also gives us more flexibility in the future to remove the prop-types
    // dependency in distribution builds (Similar to how `react-transition-group` does).
    // Note: Without omitting the `react-transition-group` props, the resulting child
    // Tag component would inherit the Transition properties as attributes for the HTML
    // element which results in errors/warnings for non-valid attributes.

    var transitionProps = pick$1(otherProps, TransitionPropTypeKeys$1);
    var childProps = omit$1(otherProps, TransitionPropTypeKeys$1);
    return React.createElement(Transition, _extends({}, transitionProps, {
      "in": isOpen,
      onEntering: this.onEntering,
      onEntered: this.onEntered,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }), function (status) {
      var collapseClass = getTransitionClass$1(status);
      var classes = mapToCssModules(classnames(className, collapseClass, navbar && 'navbar-collapse', navbar && 'navbar-collapsable'), cssModule);
      var style = height === null ? null : {
        height: height // Needed for `bootstrap-italia`

      };
      var customStyles = isOpen ? {
        position: 'relative',
        display: 'block'
      } : {};
      return React.createElement(Tag, _extends({}, childProps, {
        style: _extends({}, childProps.style, {}, style, {}, customStyles),
        className: classes
      }), children);
    });
  };

  return Collapse;
}(Component);

Collapse.propTypes = propTypes$4;
Collapse.defaultProps = defaultProps$4;

var FormGroup =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(FormGroup, _Component);

  function FormGroup() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty$1(_assertThisInitialized$1(_this), "state", {
      active: _this.props.active || false,
      value: null
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onFocus", function (callback, active) {
      if (active === void 0) {
        active = true;
      }

      _this.setState({
        active: active
      }, function () {
        if (callback) {
          callback();
        }
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onBlur", function (callback, active) {
      if (active === void 0) {
        active = false;
      }

      _this.setState({
        active: active
      }, function () {
        if (callback) {
          callback();
        }
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onChange", function (callback, event) {
      var value;
      var target;

      if (event && event.persist) {
        // SyntheticEvent
        event.persist();
        target = {
          event: event
        };
        value = {
          target: target
        };
      } else if (event.label) {
        // Autocomplete
        value = event.label;
      }

      _this.setState({
        value: value
      }, function () {
        if (callback) {
          callback(event);
        }
      });
    });

    return _this;
  }

  var _proto = FormGroup.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$state = this.state,
        active = _this$state.active,
        value = _this$state.value;

    var _this$props = this.props,
        children = _this$props.children,
        className = _this$props.className,
        col = _this$props.col,
        rest = _objectWithoutPropertiesLoose(_this$props, ["children", "className", "col"]);

    var hasValue = !!value;
    var classNames = [className, active ? 'active' : '', col ? 'col' : ''].join(' ');
    return React.createElement(FormGroup$1, _extends({}, rest, {
      className: classNames
    }), function () {
      return React.Children.map(children, function (child) {
        if (child === null) return;
        var _child$props = child.props,
            _onFocus = _child$props.onFocus,
            _onBlur = _child$props.onBlur,
            _onChange = _child$props.onChange,
            className = _child$props.className;

        switch (child.type) {
          case Input$1:
            var isLabelActive = null;
            return React.cloneElement(child, _extends({}, child.props, {
              onFocus: function onFocus() {
                _this2.onFocus(_onFocus);
              },
              onBlur: function onBlur() {
                _this2.onBlur(_onBlur);
              },
              onChange: function onChange(e) {
                _this2.onChange(_onChange, e);
              }
            }, isLabelActive));

          case Label:
            var hasChildValue = false;
            React.Children.toArray(children).filter(function (child) {
              switch (child.type) {
                case Input$1:
                  return true;

                default:
                  return false;
              }
            }).map(function (child) {
              if (child.props.value) {
                hasChildValue = true;
              }

              return false;
            });
            classNames = hasValue || hasChildValue ? [className, 'active'].join(' ') : className;
            return React.cloneElement(child, _extends({}, child.props, {
              className: classNames
            }));

          default:
            return child;
        }
      });
    }());
  };

  return FormGroup;
}(Component);

FormGroup.defaultProps = FormGroup$1.defaultProps;
FormGroup.propTypes = FormGroup$1.propTypes;

function Hero(props) {
  return React.createElement(Jumbotron, props);
}
Hero.defaultProps = Jumbotron.defaultProps;
Hero.propTypes = Jumbotron.propTypes;

var iconSprite = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtYXJyb3ctZG93biIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTcuOSAxMy4ybC01LjQgNS4zVjNoLTF2MTUuNWwtNS40LTUuMy0uNy43IDYuNiA2LjUgNi42LTYuNXpNMTIgMTl6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtYXJyb3ctZG93bi1jaXJjbGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE1LjYgMTMuMmwuNy43LTQuMyA0LjMtNC4zLTQuMy43LS43IDMuMSAzLjFWN2gxdjkuMnpNMjIgMTJBMTAgMTAgMCAxIDEgMTIgMmExMCAxMCAwIDAgMSAxMCAxMHptLTEgMGE5IDkgMCAxIDAtOSA5IDkgOSAwIDAgMCA5LTl6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtYXJyb3ctZG93bi10cmlhbmdsZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOS4yIDEyaDUuNmExIDEgMCAwIDEgLjcgMS43TDEyIDE3LjNsLTMuNS0zLjZhMSAxIDAgMCAxIC43LTEuN3oiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1hcnJvdy1sZWZ0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0yMSAxMS41SDUuNWw1LjMtNS40LS43LS43TDMuNiAxMmw2LjUgNi42LjctLjctNS4zLTUuNEgyMXpNNSAxMnoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1hcnJvdy1sZWZ0LWNpcmNsZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNy43IDExLjVIMTd2MUg3LjhsMyAzLjEtLjcuN0w1LjggMTJsNC4zLTQuMy43Ljd6TTIyIDEyQTEwIDEwIDAgMSAxIDEyIDJhMTAgMTAgMCAwIDEgMTAgMTB6bS0xIDBhOSA5IDAgMSAwLTkgOSA5IDkgMCAwIDAgOS05eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWFycm93LWxlZnQtdHJpYW5nbGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDkuMnY1LjZhMSAxIDAgMCAxLTEuNy43TDYuOCAxMmwzLjUtMy41YTEgMSAwIDAgMSAxLjcuN3oiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1hcnJvdy1yaWdodCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTMuOSA1LjRsLS43LjcgNS4zIDUuNEgzdjFoMTUuNWwtNS4zIDUuNC43LjcgNi42LTYuNnpNMTkgMTJ6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtYXJyb3ctcmlnaHQtY2lyY2xlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMy45IDcuN2w0LjMgNC4zLTQuMyA0LjMtLjctLjcgMy4xLTMuMUg3di0xaDkuMmwtMy0zLjF6TTIyIDEyQTEwIDEwIDAgMSAxIDEyIDJhMTAgMTAgMCAwIDEgMTAgMTB6bS0xIDBhOSA5IDAgMSAwLTkgOSA5IDkgMCAwIDAgOS05eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWFycm93LXJpZ2h0LXRyaWFuZ2xlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMiAxNC44VjkuMmExIDEgMCAwIDEgMS43LS43bDMuNSAzLjUtMy41IDMuNWExIDEgMCAwIDEtMS43LS43eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWFycm93LXVwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xOC42IDEwLjFMMTIgMy41bC02LjYgNi42LjcuNyA1LjQtNS4zVjIxaDFWNS41bDUuNCA1LjN6TTEyIDV6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtYXJyb3ctdXAtY2lyY2xlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMiA1LjhsNC4zIDQuMy0uNy43LTMuMS0zLjFWMTdoLTFWNy44bC0zLjEgMy0uNy0uN3pNMjIgMTJBMTAgMTAgMCAxIDEgMTIgMmExMCAxMCAwIDAgMSAxMCAxMHptLTEgMGE5IDkgMCAxIDAtOSA5IDkgOSAwIDAgMCA5LTl6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtYXJyb3ctdXAtdHJpYW5nbGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE0LjggMTJIOS4yYTEgMSAwIDAgMS0uNy0xLjdMMTIgNi44bDMuNSAzLjVhMSAxIDAgMCAxLS43IDEuN3oiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1iZWhhbmNlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48cGF0aCBkPSJNNy44MyA1Ljc1YTggOCAwIDAgMSAxLjYuMTUgMy4zOCAzLjM4IDAgMCAxIDEuMjQuNTFjLjM0NS4yMzMuNjIuNTU0LjguOTMuMjAyLjQ1Ni4yOTguOTUyLjI4IDEuNDVhMi42OCAyLjY4IDAgMCAxLS40MiAxLjU0IDMuMDUgMy4wNSAwIDAgMS0xLjI1IDEgMi45MiAyLjkyIDAgMCAxIDEuNjggMS4xNWMuMzkzLjU5LjU5IDEuMjkuNTYgMmEzLjM5IDMuMzkgMCAwIDEtLjMyIDEuNTkgMy4wOCAzLjA4IDAgMCAxLTEgMS4xMSA0LjI3IDQuMjcgMCAwIDEtMS40LjY0QTYgNiAwIDAgMSA4IDE4SDJWNS43NWg1Ljgzem0tLjM1IDVhMiAyIDAgMCAwIDEuMTktLjM1Yy4zMjgtLjI3LjUtLjY4Ny40Ni0xLjExQTEuNDcgMS40NyAwIDAgMCA5IDguNTRhMS4xNiAxLjE2IDAgMCAwLS40Mi0uNDNBMS44IDEuOCAwIDAgMCA4IDcuOWEzLjI2IDMuMjYgMCAwIDAtLjctLjA2SDQuNzR2Mi44N2wyLjc0LjA0em0uMTUgNS4yMmMuMjUyLjAwMy41MDMtLjAyLjc1LS4wN2EyIDIgMCAwIDAgLjYyLS4zIDEuMzkgMS4zOSAwIDAgMCAuNDQtLjQ5IDEuNzMgMS43MyAwIDAgMCAuMTYtLjhBMS42NCAxLjY0IDAgMCAwIDkuMDkgMTNhMi4zMyAyLjMzIDAgMCAwLTEuNDEtLjRINC43NHYzLjM4bDIuODktLjAxem04LjU0LS4wOGEyLjE4IDIuMTggMCAwIDAgMS41OC41NCAyLjI0IDIuMjQgMCAwIDAgMS4yNS0uMzcgMS42IDEuNiAwIDAgMCAuNjUtLjc5aDIuMTVhNC4wNiA0LjA2IDAgMCAxLTEuNTggMi4yOSA0LjY0IDQuNjQgMCAwIDEtMi41OC42OSA1LjIzIDUuMjMgMCAwIDEtMS45LS4zMyA0IDQgMCAwIDEtMi4zMy0yLjQ0IDUuMjUgNS4yNSAwIDAgMS0uMzItMS44OSA1LjEyIDUuMTIgMCAwIDEgLjMzLTEuODYgNC4xNCA0LjE0IDAgMCAxIC45My0xLjQ5IDQuNDggNC40OCAwIDAgMSAxLjQ0LTEgNC41OSA0LjU5IDAgMCAxIDEuODUtLjM2IDQuMzEgNC4zMSAwIDAgMSAyIC40NEE0IDQgMCAwIDEgMjEgMTAuNWMuMzcuNTA1LjYzNiAxLjA4Ljc4IDEuNjlhNi4xOCA2LjE4IDAgMCAxIC4xNyAyaC02LjM4YTIuNSAyLjUgMCAwIDAgLjYgMS43ek0xOSAxMS4yMmExLjgzIDEuODMgMCAwIDAtMS4zOC0uNDkgMiAyIDAgMCAwLTEgLjIgMS44IDEuOCAwIDAgMC0uNjIuNDkgMS42MiAxLjYyIDAgMCAwLS4zMy42MiAyLjg3IDIuODcgMCAwIDAtLjExLjU5aDRhMi40IDIuNCAwIDAgMC0uNTYtMS40MXptLTMuOTMtNC42NWg0Ljk4djEuMjFoLTQuOThWNi41N3oiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWJ1cmdlciIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjIgNXYxSDJWNXpNMiAxMi41aDIwdi0xSDJ6TTIgMTloMjB2LTFIMnoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1jYWxlbmRhciIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAuNSA0SDE3VjNoLTF2MUg4VjNIN3YxSDMuNUExLjUgMS41IDAgMCAwIDIgNS41djEzQTEuNSAxLjUgMCAwIDAgMy41IDIwaDE3YTEuNSAxLjUgMCAwIDAgMS41LTEuNXYtMTNBMS41IDEuNSAwIDAgMCAyMC41IDR6bS41IDE0LjVhLjUuNSAwIDAgMS0uNS41aC0xN2EuNS41IDAgMCAxLS41LS41di0xM2EuNS41IDAgMCAxIC41LS41SDd2MWgxVjVoOHYxaDFWNWgzLjVhLjUuNSAwIDAgMSAuNS41ek00IDhoMTZ2MUg0eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWNhbWVyYSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAuNSAyMGgtMTdBMS41IDEuNSAwIDAgMSAyIDE4LjV2LTEwQTEuNSAxLjUgMCAwIDEgMy41IDdoNC4zbDEuNS0yLjNhMS41IDEuNSAwIDAgMSAxLjItLjdoM2ExLjUgMS41IDAgMCAxIDEuMi43TDE2LjIgN2g0LjNBMS41IDEuNSAwIDAgMSAyMiA4LjV2MTBhMS41IDEuNSAwIDAgMS0xLjUgMS41ek0zLjUgOGEuNS41IDAgMCAwLS41LjV2MTBhLjUuNSAwIDAgMCAuNS41aDE3YS41LjUgMCAwIDAgLjUtLjV2LTEwYS41LjUgMCAwIDAtLjUtLjVoLTQuOGwtMS44LTIuOC0uNC0uMmgtM2wtLjQuMkw4LjMgOHpNMTIgMThhNSA1IDAgMSAxIDUtNSA1IDUgMCAwIDEtNSA1em0wLTlhNCA0IDAgMSAwIDQgNCA0IDQgMCAwIDAtNC00ek03IDVINHYxaDN6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtY2FyZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAuNSA1aC0xN0ExLjUgMS41IDAgMCAwIDIgNi41djExQTEuNSAxLjUgMCAwIDAgMy41IDE5aDE3YTEuNSAxLjUgMCAwIDAgMS41LTEuNXYtMTFBMS41IDEuNSAwIDAgMCAyMC41IDV6TTMgOWgxOHYzSDN6bTE4IDguNWEuNS41IDAgMCAxLS41LjVoLTE3YS41LjUgMCAwIDEtLjUtLjVWMTNoMTh6TTMgOFY2LjVhLjUuNSAwIDAgMSAuNS0uNWgxN2EuNS41IDAgMCAxIC41LjVWOHptNSA3SDR2LTFoNHoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1jaGVjayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOS42IDE2LjlMNCAxMS40bC44LS43IDQuOCA0LjggOC41LTguNC43Ljd6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtY2hlY2stY2lyY2xlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNy4xIDcuOWwuNy43LTcuOCA3LjYtNC43LTQuNi43LS43IDQgMy45ek0yMiAxMkExMCAxMCAwIDEgMSAxMiAyYTEwIDEwIDAgMCAxIDEwIDEwem0tMSAwYTkgOSAwIDEgMC05IDkgOSA5IDAgMCAwIDktOXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1jaGV2cm9uLWxlZnQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE0LjYgMTcuMkw5IDExLjYgMTQuNiA2bC44LjctNC45IDQuOSA0LjkgNC45eiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtY2hldnJvbi1yaWdodCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOS44IDE3LjJsLS44LS43IDQuOS00LjlMOSA2LjdsLjgtLjcgNS42IDUuNnoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWNsaXAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExIDIyYTIuOSAyLjkgMCAwIDEtMy0zVjZhNCA0IDAgMCAxIDggMHYxMGgtMVY2YTMgMyAwIDAgMC02IDB2MTNhMiAyIDAgMCAwIDQgMFY4YTEgMSAwIDAgMC0yIDB2OGgtMVY4YTIgMiAwIDAgMSA0IDB2MTFhMi45IDIuOSAwIDAgMS0zIDN6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtY2xvY2siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExLjUgNWgxdjcuNUg3di0xaDQuNXpNMjIgMTJBMTAgMTAgMCAxIDEgMTIgMmExMCAxMCAwIDAgMSAxMCAxMHptLTEgMGE5IDkgMCAxIDAtOSA5IDkgOSAwIDAgMCA5LTl6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtY2xvc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyLjcgMTJsMy43IDMuNi0uOC44LTMuNi0zLjctMy42IDMuNy0uOC0uOCAzLjctMy42LTMuNy0zLjYuOC0uOCAzLjYgMy43IDMuNi0zLjcuOC44eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWNsb3NlLWJpZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIuNyAxMmw2LjcgNi42LS44LjgtNi42LTYuNy02LjYgNi43LS44LS44IDYuNy02LjYtNi43LTYuNi44LS44IDYuNiA2LjcgNi42LTYuNy44Ljh6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtY2xvc2UtY2lyY2xlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNi4zIDguM0wxMi42IDEybDMuNyAzLjYtLjcuNy0zLjctMy42LTMuNiAzLjYtLjctLjcgMy42LTMuNi0zLjYtMy43LjctLjcgMy42IDMuNyAzLjctMy43ek0yMiAxMkExMCAxMCAwIDEgMSAxMiAyYTEwIDEwIDAgMCAxIDEwIDEwem0tMSAwYTkgOSAwIDEgMC05IDkgOSA5IDAgMCAwIDktOXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1jb2RlLWNpcmNsZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTkgMTJsLTIuOSAyLjktLjctLjggMi4xLTIuMS0yLjEtMi4xLjctLjh6TTcuOSA5LjFMNSAxMmwyLjkgMi45LjctLjhMNi41IDEybDIuMS0yLjF6TTIyIDEyQTEwIDEwIDAgMSAxIDEyIDJhMTAgMTAgMCAwIDEgMTAgMTB6bS0xIDBhOSA5IDAgMSAwLTkgOSA5IDkgMCAwIDAgOS05ek05LjYgMTYuNWwxIC4zIDMuNy05LjMtLjktLjN6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtY29sbGFwc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE2LjUgMTUuNGwtNC45LTQuOS00LjkgNC45LS43LS44TDExLjYgOWw1LjYgNS42eiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtY29tbWVudCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTkgM0g1YTIgMiAwIDAgMC0yIDJ2MTBhMiAyIDAgMCAwIDIgMmgydjUuNGwxLjctMS43IDMuNy0zLjdIMTlhMiAyIDAgMCAwIDItMlY1YTIgMiAwIDAgMC0yLTJ6bTEgMTJhLjkuOSAwIDAgMS0xIDFoLTdsLTQgNHYtNEg1YS45LjkgMCAwIDEtMS0xVjVhLjkuOSAwIDAgMSAxLTFoMTRhLjkuOSAwIDAgMSAxIDF6TTkgMTBhLjkuOSAwIDAgMS0xIDEgLjkuOSAwIDAgMS0xLTEgLjkuOSAwIDAgMSAxLTEgLjkuOSAwIDAgMSAxIDF6bTQgMGExIDEgMCAwIDEtMiAwIDEgMSAwIDAgMSAyIDB6bTQgMGExIDEgMCAwIDEtMiAwIDEgMSAwIDAgMSAyIDB6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtY29weSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTkuNSA0SDE4di0uNkExLjUgMS41IDAgMCAwIDE2LjUgMmgtMTFBMS41IDEuNSAwIDAgMCA0IDMuNHYxNS4yQTEuNSAxLjUgMCAwIDAgNS41IDIwSDd2LjZBMS41IDEuNSAwIDAgMCA4LjUgMjJoMTFhMS41IDEuNSAwIDAgMCAxLjUtMS40VjUuNEExLjUgMS41IDAgMCAwIDE5LjUgNHpNNSAxOC42VjMuNGEuNS41IDAgMCAxIC41LS40aDExYS41LjUgMCAwIDEgLjUuNHYxNS4yYS41LjUgMCAwIDEtLjUuNGgtMTFhLjUuNSAwIDAgMS0uNS0uNHptMTUgMmEuNS41IDAgMCAxLS41LjRoLTExYS41LjUgMCAwIDEtLjUtLjRWMjBoOC41YTEuNSAxLjUgMCAwIDAgMS41LTEuNFY1aDEuNWEuNS41IDAgMCAxIC41LjR6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtZGVzaWduZXJzLWl0YWxpYSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOC42NjMgMjAuNjc1VjcuNjQxSDEyLjN2MTMuMDU3SDguNjYzdi0uMDIzek0yMi45NTIgMTAuNjFoLTMuMzI1djUuMzU3YzAgLjUzNC4wMjQuODgyLjA0OCAxLjExMy4wMjQuMjEuMTIuMzk1LjI4OS41NTcuMTY5LjE2Mi40MzQuMjMyLjc5NS4yMzJsMi4wNzItLjA0Ni4xNjkgMi43ODNjLTEuMjA1LjI1NS0yLjE0NS4zOTQtMi43NzEuMzk0LTEuNjM5IDAtMi43NDctLjM0OC0zLjMyNS0xLjA2Ny0uNjAzLS42OTYtLjg5Mi0xLjk5NC0uODkyLTMuODk2VjRoMy42Mzl2My42MThoMy4zMjV2Mi45OTJoLS4wMjR6bS0xOS43Ni45OTdjLS42MjYgMC0xLjE1Ni0uMjA5LTEuNTY1LS42MjZBMi4xMTMgMi4xMTMgMCAwIDEgMSA5LjQ1YzAtLjYwNC4yMTctMS4xMTQuNjAyLTEuNTMxLjQxLS40MTguOTQtLjYwMyAxLjU2Ny0uNjAzLjYyNiAwIDEuMTU2LjIwOCAxLjU2Ni42MjYuNDEuNDE3LjYwMi45MjcuNjAyIDEuNTU0IDAgLjYyNi0uMTkyIDEuMTEzLS42MDIgMS41My0uMzg2LjM3MS0uODkyLjU4LTEuNTQyLjU4eiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtZG93bmxvYWQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDE0LjJMNy43IDkuOWwuNy0uNyAzLjEgMy4xVjNoMXY5LjJsMy4xLTMgLjcuN3ptNy0yLjJ2Ny41YS41LjUgMCAwIDEtLjUuNWgtMTNhLjUuNSAwIDAgMS0uNS0uNVYxMkg0djcuNUExLjUgMS41IDAgMCAwIDUuNSAyMWgxM2ExLjUgMS41IDAgMCAwIDEuNS0xLjVWMTJ6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtZXJyb3IiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExLjUgMTQuMlY1LjdoMS4ydjguNXptLS4xIDQuMWgxLjJ2LTEuOGgtMS4yek0yMiA3Ljl2OC4zTDE2LjEgMjJINy45TDIgMTYuMlY3LjlMNy45IDJoOC4yem0tMSAuNEwxNS43IDNIOC4zTDMgOC4zdjcuNUw4LjMgMjFoNy40bDUuMy01LjJ6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtZXhjaGFuZ2UtY2lyY2xlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMiAyYTEwIDEwIDAgMSAwIDEwIDEwQTEwIDEwIDAgMCAwIDEyIDJ6bTAgMTlhOSA5IDAgMSAxIDktOSA5IDkgMCAwIDEtOSA5em01LjEtOC45bC44LjgtNC4zIDQuM2ExLjUgMS41IDAgMCAxLTEuMS40IDEuNSAxLjUgMCAwIDEtMS4xLS40TDkgMTQuN1YxN0g4di00aDR2MUg5LjdsMi40IDIuNWguOHptLTYtNC42bC00LjIgNC40LS44LS44IDQuMy00LjNhMS41IDEuNSAwIDAgMSAxLjEtLjQgMS41IDEuNSAwIDAgMSAxLjEuNEwxNSA5LjNWN2gxdjRoLTR2LTFoMi4zbC0yLjQtMi41aC0uOHoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1leHBhbmQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExLjYgMTUuNEw2IDkuOGwuNy0uOCA0LjkgNC45TDE2LjUgOWwuNy44eiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtZXh0ZXJuYWwtbGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjEgM3Y2aC0xVjQuN2wtNy42IDcuNy0uOC0uOEwxOS4zIDRIMTVWM3ptLTQgMTYuNWEuNS41IDAgMCAxLS41LjVoLTEyYS41LjUgMCAwIDEtLjUtLjV2LTEyYS41LjUgMCAwIDEgLjUtLjVIMTJWNkg0LjVBMS41IDEuNSAwIDAgMCAzIDcuNXYxMkExLjUgMS41IDAgMCAwIDQuNSAyMWgxMmExLjUgMS41IDAgMCAwIDEuNS0xLjVWMTJoLTF6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtZmFjZWJvb2siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjxwYXRoIGQ9Ik0xMy41NSAyMnYtOS4xMWgzLjA3bC40Ni0zLjU2aC0zLjUzVjcuMDVjMC0xIC4yOS0xLjczIDEuNzctMS43M2gxLjg3VjIuMTRBMjUuMTQgMjUuMTQgMCAwIDAgMTQuNDUgMmMtMi43MiAwLTQuNTggMS42Ni00LjU4IDQuN3YyLjYySDYuODF2My41N2gzLjA2VjIyaDMuNjh6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1mYWNlYm9vay1zcXVhcmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjxwYXRoIGQ9Ik0yMCAzSDRhMSAxIDAgMCAwLTEgMXYxNmExIDEgMCAwIDAgMSAxaDguNjN2LTYuOTVoLTIuMzd2LTIuNzRoMi4zNHYtMmEzLjI4IDMuMjggMCAwIDEgMy41LTMuNmMuNzA1IDAgMS40MS4wNCAyLjExLjEydjIuNDRoLTEuNDRjLTEuMTMgMC0xLjM0LjUzLTEuMzQgMS4zMnYxLjc0aDIuN2wtLjM1IDIuNzJoLTIuMzV2N0gyMGExIDEgMCAwIDAgMS0xVjRhMSAxIDAgMCAwLTEtMXoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWZpbGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE0LjcgMkg2LjVBMS41IDEuNSAwIDAgMCA1IDMuNXYxN0ExLjUgMS41IDAgMCAwIDYuNSAyMmgxMWExLjUgMS41IDAgMCAwIDEuNS0xLjVWNi4zem0uMyAxLjdMMTcuMyA2aC0xLjhhLjUuNSAwIDAgMS0uNS0uNXpNMTcuNSAyMWgtMTFhLjUuNSAwIDAgMS0uNS0uNXYtMTdhLjUuNSAwIDAgMSAuNS0uNUgxNHYyLjVBMS41IDEuNSAwIDAgMCAxNS41IDdIMTh2MTMuNWEuNS41IDAgMCAxLS41LjV6TTggOWg4djFIOHptMCAyaDh2MUg4em0wIDJoNHYxSDh6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtZmlsZXMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE1LjcgMkg3LjVBMS41IDEuNSAwIDAgMCA2IDMuNVY0aC0uNUExLjUgMS41IDAgMCAwIDQgNS41djE1QTEuNSAxLjUgMCAwIDAgNS41IDIyaDExYTEuNSAxLjUgMCAwIDAgMS41LTEuNVYyMGguNWExLjUgMS41IDAgMCAwIDEuNS0xLjVWNi4zem0uMyAxLjdMMTguMyA2aC0xLjhhLjUuNSAwIDAgMS0uNS0uNXptMSAxNi44YS41LjUgMCAwIDEtLjUuNWgtMTFhLjUuNSAwIDAgMS0uNS0uNXYtMTVhLjUuNSAwIDAgMSAuNS0uNUg2djEzLjVBMS41IDEuNSAwIDAgMCA3LjUgMjBIMTd6bTEuNS0xLjVoLTExYS41LjUgMCAwIDEtLjUtLjV2LTE1YS41LjUgMCAwIDEgLjUtLjVIMTV2Mi41QTEuNSAxLjUgMCAwIDAgMTYuNSA3SDE5djExLjVhLjUuNSAwIDAgMS0uNS41ek05IDloOHYxSDl6bTAgMmg4djFIOXptMCAyaDR2MUg5eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWZsaWNrciIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PGNpcmNsZSBjeD0iNi43MyIgY3k9IjEyIiByPSI0LjczIi8+PGNpcmNsZSBjeD0iMTcuMjciIGN5PSIxMiIgcj0iNC43MyIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtZmxpY2tyLXNxdWFyZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTIwIDRhMy4yNiAzLjI2IDAgMCAwLTIuMzgtMUg2LjM4QTMuMjYgMy4yNiAwIDAgMCA0IDRhMy4yNiAzLjI2IDAgMCAwLTEgMi4zN3YxMS4yNUEzLjI2IDMuMjYgMCAwIDAgNCAyMGEzLjI2IDMuMjYgMCAwIDAgMi4zOSAxaDExLjI0QTMuMzggMy4zOCAwIDAgMCAyMSAxNy42MlY2LjM3QTMuMjYgMy4yNiAwIDAgMCAyMCA0em0tOS41NiA5Ljc3YTIuNSAyLjUgMCAwIDEtMy41MSAwIDIuNDkgMi40OSAwIDAgMSAwLTMuNTIgMi41IDIuNSAwIDAgMSAzLjUxIDAgMi40OSAyLjQ5IDAgMCAxIDAgMy41MnptNi42MSAwQTIuNDkgMi40OSAwIDAgMSAxMi44MiAxMmEyLjQ5IDIuNDkgMCAwIDEgNC4yNC0xLjc2IDIuNDkgMi40OSAwIDAgMSAwIDMuNTJsLS4wMS4wMXoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWZvbGRlciIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAgNmgtOGwtMi0ySDRhMiAyIDAgMCAwLTIgMnYxMmEyIDIgMCAwIDAgMiAyaDE2YTIgMiAwIDAgMCAyLTJWOGEyIDIgMCAwIDAtMi0yem0xIDEyYS45LjkgMCAwIDEtMSAxSDRhLjkuOSAwIDAgMS0xLTFWNmEuOS45IDAgMCAxIDEtMWg1LjZsMS43IDEuNy4zLjNIMjBhLjkuOSAwIDAgMSAxIDF6TTQgOGgxNnYxSDR6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtZ2l0aHViIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48cGF0aCBkPSJNMTIgMmExMCAxMCAwIDAgMC0zLjE2IDE5LjQ5Yy41LjA5LjY4LS4yMi42OC0uNDh2LTEuN0M2LjczIDE5LjkxIDYuMTQgMTggNi4xNCAxOEEyLjY5IDIuNjkgMCAwIDAgNSAxNi41Yy0uOTEtLjYyLjA3LS42MS4wNy0uNjFhMi4xMyAyLjEzIDAgMCAxIDEuNTMgMSAyLjE0IDIuMTQgMCAwIDAgMi45MS44MyAyLjE2IDIuMTYgMCAwIDEgLjYzLTEuMzRjLTIuMTQtLjIxLTQuNTItMS4wNy00LjUyLTQuOWEzLjg5IDMuODkgMCAwIDEgMS0yLjY5IDMuNTcgMy41NyAwIDAgMSAuMS0yLjY0cy44NC0uMjcgMi43NSAxYTkuNjMgOS42MyAwIDAgMSA1IDBjMS45MS0xLjI5IDIuNzUtMSAyLjc1LTEgLjM3LjgzNS40MDUgMS43OC4xIDIuNjRhMy44OSAzLjg5IDAgMCAxIDEgMi42OWMwIDMuODQtMi4zNCA0LjY4LTQuNTcgNC45My40ODIuNDkuNzMgMS4xNjQuNjggMS44NXYyLjc1YzAgLjMzLjE4LjU4LjY5LjQ4QTEwIDEwIDAgMCAwIDEyIDJ6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1oZWFyaW5nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0yMCA5YTYuOCA2LjggMCAwIDEtMy41IDZsLTIgMS4xYTMuMyAzLjMgMCAwIDAtMS41IDIuN0EzLjIgMy4yIDAgMCAxIDkuOCAyMmgtLjZhMy40IDMuNCAwIDAgMS0zLTIuMWwuOS0uNUEyLjMgMi4zIDAgMCAwIDkuMiAyMWguNmEyLjEgMi4xIDAgMCAwIDEuNi0uNyAyIDIgMCAwIDAgLjYtMS41IDQgNCAwIDAgMSAyLTMuNWwyLTEuMkE1LjkgNS45IDAgMCAwIDE5IDlhNiA2IDAgMCAwLTYtNiA2IDYgMCAwIDAtNC44IDIuNGwtLjgtLjZBNyA3IDAgMCAxIDEzIDJhNyA3IDAgMCAxIDcgN3pNNy41IDEyQTUuNSA1LjUgMCAwIDAgMiA2LjV2MWE0LjUgNC41IDAgMCAxIDAgOXYxQTUuNSA1LjUgMCAwIDAgNy41IDEyek01IDEyYTIuOSAyLjkgMCAwIDAtMy0zdjFhMiAyIDAgMCAxIDAgNHYxYTIuOSAyLjkgMCAwIDAgMy0zem01IDBhOCA4IDAgMCAwLTgtOHYxYTcgNyAwIDAgMSAwIDE0djFhOCA4IDAgMCAwIDgtOHptNS45LjNhNC41IDQuNSAwIDAgMCAxLjItMy4yIDQuNSA0LjUgMCAwIDAtMS4yLTMuMiA0LjUgNC41IDAgMCAwLTMuMi0xLjRBNC44IDQuOCAwIDAgMCA5LjUgNmwtLjMuMy4yLjNhOC44IDguOCAwIDAgMSAxLjMgM3YuNGguNGExLjUgMS41IDAgMCAxIDAgM3YxYTIuNSAyLjUgMCAwIDAgMi41LTIuNSAyLjYgMi42IDAgMCAwLTItMi41IDguNSA4LjUgMCAwIDAtMS4xLTIuNiAzLjkgMy45IDAgMCAxIDIuMi0uOSAzLjUgMy41IDAgMCAxIDIuNCAxIDMuNSAzLjUgMCAwIDEgMSAyLjYgMy41IDMuNSAwIDAgMS0xIDIuNnoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1oZWxwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMi44IDIyaC0xLjR2LTIuMWgxLjR6bS0uMS00LjloLTEuMmE5LjcgOS43IDAgMCAxLS4xLTEuNyAyLjcgMi43IDAgMCAxIC4zLTEuMiA1LjYgNS42IDAgMCAxIC43LTEuM2wyLjMtMi4xYTkuNiA5LjYgMCAwIDAgMS44LTIuMSA0LjUgNC41IDAgMCAwIC41LTIuMyAzIDMgMCAwIDAtMS4xLTIuNiA2LjIgNi4yIDAgMCAwLTMuNC0uNyAyMi45IDIyLjkgMCAwIDAtMy42LjVsLTEgLjMtLjItMS4yaC4xYTE4LjEgMTguMSAwIDAgMSA0LjctLjggNy40IDcuNCAwIDAgMSA0LjMgMSA0LjIgNC4yIDAgMCAxIDEuNCAzLjUgNSA1IDAgMCAxLS41IDIuNyA4LjYgOC42IDAgMCAxLTEuOSAyLjIgMTkuNyAxOS43IDAgMCAwLTEuOCAxLjYgNi4yIDYuMiAwIDAgMC0uOSAxLjIgMi4zIDIuMyAwIDAgMC0uNCAxLjR6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtaGVscC1jaXJjbGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDJhMTAgMTAgMCAxIDAgMTAgMTBBMTAgMTAgMCAwIDAgMTIgMnptMCAxOWE5IDkgMCAxIDEgOS05IDkgOSAwIDAgMS05IDl6bS0xLjItNC41SDEydjEuOGgtMS4yem00LjUtOGE0LjIgNC4yIDAgMCAxLS4zIDEuOCA1LjQgNS40IDAgMCAxLTEuMyAxLjRMMTIuMyAxM2EyLjggMi44IDAgMCAwLS40IDEuMnYuNkgxMWEzIDMgMCAwIDEtLjItMSAyLjEgMi4xIDAgMCAxIC41LTEuMiA5IDkgMCAwIDEgMS40LTEuNCA2LjQgNi40IDAgMCAwIDEuMi0xLjMgMi42IDIuNiAwIDAgMCAuMy0xLjQgMS43IDEuNyAwIDAgMC0uNi0xLjQgMy41IDMuNSAwIDAgMC0yLS40TDkuMyA3aC0uNXYtLjhhMTAuMiAxMC4yIDAgMCAxIDMtLjUgNC45IDQuOSAwIDAgMSAyLjcuNiAyLjcgMi43IDAgMCAxIC44IDIuMnoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1ob3JuIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik01IDlhMyAzIDAgMCAwIDAgNmguNUw3IDE5LjNBMi41IDIuNSAwIDAgMCA5LjMgMjFoLjJhMS40IDEuNCAwIDAgMCAxLjItLjYgMS40IDEuNCAwIDAgMCAuMi0xLjRsLTEuMy00aDEuOGw4LjYgMy44VjQuN0wxMS40IDl6bTUgMTAuM2EuNy43IDAgMCAxLS4xLjVsLS40LjJoLS4yYTEuNSAxLjUgMCAwIDEtMS40LTFsLTEuMy00aDEuOXpNNSAxNGEyIDIgMCAwIDEgMC00aDZ2NHptMTQgMy4ybC03LTNWOS44bDctMy41ek0yMiA5djZoLTFWOXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1pbmZvLWNpcmNsZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgMmExMCAxMCAwIDEgMCAxMCAxMEExMCAxMCAwIDAgMCAxMiAyem0wIDE5YTkgOSAwIDEgMSA5LTkgOSA5IDAgMCAxLTkgOXptLS43LTE1aDEuNXYyaC0xLjV6bTAgM2gxLjV2OWgtMS41eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWluc3RhZ3JhbSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTEyIDQuNjJsLS4wMS4wOEg4LjM1YTUuMTIgNS4xMiAwIDAgMC0xLjY3LjMxYy0uMzguMTUtLjcyLjM4Mi0xIC42OC0uMjk4LjI4LS41My42Mi0uNjggMWE1LjEyIDUuMTIgMCAwIDAtLjMgMS42OHY3LjI4Yy4wMS41Ny4xMTQgMS4xMzQuMzEgMS42Ny4xNS4zOC4zODIuNzIuNjggMSAuMjguMjk4LjYyLjUzIDEgLjY4LjUzNi4xOTYgMS4xLjMgMS42Ny4zMS45NS4wNSAxLjI0LjA1IDMuNjQuMDUgMi40IDAgMi42NC0uMDUgMy42NC0uMDVhNS4xMiA1LjEyIDAgMCAwIDEuNjctLjMxQTMuMDggMy4wOCAwIDAgMCAxOSAxNy4zMWE1LjEyIDUuMTIgMCAwIDAgLjMtMS42OGMuMDUtLjk1LjA1LTEuMjQuMDUtMy42NCAwLTIuNC0uMDUtMi42NC0uMDUtMy42NGE1LjEyIDUuMTIgMCAwIDAtLjMxLTEuNjcgMi43NyAyLjc3IDAgMCAwLS42OC0xIDIuNzcgMi43NyAwIDAgMC0xLS42OCA1LjEyIDUuMTIgMCAwIDAtMS42Ny0uMzhIMTJ6TTEyIDN2LjA1aDMuNzFhNi45IDYuOSAwIDAgMSAyLjE5LjQyIDQuNjQgNC42NCAwIDAgMSAyLjY4IDIuNjNBNi45IDYuOSAwIDAgMSAyMSA4LjI5YzAgLjk2LjA1IDEuMjcuMDUgMy43MVMyMSAxNC43MSAyMSAxNS43MWE2LjkgNi45IDAgMCAxLS40NyAyLjI0IDQuNjQgNC42NCAwIDAgMS0yLjYzIDIuNjMgNi45IDYuOSAwIDAgMS0yLjE5LjQyYy0uOTYuMDUtMS4yNy4wNS0zLjcxLjA1UzkuMjkgMjEgOC4yOSAyMWE2LjkgNi45IDAgMCAxLTIuMTktLjQ3IDQuNjQgNC42NCAwIDAgMS0yLjYzLTIuNjMgNi45IDYuOSAwIDAgMS0uNDItMi4xOVYxMiA4LjI5YTYuOSA2LjkgMCAwIDEgLjQyLTIuMTlBNC42NCA0LjY0IDAgMCAxIDYuMSAzLjQyIDYuOSA2LjkgMCAwIDEgOC4yOSAzSDEyem0wIDQuMzhhNC42MiA0LjYyIDAgMSAxIDAgOS4yNCA0LjYyIDQuNjIgMCAwIDEgMC05LjI0ek0xMiAxNWEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTQuOC02LjcyYTEuMDggMS4wOCAwIDEgMSAwLTIuMTYgMS4wOCAxLjA4IDAgMCAxIDAgMi4xNnoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWtleSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTggMTBhMiAyIDAgMSAwIDIgMiAyIDIgMCAwIDAtMi0yem0wIDNhMSAxIDAgMSAxIDEtMSAuOS45IDAgMCAxLTEgMXptLTEtNmE1LjEgNS4xIDAgMCAwLTQuNiAzSDMuM2wtMiAyIDMgM0g3di0xaC4zbDEgMUgxMXYtMWgxLjRhNS4xIDUuMSAwIDAgMCA0LjYgMyA1IDUgMCAwIDAgMC0xMHptMCA5YTQuMSA0LjEgMCAwIDEtMy44LTIuN1YxM0gxMHYxSDguN2wtMS0xSDZ2MUg0LjdsLTItMiAxLTFoOS40di0uM0E0LjEgNC4xIDAgMCAxIDE3IDhhNCA0IDAgMCAxIDAgOHoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1sZXNzLWNpcmNsZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgM2E5IDkgMCAwIDEgNi4zNiAxNS4zNkE5IDkgMCAwIDEgNS42NCA1LjYyIDguOTMgOC45MyAwIDAgMSAxMiAzbTAtMWExMCAxMCAwIDEgMCA3LjA3IDIuOTNBOS45MyA5LjkzIDAgMCAwIDEyIDJ6Ii8+PHJlY3QgeD0iNyIgeT0iMTEuMjUiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxLjUiIHJ4PSIuNzUiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEzLjQgMTMuNGwtLjctLjdhMi45IDIuOSAwIDAgMCAuOS0yLjEgMi43IDIuNyAwIDAgMC0uOS0yLjFMOS4yIDQuOWEzLjIgMy4yIDAgMCAwLTQuMyAwIDMuMiAzLjIgMCAwIDAgMCA0LjNMNy44IDEybC0uNy43LTIuOS0yLjhhNC4yIDQuMiAwIDAgMSAwLTUuNyA0LjIgNC4yIDAgMCAxIDUuNyAwbDMuNSAzLjZhMy42IDMuNiAwIDAgMSAxLjIgMi44IDMuNiAzLjYgMCAwIDEtMS4yIDIuOHptNi40IDYuNGE0LjIgNC4yIDAgMCAwIDAtNS43bC0yLjktMi44LS43LjcgMi45IDIuOGEzLjIgMy4yIDAgMCAxIDAgNC4zIDMuMiAzLjIgMCAwIDEtNC4zIDBsLTMuNS0zLjZhMi43IDIuNyAwIDAgMS0uOS0yLjEgMi45IDIuOSAwIDAgMSAuOS0yLjFsLS43LS43YTMuNiAzLjYgMCAwIDAtMS4yIDIuOCAzLjYgMy42IDAgMCAwIDEuMiAyLjhsMy41IDMuNmEzLjggMy44IDAgMCAwIDIuOCAxLjEgMy45IDMuOSAwIDAgMCAyLjktMS4xem0tNi43LTYuNyIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWxpbmtlZGluIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48cGF0aCBkPSJNMTYuNTMgOC42OEEzLjk0IDMuOTQgMCAwIDAgMTMgMTAuNjJWOUg5LjM3djEyaDMuNzN2LTUuOTVjMC0xLjU3LjI5LTMuMDkgMi4yNC0zLjA5IDEuOTUgMCAxLjkzIDEuOCAxLjkzIDMuMTlWMjFIMjF2LTYuNmMwLTMuMjMtLjY5LTUuNzItNC40Ny01Ljcyek01LjE2IDNhMi4xNyAyLjE3IDAgMSAwIDIuMTYgMi4xOEEyLjE2IDIuMTYgMCAwIDAgNS4xNiAzek0zLjI5IDl2MTJIN1Y5SDMuMjl6bTEzLjI0LS4zQTMuOTQgMy45NCAwIDAgMCAxMyAxMC42MlY5SDkuMzd2MTJoMy43M3YtNS45NWMwLTEuNTcuMjktMy4wOSAyLjI0LTMuMDkgMS45NSAwIDEuOTMgMS44IDEuOTMgMy4xOVYyMUgyMXYtNi42YzAtMy4yMy0uNjktNS43Mi00LjQ3LTUuNzJ2LjAyek0zLjI5IDIxSDdWOUgzLjI5djEyek01LjE2IDNhMi4xNyAyLjE3IDAgMSAwIDIuMTYgMi4xOEEyLjE2IDIuMTYgMCAwIDAgNS4xNiAzeiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtbGlua2VkaW4tc3F1YXJlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48cGF0aCBkPSJNMTkuNjcgM0g0LjMzQTEuMzIgMS4zMiAwIDAgMCAzIDQuM3YxNS40QTEuMzIgMS4zMiAwIDAgMCA0LjMzIDIxaDE1LjM0QTEuMzIgMS4zMiAwIDAgMCAyMSAxOS43VjQuM0ExLjMyIDEuMzIgMCAwIDAgMTkuNjcgM3pNOC4zNCAxOC4zNEg1LjY3VjkuNzVoMi42N3Y4LjU5ek03IDguNTdBMS41NSAxLjU1IDAgMSAxIDguNTUgNyAxLjU0IDEuNTQgMCAwIDEgNyA4LjU3em0xMS4zNCA5Ljc3aC0yLjY3di00LjE4YzAtMSAwLTIuMjgtMS4zOS0yLjI4cy0xLjYgMS4wOS0xLjYgMi4yMXY0LjI1SDEwVjkuNzVoMi41NnYxLjE3YTIuODMgMi44MyAwIDAgMSAyLjUzLTEuMzljMi43IDAgMy4yIDEuNzggMy4yIDQuMWwuMDUgNC43MXoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWxpc3QiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQgMTJhLjkuOSAwIDAgMS0xIDEgMSAxIDAgMCAxIDAtMiAuOS45IDAgMCAxIDEgMXpNMyA0LjVhLjkuOSAwIDAgMC0xIDEgLjkuOSAwIDAgMCAxIDEgLjkuOSAwIDAgMCAxLTEgLjkuOSAwIDAgMC0xLTF6bTAgMTNhMSAxIDAgMCAwIDAgMiAxIDEgMCAwIDAgMC0yek02IDV2MWgxNlY1em0wIDcuNWgxNnYtMUg2ek02IDE5aDE2di0xSDZ6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtbG9jayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTguNSA4LjVIMTdWOEE1IDUgMCAwIDAgNyA4di41SDUuNUExLjUgMS41IDAgMCAwIDQgMTB2OC41QTEuNSAxLjUgMCAwIDAgNS41IDIwaDEzYTEuNSAxLjUgMCAwIDAgMS41LTEuNVYxMGExLjUgMS41IDAgMCAwLTEuNS0xLjV6TTggOGE0IDQgMCAwIDEgOCAwdi41SDh6bTExIDEwLjVhLjUuNSAwIDAgMS0uNS41aC0xM2EuNS41IDAgMCAxLS41LS41VjEwYS41LjUgMCAwIDEgLjUtLjVoMTNhLjUuNSAwIDAgMSAuNS41eiIvPjxwYXRoIGQ9Ik0xMiAxMy4yNWExIDEgMCAxIDEtMSAxIDEgMSAwIDAgMSAxLTFtMC0xYTIgMiAwIDEgMCAyIDIgMiAyIDAgMCAwLTItMnoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWxvY2tlZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTYuNSAxMkgxNlY3YTQgNCAwIDAgMC04IDB2NWgtLjVhMS4xIDEuMSAwIDAgMC0xLjEgMS4xdjYuOEExLjEgMS4xIDAgMCAwIDcuNSAyMWg5YTEuMSAxLjEgMCAwIDAgMS4xLTEuMXYtNi44YTEuMSAxLjEgMCAwIDAtMS4xLTEuMXpNOSA3YTMgMyAwIDAgMSA2IDB2NUg5em03LjYgMTIuOWEuMS4xIDAgMCAxLS4xLjFoLTlhLjEuMSAwIDAgMS0uMS0uMXYtNi44aDkuMnpNMTMgMTUuNWEuOC44IDAgMCAxLS41Ljh2MS41aC0xdi0xLjVhLjguOCAwIDAgMS0uNS0uOCAxIDEgMCAwIDEgMiAweiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LW1haWwiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwLjUgNWgtMTdBMS41IDEuNSAwIDAgMCAyIDYuNXYxMUExLjUgMS41IDAgMCAwIDMuNSAxOWgxN2ExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTExQTEuNSAxLjUgMCAwIDAgMjAuNSA1em0tLjMgMWwtNy4xIDcuMmExLjYgMS42IDAgMCAxLTIuMiAwTDMuOCA2ek0zIDE3LjNWNi42TDguMyAxMnptLjcuN0w5IDEyLjdsMS4yIDEuMmEyLjcgMi43IDAgMCAwIDMuNiAwbDEuMi0xLjIgNS4zIDUuM3ptMTItNkwyMSA2LjZ2MTAuN3oiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1tZWRpdW0iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjxwYXRoIGQ9Ik01IDcuNjNBLjcyLjcyIDAgMCAwIDQuODIgN0wzLjEzIDV2LS4zaDUuMjJsNCA4Ljg0IDMuNTQtOC44NGg1VjVsLTEuNDIgMS40YS40My40MyAwIDAgMC0uMTYuNHYxMC4xMmEuNDUuNDUgMCAwIDAgLjE2LjQxbDEuNCAxLjM3di4zaC03di0uM2wxLjQ1LTEuNDFjLjE0LS4xNC4xNC0uMTguMTQtLjRWOC43MUwxMS4zNyAxOWgtLjU1TDYuMTIgOC43MXY2Ljg4YS45My45MyAwIDAgMCAuMjYuNzlsMS44OSAyLjI5VjE5SDIuOTF2LS4zbDEuODktMi4zMmEuOTIuOTIgMCAwIDAgLjItLjc5VjcuNjN6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1tZWRpdW0tc3F1YXJlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48cGF0aCBkPSJNMyAzaDE4djE4SDNWM3ptNC4zIDExLjM2YS42NC42NCAwIDAgMS0uMTcuNTRsLTEuMjcgMS41NHYuMmgzLjZ2LS4yTDguMTkgMTQuOWEuNjcuNjcgMCAwIDEtLjE5LS41NFY5Ljc0bDMuMTYgNi45aC4zN2wyLjcxLTYuOXY1LjVjMCAuMTUgMCAuMTctLjA5LjI3bC0xIDF2LjJoNC43NHYtLjJsLS44OS0uOThhLjI3LjI3IDAgMCAxLS4xMS0uMjd2LTYuOGEuMjguMjggMCAwIDEgLjExLS4yN2wxLS45M3YtLjJoLTMuMzlMMTIuMjMgMTMgOS41MiA3LjA2SDZ2LjJsMS4xNCAxLjM2QS41LjUgMCAwIDEgNy4zIDl2NS4zNnoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LW1pbnVzIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0yMCAxMi41SDR2LTFoMTZ6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtbWludXMtY2lyY2xlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik02LjkgMTEuNWgxMHYxaC0xMHpNMjIgMTJBMTAgMTAgMCAxIDEgMTIgMmExMCAxMCAwIDAgMSAxMCAxMHptLTEgMGE5IDkgMCAxIDAtOSA5IDkgOSAwIDAgMCA5LTl6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtbW9yZS1hY3Rpb25zIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik02IDEwYTIgMiAwIDEgMCAyIDIgMiAyIDAgMCAwLTItMnptMCAzYTEgMSAwIDAgMSAwLTIgMSAxIDAgMCAxIDAgMnptNi0zYTIgMiAwIDEgMCAyIDIgMiAyIDAgMCAwLTItMnptMCAzYTEgMSAwIDEgMSAxLTEgLjkuOSAwIDAgMS0xIDF6bTYtM2EyIDIgMCAxIDAgMiAyIDIgMiAwIDAgMC0yLTJ6bTAgM2ExIDEgMCAxIDEgMS0xIC45LjkgMCAwIDEtMSAxeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LW1vcmUtaXRlbXMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDE4YTEgMSAwIDEgMS0xIDEgLjkuOSAwIDAgMSAxLTFtMC0xYTIgMiAwIDEgMCAyIDIgMiAyIDAgMCAwLTItMnptMC02YTEgMSAwIDEgMS0xIDEgLjkuOSAwIDAgMSAxLTFtMC0xYTIgMiAwIDEgMCAyIDIgMiAyIDAgMCAwLTItMnptMC02YS45LjkgMCAwIDEgMSAxIDEgMSAwIDAgMS0yIDAgLjkuOSAwIDAgMSAxLTFtMC0xYTIgMiAwIDEgMCAyIDIgMiAyIDAgMCAwLTItMnoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1ub3RlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xOC41IDRoLTEzQTEuNSAxLjUgMCAwIDAgNCA1LjV2MTNBMS41IDEuNSAwIDAgMCA1LjUgMjBoMTAuMmw0LjMtNC4zVjUuNUExLjUgMS41IDAgMCAwIDE4LjUgNHpNNSAxOC41di0xM2EuNS41IDAgMCAxIC41LS41aDEzYS41LjUgMCAwIDEgLjUuNVYxNWgtMi41YTEuNSAxLjUgMCAwIDAtMS41IDEuNVYxOUg1LjVhLjUuNSAwIDAgMS0uNS0uNXpNMTguMyAxNkwxNiAxOC4zdi0xLjhhLjUuNSAwIDAgMSAuNS0uNXpNMTYgOUg4VjhoOHptMCAySDh2LTFoOHptLTIgMXYxSDh2LTF6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtcGEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTMgMjFoMTh2MUgzem0wLTFoMTh2LTFIM3pNMjIgOUgybDEwLTd6TTUuMiA4aDEzLjZMMTIgMy4yek02IDE4di04SDV2OHptNCAwdi04SDl2OHptNSAwdi04aC0xdjh6bTQgMHYtOGgtMXY4eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXBhc3N3b3JkLWludmlzaWJsZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTUgMTJhMy4yIDMuMiAwIDAgMC0uNy0xLjlsLjQtMS4xYTQuMiA0LjIgMCAwIDEgMS4zIDMgNCA0IDAgMCAxLTMuOSA0bC40LTEuMUEyLjkgMi45IDAgMCAwIDE1IDEyek0zLjEgMTJBOS44IDkuOCAwIDAgMSAxMiA2LjVoLjRsLjQtLjlIMTJhMTAuOSAxMC45IDAgMCAwLTkuOCA2TDIgMTJsLjIuNWExMSAxMSAwIDAgMCA2LjEgNS4zbC4zLS45QTkuOCA5LjggMCAwIDEgMy4xIDEyem0xOC43LS41YTExIDExIDAgMCAwLTYuMS01LjNsLS4zLjlhOS44IDkuOCAwIDAgMSA1LjUgNC45IDkuOCA5LjggMCAwIDEtOC45IDUuNWgtLjRsLS40LjloLjhhMTAuOSAxMC45IDAgMCAwIDkuOC02bC4yLS40ek0xMS41IDkuMWwuNC0xLjFBNCA0IDAgMCAwIDggMTJhNC4yIDQuMiAwIDAgMCAxLjMgM2wuNC0xLjFBMy4yIDMuMiAwIDAgMSA5IDEyYTIuOSAyLjkgMCAwIDEgMi41LTIuOXptMy4xLTUuN0w4LjUgMjAuM2wuOS4zIDYuMS0xNi45eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXBhc3N3b3JkLXZpc2libGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIxLjggMTEuNWExMSAxMSAwIDAgMC0xOS42IDBMMiAxMmwuMi41YTExIDExIDAgMCAwIDE5LjYgMGwuMi0uNXptLTkuOCA2QTkuOCA5LjggMCAwIDEgMy4xIDEyIDkuOCA5LjggMCAwIDEgMTIgNi41YTkuOCA5LjggMCAwIDEgOC45IDUuNSA5LjggOS44IDAgMCAxLTguOSA1LjV6TTEyIDhhNCA0IDAgMSAwIDQgNCA0IDQgMCAwIDAtNC00em0wIDdhMyAzIDAgMSAxIDMtMyAyLjkgMi45IDAgMCAxLTMgM3oiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1wZW5jaWwiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwLjUgMy41YTIuOSAyLjkgMCAwIDAtMi4xLS45IDMuMSAzLjEgMCAwIDAtMi4yLjlMNC42IDE1LjJsLTEgNS4yIDUuMi0xTDIwLjUgNy44YTMgMyAwIDAgMCAwLTQuM3ptLTUuNyAyLjhsLjctLjcgMi45IDIuOS0uNy43em0tLjcuOGwxLjEgMS04LjQgOC40LTEuMS0xLjF6TTUuNyAxOC4zYS43LjcgMCAwIDAtLjYtLjNsLjMtMS41IDIuMSAyLjEtMS41LjNhLjcuNyAwIDAgMC0uMy0uNnptMi45IDBsLTEuMS0xLjEgOC40LTguNCAxIDEuMXpNMTkuOCA3LjFsLS43LjctMi45LTIuOS43LS43YTIuMiAyLjIgMCAwIDEgMS41LS42IDIgMiAwIDAgMSAxLjQuNiAyLjEgMi4xIDAgMCAxIDAgMi45eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXBpbiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTguMSAxNEwxNSAxMC4zVjQuNkwxNi4zIDJINy43TDkgNC42djUuN0w1LjkgMTRoNS42djhoMXYtOHpNMTAgNWg0djVoLTR6bTQuNy0ybC0uNSAxSDkuOGwtLjUtMXptLTUgOGg0LjZsMS42IDJIOC4xeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXBsdXMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwIDEyLjVoLTcuNVYyMGgtMXYtNy41SDR2LTFoNy41VjRoMXY3LjVIMjB6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtcGx1cy1jaXJjbGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyLjQgMTEuNWg0LjV2MWgtNC41VjE3aC0xdi00LjVINi45di0xaDQuNVY3aDF6bTkuNi41QTEwIDEwIDAgMSAxIDEyIDJhMTAgMTAgMCAwIDEgMTAgMTB6bS0xIDBhOSA5IDAgMSAwLTkgOSA5IDkgMCAwIDAgOS05eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXByZXNlbnRhdGlvbiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNCA1djEwLjZBMi40IDIuNCAwIDAgMCA2LjQgMThoMy4xbC0xLjEgNGgxbDEuMS00aDIuN2wxLjIgNGgxbC0xLjItNGgzLjVhMi4zIDIuMyAwIDAgMCAyLjMtMi4zVjV6bTE1IDEwLjdhMS4zIDEuMyAwIDAgMS0xLjMgMS4zSDYuNEExLjQgMS40IDAgMCAxIDUgMTUuNlY2aDE0ek0yMSAzdjFIM1Yzem0tOSAxM2E0LjUgNC41IDAgMSAwLTQuNS00LjVBNC41IDQuNSAwIDAgMCAxMiAxNnptLS41LTcuOVYxMUg4LjZhMy40IDMuNCAwIDAgMSAyLjktMi45em0xIDMuOVY4YTMuNSAzLjUgMCAwIDEtLjUgNyAzLjQgMy40IDAgMCAxLTMuNC0zeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXByaW50IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0yMSA5LjVBMS41IDEuNSAwIDAgMCAxOS41IDhIMTdWM0g3djVINC41QTEuNSAxLjUgMCAwIDAgMyA5LjVWMTZoMnYzaDJ2MmgxMHYtMmgydi0zaDJ6TTggNGg4djRIOHpNNiAxOHYtNGgxdjR6bTEwIDJIOHYtNmg4djZ6bTItMmgtMXYtNGgxdjR6bTItM2gtMXYtMkg1djJINFY5LjVhLjUuNSAwIDAgMSAuNS0uNWgxNWEuNS41IDAgMCAxIC41LjV6TTYgMTFoNHYxSDZ6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtc2VhcmNoIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0yMS45IDIxLjFMMTYgMTUuM2E4LjMgOC4zIDAgMCAwIDItNS4zIDggOCAwIDEgMC04IDggOC4zIDguMyAwIDAgMCA1LjMtMmw1LjggNS45ek0xMCAxN2E3IDcgMCAxIDEgNy03IDcgNyAwIDAgMS03IDd6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtc2V0dGluZ3MiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDcuNWE0LjUgNC41IDAgMSAwIDQuNSA0LjVBNC41IDQuNSAwIDAgMCAxMiA3LjV6bTAgOGEzLjUgMy41IDAgMSAxIDMuNS0zLjUgMy41IDMuNSAwIDAgMS0zLjUgMy41em05LjgtMS42QTEyLjMgMTIuMyAwIDAgMCAyMiAxMmExMi4zIDEyLjMgMCAwIDAtLjItMS45bC0yLjEtLjNhOC43IDguNyAwIDAgMC0uNy0xLjdsMS4zLTEuN2E4LjcgOC43IDAgMCAwLTIuNy0yLjdMMTUuOSA1bC0xLjctLjctLjMtMi4xTDEyIDJsLTEuOS4yLS4zIDIuMS0xLjcuNy0xLjctMS4zYTguNyA4LjcgMCAwIDAtMi43IDIuN0w1IDguMWE4LjcgOC43IDAgMCAwLS43IDEuN2wtMi4xLjNBMTIuMyAxMi4zIDAgMCAwIDIgMTJhMTIuMyAxMi4zIDAgMCAwIC4yIDEuOWwyLjEuM2E4LjcgOC43IDAgMCAwIC43IDEuN2wtMS4zIDEuN2E4LjcgOC43IDAgMCAwIDIuNyAyLjdMOC4xIDE5bDEuNy43LjMgMi4xIDEuOS4yIDEuOS0uMi4zLTIuMSAxLjctLjcgMS43IDEuM2E4LjcgOC43IDAgMCAwIDIuNy0yLjdMMTkgMTUuOWE4LjcgOC43IDAgMCAwIC43LTEuN3ptLTIuOS0uN2wtLjIuN2EzLjkgMy45IDAgMCAxLS42IDEuNWwtLjMuNi40LjUuOCAxLjFhOS4zIDkuMyAwIDAgMS0xLjQgMS40bC0xLjEtLjgtLjUtLjQtLjYuM2EzLjkgMy45IDAgMCAxLTEuNS42bC0uNy4ydi43bC0uMiAxLjNoLTJsLS4yLTEuM3YtLjdsLS43LS4yYTMuOSAzLjkgMCAwIDEtMS41LS42bC0uNi0uMy0uNS40LTEuMS44QTkuMyA5LjMgMCAwIDEgNSAxNy42bC44LTEuMS40LS41LS4zLS42YTMuOSAzLjkgMCAwIDEtLjYtMS41bC0uMi0uN2gtLjdMMy4xIDEzYTMuNCAzLjQgMCAwIDEtLjEtMSAzLjQgMy40IDAgMCAxIC4xLTFsMS4zLS4yaC43bC4yLS43YTMuOSAzLjkgMCAwIDEgLjYtMS41bC4zLS42LS40LS41TDUgNi40IDYuNCA1bDEuMS44LjUuNC42LS4zYTMuOSAzLjkgMCAwIDEgMS41LS42bC43LS4ydi0uN2wuMi0xLjNoMmwuMiAxLjN2LjdsLjcuMmEzLjkgMy45IDAgMCAxIDEuNS42bC42LjMuNS0uNCAxLjEtLjhBOS4zIDkuMyAwIDAgMSAxOSA2LjRsLS44IDEuMS0uNC41LjMuNmEzLjkgMy45IDAgMCAxIC42IDEuNWwuMi43aC43bDEuMy4yYTMuNCAzLjQgMCAwIDEgLjEgMSAzLjQgMy40IDAgMCAxLS4xIDFsLTEuMy4yeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXNoYXJlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNy41IDE1YTIuNSAyLjUgMCAwIDAtMiAxbC03LjYtMy40QTEuMyAxLjMgMCAwIDAgOCAxMmExLjMgMS4zIDAgMCAwLS4xLS42TDE1LjUgOGEyLjUgMi41IDAgMSAwLS41LTEuNSAxLjMgMS4zIDAgMCAwIC4xLjZsLTcuNiAzLjRhMi41IDIuNSAwIDEgMCAwIDNsNy42IDMuNGExLjMgMS4zIDAgMCAwLS4xLjYgMi41IDIuNSAwIDEgMCAyLjUtMi41em0wLTEwQTEuNSAxLjUgMCAwIDEgMTkgNi41YTEuNSAxLjUgMCAwIDEtMyAwQTEuNSAxLjUgMCAwIDEgMTcuNSA1em0tMTIgOC41YTEuNSAxLjUgMCAwIDEgMC0zIDEuNSAxLjUgMCAwIDEgMCAzem0xMiA1LjVhMS41IDEuNSAwIDEgMSAxLjUtMS41IDEuNSAxLjUgMCAwIDEtMS41IDEuNXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1zdGFyLWZ1bGwiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDEuN0w5LjUgOS4ySDEuNkw4IDEzLjlsLTIuNCA3LjYgNi40LTQuNyA2LjQgNC43LTIuNC03LjYgNi40LTQuN2gtNy45TDEyIDEuN3oiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1zdGFyLW91dGxpbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDQuOWwxLjUgNC42LjIuN2g1LjdsLTQgMi45LS42LjQuMi43IDEuNSA0LjctMy45LTIuOS0uNi0uNC0uNi40LTMuOSAyLjlMOSAxNC4ybC4yLS43LS42LS40LTQtMi45aDUuN2wuMi0uN0wxMiA0LjltMC0zLjJMOS41IDkuMkgxLjZMOCAxMy45bC0yLjQgNy42IDYuNC00LjcgNi40IDQuNy0yLjQtNy42IDYuNC00LjdoLTcuOUwxMiAxLjd6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtdGVhbS1kaWdpdGFsZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjMuNjQ4IDI0SC4zNTJBLjM1My4zNTMgMCAwIDEgMCAyMy42NDhWLjM1MkMwIC4xNTguMTU4IDAgLjM1MiAwaDIzLjI5NmMuMTk0IDAgLjM1Mi4xNTguMzUyLjM1MnYyMy4yOTZhLjM1My4zNTMgMCAwIDEtLjM1Mi4zNTJ6TTUuODE0IDExLjc5MmExLjU5NiAxLjU5NiAwIDEgMCAwLTMuMTkyIDEuNTk2IDEuNTk2IDAgMCAwIDAgMy4xOTJ6TTEwIDE4Ljk5NFYxOWg0LjQxOEMxOS4xMyAxOSAyMCAxNi42ODUgMjAgMTIuMjUzIDIwIDcuOTMgMTguOTk1IDYgMTQuNDE4IDZIMTB2MTIuOTk0em00LjQxOC0xMC43MDJjMi41ODYgMCAyLjgzOCAxLjExIDIuODM4IDMuOTU1IDAgMi44OS0uMjUyIDQuNDU1LTIuODM4IDQuNDU1aC0xLjc1NnYtOC40MWgxLjc1NnoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXRlbGVwaG9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNSAzaC4xOE0yMCAxMS41NkE3LjU5IDcuNTkgMCAwIDAgMTIuNDggNGgtLjA2YS40OS40OSAwIDAgMC0uNDkuNDguNS41IDAgMCAwIC40OS41MUE2LjYxIDYuNjEgMCAwIDEgMTkgMTEuNjJhLjUxLjUxIDAgMCAwIC41NC40Ni40OS40OSAwIDAgMCAuNDUtLjQ2cy4wMS0uMDQuMDEtLjA2eiIvPjxwYXRoIGQ9Ik0xNi45MyAxMS42OGE0LjUgNC41IDAgMCAwLTQuNDgtNC40OC41MS41MSAwIDAgMCAwIDEgMy41IDMuNSAwIDAgMSAzLjQ5IDMuNDkuNS41IDAgMCAwIC41LjUuNTEuNTEgMCAwIDAgLjUtLjUxek0xNS42OCAyMS4xOWExMy4zMiAxMy4zMiAwIDAgMS0xMi44LTEzLjEuOTIuOTIgMCAwIDEgLjYyLS44OGMxLjc0LS41NiA0LTEgNC43LjA2YTcuMzkgNy4zOSAwIDAgMSAuODUgMi45MXYuMjFhMS40OCAxLjQ4IDAgMCAxLS43IDEuNjguODEuODEgMCAwIDAtLjQ5LjcxIDEyLjU1IDEyLjU1IDAgMCAwIDMuMzggMy41MS44OC44OCAwIDAgMCAuNDgtLjU2Yy4wOS0uNTMuNTgtMSAxLjctLjg1aC4yMWE3IDcgMCAwIDEgMi44NS44N2MxIC43Mi42MiAzIC4wOSA0LjcyYTEgMSAwIDAgMS0uODkuNzJ6TTYuNTUgNy41MmE5LjUgOS41IDAgMCAwLTIuNzguNTUgMTIuNDEgMTIuNDEgMCAwIDAgMTEuOTEgMTIuMjJjLjczLTIuMjYuNjYtMy41NC4zMS0zLjc4YTYuNjYgNi42NiAwIDAgMC0yLjQ2LS43MmgtLjIyYy0uMzIgMC0uNjUgMC0uNjguMTJhMS45IDEuOSAwIDAgMS0xLjI3IDEuMzRsLS4yMS4wNy0uMTUtLjE1YTEzLjQ0IDEzLjQ0IDAgMCAxLTMuOS00TDcgMTNhMS42OCAxLjY4IDAgMCAxIDEtMS43Yy4xMi0uMDcuMzMtLjE4LjI1LS43NXYtLjIyYTYuODQgNi44NCAwIDAgMC0uNy0yLjU0Yy0uMi0uMTgtLjU1LS4yNy0xLS4yN3oiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXRvb2wiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcuNyA1YTMuMSAzLjEgMCAwIDEgMS43LjUgMy4xIDMuMSAwIDAgMSAxLjYgMyAzIDMgMCAwIDAgLjggMi40bDYuMyA2LjNhMSAxIDAgMCAxIC4yIDEuMyAxIDEgMCAwIDEtLjguNS45LjkgMCAwIDEtLjctLjNsLTYuNC02LjRhMyAzIDAgMCAwLTIuMS0uOGgtLjZhMi44IDIuOCAwIDAgMS0yLjItMWgyLjdWNi40SDUuMWEyLjcgMi43IDAgMCAxIDEuMS0xQTIuOCAyLjggMCAwIDEgNy43IDVtMC0xYTQuNiA0LjYgMCAwIDAtMiAuNSA0LjEgNC4xIDAgMCAwLTIuMSAyLjloMy42djIuMUgzLjdhNS40IDUuNCAwIDAgMCAxIDEuOCA0LjQgNC40IDAgMCAwIDMgMS4yaC42YTIuNCAyLjQgMCAwIDEgMS40LjVsNi40IDYuNGEyIDIgMCAwIDAgMS40LjYgMS45IDEuOSAwIDAgMCAxLjYtLjkgMiAyIDAgMCAwLS4zLTIuNmwtNi4zLTYuM2ExLjggMS44IDAgMCAxLS41LTEuNiA0LjQgNC40IDAgMCAwLTItNEE0LjYgNC42IDAgMCAwIDcuNyA0eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXR3aXR0ZXIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjxwYXRoIGQ9Ik04LjA4IDIwYTEwLjkzIDEwLjkzIDAgMCAwIDExLTExdi0uNWE4IDggMCAwIDAgMS45Mi0yIDcuODUgNy44NSAwIDAgMS0yLjIyLjYxQTMuODkgMy44OSAwIDAgMCAyMC40OCA1YTggOCAwIDAgMS0yLjQ4LjkxIDMuODcgMy44NyAwIDAgMC02LjU5IDMuNTIgMTEgMTEgMCAwIDEtOC00IDMuODUgMy44NSAwIDAgMCAxLjE5IDUuMTYgMy43NiAzLjc2IDAgMCAxLTEuNzUtLjQ4QTMuODcgMy44NyAwIDAgMCA2IDEzLjkxYTMuNzMgMy43MyAwIDAgMS0xIC4xNCA0LjMgNC4zIDAgMCAxLS43My0uMDUgMy44NyAzLjg3IDAgMCAwIDMuNjEgMi42OCA3LjczIDcuNzMgMCAwIDEtNC44IDEuNjYgNyA3IDAgMCAxLS45Mi0uMDZBMTAuOSAxMC45IDAgMCAwIDguMDggMjAiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXR3aXR0ZXItc3F1YXJlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48cGF0aCBkPSJNMTkuNSAyMmgtMTVBMi41IDIuNSAwIDAgMSAyIDE5LjV2LTE1QTIuNSAyLjUgMCAwIDEgNC41IDJoMTVBMi41IDIuNSAwIDAgMSAyMiA0LjV2MTVhMi41IDIuNSAwIDAgMS0yLjUgMi41em0tOS44Mi00LjkyQTcuMjQgNy4yNCAwIDAgMCAxNyA5Ljc5di0uMzNhNS4yMiA1LjIyIDAgMCAwIDEuMjgtMS4zMyA1LjIyIDUuMjIgMCAwIDEtMS40OC40IDIuNTYgMi41NiAwIDAgMCAxLjE0LTEuNDIgNC45MyA0LjkzIDAgMCAxLTEuNjQuNjIgMi41MyAyLjUzIDAgMCAwLTEuODYtLjgxIDIuNTcgMi41NyAwIDAgMC0yLjU3IDIuNTdjLjAwMy4xOTUuMDI2LjM5LjA3LjU4YTcuMjYgNy4yNiAwIDAgMS01LjMyLTIuNjggMi41OSAyLjU5IDAgMCAwIC44IDMuNDMgMi43OCAyLjc4IDAgMCAxLTEuMTYtLjMyIDIuNTcgMi41NyAwIDAgMCAyLjA1IDIuNTIgMi40NiAyLjQ2IDAgMCAxLTEuMTUuMDQgMi41NSAyLjU1IDAgMCAwIDIuMzkgMS43OEE1LjEzIDUuMTMgMCAwIDEgNi4zNyAxNmE2LjA4IDYuMDggMCAwIDEtLjYxIDAgNy4yMyA3LjIzIDAgMCAwIDMuOTIgMS4xNHYtLjA2eiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtdW5sb2NrZWQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE2LjUgMTJIMTZWNmE0IDQgMCAwIDAtOCAwdjNoMVY2YTMgMyAwIDAgMSA2IDB2Nkg3LjVhMS4xIDEuMSAwIDAgMC0xLjEgMS4xdjYuOEExLjEgMS4xIDAgMCAwIDcuNSAyMWg5YTEuMSAxLjEgMCAwIDAgMS4xLTEuMXYtNi44YTEuMSAxLjEgMCAwIDAtMS4xLTEuMXptLjEgNy45YS4xLjEgMCAwIDEtLjEuMWgtOWEuMS4xIDAgMCAxLS4xLS4xdi02LjhoOS4yek0xMyAxNS41YS44LjggMCAwIDEtLjUuOHYxLjVoLTF2LTEuNWEuOC44IDAgMCAxLS41LS44IDEgMSAwIDAgMSAyIDB6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtdXBsb2FkIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik04LjQgNy4zbC0uNy0uN0wxMiAyLjNsNC4zIDQuMy0uNy43LTMuMS0zLjF2OS4zaC0xVjQuMnpNMTkgMTJ2Ny41YS41LjUgMCAwIDEtLjUuNWgtMTNhLjUuNSAwIDAgMS0uNS0uNVYxMkg0djcuNUExLjUgMS41IDAgMCAwIDUuNSAyMWgxM2ExLjUgMS41IDAgMCAwIDEuNS0xLjVWMTJ6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtdXNlciIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgMTNhNCA0IDAgMCAwIDQtNFY2YTQgNCAwIDAgMC04IDB2M2E0IDQgMCAwIDAgNCA0ek05IDZhMyAzIDAgMCAxIDYgMHYzYTMgMyAwIDAgMS02IDB6bTExIDE2aC0xYTcgNyAwIDAgMC0xNCAwSDRhOCA4IDAgMCAxIDE2IDB6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtdmlkZW8iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE3LjUgNy4zVjZBMS41IDEuNSAwIDAgMCAxNiA0LjVINS41QTEuNSAxLjUgMCAwIDAgNCA2djhhMS41IDEuNSAwIDAgMCAxLjUgMS41aDMuNEw3LjQgMjFoMWwxLjYtNS41aDEuOGwxLjYgNS41aDFsLTEuNi01LjVIMTZhMS41IDEuNSAwIDAgMCAxLjUtMS41di0xLjNsNCAxLjVWNS44em0zIDUuNWwtNC0xLjVWMTRhLjUuNSAwIDAgMS0uNS41SDUuNUEuNS41IDAgMCAxIDUgMTRWNmEuNS41IDAgMCAxIC41LS41SDE2YS41LjUgMCAwIDEgLjUuNXYyLjdsNC0xLjV6TTIgOGgxdjRIMnoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC13YXJuaW5nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMi41IDE3aC0xVjJoMXptMCAzaC0xdjJoMXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC13YXJuaW5nLWNpcmNsZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgMmExMCAxMCAwIDEgMCAxMCAxMEExMCAxMCAwIDAgMCAxMiAyem0wIDE5YTkgOSAwIDEgMSA5LTkgOSA5IDAgMCAxLTkgOXptLS41LTYuOFY1LjdoMS4ydjguNXptLS4xIDIuM2gxLjJ2MS44aC0xLjJ6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtd2hhdHNhcHAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjxwYXRoIGQ9Ik0xOS4wOSA0LjYzYTEwIDEwIDAgMCAwLTE1LjY4IDEyTDIgMjEuOGw1LjI4LTEuMzhBMTAgMTAgMCAwIDAgMTIgMjEuNjNhMTAgMTAgMCAwIDAgNy4wNS0xN2guMDR6TTEyIDIwYTguMTggOC4xOCAwIDAgMS00LjIxLTEuMTZsLS4zMS0uMTgtMy4xMy44My44NC0zLjA2LS4xOS0uMzZBOC4yOCA4LjI4IDAgMSAxIDEyIDIwem00LjU0LTYuMmMtLjI1LS4xMy0xLjQ3LS43My0xLjctLjgxLS4yMy0uMDgtLjM5LS4xMy0uNTYuMTItLjI0Ni4zNDctLjUxLjY4LS43OSAxLS4xNC4xNi0uMjkuMTgtLjU0LjA2YTYuOTIgNi45MiAwIDAgMS0yLTEuMjMgNy4yNyA3LjI3IDAgMCAxLTEuMzgtMS43M2MtLjE1LS4yNSAwLS4zOC4xMS0uNTFzLjI1LS4yOS4zNy0uNDNhMS41MSAxLjUxIDAgMCAwIC4yNS0uNDIuNDYuNDYgMCAwIDAgMC0uNDNjLS4wNC0uMi0uNTQtMS40Mi0uNzUtMS45Mi0uMjEtLjUtLjQtLjQyLS41Ni0uNDNoLS40N2ExIDEgMCAwIDAtLjY3LjMxQTIuODEgMi44MSAwIDAgMCA3IDkuNDUgNC43MyA0LjczIDAgMCAwIDggMTJhMTEgMTEgMCAwIDAgNC4yNSAzLjc2Yy40NjQuMi45MzguMzc4IDEuNDIuNTNhMy4yOCAzLjI4IDAgMCAwIDEuNTYuMDkgMi41NCAyLjU0IDAgMCAwIDEuNjgtMS4xOCAyLjA5IDIuMDkgMCAwIDAgLjE1LTEuMmMtLjA2LS4wNy0uMjMtLjEzLS40OC0uMjVsLS4wNC4wNXoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXdoYXRzYXBwLXNxdWFyZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTE2IDguMDdhNS4zNCA1LjM0IDAgMCAwLTkuMTEgMy43NyA1LjI4IDUuMjggMCAwIDAgLjgyIDIuODRsLjEyLjItLjUzIDIgMi0uNTMuMi4xMWMuODIuNDkgMS43NTYuNzUgMi43MS43NUE1LjM0IDUuMzQgMCAwIDAgMTYgOC4wN3ptLS44MyA1LjgzYTEuNjYgMS42NiAwIDAgMS0xLjA4Ljc2IDIuMjMgMi4yMyAwIDAgMS0xLS4wNmMtLjIzLS4wOC0uNTMtLjE4LS45MS0uMzRhNy4xNiA3LjE2IDAgMCAxLTIuNzgtMi40MiAzLjEzIDMuMTMgMCAwIDEtLjY2LTEuNjYgMS44MyAxLjgzIDAgMCAxIC41Ni0xLjM0LjU5LjU5IDAgMCAxIC40My0uMkgxMGMuMSAwIC4yMyAwIC4zNi4yNy4xMy4yNy40NSAxLjExLjQ5IDEuMTlhLjMuMyAwIDAgMSAwIC4yOCAxLjIgMS4yIDAgMCAxLS4xNi4yN2MtLjA4LjEtLjE3LjIxLS4yNC4yOC0uMDcuMDctLjE3LjE3LS4wNy4zMy4yMzkuNDEzLjU0Ljc4Ny44OSAxLjExLjM4LjM0LjgxNi42MTIgMS4yOS44LjE2LjA4LjI1LjA2LjM0IDAgLjA5LS4wNi40LS40Ny41MS0uNjMuMTEtLjE2LjIxLS4xNC4zNi0uMDguMTUuMDYuOTQuNDQgMS4xLjUyLjE2LjA4LjI2LjEyLjMuMTlhMS4zNiAxLjM2IDAgMCAxLS4wMy43M2guMDN6Ii8+PHBhdGggZD0iTTIxIDcuMDlhOC4yNiA4LjI2IDAgMCAwLS4wOS0xLjE1IDMuNDkgMy40OSAwIDAgMC0xLjg1LTIuNTEgMy44OSAzLjg5IDAgMCAwLTEtLjMyQTguMzYgOC4zNiAwIDAgMCAxNi45MSAzSDcuMDlhOC4yNiA4LjI2IDAgMCAwLTEuMTUuMDlBMy40OSAzLjQ5IDAgMCAwIDMuNDMgNWEzLjg5IDMuODkgMCAwIDAtLjMyIDFBOC4zNiA4LjM2IDAgMCAwIDMgNy4wOXY5LjgyYy4wMDMuMzg1LjAzMy43Ny4wOSAxLjE1QTMuNDkgMy40OSAwIDAgMCA1IDIwLjU3YTMuODkgMy44OSAwIDAgMCAxIC4zMmMuMzg0LjA2Ljc3MS4wOTQgMS4xNi4xaDkuODJhOC4yNiA4LjI2IDAgMCAwIDEuMTUtLjA5IDMuNDkgMy40OSAwIDAgMCAyLjUxLTEuODUgMy44OSAzLjg5IDAgMCAwIC4zMi0xIDguMzYgOC4zNiAwIDAgMCAuMS0xLjE2VjcuNTdjLS4wNi0uMS0uMDYtLjMxLS4wNi0uNDh6bS04LjggMTEuMTdhNi4zOSA2LjM5IDAgMCAxLTMuMDYtLjc4bC0zLjQxLjg5LjkyLTMuMzJhNi4zMyA2LjMzIDAgMCAxLS44Ni0zLjIxIDYuNDEgNi40MSAwIDAgMSAxMS00LjUzIDYuMzMgNi4zMyAwIDAgMSAxLjg4IDQuNTQgNi40MiA2LjQyIDAgMCAxLTYuNDcgNi40MXoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXlvdXR1YmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjxwYXRoIGQ9Ik0yMS41NiA3LjJhMi41IDIuNSAwIDAgMC0xLjc2LTEuNzdDMTguMjQgNSAxMiA1IDEyIDVzLTYuMjQgMC03LjguNDJBMi41IDIuNSAwIDAgMCAyLjQ0IDcuMiAyNS43MiAyNS43MiAwIDAgMCAyIDEyYy0uMDEgMS42MS4xMyAzLjIxNy40MiA0LjhhMi41IDIuNSAwIDAgMCAxLjc4IDEuNzdDNS43NiAxOSAxMiAxOSAxMiAxOXM2LjI0IDAgNy44LS40MmEyLjUgMi41IDAgMCAwIDEuNzYtMS43N0EyNS43MiAyNS43MiAwIDAgMCAyMiAxMmEyNS43MiAyNS43MiAwIDAgMC0uNDQtNC44ek0xMCAxNVY5bDUuMTkgM0wxMCAxNXoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXpvb20taW4iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwLjQgOS41aDMuM3YxaC0zLjN2My4yaC0xdi0zLjJINi4ydi0xaDMuMlY2LjJoMXptMTAuNyAxMi40TDE1LjMgMTZhOC4zIDguMyAwIDAgMS01LjMgMiA4IDggMCAxIDEgOC04IDguMyA4LjMgMCAwIDEtMiA1LjNsNS45IDUuOHpNMTcgMTBhNyA3IDAgMSAwLTcgNyA3IDcgMCAwIDAgNy03eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXpvb20tb3V0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik02LjIgOS41aDcuNXYxSDYuMnptMTQuOSAxMi40TDE1LjMgMTZhOC4zIDguMyAwIDAgMS01LjMgMiA4IDggMCAxIDEgOC04IDguMyA4LjMgMCAwIDEtMiA1LjNsNS45IDUuOHpNMTcgMTBhNyA3IDAgMSAwLTcgNyA3IDcgMCAwIDAgNy03eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48L2RlZnM+PC9zdmc+';

var propTypes$5 = {
  color: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.string
};
var defaultProps$5 = {
  color: '',
  size: '',
  icon: 'it-tool'
};

var Icon =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Icon, _React$Component);

  function Icon() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Icon.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        color = _this$props.color,
        size = _this$props.size;
    var classes = classnames('icon', color, size);
    var iconName = this.props.icon;
    return React.createElement("svg", {
      className: classes
    }, React.createElement("use", {
      xlinkHref: iconSprite + "#" + iconName
    }));
  };

  return Icon;
}(React.Component);

Icon.propTypes = propTypes$5;
Icon.defaultProps = defaultProps$5;

var mapToCssModules$1 = Util.mapToCssModules,
    deprecated = Util.deprecated,
    warnOnce = Util.warnOnce;
var propTypes$6 = {
  children: PropTypes.node,
  type: PropTypes.string,
  size: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  infoText: PropTypes.string,
  normalized: PropTypes.bool,
  bsSize: PropTypes.string,
  state: deprecated(PropTypes.string, 'Please use the props "valid" and "invalid" to indicate the state.'),
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  "static": deprecated(PropTypes.bool, 'Please use the prop "plaintext"'),
  plaintext: PropTypes.bool,
  addon: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object
};
var defaultProps$6 = {
  type: "text"
};

var Input =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Input, _React$Component);

  function Input() {
    var _this;

    _this = _React$Component.call(this) || this;

    _defineProperty$1(_assertThisInitialized$1(_this), "toggleFocusLabel", function () {
      _this.setState({
        isFocused: true
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "toggleBlurLabel", function (e) {
      if (e.target.value === "") {
        _this.setState({
          isFocused: !_this.state.isFocused
        });
      }
    });

    _this.state = {
      isFocused: false,
      hidden: true,
      icon: true
    };
    _this.toggleShow = _this.toggleShow.bind(_assertThisInitialized$1(_this));
    return _this;
  }

  var _proto = Input.prototype;

  _proto.toggleShow = function toggleShow() {
    this.setState({
      hidden: !this.state.hidden,
      icon: !this.state.icon
    });
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        type = _this$props.type,
        state = _this$props.state,
        tag = _this$props.tag,
        addon = _this$props.addon,
        staticInput = _this$props["static"],
        plaintext = _this$props.plaintext,
        innerRef = _this$props.innerRef,
        label = _this$props.label,
        infoText = _this$props.infoText,
        placeholder = _this$props.placeholder,
        normalized = _this$props.normalized,
        value = _this$props.value,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "cssModule", "type", "state", "tag", "addon", "static", "plaintext", "innerRef", "label", "infoText", "placeholder", "normalized", "value"]);

    var _this$props2 = this.props,
        bsSize = _this$props2.bsSize,
        valid = _this$props2.valid,
        invalid = _this$props2.invalid;
    var checkInput = ["radio", "checkbox"].indexOf(type) > -1;
    var isNotaNumber = new RegExp("\\D", "g");
    var fileInput = type === "file";
    var textareaInput = type === "textarea";
    var selectInput = type === "select";
    var Tag = tag || (selectInput || textareaInput ? type : "input");
    var formControlClass = "form-control";
    var infoTextControlClass = "form-text text-muted";

    if (plaintext || staticInput) {
      formControlClass = formControlClass + "-plaintext";
      Tag = tag || "p";
    } else if (fileInput) {
      formControlClass = formControlClass + "-file";
    } else if (checkInput) {
      if (addon) {
        formControlClass = null;
      }
      /* Causes a regression with `bootstrap-italia`
      else {
          formControlClass = 'form-check-input';
      }
      */

    }

    if (valid || invalid) {
      infoTextControlClass = null;
    }

    if (state && typeof valid === "undefined" && typeof invalid === "undefined") {
      if (state === "danger") {
        invalid = true;
      } else if (state === "success") {
        valid = true;
      }
    }

    if (attributes.size && isNotaNumber.test(attributes.size)) {
      warnOnce('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.');
      bsSize = attributes.size;
      delete attributes.size;
    }

    var classes = mapToCssModules$1(classnames(className, invalid && "is-invalid", valid && "is-valid", bsSize ? "form-control-" + bsSize : false, formControlClass), cssModule);
    var wrapperClass = mapToCssModules$1(classnames(className, "form-group"), cssModule);
    var infoTextClass = mapToCssModules$1(classnames(className, valid ? 'valid-feedback' : false, invalid ? 'invalid-feedback' : false, infoTextControlClass));

    if (Tag === "input" || typeof tag !== "string") {
      attributes.type = type;
    }

    if (attributes.children && !(plaintext || staticInput || type === "select" || typeof Tag !== "string" || Tag === "select")) {
      warnOnce("Input with a type of \"" + type + "\" cannot have children. Please use \"value\"/\"defaultValue\" instead.");
      delete attributes.children;
    }

    if (placeholder || value) {
      return React.createElement("div", {
        className: wrapperClass
      }, React.createElement(Tag, _extends({}, attributes, {
        ref: innerRef,
        className: classes,
        id: this.props.id,
        onFocus: this.toggleFocusLabel,
        onBlur: function onBlur(e) {
          return _this2.toggleBlurLabel(e);
        },
        placeholder: this.props.placeholder,
        value: this.props.value
      })), React.createElement("label", {
        htmlFor: this.props.id,
        className: "active"
      }, this.props.label), React.createElement("small", {
        className: infoTextClass
      }, this.props.infoText));
    }

    if (attributes.type === "password") {
      return React.createElement("div", {
        className: wrapperClass
      }, React.createElement(Tag, _extends({}, attributes, {
        ref: innerRef,
        type: this.state.hidden ? "password" : "text",
        className: this.state.isFocused ? "form-control input-password focus--mouse" : "form-control input-password",
        onFocus: this.toggleFocusLabel,
        onBlur: function onBlur(e) {
          return _this2.toggleBlurLabel(e);
        },
        id: this.props.id,
        placeholder: this.props.placeholder,
        value: this.props.value
      })), React.createElement("span", {
        className: "password-icon",
        "aria-hidden": "true"
      }, React.createElement("svg", {
        className: "password-icon-visible icon icon-sm",
        onClick: this.toggleShow
      }, React.createElement("use", {
        xlinkHref: "/svg/sprite.svg#it-password-" + (this.state.icon ? "visible" : "invisible")
      }))), React.createElement("label", {
        htmlFor: this.props.id,
        className: this.state.isFocused ? "active" : ""
      }, this.props.label), React.createElement("small", {
        className: infoTextClass
      }, this.props.infoText));
    }

    if (normalized) {
      return React.createElement("div", {
        className: wrapperClass
      }, React.createElement(Tag, _extends({}, attributes, {
        className: this.state.isFocused ? "form-control-plaintext focus--mouse" : "form-control-plaintext",
        onFocus: this.toggleFocusLabel,
        onBlur: function onBlur(e) {
          return _this2.toggleBlurLabel(e);
        },
        id: this.props.id,
        value: this.props.value,
        readOnly: true
      })), React.createElement("label", {
        htmlFor: this.props.id,
        className: this.state.isFocused ? "active" : ""
      }, this.props.label), React.createElement("small", {
        className: infoTextClass
      }, this.props.infoText));
    }

    if (label || infoText) {
      return React.createElement("div", {
        className: wrapperClass
      }, React.createElement(Tag, _extends({}, attributes, {
        ref: innerRef,
        className: classes,
        id: this.props.id,
        onFocus: this.toggleFocusLabel,
        onBlur: function onBlur(e) {
          return _this2.toggleBlurLabel(e);
        },
        value: this.props.value
      })), React.createElement("label", {
        htmlFor: this.props.id,
        className: this.state.isFocused ? "active" : ""
      }, this.props.label), React.createElement("small", {
        className: infoTextClass
      }, this.props.infoText));
    }

    return React.createElement(Tag, _extends({}, attributes, {
      ref: innerRef,
      className: classes
    }));
  };

  return Input;
}(React.Component);

Input.propTypes = propTypes$6;
Input.defaultProps = defaultProps$6;

var propTypes$7 = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  multiline: PropTypes.bool,
  sublist: PropTypes.bool
};
var defaultProps$7 = {
  tag: 'div'
};

var LinkList = function LinkList(props) {
  var className = props.className,
      Tag = props.tag,
      multiline = props.multiline,
      sublist = props.sublist,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "tag", "multiline", "sublist"]);

  var wrapperClasses = classnames(multiline ? 'multiline' : false, 'link-list-wrapper');
  var classes = classnames(className, sublist ? 'link-sublist' : 'link-list');

  if (sublist) {
    return React.createElement("ul", _extends({}, attributes, {
      className: classes
    }));
  }

  return React.createElement(Tag, {
    className: wrapperClasses
  }, React.createElement("ul", _extends({}, attributes, {
    className: classes
  })));
};

LinkList.propTypes = propTypes$7;
LinkList.defaultProps = defaultProps$7;

var propTypes$8 = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  header: PropTypes.bool,
  divider: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.any,
  href: PropTypes.string,
  size: PropTypes.string
};
var defaultProps$8 = {
  tag: 'a'
};

var handleDisabledOnClick = function handleDisabledOnClick(e) {
  e.preventDefault();
};

var LinkListItem = function LinkListItem(props) {
  var className = props.className,
      active = props.active,
      disabled = props.disabled,
      header = props.header,
      divider = props.divider,
      href = props.href,
      size = props.size,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "active", "disabled", "header", "divider", "href", "size"]);

  var Tag = props.tag;
  var classes = classnames(className, active ? 'active' : false, disabled ? 'disabled' : false, header ? 'header' : false, divider ? 'divider' : false, size || false, 'list-item'); // Prevent click event when disabled.

  if (disabled) {
    attributes.onClick = handleDisabledOnClick;
  }

  if (header) {
    Tag = 'h3';
  } else if (divider) {
    Tag = 'span';
  }

  return React.createElement("li", null, function () {
    if (header && href) {
      return React.createElement(Tag, null, React.createElement("a", _extends({
        // eslint-disable-line jsx-a11y/anchor-has-content
        href: href || '#'
      }, attributes, {
        className: classes
      })));
    }

    return React.createElement(Tag, _extends({
      href: href || '#'
    }, attributes, {
      className: classes
    }));
  }());
};

LinkListItem.propTypes = propTypes$8;
LinkListItem.defaultProps = defaultProps$8;

var propTypes$9 = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  'aria-label': PropTypes.string
};
var defaultProps$9 = {
  tag: 'nav',
  'aria-label': 'pagination'
};

var Pager = function Pager(props) {
  var children = props.children,
      className = props.className,
      Tag = props.tag,
      label = props['aria-label'];
  var classes = classnames(className, 'pagination-wrapper');
  return React.createElement(Tag, {
    className: classes,
    "aria-label": label
  }, children);
};

Pager.propTypes = propTypes$9;
Pager.defaultProps = defaultProps$9;

var propTypes$a = {
  className: PropTypes.string,
  size: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
var defaultProps$a = {
  tag: 'ul'
};

var PagerList = function PagerList(props) {
  var _classNames;

  var className = props.className,
      size = props.size,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "size", "tag"]);

  var listClasses = classnames(className, 'pagination', (_classNames = {}, _classNames["pagination-" + size] = !!size, _classNames));
  return React.createElement(Tag, _extends({}, attributes, {
    className: listClasses
  }));
};

PagerList.propTypes = propTypes$a;
PagerList.defaultProps = defaultProps$a;

var PasswordInput =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(PasswordInput, _Component);

  function PasswordInput() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty$1(_assertThisInitialized$1(_this), "state", {
      showPassword: false
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onPasswordToggle", function () {
      _this.setState(function (prevState) {
        return {
          showPassword: !prevState.showPassword
        };
      });
    });

    return _this;
  }

  var _proto = PasswordInput.prototype;

  _proto.render = function render() {
    var showPassword = this.state.showPassword;

    var _this$props = this.props,
        type = _this$props.type,
        rest = _objectWithoutPropertiesLoose(_this$props, ["type"]);

    var classNames = ['btn-eye', showPassword ? 'eye-off' : 'eye-on'].join(' ');
    return React.createElement(Fragment, null, React.createElement("span", {
      className: classNames,
      onClick: this.onPasswordToggle
    }), React.createElement(Input, _extends({}, rest, {
      type: showPassword ? 'text' : type
    })));
  };

  return PasswordInput;
}(Component);

_defineProperty$1(PasswordInput, "defaultProps", {
  type: 'password'
});

PasswordInput.propTypes = _extends({}, Input.propTypes);

var defaultSteps = [{
  score: 0,
  label: 'inserisci almeno 8 caratteri e una lettera maiuscola',
  className: 'danger'
}, {
  score: 1,
  label: 'password troppo debole',
  className: 'danger'
}, {
  score: 25,
  label: 'password debole',
  className: 'danger'
}, {
  score: 50,
  label: 'password sicura',
  className: 'warning'
}, {
  score: 75,
  label: 'password molto sicura',
  className: 'success'
}];

var PasswordMeter =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(PasswordMeter, _Component);

  function PasswordMeter() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = PasswordMeter.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        steps = _this$props.steps,
        score = _this$props.score;
    var currentStep = steps.filter(function (step) {
      return step.score <= score;
    }).reduce(function (acc, current) {
      return acc.score > current.score ? acc : current;
    });
    var label = currentStep.label,
        className = currentStep.className;
    return React.createElement("div", {
      className: "psw-wrapper"
    }, React.createElement("span", {
      className: "psw-text text-" + className + " " + className
    }, label), React.createElement("div", {
      className: "progress rounded-0 position-relative psw-meter"
    }, React.createElement("div", {
      className: "row position-absolute w-100 m-0"
    }, React.createElement("div", {
      className: "col-3 border-left border-right border-white"
    }), React.createElement("div", {
      className: "col-3 border-left border-right border-white"
    }), React.createElement("div", {
      className: "col-3 border-left border-right border-white"
    }), React.createElement("div", {
      className: "col-3 border-left border-right border-white"
    })), React.createElement("div", {
      className: "progress-bar bg-" + className + " " + className,
      style: {
        width: score + "%"
      }
    })));
  };

  return PasswordMeter;
}(Component);

_defineProperty$1(PasswordMeter, "defaultProps", {
  score: 0,
  steps: defaultSteps
});

PasswordMeter.propTypes = {
  score: PropTypes.number,
  steps: PropTypes.arrayOf(PropTypes.shape({
    score: PropTypes.number,
    label: PropTypes.string,
    className: PropTypes.string
  }))
};

var propTypes$b = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};
var defaultProps$b = {
  tag: 'div'
};

var Skiplink = function Skiplink(props) {
  var className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "tag"]);

  var classes = classnames(className, 'skiplinks');
  return React.createElement(Tag, _extends({
    className: classes
  }, attributes));
};

Skiplink.propTypes = propTypes$b;
Skiplink.defaultProps = defaultProps$b;

var propTypes$c = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};
var defaultProps$c = {
  tag: 'a'
};

var SkiplinkItem = function SkiplinkItem(props) {
  var className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "tag"]);

  var classes = classnames(className, 'sr-only', 'sr-only-focusable');
  return React.createElement(Tag, _extends({
    className: classes
  }, attributes));
};

SkiplinkItem.propTypes = propTypes$c;
SkiplinkItem.defaultProps = defaultProps$c;

var Toggle =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Toggle, _Component);

  function Toggle() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Toggle.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        label = _this$props.label,
        rest = _objectWithoutPropertiesLoose(_this$props, ["label"]);

    return React.createElement("div", {
      className: "toggles"
    }, React.createElement(Label, {
      check: true
    }, label, React.createElement(Input$1, _extends({
      type: "checkbox"
    }, rest)), React.createElement("span", {
      className: "lever"
    })));
  };

  return Toggle;
}(Component);

Toggle.propTypes = _extends({
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
}, Input$1.propTypes);

var propTypes$d = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  secondary: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool,
  dark: PropTypes.bool
};
var defaultProps$d = {
  tag: 'div'
};

var Sidebar = function Sidebar(props) {
  var className = props.className,
      Tag = props.tag,
      secondary = props.secondary,
      left = props.left,
      right = props.right,
      dark = props.dark,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "tag", "secondary", "left", "right", "dark"]);

  var wrapperClasses = classnames(className, left ? 'it-line-left-side' : false, right ? 'it-line-right-side' : false, dark ? 'theme-dark' : false, 'sidebar-wrapper');
  var wrapperClassesLinkList = classnames(secondary ? 'linklist-secondary' : false, 'sidebar-linklist-wrapper');

  if (secondary) {
    return React.createElement(Tag, _extends({}, attributes, {
      className: wrapperClassesLinkList
    }));
  }

  return React.createElement(Tag, {
    className: wrapperClasses
  }, React.createElement(Tag, _extends({}, attributes, {
    className: wrapperClassesLinkList
  })));
};

Sidebar.propTypes = propTypes$d;
Sidebar.defaultProps = defaultProps$d;

var propTypes$e = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  value: PropTypes.number,
  label: PropTypes.string,
  indeterminate: PropTypes.bool,
  color: PropTypes.string
};
var defaultProps$e = {
  tag: 'div',
  role: 'progressbar',
  indeterminate: false
};

var Progress =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Progress, _React$Component);

  function Progress() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Progress.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        Tag = _this$props.tag,
        value = _this$props.value,
        label = _this$props.label,
        indeterminate = _this$props.indeterminate,
        color = _this$props.color,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "tag", "value", "label", "indeterminate", "color"]);

    var wrapperClasses = classnames('progress-bar-wrapper');
    var secondaryWrapperClasses = classnames(className, indeterminate ? 'progress-indeterminate' : false, color ? 'progress-color' : false, 'progress');
    var classes = classnames(className, 'progress-bar', color ? "bg-" + this.props.color : false);

    if (label && value) {
      return React.createElement(Tag, {
        className: wrapperClasses
      }, React.createElement("div", {
        className: "progress-bar-label"
      }, React.createElement("span", {
        className: "sr-only"
      }, this.props.label), this.props.value + '%'), React.createElement(Tag, {
        className: secondaryWrapperClasses
      }, React.createElement("div", _extends({}, attributes, {
        className: classes,
        role: "progressbar",
        style: {
          width: this.props.value + '%'
        },
        "aria-valuenow": this.props.value,
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }))));
    }

    return React.createElement(Tag, {
      className: secondaryWrapperClasses
    }, React.createElement("div", {
      className: "progress-bar-label"
    }, React.createElement("span", {
      className: "sr-only"
    }, this.props.label)), React.createElement("div", _extends({}, attributes, {
      className: classes,
      role: "progressbar",
      style: {
        width: this.props.value + '%'
      },
      "aria-valuenow": this.props.value,
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    })));
  };

  return Progress;
}(React.Component);

Progress.propTypes = propTypes$e;
Progress.defaultProps = defaultProps$e;

var propTypes$f = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  active: PropTypes.bool,
  small: PropTypes.bool,
  "double": PropTypes.bool
};
var defaultProps$f = {
  tag: 'span',
  indeterminate: false,
  active: false,
  small: false,
  "double": false
};

var Spinner =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Spinner, _React$Component);

  function Spinner() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Spinner.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        Tag = _this$props.tag,
        active = _this$props.active,
        small = _this$props.small,
        _double = _this$props["double"],
        attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "tag", "active", "small", "double"]);

    var wrapperClasses = classnames(active ? 'progress-spinner-active' : false, small ? 'size-sm' : false, _double ? 'progress-spinner-double' : false, 'progress-spinner');
    var innerClasses = classnames('progress-spinner-inner');
    var classes = classnames(className, 'sr-only');

    if (_double) {
      return React.createElement(Tag, {
        className: wrapperClasses
      }, React.createElement("div", {
        className: innerClasses
      }), React.createElement("div", {
        className: innerClasses
      }), React.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), "Caricamento..."));
    }

    return React.createElement(Tag, {
      className: wrapperClasses
    }, React.createElement(Tag, _extends({}, attributes, {
      className: classes
    }), "Caricamento..."));
  };

  return Spinner;
}(React.Component);

Spinner.propTypes = propTypes$f;
Spinner.defaultProps = defaultProps$f;

var propTypes$g = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.node,
  isBig: PropTypes.bool,
  hasShade: PropTypes.bool,
  hasSpace: PropTypes.bool,
  hasCTA: PropTypes.bool,
  hasLinkOnTitle: PropTypes.bool,
  isIconCard: PropTypes.bool,
  isSpecialCard: PropTypes.bool,
  isArticleCard: PropTypes.bool,
  title: PropTypes.string,
  text: PropTypes.string,
  after: PropTypes.string,
  articleCategoryName: PropTypes.string,
  articleCategoryLink: PropTypes.string,
  articleDate: PropTypes.string,
  signature: PropTypes.string,
  link: PropTypes.string,
  iconName: PropTypes.string,
  tags: PropTypes.array,
  imageSrc: PropTypes.string,
  imageTitle: PropTypes.string,
  imageAlt: PropTypes.string
};
var defaultProps$g = {
  tag: 'div',
  link: false
};

var Card =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Card, _React$Component);

  function Card() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Card.prototype;

  _proto.render = function render() {
    var Tag = this.props.tag;
    var cardWrapperClasses = classnames(this.props.hasSpace ? 'card-space' : false, 'card-wrapper');
    var innerCardWrapperClasses = classnames(this.props.hasShade ? 'card-bg' : false, this.props.isBig ? 'card-big' : false, this.props.imageSrc ? 'card-img' : false, this.props.isSpecialCard ? 'special-card' : false, this.props.after ? 'no-after' : false, 'card');
    var iconTag = this.props.isIconCard ? React.createElement("div", {
      className: "categoryicon-top"
    }, React.createElement(Icon, {
      icon: this.props.iconName
    }), React.createElement("span", {
      className: "text"
    }, this.props.articleCategoryName)) : false;
    var titleTag = React.createElement("h5", {
      className: "card-title"
    }, this.props.title);
    var imageTag = this.props.imageSrc ? React.createElement("div", {
      className: "img-responsive-wrapper"
    }, React.createElement("div", {
      className: "img-responsive"
    }, React.createElement("figure", {
      className: "img-wrapper"
    }, React.createElement("img", {
      src: this.props.imageSrc,
      title: this.props.imageTitle,
      alt: this.props.imageAlt
    })))) : false;
    var dateTag = this.props.articleDate ? React.createElement("span", {
      className: "data"
    }, this.props.articleDate) : false;
    var signatureTag = this.props.signature ? React.createElement("span", {
      className: "card-signature"
    }, this.props.signature) : false;
    var callToActionTag = this.props.hasCTA ? React.createElement(Button, {
      outline: true,
      color: "primary",
      size: "sm"
    }, "Action") : false;
    var cardFooterTag = signatureTag || callToActionTag ? React.createElement("div", {
      className: "it-card-footer"
    }, signatureTag, callToActionTag) : false;
    var cardHeaderTag;
    var readMoreTag;

    if (this.props.link) {
      if (this.props.hasLinkOnTitle) {
        titleTag = React.createElement("a", {
          href: this.props.link
        }, React.createElement("h5", {
          className: "card-title"
        }, this.props.title));
      } else {
        readMoreTag = React.createElement("a", {
          className: "read-more",
          href: this.props.link
        }, React.createElement("span", {
          className: "text"
        }, "Leggi di pi\xF9"), React.createElement(Icon, {
          icon: 'it-arrow-right'
        }));
      }
    }

    if (this.props.isArticleCard) {
      cardHeaderTag = React.createElement("div", {
        className: "category-top"
      }, React.createElement("a", {
        className: "category",
        href: "{this.props.articleCategoryLink}"
      }, this.props.articleCategoryName), dateTag);
    } else if (this.props.tags && this.props.tags.split(',').length) {
      cardHeaderTag = React.createElement("div", {
        className: "head-tags"
      }, this.props.tags.split(',').map(function (item, index) {
        return React.createElement("span", {
          className: "card-tag",
          key: index
        }, item);
      }), dateTag);
    }

    return React.createElement(Tag, {
      className: cardWrapperClasses
    }, React.createElement("div", {
      className: innerCardWrapperClasses
    }, imageTag, React.createElement("div", {
      className: "card-body"
    }, cardHeaderTag, iconTag, titleTag, React.createElement("p", {
      className: "card-text"
    }, this.props.text), cardFooterTag, readMoreTag)));
  };

  return Card;
}(React.Component);

Card.propTypes = propTypes$g;
Card.defaultProps = defaultProps$g;

var propTypes$h = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};
var defaultProps$h = {
  tag: 'nav'
};

var BottomNav = function BottomNav(props) {
  var Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, ["tag"]);

  var wrapperClasses = classnames('bottom-nav');
  return React.createElement(Tag, {
    className: wrapperClasses
  }, React.createElement("ul", attributes));
};

BottomNav.propTypes = propTypes$h;
BottomNav.defaultProps = defaultProps$h;

var propTypes$i = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  active: PropTypes.bool,
  link: PropTypes.string,
  label: PropTypes.string,
  iconName: PropTypes.string,
  srText: PropTypes.string,
  alert: PropTypes.bool,
  badge: PropTypes.bool
};
var defaultProps$i = {
  tag: 'a',
  link: '#',
  iconName: 'it-comment',
  srText: false
};

var BottomNavItem =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(BottomNavItem, _React$Component);

  function BottomNavItem() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = BottomNavItem.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Tag = _this$props.tag,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["tag"]);

    var activeClass = classnames(this.props.active ? 'active' : false);
    var badgeWrapper = this.props.badge ? React.createElement("div", {
      className: "badge-wrapper"
    }, React.createElement("span", {
      className: "bottom-nav-badge"
    }, this.props.badge)) : false;
    var alertWrapper = this.props.alert ? React.createElement("div", {
      className: "badge-wrapper"
    }, React.createElement("span", {
      className: "bottom-nav-alert"
    })) : false;
    return React.createElement("li", attributes, React.createElement(Tag, {
      href: this.props.link,
      className: activeClass
    }, badgeWrapper, alertWrapper, React.createElement(Icon, {
      icon: this.props.iconName
    }), React.createElement("span", {
      className: "bottom-nav-label"
    }, this.props.label, React.createElement("span", {
      className: "sr-only"
    }, this.props.srText))));
  };

  return BottomNavItem;
}(React.Component);

BottomNavItem.propTypes = propTypes$i;
BottomNavItem.defaultProps = defaultProps$i;

WebFont.load({
  custom: {
    families: ['Titillium Web:300,400,600,700:latin-ext', 'Lora:400,700:latin-ext', 'Roboto Mono:400,700:latin-ext']
  }
});

export { Accordion, AccordionBody, AccordionHeader, Badge, BottomNav, BottomNavItem, Card, Collapse, FormGroup, Hero, Icon, Input, LinkList, LinkListItem, Pager, PagerList, PasswordInput, PasswordMeter, Progress, Scrollspy, Sidebar, Skiplink, SkiplinkItem, Spinner, Toggle };
//# sourceMappingURL=design-react-kit.es.js.map
