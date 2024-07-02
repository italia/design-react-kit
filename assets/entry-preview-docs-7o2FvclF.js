import { u as utils, b as _baseGetTag, c as _getPrototype, d as isObjectLike_1, e as isArray_1, f as extractComponentDescription, g as enhanceArgTypes, S as SNIPPET_RENDERED, h as createSummaryValue, j as SourceType, k as isFunction, l as hasDocgen, m as extractComponentProps, T as TypeSystem, n as getDocgenSection, o as isTooLongForDefaultValueSummary, p as isTooLongForTypeSummary } from "./index-CX88d7aO.js";
import { P as PropTypes } from "./index-C6XlOQIa.js";
import { g as getDefaultExportFromCjs, c as commonjsGlobal, a as getAugmentedNamespace } from "./_commonjsHelpers-CcAunmGO.js";
import { d as dedent } from "./index-BdOSk9or.js";
import { R as React, r as reactExports } from "./index-C-_iGYWo.js";
const require$$0 = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "math",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "search",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
];
var htmlTags = require$$0;
const htmlTags$1 = /* @__PURE__ */ getDefaultExportFromCjs(htmlTags);
var escodegen = {};
var estraverse = {};
(function(exports) {
  (function clone(exports2) {
    var Syntax, VisitorOption, VisitorKeys, BREAK, SKIP, REMOVE;
    function deepCopy(obj) {
      var ret = {}, key, val;
      for (key in obj) {
        if (obj.hasOwnProperty(key)) {
          val = obj[key];
          if (typeof val === "object" && val !== null) {
            ret[key] = deepCopy(val);
          } else {
            ret[key] = val;
          }
        }
      }
      return ret;
    }
    function upperBound(array, func) {
      var diff, len, i, current2;
      len = array.length;
      i = 0;
      while (len) {
        diff = len >>> 1;
        current2 = i + diff;
        if (func(array[current2])) {
          len = diff;
        } else {
          i = current2 + 1;
          len -= diff + 1;
        }
      }
      return i;
    }
    Syntax = {
      AssignmentExpression: "AssignmentExpression",
      AssignmentPattern: "AssignmentPattern",
      ArrayExpression: "ArrayExpression",
      ArrayPattern: "ArrayPattern",
      ArrowFunctionExpression: "ArrowFunctionExpression",
      AwaitExpression: "AwaitExpression",
      // CAUTION: It's deferred to ES7.
      BlockStatement: "BlockStatement",
      BinaryExpression: "BinaryExpression",
      BreakStatement: "BreakStatement",
      CallExpression: "CallExpression",
      CatchClause: "CatchClause",
      ChainExpression: "ChainExpression",
      ClassBody: "ClassBody",
      ClassDeclaration: "ClassDeclaration",
      ClassExpression: "ClassExpression",
      ComprehensionBlock: "ComprehensionBlock",
      // CAUTION: It's deferred to ES7.
      ComprehensionExpression: "ComprehensionExpression",
      // CAUTION: It's deferred to ES7.
      ConditionalExpression: "ConditionalExpression",
      ContinueStatement: "ContinueStatement",
      DebuggerStatement: "DebuggerStatement",
      DirectiveStatement: "DirectiveStatement",
      DoWhileStatement: "DoWhileStatement",
      EmptyStatement: "EmptyStatement",
      ExportAllDeclaration: "ExportAllDeclaration",
      ExportDefaultDeclaration: "ExportDefaultDeclaration",
      ExportNamedDeclaration: "ExportNamedDeclaration",
      ExportSpecifier: "ExportSpecifier",
      ExpressionStatement: "ExpressionStatement",
      ForStatement: "ForStatement",
      ForInStatement: "ForInStatement",
      ForOfStatement: "ForOfStatement",
      FunctionDeclaration: "FunctionDeclaration",
      FunctionExpression: "FunctionExpression",
      GeneratorExpression: "GeneratorExpression",
      // CAUTION: It's deferred to ES7.
      Identifier: "Identifier",
      IfStatement: "IfStatement",
      ImportExpression: "ImportExpression",
      ImportDeclaration: "ImportDeclaration",
      ImportDefaultSpecifier: "ImportDefaultSpecifier",
      ImportNamespaceSpecifier: "ImportNamespaceSpecifier",
      ImportSpecifier: "ImportSpecifier",
      Literal: "Literal",
      LabeledStatement: "LabeledStatement",
      LogicalExpression: "LogicalExpression",
      MemberExpression: "MemberExpression",
      MetaProperty: "MetaProperty",
      MethodDefinition: "MethodDefinition",
      ModuleSpecifier: "ModuleSpecifier",
      NewExpression: "NewExpression",
      ObjectExpression: "ObjectExpression",
      ObjectPattern: "ObjectPattern",
      PrivateIdentifier: "PrivateIdentifier",
      Program: "Program",
      Property: "Property",
      PropertyDefinition: "PropertyDefinition",
      RestElement: "RestElement",
      ReturnStatement: "ReturnStatement",
      SequenceExpression: "SequenceExpression",
      SpreadElement: "SpreadElement",
      Super: "Super",
      SwitchStatement: "SwitchStatement",
      SwitchCase: "SwitchCase",
      TaggedTemplateExpression: "TaggedTemplateExpression",
      TemplateElement: "TemplateElement",
      TemplateLiteral: "TemplateLiteral",
      ThisExpression: "ThisExpression",
      ThrowStatement: "ThrowStatement",
      TryStatement: "TryStatement",
      UnaryExpression: "UnaryExpression",
      UpdateExpression: "UpdateExpression",
      VariableDeclaration: "VariableDeclaration",
      VariableDeclarator: "VariableDeclarator",
      WhileStatement: "WhileStatement",
      WithStatement: "WithStatement",
      YieldExpression: "YieldExpression"
    };
    VisitorKeys = {
      AssignmentExpression: ["left", "right"],
      AssignmentPattern: ["left", "right"],
      ArrayExpression: ["elements"],
      ArrayPattern: ["elements"],
      ArrowFunctionExpression: ["params", "body"],
      AwaitExpression: ["argument"],
      // CAUTION: It's deferred to ES7.
      BlockStatement: ["body"],
      BinaryExpression: ["left", "right"],
      BreakStatement: ["label"],
      CallExpression: ["callee", "arguments"],
      CatchClause: ["param", "body"],
      ChainExpression: ["expression"],
      ClassBody: ["body"],
      ClassDeclaration: ["id", "superClass", "body"],
      ClassExpression: ["id", "superClass", "body"],
      ComprehensionBlock: ["left", "right"],
      // CAUTION: It's deferred to ES7.
      ComprehensionExpression: ["blocks", "filter", "body"],
      // CAUTION: It's deferred to ES7.
      ConditionalExpression: ["test", "consequent", "alternate"],
      ContinueStatement: ["label"],
      DebuggerStatement: [],
      DirectiveStatement: [],
      DoWhileStatement: ["body", "test"],
      EmptyStatement: [],
      ExportAllDeclaration: ["source"],
      ExportDefaultDeclaration: ["declaration"],
      ExportNamedDeclaration: ["declaration", "specifiers", "source"],
      ExportSpecifier: ["exported", "local"],
      ExpressionStatement: ["expression"],
      ForStatement: ["init", "test", "update", "body"],
      ForInStatement: ["left", "right", "body"],
      ForOfStatement: ["left", "right", "body"],
      FunctionDeclaration: ["id", "params", "body"],
      FunctionExpression: ["id", "params", "body"],
      GeneratorExpression: ["blocks", "filter", "body"],
      // CAUTION: It's deferred to ES7.
      Identifier: [],
      IfStatement: ["test", "consequent", "alternate"],
      ImportExpression: ["source"],
      ImportDeclaration: ["specifiers", "source"],
      ImportDefaultSpecifier: ["local"],
      ImportNamespaceSpecifier: ["local"],
      ImportSpecifier: ["imported", "local"],
      Literal: [],
      LabeledStatement: ["label", "body"],
      LogicalExpression: ["left", "right"],
      MemberExpression: ["object", "property"],
      MetaProperty: ["meta", "property"],
      MethodDefinition: ["key", "value"],
      ModuleSpecifier: [],
      NewExpression: ["callee", "arguments"],
      ObjectExpression: ["properties"],
      ObjectPattern: ["properties"],
      PrivateIdentifier: [],
      Program: ["body"],
      Property: ["key", "value"],
      PropertyDefinition: ["key", "value"],
      RestElement: ["argument"],
      ReturnStatement: ["argument"],
      SequenceExpression: ["expressions"],
      SpreadElement: ["argument"],
      Super: [],
      SwitchStatement: ["discriminant", "cases"],
      SwitchCase: ["test", "consequent"],
      TaggedTemplateExpression: ["tag", "quasi"],
      TemplateElement: [],
      TemplateLiteral: ["quasis", "expressions"],
      ThisExpression: [],
      ThrowStatement: ["argument"],
      TryStatement: ["block", "handler", "finalizer"],
      UnaryExpression: ["argument"],
      UpdateExpression: ["argument"],
      VariableDeclaration: ["declarations"],
      VariableDeclarator: ["id", "init"],
      WhileStatement: ["test", "body"],
      WithStatement: ["object", "body"],
      YieldExpression: ["argument"]
    };
    BREAK = {};
    SKIP = {};
    REMOVE = {};
    VisitorOption = {
      Break: BREAK,
      Skip: SKIP,
      Remove: REMOVE
    };
    function Reference(parent, key) {
      this.parent = parent;
      this.key = key;
    }
    Reference.prototype.replace = function replace2(node) {
      this.parent[this.key] = node;
    };
    Reference.prototype.remove = function remove() {
      if (Array.isArray(this.parent)) {
        this.parent.splice(this.key, 1);
        return true;
      } else {
        this.replace(null);
        return false;
      }
    };
    function Element(node, path, wrap, ref2) {
      this.node = node;
      this.path = path;
      this.wrap = wrap;
      this.ref = ref2;
    }
    function Controller() {
    }
    Controller.prototype.path = function path() {
      var i, iz, j, jz, result, element;
      function addToPath(result2, path2) {
        if (Array.isArray(path2)) {
          for (j = 0, jz = path2.length; j < jz; ++j) {
            result2.push(path2[j]);
          }
        } else {
          result2.push(path2);
        }
      }
      if (!this.__current.path) {
        return null;
      }
      result = [];
      for (i = 2, iz = this.__leavelist.length; i < iz; ++i) {
        element = this.__leavelist[i];
        addToPath(result, element.path);
      }
      addToPath(result, this.__current.path);
      return result;
    };
    Controller.prototype.type = function() {
      var node = this.current();
      return node.type || this.__current.wrap;
    };
    Controller.prototype.parents = function parents() {
      var i, iz, result;
      result = [];
      for (i = 1, iz = this.__leavelist.length; i < iz; ++i) {
        result.push(this.__leavelist[i].node);
      }
      return result;
    };
    Controller.prototype.current = function current2() {
      return this.__current.node;
    };
    Controller.prototype.__execute = function __execute(callback, element) {
      var previous, result;
      result = void 0;
      previous = this.__current;
      this.__current = element;
      this.__state = null;
      if (callback) {
        result = callback.call(this, element.node, this.__leavelist[this.__leavelist.length - 1].node);
      }
      this.__current = previous;
      return result;
    };
    Controller.prototype.notify = function notify(flag) {
      this.__state = flag;
    };
    Controller.prototype.skip = function() {
      this.notify(SKIP);
    };
    Controller.prototype["break"] = function() {
      this.notify(BREAK);
    };
    Controller.prototype.remove = function() {
      this.notify(REMOVE);
    };
    Controller.prototype.__initialize = function(root, visitor) {
      this.visitor = visitor;
      this.root = root;
      this.__worklist = [];
      this.__leavelist = [];
      this.__current = null;
      this.__state = null;
      this.__fallback = null;
      if (visitor.fallback === "iteration") {
        this.__fallback = Object.keys;
      } else if (typeof visitor.fallback === "function") {
        this.__fallback = visitor.fallback;
      }
      this.__keys = VisitorKeys;
      if (visitor.keys) {
        this.__keys = Object.assign(Object.create(this.__keys), visitor.keys);
      }
    };
    function isNode(node) {
      if (node == null) {
        return false;
      }
      return typeof node === "object" && typeof node.type === "string";
    }
    function isProperty(nodeType, key) {
      return (nodeType === Syntax.ObjectExpression || nodeType === Syntax.ObjectPattern) && "properties" === key;
    }
    function candidateExistsInLeaveList(leavelist, candidate) {
      for (var i = leavelist.length - 1; i >= 0; --i) {
        if (leavelist[i].node === candidate) {
          return true;
        }
      }
      return false;
    }
    Controller.prototype.traverse = function traverse2(root, visitor) {
      var worklist, leavelist, element, node, nodeType, ret, key, current2, current22, candidates, candidate, sentinel;
      this.__initialize(root, visitor);
      sentinel = {};
      worklist = this.__worklist;
      leavelist = this.__leavelist;
      worklist.push(new Element(root, null, null, null));
      leavelist.push(new Element(null, null, null, null));
      while (worklist.length) {
        element = worklist.pop();
        if (element === sentinel) {
          element = leavelist.pop();
          ret = this.__execute(visitor.leave, element);
          if (this.__state === BREAK || ret === BREAK) {
            return;
          }
          continue;
        }
        if (element.node) {
          ret = this.__execute(visitor.enter, element);
          if (this.__state === BREAK || ret === BREAK) {
            return;
          }
          worklist.push(sentinel);
          leavelist.push(element);
          if (this.__state === SKIP || ret === SKIP) {
            continue;
          }
          node = element.node;
          nodeType = node.type || element.wrap;
          candidates = this.__keys[nodeType];
          if (!candidates) {
            if (this.__fallback) {
              candidates = this.__fallback(node);
            } else {
              throw new Error("Unknown node type " + nodeType + ".");
            }
          }
          current2 = candidates.length;
          while ((current2 -= 1) >= 0) {
            key = candidates[current2];
            candidate = node[key];
            if (!candidate) {
              continue;
            }
            if (Array.isArray(candidate)) {
              current22 = candidate.length;
              while ((current22 -= 1) >= 0) {
                if (!candidate[current22]) {
                  continue;
                }
                if (candidateExistsInLeaveList(leavelist, candidate[current22])) {
                  continue;
                }
                if (isProperty(nodeType, candidates[current2])) {
                  element = new Element(candidate[current22], [key, current22], "Property", null);
                } else if (isNode(candidate[current22])) {
                  element = new Element(candidate[current22], [key, current22], null, null);
                } else {
                  continue;
                }
                worklist.push(element);
              }
            } else if (isNode(candidate)) {
              if (candidateExistsInLeaveList(leavelist, candidate)) {
                continue;
              }
              worklist.push(new Element(candidate, key, null, null));
            }
          }
        }
      }
    };
    Controller.prototype.replace = function replace2(root, visitor) {
      var worklist, leavelist, node, nodeType, target, element, current2, current22, candidates, candidate, sentinel, outer, key;
      function removeElem(element2) {
        var i, key2, nextElem, parent;
        if (element2.ref.remove()) {
          key2 = element2.ref.key;
          parent = element2.ref.parent;
          i = worklist.length;
          while (i--) {
            nextElem = worklist[i];
            if (nextElem.ref && nextElem.ref.parent === parent) {
              if (nextElem.ref.key < key2) {
                break;
              }
              --nextElem.ref.key;
            }
          }
        }
      }
      this.__initialize(root, visitor);
      sentinel = {};
      worklist = this.__worklist;
      leavelist = this.__leavelist;
      outer = {
        root
      };
      element = new Element(root, null, null, new Reference(outer, "root"));
      worklist.push(element);
      leavelist.push(element);
      while (worklist.length) {
        element = worklist.pop();
        if (element === sentinel) {
          element = leavelist.pop();
          target = this.__execute(visitor.leave, element);
          if (target !== void 0 && target !== BREAK && target !== SKIP && target !== REMOVE) {
            element.ref.replace(target);
          }
          if (this.__state === REMOVE || target === REMOVE) {
            removeElem(element);
          }
          if (this.__state === BREAK || target === BREAK) {
            return outer.root;
          }
          continue;
        }
        target = this.__execute(visitor.enter, element);
        if (target !== void 0 && target !== BREAK && target !== SKIP && target !== REMOVE) {
          element.ref.replace(target);
          element.node = target;
        }
        if (this.__state === REMOVE || target === REMOVE) {
          removeElem(element);
          element.node = null;
        }
        if (this.__state === BREAK || target === BREAK) {
          return outer.root;
        }
        node = element.node;
        if (!node) {
          continue;
        }
        worklist.push(sentinel);
        leavelist.push(element);
        if (this.__state === SKIP || target === SKIP) {
          continue;
        }
        nodeType = node.type || element.wrap;
        candidates = this.__keys[nodeType];
        if (!candidates) {
          if (this.__fallback) {
            candidates = this.__fallback(node);
          } else {
            throw new Error("Unknown node type " + nodeType + ".");
          }
        }
        current2 = candidates.length;
        while ((current2 -= 1) >= 0) {
          key = candidates[current2];
          candidate = node[key];
          if (!candidate) {
            continue;
          }
          if (Array.isArray(candidate)) {
            current22 = candidate.length;
            while ((current22 -= 1) >= 0) {
              if (!candidate[current22]) {
                continue;
              }
              if (isProperty(nodeType, candidates[current2])) {
                element = new Element(candidate[current22], [key, current22], "Property", new Reference(candidate, current22));
              } else if (isNode(candidate[current22])) {
                element = new Element(candidate[current22], [key, current22], null, new Reference(candidate, current22));
              } else {
                continue;
              }
              worklist.push(element);
            }
          } else if (isNode(candidate)) {
            worklist.push(new Element(candidate, key, null, new Reference(node, key)));
          }
        }
      }
      return outer.root;
    };
    function traverse(root, visitor) {
      var controller = new Controller();
      return controller.traverse(root, visitor);
    }
    function replace(root, visitor) {
      var controller = new Controller();
      return controller.replace(root, visitor);
    }
    function extendCommentRange(comment, tokens) {
      var target;
      target = upperBound(tokens, function search(token) {
        return token.range[0] > comment.range[0];
      });
      comment.extendedRange = [comment.range[0], comment.range[1]];
      if (target !== tokens.length) {
        comment.extendedRange[1] = tokens[target].range[0];
      }
      target -= 1;
      if (target >= 0) {
        comment.extendedRange[0] = tokens[target].range[1];
      }
      return comment;
    }
    function attachComments(tree, providedComments, tokens) {
      var comments = [], comment, len, i, cursor;
      if (!tree.range) {
        throw new Error("attachComments needs range information");
      }
      if (!tokens.length) {
        if (providedComments.length) {
          for (i = 0, len = providedComments.length; i < len; i += 1) {
            comment = deepCopy(providedComments[i]);
            comment.extendedRange = [0, tree.range[0]];
            comments.push(comment);
          }
          tree.leadingComments = comments;
        }
        return tree;
      }
      for (i = 0, len = providedComments.length; i < len; i += 1) {
        comments.push(extendCommentRange(deepCopy(providedComments[i]), tokens));
      }
      cursor = 0;
      traverse(tree, {
        enter: function(node) {
          var comment2;
          while (cursor < comments.length) {
            comment2 = comments[cursor];
            if (comment2.extendedRange[1] > node.range[0]) {
              break;
            }
            if (comment2.extendedRange[1] === node.range[0]) {
              if (!node.leadingComments) {
                node.leadingComments = [];
              }
              node.leadingComments.push(comment2);
              comments.splice(cursor, 1);
            } else {
              cursor += 1;
            }
          }
          if (cursor === comments.length) {
            return VisitorOption.Break;
          }
          if (comments[cursor].extendedRange[0] > node.range[1]) {
            return VisitorOption.Skip;
          }
        }
      });
      cursor = 0;
      traverse(tree, {
        leave: function(node) {
          var comment2;
          while (cursor < comments.length) {
            comment2 = comments[cursor];
            if (node.range[1] < comment2.extendedRange[0]) {
              break;
            }
            if (node.range[1] === comment2.extendedRange[0]) {
              if (!node.trailingComments) {
                node.trailingComments = [];
              }
              node.trailingComments.push(comment2);
              comments.splice(cursor, 1);
            } else {
              cursor += 1;
            }
          }
          if (cursor === comments.length) {
            return VisitorOption.Break;
          }
          if (comments[cursor].extendedRange[0] > node.range[1]) {
            return VisitorOption.Skip;
          }
        }
      });
      return tree;
    }
    exports2.Syntax = Syntax;
    exports2.traverse = traverse;
    exports2.replace = replace;
    exports2.attachComments = attachComments;
    exports2.VisitorKeys = VisitorKeys;
    exports2.VisitorOption = VisitorOption;
    exports2.Controller = Controller;
    exports2.cloneEnvironment = function() {
      return clone({});
    };
    return exports2;
  })(exports);
})(estraverse);
var sourceMap = {};
var sourceMapGenerator = {};
var base64Vlq = {};
var base64 = {};
var hasRequiredBase64;
function requireBase64() {
  if (hasRequiredBase64) return base64;
  hasRequiredBase64 = 1;
  var intToCharMap = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  base64.encode = function(number) {
    if (0 <= number && number < intToCharMap.length) {
      return intToCharMap[number];
    }
    throw new TypeError("Must be between 0 and 63: " + number);
  };
  base64.decode = function(charCode) {
    var bigA = 65;
    var bigZ = 90;
    var littleA = 97;
    var littleZ = 122;
    var zero = 48;
    var nine = 57;
    var plus = 43;
    var slash = 47;
    var littleOffset = 26;
    var numberOffset = 52;
    if (bigA <= charCode && charCode <= bigZ) {
      return charCode - bigA;
    }
    if (littleA <= charCode && charCode <= littleZ) {
      return charCode - littleA + littleOffset;
    }
    if (zero <= charCode && charCode <= nine) {
      return charCode - zero + numberOffset;
    }
    if (charCode == plus) {
      return 62;
    }
    if (charCode == slash) {
      return 63;
    }
    return -1;
  };
  return base64;
}
var hasRequiredBase64Vlq;
function requireBase64Vlq() {
  if (hasRequiredBase64Vlq) return base64Vlq;
  hasRequiredBase64Vlq = 1;
  var base642 = requireBase64();
  var VLQ_BASE_SHIFT = 5;
  var VLQ_BASE = 1 << VLQ_BASE_SHIFT;
  var VLQ_BASE_MASK = VLQ_BASE - 1;
  var VLQ_CONTINUATION_BIT = VLQ_BASE;
  function toVLQSigned(aValue) {
    return aValue < 0 ? (-aValue << 1) + 1 : (aValue << 1) + 0;
  }
  function fromVLQSigned(aValue) {
    var isNegative = (aValue & 1) === 1;
    var shifted = aValue >> 1;
    return isNegative ? -shifted : shifted;
  }
  base64Vlq.encode = function base64VLQ_encode(aValue) {
    var encoded = "";
    var digit;
    var vlq = toVLQSigned(aValue);
    do {
      digit = vlq & VLQ_BASE_MASK;
      vlq >>>= VLQ_BASE_SHIFT;
      if (vlq > 0) {
        digit |= VLQ_CONTINUATION_BIT;
      }
      encoded += base642.encode(digit);
    } while (vlq > 0);
    return encoded;
  };
  base64Vlq.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
    var strLen = aStr.length;
    var result = 0;
    var shift = 0;
    var continuation, digit;
    do {
      if (aIndex >= strLen) {
        throw new Error("Expected more digits in base 64 VLQ value.");
      }
      digit = base642.decode(aStr.charCodeAt(aIndex++));
      if (digit === -1) {
        throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
      }
      continuation = !!(digit & VLQ_CONTINUATION_BIT);
      digit &= VLQ_BASE_MASK;
      result = result + (digit << shift);
      shift += VLQ_BASE_SHIFT;
    } while (continuation);
    aOutParam.value = fromVLQSigned(result);
    aOutParam.rest = aIndex;
  };
  return base64Vlq;
}
var util = {};
var hasRequiredUtil;
function requireUtil() {
  if (hasRequiredUtil) return util;
  hasRequiredUtil = 1;
  (function(exports) {
    function getArg(aArgs, aName, aDefaultValue) {
      if (aName in aArgs) {
        return aArgs[aName];
      } else if (arguments.length === 3) {
        return aDefaultValue;
      } else {
        throw new Error('"' + aName + '" is a required argument.');
      }
    }
    exports.getArg = getArg;
    var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
    var dataUrlRegexp = /^data:.+\,.+$/;
    function urlParse(aUrl) {
      var match = aUrl.match(urlRegexp);
      if (!match) {
        return null;
      }
      return {
        scheme: match[1],
        auth: match[2],
        host: match[3],
        port: match[4],
        path: match[5]
      };
    }
    exports.urlParse = urlParse;
    function urlGenerate(aParsedUrl) {
      var url = "";
      if (aParsedUrl.scheme) {
        url += aParsedUrl.scheme + ":";
      }
      url += "//";
      if (aParsedUrl.auth) {
        url += aParsedUrl.auth + "@";
      }
      if (aParsedUrl.host) {
        url += aParsedUrl.host;
      }
      if (aParsedUrl.port) {
        url += ":" + aParsedUrl.port;
      }
      if (aParsedUrl.path) {
        url += aParsedUrl.path;
      }
      return url;
    }
    exports.urlGenerate = urlGenerate;
    function normalize(aPath) {
      var path = aPath;
      var url = urlParse(aPath);
      if (url) {
        if (!url.path) {
          return aPath;
        }
        path = url.path;
      }
      var isAbsolute = exports.isAbsolute(path);
      var parts = path.split(/\/+/);
      for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
        part = parts[i];
        if (part === ".") {
          parts.splice(i, 1);
        } else if (part === "..") {
          up++;
        } else if (up > 0) {
          if (part === "") {
            parts.splice(i + 1, up);
            up = 0;
          } else {
            parts.splice(i, 2);
            up--;
          }
        }
      }
      path = parts.join("/");
      if (path === "") {
        path = isAbsolute ? "/" : ".";
      }
      if (url) {
        url.path = path;
        return urlGenerate(url);
      }
      return path;
    }
    exports.normalize = normalize;
    function join(aRoot, aPath) {
      if (aRoot === "") {
        aRoot = ".";
      }
      if (aPath === "") {
        aPath = ".";
      }
      var aPathUrl = urlParse(aPath);
      var aRootUrl = urlParse(aRoot);
      if (aRootUrl) {
        aRoot = aRootUrl.path || "/";
      }
      if (aPathUrl && !aPathUrl.scheme) {
        if (aRootUrl) {
          aPathUrl.scheme = aRootUrl.scheme;
        }
        return urlGenerate(aPathUrl);
      }
      if (aPathUrl || aPath.match(dataUrlRegexp)) {
        return aPath;
      }
      if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
        aRootUrl.host = aPath;
        return urlGenerate(aRootUrl);
      }
      var joined = aPath.charAt(0) === "/" ? aPath : normalize(aRoot.replace(/\/+$/, "") + "/" + aPath);
      if (aRootUrl) {
        aRootUrl.path = joined;
        return urlGenerate(aRootUrl);
      }
      return joined;
    }
    exports.join = join;
    exports.isAbsolute = function(aPath) {
      return aPath.charAt(0) === "/" || urlRegexp.test(aPath);
    };
    function relative(aRoot, aPath) {
      if (aRoot === "") {
        aRoot = ".";
      }
      aRoot = aRoot.replace(/\/$/, "");
      var level = 0;
      while (aPath.indexOf(aRoot + "/") !== 0) {
        var index = aRoot.lastIndexOf("/");
        if (index < 0) {
          return aPath;
        }
        aRoot = aRoot.slice(0, index);
        if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
          return aPath;
        }
        ++level;
      }
      return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
    }
    exports.relative = relative;
    var supportsNullProto = function() {
      var obj = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in obj);
    }();
    function identity(s) {
      return s;
    }
    function toSetString(aStr) {
      if (isProtoString(aStr)) {
        return "$" + aStr;
      }
      return aStr;
    }
    exports.toSetString = supportsNullProto ? identity : toSetString;
    function fromSetString(aStr) {
      if (isProtoString(aStr)) {
        return aStr.slice(1);
      }
      return aStr;
    }
    exports.fromSetString = supportsNullProto ? identity : fromSetString;
    function isProtoString(s) {
      if (!s) {
        return false;
      }
      var length = s.length;
      if (length < 9) {
        return false;
      }
      if (s.charCodeAt(length - 1) !== 95 || s.charCodeAt(length - 2) !== 95 || s.charCodeAt(length - 3) !== 111 || s.charCodeAt(length - 4) !== 116 || s.charCodeAt(length - 5) !== 111 || s.charCodeAt(length - 6) !== 114 || s.charCodeAt(length - 7) !== 112 || s.charCodeAt(length - 8) !== 95 || s.charCodeAt(length - 9) !== 95) {
        return false;
      }
      for (var i = length - 10; i >= 0; i--) {
        if (s.charCodeAt(i) !== 36) {
          return false;
        }
      }
      return true;
    }
    function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
      var cmp = strcmp(mappingA.source, mappingB.source);
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalLine - mappingB.originalLine;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalColumn - mappingB.originalColumn;
      if (cmp !== 0 || onlyCompareOriginal) {
        return cmp;
      }
      cmp = mappingA.generatedColumn - mappingB.generatedColumn;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.generatedLine - mappingB.generatedLine;
      if (cmp !== 0) {
        return cmp;
      }
      return strcmp(mappingA.name, mappingB.name);
    }
    exports.compareByOriginalPositions = compareByOriginalPositions;
    function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
      var cmp = mappingA.generatedLine - mappingB.generatedLine;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.generatedColumn - mappingB.generatedColumn;
      if (cmp !== 0 || onlyCompareGenerated) {
        return cmp;
      }
      cmp = strcmp(mappingA.source, mappingB.source);
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalLine - mappingB.originalLine;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalColumn - mappingB.originalColumn;
      if (cmp !== 0) {
        return cmp;
      }
      return strcmp(mappingA.name, mappingB.name);
    }
    exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;
    function strcmp(aStr1, aStr2) {
      if (aStr1 === aStr2) {
        return 0;
      }
      if (aStr1 === null) {
        return 1;
      }
      if (aStr2 === null) {
        return -1;
      }
      if (aStr1 > aStr2) {
        return 1;
      }
      return -1;
    }
    function compareByGeneratedPositionsInflated(mappingA, mappingB) {
      var cmp = mappingA.generatedLine - mappingB.generatedLine;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.generatedColumn - mappingB.generatedColumn;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = strcmp(mappingA.source, mappingB.source);
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalLine - mappingB.originalLine;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalColumn - mappingB.originalColumn;
      if (cmp !== 0) {
        return cmp;
      }
      return strcmp(mappingA.name, mappingB.name);
    }
    exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;
    function parseSourceMapInput(str) {
      return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ""));
    }
    exports.parseSourceMapInput = parseSourceMapInput;
    function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
      sourceURL = sourceURL || "";
      if (sourceRoot) {
        if (sourceRoot[sourceRoot.length - 1] !== "/" && sourceURL[0] !== "/") {
          sourceRoot += "/";
        }
        sourceURL = sourceRoot + sourceURL;
      }
      if (sourceMapURL) {
        var parsed = urlParse(sourceMapURL);
        if (!parsed) {
          throw new Error("sourceMapURL could not be parsed");
        }
        if (parsed.path) {
          var index = parsed.path.lastIndexOf("/");
          if (index >= 0) {
            parsed.path = parsed.path.substring(0, index + 1);
          }
        }
        sourceURL = join(urlGenerate(parsed), sourceURL);
      }
      return normalize(sourceURL);
    }
    exports.computeSourceURL = computeSourceURL;
  })(util);
  return util;
}
var arraySet = {};
var hasRequiredArraySet;
function requireArraySet() {
  if (hasRequiredArraySet) return arraySet;
  hasRequiredArraySet = 1;
  var util2 = requireUtil();
  var has2 = Object.prototype.hasOwnProperty;
  var hasNativeMap = typeof Map !== "undefined";
  function ArraySet() {
    this._array = [];
    this._set = hasNativeMap ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
  }
  ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
    var set = new ArraySet();
    for (var i = 0, len = aArray.length; i < len; i++) {
      set.add(aArray[i], aAllowDuplicates);
    }
    return set;
  };
  ArraySet.prototype.size = function ArraySet_size() {
    return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  };
  ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
    var sStr = hasNativeMap ? aStr : util2.toSetString(aStr);
    var isDuplicate = hasNativeMap ? this.has(aStr) : has2.call(this._set, sStr);
    var idx = this._array.length;
    if (!isDuplicate || aAllowDuplicates) {
      this._array.push(aStr);
    }
    if (!isDuplicate) {
      if (hasNativeMap) {
        this._set.set(aStr, idx);
      } else {
        this._set[sStr] = idx;
      }
    }
  };
  ArraySet.prototype.has = function ArraySet_has(aStr) {
    if (hasNativeMap) {
      return this._set.has(aStr);
    } else {
      var sStr = util2.toSetString(aStr);
      return has2.call(this._set, sStr);
    }
  };
  ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
    if (hasNativeMap) {
      var idx = this._set.get(aStr);
      if (idx >= 0) {
        return idx;
      }
    } else {
      var sStr = util2.toSetString(aStr);
      if (has2.call(this._set, sStr)) {
        return this._set[sStr];
      }
    }
    throw new Error('"' + aStr + '" is not in the set.');
  };
  ArraySet.prototype.at = function ArraySet_at(aIdx) {
    if (aIdx >= 0 && aIdx < this._array.length) {
      return this._array[aIdx];
    }
    throw new Error("No element indexed by " + aIdx);
  };
  ArraySet.prototype.toArray = function ArraySet_toArray() {
    return this._array.slice();
  };
  arraySet.ArraySet = ArraySet;
  return arraySet;
}
var mappingList = {};
var hasRequiredMappingList;
function requireMappingList() {
  if (hasRequiredMappingList) return mappingList;
  hasRequiredMappingList = 1;
  var util2 = requireUtil();
  function generatedPositionAfter(mappingA, mappingB) {
    var lineA = mappingA.generatedLine;
    var lineB = mappingB.generatedLine;
    var columnA = mappingA.generatedColumn;
    var columnB = mappingB.generatedColumn;
    return lineB > lineA || lineB == lineA && columnB >= columnA || util2.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
  }
  function MappingList() {
    this._array = [];
    this._sorted = true;
    this._last = { generatedLine: -1, generatedColumn: 0 };
  }
  MappingList.prototype.unsortedForEach = function MappingList_forEach(aCallback, aThisArg) {
    this._array.forEach(aCallback, aThisArg);
  };
  MappingList.prototype.add = function MappingList_add(aMapping) {
    if (generatedPositionAfter(this._last, aMapping)) {
      this._last = aMapping;
      this._array.push(aMapping);
    } else {
      this._sorted = false;
      this._array.push(aMapping);
    }
  };
  MappingList.prototype.toArray = function MappingList_toArray() {
    if (!this._sorted) {
      this._array.sort(util2.compareByGeneratedPositionsInflated);
      this._sorted = true;
    }
    return this._array;
  };
  mappingList.MappingList = MappingList;
  return mappingList;
}
var hasRequiredSourceMapGenerator;
function requireSourceMapGenerator() {
  if (hasRequiredSourceMapGenerator) return sourceMapGenerator;
  hasRequiredSourceMapGenerator = 1;
  var base64VLQ = requireBase64Vlq();
  var util2 = requireUtil();
  var ArraySet = requireArraySet().ArraySet;
  var MappingList = requireMappingList().MappingList;
  function SourceMapGenerator(aArgs) {
    if (!aArgs) {
      aArgs = {};
    }
    this._file = util2.getArg(aArgs, "file", null);
    this._sourceRoot = util2.getArg(aArgs, "sourceRoot", null);
    this._skipValidation = util2.getArg(aArgs, "skipValidation", false);
    this._sources = new ArraySet();
    this._names = new ArraySet();
    this._mappings = new MappingList();
    this._sourcesContents = null;
  }
  SourceMapGenerator.prototype._version = 3;
  SourceMapGenerator.fromSourceMap = function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
    var sourceRoot = aSourceMapConsumer.sourceRoot;
    var generator = new SourceMapGenerator({
      file: aSourceMapConsumer.file,
      sourceRoot
    });
    aSourceMapConsumer.eachMapping(function(mapping) {
      var newMapping = {
        generated: {
          line: mapping.generatedLine,
          column: mapping.generatedColumn
        }
      };
      if (mapping.source != null) {
        newMapping.source = mapping.source;
        if (sourceRoot != null) {
          newMapping.source = util2.relative(sourceRoot, newMapping.source);
        }
        newMapping.original = {
          line: mapping.originalLine,
          column: mapping.originalColumn
        };
        if (mapping.name != null) {
          newMapping.name = mapping.name;
        }
      }
      generator.addMapping(newMapping);
    });
    aSourceMapConsumer.sources.forEach(function(sourceFile) {
      var sourceRelative = sourceFile;
      if (sourceRoot !== null) {
        sourceRelative = util2.relative(sourceRoot, sourceFile);
      }
      if (!generator._sources.has(sourceRelative)) {
        generator._sources.add(sourceRelative);
      }
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        generator.setSourceContent(sourceFile, content);
      }
    });
    return generator;
  };
  SourceMapGenerator.prototype.addMapping = function SourceMapGenerator_addMapping(aArgs) {
    var generated = util2.getArg(aArgs, "generated");
    var original = util2.getArg(aArgs, "original", null);
    var source = util2.getArg(aArgs, "source", null);
    var name2 = util2.getArg(aArgs, "name", null);
    if (!this._skipValidation) {
      this._validateMapping(generated, original, source, name2);
    }
    if (source != null) {
      source = String(source);
      if (!this._sources.has(source)) {
        this._sources.add(source);
      }
    }
    if (name2 != null) {
      name2 = String(name2);
      if (!this._names.has(name2)) {
        this._names.add(name2);
      }
    }
    this._mappings.add({
      generatedLine: generated.line,
      generatedColumn: generated.column,
      originalLine: original != null && original.line,
      originalColumn: original != null && original.column,
      source,
      name: name2
    });
  };
  SourceMapGenerator.prototype.setSourceContent = function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
    var source = aSourceFile;
    if (this._sourceRoot != null) {
      source = util2.relative(this._sourceRoot, source);
    }
    if (aSourceContent != null) {
      if (!this._sourcesContents) {
        this._sourcesContents = /* @__PURE__ */ Object.create(null);
      }
      this._sourcesContents[util2.toSetString(source)] = aSourceContent;
    } else if (this._sourcesContents) {
      delete this._sourcesContents[util2.toSetString(source)];
      if (Object.keys(this._sourcesContents).length === 0) {
        this._sourcesContents = null;
      }
    }
  };
  SourceMapGenerator.prototype.applySourceMap = function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
    var sourceFile = aSourceFile;
    if (aSourceFile == null) {
      if (aSourceMapConsumer.file == null) {
        throw new Error(
          `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
        );
      }
      sourceFile = aSourceMapConsumer.file;
    }
    var sourceRoot = this._sourceRoot;
    if (sourceRoot != null) {
      sourceFile = util2.relative(sourceRoot, sourceFile);
    }
    var newSources = new ArraySet();
    var newNames = new ArraySet();
    this._mappings.unsortedForEach(function(mapping) {
      if (mapping.source === sourceFile && mapping.originalLine != null) {
        var original = aSourceMapConsumer.originalPositionFor({
          line: mapping.originalLine,
          column: mapping.originalColumn
        });
        if (original.source != null) {
          mapping.source = original.source;
          if (aSourceMapPath != null) {
            mapping.source = util2.join(aSourceMapPath, mapping.source);
          }
          if (sourceRoot != null) {
            mapping.source = util2.relative(sourceRoot, mapping.source);
          }
          mapping.originalLine = original.line;
          mapping.originalColumn = original.column;
          if (original.name != null) {
            mapping.name = original.name;
          }
        }
      }
      var source = mapping.source;
      if (source != null && !newSources.has(source)) {
        newSources.add(source);
      }
      var name2 = mapping.name;
      if (name2 != null && !newNames.has(name2)) {
        newNames.add(name2);
      }
    }, this);
    this._sources = newSources;
    this._names = newNames;
    aSourceMapConsumer.sources.forEach(function(sourceFile2) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile2);
      if (content != null) {
        if (aSourceMapPath != null) {
          sourceFile2 = util2.join(aSourceMapPath, sourceFile2);
        }
        if (sourceRoot != null) {
          sourceFile2 = util2.relative(sourceRoot, sourceFile2);
        }
        this.setSourceContent(sourceFile2, content);
      }
    }, this);
  };
  SourceMapGenerator.prototype._validateMapping = function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource, aName) {
    if (aOriginal && typeof aOriginal.line !== "number" && typeof aOriginal.column !== "number") {
      throw new Error(
        "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
      );
    }
    if (aGenerated && "line" in aGenerated && "column" in aGenerated && aGenerated.line > 0 && aGenerated.column >= 0 && !aOriginal && !aSource && !aName) {
      return;
    } else if (aGenerated && "line" in aGenerated && "column" in aGenerated && aOriginal && "line" in aOriginal && "column" in aOriginal && aGenerated.line > 0 && aGenerated.column >= 0 && aOriginal.line > 0 && aOriginal.column >= 0 && aSource) {
      return;
    } else {
      throw new Error("Invalid mapping: " + JSON.stringify({
        generated: aGenerated,
        source: aSource,
        original: aOriginal,
        name: aName
      }));
    }
  };
  SourceMapGenerator.prototype._serializeMappings = function SourceMapGenerator_serializeMappings() {
    var previousGeneratedColumn = 0;
    var previousGeneratedLine = 1;
    var previousOriginalColumn = 0;
    var previousOriginalLine = 0;
    var previousName = 0;
    var previousSource = 0;
    var result = "";
    var next;
    var mapping;
    var nameIdx;
    var sourceIdx;
    var mappings = this._mappings.toArray();
    for (var i = 0, len = mappings.length; i < len; i++) {
      mapping = mappings[i];
      next = "";
      if (mapping.generatedLine !== previousGeneratedLine) {
        previousGeneratedColumn = 0;
        while (mapping.generatedLine !== previousGeneratedLine) {
          next += ";";
          previousGeneratedLine++;
        }
      } else {
        if (i > 0) {
          if (!util2.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
            continue;
          }
          next += ",";
        }
      }
      next += base64VLQ.encode(mapping.generatedColumn - previousGeneratedColumn);
      previousGeneratedColumn = mapping.generatedColumn;
      if (mapping.source != null) {
        sourceIdx = this._sources.indexOf(mapping.source);
        next += base64VLQ.encode(sourceIdx - previousSource);
        previousSource = sourceIdx;
        next += base64VLQ.encode(mapping.originalLine - 1 - previousOriginalLine);
        previousOriginalLine = mapping.originalLine - 1;
        next += base64VLQ.encode(mapping.originalColumn - previousOriginalColumn);
        previousOriginalColumn = mapping.originalColumn;
        if (mapping.name != null) {
          nameIdx = this._names.indexOf(mapping.name);
          next += base64VLQ.encode(nameIdx - previousName);
          previousName = nameIdx;
        }
      }
      result += next;
    }
    return result;
  };
  SourceMapGenerator.prototype._generateSourcesContent = function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
    return aSources.map(function(source) {
      if (!this._sourcesContents) {
        return null;
      }
      if (aSourceRoot != null) {
        source = util2.relative(aSourceRoot, source);
      }
      var key = util2.toSetString(source);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, key) ? this._sourcesContents[key] : null;
    }, this);
  };
  SourceMapGenerator.prototype.toJSON = function SourceMapGenerator_toJSON() {
    var map = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    if (this._file != null) {
      map.file = this._file;
    }
    if (this._sourceRoot != null) {
      map.sourceRoot = this._sourceRoot;
    }
    if (this._sourcesContents) {
      map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
    }
    return map;
  };
  SourceMapGenerator.prototype.toString = function SourceMapGenerator_toString() {
    return JSON.stringify(this.toJSON());
  };
  sourceMapGenerator.SourceMapGenerator = SourceMapGenerator;
  return sourceMapGenerator;
}
var sourceMapConsumer = {};
var binarySearch = {};
var hasRequiredBinarySearch;
function requireBinarySearch() {
  if (hasRequiredBinarySearch) return binarySearch;
  hasRequiredBinarySearch = 1;
  (function(exports) {
    exports.GREATEST_LOWER_BOUND = 1;
    exports.LEAST_UPPER_BOUND = 2;
    function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
      var mid = Math.floor((aHigh - aLow) / 2) + aLow;
      var cmp = aCompare(aNeedle, aHaystack[mid], true);
      if (cmp === 0) {
        return mid;
      } else if (cmp > 0) {
        if (aHigh - mid > 1) {
          return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
        }
        if (aBias == exports.LEAST_UPPER_BOUND) {
          return aHigh < aHaystack.length ? aHigh : -1;
        } else {
          return mid;
        }
      } else {
        if (mid - aLow > 1) {
          return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
        }
        if (aBias == exports.LEAST_UPPER_BOUND) {
          return mid;
        } else {
          return aLow < 0 ? -1 : aLow;
        }
      }
    }
    exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
      if (aHaystack.length === 0) {
        return -1;
      }
      var index = recursiveSearch(
        -1,
        aHaystack.length,
        aNeedle,
        aHaystack,
        aCompare,
        aBias || exports.GREATEST_LOWER_BOUND
      );
      if (index < 0) {
        return -1;
      }
      while (index - 1 >= 0) {
        if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
          break;
        }
        --index;
      }
      return index;
    };
  })(binarySearch);
  return binarySearch;
}
var quickSort = {};
var hasRequiredQuickSort;
function requireQuickSort() {
  if (hasRequiredQuickSort) return quickSort;
  hasRequiredQuickSort = 1;
  function swap(ary, x, y) {
    var temp = ary[x];
    ary[x] = ary[y];
    ary[y] = temp;
  }
  function randomIntInRange(low, high) {
    return Math.round(low + Math.random() * (high - low));
  }
  function doQuickSort(ary, comparator, p2, r) {
    if (p2 < r) {
      var pivotIndex = randomIntInRange(p2, r);
      var i = p2 - 1;
      swap(ary, pivotIndex, r);
      var pivot = ary[r];
      for (var j = p2; j < r; j++) {
        if (comparator(ary[j], pivot) <= 0) {
          i += 1;
          swap(ary, i, j);
        }
      }
      swap(ary, i + 1, j);
      var q2 = i + 1;
      doQuickSort(ary, comparator, p2, q2 - 1);
      doQuickSort(ary, comparator, q2 + 1, r);
    }
  }
  quickSort.quickSort = function(ary, comparator) {
    doQuickSort(ary, comparator, 0, ary.length - 1);
  };
  return quickSort;
}
var hasRequiredSourceMapConsumer;
function requireSourceMapConsumer() {
  if (hasRequiredSourceMapConsumer) return sourceMapConsumer;
  hasRequiredSourceMapConsumer = 1;
  var util2 = requireUtil();
  var binarySearch2 = requireBinarySearch();
  var ArraySet = requireArraySet().ArraySet;
  var base64VLQ = requireBase64Vlq();
  var quickSort2 = requireQuickSort().quickSort;
  function SourceMapConsumer(aSourceMap, aSourceMapURL) {
    var sourceMap2 = aSourceMap;
    if (typeof aSourceMap === "string") {
      sourceMap2 = util2.parseSourceMapInput(aSourceMap);
    }
    return sourceMap2.sections != null ? new IndexedSourceMapConsumer(sourceMap2, aSourceMapURL) : new BasicSourceMapConsumer(sourceMap2, aSourceMapURL);
  }
  SourceMapConsumer.fromSourceMap = function(aSourceMap, aSourceMapURL) {
    return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
  };
  SourceMapConsumer.prototype._version = 3;
  SourceMapConsumer.prototype.__generatedMappings = null;
  Object.defineProperty(SourceMapConsumer.prototype, "_generatedMappings", {
    configurable: true,
    enumerable: true,
    get: function() {
      if (!this.__generatedMappings) {
        this._parseMappings(this._mappings, this.sourceRoot);
      }
      return this.__generatedMappings;
    }
  });
  SourceMapConsumer.prototype.__originalMappings = null;
  Object.defineProperty(SourceMapConsumer.prototype, "_originalMappings", {
    configurable: true,
    enumerable: true,
    get: function() {
      if (!this.__originalMappings) {
        this._parseMappings(this._mappings, this.sourceRoot);
      }
      return this.__originalMappings;
    }
  });
  SourceMapConsumer.prototype._charIsMappingSeparator = function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
    var c2 = aStr.charAt(index);
    return c2 === ";" || c2 === ",";
  };
  SourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    throw new Error("Subclasses must implement _parseMappings");
  };
  SourceMapConsumer.GENERATED_ORDER = 1;
  SourceMapConsumer.ORIGINAL_ORDER = 2;
  SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
  SourceMapConsumer.LEAST_UPPER_BOUND = 2;
  SourceMapConsumer.prototype.eachMapping = function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
    var context = aContext || null;
    var order = aOrder || SourceMapConsumer.GENERATED_ORDER;
    var mappings;
    switch (order) {
      case SourceMapConsumer.GENERATED_ORDER:
        mappings = this._generatedMappings;
        break;
      case SourceMapConsumer.ORIGINAL_ORDER:
        mappings = this._originalMappings;
        break;
      default:
        throw new Error("Unknown order of iteration.");
    }
    var sourceRoot = this.sourceRoot;
    mappings.map(function(mapping) {
      var source = mapping.source === null ? null : this._sources.at(mapping.source);
      source = util2.computeSourceURL(sourceRoot, source, this._sourceMapURL);
      return {
        source,
        generatedLine: mapping.generatedLine,
        generatedColumn: mapping.generatedColumn,
        originalLine: mapping.originalLine,
        originalColumn: mapping.originalColumn,
        name: mapping.name === null ? null : this._names.at(mapping.name)
      };
    }, this).forEach(aCallback, context);
  };
  SourceMapConsumer.prototype.allGeneratedPositionsFor = function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
    var line = util2.getArg(aArgs, "line");
    var needle = {
      source: util2.getArg(aArgs, "source"),
      originalLine: line,
      originalColumn: util2.getArg(aArgs, "column", 0)
    };
    needle.source = this._findSourceIndex(needle.source);
    if (needle.source < 0) {
      return [];
    }
    var mappings = [];
    var index = this._findMapping(
      needle,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      util2.compareByOriginalPositions,
      binarySearch2.LEAST_UPPER_BOUND
    );
    if (index >= 0) {
      var mapping = this._originalMappings[index];
      if (aArgs.column === void 0) {
        var originalLine = mapping.originalLine;
        while (mapping && mapping.originalLine === originalLine) {
          mappings.push({
            line: util2.getArg(mapping, "generatedLine", null),
            column: util2.getArg(mapping, "generatedColumn", null),
            lastColumn: util2.getArg(mapping, "lastGeneratedColumn", null)
          });
          mapping = this._originalMappings[++index];
        }
      } else {
        var originalColumn = mapping.originalColumn;
        while (mapping && mapping.originalLine === line && mapping.originalColumn == originalColumn) {
          mappings.push({
            line: util2.getArg(mapping, "generatedLine", null),
            column: util2.getArg(mapping, "generatedColumn", null),
            lastColumn: util2.getArg(mapping, "lastGeneratedColumn", null)
          });
          mapping = this._originalMappings[++index];
        }
      }
    }
    return mappings;
  };
  sourceMapConsumer.SourceMapConsumer = SourceMapConsumer;
  function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
    var sourceMap2 = aSourceMap;
    if (typeof aSourceMap === "string") {
      sourceMap2 = util2.parseSourceMapInput(aSourceMap);
    }
    var version2 = util2.getArg(sourceMap2, "version");
    var sources = util2.getArg(sourceMap2, "sources");
    var names = util2.getArg(sourceMap2, "names", []);
    var sourceRoot = util2.getArg(sourceMap2, "sourceRoot", null);
    var sourcesContent = util2.getArg(sourceMap2, "sourcesContent", null);
    var mappings = util2.getArg(sourceMap2, "mappings");
    var file = util2.getArg(sourceMap2, "file", null);
    if (version2 != this._version) {
      throw new Error("Unsupported version: " + version2);
    }
    if (sourceRoot) {
      sourceRoot = util2.normalize(sourceRoot);
    }
    sources = sources.map(String).map(util2.normalize).map(function(source) {
      return sourceRoot && util2.isAbsolute(sourceRoot) && util2.isAbsolute(source) ? util2.relative(sourceRoot, source) : source;
    });
    this._names = ArraySet.fromArray(names.map(String), true);
    this._sources = ArraySet.fromArray(sources, true);
    this._absoluteSources = this._sources.toArray().map(function(s) {
      return util2.computeSourceURL(sourceRoot, s, aSourceMapURL);
    });
    this.sourceRoot = sourceRoot;
    this.sourcesContent = sourcesContent;
    this._mappings = mappings;
    this._sourceMapURL = aSourceMapURL;
    this.file = file;
  }
  BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
  BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;
  BasicSourceMapConsumer.prototype._findSourceIndex = function(aSource) {
    var relativeSource = aSource;
    if (this.sourceRoot != null) {
      relativeSource = util2.relative(this.sourceRoot, relativeSource);
    }
    if (this._sources.has(relativeSource)) {
      return this._sources.indexOf(relativeSource);
    }
    var i;
    for (i = 0; i < this._absoluteSources.length; ++i) {
      if (this._absoluteSources[i] == aSource) {
        return i;
      }
    }
    return -1;
  };
  BasicSourceMapConsumer.fromSourceMap = function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
    var smc = Object.create(BasicSourceMapConsumer.prototype);
    var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
    var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
    smc.sourceRoot = aSourceMap._sourceRoot;
    smc.sourcesContent = aSourceMap._generateSourcesContent(
      smc._sources.toArray(),
      smc.sourceRoot
    );
    smc.file = aSourceMap._file;
    smc._sourceMapURL = aSourceMapURL;
    smc._absoluteSources = smc._sources.toArray().map(function(s) {
      return util2.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
    });
    var generatedMappings = aSourceMap._mappings.toArray().slice();
    var destGeneratedMappings = smc.__generatedMappings = [];
    var destOriginalMappings = smc.__originalMappings = [];
    for (var i = 0, length = generatedMappings.length; i < length; i++) {
      var srcMapping = generatedMappings[i];
      var destMapping = new Mapping();
      destMapping.generatedLine = srcMapping.generatedLine;
      destMapping.generatedColumn = srcMapping.generatedColumn;
      if (srcMapping.source) {
        destMapping.source = sources.indexOf(srcMapping.source);
        destMapping.originalLine = srcMapping.originalLine;
        destMapping.originalColumn = srcMapping.originalColumn;
        if (srcMapping.name) {
          destMapping.name = names.indexOf(srcMapping.name);
        }
        destOriginalMappings.push(destMapping);
      }
      destGeneratedMappings.push(destMapping);
    }
    quickSort2(smc.__originalMappings, util2.compareByOriginalPositions);
    return smc;
  };
  BasicSourceMapConsumer.prototype._version = 3;
  Object.defineProperty(BasicSourceMapConsumer.prototype, "sources", {
    get: function() {
      return this._absoluteSources.slice();
    }
  });
  function Mapping() {
    this.generatedLine = 0;
    this.generatedColumn = 0;
    this.source = null;
    this.originalLine = null;
    this.originalColumn = null;
    this.name = null;
  }
  BasicSourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    var generatedLine = 1;
    var previousGeneratedColumn = 0;
    var previousOriginalLine = 0;
    var previousOriginalColumn = 0;
    var previousSource = 0;
    var previousName = 0;
    var length = aStr.length;
    var index = 0;
    var cachedSegments = {};
    var temp = {};
    var originalMappings = [];
    var generatedMappings = [];
    var mapping, str, segment, end, value;
    while (index < length) {
      if (aStr.charAt(index) === ";") {
        generatedLine++;
        index++;
        previousGeneratedColumn = 0;
      } else if (aStr.charAt(index) === ",") {
        index++;
      } else {
        mapping = new Mapping();
        mapping.generatedLine = generatedLine;
        for (end = index; end < length; end++) {
          if (this._charIsMappingSeparator(aStr, end)) {
            break;
          }
        }
        str = aStr.slice(index, end);
        segment = cachedSegments[str];
        if (segment) {
          index += str.length;
        } else {
          segment = [];
          while (index < end) {
            base64VLQ.decode(aStr, index, temp);
            value = temp.value;
            index = temp.rest;
            segment.push(value);
          }
          if (segment.length === 2) {
            throw new Error("Found a source, but no line and column");
          }
          if (segment.length === 3) {
            throw new Error("Found a source and line, but no column");
          }
          cachedSegments[str] = segment;
        }
        mapping.generatedColumn = previousGeneratedColumn + segment[0];
        previousGeneratedColumn = mapping.generatedColumn;
        if (segment.length > 1) {
          mapping.source = previousSource + segment[1];
          previousSource += segment[1];
          mapping.originalLine = previousOriginalLine + segment[2];
          previousOriginalLine = mapping.originalLine;
          mapping.originalLine += 1;
          mapping.originalColumn = previousOriginalColumn + segment[3];
          previousOriginalColumn = mapping.originalColumn;
          if (segment.length > 4) {
            mapping.name = previousName + segment[4];
            previousName += segment[4];
          }
        }
        generatedMappings.push(mapping);
        if (typeof mapping.originalLine === "number") {
          originalMappings.push(mapping);
        }
      }
    }
    quickSort2(generatedMappings, util2.compareByGeneratedPositionsDeflated);
    this.__generatedMappings = generatedMappings;
    quickSort2(originalMappings, util2.compareByOriginalPositions);
    this.__originalMappings = originalMappings;
  };
  BasicSourceMapConsumer.prototype._findMapping = function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName, aColumnName, aComparator, aBias) {
    if (aNeedle[aLineName] <= 0) {
      throw new TypeError("Line must be greater than or equal to 1, got " + aNeedle[aLineName]);
    }
    if (aNeedle[aColumnName] < 0) {
      throw new TypeError("Column must be greater than or equal to 0, got " + aNeedle[aColumnName]);
    }
    return binarySearch2.search(aNeedle, aMappings, aComparator, aBias);
  };
  BasicSourceMapConsumer.prototype.computeColumnSpans = function SourceMapConsumer_computeColumnSpans() {
    for (var index = 0; index < this._generatedMappings.length; ++index) {
      var mapping = this._generatedMappings[index];
      if (index + 1 < this._generatedMappings.length) {
        var nextMapping = this._generatedMappings[index + 1];
        if (mapping.generatedLine === nextMapping.generatedLine) {
          mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
          continue;
        }
      }
      mapping.lastGeneratedColumn = Infinity;
    }
  };
  BasicSourceMapConsumer.prototype.originalPositionFor = function SourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util2.getArg(aArgs, "line"),
      generatedColumn: util2.getArg(aArgs, "column")
    };
    var index = this._findMapping(
      needle,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      util2.compareByGeneratedPositionsDeflated,
      util2.getArg(aArgs, "bias", SourceMapConsumer.GREATEST_LOWER_BOUND)
    );
    if (index >= 0) {
      var mapping = this._generatedMappings[index];
      if (mapping.generatedLine === needle.generatedLine) {
        var source = util2.getArg(mapping, "source", null);
        if (source !== null) {
          source = this._sources.at(source);
          source = util2.computeSourceURL(this.sourceRoot, source, this._sourceMapURL);
        }
        var name2 = util2.getArg(mapping, "name", null);
        if (name2 !== null) {
          name2 = this._names.at(name2);
        }
        return {
          source,
          line: util2.getArg(mapping, "originalLine", null),
          column: util2.getArg(mapping, "originalColumn", null),
          name: name2
        };
      }
    }
    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  };
  BasicSourceMapConsumer.prototype.hasContentsOfAllSources = function BasicSourceMapConsumer_hasContentsOfAllSources() {
    if (!this.sourcesContent) {
      return false;
    }
    return this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(sc) {
      return sc == null;
    });
  };
  BasicSourceMapConsumer.prototype.sourceContentFor = function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    if (!this.sourcesContent) {
      return null;
    }
    var index = this._findSourceIndex(aSource);
    if (index >= 0) {
      return this.sourcesContent[index];
    }
    var relativeSource = aSource;
    if (this.sourceRoot != null) {
      relativeSource = util2.relative(this.sourceRoot, relativeSource);
    }
    var url;
    if (this.sourceRoot != null && (url = util2.urlParse(this.sourceRoot))) {
      var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");
      if (url.scheme == "file" && this._sources.has(fileUriAbsPath)) {
        return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)];
      }
      if ((!url.path || url.path == "/") && this._sources.has("/" + relativeSource)) {
        return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
      }
    }
    if (nullOnMissing) {
      return null;
    } else {
      throw new Error('"' + relativeSource + '" is not in the SourceMap.');
    }
  };
  BasicSourceMapConsumer.prototype.generatedPositionFor = function SourceMapConsumer_generatedPositionFor(aArgs) {
    var source = util2.getArg(aArgs, "source");
    source = this._findSourceIndex(source);
    if (source < 0) {
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    }
    var needle = {
      source,
      originalLine: util2.getArg(aArgs, "line"),
      originalColumn: util2.getArg(aArgs, "column")
    };
    var index = this._findMapping(
      needle,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      util2.compareByOriginalPositions,
      util2.getArg(aArgs, "bias", SourceMapConsumer.GREATEST_LOWER_BOUND)
    );
    if (index >= 0) {
      var mapping = this._originalMappings[index];
      if (mapping.source === needle.source) {
        return {
          line: util2.getArg(mapping, "generatedLine", null),
          column: util2.getArg(mapping, "generatedColumn", null),
          lastColumn: util2.getArg(mapping, "lastGeneratedColumn", null)
        };
      }
    }
    return {
      line: null,
      column: null,
      lastColumn: null
    };
  };
  sourceMapConsumer.BasicSourceMapConsumer = BasicSourceMapConsumer;
  function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
    var sourceMap2 = aSourceMap;
    if (typeof aSourceMap === "string") {
      sourceMap2 = util2.parseSourceMapInput(aSourceMap);
    }
    var version2 = util2.getArg(sourceMap2, "version");
    var sections = util2.getArg(sourceMap2, "sections");
    if (version2 != this._version) {
      throw new Error("Unsupported version: " + version2);
    }
    this._sources = new ArraySet();
    this._names = new ArraySet();
    var lastOffset = {
      line: -1,
      column: 0
    };
    this._sections = sections.map(function(s) {
      if (s.url) {
        throw new Error("Support for url field in sections not implemented.");
      }
      var offset2 = util2.getArg(s, "offset");
      var offsetLine = util2.getArg(offset2, "line");
      var offsetColumn = util2.getArg(offset2, "column");
      if (offsetLine < lastOffset.line || offsetLine === lastOffset.line && offsetColumn < lastOffset.column) {
        throw new Error("Section offsets must be ordered and non-overlapping.");
      }
      lastOffset = offset2;
      return {
        generatedOffset: {
          // The offset fields are 0-based, but we use 1-based indices when
          // encoding/decoding from VLQ.
          generatedLine: offsetLine + 1,
          generatedColumn: offsetColumn + 1
        },
        consumer: new SourceMapConsumer(util2.getArg(s, "map"), aSourceMapURL)
      };
    });
  }
  IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
  IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;
  IndexedSourceMapConsumer.prototype._version = 3;
  Object.defineProperty(IndexedSourceMapConsumer.prototype, "sources", {
    get: function() {
      var sources = [];
      for (var i = 0; i < this._sections.length; i++) {
        for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
          sources.push(this._sections[i].consumer.sources[j]);
        }
      }
      return sources;
    }
  });
  IndexedSourceMapConsumer.prototype.originalPositionFor = function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util2.getArg(aArgs, "line"),
      generatedColumn: util2.getArg(aArgs, "column")
    };
    var sectionIndex = binarySearch2.search(
      needle,
      this._sections,
      function(needle2, section2) {
        var cmp = needle2.generatedLine - section2.generatedOffset.generatedLine;
        if (cmp) {
          return cmp;
        }
        return needle2.generatedColumn - section2.generatedOffset.generatedColumn;
      }
    );
    var section = this._sections[sectionIndex];
    if (!section) {
      return {
        source: null,
        line: null,
        column: null,
        name: null
      };
    }
    return section.consumer.originalPositionFor({
      line: needle.generatedLine - (section.generatedOffset.generatedLine - 1),
      column: needle.generatedColumn - (section.generatedOffset.generatedLine === needle.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
      bias: aArgs.bias
    });
  };
  IndexedSourceMapConsumer.prototype.hasContentsOfAllSources = function IndexedSourceMapConsumer_hasContentsOfAllSources() {
    return this._sections.every(function(s) {
      return s.consumer.hasContentsOfAllSources();
    });
  };
  IndexedSourceMapConsumer.prototype.sourceContentFor = function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];
      var content = section.consumer.sourceContentFor(aSource, true);
      if (content) {
        return content;
      }
    }
    if (nullOnMissing) {
      return null;
    } else {
      throw new Error('"' + aSource + '" is not in the SourceMap.');
    }
  };
  IndexedSourceMapConsumer.prototype.generatedPositionFor = function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];
      if (section.consumer._findSourceIndex(util2.getArg(aArgs, "source")) === -1) {
        continue;
      }
      var generatedPosition = section.consumer.generatedPositionFor(aArgs);
      if (generatedPosition) {
        var ret = {
          line: generatedPosition.line + (section.generatedOffset.generatedLine - 1),
          column: generatedPosition.column + (section.generatedOffset.generatedLine === generatedPosition.line ? section.generatedOffset.generatedColumn - 1 : 0)
        };
        return ret;
      }
    }
    return {
      line: null,
      column: null
    };
  };
  IndexedSourceMapConsumer.prototype._parseMappings = function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    this.__generatedMappings = [];
    this.__originalMappings = [];
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];
      var sectionMappings = section.consumer._generatedMappings;
      for (var j = 0; j < sectionMappings.length; j++) {
        var mapping = sectionMappings[j];
        var source = section.consumer._sources.at(mapping.source);
        source = util2.computeSourceURL(section.consumer.sourceRoot, source, this._sourceMapURL);
        this._sources.add(source);
        source = this._sources.indexOf(source);
        var name2 = null;
        if (mapping.name) {
          name2 = section.consumer._names.at(mapping.name);
          this._names.add(name2);
          name2 = this._names.indexOf(name2);
        }
        var adjustedMapping = {
          source,
          generatedLine: mapping.generatedLine + (section.generatedOffset.generatedLine - 1),
          generatedColumn: mapping.generatedColumn + (section.generatedOffset.generatedLine === mapping.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
          originalLine: mapping.originalLine,
          originalColumn: mapping.originalColumn,
          name: name2
        };
        this.__generatedMappings.push(adjustedMapping);
        if (typeof adjustedMapping.originalLine === "number") {
          this.__originalMappings.push(adjustedMapping);
        }
      }
    }
    quickSort2(this.__generatedMappings, util2.compareByGeneratedPositionsDeflated);
    quickSort2(this.__originalMappings, util2.compareByOriginalPositions);
  };
  sourceMapConsumer.IndexedSourceMapConsumer = IndexedSourceMapConsumer;
  return sourceMapConsumer;
}
var sourceNode = {};
var hasRequiredSourceNode;
function requireSourceNode() {
  if (hasRequiredSourceNode) return sourceNode;
  hasRequiredSourceNode = 1;
  var SourceMapGenerator = requireSourceMapGenerator().SourceMapGenerator;
  var util2 = requireUtil();
  var REGEX_NEWLINE = /(\r?\n)/;
  var NEWLINE_CODE = 10;
  var isSourceNode = "$$$isSourceNode$$$";
  function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
    this.children = [];
    this.sourceContents = {};
    this.line = aLine == null ? null : aLine;
    this.column = aColumn == null ? null : aColumn;
    this.source = aSource == null ? null : aSource;
    this.name = aName == null ? null : aName;
    this[isSourceNode] = true;
    if (aChunks != null) this.add(aChunks);
  }
  SourceNode.fromStringWithSourceMap = function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
    var node = new SourceNode();
    var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
    var remainingLinesIndex = 0;
    var shiftNextLine = function() {
      var lineContents = getNextLine();
      var newLine = getNextLine() || "";
      return lineContents + newLine;
      function getNextLine() {
        return remainingLinesIndex < remainingLines.length ? remainingLines[remainingLinesIndex++] : void 0;
      }
    };
    var lastGeneratedLine = 1, lastGeneratedColumn = 0;
    var lastMapping = null;
    aSourceMapConsumer.eachMapping(function(mapping) {
      if (lastMapping !== null) {
        if (lastGeneratedLine < mapping.generatedLine) {
          addMappingWithCode(lastMapping, shiftNextLine());
          lastGeneratedLine++;
          lastGeneratedColumn = 0;
        } else {
          var nextLine = remainingLines[remainingLinesIndex] || "";
          var code = nextLine.substr(0, mapping.generatedColumn - lastGeneratedColumn);
          remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn - lastGeneratedColumn);
          lastGeneratedColumn = mapping.generatedColumn;
          addMappingWithCode(lastMapping, code);
          lastMapping = mapping;
          return;
        }
      }
      while (lastGeneratedLine < mapping.generatedLine) {
        node.add(shiftNextLine());
        lastGeneratedLine++;
      }
      if (lastGeneratedColumn < mapping.generatedColumn) {
        var nextLine = remainingLines[remainingLinesIndex] || "";
        node.add(nextLine.substr(0, mapping.generatedColumn));
        remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn);
        lastGeneratedColumn = mapping.generatedColumn;
      }
      lastMapping = mapping;
    }, this);
    if (remainingLinesIndex < remainingLines.length) {
      if (lastMapping) {
        addMappingWithCode(lastMapping, shiftNextLine());
      }
      node.add(remainingLines.splice(remainingLinesIndex).join(""));
    }
    aSourceMapConsumer.sources.forEach(function(sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        if (aRelativePath != null) {
          sourceFile = util2.join(aRelativePath, sourceFile);
        }
        node.setSourceContent(sourceFile, content);
      }
    });
    return node;
    function addMappingWithCode(mapping, code) {
      if (mapping === null || mapping.source === void 0) {
        node.add(code);
      } else {
        var source = aRelativePath ? util2.join(aRelativePath, mapping.source) : mapping.source;
        node.add(new SourceNode(
          mapping.originalLine,
          mapping.originalColumn,
          source,
          code,
          mapping.name
        ));
      }
    }
  };
  SourceNode.prototype.add = function SourceNode_add(aChunk) {
    if (Array.isArray(aChunk)) {
      aChunk.forEach(function(chunk) {
        this.add(chunk);
      }, this);
    } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
      if (aChunk) {
        this.children.push(aChunk);
      }
    } else {
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
      );
    }
    return this;
  };
  SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
    if (Array.isArray(aChunk)) {
      for (var i = aChunk.length - 1; i >= 0; i--) {
        this.prepend(aChunk[i]);
      }
    } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
      this.children.unshift(aChunk);
    } else {
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
      );
    }
    return this;
  };
  SourceNode.prototype.walk = function SourceNode_walk(aFn) {
    var chunk;
    for (var i = 0, len = this.children.length; i < len; i++) {
      chunk = this.children[i];
      if (chunk[isSourceNode]) {
        chunk.walk(aFn);
      } else {
        if (chunk !== "") {
          aFn(chunk, {
            source: this.source,
            line: this.line,
            column: this.column,
            name: this.name
          });
        }
      }
    }
  };
  SourceNode.prototype.join = function SourceNode_join(aSep) {
    var newChildren;
    var i;
    var len = this.children.length;
    if (len > 0) {
      newChildren = [];
      for (i = 0; i < len - 1; i++) {
        newChildren.push(this.children[i]);
        newChildren.push(aSep);
      }
      newChildren.push(this.children[i]);
      this.children = newChildren;
    }
    return this;
  };
  SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
    var lastChild = this.children[this.children.length - 1];
    if (lastChild[isSourceNode]) {
      lastChild.replaceRight(aPattern, aReplacement);
    } else if (typeof lastChild === "string") {
      this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
    } else {
      this.children.push("".replace(aPattern, aReplacement));
    }
    return this;
  };
  SourceNode.prototype.setSourceContent = function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
    this.sourceContents[util2.toSetString(aSourceFile)] = aSourceContent;
  };
  SourceNode.prototype.walkSourceContents = function SourceNode_walkSourceContents(aFn) {
    for (var i = 0, len = this.children.length; i < len; i++) {
      if (this.children[i][isSourceNode]) {
        this.children[i].walkSourceContents(aFn);
      }
    }
    var sources = Object.keys(this.sourceContents);
    for (var i = 0, len = sources.length; i < len; i++) {
      aFn(util2.fromSetString(sources[i]), this.sourceContents[sources[i]]);
    }
  };
  SourceNode.prototype.toString = function SourceNode_toString() {
    var str = "";
    this.walk(function(chunk) {
      str += chunk;
    });
    return str;
  };
  SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
    var generated = {
      code: "",
      line: 1,
      column: 0
    };
    var map = new SourceMapGenerator(aArgs);
    var sourceMappingActive = false;
    var lastOriginalSource = null;
    var lastOriginalLine = null;
    var lastOriginalColumn = null;
    var lastOriginalName = null;
    this.walk(function(chunk, original) {
      generated.code += chunk;
      if (original.source !== null && original.line !== null && original.column !== null) {
        if (lastOriginalSource !== original.source || lastOriginalLine !== original.line || lastOriginalColumn !== original.column || lastOriginalName !== original.name) {
          map.addMapping({
            source: original.source,
            original: {
              line: original.line,
              column: original.column
            },
            generated: {
              line: generated.line,
              column: generated.column
            },
            name: original.name
          });
        }
        lastOriginalSource = original.source;
        lastOriginalLine = original.line;
        lastOriginalColumn = original.column;
        lastOriginalName = original.name;
        sourceMappingActive = true;
      } else if (sourceMappingActive) {
        map.addMapping({
          generated: {
            line: generated.line,
            column: generated.column
          }
        });
        lastOriginalSource = null;
        sourceMappingActive = false;
      }
      for (var idx = 0, length = chunk.length; idx < length; idx++) {
        if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
          generated.line++;
          generated.column = 0;
          if (idx + 1 === length) {
            lastOriginalSource = null;
            sourceMappingActive = false;
          } else if (sourceMappingActive) {
            map.addMapping({
              source: original.source,
              original: {
                line: original.line,
                column: original.column
              },
              generated: {
                line: generated.line,
                column: generated.column
              },
              name: original.name
            });
          }
        } else {
          generated.column++;
        }
      }
    });
    this.walkSourceContents(function(sourceFile, sourceContent) {
      map.setSourceContent(sourceFile, sourceContent);
    });
    return { code: generated.code, map };
  };
  sourceNode.SourceNode = SourceNode;
  return sourceNode;
}
var hasRequiredSourceMap;
function requireSourceMap() {
  if (hasRequiredSourceMap) return sourceMap;
  hasRequiredSourceMap = 1;
  sourceMap.SourceMapGenerator = requireSourceMapGenerator().SourceMapGenerator;
  sourceMap.SourceMapConsumer = requireSourceMapConsumer().SourceMapConsumer;
  sourceMap.SourceNode = requireSourceNode().SourceNode;
  return sourceMap;
}
const name = "escodegen";
const description = "ECMAScript code generator";
const homepage = "http://github.com/estools/escodegen";
const main = "escodegen.js";
const bin = {
  esgenerate: "./bin/esgenerate.js",
  escodegen: "./bin/escodegen.js"
};
const files = [
  "LICENSE.BSD",
  "README.md",
  "bin",
  "escodegen.js",
  "package.json"
];
const version$1 = "2.1.0";
const engines = {
  node: ">=6.0"
};
const maintainers = [
  {
    name: "Yusuke Suzuki",
    email: "utatane.tea@gmail.com",
    web: "http://github.com/Constellation"
  }
];
const repository = {
  type: "git",
  url: "http://github.com/estools/escodegen.git"
};
const dependencies = {
  estraverse: "^5.2.0",
  esutils: "^2.0.2",
  esprima: "^4.0.1"
};
const optionalDependencies = {
  "source-map": "~0.6.1"
};
const devDependencies = {
  acorn: "^8.0.4",
  bluebird: "^3.4.7",
  "bower-registry-client": "^1.0.0",
  chai: "^4.2.0",
  "chai-exclude": "^2.0.2",
  "commonjs-everywhere": "^0.9.7",
  gulp: "^4.0.2",
  "gulp-eslint": "^6.0.0",
  "gulp-mocha": "^7.0.2",
  minimist: "^1.2.5",
  optionator: "^0.9.1",
  semver: "^7.3.4"
};
const license = "BSD-2-Clause";
const scripts = {
  test: "gulp travis",
  "unit-test": "gulp test",
  lint: "gulp lint",
  release: "node tools/release.js",
  "build-min": "./node_modules/.bin/cjsify -ma path: tools/entry-point.js > escodegen.browser.min.js",
  build: "./node_modules/.bin/cjsify -a path: tools/entry-point.js > escodegen.browser.js"
};
const require$$3 = {
  name,
  description,
  homepage,
  main,
  bin,
  files,
  version: version$1,
  engines,
  maintainers,
  repository,
  dependencies,
  optionalDependencies,
  devDependencies,
  license,
  scripts
};
(function(exports) {
  (function() {
    var Syntax, Precedence, BinaryPrecedence, SourceNode, estraverse$1, esutils, base2, indent, json, renumber, hexadecimal, quotes, escapeless, newline, space, parentheses, semicolons, safeConcatenation, directive, extra, parse4, sourceMap2, sourceCode, preserveBlankLines, FORMAT_MINIFY, FORMAT_DEFAULTS;
    estraverse$1 = estraverse;
    esutils = utils;
    Syntax = estraverse$1.Syntax;
    function isExpression(node) {
      return CodeGenerator.Expression.hasOwnProperty(node.type);
    }
    function isStatement(node) {
      return CodeGenerator.Statement.hasOwnProperty(node.type);
    }
    Precedence = {
      Sequence: 0,
      Yield: 1,
      Assignment: 1,
      Conditional: 2,
      ArrowFunction: 2,
      Coalesce: 3,
      LogicalOR: 4,
      LogicalAND: 5,
      BitwiseOR: 6,
      BitwiseXOR: 7,
      BitwiseAND: 8,
      Equality: 9,
      Relational: 10,
      BitwiseSHIFT: 11,
      Additive: 12,
      Multiplicative: 13,
      Exponentiation: 14,
      Await: 15,
      Unary: 15,
      Postfix: 16,
      OptionalChaining: 17,
      Call: 18,
      New: 19,
      TaggedTemplate: 20,
      Member: 21,
      Primary: 22
    };
    BinaryPrecedence = {
      "??": Precedence.Coalesce,
      "||": Precedence.LogicalOR,
      "&&": Precedence.LogicalAND,
      "|": Precedence.BitwiseOR,
      "^": Precedence.BitwiseXOR,
      "&": Precedence.BitwiseAND,
      "==": Precedence.Equality,
      "!=": Precedence.Equality,
      "===": Precedence.Equality,
      "!==": Precedence.Equality,
      "is": Precedence.Equality,
      "isnt": Precedence.Equality,
      "<": Precedence.Relational,
      ">": Precedence.Relational,
      "<=": Precedence.Relational,
      ">=": Precedence.Relational,
      "in": Precedence.Relational,
      "instanceof": Precedence.Relational,
      "<<": Precedence.BitwiseSHIFT,
      ">>": Precedence.BitwiseSHIFT,
      ">>>": Precedence.BitwiseSHIFT,
      "+": Precedence.Additive,
      "-": Precedence.Additive,
      "*": Precedence.Multiplicative,
      "%": Precedence.Multiplicative,
      "/": Precedence.Multiplicative,
      "**": Precedence.Exponentiation
    };
    var F_ALLOW_IN = 1, F_ALLOW_CALL = 1 << 1, F_ALLOW_UNPARATH_NEW = 1 << 2, F_FUNC_BODY = 1 << 3, F_DIRECTIVE_CTX = 1 << 4, F_SEMICOLON_OPT = 1 << 5, F_FOUND_COALESCE = 1 << 6;
    var E_FTT = F_ALLOW_CALL | F_ALLOW_UNPARATH_NEW, E_TTF = F_ALLOW_IN | F_ALLOW_CALL, E_TTT = F_ALLOW_IN | F_ALLOW_CALL | F_ALLOW_UNPARATH_NEW, E_TFF = F_ALLOW_IN, E_FFT = F_ALLOW_UNPARATH_NEW, E_TFT = F_ALLOW_IN | F_ALLOW_UNPARATH_NEW;
    var S_TFFF = F_ALLOW_IN, S_TFFT = F_ALLOW_IN | F_SEMICOLON_OPT, S_FFFF = 0, S_TFTF = F_ALLOW_IN | F_DIRECTIVE_CTX, S_TTFF = F_ALLOW_IN | F_FUNC_BODY;
    function getDefaultOptions() {
      return {
        indent: null,
        base: null,
        parse: null,
        comment: false,
        format: {
          indent: {
            style: "    ",
            base: 0,
            adjustMultilineComment: false
          },
          newline: "\n",
          space: " ",
          json: false,
          renumber: false,
          hexadecimal: false,
          quotes: "single",
          escapeless: false,
          compact: false,
          parentheses: true,
          semicolons: true,
          safeConcatenation: false,
          preserveBlankLines: false
        },
        moz: {
          comprehensionExpressionStartsWithAssignment: false,
          starlessGenerator: false
        },
        sourceMap: null,
        sourceMapRoot: null,
        sourceMapWithCode: false,
        directive: false,
        raw: true,
        verbatim: null,
        sourceCode: null
      };
    }
    function stringRepeat(str, num) {
      var result = "";
      for (num |= 0; num > 0; num >>>= 1, str += str) {
        if (num & 1) {
          result += str;
        }
      }
      return result;
    }
    function hasLineTerminator(str) {
      return /[\r\n]/g.test(str);
    }
    function endsWithLineTerminator(str) {
      var len = str.length;
      return len && esutils.code.isLineTerminator(str.charCodeAt(len - 1));
    }
    function merge(target, override) {
      var key;
      for (key in override) {
        if (override.hasOwnProperty(key)) {
          target[key] = override[key];
        }
      }
      return target;
    }
    function updateDeeply(target, override) {
      var key, val;
      function isHashObject(target2) {
        return typeof target2 === "object" && target2 instanceof Object && !(target2 instanceof RegExp);
      }
      for (key in override) {
        if (override.hasOwnProperty(key)) {
          val = override[key];
          if (isHashObject(val)) {
            if (isHashObject(target[key])) {
              updateDeeply(target[key], val);
            } else {
              target[key] = updateDeeply({}, val);
            }
          } else {
            target[key] = val;
          }
        }
      }
      return target;
    }
    function generateNumber(value) {
      var result, point, temp, exponent, pos;
      if (value !== value) {
        throw new Error("Numeric literal whose value is NaN");
      }
      if (value < 0 || value === 0 && 1 / value < 0) {
        throw new Error("Numeric literal whose value is negative");
      }
      if (value === 1 / 0) {
        return json ? "null" : renumber ? "1e400" : "1e+400";
      }
      result = "" + value;
      if (!renumber || result.length < 3) {
        return result;
      }
      point = result.indexOf(".");
      if (!json && result.charCodeAt(0) === 48 && point === 1) {
        point = 0;
        result = result.slice(1);
      }
      temp = result;
      result = result.replace("e+", "e");
      exponent = 0;
      if ((pos = temp.indexOf("e")) > 0) {
        exponent = +temp.slice(pos + 1);
        temp = temp.slice(0, pos);
      }
      if (point >= 0) {
        exponent -= temp.length - point - 1;
        temp = +(temp.slice(0, point) + temp.slice(point + 1)) + "";
      }
      pos = 0;
      while (temp.charCodeAt(temp.length + pos - 1) === 48) {
        --pos;
      }
      if (pos !== 0) {
        exponent -= pos;
        temp = temp.slice(0, pos);
      }
      if (exponent !== 0) {
        temp += "e" + exponent;
      }
      if ((temp.length < result.length || hexadecimal && value > 1e12 && Math.floor(value) === value && (temp = "0x" + value.toString(16)).length < result.length) && +temp === value) {
        result = temp;
      }
      return result;
    }
    function escapeRegExpCharacter(ch, previousIsBackslash) {
      if ((ch & ~1) === 8232) {
        return (previousIsBackslash ? "u" : "\\u") + (ch === 8232 ? "2028" : "2029");
      } else if (ch === 10 || ch === 13) {
        return (previousIsBackslash ? "" : "\\") + (ch === 10 ? "n" : "r");
      }
      return String.fromCharCode(ch);
    }
    function generateRegExp(reg) {
      var match, result, flags, i, iz, ch, characterInBrack, previousIsBackslash;
      result = reg.toString();
      if (reg.source) {
        match = result.match(/\/([^/]*)$/);
        if (!match) {
          return result;
        }
        flags = match[1];
        result = "";
        characterInBrack = false;
        previousIsBackslash = false;
        for (i = 0, iz = reg.source.length; i < iz; ++i) {
          ch = reg.source.charCodeAt(i);
          if (!previousIsBackslash) {
            if (characterInBrack) {
              if (ch === 93) {
                characterInBrack = false;
              }
            } else {
              if (ch === 47) {
                result += "\\";
              } else if (ch === 91) {
                characterInBrack = true;
              }
            }
            result += escapeRegExpCharacter(ch, previousIsBackslash);
            previousIsBackslash = ch === 92;
          } else {
            result += escapeRegExpCharacter(ch, previousIsBackslash);
            previousIsBackslash = false;
          }
        }
        return "/" + result + "/" + flags;
      }
      return result;
    }
    function escapeAllowedCharacter(code, next) {
      var hex;
      if (code === 8) {
        return "\\b";
      }
      if (code === 12) {
        return "\\f";
      }
      if (code === 9) {
        return "\\t";
      }
      hex = code.toString(16).toUpperCase();
      if (json || code > 255) {
        return "\\u" + "0000".slice(hex.length) + hex;
      } else if (code === 0 && !esutils.code.isDecimalDigit(next)) {
        return "\\0";
      } else if (code === 11) {
        return "\\x0B";
      } else {
        return "\\x" + "00".slice(hex.length) + hex;
      }
    }
    function escapeDisallowedCharacter(code) {
      if (code === 92) {
        return "\\\\";
      }
      if (code === 10) {
        return "\\n";
      }
      if (code === 13) {
        return "\\r";
      }
      if (code === 8232) {
        return "\\u2028";
      }
      if (code === 8233) {
        return "\\u2029";
      }
      throw new Error("Incorrectly classified character");
    }
    function escapeDirective(str) {
      var i, iz, code, quote;
      quote = quotes === "double" ? '"' : "'";
      for (i = 0, iz = str.length; i < iz; ++i) {
        code = str.charCodeAt(i);
        if (code === 39) {
          quote = '"';
          break;
        } else if (code === 34) {
          quote = "'";
          break;
        } else if (code === 92) {
          ++i;
        }
      }
      return quote + str + quote;
    }
    function escapeString(str) {
      var result = "", i, len, code, singleQuotes = 0, doubleQuotes = 0, single, quote;
      for (i = 0, len = str.length; i < len; ++i) {
        code = str.charCodeAt(i);
        if (code === 39) {
          ++singleQuotes;
        } else if (code === 34) {
          ++doubleQuotes;
        } else if (code === 47 && json) {
          result += "\\";
        } else if (esutils.code.isLineTerminator(code) || code === 92) {
          result += escapeDisallowedCharacter(code);
          continue;
        } else if (!esutils.code.isIdentifierPartES5(code) && (json && code < 32 || !json && !escapeless && (code < 32 || code > 126))) {
          result += escapeAllowedCharacter(code, str.charCodeAt(i + 1));
          continue;
        }
        result += String.fromCharCode(code);
      }
      single = !(quotes === "double" || quotes === "auto" && doubleQuotes < singleQuotes);
      quote = single ? "'" : '"';
      if (!(single ? singleQuotes : doubleQuotes)) {
        return quote + result + quote;
      }
      str = result;
      result = quote;
      for (i = 0, len = str.length; i < len; ++i) {
        code = str.charCodeAt(i);
        if (code === 39 && single || code === 34 && !single) {
          result += "\\";
        }
        result += String.fromCharCode(code);
      }
      return result + quote;
    }
    function flattenToString(arr) {
      var i, iz, elem, result = "";
      for (i = 0, iz = arr.length; i < iz; ++i) {
        elem = arr[i];
        result += Array.isArray(elem) ? flattenToString(elem) : elem;
      }
      return result;
    }
    function toSourceNodeWhenNeeded(generated, node) {
      if (!sourceMap2) {
        if (Array.isArray(generated)) {
          return flattenToString(generated);
        } else {
          return generated;
        }
      }
      if (node == null) {
        if (generated instanceof SourceNode) {
          return generated;
        } else {
          node = {};
        }
      }
      if (node.loc == null) {
        return new SourceNode(null, null, sourceMap2, generated, node.name || null);
      }
      return new SourceNode(node.loc.start.line, node.loc.start.column, sourceMap2 === true ? node.loc.source || null : sourceMap2, generated, node.name || null);
    }
    function noEmptySpace() {
      return space ? space : " ";
    }
    function join(left, right) {
      var leftSource, rightSource, leftCharCode, rightCharCode;
      leftSource = toSourceNodeWhenNeeded(left).toString();
      if (leftSource.length === 0) {
        return [right];
      }
      rightSource = toSourceNodeWhenNeeded(right).toString();
      if (rightSource.length === 0) {
        return [left];
      }
      leftCharCode = leftSource.charCodeAt(leftSource.length - 1);
      rightCharCode = rightSource.charCodeAt(0);
      if ((leftCharCode === 43 || leftCharCode === 45) && leftCharCode === rightCharCode || esutils.code.isIdentifierPartES5(leftCharCode) && esutils.code.isIdentifierPartES5(rightCharCode) || leftCharCode === 47 && rightCharCode === 105) {
        return [left, noEmptySpace(), right];
      } else if (esutils.code.isWhiteSpace(leftCharCode) || esutils.code.isLineTerminator(leftCharCode) || esutils.code.isWhiteSpace(rightCharCode) || esutils.code.isLineTerminator(rightCharCode)) {
        return [left, right];
      }
      return [left, space, right];
    }
    function addIndent(stmt) {
      return [base2, stmt];
    }
    function withIndent(fn) {
      var previousBase;
      previousBase = base2;
      base2 += indent;
      fn(base2);
      base2 = previousBase;
    }
    function calculateSpaces(str) {
      var i;
      for (i = str.length - 1; i >= 0; --i) {
        if (esutils.code.isLineTerminator(str.charCodeAt(i))) {
          break;
        }
      }
      return str.length - 1 - i;
    }
    function adjustMultilineComment(value, specialBase) {
      var array, i, len, line, j, spaces, previousBase, sn;
      array = value.split(/\r\n|[\r\n]/);
      spaces = Number.MAX_VALUE;
      for (i = 1, len = array.length; i < len; ++i) {
        line = array[i];
        j = 0;
        while (j < line.length && esutils.code.isWhiteSpace(line.charCodeAt(j))) {
          ++j;
        }
        if (spaces > j) {
          spaces = j;
        }
      }
      if (typeof specialBase !== "undefined") {
        previousBase = base2;
        if (array[1][spaces] === "*") {
          specialBase += " ";
        }
        base2 = specialBase;
      } else {
        if (spaces & 1) {
          --spaces;
        }
        previousBase = base2;
      }
      for (i = 1, len = array.length; i < len; ++i) {
        sn = toSourceNodeWhenNeeded(addIndent(array[i].slice(spaces)));
        array[i] = sourceMap2 ? sn.join("") : sn;
      }
      base2 = previousBase;
      return array.join("\n");
    }
    function generateComment(comment, specialBase) {
      if (comment.type === "Line") {
        if (endsWithLineTerminator(comment.value)) {
          return "//" + comment.value;
        } else {
          var result = "//" + comment.value;
          if (!preserveBlankLines) {
            result += "\n";
          }
          return result;
        }
      }
      if (extra.format.indent.adjustMultilineComment && /[\n\r]/.test(comment.value)) {
        return adjustMultilineComment("/*" + comment.value + "*/", specialBase);
      }
      return "/*" + comment.value + "*/";
    }
    function addComments(stmt, result) {
      var i, len, comment, save, tailingToStatement, specialBase, fragment, extRange, range, prevRange, prefix, infix, suffix, count;
      if (stmt.leadingComments && stmt.leadingComments.length > 0) {
        save = result;
        if (preserveBlankLines) {
          comment = stmt.leadingComments[0];
          result = [];
          extRange = comment.extendedRange;
          range = comment.range;
          prefix = sourceCode.substring(extRange[0], range[0]);
          count = (prefix.match(/\n/g) || []).length;
          if (count > 0) {
            result.push(stringRepeat("\n", count));
            result.push(addIndent(generateComment(comment)));
          } else {
            result.push(prefix);
            result.push(generateComment(comment));
          }
          prevRange = range;
          for (i = 1, len = stmt.leadingComments.length; i < len; i++) {
            comment = stmt.leadingComments[i];
            range = comment.range;
            infix = sourceCode.substring(prevRange[1], range[0]);
            count = (infix.match(/\n/g) || []).length;
            result.push(stringRepeat("\n", count));
            result.push(addIndent(generateComment(comment)));
            prevRange = range;
          }
          suffix = sourceCode.substring(range[1], extRange[1]);
          count = (suffix.match(/\n/g) || []).length;
          result.push(stringRepeat("\n", count));
        } else {
          comment = stmt.leadingComments[0];
          result = [];
          if (safeConcatenation && stmt.type === Syntax.Program && stmt.body.length === 0) {
            result.push("\n");
          }
          result.push(generateComment(comment));
          if (!endsWithLineTerminator(toSourceNodeWhenNeeded(result).toString())) {
            result.push("\n");
          }
          for (i = 1, len = stmt.leadingComments.length; i < len; ++i) {
            comment = stmt.leadingComments[i];
            fragment = [generateComment(comment)];
            if (!endsWithLineTerminator(toSourceNodeWhenNeeded(fragment).toString())) {
              fragment.push("\n");
            }
            result.push(addIndent(fragment));
          }
        }
        result.push(addIndent(save));
      }
      if (stmt.trailingComments) {
        if (preserveBlankLines) {
          comment = stmt.trailingComments[0];
          extRange = comment.extendedRange;
          range = comment.range;
          prefix = sourceCode.substring(extRange[0], range[0]);
          count = (prefix.match(/\n/g) || []).length;
          if (count > 0) {
            result.push(stringRepeat("\n", count));
            result.push(addIndent(generateComment(comment)));
          } else {
            result.push(prefix);
            result.push(generateComment(comment));
          }
        } else {
          tailingToStatement = !endsWithLineTerminator(toSourceNodeWhenNeeded(result).toString());
          specialBase = stringRepeat(" ", calculateSpaces(toSourceNodeWhenNeeded([base2, result, indent]).toString()));
          for (i = 0, len = stmt.trailingComments.length; i < len; ++i) {
            comment = stmt.trailingComments[i];
            if (tailingToStatement) {
              if (i === 0) {
                result = [result, indent];
              } else {
                result = [result, specialBase];
              }
              result.push(generateComment(comment, specialBase));
            } else {
              result = [result, addIndent(generateComment(comment))];
            }
            if (i !== len - 1 && !endsWithLineTerminator(toSourceNodeWhenNeeded(result).toString())) {
              result = [result, "\n"];
            }
          }
        }
      }
      return result;
    }
    function generateBlankLines(start, end, result) {
      var j, newlineCount = 0;
      for (j = start; j < end; j++) {
        if (sourceCode[j] === "\n") {
          newlineCount++;
        }
      }
      for (j = 1; j < newlineCount; j++) {
        result.push(newline);
      }
    }
    function parenthesize(text, current2, should) {
      if (current2 < should) {
        return ["(", text, ")"];
      }
      return text;
    }
    function generateVerbatimString(string) {
      var i, iz, result;
      result = string.split(/\r\n|\n/);
      for (i = 1, iz = result.length; i < iz; i++) {
        result[i] = newline + base2 + result[i];
      }
      return result;
    }
    function generateVerbatim(expr, precedence) {
      var verbatim, result, prec;
      verbatim = expr[extra.verbatim];
      if (typeof verbatim === "string") {
        result = parenthesize(generateVerbatimString(verbatim), Precedence.Sequence, precedence);
      } else {
        result = generateVerbatimString(verbatim.content);
        prec = verbatim.precedence != null ? verbatim.precedence : Precedence.Sequence;
        result = parenthesize(result, prec, precedence);
      }
      return toSourceNodeWhenNeeded(result, expr);
    }
    function CodeGenerator() {
    }
    CodeGenerator.prototype.maybeBlock = function(stmt, flags) {
      var result, noLeadingComment, that = this;
      noLeadingComment = !extra.comment || !stmt.leadingComments;
      if (stmt.type === Syntax.BlockStatement && noLeadingComment) {
        return [space, this.generateStatement(stmt, flags)];
      }
      if (stmt.type === Syntax.EmptyStatement && noLeadingComment) {
        return ";";
      }
      withIndent(function() {
        result = [
          newline,
          addIndent(that.generateStatement(stmt, flags))
        ];
      });
      return result;
    };
    CodeGenerator.prototype.maybeBlockSuffix = function(stmt, result) {
      var ends = endsWithLineTerminator(toSourceNodeWhenNeeded(result).toString());
      if (stmt.type === Syntax.BlockStatement && (!extra.comment || !stmt.leadingComments) && !ends) {
        return [result, space];
      }
      if (ends) {
        return [result, base2];
      }
      return [result, newline, base2];
    };
    function generateIdentifier(node) {
      return toSourceNodeWhenNeeded(node.name, node);
    }
    function generateAsyncPrefix(node, spaceRequired) {
      return node.async ? "async" + (spaceRequired ? noEmptySpace() : space) : "";
    }
    function generateStarSuffix(node) {
      var isGenerator = node.generator && !extra.moz.starlessGenerator;
      return isGenerator ? "*" + space : "";
    }
    function generateMethodPrefix(prop) {
      var func = prop.value, prefix = "";
      if (func.async) {
        prefix += generateAsyncPrefix(func, !prop.computed);
      }
      if (func.generator) {
        prefix += generateStarSuffix(func) ? "*" : "";
      }
      return prefix;
    }
    CodeGenerator.prototype.generatePattern = function(node, precedence, flags) {
      if (node.type === Syntax.Identifier) {
        return generateIdentifier(node);
      }
      return this.generateExpression(node, precedence, flags);
    };
    CodeGenerator.prototype.generateFunctionParams = function(node) {
      var i, iz, result, hasDefault;
      hasDefault = false;
      if (node.type === Syntax.ArrowFunctionExpression && !node.rest && (!node.defaults || node.defaults.length === 0) && node.params.length === 1 && node.params[0].type === Syntax.Identifier) {
        result = [generateAsyncPrefix(node, true), generateIdentifier(node.params[0])];
      } else {
        result = node.type === Syntax.ArrowFunctionExpression ? [generateAsyncPrefix(node, false)] : [];
        result.push("(");
        if (node.defaults) {
          hasDefault = true;
        }
        for (i = 0, iz = node.params.length; i < iz; ++i) {
          if (hasDefault && node.defaults[i]) {
            result.push(this.generateAssignment(node.params[i], node.defaults[i], "=", Precedence.Assignment, E_TTT));
          } else {
            result.push(this.generatePattern(node.params[i], Precedence.Assignment, E_TTT));
          }
          if (i + 1 < iz) {
            result.push("," + space);
          }
        }
        if (node.rest) {
          if (node.params.length) {
            result.push("," + space);
          }
          result.push("...");
          result.push(generateIdentifier(node.rest));
        }
        result.push(")");
      }
      return result;
    };
    CodeGenerator.prototype.generateFunctionBody = function(node) {
      var result, expr;
      result = this.generateFunctionParams(node);
      if (node.type === Syntax.ArrowFunctionExpression) {
        result.push(space);
        result.push("=>");
      }
      if (node.expression) {
        result.push(space);
        expr = this.generateExpression(node.body, Precedence.Assignment, E_TTT);
        if (expr.toString().charAt(0) === "{") {
          expr = ["(", expr, ")"];
        }
        result.push(expr);
      } else {
        result.push(this.maybeBlock(node.body, S_TTFF));
      }
      return result;
    };
    CodeGenerator.prototype.generateIterationForStatement = function(operator, stmt, flags) {
      var result = ["for" + (stmt.await ? noEmptySpace() + "await" : "") + space + "("], that = this;
      withIndent(function() {
        if (stmt.left.type === Syntax.VariableDeclaration) {
          withIndent(function() {
            result.push(stmt.left.kind + noEmptySpace());
            result.push(that.generateStatement(stmt.left.declarations[0], S_FFFF));
          });
        } else {
          result.push(that.generateExpression(stmt.left, Precedence.Call, E_TTT));
        }
        result = join(result, operator);
        result = [join(
          result,
          that.generateExpression(stmt.right, Precedence.Assignment, E_TTT)
        ), ")"];
      });
      result.push(this.maybeBlock(stmt.body, flags));
      return result;
    };
    CodeGenerator.prototype.generatePropertyKey = function(expr, computed) {
      var result = [];
      if (computed) {
        result.push("[");
      }
      result.push(this.generateExpression(expr, Precedence.Assignment, E_TTT));
      if (computed) {
        result.push("]");
      }
      return result;
    };
    CodeGenerator.prototype.generateAssignment = function(left, right, operator, precedence, flags) {
      if (Precedence.Assignment < precedence) {
        flags |= F_ALLOW_IN;
      }
      return parenthesize(
        [
          this.generateExpression(left, Precedence.Call, flags),
          space + operator + space,
          this.generateExpression(right, Precedence.Assignment, flags)
        ],
        Precedence.Assignment,
        precedence
      );
    };
    CodeGenerator.prototype.semicolon = function(flags) {
      if (!semicolons && flags & F_SEMICOLON_OPT) {
        return "";
      }
      return ";";
    };
    CodeGenerator.Statement = {
      BlockStatement: function(stmt, flags) {
        var range, content, result = ["{", newline], that = this;
        withIndent(function() {
          if (stmt.body.length === 0 && preserveBlankLines) {
            range = stmt.range;
            if (range[1] - range[0] > 2) {
              content = sourceCode.substring(range[0] + 1, range[1] - 1);
              if (content[0] === "\n") {
                result = ["{"];
              }
              result.push(content);
            }
          }
          var i, iz, fragment, bodyFlags;
          bodyFlags = S_TFFF;
          if (flags & F_FUNC_BODY) {
            bodyFlags |= F_DIRECTIVE_CTX;
          }
          for (i = 0, iz = stmt.body.length; i < iz; ++i) {
            if (preserveBlankLines) {
              if (i === 0) {
                if (stmt.body[0].leadingComments) {
                  range = stmt.body[0].leadingComments[0].extendedRange;
                  content = sourceCode.substring(range[0], range[1]);
                  if (content[0] === "\n") {
                    result = ["{"];
                  }
                }
                if (!stmt.body[0].leadingComments) {
                  generateBlankLines(stmt.range[0], stmt.body[0].range[0], result);
                }
              }
              if (i > 0) {
                if (!stmt.body[i - 1].trailingComments && !stmt.body[i].leadingComments) {
                  generateBlankLines(stmt.body[i - 1].range[1], stmt.body[i].range[0], result);
                }
              }
            }
            if (i === iz - 1) {
              bodyFlags |= F_SEMICOLON_OPT;
            }
            if (stmt.body[i].leadingComments && preserveBlankLines) {
              fragment = that.generateStatement(stmt.body[i], bodyFlags);
            } else {
              fragment = addIndent(that.generateStatement(stmt.body[i], bodyFlags));
            }
            result.push(fragment);
            if (!endsWithLineTerminator(toSourceNodeWhenNeeded(fragment).toString())) {
              if (preserveBlankLines && i < iz - 1) {
                if (!stmt.body[i + 1].leadingComments) {
                  result.push(newline);
                }
              } else {
                result.push(newline);
              }
            }
            if (preserveBlankLines) {
              if (i === iz - 1) {
                if (!stmt.body[i].trailingComments) {
                  generateBlankLines(stmt.body[i].range[1], stmt.range[1], result);
                }
              }
            }
          }
        });
        result.push(addIndent("}"));
        return result;
      },
      BreakStatement: function(stmt, flags) {
        if (stmt.label) {
          return "break " + stmt.label.name + this.semicolon(flags);
        }
        return "break" + this.semicolon(flags);
      },
      ContinueStatement: function(stmt, flags) {
        if (stmt.label) {
          return "continue " + stmt.label.name + this.semicolon(flags);
        }
        return "continue" + this.semicolon(flags);
      },
      ClassBody: function(stmt, flags) {
        var result = ["{", newline], that = this;
        withIndent(function(indent2) {
          var i, iz;
          for (i = 0, iz = stmt.body.length; i < iz; ++i) {
            result.push(indent2);
            result.push(that.generateExpression(stmt.body[i], Precedence.Sequence, E_TTT));
            if (i + 1 < iz) {
              result.push(newline);
            }
          }
        });
        if (!endsWithLineTerminator(toSourceNodeWhenNeeded(result).toString())) {
          result.push(newline);
        }
        result.push(base2);
        result.push("}");
        return result;
      },
      ClassDeclaration: function(stmt, flags) {
        var result, fragment;
        result = ["class"];
        if (stmt.id) {
          result = join(result, this.generateExpression(stmt.id, Precedence.Sequence, E_TTT));
        }
        if (stmt.superClass) {
          fragment = join("extends", this.generateExpression(stmt.superClass, Precedence.Unary, E_TTT));
          result = join(result, fragment);
        }
        result.push(space);
        result.push(this.generateStatement(stmt.body, S_TFFT));
        return result;
      },
      DirectiveStatement: function(stmt, flags) {
        if (extra.raw && stmt.raw) {
          return stmt.raw + this.semicolon(flags);
        }
        return escapeDirective(stmt.directive) + this.semicolon(flags);
      },
      DoWhileStatement: function(stmt, flags) {
        var result = join("do", this.maybeBlock(stmt.body, S_TFFF));
        result = this.maybeBlockSuffix(stmt.body, result);
        return join(result, [
          "while" + space + "(",
          this.generateExpression(stmt.test, Precedence.Sequence, E_TTT),
          ")" + this.semicolon(flags)
        ]);
      },
      CatchClause: function(stmt, flags) {
        var result, that = this;
        withIndent(function() {
          var guard;
          if (stmt.param) {
            result = [
              "catch" + space + "(",
              that.generateExpression(stmt.param, Precedence.Sequence, E_TTT),
              ")"
            ];
            if (stmt.guard) {
              guard = that.generateExpression(stmt.guard, Precedence.Sequence, E_TTT);
              result.splice(2, 0, " if ", guard);
            }
          } else {
            result = ["catch"];
          }
        });
        result.push(this.maybeBlock(stmt.body, S_TFFF));
        return result;
      },
      DebuggerStatement: function(stmt, flags) {
        return "debugger" + this.semicolon(flags);
      },
      EmptyStatement: function(stmt, flags) {
        return ";";
      },
      ExportDefaultDeclaration: function(stmt, flags) {
        var result = ["export"], bodyFlags;
        bodyFlags = flags & F_SEMICOLON_OPT ? S_TFFT : S_TFFF;
        result = join(result, "default");
        if (isStatement(stmt.declaration)) {
          result = join(result, this.generateStatement(stmt.declaration, bodyFlags));
        } else {
          result = join(result, this.generateExpression(stmt.declaration, Precedence.Assignment, E_TTT) + this.semicolon(flags));
        }
        return result;
      },
      ExportNamedDeclaration: function(stmt, flags) {
        var result = ["export"], bodyFlags, that = this;
        bodyFlags = flags & F_SEMICOLON_OPT ? S_TFFT : S_TFFF;
        if (stmt.declaration) {
          return join(result, this.generateStatement(stmt.declaration, bodyFlags));
        }
        if (stmt.specifiers) {
          if (stmt.specifiers.length === 0) {
            result = join(result, "{" + space + "}");
          } else if (stmt.specifiers[0].type === Syntax.ExportBatchSpecifier) {
            result = join(result, this.generateExpression(stmt.specifiers[0], Precedence.Sequence, E_TTT));
          } else {
            result = join(result, "{");
            withIndent(function(indent2) {
              var i, iz;
              result.push(newline);
              for (i = 0, iz = stmt.specifiers.length; i < iz; ++i) {
                result.push(indent2);
                result.push(that.generateExpression(stmt.specifiers[i], Precedence.Sequence, E_TTT));
                if (i + 1 < iz) {
                  result.push("," + newline);
                }
              }
            });
            if (!endsWithLineTerminator(toSourceNodeWhenNeeded(result).toString())) {
              result.push(newline);
            }
            result.push(base2 + "}");
          }
          if (stmt.source) {
            result = join(result, [
              "from" + space,
              // ModuleSpecifier
              this.generateExpression(stmt.source, Precedence.Sequence, E_TTT),
              this.semicolon(flags)
            ]);
          } else {
            result.push(this.semicolon(flags));
          }
        }
        return result;
      },
      ExportAllDeclaration: function(stmt, flags) {
        return [
          "export" + space,
          "*" + space,
          "from" + space,
          // ModuleSpecifier
          this.generateExpression(stmt.source, Precedence.Sequence, E_TTT),
          this.semicolon(flags)
        ];
      },
      ExpressionStatement: function(stmt, flags) {
        var result, fragment;
        function isClassPrefixed(fragment2) {
          var code;
          if (fragment2.slice(0, 5) !== "class") {
            return false;
          }
          code = fragment2.charCodeAt(5);
          return code === 123 || esutils.code.isWhiteSpace(code) || esutils.code.isLineTerminator(code);
        }
        function isFunctionPrefixed(fragment2) {
          var code;
          if (fragment2.slice(0, 8) !== "function") {
            return false;
          }
          code = fragment2.charCodeAt(8);
          return code === 40 || esutils.code.isWhiteSpace(code) || code === 42 || esutils.code.isLineTerminator(code);
        }
        function isAsyncPrefixed(fragment2) {
          var code, i, iz;
          if (fragment2.slice(0, 5) !== "async") {
            return false;
          }
          if (!esutils.code.isWhiteSpace(fragment2.charCodeAt(5))) {
            return false;
          }
          for (i = 6, iz = fragment2.length; i < iz; ++i) {
            if (!esutils.code.isWhiteSpace(fragment2.charCodeAt(i))) {
              break;
            }
          }
          if (i === iz) {
            return false;
          }
          if (fragment2.slice(i, i + 8) !== "function") {
            return false;
          }
          code = fragment2.charCodeAt(i + 8);
          return code === 40 || esutils.code.isWhiteSpace(code) || code === 42 || esutils.code.isLineTerminator(code);
        }
        result = [this.generateExpression(stmt.expression, Precedence.Sequence, E_TTT)];
        fragment = toSourceNodeWhenNeeded(result).toString();
        if (fragment.charCodeAt(0) === 123 || // ObjectExpression
        isClassPrefixed(fragment) || isFunctionPrefixed(fragment) || isAsyncPrefixed(fragment) || directive && flags & F_DIRECTIVE_CTX && stmt.expression.type === Syntax.Literal && typeof stmt.expression.value === "string") {
          result = ["(", result, ")" + this.semicolon(flags)];
        } else {
          result.push(this.semicolon(flags));
        }
        return result;
      },
      ImportDeclaration: function(stmt, flags) {
        var result, cursor, that = this;
        if (stmt.specifiers.length === 0) {
          return [
            "import",
            space,
            // ModuleSpecifier
            this.generateExpression(stmt.source, Precedence.Sequence, E_TTT),
            this.semicolon(flags)
          ];
        }
        result = [
          "import"
        ];
        cursor = 0;
        if (stmt.specifiers[cursor].type === Syntax.ImportDefaultSpecifier) {
          result = join(result, [
            this.generateExpression(stmt.specifiers[cursor], Precedence.Sequence, E_TTT)
          ]);
          ++cursor;
        }
        if (stmt.specifiers[cursor]) {
          if (cursor !== 0) {
            result.push(",");
          }
          if (stmt.specifiers[cursor].type === Syntax.ImportNamespaceSpecifier) {
            result = join(result, [
              space,
              this.generateExpression(stmt.specifiers[cursor], Precedence.Sequence, E_TTT)
            ]);
          } else {
            result.push(space + "{");
            if (stmt.specifiers.length - cursor === 1) {
              result.push(space);
              result.push(this.generateExpression(stmt.specifiers[cursor], Precedence.Sequence, E_TTT));
              result.push(space + "}" + space);
            } else {
              withIndent(function(indent2) {
                var i, iz;
                result.push(newline);
                for (i = cursor, iz = stmt.specifiers.length; i < iz; ++i) {
                  result.push(indent2);
                  result.push(that.generateExpression(stmt.specifiers[i], Precedence.Sequence, E_TTT));
                  if (i + 1 < iz) {
                    result.push("," + newline);
                  }
                }
              });
              if (!endsWithLineTerminator(toSourceNodeWhenNeeded(result).toString())) {
                result.push(newline);
              }
              result.push(base2 + "}" + space);
            }
          }
        }
        result = join(result, [
          "from" + space,
          // ModuleSpecifier
          this.generateExpression(stmt.source, Precedence.Sequence, E_TTT),
          this.semicolon(flags)
        ]);
        return result;
      },
      VariableDeclarator: function(stmt, flags) {
        var itemFlags = flags & F_ALLOW_IN ? E_TTT : E_FTT;
        if (stmt.init) {
          return [
            this.generateExpression(stmt.id, Precedence.Assignment, itemFlags),
            space,
            "=",
            space,
            this.generateExpression(stmt.init, Precedence.Assignment, itemFlags)
          ];
        }
        return this.generatePattern(stmt.id, Precedence.Assignment, itemFlags);
      },
      VariableDeclaration: function(stmt, flags) {
        var result, i, iz, node, bodyFlags, that = this;
        result = [stmt.kind];
        bodyFlags = flags & F_ALLOW_IN ? S_TFFF : S_FFFF;
        function block() {
          node = stmt.declarations[0];
          if (extra.comment && node.leadingComments) {
            result.push("\n");
            result.push(addIndent(that.generateStatement(node, bodyFlags)));
          } else {
            result.push(noEmptySpace());
            result.push(that.generateStatement(node, bodyFlags));
          }
          for (i = 1, iz = stmt.declarations.length; i < iz; ++i) {
            node = stmt.declarations[i];
            if (extra.comment && node.leadingComments) {
              result.push("," + newline);
              result.push(addIndent(that.generateStatement(node, bodyFlags)));
            } else {
              result.push("," + space);
              result.push(that.generateStatement(node, bodyFlags));
            }
          }
        }
        if (stmt.declarations.length > 1) {
          withIndent(block);
        } else {
          block();
        }
        result.push(this.semicolon(flags));
        return result;
      },
      ThrowStatement: function(stmt, flags) {
        return [join(
          "throw",
          this.generateExpression(stmt.argument, Precedence.Sequence, E_TTT)
        ), this.semicolon(flags)];
      },
      TryStatement: function(stmt, flags) {
        var result, i, iz, guardedHandlers;
        result = ["try", this.maybeBlock(stmt.block, S_TFFF)];
        result = this.maybeBlockSuffix(stmt.block, result);
        if (stmt.handlers) {
          for (i = 0, iz = stmt.handlers.length; i < iz; ++i) {
            result = join(result, this.generateStatement(stmt.handlers[i], S_TFFF));
            if (stmt.finalizer || i + 1 !== iz) {
              result = this.maybeBlockSuffix(stmt.handlers[i].body, result);
            }
          }
        } else {
          guardedHandlers = stmt.guardedHandlers || [];
          for (i = 0, iz = guardedHandlers.length; i < iz; ++i) {
            result = join(result, this.generateStatement(guardedHandlers[i], S_TFFF));
            if (stmt.finalizer || i + 1 !== iz) {
              result = this.maybeBlockSuffix(guardedHandlers[i].body, result);
            }
          }
          if (stmt.handler) {
            if (Array.isArray(stmt.handler)) {
              for (i = 0, iz = stmt.handler.length; i < iz; ++i) {
                result = join(result, this.generateStatement(stmt.handler[i], S_TFFF));
                if (stmt.finalizer || i + 1 !== iz) {
                  result = this.maybeBlockSuffix(stmt.handler[i].body, result);
                }
              }
            } else {
              result = join(result, this.generateStatement(stmt.handler, S_TFFF));
              if (stmt.finalizer) {
                result = this.maybeBlockSuffix(stmt.handler.body, result);
              }
            }
          }
        }
        if (stmt.finalizer) {
          result = join(result, ["finally", this.maybeBlock(stmt.finalizer, S_TFFF)]);
        }
        return result;
      },
      SwitchStatement: function(stmt, flags) {
        var result, fragment, i, iz, bodyFlags, that = this;
        withIndent(function() {
          result = [
            "switch" + space + "(",
            that.generateExpression(stmt.discriminant, Precedence.Sequence, E_TTT),
            ")" + space + "{" + newline
          ];
        });
        if (stmt.cases) {
          bodyFlags = S_TFFF;
          for (i = 0, iz = stmt.cases.length; i < iz; ++i) {
            if (i === iz - 1) {
              bodyFlags |= F_SEMICOLON_OPT;
            }
            fragment = addIndent(this.generateStatement(stmt.cases[i], bodyFlags));
            result.push(fragment);
            if (!endsWithLineTerminator(toSourceNodeWhenNeeded(fragment).toString())) {
              result.push(newline);
            }
          }
        }
        result.push(addIndent("}"));
        return result;
      },
      SwitchCase: function(stmt, flags) {
        var result, fragment, i, iz, bodyFlags, that = this;
        withIndent(function() {
          if (stmt.test) {
            result = [
              join("case", that.generateExpression(stmt.test, Precedence.Sequence, E_TTT)),
              ":"
            ];
          } else {
            result = ["default:"];
          }
          i = 0;
          iz = stmt.consequent.length;
          if (iz && stmt.consequent[0].type === Syntax.BlockStatement) {
            fragment = that.maybeBlock(stmt.consequent[0], S_TFFF);
            result.push(fragment);
            i = 1;
          }
          if (i !== iz && !endsWithLineTerminator(toSourceNodeWhenNeeded(result).toString())) {
            result.push(newline);
          }
          bodyFlags = S_TFFF;
          for (; i < iz; ++i) {
            if (i === iz - 1 && flags & F_SEMICOLON_OPT) {
              bodyFlags |= F_SEMICOLON_OPT;
            }
            fragment = addIndent(that.generateStatement(stmt.consequent[i], bodyFlags));
            result.push(fragment);
            if (i + 1 !== iz && !endsWithLineTerminator(toSourceNodeWhenNeeded(fragment).toString())) {
              result.push(newline);
            }
          }
        });
        return result;
      },
      IfStatement: function(stmt, flags) {
        var result, bodyFlags, semicolonOptional, that = this;
        withIndent(function() {
          result = [
            "if" + space + "(",
            that.generateExpression(stmt.test, Precedence.Sequence, E_TTT),
            ")"
          ];
        });
        semicolonOptional = flags & F_SEMICOLON_OPT;
        bodyFlags = S_TFFF;
        if (semicolonOptional) {
          bodyFlags |= F_SEMICOLON_OPT;
        }
        if (stmt.alternate) {
          result.push(this.maybeBlock(stmt.consequent, S_TFFF));
          result = this.maybeBlockSuffix(stmt.consequent, result);
          if (stmt.alternate.type === Syntax.IfStatement) {
            result = join(result, ["else ", this.generateStatement(stmt.alternate, bodyFlags)]);
          } else {
            result = join(result, join("else", this.maybeBlock(stmt.alternate, bodyFlags)));
          }
        } else {
          result.push(this.maybeBlock(stmt.consequent, bodyFlags));
        }
        return result;
      },
      ForStatement: function(stmt, flags) {
        var result, that = this;
        withIndent(function() {
          result = ["for" + space + "("];
          if (stmt.init) {
            if (stmt.init.type === Syntax.VariableDeclaration) {
              result.push(that.generateStatement(stmt.init, S_FFFF));
            } else {
              result.push(that.generateExpression(stmt.init, Precedence.Sequence, E_FTT));
              result.push(";");
            }
          } else {
            result.push(";");
          }
          if (stmt.test) {
            result.push(space);
            result.push(that.generateExpression(stmt.test, Precedence.Sequence, E_TTT));
            result.push(";");
          } else {
            result.push(";");
          }
          if (stmt.update) {
            result.push(space);
            result.push(that.generateExpression(stmt.update, Precedence.Sequence, E_TTT));
            result.push(")");
          } else {
            result.push(")");
          }
        });
        result.push(this.maybeBlock(stmt.body, flags & F_SEMICOLON_OPT ? S_TFFT : S_TFFF));
        return result;
      },
      ForInStatement: function(stmt, flags) {
        return this.generateIterationForStatement("in", stmt, flags & F_SEMICOLON_OPT ? S_TFFT : S_TFFF);
      },
      ForOfStatement: function(stmt, flags) {
        return this.generateIterationForStatement("of", stmt, flags & F_SEMICOLON_OPT ? S_TFFT : S_TFFF);
      },
      LabeledStatement: function(stmt, flags) {
        return [stmt.label.name + ":", this.maybeBlock(stmt.body, flags & F_SEMICOLON_OPT ? S_TFFT : S_TFFF)];
      },
      Program: function(stmt, flags) {
        var result, fragment, i, iz, bodyFlags;
        iz = stmt.body.length;
        result = [safeConcatenation && iz > 0 ? "\n" : ""];
        bodyFlags = S_TFTF;
        for (i = 0; i < iz; ++i) {
          if (!safeConcatenation && i === iz - 1) {
            bodyFlags |= F_SEMICOLON_OPT;
          }
          if (preserveBlankLines) {
            if (i === 0) {
              if (!stmt.body[0].leadingComments) {
                generateBlankLines(stmt.range[0], stmt.body[i].range[0], result);
              }
            }
            if (i > 0) {
              if (!stmt.body[i - 1].trailingComments && !stmt.body[i].leadingComments) {
                generateBlankLines(stmt.body[i - 1].range[1], stmt.body[i].range[0], result);
              }
            }
          }
          fragment = addIndent(this.generateStatement(stmt.body[i], bodyFlags));
          result.push(fragment);
          if (i + 1 < iz && !endsWithLineTerminator(toSourceNodeWhenNeeded(fragment).toString())) {
            if (preserveBlankLines) {
              if (!stmt.body[i + 1].leadingComments) {
                result.push(newline);
              }
            } else {
              result.push(newline);
            }
          }
          if (preserveBlankLines) {
            if (i === iz - 1) {
              if (!stmt.body[i].trailingComments) {
                generateBlankLines(stmt.body[i].range[1], stmt.range[1], result);
              }
            }
          }
        }
        return result;
      },
      FunctionDeclaration: function(stmt, flags) {
        return [
          generateAsyncPrefix(stmt, true),
          "function",
          generateStarSuffix(stmt) || noEmptySpace(),
          stmt.id ? generateIdentifier(stmt.id) : "",
          this.generateFunctionBody(stmt)
        ];
      },
      ReturnStatement: function(stmt, flags) {
        if (stmt.argument) {
          return [join(
            "return",
            this.generateExpression(stmt.argument, Precedence.Sequence, E_TTT)
          ), this.semicolon(flags)];
        }
        return ["return" + this.semicolon(flags)];
      },
      WhileStatement: function(stmt, flags) {
        var result, that = this;
        withIndent(function() {
          result = [
            "while" + space + "(",
            that.generateExpression(stmt.test, Precedence.Sequence, E_TTT),
            ")"
          ];
        });
        result.push(this.maybeBlock(stmt.body, flags & F_SEMICOLON_OPT ? S_TFFT : S_TFFF));
        return result;
      },
      WithStatement: function(stmt, flags) {
        var result, that = this;
        withIndent(function() {
          result = [
            "with" + space + "(",
            that.generateExpression(stmt.object, Precedence.Sequence, E_TTT),
            ")"
          ];
        });
        result.push(this.maybeBlock(stmt.body, flags & F_SEMICOLON_OPT ? S_TFFT : S_TFFF));
        return result;
      }
    };
    merge(CodeGenerator.prototype, CodeGenerator.Statement);
    CodeGenerator.Expression = {
      SequenceExpression: function(expr, precedence, flags) {
        var result, i, iz;
        if (Precedence.Sequence < precedence) {
          flags |= F_ALLOW_IN;
        }
        result = [];
        for (i = 0, iz = expr.expressions.length; i < iz; ++i) {
          result.push(this.generateExpression(expr.expressions[i], Precedence.Assignment, flags));
          if (i + 1 < iz) {
            result.push("," + space);
          }
        }
        return parenthesize(result, Precedence.Sequence, precedence);
      },
      AssignmentExpression: function(expr, precedence, flags) {
        return this.generateAssignment(expr.left, expr.right, expr.operator, precedence, flags);
      },
      ArrowFunctionExpression: function(expr, precedence, flags) {
        return parenthesize(this.generateFunctionBody(expr), Precedence.ArrowFunction, precedence);
      },
      ConditionalExpression: function(expr, precedence, flags) {
        if (Precedence.Conditional < precedence) {
          flags |= F_ALLOW_IN;
        }
        return parenthesize(
          [
            this.generateExpression(expr.test, Precedence.Coalesce, flags),
            space + "?" + space,
            this.generateExpression(expr.consequent, Precedence.Assignment, flags),
            space + ":" + space,
            this.generateExpression(expr.alternate, Precedence.Assignment, flags)
          ],
          Precedence.Conditional,
          precedence
        );
      },
      LogicalExpression: function(expr, precedence, flags) {
        if (expr.operator === "??") {
          flags |= F_FOUND_COALESCE;
        }
        return this.BinaryExpression(expr, precedence, flags);
      },
      BinaryExpression: function(expr, precedence, flags) {
        var result, leftPrecedence, rightPrecedence, currentPrecedence, fragment, leftSource;
        currentPrecedence = BinaryPrecedence[expr.operator];
        leftPrecedence = expr.operator === "**" ? Precedence.Postfix : currentPrecedence;
        rightPrecedence = expr.operator === "**" ? currentPrecedence : currentPrecedence + 1;
        if (currentPrecedence < precedence) {
          flags |= F_ALLOW_IN;
        }
        fragment = this.generateExpression(expr.left, leftPrecedence, flags);
        leftSource = fragment.toString();
        if (leftSource.charCodeAt(leftSource.length - 1) === 47 && esutils.code.isIdentifierPartES5(expr.operator.charCodeAt(0))) {
          result = [fragment, noEmptySpace(), expr.operator];
        } else {
          result = join(fragment, expr.operator);
        }
        fragment = this.generateExpression(expr.right, rightPrecedence, flags);
        if (expr.operator === "/" && fragment.toString().charAt(0) === "/" || expr.operator.slice(-1) === "<" && fragment.toString().slice(0, 3) === "!--") {
          result.push(noEmptySpace());
          result.push(fragment);
        } else {
          result = join(result, fragment);
        }
        if (expr.operator === "in" && !(flags & F_ALLOW_IN)) {
          return ["(", result, ")"];
        }
        if ((expr.operator === "||" || expr.operator === "&&") && flags & F_FOUND_COALESCE) {
          return ["(", result, ")"];
        }
        return parenthesize(result, currentPrecedence, precedence);
      },
      CallExpression: function(expr, precedence, flags) {
        var result, i, iz;
        result = [this.generateExpression(expr.callee, Precedence.Call, E_TTF)];
        if (expr.optional) {
          result.push("?.");
        }
        result.push("(");
        for (i = 0, iz = expr["arguments"].length; i < iz; ++i) {
          result.push(this.generateExpression(expr["arguments"][i], Precedence.Assignment, E_TTT));
          if (i + 1 < iz) {
            result.push("," + space);
          }
        }
        result.push(")");
        if (!(flags & F_ALLOW_CALL)) {
          return ["(", result, ")"];
        }
        return parenthesize(result, Precedence.Call, precedence);
      },
      ChainExpression: function(expr, precedence, flags) {
        if (Precedence.OptionalChaining < precedence) {
          flags |= F_ALLOW_CALL;
        }
        var result = this.generateExpression(expr.expression, Precedence.OptionalChaining, flags);
        return parenthesize(result, Precedence.OptionalChaining, precedence);
      },
      NewExpression: function(expr, precedence, flags) {
        var result, length, i, iz, itemFlags;
        length = expr["arguments"].length;
        itemFlags = flags & F_ALLOW_UNPARATH_NEW && !parentheses && length === 0 ? E_TFT : E_TFF;
        result = join(
          "new",
          this.generateExpression(expr.callee, Precedence.New, itemFlags)
        );
        if (!(flags & F_ALLOW_UNPARATH_NEW) || parentheses || length > 0) {
          result.push("(");
          for (i = 0, iz = length; i < iz; ++i) {
            result.push(this.generateExpression(expr["arguments"][i], Precedence.Assignment, E_TTT));
            if (i + 1 < iz) {
              result.push("," + space);
            }
          }
          result.push(")");
        }
        return parenthesize(result, Precedence.New, precedence);
      },
      MemberExpression: function(expr, precedence, flags) {
        var result, fragment;
        result = [this.generateExpression(expr.object, Precedence.Call, flags & F_ALLOW_CALL ? E_TTF : E_TFF)];
        if (expr.computed) {
          if (expr.optional) {
            result.push("?.");
          }
          result.push("[");
          result.push(this.generateExpression(expr.property, Precedence.Sequence, flags & F_ALLOW_CALL ? E_TTT : E_TFT));
          result.push("]");
        } else {
          if (!expr.optional && expr.object.type === Syntax.Literal && typeof expr.object.value === "number") {
            fragment = toSourceNodeWhenNeeded(result).toString();
            if (fragment.indexOf(".") < 0 && !/[eExX]/.test(fragment) && esutils.code.isDecimalDigit(fragment.charCodeAt(fragment.length - 1)) && !(fragment.length >= 2 && fragment.charCodeAt(0) === 48)) {
              result.push(" ");
            }
          }
          result.push(expr.optional ? "?." : ".");
          result.push(generateIdentifier(expr.property));
        }
        return parenthesize(result, Precedence.Member, precedence);
      },
      MetaProperty: function(expr, precedence, flags) {
        var result;
        result = [];
        result.push(typeof expr.meta === "string" ? expr.meta : generateIdentifier(expr.meta));
        result.push(".");
        result.push(typeof expr.property === "string" ? expr.property : generateIdentifier(expr.property));
        return parenthesize(result, Precedence.Member, precedence);
      },
      UnaryExpression: function(expr, precedence, flags) {
        var result, fragment, rightCharCode, leftSource, leftCharCode;
        fragment = this.generateExpression(expr.argument, Precedence.Unary, E_TTT);
        if (space === "") {
          result = join(expr.operator, fragment);
        } else {
          result = [expr.operator];
          if (expr.operator.length > 2) {
            result = join(result, fragment);
          } else {
            leftSource = toSourceNodeWhenNeeded(result).toString();
            leftCharCode = leftSource.charCodeAt(leftSource.length - 1);
            rightCharCode = fragment.toString().charCodeAt(0);
            if ((leftCharCode === 43 || leftCharCode === 45) && leftCharCode === rightCharCode || esutils.code.isIdentifierPartES5(leftCharCode) && esutils.code.isIdentifierPartES5(rightCharCode)) {
              result.push(noEmptySpace());
              result.push(fragment);
            } else {
              result.push(fragment);
            }
          }
        }
        return parenthesize(result, Precedence.Unary, precedence);
      },
      YieldExpression: function(expr, precedence, flags) {
        var result;
        if (expr.delegate) {
          result = "yield*";
        } else {
          result = "yield";
        }
        if (expr.argument) {
          result = join(
            result,
            this.generateExpression(expr.argument, Precedence.Yield, E_TTT)
          );
        }
        return parenthesize(result, Precedence.Yield, precedence);
      },
      AwaitExpression: function(expr, precedence, flags) {
        var result = join(
          expr.all ? "await*" : "await",
          this.generateExpression(expr.argument, Precedence.Await, E_TTT)
        );
        return parenthesize(result, Precedence.Await, precedence);
      },
      UpdateExpression: function(expr, precedence, flags) {
        if (expr.prefix) {
          return parenthesize(
            [
              expr.operator,
              this.generateExpression(expr.argument, Precedence.Unary, E_TTT)
            ],
            Precedence.Unary,
            precedence
          );
        }
        return parenthesize(
          [
            this.generateExpression(expr.argument, Precedence.Postfix, E_TTT),
            expr.operator
          ],
          Precedence.Postfix,
          precedence
        );
      },
      FunctionExpression: function(expr, precedence, flags) {
        var result = [
          generateAsyncPrefix(expr, true),
          "function"
        ];
        if (expr.id) {
          result.push(generateStarSuffix(expr) || noEmptySpace());
          result.push(generateIdentifier(expr.id));
        } else {
          result.push(generateStarSuffix(expr) || space);
        }
        result.push(this.generateFunctionBody(expr));
        return result;
      },
      ArrayPattern: function(expr, precedence, flags) {
        return this.ArrayExpression(expr, precedence, flags, true);
      },
      ArrayExpression: function(expr, precedence, flags, isPattern) {
        var result, multiline, that = this;
        if (!expr.elements.length) {
          return "[]";
        }
        multiline = isPattern ? false : expr.elements.length > 1;
        result = ["[", multiline ? newline : ""];
        withIndent(function(indent2) {
          var i, iz;
          for (i = 0, iz = expr.elements.length; i < iz; ++i) {
            if (!expr.elements[i]) {
              if (multiline) {
                result.push(indent2);
              }
              if (i + 1 === iz) {
                result.push(",");
              }
            } else {
              result.push(multiline ? indent2 : "");
              result.push(that.generateExpression(expr.elements[i], Precedence.Assignment, E_TTT));
            }
            if (i + 1 < iz) {
              result.push("," + (multiline ? newline : space));
            }
          }
        });
        if (multiline && !endsWithLineTerminator(toSourceNodeWhenNeeded(result).toString())) {
          result.push(newline);
        }
        result.push(multiline ? base2 : "");
        result.push("]");
        return result;
      },
      RestElement: function(expr, precedence, flags) {
        return "..." + this.generatePattern(expr.argument);
      },
      ClassExpression: function(expr, precedence, flags) {
        var result, fragment;
        result = ["class"];
        if (expr.id) {
          result = join(result, this.generateExpression(expr.id, Precedence.Sequence, E_TTT));
        }
        if (expr.superClass) {
          fragment = join("extends", this.generateExpression(expr.superClass, Precedence.Unary, E_TTT));
          result = join(result, fragment);
        }
        result.push(space);
        result.push(this.generateStatement(expr.body, S_TFFT));
        return result;
      },
      MethodDefinition: function(expr, precedence, flags) {
        var result, fragment;
        if (expr["static"]) {
          result = ["static" + space];
        } else {
          result = [];
        }
        if (expr.kind === "get" || expr.kind === "set") {
          fragment = [
            join(expr.kind, this.generatePropertyKey(expr.key, expr.computed)),
            this.generateFunctionBody(expr.value)
          ];
        } else {
          fragment = [
            generateMethodPrefix(expr),
            this.generatePropertyKey(expr.key, expr.computed),
            this.generateFunctionBody(expr.value)
          ];
        }
        return join(result, fragment);
      },
      Property: function(expr, precedence, flags) {
        if (expr.kind === "get" || expr.kind === "set") {
          return [
            expr.kind,
            noEmptySpace(),
            this.generatePropertyKey(expr.key, expr.computed),
            this.generateFunctionBody(expr.value)
          ];
        }
        if (expr.shorthand) {
          if (expr.value.type === "AssignmentPattern") {
            return this.AssignmentPattern(expr.value, Precedence.Sequence, E_TTT);
          }
          return this.generatePropertyKey(expr.key, expr.computed);
        }
        if (expr.method) {
          return [
            generateMethodPrefix(expr),
            this.generatePropertyKey(expr.key, expr.computed),
            this.generateFunctionBody(expr.value)
          ];
        }
        return [
          this.generatePropertyKey(expr.key, expr.computed),
          ":" + space,
          this.generateExpression(expr.value, Precedence.Assignment, E_TTT)
        ];
      },
      ObjectExpression: function(expr, precedence, flags) {
        var multiline, result, fragment, that = this;
        if (!expr.properties.length) {
          return "{}";
        }
        multiline = expr.properties.length > 1;
        withIndent(function() {
          fragment = that.generateExpression(expr.properties[0], Precedence.Sequence, E_TTT);
        });
        if (!multiline) {
          if (!hasLineTerminator(toSourceNodeWhenNeeded(fragment).toString())) {
            return ["{", space, fragment, space, "}"];
          }
        }
        withIndent(function(indent2) {
          var i, iz;
          result = ["{", newline, indent2, fragment];
          if (multiline) {
            result.push("," + newline);
            for (i = 1, iz = expr.properties.length; i < iz; ++i) {
              result.push(indent2);
              result.push(that.generateExpression(expr.properties[i], Precedence.Sequence, E_TTT));
              if (i + 1 < iz) {
                result.push("," + newline);
              }
            }
          }
        });
        if (!endsWithLineTerminator(toSourceNodeWhenNeeded(result).toString())) {
          result.push(newline);
        }
        result.push(base2);
        result.push("}");
        return result;
      },
      AssignmentPattern: function(expr, precedence, flags) {
        return this.generateAssignment(expr.left, expr.right, "=", precedence, flags);
      },
      ObjectPattern: function(expr, precedence, flags) {
        var result, i, iz, multiline, property, that = this;
        if (!expr.properties.length) {
          return "{}";
        }
        multiline = false;
        if (expr.properties.length === 1) {
          property = expr.properties[0];
          if (property.type === Syntax.Property && property.value.type !== Syntax.Identifier) {
            multiline = true;
          }
        } else {
          for (i = 0, iz = expr.properties.length; i < iz; ++i) {
            property = expr.properties[i];
            if (property.type === Syntax.Property && !property.shorthand) {
              multiline = true;
              break;
            }
          }
        }
        result = ["{", multiline ? newline : ""];
        withIndent(function(indent2) {
          var i2, iz2;
          for (i2 = 0, iz2 = expr.properties.length; i2 < iz2; ++i2) {
            result.push(multiline ? indent2 : "");
            result.push(that.generateExpression(expr.properties[i2], Precedence.Sequence, E_TTT));
            if (i2 + 1 < iz2) {
              result.push("," + (multiline ? newline : space));
            }
          }
        });
        if (multiline && !endsWithLineTerminator(toSourceNodeWhenNeeded(result).toString())) {
          result.push(newline);
        }
        result.push(multiline ? base2 : "");
        result.push("}");
        return result;
      },
      ThisExpression: function(expr, precedence, flags) {
        return "this";
      },
      Super: function(expr, precedence, flags) {
        return "super";
      },
      Identifier: function(expr, precedence, flags) {
        return generateIdentifier(expr);
      },
      ImportDefaultSpecifier: function(expr, precedence, flags) {
        return generateIdentifier(expr.id || expr.local);
      },
      ImportNamespaceSpecifier: function(expr, precedence, flags) {
        var result = ["*"];
        var id = expr.id || expr.local;
        if (id) {
          result.push(space + "as" + noEmptySpace() + generateIdentifier(id));
        }
        return result;
      },
      ImportSpecifier: function(expr, precedence, flags) {
        var imported = expr.imported;
        var result = [imported.name];
        var local = expr.local;
        if (local && local.name !== imported.name) {
          result.push(noEmptySpace() + "as" + noEmptySpace() + generateIdentifier(local));
        }
        return result;
      },
      ExportSpecifier: function(expr, precedence, flags) {
        var local = expr.local;
        var result = [local.name];
        var exported = expr.exported;
        if (exported && exported.name !== local.name) {
          result.push(noEmptySpace() + "as" + noEmptySpace() + generateIdentifier(exported));
        }
        return result;
      },
      Literal: function(expr, precedence, flags) {
        var raw;
        if (expr.hasOwnProperty("raw") && parse4 && extra.raw) {
          try {
            raw = parse4(expr.raw).body[0].expression;
            if (raw.type === Syntax.Literal) {
              if (raw.value === expr.value) {
                return expr.raw;
              }
            }
          } catch (e2) {
          }
        }
        if (expr.regex) {
          return "/" + expr.regex.pattern + "/" + expr.regex.flags;
        }
        if (typeof expr.value === "bigint") {
          return expr.value.toString() + "n";
        }
        if (expr.bigint) {
          return expr.bigint + "n";
        }
        if (expr.value === null) {
          return "null";
        }
        if (typeof expr.value === "string") {
          return escapeString(expr.value);
        }
        if (typeof expr.value === "number") {
          return generateNumber(expr.value);
        }
        if (typeof expr.value === "boolean") {
          return expr.value ? "true" : "false";
        }
        return generateRegExp(expr.value);
      },
      GeneratorExpression: function(expr, precedence, flags) {
        return this.ComprehensionExpression(expr, precedence, flags);
      },
      ComprehensionExpression: function(expr, precedence, flags) {
        var result, i, iz, fragment, that = this;
        result = expr.type === Syntax.GeneratorExpression ? ["("] : ["["];
        if (extra.moz.comprehensionExpressionStartsWithAssignment) {
          fragment = this.generateExpression(expr.body, Precedence.Assignment, E_TTT);
          result.push(fragment);
        }
        if (expr.blocks) {
          withIndent(function() {
            for (i = 0, iz = expr.blocks.length; i < iz; ++i) {
              fragment = that.generateExpression(expr.blocks[i], Precedence.Sequence, E_TTT);
              if (i > 0 || extra.moz.comprehensionExpressionStartsWithAssignment) {
                result = join(result, fragment);
              } else {
                result.push(fragment);
              }
            }
          });
        }
        if (expr.filter) {
          result = join(result, "if" + space);
          fragment = this.generateExpression(expr.filter, Precedence.Sequence, E_TTT);
          result = join(result, ["(", fragment, ")"]);
        }
        if (!extra.moz.comprehensionExpressionStartsWithAssignment) {
          fragment = this.generateExpression(expr.body, Precedence.Assignment, E_TTT);
          result = join(result, fragment);
        }
        result.push(expr.type === Syntax.GeneratorExpression ? ")" : "]");
        return result;
      },
      ComprehensionBlock: function(expr, precedence, flags) {
        var fragment;
        if (expr.left.type === Syntax.VariableDeclaration) {
          fragment = [
            expr.left.kind,
            noEmptySpace(),
            this.generateStatement(expr.left.declarations[0], S_FFFF)
          ];
        } else {
          fragment = this.generateExpression(expr.left, Precedence.Call, E_TTT);
        }
        fragment = join(fragment, expr.of ? "of" : "in");
        fragment = join(fragment, this.generateExpression(expr.right, Precedence.Sequence, E_TTT));
        return ["for" + space + "(", fragment, ")"];
      },
      SpreadElement: function(expr, precedence, flags) {
        return [
          "...",
          this.generateExpression(expr.argument, Precedence.Assignment, E_TTT)
        ];
      },
      TaggedTemplateExpression: function(expr, precedence, flags) {
        var itemFlags = E_TTF;
        if (!(flags & F_ALLOW_CALL)) {
          itemFlags = E_TFF;
        }
        var result = [
          this.generateExpression(expr.tag, Precedence.Call, itemFlags),
          this.generateExpression(expr.quasi, Precedence.Primary, E_FFT)
        ];
        return parenthesize(result, Precedence.TaggedTemplate, precedence);
      },
      TemplateElement: function(expr, precedence, flags) {
        return expr.value.raw;
      },
      TemplateLiteral: function(expr, precedence, flags) {
        var result, i, iz;
        result = ["`"];
        for (i = 0, iz = expr.quasis.length; i < iz; ++i) {
          result.push(this.generateExpression(expr.quasis[i], Precedence.Primary, E_TTT));
          if (i + 1 < iz) {
            result.push("${" + space);
            result.push(this.generateExpression(expr.expressions[i], Precedence.Sequence, E_TTT));
            result.push(space + "}");
          }
        }
        result.push("`");
        return result;
      },
      ModuleSpecifier: function(expr, precedence, flags) {
        return this.Literal(expr, precedence, flags);
      },
      ImportExpression: function(expr, precedence, flag) {
        return parenthesize([
          "import(",
          this.generateExpression(expr.source, Precedence.Assignment, E_TTT),
          ")"
        ], Precedence.Call, precedence);
      }
    };
    merge(CodeGenerator.prototype, CodeGenerator.Expression);
    CodeGenerator.prototype.generateExpression = function(expr, precedence, flags) {
      var result, type;
      type = expr.type || Syntax.Property;
      if (extra.verbatim && expr.hasOwnProperty(extra.verbatim)) {
        return generateVerbatim(expr, precedence);
      }
      result = this[type](expr, precedence, flags);
      if (extra.comment) {
        result = addComments(expr, result);
      }
      return toSourceNodeWhenNeeded(result, expr);
    };
    CodeGenerator.prototype.generateStatement = function(stmt, flags) {
      var result, fragment;
      result = this[stmt.type](stmt, flags);
      if (extra.comment) {
        result = addComments(stmt, result);
      }
      fragment = toSourceNodeWhenNeeded(result).toString();
      if (stmt.type === Syntax.Program && !safeConcatenation && newline === "" && fragment.charAt(fragment.length - 1) === "\n") {
        result = sourceMap2 ? toSourceNodeWhenNeeded(result).replaceRight(/\s+$/, "") : fragment.replace(/\s+$/, "");
      }
      return toSourceNodeWhenNeeded(result, stmt);
    };
    function generateInternal(node) {
      var codegen;
      codegen = new CodeGenerator();
      if (isStatement(node)) {
        return codegen.generateStatement(node, S_TFFF);
      }
      if (isExpression(node)) {
        return codegen.generateExpression(node, Precedence.Sequence, E_TTT);
      }
      throw new Error("Unknown node type: " + node.type);
    }
    function generate(node, options) {
      var defaultOptions2 = getDefaultOptions(), result, pair;
      if (options != null) {
        if (typeof options.indent === "string") {
          defaultOptions2.format.indent.style = options.indent;
        }
        if (typeof options.base === "number") {
          defaultOptions2.format.indent.base = options.base;
        }
        options = updateDeeply(defaultOptions2, options);
        indent = options.format.indent.style;
        if (typeof options.base === "string") {
          base2 = options.base;
        } else {
          base2 = stringRepeat(indent, options.format.indent.base);
        }
      } else {
        options = defaultOptions2;
        indent = options.format.indent.style;
        base2 = stringRepeat(indent, options.format.indent.base);
      }
      json = options.format.json;
      renumber = options.format.renumber;
      hexadecimal = json ? false : options.format.hexadecimal;
      quotes = json ? "double" : options.format.quotes;
      escapeless = options.format.escapeless;
      newline = options.format.newline;
      space = options.format.space;
      if (options.format.compact) {
        newline = space = indent = base2 = "";
      }
      parentheses = options.format.parentheses;
      semicolons = options.format.semicolons;
      safeConcatenation = options.format.safeConcatenation;
      directive = options.directive;
      parse4 = json ? null : options.parse;
      sourceMap2 = options.sourceMap;
      sourceCode = options.sourceCode;
      preserveBlankLines = options.format.preserveBlankLines && sourceCode !== null;
      extra = options;
      if (sourceMap2) {
        if (!exports.browser) {
          SourceNode = requireSourceMap().SourceNode;
        } else {
          SourceNode = commonjsGlobal.sourceMap.SourceNode;
        }
      }
      result = generateInternal(node);
      if (!sourceMap2) {
        pair = { code: result.toString(), map: null };
        return options.sourceMapWithCode ? pair : pair.code;
      }
      pair = result.toStringWithSourceMap({
        file: options.file,
        sourceRoot: options.sourceMapRoot
      });
      if (options.sourceContent) {
        pair.map.setSourceContent(
          options.sourceMap,
          options.sourceContent
        );
      }
      if (options.sourceMapWithCode) {
        return pair;
      }
      return pair.map.toString();
    }
    FORMAT_MINIFY = {
      indent: {
        style: "",
        base: 0
      },
      renumber: true,
      hexadecimal: true,
      quotes: "auto",
      escapeless: true,
      compact: true,
      parentheses: false,
      semicolons: false
    };
    FORMAT_DEFAULTS = getDefaultOptions().format;
    exports.version = require$$3.version;
    exports.generate = generate;
    exports.attachComments = estraverse$1.attachComments;
    exports.Precedence = updateDeeply({}, Precedence);
    exports.browser = false;
    exports.FORMAT_MINIFY = FORMAT_MINIFY;
    exports.FORMAT_DEFAULTS = FORMAT_DEFAULTS;
  })();
})(escodegen);
var reservedWords = {
  3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
  5: "class enum extends super const export import",
  6: "enum",
  strict: "implements interface let package private protected public static yield",
  strictBind: "eval arguments"
};
var ecma5AndLessKeywords = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this";
var keywords = {
  5: ecma5AndLessKeywords,
  "5module": ecma5AndLessKeywords + " export import",
  6: ecma5AndLessKeywords + " const class extends export import super"
};
var keywordRelationalOperator = /^in(stanceof)?$/;
var nonASCIIidentifierStartChars = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࣇऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-鿼ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-ꟊꟵ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ";
var nonASCIIidentifierChars = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿᫀᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿";
var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");
nonASCIIidentifierStartChars = nonASCIIidentifierChars = null;
var astralIdentifierStartCodes = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 107, 20, 28, 22, 13, 52, 76, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 230, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 35, 56, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8952, 286, 50, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 2357, 44, 11, 6, 17, 0, 370, 43, 1301, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42717, 35, 4148, 12, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938];
var astralIdentifierCodes = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 176, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 135, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 419, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
function isInAstralSet(code, set) {
  var pos = 65536;
  for (var i = 0; i < set.length; i += 2) {
    pos += set[i];
    if (pos > code) {
      return false;
    }
    pos += set[i + 1];
    if (pos >= code) {
      return true;
    }
  }
}
function isIdentifierStart(code, astral) {
  if (code < 65) {
    return code === 36;
  }
  if (code < 91) {
    return true;
  }
  if (code < 97) {
    return code === 95;
  }
  if (code < 123) {
    return true;
  }
  if (code <= 65535) {
    return code >= 170 && nonASCIIidentifierStart.test(String.fromCharCode(code));
  }
  if (astral === false) {
    return false;
  }
  return isInAstralSet(code, astralIdentifierStartCodes);
}
function isIdentifierChar(code, astral) {
  if (code < 48) {
    return code === 36;
  }
  if (code < 58) {
    return true;
  }
  if (code < 65) {
    return false;
  }
  if (code < 91) {
    return true;
  }
  if (code < 97) {
    return code === 95;
  }
  if (code < 123) {
    return true;
  }
  if (code <= 65535) {
    return code >= 170 && nonASCIIidentifier.test(String.fromCharCode(code));
  }
  if (astral === false) {
    return false;
  }
  return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes);
}
var TokenType = function TokenType2(label, conf) {
  if (conf === void 0) conf = {};
  this.label = label;
  this.keyword = conf.keyword;
  this.beforeExpr = !!conf.beforeExpr;
  this.startsExpr = !!conf.startsExpr;
  this.isLoop = !!conf.isLoop;
  this.isAssign = !!conf.isAssign;
  this.prefix = !!conf.prefix;
  this.postfix = !!conf.postfix;
  this.binop = conf.binop || null;
  this.updateContext = null;
};
function binop(name2, prec) {
  return new TokenType(name2, { beforeExpr: true, binop: prec });
}
var beforeExpr = { beforeExpr: true }, startsExpr = { startsExpr: true };
var keywords$1 = {};
function kw(name2, options) {
  if (options === void 0) options = {};
  options.keyword = name2;
  return keywords$1[name2] = new TokenType(name2, options);
}
var types = {
  num: new TokenType("num", startsExpr),
  regexp: new TokenType("regexp", startsExpr),
  string: new TokenType("string", startsExpr),
  name: new TokenType("name", startsExpr),
  eof: new TokenType("eof"),
  // Punctuation token types.
  bracketL: new TokenType("[", { beforeExpr: true, startsExpr: true }),
  bracketR: new TokenType("]"),
  braceL: new TokenType("{", { beforeExpr: true, startsExpr: true }),
  braceR: new TokenType("}"),
  parenL: new TokenType("(", { beforeExpr: true, startsExpr: true }),
  parenR: new TokenType(")"),
  comma: new TokenType(",", beforeExpr),
  semi: new TokenType(";", beforeExpr),
  colon: new TokenType(":", beforeExpr),
  dot: new TokenType("."),
  question: new TokenType("?", beforeExpr),
  questionDot: new TokenType("?."),
  arrow: new TokenType("=>", beforeExpr),
  template: new TokenType("template"),
  invalidTemplate: new TokenType("invalidTemplate"),
  ellipsis: new TokenType("...", beforeExpr),
  backQuote: new TokenType("`", startsExpr),
  dollarBraceL: new TokenType("${", { beforeExpr: true, startsExpr: true }),
  // Operators. These carry several kinds of properties to help the
  // parser use them properly (the presence of these properties is
  // what categorizes them as operators).
  //
  // `binop`, when present, specifies that this operator is a binary
  // operator, and will refer to its precedence.
  //
  // `prefix` and `postfix` mark the operator as a prefix or postfix
  // unary operator.
  //
  // `isAssign` marks all of `=`, `+=`, `-=` etcetera, which act as
  // binary operators with a very low precedence, that should result
  // in AssignmentExpression nodes.
  eq: new TokenType("=", { beforeExpr: true, isAssign: true }),
  assign: new TokenType("_=", { beforeExpr: true, isAssign: true }),
  incDec: new TokenType("++/--", { prefix: true, postfix: true, startsExpr: true }),
  prefix: new TokenType("!/~", { beforeExpr: true, prefix: true, startsExpr: true }),
  logicalOR: binop("||", 1),
  logicalAND: binop("&&", 2),
  bitwiseOR: binop("|", 3),
  bitwiseXOR: binop("^", 4),
  bitwiseAND: binop("&", 5),
  equality: binop("==/!=/===/!==", 6),
  relational: binop("</>/<=/>=", 7),
  bitShift: binop("<</>>/>>>", 8),
  plusMin: new TokenType("+/-", { beforeExpr: true, binop: 9, prefix: true, startsExpr: true }),
  modulo: binop("%", 10),
  star: binop("*", 10),
  slash: binop("/", 10),
  starstar: new TokenType("**", { beforeExpr: true }),
  coalesce: binop("??", 1),
  // Keyword token types.
  _break: kw("break"),
  _case: kw("case", beforeExpr),
  _catch: kw("catch"),
  _continue: kw("continue"),
  _debugger: kw("debugger"),
  _default: kw("default", beforeExpr),
  _do: kw("do", { isLoop: true, beforeExpr: true }),
  _else: kw("else", beforeExpr),
  _finally: kw("finally"),
  _for: kw("for", { isLoop: true }),
  _function: kw("function", startsExpr),
  _if: kw("if"),
  _return: kw("return", beforeExpr),
  _switch: kw("switch"),
  _throw: kw("throw", beforeExpr),
  _try: kw("try"),
  _var: kw("var"),
  _const: kw("const"),
  _while: kw("while", { isLoop: true }),
  _with: kw("with"),
  _new: kw("new", { beforeExpr: true, startsExpr: true }),
  _this: kw("this", startsExpr),
  _super: kw("super", startsExpr),
  _class: kw("class", startsExpr),
  _extends: kw("extends", beforeExpr),
  _export: kw("export"),
  _import: kw("import", startsExpr),
  _null: kw("null", startsExpr),
  _true: kw("true", startsExpr),
  _false: kw("false", startsExpr),
  _in: kw("in", { beforeExpr: true, binop: 7 }),
  _instanceof: kw("instanceof", { beforeExpr: true, binop: 7 }),
  _typeof: kw("typeof", { beforeExpr: true, prefix: true, startsExpr: true }),
  _void: kw("void", { beforeExpr: true, prefix: true, startsExpr: true }),
  _delete: kw("delete", { beforeExpr: true, prefix: true, startsExpr: true })
};
var lineBreak = /\r\n?|\n|\u2028|\u2029/;
var lineBreakG = new RegExp(lineBreak.source, "g");
function isNewLine(code, ecma2019String) {
  return code === 10 || code === 13 || !ecma2019String && (code === 8232 || code === 8233);
}
var nonASCIIwhitespace = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/;
var skipWhiteSpace = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;
var ref = Object.prototype;
var hasOwnProperty$1 = ref.hasOwnProperty;
var toString = ref.toString;
function has(obj, propName) {
  return hasOwnProperty$1.call(obj, propName);
}
var isArray$1 = Array.isArray || function(obj) {
  return toString.call(obj) === "[object Array]";
};
function wordsRegexp(words) {
  return new RegExp("^(?:" + words.replace(/ /g, "|") + ")$");
}
var Position = function Position2(line, col) {
  this.line = line;
  this.column = col;
};
Position.prototype.offset = function offset(n2) {
  return new Position(this.line, this.column + n2);
};
var SourceLocation = function SourceLocation2(p2, start, end) {
  this.start = start;
  this.end = end;
  if (p2.sourceFile !== null) {
    this.source = p2.sourceFile;
  }
};
function getLineInfo(input, offset2) {
  for (var line = 1, cur = 0; ; ) {
    lineBreakG.lastIndex = cur;
    var match = lineBreakG.exec(input);
    if (match && match.index < offset2) {
      ++line;
      cur = match.index + match[0].length;
    } else {
      return new Position(line, offset2 - cur);
    }
  }
}
var defaultOptions = {
  // `ecmaVersion` indicates the ECMAScript version to parse. Must be
  // either 3, 5, 6 (2015), 7 (2016), 8 (2017), 9 (2018), or 10
  // (2019). This influences support for strict mode, the set of
  // reserved words, and support for new syntax features. The default
  // is 10.
  ecmaVersion: 10,
  // `sourceType` indicates the mode the code should be parsed in.
  // Can be either `"script"` or `"module"`. This influences global
  // strict mode and parsing of `import` and `export` declarations.
  sourceType: "script",
  // `onInsertedSemicolon` can be a callback that will be called
  // when a semicolon is automatically inserted. It will be passed
  // the position of the comma as an offset, and if `locations` is
  // enabled, it is given the location as a `{line, column}` object
  // as second argument.
  onInsertedSemicolon: null,
  // `onTrailingComma` is similar to `onInsertedSemicolon`, but for
  // trailing commas.
  onTrailingComma: null,
  // By default, reserved words are only enforced if ecmaVersion >= 5.
  // Set `allowReserved` to a boolean value to explicitly turn this on
  // an off. When this option has the value "never", reserved words
  // and keywords can also not be used as property names.
  allowReserved: null,
  // When enabled, a return at the top level is not considered an
  // error.
  allowReturnOutsideFunction: false,
  // When enabled, import/export statements are not constrained to
  // appearing at the top of the program.
  allowImportExportEverywhere: false,
  // When enabled, await identifiers are allowed to appear at the top-level scope,
  // but they are still not allowed in non-async functions.
  allowAwaitOutsideFunction: false,
  // When enabled, hashbang directive in the beginning of file
  // is allowed and treated as a line comment.
  allowHashBang: false,
  // When `locations` is on, `loc` properties holding objects with
  // `start` and `end` properties in `{line, column}` form (with
  // line being 1-based and column 0-based) will be attached to the
  // nodes.
  locations: false,
  // A function can be passed as `onToken` option, which will
  // cause Acorn to call that function with object in the same
  // format as tokens returned from `tokenizer().getToken()`. Note
  // that you are not allowed to call the parser from the
  // callback—that will corrupt its internal state.
  onToken: null,
  // A function can be passed as `onComment` option, which will
  // cause Acorn to call that function with `(block, text, start,
  // end)` parameters whenever a comment is skipped. `block` is a
  // boolean indicating whether this is a block (`/* */`) comment,
  // `text` is the content of the comment, and `start` and `end` are
  // character offsets that denote the start and end of the comment.
  // When the `locations` option is on, two more parameters are
  // passed, the full `{line, column}` locations of the start and
  // end of the comments. Note that you are not allowed to call the
  // parser from the callback—that will corrupt its internal state.
  onComment: null,
  // Nodes have their start and end characters offsets recorded in
  // `start` and `end` properties (directly on the node, rather than
  // the `loc` object, which holds line/column data. To also add a
  // [semi-standardized][range] `range` property holding a `[start,
  // end]` array with the same numbers, set the `ranges` option to
  // `true`.
  //
  // [range]: https://bugzilla.mozilla.org/show_bug.cgi?id=745678
  ranges: false,
  // It is possible to parse multiple files into a single AST by
  // passing the tree produced by parsing the first file as
  // `program` option in subsequent parses. This will add the
  // toplevel forms of the parsed file to the `Program` (top) node
  // of an existing parse tree.
  program: null,
  // When `locations` is on, you can pass this to record the source
  // file in every node's `loc` object.
  sourceFile: null,
  // This value, if given, is stored in every node, whether
  // `locations` is on or off.
  directSourceFile: null,
  // When enabled, parenthesized expressions are represented by
  // (non-standard) ParenthesizedExpression nodes
  preserveParens: false
};
function getOptions(opts) {
  var options = {};
  for (var opt in defaultOptions) {
    options[opt] = opts && has(opts, opt) ? opts[opt] : defaultOptions[opt];
  }
  if (options.ecmaVersion >= 2015) {
    options.ecmaVersion -= 2009;
  }
  if (options.allowReserved == null) {
    options.allowReserved = options.ecmaVersion < 5;
  }
  if (isArray$1(options.onToken)) {
    var tokens = options.onToken;
    options.onToken = function(token) {
      return tokens.push(token);
    };
  }
  if (isArray$1(options.onComment)) {
    options.onComment = pushComment(options, options.onComment);
  }
  return options;
}
function pushComment(options, array) {
  return function(block, text, start, end, startLoc, endLoc) {
    var comment = {
      type: block ? "Block" : "Line",
      value: text,
      start,
      end
    };
    if (options.locations) {
      comment.loc = new SourceLocation(this, startLoc, endLoc);
    }
    if (options.ranges) {
      comment.range = [start, end];
    }
    array.push(comment);
  };
}
var SCOPE_TOP = 1, SCOPE_FUNCTION = 2, SCOPE_VAR = SCOPE_TOP | SCOPE_FUNCTION, SCOPE_ASYNC = 4, SCOPE_GENERATOR = 8, SCOPE_ARROW = 16, SCOPE_SIMPLE_CATCH = 32, SCOPE_SUPER = 64, SCOPE_DIRECT_SUPER = 128;
function functionFlags(async, generator) {
  return SCOPE_FUNCTION | (async ? SCOPE_ASYNC : 0) | (generator ? SCOPE_GENERATOR : 0);
}
var BIND_NONE = 0, BIND_VAR = 1, BIND_LEXICAL = 2, BIND_FUNCTION = 3, BIND_SIMPLE_CATCH = 4, BIND_OUTSIDE = 5;
var Parser = function Parser2(options, input, startPos) {
  this.options = options = getOptions(options);
  this.sourceFile = options.sourceFile;
  this.keywords = wordsRegexp(keywords[options.ecmaVersion >= 6 ? 6 : options.sourceType === "module" ? "5module" : 5]);
  var reserved = "";
  if (options.allowReserved !== true) {
    for (var v2 = options.ecmaVersion; ; v2--) {
      if (reserved = reservedWords[v2]) {
        break;
      }
    }
    if (options.sourceType === "module") {
      reserved += " await";
    }
  }
  this.reservedWords = wordsRegexp(reserved);
  var reservedStrict = (reserved ? reserved + " " : "") + reservedWords.strict;
  this.reservedWordsStrict = wordsRegexp(reservedStrict);
  this.reservedWordsStrictBind = wordsRegexp(reservedStrict + " " + reservedWords.strictBind);
  this.input = String(input);
  this.containsEsc = false;
  if (startPos) {
    this.pos = startPos;
    this.lineStart = this.input.lastIndexOf("\n", startPos - 1) + 1;
    this.curLine = this.input.slice(0, this.lineStart).split(lineBreak).length;
  } else {
    this.pos = this.lineStart = 0;
    this.curLine = 1;
  }
  this.type = types.eof;
  this.value = null;
  this.start = this.end = this.pos;
  this.startLoc = this.endLoc = this.curPosition();
  this.lastTokEndLoc = this.lastTokStartLoc = null;
  this.lastTokStart = this.lastTokEnd = this.pos;
  this.context = this.initialContext();
  this.exprAllowed = true;
  this.inModule = options.sourceType === "module";
  this.strict = this.inModule || this.strictDirective(this.pos);
  this.potentialArrowAt = -1;
  this.yieldPos = this.awaitPos = this.awaitIdentPos = 0;
  this.labels = [];
  this.undefinedExports = {};
  if (this.pos === 0 && options.allowHashBang && this.input.slice(0, 2) === "#!") {
    this.skipLineComment(2);
  }
  this.scopeStack = [];
  this.enterScope(SCOPE_TOP);
  this.regexpState = null;
};
var prototypeAccessors = { inFunction: { configurable: true }, inGenerator: { configurable: true }, inAsync: { configurable: true }, allowSuper: { configurable: true }, allowDirectSuper: { configurable: true }, treatFunctionsAsVar: { configurable: true } };
Parser.prototype.parse = function parse() {
  var node = this.options.program || this.startNode();
  this.nextToken();
  return this.parseTopLevel(node);
};
prototypeAccessors.inFunction.get = function() {
  return (this.currentVarScope().flags & SCOPE_FUNCTION) > 0;
};
prototypeAccessors.inGenerator.get = function() {
  return (this.currentVarScope().flags & SCOPE_GENERATOR) > 0;
};
prototypeAccessors.inAsync.get = function() {
  return (this.currentVarScope().flags & SCOPE_ASYNC) > 0;
};
prototypeAccessors.allowSuper.get = function() {
  return (this.currentThisScope().flags & SCOPE_SUPER) > 0;
};
prototypeAccessors.allowDirectSuper.get = function() {
  return (this.currentThisScope().flags & SCOPE_DIRECT_SUPER) > 0;
};
prototypeAccessors.treatFunctionsAsVar.get = function() {
  return this.treatFunctionsAsVarInScope(this.currentScope());
};
Parser.prototype.inNonArrowFunction = function inNonArrowFunction() {
  return (this.currentThisScope().flags & SCOPE_FUNCTION) > 0;
};
Parser.extend = function extend() {
  var plugins = [], len = arguments.length;
  while (len--) plugins[len] = arguments[len];
  var cls = this;
  for (var i = 0; i < plugins.length; i++) {
    cls = plugins[i](cls);
  }
  return cls;
};
Parser.parse = function parse2(input, options) {
  return new this(options, input).parse();
};
Parser.parseExpressionAt = function parseExpressionAt(input, pos, options) {
  var parser = new this(options, input, pos);
  parser.nextToken();
  return parser.parseExpression();
};
Parser.tokenizer = function tokenizer(input, options) {
  return new this(options, input);
};
Object.defineProperties(Parser.prototype, prototypeAccessors);
var pp = Parser.prototype;
var literal = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/;
pp.strictDirective = function(start) {
  for (; ; ) {
    skipWhiteSpace.lastIndex = start;
    start += skipWhiteSpace.exec(this.input)[0].length;
    var match = literal.exec(this.input.slice(start));
    if (!match) {
      return false;
    }
    if ((match[1] || match[2]) === "use strict") {
      skipWhiteSpace.lastIndex = start + match[0].length;
      var spaceAfter = skipWhiteSpace.exec(this.input), end = spaceAfter.index + spaceAfter[0].length;
      var next = this.input.charAt(end);
      return next === ";" || next === "}" || lineBreak.test(spaceAfter[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(next) || next === "!" && this.input.charAt(end + 1) === "=");
    }
    start += match[0].length;
    skipWhiteSpace.lastIndex = start;
    start += skipWhiteSpace.exec(this.input)[0].length;
    if (this.input[start] === ";") {
      start++;
    }
  }
};
pp.eat = function(type) {
  if (this.type === type) {
    this.next();
    return true;
  } else {
    return false;
  }
};
pp.isContextual = function(name2) {
  return this.type === types.name && this.value === name2 && !this.containsEsc;
};
pp.eatContextual = function(name2) {
  if (!this.isContextual(name2)) {
    return false;
  }
  this.next();
  return true;
};
pp.expectContextual = function(name2) {
  if (!this.eatContextual(name2)) {
    this.unexpected();
  }
};
pp.canInsertSemicolon = function() {
  return this.type === types.eof || this.type === types.braceR || lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
};
pp.insertSemicolon = function() {
  if (this.canInsertSemicolon()) {
    if (this.options.onInsertedSemicolon) {
      this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc);
    }
    return true;
  }
};
pp.semicolon = function() {
  if (!this.eat(types.semi) && !this.insertSemicolon()) {
    this.unexpected();
  }
};
pp.afterTrailingComma = function(tokType, notNext) {
  if (this.type === tokType) {
    if (this.options.onTrailingComma) {
      this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc);
    }
    if (!notNext) {
      this.next();
    }
    return true;
  }
};
pp.expect = function(type) {
  this.eat(type) || this.unexpected();
};
pp.unexpected = function(pos) {
  this.raise(pos != null ? pos : this.start, "Unexpected token");
};
function DestructuringErrors() {
  this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
}
pp.checkPatternErrors = function(refDestructuringErrors, isAssign) {
  if (!refDestructuringErrors) {
    return;
  }
  if (refDestructuringErrors.trailingComma > -1) {
    this.raiseRecoverable(refDestructuringErrors.trailingComma, "Comma is not permitted after the rest element");
  }
  var parens = isAssign ? refDestructuringErrors.parenthesizedAssign : refDestructuringErrors.parenthesizedBind;
  if (parens > -1) {
    this.raiseRecoverable(parens, "Parenthesized pattern");
  }
};
pp.checkExpressionErrors = function(refDestructuringErrors, andThrow) {
  if (!refDestructuringErrors) {
    return false;
  }
  var shorthandAssign = refDestructuringErrors.shorthandAssign;
  var doubleProto = refDestructuringErrors.doubleProto;
  if (!andThrow) {
    return shorthandAssign >= 0 || doubleProto >= 0;
  }
  if (shorthandAssign >= 0) {
    this.raise(shorthandAssign, "Shorthand property assignments are valid only in destructuring patterns");
  }
  if (doubleProto >= 0) {
    this.raiseRecoverable(doubleProto, "Redefinition of __proto__ property");
  }
};
pp.checkYieldAwaitInDefaultParams = function() {
  if (this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos)) {
    this.raise(this.yieldPos, "Yield expression cannot be a default value");
  }
  if (this.awaitPos) {
    this.raise(this.awaitPos, "Await expression cannot be a default value");
  }
};
pp.isSimpleAssignTarget = function(expr) {
  if (expr.type === "ParenthesizedExpression") {
    return this.isSimpleAssignTarget(expr.expression);
  }
  return expr.type === "Identifier" || expr.type === "MemberExpression";
};
var pp$1 = Parser.prototype;
pp$1.parseTopLevel = function(node) {
  var exports = {};
  if (!node.body) {
    node.body = [];
  }
  while (this.type !== types.eof) {
    var stmt = this.parseStatement(null, true, exports);
    node.body.push(stmt);
  }
  if (this.inModule) {
    for (var i = 0, list = Object.keys(this.undefinedExports); i < list.length; i += 1) {
      var name2 = list[i];
      this.raiseRecoverable(this.undefinedExports[name2].start, "Export '" + name2 + "' is not defined");
    }
  }
  this.adaptDirectivePrologue(node.body);
  this.next();
  node.sourceType = this.options.sourceType;
  return this.finishNode(node, "Program");
};
var loopLabel = { kind: "loop" }, switchLabel = { kind: "switch" };
pp$1.isLet = function(context) {
  if (this.options.ecmaVersion < 6 || !this.isContextual("let")) {
    return false;
  }
  skipWhiteSpace.lastIndex = this.pos;
  var skip = skipWhiteSpace.exec(this.input);
  var next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next);
  if (nextCh === 91) {
    return true;
  }
  if (context) {
    return false;
  }
  if (nextCh === 123) {
    return true;
  }
  if (isIdentifierStart(nextCh, true)) {
    var pos = next + 1;
    while (isIdentifierChar(this.input.charCodeAt(pos), true)) {
      ++pos;
    }
    var ident = this.input.slice(next, pos);
    if (!keywordRelationalOperator.test(ident)) {
      return true;
    }
  }
  return false;
};
pp$1.isAsyncFunction = function() {
  if (this.options.ecmaVersion < 8 || !this.isContextual("async")) {
    return false;
  }
  skipWhiteSpace.lastIndex = this.pos;
  var skip = skipWhiteSpace.exec(this.input);
  var next = this.pos + skip[0].length;
  return !lineBreak.test(this.input.slice(this.pos, next)) && this.input.slice(next, next + 8) === "function" && (next + 8 === this.input.length || !isIdentifierChar(this.input.charAt(next + 8)));
};
pp$1.parseStatement = function(context, topLevel, exports) {
  var starttype = this.type, node = this.startNode(), kind;
  if (this.isLet(context)) {
    starttype = types._var;
    kind = "let";
  }
  switch (starttype) {
    case types._break:
    case types._continue:
      return this.parseBreakContinueStatement(node, starttype.keyword);
    case types._debugger:
      return this.parseDebuggerStatement(node);
    case types._do:
      return this.parseDoStatement(node);
    case types._for:
      return this.parseForStatement(node);
    case types._function:
      if (context && (this.strict || context !== "if" && context !== "label") && this.options.ecmaVersion >= 6) {
        this.unexpected();
      }
      return this.parseFunctionStatement(node, false, !context);
    case types._class:
      if (context) {
        this.unexpected();
      }
      return this.parseClass(node, true);
    case types._if:
      return this.parseIfStatement(node);
    case types._return:
      return this.parseReturnStatement(node);
    case types._switch:
      return this.parseSwitchStatement(node);
    case types._throw:
      return this.parseThrowStatement(node);
    case types._try:
      return this.parseTryStatement(node);
    case types._const:
    case types._var:
      kind = kind || this.value;
      if (context && kind !== "var") {
        this.unexpected();
      }
      return this.parseVarStatement(node, kind);
    case types._while:
      return this.parseWhileStatement(node);
    case types._with:
      return this.parseWithStatement(node);
    case types.braceL:
      return this.parseBlock(true, node);
    case types.semi:
      return this.parseEmptyStatement(node);
    case types._export:
    case types._import:
      if (this.options.ecmaVersion > 10 && starttype === types._import) {
        skipWhiteSpace.lastIndex = this.pos;
        var skip = skipWhiteSpace.exec(this.input);
        var next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next);
        if (nextCh === 40 || nextCh === 46) {
          return this.parseExpressionStatement(node, this.parseExpression());
        }
      }
      if (!this.options.allowImportExportEverywhere) {
        if (!topLevel) {
          this.raise(this.start, "'import' and 'export' may only appear at the top level");
        }
        if (!this.inModule) {
          this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'");
        }
      }
      return starttype === types._import ? this.parseImport(node) : this.parseExport(node, exports);
    default:
      if (this.isAsyncFunction()) {
        if (context) {
          this.unexpected();
        }
        this.next();
        return this.parseFunctionStatement(node, true, !context);
      }
      var maybeName = this.value, expr = this.parseExpression();
      if (starttype === types.name && expr.type === "Identifier" && this.eat(types.colon)) {
        return this.parseLabeledStatement(node, maybeName, expr, context);
      } else {
        return this.parseExpressionStatement(node, expr);
      }
  }
};
pp$1.parseBreakContinueStatement = function(node, keyword) {
  var isBreak = keyword === "break";
  this.next();
  if (this.eat(types.semi) || this.insertSemicolon()) {
    node.label = null;
  } else if (this.type !== types.name) {
    this.unexpected();
  } else {
    node.label = this.parseIdent();
    this.semicolon();
  }
  var i = 0;
  for (; i < this.labels.length; ++i) {
    var lab = this.labels[i];
    if (node.label == null || lab.name === node.label.name) {
      if (lab.kind != null && (isBreak || lab.kind === "loop")) {
        break;
      }
      if (node.label && isBreak) {
        break;
      }
    }
  }
  if (i === this.labels.length) {
    this.raise(node.start, "Unsyntactic " + keyword);
  }
  return this.finishNode(node, isBreak ? "BreakStatement" : "ContinueStatement");
};
pp$1.parseDebuggerStatement = function(node) {
  this.next();
  this.semicolon();
  return this.finishNode(node, "DebuggerStatement");
};
pp$1.parseDoStatement = function(node) {
  this.next();
  this.labels.push(loopLabel);
  node.body = this.parseStatement("do");
  this.labels.pop();
  this.expect(types._while);
  node.test = this.parseParenExpression();
  if (this.options.ecmaVersion >= 6) {
    this.eat(types.semi);
  } else {
    this.semicolon();
  }
  return this.finishNode(node, "DoWhileStatement");
};
pp$1.parseForStatement = function(node) {
  this.next();
  var awaitAt = this.options.ecmaVersion >= 9 && (this.inAsync || !this.inFunction && this.options.allowAwaitOutsideFunction) && this.eatContextual("await") ? this.lastTokStart : -1;
  this.labels.push(loopLabel);
  this.enterScope(0);
  this.expect(types.parenL);
  if (this.type === types.semi) {
    if (awaitAt > -1) {
      this.unexpected(awaitAt);
    }
    return this.parseFor(node, null);
  }
  var isLet = this.isLet();
  if (this.type === types._var || this.type === types._const || isLet) {
    var init$1 = this.startNode(), kind = isLet ? "let" : this.value;
    this.next();
    this.parseVar(init$1, true, kind);
    this.finishNode(init$1, "VariableDeclaration");
    if ((this.type === types._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && init$1.declarations.length === 1) {
      if (this.options.ecmaVersion >= 9) {
        if (this.type === types._in) {
          if (awaitAt > -1) {
            this.unexpected(awaitAt);
          }
        } else {
          node.await = awaitAt > -1;
        }
      }
      return this.parseForIn(node, init$1);
    }
    if (awaitAt > -1) {
      this.unexpected(awaitAt);
    }
    return this.parseFor(node, init$1);
  }
  var refDestructuringErrors = new DestructuringErrors();
  var init = this.parseExpression(true, refDestructuringErrors);
  if (this.type === types._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) {
    if (this.options.ecmaVersion >= 9) {
      if (this.type === types._in) {
        if (awaitAt > -1) {
          this.unexpected(awaitAt);
        }
      } else {
        node.await = awaitAt > -1;
      }
    }
    this.toAssignable(init, false, refDestructuringErrors);
    this.checkLVal(init);
    return this.parseForIn(node, init);
  } else {
    this.checkExpressionErrors(refDestructuringErrors, true);
  }
  if (awaitAt > -1) {
    this.unexpected(awaitAt);
  }
  return this.parseFor(node, init);
};
pp$1.parseFunctionStatement = function(node, isAsync, declarationPosition) {
  this.next();
  return this.parseFunction(node, FUNC_STATEMENT | (declarationPosition ? 0 : FUNC_HANGING_STATEMENT), false, isAsync);
};
pp$1.parseIfStatement = function(node) {
  this.next();
  node.test = this.parseParenExpression();
  node.consequent = this.parseStatement("if");
  node.alternate = this.eat(types._else) ? this.parseStatement("if") : null;
  return this.finishNode(node, "IfStatement");
};
pp$1.parseReturnStatement = function(node) {
  if (!this.inFunction && !this.options.allowReturnOutsideFunction) {
    this.raise(this.start, "'return' outside of function");
  }
  this.next();
  if (this.eat(types.semi) || this.insertSemicolon()) {
    node.argument = null;
  } else {
    node.argument = this.parseExpression();
    this.semicolon();
  }
  return this.finishNode(node, "ReturnStatement");
};
pp$1.parseSwitchStatement = function(node) {
  this.next();
  node.discriminant = this.parseParenExpression();
  node.cases = [];
  this.expect(types.braceL);
  this.labels.push(switchLabel);
  this.enterScope(0);
  var cur;
  for (var sawDefault = false; this.type !== types.braceR; ) {
    if (this.type === types._case || this.type === types._default) {
      var isCase = this.type === types._case;
      if (cur) {
        this.finishNode(cur, "SwitchCase");
      }
      node.cases.push(cur = this.startNode());
      cur.consequent = [];
      this.next();
      if (isCase) {
        cur.test = this.parseExpression();
      } else {
        if (sawDefault) {
          this.raiseRecoverable(this.lastTokStart, "Multiple default clauses");
        }
        sawDefault = true;
        cur.test = null;
      }
      this.expect(types.colon);
    } else {
      if (!cur) {
        this.unexpected();
      }
      cur.consequent.push(this.parseStatement(null));
    }
  }
  this.exitScope();
  if (cur) {
    this.finishNode(cur, "SwitchCase");
  }
  this.next();
  this.labels.pop();
  return this.finishNode(node, "SwitchStatement");
};
pp$1.parseThrowStatement = function(node) {
  this.next();
  if (lineBreak.test(this.input.slice(this.lastTokEnd, this.start))) {
    this.raise(this.lastTokEnd, "Illegal newline after throw");
  }
  node.argument = this.parseExpression();
  this.semicolon();
  return this.finishNode(node, "ThrowStatement");
};
var empty = [];
pp$1.parseTryStatement = function(node) {
  this.next();
  node.block = this.parseBlock();
  node.handler = null;
  if (this.type === types._catch) {
    var clause = this.startNode();
    this.next();
    if (this.eat(types.parenL)) {
      clause.param = this.parseBindingAtom();
      var simple2 = clause.param.type === "Identifier";
      this.enterScope(simple2 ? SCOPE_SIMPLE_CATCH : 0);
      this.checkLVal(clause.param, simple2 ? BIND_SIMPLE_CATCH : BIND_LEXICAL);
      this.expect(types.parenR);
    } else {
      if (this.options.ecmaVersion < 10) {
        this.unexpected();
      }
      clause.param = null;
      this.enterScope(0);
    }
    clause.body = this.parseBlock(false);
    this.exitScope();
    node.handler = this.finishNode(clause, "CatchClause");
  }
  node.finalizer = this.eat(types._finally) ? this.parseBlock() : null;
  if (!node.handler && !node.finalizer) {
    this.raise(node.start, "Missing catch or finally clause");
  }
  return this.finishNode(node, "TryStatement");
};
pp$1.parseVarStatement = function(node, kind) {
  this.next();
  this.parseVar(node, false, kind);
  this.semicolon();
  return this.finishNode(node, "VariableDeclaration");
};
pp$1.parseWhileStatement = function(node) {
  this.next();
  node.test = this.parseParenExpression();
  this.labels.push(loopLabel);
  node.body = this.parseStatement("while");
  this.labels.pop();
  return this.finishNode(node, "WhileStatement");
};
pp$1.parseWithStatement = function(node) {
  if (this.strict) {
    this.raise(this.start, "'with' in strict mode");
  }
  this.next();
  node.object = this.parseParenExpression();
  node.body = this.parseStatement("with");
  return this.finishNode(node, "WithStatement");
};
pp$1.parseEmptyStatement = function(node) {
  this.next();
  return this.finishNode(node, "EmptyStatement");
};
pp$1.parseLabeledStatement = function(node, maybeName, expr, context) {
  for (var i$1 = 0, list = this.labels; i$1 < list.length; i$1 += 1) {
    var label = list[i$1];
    if (label.name === maybeName) {
      this.raise(expr.start, "Label '" + maybeName + "' is already declared");
    }
  }
  var kind = this.type.isLoop ? "loop" : this.type === types._switch ? "switch" : null;
  for (var i = this.labels.length - 1; i >= 0; i--) {
    var label$1 = this.labels[i];
    if (label$1.statementStart === node.start) {
      label$1.statementStart = this.start;
      label$1.kind = kind;
    } else {
      break;
    }
  }
  this.labels.push({ name: maybeName, kind, statementStart: this.start });
  node.body = this.parseStatement(context ? context.indexOf("label") === -1 ? context + "label" : context : "label");
  this.labels.pop();
  node.label = expr;
  return this.finishNode(node, "LabeledStatement");
};
pp$1.parseExpressionStatement = function(node, expr) {
  node.expression = expr;
  this.semicolon();
  return this.finishNode(node, "ExpressionStatement");
};
pp$1.parseBlock = function(createNewLexicalScope, node, exitStrict) {
  if (createNewLexicalScope === void 0) createNewLexicalScope = true;
  if (node === void 0) node = this.startNode();
  node.body = [];
  this.expect(types.braceL);
  if (createNewLexicalScope) {
    this.enterScope(0);
  }
  while (this.type !== types.braceR) {
    var stmt = this.parseStatement(null);
    node.body.push(stmt);
  }
  if (exitStrict) {
    this.strict = false;
  }
  this.next();
  if (createNewLexicalScope) {
    this.exitScope();
  }
  return this.finishNode(node, "BlockStatement");
};
pp$1.parseFor = function(node, init) {
  node.init = init;
  this.expect(types.semi);
  node.test = this.type === types.semi ? null : this.parseExpression();
  this.expect(types.semi);
  node.update = this.type === types.parenR ? null : this.parseExpression();
  this.expect(types.parenR);
  node.body = this.parseStatement("for");
  this.exitScope();
  this.labels.pop();
  return this.finishNode(node, "ForStatement");
};
pp$1.parseForIn = function(node, init) {
  var isForIn = this.type === types._in;
  this.next();
  if (init.type === "VariableDeclaration" && init.declarations[0].init != null && (!isForIn || this.options.ecmaVersion < 8 || this.strict || init.kind !== "var" || init.declarations[0].id.type !== "Identifier")) {
    this.raise(
      init.start,
      (isForIn ? "for-in" : "for-of") + " loop variable declaration may not have an initializer"
    );
  } else if (init.type === "AssignmentPattern") {
    this.raise(init.start, "Invalid left-hand side in for-loop");
  }
  node.left = init;
  node.right = isForIn ? this.parseExpression() : this.parseMaybeAssign();
  this.expect(types.parenR);
  node.body = this.parseStatement("for");
  this.exitScope();
  this.labels.pop();
  return this.finishNode(node, isForIn ? "ForInStatement" : "ForOfStatement");
};
pp$1.parseVar = function(node, isFor, kind) {
  node.declarations = [];
  node.kind = kind;
  for (; ; ) {
    var decl = this.startNode();
    this.parseVarId(decl, kind);
    if (this.eat(types.eq)) {
      decl.init = this.parseMaybeAssign(isFor);
    } else if (kind === "const" && !(this.type === types._in || this.options.ecmaVersion >= 6 && this.isContextual("of"))) {
      this.unexpected();
    } else if (decl.id.type !== "Identifier" && !(isFor && (this.type === types._in || this.isContextual("of")))) {
      this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value");
    } else {
      decl.init = null;
    }
    node.declarations.push(this.finishNode(decl, "VariableDeclarator"));
    if (!this.eat(types.comma)) {
      break;
    }
  }
  return node;
};
pp$1.parseVarId = function(decl, kind) {
  decl.id = this.parseBindingAtom();
  this.checkLVal(decl.id, kind === "var" ? BIND_VAR : BIND_LEXICAL, false);
};
var FUNC_STATEMENT = 1, FUNC_HANGING_STATEMENT = 2, FUNC_NULLABLE_ID = 4;
pp$1.parseFunction = function(node, statement, allowExpressionBody, isAsync) {
  this.initFunction(node);
  if (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !isAsync) {
    if (this.type === types.star && statement & FUNC_HANGING_STATEMENT) {
      this.unexpected();
    }
    node.generator = this.eat(types.star);
  }
  if (this.options.ecmaVersion >= 8) {
    node.async = !!isAsync;
  }
  if (statement & FUNC_STATEMENT) {
    node.id = statement & FUNC_NULLABLE_ID && this.type !== types.name ? null : this.parseIdent();
    if (node.id && !(statement & FUNC_HANGING_STATEMENT)) {
      this.checkLVal(node.id, this.strict || node.generator || node.async ? this.treatFunctionsAsVar ? BIND_VAR : BIND_LEXICAL : BIND_FUNCTION);
    }
  }
  var oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
  this.yieldPos = 0;
  this.awaitPos = 0;
  this.awaitIdentPos = 0;
  this.enterScope(functionFlags(node.async, node.generator));
  if (!(statement & FUNC_STATEMENT)) {
    node.id = this.type === types.name ? this.parseIdent() : null;
  }
  this.parseFunctionParams(node);
  this.parseFunctionBody(node, allowExpressionBody, false);
  this.yieldPos = oldYieldPos;
  this.awaitPos = oldAwaitPos;
  this.awaitIdentPos = oldAwaitIdentPos;
  return this.finishNode(node, statement & FUNC_STATEMENT ? "FunctionDeclaration" : "FunctionExpression");
};
pp$1.parseFunctionParams = function(node) {
  this.expect(types.parenL);
  node.params = this.parseBindingList(types.parenR, false, this.options.ecmaVersion >= 8);
  this.checkYieldAwaitInDefaultParams();
};
pp$1.parseClass = function(node, isStatement) {
  this.next();
  var oldStrict = this.strict;
  this.strict = true;
  this.parseClassId(node, isStatement);
  this.parseClassSuper(node);
  var classBody = this.startNode();
  var hadConstructor = false;
  classBody.body = [];
  this.expect(types.braceL);
  while (this.type !== types.braceR) {
    var element = this.parseClassElement(node.superClass !== null);
    if (element) {
      classBody.body.push(element);
      if (element.type === "MethodDefinition" && element.kind === "constructor") {
        if (hadConstructor) {
          this.raise(element.start, "Duplicate constructor in the same class");
        }
        hadConstructor = true;
      }
    }
  }
  this.strict = oldStrict;
  this.next();
  node.body = this.finishNode(classBody, "ClassBody");
  return this.finishNode(node, isStatement ? "ClassDeclaration" : "ClassExpression");
};
pp$1.parseClassElement = function(constructorAllowsSuper) {
  var this$1$1 = this;
  if (this.eat(types.semi)) {
    return null;
  }
  var method = this.startNode();
  var tryContextual = function(k2, noLineBreak) {
    if (noLineBreak === void 0) noLineBreak = false;
    var start = this$1$1.start, startLoc = this$1$1.startLoc;
    if (!this$1$1.eatContextual(k2)) {
      return false;
    }
    if (this$1$1.type !== types.parenL && (!noLineBreak || !this$1$1.canInsertSemicolon())) {
      return true;
    }
    if (method.key) {
      this$1$1.unexpected();
    }
    method.computed = false;
    method.key = this$1$1.startNodeAt(start, startLoc);
    method.key.name = k2;
    this$1$1.finishNode(method.key, "Identifier");
    return false;
  };
  method.kind = "method";
  method.static = tryContextual("static");
  var isGenerator = this.eat(types.star);
  var isAsync = false;
  if (!isGenerator) {
    if (this.options.ecmaVersion >= 8 && tryContextual("async", true)) {
      isAsync = true;
      isGenerator = this.options.ecmaVersion >= 9 && this.eat(types.star);
    } else if (tryContextual("get")) {
      method.kind = "get";
    } else if (tryContextual("set")) {
      method.kind = "set";
    }
  }
  if (!method.key) {
    this.parsePropertyName(method);
  }
  var key = method.key;
  var allowsDirectSuper = false;
  if (!method.computed && !method.static && (key.type === "Identifier" && key.name === "constructor" || key.type === "Literal" && key.value === "constructor")) {
    if (method.kind !== "method") {
      this.raise(key.start, "Constructor can't have get/set modifier");
    }
    if (isGenerator) {
      this.raise(key.start, "Constructor can't be a generator");
    }
    if (isAsync) {
      this.raise(key.start, "Constructor can't be an async method");
    }
    method.kind = "constructor";
    allowsDirectSuper = constructorAllowsSuper;
  } else if (method.static && key.type === "Identifier" && key.name === "prototype") {
    this.raise(key.start, "Classes may not have a static property named prototype");
  }
  this.parseClassMethod(method, isGenerator, isAsync, allowsDirectSuper);
  if (method.kind === "get" && method.value.params.length !== 0) {
    this.raiseRecoverable(method.value.start, "getter should have no params");
  }
  if (method.kind === "set" && method.value.params.length !== 1) {
    this.raiseRecoverable(method.value.start, "setter should have exactly one param");
  }
  if (method.kind === "set" && method.value.params[0].type === "RestElement") {
    this.raiseRecoverable(method.value.params[0].start, "Setter cannot use rest params");
  }
  return method;
};
pp$1.parseClassMethod = function(method, isGenerator, isAsync, allowsDirectSuper) {
  method.value = this.parseMethod(isGenerator, isAsync, allowsDirectSuper);
  return this.finishNode(method, "MethodDefinition");
};
pp$1.parseClassId = function(node, isStatement) {
  if (this.type === types.name) {
    node.id = this.parseIdent();
    if (isStatement) {
      this.checkLVal(node.id, BIND_LEXICAL, false);
    }
  } else {
    if (isStatement === true) {
      this.unexpected();
    }
    node.id = null;
  }
};
pp$1.parseClassSuper = function(node) {
  node.superClass = this.eat(types._extends) ? this.parseExprSubscripts() : null;
};
pp$1.parseExport = function(node, exports) {
  this.next();
  if (this.eat(types.star)) {
    if (this.options.ecmaVersion >= 11) {
      if (this.eatContextual("as")) {
        node.exported = this.parseIdent(true);
        this.checkExport(exports, node.exported.name, this.lastTokStart);
      } else {
        node.exported = null;
      }
    }
    this.expectContextual("from");
    if (this.type !== types.string) {
      this.unexpected();
    }
    node.source = this.parseExprAtom();
    this.semicolon();
    return this.finishNode(node, "ExportAllDeclaration");
  }
  if (this.eat(types._default)) {
    this.checkExport(exports, "default", this.lastTokStart);
    var isAsync;
    if (this.type === types._function || (isAsync = this.isAsyncFunction())) {
      var fNode = this.startNode();
      this.next();
      if (isAsync) {
        this.next();
      }
      node.declaration = this.parseFunction(fNode, FUNC_STATEMENT | FUNC_NULLABLE_ID, false, isAsync);
    } else if (this.type === types._class) {
      var cNode = this.startNode();
      node.declaration = this.parseClass(cNode, "nullableID");
    } else {
      node.declaration = this.parseMaybeAssign();
      this.semicolon();
    }
    return this.finishNode(node, "ExportDefaultDeclaration");
  }
  if (this.shouldParseExportStatement()) {
    node.declaration = this.parseStatement(null);
    if (node.declaration.type === "VariableDeclaration") {
      this.checkVariableExport(exports, node.declaration.declarations);
    } else {
      this.checkExport(exports, node.declaration.id.name, node.declaration.id.start);
    }
    node.specifiers = [];
    node.source = null;
  } else {
    node.declaration = null;
    node.specifiers = this.parseExportSpecifiers(exports);
    if (this.eatContextual("from")) {
      if (this.type !== types.string) {
        this.unexpected();
      }
      node.source = this.parseExprAtom();
    } else {
      for (var i = 0, list = node.specifiers; i < list.length; i += 1) {
        var spec = list[i];
        this.checkUnreserved(spec.local);
        this.checkLocalExport(spec.local);
      }
      node.source = null;
    }
    this.semicolon();
  }
  return this.finishNode(node, "ExportNamedDeclaration");
};
pp$1.checkExport = function(exports, name2, pos) {
  if (!exports) {
    return;
  }
  if (has(exports, name2)) {
    this.raiseRecoverable(pos, "Duplicate export '" + name2 + "'");
  }
  exports[name2] = true;
};
pp$1.checkPatternExport = function(exports, pat) {
  var type = pat.type;
  if (type === "Identifier") {
    this.checkExport(exports, pat.name, pat.start);
  } else if (type === "ObjectPattern") {
    for (var i = 0, list = pat.properties; i < list.length; i += 1) {
      var prop = list[i];
      this.checkPatternExport(exports, prop);
    }
  } else if (type === "ArrayPattern") {
    for (var i$1 = 0, list$1 = pat.elements; i$1 < list$1.length; i$1 += 1) {
      var elt = list$1[i$1];
      if (elt) {
        this.checkPatternExport(exports, elt);
      }
    }
  } else if (type === "Property") {
    this.checkPatternExport(exports, pat.value);
  } else if (type === "AssignmentPattern") {
    this.checkPatternExport(exports, pat.left);
  } else if (type === "RestElement") {
    this.checkPatternExport(exports, pat.argument);
  } else if (type === "ParenthesizedExpression") {
    this.checkPatternExport(exports, pat.expression);
  }
};
pp$1.checkVariableExport = function(exports, decls) {
  if (!exports) {
    return;
  }
  for (var i = 0, list = decls; i < list.length; i += 1) {
    var decl = list[i];
    this.checkPatternExport(exports, decl.id);
  }
};
pp$1.shouldParseExportStatement = function() {
  return this.type.keyword === "var" || this.type.keyword === "const" || this.type.keyword === "class" || this.type.keyword === "function" || this.isLet() || this.isAsyncFunction();
};
pp$1.parseExportSpecifiers = function(exports) {
  var nodes = [], first = true;
  this.expect(types.braceL);
  while (!this.eat(types.braceR)) {
    if (!first) {
      this.expect(types.comma);
      if (this.afterTrailingComma(types.braceR)) {
        break;
      }
    } else {
      first = false;
    }
    var node = this.startNode();
    node.local = this.parseIdent(true);
    node.exported = this.eatContextual("as") ? this.parseIdent(true) : node.local;
    this.checkExport(exports, node.exported.name, node.exported.start);
    nodes.push(this.finishNode(node, "ExportSpecifier"));
  }
  return nodes;
};
pp$1.parseImport = function(node) {
  this.next();
  if (this.type === types.string) {
    node.specifiers = empty;
    node.source = this.parseExprAtom();
  } else {
    node.specifiers = this.parseImportSpecifiers();
    this.expectContextual("from");
    node.source = this.type === types.string ? this.parseExprAtom() : this.unexpected();
  }
  this.semicolon();
  return this.finishNode(node, "ImportDeclaration");
};
pp$1.parseImportSpecifiers = function() {
  var nodes = [], first = true;
  if (this.type === types.name) {
    var node = this.startNode();
    node.local = this.parseIdent();
    this.checkLVal(node.local, BIND_LEXICAL);
    nodes.push(this.finishNode(node, "ImportDefaultSpecifier"));
    if (!this.eat(types.comma)) {
      return nodes;
    }
  }
  if (this.type === types.star) {
    var node$1 = this.startNode();
    this.next();
    this.expectContextual("as");
    node$1.local = this.parseIdent();
    this.checkLVal(node$1.local, BIND_LEXICAL);
    nodes.push(this.finishNode(node$1, "ImportNamespaceSpecifier"));
    return nodes;
  }
  this.expect(types.braceL);
  while (!this.eat(types.braceR)) {
    if (!first) {
      this.expect(types.comma);
      if (this.afterTrailingComma(types.braceR)) {
        break;
      }
    } else {
      first = false;
    }
    var node$2 = this.startNode();
    node$2.imported = this.parseIdent(true);
    if (this.eatContextual("as")) {
      node$2.local = this.parseIdent();
    } else {
      this.checkUnreserved(node$2.imported);
      node$2.local = node$2.imported;
    }
    this.checkLVal(node$2.local, BIND_LEXICAL);
    nodes.push(this.finishNode(node$2, "ImportSpecifier"));
  }
  return nodes;
};
pp$1.adaptDirectivePrologue = function(statements) {
  for (var i = 0; i < statements.length && this.isDirectiveCandidate(statements[i]); ++i) {
    statements[i].directive = statements[i].expression.raw.slice(1, -1);
  }
};
pp$1.isDirectiveCandidate = function(statement) {
  return statement.type === "ExpressionStatement" && statement.expression.type === "Literal" && typeof statement.expression.value === "string" && // Reject parenthesized strings.
  (this.input[statement.start] === '"' || this.input[statement.start] === "'");
};
var pp$2 = Parser.prototype;
pp$2.toAssignable = function(node, isBinding, refDestructuringErrors) {
  if (this.options.ecmaVersion >= 6 && node) {
    switch (node.type) {
      case "Identifier":
        if (this.inAsync && node.name === "await") {
          this.raise(node.start, "Cannot use 'await' as identifier inside an async function");
        }
        break;
      case "ObjectPattern":
      case "ArrayPattern":
      case "RestElement":
        break;
      case "ObjectExpression":
        node.type = "ObjectPattern";
        if (refDestructuringErrors) {
          this.checkPatternErrors(refDestructuringErrors, true);
        }
        for (var i = 0, list = node.properties; i < list.length; i += 1) {
          var prop = list[i];
          this.toAssignable(prop, isBinding);
          if (prop.type === "RestElement" && (prop.argument.type === "ArrayPattern" || prop.argument.type === "ObjectPattern")) {
            this.raise(prop.argument.start, "Unexpected token");
          }
        }
        break;
      case "Property":
        if (node.kind !== "init") {
          this.raise(node.key.start, "Object pattern can't contain getter or setter");
        }
        this.toAssignable(node.value, isBinding);
        break;
      case "ArrayExpression":
        node.type = "ArrayPattern";
        if (refDestructuringErrors) {
          this.checkPatternErrors(refDestructuringErrors, true);
        }
        this.toAssignableList(node.elements, isBinding);
        break;
      case "SpreadElement":
        node.type = "RestElement";
        this.toAssignable(node.argument, isBinding);
        if (node.argument.type === "AssignmentPattern") {
          this.raise(node.argument.start, "Rest elements cannot have a default value");
        }
        break;
      case "AssignmentExpression":
        if (node.operator !== "=") {
          this.raise(node.left.end, "Only '=' operator can be used for specifying default value.");
        }
        node.type = "AssignmentPattern";
        delete node.operator;
        this.toAssignable(node.left, isBinding);
      case "AssignmentPattern":
        break;
      case "ParenthesizedExpression":
        this.toAssignable(node.expression, isBinding, refDestructuringErrors);
        break;
      case "ChainExpression":
        this.raiseRecoverable(node.start, "Optional chaining cannot appear in left-hand side");
        break;
      case "MemberExpression":
        if (!isBinding) {
          break;
        }
      default:
        this.raise(node.start, "Assigning to rvalue");
    }
  } else if (refDestructuringErrors) {
    this.checkPatternErrors(refDestructuringErrors, true);
  }
  return node;
};
pp$2.toAssignableList = function(exprList, isBinding) {
  var end = exprList.length;
  for (var i = 0; i < end; i++) {
    var elt = exprList[i];
    if (elt) {
      this.toAssignable(elt, isBinding);
    }
  }
  if (end) {
    var last = exprList[end - 1];
    if (this.options.ecmaVersion === 6 && isBinding && last && last.type === "RestElement" && last.argument.type !== "Identifier") {
      this.unexpected(last.argument.start);
    }
  }
  return exprList;
};
pp$2.parseSpread = function(refDestructuringErrors) {
  var node = this.startNode();
  this.next();
  node.argument = this.parseMaybeAssign(false, refDestructuringErrors);
  return this.finishNode(node, "SpreadElement");
};
pp$2.parseRestBinding = function() {
  var node = this.startNode();
  this.next();
  if (this.options.ecmaVersion === 6 && this.type !== types.name) {
    this.unexpected();
  }
  node.argument = this.parseBindingAtom();
  return this.finishNode(node, "RestElement");
};
pp$2.parseBindingAtom = function() {
  if (this.options.ecmaVersion >= 6) {
    switch (this.type) {
      case types.bracketL:
        var node = this.startNode();
        this.next();
        node.elements = this.parseBindingList(types.bracketR, true, true);
        return this.finishNode(node, "ArrayPattern");
      case types.braceL:
        return this.parseObj(true);
    }
  }
  return this.parseIdent();
};
pp$2.parseBindingList = function(close, allowEmpty, allowTrailingComma) {
  var elts = [], first = true;
  while (!this.eat(close)) {
    if (first) {
      first = false;
    } else {
      this.expect(types.comma);
    }
    if (allowEmpty && this.type === types.comma) {
      elts.push(null);
    } else if (allowTrailingComma && this.afterTrailingComma(close)) {
      break;
    } else if (this.type === types.ellipsis) {
      var rest = this.parseRestBinding();
      this.parseBindingListItem(rest);
      elts.push(rest);
      if (this.type === types.comma) {
        this.raise(this.start, "Comma is not permitted after the rest element");
      }
      this.expect(close);
      break;
    } else {
      var elem = this.parseMaybeDefault(this.start, this.startLoc);
      this.parseBindingListItem(elem);
      elts.push(elem);
    }
  }
  return elts;
};
pp$2.parseBindingListItem = function(param) {
  return param;
};
pp$2.parseMaybeDefault = function(startPos, startLoc, left) {
  left = left || this.parseBindingAtom();
  if (this.options.ecmaVersion < 6 || !this.eat(types.eq)) {
    return left;
  }
  var node = this.startNodeAt(startPos, startLoc);
  node.left = left;
  node.right = this.parseMaybeAssign();
  return this.finishNode(node, "AssignmentPattern");
};
pp$2.checkLVal = function(expr, bindingType, checkClashes) {
  if (bindingType === void 0) bindingType = BIND_NONE;
  switch (expr.type) {
    case "Identifier":
      if (bindingType === BIND_LEXICAL && expr.name === "let") {
        this.raiseRecoverable(expr.start, "let is disallowed as a lexically bound name");
      }
      if (this.strict && this.reservedWordsStrictBind.test(expr.name)) {
        this.raiseRecoverable(expr.start, (bindingType ? "Binding " : "Assigning to ") + expr.name + " in strict mode");
      }
      if (checkClashes) {
        if (has(checkClashes, expr.name)) {
          this.raiseRecoverable(expr.start, "Argument name clash");
        }
        checkClashes[expr.name] = true;
      }
      if (bindingType !== BIND_NONE && bindingType !== BIND_OUTSIDE) {
        this.declareName(expr.name, bindingType, expr.start);
      }
      break;
    case "ChainExpression":
      this.raiseRecoverable(expr.start, "Optional chaining cannot appear in left-hand side");
      break;
    case "MemberExpression":
      if (bindingType) {
        this.raiseRecoverable(expr.start, "Binding member expression");
      }
      break;
    case "ObjectPattern":
      for (var i = 0, list = expr.properties; i < list.length; i += 1) {
        var prop = list[i];
        this.checkLVal(prop, bindingType, checkClashes);
      }
      break;
    case "Property":
      this.checkLVal(expr.value, bindingType, checkClashes);
      break;
    case "ArrayPattern":
      for (var i$1 = 0, list$1 = expr.elements; i$1 < list$1.length; i$1 += 1) {
        var elem = list$1[i$1];
        if (elem) {
          this.checkLVal(elem, bindingType, checkClashes);
        }
      }
      break;
    case "AssignmentPattern":
      this.checkLVal(expr.left, bindingType, checkClashes);
      break;
    case "RestElement":
      this.checkLVal(expr.argument, bindingType, checkClashes);
      break;
    case "ParenthesizedExpression":
      this.checkLVal(expr.expression, bindingType, checkClashes);
      break;
    default:
      this.raise(expr.start, (bindingType ? "Binding" : "Assigning to") + " rvalue");
  }
};
var pp$3 = Parser.prototype;
pp$3.checkPropClash = function(prop, propHash, refDestructuringErrors) {
  if (this.options.ecmaVersion >= 9 && prop.type === "SpreadElement") {
    return;
  }
  if (this.options.ecmaVersion >= 6 && (prop.computed || prop.method || prop.shorthand)) {
    return;
  }
  var key = prop.key;
  var name2;
  switch (key.type) {
    case "Identifier":
      name2 = key.name;
      break;
    case "Literal":
      name2 = String(key.value);
      break;
    default:
      return;
  }
  var kind = prop.kind;
  if (this.options.ecmaVersion >= 6) {
    if (name2 === "__proto__" && kind === "init") {
      if (propHash.proto) {
        if (refDestructuringErrors) {
          if (refDestructuringErrors.doubleProto < 0) {
            refDestructuringErrors.doubleProto = key.start;
          }
        } else {
          this.raiseRecoverable(key.start, "Redefinition of __proto__ property");
        }
      }
      propHash.proto = true;
    }
    return;
  }
  name2 = "$" + name2;
  var other = propHash[name2];
  if (other) {
    var redefinition;
    if (kind === "init") {
      redefinition = this.strict && other.init || other.get || other.set;
    } else {
      redefinition = other.init || other[kind];
    }
    if (redefinition) {
      this.raiseRecoverable(key.start, "Redefinition of property");
    }
  } else {
    other = propHash[name2] = {
      init: false,
      get: false,
      set: false
    };
  }
  other[kind] = true;
};
pp$3.parseExpression = function(noIn, refDestructuringErrors) {
  var startPos = this.start, startLoc = this.startLoc;
  var expr = this.parseMaybeAssign(noIn, refDestructuringErrors);
  if (this.type === types.comma) {
    var node = this.startNodeAt(startPos, startLoc);
    node.expressions = [expr];
    while (this.eat(types.comma)) {
      node.expressions.push(this.parseMaybeAssign(noIn, refDestructuringErrors));
    }
    return this.finishNode(node, "SequenceExpression");
  }
  return expr;
};
pp$3.parseMaybeAssign = function(noIn, refDestructuringErrors, afterLeftParse) {
  if (this.isContextual("yield")) {
    if (this.inGenerator) {
      return this.parseYield(noIn);
    } else {
      this.exprAllowed = false;
    }
  }
  var ownDestructuringErrors = false, oldParenAssign = -1, oldTrailingComma = -1;
  if (refDestructuringErrors) {
    oldParenAssign = refDestructuringErrors.parenthesizedAssign;
    oldTrailingComma = refDestructuringErrors.trailingComma;
    refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = -1;
  } else {
    refDestructuringErrors = new DestructuringErrors();
    ownDestructuringErrors = true;
  }
  var startPos = this.start, startLoc = this.startLoc;
  if (this.type === types.parenL || this.type === types.name) {
    this.potentialArrowAt = this.start;
  }
  var left = this.parseMaybeConditional(noIn, refDestructuringErrors);
  if (afterLeftParse) {
    left = afterLeftParse.call(this, left, startPos, startLoc);
  }
  if (this.type.isAssign) {
    var node = this.startNodeAt(startPos, startLoc);
    node.operator = this.value;
    node.left = this.type === types.eq ? this.toAssignable(left, false, refDestructuringErrors) : left;
    if (!ownDestructuringErrors) {
      refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = refDestructuringErrors.doubleProto = -1;
    }
    if (refDestructuringErrors.shorthandAssign >= node.left.start) {
      refDestructuringErrors.shorthandAssign = -1;
    }
    this.checkLVal(left);
    this.next();
    node.right = this.parseMaybeAssign(noIn);
    return this.finishNode(node, "AssignmentExpression");
  } else {
    if (ownDestructuringErrors) {
      this.checkExpressionErrors(refDestructuringErrors, true);
    }
  }
  if (oldParenAssign > -1) {
    refDestructuringErrors.parenthesizedAssign = oldParenAssign;
  }
  if (oldTrailingComma > -1) {
    refDestructuringErrors.trailingComma = oldTrailingComma;
  }
  return left;
};
pp$3.parseMaybeConditional = function(noIn, refDestructuringErrors) {
  var startPos = this.start, startLoc = this.startLoc;
  var expr = this.parseExprOps(noIn, refDestructuringErrors);
  if (this.checkExpressionErrors(refDestructuringErrors)) {
    return expr;
  }
  if (this.eat(types.question)) {
    var node = this.startNodeAt(startPos, startLoc);
    node.test = expr;
    node.consequent = this.parseMaybeAssign();
    this.expect(types.colon);
    node.alternate = this.parseMaybeAssign(noIn);
    return this.finishNode(node, "ConditionalExpression");
  }
  return expr;
};
pp$3.parseExprOps = function(noIn, refDestructuringErrors) {
  var startPos = this.start, startLoc = this.startLoc;
  var expr = this.parseMaybeUnary(refDestructuringErrors, false);
  if (this.checkExpressionErrors(refDestructuringErrors)) {
    return expr;
  }
  return expr.start === startPos && expr.type === "ArrowFunctionExpression" ? expr : this.parseExprOp(expr, startPos, startLoc, -1, noIn);
};
pp$3.parseExprOp = function(left, leftStartPos, leftStartLoc, minPrec, noIn) {
  var prec = this.type.binop;
  if (prec != null && (!noIn || this.type !== types._in)) {
    if (prec > minPrec) {
      var logical = this.type === types.logicalOR || this.type === types.logicalAND;
      var coalesce = this.type === types.coalesce;
      if (coalesce) {
        prec = types.logicalAND.binop;
      }
      var op = this.value;
      this.next();
      var startPos = this.start, startLoc = this.startLoc;
      var right = this.parseExprOp(this.parseMaybeUnary(null, false), startPos, startLoc, prec, noIn);
      var node = this.buildBinary(leftStartPos, leftStartLoc, left, right, op, logical || coalesce);
      if (logical && this.type === types.coalesce || coalesce && (this.type === types.logicalOR || this.type === types.logicalAND)) {
        this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses");
      }
      return this.parseExprOp(node, leftStartPos, leftStartLoc, minPrec, noIn);
    }
  }
  return left;
};
pp$3.buildBinary = function(startPos, startLoc, left, right, op, logical) {
  var node = this.startNodeAt(startPos, startLoc);
  node.left = left;
  node.operator = op;
  node.right = right;
  return this.finishNode(node, logical ? "LogicalExpression" : "BinaryExpression");
};
pp$3.parseMaybeUnary = function(refDestructuringErrors, sawUnary) {
  var startPos = this.start, startLoc = this.startLoc, expr;
  if (this.isContextual("await") && (this.inAsync || !this.inFunction && this.options.allowAwaitOutsideFunction)) {
    expr = this.parseAwait();
    sawUnary = true;
  } else if (this.type.prefix) {
    var node = this.startNode(), update = this.type === types.incDec;
    node.operator = this.value;
    node.prefix = true;
    this.next();
    node.argument = this.parseMaybeUnary(null, true);
    this.checkExpressionErrors(refDestructuringErrors, true);
    if (update) {
      this.checkLVal(node.argument);
    } else if (this.strict && node.operator === "delete" && node.argument.type === "Identifier") {
      this.raiseRecoverable(node.start, "Deleting local variable in strict mode");
    } else {
      sawUnary = true;
    }
    expr = this.finishNode(node, update ? "UpdateExpression" : "UnaryExpression");
  } else {
    expr = this.parseExprSubscripts(refDestructuringErrors);
    if (this.checkExpressionErrors(refDestructuringErrors)) {
      return expr;
    }
    while (this.type.postfix && !this.canInsertSemicolon()) {
      var node$1 = this.startNodeAt(startPos, startLoc);
      node$1.operator = this.value;
      node$1.prefix = false;
      node$1.argument = expr;
      this.checkLVal(expr);
      this.next();
      expr = this.finishNode(node$1, "UpdateExpression");
    }
  }
  if (!sawUnary && this.eat(types.starstar)) {
    return this.buildBinary(startPos, startLoc, expr, this.parseMaybeUnary(null, false), "**", false);
  } else {
    return expr;
  }
};
pp$3.parseExprSubscripts = function(refDestructuringErrors) {
  var startPos = this.start, startLoc = this.startLoc;
  var expr = this.parseExprAtom(refDestructuringErrors);
  if (expr.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")") {
    return expr;
  }
  var result = this.parseSubscripts(expr, startPos, startLoc);
  if (refDestructuringErrors && result.type === "MemberExpression") {
    if (refDestructuringErrors.parenthesizedAssign >= result.start) {
      refDestructuringErrors.parenthesizedAssign = -1;
    }
    if (refDestructuringErrors.parenthesizedBind >= result.start) {
      refDestructuringErrors.parenthesizedBind = -1;
    }
  }
  return result;
};
pp$3.parseSubscripts = function(base2, startPos, startLoc, noCalls) {
  var maybeAsyncArrow = this.options.ecmaVersion >= 8 && base2.type === "Identifier" && base2.name === "async" && this.lastTokEnd === base2.end && !this.canInsertSemicolon() && base2.end - base2.start === 5 && this.potentialArrowAt === base2.start;
  var optionalChained = false;
  while (true) {
    var element = this.parseSubscript(base2, startPos, startLoc, noCalls, maybeAsyncArrow, optionalChained);
    if (element.optional) {
      optionalChained = true;
    }
    if (element === base2 || element.type === "ArrowFunctionExpression") {
      if (optionalChained) {
        var chainNode = this.startNodeAt(startPos, startLoc);
        chainNode.expression = element;
        element = this.finishNode(chainNode, "ChainExpression");
      }
      return element;
    }
    base2 = element;
  }
};
pp$3.parseSubscript = function(base2, startPos, startLoc, noCalls, maybeAsyncArrow, optionalChained) {
  var optionalSupported = this.options.ecmaVersion >= 11;
  var optional = optionalSupported && this.eat(types.questionDot);
  if (noCalls && optional) {
    this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
  }
  var computed = this.eat(types.bracketL);
  if (computed || optional && this.type !== types.parenL && this.type !== types.backQuote || this.eat(types.dot)) {
    var node = this.startNodeAt(startPos, startLoc);
    node.object = base2;
    node.property = computed ? this.parseExpression() : this.parseIdent(this.options.allowReserved !== "never");
    node.computed = !!computed;
    if (computed) {
      this.expect(types.bracketR);
    }
    if (optionalSupported) {
      node.optional = optional;
    }
    base2 = this.finishNode(node, "MemberExpression");
  } else if (!noCalls && this.eat(types.parenL)) {
    var refDestructuringErrors = new DestructuringErrors(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
    this.yieldPos = 0;
    this.awaitPos = 0;
    this.awaitIdentPos = 0;
    var exprList = this.parseExprList(types.parenR, this.options.ecmaVersion >= 8, false, refDestructuringErrors);
    if (maybeAsyncArrow && !optional && !this.canInsertSemicolon() && this.eat(types.arrow)) {
      this.checkPatternErrors(refDestructuringErrors, false);
      this.checkYieldAwaitInDefaultParams();
      if (this.awaitIdentPos > 0) {
        this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function");
      }
      this.yieldPos = oldYieldPos;
      this.awaitPos = oldAwaitPos;
      this.awaitIdentPos = oldAwaitIdentPos;
      return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList, true);
    }
    this.checkExpressionErrors(refDestructuringErrors, true);
    this.yieldPos = oldYieldPos || this.yieldPos;
    this.awaitPos = oldAwaitPos || this.awaitPos;
    this.awaitIdentPos = oldAwaitIdentPos || this.awaitIdentPos;
    var node$1 = this.startNodeAt(startPos, startLoc);
    node$1.callee = base2;
    node$1.arguments = exprList;
    if (optionalSupported) {
      node$1.optional = optional;
    }
    base2 = this.finishNode(node$1, "CallExpression");
  } else if (this.type === types.backQuote) {
    if (optional || optionalChained) {
      this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
    }
    var node$2 = this.startNodeAt(startPos, startLoc);
    node$2.tag = base2;
    node$2.quasi = this.parseTemplate({ isTagged: true });
    base2 = this.finishNode(node$2, "TaggedTemplateExpression");
  }
  return base2;
};
pp$3.parseExprAtom = function(refDestructuringErrors) {
  if (this.type === types.slash) {
    this.readRegexp();
  }
  var node, canBeArrow = this.potentialArrowAt === this.start;
  switch (this.type) {
    case types._super:
      if (!this.allowSuper) {
        this.raise(this.start, "'super' keyword outside a method");
      }
      node = this.startNode();
      this.next();
      if (this.type === types.parenL && !this.allowDirectSuper) {
        this.raise(node.start, "super() call outside constructor of a subclass");
      }
      if (this.type !== types.dot && this.type !== types.bracketL && this.type !== types.parenL) {
        this.unexpected();
      }
      return this.finishNode(node, "Super");
    case types._this:
      node = this.startNode();
      this.next();
      return this.finishNode(node, "ThisExpression");
    case types.name:
      var startPos = this.start, startLoc = this.startLoc, containsEsc = this.containsEsc;
      var id = this.parseIdent(false);
      if (this.options.ecmaVersion >= 8 && !containsEsc && id.name === "async" && !this.canInsertSemicolon() && this.eat(types._function)) {
        return this.parseFunction(this.startNodeAt(startPos, startLoc), 0, false, true);
      }
      if (canBeArrow && !this.canInsertSemicolon()) {
        if (this.eat(types.arrow)) {
          return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], false);
        }
        if (this.options.ecmaVersion >= 8 && id.name === "async" && this.type === types.name && !containsEsc) {
          id = this.parseIdent(false);
          if (this.canInsertSemicolon() || !this.eat(types.arrow)) {
            this.unexpected();
          }
          return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], true);
        }
      }
      return id;
    case types.regexp:
      var value = this.value;
      node = this.parseLiteral(value.value);
      node.regex = { pattern: value.pattern, flags: value.flags };
      return node;
    case types.num:
    case types.string:
      return this.parseLiteral(this.value);
    case types._null:
    case types._true:
    case types._false:
      node = this.startNode();
      node.value = this.type === types._null ? null : this.type === types._true;
      node.raw = this.type.keyword;
      this.next();
      return this.finishNode(node, "Literal");
    case types.parenL:
      var start = this.start, expr = this.parseParenAndDistinguishExpression(canBeArrow);
      if (refDestructuringErrors) {
        if (refDestructuringErrors.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(expr)) {
          refDestructuringErrors.parenthesizedAssign = start;
        }
        if (refDestructuringErrors.parenthesizedBind < 0) {
          refDestructuringErrors.parenthesizedBind = start;
        }
      }
      return expr;
    case types.bracketL:
      node = this.startNode();
      this.next();
      node.elements = this.parseExprList(types.bracketR, true, true, refDestructuringErrors);
      return this.finishNode(node, "ArrayExpression");
    case types.braceL:
      return this.parseObj(false, refDestructuringErrors);
    case types._function:
      node = this.startNode();
      this.next();
      return this.parseFunction(node, 0);
    case types._class:
      return this.parseClass(this.startNode(), false);
    case types._new:
      return this.parseNew();
    case types.backQuote:
      return this.parseTemplate();
    case types._import:
      if (this.options.ecmaVersion >= 11) {
        return this.parseExprImport();
      } else {
        return this.unexpected();
      }
    default:
      this.unexpected();
  }
};
pp$3.parseExprImport = function() {
  var node = this.startNode();
  if (this.containsEsc) {
    this.raiseRecoverable(this.start, "Escape sequence in keyword import");
  }
  var meta = this.parseIdent(true);
  switch (this.type) {
    case types.parenL:
      return this.parseDynamicImport(node);
    case types.dot:
      node.meta = meta;
      return this.parseImportMeta(node);
    default:
      this.unexpected();
  }
};
pp$3.parseDynamicImport = function(node) {
  this.next();
  node.source = this.parseMaybeAssign();
  if (!this.eat(types.parenR)) {
    var errorPos = this.start;
    if (this.eat(types.comma) && this.eat(types.parenR)) {
      this.raiseRecoverable(errorPos, "Trailing comma is not allowed in import()");
    } else {
      this.unexpected(errorPos);
    }
  }
  return this.finishNode(node, "ImportExpression");
};
pp$3.parseImportMeta = function(node) {
  this.next();
  var containsEsc = this.containsEsc;
  node.property = this.parseIdent(true);
  if (node.property.name !== "meta") {
    this.raiseRecoverable(node.property.start, "The only valid meta property for import is 'import.meta'");
  }
  if (containsEsc) {
    this.raiseRecoverable(node.start, "'import.meta' must not contain escaped characters");
  }
  if (this.options.sourceType !== "module") {
    this.raiseRecoverable(node.start, "Cannot use 'import.meta' outside a module");
  }
  return this.finishNode(node, "MetaProperty");
};
pp$3.parseLiteral = function(value) {
  var node = this.startNode();
  node.value = value;
  node.raw = this.input.slice(this.start, this.end);
  if (node.raw.charCodeAt(node.raw.length - 1) === 110) {
    node.bigint = node.raw.slice(0, -1).replace(/_/g, "");
  }
  this.next();
  return this.finishNode(node, "Literal");
};
pp$3.parseParenExpression = function() {
  this.expect(types.parenL);
  var val = this.parseExpression();
  this.expect(types.parenR);
  return val;
};
pp$3.parseParenAndDistinguishExpression = function(canBeArrow) {
  var startPos = this.start, startLoc = this.startLoc, val, allowTrailingComma = this.options.ecmaVersion >= 8;
  if (this.options.ecmaVersion >= 6) {
    this.next();
    var innerStartPos = this.start, innerStartLoc = this.startLoc;
    var exprList = [], first = true, lastIsComma = false;
    var refDestructuringErrors = new DestructuringErrors(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, spreadStart;
    this.yieldPos = 0;
    this.awaitPos = 0;
    while (this.type !== types.parenR) {
      first ? first = false : this.expect(types.comma);
      if (allowTrailingComma && this.afterTrailingComma(types.parenR, true)) {
        lastIsComma = true;
        break;
      } else if (this.type === types.ellipsis) {
        spreadStart = this.start;
        exprList.push(this.parseParenItem(this.parseRestBinding()));
        if (this.type === types.comma) {
          this.raise(this.start, "Comma is not permitted after the rest element");
        }
        break;
      } else {
        exprList.push(this.parseMaybeAssign(false, refDestructuringErrors, this.parseParenItem));
      }
    }
    var innerEndPos = this.start, innerEndLoc = this.startLoc;
    this.expect(types.parenR);
    if (canBeArrow && !this.canInsertSemicolon() && this.eat(types.arrow)) {
      this.checkPatternErrors(refDestructuringErrors, false);
      this.checkYieldAwaitInDefaultParams();
      this.yieldPos = oldYieldPos;
      this.awaitPos = oldAwaitPos;
      return this.parseParenArrowList(startPos, startLoc, exprList);
    }
    if (!exprList.length || lastIsComma) {
      this.unexpected(this.lastTokStart);
    }
    if (spreadStart) {
      this.unexpected(spreadStart);
    }
    this.checkExpressionErrors(refDestructuringErrors, true);
    this.yieldPos = oldYieldPos || this.yieldPos;
    this.awaitPos = oldAwaitPos || this.awaitPos;
    if (exprList.length > 1) {
      val = this.startNodeAt(innerStartPos, innerStartLoc);
      val.expressions = exprList;
      this.finishNodeAt(val, "SequenceExpression", innerEndPos, innerEndLoc);
    } else {
      val = exprList[0];
    }
  } else {
    val = this.parseParenExpression();
  }
  if (this.options.preserveParens) {
    var par = this.startNodeAt(startPos, startLoc);
    par.expression = val;
    return this.finishNode(par, "ParenthesizedExpression");
  } else {
    return val;
  }
};
pp$3.parseParenItem = function(item) {
  return item;
};
pp$3.parseParenArrowList = function(startPos, startLoc, exprList) {
  return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList);
};
var empty$1 = [];
pp$3.parseNew = function() {
  if (this.containsEsc) {
    this.raiseRecoverable(this.start, "Escape sequence in keyword new");
  }
  var node = this.startNode();
  var meta = this.parseIdent(true);
  if (this.options.ecmaVersion >= 6 && this.eat(types.dot)) {
    node.meta = meta;
    var containsEsc = this.containsEsc;
    node.property = this.parseIdent(true);
    if (node.property.name !== "target") {
      this.raiseRecoverable(node.property.start, "The only valid meta property for new is 'new.target'");
    }
    if (containsEsc) {
      this.raiseRecoverable(node.start, "'new.target' must not contain escaped characters");
    }
    if (!this.inNonArrowFunction()) {
      this.raiseRecoverable(node.start, "'new.target' can only be used in functions");
    }
    return this.finishNode(node, "MetaProperty");
  }
  var startPos = this.start, startLoc = this.startLoc, isImport = this.type === types._import;
  node.callee = this.parseSubscripts(this.parseExprAtom(), startPos, startLoc, true);
  if (isImport && node.callee.type === "ImportExpression") {
    this.raise(startPos, "Cannot use new with import()");
  }
  if (this.eat(types.parenL)) {
    node.arguments = this.parseExprList(types.parenR, this.options.ecmaVersion >= 8, false);
  } else {
    node.arguments = empty$1;
  }
  return this.finishNode(node, "NewExpression");
};
pp$3.parseTemplateElement = function(ref2) {
  var isTagged = ref2.isTagged;
  var elem = this.startNode();
  if (this.type === types.invalidTemplate) {
    if (!isTagged) {
      this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal");
    }
    elem.value = {
      raw: this.value,
      cooked: null
    };
  } else {
    elem.value = {
      raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"),
      cooked: this.value
    };
  }
  this.next();
  elem.tail = this.type === types.backQuote;
  return this.finishNode(elem, "TemplateElement");
};
pp$3.parseTemplate = function(ref2) {
  if (ref2 === void 0) ref2 = {};
  var isTagged = ref2.isTagged;
  if (isTagged === void 0) isTagged = false;
  var node = this.startNode();
  this.next();
  node.expressions = [];
  var curElt = this.parseTemplateElement({ isTagged });
  node.quasis = [curElt];
  while (!curElt.tail) {
    if (this.type === types.eof) {
      this.raise(this.pos, "Unterminated template literal");
    }
    this.expect(types.dollarBraceL);
    node.expressions.push(this.parseExpression());
    this.expect(types.braceR);
    node.quasis.push(curElt = this.parseTemplateElement({ isTagged }));
  }
  this.next();
  return this.finishNode(node, "TemplateLiteral");
};
pp$3.isAsyncProp = function(prop) {
  return !prop.computed && prop.key.type === "Identifier" && prop.key.name === "async" && (this.type === types.name || this.type === types.num || this.type === types.string || this.type === types.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === types.star) && !lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
};
pp$3.parseObj = function(isPattern, refDestructuringErrors) {
  var node = this.startNode(), first = true, propHash = {};
  node.properties = [];
  this.next();
  while (!this.eat(types.braceR)) {
    if (!first) {
      this.expect(types.comma);
      if (this.options.ecmaVersion >= 5 && this.afterTrailingComma(types.braceR)) {
        break;
      }
    } else {
      first = false;
    }
    var prop = this.parseProperty(isPattern, refDestructuringErrors);
    if (!isPattern) {
      this.checkPropClash(prop, propHash, refDestructuringErrors);
    }
    node.properties.push(prop);
  }
  return this.finishNode(node, isPattern ? "ObjectPattern" : "ObjectExpression");
};
pp$3.parseProperty = function(isPattern, refDestructuringErrors) {
  var prop = this.startNode(), isGenerator, isAsync, startPos, startLoc;
  if (this.options.ecmaVersion >= 9 && this.eat(types.ellipsis)) {
    if (isPattern) {
      prop.argument = this.parseIdent(false);
      if (this.type === types.comma) {
        this.raise(this.start, "Comma is not permitted after the rest element");
      }
      return this.finishNode(prop, "RestElement");
    }
    if (this.type === types.parenL && refDestructuringErrors) {
      if (refDestructuringErrors.parenthesizedAssign < 0) {
        refDestructuringErrors.parenthesizedAssign = this.start;
      }
      if (refDestructuringErrors.parenthesizedBind < 0) {
        refDestructuringErrors.parenthesizedBind = this.start;
      }
    }
    prop.argument = this.parseMaybeAssign(false, refDestructuringErrors);
    if (this.type === types.comma && refDestructuringErrors && refDestructuringErrors.trailingComma < 0) {
      refDestructuringErrors.trailingComma = this.start;
    }
    return this.finishNode(prop, "SpreadElement");
  }
  if (this.options.ecmaVersion >= 6) {
    prop.method = false;
    prop.shorthand = false;
    if (isPattern || refDestructuringErrors) {
      startPos = this.start;
      startLoc = this.startLoc;
    }
    if (!isPattern) {
      isGenerator = this.eat(types.star);
    }
  }
  var containsEsc = this.containsEsc;
  this.parsePropertyName(prop);
  if (!isPattern && !containsEsc && this.options.ecmaVersion >= 8 && !isGenerator && this.isAsyncProp(prop)) {
    isAsync = true;
    isGenerator = this.options.ecmaVersion >= 9 && this.eat(types.star);
    this.parsePropertyName(prop, refDestructuringErrors);
  } else {
    isAsync = false;
  }
  this.parsePropertyValue(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc);
  return this.finishNode(prop, "Property");
};
pp$3.parsePropertyValue = function(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc) {
  if ((isGenerator || isAsync) && this.type === types.colon) {
    this.unexpected();
  }
  if (this.eat(types.colon)) {
    prop.value = isPattern ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(false, refDestructuringErrors);
    prop.kind = "init";
  } else if (this.options.ecmaVersion >= 6 && this.type === types.parenL) {
    if (isPattern) {
      this.unexpected();
    }
    prop.kind = "init";
    prop.method = true;
    prop.value = this.parseMethod(isGenerator, isAsync);
  } else if (!isPattern && !containsEsc && this.options.ecmaVersion >= 5 && !prop.computed && prop.key.type === "Identifier" && (prop.key.name === "get" || prop.key.name === "set") && (this.type !== types.comma && this.type !== types.braceR && this.type !== types.eq)) {
    if (isGenerator || isAsync) {
      this.unexpected();
    }
    prop.kind = prop.key.name;
    this.parsePropertyName(prop);
    prop.value = this.parseMethod(false);
    var paramCount = prop.kind === "get" ? 0 : 1;
    if (prop.value.params.length !== paramCount) {
      var start = prop.value.start;
      if (prop.kind === "get") {
        this.raiseRecoverable(start, "getter should have no params");
      } else {
        this.raiseRecoverable(start, "setter should have exactly one param");
      }
    } else {
      if (prop.kind === "set" && prop.value.params[0].type === "RestElement") {
        this.raiseRecoverable(prop.value.params[0].start, "Setter cannot use rest params");
      }
    }
  } else if (this.options.ecmaVersion >= 6 && !prop.computed && prop.key.type === "Identifier") {
    if (isGenerator || isAsync) {
      this.unexpected();
    }
    this.checkUnreserved(prop.key);
    if (prop.key.name === "await" && !this.awaitIdentPos) {
      this.awaitIdentPos = startPos;
    }
    prop.kind = "init";
    if (isPattern) {
      prop.value = this.parseMaybeDefault(startPos, startLoc, prop.key);
    } else if (this.type === types.eq && refDestructuringErrors) {
      if (refDestructuringErrors.shorthandAssign < 0) {
        refDestructuringErrors.shorthandAssign = this.start;
      }
      prop.value = this.parseMaybeDefault(startPos, startLoc, prop.key);
    } else {
      prop.value = prop.key;
    }
    prop.shorthand = true;
  } else {
    this.unexpected();
  }
};
pp$3.parsePropertyName = function(prop) {
  if (this.options.ecmaVersion >= 6) {
    if (this.eat(types.bracketL)) {
      prop.computed = true;
      prop.key = this.parseMaybeAssign();
      this.expect(types.bracketR);
      return prop.key;
    } else {
      prop.computed = false;
    }
  }
  return prop.key = this.type === types.num || this.type === types.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
};
pp$3.initFunction = function(node) {
  node.id = null;
  if (this.options.ecmaVersion >= 6) {
    node.generator = node.expression = false;
  }
  if (this.options.ecmaVersion >= 8) {
    node.async = false;
  }
};
pp$3.parseMethod = function(isGenerator, isAsync, allowDirectSuper) {
  var node = this.startNode(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
  this.initFunction(node);
  if (this.options.ecmaVersion >= 6) {
    node.generator = isGenerator;
  }
  if (this.options.ecmaVersion >= 8) {
    node.async = !!isAsync;
  }
  this.yieldPos = 0;
  this.awaitPos = 0;
  this.awaitIdentPos = 0;
  this.enterScope(functionFlags(isAsync, node.generator) | SCOPE_SUPER | (allowDirectSuper ? SCOPE_DIRECT_SUPER : 0));
  this.expect(types.parenL);
  node.params = this.parseBindingList(types.parenR, false, this.options.ecmaVersion >= 8);
  this.checkYieldAwaitInDefaultParams();
  this.parseFunctionBody(node, false, true);
  this.yieldPos = oldYieldPos;
  this.awaitPos = oldAwaitPos;
  this.awaitIdentPos = oldAwaitIdentPos;
  return this.finishNode(node, "FunctionExpression");
};
pp$3.parseArrowExpression = function(node, params, isAsync) {
  var oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
  this.enterScope(functionFlags(isAsync, false) | SCOPE_ARROW);
  this.initFunction(node);
  if (this.options.ecmaVersion >= 8) {
    node.async = !!isAsync;
  }
  this.yieldPos = 0;
  this.awaitPos = 0;
  this.awaitIdentPos = 0;
  node.params = this.toAssignableList(params, true);
  this.parseFunctionBody(node, true, false);
  this.yieldPos = oldYieldPos;
  this.awaitPos = oldAwaitPos;
  this.awaitIdentPos = oldAwaitIdentPos;
  return this.finishNode(node, "ArrowFunctionExpression");
};
pp$3.parseFunctionBody = function(node, isArrowFunction, isMethod) {
  var isExpression = isArrowFunction && this.type !== types.braceL;
  var oldStrict = this.strict, useStrict = false;
  if (isExpression) {
    node.body = this.parseMaybeAssign();
    node.expression = true;
    this.checkParams(node, false);
  } else {
    var nonSimple = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(node.params);
    if (!oldStrict || nonSimple) {
      useStrict = this.strictDirective(this.end);
      if (useStrict && nonSimple) {
        this.raiseRecoverable(node.start, "Illegal 'use strict' directive in function with non-simple parameter list");
      }
    }
    var oldLabels = this.labels;
    this.labels = [];
    if (useStrict) {
      this.strict = true;
    }
    this.checkParams(node, !oldStrict && !useStrict && !isArrowFunction && !isMethod && this.isSimpleParamList(node.params));
    if (this.strict && node.id) {
      this.checkLVal(node.id, BIND_OUTSIDE);
    }
    node.body = this.parseBlock(false, void 0, useStrict && !oldStrict);
    node.expression = false;
    this.adaptDirectivePrologue(node.body.body);
    this.labels = oldLabels;
  }
  this.exitScope();
};
pp$3.isSimpleParamList = function(params) {
  for (var i = 0, list = params; i < list.length; i += 1) {
    var param = list[i];
    if (param.type !== "Identifier") {
      return false;
    }
  }
  return true;
};
pp$3.checkParams = function(node, allowDuplicates) {
  var nameHash = {};
  for (var i = 0, list = node.params; i < list.length; i += 1) {
    var param = list[i];
    this.checkLVal(param, BIND_VAR, allowDuplicates ? null : nameHash);
  }
};
pp$3.parseExprList = function(close, allowTrailingComma, allowEmpty, refDestructuringErrors) {
  var elts = [], first = true;
  while (!this.eat(close)) {
    if (!first) {
      this.expect(types.comma);
      if (allowTrailingComma && this.afterTrailingComma(close)) {
        break;
      }
    } else {
      first = false;
    }
    var elt = void 0;
    if (allowEmpty && this.type === types.comma) {
      elt = null;
    } else if (this.type === types.ellipsis) {
      elt = this.parseSpread(refDestructuringErrors);
      if (refDestructuringErrors && this.type === types.comma && refDestructuringErrors.trailingComma < 0) {
        refDestructuringErrors.trailingComma = this.start;
      }
    } else {
      elt = this.parseMaybeAssign(false, refDestructuringErrors);
    }
    elts.push(elt);
  }
  return elts;
};
pp$3.checkUnreserved = function(ref2) {
  var start = ref2.start;
  var end = ref2.end;
  var name2 = ref2.name;
  if (this.inGenerator && name2 === "yield") {
    this.raiseRecoverable(start, "Cannot use 'yield' as identifier inside a generator");
  }
  if (this.inAsync && name2 === "await") {
    this.raiseRecoverable(start, "Cannot use 'await' as identifier inside an async function");
  }
  if (this.keywords.test(name2)) {
    this.raise(start, "Unexpected keyword '" + name2 + "'");
  }
  if (this.options.ecmaVersion < 6 && this.input.slice(start, end).indexOf("\\") !== -1) {
    return;
  }
  var re = this.strict ? this.reservedWordsStrict : this.reservedWords;
  if (re.test(name2)) {
    if (!this.inAsync && name2 === "await") {
      this.raiseRecoverable(start, "Cannot use keyword 'await' outside an async function");
    }
    this.raiseRecoverable(start, "The keyword '" + name2 + "' is reserved");
  }
};
pp$3.parseIdent = function(liberal, isBinding) {
  var node = this.startNode();
  if (this.type === types.name) {
    node.name = this.value;
  } else if (this.type.keyword) {
    node.name = this.type.keyword;
    if ((node.name === "class" || node.name === "function") && (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46)) {
      this.context.pop();
    }
  } else {
    this.unexpected();
  }
  this.next(!!liberal);
  this.finishNode(node, "Identifier");
  if (!liberal) {
    this.checkUnreserved(node);
    if (node.name === "await" && !this.awaitIdentPos) {
      this.awaitIdentPos = node.start;
    }
  }
  return node;
};
pp$3.parseYield = function(noIn) {
  if (!this.yieldPos) {
    this.yieldPos = this.start;
  }
  var node = this.startNode();
  this.next();
  if (this.type === types.semi || this.canInsertSemicolon() || this.type !== types.star && !this.type.startsExpr) {
    node.delegate = false;
    node.argument = null;
  } else {
    node.delegate = this.eat(types.star);
    node.argument = this.parseMaybeAssign(noIn);
  }
  return this.finishNode(node, "YieldExpression");
};
pp$3.parseAwait = function() {
  if (!this.awaitPos) {
    this.awaitPos = this.start;
  }
  var node = this.startNode();
  this.next();
  node.argument = this.parseMaybeUnary(null, false);
  return this.finishNode(node, "AwaitExpression");
};
var pp$4 = Parser.prototype;
pp$4.raise = function(pos, message) {
  var loc = getLineInfo(this.input, pos);
  message += " (" + loc.line + ":" + loc.column + ")";
  var err = new SyntaxError(message);
  err.pos = pos;
  err.loc = loc;
  err.raisedAt = this.pos;
  throw err;
};
pp$4.raiseRecoverable = pp$4.raise;
pp$4.curPosition = function() {
  if (this.options.locations) {
    return new Position(this.curLine, this.pos - this.lineStart);
  }
};
var pp$5 = Parser.prototype;
var Scope = function Scope2(flags) {
  this.flags = flags;
  this.var = [];
  this.lexical = [];
  this.functions = [];
};
pp$5.enterScope = function(flags) {
  this.scopeStack.push(new Scope(flags));
};
pp$5.exitScope = function() {
  this.scopeStack.pop();
};
pp$5.treatFunctionsAsVarInScope = function(scope) {
  return scope.flags & SCOPE_FUNCTION || !this.inModule && scope.flags & SCOPE_TOP;
};
pp$5.declareName = function(name2, bindingType, pos) {
  var redeclared = false;
  if (bindingType === BIND_LEXICAL) {
    var scope = this.currentScope();
    redeclared = scope.lexical.indexOf(name2) > -1 || scope.functions.indexOf(name2) > -1 || scope.var.indexOf(name2) > -1;
    scope.lexical.push(name2);
    if (this.inModule && scope.flags & SCOPE_TOP) {
      delete this.undefinedExports[name2];
    }
  } else if (bindingType === BIND_SIMPLE_CATCH) {
    var scope$1 = this.currentScope();
    scope$1.lexical.push(name2);
  } else if (bindingType === BIND_FUNCTION) {
    var scope$2 = this.currentScope();
    if (this.treatFunctionsAsVar) {
      redeclared = scope$2.lexical.indexOf(name2) > -1;
    } else {
      redeclared = scope$2.lexical.indexOf(name2) > -1 || scope$2.var.indexOf(name2) > -1;
    }
    scope$2.functions.push(name2);
  } else {
    for (var i = this.scopeStack.length - 1; i >= 0; --i) {
      var scope$3 = this.scopeStack[i];
      if (scope$3.lexical.indexOf(name2) > -1 && !(scope$3.flags & SCOPE_SIMPLE_CATCH && scope$3.lexical[0] === name2) || !this.treatFunctionsAsVarInScope(scope$3) && scope$3.functions.indexOf(name2) > -1) {
        redeclared = true;
        break;
      }
      scope$3.var.push(name2);
      if (this.inModule && scope$3.flags & SCOPE_TOP) {
        delete this.undefinedExports[name2];
      }
      if (scope$3.flags & SCOPE_VAR) {
        break;
      }
    }
  }
  if (redeclared) {
    this.raiseRecoverable(pos, "Identifier '" + name2 + "' has already been declared");
  }
};
pp$5.checkLocalExport = function(id) {
  if (this.scopeStack[0].lexical.indexOf(id.name) === -1 && this.scopeStack[0].var.indexOf(id.name) === -1) {
    this.undefinedExports[id.name] = id;
  }
};
pp$5.currentScope = function() {
  return this.scopeStack[this.scopeStack.length - 1];
};
pp$5.currentVarScope = function() {
  for (var i = this.scopeStack.length - 1; ; i--) {
    var scope = this.scopeStack[i];
    if (scope.flags & SCOPE_VAR) {
      return scope;
    }
  }
};
pp$5.currentThisScope = function() {
  for (var i = this.scopeStack.length - 1; ; i--) {
    var scope = this.scopeStack[i];
    if (scope.flags & SCOPE_VAR && !(scope.flags & SCOPE_ARROW)) {
      return scope;
    }
  }
};
var Node = function Node2(parser, pos, loc) {
  this.type = "";
  this.start = pos;
  this.end = 0;
  if (parser.options.locations) {
    this.loc = new SourceLocation(parser, loc);
  }
  if (parser.options.directSourceFile) {
    this.sourceFile = parser.options.directSourceFile;
  }
  if (parser.options.ranges) {
    this.range = [pos, 0];
  }
};
var pp$6 = Parser.prototype;
pp$6.startNode = function() {
  return new Node(this, this.start, this.startLoc);
};
pp$6.startNodeAt = function(pos, loc) {
  return new Node(this, pos, loc);
};
function finishNodeAt(node, type, pos, loc) {
  node.type = type;
  node.end = pos;
  if (this.options.locations) {
    node.loc.end = loc;
  }
  if (this.options.ranges) {
    node.range[1] = pos;
  }
  return node;
}
pp$6.finishNode = function(node, type) {
  return finishNodeAt.call(this, node, type, this.lastTokEnd, this.lastTokEndLoc);
};
pp$6.finishNodeAt = function(node, type, pos, loc) {
  return finishNodeAt.call(this, node, type, pos, loc);
};
var TokContext = function TokContext2(token, isExpr, preserveSpace, override, generator) {
  this.token = token;
  this.isExpr = !!isExpr;
  this.preserveSpace = !!preserveSpace;
  this.override = override;
  this.generator = !!generator;
};
var types$1 = {
  b_stat: new TokContext("{", false),
  b_expr: new TokContext("{", true),
  b_tmpl: new TokContext("${", false),
  p_stat: new TokContext("(", false),
  p_expr: new TokContext("(", true),
  q_tmpl: new TokContext("`", true, true, function(p2) {
    return p2.tryReadTemplateToken();
  }),
  f_stat: new TokContext("function", false),
  f_expr: new TokContext("function", true),
  f_expr_gen: new TokContext("function", true, false, null, true),
  f_gen: new TokContext("function", false, false, null, true)
};
var pp$7 = Parser.prototype;
pp$7.initialContext = function() {
  return [types$1.b_stat];
};
pp$7.braceIsBlock = function(prevType) {
  var parent = this.curContext();
  if (parent === types$1.f_expr || parent === types$1.f_stat) {
    return true;
  }
  if (prevType === types.colon && (parent === types$1.b_stat || parent === types$1.b_expr)) {
    return !parent.isExpr;
  }
  if (prevType === types._return || prevType === types.name && this.exprAllowed) {
    return lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
  }
  if (prevType === types._else || prevType === types.semi || prevType === types.eof || prevType === types.parenR || prevType === types.arrow) {
    return true;
  }
  if (prevType === types.braceL) {
    return parent === types$1.b_stat;
  }
  if (prevType === types._var || prevType === types._const || prevType === types.name) {
    return false;
  }
  return !this.exprAllowed;
};
pp$7.inGeneratorContext = function() {
  for (var i = this.context.length - 1; i >= 1; i--) {
    var context = this.context[i];
    if (context.token === "function") {
      return context.generator;
    }
  }
  return false;
};
pp$7.updateContext = function(prevType) {
  var update, type = this.type;
  if (type.keyword && prevType === types.dot) {
    this.exprAllowed = false;
  } else if (update = type.updateContext) {
    update.call(this, prevType);
  } else {
    this.exprAllowed = type.beforeExpr;
  }
};
types.parenR.updateContext = types.braceR.updateContext = function() {
  if (this.context.length === 1) {
    this.exprAllowed = true;
    return;
  }
  var out = this.context.pop();
  if (out === types$1.b_stat && this.curContext().token === "function") {
    out = this.context.pop();
  }
  this.exprAllowed = !out.isExpr;
};
types.braceL.updateContext = function(prevType) {
  this.context.push(this.braceIsBlock(prevType) ? types$1.b_stat : types$1.b_expr);
  this.exprAllowed = true;
};
types.dollarBraceL.updateContext = function() {
  this.context.push(types$1.b_tmpl);
  this.exprAllowed = true;
};
types.parenL.updateContext = function(prevType) {
  var statementParens = prevType === types._if || prevType === types._for || prevType === types._with || prevType === types._while;
  this.context.push(statementParens ? types$1.p_stat : types$1.p_expr);
  this.exprAllowed = true;
};
types.incDec.updateContext = function() {
};
types._function.updateContext = types._class.updateContext = function(prevType) {
  if (prevType.beforeExpr && prevType !== types.semi && prevType !== types._else && !(prevType === types._return && lineBreak.test(this.input.slice(this.lastTokEnd, this.start))) && !((prevType === types.colon || prevType === types.braceL) && this.curContext() === types$1.b_stat)) {
    this.context.push(types$1.f_expr);
  } else {
    this.context.push(types$1.f_stat);
  }
  this.exprAllowed = false;
};
types.backQuote.updateContext = function() {
  if (this.curContext() === types$1.q_tmpl) {
    this.context.pop();
  } else {
    this.context.push(types$1.q_tmpl);
  }
  this.exprAllowed = false;
};
types.star.updateContext = function(prevType) {
  if (prevType === types._function) {
    var index = this.context.length - 1;
    if (this.context[index] === types$1.f_expr) {
      this.context[index] = types$1.f_expr_gen;
    } else {
      this.context[index] = types$1.f_gen;
    }
  }
  this.exprAllowed = true;
};
types.name.updateContext = function(prevType) {
  var allowed = false;
  if (this.options.ecmaVersion >= 6 && prevType !== types.dot) {
    if (this.value === "of" && !this.exprAllowed || this.value === "yield" && this.inGeneratorContext()) {
      allowed = true;
    }
  }
  this.exprAllowed = allowed;
};
var ecma9BinaryProperties = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS";
var ecma10BinaryProperties = ecma9BinaryProperties + " Extended_Pictographic";
var ecma11BinaryProperties = ecma10BinaryProperties;
var unicodeBinaryProperties = {
  9: ecma9BinaryProperties,
  10: ecma10BinaryProperties,
  11: ecma11BinaryProperties
};
var unicodeGeneralCategoryValues = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu";
var ecma9ScriptValues = "Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb";
var ecma10ScriptValues = ecma9ScriptValues + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd";
var ecma11ScriptValues = ecma10ScriptValues + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho";
var unicodeScriptValues = {
  9: ecma9ScriptValues,
  10: ecma10ScriptValues,
  11: ecma11ScriptValues
};
var data = {};
function buildUnicodeData(ecmaVersion) {
  var d2 = data[ecmaVersion] = {
    binary: wordsRegexp(unicodeBinaryProperties[ecmaVersion] + " " + unicodeGeneralCategoryValues),
    nonBinary: {
      General_Category: wordsRegexp(unicodeGeneralCategoryValues),
      Script: wordsRegexp(unicodeScriptValues[ecmaVersion])
    }
  };
  d2.nonBinary.Script_Extensions = d2.nonBinary.Script;
  d2.nonBinary.gc = d2.nonBinary.General_Category;
  d2.nonBinary.sc = d2.nonBinary.Script;
  d2.nonBinary.scx = d2.nonBinary.Script_Extensions;
}
buildUnicodeData(9);
buildUnicodeData(10);
buildUnicodeData(11);
var pp$8 = Parser.prototype;
var RegExpValidationState = function RegExpValidationState2(parser) {
  this.parser = parser;
  this.validFlags = "gim" + (parser.options.ecmaVersion >= 6 ? "uy" : "") + (parser.options.ecmaVersion >= 9 ? "s" : "");
  this.unicodeProperties = data[parser.options.ecmaVersion >= 11 ? 11 : parser.options.ecmaVersion];
  this.source = "";
  this.flags = "";
  this.start = 0;
  this.switchU = false;
  this.switchN = false;
  this.pos = 0;
  this.lastIntValue = 0;
  this.lastStringValue = "";
  this.lastAssertionIsQuantifiable = false;
  this.numCapturingParens = 0;
  this.maxBackReference = 0;
  this.groupNames = [];
  this.backReferenceNames = [];
};
RegExpValidationState.prototype.reset = function reset(start, pattern, flags) {
  var unicode = flags.indexOf("u") !== -1;
  this.start = start | 0;
  this.source = pattern + "";
  this.flags = flags;
  this.switchU = unicode && this.parser.options.ecmaVersion >= 6;
  this.switchN = unicode && this.parser.options.ecmaVersion >= 9;
};
RegExpValidationState.prototype.raise = function raise(message) {
  this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + message);
};
RegExpValidationState.prototype.at = function at(i, forceU) {
  if (forceU === void 0) forceU = false;
  var s = this.source;
  var l2 = s.length;
  if (i >= l2) {
    return -1;
  }
  var c2 = s.charCodeAt(i);
  if (!(forceU || this.switchU) || c2 <= 55295 || c2 >= 57344 || i + 1 >= l2) {
    return c2;
  }
  var next = s.charCodeAt(i + 1);
  return next >= 56320 && next <= 57343 ? (c2 << 10) + next - 56613888 : c2;
};
RegExpValidationState.prototype.nextIndex = function nextIndex(i, forceU) {
  if (forceU === void 0) forceU = false;
  var s = this.source;
  var l2 = s.length;
  if (i >= l2) {
    return l2;
  }
  var c2 = s.charCodeAt(i), next;
  if (!(forceU || this.switchU) || c2 <= 55295 || c2 >= 57344 || i + 1 >= l2 || (next = s.charCodeAt(i + 1)) < 56320 || next > 57343) {
    return i + 1;
  }
  return i + 2;
};
RegExpValidationState.prototype.current = function current(forceU) {
  if (forceU === void 0) forceU = false;
  return this.at(this.pos, forceU);
};
RegExpValidationState.prototype.lookahead = function lookahead(forceU) {
  if (forceU === void 0) forceU = false;
  return this.at(this.nextIndex(this.pos, forceU), forceU);
};
RegExpValidationState.prototype.advance = function advance(forceU) {
  if (forceU === void 0) forceU = false;
  this.pos = this.nextIndex(this.pos, forceU);
};
RegExpValidationState.prototype.eat = function eat(ch, forceU) {
  if (forceU === void 0) forceU = false;
  if (this.current(forceU) === ch) {
    this.advance(forceU);
    return true;
  }
  return false;
};
function codePointToString(ch) {
  if (ch <= 65535) {
    return String.fromCharCode(ch);
  }
  ch -= 65536;
  return String.fromCharCode((ch >> 10) + 55296, (ch & 1023) + 56320);
}
pp$8.validateRegExpFlags = function(state) {
  var validFlags = state.validFlags;
  var flags = state.flags;
  for (var i = 0; i < flags.length; i++) {
    var flag = flags.charAt(i);
    if (validFlags.indexOf(flag) === -1) {
      this.raise(state.start, "Invalid regular expression flag");
    }
    if (flags.indexOf(flag, i + 1) > -1) {
      this.raise(state.start, "Duplicate regular expression flag");
    }
  }
};
pp$8.validateRegExpPattern = function(state) {
  this.regexp_pattern(state);
  if (!state.switchN && this.options.ecmaVersion >= 9 && state.groupNames.length > 0) {
    state.switchN = true;
    this.regexp_pattern(state);
  }
};
pp$8.regexp_pattern = function(state) {
  state.pos = 0;
  state.lastIntValue = 0;
  state.lastStringValue = "";
  state.lastAssertionIsQuantifiable = false;
  state.numCapturingParens = 0;
  state.maxBackReference = 0;
  state.groupNames.length = 0;
  state.backReferenceNames.length = 0;
  this.regexp_disjunction(state);
  if (state.pos !== state.source.length) {
    if (state.eat(
      41
      /* ) */
    )) {
      state.raise("Unmatched ')'");
    }
    if (state.eat(
      93
      /* ] */
    ) || state.eat(
      125
      /* } */
    )) {
      state.raise("Lone quantifier brackets");
    }
  }
  if (state.maxBackReference > state.numCapturingParens) {
    state.raise("Invalid escape");
  }
  for (var i = 0, list = state.backReferenceNames; i < list.length; i += 1) {
    var name2 = list[i];
    if (state.groupNames.indexOf(name2) === -1) {
      state.raise("Invalid named capture referenced");
    }
  }
};
pp$8.regexp_disjunction = function(state) {
  this.regexp_alternative(state);
  while (state.eat(
    124
    /* | */
  )) {
    this.regexp_alternative(state);
  }
  if (this.regexp_eatQuantifier(state, true)) {
    state.raise("Nothing to repeat");
  }
  if (state.eat(
    123
    /* { */
  )) {
    state.raise("Lone quantifier brackets");
  }
};
pp$8.regexp_alternative = function(state) {
  while (state.pos < state.source.length && this.regexp_eatTerm(state)) {
  }
};
pp$8.regexp_eatTerm = function(state) {
  if (this.regexp_eatAssertion(state)) {
    if (state.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(state)) {
      if (state.switchU) {
        state.raise("Invalid quantifier");
      }
    }
    return true;
  }
  if (state.switchU ? this.regexp_eatAtom(state) : this.regexp_eatExtendedAtom(state)) {
    this.regexp_eatQuantifier(state);
    return true;
  }
  return false;
};
pp$8.regexp_eatAssertion = function(state) {
  var start = state.pos;
  state.lastAssertionIsQuantifiable = false;
  if (state.eat(
    94
    /* ^ */
  ) || state.eat(
    36
    /* $ */
  )) {
    return true;
  }
  if (state.eat(
    92
    /* \ */
  )) {
    if (state.eat(
      66
      /* B */
    ) || state.eat(
      98
      /* b */
    )) {
      return true;
    }
    state.pos = start;
  }
  if (state.eat(
    40
    /* ( */
  ) && state.eat(
    63
    /* ? */
  )) {
    var lookbehind = false;
    if (this.options.ecmaVersion >= 9) {
      lookbehind = state.eat(
        60
        /* < */
      );
    }
    if (state.eat(
      61
      /* = */
    ) || state.eat(
      33
      /* ! */
    )) {
      this.regexp_disjunction(state);
      if (!state.eat(
        41
        /* ) */
      )) {
        state.raise("Unterminated group");
      }
      state.lastAssertionIsQuantifiable = !lookbehind;
      return true;
    }
  }
  state.pos = start;
  return false;
};
pp$8.regexp_eatQuantifier = function(state, noError) {
  if (noError === void 0) noError = false;
  if (this.regexp_eatQuantifierPrefix(state, noError)) {
    state.eat(
      63
      /* ? */
    );
    return true;
  }
  return false;
};
pp$8.regexp_eatQuantifierPrefix = function(state, noError) {
  return state.eat(
    42
    /* * */
  ) || state.eat(
    43
    /* + */
  ) || state.eat(
    63
    /* ? */
  ) || this.regexp_eatBracedQuantifier(state, noError);
};
pp$8.regexp_eatBracedQuantifier = function(state, noError) {
  var start = state.pos;
  if (state.eat(
    123
    /* { */
  )) {
    var min = 0, max = -1;
    if (this.regexp_eatDecimalDigits(state)) {
      min = state.lastIntValue;
      if (state.eat(
        44
        /* , */
      ) && this.regexp_eatDecimalDigits(state)) {
        max = state.lastIntValue;
      }
      if (state.eat(
        125
        /* } */
      )) {
        if (max !== -1 && max < min && !noError) {
          state.raise("numbers out of order in {} quantifier");
        }
        return true;
      }
    }
    if (state.switchU && !noError) {
      state.raise("Incomplete quantifier");
    }
    state.pos = start;
  }
  return false;
};
pp$8.regexp_eatAtom = function(state) {
  return this.regexp_eatPatternCharacters(state) || state.eat(
    46
    /* . */
  ) || this.regexp_eatReverseSolidusAtomEscape(state) || this.regexp_eatCharacterClass(state) || this.regexp_eatUncapturingGroup(state) || this.regexp_eatCapturingGroup(state);
};
pp$8.regexp_eatReverseSolidusAtomEscape = function(state) {
  var start = state.pos;
  if (state.eat(
    92
    /* \ */
  )) {
    if (this.regexp_eatAtomEscape(state)) {
      return true;
    }
    state.pos = start;
  }
  return false;
};
pp$8.regexp_eatUncapturingGroup = function(state) {
  var start = state.pos;
  if (state.eat(
    40
    /* ( */
  )) {
    if (state.eat(
      63
      /* ? */
    ) && state.eat(
      58
      /* : */
    )) {
      this.regexp_disjunction(state);
      if (state.eat(
        41
        /* ) */
      )) {
        return true;
      }
      state.raise("Unterminated group");
    }
    state.pos = start;
  }
  return false;
};
pp$8.regexp_eatCapturingGroup = function(state) {
  if (state.eat(
    40
    /* ( */
  )) {
    if (this.options.ecmaVersion >= 9) {
      this.regexp_groupSpecifier(state);
    } else if (state.current() === 63) {
      state.raise("Invalid group");
    }
    this.regexp_disjunction(state);
    if (state.eat(
      41
      /* ) */
    )) {
      state.numCapturingParens += 1;
      return true;
    }
    state.raise("Unterminated group");
  }
  return false;
};
pp$8.regexp_eatExtendedAtom = function(state) {
  return state.eat(
    46
    /* . */
  ) || this.regexp_eatReverseSolidusAtomEscape(state) || this.regexp_eatCharacterClass(state) || this.regexp_eatUncapturingGroup(state) || this.regexp_eatCapturingGroup(state) || this.regexp_eatInvalidBracedQuantifier(state) || this.regexp_eatExtendedPatternCharacter(state);
};
pp$8.regexp_eatInvalidBracedQuantifier = function(state) {
  if (this.regexp_eatBracedQuantifier(state, true)) {
    state.raise("Nothing to repeat");
  }
  return false;
};
pp$8.regexp_eatSyntaxCharacter = function(state) {
  var ch = state.current();
  if (isSyntaxCharacter(ch)) {
    state.lastIntValue = ch;
    state.advance();
    return true;
  }
  return false;
};
function isSyntaxCharacter(ch) {
  return ch === 36 || ch >= 40 && ch <= 43 || ch === 46 || ch === 63 || ch >= 91 && ch <= 94 || ch >= 123 && ch <= 125;
}
pp$8.regexp_eatPatternCharacters = function(state) {
  var start = state.pos;
  var ch = 0;
  while ((ch = state.current()) !== -1 && !isSyntaxCharacter(ch)) {
    state.advance();
  }
  return state.pos !== start;
};
pp$8.regexp_eatExtendedPatternCharacter = function(state) {
  var ch = state.current();
  if (ch !== -1 && ch !== 36 && !(ch >= 40 && ch <= 43) && ch !== 46 && ch !== 63 && ch !== 91 && ch !== 94 && ch !== 124) {
    state.advance();
    return true;
  }
  return false;
};
pp$8.regexp_groupSpecifier = function(state) {
  if (state.eat(
    63
    /* ? */
  )) {
    if (this.regexp_eatGroupName(state)) {
      if (state.groupNames.indexOf(state.lastStringValue) !== -1) {
        state.raise("Duplicate capture group name");
      }
      state.groupNames.push(state.lastStringValue);
      return;
    }
    state.raise("Invalid group");
  }
};
pp$8.regexp_eatGroupName = function(state) {
  state.lastStringValue = "";
  if (state.eat(
    60
    /* < */
  )) {
    if (this.regexp_eatRegExpIdentifierName(state) && state.eat(
      62
      /* > */
    )) {
      return true;
    }
    state.raise("Invalid capture group name");
  }
  return false;
};
pp$8.regexp_eatRegExpIdentifierName = function(state) {
  state.lastStringValue = "";
  if (this.regexp_eatRegExpIdentifierStart(state)) {
    state.lastStringValue += codePointToString(state.lastIntValue);
    while (this.regexp_eatRegExpIdentifierPart(state)) {
      state.lastStringValue += codePointToString(state.lastIntValue);
    }
    return true;
  }
  return false;
};
pp$8.regexp_eatRegExpIdentifierStart = function(state) {
  var start = state.pos;
  var forceU = this.options.ecmaVersion >= 11;
  var ch = state.current(forceU);
  state.advance(forceU);
  if (ch === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(state, forceU)) {
    ch = state.lastIntValue;
  }
  if (isRegExpIdentifierStart(ch)) {
    state.lastIntValue = ch;
    return true;
  }
  state.pos = start;
  return false;
};
function isRegExpIdentifierStart(ch) {
  return isIdentifierStart(ch, true) || ch === 36 || ch === 95;
}
pp$8.regexp_eatRegExpIdentifierPart = function(state) {
  var start = state.pos;
  var forceU = this.options.ecmaVersion >= 11;
  var ch = state.current(forceU);
  state.advance(forceU);
  if (ch === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(state, forceU)) {
    ch = state.lastIntValue;
  }
  if (isRegExpIdentifierPart(ch)) {
    state.lastIntValue = ch;
    return true;
  }
  state.pos = start;
  return false;
};
function isRegExpIdentifierPart(ch) {
  return isIdentifierChar(ch, true) || ch === 36 || ch === 95 || ch === 8204 || ch === 8205;
}
pp$8.regexp_eatAtomEscape = function(state) {
  if (this.regexp_eatBackReference(state) || this.regexp_eatCharacterClassEscape(state) || this.regexp_eatCharacterEscape(state) || state.switchN && this.regexp_eatKGroupName(state)) {
    return true;
  }
  if (state.switchU) {
    if (state.current() === 99) {
      state.raise("Invalid unicode escape");
    }
    state.raise("Invalid escape");
  }
  return false;
};
pp$8.regexp_eatBackReference = function(state) {
  var start = state.pos;
  if (this.regexp_eatDecimalEscape(state)) {
    var n2 = state.lastIntValue;
    if (state.switchU) {
      if (n2 > state.maxBackReference) {
        state.maxBackReference = n2;
      }
      return true;
    }
    if (n2 <= state.numCapturingParens) {
      return true;
    }
    state.pos = start;
  }
  return false;
};
pp$8.regexp_eatKGroupName = function(state) {
  if (state.eat(
    107
    /* k */
  )) {
    if (this.regexp_eatGroupName(state)) {
      state.backReferenceNames.push(state.lastStringValue);
      return true;
    }
    state.raise("Invalid named reference");
  }
  return false;
};
pp$8.regexp_eatCharacterEscape = function(state) {
  return this.regexp_eatControlEscape(state) || this.regexp_eatCControlLetter(state) || this.regexp_eatZero(state) || this.regexp_eatHexEscapeSequence(state) || this.regexp_eatRegExpUnicodeEscapeSequence(state, false) || !state.switchU && this.regexp_eatLegacyOctalEscapeSequence(state) || this.regexp_eatIdentityEscape(state);
};
pp$8.regexp_eatCControlLetter = function(state) {
  var start = state.pos;
  if (state.eat(
    99
    /* c */
  )) {
    if (this.regexp_eatControlLetter(state)) {
      return true;
    }
    state.pos = start;
  }
  return false;
};
pp$8.regexp_eatZero = function(state) {
  if (state.current() === 48 && !isDecimalDigit(state.lookahead())) {
    state.lastIntValue = 0;
    state.advance();
    return true;
  }
  return false;
};
pp$8.regexp_eatControlEscape = function(state) {
  var ch = state.current();
  if (ch === 116) {
    state.lastIntValue = 9;
    state.advance();
    return true;
  }
  if (ch === 110) {
    state.lastIntValue = 10;
    state.advance();
    return true;
  }
  if (ch === 118) {
    state.lastIntValue = 11;
    state.advance();
    return true;
  }
  if (ch === 102) {
    state.lastIntValue = 12;
    state.advance();
    return true;
  }
  if (ch === 114) {
    state.lastIntValue = 13;
    state.advance();
    return true;
  }
  return false;
};
pp$8.regexp_eatControlLetter = function(state) {
  var ch = state.current();
  if (isControlLetter(ch)) {
    state.lastIntValue = ch % 32;
    state.advance();
    return true;
  }
  return false;
};
function isControlLetter(ch) {
  return ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122;
}
pp$8.regexp_eatRegExpUnicodeEscapeSequence = function(state, forceU) {
  if (forceU === void 0) forceU = false;
  var start = state.pos;
  var switchU = forceU || state.switchU;
  if (state.eat(
    117
    /* u */
  )) {
    if (this.regexp_eatFixedHexDigits(state, 4)) {
      var lead = state.lastIntValue;
      if (switchU && lead >= 55296 && lead <= 56319) {
        var leadSurrogateEnd = state.pos;
        if (state.eat(
          92
          /* \ */
        ) && state.eat(
          117
          /* u */
        ) && this.regexp_eatFixedHexDigits(state, 4)) {
          var trail = state.lastIntValue;
          if (trail >= 56320 && trail <= 57343) {
            state.lastIntValue = (lead - 55296) * 1024 + (trail - 56320) + 65536;
            return true;
          }
        }
        state.pos = leadSurrogateEnd;
        state.lastIntValue = lead;
      }
      return true;
    }
    if (switchU && state.eat(
      123
      /* { */
    ) && this.regexp_eatHexDigits(state) && state.eat(
      125
      /* } */
    ) && isValidUnicode(state.lastIntValue)) {
      return true;
    }
    if (switchU) {
      state.raise("Invalid unicode escape");
    }
    state.pos = start;
  }
  return false;
};
function isValidUnicode(ch) {
  return ch >= 0 && ch <= 1114111;
}
pp$8.regexp_eatIdentityEscape = function(state) {
  if (state.switchU) {
    if (this.regexp_eatSyntaxCharacter(state)) {
      return true;
    }
    if (state.eat(
      47
      /* / */
    )) {
      state.lastIntValue = 47;
      return true;
    }
    return false;
  }
  var ch = state.current();
  if (ch !== 99 && (!state.switchN || ch !== 107)) {
    state.lastIntValue = ch;
    state.advance();
    return true;
  }
  return false;
};
pp$8.regexp_eatDecimalEscape = function(state) {
  state.lastIntValue = 0;
  var ch = state.current();
  if (ch >= 49 && ch <= 57) {
    do {
      state.lastIntValue = 10 * state.lastIntValue + (ch - 48);
      state.advance();
    } while ((ch = state.current()) >= 48 && ch <= 57);
    return true;
  }
  return false;
};
pp$8.regexp_eatCharacterClassEscape = function(state) {
  var ch = state.current();
  if (isCharacterClassEscape(ch)) {
    state.lastIntValue = -1;
    state.advance();
    return true;
  }
  if (state.switchU && this.options.ecmaVersion >= 9 && (ch === 80 || ch === 112)) {
    state.lastIntValue = -1;
    state.advance();
    if (state.eat(
      123
      /* { */
    ) && this.regexp_eatUnicodePropertyValueExpression(state) && state.eat(
      125
      /* } */
    )) {
      return true;
    }
    state.raise("Invalid property name");
  }
  return false;
};
function isCharacterClassEscape(ch) {
  return ch === 100 || ch === 68 || ch === 115 || ch === 83 || ch === 119 || ch === 87;
}
pp$8.regexp_eatUnicodePropertyValueExpression = function(state) {
  var start = state.pos;
  if (this.regexp_eatUnicodePropertyName(state) && state.eat(
    61
    /* = */
  )) {
    var name2 = state.lastStringValue;
    if (this.regexp_eatUnicodePropertyValue(state)) {
      var value = state.lastStringValue;
      this.regexp_validateUnicodePropertyNameAndValue(state, name2, value);
      return true;
    }
  }
  state.pos = start;
  if (this.regexp_eatLoneUnicodePropertyNameOrValue(state)) {
    var nameOrValue = state.lastStringValue;
    this.regexp_validateUnicodePropertyNameOrValue(state, nameOrValue);
    return true;
  }
  return false;
};
pp$8.regexp_validateUnicodePropertyNameAndValue = function(state, name2, value) {
  if (!has(state.unicodeProperties.nonBinary, name2)) {
    state.raise("Invalid property name");
  }
  if (!state.unicodeProperties.nonBinary[name2].test(value)) {
    state.raise("Invalid property value");
  }
};
pp$8.regexp_validateUnicodePropertyNameOrValue = function(state, nameOrValue) {
  if (!state.unicodeProperties.binary.test(nameOrValue)) {
    state.raise("Invalid property name");
  }
};
pp$8.regexp_eatUnicodePropertyName = function(state) {
  var ch = 0;
  state.lastStringValue = "";
  while (isUnicodePropertyNameCharacter(ch = state.current())) {
    state.lastStringValue += codePointToString(ch);
    state.advance();
  }
  return state.lastStringValue !== "";
};
function isUnicodePropertyNameCharacter(ch) {
  return isControlLetter(ch) || ch === 95;
}
pp$8.regexp_eatUnicodePropertyValue = function(state) {
  var ch = 0;
  state.lastStringValue = "";
  while (isUnicodePropertyValueCharacter(ch = state.current())) {
    state.lastStringValue += codePointToString(ch);
    state.advance();
  }
  return state.lastStringValue !== "";
};
function isUnicodePropertyValueCharacter(ch) {
  return isUnicodePropertyNameCharacter(ch) || isDecimalDigit(ch);
}
pp$8.regexp_eatLoneUnicodePropertyNameOrValue = function(state) {
  return this.regexp_eatUnicodePropertyValue(state);
};
pp$8.regexp_eatCharacterClass = function(state) {
  if (state.eat(
    91
    /* [ */
  )) {
    state.eat(
      94
      /* ^ */
    );
    this.regexp_classRanges(state);
    if (state.eat(
      93
      /* ] */
    )) {
      return true;
    }
    state.raise("Unterminated character class");
  }
  return false;
};
pp$8.regexp_classRanges = function(state) {
  while (this.regexp_eatClassAtom(state)) {
    var left = state.lastIntValue;
    if (state.eat(
      45
      /* - */
    ) && this.regexp_eatClassAtom(state)) {
      var right = state.lastIntValue;
      if (state.switchU && (left === -1 || right === -1)) {
        state.raise("Invalid character class");
      }
      if (left !== -1 && right !== -1 && left > right) {
        state.raise("Range out of order in character class");
      }
    }
  }
};
pp$8.regexp_eatClassAtom = function(state) {
  var start = state.pos;
  if (state.eat(
    92
    /* \ */
  )) {
    if (this.regexp_eatClassEscape(state)) {
      return true;
    }
    if (state.switchU) {
      var ch$1 = state.current();
      if (ch$1 === 99 || isOctalDigit(ch$1)) {
        state.raise("Invalid class escape");
      }
      state.raise("Invalid escape");
    }
    state.pos = start;
  }
  var ch = state.current();
  if (ch !== 93) {
    state.lastIntValue = ch;
    state.advance();
    return true;
  }
  return false;
};
pp$8.regexp_eatClassEscape = function(state) {
  var start = state.pos;
  if (state.eat(
    98
    /* b */
  )) {
    state.lastIntValue = 8;
    return true;
  }
  if (state.switchU && state.eat(
    45
    /* - */
  )) {
    state.lastIntValue = 45;
    return true;
  }
  if (!state.switchU && state.eat(
    99
    /* c */
  )) {
    if (this.regexp_eatClassControlLetter(state)) {
      return true;
    }
    state.pos = start;
  }
  return this.regexp_eatCharacterClassEscape(state) || this.regexp_eatCharacterEscape(state);
};
pp$8.regexp_eatClassControlLetter = function(state) {
  var ch = state.current();
  if (isDecimalDigit(ch) || ch === 95) {
    state.lastIntValue = ch % 32;
    state.advance();
    return true;
  }
  return false;
};
pp$8.regexp_eatHexEscapeSequence = function(state) {
  var start = state.pos;
  if (state.eat(
    120
    /* x */
  )) {
    if (this.regexp_eatFixedHexDigits(state, 2)) {
      return true;
    }
    if (state.switchU) {
      state.raise("Invalid escape");
    }
    state.pos = start;
  }
  return false;
};
pp$8.regexp_eatDecimalDigits = function(state) {
  var start = state.pos;
  var ch = 0;
  state.lastIntValue = 0;
  while (isDecimalDigit(ch = state.current())) {
    state.lastIntValue = 10 * state.lastIntValue + (ch - 48);
    state.advance();
  }
  return state.pos !== start;
};
function isDecimalDigit(ch) {
  return ch >= 48 && ch <= 57;
}
pp$8.regexp_eatHexDigits = function(state) {
  var start = state.pos;
  var ch = 0;
  state.lastIntValue = 0;
  while (isHexDigit(ch = state.current())) {
    state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
    state.advance();
  }
  return state.pos !== start;
};
function isHexDigit(ch) {
  return ch >= 48 && ch <= 57 || ch >= 65 && ch <= 70 || ch >= 97 && ch <= 102;
}
function hexToInt(ch) {
  if (ch >= 65 && ch <= 70) {
    return 10 + (ch - 65);
  }
  if (ch >= 97 && ch <= 102) {
    return 10 + (ch - 97);
  }
  return ch - 48;
}
pp$8.regexp_eatLegacyOctalEscapeSequence = function(state) {
  if (this.regexp_eatOctalDigit(state)) {
    var n1 = state.lastIntValue;
    if (this.regexp_eatOctalDigit(state)) {
      var n2 = state.lastIntValue;
      if (n1 <= 3 && this.regexp_eatOctalDigit(state)) {
        state.lastIntValue = n1 * 64 + n2 * 8 + state.lastIntValue;
      } else {
        state.lastIntValue = n1 * 8 + n2;
      }
    } else {
      state.lastIntValue = n1;
    }
    return true;
  }
  return false;
};
pp$8.regexp_eatOctalDigit = function(state) {
  var ch = state.current();
  if (isOctalDigit(ch)) {
    state.lastIntValue = ch - 48;
    state.advance();
    return true;
  }
  state.lastIntValue = 0;
  return false;
};
function isOctalDigit(ch) {
  return ch >= 48 && ch <= 55;
}
pp$8.regexp_eatFixedHexDigits = function(state, length) {
  var start = state.pos;
  state.lastIntValue = 0;
  for (var i = 0; i < length; ++i) {
    var ch = state.current();
    if (!isHexDigit(ch)) {
      state.pos = start;
      return false;
    }
    state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
    state.advance();
  }
  return true;
};
var Token = function Token2(p2) {
  this.type = p2.type;
  this.value = p2.value;
  this.start = p2.start;
  this.end = p2.end;
  if (p2.options.locations) {
    this.loc = new SourceLocation(p2, p2.startLoc, p2.endLoc);
  }
  if (p2.options.ranges) {
    this.range = [p2.start, p2.end];
  }
};
var pp$9 = Parser.prototype;
pp$9.next = function(ignoreEscapeSequenceInKeyword) {
  if (!ignoreEscapeSequenceInKeyword && this.type.keyword && this.containsEsc) {
    this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword);
  }
  if (this.options.onToken) {
    this.options.onToken(new Token(this));
  }
  this.lastTokEnd = this.end;
  this.lastTokStart = this.start;
  this.lastTokEndLoc = this.endLoc;
  this.lastTokStartLoc = this.startLoc;
  this.nextToken();
};
pp$9.getToken = function() {
  this.next();
  return new Token(this);
};
if (typeof Symbol !== "undefined") {
  pp$9[Symbol.iterator] = function() {
    var this$1$1 = this;
    return {
      next: function() {
        var token = this$1$1.getToken();
        return {
          done: token.type === types.eof,
          value: token
        };
      }
    };
  };
}
pp$9.curContext = function() {
  return this.context[this.context.length - 1];
};
pp$9.nextToken = function() {
  var curContext = this.curContext();
  if (!curContext || !curContext.preserveSpace) {
    this.skipSpace();
  }
  this.start = this.pos;
  if (this.options.locations) {
    this.startLoc = this.curPosition();
  }
  if (this.pos >= this.input.length) {
    return this.finishToken(types.eof);
  }
  if (curContext.override) {
    return curContext.override(this);
  } else {
    this.readToken(this.fullCharCodeAtPos());
  }
};
pp$9.readToken = function(code) {
  if (isIdentifierStart(code, this.options.ecmaVersion >= 6) || code === 92) {
    return this.readWord();
  }
  return this.getTokenFromCode(code);
};
pp$9.fullCharCodeAtPos = function() {
  var code = this.input.charCodeAt(this.pos);
  if (code <= 55295 || code >= 57344) {
    return code;
  }
  var next = this.input.charCodeAt(this.pos + 1);
  return (code << 10) + next - 56613888;
};
pp$9.skipBlockComment = function() {
  var startLoc = this.options.onComment && this.curPosition();
  var start = this.pos, end = this.input.indexOf("*/", this.pos += 2);
  if (end === -1) {
    this.raise(this.pos - 2, "Unterminated comment");
  }
  this.pos = end + 2;
  if (this.options.locations) {
    lineBreakG.lastIndex = start;
    var match;
    while ((match = lineBreakG.exec(this.input)) && match.index < this.pos) {
      ++this.curLine;
      this.lineStart = match.index + match[0].length;
    }
  }
  if (this.options.onComment) {
    this.options.onComment(
      true,
      this.input.slice(start + 2, end),
      start,
      this.pos,
      startLoc,
      this.curPosition()
    );
  }
};
pp$9.skipLineComment = function(startSkip) {
  var start = this.pos;
  var startLoc = this.options.onComment && this.curPosition();
  var ch = this.input.charCodeAt(this.pos += startSkip);
  while (this.pos < this.input.length && !isNewLine(ch)) {
    ch = this.input.charCodeAt(++this.pos);
  }
  if (this.options.onComment) {
    this.options.onComment(
      false,
      this.input.slice(start + startSkip, this.pos),
      start,
      this.pos,
      startLoc,
      this.curPosition()
    );
  }
};
pp$9.skipSpace = function() {
  loop: while (this.pos < this.input.length) {
    var ch = this.input.charCodeAt(this.pos);
    switch (ch) {
      case 32:
      case 160:
        ++this.pos;
        break;
      case 13:
        if (this.input.charCodeAt(this.pos + 1) === 10) {
          ++this.pos;
        }
      case 10:
      case 8232:
      case 8233:
        ++this.pos;
        if (this.options.locations) {
          ++this.curLine;
          this.lineStart = this.pos;
        }
        break;
      case 47:
        switch (this.input.charCodeAt(this.pos + 1)) {
          case 42:
            this.skipBlockComment();
            break;
          case 47:
            this.skipLineComment(2);
            break;
          default:
            break loop;
        }
        break;
      default:
        if (ch > 8 && ch < 14 || ch >= 5760 && nonASCIIwhitespace.test(String.fromCharCode(ch))) {
          ++this.pos;
        } else {
          break loop;
        }
    }
  }
};
pp$9.finishToken = function(type, val) {
  this.end = this.pos;
  if (this.options.locations) {
    this.endLoc = this.curPosition();
  }
  var prevType = this.type;
  this.type = type;
  this.value = val;
  this.updateContext(prevType);
};
pp$9.readToken_dot = function() {
  var next = this.input.charCodeAt(this.pos + 1);
  if (next >= 48 && next <= 57) {
    return this.readNumber(true);
  }
  var next2 = this.input.charCodeAt(this.pos + 2);
  if (this.options.ecmaVersion >= 6 && next === 46 && next2 === 46) {
    this.pos += 3;
    return this.finishToken(types.ellipsis);
  } else {
    ++this.pos;
    return this.finishToken(types.dot);
  }
};
pp$9.readToken_slash = function() {
  var next = this.input.charCodeAt(this.pos + 1);
  if (this.exprAllowed) {
    ++this.pos;
    return this.readRegexp();
  }
  if (next === 61) {
    return this.finishOp(types.assign, 2);
  }
  return this.finishOp(types.slash, 1);
};
pp$9.readToken_mult_modulo_exp = function(code) {
  var next = this.input.charCodeAt(this.pos + 1);
  var size = 1;
  var tokentype = code === 42 ? types.star : types.modulo;
  if (this.options.ecmaVersion >= 7 && code === 42 && next === 42) {
    ++size;
    tokentype = types.starstar;
    next = this.input.charCodeAt(this.pos + 2);
  }
  if (next === 61) {
    return this.finishOp(types.assign, size + 1);
  }
  return this.finishOp(tokentype, size);
};
pp$9.readToken_pipe_amp = function(code) {
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === code) {
    if (this.options.ecmaVersion >= 12) {
      var next2 = this.input.charCodeAt(this.pos + 2);
      if (next2 === 61) {
        return this.finishOp(types.assign, 3);
      }
    }
    return this.finishOp(code === 124 ? types.logicalOR : types.logicalAND, 2);
  }
  if (next === 61) {
    return this.finishOp(types.assign, 2);
  }
  return this.finishOp(code === 124 ? types.bitwiseOR : types.bitwiseAND, 1);
};
pp$9.readToken_caret = function() {
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === 61) {
    return this.finishOp(types.assign, 2);
  }
  return this.finishOp(types.bitwiseXOR, 1);
};
pp$9.readToken_plus_min = function(code) {
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === code) {
    if (next === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 && (this.lastTokEnd === 0 || lineBreak.test(this.input.slice(this.lastTokEnd, this.pos)))) {
      this.skipLineComment(3);
      this.skipSpace();
      return this.nextToken();
    }
    return this.finishOp(types.incDec, 2);
  }
  if (next === 61) {
    return this.finishOp(types.assign, 2);
  }
  return this.finishOp(types.plusMin, 1);
};
pp$9.readToken_lt_gt = function(code) {
  var next = this.input.charCodeAt(this.pos + 1);
  var size = 1;
  if (next === code) {
    size = code === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2;
    if (this.input.charCodeAt(this.pos + size) === 61) {
      return this.finishOp(types.assign, size + 1);
    }
    return this.finishOp(types.bitShift, size);
  }
  if (next === 33 && code === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 && this.input.charCodeAt(this.pos + 3) === 45) {
    this.skipLineComment(4);
    this.skipSpace();
    return this.nextToken();
  }
  if (next === 61) {
    size = 2;
  }
  return this.finishOp(types.relational, size);
};
pp$9.readToken_eq_excl = function(code) {
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === 61) {
    return this.finishOp(types.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2);
  }
  if (code === 61 && next === 62 && this.options.ecmaVersion >= 6) {
    this.pos += 2;
    return this.finishToken(types.arrow);
  }
  return this.finishOp(code === 61 ? types.eq : types.prefix, 1);
};
pp$9.readToken_question = function() {
  var ecmaVersion = this.options.ecmaVersion;
  if (ecmaVersion >= 11) {
    var next = this.input.charCodeAt(this.pos + 1);
    if (next === 46) {
      var next2 = this.input.charCodeAt(this.pos + 2);
      if (next2 < 48 || next2 > 57) {
        return this.finishOp(types.questionDot, 2);
      }
    }
    if (next === 63) {
      if (ecmaVersion >= 12) {
        var next2$1 = this.input.charCodeAt(this.pos + 2);
        if (next2$1 === 61) {
          return this.finishOp(types.assign, 3);
        }
      }
      return this.finishOp(types.coalesce, 2);
    }
  }
  return this.finishOp(types.question, 1);
};
pp$9.getTokenFromCode = function(code) {
  switch (code) {
    case 46:
      return this.readToken_dot();
    case 40:
      ++this.pos;
      return this.finishToken(types.parenL);
    case 41:
      ++this.pos;
      return this.finishToken(types.parenR);
    case 59:
      ++this.pos;
      return this.finishToken(types.semi);
    case 44:
      ++this.pos;
      return this.finishToken(types.comma);
    case 91:
      ++this.pos;
      return this.finishToken(types.bracketL);
    case 93:
      ++this.pos;
      return this.finishToken(types.bracketR);
    case 123:
      ++this.pos;
      return this.finishToken(types.braceL);
    case 125:
      ++this.pos;
      return this.finishToken(types.braceR);
    case 58:
      ++this.pos;
      return this.finishToken(types.colon);
    case 96:
      if (this.options.ecmaVersion < 6) {
        break;
      }
      ++this.pos;
      return this.finishToken(types.backQuote);
    case 48:
      var next = this.input.charCodeAt(this.pos + 1);
      if (next === 120 || next === 88) {
        return this.readRadixNumber(16);
      }
      if (this.options.ecmaVersion >= 6) {
        if (next === 111 || next === 79) {
          return this.readRadixNumber(8);
        }
        if (next === 98 || next === 66) {
          return this.readRadixNumber(2);
        }
      }
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      return this.readNumber(false);
    case 34:
    case 39:
      return this.readString(code);
    case 47:
      return this.readToken_slash();
    case 37:
    case 42:
      return this.readToken_mult_modulo_exp(code);
    case 124:
    case 38:
      return this.readToken_pipe_amp(code);
    case 94:
      return this.readToken_caret();
    case 43:
    case 45:
      return this.readToken_plus_min(code);
    case 60:
    case 62:
      return this.readToken_lt_gt(code);
    case 61:
    case 33:
      return this.readToken_eq_excl(code);
    case 63:
      return this.readToken_question();
    case 126:
      return this.finishOp(types.prefix, 1);
  }
  this.raise(this.pos, "Unexpected character '" + codePointToString$1(code) + "'");
};
pp$9.finishOp = function(type, size) {
  var str = this.input.slice(this.pos, this.pos + size);
  this.pos += size;
  return this.finishToken(type, str);
};
pp$9.readRegexp = function() {
  var escaped, inClass, start = this.pos;
  for (; ; ) {
    if (this.pos >= this.input.length) {
      this.raise(start, "Unterminated regular expression");
    }
    var ch = this.input.charAt(this.pos);
    if (lineBreak.test(ch)) {
      this.raise(start, "Unterminated regular expression");
    }
    if (!escaped) {
      if (ch === "[") {
        inClass = true;
      } else if (ch === "]" && inClass) {
        inClass = false;
      } else if (ch === "/" && !inClass) {
        break;
      }
      escaped = ch === "\\";
    } else {
      escaped = false;
    }
    ++this.pos;
  }
  var pattern = this.input.slice(start, this.pos);
  ++this.pos;
  var flagsStart = this.pos;
  var flags = this.readWord1();
  if (this.containsEsc) {
    this.unexpected(flagsStart);
  }
  var state = this.regexpState || (this.regexpState = new RegExpValidationState(this));
  state.reset(start, pattern, flags);
  this.validateRegExpFlags(state);
  this.validateRegExpPattern(state);
  var value = null;
  try {
    value = new RegExp(pattern, flags);
  } catch (e2) {
  }
  return this.finishToken(types.regexp, { pattern, flags, value });
};
pp$9.readInt = function(radix, len, maybeLegacyOctalNumericLiteral) {
  var allowSeparators = this.options.ecmaVersion >= 12 && len === void 0;
  var isLegacyOctalNumericLiteral = maybeLegacyOctalNumericLiteral && this.input.charCodeAt(this.pos) === 48;
  var start = this.pos, total = 0, lastCode = 0;
  for (var i = 0, e2 = len == null ? Infinity : len; i < e2; ++i, ++this.pos) {
    var code = this.input.charCodeAt(this.pos), val = void 0;
    if (allowSeparators && code === 95) {
      if (isLegacyOctalNumericLiteral) {
        this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals");
      }
      if (lastCode === 95) {
        this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore");
      }
      if (i === 0) {
        this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits");
      }
      lastCode = code;
      continue;
    }
    if (code >= 97) {
      val = code - 97 + 10;
    } else if (code >= 65) {
      val = code - 65 + 10;
    } else if (code >= 48 && code <= 57) {
      val = code - 48;
    } else {
      val = Infinity;
    }
    if (val >= radix) {
      break;
    }
    lastCode = code;
    total = total * radix + val;
  }
  if (allowSeparators && lastCode === 95) {
    this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits");
  }
  if (this.pos === start || len != null && this.pos - start !== len) {
    return null;
  }
  return total;
};
function stringToNumber(str, isLegacyOctalNumericLiteral) {
  if (isLegacyOctalNumericLiteral) {
    return parseInt(str, 8);
  }
  return parseFloat(str.replace(/_/g, ""));
}
function stringToBigInt(str) {
  if (typeof BigInt !== "function") {
    return null;
  }
  return BigInt(str.replace(/_/g, ""));
}
pp$9.readRadixNumber = function(radix) {
  var start = this.pos;
  this.pos += 2;
  var val = this.readInt(radix);
  if (val == null) {
    this.raise(this.start + 2, "Expected number in radix " + radix);
  }
  if (this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110) {
    val = stringToBigInt(this.input.slice(start, this.pos));
    ++this.pos;
  } else if (isIdentifierStart(this.fullCharCodeAtPos())) {
    this.raise(this.pos, "Identifier directly after number");
  }
  return this.finishToken(types.num, val);
};
pp$9.readNumber = function(startsWithDot) {
  var start = this.pos;
  if (!startsWithDot && this.readInt(10, void 0, true) === null) {
    this.raise(start, "Invalid number");
  }
  var octal = this.pos - start >= 2 && this.input.charCodeAt(start) === 48;
  if (octal && this.strict) {
    this.raise(start, "Invalid number");
  }
  var next = this.input.charCodeAt(this.pos);
  if (!octal && !startsWithDot && this.options.ecmaVersion >= 11 && next === 110) {
    var val$1 = stringToBigInt(this.input.slice(start, this.pos));
    ++this.pos;
    if (isIdentifierStart(this.fullCharCodeAtPos())) {
      this.raise(this.pos, "Identifier directly after number");
    }
    return this.finishToken(types.num, val$1);
  }
  if (octal && /[89]/.test(this.input.slice(start, this.pos))) {
    octal = false;
  }
  if (next === 46 && !octal) {
    ++this.pos;
    this.readInt(10);
    next = this.input.charCodeAt(this.pos);
  }
  if ((next === 69 || next === 101) && !octal) {
    next = this.input.charCodeAt(++this.pos);
    if (next === 43 || next === 45) {
      ++this.pos;
    }
    if (this.readInt(10) === null) {
      this.raise(start, "Invalid number");
    }
  }
  if (isIdentifierStart(this.fullCharCodeAtPos())) {
    this.raise(this.pos, "Identifier directly after number");
  }
  var val = stringToNumber(this.input.slice(start, this.pos), octal);
  return this.finishToken(types.num, val);
};
pp$9.readCodePoint = function() {
  var ch = this.input.charCodeAt(this.pos), code;
  if (ch === 123) {
    if (this.options.ecmaVersion < 6) {
      this.unexpected();
    }
    var codePos = ++this.pos;
    code = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos);
    ++this.pos;
    if (code > 1114111) {
      this.invalidStringToken(codePos, "Code point out of bounds");
    }
  } else {
    code = this.readHexChar(4);
  }
  return code;
};
function codePointToString$1(code) {
  if (code <= 65535) {
    return String.fromCharCode(code);
  }
  code -= 65536;
  return String.fromCharCode((code >> 10) + 55296, (code & 1023) + 56320);
}
pp$9.readString = function(quote) {
  var out = "", chunkStart = ++this.pos;
  for (; ; ) {
    if (this.pos >= this.input.length) {
      this.raise(this.start, "Unterminated string constant");
    }
    var ch = this.input.charCodeAt(this.pos);
    if (ch === quote) {
      break;
    }
    if (ch === 92) {
      out += this.input.slice(chunkStart, this.pos);
      out += this.readEscapedChar(false);
      chunkStart = this.pos;
    } else {
      if (isNewLine(ch, this.options.ecmaVersion >= 10)) {
        this.raise(this.start, "Unterminated string constant");
      }
      ++this.pos;
    }
  }
  out += this.input.slice(chunkStart, this.pos++);
  return this.finishToken(types.string, out);
};
var INVALID_TEMPLATE_ESCAPE_ERROR = {};
pp$9.tryReadTemplateToken = function() {
  this.inTemplateElement = true;
  try {
    this.readTmplToken();
  } catch (err) {
    if (err === INVALID_TEMPLATE_ESCAPE_ERROR) {
      this.readInvalidTemplateToken();
    } else {
      throw err;
    }
  }
  this.inTemplateElement = false;
};
pp$9.invalidStringToken = function(position, message) {
  if (this.inTemplateElement && this.options.ecmaVersion >= 9) {
    throw INVALID_TEMPLATE_ESCAPE_ERROR;
  } else {
    this.raise(position, message);
  }
};
pp$9.readTmplToken = function() {
  var out = "", chunkStart = this.pos;
  for (; ; ) {
    if (this.pos >= this.input.length) {
      this.raise(this.start, "Unterminated template");
    }
    var ch = this.input.charCodeAt(this.pos);
    if (ch === 96 || ch === 36 && this.input.charCodeAt(this.pos + 1) === 123) {
      if (this.pos === this.start && (this.type === types.template || this.type === types.invalidTemplate)) {
        if (ch === 36) {
          this.pos += 2;
          return this.finishToken(types.dollarBraceL);
        } else {
          ++this.pos;
          return this.finishToken(types.backQuote);
        }
      }
      out += this.input.slice(chunkStart, this.pos);
      return this.finishToken(types.template, out);
    }
    if (ch === 92) {
      out += this.input.slice(chunkStart, this.pos);
      out += this.readEscapedChar(true);
      chunkStart = this.pos;
    } else if (isNewLine(ch)) {
      out += this.input.slice(chunkStart, this.pos);
      ++this.pos;
      switch (ch) {
        case 13:
          if (this.input.charCodeAt(this.pos) === 10) {
            ++this.pos;
          }
        case 10:
          out += "\n";
          break;
        default:
          out += String.fromCharCode(ch);
          break;
      }
      if (this.options.locations) {
        ++this.curLine;
        this.lineStart = this.pos;
      }
      chunkStart = this.pos;
    } else {
      ++this.pos;
    }
  }
};
pp$9.readInvalidTemplateToken = function() {
  for (; this.pos < this.input.length; this.pos++) {
    switch (this.input[this.pos]) {
      case "\\":
        ++this.pos;
        break;
      case "$":
        if (this.input[this.pos + 1] !== "{") {
          break;
        }
      case "`":
        return this.finishToken(types.invalidTemplate, this.input.slice(this.start, this.pos));
    }
  }
  this.raise(this.start, "Unterminated template");
};
pp$9.readEscapedChar = function(inTemplate) {
  var ch = this.input.charCodeAt(++this.pos);
  ++this.pos;
  switch (ch) {
    case 110:
      return "\n";
    case 114:
      return "\r";
    case 120:
      return String.fromCharCode(this.readHexChar(2));
    case 117:
      return codePointToString$1(this.readCodePoint());
    case 116:
      return "	";
    case 98:
      return "\b";
    case 118:
      return "\v";
    case 102:
      return "\f";
    case 13:
      if (this.input.charCodeAt(this.pos) === 10) {
        ++this.pos;
      }
    case 10:
      if (this.options.locations) {
        this.lineStart = this.pos;
        ++this.curLine;
      }
      return "";
    case 56:
    case 57:
      if (inTemplate) {
        var codePos = this.pos - 1;
        this.invalidStringToken(
          codePos,
          "Invalid escape sequence in template string"
        );
        return null;
      }
    default:
      if (ch >= 48 && ch <= 55) {
        var octalStr = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0];
        var octal = parseInt(octalStr, 8);
        if (octal > 255) {
          octalStr = octalStr.slice(0, -1);
          octal = parseInt(octalStr, 8);
        }
        this.pos += octalStr.length - 1;
        ch = this.input.charCodeAt(this.pos);
        if ((octalStr !== "0" || ch === 56 || ch === 57) && (this.strict || inTemplate)) {
          this.invalidStringToken(
            this.pos - 1 - octalStr.length,
            inTemplate ? "Octal literal in template string" : "Octal literal in strict mode"
          );
        }
        return String.fromCharCode(octal);
      }
      if (isNewLine(ch)) {
        return "";
      }
      return String.fromCharCode(ch);
  }
};
pp$9.readHexChar = function(len) {
  var codePos = this.pos;
  var n2 = this.readInt(16, len);
  if (n2 === null) {
    this.invalidStringToken(codePos, "Bad character escape sequence");
  }
  return n2;
};
pp$9.readWord1 = function() {
  this.containsEsc = false;
  var word = "", first = true, chunkStart = this.pos;
  var astral = this.options.ecmaVersion >= 6;
  while (this.pos < this.input.length) {
    var ch = this.fullCharCodeAtPos();
    if (isIdentifierChar(ch, astral)) {
      this.pos += ch <= 65535 ? 1 : 2;
    } else if (ch === 92) {
      this.containsEsc = true;
      word += this.input.slice(chunkStart, this.pos);
      var escStart = this.pos;
      if (this.input.charCodeAt(++this.pos) !== 117) {
        this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX");
      }
      ++this.pos;
      var esc = this.readCodePoint();
      if (!(first ? isIdentifierStart : isIdentifierChar)(esc, astral)) {
        this.invalidStringToken(escStart, "Invalid Unicode escape");
      }
      word += codePointToString$1(esc);
      chunkStart = this.pos;
    } else {
      break;
    }
    first = false;
  }
  return word + this.input.slice(chunkStart, this.pos);
};
pp$9.readWord = function() {
  var word = this.readWord1();
  var type = types.name;
  if (this.keywords.test(word)) {
    type = keywords$1[word];
  }
  return this.finishToken(type, word);
};
var version = "7.4.1";
Parser.acorn = {
  Parser,
  version,
  defaultOptions,
  Position,
  SourceLocation,
  getLineInfo,
  Node,
  TokenType,
  tokTypes: types,
  keywordTypes: keywords$1,
  TokContext,
  tokContexts: types$1,
  isIdentifierChar,
  isIdentifierStart,
  Token,
  isNewLine,
  lineBreak,
  lineBreakG,
  nonASCIIwhitespace
};
function parse$1(input, options) {
  return Parser.parse(input, options);
}
function parseExpressionAt2(input, pos, options) {
  return Parser.parseExpressionAt(input, pos, options);
}
function tokenizer2(input, options) {
  return Parser.tokenizer(input, options);
}
const acorn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Node,
  Parser,
  Position,
  SourceLocation,
  TokContext,
  Token,
  TokenType,
  defaultOptions,
  getLineInfo,
  isIdentifierChar,
  isIdentifierStart,
  isNewLine,
  keywordTypes: keywords$1,
  lineBreak,
  lineBreakG,
  nonASCIIwhitespace,
  parse: parse$1,
  parseExpressionAt: parseExpressionAt2,
  tokContexts: types$1,
  tokTypes: types,
  tokenizer: tokenizer2,
  version
}, Symbol.toStringTag, { value: "Module" }));
var acornJsx = { exports: {} };
var xhtml = {
  quot: '"',
  amp: "&",
  apos: "'",
  lt: "<",
  gt: ">",
  nbsp: " ",
  iexcl: "¡",
  cent: "¢",
  pound: "£",
  curren: "¤",
  yen: "¥",
  brvbar: "¦",
  sect: "§",
  uml: "¨",
  copy: "©",
  ordf: "ª",
  laquo: "«",
  not: "¬",
  shy: "­",
  reg: "®",
  macr: "¯",
  deg: "°",
  plusmn: "±",
  sup2: "²",
  sup3: "³",
  acute: "´",
  micro: "µ",
  para: "¶",
  middot: "·",
  cedil: "¸",
  sup1: "¹",
  ordm: "º",
  raquo: "»",
  frac14: "¼",
  frac12: "½",
  frac34: "¾",
  iquest: "¿",
  Agrave: "À",
  Aacute: "Á",
  Acirc: "Â",
  Atilde: "Ã",
  Auml: "Ä",
  Aring: "Å",
  AElig: "Æ",
  Ccedil: "Ç",
  Egrave: "È",
  Eacute: "É",
  Ecirc: "Ê",
  Euml: "Ë",
  Igrave: "Ì",
  Iacute: "Í",
  Icirc: "Î",
  Iuml: "Ï",
  ETH: "Ð",
  Ntilde: "Ñ",
  Ograve: "Ò",
  Oacute: "Ó",
  Ocirc: "Ô",
  Otilde: "Õ",
  Ouml: "Ö",
  times: "×",
  Oslash: "Ø",
  Ugrave: "Ù",
  Uacute: "Ú",
  Ucirc: "Û",
  Uuml: "Ü",
  Yacute: "Ý",
  THORN: "Þ",
  szlig: "ß",
  agrave: "à",
  aacute: "á",
  acirc: "â",
  atilde: "ã",
  auml: "ä",
  aring: "å",
  aelig: "æ",
  ccedil: "ç",
  egrave: "è",
  eacute: "é",
  ecirc: "ê",
  euml: "ë",
  igrave: "ì",
  iacute: "í",
  icirc: "î",
  iuml: "ï",
  eth: "ð",
  ntilde: "ñ",
  ograve: "ò",
  oacute: "ó",
  ocirc: "ô",
  otilde: "õ",
  ouml: "ö",
  divide: "÷",
  oslash: "ø",
  ugrave: "ù",
  uacute: "ú",
  ucirc: "û",
  uuml: "ü",
  yacute: "ý",
  thorn: "þ",
  yuml: "ÿ",
  OElig: "Œ",
  oelig: "œ",
  Scaron: "Š",
  scaron: "š",
  Yuml: "Ÿ",
  fnof: "ƒ",
  circ: "ˆ",
  tilde: "˜",
  Alpha: "Α",
  Beta: "Β",
  Gamma: "Γ",
  Delta: "Δ",
  Epsilon: "Ε",
  Zeta: "Ζ",
  Eta: "Η",
  Theta: "Θ",
  Iota: "Ι",
  Kappa: "Κ",
  Lambda: "Λ",
  Mu: "Μ",
  Nu: "Ν",
  Xi: "Ξ",
  Omicron: "Ο",
  Pi: "Π",
  Rho: "Ρ",
  Sigma: "Σ",
  Tau: "Τ",
  Upsilon: "Υ",
  Phi: "Φ",
  Chi: "Χ",
  Psi: "Ψ",
  Omega: "Ω",
  alpha: "α",
  beta: "β",
  gamma: "γ",
  delta: "δ",
  epsilon: "ε",
  zeta: "ζ",
  eta: "η",
  theta: "θ",
  iota: "ι",
  kappa: "κ",
  lambda: "λ",
  mu: "μ",
  nu: "ν",
  xi: "ξ",
  omicron: "ο",
  pi: "π",
  rho: "ρ",
  sigmaf: "ς",
  sigma: "σ",
  tau: "τ",
  upsilon: "υ",
  phi: "φ",
  chi: "χ",
  psi: "ψ",
  omega: "ω",
  thetasym: "ϑ",
  upsih: "ϒ",
  piv: "ϖ",
  ensp: " ",
  emsp: " ",
  thinsp: " ",
  zwnj: "‌",
  zwj: "‍",
  lrm: "‎",
  rlm: "‏",
  ndash: "–",
  mdash: "—",
  lsquo: "‘",
  rsquo: "’",
  sbquo: "‚",
  ldquo: "“",
  rdquo: "”",
  bdquo: "„",
  dagger: "†",
  Dagger: "‡",
  bull: "•",
  hellip: "…",
  permil: "‰",
  prime: "′",
  Prime: "″",
  lsaquo: "‹",
  rsaquo: "›",
  oline: "‾",
  frasl: "⁄",
  euro: "€",
  image: "ℑ",
  weierp: "℘",
  real: "ℜ",
  trade: "™",
  alefsym: "ℵ",
  larr: "←",
  uarr: "↑",
  rarr: "→",
  darr: "↓",
  harr: "↔",
  crarr: "↵",
  lArr: "⇐",
  uArr: "⇑",
  rArr: "⇒",
  dArr: "⇓",
  hArr: "⇔",
  forall: "∀",
  part: "∂",
  exist: "∃",
  empty: "∅",
  nabla: "∇",
  isin: "∈",
  notin: "∉",
  ni: "∋",
  prod: "∏",
  sum: "∑",
  minus: "−",
  lowast: "∗",
  radic: "√",
  prop: "∝",
  infin: "∞",
  ang: "∠",
  and: "∧",
  or: "∨",
  cap: "∩",
  cup: "∪",
  "int": "∫",
  there4: "∴",
  sim: "∼",
  cong: "≅",
  asymp: "≈",
  ne: "≠",
  equiv: "≡",
  le: "≤",
  ge: "≥",
  sub: "⊂",
  sup: "⊃",
  nsub: "⊄",
  sube: "⊆",
  supe: "⊇",
  oplus: "⊕",
  otimes: "⊗",
  perp: "⊥",
  sdot: "⋅",
  lceil: "⌈",
  rceil: "⌉",
  lfloor: "⌊",
  rfloor: "⌋",
  lang: "〈",
  rang: "〉",
  loz: "◊",
  spades: "♠",
  clubs: "♣",
  hearts: "♥",
  diams: "♦"
};
const require$$1 = /* @__PURE__ */ getAugmentedNamespace(acorn);
(function(module) {
  const XHTMLEntities = xhtml;
  const hexNumber = /^[\da-fA-F]+$/;
  const decimalNumber = /^\d+$/;
  const acornJsxMap = /* @__PURE__ */ new WeakMap();
  function getJsxTokens(acorn2) {
    acorn2 = acorn2.Parser.acorn || acorn2;
    let acornJsx2 = acornJsxMap.get(acorn2);
    if (!acornJsx2) {
      const tt = acorn2.tokTypes;
      const TokContext3 = acorn2.TokContext;
      const TokenType3 = acorn2.TokenType;
      const tc_oTag = new TokContext3("<tag", false);
      const tc_cTag = new TokContext3("</tag", false);
      const tc_expr = new TokContext3("<tag>...</tag>", true, true);
      const tokContexts = {
        tc_oTag,
        tc_cTag,
        tc_expr
      };
      const tokTypes = {
        jsxName: new TokenType3("jsxName"),
        jsxText: new TokenType3("jsxText", { beforeExpr: true }),
        jsxTagStart: new TokenType3("jsxTagStart", { startsExpr: true }),
        jsxTagEnd: new TokenType3("jsxTagEnd")
      };
      tokTypes.jsxTagStart.updateContext = function() {
        this.context.push(tc_expr);
        this.context.push(tc_oTag);
        this.exprAllowed = false;
      };
      tokTypes.jsxTagEnd.updateContext = function(prevType) {
        let out = this.context.pop();
        if (out === tc_oTag && prevType === tt.slash || out === tc_cTag) {
          this.context.pop();
          this.exprAllowed = this.curContext() === tc_expr;
        } else {
          this.exprAllowed = true;
        }
      };
      acornJsx2 = { tokContexts, tokTypes };
      acornJsxMap.set(acorn2, acornJsx2);
    }
    return acornJsx2;
  }
  function getQualifiedJSXName(object) {
    if (!object)
      return object;
    if (object.type === "JSXIdentifier")
      return object.name;
    if (object.type === "JSXNamespacedName")
      return object.namespace.name + ":" + object.name.name;
    if (object.type === "JSXMemberExpression")
      return getQualifiedJSXName(object.object) + "." + getQualifiedJSXName(object.property);
  }
  module.exports = function(options) {
    options = options || {};
    return function(Parser3) {
      return plugin({
        allowNamespaces: options.allowNamespaces !== false,
        allowNamespacedObjects: !!options.allowNamespacedObjects
      }, Parser3);
    };
  };
  Object.defineProperty(module.exports, "tokTypes", {
    get: function get_tokTypes() {
      return getJsxTokens(require$$1).tokTypes;
    },
    configurable: true,
    enumerable: true
  });
  function plugin(options, Parser3) {
    const acorn2 = Parser3.acorn || require$$1;
    const acornJsx2 = getJsxTokens(acorn2);
    const tt = acorn2.tokTypes;
    const tok = acornJsx2.tokTypes;
    const tokContexts = acorn2.tokContexts;
    const tc_oTag = acornJsx2.tokContexts.tc_oTag;
    const tc_cTag = acornJsx2.tokContexts.tc_cTag;
    const tc_expr = acornJsx2.tokContexts.tc_expr;
    const isNewLine2 = acorn2.isNewLine;
    const isIdentifierStart2 = acorn2.isIdentifierStart;
    const isIdentifierChar2 = acorn2.isIdentifierChar;
    return class extends Parser3 {
      // Expose actual `tokTypes` and `tokContexts` to other plugins.
      static get acornJsx() {
        return acornJsx2;
      }
      // Reads inline JSX contents token.
      jsx_readToken() {
        let out = "", chunkStart = this.pos;
        for (; ; ) {
          if (this.pos >= this.input.length)
            this.raise(this.start, "Unterminated JSX contents");
          let ch = this.input.charCodeAt(this.pos);
          switch (ch) {
            case 60:
            case 123:
              if (this.pos === this.start) {
                if (ch === 60 && this.exprAllowed) {
                  ++this.pos;
                  return this.finishToken(tok.jsxTagStart);
                }
                return this.getTokenFromCode(ch);
              }
              out += this.input.slice(chunkStart, this.pos);
              return this.finishToken(tok.jsxText, out);
            case 38:
              out += this.input.slice(chunkStart, this.pos);
              out += this.jsx_readEntity();
              chunkStart = this.pos;
              break;
            case 62:
            case 125:
              this.raise(
                this.pos,
                "Unexpected token `" + this.input[this.pos] + "`. Did you mean `" + (ch === 62 ? "&gt;" : "&rbrace;") + '` or `{"' + this.input[this.pos] + '"}`?'
              );
            default:
              if (isNewLine2(ch)) {
                out += this.input.slice(chunkStart, this.pos);
                out += this.jsx_readNewLine(true);
                chunkStart = this.pos;
              } else {
                ++this.pos;
              }
          }
        }
      }
      jsx_readNewLine(normalizeCRLF) {
        let ch = this.input.charCodeAt(this.pos);
        let out;
        ++this.pos;
        if (ch === 13 && this.input.charCodeAt(this.pos) === 10) {
          ++this.pos;
          out = normalizeCRLF ? "\n" : "\r\n";
        } else {
          out = String.fromCharCode(ch);
        }
        if (this.options.locations) {
          ++this.curLine;
          this.lineStart = this.pos;
        }
        return out;
      }
      jsx_readString(quote) {
        let out = "", chunkStart = ++this.pos;
        for (; ; ) {
          if (this.pos >= this.input.length)
            this.raise(this.start, "Unterminated string constant");
          let ch = this.input.charCodeAt(this.pos);
          if (ch === quote) break;
          if (ch === 38) {
            out += this.input.slice(chunkStart, this.pos);
            out += this.jsx_readEntity();
            chunkStart = this.pos;
          } else if (isNewLine2(ch)) {
            out += this.input.slice(chunkStart, this.pos);
            out += this.jsx_readNewLine(false);
            chunkStart = this.pos;
          } else {
            ++this.pos;
          }
        }
        out += this.input.slice(chunkStart, this.pos++);
        return this.finishToken(tt.string, out);
      }
      jsx_readEntity() {
        let str = "", count = 0, entity;
        let ch = this.input[this.pos];
        if (ch !== "&")
          this.raise(this.pos, "Entity must start with an ampersand");
        let startPos = ++this.pos;
        while (this.pos < this.input.length && count++ < 10) {
          ch = this.input[this.pos++];
          if (ch === ";") {
            if (str[0] === "#") {
              if (str[1] === "x") {
                str = str.substr(2);
                if (hexNumber.test(str))
                  entity = String.fromCharCode(parseInt(str, 16));
              } else {
                str = str.substr(1);
                if (decimalNumber.test(str))
                  entity = String.fromCharCode(parseInt(str, 10));
              }
            } else {
              entity = XHTMLEntities[str];
            }
            break;
          }
          str += ch;
        }
        if (!entity) {
          this.pos = startPos;
          return "&";
        }
        return entity;
      }
      // Read a JSX identifier (valid tag or attribute name).
      //
      // Optimized version since JSX identifiers can't contain
      // escape characters and so can be read as single slice.
      // Also assumes that first character was already checked
      // by isIdentifierStart in readToken.
      jsx_readWord() {
        let ch, start = this.pos;
        do {
          ch = this.input.charCodeAt(++this.pos);
        } while (isIdentifierChar2(ch) || ch === 45);
        return this.finishToken(tok.jsxName, this.input.slice(start, this.pos));
      }
      // Parse next token as JSX identifier
      jsx_parseIdentifier() {
        let node = this.startNode();
        if (this.type === tok.jsxName)
          node.name = this.value;
        else if (this.type.keyword)
          node.name = this.type.keyword;
        else
          this.unexpected();
        this.next();
        return this.finishNode(node, "JSXIdentifier");
      }
      // Parse namespaced identifier.
      jsx_parseNamespacedName() {
        let startPos = this.start, startLoc = this.startLoc;
        let name2 = this.jsx_parseIdentifier();
        if (!options.allowNamespaces || !this.eat(tt.colon)) return name2;
        var node = this.startNodeAt(startPos, startLoc);
        node.namespace = name2;
        node.name = this.jsx_parseIdentifier();
        return this.finishNode(node, "JSXNamespacedName");
      }
      // Parses element name in any form - namespaced, member
      // or single identifier.
      jsx_parseElementName() {
        if (this.type === tok.jsxTagEnd) return "";
        let startPos = this.start, startLoc = this.startLoc;
        let node = this.jsx_parseNamespacedName();
        if (this.type === tt.dot && node.type === "JSXNamespacedName" && !options.allowNamespacedObjects) {
          this.unexpected();
        }
        while (this.eat(tt.dot)) {
          let newNode = this.startNodeAt(startPos, startLoc);
          newNode.object = node;
          newNode.property = this.jsx_parseIdentifier();
          node = this.finishNode(newNode, "JSXMemberExpression");
        }
        return node;
      }
      // Parses any type of JSX attribute value.
      jsx_parseAttributeValue() {
        switch (this.type) {
          case tt.braceL:
            let node = this.jsx_parseExpressionContainer();
            if (node.expression.type === "JSXEmptyExpression")
              this.raise(node.start, "JSX attributes must only be assigned a non-empty expression");
            return node;
          case tok.jsxTagStart:
          case tt.string:
            return this.parseExprAtom();
          default:
            this.raise(this.start, "JSX value should be either an expression or a quoted JSX text");
        }
      }
      // JSXEmptyExpression is unique type since it doesn't actually parse anything,
      // and so it should start at the end of last read token (left brace) and finish
      // at the beginning of the next one (right brace).
      jsx_parseEmptyExpression() {
        let node = this.startNodeAt(this.lastTokEnd, this.lastTokEndLoc);
        return this.finishNodeAt(node, "JSXEmptyExpression", this.start, this.startLoc);
      }
      // Parses JSX expression enclosed into curly brackets.
      jsx_parseExpressionContainer() {
        let node = this.startNode();
        this.next();
        node.expression = this.type === tt.braceR ? this.jsx_parseEmptyExpression() : this.parseExpression();
        this.expect(tt.braceR);
        return this.finishNode(node, "JSXExpressionContainer");
      }
      // Parses following JSX attribute name-value pair.
      jsx_parseAttribute() {
        let node = this.startNode();
        if (this.eat(tt.braceL)) {
          this.expect(tt.ellipsis);
          node.argument = this.parseMaybeAssign();
          this.expect(tt.braceR);
          return this.finishNode(node, "JSXSpreadAttribute");
        }
        node.name = this.jsx_parseNamespacedName();
        node.value = this.eat(tt.eq) ? this.jsx_parseAttributeValue() : null;
        return this.finishNode(node, "JSXAttribute");
      }
      // Parses JSX opening tag starting after '<'.
      jsx_parseOpeningElementAt(startPos, startLoc) {
        let node = this.startNodeAt(startPos, startLoc);
        node.attributes = [];
        let nodeName = this.jsx_parseElementName();
        if (nodeName) node.name = nodeName;
        while (this.type !== tt.slash && this.type !== tok.jsxTagEnd)
          node.attributes.push(this.jsx_parseAttribute());
        node.selfClosing = this.eat(tt.slash);
        this.expect(tok.jsxTagEnd);
        return this.finishNode(node, nodeName ? "JSXOpeningElement" : "JSXOpeningFragment");
      }
      // Parses JSX closing tag starting after '</'.
      jsx_parseClosingElementAt(startPos, startLoc) {
        let node = this.startNodeAt(startPos, startLoc);
        let nodeName = this.jsx_parseElementName();
        if (nodeName) node.name = nodeName;
        this.expect(tok.jsxTagEnd);
        return this.finishNode(node, nodeName ? "JSXClosingElement" : "JSXClosingFragment");
      }
      // Parses entire JSX element, including it's opening tag
      // (starting after '<'), attributes, contents and closing tag.
      jsx_parseElementAt(startPos, startLoc) {
        let node = this.startNodeAt(startPos, startLoc);
        let children = [];
        let openingElement = this.jsx_parseOpeningElementAt(startPos, startLoc);
        let closingElement = null;
        if (!openingElement.selfClosing) {
          contents: for (; ; ) {
            switch (this.type) {
              case tok.jsxTagStart:
                startPos = this.start;
                startLoc = this.startLoc;
                this.next();
                if (this.eat(tt.slash)) {
                  closingElement = this.jsx_parseClosingElementAt(startPos, startLoc);
                  break contents;
                }
                children.push(this.jsx_parseElementAt(startPos, startLoc));
                break;
              case tok.jsxText:
                children.push(this.parseExprAtom());
                break;
              case tt.braceL:
                children.push(this.jsx_parseExpressionContainer());
                break;
              default:
                this.unexpected();
            }
          }
          if (getQualifiedJSXName(closingElement.name) !== getQualifiedJSXName(openingElement.name)) {
            this.raise(
              closingElement.start,
              "Expected corresponding JSX closing tag for <" + getQualifiedJSXName(openingElement.name) + ">"
            );
          }
        }
        let fragmentOrElement = openingElement.name ? "Element" : "Fragment";
        node["opening" + fragmentOrElement] = openingElement;
        node["closing" + fragmentOrElement] = closingElement;
        node.children = children;
        if (this.type === tt.relational && this.value === "<") {
          this.raise(this.start, "Adjacent JSX elements must be wrapped in an enclosing tag");
        }
        return this.finishNode(node, "JSX" + fragmentOrElement);
      }
      // Parse JSX text
      jsx_parseText() {
        let node = this.parseLiteral(this.value);
        node.type = "JSXText";
        return node;
      }
      // Parses entire JSX element from current position.
      jsx_parseElement() {
        let startPos = this.start, startLoc = this.startLoc;
        this.next();
        return this.jsx_parseElementAt(startPos, startLoc);
      }
      parseExprAtom(refShortHandDefaultPos) {
        if (this.type === tok.jsxText)
          return this.jsx_parseText();
        else if (this.type === tok.jsxTagStart)
          return this.jsx_parseElement();
        else
          return super.parseExprAtom(refShortHandDefaultPos);
      }
      readToken(code) {
        let context = this.curContext();
        if (context === tc_expr) return this.jsx_readToken();
        if (context === tc_oTag || context === tc_cTag) {
          if (isIdentifierStart2(code)) return this.jsx_readWord();
          if (code == 62) {
            ++this.pos;
            return this.finishToken(tok.jsxTagEnd);
          }
          if ((code === 34 || code === 39) && context == tc_oTag)
            return this.jsx_readString(code);
        }
        if (code === 60 && this.exprAllowed && this.input.charCodeAt(this.pos + 1) !== 33) {
          ++this.pos;
          return this.finishToken(tok.jsxTagStart);
        }
        return super.readToken(code);
      }
      updateContext(prevType) {
        if (this.type == tt.braceL) {
          var curContext = this.curContext();
          if (curContext == tc_oTag) this.context.push(tokContexts.b_expr);
          else if (curContext == tc_expr) this.context.push(tokContexts.b_tmpl);
          else super.updateContext(prevType);
          this.exprAllowed = true;
        } else if (this.type === tt.slash && prevType === tok.jsxTagStart) {
          this.context.length -= 2;
          this.context.push(tc_cTag);
          this.exprAllowed = false;
        } else {
          return super.updateContext(prevType);
        }
      }
    };
  }
})(acornJsx);
var acornJsxExports = acornJsx.exports;
const jsx = /* @__PURE__ */ getDefaultExportFromCjs(acornJsxExports);
function simple(node, visitors, baseVisitor, state, override) {
  if (!baseVisitor) {
    baseVisitor = base;
  }
  (function c2(node2, st, override2) {
    var type = override2 || node2.type, found = visitors[type];
    baseVisitor[type](node2, st, c2);
    if (found) {
      found(node2, st);
    }
  })(node, state, override);
}
function ancestor(node, visitors, baseVisitor, state, override) {
  var ancestors = [];
  if (!baseVisitor) {
    baseVisitor = base;
  }
  (function c2(node2, st, override2) {
    var type = override2 || node2.type, found = visitors[type];
    var isNew = node2 !== ancestors[ancestors.length - 1];
    if (isNew) {
      ancestors.push(node2);
    }
    baseVisitor[type](node2, st, c2);
    if (found) {
      found(node2, st || ancestors, ancestors);
    }
    if (isNew) {
      ancestors.pop();
    }
  })(node, state, override);
}
function skipThrough(node, st, c2) {
  c2(node, st);
}
function ignore(_node, _st, _c) {
}
var base = {};
base.Program = base.BlockStatement = function(node, st, c2) {
  for (var i = 0, list = node.body; i < list.length; i += 1) {
    var stmt = list[i];
    c2(stmt, st, "Statement");
  }
};
base.Statement = skipThrough;
base.EmptyStatement = ignore;
base.ExpressionStatement = base.ParenthesizedExpression = base.ChainExpression = function(node, st, c2) {
  return c2(node.expression, st, "Expression");
};
base.IfStatement = function(node, st, c2) {
  c2(node.test, st, "Expression");
  c2(node.consequent, st, "Statement");
  if (node.alternate) {
    c2(node.alternate, st, "Statement");
  }
};
base.LabeledStatement = function(node, st, c2) {
  return c2(node.body, st, "Statement");
};
base.BreakStatement = base.ContinueStatement = ignore;
base.WithStatement = function(node, st, c2) {
  c2(node.object, st, "Expression");
  c2(node.body, st, "Statement");
};
base.SwitchStatement = function(node, st, c2) {
  c2(node.discriminant, st, "Expression");
  for (var i$1 = 0, list$1 = node.cases; i$1 < list$1.length; i$1 += 1) {
    var cs = list$1[i$1];
    if (cs.test) {
      c2(cs.test, st, "Expression");
    }
    for (var i = 0, list = cs.consequent; i < list.length; i += 1) {
      var cons = list[i];
      c2(cons, st, "Statement");
    }
  }
};
base.SwitchCase = function(node, st, c2) {
  if (node.test) {
    c2(node.test, st, "Expression");
  }
  for (var i = 0, list = node.consequent; i < list.length; i += 1) {
    var cons = list[i];
    c2(cons, st, "Statement");
  }
};
base.ReturnStatement = base.YieldExpression = base.AwaitExpression = function(node, st, c2) {
  if (node.argument) {
    c2(node.argument, st, "Expression");
  }
};
base.ThrowStatement = base.SpreadElement = function(node, st, c2) {
  return c2(node.argument, st, "Expression");
};
base.TryStatement = function(node, st, c2) {
  c2(node.block, st, "Statement");
  if (node.handler) {
    c2(node.handler, st);
  }
  if (node.finalizer) {
    c2(node.finalizer, st, "Statement");
  }
};
base.CatchClause = function(node, st, c2) {
  if (node.param) {
    c2(node.param, st, "Pattern");
  }
  c2(node.body, st, "Statement");
};
base.WhileStatement = base.DoWhileStatement = function(node, st, c2) {
  c2(node.test, st, "Expression");
  c2(node.body, st, "Statement");
};
base.ForStatement = function(node, st, c2) {
  if (node.init) {
    c2(node.init, st, "ForInit");
  }
  if (node.test) {
    c2(node.test, st, "Expression");
  }
  if (node.update) {
    c2(node.update, st, "Expression");
  }
  c2(node.body, st, "Statement");
};
base.ForInStatement = base.ForOfStatement = function(node, st, c2) {
  c2(node.left, st, "ForInit");
  c2(node.right, st, "Expression");
  c2(node.body, st, "Statement");
};
base.ForInit = function(node, st, c2) {
  if (node.type === "VariableDeclaration") {
    c2(node, st);
  } else {
    c2(node, st, "Expression");
  }
};
base.DebuggerStatement = ignore;
base.FunctionDeclaration = function(node, st, c2) {
  return c2(node, st, "Function");
};
base.VariableDeclaration = function(node, st, c2) {
  for (var i = 0, list = node.declarations; i < list.length; i += 1) {
    var decl = list[i];
    c2(decl, st);
  }
};
base.VariableDeclarator = function(node, st, c2) {
  c2(node.id, st, "Pattern");
  if (node.init) {
    c2(node.init, st, "Expression");
  }
};
base.Function = function(node, st, c2) {
  if (node.id) {
    c2(node.id, st, "Pattern");
  }
  for (var i = 0, list = node.params; i < list.length; i += 1) {
    var param = list[i];
    c2(param, st, "Pattern");
  }
  c2(node.body, st, node.expression ? "Expression" : "Statement");
};
base.Pattern = function(node, st, c2) {
  if (node.type === "Identifier") {
    c2(node, st, "VariablePattern");
  } else if (node.type === "MemberExpression") {
    c2(node, st, "MemberPattern");
  } else {
    c2(node, st);
  }
};
base.VariablePattern = ignore;
base.MemberPattern = skipThrough;
base.RestElement = function(node, st, c2) {
  return c2(node.argument, st, "Pattern");
};
base.ArrayPattern = function(node, st, c2) {
  for (var i = 0, list = node.elements; i < list.length; i += 1) {
    var elt = list[i];
    if (elt) {
      c2(elt, st, "Pattern");
    }
  }
};
base.ObjectPattern = function(node, st, c2) {
  for (var i = 0, list = node.properties; i < list.length; i += 1) {
    var prop = list[i];
    if (prop.type === "Property") {
      if (prop.computed) {
        c2(prop.key, st, "Expression");
      }
      c2(prop.value, st, "Pattern");
    } else if (prop.type === "RestElement") {
      c2(prop.argument, st, "Pattern");
    }
  }
};
base.Expression = skipThrough;
base.ThisExpression = base.Super = base.MetaProperty = ignore;
base.ArrayExpression = function(node, st, c2) {
  for (var i = 0, list = node.elements; i < list.length; i += 1) {
    var elt = list[i];
    if (elt) {
      c2(elt, st, "Expression");
    }
  }
};
base.ObjectExpression = function(node, st, c2) {
  for (var i = 0, list = node.properties; i < list.length; i += 1) {
    var prop = list[i];
    c2(prop, st);
  }
};
base.FunctionExpression = base.ArrowFunctionExpression = base.FunctionDeclaration;
base.SequenceExpression = function(node, st, c2) {
  for (var i = 0, list = node.expressions; i < list.length; i += 1) {
    var expr = list[i];
    c2(expr, st, "Expression");
  }
};
base.TemplateLiteral = function(node, st, c2) {
  for (var i = 0, list = node.quasis; i < list.length; i += 1) {
    var quasi = list[i];
    c2(quasi, st);
  }
  for (var i$1 = 0, list$1 = node.expressions; i$1 < list$1.length; i$1 += 1) {
    var expr = list$1[i$1];
    c2(expr, st, "Expression");
  }
};
base.TemplateElement = ignore;
base.UnaryExpression = base.UpdateExpression = function(node, st, c2) {
  c2(node.argument, st, "Expression");
};
base.BinaryExpression = base.LogicalExpression = function(node, st, c2) {
  c2(node.left, st, "Expression");
  c2(node.right, st, "Expression");
};
base.AssignmentExpression = base.AssignmentPattern = function(node, st, c2) {
  c2(node.left, st, "Pattern");
  c2(node.right, st, "Expression");
};
base.ConditionalExpression = function(node, st, c2) {
  c2(node.test, st, "Expression");
  c2(node.consequent, st, "Expression");
  c2(node.alternate, st, "Expression");
};
base.NewExpression = base.CallExpression = function(node, st, c2) {
  c2(node.callee, st, "Expression");
  if (node.arguments) {
    for (var i = 0, list = node.arguments; i < list.length; i += 1) {
      var arg = list[i];
      c2(arg, st, "Expression");
    }
  }
};
base.MemberExpression = function(node, st, c2) {
  c2(node.object, st, "Expression");
  if (node.computed) {
    c2(node.property, st, "Expression");
  }
};
base.ExportNamedDeclaration = base.ExportDefaultDeclaration = function(node, st, c2) {
  if (node.declaration) {
    c2(node.declaration, st, node.type === "ExportNamedDeclaration" || node.declaration.id ? "Statement" : "Expression");
  }
  if (node.source) {
    c2(node.source, st, "Expression");
  }
};
base.ExportAllDeclaration = function(node, st, c2) {
  if (node.exported) {
    c2(node.exported, st);
  }
  c2(node.source, st, "Expression");
};
base.ImportDeclaration = function(node, st, c2) {
  for (var i = 0, list = node.specifiers; i < list.length; i += 1) {
    var spec = list[i];
    c2(spec, st);
  }
  c2(node.source, st, "Expression");
};
base.ImportExpression = function(node, st, c2) {
  c2(node.source, st, "Expression");
};
base.ImportSpecifier = base.ImportDefaultSpecifier = base.ImportNamespaceSpecifier = base.Identifier = base.Literal = ignore;
base.TaggedTemplateExpression = function(node, st, c2) {
  c2(node.tag, st, "Expression");
  c2(node.quasi, st, "Expression");
};
base.ClassDeclaration = base.ClassExpression = function(node, st, c2) {
  return c2(node, st, "Class");
};
base.Class = function(node, st, c2) {
  if (node.id) {
    c2(node.id, st, "Pattern");
  }
  if (node.superClass) {
    c2(node.superClass, st, "Expression");
  }
  c2(node.body, st);
};
base.ClassBody = function(node, st, c2) {
  for (var i = 0, list = node.body; i < list.length; i += 1) {
    var elt = list[i];
    c2(elt, st);
  }
};
base.MethodDefinition = base.Property = function(node, st, c2) {
  if (node.computed) {
    c2(node.key, st, "Expression");
  }
  c2(node.value, st, "Expression");
};
var baseGetTag$1 = _baseGetTag, getPrototype = _getPrototype, isObjectLike$1 = isObjectLike_1;
var objectTag = "[object Object]";
var funcProto = Function.prototype, objectProto = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty = objectProto.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
function isPlainObject$1(value) {
  if (!isObjectLike$1(value) || baseGetTag$1(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
var isPlainObject_1 = isPlainObject$1;
const isPlainObject$2 = /* @__PURE__ */ getDefaultExportFromCjs(isPlainObject_1);
var baseGetTag = _baseGetTag, isArray = isArray_1, isObjectLike = isObjectLike_1;
var stringTag = "[object String]";
function isString(value) {
  return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
}
var isString_1 = isString;
const isString$1 = /* @__PURE__ */ getDefaultExportFromCjs(isString_1);
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function isObject(o) {
  return Object.prototype.toString.call(o) === "[object Object]";
}
function isPlainObject(o) {
  var ctor, prot;
  if (isObject(o) === false) return false;
  ctor = o.constructor;
  if (ctor === void 0) return true;
  prot = ctor.prototype;
  if (isObject(prot) === false) return false;
  if (prot.hasOwnProperty("isPrototypeOf") === false) {
    return false;
  }
  return true;
}
var dist = {};
var __assign = commonjsGlobal && commonjsGlobal.__assign || function() {
  __assign = Object.assign || function(t2) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p2 in s) if (Object.prototype.hasOwnProperty.call(s, p2))
        t2[p2] = s[p2];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
var __spreadArrays = commonjsGlobal && commonjsGlobal.__spreadArrays || function() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k2 = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k2++)
      r[k2] = a[j];
  return r;
};
Object.defineProperty(dist, "__esModule", { value: true });
var seen = [];
function isObj(value) {
  var type = typeof value;
  return value !== null && (type === "object" || type === "function");
}
function isRegexp(value) {
  return Object.prototype.toString.call(value) === "[object RegExp]";
}
function getOwnEnumPropSymbols(object) {
  return Object.getOwnPropertySymbols(object).filter(function(keySymbol) {
    return Object.prototype.propertyIsEnumerable.call(object, keySymbol);
  });
}
function prettyPrint(input, options, pad) {
  if (pad === void 0) {
    pad = "";
  }
  var defaultOptions2 = {
    indent: "	",
    singleQuotes: true
  };
  var combinedOptions = __assign(__assign({}, defaultOptions2), options);
  var tokens;
  if (combinedOptions.inlineCharacterLimit === void 0) {
    tokens = {
      newLine: "\n",
      newLineOrSpace: "\n",
      pad,
      indent: pad + combinedOptions.indent
    };
  } else {
    tokens = {
      newLine: "@@__PRETTY_PRINT_NEW_LINE__@@",
      newLineOrSpace: "@@__PRETTY_PRINT_NEW_LINE_OR_SPACE__@@",
      pad: "@@__PRETTY_PRINT_PAD__@@",
      indent: "@@__PRETTY_PRINT_INDENT__@@"
    };
  }
  var expandWhiteSpace = function(string) {
    if (combinedOptions.inlineCharacterLimit === void 0) {
      return string;
    }
    var oneLined = string.replace(new RegExp(tokens.newLine, "g"), "").replace(new RegExp(tokens.newLineOrSpace, "g"), " ").replace(new RegExp(tokens.pad + "|" + tokens.indent, "g"), "");
    if (oneLined.length <= combinedOptions.inlineCharacterLimit) {
      return oneLined;
    }
    return string.replace(new RegExp(tokens.newLine + "|" + tokens.newLineOrSpace, "g"), "\n").replace(new RegExp(tokens.pad, "g"), pad).replace(new RegExp(tokens.indent, "g"), pad + combinedOptions.indent);
  };
  if (seen.indexOf(input) !== -1) {
    return '"[Circular]"';
  }
  if (input === null || input === void 0 || typeof input === "number" || typeof input === "boolean" || typeof input === "function" || typeof input === "symbol" || isRegexp(input)) {
    return String(input);
  }
  if (input instanceof Date) {
    return "new Date('" + input.toISOString() + "')";
  }
  if (Array.isArray(input)) {
    if (input.length === 0) {
      return "[]";
    }
    seen.push(input);
    var ret = "[" + tokens.newLine + input.map(function(el, i) {
      var eol = input.length - 1 === i ? tokens.newLine : "," + tokens.newLineOrSpace;
      var value = prettyPrint(el, combinedOptions, pad + combinedOptions.indent);
      if (combinedOptions.transform) {
        value = combinedOptions.transform(input, i, value);
      }
      return tokens.indent + value + eol;
    }).join("") + tokens.pad + "]";
    seen.pop();
    return expandWhiteSpace(ret);
  }
  if (isObj(input)) {
    var objKeys_1 = __spreadArrays(Object.keys(input), getOwnEnumPropSymbols(input));
    if (combinedOptions.filter) {
      objKeys_1 = objKeys_1.filter(function(el) {
        return combinedOptions.filter && combinedOptions.filter(input, el);
      });
    }
    if (objKeys_1.length === 0) {
      return "{}";
    }
    seen.push(input);
    var ret = "{" + tokens.newLine + objKeys_1.map(function(el, i) {
      var eol = objKeys_1.length - 1 === i ? tokens.newLine : "," + tokens.newLineOrSpace;
      var isSymbol = typeof el === "symbol";
      var isClassic = !isSymbol && /^[a-z$_][a-z$_0-9]*$/i.test(el.toString());
      var key = isSymbol || isClassic ? el : prettyPrint(el, combinedOptions);
      var value = prettyPrint(input[el], combinedOptions, pad + combinedOptions.indent);
      if (combinedOptions.transform) {
        value = combinedOptions.transform(input, el, value);
      }
      return tokens.indent + String(key) + ": " + value + eol;
    }).join("") + tokens.pad + "}";
    seen.pop();
    return expandWhiteSpace(ret);
  }
  input = String(input).replace(/[\r\n]/g, function(x) {
    return x === "\n" ? "\\n" : "\\r";
  });
  if (!combinedOptions.singleQuotes) {
    input = input.replace(/"/g, '\\"');
    return '"' + input + '"';
  }
  input = input.replace(/\\?'/g, "\\'");
  return "'" + input + "'";
}
var prettyPrint_1 = dist.prettyPrint = prettyPrint;
var reactIs = { exports: {} };
var reactIs_production_min = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b = Symbol.for("react.element"), c = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), e = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), h = Symbol.for("react.context"), k = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), n = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), t = Symbol.for("react.offscreen"), u;
u = Symbol.for("react.module.reference");
function v(a) {
  if ("object" === typeof a && null !== a) {
    var r = a.$$typeof;
    switch (r) {
      case b:
        switch (a = a.type, a) {
          case d:
          case f:
          case e:
          case m:
          case n:
            return a;
          default:
            switch (a = a && a.$$typeof, a) {
              case k:
              case h:
              case l:
              case q:
              case p:
              case g:
                return a;
              default:
                return r;
            }
        }
      case c:
        return r;
    }
  }
}
reactIs_production_min.ContextConsumer = h;
reactIs_production_min.ContextProvider = g;
reactIs_production_min.Element = b;
reactIs_production_min.ForwardRef = l;
reactIs_production_min.Fragment = d;
reactIs_production_min.Lazy = q;
reactIs_production_min.Memo = p;
reactIs_production_min.Portal = c;
reactIs_production_min.Profiler = f;
reactIs_production_min.StrictMode = e;
reactIs_production_min.Suspense = m;
reactIs_production_min.SuspenseList = n;
reactIs_production_min.isAsyncMode = function() {
  return false;
};
reactIs_production_min.isConcurrentMode = function() {
  return false;
};
reactIs_production_min.isContextConsumer = function(a) {
  return v(a) === h;
};
reactIs_production_min.isContextProvider = function(a) {
  return v(a) === g;
};
reactIs_production_min.isElement = function(a) {
  return "object" === typeof a && null !== a && a.$$typeof === b;
};
reactIs_production_min.isForwardRef = function(a) {
  return v(a) === l;
};
reactIs_production_min.isFragment = function(a) {
  return v(a) === d;
};
reactIs_production_min.isLazy = function(a) {
  return v(a) === q;
};
reactIs_production_min.isMemo = function(a) {
  return v(a) === p;
};
reactIs_production_min.isPortal = function(a) {
  return v(a) === c;
};
reactIs_production_min.isProfiler = function(a) {
  return v(a) === f;
};
reactIs_production_min.isStrictMode = function(a) {
  return v(a) === e;
};
reactIs_production_min.isSuspense = function(a) {
  return v(a) === m;
};
reactIs_production_min.isSuspenseList = function(a) {
  return v(a) === n;
};
reactIs_production_min.isValidElementType = function(a) {
  return "string" === typeof a || "function" === typeof a || a === d || a === f || a === e || a === m || a === n || a === t || "object" === typeof a && null !== a && (a.$$typeof === q || a.$$typeof === p || a.$$typeof === g || a.$$typeof === h || a.$$typeof === l || a.$$typeof === u || void 0 !== a.getModuleId) ? true : false;
};
reactIs_production_min.typeOf = v;
{
  reactIs.exports = reactIs_production_min;
}
var reactIsExports = reactIs.exports;
var spacer = function(times, tabStop) {
  if (times === 0) {
    return "";
  }
  return new Array(times * tabStop).fill(" ").join("");
};
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n2 = Object.prototype.toString.call(o).slice(8, -1);
  if (n2 === "Object" && o.constructor) n2 = o.constructor.name;
  if (n2 === "Map" || n2 === "Set") return Array.from(o);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function safeSortObject(value, seen2) {
  if (value === null || _typeof(value) !== "object") {
    return value;
  }
  if (value instanceof Date || value instanceof RegExp || /* @__PURE__ */ reactExports.isValidElement(value)) {
    return value;
  }
  seen2.add(value);
  if (Array.isArray(value)) {
    return value.map(function(v2) {
      return safeSortObject(v2, seen2);
    });
  }
  return Object.keys(value).sort().reduce(function(result, key) {
    if (key === "_owner") {
      return result;
    }
    if (key === "current" || seen2.has(value[key])) {
      result[key] = "[Circular]";
    } else {
      result[key] = safeSortObject(value[key], seen2);
    }
    return result;
  }, {});
}
function sortObject(value) {
  return safeSortObject(value, /* @__PURE__ */ new WeakSet());
}
var createStringTreeNode = function createStringTreeNode2(value) {
  return {
    type: "string",
    value
  };
};
var createNumberTreeNode = function createNumberTreeNode2(value) {
  return {
    type: "number",
    value
  };
};
var createReactElementTreeNode = function createReactElementTreeNode2(displayName, props, defaultProps, childrens) {
  return {
    type: "ReactElement",
    displayName,
    props,
    defaultProps,
    childrens
  };
};
var createReactFragmentTreeNode = function createReactFragmentTreeNode2(key, childrens) {
  return {
    type: "ReactFragment",
    key,
    childrens
  };
};
var supportFragment = Boolean(reactExports.Fragment);
var getFunctionTypeName = function getFunctionTypeName2(functionType) {
  if (!functionType.name || functionType.name === "_default") {
    return "No Display Name";
  }
  return functionType.name;
};
var getWrappedComponentDisplayName = function getWrappedComponentDisplayName2(Component) {
  switch (true) {
    case Boolean(Component.displayName):
      return Component.displayName;
    case Component.$$typeof === reactIsExports.Memo:
      return getWrappedComponentDisplayName2(Component.type);
    case Component.$$typeof === reactIsExports.ForwardRef:
      return getWrappedComponentDisplayName2(Component.render);
    default:
      return getFunctionTypeName(Component);
  }
};
var getReactElementDisplayName = function getReactElementDisplayName2(element) {
  switch (true) {
    case typeof element.type === "string":
      return element.type;
    case typeof element.type === "function":
      if (element.type.displayName) {
        return element.type.displayName;
      }
      return getFunctionTypeName(element.type);
    case reactIsExports.isForwardRef(element):
    case reactIsExports.isMemo(element):
      return getWrappedComponentDisplayName(element.type);
    case reactIsExports.isContextConsumer(element):
      return "".concat(element.type._context.displayName || "Context", ".Consumer");
    case reactIsExports.isContextProvider(element):
      return "".concat(element.type._context.displayName || "Context", ".Provider");
    case reactIsExports.isLazy(element):
      return "Lazy";
    case reactIsExports.isProfiler(element):
      return "Profiler";
    case reactIsExports.isStrictMode(element):
      return "StrictMode";
    case reactIsExports.isSuspense(element):
      return "Suspense";
    default:
      return "UnknownElementType";
  }
};
var noChildren = function noChildren2(propsValue, propName) {
  return propName !== "children";
};
var onlyMeaningfulChildren = function onlyMeaningfulChildren2(children) {
  return children !== true && children !== false && children !== null && children !== "";
};
var filterProps = function filterProps2(originalProps, cb) {
  var filteredProps = {};
  Object.keys(originalProps).filter(function(key) {
    return cb(originalProps[key], key);
  }).forEach(function(key) {
    return filteredProps[key] = originalProps[key];
  });
  return filteredProps;
};
var parseReactElement = function parseReactElement2(element, options) {
  var _options$displayName = options.displayName, displayNameFn = _options$displayName === void 0 ? getReactElementDisplayName : _options$displayName;
  if (typeof element === "string") {
    return createStringTreeNode(element);
  } else if (typeof element === "number") {
    return createNumberTreeNode(element);
  } else if (!/* @__PURE__ */ React.isValidElement(element)) {
    throw new Error("react-element-to-jsx-string: Expected a React.Element, got `".concat(_typeof(element), "`"));
  }
  var displayName = displayNameFn(element);
  var props = filterProps(element.props, noChildren);
  if (element.ref !== null) {
    props.ref = element.ref;
  }
  var key = element.key;
  if (typeof key === "string" && key.search(/^\./)) {
    props.key = key;
  }
  var defaultProps = filterProps(element.type.defaultProps || {}, noChildren);
  var childrens = React.Children.toArray(element.props.children).filter(onlyMeaningfulChildren).map(function(child) {
    return parseReactElement2(child, options);
  });
  if (supportFragment && element.type === reactExports.Fragment) {
    return createReactFragmentTreeNode(key, childrens);
  }
  return createReactElementTreeNode(displayName, props, defaultProps, childrens);
};
function noRefCheck() {
}
var inlineFunction = function inlineFunction2(fn) {
  return fn.toString().split("\n").map(function(line) {
    return line.trim();
  }).join("");
};
var defaultFunctionValue = inlineFunction;
var formatFunction = function(fn, options) {
  var _options$functionValu = options.functionValue, functionValue = _options$functionValu === void 0 ? defaultFunctionValue : _options$functionValu, showFunctions = options.showFunctions;
  if (!showFunctions && functionValue === defaultFunctionValue) {
    return functionValue(noRefCheck);
  }
  return functionValue(fn);
};
var formatComplexDataStructure = function(value, inline, lvl, options) {
  var normalizedValue = sortObject(value);
  var stringifiedValue = prettyPrint_1(normalizedValue, {
    transform: function transform(currentObj, prop, originalResult) {
      var currentValue = currentObj[prop];
      if (currentValue && /* @__PURE__ */ reactExports.isValidElement(currentValue)) {
        return formatTreeNode(parseReactElement(currentValue, options), true, lvl, options);
      }
      if (typeof currentValue === "function") {
        return formatFunction(currentValue, options);
      }
      return originalResult;
    }
  });
  if (inline) {
    return stringifiedValue.replace(/\s+/g, " ").replace(/{ /g, "{").replace(/ }/g, "}").replace(/\[ /g, "[").replace(/ ]/g, "]");
  }
  return stringifiedValue.replace(/\t/g, spacer(1, options.tabStop)).replace(/\n([^$])/g, "\n".concat(spacer(lvl + 1, options.tabStop), "$1"));
};
var escape$1 = function escape(s) {
  return s.replace(/"/g, "&quot;");
};
var formatPropValue = function formatPropValue2(propValue, inline, lvl, options) {
  if (typeof propValue === "number") {
    return "{".concat(String(propValue), "}");
  }
  if (typeof propValue === "string") {
    return '"'.concat(escape$1(propValue), '"');
  }
  if (_typeof(propValue) === "symbol") {
    var symbolDescription = propValue.valueOf().toString().replace(/Symbol\((.*)\)/, "$1");
    if (!symbolDescription) {
      return "{Symbol()}";
    }
    return "{Symbol('".concat(symbolDescription, "')}");
  }
  if (typeof propValue === "function") {
    return "{".concat(formatFunction(propValue, options), "}");
  }
  if (/* @__PURE__ */ reactExports.isValidElement(propValue)) {
    return "{".concat(formatTreeNode(parseReactElement(propValue, options), true, lvl, options), "}");
  }
  if (propValue instanceof Date) {
    if (isNaN(propValue.valueOf())) {
      return "{new Date(NaN)}";
    }
    return '{new Date("'.concat(propValue.toISOString(), '")}');
  }
  if (isPlainObject(propValue) || Array.isArray(propValue)) {
    return "{".concat(formatComplexDataStructure(propValue, inline, lvl, options), "}");
  }
  return "{".concat(String(propValue), "}");
};
var formatProp = function(name2, hasValue, value, hasDefaultValue, defaultValue, inline, lvl, options) {
  if (!hasValue && !hasDefaultValue) {
    throw new Error('The prop "'.concat(name2, '" has no value and no default: could not be formatted'));
  }
  var usedValue = hasValue ? value : defaultValue;
  var useBooleanShorthandSyntax = options.useBooleanShorthandSyntax, tabStop = options.tabStop;
  var formattedPropValue = formatPropValue(usedValue, inline, lvl, options);
  var attributeFormattedInline = " ";
  var attributeFormattedMultiline = "\n".concat(spacer(lvl + 1, tabStop));
  var isMultilineAttribute = formattedPropValue.includes("\n");
  if (useBooleanShorthandSyntax && formattedPropValue === "{false}" && !hasDefaultValue) {
    attributeFormattedInline = "";
    attributeFormattedMultiline = "";
  } else if (useBooleanShorthandSyntax && formattedPropValue === "{true}") {
    attributeFormattedInline += "".concat(name2);
    attributeFormattedMultiline += "".concat(name2);
  } else {
    attributeFormattedInline += "".concat(name2, "=").concat(formattedPropValue);
    attributeFormattedMultiline += "".concat(name2, "=").concat(formattedPropValue);
  }
  return {
    attributeFormattedInline,
    attributeFormattedMultiline,
    isMultilineAttribute
  };
};
var mergeSiblingPlainStringChildrenReducer = function(previousNodes, currentNode) {
  var nodes = previousNodes.slice(0, previousNodes.length > 0 ? previousNodes.length - 1 : 0);
  var previousNode = previousNodes[previousNodes.length - 1];
  if (previousNode && (currentNode.type === "string" || currentNode.type === "number") && (previousNode.type === "string" || previousNode.type === "number")) {
    nodes.push(createStringTreeNode(String(previousNode.value) + String(currentNode.value)));
  } else {
    if (previousNode) {
      nodes.push(previousNode);
    }
    nodes.push(currentNode);
  }
  return nodes;
};
var isKeyOrRefProps = function isKeyOrRefProps2(propName) {
  return ["key", "ref"].includes(propName);
};
var sortPropsByNames = function(shouldSortUserProps) {
  return function(props) {
    var haveKeyProp = props.includes("key");
    var haveRefProp = props.includes("ref");
    var userPropsOnly = props.filter(function(oneProp) {
      return !isKeyOrRefProps(oneProp);
    });
    var sortedProps = shouldSortUserProps ? _toConsumableArray(userPropsOnly.sort()) : _toConsumableArray(userPropsOnly);
    if (haveRefProp) {
      sortedProps.unshift("ref");
    }
    if (haveKeyProp) {
      sortedProps.unshift("key");
    }
    return sortedProps;
  };
};
function createPropFilter(props, filter) {
  if (Array.isArray(filter)) {
    return function(key) {
      return filter.indexOf(key) === -1;
    };
  } else {
    return function(key) {
      return filter(props[key], key);
    };
  }
}
var compensateMultilineStringElementIndentation = function compensateMultilineStringElementIndentation2(element, formattedElement, inline, lvl, options) {
  var tabStop = options.tabStop;
  if (element.type === "string") {
    return formattedElement.split("\n").map(function(line, offset2) {
      if (offset2 === 0) {
        return line;
      }
      return "".concat(spacer(lvl, tabStop)).concat(line);
    }).join("\n");
  }
  return formattedElement;
};
var formatOneChildren = function formatOneChildren2(inline, lvl, options) {
  return function(element) {
    return compensateMultilineStringElementIndentation(element, formatTreeNode(element, inline, lvl, options), inline, lvl, options);
  };
};
var onlyPropsWithOriginalValue = function onlyPropsWithOriginalValue2(defaultProps, props) {
  return function(propName) {
    var haveDefaultValue = Object.keys(defaultProps).includes(propName);
    return !haveDefaultValue || haveDefaultValue && defaultProps[propName] !== props[propName];
  };
};
var isInlineAttributeTooLong = function isInlineAttributeTooLong2(attributes, inlineAttributeString, lvl, tabStop, maxInlineAttributesLineLength) {
  if (!maxInlineAttributesLineLength) {
    return attributes.length > 1;
  }
  return spacer(lvl, tabStop).length + inlineAttributeString.length > maxInlineAttributesLineLength;
};
var shouldRenderMultilineAttr = function shouldRenderMultilineAttr2(attributes, inlineAttributeString, containsMultilineAttr, inline, lvl, tabStop, maxInlineAttributesLineLength) {
  return (isInlineAttributeTooLong(attributes, inlineAttributeString, lvl, tabStop, maxInlineAttributesLineLength) || containsMultilineAttr) && !inline;
};
var formatReactElementNode = function(node, inline, lvl, options) {
  var type = node.type, _node$displayName = node.displayName, displayName = _node$displayName === void 0 ? "" : _node$displayName, childrens = node.childrens, _node$props = node.props, props = _node$props === void 0 ? {} : _node$props, _node$defaultProps = node.defaultProps, defaultProps = _node$defaultProps === void 0 ? {} : _node$defaultProps;
  if (type !== "ReactElement") {
    throw new Error('The "formatReactElementNode" function could only format node of type "ReactElement". Given:  '.concat(type));
  }
  var filterProps3 = options.filterProps, maxInlineAttributesLineLength = options.maxInlineAttributesLineLength, showDefaultProps = options.showDefaultProps, sortProps = options.sortProps, tabStop = options.tabStop;
  var out = "<".concat(displayName);
  var outInlineAttr = out;
  var outMultilineAttr = out;
  var containsMultilineAttr = false;
  var visibleAttributeNames = [];
  var propFilter = createPropFilter(props, filterProps3);
  Object.keys(props).filter(propFilter).filter(onlyPropsWithOriginalValue(defaultProps, props)).forEach(function(propName) {
    return visibleAttributeNames.push(propName);
  });
  Object.keys(defaultProps).filter(propFilter).filter(function() {
    return showDefaultProps;
  }).filter(function(defaultPropName) {
    return !visibleAttributeNames.includes(defaultPropName);
  }).forEach(function(defaultPropName) {
    return visibleAttributeNames.push(defaultPropName);
  });
  var attributes = sortPropsByNames(sortProps)(visibleAttributeNames);
  attributes.forEach(function(attributeName) {
    var _formatProp = formatProp(attributeName, Object.keys(props).includes(attributeName), props[attributeName], Object.keys(defaultProps).includes(attributeName), defaultProps[attributeName], inline, lvl, options), attributeFormattedInline = _formatProp.attributeFormattedInline, attributeFormattedMultiline = _formatProp.attributeFormattedMultiline, isMultilineAttribute = _formatProp.isMultilineAttribute;
    if (isMultilineAttribute) {
      containsMultilineAttr = true;
    }
    outInlineAttr += attributeFormattedInline;
    outMultilineAttr += attributeFormattedMultiline;
  });
  outMultilineAttr += "\n".concat(spacer(lvl, tabStop));
  if (shouldRenderMultilineAttr(attributes, outInlineAttr, containsMultilineAttr, inline, lvl, tabStop, maxInlineAttributesLineLength)) {
    out = outMultilineAttr;
  } else {
    out = outInlineAttr;
  }
  if (childrens && childrens.length > 0) {
    var newLvl = lvl + 1;
    out += ">";
    if (!inline) {
      out += "\n";
      out += spacer(newLvl, tabStop);
    }
    out += childrens.reduce(mergeSiblingPlainStringChildrenReducer, []).map(formatOneChildren(inline, newLvl, options)).join(!inline ? "\n".concat(spacer(newLvl, tabStop)) : "");
    if (!inline) {
      out += "\n";
      out += spacer(newLvl - 1, tabStop);
    }
    out += "</".concat(displayName, ">");
  } else {
    if (!isInlineAttributeTooLong(attributes, outInlineAttr, lvl, tabStop, maxInlineAttributesLineLength)) {
      out += " ";
    }
    out += "/>";
  }
  return out;
};
var REACT_FRAGMENT_TAG_NAME_SHORT_SYNTAX = "";
var REACT_FRAGMENT_TAG_NAME_EXPLICIT_SYNTAX = "React.Fragment";
var toReactElementTreeNode = function toReactElementTreeNode2(displayName, key, childrens) {
  var props = {};
  if (key) {
    props = {
      key
    };
  }
  return {
    type: "ReactElement",
    displayName,
    props,
    defaultProps: {},
    childrens
  };
};
var isKeyedFragment = function isKeyedFragment2(_ref) {
  var key = _ref.key;
  return Boolean(key);
};
var hasNoChildren = function hasNoChildren2(_ref2) {
  var childrens = _ref2.childrens;
  return childrens.length === 0;
};
var formatReactFragmentNode = function(node, inline, lvl, options) {
  var type = node.type, key = node.key, childrens = node.childrens;
  if (type !== "ReactFragment") {
    throw new Error('The "formatReactFragmentNode" function could only format node of type "ReactFragment". Given: '.concat(type));
  }
  var useFragmentShortSyntax = options.useFragmentShortSyntax;
  var displayName;
  if (useFragmentShortSyntax) {
    if (hasNoChildren(node) || isKeyedFragment(node)) {
      displayName = REACT_FRAGMENT_TAG_NAME_EXPLICIT_SYNTAX;
    } else {
      displayName = REACT_FRAGMENT_TAG_NAME_SHORT_SYNTAX;
    }
  } else {
    displayName = REACT_FRAGMENT_TAG_NAME_EXPLICIT_SYNTAX;
  }
  return formatReactElementNode(toReactElementTreeNode(displayName, key, childrens), inline, lvl, options);
};
var jsxStopChars = ["<", ">", "{", "}"];
var shouldBeEscaped = function shouldBeEscaped2(s) {
  return jsxStopChars.some(function(jsxStopChar) {
    return s.includes(jsxStopChar);
  });
};
var escape2 = function escape3(s) {
  if (!shouldBeEscaped(s)) {
    return s;
  }
  return "{`".concat(s, "`}");
};
var preserveTrailingSpace = function preserveTrailingSpace2(s) {
  var result = s;
  if (result.endsWith(" ")) {
    result = result.replace(/^(.*?)(\s+)$/, "$1{'$2'}");
  }
  if (result.startsWith(" ")) {
    result = result.replace(/^(\s+)(.*)$/, "{'$1'}$2");
  }
  return result;
};
var formatTreeNode = function(node, inline, lvl, options) {
  if (node.type === "number") {
    return String(node.value);
  }
  if (node.type === "string") {
    return node.value ? "".concat(preserveTrailingSpace(escape2(String(node.value)))) : "";
  }
  if (node.type === "ReactElement") {
    return formatReactElementNode(node, inline, lvl, options);
  }
  if (node.type === "ReactFragment") {
    return formatReactFragmentNode(node, inline, lvl, options);
  }
  throw new TypeError('Unknow format type "'.concat(node.type, '"'));
};
var formatTree = function(node, options) {
  return formatTreeNode(node, false, 0, options);
};
var reactElementToJsxString = function reactElementToJsxString2(element) {
  var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$filterProps = _ref.filterProps, filterProps3 = _ref$filterProps === void 0 ? [] : _ref$filterProps, _ref$showDefaultProps = _ref.showDefaultProps, showDefaultProps = _ref$showDefaultProps === void 0 ? true : _ref$showDefaultProps, _ref$showFunctions = _ref.showFunctions, showFunctions = _ref$showFunctions === void 0 ? false : _ref$showFunctions, functionValue = _ref.functionValue, _ref$tabStop = _ref.tabStop, tabStop = _ref$tabStop === void 0 ? 2 : _ref$tabStop, _ref$useBooleanShorth = _ref.useBooleanShorthandSyntax, useBooleanShorthandSyntax = _ref$useBooleanShorth === void 0 ? true : _ref$useBooleanShorth, _ref$useFragmentShort = _ref.useFragmentShortSyntax, useFragmentShortSyntax = _ref$useFragmentShort === void 0 ? true : _ref$useFragmentShort, _ref$sortProps = _ref.sortProps, sortProps = _ref$sortProps === void 0 ? true : _ref$sortProps, maxInlineAttributesLineLength = _ref.maxInlineAttributesLineLength, displayName = _ref.displayName;
  if (!element) {
    throw new Error("react-element-to-jsx-string: Expected a ReactElement");
  }
  var options = {
    filterProps: filterProps3,
    showDefaultProps,
    showFunctions,
    functionValue,
    tabStop,
    useBooleanShorthandSyntax,
    useFragmentShortSyntax,
    sortProps,
    maxInlineAttributesLineLength,
    displayName
  };
  return formatTree(parseReactElement(element, options), options);
};
const { defaultDecorateStory, addons, useEffect } = __STORYBOOK_MODULE_PREVIEW_API__;
const { logger } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
function generateFuncSignature(params, returns) {
  let hasParams = params != null, hasReturns = returns != null;
  if (!hasParams && !hasReturns) return "";
  let funcParts = [];
  if (hasParams) {
    let funcParams = params.map((x) => {
      let prettyName = x.getPrettyName(), typeName = x.getTypeName();
      return typeName != null ? `${prettyName}: ${typeName}` : prettyName;
    });
    funcParts.push(`(${funcParams.join(", ")})`);
  } else funcParts.push("()");
  return hasReturns && funcParts.push(`=> ${returns.getTypeName()}`), funcParts.join(" ");
}
function generateShortFuncSignature(params, returns) {
  let hasParams = params != null, hasReturns = returns != null;
  if (!hasParams && !hasReturns) return "";
  let funcParts = [];
  return hasParams ? funcParts.push("( ... )") : funcParts.push("()"), hasReturns && funcParts.push(`=> ${returns.getTypeName()}`), funcParts.join(" ");
}
function toMultilineSignature(signature) {
  return signature.replace(/,/g, `,\r
`);
}
var CUSTOM_CAPTION = "custom", OBJECT_CAPTION = "object", ARRAY_CAPTION = "array", CLASS_CAPTION = "class", FUNCTION_CAPTION = "func", ELEMENT_CAPTION = "element";
function isHtmlTag(tagName) {
  return htmlTags$1.includes(tagName.toLowerCase());
}
var BASIC_OPTIONS = { format: { indent: { style: "  " }, semicolons: false } }, COMPACT_OPTIONS = { ...BASIC_OPTIONS, format: { newline: "" } }, PRETTY_OPTIONS = { ...BASIC_OPTIONS };
function generateCode(ast, compact = false) {
  return escodegen.generate(ast, compact ? COMPACT_OPTIONS : PRETTY_OPTIONS);
}
function generateObjectCode(ast, compact = false) {
  return compact ? generateCompactObjectCode(ast) : generateCode(ast);
}
function generateCompactObjectCode(ast) {
  let result = generateCode(ast, true);
  return result.endsWith(" }") || (result = `${result.slice(0, -1)} }`), result;
}
function generateArrayCode(ast, compact = false) {
  return compact ? generateCompactArrayCode(ast) : generateMultilineArrayCode(ast);
}
function generateMultilineArrayCode(ast) {
  let result = generateCode(ast);
  return result.endsWith("  }]") && (result = dedent(result)), result;
}
function generateCompactArrayCode(ast) {
  let result = generateCode(ast, true);
  return result.startsWith("[    ") && (result = result.replace("[    ", "[")), result;
}
var isMemo = (component) => component.$$typeof === Symbol.for("react.memo"), isForwardRef = (component) => component.$$typeof === Symbol.for("react.forward_ref");
var ACORN_WALK_VISITORS = { ...base, JSXElement: () => {
} }, acornParser = Parser.extend(jsx());
function extractIdentifierName(identifierNode) {
  return identifierNode != null ? identifierNode.name : null;
}
function filterAncestors(ancestors) {
  return ancestors.filter((x) => x.type === "ObjectExpression" || x.type === "ArrayExpression");
}
function calculateNodeDepth(node) {
  let depths = [];
  return ancestor(node, { ObjectExpression(_, ancestors) {
    depths.push(filterAncestors(ancestors).length);
  }, ArrayExpression(_, ancestors) {
    depths.push(filterAncestors(ancestors).length);
  } }, ACORN_WALK_VISITORS), Math.max(...depths);
}
function parseIdentifier(identifierNode) {
  return { inferredType: { type: "Identifier", identifier: extractIdentifierName(identifierNode) }, ast: identifierNode };
}
function parseLiteral(literalNode) {
  return { inferredType: { type: "Literal" }, ast: literalNode };
}
function parseFunction(funcNode) {
  let innerJsxElementNode;
  simple(funcNode.body, { JSXElement(node) {
    innerJsxElementNode = node;
  } }, ACORN_WALK_VISITORS);
  let inferredType = { type: innerJsxElementNode != null ? "Element" : "Function", params: funcNode.params, hasParams: funcNode.params.length !== 0 }, identifierName = extractIdentifierName(funcNode.id);
  return identifierName != null && (inferredType.identifier = identifierName), { inferredType, ast: funcNode };
}
function parseClass(classNode) {
  let innerJsxElementNode;
  return simple(classNode.body, { JSXElement(node) {
    innerJsxElementNode = node;
  } }, ACORN_WALK_VISITORS), { inferredType: { type: innerJsxElementNode != null ? "Element" : "Class", identifier: extractIdentifierName(classNode.id) }, ast: classNode };
}
function parseJsxElement(jsxElementNode) {
  let inferredType = { type: "Element" }, identifierName = extractIdentifierName(jsxElementNode.openingElement.name);
  return identifierName != null && (inferredType.identifier = identifierName), { inferredType, ast: jsxElementNode };
}
function parseCall(callNode) {
  let identifierNode = callNode.callee.type === "MemberExpression" ? callNode.callee.property : callNode.callee;
  return extractIdentifierName(identifierNode) === "shape" ? parseObject(callNode.arguments[0]) : null;
}
function parseObject(objectNode) {
  return { inferredType: { type: "Object", depth: calculateNodeDepth(objectNode) }, ast: objectNode };
}
function parseArray(arrayNode) {
  return { inferredType: { type: "Array", depth: calculateNodeDepth(arrayNode) }, ast: arrayNode };
}
function parseExpression(expression) {
  switch (expression.type) {
    case "Identifier":
      return parseIdentifier(expression);
    case "Literal":
      return parseLiteral(expression);
    case "FunctionExpression":
    case "ArrowFunctionExpression":
      return parseFunction(expression);
    case "ClassExpression":
      return parseClass(expression);
    case "JSXElement":
      return parseJsxElement(expression);
    case "CallExpression":
      return parseCall(expression);
    case "ObjectExpression":
      return parseObject(expression);
    case "ArrayExpression":
      return parseArray(expression);
    default:
      return null;
  }
}
function parse3(value) {
  let ast = acornParser.parse(`(${value})`, { ecmaVersion: 2020 }), parsingResult = { inferredType: { type: "Unknown" }, ast };
  if (ast.body[0] != null) {
    let rootNode = ast.body[0];
    switch (rootNode.type) {
      case "ExpressionStatement": {
        let expressionResult = parseExpression(rootNode.expression);
        expressionResult != null && (parsingResult = expressionResult);
        break;
      }
    }
  }
  return parsingResult;
}
function inspectValue(value) {
  try {
    return { ...parse3(value) };
  } catch {
  }
  return { inferredType: { type: "Unknown" } };
}
var MAX_FUNC_LENGTH = 150;
function createTypeDef({ name: name2, short, compact, full, inferredType }) {
  return { name: name2, short, compact, full: full ?? short, inferredType };
}
function cleanPropTypes(value) {
  return value.replace(/PropTypes./g, "").replace(/.isRequired/g, "");
}
function splitIntoLines(value) {
  return value.split(/\r?\n/);
}
function prettyObject(ast, compact = false) {
  return cleanPropTypes(generateObjectCode(ast, compact));
}
function prettyArray(ast, compact = false) {
  return cleanPropTypes(generateCode(ast, compact));
}
function getCaptionForInspectionType(type) {
  switch (type) {
    case "Object":
      return OBJECT_CAPTION;
    case "Array":
      return ARRAY_CAPTION;
    case "Class":
      return CLASS_CAPTION;
    case "Function":
      return FUNCTION_CAPTION;
    case "Element":
      return ELEMENT_CAPTION;
    default:
      return CUSTOM_CAPTION;
  }
}
function generateTypeFromString(value, originalTypeName) {
  let { inferredType, ast } = inspectValue(value), { type } = inferredType, short, compact, full;
  switch (type) {
    case "Identifier":
    case "Literal":
      short = value, compact = value;
      break;
    case "Object": {
      let { depth } = inferredType;
      short = OBJECT_CAPTION, compact = depth === 1 ? prettyObject(ast, true) : null, full = prettyObject(ast);
      break;
    }
    case "Element": {
      let { identifier } = inferredType;
      short = identifier != null && !isHtmlTag(identifier) ? identifier : ELEMENT_CAPTION, compact = splitIntoLines(value).length === 1 ? value : null, full = value;
      break;
    }
    case "Array": {
      let { depth } = inferredType;
      short = ARRAY_CAPTION, compact = depth <= 2 ? prettyArray(ast, true) : null, full = prettyArray(ast);
      break;
    }
    default:
      short = getCaptionForInspectionType(type), compact = splitIntoLines(value).length === 1 ? value : null, full = value;
      break;
  }
  return createTypeDef({ name: originalTypeName, short, compact, full, inferredType: type });
}
function generateCustom({ raw }) {
  return raw != null ? generateTypeFromString(raw, "custom") : createTypeDef({ name: "custom", short: CUSTOM_CAPTION, compact: CUSTOM_CAPTION });
}
function generateFunc(extractedProp) {
  let { jsDocTags } = extractedProp;
  return jsDocTags != null && (jsDocTags.params != null || jsDocTags.returns != null) ? createTypeDef({ name: "func", short: generateShortFuncSignature(jsDocTags.params, jsDocTags.returns), compact: null, full: generateFuncSignature(jsDocTags.params, jsDocTags.returns) }) : createTypeDef({ name: "func", short: FUNCTION_CAPTION, compact: FUNCTION_CAPTION });
}
function generateShape(type, extractedProp) {
  let fields = Object.keys(type.value).map((key) => `${key}: ${generateType(type.value[key], extractedProp).full}`).join(", "), { inferredType, ast } = inspectValue(`{ ${fields} }`), { depth } = inferredType;
  return createTypeDef({ name: "shape", short: OBJECT_CAPTION, compact: depth === 1 && ast ? prettyObject(ast, true) : null, full: ast ? prettyObject(ast) : null });
}
function objectOf(of) {
  return `objectOf(${of})`;
}
function generateObjectOf(type, extractedProp) {
  let { short, compact, full } = generateType(type.value, extractedProp);
  return createTypeDef({ name: "objectOf", short: objectOf(short), compact: compact != null ? objectOf(compact) : null, full: full && objectOf(full) });
}
function generateUnion(type, extractedProp) {
  if (Array.isArray(type.value)) {
    let values = type.value.reduce((acc, v2) => {
      let { short, compact, full } = generateType(v2, extractedProp);
      return acc.short.push(short), acc.compact.push(compact), acc.full.push(full), acc;
    }, { short: [], compact: [], full: [] });
    return createTypeDef({ name: "union", short: values.short.join(" | "), compact: values.compact.every((x) => x != null) ? values.compact.join(" | ") : null, full: values.full.join(" | ") });
  }
  return createTypeDef({ name: "union", short: type.value, compact: null });
}
function generateEnumValue({ value, computed }) {
  return computed ? generateTypeFromString(value, "enumvalue") : createTypeDef({ name: "enumvalue", short: value, compact: value });
}
function generateEnum(type) {
  if (Array.isArray(type.value)) {
    let values = type.value.reduce((acc, v2) => {
      let { short, compact, full } = generateEnumValue(v2);
      return acc.short.push(short), acc.compact.push(compact), acc.full.push(full), acc;
    }, { short: [], compact: [], full: [] });
    return createTypeDef({ name: "enum", short: values.short.join(" | "), compact: values.compact.every((x) => x != null) ? values.compact.join(" | ") : null, full: values.full.join(" | ") });
  }
  return createTypeDef({ name: "enum", short: type.value, compact: type.value });
}
function braceAfter(of) {
  return `${of}[]`;
}
function braceAround(of) {
  return `[${of}]`;
}
function createArrayOfObjectTypeDef(short, compact, full) {
  return createTypeDef({ name: "arrayOf", short: braceAfter(short), compact: compact != null ? braceAround(compact) : null, full: full && braceAround(full) });
}
function generateArray(type, extractedProp) {
  let { name: name2, short, compact, full, inferredType } = generateType(type.value, extractedProp);
  if (name2 === "custom") {
    if (inferredType === "Object") return createArrayOfObjectTypeDef(short, compact, full);
  } else if (name2 === "shape") return createArrayOfObjectTypeDef(short, compact, full);
  return createTypeDef({ name: "arrayOf", short: braceAfter(short), compact: braceAfter(short) });
}
function generateType(type, extractedProp) {
  try {
    switch (type.name) {
      case "custom":
        return generateCustom(type);
      case "func":
        return generateFunc(extractedProp);
      case "shape":
        return generateShape(type, extractedProp);
      case "instanceOf":
        return createTypeDef({ name: "instanceOf", short: type.value, compact: type.value });
      case "objectOf":
        return generateObjectOf(type, extractedProp);
      case "union":
        return generateUnion(type, extractedProp);
      case "enum":
        return generateEnum(type);
      case "arrayOf":
        return generateArray(type, extractedProp);
      default:
        return createTypeDef({ name: type.name, short: type.name, compact: type.name });
    }
  } catch (e2) {
    console.error(e2);
  }
  return createTypeDef({ name: "unknown", short: "unknown", compact: "unknown" });
}
function createType(extractedProp) {
  let { type } = extractedProp.docgenInfo;
  if (type == null) return null;
  try {
    switch (type.name) {
      case "custom":
      case "shape":
      case "instanceOf":
      case "objectOf":
      case "union":
      case "enum":
      case "arrayOf": {
        let { short, compact, full } = generateType(type, extractedProp);
        return compact != null && !isTooLongForTypeSummary(compact) ? createSummaryValue(compact) : full ? createSummaryValue(short, full) : createSummaryValue(short);
      }
      case "func": {
        let { short, full } = generateType(type, extractedProp), summary = short, detail;
        return full && full.length < MAX_FUNC_LENGTH ? summary = full : full && (detail = toMultilineSignature(full)), createSummaryValue(summary, detail);
      }
      default:
        return null;
    }
  } catch (e2) {
    console.error(e2);
  }
  return null;
}
function generateObject({ inferredType, ast }) {
  let { depth } = inferredType;
  if (depth === 1) {
    let compactObject = generateObjectCode(ast, true);
    if (!isTooLongForDefaultValueSummary(compactObject)) return createSummaryValue(compactObject);
  }
  return createSummaryValue(OBJECT_CAPTION, generateObjectCode(ast));
}
function generateArray2({ inferredType, ast }) {
  let { depth } = inferredType;
  if (depth <= 2) {
    let compactArray = generateArrayCode(ast, true);
    if (!isTooLongForDefaultValueSummary(compactArray)) return createSummaryValue(compactArray);
  }
  return createSummaryValue(ARRAY_CAPTION, generateArrayCode(ast));
}
function getPrettyFuncIdentifier(identifier, hasArguments) {
  return hasArguments ? `${identifier}( ... )` : `${identifier}()`;
}
function getPrettyElementIdentifier(identifier) {
  return `<${identifier} />`;
}
function getPrettyIdentifier(inferredType) {
  let { type, identifier } = inferredType;
  switch (type) {
    case "Function":
      return getPrettyFuncIdentifier(identifier, inferredType.hasParams);
    case "Element":
      return getPrettyElementIdentifier(identifier);
    default:
      return identifier;
  }
}
function generateFunc2({ inferredType, ast }) {
  let { identifier } = inferredType;
  if (identifier != null) return createSummaryValue(getPrettyIdentifier(inferredType), generateCode(ast));
  let prettyCaption = generateCode(ast, true);
  return isTooLongForDefaultValueSummary(prettyCaption) ? createSummaryValue(FUNCTION_CAPTION, generateCode(ast)) : createSummaryValue(prettyCaption);
}
function generateElement(defaultValue, inspectionResult) {
  let { inferredType } = inspectionResult, { identifier } = inferredType;
  if (identifier != null && !isHtmlTag(identifier)) {
    let prettyIdentifier = getPrettyIdentifier(inferredType);
    return createSummaryValue(prettyIdentifier, defaultValue);
  }
  return isTooLongForDefaultValueSummary(defaultValue) ? createSummaryValue(ELEMENT_CAPTION, defaultValue) : createSummaryValue(defaultValue);
}
function createDefaultValue(defaultValue) {
  try {
    let inspectionResult = inspectValue(defaultValue);
    switch (inspectionResult.inferredType.type) {
      case "Object":
        return generateObject(inspectionResult);
      case "Function":
        return generateFunc2(inspectionResult);
      case "Element":
        return generateElement(defaultValue, inspectionResult);
      case "Array":
        return generateArray2(inspectionResult);
      default:
        return null;
    }
  } catch (e2) {
    console.error(e2);
  }
  return null;
}
function isReactElement(element) {
  return element.$$typeof != null;
}
function extractFunctionName(func, propName) {
  let { name: name2 } = func;
  return name2 !== "" && name2 !== "anonymous" && name2 !== propName ? name2 : null;
}
var stringResolver = (rawDefaultProp) => createSummaryValue(JSON.stringify(rawDefaultProp));
function generateReactObject(rawDefaultProp) {
  let { type } = rawDefaultProp, { displayName } = type, jsx2 = reactElementToJsxString(rawDefaultProp, {});
  if (displayName != null) {
    let prettyIdentifier = getPrettyElementIdentifier(displayName);
    return createSummaryValue(prettyIdentifier, jsx2);
  }
  if (isString$1(type) && isHtmlTag(type)) {
    let jsxSummary = reactElementToJsxString(rawDefaultProp, { tabStop: 0 }).replace(/\r?\n|\r/g, "");
    if (!isTooLongForDefaultValueSummary(jsxSummary)) return createSummaryValue(jsxSummary);
  }
  return createSummaryValue(ELEMENT_CAPTION, jsx2);
}
var objectResolver = (rawDefaultProp) => {
  if (isReactElement(rawDefaultProp) && rawDefaultProp.type != null) return generateReactObject(rawDefaultProp);
  if (isPlainObject$2(rawDefaultProp)) {
    let inspectionResult = inspectValue(JSON.stringify(rawDefaultProp));
    return generateObject(inspectionResult);
  }
  if (Array.isArray(rawDefaultProp)) {
    let inspectionResult = inspectValue(JSON.stringify(rawDefaultProp));
    return generateArray2(inspectionResult);
  }
  return createSummaryValue(OBJECT_CAPTION);
}, functionResolver = (rawDefaultProp, propDef) => {
  let isElement = false, inspectionResult;
  if (isFunction(rawDefaultProp.render)) isElement = true;
  else if (rawDefaultProp.prototype != null && isFunction(rawDefaultProp.prototype.render)) isElement = true;
  else {
    let innerElement;
    try {
      inspectionResult = inspectValue(rawDefaultProp.toString());
      let { hasParams, params } = inspectionResult.inferredType;
      hasParams ? params.length === 1 && params[0].type === "ObjectPattern" && (innerElement = rawDefaultProp({})) : innerElement = rawDefaultProp(), innerElement != null && isReactElement(innerElement) && (isElement = true);
    } catch {
    }
  }
  let funcName = extractFunctionName(rawDefaultProp, propDef.name);
  if (funcName != null) {
    if (isElement) return createSummaryValue(getPrettyElementIdentifier(funcName));
    inspectionResult != null && (inspectionResult = inspectValue(rawDefaultProp.toString()));
    let { hasParams } = inspectionResult.inferredType;
    return createSummaryValue(getPrettyFuncIdentifier(funcName, hasParams));
  }
  return createSummaryValue(isElement ? ELEMENT_CAPTION : FUNCTION_CAPTION);
}, defaultResolver = (rawDefaultProp) => createSummaryValue(rawDefaultProp.toString()), DEFAULT_TYPE_RESOLVERS = { string: stringResolver, object: objectResolver, function: functionResolver, default: defaultResolver };
function createTypeResolvers(customResolvers = {}) {
  return { ...DEFAULT_TYPE_RESOLVERS, ...customResolvers };
}
function createDefaultValueFromRawDefaultProp(rawDefaultProp, propDef, typeResolvers = DEFAULT_TYPE_RESOLVERS) {
  try {
    switch (typeof rawDefaultProp) {
      case "string":
        return typeResolvers.string(rawDefaultProp, propDef);
      case "object":
        return typeResolvers.object(rawDefaultProp, propDef);
      case "function":
        return typeResolvers.function(rawDefaultProp, propDef);
      default:
        return typeResolvers.default(rawDefaultProp, propDef);
    }
  } catch (e2) {
    console.error(e2);
  }
  return null;
}
function keepOriginalDefinitionOrder(extractedProps, component) {
  let { propTypes } = component;
  return propTypes != null ? Object.keys(propTypes).map((x) => extractedProps.find((y) => y.name === x)).filter(Boolean) : extractedProps;
}
var funcResolver = (rawDefaultProp, { name: name2, type }) => {
  let isElement = (type == null ? void 0 : type.summary) === "element" || (type == null ? void 0 : type.summary) === "elementType", funcName = extractFunctionName(rawDefaultProp, name2);
  if (funcName != null) {
    if (isElement) return createSummaryValue(getPrettyElementIdentifier(funcName));
    let { hasParams } = inspectValue(rawDefaultProp.toString()).inferredType;
    return createSummaryValue(getPrettyFuncIdentifier(funcName, hasParams));
  }
  return createSummaryValue(isElement ? ELEMENT_CAPTION : FUNCTION_CAPTION);
}, rawDefaultPropTypeResolvers = createTypeResolvers({ function: funcResolver });
function enhancePropTypesProp(extractedProp, rawDefaultProp) {
  let { propDef } = extractedProp, newtype = createType(extractedProp);
  newtype != null && (propDef.type = newtype);
  let { defaultValue } = extractedProp.docgenInfo;
  if (defaultValue != null && defaultValue.value != null) {
    let newDefaultValue = createDefaultValue(defaultValue.value);
    newDefaultValue != null && (propDef.defaultValue = newDefaultValue);
  } else if (rawDefaultProp != null) {
    let newDefaultValue = createDefaultValueFromRawDefaultProp(rawDefaultProp, propDef, rawDefaultPropTypeResolvers);
    newDefaultValue != null && (propDef.defaultValue = newDefaultValue);
  }
  return propDef;
}
function enhancePropTypesProps(extractedProps, component) {
  let rawDefaultProps = component.defaultProps != null ? component.defaultProps : {}, enhancedProps = extractedProps.map((x) => enhancePropTypesProp(x, rawDefaultProps[x.propDef.name]));
  return keepOriginalDefinitionOrder(enhancedProps, component);
}
function enhanceTypeScriptProp(extractedProp, rawDefaultProp) {
  let { propDef } = extractedProp, { defaultValue } = extractedProp.docgenInfo;
  if (defaultValue != null && defaultValue.value != null) {
    let newDefaultValue = createDefaultValue(defaultValue.value);
    newDefaultValue != null && (propDef.defaultValue = newDefaultValue);
  }
  return propDef;
}
function enhanceTypeScriptProps(extractedProps) {
  return extractedProps.map((prop) => enhanceTypeScriptProp(prop));
}
var propTypesMap = /* @__PURE__ */ new Map();
Object.keys(PropTypes).forEach((typeName) => {
  let type = PropTypes[typeName];
  propTypesMap.set(type, typeName), propTypesMap.set(type.isRequired, typeName);
});
function getPropDefs(component, section) {
  let processedComponent = component;
  !hasDocgen(component) && !component.propTypes && isMemo(component) && (processedComponent = component.type);
  let extractedProps = extractComponentProps(processedComponent, section);
  if (extractedProps.length === 0) return [];
  switch (extractedProps[0].typeSystem) {
    case TypeSystem.JAVASCRIPT:
      return enhancePropTypesProps(extractedProps, component);
    case TypeSystem.TYPESCRIPT:
      return enhanceTypeScriptProps(extractedProps);
    default:
      return extractedProps.map((x) => x.propDef);
  }
}
var extractProps = (component) => ({ rows: getPropDefs(component, "props") });
var extractArgTypes = (component) => {
  if (component) {
    let { rows } = extractProps(component);
    if (rows) return rows.reduce((acc, row) => {
      let { name: name2, description: description2, type, sbType, defaultValue: defaultSummary, jsDocTags, required } = row;
      return acc[name2] = { name: name2, description: description2, type: { required, ...sbType }, table: { type: type ?? void 0, jsDocTags, defaultValue: defaultSummary ?? void 0 } }, acc;
    }, {});
  }
  return null;
};
var toPascalCase = (str) => str.charAt(0).toUpperCase() + str.slice(1), getReactSymbolName = (elementType) => (elementType.$$typeof || elementType).toString().replace(/^Symbol\((.*)\)$/, "$1").split(".").map((segment) => segment.split("_").map(toPascalCase).join("")).join(".");
function simplifyNodeForStringify(node) {
  if (reactExports.isValidElement(node)) {
    let props = Object.keys(node.props).reduce((acc, cur) => (acc[cur] = simplifyNodeForStringify(node.props[cur]), acc), {});
    return { ...node, props, _owner: null };
  }
  return Array.isArray(node) ? node.map(simplifyNodeForStringify) : node;
}
var renderJsx = (code, options) => {
  if (typeof code > "u") return logger.warn("Too many skip or undefined component"), null;
  let renderedJSX = code, Type = renderedJSX.type;
  for (let i = 0; i < (options == null ? void 0 : options.skip); i += 1) {
    if (typeof renderedJSX > "u") return logger.warn("Cannot skip undefined element"), null;
    if (React.Children.count(renderedJSX) > 1) return logger.warn("Trying to skip an array of elements"), null;
    typeof renderedJSX.props.children > "u" ? (logger.warn("Not enough children to skip elements."), typeof renderedJSX.type == "function" && renderedJSX.type.name === "" && (renderedJSX = React.createElement(Type, { ...renderedJSX.props }))) : typeof renderedJSX.props.children == "function" ? renderedJSX = renderedJSX.props.children() : renderedJSX = renderedJSX.props.children;
  }
  let displayNameDefaults;
  typeof (options == null ? void 0 : options.displayName) == "string" ? displayNameDefaults = { showFunctions: true, displayName: () => options.displayName } : displayNameDefaults = { displayName: (el) => {
    var _a;
    return el.type.displayName ? el.type.displayName : getDocgenSection(el.type, "displayName") ? getDocgenSection(el.type, "displayName") : ((_a = el.type.render) == null ? void 0 : _a.displayName) ? el.type.render.displayName : typeof el.type == "symbol" || el.type.$$typeof && typeof el.type.$$typeof == "symbol" ? getReactSymbolName(el.type) : el.type.name && el.type.name !== "_default" ? el.type.name : typeof el.type == "function" ? "No Display Name" : isForwardRef(el.type) ? el.type.render.name : isMemo(el.type) ? el.type.type.name : el.type;
  } };
  let opts = { ...displayNameDefaults, ...{ filterProps: (value, key) => value !== void 0 }, ...options };
  return React.Children.map(code, (c2) => {
    let child = typeof c2 == "number" ? c2.toString() : c2, string = (typeof reactElementToJsxString == "function" ? reactElementToJsxString : reactElementToJsxString.default)(simplifyNodeForStringify(child), opts);
    if (string.indexOf("&quot;") > -1) {
      let matches = string.match(/\S+=\\"([^"]*)\\"/g);
      matches && matches.forEach((match) => {
        string = string.replace(match, match.replace(/&quot;/g, "'"));
      });
    }
    return string;
  }).join(`
`).replace(/function\s+noRefCheck\(\)\s*\{\}/g, "() => {}");
}, defaultOpts = { skip: 0, showFunctions: false, enableBeautify: true, showDefaultProps: false }, skipJsxRender = (context) => {
  var _a;
  let sourceParams = (_a = context == null ? void 0 : context.parameters.docs) == null ? void 0 : _a.source, isArgsStory = context == null ? void 0 : context.parameters.__isArgsStory;
  return (sourceParams == null ? void 0 : sourceParams.type) === SourceType.DYNAMIC ? false : !isArgsStory || (sourceParams == null ? void 0 : sourceParams.code) || (sourceParams == null ? void 0 : sourceParams.type) === SourceType.CODE;
}, isMdx = (node) => {
  var _a, _b;
  return ((_a = node.type) == null ? void 0 : _a.displayName) === "MDXCreateElement" && !!((_b = node.props) == null ? void 0 : _b.mdxType);
}, mdxToJsx = (node) => {
  if (!isMdx(node)) return node;
  let { mdxType, originalType, children, ...rest } = node.props, jsxChildren = [];
  return children && (jsxChildren = (Array.isArray(children) ? children : [children]).map(mdxToJsx)), reactExports.createElement(originalType, rest, ...jsxChildren);
}, jsxDecorator = (storyFn, context) => {
  var _a, _b;
  let channel = addons.getChannel(), skip = skipJsxRender(context), jsx2 = "";
  useEffect(() => {
    if (!skip) {
      let { id, unmappedArgs } = context;
      channel.emit(SNIPPET_RENDERED, { id, source: jsx2, args: unmappedArgs });
    }
  });
  let story = storyFn();
  if (skip) return story;
  let options = { ...defaultOpts, ...(context == null ? void 0 : context.parameters.jsx) || {} }, storyJsx = ((_b = (_a = context == null ? void 0 : context.parameters.docs) == null ? void 0 : _a.source) == null ? void 0 : _b.excludeDecorators) ? context.originalStoryFn(context.args, context) : story, sourceJsx = mdxToJsx(storyJsx), rendered = renderJsx(sourceJsx, options);
  return rendered && (jsx2 = rendered), story;
};
var applyDecorators = (storyFn, decorators2) => {
  let jsxIndex = decorators2.findIndex((d2) => d2.originalFn === jsxDecorator), reorderedDecorators = jsxIndex === -1 ? decorators2 : [...decorators2.splice(jsxIndex, 1), ...decorators2];
  return defaultDecorateStory(storyFn, reorderedDecorators);
};
var parameters = { docs: { story: { inline: true }, extractArgTypes, extractComponentDescription } }, decorators = [jsxDecorator], argTypesEnhancers = [enhanceArgTypes];
export {
  applyDecorators,
  argTypesEnhancers,
  decorators,
  parameters
};
