import { Util, Badge as Badge$1, Button as Button$1, Collapse as Collapse$1, FormGroup as FormGroup$1, Label, Input as Input$1, NavbarBrand, Navbar, NavbarToggler, Jumbotron, Nav as Nav$1, Card as Card$1 } from 'reactstrap';
export { Alert, Breadcrumb, BreadcrumbItem, ButtonDropdown, ButtonGroup, ButtonToolbar, CardBody, CardColumns, CardDeck, CardFooter, CardGroup, CardHeader, CardImg, CardImgOverlay, CardLink, CardSubtitle, CardText, CardTitle, Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem, Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Fade, Form, FormFeedback, FormText, InputGroup, InputGroupAddon, InputGroupButtonDropdown, InputGroupText, Jumbotron, Label, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Media, Modal, ModalBody, ModalFooter, ModalHeader, NavItem, NavLink, Navbar, NavbarBrand, NavbarToggler, PaginationItem as PagerItem, PaginationLink as PagerLink, Popover, PopoverBody, PopoverHeader, PopperContent, PopperTargetHelper, Row, TabContent, TabPane, Table, Tooltip, UncontrolledAlert, UncontrolledButtonDropdown, UncontrolledCarousel, UncontrolledCollapse, UncontrolledDropdown, UncontrolledTooltip, Util } from 'reactstrap';
export { default as Scrollspy } from 'react-scrollspy';
import React, { Component, PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import { StickyProvider, Sticky } from 'react-stickup';

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

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

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

    _defineProperty(_assertThisInitialized(_this), "state", {
      height: null
    });

    _defineProperty(_assertThisInitialized(_this), "onEntering", function (node, isAppearing) {
      _this.setState({
        height: getHeight(node)
      });

      _this.props.onEntering(node, isAppearing);
    });

    _defineProperty(_assertThisInitialized(_this), "onEntered", function (node, isAppearing) {
      _this.setState({
        height: null
      });

      _this.props.onEntered(node, isAppearing);
    });

    _defineProperty(_assertThisInitialized(_this), "onExit", function (node) {
      _this.setState({
        height: getHeight(node)
      });

      _this.props.onExit(node);
    });

    _defineProperty(_assertThisInitialized(_this), "onExiting", function (node) {
      // getting this variable triggers a reflow
      var _unused = node.offsetHeight; // eslint-disable-line no-unused-vars

      _this.setState({
        height: 0
      });

      _this.props.onExiting(node);
    });

    _defineProperty(_assertThisInitialized(_this), "onExited", function (node) {
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
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};
var defaultProps$3 = {
  tag: 'div'
};

var AvatarContainer = function AvatarContainer(props) {
  var className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "tag"]);

  var wrapperClasses = classnames('d-flex align-items-center justify-content-around flex-wrap flex-sm-nowrap', className);
  return React.createElement(Tag, _extends({}, attributes, {
    className: wrapperClasses
  }));
};

AvatarContainer.propTypes = propTypes$3;
AvatarContainer.defaultProps = defaultProps$3;

var propTypes$4 = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  wrapperClassName: PropTypes.string
};
var defaultProps$4 = {
  tag: 'ul'
};

var AvatarGroupContainer = function AvatarGroupContainer(props) {
  var className = props.className,
      Tag = props.tag,
      wrapperClassName = props.wrapperClassName,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "tag", "wrapperClassName"]);

  var wrapperClasses = classnames('avatar-group-stacked', wrapperClassName);
  return React.createElement(Tag, _extends({}, attributes, {
    className: wrapperClasses
  }));
};

AvatarGroupContainer.propTypes = propTypes$4;
AvatarGroupContainer.defaultProps = defaultProps$4;

var propTypes$5 = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};
var defaultProps$5 = {
  tag: 'div'
};

var AvatarExtraText = function AvatarExtraText(props) {
  var className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "tag"]);

  var wrapperClass = classnames('extra-text', className);
  return React.createElement(Tag, _extends({
    className: wrapperClass
  }, attributes));
};

AvatarExtraText.propTypes = propTypes$5;
AvatarExtraText.defaultProps = defaultProps$5;

var propTypes$6 = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  href: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  color: PropTypes.string,
  size: PropTypes.string
};
var defaultProps$6 = {
  tag: 'div'
};

var AvatarIcon = function AvatarIcon(props) {
  var _classNames;

  var className = props.className,
      Tag = props.tag,
      size = props.size,
      href = props.href,
      color = props.color,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "tag", "size", "href", "color"]);

  var typeClass = classnames('avatar', (_classNames = {}, _classNames["size-" + size] = size, _classNames["avatar-" + color] = color, _classNames));

  if (href) {
    return React.createElement("a", _extends({
      href: href
    }, attributes, {
      className: typeClass
    }));
  }

  return React.createElement(Tag, _extends({}, attributes, {
    className: typeClass
  }));
};

AvatarIcon.propTypes = propTypes$6;
AvatarIcon.defaultProps = defaultProps$6;

var propTypes$7 = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  presence: PropTypes.string
};
var defaultProps$7 = {
  tag: 'div'
};

var AvatarPresence = function AvatarPresence(props) {
  var _classNames;

  var className = props.className,
      Tag = props.tag,
      presence = props.presence,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "tag", "presence"]);

  var typeClass = classnames('avatar-presence', (_classNames = {}, _classNames["" + presence] = presence, _classNames));
  return React.createElement(Tag, _extends({}, attributes, {
    className: typeClass
  }));
};

AvatarPresence.propTypes = propTypes$7;
AvatarPresence.defaultProps = defaultProps$7;

var propTypes$8 = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  status: PropTypes.string
};
var defaultProps$8 = {
  tag: 'div'
};

var AvatarStatus = function AvatarStatus(props) {
  var _classNames;

  var className = props.className,
      Tag = props.tag,
      status = props.status,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "tag", "status"]);

  var typeClass = classnames('avatar-status', (_classNames = {}, _classNames["" + status] = status, _classNames));
  return React.createElement(Tag, _extends({}, attributes, {
    className: typeClass
  }));
};

AvatarStatus.propTypes = propTypes$8;
AvatarStatus.defaultProps = defaultProps$8;

var propTypes$9 = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  extra: PropTypes.string
};
var defaultProps$9 = {
  tag: 'div'
};

var AvatarWrapper = function AvatarWrapper(props) {
  var _classNames;

  var className = props.className,
      Tag = props.tag,
      extra = props.extra,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "tag", "extra"]);

  var wrapperClass = classnames('avatar-wrapper', className, (_classNames = {}, _classNames["avatar-extra-" + extra] = extra, _classNames));
  return React.createElement(Tag, _extends({}, attributes, {
    className: wrapperClass
  }));
};

AvatarWrapper.propTypes = propTypes$9;
AvatarWrapper.defaultProps = defaultProps$9;

var propTypes$a = {
  color: PropTypes.string,
  pill: PropTypes.bool,
  tag: PropTypes.string,
  children: PropTypes.node,
  cssModule: PropTypes.object,
  className: PropTypes.string
};
var defaultProps$a = {
  color: 'secondary',
  pill: false,
  tag: 'span'
};

var Badge = function Badge(props) {
  var children = props.children;
  return React.createElement(Badge$1, props, children);
};

Badge.propTypes = propTypes$a;
Badge.defaultProps = defaultProps$a;

var propTypes$b = _extends({}, Button$1.propTypes, {
  icon: PropTypes.bool
});

var defaultProps$b = _extends({}, Button$1.defaultProps, {
  icon: false
});

var Button = function Button(_ref) {
  var icon = _ref.icon,
      className = _ref.className,
      attributes = _objectWithoutPropertiesLoose(_ref, ["icon", "className"]);

  var classes = classnames(className, {
    'btn-icon': icon
  });
  return React.createElement(Button$1, _extends({
    className: classes
  }, attributes));
};

Button.propTypes = propTypes$b;
Button.defaultProps = defaultProps$b;

var propTypes$c = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  highlight: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
var defaultProps$c = {
  color: '',
  highlight: false,
  tag: 'div'
};

var Callout = function Callout(_ref) {
  var children = _ref.children,
      color = _ref.color,
      highlight = _ref.highlight,
      Tag = _ref.tag,
      attributes = _objectWithoutPropertiesLoose(_ref, ["children", "color", "highlight", "tag"]);

  var classes = classnames('callout', color, {
    'callout-highlight': highlight
  });
  return React.createElement(Tag, _extends({
    className: classes
  }, attributes), children);
};

Callout.propTypes = propTypes$c;
Callout.defaultProps = defaultProps$c;

var propTypes$d = {
  bigText: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
var defaultProps$d = {
  bigText: false,
  tag: 'p'
};

var CalloutText = function CalloutText(_ref) {
  var bigText = _ref.bigText,
      children = _ref.children,
      className = _ref.className,
      Tag = _ref.tag,
      attributes = _objectWithoutPropertiesLoose(_ref, ["bigText", "children", "className", "tag"]);

  var classes = classnames(className, {
    'callout-big-text': bigText
  });
  return React.createElement(Tag, _extends({
    className: classes
  }, attributes), children);
};

CalloutText.propTypes = propTypes$d;
CalloutText.defaultProps = defaultProps$d;

var propTypes$e = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
var defaultProps$e = {
  tag: 'div'
};

var CalloutTitle = function CalloutTitle(_ref) {
  var children = _ref.children,
      className = _ref.className,
      Tag = _ref.tag,
      attributes = _objectWithoutPropertiesLoose(_ref, ["children", "className", "tag"]);

  var classes = classnames(className, 'callout-title');
  return React.createElement(Tag, _extends({
    className: classes
  }, attributes), children);
};

CalloutTitle.propTypes = propTypes$e;
CalloutTitle.defaultProps = defaultProps$e;

var propTypes$f = _extends({}, Collapse$1.propTypes, {
  // eslint-disable-line react/forbid-foreign-prop-types

  /** Indica se il componente Collapse è usato all'interno di un componente Header */
  header: PropTypes.bool,

  /** Indica se il menu HeaderNav sia aperto o meno. Usato unicamente nel caso della HeaderNav, ovvero con navbar e header entrambi true */
  inOpen: PropTypes.bool,

  /** Funzione chiamata su click di overlay dell'HeaderNav aperto. Usato unicamente nel caso della HeaderNav, ovvero con navbar e header entrambi true */
  onOverlayClick: PropTypes.func
});

var Collapse = function Collapse(_ref) {
  var header = _ref.header,
      className = _ref.className,
      navbar = _ref.navbar,
      children = _ref.children,
      isOpen = _ref.isOpen,
      onOverlayClick = _ref.onOverlayClick,
      attributes = _objectWithoutPropertiesLoose(_ref, ["header", "className", "navbar", "children", "isOpen", "onOverlayClick"]);

  if (navbar && header) {
    var _classes = classnames(className, 'navbar-collapsable', {
      expanded: isOpen
    });

    return React.createElement(Collapse$1, _extends({
      className: _classes,
      navbar: navbar,
      style: {
        display: isOpen ? 'block' : 'none'
      }
    }, attributes), React.createElement("div", {
      className: "overlay",
      style: {
        display: isOpen ? 'block' : 'none'
      },
      onClick: onOverlayClick
    }), React.createElement("div", {
      className: "close-div sr-only"
    }, React.createElement("button", {
      className: "btn close-menu",
      type: "button"
    }, React.createElement("span", {
      className: "it-close"
    }), "close")), children);
  }

  var classes = classnames(className, {
    'link-list-wrapper': header
  });
  return React.createElement(Collapse$1, _extends({
    className: classes
  }, attributes, {
    navbar: navbar,
    isOpen: isOpen
  }), children);
};

Collapse.propTypes = propTypes$f;
Collapse.defaultProps = Collapse$1.defaultProps;

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

    _defineProperty(_assertThisInitialized(_this), "state", {
      active: _this.props.active || false,
      value: null
    });

    _defineProperty(_assertThisInitialized(_this), "onFocus", function (callback, active) {
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

    _defineProperty(_assertThisInitialized(_this), "onBlur", function (callback, active) {
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

    _defineProperty(_assertThisInitialized(_this), "onChange", function (callback, event) {
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

/**
 * HeaderContext
 * {
 *  type: PropTypes.oneOf([SLIM, CENTER, NAVBAR]).isRequired
 * }
 */

var HeaderContext = React.createContext({});
var SLIM = 'slim';
var CENTER = 'center';
var NAVBAR = 'navbar';

var propTypes$g = {
  /** Classi addizionali per il componente Header */
  className: PropTypes.string,
  // cannot use variables above here or storybook writes the full import stacktrace

  /** Tipo di componente Header: può essere solamente uno di questi tre tipi */
  type: PropTypes.oneOf(['slim', 'center', 'navbar']).isRequired,

  /** Riduce la grandezza del componente Header. Funziona solamente con Header "center". */
  small: PropTypes.bool,

  /** Imposta il tema per il componente Header. Per gli Header di tipo "slim" o "center"
   *  il valore di default è "dark". Per l'Header di tipo "nav" il tema di default è "light"
   *  in mobile, mentre "dark" in versione desktop.
   */
  theme: PropTypes.oneOf(['', 'light', 'dark'])
};
var defaultProps$f = {
  small: false
};

var Header = function Header(_ref) {
  var _classNames;

  var className = _ref.className,
      small = _ref.small,
      theme = _ref.theme,
      type = _ref.type,
      attributes = _objectWithoutPropertiesLoose(_ref, ["className", "small", "theme", "type"]);

  // use context here as theme
  var classes = classnames(className, (_classNames = {}, _classNames["it-header-" + type + "-wrapper"] = type, _classNames['it-small-header'] = type === CENTER && small, _classNames["theme-" + theme] = type !== NAVBAR && theme, _classNames['theme-dark-mobile'] = type === NAVBAR && theme === 'dark', _classNames['theme-light-desk'] = type === NAVBAR && theme === 'light', _classNames));
  return React.createElement(HeaderContext.Provider, {
    value: {
      type: type
    }
  }, React.createElement("div", _extends({
    className: classes
  }, attributes)));
};

Header.propTypes = propTypes$g;
Header.defaultProps = defaultProps$f;

var propTypes$h = {
  /** Aggiunge un ombra per enfatizzare il componente rispetto alla pagina in cui è contenuto */
  shadow: PropTypes.bool,

  /** Aggiunge il comportamento "sticky" ai componenti Header contenuti */
  sticky: PropTypes.bool,

  /** Classi addizionali per il componente Headers */
  className: PropTypes.string
};
var defaultProps$g = {
  shadow: false,
  sticky: false
};

var Headers = function Headers(_ref) {
  var className = _ref.className,
      shadow = _ref.shadow,
      sticky = _ref.sticky,
      attributes = _objectWithoutPropertiesLoose(_ref, ["className", "shadow", "sticky"]);

  var classes = classnames('it-header-wrapper', {
    'it-shadow': shadow,
    'it-header-sticky': sticky
  }, className);

  if (!sticky) {
    return React.createElement("div", _extends({
      className: classes
    }, attributes));
  }

  return React.createElement(StickyProvider, null, React.createElement(Sticky, {
    style: {
      position: 'sticky',
      zIndex: 2
    }
  }, React.createElement("div", _extends({
    className: classes
  }, attributes))));
};

Headers.propTypes = propTypes$h;
Headers.defaultProps = defaultProps$g;

var iconSprite = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtYXJyb3ctZG93biIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTcuOSAxMy4ybC01LjQgNS4zVjNoLTF2MTUuNWwtNS40LTUuMy0uNy43IDYuNiA2LjUgNi42LTYuNXpNMTIgMTl6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtYXJyb3ctZG93bi1jaXJjbGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE1LjYgMTMuMmwuNy43LTQuMyA0LjMtNC4zLTQuMy43LS43IDMuMSAzLjFWN2gxdjkuMnpNMjIgMTJBMTAgMTAgMCAxMTEyIDJhMTAgMTAgMCAwMTEwIDEwem0tMSAwYTkgOSAwIDEwLTkgOSA5IDkgMCAwMDktOXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1hcnJvdy1kb3duLXRyaWFuZ2xlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05LjIgMTJoNS42YTEgMSAwIDAxLjcgMS43TDEyIDE3LjNsLTMuNS0zLjZhMSAxIDAgMDEuNy0xLjd6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtYXJyb3ctbGVmdCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjEgMTEuNUg1LjVsNS4zLTUuNC0uNy0uN0wzLjYgMTJsNi41IDYuNi43LS43LTUuMy01LjRIMjF6TTUgMTJ6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtYXJyb3ctbGVmdC1jaXJjbGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcuNyAxMS41SDE3djFINy44bDMgMy4xLS43LjdMNS44IDEybDQuMy00LjMuNy43ek0yMiAxMkExMCAxMCAwIDExMTIgMmExMCAxMCAwIDAxMTAgMTB6bS0xIDBhOSA5IDAgMTAtOSA5IDkgOSAwIDAwOS05eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWFycm93LWxlZnQtdHJpYW5nbGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDkuMnY1LjZhMSAxIDAgMDEtMS43LjdMNi44IDEybDMuNS0zLjVhMSAxIDAgMDExLjcuN3oiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1hcnJvdy1yaWdodCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTMuOSA1LjRsLS43LjcgNS4zIDUuNEgzdjFoMTUuNWwtNS4zIDUuNC43LjcgNi42LTYuNnpNMTkgMTJ6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtYXJyb3ctcmlnaHQtY2lyY2xlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMy45IDcuN2w0LjMgNC4zLTQuMyA0LjMtLjctLjcgMy4xLTMuMUg3di0xaDkuMmwtMy0zLjF6TTIyIDEyQTEwIDEwIDAgMTExMiAyYTEwIDEwIDAgMDExMCAxMHptLTEgMGE5IDkgMCAxMC05IDkgOSA5IDAgMDA5LTl6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtYXJyb3ctcmlnaHQtdHJpYW5nbGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDE0LjhWOS4yYTEgMSAwIDAxMS43LS43bDMuNSAzLjUtMy41IDMuNWExIDEgMCAwMS0xLjctLjd6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtYXJyb3ctdXAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE4LjYgMTAuMUwxMiAzLjVsLTYuNiA2LjYuNy43IDUuNC01LjNWMjFoMVY1LjVsNS40IDUuM3pNMTIgNXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1hcnJvdy11cC1jaXJjbGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDUuOGw0LjMgNC4zLS43LjctMy4xLTMuMVYxN2gtMVY3LjhsLTMuMSAzLS43LS43ek0yMiAxMkExMCAxMCAwIDExMTIgMmExMCAxMCAwIDAxMTAgMTB6bS0xIDBhOSA5IDAgMTAtOSA5IDkgOSAwIDAwOS05eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWFycm93LXVwLXRyaWFuZ2xlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNC44IDEySDkuMmExIDEgMCAwMS0uNy0xLjdMMTIgNi44bDMuNSAzLjVhMSAxIDAgMDEtLjcgMS43eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWJhbiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgMkM2LjUgMiAyIDYuNSAyIDEyczQuNSAxMCAxMCAxMCAxMC00LjUgMTAtMTBTMTcuNSAyIDEyIDJ6TTUuMiAxNy42QzMuOCAxNiAzLjEgMTQgMy4xIDExLjlzLjctNC4xIDIuMS01LjdsMTIuNyAxMi43QzE0IDIyIDguMyAyMS40IDUuMiAxNy42em0xMy40LjVMNS45IDUuNGMzLjctMy4zIDkuNC0zIDEyLjcuNyAzLjEgMy40IDMuMSA4LjYgMCAxMnoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1iZWhhbmNlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48cGF0aCBkPSJNNy44MyA1Ljc1YTggOCAwIDAxMS42LjE1IDMuMzggMy4zOCAwIDAxMS4yNC41MWMuMzQ1LjIzMy42Mi41NTQuOC45My4yMDIuNDU2LjI5OC45NTIuMjggMS40NWEyLjY4IDIuNjggMCAwMS0uNDIgMS41NCAzLjA1IDMuMDUgMCAwMS0xLjI1IDEgMi45MiAyLjkyIDAgMDExLjY4IDEuMTVjLjM5My41OS41OSAxLjI5LjU2IDJhMy4zOSAzLjM5IDAgMDEtLjMyIDEuNTkgMy4wOCAzLjA4IDAgMDEtMSAxLjExIDQuMjcgNC4yNyAwIDAxLTEuNC42NEE2IDYgMCAwMTggMThIMlY1Ljc1aDUuODN6bS0uMzUgNWEyIDIgMCAwMDEuMTktLjM1Yy4zMjgtLjI3LjUtLjY4Ny40Ni0xLjExQTEuNDcgMS40NyAwIDAwOSA4LjU0YTEuMTYgMS4xNiAwIDAwLS40Mi0uNDNBMS44IDEuOCAwIDAwOCA3LjlhMy4yNiAzLjI2IDAgMDAtLjctLjA2SDQuNzR2Mi44N2wyLjc0LjA0em0uMTUgNS4yMmMuMjUyLjAwMy41MDMtLjAyLjc1LS4wN2EyIDIgMCAwMC42Mi0uMyAxLjM5IDEuMzkgMCAwMC40NC0uNDkgMS43MyAxLjczIDAgMDAuMTYtLjhBMS42NCAxLjY0IDAgMDA5LjA5IDEzYTIuMzMgMi4zMyAwIDAwLTEuNDEtLjRINC43NHYzLjM4bDIuODktLjAxem04LjU0LS4wOGEyLjE4IDIuMTggMCAwMDEuNTguNTQgMi4yNCAyLjI0IDAgMDAxLjI1LS4zNyAxLjYgMS42IDAgMDAuNjUtLjc5aDIuMTVhNC4wNiA0LjA2IDAgMDEtMS41OCAyLjI5IDQuNjQgNC42NCAwIDAxLTIuNTguNjkgNS4yMyA1LjIzIDAgMDEtMS45LS4zMyA0IDQgMCAwMS0yLjMzLTIuNDQgNS4yNSA1LjI1IDAgMDEtLjMyLTEuODkgNS4xMiA1LjEyIDAgMDEuMzMtMS44NiA0LjE0IDQuMTQgMCAwMS45My0xLjQ5IDQuNDggNC40OCAwIDAxMS40NC0xIDQuNTkgNC41OSAwIDAxMS44NS0uMzYgNC4zMSA0LjMxIDAgMDEyIC40NEE0IDQgMCAwMTIxIDEwLjVjLjM3LjUwNS42MzYgMS4wOC43OCAxLjY5YTYuMTggNi4xOCAwIDAxLjE3IDJoLTYuMzhhMi41IDIuNSAwIDAwLjYgMS43ek0xOSAxMS4yMmExLjgzIDEuODMgMCAwMC0xLjM4LS40OSAyIDIgMCAwMC0xIC4yIDEuOCAxLjggMCAwMC0uNjIuNDkgMS42MiAxLjYyIDAgMDAtLjMzLjYyIDIuODcgMi44NyAwIDAwLS4xMS41OWg0YTIuNCAyLjQgMCAwMC0uNTYtMS40MXptLTMuOTMtNC42NWg0Ljk4djEuMjFoLTQuOThWNi41N3oiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWJvb2ttYXJrIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xOCAyMi43bC02LTYtNiA2VjJoMTJ2MjAuN3ptLTYtNy40bDUgNVYzSDd2MTcuM2w1LTV6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtYm94IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0yMSAySDN2NGgxdjE2aDE2VjZoMVYyem0tMiAxOUg1VjZoMTR2MTV6bTEtMTZINFYzaDE2djJ6Ii8+PHBhdGggZD0iTTggOGg4djFIOHoiLz48Zz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9nPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtYnVyZ2VyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0yMiA1djFIMlY1ek0yIDEyLjVoMjB2LTFIMnpNMiAxOWgyMHYtMUgyeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWNhbGVuZGFyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0yMC41IDRIMTdWM2gtMXYxSDhWM0g3djFIMy41QTEuNSAxLjUgMCAwMDIgNS41djEzQTEuNSAxLjUgMCAwMDMuNSAyMGgxN2ExLjUgMS41IDAgMDAxLjUtMS41di0xM0ExLjUgMS41IDAgMDAyMC41IDR6bS41IDE0LjVhLjUuNSAwIDAxLS41LjVoLTE3YS41LjUgMCAwMS0uNS0uNXYtMTNhLjUuNSAwIDAxLjUtLjVIN3YxaDFWNWg4djFoMVY1aDMuNWEuNS41IDAgMDEuNS41ek00IDhoMTZ2MUg0eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWNhbWVyYSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAuNSAyMGgtMTdBMS41IDEuNSAwIDAxMiAxOC41di0xMEExLjUgMS41IDAgMDEzLjUgN2g0LjNsMS41LTIuM2ExLjUgMS41IDAgMDExLjItLjdoM2ExLjUgMS41IDAgMDExLjIuN0wxNi4yIDdoNC4zQTEuNSAxLjUgMCAwMTIyIDguNXYxMGExLjUgMS41IDAgMDEtMS41IDEuNXpNMy41IDhhLjUuNSAwIDAwLS41LjV2MTBhLjUuNSAwIDAwLjUuNWgxN2EuNS41IDAgMDAuNS0uNXYtMTBhLjUuNSAwIDAwLS41LS41aC00LjhsLTEuOC0yLjgtLjQtLjJoLTNsLS40LjJMOC4zIDh6TTEyIDE4YTUgNSAwIDExNS01IDUgNSAwIDAxLTUgNXptMC05YTQgNCAwIDEwNCA0IDQgNCAwIDAwLTQtNHpNNyA1SDR2MWgzeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWNhcmQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwLjUgNWgtMTdBMS41IDEuNSAwIDAwMiA2LjV2MTFBMS41IDEuNSAwIDAwMy41IDE5aDE3YTEuNSAxLjUgMCAwMDEuNS0xLjV2LTExQTEuNSAxLjUgMCAwMDIwLjUgNXpNMyA5aDE4djNIM3ptMTggOC41YS41LjUgMCAwMS0uNS41aC0xN2EuNS41IDAgMDEtLjUtLjVWMTNoMTh6TTMgOFY2LjVhLjUuNSAwIDAxLjUtLjVoMTdhLjUuNSAwIDAxLjUuNVY4em01IDdINHYtMWg0eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWNoYXJ0LWxpbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIxIDIwdjFIM1YzaDF2MTd6Ii8+PHBhdGggZD0iTTEwLjUgOS4ybDIuNSAyLjUgNi02djMuOGgxVjRoLTUuNXYxaDMuOEwxMyAxMC4zbC0yLjUtMi41LTQuMyA0LjMuNi44eiIvPjxnPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L2c+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1jaGVjayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOS42IDE2LjlMNCAxMS40bC44LS43IDQuOCA0LjggOC41LTguNC43Ljd6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtY2hlY2stY2lyY2xlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNy4xIDcuOWwuNy43LTcuOCA3LjYtNC43LTQuNi43LS43IDQgMy45ek0yMiAxMkExMCAxMCAwIDExMTIgMmExMCAxMCAwIDAxMTAgMTB6bS0xIDBhOSA5IDAgMTAtOSA5IDkgOSAwIDAwOS05eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWNoZXZyb24tbGVmdCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNiAxNy4yTDkgMTEuNiAxNC42IDZsLjguNy00LjkgNC45IDQuOSA0Ljl6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1jaGV2cm9uLXJpZ2h0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05LjggMTcuMmwtLjgtLjcgNC45LTQuOUw5IDYuN2wuOC0uNyA1LjYgNS42eiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtY2xpcCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTEgMjJhMi45IDIuOSAwIDAxLTMtM1Y2YTQgNCAwIDAxOCAwdjEwaC0xVjZhMyAzIDAgMDAtNiAwdjEzYTIgMiAwIDAwNCAwVjhhMSAxIDAgMDAtMiAwdjhoLTFWOGEyIDIgMCAwMTQgMHYxMWEyLjkgMi45IDAgMDEtMyAzeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWNsb2NrIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMS41IDVoMXY3LjVIN3YtMWg0LjV6TTIyIDEyQTEwIDEwIDAgMTExMiAyYTEwIDEwIDAgMDExMCAxMHptLTEgMGE5IDkgMCAxMC05IDkgOSA5IDAgMDA5LTl6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtY2xvc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyLjcgMTJsMy43IDMuNi0uOC44LTMuNi0zLjctMy42IDMuNy0uOC0uOCAzLjctMy42LTMuNy0zLjYuOC0uOCAzLjYgMy43IDMuNi0zLjcuOC44eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWNsb3NlLWJpZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIuNyAxMmw2LjcgNi42LS44LjgtNi42LTYuNy02LjYgNi43LS44LS44IDYuNy02LjYtNi43LTYuNi44LS44IDYuNiA2LjcgNi42LTYuNy44Ljh6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtY2xvc2UtY2lyY2xlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNi4zIDguM0wxMi42IDEybDMuNyAzLjYtLjcuNy0zLjctMy42LTMuNiAzLjYtLjctLjcgMy42LTMuNi0zLjYtMy43LjctLjcgMy42IDMuNyAzLjctMy43ek0yMiAxMkExMCAxMCAwIDExMTIgMmExMCAxMCAwIDAxMTAgMTB6bS0xIDBhOSA5IDAgMTAtOSA5IDkgOSAwIDAwOS05eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWNvZGUtY2lyY2xlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xOSAxMmwtMi45IDIuOS0uNy0uOCAyLjEtMi4xLTIuMS0yLjEuNy0uOHpNNy45IDkuMUw1IDEybDIuOSAyLjkuNy0uOEw2LjUgMTJsMi4xLTIuMXpNMjIgMTJBMTAgMTAgMCAxMTEyIDJhMTAgMTAgMCAwMTEwIDEwem0tMSAwYTkgOSAwIDEwLTkgOSA5IDkgMCAwMDktOXpNOS42IDE2LjVsMSAuMyAzLjctOS4zLS45LS4zeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWNvbGxhcHNlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNi41IDE1LjRsLTQuOS00LjktNC45IDQuOS0uNy0uOEwxMS42IDlsNS42IDUuNnoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWNvbW1lbnQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE5IDNINWEyIDIgMCAwMC0yIDJ2MTBhMiAyIDAgMDAyIDJoMnY1LjRsMS43LTEuNyAzLjctMy43SDE5YTIgMiAwIDAwMi0yVjVhMiAyIDAgMDAtMi0yem0xIDEyYS45LjkgMCAwMS0xIDFoLTdsLTQgNHYtNEg1YS45LjkgMCAwMS0xLTFWNWEuOS45IDAgMDExLTFoMTRhLjkuOSAwIDAxMSAxek05IDEwYS45LjkgMCAwMS0xIDEgLjkuOSAwIDAxLTEtMSAuOS45IDAgMDExLTEgLjkuOSAwIDAxMSAxem00IDBhMSAxIDAgMDEtMiAwIDEgMSAwIDAxMiAwem00IDBhMSAxIDAgMDEtMiAwIDEgMSAwIDAxMiAweiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWNvcHkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE5LjUgNEgxOHYtLjZBMS41IDEuNSAwIDAwMTYuNSAyaC0xMUExLjUgMS41IDAgMDA0IDMuNHYxNS4yQTEuNSAxLjUgMCAwMDUuNSAyMEg3di42QTEuNSAxLjUgMCAwMDguNSAyMmgxMWExLjUgMS41IDAgMDAxLjUtMS40VjUuNEExLjUgMS41IDAgMDAxOS41IDR6TTUgMTguNlYzLjRhLjUuNSAwIDAxLjUtLjRoMTFhLjUuNSAwIDAxLjUuNHYxNS4yYS41LjUgMCAwMS0uNS40aC0xMWEuNS41IDAgMDEtLjUtLjR6bTE1IDJhLjUuNSAwIDAxLS41LjRoLTExYS41LjUgMCAwMS0uNS0uNFYyMGg4LjVhMS41IDEuNSAwIDAwMS41LTEuNFY1aDEuNWEuNS41IDAgMDEuNS40eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWRlbGV0ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTUuNSA0di0uNWMwLS44LS43LTEuNS0xLjUtMS41aC00Yy0uOCAwLTEuNS43LTEuNSAxLjVWNEgzdjFoMnYxNS41YzAgLjguNyAxLjUgMS41IDEuNWgxMWMuOCAwIDEuNS0uNyAxLjUtMS41VjVoMlY0aC01LjV6bS02LS41YzAtLjMuMi0uNS41LS41aDRjLjMgMCAuNS4yLjUuNVY0aC01di0uNXptOC41IDE3YzAgLjMtLjIuNS0uNS41aC0xMWMtLjMgMC0uNS0uMi0uNS0uNVY1aDEydjE1LjV6Ii8+PHBhdGggZD0iTTExLjUgOGgxdjEwaC0xek04IDhoMXYxMEg4ek0xNSA4aDF2MTBoLTF6Ii8+PGc+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvZz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWRlc2lnbmVycy1pdGFsaWEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTguNyAyMC4ydi0xM2gzLjZ2MTMuMWwtMy42LS4xek0yMyAxMC4xaC0zLjN2Ni41YzAgLjIuMS40LjMuNnMuNC4yLjguMmgyLjFsLjIgMi44Yy0xLjIuMy0yLjEuNC0yLjguNC0xLjYgMC0yLjctLjMtMy4zLTEuMS0uNi0uNy0uOS0yLS45LTMuOXYtMTJoMy42djMuNkgyM3YyLjl6bS0xOS44IDFjLS42IDAtMS4yLS4yLTEuNi0uNi0uNC0uNC0uNi0uOS0uNi0xLjVzLjItMS4xLjYtMS41Yy40LS41LjktLjcgMS42LS43czEuMS4yIDEuNS42Yy40LjUuNiAxIC42IDEuNnMtLjIgMS4xLS42IDEuNWMtLjQuNC0uOS42LTEuNS42eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWRvd25sb2FkIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMiAxNC4yTDcuNyA5LjlsLjctLjcgMy4xIDMuMVYzaDF2OS4ybDMuMS0zIC43Ljd6bTctMi4ydjcuNWEuNS41IDAgMDEtLjUuNWgtMTNhLjUuNSAwIDAxLS41LS41VjEySDR2Ny41QTEuNSAxLjUgMCAwMDUuNSAyMWgxM2ExLjUgMS41IDAgMDAxLjUtMS41VjEyeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWVycm9yIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMS41IDE0LjJWNS43aDEuMnY4LjV6bS0uMSA0LjFoMS4ydi0xLjhoLTEuMnpNMjIgNy45djguM0wxNi4xIDIySDcuOUwyIDE2LjJWNy45TDcuOSAyaDguMnptLTEgLjRMMTUuNyAzSDguM0wzIDguM3Y3LjVMOC4zIDIxaDcuNGw1LjMtNS4yeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWV4Y2hhbmdlLWNpcmNsZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgMmExMCAxMCAwIDEwMTAgMTBBMTAgMTAgMCAwMDEyIDJ6bTAgMTlhOSA5IDAgMTE5LTkgOSA5IDAgMDEtOSA5em01LjEtOC45bC44LjgtNC4zIDQuM2ExLjUgMS41IDAgMDEtMS4xLjQgMS41IDEuNSAwIDAxLTEuMS0uNEw5IDE0LjdWMTdIOHYtNGg0djFIOS43bDIuNCAyLjVoLjh6bS02LTQuNmwtNC4yIDQuNC0uOC0uOCA0LjMtNC4zYTEuNSAxLjUgMCAwMTEuMS0uNCAxLjUgMS41IDAgMDExLjEuNEwxNSA5LjNWN2gxdjRoLTR2LTFoMi4zbC0yLjQtMi41aC0uOHoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1leHBhbmQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExLjYgMTUuNEw2IDkuOGwuNy0uOCA0LjkgNC45TDE2LjUgOWwuNy44eiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtZXh0ZXJuYWwtbGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjEgM3Y2aC0xVjQuN2wtNy42IDcuNy0uOC0uOEwxOS4zIDRIMTVWM3ptLTQgMTYuNWEuNS41IDAgMDEtLjUuNWgtMTJhLjUuNSAwIDAxLS41LS41di0xMmEuNS41IDAgMDEuNS0uNUgxMlY2SDQuNUExLjUgMS41IDAgMDAzIDcuNXYxMkExLjUgMS41IDAgMDA0LjUgMjFoMTJhMS41IDEuNSAwIDAwMS41LTEuNVYxMmgtMXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1mYWNlYm9vayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTEzLjU1IDIydi05LjExaDMuMDdsLjQ2LTMuNTZoLTMuNTNWNy4wNWMwLTEgLjI5LTEuNzMgMS43Ny0xLjczaDEuODdWMi4xNEEyNS4xNCAyNS4xNCAwIDAwMTQuNDUgMmMtMi43MiAwLTQuNTggMS42Ni00LjU4IDQuN3YyLjYySDYuODF2My41N2gzLjA2VjIyaDMuNjh6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1mYWNlYm9vay1zcXVhcmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjxwYXRoIGQ9Ik0yMCAzSDRhMSAxIDAgMDAtMSAxdjE2YTEgMSAwIDAwMSAxaDguNjN2LTYuOTVoLTIuMzd2LTIuNzRoMi4zNHYtMmEzLjI4IDMuMjggMCAwMTMuNS0zLjZjLjcwNSAwIDEuNDEuMDQgMi4xMS4xMnYyLjQ0aC0xLjQ0Yy0xLjEzIDAtMS4zNC41My0xLjM0IDEuMzJ2MS43NGgyLjdsLS4zNSAyLjcyaC0yLjM1djdIMjBhMSAxIDAgMDAxLTFWNGExIDEgMCAwMC0xLTF6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1maWxlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNC43IDJINi41QTEuNSAxLjUgMCAwMDUgMy41djE3QTEuNSAxLjUgMCAwMDYuNSAyMmgxMWExLjUgMS41IDAgMDAxLjUtMS41VjYuM3ptLjMgMS43TDE3LjMgNmgtMS44YS41LjUgMCAwMS0uNS0uNXpNMTcuNSAyMWgtMTFhLjUuNSAwIDAxLS41LS41di0xN2EuNS41IDAgMDEuNS0uNUgxNHYyLjVBMS41IDEuNSAwIDAwMTUuNSA3SDE4djEzLjVhLjUuNSAwIDAxLS41LjV6TTggOWg4djFIOHptMCAyaDh2MUg4em0wIDJoNHYxSDh6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtZmlsZXMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE1LjcgMkg3LjVBMS41IDEuNSAwIDAwNiAzLjVWNGgtLjVBMS41IDEuNSAwIDAwNCA1LjV2MTVBMS41IDEuNSAwIDAwNS41IDIyaDExYTEuNSAxLjUgMCAwMDEuNS0xLjVWMjBoLjVhMS41IDEuNSAwIDAwMS41LTEuNVY2LjN6bS4zIDEuN0wxOC4zIDZoLTEuOGEuNS41IDAgMDEtLjUtLjV6bTEgMTYuOGEuNS41IDAgMDEtLjUuNWgtMTFhLjUuNSAwIDAxLS41LS41di0xNWEuNS41IDAgMDEuNS0uNUg2djEzLjVBMS41IDEuNSAwIDAwNy41IDIwSDE3em0xLjUtMS41aC0xMWEuNS41IDAgMDEtLjUtLjV2LTE1YS41LjUgMCAwMS41LS41SDE1djIuNUExLjUgMS41IDAgMDAxNi41IDdIMTl2MTEuNWEuNS41IDAgMDEtLjUuNXpNOSA5aDh2MUg5em0wIDJoOHYxSDl6bTAgMmg0djFIOXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1mbGFnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNy4xIDhsMy4zLTVINVYySDR2MjBoMXYtOWgxNS40bC0zLjMtNXpNNSA0aDEzLjZsLTIuNyA0IDIuNyA0SDVWNHoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1mbGlja3IiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjxjaXJjbGUgY3g9IjYuNzMiIGN5PSIxMiIgcj0iNC43MyIvPjxjaXJjbGUgY3g9IjE3LjI3IiBjeT0iMTIiIHI9IjQuNzMiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWZsaWNrci1zcXVhcmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjxwYXRoIGQ9Ik0yMCA0YTMuMjYgMy4yNiAwIDAwLTIuMzgtMUg2LjM4QTMuMjYgMy4yNiAwIDAwNCA0YTMuMjYgMy4yNiAwIDAwLTEgMi4zN3YxMS4yNUEzLjI2IDMuMjYgMCAwMDQgMjBhMy4yNiAzLjI2IDAgMDAyLjM5IDFoMTEuMjRBMy4zOCAzLjM4IDAgMDAyMSAxNy42MlY2LjM3QTMuMjYgMy4yNiAwIDAwMjAgNHptLTkuNTYgOS43N2EyLjUgMi41IDAgMDEtMy41MSAwIDIuNDkgMi40OSAwIDAxMC0zLjUyIDIuNSAyLjUgMCAwMTMuNTEgMCAyLjQ5IDIuNDkgMCAwMTAgMy41MnptNi42MSAwQTIuNDkgMi40OSAwIDAxMTIuODIgMTJhMi40OSAyLjQ5IDAgMDE0LjI0LTEuNzYgMi40OSAyLjQ5IDAgMDEwIDMuNTJsLS4wMS4wMXoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWZvbGRlciIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAgNmgtOGwtMi0ySDRhMiAyIDAgMDAtMiAydjEyYTIgMiAwIDAwMiAyaDE2YTIgMiAwIDAwMi0yVjhhMiAyIDAgMDAtMi0yem0xIDEyYS45LjkgMCAwMS0xIDFINGEuOS45IDAgMDEtMS0xVjZhLjkuOSAwIDAxMS0xaDUuNmwxLjcgMS43LjMuM0gyMGEuOS45IDAgMDExIDF6TTQgOGgxNnYxSDR6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtZnVsbHNjcmVlbiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNCAyMGg0LjV2MUgzdi01LjVoMXpNMyA4LjVoMVY0aDQuNVYzSDN6TTIwIDIwaC00LjV2MUgyMXYtNS41aC0xek0xNS41IDN2MUgyMHY0LjVoMVYzeiIvPjxnPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L2c+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1mdW5uZWwiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE0IDIyaC0xdi04LjY1TDIwLjA1IDNINGw3IDEwLjM1VjIyaC0xdi04LjM1TDIuMDUgMkgyMmwtOCAxMS42NXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1naXRodWIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjxwYXRoIGQ9Ik0xMiAyYTEwIDEwIDAgMDAtMy4xNiAxOS40OWMuNS4wOS42OC0uMjIuNjgtLjQ4di0xLjdDNi43MyAxOS45MSA2LjE0IDE4IDYuMTQgMThBMi42OSAyLjY5IDAgMDA1IDE2LjVjLS45MS0uNjIuMDctLjYxLjA3LS42MWEyLjEzIDIuMTMgMCAwMTEuNTMgMSAyLjE0IDIuMTQgMCAwMDIuOTEuODMgMi4xNiAyLjE2IDAgMDEuNjMtMS4zNGMtMi4xNC0uMjEtNC41Mi0xLjA3LTQuNTItNC45YTMuODkgMy44OSAwIDAxMS0yLjY5IDMuNTcgMy41NyAwIDAxLjEtMi42NHMuODQtLjI3IDIuNzUgMWE5LjYzIDkuNjMgMCAwMTUgMGMxLjkxLTEuMjkgMi43NS0xIDIuNzUtMSAuMzcuODM1LjQwNSAxLjc4LjEgMi42NGEzLjg5IDMuODkgMCAwMTEgMi42OWMwIDMuODQtMi4zNCA0LjY4LTQuNTcgNC45My40ODIuNDkuNzMgMS4xNjQuNjggMS44NXYyLjc1YzAgLjMzLjE4LjU4LjY5LjQ4QTEwIDEwIDAgMDAxMiAyeiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtaGVhcmluZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAgOWE2LjggNi44IDAgMDEtMy41IDZsLTIgMS4xYTMuMyAzLjMgMCAwMC0xLjUgMi43QTMuMiAzLjIgMCAwMTkuOCAyMmgtLjZhMy40IDMuNCAwIDAxLTMtMi4xbC45LS41QTIuMyAyLjMgMCAwMDkuMiAyMWguNmEyLjEgMi4xIDAgMDAxLjYtLjcgMiAyIDAgMDAuNi0xLjUgNCA0IDAgMDEyLTMuNWwyLTEuMkE1LjkgNS45IDAgMDAxOSA5YTYgNiAwIDAwLTYtNiA2IDYgMCAwMC00LjggMi40bC0uOC0uNkE3IDcgMCAwMTEzIDJhNyA3IDAgMDE3IDd6TTcuNSAxMkE1LjUgNS41IDAgMDAyIDYuNXYxYTQuNSA0LjUgMCAwMTAgOXYxQTUuNSA1LjUgMCAwMDcuNSAxMnpNNSAxMmEyLjkgMi45IDAgMDAtMy0zdjFhMiAyIDAgMDEwIDR2MWEyLjkgMi45IDAgMDAzLTN6bTUgMGE4IDggMCAwMC04LTh2MWE3IDcgMCAwMTAgMTR2MWE4IDggMCAwMDgtOHptNS45LjNhNC41IDQuNSAwIDAwMS4yLTMuMiA0LjUgNC41IDAgMDAtMS4yLTMuMiA0LjUgNC41IDAgMDAtMy4yLTEuNEE0LjggNC44IDAgMDA5LjUgNmwtLjMuMy4yLjNhOC44IDguOCAwIDAxMS4zIDN2LjRoLjRhMS41IDEuNSAwIDAxMCAzdjFhMi41IDIuNSAwIDAwMi41LTIuNSAyLjYgMi42IDAgMDAtMi0yLjUgOC41IDguNSAwIDAwLTEuMS0yLjYgMy45IDMuOSAwIDAxMi4yLS45IDMuNSAzLjUgMCAwMTIuNCAxIDMuNSAzLjUgMCAwMTEgMi42IDMuNSAzLjUgMCAwMS0xIDIuNnoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1oZWxwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMi44IDIyaC0xLjR2LTIuMWgxLjR6bS0uMS00LjloLTEuMmE5LjcgOS43IDAgMDEtLjEtMS43IDIuNyAyLjcgMCAwMS4zLTEuMiA1LjYgNS42IDAgMDEuNy0xLjNsMi4zLTIuMWE5LjYgOS42IDAgMDAxLjgtMi4xIDQuNSA0LjUgMCAwMC41LTIuMyAzIDMgMCAwMC0xLjEtMi42IDYuMiA2LjIgMCAwMC0zLjQtLjcgMjIuOSAyMi45IDAgMDAtMy42LjVsLTEgLjMtLjItMS4yaC4xYTE4LjEgMTguMSAwIDAxNC43LS44IDcuNCA3LjQgMCAwMTQuMyAxIDQuMiA0LjIgMCAwMTEuNCAzLjUgNSA1IDAgMDEtLjUgMi43IDguNiA4LjYgMCAwMS0xLjkgMi4yIDE5LjcgMTkuNyAwIDAwLTEuOCAxLjYgNi4yIDYuMiAwIDAwLS45IDEuMiAyLjMgMi4zIDAgMDAtLjQgMS40eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWhlbHAtY2lyY2xlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMiAyYTEwIDEwIDAgMTAxMCAxMEExMCAxMCAwIDAwMTIgMnptMCAxOWE5IDkgMCAxMTktOSA5IDkgMCAwMS05IDl6bS0xLjItNC41SDEydjEuOGgtMS4yem00LjUtOGE0LjIgNC4yIDAgMDEtLjMgMS44IDUuNCA1LjQgMCAwMS0xLjMgMS40TDEyLjMgMTNhMi44IDIuOCAwIDAwLS40IDEuMnYuNkgxMWEzIDMgMCAwMS0uMi0xIDIuMSAyLjEgMCAwMS41LTEuMiA5IDkgMCAwMTEuNC0xLjQgNi40IDYuNCAwIDAwMS4yLTEuMyAyLjYgMi42IDAgMDAuMy0xLjQgMS43IDEuNyAwIDAwLS42LTEuNCAzLjUgMy41IDAgMDAtMi0uNEw5LjMgN2gtLjV2LS44YTEwLjIgMTAuMiAwIDAxMy0uNSA0LjkgNC45IDAgMDEyLjcuNiAyLjcgMi43IDAgMDEuOCAyLjJ6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtaG9ybiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNSA5YTMgMyAwIDAwMCA2aC41TDcgMTkuM0EyLjUgMi41IDAgMDA5LjMgMjFoLjJhMS40IDEuNCAwIDAwMS4yLS42IDEuNCAxLjQgMCAwMC4yLTEuNGwtMS4zLTRoMS44bDguNiAzLjhWNC43TDExLjQgOXptNSAxMC4zYS43LjcgMCAwMS0uMS41bC0uNC4yaC0uMmExLjUgMS41IDAgMDEtMS40LTFsLTEuMy00aDEuOXpNNSAxNGEyIDIgMCAwMTAtNGg2djR6bTE0IDMuMmwtNy0zVjkuOGw3LTMuNXpNMjIgOXY2aC0xVjl6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtaW5ib3giIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQgMnYxNGgzLjdsMSAyaDYuNmwxLTJIMjBWMkg0em0xNSAxM2gtMy4zbC0xIDJIOS4zbC0xLTJINVYzaDE0djEyeiIvPjxwYXRoIGQ9Ik0xOSAxN2gxdjVINHYtNWgxdjRoMTR6TTcgNWgxMHYxSDd6TTcgOGgxMHYxSDd6TTcgMTFoMTB2MUg3eiIvPjxnPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L2c+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1pbmZvLWNpcmNsZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgMmExMCAxMCAwIDEwMTAgMTBBMTAgMTAgMCAwMDEyIDJ6bTAgMTlhOSA5IDAgMTE5LTkgOSA5IDAgMDEtOSA5em0tLjctMTVoMS41djJoLTEuNXptMCAzaDEuNXY5aC0xLjV6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtaW5zdGFncmFtIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48cGF0aCBkPSJNMTIgNC42MmwtLjAxLjA4SDguMzVhNS4xMiA1LjEyIDAgMDAtMS42Ny4zMWMtLjM4LjE1LS43Mi4zODItMSAuNjgtLjI5OC4yOC0uNTMuNjItLjY4IDFhNS4xMiA1LjEyIDAgMDAtLjMgMS42OHY3LjI4Yy4wMS41Ny4xMTQgMS4xMzQuMzEgMS42Ny4xNS4zOC4zODIuNzIuNjggMSAuMjguMjk4LjYyLjUzIDEgLjY4LjUzNi4xOTYgMS4xLjMgMS42Ny4zMS45NS4wNSAxLjI0LjA1IDMuNjQuMDUgMi40IDAgMi42NC0uMDUgMy42NC0uMDVhNS4xMiA1LjEyIDAgMDAxLjY3LS4zMUEzLjA4IDMuMDggMCAwMDE5IDE3LjMxYTUuMTIgNS4xMiAwIDAwLjMtMS42OGMuMDUtLjk1LjA1LTEuMjQuMDUtMy42NCAwLTIuNC0uMDUtMi42NC0uMDUtMy42NGE1LjEyIDUuMTIgMCAwMC0uMzEtMS42NyAyLjc3IDIuNzcgMCAwMC0uNjgtMSAyLjc3IDIuNzcgMCAwMC0xLS42OCA1LjEyIDUuMTIgMCAwMC0xLjY3LS4zOEgxMnpNMTIgM3YuMDVoMy43MWE2LjkgNi45IDAgMDEyLjE5LjQyIDQuNjQgNC42NCAwIDAxMi42OCAyLjYzQTYuOSA2LjkgMCAwMTIxIDguMjljMCAuOTYuMDUgMS4yNy4wNSAzLjcxUzIxIDE0LjcxIDIxIDE1LjcxYTYuOSA2LjkgMCAwMS0uNDcgMi4yNCA0LjY0IDQuNjQgMCAwMS0yLjYzIDIuNjMgNi45IDYuOSAwIDAxLTIuMTkuNDJjLS45Ni4wNS0xLjI3LjA1LTMuNzEuMDVTOS4yOSAyMSA4LjI5IDIxYTYuOSA2LjkgMCAwMS0yLjE5LS40NyA0LjY0IDQuNjQgMCAwMS0yLjYzLTIuNjMgNi45IDYuOSAwIDAxLS40Mi0yLjE5VjEyIDguMjlhNi45IDYuOSAwIDAxLjQyLTIuMTlBNC42NCA0LjY0IDAgMDE2LjEgMy40MiA2LjkgNi45IDAgMDE4LjI5IDNIMTJ6bTAgNC4zOGE0LjYyIDQuNjIgMCAxMTAgOS4yNCA0LjYyIDQuNjIgMCAwMTAtOS4yNHpNMTIgMTVhMyAzIDAgMTAwLTYgMyAzIDAgMDAwIDZ6bTQuOC02LjcyYTEuMDggMS4wOCAwIDExMC0yLjE2IDEuMDggMS4wOCAwIDAxMCAyLjE2eiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQta2V5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xOCAxMGEyIDIgMCAxMDIgMiAyIDIgMCAwMC0yLTJ6bTAgM2ExIDEgMCAxMTEtMSAuOS45IDAgMDEtMSAxem0tMS02YTUuMSA1LjEgMCAwMC00LjYgM0gzLjNsLTIgMiAzIDNIN3YtMWguM2wxIDFIMTF2LTFoMS40YTUuMSA1LjEgMCAwMDQuNiAzIDUgNSAwIDAwMC0xMHptMCA5YTQuMSA0LjEgMCAwMS0zLjgtMi43VjEzSDEwdjFIOC43bC0xLTFINnYxSDQuN2wtMi0yIDEtMWg5LjR2LS4zQTQuMSA0LjEgMCAwMTE3IDhhNCA0IDAgMDEwIDh6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtbGVzcy1jaXJjbGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDNhOSA5IDAgMDE2LjM2IDE1LjM2QTkgOSAwIDAxNS42NCA1LjYyIDguOTMgOC45MyAwIDAxMTIgM20wLTFhMTAgMTAgMCAxMDcuMDcgMi45M0E5LjkzIDkuOTMgMCAwMDEyIDJ6Ii8+PHJlY3QgeD0iNyIgeT0iMTEuMjUiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxLjUiIHJ4PSIuNzUiLz48Zz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9nPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtbGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTMuNCAxMy40bC0uNy0uN2EyLjkgMi45IDAgMDAuOS0yLjEgMi43IDIuNyAwIDAwLS45LTIuMUw5LjIgNC45YTMuMiAzLjIgMCAwMC00LjMgMCAzLjIgMy4yIDAgMDAwIDQuM0w3LjggMTJsLS43LjctMi45LTIuOGE0LjIgNC4yIDAgMDEwLTUuNyA0LjIgNC4yIDAgMDE1LjcgMGwzLjUgMy42YTMuNiAzLjYgMCAwMTEuMiAyLjggMy42IDMuNiAwIDAxLTEuMiAyLjh6bTYuNCA2LjRhNC4yIDQuMiAwIDAwMC01LjdsLTIuOS0yLjgtLjcuNyAyLjkgMi44YTMuMiAzLjIgMCAwMTAgNC4zIDMuMiAzLjIgMCAwMS00LjMgMGwtMy41LTMuNmEyLjcgMi43IDAgMDEtLjktMi4xIDIuOSAyLjkgMCAwMS45LTIuMWwtLjctLjdhMy42IDMuNiAwIDAwLTEuMiAyLjggMy42IDMuNiAwIDAwMS4yIDIuOGwzLjUgMy42YTMuOCAzLjggMCAwMDIuOCAxLjEgMy45IDMuOSAwIDAwMi45LTEuMXptLTYuNy02LjciLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1saW5rZWRpbiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTE2LjUzIDguNjhBMy45NCAzLjk0IDAgMDAxMyAxMC42MlY5SDkuMzd2MTJoMy43M3YtNS45NWMwLTEuNTcuMjktMy4wOSAyLjI0LTMuMDkgMS45NSAwIDEuOTMgMS44IDEuOTMgMy4xOVYyMUgyMXYtNi42YzAtMy4yMy0uNjktNS43Mi00LjQ3LTUuNzJ6TTUuMTYgM2EyLjE3IDIuMTcgMCAxMDIuMTYgMi4xOEEyLjE2IDIuMTYgMCAwMDUuMTYgM3pNMy4yOSA5djEySDdWOUgzLjI5em0xMy4yNC0uM0EzLjk0IDMuOTQgMCAwMDEzIDEwLjYyVjlIOS4zN3YxMmgzLjczdi01Ljk1YzAtMS41Ny4yOS0zLjA5IDIuMjQtMy4wOSAxLjk1IDAgMS45MyAxLjggMS45MyAzLjE5VjIxSDIxdi02LjZjMC0zLjIzLS42OS01LjcyLTQuNDctNS43MnYuMDJ6TTMuMjkgMjFIN1Y5SDMuMjl2MTJ6TTUuMTYgM2EyLjE3IDIuMTcgMCAxMDIuMTYgMi4xOEEyLjE2IDIuMTYgMCAwMDUuMTYgM3oiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWxpbmtlZGluLXNxdWFyZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTE5LjY3IDNINC4zM0ExLjMyIDEuMzIgMCAwMDMgNC4zdjE1LjRBMS4zMiAxLjMyIDAgMDA0LjMzIDIxaDE1LjM0QTEuMzIgMS4zMiAwIDAwMjEgMTkuN1Y0LjNBMS4zMiAxLjMyIDAgMDAxOS42NyAzek04LjM0IDE4LjM0SDUuNjdWOS43NWgyLjY3djguNTl6TTcgOC41N0ExLjU1IDEuNTUgMCAxMTguNTUgNyAxLjU0IDEuNTQgMCAwMTcgOC41N3ptMTEuMzQgOS43N2gtMi42N3YtNC4xOGMwLTEgMC0yLjI4LTEuMzktMi4yOHMtMS42IDEuMDktMS42IDIuMjF2NC4yNUgxMFY5Ljc1aDIuNTZ2MS4xN2EyLjgzIDIuODMgMCAwMTIuNTMtMS4zOWMyLjcgMCAzLjIgMS43OCAzLjIgNC4xbC4wNSA0LjcxeiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtbGlzdCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNCAxMmEuOS45IDAgMDEtMSAxIDEgMSAwIDAxMC0yIC45LjkgMCAwMTEgMXpNMyA0LjVhLjkuOSAwIDAwLTEgMSAuOS45IDAgMDAxIDEgLjkuOSAwIDAwMS0xIC45LjkgMCAwMC0xLTF6bTAgMTNhMSAxIDAgMDAwIDIgMSAxIDAgMDAwLTJ6TTYgNXYxaDE2VjV6bTAgNy41aDE2di0xSDZ6TTYgMTloMTZ2LTFINnoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1sb2NrIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xOC41IDguNUgxN1Y4QTUgNSAwIDAwNyA4di41SDUuNUExLjUgMS41IDAgMDA0IDEwdjguNUExLjUgMS41IDAgMDA1LjUgMjBoMTNhMS41IDEuNSAwIDAwMS41LTEuNVYxMGExLjUgMS41IDAgMDAtMS41LTEuNXpNOCA4YTQgNCAwIDAxOCAwdi41SDh6bTExIDEwLjVhLjUuNSAwIDAxLS41LjVoLTEzYS41LjUgMCAwMS0uNS0uNVYxMGEuNS41IDAgMDEuNS0uNWgxM2EuNS41IDAgMDEuNS41eiIvPjxwYXRoIGQ9Ik0xMiAxMy4yNWExIDEgMCAxMS0xIDEgMSAxIDAgMDExLTFtMC0xYTIgMiAwIDEwMiAyIDIgMiAwIDAwLTItMnoiLz48Zz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9nPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtbG9ja2VkIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNi41IDEySDE2VjdhNCA0IDAgMDAtOCAwdjVoLS41YTEuMSAxLjEgMCAwMC0xLjEgMS4xdjYuOEExLjEgMS4xIDAgMDA3LjUgMjFoOWExLjEgMS4xIDAgMDAxLjEtMS4xdi02LjhhMS4xIDEuMSAwIDAwLTEuMS0xLjF6TTkgN2EzIDMgMCAwMTYgMHY1SDl6bTcuNiAxMi45YS4xLjEgMCAwMS0uMS4xaC05YS4xLjEgMCAwMS0uMS0uMXYtNi44aDkuMnpNMTMgMTUuNWEuOC44IDAgMDEtLjUuOHYxLjVoLTF2LTEuNWEuOC44IDAgMDEtLjUtLjggMSAxIDAgMDEyIDB6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtbWFpbCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAuNSA1aC0xN0ExLjUgMS41IDAgMDAyIDYuNXYxMUExLjUgMS41IDAgMDAzLjUgMTloMTdhMS41IDEuNSAwIDAwMS41LTEuNXYtMTFBMS41IDEuNSAwIDAwMjAuNSA1em0tLjMgMWwtNy4xIDcuMmExLjYgMS42IDAgMDEtMi4yIDBMMy44IDZ6TTMgMTcuM1Y2LjZMOC4zIDEyem0uNy43TDkgMTIuN2wxLjIgMS4yYTIuNyAyLjcgMCAwMDMuNiAwbDEuMi0xLjIgNS4zIDUuM3ptMTItNkwyMSA2LjZ2MTAuN3oiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1tYXAtbWFya2VyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMiAyMkw2LjMgMTEuNmMtMS43LTMuMS0uNi03IDIuNi04LjhzNy4xLS42IDguOCAyLjVjLjUgMSAuOCAyIC44IDMuMXMtLjMgMi4yLS44IDMuMUwxMiAyMnptMC0xOUM5IDMgNi41IDUuNSA2LjUgOC41YzAgLjkuMiAxLjkuNyAyLjdMMTIgMjBsNC44LTguOGMxLjUtMi42LjUtNi0yLjEtNy41LS44LS41LTEuOC0uNy0yLjctLjd6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtbWFwLW1hcmtlci1jaXJjbGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE3LjcgNS4zQzE2IDIuMiAxMiAxLjEgOC45IDIuOHMtNC4zIDUuNy0yLjUgOC44TDEyIDIybDUuNy0xMC40Yy41LTEgLjgtMiAuOC0zLjFzLS4zLTIuMi0uOC0zLjJ6bS0uOSA1LjhMMTIgMTkuOWwtNC44LTguOGMtLjUtLjgtLjctMS43LS43LTIuN0M2LjUgNS40IDkgMyAxMiAzczUuNSAyLjUgNS41IDUuNWMwIC45LS4yIDEuOC0uNyAyLjZ6Ii8+PHBhdGggZD0iTTEyIDVjLTEuOSAwLTMuNSAxLjYtMy41IDMuNVMxMC4xIDEyIDEyIDEyczMuNS0xLjYgMy41LTMuNVMxMy45IDUgMTIgNXptMCA2Yy0xLjQgMC0yLjUtMS4xLTIuNS0yLjVTMTAuNiA2IDEyIDZzMi41IDEuMSAyLjUgMi41UzEzLjQgMTEgMTIgMTF6Ii8+PGc+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvZz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LW1hcC1tYXJrZXItbWludXMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE3LjcgNS4zQzE2IDIuMiAxMiAxLjEgOC45IDIuOHMtNC4zIDUuNy0yLjUgOC44TDEyIDIybDUuNy0xMC40Yy41LTEgLjgtMiAuOC0zLjFzLS4zLTIuMi0uOC0zLjJ6bS0uOSA1LjhMMTIgMTkuOWwtNC44LTguOGMtLjUtLjgtLjctMS43LS43LTIuN0M2LjUgNS40IDkgMyAxMiAzczUuNSAyLjUgNS41IDUuNWMwIC45LS4yIDEuOC0uNyAyLjZ6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtbWFwLW1hcmtlci1wbHVzIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNS4xIDIuOGMtMS0uNS0yLS44LTMuMS0uOC0zLjYgMC02LjUgMi45LTYuNSA2LjUgMCAxLjEuMyAyLjIuOCAzLjFMMTIgMjJsNS43LTEwLjRjMS43LTMuMi41LTcuMS0yLjYtOC44em0xLjcgOC4zTDEyIDE5LjlsLTQuOC04LjhjLTEuNS0yLjctLjUtNiAyLjEtNy41IDIuNy0xLjUgNi0uNSA3LjUgMi4xLjUuOC43IDEuNy43IDIuNyAwIDEtLjIgMS45LS43IDIuN3oiLz48cGF0aCBkPSJNMTIuNSA4aDN2MWgtM3YzaC0xVjloLTNWOGgzVjVoMXoiLz48Zz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9nPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtbWF4aW1pemUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQuNyA0bDYuNyA2LjYtLjcuN0w0IDQuN3YzLjhIM1YzaDUuNXYxek0yMCAxOS4zbC02LjYtNi43LS43LjcgNi42IDYuN2gtMy44djFIMjF2LTUuNWgtMXpNMTUuNSAzdjFoMy44bC02LjYgNi42LjcuN0wyMCA0Ljd2My44aDFWM3pNMTAuNiAxMi42TDQgMTkuM3YtMy44SDNWMjFoNS41di0xSDQuN2w2LjctNi43eiIvPjxnPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L2c+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1tYXhpbWl6ZS1hbHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE1LjEgMTguMWwuNy43LTMuOCAzLjktMy45LTMuOS43LS43IDIuNyAyLjd2LTcuM2gxdjcuM3pNMTguOSA4LjFsLS44LjcgMi43IDIuN2gtNy4zdjFoNy4zbC0yLjYgMi42LjcuNyAzLjgtMy44ek0xMS41IDMuMnY3LjNoMVYzLjJsMi42IDIuNi43LS43TDEyIDEuMyA4LjEgNS4xbC43Ljd6TTEwLjUgMTIuNXYtMUgzLjJsMi42LTIuNy0uNi0uN0wxLjMgMTJsMy44IDMuOC43LS43LTIuNi0yLjZ6Ii8+PGc+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvZz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LW1lZGl1bSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTUgNy42M0EuNzIuNzIgMCAwMDQuODIgN0wzLjEzIDV2LS4zaDUuMjJsNCA4Ljg0IDMuNTQtOC44NGg1VjVsLTEuNDIgMS40YS40My40MyAwIDAwLS4xNi40djEwLjEyYS40NS40NSAwIDAwLjE2LjQxbDEuNCAxLjM3di4zaC03di0uM2wxLjQ1LTEuNDFjLjE0LS4xNC4xNC0uMTguMTQtLjRWOC43MUwxMS4zNyAxOWgtLjU1TDYuMTIgOC43MXY2Ljg4YS45My45MyAwIDAwLjI2Ljc5bDEuODkgMi4yOVYxOUgyLjkxdi0uM2wxLjg5LTIuMzJhLjkyLjkyIDAgMDAuMi0uNzlWNy42M3oiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LW1lZGl1bS1zcXVhcmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjxwYXRoIGQ9Ik0zIDNoMTh2MThIM1Yzem00LjMgMTEuMzZhLjY0LjY0IDAgMDEtLjE3LjU0bC0xLjI3IDEuNTR2LjJoMy42di0uMkw4LjE5IDE0LjlhLjY3LjY3IDAgMDEtLjE5LS41NFY5Ljc0bDMuMTYgNi45aC4zN2wyLjcxLTYuOXY1LjVjMCAuMTUgMCAuMTctLjA5LjI3bC0xIDF2LjJoNC43NHYtLjJsLS44OS0uOThhLjI3LjI3IDAgMDEtLjExLS4yN3YtNi44YS4yOC4yOCAwIDAxLjExLS4yN2wxLS45M3YtLjJoLTMuMzlMMTIuMjMgMTMgOS41MiA3LjA2SDZ2LjJsMS4xNCAxLjM2QS41LjUgMCAwMTcuMyA5djUuMzZ6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1taW5pbWl6ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMyAxNS41aDUuNVYyMWgtMXYtNC41SDN6TTcuNSA3LjVIM3YxaDUuNVYzaC0xek0xNS41IDIxaDF2LTQuNUgyMXYtMWgtNS41ek0xNi41IDcuNVYzaC0xdjUuNUgyMXYtMXoiLz48Zz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9nPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtbWludXMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwIDEyLjVINHYtMWgxNnoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1taW51cy1jaXJjbGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYuOSAxMS41aDEwdjFoLTEwek0yMiAxMkExMCAxMCAwIDExMTIgMmExMCAxMCAwIDAxMTAgMTB6bS0xIDBhOSA5IDAgMTAtOSA5IDkgOSAwIDAwOS05eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LW1vcmUtYWN0aW9ucyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiAxMGEyIDIgMCAxMDIgMiAyIDIgMCAwMC0yLTJ6bTAgM2ExIDEgMCAwMTAtMiAxIDEgMCAwMTAgMnptNi0zYTIgMiAwIDEwMiAyIDIgMiAwIDAwLTItMnptMCAzYTEgMSAwIDExMS0xIC45LjkgMCAwMS0xIDF6bTYtM2EyIDIgMCAxMDIgMiAyIDIgMCAwMC0yLTJ6bTAgM2ExIDEgMCAxMTEtMSAuOS45IDAgMDEtMSAxeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LW1vcmUtaXRlbXMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDE4YTEgMSAwIDExLTEgMSAuOS45IDAgMDExLTFtMC0xYTIgMiAwIDEwMiAyIDIgMiAwIDAwLTItMnptMC02YTEgMSAwIDExLTEgMSAuOS45IDAgMDExLTFtMC0xYTIgMiAwIDEwMiAyIDIgMiAwIDAwLTItMnptMC02YS45LjkgMCAwMTEgMSAxIDEgMCAwMS0yIDAgLjkuOSAwIDAxMS0xbTAtMWEyIDIgMCAxMDIgMiAyIDIgMCAwMC0yLTJ6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtbm90ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTguNSA0aC0xM0ExLjUgMS41IDAgMDA0IDUuNXYxM0ExLjUgMS41IDAgMDA1LjUgMjBoMTAuMmw0LjMtNC4zVjUuNUExLjUgMS41IDAgMDAxOC41IDR6TTUgMTguNXYtMTNhLjUuNSAwIDAxLjUtLjVoMTNhLjUuNSAwIDAxLjUuNVYxNWgtMi41YTEuNSAxLjUgMCAwMC0xLjUgMS41VjE5SDUuNWEuNS41IDAgMDEtLjUtLjV6TTE4LjMgMTZMMTYgMTguM3YtMS44YS41LjUgMCAwMS41LS41ek0xNiA5SDhWOGg4em0wIDJIOHYtMWg4em0tMiAxdjFIOHYtMXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1wYSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMyAyMWgxOHYxSDN6bTAtMWgxOHYtMUgzek0yMiA5SDJsMTAtN3pNNS4yIDhoMTMuNkwxMiAzLjJ6TTYgMTh2LThINXY4em00IDB2LThIOXY4em01IDB2LThoLTF2OHptNCAwdi04aC0xdjh6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtcGFzc3dvcmQtaW52aXNpYmxlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNSAxMmEzLjIgMy4yIDAgMDAtLjctMS45bC40LTEuMWE0LjIgNC4yIDAgMDExLjMgMyA0IDQgMCAwMS0zLjkgNGwuNC0xLjFBMi45IDIuOSAwIDAwMTUgMTJ6TTMuMSAxMkE5LjggOS44IDAgMDExMiA2LjVoLjRsLjQtLjlIMTJhMTAuOSAxMC45IDAgMDAtOS44IDZMMiAxMmwuMi41YTExIDExIDAgMDA2LjEgNS4zbC4zLS45QTkuOCA5LjggMCAwMTMuMSAxMnptMTguNy0uNWExMSAxMSAwIDAwLTYuMS01LjNsLS4zLjlhOS44IDkuOCAwIDAxNS41IDQuOSA5LjggOS44IDAgMDEtOC45IDUuNWgtLjRsLS40LjloLjhhMTAuOSAxMC45IDAgMDA5LjgtNmwuMi0uNHpNMTEuNSA5LjFsLjQtMS4xQTQgNCAwIDAwOCAxMmE0LjIgNC4yIDAgMDAxLjMgM2wuNC0xLjFBMy4yIDMuMiAwIDAxOSAxMmEyLjkgMi45IDAgMDEyLjUtMi45em0zLjEtNS43TDguNSAyMC4zbC45LjMgNi4xLTE2Ljl6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtcGFzc3dvcmQtdmlzaWJsZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjEuOCAxMS41YTExIDExIDAgMDAtMTkuNiAwTDIgMTJsLjIuNWExMSAxMSAwIDAwMTkuNiAwbC4yLS41em0tOS44IDZBOS44IDkuOCAwIDAxMy4xIDEyIDkuOCA5LjggMCAwMTEyIDYuNWE5LjggOS44IDAgMDE4LjkgNS41IDkuOCA5LjggMCAwMS04LjkgNS41ek0xMiA4YTQgNCAwIDEwNCA0IDQgNCAwIDAwLTQtNHptMCA3YTMgMyAwIDExMy0zIDIuOSAyLjkgMCAwMS0zIDN6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtcGVuY2lsIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0yMC41IDMuNWEyLjkgMi45IDAgMDAtMi4xLS45IDMuMSAzLjEgMCAwMC0yLjIuOUw0LjYgMTUuMmwtMSA1LjIgNS4yLTFMMjAuNSA3LjhhMyAzIDAgMDAwLTQuM3ptLTUuNyAyLjhsLjctLjcgMi45IDIuOS0uNy43em0tLjcuOGwxLjEgMS04LjQgOC40LTEuMS0xLjF6TTUuNyAxOC4zYS43LjcgMCAwMC0uNi0uM2wuMy0xLjUgMi4xIDIuMS0xLjUuM2EuNy43IDAgMDAtLjMtLjZ6bTIuOSAwbC0xLjEtMS4xIDguNC04LjQgMSAxLjF6TTE5LjggNy4xbC0uNy43LTIuOS0yLjkuNy0uN2EyLjIgMi4yIDAgMDExLjUtLjYgMiAyIDAgMDExLjQuNiAyLjEgMi4xIDAgMDEwIDIuOXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1waW4iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE4LjEgMTRMMTUgMTAuM1Y0LjZMMTYuMyAySDcuN0w5IDQuNnY1LjdMNS45IDE0aDUuNnY4aDF2LTh6TTEwIDVoNHY1aC00em00LjctMmwtLjUgMUg5LjhsLS41LTF6bS01IDhoNC42bDEuNiAySDguMXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1wbHVnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik04LjUgOS45bC0yLjggMi44LTEuMSAxLjFjLS42LjYtLjYgMS41IDAgMi4xTDYgMTcuM2wtMy44IDMuOS43LjdMNi43IDE4bDEuNCAxLjRjLjMuMy43LjQgMS4xLjQuNCAwIC44LS4yIDEuMS0uNGwxLjEtMS4xIDIuOC0yLjgtNS43LTUuNnptMSA4LjhjLS4yLjItLjUuMi0uNyAwbC0zLjUtMy41Yy0uMi0uMi0uMi0uNSAwLS43bC40LS40IDQuMiA0LjItLjQuNHptLTMuMi01LjNsMi4xLTIuMSA0LjIgNC4yLTIuMSAyLjEtNC4yLTQuMnptOS42LTguOGMtLjYtLjYtMS41LS42LTIuMSAwTDExLjMgN2wxLjQgMS40LTIuMSAyLjEuNy43IDIuMS0yLjEgMS40IDEuNC0yLjEgMi4xLjcuNyAyLjEtMi4xIDEuNSAxLjQgMi41LTIuNWMuNi0uNi42LTEuNSAwLTIuMWwtMy42LTMuNHptMi44IDQuOUwxNyAxMS4zIDEyLjcgN2wxLjgtMS44Yy4yLS4yLjUtLjIuNyAwbDMuNSAzLjVjLjIuMy4yLjYgMCAuOHpNOC41IDEyLjdsLjcuNy0uNy43LS43LS43LjctLjd6bTIuOCAyLjhsLS43LjctLjctLjcuNy0uNy43Ljd6TTE4IDYuN2wtLjctLjcgMy45LTMuOC43LjdMMTggNi43eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXBsdXMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwIDEyLjVoLTcuNVYyMGgtMXYtNy41SDR2LTFoNy41VjRoMXY3LjVIMjB6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtcGx1cy1jaXJjbGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyLjQgMTEuNWg0LjV2MWgtNC41VjE3aC0xdi00LjVINi45di0xaDQuNVY3aDF6bTkuNi41QTEwIDEwIDAgMTExMiAyYTEwIDEwIDAgMDExMCAxMHptLTEgMGE5IDkgMCAxMC05IDkgOSA5IDAgMDA5LTl6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtcHJlc2VudGF0aW9uIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik00IDV2MTAuNkEyLjQgMi40IDAgMDA2LjQgMThoMy4xbC0xLjEgNGgxbDEuMS00aDIuN2wxLjIgNGgxbC0xLjItNGgzLjVhMi4zIDIuMyAwIDAwMi4zLTIuM1Y1em0xNSAxMC43YTEuMyAxLjMgMCAwMS0xLjMgMS4zSDYuNEExLjQgMS40IDAgMDE1IDE1LjZWNmgxNHpNMjEgM3YxSDNWM3ptLTkgMTNhNC41IDQuNSAwIDEwLTQuNS00LjVBNC41IDQuNSAwIDAwMTIgMTZ6bS0uNS03LjlWMTFIOC42YTMuNCAzLjQgMCAwMTIuOS0yLjl6bTEgMy45VjhhMy41IDMuNSAwIDAxLS41IDcgMy40IDMuNCAwIDAxLTMuNC0zeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXByaW50IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0yMSA5LjVBMS41IDEuNSAwIDAwMTkuNSA4SDE3VjNIN3Y1SDQuNUExLjUgMS41IDAgMDAzIDkuNVYxNmgydjNoMnYyaDEwdi0yaDJ2LTNoMnpNOCA0aDh2NEg4ek02IDE4di00aDF2NHptMTAgMkg4di02aDh2NnptMi0yaC0xdi00aDF2NHptMi0zaC0xdi0ySDV2Mkg0VjkuNWEuNS41IDAgMDEuNS0uNWgxNWEuNS41IDAgMDEuNS41ek02IDExaDR2MUg2eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXJlZnJlc2giIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIxIDEyYzAgNS00IDktOSA5cy05LTQtOS05IDQtOSA5LTljMi40IDAgNC43LjkgNi40IDIuNi40LjQuOC45IDEuMSAxLjRoLTR2MUgyMVYyLjVoLTFWNmMtLjMtLjQtLjYtLjctLjktMS4xQzE1LjIgMSA4LjggMSA0LjkgNC45UzEgMTUuMiA0LjkgMTkuMXMxMC4yIDMuOSAxNC4xIDBjMS45LTEuOSAyLjktNC40IDIuOS03LjFIMjF6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtcmVzdG9yZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgMkM5LjMgMiA2LjggMyA0LjkgNC45Yy0uMy40LS42LjctLjkgMS4xVjIuNUgzVjhoNS41VjdoLTRjLjMtLjUuNy0uOSAxLjEtMS40IDMuNS0zLjUgOS4yLTMuNiAxMi43LS4xczMuNiA5LjIuMSAxMi43LTkuMiAzLjYtMTIuNy4xQzQgMTYuNyAzIDE0LjQgMyAxMkgyYzAgNS41IDQuNSAxMCAxMCAxMHMxMC00LjUgMTAtMTBTMTcuNSAyIDEyIDJ6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtc2VhcmNoIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0yMS45IDIxLjFMMTYgMTUuM2E4LjMgOC4zIDAgMDAyLTUuMyA4IDggMCAxMC04IDggOC4zIDguMyAwIDAwNS4zLTJsNS44IDUuOXpNMTAgMTdhNyA3IDAgMTE3LTcgNyA3IDAgMDEtNyA3eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXNldHRpbmdzIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMiA3LjVhNC41IDQuNSAwIDEwNC41IDQuNUE0LjUgNC41IDAgMDAxMiA3LjV6bTAgOGEzLjUgMy41IDAgMTEzLjUtMy41IDMuNSAzLjUgMCAwMS0zLjUgMy41em05LjgtMS42QTEyLjMgMTIuMyAwIDAwMjIgMTJhMTIuMyAxMi4zIDAgMDAtLjItMS45bC0yLjEtLjNhOC43IDguNyAwIDAwLS43LTEuN2wxLjMtMS43YTguNyA4LjcgMCAwMC0yLjctMi43TDE1LjkgNWwtMS43LS43LS4zLTIuMUwxMiAybC0xLjkuMi0uMyAyLjEtMS43LjctMS43LTEuM2E4LjcgOC43IDAgMDAtMi43IDIuN0w1IDguMWE4LjcgOC43IDAgMDAtLjcgMS43bC0yLjEuM0ExMi4zIDEyLjMgMCAwMDIgMTJhMTIuMyAxMi4zIDAgMDAuMiAxLjlsMi4xLjNhOC43IDguNyAwIDAwLjcgMS43bC0xLjMgMS43YTguNyA4LjcgMCAwMDIuNyAyLjdMOC4xIDE5bDEuNy43LjMgMi4xIDEuOS4yIDEuOS0uMi4zLTIuMSAxLjctLjcgMS43IDEuM2E4LjcgOC43IDAgMDAyLjctMi43TDE5IDE1LjlhOC43IDguNyAwIDAwLjctMS43em0tMi45LS43bC0uMi43YTMuOSAzLjkgMCAwMS0uNiAxLjVsLS4zLjYuNC41LjggMS4xYTkuMyA5LjMgMCAwMS0xLjQgMS40bC0xLjEtLjgtLjUtLjQtLjYuM2EzLjkgMy45IDAgMDEtMS41LjZsLS43LjJ2LjdsLS4yIDEuM2gtMmwtLjItMS4zdi0uN2wtLjctLjJhMy45IDMuOSAwIDAxLTEuNS0uNmwtLjYtLjMtLjUuNC0xLjEuOEE5LjMgOS4zIDAgMDE1IDE3LjZsLjgtMS4xLjQtLjUtLjMtLjZhMy45IDMuOSAwIDAxLS42LTEuNWwtLjItLjdoLS43TDMuMSAxM2EzLjQgMy40IDAgMDEtLjEtMSAzLjQgMy40IDAgMDEuMS0xbDEuMy0uMmguN2wuMi0uN2EzLjkgMy45IDAgMDEuNi0xLjVsLjMtLjYtLjQtLjVMNSA2LjQgNi40IDVsMS4xLjguNS40LjYtLjNhMy45IDMuOSAwIDAxMS41LS42bC43LS4ydi0uN2wuMi0xLjNoMmwuMiAxLjN2LjdsLjcuMmEzLjkgMy45IDAgMDExLjUuNmwuNi4zLjUtLjQgMS4xLS44QTkuMyA5LjMgMCAwMTE5IDYuNGwtLjggMS4xLS40LjUuMy42YTMuOSAzLjkgMCAwMS42IDEuNWwuMi43aC43bDEuMy4yYTMuNCAzLjQgMCAwMS4xIDEgMy40IDMuNCAwIDAxLS4xIDFsLTEuMy4yeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXNoYXJlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNy41IDE1YTIuNSAyLjUgMCAwMC0yIDFsLTcuNi0zLjRBMS4zIDEuMyAwIDAwOCAxMmExLjMgMS4zIDAgMDAtLjEtLjZMMTUuNSA4YTIuNSAyLjUgMCAxMC0uNS0xLjUgMS4zIDEuMyAwIDAwLjEuNmwtNy42IDMuNGEyLjUgMi41IDAgMTAwIDNsNy42IDMuNGExLjMgMS4zIDAgMDAtLjEuNiAyLjUgMi41IDAgMTAyLjUtMi41em0wLTEwQTEuNSAxLjUgMCAwMTE5IDYuNWExLjUgMS41IDAgMDEtMyAwQTEuNSAxLjUgMCAwMTE3LjUgNXptLTEyIDguNWExLjUgMS41IDAgMDEwLTMgMS41IDEuNSAwIDAxMCAzem0xMiA1LjVhMS41IDEuNSAwIDExMS41LTEuNSAxLjUgMS41IDAgMDEtMS41IDEuNXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1zdGFyLWZ1bGwiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDEuN0w5LjUgOS4ySDEuNkw4IDEzLjlsLTIuNCA3LjYgNi40LTQuNyA2LjQgNC43LTIuNC03LjYgNi40LTQuN2gtNy45TDEyIDEuN3oiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1zdGFyLW91dGxpbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDQuOWwxLjUgNC42LjIuN2g1LjdsLTQgMi45LS42LjQuMi43IDEuNSA0LjctMy45LTIuOS0uNi0uNC0uNi40LTMuOSAyLjlMOSAxNC4ybC4yLS43LS42LS40LTQtMi45aDUuN2wuMi0uN0wxMiA0LjltMC0zLjJMOS41IDkuMkgxLjZMOCAxMy45bC0yLjQgNy42IDYuNC00LjcgNi40IDQuNy0yLjQtNy42IDYuNC00LjdoLTcuOUwxMiAxLjd6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtdGVhbS1kaWdpdGFsZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjMuNjQ4IDI0SC4zNTJBLjM1My4zNTMgMCAwMTAgMjMuNjQ4Vi4zNTJDMCAuMTU4LjE1OCAwIC4zNTIgMGgyMy4yOTZjLjE5NCAwIC4zNTIuMTU4LjM1Mi4zNTJ2MjMuMjk2YS4zNTMuMzUzIDAgMDEtLjM1Mi4zNTJ6TTUuODE0IDExLjc5MmExLjU5NiAxLjU5NiAwIDEwMC0zLjE5MiAxLjU5NiAxLjU5NiAwIDAwMCAzLjE5MnpNMTAgMTguOTk0VjE5aDQuNDE4QzE5LjEzIDE5IDIwIDE2LjY4NSAyMCAxMi4yNTMgMjAgNy45MyAxOC45OTUgNiAxNC40MTggNkgxMHYxMi45OTR6bTQuNDE4LTEwLjcwMmMyLjU4NiAwIDIuODM4IDEuMTEgMi44MzggMy45NTUgMCAyLjg5LS4yNTIgNC40NTUtMi44MzggNC40NTVoLTEuNzU2di04LjQxaDEuNzU2eiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtdGVsZXBob25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik01IDNoLjE4TTIwIDExLjU2QTcuNTkgNy41OSAwIDAwMTIuNDggNGgtLjA2YS40OS40OSAwIDAwLS40OS40OC41LjUgMCAwMC40OS41MUE2LjYxIDYuNjEgMCAwMTE5IDExLjYyYS41MS41MSAwIDAwLjU0LjQ2LjQ5LjQ5IDAgMDAuNDUtLjQ2cy4wMS0uMDQuMDEtLjA2eiIvPjxwYXRoIGQ9Ik0xNi45MyAxMS42OGE0LjUgNC41IDAgMDAtNC40OC00LjQ4LjUxLjUxIDAgMDAwIDEgMy41IDMuNSAwIDAxMy40OSAzLjQ5LjUuNSAwIDAwLjUuNS41MS41MSAwIDAwLjUtLjUxek0xNS42OCAyMS4xOWExMy4zMiAxMy4zMiAwIDAxLTEyLjgtMTMuMS45Mi45MiAwIDAxLjYyLS44OGMxLjc0LS41NiA0LTEgNC43LjA2YTcuMzkgNy4zOSAwIDAxLjg1IDIuOTF2LjIxYTEuNDggMS40OCAwIDAxLS43IDEuNjguODEuODEgMCAwMC0uNDkuNzEgMTIuNTUgMTIuNTUgMCAwMDMuMzggMy41MS44OC44OCAwIDAwLjQ4LS41NmMuMDktLjUzLjU4LTEgMS43LS44NWguMjFhNyA3IDAgMDEyLjg1Ljg3YzEgLjcyLjYyIDMgLjA5IDQuNzJhMSAxIDAgMDEtLjg5Ljcyek02LjU1IDcuNTJhOS41IDkuNSAwIDAwLTIuNzguNTUgMTIuNDEgMTIuNDEgMCAwMDExLjkxIDEyLjIyYy43My0yLjI2LjY2LTMuNTQuMzEtMy43OGE2LjY2IDYuNjYgMCAwMC0yLjQ2LS43MmgtLjIyYy0uMzIgMC0uNjUgMC0uNjguMTJhMS45IDEuOSAwIDAxLTEuMjcgMS4zNGwtLjIxLjA3LS4xNS0uMTVhMTMuNDQgMTMuNDQgMCAwMS0zLjktNEw3IDEzYTEuNjggMS42OCAwIDAxMS0xLjdjLjEyLS4wNy4zMy0uMTguMjUtLjc1di0uMjJhNi44NCA2Ljg0IDAgMDAtLjctMi41NGMtLjItLjE4LS41NS0uMjctMS0uMjd6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC10b29sIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik03LjcgNWEzLjEgMy4xIDAgMDExLjcuNSAzLjEgMy4xIDAgMDExLjYgMyAzIDMgMCAwMC44IDIuNGw2LjMgNi4zYTEgMSAwIDAxLjIgMS4zIDEgMSAwIDAxLS44LjUuOS45IDAgMDEtLjctLjNsLTYuNC02LjRhMyAzIDAgMDAtMi4xLS44aC0uNmEyLjggMi44IDAgMDEtMi4yLTFoMi43VjYuNEg1LjFhMi43IDIuNyAwIDAxMS4xLTFBMi44IDIuOCAwIDAxNy43IDVtMC0xYTQuNiA0LjYgMCAwMC0yIC41IDQuMSA0LjEgMCAwMC0yLjEgMi45aDMuNnYyLjFIMy43YTUuNCA1LjQgMCAwMDEgMS44IDQuNCA0LjQgMCAwMDMgMS4yaC42YTIuNCAyLjQgMCAwMTEuNC41bDYuNCA2LjRhMiAyIDAgMDAxLjQuNiAxLjkgMS45IDAgMDAxLjYtLjkgMiAyIDAgMDAtLjMtMi42bC02LjMtNi4zYTEuOCAxLjggMCAwMS0uNS0xLjYgNC40IDQuNCAwIDAwLTItNEE0LjYgNC42IDAgMDA3LjcgNHoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC10d2l0dGVyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48cGF0aCBkPSJNOC4wOCAyMGExMC45MyAxMC45MyAwIDAwMTEtMTF2LS41YTggOCAwIDAwMS45Mi0yIDcuODUgNy44NSAwIDAxLTIuMjIuNjFBMy44OSAzLjg5IDAgMDAyMC40OCA1YTggOCAwIDAxLTIuNDguOTEgMy44NyAzLjg3IDAgMDAtNi41OSAzLjUyIDExIDExIDAgMDEtOC00IDMuODUgMy44NSAwIDAwMS4xOSA1LjE2IDMuNzYgMy43NiAwIDAxLTEuNzUtLjQ4QTMuODcgMy44NyAwIDAwNiAxMy45MWEzLjczIDMuNzMgMCAwMS0xIC4xNCA0LjMgNC4zIDAgMDEtLjczLS4wNSAzLjg3IDMuODcgMCAwMDMuNjEgMi42OCA3LjczIDcuNzMgMCAwMS00LjggMS42NiA3IDcgMCAwMS0uOTItLjA2QTEwLjkgMTAuOSAwIDAwOC4wOCAyMCIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtdHdpdHRlci1zcXVhcmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjxwYXRoIGQ9Ik0xOS41IDIyaC0xNUEyLjUgMi41IDAgMDEyIDE5LjV2LTE1QTIuNSAyLjUgMCAwMTQuNSAyaDE1QTIuNSAyLjUgMCAwMTIyIDQuNXYxNWEyLjUgMi41IDAgMDEtMi41IDIuNXptLTkuODItNC45MkE3LjI0IDcuMjQgMCAwMDE3IDkuNzl2LS4zM2E1LjIyIDUuMjIgMCAwMDEuMjgtMS4zMyA1LjIyIDUuMjIgMCAwMS0xLjQ4LjQgMi41NiAyLjU2IDAgMDAxLjE0LTEuNDIgNC45MyA0LjkzIDAgMDEtMS42NC42MiAyLjUzIDIuNTMgMCAwMC0xLjg2LS44MSAyLjU3IDIuNTcgMCAwMC0yLjU3IDIuNTdjLjAwMy4xOTUuMDI2LjM5LjA3LjU4YTcuMjYgNy4yNiAwIDAxLTUuMzItMi42OCAyLjU5IDIuNTkgMCAwMC44IDMuNDMgMi43OCAyLjc4IDAgMDEtMS4xNi0uMzIgMi41NyAyLjU3IDAgMDAyLjA1IDIuNTIgMi40NiAyLjQ2IDAgMDEtMS4xNS4wNCAyLjU1IDIuNTUgMCAwMDIuMzkgMS43OEE1LjEzIDUuMTMgMCAwMTYuMzcgMTZhNi4wOCA2LjA4IDAgMDEtLjYxIDAgNy4yMyA3LjIzIDAgMDAzLjkyIDEuMTR2LS4wNnoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXVubG9ja2VkIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNi41IDEySDE2VjZhNCA0IDAgMDAtOCAwdjNoMVY2YTMgMyAwIDAxNiAwdjZINy41YTEuMSAxLjEgMCAwMC0xLjEgMS4xdjYuOEExLjEgMS4xIDAgMDA3LjUgMjFoOWExLjEgMS4xIDAgMDAxLjEtMS4xdi02LjhhMS4xIDEuMSAwIDAwLTEuMS0xLjF6bS4xIDcuOWEuMS4xIDAgMDEtLjEuMWgtOWEuMS4xIDAgMDEtLjEtLjF2LTYuOGg5LjJ6TTEzIDE1LjVhLjguOCAwIDAxLS41Ljh2MS41aC0xdi0xLjVhLjguOCAwIDAxLS41LS44IDEgMSAwIDAxMiAweiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXVwbG9hZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOC40IDcuM2wtLjctLjdMMTIgMi4zbDQuMyA0LjMtLjcuNy0zLjEtMy4xdjkuM2gtMVY0LjJ6TTE5IDEydjcuNWEuNS41IDAgMDEtLjUuNWgtMTNhLjUuNSAwIDAxLS41LS41VjEySDR2Ny41QTEuNSAxLjUgMCAwMDUuNSAyMWgxM2ExLjUgMS41IDAgMDAxLjUtMS41VjEyeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXVzZXIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDEzYTQgNCAwIDAwNC00VjZhNCA0IDAgMDAtOCAwdjNhNCA0IDAgMDA0IDR6TTkgNmEzIDMgMCAwMTYgMHYzYTMgMyAwIDAxLTYgMHptMTEgMTZoLTFhNyA3IDAgMDAtMTQgMEg0YTggOCAwIDAxMTYgMHoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC12aWRlbyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTcuNSA3LjNWNkExLjUgMS41IDAgMDAxNiA0LjVINS41QTEuNSAxLjUgMCAwMDQgNnY4YTEuNSAxLjUgMCAwMDEuNSAxLjVoMy40TDcuNCAyMWgxbDEuNi01LjVoMS44bDEuNiA1LjVoMWwtMS42LTUuNUgxNmExLjUgMS41IDAgMDAxLjUtMS41di0xLjNsNCAxLjVWNS44em0zIDUuNWwtNC0xLjVWMTRhLjUuNSAwIDAxLS41LjVINS41QS41LjUgMCAwMTUgMTRWNmEuNS41IDAgMDEuNS0uNUgxNmEuNS41IDAgMDEuNS41djIuN2w0LTEuNXpNMiA4aDF2NEgyeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXdhcm5pbmciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyLjUgMTdoLTFWMmgxem0wIDNoLTF2MmgxeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXdhcm5pbmctY2lyY2xlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMiAyYTEwIDEwIDAgMTAxMCAxMEExMCAxMCAwIDAwMTIgMnptMCAxOWE5IDkgMCAxMTktOSA5IDkgMCAwMS05IDl6bS0uNS02LjhWNS43aDEuMnY4LjV6bS0uMSAyLjNoMS4ydjEuOGgtMS4yeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXdoYXRzYXBwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48cGF0aCBkPSJNMTkuMDkgNC42M2ExMCAxMCAwIDAwLTE1LjY4IDEyTDIgMjEuOGw1LjI4LTEuMzhBMTAgMTAgMCAwMDEyIDIxLjYzYTEwIDEwIDAgMDA3LjA1LTE3aC4wNHpNMTIgMjBhOC4xOCA4LjE4IDAgMDEtNC4yMS0xLjE2bC0uMzEtLjE4LTMuMTMuODMuODQtMy4wNi0uMTktLjM2QTguMjggOC4yOCAwIDExMTIgMjB6bTQuNTQtNi4yYy0uMjUtLjEzLTEuNDctLjczLTEuNy0uODEtLjIzLS4wOC0uMzktLjEzLS41Ni4xMi0uMjQ2LjM0Ny0uNTEuNjgtLjc5IDEtLjE0LjE2LS4yOS4xOC0uNTQuMDZhNi45MiA2LjkyIDAgMDEtMi0xLjIzIDcuMjcgNy4yNyAwIDAxLTEuMzgtMS43M2MtLjE1LS4yNSAwLS4zOC4xMS0uNTFzLjI1LS4yOS4zNy0uNDNhMS41MSAxLjUxIDAgMDAuMjUtLjQyLjQ2LjQ2IDAgMDAwLS40M2MtLjA0LS4yLS41NC0xLjQyLS43NS0xLjkyLS4yMS0uNS0uNC0uNDItLjU2LS40M2gtLjQ3YTEgMSAwIDAwLS42Ny4zMUEyLjgxIDIuODEgMCAwMDcgOS40NSA0LjczIDQuNzMgMCAwMDggMTJhMTEgMTEgMCAwMDQuMjUgMy43NmMuNDY0LjIuOTM4LjM3OCAxLjQyLjUzYTMuMjggMy4yOCAwIDAwMS41Ni4wOSAyLjU0IDIuNTQgMCAwMDEuNjgtMS4xOCAyLjA5IDIuMDkgMCAwMC4xNS0xLjJjLS4wNi0uMDctLjIzLS4xMy0uNDgtLjI1bC0uMDQuMDV6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC13aGF0c2FwcC1zcXVhcmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjxwYXRoIGQ9Ik0xNiA4LjA3YTUuMzQgNS4zNCAwIDAwLTkuMTEgMy43NyA1LjI4IDUuMjggMCAwMC44MiAyLjg0bC4xMi4yLS41MyAyIDItLjUzLjIuMTFjLjgyLjQ5IDEuNzU2Ljc1IDIuNzEuNzVBNS4zNCA1LjM0IDAgMDAxNiA4LjA3em0tLjgzIDUuODNhMS42NiAxLjY2IDAgMDEtMS4wOC43NiAyLjIzIDIuMjMgMCAwMS0xLS4wNmMtLjIzLS4wOC0uNTMtLjE4LS45MS0uMzRhNy4xNiA3LjE2IDAgMDEtMi43OC0yLjQyIDMuMTMgMy4xMyAwIDAxLS42Ni0xLjY2IDEuODMgMS44MyAwIDAxLjU2LTEuMzQuNTkuNTkgMCAwMS40My0uMkgxMGMuMSAwIC4yMyAwIC4zNi4yNy4xMy4yNy40NSAxLjExLjQ5IDEuMTlhLjMuMyAwIDAxMCAuMjggMS4yIDEuMiAwIDAxLS4xNi4yN2MtLjA4LjEtLjE3LjIxLS4yNC4yOC0uMDcuMDctLjE3LjE3LS4wNy4zMy4yMzkuNDEzLjU0Ljc4Ny44OSAxLjExLjM4LjM0LjgxNi42MTIgMS4yOS44LjE2LjA4LjI1LjA2LjM0IDAgLjA5LS4wNi40LS40Ny41MS0uNjMuMTEtLjE2LjIxLS4xNC4zNi0uMDguMTUuMDYuOTQuNDQgMS4xLjUyLjE2LjA4LjI2LjEyLjMuMTlhMS4zNiAxLjM2IDAgMDEtLjAzLjczaC4wM3oiLz48cGF0aCBkPSJNMjEgNy4wOWE4LjI2IDguMjYgMCAwMC0uMDktMS4xNSAzLjQ5IDMuNDkgMCAwMC0xLjg1LTIuNTEgMy44OSAzLjg5IDAgMDAtMS0uMzJBOC4zNiA4LjM2IDAgMDAxNi45MSAzSDcuMDlhOC4yNiA4LjI2IDAgMDAtMS4xNS4wOUEzLjQ5IDMuNDkgMCAwMDMuNDMgNWEzLjg5IDMuODkgMCAwMC0uMzIgMUE4LjM2IDguMzYgMCAwMDMgNy4wOXY5LjgyYy4wMDMuMzg1LjAzMy43Ny4wOSAxLjE1QTMuNDkgMy40OSAwIDAwNSAyMC41N2EzLjg5IDMuODkgMCAwMDEgLjMyYy4zODQuMDYuNzcxLjA5NCAxLjE2LjFoOS44MmE4LjI2IDguMjYgMCAwMDEuMTUtLjA5IDMuNDkgMy40OSAwIDAwMi41MS0xLjg1IDMuODkgMy44OSAwIDAwLjMyLTEgOC4zNiA4LjM2IDAgMDAuMS0xLjE2VjcuNTdjLS4wNi0uMS0uMDYtLjMxLS4wNi0uNDh6bS04LjggMTEuMTdhNi4zOSA2LjM5IDAgMDEtMy4wNi0uNzhsLTMuNDEuODkuOTItMy4zMmE2LjMzIDYuMzMgMCAwMS0uODYtMy4yMSA2LjQxIDYuNDEgMCAwMTExLTQuNTMgNi4zMyA2LjMzIDAgMDExLjg4IDQuNTQgNi40MiA2LjQyIDAgMDEtNi40NyA2LjQxeiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtd2lmaSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjIgMTloLTFjMC04LjgtNy4yLTE2LTE2LTE2VjJjOS40IDAgMTcgNy42IDE3IDE3eiIvPjxwYXRoIGQ9Ik01IDd2MWM2LjEgMCAxMSA0LjkgMTEgMTFoMWMwLTYuNi01LjQtMTItMTItMTJ6TTUgMTJ2MWMzLjMgMCA2IDIuNyA2IDZoMWMwLTMuOS0zLjEtNy03LTd6TTUgMTdjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0yem0wIDNjLS42IDAtMS0uNC0xLTFzLjQtMSAxLTEgMSAuNCAxIDEtLjQgMS0xIDF6Ii8+PGc+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvZz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXlvdXR1YmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjxwYXRoIGQ9Ik0yMS41NiA3LjJhMi41IDIuNSAwIDAwLTEuNzYtMS43N0MxOC4yNCA1IDEyIDUgMTIgNXMtNi4yNCAwLTcuOC40MkEyLjUgMi41IDAgMDAyLjQ0IDcuMiAyNS43MiAyNS43MiAwIDAwMiAxMmMtLjAxIDEuNjEuMTMgMy4yMTcuNDIgNC44YTIuNSAyLjUgMCAwMDEuNzggMS43N0M1Ljc2IDE5IDEyIDE5IDEyIDE5czYuMjQgMCA3LjgtLjQyYTIuNSAyLjUgMCAwMDEuNzYtMS43N0EyNS43MiAyNS43MiAwIDAwMjIgMTJhMjUuNzIgMjUuNzIgMCAwMC0uNDQtNC44ek0xMCAxNVY5bDUuMTkgM0wxMCAxNXoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXpvb20taW4iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwLjQgOS41aDMuM3YxaC0zLjN2My4yaC0xdi0zLjJINi4ydi0xaDMuMlY2LjJoMXptMTAuNyAxMi40TDE1LjMgMTZhOC4zIDguMyAwIDAxLTUuMyAyIDggOCAwIDExOC04IDguMyA4LjMgMCAwMS0yIDUuM2w1LjkgNS44ek0xNyAxMGE3IDcgMCAxMC03IDcgNyA3IDAgMDA3LTd6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtem9vbS1vdXQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYuMiA5LjVoNy41djFINi4yem0xNC45IDEyLjRMMTUuMyAxNmE4LjMgOC4zIDAgMDEtNS4zIDIgOCA4IDAgMTE4LTggOC4zIDguMyAwIDAxLTIgNS4zbDUuOSA1Ljh6TTE3IDEwYTcgNyAwIDEwLTcgNyA3IDcgMCAwMDctN3oiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PC9kZWZzPjwvc3ZnPg==';

var propTypes$i = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.string,
  padding: PropTypes.bool
};
var defaultProps$h = {
  color: '',
  size: '',
  icon: '',
  padding: false
};

var Icon = function Icon(_ref) {
  var _classNames;

  var color = _ref.color,
      size = _ref.size,
      icon = _ref.icon,
      className = _ref.className,
      padding = _ref.padding,
      attributes = _objectWithoutPropertiesLoose(_ref, ["color", "size", "icon", "className", "padding"]);

  var classes = classnames('icon', className, (_classNames = {}, _classNames["icon-" + color] = color, _classNames["icon-" + size] = size, _classNames['icon-padded'] = padding, _classNames), size);
  return React.createElement("svg", _extends({
    className: classes
  }, attributes), React.createElement("use", {
    xlinkHref: iconSprite + "#" + icon
  }));
};

Icon.propTypes = propTypes$i;
Icon.defaultProps = defaultProps$h;

var propTypes$j = {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

  /** Classi aggiuntive da usare per il componente HeaderBrand */
  className: PropTypes.string,

  /** Da usare per la sovrascrittura di classi predefinite */
  cssModule: PropTypes.object,

  /** Da usare con il componente Header Nav in versione "responsive" */
  responsive: PropTypes.bool,

  /** Da utilizzare per specificare URL risorsa esterna. */
  href: PropTypes.string,

  /** Icona da utilizzare nel componente. Utilizzata unicamente quando l'Header è di tipo Center.  */
  iconName: PropTypes.string,

  /** Elementi React da renderizzare al proprio interno. */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
var defaultProps$i = {
  tag: 'a',
  responsive: false
};

var HeaderBrand =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(HeaderBrand, _PureComponent);

  function HeaderBrand() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = HeaderBrand.prototype;

  _proto.addChildClasses = function addChildClasses(child, i) {
    // convention here: first item is the main title, while others subtext
    var className = classnames(child.props.className, 'no_toc', {
      'd-none d-md-block': i
    } // subtext is anything but first element
    );
    var props = {
      className: className
    };
    return React.cloneElement(child, props);
  };

  _proto.render = function render() {
    var _this = this;

    var _this$props = this.props,
        className = _this$props.className,
        href = _this$props.href,
        iconName = _this$props.iconName,
        children = _this$props.children,
        responsive = _this$props.responsive,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "href", "iconName", "children", "responsive"]);

    var type = this.context.type;

    if (type !== CENTER) {
      var classes = classnames('d-lg-block', className, {
        'd-none': !responsive
      });
      return React.createElement(NavbarBrand, _extends({
        className: classes,
        href: href
      }, attributes), children);
    }

    return React.createElement("div", {
      className: "it-brand-wrapper"
    }, React.createElement("a", {
      href: href
    }, iconName && React.createElement(Icon, {
      icon: iconName
    }), React.createElement("div", {
      className: "it-brand-text"
    }, React.Children.map(children, function (child, i) {
      return _this.addChildClasses(child, i);
    }))));
  };

  return HeaderBrand;
}(PureComponent);

_defineProperty(HeaderBrand, "propTypes", propTypes$j);

_defineProperty(HeaderBrand, "defaultProps", defaultProps$i);

_defineProperty(HeaderBrand, "contextType", HeaderContext);

var propTypes$k = {
  /** Classi addizionali per il componente HeaderContent */
  className: PropTypes.string,

  /** Da utilizzare per indicare che all'interno dell'Header verrà utilizzato un Megamenu */
  megamenu: PropTypes.bool,

  /** Parametro per il controllo responsive del componente: valori Bootstrap standard sono "sm", "md", "lg", "xl" */
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
};
var defaultProps$j = {};

var HeaderContent =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(HeaderContent, _PureComponent);

  function HeaderContent() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = HeaderContent.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        megamenu = _this$props.megamenu,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "megamenu"]);

    var type = this.context.type;
    var classes = classnames(className, {
      'it-header-slim-wrapper-content': type === SLIM,
      'it-header-center-content-wrapper': type === CENTER,
      navbar: type === NAVBAR,
      'has-megamenu': megamenu
    });
    var Content = type === NAVBAR ? React.createElement(Navbar, _extends({
      className: classes
    }, attributes)) : React.createElement("div", _extends({
      className: classes
    }, attributes));
    return React.createElement("div", {
      className: "container"
    }, React.createElement("div", {
      className: "row"
    }, React.createElement("div", {
      className: "col-12"
    }, Content)));
  };

  return HeaderContent;
}(PureComponent);

_defineProperty(HeaderContent, "propTypes", propTypes$k);

_defineProperty(HeaderContent, "defaultProps", defaultProps$j);

_defineProperty(HeaderContent, "contextType", HeaderContext);

var propTypes$l = {
  /** Classi addizionali per il componente HeaderLinkZone, applicata all'element "nav" annidato */
  className: PropTypes.string
};
var defaultProps$k = {};

var HeaderLinkZone = function HeaderLinkZone(_ref) {
  var className = _ref.className,
      attributes = _objectWithoutPropertiesLoose(_ref, ["className"]);

  var classes = classnames(className);
  return React.createElement("div", {
    className: "nav-mobile"
  }, React.createElement("nav", _extends({
    className: classes
  }, attributes)));
};

HeaderLinkZone.propTypes = propTypes$l;
HeaderLinkZone.defaultProps = defaultProps$k;

var propTypes$m = {
  /** Classi addizionali per il componente HeaderRightZone */
  className: PropTypes.string
};
var defaultProps$l = {};

var HeaderRightZone =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(HeaderRightZone, _PureComponent);

  function HeaderRightZone() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = HeaderRightZone.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["className"]);

    var type = this.context.type;
    var classes = classnames(className, {
      // BI >= 1.3.6
      'it-header-slim-right-zone': type === SLIM,
      // BI < 1.3.6
      'header-slim-right-zone': type === SLIM,
      'it-right-zone': type !== SLIM
    });
    return React.createElement("div", _extends({
      className: classes
    }, attributes));
  };

  return HeaderRightZone;
}(PureComponent);

_defineProperty(HeaderRightZone, "propTypes", propTypes$m);

_defineProperty(HeaderRightZone, "defaultProps", defaultProps$l);

_defineProperty(HeaderRightZone, "contextType", HeaderContext);

var propTypes$n = {
  /** Classi addizionali per il componente HeaderSearch */
  className: PropTypes.string,

  /** Etichetta di testo da applicare all'elemento. In caso di stringa vuota non verrà mostrato alcun testo */
  label: PropTypes.string,

  /** Nome dell'icona da utilizzare */
  iconName: PropTypes.string,

  /** Indirizzo di indirizzamento al click dell'icona */
  href: PropTypes.string
};
var defaultProps$m = {
  iconName: 'it-search'
};

var HeaderSearch = function HeaderSearch(_ref) {
  var className = _ref.className,
      label = _ref.label,
      href = _ref.href,
      iconName = _ref.iconName,
      attributes = _objectWithoutPropertiesLoose(_ref, ["className", "label", "href", "iconName"]);

  var classes = classnames('it-search-wrapper', className);
  return React.createElement("div", _extends({
    className: classes
  }, attributes), label && React.createElement("span", {
    className: "d-none d-md-block"
  }, label), React.createElement("a", {
    className: "search-link rounded-icon",
    "aria-label": label,
    href: href
  }, React.createElement(Icon, {
    icon: iconName
  })));
};

HeaderSearch.propTypes = propTypes$n;
HeaderSearch.defaultProps = defaultProps$m;

var propTypes$o = {
  /** Classi addizionali per il componente HeaderSocialsZone, verrà applicato all'elemento wrapper più esterno. */
  className: PropTypes.string,

  /** Etichetta utilizzata per presentare i social presenti. In caso di stringa vuota non verrà mostrata alcuna etichetta */
  label: PropTypes.string,

  /** Utilizzato per elencare i social da mostrare */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
var defaultProps$n = {};

var HeaderSocialsZone = function HeaderSocialsZone(_ref) {
  var className = _ref.className,
      children = _ref.children,
      label = _ref.label,
      attributes = _objectWithoutPropertiesLoose(_ref, ["className", "children", "label"]);

  var classes = classnames('it-socials d-none d-md-flex', className);
  return React.createElement("div", _extends({
    className: classes
  }, attributes), label && React.createElement("span", null, label), children);
};

HeaderSocialsZone.propTypes = propTypes$o;
HeaderSocialsZone.defaultProps = defaultProps$n;

var propTypes$p = {
  /** Tipo di elemento DOM da utilizzare: di default "a" per Header Slim, "button" per altri tipi di Header.
   * Se fornito questo sovrascriverà il valore di default.
   */
  tag: PropTypes.string,

  /** Indica l'attributo "type" sull'elemento DOM. Di default '' per Header Slim, "button" per altri tipi di Header.
   * Se fornito questo sovrascriverà il valore di default.
   */
  type: PropTypes.string,

  /** Classi addizionali per il componente HeaderToggler */
  className: PropTypes.string
};
var defaultProps$o = {};

var HeaderToggler =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(HeaderToggler, _PureComponent);

  function HeaderToggler() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = HeaderToggler.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        tag = _this$props.tag,
        type = _this$props.type,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "tag", "type"]);

    var HeaderType = this.context.type;
    var BUTTON = 'button';
    var defaultTag = HeaderType === SLIM ? 'a' : BUTTON;
    var defaultType = HeaderType === SLIM ? '' : BUTTON;
    var classes = classnames({
      'it-opener d-lg-none': HeaderType === SLIM,
      'custom-navbar-toggler': HeaderType === NAVBAR
    }, className);
    return React.createElement(NavbarToggler, _extends({
      className: classes
    }, attributes, {
      tag: tag || defaultTag,
      type: type || defaultType,
      href: "#"
    }));
  };

  return HeaderToggler;
}(PureComponent);

_defineProperty(HeaderToggler, "propTypes", propTypes$p);

_defineProperty(HeaderToggler, "defaultProps", defaultProps$o);

_defineProperty(HeaderToggler, "contextType", HeaderContext);

function Hero(props) {
  return React.createElement(Jumbotron, props);
}
Hero.defaultProps = Jumbotron.defaultProps;
Hero.propTypes = Jumbotron.propTypes;

var mapToCssModules = Util.mapToCssModules,
    deprecated = Util.deprecated,
    warnOnce = Util.warnOnce;
var propTypes$q = {
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
var defaultProps$p = {
  type: 'text'
};

var Input =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Input, _React$Component);

  function Input() {
    var _this;

    _this = _React$Component.call(this) || this;

    _defineProperty(_assertThisInitialized(_this), "toggleFocusLabel", function () {
      _this.setState({
        isFocused: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggleBlurLabel", function (e) {
      if (e.target.value === '') {
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
    _this.toggleShow = _this.toggleShow.bind(_assertThisInitialized(_this));
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
    var checkInput = ['radio', 'checkbox'].indexOf(type) > -1;
    var isNotaNumber = new RegExp('\\D', 'g');
    var fileInput = type === 'file';
    var textareaInput = type === 'textarea';
    var selectInput = type === 'select';
    var Tag = tag || (selectInput || textareaInput ? type : 'input');
    var formControlClass = 'form-control';
    var infoTextControlClass = 'form-text text-muted';

    if (plaintext || staticInput) {
      formControlClass = formControlClass + "-plaintext";
      Tag = tag || 'p';
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

    if (state && typeof valid === 'undefined' && typeof invalid === 'undefined') {
      if (state === 'danger') {
        invalid = true;
      } else if (state === 'success') {
        valid = true;
      }
    }

    if (attributes.size && isNotaNumber.test(attributes.size)) {
      warnOnce('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.');
      bsSize = attributes.size;
      delete attributes.size;
    }

    var classes = mapToCssModules(classnames(className, invalid && 'is-invalid', valid && 'is-valid', bsSize ? "form-control-" + bsSize : false, formControlClass), cssModule);
    var wrapperClass = mapToCssModules(classnames(className, 'form-group'), cssModule);
    var infoTextClass = mapToCssModules(classnames(className, valid ? 'valid-feedback' : false, invalid ? 'invalid-feedback' : false, infoTextControlClass));

    if (Tag === 'input' || typeof tag !== 'string') {
      attributes.type = type;
    }

    if (attributes.children && !(plaintext || staticInput || type === 'select' || typeof Tag !== 'string' || Tag === 'select')) {
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

    if (attributes.type === 'password') {
      return React.createElement("div", {
        className: wrapperClass
      }, React.createElement(Tag, _extends({}, attributes, {
        ref: innerRef,
        type: this.state.hidden ? 'password' : 'text',
        className: this.state.isFocused ? 'form-control input-password focus--mouse' : 'form-control input-password',
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
        xlinkHref: "/svg/sprite.svg#it-password-" + (this.state.icon ? 'visible' : 'invisible')
      }))), React.createElement("label", {
        htmlFor: this.props.id,
        className: this.state.isFocused ? 'active' : ''
      }, this.props.label), React.createElement("small", {
        className: infoTextClass
      }, this.props.infoText));
    }

    if (normalized) {
      return React.createElement("div", {
        className: wrapperClass
      }, React.createElement(Tag, _extends({}, attributes, {
        className: this.state.isFocused ? 'form-control-plaintext focus--mouse' : 'form-control-plaintext',
        onFocus: this.toggleFocusLabel,
        onBlur: function onBlur(e) {
          return _this2.toggleBlurLabel(e);
        },
        id: this.props.id,
        value: this.props.value,
        readOnly: true
      })), React.createElement("label", {
        htmlFor: this.props.id,
        className: this.state.isFocused ? 'active' : ''
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
        className: this.state.isFocused ? 'active' : ''
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

Input.propTypes = propTypes$q;
Input.defaultProps = defaultProps$p;

var propTypes$r = {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

  /** Da utilizzare in caso di titolo principale della lista. Passare una componente React da mostrare come titolo */
  header: PropTypes.node,

  /** Classi aggiuntive da usare per il componente lista del LinkList */
  className: PropTypes.string,

  /** Classi aggiuntive da usare per il componente wrapper del LinkList */
  wrapperClassName: PropTypes.string,

  /** Quando è abilitato gestisce una lista in cui ciascun elemento è composto da più componenti/elementi. */
  multiline: PropTypes.bool,
  sublist: PropTypes.bool,
  avatar: PropTypes.bool
};
var defaultProps$q = {
  tag: 'div'
};

var LinkList = function LinkList(props) {
  var className = props.className,
      wrapperClassName = props.wrapperClassName,
      Tag = props.tag,
      multiline = props.multiline,
      header = props.header,
      sublist = props.sublist,
      avatar = props.avatar,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "wrapperClassName", "tag", "multiline", "header", "sublist", "avatar"]);

  var wrapperClasses = classnames(multiline ? 'multiline' : false, 'link-list-wrapper', wrapperClassName);
  var classes = classnames(className, sublist ? 'link-sublist' : 'link-list', avatar && 'avatar-group');

  if (sublist) {
    return React.createElement(React.Fragment, null, header, React.createElement("ul", _extends({}, attributes, {
      className: classes
    })));
  }

  return React.createElement(Tag, {
    className: wrapperClasses
  }, header, React.createElement("ul", _extends({}, attributes, {
    className: classes
  })));
};

LinkList.propTypes = propTypes$r;
LinkList.defaultProps = defaultProps$q;

var propTypes$s = {
  /** Indica se l'elemento è attivo o no */
  active: PropTypes.bool,

  /** Indica se l'elemento è disabilitato o no */
  disabled: PropTypes.bool,

  /** Indica se l'elemento è un titolo. */
  header: PropTypes.bool,

  /** Indica se l'elemento è un divisore */
  divider: PropTypes.bool,

  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

  /** Classi aggiuntive da usare per il componente LinkListItem */
  className: PropTypes.any,

  /** Indica il link a cui l'elemento deve puntare. */
  href: PropTypes.string,

  /** Indica la taglia/grandezza dell'elemento */
  size: PropTypes.string
};
var defaultProps$r = {
  tag: 'a'
};

var handleDisabledOnClick = function handleDisabledOnClick(e) {
  e.preventDefault();
};

var LinkListItem = function LinkListItem(_ref) {
  var className = _ref.className,
      active = _ref.active,
      disabled = _ref.disabled,
      header = _ref.header,
      divider = _ref.divider,
      href = _ref.href,
      size = _ref.size,
      Tag = _ref.tag,
      attributes = _objectWithoutPropertiesLoose(_ref, ["className", "active", "disabled", "header", "divider", "href", "size", "tag"]);

  var classes = classnames(className, {
    active: active,
    disabled: disabled,
    header: header,
    divider: divider,
    size: size
  }, 'list-item'); // Prevent click event when disabled.

  if (disabled) {
    attributes.onClick = handleDisabledOnClick;
  }

  if (header) {
    Tag = 'h3';
  } else if (divider) {
    Tag = 'span';
  }

  if (header && href) {
    return React.createElement("li", null, React.createElement(Tag, null, React.createElement("a", _extends({
      href: href || '#'
    }, attributes, {
      className: classes
    }))));
  }

  attributes.href = href;
  return React.createElement("li", null, React.createElement(Tag, _extends({}, attributes, {
    className: classes
  })));
};

LinkListItem.propTypes = propTypes$s;
LinkListItem.defaultProps = defaultProps$r;

var propTypes$t = {
  /** Renderizza i componenti NavItem al suo interno come tab. */
  tabs: PropTypes.bool,

  /** Renderizza i componenti NavItem al suo interno come pills. */
  pills: PropTypes.bool,

  /** Renderizza i componenti NavItem al suo interno come tab. */
  card: PropTypes.bool,

  /** Se abilitato tutti i NavItem all'interno avranno la stessa larghezza */
  justified: PropTypes.bool,

  /** Se abilitato i NavItem all'intero occuperanno tutto lo spazio disponibile  */
  fill: PropTypes.bool,

  /** Da utilizzare per rendere il componente Nav verticale. Viene abilitato automaticamente in versione mobile. Valori possibili sono `true`, `false` o `"xs"` */
  vertical: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

  /** Da utilizzare per cambiare l'allineamento all'interno della Nav. Valori possibili sono `"center"` o `"end"` per posizionare il contenuto a centro o sulla destra. */
  horizontal: PropTypes.string,

  /** Se utilizzata all'interno di una navbar, impostarlo su `true`. In caso di Header Nav, impostarlo a `true` insieme a inHeader. */
  navbar: PropTypes.bool,

  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
var defaultProps$s = {
  tag: 'ul',
  vertical: false
};

var Nav = function Nav(_ref) {
  var attributes = _extends({}, _ref);

  return React.createElement(Nav$1, attributes);
};

Nav.propTypes = propTypes$t;
Nav.defaultProps = defaultProps$s;

var propTypes$u = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  'aria-label': PropTypes.string
};
var defaultProps$t = {
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

Pager.propTypes = propTypes$u;
Pager.defaultProps = defaultProps$t;

var propTypes$v = {
  className: PropTypes.string,
  size: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
var defaultProps$u = {
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

PagerList.propTypes = propTypes$v;
PagerList.defaultProps = defaultProps$u;

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

    _defineProperty(_assertThisInitialized(_this), "state", {
      showPassword: false
    });

    _defineProperty(_assertThisInitialized(_this), "onPasswordToggle", function () {
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

_defineProperty(PasswordInput, "defaultProps", {
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

_defineProperty(PasswordMeter, "defaultProps", {
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

var propTypes$w = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};
var defaultProps$v = {
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

Skiplink.propTypes = propTypes$w;
Skiplink.defaultProps = defaultProps$v;

var propTypes$x = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};
var defaultProps$w = {
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

SkiplinkItem.propTypes = propTypes$x;
SkiplinkItem.defaultProps = defaultProps$w;

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

var propTypes$y = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  secondary: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool,
  dark: PropTypes.bool
};
var defaultProps$x = {
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

Sidebar.propTypes = propTypes$y;
Sidebar.defaultProps = defaultProps$x;

var propTypes$z = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  value: PropTypes.number,
  label: PropTypes.string,
  indeterminate: PropTypes.bool,
  color: PropTypes.string
};
var defaultProps$y = {
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

Progress.propTypes = propTypes$z;
Progress.defaultProps = defaultProps$y;

var propTypes$A = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  active: PropTypes.bool,
  small: PropTypes.bool,
  "double": PropTypes.bool
};
var defaultProps$z = {
  tag: 'span',
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

Spinner.propTypes = propTypes$A;
Spinner.defaultProps = defaultProps$z;

var propTypes$B = _extends({}, Card$1.propTypes, {
  teaser: PropTypes.bool,
  spacing: PropTypes.bool,
  noWrapper: PropTypes.bool,
  wrapperClassName: PropTypes.string
});

var defaultProps$A = _extends({}, Card$1.defaultProps, {
  noWrapper: false
});

var Card = function Card(_ref) {
  var teaser = _ref.teaser,
      spacing = _ref.spacing,
      noWrapper = _ref.noWrapper,
      wrapperClassName = _ref.wrapperClassName,
      attributes = _objectWithoutPropertiesLoose(_ref, ["teaser", "spacing", "noWrapper", "wrapperClassName"]);

  var wrapperClasses = classnames('card-wrapper', wrapperClassName, {
    'card-space': spacing,
    'card-teaser-wrapper': teaser
  });
  var cardClasses = classnames(attributes.className, {
    'card-teaser': teaser
  });

  if (noWrapper) {
    return React.createElement(Card$1, _extends({}, attributes, {
      className: cardClasses
    }));
  }

  return React.createElement("div", {
    className: wrapperClasses
  }, React.createElement(Card$1, _extends({}, attributes, {
    className: cardClasses
  })));
};

Card.propTypes = propTypes$B;
Card.defaultProps = defaultProps$A;

var propTypes$C = {
  iconName: PropTypes.string,
  date: PropTypes.string,
  href: PropTypes.string
};

var CardCategory = function CardCategory(props) {
  var iconName = props.iconName,
      date = props.date,
      href = props.href,
      attributes = _objectWithoutPropertiesLoose(props, ["iconName", "date", "href"]);

  var children = attributes.children,
      rest = _objectWithoutPropertiesLoose(attributes, ["children"]);

  var classes = classnames({
    'category-top': !iconName,
    'categoryicon-top': iconName
  }); // Simple category link

  var categoryLink = !iconName && React.createElement("a", {
    href: href,
    className: "category"
  }, children);
  var categoryDate = !iconName && React.createElement("span", {
    className: "data"
  }, date); // Category with icon

  var categoryText = iconName && React.createElement("span", {
    className: "text"
  }, children);
  var categoryIcon = iconName && React.createElement(Icon, {
    icon: iconName
  });
  return React.createElement("div", _extends({
    className: classes
  }, rest), categoryLink, categoryDate, categoryIcon, categoryText);
};

CardCategory.propTypes = propTypes$C;

var propTypes$D = {
  tag: PropTypes.string,
  className: PropTypes.string
};
var defaultProps$B = {
  tag: 'a'
};

var CardTag = function CardTag(props) {
  var className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "tag"]);

  var classes = classnames(className, 'card-tag');
  return React.createElement(Tag, _extends({
    className: classes
  }, attributes));
};

CardTag.propTypes = propTypes$D;
CardTag.defaultProps = defaultProps$B;

var propTypes$E = {
  children: PropTypes.node,
  date: PropTypes.string
};

var CardTagsHeader = function CardTagsHeader(props) {
  var date = props.date,
      children = props.children,
      attributes = _objectWithoutPropertiesLoose(props, ["date", "children"]);

  return React.createElement("div", _extends({
    className: "head-tags"
  }, attributes), children, date && React.createElement("span", {
    className: "data"
  }, date));
};

CardTagsHeader.propTypes = propTypes$E;

var propTypes$F = {
  className: PropTypes.string
};

var CardSignature = function CardSignature(props) {
  var className = props.className,
      attributes = _objectWithoutPropertiesLoose(props, ["className"]);

  var classes = classnames(className, 'card-signature');
  return React.createElement("span", _extends({
    className: classes
  }, attributes));
};

CardSignature.propTypes = propTypes$F;

var propTypes$G = {
  className: PropTypes.string
};

var CardFooterCTA = function CardFooterCTA(props) {
  var className = props.className,
      attributes = _objectWithoutPropertiesLoose(props, ["className"]);

  var classes = classnames(className, 'it-card-footer');
  return React.createElement("div", _extends({
    className: classes
  }, attributes));
};

CardFooterCTA.propTypes = propTypes$G;

var propTypes$H = {
  className: PropTypes.string,
  iconName: PropTypes.string,
  href: PropTypes.string,
  text: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.shape({
    $$typeof: PropTypes.symbol,
    render: PropTypes.func
  }), PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.shape({
    $$typeof: PropTypes.symbol,
    render: PropTypes.func
  })]))])
};
var defaultProps$C = {
  tag: 'a',
  iconName: 'it-arrow-right'
};

var CardReadMore = function CardReadMore(props) {
  var className = props.className,
      text = props.text,
      iconName = props.iconName,
      Tag = props.tag,
      href = props.href,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "text", "iconName", "tag", "href"]);

  var classes = classnames(className, 'read-more');
  return React.createElement(Tag, _extends({
    className: classes,
    href: href
  }, attributes), React.createElement("span", {
    className: "text"
  }, text), iconName && React.createElement(Icon, {
    icon: iconName
  }));
};

CardReadMore.propTypes = propTypes$H;
CardReadMore.defaultProps = defaultProps$C;

var propTypes$I = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};
var defaultProps$D = {
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

BottomNav.propTypes = propTypes$I;
BottomNav.defaultProps = defaultProps$D;

var propTypes$J = {
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
var defaultProps$E = {
  tag: 'a',
  link: '#',
  iconName: 'it-comment',
  srText: false
};

var BottomNavItem = function BottomNavItem(_ref) {
  var active = _ref.active,
      badge = _ref.badge,
      alert = _ref.alert,
      link = _ref.link,
      srText = _ref.srText,
      iconName = _ref.iconName,
      label = _ref.label,
      Tag = _ref.tag,
      attributes = _objectWithoutPropertiesLoose(_ref, ["active", "badge", "alert", "link", "srText", "iconName", "label", "tag"]);

  var activeClass = classnames(active ? 'active' : false);
  var badgeWrapper = badge ? React.createElement("div", {
    className: "badge-wrapper"
  }, React.createElement("span", {
    className: "bottom-nav-badge"
  }, badge)) : false;
  var alertWrapper = alert ? React.createElement("div", {
    className: "badge-wrapper"
  }, React.createElement("span", {
    className: "bottom-nav-alert"
  })) : false;
  return React.createElement("li", attributes, React.createElement(Tag, {
    href: link,
    className: activeClass
  }, badgeWrapper, alertWrapper, React.createElement(Icon, {
    icon: iconName
  }), React.createElement("span", {
    className: "bottom-nav-label"
  }, label, React.createElement("span", {
    className: "sr-only"
  }, srText))));
};

BottomNavItem.propTypes = propTypes$J;
BottomNavItem.defaultProps = defaultProps$E;

var propTypes$K = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};
var defaultProps$F = {
  tag: 'div'
};

function CookieBar(props) {
  var className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "tag"]);

  var wrapperClasses = classnames('cookiebar show', className);
  return React.createElement(Tag, _extends({}, attributes, {
    className: wrapperClasses
  }));
}

CookieBar.propTypes = propTypes$K;
CookieBar.defaultProps = defaultProps$F;

var propTypes$L = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};
var defaultProps$G = {
  tag: 'div'
};

var CookieBarButtons = function CookieBarButtons(props) {
  var className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "tag"]);

  var buttonClasses = classnames(className, 'cookiebar-buttons');
  return React.createElement(Tag, _extends({
    className: buttonClasses
  }, attributes));
};

CookieBarButtons.propTypes = propTypes$L;
CookieBarButtons.defaultProps = defaultProps$G;

var propTypes$M = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};
var defaultProps$H = {
  tag: 'button'
};

var CookieBarButton =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(CookieBarButton, _React$Component);

  function CookieBarButton() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = CookieBarButton.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Tag = _this$props.tag,
        className = _this$props.className,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["tag", "className"]);

    var activeClass = classnames(className, 'cookiebar-btn');
    return React.createElement(Tag, _extends({
      href: true,
      className: activeClass
    }, attributes));
  };

  return CookieBarButton;
}(React.Component);

CookieBarButton.propTypes = propTypes$M;
CookieBarButton.defaultProps = defaultProps$H;

var propTypes$N = {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

  /** Classi aggiuntive da usare per il componente Chip */
  className: PropTypes.string,

  /** Impostarlo su `true` per centrare la label all'interno */
  simple: PropTypes.bool,

  /** Impostarlo su `true` per una versione più grande del componente Chip. */
  large: PropTypes.bool,

  /** Impostarlo su `true` per renderizzare il componente Chip come disabilitato */
  disabled: PropTypes.bool,
  color: PropTypes.string
};
var defaultProps$I = {
  tag: 'div',
  simple: false,
  large: false,
  disabled: false,
  color: ''
};

var Chip = function Chip(props) {
  var _classNames;

  var className = props.className,
      color = props.color,
      Tag = props.tag,
      simple = props.simple,
      large = props.large,
      disabled = props.disabled,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "color", "tag", "simple", "large", "disabled"]);

  var classes = classnames('chip', className, (_classNames = {
    'chip-simple': simple,
    'chip-lg': large,
    'chip-disabled': disabled
  }, _classNames["chip-" + color] = color, _classNames));
  return React.createElement(Tag, _extends({
    className: classes
  }, attributes));
};

Chip.propTypes = propTypes$N;
Chip.defaultProps = defaultProps$I;

var propTypes$O = {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

  /** Classi aggiuntive da usare per il componente ChipLabel */
  className: PropTypes.string
};
var defaultProps$J = {
  tag: 'span'
};

var ChipLabel = function ChipLabel(props) {
  var className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "tag"]);

  var classes = classnames(className, 'chip-label');
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

ChipLabel.propTypes = propTypes$O;
ChipLabel.defaultProps = defaultProps$J;

var ToolkitFontLoader =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(ToolkitFontLoader, _Component);

  function ToolkitFontLoader() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ToolkitFontLoader.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (typeof window !== 'undefined') {
      var WebFont = require('webfontloader');

      WebFont.load({
        custom: {
          families: ['Titillium Web:300,400,600,700:latin-ext', 'Lora:400,700:latin-ext', 'Roboto Mono:400,700:latin-ext']
        }
      });
    }
  };

  _proto.render = function render() {
    return null;
  };

  return ToolkitFontLoader;
}(Component);

var propTypes$P = {
  icon: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string
};

var Dimmer = function Dimmer(props) {
  var _classNames;

  var icon = props.icon,
      color = props.color,
      className = props.className,
      attributes = _objectWithoutPropertiesLoose(props, ["icon", "color", "className"]);

  var children = attributes.children,
      rest = _objectWithoutPropertiesLoose(attributes, ["children"]);

  var classes = classnames('dimmer', className, (_classNames = {}, _classNames["dimmer-" + color] = color, _classNames));
  var innerClasses = classnames('dimmer-inner', className);
  var dimmerIcon = icon && React.createElement("div", {
    className: "dimmer-icon"
  }, React.createElement(Icon, {
    icon: icon
  }));
  return React.createElement("div", _extends({
    className: classes
  }, rest, {
    style: {
      display: 'flex'
    }
  }), React.createElement("div", _extends({
    className: innerClasses
  }, rest), dimmerIcon, children));
};

Dimmer.propTypes = propTypes$P;

var propTypes$Q = {
  color: PropTypes.string,
  dark: PropTypes.string,
  single: PropTypes.string,
  className: PropTypes.string
};
var defaultProps$K = {
  single: false,
  dark: false
};

var DimmerButtons = function DimmerButtons(props) {
  var color = props.color,
      dark = props.dark,
      className = props.className,
      single = props.single,
      attributes = _objectWithoutPropertiesLoose(props, ["color", "dark", "className", "single"]);

  var children = attributes.children,
      rest = _objectWithoutPropertiesLoose(attributes, ["children"]);

  var classes = classnames('dimmer-buttons', className, {
    'single-button': single,
    'bg-dark': dark
  });
  return React.createElement("div", _extends({
    className: classes
  }, rest), children);
};

DimmerButtons.propTypes = propTypes$Q;
DimmerButtons.defaultProps = defaultProps$K;

export { Accordion, AccordionBody, AccordionHeader, AvatarContainer, AvatarExtraText, AvatarGroupContainer, AvatarIcon, AvatarPresence, AvatarStatus, AvatarWrapper, Badge, BottomNav, BottomNavItem, Button, Callout, CalloutText, CalloutTitle, Card, CardCategory, CardFooterCTA, CardReadMore, CardSignature, CardTag, CardTagsHeader, Chip, ChipLabel, Collapse, CookieBar, CookieBarButton, CookieBarButtons, Dimmer, DimmerButtons, ToolkitFontLoader as FontLoader, FormGroup, Header, HeaderBrand, HeaderContent, HeaderLinkZone, HeaderRightZone, HeaderSearch, HeaderSocialsZone, HeaderToggler, Headers, Hero, Icon, Input, LinkList, LinkListItem, Nav, Pager, PagerList, PasswordInput, PasswordMeter, Progress, Sidebar, Skiplink, SkiplinkItem, Spinner, Toggle };
//# sourceMappingURL=design-react-kit.es.js.map
