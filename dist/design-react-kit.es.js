import WebFont from 'webfontloader';
import { Util, Badge as Badge$1, FormGroup as FormGroup$1, Input as Input$1, Label, Jumbotron, Button } from 'reactstrap';
export { Alert, Breadcrumb, BreadcrumbItem, Button, ButtonDropdown, ButtonGroup, ButtonToolbar, Card, CardBody, CardColumns, CardDeck, CardFooter, CardGroup, CardHeader, CardImg, CardImgOverlay, CardLink, CardSubtitle, CardText, CardTitle, Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem, Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Fade, Form, FormFeedback, FormText, InputGroup, InputGroupAddon, InputGroupButtonDropdown, InputGroupText, Jumbotron, Label, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Media, Modal, ModalBody, ModalFooter, ModalHeader, Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarToggler, PaginationItem as PagerItem, PaginationLink as PagerLink, Popover, PopoverBody, PopoverHeader, PopperContent, PopperTargetHelper, Row, TabContent, TabPane, Table, Tooltip, UncontrolledAlert, UncontrolledButtonDropdown, UncontrolledCarousel, UncontrolledDropdown, UncontrolledTooltip, Util } from 'reactstrap';
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

var mapToCssModules$1 = Util.mapToCssModules,
    deprecated = Util.deprecated,
    warnOnce = Util.warnOnce;
var propTypes$5 = {
  children: PropTypes.node,
  type: PropTypes.string,
  size: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
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
var defaultProps$5 = {
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
        attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "cssModule", "type", "state", "tag", "addon", "static", "plaintext", "innerRef", "label", "infoText", "placeholder", "normalized"]);

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

    if (Tag === "input" || typeof tag !== "string") {
      attributes.type = type;
    }

    if (attributes.children && !(plaintext || staticInput || type === "select" || typeof Tag !== "string" || Tag === "select")) {
      warnOnce("Input with a type of \"" + type + "\" cannot have children. Please use \"value\"/\"defaultValue\" instead.");
      delete attributes.children;
    }

    if (placeholder) {
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
        placeholder: this.props.placeholder
      })), React.createElement("label", {
        htmlFor: this.props.id,
        className: "active"
      }, this.props.label), React.createElement("small", {
        className: "form-text text-muted"
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
        placeholder: this.props.placeholder
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
        className: "form-text text-muted"
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
        readOnly: true
      })), React.createElement("label", {
        htmlFor: this.props.id,
        className: this.state.isFocused ? "active" : ""
      }, this.props.label), React.createElement("small", {
        className: "form-text text-muted"
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
        }
      })), React.createElement("label", {
        htmlFor: this.props.id,
        className: this.state.isFocused ? "active" : ""
      }, this.props.label), React.createElement("small", {
        className: "form-text text-muted"
      }, this.props.infoText));
    }

    return React.createElement(Tag, _extends({}, attributes, {
      ref: innerRef,
      className: classes
    }));
  };

  return Input;
}(React.Component);

Input.propTypes = propTypes$5;
Input.defaultProps = defaultProps$5;

var propTypes$6 = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  multiline: PropTypes.bool,
  sublist: PropTypes.bool
};
var defaultProps$6 = {
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

LinkList.propTypes = propTypes$6;
LinkList.defaultProps = defaultProps$6;

var propTypes$7 = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  header: PropTypes.bool,
  divider: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.any,
  href: PropTypes.string,
  size: PropTypes.string
};
var defaultProps$7 = {
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

LinkListItem.propTypes = propTypes$7;
LinkListItem.defaultProps = defaultProps$7;

var _transitionStatusToCl$2;
var TransitionTimeouts$2 = Util.TransitionTimeouts,
    TransitionPropTypeKeys$2 = Util.TransitionPropTypeKeys,
    TransitionStatuses$2 = Util.TransitionStatuses,
    pick$2 = Util.pick,
    omit$2 = Util.omit;

var propTypes$8 = _extends({}, Transition.propTypes, {
  // eslint-disable-line react/forbid-foreign-prop-types
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  onClose: PropTypes.func,
  isOpen: PropTypes.bool
});

var defaultProps$8 = _extends({}, Transition.defaultProps, {
  timeout: TransitionTimeouts$2.Collapse,
  tag: 'div'
});

var transitionStatusToClassHash$2 = (_transitionStatusToCl$2 = {}, _transitionStatusToCl$2[TransitionStatuses$2.ENTERING] = 'navbar-collapsable d-block', _transitionStatusToCl$2[TransitionStatuses$2.ENTERED] = 'navbar-collapsable d-block expanded', _transitionStatusToCl$2[TransitionStatuses$2.EXITING] = 'navbar-collapsable d-block', _transitionStatusToCl$2[TransitionStatuses$2.EXITED] = 'navbar-collapsable', _transitionStatusToCl$2);
var defaultStyle = {
  transition: '400ms ease-in-out',
  transitionProperty: 'opacity'
};
var transitionStyles = {
  entering: {
    opacity: 0
  },
  entered: {
    opacity: 1
  },
  exiting: {
    opacity: 0
  }
};

function getTransitionClass$2(status) {
  return transitionStatusToClassHash$2[status] || '';
}

var Offcanvas =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Offcanvas, _Component);

  function Offcanvas() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Offcanvas.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Tag = _this$props.tag,
        children = _this$props.children,
        isOpen = _this$props.isOpen,
        onClose = _this$props.onClose,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["tag", "children", "isOpen", "onClose"]);

    var transitionProps = pick$2(attributes, TransitionPropTypeKeys$2);
    var childProps = omit$2(attributes, TransitionPropTypeKeys$2);
    return React.createElement(Transition, _extends({}, transitionProps, {
      "in": isOpen
    }), function (status) {
      var transitionClass = getTransitionClass$2(status);
      var currentStyles = transitionStyles[status];
      return React.createElement("div", _extends({
        className: transitionClass,
        style: _extends({}, defaultStyle, {}, childProps.style, {}, currentStyles)
      }, childProps), React.createElement("div", {
        className: "close-div",
        onClick: onClose
      }, React.createElement(Button, {
        className: "close-menu",
        color: ""
      }, React.createElement("span", {
        className: "it-close"
      }), "close")), React.createElement("div", {
        className: "menu-wrapper"
      }, React.createElement(Tag, null, children)));
    });
  };

  return Offcanvas;
}(Component);
Offcanvas.propTypes = propTypes$8;
Offcanvas.defaultProps = defaultProps$8;

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

WebFont.load({
  custom: {
    families: ['Titillium Web:300,400,600,700:latin-ext', 'Lora:400,700:latin-ext', 'Roboto Mono:400,700:latin-ext']
  }
});

export { Accordion, AccordionBody, AccordionHeader, Badge, Collapse, FormGroup, Hero, Input, LinkList, LinkListItem, Offcanvas, Pager, PagerList, PasswordInput, PasswordMeter, Progress, Scrollspy, Sidebar, Skiplink, SkiplinkItem, Spinner, Toggle };
//# sourceMappingURL=design-react-kit.es.js.map
