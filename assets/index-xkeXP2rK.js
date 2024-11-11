const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./syntaxhighlighter-BP7B2CQK-Cy83ZDxB.js","./iframe-D6ES2N_w.js","./index-C-_iGYWo.js","./_commonjsHelpers-CcAunmGO.js","./index-CClgydmT.js","./index-ClxGM1EF.js","./jsx-runtime-BRc-Ic4i.js","./index-DLlB04eo.js","./inheritsLoose-DBHupcN5.js","./index-CX88d7aO.js","./index-BdOSk9or.js","./formatter-2WMMO6ZP-CF6PmrPV.js","./WithTooltip-KJL26V4Q-DlGiYQlO.js","./Color-PRSJMWNM-BGbUnyMs.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./iframe-D6ES2N_w.js";
import { r as reactExports, R as React, a as React$1 } from "./index-C-_iGYWo.js";
import { n as newStyled, m as memoize$1, l as lightenColor, i as isPropValid, k as keyframes, a as ignoreSsrWarning, b as color, t as typography, u as useTheme, d as themes, T as ThemeProvider, e as convert, f as ensure } from "./index-CClgydmT.js";
import { r as reactDomExports, R as ReactDOM } from "./index-ClxGM1EF.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-BRc-Ic4i.js";
import { O as O$1, P as P$2 } from "./index-DLlB04eo.js";
import { a as _setPrototypeOf$1, _ as _inheritsLoose$1 } from "./inheritsLoose-DBHupcN5.js";
import { g as getDefaultExportFromCjs } from "./_commonjsHelpers-CcAunmGO.js";
import { q as _baseAssignValue, r as eq_1, s as _castPath, t as _isIndex, i as isObject_1, v as _toKey, w as _baseGet, x as _arrayPush, c as _getPrototype, y as _getSymbols, z as stubArray_1, A as _isPrototype, B as _arrayLikeKeys, C as isArrayLike_1, D as _baseGetAllKeys, E as _arrayMap, F as _baseIteratee, G as _Set, H as _setToArray, I as _SetCache, J as _cacheHas, K as keys_1, _ as _root, L as _Uint8Array, M as _Symbol, N as _getTag, d as isObjectLike_1, O as _nodeUtilExports, P as _baseUnary, Q as _Stack, R as isBufferExports, U as _getAllKeys, e as isArray_1, j as SourceType, S as SNIPPET_RENDERED } from "./index-CX88d7aO.js";
import { d as dedent } from "./index-BdOSk9or.js";
function _extends$1() {
  return _extends$1 = Object.assign ? Object.assign.bind() : function(n2) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var t = arguments[e2];
      for (var r2 in t) ({}).hasOwnProperty.call(t, r2) && (n2[r2] = t[r2]);
    }
    return n2;
  }, _extends$1.apply(null, arguments);
}
function _assertThisInitialized$1(e2) {
  if (void 0 === e2) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e2;
}
var getControlId = (value2) => `control-${value2.replace(/\s+/g, "-")}`, getControlSetterButtonId = (value2) => `set-${value2.replace(/\s+/g, "-")}`;
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
    }
    return target;
  }, _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {}, sourceKeys = Object.keys(source), key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) key = sourceKeys[i2], !(excluded.indexOf(key) >= 0) && (target[key] = source[key]);
  return target;
}
var __create$1 = Object.create;
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames$1 = Object.getOwnPropertyNames;
var __getProtoOf$1 = Object.getPrototypeOf, __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __commonJS$1 = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames$1(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all) __defProp$1(target, name, { get: all[name], enumerable: true });
}, __copyProps$1 = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function") for (let key of __getOwnPropNames$1(from)) !__hasOwnProp$1.call(to, key) && key !== except && __defProp$1(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc$1(from, key)) || desc.enumerable });
  return to;
};
var __toESM$1 = (mod, isNodeMode, target) => (target = mod != null ? __create$1(__getProtoOf$1(mod)) : {}, __copyProps$1(!mod || !mod.__esModule ? __defProp$1(target, "default", { value: mod, enumerable: true }) : target, mod));
var require_markdown = __commonJS$1({ "../../node_modules/refractor/lang/markdown.js"(exports, module) {
  module.exports = markdown;
  markdown.displayName = "markdown";
  markdown.aliases = ["md"];
  function markdown(Prism) {
    (function(Prism2) {
      var inner = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
      function createInline(pattern) {
        return pattern = pattern.replace(/<inner>/g, function() {
          return inner;
        }), RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + pattern + ")");
      }
      var tableCell = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source, tableRow = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function() {
        return tableCell;
      }), tableLine = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
      Prism2.languages.markdown = Prism2.languages.extend("markup", {}), Prism2.languages.insertBefore("markdown", "prolog", { "front-matter-block": { pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/, lookbehind: true, greedy: true, inside: { punctuation: /^---|---$/, "front-matter": { pattern: /\S+(?:\s+\S+)*/, alias: ["yaml", "language-yaml"], inside: Prism2.languages.yaml } } }, blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: "punctuation" }, table: { pattern: RegExp("^" + tableRow + tableLine + "(?:" + tableRow + ")*", "m"), inside: { "table-data-rows": { pattern: RegExp("^(" + tableRow + tableLine + ")(?:" + tableRow + ")*$"), lookbehind: true, inside: { "table-data": { pattern: RegExp(tableCell), inside: Prism2.languages.markdown }, punctuation: /\|/ } }, "table-line": { pattern: RegExp("^(" + tableRow + ")" + tableLine + "$"), lookbehind: true, inside: { punctuation: /\||:?-{3,}:?/ } }, "table-header-row": { pattern: RegExp("^" + tableRow + "$"), inside: { "table-header": { pattern: RegExp(tableCell), alias: "important", inside: Prism2.languages.markdown }, punctuation: /\|/ } } } }, code: [{ pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/, lookbehind: true, alias: "keyword" }, { pattern: /^```[\s\S]*?^```$/m, greedy: true, inside: { "code-block": { pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m, lookbehind: true }, "code-language": { pattern: /^(```).+/, lookbehind: true }, punctuation: /```/ } }], title: [{ pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m, alias: "important", inside: { punctuation: /==+$|--+$/ } }, { pattern: /(^\s*)#.+/m, lookbehind: true, alias: "important", inside: { punctuation: /^#+|#+$/ } }], hr: { pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m, lookbehind: true, alias: "punctuation" }, list: { pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m, lookbehind: true, alias: "punctuation" }, "url-reference": { pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/, inside: { variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: true }, string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/, punctuation: /^[\[\]!:]|[<>]/ }, alias: "url" }, bold: { pattern: createInline(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source), lookbehind: true, greedy: true, inside: { content: { pattern: /(^..)[\s\S]+(?=..$)/, lookbehind: true, inside: {} }, punctuation: /\*\*|__/ } }, italic: { pattern: createInline(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source), lookbehind: true, greedy: true, inside: { content: { pattern: /(^.)[\s\S]+(?=.$)/, lookbehind: true, inside: {} }, punctuation: /[*_]/ } }, strike: { pattern: createInline(/(~~?)(?:(?!~)<inner>)+\2/.source), lookbehind: true, greedy: true, inside: { content: { pattern: /(^~~?)[\s\S]+(?=\1$)/, lookbehind: true, inside: {} }, punctuation: /~~?/ } }, "code-snippet": { pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/, lookbehind: true, greedy: true, alias: ["code", "keyword"] }, url: { pattern: createInline(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source), lookbehind: true, greedy: true, inside: { operator: /^!/, content: { pattern: /(^\[)[^\]]+(?=\])/, lookbehind: true, inside: {} }, variable: { pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/, lookbehind: true }, url: { pattern: /(^\]\()[^\s)]+/, lookbehind: true }, string: { pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/, lookbehind: true } } } }), ["url", "bold", "italic", "strike"].forEach(function(token) {
        ["url", "bold", "italic", "strike", "code-snippet"].forEach(function(inside) {
          token !== inside && (Prism2.languages.markdown[token].inside.content.inside[inside] = Prism2.languages.markdown[inside]);
        });
      }), Prism2.hooks.add("after-tokenize", function(env) {
        if (env.language !== "markdown" && env.language !== "md") return;
        function walkTokens(tokens) {
          if (!(!tokens || typeof tokens == "string")) for (var i2 = 0, l2 = tokens.length; i2 < l2; i2++) {
            var token = tokens[i2];
            if (token.type !== "code") {
              walkTokens(token.content);
              continue;
            }
            var codeLang = token.content[1], codeBlock = token.content[3];
            if (codeLang && codeBlock && codeLang.type === "code-language" && codeBlock.type === "code-block" && typeof codeLang.content == "string") {
              var lang = codeLang.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp");
              lang = (/[a-z][\w-]*/i.exec(lang) || [""])[0].toLowerCase();
              var alias = "language-" + lang;
              codeBlock.alias ? typeof codeBlock.alias == "string" ? codeBlock.alias = [codeBlock.alias, alias] : codeBlock.alias.push(alias) : codeBlock.alias = [alias];
            }
          }
        }
        walkTokens(env.tokens);
      }), Prism2.hooks.add("wrap", function(env) {
        if (env.type === "code-block") {
          for (var codeLang = "", i2 = 0, l2 = env.classes.length; i2 < l2; i2++) {
            var cls = env.classes[i2], match2 = /language-(.+)/.exec(cls);
            if (match2) {
              codeLang = match2[1];
              break;
            }
          }
          var grammar = Prism2.languages[codeLang];
          if (grammar) env.content = Prism2.highlight(textContent(env.content.value), grammar, codeLang);
          else if (codeLang && codeLang !== "none" && Prism2.plugins.autoloader) {
            var id = "md-" + (/* @__PURE__ */ new Date()).valueOf() + "-" + Math.floor(Math.random() * 1e16);
            env.attributes.id = id, Prism2.plugins.autoloader.loadLanguages(codeLang, function() {
              var ele = document.getElementById(id);
              ele && (ele.innerHTML = Prism2.highlight(ele.textContent, Prism2.languages[codeLang], codeLang));
            });
          }
        }
      });
      var tagPattern = RegExp(Prism2.languages.markup.tag.pattern.source, "gi"), KNOWN_ENTITY_NAMES = { amp: "&", lt: "<", gt: ">", quot: '"' }, fromCodePoint = String.fromCodePoint || String.fromCharCode;
      function textContent(html) {
        var text = html.replace(tagPattern, "");
        return text = text.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(m2, code) {
          if (code = code.toLowerCase(), code[0] === "#") {
            var value2;
            return code[1] === "x" ? value2 = parseInt(code.slice(2), 16) : value2 = Number(code.slice(1)), fromCodePoint(value2);
          } else {
            var known = KNOWN_ENTITY_NAMES[code];
            return known || m2;
          }
        }), text;
      }
      Prism2.languages.md = Prism2.languages.markdown;
    })(Prism);
  }
} });
var require_yaml = __commonJS$1({ "../../node_modules/refractor/lang/yaml.js"(exports, module) {
  module.exports = yaml;
  yaml.displayName = "yaml";
  yaml.aliases = ["yml"];
  function yaml(Prism) {
    (function(Prism2) {
      var anchorOrAlias = /[*&][^\s[\]{},]+/, tag = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/, properties = "(?:" + tag.source + "(?:[ 	]+" + anchorOrAlias.source + ")?|" + anchorOrAlias.source + "(?:[ 	]+" + tag.source + ")?)", plainKey = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function() {
        return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
      }), string = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
      function createValuePattern(value2, flags) {
        flags = (flags || "").replace(/m/g, "") + "m";
        var pattern = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function() {
          return properties;
        }).replace(/<<value>>/g, function() {
          return value2;
        });
        return RegExp(pattern, flags);
      }
      Prism2.languages.yaml = { scalar: { pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function() {
        return properties;
      })), lookbehind: true, alias: "string" }, comment: /#.*/, key: { pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function() {
        return properties;
      }).replace(/<<key>>/g, function() {
        return "(?:" + plainKey + "|" + string + ")";
      })), lookbehind: true, greedy: true, alias: "atrule" }, directive: { pattern: /(^[ \t]*)%.+/m, lookbehind: true, alias: "important" }, datetime: { pattern: createValuePattern(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source), lookbehind: true, alias: "number" }, boolean: { pattern: createValuePattern(/false|true/.source, "i"), lookbehind: true, alias: "important" }, null: { pattern: createValuePattern(/null|~/.source, "i"), lookbehind: true, alias: "important" }, string: { pattern: createValuePattern(string), lookbehind: true, greedy: true }, number: { pattern: createValuePattern(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, "i"), lookbehind: true }, tag, important: anchorOrAlias, punctuation: /---|[:[\]{}\-,|>?]|\.\.\./ }, Prism2.languages.yml = Prism2.languages.yaml;
    })(Prism);
  }
} });
var require_typescript = __commonJS$1({ "../../node_modules/refractor/lang/typescript.js"(exports, module) {
  module.exports = typescript;
  typescript.displayName = "typescript";
  typescript.aliases = ["ts"];
  function typescript(Prism) {
    (function(Prism2) {
      Prism2.languages.typescript = Prism2.languages.extend("javascript", { "class-name": { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/, lookbehind: true, greedy: true, inside: null }, builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/ }), Prism2.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/), delete Prism2.languages.typescript.parameter, delete Prism2.languages.typescript["literal-property"];
      var typeInside = Prism2.languages.extend("typescript", {});
      delete typeInside["class-name"], Prism2.languages.typescript["class-name"].inside = typeInside, Prism2.languages.insertBefore("typescript", "function", { decorator: { pattern: /@[$\w\xA0-\uFFFF]+/, inside: { at: { pattern: /^@/, alias: "operator" }, function: /^[\s\S]+/ } }, "generic-function": { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/, greedy: true, inside: { function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/, generic: { pattern: /<[\s\S]+/, alias: "class-name", inside: typeInside } } } }), Prism2.languages.ts = Prism2.languages.typescript;
    })(Prism);
  }
} });
var require_jsx = __commonJS$1({ "../../node_modules/refractor/lang/jsx.js"(exports, module) {
  module.exports = jsx;
  jsx.displayName = "jsx";
  jsx.aliases = [];
  function jsx(Prism) {
    (function(Prism2) {
      var javascript = Prism2.util.clone(Prism2.languages.javascript), space = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source, braces = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source, spread = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
      function re(source, flags) {
        return source = source.replace(/<S>/g, function() {
          return space;
        }).replace(/<BRACES>/g, function() {
          return braces;
        }).replace(/<SPREAD>/g, function() {
          return spread;
        }), RegExp(source, flags);
      }
      spread = re(spread).source, Prism2.languages.jsx = Prism2.languages.extend("markup", javascript), Prism2.languages.jsx.tag.pattern = re(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source), Prism2.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/, Prism2.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/, Prism2.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, Prism2.languages.jsx.tag.inside.comment = javascript.comment, Prism2.languages.insertBefore("inside", "attr-name", { spread: { pattern: re(/<SPREAD>/.source), inside: Prism2.languages.jsx } }, Prism2.languages.jsx.tag), Prism2.languages.insertBefore("inside", "special-attr", { script: { pattern: re(/=<BRACES>/.source), alias: "language-javascript", inside: { "script-punctuation": { pattern: /^=(?=\{)/, alias: "punctuation" }, rest: Prism2.languages.jsx } } }, Prism2.languages.jsx.tag);
      var stringifyToken = function(token) {
        return token ? typeof token == "string" ? token : typeof token.content == "string" ? token.content : token.content.map(stringifyToken).join("") : "";
      }, walkTokens = function(tokens) {
        for (var openedTags = [], i2 = 0; i2 < tokens.length; i2++) {
          var token = tokens[i2], notTagNorBrace = false;
          if (typeof token != "string" && (token.type === "tag" && token.content[0] && token.content[0].type === "tag" ? token.content[0].content[0].content === "</" ? openedTags.length > 0 && openedTags[openedTags.length - 1].tagName === stringifyToken(token.content[0].content[1]) && openedTags.pop() : token.content[token.content.length - 1].content === "/>" || openedTags.push({ tagName: stringifyToken(token.content[0].content[1]), openedBraces: 0 }) : openedTags.length > 0 && token.type === "punctuation" && token.content === "{" ? openedTags[openedTags.length - 1].openedBraces++ : openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces > 0 && token.type === "punctuation" && token.content === "}" ? openedTags[openedTags.length - 1].openedBraces-- : notTagNorBrace = true), (notTagNorBrace || typeof token == "string") && openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces === 0) {
            var plainText = stringifyToken(token);
            i2 < tokens.length - 1 && (typeof tokens[i2 + 1] == "string" || tokens[i2 + 1].type === "plain-text") && (plainText += stringifyToken(tokens[i2 + 1]), tokens.splice(i2 + 1, 1)), i2 > 0 && (typeof tokens[i2 - 1] == "string" || tokens[i2 - 1].type === "plain-text") && (plainText = stringifyToken(tokens[i2 - 1]) + plainText, tokens.splice(i2 - 1, 1), i2--), tokens[i2] = new Prism2.Token("plain-text", plainText, null, plainText);
          }
          token.content && typeof token.content != "string" && walkTokens(token.content);
        }
      };
      Prism2.hooks.add("after-tokenize", function(env) {
        env.language !== "jsx" && env.language !== "tsx" || walkTokens(env.tokens);
      });
    })(Prism);
  }
} });
var require_tsx = __commonJS$1({ "../../node_modules/refractor/lang/tsx.js"(exports, module) {
  var refractorJsx = require_jsx(), refractorTypescript = require_typescript();
  module.exports = tsx;
  tsx.displayName = "tsx";
  tsx.aliases = [];
  function tsx(Prism) {
    Prism.register(refractorJsx), Prism.register(refractorTypescript), function(Prism2) {
      var typescript = Prism2.util.clone(Prism2.languages.typescript);
      Prism2.languages.tsx = Prism2.languages.extend("jsx", typescript), delete Prism2.languages.tsx.parameter, delete Prism2.languages.tsx["literal-property"];
      var tag = Prism2.languages.tsx.tag;
      tag.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + "(?:" + tag.pattern.source + ")", tag.pattern.flags), tag.lookbehind = true;
    }(Prism);
  }
} });
var require_clike = __commonJS$1({ "../../node_modules/refractor/lang/clike.js"(exports, module) {
  module.exports = clike;
  clike.displayName = "clike";
  clike.aliases = [];
  function clike(Prism) {
    Prism.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: true, greedy: true }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: true, greedy: true }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: true }, "class-name": { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i, lookbehind: true, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/, boolean: /\b(?:false|true)\b/, function: /\b\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/, punctuation: /[{}[\];(),.:]/ };
  }
} });
var require_javascript = __commonJS$1({ "../../node_modules/refractor/lang/javascript.js"(exports, module) {
  module.exports = javascript;
  javascript.displayName = "javascript";
  javascript.aliases = ["js"];
  function javascript(Prism) {
    Prism.languages.javascript = Prism.languages.extend("clike", { "class-name": [Prism.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/, lookbehind: true }], keyword: [{ pattern: /((?:^|\})\s*)catch\b/, lookbehind: true }, { pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: true }], function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, number: { pattern: RegExp(/(^|[^\w$])/.source + "(?:" + (/NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source), lookbehind: true }, operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/ }), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/, lookbehind: true, greedy: true, inside: { "regex-source": { pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/, lookbehind: true, alias: "language-regex", inside: Prism.languages.regex }, "regex-delimiter": /^\/|\/$/, "regex-flags": /^[a-z]+$/ } }, "function-variable": { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/, lookbehind: true, inside: Prism.languages.javascript }, { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i, lookbehind: true, inside: Prism.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/, lookbehind: true, inside: Prism.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/, lookbehind: true, inside: Prism.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ }), Prism.languages.insertBefore("javascript", "string", { hashbang: { pattern: /^#!.*/, greedy: true, alias: "comment" }, "template-string": { pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/, greedy: true, inside: { "template-punctuation": { pattern: /^`|`$/, alias: "string" }, interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/, lookbehind: true, inside: { "interpolation-punctuation": { pattern: /^\$\{|\}$/, alias: "punctuation" }, rest: Prism.languages.javascript } }, string: /[\s\S]+/ } }, "string-property": { pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m, lookbehind: true, greedy: true, alias: "property" } }), Prism.languages.insertBefore("javascript", "operator", { "literal-property": { pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m, lookbehind: true, alias: "property" } }), Prism.languages.markup && (Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")), Prism.languages.js = Prism.languages.javascript;
  }
} });
var require_css = __commonJS$1({ "../../node_modules/refractor/lang/css.js"(exports, module) {
  module.exports = css;
  css.displayName = "css";
  css.aliases = [];
  function css(Prism) {
    (function(Prism2) {
      var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
      Prism2.languages.css = { comment: /\/\*[\s\S]*?\*\//, atrule: { pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/, inside: { rule: /^@[\w-]+/, "selector-function-argument": { pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/, lookbehind: true, alias: "selector" }, keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: true } } }, url: { pattern: RegExp("\\burl\\((?:" + string.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"), greedy: true, inside: { function: /^url/i, punctuation: /^\(|\)$/, string: { pattern: RegExp("^" + string.source + "$"), alias: "url" } } }, selector: { pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + string.source + ")*(?=\\s*\\{)"), lookbehind: true }, string: { pattern: string, greedy: true }, property: { pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i, lookbehind: true }, important: /!important\b/i, function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: true }, punctuation: /[(){};:,]/ }, Prism2.languages.css.atrule.inside.rest = Prism2.languages.css;
      var markup = Prism2.languages.markup;
      markup && (markup.tag.addInlined("style", "css"), markup.tag.addAttribute("style", "css"));
    })(Prism);
  }
} });
var require_markup = __commonJS$1({ "../../node_modules/refractor/lang/markup.js"(exports, module) {
  module.exports = markup;
  markup.displayName = "markup";
  markup.aliases = ["html", "mathml", "svg", "xml", "ssml", "atom", "rss"];
  function markup(Prism) {
    Prism.languages.markup = { comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: true }, prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: true }, doctype: { pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i, greedy: true, inside: { "internal-subset": { pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/, lookbehind: true, greedy: true, inside: null }, string: { pattern: /"[^"]*"|'[^']*'/, greedy: true }, punctuation: /^<!|>$|[[\]]/, "doctype-tag": /^DOCTYPE/i, name: /[^\s<>'"]+/ } }, cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: true }, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/, greedy: true, inside: { tag: { pattern: /^<\/?[^\s>\/]+/, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "special-attr": [], "attr-value": { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/, inside: { punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: [{ pattern: /&[\da-z]{1,8};/i, alias: "named-entity" }, /&#x?[\da-f]{1,8};/i] }, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup, Prism.hooks.add("wrap", function(env) {
      env.type === "entity" && (env.attributes.title = env.content.value.replace(/&amp;/, "&"));
    }), Object.defineProperty(Prism.languages.markup.tag, "addInlined", { value: function(tagName, lang) {
      var includedCdataInside = {};
      includedCdataInside["language-" + lang] = { pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: true, inside: Prism.languages[lang] }, includedCdataInside.cdata = /^<!\[CDATA\[|\]\]>$/i;
      var inside = { "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: includedCdataInside } };
      inside["language-" + lang] = { pattern: /[\s\S]+/, inside: Prism.languages[lang] };
      var def = {};
      def[tagName] = { pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
        return tagName;
      }), "i"), lookbehind: true, greedy: true, inside }, Prism.languages.insertBefore("markup", "cdata", def);
    } }), Object.defineProperty(Prism.languages.markup.tag, "addAttribute", { value: function(attrName, lang) {
      Prism.languages.markup.tag.inside["special-attr"].push({ pattern: RegExp(/(^|["'\s])/.source + "(?:" + attrName + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"), lookbehind: true, inside: { "attr-name": /^[^\s=]+/, "attr-value": { pattern: /=[\s\S]+/, inside: { value: { pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/, lookbehind: true, alias: [lang, "language-" + lang], inside: Prism.languages[lang] }, punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] } } } });
    } }), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.ssml = Prism.languages.xml, Prism.languages.atom = Prism.languages.xml, Prism.languages.rss = Prism.languages.xml;
  }
} });
var require_immutable = __commonJS$1({ "../../node_modules/xtend/immutable.js"(exports, module) {
  module.exports = extend2;
  var hasOwnProperty5 = Object.prototype.hasOwnProperty;
  function extend2() {
    for (var target = {}, i2 = 0; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) hasOwnProperty5.call(source, key) && (target[key] = source[key]);
    }
    return target;
  }
} });
var require_schema = __commonJS$1({ "../../node_modules/hastscript/node_modules/property-information/lib/util/schema.js"(exports, module) {
  module.exports = Schema;
  var proto = Schema.prototype;
  proto.space = null;
  proto.normal = {};
  proto.property = {};
  function Schema(property, normal, space) {
    this.property = property, this.normal = normal, space && (this.space = space);
  }
} });
var require_merge = __commonJS$1({ "../../node_modules/hastscript/node_modules/property-information/lib/util/merge.js"(exports, module) {
  var xtend = require_immutable(), Schema = require_schema();
  module.exports = merge;
  function merge(definitions) {
    for (var length = definitions.length, property = [], normal = [], index3 = -1, info, space; ++index3 < length; ) info = definitions[index3], property.push(info.property), normal.push(info.normal), space = info.space;
    return new Schema(xtend.apply(null, property), xtend.apply(null, normal), space);
  }
} });
var require_normalize = __commonJS$1({ "../../node_modules/hastscript/node_modules/property-information/normalize.js"(exports, module) {
  module.exports = normalize;
  function normalize(value2) {
    return value2.toLowerCase();
  }
} });
var require_info = __commonJS$1({ "../../node_modules/hastscript/node_modules/property-information/lib/util/info.js"(exports, module) {
  module.exports = Info;
  var proto = Info.prototype;
  proto.space = null;
  proto.attribute = null;
  proto.property = null;
  proto.boolean = false;
  proto.booleanish = false;
  proto.overloadedBoolean = false;
  proto.number = false;
  proto.commaSeparated = false;
  proto.spaceSeparated = false;
  proto.commaOrSpaceSeparated = false;
  proto.mustUseProperty = false;
  proto.defined = false;
  function Info(property, attribute) {
    this.property = property, this.attribute = attribute;
  }
} });
var require_types = __commonJS$1({ "../../node_modules/hastscript/node_modules/property-information/lib/util/types.js"(exports) {
  var powers = 0;
  exports.boolean = increment();
  exports.booleanish = increment();
  exports.overloadedBoolean = increment();
  exports.number = increment();
  exports.spaceSeparated = increment();
  exports.commaSeparated = increment();
  exports.commaOrSpaceSeparated = increment();
  function increment() {
    return Math.pow(2, ++powers);
  }
} });
var require_defined_info = __commonJS$1({ "../../node_modules/hastscript/node_modules/property-information/lib/util/defined-info.js"(exports, module) {
  var Info = require_info(), types = require_types();
  module.exports = DefinedInfo;
  DefinedInfo.prototype = new Info();
  DefinedInfo.prototype.defined = true;
  var checks = ["boolean", "booleanish", "overloadedBoolean", "number", "commaSeparated", "spaceSeparated", "commaOrSpaceSeparated"], checksLength = checks.length;
  function DefinedInfo(property, attribute, mask, space) {
    var index3 = -1, check;
    for (mark(this, "space", space), Info.call(this, property, attribute); ++index3 < checksLength; ) check = checks[index3], mark(this, check, (mask & types[check]) === types[check]);
  }
  function mark(values, key, value2) {
    value2 && (values[key] = value2);
  }
} });
var require_create = __commonJS$1({ "../../node_modules/hastscript/node_modules/property-information/lib/util/create.js"(exports, module) {
  var normalize = require_normalize(), Schema = require_schema(), DefinedInfo = require_defined_info();
  module.exports = create;
  function create(definition) {
    var space = definition.space, mustUseProperty = definition.mustUseProperty || [], attributes = definition.attributes || {}, props = definition.properties, transform = definition.transform, property = {}, normal = {}, prop, info;
    for (prop in props) info = new DefinedInfo(prop, transform(attributes, prop), props[prop], space), mustUseProperty.indexOf(prop) !== -1 && (info.mustUseProperty = true), property[prop] = info, normal[normalize(prop)] = prop, normal[normalize(info.attribute)] = prop;
    return new Schema(property, normal, space);
  }
} });
var require_xlink = __commonJS$1({ "../../node_modules/hastscript/node_modules/property-information/lib/xlink.js"(exports, module) {
  var create = require_create();
  module.exports = create({ space: "xlink", transform: xlinkTransform, properties: { xLinkActuate: null, xLinkArcRole: null, xLinkHref: null, xLinkRole: null, xLinkShow: null, xLinkTitle: null, xLinkType: null } });
  function xlinkTransform(_2, prop) {
    return "xlink:" + prop.slice(5).toLowerCase();
  }
} });
var require_xml = __commonJS$1({ "../../node_modules/hastscript/node_modules/property-information/lib/xml.js"(exports, module) {
  var create = require_create();
  module.exports = create({ space: "xml", transform: xmlTransform, properties: { xmlLang: null, xmlBase: null, xmlSpace: null } });
  function xmlTransform(_2, prop) {
    return "xml:" + prop.slice(3).toLowerCase();
  }
} });
var require_case_sensitive_transform = __commonJS$1({ "../../node_modules/hastscript/node_modules/property-information/lib/util/case-sensitive-transform.js"(exports, module) {
  module.exports = caseSensitiveTransform;
  function caseSensitiveTransform(attributes, attribute) {
    return attribute in attributes ? attributes[attribute] : attribute;
  }
} });
var require_case_insensitive_transform = __commonJS$1({ "../../node_modules/hastscript/node_modules/property-information/lib/util/case-insensitive-transform.js"(exports, module) {
  var caseSensitiveTransform = require_case_sensitive_transform();
  module.exports = caseInsensitiveTransform;
  function caseInsensitiveTransform(attributes, property) {
    return caseSensitiveTransform(attributes, property.toLowerCase());
  }
} });
var require_xmlns = __commonJS$1({ "../../node_modules/hastscript/node_modules/property-information/lib/xmlns.js"(exports, module) {
  var create = require_create(), caseInsensitiveTransform = require_case_insensitive_transform();
  module.exports = create({ space: "xmlns", attributes: { xmlnsxlink: "xmlns:xlink" }, transform: caseInsensitiveTransform, properties: { xmlns: null, xmlnsXLink: null } });
} });
var require_aria = __commonJS$1({ "../../node_modules/hastscript/node_modules/property-information/lib/aria.js"(exports, module) {
  var types = require_types(), create = require_create(), booleanish = types.booleanish, number = types.number, spaceSeparated = types.spaceSeparated;
  module.exports = create({ transform: ariaTransform, properties: { ariaActiveDescendant: null, ariaAtomic: booleanish, ariaAutoComplete: null, ariaBusy: booleanish, ariaChecked: booleanish, ariaColCount: number, ariaColIndex: number, ariaColSpan: number, ariaControls: spaceSeparated, ariaCurrent: null, ariaDescribedBy: spaceSeparated, ariaDetails: null, ariaDisabled: booleanish, ariaDropEffect: spaceSeparated, ariaErrorMessage: null, ariaExpanded: booleanish, ariaFlowTo: spaceSeparated, ariaGrabbed: booleanish, ariaHasPopup: null, ariaHidden: booleanish, ariaInvalid: null, ariaKeyShortcuts: null, ariaLabel: null, ariaLabelledBy: spaceSeparated, ariaLevel: number, ariaLive: null, ariaModal: booleanish, ariaMultiLine: booleanish, ariaMultiSelectable: booleanish, ariaOrientation: null, ariaOwns: spaceSeparated, ariaPlaceholder: null, ariaPosInSet: number, ariaPressed: booleanish, ariaReadOnly: booleanish, ariaRelevant: null, ariaRequired: booleanish, ariaRoleDescription: spaceSeparated, ariaRowCount: number, ariaRowIndex: number, ariaRowSpan: number, ariaSelected: booleanish, ariaSetSize: number, ariaSort: null, ariaValueMax: number, ariaValueMin: number, ariaValueNow: number, ariaValueText: null, role: null } });
  function ariaTransform(_2, prop) {
    return prop === "role" ? prop : "aria-" + prop.slice(4).toLowerCase();
  }
} });
var require_html = __commonJS$1({ "../../node_modules/hastscript/node_modules/property-information/lib/html.js"(exports, module) {
  var types = require_types(), create = require_create(), caseInsensitiveTransform = require_case_insensitive_transform(), boolean = types.boolean, overloadedBoolean = types.overloadedBoolean, booleanish = types.booleanish, number = types.number, spaceSeparated = types.spaceSeparated, commaSeparated = types.commaSeparated;
  module.exports = create({ space: "html", attributes: { acceptcharset: "accept-charset", classname: "class", htmlfor: "for", httpequiv: "http-equiv" }, transform: caseInsensitiveTransform, mustUseProperty: ["checked", "multiple", "muted", "selected"], properties: { abbr: null, accept: commaSeparated, acceptCharset: spaceSeparated, accessKey: spaceSeparated, action: null, allow: null, allowFullScreen: boolean, allowPaymentRequest: boolean, allowUserMedia: boolean, alt: null, as: null, async: boolean, autoCapitalize: null, autoComplete: spaceSeparated, autoFocus: boolean, autoPlay: boolean, capture: boolean, charSet: null, checked: boolean, cite: null, className: spaceSeparated, cols: number, colSpan: null, content: null, contentEditable: booleanish, controls: boolean, controlsList: spaceSeparated, coords: number | commaSeparated, crossOrigin: null, data: null, dateTime: null, decoding: null, default: boolean, defer: boolean, dir: null, dirName: null, disabled: boolean, download: overloadedBoolean, draggable: booleanish, encType: null, enterKeyHint: null, form: null, formAction: null, formEncType: null, formMethod: null, formNoValidate: boolean, formTarget: null, headers: spaceSeparated, height: number, hidden: boolean, high: number, href: null, hrefLang: null, htmlFor: spaceSeparated, httpEquiv: spaceSeparated, id: null, imageSizes: null, imageSrcSet: commaSeparated, inputMode: null, integrity: null, is: null, isMap: boolean, itemId: null, itemProp: spaceSeparated, itemRef: spaceSeparated, itemScope: boolean, itemType: spaceSeparated, kind: null, label: null, lang: null, language: null, list: null, loading: null, loop: boolean, low: number, manifest: null, max: null, maxLength: number, media: null, method: null, min: null, minLength: number, multiple: boolean, muted: boolean, name: null, nonce: null, noModule: boolean, noValidate: boolean, onAbort: null, onAfterPrint: null, onAuxClick: null, onBeforePrint: null, onBeforeUnload: null, onBlur: null, onCancel: null, onCanPlay: null, onCanPlayThrough: null, onChange: null, onClick: null, onClose: null, onContextMenu: null, onCopy: null, onCueChange: null, onCut: null, onDblClick: null, onDrag: null, onDragEnd: null, onDragEnter: null, onDragExit: null, onDragLeave: null, onDragOver: null, onDragStart: null, onDrop: null, onDurationChange: null, onEmptied: null, onEnded: null, onError: null, onFocus: null, onFormData: null, onHashChange: null, onInput: null, onInvalid: null, onKeyDown: null, onKeyPress: null, onKeyUp: null, onLanguageChange: null, onLoad: null, onLoadedData: null, onLoadedMetadata: null, onLoadEnd: null, onLoadStart: null, onMessage: null, onMessageError: null, onMouseDown: null, onMouseEnter: null, onMouseLeave: null, onMouseMove: null, onMouseOut: null, onMouseOver: null, onMouseUp: null, onOffline: null, onOnline: null, onPageHide: null, onPageShow: null, onPaste: null, onPause: null, onPlay: null, onPlaying: null, onPopState: null, onProgress: null, onRateChange: null, onRejectionHandled: null, onReset: null, onResize: null, onScroll: null, onSecurityPolicyViolation: null, onSeeked: null, onSeeking: null, onSelect: null, onSlotChange: null, onStalled: null, onStorage: null, onSubmit: null, onSuspend: null, onTimeUpdate: null, onToggle: null, onUnhandledRejection: null, onUnload: null, onVolumeChange: null, onWaiting: null, onWheel: null, open: boolean, optimum: number, pattern: null, ping: spaceSeparated, placeholder: null, playsInline: boolean, poster: null, preload: null, readOnly: boolean, referrerPolicy: null, rel: spaceSeparated, required: boolean, reversed: boolean, rows: number, rowSpan: number, sandbox: spaceSeparated, scope: null, scoped: boolean, seamless: boolean, selected: boolean, shape: null, size: number, sizes: null, slot: null, span: number, spellCheck: booleanish, src: null, srcDoc: null, srcLang: null, srcSet: commaSeparated, start: number, step: null, style: null, tabIndex: number, target: null, title: null, translate: null, type: null, typeMustMatch: boolean, useMap: null, value: booleanish, width: number, wrap: null, align: null, aLink: null, archive: spaceSeparated, axis: null, background: null, bgColor: null, border: number, borderColor: null, bottomMargin: number, cellPadding: null, cellSpacing: null, char: null, charOff: null, classId: null, clear: null, code: null, codeBase: null, codeType: null, color: null, compact: boolean, declare: boolean, event: null, face: null, frame: null, frameBorder: null, hSpace: number, leftMargin: number, link: null, longDesc: null, lowSrc: null, marginHeight: number, marginWidth: number, noResize: boolean, noHref: boolean, noShade: boolean, noWrap: boolean, object: null, profile: null, prompt: null, rev: null, rightMargin: number, rules: null, scheme: null, scrolling: booleanish, standby: null, summary: null, text: null, topMargin: number, valueType: null, version: null, vAlign: null, vLink: null, vSpace: number, allowTransparency: null, autoCorrect: null, autoSave: null, disablePictureInPicture: boolean, disableRemotePlayback: boolean, prefix: null, property: null, results: number, security: null, unselectable: null } });
} });
var require_html2 = __commonJS$1({ "../../node_modules/hastscript/node_modules/property-information/html.js"(exports, module) {
  var merge = require_merge(), xlink = require_xlink(), xml = require_xml(), xmlns = require_xmlns(), aria = require_aria(), html = require_html();
  module.exports = merge([xml, xlink, xmlns, aria, html]);
} });
var require_find = __commonJS$1({ "../../node_modules/hastscript/node_modules/property-information/find.js"(exports, module) {
  var normalize = require_normalize(), DefinedInfo = require_defined_info(), Info = require_info(), data = "data";
  module.exports = find;
  var valid = /^data[-\w.:]+$/i, dash = /-[a-z]/g, cap = /[A-Z]/g;
  function find(schema, value2) {
    var normal = normalize(value2), prop = value2, Type2 = Info;
    return normal in schema.normal ? schema.property[schema.normal[normal]] : (normal.length > 4 && normal.slice(0, 4) === data && valid.test(value2) && (value2.charAt(4) === "-" ? prop = datasetToProperty(value2) : value2 = datasetToAttribute(value2), Type2 = DefinedInfo), new Type2(prop, value2));
  }
  function datasetToProperty(attribute) {
    var value2 = attribute.slice(5).replace(dash, camelcase);
    return data + value2.charAt(0).toUpperCase() + value2.slice(1);
  }
  function datasetToAttribute(property) {
    var value2 = property.slice(4);
    return dash.test(value2) ? property : (value2 = value2.replace(cap, kebab), value2.charAt(0) !== "-" && (value2 = "-" + value2), data + value2);
  }
  function kebab($0) {
    return "-" + $0.toLowerCase();
  }
  function camelcase($0) {
    return $0.charAt(1).toUpperCase();
  }
} });
var require_hast_util_parse_selector = __commonJS$1({ "../../node_modules/hast-util-parse-selector/index.js"(exports, module) {
  module.exports = parse4;
  var search = /[#.]/g;
  function parse4(selector, defaultTagName) {
    for (var value2 = selector || "", name = defaultTagName || "div", props = {}, start2 = 0, subvalue, previous, match2; start2 < value2.length; ) search.lastIndex = start2, match2 = search.exec(value2), subvalue = value2.slice(start2, match2 ? match2.index : value2.length), subvalue && (previous ? previous === "#" ? props.id = subvalue : props.className ? props.className.push(subvalue) : props.className = [subvalue] : name = subvalue, start2 += subvalue.length), match2 && (previous = match2[0], start2++);
    return { type: "element", tagName: name, properties: props, children: [] };
  }
} });
var require_space_separated_tokens = __commonJS$1({ "../../node_modules/hastscript/node_modules/space-separated-tokens/index.js"(exports) {
  exports.parse = parse4;
  exports.stringify = stringify2;
  var empty = "", space = " ", whiteSpace = /[ \t\n\r\f]+/g;
  function parse4(value2) {
    var input = String(value2 || empty).trim();
    return input === empty ? [] : input.split(whiteSpace);
  }
  function stringify2(values) {
    return values.join(space).trim();
  }
} });
var require_comma_separated_tokens = __commonJS$1({ "../../node_modules/hastscript/node_modules/comma-separated-tokens/index.js"(exports) {
  exports.parse = parse4;
  exports.stringify = stringify2;
  var comma = ",", space = " ", empty = "";
  function parse4(value2) {
    for (var values = [], input = String(value2 || empty), index3 = input.indexOf(comma), lastIndex = 0, end2 = false, val; !end2; ) index3 === -1 && (index3 = input.length, end2 = true), val = input.slice(lastIndex, index3).trim(), (val || !end2) && values.push(val), lastIndex = index3 + 1, index3 = input.indexOf(comma, lastIndex);
    return values;
  }
  function stringify2(values, options) {
    var settings = options || {}, left2 = settings.padLeft === false ? empty : space, right2 = settings.padRight ? space : empty;
    return values[values.length - 1] === empty && (values = values.concat(empty)), values.join(right2 + comma + left2).trim();
  }
} });
var require_factory = __commonJS$1({ "../../node_modules/hastscript/factory.js"(exports, module) {
  var find = require_find(), normalize = require_normalize(), parseSelector = require_hast_util_parse_selector(), spaces = require_space_separated_tokens().parse, commas = require_comma_separated_tokens().parse;
  module.exports = factory;
  var own = {}.hasOwnProperty;
  function factory(schema, defaultTagName, caseSensitive) {
    var adjust = caseSensitive ? createAdjustMap(caseSensitive) : null;
    return h2;
    function h2(selector, properties) {
      var node = parseSelector(selector, defaultTagName), children = Array.prototype.slice.call(arguments, 2), name = node.tagName.toLowerCase(), property;
      if (node.tagName = adjust && own.call(adjust, name) ? adjust[name] : name, properties && isChildren(properties, node) && (children.unshift(properties), properties = null), properties) for (property in properties) addProperty(node.properties, property, properties[property]);
      return addChild(node.children, children), node.tagName === "template" && (node.content = { type: "root", children: node.children }, node.children = []), node;
    }
    function addProperty(properties, key, value2) {
      var info, property, result;
      value2 == null || value2 !== value2 || (info = find(schema, key), property = info.property, result = value2, typeof result == "string" && (info.spaceSeparated ? result = spaces(result) : info.commaSeparated ? result = commas(result) : info.commaOrSpaceSeparated && (result = spaces(commas(result).join(" ")))), property === "style" && typeof value2 != "string" && (result = style(result)), property === "className" && properties.className && (result = properties.className.concat(result)), properties[property] = parsePrimitives(info, property, result));
    }
  }
  function isChildren(value2, node) {
    return typeof value2 == "string" || "length" in value2 || isNode(node.tagName, value2);
  }
  function isNode(tagName, value2) {
    var type = value2.type;
    return tagName === "input" || !type || typeof type != "string" ? false : typeof value2.children == "object" && "length" in value2.children ? true : (type = type.toLowerCase(), tagName === "button" ? type !== "menu" && type !== "submit" && type !== "reset" && type !== "button" : "value" in value2);
  }
  function addChild(nodes, value2) {
    var index3, length;
    if (typeof value2 == "string" || typeof value2 == "number") {
      nodes.push({ type: "text", value: String(value2) });
      return;
    }
    if (typeof value2 == "object" && "length" in value2) {
      for (index3 = -1, length = value2.length; ++index3 < length; ) addChild(nodes, value2[index3]);
      return;
    }
    if (typeof value2 != "object" || !("type" in value2)) throw new Error("Expected node, nodes, or string, got `" + value2 + "`");
    nodes.push(value2);
  }
  function parsePrimitives(info, name, value2) {
    var index3, length, result;
    if (typeof value2 != "object" || !("length" in value2)) return parsePrimitive(info, name, value2);
    for (length = value2.length, index3 = -1, result = []; ++index3 < length; ) result[index3] = parsePrimitive(info, name, value2[index3]);
    return result;
  }
  function parsePrimitive(info, name, value2) {
    var result = value2;
    return info.number || info.positiveNumber ? !isNaN(result) && result !== "" && (result = Number(result)) : (info.boolean || info.overloadedBoolean) && typeof result == "string" && (result === "" || normalize(value2) === normalize(name)) && (result = true), result;
  }
  function style(value2) {
    var result = [], key;
    for (key in value2) result.push([key, value2[key]].join(": "));
    return result.join("; ");
  }
  function createAdjustMap(values) {
    for (var length = values.length, index3 = -1, result = {}, value2; ++index3 < length; ) value2 = values[index3], result[value2.toLowerCase()] = value2;
    return result;
  }
} });
var require_html3 = __commonJS$1({ "../../node_modules/hastscript/html.js"(exports, module) {
  var schema = require_html2(), factory = require_factory(), html = factory(schema, "div");
  html.displayName = "html";
  module.exports = html;
} });
var require_hastscript = __commonJS$1({ "../../node_modules/hastscript/index.js"(exports, module) {
  module.exports = require_html3();
} });
var require_character_entities_legacy = __commonJS$1({ "../../node_modules/refractor/node_modules/character-entities-legacy/index.json"(exports, module) {
  module.exports = { AElig: "Æ", AMP: "&", Aacute: "Á", Acirc: "Â", Agrave: "À", Aring: "Å", Atilde: "Ã", Auml: "Ä", COPY: "©", Ccedil: "Ç", ETH: "Ð", Eacute: "É", Ecirc: "Ê", Egrave: "È", Euml: "Ë", GT: ">", Iacute: "Í", Icirc: "Î", Igrave: "Ì", Iuml: "Ï", LT: "<", Ntilde: "Ñ", Oacute: "Ó", Ocirc: "Ô", Ograve: "Ò", Oslash: "Ø", Otilde: "Õ", Ouml: "Ö", QUOT: '"', REG: "®", THORN: "Þ", Uacute: "Ú", Ucirc: "Û", Ugrave: "Ù", Uuml: "Ü", Yacute: "Ý", aacute: "á", acirc: "â", acute: "´", aelig: "æ", agrave: "à", amp: "&", aring: "å", atilde: "ã", auml: "ä", brvbar: "¦", ccedil: "ç", cedil: "¸", cent: "¢", copy: "©", curren: "¤", deg: "°", divide: "÷", eacute: "é", ecirc: "ê", egrave: "è", eth: "ð", euml: "ë", frac12: "½", frac14: "¼", frac34: "¾", gt: ">", iacute: "í", icirc: "î", iexcl: "¡", igrave: "ì", iquest: "¿", iuml: "ï", laquo: "«", lt: "<", macr: "¯", micro: "µ", middot: "·", nbsp: " ", not: "¬", ntilde: "ñ", oacute: "ó", ocirc: "ô", ograve: "ò", ordf: "ª", ordm: "º", oslash: "ø", otilde: "õ", ouml: "ö", para: "¶", plusmn: "±", pound: "£", quot: '"', raquo: "»", reg: "®", sect: "§", shy: "­", sup1: "¹", sup2: "²", sup3: "³", szlig: "ß", thorn: "þ", times: "×", uacute: "ú", ucirc: "û", ugrave: "ù", uml: "¨", uuml: "ü", yacute: "ý", yen: "¥", yuml: "ÿ" };
} });
var require_character_reference_invalid = __commonJS$1({ "../../node_modules/refractor/node_modules/character-reference-invalid/index.json"(exports, module) {
  module.exports = { "0": "�", "128": "€", "130": "‚", "131": "ƒ", "132": "„", "133": "…", "134": "†", "135": "‡", "136": "ˆ", "137": "‰", "138": "Š", "139": "‹", "140": "Œ", "142": "Ž", "145": "‘", "146": "’", "147": "“", "148": "”", "149": "•", "150": "–", "151": "—", "152": "˜", "153": "™", "154": "š", "155": "›", "156": "œ", "158": "ž", "159": "Ÿ" };
} });
var require_is_decimal = __commonJS$1({ "../../node_modules/refractor/node_modules/is-decimal/index.js"(exports, module) {
  module.exports = decimal;
  function decimal(character) {
    var code = typeof character == "string" ? character.charCodeAt(0) : character;
    return code >= 48 && code <= 57;
  }
} });
var require_is_hexadecimal = __commonJS$1({ "../../node_modules/refractor/node_modules/is-hexadecimal/index.js"(exports, module) {
  module.exports = hexadecimal;
  function hexadecimal(character) {
    var code = typeof character == "string" ? character.charCodeAt(0) : character;
    return code >= 97 && code <= 102 || code >= 65 && code <= 70 || code >= 48 && code <= 57;
  }
} });
var require_is_alphabetical = __commonJS$1({ "../../node_modules/refractor/node_modules/is-alphabetical/index.js"(exports, module) {
  module.exports = alphabetical;
  function alphabetical(character) {
    var code = typeof character == "string" ? character.charCodeAt(0) : character;
    return code >= 97 && code <= 122 || code >= 65 && code <= 90;
  }
} });
var require_is_alphanumerical = __commonJS$1({ "../../node_modules/refractor/node_modules/is-alphanumerical/index.js"(exports, module) {
  var alphabetical = require_is_alphabetical(), decimal = require_is_decimal();
  module.exports = alphanumerical;
  function alphanumerical(character) {
    return alphabetical(character) || decimal(character);
  }
} });
var require_decode_entity_browser = __commonJS$1({ "../../node_modules/refractor/node_modules/parse-entities/decode-entity.browser.js"(exports, module) {
  var el, semicolon = 59;
  module.exports = decodeEntity;
  function decodeEntity(characters) {
    var entity = "&" + characters + ";", char;
    return el = el || document.createElement("i"), el.innerHTML = entity, char = el.textContent, char.charCodeAt(char.length - 1) === semicolon && characters !== "semi" || char === entity ? false : char;
  }
} });
var require_parse_entities = __commonJS$1({ "../../node_modules/refractor/node_modules/parse-entities/index.js"(exports, module) {
  var legacy = require_character_entities_legacy(), invalid = require_character_reference_invalid(), decimal = require_is_decimal(), hexadecimal = require_is_hexadecimal(), alphanumerical = require_is_alphanumerical(), decodeEntity = require_decode_entity_browser();
  module.exports = parseEntities;
  var own = {}.hasOwnProperty, fromCharCode = String.fromCharCode, noop2 = Function.prototype, defaults = { warning: null, reference: null, text: null, warningContext: null, referenceContext: null, textContext: null, position: {}, additional: null, attribute: false, nonTerminated: true }, tab = 9, lineFeed = 10, formFeed = 12, space = 32, ampersand = 38, semicolon = 59, lessThan = 60, equalsTo = 61, numberSign = 35, uppercaseX = 88, lowercaseX = 120, replacementCharacter = 65533, name = "named", hexa = "hexadecimal", deci = "decimal", bases = {};
  bases[hexa] = 16;
  bases[deci] = 10;
  var tests = {};
  tests[name] = alphanumerical;
  tests[deci] = decimal;
  tests[hexa] = hexadecimal;
  var namedNotTerminated = 1, numericNotTerminated = 2, namedEmpty = 3, numericEmpty = 4, namedUnknown = 5, numericDisallowed = 6, numericProhibited = 7, messages = {};
  messages[namedNotTerminated] = "Named character references must be terminated by a semicolon";
  messages[numericNotTerminated] = "Numeric character references must be terminated by a semicolon";
  messages[namedEmpty] = "Named character references cannot be empty";
  messages[numericEmpty] = "Numeric character references cannot be empty";
  messages[namedUnknown] = "Named character references must be known";
  messages[numericDisallowed] = "Numeric character references cannot be disallowed";
  messages[numericProhibited] = "Numeric character references cannot be outside the permissible Unicode range";
  function parseEntities(value2, options) {
    var settings = {}, option, key;
    options || (options = {});
    for (key in defaults) option = options[key], settings[key] = option ?? defaults[key];
    return (settings.position.indent || settings.position.start) && (settings.indent = settings.position.indent || [], settings.position = settings.position.start), parse4(value2, settings);
  }
  function parse4(value2, settings) {
    var additional = settings.additional, nonTerminated = settings.nonTerminated, handleText = settings.text, handleReference = settings.reference, handleWarning = settings.warning, textContext = settings.textContext, referenceContext = settings.referenceContext, warningContext = settings.warningContext, pos = settings.position, indent = settings.indent || [], length = value2.length, index3 = 0, lines = -1, column = pos.column || 1, line = pos.line || 1, queue = "", result = [], entityCharacters, namedEntity, terminated, characters, character, reference2, following, warning, reason, output, entity, begin, start2, type, test, prev, next, diff, end2;
    for (typeof additional == "string" && (additional = additional.charCodeAt(0)), prev = now(), warning = handleWarning ? parseError : noop2, index3--, length++; ++index3 < length; ) if (character === lineFeed && (column = indent[lines] || 1), character = value2.charCodeAt(index3), character === ampersand) {
      if (following = value2.charCodeAt(index3 + 1), following === tab || following === lineFeed || following === formFeed || following === space || following === ampersand || following === lessThan || following !== following || additional && following === additional) {
        queue += fromCharCode(character), column++;
        continue;
      }
      for (start2 = index3 + 1, begin = start2, end2 = start2, following === numberSign ? (end2 = ++begin, following = value2.charCodeAt(end2), following === uppercaseX || following === lowercaseX ? (type = hexa, end2 = ++begin) : type = deci) : type = name, entityCharacters = "", entity = "", characters = "", test = tests[type], end2--; ++end2 < length && (following = value2.charCodeAt(end2), !!test(following)); ) characters += fromCharCode(following), type === name && own.call(legacy, characters) && (entityCharacters = characters, entity = legacy[characters]);
      terminated = value2.charCodeAt(end2) === semicolon, terminated && (end2++, namedEntity = type === name ? decodeEntity(characters) : false, namedEntity && (entityCharacters = characters, entity = namedEntity)), diff = 1 + end2 - start2, !terminated && !nonTerminated || (characters ? type === name ? (terminated && !entity ? warning(namedUnknown, 1) : (entityCharacters !== characters && (end2 = begin + entityCharacters.length, diff = 1 + end2 - begin, terminated = false), terminated || (reason = entityCharacters ? namedNotTerminated : namedEmpty, settings.attribute ? (following = value2.charCodeAt(end2), following === equalsTo ? (warning(reason, diff), entity = null) : alphanumerical(following) ? entity = null : warning(reason, diff)) : warning(reason, diff))), reference2 = entity) : (terminated || warning(numericNotTerminated, diff), reference2 = parseInt(characters, bases[type]), prohibited(reference2) ? (warning(numericProhibited, diff), reference2 = fromCharCode(replacementCharacter)) : reference2 in invalid ? (warning(numericDisallowed, diff), reference2 = invalid[reference2]) : (output = "", disallowed(reference2) && warning(numericDisallowed, diff), reference2 > 65535 && (reference2 -= 65536, output += fromCharCode(reference2 >>> 10 | 55296), reference2 = 56320 | reference2 & 1023), reference2 = output + fromCharCode(reference2))) : type !== name && warning(numericEmpty, diff)), reference2 ? (flush(), prev = now(), index3 = end2 - 1, column += end2 - start2 + 1, result.push(reference2), next = now(), next.offset++, handleReference && handleReference.call(referenceContext, reference2, { start: prev, end: next }, value2.slice(start2 - 1, end2)), prev = next) : (characters = value2.slice(start2 - 1, end2), queue += characters, column += characters.length, index3 = end2 - 1);
    } else character === 10 && (line++, lines++, column = 0), character === character ? (queue += fromCharCode(character), column++) : flush();
    return result.join("");
    function now() {
      return { line, column, offset: index3 + (pos.offset || 0) };
    }
    function parseError(code, offset2) {
      var position = now();
      position.column += offset2, position.offset += offset2, handleWarning.call(warningContext, messages[code], position, code);
    }
    function flush() {
      queue && (result.push(queue), handleText && handleText.call(textContext, queue, { start: prev, end: now() }), queue = "");
    }
  }
  function prohibited(code) {
    return code >= 55296 && code <= 57343 || code > 1114111;
  }
  function disallowed(code) {
    return code >= 1 && code <= 8 || code === 11 || code >= 13 && code <= 31 || code >= 127 && code <= 159 || code >= 64976 && code <= 65007 || (code & 65535) === 65535 || (code & 65535) === 65534;
  }
} });
var require_prism_core = __commonJS$1({ "../../node_modules/refractor/node_modules/prismjs/components/prism-core.js"(exports, module) {
  var _self = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
  var Prism = function(_self2) {
    var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, uniqueId = 0, plainTextGrammar = {}, _2 = { manual: _self2.Prism && _self2.Prism.manual, disableWorkerMessageHandler: _self2.Prism && _self2.Prism.disableWorkerMessageHandler, util: { encode: function encode(tokens) {
      return tokens instanceof Token ? new Token(tokens.type, encode(tokens.content), tokens.alias) : Array.isArray(tokens) ? tokens.map(encode) : tokens.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
    }, type: function(o2) {
      return Object.prototype.toString.call(o2).slice(8, -1);
    }, objId: function(obj) {
      return obj.__id || Object.defineProperty(obj, "__id", { value: ++uniqueId }), obj.__id;
    }, clone: function deepClone(o2, visited) {
      visited = visited || {};
      var clone, id;
      switch (_2.util.type(o2)) {
        case "Object":
          if (id = _2.util.objId(o2), visited[id]) return visited[id];
          clone = {}, visited[id] = clone;
          for (var key in o2) o2.hasOwnProperty(key) && (clone[key] = deepClone(o2[key], visited));
          return clone;
        case "Array":
          return id = _2.util.objId(o2), visited[id] ? visited[id] : (clone = [], visited[id] = clone, o2.forEach(function(v2, i2) {
            clone[i2] = deepClone(v2, visited);
          }), clone);
        default:
          return o2;
      }
    }, getLanguage: function(element) {
      for (; element; ) {
        var m2 = lang.exec(element.className);
        if (m2) return m2[1].toLowerCase();
        element = element.parentElement;
      }
      return "none";
    }, setLanguage: function(element, language) {
      element.className = element.className.replace(RegExp(lang, "gi"), ""), element.classList.add("language-" + language);
    }, currentScript: function() {
      if (typeof document > "u") return null;
      if ("currentScript" in document) return document.currentScript;
      try {
        throw new Error();
      } catch (err) {
        var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
        if (src) {
          var scripts = document.getElementsByTagName("script");
          for (var i2 in scripts) if (scripts[i2].src == src) return scripts[i2];
        }
        return null;
      }
    }, isActive: function(element, className, defaultActivation) {
      for (var no = "no-" + className; element; ) {
        var classList = element.classList;
        if (classList.contains(className)) return true;
        if (classList.contains(no)) return false;
        element = element.parentElement;
      }
      return !!defaultActivation;
    } }, languages: { plain: plainTextGrammar, plaintext: plainTextGrammar, text: plainTextGrammar, txt: plainTextGrammar, extend: function(id, redef) {
      var lang2 = _2.util.clone(_2.languages[id]);
      for (var key in redef) lang2[key] = redef[key];
      return lang2;
    }, insertBefore: function(inside, before, insert, root) {
      root = root || _2.languages;
      var grammar = root[inside], ret = {};
      for (var token in grammar) if (grammar.hasOwnProperty(token)) {
        if (token == before) for (var newToken in insert) insert.hasOwnProperty(newToken) && (ret[newToken] = insert[newToken]);
        insert.hasOwnProperty(token) || (ret[token] = grammar[token]);
      }
      var old = root[inside];
      return root[inside] = ret, _2.languages.DFS(_2.languages, function(key, value2) {
        value2 === old && key != inside && (this[key] = ret);
      }), ret;
    }, DFS: function DFS(o2, callback, type, visited) {
      visited = visited || {};
      var objId = _2.util.objId;
      for (var i2 in o2) if (o2.hasOwnProperty(i2)) {
        callback.call(o2, i2, o2[i2], type || i2);
        var property = o2[i2], propertyType = _2.util.type(property);
        propertyType === "Object" && !visited[objId(property)] ? (visited[objId(property)] = true, DFS(property, callback, null, visited)) : propertyType === "Array" && !visited[objId(property)] && (visited[objId(property)] = true, DFS(property, callback, i2, visited));
      }
    } }, plugins: {}, highlightAll: function(async, callback) {
      _2.highlightAllUnder(document, async, callback);
    }, highlightAllUnder: function(container, async, callback) {
      var env = { callback, container, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' };
      _2.hooks.run("before-highlightall", env), env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector)), _2.hooks.run("before-all-elements-highlight", env);
      for (var i2 = 0, element; element = env.elements[i2++]; ) _2.highlightElement(element, async === true, env.callback);
    }, highlightElement: function(element, async, callback) {
      var language = _2.util.getLanguage(element), grammar = _2.languages[language];
      _2.util.setLanguage(element, language);
      var parent = element.parentElement;
      parent && parent.nodeName.toLowerCase() === "pre" && _2.util.setLanguage(parent, language);
      var code = element.textContent, env = { element, language, grammar, code };
      function insertHighlightedCode(highlightedCode) {
        env.highlightedCode = highlightedCode, _2.hooks.run("before-insert", env), env.element.innerHTML = env.highlightedCode, _2.hooks.run("after-highlight", env), _2.hooks.run("complete", env), callback && callback.call(env.element);
      }
      if (_2.hooks.run("before-sanity-check", env), parent = env.element.parentElement, parent && parent.nodeName.toLowerCase() === "pre" && !parent.hasAttribute("tabindex") && parent.setAttribute("tabindex", "0"), !env.code) {
        _2.hooks.run("complete", env), callback && callback.call(env.element);
        return;
      }
      if (_2.hooks.run("before-highlight", env), !env.grammar) {
        insertHighlightedCode(_2.util.encode(env.code));
        return;
      }
      if (async && _self2.Worker) {
        var worker = new Worker(_2.filename);
        worker.onmessage = function(evt) {
          insertHighlightedCode(evt.data);
        }, worker.postMessage(JSON.stringify({ language: env.language, code: env.code, immediateClose: true }));
      } else insertHighlightedCode(_2.highlight(env.code, env.grammar, env.language));
    }, highlight: function(text, grammar, language) {
      var env = { code: text, grammar, language };
      if (_2.hooks.run("before-tokenize", env), !env.grammar) throw new Error('The language "' + env.language + '" has no grammar.');
      return env.tokens = _2.tokenize(env.code, env.grammar), _2.hooks.run("after-tokenize", env), Token.stringify(_2.util.encode(env.tokens), env.language);
    }, tokenize: function(text, grammar) {
      var rest = grammar.rest;
      if (rest) {
        for (var token in rest) grammar[token] = rest[token];
        delete grammar.rest;
      }
      var tokenList = new LinkedList();
      return addAfter(tokenList, tokenList.head, text), matchGrammar(text, tokenList, grammar, tokenList.head, 0), toArray(tokenList);
    }, hooks: { all: {}, add: function(name, callback) {
      var hooks = _2.hooks.all;
      hooks[name] = hooks[name] || [], hooks[name].push(callback);
    }, run: function(name, env) {
      var callbacks = _2.hooks.all[name];
      if (!(!callbacks || !callbacks.length)) for (var i2 = 0, callback; callback = callbacks[i2++]; ) callback(env);
    } }, Token };
    _self2.Prism = _2;
    function Token(type, content, alias, matchedStr) {
      this.type = type, this.content = content, this.alias = alias, this.length = (matchedStr || "").length | 0;
    }
    Token.stringify = function stringify2(o2, language) {
      if (typeof o2 == "string") return o2;
      if (Array.isArray(o2)) {
        var s2 = "";
        return o2.forEach(function(e2) {
          s2 += stringify2(e2, language);
        }), s2;
      }
      var env = { type: o2.type, content: stringify2(o2.content, language), tag: "span", classes: ["token", o2.type], attributes: {}, language }, aliases = o2.alias;
      aliases && (Array.isArray(aliases) ? Array.prototype.push.apply(env.classes, aliases) : env.classes.push(aliases)), _2.hooks.run("wrap", env);
      var attributes = "";
      for (var name in env.attributes) attributes += " " + name + '="' + (env.attributes[name] || "").replace(/"/g, "&quot;") + '"';
      return "<" + env.tag + ' class="' + env.classes.join(" ") + '"' + attributes + ">" + env.content + "</" + env.tag + ">";
    };
    function matchPattern(pattern, pos, text, lookbehind) {
      pattern.lastIndex = pos;
      var match2 = pattern.exec(text);
      if (match2 && lookbehind && match2[1]) {
        var lookbehindLength = match2[1].length;
        match2.index += lookbehindLength, match2[0] = match2[0].slice(lookbehindLength);
      }
      return match2;
    }
    function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
      for (var token in grammar) if (!(!grammar.hasOwnProperty(token) || !grammar[token])) {
        var patterns = grammar[token];
        patterns = Array.isArray(patterns) ? patterns : [patterns];
        for (var j2 = 0; j2 < patterns.length; ++j2) {
          if (rematch && rematch.cause == token + "," + j2) return;
          var patternObj = patterns[j2], inside = patternObj.inside, lookbehind = !!patternObj.lookbehind, greedy = !!patternObj.greedy, alias = patternObj.alias;
          if (greedy && !patternObj.pattern.global) {
            var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
            patternObj.pattern = RegExp(patternObj.pattern.source, flags + "g");
          }
          for (var pattern = patternObj.pattern || patternObj, currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail && !(rematch && pos >= rematch.reach); pos += currentNode.value.length, currentNode = currentNode.next) {
            var str = currentNode.value;
            if (tokenList.length > text.length) return;
            if (!(str instanceof Token)) {
              var removeCount = 1, match2;
              if (greedy) {
                if (match2 = matchPattern(pattern, pos, text, lookbehind), !match2 || match2.index >= text.length) break;
                var from = match2.index, to = match2.index + match2[0].length, p2 = pos;
                for (p2 += currentNode.value.length; from >= p2; ) currentNode = currentNode.next, p2 += currentNode.value.length;
                if (p2 -= currentNode.value.length, pos = p2, currentNode.value instanceof Token) continue;
                for (var k2 = currentNode; k2 !== tokenList.tail && (p2 < to || typeof k2.value == "string"); k2 = k2.next) removeCount++, p2 += k2.value.length;
                removeCount--, str = text.slice(pos, p2), match2.index -= pos;
              } else if (match2 = matchPattern(pattern, 0, str, lookbehind), !match2) continue;
              var from = match2.index, matchStr = match2[0], before = str.slice(0, from), after = str.slice(from + matchStr.length), reach = pos + str.length;
              rematch && reach > rematch.reach && (rematch.reach = reach);
              var removeFrom = currentNode.prev;
              before && (removeFrom = addAfter(tokenList, removeFrom, before), pos += before.length), removeRange(tokenList, removeFrom, removeCount);
              var wrapped = new Token(token, inside ? _2.tokenize(matchStr, inside) : matchStr, alias, matchStr);
              if (currentNode = addAfter(tokenList, removeFrom, wrapped), after && addAfter(tokenList, currentNode, after), removeCount > 1) {
                var nestedRematch = { cause: token + "," + j2, reach };
                matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch), rematch && nestedRematch.reach > rematch.reach && (rematch.reach = nestedRematch.reach);
              }
            }
          }
        }
      }
    }
    function LinkedList() {
      var head = { value: null, prev: null, next: null }, tail = { value: null, prev: head, next: null };
      head.next = tail, this.head = head, this.tail = tail, this.length = 0;
    }
    function addAfter(list, node, value2) {
      var next = node.next, newNode = { value: value2, prev: node, next };
      return node.next = newNode, next.prev = newNode, list.length++, newNode;
    }
    function removeRange(list, node, count2) {
      for (var next = node.next, i2 = 0; i2 < count2 && next !== list.tail; i2++) next = next.next;
      node.next = next, next.prev = node, list.length -= i2;
    }
    function toArray(list) {
      for (var array2 = [], node = list.head.next; node !== list.tail; ) array2.push(node.value), node = node.next;
      return array2;
    }
    if (!_self2.document) return _self2.addEventListener && (_2.disableWorkerMessageHandler || _self2.addEventListener("message", function(evt) {
      var message = JSON.parse(evt.data), lang2 = message.language, code = message.code, immediateClose = message.immediateClose;
      _self2.postMessage(_2.highlight(code, _2.languages[lang2], lang2)), immediateClose && _self2.close();
    }, false)), _2;
    var script = _2.util.currentScript();
    script && (_2.filename = script.src, script.hasAttribute("data-manual") && (_2.manual = true));
    function highlightAutomaticallyCallback() {
      _2.manual || _2.highlightAll();
    }
    if (!_2.manual) {
      var readyState = document.readyState;
      readyState === "loading" || readyState === "interactive" && script && script.defer ? document.addEventListener("DOMContentLoaded", highlightAutomaticallyCallback) : window.requestAnimationFrame ? window.requestAnimationFrame(highlightAutomaticallyCallback) : window.setTimeout(highlightAutomaticallyCallback, 16);
    }
    return _2;
  }(_self);
  typeof module < "u" && module.exports && (module.exports = Prism);
  typeof global < "u" && (global.Prism = Prism);
} });
var require_core = __commonJS$1({ "../../node_modules/refractor/core.js"(exports, module) {
  var ctx = typeof globalThis == "object" ? globalThis : typeof self == "object" ? self : typeof window == "object" ? window : typeof global == "object" ? global : {}, restore = capture();
  ctx.Prism = { manual: true, disableWorkerMessageHandler: true };
  var h2 = require_hastscript(), decode = require_parse_entities(), Prism = require_prism_core(), markup = require_markup(), css = require_css(), clike = require_clike(), js = require_javascript();
  restore();
  var own = {}.hasOwnProperty;
  function Refractor() {
  }
  Refractor.prototype = Prism;
  var refract = new Refractor();
  module.exports = refract;
  refract.highlight = highlight;
  refract.register = register;
  refract.alias = alias;
  refract.registered = registered;
  refract.listLanguages = listLanguages;
  register(markup);
  register(css);
  register(clike);
  register(js);
  refract.util.encode = encode;
  refract.Token.stringify = stringify2;
  function register(grammar) {
    if (typeof grammar != "function" || !grammar.displayName) throw new Error("Expected `function` for `grammar`, got `" + grammar + "`");
    refract.languages[grammar.displayName] === void 0 && grammar(refract);
  }
  function alias(name, alias2) {
    var languages2 = refract.languages, map = name, key, list, length, index3;
    alias2 && (map = {}, map[name] = alias2);
    for (key in map) for (list = map[key], list = typeof list == "string" ? [list] : list, length = list.length, index3 = -1; ++index3 < length; ) languages2[list[index3]] = languages2[key];
  }
  function highlight(value2, name) {
    var sup = Prism.highlight, grammar;
    if (typeof value2 != "string") throw new Error("Expected `string` for `value`, got `" + value2 + "`");
    if (refract.util.type(name) === "Object") grammar = name, name = null;
    else {
      if (typeof name != "string") throw new Error("Expected `string` for `name`, got `" + name + "`");
      if (own.call(refract.languages, name)) grammar = refract.languages[name];
      else throw new Error("Unknown language: `" + name + "` is not registered");
    }
    return sup.call(this, value2, grammar, name);
  }
  function registered(language) {
    if (typeof language != "string") throw new Error("Expected `string` for `language`, got `" + language + "`");
    return own.call(refract.languages, language);
  }
  function listLanguages() {
    var languages2 = refract.languages, list = [], language;
    for (language in languages2) own.call(languages2, language) && typeof languages2[language] == "object" && list.push(language);
    return list;
  }
  function stringify2(value2, language, parent) {
    var env;
    return typeof value2 == "string" ? { type: "text", value: value2 } : refract.util.type(value2) === "Array" ? stringifyAll(value2, language) : (env = { type: value2.type, content: refract.Token.stringify(value2.content, language, parent), tag: "span", classes: ["token", value2.type], attributes: {}, language, parent }, value2.alias && (env.classes = env.classes.concat(value2.alias)), refract.hooks.run("wrap", env), h2(env.tag + "." + env.classes.join("."), attributes(env.attributes), env.content));
  }
  function stringifyAll(values, language) {
    for (var result = [], length = values.length, index3 = -1, value2; ++index3 < length; ) value2 = values[index3], value2 !== "" && value2 !== null && value2 !== void 0 && result.push(value2);
    for (index3 = -1, length = result.length; ++index3 < length; ) value2 = result[index3], result[index3] = refract.Token.stringify(value2, language, result);
    return result;
  }
  function encode(tokens) {
    return tokens;
  }
  function attributes(attrs) {
    var key;
    for (key in attrs) attrs[key] = decode(attrs[key]);
    return attrs;
  }
  function capture() {
    var defined = "Prism" in ctx, current = defined ? ctx.Prism : void 0;
    return restore2;
    function restore2() {
      defined ? ctx.Prism = current : delete ctx.Prism, defined = void 0, current = void 0;
    }
  }
} });
var require_bash = __commonJS$1({ "../../node_modules/refractor/lang/bash.js"(exports, module) {
  module.exports = bash;
  bash.displayName = "bash";
  bash.aliases = ["shell"];
  function bash(Prism) {
    (function(Prism2) {
      var envVars = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b", commandAfterHeredoc = { pattern: /(^(["']?)\w+\2)[ \t]+\S.*/, lookbehind: true, alias: "punctuation", inside: null }, insideString = { bash: commandAfterHeredoc, environment: { pattern: RegExp("\\$" + envVars), alias: "constant" }, variable: [{ pattern: /\$?\(\([\s\S]+?\)\)/, greedy: true, inside: { variable: [{ pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: true }, /^\$\(\(/], number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/, operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/, punctuation: /\(\(?|\)\)?|,|;/ } }, { pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/, greedy: true, inside: { variable: /^\$\(|^`|\)$|`$/ } }, { pattern: /\$\{[^}]+\}/, greedy: true, inside: { operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/, punctuation: /[\[\]]/, environment: { pattern: RegExp("(\\{)" + envVars), lookbehind: true, alias: "constant" } } }, /\$(?:\w+|[#?*!@$])/], entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/ };
      Prism2.languages.bash = { shebang: { pattern: /^#!\s*\/.*/, alias: "important" }, comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: true }, "function-name": [{ pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/, lookbehind: true, alias: "function" }, { pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/, alias: "function" }], "for-or-select": { pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/, alias: "variable", lookbehind: true }, "assign-left": { pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/, inside: { environment: { pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + envVars), lookbehind: true, alias: "constant" } }, alias: "variable", lookbehind: true }, string: [{ pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/, lookbehind: true, greedy: true, inside: insideString }, { pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/, lookbehind: true, greedy: true, inside: { bash: commandAfterHeredoc } }, { pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/, lookbehind: true, greedy: true, inside: insideString }, { pattern: /(^|[^$\\])'[^']*'/, lookbehind: true, greedy: true }, { pattern: /\$'(?:[^'\\]|\\[\s\S])*'/, greedy: true, inside: { entity: insideString.entity } }], environment: { pattern: RegExp("\\$?" + envVars), alias: "constant" }, variable: insideString.variable, function: { pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/, lookbehind: true }, keyword: { pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/, lookbehind: true }, builtin: { pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/, lookbehind: true, alias: "class-name" }, boolean: { pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/, lookbehind: true }, "file-descriptor": { pattern: /\B&\d\b/, alias: "important" }, operator: { pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/, inside: { "file-descriptor": { pattern: /^\d/, alias: "important" } } }, punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/, number: { pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/, lookbehind: true } }, commandAfterHeredoc.inside = Prism2.languages.bash;
      for (var toBeCopied = ["comment", "function-name", "for-or-select", "assign-left", "string", "environment", "function", "keyword", "builtin", "boolean", "file-descriptor", "operator", "punctuation", "number"], inside = insideString.variable[1].inside, i2 = 0; i2 < toBeCopied.length; i2++) inside[toBeCopied[i2]] = Prism2.languages.bash[toBeCopied[i2]];
      Prism2.languages.shell = Prism2.languages.bash;
    })(Prism);
  }
} });
var require_js_extras = __commonJS$1({ "../../node_modules/refractor/lang/js-extras.js"(exports, module) {
  module.exports = jsExtras;
  jsExtras.displayName = "jsExtras";
  jsExtras.aliases = [];
  function jsExtras(Prism) {
    (function(Prism2) {
      Prism2.languages.insertBefore("javascript", "function-variable", { "method-variable": { pattern: RegExp("(\\.\\s*)" + Prism2.languages.javascript["function-variable"].pattern.source), lookbehind: true, alias: ["function-variable", "method", "function", "property-access"] } }), Prism2.languages.insertBefore("javascript", "function", { method: { pattern: RegExp("(\\.\\s*)" + Prism2.languages.javascript.function.source), lookbehind: true, alias: ["function", "property-access"] } }), Prism2.languages.insertBefore("javascript", "constant", { "known-class-name": [{ pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/, alias: "class-name" }, { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: "class-name" }] });
      function withId(source, flags) {
        return RegExp(source.replace(/<ID>/g, function() {
          return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
        }), flags);
      }
      Prism2.languages.insertBefore("javascript", "keyword", { imports: { pattern: withId(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source), lookbehind: true, inside: Prism2.languages.javascript }, exports: { pattern: withId(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source), lookbehind: true, inside: Prism2.languages.javascript } }), Prism2.languages.javascript.keyword.unshift({ pattern: /\b(?:as|default|export|from|import)\b/, alias: "module" }, { pattern: /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/, alias: "control-flow" }, { pattern: /\bnull\b/, alias: ["null", "nil"] }, { pattern: /\bundefined\b/, alias: "nil" }), Prism2.languages.insertBefore("javascript", "operator", { spread: { pattern: /\.{3}/, alias: "operator" }, arrow: { pattern: /=>/, alias: "operator" } }), Prism2.languages.insertBefore("javascript", "punctuation", { "property-access": { pattern: withId(/(\.\s*)#?<ID>/.source), lookbehind: true }, "maybe-class-name": { pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/, lookbehind: true }, dom: { pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/, alias: "variable" }, console: { pattern: /\bconsole(?=\s*\.)/, alias: "class-name" } });
      for (var maybeClassNameTokens = ["function", "function-variable", "method", "method-variable", "property-access"], i2 = 0; i2 < maybeClassNameTokens.length; i2++) {
        var token = maybeClassNameTokens[i2], value2 = Prism2.languages.javascript[token];
        Prism2.util.type(value2) === "RegExp" && (value2 = Prism2.languages.javascript[token] = { pattern: value2 });
        var inside = value2.inside || {};
        value2.inside = inside, inside["maybe-class-name"] = /^[A-Z][\s\S]*/;
      }
    })(Prism);
  }
} });
var require_json = __commonJS$1({ "../../node_modules/refractor/lang/json.js"(exports, module) {
  module.exports = json;
  json.displayName = "json";
  json.aliases = ["webmanifest"];
  function json(Prism) {
    Prism.languages.json = { property: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, lookbehind: true, greedy: true }, string: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, lookbehind: true, greedy: true }, comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: true }, number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i, punctuation: /[{}[\],]/, operator: /:/, boolean: /\b(?:false|true)\b/, null: { pattern: /\bnull\b/, alias: "keyword" } }, Prism.languages.webmanifest = Prism.languages.json;
  }
} });
var require_graphql = __commonJS$1({ "../../node_modules/refractor/lang/graphql.js"(exports, module) {
  module.exports = graphql;
  graphql.displayName = "graphql";
  graphql.aliases = [];
  function graphql(Prism) {
    Prism.languages.graphql = { comment: /#.*/, description: { pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i, greedy: true, alias: "string", inside: { "language-markdown": { pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/, lookbehind: true, inside: Prism.languages.markdown } } }, string: { pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/, greedy: true }, number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i, boolean: /\b(?:false|true)\b/, variable: /\$[a-z_]\w*/i, directive: { pattern: /@[a-z_]\w*/i, alias: "function" }, "attr-name": { pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i, greedy: true }, "atom-input": { pattern: /\b[A-Z]\w*Input\b/, alias: "class-name" }, scalar: /\b(?:Boolean|Float|ID|Int|String)\b/, constant: /\b[A-Z][A-Z_\d]*\b/, "class-name": { pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/, lookbehind: true }, fragment: { pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/, lookbehind: true, alias: "function" }, "definition-mutation": { pattern: /(\bmutation\s+)[a-zA-Z_]\w*/, lookbehind: true, alias: "function" }, "definition-query": { pattern: /(\bquery\s+)[a-zA-Z_]\w*/, lookbehind: true, alias: "function" }, keyword: /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/, operator: /[!=|&]|\.{3}/, "property-query": /\w+(?=\s*\()/, object: /\w+(?=\s*\{)/, punctuation: /[!(){}\[\]:=,]/, property: /\w+/ }, Prism.hooks.add("after-tokenize", function(env) {
      if (env.language !== "graphql") return;
      var validTokens = env.tokens.filter(function(token) {
        return typeof token != "string" && token.type !== "comment" && token.type !== "scalar";
      }), currentIndex = 0;
      function getToken(offset2) {
        return validTokens[currentIndex + offset2];
      }
      function isTokenType(types, offset2) {
        offset2 = offset2 || 0;
        for (var i22 = 0; i22 < types.length; i22++) {
          var token = getToken(i22 + offset2);
          if (!token || token.type !== types[i22]) return false;
        }
        return true;
      }
      function findClosingBracket(open, close) {
        for (var stackHeight = 1, i22 = currentIndex; i22 < validTokens.length; i22++) {
          var token = validTokens[i22], content = token.content;
          if (token.type === "punctuation" && typeof content == "string") {
            if (open.test(content)) stackHeight++;
            else if (close.test(content) && (stackHeight--, stackHeight === 0)) return i22;
          }
        }
        return -1;
      }
      function addAlias(token, alias) {
        var aliases = token.alias;
        aliases ? Array.isArray(aliases) || (token.alias = aliases = [aliases]) : token.alias = aliases = [], aliases.push(alias);
      }
      for (; currentIndex < validTokens.length; ) {
        var startToken = validTokens[currentIndex++];
        if (startToken.type === "keyword" && startToken.content === "mutation") {
          var inputVariables = [];
          if (isTokenType(["definition-mutation", "punctuation"]) && getToken(1).content === "(") {
            currentIndex += 2;
            var definitionEnd = findClosingBracket(/^\($/, /^\)$/);
            if (definitionEnd === -1) continue;
            for (; currentIndex < definitionEnd; currentIndex++) {
              var t = getToken(0);
              t.type === "variable" && (addAlias(t, "variable-input"), inputVariables.push(t.content));
            }
            currentIndex = definitionEnd + 1;
          }
          if (isTokenType(["punctuation", "property-query"]) && getToken(0).content === "{" && (currentIndex++, addAlias(getToken(0), "property-mutation"), inputVariables.length > 0)) {
            var mutationEnd = findClosingBracket(/^\{$/, /^\}$/);
            if (mutationEnd === -1) continue;
            for (var i2 = currentIndex; i2 < mutationEnd; i2++) {
              var varToken = validTokens[i2];
              varToken.type === "variable" && inputVariables.indexOf(varToken.content) >= 0 && addAlias(varToken, "variable-input");
            }
          }
        }
      }
    });
  }
} });
function setRef$1(ref, value2) {
  if (typeof ref === "function") {
    ref(value2);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value2;
  }
}
function composeRefs$1(...refs) {
  return (node) => refs.forEach((ref) => setRef$1(ref, node));
}
var Slot = reactExports.forwardRef((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  const childrenArray = reactExports.Children.toArray(children);
  const slottable = childrenArray.find(isSlottable);
  if (slottable) {
    const newElement = slottable.props.children;
    const newChildren = childrenArray.map((child) => {
      if (child === slottable) {
        if (reactExports.Children.count(newElement) > 1) return reactExports.Children.only(null);
        return reactExports.isValidElement(newElement) ? newElement.props.children : null;
      } else {
        return child;
      }
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(SlotClone, { ...slotProps, ref: forwardedRef, children: reactExports.isValidElement(newElement) ? reactExports.cloneElement(newElement, void 0, newChildren) : null });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SlotClone, { ...slotProps, ref: forwardedRef, children });
});
Slot.displayName = "Slot";
var SlotClone = reactExports.forwardRef((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  if (reactExports.isValidElement(children)) {
    const childrenRef = getElementRef$1(children);
    return reactExports.cloneElement(children, {
      ...mergeProps(slotProps, children.props),
      // @ts-ignore
      ref: forwardedRef ? composeRefs$1(forwardedRef, childrenRef) : childrenRef
    });
  }
  return reactExports.Children.count(children) > 1 ? reactExports.Children.only(null) : null;
});
SlotClone.displayName = "SlotClone";
var Slottable = ({ children }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
};
function isSlottable(child) {
  return reactExports.isValidElement(child) && child.type === Slottable;
}
function mergeProps(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          childPropValue(...args);
          slotPropValue(...args);
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef$1(element) {
  var _a, _b;
  let getter = (_a = Object.getOwnPropertyDescriptor(element.props, "ref")) == null ? void 0 : _a.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = (_b = Object.getOwnPropertyDescriptor(element, "ref")) == null ? void 0 : _b.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}
const { logger: logger$2 } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
const { global: global$4 } = __STORYBOOK_MODULE_GLOBAL__;
var import_jsx = __toESM$1(require_jsx()), jsx_default = import_jsx.default;
var import_bash = __toESM$1(require_bash()), bash_default = import_bash.default;
var import_css = __toESM$1(require_css()), css_default = import_css.default;
var import_js_extras = __toESM$1(require_js_extras()), js_extras_default = import_js_extras.default;
var import_json = __toESM$1(require_json()), json_default = import_json.default;
var import_graphql = __toESM$1(require_graphql()), graphql_default = import_graphql.default;
var import_markup = __toESM$1(require_markup()), markup_default = import_markup.default;
var import_markdown = __toESM$1(require_markdown()), markdown_default = import_markdown.default;
var import_yaml = __toESM$1(require_yaml()), yaml_default = import_yaml.default;
var import_tsx = __toESM$1(require_tsx()), tsx_default = import_tsx.default;
var import_typescript = __toESM$1(require_typescript()), typescript_default = import_typescript.default;
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded), key, i2;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) key = sourceSymbolKeys[i2], !(excluded.indexOf(key) >= 0) && Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]);
  }
  return target;
}
function _arrayLikeToArray(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) arr2[i2] = arr[i2];
  return arr2;
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol < "u" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o2, minLen) {
  if (o2) {
    if (typeof o2 == "string") return _arrayLikeToArray(o2, minLen);
    var n2 = Object.prototype.toString.call(o2).slice(8, -1);
    if (n2 === "Object" && o2.constructor && (n2 = o2.constructor.name), n2 === "Map" || n2 === "Set") return Array.from(o2);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2)) return _arrayLikeToArray(o2, minLen);
  }
}
function _nonIterableSpread() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _typeof(o2) {
  "@babel/helpers - typeof";
  return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o22) {
    return typeof o22;
  } : function(o22) {
    return o22 && typeof Symbol == "function" && o22.constructor === Symbol && o22 !== Symbol.prototype ? "symbol" : typeof o22;
  }, _typeof(o2);
}
function toPrimitive(t, r2) {
  if (_typeof(t) != "object" || !t) return t;
  var e2 = t[Symbol.toPrimitive];
  if (e2 !== void 0) {
    var i2 = e2.call(t, r2 || "default");
    if (_typeof(i2) != "object") return i2;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r2 === "string" ? String : Number)(t);
}
function toPropertyKey(t) {
  var i2 = toPrimitive(t, "string");
  return _typeof(i2) == "symbol" ? i2 : i2 + "";
}
function _defineProperty(obj, key, value2) {
  return key = toPropertyKey(key), key in obj ? Object.defineProperty(obj, key, { value: value2, enumerable: true, configurable: true, writable: true }) : obj[key] = value2, obj;
}
function ownKeys(object2, enumerableOnly) {
  var keys2 = Object.keys(object2);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object2);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object2, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    i2 % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function powerSetPermutations(arr) {
  var arrLength = arr.length;
  if (arrLength === 0 || arrLength === 1) return arr;
  if (arrLength === 2) return [arr[0], arr[1], "".concat(arr[0], ".").concat(arr[1]), "".concat(arr[1], ".").concat(arr[0])];
  if (arrLength === 3) return [arr[0], arr[1], arr[2], "".concat(arr[0], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[2]), "".concat(arr[2], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[0])];
  if (arrLength >= 4) return [arr[0], arr[1], arr[2], arr[3], "".concat(arr[0], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[3]), "".concat(arr[3], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[3]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[3]), "".concat(arr[0], ".").concat(arr[3], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[3], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[3], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[3], ".").concat(arr[2]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[3], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[3], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[3], ".").concat(arr[1], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[3], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[2], ".").concat(arr[3]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[3], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[1], ".").concat(arr[3]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[3], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[3], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[3], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[2], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[3], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[0], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[3], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[3], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[3], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[1], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[3], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[0], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[3], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[3], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[3], ".").concat(arr[1], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[0], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[3], ".").concat(arr[0], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[1], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[3], ".").concat(arr[1], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[2], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[2], ".").concat(arr[1], ".").concat(arr[0])];
}
var classNameCombinations = {};
function getClassNameCombinations(classNames) {
  if (classNames.length === 0 || classNames.length === 1) return classNames;
  var key = classNames.join(".");
  return classNameCombinations[key] || (classNameCombinations[key] = powerSetPermutations(classNames)), classNameCombinations[key];
}
function createStyleObject(classNames) {
  var elementStyle = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, stylesheet = arguments.length > 2 ? arguments[2] : void 0, nonTokenClassNames = classNames.filter(function(className) {
    return className !== "token";
  }), classNamesCombinations = getClassNameCombinations(nonTokenClassNames);
  return classNamesCombinations.reduce(function(styleObject, className) {
    return _objectSpread(_objectSpread({}, styleObject), stylesheet[className]);
  }, elementStyle);
}
function createClassNameString(classNames) {
  return classNames.join(" ");
}
function createChildren(stylesheet, useInlineStyles) {
  var childrenCount = 0;
  return function(children) {
    return childrenCount += 1, children.map(function(child, i2) {
      return createElement({ node: child, stylesheet, useInlineStyles, key: "code-segment-".concat(childrenCount, "-").concat(i2) });
    });
  };
}
function createElement(_ref) {
  var node = _ref.node, stylesheet = _ref.stylesheet, _ref$style = _ref.style, style = _ref$style === void 0 ? {} : _ref$style, useInlineStyles = _ref.useInlineStyles, key = _ref.key, properties = node.properties, type = node.type, TagName = node.tagName, value2 = node.value;
  if (type === "text") return value2;
  if (TagName) {
    var childrenCreator = createChildren(stylesheet, useInlineStyles), props;
    if (!useInlineStyles) props = _objectSpread(_objectSpread({}, properties), {}, { className: createClassNameString(properties.className) });
    else {
      var allStylesheetSelectors = Object.keys(stylesheet).reduce(function(classes, selector) {
        return selector.split(".").forEach(function(className2) {
          classes.includes(className2) || classes.push(className2);
        }), classes;
      }, []), startingClassName = properties.className && properties.className.includes("token") ? ["token"] : [], className = properties.className && startingClassName.concat(properties.className.filter(function(className2) {
        return !allStylesheetSelectors.includes(className2);
      }));
      props = _objectSpread(_objectSpread({}, properties), {}, { className: createClassNameString(className) || void 0, style: createStyleObject(properties.className, Object.assign({}, properties.style, style), stylesheet) });
    }
    var children = childrenCreator(node.children);
    return React.createElement(TagName, _extends({ key }, props), children);
  }
}
var checkForListedLanguage_default = function(astGenerator, language) {
  var langs = astGenerator.listLanguages();
  return langs.indexOf(language) !== -1;
};
var _excluded$2 = ["language", "children", "style", "customStyle", "codeTagProps", "useInlineStyles", "showLineNumbers", "showInlineLineNumbers", "startingLineNumber", "lineNumberContainerStyle", "lineNumberStyle", "wrapLines", "wrapLongLines", "lineProps", "renderer", "PreTag", "CodeTag", "code", "astGenerator"];
function ownKeys2(object2, enumerableOnly) {
  var keys2 = Object.keys(object2);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object2);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object2, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread2(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    i2 % 2 ? ownKeys2(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys2(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var newLineRegex = /\n/g;
function getNewLines(str) {
  return str.match(newLineRegex);
}
function getAllLineNumbers(_ref) {
  var lines = _ref.lines, startingLineNumber = _ref.startingLineNumber, style = _ref.style;
  return lines.map(function(_2, i2) {
    var number = i2 + startingLineNumber;
    return React.createElement("span", { key: "line-".concat(i2), className: "react-syntax-highlighter-line-number", style: typeof style == "function" ? style(number) : style }, "".concat(number, `
`));
  });
}
function AllLineNumbers(_ref2) {
  var codeString = _ref2.codeString, codeStyle = _ref2.codeStyle, _ref2$containerStyle = _ref2.containerStyle, containerStyle = _ref2$containerStyle === void 0 ? { float: "left", paddingRight: "10px" } : _ref2$containerStyle, _ref2$numberStyle = _ref2.numberStyle, numberStyle = _ref2$numberStyle === void 0 ? {} : _ref2$numberStyle, startingLineNumber = _ref2.startingLineNumber;
  return React.createElement("code", { style: Object.assign({}, codeStyle, containerStyle) }, getAllLineNumbers({ lines: codeString.replace(/\n$/, "").split(`
`), style: numberStyle, startingLineNumber }));
}
function getEmWidthOfNumber(num) {
  return "".concat(num.toString().length, ".25em");
}
function getInlineLineNumber(lineNumber, inlineLineNumberStyle) {
  return { type: "element", tagName: "span", properties: { key: "line-number--".concat(lineNumber), className: ["comment", "linenumber", "react-syntax-highlighter-line-number"], style: inlineLineNumberStyle }, children: [{ type: "text", value: lineNumber }] };
}
function assembleLineNumberStyles(lineNumberStyle, lineNumber, largestLineNumber) {
  var defaultLineNumberStyle = { display: "inline-block", minWidth: getEmWidthOfNumber(largestLineNumber), paddingRight: "1em", textAlign: "right", userSelect: "none" }, customLineNumberStyle = typeof lineNumberStyle == "function" ? lineNumberStyle(lineNumber) : lineNumberStyle, assembledStyle = _objectSpread2(_objectSpread2({}, defaultLineNumberStyle), customLineNumberStyle);
  return assembledStyle;
}
function createLineElement(_ref3) {
  var children = _ref3.children, lineNumber = _ref3.lineNumber, lineNumberStyle = _ref3.lineNumberStyle, largestLineNumber = _ref3.largestLineNumber, showInlineLineNumbers = _ref3.showInlineLineNumbers, _ref3$lineProps = _ref3.lineProps, lineProps = _ref3$lineProps === void 0 ? {} : _ref3$lineProps, _ref3$className = _ref3.className, className = _ref3$className === void 0 ? [] : _ref3$className, showLineNumbers = _ref3.showLineNumbers, wrapLongLines = _ref3.wrapLongLines, properties = typeof lineProps == "function" ? lineProps(lineNumber) : lineProps;
  if (properties.className = className, lineNumber && showInlineLineNumbers) {
    var inlineLineNumberStyle = assembleLineNumberStyles(lineNumberStyle, lineNumber, largestLineNumber);
    children.unshift(getInlineLineNumber(lineNumber, inlineLineNumberStyle));
  }
  return wrapLongLines & showLineNumbers && (properties.style = _objectSpread2(_objectSpread2({}, properties.style), {}, { display: "flex" })), { type: "element", tagName: "span", properties, children };
}
function flattenCodeTree(tree) {
  for (var className = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], newTree = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], i2 = 0; i2 < tree.length; i2++) {
    var node = tree[i2];
    if (node.type === "text") newTree.push(createLineElement({ children: [node], className: _toConsumableArray(new Set(className)) }));
    else if (node.children) {
      var classNames = className.concat(node.properties.className);
      flattenCodeTree(node.children, classNames).forEach(function(i22) {
        return newTree.push(i22);
      });
    }
  }
  return newTree;
}
function processLines(codeTree, wrapLines, lineProps, showLineNumbers, showInlineLineNumbers, startingLineNumber, largestLineNumber, lineNumberStyle, wrapLongLines) {
  var _ref4, tree = flattenCodeTree(codeTree.value), newTree = [], lastLineBreakIndex = -1, index3 = 0;
  function createWrappedLine(children2, lineNumber2) {
    var className = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return createLineElement({ children: children2, lineNumber: lineNumber2, lineNumberStyle, largestLineNumber, showInlineLineNumbers, lineProps, className, showLineNumbers, wrapLongLines });
  }
  function createUnwrappedLine(children2, lineNumber2) {
    if (showLineNumbers && lineNumber2 && showInlineLineNumbers) {
      var inlineLineNumberStyle = assembleLineNumberStyles(lineNumberStyle, lineNumber2, largestLineNumber);
      children2.unshift(getInlineLineNumber(lineNumber2, inlineLineNumberStyle));
    }
    return children2;
  }
  function createLine(children2, lineNumber2) {
    var className = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return wrapLines || className.length > 0 ? createWrappedLine(children2, lineNumber2, className) : createUnwrappedLine(children2, lineNumber2);
  }
  for (var _loop = function() {
    var node = tree[index3], value2 = node.children[0].value, newLines = getNewLines(value2);
    if (newLines) {
      var splitValue = value2.split(`
`);
      splitValue.forEach(function(text, i2) {
        var lineNumber2 = showLineNumbers && newTree.length + startingLineNumber, newChild = { type: "text", value: "".concat(text, `
`) };
        if (i2 === 0) {
          var _children = tree.slice(lastLineBreakIndex + 1, index3).concat(createLineElement({ children: [newChild], className: node.properties.className })), _line = createLine(_children, lineNumber2);
          newTree.push(_line);
        } else if (i2 === splitValue.length - 1) {
          var stringChild = tree[index3 + 1] && tree[index3 + 1].children && tree[index3 + 1].children[0], lastLineInPreviousSpan = { type: "text", value: "".concat(text) };
          if (stringChild) {
            var newElem = createLineElement({ children: [lastLineInPreviousSpan], className: node.properties.className });
            tree.splice(index3 + 1, 0, newElem);
          } else {
            var _children2 = [lastLineInPreviousSpan], _line2 = createLine(_children2, lineNumber2, node.properties.className);
            newTree.push(_line2);
          }
        } else {
          var _children3 = [newChild], _line3 = createLine(_children3, lineNumber2, node.properties.className);
          newTree.push(_line3);
        }
      }), lastLineBreakIndex = index3;
    }
    index3++;
  }; index3 < tree.length; ) _loop();
  if (lastLineBreakIndex !== tree.length - 1) {
    var children = tree.slice(lastLineBreakIndex + 1, tree.length);
    if (children && children.length) {
      var lineNumber = showLineNumbers && newTree.length + startingLineNumber, line = createLine(children, lineNumber);
      newTree.push(line);
    }
  }
  return wrapLines ? newTree : (_ref4 = []).concat.apply(_ref4, newTree);
}
function defaultRenderer(_ref5) {
  var rows = _ref5.rows, stylesheet = _ref5.stylesheet, useInlineStyles = _ref5.useInlineStyles;
  return rows.map(function(node, i2) {
    return createElement({ node, stylesheet, useInlineStyles, key: "code-segement".concat(i2) });
  });
}
function isHighlightJs(astGenerator) {
  return astGenerator && typeof astGenerator.highlightAuto < "u";
}
function getCodeTree(_ref6) {
  var astGenerator = _ref6.astGenerator, language = _ref6.language, code = _ref6.code, defaultCodeValue = _ref6.defaultCodeValue;
  if (isHighlightJs(astGenerator)) {
    var hasLanguage = checkForListedLanguage_default(astGenerator, language);
    return language === "text" ? { value: defaultCodeValue, language: "text" } : hasLanguage ? astGenerator.highlight(language, code) : astGenerator.highlightAuto(code);
  }
  try {
    return language && language !== "text" ? { value: astGenerator.highlight(code, language) } : { value: defaultCodeValue };
  } catch {
    return { value: defaultCodeValue };
  }
}
function highlight_default(defaultAstGenerator, defaultStyle) {
  return function(_ref7) {
    var language = _ref7.language, children = _ref7.children, _ref7$style = _ref7.style, style = _ref7$style === void 0 ? defaultStyle : _ref7$style, _ref7$customStyle = _ref7.customStyle, customStyle = _ref7$customStyle === void 0 ? {} : _ref7$customStyle, _ref7$codeTagProps = _ref7.codeTagProps, codeTagProps = _ref7$codeTagProps === void 0 ? { className: language ? "language-".concat(language) : void 0, style: _objectSpread2(_objectSpread2({}, style['code[class*="language-"]']), style['code[class*="language-'.concat(language, '"]')]) } : _ref7$codeTagProps, _ref7$useInlineStyles = _ref7.useInlineStyles, useInlineStyles = _ref7$useInlineStyles === void 0 ? true : _ref7$useInlineStyles, _ref7$showLineNumbers = _ref7.showLineNumbers, showLineNumbers = _ref7$showLineNumbers === void 0 ? false : _ref7$showLineNumbers, _ref7$showInlineLineN = _ref7.showInlineLineNumbers, showInlineLineNumbers = _ref7$showInlineLineN === void 0 ? true : _ref7$showInlineLineN, _ref7$startingLineNum = _ref7.startingLineNumber, startingLineNumber = _ref7$startingLineNum === void 0 ? 1 : _ref7$startingLineNum, lineNumberContainerStyle = _ref7.lineNumberContainerStyle, _ref7$lineNumberStyle = _ref7.lineNumberStyle, lineNumberStyle = _ref7$lineNumberStyle === void 0 ? {} : _ref7$lineNumberStyle, wrapLines = _ref7.wrapLines, _ref7$wrapLongLines = _ref7.wrapLongLines, wrapLongLines = _ref7$wrapLongLines === void 0 ? false : _ref7$wrapLongLines, _ref7$lineProps = _ref7.lineProps, lineProps = _ref7$lineProps === void 0 ? {} : _ref7$lineProps, renderer = _ref7.renderer, _ref7$PreTag = _ref7.PreTag, PreTag = _ref7$PreTag === void 0 ? "pre" : _ref7$PreTag, _ref7$CodeTag = _ref7.CodeTag, CodeTag = _ref7$CodeTag === void 0 ? "code" : _ref7$CodeTag, _ref7$code = _ref7.code, code = _ref7$code === void 0 ? (Array.isArray(children) ? children[0] : children) || "" : _ref7$code, astGenerator = _ref7.astGenerator, rest = _objectWithoutProperties(_ref7, _excluded$2);
    astGenerator = astGenerator || defaultAstGenerator;
    var allLineNumbers = showLineNumbers ? React.createElement(AllLineNumbers, { containerStyle: lineNumberContainerStyle, codeStyle: codeTagProps.style || {}, numberStyle: lineNumberStyle, startingLineNumber, codeString: code }) : null, defaultPreStyle = style.hljs || style['pre[class*="language-"]'] || { backgroundColor: "#fff" }, generatorClassName = isHighlightJs(astGenerator) ? "hljs" : "prismjs", preProps = useInlineStyles ? Object.assign({}, rest, { style: Object.assign({}, defaultPreStyle, customStyle) }) : Object.assign({}, rest, { className: rest.className ? "".concat(generatorClassName, " ").concat(rest.className) : generatorClassName, style: Object.assign({}, customStyle) });
    if (wrapLongLines ? codeTagProps.style = _objectSpread2(_objectSpread2({}, codeTagProps.style), {}, { whiteSpace: "pre-wrap" }) : codeTagProps.style = _objectSpread2(_objectSpread2({}, codeTagProps.style), {}, { whiteSpace: "pre" }), !astGenerator) return React.createElement(PreTag, preProps, allLineNumbers, React.createElement(CodeTag, codeTagProps, code));
    (wrapLines === void 0 && renderer || wrapLongLines) && (wrapLines = true), renderer = renderer || defaultRenderer;
    var defaultCodeValue = [{ type: "text", value: code }], codeTree = getCodeTree({ astGenerator, language, code, defaultCodeValue });
    codeTree.language === null && (codeTree.value = defaultCodeValue);
    var largestLineNumber = codeTree.value.length + startingLineNumber, rows = processLines(codeTree, wrapLines, lineProps, showLineNumbers, showInlineLineNumbers, startingLineNumber, largestLineNumber, lineNumberStyle, wrapLongLines);
    return React.createElement(PreTag, preProps, React.createElement(CodeTag, codeTagProps, !showInlineLineNumbers && allLineNumbers, renderer({ rows, stylesheet: style, useInlineStyles })));
  };
}
var import_core = __toESM$1(require_core()), SyntaxHighlighter = highlight_default(import_core.default, {});
SyntaxHighlighter.registerLanguage = function(_2, language) {
  return import_core.default.register(language);
};
SyntaxHighlighter.alias = function(name, aliases) {
  return import_core.default.alias(name, aliases);
};
var prism_light_default = SyntaxHighlighter;
var Container$1 = newStyled.div(({ theme }) => ({ position: "absolute", bottom: 0, right: 0, maxWidth: "100%", display: "flex", background: theme.background.content, zIndex: 1 })), ActionButton = newStyled.button(({ theme }) => ({ margin: 0, border: "0 none", padding: "4px 10px", cursor: "pointer", display: "flex", alignItems: "center", color: theme.color.defaultText, background: theme.background.content, fontSize: 12, lineHeight: "16px", fontFamily: theme.typography.fonts.base, fontWeight: theme.typography.weight.bold, borderTop: `1px solid ${theme.appBorderColor}`, borderLeft: `1px solid ${theme.appBorderColor}`, marginLeft: -1, borderRadius: "4px 0 0 0", "&:not(:last-child)": { borderRight: `1px solid ${theme.appBorderColor}` }, "& + *": { borderLeft: `1px solid ${theme.appBorderColor}`, borderRadius: 0 }, "&:focus": { boxShadow: `${theme.color.secondary} 0 -3px 0 0 inset`, outline: "0 none" } }), ({ disabled }) => disabled && { cursor: "not-allowed", opacity: 0.5 });
ActionButton.displayName = "ActionButton";
var ActionBar = ({ actionItems, ...props }) => React.createElement(Container$1, { ...props }, actionItems.map(({ title, className, onClick, disabled }, index3) => React.createElement(ActionButton, { key: index3, className, onClick, disabled }, title)));
var $8927f6f2acc4f386$var$NODES = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"], $8927f6f2acc4f386$export$250ffa63cdc0d034 = $8927f6f2acc4f386$var$NODES.reduce((primitive, node) => {
  let Node2 = reactExports.forwardRef((props, forwardedRef) => {
    let { asChild, ...primitiveProps } = props, Comp2 = asChild ? Slot : node;
    return reactExports.useEffect(() => {
      window[Symbol.for("radix-ui")] = true;
    }, []), reactExports.createElement(Comp2, _extends({}, primitiveProps, { ref: forwardedRef }));
  });
  return Node2.displayName = `Primitive.${node}`, { ...primitive, [node]: Node2 };
}, {});
function $6ed0406888f73fc4$var$setRef(ref, value2) {
  typeof ref == "function" ? ref(value2) : ref != null && (ref.current = value2);
}
function $6ed0406888f73fc4$export$43e446d32b3d21af(...refs) {
  return (node) => refs.forEach((ref) => $6ed0406888f73fc4$var$setRef(ref, node));
}
function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...refs) {
  return reactExports.useCallback($6ed0406888f73fc4$export$43e446d32b3d21af(...refs), refs);
}
var $9f79659886946c16$export$e5c5a5f917a5871c = (globalThis == null ? void 0 : globalThis.document) ? reactExports.useLayoutEffect : () => {
};
function $fe963b355347cc68$export$3e6543de14f8614f(initialState, machine) {
  return reactExports.useReducer((state, event) => {
    let nextState = machine[state][event];
    return nextState ?? state;
  }, initialState);
}
var $921a889cee6df7e8$export$99c2b779aa4e8b8b = (props) => {
  let { present, children } = props, presence = $921a889cee6df7e8$var$usePresence(present), child = typeof children == "function" ? children({ present: presence.isPresent }) : reactExports.Children.only(children), ref = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(presence.ref, child.ref);
  return typeof children == "function" || presence.isPresent ? reactExports.cloneElement(child, { ref }) : null;
};
$921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName = "Presence";
function $921a889cee6df7e8$var$usePresence(present) {
  let [node1, setNode] = reactExports.useState(), stylesRef = reactExports.useRef({}), prevPresentRef = reactExports.useRef(present), prevAnimationNameRef = reactExports.useRef("none"), initialState = present ? "mounted" : "unmounted", [state, send] = $fe963b355347cc68$export$3e6543de14f8614f(initialState, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
  return reactExports.useEffect(() => {
    let currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
    prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
  }, [state]), $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    let styles2 = stylesRef.current, wasPresent = prevPresentRef.current;
    if (wasPresent !== present) {
      let prevAnimationName = prevAnimationNameRef.current, currentAnimationName = $921a889cee6df7e8$var$getAnimationName(styles2);
      present ? send("MOUNT") : currentAnimationName === "none" || (styles2 == null ? void 0 : styles2.display) === "none" ? send("UNMOUNT") : send(wasPresent && prevAnimationName !== currentAnimationName ? "ANIMATION_OUT" : "UNMOUNT"), prevPresentRef.current = present;
    }
  }, [present, send]), $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (node1) {
      let handleAnimationEnd = (event) => {
        let isCurrentAnimation = $921a889cee6df7e8$var$getAnimationName(stylesRef.current).includes(event.animationName);
        event.target === node1 && isCurrentAnimation && reactDomExports.flushSync(() => send("ANIMATION_END"));
      }, handleAnimationStart = (event) => {
        event.target === node1 && (prevAnimationNameRef.current = $921a889cee6df7e8$var$getAnimationName(stylesRef.current));
      };
      return node1.addEventListener("animationstart", handleAnimationStart), node1.addEventListener("animationcancel", handleAnimationEnd), node1.addEventListener("animationend", handleAnimationEnd), () => {
        node1.removeEventListener("animationstart", handleAnimationStart), node1.removeEventListener("animationcancel", handleAnimationEnd), node1.removeEventListener("animationend", handleAnimationEnd);
      };
    } else send("ANIMATION_END");
  }, [node1, send]), { isPresent: ["mounted", "unmountSuspended"].includes(state), ref: reactExports.useCallback((node) => {
    node && (stylesRef.current = getComputedStyle(node)), setNode(node);
  }, []) };
}
function $921a889cee6df7e8$var$getAnimationName(styles2) {
  return (styles2 == null ? void 0 : styles2.animationName) || "none";
}
function $c512c27ab02ef895$export$50c7b4e9d9f19c1(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName, defaultContext) {
    let BaseContext = reactExports.createContext(defaultContext), index3 = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    function Provider(props) {
      let { scope, children, ...context } = props, Context = (scope == null ? void 0 : scope[scopeName][index3]) || BaseContext, value2 = reactExports.useMemo(() => context, Object.values(context));
      return reactExports.createElement(Context.Provider, { value: value2 }, children);
    }
    function useContext$1(consumerName, scope) {
      let Context = (scope == null ? void 0 : scope[scopeName][index3]) || BaseContext, context = reactExports.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return Provider.displayName = rootComponentName + "Provider", [Provider, useContext$1];
  }
  let createScope = () => {
    let scopeContexts = defaultContexts.map((defaultContext) => reactExports.createContext(defaultContext));
    return function(scope) {
      let contexts = (scope == null ? void 0 : scope[scopeName]) || scopeContexts;
      return reactExports.useMemo(() => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }), [scope, contexts]);
    };
  };
  return createScope.scopeName = scopeName, [$c512c27ab02ef895$export$fd42f52fd3ae1109, $c512c27ab02ef895$var$composeContextScopes(createScope, ...createContextScopeDeps)];
}
function $c512c27ab02ef895$var$composeContextScopes(...scopes) {
  let baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  let createScope1 = () => {
    let scopeHooks = scopes.map((createScope) => ({ useScope: createScope(), scopeName: createScope.scopeName }));
    return function(overrideScopes) {
      let nextScopes1 = scopeHooks.reduce((nextScopes, { useScope, scopeName }) => {
        let currentScope = useScope(overrideScopes)[`__scope${scopeName}`];
        return { ...nextScopes, ...currentScope };
      }, {});
      return reactExports.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes1 }), [nextScopes1]);
    };
  };
  return createScope1.scopeName = baseScope.scopeName, createScope1;
}
function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(callback) {
  let callbackRef = reactExports.useRef(callback);
  return reactExports.useEffect(() => {
    callbackRef.current = callback;
  }), reactExports.useMemo(() => (...args) => {
    var _callbackRef$current;
    return (_callbackRef$current = callbackRef.current) === null || _callbackRef$current === void 0 ? void 0 : _callbackRef$current.call(callbackRef, ...args);
  }, []);
}
var $f631663db3294ace$var$DirectionContext = reactExports.createContext(void 0);
function $f631663db3294ace$export$b39126d51d94e6f3(localDir) {
  let globalDir = reactExports.useContext($f631663db3294ace$var$DirectionContext);
  return localDir || globalDir || "ltr";
}
function $ae6933e535247d3d$export$7d15b64cf5a3a4c4(value2, [min2, max2]) {
  return Math.min(max2, Math.max(min2, value2));
}
function $e42e1063c40fb3ef$export$b9ecd428b558ff10(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return function(event) {
    if (originalEventHandler == null ? void 0 : originalEventHandler(event), checkForDefaultPrevented === false || !event.defaultPrevented) return ourEventHandler == null ? void 0 : ourEventHandler(event);
  };
}
function $6c2e24571c90391f$export$3e6543de14f8614f(initialState, machine) {
  return reactExports.useReducer((state, event) => {
    let nextState = machine[state][event];
    return nextState ?? state;
  }, initialState);
}
var $57acba87d6e25586$var$SCROLL_AREA_NAME = "ScrollArea", [$57acba87d6e25586$var$createScrollAreaContext, $57acba87d6e25586$export$488468afe3a6f2b1] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($57acba87d6e25586$var$SCROLL_AREA_NAME), [$57acba87d6e25586$var$ScrollAreaProvider, $57acba87d6e25586$var$useScrollAreaContext] = $57acba87d6e25586$var$createScrollAreaContext($57acba87d6e25586$var$SCROLL_AREA_NAME), $57acba87d6e25586$export$ccf8d8d7bbf3c2cc = reactExports.forwardRef((props, forwardedRef) => {
  let { __scopeScrollArea, type = "hover", dir, scrollHideDelay = 600, ...scrollAreaProps } = props, [scrollArea, setScrollArea] = reactExports.useState(null), [viewport2, setViewport] = reactExports.useState(null), [content, setContent] = reactExports.useState(null), [scrollbarX, setScrollbarX] = reactExports.useState(null), [scrollbarY, setScrollbarY] = reactExports.useState(null), [cornerWidth, setCornerWidth] = reactExports.useState(0), [cornerHeight, setCornerHeight] = reactExports.useState(0), [scrollbarXEnabled, setScrollbarXEnabled] = reactExports.useState(false), [scrollbarYEnabled, setScrollbarYEnabled] = reactExports.useState(false), composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, (node) => setScrollArea(node)), direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
  return reactExports.createElement($57acba87d6e25586$var$ScrollAreaProvider, { scope: __scopeScrollArea, type, dir: direction, scrollHideDelay, scrollArea, viewport: viewport2, onViewportChange: setViewport, content, onContentChange: setContent, scrollbarX, onScrollbarXChange: setScrollbarX, scrollbarXEnabled, onScrollbarXEnabledChange: setScrollbarXEnabled, scrollbarY, onScrollbarYChange: setScrollbarY, scrollbarYEnabled, onScrollbarYEnabledChange: setScrollbarYEnabled, onCornerWidthChange: setCornerWidth, onCornerHeightChange: setCornerHeight }, reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({ dir: direction }, scrollAreaProps, { ref: composedRefs, style: { position: "relative", "--radix-scroll-area-corner-width": cornerWidth + "px", "--radix-scroll-area-corner-height": cornerHeight + "px", ...props.style } })));
}), $57acba87d6e25586$var$VIEWPORT_NAME = "ScrollAreaViewport", $57acba87d6e25586$export$a21cbf9f11fca853 = reactExports.forwardRef((props, forwardedRef) => {
  let { __scopeScrollArea, children, ...viewportProps } = props, context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$VIEWPORT_NAME, __scopeScrollArea), ref = reactExports.useRef(null), composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref, context.onViewportChange);
  return reactExports.createElement(reactExports.Fragment, null, reactExports.createElement("style", { dangerouslySetInnerHTML: { __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}" } }), reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({ "data-radix-scroll-area-viewport": "" }, viewportProps, { ref: composedRefs, style: { overflowX: context.scrollbarXEnabled ? "scroll" : "hidden", overflowY: context.scrollbarYEnabled ? "scroll" : "hidden", ...props.style } }), reactExports.createElement("div", { ref: context.onContentChange, style: { minWidth: "100%", display: "table" } }, children)));
}), $57acba87d6e25586$var$SCROLLBAR_NAME = "ScrollAreaScrollbar", $57acba87d6e25586$export$2fabd85d0eba3c57 = reactExports.forwardRef((props, forwardedRef) => {
  let { forceMount, ...scrollbarProps } = props, context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME, props.__scopeScrollArea), { onScrollbarXEnabledChange, onScrollbarYEnabledChange } = context, isHorizontal = props.orientation === "horizontal";
  return reactExports.useEffect(() => (isHorizontal ? onScrollbarXEnabledChange(true) : onScrollbarYEnabledChange(true), () => {
    isHorizontal ? onScrollbarXEnabledChange(false) : onScrollbarYEnabledChange(false);
  }), [isHorizontal, onScrollbarXEnabledChange, onScrollbarYEnabledChange]), context.type === "hover" ? reactExports.createElement($57acba87d6e25586$var$ScrollAreaScrollbarHover, _extends({}, scrollbarProps, { ref: forwardedRef, forceMount })) : context.type === "scroll" ? reactExports.createElement($57acba87d6e25586$var$ScrollAreaScrollbarScroll, _extends({}, scrollbarProps, { ref: forwardedRef, forceMount })) : context.type === "auto" ? reactExports.createElement($57acba87d6e25586$var$ScrollAreaScrollbarAuto, _extends({}, scrollbarProps, { ref: forwardedRef, forceMount })) : context.type === "always" ? reactExports.createElement($57acba87d6e25586$var$ScrollAreaScrollbarVisible, _extends({}, scrollbarProps, { ref: forwardedRef })) : null;
}), $57acba87d6e25586$var$ScrollAreaScrollbarHover = reactExports.forwardRef((props, forwardedRef) => {
  let { forceMount, ...scrollbarProps } = props, context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME, props.__scopeScrollArea), [visible, setVisible] = reactExports.useState(false);
  return reactExports.useEffect(() => {
    let scrollArea = context.scrollArea, hideTimer = 0;
    if (scrollArea) {
      let handlePointerEnter = () => {
        window.clearTimeout(hideTimer), setVisible(true);
      }, handlePointerLeave = () => {
        hideTimer = window.setTimeout(() => setVisible(false), context.scrollHideDelay);
      };
      return scrollArea.addEventListener("pointerenter", handlePointerEnter), scrollArea.addEventListener("pointerleave", handlePointerLeave), () => {
        window.clearTimeout(hideTimer), scrollArea.removeEventListener("pointerenter", handlePointerEnter), scrollArea.removeEventListener("pointerleave", handlePointerLeave);
      };
    }
  }, [context.scrollArea, context.scrollHideDelay]), reactExports.createElement($921a889cee6df7e8$export$99c2b779aa4e8b8b, { present: forceMount || visible }, reactExports.createElement($57acba87d6e25586$var$ScrollAreaScrollbarAuto, _extends({ "data-state": visible ? "visible" : "hidden" }, scrollbarProps, { ref: forwardedRef })));
}), $57acba87d6e25586$var$ScrollAreaScrollbarScroll = reactExports.forwardRef((props, forwardedRef) => {
  let { forceMount, ...scrollbarProps } = props, context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME, props.__scopeScrollArea), isHorizontal = props.orientation === "horizontal", debounceScrollEnd = $57acba87d6e25586$var$useDebounceCallback(() => send("SCROLL_END"), 100), [state, send] = $6c2e24571c90391f$export$3e6543de14f8614f("hidden", { hidden: { SCROLL: "scrolling" }, scrolling: { SCROLL_END: "idle", POINTER_ENTER: "interacting" }, interacting: { SCROLL: "interacting", POINTER_LEAVE: "idle" }, idle: { HIDE: "hidden", SCROLL: "scrolling", POINTER_ENTER: "interacting" } });
  return reactExports.useEffect(() => {
    if (state === "idle") {
      let hideTimer = window.setTimeout(() => send("HIDE"), context.scrollHideDelay);
      return () => window.clearTimeout(hideTimer);
    }
  }, [state, context.scrollHideDelay, send]), reactExports.useEffect(() => {
    let viewport2 = context.viewport, scrollDirection = isHorizontal ? "scrollLeft" : "scrollTop";
    if (viewport2) {
      let prevScrollPos = viewport2[scrollDirection], handleScroll2 = () => {
        let scrollPos = viewport2[scrollDirection];
        prevScrollPos !== scrollPos && (send("SCROLL"), debounceScrollEnd()), prevScrollPos = scrollPos;
      };
      return viewport2.addEventListener("scroll", handleScroll2), () => viewport2.removeEventListener("scroll", handleScroll2);
    }
  }, [context.viewport, isHorizontal, send, debounceScrollEnd]), reactExports.createElement($921a889cee6df7e8$export$99c2b779aa4e8b8b, { present: forceMount || state !== "hidden" }, reactExports.createElement($57acba87d6e25586$var$ScrollAreaScrollbarVisible, _extends({ "data-state": state === "hidden" ? "hidden" : "visible" }, scrollbarProps, { ref: forwardedRef, onPointerEnter: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerEnter, () => send("POINTER_ENTER")), onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerLeave, () => send("POINTER_LEAVE")) })));
}), $57acba87d6e25586$var$ScrollAreaScrollbarAuto = reactExports.forwardRef((props, forwardedRef) => {
  let context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME, props.__scopeScrollArea), { forceMount, ...scrollbarProps } = props, [visible, setVisible] = reactExports.useState(false), isHorizontal = props.orientation === "horizontal", handleResize = $57acba87d6e25586$var$useDebounceCallback(() => {
    if (context.viewport) {
      let isOverflowX = context.viewport.offsetWidth < context.viewport.scrollWidth, isOverflowY = context.viewport.offsetHeight < context.viewport.scrollHeight;
      setVisible(isHorizontal ? isOverflowX : isOverflowY);
    }
  }, 10);
  return $57acba87d6e25586$var$useResizeObserver(context.viewport, handleResize), $57acba87d6e25586$var$useResizeObserver(context.content, handleResize), reactExports.createElement($921a889cee6df7e8$export$99c2b779aa4e8b8b, { present: forceMount || visible }, reactExports.createElement($57acba87d6e25586$var$ScrollAreaScrollbarVisible, _extends({ "data-state": visible ? "visible" : "hidden" }, scrollbarProps, { ref: forwardedRef })));
}), $57acba87d6e25586$var$ScrollAreaScrollbarVisible = reactExports.forwardRef((props, forwardedRef) => {
  let { orientation = "vertical", ...scrollbarProps } = props, context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME, props.__scopeScrollArea), thumbRef = reactExports.useRef(null), pointerOffsetRef = reactExports.useRef(0), [sizes2, setSizes] = reactExports.useState({ content: 0, viewport: 0, scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 } }), thumbRatio = $57acba87d6e25586$var$getThumbRatio(sizes2.viewport, sizes2.content), commonProps = { ...scrollbarProps, sizes: sizes2, onSizesChange: setSizes, hasThumb: thumbRatio > 0 && thumbRatio < 1, onThumbChange: (thumb) => thumbRef.current = thumb, onThumbPointerUp: () => pointerOffsetRef.current = 0, onThumbPointerDown: (pointerPos) => pointerOffsetRef.current = pointerPos };
  function getScrollPosition(pointerPos, dir) {
    return $57acba87d6e25586$var$getScrollPositionFromPointer(pointerPos, pointerOffsetRef.current, sizes2, dir);
  }
  return orientation === "horizontal" ? reactExports.createElement($57acba87d6e25586$var$ScrollAreaScrollbarX, _extends({}, commonProps, { ref: forwardedRef, onThumbPositionChange: () => {
    if (context.viewport && thumbRef.current) {
      let scrollPos = context.viewport.scrollLeft, offset2 = $57acba87d6e25586$var$getThumbOffsetFromScroll(scrollPos, sizes2, context.dir);
      thumbRef.current.style.transform = `translate3d(${offset2}px, 0, 0)`;
    }
  }, onWheelScroll: (scrollPos) => {
    context.viewport && (context.viewport.scrollLeft = scrollPos);
  }, onDragScroll: (pointerPos) => {
    context.viewport && (context.viewport.scrollLeft = getScrollPosition(pointerPos, context.dir));
  } })) : orientation === "vertical" ? reactExports.createElement($57acba87d6e25586$var$ScrollAreaScrollbarY, _extends({}, commonProps, { ref: forwardedRef, onThumbPositionChange: () => {
    if (context.viewport && thumbRef.current) {
      let scrollPos = context.viewport.scrollTop, offset2 = $57acba87d6e25586$var$getThumbOffsetFromScroll(scrollPos, sizes2);
      thumbRef.current.style.transform = `translate3d(0, ${offset2}px, 0)`;
    }
  }, onWheelScroll: (scrollPos) => {
    context.viewport && (context.viewport.scrollTop = scrollPos);
  }, onDragScroll: (pointerPos) => {
    context.viewport && (context.viewport.scrollTop = getScrollPosition(pointerPos));
  } })) : null;
}), $57acba87d6e25586$var$ScrollAreaScrollbarX = reactExports.forwardRef((props, forwardedRef) => {
  let { sizes: sizes2, onSizesChange, ...scrollbarProps } = props, context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME, props.__scopeScrollArea), [computedStyle, setComputedStyle] = reactExports.useState(), ref = reactExports.useRef(null), composeRefs2 = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref, context.onScrollbarXChange);
  return reactExports.useEffect(() => {
    ref.current && setComputedStyle(getComputedStyle(ref.current));
  }, [ref]), reactExports.createElement($57acba87d6e25586$var$ScrollAreaScrollbarImpl, _extends({ "data-orientation": "horizontal" }, scrollbarProps, { ref: composeRefs2, sizes: sizes2, style: { bottom: 0, left: context.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0, right: context.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0, "--radix-scroll-area-thumb-width": $57acba87d6e25586$var$getThumbSize(sizes2) + "px", ...props.style }, onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.x), onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.x), onWheelScroll: (event, maxScrollPos) => {
    if (context.viewport) {
      let scrollPos = context.viewport.scrollLeft + event.deltaX;
      props.onWheelScroll(scrollPos), $57acba87d6e25586$var$isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos) && event.preventDefault();
    }
  }, onResize: () => {
    ref.current && context.viewport && computedStyle && onSizesChange({ content: context.viewport.scrollWidth, viewport: context.viewport.offsetWidth, scrollbar: { size: ref.current.clientWidth, paddingStart: $57acba87d6e25586$var$toInt(computedStyle.paddingLeft), paddingEnd: $57acba87d6e25586$var$toInt(computedStyle.paddingRight) } });
  } }));
}), $57acba87d6e25586$var$ScrollAreaScrollbarY = reactExports.forwardRef((props, forwardedRef) => {
  let { sizes: sizes2, onSizesChange, ...scrollbarProps } = props, context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME, props.__scopeScrollArea), [computedStyle, setComputedStyle] = reactExports.useState(), ref = reactExports.useRef(null), composeRefs2 = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref, context.onScrollbarYChange);
  return reactExports.useEffect(() => {
    ref.current && setComputedStyle(getComputedStyle(ref.current));
  }, [ref]), reactExports.createElement($57acba87d6e25586$var$ScrollAreaScrollbarImpl, _extends({ "data-orientation": "vertical" }, scrollbarProps, { ref: composeRefs2, sizes: sizes2, style: { top: 0, right: context.dir === "ltr" ? 0 : void 0, left: context.dir === "rtl" ? 0 : void 0, bottom: "var(--radix-scroll-area-corner-height)", "--radix-scroll-area-thumb-height": $57acba87d6e25586$var$getThumbSize(sizes2) + "px", ...props.style }, onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.y), onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.y), onWheelScroll: (event, maxScrollPos) => {
    if (context.viewport) {
      let scrollPos = context.viewport.scrollTop + event.deltaY;
      props.onWheelScroll(scrollPos), $57acba87d6e25586$var$isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos) && event.preventDefault();
    }
  }, onResize: () => {
    ref.current && context.viewport && computedStyle && onSizesChange({ content: context.viewport.scrollHeight, viewport: context.viewport.offsetHeight, scrollbar: { size: ref.current.clientHeight, paddingStart: $57acba87d6e25586$var$toInt(computedStyle.paddingTop), paddingEnd: $57acba87d6e25586$var$toInt(computedStyle.paddingBottom) } });
  } }));
}), [$57acba87d6e25586$var$ScrollbarProvider, $57acba87d6e25586$var$useScrollbarContext] = $57acba87d6e25586$var$createScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME), $57acba87d6e25586$var$ScrollAreaScrollbarImpl = reactExports.forwardRef((props, forwardedRef) => {
  let { __scopeScrollArea, sizes: sizes2, hasThumb, onThumbChange, onThumbPointerUp, onThumbPointerDown, onThumbPositionChange, onDragScroll, onWheelScroll, onResize, ...scrollbarProps } = props, context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME, __scopeScrollArea), [scrollbar, setScrollbar] = reactExports.useState(null), composeRefs2 = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, (node) => setScrollbar(node)), rectRef = reactExports.useRef(null), prevWebkitUserSelectRef = reactExports.useRef(""), viewport2 = context.viewport, maxScrollPos = sizes2.content - sizes2.viewport, handleWheelScroll = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onWheelScroll), handleThumbPositionChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onThumbPositionChange), handleResize = $57acba87d6e25586$var$useDebounceCallback(onResize, 10);
  function handleDragScroll(event) {
    if (rectRef.current) {
      let x2 = event.clientX - rectRef.current.left, y2 = event.clientY - rectRef.current.top;
      onDragScroll({ x: x2, y: y2 });
    }
  }
  return reactExports.useEffect(() => {
    let handleWheel = (event) => {
      let element = event.target;
      (scrollbar == null ? void 0 : scrollbar.contains(element)) && handleWheelScroll(event, maxScrollPos);
    };
    return document.addEventListener("wheel", handleWheel, { passive: false }), () => document.removeEventListener("wheel", handleWheel, { passive: false });
  }, [viewport2, scrollbar, maxScrollPos, handleWheelScroll]), reactExports.useEffect(handleThumbPositionChange, [sizes2, handleThumbPositionChange]), $57acba87d6e25586$var$useResizeObserver(scrollbar, handleResize), $57acba87d6e25586$var$useResizeObserver(context.content, handleResize), reactExports.createElement($57acba87d6e25586$var$ScrollbarProvider, { scope: __scopeScrollArea, scrollbar, hasThumb, onThumbChange: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onThumbChange), onThumbPointerUp: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onThumbPointerUp), onThumbPositionChange: handleThumbPositionChange, onThumbPointerDown: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onThumbPointerDown) }, reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, scrollbarProps, { ref: composeRefs2, style: { position: "absolute", ...scrollbarProps.style }, onPointerDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDown, (event) => {
    event.button === 0 && (event.target.setPointerCapture(event.pointerId), rectRef.current = scrollbar.getBoundingClientRect(), prevWebkitUserSelectRef.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", context.viewport && (context.viewport.style.scrollBehavior = "auto"), handleDragScroll(event));
  }), onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerMove, handleDragScroll), onPointerUp: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerUp, (event) => {
    let element = event.target;
    element.hasPointerCapture(event.pointerId) && element.releasePointerCapture(event.pointerId), document.body.style.webkitUserSelect = prevWebkitUserSelectRef.current, context.viewport && (context.viewport.style.scrollBehavior = ""), rectRef.current = null;
  }) })));
}), $57acba87d6e25586$var$THUMB_NAME = "ScrollAreaThumb", $57acba87d6e25586$export$9fba1154677d7cd2 = reactExports.forwardRef((props, forwardedRef) => {
  let { forceMount, ...thumbProps } = props, scrollbarContext = $57acba87d6e25586$var$useScrollbarContext($57acba87d6e25586$var$THUMB_NAME, props.__scopeScrollArea);
  return reactExports.createElement($921a889cee6df7e8$export$99c2b779aa4e8b8b, { present: forceMount || scrollbarContext.hasThumb }, reactExports.createElement($57acba87d6e25586$var$ScrollAreaThumbImpl, _extends({ ref: forwardedRef }, thumbProps)));
}), $57acba87d6e25586$var$ScrollAreaThumbImpl = reactExports.forwardRef((props, forwardedRef) => {
  let { __scopeScrollArea, style, ...thumbProps } = props, scrollAreaContext = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$THUMB_NAME, __scopeScrollArea), scrollbarContext = $57acba87d6e25586$var$useScrollbarContext($57acba87d6e25586$var$THUMB_NAME, __scopeScrollArea), { onThumbPositionChange } = scrollbarContext, composedRef = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, (node) => scrollbarContext.onThumbChange(node)), removeUnlinkedScrollListenerRef = reactExports.useRef(), debounceScrollEnd = $57acba87d6e25586$var$useDebounceCallback(() => {
    removeUnlinkedScrollListenerRef.current && (removeUnlinkedScrollListenerRef.current(), removeUnlinkedScrollListenerRef.current = void 0);
  }, 100);
  return reactExports.useEffect(() => {
    let viewport2 = scrollAreaContext.viewport;
    if (viewport2) {
      let handleScroll2 = () => {
        if (debounceScrollEnd(), !removeUnlinkedScrollListenerRef.current) {
          let listener = $57acba87d6e25586$var$addUnlinkedScrollListener(viewport2, onThumbPositionChange);
          removeUnlinkedScrollListenerRef.current = listener, onThumbPositionChange();
        }
      };
      return onThumbPositionChange(), viewport2.addEventListener("scroll", handleScroll2), () => viewport2.removeEventListener("scroll", handleScroll2);
    }
  }, [scrollAreaContext.viewport, debounceScrollEnd, onThumbPositionChange]), reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({ "data-state": scrollbarContext.hasThumb ? "visible" : "hidden" }, thumbProps, { ref: composedRef, style: { width: "var(--radix-scroll-area-thumb-width)", height: "var(--radix-scroll-area-thumb-height)", ...style }, onPointerDownCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownCapture, (event) => {
    let thumbRect = event.target.getBoundingClientRect(), x2 = event.clientX - thumbRect.left, y2 = event.clientY - thumbRect.top;
    scrollbarContext.onThumbPointerDown({ x: x2, y: y2 });
  }), onPointerUp: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerUp, scrollbarContext.onThumbPointerUp) }));
}), $57acba87d6e25586$var$CORNER_NAME = "ScrollAreaCorner", $57acba87d6e25586$export$56969d565df7cc4b = reactExports.forwardRef((props, forwardedRef) => {
  let context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$CORNER_NAME, props.__scopeScrollArea), hasBothScrollbarsVisible = !!(context.scrollbarX && context.scrollbarY);
  return context.type !== "scroll" && hasBothScrollbarsVisible ? reactExports.createElement($57acba87d6e25586$var$ScrollAreaCornerImpl, _extends({}, props, { ref: forwardedRef })) : null;
}), $57acba87d6e25586$var$ScrollAreaCornerImpl = reactExports.forwardRef((props, forwardedRef) => {
  let { __scopeScrollArea, ...cornerProps } = props, context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$CORNER_NAME, __scopeScrollArea), [width1, setWidth] = reactExports.useState(0), [height1, setHeight] = reactExports.useState(0), hasSize = !!(width1 && height1);
  return $57acba87d6e25586$var$useResizeObserver(context.scrollbarX, () => {
    var _context$scrollbarX;
    let height = ((_context$scrollbarX = context.scrollbarX) === null || _context$scrollbarX === void 0 ? void 0 : _context$scrollbarX.offsetHeight) || 0;
    context.onCornerHeightChange(height), setHeight(height);
  }), $57acba87d6e25586$var$useResizeObserver(context.scrollbarY, () => {
    var _context$scrollbarY;
    let width = ((_context$scrollbarY = context.scrollbarY) === null || _context$scrollbarY === void 0 ? void 0 : _context$scrollbarY.offsetWidth) || 0;
    context.onCornerWidthChange(width), setWidth(width);
  }), hasSize ? reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, cornerProps, { ref: forwardedRef, style: { width: width1, height: height1, position: "absolute", right: context.dir === "ltr" ? 0 : void 0, left: context.dir === "rtl" ? 0 : void 0, bottom: 0, ...props.style } })) : null;
});
function $57acba87d6e25586$var$toInt(value2) {
  return value2 ? parseInt(value2, 10) : 0;
}
function $57acba87d6e25586$var$getThumbRatio(viewportSize, contentSize) {
  let ratio = viewportSize / contentSize;
  return isNaN(ratio) ? 0 : ratio;
}
function $57acba87d6e25586$var$getThumbSize(sizes2) {
  let ratio = $57acba87d6e25586$var$getThumbRatio(sizes2.viewport, sizes2.content), scrollbarPadding = sizes2.scrollbar.paddingStart + sizes2.scrollbar.paddingEnd, thumbSize = (sizes2.scrollbar.size - scrollbarPadding) * ratio;
  return Math.max(thumbSize, 18);
}
function $57acba87d6e25586$var$getScrollPositionFromPointer(pointerPos, pointerOffset, sizes2, dir = "ltr") {
  let thumbSizePx = $57acba87d6e25586$var$getThumbSize(sizes2), thumbCenter = thumbSizePx / 2, offset2 = pointerOffset || thumbCenter, thumbOffsetFromEnd = thumbSizePx - offset2, minPointerPos = sizes2.scrollbar.paddingStart + offset2, maxPointerPos = sizes2.scrollbar.size - sizes2.scrollbar.paddingEnd - thumbOffsetFromEnd, maxScrollPos = sizes2.content - sizes2.viewport, scrollRange = dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
  return $57acba87d6e25586$var$linearScale([minPointerPos, maxPointerPos], scrollRange)(pointerPos);
}
function $57acba87d6e25586$var$getThumbOffsetFromScroll(scrollPos, sizes2, dir = "ltr") {
  let thumbSizePx = $57acba87d6e25586$var$getThumbSize(sizes2), scrollbarPadding = sizes2.scrollbar.paddingStart + sizes2.scrollbar.paddingEnd, scrollbar = sizes2.scrollbar.size - scrollbarPadding, maxScrollPos = sizes2.content - sizes2.viewport, maxThumbPos = scrollbar - thumbSizePx, scrollClampRange = dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0], scrollWithoutMomentum = $ae6933e535247d3d$export$7d15b64cf5a3a4c4(scrollPos, scrollClampRange);
  return $57acba87d6e25586$var$linearScale([0, maxScrollPos], [0, maxThumbPos])(scrollWithoutMomentum);
}
function $57acba87d6e25586$var$linearScale(input, output) {
  return (value2) => {
    if (input[0] === input[1] || output[0] === output[1]) return output[0];
    let ratio = (output[1] - output[0]) / (input[1] - input[0]);
    return output[0] + ratio * (value2 - input[0]);
  };
}
function $57acba87d6e25586$var$isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos) {
  return scrollPos > 0 && scrollPos < maxScrollPos;
}
var $57acba87d6e25586$var$addUnlinkedScrollListener = (node, handler = () => {
}) => {
  let prevPosition = { left: node.scrollLeft, top: node.scrollTop }, rAF = 0;
  return function loop() {
    let position = { left: node.scrollLeft, top: node.scrollTop }, isHorizontalScroll = prevPosition.left !== position.left, isVerticalScroll = prevPosition.top !== position.top;
    (isHorizontalScroll || isVerticalScroll) && handler(), prevPosition = position, rAF = window.requestAnimationFrame(loop);
  }(), () => window.cancelAnimationFrame(rAF);
};
function $57acba87d6e25586$var$useDebounceCallback(callback, delay) {
  let handleCallback = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(callback), debounceTimerRef = reactExports.useRef(0);
  return reactExports.useEffect(() => () => window.clearTimeout(debounceTimerRef.current), []), reactExports.useCallback(() => {
    window.clearTimeout(debounceTimerRef.current), debounceTimerRef.current = window.setTimeout(handleCallback, delay);
  }, [handleCallback, delay]);
}
function $57acba87d6e25586$var$useResizeObserver(element, onResize) {
  let handleResize = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onResize);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    let rAF = 0;
    if (element) {
      let resizeObserver = new ResizeObserver(() => {
        cancelAnimationFrame(rAF), rAF = window.requestAnimationFrame(handleResize);
      });
      return resizeObserver.observe(element), () => {
        window.cancelAnimationFrame(rAF), resizeObserver.unobserve(element);
      };
    }
  }, [element, handleResize]);
}
var $57acba87d6e25586$export$be92b6f5f03c0fe9 = $57acba87d6e25586$export$ccf8d8d7bbf3c2cc, $57acba87d6e25586$export$d5c6c08dc2d3ca7 = $57acba87d6e25586$export$a21cbf9f11fca853, $57acba87d6e25586$export$9a4e88b92edfce6b = $57acba87d6e25586$export$2fabd85d0eba3c57, $57acba87d6e25586$export$6521433ed15a34db = $57acba87d6e25586$export$9fba1154677d7cd2, $57acba87d6e25586$export$ac61190d9fc311a9 = $57acba87d6e25586$export$56969d565df7cc4b;
var ScrollAreaRoot = newStyled($57acba87d6e25586$export$be92b6f5f03c0fe9)(({ scrollbarsize, offset: offset2 }) => ({ width: "100%", height: "100%", overflow: "hidden", "--scrollbar-size": `${scrollbarsize + offset2}px`, "--radix-scroll-area-thumb-width": `${scrollbarsize}px` })), ScrollAreaViewport = newStyled($57acba87d6e25586$export$d5c6c08dc2d3ca7)({ width: "100%", height: "100%" }), ScrollAreaScrollbar = newStyled($57acba87d6e25586$export$9a4e88b92edfce6b)(({ offset: offset2, horizontal, vertical }) => ({ display: "flex", userSelect: "none", touchAction: "none", background: "transparent", transition: "all 0.2s ease-out", borderRadius: "var(--scrollbar-size)", '&[data-orientation="vertical"]': { width: "var(--scrollbar-size)", paddingRight: offset2, marginTop: offset2, marginBottom: horizontal === "true" && vertical === "true" ? 0 : offset2 }, '&[data-orientation="horizontal"]': { flexDirection: "column", height: "var(--scrollbar-size)", paddingBottom: offset2, marginLeft: offset2, marginRight: horizontal === "true" && vertical === "true" ? 0 : offset2 } })), ScrollAreaThumb = newStyled($57acba87d6e25586$export$6521433ed15a34db)(({ theme }) => ({ flex: 1, background: theme.textMutedColor, opacity: 0.5, borderRadius: "var(--scrollbar-size)", position: "relative", transition: "opacity 0.2s ease-out", "&:hover": { opacity: 0.8 }, "::before": { content: '""', position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "100%", height: "100%" } })), ScrollArea = reactExports.forwardRef(({ children, horizontal = false, vertical = false, offset: offset2 = 2, scrollbarSize = 6, className }, ref) => React.createElement(ScrollAreaRoot, { scrollbarsize: scrollbarSize, offset: offset2, className }, React.createElement(ScrollAreaViewport, { ref }, children), horizontal && React.createElement(ScrollAreaScrollbar, { orientation: "horizontal", offset: offset2, horizontal: horizontal.toString(), vertical: vertical.toString() }, React.createElement(ScrollAreaThumb, null)), vertical && React.createElement(ScrollAreaScrollbar, { orientation: "vertical", offset: offset2, horizontal: horizontal.toString(), vertical: vertical.toString() }, React.createElement(ScrollAreaThumb, null)), horizontal && vertical && React.createElement($57acba87d6e25586$export$ac61190d9fc311a9, null)));
ScrollArea.displayName = "ScrollArea";
var { navigator: navigator$1, document: document2$3, window: globalWindow$1 } = global$4, supportedLanguages = { jsextra: js_extras_default, jsx: jsx_default, json: json_default, yml: yaml_default, md: markdown_default, bash: bash_default, css: css_default, html: markup_default, tsx: tsx_default, typescript: typescript_default, graphql: graphql_default };
Object.entries(supportedLanguages).forEach(([key, val]) => {
  prism_light_default.registerLanguage(key, val);
});
var themedSyntax = memoize$1(2)((theme) => Object.entries(theme.code || {}).reduce((acc, [key, val]) => ({ ...acc, [`* .${key}`]: val }), {})), copyToClipboard = createCopyToClipboardFunction();
function createCopyToClipboardFunction() {
  return (navigator$1 == null ? void 0 : navigator$1.clipboard) ? (text) => navigator$1.clipboard.writeText(text) : async (text) => {
    let tmp = document2$3.createElement("TEXTAREA"), focus2 = document2$3.activeElement;
    tmp.value = text, document2$3.body.appendChild(tmp), tmp.select(), document2$3.execCommand("copy"), document2$3.body.removeChild(tmp), focus2.focus();
  };
}
var Wrapper$3 = newStyled.div(({ theme }) => ({ position: "relative", overflow: "hidden", color: theme.color.defaultText }), ({ theme, bordered }) => bordered ? { border: `1px solid ${theme.appBorderColor}`, borderRadius: theme.borderRadius, background: theme.background.content } : {}, ({ showLineNumbers }) => showLineNumbers ? { ".react-syntax-highlighter-line-number::before": { content: "attr(data-line-number)" } } : {}), UnstyledScroller = ({ children, className }) => React.createElement(ScrollArea, { horizontal: true, vertical: true, className }, children), Scroller = newStyled(UnstyledScroller)({ position: "relative" }, ({ theme }) => themedSyntax(theme)), Pre$1 = newStyled.pre(({ theme, padded }) => ({ display: "flex", justifyContent: "flex-start", margin: 0, padding: padded ? theme.layoutMargin : 0 })), Code$1 = newStyled.div(({ theme }) => ({ flex: 1, paddingLeft: 2, paddingRight: theme.layoutMargin, opacity: 1, fontFamily: theme.typography.fonts.mono })), processLineNumber = (row) => {
  let children = [...row.children], lineNumberNode = children[0], lineNumber = lineNumberNode.children[0].value, processedLineNumberNode = { ...lineNumberNode, children: [], properties: { ...lineNumberNode.properties, "data-line-number": lineNumber, style: { ...lineNumberNode.properties.style, userSelect: "auto" } } };
  return children[0] = processedLineNumberNode, { ...row, children };
}, defaultRenderer2 = ({ rows, stylesheet, useInlineStyles }) => rows.map((node, i2) => createElement({ node: processLineNumber(node), stylesheet, useInlineStyles, key: `code-segement${i2}` })), wrapRenderer = (renderer, showLineNumbers) => showLineNumbers ? renderer ? ({ rows, ...rest }) => renderer({ rows: rows.map((row) => processLineNumber(row)), ...rest }) : defaultRenderer2 : renderer, SyntaxHighlighter2$1 = ({ children, language = "jsx", copyable = false, bordered = false, padded = false, format: format2 = true, formatter = null, className = null, showLineNumbers = false, ...rest }) => {
  if (typeof children != "string" || !children.trim()) return null;
  let [highlightableCode, setHighlightableCode] = reactExports.useState("");
  reactExports.useEffect(() => {
    formatter ? formatter(format2, children).then(setHighlightableCode) : setHighlightableCode(children.trim());
  }, [children, format2, formatter]);
  let [copied, setCopied] = reactExports.useState(false), onClick = reactExports.useCallback((e2) => {
    e2.preventDefault(), copyToClipboard(highlightableCode).then(() => {
      setCopied(true), globalWindow$1.setTimeout(() => setCopied(false), 1500);
    }).catch(logger$2.error);
  }, [highlightableCode]), renderer = wrapRenderer(rest.renderer, showLineNumbers);
  return React.createElement(Wrapper$3, { bordered, padded, showLineNumbers, className }, React.createElement(Scroller, null, React.createElement(prism_light_default, { padded: padded || bordered, language, showLineNumbers, showInlineLineNumbers: showLineNumbers, useInlineStyles: false, PreTag: Pre$1, CodeTag: Code$1, lineNumberContainerStyle: {}, ...rest, renderer }, highlightableCode)), copyable ? React.createElement(ActionBar, { actionItems: [{ title: copied ? "Copied" : "Copy", onClick }] }) : null);
};
SyntaxHighlighter2$1.registerLanguage = (...args) => prism_light_default.registerLanguage(...args);
var syntaxhighlighter_default = SyntaxHighlighter2$1;
const { global: global$3 } = __STORYBOOK_MODULE_GLOBAL__;
var require_react_fast_compare = __commonJS$1({ "../../node_modules/react-fast-compare/index.js"(exports, module) {
  var hasElementType = typeof Element < "u", hasMap = typeof Map == "function", hasSet = typeof Set == "function", hasArrayBuffer = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
  function equal(a2, b2) {
    if (a2 === b2) return true;
    if (a2 && b2 && typeof a2 == "object" && typeof b2 == "object") {
      if (a2.constructor !== b2.constructor) return false;
      var length, i2, keys2;
      if (Array.isArray(a2)) {
        if (length = a2.length, length != b2.length) return false;
        for (i2 = length; i2-- !== 0; ) if (!equal(a2[i2], b2[i2])) return false;
        return true;
      }
      var it2;
      if (hasMap && a2 instanceof Map && b2 instanceof Map) {
        if (a2.size !== b2.size) return false;
        for (it2 = a2.entries(); !(i2 = it2.next()).done; ) if (!b2.has(i2.value[0])) return false;
        for (it2 = a2.entries(); !(i2 = it2.next()).done; ) if (!equal(i2.value[1], b2.get(i2.value[0]))) return false;
        return true;
      }
      if (hasSet && a2 instanceof Set && b2 instanceof Set) {
        if (a2.size !== b2.size) return false;
        for (it2 = a2.entries(); !(i2 = it2.next()).done; ) if (!b2.has(i2.value[0])) return false;
        return true;
      }
      if (hasArrayBuffer && ArrayBuffer.isView(a2) && ArrayBuffer.isView(b2)) {
        if (length = a2.length, length != b2.length) return false;
        for (i2 = length; i2-- !== 0; ) if (a2[i2] !== b2[i2]) return false;
        return true;
      }
      if (a2.constructor === RegExp) return a2.source === b2.source && a2.flags === b2.flags;
      if (a2.valueOf !== Object.prototype.valueOf && typeof a2.valueOf == "function" && typeof b2.valueOf == "function") return a2.valueOf() === b2.valueOf();
      if (a2.toString !== Object.prototype.toString && typeof a2.toString == "function" && typeof b2.toString == "function") return a2.toString() === b2.toString();
      if (keys2 = Object.keys(a2), length = keys2.length, length !== Object.keys(b2).length) return false;
      for (i2 = length; i2-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(b2, keys2[i2])) return false;
      if (hasElementType && a2 instanceof Element) return false;
      for (i2 = length; i2-- !== 0; ) if (!((keys2[i2] === "_owner" || keys2[i2] === "__v" || keys2[i2] === "__o") && a2.$$typeof) && !equal(a2[keys2[i2]], b2[keys2[i2]])) return false;
      return true;
    }
    return a2 !== a2 && b2 !== b2;
  }
  module.exports = function(a2, b2) {
    try {
      return equal(a2, b2);
    } catch (error) {
      if ((error.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), false;
      throw error;
    }
  };
} });
var fromEntries = function(entries) {
  return entries.reduce(function(acc, _ref) {
    var key = _ref[0], value2 = _ref[1];
    return acc[key] = value2, acc;
  }, {});
}, useIsomorphicLayoutEffect$1 = typeof window < "u" && window.document && window.document.createElement ? reactExports.useLayoutEffect : reactExports.useEffect;
var top = "top", bottom = "bottom", right = "right", left = "left", auto = "auto", basePlacements = [top, bottom, right, left], start = "start", end = "end", clippingParents = "clippingParents", viewport = "viewport", popper = "popper", reference = "reference", variationPlacements = basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []), placements = [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []), beforeRead = "beforeRead", read = "read", afterRead = "afterRead", beforeMain = "beforeMain", main = "main", afterMain = "afterMain", beforeWrite = "beforeWrite", write = "write", afterWrite = "afterWrite", modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}
function getWindow(node) {
  if (node == null) return window;
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument && ownerDocument.defaultView || window;
  }
  return node;
}
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot > "u") return false;
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {}, attributes = state.attributes[name] || {}, element = state.elements[name];
    !isHTMLElement(element) || !getNodeName(element) || (Object.assign(element.style, style), Object.keys(attributes).forEach(function(name2) {
      var value2 = attributes[name2];
      value2 === false ? element.removeAttribute(name2) : element.setAttribute(name2, value2 === true ? "" : value2);
    }));
  });
}
function effect(_ref2) {
  var state = _ref2.state, initialStyles = { popper: { position: state.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(state.elements.popper.style, initialStyles.popper), state.styles = initialStyles, state.elements.arrow && Object.assign(state.elements.arrow.style, initialStyles.arrow), function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name], attributes = state.attributes[name] || {}, styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]), style = styleProperties.reduce(function(style2, property) {
        return style2[property] = "", style2;
      }, {});
      !isHTMLElement(element) || !getNodeName(element) || (Object.assign(element.style, style), Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      }));
    });
  };
}
var applyStyles_default = { name: "applyStyles", enabled: true, phase: "write", fn: applyStyles, effect, requires: ["computeStyles"] };
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
var max = Math.max, min = Math.min, round = Math.round;
function getUAString() {
  var uaData = navigator.userAgentData;
  return uaData != null && uaData.brands && Array.isArray(uaData.brands) ? uaData.brands.map(function(item) {
    return item.brand + "/" + item.version;
  }).join(" ") : navigator.userAgent;
}
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  includeScale === void 0 && (includeScale = false), isFixedStrategy === void 0 && (isFixedStrategy = false);
  var clientRect = element.getBoundingClientRect(), scaleX = 1, scaleY = 1;
  includeScale && isHTMLElement(element) && (scaleX = element.offsetWidth > 0 && round(clientRect.width) / element.offsetWidth || 1, scaleY = element.offsetHeight > 0 && round(clientRect.height) / element.offsetHeight || 1);
  var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport, addVisualOffsets = !isLayoutViewport() && isFixedStrategy, x2 = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX, y2 = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY, width = clientRect.width / scaleX, height = clientRect.height / scaleY;
  return { width, height, top: y2, right: x2 + width, bottom: y2 + height, left: x2, x: x2, y: y2 };
}
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element), width = element.offsetWidth, height = element.offsetHeight;
  return Math.abs(clientRect.width - width) <= 1 && (width = clientRect.width), Math.abs(clientRect.height - height) <= 1 && (height = clientRect.height), { x: element.offsetLeft, y: element.offsetTop, width, height };
}
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) return true;
  if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) return true;
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}
function getParentNode(element) {
  return getNodeName(element) === "html" ? element : element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
}
function getTrueOffsetParent(element) {
  return !isHTMLElement(element) || getComputedStyle$1(element).position === "fixed" ? null : element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString()), isIE2 = /Trident/i.test(getUAString());
  if (isIE2 && isHTMLElement(element)) {
    var elementCss = getComputedStyle$1(element);
    if (elementCss.position === "fixed") return null;
  }
  var currentNode = getParentNode(element);
  for (isShadowRoot(currentNode) && (currentNode = currentNode.host); isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0; ) {
    var css = getComputedStyle$1(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") return currentNode;
    currentNode = currentNode.parentNode;
  }
  return null;
}
function getOffsetParent(element) {
  for (var window2 = getWindow(element), offsetParent = getTrueOffsetParent(element); offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === "static"; ) offsetParent = getTrueOffsetParent(offsetParent);
  return offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle$1(offsetParent).position === "static") ? window2 : offsetParent || getContainingBlock(element) || window2;
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
function within(min2, value2, max2) {
  return max(min2, min(value2, max2));
}
function withinMaxClamp(min2, value2, max2) {
  var v2 = within(min2, value2, max2);
  return v2 > max2 ? max2 : v2;
}
function getFreshSideObject() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value2, keys2) {
  return keys2.reduce(function(hashMap, key) {
    return hashMap[key] = value2, hashMap;
  }, {});
}
var toPaddingObject = function(padding, state) {
  return padding = typeof padding == "function" ? padding(Object.assign({}, state.rects, { placement: state.placement })) : padding, mergePaddingObject(typeof padding != "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$, state = _ref.state, name = _ref.name, options = _ref.options, arrowElement = state.elements.arrow, popperOffsets2 = state.modifiersData.popperOffsets, basePlacement = getBasePlacement(state.placement), axis = getMainAxisFromPlacement(basePlacement), isVertical = [left, right].indexOf(basePlacement) >= 0, len = isVertical ? "height" : "width";
  if (!(!arrowElement || !popperOffsets2)) {
    var paddingObject = toPaddingObject(options.padding, state), arrowRect = getLayoutRect(arrowElement), minProp = axis === "y" ? top : left, maxProp = axis === "y" ? bottom : right, endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len], startDiff = popperOffsets2[axis] - state.rects.reference[axis], arrowOffsetParent = getOffsetParent(arrowElement), clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0, centerToReference = endDiff / 2 - startDiff / 2, min2 = paddingObject[minProp], max2 = clientSize - arrowRect[len] - paddingObject[maxProp], center = clientSize / 2 - arrowRect[len] / 2 + centerToReference, offset2 = within(min2, center, max2), axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
  }
}
function effect2(_ref2) {
  var state = _ref2.state, options = _ref2.options, _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  arrowElement != null && (typeof arrowElement == "string" && (arrowElement = state.elements.popper.querySelector(arrowElement), !arrowElement) || contains(state.elements.popper, arrowElement) && (state.elements.arrow = arrowElement));
}
var arrow_default = { name: "arrow", enabled: true, phase: "main", fn: arrow, effect: effect2, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function getVariation(placement) {
  return placement.split("-")[1];
}
var unsetSides = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function roundOffsetsByDPR(_ref, win) {
  var x2 = _ref.x, y2 = _ref.y, dpr = win.devicePixelRatio || 1;
  return { x: round(x2 * dpr) / dpr || 0, y: round(y2 * dpr) / dpr || 0 };
}
function mapToStyles(_ref2) {
  var _Object$assign2, popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed, _offsets$x = offsets.x, x2 = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y2 = _offsets$y === void 0 ? 0 : _offsets$y, _ref3 = typeof roundOffsets == "function" ? roundOffsets({ x: x2, y: y2 }) : { x: x2, y: y2 };
  x2 = _ref3.x, y2 = _ref3.y;
  var hasX = offsets.hasOwnProperty("x"), hasY = offsets.hasOwnProperty("y"), sideX = left, sideY = top, win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2), heightProp = "clientHeight", widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2) && (offsetParent = getDocumentElement(popper2), getComputedStyle$1(offsetParent).position !== "static" && position === "absolute" && (heightProp = "scrollHeight", widthProp = "scrollWidth")), offsetParent = offsetParent, placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
      y2 -= offsetY - popperRect.height, y2 *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
      x2 -= offsetX - popperRect.width, x2 *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({ position }, adaptive && unsetSides), _ref4 = roundOffsets === true ? roundOffsetsByDPR({ x: x2, y: y2 }, getWindow(popper2)) : { x: x2, y: y2 };
  if (x2 = _ref4.x, y2 = _ref4.y, gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x2 + "px, " + y2 + "px)" : "translate3d(" + x2 + "px, " + y2 + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y2 + "px" : "", _Object$assign2[sideX] = hasX ? x2 + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options, _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets, commonStyles = { placement: getBasePlacement(state.placement), variation: getVariation(state.placement), popper: state.elements.popper, popperRect: state.rects.popper, gpuAcceleration, isFixed: state.options.strategy === "fixed" };
  state.modifiersData.popperOffsets != null && (state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, { offsets: state.modifiersData.popperOffsets, position: state.options.strategy, adaptive, roundOffsets })))), state.modifiersData.arrow != null && (state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, { offsets: state.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets })))), state.attributes.popper = Object.assign({}, state.attributes.popper, { "data-popper-placement": state.placement });
}
var computeStyles_default = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: computeStyles, data: {} };
var passive = { passive: true };
function effect3(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options, _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize, window2 = getWindow(state.elements.popper), scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  return scroll && scrollParents.forEach(function(scrollParent) {
    scrollParent.addEventListener("scroll", instance.update, passive);
  }), resize && window2.addEventListener("resize", instance.update, passive), function() {
    scroll && scrollParents.forEach(function(scrollParent) {
      scrollParent.removeEventListener("scroll", instance.update, passive);
    }), resize && window2.removeEventListener("resize", instance.update, passive);
  };
}
var eventListeners_default = { name: "eventListeners", enabled: true, phase: "write", fn: function() {
}, effect: effect3, data: {} };
var hash = { left: "right", right: "left", bottom: "top", top: "bottom" };
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}
var hash2 = { start: "end", end: "start" };
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash2[matched];
  });
}
function getWindowScroll(node) {
  var win = getWindow(node), scrollLeft = win.pageXOffset, scrollTop = win.pageYOffset;
  return { scrollLeft, scrollTop };
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getViewportRect(element, strategy) {
  var win = getWindow(element), html = getDocumentElement(element), visualViewport = win.visualViewport, width = html.clientWidth, height = html.clientHeight, x2 = 0, y2 = 0;
  if (visualViewport) {
    width = visualViewport.width, height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    (layoutViewport || !layoutViewport && strategy === "fixed") && (x2 = visualViewport.offsetLeft, y2 = visualViewport.offsetTop);
  }
  return { width, height, x: x2 + getWindowScrollBarX(element), y: y2 };
}
function getDocumentRect(element) {
  var _element$ownerDocumen, html = getDocumentElement(element), winScroll = getWindowScroll(element), body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body, width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0), height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0), x2 = -winScroll.scrollLeft + getWindowScrollBarX(element), y2 = -winScroll.scrollTop;
  return getComputedStyle$1(body || html).direction === "rtl" && (x2 += max(html.clientWidth, body ? body.clientWidth : 0) - width), { width, height, x: x2, y: y2 };
}
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle$1(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function getScrollParent(node) {
  return ["html", "body", "#document"].indexOf(getNodeName(node)) >= 0 ? node.ownerDocument.body : isHTMLElement(node) && isScrollParent(node) ? node : getScrollParent(getParentNode(node));
}
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  list === void 0 && (list = []);
  var scrollParent = getScrollParent(element), isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body), win = getWindow(scrollParent), target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent, updatedList = list.concat(target);
  return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
}
function rectToClientRect(rect) {
  return Object.assign({}, rect, { left: rect.x, top: rect.y, right: rect.x + rect.width, bottom: rect.y + rect.height });
}
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  return rect.top = rect.top + element.clientTop, rect.left = rect.left + element.clientLeft, rect.bottom = rect.top + element.clientHeight, rect.right = rect.left + element.clientWidth, rect.width = element.clientWidth, rect.height = element.clientHeight, rect.x = rect.left, rect.y = rect.top, rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element)), canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle$1(element).position) >= 0, clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  return isElement(clipperElement) ? clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  }) : [];
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary), clippingParents2 = [].concat(mainClippingParents, [rootBoundary]), firstClippingParent = clippingParents2[0], clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    return accRect.top = max(rect.top, accRect.top), accRect.right = min(rect.right, accRect.right), accRect.bottom = min(rect.bottom, accRect.bottom), accRect.left = max(rect.left, accRect.left), accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  return clippingRect.width = clippingRect.right - clippingRect.left, clippingRect.height = clippingRect.bottom - clippingRect.top, clippingRect.x = clippingRect.left, clippingRect.y = clippingRect.top, clippingRect;
}
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement, basePlacement = placement ? getBasePlacement(placement) : null, variation = placement ? getVariation(placement) : null, commonX = reference2.x + reference2.width / 2 - element.width / 2, commonY = reference2.y + reference2.height / 2 - element.height / 2, offsets;
  switch (basePlacement) {
    case top:
      offsets = { x: commonX, y: reference2.y - element.height };
      break;
    case bottom:
      offsets = { x: commonX, y: reference2.y + reference2.height };
      break;
    case right:
      offsets = { x: reference2.x + reference2.width, y: commonY };
      break;
    case left:
      offsets = { x: reference2.x - element.width, y: commonY };
      break;
    default:
      offsets = { x: reference2.x, y: reference2.y };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
    }
  }
  return offsets;
}
function detectOverflow(state, options) {
  options === void 0 && (options = {});
  var _options2 = options, _options$placement = _options2.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options2.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options2.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options2.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options2.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options2.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options2.padding, padding = _options$padding === void 0 ? 0 : _options$padding, paddingObject = mergePaddingObject(typeof padding != "number" ? padding : expandToHashMap(padding, basePlacements)), altContext = elementContext === popper ? reference : popper, popperRect = state.rects.popper, element = state.elements[altBoundary ? altContext : elementContext], clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy), referenceClientRect = getBoundingClientRect(state.elements.reference), popperOffsets2 = computeOffsets({ reference: referenceClientRect, element: popperRect, strategy: "absolute", placement }), popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2)), elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect, overflowOffsets = { top: clippingClientRect.top - elementClientRect.top + paddingObject.top, bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom, left: clippingClientRect.left - elementClientRect.left + paddingObject.left, right: elementClientRect.right - clippingClientRect.right + paddingObject.right }, offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1, axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
function computeAutoPlacement(state, options) {
  options === void 0 && (options = {});
  var _options2 = options, placement = _options2.placement, boundary = _options2.boundary, rootBoundary = _options2.rootBoundary, padding = _options2.padding, flipVariations = _options2.flipVariations, _options$allowedAutoP = _options2.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP, variation = getVariation(placement), placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements, allowedPlacements = placements2.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  allowedPlacements.length === 0 && (allowedPlacements = placements2);
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    return acc[placement2] = detectOverflow(state, { placement: placement2, boundary, rootBoundary, padding })[getBasePlacement(placement2)], acc;
  }, {});
  return Object.keys(overflows).sort(function(a2, b2) {
    return overflows[a2] - overflows[b2];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) return [];
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (!state.modifiersData[name]._skip) {
    for (var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements, preferredPlacement = state.options.placement, basePlacement = getBasePlacement(preferredPlacement), isBasePlacement = basePlacement === preferredPlacement, fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement)), placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
      return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, { placement: placement2, boundary, rootBoundary, padding, flipVariations, allowedAutoPlacements }) : placement2);
    }, []), referenceRect = state.rects.reference, popperRect = state.rects.popper, checksMap = /* @__PURE__ */ new Map(), makeFallbackChecks = true, firstFittingPlacement = placements2[0], i2 = 0; i2 < placements2.length; i2++) {
      var placement = placements2[i2], _basePlacement = getBasePlacement(placement), isStartVariation = getVariation(placement) === start, isVertical = [top, bottom].indexOf(_basePlacement) >= 0, len = isVertical ? "width" : "height", overflow = detectOverflow(state, { placement, boundary, rootBoundary, altBoundary, padding }), mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
      referenceRect[len] > popperRect[len] && (mainVariationSide = getOppositePlacement(mainVariationSide));
      var altVariationSide = getOppositePlacement(mainVariationSide), checks = [];
      if (checkMainAxis && checks.push(overflow[_basePlacement] <= 0), checkAltAxis && checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0), checks.every(function(check) {
        return check;
      })) {
        firstFittingPlacement = placement, makeFallbackChecks = false;
        break;
      }
      checksMap.set(placement, checks);
    }
    if (makeFallbackChecks) for (var numberOfChecks = flipVariations ? 3 : 1, _loop = function(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) return checks2.slice(0, _i2).every(function(check) {
          return check;
        });
      });
      if (fittingPlacement) return firstFittingPlacement = fittingPlacement, "break";
    }, _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break") break;
    }
    state.placement !== firstFittingPlacement && (state.modifiersData[name]._skip = true, state.placement = firstFittingPlacement, state.reset = true);
  }
}
var flip_default = { name: "flip", enabled: true, phase: "main", fn: flip, requiresIfExists: ["offset"], data: { _skip: false } };
function getSideOffsets(overflow, rect, preventedOffsets) {
  return preventedOffsets === void 0 && (preventedOffsets = { x: 0, y: 0 }), { top: overflow.top - rect.height - preventedOffsets.y, right: overflow.right - rect.width + preventedOffsets.x, bottom: overflow.bottom - rect.height + preventedOffsets.y, left: overflow.left - rect.width - preventedOffsets.x };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name, referenceRect = state.rects.reference, popperRect = state.rects.popper, preventedOffsets = state.modifiersData.preventOverflow, referenceOverflow = detectOverflow(state, { elementContext: "reference" }), popperAltOverflow = detectOverflow(state, { altBoundary: true }), referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect), popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets), isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets), hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = { referenceClippingOffsets, popperEscapeOffsets, isReferenceHidden, hasPopperEscaped }, state.attributes.popper = Object.assign({}, state.attributes.popper, { "data-popper-reference-hidden": isReferenceHidden, "data-popper-escaped": hasPopperEscaped });
}
var hide_default = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: hide };
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement), invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1, _ref = typeof offset2 == "function" ? offset2(Object.assign({}, rects, { placement })) : offset2, skidding = _ref[0], distance = _ref[1];
  return skidding = skidding || 0, distance = (distance || 0) * invertDistance, [left, right].indexOf(basePlacement) >= 0 ? { x: distance, y: skidding } : { x: skidding, y: distance };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name, _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset, data = placements.reduce(function(acc, placement) {
    return acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2), acc;
  }, {}), _data$state$placement = data[state.placement], x2 = _data$state$placement.x, y2 = _data$state$placement.y;
  state.modifiersData.popperOffsets != null && (state.modifiersData.popperOffsets.x += x2, state.modifiersData.popperOffsets.y += y2), state.modifiersData[name] = data;
}
var offset_default = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: offset };
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({ reference: state.rects.reference, element: state.rects.popper, strategy: "absolute", placement: state.placement });
}
var popperOffsets_default = { name: "popperOffsets", enabled: true, phase: "read", fn: popperOffsets, data: {} };
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name, _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset, overflow = detectOverflow(state, { boundary, rootBoundary, padding, altBoundary }), basePlacement = getBasePlacement(state.placement), variation = getVariation(state.placement), isBasePlacement = !variation, mainAxis = getMainAxisFromPlacement(basePlacement), altAxis = getAltAxis(mainAxis), popperOffsets2 = state.modifiersData.popperOffsets, referenceRect = state.rects.reference, popperRect = state.rects.popper, tetherOffsetValue = typeof tetherOffset == "function" ? tetherOffset(Object.assign({}, state.rects, { placement: state.placement })) : tetherOffset, normalizedTetherOffsetValue = typeof tetherOffsetValue == "number" ? { mainAxis: tetherOffsetValue, altAxis: tetherOffsetValue } : Object.assign({ mainAxis: 0, altAxis: 0 }, tetherOffsetValue), offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null, data = { x: 0, y: 0 };
  if (popperOffsets2) {
    if (checkMainAxis) {
      var _offsetModifierState$, mainSide = mainAxis === "y" ? top : left, altSide = mainAxis === "y" ? bottom : right, len = mainAxis === "y" ? "height" : "width", offset2 = popperOffsets2[mainAxis], min2 = offset2 + overflow[mainSide], max2 = offset2 - overflow[altSide], additive = tether ? -popperRect[len] / 2 : 0, minLen = variation === start ? referenceRect[len] : popperRect[len], maxLen = variation === start ? -popperRect[len] : -referenceRect[len], arrowElement = state.elements.arrow, arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : { width: 0, height: 0 }, arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject(), arrowPaddingMin = arrowPaddingObject[mainSide], arrowPaddingMax = arrowPaddingObject[altSide], arrowLen = within(0, referenceRect[len], arrowRect[len]), minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis, maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis, arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow), clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0, offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0, tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset, tetherMax = offset2 + maxOffset - offsetModifierValue, preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
      popperOffsets2[mainAxis] = preventedOffset, data[mainAxis] = preventedOffset - offset2;
    }
    if (checkAltAxis) {
      var _offsetModifierState$2, _mainSide = mainAxis === "x" ? top : left, _altSide = mainAxis === "x" ? bottom : right, _offset = popperOffsets2[altAxis], _len = altAxis === "y" ? "height" : "width", _min = _offset + overflow[_mainSide], _max = _offset - overflow[_altSide], isOriginSide = [top, left].indexOf(basePlacement) !== -1, _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0, _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis, _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max, _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
      popperOffsets2[altAxis] = _preventedOffset, data[altAxis] = _preventedOffset - _offset;
    }
    state.modifiersData[name] = data;
  }
}
var preventOverflow_default = { name: "preventOverflow", enabled: true, phase: "main", fn: preventOverflow, requiresIfExists: ["offset"] };
function getHTMLElementScroll(element) {
  return { scrollLeft: element.scrollLeft, scrollTop: element.scrollTop };
}
function getNodeScroll(node) {
  return node === getWindow(node) || !isHTMLElement(node) ? getWindowScroll(node) : getHTMLElementScroll(node);
}
function isElementScaled(element) {
  var rect = element.getBoundingClientRect(), scaleX = round(rect.width) / element.offsetWidth || 1, scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  isFixed === void 0 && (isFixed = false);
  var isOffsetParentAnElement = isHTMLElement(offsetParent), offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent), documentElement = getDocumentElement(offsetParent), rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed), scroll = { scrollLeft: 0, scrollTop: 0 }, offsets = { x: 0, y: 0 };
  return (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) && ((getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) && (scroll = getNodeScroll(offsetParent)), isHTMLElement(offsetParent) ? (offsets = getBoundingClientRect(offsetParent, true), offsets.x += offsetParent.clientLeft, offsets.y += offsetParent.clientTop) : documentElement && (offsets.x = getWindowScrollBarX(documentElement))), { x: rect.left + scroll.scrollLeft - offsets.x, y: rect.top + scroll.scrollTop - offsets.y, width: rect.width, height: rect.height };
}
function order(modifiers) {
  var map = /* @__PURE__ */ new Map(), visited = /* @__PURE__ */ new Set(), result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        depModifier && sort(depModifier);
      }
    }), result.push(modifier);
  }
  return modifiers.forEach(function(modifier) {
    visited.has(modifier.name) || sort(modifier);
  }), result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce(fn2) {
  var pending;
  return function() {
    return pending || (pending = new Promise(function(resolve) {
      Promise.resolve().then(function() {
        pending = void 0, resolve(fn2());
      });
    })), pending;
  };
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    return merged2[current.name] = existing ? Object.assign({}, existing, current, { options: Object.assign({}, existing.options, current.options), data: Object.assign({}, existing.data, current.data) }) : current, merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}
var DEFAULT_OPTIONS = { placement: "bottom", modifiers: [], strategy: "absolute" };
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect == "function");
  });
}
function popperGenerator(generatorOptions) {
  generatorOptions === void 0 && (generatorOptions = {});
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions2 = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function(reference2, popper2, options) {
    options === void 0 && (options = defaultOptions2);
    var state = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions2), modifiersData: {}, elements: { reference: reference2, popper: popper2 }, attributes: {}, styles: {} }, effectCleanupFns = [], isDestroyed = false, instance = { state, setOptions: function(setOptionsAction) {
      var options2 = typeof setOptionsAction == "function" ? setOptionsAction(state.options) : setOptionsAction;
      cleanupModifierEffects(), state.options = Object.assign({}, defaultOptions2, state.options, options2), state.scrollParents = { reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [], popper: listScrollParents(popper2) };
      var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
      return state.orderedModifiers = orderedModifiers.filter(function(m2) {
        return m2.enabled;
      }), runModifierEffects(), instance.update();
    }, forceUpdate: function() {
      if (!isDestroyed) {
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (areValidElements(reference3, popper3)) {
          state.rects = { reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"), popper: getLayoutRect(popper3) }, state.reset = false, state.placement = state.options.placement, state.orderedModifiers.forEach(function(modifier) {
            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
          });
          for (var index3 = 0; index3 < state.orderedModifiers.length; index3++) {
            if (state.reset === true) {
              state.reset = false, index3 = -1;
              continue;
            }
            var _state$orderedModifie = state.orderedModifiers[index3], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options2 = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
            typeof fn2 == "function" && (state = fn2({ state, options: _options2, name, instance }) || state);
          }
        }
      }
    }, update: debounce(function() {
      return new Promise(function(resolve) {
        instance.forceUpdate(), resolve(state);
      });
    }), destroy: function() {
      cleanupModifierEffects(), isDestroyed = true;
    } };
    if (!areValidElements(reference2, popper2)) return instance;
    instance.setOptions(options).then(function(state2) {
      !isDestroyed && options.onFirstUpdate && options.onFirstUpdate(state2);
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref) {
        var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect4 = _ref.effect;
        if (typeof effect4 == "function") {
          var cleanupFn = effect4({ state, name, instance, options: options2 }), noopFn = function() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      }), effectCleanupFns = [];
    }
    return instance;
  };
}
var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default], createPopper = popperGenerator({ defaultModifiers });
var import_react_fast_compare = __toESM$1(require_react_fast_compare());
var EMPTY_MODIFIERS = [], usePopper = function(referenceElement, popperElement, options) {
  options === void 0 && (options = {});
  var prevOptions = reactExports.useRef(null), optionsWithDefaults = { onFirstUpdate: options.onFirstUpdate, placement: options.placement || "bottom", strategy: options.strategy || "absolute", modifiers: options.modifiers || EMPTY_MODIFIERS }, _React$useState = reactExports.useState({ styles: { popper: { position: optionsWithDefaults.strategy, left: "0", top: "0" }, arrow: { position: "absolute" } }, attributes: {} }), state = _React$useState[0], setState = _React$useState[1], updateStateModifier = reactExports.useMemo(function() {
    return { name: "updateState", enabled: true, phase: "write", fn: function(_ref) {
      var state2 = _ref.state, elements = Object.keys(state2.elements);
      reactDomExports.flushSync(function() {
        setState({ styles: fromEntries(elements.map(function(element) {
          return [element, state2.styles[element] || {}];
        })), attributes: fromEntries(elements.map(function(element) {
          return [element, state2.attributes[element]];
        })) });
      });
    }, requires: ["computeStyles"] };
  }, []), popperOptions = reactExports.useMemo(function() {
    var newOptions = { onFirstUpdate: optionsWithDefaults.onFirstUpdate, placement: optionsWithDefaults.placement, strategy: optionsWithDefaults.strategy, modifiers: [].concat(optionsWithDefaults.modifiers, [updateStateModifier, { name: "applyStyles", enabled: false }]) };
    return (0, import_react_fast_compare.default)(prevOptions.current, newOptions) ? prevOptions.current || newOptions : (prevOptions.current = newOptions, newOptions);
  }, [optionsWithDefaults.onFirstUpdate, optionsWithDefaults.placement, optionsWithDefaults.strategy, optionsWithDefaults.modifiers, updateStateModifier]), popperInstanceRef = reactExports.useRef();
  return useIsomorphicLayoutEffect$1(function() {
    popperInstanceRef.current && popperInstanceRef.current.setOptions(popperOptions);
  }, [popperOptions]), useIsomorphicLayoutEffect$1(function() {
    if (!(referenceElement == null || popperElement == null)) {
      var createPopper2 = options.createPopper || createPopper, popperInstance = createPopper2(referenceElement, popperElement, popperOptions);
      return popperInstanceRef.current = popperInstance, function() {
        popperInstance.destroy(), popperInstanceRef.current = null;
      };
    }
  }, [referenceElement, popperElement, options.createPopper]), { state: popperInstanceRef.current ? popperInstanceRef.current.state : null, styles: state.styles, attributes: state.attributes, update: popperInstanceRef.current ? popperInstanceRef.current.update : null, forceUpdate: popperInstanceRef.current ? popperInstanceRef.current.forceUpdate : null };
};
function useGetLatest(val) {
  var ref = reactExports.useRef(val);
  return ref.current = val, reactExports.useCallback(function() {
    return ref.current;
  }, []);
}
var noop$3 = function() {
};
function useControlledState(_ref) {
  var initial = _ref.initial, value2 = _ref.value, _ref$onChange = _ref.onChange, onChange = _ref$onChange === void 0 ? noop$3 : _ref$onChange;
  if (initial === void 0 && value2 === void 0) throw new TypeError('Either "value" or "initial" variable must be set. Now both are undefined');
  var _React$useState = reactExports.useState(initial), state = _React$useState[0], setState = _React$useState[1], getLatest = useGetLatest(state), set = reactExports.useCallback(function(updater) {
    var state2 = getLatest(), updatedState = typeof updater == "function" ? updater(state2) : updater;
    typeof updatedState.persist == "function" && updatedState.persist(), setState(updatedState), typeof onChange == "function" && onChange(updatedState);
  }, [getLatest, onChange]), isControlled = value2 !== void 0;
  return [isControlled ? value2 : state, isControlled ? onChange : set];
}
function generateBoundingClientRect(x2, y2) {
  return x2 === void 0 && (x2 = 0), y2 === void 0 && (y2 = 0), function() {
    return { width: 0, height: 0, top: y2, right: x2, bottom: y2, left: x2, x: 0, y: 0, toJSON: function() {
      return null;
    } };
  };
}
var _excluded$1 = ["styles", "attributes"], virtualElement = { getBoundingClientRect: generateBoundingClientRect() }, defaultConfig = { closeOnOutsideClick: true, closeOnTriggerHidden: false, defaultVisible: false, delayHide: 0, delayShow: 0, followCursor: false, interactive: false, mutationObserverOptions: { attributes: true, childList: true, subtree: true }, offset: [0, 6], trigger: "hover" };
function usePopperTooltip(config, popperOptions) {
  var _popperProps$state, _popperProps$state$mo, _popperProps$state$mo2;
  config === void 0 && (config = {}), popperOptions === void 0 && (popperOptions = {});
  var finalConfig = Object.keys(defaultConfig).reduce(function(config2, key) {
    var _extends2;
    return _extends({}, config2, (_extends2 = {}, _extends2[key] = config2[key] !== void 0 ? config2[key] : defaultConfig[key], _extends2));
  }, config), defaultModifiers2 = reactExports.useMemo(function() {
    return [{ name: "offset", options: { offset: finalConfig.offset } }];
  }, Array.isArray(finalConfig.offset) ? finalConfig.offset : []), finalPopperOptions = _extends({}, popperOptions, { placement: popperOptions.placement || finalConfig.placement, modifiers: popperOptions.modifiers || defaultModifiers2 }), _React$useState = reactExports.useState(null), triggerRef = _React$useState[0], setTriggerRef = _React$useState[1], _React$useState2 = reactExports.useState(null), tooltipRef = _React$useState2[0], setTooltipRef = _React$useState2[1], _useControlledState = useControlledState({ initial: finalConfig.defaultVisible, value: finalConfig.visible, onChange: finalConfig.onVisibleChange }), visible = _useControlledState[0], setVisible = _useControlledState[1], timer = reactExports.useRef();
  reactExports.useEffect(function() {
    return function() {
      return clearTimeout(timer.current);
    };
  }, []);
  var _usePopper = usePopper(finalConfig.followCursor ? virtualElement : triggerRef, tooltipRef, finalPopperOptions), styles2 = _usePopper.styles, attributes = _usePopper.attributes, popperProps = _objectWithoutPropertiesLoose(_usePopper, _excluded$1), update = popperProps.update, getLatest = useGetLatest({ visible, triggerRef, tooltipRef, finalConfig }), isTriggeredBy = reactExports.useCallback(function(trigger) {
    return Array.isArray(finalConfig.trigger) ? finalConfig.trigger.includes(trigger) : finalConfig.trigger === trigger;
  }, Array.isArray(finalConfig.trigger) ? finalConfig.trigger : [finalConfig.trigger]), hideTooltip = reactExports.useCallback(function() {
    clearTimeout(timer.current), timer.current = window.setTimeout(function() {
      return setVisible(false);
    }, finalConfig.delayHide);
  }, [finalConfig.delayHide, setVisible]), showTooltip = reactExports.useCallback(function() {
    clearTimeout(timer.current), timer.current = window.setTimeout(function() {
      return setVisible(true);
    }, finalConfig.delayShow);
  }, [finalConfig.delayShow, setVisible]), toggleTooltip = reactExports.useCallback(function() {
    getLatest().visible ? hideTooltip() : showTooltip();
  }, [getLatest, hideTooltip, showTooltip]);
  reactExports.useEffect(function() {
    if (getLatest().finalConfig.closeOnOutsideClick) {
      var handleClickOutside = function(event) {
        var _event$composedPath, _getLatest = getLatest(), tooltipRef2 = _getLatest.tooltipRef, triggerRef2 = _getLatest.triggerRef, target = (event.composedPath == null || (_event$composedPath = event.composedPath()) == null ? void 0 : _event$composedPath[0]) || event.target;
        target instanceof Node && tooltipRef2 != null && triggerRef2 != null && !tooltipRef2.contains(target) && !triggerRef2.contains(target) && hideTooltip();
      };
      return document.addEventListener("mousedown", handleClickOutside), function() {
        return document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [getLatest, hideTooltip]), reactExports.useEffect(function() {
    if (!(triggerRef == null || !isTriggeredBy("click"))) return triggerRef.addEventListener("click", toggleTooltip), function() {
      return triggerRef.removeEventListener("click", toggleTooltip);
    };
  }, [triggerRef, isTriggeredBy, toggleTooltip]), reactExports.useEffect(function() {
    if (!(triggerRef == null || !isTriggeredBy("double-click"))) return triggerRef.addEventListener("dblclick", toggleTooltip), function() {
      return triggerRef.removeEventListener("dblclick", toggleTooltip);
    };
  }, [triggerRef, isTriggeredBy, toggleTooltip]), reactExports.useEffect(function() {
    if (!(triggerRef == null || !isTriggeredBy("right-click"))) {
      var preventDefaultAndToggle = function(event) {
        event.preventDefault(), toggleTooltip();
      };
      return triggerRef.addEventListener("contextmenu", preventDefaultAndToggle), function() {
        return triggerRef.removeEventListener("contextmenu", preventDefaultAndToggle);
      };
    }
  }, [triggerRef, isTriggeredBy, toggleTooltip]), reactExports.useEffect(function() {
    if (!(triggerRef == null || !isTriggeredBy("focus"))) return triggerRef.addEventListener("focus", showTooltip), triggerRef.addEventListener("blur", hideTooltip), function() {
      triggerRef.removeEventListener("focus", showTooltip), triggerRef.removeEventListener("blur", hideTooltip);
    };
  }, [triggerRef, isTriggeredBy, showTooltip, hideTooltip]), reactExports.useEffect(function() {
    if (!(triggerRef == null || !isTriggeredBy("hover"))) return triggerRef.addEventListener("mouseenter", showTooltip), triggerRef.addEventListener("mouseleave", hideTooltip), function() {
      triggerRef.removeEventListener("mouseenter", showTooltip), triggerRef.removeEventListener("mouseleave", hideTooltip);
    };
  }, [triggerRef, isTriggeredBy, showTooltip, hideTooltip]), reactExports.useEffect(function() {
    if (!(tooltipRef == null || !isTriggeredBy("hover") || !getLatest().finalConfig.interactive)) return tooltipRef.addEventListener("mouseenter", showTooltip), tooltipRef.addEventListener("mouseleave", hideTooltip), function() {
      tooltipRef.removeEventListener("mouseenter", showTooltip), tooltipRef.removeEventListener("mouseleave", hideTooltip);
    };
  }, [tooltipRef, isTriggeredBy, showTooltip, hideTooltip, getLatest]);
  var isReferenceHidden = popperProps == null || (_popperProps$state = popperProps.state) == null || (_popperProps$state$mo = _popperProps$state.modifiersData) == null || (_popperProps$state$mo2 = _popperProps$state$mo.hide) == null ? void 0 : _popperProps$state$mo2.isReferenceHidden;
  reactExports.useEffect(function() {
    finalConfig.closeOnTriggerHidden && isReferenceHidden && hideTooltip();
  }, [finalConfig.closeOnTriggerHidden, hideTooltip, isReferenceHidden]), reactExports.useEffect(function() {
    if (!finalConfig.followCursor || triggerRef == null) return;
    function setMousePosition(_ref) {
      var clientX = _ref.clientX, clientY = _ref.clientY;
      virtualElement.getBoundingClientRect = generateBoundingClientRect(clientX, clientY), update == null ? void 0 : update();
    }
    return triggerRef.addEventListener("mousemove", setMousePosition), function() {
      return triggerRef.removeEventListener("mousemove", setMousePosition);
    };
  }, [finalConfig.followCursor, triggerRef, update]), reactExports.useEffect(function() {
    if (!(tooltipRef == null || update == null || finalConfig.mutationObserverOptions == null)) {
      var observer = new MutationObserver(update);
      return observer.observe(tooltipRef, finalConfig.mutationObserverOptions), function() {
        return observer.disconnect();
      };
    }
  }, [finalConfig.mutationObserverOptions, tooltipRef, update]);
  var getTooltipProps = function(args) {
    return args === void 0 && (args = {}), _extends({}, args, { style: _extends({}, args.style, styles2.popper) }, attributes.popper, { "data-popper-interactive": finalConfig.interactive });
  }, getArrowProps = function(args) {
    return args === void 0 && (args = {}), _extends({}, args, attributes.arrow, { style: _extends({}, args.style, styles2.arrow), "data-popper-arrow": true });
  };
  return _extends({ getArrowProps, getTooltipProps, setTooltipRef, setTriggerRef, tooltipRef, triggerRef, visible }, popperProps);
}
var match = memoize$1(1e3)((requests, actual, value2, fallback = 0) => actual.split("-")[0] === requests ? value2 : fallback), ArrowSpacing = 8, Arrow = newStyled.div({ position: "absolute", borderStyle: "solid" }, ({ placement }) => {
  let x2 = 0, y2 = 0;
  switch (true) {
    case (placement.startsWith("left") || placement.startsWith("right")): {
      y2 = 8;
      break;
    }
    case (placement.startsWith("top") || placement.startsWith("bottom")): {
      x2 = 8;
      break;
    }
  }
  return { transform: `translate3d(${x2}px, ${y2}px, 0px)` };
}, ({ theme, color: color2, placement }) => ({ bottom: `${match("top", placement, `${ArrowSpacing * -1}px`, "auto")}`, top: `${match("bottom", placement, `${ArrowSpacing * -1}px`, "auto")}`, right: `${match("left", placement, `${ArrowSpacing * -1}px`, "auto")}`, left: `${match("right", placement, `${ArrowSpacing * -1}px`, "auto")}`, borderBottomWidth: `${match("top", placement, "0", ArrowSpacing)}px`, borderTopWidth: `${match("bottom", placement, "0", ArrowSpacing)}px`, borderRightWidth: `${match("left", placement, "0", ArrowSpacing)}px`, borderLeftWidth: `${match("right", placement, "0", ArrowSpacing)}px`, borderTopColor: match("top", placement, theme.color[color2] || color2 || theme.base === "light" ? lightenColor(theme.background.app) : theme.background.app, "transparent"), borderBottomColor: match("bottom", placement, theme.color[color2] || color2 || theme.base === "light" ? lightenColor(theme.background.app) : theme.background.app, "transparent"), borderLeftColor: match("left", placement, theme.color[color2] || color2 || theme.base === "light" ? lightenColor(theme.background.app) : theme.background.app, "transparent"), borderRightColor: match("right", placement, theme.color[color2] || color2 || theme.base === "light" ? lightenColor(theme.background.app) : theme.background.app, "transparent") })), Wrapper$2 = newStyled.div(({ hidden }) => ({ display: hidden ? "none" : "inline-block", zIndex: 2147483647 }), ({ theme, color: color2, hasChrome }) => hasChrome ? { background: theme.color[color2] || color2 || theme.base === "light" ? lightenColor(theme.background.app) : theme.background.app, filter: `
            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))
            drop-shadow(0 1px 3px rgba(0,0,0,0.1))
          `, borderRadius: theme.appBorderRadius, fontSize: theme.typography.size.s1 } : {}), Tooltip = React.forwardRef(({ placement = "top", hasChrome = true, children, arrowProps = {}, tooltipRef, color: color2, withArrows, ...props }, ref) => React.createElement(Wrapper$2, { "data-testid": "tooltip", hasChrome, ref, ...props, color: color2 }, hasChrome && withArrows && React.createElement(Arrow, { placement, ...arrowProps, color: color2 }), children));
Tooltip.displayName = "Tooltip";
var { document: document2$2 } = global$3, TargetContainer = newStyled.div`
  display: inline-block;
  cursor: ${(props) => props.trigger === "hover" || props.trigger.includes("hover") ? "default" : "pointer"};
`, TargetSvgContainer = newStyled.g`
  cursor: ${(props) => props.trigger === "hover" || props.trigger.includes("hover") ? "default" : "pointer"};
`, WithTooltipPure$1 = ({ svg = false, trigger = "click", closeOnOutsideClick = false, placement = "top", modifiers = [{ name: "preventOverflow", options: { padding: 8 } }, { name: "offset", options: { offset: [8, 8] } }, { name: "arrow", options: { padding: 8 } }], hasChrome = true, defaultVisible = false, withArrows, offset: offset2, tooltip, children, closeOnTriggerHidden, mutationObserverOptions, delayHide, visible, interactive, delayShow, strategy, followCursor, onVisibleChange, ...props }) => {
  let Container3 = svg ? TargetSvgContainer : TargetContainer, { getArrowProps, getTooltipProps, setTooltipRef, setTriggerRef, visible: isVisible, state } = usePopperTooltip({ trigger, placement, defaultVisible, delayHide, interactive, closeOnOutsideClick, closeOnTriggerHidden, onVisibleChange, delayShow, followCursor, mutationObserverOptions, visible, offset: offset2 }, { modifiers, strategy }), tooltipComponent = React.createElement(Tooltip, { placement: state == null ? void 0 : state.placement, ref: setTooltipRef, hasChrome, arrowProps: getArrowProps(), withArrows, ...getTooltipProps() }, typeof tooltip == "function" ? tooltip({ onHide: () => onVisibleChange(false) }) : tooltip);
  return React.createElement(React.Fragment, null, React.createElement(Container3, { trigger, ref: setTriggerRef, ...props }, children), isVisible && ReactDOM.createPortal(tooltipComponent, document2$2.body));
}, WithToolTipState = ({ startOpen = false, onVisibleChange: onChange, ...rest }) => {
  let [tooltipShown, setTooltipShown] = reactExports.useState(startOpen), onVisibilityChange = reactExports.useCallback((visibility) => {
    onChange && onChange(visibility) === false || setTooltipShown(visibility);
  }, [onChange]);
  return reactExports.useEffect(() => {
    let hide2 = () => onVisibilityChange(false);
    document2$2.addEventListener("keydown", hide2, false);
    let iframes = Array.from(document2$2.getElementsByTagName("iframe")), unbinders = [];
    return iframes.forEach((iframe) => {
      let bind = () => {
        try {
          iframe.contentWindow.document && (iframe.contentWindow.document.addEventListener("click", hide2), unbinders.push(() => {
            try {
              iframe.contentWindow.document.removeEventListener("click", hide2);
            } catch {
            }
          }));
        } catch {
        }
      };
      bind(), iframe.addEventListener("load", bind), unbinders.push(() => {
        iframe.removeEventListener("load", bind);
      });
    }), () => {
      document2$2.removeEventListener("keydown", hide2), unbinders.forEach((unbind) => {
        unbind();
      });
    };
  }), React.createElement(WithTooltipPure$1, { ...rest, visible: tooltipShown, onVisibleChange: onVisibilityChange });
};
var iconList = [
  {
    name: "Images",
    icons: [
      "PhotoIcon",
      "ComponentIcon",
      "GridIcon",
      "OutlineIcon",
      "PhotoDragIcon",
      "GridAltIcon",
      "SearchIcon",
      "ZoomIcon",
      "ZoomOutIcon",
      "ZoomResetIcon",
      "EyeIcon",
      "EyeCloseIcon",
      "LightningIcon",
      "LightningOffIcon",
      "ContrastIcon",
      "SwitchAltIcon",
      "MirrorIcon",
      "GrowIcon",
      "PaintBrushIcon",
      "RulerIcon",
      "StopIcon",
      "CameraIcon",
      "VideoIcon",
      "SpeakerIcon",
      "PlayIcon",
      "PlayBackIcon",
      "PlayNextIcon",
      "RewindIcon",
      "FastForwardIcon",
      "StopAltIcon",
      "SideBySideIcon",
      "StackedIcon",
      "SunIcon",
      "MoonIcon"
    ]
  },
  {
    name: "Documents",
    icons: [
      "BookIcon",
      "DocumentIcon",
      "CopyIcon",
      "CategoryIcon",
      "FolderIcon",
      "PrintIcon",
      "GraphLineIcon",
      "CalendarIcon",
      "GraphBarIcon",
      "AlignLeftIcon",
      "AlignRightIcon",
      "FilterIcon",
      "DocChartIcon",
      "DocListIcon",
      "DragIcon",
      "MenuIcon"
    ]
  },
  {
    name: "Editing",
    icons: [
      "MarkupIcon",
      "BoldIcon",
      "ItalicIcon",
      "PaperClipIcon",
      "ListOrderedIcon",
      "ListUnorderedIcon",
      "ParagraphIcon",
      "MarkdownIcon"
    ]
  },
  {
    name: "Git",
    icons: [
      "RepoIcon",
      "CommitIcon",
      "BranchIcon",
      "PullRequestIcon",
      "MergeIcon"
    ]
  },
  {
    name: "OS",
    icons: [
      "AppleIcon",
      "LinuxIcon",
      "UbuntuIcon",
      "WindowsIcon",
      "ChromeIcon"
    ]
  },
  {
    name: "Logos",
    icons: [
      "StorybookIcon",
      "AzureDevOpsIcon",
      "BitbucketIcon",
      "ChromaticIcon",
      "ComponentDrivenIcon",
      "DiscordIcon",
      "FacebookIcon",
      "FigmaIcon",
      "GDriveIcon",
      "GithubIcon",
      "GitlabIcon",
      "GoogleIcon",
      "GraphqlIcon",
      "MediumIcon",
      "ReduxIcon",
      "TwitterIcon",
      "YoutubeIcon",
      "VSCodeIcon",
      "LinkedinIcon",
      "XIcon"
    ]
  },
  {
    name: "Devices",
    icons: [
      "BrowserIcon",
      "TabletIcon",
      "MobileIcon",
      "WatchIcon",
      "SidebarIcon",
      "SidebarAltIcon",
      "SidebarAltToggleIcon",
      "SidebarToggleIcon",
      "BottomBarIcon",
      "BottomBarToggleIcon",
      "CPUIcon",
      "DatabaseIcon",
      "MemoryIcon",
      "StructureIcon",
      "BoxIcon",
      "PowerIcon"
    ]
  },
  {
    name: "CRUD",
    icons: [
      "EditIcon",
      "CogIcon",
      "NutIcon",
      "WrenchIcon",
      "EllipsisIcon",
      "WandIcon",
      "CheckIcon",
      "FormIcon",
      "BatchDenyIcon",
      "BatchAcceptIcon",
      "ControlsIcon",
      "PlusIcon",
      "CloseAltIcon",
      "CrossIcon",
      "TrashIcon",
      "PinAltIcon",
      "UnpinIcon",
      "AddIcon",
      "SubtractIcon",
      "CloseIcon",
      "DeleteIcon",
      "PassedIcon",
      "ChangedIcon",
      "FailedIcon",
      "ClearIcon",
      "CommentIcon",
      "CommentAddIcon",
      "RequestChangeIcon",
      "CommentsIcon",
      "ChatIcon",
      "LockIcon",
      "UnlockIcon",
      "KeyIcon",
      "OutboxIcon",
      "CreditIcon",
      "ButtonIcon",
      "TypeIcon",
      "PointerDefaultIcon",
      "PointerHandIcon",
      "CommandIcon"
    ]
  },
  {
    name: "Communicate",
    icons: [
      "InfoIcon",
      "QuestionIcon",
      "SupportIcon",
      "AlertIcon",
      "AlertAltIcon",
      "EmailIcon",
      "PhoneIcon",
      "LinkIcon",
      "LinkBrokenIcon",
      "BellIcon",
      "RSSIcon",
      "ShareAltIcon",
      "ShareIcon",
      "JumpToIcon",
      "CircleHollowIcon",
      "CircleIcon",
      "BookmarkHollowIcon",
      "BookmarkIcon",
      "DiamondIcon",
      "HeartHollowIcon",
      "HeartIcon",
      "StarHollowIcon",
      "StarIcon",
      "CertificateIcon",
      "VerifiedIcon",
      "ThumbsUpIcon",
      "ShieldIcon",
      "BasketIcon",
      "BeakerIcon",
      "HourglassIcon",
      "FlagIcon",
      "CloudHollowIcon",
      "CloudIcon",
      "StickerIcon"
    ]
  },
  {
    name: "Wayfinding",
    icons: [
      "ChevronUpIcon",
      "ChevronDownIcon",
      "ChevronLeftIcon",
      "ChevronRightIcon",
      "ChevronSmallUpIcon",
      "ChevronSmallDownIcon",
      "ChevronSmallLeftIcon",
      "ChevronSmallRightIcon",
      "ArrowUpIcon",
      "ArrowDownIcon",
      "ArrowLeftIcon",
      "ArrowRightIcon",
      "ArrowTopLeftIcon",
      "ArrowTopRightIcon",
      "ArrowBottomLeftIcon",
      "ArrowBottomRightIcon",
      "ArrowSolidUpIcon",
      "ArrowSolidDownIcon",
      "ArrowSolidLeftIcon",
      "ArrowSolidRightIcon",
      "ExpandAltIcon",
      "CollapseIcon",
      "ExpandIcon",
      "UnfoldIcon",
      "TransferIcon",
      "RedirectIcon",
      "UndoIcon",
      "ReplyIcon",
      "SyncIcon",
      "UploadIcon",
      "DownloadIcon",
      "BackIcon",
      "ProceedIcon",
      "RefreshIcon",
      "GlobeIcon",
      "CompassIcon",
      "LocationIcon",
      "PinIcon",
      "TimeIcon",
      "DashboardIcon",
      "TimerIcon",
      "HomeIcon",
      "AdminIcon",
      "DirectionIcon"
    ]
  },
  {
    name: "People",
    icons: [
      "UserIcon",
      "UserAltIcon",
      "UserAddIcon",
      "UsersIcon",
      "ProfileIcon",
      "FaceHappyIcon",
      "FaceNeutralIcon",
      "FaceSadIcon",
      "AccessibilityIcon",
      "AccessibilityAltIcon"
    ]
  }
];
var PhotoIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.25 4.254a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm-.5 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M13 1.504v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h11a.5.5 0 01.5.5zM2 9.297V2.004h10v5.293L9.854 5.15a.5.5 0 00-.708 0L6.5 7.797 5.354 6.65a.5.5 0 00-.708 0L2 9.297zM9.5 6.21l2.5 2.5v3.293H2V10.71l3-3 3.146 3.146a.5.5 0 00.708-.707L7.207 8.504 9.5 6.21z",
        fill: color2
      }
    )
  );
});
var ComponentIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.5 1.004a2.5 2.5 0 00-2.5 2.5v7a2.5 2.5 0 002.5 2.5h7a2.5 2.5 0 002.5-2.5v-7a2.5 2.5 0 00-2.5-2.5h-7zm8.5 5.5H7.5v-4.5h3a1.5 1.5 0 011.5 1.5v3zm0 1v3a1.5 1.5 0 01-1.5 1.5h-3v-4.5H12zm-5.5 4.5v-4.5H2v3a1.5 1.5 0 001.5 1.5h3zM2 6.504h4.5v-4.5h-3a1.5 1.5 0 00-1.5 1.5v3z",
        fill: color2
      }
    )
  );
});
var GridIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1 1.504a.5.5 0 01.5-.5H6a.5.5 0 01.5.5v4.5a.5.5 0 01-.5.5H1.5a.5.5 0 01-.5-.5v-4.5zm1 4v-3.5h3.5v3.5H2zM7.5 1.504a.5.5 0 01.5-.5h4.5a.5.5 0 01.5.5v4.5a.5.5 0 01-.5.5H8a.5.5 0 01-.5-.5v-4.5zm1 4v-3.5H12v3.5H8.5zM1.5 7.504a.5.5 0 00-.5.5v4.5a.5.5 0 00.5.5H6a.5.5 0 00.5-.5v-4.5a.5.5 0 00-.5-.5H1.5zm.5 1v3.5h3.5v-3.5H2zM7.5 8.004a.5.5 0 01.5-.5h4.5a.5.5 0 01.5.5v4.5a.5.5 0 01-.5.5H8a.5.5 0 01-.5-.5v-4.5zm1 4v-3.5H12v3.5H8.5z",
        fill: color2
      }
    )
  );
});
var OutlineIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M2 2.004v2H1v-2.5a.5.5 0 01.5-.5H4v1H2zM1 9.004v-4h1v4H1zM1 10.004v2.5a.5.5 0 00.5.5H4v-1H2v-2H1zM10 13.004h2.5a.5.5 0 00.5-.5v-2.5h-1v2h-2v1zM12 4.004h1v-2.5a.5.5 0 00-.5-.5H10v1h2v2zM9 12.004v1H5v-1h4zM9 1.004v1H5v-1h4zM13 9.004h-1v-4h1v4zM7 8.004a1 1 0 100-2 1 1 0 000 2z",
        fill: color2
      }
    )
  );
});
var PhotoDragIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.25 3.254a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm-.5 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 7.003v-6.5a.5.5 0 00-.5-.5h-10a.5.5 0 00-.5.5v2.5H.5a.5.5 0 00-.5.5v2.5h1v-2h2v6.5a.5.5 0 00.5.5H10v2H8v1h2.5a.5.5 0 00.5-.5v-2.5h2.5a.5.5 0 00.5-.5v-3.5zm-10-6v5.794L5.646 5.15a.5.5 0 01.708 0L7.5 6.297l2.646-2.647a.5.5 0 01.708 0L13 5.797V1.004H4zm9 6.208l-2.5-2.5-2.293 2.293L9.354 8.15a.5.5 0 11-.708.707L6 6.211l-2 2v1.793h9V7.21z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M0 10.004v-3h1v3H0zM0 13.504v-2.5h1v2h2v1H.5a.5.5 0 01-.5-.5zM7 14.004H4v-1h3v1z",
        fill: color2
      }
    )
  );
});
var GridAltIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M4 3V1h1v2H4zM4 6v2h1V6H4zM4 11v2h1v-2H4zM9 11v2h1v-2H9zM9 8V6h1v2H9zM9 1v2h1V1H9zM13 5h-2V4h2v1zM11 10h2V9h-2v1zM3 10H1V9h2v1zM1 5h2V4H1v1zM8 5H6V4h2v1zM6 10h2V9H6v1zM4 4h1v1H4V4zM10 4H9v1h1V4zM9 9h1v1H9V9zM5 9H4v1h1V9z",
        fill: color2
      }
    )
  );
});
var SearchIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.544 10.206a5.5 5.5 0 11.662-.662.5.5 0 01.148.102l3 3a.5.5 0 01-.708.708l-3-3a.5.5 0 01-.102-.148zM10.5 6a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z",
        fill: color2
      }
    )
  );
});
var ZoomIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M6 3.5a.5.5 0 01.5.5v1.5H8a.5.5 0 010 1H6.5V8a.5.5 0 01-1 0V6.5H4a.5.5 0 010-1h1.5V4a.5.5 0 01.5-.5z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.544 10.206a5.5 5.5 0 11.662-.662.5.5 0 01.148.102l3 3a.5.5 0 01-.708.708l-3-3a.5.5 0 01-.102-.148zM10.5 6a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z",
        fill: color2
      }
    )
  );
});
var ZoomOutIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement("path", { d: "M4 5.5a.5.5 0 000 1h4a.5.5 0 000-1H4z", fill: color2 }),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6 11.5c1.35 0 2.587-.487 3.544-1.294a.5.5 0 00.102.148l3 3a.5.5 0 00.708-.708l-3-3a.5.5 0 00-.148-.102A5.5 5.5 0 106 11.5zm0-1a4.5 4.5 0 100-9 4.5 4.5 0 000 9z",
        fill: color2
      }
    )
  );
});
var ZoomResetIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M1.5 2.837V1.5a.5.5 0 00-1 0V4a.5.5 0 00.5.5h2.5a.5.5 0 000-1H2.258a4.5 4.5 0 11-.496 4.016.5.5 0 10-.942.337 5.502 5.502 0 008.724 2.353.5.5 0 00.102.148l3 3a.5.5 0 00.708-.708l-3-3a.5.5 0 00-.148-.102A5.5 5.5 0 101.5 2.837z",
        fill: color2
      }
    )
  );
});
var EyeIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement("path", { d: "M7 9.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z", fill: color2 }),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 7l-.21.293C13.669 7.465 10.739 11.5 7 11.5S.332 7.465.21 7.293L0 7l.21-.293C.331 6.536 3.261 2.5 7 2.5s6.668 4.036 6.79 4.207L14 7zM2.896 5.302A12.725 12.725 0 001.245 7c.296.37.874 1.04 1.65 1.698C4.043 9.67 5.482 10.5 7 10.5c1.518 0 2.958-.83 4.104-1.802A12.72 12.72 0 0012.755 7c-.297-.37-.875-1.04-1.65-1.698C9.957 4.33 8.517 3.5 7 3.5c-1.519 0-2.958.83-4.104 1.802z",
        fill: color2
      }
    )
  );
});
var EyeCloseIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M1.854 1.146a.5.5 0 10-.708.708l11 11a.5.5 0 00.708-.708l-11-11zM11.104 8.698c-.177.15-.362.298-.553.439l.714.714a13.25 13.25 0 002.526-2.558L14 7l-.21-.293C13.669 6.536 10.739 2.5 7 2.5c-.89 0-1.735.229-2.506.58l.764.763A4.859 4.859 0 017 3.5c1.518 0 2.958.83 4.104 1.802A12.724 12.724 0 0112.755 7a12.72 12.72 0 01-1.65 1.698zM.21 6.707c.069-.096 1.03-1.42 2.525-2.558l.714.714c-.191.141-.376.288-.553.439A12.725 12.725 0 001.245 7c.296.37.874 1.04 1.65 1.698C4.043 9.67 5.482 10.5 7 10.5a4.86 4.86 0 001.742-.344l.764.764c-.772.351-1.616.58-2.506.58C3.262 11.5.332 7.465.21 7.293L0 7l.21-.293z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M4.5 7c0-.322.061-.63.172-.914l3.242 3.242A2.5 2.5 0 014.5 7zM9.328 7.914L6.086 4.672a2.5 2.5 0 013.241 3.241z",
        fill: color2
      }
    )
  );
});
var LightningIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2.522 6.6a.566.566 0 00-.176.544.534.534 0 00.382.41l2.781.721-1.493 5.013a.563.563 0 00.216.627.496.496 0 00.63-.06l6.637-6.453a.568.568 0 00.151-.54.534.534 0 00-.377-.396l-2.705-.708 2.22-4.976a.568.568 0 00-.15-.666.497.497 0 00-.648.008L2.522 6.6zm7.72.63l-3.067-.804L9.02 2.29 3.814 6.803l2.95.764-1.277 4.285 4.754-4.622zM4.51 13.435l.037.011-.037-.011z",
        fill: color2
      }
    )
  );
});
var LightningOffIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M10.139 8.725l1.36-1.323a.568.568 0 00.151-.54.534.534 0 00-.377-.396l-2.705-.708 2.22-4.976a.568.568 0 00-.15-.666.497.497 0 00-.648.008L5.464 4.05l.708.71 2.848-2.47-1.64 3.677.697.697 2.164.567-.81.787.708.708zM2.523 6.6a.566.566 0 00-.177.544.534.534 0 00.382.41l2.782.721-1.494 5.013a.563.563 0 00.217.627.496.496 0 00.629-.06l3.843-3.736-.708-.707-2.51 2.44 1.137-3.814-.685-.685-2.125-.55.844-.731-.71-.71L2.524 6.6zM1.854 1.146a.5.5 0 10-.708.708l11 11a.5.5 0 00.708-.708l-11-11z",
        fill: color2
      }
    )
  );
});
var ContrastIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3 3.004H.5a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h10a.5.5 0 00.5-.5v-2.5h2.5a.5.5 0 00.5-.5v-10a.5.5 0 00-.5-.5h-10a.5.5 0 00-.5.5v2.5zm1 1v2.293l2.293-2.293H4zm-1 0v6.5a.499.499 0 00.497.5H10v2H1v-9h2zm1-1h6.5a.499.499 0 01.5.5v6.5h2v-9H4v2zm6 7V7.71l-2.293 2.293H10zm0-3.707V4.71l-5.293 5.293h1.586L10 6.297zm-.707-2.293H7.707L4 7.71v1.586l5.293-5.293z",
        fill: color2
      }
    )
  );
});
var SwitchAltIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3 3.004v-2.5a.5.5 0 01.5-.5h10a.5.5 0 01.5.5v10a.5.5 0 01-.5.5H11v2.5a.5.5 0 01-.5.5H.5a.5.5 0 01-.5-.5v-10a.5.5 0 01.5-.5H3zm1 0v-2h9v9h-2v-6.5a.5.5 0 00-.5-.5H4zm6 8v2H1v-9h2v6.5a.5.5 0 00.5.5H10zm0-1H4v-6h6v6z",
        fill: color2
      }
    )
  );
});
var MirrorIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1 1.504a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11zm1 10.5h10v-10l-10 10z",
        fill: color2
      }
    )
  );
});
var GrowIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M1.5 1.004a.5.5 0 100 1H12v10.5a.5.5 0 001 0v-10.5a1 1 0 00-1-1H1.5z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M1 3.504a.5.5 0 01.5-.5H10a1 1 0 011 1v8.5a.5.5 0 01-1 0v-8.5H1.5a.5.5 0 01-.5-.5z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1.5 5.004a.5.5 0 00-.5.5v7a.5.5 0 00.5.5h7a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5h-7zm.5 1v6h6v-6H2z",
        fill: color2
      }
    )
  );
});
var PaintBrushIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.854.146a.5.5 0 00-.708 0L2.983 8.31a2.24 2.24 0 00-1.074.6C.677 10.14.24 11.902.085 12.997 0 13.6 0 14 0 14s.4 0 1.002-.085c1.095-.155 2.857-.592 4.089-1.824a2.24 2.24 0 00.6-1.074l8.163-8.163a.5.5 0 000-.708l-2-2zM5.6 9.692l.942-.942L5.25 7.457l-.942.943A2.242 2.242 0 015.6 9.692zm1.649-1.65L12.793 2.5 11.5 1.207 5.957 6.75 7.25 8.043zM4.384 9.617a1.25 1.25 0 010 1.768c-.767.766-1.832 1.185-2.78 1.403-.17.04-.335.072-.49.098.027-.154.06-.318.099-.49.219-.947.637-2.012 1.403-2.779a1.25 1.25 0 011.768 0z",
        fill: color2
      }
    )
  );
});
var RulerIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M1.5 1.004a.5.5 0 01.5.5v.5h10v-.5a.5.5 0 011 0v2a.5.5 0 01-1 0v-.5H2v.5a.5.5 0 01-1 0v-2a.5.5 0 01.5-.5z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1.5 6a.5.5 0 00-.5.5v6a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5h-11zM2 7v5h10V7h-1v2.5a.5.5 0 01-1 0V7h-.75v1a.5.5 0 01-1 0V7H7.5v2.5a.5.5 0 01-1 0V7h-.75v1a.5.5 0 01-1 0V7H4v2.5a.5.5 0 01-1 0V7H2z",
        fill: color2
      }
    )
  );
});
var StopIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M4.5 4a.5.5 0 00-.5.5v5a.5.5 0 00.5.5h5a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5h-5z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
        fill: color2
      }
    )
  );
});
var CameraIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10 7a3 3 0 11-6 0 3 3 0 016 0zM9 7a2 2 0 11-4 0 2 2 0 014 0z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2.5 1a.5.5 0 00-.5.5v.504H.5a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5H6V1.5a.5.5 0 00-.5-.5h-3zM1 3.004v8h12v-8H1z",
        fill: color2
      }
    )
  );
});
var VideoIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement("path", { d: "M2.5 10a.5.5 0 100-1 .5.5 0 000 1z", fill: color2 }),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M0 4a2 2 0 012-2h6a2 2 0 012 2v.5l3.189-2.391A.5.5 0 0114 2.5v9a.5.5 0 01-.804.397L10 9.5v.5a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm9 0v1.5a.5.5 0 00.8.4L13 3.5v7L9.8 8.1a.5.5 0 00-.8.4V10a1 1 0 01-1 1H2a1 1 0 01-1-1V4a1 1 0 011-1h6a1 1 0 011 1z",
        fill: color2
      }
    )
  );
});
var SpeakerIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1 4.5v5a.5.5 0 00.5.5H4l3.17 2.775a.5.5 0 00.83-.377V1.602a.5.5 0 00-.83-.376L4 4H1.5a.5.5 0 00-.5.5zM4 9V5H2v4h2zm.998.545A.504.504 0 005 9.5v-5c0-.015 0-.03-.002-.044L7 2.704v8.592L4.998 9.545z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M10.15 1.752a.5.5 0 00-.3.954 4.502 4.502 0 010 8.588.5.5 0 00.3.954 5.502 5.502 0 000-10.496z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M10.25 3.969a.5.5 0 00-.5.865 2.499 2.499 0 010 4.332.5.5 0 10.5.866 3.499 3.499 0 000-6.063z",
        fill: color2
      }
    )
  );
});
var PlayIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M12.813 7.425l-9.05 5.603A.5.5 0 013 12.603V1.398a.5.5 0 01.763-.425l9.05 5.602a.5.5 0 010 .85z",
        fill: color2
      }
    )
  );
});
var PlayBackIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M11.24 12.035L3.697 7.427A.494.494 0 013.5 7.2v4.05a.75.75 0 01-1.5 0v-8.5a.75.75 0 011.5 0V6.8a.494.494 0 01.198-.227l7.541-4.608A.5.5 0 0112 2.39v9.217a.5.5 0 01-.76.427z",
        fill: color2
      }
    )
  );
});
var PlayNextIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M2.76 12.035l7.542-4.608A.495.495 0 0010.5 7.2v4.05a.75.75 0 001.5 0v-8.5a.75.75 0 00-1.5 0V6.8a.495.495 0 00-.198-.227L2.76 1.965A.5.5 0 002 2.39v9.217a.5.5 0 00.76.427z",
        fill: color2
      }
    )
  );
});
var RewindIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M9 2.42v2.315l4.228-2.736a.5.5 0 01.772.42v9.162a.5.5 0 01-.772.42L9 9.263v2.317a.5.5 0 01-.772.42L1.5 7.647v3.603a.75.75 0 01-1.5 0v-8.5a.75.75 0 011.5 0v3.603L8.228 2A.5.5 0 019 2.42z",
        fill: color2
      }
    )
  );
});
var FastForwardIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M5 2.42v2.315L.772 1.999a.5.5 0 00-.772.42v9.162a.5.5 0 00.772.42L5 9.263v2.317a.5.5 0 00.772.42L12.5 7.647v3.603a.75.75 0 001.5 0v-8.5a.75.75 0 00-1.5 0v3.603L5.772 2A.5.5 0 005 2.42z",
        fill: color2
      }
    )
  );
});
var StopAltIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M1 1.504a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11z",
        fill: color2
      }
    )
  );
});
var SideBySideIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1 1.504a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11zm1 10.5v-10h5v10H2z",
        fill: color2
      }
    )
  );
});
var StackedIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.5 1.004a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h11zm-10.5 1h10v5H2v-5z",
        fill: color2
      }
    )
  );
});
var SunIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement("g", { clipPath: "url(#prefix__clip0_1107_3492)", fill: color2 }, /* @__PURE__ */ reactExports.createElement("path", { d: "M7.5.5a.5.5 0 00-1 0V2a.5.5 0 001 0V.5z" }), /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 10a3 3 0 100-6 3 3 0 000 6zm0-1a2 2 0 100-4 2 2 0 000 4z"
      }
    ), /* @__PURE__ */ reactExports.createElement("path", { d: "M7 11.5a.5.5 0 01.5.5v1.5a.5.5 0 01-1 0V12a.5.5 0 01.5-.5zM11.5 7a.5.5 0 01.5-.5h1.5a.5.5 0 010 1H12a.5.5 0 01-.5-.5zM.5 6.5a.5.5 0 000 1H2a.5.5 0 000-1H.5zM3.818 10.182a.5.5 0 010 .707l-1.06 1.06a.5.5 0 11-.708-.706l1.06-1.06a.5.5 0 01.708 0zM11.95 2.757a.5.5 0 10-.707-.707l-1.061 1.061a.5.5 0 10.707.707l1.06-1.06zM10.182 10.182a.5.5 0 01.707 0l1.06 1.06a.5.5 0 11-.706.708l-1.061-1.06a.5.5 0 010-.708zM2.757 2.05a.5.5 0 10-.707.707l1.06 1.061a.5.5 0 00.708-.707l-1.06-1.06z" })),
    /* @__PURE__ */ reactExports.createElement("defs", null, /* @__PURE__ */ reactExports.createElement("clipPath", { id: "prefix__clip0_1107_3492" }, /* @__PURE__ */ reactExports.createElement("path", { fill: "#fff", d: "M0 0h14v14H0z" })))
  );
});
var MoonIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement("g", { clipPath: "url(#prefix__clip0_1107_3493)" }, /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.335.047l-.15-.015a7.499 7.499 0 106.14 10.577c.103-.229-.156-.447-.386-.346a5.393 5.393 0 01-.771.27A5.356 5.356 0 019.153.691C9.37.568 9.352.23 9.106.175a7.545 7.545 0 00-.77-.128zM6.977 1.092a6.427 6.427 0 005.336 10.671A6.427 6.427 0 116.977 1.092z",
        fill: color2
      }
    )),
    /* @__PURE__ */ reactExports.createElement("defs", null, /* @__PURE__ */ reactExports.createElement("clipPath", { id: "prefix__clip0_1107_3493" }, /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fill: "#fff",
        transform: "scale(1.07124)",
        d: "M0 0h14.001v14.002H0z"
      }
    )))
  );
});
var BookIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M13 2a2 2 0 00-2-2H1.5a.5.5 0 00-.5.5v13a.5.5 0 00.5.5H11a2 2 0 002-2V2zM3 13h8a1 1 0 001-1V2a1 1 0 00-1-1H7v6.004a.5.5 0 01-.856.352l-.002-.002L5.5 6.71l-.645.647A.5.5 0 014 7.009V1H3v12zM5 1v4.793l.146-.146a.5.5 0 01.743.039l.111.11V1H5z",
        fill: color2
      }
    )
  );
});
var DocumentIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M4 5.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zM4.5 7.5a.5.5 0 000 1h5a.5.5 0 000-1h-5zM4 10.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1.5 0a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h11a.5.5 0 00.5-.5V3.207a.5.5 0 00-.146-.353L10.146.146A.5.5 0 009.793 0H1.5zM2 1h7.5v2a.5.5 0 00.5.5h2V13H2V1z",
        fill: color2
      }
    )
  );
});
var CopyIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.746.07A.5.5 0 0011.5.003h-6a.5.5 0 00-.5.5v2.5H.5a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h8a.5.5 0 00.5-.5v-2.5h4.5a.5.5 0 00.5-.5v-8a.498.498 0 00-.15-.357L11.857.154a.506.506 0 00-.11-.085zM9 10.003h4v-7h-1.5a.5.5 0 01-.5-.5v-1.5H6v2h.5a.5.5 0 01.357.15L8.85 5.147c.093.09.15.217.15.357v4.5zm-8-6v9h7v-7H6.5a.5.5 0 01-.5-.5v-1.5H1z",
        fill: color2
      }
    )
  );
});
var CategoryIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M3 1.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zM2 3.504a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1 5.5a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v7a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-7zM2 12V6h10v6H2z",
        fill: color2
      }
    )
  );
});
var FolderIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.586 3.504l-1.5-1.5H1v9h12v-7.5H6.586zm.414-1L5.793 1.297a1 1 0 00-.707-.293H.5a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-8.5a.5.5 0 00-.5-.5H7z",
        fill: color2
      }
    )
  );
});
var PrintIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M4.5 8.004a.5.5 0 100 1h5a.5.5 0 000-1h-5zM4.5 10.004a.5.5 0 000 1h5a.5.5 0 000-1h-5z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2 1.504a.5.5 0 01.5-.5h8a.498.498 0 01.357.15l.993.993c.093.09.15.217.15.357v1.5h1.5a.5.5 0 01.5.5v5a.5.5 0 01-.5.5H12v2.5a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-2.5H.5a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5H2v-2.5zm11 7.5h-1v-2.5a.5.5 0 00-.5-.5h-9a.5.5 0 00-.5.5v2.5H1v-4h12v4zm-2-6v1H3v-2h7v.5a.5.5 0 00.5.5h.5zm-8 9h8v-5H3v5z",
        fill: color2
      }
    )
  );
});
var GraphLineIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M5.146 6.15a.5.5 0 01.708 0L7 7.297 9.146 5.15a.5.5 0 01.708 0l1 1a.5.5 0 01-.708.707L9.5 6.211 7.354 8.357a.5.5 0 01-.708 0L5.5 7.211 3.854 8.857a.5.5 0 11-.708-.707l2-2z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1.5 1.004a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-11a.5.5 0 00-.5-.5h-11zm.5 1v10h10v-10H2z",
        fill: color2
      }
    )
  );
});
var CalendarIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.5 0a.5.5 0 01.5.5V1h6V.5a.5.5 0 011 0V1h1.5a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H3V.5a.5.5 0 01.5-.5zM2 4v2.3h3V4H2zm0 5.2V6.8h3v2.4H2zm0 .5V12h3V9.7H2zm3.5 0V12h3V9.7h-3zm3.5 0V12h3V9.7H9zm3-.5H9V6.8h3v2.4zm-3.5 0h-3V6.8h3v2.4zM9 4v2.3h3V4H9zM5.5 6.3h3V4h-3v2.3z",
        fill: color2
      }
    )
  );
});
var GraphBarIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M12 2.5a.5.5 0 00-1 0v10a.5.5 0 001 0v-10zM9 4.5a.5.5 0 00-1 0v8a.5.5 0 001 0v-8zM5.5 7a.5.5 0 01.5.5v5a.5.5 0 01-1 0v-5a.5.5 0 01.5-.5zM3 10.5a.5.5 0 00-1 0v2a.5.5 0 001 0v-2z",
        fill: color2
      }
    )
  );
});
var AlignLeftIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M13 2a.5.5 0 010 1H1a.5.5 0 010-1h12zM10 5a.5.5 0 010 1H1a.5.5 0 010-1h9zM11.5 8.5A.5.5 0 0011 8H1a.5.5 0 000 1h10a.5.5 0 00.5-.5zM7.5 11a.5.5 0 010 1H1a.5.5 0 010-1h6.5z",
        fill: color2
      }
    )
  );
});
var AlignRightIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M1 2a.5.5 0 000 1h12a.5.5 0 000-1H1zM4 5a.5.5 0 000 1h9a.5.5 0 000-1H4zM2.5 8.5A.5.5 0 013 8h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zM6.5 11a.5.5 0 000 1H13a.5.5 0 000-1H6.5z",
        fill: color2
      }
    )
  );
});
var FilterIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M1 2a.5.5 0 000 1h12a.5.5 0 000-1H1zM3 5a.5.5 0 000 1h8a.5.5 0 000-1H3zM4.5 8.5A.5.5 0 015 8h4a.5.5 0 010 1H5a.5.5 0 01-.5-.5zM6.5 11a.5.5 0 000 1h1a.5.5 0 000-1h-1z",
        fill: color2
      }
    )
  );
});
var DocChartIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1 1.5a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11zM2 4v2.3h3V4H2zm0 5.2V6.8h3v2.4H2zm0 .5V12h3V9.7H2zm3.5 0V12h3V9.7h-3zm3.5 0V12h3V9.7H9zm3-.5H9V6.8h3v2.4zm-3.5 0h-3V6.8h3v2.4zM9 6.3h3V4H9v2.3zm-3.5 0h3V4h-3v2.3z",
        fill: color2
      }
    )
  );
});
var DocListIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M3.5 6.5A.5.5 0 014 6h6a.5.5 0 010 1H4a.5.5 0 01-.5-.5zM4 9a.5.5 0 000 1h6a.5.5 0 000-1H4z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1 1.5a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11zM2 4v8h10V4H2z",
        fill: color2
      }
    )
  );
});
var DragIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M13 4a.5.5 0 010 1H1a.5.5 0 010-1h12zM13.5 9.5A.5.5 0 0013 9H1a.5.5 0 000 1h12a.5.5 0 00.5-.5z",
        fill: color2
      }
    )
  );
});
var MenuIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M13 3.5a.5.5 0 010 1H1a.5.5 0 010-1h12zM13.5 10a.5.5 0 00-.5-.5H1a.5.5 0 000 1h12a.5.5 0 00.5-.5zM13 6.5a.5.5 0 010 1H1a.5.5 0 010-1h12z",
        fill: color2
      }
    )
  );
});
var MarkupIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M8.982 1.632a.5.5 0 00-.964-.263l-3 11a.5.5 0 10.964.263l3-11zM3.32 3.616a.5.5 0 01.064.704L1.151 7l2.233 2.68a.5.5 0 11-.768.64l-2.5-3a.5.5 0 010-.64l2.5-3a.5.5 0 01.704-.064zM10.68 3.616a.5.5 0 00-.064.704L12.849 7l-2.233 2.68a.5.5 0 00.768.64l2.5-3a.5.5 0 000-.64l-2.5-3a.5.5 0 00-.704-.064z",
        fill: color2
      }
    )
  );
});
var BoldIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3 2v1.5h1v7H3V12h5a3 3 0 001.791-5.407A2.75 2.75 0 008 2.011V2H3zm5 5.5H5.5v3H8a1.5 1.5 0 100-3zm-.25-4H5.5V6h2.25a1.25 1.25 0 100-2.5z",
        fill: color2
      }
    )
  );
});
var ItalicIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement("path", { d: "M5 2h6v1H8.5l-2 8H9v1H3v-1h2.5l2-8H5V2z", fill: color2 })
  );
});
var PaperClipIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M10.553 2.268a1.5 1.5 0 00-2.12 0L2.774 7.925a2.5 2.5 0 003.536 3.535l3.535-3.535a.5.5 0 11.707.707l-3.535 3.536-.002.002a3.5 3.5 0 01-4.959-4.941l.011-.011L7.725 1.56l.007-.008a2.5 2.5 0 013.53 3.541l-.002.002-5.656 5.657-.003.003a1.5 1.5 0 01-2.119-2.124l3.536-3.536a.5.5 0 11.707.707L4.189 9.34a.5.5 0 00.707.707l5.657-5.657a1.5 1.5 0 000-2.121z",
        fill: color2
      }
    )
  );
});
var ListOrderedIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M5 2.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zM5 7a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7A.5.5 0 015 7zM5.5 11a.5.5 0 000 1h7a.5.5 0 000-1h-7zM2.5 2H1v1h1v3h1V2.5a.5.5 0 00-.5-.5zM3 8.5v1a.5.5 0 01-1 0V9h-.5a.5.5 0 010-1h1a.5.5 0 01.5.5zM2 10.5a.5.5 0 00-1 0V12h2v-1H2v-.5z",
        fill: color2
      }
    )
  );
});
var ListUnorderedIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M2.75 2.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM5.5 2a.5.5 0 000 1h7a.5.5 0 000-1h-7zM5.5 11a.5.5 0 000 1h7a.5.5 0 000-1h-7zM2 12.25a.75.75 0 100-1.5.75.75 0 000 1.5zM5 7a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7A.5.5 0 015 7zM2 7.75a.75.75 0 100-1.5.75.75 0 000 1.5z",
        fill: color2
      }
    )
  );
});
var ParagraphIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M6 7a3 3 0 110-6h5.5a.5.5 0 010 1H10v10.5a.5.5 0 01-1 0V2H7v10.5a.5.5 0 01-1 0V7z",
        fill: color2
      }
    )
  );
});
var MarkdownIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M2 4.5h1.5L5 6.375 6.5 4.5H8v5H6.5V7L5 8.875 3.5 7v2.5H2v-5zM9.75 4.5h1.5V7h1.25l-2 2.5-2-2.5h1.25V4.5z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M.5 2a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5H.5zM1 3v8h12V3H1z",
        fill: color2
      }
    )
  );
});
var RepoIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M5 2.5a.5.5 0 11-1 0 .5.5 0 011 0zM4.5 5a.5.5 0 100-1 .5.5 0 000 1zM5 6.5a.5.5 0 11-1 0 .5.5 0 011 0z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11 0a2 2 0 012 2v10a2 2 0 01-2 2H1.5a.5.5 0 01-.5-.5V.5a.5.5 0 01.5-.5H11zm0 1H3v12h8a1 1 0 001-1V2a1 1 0 00-1-1z",
        fill: color2
      }
    )
  );
});
var CommitIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.031 7.5a4 4 0 007.938 0H13.5a.5.5 0 000-1h-2.53a4 4 0 00-7.94 0H.501a.5.5 0 000 1h2.531zM7 10a3 3 0 100-6 3 3 0 000 6z",
        fill: color2
      }
    )
  );
});
var BranchIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6 2.5a1.5 1.5 0 01-1 1.415v4.053C5.554 7.4 6.367 7 7.5 7c.89 0 1.453-.252 1.812-.557.218-.184.374-.4.482-.62a1.5 1.5 0 111.026.143c-.155.423-.425.87-.86 1.24C9.394 7.685 8.59 8 7.5 8c-1.037 0-1.637.42-1.994.917a2.81 2.81 0 00-.472 1.18A1.5 1.5 0 114 10.086v-6.17A1.5 1.5 0 116 2.5zm-2 9a.5.5 0 111 0 .5.5 0 01-1 0zm1-9a.5.5 0 11-1 0 .5.5 0 011 0zm6 2a.5.5 0 11-1 0 .5.5 0 011 0z",
        fill: color2
      }
    )
  );
});
var PullRequestIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.354 1.354L7.707 2H8.5A2.5 2.5 0 0111 4.5v5.585a1.5 1.5 0 11-1 0V4.5A1.5 1.5 0 008.5 3h-.793l.647.646a.5.5 0 11-.708.708l-1.5-1.5a.5.5 0 010-.708l1.5-1.5a.5.5 0 11.708.708zM11 11.5a.5.5 0 11-1 0 .5.5 0 011 0zM4 3.915a1.5 1.5 0 10-1 0v6.17a1.5 1.5 0 101 0v-6.17zM3.5 11a.5.5 0 100 1 .5.5 0 000-1zm0-8a.5.5 0 100-1 .5.5 0 000 1z",
        fill: color2
      }
    )
  );
});
var MergeIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.108 3.872A1.5 1.5 0 103 3.915v6.17a1.5 1.5 0 101 0V6.41c.263.41.573.77.926 1.083 1.108.98 2.579 1.433 4.156 1.5A1.5 1.5 0 109.09 7.99c-1.405-.065-2.62-.468-3.5-1.248-.723-.64-1.262-1.569-1.481-2.871zM3.5 11a.5.5 0 100 1 .5.5 0 000-1zM4 2.5a.5.5 0 11-1 0 .5.5 0 011 0zm7 6a.5.5 0 11-1 0 .5.5 0 011 0z",
        fill: color2
      }
    )
  );
});
var AppleIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M11.03 8.103a3.044 3.044 0 01-.202-1.744 2.697 2.697 0 011.4-1.935c-.749-1.18-1.967-1.363-2.35-1.403-.835-.086-2.01.56-2.648.57h-.016c-.639-.01-1.814-.656-2.649-.57-.415.044-1.741.319-2.541 1.593-.281.447-.498 1.018-.586 1.744a6.361 6.361 0 00-.044.85c.005.305.028.604.07.895.09.62.259 1.207.477 1.744.242.595.543 1.13.865 1.585.712 1.008 1.517 1.59 1.971 1.6.934.021 1.746-.61 2.416-.594.006.002.014.003.02.002h.017c.007 0 .014 0 .021-.002.67-.017 1.481.615 2.416.595.453-.011 1.26-.593 1.971-1.6a7.95 7.95 0 00.97-1.856c-.697-.217-1.27-.762-1.578-1.474zm-2.168-5.97c.717-.848.69-2.07.624-2.125-.065-.055-1.25.163-1.985.984-.735.82-.69 2.071-.624 2.125.064.055 1.268-.135 1.985-.984z",
        fill: color2
      }
    )
  );
});
var LinuxIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 0a3 3 0 013 3v1.24c.129.132.25.27.362.415.113.111.283.247.515.433l.194.155c.325.261.711.582 1.095.966.765.765 1.545 1.806 1.823 3.186a.501.501 0 01-.338.581 3.395 3.395 0 01-1.338.134 2.886 2.886 0 01-1.049-.304 5.535 5.535 0 01-.17.519 2 2 0 11-2.892 2.55A5.507 5.507 0 017 13c-.439 0-.838-.044-1.201-.125a2 2 0 11-2.892-2.55 5.553 5.553 0 01-.171-.519c-.349.182-.714.27-1.05.304A3.395 3.395 0 01.35 9.977a.497.497 0 01-.338-.582c.278-1.38 1.058-2.42 1.823-3.186.384-.384.77-.705 1.095-.966l.194-.155c.232-.186.402-.322.515-.433.112-.145.233-.283.362-.414V3a3 3 0 013-3zm1.003 11.895a2 2 0 012.141-1.89c.246-.618.356-1.322.356-2.005 0-.514-.101-1.07-.301-1.599l-.027-.017a6.387 6.387 0 00-.857-.42 6.715 6.715 0 00-1.013-.315l-.852.638a.75.75 0 01-.9 0l-.852-.638a6.716 6.716 0 00-1.693.634 4.342 4.342 0 00-.177.101l-.027.017A4.6 4.6 0 003.501 8c0 .683.109 1.387.355 2.005a2 2 0 012.142 1.89c.295.067.627.105 1.002.105s.707-.038 1.003-.105zM5 12a1 1 0 11-2 0 1 1 0 012 0zm6 0a1 1 0 11-2 0 1 1 0 012 0zM6.1 4.3a1.5 1.5 0 011.8 0l.267.2L7 5.375 5.833 4.5l.267-.2zM8.5 2a.5.5 0 01.5.5V3a.5.5 0 01-1 0v-.5a.5.5 0 01.5-.5zM6 2.5a.5.5 0 00-1 0V3a.5.5 0 001 0v-.5z",
        fill: color2
      }
    )
  );
});
var UbuntuIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement("g", { clipPath: "url(#prefix__clip0_1107_3497)", fill: color2 }, /* @__PURE__ */ reactExports.createElement("path", { d: "M12.261 2.067c0 1.142-.89 2.068-1.988 2.068-1.099 0-1.99-.926-1.99-2.068C8.283.926 9.174 0 10.273 0c1.098 0 1.989.926 1.989 2.067zM3.978 6.6c0 1.142-.89 2.068-1.989 2.068C.891 8.668 0 7.742 0 6.601c0-1.142.89-2.068 1.989-2.068 1.099 0 1.989.926 1.989 2.068zM6.475 11.921A4.761 4.761 0 014.539 11a4.993 4.993 0 01-1.367-1.696 2.765 2.765 0 01-1.701.217 6.725 6.725 0 001.844 2.635 6.379 6.379 0 004.23 1.577 3.033 3.033 0 01-.582-1.728 4.767 4.767 0 01-.488-.083zM11.813 11.933c0 1.141-.89 2.067-1.989 2.067-1.098 0-1.989-.926-1.989-2.067 0-1.142.891-2.068 1.99-2.068 1.098 0 1.989.926 1.989 2.068zM12.592 11.173a6.926 6.926 0 001.402-3.913 6.964 6.964 0 00-1.076-4.023A2.952 2.952 0 0111.8 4.6c.398.78.592 1.656.564 2.539a5.213 5.213 0 01-.724 2.495c.466.396.8.935.952 1.54zM1.987 3.631c-.05 0-.101.002-.151.004C3.073 1.365 5.504.024 8.005.23a3.07 3.07 0 00-.603 1.676 4.707 4.707 0 00-2.206.596 4.919 4.919 0 00-1.7 1.576 2.79 2.79 0 00-1.509-.447z" })),
    /* @__PURE__ */ reactExports.createElement("defs", null, /* @__PURE__ */ reactExports.createElement("clipPath", { id: "prefix__clip0_1107_3497" }, /* @__PURE__ */ reactExports.createElement("path", { fill: "#fff", d: "M0 0h14v14H0z" })))
  );
});
var WindowsIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M6.5 1H1v5.5h5.5V1zM13 1H7.5v5.5H13V1zM7.5 7.5H13V13H7.5V7.5zM6.5 7.5H1V13h5.5V7.5z",
        fill: color2
      }
    )
  );
});
var ChromeIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement("g", { clipPath: "url(#prefix__clip0_1107_3496)" }, /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M13.023 3.431a.115.115 0 01-.099.174H7.296A3.408 3.408 0 003.7 6.148a.115.115 0 01-.21.028l-1.97-3.413a.115.115 0 01.01-.129A6.97 6.97 0 017 0a6.995 6.995 0 016.023 3.431zM7 9.615A2.619 2.619 0 014.384 7 2.62 2.62 0 017 4.383 2.619 2.619 0 019.616 7 2.619 2.619 0 017 9.615zm1.034.71a.115.115 0 00-.121-.041 3.4 3.4 0 01-.913.124 3.426 3.426 0 01-3.091-1.973L1.098 3.567a.115.115 0 00-.2.001 7.004 7.004 0 005.058 10.354l.017.001c.04 0 .078-.021.099-.057l1.971-3.414a.115.115 0 00-.009-.128zm1.43-5.954h3.947c.047 0 .09.028.107.072.32.815.481 1.675.481 2.557a6.957 6.957 0 01-2.024 4.923A6.957 6.957 0 017.08 14h-.001a.115.115 0 01-.1-.172L9.794 8.95A3.384 3.384 0 0010.408 7c0-.921-.364-1.785-1.024-2.433a.115.115 0 01.08-.196z",
        fill: color2
      }
    )),
    /* @__PURE__ */ reactExports.createElement("defs", null, /* @__PURE__ */ reactExports.createElement("clipPath", { id: "prefix__clip0_1107_3496" }, /* @__PURE__ */ reactExports.createElement("path", { fill: "#fff", d: "M0 0h14v14H0z" })))
  );
});
var StorybookIcon$1 = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2.042.616a.704.704 0 00-.66.729L1.816 12.9c.014.367.306.66.672.677l9.395.422h.032a.704.704 0 00.704-.703V.704c0-.015 0-.03-.002-.044a.704.704 0 00-.746-.659l-.773.049.057 1.615a.105.105 0 01-.17.086l-.52-.41-.617.468a.105.105 0 01-.168-.088L9.746.134 2.042.616zm8.003 4.747c-.247.192-2.092.324-2.092.05.04-1.045-.429-1.091-.689-1.091-.247 0-.662.075-.662.634 0 .57.607.893 1.32 1.27 1.014.538 2.24 1.188 2.24 2.823 0 1.568-1.273 2.433-2.898 2.433-1.676 0-3.141-.678-2.976-3.03.065-.275 2.197-.21 2.197 0-.026.971.195 1.256.753 1.256.43 0 .624-.236.624-.634 0-.602-.633-.958-1.361-1.367-.987-.554-2.148-1.205-2.148-2.7 0-1.494 1.027-2.489 2.86-2.489 1.832 0 2.832.98 2.832 2.845z",
        fill: color2
      }
    )
  );
});
var AzureDevOpsIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement("g", { clipPath: "url(#prefix__clip0_1107_3503)" }, /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M0 5.176l1.31-1.73 4.902-1.994V.014l4.299 3.144-8.78 1.706v4.8L0 9.162V5.176zm14-2.595v8.548l-3.355 2.857-5.425-1.783v1.783L1.73 9.661l8.784 1.047v-7.55L14 2.581z",
        fill: color2
      }
    )),
    /* @__PURE__ */ reactExports.createElement("defs", null, /* @__PURE__ */ reactExports.createElement("clipPath", { id: "prefix__clip0_1107_3503" }, /* @__PURE__ */ reactExports.createElement("path", { fill: "#fff", d: "M0 0h14v14H0z" })))
  );
});
var BitbucketIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1 1.522a.411.411 0 00-.412.476l1.746 10.597a.56.56 0 00.547.466h8.373a.411.411 0 00.412-.345l1.017-6.248h-3.87L8.35 9.18H5.677l-.724-3.781h7.904L13.412 2A.411.411 0 0013 1.524L1 1.522z",
        fill: color2
      }
    )
  );
});
var ChromaticIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M0 7a7 7 0 1014 0A7 7 0 000 7zm5.215-3.869a1.967 1.967 0 013.747.834v1.283l-3.346-1.93a2.486 2.486 0 00-.401-.187zm3.484 2.58l-3.346-1.93a1.968 1.968 0 00-2.685.72 1.954 1.954 0 00.09 2.106 2.45 2.45 0 01.362-.254l1.514-.873a.27.27 0 01.268 0l2.1 1.21 1.697-.978zm-.323 4.972L6.86 9.81a.268.268 0 01-.134-.231V7.155l-1.698-.98v3.86a1.968 1.968 0 003.747.835 2.488 2.488 0 01-.4-.187zm.268-.464a1.967 1.967 0 002.685-.719 1.952 1.952 0 00-.09-2.106c-.112.094-.233.18-.361.253L7.53 9.577l1.113.642zm-4.106.257a1.974 1.974 0 01-1.87-.975A1.95 1.95 0 012.47 8.01c.136-.507.461-.93.916-1.193L4.5 6.175v3.86c0 .148.013.295.039.44zM11.329 4.5a1.973 1.973 0 00-1.87-.976c.025.145.039.292.039.44v1.747a.268.268 0 01-.135.232l-2.1 1.211v1.96l3.346-1.931a1.966 1.966 0 00.72-2.683z",
        fill: color2
      }
    )
  );
});
var ComponentDrivenIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M10.847 2.181L8.867.201a.685.685 0 00-.97 0l-4.81 4.81a.685.685 0 000 .969l2.466 2.465-2.405 2.404a.685.685 0 000 .97l1.98 1.98a.685.685 0 00.97 0l4.81-4.81a.685.685 0 000-.969L8.441 5.555l2.405-2.404a.685.685 0 000-.97z",
        fill: color2
      }
    )
  );
});
var DiscordIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M11.852 2.885c-.893-.41-1.85-.712-2.85-.884a.043.043 0 00-.046.021c-.123.22-.26.505-.355.73a10.658 10.658 0 00-3.2 0 7.377 7.377 0 00-.36-.73.045.045 0 00-.046-.021c-1 .172-1.957.474-2.85.884a.04.04 0 00-.019.016C.311 5.612-.186 8.257.058 10.869a.048.048 0 00.018.033 11.608 11.608 0 003.496 1.767.045.045 0 00.049-.016c.27-.368.51-.755.715-1.163a.044.044 0 00-.024-.062 7.661 7.661 0 01-1.092-.52.045.045 0 01-.005-.075c.074-.055.147-.112.217-.17a.043.043 0 01.046-.006c2.29 1.046 4.771 1.046 7.035 0a.043.043 0 01.046.006c.07.057.144.115.218.17a.045.045 0 01-.004.075 7.186 7.186 0 01-1.093.52.045.045 0 00-.024.062c.21.407.45.795.715 1.162.011.016.03.023.05.017a11.57 11.57 0 003.5-1.767.045.045 0 00.019-.032c.292-3.02-.49-5.643-2.07-7.969a.036.036 0 00-.018-.016zM4.678 9.279c-.69 0-1.258-.634-1.258-1.411 0-.778.558-1.411 1.258-1.411.707 0 1.27.639 1.259 1.41 0 .778-.558 1.412-1.259 1.412zm4.652 0c-.69 0-1.258-.634-1.258-1.411 0-.778.557-1.411 1.258-1.411.707 0 1.27.639 1.258 1.41 0 .778-.551 1.412-1.258 1.412z",
        fill: color2
      }
    )
  );
});
var FacebookIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7.399 14H5.06V7H3.5V4.588l1.56-.001-.002-1.421C5.058 1.197 5.533 0 7.6 0h1.721v2.413H8.246c-.805 0-.844.337-.844.966l-.003 1.208h1.934l-.228 2.412L7.401 7l-.002 7z",
        fill: color2
      }
    )
  );
});
var FigmaIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.2 0H4.803A2.603 2.603 0 003.41 4.802a2.603 2.603 0 000 4.396 2.602 2.602 0 103.998 2.199v-2.51a2.603 2.603 0 103.187-4.085A2.604 2.604 0 009.2 0zM7.407 7a1.793 1.793 0 103.586 0 1.793 1.793 0 00-3.586 0zm-.81 2.603H4.803a1.793 1.793 0 101.794 1.794V9.603zM4.803 4.397h1.794V.81H4.803a1.793 1.793 0 000 3.587zm0 .81a1.793 1.793 0 000 3.586h1.794V5.207H4.803zm4.397-.81H7.407V.81H9.2a1.794 1.794 0 010 3.587z",
        fill: color2
      }
    )
  );
});
var GDriveIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M6.37 8.768l-2.042 3.537h6.755l2.042-3.537H6.37zm6.177-1.003l-3.505-6.07H4.96l3.504 6.07h4.084zM4.378 2.7L.875 8.77l2.042 3.536L6.42 6.236 4.378 2.7z",
        fill: color2
      }
    )
  );
});
var GithubIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 0C3.132 0 0 3.132 0 7a6.996 6.996 0 004.786 6.641c.35.062.482-.149.482-.332 0-.166-.01-.718-.01-1.304-1.758.324-2.213-.429-2.353-.823-.079-.2-.42-.822-.717-.988-.246-.132-.596-.455-.01-.464.552-.009.946.508 1.077.717.63 1.06 1.636.762 2.039.578.061-.455.245-.761.446-.936-1.558-.175-3.185-.779-3.185-3.457 0-.76.271-1.39.717-1.88-.07-.176-.314-.893.07-1.856 0 0 .587-.183 1.925.718a6.495 6.495 0 011.75-.236c.595 0 1.19.078 1.75.236 1.34-.91 1.926-.718 1.926-.718.385.963.14 1.68.07 1.855.446.49.717 1.111.717 1.881 0 2.687-1.636 3.282-3.194 3.457.254.218.473.638.473 1.295 0 .936-.009 1.688-.009 1.925 0 .184.131.402.481.332A7.012 7.012 0 0014 7c0-3.868-3.133-7-7-7z",
        fill: color2
      }
    )
  );
});
var GitlabIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1.068 5.583l1.487-4.557a.256.256 0 01.487 0L4.53 5.583H1.068L7 13.15 4.53 5.583h4.941l-2.47 7.565 5.931-7.565H9.471l1.488-4.557a.256.256 0 01.486 0l1.488 4.557.75 2.3a.508.508 0 01-.185.568L7 13.148v.001H7L.503 8.452a.508.508 0 01-.186-.57l.75-2.299z",
        fill: color2
      }
    )
  );
});
var GoogleIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M10.925 1.094H7.262c-1.643 0-3.189 1.244-3.189 2.685 0 1.473 1.12 2.661 2.791 2.661.116 0 .23-.002.34-.01a1.49 1.49 0 00-.186.684c0 .41.22.741.498 1.012-.21 0-.413.006-.635.006-2.034 0-3.6 1.296-3.6 2.64 0 1.323 1.717 2.15 3.75 2.15 2.32 0 3.6-1.315 3.6-2.639 0-1.06-.313-1.696-1.28-2.38-.331-.235-.965-.805-.965-1.14 0-.392.112-.586.703-1.047.606-.474 1.035-1.14 1.035-1.914 0-.92-.41-1.819-1.18-2.115h1.161l.82-.593zm-1.335 8.96c.03.124.045.25.045.378 0 1.07-.688 1.905-2.665 1.905-1.406 0-2.421-.89-2.421-1.96 0-1.047 1.259-1.92 2.665-1.904.328.004.634.057.911.146.764.531 1.311.832 1.465 1.436zM7.34 6.068c-.944-.028-1.841-1.055-2.005-2.295-.162-1.24.47-2.188 1.415-2.16.943.029 1.84 1.023 2.003 2.262.163 1.24-.47 2.222-1.414 2.193z",
        fill: color2
      }
    )
  );
});
var GraphqlIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7.873 11.608a1.167 1.167 0 00-1.707-.027L3.46 10.018l.01-.04h7.072l.022.076-2.69 1.554zM6.166 2.42l.031.03-3.535 6.124a1.265 1.265 0 00-.043-.012V5.438a1.166 1.166 0 00.84-1.456L6.167 2.42zm4.387 1.562a1.165 1.165 0 00.84 1.456v3.124l-.043.012-3.536-6.123a1.2 1.2 0 00.033-.032l2.706 1.563zM3.473 9.42a1.168 1.168 0 00-.327-.568L6.68 2.73a1.17 1.17 0 00.652 0l3.536 6.123a1.169 1.169 0 00-.327.567H3.473zm8.79-.736a1.169 1.169 0 00-.311-.124V5.44a1.17 1.17 0 10-1.122-1.942L8.13 1.938a1.168 1.168 0 00-1.122-1.5 1.17 1.17 0 00-1.121 1.5l-2.702 1.56a1.168 1.168 0 00-1.86.22 1.17 1.17 0 00.739 1.722v3.12a1.168 1.168 0 00-.74 1.721 1.17 1.17 0 001.861.221l2.701 1.56a1.169 1.169 0 102.233-.035l2.687-1.552a1.168 1.168 0 101.457-1.791z",
        fill: color2
      }
    )
  );
});
var MediumIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M0 0v14h14V0H0zm11.63 3.317l-.75.72a.22.22 0 00-.083.212v-.001 5.289a.22.22 0 00.083.21l.733.72v.159H7.925v-.158l.76-.738c.074-.074.074-.096.074-.21V5.244l-2.112 5.364h-.285l-2.46-5.364V8.84a.494.494 0 00.136.413h.001l.988 1.198v.158H2.226v-.158l.988-1.198a.477.477 0 00.126-.416v.003-4.157a.363.363 0 00-.118-.307l-.878-1.058v-.158h2.727l2.107 4.622L9.031 3.16h2.6v.158z",
        fill: color2
      }
    )
  );
});
var ReduxIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.06 9.689c.016.49.423.88.912.88h.032a.911.911 0 00.88-.945.916.916 0 00-.912-.88h-.033c-.033 0-.08 0-.113.016-.669-1.108-.946-2.314-.848-3.618.065-.978.391-1.825.961-2.526.473-.603 1.386-.896 2.005-.913 1.728-.032 2.461 2.119 2.51 2.983.212.049.57.163.815.244C10.073 2.29 8.444.92 6.88.92c-1.467 0-2.82 1.06-3.357 2.625-.75 2.086-.261 4.09.651 5.671a.74.74 0 00-.114.473zm8.279-2.298c-1.239-1.45-3.064-2.249-5.15-2.249h-.261a.896.896 0 00-.798-.489h-.033A.912.912 0 006.13 6.48h.031a.919.919 0 00.8-.554h.293c1.239 0 2.412.358 3.472 1.059.814.538 1.401 1.238 1.727 2.086.277.684.261 1.353-.033 1.923-.456.864-1.222 1.337-2.232 1.337a4.16 4.16 0 01-1.597-.343 9.58 9.58 0 01-.734.587c.7.326 1.418.505 2.102.505 1.565 0 2.722-.863 3.162-1.727.473-.946.44-2.575-.782-3.961zm-7.433 5.51a4.005 4.005 0 01-.977.113c-1.206 0-2.298-.505-2.836-1.32C.376 10.603.13 8.289 2.494 6.577c.05.261.147.62.212.832-.31.228-.798.685-1.108 1.303-.44.864-.391 1.729.13 2.527.359.537.93.864 1.663.962.896.114 1.793-.05 2.657-.505 1.271-.669 2.119-1.467 2.672-2.56a.944.944 0 01-.26-.603.913.913 0 01.88-.945h.033a.915.915 0 01.098 1.825c-.897 1.842-2.478 3.08-4.565 3.488z",
        fill: color2
      }
    )
  );
});
var TwitterIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 2.547a5.632 5.632 0 01-1.65.464 2.946 2.946 0 001.263-1.63 5.67 5.67 0 01-1.823.715 2.837 2.837 0 00-2.097-.93c-1.586 0-2.872 1.319-2.872 2.946 0 .23.025.456.074.67C4.508 4.66 2.392 3.488.975 1.706c-.247.435-.389.941-.389 1.481 0 1.022.507 1.923 1.278 2.452a2.806 2.806 0 01-1.3-.368l-.001.037c0 1.427.99 2.617 2.303 2.888a2.82 2.82 0 01-1.297.05c.366 1.17 1.427 2.022 2.683 2.045A5.671 5.671 0 010 11.51a7.985 7.985 0 004.403 1.323c5.283 0 8.172-4.488 8.172-8.38 0-.128-.003-.255-.009-.38A5.926 5.926 0 0014 2.546z",
        fill: color2
      }
    )
  );
});
var YoutubeIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M13.99 8.172c.005-.281.007-.672.007-1.172 0-.5-.002-.89-.007-1.172a14.952 14.952 0 00-.066-1.066 9.638 9.638 0 00-.169-1.153c-.083-.38-.264-.7-.542-.96a1.667 1.667 0 00-.972-.454C11.084 2.065 9.337 2 6.999 2s-4.085.065-5.241.195a1.65 1.65 0 00-.969.453c-.276.26-.455.58-.539.961a8.648 8.648 0 00-.176 1.153c-.039.43-.061.785-.066 1.066C.002 6.11 0 6.5 0 7c0 .5.002.89.008 1.172.005.281.027.637.066 1.067.04.43.095.813.168 1.152.084.38.265.7.543.96.279.261.603.412.973.453 1.156.13 2.902.196 5.24.196 2.34 0 4.087-.065 5.243-.196a1.65 1.65 0 00.967-.453c.276-.26.456-.58.54-.96.077-.339.136-.722.175-1.152.04-.43.062-.786.067-1.067zM9.762 6.578A.45.45 0 019.997 7a.45.45 0 01-.235.422l-3.998 2.5a.442.442 0 01-.266.078.538.538 0 01-.242-.063.465.465 0 01-.258-.437v-5c0-.197.086-.343.258-.437a.471.471 0 01.508.016l3.998 2.5z",
        fill: color2
      }
    )
  );
});
var VSCodeIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10.243.04a.87.87 0 01.38.087l2.881 1.386a.874.874 0 01.496.79V11.713a.875.875 0 01-.496.775l-2.882 1.386a.872.872 0 01-.994-.17L4.11 8.674l-2.404 1.823a.583.583 0 01-.744-.034l-.771-.7a.583.583 0 010-.862L2.274 7 .19 5.1a.583.583 0 010-.862l.772-.701a.583.583 0 01.744-.033L4.11 5.327 9.628.296a.871.871 0 01.615-.255zm.259 3.784L6.315 7l4.187 3.176V3.824z",
        fill: color2
      }
    )
  );
});
var LinkedinIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.667 13H2.333A1.333 1.333 0 011 11.667V2.333C1 1.597 1.597 1 2.333 1h9.334C12.403 1 13 1.597 13 2.333v9.334c0 .736-.597 1.333-1.333 1.333zm-2.114-1.667h1.78V7.675c0-1.548-.877-2.296-2.102-2.296-1.226 0-1.742.955-1.742.955v-.778H5.773v5.777h1.716V8.3c0-.812.374-1.296 1.09-1.296.658 0 .974.465.974 1.296v3.033zm-6.886-7.6c0 .589.474 1.066 1.058 1.066.585 0 1.058-.477 1.058-1.066 0-.589-.473-1.066-1.058-1.066-.584 0-1.058.477-1.058 1.066zm1.962 7.6h-1.79V5.556h1.79v5.777z",
        fill: color2
      }
    )
  );
});
var XIcon = /* @__PURE__ */ reactExports.forwardRef(
  ({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
    return /* @__PURE__ */ reactExports.createElement(
      "svg",
      {
        width: size,
        height: size,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: forwardedRef,
        ...props
      },
      /* @__PURE__ */ reactExports.createElement(
        "path",
        {
          d: "M11.02.446h2.137L8.49 5.816l5.51 7.28H9.67L6.298 8.683l-3.88 4.413H.282l5.004-5.735L0 .446h4.442l3.064 4.048L11.02.446zm-.759 11.357h1.18L3.796 1.655H2.502l7.759 10.148z",
          fill: color2
        }
      )
    );
  }
);
var BrowserIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M.5 13.004a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h13a.5.5 0 01.5.5v11a.5.5 0 01-.5.5H.5zm.5-1v-8h12v8H1zm1-9.5a.5.5 0 11-1 0 .5.5 0 011 0zm2 0a.5.5 0 11-1 0 .5.5 0 011 0zm2 0a.5.5 0 11-1 0 .5.5 0 011 0z",
        fill: color2
      }
    )
  );
});
var TabletIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.5.004a1.5 1.5 0 00-1.5 1.5v11a1.5 1.5 0 001.5 1.5h7a1.5 1.5 0 001.5-1.5v-11a1.5 1.5 0 00-1.5-1.5h-7zm0 1h7a.5.5 0 01.5.5v9.5H3v-9.5a.5.5 0 01.5-.5zm2.5 11a.5.5 0 000 1h2a.5.5 0 000-1H6z",
        fill: color2
      }
    )
  );
});
var MobileIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3 1.504a1.5 1.5 0 011.5-1.5h5a1.5 1.5 0 011.5 1.5v11a1.5 1.5 0 01-1.5 1.5h-5a1.5 1.5 0 01-1.5-1.5v-11zm1 10.5v-10h6v10H4z",
        fill: color2
      }
    )
  );
});
var WatchIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4 .504a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm5.5 2.5h-5a.5.5 0 00-.5.5v7a.5.5 0 00.5.5h5a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5zm-5-1a1.5 1.5 0 00-1.5 1.5v7a1.5 1.5 0 001.5 1.5h5a1.5 1.5 0 001.5-1.5v-7a1.5 1.5 0 00-1.5-1.5h-5zm2.5 2a.5.5 0 01.5.5v2h1a.5.5 0 110 1H7a.5.5 0 01-.5-.5v-2.5a.5.5 0 01.5-.5zm-2.5 9a.5.5 0 000 1h5a.5.5 0 000-1h-5z",
        fill: color2
      }
    )
  );
});
var SidebarIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M2.5 4.504a.5.5 0 01.5-.5h1a.5.5 0 110 1H3a.5.5 0 01-.5-.5zM3 6.004a.5.5 0 100 1h1a.5.5 0 000-1H3zM2.5 8.504a.5.5 0 01.5-.5h1a.5.5 0 110 1H3a.5.5 0 01-.5-.5z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1.5 13.004a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11zm.5-1v-10h3v10H2zm4-10h6v10H6v-10z",
        fill: color2
      }
    )
  );
});
var SidebarAltIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M9.5 4.504a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zM10 6.004a.5.5 0 100 1h1a.5.5 0 000-1h-1zM9.5 8.504a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1.5 13.004a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11zm.5-1v-10h6v10H2zm7-10h3v10H9v-10z",
        fill: color2
      }
    )
  );
});
var SidebarAltToggleIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M11.5 4.504a.5.5 0 00-.5-.5h-1a.5.5 0 100 1h1a.5.5 0 00.5-.5zM11 6.004a.5.5 0 010 1h-1a.5.5 0 010-1h1zM11.5 8.504a.5.5 0 00-.5-.5h-1a.5.5 0 100 1h1a.5.5 0 00.5-.5z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1.5 13.004a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11zm7.5-1h3v-10H9v10zm-1 0H2v-10h6v4.5H5.207l.65-.65a.5.5 0 10-.707-.708L3.646 6.65a.5.5 0 000 .707l1.497 1.497a.5.5 0 10.707-.708l-.643-.642H8v4.5z",
        fill: color2
      }
    )
  );
});
var SidebarToggleIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M1.5 4.504a.5.5 0 01.5-.5h1a.5.5 0 110 1H2a.5.5 0 01-.5-.5zM2 6.004a.5.5 0 100 1h1a.5.5 0 000-1H2zM1.5 8.504a.5.5 0 01.5-.5h1a.5.5 0 110 1H2a.5.5 0 01-.5-.5z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M.5 13.004a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5H.5zm.5-1v-10h3v10H1zm4 0v-4.5h2.793l-.643.642a.5.5 0 10.707.708l1.497-1.497a.5.5 0 000-.707L7.85 5.146a.5.5 0 10-.707.708l.65.65H5v-4.5h6v10H5z",
        fill: color2
      }
    )
  );
});
var BottomBarIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M3 10.504a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zM6.5 10.004a.5.5 0 000 1h1a.5.5 0 000-1h-1zM9 10.504a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1 1.504a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11zm1 6.5v-6h10v6H2zm10 1v3H2v-3h10z",
        fill: color2
      }
    )
  );
});
var BottomBarToggleIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M3.5 10.004a.5.5 0 000 1h1a.5.5 0 000-1h-1zM6 10.504a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zM9.5 10.004a.5.5 0 000 1h1a.5.5 0 000-1h-1z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1 12.504v-11a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5zm1-.5v-3h10v3H2zm4.5-4H2v-6h10v6H7.5V5.21l.646.646a.5.5 0 10.708-.707l-1.5-1.5a.5.5 0 00-.708 0l-1.5 1.5a.5.5 0 10.708.707l.646-.646v2.793z",
        fill: color2
      }
    )
  );
});
var CPUIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5 5.504a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3zm1 2.5v-2h2v2H6z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.5.004a.5.5 0 01.5.5v1.5h2v-1.5a.5.5 0 011 0v1.5h2.5a.5.5 0 01.5.5v2.5h1.5a.5.5 0 010 1H12v2h1.5a.5.5 0 010 1H12v2.5a.5.5 0 01-.5.5H9v1.5a.5.5 0 01-1 0v-1.5H6v1.5a.5.5 0 01-1 0v-1.5H2.5a.5.5 0 01-.5-.5v-2.5H.5a.5.5 0 010-1H2v-2H.5a.5.5 0 010-1H2v-2.5a.5.5 0 01.5-.5H5v-1.5a.5.5 0 01.5-.5zm5.5 3H3v8h8v-8z",
        fill: color2
      }
    )
  );
});
var DatabaseIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 3c0-1.105-2.239-2-5-2s-5 .895-5 2v8c0 .426.26.752.544.977.29.228.68.413 1.116.558.878.293 2.059.465 3.34.465 1.281 0 2.462-.172 3.34-.465.436-.145.825-.33 1.116-.558.285-.225.544-.551.544-.977V3zm-1.03 0a.787.787 0 00-.05-.052c-.13-.123-.373-.28-.756-.434C9.404 2.21 8.286 2 7 2c-1.286 0-2.404.21-3.164.514-.383.153-.625.31-.756.434A.756.756 0 003.03 3a.756.756 0 00.05.052c.13.123.373.28.756.434C4.596 3.79 5.714 4 7 4c1.286 0 2.404-.21 3.164-.514.383-.153.625-.31.756-.434A.787.787 0 0010.97 3zM11 5.75V4.2c-.912.486-2.364.8-4 .8-1.636 0-3.088-.314-4-.8v1.55l.002.008a.147.147 0 00.016.033.618.618 0 00.145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.62.62 0 00.146-.15.149.149 0 00.015-.033A.03.03 0 0011 5.75zM3 7.013c.2.103.423.193.66.272.878.293 2.059.465 3.34.465 1.281 0 2.462-.172 3.34-.465.237-.079.46-.17.66-.272V8.5l-.002.008a.149.149 0 01-.015.033.62.62 0 01-.146.15c-.165.13-.435.27-.813.395-.751.25-1.82.414-3.024.414s-2.273-.163-3.024-.414c-.378-.126-.648-.265-.813-.395a.618.618 0 01-.145-.15.147.147 0 01-.016-.033A.027.027 0 013 8.5V7.013zm0 2.75V11l.002.008a.147.147 0 00.016.033.617.617 0 00.145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 00.146-.15.148.148 0 00.015-.033L11 11V9.763c-.2.103-.423.193-.66.272-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465A4.767 4.767 0 013 9.763z",
        fill: color2
      }
    )
  );
});
var MemoryIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M5 3a.5.5 0 00-1 0v3a.5.5 0 001 0V3zM7 2.5a.5.5 0 01.5.5v3a.5.5 0 01-1 0V3a.5.5 0 01.5-.5zM10 4.504a.5.5 0 10-1 0V6a.5.5 0 001 0V4.504z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 3.54l-.001-.002a.499.499 0 00-.145-.388l-3-3a.499.499 0 00-.388-.145L8.464.004H2.5a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h9a.5.5 0 00.5-.5V3.54zM3 1.004h5.293L11 3.71v5.293H3v-8zm0 9v3h8v-3H3z",
        fill: color2
      }
    )
  );
});
var StructureIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.164 3.446a1.5 1.5 0 10-2.328 0L1.81 10.032A1.503 1.503 0 000 11.5a1.5 1.5 0 002.915.5h8.17a1.5 1.5 0 101.104-1.968L8.164 3.446zm-1.475.522a1.506 1.506 0 00.622 0l4.025 6.586a1.495 1.495 0 00-.25.446H2.914a1.497 1.497 0 00-.25-.446l4.024-6.586z",
        fill: color2
      }
    )
  );
});
var BoxIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7.21.046l6.485 2.994A.5.5 0 0114 3.51v6.977a.495.495 0 01-.23.432.481.481 0 01-.071.038L7.23 13.944a.499.499 0 01-.46 0L.3 10.958a.498.498 0 01-.3-.47V3.511a.497.497 0 01.308-.473L6.78.051a.499.499 0 01.43-.005zM1 4.282v5.898l5.5 2.538V6.82L1 4.282zm6.5 8.436L13 10.18V4.282L7.5 6.82v5.898zM12.307 3.5L7 5.95 1.693 3.5 7 1.05l5.307 2.45z",
        fill: color2
      }
    )
  );
});
var PowerIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement("path", { d: "M7.5.5a.5.5 0 00-1 0v6a.5.5 0 001 0v-6z", fill: color2 }),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M4.273 2.808a.5.5 0 00-.546-.837 6 6 0 106.546 0 .5.5 0 00-.546.837 5 5 0 11-5.454 0z",
        fill: color2
      }
    )
  );
});
var EditIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M13.854 2.146l-2-2a.5.5 0 00-.708 0l-1.5 1.5-8.995 8.995a.499.499 0 00-.143.268L.012 13.39a.495.495 0 00.135.463.5.5 0 00.462.134l2.482-.496a.495.495 0 00.267-.143l8.995-8.995 1.5-1.5a.5.5 0 000-.708zM12 3.293l.793-.793L11.5 1.207 10.707 2 12 3.293zm-2-.586L1.707 11 3 12.293 11.293 4 10 2.707zM1.137 12.863l.17-.849.679.679-.849.17z",
        fill: color2
      }
    )
  );
});
var CogIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M5.586 5.586A2 2 0 018.862 7.73a.5.5 0 10.931.365 3 3 0 10-1.697 1.697.5.5 0 10-.365-.93 2 2 0 01-2.145-3.277z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M.939 6.527c.127.128.19.297.185.464a.635.635 0 01-.185.465L0 8.395a7.099 7.099 0 001.067 2.572h1.32c.182 0 .345.076.46.197a.635.635 0 01.198.46v1.317A7.097 7.097 0 005.602 14l.94-.94a.634.634 0 01.45-.186H7.021c.163 0 .326.061.45.186l.939.938a7.098 7.098 0 002.547-1.057V11.61c0-.181.075-.344.197-.46a.634.634 0 01.46-.197h1.33c.507-.76.871-1.622 1.056-2.55l-.946-.946a.635.635 0 01-.186-.465.635.635 0 01.186-.464l.943-.944a7.099 7.099 0 00-1.044-2.522h-1.34a.635.635 0 01-.46-.197.635.635 0 01-.196-.46V1.057A7.096 7.096 0 008.413.002l-.942.942a.634.634 0 01-.45.186H6.992a.634.634 0 01-.45-.186L5.598 0a7.097 7.097 0 00-2.553 1.058v1.33c0 .182-.076.345-.197.46a.635.635 0 01-.46.198h-1.33A7.098 7.098 0 00.003 5.591l.936.936zm.707 1.636c.324-.324.482-.752.479-1.172a1.634 1.634 0 00-.48-1.171l-.538-.539c.126-.433.299-.847.513-1.235h.768c.459 0 .873-.19 1.167-.49.3-.295.49-.708.49-1.167v-.77c.39-.215.807-.388 1.243-.515l.547.547c.32.32.742.48 1.157.48l.015-.001h.014c.415 0 .836-.158 1.157-.479l.545-.544c.433.126.846.299 1.234.512v.784c0 .46.19.874.49 1.168.294.3.708.49 1.167.49h.776c.209.382.378.788.502 1.213l-.545.546a1.635 1.635 0 00-.48 1.17c-.003.421.155.849.48 1.173l.549.55c-.126.434-.3.85-.513 1.239h-.77c-.458 0-.872.19-1.166.49-.3.294-.49.708-.49 1.167v.77a6.09 6.09 0 01-1.238.514l-.54-.54a1.636 1.636 0 00-1.158-.48H6.992c-.415 0-.837.159-1.157.48l-.543.543a6.091 6.091 0 01-1.247-.516v-.756c0-.459-.19-.873-.49-1.167-.294-.3-.708-.49-1.167-.49h-.761a6.094 6.094 0 01-.523-1.262l.542-.542z",
        fill: color2
      }
    )
  );
});
var NutIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M5.585 8.414a2 2 0 113.277-.683.5.5 0 10.931.365 3 3 0 10-1.697 1.697.5.5 0 00-.365-.93 2 2 0 01-2.146-.449z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.5.289a1 1 0 011 0l5.062 2.922a1 1 0 01.5.866v5.846a1 1 0 01-.5.866L7.5 13.71a1 1 0 01-1 0L1.437 10.79a1 1 0 01-.5-.866V4.077a1 1 0 01.5-.866L6.5.29zm.5.866l5.062 2.922v5.846L7 12.845 1.937 9.923V4.077L7 1.155z",
        fill: color2
      }
    )
  );
});
var WrenchIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10.5 1c.441 0 .564.521.252.833l-.806.807a.51.51 0 000 .72l.694.694a.51.51 0 00.72 0l.807-.806c.312-.312.833-.19.833.252a2.5 2.5 0 01-3.414 2.328l-6.879 6.88a1 1 0 01-1.414-1.415l6.88-6.88A2.5 2.5 0 0110.5 1zM2 12.5a.5.5 0 100-1 .5.5 0 000 1z",
        fill: color2
      }
    )
  );
});
var EllipsisIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M4 7a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM13 7a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM7 8.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z",
        fill: color2
      }
    )
  );
});
var WandIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M5.903.112a.107.107 0 01.194 0l.233.505.552.066c.091.01.128.123.06.185l-.408.377.109.546a.107.107 0 01-.158.114L6 1.634l-.485.271a.107.107 0 01-.158-.114l.108-.546-.408-.377a.107.107 0 01.06-.185L5.67.617l.233-.505zM2.194.224a.214.214 0 00-.389 0l-.466 1.01-1.104.131a.214.214 0 00-.12.37l.816.755-.217 1.091a.214.214 0 00.315.23L2 3.266l.971.543c.16.09.35-.05.315-.229l-.216-1.09.816-.756a.214.214 0 00-.12-.37L2.66 1.234 2.194.224zM12.194 8.224a.214.214 0 00-.389 0l-.466 1.01-1.104.13a.214.214 0 00-.12.371l.816.755-.217 1.091a.214.214 0 00.315.23l.97-.544.971.543c.16.09.35-.05.315-.229l-.216-1.09.816-.756a.214.214 0 00-.12-.37l-1.105-.131-.466-1.01z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2.5 12.797l-1.293-1.293 6.758-6.758L9.258 6.04 2.5 12.797zm7.465-7.465l2.828-2.828L11.5 1.211 8.672 4.04l1.293 1.293zM.147 11.857a.5.5 0 010-.707l11-11a.5.5 0 01.706 0l2 2a.5.5 0 010 .708l-11 11a.5.5 0 01-.706 0l-2-2z",
        fill: color2
      }
    )
  );
});
var CheckIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M13.854 3.354a.5.5 0 00-.708-.708L5 10.793.854 6.646a.5.5 0 10-.708.708l4.5 4.5a.5.5 0 00.708 0l8.5-8.5z",
        fill: color2
      }
    )
  );
});
var FormIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M2 1.004a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V6.393a.5.5 0 00-1 0v5.61H2v-10h7.5a.5.5 0 000-1H2z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M6.354 9.857l7.5-7.5a.5.5 0 00-.708-.707L6 8.797 3.854 6.65a.5.5 0 10-.708.707l2.5 2.5a.5.5 0 00.708 0z",
        fill: color2
      }
    )
  );
});
var BatchDenyIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M11.5 2a.5.5 0 000 1h2a.5.5 0 000-1h-2zM8.854 2.646a.5.5 0 010 .708L5.207 7l3.647 3.646a.5.5 0 01-.708.708L4.5 7.707.854 11.354a.5.5 0 01-.708-.708L3.793 7 .146 3.354a.5.5 0 11.708-.708L4.5 6.293l3.646-3.647a.5.5 0 01.708 0zM11 7a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2A.5.5 0 0111 7zM11.5 11a.5.5 0 000 1h2a.5.5 0 000-1h-2z",
        fill: color2
      }
    )
  );
});
var BatchAcceptIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M11.5 2a.5.5 0 000 1h2a.5.5 0 000-1h-2zM9.3 2.6a.5.5 0 01.1.7l-5.995 7.993a.505.505 0 01-.37.206.5.5 0 01-.395-.152L.146 8.854a.5.5 0 11.708-.708l2.092 2.093L8.6 2.7a.5.5 0 01.7-.1zM11 7a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2A.5.5 0 0111 7zM11.5 11a.5.5 0 000 1h2a.5.5 0 000-1h-2z",
        fill: color2
      }
    )
  );
});
var ControlsIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M10.5 1a.5.5 0 01.5.5V2h1.5a.5.5 0 010 1H11v.5a.5.5 0 01-1 0V3H1.5a.5.5 0 010-1H10v-.5a.5.5 0 01.5-.5zM1.5 11a.5.5 0 000 1H10v.5a.5.5 0 001 0V12h1.5a.5.5 0 000-1H11v-.5a.5.5 0 00-1 0v.5H1.5zM1 7a.5.5 0 01.5-.5H3V6a.5.5 0 011 0v.5h8.5a.5.5 0 010 1H4V8a.5.5 0 01-1 0v-.5H1.5A.5.5 0 011 7z",
        fill: color2
      }
    )
  );
});
var PlusIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M7.5.5a.5.5 0 00-1 0v6h-6a.5.5 0 000 1h6v6a.5.5 0 001 0v-6h6a.5.5 0 000-1h-6v-6z",
        fill: color2
      }
    )
  );
});
var CloseAltIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M2.03.97A.75.75 0 00.97 2.03L5.94 7 .97 11.97a.75.75 0 101.06 1.06L7 8.06l4.97 4.97a.75.75 0 101.06-1.06L8.06 7l4.97-4.97A.75.75 0 0011.97.97L7 5.94 2.03.97z",
        fill: color2
      }
    )
  );
});
var CrossIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M1.854 1.146a.5.5 0 10-.708.708L6.293 7l-5.147 5.146a.5.5 0 00.708.708L7 7.707l5.146 5.147a.5.5 0 00.708-.708L7.707 7l5.147-5.146a.5.5 0 00-.708-.708L7 6.293 1.854 1.146z",
        fill: color2
      }
    )
  );
});
var TrashIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M5.5 4.5A.5.5 0 016 5v5a.5.5 0 01-1 0V5a.5.5 0 01.5-.5zM9 5a.5.5 0 00-1 0v5a.5.5 0 001 0V5z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.5.5A.5.5 0 015 0h4a.5.5 0 01.5.5V2h3a.5.5 0 010 1H12v8a2 2 0 01-2 2H4a2 2 0 01-2-2V3h-.5a.5.5 0 010-1h3V.5zM3 3v8a1 1 0 001 1h6a1 1 0 001-1V3H3zm2.5-2h3v1h-3V1z",
        fill: color2
      }
    )
  );
});
var PinAltIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement("g", { clipPath: "url(#prefix__clip0_1107_3502)" }, /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M13.44 4.44L9.56.56a1.5 1.5 0 00-2.12 0L7 1a1.415 1.415 0 000 2L5 5H3.657A4 4 0 00.828 6.17l-.474.475a.5.5 0 000 .707l2.793 2.793-3 3a.5.5 0 00.707.708l3-3 2.792 2.792a.5.5 0 00.708 0l.474-.475A4 4 0 009 10.343V9l2-2a1.414 1.414 0 002 0l.44-.44a1.5 1.5 0 000-2.12zM11 5.585l-3 3v1.757a3 3 0 01-.879 2.121L7 12.586 1.414 7l.122-.122A3 3 0 013.656 6h1.758l3-3-.707-.707a.414.414 0 010-.586l.44-.44a.5.5 0 01.707 0l3.878 3.88a.5.5 0 010 .706l-.44.44a.414.414 0 01-.585 0L11 5.586z",
        fill: color2
      }
    )),
    /* @__PURE__ */ reactExports.createElement("defs", null, /* @__PURE__ */ reactExports.createElement("clipPath", { id: "prefix__clip0_1107_3502" }, /* @__PURE__ */ reactExports.createElement("path", { fill: "#fff", d: "M0 0h14v14H0z" })))
  );
});
var UnpinIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement("g", { clipPath: "url(#prefix__clip0_1107_3501)", fill: color2 }, /* @__PURE__ */ reactExports.createElement("path", { d: "M13.44 4.44L9.56.56a1.5 1.5 0 00-2.12 0L7 1a1.415 1.415 0 000 2L5.707 4.293 6.414 5l2-2-.707-.707a.414.414 0 010-.586l.44-.44a.5.5 0 01.707 0l3.878 3.88a.5.5 0 010 .706l-.44.44a.414.414 0 01-.585 0L11 5.586l-2 2 .707.707L11 7a1.414 1.414 0 002 0l.44-.44a1.5 1.5 0 000-2.12zM.828 6.171a4 4 0 012.758-1.17l1 .999h-.93a3 3 0 00-2.12.878L1.414 7 7 12.586l.121-.122A3 3 0 008 10.343v-.929l1 1a4 4 0 01-1.172 2.757l-.474.475a.5.5 0 01-.708 0l-2.792-2.792-3 3a.5.5 0 01-.708-.708l3-3L.355 7.353a.5.5 0 010-.707l.474-.475zM1.854 1.146a.5.5 0 10-.708.708l11 11a.5.5 0 00.708-.708l-11-11z" })),
    /* @__PURE__ */ reactExports.createElement("defs", null, /* @__PURE__ */ reactExports.createElement("clipPath", { id: "prefix__clip0_1107_3501" }, /* @__PURE__ */ reactExports.createElement("path", { fill: "#fff", d: "M0 0h14v14H0z" })))
  );
});
var AddIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M7 3a.5.5 0 01.5.5v3h3a.5.5 0 010 1h-3v3a.5.5 0 01-1 0v-3h-3a.5.5 0 010-1h3v-3A.5.5 0 017 3z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 14A7 7 0 107 0a7 7 0 000 14zm0-1A6 6 0 107 1a6 6 0 000 12z",
        fill: color2
      }
    )
  );
});
var SubtractIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement("path", { d: "M3.5 6.5a.5.5 0 000 1h7a.5.5 0 000-1h-7z", fill: color2 }),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
        fill: color2
      }
    )
  );
});
var CloseIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M9.854 4.146a.5.5 0 010 .708L7.707 7l2.147 2.146a.5.5 0 01-.708.708L7 7.707 4.854 9.854a.5.5 0 01-.708-.708L6.293 7 4.146 4.854a.5.5 0 11.708-.708L7 6.293l2.146-2.147a.5.5 0 01.708 0z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 14A7 7 0 107 0a7 7 0 000 14zm0-1A6 6 0 107 1a6 6 0 000 12z",
        fill: color2
      }
    )
  );
});
var DeleteIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0a6 6 0 01-9.874 4.582l8.456-8.456A5.976 5.976 0 0113 7zM2.418 10.874l8.456-8.456a6 6 0 00-8.456 8.456z",
        fill: color2
      }
    )
  );
});
var PassedIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 14A7 7 0 107 0a7 7 0 000 14zm3.854-9.354a.5.5 0 010 .708l-4.5 4.5a.5.5 0 01-.708 0l-2.5-2.5a.5.5 0 11.708-.708L6 8.793l4.146-4.147a.5.5 0 01.708 0z",
        fill: color2
      }
    )
  );
});
var ChangedIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 14A7 7 0 107 0a7 7 0 000 14zM3.5 6.5a.5.5 0 000 1h7a.5.5 0 000-1h-7z",
        fill: color2
      }
    )
  );
});
var FailedIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 14A7 7 0 107 0a7 7 0 000 14zm2.854-9.854a.5.5 0 010 .708L7.707 7l2.147 2.146a.5.5 0 01-.708.708L7 7.707 4.854 9.854a.5.5 0 01-.708-.708L6.293 7 4.146 4.854a.5.5 0 11.708-.708L7 6.293l2.146-2.147a.5.5 0 01.708 0z",
        fill: color2
      }
    )
  );
});
var ClearIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5 2h7a2 2 0 012 2v6a2 2 0 01-2 2H5a1.994 1.994 0 01-1.414-.586l-3-3a2 2 0 010-2.828l3-3A1.994 1.994 0 015 2zm1.146 3.146a.5.5 0 01.708 0L8 6.293l1.146-1.147a.5.5 0 11.708.708L8.707 7l1.147 1.146a.5.5 0 01-.708.708L8 7.707 6.854 8.854a.5.5 0 11-.708-.708L7.293 7 6.146 5.854a.5.5 0 010-.708z",
        fill: color2
      }
    )
  );
});
var CommentIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M3.5 5.004a.5.5 0 100 1h7a.5.5 0 000-1h-7zM3 8.504a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.5 12.004H5.707l-1.853 1.854a.5.5 0 01-.351.146h-.006a.499.499 0 01-.497-.5v-1.5H1.5a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v9a.5.5 0 01-.5.5zm-10.5-1v-8h10v8H2z",
        fill: color2
      }
    )
  );
});
var CommentAddIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M7.5 5.004a.5.5 0 10-1 0v1.5H5a.5.5 0 100 1h1.5v1.5a.5.5 0 001 0v-1.5H9a.5.5 0 000-1H7.5v-1.5z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.691 13.966a.498.498 0 01-.188.038h-.006a.499.499 0 01-.497-.5v-1.5H1.5a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v9a.5.5 0 01-.5.5H5.707l-1.853 1.854a.5.5 0 01-.163.108zM2 3.004v8h10v-8H2z",
        fill: color2
      }
    )
  );
});
var RequestChangeIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M9.854 6.65a.5.5 0 010 .707l-2 2a.5.5 0 11-.708-.707l1.15-1.15-3.796.004a.5.5 0 010-1L8.29 6.5 7.145 5.357a.5.5 0 11.708-.707l2 2z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.691 13.966a.498.498 0 01-.188.038h-.006a.499.499 0 01-.497-.5v-1.5H1.5a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v9a.5.5 0 01-.5.5H5.707l-1.853 1.854a.5.5 0 01-.163.108zM2 3.004v8h10v-8H2z",
        fill: color2
      }
    )
  );
});
var CommentsIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M8.5 7.004a.5.5 0 000-1h-5a.5.5 0 100 1h5zM9 8.504a.5.5 0 01-.5.5h-5a.5.5 0 010-1h5a.5.5 0 01.5.5z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 11.504v-1.5h1.5a.5.5 0 00.5-.5v-8a.5.5 0 00-.5-.5h-11a.5.5 0 00-.5.5v1.5H.5a.5.5 0 00-.5.5v8a.5.5 0 00.5.5H2v1.5a.499.499 0 00.497.5h.006a.498.498 0 00.35-.146l1.854-1.854H11.5a.5.5 0 00.5-.5zm-9-8.5v-1h10v7h-1v-5.5a.5.5 0 00-.5-.5H3zm-2 8v-7h10v7H1z",
        fill: color2
      }
    )
  );
});
var ChatIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1 2a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H6.986a.444.444 0 01-.124.103l-3.219 1.84A.43.43 0 013 13.569V12a2 2 0 01-2-2V2zm3.42 4.78a.921.921 0 110-1.843.921.921 0 010 1.842zm1.658-.922a.921.921 0 101.843 0 .921.921 0 00-1.843 0zm2.58 0a.921.921 0 101.842 0 .921.921 0 00-1.843 0z",
        fill: color2
      }
    )
  );
});
var LockIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M8 8.004a1 1 0 01-.5.866v1.634a.5.5 0 01-1 0V8.87A1 1 0 118 8.004z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3 4.004a4 4 0 118 0v1h1.5a.5.5 0 01.5.5v8a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-8a.5.5 0 01.5-.5H3v-1zm7 1v-1a3 3 0 10-6 0v1h6zm2 1H2v7h10v-7z",
        fill: color2
      }
    )
  );
});
var UnlockIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement("g", { clipPath: "url(#prefix__clip0_1107_3614)", fill: color2 }, /* @__PURE__ */ reactExports.createElement("path", { d: "M6.5 8.87a1 1 0 111 0v1.634a.5.5 0 01-1 0V8.87z" }), /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 1a3 3 0 00-3 3v1.004h8.5a.5.5 0 01.5.5v8a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-8a.5.5 0 01.5-.5H3V4a4 4 0 017.755-1.381.5.5 0 01-.939.345A3.001 3.001 0 007 1zM2 6.004h10v7H2v-7z"
      }
    )),
    /* @__PURE__ */ reactExports.createElement("defs", null, /* @__PURE__ */ reactExports.createElement("clipPath", { id: "prefix__clip0_1107_3614" }, /* @__PURE__ */ reactExports.createElement("path", { fill: "#fff", d: "M0 0h14v14H0z" })))
  );
});
var KeyIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement("path", { d: "M11 4a1 1 0 11-2 0 1 1 0 012 0z", fill: color2 }),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7.5 8.532V9.5a.5.5 0 01-.5.5H5.5v1.5a.5.5 0 01-.5.5H3.5v1.5a.5.5 0 01-.5.5H.5a.5.5 0 01-.5-.5v-2a.5.5 0 01.155-.362l5.11-5.11A4.5 4.5 0 117.5 8.532zM6 4.5a3.5 3.5 0 111.5 2.873c-.29-.203-1-.373-1 .481V9H5a.5.5 0 00-.5.5V11H3a.5.5 0 00-.5.5V13H1v-1.293l5.193-5.193a.552.552 0 00.099-.613A3.473 3.473 0 016 4.5z",
        fill: color2
      }
    )
  );
});
var OutboxIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M7.354.15a.5.5 0 00-.708 0l-2 2a.5.5 0 10.708.707L6.5 1.711v6.793a.5.5 0 001 0V1.71l1.146 1.146a.5.5 0 10.708-.707l-2-2z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M2 7.504a.5.5 0 10-1 0v5a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-5a.5.5 0 00-1 0v4.5H2v-4.5z",
        fill: color2
      }
    )
  );
});
var CreditIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement("path", { d: "M2.5 8.004a.5.5 0 100 1h3a.5.5 0 000-1h-3z", fill: color2 }),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M0 11.504a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5H.5a.5.5 0 00-.5.5v9zm1-8.5v1h12v-1H1zm0 8h12v-5H1v5z",
        fill: color2
      }
    )
  );
});
var ButtonIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M1 3.004a1 1 0 00-1 1v5a1 1 0 001 1h3.5a.5.5 0 100-1H1v-5h12v5h-1a.5.5 0 000 1h1a1 1 0 001-1v-5a1 1 0 00-1-1H1z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M6.45 7.006a.498.498 0 01.31.07L10.225 9.1a.5.5 0 01-.002.873l-1.074.621.75 1.3a.75.75 0 01-1.3.75l-.75-1.3-1.074.62a.497.497 0 01-.663-.135.498.498 0 01-.095-.3L6 7.515a.497.497 0 01.45-.509z",
        fill: color2
      }
    )
  );
});
var TypeIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M4 1.504a.5.5 0 01.5-.5h5a.5.5 0 110 1h-2v10h2a.5.5 0 010 1h-5a.5.5 0 010-1h2v-10h-2a.5.5 0 01-.5-.5z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M0 4.504a.5.5 0 01.5-.5h4a.5.5 0 110 1H1v4h3.5a.5.5 0 110 1h-4a.5.5 0 01-.5-.5v-5zM9.5 4.004a.5.5 0 100 1H13v4H9.5a.5.5 0 100 1h4a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5h-4z",
        fill: color2
      }
    )
  );
});
var PointerDefaultIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.943 12.457a.27.27 0 00.248-.149L7.77 9.151l2.54 2.54a.257.257 0 00.188.073c.082 0 .158-.03.21-.077l.788-.79a.27.27 0 000-.392L8.891 7.9l3.416-1.708a.29.29 0 00.117-.106.222.222 0 00.033-.134.332.332 0 00-.053-.161.174.174 0 00-.092-.072l-.02-.007-10.377-4.15a.274.274 0 00-.355.354l4.15 10.372a.275.275 0 00.233.169zm-.036 1l-.02-.002c-.462-.03-.912-.31-1.106-.796L.632 2.287A1.274 1.274 0 012.286.633l10.358 4.143c.516.182.782.657.81 1.114a1.25 1.25 0 01-.7 1.197L10.58 8.174l1.624 1.624a1.27 1.27 0 010 1.807l-.8.801-.008.007c-.491.46-1.298.48-1.792-.014l-1.56-1.56-.957 1.916a1.27 1.27 0 01-1.142.702h-.037z",
        fill: color2
      }
    )
  );
});
var PointerHandIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.87 6.008a.505.505 0 00-.003-.028v-.002c-.026-.27-.225-.48-.467-.498a.5.5 0 00-.53.5v1.41c0 .25-.22.47-.47.47a.48.48 0 01-.47-.47V5.17a.6.6 0 00-.002-.05c-.023-.268-.223-.49-.468-.5a.5.5 0 00-.52.5v1.65a.486.486 0 01-.47.47.48.48 0 01-.47-.47V4.62a.602.602 0 00-.002-.05v-.002c-.023-.266-.224-.48-.468-.498a.5.5 0 00-.53.5v2.2c0 .25-.22.47-.47.47a.49.49 0 01-.47-.47V1.8c0-.017 0-.034-.002-.05-.022-.268-.214-.49-.468-.5a.5.5 0 00-.52.5v6.78c0 .25-.22.47-.47.47a.48.48 0 01-.47-.47l.001-.1c.001-.053.002-.104 0-.155a.775.775 0 00-.06-.315.65.65 0 00-.16-.22 29.67 29.67 0 01-.21-.189c-.2-.182-.4-.365-.617-.532l-.003-.003A6.366 6.366 0 003.06 7l-.01-.007c-.433-.331-.621-.243-.69-.193-.26.14-.29.5-.13.74l1.73 2.6v.01h-.016l-.035.023.05-.023s1.21 2.6 3.57 2.6c3.54 0 4.2-1.9 4.31-4.42.039-.591.036-1.189.032-1.783l-.002-.507v-.032zm.969 2.376c-.057 1.285-.254 2.667-1.082 3.72-.88 1.118-2.283 1.646-4.227 1.646-1.574 0-2.714-.87-3.406-1.623a6.958 6.958 0 01-1.046-1.504l-.006-.012-1.674-2.516a1.593 1.593 0 01-.25-1.107 1.44 1.44 0 01.69-1.041c.195-.124.485-.232.856-.186.357.044.681.219.976.446.137.106.272.22.4.331V1.75A1.5 1.5 0 015.63.25c.93.036 1.431.856 1.431 1.55v1.335a1.5 1.5 0 01.53-.063h.017c.512.04.915.326 1.153.71a1.5 1.5 0 01.74-.161c.659.025 1.115.458 1.316.964a1.493 1.493 0 01.644-.103h.017c.856.067 1.393.814 1.393 1.558l.002.48c.004.596.007 1.237-.033 1.864z",
        fill: color2
      }
    )
  );
});
var CommandIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.5 6A2.5 2.5 0 116 3.5V5h2V3.5A2.5 2.5 0 1110.5 6H9v2h1.5A2.5 2.5 0 118 10.5V9H6v1.5A2.5 2.5 0 113.5 8H5V6H3.5zM2 3.5a1.5 1.5 0 113 0V5H3.5A1.5 1.5 0 012 3.5zM6 6v2h2V6H6zm3-1h1.5A1.5 1.5 0 109 3.5V5zM3.5 9H5v1.5A1.5 1.5 0 113.5 9zM9 9v1.5A1.5 1.5 0 1010.5 9H9z",
        fill: color2
      }
    )
  );
});
var InfoIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M7 5.5a.5.5 0 01.5.5v4a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zM7 4.5A.75.75 0 107 3a.75.75 0 000 1.5z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 14A7 7 0 107 0a7 7 0 000 14zm0-1A6 6 0 107 1a6 6 0 000 12z",
        fill: color2
      }
    )
  );
});
var QuestionIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M5.25 5.25A1.75 1.75 0 117 7a.5.5 0 00-.5.5V9a.5.5 0 001 0V7.955A2.75 2.75 0 104.25 5.25a.5.5 0 001 0zM7 11.5A.75.75 0 107 10a.75.75 0 000 1.5z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
        fill: color2
      }
    )
  );
});
var SupportIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-3.524 4.89A5.972 5.972 0 017 13a5.972 5.972 0 01-3.477-1.11l1.445-1.444C5.564 10.798 6.258 11 7 11s1.436-.202 2.032-.554l1.444 1.445zm-.03-2.858l1.445 1.444A5.972 5.972 0 0013 7c0-1.296-.41-2.496-1.11-3.477l-1.444 1.445C10.798 5.564 11 6.258 11 7s-.202 1.436-.554 2.032zM9.032 3.554l1.444-1.445A5.972 5.972 0 007 1c-1.296 0-2.496.41-3.477 1.11l1.445 1.444A3.981 3.981 0 017 3c.742 0 1.436.202 2.032.554zM3.554 4.968L2.109 3.523A5.973 5.973 0 001 7c0 1.296.41 2.496 1.11 3.476l1.444-1.444A3.981 3.981 0 013 7c0-.742.202-1.436.554-2.032zM10 7a3 3 0 11-6 0 3 3 0 016 0z",
        fill: color2
      }
    )
  );
});
var AlertIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M7 4.5a.5.5 0 01.5.5v3.5a.5.5 0 11-1 0V5a.5.5 0 01.5-.5zM7.75 10.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7.206 1.045a.498.498 0 01.23.209l6.494 10.992a.5.5 0 01-.438.754H.508a.497.497 0 01-.506-.452.498.498 0 01.072-.31l6.49-10.984a.497.497 0 01.642-.21zM7 2.483L1.376 12h11.248L7 2.483z",
        fill: color2
      }
    )
  );
});
var AlertAltIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 7A7 7 0 110 7a7 7 0 0114 0zM6.5 8a.5.5 0 001 0V4a.5.5 0 00-1 0v4zm-.25 2.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z",
        fill: color2
      }
    )
  );
});
var EmailIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M0 2.504a.5.5 0 01.5-.5h13a.5.5 0 01.5.5v9a.5.5 0 01-.5.5H.5a.5.5 0 01-.5-.5v-9zm1 1.012v7.488h12V3.519L7.313 7.894a.496.496 0 01-.526.062.497.497 0 01-.1-.062L1 3.516zm11.03-.512H1.974L7 6.874l5.03-3.87z",
        fill: color2
      }
    )
  );
});
var PhoneIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7.76 8.134l-.05.05a.2.2 0 01-.28.03 6.76 6.76 0 01-1.63-1.65.21.21 0 01.04-.27l.05-.05c.23-.2.54-.47.71-.96.17-.47-.02-1.04-.66-1.94-.26-.38-.72-.96-1.22-1.46-.68-.69-1.2-1-1.65-1a.98.98 0 00-.51.13A3.23 3.23 0 00.9 3.424c-.13 1.1.26 2.37 1.17 3.78a16.679 16.679 0 004.55 4.6 6.57 6.57 0 003.53 1.32 3.2 3.2 0 002.85-1.66c.14-.24.24-.64-.07-1.18a7.803 7.803 0 00-1.73-1.81c-.64-.5-1.52-1.11-2.13-1.11a.97.97 0 00-.34.06c-.472.164-.74.458-.947.685l-.023.025zm4.32 2.678a6.801 6.801 0 00-1.482-1.54l-.007-.005-.006-.005a8.418 8.418 0 00-.957-.662 2.7 2.7 0 00-.4-.193.683.683 0 00-.157-.043l-.004.002-.009.003c-.224.078-.343.202-.56.44l-.014.016-.046.045a1.2 1.2 0 01-1.602.149A7.76 7.76 0 014.98 7.134l-.013-.019-.013-.02a1.21 1.21 0 01.195-1.522l.06-.06.026-.024c.219-.19.345-.312.422-.533l.003-.01v-.008a.518.518 0 00-.032-.142c-.06-.178-.203-.453-.502-.872l-.005-.008-.005-.007A10.18 10.18 0 004.013 2.59l-.005-.005c-.31-.314-.543-.5-.716-.605-.147-.088-.214-.096-.222-.097h-.016l-.006.003-.01.006a2.23 2.23 0 00-1.145 1.656c-.09.776.175 1.806 1.014 3.108a15.68 15.68 0 004.274 4.32l.022.014.022.016a5.57 5.57 0 002.964 1.117 2.2 2.2 0 001.935-1.141l.006-.012.004-.007a.182.182 0 00-.007-.038.574.574 0 00-.047-.114z",
        fill: color2
      }
    )
  );
});
var LinkIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M11.841 2.159a2.25 2.25 0 00-3.182 0l-2.5 2.5a2.25 2.25 0 000 3.182.5.5 0 01-.707.707 3.25 3.25 0 010-4.596l2.5-2.5a3.25 3.25 0 014.596 4.596l-2.063 2.063a4.27 4.27 0 00-.094-1.32l1.45-1.45a2.25 2.25 0 000-3.182z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M3.61 7.21c-.1-.434-.132-.88-.095-1.321L1.452 7.952a3.25 3.25 0 104.596 4.596l2.5-2.5a3.25 3.25 0 000-4.596.5.5 0 00-.707.707 2.25 2.25 0 010 3.182l-2.5 2.5A2.25 2.25 0 112.159 8.66l1.45-1.45z",
        fill: color2
      }
    )
  );
});
var LinkBrokenIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M1.452 7.952l1.305-1.305.708.707-1.306 1.305a2.25 2.25 0 103.182 3.182l1.306-1.305.707.707-1.306 1.305a3.25 3.25 0 01-4.596-4.596zM12.548 6.048l-1.305 1.306-.707-.708 1.305-1.305a2.25 2.25 0 10-3.182-3.182L7.354 3.464l-.708-.707 1.306-1.305a3.25 3.25 0 014.596 4.596zM1.854 1.146a.5.5 0 10-.708.708l11 11a.5.5 0 00.707-.707l-11-11z",
        fill: color2
      }
    )
  );
});
var BellIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7.994 1.11a1 1 0 10-1.988 0A4.502 4.502 0 002.5 5.5v3.882l-.943 1.885a.497.497 0 00-.053.295.5.5 0 00.506.438h3.575a1.5 1.5 0 102.83 0h3.575a.5.5 0 00.453-.733L11.5 9.382V5.5a4.502 4.502 0 00-3.506-4.39zM2.81 11h8.382l-.5-1H3.31l-.5 1zM10.5 9V5.5a3.5 3.5 0 10-7 0V9h7zm-4 3.5a.5.5 0 111 0 .5.5 0 01-1 0z",
        fill: color2
      }
    )
  );
});
var RSSIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M1.5.5A.5.5 0 012 0c6.627 0 12 5.373 12 12a.5.5 0 01-1 0C13 5.925 8.075 1 2 1a.5.5 0 01-.5-.5z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M1.5 4.5A.5.5 0 012 4a8 8 0 018 8 .5.5 0 01-1 0 7 7 0 00-7-7 .5.5 0 01-.5-.5z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5 11a2 2 0 11-4 0 2 2 0 014 0zm-1 0a1 1 0 11-2 0 1 1 0 012 0z",
        fill: color2
      }
    )
  );
});
var ShareAltIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M2 1.004a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1v-4.5a.5.5 0 00-1 0v4.5H2v-10h4.5a.5.5 0 000-1H2z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M7.354 7.357L12 2.711v1.793a.5.5 0 001 0v-3a.5.5 0 00-.5-.5h-3a.5.5 0 100 1h1.793L6.646 6.65a.5.5 0 10.708.707z",
        fill: color2
      }
    )
  );
});
var ShareIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M6.646.15a.5.5 0 01.708 0l2 2a.5.5 0 11-.708.707L7.5 1.711v6.793a.5.5 0 01-1 0V1.71L5.354 2.857a.5.5 0 11-.708-.707l2-2z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M2 4.004a1 1 0 00-1 1v7a1 1 0 001 1h10a1 1 0 001-1v-7a1 1 0 00-1-1H9.5a.5.5 0 100 1H12v7H2v-7h2.5a.5.5 0 000-1H2z",
        fill: color2
      }
    )
  );
});
var JumpToIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M13.854 6.646a.5.5 0 010 .708l-2 2a.5.5 0 01-.708-.708L12.293 7.5H5.5a.5.5 0 010-1h6.793l-1.147-1.146a.5.5 0 01.708-.708l2 2z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M10 2a1 1 0 00-1-1H2a1 1 0 00-1 1v10a1 1 0 001 1h7a1 1 0 001-1V9.5a.5.5 0 00-1 0V12H2V2h7v2.5a.5.5 0 001 0V2z",
        fill: color2
      }
    )
  );
});
var CircleHollowIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 13A6 6 0 107 1a6 6 0 000 12zm0 1A7 7 0 107 0a7 7 0 000 14z",
        fill: color2
      }
    )
  );
});
var CircleIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement("path", { d: "M14 7A7 7 0 110 7a7 7 0 0114 0z", fill: color2 })
  );
});
var BookmarkHollowIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.5 0h7a.5.5 0 01.5.5v13a.5.5 0 01-.454.498.462.462 0 01-.371-.118L7 11.159l-3.175 2.72a.46.46 0 01-.379.118A.5.5 0 013 13.5V.5a.5.5 0 01.5-.5zM4 12.413l2.664-2.284a.454.454 0 01.377-.128.498.498 0 01.284.12L10 12.412V1H4v11.413z",
        fill: color2
      }
    )
  );
});
var BookmarkIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.5 0h7a.5.5 0 01.5.5v13a.5.5 0 01-.454.498.462.462 0 01-.371-.118L7 11.159l-3.175 2.72a.46.46 0 01-.379.118A.5.5 0 013 13.5V.5a.5.5 0 01.5-.5z",
        fill: color2
      }
    )
  );
});
var DiamondIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement("g", { clipPath: "url(#prefix__clip0_1449_588)" }, /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.414 1.586a2 2 0 00-2.828 0l-4 4a2 2 0 000 2.828l4 4a2 2 0 002.828 0l4-4a2 2 0 000-2.828l-4-4zm.707-.707a3 3 0 00-4.242 0l-4 4a3 3 0 000 4.242l4 4a3 3 0 004.242 0l4-4a3 3 0 000-4.242l-4-4z",
        fill: color2
      }
    )),
    /* @__PURE__ */ reactExports.createElement("defs", null, /* @__PURE__ */ reactExports.createElement("clipPath", { id: "prefix__clip0_1449_588" }, /* @__PURE__ */ reactExports.createElement("path", { fill: "#fff", d: "M0 0h14v14H0z" })))
  );
});
var HeartHollowIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.814 1.846c.06.05.116.101.171.154l.001.002a3.254 3.254 0 01.755 1.168c.171.461.259.974.259 1.538 0 .332-.046.656-.143.976a4.546 4.546 0 01-.397.937c-.169.302-.36.589-.58.864a7.627 7.627 0 01-.674.746l-4.78 4.596a.585.585 0 01-.427.173.669.669 0 01-.44-.173L1.78 8.217a7.838 7.838 0 01-.677-.748 6.124 6.124 0 01-.572-.855 4.975 4.975 0 01-.388-.931A3.432 3.432 0 010 4.708C0 4.144.09 3.63.265 3.17c.176-.459.429-.85.757-1.168a3.432 3.432 0 011.193-.74c.467-.176.99-.262 1.57-.262.304 0 .608.044.907.137.301.092.586.215.855.367.27.148.526.321.771.512.244.193.471.386.682.584.202-.198.427-.391.678-.584.248-.19.507-.364.78-.512a4.65 4.65 0 01.845-.367c.294-.093.594-.137.9-.137.585 0 1.115.086 1.585.262.392.146.734.34 1.026.584zM1.2 3.526c.128-.333.304-.598.52-.806.218-.212.497-.389.849-.522m-1.37 1.328A3.324 3.324 0 001 4.708c0 .225.032.452.101.686.082.265.183.513.307.737.135.246.294.484.479.716.188.237.386.454.59.652l.001.002 4.514 4.355 4.519-4.344c.2-.193.398-.41.585-.648l.003-.003c.184-.23.345-.472.486-.726l.004-.007c.131-.23.232-.474.31-.732v-.002c.068-.224.101-.45.101-.686 0-.457-.07-.849-.195-1.185a2.177 2.177 0 00-.515-.802l.007-.012-.008.009a2.383 2.383 0 00-.85-.518l-.003-.001C11.1 2.072 10.692 2 10.203 2c-.21 0-.406.03-.597.09h-.001c-.22.07-.443.167-.663.289l-.007.003c-.22.12-.434.262-.647.426-.226.174-.42.341-.588.505l-.684.672-.7-.656a9.967 9.967 0 00-.615-.527 4.82 4.82 0 00-.635-.422l-.01-.005a3.289 3.289 0 00-.656-.281l-.008-.003A2.014 2.014 0 003.785 2c-.481 0-.881.071-1.217.198",
        fill: color2
      }
    )
  );
});
var HeartIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M12.814 1.846c.06.05.116.101.171.154l.001.002a3.254 3.254 0 01.755 1.168c.171.461.259.974.259 1.538 0 .332-.046.656-.143.976a4.546 4.546 0 01-.397.937c-.169.302-.36.589-.58.864a7.627 7.627 0 01-.674.746l-4.78 4.596a.585.585 0 01-.427.173.669.669 0 01-.44-.173L1.78 8.217a7.838 7.838 0 01-.677-.748 6.124 6.124 0 01-.572-.855 4.975 4.975 0 01-.388-.931A3.432 3.432 0 010 4.708C0 4.144.09 3.63.265 3.17c.176-.459.429-.85.757-1.168a3.432 3.432 0 011.193-.74c.467-.176.99-.262 1.57-.262.304 0 .608.044.907.137.301.092.586.215.855.367.27.148.526.321.771.512.244.193.471.386.682.584.202-.198.427-.391.678-.584.248-.19.507-.364.78-.512a4.65 4.65 0 01.845-.367c.294-.093.594-.137.9-.137.585 0 1.115.086 1.585.262.392.146.734.34 1.026.584z",
        fill: color2
      }
    )
  );
});
var StarHollowIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.319.783a.75.75 0 011.362 0l1.63 3.535 3.867.458a.75.75 0 01.42 1.296L10.74 8.715l.76 3.819a.75.75 0 01-1.103.8L7 11.434l-3.398 1.902a.75.75 0 01-1.101-.801l.758-3.819L.401 6.072a.75.75 0 01.42-1.296l3.867-.458L6.318.783zm.68.91l-1.461 3.17a.75.75 0 01-.593.431l-3.467.412 2.563 2.37a.75.75 0 01.226.697l-.68 3.424 3.046-1.705a.75.75 0 01.733 0l3.047 1.705-.68-3.424a.75.75 0 01.226-.697l2.563-2.37-3.467-.412a.75.75 0 01-.593-.43L7 1.694z",
        fill: color2
      }
    )
  );
});
var StarIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M7.68.783a.75.75 0 00-1.361 0l-1.63 3.535-3.867.458A.75.75 0 00.4 6.072l2.858 2.643-.758 3.819a.75.75 0 001.101.8L7 11.434l3.397 1.902a.75.75 0 001.102-.801l-.759-3.819L13.6 6.072a.75.75 0 00-.421-1.296l-3.866-.458L7.68.783z",
        fill: color2
      }
    )
  );
});
var CertificateIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10 7.854a4.5 4.5 0 10-6 0V13a.5.5 0 00.497.5h.006c.127 0 .254-.05.35-.146L7 11.207l2.146 2.147A.5.5 0 0010 13V7.854zM7 8a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm-.354 2.146a.5.5 0 01.708 0L9 11.793v-3.26C8.398 8.831 7.718 9 7 9a4.481 4.481 0 01-2-.468v3.26l1.646-1.646z",
        fill: color2
      }
    )
  );
});
var VerifiedIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.565 13.123a.991.991 0 01.87 0l.987.482a.991.991 0 001.31-.426l.515-.97a.991.991 0 01.704-.511l1.082-.19a.99.99 0 00.81-1.115l-.154-1.087a.991.991 0 01.269-.828l.763-.789a.991.991 0 000-1.378l-.763-.79a.991.991 0 01-.27-.827l.155-1.087a.99.99 0 00-.81-1.115l-1.082-.19a.991.991 0 01-.704-.511L9.732.82a.99.99 0 00-1.31-.426l-.987.482a.991.991 0 01-.87 0L5.578.395a.99.99 0 00-1.31.426l-.515.97a.99.99 0 01-.704.511l-1.082.19a.99.99 0 00-.81 1.115l.154 1.087a.99.99 0 01-.269.828L.28 6.31a.99.99 0 000 1.378l.763.79a.99.99 0 01.27.827l-.155 1.087a.99.99 0 00.81 1.115l1.082.19a.99.99 0 01.704.511l.515.97c.25.473.83.661 1.31.426l.987-.482zm4.289-8.477a.5.5 0 010 .708l-4.5 4.5a.5.5 0 01-.708 0l-2.5-2.5a.5.5 0 11.708-.708L6 8.793l4.146-4.147a.5.5 0 01.708 0z",
        fill: color2
      }
    )
  );
});
var ThumbsUpIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11 12.02c-.4.37-.91.56-1.56.56h-.88a5.493 5.493 0 01-1.3-.16c-.42-.1-.91-.25-1.47-.45a5.056 5.056 0 00-.95-.27H2.88a.84.84 0 01-.62-.26.84.84 0 01-.26-.61V6.45c0-.24.09-.45.26-.62a.84.84 0 01.62-.25h1.87c.16-.11.47-.47.93-1.06.27-.35.51-.64.74-.88.1-.11.19-.3.24-.58.05-.28.12-.57.2-.87.1-.3.24-.55.43-.74a.87.87 0 01.62-.25c.38 0 .72.07 1.03.22.3.15.54.38.7.7.15.31.23.73.23 1.27a3 3 0 01-.32 1.31h1.2c.47 0 .88.17 1.23.52s.52.8.52 1.22c0 .29-.04.66-.34 1.12.05.15.07.3.07.47 0 .35-.09.68-.26.98a2.05 2.05 0 01-.4 1.51 1.9 1.9 0 01-.57 1.5zm.473-5.33a.965.965 0 00.027-.25.742.742 0 00-.227-.513.683.683 0 00-.523-.227H7.927l.73-1.45a2 2 0 00.213-.867c0-.444-.068-.695-.127-.822a.53.53 0 00-.245-.244 1.296 1.296 0 00-.539-.116.989.989 0 00-.141.28 9.544 9.544 0 00-.174.755c-.069.387-.213.779-.484 1.077l-.009.01-.009.01c-.195.202-.41.46-.67.798l-.003.004c-.235.3-.44.555-.613.753-.151.173-.343.381-.54.516l-.255.176H5v4.133l.018.003c.384.07.76.176 1.122.318.532.189.98.325 1.352.413l.007.002a4.5 4.5 0 001.063.131h.878c.429 0 .683-.115.871-.285a.9.9 0 00.262-.702l-.028-.377.229-.3a1.05 1.05 0 00.205-.774l-.044-.333.165-.292a.969.969 0 00.13-.487.457.457 0 00-.019-.154l-.152-.458.263-.404a1.08 1.08 0 00.152-.325zM3.5 10.8a.5.5 0 100-1 .5.5 0 000 1z",
        fill: color2
      }
    )
  );
});
var ShieldIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.765 2.076A.5.5 0 0112 2.5v6.009a.497.497 0 01-.17.366L7.337 12.87a.497.497 0 01-.674 0L2.17 8.875l-.009-.007a.498.498 0 01-.16-.358L2 8.5v-6a.5.5 0 01.235-.424l.018-.011c.016-.01.037-.024.065-.04.056-.032.136-.077.24-.128a6.97 6.97 0 01.909-.371C4.265 1.26 5.443 1 7 1s2.735.26 3.533.526c.399.133.702.267.91.37a4.263 4.263 0 01.304.169l.018.01zM3 2.793v5.482l1.068.95 6.588-6.588a6.752 6.752 0 00-.44-.163C9.517 2.24 8.444 2 7 2c-1.443 0-2.515.24-3.217.474-.351.117-.61.233-.778.317L3 2.793zm4 9.038l-2.183-1.94L11 3.706v4.568l-4 3.556z",
        fill: color2
      }
    )
  );
});
var BasketIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M10.354 2.854a.5.5 0 10-.708-.708l-3 3a.5.5 0 10.708.708l3-3z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M2.09 6H4.5a.5.5 0 000-1H1.795a.75.75 0 00-.74.873l.813 4.874A1.5 1.5 0 003.348 12h7.305a1.5 1.5 0 001.48-1.253l.812-4.874a.75.75 0 00-.74-.873H10a.5.5 0 000 1h1.91l-.764 4.582a.5.5 0 01-.493.418H3.347a.5.5 0 01-.493-.418L2.09 6z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M4.5 7a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2a.5.5 0 01.5-.5zM10 7.5a.5.5 0 00-1 0v2a.5.5 0 001 0v-2zM6.5 9.5v-2a.5.5 0 011 0v2a.5.5 0 01-1 0z",
        fill: color2
      }
    )
  );
});
var BeakerIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.5 2h.75v3.866l-3.034 5.26A1.25 1.25 0 003.299 13H10.7a1.25 1.25 0 001.083-1.875L8.75 5.866V2h.75a.5.5 0 100-1h-5a.5.5 0 000 1zm1.75 4V2h1.5v4.134l.067.116L8.827 8H5.173l1.01-1.75.067-.116V6zM4.597 9l-1.515 2.625A.25.25 0 003.3 12H10.7a.25.25 0 00.217-.375L9.404 9H4.597z",
        fill: color2
      }
    )
  );
});
var HourglassIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement("path", { d: "M7.5 10.5a.5.5 0 11-1 0 .5.5 0 011 0z", fill: color2 }),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.5 1a.5.5 0 00-.5.5c0 1.063.137 1.892.678 2.974.346.692.858 1.489 1.598 2.526-.89 1.247-1.455 2.152-1.798 2.956-.377.886-.477 1.631-.478 2.537v.007a.5.5 0 00.5.5h7c.017 0 .034 0 .051-.003A.5.5 0 0011 12.5v-.007c0-.906-.1-1.65-.478-2.537-.343-.804-.909-1.709-1.798-2.956.74-1.037 1.252-1.834 1.598-2.526C10.863 3.392 11 2.563 11 1.5a.5.5 0 00-.5-.5h-7zm6.487 11a4.675 4.675 0 00-.385-1.652c-.277-.648-.735-1.407-1.499-2.494-.216.294-.448.606-.696.937a.497.497 0 01-.195.162.5.5 0 01-.619-.162c-.248-.331-.48-.643-.696-.937-.764 1.087-1.222 1.846-1.499 2.494A4.675 4.675 0 004.013 12h5.974zM6.304 6.716c.212.293.443.609.696.948a90.058 90.058 0 00.709-.965c.48-.664.86-1.218 1.163-1.699H5.128a32.672 32.672 0 001.176 1.716zM4.559 4h4.882c.364-.735.505-1.312.546-2H4.013c.04.688.182 1.265.546 2z",
        fill: color2
      }
    )
  );
});
var FlagIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.5 1h-9a.5.5 0 00-.5.5v11a.5.5 0 001 0V8h8.5a.5.5 0 00.354-.854L9.207 4.5l2.647-2.646A.499.499 0 0011.5 1zM8.146 4.146L10.293 2H3v5h7.293L8.146 4.854a.5.5 0 010-.708z",
        fill: color2
      }
    )
  );
});
var CloudHollowIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10 7V6a3 3 0 00-5.91-.736l-.17.676-.692.075A2.5 2.5 0 003.5 11h3c.063 0 .125-.002.187-.007l.076-.005.076.006c.053.004.106.006.161.006h4a2 2 0 100-4h-1zM3.12 5.02A3.5 3.5 0 003.5 12h3c.087 0 .174-.003.26-.01.079.007.16.01.24.01h4a3 3 0 100-6 4 4 0 00-7.88-.98z",
        fill: color2
      }
    )
  );
});
var CloudIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M7 2a4 4 0 014 4 3 3 0 110 6H7c-.08 0-.161-.003-.24-.01-.086.007-.173.01-.26.01h-3a3.5 3.5 0 01-.38-6.98A4.002 4.002 0 017 2z",
        fill: color2
      }
    )
  );
});
var StickerIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11 7a4 4 0 11-8 0 4 4 0 018 0zm-1 0a3 3 0 11-6 0 3 3 0 016 0z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.268 13.18c.25.472.83.66 1.31.425l.987-.482a.991.991 0 01.87 0l.987.482a.991.991 0 001.31-.426l.515-.97a.991.991 0 01.704-.511l1.082-.19a.99.99 0 00.81-1.115l-.154-1.087a.991.991 0 01.269-.828l.763-.789a.991.991 0 000-1.378l-.763-.79a.991.991 0 01-.27-.827l.155-1.087a.99.99 0 00-.81-1.115l-1.082-.19a.991.991 0 01-.704-.511L9.732.82a.99.99 0 00-1.31-.426l-.987.482a.991.991 0 01-.87 0L5.578.395a.99.99 0 00-1.31.426l-.515.97a.99.99 0 01-.704.511l-1.082.19a.99.99 0 00-.81 1.115l.154 1.087a.99.99 0 01-.269.828L.28 6.31a.99.99 0 000 1.378l.763.79a.99.99 0 01.27.827l-.155 1.087a.99.99 0 00.81 1.115l1.082.19a.99.99 0 01.704.511l.515.97zm5.096-1.44l-.511.963-.979-.478a1.99 1.99 0 00-1.748 0l-.979.478-.51-.962a1.991 1.991 0 00-1.415-1.028l-1.073-.188.152-1.079a1.991 1.991 0 00-.54-1.663L1.004 7l.757-.783a1.991 1.991 0 00.54-1.663L2.15 3.475l1.073-.188A1.991 1.991 0 004.636 2.26l.511-.962.979.478a1.99 1.99 0 001.748 0l.979-.478.51.962c.288.543.81.922 1.415 1.028l1.073.188-.152 1.079a1.99 1.99 0 00.54 1.663l.757.783-.757.783a1.99 1.99 0 00-.54 1.663l.152 1.079-1.073.188a1.991 1.991 0 00-1.414 1.028z",
        fill: color2
      }
    )
  );
});
var ChevronUpIcon$1 = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M7.354 3.896l5.5 5.5a.5.5 0 01-.708.708L7 4.957l-5.146 5.147a.5.5 0 01-.708-.708l5.5-5.5a.5.5 0 01.708 0z",
        fill: color2
      }
    )
  );
});
var ChevronDownIcon$1 = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M1.146 4.604l5.5 5.5a.5.5 0 00.708 0l5.5-5.5a.5.5 0 00-.708-.708L7 9.043 1.854 3.896a.5.5 0 10-.708.708z",
        fill: color2
      }
    )
  );
});
var ChevronLeftIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M2.76 7.096a.498.498 0 00.136.258l5.5 5.5a.5.5 0 00.707-.708L3.958 7l5.147-5.146a.5.5 0 10-.708-.708l-5.5 5.5a.5.5 0 00-.137.45z",
        fill: color2
      }
    )
  );
});
var ChevronRightIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M11.104 7.354l-5.5 5.5a.5.5 0 01-.708-.708L10.043 7 4.896 1.854a.5.5 0 11.708-.708l5.5 5.5a.5.5 0 010 .708z",
        fill: color2
      }
    )
  );
});
var ChevronSmallUpIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M3.854 9.104a.5.5 0 11-.708-.708l3.5-3.5a.5.5 0 01.708 0l3.5 3.5a.5.5 0 01-.708.708L7 5.957 3.854 9.104z",
        fill: color2
      }
    )
  );
});
var ChevronSmallDownIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M3.854 4.896a.5.5 0 10-.708.708l3.5 3.5a.5.5 0 00.708 0l3.5-3.5a.5.5 0 00-.708-.708L7 8.043 3.854 4.896z",
        fill: color2
      }
    )
  );
});
var ChevronSmallLeftIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.104 10.146a.5.5 0 01-.708.708l-3.5-3.5a.5.5 0 010-.708l3.5-3.5a.5.5 0 11.708.708L5.957 7l3.147 3.146z",
        fill: color2
      }
    )
  );
});
var ChevronSmallRightIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.896 10.146a.5.5 0 00.708.708l3.5-3.5a.5.5 0 000-.708l-3.5-3.5a.5.5 0 10-.708.708L8.043 7l-3.147 3.146z",
        fill: color2
      }
    )
  );
});
var ArrowUpIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M11.854 4.646l-4.5-4.5a.5.5 0 00-.708 0l-4.5 4.5a.5.5 0 10.708.708L6.5 1.707V13.5a.5.5 0 001 0V1.707l3.646 3.647a.5.5 0 00.708-.708z",
        fill: color2
      }
    )
  );
});
var ArrowDownIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M7.5.5a.5.5 0 00-1 0v11.793L2.854 8.646a.5.5 0 10-.708.708l4.5 4.5a.5.5 0 00.351.146h.006c.127 0 .254-.05.35-.146l4.5-4.5a.5.5 0 00-.707-.708L7.5 12.293V.5z",
        fill: color2
      }
    )
  );
});
var ArrowLeftIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M5.354 2.146a.5.5 0 010 .708L1.707 6.5H13.5a.5.5 0 010 1H1.707l3.647 3.646a.5.5 0 01-.708.708l-4.5-4.5a.5.5 0 010-.708l4.5-4.5a.5.5 0 01.708 0z",
        fill: color2
      }
    )
  );
});
var ArrowRightIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M8.646 2.146a.5.5 0 01.708 0l4.5 4.5a.5.5 0 010 .708l-4.5 4.5a.5.5 0 01-.708-.708L12.293 7.5H.5a.5.5 0 010-1h11.793L8.646 2.854a.5.5 0 010-.708z",
        fill: color2
      }
    )
  );
});
var ArrowTopLeftIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M1.904 8.768V2.404a.5.5 0 01.5-.5h6.364a.5.5 0 110 1H3.61l8.339 8.339a.5.5 0 01-.707.707l-8.34-8.34v5.158a.5.5 0 01-1 0z",
        fill: color2
      }
    )
  );
});
var ArrowTopRightIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M12.096 8.768V2.404a.5.5 0 00-.5-.5H5.232a.5.5 0 100 1h5.157L2.05 11.243a.5.5 0 10.707.707l8.34-8.34v5.158a.5.5 0 101 0z",
        fill: color2
      }
    )
  );
});
var ArrowBottomLeftIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M1.904 5.232v6.364a.5.5 0 00.5.5h6.364a.5.5 0 000-1H3.61l8.339-8.339a.5.5 0 00-.707-.707l-8.34 8.34V5.231a.5.5 0 00-1 0z",
        fill: color2
      }
    )
  );
});
var ArrowBottomRightIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M12.096 5.232v6.364a.5.5 0 01-.5.5H5.232a.5.5 0 010-1h5.157L2.05 2.757a.5.5 0 01.707-.707l8.34 8.34V5.231a.5.5 0 111 0z",
        fill: color2
      }
    )
  );
});
var ArrowSolidUpIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.772 3.59c.126-.12.33-.12.456 0l5.677 5.387c.203.193.06.523-.228.523H1.323c-.287 0-.431-.33-.228-.523L6.772 3.59z",
        fill: color2
      }
    )
  );
});
var ArrowSolidDownIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7.228 10.41a.335.335 0 01-.456 0L1.095 5.023c-.203-.193-.06-.523.228-.523h11.354c.287 0 .431.33.228.523L7.228 10.41z",
        fill: color2
      }
    )
  );
});
var ArrowSolidLeftIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.712 7.212a.3.3 0 010-.424l5.276-5.276a.3.3 0 01.512.212v10.552a.3.3 0 01-.512.212L3.712 7.212z",
        fill: color2
      }
    )
  );
});
var ArrowSolidRightIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10.288 7.212a.3.3 0 000-.424L5.012 1.512a.3.3 0 00-.512.212v10.552a.3.3 0 00.512.212l5.276-5.276z",
        fill: color2
      }
    )
  );
});
var ExpandAltIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M7.354.146l4 4a.5.5 0 01-.708.708L7 1.207 3.354 4.854a.5.5 0 11-.708-.708l4-4a.5.5 0 01.708 0zM11.354 9.146a.5.5 0 010 .708l-4 4a.5.5 0 01-.708 0l-4-4a.5.5 0 11.708-.708L7 12.793l3.646-3.647a.5.5 0 01.708 0z",
        fill: color2
      }
    )
  );
});
var CollapseIcon$1 = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M3.354.146a.5.5 0 10-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 00-.708-.708L7 3.793 3.354.146zM6.646 9.146a.5.5 0 01.708 0l4 4a.5.5 0 01-.708.708L7 10.207l-3.646 3.647a.5.5 0 01-.708-.708l4-4z",
        fill: color2
      }
    )
  );
});
var ExpandIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M1.5 1h2a.5.5 0 010 1h-.793l3.147 3.146a.5.5 0 11-.708.708L2 2.707V3.5a.5.5 0 01-1 0v-2a.5.5 0 01.5-.5zM10 1.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-.793L8.854 5.854a.5.5 0 11-.708-.708L11.293 2H10.5a.5.5 0 01-.5-.5zM12.5 10a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1h.793L8.146 8.854a.5.5 0 11.708-.708L12 11.293V10.5a.5.5 0 01.5-.5zM2 11.293V10.5a.5.5 0 00-1 0v2a.5.5 0 00.5.5h2a.5.5 0 000-1h-.793l3.147-3.146a.5.5 0 10-.708-.708L2 11.293z",
        fill: color2
      }
    )
  );
});
var UnfoldIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M6.646.147l-1.5 1.5a.5.5 0 10.708.707l.646-.647V5a.5.5 0 001 0V1.707l.646.647a.5.5 0 10.708-.707l-1.5-1.5a.5.5 0 00-.708 0z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M1.309 4.038a.498.498 0 00-.16.106l-.005.005a.498.498 0 00.002.705L3.293 7 1.146 9.146A.498.498 0 001.5 10h3a.5.5 0 000-1H2.707l1.5-1.5h5.586l2.353 2.354a.5.5 0 00.708-.708L10.707 7l2.146-2.146.11-.545-.107.542A.499.499 0 0013 4.503v-.006a.5.5 0 00-.144-.348l-.005-.005A.498.498 0 0012.5 4h-3a.5.5 0 000 1h1.793l-1.5 1.5H4.207L2.707 5H4.5a.5.5 0 000-1h-3a.498.498 0 00-.191.038z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M7 8.5a.5.5 0 01.5.5v3.293l.646-.647a.5.5 0 01.708.708l-1.5 1.5a.5.5 0 01-.708 0l-1.5-1.5a.5.5 0 01.708-.708l.646.647V9a.5.5 0 01.5-.5zM9 9.5a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5z",
        fill: color2
      }
    )
  );
});
var TransferIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M10.646 2.646a.5.5 0 01.708 0l1.5 1.5a.5.5 0 010 .708l-1.5 1.5a.5.5 0 01-.708-.708L11.293 5H1.5a.5.5 0 010-1h9.793l-.647-.646a.5.5 0 010-.708zM3.354 8.354L2.707 9H12.5a.5.5 0 010 1H2.707l.647.646a.5.5 0 01-.708.708l-1.5-1.5a.5.5 0 010-.708l1.5-1.5a.5.5 0 11.708.708z",
        fill: color2
      }
    )
  );
});
var RedirectIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M1.5 1a.5.5 0 01.5.5V10a2 2 0 004 0V4a3 3 0 016 0v7.793l1.146-1.147a.5.5 0 01.708.708l-2 2a.5.5 0 01-.708 0l-2-2a.5.5 0 01.708-.708L11 11.793V4a2 2 0 10-4 0v6.002a3 3 0 01-6 0V1.5a.5.5 0 01.5-.5z",
        fill: color2
      }
    )
  );
});
var UndoIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M1.146 3.854a.5.5 0 010-.708l2-2a.5.5 0 11.708.708L2.707 3h6.295A4 4 0 019 11H3a.5.5 0 010-1h6a3 3 0 100-6H2.707l1.147 1.146a.5.5 0 11-.708.708l-2-2z",
        fill: color2
      }
    )
  );
});
var ReplyIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M4.354 2.146a.5.5 0 010 .708L1.707 5.5H9.5A4.5 4.5 0 0114 10v1.5a.5.5 0 01-1 0V10a3.5 3.5 0 00-3.5-3.5H1.707l2.647 2.646a.5.5 0 11-.708.708l-3.5-3.5a.5.5 0 010-.708l3.5-3.5a.5.5 0 01.708 0z",
        fill: color2
      }
    )
  );
});
var SyncIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M5.5 1A.5.5 0 005 .5H2a.5.5 0 000 1h1.535a6.502 6.502 0 002.383 11.91.5.5 0 10.165-.986A5.502 5.502 0 014.5 2.1V4a.5.5 0 001 0V1.353a.5.5 0 000-.023V1zM7.507 1a.5.5 0 01.576-.41 6.502 6.502 0 012.383 11.91H12a.5.5 0 010 1H9a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v1.9A5.5 5.5 0 007.917 1.576.5.5 0 017.507 1z",
        fill: color2
      }
    )
  );
});
var UploadIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M8.646 5.854L7.5 4.707V10.5a.5.5 0 01-1 0V4.707L5.354 5.854a.5.5 0 11-.708-.708l2-2a.5.5 0 01.708 0l2 2a.5.5 0 11-.708.708z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
        fill: color2
      }
    )
  );
});
var DownloadIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M5.354 8.146L6.5 9.293V3.5a.5.5 0 011 0v5.793l1.146-1.147a.5.5 0 11.708.708l-2 2a.5.5 0 01-.708 0l-2-2a.5.5 0 11.708-.708z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M0 7a7 7 0 1114 0A7 7 0 010 7zm1 0a6 6 0 1112 0A6 6 0 011 7z",
        fill: color2
      }
    )
  );
});
var BackIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M5.854 5.354L4.707 6.5H10.5a.5.5 0 010 1H4.707l1.147 1.146a.5.5 0 11-.708.708l-2-2a.5.5 0 010-.708l2-2a.5.5 0 11.708.708z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 0a7 7 0 110 14A7 7 0 017 0zm0 1a6 6 0 110 12A6 6 0 017 1z",
        fill: color2
      }
    )
  );
});
var ProceedIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M3.5 6.5h5.793L8.146 5.354a.5.5 0 11.708-.708l2 2a.5.5 0 010 .708l-2 2a.5.5 0 11-.708-.708L9.293 7.5H3.5a.5.5 0 010-1z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 14A7 7 0 117 0a7 7 0 010 14zm0-1A6 6 0 117 1a6 6 0 010 12z",
        fill: color2
      }
    )
  );
});
var RefreshIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M7.092.5H7a6.5 6.5 0 106.41 7.583.5.5 0 10-.986-.166A5.495 5.495 0 017 12.5a5.5 5.5 0 010-11h.006a5.5 5.5 0 014.894 3H10a.5.5 0 000 1h3a.5.5 0 00.5-.5V2a.5.5 0 00-1 0v1.535A6.495 6.495 0 007.092.5z",
        fill: color2
      }
    )
  );
});
var GlobeIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 7A7 7 0 100 7a7 7 0 0014 0zm-6.535 5.738c-.233.23-.389.262-.465.262-.076 0-.232-.032-.465-.262-.238-.234-.497-.623-.737-1.182-.434-1.012-.738-2.433-.79-4.056h3.984c-.052 1.623-.356 3.043-.79 4.056-.24.56-.5.948-.737 1.182zM8.992 6.5H5.008c.052-1.623.356-3.044.79-4.056.24-.56.5-.948.737-1.182C6.768 1.032 6.924 1 7 1c.076 0 .232.032.465.262.238.234.497.623.737 1.182.434 1.012.738 2.433.79 4.056zm1 1c-.065 2.176-.558 4.078-1.282 5.253A6.005 6.005 0 0012.98 7.5H9.992zm2.987-1H9.992c-.065-2.176-.558-4.078-1.282-5.253A6.005 6.005 0 0112.98 6.5zm-8.971 0c.065-2.176.558-4.078 1.282-5.253A6.005 6.005 0 001.02 6.5h2.988zm-2.987 1a6.005 6.005 0 004.27 5.253C4.565 11.578 4.072 9.676 4.007 7.5H1.02z",
        fill: color2
      }
    )
  );
});
var CompassIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10.087 3.397L5.95 5.793a.374.374 0 00-.109.095.377.377 0 00-.036.052l-2.407 4.147a.374.374 0 00-.004.384c.104.179.334.24.513.136l4.142-2.404a.373.373 0 00.148-.143l2.406-4.146a.373.373 0 00-.037-.443.373.373 0 00-.478-.074zM4.75 9.25l2.847-1.652-1.195-1.195L4.75 9.25z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
        fill: color2
      }
    )
  );
});
var LocationIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M0 7a7 7 0 1114 0A7 7 0 010 7zm6.5 3.5v2.48A6.001 6.001 0 011.02 7.5H3.5a.5.5 0 000-1H1.02A6.001 6.001 0 016.5 1.02V3.5a.5.5 0 001 0V1.02a6.001 6.001 0 015.48 5.48H10.5a.5.5 0 000 1h2.48a6.002 6.002 0 01-5.48 5.48V10.5a.5.5 0 00-1 0z",
        fill: color2
      }
    )
  );
});
var PinIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9 5a2 2 0 11-4 0 2 2 0 014 0zM8 5a1 1 0 11-2 0 1 1 0 012 0z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 5A5 5 0 002 5c0 2.633 2.273 6.154 4.65 8.643.192.2.508.2.7 0C9.726 11.153 12 7.633 12 5zM7 1a4 4 0 014 4c0 1.062-.471 2.42-1.303 3.88-.729 1.282-1.69 2.562-2.697 3.67-1.008-1.108-1.968-2.388-2.697-3.67C3.47 7.42 3 6.063 3 5a4 4 0 014-4z",
        fill: color2
      }
    )
  );
});
var TimeIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M7 2a.5.5 0 01.5.5v4H10a.5.5 0 010 1H7a.5.5 0 01-.5-.5V2.5A.5.5 0 017 2z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 14A7 7 0 107 0a7 7 0 000 14zm0-1A6 6 0 107 1a6 6 0 000 12z",
        fill: color2
      }
    )
  );
});
var DashboardIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M9.79 4.093a.5.5 0 01.117.698L7.91 7.586a1 1 0 11-.814-.581l1.997-2.796a.5.5 0 01.698-.116z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2.069 12.968a7 7 0 119.863 0A12.962 12.962 0 007 12c-1.746 0-3.41.344-4.931.968zm9.582-1.177a6 6 0 10-9.301 0A13.98 13.98 0 017 11c1.629 0 3.194.279 4.65.791z",
        fill: color2
      }
    )
  );
});
var TimerIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement("path", { d: "M7.5 4.5a.5.5 0 00-1 0v2.634a1 1 0 101 0V4.5z", fill: color2 }),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.5.5A.5.5 0 016 0h2a.5.5 0 010 1h-.5v1.02a5.973 5.973 0 013.374 1.398l.772-.772a.5.5 0 01.708.708l-.772.772A6 6 0 116.5 2.02V1H6a.5.5 0 01-.5-.5zM7 3a5 5 0 100 10A5 5 0 007 3z",
        fill: color2
      }
    )
  );
});
var HomeIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7.354 1.146l5.5 5.5a.5.5 0 01-.708.708L12 7.207V12.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V9H6v3.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V7.207l-.146.147a.5.5 0 11-.708-.708l1-1 4.5-4.5a.5.5 0 01.708 0zM3 6.207V12h2V8.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V12h2V6.207l-4-4-4 4z",
        fill: color2
      }
    )
  );
});
var AdminIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1.213 4.094a.5.5 0 01.056-.034l5.484-2.995a.498.498 0 01.494 0L12.73 4.06a.507.507 0 01.266.389.498.498 0 01-.507.555H1.51a.5.5 0 01-.297-.91zm2.246-.09h7.082L7 2.07 3.459 4.004z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M4 6a.5.5 0 00-1 0v5a.5.5 0 001 0V6zM11 6a.5.5 0 00-1 0v5a.5.5 0 001 0V6zM5.75 5.5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zM8.75 6a.5.5 0 00-1 0v5a.5.5 0 001 0V6zM1.5 12.504a.5.5 0 01.5-.5h10a.5.5 0 010 1H2a.5.5 0 01-.5-.5z",
        fill: color2
      }
    )
  );
});
var DirectionIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement("g", { clipPath: "url(#prefix__clip0_1107_3594)" }, /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M11.451.537l.01 12.922h0L7.61 8.946a1.077 1.077 0 00-.73-.374L.964 8.087 11.45.537h0z",
        stroke: color2,
        strokeWidth: 1.077
      }
    )),
    /* @__PURE__ */ reactExports.createElement("defs", null, /* @__PURE__ */ reactExports.createElement("clipPath", { id: "prefix__clip0_1107_3594" }, /* @__PURE__ */ reactExports.createElement("path", { fill: "#fff", d: "M0 0h14v14H0z" })))
  );
});
var UserIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 7A7 7 0 110 7a7 7 0 0114 0zM2.671 11.155c.696-1.006 2.602-1.816 3.194-1.91.226-.036.232-.658.232-.658s-.665-.658-.81-1.544c-.39 0-.63-.94-.241-1.272a2.578 2.578 0 00-.012-.13c-.066-.607-.28-2.606 1.965-2.606 2.246 0 2.031 2 1.966 2.606l-.012.13c.39.331.149 1.272-.24 1.272-.146.886-.81 1.544-.81 1.544s.004.622.23.658c.593.094 2.5.904 3.195 1.91a6 6 0 10-8.657 0z",
        fill: color2
      }
    )
  );
});
var UserAltIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M7.275 13.16a11.388 11.388 0 005.175-1.232v-.25c0-1.566-3.237-2.994-4.104-3.132-.27-.043-.276-.783-.276-.783s.791-.783.964-1.836c.463 0 .75-1.119.286-1.513C9.34 4 9.916 1.16 6.997 1.16c-2.92 0-2.343 2.84-2.324 3.254-.463.394-.177 1.513.287 1.513.172 1.053.963 1.836.963 1.836s-.006.74-.275.783c-.858.136-4.036 1.536-4.103 3.082a11.388 11.388 0 005.73 1.532z",
        fill: color2
      }
    )
  );
});
var UserAddIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M1.183 11.906a10.645 10.645 0 01-1.181-.589c.062-1.439 3.02-2.74 3.818-2.868.25-.04.256-.728.256-.728s-.736-.729-.896-1.709c-.432 0-.698-1.041-.267-1.408A2.853 2.853 0 002.9 4.46c-.072-.672-.31-2.884 2.175-2.884 2.486 0 2.248 2.212 2.176 2.884-.007.062-.012.112-.014.144.432.367.165 1.408-.266 1.408-.16.98-.896 1.709-.896 1.709s.005.688.256.728c.807.129 3.82 1.457 3.82 2.915v.233a10.598 10.598 0 01-4.816 1.146c-1.441 0-2.838-.282-4.152-.837zM11.5 2.16a.5.5 0 01.5.5v1.5h1.5a.5.5 0 010 1H12v1.5a.5.5 0 01-1 0v-1.5H9.5a.5.5 0 110-1H11v-1.5a.5.5 0 01.5-.5z",
        fill: color2
      }
    )
  );
});
var UsersIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M9.21 11.623a10.586 10.586 0 01-4.031.787A10.585 10.585 0 010 11.07c.06-1.354 2.933-2.578 3.708-2.697.243-.038.249-.685.249-.685s-.715-.685-.87-1.607c-.42 0-.679-.979-.26-1.323a2.589 2.589 0 00-.013-.136c-.07-.632-.3-2.712 2.113-2.712 2.414 0 2.183 2.08 2.113 2.712-.007.059-.012.105-.013.136.419.344.16 1.323-.259 1.323-.156.922-.87 1.607-.87 1.607s.005.647.248.685c.784.12 3.71 1.37 3.71 2.74v.22c-.212.103-.427.2-.646.29z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M8.81 8.417a9.643 9.643 0 00-.736-.398c.61-.42 1.396-.71 1.7-.757.167-.026.171-.471.171-.471s-.491-.471-.598-1.104c-.288 0-.466-.674-.178-.91-.001-.022-.005-.053-.01-.094-.048-.434-.206-1.864 1.453-1.864 1.66 0 1.5 1.43 1.453 1.864l-.01.094c.289.236.11.91-.178.91-.107.633-.598 1.104-.598 1.104s.004.445.171.47c.539.084 2.55.942 2.55 1.884v.628a10.604 10.604 0 01-3.302.553 2.974 2.974 0 00-.576-.879c-.375-.408-.853-.754-1.312-1.03z",
        fill: color2
      }
    )
  );
});
var ProfileIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M9.106 7.354c-.627.265-1.295.4-1.983.4a5.062 5.062 0 01-2.547-.681c.03-.688 1.443-1.31 1.824-1.37.12-.02.122-.348.122-.348s-.351-.348-.428-.816c-.206 0-.333-.498-.127-.673 0-.016-.003-.04-.007-.07C5.926 3.477 5.812 2.42 7 2.42c1.187 0 1.073 1.057 1.039 1.378l-.007.069c.207.175.08.673-.127.673-.076.468-.428.816-.428.816s.003.329.122.348c.386.06 1.825.696 1.825 1.392v.111c-.104.053-.21.102-.318.148zM3.75 11.25A.25.25 0 014 11h6a.25.25 0 110 .5H4a.25.25 0 01-.25-.25zM4 9a.25.25 0 000 .5h6a.25.25 0 100-.5H4z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1 .5a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v13a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5V.5zM2 13V1h10v12H2z",
        fill: color2
      }
    )
  );
});
var FaceHappyIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M3.968 8.75a.5.5 0 00-.866.5A4.498 4.498 0 007 11.5c1.666 0 3.12-.906 3.898-2.25a.5.5 0 10-.866-.5A3.498 3.498 0 017 10.5a3.498 3.498 0 01-3.032-1.75zM5.5 5a1 1 0 11-2 0 1 1 0 012 0zM9.5 6a1 1 0 100-2 1 1 0 000 2z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
        fill: color2
      }
    )
  );
});
var FaceNeutralIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M4.5 9a.5.5 0 000 1h5a.5.5 0 000-1h-5zM5.5 5a1 1 0 11-2 0 1 1 0 012 0zM9.5 6a1 1 0 100-2 1 1 0 000 2z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
        fill: color2
      }
    )
  );
});
var FaceSadIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M3.968 10.25a.5.5 0 01-.866-.5A4.498 4.498 0 017 7.5c1.666 0 3.12.906 3.898 2.25a.5.5 0 11-.866.5A3.498 3.498 0 007 8.5a3.498 3.498 0 00-3.032 1.75zM5.5 5a1 1 0 11-2 0 1 1 0 012 0zM9.5 6a1 1 0 100-2 1 1 0 000 2z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
        fill: color2
      }
    )
  );
});
var AccessibilityIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M3.526 4.842a.5.5 0 01.632-.316l2.051.684a2.5 2.5 0 001.582 0l2.05-.684a.5.5 0 01.317.948l-2.453.818a.3.3 0 00-.205.285v.243a4.5 4.5 0 00.475 2.012l.972 1.944a.5.5 0 11-.894.448L7 9.118l-1.053 2.106a.5.5 0 11-.894-.447l.972-1.945A4.5 4.5 0 006.5 6.82v-.243a.3.3 0 00-.205-.285l-2.453-.818a.5.5 0 01-.316-.632z",
        fill: color2
      }
    ),
    /* @__PURE__ */ reactExports.createElement("path", { d: "M7 4.5a1 1 0 100-2 1 1 0 000 2z", fill: color2 }),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 14A7 7 0 107 0a7 7 0 000 14zm0-1A6 6 0 107 1a6 6 0 000 12z",
        fill: color2
      }
    )
  );
});
var AccessibilityAltIcon = /* @__PURE__ */ reactExports.forwardRef(({ color: color2 = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 15 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 14A7 7 0 107 0a7 7 0 000 14zM8 3.5a1 1 0 11-2 0 1 1 0 012 0zM3.526 4.842a.5.5 0 01.632-.316l2.051.684a2.5 2.5 0 001.582 0l2.05-.684a.5.5 0 01.317.948l-2.453.818a.3.3 0 00-.205.285v.243a4.5 4.5 0 00.475 2.012l.972 1.944a.5.5 0 11-.894.448L7 9.118l-1.053 2.106a.5.5 0 11-.894-.447l.972-1.945A4.5 4.5 0 006.5 6.82v-.243a.3.3 0 00-.205-.285l-2.453-.818a.5.5 0 01-.316-.632z",
        fill: color2
      }
    )
  );
});
const StorybookIcons = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AccessibilityAltIcon,
  AccessibilityIcon,
  AddIcon,
  AdminIcon,
  AlertAltIcon,
  AlertIcon,
  AlignLeftIcon,
  AlignRightIcon,
  AppleIcon,
  ArrowBottomLeftIcon,
  ArrowBottomRightIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowSolidDownIcon,
  ArrowSolidLeftIcon,
  ArrowSolidRightIcon,
  ArrowSolidUpIcon,
  ArrowTopLeftIcon,
  ArrowTopRightIcon,
  ArrowUpIcon,
  AzureDevOpsIcon,
  BackIcon,
  BasketIcon,
  BatchAcceptIcon,
  BatchDenyIcon,
  BeakerIcon,
  BellIcon,
  BitbucketIcon,
  BoldIcon,
  BookIcon,
  BookmarkHollowIcon,
  BookmarkIcon,
  BottomBarIcon,
  BottomBarToggleIcon,
  BoxIcon,
  BranchIcon,
  BrowserIcon,
  ButtonIcon,
  CPUIcon,
  CalendarIcon,
  CameraIcon,
  CategoryIcon,
  CertificateIcon,
  ChangedIcon,
  ChatIcon,
  CheckIcon,
  ChevronDownIcon: ChevronDownIcon$1,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronSmallDownIcon,
  ChevronSmallLeftIcon,
  ChevronSmallRightIcon,
  ChevronSmallUpIcon,
  ChevronUpIcon: ChevronUpIcon$1,
  ChromaticIcon,
  ChromeIcon,
  CircleHollowIcon,
  CircleIcon,
  ClearIcon,
  CloseAltIcon,
  CloseIcon,
  CloudHollowIcon,
  CloudIcon,
  CogIcon,
  CollapseIcon: CollapseIcon$1,
  CommandIcon,
  CommentAddIcon,
  CommentIcon,
  CommentsIcon,
  CommitIcon,
  CompassIcon,
  ComponentDrivenIcon,
  ComponentIcon,
  ContrastIcon,
  ControlsIcon,
  CopyIcon,
  CreditIcon,
  CrossIcon,
  DashboardIcon,
  DatabaseIcon,
  DeleteIcon,
  DiamondIcon,
  DirectionIcon,
  DiscordIcon,
  DocChartIcon,
  DocListIcon,
  DocumentIcon,
  DownloadIcon,
  DragIcon,
  EditIcon,
  EllipsisIcon,
  EmailIcon,
  ExpandAltIcon,
  ExpandIcon,
  EyeCloseIcon,
  EyeIcon,
  FaceHappyIcon,
  FaceNeutralIcon,
  FaceSadIcon,
  FacebookIcon,
  FailedIcon,
  FastForwardIcon,
  FigmaIcon,
  FilterIcon,
  FlagIcon,
  FolderIcon,
  FormIcon,
  GDriveIcon,
  GithubIcon,
  GitlabIcon,
  GlobeIcon,
  GoogleIcon,
  GraphBarIcon,
  GraphLineIcon,
  GraphqlIcon,
  GridAltIcon,
  GridIcon,
  GrowIcon,
  HeartHollowIcon,
  HeartIcon,
  HomeIcon,
  HourglassIcon,
  InfoIcon,
  ItalicIcon,
  JumpToIcon,
  KeyIcon,
  LightningIcon,
  LightningOffIcon,
  LinkBrokenIcon,
  LinkIcon,
  LinkedinIcon,
  LinuxIcon,
  ListOrderedIcon,
  ListUnorderedIcon,
  LocationIcon,
  LockIcon,
  MarkdownIcon,
  MarkupIcon,
  MediumIcon,
  MemoryIcon,
  MenuIcon,
  MergeIcon,
  MirrorIcon,
  MobileIcon,
  MoonIcon,
  NutIcon,
  OutboxIcon,
  OutlineIcon,
  PaintBrushIcon,
  PaperClipIcon,
  ParagraphIcon,
  PassedIcon,
  PhoneIcon,
  PhotoDragIcon,
  PhotoIcon,
  PinAltIcon,
  PinIcon,
  PlayBackIcon,
  PlayIcon,
  PlayNextIcon,
  PlusIcon,
  PointerDefaultIcon,
  PointerHandIcon,
  PowerIcon,
  PrintIcon,
  ProceedIcon,
  ProfileIcon,
  PullRequestIcon,
  QuestionIcon,
  RSSIcon,
  RedirectIcon,
  ReduxIcon,
  RefreshIcon,
  ReplyIcon,
  RepoIcon,
  RequestChangeIcon,
  RewindIcon,
  RulerIcon,
  SearchIcon,
  ShareAltIcon,
  ShareIcon,
  ShieldIcon,
  SideBySideIcon,
  SidebarAltIcon,
  SidebarAltToggleIcon,
  SidebarIcon,
  SidebarToggleIcon,
  SpeakerIcon,
  StackedIcon,
  StarHollowIcon,
  StarIcon,
  StickerIcon,
  StopAltIcon,
  StopIcon,
  StorybookIcon: StorybookIcon$1,
  StructureIcon,
  SubtractIcon,
  SunIcon,
  SupportIcon,
  SwitchAltIcon,
  SyncIcon,
  TabletIcon,
  ThumbsUpIcon,
  TimeIcon,
  TimerIcon,
  TransferIcon,
  TrashIcon,
  TwitterIcon,
  TypeIcon,
  UbuntuIcon,
  UndoIcon,
  UnfoldIcon,
  UnlockIcon,
  UnpinIcon,
  UploadIcon,
  UserAddIcon,
  UserAltIcon,
  UserIcon,
  UsersIcon,
  VSCodeIcon,
  VerifiedIcon,
  VideoIcon,
  WandIcon,
  WatchIcon,
  WindowsIcon,
  WrenchIcon,
  XIcon,
  YoutubeIcon,
  ZoomIcon,
  ZoomOutIcon,
  ZoomResetIcon,
  iconList
}, Symbol.toStringTag, { value: "Module" }));
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return function handleEvent(event) {
    originalEventHandler == null ? void 0 : originalEventHandler(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented) {
      return ourEventHandler == null ? void 0 : ourEventHandler(event);
    }
  };
}
function setRef(ref, value2) {
  if (typeof ref === "function") {
    ref(value2);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value2;
  }
}
function composeRefs(...refs) {
  return (node) => refs.forEach((ref) => setRef(ref, node));
}
function useComposedRefs(...refs) {
  return reactExports.useCallback(composeRefs(...refs), refs);
}
function createContext2(rootComponentName, defaultContext) {
  const Context = reactExports.createContext(defaultContext);
  function Provider(props) {
    const { children, ...context } = props;
    const value2 = reactExports.useMemo(() => context, Object.values(context));
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Context.Provider, { value: value2, children });
  }
  function useContext2(consumerName) {
    const context = reactExports.useContext(Context);
    if (context) return context;
    if (defaultContext !== void 0) return defaultContext;
    throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
  }
  Provider.displayName = rootComponentName + "Provider";
  return [Provider, useContext2];
}
function createContextScope(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext3(rootComponentName, defaultContext) {
    const BaseContext = reactExports.createContext(defaultContext);
    const index3 = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    function Provider(props) {
      const { scope, children, ...context } = props;
      const Context = (scope == null ? void 0 : scope[scopeName][index3]) || BaseContext;
      const value2 = reactExports.useMemo(() => context, Object.values(context));
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Context.Provider, { value: value2, children });
    }
    function useContext2(consumerName, scope) {
      const Context = (scope == null ? void 0 : scope[scopeName][index3]) || BaseContext;
      const context = reactExports.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    Provider.displayName = rootComponentName + "Provider";
    return [Provider, useContext2];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return reactExports.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = (scope == null ? void 0 : scope[scopeName]) || scopeContexts;
      return reactExports.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext3, composeContextScopes(createScope, ...createContextScopeDeps)];
}
function composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return reactExports.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}
var useLayoutEffect2 = Boolean(globalThis == null ? void 0 : globalThis.document) ? reactExports.useLayoutEffect : () => {
};
var useReactId = React$1["useId".toString()] || (() => void 0);
var count$1 = 0;
function useId(deterministicId) {
  const [id, setId] = reactExports.useState(useReactId());
  useLayoutEffect2(() => {
    if (!deterministicId) setId((reactId) => reactId ?? String(count$1++));
  }, [deterministicId]);
  return deterministicId || (id ? `radix-${id}` : "");
}
function useCallbackRef$1(callback) {
  const callbackRef = reactExports.useRef(callback);
  reactExports.useEffect(() => {
    callbackRef.current = callback;
  });
  return reactExports.useMemo(() => (...args) => {
    var _a;
    return (_a = callbackRef.current) == null ? void 0 : _a.call(callbackRef, ...args);
  }, []);
}
function useControllableState({
  prop,
  defaultProp,
  onChange = () => {
  }
}) {
  const [uncontrolledProp, setUncontrolledProp] = useUncontrolledState({ defaultProp, onChange });
  const isControlled = prop !== void 0;
  const value2 = isControlled ? prop : uncontrolledProp;
  const handleChange = useCallbackRef$1(onChange);
  const setValue = reactExports.useCallback(
    (nextValue) => {
      if (isControlled) {
        const setter = nextValue;
        const value22 = typeof nextValue === "function" ? setter(prop) : nextValue;
        if (value22 !== prop) handleChange(value22);
      } else {
        setUncontrolledProp(nextValue);
      }
    },
    [isControlled, prop, setUncontrolledProp, handleChange]
  );
  return [value2, setValue];
}
function useUncontrolledState({
  defaultProp,
  onChange
}) {
  const uncontrolledState = reactExports.useState(defaultProp);
  const [value2] = uncontrolledState;
  const prevValueRef = reactExports.useRef(value2);
  const handleChange = useCallbackRef$1(onChange);
  reactExports.useEffect(() => {
    if (prevValueRef.current !== value2) {
      handleChange(value2);
      prevValueRef.current = value2;
    }
  }, [value2, prevValueRef, handleChange]);
  return uncontrolledState;
}
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Node2 = reactExports.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp2 = asChild ? Slot : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp2, { ...primitiveProps, ref: forwardedRef });
  });
  Node2.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node2 };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
  if (target) reactDomExports.flushSync(() => target.dispatchEvent(event));
}
function useEscapeKeydown(onEscapeKeyDownProp, ownerDocument = globalThis == null ? void 0 : globalThis.document) {
  const onEscapeKeyDown = useCallbackRef$1(onEscapeKeyDownProp);
  reactExports.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onEscapeKeyDown(event);
      }
    };
    ownerDocument.addEventListener("keydown", handleKeyDown, { capture: true });
    return () => ownerDocument.removeEventListener("keydown", handleKeyDown, { capture: true });
  }, [onEscapeKeyDown, ownerDocument]);
}
var DISMISSABLE_LAYER_NAME = "DismissableLayer";
var CONTEXT_UPDATE = "dismissableLayer.update";
var POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var originalBodyPointerEvents;
var DismissableLayerContext = reactExports.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
var DismissableLayer = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      disableOutsidePointerEvents = false,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      onDismiss,
      ...layerProps
    } = props;
    const context = reactExports.useContext(DismissableLayerContext);
    const [node, setNode] = reactExports.useState(null);
    const ownerDocument = (node == null ? void 0 : node.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document);
    const [, force] = reactExports.useState({});
    const composedRefs = useComposedRefs(forwardedRef, (node2) => setNode(node2));
    const layers = Array.from(context.layers);
    const [highestLayerWithOutsidePointerEventsDisabled] = [...context.layersWithOutsidePointerEventsDisabled].slice(-1);
    const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
    const index3 = node ? layers.indexOf(node) : -1;
    const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
    const isPointerEventsEnabled = index3 >= highestLayerWithOutsidePointerEventsDisabledIndex;
    const pointerDownOutside = usePointerDownOutside((event) => {
      const target = event.target;
      const isPointerDownOnBranch = [...context.branches].some((branch) => branch.contains(target));
      if (!isPointerEventsEnabled || isPointerDownOnBranch) return;
      onPointerDownOutside == null ? void 0 : onPointerDownOutside(event);
      onInteractOutside == null ? void 0 : onInteractOutside(event);
      if (!event.defaultPrevented) onDismiss == null ? void 0 : onDismiss();
    }, ownerDocument);
    const focusOutside = useFocusOutside((event) => {
      const target = event.target;
      const isFocusInBranch = [...context.branches].some((branch) => branch.contains(target));
      if (isFocusInBranch) return;
      onFocusOutside == null ? void 0 : onFocusOutside(event);
      onInteractOutside == null ? void 0 : onInteractOutside(event);
      if (!event.defaultPrevented) onDismiss == null ? void 0 : onDismiss();
    }, ownerDocument);
    useEscapeKeydown((event) => {
      const isHighestLayer = index3 === context.layers.size - 1;
      if (!isHighestLayer) return;
      onEscapeKeyDown == null ? void 0 : onEscapeKeyDown(event);
      if (!event.defaultPrevented && onDismiss) {
        event.preventDefault();
        onDismiss();
      }
    }, ownerDocument);
    reactExports.useEffect(() => {
      if (!node) return;
      if (disableOutsidePointerEvents) {
        if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
          originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
          ownerDocument.body.style.pointerEvents = "none";
        }
        context.layersWithOutsidePointerEventsDisabled.add(node);
      }
      context.layers.add(node);
      dispatchUpdate();
      return () => {
        if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1) {
          ownerDocument.body.style.pointerEvents = originalBodyPointerEvents;
        }
      };
    }, [node, ownerDocument, disableOutsidePointerEvents, context]);
    reactExports.useEffect(() => {
      return () => {
        if (!node) return;
        context.layers.delete(node);
        context.layersWithOutsidePointerEventsDisabled.delete(node);
        dispatchUpdate();
      };
    }, [node, context]);
    reactExports.useEffect(() => {
      const handleUpdate = () => force({});
      document.addEventListener(CONTEXT_UPDATE, handleUpdate);
      return () => document.removeEventListener(CONTEXT_UPDATE, handleUpdate);
    }, []);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.div,
      {
        ...layerProps,
        ref: composedRefs,
        style: {
          pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
          ...props.style
        },
        onFocusCapture: composeEventHandlers(props.onFocusCapture, focusOutside.onFocusCapture),
        onBlurCapture: composeEventHandlers(props.onBlurCapture, focusOutside.onBlurCapture),
        onPointerDownCapture: composeEventHandlers(
          props.onPointerDownCapture,
          pointerDownOutside.onPointerDownCapture
        )
      }
    );
  }
);
DismissableLayer.displayName = DISMISSABLE_LAYER_NAME;
var BRANCH_NAME = "DismissableLayerBranch";
var DismissableLayerBranch = reactExports.forwardRef((props, forwardedRef) => {
  const context = reactExports.useContext(DismissableLayerContext);
  const ref = reactExports.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  reactExports.useEffect(() => {
    const node = ref.current;
    if (node) {
      context.branches.add(node);
      return () => {
        context.branches.delete(node);
      };
    }
  }, [context.branches]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.div, { ...props, ref: composedRefs });
});
DismissableLayerBranch.displayName = BRANCH_NAME;
function usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis == null ? void 0 : globalThis.document) {
  const handlePointerDownOutside = useCallbackRef$1(onPointerDownOutside);
  const isPointerInsideReactTreeRef = reactExports.useRef(false);
  const handleClickRef = reactExports.useRef(() => {
  });
  reactExports.useEffect(() => {
    const handlePointerDown = (event) => {
      if (event.target && !isPointerInsideReactTreeRef.current) {
        let handleAndDispatchPointerDownOutsideEvent2 = function() {
          handleAndDispatchCustomEvent(
            POINTER_DOWN_OUTSIDE,
            handlePointerDownOutside,
            eventDetail,
            { discrete: true }
          );
        };
        const eventDetail = { originalEvent: event };
        if (event.pointerType === "touch") {
          ownerDocument.removeEventListener("click", handleClickRef.current);
          handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
          ownerDocument.addEventListener("click", handleClickRef.current, { once: true });
        } else {
          handleAndDispatchPointerDownOutsideEvent2();
        }
      } else {
        ownerDocument.removeEventListener("click", handleClickRef.current);
      }
      isPointerInsideReactTreeRef.current = false;
    };
    const timerId = window.setTimeout(() => {
      ownerDocument.addEventListener("pointerdown", handlePointerDown);
    }, 0);
    return () => {
      window.clearTimeout(timerId);
      ownerDocument.removeEventListener("pointerdown", handlePointerDown);
      ownerDocument.removeEventListener("click", handleClickRef.current);
    };
  }, [ownerDocument, handlePointerDownOutside]);
  return {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => isPointerInsideReactTreeRef.current = true
  };
}
function useFocusOutside(onFocusOutside, ownerDocument = globalThis == null ? void 0 : globalThis.document) {
  const handleFocusOutside = useCallbackRef$1(onFocusOutside);
  const isFocusInsideReactTreeRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    const handleFocus = (event) => {
      if (event.target && !isFocusInsideReactTreeRef.current) {
        const eventDetail = { originalEvent: event };
        handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
          discrete: false
        });
      }
    };
    ownerDocument.addEventListener("focusin", handleFocus);
    return () => ownerDocument.removeEventListener("focusin", handleFocus);
  }, [ownerDocument, handleFocusOutside]);
  return {
    onFocusCapture: () => isFocusInsideReactTreeRef.current = true,
    onBlurCapture: () => isFocusInsideReactTreeRef.current = false
  };
}
function dispatchUpdate() {
  const event = new CustomEvent(CONTEXT_UPDATE);
  document.dispatchEvent(event);
}
function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
  const target = detail.originalEvent.target;
  const event = new CustomEvent(name, { bubbles: false, cancelable: true, detail });
  if (handler) target.addEventListener(name, handler, { once: true });
  if (discrete) {
    dispatchDiscreteCustomEvent(target, event);
  } else {
    target.dispatchEvent(event);
  }
}
var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var EVENT_OPTIONS = { bubbles: false, cancelable: true };
var FOCUS_SCOPE_NAME = "FocusScope";
var FocusScope = reactExports.forwardRef((props, forwardedRef) => {
  const {
    loop = false,
    trapped = false,
    onMountAutoFocus: onMountAutoFocusProp,
    onUnmountAutoFocus: onUnmountAutoFocusProp,
    ...scopeProps
  } = props;
  const [container, setContainer] = reactExports.useState(null);
  const onMountAutoFocus = useCallbackRef$1(onMountAutoFocusProp);
  const onUnmountAutoFocus = useCallbackRef$1(onUnmountAutoFocusProp);
  const lastFocusedElementRef = reactExports.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, (node) => setContainer(node));
  const focusScope = reactExports.useRef({
    paused: false,
    pause() {
      this.paused = true;
    },
    resume() {
      this.paused = false;
    }
  }).current;
  reactExports.useEffect(() => {
    if (trapped) {
      let handleFocusIn2 = function(event) {
        if (focusScope.paused || !container) return;
        const target = event.target;
        if (container.contains(target)) {
          lastFocusedElementRef.current = target;
        } else {
          focus(lastFocusedElementRef.current, { select: true });
        }
      }, handleFocusOut2 = function(event) {
        if (focusScope.paused || !container) return;
        const relatedTarget = event.relatedTarget;
        if (relatedTarget === null) return;
        if (!container.contains(relatedTarget)) {
          focus(lastFocusedElementRef.current, { select: true });
        }
      }, handleMutations2 = function(mutations) {
        const focusedElement = document.activeElement;
        if (focusedElement !== document.body) return;
        for (const mutation of mutations) {
          if (mutation.removedNodes.length > 0) focus(container);
        }
      };
      document.addEventListener("focusin", handleFocusIn2);
      document.addEventListener("focusout", handleFocusOut2);
      const mutationObserver = new MutationObserver(handleMutations2);
      if (container) mutationObserver.observe(container, { childList: true, subtree: true });
      return () => {
        document.removeEventListener("focusin", handleFocusIn2);
        document.removeEventListener("focusout", handleFocusOut2);
        mutationObserver.disconnect();
      };
    }
  }, [trapped, container, focusScope.paused]);
  reactExports.useEffect(() => {
    if (container) {
      focusScopesStack.add(focusScope);
      const previouslyFocusedElement = document.activeElement;
      const hasFocusedCandidate = container.contains(previouslyFocusedElement);
      if (!hasFocusedCandidate) {
        const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
        container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        container.dispatchEvent(mountEvent);
        if (!mountEvent.defaultPrevented) {
          focusFirst(removeLinks(getTabbableCandidates(container)), { select: true });
          if (document.activeElement === previouslyFocusedElement) {
            focus(container);
          }
        }
      }
      return () => {
        container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        setTimeout(() => {
          const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
          container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          container.dispatchEvent(unmountEvent);
          if (!unmountEvent.defaultPrevented) {
            focus(previouslyFocusedElement ?? document.body, { select: true });
          }
          container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          focusScopesStack.remove(focusScope);
        }, 0);
      };
    }
  }, [container, onMountAutoFocus, onUnmountAutoFocus, focusScope]);
  const handleKeyDown = reactExports.useCallback(
    (event) => {
      if (!loop && !trapped) return;
      if (focusScope.paused) return;
      const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
      const focusedElement = document.activeElement;
      if (isTabKey && focusedElement) {
        const container2 = event.currentTarget;
        const [first, last] = getTabbableEdges(container2);
        const hasTabbableElementsInside = first && last;
        if (!hasTabbableElementsInside) {
          if (focusedElement === container2) event.preventDefault();
        } else {
          if (!event.shiftKey && focusedElement === last) {
            event.preventDefault();
            if (loop) focus(first, { select: true });
          } else if (event.shiftKey && focusedElement === first) {
            event.preventDefault();
            if (loop) focus(last, { select: true });
          }
        }
      }
    },
    [loop, trapped, focusScope.paused]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.div, { tabIndex: -1, ...scopeProps, ref: composedRefs, onKeyDown: handleKeyDown });
});
FocusScope.displayName = FOCUS_SCOPE_NAME;
function focusFirst(candidates, { select = false } = {}) {
  const previouslyFocusedElement = document.activeElement;
  for (const candidate of candidates) {
    focus(candidate, { select });
    if (document.activeElement !== previouslyFocusedElement) return;
  }
}
function getTabbableEdges(container) {
  const candidates = getTabbableCandidates(container);
  const first = findVisible(candidates, container);
  const last = findVisible(candidates.reverse(), container);
  return [first, last];
}
function getTabbableCandidates(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode()) nodes.push(walker.currentNode);
  return nodes;
}
function findVisible(elements, container) {
  for (const element of elements) {
    if (!isHidden(element, { upTo: container })) return element;
  }
}
function isHidden(node, { upTo }) {
  if (getComputedStyle(node).visibility === "hidden") return true;
  while (node) {
    if (upTo !== void 0 && node === upTo) return false;
    if (getComputedStyle(node).display === "none") return true;
    node = node.parentElement;
  }
  return false;
}
function isSelectableInput(element) {
  return element instanceof HTMLInputElement && "select" in element;
}
function focus(element, { select = false } = {}) {
  if (element && element.focus) {
    const previouslyFocusedElement = document.activeElement;
    element.focus({ preventScroll: true });
    if (element !== previouslyFocusedElement && isSelectableInput(element) && select)
      element.select();
  }
}
var focusScopesStack = createFocusScopesStack();
function createFocusScopesStack() {
  let stack = [];
  return {
    add(focusScope) {
      const activeFocusScope = stack[0];
      if (focusScope !== activeFocusScope) {
        activeFocusScope == null ? void 0 : activeFocusScope.pause();
      }
      stack = arrayRemove(stack, focusScope);
      stack.unshift(focusScope);
    },
    remove(focusScope) {
      var _a;
      stack = arrayRemove(stack, focusScope);
      (_a = stack[0]) == null ? void 0 : _a.resume();
    }
  };
}
function arrayRemove(array2, item) {
  const updatedArray = [...array2];
  const index3 = updatedArray.indexOf(item);
  if (index3 !== -1) {
    updatedArray.splice(index3, 1);
  }
  return updatedArray;
}
function removeLinks(items) {
  return items.filter((item) => item.tagName !== "A");
}
var PORTAL_NAME$1 = "Portal";
var Portal$1 = reactExports.forwardRef((props, forwardedRef) => {
  var _a;
  const { container: containerProp, ...portalProps } = props;
  const [mounted, setMounted] = reactExports.useState(false);
  useLayoutEffect2(() => setMounted(true), []);
  const container = containerProp || mounted && ((_a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : _a.body);
  return container ? ReactDOM.createPortal(/* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.div, { ...portalProps, ref: forwardedRef }), container) : null;
});
Portal$1.displayName = PORTAL_NAME$1;
function useStateMachine(initialState, machine) {
  return reactExports.useReducer((state, event) => {
    const nextState = machine[state][event];
    return nextState ?? state;
  }, initialState);
}
var Presence = (props) => {
  const { present, children } = props;
  const presence = usePresence(present);
  const child = typeof children === "function" ? children({ present: presence.isPresent }) : reactExports.Children.only(children);
  const ref = useComposedRefs(presence.ref, getElementRef(child));
  const forceMount = typeof children === "function";
  return forceMount || presence.isPresent ? reactExports.cloneElement(child, { ref }) : null;
};
Presence.displayName = "Presence";
function usePresence(present) {
  const [node, setNode] = reactExports.useState();
  const stylesRef = reactExports.useRef({});
  const prevPresentRef = reactExports.useRef(present);
  const prevAnimationNameRef = reactExports.useRef("none");
  const initialState = present ? "mounted" : "unmounted";
  const [state, send] = useStateMachine(initialState, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  reactExports.useEffect(() => {
    const currentAnimationName = getAnimationName(stylesRef.current);
    prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
  }, [state]);
  useLayoutEffect2(() => {
    const styles2 = stylesRef.current;
    const wasPresent = prevPresentRef.current;
    const hasPresentChanged = wasPresent !== present;
    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.current;
      const currentAnimationName = getAnimationName(styles2);
      if (present) {
        send("MOUNT");
      } else if (currentAnimationName === "none" || (styles2 == null ? void 0 : styles2.display) === "none") {
        send("UNMOUNT");
      } else {
        const isAnimating = prevAnimationName !== currentAnimationName;
        if (wasPresent && isAnimating) {
          send("ANIMATION_OUT");
        } else {
          send("UNMOUNT");
        }
      }
      prevPresentRef.current = present;
    }
  }, [present, send]);
  useLayoutEffect2(() => {
    if (node) {
      const handleAnimationEnd = (event) => {
        const currentAnimationName = getAnimationName(stylesRef.current);
        const isCurrentAnimation = currentAnimationName.includes(event.animationName);
        if (event.target === node && isCurrentAnimation) {
          reactDomExports.flushSync(() => send("ANIMATION_END"));
        }
      };
      const handleAnimationStart = (event) => {
        if (event.target === node) {
          prevAnimationNameRef.current = getAnimationName(stylesRef.current);
        }
      };
      node.addEventListener("animationstart", handleAnimationStart);
      node.addEventListener("animationcancel", handleAnimationEnd);
      node.addEventListener("animationend", handleAnimationEnd);
      return () => {
        node.removeEventListener("animationstart", handleAnimationStart);
        node.removeEventListener("animationcancel", handleAnimationEnd);
        node.removeEventListener("animationend", handleAnimationEnd);
      };
    } else {
      send("ANIMATION_END");
    }
  }, [node, send]);
  return {
    isPresent: ["mounted", "unmountSuspended"].includes(state),
    ref: reactExports.useCallback((node2) => {
      if (node2) stylesRef.current = getComputedStyle(node2);
      setNode(node2);
    }, [])
  };
}
function getAnimationName(styles2) {
  return (styles2 == null ? void 0 : styles2.animationName) || "none";
}
function getElementRef(element) {
  var _a, _b;
  let getter = (_a = Object.getOwnPropertyDescriptor(element.props, "ref")) == null ? void 0 : _a.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = (_b = Object.getOwnPropertyDescriptor(element, "ref")) == null ? void 0 : _b.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}
var count = 0;
function useFocusGuards() {
  reactExports.useEffect(() => {
    const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement("afterbegin", edgeGuards[0] ?? createFocusGuard());
    document.body.insertAdjacentElement("beforeend", edgeGuards[1] ?? createFocusGuard());
    count++;
    return () => {
      if (count === 1) {
        document.querySelectorAll("[data-radix-focus-guard]").forEach((node) => node.remove());
      }
      count--;
    };
  }, []);
}
function createFocusGuard() {
  const element = document.createElement("span");
  element.setAttribute("data-radix-focus-guard", "");
  element.tabIndex = 0;
  element.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none";
  return element;
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
      s2 = arguments[i2];
      for (var p2 in s2) if (Object.prototype.hasOwnProperty.call(s2, p2)) t[p2] = s2[p2];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s2, e2) {
  var t = {};
  for (var p2 in s2) if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
    t[p2] = s2[p2];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
      if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
        t[p2[i2]] = s2[p2[i2]];
    }
  return t;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i2 = 0, l2 = from.length, ar; i2 < l2; i2++) {
    if (ar || !(i2 in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i2);
      ar[i2] = from[i2];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}
typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e2 = new Error(message);
  return e2.name = "SuppressedError", e2.error = error, e2.suppressed = suppressed, e2;
};
var zeroRightClassName = "right-scroll-bar-position";
var fullWidthClassName = "width-before-scroll-bar";
var noScrollbarsClassName = "with-scroll-bars-hidden";
var removedBarSizeVariable = "--removed-body-scroll-bar-size";
function assignRef(ref, value2) {
  if (typeof ref === "function") {
    ref(value2);
  } else if (ref) {
    ref.current = value2;
  }
  return ref;
}
function useCallbackRef(initialValue, callback) {
  var ref = reactExports.useState(function() {
    return {
      // value
      value: initialValue,
      // last callback
      callback,
      // "memoized" public interface
      facade: {
        get current() {
          return ref.value;
        },
        set current(value2) {
          var last = ref.value;
          if (last !== value2) {
            ref.value = value2;
            ref.callback(value2, last);
          }
        }
      }
    };
  })[0];
  ref.callback = callback;
  return ref.facade;
}
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? reactExports.useLayoutEffect : reactExports.useEffect;
var currentValues = /* @__PURE__ */ new WeakMap();
function useMergeRefs(refs, defaultValue) {
  var callbackRef = useCallbackRef(null, function(newValue) {
    return refs.forEach(function(ref) {
      return assignRef(ref, newValue);
    });
  });
  useIsomorphicLayoutEffect(function() {
    var oldValue = currentValues.get(callbackRef);
    if (oldValue) {
      var prevRefs_1 = new Set(oldValue);
      var nextRefs_1 = new Set(refs);
      var current_1 = callbackRef.current;
      prevRefs_1.forEach(function(ref) {
        if (!nextRefs_1.has(ref)) {
          assignRef(ref, null);
        }
      });
      nextRefs_1.forEach(function(ref) {
        if (!prevRefs_1.has(ref)) {
          assignRef(ref, current_1);
        }
      });
    }
    currentValues.set(callbackRef, refs);
  }, [refs]);
  return callbackRef;
}
function ItoI(a2) {
  return a2;
}
function innerCreateMedium(defaults, middleware) {
  if (middleware === void 0) {
    middleware = ItoI;
  }
  var buffer = [];
  var assigned = false;
  var medium = {
    read: function() {
      if (assigned) {
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      }
      if (buffer.length) {
        return buffer[buffer.length - 1];
      }
      return defaults;
    },
    useMedium: function(data) {
      var item = middleware(data, assigned);
      buffer.push(item);
      return function() {
        buffer = buffer.filter(function(x2) {
          return x2 !== item;
        });
      };
    },
    assignSyncMedium: function(cb) {
      assigned = true;
      while (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
      }
      buffer = {
        push: function(x2) {
          return cb(x2);
        },
        filter: function() {
          return buffer;
        }
      };
    },
    assignMedium: function(cb) {
      assigned = true;
      var pendingQueue = [];
      if (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
        pendingQueue = buffer;
      }
      var executeQueue = function() {
        var cbs2 = pendingQueue;
        pendingQueue = [];
        cbs2.forEach(cb);
      };
      var cycle = function() {
        return Promise.resolve().then(executeQueue);
      };
      cycle();
      buffer = {
        push: function(x2) {
          pendingQueue.push(x2);
          cycle();
        },
        filter: function(filter) {
          pendingQueue = pendingQueue.filter(filter);
          return buffer;
        }
      };
    }
  };
  return medium;
}
function createSidecarMedium(options) {
  if (options === void 0) {
    options = {};
  }
  var medium = innerCreateMedium(null);
  medium.options = __assign({ async: true, ssr: false }, options);
  return medium;
}
var SideCar$1 = function(_a) {
  var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
  if (!sideCar) {
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  }
  var Target = sideCar.read();
  if (!Target) {
    throw new Error("Sidecar medium not found");
  }
  return reactExports.createElement(Target, __assign({}, rest));
};
SideCar$1.isSideCarExport = true;
function exportSidecar(medium, exported) {
  medium.useMedium(exported);
  return SideCar$1;
}
var effectCar = createSidecarMedium();
var nothing = function() {
  return;
};
var RemoveScroll = reactExports.forwardRef(function(props, parentRef) {
  var ref = reactExports.useRef(null);
  var _a = reactExports.useState({
    onScrollCapture: nothing,
    onWheelCapture: nothing,
    onTouchMoveCapture: nothing
  }), callbacks = _a[0], setCallbacks = _a[1];
  var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container3 = _b === void 0 ? "div" : _b, gapMode = props.gapMode, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]);
  var SideCar2 = sideCar;
  var containerRef = useMergeRefs([ref, parentRef]);
  var containerProps = __assign(__assign({}, rest), callbacks);
  return reactExports.createElement(
    reactExports.Fragment,
    null,
    enabled && reactExports.createElement(SideCar2, { sideCar: effectCar, removeScrollBar, shards, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref, gapMode }),
    forwardProps ? reactExports.cloneElement(reactExports.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : reactExports.createElement(Container3, __assign({}, containerProps, { className, ref: containerRef }), children)
  );
});
RemoveScroll.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
RemoveScroll.classNames = {
  fullWidth: fullWidthClassName,
  zeroRight: zeroRightClassName
};
var getNonce = function() {
  if (typeof __webpack_nonce__ !== "undefined") {
    return __webpack_nonce__;
  }
  return void 0;
};
function makeStyleTag() {
  if (!document)
    return null;
  var tag = document.createElement("style");
  tag.type = "text/css";
  var nonce = getNonce();
  if (nonce) {
    tag.setAttribute("nonce", nonce);
  }
  return tag;
}
function injectStyles(tag, css) {
  if (tag.styleSheet) {
    tag.styleSheet.cssText = css;
  } else {
    tag.appendChild(document.createTextNode(css));
  }
}
function insertStyleTag(tag) {
  var head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(tag);
}
var stylesheetSingleton = function() {
  var counter = 0;
  var stylesheet = null;
  return {
    add: function(style) {
      if (counter == 0) {
        if (stylesheet = makeStyleTag()) {
          injectStyles(stylesheet, style);
          insertStyleTag(stylesheet);
        }
      }
      counter++;
    },
    remove: function() {
      counter--;
      if (!counter && stylesheet) {
        stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
        stylesheet = null;
      }
    }
  };
};
var styleHookSingleton = function() {
  var sheet = stylesheetSingleton();
  return function(styles2, isDynamic) {
    reactExports.useEffect(function() {
      sheet.add(styles2);
      return function() {
        sheet.remove();
      };
    }, [styles2 && isDynamic]);
  };
};
var styleSingleton = function() {
  var useStyle = styleHookSingleton();
  var Sheet = function(_a) {
    var styles2 = _a.styles, dynamic = _a.dynamic;
    useStyle(styles2, dynamic);
    return null;
  };
  return Sheet;
};
var zeroGap = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
};
var parse$1 = function(x2) {
  return parseInt(x2 || "", 10) || 0;
};
var getOffset = function(gapMode) {
  var cs = window.getComputedStyle(document.body);
  var left2 = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
  var top2 = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
  var right2 = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
  return [parse$1(left2), parse$1(top2), parse$1(right2)];
};
var getGapWidth = function(gapMode) {
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  if (typeof window === "undefined") {
    return zeroGap;
  }
  var offsets = getOffset(gapMode);
  var documentWidth = document.documentElement.clientWidth;
  var windowWidth = window.innerWidth;
  return {
    left: offsets[0],
    top: offsets[1],
    right: offsets[2],
    gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
  };
};
var Style = styleSingleton();
var lockAttribute = "data-scroll-locked";
var getStyles = function(_a, allowRelative, gapMode, important) {
  var left2 = _a.left, top2 = _a.top, right2 = _a.right, gap = _a.gap;
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
    allowRelative && "position: relative ".concat(important, ";"),
    gapMode === "margin" && "\n    padding-left: ".concat(left2, "px;\n    padding-top: ").concat(top2, "px;\n    padding-right: ").concat(right2, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
    gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
  ].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function() {
  var counter = parseInt(document.body.getAttribute(lockAttribute) || "0", 10);
  return isFinite(counter) ? counter : 0;
};
var useLockAttribute = function() {
  reactExports.useEffect(function() {
    document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
    return function() {
      var newCounter = getCurrentUseCounter() - 1;
      if (newCounter <= 0) {
        document.body.removeAttribute(lockAttribute);
      } else {
        document.body.setAttribute(lockAttribute, newCounter.toString());
      }
    };
  }, []);
};
var RemoveScrollBar = function(_a) {
  var noRelative = _a.noRelative, noImportant = _a.noImportant, _b = _a.gapMode, gapMode = _b === void 0 ? "margin" : _b;
  useLockAttribute();
  var gap = reactExports.useMemo(function() {
    return getGapWidth(gapMode);
  }, [gapMode]);
  return reactExports.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
};
var passiveSupported = false;
if (typeof window !== "undefined") {
  try {
    var options = Object.defineProperty({}, "passive", {
      get: function() {
        passiveSupported = true;
        return true;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (err) {
    passiveSupported = false;
  }
}
var nonPassive = passiveSupported ? { passive: false } : false;
var alwaysContainsScroll = function(node) {
  return node.tagName === "TEXTAREA";
};
var elementCanBeScrolled = function(node, overflow) {
  var styles2 = window.getComputedStyle(node);
  return (
    // not-not-scrollable
    styles2[overflow] !== "hidden" && // contains scroll inside self
    !(styles2.overflowY === styles2.overflowX && !alwaysContainsScroll(node) && styles2[overflow] === "visible")
  );
};
var elementCouldBeVScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowY");
};
var elementCouldBeHScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowX");
};
var locationCouldBeScrolled = function(axis, node) {
  var ownerDocument = node.ownerDocument;
  var current = node;
  do {
    if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
      current = current.host;
    }
    var isScrollable = elementCouldBeScrolled(axis, current);
    if (isScrollable) {
      var _a = getScrollVariables(axis, current), s2 = _a[1], d2 = _a[2];
      if (s2 > d2) {
        return true;
      }
    }
    current = current.parentNode;
  } while (current && current !== ownerDocument.body);
  return false;
};
var getVScrollVariables = function(_a) {
  var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
  return [
    scrollTop,
    scrollHeight,
    clientHeight
  ];
};
var getHScrollVariables = function(_a) {
  var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
  return [
    scrollLeft,
    scrollWidth,
    clientWidth
  ];
};
var elementCouldBeScrolled = function(axis, node) {
  return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
  return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
  return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
  var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
  var delta = directionFactor * sourceDelta;
  var target = event.target;
  var targetInLock = endTarget.contains(target);
  var shouldCancelScroll = false;
  var isDeltaPositive = delta > 0;
  var availableScroll = 0;
  var availableScrollTop = 0;
  do {
    var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
    var elementScroll = scroll_1 - capacity - directionFactor * position;
    if (position || elementScroll) {
      if (elementCouldBeScrolled(axis, target)) {
        availableScroll += elementScroll;
        availableScrollTop += position;
      }
    }
    if (target instanceof ShadowRoot) {
      target = target.host;
    } else {
      target = target.parentNode;
    }
  } while (
    // portaled content
    !targetInLock && target !== document.body || // self content
    targetInLock && (endTarget.contains(target) || endTarget === target)
  );
  if (isDeltaPositive && (Math.abs(availableScroll) < 1 || !noOverscroll)) {
    shouldCancelScroll = true;
  } else if (!isDeltaPositive && (Math.abs(availableScrollTop) < 1 || !noOverscroll)) {
    shouldCancelScroll = true;
  }
  return shouldCancelScroll;
};
var getTouchXY = function(event) {
  return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
  return [event.deltaX, event.deltaY];
};
var extractRef = function(ref) {
  return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x2, y2) {
  return x2[0] === y2[0] && x2[1] === y2[1];
};
var generateStyle = function(id) {
  return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
  var shouldPreventQueue = reactExports.useRef([]);
  var touchStartRef = reactExports.useRef([0, 0]);
  var activeAxis = reactExports.useRef();
  var id = reactExports.useState(idCounter++)[0];
  var Style2 = reactExports.useState(styleSingleton)[0];
  var lastProps = reactExports.useRef(props);
  reactExports.useEffect(function() {
    lastProps.current = props;
  }, [props]);
  reactExports.useEffect(function() {
    if (props.inert) {
      document.body.classList.add("block-interactivity-".concat(id));
      var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
      allow_1.forEach(function(el) {
        return el.classList.add("allow-interactivity-".concat(id));
      });
      return function() {
        document.body.classList.remove("block-interactivity-".concat(id));
        allow_1.forEach(function(el) {
          return el.classList.remove("allow-interactivity-".concat(id));
        });
      };
    }
    return;
  }, [props.inert, props.lockRef.current, props.shards]);
  var shouldCancelEvent = reactExports.useCallback(function(event, parent) {
    if ("touches" in event && event.touches.length === 2) {
      return !lastProps.current.allowPinchZoom;
    }
    var touch = getTouchXY(event);
    var touchStart = touchStartRef.current;
    var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
    var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
    var currentAxis;
    var target = event.target;
    var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
    if ("touches" in event && moveDirection === "h" && target.type === "range") {
      return false;
    }
    var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    if (!canBeScrolledInMainDirection) {
      return true;
    }
    if (canBeScrolledInMainDirection) {
      currentAxis = moveDirection;
    } else {
      currentAxis = moveDirection === "v" ? "h" : "v";
      canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    }
    if (!canBeScrolledInMainDirection) {
      return false;
    }
    if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
      activeAxis.current = currentAxis;
    }
    if (!currentAxis) {
      return true;
    }
    var cancelingAxis = activeAxis.current || currentAxis;
    return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
  }, []);
  var shouldPrevent = reactExports.useCallback(function(_event) {
    var event = _event;
    if (!lockStack.length || lockStack[lockStack.length - 1] !== Style2) {
      return;
    }
    var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
    var sourceEvent = shouldPreventQueue.current.filter(function(e2) {
      return e2.name === event.type && (e2.target === event.target || event.target === e2.shadowParent) && deltaCompare(e2.delta, delta);
    })[0];
    if (sourceEvent && sourceEvent.should) {
      if (event.cancelable) {
        event.preventDefault();
      }
      return;
    }
    if (!sourceEvent) {
      var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
        return node.contains(event.target);
      });
      var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
      if (shouldStop) {
        if (event.cancelable) {
          event.preventDefault();
        }
      }
    }
  }, []);
  var shouldCancel = reactExports.useCallback(function(name, delta, target, should) {
    var event = { name, delta, target, should, shadowParent: getOutermostShadowParent(target) };
    shouldPreventQueue.current.push(event);
    setTimeout(function() {
      shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e2) {
        return e2 !== event;
      });
    }, 1);
  }, []);
  var scrollTouchStart = reactExports.useCallback(function(event) {
    touchStartRef.current = getTouchXY(event);
    activeAxis.current = void 0;
  }, []);
  var scrollWheel = reactExports.useCallback(function(event) {
    shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  var scrollTouchMove = reactExports.useCallback(function(event) {
    shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  reactExports.useEffect(function() {
    lockStack.push(Style2);
    props.setCallbacks({
      onScrollCapture: scrollWheel,
      onWheelCapture: scrollWheel,
      onTouchMoveCapture: scrollTouchMove
    });
    document.addEventListener("wheel", shouldPrevent, nonPassive);
    document.addEventListener("touchmove", shouldPrevent, nonPassive);
    document.addEventListener("touchstart", scrollTouchStart, nonPassive);
    return function() {
      lockStack = lockStack.filter(function(inst) {
        return inst !== Style2;
      });
      document.removeEventListener("wheel", shouldPrevent, nonPassive);
      document.removeEventListener("touchmove", shouldPrevent, nonPassive);
      document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
    };
  }, []);
  var removeScrollBar = props.removeScrollBar, inert = props.inert;
  return reactExports.createElement(
    reactExports.Fragment,
    null,
    inert ? reactExports.createElement(Style2, { styles: generateStyle(id) }) : null,
    removeScrollBar ? reactExports.createElement(RemoveScrollBar, { gapMode: props.gapMode }) : null
  );
}
function getOutermostShadowParent(node) {
  var shadowParent = null;
  while (node !== null) {
    if (node instanceof ShadowRoot) {
      shadowParent = node.host;
      node = node.host;
    }
    node = node.parentNode;
  }
  return shadowParent;
}
const SideCar = exportSidecar(effectCar, RemoveScrollSideCar);
var ReactRemoveScroll = reactExports.forwardRef(function(props, ref) {
  return reactExports.createElement(RemoveScroll, __assign({}, props, { ref, sideCar: SideCar }));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var getDefaultParent = function(originalTarget) {
  if (typeof document === "undefined") {
    return null;
  }
  var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
  return sampleTarget.ownerDocument.body;
};
var counterMap = /* @__PURE__ */ new WeakMap();
var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function(node) {
  return node && (node.host || unwrapHost(node.parentNode));
};
var correctTargets = function(parent, targets) {
  return targets.map(function(target) {
    if (parent.contains(target)) {
      return target;
    }
    var correctedTarget = unwrapHost(target);
    if (correctedTarget && parent.contains(correctedTarget)) {
      return correctedTarget;
    }
    console.error("aria-hidden", target, "in not contained inside", parent, ". Doing nothing");
    return null;
  }).filter(function(x2) {
    return Boolean(x2);
  });
};
var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
  var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  if (!markerMap[markerName]) {
    markerMap[markerName] = /* @__PURE__ */ new WeakMap();
  }
  var markerCounter = markerMap[markerName];
  var hiddenNodes = [];
  var elementsToKeep = /* @__PURE__ */ new Set();
  var elementsToStop = new Set(targets);
  var keep = function(el) {
    if (!el || elementsToKeep.has(el)) {
      return;
    }
    elementsToKeep.add(el);
    keep(el.parentNode);
  };
  targets.forEach(keep);
  var deep = function(parent) {
    if (!parent || elementsToStop.has(parent)) {
      return;
    }
    Array.prototype.forEach.call(parent.children, function(node) {
      if (elementsToKeep.has(node)) {
        deep(node);
      } else {
        try {
          var attr = node.getAttribute(controlAttribute);
          var alreadyHidden = attr !== null && attr !== "false";
          var counterValue = (counterMap.get(node) || 0) + 1;
          var markerValue = (markerCounter.get(node) || 0) + 1;
          counterMap.set(node, counterValue);
          markerCounter.set(node, markerValue);
          hiddenNodes.push(node);
          if (counterValue === 1 && alreadyHidden) {
            uncontrolledNodes.set(node, true);
          }
          if (markerValue === 1) {
            node.setAttribute(markerName, "true");
          }
          if (!alreadyHidden) {
            node.setAttribute(controlAttribute, "true");
          }
        } catch (e2) {
          console.error("aria-hidden: cannot operate on ", node, e2);
        }
      }
    });
  };
  deep(parentNode);
  elementsToKeep.clear();
  lockCount++;
  return function() {
    hiddenNodes.forEach(function(node) {
      var counterValue = counterMap.get(node) - 1;
      var markerValue = markerCounter.get(node) - 1;
      counterMap.set(node, counterValue);
      markerCounter.set(node, markerValue);
      if (!counterValue) {
        if (!uncontrolledNodes.has(node)) {
          node.removeAttribute(controlAttribute);
        }
        uncontrolledNodes.delete(node);
      }
      if (!markerValue) {
        node.removeAttribute(markerName);
      }
    });
    lockCount--;
    if (!lockCount) {
      counterMap = /* @__PURE__ */ new WeakMap();
      counterMap = /* @__PURE__ */ new WeakMap();
      uncontrolledNodes = /* @__PURE__ */ new WeakMap();
      markerMap = {};
    }
  };
};
var hideOthers = function(originalTarget, parentNode, markerName) {
  if (markerName === void 0) {
    markerName = "data-aria-hidden";
  }
  var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  var activeParentNode = getDefaultParent(originalTarget);
  if (!activeParentNode) {
    return function() {
      return null;
    };
  }
  targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll("[aria-live]")));
  return applyAttributeToOthers(targets, activeParentNode, markerName, "aria-hidden");
};
var DIALOG_NAME = "Dialog";
var [createDialogContext, createDialogScope] = createContextScope(DIALOG_NAME);
var [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME);
var Dialog = (props) => {
  const {
    __scopeDialog,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    modal = true
  } = props;
  const triggerRef = reactExports.useRef(null);
  const contentRef = reactExports.useRef(null);
  const [open = false, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    DialogProvider,
    {
      scope: __scopeDialog,
      triggerRef,
      contentRef,
      contentId: useId(),
      titleId: useId(),
      descriptionId: useId(),
      open,
      onOpenChange: setOpen,
      onOpenToggle: reactExports.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
      modal,
      children
    }
  );
};
Dialog.displayName = DIALOG_NAME;
var TRIGGER_NAME = "DialogTrigger";
var DialogTrigger = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...triggerProps } = props;
    const context = useDialogContext(TRIGGER_NAME, __scopeDialog);
    const composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.contentId,
        "data-state": getState(context.open),
        ...triggerProps,
        ref: composedTriggerRef,
        onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
      }
    );
  }
);
DialogTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "DialogPortal";
var [PortalProvider, usePortalContext] = createDialogContext(PORTAL_NAME, {
  forceMount: void 0
});
var DialogPortal = (props) => {
  const { __scopeDialog, forceMount, children, container } = props;
  const context = useDialogContext(PORTAL_NAME, __scopeDialog);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PortalProvider, { scope: __scopeDialog, forceMount, children: reactExports.Children.map(children, (child) => /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Portal$1, { asChild: true, container, children: child }) })) });
};
DialogPortal.displayName = PORTAL_NAME;
var OVERLAY_NAME = "DialogOverlay";
var DialogOverlay = reactExports.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext(OVERLAY_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, props.__scopeDialog);
    return context.modal ? /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlayImpl, { ...overlayProps, ref: forwardedRef }) }) : null;
  }
);
DialogOverlay.displayName = OVERLAY_NAME;
var DialogOverlayImpl = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, __scopeDialog);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ jsxRuntimeExports.jsx(ReactRemoveScroll, { as: Slot, allowPinchZoom: true, shards: [context.contentRef], children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Primitive.div,
        {
          "data-state": getState(context.open),
          ...overlayProps,
          ref: forwardedRef,
          style: { pointerEvents: "auto", ...overlayProps.style }
        }
      ) })
    );
  }
);
var CONTENT_NAME = "DialogContent";
var DialogContent = reactExports.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: context.modal ? /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContentModal, { ...contentProps, ref: forwardedRef }) : /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContentNonModal, { ...contentProps, ref: forwardedRef }) });
  }
);
DialogContent.displayName = CONTENT_NAME;
var DialogContentModal = reactExports.forwardRef(
  (props, forwardedRef) => {
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    const contentRef = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, context.contentRef, contentRef);
    reactExports.useEffect(() => {
      const content = contentRef.current;
      if (content) return hideOthers(content);
    }, []);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      DialogContentImpl,
      {
        ...props,
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
          var _a;
          event.preventDefault();
          (_a = context.triggerRef.current) == null ? void 0 : _a.focus();
        }),
        onPointerDownOutside: composeEventHandlers(props.onPointerDownOutside, (event) => {
          const originalEvent = event.detail.originalEvent;
          const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
          const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
          if (isRightClick) event.preventDefault();
        }),
        onFocusOutside: composeEventHandlers(
          props.onFocusOutside,
          (event) => event.preventDefault()
        )
      }
    );
  }
);
var DialogContentNonModal = reactExports.forwardRef(
  (props, forwardedRef) => {
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    const hasInteractedOutsideRef = reactExports.useRef(false);
    const hasPointerDownOutsideRef = reactExports.useRef(false);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      DialogContentImpl,
      {
        ...props,
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event) => {
          var _a, _b;
          (_a = props.onCloseAutoFocus) == null ? void 0 : _a.call(props, event);
          if (!event.defaultPrevented) {
            if (!hasInteractedOutsideRef.current) (_b = context.triggerRef.current) == null ? void 0 : _b.focus();
            event.preventDefault();
          }
          hasInteractedOutsideRef.current = false;
          hasPointerDownOutsideRef.current = false;
        },
        onInteractOutside: (event) => {
          var _a, _b;
          (_a = props.onInteractOutside) == null ? void 0 : _a.call(props, event);
          if (!event.defaultPrevented) {
            hasInteractedOutsideRef.current = true;
            if (event.detail.originalEvent.type === "pointerdown") {
              hasPointerDownOutsideRef.current = true;
            }
          }
          const target = event.target;
          const targetIsTrigger = (_b = context.triggerRef.current) == null ? void 0 : _b.contains(target);
          if (targetIsTrigger) event.preventDefault();
          if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) {
            event.preventDefault();
          }
        }
      }
    );
  }
);
var DialogContentImpl = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME, __scopeDialog);
    const contentRef = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef);
    useFocusGuards();
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FocusScope,
        {
          asChild: true,
          loop: true,
          trapped: trapFocus,
          onMountAutoFocus: onOpenAutoFocus,
          onUnmountAutoFocus: onCloseAutoFocus,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            DismissableLayer,
            {
              role: "dialog",
              id: context.contentId,
              "aria-describedby": context.descriptionId,
              "aria-labelledby": context.titleId,
              "data-state": getState(context.open),
              ...contentProps,
              ref: composedRefs,
              onDismiss: () => context.onOpenChange(false)
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TitleWarning, { titleId: context.titleId }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DescriptionWarning, { contentRef, descriptionId: context.descriptionId })
      ] })
    ] });
  }
);
var TITLE_NAME = "DialogTitle";
var DialogTitle = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...titleProps } = props;
    const context = useDialogContext(TITLE_NAME, __scopeDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.h2, { id: context.titleId, ...titleProps, ref: forwardedRef });
  }
);
DialogTitle.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "DialogDescription";
var DialogDescription = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...descriptionProps } = props;
    const context = useDialogContext(DESCRIPTION_NAME, __scopeDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.p, { id: context.descriptionId, ...descriptionProps, ref: forwardedRef });
  }
);
DialogDescription.displayName = DESCRIPTION_NAME;
var CLOSE_NAME = "DialogClose";
var DialogClose = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...closeProps } = props;
    const context = useDialogContext(CLOSE_NAME, __scopeDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.button,
      {
        type: "button",
        ...closeProps,
        ref: forwardedRef,
        onClick: composeEventHandlers(props.onClick, () => context.onOpenChange(false))
      }
    );
  }
);
DialogClose.displayName = CLOSE_NAME;
function getState(open) {
  return open ? "open" : "closed";
}
var TITLE_WARNING_NAME = "DialogTitleWarning";
var [WarningProvider, useWarningContext] = createContext2(TITLE_WARNING_NAME, {
  contentName: CONTENT_NAME,
  titleName: TITLE_NAME,
  docsSlug: "dialog"
});
var TitleWarning = ({ titleId }) => {
  const titleWarningContext = useWarningContext(TITLE_WARNING_NAME);
  const MESSAGE = `\`${titleWarningContext.contentName}\` requires a \`${titleWarningContext.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${titleWarningContext.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${titleWarningContext.docsSlug}`;
  reactExports.useEffect(() => {
    if (titleId) {
      const hasTitle = document.getElementById(titleId);
      if (!hasTitle) console.error(MESSAGE);
    }
  }, [MESSAGE, titleId]);
  return null;
};
var DESCRIPTION_WARNING_NAME = "DialogDescriptionWarning";
var DescriptionWarning = ({ contentRef, descriptionId }) => {
  const descriptionWarningContext = useWarningContext(DESCRIPTION_WARNING_NAME);
  const MESSAGE = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${descriptionWarningContext.contentName}}.`;
  reactExports.useEffect(() => {
    var _a;
    const describedById = (_a = contentRef.current) == null ? void 0 : _a.getAttribute("aria-describedby");
    if (descriptionId && describedById) {
      const hasDescription = document.getElementById(descriptionId);
      if (!hasDescription) console.warn(MESSAGE);
    }
  }, [MESSAGE, contentRef, descriptionId]);
  return null;
};
var Root = Dialog;
var Trigger = DialogTrigger;
var Portal = DialogPortal;
var Overlay$1 = DialogOverlay;
var Content$2 = DialogContent;
var Title$1 = DialogTitle;
var Description$1 = DialogDescription;
var Close = DialogClose;
const Dialog2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Close,
  Content: Content$2,
  Description: Description$1,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  Overlay: Overlay$1,
  Portal,
  Root,
  Title: Title$1,
  Trigger,
  WarningProvider,
  createDialogScope
}, Symbol.toStringTag, { value: "Module" }));
const { deprecate: deprecate$1, logger: logger$1 } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
const { global: global$2 } = __STORYBOOK_MODULE_GLOBAL__;
var nameSpaceClassNames = ({ ...props }, key) => {
  let classes = [props.class, props.className];
  return delete props.class, props.className = ["sbdocs", `sbdocs-${key}`, ...classes].filter(Boolean).join(" "), props;
};
function _assertThisInitialized(self2) {
  if (self2 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return self2;
}
function _setPrototypeOf(o2, p2) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o22, p22) {
    return o22.__proto__ = p22, o22;
  }, _setPrototypeOf(o2, p2);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype), subClass.prototype.constructor = subClass, _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf$1(o2) {
  return _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o22) {
    return o22.__proto__ || Object.getPrototypeOf(o22);
  }, _getPrototypeOf$1(o2);
}
function _isNativeFunction$1(fn) {
  try {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  } catch {
    return typeof fn == "function";
  }
}
function _isNativeReflectConstruct$1() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (_isNativeReflectConstruct$1 = function() {
    return !!t;
  })();
}
function _construct$1(t, e2, r2) {
  if (_isNativeReflectConstruct$1()) return Reflect.construct.apply(null, arguments);
  var o2 = [null];
  o2.push.apply(o2, e2);
  var p2 = new (t.bind.apply(t, o2))();
  return r2 && _setPrototypeOf(p2, r2.prototype), p2;
}
function _wrapNativeSuper$1(Class) {
  var _cache = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return _wrapNativeSuper$1 = function(Class2) {
    if (Class2 === null || !_isNativeFunction$1(Class2)) return Class2;
    if (typeof Class2 != "function") throw new TypeError("Super expression must either be null or a function");
    if (typeof _cache < "u") {
      if (_cache.has(Class2)) return _cache.get(Class2);
      _cache.set(Class2, Wrapper42);
    }
    function Wrapper42() {
      return _construct$1(Class2, arguments, _getPrototypeOf$1(this).constructor);
    }
    return Wrapper42.prototype = Object.create(Class2.prototype, { constructor: { value: Wrapper42, enumerable: false, writable: true, configurable: true } }), _setPrototypeOf(Wrapper42, Class2);
  }, _wrapNativeSuper$1(Class);
}
var ERRORS = { 1: `Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`, 2: `Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`, 3: `Passed an incorrect argument to a color function, please pass a string representation of a color.

`, 4: `Couldn't generate valid rgb string from %s, it returned %s.

`, 5: `Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`, 6: `Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`, 7: `Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`, 8: `Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`, 9: `Please provide a number of steps to the modularScale helper.

`, 10: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`, 11: `Invalid value passed as base to modularScale, expected number or em string but got "%s"

`, 12: `Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`, 13: `Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`, 14: `Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`, 15: `Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`, 16: `You must provide a template to this method.

`, 17: `You passed an unsupported selector state to this method.

`, 18: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`, 19: `fromSize and toSize must be provided as stringified numbers with the same units.

`, 20: `expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`, 21: "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n", 22: "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n", 23: `fontFace expects a name of a font-family.

`, 24: `fontFace expects either the path to the font file(s) or a name of a local copy.

`, 25: `fontFace expects localFonts to be an array.

`, 26: `fontFace expects fileFormats to be an array.

`, 27: `radialGradient requries at least 2 color-stops to properly render.

`, 28: `Please supply a filename to retinaImage() as the first argument.

`, 29: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`, 30: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n", 31: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`, 32: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`, 33: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`, 34: `borderRadius expects a radius value as a string or number as the second argument.

`, 35: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`, 36: `Property must be a string value.

`, 37: `Syntax Error at %s.

`, 38: `Formula contains a function that needs parentheses at %s.

`, 39: `Formula is missing closing parenthesis at %s.

`, 40: `Formula has too many closing parentheses at %s.

`, 41: `All values in a formula must have the same unit or be unitless.

`, 42: `Please provide a number of steps to the modularScale helper.

`, 43: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`, 44: `Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`, 45: `Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`, 46: `Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`, 47: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`, 48: `fromSize and toSize must be provided as stringified numbers with the same units.

`, 49: `Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`, 50: `Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`, 51: `Expects the first argument object to have the properties prop, fromSize, and toSize.

`, 52: `fontFace expects either the path to the font file(s) or a name of a local copy.

`, 53: `fontFace expects localFonts to be an array.

`, 54: `fontFace expects fileFormats to be an array.

`, 55: `fontFace expects a name of a font-family.

`, 56: `linearGradient requries at least 2 color-stops to properly render.

`, 57: `radialGradient requries at least 2 color-stops to properly render.

`, 58: `Please supply a filename to retinaImage() as the first argument.

`, 59: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`, 60: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n", 61: `Property must be a string value.

`, 62: `borderRadius expects a radius value as a string or number as the second argument.

`, 63: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`, 64: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`, 65: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`, 66: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`, 67: `You must provide a template to this method.

`, 68: `You passed an unsupported selector state to this method.

`, 69: `Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`, 70: `Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`, 71: `Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`, 72: `Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`, 73: `Please provide a valid CSS variable.

`, 74: `CSS variable not found and no default was provided.

`, 75: `important requires a valid style object, got a %s instead.

`, 76: `fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`, 77: `remToPx expects a value in "rem" but you provided it in "%s".

`, 78: `base must be set in "px" or "%" but you set it in "%s".
` };
function format() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
  var a2 = args[0], b2 = [], c2;
  for (c2 = 1; c2 < args.length; c2 += 1) b2.push(args[c2]);
  return b2.forEach(function(d2) {
    a2 = a2.replace(/%[a-z]/, d2);
  }), a2;
}
var PolishedError$1 = function(_Error) {
  _inheritsLoose(PolishedError2, _Error);
  function PolishedError2(code) {
    for (var _this, _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) args[_key2 - 1] = arguments[_key2];
    return _this = _Error.call(this, format.apply(void 0, [ERRORS[code]].concat(args))) || this, _assertThisInitialized(_this);
  }
  return PolishedError2;
}(_wrapNativeSuper$1(Error));
function colorToInt$1(color2) {
  return Math.round(color2 * 255);
}
function convertToInt$1(red, green, blue) {
  return colorToInt$1(red) + "," + colorToInt$1(green) + "," + colorToInt$1(blue);
}
function hslToRgb$1(hue, saturation, lightness, convert2) {
  if (convert2 === void 0 && (convert2 = convertToInt$1), saturation === 0) return convert2(lightness, lightness, lightness);
  var huePrime = (hue % 360 + 360) % 360 / 60, chroma = (1 - Math.abs(2 * lightness - 1)) * saturation, secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1)), red = 0, green = 0, blue = 0;
  huePrime >= 0 && huePrime < 1 ? (red = chroma, green = secondComponent) : huePrime >= 1 && huePrime < 2 ? (red = secondComponent, green = chroma) : huePrime >= 2 && huePrime < 3 ? (green = chroma, blue = secondComponent) : huePrime >= 3 && huePrime < 4 ? (green = secondComponent, blue = chroma) : huePrime >= 4 && huePrime < 5 ? (red = secondComponent, blue = chroma) : huePrime >= 5 && huePrime < 6 && (red = chroma, blue = secondComponent);
  var lightnessModification = lightness - chroma / 2, finalRed = red + lightnessModification, finalGreen = green + lightnessModification, finalBlue = blue + lightnessModification;
  return convert2(finalRed, finalGreen, finalBlue);
}
var namedColorMap$1 = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "00ffff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000", blanchedalmond: "ffebcd", blue: "0000ff", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "00ffff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkgrey: "a9a9a9", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkslategrey: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dimgrey: "696969", dodgerblue: "1e90ff", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "ff00ff", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", grey: "808080", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgray: "d3d3d3", lightgreen: "90ee90", lightgrey: "d3d3d3", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslategray: "789", lightslategrey: "789", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "0f0", limegreen: "32cd32", linen: "faf0e6", magenta: "f0f", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370db", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "db7093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", rebeccapurple: "639", red: "f00", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", slategrey: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", wheat: "f5deb3", white: "fff", whitesmoke: "f5f5f5", yellow: "ff0", yellowgreen: "9acd32" };
function nameToHex$1(color2) {
  if (typeof color2 != "string") return color2;
  var normalizedColorName = color2.toLowerCase();
  return namedColorMap$1[normalizedColorName] ? "#" + namedColorMap$1[normalizedColorName] : color2;
}
var hexRegex$1 = /^#[a-fA-F0-9]{6}$/, hexRgbaRegex$1 = /^#[a-fA-F0-9]{8}$/, reducedHexRegex$1 = /^#[a-fA-F0-9]{3}$/, reducedRgbaHexRegex$1 = /^#[a-fA-F0-9]{4}$/, rgbRegex$1 = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i, rgbaRegex$1 = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, hslRegex$1 = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, hslaRegex$1 = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function parseToRgb$1(color2) {
  if (typeof color2 != "string") throw new PolishedError$1(3);
  var normalizedColor = nameToHex$1(color2);
  if (normalizedColor.match(hexRegex$1)) return { red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16), green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16), blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16) };
  if (normalizedColor.match(hexRgbaRegex$1)) {
    var alpha = parseFloat((parseInt("" + normalizedColor[7] + normalizedColor[8], 16) / 255).toFixed(2));
    return { red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16), green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16), blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16), alpha };
  }
  if (normalizedColor.match(reducedHexRegex$1)) return { red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16), green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16), blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16) };
  if (normalizedColor.match(reducedRgbaHexRegex$1)) {
    var _alpha = parseFloat((parseInt("" + normalizedColor[4] + normalizedColor[4], 16) / 255).toFixed(2));
    return { red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16), green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16), blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16), alpha: _alpha };
  }
  var rgbMatched = rgbRegex$1.exec(normalizedColor);
  if (rgbMatched) return { red: parseInt("" + rgbMatched[1], 10), green: parseInt("" + rgbMatched[2], 10), blue: parseInt("" + rgbMatched[3], 10) };
  var rgbaMatched = rgbaRegex$1.exec(normalizedColor.substring(0, 50));
  if (rgbaMatched) return { red: parseInt("" + rgbaMatched[1], 10), green: parseInt("" + rgbaMatched[2], 10), blue: parseInt("" + rgbaMatched[3], 10), alpha: parseFloat("" + rgbaMatched[4]) > 1 ? parseFloat("" + rgbaMatched[4]) / 100 : parseFloat("" + rgbaMatched[4]) };
  var hslMatched = hslRegex$1.exec(normalizedColor);
  if (hslMatched) {
    var hue = parseInt("" + hslMatched[1], 10), saturation = parseInt("" + hslMatched[2], 10) / 100, lightness = parseInt("" + hslMatched[3], 10) / 100, rgbColorString = "rgb(" + hslToRgb$1(hue, saturation, lightness) + ")", hslRgbMatched = rgbRegex$1.exec(rgbColorString);
    if (!hslRgbMatched) throw new PolishedError$1(4, normalizedColor, rgbColorString);
    return { red: parseInt("" + hslRgbMatched[1], 10), green: parseInt("" + hslRgbMatched[2], 10), blue: parseInt("" + hslRgbMatched[3], 10) };
  }
  var hslaMatched = hslaRegex$1.exec(normalizedColor.substring(0, 50));
  if (hslaMatched) {
    var _hue = parseInt("" + hslaMatched[1], 10), _saturation = parseInt("" + hslaMatched[2], 10) / 100, _lightness = parseInt("" + hslaMatched[3], 10) / 100, _rgbColorString = "rgb(" + hslToRgb$1(_hue, _saturation, _lightness) + ")", _hslRgbMatched = rgbRegex$1.exec(_rgbColorString);
    if (!_hslRgbMatched) throw new PolishedError$1(4, normalizedColor, _rgbColorString);
    return { red: parseInt("" + _hslRgbMatched[1], 10), green: parseInt("" + _hslRgbMatched[2], 10), blue: parseInt("" + _hslRgbMatched[3], 10), alpha: parseFloat("" + hslaMatched[4]) > 1 ? parseFloat("" + hslaMatched[4]) / 100 : parseFloat("" + hslaMatched[4]) };
  }
  throw new PolishedError$1(5);
}
function rgbToHsl$1(color2) {
  var red = color2.red / 255, green = color2.green / 255, blue = color2.blue / 255, max2 = Math.max(red, green, blue), min2 = Math.min(red, green, blue), lightness = (max2 + min2) / 2;
  if (max2 === min2) return color2.alpha !== void 0 ? { hue: 0, saturation: 0, lightness, alpha: color2.alpha } : { hue: 0, saturation: 0, lightness };
  var hue, delta = max2 - min2, saturation = lightness > 0.5 ? delta / (2 - max2 - min2) : delta / (max2 + min2);
  switch (max2) {
    case red:
      hue = (green - blue) / delta + (green < blue ? 6 : 0);
      break;
    case green:
      hue = (blue - red) / delta + 2;
      break;
    default:
      hue = (red - green) / delta + 4;
      break;
  }
  return hue *= 60, color2.alpha !== void 0 ? { hue, saturation, lightness, alpha: color2.alpha } : { hue, saturation, lightness };
}
function parseToHsl$1(color2) {
  return rgbToHsl$1(parseToRgb$1(color2));
}
var reduceHexValue$2 = function(value2) {
  return value2.length === 7 && value2[1] === value2[2] && value2[3] === value2[4] && value2[5] === value2[6] ? "#" + value2[1] + value2[3] + value2[5] : value2;
}, reduceHexValue$1$1 = reduceHexValue$2;
function numberToHex$1(value2) {
  var hex = value2.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}
function colorToHex$1(color2) {
  return numberToHex$1(Math.round(color2 * 255));
}
function convertToHex$1(red, green, blue) {
  return reduceHexValue$1$1("#" + colorToHex$1(red) + colorToHex$1(green) + colorToHex$1(blue));
}
function hslToHex$1(hue, saturation, lightness) {
  return hslToRgb$1(hue, saturation, lightness, convertToHex$1);
}
function hsl$1(value2, saturation, lightness) {
  if (typeof value2 == "number" && typeof saturation == "number" && typeof lightness == "number") return hslToHex$1(value2, saturation, lightness);
  if (typeof value2 == "object" && saturation === void 0 && lightness === void 0) return hslToHex$1(value2.hue, value2.saturation, value2.lightness);
  throw new PolishedError$1(1);
}
function hsla$1(value2, saturation, lightness, alpha) {
  if (typeof value2 == "number" && typeof saturation == "number" && typeof lightness == "number" && typeof alpha == "number") return alpha >= 1 ? hslToHex$1(value2, saturation, lightness) : "rgba(" + hslToRgb$1(value2, saturation, lightness) + "," + alpha + ")";
  if (typeof value2 == "object" && saturation === void 0 && lightness === void 0 && alpha === void 0) return value2.alpha >= 1 ? hslToHex$1(value2.hue, value2.saturation, value2.lightness) : "rgba(" + hslToRgb$1(value2.hue, value2.saturation, value2.lightness) + "," + value2.alpha + ")";
  throw new PolishedError$1(2);
}
function rgb$1(value2, green, blue) {
  if (typeof value2 == "number" && typeof green == "number" && typeof blue == "number") return reduceHexValue$1$1("#" + numberToHex$1(value2) + numberToHex$1(green) + numberToHex$1(blue));
  if (typeof value2 == "object" && green === void 0 && blue === void 0) return reduceHexValue$1$1("#" + numberToHex$1(value2.red) + numberToHex$1(value2.green) + numberToHex$1(value2.blue));
  throw new PolishedError$1(6);
}
function rgba$1(firstValue, secondValue, thirdValue, fourthValue) {
  if (typeof firstValue == "string" && typeof secondValue == "number") {
    var rgbValue = parseToRgb$1(firstValue);
    return "rgba(" + rgbValue.red + "," + rgbValue.green + "," + rgbValue.blue + "," + secondValue + ")";
  } else {
    if (typeof firstValue == "number" && typeof secondValue == "number" && typeof thirdValue == "number" && typeof fourthValue == "number") return fourthValue >= 1 ? rgb$1(firstValue, secondValue, thirdValue) : "rgba(" + firstValue + "," + secondValue + "," + thirdValue + "," + fourthValue + ")";
    if (typeof firstValue == "object" && secondValue === void 0 && thirdValue === void 0 && fourthValue === void 0) return firstValue.alpha >= 1 ? rgb$1(firstValue.red, firstValue.green, firstValue.blue) : "rgba(" + firstValue.red + "," + firstValue.green + "," + firstValue.blue + "," + firstValue.alpha + ")";
  }
  throw new PolishedError$1(7);
}
var isRgb$1 = function(color2) {
  return typeof color2.red == "number" && typeof color2.green == "number" && typeof color2.blue == "number" && (typeof color2.alpha != "number" || typeof color2.alpha > "u");
}, isRgba$1 = function(color2) {
  return typeof color2.red == "number" && typeof color2.green == "number" && typeof color2.blue == "number" && typeof color2.alpha == "number";
}, isHsl$1 = function(color2) {
  return typeof color2.hue == "number" && typeof color2.saturation == "number" && typeof color2.lightness == "number" && (typeof color2.alpha != "number" || typeof color2.alpha > "u");
}, isHsla$1 = function(color2) {
  return typeof color2.hue == "number" && typeof color2.saturation == "number" && typeof color2.lightness == "number" && typeof color2.alpha == "number";
};
function toColorString$1(color2) {
  if (typeof color2 != "object") throw new PolishedError$1(8);
  if (isRgba$1(color2)) return rgba$1(color2);
  if (isRgb$1(color2)) return rgb$1(color2);
  if (isHsla$1(color2)) return hsla$1(color2);
  if (isHsl$1(color2)) return hsl$1(color2);
  throw new PolishedError$1(8);
}
function curried$1(f2, length, acc) {
  return function() {
    var combined = acc.concat(Array.prototype.slice.call(arguments));
    return combined.length >= length ? f2.apply(this, combined) : curried$1(f2, length, combined);
  };
}
function curry$1(f2) {
  return curried$1(f2, f2.length, []);
}
function guard$1(lowerBoundary, upperBoundary, value2) {
  return Math.max(lowerBoundary, Math.min(upperBoundary, value2));
}
function darken$1(amount, color2) {
  if (color2 === "transparent") return color2;
  var hslColor = parseToHsl$1(color2);
  return toColorString$1(_extends({}, hslColor, { lightness: guard$1(0, 1, hslColor.lightness - parseFloat(amount)) }));
}
var curriedDarken$2 = curry$1(darken$1), curriedDarken$1$1 = curriedDarken$2;
function lighten$1(amount, color2) {
  if (color2 === "transparent") return color2;
  var hslColor = parseToHsl$1(color2);
  return toColorString$1(_extends({}, hslColor, { lightness: guard$1(0, 1, hslColor.lightness + parseFloat(amount)) }));
}
var curriedLighten$2 = curry$1(lighten$1), curriedLighten$1$1 = curriedLighten$2;
function transparentize$1(amount, color2) {
  if (color2 === "transparent") return color2;
  var parsedColor = parseToRgb$1(color2), alpha = typeof parsedColor.alpha == "number" ? parsedColor.alpha : 1, colorWithAlpha = _extends({}, parsedColor, { alpha: guard$1(0, 1, +(alpha * 100 - parseFloat(amount) * 100).toFixed(2) / 100) });
  return rgba$1(colorWithAlpha);
}
var curriedTransparentize$2 = curry$1(transparentize$1), curriedTransparentize$1$1 = curriedTransparentize$2;
var headerCommon = ({ theme }) => ({ margin: "20px 0 8px", padding: 0, cursor: "text", position: "relative", color: theme.color.defaultText, "&:first-of-type": { marginTop: 0, paddingTop: 0 }, "&:hover a.anchor": { textDecoration: "none" }, "& tt, & code": { fontSize: "inherit" } }), codeCommon = ({ theme }) => ({ lineHeight: 1, margin: "0 2px", padding: "3px 5px", whiteSpace: "nowrap", borderRadius: 3, fontSize: theme.typography.size.s2 - 1, border: theme.base === "light" ? `1px solid ${theme.color.mediumlight}` : `1px solid ${theme.color.darker}`, color: theme.base === "light" ? curriedTransparentize$1$1(0.1, theme.color.defaultText) : curriedTransparentize$1$1(0.3, theme.color.defaultText), backgroundColor: theme.base === "light" ? theme.color.lighter : theme.color.border }), withReset = ({ theme }) => ({ fontFamily: theme.typography.fonts.base, fontSize: theme.typography.size.s3, margin: 0, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", WebkitOverflowScrolling: "touch" }), withMargin = { margin: "16px 0" };
var Link = ({ href: input, ...props }) => {
  let href = /^\//.test(input) ? `./?path=${input}` : input, target = /^#.*/.test(input) ? "_self" : "_top";
  return React.createElement("a", { href, target, ...props });
};
var A$2 = newStyled(Link)(withReset, ({ theme }) => ({ fontSize: "inherit", lineHeight: "24px", color: theme.color.secondary, textDecoration: "none", "&.absent": { color: "#cc0000" }, "&.anchor": { display: "block", paddingLeft: 30, marginLeft: -30, cursor: "pointer", position: "absolute", top: 0, left: 0, bottom: 0 } }));
var Blockquote = newStyled.blockquote(withReset, withMargin, ({ theme }) => ({ borderLeft: `4px solid ${theme.color.medium}`, padding: "0 15px", color: theme.color.dark, "& > :first-of-type": { marginTop: 0 }, "& > :last-child": { marginBottom: 0 } }));
var isReactChildString = (child) => typeof child == "string";
var isInlineCodeRegex = /[\n\r]/g, DefaultCodeBlock = newStyled.code(({ theme }) => ({ fontFamily: theme.typography.fonts.mono, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", display: "inline-block", paddingLeft: 2, paddingRight: 2, verticalAlign: "baseline", color: "inherit" }), codeCommon), StyledSyntaxHighlighter$1 = newStyled(SyntaxHighlighter2$1)(({ theme }) => ({ fontFamily: theme.typography.fonts.mono, fontSize: `${theme.typography.size.s2 - 1}px`, lineHeight: "19px", margin: "25px 0 40px", borderRadius: theme.appBorderRadius, boxShadow: theme.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", "pre.prismjs": { padding: 20, background: "inherit" } })), Code = ({ className, children, ...props }) => {
  let language = (className || "").match(/lang-(\S+)/), childrenArray = reactExports.Children.toArray(children);
  return childrenArray.filter(isReactChildString).some((child) => child.match(isInlineCodeRegex)) ? React.createElement(StyledSyntaxHighlighter$1, { bordered: true, copyable: true, language: (language == null ? void 0 : language[1]) ?? "text", format: false, ...props }, children) : React.createElement(DefaultCodeBlock, { ...props, className }, childrenArray);
};
var Div = newStyled.div(withReset);
var DL = newStyled.dl(withReset, withMargin, { padding: 0, "& dt": { fontSize: "14px", fontWeight: "bold", fontStyle: "italic", padding: 0, margin: "16px 0 4px" }, "& dt:first-of-type": { padding: 0 }, "& dt > :first-of-type": { marginTop: 0 }, "& dt > :last-child": { marginBottom: 0 }, "& dd": { margin: "0 0 16px", padding: "0 15px" }, "& dd > :first-of-type": { marginTop: 0 }, "& dd > :last-child": { marginBottom: 0 } });
var H1 = newStyled.h1(withReset, headerCommon, ({ theme }) => ({ fontSize: `${theme.typography.size.l1}px`, fontWeight: theme.typography.weight.bold }));
var H2 = newStyled.h2(withReset, headerCommon, ({ theme }) => ({ fontSize: `${theme.typography.size.m2}px`, paddingBottom: 4, borderBottom: `1px solid ${theme.appBorderColor}` }));
var H3 = newStyled.h3(withReset, headerCommon, ({ theme }) => ({ fontSize: `${theme.typography.size.m1}px` }));
var H4 = newStyled.h4(withReset, headerCommon, ({ theme }) => ({ fontSize: `${theme.typography.size.s3}px` }));
var H5 = newStyled.h5(withReset, headerCommon, ({ theme }) => ({ fontSize: `${theme.typography.size.s2}px` }));
var H6 = newStyled.h6(withReset, headerCommon, ({ theme }) => ({ fontSize: `${theme.typography.size.s2}px`, color: theme.color.dark }));
var HR = newStyled.hr(({ theme }) => ({ border: "0 none", borderTop: `1px solid ${theme.appBorderColor}`, height: 4, padding: 0 }));
var Img = newStyled.img({ maxWidth: "100%" });
var LI = newStyled.li(withReset, ({ theme }) => ({ fontSize: theme.typography.size.s2, color: theme.color.defaultText, lineHeight: "24px", "& + li": { marginTop: ".25em" }, "& ul, & ol": { marginTop: ".25em", marginBottom: 0 }, "& code": codeCommon({ theme }) }));
var listCommon = { paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 } }, OL = newStyled.ol(withReset, withMargin, listCommon, { listStyle: "decimal" });
var P$1 = newStyled.p(withReset, withMargin, ({ theme }) => ({ fontSize: theme.typography.size.s2, lineHeight: "24px", color: theme.color.defaultText, "& code": codeCommon({ theme }) }));
var Pre = newStyled.pre(withReset, withMargin, ({ theme }) => ({ fontFamily: theme.typography.fonts.mono, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", lineHeight: "18px", padding: "11px 1rem", whiteSpace: "pre-wrap", color: "inherit", borderRadius: 3, margin: "1rem 0", "&:not(.prismjs)": { background: "transparent", border: "none", borderRadius: 0, padding: 0, margin: 0 }, "& pre, &.prismjs": { padding: 15, margin: 0, whiteSpace: "pre-wrap", color: "inherit", fontSize: "13px", lineHeight: "19px", code: { color: "inherit", fontSize: "inherit" } }, "& code": { whiteSpace: "pre" }, "& code, & tt": { border: "none" } }));
var Span = newStyled.span(withReset, ({ theme }) => ({ "&.frame": { display: "block", overflow: "hidden", "& > span": { border: `1px solid ${theme.color.medium}`, display: "block", float: "left", overflow: "hidden", margin: "13px 0 0", padding: 7, width: "auto" }, "& span img": { display: "block", float: "left" }, "& span span": { clear: "both", color: theme.color.darkest, display: "block", padding: "5px 0 0" } }, "&.align-center": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "center" }, "& span img": { margin: "0 auto", textAlign: "center" } }, "&.align-right": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px 0 0", textAlign: "right" }, "& span img": { margin: 0, textAlign: "right" } }, "&.float-left": { display: "block", marginRight: 13, overflow: "hidden", float: "left", "& span": { margin: "13px 0 0" } }, "&.float-right": { display: "block", marginLeft: 13, overflow: "hidden", float: "right", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "right" } } }));
var Table$1 = newStyled.table(withReset, withMargin, ({ theme }) => ({ fontSize: theme.typography.size.s2, lineHeight: "24px", padding: 0, borderCollapse: "collapse", "& tr": { borderTop: `1px solid ${theme.appBorderColor}`, backgroundColor: theme.appContentBg, margin: 0, padding: 0 }, "& tr:nth-of-type(2n)": { backgroundColor: theme.base === "dark" ? theme.color.darker : theme.color.lighter }, "& tr th": { fontWeight: "bold", color: theme.color.defaultText, border: `1px solid ${theme.appBorderColor}`, margin: 0, padding: "6px 13px" }, "& tr td": { border: `1px solid ${theme.appBorderColor}`, color: theme.color.defaultText, margin: 0, padding: "6px 13px" }, "& tr th :first-of-type, & tr td :first-of-type": { marginTop: 0 }, "& tr th :last-child, & tr td :last-child": { marginBottom: 0 } }));
var TT = newStyled.title(codeCommon);
var listCommon2 = { paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 } }, UL = newStyled.ul(withReset, withMargin, listCommon2, { listStyle: "disc" });
var ResetWrapper = newStyled.div(withReset);
var components = { h1: (props) => React.createElement(H1, { ...nameSpaceClassNames(props, "h1") }), h2: (props) => React.createElement(H2, { ...nameSpaceClassNames(props, "h2") }), h3: (props) => React.createElement(H3, { ...nameSpaceClassNames(props, "h3") }), h4: (props) => React.createElement(H4, { ...nameSpaceClassNames(props, "h4") }), h5: (props) => React.createElement(H5, { ...nameSpaceClassNames(props, "h5") }), h6: (props) => React.createElement(H6, { ...nameSpaceClassNames(props, "h6") }), pre: (props) => React.createElement(Pre, { ...nameSpaceClassNames(props, "pre") }), a: (props) => React.createElement(A$2, { ...nameSpaceClassNames(props, "a") }), hr: (props) => React.createElement(HR, { ...nameSpaceClassNames(props, "hr") }), dl: (props) => React.createElement(DL, { ...nameSpaceClassNames(props, "dl") }), blockquote: (props) => React.createElement(Blockquote, { ...nameSpaceClassNames(props, "blockquote") }), table: (props) => React.createElement(Table$1, { ...nameSpaceClassNames(props, "table") }), img: (props) => React.createElement(Img, { ...nameSpaceClassNames(props, "img") }), div: (props) => React.createElement(Div, { ...nameSpaceClassNames(props, "div") }), span: (props) => React.createElement(Span, { ...nameSpaceClassNames(props, "span") }), li: (props) => React.createElement(LI, { ...nameSpaceClassNames(props, "li") }), ul: (props) => React.createElement(UL, { ...nameSpaceClassNames(props, "ul") }), ol: (props) => React.createElement(OL, { ...nameSpaceClassNames(props, "ol") }), p: (props) => React.createElement(P$1, { ...nameSpaceClassNames(props, "p") }), code: (props) => React.createElement(Code, { ...nameSpaceClassNames(props, "code") }), tt: (props) => React.createElement(TT, { ...nameSpaceClassNames(props, "tt") }), resetwrapper: (props) => React.createElement(ResetWrapper, { ...nameSpaceClassNames(props, "resetwrapper") }) };
var BadgeWrapper = newStyled.div(({ theme }) => ({ display: "inline-block", fontSize: 11, lineHeight: "12px", alignSelf: "center", padding: "4px 12px", borderRadius: "3em", fontWeight: theme.typography.weight.bold }), { svg: { height: 12, width: 12, marginRight: 4, marginTop: -2, path: { fill: "currentColor" } } }, ({ theme, status }) => {
  switch (status) {
    case "critical":
      return { color: theme.color.critical, background: theme.background.critical };
    case "negative":
      return { color: theme.color.negativeText, background: theme.background.negative, boxShadow: theme.base === "light" ? `inset 0 0 0 1px ${curriedTransparentize$1$1(0.9, theme.color.negativeText)}` : "none" };
    case "warning":
      return { color: theme.color.warningText, background: theme.background.warning, boxShadow: theme.base === "light" ? `inset 0 0 0 1px ${curriedTransparentize$1$1(0.9, theme.color.warningText)}` : "none" };
    case "neutral":
      return { color: theme.color.dark, background: theme.color.mediumlight, boxShadow: theme.base === "light" ? `inset 0 0 0 1px ${curriedTransparentize$1$1(0.9, theme.color.dark)}` : "none" };
    case "positive":
      return { color: theme.color.positiveText, background: theme.background.positive, boxShadow: theme.base === "light" ? `inset 0 0 0 1px ${curriedTransparentize$1$1(0.9, theme.color.positiveText)}` : "none" };
    default:
      return {};
  }
}), Badge = ({ ...props }) => React.createElement(BadgeWrapper, { ...props });
var LEFT_BUTTON = 0, isPlainLeftClick = (e2) => e2.button === LEFT_BUTTON && !e2.altKey && !e2.ctrlKey && !e2.metaKey && !e2.shiftKey, cancelled = (e2, cb) => {
  isPlainLeftClick(e2) && (e2.preventDefault(), cb(e2));
}, LinkInner = newStyled.span(({ withArrow }) => withArrow ? { "> svg:last-of-type": { height: "0.7em", width: "0.7em", marginRight: 0, marginLeft: "0.25em", bottom: "auto", verticalAlign: "inherit" } } : {}, ({ containsIcon }) => containsIcon ? { svg: { height: "1em", width: "1em", verticalAlign: "middle", position: "relative", bottom: 0, marginRight: 0 } } : {}), A2 = newStyled.a(({ theme }) => ({ display: "inline-block", transition: "all 150ms ease-out", textDecoration: "none", color: theme.color.secondary, "&:hover, &:focus": { cursor: "pointer", color: curriedDarken$1$1(0.07, theme.color.secondary), "svg path:not([fill])": { fill: curriedDarken$1$1(0.07, theme.color.secondary) } }, "&:active": { color: curriedDarken$1$1(0.1, theme.color.secondary), "svg path:not([fill])": { fill: curriedDarken$1$1(0.1, theme.color.secondary) } }, svg: { display: "inline-block", height: "1em", width: "1em", verticalAlign: "text-top", position: "relative", bottom: "-0.125em", marginRight: "0.4em", "& path": { fill: theme.color.secondary } } }), ({ theme, secondary, tertiary }) => {
  let colors;
  return secondary && (colors = [theme.textMutedColor, theme.color.dark, theme.color.darker]), tertiary && (colors = [theme.color.dark, theme.color.darkest, theme.textMutedColor]), colors ? { color: colors[0], "svg path:not([fill])": { fill: colors[0] }, "&:hover": { color: colors[1], "svg path:not([fill])": { fill: colors[1] } }, "&:active": { color: colors[2], "svg path:not([fill])": { fill: colors[2] } } } : {};
}, ({ nochrome }) => nochrome ? { color: "inherit", "&:hover, &:active": { color: "inherit", textDecoration: "underline" } } : {}, ({ theme, inverse }) => inverse ? { color: theme.color.lightest, ":not([fill])": { fill: theme.color.lightest }, "&:hover": { color: theme.color.lighter, "svg path:not([fill])": { fill: theme.color.lighter } }, "&:active": { color: theme.color.light, "svg path:not([fill])": { fill: theme.color.light } } } : {}, ({ isButton: isButton2 }) => isButton2 ? { border: 0, borderRadius: 0, background: "none", padding: 0, fontSize: "inherit" } : {}), Link2 = ({ cancel = true, children, onClick = void 0, withArrow = false, containsIcon = false, className = void 0, style = void 0, ...rest }) => React.createElement(A2, { ...rest, onClick: onClick && cancel ? (e2) => cancelled(e2, onClick) : onClick, className }, React.createElement(LinkInner, { withArrow, containsIcon }, children, withArrow && React.createElement(ChevronRightIcon, null)));
var DocumentWrapper = newStyled.div(({ theme }) => ({ fontSize: `${theme.typography.size.s2}px`, lineHeight: "1.6", h1: { fontSize: `${theme.typography.size.l1}px`, fontWeight: theme.typography.weight.bold }, h2: { fontSize: `${theme.typography.size.m2}px`, borderBottom: `1px solid ${theme.appBorderColor}` }, h3: { fontSize: `${theme.typography.size.m1}px` }, h4: { fontSize: `${theme.typography.size.s3}px` }, h5: { fontSize: `${theme.typography.size.s2}px` }, h6: { fontSize: `${theme.typography.size.s2}px`, color: theme.color.dark }, "pre:not(.prismjs)": { background: "transparent", border: "none", borderRadius: 0, padding: 0, margin: 0 }, "pre pre, pre.prismjs": { padding: 15, margin: 0, whiteSpace: "pre-wrap", color: "inherit", fontSize: "13px", lineHeight: "19px" }, "pre pre code, pre.prismjs code": { color: "inherit", fontSize: "inherit" }, "pre code": { margin: 0, padding: 0, whiteSpace: "pre", border: "none", background: "transparent" }, "pre code, pre tt": { backgroundColor: "transparent", border: "none" }, "body > *:first-of-type": { marginTop: "0 !important" }, "body > *:last-child": { marginBottom: "0 !important" }, a: { color: theme.color.secondary, textDecoration: "none" }, "a.absent": { color: "#cc0000" }, "a.anchor": { display: "block", paddingLeft: 30, marginLeft: -30, cursor: "pointer", position: "absolute", top: 0, left: 0, bottom: 0 }, "h1, h2, h3, h4, h5, h6": { margin: "20px 0 10px", padding: 0, cursor: "text", position: "relative", "&:first-of-type": { marginTop: 0, paddingTop: 0 }, "&:hover a.anchor": { textDecoration: "none" }, "& tt, & code": { fontSize: "inherit" } }, "h1:first-of-type + h2": { marginTop: 0, paddingTop: 0 }, "p, blockquote, ul, ol, dl, li, table, pre": { margin: "15px 0" }, hr: { border: "0 none", borderTop: `1px solid ${theme.appBorderColor}`, height: 4, padding: 0 }, "body > h1:first-of-type, body > h2:first-of-type, body > h3:first-of-type, body > h4:first-of-type, body > h5:first-of-type, body > h6:first-of-type": { marginTop: 0, paddingTop: 0 }, "body > h1:first-of-type + h2": { marginTop: 0, paddingTop: 0 }, "a:first-of-type h1, a:first-of-type h2, a:first-of-type h3, a:first-of-type h4, a:first-of-type h5, a:first-of-type h6": { marginTop: 0, paddingTop: 0 }, "h1 p, h2 p, h3 p, h4 p, h5 p, h6 p": { marginTop: 0 }, "li p.first": { display: "inline-block" }, "ul, ol": { paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 } }, dl: { padding: 0 }, "dl dt": { fontSize: "14px", fontWeight: "bold", fontStyle: "italic", margin: "0 0 15px", padding: "0 15px", "&:first-of-type": { padding: 0 }, "& > :first-of-type": { marginTop: 0 }, "& > :last-child": { marginBottom: 0 } }, blockquote: { borderLeft: `4px solid ${theme.color.medium}`, padding: "0 15px", color: theme.color.dark, "& > :first-of-type": { marginTop: 0 }, "& > :last-child": { marginBottom: 0 } }, table: { padding: 0, borderCollapse: "collapse", "& tr": { borderTop: `1px solid ${theme.appBorderColor}`, backgroundColor: "white", margin: 0, padding: 0, "& th": { fontWeight: "bold", border: `1px solid ${theme.appBorderColor}`, textAlign: "left", margin: 0, padding: "6px 13px" }, "& td": { border: `1px solid ${theme.appBorderColor}`, textAlign: "left", margin: 0, padding: "6px 13px" }, "&:nth-of-type(2n)": { backgroundColor: theme.color.lighter }, "& th :first-of-type, & td :first-of-type": { marginTop: 0 }, "& th :last-child, & td :last-child": { marginBottom: 0 } } }, img: { maxWidth: "100%" }, "span.frame": { display: "block", overflow: "hidden", "& > span": { border: `1px solid ${theme.color.medium}`, display: "block", float: "left", overflow: "hidden", margin: "13px 0 0", padding: 7, width: "auto" }, "& span img": { display: "block", float: "left" }, "& span span": { clear: "both", color: theme.color.darkest, display: "block", padding: "5px 0 0" } }, "span.align-center": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "center" }, "& span img": { margin: "0 auto", textAlign: "center" } }, "span.align-right": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px 0 0", textAlign: "right" }, "& span img": { margin: 0, textAlign: "right" } }, "span.float-left": { display: "block", marginRight: 13, overflow: "hidden", float: "left", "& span": { margin: "13px 0 0" } }, "span.float-right": { display: "block", marginLeft: 13, overflow: "hidden", float: "right", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "right" } }, "code, tt": { margin: "0 2px", padding: "0 5px", whiteSpace: "nowrap", border: `1px solid ${theme.color.mediumlight}`, backgroundColor: theme.color.lighter, borderRadius: 3, color: theme.base === "dark" && theme.color.darkest } }));
var languages = [], Comp = null, LazySyntaxHighlighter = reactExports.lazy(async () => {
  let { SyntaxHighlighter: SyntaxHighlighter3 } = await __vitePreload(() => import("./syntaxhighlighter-BP7B2CQK-Cy83ZDxB.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]) : void 0, import.meta.url);
  return languages.length > 0 && (languages.forEach((args) => {
    SyntaxHighlighter3.registerLanguage(...args);
  }), languages = []), Comp === null && (Comp = SyntaxHighlighter3), { default: (props) => React.createElement(SyntaxHighlighter3, { ...props }) };
}), LazySyntaxHighlighterWithFormatter = reactExports.lazy(async () => {
  let [{ SyntaxHighlighter: SyntaxHighlighter3 }, { formatter }] = await Promise.all([__vitePreload(() => import("./syntaxhighlighter-BP7B2CQK-Cy83ZDxB.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]) : void 0, import.meta.url), __vitePreload(() => import("./formatter-2WMMO6ZP-CF6PmrPV.js"), true ? __vite__mapDeps([11,4,2,3]) : void 0, import.meta.url)]);
  return languages.length > 0 && (languages.forEach((args) => {
    SyntaxHighlighter3.registerLanguage(...args);
  }), languages = []), Comp === null && (Comp = SyntaxHighlighter3), { default: (props) => React.createElement(SyntaxHighlighter3, { ...props, formatter }) };
}), SyntaxHighlighter2 = (props) => React.createElement(reactExports.Suspense, { fallback: React.createElement("div", null) }, props.format !== false ? React.createElement(LazySyntaxHighlighterWithFormatter, { ...props }) : React.createElement(LazySyntaxHighlighter, { ...props }));
SyntaxHighlighter2.registerLanguage = (...args) => {
  if (Comp !== null) {
    Comp.registerLanguage(...args);
    return;
  }
  languages.push(args);
};
var Modal_styled_exports = {};
__export(Modal_styled_exports, { Actions: () => Actions, CloseButton: () => CloseButton, Col: () => Col, Container: () => Container, Content: () => Content$1, Description: () => Description2, Error: () => Error2, ErrorWrapper: () => ErrorWrapper, Header: () => Header, Overlay: () => Overlay, Row: () => Row$1, Title: () => Title2$1 });
var Button = reactExports.forwardRef(({ asChild = false, animation = "none", size = "small", variant = "outline", padding = "medium", disabled = false, active = false, onClick, ...props }, ref) => {
  let Comp2 = "button";
  props.isLink && (Comp2 = "a"), asChild && (Comp2 = Slot);
  let localVariant = variant, localSize = size, [isAnimating, setIsAnimating] = reactExports.useState(false), handleClick = (event) => {
    onClick && onClick(event), animation !== "none" && setIsAnimating(true);
  };
  if (reactExports.useEffect(() => {
    let timer = setTimeout(() => {
      isAnimating && setIsAnimating(false);
    }, 1e3);
    return () => clearTimeout(timer);
  }, [isAnimating]), props.primary && (localVariant = "solid", localSize = "medium"), (props.secondary || props.tertiary || props.gray || props.outline || props.inForm) && (localVariant = "outline", localSize = "medium"), props.small || props.isLink || props.primary || props.secondary || props.tertiary || props.gray || props.outline || props.inForm || props.containsIcon) {
    let buttonContent = React.Children.toArray(props.children).filter((e2) => typeof e2 == "string" && e2 !== "");
    deprecate$1(`Use of deprecated props in the button ${buttonContent.length > 0 ? `"${buttonContent.join(" ")}"` : "component"} detected, see the migration notes at https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#new-ui-and-props-for-button-and-iconbutton-components`);
  }
  return React.createElement(StyledButton, { as: Comp2, ref, variant: localVariant, size: localSize, padding, disabled, active, animating: isAnimating, animation, onClick: handleClick, ...props });
});
Button.displayName = "Button";
var StyledButton = newStyled("button", { shouldForwardProp: (prop) => isPropValid(prop) })(({ theme, variant, size, disabled, active, animating, animation, padding }) => ({ border: 0, cursor: disabled ? "not-allowed" : "pointer", display: "inline-flex", gap: "6px", alignItems: "center", justifyContent: "center", overflow: "hidden", padding: padding === "small" && size === "small" ? "0 7px" : padding === "small" && size === "medium" ? "0 9px" : size === "small" ? "0 10px" : size === "medium" ? "0 12px" : 0, height: size === "small" ? "28px" : "32px", position: "relative", textAlign: "center", textDecoration: "none", transitionProperty: "background, box-shadow", transitionDuration: "150ms", transitionTimingFunction: "ease-out", verticalAlign: "top", whiteSpace: "nowrap", userSelect: "none", opacity: disabled ? 0.5 : 1, margin: 0, fontSize: `${theme.typography.size.s1}px`, fontWeight: theme.typography.weight.bold, lineHeight: "1", background: variant === "solid" ? theme.color.secondary : variant === "outline" ? theme.button.background : variant === "ghost" && active ? theme.background.hoverable : "transparent", ...variant === "ghost" ? { ".sb-bar &": { background: active ? curriedTransparentize$1$1(0.9, theme.barTextColor) : "transparent", color: active ? theme.barSelectedColor : theme.barTextColor, "&:hover": { color: theme.barHoverColor, background: curriedTransparentize$1$1(0.86, theme.barHoverColor) }, "&:active": { color: theme.barSelectedColor, background: curriedTransparentize$1$1(0.9, theme.barSelectedColor) }, "&:focus": { boxShadow: `${rgba$1(theme.barHoverColor, 1)} 0 0 0 1px inset`, outline: "none" } } } : {}, color: variant === "solid" ? theme.color.lightest : variant === "outline" ? theme.input.color : variant === "ghost" && active ? theme.color.secondary : variant === "ghost" ? theme.color.mediumdark : theme.input.color, boxShadow: variant === "outline" ? `${theme.button.border} 0 0 0 1px inset` : "none", borderRadius: theme.input.borderRadius, flexShrink: 0, "&:hover": { color: variant === "ghost" ? theme.color.secondary : null, background: (() => {
  let bgColor = theme.color.secondary;
  return variant === "solid" && (bgColor = theme.color.secondary), variant === "outline" && (bgColor = theme.button.background), variant === "ghost" ? curriedTransparentize$1$1(0.86, theme.color.secondary) : theme.base === "light" ? curriedDarken$1$1(0.02, bgColor) : curriedLighten$1$1(0.03, bgColor);
})() }, "&:active": { color: variant === "ghost" ? theme.color.secondary : null, background: (() => {
  let bgColor = theme.color.secondary;
  return variant === "solid" && (bgColor = theme.color.secondary), variant === "outline" && (bgColor = theme.button.background), variant === "ghost" ? theme.background.hoverable : theme.base === "light" ? curriedDarken$1$1(0.02, bgColor) : curriedLighten$1$1(0.03, bgColor);
})() }, "&:focus": { boxShadow: `${rgba$1(theme.color.secondary, 1)} 0 0 0 1px inset`, outline: "none" }, "> svg": { animation: animating && animation !== "none" ? `${theme.animation[animation]} 1000ms ease-out` : "" } }));
var IconButton = reactExports.forwardRef(({ padding = "small", variant = "ghost", ...props }, ref) => React.createElement(Button, { padding, variant, ref, ...props }));
IconButton.displayName = "IconButton";
var fadeIn = keyframes({ from: { opacity: 0 }, to: { opacity: 1 } }), expand = keyframes({ from: { maxHeight: 0 }, to: {} }), zoomIn = keyframes({ from: { opacity: 0, transform: "translate(-50%, -50%) scale(0.9)" }, to: { opacity: 1, transform: "translate(-50%, -50%) scale(1)" } }), Overlay = newStyled.div({ backgroundColor: "rgba(27, 28, 29, 0.2)", position: "fixed", inset: 0, width: "100%", height: "100%", zIndex: 10, animation: `${fadeIn} 200ms` }), Container = newStyled.div(({ theme, width, height }) => ({ backgroundColor: theme.background.bar, borderRadius: 6, boxShadow: "rgba(255, 255, 255, 0.05) 0 0 0 1px inset, rgba(14, 18, 22, 0.35) 0px 10px 38px -10px", position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: width ?? 740, height: height ?? "auto", maxWidth: "calc(100% - 40px)", maxHeight: "85vh", overflow: "hidden", zIndex: 11, animation: `${zoomIn} 200ms`, "&:focus-visible": { outline: "none" } })), CloseButton = (props) => React.createElement(Close, { asChild: true }, React.createElement(IconButton, { ...props }, React.createElement(CrossIcon, null))), Content$1 = newStyled.div({ display: "flex", flexDirection: "column", margin: 16, gap: 16 }), Row$1 = newStyled.div({ display: "flex", justifyContent: "space-between", gap: 16 }), Col = newStyled.div({ display: "flex", flexDirection: "column", gap: 4 }), Header = (props) => React.createElement(Row$1, null, React.createElement(Col, { ...props }), React.createElement(CloseButton, null)), Title2$1 = newStyled(Title$1)(({ theme }) => ({ margin: 0, fontSize: theme.typography.size.s3, fontWeight: theme.typography.weight.bold })), Description2 = newStyled(Description$1)(({ theme }) => ({ position: "relative", zIndex: 1, margin: 0, fontSize: theme.typography.size.s2 })), Actions = newStyled.div({ display: "flex", flexDirection: "row-reverse", gap: 8 }), ErrorWrapper = newStyled.div(({ theme }) => ({ maxHeight: 100, overflow: "auto", animation: `${expand} 300ms, ${fadeIn} 300ms`, backgroundColor: theme.background.critical, color: theme.color.lightest, fontSize: theme.typography.size.s2, "& > div": { position: "relative", padding: "8px 16px" } })), Error2 = ({ children, ...props }) => React.createElement(ErrorWrapper, { ...props }, React.createElement("div", null, children));
function BaseModal({ children, width, height, onEscapeKeyDown, onInteractOutside = (ev) => ev.preventDefault(), className, container, ...rootProps }) {
  return React.createElement(Root, { ...rootProps }, React.createElement(Portal, { container }, React.createElement(Overlay$1, { asChild: true }, React.createElement(Overlay, null)), React.createElement(Content$2, { asChild: true, onInteractOutside, onEscapeKeyDown }, React.createElement(Container, { className, width, height }, children))));
}
var Modal = Object.assign(BaseModal, Modal_styled_exports, { Dialog: Dialog2 });
var toNumber = (input) => typeof input == "number" ? input : Number(input), Container2 = newStyled.div(({ theme, col, row = 1 }) => col ? { display: "inline-block", verticalAlign: "inherit", "& > *": { marginLeft: col * theme.layoutMargin, verticalAlign: "inherit" }, [`& > *:first-child${ignoreSsrWarning}`]: { marginLeft: 0 } } : { "& > *": { marginTop: row * theme.layoutMargin }, [`& > *:first-child${ignoreSsrWarning}`]: { marginTop: 0 } }, ({ theme, outer, col, row }) => {
  switch (true) {
    case !!(outer && col):
      return { marginLeft: outer * theme.layoutMargin, marginRight: outer * theme.layoutMargin };
    case !!(outer && row):
      return { marginTop: outer * theme.layoutMargin, marginBottom: outer * theme.layoutMargin };
    default:
      return {};
  }
}), Spaced = ({ col, row, outer, children, ...rest }) => {
  let outerAmount = toNumber(typeof outer == "number" || !outer ? outer : col || row);
  return React.createElement(Container2, { col, row, outer: outerAmount, ...rest }, children);
};
var Title3 = newStyled.div(({ theme }) => ({ fontWeight: theme.typography.weight.bold })), Desc = newStyled.div(), Message = newStyled.div(({ theme }) => ({ padding: 30, textAlign: "center", color: theme.color.defaultText, fontSize: theme.typography.size.s2 - 1 })), Placeholder = ({ children, ...props }) => {
  let [title, desc] = reactExports.Children.toArray(children);
  return React.createElement(Message, { ...props }, React.createElement(Title3, null, title), desc && React.createElement(Desc, null, desc));
};
function useResolvedElement(subscriber, refOrElement) {
  var lastReportRef = reactExports.useRef(null), refOrElementRef = reactExports.useRef(null);
  refOrElementRef.current = refOrElement;
  var cbElementRef = reactExports.useRef(null);
  reactExports.useEffect(function() {
    evaluateSubscription();
  });
  var evaluateSubscription = reactExports.useCallback(function() {
    var cbElement = cbElementRef.current, refOrElement2 = refOrElementRef.current, element = cbElement || (refOrElement2 ? refOrElement2 instanceof Element ? refOrElement2 : refOrElement2.current : null);
    lastReportRef.current && lastReportRef.current.element === element && lastReportRef.current.subscriber === subscriber || (lastReportRef.current && lastReportRef.current.cleanup && lastReportRef.current.cleanup(), lastReportRef.current = { element, subscriber, cleanup: element ? subscriber(element) : void 0 });
  }, [subscriber]);
  return reactExports.useEffect(function() {
    return function() {
      lastReportRef.current && lastReportRef.current.cleanup && (lastReportRef.current.cleanup(), lastReportRef.current = null);
    };
  }, []), reactExports.useCallback(function(element) {
    cbElementRef.current = element, evaluateSubscription();
  }, [evaluateSubscription]);
}
function extractSize(entry, boxProp, sizeType) {
  return entry[boxProp] ? entry[boxProp][0] ? entry[boxProp][0][sizeType] : entry[boxProp][sizeType] : boxProp === "contentBoxSize" ? entry.contentRect[sizeType === "inlineSize" ? "width" : "height"] : void 0;
}
function useResizeObserver(opts) {
  opts === void 0 && (opts = {});
  var onResize = opts.onResize, onResizeRef = reactExports.useRef(void 0);
  onResizeRef.current = onResize;
  var round2 = opts.round || Math.round, resizeObserverRef = reactExports.useRef(), _useState = reactExports.useState({ width: void 0, height: void 0 }), size = _useState[0], setSize = _useState[1], didUnmount = reactExports.useRef(false);
  reactExports.useEffect(function() {
    return didUnmount.current = false, function() {
      didUnmount.current = true;
    };
  }, []);
  var previous = reactExports.useRef({ width: void 0, height: void 0 }), refCallback = useResolvedElement(reactExports.useCallback(function(element) {
    return (!resizeObserverRef.current || resizeObserverRef.current.box !== opts.box || resizeObserverRef.current.round !== round2) && (resizeObserverRef.current = { box: opts.box, round: round2, instance: new ResizeObserver(function(entries) {
      var entry = entries[0], boxProp = opts.box === "border-box" ? "borderBoxSize" : opts.box === "device-pixel-content-box" ? "devicePixelContentBoxSize" : "contentBoxSize", reportedWidth = extractSize(entry, boxProp, "inlineSize"), reportedHeight = extractSize(entry, boxProp, "blockSize"), newWidth = reportedWidth ? round2(reportedWidth) : void 0, newHeight = reportedHeight ? round2(reportedHeight) : void 0;
      if (previous.current.width !== newWidth || previous.current.height !== newHeight) {
        var newSize = { width: newWidth, height: newHeight };
        previous.current.width = newWidth, previous.current.height = newHeight, onResizeRef.current ? onResizeRef.current(newSize) : didUnmount.current || setSize(newSize);
      }
    }) }), resizeObserverRef.current.instance.observe(element, { box: opts.box }), function() {
      resizeObserverRef.current && resizeObserverRef.current.instance.unobserve(element);
    };
  }, [opts.box, round2]), opts.ref);
  return reactExports.useMemo(function() {
    return { ref: refCallback, width: size.width, height: size.height };
  }, [refCallback, size.width, size.height]);
}
var ZoomElementWrapper = newStyled.div(({ scale = 1, elementHeight }) => ({ height: elementHeight || "auto", transformOrigin: "top left", transform: `scale(${1 / scale})` }));
function ZoomElement({ scale, children }) {
  let componentWrapperRef = reactExports.useRef(null), [elementHeight, setElementHeight] = reactExports.useState(0), onResize = reactExports.useCallback(({ height }) => {
    height && setElementHeight(height / scale);
  }, [scale]);
  return reactExports.useEffect(() => {
    componentWrapperRef.current && setElementHeight(componentWrapperRef.current.getBoundingClientRect().height);
  }, [scale]), useResizeObserver({ ref: componentWrapperRef, onResize }), React.createElement(ZoomElementWrapper, { scale, elementHeight }, React.createElement("div", { ref: componentWrapperRef, className: "innerZoomElementWrapper" }, children));
}
var ZoomIFrame = class extends reactExports.Component {
  constructor() {
    super(...arguments);
    this.iframe = null;
  }
  componentDidMount() {
    let { iFrameRef } = this.props;
    this.iframe = iFrameRef.current;
  }
  shouldComponentUpdate(nextProps) {
    let { scale, active } = this.props;
    return scale !== nextProps.scale && this.setIframeInnerZoom(nextProps.scale), active !== nextProps.active && this.iframe.setAttribute("data-is-storybook", nextProps.active ? "true" : "false"), nextProps.children.props.src !== this.props.children.props.src;
  }
  setIframeInnerZoom(scale) {
    try {
      Object.assign(this.iframe.contentDocument.body.style, { width: `${scale * 100}%`, height: `${scale * 100}%`, transform: `scale(${1 / scale})`, transformOrigin: "top left" });
    } catch {
      this.setIframeZoom(scale);
    }
  }
  setIframeZoom(scale) {
    Object.assign(this.iframe.style, { width: `${scale * 100}%`, height: `${scale * 100}%`, transform: `scale(${1 / scale})`, transformOrigin: "top left" });
  }
  render() {
    let { children } = this.props;
    return React.createElement(React.Fragment, null, children);
  }
};
var Zoom = { Element: ZoomElement, IFrame: ZoomIFrame };
var { document: document2$1 } = global$2, ErrorName = newStyled.strong(({ theme }) => ({ color: theme.color.orange })), ErrorImportant = newStyled.strong(({ theme }) => ({ color: theme.color.ancillary, textDecoration: "underline" })), ErrorDetail = newStyled.em(({ theme }) => ({ color: theme.textMutedColor })), firstLineRegex = /(Error): (.*)\n/, linesRegexChromium = /at (?:(.*) )?\(?(.+)\)?/, linesRegexFirefox = /([^@]+)?(?:\/<)?@(.+)?/, linesRegexSafari = /([^@]+)?@(.+)?/, ErrorFormatter = ({ error }) => {
  if (!error) return React.createElement(reactExports.Fragment, null, "This error has no stack or message");
  if (!error.stack) return React.createElement(reactExports.Fragment, null, error.message || "This error has no stack or message");
  let input = error.stack.toString();
  input && error.message && !input.includes(error.message) && (input = `Error: ${error.message}

${input}`);
  let match2 = input.match(firstLineRegex);
  if (!match2) return React.createElement(reactExports.Fragment, null, input);
  let [, type, name] = match2, rawLines = input.split(/\n/).slice(1), [, ...lines] = rawLines.map((line) => {
    let result = line.match(linesRegexChromium) || line.match(linesRegexFirefox) || line.match(linesRegexSafari);
    return result ? { name: (result[1] || "").replace("/<", ""), location: result[2].replace(document2$1.location.origin, "") } : null;
  }).filter(Boolean);
  return React.createElement(reactExports.Fragment, null, React.createElement("span", null, type), ": ", React.createElement(ErrorName, null, name), React.createElement("br", null), lines.map((l2, i2) => l2.name ? React.createElement(reactExports.Fragment, { key: i2 }, "  ", "at ", React.createElement(ErrorImportant, null, l2.name), " (", React.createElement(ErrorDetail, null, l2.location), ")", React.createElement("br", null)) : React.createElement(reactExports.Fragment, { key: i2 }, "  ", "at ", React.createElement(ErrorDetail, null, l2.location), React.createElement("br", null))));
};
var Wrapper$1 = newStyled.label(({ theme }) => ({ display: "flex", borderBottom: `1px solid ${theme.appBorderColor}`, margin: "0 15px", padding: "8px 0", "&:last-child": { marginBottom: "3rem" } })), Label$1 = newStyled.span(({ theme }) => ({ minWidth: 100, fontWeight: theme.typography.weight.bold, marginRight: 15, display: "flex", justifyContent: "flex-start", alignItems: "center", lineHeight: "16px" })), Field = ({ label, children, ...props }) => React.createElement(Wrapper$1, { ...props }, label ? React.createElement(Label$1, null, React.createElement("span", null, label)) : null, children);
var index = reactExports.useLayoutEffect, use_isomorphic_layout_effect_browser_esm_default = index;
var useLatest = function(value2) {
  var ref = reactExports.useRef(value2);
  return use_isomorphic_layout_effect_browser_esm_default(function() {
    ref.current = value2;
  }), ref;
};
var updateRef = function(ref, value2) {
  if (typeof ref == "function") {
    ref(value2);
    return;
  }
  ref.current = value2;
}, useComposedRef = function(libRef, userRef) {
  var prevUserRef = reactExports.useRef();
  return reactExports.useCallback(function(instance) {
    libRef.current = instance, prevUserRef.current && updateRef(prevUserRef.current, null), prevUserRef.current = userRef, userRef && updateRef(userRef, instance);
  }, [userRef]);
}, use_composed_ref_esm_default = useComposedRef;
var HIDDEN_TEXTAREA_STYLE = { "min-height": "0", "max-height": "none", height: "0", visibility: "hidden", overflow: "hidden", position: "absolute", "z-index": "-1000", top: "0", right: "0" }, forceHiddenStyles = function(node) {
  Object.keys(HIDDEN_TEXTAREA_STYLE).forEach(function(key) {
    node.style.setProperty(key, HIDDEN_TEXTAREA_STYLE[key], "important");
  });
}, forceHiddenStyles$1 = forceHiddenStyles, hiddenTextarea = null, getHeight = function(node, sizingData) {
  var height = node.scrollHeight;
  return sizingData.sizingStyle.boxSizing === "border-box" ? height + sizingData.borderSize : height - sizingData.paddingSize;
};
function calculateNodeHeight(sizingData, value2, minRows, maxRows) {
  minRows === void 0 && (minRows = 1), maxRows === void 0 && (maxRows = 1 / 0), hiddenTextarea || (hiddenTextarea = document.createElement("textarea"), hiddenTextarea.setAttribute("tabindex", "-1"), hiddenTextarea.setAttribute("aria-hidden", "true"), forceHiddenStyles$1(hiddenTextarea)), hiddenTextarea.parentNode === null && document.body.appendChild(hiddenTextarea);
  var paddingSize = sizingData.paddingSize, borderSize = sizingData.borderSize, sizingStyle = sizingData.sizingStyle, boxSizing = sizingStyle.boxSizing;
  Object.keys(sizingStyle).forEach(function(_key) {
    var key = _key;
    hiddenTextarea.style[key] = sizingStyle[key];
  }), forceHiddenStyles$1(hiddenTextarea), hiddenTextarea.value = value2;
  var height = getHeight(hiddenTextarea, sizingData);
  hiddenTextarea.value = value2, height = getHeight(hiddenTextarea, sizingData), hiddenTextarea.value = "x";
  var rowHeight = hiddenTextarea.scrollHeight - paddingSize, minHeight = rowHeight * minRows;
  boxSizing === "border-box" && (minHeight = minHeight + paddingSize + borderSize), height = Math.max(minHeight, height);
  var maxHeight = rowHeight * maxRows;
  return boxSizing === "border-box" && (maxHeight = maxHeight + paddingSize + borderSize), height = Math.min(maxHeight, height), [height, rowHeight];
}
var noop$2 = function() {
}, pick = function(props, obj) {
  return props.reduce(function(acc, prop) {
    return acc[prop] = obj[prop], acc;
  }, {});
}, SIZING_STYLE = ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "boxSizing", "fontFamily", "fontSize", "fontStyle", "fontWeight", "letterSpacing", "lineHeight", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "tabSize", "textIndent", "textRendering", "textTransform", "width", "wordBreak"], isIE = !!document.documentElement.currentStyle, getSizingData = function(node) {
  var style = window.getComputedStyle(node);
  if (style === null) return null;
  var sizingStyle = pick(SIZING_STYLE, style), boxSizing = sizingStyle.boxSizing;
  if (boxSizing === "") return null;
  isIE && boxSizing === "border-box" && (sizingStyle.width = parseFloat(sizingStyle.width) + parseFloat(sizingStyle.borderRightWidth) + parseFloat(sizingStyle.borderLeftWidth) + parseFloat(sizingStyle.paddingRight) + parseFloat(sizingStyle.paddingLeft) + "px");
  var paddingSize = parseFloat(sizingStyle.paddingBottom) + parseFloat(sizingStyle.paddingTop), borderSize = parseFloat(sizingStyle.borderBottomWidth) + parseFloat(sizingStyle.borderTopWidth);
  return { sizingStyle, paddingSize, borderSize };
}, getSizingData$1 = getSizingData;
function useListener(target, type, listener) {
  var latestListener = useLatest(listener);
  reactExports.useLayoutEffect(function() {
    var handler = function(ev) {
      return latestListener.current(ev);
    };
    if (target) return target.addEventListener(type, handler), function() {
      return target.removeEventListener(type, handler);
    };
  }, []);
}
var useWindowResizeListener = function(listener) {
  useListener(window, "resize", listener);
}, useFontsLoadedListener = function(listener) {
  useListener(document.fonts, "loadingdone", listener);
}, _excluded = ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"], TextareaAutosize = function(_ref, userRef) {
  var cacheMeasurements = _ref.cacheMeasurements, maxRows = _ref.maxRows, minRows = _ref.minRows, _ref$onChange = _ref.onChange, onChange = _ref$onChange === void 0 ? noop$2 : _ref$onChange, _ref$onHeightChange = _ref.onHeightChange, onHeightChange = _ref$onHeightChange === void 0 ? noop$2 : _ref$onHeightChange, props = _objectWithoutPropertiesLoose(_ref, _excluded), isControlled = props.value !== void 0, libRef = reactExports.useRef(null), ref = use_composed_ref_esm_default(libRef, userRef), heightRef = reactExports.useRef(0), measurementsCacheRef = reactExports.useRef(), resizeTextarea = function() {
    var node = libRef.current, nodeSizingData = cacheMeasurements && measurementsCacheRef.current ? measurementsCacheRef.current : getSizingData$1(node);
    if (nodeSizingData) {
      measurementsCacheRef.current = nodeSizingData;
      var _calculateNodeHeight = calculateNodeHeight(nodeSizingData, node.value || node.placeholder || "x", minRows, maxRows), height = _calculateNodeHeight[0], rowHeight = _calculateNodeHeight[1];
      heightRef.current !== height && (heightRef.current = height, node.style.setProperty("height", height + "px", "important"), onHeightChange(height, { rowHeight }));
    }
  }, handleChange = function(event) {
    isControlled || resizeTextarea(), onChange(event);
  };
  return reactExports.useLayoutEffect(resizeTextarea), useWindowResizeListener(resizeTextarea), useFontsLoadedListener(resizeTextarea), reactExports.createElement("textarea", _extends({}, props, { onChange: handleChange, ref }));
}, index2 = reactExports.forwardRef(TextareaAutosize);
var styleResets$1 = { appearance: "none", border: "0 none", boxSizing: "inherit", display: " block", margin: " 0", background: "transparent", padding: 0, fontSize: "inherit", position: "relative" }, styles = ({ theme }) => ({ ...styleResets$1, transition: "box-shadow 200ms ease-out, opacity 200ms ease-out", color: theme.input.color || "inherit", background: theme.input.background, boxShadow: `${theme.input.border} 0 0 0 1px inset`, borderRadius: theme.input.borderRadius, fontSize: theme.typography.size.s2 - 1, lineHeight: "20px", padding: "6px 10px", boxSizing: "border-box", height: 32, '&[type="file"]': { height: "auto" }, "&:focus": { boxShadow: `${theme.color.secondary} 0 0 0 1px inset`, outline: "none" }, "&[disabled]": { cursor: "not-allowed", opacity: 0.5 }, "&:-webkit-autofill": { WebkitBoxShadow: `0 0 0 3em ${theme.color.lightest} inset` }, "&::placeholder": { color: theme.textMutedColor, opacity: 1 } }), sizes = ({ size }) => {
  switch (size) {
    case "100%":
      return { width: "100%" };
    case "flex":
      return { flex: 1 };
    case "auto":
    default:
      return { display: "inline" };
  }
}, alignment = ({ align }) => {
  switch (align) {
    case "end":
      return { textAlign: "right" };
    case "center":
      return { textAlign: "center" };
    case "start":
    default:
      return { textAlign: "left" };
  }
}, validation = ({ valid, theme }) => {
  switch (valid) {
    case "valid":
      return { boxShadow: `${theme.color.positive} 0 0 0 1px inset !important` };
    case "error":
      return { boxShadow: `${theme.color.negative} 0 0 0 1px inset !important` };
    case "warn":
      return { boxShadow: `${theme.color.warning} 0 0 0 1px inset` };
    case void 0:
    case null:
    default:
      return {};
  }
}, Input$1 = Object.assign(newStyled(reactExports.forwardRef(function({ size, valid, align, ...props }, ref) {
  return React.createElement("input", { ...props, ref });
}))(styles, sizes, alignment, validation, { minHeight: 32 }), { displayName: "Input" }), Select = Object.assign(newStyled(reactExports.forwardRef(function({ size, valid, align, ...props }, ref) {
  return React.createElement("select", { ...props, ref });
}))(styles, sizes, validation, { height: 32, userSelect: "none", paddingRight: 20, appearance: "menulist" }), { displayName: "Select" }), Textarea = Object.assign(newStyled(reactExports.forwardRef(function({ size, valid, align, ...props }, ref) {
  return React.createElement(index2, { ...props, ref });
}))(styles, sizes, alignment, validation, ({ height = 400 }) => ({ overflow: "visible", maxHeight: height })), { displayName: "Textarea" });
var Form = Object.assign(newStyled.form({ boxSizing: "border-box", width: "100%" }), { Field, Input: Input$1, Select, Textarea, Button });
var LazyWithTooltip = reactExports.lazy(() => __vitePreload(() => import("./WithTooltip-KJL26V4Q-DlGiYQlO.js"), true ? __vite__mapDeps([12,1,2,3,4,5,6,7,8,9,10]) : void 0, import.meta.url).then((mod) => ({ default: mod.WithTooltip }))), WithTooltip = (props) => React.createElement(reactExports.Suspense, { fallback: React.createElement("div", null) }, React.createElement(LazyWithTooltip, { ...props })), LazyWithTooltipPure = reactExports.lazy(() => __vitePreload(() => import("./WithTooltip-KJL26V4Q-DlGiYQlO.js"), true ? __vite__mapDeps([12,1,2,3,4,5,6,7,8,9,10]) : void 0, import.meta.url).then((mod) => ({ default: mod.WithTooltipPure }))), WithTooltipPure = (props) => React.createElement(reactExports.Suspense, { fallback: React.createElement("div", null) }, React.createElement(LazyWithTooltipPure, { ...props }));
var Title4 = newStyled.div(({ theme }) => ({ fontWeight: theme.typography.weight.bold })), Desc2 = newStyled.span(), Links$1 = newStyled.div(({ theme }) => ({ marginTop: 8, textAlign: "center", "> *": { margin: "0 8px", fontWeight: theme.typography.weight.bold } })), Message2 = newStyled.div(({ theme }) => ({ color: theme.color.defaultText, lineHeight: "18px" })), MessageWrapper = newStyled.div({ padding: 15, width: 280, boxSizing: "border-box" }), TooltipMessage = ({ title, desc, links }) => React.createElement(MessageWrapper, null, React.createElement(Message2, null, title && React.createElement(Title4, null, title), desc && React.createElement(Desc2, null, desc)), links && React.createElement(Links$1, null, links.map(({ title: linkTitle, ...other }) => React.createElement(Link2, { ...other, key: linkTitle }, linkTitle))));
var Note = newStyled.div(({ theme }) => ({ padding: "2px 6px", lineHeight: "16px", fontSize: 10, fontWeight: theme.typography.weight.bold, color: theme.color.lightest, boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.3)", borderRadius: 4, whiteSpace: "nowrap", pointerEvents: "none", zIndex: -1, background: theme.base === "light" ? "rgba(60, 60, 60, 0.9)" : "rgba(0, 0, 0, 0.95)", margin: 6 })), TooltipNote = ({ note, ...props }) => React.createElement(Note, { ...props }, note);
var Title5 = newStyled(({ active, loading, disabled, ...rest }) => React.createElement("span", { ...rest }))(({ theme }) => ({ color: theme.color.defaultText, fontWeight: theme.typography.weight.regular }), ({ active, theme }) => active ? { color: theme.color.secondary, fontWeight: theme.typography.weight.bold } : {}, ({ loading, theme }) => loading ? { display: "inline-block", flex: "none", ...theme.animation.inlineGlow } : {}, ({ disabled, theme }) => disabled ? { color: curriedTransparentize$1$1(0.7, theme.color.defaultText) } : {}), Right = newStyled.span({ display: "flex", "& svg": { height: 12, width: 12, margin: "3px 0", verticalAlign: "top" }, "& path": { fill: "inherit" } }), Center = newStyled.span({ flex: 1, textAlign: "left", display: "flex", flexDirection: "column" }, ({ isIndented }) => isIndented ? { marginLeft: 24 } : {}), CenterText = newStyled.span(({ theme }) => ({ fontSize: "11px", lineHeight: "14px" }), ({ active, theme }) => active ? { color: theme.color.secondary } : {}, ({ theme, disabled }) => disabled ? { color: theme.textMutedColor } : {}), Left = newStyled.span(({ active, theme }) => active ? { color: theme.color.secondary } : {}, () => ({ display: "flex", maxWidth: 14 })), Item = newStyled.a(({ theme }) => ({ fontSize: theme.typography.size.s1, transition: "all 150ms ease-out", color: theme.color.dark, textDecoration: "none", cursor: "pointer", justifyContent: "space-between", lineHeight: "18px", padding: "7px 10px", display: "flex", alignItems: "center", "& > * + *": { paddingLeft: 10 }, "&:hover": { background: theme.background.hoverable }, "&:hover svg": { opacity: 1 } }), ({ disabled }) => disabled ? { cursor: "not-allowed" } : {}), getItemProps = memoize$1(100)((onClick, href, LinkWrapper) => {
  let result = {};
  return onClick && Object.assign(result, { onClick }), href && Object.assign(result, { href }), LinkWrapper && href && Object.assign(result, { to: href, as: LinkWrapper }), result;
}), ListItem = ({ loading = false, title = React.createElement("span", null, "Loading state"), center = null, right: right2 = null, active = false, disabled = false, isIndented, href = null, onClick = null, icon, LinkWrapper = null, ...rest }) => {
  let itemProps = getItemProps(onClick, href, LinkWrapper), commonProps = { active, disabled };
  return React.createElement(Item, { ...commonProps, ...rest, ...itemProps }, icon && React.createElement(Left, { ...commonProps }, icon), title || center ? React.createElement(Center, { isIndented: !icon && isIndented }, title && React.createElement(Title5, { ...commonProps, loading }, title), center && React.createElement(CenterText, { ...commonProps }, center)) : null, right2 && React.createElement(Right, { ...commonProps }, right2));
}, ListItem_default = ListItem;
var List = newStyled.div({ minWidth: 180, overflow: "hidden", overflowY: "auto", maxHeight: 15.5 * 32 }, ({ theme }) => ({ borderRadius: theme.appBorderRadius })), Item2 = (props) => {
  let { LinkWrapper, onClick: onClickFromProps, id, isIndented, ...rest } = props, { title, href, active } = rest, onClick = reactExports.useCallback((event) => {
    onClickFromProps(event, rest);
  }, [onClickFromProps]), hasOnClick = !!onClickFromProps;
  return React.createElement(ListItem_default, { title, active, href, id: `list-item-${id}`, LinkWrapper, isIndented, ...rest, ...hasOnClick ? { onClick } : {} });
}, TooltipLinkList = ({ links, LinkWrapper = null }) => {
  let hasIcon = links.some((link) => link.icon);
  return React.createElement(List, null, links.map(({ isGatsby, ...p2 }) => React.createElement(Item2, { key: p2.id, LinkWrapper: isGatsby ? LinkWrapper : null, isIndented: hasIcon, ...p2 })));
};
var isLink = (obj) => typeof obj.props.href == "string", isButton = (obj) => typeof obj.props.href != "string";
function ForwardRefFunction({ children, ...rest }, ref) {
  let o2 = { props: rest, ref };
  if (isLink(o2)) return React.createElement("a", { ref: o2.ref, ...o2.props }, children);
  if (isButton(o2)) return React.createElement("button", { ref: o2.ref, type: "button", ...o2.props }, children);
  throw new Error("invalid props");
}
var ButtonOrLink = reactExports.forwardRef(ForwardRefFunction);
ButtonOrLink.displayName = "ButtonOrLink";
var TabButton = newStyled(ButtonOrLink, { shouldForwardProp: isPropValid })({ whiteSpace: "normal", display: "inline-flex", overflow: "hidden", verticalAlign: "top", justifyContent: "center", alignItems: "center", textAlign: "center", textDecoration: "none", "&:empty": { display: "none" }, "&[hidden]": { display: "none" } }, ({ theme }) => ({ padding: "0 15px", transition: "color 0.2s linear, border-bottom-color 0.2s linear", height: 40, lineHeight: "12px", cursor: "pointer", background: "transparent", border: "0 solid transparent", borderTop: "3px solid transparent", borderBottom: "3px solid transparent", fontWeight: "bold", fontSize: 13, "&:focus": { outline: "0 none", borderBottomColor: theme.barSelectedColor } }), ({ active, textColor, theme }) => active ? { color: textColor || theme.barSelectedColor, borderBottomColor: theme.barSelectedColor } : { color: textColor || theme.barTextColor, borderBottomColor: "transparent", "&:hover": { color: theme.barHoverColor } });
TabButton.displayName = "TabButton";
var IconPlaceholder$1 = newStyled.div(({ theme }) => ({ width: 14, height: 14, backgroundColor: theme.appBorderColor, animation: `${theme.animation.glow} 1.5s ease-in-out infinite` })), IconButtonSkeletonWrapper = newStyled.div(() => ({ marginTop: 6, padding: 7, height: 28 })), IconButtonSkeleton = () => React.createElement(IconButtonSkeletonWrapper, null, React.createElement(IconPlaceholder$1, null));
var Side = newStyled.div({ display: "flex", whiteSpace: "nowrap", flexBasis: "auto", marginLeft: 3, marginRight: 3 }, ({ scrollable }) => scrollable ? { flexShrink: 0 } : {}, ({ left: left2 }) => left2 ? { "& > *": { marginLeft: 4 } } : {}, ({ right: right2 }) => right2 ? { marginLeft: 30, "& > *": { marginRight: 4 } } : {});
Side.displayName = "Side";
var UnstyledBar = ({ children, className, scrollable }) => scrollable ? React.createElement(ScrollArea, { vertical: false, className }, children) : React.createElement("div", { className }, children), Bar$1 = newStyled(UnstyledBar)(({ theme, scrollable = true }) => ({ color: theme.barTextColor, width: "100%", height: 40, flexShrink: 0, overflow: scrollable ? "auto" : "hidden", overflowY: "hidden" }), ({ theme, border = false }) => border ? { boxShadow: `${theme.appBorderColor}  0 -1px 0 0 inset`, background: theme.barBg } : {});
Bar$1.displayName = "Bar";
var BarInner = newStyled.div(({ bgColor }) => ({ display: "flex", justifyContent: "space-between", position: "relative", flexWrap: "nowrap", flexShrink: 0, height: 40, backgroundColor: bgColor || "" })), FlexBar = ({ children, backgroundColor, className, ...rest }) => {
  let [left2, right2] = reactExports.Children.toArray(children);
  return React.createElement(Bar$1, { className: `sb-bar ${className}`, ...rest }, React.createElement(BarInner, { bgColor: backgroundColor }, React.createElement(Side, { scrollable: rest.scrollable, left: true }, left2), right2 ? React.createElement(Side, { right: true }, right2) : null));
};
FlexBar.displayName = "FlexBar";
var VisuallyHidden = newStyled.div(({ active }) => active ? { display: "block" } : { display: "none" }), childrenToList = (children) => reactExports.Children.toArray(children).map(({ props: { title, id, color: color2, children: childrenOfChild } }) => {
  let content = Array.isArray(childrenOfChild) ? childrenOfChild[0] : childrenOfChild;
  return { title, id, ...color2 ? { color: color2 } : {}, render: typeof content == "function" ? content : ({ active }) => React.createElement(VisuallyHidden, { active, role: "tabpanel" }, content) };
});
var CollapseIcon = newStyled.span(({ theme, isActive }) => ({ display: "inline-block", width: 0, height: 0, marginLeft: 8, color: isActive ? theme.color.secondary : theme.color.mediumdark, borderRight: "3px solid transparent", borderLeft: "3px solid transparent", borderTop: "3px solid", transition: "transform .1s ease-out" })), AddonButton = newStyled(TabButton)(({ active, theme, preActive }) => `
    color: ${preActive || active ? theme.barSelectedColor : theme.barTextColor};
    .addon-collapsible-icon {
      color: ${preActive || active ? theme.barSelectedColor : theme.barTextColor};
    }
    &:hover {
      color: ${theme.barHoverColor};
      .addon-collapsible-icon {
        color: ${theme.barHoverColor};
      }
    }
  `);
function useList(list) {
  let tabBarRef = reactExports.useRef(), addonsRef = reactExports.useRef(), tabRefs = reactExports.useRef(/* @__PURE__ */ new Map()), { width: tabBarWidth = 1 } = useResizeObserver({ ref: tabBarRef }), [visibleList, setVisibleList] = reactExports.useState(list), [invisibleList, setInvisibleList] = reactExports.useState([]), previousList = reactExports.useRef(list), AddonTab = reactExports.useCallback(({ menuName, actions }) => {
    let isAddonsActive = invisibleList.some(({ active }) => active), [isTooltipVisible, setTooltipVisible] = reactExports.useState(false);
    return React.createElement(React.Fragment, null, React.createElement(WithToolTipState, { interactive: true, visible: isTooltipVisible, onVisibleChange: setTooltipVisible, placement: "bottom", delayHide: 100, tooltip: React.createElement(TooltipLinkList, { links: invisibleList.map(({ title, id, color: color2, active }) => ({ id, title, color: color2, active, onClick: (e2) => {
      e2.preventDefault(), actions.onSelect(id);
    } })) }) }, React.createElement(AddonButton, { ref: addonsRef, active: isAddonsActive, preActive: isTooltipVisible, style: { visibility: invisibleList.length ? "visible" : "hidden" }, "aria-hidden": !invisibleList.length, className: "tabbutton", type: "button", role: "tab" }, menuName, React.createElement(CollapseIcon, { className: "addon-collapsible-icon", isActive: isAddonsActive || isTooltipVisible }))), invisibleList.map(({ title, id, color: color2 }, index3) => {
      let indexId = `index-${index3}`;
      return React.createElement(TabButton, { id: `tabbutton-${O$1(id) ?? indexId}`, style: { visibility: "hidden" }, "aria-hidden": true, tabIndex: -1, ref: (ref) => {
        tabRefs.current.set(id, ref);
      }, className: "tabbutton", type: "button", key: id, textColor: color2, role: "tab" }, title);
    }));
  }, [invisibleList]), setTabLists = reactExports.useCallback(() => {
    if (!tabBarRef.current || !addonsRef.current) return;
    let { x: x2, width } = tabBarRef.current.getBoundingClientRect(), { width: widthAddonsTab } = addonsRef.current.getBoundingClientRect(), rightBorder = invisibleList.length ? x2 + width - widthAddonsTab : x2 + width, newVisibleList = [], widthSum = 0, newInvisibleList = list.filter((item) => {
      let { id } = item, tabButton = tabRefs.current.get(id), { width: tabWidth = 0 } = (tabButton == null ? void 0 : tabButton.getBoundingClientRect()) || {}, crossBorder = x2 + widthSum + tabWidth > rightBorder;
      return (!crossBorder || !tabButton) && newVisibleList.push(item), widthSum += tabWidth, crossBorder;
    });
    (newVisibleList.length !== visibleList.length || previousList.current !== list) && (setVisibleList(newVisibleList), setInvisibleList(newInvisibleList), previousList.current = list);
  }, [invisibleList.length, list, visibleList]);
  return reactExports.useLayoutEffect(setTabLists, [setTabLists, tabBarWidth]), { tabRefs, addonsRef, tabBarRef, visibleList, invisibleList, AddonTab };
}
var Wrapper2$1 = newStyled.div(({ theme }) => ({ height: "100%", display: "flex", padding: 30, alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 15, background: theme.background.content })), Content3 = newStyled.div({ display: "flex", flexDirection: "column", gap: 4, maxWidth: 415 }), Title6 = newStyled.div(({ theme }) => ({ fontWeight: theme.typography.weight.bold, fontSize: theme.typography.size.s2 - 1, textAlign: "center", color: theme.textColor })), Description3 = newStyled.div(({ theme }) => ({ fontWeight: theme.typography.weight.regular, fontSize: theme.typography.size.s2 - 1, textAlign: "center", color: theme.textMutedColor })), EmptyTabContent = ({ title, description, footer }) => React.createElement(Wrapper2$1, null, React.createElement(Content3, null, React.createElement(Title6, null, title), description && React.createElement(Description3, null, description)), footer);
var ignoreSsrWarning2 = "/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */", Wrapper3$1 = newStyled.div(({ theme, bordered }) => bordered ? { backgroundClip: "padding-box", border: `1px solid ${theme.appBorderColor}`, borderRadius: theme.appBorderRadius, overflow: "hidden", boxSizing: "border-box" } : {}, ({ absolute }) => absolute ? { width: "100%", height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" } : { display: "block" }), TabBar = newStyled.div({ overflow: "hidden", "&:first-of-type": { marginLeft: -3 }, whiteSpace: "nowrap", flexGrow: 1 });
TabBar.displayName = "TabBar";
var Content4 = newStyled.div({ display: "block", position: "relative" }, ({ theme }) => ({ fontSize: theme.typography.size.s2 - 1, background: theme.background.content }), ({ bordered, theme }) => bordered ? { borderRadius: `0 0 ${theme.appBorderRadius - 1}px ${theme.appBorderRadius - 1}px` } : {}, ({ absolute, bordered }) => absolute ? { height: `calc(100% - ${bordered ? 42 : 40}px)`, position: "absolute", left: 0 + (bordered ? 1 : 0), right: 0 + (bordered ? 1 : 0), bottom: 0 + (bordered ? 1 : 0), top: 40 + (bordered ? 1 : 0), overflow: "auto", [`& > *:first-child${ignoreSsrWarning2}`]: { position: "absolute", left: 0 + (bordered ? 1 : 0), right: 0 + (bordered ? 1 : 0), bottom: 0 + (bordered ? 1 : 0), top: 0 + (bordered ? 1 : 0), height: `calc(100% - ${bordered ? 2 : 0}px)`, overflow: "auto" } } : {}), TabWrapper = ({ active, render, children }) => React.createElement(VisuallyHidden, { active }, render ? render() : children);
var Tabs = reactExports.memo(({ children, selected = null, actions, absolute = false, bordered = false, tools = null, backgroundColor, id: htmlId = null, menuName = "Tabs", emptyState, showToolsWhenEmpty }) => {
  let list = reactExports.useMemo(() => childrenToList(children).map((i2, index3) => ({ ...i2, active: selected ? i2.id === selected : index3 === 0 })), [children, selected]), { visibleList, tabBarRef, tabRefs, AddonTab } = useList(list), EmptyContent = emptyState ?? React.createElement(EmptyTabContent, { title: "Nothing found" });
  return !showToolsWhenEmpty && list.length === 0 ? EmptyContent : React.createElement(Wrapper3$1, { absolute, bordered, id: htmlId }, React.createElement(FlexBar, { scrollable: false, border: true, backgroundColor }, React.createElement(TabBar, { style: { whiteSpace: "normal" }, ref: tabBarRef, role: "tablist" }, visibleList.map(({ title, id, active, color: color2 }, index3) => {
    let indexId = `index-${index3}`;
    return React.createElement(TabButton, { id: `tabbutton-${O$1(id) ?? indexId}`, ref: (ref) => {
      tabRefs.current.set(id, ref);
    }, className: `tabbutton ${active ? "tabbutton-active" : ""}`, type: "button", key: id, active, textColor: color2, onClick: (e2) => {
      e2.preventDefault(), actions.onSelect(id);
    }, role: "tab" }, typeof title == "function" ? React.createElement("title", null) : title);
  }), React.createElement(AddonTab, { menuName, actions })), tools), React.createElement(Content4, { id: "panel-tab-content", bordered, absolute }, list.length ? list.map(({ id, active, render }) => React.createElement(render, { key: id, active }, null)) : EmptyContent));
});
Tabs.displayName = "Tabs";
var TabsState = class extends reactExports.Component {
  constructor(props) {
    super(props);
    this.handlers = { onSelect: (id) => this.setState({ selected: id }) };
    this.state = { selected: props.initial };
  }
  render() {
    let { bordered = false, absolute = false, children, backgroundColor, menuName } = this.props, { selected } = this.state;
    return React.createElement(Tabs, { bordered, absolute, selected, backgroundColor, menuName, actions: this.handlers }, children);
  }
};
TabsState.defaultProps = { children: [], initial: null, absolute: false, bordered: false, backgroundColor: "", menuName: void 0 };
var Separator = newStyled.span(({ theme }) => ({ width: 1, height: 20, background: theme.appBorderColor, marginLeft: 2, marginRight: 2 }), ({ force }) => force ? {} : { "& + &": { display: "none" } });
Separator.displayName = "Separator";
var interleaveSeparators = (list) => list.reduce((acc, item, index3) => item ? React.createElement(reactExports.Fragment, { key: item.id || item.key || `f-${index3}` }, acc, index3 > 0 ? React.createElement(Separator, { key: `s-${index3}` }) : null, item.render() || item) : acc, null);
var usePrevious = (value2) => {
  let ref = reactExports.useRef();
  return reactExports.useEffect(() => {
    ref.current = value2;
  }, [value2]), ref.current;
}, useUpdate = (update, value2) => {
  let previousValue = usePrevious(value2);
  return update ? value2 : previousValue;
}, AddonPanel = ({ active, children }) => React.createElement("div", { hidden: !active }, useUpdate(active, children));
var NEW_ICON_MAP = StorybookIcons, Svg = newStyled.svg`
  display: inline-block;
  shape-rendering: inherit;
  vertical-align: middle;
  fill: currentColor;
  path {
    fill: currentColor;
  }
`, Icons = ({ icon, useSymbol, __suppressDeprecationWarning = false, ...props }) => {
  __suppressDeprecationWarning || deprecate$1(`Use of the deprecated Icons ${`(${icon})` || ""} component detected. Please use the @storybook/icons component directly. For more informations, see the migration notes at https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#icons-is-deprecated`);
  let findIcon = icons[icon] || null;
  if (!findIcon) return logger$1.warn(`Use of an unknown prop ${`(${icon})` || ""} in the Icons component. The Icons component is deprecated. Please use the @storybook/icons component directly. For more informations, see the migration notes at https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#icons-is-deprecated`), null;
  let Icon = NEW_ICON_MAP[findIcon];
  return React.createElement(Icon, { ...props });
}, Symbols = reactExports.memo(function({ icons: keys2 = Object.keys(icons) }) {
  return React.createElement(Svg, { viewBox: "0 0 14 14", style: { position: "absolute", width: 0, height: 0 }, "data-chromatic": "ignore" }, keys2.map((key) => React.createElement("symbol", { id: `icon--${key}`, key }, icons[key])));
}), icons = { user: "UserIcon", useralt: "UserAltIcon", useradd: "UserAddIcon", users: "UsersIcon", profile: "ProfileIcon", facehappy: "FaceHappyIcon", faceneutral: "FaceNeutralIcon", facesad: "FaceSadIcon", accessibility: "AccessibilityIcon", accessibilityalt: "AccessibilityAltIcon", arrowup: "ChevronUpIcon", arrowdown: "ChevronDownIcon", arrowleft: "ChevronLeftIcon", arrowright: "ChevronRightIcon", arrowupalt: "ArrowUpIcon", arrowdownalt: "ArrowDownIcon", arrowleftalt: "ArrowLeftIcon", arrowrightalt: "ArrowRightIcon", expandalt: "ExpandAltIcon", collapse: "CollapseIcon", expand: "ExpandIcon", unfold: "UnfoldIcon", transfer: "TransferIcon", redirect: "RedirectIcon", undo: "UndoIcon", reply: "ReplyIcon", sync: "SyncIcon", upload: "UploadIcon", download: "DownloadIcon", back: "BackIcon", proceed: "ProceedIcon", refresh: "RefreshIcon", globe: "GlobeIcon", compass: "CompassIcon", location: "LocationIcon", pin: "PinIcon", time: "TimeIcon", dashboard: "DashboardIcon", timer: "TimerIcon", home: "HomeIcon", admin: "AdminIcon", info: "InfoIcon", question: "QuestionIcon", support: "SupportIcon", alert: "AlertIcon", email: "EmailIcon", phone: "PhoneIcon", link: "LinkIcon", unlink: "LinkBrokenIcon", bell: "BellIcon", rss: "RSSIcon", sharealt: "ShareAltIcon", share: "ShareIcon", circle: "CircleIcon", circlehollow: "CircleHollowIcon", bookmarkhollow: "BookmarkHollowIcon", bookmark: "BookmarkIcon", hearthollow: "HeartHollowIcon", heart: "HeartIcon", starhollow: "StarHollowIcon", star: "StarIcon", certificate: "CertificateIcon", verified: "VerifiedIcon", thumbsup: "ThumbsUpIcon", shield: "ShieldIcon", basket: "BasketIcon", beaker: "BeakerIcon", hourglass: "HourglassIcon", flag: "FlagIcon", cloudhollow: "CloudHollowIcon", edit: "EditIcon", cog: "CogIcon", nut: "NutIcon", wrench: "WrenchIcon", ellipsis: "EllipsisIcon", check: "CheckIcon", form: "FormIcon", batchdeny: "BatchDenyIcon", batchaccept: "BatchAcceptIcon", controls: "ControlsIcon", plus: "PlusIcon", closeAlt: "CloseAltIcon", cross: "CrossIcon", trash: "TrashIcon", pinalt: "PinAltIcon", unpin: "UnpinIcon", add: "AddIcon", subtract: "SubtractIcon", close: "CloseIcon", delete: "DeleteIcon", passed: "PassedIcon", changed: "ChangedIcon", failed: "FailedIcon", clear: "ClearIcon", comment: "CommentIcon", commentadd: "CommentAddIcon", requestchange: "RequestChangeIcon", comments: "CommentsIcon", lock: "LockIcon", unlock: "UnlockIcon", key: "KeyIcon", outbox: "OutboxIcon", credit: "CreditIcon", button: "ButtonIcon", type: "TypeIcon", pointerdefault: "PointerDefaultIcon", pointerhand: "PointerHandIcon", browser: "BrowserIcon", tablet: "TabletIcon", mobile: "MobileIcon", watch: "WatchIcon", sidebar: "SidebarIcon", sidebaralt: "SidebarAltIcon", sidebaralttoggle: "SidebarAltToggleIcon", sidebartoggle: "SidebarToggleIcon", bottombar: "BottomBarIcon", bottombartoggle: "BottomBarToggleIcon", cpu: "CPUIcon", database: "DatabaseIcon", memory: "MemoryIcon", structure: "StructureIcon", box: "BoxIcon", power: "PowerIcon", photo: "PhotoIcon", component: "ComponentIcon", grid: "GridIcon", outline: "OutlineIcon", photodrag: "PhotoDragIcon", search: "SearchIcon", zoom: "ZoomIcon", zoomout: "ZoomOutIcon", zoomreset: "ZoomResetIcon", eye: "EyeIcon", eyeclose: "EyeCloseIcon", lightning: "LightningIcon", lightningoff: "LightningOffIcon", contrast: "ContrastIcon", switchalt: "SwitchAltIcon", mirror: "MirrorIcon", grow: "GrowIcon", paintbrush: "PaintBrushIcon", ruler: "RulerIcon", stop: "StopIcon", camera: "CameraIcon", video: "VideoIcon", speaker: "SpeakerIcon", play: "PlayIcon", playback: "PlayBackIcon", playnext: "PlayNextIcon", rewind: "RewindIcon", fastforward: "FastForwardIcon", stopalt: "StopAltIcon", sidebyside: "SideBySideIcon", stacked: "StackedIcon", sun: "SunIcon", moon: "MoonIcon", book: "BookIcon", document: "DocumentIcon", copy: "CopyIcon", category: "CategoryIcon", folder: "FolderIcon", print: "PrintIcon", graphline: "GraphLineIcon", calendar: "CalendarIcon", graphbar: "GraphBarIcon", menu: "MenuIcon", menualt: "MenuIcon", filter: "FilterIcon", docchart: "DocChartIcon", doclist: "DocListIcon", markup: "MarkupIcon", bold: "BoldIcon", paperclip: "PaperClipIcon", listordered: "ListOrderedIcon", listunordered: "ListUnorderedIcon", paragraph: "ParagraphIcon", markdown: "MarkdownIcon", repository: "RepoIcon", commit: "CommitIcon", branch: "BranchIcon", pullrequest: "PullRequestIcon", merge: "MergeIcon", apple: "AppleIcon", linux: "LinuxIcon", ubuntu: "UbuntuIcon", windows: "WindowsIcon", storybook: "StorybookIcon", azuredevops: "AzureDevOpsIcon", bitbucket: "BitbucketIcon", chrome: "ChromeIcon", chromatic: "ChromaticIcon", componentdriven: "ComponentDrivenIcon", discord: "DiscordIcon", facebook: "FacebookIcon", figma: "FigmaIcon", gdrive: "GDriveIcon", github: "GithubIcon", gitlab: "GitlabIcon", google: "GoogleIcon", graphql: "GraphqlIcon", medium: "MediumIcon", redux: "ReduxIcon", twitter: "TwitterIcon", youtube: "YoutubeIcon", vscode: "VSCodeIcon" };
var StorybookLogo = ({ alt, ...props }) => React.createElement("svg", { width: "200px", height: "40px", viewBox: "0 0 200 40", ...props, role: "img" }, alt ? React.createElement("title", null, alt) : null, React.createElement("defs", null, React.createElement("path", { d: "M1.2 36.9L0 3.9c0-1.1.8-2 1.9-2.1l28-1.8a2 2 0 0 1 2.2 1.9 2 2 0 0 1 0 .1v36a2 2 0 0 1-2 2 2 2 0 0 1-.1 0L3.2 38.8a2 2 0 0 1-2-2z", id: "a" })), React.createElement("g", { fill: "none", fillRule: "evenodd" }, React.createElement("path", { d: "M53.3 31.7c-1.7 0-3.4-.3-5-.7-1.5-.5-2.8-1.1-3.9-2l1.6-3.5c2.2 1.5 4.6 2.3 7.3 2.3 1.5 0 2.5-.2 3.3-.7.7-.5 1.1-1 1.1-1.9 0-.7-.3-1.3-1-1.7s-2-.8-3.7-1.2c-2-.4-3.6-.9-4.8-1.5-1.1-.5-2-1.2-2.6-2-.5-1-.8-2-.8-3.2 0-1.4.4-2.6 1.2-3.6.7-1.1 1.8-2 3.2-2.6 1.3-.6 2.9-.9 4.7-.9 1.6 0 3.1.3 4.6.7 1.5.5 2.7 1.1 3.5 2l-1.6 3.5c-2-1.5-4.2-2.3-6.5-2.3-1.3 0-2.3.2-3 .8-.8.5-1.2 1.1-1.2 2 0 .5.2 1 .5 1.3.2.3.7.6 1.4.9l2.9.8c2.9.6 5 1.4 6.2 2.4a5 5 0 0 1 2 4.2 6 6 0 0 1-2.5 5c-1.7 1.2-4 1.9-7 1.9zm21-3.6l1.4-.1-.2 3.5-1.9.1c-2.4 0-4.1-.5-5.2-1.5-1.1-1-1.6-2.7-1.6-4.8v-6h-3v-3.6h3V11h4.8v4.6h4v3.6h-4v6c0 1.8.9 2.8 2.6 2.8zm11.1 3.5c-1.6 0-3-.3-4.3-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.3-1 1.7 0 3.2.3 4.4 1a7 7 0 0 1 3 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.4 1zm0-3.6c2.4 0 3.6-1.6 3.6-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.6-1c-2.3 0-3.5 1.4-3.5 4.4 0 3 1.2 4.6 3.5 4.6zm21.7-8.8l-2.7.3c-1.3.2-2.3.5-2.8 1.2-.6.6-.9 1.4-.9 2.5v8.2H96V15.7h4.6v2.6c.8-1.8 2.5-2.8 5-3h1.3l.3 4zm14-3.5h4.8L116.4 37h-4.9l3-6.6-6.4-14.8h5l4 10 4-10zm16-.4c1.4 0 2.6.3 3.6 1 1 .6 1.9 1.6 2.5 2.8.6 1.2.9 2.7.9 4.3 0 1.6-.3 3-1 4.3a6.9 6.9 0 0 1-2.4 2.9c-1 .7-2.2 1-3.6 1-1 0-2-.2-3-.7-.8-.4-1.5-1-2-1.9v2.4h-4.7V8.8h4.8v9c.5-.8 1.2-1.4 2-1.9.9-.4 1.8-.6 3-.6zM135.7 28c1.1 0 2-.4 2.6-1.2.6-.8 1-2 1-3.4 0-1.5-.4-2.5-1-3.3s-1.5-1.1-2.6-1.1-2 .3-2.6 1.1c-.6.8-1 2-1 3.3 0 1.5.4 2.6 1 3.4.6.8 1.5 1.2 2.6 1.2zm18.9 3.6c-1.7 0-3.2-.3-4.4-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.4-1 1.6 0 3 .3 4.3 1a7 7 0 0 1 3 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.3 1zm0-3.6c2.3 0 3.5-1.6 3.5-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.5-1c-2.4 0-3.6 1.4-3.6 4.4 0 3 1.2 4.6 3.6 4.6zm18 3.6c-1.7 0-3.2-.3-4.4-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.4-1 1.6 0 3 .3 4.4 1a7 7 0 0 1 2.9 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.3 1zm0-3.6c2.3 0 3.5-1.6 3.5-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.5-1c-2.4 0-3.6 1.4-3.6 4.4 0 3 1.2 4.6 3.6 4.6zm27.4 3.4h-6l-6-7v7h-4.8V8.8h4.9v13.6l5.8-6.7h5.7l-6.6 7.5 7 8.2z", fill: "currentColor" }), React.createElement("mask", { id: "b", fill: "#fff" }, React.createElement("use", { xlinkHref: "#a" })), React.createElement("use", { fill: "#FF4785", fillRule: "nonzero", xlinkHref: "#a" }), React.createElement("path", { d: "M23.7 5L24 .2l3.9-.3.1 4.8a.3.3 0 0 1-.5.2L26 3.8l-1.7 1.4a.3.3 0 0 1-.5-.3zm-5 10c0 .9 5.3.5 6 0 0-5.4-2.8-8.2-8-8.2-5.3 0-8.2 2.8-8.2 7.1 0 7.4 10 7.6 10 11.6 0 1.2-.5 1.9-1.8 1.9-1.6 0-2.2-.9-2.1-3.6 0-.6-6.1-.8-6.3 0-.5 6.7 3.7 8.6 8.5 8.6 4.6 0 8.3-2.5 8.3-7 0-7.9-10.2-7.7-10.2-11.6 0-1.6 1.2-1.8 2-1.8.6 0 2 0 1.9 3z", fill: "#FFF", fillRule: "nonzero", mask: "url(#b)" })));
var StorybookIcon = (props) => React.createElement("svg", { viewBox: "0 0 64 64", ...props }, React.createElement("title", null, "Storybook icon"), React.createElement("g", { id: "Artboard", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" }, React.createElement("path", { d: "M8.04798541,58.7875918 L6.07908839,6.32540407 C6.01406344,4.5927838 7.34257463,3.12440831 9.07303814,3.01625434 L53.6958037,0.227331489 C55.457209,0.117243658 56.974354,1.45590096 57.0844418,3.21730626 C57.0885895,3.28366922 57.0906648,3.35014546 57.0906648,3.41663791 L57.0906648,60.5834697 C57.0906648,62.3483119 55.6599776,63.7789992 53.8951354,63.7789992 C53.847325,63.7789992 53.7995207,63.7779262 53.7517585,63.775781 L11.0978899,61.8600599 C9.43669044,61.7854501 8.11034889,60.4492961 8.04798541,58.7875918 Z", id: "path-1", fill: "#FF4785", fillRule: "nonzero" }), React.createElement("path", { d: "M35.9095005,24.1768792 C35.9095005,25.420127 44.2838488,24.8242707 45.4080313,23.9509748 C45.4080313,15.4847538 40.8652557,11.0358878 32.5466666,11.0358878 C24.2280775,11.0358878 19.5673077,15.553972 19.5673077,22.3311017 C19.5673077,34.1346028 35.4965208,34.3605071 35.4965208,40.7987804 C35.4965208,42.606015 34.6115646,43.6790606 32.6646607,43.6790606 C30.127786,43.6790606 29.1248356,42.3834613 29.2428298,37.9783269 C29.2428298,37.0226907 19.5673077,36.7247626 19.2723223,37.9783269 C18.5211693,48.6535354 25.1720308,51.7326752 32.7826549,51.7326752 C40.1572906,51.7326752 45.939005,47.8018145 45.939005,40.6858282 C45.939005,28.035186 29.7738035,28.3740425 29.7738035,22.1051974 C29.7738035,19.5637737 31.6617103,19.2249173 32.7826549,19.2249173 C33.9625966,19.2249173 36.0864917,19.4328883 35.9095005,24.1768792 Z", id: "path9_fill-path", fill: "#FFFFFF", fillRule: "nonzero" }), React.createElement("path", { d: "M44.0461638,0.830433986 L50.1874092,0.446606143 L50.443532,7.7810017 C50.4527198,8.04410717 50.2468789,8.26484453 49.9837734,8.27403237 C49.871115,8.27796649 49.7607078,8.24184808 49.6721567,8.17209069 L47.3089847,6.3104681 L44.5110468,8.43287463 C44.3012992,8.591981 44.0022839,8.55092814 43.8431776,8.34118051 C43.7762017,8.25288717 43.742082,8.14401677 43.7466857,8.03329059 L44.0461638,0.830433986 Z", id: "Path", fill: "#FFFFFF" })));
var rotate360 = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;
var LoaderWrapper = newStyled.div(({ size = 32 }) => ({ borderRadius: "50%", cursor: "progress", display: "inline-block", overflow: "hidden", position: "absolute", transition: "all 200ms ease-out", verticalAlign: "top", top: "50%", left: "50%", marginTop: -(size / 2), marginLeft: -(size / 2), height: size, width: size, zIndex: 4, borderWidth: 2, borderStyle: "solid", borderColor: "rgba(97, 97, 97, 0.29)", borderTopColor: "rgb(100,100,100)", animation: `${rotate360} 0.7s linear infinite`, mixBlendMode: "difference" })), ProgressWrapper = newStyled.div({ position: "absolute", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }), ProgressTrack = newStyled.div(({ theme }) => ({ position: "relative", width: "80%", marginBottom: "0.75rem", maxWidth: 300, height: 5, borderRadius: 5, background: curriedTransparentize$1$1(0.8, theme.color.secondary), overflow: "hidden", cursor: "progress" })), ProgressBar = newStyled.div(({ theme }) => ({ position: "absolute", top: 0, left: 0, height: "100%", background: theme.color.secondary })), ProgressMessage = newStyled.div(({ theme }) => ({ minHeight: "2em", fontSize: `${theme.typography.size.s1}px`, color: theme.barTextColor })), ErrorIcon = newStyled(LightningOffIcon)(({ theme }) => ({ width: 20, height: 20, marginBottom: "0.5rem", color: theme.textMutedColor })), ellipsis = keyframes`
  from { content: "..." }
  33% { content: "." }
  66% { content: ".." }
  to { content: "..." }
`, Ellipsis = newStyled.span({ "&::after": { content: "'...'", animation: `${ellipsis} 1s linear infinite`, animationDelay: "1s", display: "inline-block", width: "1em", height: "auto" } }), Loader = ({ progress, error, size, ...props }) => {
  if (error) return React.createElement(ProgressWrapper, { "aria-label": error.toString(), "aria-live": "polite", role: "status", ...props }, React.createElement(ErrorIcon, null), React.createElement(ProgressMessage, null, error.message));
  if (progress) {
    let { value: value2, modules } = progress, { message } = progress;
    return modules && (message += ` ${modules.complete} / ${modules.total} modules`), React.createElement(ProgressWrapper, { "aria-label": "Content is loading...", "aria-live": "polite", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": value2 * 100, "aria-valuetext": message, role: "progressbar", ...props }, React.createElement(ProgressTrack, null, React.createElement(ProgressBar, { style: { width: `${value2 * 100}%` } })), React.createElement(ProgressMessage, null, message, value2 < 1 && React.createElement(Ellipsis, { key: message })));
  }
  return React.createElement(LoaderWrapper, { "aria-label": "Content is loading...", "aria-live": "polite", role: "status", size, ...props });
};
function parseQuery(queryString) {
  let query = {}, pairs = queryString.split("&");
  for (let i2 = 0; i2 < pairs.length; i2++) {
    let pair = pairs[i2].split("=");
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
  }
  return query;
}
var getStoryHref = (baseUrl, storyId, additionalParams = {}) => {
  let [url, paramsStr] = baseUrl.split("?"), params = paramsStr ? { ...parseQuery(paramsStr), ...additionalParams, id: storyId } : { ...additionalParams, id: storyId };
  return `${url}?${Object.entries(params).map((item) => `${item[0]}=${item[1]}`).join("&")}`;
};
var Code2 = newStyled.pre`
  line-height: 18px;
  padding: 11px 1rem;
  white-space: pre-wrap;
  background: rgba(0, 0, 0, 0.05);
  color: ${color.darkest};
  border-radius: 3px;
  margin: 1rem 0;
  width: 100%;
  display: block;
  overflow: hidden;
  font-family: ${typography.fonts.mono};
  font-size: ${typography.size.s2 - 1}px;
`, ClipboardCode = ({ code, ...props }) => React.createElement(Code2, { id: "clipboard-code", ...props }, code);
var components2 = components, resetComponents = {};
Object.keys(components).forEach((key) => {
  resetComponents[key] = reactExports.forwardRef((props, ref) => reactExports.createElement(key, { ...props, ref }));
});
const index$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  A: A$2,
  ActionBar,
  AddonPanel,
  Badge,
  Bar: Bar$1,
  Blockquote,
  Button,
  ClipboardCode,
  Code,
  DL,
  Div,
  DocumentWrapper,
  EmptyTabContent,
  ErrorFormatter,
  FlexBar,
  Form,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  HR,
  IconButton,
  IconButtonSkeleton,
  Icons,
  Img,
  LI,
  Link: Link2,
  ListItem: ListItem_default,
  Loader,
  Modal,
  OL,
  P: P$1,
  Placeholder,
  Pre,
  ResetWrapper,
  ScrollArea,
  Separator,
  Spaced,
  Span,
  StorybookIcon,
  StorybookLogo,
  Symbols,
  SyntaxHighlighter: SyntaxHighlighter2,
  TT,
  TabBar,
  TabButton,
  TabWrapper,
  Table: Table$1,
  Tabs,
  TabsState,
  TooltipLinkList,
  TooltipMessage,
  TooltipNote,
  UL,
  WithTooltip,
  WithTooltipPure,
  Zoom,
  codeCommon,
  components: components2,
  createCopyToClipboardFunction,
  getStoryHref,
  icons,
  interleaveSeparators,
  nameSpaceClassNames,
  resetComponents,
  withReset
}, Symbol.toStringTag, { value: "Module" }));
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t2) {
    return t2.__proto__ || Object.getPrototypeOf(t2);
  }, _getPrototypeOf(t);
}
function _isNativeFunction(t) {
  try {
    return -1 !== Function.toString.call(t).indexOf("[native code]");
  } catch (n2) {
    return "function" == typeof t;
  }
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
function _construct(t, e2, r2) {
  if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o2 = [null];
  o2.push.apply(o2, e2);
  var p2 = new (t.bind.apply(t, o2))();
  return r2 && _setPrototypeOf$1(p2, r2.prototype), p2;
}
function _wrapNativeSuper(t) {
  var r2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
  return _wrapNativeSuper = function _wrapNativeSuper2(t2) {
    if (null === t2 || !_isNativeFunction(t2)) return t2;
    if ("function" != typeof t2) throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r2) {
      if (r2.has(t2)) return r2.get(t2);
      r2.set(t2, Wrapper9);
    }
    function Wrapper9() {
      return _construct(t2, arguments, _getPrototypeOf(this).constructor);
    }
    return Wrapper9.prototype = Object.create(t2.prototype, {
      constructor: {
        value: Wrapper9,
        enumerable: false,
        writable: true,
        configurable: true
      }
    }), _setPrototypeOf$1(Wrapper9, t2);
  }, _wrapNativeSuper(t);
}
var PolishedError = /* @__PURE__ */ function(_Error) {
  _inheritsLoose$1(PolishedError2, _Error);
  function PolishedError2(code) {
    var _this;
    {
      _this = _Error.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + code + " for more information.") || this;
    }
    return _assertThisInitialized$1(_this);
  }
  return PolishedError2;
}(/* @__PURE__ */ _wrapNativeSuper(Error));
function colorToInt(color2) {
  return Math.round(color2 * 255);
}
function convertToInt(red, green, blue) {
  return colorToInt(red) + "," + colorToInt(green) + "," + colorToInt(blue);
}
function hslToRgb(hue, saturation, lightness, convert2) {
  if (convert2 === void 0) {
    convert2 = convertToInt;
  }
  if (saturation === 0) {
    return convert2(lightness, lightness, lightness);
  }
  var huePrime = (hue % 360 + 360) % 360 / 60;
  var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  var secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
  var red = 0;
  var green = 0;
  var blue = 0;
  if (huePrime >= 0 && huePrime < 1) {
    red = chroma;
    green = secondComponent;
  } else if (huePrime >= 1 && huePrime < 2) {
    red = secondComponent;
    green = chroma;
  } else if (huePrime >= 2 && huePrime < 3) {
    green = chroma;
    blue = secondComponent;
  } else if (huePrime >= 3 && huePrime < 4) {
    green = secondComponent;
    blue = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    red = secondComponent;
    blue = chroma;
  } else if (huePrime >= 5 && huePrime < 6) {
    red = chroma;
    blue = secondComponent;
  }
  var lightnessModification = lightness - chroma / 2;
  var finalRed = red + lightnessModification;
  var finalGreen = green + lightnessModification;
  var finalBlue = blue + lightnessModification;
  return convert2(finalRed, finalGreen, finalBlue);
}
var namedColorMap = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "00ffff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "0000ff",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "00ffff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "ff00ff",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "639",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
};
function nameToHex(color2) {
  if (typeof color2 !== "string") return color2;
  var normalizedColorName = color2.toLowerCase();
  return namedColorMap[normalizedColorName] ? "#" + namedColorMap[normalizedColorName] : color2;
}
var hexRegex = /^#[a-fA-F0-9]{6}$/;
var hexRgbaRegex = /^#[a-fA-F0-9]{8}$/;
var reducedHexRegex = /^#[a-fA-F0-9]{3}$/;
var reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/;
var rgbRegex = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i;
var rgbaRegex = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
var hslRegex = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i;
var hslaRegex = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function parseToRgb(color2) {
  if (typeof color2 !== "string") {
    throw new PolishedError(3);
  }
  var normalizedColor = nameToHex(color2);
  if (normalizedColor.match(hexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16)
    };
  }
  if (normalizedColor.match(hexRgbaRegex)) {
    var alpha = parseFloat((parseInt("" + normalizedColor[7] + normalizedColor[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16),
      alpha
    };
  }
  if (normalizedColor.match(reducedHexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16)
    };
  }
  if (normalizedColor.match(reducedRgbaHexRegex)) {
    var _alpha = parseFloat((parseInt("" + normalizedColor[4] + normalizedColor[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16),
      alpha: _alpha
    };
  }
  var rgbMatched = rgbRegex.exec(normalizedColor);
  if (rgbMatched) {
    return {
      red: parseInt("" + rgbMatched[1], 10),
      green: parseInt("" + rgbMatched[2], 10),
      blue: parseInt("" + rgbMatched[3], 10)
    };
  }
  var rgbaMatched = rgbaRegex.exec(normalizedColor.substring(0, 50));
  if (rgbaMatched) {
    return {
      red: parseInt("" + rgbaMatched[1], 10),
      green: parseInt("" + rgbaMatched[2], 10),
      blue: parseInt("" + rgbaMatched[3], 10),
      alpha: parseFloat("" + rgbaMatched[4]) > 1 ? parseFloat("" + rgbaMatched[4]) / 100 : parseFloat("" + rgbaMatched[4])
    };
  }
  var hslMatched = hslRegex.exec(normalizedColor);
  if (hslMatched) {
    var hue = parseInt("" + hslMatched[1], 10);
    var saturation = parseInt("" + hslMatched[2], 10) / 100;
    var lightness = parseInt("" + hslMatched[3], 10) / 100;
    var rgbColorString = "rgb(" + hslToRgb(hue, saturation, lightness) + ")";
    var hslRgbMatched = rgbRegex.exec(rgbColorString);
    if (!hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, rgbColorString);
    }
    return {
      red: parseInt("" + hslRgbMatched[1], 10),
      green: parseInt("" + hslRgbMatched[2], 10),
      blue: parseInt("" + hslRgbMatched[3], 10)
    };
  }
  var hslaMatched = hslaRegex.exec(normalizedColor.substring(0, 50));
  if (hslaMatched) {
    var _hue = parseInt("" + hslaMatched[1], 10);
    var _saturation = parseInt("" + hslaMatched[2], 10) / 100;
    var _lightness = parseInt("" + hslaMatched[3], 10) / 100;
    var _rgbColorString = "rgb(" + hslToRgb(_hue, _saturation, _lightness) + ")";
    var _hslRgbMatched = rgbRegex.exec(_rgbColorString);
    if (!_hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, _rgbColorString);
    }
    return {
      red: parseInt("" + _hslRgbMatched[1], 10),
      green: parseInt("" + _hslRgbMatched[2], 10),
      blue: parseInt("" + _hslRgbMatched[3], 10),
      alpha: parseFloat("" + hslaMatched[4]) > 1 ? parseFloat("" + hslaMatched[4]) / 100 : parseFloat("" + hslaMatched[4])
    };
  }
  throw new PolishedError(5);
}
function rgbToHsl(color2) {
  var red = color2.red / 255;
  var green = color2.green / 255;
  var blue = color2.blue / 255;
  var max2 = Math.max(red, green, blue);
  var min2 = Math.min(red, green, blue);
  var lightness = (max2 + min2) / 2;
  if (max2 === min2) {
    if (color2.alpha !== void 0) {
      return {
        hue: 0,
        saturation: 0,
        lightness,
        alpha: color2.alpha
      };
    } else {
      return {
        hue: 0,
        saturation: 0,
        lightness
      };
    }
  }
  var hue;
  var delta = max2 - min2;
  var saturation = lightness > 0.5 ? delta / (2 - max2 - min2) : delta / (max2 + min2);
  switch (max2) {
    case red:
      hue = (green - blue) / delta + (green < blue ? 6 : 0);
      break;
    case green:
      hue = (blue - red) / delta + 2;
      break;
    default:
      hue = (red - green) / delta + 4;
      break;
  }
  hue *= 60;
  if (color2.alpha !== void 0) {
    return {
      hue,
      saturation,
      lightness,
      alpha: color2.alpha
    };
  }
  return {
    hue,
    saturation,
    lightness
  };
}
function parseToHsl(color2) {
  return rgbToHsl(parseToRgb(color2));
}
var reduceHexValue = function reduceHexValue2(value2) {
  if (value2.length === 7 && value2[1] === value2[2] && value2[3] === value2[4] && value2[5] === value2[6]) {
    return "#" + value2[1] + value2[3] + value2[5];
  }
  return value2;
};
var reduceHexValue$1 = reduceHexValue;
function numberToHex(value2) {
  var hex = value2.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}
function colorToHex(color2) {
  return numberToHex(Math.round(color2 * 255));
}
function convertToHex(red, green, blue) {
  return reduceHexValue$1("#" + colorToHex(red) + colorToHex(green) + colorToHex(blue));
}
function hslToHex(hue, saturation, lightness) {
  return hslToRgb(hue, saturation, lightness, convertToHex);
}
function hsl(value2, saturation, lightness) {
  if (typeof value2 === "number" && typeof saturation === "number" && typeof lightness === "number") {
    return hslToHex(value2, saturation, lightness);
  } else if (typeof value2 === "object" && saturation === void 0 && lightness === void 0) {
    return hslToHex(value2.hue, value2.saturation, value2.lightness);
  }
  throw new PolishedError(1);
}
function hsla(value2, saturation, lightness, alpha) {
  if (typeof value2 === "number" && typeof saturation === "number" && typeof lightness === "number" && typeof alpha === "number") {
    return alpha >= 1 ? hslToHex(value2, saturation, lightness) : "rgba(" + hslToRgb(value2, saturation, lightness) + "," + alpha + ")";
  } else if (typeof value2 === "object" && saturation === void 0 && lightness === void 0 && alpha === void 0) {
    return value2.alpha >= 1 ? hslToHex(value2.hue, value2.saturation, value2.lightness) : "rgba(" + hslToRgb(value2.hue, value2.saturation, value2.lightness) + "," + value2.alpha + ")";
  }
  throw new PolishedError(2);
}
function rgb(value2, green, blue) {
  if (typeof value2 === "number" && typeof green === "number" && typeof blue === "number") {
    return reduceHexValue$1("#" + numberToHex(value2) + numberToHex(green) + numberToHex(blue));
  } else if (typeof value2 === "object" && green === void 0 && blue === void 0) {
    return reduceHexValue$1("#" + numberToHex(value2.red) + numberToHex(value2.green) + numberToHex(value2.blue));
  }
  throw new PolishedError(6);
}
function rgba(firstValue, secondValue, thirdValue, fourthValue) {
  if (typeof firstValue === "string" && typeof secondValue === "number") {
    var rgbValue = parseToRgb(firstValue);
    return "rgba(" + rgbValue.red + "," + rgbValue.green + "," + rgbValue.blue + "," + secondValue + ")";
  } else if (typeof firstValue === "number" && typeof secondValue === "number" && typeof thirdValue === "number" && typeof fourthValue === "number") {
    return fourthValue >= 1 ? rgb(firstValue, secondValue, thirdValue) : "rgba(" + firstValue + "," + secondValue + "," + thirdValue + "," + fourthValue + ")";
  } else if (typeof firstValue === "object" && secondValue === void 0 && thirdValue === void 0 && fourthValue === void 0) {
    return firstValue.alpha >= 1 ? rgb(firstValue.red, firstValue.green, firstValue.blue) : "rgba(" + firstValue.red + "," + firstValue.green + "," + firstValue.blue + "," + firstValue.alpha + ")";
  }
  throw new PolishedError(7);
}
var isRgb = function isRgb2(color2) {
  return typeof color2.red === "number" && typeof color2.green === "number" && typeof color2.blue === "number" && (typeof color2.alpha !== "number" || typeof color2.alpha === "undefined");
};
var isRgba = function isRgba2(color2) {
  return typeof color2.red === "number" && typeof color2.green === "number" && typeof color2.blue === "number" && typeof color2.alpha === "number";
};
var isHsl = function isHsl2(color2) {
  return typeof color2.hue === "number" && typeof color2.saturation === "number" && typeof color2.lightness === "number" && (typeof color2.alpha !== "number" || typeof color2.alpha === "undefined");
};
var isHsla = function isHsla2(color2) {
  return typeof color2.hue === "number" && typeof color2.saturation === "number" && typeof color2.lightness === "number" && typeof color2.alpha === "number";
};
function toColorString(color2) {
  if (typeof color2 !== "object") throw new PolishedError(8);
  if (isRgba(color2)) return rgba(color2);
  if (isRgb(color2)) return rgb(color2);
  if (isHsla(color2)) return hsla(color2);
  if (isHsl(color2)) return hsl(color2);
  throw new PolishedError(8);
}
function curried(f2, length, acc) {
  return function fn() {
    var combined = acc.concat(Array.prototype.slice.call(arguments));
    return combined.length >= length ? f2.apply(this, combined) : curried(f2, length, combined);
  };
}
function curry(f2) {
  return curried(f2, f2.length, []);
}
function adjustHue(degree, color2) {
  if (color2 === "transparent") return color2;
  var hslColor = parseToHsl(color2);
  return toColorString(_extends$1({}, hslColor, {
    hue: hslColor.hue + parseFloat(degree)
  }));
}
curry(adjustHue);
function guard(lowerBoundary, upperBoundary, value2) {
  return Math.max(lowerBoundary, Math.min(upperBoundary, value2));
}
function darken(amount, color2) {
  if (color2 === "transparent") return color2;
  var hslColor = parseToHsl(color2);
  return toColorString(_extends$1({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness - parseFloat(amount))
  }));
}
var curriedDarken = curry(darken);
var curriedDarken$1 = curriedDarken;
function desaturate(amount, color2) {
  if (color2 === "transparent") return color2;
  var hslColor = parseToHsl(color2);
  return toColorString(_extends$1({}, hslColor, {
    saturation: guard(0, 1, hslColor.saturation - parseFloat(amount))
  }));
}
curry(desaturate);
function lighten(amount, color2) {
  if (color2 === "transparent") return color2;
  var hslColor = parseToHsl(color2);
  return toColorString(_extends$1({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness + parseFloat(amount))
  }));
}
var curriedLighten = curry(lighten);
var curriedLighten$1 = curriedLighten;
function mix(weight, color2, otherColor) {
  if (color2 === "transparent") return otherColor;
  if (otherColor === "transparent") return color2;
  if (weight === 0) return otherColor;
  var parsedColor1 = parseToRgb(color2);
  var color1 = _extends$1({}, parsedColor1, {
    alpha: typeof parsedColor1.alpha === "number" ? parsedColor1.alpha : 1
  });
  var parsedColor2 = parseToRgb(otherColor);
  var color22 = _extends$1({}, parsedColor2, {
    alpha: typeof parsedColor2.alpha === "number" ? parsedColor2.alpha : 1
  });
  var alphaDelta = color1.alpha - color22.alpha;
  var x2 = parseFloat(weight) * 2 - 1;
  var y2 = x2 * alphaDelta === -1 ? x2 : x2 + alphaDelta;
  var z2 = 1 + x2 * alphaDelta;
  var weight1 = (y2 / z2 + 1) / 2;
  var weight2 = 1 - weight1;
  var mixedColor = {
    red: Math.floor(color1.red * weight1 + color22.red * weight2),
    green: Math.floor(color1.green * weight1 + color22.green * weight2),
    blue: Math.floor(color1.blue * weight1 + color22.blue * weight2),
    alpha: color1.alpha * parseFloat(weight) + color22.alpha * (1 - parseFloat(weight))
  };
  return rgba(mixedColor);
}
var curriedMix = curry(mix);
var mix$1 = curriedMix;
function opacify(amount, color2) {
  if (color2 === "transparent") return color2;
  var parsedColor = parseToRgb(color2);
  var alpha = typeof parsedColor.alpha === "number" ? parsedColor.alpha : 1;
  var colorWithAlpha = _extends$1({}, parsedColor, {
    alpha: guard(0, 1, (alpha * 100 + parseFloat(amount) * 100) / 100)
  });
  return rgba(colorWithAlpha);
}
var curriedOpacify = curry(opacify);
var curriedOpacify$1 = curriedOpacify;
function saturate(amount, color2) {
  if (color2 === "transparent") return color2;
  var hslColor = parseToHsl(color2);
  return toColorString(_extends$1({}, hslColor, {
    saturation: guard(0, 1, hslColor.saturation + parseFloat(amount))
  }));
}
curry(saturate);
function setHue(hue, color2) {
  if (color2 === "transparent") return color2;
  return toColorString(_extends$1({}, parseToHsl(color2), {
    hue: parseFloat(hue)
  }));
}
curry(setHue);
function setLightness(lightness, color2) {
  if (color2 === "transparent") return color2;
  return toColorString(_extends$1({}, parseToHsl(color2), {
    lightness: parseFloat(lightness)
  }));
}
curry(setLightness);
function setSaturation(saturation, color2) {
  if (color2 === "transparent") return color2;
  return toColorString(_extends$1({}, parseToHsl(color2), {
    saturation: parseFloat(saturation)
  }));
}
curry(setSaturation);
function shade(percentage, color2) {
  if (color2 === "transparent") return color2;
  return mix$1(parseFloat(percentage), "rgb(0, 0, 0)", color2);
}
curry(shade);
function tint(percentage, color2) {
  if (color2 === "transparent") return color2;
  return mix$1(parseFloat(percentage), "rgb(255, 255, 255)", color2);
}
curry(tint);
function transparentize(amount, color2) {
  if (color2 === "transparent") return color2;
  var parsedColor = parseToRgb(color2);
  var alpha = typeof parsedColor.alpha === "number" ? parsedColor.alpha : 1;
  var colorWithAlpha = _extends$1({}, parsedColor, {
    alpha: guard(0, 1, +(alpha * 100 - parseFloat(amount) * 100).toFixed(2) / 100)
  });
  return rgba(colorWithAlpha);
}
var curriedTransparentize = curry(transparentize);
var curriedTransparentize$1 = curriedTransparentize;
var baseAssignValue$1 = _baseAssignValue, eq$1 = eq_1;
var objectProto$3 = Object.prototype;
var hasOwnProperty$4 = objectProto$3.hasOwnProperty;
function assignValue$3(object2, key, value2) {
  var objValue = object2[key];
  if (!(hasOwnProperty$4.call(object2, key) && eq$1(objValue, value2)) || value2 === void 0 && !(key in object2)) {
    baseAssignValue$1(object2, key, value2);
  }
}
var _assignValue = assignValue$3;
var assignValue$2 = _assignValue, castPath$1 = _castPath, isIndex = _isIndex, isObject$4 = isObject_1, toKey = _toKey;
function baseSet$1(object2, path, value2, customizer) {
  if (!isObject$4(object2)) {
    return object2;
  }
  path = castPath$1(path, object2);
  var index3 = -1, length = path.length, lastIndex = length - 1, nested = object2;
  while (nested != null && ++index3 < length) {
    var key = toKey(path[index3]), newValue = value2;
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return object2;
    }
    if (index3 != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : void 0;
      if (newValue === void 0) {
        newValue = isObject$4(objValue) ? objValue : isIndex(path[index3 + 1]) ? [] : {};
      }
    }
    assignValue$2(nested, key, newValue);
    nested = nested[key];
  }
  return object2;
}
var _baseSet = baseSet$1;
var baseGet = _baseGet, baseSet = _baseSet, castPath = _castPath;
function basePickBy$1(object2, paths, predicate) {
  var index3 = -1, length = paths.length, result = {};
  while (++index3 < length) {
    var path = paths[index3], value2 = baseGet(object2, path);
    if (predicate(value2, path)) {
      baseSet(result, castPath(path, object2), value2);
    }
  }
  return result;
}
var _basePickBy = basePickBy$1;
var arrayPush = _arrayPush, getPrototype$1 = _getPrototype, getSymbols$1 = _getSymbols, stubArray = stubArray_1;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbolsIn$2 = !nativeGetSymbols ? stubArray : function(object2) {
  var result = [];
  while (object2) {
    arrayPush(result, getSymbols$1(object2));
    object2 = getPrototype$1(object2);
  }
  return result;
};
var _getSymbolsIn = getSymbolsIn$2;
function nativeKeysIn$1(object2) {
  var result = [];
  if (object2 != null) {
    for (var key in Object(object2)) {
      result.push(key);
    }
  }
  return result;
}
var _nativeKeysIn = nativeKeysIn$1;
var isObject$3 = isObject_1, isPrototype$1 = _isPrototype, nativeKeysIn = _nativeKeysIn;
var objectProto$2 = Object.prototype;
var hasOwnProperty$3 = objectProto$2.hasOwnProperty;
function baseKeysIn$1(object2) {
  if (!isObject$3(object2)) {
    return nativeKeysIn(object2);
  }
  var isProto = isPrototype$1(object2), result = [];
  for (var key in object2) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$3.call(object2, key)))) {
      result.push(key);
    }
  }
  return result;
}
var _baseKeysIn = baseKeysIn$1;
var arrayLikeKeys = _arrayLikeKeys, baseKeysIn = _baseKeysIn, isArrayLike = isArrayLike_1;
function keysIn$3(object2) {
  return isArrayLike(object2) ? arrayLikeKeys(object2, true) : baseKeysIn(object2);
}
var keysIn_1 = keysIn$3;
var baseGetAllKeys = _baseGetAllKeys, getSymbolsIn$1 = _getSymbolsIn, keysIn$2 = keysIn_1;
function getAllKeysIn$2(object2) {
  return baseGetAllKeys(object2, keysIn$2, getSymbolsIn$1);
}
var _getAllKeysIn = getAllKeysIn$2;
var arrayMap = _arrayMap, baseIteratee = _baseIteratee, basePickBy = _basePickBy, getAllKeysIn$1 = _getAllKeysIn;
function pickBy(object2, predicate) {
  if (object2 == null) {
    return {};
  }
  var props = arrayMap(getAllKeysIn$1(object2), function(prop) {
    return [prop];
  });
  predicate = baseIteratee(predicate);
  return basePickBy(object2, props, function(value2, path) {
    return predicate(value2, path[0]);
  });
}
var pickBy_1 = pickBy;
const pickBy$1 = /* @__PURE__ */ getDefaultExportFromCjs(pickBy_1);
function n() {
  return n = Object.assign ? Object.assign.bind() : function(t) {
    for (var n2 = 1; n2 < arguments.length; n2++) {
      var e2 = arguments[n2];
      for (var r2 in e2) Object.prototype.hasOwnProperty.call(e2, r2) && (t[r2] = e2[r2]);
    }
    return t;
  }, n.apply(this, arguments);
}
const e = ["children", "options"], r = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "className", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce((t, n2) => (t[n2.toLowerCase()] = n2, t), { for: "htmlFor" }), o = { amp: "&", apos: "'", gt: ">", lt: "<", nbsp: " ", quot: "“" }, c = ["style", "script"], a = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi, _ = /mailto:/i, u = /\n{2,}$/, i = /^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/, s = /^ *> ?/gm, l = /^ {2,}\n/, f = /^(?:( *[-*_])){3,} *(?:\n *)+\n/, d = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/, p = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/, m = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/, g = /^(?:\n *)*\n/, y = /\r\n?/g, h = /^\[\^([^\]]+)](:.*)\n/, k = /^\[\^([^\]]+)]/, x = /\f/g, b = /^\s*?\[(x|\s)\]/, $ = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, v = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, S = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/, z = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i, w = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi, A$1 = /^<!--[\s\S]*?(?:-->)/, E = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/, L = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i, M = /^\{.*\}$/, O = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/, I = /^<([^ >]+@[^ >]+)>/, j = /^<([^ >]+:\/[^ >]+)>/, B = /-([a-z])?/gi, R = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/, T = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/, C = /^!\[([^\]]*)\] ?\[([^\]]*)\]/, D = /^\[([^\]]*)\] ?\[([^\]]*)\]/, F = /(\[|\])/g, N = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/, P = /\t/g, Z = /^ *\| */, G = /(^ *\||\| *$)/g, H = / *$/, q = /^ *:-+: *$/, U = /^ *:-+ *$/, V = /^ *-+: *$/, W = /^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/, Q = /^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/, X = /^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/, J = /^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/, K = /^\\([^0-9A-Za-z\s])/, Y = /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i, tt = /^\n+/, nt = /^([ \t]*)/, et = /\\([^\\])/g, rt = / *\n+$/, ot = /(?:^|\n)( *)$/, ct = "(?:\\d+\\.)", at = "(?:[*+-])";
function _t(t) {
  return "( *)(" + (1 === t ? ct : at) + ") +";
}
const ut = _t(1), it = _t(2);
function st(t) {
  return new RegExp("^" + (1 === t ? ut : it));
}
const lt = st(1), ft = st(2);
function dt(t) {
  return new RegExp("^" + (1 === t ? ut : it) + "[^\\n]*(?:\\n(?!\\1" + (1 === t ? ct : at) + " )[^\\n]*)*(\\n|$)", "gm");
}
const pt = dt(1), mt = dt(2);
function gt(t) {
  const n2 = 1 === t ? ct : at;
  return new RegExp("^( *)(" + n2 + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + n2 + " (?!" + n2 + " ))\\n*|\\s*\\n*$)");
}
const yt = gt(1), ht = gt(2);
function kt(t, n2) {
  const e2 = 1 === n2, r2 = e2 ? yt : ht, o2 = e2 ? pt : mt, c2 = e2 ? lt : ft;
  return { t(t2, n3, e3) {
    const o3 = ot.exec(e3);
    return o3 && (n3.o || !n3._ && !n3.u) ? r2.exec(t2 = o3[1] + t2) : null;
  }, i: Ht.HIGH, l(t2, n3, r3) {
    const a2 = e2 ? +t2[2] : void 0, _2 = t2[0].replace(u, "\n").match(o2);
    let i2 = false;
    return { p: _2.map(function(t3, e3) {
      const o3 = c2.exec(t3)[0].length, a3 = new RegExp("^ {1," + o3 + "}", "gm"), u2 = t3.replace(a3, "").replace(c2, ""), s2 = e3 === _2.length - 1, l2 = -1 !== u2.indexOf("\n\n") || s2 && i2;
      i2 = l2;
      const f2 = r3._, d2 = r3.o;
      let p2;
      r3.o = true, l2 ? (r3._ = false, p2 = u2.replace(rt, "\n\n")) : (r3._ = true, p2 = u2.replace(rt, ""));
      const m2 = n3(p2, r3);
      return r3._ = f2, r3.o = d2, m2;
    }), m: e2, g: a2 };
  }, h: (n3, e3, r3) => t(n3.m ? "ol" : "ul", { key: r3.k, start: n3.g }, n3.p.map(function(n4, o3) {
    return t("li", { key: o3 }, e3(n4, r3));
  })) };
}
const xt = /^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/, bt = /^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/, $t = [i, d, p, $, S, v, A$1, R, pt, yt, mt, ht], vt = [...$t, /^[^\n]+(?:  \n|\n{2,})/, z, L];
function St(t) {
  return t.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase();
}
function zt(t) {
  return V.test(t) ? "right" : q.test(t) ? "center" : U.test(t) ? "left" : null;
}
function wt(t, n2, e2) {
  const r2 = e2.$;
  e2.$ = true;
  const o2 = n2(t.trim(), e2);
  e2.$ = r2;
  let c2 = [[]];
  return o2.forEach(function(t2, n3) {
    "tableSeparator" === t2.type ? 0 !== n3 && n3 !== o2.length - 1 && c2.push([]) : ("text" !== t2.type || null != o2[n3 + 1] && "tableSeparator" !== o2[n3 + 1].type || (t2.v = t2.v.replace(H, "")), c2[c2.length - 1].push(t2));
  }), c2;
}
function At(t, n2, e2) {
  e2._ = true;
  const r2 = wt(t[1], n2, e2), o2 = t[2].replace(G, "").split("|").map(zt), c2 = function(t2, n3, e3) {
    return t2.trim().split("\n").map(function(t3) {
      return wt(t3, n3, e3);
    });
  }(t[3], n2, e2);
  return e2._ = false, { S: o2, A: c2, L: r2, type: "table" };
}
function Et(t, n2) {
  return null == t.S[n2] ? {} : { textAlign: t.S[n2] };
}
function Lt(t) {
  return function(n2, e2) {
    return e2._ ? t.exec(n2) : null;
  };
}
function Mt(t) {
  return function(n2, e2) {
    return e2._ || e2.u ? t.exec(n2) : null;
  };
}
function Ot(t) {
  return function(n2, e2) {
    return e2._ || e2.u ? null : t.exec(n2);
  };
}
function It(t) {
  return function(n2) {
    return t.exec(n2);
  };
}
function jt(t, n2, e2) {
  if (n2._ || n2.u) return null;
  if (e2 && !e2.endsWith("\n")) return null;
  let r2 = "";
  t.split("\n").every((t2) => !$t.some((n3) => n3.test(t2)) && (r2 += t2 + "\n", t2.trim()));
  const o2 = r2.trimEnd();
  return "" == o2 ? null : [r2, o2];
}
function Bt(t) {
  try {
    if (decodeURIComponent(t).replace(/[^A-Za-z0-9/:]/g, "").match(/^\s*(javascript|vbscript|data(?!:image)):/i)) return;
  } catch (t2) {
    return null;
  }
  return t;
}
function Rt(t) {
  return t.replace(et, "$1");
}
function Tt(t, n2, e2) {
  const r2 = e2._ || false, o2 = e2.u || false;
  e2._ = true, e2.u = true;
  const c2 = t(n2, e2);
  return e2._ = r2, e2.u = o2, c2;
}
function Ct(t, n2, e2) {
  const r2 = e2._ || false, o2 = e2.u || false;
  e2._ = false, e2.u = true;
  const c2 = t(n2, e2);
  return e2._ = r2, e2.u = o2, c2;
}
function Dt(t, n2, e2) {
  return e2._ = false, t(n2, e2);
}
const Ft = (t, n2, e2) => ({ v: Tt(n2, t[1], e2) });
function Nt() {
  return {};
}
function Pt() {
  return null;
}
function Zt(...t) {
  return t.filter(Boolean).join(" ");
}
function Gt(t, n2, e2) {
  let r2 = t;
  const o2 = n2.split(".");
  for (; o2.length && (r2 = r2[o2[0]], void 0 !== r2); ) o2.shift();
  return r2 || e2;
}
var Ht;
function qt(e2, u2 = {}) {
  u2.overrides = u2.overrides || {}, u2.slugify = u2.slugify || St, u2.namedCodesToUnicode = u2.namedCodesToUnicode ? n({}, o, u2.namedCodesToUnicode) : o;
  const G2 = u2.createElement || reactExports.createElement;
  function H7(t, e3, ...r2) {
    const o2 = Gt(u2.overrides, `${t}.props`, {});
    return G2(function(t2, n2) {
      const e4 = Gt(n2, t2);
      return e4 ? "function" == typeof e4 || "object" == typeof e4 && "render" in e4 ? e4 : Gt(n2, `${t2}.component`, t2) : t2;
    }(t, u2.overrides), n({}, e3, o2, { className: Zt(null == e3 ? void 0 : e3.className, o2.className) || void 0 }), ...r2);
  }
  function q2(n2) {
    let e3 = false;
    u2.forceInline ? e3 = true : u2.forceBlock || (e3 = false === N.test(n2));
    const r2 = ct2(ot2(e3 ? n2 : `${n2.trimEnd().replace(tt, "")}

`, { _: e3 }));
    for (; "string" == typeof r2[r2.length - 1] && !r2[r2.length - 1].trim(); ) r2.pop();
    if (null === u2.wrapper) return r2;
    const o2 = u2.wrapper || (e3 ? "span" : "div");
    let c2;
    if (r2.length > 1 || u2.forceWrapper) c2 = r2;
    else {
      if (1 === r2.length) return c2 = r2[0], "string" == typeof c2 ? H7("span", { key: "outer" }, c2) : c2;
      c2 = null;
    }
    return reactExports.createElement(o2, { key: "outer" }, c2);
  }
  function U2(n2) {
    const e3 = n2.match(a);
    return e3 ? e3.reduce(function(n3, e4, o2) {
      const c2 = e4.indexOf("=");
      if (-1 !== c2) {
        const a2 = function(t) {
          return -1 !== t.indexOf("-") && null === t.match(E) && (t = t.replace(B, function(t2, n4) {
            return n4.toUpperCase();
          })), t;
        }(e4.slice(0, c2)).trim(), _2 = function(t) {
          const n4 = t[0];
          return ('"' === n4 || "'" === n4) && t.length >= 2 && t[t.length - 1] === n4 ? t.slice(1, -1) : t;
        }(e4.slice(c2 + 1).trim()), u3 = r[a2] || a2, i2 = n3[u3] = function(t, n4) {
          return "style" === t ? n4.split(/;\s?/).reduce(function(t2, n5) {
            const e5 = n5.slice(0, n5.indexOf(":"));
            return t2[e5.replace(/(-[a-z])/g, (t3) => t3[1].toUpperCase())] = n5.slice(e5.length + 1).trim(), t2;
          }, {}) : "href" === t ? Bt(n4) : (n4.match(M) && (n4 = n4.slice(1, n4.length - 1)), "true" === n4 || "false" !== n4 && n4);
        }(a2, _2);
        "string" == typeof i2 && (z.test(i2) || L.test(i2)) && (n3[u3] = reactExports.cloneElement(q2(i2.trim()), { key: o2 }));
      } else "style" !== e4 && (n3[r[e4] || e4] = true);
      return n3;
    }, {}) : null;
  }
  const V2 = [], et2 = {}, rt2 = { blockQuote: { t: Ot(i), i: Ht.HIGH, l: (t, n2, e3) => ({ v: n2(t[0].replace(s, ""), e3) }), h: (t, n2, e3) => H7("blockquote", { key: e3.k }, n2(t.v, e3)) }, breakLine: { t: It(l), i: Ht.HIGH, l: Nt, h: (t, n2, e3) => H7("br", { key: e3.k }) }, breakThematic: { t: Ot(f), i: Ht.HIGH, l: Nt, h: (t, n2, e3) => H7("hr", { key: e3.k }) }, codeBlock: { t: Ot(p), i: Ht.MAX, l: (t) => ({ v: t[0].replace(/^ {4}/gm, "").replace(/\n+$/, ""), M: void 0 }), h: (t, e3, r2) => H7("pre", { key: r2.k }, H7("code", n({}, t.O, { className: t.M ? `lang-${t.M}` : "" }), t.v)) }, codeFenced: { t: Ot(d), i: Ht.MAX, l: (t) => ({ O: U2(t[3] || ""), v: t[4], M: t[2] || void 0, type: "codeBlock" }) }, codeInline: { t: Mt(m), i: Ht.LOW, l: (t) => ({ v: t[2] }), h: (t, n2, e3) => H7("code", { key: e3.k }, t.v) }, footnote: { t: Ot(h), i: Ht.MAX, l: (t) => (V2.push({ I: t[2], j: t[1] }), {}), h: Pt }, footnoteReference: { t: Lt(k), i: Ht.HIGH, l: (t) => ({ v: t[1], B: `#${u2.slugify(t[1])}` }), h: (t, n2, e3) => H7("a", { key: e3.k, href: Bt(t.B) }, H7("sup", { key: e3.k }, t.v)) }, gfmTask: { t: Lt(b), i: Ht.HIGH, l: (t) => ({ R: "x" === t[1].toLowerCase() }), h: (t, n2, e3) => H7("input", { checked: t.R, key: e3.k, readOnly: true, type: "checkbox" }) }, heading: { t: Ot(u2.enforceAtxHeadings ? v : $), i: Ht.HIGH, l: (t, n2, e3) => ({ v: Tt(n2, t[2], e3), T: u2.slugify(t[2]), C: t[1].length }), h: (t, n2, e3) => H7(`h${t.C}`, { id: t.T, key: e3.k }, n2(t.v, e3)) }, headingSetext: { t: Ot(S), i: Ht.MAX, l: (t, n2, e3) => ({ v: Tt(n2, t[1], e3), C: "=" === t[2] ? 1 : 2, type: "heading" }) }, htmlComment: { t: It(A$1), i: Ht.HIGH, l: () => ({}), h: Pt }, image: { t: Mt(bt), i: Ht.HIGH, l: (t) => ({ D: t[1], B: Rt(t[2]), F: t[3] }), h: (t, n2, e3) => H7("img", { key: e3.k, alt: t.D || void 0, title: t.F || void 0, src: Bt(t.B) }) }, link: { t: Lt(xt), i: Ht.LOW, l: (t, n2, e3) => ({ v: Ct(n2, t[1], e3), B: Rt(t[2]), F: t[3] }), h: (t, n2, e3) => H7("a", { key: e3.k, href: Bt(t.B), title: t.F }, n2(t.v, e3)) }, linkAngleBraceStyleDetector: { t: Lt(j), i: Ht.MAX, l: (t) => ({ v: [{ v: t[1], type: "text" }], B: t[1], type: "link" }) }, linkBareUrlDetector: { t: (t, n2) => n2.N ? null : Lt(O)(t, n2), i: Ht.MAX, l: (t) => ({ v: [{ v: t[1], type: "text" }], B: t[1], F: void 0, type: "link" }) }, linkMailtoDetector: { t: Lt(I), i: Ht.MAX, l(t) {
    let n2 = t[1], e3 = t[1];
    return _.test(e3) || (e3 = "mailto:" + e3), { v: [{ v: n2.replace("mailto:", ""), type: "text" }], B: e3, type: "link" };
  } }, orderedList: kt(H7, 1), unorderedList: kt(H7, 2), newlineCoalescer: { t: Ot(g), i: Ht.LOW, l: Nt, h: () => "\n" }, paragraph: { t: jt, i: Ht.LOW, l: Ft, h: (t, n2, e3) => H7("p", { key: e3.k }, n2(t.v, e3)) }, ref: { t: Lt(T), i: Ht.MAX, l: (t) => (et2[t[1]] = { B: t[2], F: t[4] }, {}), h: Pt }, refImage: { t: Mt(C), i: Ht.MAX, l: (t) => ({ D: t[1] || void 0, P: t[2] }), h: (t, n2, e3) => H7("img", { key: e3.k, alt: t.D, src: Bt(et2[t.P].B), title: et2[t.P].F }) }, refLink: { t: Lt(D), i: Ht.MAX, l: (t, n2, e3) => ({ v: n2(t[1], e3), Z: n2(t[0].replace(F, "\\$1"), e3), P: t[2] }), h: (t, n2, e3) => et2[t.P] ? H7("a", { key: e3.k, href: Bt(et2[t.P].B), title: et2[t.P].F }, n2(t.v, e3)) : H7("span", { key: e3.k }, n2(t.Z, e3)) }, table: { t: Ot(R), i: Ht.HIGH, l: At, h: (t, n2, e3) => H7("table", { key: e3.k }, H7("thead", null, H7("tr", null, t.L.map(function(r2, o2) {
    return H7("th", { key: o2, style: Et(t, o2) }, n2(r2, e3));
  }))), H7("tbody", null, t.A.map(function(r2, o2) {
    return H7("tr", { key: o2 }, r2.map(function(r3, o3) {
      return H7("td", { key: o3, style: Et(t, o3) }, n2(r3, e3));
    }));
  }))) }, tableSeparator: { t: function(t, n2) {
    return n2.$ ? (n2._ = true, Z.exec(t)) : null;
  }, i: Ht.HIGH, l: function() {
    return { type: "tableSeparator" };
  }, h: () => " | " }, text: { t: It(Y), i: Ht.MIN, l: (t) => ({ v: t[0].replace(w, (t2, n2) => u2.namedCodesToUnicode[n2] ? u2.namedCodesToUnicode[n2] : t2) }), h: (t) => t.v }, textBolded: { t: Mt(W), i: Ht.MED, l: (t, n2, e3) => ({ v: n2(t[2], e3) }), h: (t, n2, e3) => H7("strong", { key: e3.k }, n2(t.v, e3)) }, textEmphasized: { t: Mt(Q), i: Ht.LOW, l: (t, n2, e3) => ({ v: n2(t[2], e3) }), h: (t, n2, e3) => H7("em", { key: e3.k }, n2(t.v, e3)) }, textEscaped: { t: Mt(K), i: Ht.HIGH, l: (t) => ({ v: t[1], type: "text" }) }, textMarked: { t: Mt(X), i: Ht.LOW, l: Ft, h: (t, n2, e3) => H7("mark", { key: e3.k }, n2(t.v, e3)) }, textStrikethroughed: { t: Mt(J), i: Ht.LOW, l: Ft, h: (t, n2, e3) => H7("del", { key: e3.k }, n2(t.v, e3)) } };
  true !== u2.disableParsingRawHTML && (rt2.htmlBlock = { t: It(z), i: Ht.HIGH, l(t, n2, e3) {
    const [, r2] = t[3].match(nt), o2 = new RegExp(`^${r2}`, "gm"), a2 = t[3].replace(o2, ""), _2 = (u3 = a2, vt.some((t2) => t2.test(u3)) ? Dt : Tt);
    var u3;
    const i2 = t[1].toLowerCase(), s2 = -1 !== c.indexOf(i2);
    e3.N = e3.N || "a" === i2;
    const l2 = s2 ? t[3] : _2(n2, a2, e3);
    return e3.N = false, { O: U2(t[2]), v: l2, G: s2, H: s2 ? i2 : t[1] };
  }, h: (t, e3, r2) => H7(t.H, n({ key: r2.k }, t.O), t.G ? t.v : e3(t.v, r2)) }, rt2.htmlSelfClosing = { t: It(L), i: Ht.HIGH, l: (t) => ({ O: U2(t[2] || ""), H: t[1] }), h: (t, e3, r2) => H7(t.H, n({}, t.O, { key: r2.k })) });
  const ot2 = function(t) {
    let n2 = Object.keys(t);
    function e3(r2, o2) {
      let c2 = [], a2 = "";
      for (; r2; ) {
        let _2 = 0;
        for (; _2 < n2.length; ) {
          const u3 = n2[_2], i2 = t[u3], s2 = i2.t(r2, o2, a2);
          if (s2) {
            const t2 = s2[0];
            r2 = r2.substring(t2.length);
            const n3 = i2.l(s2, e3, o2);
            null == n3.type && (n3.type = u3), c2.push(n3), a2 = t2;
            break;
          }
          _2++;
        }
      }
      return c2;
    }
    return n2.sort(function(n3, e4) {
      let r2 = t[n3].i, o2 = t[e4].i;
      return r2 !== o2 ? r2 - o2 : n3 < e4 ? -1 : 1;
    }), function(t2, n3) {
      return e3(function(t3) {
        return t3.replace(y, "\n").replace(x, "").replace(P, "    ");
      }(t2), n3);
    };
  }(rt2), ct2 = (at2 = /* @__PURE__ */ function(t) {
    return function(n2, e3, r2) {
      return t[n2.type].h(n2, e3, r2);
    };
  }(rt2), function t(n2, e3 = {}) {
    if (Array.isArray(n2)) {
      const r2 = e3.k, o2 = [];
      let c2 = false;
      for (let r3 = 0; r3 < n2.length; r3++) {
        e3.k = r3;
        const a2 = t(n2[r3], e3), _2 = "string" == typeof a2;
        _2 && c2 ? o2[o2.length - 1] += a2 : null !== a2 && o2.push(a2), c2 = _2;
      }
      return e3.k = r2, o2;
    }
    return at2(n2, t, e3);
  });
  var at2;
  const _t2 = q2(e2);
  return V2.length ? H7("div", null, _t2, H7("footer", { key: "footer" }, V2.map(function(t) {
    return H7("div", { id: u2.slugify(t.j), key: t.j }, t.j, ct2(ot2(t.I, { _: true })));
  }))) : _t2;
}
!function(t) {
  t[t.MAX = 0] = "MAX", t[t.HIGH = 1] = "HIGH", t[t.MED = 2] = "MED", t[t.LOW = 3] = "LOW", t[t.MIN = 4] = "MIN";
}(Ht || (Ht = {}));
const Markdown = (n2) => {
  let { children: r2, options: o2 } = n2, c2 = function(t, n3) {
    if (null == t) return {};
    var e2, r3, o3 = {}, c3 = Object.keys(t);
    for (r3 = 0; r3 < c3.length; r3++) n3.indexOf(e2 = c3[r3]) >= 0 || (o3[e2] = t[e2]);
    return o3;
  }(n2, e);
  return reactExports.cloneElement(qt(r2, o2), c2);
};
function baseFindIndex$1(array2, predicate, fromIndex, fromRight) {
  var length = array2.length, index3 = fromIndex + (fromRight ? 1 : -1);
  while (fromRight ? index3-- : ++index3 < length) {
    if (predicate(array2[index3], index3, array2)) {
      return index3;
    }
  }
  return -1;
}
var _baseFindIndex = baseFindIndex$1;
function baseIsNaN$1(value2) {
  return value2 !== value2;
}
var _baseIsNaN = baseIsNaN$1;
function strictIndexOf$1(array2, value2, fromIndex) {
  var index3 = fromIndex - 1, length = array2.length;
  while (++index3 < length) {
    if (array2[index3] === value2) {
      return index3;
    }
  }
  return -1;
}
var _strictIndexOf = strictIndexOf$1;
var baseFindIndex = _baseFindIndex, baseIsNaN = _baseIsNaN, strictIndexOf = _strictIndexOf;
function baseIndexOf$1(array2, value2, fromIndex) {
  return value2 === value2 ? strictIndexOf(array2, value2, fromIndex) : baseFindIndex(array2, baseIsNaN, fromIndex);
}
var _baseIndexOf = baseIndexOf$1;
var baseIndexOf = _baseIndexOf;
function arrayIncludes$1(array2, value2) {
  var length = array2 == null ? 0 : array2.length;
  return !!length && baseIndexOf(array2, value2, 0) > -1;
}
var _arrayIncludes = arrayIncludes$1;
function arrayIncludesWith$1(array2, value2, comparator) {
  var index3 = -1, length = array2 == null ? 0 : array2.length;
  while (++index3 < length) {
    if (comparator(value2, array2[index3])) {
      return true;
    }
  }
  return false;
}
var _arrayIncludesWith = arrayIncludesWith$1;
function noop$1() {
}
var noop_1 = noop$1;
var Set$1 = _Set, noop = noop_1, setToArray$1 = _setToArray;
var INFINITY = 1 / 0;
var createSet$1 = !(Set$1 && 1 / setToArray$1(new Set$1([, -0]))[1] == INFINITY) ? noop : function(values) {
  return new Set$1(values);
};
var _createSet = createSet$1;
var SetCache = _SetCache, arrayIncludes = _arrayIncludes, arrayIncludesWith = _arrayIncludesWith, cacheHas = _cacheHas, createSet = _createSet, setToArray = _setToArray;
var LARGE_ARRAY_SIZE = 200;
function baseUniq$1(array2, iteratee, comparator) {
  var index3 = -1, includes = arrayIncludes, length = array2.length, isCommon = true, result = [], seen = result;
  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  } else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array2);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache();
  } else {
    seen = iteratee ? [] : result;
  }
  outer:
    while (++index3 < length) {
      var value2 = array2[index3], computed = iteratee ? iteratee(value2) : value2;
      value2 = comparator || value2 !== 0 ? value2 : 0;
      if (isCommon && computed === computed) {
        var seenIndex = seen.length;
        while (seenIndex--) {
          if (seen[seenIndex] === computed) {
            continue outer;
          }
        }
        if (iteratee) {
          seen.push(computed);
        }
        result.push(value2);
      } else if (!includes(seen, computed, comparator)) {
        if (seen !== result) {
          seen.push(computed);
        }
        result.push(value2);
      }
    }
  return result;
}
var _baseUniq = baseUniq$1;
var baseUniq = _baseUniq;
function uniq(array2) {
  return array2 && array2.length ? baseUniq(array2) : [];
}
var uniq_1 = uniq;
const uniq$1 = /* @__PURE__ */ getDefaultExportFromCjs(uniq_1);
function arrayEach$1(array2, iteratee) {
  var index3 = -1, length = array2 == null ? 0 : array2.length;
  while (++index3 < length) {
    if (iteratee(array2[index3], index3, array2) === false) {
      break;
    }
  }
  return array2;
}
var _arrayEach = arrayEach$1;
var assignValue$1 = _assignValue, baseAssignValue = _baseAssignValue;
function copyObject$4(source, props, object2, customizer) {
  var isNew = !object2;
  object2 || (object2 = {});
  var index3 = -1, length = props.length;
  while (++index3 < length) {
    var key = props[index3];
    var newValue = customizer ? customizer(object2[key], source[key], key, object2, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object2, key, newValue);
    } else {
      assignValue$1(object2, key, newValue);
    }
  }
  return object2;
}
var _copyObject = copyObject$4;
var copyObject$3 = _copyObject, keys$1 = keys_1;
function baseAssign$1(object2, source) {
  return object2 && copyObject$3(source, keys$1(source), object2);
}
var _baseAssign = baseAssign$1;
var copyObject$2 = _copyObject, keysIn$1 = keysIn_1;
function baseAssignIn$1(object2, source) {
  return object2 && copyObject$2(source, keysIn$1(source), object2);
}
var _baseAssignIn = baseAssignIn$1;
var _cloneBuffer = { exports: {} };
_cloneBuffer.exports;
(function(module, exports) {
  var root = _root;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer = moduleExports ? root.Buffer : void 0, allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
  function cloneBuffer2(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
    buffer.copy(result);
    return result;
  }
  module.exports = cloneBuffer2;
})(_cloneBuffer, _cloneBuffer.exports);
var _cloneBufferExports = _cloneBuffer.exports;
function copyArray$1(source, array2) {
  var index3 = -1, length = source.length;
  array2 || (array2 = Array(length));
  while (++index3 < length) {
    array2[index3] = source[index3];
  }
  return array2;
}
var _copyArray = copyArray$1;
var copyObject$1 = _copyObject, getSymbols = _getSymbols;
function copySymbols$1(source, object2) {
  return copyObject$1(source, getSymbols(source), object2);
}
var _copySymbols = copySymbols$1;
var copyObject = _copyObject, getSymbolsIn = _getSymbolsIn;
function copySymbolsIn$1(source, object2) {
  return copyObject(source, getSymbolsIn(source), object2);
}
var _copySymbolsIn = copySymbolsIn$1;
var objectProto$1 = Object.prototype;
var hasOwnProperty$2 = objectProto$1.hasOwnProperty;
function initCloneArray$1(array2) {
  var length = array2.length, result = new array2.constructor(length);
  if (length && typeof array2[0] == "string" && hasOwnProperty$2.call(array2, "index")) {
    result.index = array2.index;
    result.input = array2.input;
  }
  return result;
}
var _initCloneArray = initCloneArray$1;
var Uint8Array$1 = _Uint8Array;
function cloneArrayBuffer$3(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array$1(result).set(new Uint8Array$1(arrayBuffer));
  return result;
}
var _cloneArrayBuffer = cloneArrayBuffer$3;
var cloneArrayBuffer$2 = _cloneArrayBuffer;
function cloneDataView$1(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$2(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var _cloneDataView = cloneDataView$1;
var reFlags = /\w*$/;
function cloneRegExp$1(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
var _cloneRegExp = cloneRegExp$1;
var Symbol$1 = _Symbol;
var symbolProto$1 = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : void 0;
function cloneSymbol$1(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
var _cloneSymbol = cloneSymbol$1;
var cloneArrayBuffer$1 = _cloneArrayBuffer;
function cloneTypedArray$1(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$1(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var _cloneTypedArray = cloneTypedArray$1;
var cloneArrayBuffer = _cloneArrayBuffer, cloneDataView = _cloneDataView, cloneRegExp = _cloneRegExp, cloneSymbol = _cloneSymbol, cloneTypedArray = _cloneTypedArray;
var boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", symbolTag$1 = "[object Symbol]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
function initCloneByTag$1(object2, tag, isDeep) {
  var Ctor = object2.constructor;
  switch (tag) {
    case arrayBufferTag$1:
      return cloneArrayBuffer(object2);
    case boolTag$1:
    case dateTag$1:
      return new Ctor(+object2);
    case dataViewTag$1:
      return cloneDataView(object2, isDeep);
    case float32Tag$1:
    case float64Tag$1:
    case int8Tag$1:
    case int16Tag$1:
    case int32Tag$1:
    case uint8Tag$1:
    case uint8ClampedTag$1:
    case uint16Tag$1:
    case uint32Tag$1:
      return cloneTypedArray(object2, isDeep);
    case mapTag$2:
      return new Ctor();
    case numberTag$1:
    case stringTag$1:
      return new Ctor(object2);
    case regexpTag$1:
      return cloneRegExp(object2);
    case setTag$2:
      return new Ctor();
    case symbolTag$1:
      return cloneSymbol(object2);
  }
}
var _initCloneByTag = initCloneByTag$1;
var isObject$2 = isObject_1;
var objectCreate = Object.create;
var baseCreate$1 = /* @__PURE__ */ function() {
  function object2() {
  }
  return function(proto) {
    if (!isObject$2(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object2.prototype = proto;
    var result = new object2();
    object2.prototype = void 0;
    return result;
  };
}();
var _baseCreate = baseCreate$1;
var baseCreate = _baseCreate, getPrototype = _getPrototype, isPrototype = _isPrototype;
function initCloneObject$1(object2) {
  return typeof object2.constructor == "function" && !isPrototype(object2) ? baseCreate(getPrototype(object2)) : {};
}
var _initCloneObject = initCloneObject$1;
var getTag$2 = _getTag, isObjectLike$1 = isObjectLike_1;
var mapTag$1 = "[object Map]";
function baseIsMap$1(value2) {
  return isObjectLike$1(value2) && getTag$2(value2) == mapTag$1;
}
var _baseIsMap = baseIsMap$1;
var baseIsMap = _baseIsMap, baseUnary$1 = _baseUnary, nodeUtil$1 = _nodeUtilExports;
var nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap;
var isMap$1 = nodeIsMap ? baseUnary$1(nodeIsMap) : baseIsMap;
var isMap_1 = isMap$1;
var getTag$1 = _getTag, isObjectLike = isObjectLike_1;
var setTag$1 = "[object Set]";
function baseIsSet$1(value2) {
  return isObjectLike(value2) && getTag$1(value2) == setTag$1;
}
var _baseIsSet = baseIsSet$1;
var baseIsSet = _baseIsSet, baseUnary = _baseUnary, nodeUtil = _nodeUtilExports;
var nodeIsSet = nodeUtil && nodeUtil.isSet;
var isSet$1 = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
var isSet_1 = isSet$1;
var Stack = _Stack, arrayEach = _arrayEach, assignValue = _assignValue, baseAssign = _baseAssign, baseAssignIn = _baseAssignIn, cloneBuffer = _cloneBufferExports, copyArray = _copyArray, copySymbols = _copySymbols, copySymbolsIn = _copySymbolsIn, getAllKeys = _getAllKeys, getAllKeysIn = _getAllKeysIn, getTag = _getTag, initCloneArray = _initCloneArray, initCloneByTag = _initCloneByTag, initCloneObject = _initCloneObject, isArray = isArray_1, isBuffer = isBufferExports, isMap = isMap_1, isObject$1 = isObject_1, isSet = isSet_1, keys = keys_1, keysIn = keysIn_1;
var CLONE_DEEP_FLAG$1 = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG$1 = 4;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag$1 = "[object Function]", genTag$1 = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag$1] = cloneableTags[weakMapTag] = false;
function baseClone$1(value2, bitmask, customizer, key, object2, stack) {
  var result, isDeep = bitmask & CLONE_DEEP_FLAG$1, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG$1;
  if (customizer) {
    result = object2 ? customizer(value2, key, object2, stack) : customizer(value2);
  }
  if (result !== void 0) {
    return result;
  }
  if (!isObject$1(value2)) {
    return value2;
  }
  var isArr = isArray(value2);
  if (isArr) {
    result = initCloneArray(value2);
    if (!isDeep) {
      return copyArray(value2, result);
    }
  } else {
    var tag = getTag(value2), isFunc = tag == funcTag$1 || tag == genTag$1;
    if (isBuffer(value2)) {
      return cloneBuffer(value2, isDeep);
    }
    if (tag == objectTag || tag == argsTag || isFunc && !object2) {
      result = isFlat || isFunc ? {} : initCloneObject(value2);
      if (!isDeep) {
        return isFlat ? copySymbolsIn(value2, baseAssignIn(result, value2)) : copySymbols(value2, baseAssign(result, value2));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object2 ? value2 : {};
      }
      result = initCloneByTag(value2, tag, isDeep);
    }
  }
  stack || (stack = new Stack());
  var stacked = stack.get(value2);
  if (stacked) {
    return stacked;
  }
  stack.set(value2, result);
  if (isSet(value2)) {
    value2.forEach(function(subValue) {
      result.add(baseClone$1(subValue, bitmask, customizer, subValue, value2, stack));
    });
  } else if (isMap(value2)) {
    value2.forEach(function(subValue, key2) {
      result.set(key2, baseClone$1(subValue, bitmask, customizer, key2, value2, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
  var props = isArr ? void 0 : keysFunc(value2);
  arrayEach(props || value2, function(subValue, key2) {
    if (props) {
      key2 = subValue;
      subValue = value2[key2];
    }
    assignValue(result, key2, baseClone$1(subValue, bitmask, customizer, key2, value2, stack));
  });
  return result;
}
var _baseClone = baseClone$1;
var baseClone = _baseClone;
var CLONE_DEEP_FLAG = 1, CLONE_SYMBOLS_FLAG = 4;
function cloneDeep(value2) {
  return baseClone(value2, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
var cloneDeep_1 = cloneDeep;
const cloneDeep$1 = /* @__PURE__ */ getDefaultExportFromCjs(cloneDeep_1);
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var eventProperties = [
  "bubbles",
  "cancelBubble",
  "cancelable",
  "composed",
  "currentTarget",
  "defaultPrevented",
  "eventPhase",
  "isTrusted",
  "returnValue",
  "srcElement",
  "target",
  "timeStamp",
  "type"
];
var customEventSpecificProperties = ["detail"];
function extractEventHiddenProperties(event) {
  const rebuildEvent = eventProperties.filter((value2) => event[value2] !== void 0).reduce((acc, value2) => {
    return { ...acc, [value2]: event[value2] };
  }, {});
  if (event instanceof CustomEvent) {
    customEventSpecificProperties.filter((value2) => event[value2] !== void 0).forEach((value2) => {
      rebuildEvent[value2] = event[value2];
    });
  }
  return rebuildEvent;
}
var require_shams = __commonJS({
  "node_modules/has-symbols/shams.js"(exports, module) {
    module.exports = function hasSymbols() {
      if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
        return false;
      }
      if (typeof Symbol.iterator === "symbol") {
        return true;
      }
      var obj = {};
      var sym = Symbol("test");
      var symObj = Object(sym);
      if (typeof sym === "string") {
        return false;
      }
      if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
        return false;
      }
      if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
        return false;
      }
      var symVal = 42;
      obj[sym] = symVal;
      for (sym in obj) {
        return false;
      }
      if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
        return false;
      }
      if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
      }
      var syms = Object.getOwnPropertySymbols(obj);
      if (syms.length !== 1 || syms[0] !== sym) {
        return false;
      }
      if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
      }
      if (typeof Object.getOwnPropertyDescriptor === "function") {
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
          return false;
        }
      }
      return true;
    };
  }
});
var require_has_symbols = __commonJS({
  "node_modules/has-symbols/index.js"(exports, module) {
    var origSymbol = typeof Symbol !== "undefined" && Symbol;
    var hasSymbolSham = require_shams();
    module.exports = function hasNativeSymbols() {
      if (typeof origSymbol !== "function") {
        return false;
      }
      if (typeof Symbol !== "function") {
        return false;
      }
      if (typeof origSymbol("foo") !== "symbol") {
        return false;
      }
      if (typeof Symbol("bar") !== "symbol") {
        return false;
      }
      return hasSymbolSham();
    };
  }
});
var require_implementation = __commonJS({
  "node_modules/function-bind/implementation.js"(exports, module) {
    var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
    var slice = Array.prototype.slice;
    var toStr = Object.prototype.toString;
    var funcType = "[object Function]";
    module.exports = function bind(that) {
      var target = this;
      if (typeof target !== "function" || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
      }
      var args2 = slice.call(arguments, 1);
      var bound;
      var binder = function() {
        if (this instanceof bound) {
          var result2 = target.apply(
            this,
            args2.concat(slice.call(arguments))
          );
          if (Object(result2) === result2) {
            return result2;
          }
          return this;
        } else {
          return target.apply(
            that,
            args2.concat(slice.call(arguments))
          );
        }
      };
      var boundLength = Math.max(0, target.length - args2.length);
      var boundArgs = [];
      for (var i2 = 0; i2 < boundLength; i2++) {
        boundArgs.push("$" + i2);
      }
      bound = Function("binder", "return function (" + boundArgs.join(",") + "){ return binder.apply(this,arguments); }")(binder);
      if (target.prototype) {
        var Empty2 = function Empty22() {
        };
        Empty2.prototype = target.prototype;
        bound.prototype = new Empty2();
        Empty2.prototype = null;
      }
      return bound;
    };
  }
});
var require_function_bind = __commonJS({
  "node_modules/function-bind/index.js"(exports, module) {
    var implementation = require_implementation();
    module.exports = Function.prototype.bind || implementation;
  }
});
var require_src = __commonJS({
  "node_modules/has/src/index.js"(exports, module) {
    var bind = require_function_bind();
    module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);
  }
});
var require_get_intrinsic = __commonJS({
  "node_modules/get-intrinsic/index.js"(exports, module) {
    var undefined2;
    var $SyntaxError = SyntaxError;
    var $Function = Function;
    var $TypeError = TypeError;
    var getEvalledConstructor = function(expressionSyntax) {
      try {
        return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
      } catch (e2) {
      }
    };
    var $gOPD = Object.getOwnPropertyDescriptor;
    if ($gOPD) {
      try {
        $gOPD({}, "");
      } catch (e2) {
        $gOPD = null;
      }
    }
    var throwTypeError = function() {
      throw new $TypeError();
    };
    var ThrowTypeError = $gOPD ? function() {
      try {
        arguments.callee;
        return throwTypeError;
      } catch (calleeThrows) {
        try {
          return $gOPD(arguments, "callee").get;
        } catch (gOPDthrows) {
          return throwTypeError;
        }
      }
    }() : throwTypeError;
    var hasSymbols = require_has_symbols()();
    var getProto = Object.getPrototypeOf || function(x2) {
      return x2.__proto__;
    };
    var needsEval = {};
    var TypedArray = typeof Uint8Array === "undefined" ? undefined2 : getProto(Uint8Array);
    var INTRINSICS = {
      "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
      "%ArrayIteratorPrototype%": hasSymbols ? getProto([][Symbol.iterator]()) : undefined2,
      "%AsyncFromSyncIteratorPrototype%": undefined2,
      "%AsyncFunction%": needsEval,
      "%AsyncGenerator%": needsEval,
      "%AsyncGeneratorFunction%": needsEval,
      "%AsyncIteratorPrototype%": needsEval,
      "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
      "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": Error,
      "%eval%": eval,
      "%EvalError%": EvalError,
      "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
      "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
      "%Function%": $Function,
      "%GeneratorFunction%": needsEval,
      "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
      "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
      "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined2,
      "%JSON%": typeof JSON === "object" ? JSON : undefined2,
      "%Map%": typeof Map === "undefined" ? undefined2 : Map,
      "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols ? undefined2 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": Object,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
      "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
      "%RangeError%": RangeError,
      "%ReferenceError%": ReferenceError,
      "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set === "undefined" ? undefined2 : Set,
      "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols ? undefined2 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": hasSymbols ? getProto(""[Symbol.iterator]()) : undefined2,
      "%Symbol%": hasSymbols ? Symbol : undefined2,
      "%SyntaxError%": $SyntaxError,
      "%ThrowTypeError%": ThrowTypeError,
      "%TypedArray%": TypedArray,
      "%TypeError%": $TypeError,
      "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
      "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
      "%URIError%": URIError,
      "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
      "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
      "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet
    };
    var doEval = function doEval2(name2) {
      var value2;
      if (name2 === "%AsyncFunction%") {
        value2 = getEvalledConstructor("async function () {}");
      } else if (name2 === "%GeneratorFunction%") {
        value2 = getEvalledConstructor("function* () {}");
      } else if (name2 === "%AsyncGeneratorFunction%") {
        value2 = getEvalledConstructor("async function* () {}");
      } else if (name2 === "%AsyncGenerator%") {
        var fn = doEval2("%AsyncGeneratorFunction%");
        if (fn) {
          value2 = fn.prototype;
        }
      } else if (name2 === "%AsyncIteratorPrototype%") {
        var gen = doEval2("%AsyncGenerator%");
        if (gen) {
          value2 = getProto(gen.prototype);
        }
      }
      INTRINSICS[name2] = value2;
      return value2;
    };
    var LEGACY_ALIASES = {
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    };
    var bind = require_function_bind();
    var hasOwn = require_src();
    var $concat = bind.call(Function.call, Array.prototype.concat);
    var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
    var $replace = bind.call(Function.call, String.prototype.replace);
    var $strSlice = bind.call(Function.call, String.prototype.slice);
    var $exec = bind.call(Function.call, RegExp.prototype.exec);
    var rePropName2 = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
    var reEscapeChar2 = /\\(\\)?/g;
    var stringToPath2 = function stringToPath3(string) {
      var first = $strSlice(string, 0, 1);
      var last = $strSlice(string, -1);
      if (first === "%" && last !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
      } else if (last === "%" && first !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
      }
      var result2 = [];
      $replace(string, rePropName2, function(match2, number, quote, subString) {
        result2[result2.length] = quote ? $replace(subString, reEscapeChar2, "$1") : number || match2;
      });
      return result2;
    };
    var getBaseIntrinsic = function getBaseIntrinsic2(name2, allowMissing) {
      var intrinsicName = name2;
      var alias;
      if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = "%" + alias[0] + "%";
      }
      if (hasOwn(INTRINSICS, intrinsicName)) {
        var value2 = INTRINSICS[intrinsicName];
        if (value2 === needsEval) {
          value2 = doEval(intrinsicName);
        }
        if (typeof value2 === "undefined" && !allowMissing) {
          throw new $TypeError("intrinsic " + name2 + " exists, but is not available. Please file an issue!");
        }
        return {
          alias,
          name: intrinsicName,
          value: value2
        };
      }
      throw new $SyntaxError("intrinsic " + name2 + " does not exist!");
    };
    module.exports = function GetIntrinsic(name2, allowMissing) {
      if (typeof name2 !== "string" || name2.length === 0) {
        throw new $TypeError("intrinsic name must be a non-empty string");
      }
      if (arguments.length > 1 && typeof allowMissing !== "boolean") {
        throw new $TypeError('"allowMissing" argument must be a boolean');
      }
      if ($exec(/^%?[^%]*%?$/, name2) === null) {
        throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      }
      var parts = stringToPath2(name2);
      var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
      var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
      var intrinsicRealName = intrinsic.name;
      var value2 = intrinsic.value;
      var skipFurtherCaching = false;
      var alias = intrinsic.alias;
      if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([0, 1], alias));
      }
      for (var i2 = 1, isOwn = true; i2 < parts.length; i2 += 1) {
        var part = parts[i2];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
          throw new $SyntaxError("property names with quotes must have matching quotes");
        }
        if (part === "constructor" || !isOwn) {
          skipFurtherCaching = true;
        }
        intrinsicBaseName += "." + part;
        intrinsicRealName = "%" + intrinsicBaseName + "%";
        if (hasOwn(INTRINSICS, intrinsicRealName)) {
          value2 = INTRINSICS[intrinsicRealName];
        } else if (value2 != null) {
          if (!(part in value2)) {
            if (!allowMissing) {
              throw new $TypeError("base intrinsic for " + name2 + " exists, but the property is not available.");
            }
            return void 0;
          }
          if ($gOPD && i2 + 1 >= parts.length) {
            var desc = $gOPD(value2, part);
            isOwn = !!desc;
            if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
              value2 = desc.get;
            } else {
              value2 = value2[part];
            }
          } else {
            isOwn = hasOwn(value2, part);
            value2 = value2[part];
          }
          if (isOwn && !skipFurtherCaching) {
            INTRINSICS[intrinsicRealName] = value2;
          }
        }
      }
      return value2;
    };
  }
});
var require_call_bind = __commonJS({
  "node_modules/call-bind/index.js"(exports, module) {
    var bind = require_function_bind();
    var GetIntrinsic = require_get_intrinsic();
    var $apply = GetIntrinsic("%Function.prototype.apply%");
    var $call = GetIntrinsic("%Function.prototype.call%");
    var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind.call($call, $apply);
    var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
    var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
    var $max = GetIntrinsic("%Math.max%");
    if ($defineProperty) {
      try {
        $defineProperty({}, "a", { value: 1 });
      } catch (e2) {
        $defineProperty = null;
      }
    }
    module.exports = function callBind(originalFunction) {
      var func = $reflectApply(bind, $call, arguments);
      if ($gOPD && $defineProperty) {
        var desc = $gOPD(func, "length");
        if (desc.configurable) {
          $defineProperty(
            func,
            "length",
            { value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
          );
        }
      }
      return func;
    };
    var applyBind = function applyBind2() {
      return $reflectApply(bind, $apply, arguments);
    };
    if ($defineProperty) {
      $defineProperty(module.exports, "apply", { value: applyBind });
    } else {
      module.exports.apply = applyBind;
    }
  }
});
var require_callBound = __commonJS({
  "node_modules/call-bind/callBound.js"(exports, module) {
    var GetIntrinsic = require_get_intrinsic();
    var callBind = require_call_bind();
    var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
    module.exports = function callBoundIntrinsic(name2, allowMissing) {
      var intrinsic = GetIntrinsic(name2, !!allowMissing);
      if (typeof intrinsic === "function" && $indexOf(name2, ".prototype.") > -1) {
        return callBind(intrinsic);
      }
      return intrinsic;
    };
  }
});
var require_shams2 = __commonJS({
  "node_modules/has-tostringtag/shams.js"(exports, module) {
    var hasSymbols = require_shams();
    module.exports = function hasToStringTagShams() {
      return hasSymbols() && !!Symbol.toStringTag;
    };
  }
});
var require_is_regex = __commonJS({
  "node_modules/is-regex/index.js"(exports, module) {
    var callBound = require_callBound();
    var hasToStringTag = require_shams2()();
    var has;
    var $exec;
    var isRegexMarker;
    var badStringifier;
    if (hasToStringTag) {
      has = callBound("Object.prototype.hasOwnProperty");
      $exec = callBound("RegExp.prototype.exec");
      isRegexMarker = {};
      throwRegexMarker = function() {
        throw isRegexMarker;
      };
      badStringifier = {
        toString: throwRegexMarker,
        valueOf: throwRegexMarker
      };
      if (typeof Symbol.toPrimitive === "symbol") {
        badStringifier[Symbol.toPrimitive] = throwRegexMarker;
      }
    }
    var throwRegexMarker;
    var $toString = callBound("Object.prototype.toString");
    var gOPD = Object.getOwnPropertyDescriptor;
    var regexClass = "[object RegExp]";
    module.exports = hasToStringTag ? function isRegex(value2) {
      if (!value2 || typeof value2 !== "object") {
        return false;
      }
      var descriptor = gOPD(value2, "lastIndex");
      var hasLastIndexDataProperty = descriptor && has(descriptor, "value");
      if (!hasLastIndexDataProperty) {
        return false;
      }
      try {
        $exec(value2, badStringifier);
      } catch (e2) {
        return e2 === isRegexMarker;
      }
    } : function isRegex(value2) {
      if (!value2 || typeof value2 !== "object" && typeof value2 !== "function") {
        return false;
      }
      return $toString(value2) === regexClass;
    };
  }
});
var require_is_function = __commonJS({
  "node_modules/is-function/index.js"(exports, module) {
    module.exports = isFunction3;
    var toString2 = Object.prototype.toString;
    function isFunction3(fn) {
      if (!fn) {
        return false;
      }
      var string = toString2.call(fn);
      return string === "[object Function]" || typeof fn === "function" && string !== "[object RegExp]" || typeof window !== "undefined" && (fn === window.setTimeout || fn === window.alert || fn === window.confirm || fn === window.prompt);
    }
  }
});
var require_is_symbol = __commonJS({
  "node_modules/is-symbol/index.js"(exports, module) {
    var toStr = Object.prototype.toString;
    var hasSymbols = require_has_symbols()();
    if (hasSymbols) {
      symToStr = Symbol.prototype.toString;
      symStringRegex = /^Symbol\(.*\)$/;
      isSymbolObject = function isRealSymbolObject(value2) {
        if (typeof value2.valueOf() !== "symbol") {
          return false;
        }
        return symStringRegex.test(symToStr.call(value2));
      };
      module.exports = function isSymbol3(value2) {
        if (typeof value2 === "symbol") {
          return true;
        }
        if (toStr.call(value2) !== "[object Symbol]") {
          return false;
        }
        try {
          return isSymbolObject(value2);
        } catch (e2) {
          return false;
        }
      };
    } else {
      module.exports = function isSymbol3(value2) {
        return false;
      };
    }
    var symToStr;
    var symStringRegex;
    var isSymbolObject;
  }
});
var import_is_regex = __toESM(require_is_regex());
var import_is_function = __toESM(require_is_function());
var import_is_symbol = __toESM(require_is_symbol());
function isObject(val) {
  return val != null && typeof val === "object" && Array.isArray(val) === false;
}
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal_default = freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root2 = freeGlobal_default || freeSelf || Function("return this")();
var root_default = root2;
var Symbol2 = root_default.Symbol;
var Symbol_default = Symbol2;
var objectProto = Object.prototype;
var hasOwnProperty$1 = objectProto.hasOwnProperty;
var nativeObjectToString = objectProto.toString;
var symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
function getRawTag(value2) {
  var isOwn = hasOwnProperty$1.call(value2, symToStringTag), tag = value2[symToStringTag];
  try {
    value2[symToStringTag] = void 0;
    var unmasked = true;
  } catch (e2) {
  }
  var result2 = nativeObjectToString.call(value2);
  if (unmasked) {
    if (isOwn) {
      value2[symToStringTag] = tag;
    } else {
      delete value2[symToStringTag];
    }
  }
  return result2;
}
var getRawTag_default = getRawTag;
var objectProto2 = Object.prototype;
var nativeObjectToString2 = objectProto2.toString;
function objectToString(value2) {
  return nativeObjectToString2.call(value2);
}
var objectToString_default = objectToString;
var nullTag = "[object Null]";
var undefinedTag = "[object Undefined]";
var symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
function baseGetTag(value2) {
  if (value2 == null) {
    return value2 === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag2 && symToStringTag2 in Object(value2) ? getRawTag_default(value2) : objectToString_default(value2);
}
var baseGetTag_default = baseGetTag;
var symbolProto = Symbol_default ? Symbol_default.prototype : void 0;
symbolProto ? symbolProto.toString : void 0;
function isObject2(value2) {
  var type = typeof value2;
  return value2 != null && (type == "object" || type == "function");
}
var isObject_default = isObject2;
var asyncTag = "[object AsyncFunction]";
var funcTag = "[object Function]";
var genTag = "[object GeneratorFunction]";
var proxyTag = "[object Proxy]";
function isFunction(value2) {
  if (!isObject_default(value2)) {
    return false;
  }
  var tag = baseGetTag_default(value2);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_default = isFunction;
var coreJsData = root_default["__core-js_shared__"];
var coreJsData_default = coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData_default && coreJsData_default.keys && coreJsData_default.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var isMasked_default = isMasked;
var funcProto = Function.prototype;
var funcToString = funcProto.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e2) {
    }
    try {
      return func + "";
    } catch (e2) {
    }
  }
  return "";
}
var toSource_default = toSource;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto2 = Function.prototype;
var objectProto3 = Object.prototype;
var funcToString2 = funcProto2.toString;
var hasOwnProperty2 = objectProto3.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString2.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative(value2) {
  if (!isObject_default(value2) || isMasked_default(value2)) {
    return false;
  }
  var pattern = isFunction_default(value2) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource_default(value2));
}
var baseIsNative_default = baseIsNative;
function getValue(object2, key2) {
  return object2 == null ? void 0 : object2[key2];
}
var getValue_default = getValue;
function getNative(object2, key2) {
  var value2 = getValue_default(object2, key2);
  return baseIsNative_default(value2) ? value2 : void 0;
}
var getNative_default = getNative;
function eq(value2, other) {
  return value2 === other || value2 !== value2 && other !== other;
}
var eq_default = eq;
var nativeCreate = getNative_default(Object, "create");
var nativeCreate_default = nativeCreate;
function hashClear() {
  this.__data__ = nativeCreate_default ? nativeCreate_default(null) : {};
  this.size = 0;
}
var hashClear_default = hashClear;
function hashDelete(key2) {
  var result2 = this.has(key2) && delete this.__data__[key2];
  this.size -= result2 ? 1 : 0;
  return result2;
}
var hashDelete_default = hashDelete;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
var objectProto4 = Object.prototype;
var hasOwnProperty3 = objectProto4.hasOwnProperty;
function hashGet(key2) {
  var data = this.__data__;
  if (nativeCreate_default) {
    var result2 = data[key2];
    return result2 === HASH_UNDEFINED ? void 0 : result2;
  }
  return hasOwnProperty3.call(data, key2) ? data[key2] : void 0;
}
var hashGet_default = hashGet;
var objectProto5 = Object.prototype;
var hasOwnProperty4 = objectProto5.hasOwnProperty;
function hashHas(key2) {
  var data = this.__data__;
  return nativeCreate_default ? data[key2] !== void 0 : hasOwnProperty4.call(data, key2);
}
var hashHas_default = hashHas;
var HASH_UNDEFINED2 = "__lodash_hash_undefined__";
function hashSet(key2, value2) {
  var data = this.__data__;
  this.size += this.has(key2) ? 0 : 1;
  data[key2] = nativeCreate_default && value2 === void 0 ? HASH_UNDEFINED2 : value2;
  return this;
}
var hashSet_default = hashSet;
function Hash(entries) {
  var index3 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index3 < length) {
    var entry = entries[index3];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear_default;
Hash.prototype["delete"] = hashDelete_default;
Hash.prototype.get = hashGet_default;
Hash.prototype.has = hashHas_default;
Hash.prototype.set = hashSet_default;
var Hash_default = Hash;
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
var listCacheClear_default = listCacheClear;
function assocIndexOf(array2, key2) {
  var length = array2.length;
  while (length--) {
    if (eq_default(array2[length][0], key2)) {
      return length;
    }
  }
  return -1;
}
var assocIndexOf_default = assocIndexOf;
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key2) {
  var data = this.__data__, index3 = assocIndexOf_default(data, key2);
  if (index3 < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index3 == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index3, 1);
  }
  --this.size;
  return true;
}
var listCacheDelete_default = listCacheDelete;
function listCacheGet(key2) {
  var data = this.__data__, index3 = assocIndexOf_default(data, key2);
  return index3 < 0 ? void 0 : data[index3][1];
}
var listCacheGet_default = listCacheGet;
function listCacheHas(key2) {
  return assocIndexOf_default(this.__data__, key2) > -1;
}
var listCacheHas_default = listCacheHas;
function listCacheSet(key2, value2) {
  var data = this.__data__, index3 = assocIndexOf_default(data, key2);
  if (index3 < 0) {
    ++this.size;
    data.push([key2, value2]);
  } else {
    data[index3][1] = value2;
  }
  return this;
}
var listCacheSet_default = listCacheSet;
function ListCache(entries) {
  var index3 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index3 < length) {
    var entry = entries[index3];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear_default;
ListCache.prototype["delete"] = listCacheDelete_default;
ListCache.prototype.get = listCacheGet_default;
ListCache.prototype.has = listCacheHas_default;
ListCache.prototype.set = listCacheSet_default;
var ListCache_default = ListCache;
var Map2 = getNative_default(root_default, "Map");
var Map_default = Map2;
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash_default(),
    "map": new (Map_default || ListCache_default)(),
    "string": new Hash_default()
  };
}
var mapCacheClear_default = mapCacheClear;
function isKeyable(value2) {
  var type = typeof value2;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value2 !== "__proto__" : value2 === null;
}
var isKeyable_default = isKeyable;
function getMapData(map, key2) {
  var data = map.__data__;
  return isKeyable_default(key2) ? data[typeof key2 == "string" ? "string" : "hash"] : data.map;
}
var getMapData_default = getMapData;
function mapCacheDelete(key2) {
  var result2 = getMapData_default(this, key2)["delete"](key2);
  this.size -= result2 ? 1 : 0;
  return result2;
}
var mapCacheDelete_default = mapCacheDelete;
function mapCacheGet(key2) {
  return getMapData_default(this, key2).get(key2);
}
var mapCacheGet_default = mapCacheGet;
function mapCacheHas(key2) {
  return getMapData_default(this, key2).has(key2);
}
var mapCacheHas_default = mapCacheHas;
function mapCacheSet(key2, value2) {
  var data = getMapData_default(this, key2), size = data.size;
  data.set(key2, value2);
  this.size += data.size == size ? 0 : 1;
  return this;
}
var mapCacheSet_default = mapCacheSet;
function MapCache(entries) {
  var index3 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index3 < length) {
    var entry = entries[index3];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear_default;
MapCache.prototype["delete"] = mapCacheDelete_default;
MapCache.prototype.get = mapCacheGet_default;
MapCache.prototype.has = mapCacheHas_default;
MapCache.prototype.set = mapCacheSet_default;
var MapCache_default = MapCache;
var FUNC_ERROR_TEXT = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args2 = arguments, key2 = resolver ? resolver.apply(this, args2) : args2[0], cache = memoized.cache;
    if (cache.has(key2)) {
      return cache.get(key2);
    }
    var result2 = func.apply(this, args2);
    memoized.cache = cache.set(key2, result2) || cache;
    return result2;
  };
  memoized.cache = new (memoize.Cache || MapCache_default)();
  return memoized;
}
memoize.Cache = MapCache_default;
var memoize_default = memoize;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result2 = memoize_default(func, function(key2) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key2;
  });
  var cache = result2.cache;
  return result2;
}
var memoizeCapped_default = memoizeCapped;
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
memoizeCapped_default(function(string) {
  var result2 = [];
  if (string.charCodeAt(0) === 46) {
    result2.push("");
  }
  string.replace(rePropName, function(match2, number, quote, subString) {
    result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match2);
  });
  return result2;
});
var isObject3 = isObject;
var removeCodeComments = (code) => {
  let inQuoteChar = null;
  let inBlockComment = false;
  let inLineComment = false;
  let inRegexLiteral = false;
  let newCode = "";
  if (code.indexOf("//") >= 0 || code.indexOf("/*") >= 0) {
    for (let i2 = 0; i2 < code.length; i2 += 1) {
      if (!inQuoteChar && !inBlockComment && !inLineComment && !inRegexLiteral) {
        if (code[i2] === '"' || code[i2] === "'" || code[i2] === "`") {
          inQuoteChar = code[i2];
        } else if (code[i2] === "/" && code[i2 + 1] === "*") {
          inBlockComment = true;
        } else if (code[i2] === "/" && code[i2 + 1] === "/") {
          inLineComment = true;
        } else if (code[i2] === "/" && code[i2 + 1] !== "/") {
          inRegexLiteral = true;
        }
      } else {
        if (inQuoteChar && (code[i2] === inQuoteChar && code[i2 - 1] !== "\\" || code[i2] === "\n" && inQuoteChar !== "`")) {
          inQuoteChar = null;
        }
        if (inRegexLiteral && (code[i2] === "/" && code[i2 - 1] !== "\\" || code[i2] === "\n")) {
          inRegexLiteral = false;
        }
        if (inBlockComment && code[i2 - 1] === "/" && code[i2 - 2] === "*") {
          inBlockComment = false;
        }
        if (inLineComment && code[i2] === "\n") {
          inLineComment = false;
        }
      }
      if (!inBlockComment && !inLineComment) {
        newCode += code[i2];
      }
    }
  } else {
    newCode = code;
  }
  return newCode;
};
var cleanCode = memoize$1(1e4)(
  (code) => removeCodeComments(code).replace(/\n\s*/g, "").trim()
);
var convertShorthandMethods = function convertShorthandMethods2(key2, stringified) {
  const fnHead = stringified.slice(0, stringified.indexOf("{"));
  const fnBody = stringified.slice(stringified.indexOf("{"));
  if (fnHead.includes("=>")) {
    return stringified;
  }
  if (fnHead.includes("function")) {
    return stringified;
  }
  let modifiedHead = fnHead;
  modifiedHead = modifiedHead.replace(key2, "function");
  return modifiedHead + fnBody;
};
var dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;
function convertUnconventionalData(data) {
  if (!isObject3(data)) {
    return data;
  }
  let result2 = data;
  let wasMutated = false;
  if (typeof Event !== "undefined" && data instanceof Event) {
    result2 = extractEventHiddenProperties(result2);
    wasMutated = true;
  }
  result2 = Object.keys(result2).reduce((acc, key2) => {
    try {
      if (result2[key2]) {
        result2[key2].toJSON;
      }
      acc[key2] = result2[key2];
    } catch (err) {
      wasMutated = true;
    }
    return acc;
  }, {});
  return wasMutated ? result2 : data;
}
var replacer = function replacer2(options2) {
  let objects;
  let map;
  let stack;
  let keys2;
  return function replace(key2, value2) {
    try {
      if (key2 === "") {
        keys2 = [];
        objects = /* @__PURE__ */ new Map([[value2, "[]"]]);
        map = /* @__PURE__ */ new Map();
        stack = [];
        return value2;
      }
      const origin = map.get(this) || this;
      while (stack.length && origin !== stack[0]) {
        stack.shift();
        keys2.pop();
      }
      if (typeof value2 === "boolean") {
        return value2;
      }
      if (value2 === void 0) {
        if (!options2.allowUndefined) {
          return void 0;
        }
        return "_undefined_";
      }
      if (value2 === null) {
        return null;
      }
      if (typeof value2 === "number") {
        if (value2 === -Infinity) {
          return "_-Infinity_";
        }
        if (value2 === Infinity) {
          return "_Infinity_";
        }
        if (Number.isNaN(value2)) {
          return "_NaN_";
        }
        return value2;
      }
      if (typeof value2 === "bigint") {
        return `_bigint_${value2.toString()}`;
      }
      if (typeof value2 === "string") {
        if (dateFormat.test(value2)) {
          if (!options2.allowDate) {
            return void 0;
          }
          return `_date_${value2}`;
        }
        return value2;
      }
      if ((0, import_is_regex.default)(value2)) {
        if (!options2.allowRegExp) {
          return void 0;
        }
        return `_regexp_${value2.flags}|${value2.source}`;
      }
      if ((0, import_is_function.default)(value2)) {
        if (!options2.allowFunction) {
          return void 0;
        }
        const { name: name2 } = value2;
        const stringified = value2.toString();
        if (!stringified.match(
          /(\[native code\]|WEBPACK_IMPORTED_MODULE|__webpack_exports__|__webpack_require__)/
        )) {
          return `_function_${name2}|${cleanCode(convertShorthandMethods(key2, stringified))}`;
        }
        return `_function_${name2}|${(() => {
        }).toString()}`;
      }
      if ((0, import_is_symbol.default)(value2)) {
        if (!options2.allowSymbol) {
          return void 0;
        }
        const globalRegistryKey = Symbol.keyFor(value2);
        if (globalRegistryKey !== void 0) {
          return `_gsymbol_${globalRegistryKey}`;
        }
        return `_symbol_${value2.toString().slice(7, -1)}`;
      }
      if (stack.length >= options2.maxDepth) {
        if (Array.isArray(value2)) {
          return `[Array(${value2.length})]`;
        }
        return "[Object]";
      }
      if (value2 === this) {
        return `_duplicate_${JSON.stringify(keys2)}`;
      }
      if (value2 instanceof Error && options2.allowError) {
        return {
          __isConvertedError__: true,
          errorProperties: {
            ...value2.cause ? { cause: value2.cause } : {},
            ...value2,
            name: value2.name,
            message: value2.message,
            stack: value2.stack,
            "_constructor-name_": value2.constructor.name
          }
        };
      }
      if (value2.constructor && value2.constructor.name && value2.constructor.name !== "Object" && !Array.isArray(value2) && !options2.allowClass) {
        return void 0;
      }
      const found = objects.get(value2);
      if (!found) {
        const converted = Array.isArray(value2) ? value2 : convertUnconventionalData(value2);
        if (value2.constructor && value2.constructor.name && value2.constructor.name !== "Object" && !Array.isArray(value2) && options2.allowClass) {
          try {
            Object.assign(converted, { "_constructor-name_": value2.constructor.name });
          } catch (e2) {
          }
        }
        keys2.push(key2);
        stack.unshift(converted);
        objects.set(value2, JSON.stringify(keys2));
        if (value2 !== converted) {
          map.set(value2, converted);
        }
        return converted;
      }
      return `_duplicate_${found}`;
    } catch (e2) {
      return void 0;
    }
  };
};
var defaultOptions$1 = {
  maxDepth: 10,
  space: void 0,
  allowFunction: true,
  allowRegExp: true,
  allowDate: true,
  allowClass: true,
  allowError: true,
  allowUndefined: true,
  allowSymbol: true,
  lazyEval: true
};
var stringify = (data, options2 = {}) => {
  const mergedOptions = { ...defaultOptions$1, ...options2 };
  return JSON.stringify(convertUnconventionalData(data), replacer(mergedOptions), options2.space);
};
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
/**
 * @license
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="es" -o ./`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
function BuildHtml(options) {
  var forEach = [].forEach;
  var some = [].some;
  var body = typeof window !== "undefined" && document.body;
  var tocElement;
  var currentlyHighlighting = true;
  var SPACE_CHAR = " ";
  function createEl(d2, container) {
    var link = container.appendChild(createLink(d2));
    if (d2.children.length) {
      var list = createList(d2.isCollapsed);
      d2.children.forEach(function(child) {
        createEl(child, list);
      });
      link.appendChild(list);
    }
  }
  function render(parent, data) {
    var collapsed = false;
    var container = createList(collapsed);
    data.forEach(function(d2) {
      createEl(d2, container);
    });
    tocElement = parent || tocElement;
    if (tocElement === null) {
      return;
    }
    if (tocElement.firstChild) {
      tocElement.removeChild(tocElement.firstChild);
    }
    if (data.length === 0) {
      return tocElement;
    }
    return tocElement.appendChild(container);
  }
  function createLink(data) {
    var item = document.createElement("li");
    var a2 = document.createElement("a");
    if (options.listItemClass) {
      item.setAttribute("class", options.listItemClass);
    }
    if (options.onClick) {
      a2.onclick = options.onClick;
    }
    if (options.includeTitleTags) {
      a2.setAttribute("title", data.textContent);
    }
    if (options.includeHtml && data.childNodes.length) {
      forEach.call(data.childNodes, function(node) {
        a2.appendChild(node.cloneNode(true));
      });
    } else {
      a2.textContent = data.textContent;
    }
    a2.setAttribute("href", options.basePath + "#" + data.id);
    a2.setAttribute("class", options.linkClass + SPACE_CHAR + "node-name--" + data.nodeName + SPACE_CHAR + options.extraLinkClasses);
    item.appendChild(a2);
    return item;
  }
  function createList(isCollapsed) {
    var listElement = options.orderedList ? "ol" : "ul";
    var list = document.createElement(listElement);
    var classes = options.listClass + SPACE_CHAR + options.extraListClasses;
    if (isCollapsed) {
      classes = classes + SPACE_CHAR + options.collapsibleClass;
      classes = classes + SPACE_CHAR + options.isCollapsedClass;
    }
    list.setAttribute("class", classes);
    return list;
  }
  function updateFixedSidebarClass() {
    if (options.scrollContainer && document.querySelector(options.scrollContainer)) {
      var top2;
      top2 = document.querySelector(options.scrollContainer).scrollTop;
    } else {
      top2 = document.documentElement.scrollTop || body.scrollTop;
    }
    var posFixedEl = document.querySelector(options.positionFixedSelector);
    if (options.fixedSidebarOffset === "auto") {
      options.fixedSidebarOffset = tocElement.offsetTop;
    }
    if (top2 > options.fixedSidebarOffset) {
      if (posFixedEl.className.indexOf(options.positionFixedClass) === -1) {
        posFixedEl.className += SPACE_CHAR + options.positionFixedClass;
      }
    } else {
      posFixedEl.className = posFixedEl.className.replace(SPACE_CHAR + options.positionFixedClass, "");
    }
  }
  function getHeadingTopPos(obj) {
    var position = 0;
    if (obj !== null) {
      position = obj.offsetTop;
      if (options.hasInnerContainers) {
        position += getHeadingTopPos(obj.offsetParent);
      }
    }
    return position;
  }
  function updateClassname(obj, className) {
    if (obj && obj.className !== className) {
      obj.className = className;
    }
    return obj;
  }
  function updateToc(headingsArray) {
    if (options.scrollContainer && document.querySelector(options.scrollContainer)) {
      var top2;
      top2 = document.querySelector(options.scrollContainer).scrollTop;
    } else {
      top2 = document.documentElement.scrollTop || body.scrollTop;
    }
    if (options.positionFixedSelector) {
      updateFixedSidebarClass();
    }
    var headings = headingsArray;
    var topHeader;
    if (currentlyHighlighting && tocElement !== null && headings.length > 0) {
      some.call(headings, function(heading, i2) {
        if (getHeadingTopPos(heading) > top2 + options.headingsOffset + 10) {
          var index3 = i2 === 0 ? i2 : i2 - 1;
          topHeader = headings[index3];
          return true;
        } else if (i2 === headings.length - 1) {
          topHeader = headings[headings.length - 1];
          return true;
        }
      });
      var oldActiveTocLink = tocElement.querySelector("." + options.activeLinkClass);
      var activeTocLink = tocElement.querySelector("." + options.linkClass + ".node-name--" + topHeader.nodeName + '[href="' + options.basePath + "#" + topHeader.id.replace(/([ #;&,.+*~':"!^$[\]()=>|/\\@])/g, "\\$1") + '"]');
      if (oldActiveTocLink === activeTocLink) {
        return;
      }
      var tocLinks = tocElement.querySelectorAll("." + options.linkClass);
      forEach.call(tocLinks, function(tocLink) {
        updateClassname(tocLink, tocLink.className.replace(SPACE_CHAR + options.activeLinkClass, ""));
      });
      var tocLis = tocElement.querySelectorAll("." + options.listItemClass);
      forEach.call(tocLis, function(tocLi) {
        updateClassname(tocLi, tocLi.className.replace(SPACE_CHAR + options.activeListItemClass, ""));
      });
      if (activeTocLink && activeTocLink.className.indexOf(options.activeLinkClass) === -1) {
        activeTocLink.className += SPACE_CHAR + options.activeLinkClass;
      }
      var li = activeTocLink && activeTocLink.parentNode;
      if (li && li.className.indexOf(options.activeListItemClass) === -1) {
        li.className += SPACE_CHAR + options.activeListItemClass;
      }
      var tocLists = tocElement.querySelectorAll("." + options.listClass + "." + options.collapsibleClass);
      forEach.call(tocLists, function(list) {
        if (list.className.indexOf(options.isCollapsedClass) === -1) {
          list.className += SPACE_CHAR + options.isCollapsedClass;
        }
      });
      if (activeTocLink && activeTocLink.nextSibling && activeTocLink.nextSibling.className.indexOf(options.isCollapsedClass) !== -1) {
        updateClassname(activeTocLink.nextSibling, activeTocLink.nextSibling.className.replace(SPACE_CHAR + options.isCollapsedClass, ""));
      }
      removeCollapsedFromParents(activeTocLink && activeTocLink.parentNode.parentNode);
    }
  }
  function removeCollapsedFromParents(element) {
    if (element && element.className.indexOf(options.collapsibleClass) !== -1 && element.className.indexOf(options.isCollapsedClass) !== -1) {
      updateClassname(element, element.className.replace(SPACE_CHAR + options.isCollapsedClass, ""));
      return removeCollapsedFromParents(element.parentNode.parentNode);
    }
    return element;
  }
  function disableTocAnimation(event) {
    var target = event.target || event.srcElement;
    if (typeof target.className !== "string" || target.className.indexOf(options.linkClass) === -1) {
      return;
    }
    currentlyHighlighting = false;
  }
  function enableTocAnimation() {
    currentlyHighlighting = true;
  }
  return {
    enableTocAnimation,
    disableTocAnimation,
    render,
    updateToc
  };
}
const defaultOptions = {
  // Where to render the table of contents.
  tocSelector: ".js-toc",
  // Where to grab the headings to build the table of contents.
  contentSelector: ".js-toc-content",
  // Which headings to grab inside of the contentSelector element.
  headingSelector: "h1, h2, h3",
  // Headings that match the ignoreSelector will be skipped.
  ignoreSelector: ".js-toc-ignore",
  // For headings inside relative or absolute positioned containers within content
  hasInnerContainers: false,
  // Main class to add to links.
  linkClass: "toc-link",
  // Extra classes to add to links.
  extraLinkClasses: "",
  // Class to add to active links,
  // the link corresponding to the top most heading on the page.
  activeLinkClass: "is-active-link",
  // Main class to add to lists.
  listClass: "toc-list",
  // Extra classes to add to lists.
  extraListClasses: "",
  // Class that gets added when a list should be collapsed.
  isCollapsedClass: "is-collapsed",
  // Class that gets added when a list should be able
  // to be collapsed but isn't necessarily collapsed.
  collapsibleClass: "is-collapsible",
  // Class to add to list items.
  listItemClass: "toc-list-item",
  // Class to add to active list items.
  activeListItemClass: "is-active-li",
  // How many heading levels should not be collapsed.
  // For example, number 6 will show everything since
  // there are only 6 heading levels and number 0 will collapse them all.
  // The sections that are hidden will open
  // and close as you scroll to headings within them.
  collapseDepth: 0,
  // Smooth scrolling enabled.
  scrollSmooth: true,
  // Smooth scroll duration.
  scrollSmoothDuration: 420,
  // Smooth scroll offset.
  scrollSmoothOffset: 0,
  // Callback for scroll end.
  scrollEndCallback: function(e2) {
  },
  // Headings offset between the headings and the top of the document (this is meant for minor adjustments).
  headingsOffset: 1,
  // Timeout between events firing to make sure it's
  // not too rapid (for performance reasons).
  throttleTimeout: 50,
  // Element to add the positionFixedClass to.
  positionFixedSelector: null,
  // Fixed position class to add to make sidebar fixed after scrolling
  // down past the fixedSidebarOffset.
  positionFixedClass: "is-position-fixed",
  // fixedSidebarOffset can be any number but by default is set
  // to auto which sets the fixedSidebarOffset to the sidebar
  // element's offsetTop from the top of the document on init.
  fixedSidebarOffset: "auto",
  // includeHtml can be set to true to include the HTML markup from the
  // heading node instead of just including the innerText.
  includeHtml: false,
  // includeTitleTags automatically sets the html title tag of the link
  // to match the title. This can be useful for SEO purposes or
  // when truncating titles.
  includeTitleTags: false,
  // onclick function to apply to all links in toc. will be called with
  // the event as the first parameter, and this can be used to stop,
  // propagation, prevent default or perform action
  onClick: function(e2) {
  },
  // orderedList can be set to false to generate unordered lists (ul)
  // instead of ordered lists (ol)
  orderedList: true,
  // If there is a fixed article scroll container, set to calculate titles' offset
  scrollContainer: null,
  // prevent ToC DOM rendering if it's already rendered by an external system
  skipRendering: false,
  // Optional callback to change heading labels.
  // For example it can be used to cut down and put ellipses on multiline headings you deem too long.
  // Called each time a heading is parsed. Expects a string and returns the modified label to display.
  // Additionally, the attribute `data-heading-label` may be used on a heading to specify
  // a shorter string to be used in the TOC.
  // function (string) => string
  headingLabelCallback: false,
  // ignore headings that are hidden in DOM
  ignoreHiddenElements: false,
  // Optional callback to modify properties of parsed headings.
  // The heading element is passed in node parameter and information parsed by default parser is provided in obj parameter.
  // Function has to return the same or modified obj.
  // The heading will be excluded from TOC if nothing is returned.
  // function (object, HTMLElement) => object | void
  headingObjectCallback: null,
  // Set the base path, useful if you use a `base` tag in `head`.
  basePath: "",
  // Only takes affect when `tocSelector` is scrolling,
  // keep the toc scroll position in sync with the content.
  disableTocScrollSync: false,
  // Offset for the toc scroll (top) position when scrolling the page.
  // Only effective if `disableTocScrollSync` is false.
  tocScrollOffset: 0
};
function parseContent(options) {
  var reduce = [].reduce;
  function getLastItem(array2) {
    return array2[array2.length - 1];
  }
  function getHeadingLevel(heading) {
    return +heading.nodeName.toUpperCase().replace("H", "");
  }
  function isHTMLElement2(maybeElement) {
    try {
      return maybeElement instanceof window.HTMLElement || maybeElement instanceof window.parent.HTMLElement;
    } catch (e2) {
      return maybeElement instanceof window.HTMLElement;
    }
  }
  function getHeadingObject(heading) {
    if (!isHTMLElement2(heading)) return heading;
    if (options.ignoreHiddenElements && (!heading.offsetHeight || !heading.offsetParent)) {
      return null;
    }
    const headingLabel = heading.getAttribute("data-heading-label") || (options.headingLabelCallback ? String(options.headingLabelCallback(heading.innerText)) : (heading.innerText || heading.textContent).trim());
    var obj = {
      id: heading.id,
      children: [],
      nodeName: heading.nodeName,
      headingLevel: getHeadingLevel(heading),
      textContent: headingLabel
    };
    if (options.includeHtml) {
      obj.childNodes = heading.childNodes;
    }
    if (options.headingObjectCallback) {
      return options.headingObjectCallback(obj, heading);
    }
    return obj;
  }
  function addNode(node, nest) {
    var obj = getHeadingObject(node);
    var level = obj.headingLevel;
    var array2 = nest;
    var lastItem = getLastItem(array2);
    var lastItemLevel = lastItem ? lastItem.headingLevel : 0;
    var counter = level - lastItemLevel;
    while (counter > 0) {
      lastItem = getLastItem(array2);
      if (lastItem && level === lastItem.headingLevel) {
        break;
      } else if (lastItem && lastItem.children !== void 0) {
        array2 = lastItem.children;
      }
      counter--;
    }
    if (level >= options.collapseDepth) {
      obj.isCollapsed = true;
    }
    array2.push(obj);
    return array2;
  }
  function selectHeadings(contentElement, headingSelector) {
    var selectors = headingSelector;
    if (options.ignoreSelector) {
      selectors = headingSelector.split(",").map(function mapSelectors(selector) {
        return selector.trim() + ":not(" + options.ignoreSelector + ")";
      });
    }
    try {
      return contentElement.querySelectorAll(selectors);
    } catch (e2) {
      console.warn("Headers not found with selector: " + selectors);
      return null;
    }
  }
  function nestHeadingsArray(headingsArray) {
    return reduce.call(headingsArray, function reducer(prev, curr) {
      var currentHeading = getHeadingObject(curr);
      if (currentHeading) {
        addNode(currentHeading, prev.nest);
      }
      return prev;
    }, {
      nest: []
    });
  }
  return {
    nestHeadingsArray,
    selectHeadings
  };
}
function initSmoothScrolling(options) {
  var duration = options.duration;
  var offset2 = options.offset;
  if (typeof window === "undefined" || typeof location === "undefined") return;
  var pageUrl = location.hash ? stripHash(location.href) : location.href;
  delegatedLinkHijacking();
  function delegatedLinkHijacking() {
    document.body.addEventListener("click", onClick, false);
    function onClick(e2) {
      if (!isInPageLink(e2.target) || e2.target.className.indexOf("no-smooth-scroll") > -1 || e2.target.href.charAt(e2.target.href.length - 2) === "#" && e2.target.href.charAt(e2.target.href.length - 1) === "!" || e2.target.className.indexOf(options.linkClass) === -1) {
        return;
      }
      jump(e2.target.hash, {
        duration,
        offset: offset2,
        callback: function() {
          setFocus(e2.target.hash);
        }
      });
    }
  }
  function isInPageLink(n2) {
    return n2.tagName.toLowerCase() === "a" && (n2.hash.length > 0 || n2.href.charAt(n2.href.length - 1) === "#") && (stripHash(n2.href) === pageUrl || stripHash(n2.href) + "#" === pageUrl);
  }
  function stripHash(url) {
    return url.slice(0, url.lastIndexOf("#"));
  }
  function setFocus(hash3) {
    var element = document.getElementById(hash3.substring(1));
    if (element) {
      if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
        element.tabIndex = -1;
      }
      element.focus();
    }
  }
}
function jump(target, options) {
  var start2 = window.pageYOffset;
  var opt = {
    duration: options.duration,
    offset: options.offset || 0,
    callback: options.callback,
    easing: options.easing || easeInOutQuad
  };
  var tgt = document.querySelector('[id="' + decodeURI(target).split("#").join("") + '"]') || document.querySelector('[id="' + target.split("#").join("") + '"]');
  var distance = typeof target === "string" ? opt.offset + (target ? tgt && tgt.getBoundingClientRect().top || 0 : -(document.documentElement.scrollTop || document.body.scrollTop)) : target;
  var duration = typeof opt.duration === "function" ? opt.duration(distance) : opt.duration;
  var timeStart;
  var timeElapsed;
  requestAnimationFrame(function(time) {
    timeStart = time;
    loop(time);
  });
  function loop(time) {
    timeElapsed = time - timeStart;
    window.scrollTo(0, opt.easing(timeElapsed, start2, distance, duration));
    if (timeElapsed < duration) {
      requestAnimationFrame(loop);
    } else {
      end2();
    }
  }
  function end2() {
    window.scrollTo(0, start2 + distance);
    if (typeof opt.callback === "function") {
      opt.callback();
    }
  }
  function easeInOutQuad(t, b2, c2, d2) {
    t /= d2 / 2;
    if (t < 1) return c2 / 2 * t * t + b2;
    t--;
    return -c2 / 2 * (t * (t - 2) - 1) + b2;
  }
}
const SCROLL_LEEWAY = 30;
function updateTocScroll(options) {
  var toc = options.tocElement || document.querySelector(options.tocSelector);
  if (toc && toc.scrollHeight > toc.clientHeight) {
    var activeItem = toc.querySelector("." + options.activeListItemClass);
    if (activeItem) {
      var cTop = toc.scrollTop;
      var cBottom = cTop + toc.clientHeight;
      var eTop = activeItem.offsetTop;
      var eBottom = eTop + activeItem.clientHeight;
      if (eTop < cTop + options.tocScrollOffset) {
        toc.scrollTop -= cTop - eTop + options.tocScrollOffset;
      } else if (eBottom > cBottom - options.tocScrollOffset - SCROLL_LEEWAY) {
        toc.scrollTop += eBottom - cBottom + options.tocScrollOffset + 2 * SCROLL_LEEWAY;
      }
    }
  }
}
let _options = {};
let _buildHtml;
let _parseContent;
let _headingsArray;
let _scrollListener;
let clickListener;
function init(customOptions) {
  _options = extend(defaultOptions, customOptions || {});
  if (_options.scrollSmooth) {
    _options.duration = _options.scrollSmoothDuration;
    _options.offset = _options.scrollSmoothOffset;
    initSmoothScrolling(_options);
  }
  _buildHtml = BuildHtml(_options);
  _parseContent = parseContent(_options);
  destroy();
  const contentElement = getContentElement(_options);
  if (contentElement === null) {
    return;
  }
  const tocElement = getTocElement(_options);
  if (tocElement === null) {
    return;
  }
  _headingsArray = _parseContent.selectHeadings(
    contentElement,
    _options.headingSelector
  );
  if (_headingsArray === null) {
    return;
  }
  const nestedHeadingsObj = _parseContent.nestHeadingsArray(_headingsArray);
  const nestedHeadings = nestedHeadingsObj.nest;
  if (!_options.skipRendering) {
    _buildHtml.render(tocElement, nestedHeadings);
  } else {
    return this;
  }
  _scrollListener = throttle(function(e2) {
    _buildHtml.updateToc(_headingsArray);
    !_options.disableTocScrollSync && updateTocScroll(_options);
    const isTop = e2 && e2.target && e2.target.scrollingElement && e2.target.scrollingElement.scrollTop === 0;
    if (e2 && (e2.eventPhase === 0 || e2.currentTarget === null) || isTop) {
      _buildHtml.updateToc(_headingsArray);
      if (_options.scrollEndCallback) {
        _options.scrollEndCallback(e2);
      }
    }
  }, _options.throttleTimeout);
  _scrollListener();
  if (_options.scrollContainer && document.querySelector(_options.scrollContainer)) {
    document.querySelector(_options.scrollContainer).addEventListener("scroll", _scrollListener, false);
    document.querySelector(_options.scrollContainer).addEventListener("resize", _scrollListener, false);
  } else {
    document.addEventListener("scroll", _scrollListener, false);
    document.addEventListener("resize", _scrollListener, false);
  }
  let timeout = null;
  clickListener = throttle(function(event) {
    if (_options.scrollSmooth) {
      _buildHtml.disableTocAnimation(event);
    }
    _buildHtml.updateToc(_headingsArray);
    timeout && clearTimeout(timeout);
    timeout = setTimeout(function() {
      _buildHtml.enableTocAnimation();
    }, _options.scrollSmoothDuration);
  }, _options.throttleTimeout);
  if (_options.scrollContainer && document.querySelector(_options.scrollContainer)) {
    document.querySelector(_options.scrollContainer).addEventListener("click", clickListener, false);
  } else {
    document.addEventListener("click", clickListener, false);
  }
}
function destroy() {
  const tocElement = getTocElement(_options);
  if (tocElement === null) {
    return;
  }
  if (!_options.skipRendering) {
    if (tocElement) {
      tocElement.innerHTML = "";
    }
  }
  if (_options.scrollContainer && document.querySelector(_options.scrollContainer)) {
    document.querySelector(_options.scrollContainer).removeEventListener("scroll", _scrollListener, false);
    document.querySelector(_options.scrollContainer).removeEventListener("resize", _scrollListener, false);
    if (_buildHtml) {
      document.querySelector(_options.scrollContainer).removeEventListener("click", clickListener, false);
    }
  } else {
    document.removeEventListener("scroll", _scrollListener, false);
    document.removeEventListener("resize", _scrollListener, false);
    if (_buildHtml) {
      document.removeEventListener("click", clickListener, false);
    }
  }
}
const hasOwnProperty = Object.prototype.hasOwnProperty;
function extend() {
  const target = {};
  for (let i2 = 0; i2 < arguments.length; i2++) {
    const source = arguments[i2];
    for (const key in source) {
      if (hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
}
function throttle(fn, threshold, scope) {
  threshold || (threshold = 250);
  let last;
  let deferTimer;
  return function() {
    const context = this;
    const now = +/* @__PURE__ */ new Date();
    const args = arguments;
    if (last && now < last + threshold) {
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function() {
        last = now;
        fn.apply(context, args);
      }, threshold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}
function getContentElement(options) {
  try {
    return options.contentElement || document.querySelector(options.contentSelector);
  } catch (e2) {
    console.warn("Contents element not found: " + options.contentSelector);
    return null;
  }
}
function getTocElement(options) {
  try {
    return options.tocElement || document.querySelector(options.tocSelector);
  } catch (e2) {
    console.warn("TOC element not found: " + options.tocSelector);
    return null;
  }
}
const { global: global$1 } = __STORYBOOK_MODULE_GLOBAL__;
const { deprecate, once, logger } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
const { filterArgTypes, composeConfigs, Preview: Preview$1, DocsContext: DocsContext$1 } = __STORYBOOK_MODULE_PREVIEW_API__;
const { GLOBALS_UPDATED, STORY_ARGS_UPDATED, UPDATE_STORY_ARGS, RESET_STORY_ARGS, NAVIGATE_URL } = __STORYBOOK_MODULE_CORE_EVENTS__;
__STORYBOOK_MODULE_CHANNELS__;
var Wrapper = newStyled.div(withReset, ({ theme }) => ({ backgroundColor: theme.base === "light" ? "rgba(0,0,0,.01)" : "rgba(255,255,255,.01)", borderRadius: theme.appBorderRadius, border: `1px dashed ${theme.appBorderColor}`, display: "flex", alignItems: "center", justifyContent: "center", padding: 20, margin: "25px 0 40px", color: curriedTransparentize$1(0.3, theme.color.defaultText), fontSize: theme.typography.size.s2 })), EmptyBlock = (props) => React.createElement(Wrapper, { ...props, className: "docblock-emptyblock sb-unstyled" });
var StyledSyntaxHighlighter = newStyled(SyntaxHighlighter2)(({ theme }) => ({ fontSize: `${theme.typography.size.s2 - 1}px`, lineHeight: "19px", margin: "25px 0 40px", borderRadius: theme.appBorderRadius, boxShadow: theme.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", "pre.prismjs": { padding: 20, background: "inherit" } }));
var SourceSkeletonWrapper = newStyled.div(({ theme }) => ({ background: theme.background.content, borderRadius: theme.appBorderRadius, border: `1px solid ${theme.appBorderColor}`, boxShadow: theme.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", margin: "25px 0 40px", padding: "20px 20px 20px 22px" })), SourceSkeletonPlaceholder = newStyled.div(({ theme }) => ({ animation: `${theme.animation.glow} 1.5s ease-in-out infinite`, background: theme.appBorderColor, height: 17, marginTop: 1, width: "60%", [`&:first-child${ignoreSsrWarning}`]: { margin: 0 } })), SourceSkeleton = () => React.createElement(SourceSkeletonWrapper, null, React.createElement(SourceSkeletonPlaceholder, null), React.createElement(SourceSkeletonPlaceholder, { style: { width: "80%" } }), React.createElement(SourceSkeletonPlaceholder, { style: { width: "30%" } }), React.createElement(SourceSkeletonPlaceholder, { style: { width: "80%" } })), Source = ({ isLoading, error, language, code, dark, format: format2 = false, ...rest }) => {
  let { typography: typography2 } = useTheme();
  if (isLoading) return React.createElement(SourceSkeleton, null);
  if (error) return React.createElement(EmptyBlock, null, error);
  let syntaxHighlighter = React.createElement(StyledSyntaxHighlighter, { bordered: true, copyable: true, format: format2, language, className: "docblock-source sb-unstyled", ...rest }, code);
  if (typeof dark > "u") return syntaxHighlighter;
  let overrideTheme = dark ? themes.dark : themes.light;
  return React.createElement(ThemeProvider, { theme: convert({ ...overrideTheme, fontCode: typography2.fonts.mono, fontBase: typography2.fonts.base }) }, syntaxHighlighter);
};
var toGlobalSelector = (element) => `& :where(${element}:not(.sb-anchor, .sb-unstyled, .sb-unstyled ${element}))`, breakpoint = 600, Title = newStyled.h1(withReset, ({ theme }) => ({ color: theme.color.defaultText, fontSize: theme.typography.size.m3, fontWeight: theme.typography.weight.bold, lineHeight: "32px", [`@media (min-width: ${breakpoint}px)`]: { fontSize: theme.typography.size.l1, lineHeight: "36px", marginBottom: "16px" } })), Subtitle = newStyled.h2(withReset, ({ theme }) => ({ fontWeight: theme.typography.weight.regular, fontSize: theme.typography.size.s3, lineHeight: "20px", borderBottom: "none", marginBottom: 15, [`@media (min-width: ${breakpoint}px)`]: { fontSize: theme.typography.size.m1, lineHeight: "28px", marginBottom: 24 }, color: curriedTransparentize$1(0.25, theme.color.defaultText) })), DocsContent = newStyled.div(({ theme }) => {
  let reset = { fontFamily: theme.typography.fonts.base, fontSize: theme.typography.size.s3, margin: 0, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", WebkitOverflowScrolling: "touch" }, headers = { margin: "20px 0 8px", padding: 0, cursor: "text", position: "relative", color: theme.color.defaultText, "&:first-of-type": { marginTop: 0, paddingTop: 0 }, "&:hover a.anchor": { textDecoration: "none" }, "& code": { fontSize: "inherit" } }, code = { lineHeight: 1, margin: "0 2px", padding: "3px 5px", whiteSpace: "nowrap", borderRadius: 3, fontSize: theme.typography.size.s2 - 1, border: theme.base === "light" ? `1px solid ${theme.color.mediumlight}` : `1px solid ${theme.color.darker}`, color: theme.base === "light" ? curriedTransparentize$1(0.1, theme.color.defaultText) : curriedTransparentize$1(0.3, theme.color.defaultText), backgroundColor: theme.base === "light" ? theme.color.lighter : theme.color.border };
  return { maxWidth: 1e3, width: "100%", [toGlobalSelector("a")]: { ...reset, fontSize: "inherit", lineHeight: "24px", color: theme.color.secondary, textDecoration: "none", "&.absent": { color: "#cc0000" }, "&.anchor": { display: "block", paddingLeft: 30, marginLeft: -30, cursor: "pointer", position: "absolute", top: 0, left: 0, bottom: 0 } }, [toGlobalSelector("blockquote")]: { ...reset, margin: "16px 0", borderLeft: `4px solid ${theme.color.medium}`, padding: "0 15px", color: theme.color.dark, "& > :first-of-type": { marginTop: 0 }, "& > :last-child": { marginBottom: 0 } }, [toGlobalSelector("div")]: reset, [toGlobalSelector("dl")]: { ...reset, margin: "16px 0", padding: 0, "& dt": { fontSize: "14px", fontWeight: "bold", fontStyle: "italic", padding: 0, margin: "16px 0 4px" }, "& dt:first-of-type": { padding: 0 }, "& dt > :first-of-type": { marginTop: 0 }, "& dt > :last-child": { marginBottom: 0 }, "& dd": { margin: "0 0 16px", padding: "0 15px" }, "& dd > :first-of-type": { marginTop: 0 }, "& dd > :last-child": { marginBottom: 0 } }, [toGlobalSelector("h1")]: { ...reset, ...headers, fontSize: `${theme.typography.size.l1}px`, fontWeight: theme.typography.weight.bold }, [toGlobalSelector("h2")]: { ...reset, ...headers, fontSize: `${theme.typography.size.m2}px`, paddingBottom: 4, borderBottom: `1px solid ${theme.appBorderColor}` }, [toGlobalSelector("h3")]: { ...reset, ...headers, fontSize: `${theme.typography.size.m1}px`, fontWeight: theme.typography.weight.bold }, [toGlobalSelector("h4")]: { ...reset, ...headers, fontSize: `${theme.typography.size.s3}px` }, [toGlobalSelector("h5")]: { ...reset, ...headers, fontSize: `${theme.typography.size.s2}px` }, [toGlobalSelector("h6")]: { ...reset, ...headers, fontSize: `${theme.typography.size.s2}px`, color: theme.color.dark }, [toGlobalSelector("hr")]: { border: "0 none", borderTop: `1px solid ${theme.appBorderColor}`, height: 4, padding: 0 }, [toGlobalSelector("img")]: { maxWidth: "100%" }, [toGlobalSelector("li")]: { ...reset, fontSize: theme.typography.size.s2, color: theme.color.defaultText, lineHeight: "24px", "& + li": { marginTop: ".25em" }, "& ul, & ol": { marginTop: ".25em", marginBottom: 0 }, "& code": code }, [toGlobalSelector("ol")]: { ...reset, margin: "16px 0", paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 } }, [toGlobalSelector("p")]: { ...reset, margin: "16px 0", fontSize: theme.typography.size.s2, lineHeight: "24px", color: theme.color.defaultText, "& code": code }, [toGlobalSelector("pre")]: { ...reset, fontFamily: theme.typography.fonts.mono, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", lineHeight: "18px", padding: "11px 1rem", whiteSpace: "pre-wrap", color: "inherit", borderRadius: 3, margin: "1rem 0", "&:not(.prismjs)": { background: "transparent", border: "none", borderRadius: 0, padding: 0, margin: 0 }, "& pre, &.prismjs": { padding: 15, margin: 0, whiteSpace: "pre-wrap", color: "inherit", fontSize: "13px", lineHeight: "19px", code: { color: "inherit", fontSize: "inherit" } }, "& code": { whiteSpace: "pre" }, "& code, & tt": { border: "none" } }, [toGlobalSelector("span")]: { ...reset, "&.frame": { display: "block", overflow: "hidden", "& > span": { border: `1px solid ${theme.color.medium}`, display: "block", float: "left", overflow: "hidden", margin: "13px 0 0", padding: 7, width: "auto" }, "& span img": { display: "block", float: "left" }, "& span span": { clear: "both", color: theme.color.darkest, display: "block", padding: "5px 0 0" } }, "&.align-center": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "center" }, "& span img": { margin: "0 auto", textAlign: "center" } }, "&.align-right": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px 0 0", textAlign: "right" }, "& span img": { margin: 0, textAlign: "right" } }, "&.float-left": { display: "block", marginRight: 13, overflow: "hidden", float: "left", "& span": { margin: "13px 0 0" } }, "&.float-right": { display: "block", marginLeft: 13, overflow: "hidden", float: "right", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "right" } } }, [toGlobalSelector("table")]: { ...reset, margin: "16px 0", fontSize: theme.typography.size.s2, lineHeight: "24px", padding: 0, borderCollapse: "collapse", "& tr": { borderTop: `1px solid ${theme.appBorderColor}`, backgroundColor: theme.appContentBg, margin: 0, padding: 0 }, "& tr:nth-of-type(2n)": { backgroundColor: theme.base === "dark" ? theme.color.darker : theme.color.lighter }, "& tr th": { fontWeight: "bold", color: theme.color.defaultText, border: `1px solid ${theme.appBorderColor}`, margin: 0, padding: "6px 13px" }, "& tr td": { border: `1px solid ${theme.appBorderColor}`, color: theme.color.defaultText, margin: 0, padding: "6px 13px" }, "& tr th :first-of-type, & tr td :first-of-type": { marginTop: 0 }, "& tr th :last-child, & tr td :last-child": { marginBottom: 0 } }, [toGlobalSelector("ul")]: { ...reset, margin: "16px 0", paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 }, listStyle: "disc" } };
}), DocsWrapper = newStyled.div(({ theme }) => ({ background: theme.background.content, display: "flex", justifyContent: "center", padding: "4rem 20px", minHeight: "100vh", boxSizing: "border-box", gap: "3rem", [`@media (min-width: ${breakpoint}px)`]: {} })), DocsPageWrapper = ({ children, toc }) => React.createElement(DocsWrapper, { className: "sbdocs sbdocs-wrapper" }, React.createElement(DocsContent, { className: "sbdocs sbdocs-content" }, children), toc);
var getBlockBackgroundStyle = (theme) => ({ borderRadius: theme.appBorderRadius, background: theme.background.content, boxShadow: theme.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", border: `1px solid ${theme.appBorderColor}` });
var Bar = newStyled(FlexBar)({ position: "absolute", left: 0, right: 0, top: 0, transition: "transform .2s linear" }), Wrapper2 = newStyled.div({ display: "flex", alignItems: "center", gap: 4 }), IconPlaceholder = newStyled.div(({ theme }) => ({ width: 14, height: 14, borderRadius: 2, margin: "0 7px", backgroundColor: theme.appBorderColor, animation: `${theme.animation.glow} 1.5s ease-in-out infinite` })), Toolbar = ({ isLoading, storyId, baseUrl, zoom, resetZoom, ...rest }) => React.createElement(Bar, { ...rest }, React.createElement(Wrapper2, { key: "left" }, isLoading ? [1, 2, 3].map((key) => React.createElement(IconPlaceholder, { key })) : React.createElement(React.Fragment, null, React.createElement(IconButton, { key: "zoomin", onClick: (e2) => {
  e2.preventDefault(), zoom(0.8);
}, title: "Zoom in" }, React.createElement(ZoomIcon, null)), React.createElement(IconButton, { key: "zoomout", onClick: (e2) => {
  e2.preventDefault(), zoom(1.25);
}, title: "Zoom out" }, React.createElement(ZoomOutIcon, null)), React.createElement(IconButton, { key: "zoomreset", onClick: (e2) => {
  e2.preventDefault(), resetZoom();
}, title: "Reset zoom" }, React.createElement(ZoomResetIcon, null)))));
var ZoomContext = reactExports.createContext({ scale: 1 });
var { window: globalWindow } = global$1, IFrame = class extends reactExports.Component {
  constructor() {
    super(...arguments);
    this.iframe = null;
  }
  componentDidMount() {
    let { id } = this.props;
    this.iframe = globalWindow.document.getElementById(id);
  }
  shouldComponentUpdate(nextProps) {
    let { scale } = nextProps;
    return scale !== this.props.scale && this.setIframeBodyStyle({ width: `${scale * 100}%`, height: `${scale * 100}%`, transform: `scale(${1 / scale})`, transformOrigin: "top left" }), false;
  }
  setIframeBodyStyle(style) {
    return Object.assign(this.iframe.contentDocument.body.style, style);
  }
  render() {
    let { id, title, src, allowFullScreen, scale, ...rest } = this.props;
    return React.createElement("iframe", { id, title, src, ...allowFullScreen ? { allow: "fullscreen" } : {}, loading: "lazy", ...rest });
  }
};
var { PREVIEW_URL } = global$1, BASE_URL = PREVIEW_URL || "iframe.html", storyBlockIdFromId = ({ story, primary }) => `story--${story.id}${primary ? "--primary" : ""}`, InlineStory = (props) => {
  let storyRef = reactExports.useRef(), [showLoader, setShowLoader] = reactExports.useState(true), [error, setError] = reactExports.useState(), { story, height, autoplay, forceInitialArgs, renderStoryToElement } = props;
  return reactExports.useEffect(() => {
    if (!(story && storyRef.current)) return () => {
    };
    let element = storyRef.current, cleanup = renderStoryToElement(story, element, { showMain: () => {
    }, showError: ({ title, description }) => setError(new Error(`${title} - ${description}`)), showException: (err) => setError(err) }, { autoplay, forceInitialArgs });
    return setShowLoader(false), () => {
      Promise.resolve().then(() => cleanup());
    };
  }, [autoplay, renderStoryToElement, story]), error ? React.createElement("pre", null, React.createElement(ErrorFormatter, { error })) : React.createElement(React.Fragment, null, height ? React.createElement("style", null, `#${storyBlockIdFromId(props)} { min-height: ${height}; transform: translateZ(0); overflow: auto }`) : null, showLoader && React.createElement(StorySkeleton, null), React.createElement("div", { ref: storyRef, id: `${storyBlockIdFromId(props)}-inner`, "data-name": story.name }));
}, IFrameStory = ({ story, height = "500px" }) => React.createElement("div", { style: { width: "100%", height } }, React.createElement(ZoomContext.Consumer, null, ({ scale }) => React.createElement(IFrame, { key: "iframe", id: `iframe--${story.id}`, title: story.name, src: getStoryHref(BASE_URL, story.id, { viewMode: "story" }), allowFullScreen: true, scale, style: { width: "100%", height: "100%", border: "0 none" } }))), Story = (props) => {
  let { inline } = props;
  return React.createElement("div", { id: storyBlockIdFromId(props), className: "sb-story sb-unstyled", "data-story-block": "true" }, inline ? React.createElement(InlineStory, { ...props }) : React.createElement(IFrameStory, { ...props }));
}, StorySkeleton = () => React.createElement(Loader, null);
var ChildrenContainer = newStyled.div(({ isColumn, columns, layout }) => ({ display: isColumn || !columns ? "block" : "flex", position: "relative", flexWrap: "wrap", overflow: "auto", flexDirection: isColumn ? "column" : "row", "& .innerZoomElementWrapper > *": isColumn ? { width: layout !== "fullscreen" ? "calc(100% - 20px)" : "100%", display: "block" } : { maxWidth: layout !== "fullscreen" ? "calc(100% - 20px)" : "100%", display: "inline-block" } }), ({ layout = "padded" }) => layout === "centered" || layout === "padded" ? { padding: "30px 20px", "& .innerZoomElementWrapper > *": { width: "auto", border: "10px solid transparent!important" } } : {}, ({ layout = "padded" }) => layout === "centered" ? { display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "center", alignItems: "center" } : {}, ({ columns }) => columns && columns > 1 ? { ".innerZoomElementWrapper > *": { minWidth: `calc(100% / ${columns} - 20px)` } } : {}), StyledSource = newStyled(Source)(({ theme }) => ({ margin: 0, borderTopLeftRadius: 0, borderTopRightRadius: 0, borderBottomLeftRadius: theme.appBorderRadius, borderBottomRightRadius: theme.appBorderRadius, border: "none", background: theme.base === "light" ? "rgba(0, 0, 0, 0.85)" : curriedDarken$1(0.05, theme.background.content), color: theme.color.lightest, button: { background: theme.base === "light" ? "rgba(0, 0, 0, 0.85)" : curriedDarken$1(0.05, theme.background.content) } })), PreviewContainer = newStyled.div(({ theme, withSource, isExpanded }) => ({ position: "relative", overflow: "hidden", margin: "25px 0 40px", ...getBlockBackgroundStyle(theme), borderBottomLeftRadius: withSource && isExpanded && 0, borderBottomRightRadius: withSource && isExpanded && 0, borderBottomWidth: isExpanded && 0, "h3 + &": { marginTop: "16px" } }), ({ withToolbar }) => withToolbar && { paddingTop: 40 }), getSource = (withSource, expanded, setExpanded) => {
  switch (true) {
    case !!(withSource && withSource.error):
      return { source: null, actionItem: { title: "No code available", className: "docblock-code-toggle docblock-code-toggle--disabled", disabled: true, onClick: () => setExpanded(false) } };
    case expanded:
      return { source: React.createElement(StyledSource, { ...withSource, dark: true }), actionItem: { title: "Hide code", className: "docblock-code-toggle docblock-code-toggle--expanded", onClick: () => setExpanded(false) } };
    default:
      return { source: React.createElement(StyledSource, { ...withSource, dark: true }), actionItem: { title: "Show code", className: "docblock-code-toggle", onClick: () => setExpanded(true) } };
  }
};
function getStoryId(children) {
  if (reactExports.Children.count(children) === 1) {
    let elt = children;
    if (elt.props) return elt.props.id;
  }
  return null;
}
var PositionedToolbar = newStyled(Toolbar)({ position: "absolute", top: 0, left: 0, right: 0, height: 40 }), Relative = newStyled.div({ overflow: "hidden", position: "relative" }), Preview = ({ isLoading, isColumn, columns, children, withSource, withToolbar = false, isExpanded = false, additionalActions, className, layout = "padded", ...props }) => {
  let [expanded, setExpanded] = reactExports.useState(isExpanded), { source, actionItem } = getSource(withSource, expanded, setExpanded), [scale, setScale] = reactExports.useState(1), previewClasses = [className].concat(["sbdocs", "sbdocs-preview", "sb-unstyled"]), defaultActionItems = withSource ? [actionItem] : [], [additionalActionItems, setAdditionalActionItems] = reactExports.useState(additionalActions ? [...additionalActions] : []), actionItems = [...defaultActionItems, ...additionalActionItems], { window: globalWindow4 } = global$1, copyToClipboard2 = reactExports.useCallback(async (text) => {
    let { createCopyToClipboardFunction: createCopyToClipboardFunction2 } = await __vitePreload(() => Promise.resolve().then(() => index$1), true ? void 0 : void 0, import.meta.url);
    createCopyToClipboardFunction2();
  }, []), onCopyCapture = (e2) => {
    let selection = globalWindow4.getSelection();
    selection && selection.type === "Range" || (e2.preventDefault(), additionalActionItems.filter((item) => item.title === "Copied").length === 0 && copyToClipboard2(source.props.code).then(() => {
      setAdditionalActionItems([...additionalActionItems, { title: "Copied", onClick: () => {
      } }]), globalWindow4.setTimeout(() => setAdditionalActionItems(additionalActionItems.filter((item) => item.title !== "Copied")), 1500);
    }));
  };
  return React.createElement(PreviewContainer, { withSource, withToolbar, ...props, className: previewClasses.join(" ") }, withToolbar && React.createElement(PositionedToolbar, { isLoading, border: true, zoom: (z2) => setScale(scale * z2), resetZoom: () => setScale(1), storyId: getStoryId(children), baseUrl: "./iframe.html" }), React.createElement(ZoomContext.Provider, { value: { scale } }, React.createElement(Relative, { className: "docs-story", onCopyCapture: withSource && onCopyCapture }, React.createElement(ChildrenContainer, { isColumn: isColumn || !Array.isArray(children), columns, layout }, React.createElement(Zoom.Element, { scale }, Array.isArray(children) ? children.map((child, i2) => React.createElement("div", { key: i2 }, child)) : React.createElement("div", null, children))), React.createElement(ActionBar, { actionItems }))), withSource && expanded && source);
};
newStyled(Preview)(() => ({ ".docs-story": { paddingTop: 32, paddingBottom: 40 } }));
var Table = newStyled.table(({ theme }) => ({ "&&": { borderCollapse: "collapse", borderSpacing: 0, border: "none", tr: { border: "none !important", background: "none" }, "td, th": { padding: 0, border: "none", width: "auto!important" }, marginTop: 0, marginBottom: 0, "th:first-of-type, td:first-of-type": { paddingLeft: 0 }, "th:last-of-type, td:last-of-type": { paddingRight: 0 }, td: { paddingTop: 0, paddingBottom: 4, "&:not(:first-of-type)": { paddingLeft: 10, paddingRight: 0 } }, tbody: { boxShadow: "none", border: "none" }, code: codeCommon({ theme }), div: { span: { fontWeight: "bold" } }, "& code": { margin: 0, display: "inline-block", fontSize: theme.typography.size.s1 } } })), ArgJsDoc = ({ tags }) => {
  let params = (tags.params || []).filter((x2) => x2.description), hasDisplayableParams = params.length !== 0, hasDisplayableDeprecated = tags.deprecated != null, hasDisplayableReturns = tags.returns != null && tags.returns.description != null;
  return !hasDisplayableParams && !hasDisplayableReturns && !hasDisplayableDeprecated ? null : React.createElement(React.Fragment, null, React.createElement(Table, null, React.createElement("tbody", null, hasDisplayableDeprecated && React.createElement("tr", { key: "deprecated" }, React.createElement("td", { colSpan: 2 }, React.createElement("strong", null, "Deprecated"), ": ", tags.deprecated.toString())), hasDisplayableParams && params.map((x2) => React.createElement("tr", { key: x2.name }, React.createElement("td", null, React.createElement("code", null, x2.name)), React.createElement("td", null, x2.description))), hasDisplayableReturns && React.createElement("tr", { key: "returns" }, React.createElement("td", null, React.createElement("code", null, "Returns")), React.createElement("td", null, tags.returns.description)))));
};
var ITEMS_BEFORE_EXPANSION = 8, Summary = newStyled.div(({ isExpanded }) => ({ display: "flex", flexDirection: isExpanded ? "column" : "row", flexWrap: "wrap", alignItems: "flex-start", marginBottom: "-4px", minWidth: 100 })), Text = newStyled.span(codeCommon, ({ theme, simple = false }) => ({ flex: "0 0 auto", fontFamily: theme.typography.fonts.mono, fontSize: theme.typography.size.s1, wordBreak: "break-word", whiteSpace: "normal", maxWidth: "100%", margin: 0, marginRight: "4px", marginBottom: "4px", paddingTop: "2px", paddingBottom: "2px", lineHeight: "13px", ...simple && { background: "transparent", border: "0 none", paddingLeft: 0 } })), ExpandButton = newStyled.button(({ theme }) => ({ fontFamily: theme.typography.fonts.mono, color: theme.color.secondary, marginBottom: "4px", background: "none", border: "none" })), Expandable = newStyled.div(codeCommon, ({ theme }) => ({ fontFamily: theme.typography.fonts.mono, color: theme.color.secondary, fontSize: theme.typography.size.s1, margin: 0, whiteSpace: "nowrap", display: "flex", alignItems: "center" })), Detail = newStyled.div(({ theme, width }) => ({ width, minWidth: 200, maxWidth: 800, padding: 15, fontFamily: theme.typography.fonts.mono, fontSize: theme.typography.size.s1, boxSizing: "content-box", "& code": { padding: "0 !important" } })), ChevronUpIcon = newStyled(ChevronSmallUpIcon)({ marginLeft: 4 }), ChevronDownIcon = newStyled(ChevronSmallDownIcon)({ marginLeft: 4 }), EmptyArg = () => React.createElement("span", null, "-"), ArgText = ({ text, simple }) => React.createElement(Text, { simple }, text), calculateDetailWidth = memoize$1(1e3)((detail) => {
  let lines = detail.split(/\r?\n/);
  return `${Math.max(...lines.map((x2) => x2.length))}ch`;
}), getSummaryItems = (summary) => {
  if (!summary) return [summary];
  let summaryItems = summary.split("|").map((value2) => value2.trim());
  return uniq$1(summaryItems);
}, renderSummaryItems = (summaryItems, isExpanded = true) => {
  let items = summaryItems;
  return isExpanded || (items = summaryItems.slice(0, ITEMS_BEFORE_EXPANSION)), items.map((item) => React.createElement(ArgText, { key: item, text: item === "" ? '""' : item }));
}, ArgSummary = ({ value: value2, initialExpandedArgs }) => {
  let { summary, detail } = value2, [isOpen, setIsOpen] = reactExports.useState(false), [isExpanded, setIsExpanded] = reactExports.useState(initialExpandedArgs || false);
  if (summary == null) return null;
  let summaryAsString = typeof summary.toString == "function" ? summary.toString() : summary;
  if (detail == null) {
    if (/[(){}[\]<>]/.test(summaryAsString)) return React.createElement(ArgText, { text: summaryAsString });
    let summaryItems = getSummaryItems(summaryAsString), itemsCount = summaryItems.length;
    return itemsCount > ITEMS_BEFORE_EXPANSION ? React.createElement(Summary, { isExpanded }, renderSummaryItems(summaryItems, isExpanded), React.createElement(ExpandButton, { onClick: () => setIsExpanded(!isExpanded) }, isExpanded ? "Show less..." : `Show ${itemsCount - ITEMS_BEFORE_EXPANSION} more...`)) : React.createElement(Summary, null, renderSummaryItems(summaryItems));
  }
  return React.createElement(WithTooltipPure, { closeOnOutsideClick: true, placement: "bottom", visible: isOpen, onVisibleChange: (isVisible) => {
    setIsOpen(isVisible);
  }, tooltip: React.createElement(Detail, { width: calculateDetailWidth(detail) }, React.createElement(SyntaxHighlighter2, { language: "jsx", format: false }, detail)) }, React.createElement(Expandable, { className: "sbdocs-expandable" }, React.createElement("span", null, summaryAsString), isOpen ? React.createElement(ChevronUpIcon, null) : React.createElement(ChevronDownIcon, null)));
}, ArgValue = ({ value: value2, initialExpandedArgs }) => value2 == null ? React.createElement(EmptyArg, null) : React.createElement(ArgSummary, { value: value2, initialExpandedArgs });
var Label = newStyled.label(({ theme }) => ({ lineHeight: "18px", alignItems: "center", marginBottom: 8, display: "inline-block", position: "relative", whiteSpace: "nowrap", background: theme.boolean.background, borderRadius: "3em", padding: 1, '&[aria-disabled="true"]': { opacity: 0.5, input: { cursor: "not-allowed" } }, input: { appearance: "none", width: "100%", height: "100%", position: "absolute", left: 0, top: 0, margin: 0, padding: 0, border: "none", background: "transparent", cursor: "pointer", borderRadius: "3em", "&:focus": { outline: "none", boxShadow: `${theme.color.secondary} 0 0 0 1px inset !important` } }, span: { textAlign: "center", fontSize: theme.typography.size.s1, fontWeight: theme.typography.weight.bold, lineHeight: "1", cursor: "pointer", display: "inline-block", padding: "7px 15px", transition: "all 100ms ease-out", userSelect: "none", borderRadius: "3em", color: curriedTransparentize$1(0.5, theme.color.defaultText), background: "transparent", "&:hover": { boxShadow: `${curriedOpacify$1(0.3, theme.appBorderColor)} 0 0 0 1px inset` }, "&:active": { boxShadow: `${curriedOpacify$1(0.05, theme.appBorderColor)} 0 0 0 2px inset`, color: curriedOpacify$1(1, theme.appBorderColor) }, "&:first-of-type": { paddingRight: 8 }, "&:last-of-type": { paddingLeft: 8 } }, "input:checked ~ span:last-of-type, input:not(:checked) ~ span:first-of-type": { background: theme.boolean.selectedBackground, boxShadow: theme.base === "light" ? `${curriedOpacify$1(0.1, theme.appBorderColor)} 0 0 2px` : `${theme.appBorderColor} 0 0 0 1px`, color: theme.color.defaultText, padding: "7px 15px" } })), parse = (value2) => value2 === "true", BooleanControl = ({ name, value: value2, onChange, onBlur, onFocus, argType }) => {
  var _a;
  let onSetFalse = reactExports.useCallback(() => onChange(false), [onChange]), readonly = !!((_a = argType == null ? void 0 : argType.table) == null ? void 0 : _a.readonly);
  if (value2 === void 0) return React.createElement(Button, { variant: "outline", size: "medium", id: getControlSetterButtonId(name), onClick: onSetFalse, disabled: readonly }, "Set boolean");
  let controlId = getControlId(name), parsedValue = typeof value2 == "string" ? parse(value2) : value2;
  return React.createElement(Label, { "aria-disabled": readonly, htmlFor: controlId, "aria-label": name }, React.createElement("input", { id: controlId, type: "checkbox", onChange: (e2) => onChange(e2.target.checked), checked: parsedValue, role: "switch", disabled: readonly, name, onBlur, onFocus }), React.createElement("span", { "aria-hidden": "true" }, "False"), React.createElement("span", { "aria-hidden": "true" }, "True"));
};
var parseDate = (value2) => {
  let [year, month, day] = value2.split("-"), result = /* @__PURE__ */ new Date();
  return result.setFullYear(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10)), result;
}, parseTime = (value2) => {
  let [hours, minutes] = value2.split(":"), result = /* @__PURE__ */ new Date();
  return result.setHours(parseInt(hours, 10)), result.setMinutes(parseInt(minutes, 10)), result;
}, formatDate = (value2) => {
  let date = new Date(value2), year = `000${date.getFullYear()}`.slice(-4), month = `0${date.getMonth() + 1}`.slice(-2), day = `0${date.getDate()}`.slice(-2);
  return `${year}-${month}-${day}`;
}, formatTime = (value2) => {
  let date = new Date(value2), hours = `0${date.getHours()}`.slice(-2), minutes = `0${date.getMinutes()}`.slice(-2);
  return `${hours}:${minutes}`;
}, FormInput = newStyled(Form.Input)(({ readOnly }) => ({ opacity: readOnly ? 0.5 : 1 })), FlexSpaced = newStyled.div(({ theme }) => ({ flex: 1, display: "flex", input: { marginLeft: 10, flex: 1, height: 32, "&::-webkit-calendar-picker-indicator": { opacity: 0.5, height: 12, filter: theme.base === "light" ? void 0 : "invert(1)" } }, "input:first-of-type": { marginLeft: 0, flexGrow: 4 }, "input:last-of-type": { flexGrow: 3 } })), DateControl = ({ name, value: value2, onChange, onFocus, onBlur, argType }) => {
  var _a;
  let [valid, setValid] = reactExports.useState(true), dateRef = reactExports.useRef(), timeRef = reactExports.useRef(), readonly = !!((_a = argType == null ? void 0 : argType.table) == null ? void 0 : _a.readonly);
  reactExports.useEffect(() => {
    valid !== false && (dateRef && dateRef.current && (dateRef.current.value = formatDate(value2)), timeRef && timeRef.current && (timeRef.current.value = formatTime(value2)));
  }, [value2]);
  let onDateChange = (e2) => {
    let parsed = parseDate(e2.target.value), result = new Date(value2);
    result.setFullYear(parsed.getFullYear(), parsed.getMonth(), parsed.getDate());
    let time = result.getTime();
    time && onChange(time), setValid(!!time);
  }, onTimeChange = (e2) => {
    let parsed = parseTime(e2.target.value), result = new Date(value2);
    result.setHours(parsed.getHours()), result.setMinutes(parsed.getMinutes());
    let time = result.getTime();
    time && onChange(time), setValid(!!time);
  }, controlId = getControlId(name);
  return React.createElement(FlexSpaced, null, React.createElement(FormInput, { type: "date", max: "9999-12-31", ref: dateRef, id: `${controlId}-date`, name: `${controlId}-date`, readOnly: readonly, onChange: onDateChange, onFocus, onBlur }), React.createElement(FormInput, { type: "time", id: `${controlId}-time`, name: `${controlId}-time`, ref: timeRef, onChange: onTimeChange, readOnly: readonly, onFocus, onBlur }), valid ? null : React.createElement("div", null, "invalid"));
};
var Wrapper3 = newStyled.label({ display: "flex" }), parse2 = (value2) => {
  let result = parseFloat(value2);
  return Number.isNaN(result) ? void 0 : result;
}, FormInput2 = newStyled(Form.Input)(({ readOnly }) => ({ opacity: readOnly ? 0.5 : 1 })), NumberControl = ({ name, value: value2, onChange, min: min2, max: max2, step, onBlur, onFocus, argType }) => {
  var _a;
  let [inputValue, setInputValue] = reactExports.useState(typeof value2 == "number" ? value2 : ""), [forceVisible, setForceVisible] = reactExports.useState(false), [parseError, setParseError] = reactExports.useState(null), readonly = !!((_a = argType == null ? void 0 : argType.table) == null ? void 0 : _a.readonly), handleChange = reactExports.useCallback((event) => {
    setInputValue(event.target.value);
    let result = parseFloat(event.target.value);
    Number.isNaN(result) ? setParseError(new Error(`'${event.target.value}' is not a number`)) : (onChange(result), setParseError(null));
  }, [onChange, setParseError]), onForceVisible = reactExports.useCallback(() => {
    setInputValue("0"), onChange(0), setForceVisible(true);
  }, [setForceVisible]), htmlElRef = reactExports.useRef(null);
  return reactExports.useEffect(() => {
    forceVisible && htmlElRef.current && htmlElRef.current.select();
  }, [forceVisible]), reactExports.useEffect(() => {
    inputValue !== (typeof value2 == "number" ? value2 : "") && setInputValue(value2);
  }, [value2]), value2 === void 0 ? React.createElement(Button, { variant: "outline", size: "medium", id: getControlSetterButtonId(name), onClick: onForceVisible, disabled: readonly }, "Set number") : React.createElement(Wrapper3, null, React.createElement(FormInput2, { ref: htmlElRef, id: getControlId(name), type: "number", onChange: handleChange, size: "flex", placeholder: "Edit number...", value: inputValue, valid: parseError ? "error" : null, autoFocus: forceVisible, readOnly: readonly, name, min: min2, max: max2, step, onFocus, onBlur }));
};
var selectedKey = (value2, options) => {
  let entry = options && Object.entries(options).find(([_key, val]) => val === value2);
  return entry ? entry[0] : void 0;
}, selectedKeys = (value2, options) => value2 && options ? Object.entries(options).filter((entry) => value2.includes(entry[1])).map((entry) => entry[0]) : [], selectedValues = (keys2, options) => keys2 && options && keys2.map((key) => options[key]);
var Wrapper4 = newStyled.div(({ isInline }) => isInline ? { display: "flex", flexWrap: "wrap", alignItems: "flex-start", label: { display: "inline-flex", marginRight: 15 } } : { label: { display: "flex" } }, (props) => {
  if (props["aria-readonly"] === "true") return { input: { cursor: "not-allowed" } };
}), Text2 = newStyled.span({ "[aria-readonly=true] &": { opacity: 0.5 } }), Label2 = newStyled.label({ lineHeight: "20px", alignItems: "center", marginBottom: 8, "&:last-child": { marginBottom: 0 }, input: { margin: 0, marginRight: 6 } }), CheckboxControl = ({ name, options, value: value2, onChange, isInline, argType }) => {
  var _a;
  if (!options) return logger.warn(`Checkbox with no options: ${name}`), React.createElement(React.Fragment, null, "-");
  let initial = selectedKeys(value2, options), [selected, setSelected] = reactExports.useState(initial), readonly = !!((_a = argType == null ? void 0 : argType.table) == null ? void 0 : _a.readonly), handleChange = (e2) => {
    let option = e2.target.value, updated = [...selected];
    updated.includes(option) ? updated.splice(updated.indexOf(option), 1) : updated.push(option), onChange(selectedValues(updated, options)), setSelected(updated);
  };
  reactExports.useEffect(() => {
    setSelected(selectedKeys(value2, options));
  }, [value2]);
  let controlId = getControlId(name);
  return React.createElement(Wrapper4, { "aria-readonly": readonly, isInline }, Object.keys(options).map((key, index3) => {
    let id = `${controlId}-${index3}`;
    return React.createElement(Label2, { key: id, htmlFor: id }, React.createElement("input", { type: "checkbox", disabled: readonly, id, name: id, value: key, onChange: handleChange, checked: selected == null ? void 0 : selected.includes(key) }), React.createElement(Text2, null, key));
  }));
};
var Wrapper5 = newStyled.div(({ isInline }) => isInline ? { display: "flex", flexWrap: "wrap", alignItems: "flex-start", label: { display: "inline-flex", marginRight: 15 } } : { label: { display: "flex" } }, (props) => {
  if (props["aria-readonly"] === "true") return { input: { cursor: "not-allowed" } };
}), Text3 = newStyled.span({ "[aria-readonly=true] &": { opacity: 0.5 } }), Label3 = newStyled.label({ lineHeight: "20px", alignItems: "center", marginBottom: 8, "&:last-child": { marginBottom: 0 }, input: { margin: 0, marginRight: 6 } }), RadioControl = ({ name, options, value: value2, onChange, isInline, argType }) => {
  var _a;
  if (!options) return logger.warn(`Radio with no options: ${name}`), React.createElement(React.Fragment, null, "-");
  let selection = selectedKey(value2, options), controlId = getControlId(name), readonly = !!((_a = argType == null ? void 0 : argType.table) == null ? void 0 : _a.readonly);
  return React.createElement(Wrapper5, { "aria-readonly": readonly, isInline }, Object.keys(options).map((key, index3) => {
    let id = `${controlId}-${index3}`;
    return React.createElement(Label3, { key: id, htmlFor: id }, React.createElement("input", { type: "radio", id, name: id, disabled: readonly, value: key, onChange: (e2) => onChange(options[e2.currentTarget.value]), checked: key === selection }), React.createElement(Text3, null, key));
  }));
};
var styleResets = { appearance: "none", border: "0 none", boxSizing: "inherit", display: " block", margin: " 0", background: "transparent", padding: 0, fontSize: "inherit", position: "relative" }, OptionsSelect = newStyled.select(styleResets, ({ theme }) => ({ boxSizing: "border-box", position: "relative", padding: "6px 10px", width: "100%", color: theme.input.color || "inherit", background: theme.input.background, borderRadius: theme.input.borderRadius, boxShadow: `${theme.input.border} 0 0 0 1px inset`, fontSize: theme.typography.size.s2 - 1, lineHeight: "20px", "&:focus": { boxShadow: `${theme.color.secondary} 0 0 0 1px inset`, outline: "none" }, "&[disabled]": { cursor: "not-allowed", opacity: 0.5 }, "::placeholder": { color: theme.textMutedColor }, "&[multiple]": { overflow: "auto", padding: 0, option: { display: "block", padding: "6px 10px", marginLeft: 1, marginRight: 1 } } })), SelectWrapper = newStyled.span(({ theme }) => ({ display: "inline-block", lineHeight: "normal", overflow: "hidden", position: "relative", verticalAlign: "top", width: "100%", svg: { position: "absolute", zIndex: 1, pointerEvents: "none", height: "12px", marginTop: "-6px", right: "12px", top: "50%", fill: theme.textMutedColor, path: { fill: theme.textMutedColor } } })), NO_SELECTION = "Choose option...", SingleSelect = ({ name, value: value2, options, onChange, argType }) => {
  var _a;
  let handleChange = (e2) => {
    onChange(options[e2.currentTarget.value]);
  }, selection = selectedKey(value2, options) || NO_SELECTION, controlId = getControlId(name), readonly = !!((_a = argType == null ? void 0 : argType.table) == null ? void 0 : _a.readonly);
  return React.createElement(SelectWrapper, null, React.createElement(ChevronSmallDownIcon, null), React.createElement(OptionsSelect, { disabled: readonly, id: controlId, value: selection, onChange: handleChange }, React.createElement("option", { key: "no-selection", disabled: true }, NO_SELECTION), Object.keys(options).map((key) => React.createElement("option", { key, value: key }, key))));
}, MultiSelect = ({ name, value: value2, options, onChange, argType }) => {
  var _a;
  let handleChange = (e2) => {
    let selection2 = Array.from(e2.currentTarget.options).filter((option) => option.selected).map((option) => option.value);
    onChange(selectedValues(selection2, options));
  }, selection = selectedKeys(value2, options), controlId = getControlId(name), readonly = !!((_a = argType == null ? void 0 : argType.table) == null ? void 0 : _a.readonly);
  return React.createElement(SelectWrapper, null, React.createElement(OptionsSelect, { disabled: readonly, id: controlId, multiple: true, value: selection, onChange: handleChange }, Object.keys(options).map((key) => React.createElement("option", { key, value: key }, key))));
}, SelectControl = (props) => {
  let { name, options } = props;
  return options ? props.isMulti ? React.createElement(MultiSelect, { ...props }) : React.createElement(SingleSelect, { ...props }) : (logger.warn(`Select with no options: ${name}`), React.createElement(React.Fragment, null, "-"));
};
var normalizeOptions = (options, labels) => Array.isArray(options) ? options.reduce((acc, item) => (acc[(labels == null ? void 0 : labels[item]) || String(item)] = item, acc), {}) : options, Controls = { check: CheckboxControl, "inline-check": CheckboxControl, radio: RadioControl, "inline-radio": RadioControl, select: SelectControl, "multi-select": SelectControl }, OptionsControl = (props) => {
  let { type = "select", labels, argType } = props, normalized = { ...props, argType, options: argType ? normalizeOptions(argType.options, labels) : {}, isInline: type.includes("inline"), isMulti: type.includes("multi") }, Control = Controls[type];
  if (Control) return React.createElement(Control, { ...normalized });
  throw new Error(`Unknown options type: ${type}`);
};
var VALUE = "value", KEY = "key";
var ERROR = "Error", OBJECT = "Object", ARRAY = "Array", STRING = "String", NUMBER = "Number", BOOLEAN = "Boolean", DATE = "Date", NULL = "Null", UNDEFINED = "Undefined", FUNCTION = "Function", SYMBOL = "Symbol";
var ADD_DELTA_TYPE = "ADD_DELTA_TYPE", REMOVE_DELTA_TYPE = "REMOVE_DELTA_TYPE", UPDATE_DELTA_TYPE = "UPDATE_DELTA_TYPE";
function getObjectType(obj) {
  return obj !== null && typeof obj == "object" && !Array.isArray(obj) && typeof obj[Symbol.iterator] == "function" ? "Iterable" : Object.prototype.toString.call(obj).slice(8, -1);
}
function isComponentWillChange(oldValue, newValue) {
  let oldType = getObjectType(oldValue), newType = getObjectType(newValue);
  return (oldType === "Function" || newType === "Function") && newType !== oldType;
}
var JsonAddValue = class extends reactExports.Component {
  constructor(props) {
    super(props), this.state = { inputRefKey: null, inputRefValue: null }, this.refInputValue = this.refInputValue.bind(this), this.refInputKey = this.refInputKey.bind(this), this.onKeydown = this.onKeydown.bind(this), this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    let { inputRefKey, inputRefValue } = this.state, { onlyValue } = this.props;
    inputRefKey && typeof inputRefKey.focus == "function" && inputRefKey.focus(), onlyValue && inputRefValue && typeof inputRefValue.focus == "function" && inputRefValue.focus(), document.addEventListener("keydown", this.onKeydown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeydown);
  }
  onKeydown(event) {
    event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || event.repeat || ((event.code === "Enter" || event.key === "Enter") && (event.preventDefault(), this.onSubmit()), (event.code === "Escape" || event.key === "Escape") && (event.preventDefault(), this.props.handleCancel()));
  }
  onSubmit() {
    let { handleAdd, onlyValue, onSubmitValueParser, keyPath, deep } = this.props, { inputRefKey, inputRefValue } = this.state, result = {};
    if (!onlyValue) {
      if (!inputRefKey.value) return;
      result.key = inputRefKey.value;
    }
    result.newValue = onSubmitValueParser(false, keyPath, deep, result.key, inputRefValue.value), handleAdd(result);
  }
  refInputKey(node) {
    this.state.inputRefKey = node;
  }
  refInputValue(node) {
    this.state.inputRefValue = node;
  }
  render() {
    let { handleCancel, onlyValue, addButtonElement, cancelButtonElement, inputElementGenerator, keyPath, deep } = this.props, addButtonElementLayout = reactExports.cloneElement(addButtonElement, { onClick: this.onSubmit }), cancelButtonElementLayout = reactExports.cloneElement(cancelButtonElement, { onClick: handleCancel }), inputElementValue = inputElementGenerator(VALUE, keyPath, deep), inputElementValueLayout = reactExports.cloneElement(inputElementValue, { placeholder: "Value", ref: this.refInputValue }), inputElementKeyLayout = null;
    if (!onlyValue) {
      let inputElementKey = inputElementGenerator(KEY, keyPath, deep);
      inputElementKeyLayout = reactExports.cloneElement(inputElementKey, { placeholder: "Key", ref: this.refInputKey });
    }
    return React.createElement("span", { className: "rejt-add-value-node" }, inputElementKeyLayout, inputElementValueLayout, cancelButtonElementLayout, addButtonElementLayout);
  }
};
JsonAddValue.defaultProps = { onlyValue: false, addButtonElement: React.createElement("button", null, "+"), cancelButtonElement: React.createElement("button", null, "c") };
var JsonArray = class extends reactExports.Component {
  constructor(props) {
    super(props);
    let keyPath = [...props.keyPath, props.name];
    this.state = { data: props.data, name: props.name, keyPath, deep: props.deep, nextDeep: props.deep + 1, collapsed: props.isCollapsed(keyPath, props.deep, props.data), addFormVisible: false }, this.handleCollapseMode = this.handleCollapseMode.bind(this), this.handleRemoveItem = this.handleRemoveItem.bind(this), this.handleAddMode = this.handleAddMode.bind(this), this.handleAddValueAdd = this.handleAddValueAdd.bind(this), this.handleAddValueCancel = this.handleAddValueCancel.bind(this), this.handleEditValue = this.handleEditValue.bind(this), this.onChildUpdate = this.onChildUpdate.bind(this), this.renderCollapsed = this.renderCollapsed.bind(this), this.renderNotCollapsed = this.renderNotCollapsed.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    return props.data !== state.data ? { data: props.data } : null;
  }
  onChildUpdate(childKey, childData) {
    let { data, keyPath } = this.state;
    data[childKey] = childData, this.setState({ data });
    let { onUpdate } = this.props, size = keyPath.length;
    onUpdate(keyPath[size - 1], data);
  }
  handleAddMode() {
    this.setState({ addFormVisible: true });
  }
  handleCollapseMode() {
    this.setState((state) => ({ collapsed: !state.collapsed }));
  }
  handleRemoveItem(index3) {
    return () => {
      let { beforeRemoveAction, logger: logger4 } = this.props, { data, keyPath, nextDeep: deep } = this.state, oldValue = data[index3];
      beforeRemoveAction(index3, keyPath, deep, oldValue).then(() => {
        let deltaUpdateResult = { keyPath, deep, key: index3, oldValue, type: REMOVE_DELTA_TYPE };
        data.splice(index3, 1), this.setState({ data });
        let { onUpdate, onDeltaUpdate } = this.props;
        onUpdate(keyPath[keyPath.length - 1], data), onDeltaUpdate(deltaUpdateResult);
      }).catch(logger4.error);
    };
  }
  handleAddValueAdd({ newValue }) {
    let { data, keyPath, nextDeep: deep } = this.state, { beforeAddAction, logger: logger4 } = this.props;
    beforeAddAction(data.length, keyPath, deep, newValue).then(() => {
      let newData = [...data, newValue];
      this.setState({ data: newData }), this.handleAddValueCancel();
      let { onUpdate, onDeltaUpdate } = this.props;
      onUpdate(keyPath[keyPath.length - 1], newData), onDeltaUpdate({ type: ADD_DELTA_TYPE, keyPath, deep, key: newData.length - 1, newValue });
    }).catch(logger4.error);
  }
  handleAddValueCancel() {
    this.setState({ addFormVisible: false });
  }
  handleEditValue({ key, value: value2 }) {
    return new Promise((resolve, reject) => {
      let { beforeUpdateAction } = this.props, { data, keyPath, nextDeep: deep } = this.state, oldValue = data[key];
      beforeUpdateAction(key, keyPath, deep, oldValue, value2).then(() => {
        data[key] = value2, this.setState({ data });
        let { onUpdate, onDeltaUpdate } = this.props;
        onUpdate(keyPath[keyPath.length - 1], data), onDeltaUpdate({ type: UPDATE_DELTA_TYPE, keyPath, deep, key, newValue: value2, oldValue }), resolve(void 0);
      }).catch(reject);
    });
  }
  renderCollapsed() {
    let { name, data, keyPath, deep } = this.state, { handleRemove, readOnly, getStyle, dataType, minusMenuElement } = this.props, { minus, collapsed } = getStyle(name, data, keyPath, deep, dataType), isReadOnly = readOnly(name, data, keyPath, deep, dataType), removeItemButton = reactExports.cloneElement(minusMenuElement, { onClick: handleRemove, className: "rejt-minus-menu", style: minus });
    return React.createElement("span", { className: "rejt-collapsed" }, React.createElement("span", { className: "rejt-collapsed-text", style: collapsed, onClick: this.handleCollapseMode }, "[...] ", data.length, " ", data.length === 1 ? "item" : "items"), !isReadOnly && removeItemButton);
  }
  renderNotCollapsed() {
    let { name, data, keyPath, deep, addFormVisible, nextDeep } = this.state, { isCollapsed, handleRemove, onDeltaUpdate, readOnly, getStyle, dataType, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser } = this.props, { minus, plus, delimiter, ul, addForm } = getStyle(name, data, keyPath, deep, dataType), isReadOnly = readOnly(name, data, keyPath, deep, dataType), addItemButton = reactExports.cloneElement(plusMenuElement, { onClick: this.handleAddMode, className: "rejt-plus-menu", style: plus }), removeItemButton = reactExports.cloneElement(minusMenuElement, { onClick: handleRemove, className: "rejt-minus-menu", style: minus });
    return React.createElement("span", { className: "rejt-not-collapsed" }, React.createElement("span", { className: "rejt-not-collapsed-delimiter", style: delimiter }, "["), !addFormVisible && addItemButton, React.createElement("ul", { className: "rejt-not-collapsed-list", style: ul }, data.map((item, index3) => React.createElement(JsonNode, { key: index3, name: index3.toString(), data: item, keyPath, deep: nextDeep, isCollapsed, handleRemove: this.handleRemoveItem(index3), handleUpdateValue: this.handleEditValue, onUpdate: this.onChildUpdate, onDeltaUpdate, readOnly, getStyle, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser }))), !isReadOnly && addFormVisible && React.createElement("div", { className: "rejt-add-form", style: addForm }, React.createElement(JsonAddValue, { handleAdd: this.handleAddValueAdd, handleCancel: this.handleAddValueCancel, onlyValue: true, addButtonElement, cancelButtonElement, inputElementGenerator, keyPath, deep, onSubmitValueParser })), React.createElement("span", { className: "rejt-not-collapsed-delimiter", style: delimiter }, "]"), !isReadOnly && removeItemButton);
  }
  render() {
    let { name, collapsed, data, keyPath, deep } = this.state, { dataType, getStyle } = this.props, value2 = collapsed ? this.renderCollapsed() : this.renderNotCollapsed(), style = getStyle(name, data, keyPath, deep, dataType);
    return React.createElement("div", { className: "rejt-array-node" }, React.createElement("span", { onClick: this.handleCollapseMode }, React.createElement("span", { className: "rejt-name", style: style.name }, name, " :", " ")), value2);
  }
};
JsonArray.defaultProps = { keyPath: [], deep: 0, minusMenuElement: React.createElement("span", null, " - "), plusMenuElement: React.createElement("span", null, " + ") };
var JsonFunctionValue = class extends reactExports.Component {
  constructor(props) {
    super(props);
    let keyPath = [...props.keyPath, props.name];
    this.state = { value: props.value, name: props.name, keyPath, deep: props.deep, editEnabled: false, inputRef: null }, this.handleEditMode = this.handleEditMode.bind(this), this.refInput = this.refInput.bind(this), this.handleCancelEdit = this.handleCancelEdit.bind(this), this.handleEdit = this.handleEdit.bind(this), this.onKeydown = this.onKeydown.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    return props.value !== state.value ? { value: props.value } : null;
  }
  componentDidUpdate() {
    let { editEnabled, inputRef, name, value: value2, keyPath, deep } = this.state, { readOnly, dataType } = this.props, readOnlyResult = readOnly(name, value2, keyPath, deep, dataType);
    editEnabled && !readOnlyResult && typeof inputRef.focus == "function" && inputRef.focus();
  }
  componentDidMount() {
    document.addEventListener("keydown", this.onKeydown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeydown);
  }
  onKeydown(event) {
    event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || event.repeat || ((event.code === "Enter" || event.key === "Enter") && (event.preventDefault(), this.handleEdit()), (event.code === "Escape" || event.key === "Escape") && (event.preventDefault(), this.handleCancelEdit()));
  }
  handleEdit() {
    let { handleUpdateValue, originalValue, logger: logger4, onSubmitValueParser, keyPath } = this.props, { inputRef, name, deep } = this.state;
    if (!inputRef) return;
    let newValue = onSubmitValueParser(true, keyPath, deep, name, inputRef.value);
    handleUpdateValue({ value: newValue, key: name }).then(() => {
      isComponentWillChange(originalValue, newValue) || this.handleCancelEdit();
    }).catch(logger4.error);
  }
  handleEditMode() {
    this.setState({ editEnabled: true });
  }
  refInput(node) {
    this.state.inputRef = node;
  }
  handleCancelEdit() {
    this.setState({ editEnabled: false });
  }
  render() {
    let { name, value: value2, editEnabled, keyPath, deep } = this.state, { handleRemove, originalValue, readOnly, dataType, getStyle, editButtonElement, cancelButtonElement, textareaElementGenerator, minusMenuElement, keyPath: comeFromKeyPath } = this.props, style = getStyle(name, originalValue, keyPath, deep, dataType), result = null, minusElement = null, resultOnlyResult = readOnly(name, originalValue, keyPath, deep, dataType);
    if (editEnabled && !resultOnlyResult) {
      let textareaElement = textareaElementGenerator(VALUE, comeFromKeyPath, deep, name, originalValue, dataType), editButtonElementLayout = reactExports.cloneElement(editButtonElement, { onClick: this.handleEdit }), cancelButtonElementLayout = reactExports.cloneElement(cancelButtonElement, { onClick: this.handleCancelEdit }), textareaElementLayout = reactExports.cloneElement(textareaElement, { ref: this.refInput, defaultValue: originalValue });
      result = React.createElement("span", { className: "rejt-edit-form", style: style.editForm }, textareaElementLayout, " ", cancelButtonElementLayout, editButtonElementLayout), minusElement = null;
    } else {
      result = React.createElement("span", { className: "rejt-value", style: style.value, onClick: resultOnlyResult ? null : this.handleEditMode }, value2);
      let minusMenuLayout = reactExports.cloneElement(minusMenuElement, { onClick: handleRemove, className: "rejt-minus-menu", style: style.minus });
      minusElement = resultOnlyResult ? null : minusMenuLayout;
    }
    return React.createElement("li", { className: "rejt-function-value-node", style: style.li }, React.createElement("span", { className: "rejt-name", style: style.name }, name, " :", " "), result, minusElement);
  }
};
JsonFunctionValue.defaultProps = { keyPath: [], deep: 0, handleUpdateValue: () => {
}, editButtonElement: React.createElement("button", null, "e"), cancelButtonElement: React.createElement("button", null, "c"), minusMenuElement: React.createElement("span", null, " - ") };
var JsonNode = class extends reactExports.Component {
  constructor(props) {
    super(props), this.state = { data: props.data, name: props.name, keyPath: props.keyPath, deep: props.deep };
  }
  static getDerivedStateFromProps(props, state) {
    return props.data !== state.data ? { data: props.data } : null;
  }
  render() {
    let { data, name, keyPath, deep } = this.state, { isCollapsed, handleRemove, handleUpdateValue, onUpdate, onDeltaUpdate, readOnly, getStyle, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser } = this.props, readOnlyTrue = () => true, dataType = getObjectType(data);
    switch (dataType) {
      case ERROR:
        return React.createElement(JsonObject, { data, name, isCollapsed, keyPath, deep, handleRemove, onUpdate, onDeltaUpdate, readOnly: readOnlyTrue, dataType, getStyle, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser });
      case OBJECT:
        return React.createElement(JsonObject, { data, name, isCollapsed, keyPath, deep, handleRemove, onUpdate, onDeltaUpdate, readOnly, dataType, getStyle, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser });
      case ARRAY:
        return React.createElement(JsonArray, { data, name, isCollapsed, keyPath, deep, handleRemove, onUpdate, onDeltaUpdate, readOnly, dataType, getStyle, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser });
      case STRING:
        return React.createElement(JsonValue, { name, value: `"${data}"`, originalValue: data, keyPath, deep, handleRemove, handleUpdateValue, readOnly, dataType, getStyle, cancelButtonElement, editButtonElement, inputElementGenerator, minusMenuElement, logger: logger4, onSubmitValueParser });
      case NUMBER:
        return React.createElement(JsonValue, { name, value: data, originalValue: data, keyPath, deep, handleRemove, handleUpdateValue, readOnly, dataType, getStyle, cancelButtonElement, editButtonElement, inputElementGenerator, minusMenuElement, logger: logger4, onSubmitValueParser });
      case BOOLEAN:
        return React.createElement(JsonValue, { name, value: data ? "true" : "false", originalValue: data, keyPath, deep, handleRemove, handleUpdateValue, readOnly, dataType, getStyle, cancelButtonElement, editButtonElement, inputElementGenerator, minusMenuElement, logger: logger4, onSubmitValueParser });
      case DATE:
        return React.createElement(JsonValue, { name, value: data.toISOString(), originalValue: data, keyPath, deep, handleRemove, handleUpdateValue, readOnly: readOnlyTrue, dataType, getStyle, cancelButtonElement, editButtonElement, inputElementGenerator, minusMenuElement, logger: logger4, onSubmitValueParser });
      case NULL:
        return React.createElement(JsonValue, { name, value: "null", originalValue: "null", keyPath, deep, handleRemove, handleUpdateValue, readOnly, dataType, getStyle, cancelButtonElement, editButtonElement, inputElementGenerator, minusMenuElement, logger: logger4, onSubmitValueParser });
      case UNDEFINED:
        return React.createElement(JsonValue, { name, value: "undefined", originalValue: "undefined", keyPath, deep, handleRemove, handleUpdateValue, readOnly, dataType, getStyle, cancelButtonElement, editButtonElement, inputElementGenerator, minusMenuElement, logger: logger4, onSubmitValueParser });
      case FUNCTION:
        return React.createElement(JsonFunctionValue, { name, value: data.toString(), originalValue: data, keyPath, deep, handleRemove, handleUpdateValue, readOnly, dataType, getStyle, cancelButtonElement, editButtonElement, textareaElementGenerator, minusMenuElement, logger: logger4, onSubmitValueParser });
      case SYMBOL:
        return React.createElement(JsonValue, { name, value: data.toString(), originalValue: data, keyPath, deep, handleRemove, handleUpdateValue, readOnly: readOnlyTrue, dataType, getStyle, cancelButtonElement, editButtonElement, inputElementGenerator, minusMenuElement, logger: logger4, onSubmitValueParser });
      default:
        return null;
    }
  }
};
JsonNode.defaultProps = { keyPath: [], deep: 0 };
var JsonObject = class extends reactExports.Component {
  constructor(props) {
    super(props);
    let keyPath = props.deep === -1 ? [] : [...props.keyPath, props.name];
    this.state = { name: props.name, data: props.data, keyPath, deep: props.deep, nextDeep: props.deep + 1, collapsed: props.isCollapsed(keyPath, props.deep, props.data), addFormVisible: false }, this.handleCollapseMode = this.handleCollapseMode.bind(this), this.handleRemoveValue = this.handleRemoveValue.bind(this), this.handleAddMode = this.handleAddMode.bind(this), this.handleAddValueAdd = this.handleAddValueAdd.bind(this), this.handleAddValueCancel = this.handleAddValueCancel.bind(this), this.handleEditValue = this.handleEditValue.bind(this), this.onChildUpdate = this.onChildUpdate.bind(this), this.renderCollapsed = this.renderCollapsed.bind(this), this.renderNotCollapsed = this.renderNotCollapsed.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    return props.data !== state.data ? { data: props.data } : null;
  }
  onChildUpdate(childKey, childData) {
    let { data, keyPath } = this.state;
    data[childKey] = childData, this.setState({ data });
    let { onUpdate } = this.props, size = keyPath.length;
    onUpdate(keyPath[size - 1], data);
  }
  handleAddMode() {
    this.setState({ addFormVisible: true });
  }
  handleAddValueCancel() {
    this.setState({ addFormVisible: false });
  }
  handleAddValueAdd({ key, newValue }) {
    let { data, keyPath, nextDeep: deep } = this.state, { beforeAddAction, logger: logger4 } = this.props;
    beforeAddAction(key, keyPath, deep, newValue).then(() => {
      data[key] = newValue, this.setState({ data }), this.handleAddValueCancel();
      let { onUpdate, onDeltaUpdate } = this.props;
      onUpdate(keyPath[keyPath.length - 1], data), onDeltaUpdate({ type: ADD_DELTA_TYPE, keyPath, deep, key, newValue });
    }).catch(logger4.error);
  }
  handleRemoveValue(key) {
    return () => {
      let { beforeRemoveAction, logger: logger4 } = this.props, { data, keyPath, nextDeep: deep } = this.state, oldValue = data[key];
      beforeRemoveAction(key, keyPath, deep, oldValue).then(() => {
        let deltaUpdateResult = { keyPath, deep, key, oldValue, type: REMOVE_DELTA_TYPE };
        delete data[key], this.setState({ data });
        let { onUpdate, onDeltaUpdate } = this.props;
        onUpdate(keyPath[keyPath.length - 1], data), onDeltaUpdate(deltaUpdateResult);
      }).catch(logger4.error);
    };
  }
  handleCollapseMode() {
    this.setState((state) => ({ collapsed: !state.collapsed }));
  }
  handleEditValue({ key, value: value2 }) {
    return new Promise((resolve, reject) => {
      let { beforeUpdateAction } = this.props, { data, keyPath, nextDeep: deep } = this.state, oldValue = data[key];
      beforeUpdateAction(key, keyPath, deep, oldValue, value2).then(() => {
        data[key] = value2, this.setState({ data });
        let { onUpdate, onDeltaUpdate } = this.props;
        onUpdate(keyPath[keyPath.length - 1], data), onDeltaUpdate({ type: UPDATE_DELTA_TYPE, keyPath, deep, key, newValue: value2, oldValue }), resolve();
      }).catch(reject);
    });
  }
  renderCollapsed() {
    let { name, keyPath, deep, data } = this.state, { handleRemove, readOnly, dataType, getStyle, minusMenuElement } = this.props, { minus, collapsed } = getStyle(name, data, keyPath, deep, dataType), keyList = Object.getOwnPropertyNames(data), isReadOnly = readOnly(name, data, keyPath, deep, dataType), removeItemButton = reactExports.cloneElement(minusMenuElement, { onClick: handleRemove, className: "rejt-minus-menu", style: minus });
    return React.createElement("span", { className: "rejt-collapsed" }, React.createElement("span", { className: "rejt-collapsed-text", style: collapsed, onClick: this.handleCollapseMode }, "{...}", " ", keyList.length, " ", keyList.length === 1 ? "key" : "keys"), !isReadOnly && removeItemButton);
  }
  renderNotCollapsed() {
    let { name, data, keyPath, deep, nextDeep, addFormVisible } = this.state, { isCollapsed, handleRemove, onDeltaUpdate, readOnly, getStyle, dataType, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser } = this.props, { minus, plus, addForm, ul, delimiter } = getStyle(name, data, keyPath, deep, dataType), keyList = Object.getOwnPropertyNames(data), isReadOnly = readOnly(name, data, keyPath, deep, dataType), addItemButton = reactExports.cloneElement(plusMenuElement, { onClick: this.handleAddMode, className: "rejt-plus-menu", style: plus }), removeItemButton = reactExports.cloneElement(minusMenuElement, { onClick: handleRemove, className: "rejt-minus-menu", style: minus }), list = keyList.map((key) => React.createElement(JsonNode, { key, name: key, data: data[key], keyPath, deep: nextDeep, isCollapsed, handleRemove: this.handleRemoveValue(key), handleUpdateValue: this.handleEditValue, onUpdate: this.onChildUpdate, onDeltaUpdate, readOnly, getStyle, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser }));
    return React.createElement("span", { className: "rejt-not-collapsed" }, React.createElement("span", { className: "rejt-not-collapsed-delimiter", style: delimiter }, "{"), !isReadOnly && addItemButton, React.createElement("ul", { className: "rejt-not-collapsed-list", style: ul }, list), !isReadOnly && addFormVisible && React.createElement("div", { className: "rejt-add-form", style: addForm }, React.createElement(JsonAddValue, { handleAdd: this.handleAddValueAdd, handleCancel: this.handleAddValueCancel, addButtonElement, cancelButtonElement, inputElementGenerator, keyPath, deep, onSubmitValueParser })), React.createElement("span", { className: "rejt-not-collapsed-delimiter", style: delimiter }, "}"), !isReadOnly && removeItemButton);
  }
  render() {
    let { name, collapsed, data, keyPath, deep } = this.state, { getStyle, dataType } = this.props, value2 = collapsed ? this.renderCollapsed() : this.renderNotCollapsed(), style = getStyle(name, data, keyPath, deep, dataType);
    return React.createElement("div", { className: "rejt-object-node" }, React.createElement("span", { onClick: this.handleCollapseMode }, React.createElement("span", { className: "rejt-name", style: style.name }, name, " :", " ")), value2);
  }
};
JsonObject.defaultProps = { keyPath: [], deep: 0, minusMenuElement: React.createElement("span", null, " - "), plusMenuElement: React.createElement("span", null, " + ") };
var JsonValue = class extends reactExports.Component {
  constructor(props) {
    super(props);
    let keyPath = [...props.keyPath, props.name];
    this.state = { value: props.value, name: props.name, keyPath, deep: props.deep, editEnabled: false, inputRef: null }, this.handleEditMode = this.handleEditMode.bind(this), this.refInput = this.refInput.bind(this), this.handleCancelEdit = this.handleCancelEdit.bind(this), this.handleEdit = this.handleEdit.bind(this), this.onKeydown = this.onKeydown.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    return props.value !== state.value ? { value: props.value } : null;
  }
  componentDidUpdate() {
    let { editEnabled, inputRef, name, value: value2, keyPath, deep } = this.state, { readOnly, dataType } = this.props, isReadOnly = readOnly(name, value2, keyPath, deep, dataType);
    editEnabled && !isReadOnly && typeof inputRef.focus == "function" && inputRef.focus();
  }
  componentDidMount() {
    document.addEventListener("keydown", this.onKeydown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeydown);
  }
  onKeydown(event) {
    event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || event.repeat || ((event.code === "Enter" || event.key === "Enter") && (event.preventDefault(), this.handleEdit()), (event.code === "Escape" || event.key === "Escape") && (event.preventDefault(), this.handleCancelEdit()));
  }
  handleEdit() {
    let { handleUpdateValue, originalValue, logger: logger4, onSubmitValueParser, keyPath } = this.props, { inputRef, name, deep } = this.state;
    if (!inputRef) return;
    let newValue = onSubmitValueParser(true, keyPath, deep, name, inputRef.value);
    handleUpdateValue({ value: newValue, key: name }).then(() => {
      isComponentWillChange(originalValue, newValue) || this.handleCancelEdit();
    }).catch(logger4.error);
  }
  handleEditMode() {
    this.setState({ editEnabled: true });
  }
  refInput(node) {
    this.state.inputRef = node;
  }
  handleCancelEdit() {
    this.setState({ editEnabled: false });
  }
  render() {
    let { name, value: value2, editEnabled, keyPath, deep } = this.state, { handleRemove, originalValue, readOnly, dataType, getStyle, editButtonElement, cancelButtonElement, inputElementGenerator, minusMenuElement, keyPath: comeFromKeyPath } = this.props, style = getStyle(name, originalValue, keyPath, deep, dataType), isReadOnly = readOnly(name, originalValue, keyPath, deep, dataType), isEditing = editEnabled && !isReadOnly, inputElement = inputElementGenerator(VALUE, comeFromKeyPath, deep, name, originalValue, dataType), editButtonElementLayout = reactExports.cloneElement(editButtonElement, { onClick: this.handleEdit }), cancelButtonElementLayout = reactExports.cloneElement(cancelButtonElement, { onClick: this.handleCancelEdit }), inputElementLayout = reactExports.cloneElement(inputElement, { ref: this.refInput, defaultValue: JSON.stringify(originalValue) }), minusMenuLayout = reactExports.cloneElement(minusMenuElement, { onClick: handleRemove, className: "rejt-minus-menu", style: style.minus });
    return React.createElement("li", { className: "rejt-value-node", style: style.li }, React.createElement("span", { className: "rejt-name", style: style.name }, name, " : "), isEditing ? React.createElement("span", { className: "rejt-edit-form", style: style.editForm }, inputElementLayout, " ", cancelButtonElementLayout, editButtonElementLayout) : React.createElement("span", { className: "rejt-value", style: style.value, onClick: isReadOnly ? null : this.handleEditMode }, String(value2)), !isReadOnly && !isEditing && minusMenuLayout);
  }
};
JsonValue.defaultProps = { keyPath: [], deep: 0, handleUpdateValue: () => Promise.resolve(), editButtonElement: React.createElement("button", null, "e"), cancelButtonElement: React.createElement("button", null, "c"), minusMenuElement: React.createElement("span", null, " - ") };
var object = { minus: { color: "red" }, plus: { color: "green" }, collapsed: { color: "grey" }, delimiter: {}, ul: { padding: "0px", margin: "0 0 0 25px", listStyle: "none" }, name: { color: "#2287CD" }, addForm: {} }, array = { minus: { color: "red" }, plus: { color: "green" }, collapsed: { color: "grey" }, delimiter: {}, ul: { padding: "0px", margin: "0 0 0 25px", listStyle: "none" }, name: { color: "#2287CD" }, addForm: {} }, value = { minus: { color: "red" }, editForm: {}, value: { color: "#7bba3d" }, li: { minHeight: "22px", lineHeight: "22px", outline: "0px" }, name: { color: "#2287CD" } };
function parse3(string) {
  let result = string;
  if (result.indexOf("function") === 0) return (0, eval)(`(${result})`);
  try {
    result = JSON.parse(string);
  } catch {
  }
  return result;
}
var JsonTree = class extends reactExports.Component {
  constructor(props) {
    super(props), this.state = { data: props.data, rootName: props.rootName }, this.onUpdate = this.onUpdate.bind(this), this.removeRoot = this.removeRoot.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    return props.data !== state.data || props.rootName !== state.rootName ? { data: props.data, rootName: props.rootName } : null;
  }
  onUpdate(key, data) {
    this.setState({ data }), this.props.onFullyUpdate(data);
  }
  removeRoot() {
    this.onUpdate(null, null);
  }
  render() {
    let { data, rootName } = this.state, { isCollapsed, onDeltaUpdate, readOnly, getStyle, addButtonElement, cancelButtonElement, editButtonElement, inputElement, textareaElement, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser, fallback = null } = this.props, dataType = getObjectType(data), readOnlyFunction = readOnly;
    getObjectType(readOnly) === "Boolean" && (readOnlyFunction = () => readOnly);
    let inputElementFunction = inputElement;
    inputElement && getObjectType(inputElement) !== "Function" && (inputElementFunction = () => inputElement);
    let textareaElementFunction = textareaElement;
    return textareaElement && getObjectType(textareaElement) !== "Function" && (textareaElementFunction = () => textareaElement), dataType === "Object" || dataType === "Array" ? React.createElement("div", { className: "rejt-tree" }, React.createElement(JsonNode, { data, name: rootName, deep: -1, isCollapsed, onUpdate: this.onUpdate, onDeltaUpdate, readOnly: readOnlyFunction, getStyle, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator: inputElementFunction, textareaElementGenerator: textareaElementFunction, minusMenuElement, plusMenuElement, handleRemove: this.removeRoot, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser })) : fallback;
  }
};
JsonTree.defaultProps = { rootName: "root", isCollapsed: (keyPath, deep) => deep !== -1, getStyle: (keyName, data, keyPath, deep, dataType) => {
  switch (dataType) {
    case "Object":
    case "Error":
      return object;
    case "Array":
      return array;
    default:
      return value;
  }
}, readOnly: () => false, onFullyUpdate: () => {
}, onDeltaUpdate: () => {
}, beforeRemoveAction: () => Promise.resolve(), beforeAddAction: () => Promise.resolve(), beforeUpdateAction: () => Promise.resolve(), logger: { error: () => {
} }, onSubmitValueParser: (isEditMode, keyPath, deep, name, rawValue) => parse3(rawValue), inputElement: () => React.createElement("input", null), textareaElement: () => React.createElement("textarea", null), fallback: null };
var { window: globalWindow2 } = global$1, Wrapper6 = newStyled.div(({ theme }) => ({ position: "relative", display: "flex", '&[aria-readonly="true"]': { opacity: 0.5 }, ".rejt-tree": { marginLeft: "1rem", fontSize: "13px" }, ".rejt-value-node, .rejt-object-node > .rejt-collapsed, .rejt-array-node > .rejt-collapsed, .rejt-object-node > .rejt-not-collapsed, .rejt-array-node > .rejt-not-collapsed": { "& > svg": { opacity: 0, transition: "opacity 0.2s" } }, ".rejt-value-node:hover, .rejt-object-node:hover > .rejt-collapsed, .rejt-array-node:hover > .rejt-collapsed, .rejt-object-node:hover > .rejt-not-collapsed, .rejt-array-node:hover > .rejt-not-collapsed": { "& > svg": { opacity: 1 } }, ".rejt-edit-form button": { display: "none" }, ".rejt-add-form": { marginLeft: 10 }, ".rejt-add-value-node": { display: "inline-flex", alignItems: "center" }, ".rejt-name": { lineHeight: "22px" }, ".rejt-not-collapsed-delimiter": { lineHeight: "22px" }, ".rejt-plus-menu": { marginLeft: 5 }, ".rejt-object-node > span > *, .rejt-array-node > span > *": { position: "relative", zIndex: 2 }, ".rejt-object-node, .rejt-array-node": { position: "relative" }, ".rejt-object-node > span:first-of-type::after, .rejt-array-node > span:first-of-type::after, .rejt-collapsed::before, .rejt-not-collapsed::before": { content: '""', position: "absolute", top: 0, display: "block", width: "100%", marginLeft: "-1rem", padding: "0 4px 0 1rem", height: 22 }, ".rejt-collapsed::before, .rejt-not-collapsed::before": { zIndex: 1, background: "transparent", borderRadius: 4, transition: "background 0.2s", pointerEvents: "none", opacity: 0.1 }, ".rejt-object-node:hover, .rejt-array-node:hover": { "& > .rejt-collapsed::before, & > .rejt-not-collapsed::before": { background: theme.color.secondary } }, ".rejt-collapsed::after, .rejt-not-collapsed::after": { content: '""', position: "absolute", display: "inline-block", pointerEvents: "none", width: 0, height: 0 }, ".rejt-collapsed::after": { left: -8, top: 8, borderTop: "3px solid transparent", borderBottom: "3px solid transparent", borderLeft: "3px solid rgba(153,153,153,0.6)" }, ".rejt-not-collapsed::after": { left: -10, top: 10, borderTop: "3px solid rgba(153,153,153,0.6)", borderLeft: "3px solid transparent", borderRight: "3px solid transparent" }, ".rejt-value": { display: "inline-block", border: "1px solid transparent", borderRadius: 4, margin: "1px 0", padding: "0 4px", cursor: "text", color: theme.color.defaultText }, ".rejt-value-node:hover > .rejt-value": { background: theme.color.lighter, borderColor: theme.appBorderColor } })), ButtonInline = newStyled.button(({ theme, primary }) => ({ border: 0, height: 20, margin: 1, borderRadius: 4, background: primary ? theme.color.secondary : "transparent", color: primary ? theme.color.lightest : theme.color.dark, fontWeight: primary ? "bold" : "normal", cursor: "pointer", order: primary ? "initial" : 9 })), ActionAddIcon = newStyled(AddIcon)(({ theme, disabled }) => ({ display: "inline-block", verticalAlign: "middle", width: 15, height: 15, padding: 3, marginLeft: 5, cursor: disabled ? "not-allowed" : "pointer", color: theme.textMutedColor, "&:hover": disabled ? {} : { color: theme.color.ancillary }, "svg + &": { marginLeft: 0 } })), ActionSubstractIcon = newStyled(SubtractIcon)(({ theme, disabled }) => ({ display: "inline-block", verticalAlign: "middle", width: 15, height: 15, padding: 3, marginLeft: 5, cursor: disabled ? "not-allowed" : "pointer", color: theme.textMutedColor, "&:hover": disabled ? {} : { color: theme.color.negative }, "svg + &": { marginLeft: 0 } })), Input = newStyled.input(({ theme, placeholder }) => ({ outline: 0, margin: placeholder ? 1 : "1px 0", padding: "3px 4px", color: theme.color.defaultText, background: theme.background.app, border: `1px solid ${theme.appBorderColor}`, borderRadius: 4, lineHeight: "14px", width: placeholder === "Key" ? 80 : 120, "&:focus": { border: `1px solid ${theme.color.secondary}` } })), RawButton = newStyled(IconButton)(({ theme }) => ({ position: "absolute", zIndex: 2, top: 2, right: 2, height: 21, padding: "0 3px", background: theme.background.bar, border: `1px solid ${theme.appBorderColor}`, borderRadius: 3, color: theme.textMutedColor, fontSize: "9px", fontWeight: "bold", textDecoration: "none", span: { marginLeft: 3, marginTop: 1 } })), RawInput = newStyled(Form.Textarea)(({ theme }) => ({ flex: 1, padding: "7px 6px", fontFamily: theme.typography.fonts.mono, fontSize: "12px", lineHeight: "18px", "&::placeholder": { fontFamily: theme.typography.fonts.base, fontSize: "13px" }, "&:placeholder-shown": { padding: "7px 10px" } })), ENTER_EVENT = { bubbles: true, cancelable: true, key: "Enter", code: "Enter", keyCode: 13 }, dispatchEnterKey = (event) => {
  event.currentTarget.dispatchEvent(new globalWindow2.KeyboardEvent("keydown", ENTER_EVENT));
}, selectValue = (event) => {
  event.currentTarget.select();
}, getCustomStyleFunction = (theme) => () => ({ name: { color: theme.color.secondary }, collapsed: { color: theme.color.dark }, ul: { listStyle: "none", margin: "0 0 0 1rem", padding: 0 }, li: { outline: 0 } }), ObjectControl = ({ name, value: value2, onChange, argType }) => {
  var _a;
  let theme = useTheme(), data = reactExports.useMemo(() => value2 && cloneDeep$1(value2), [value2]), hasData = data != null, [showRaw, setShowRaw] = reactExports.useState(!hasData), [parseError, setParseError] = reactExports.useState(null), readonly = !!((_a = argType == null ? void 0 : argType.table) == null ? void 0 : _a.readonly), updateRaw = reactExports.useCallback((raw) => {
    try {
      raw && onChange(JSON.parse(raw)), setParseError(void 0);
    } catch (e2) {
      setParseError(e2);
    }
  }, [onChange]), [forceVisible, setForceVisible] = reactExports.useState(false), onForceVisible = reactExports.useCallback(() => {
    onChange({}), setForceVisible(true);
  }, [setForceVisible]), htmlElRef = reactExports.useRef(null);
  if (reactExports.useEffect(() => {
    forceVisible && htmlElRef.current && htmlElRef.current.select();
  }, [forceVisible]), !hasData) return React.createElement(Button, { disabled: readonly, id: getControlSetterButtonId(name), onClick: onForceVisible }, "Set object");
  let rawJSONForm = React.createElement(RawInput, { ref: htmlElRef, id: getControlId(name), name, defaultValue: value2 === null ? "" : JSON.stringify(value2, null, 2), onBlur: (event) => updateRaw(event.target.value), placeholder: "Edit JSON string...", autoFocus: forceVisible, valid: parseError ? "error" : null, readOnly: readonly }), isObjectOrArray = Array.isArray(value2) || typeof value2 == "object" && (value2 == null ? void 0 : value2.constructor) === Object;
  return React.createElement(Wrapper6, { "aria-readonly": readonly }, isObjectOrArray && React.createElement(RawButton, { onClick: (e2) => {
    e2.preventDefault(), setShowRaw((v2) => !v2);
  } }, showRaw ? React.createElement(EyeCloseIcon, null) : React.createElement(EyeIcon, null), React.createElement("span", null, "RAW")), showRaw ? rawJSONForm : React.createElement(JsonTree, { readOnly: readonly || !isObjectOrArray, isCollapsed: isObjectOrArray ? void 0 : () => true, data, rootName: name, onFullyUpdate: onChange, getStyle: getCustomStyleFunction(theme), cancelButtonElement: React.createElement(ButtonInline, { type: "button" }, "Cancel"), editButtonElement: React.createElement(ButtonInline, { type: "submit" }, "Save"), addButtonElement: React.createElement(ButtonInline, { type: "submit", primary: true }, "Save"), plusMenuElement: React.createElement(ActionAddIcon, null), minusMenuElement: React.createElement(ActionSubstractIcon, null), inputElement: (_2, __, ___, key) => key ? React.createElement(Input, { onFocus: selectValue, onBlur: dispatchEnterKey }) : React.createElement(Input, null), fallback: rawJSONForm }));
};
var RangeInput = newStyled.input(({ theme, min: min2, max: max2, value: value2, disabled }) => ({ "&": { width: "100%", backgroundColor: "transparent", appearance: "none" }, "&::-webkit-slider-runnable-track": { background: theme.base === "light" ? `linear-gradient(to right, 
            ${theme.color.green} 0%, ${theme.color.green} ${(value2 - min2) / (max2 - min2) * 100}%, 
            ${curriedDarken$1(0.02, theme.input.background)} ${(value2 - min2) / (max2 - min2) * 100}%, 
            ${curriedDarken$1(0.02, theme.input.background)} 100%)` : `linear-gradient(to right, 
            ${theme.color.green} 0%, ${theme.color.green} ${(value2 - min2) / (max2 - min2) * 100}%, 
            ${curriedLighten$1(0.02, theme.input.background)} ${(value2 - min2) / (max2 - min2) * 100}%, 
            ${curriedLighten$1(0.02, theme.input.background)} 100%)`, boxShadow: `${theme.appBorderColor} 0 0 0 1px inset`, borderRadius: 6, width: "100%", height: 6, cursor: disabled ? "not-allowed" : "pointer" }, "&::-webkit-slider-thumb": { marginTop: "-6px", width: 16, height: 16, border: `1px solid ${rgba(theme.appBorderColor, 0.2)}`, borderRadius: "50px", boxShadow: `0 1px 3px 0px ${rgba(theme.appBorderColor, 0.2)}`, cursor: disabled ? "not-allowed" : "grab", appearance: "none", background: `${theme.input.background}`, transition: "all 150ms ease-out", "&:hover": { background: `${curriedDarken$1(0.05, theme.input.background)}`, transform: "scale3d(1.1, 1.1, 1.1) translateY(-1px)", transition: "all 50ms ease-out" }, "&:active": { background: `${theme.input.background}`, transform: "scale3d(1, 1, 1) translateY(0px)", cursor: disabled ? "not-allowed" : "grab" } }, "&:focus": { outline: "none", "&::-webkit-slider-runnable-track": { borderColor: rgba(theme.color.secondary, 0.4) }, "&::-webkit-slider-thumb": { borderColor: theme.color.secondary, boxShadow: `0 0px 5px 0px ${theme.color.secondary}` } }, "&::-moz-range-track": { background: theme.base === "light" ? `linear-gradient(to right, 
            ${theme.color.green} 0%, ${theme.color.green} ${(value2 - min2) / (max2 - min2) * 100}%, 
            ${curriedDarken$1(0.02, theme.input.background)} ${(value2 - min2) / (max2 - min2) * 100}%, 
            ${curriedDarken$1(0.02, theme.input.background)} 100%)` : `linear-gradient(to right, 
            ${theme.color.green} 0%, ${theme.color.green} ${(value2 - min2) / (max2 - min2) * 100}%, 
            ${curriedLighten$1(0.02, theme.input.background)} ${(value2 - min2) / (max2 - min2) * 100}%, 
            ${curriedLighten$1(0.02, theme.input.background)} 100%)`, boxShadow: `${theme.appBorderColor} 0 0 0 1px inset`, borderRadius: 6, width: "100%", height: 6, cursor: disabled ? "not-allowed" : "pointer", outline: "none" }, "&::-moz-range-thumb": { width: 16, height: 16, border: `1px solid ${rgba(theme.appBorderColor, 0.2)}`, borderRadius: "50px", boxShadow: `0 1px 3px 0px ${rgba(theme.appBorderColor, 0.2)}`, cursor: disabled ? "not-allowed" : "grap", background: `${theme.input.background}`, transition: "all 150ms ease-out", "&:hover": { background: `${curriedDarken$1(0.05, theme.input.background)}`, transform: "scale3d(1.1, 1.1, 1.1) translateY(-1px)", transition: "all 50ms ease-out" }, "&:active": { background: `${theme.input.background}`, transform: "scale3d(1, 1, 1) translateY(0px)", cursor: "grabbing" } }, "&::-ms-track": { background: theme.base === "light" ? `linear-gradient(to right, 
            ${theme.color.green} 0%, ${theme.color.green} ${(value2 - min2) / (max2 - min2) * 100}%, 
            ${curriedDarken$1(0.02, theme.input.background)} ${(value2 - min2) / (max2 - min2) * 100}%, 
            ${curriedDarken$1(0.02, theme.input.background)} 100%)` : `linear-gradient(to right, 
            ${theme.color.green} 0%, ${theme.color.green} ${(value2 - min2) / (max2 - min2) * 100}%, 
            ${curriedLighten$1(0.02, theme.input.background)} ${(value2 - min2) / (max2 - min2) * 100}%, 
            ${curriedLighten$1(0.02, theme.input.background)} 100%)`, boxShadow: `${theme.appBorderColor} 0 0 0 1px inset`, color: "transparent", width: "100%", height: "6px", cursor: "pointer" }, "&::-ms-fill-lower": { borderRadius: 6 }, "&::-ms-fill-upper": { borderRadius: 6 }, "&::-ms-thumb": { width: 16, height: 16, background: `${theme.input.background}`, border: `1px solid ${rgba(theme.appBorderColor, 0.2)}`, borderRadius: 50, cursor: "grab", marginTop: 0 }, "@supports (-ms-ime-align:auto)": { "input[type=range]": { margin: "0" } } })), RangeLabel = newStyled.span({ paddingLeft: 5, paddingRight: 5, fontSize: 12, whiteSpace: "nowrap", fontFeatureSettings: "tnum", fontVariantNumeric: "tabular-nums", "[aria-readonly=true] &": { opacity: 0.5 } }), RangeCurrentAndMaxLabel = newStyled(RangeLabel)(({ numberOFDecimalsPlaces, max: max2 }) => ({ width: `${numberOFDecimalsPlaces + max2.toString().length * 2 + 3}ch`, textAlign: "right", flexShrink: 0 })), RangeWrapper = newStyled.div({ display: "flex", alignItems: "center", width: "100%" });
function getNumberOfDecimalPlaces(number) {
  let match2 = number.toString().match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  return match2 ? Math.max(0, (match2[1] ? match2[1].length : 0) - (match2[2] ? +match2[2] : 0)) : 0;
}
var RangeControl = ({ name, value: value2, onChange, min: min2 = 0, max: max2 = 100, step = 1, onBlur, onFocus, argType }) => {
  var _a;
  let handleChange = (event) => {
    onChange(parse2(event.target.value));
  }, hasValue = value2 !== void 0, numberOFDecimalsPlaces = reactExports.useMemo(() => getNumberOfDecimalPlaces(step), [step]), readonly = !!((_a = argType == null ? void 0 : argType.table) == null ? void 0 : _a.readonly);
  return React.createElement(RangeWrapper, { "aria-readonly": readonly }, React.createElement(RangeLabel, null, min2), React.createElement(RangeInput, { id: getControlId(name), type: "range", disabled: readonly, onChange: handleChange, name, value: value2, min: min2, max: max2, step, onFocus, onBlur }), React.createElement(RangeCurrentAndMaxLabel, { numberOFDecimalsPlaces, max: max2 }, hasValue ? value2.toFixed(numberOFDecimalsPlaces) : "--", " / ", max2));
};
var Wrapper7 = newStyled.label({ display: "flex" }), MaxLength = newStyled.div(({ isMaxed }) => ({ marginLeft: "0.75rem", paddingTop: "0.35rem", color: isMaxed ? "red" : void 0 })), TextControl = ({ name, value: value2, onChange, onFocus, onBlur, maxLength, argType }) => {
  var _a;
  let handleChange = (event) => {
    onChange(event.target.value);
  }, readonly = !!((_a = argType == null ? void 0 : argType.table) == null ? void 0 : _a.readonly), [forceVisible, setForceVisible] = reactExports.useState(false), onForceVisible = reactExports.useCallback(() => {
    onChange(""), setForceVisible(true);
  }, [setForceVisible]);
  if (value2 === void 0) return React.createElement(Button, { variant: "outline", size: "medium", disabled: readonly, id: getControlSetterButtonId(name), onClick: onForceVisible }, "Set string");
  let isValid = typeof value2 == "string";
  return React.createElement(Wrapper7, null, React.createElement(Form.Textarea, { id: getControlId(name), maxLength, onChange: handleChange, disabled: readonly, size: "flex", placeholder: "Edit string...", autoFocus: forceVisible, valid: isValid ? null : "error", name, value: isValid ? value2 : "", onFocus, onBlur }), maxLength && React.createElement(MaxLength, { isMaxed: (value2 == null ? void 0 : value2.length) === maxLength }, (value2 == null ? void 0 : value2.length) ?? 0, " / ", maxLength));
};
var FileInput = newStyled(Form.Input)({ padding: 10 });
function revokeOldUrls(urls) {
  urls.forEach((url) => {
    url.startsWith("blob:") && URL.revokeObjectURL(url);
  });
}
var FilesControl = ({ onChange, name, accept = "image/*", value: value2, argType }) => {
  var _a;
  let inputElement = reactExports.useRef(null), readonly = (_a = argType == null ? void 0 : argType.control) == null ? void 0 : _a.readOnly;
  function handleFileChange(e2) {
    if (!e2.target.files) return;
    let fileUrls = Array.from(e2.target.files).map((file) => URL.createObjectURL(file));
    onChange(fileUrls), revokeOldUrls(value2);
  }
  return reactExports.useEffect(() => {
    value2 == null && inputElement.current && (inputElement.current.value = null);
  }, [value2, name]), React.createElement(FileInput, { ref: inputElement, id: getControlId(name), type: "file", name, multiple: true, disabled: readonly, onChange: handleFileChange, accept, size: "flex" });
};
var LazyColorControl = reactExports.lazy(() => __vitePreload(() => import("./Color-PRSJMWNM-BGbUnyMs.js"), true ? __vite__mapDeps([13,2,3,9,4,1,5,6,7,8,10]) : void 0, import.meta.url)), ColorControl = (props) => React.createElement(reactExports.Suspense, { fallback: React.createElement("div", null) }, React.createElement(LazyColorControl, { ...props }));
var Controls2 = { array: ObjectControl, object: ObjectControl, boolean: BooleanControl, color: ColorControl, date: DateControl, number: NumberControl, check: OptionsControl, "inline-check": OptionsControl, radio: OptionsControl, "inline-radio": OptionsControl, select: OptionsControl, "multi-select": OptionsControl, range: RangeControl, text: TextControl, file: FilesControl }, NoControl = () => React.createElement(React.Fragment, null, "-"), ArgControl = ({ row, arg, updateArgs, isHovered }) => {
  var _a;
  let { key, control } = row, [isFocused, setFocused] = reactExports.useState(false), [boxedValue, setBoxedValue] = reactExports.useState({ value: arg });
  reactExports.useEffect(() => {
    isFocused || setBoxedValue({ value: arg });
  }, [isFocused, arg]);
  let onChange = reactExports.useCallback((argVal) => (setBoxedValue({ value: argVal }), updateArgs({ [key]: argVal }), argVal), [updateArgs, key]), onBlur = reactExports.useCallback(() => setFocused(false), []), onFocus = reactExports.useCallback(() => setFocused(true), []);
  if (!control || control.disable) {
    let canBeSetup = (control == null ? void 0 : control.disable) !== true && ((_a = row == null ? void 0 : row.type) == null ? void 0 : _a.name) !== "function";
    return isHovered && canBeSetup ? React.createElement(Link2, { href: "https://storybook.js.org/docs/react/essentials/controls", target: "_blank", withArrow: true }, "Setup controls") : React.createElement(NoControl, null);
  }
  let props = { name: key, argType: row, value: boxedValue.value, onChange, onBlur, onFocus }, Control = Controls2[control.type] || NoControl;
  return React.createElement(Control, { ...props, ...control, controlType: control.type });
};
var Name = newStyled.span({ fontWeight: "bold" }), Required = newStyled.span(({ theme }) => ({ color: theme.color.negative, fontFamily: theme.typography.fonts.mono, cursor: "help" })), Description = newStyled.div(({ theme }) => ({ "&&": { p: { margin: "0 0 10px 0" }, a: { color: theme.color.secondary } }, code: { ...codeCommon({ theme }), fontSize: 12, fontFamily: theme.typography.fonts.mono }, "& code": { margin: 0, display: "inline-block" }, "& pre > code": { whiteSpace: "pre-wrap" } })), Type = newStyled.div(({ theme, hasDescription }) => ({ color: theme.base === "light" ? curriedTransparentize$1(0.1, theme.color.defaultText) : curriedTransparentize$1(0.2, theme.color.defaultText), marginTop: hasDescription ? 4 : 0 })), TypeWithJsDoc = newStyled.div(({ theme, hasDescription }) => ({ color: theme.base === "light" ? curriedTransparentize$1(0.1, theme.color.defaultText) : curriedTransparentize$1(0.2, theme.color.defaultText), marginTop: hasDescription ? 12 : 0, marginBottom: 12 })), StyledTd = newStyled.td(({ theme, expandable }) => ({ paddingLeft: expandable ? "40px !important" : "20px !important" })), toSummary = (value2) => value2 && { summary: typeof value2 == "string" ? value2 : value2.name }, ArgRow = (props) => {
  var _a;
  let [isHovered, setIsHovered] = reactExports.useState(false), { row, updateArgs, compact, expandable, initialExpandedArgs } = props, { name, description } = row, table = row.table || {}, type = table.type || toSummary(row.type), defaultValue = table.defaultValue || row.defaultValue, required = (_a = row.type) == null ? void 0 : _a.required, hasDescription = description != null && description !== "";
  return React.createElement("tr", { onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false) }, React.createElement(StyledTd, { expandable }, React.createElement(Name, null, name), required ? React.createElement(Required, { title: "Required" }, "*") : null), compact ? null : React.createElement("td", null, hasDescription && React.createElement(Description, null, React.createElement(Markdown, null, description)), table.jsDocTags != null ? React.createElement(React.Fragment, null, React.createElement(TypeWithJsDoc, { hasDescription }, React.createElement(ArgValue, { value: type, initialExpandedArgs })), React.createElement(ArgJsDoc, { tags: table.jsDocTags })) : React.createElement(Type, { hasDescription }, React.createElement(ArgValue, { value: type, initialExpandedArgs }))), compact ? null : React.createElement("td", null, React.createElement(ArgValue, { value: defaultValue, initialExpandedArgs })), updateArgs ? React.createElement("td", null, React.createElement(ArgControl, { ...props, isHovered })) : null);
};
var ExpanderIconDown = newStyled(ChevronDownIcon$1)(({ theme }) => ({ marginRight: 8, marginLeft: -10, marginTop: -2, height: 12, width: 12, color: theme.base === "light" ? curriedTransparentize$1(0.25, theme.color.defaultText) : curriedTransparentize$1(0.3, theme.color.defaultText), border: "none", display: "inline-block" })), ExpanderIconRight = newStyled(ChevronRightIcon)(({ theme }) => ({ marginRight: 8, marginLeft: -10, marginTop: -2, height: 12, width: 12, color: theme.base === "light" ? curriedTransparentize$1(0.25, theme.color.defaultText) : curriedTransparentize$1(0.3, theme.color.defaultText), border: "none", display: "inline-block" })), FlexWrapper = newStyled.span(({ theme }) => ({ display: "flex", lineHeight: "20px", alignItems: "center" })), Section = newStyled.td(({ theme }) => ({ position: "relative", letterSpacing: "0.35em", textTransform: "uppercase", fontWeight: theme.typography.weight.bold, fontSize: theme.typography.size.s1 - 1, color: theme.base === "light" ? curriedTransparentize$1(0.4, theme.color.defaultText) : curriedTransparentize$1(0.6, theme.color.defaultText), background: `${theme.background.app} !important`, "& ~ td": { background: `${theme.background.app} !important` } })), Subsection = newStyled.td(({ theme }) => ({ position: "relative", fontWeight: theme.typography.weight.bold, fontSize: theme.typography.size.s2 - 1, background: theme.background.app })), StyledTd2 = newStyled.td(() => ({ position: "relative" })), StyledTr = newStyled.tr(({ theme }) => ({ "&:hover > td": { backgroundColor: `${curriedLighten$1(5e-3, theme.background.app)} !important`, boxShadow: `${theme.color.mediumlight} 0 - 1px 0 0 inset`, cursor: "row-resize" } })), ClickIntercept = newStyled.button(() => ({ background: "none", border: "none", padding: "0", font: "inherit", position: "absolute", top: 0, bottom: 0, left: 0, right: 0, height: "100%", width: "100%", color: "transparent", cursor: "row-resize !important" })), SectionRow = ({ level = "section", label, children, initialExpanded = true, colSpan = 3 }) => {
  let [expanded, setExpanded] = reactExports.useState(initialExpanded), Level = level === "subsection" ? Subsection : Section, itemCount = (children == null ? void 0 : children.length) || 0, caption = level === "subsection" ? `${itemCount} item${itemCount !== 1 ? "s" : ""}` : "", helperText = `${expanded ? "Hide" : "Show"} ${level === "subsection" ? itemCount : label} item${itemCount !== 1 ? "s" : ""}`;
  return React.createElement(React.Fragment, null, React.createElement(StyledTr, { title: helperText }, React.createElement(Level, { colSpan: 1 }, React.createElement(ClickIntercept, { onClick: (e2) => setExpanded(!expanded), tabIndex: 0 }, helperText), React.createElement(FlexWrapper, null, expanded ? React.createElement(ExpanderIconDown, null) : React.createElement(ExpanderIconRight, null), label)), React.createElement(StyledTd2, { colSpan: colSpan - 1 }, React.createElement(ClickIntercept, { onClick: (e2) => setExpanded(!expanded), tabIndex: -1, style: { outline: "none" } }, helperText), expanded ? null : caption)), expanded ? children : null);
};
var Row = newStyled.div(({ theme }) => ({ display: "flex", gap: 16, borderBottom: `1px solid ${theme.appBorderColor}`, "&:last-child": { borderBottom: 0 } })), Column = newStyled.div(({ numColumn }) => ({ display: "flex", flexDirection: "column", flex: numColumn || 1, gap: 5, padding: "12px 20px" })), SkeletonText = newStyled.div(({ theme, width, height }) => ({ animation: `${theme.animation.glow} 1.5s ease-in-out infinite`, background: theme.appBorderColor, width: width || "100%", height: height || 16, borderRadius: 3 })), columnWidth = [2, 4, 2, 2], Skeleton = () => React.createElement(React.Fragment, null, React.createElement(Row, null, React.createElement(Column, { numColumn: columnWidth[0] }, React.createElement(SkeletonText, { width: "60%" })), React.createElement(Column, { numColumn: columnWidth[1] }, React.createElement(SkeletonText, { width: "30%" })), React.createElement(Column, { numColumn: columnWidth[2] }, React.createElement(SkeletonText, { width: "60%" })), React.createElement(Column, { numColumn: columnWidth[3] }, React.createElement(SkeletonText, { width: "60%" }))), React.createElement(Row, null, React.createElement(Column, { numColumn: columnWidth[0] }, React.createElement(SkeletonText, { width: "60%" })), React.createElement(Column, { numColumn: columnWidth[1] }, React.createElement(SkeletonText, { width: "80%" }), React.createElement(SkeletonText, { width: "30%" })), React.createElement(Column, { numColumn: columnWidth[2] }, React.createElement(SkeletonText, { width: "60%" })), React.createElement(Column, { numColumn: columnWidth[3] }, React.createElement(SkeletonText, { width: "60%" }))), React.createElement(Row, null, React.createElement(Column, { numColumn: columnWidth[0] }, React.createElement(SkeletonText, { width: "60%" })), React.createElement(Column, { numColumn: columnWidth[1] }, React.createElement(SkeletonText, { width: "80%" }), React.createElement(SkeletonText, { width: "30%" })), React.createElement(Column, { numColumn: columnWidth[2] }, React.createElement(SkeletonText, { width: "60%" })), React.createElement(Column, { numColumn: columnWidth[3] }, React.createElement(SkeletonText, { width: "60%" }))), React.createElement(Row, null, React.createElement(Column, { numColumn: columnWidth[0] }, React.createElement(SkeletonText, { width: "60%" })), React.createElement(Column, { numColumn: columnWidth[1] }, React.createElement(SkeletonText, { width: "80%" }), React.createElement(SkeletonText, { width: "30%" })), React.createElement(Column, { numColumn: columnWidth[2] }, React.createElement(SkeletonText, { width: "60%" })), React.createElement(Column, { numColumn: columnWidth[3] }, React.createElement(SkeletonText, { width: "60%" }))));
var Wrapper8 = newStyled.div(({ inAddonPanel, theme }) => ({ height: inAddonPanel ? "100%" : "auto", display: "flex", border: inAddonPanel ? "none" : `1px solid ${theme.appBorderColor}`, borderRadius: inAddonPanel ? 0 : theme.appBorderRadius, padding: inAddonPanel ? 0 : 40, alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 15, background: theme.background.content, boxShadow: "rgba(0, 0, 0, 0.10) 0 1px 3px 0" })), Links = newStyled.div(({ theme }) => ({ display: "flex", fontSize: theme.typography.size.s2 - 1, gap: 25 })), Divider = newStyled.div(({ theme }) => ({ width: 1, height: 16, backgroundColor: theme.appBorderColor })), Empty = ({ inAddonPanel }) => {
  let [isLoading, setIsLoading] = reactExports.useState(true);
  return reactExports.useEffect(() => {
    let load = setTimeout(() => {
      setIsLoading(false);
    }, 100);
    return () => clearTimeout(load);
  }, []), isLoading ? null : React.createElement(Wrapper8, { inAddonPanel }, React.createElement(EmptyTabContent, { title: inAddonPanel ? "Interactive story playground" : "Args table with interactive controls couldn't be auto-generated", description: React.createElement(React.Fragment, null, "Controls give you an easy to use interface to test your components. Set your story args and you'll see controls appearing here automatically."), footer: React.createElement(Links, null, inAddonPanel && React.createElement(React.Fragment, null, React.createElement(Link2, { href: "https://youtu.be/0gOfS6K0x0E", target: "_blank", withArrow: true }, React.createElement(VideoIcon, null), " Watch 5m video"), React.createElement(Divider, null), React.createElement(Link2, { href: "https://storybook.js.org/docs/essentials/controls", target: "_blank", withArrow: true }, React.createElement(DocumentIcon, null), " Read docs")), !inAddonPanel && React.createElement(Link2, { href: "https://storybook.js.org/docs/essentials/controls", target: "_blank", withArrow: true }, React.createElement(DocumentIcon, null), " Learn how to set that up")) }));
};
var TableWrapper = newStyled.table(({ theme, compact, inAddonPanel }) => ({ "&&": { borderSpacing: 0, color: theme.color.defaultText, "td, th": { padding: 0, border: "none", verticalAlign: "top", textOverflow: "ellipsis" }, fontSize: theme.typography.size.s2 - 1, lineHeight: "20px", textAlign: "left", width: "100%", marginTop: inAddonPanel ? 0 : 25, marginBottom: inAddonPanel ? 0 : 40, "thead th:first-of-type, td:first-of-type": { width: "25%" }, "th:first-of-type, td:first-of-type": { paddingLeft: 20 }, "th:nth-of-type(2), td:nth-of-type(2)": { ...compact ? null : { width: "35%" } }, "td:nth-of-type(3)": { ...compact ? null : { width: "15%" } }, "th:last-of-type, td:last-of-type": { paddingRight: 20, ...compact ? null : { width: "25%" } }, th: { color: theme.base === "light" ? curriedTransparentize$1(0.25, theme.color.defaultText) : curriedTransparentize$1(0.45, theme.color.defaultText), paddingTop: 10, paddingBottom: 10, paddingLeft: 15, paddingRight: 15 }, td: { paddingTop: "10px", paddingBottom: "10px", "&:not(:first-of-type)": { paddingLeft: 15, paddingRight: 15 }, "&:last-of-type": { paddingRight: 20 } }, marginLeft: inAddonPanel ? 0 : 1, marginRight: inAddonPanel ? 0 : 1, tbody: { ...inAddonPanel ? null : { filter: theme.base === "light" ? "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.10))" : "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.20))" }, "> tr > *": { background: theme.background.content, borderTop: `1px solid ${theme.appBorderColor}` }, ...inAddonPanel ? null : { "> tr:first-of-type > *": { borderBlockStart: `1px solid ${theme.appBorderColor}` }, "> tr:last-of-type > *": { borderBlockEnd: `1px solid ${theme.appBorderColor}` }, "> tr > *:first-of-type": { borderInlineStart: `1px solid ${theme.appBorderColor}` }, "> tr > *:last-of-type": { borderInlineEnd: `1px solid ${theme.appBorderColor}` }, "> tr:first-of-type > td:first-of-type": { borderTopLeftRadius: theme.appBorderRadius }, "> tr:first-of-type > td:last-of-type": { borderTopRightRadius: theme.appBorderRadius }, "> tr:last-of-type > td:first-of-type": { borderBottomLeftRadius: theme.appBorderRadius }, "> tr:last-of-type > td:last-of-type": { borderBottomRightRadius: theme.appBorderRadius } } } } })), StyledIconButton = newStyled(IconButton)(({ theme }) => ({ margin: "-4px -12px -4px 0" })), ControlHeadingWrapper = newStyled.span({ display: "flex", justifyContent: "space-between" });
var sortFns = { alpha: (a2, b2) => a2.name.localeCompare(b2.name), requiredFirst: (a2, b2) => {
  var _a, _b;
  return +!!((_a = b2.type) == null ? void 0 : _a.required) - +!!((_b = a2.type) == null ? void 0 : _b.required) || a2.name.localeCompare(b2.name);
}, none: void 0 }, groupRows = (rows, sort) => {
  let sections = { ungrouped: [], ungroupedSubsections: {}, sections: {} };
  if (!rows) return sections;
  Object.entries(rows).forEach(([key, row]) => {
    let { category, subcategory } = (row == null ? void 0 : row.table) || {};
    if (category) {
      let section = sections.sections[category] || { ungrouped: [], subsections: {} };
      if (!subcategory) section.ungrouped.push({ key, ...row });
      else {
        let subsection = section.subsections[subcategory] || [];
        subsection.push({ key, ...row }), section.subsections[subcategory] = subsection;
      }
      sections.sections[category] = section;
    } else if (subcategory) {
      let subsection = sections.ungroupedSubsections[subcategory] || [];
      subsection.push({ key, ...row }), sections.ungroupedSubsections[subcategory] = subsection;
    } else sections.ungrouped.push({ key, ...row });
  });
  let sortFn = sortFns[sort], sortSubsection = (record) => sortFn ? Object.keys(record).reduce((acc, cur) => ({ ...acc, [cur]: record[cur].sort(sortFn) }), {}) : record;
  return { ungrouped: sections.ungrouped.sort(sortFn), ungroupedSubsections: sortSubsection(sections.ungroupedSubsections), sections: Object.keys(sections.sections).reduce((acc, cur) => ({ ...acc, [cur]: { ungrouped: sections.sections[cur].ungrouped.sort(sortFn), subsections: sortSubsection(sections.sections[cur].subsections) } }), {}) };
}, safeIncludeConditionalArg = (row, args, globals) => {
  try {
    return P$2(row, args, globals);
  } catch (err) {
    return once.warn(err.message), false;
  }
}, ArgsTable = (props) => {
  let { updateArgs, resetArgs, compact, inAddonPanel, initialExpandedArgs, sort = "none", isLoading } = props;
  if ("error" in props) {
    let { error } = props;
    return React.createElement(EmptyBlock, null, error, " ", React.createElement(Link2, { href: "http://storybook.js.org/docs/", target: "_blank", withArrow: true }, React.createElement(DocumentIcon, null), " Read the docs"));
  }
  if (isLoading) return React.createElement(Skeleton, null);
  let { rows, args, globals } = "rows" in props && props, groups = groupRows(pickBy$1(rows, (row) => {
    var _a;
    return !((_a = row == null ? void 0 : row.table) == null ? void 0 : _a.disable) && safeIncludeConditionalArg(row, args || {}, globals || {});
  }), sort), hasNoUngrouped = groups.ungrouped.length === 0, hasNoSections = Object.entries(groups.sections).length === 0, hasNoUngroupedSubsections = Object.entries(groups.ungroupedSubsections).length === 0;
  if (hasNoUngrouped && hasNoSections && hasNoUngroupedSubsections) return React.createElement(Empty, { inAddonPanel });
  let colSpan = 1;
  updateArgs && (colSpan += 1), compact || (colSpan += 2);
  let expandable = Object.keys(groups.sections).length > 0, common = { updateArgs, compact, inAddonPanel, initialExpandedArgs };
  return React.createElement(ResetWrapper, null, React.createElement(TableWrapper, { compact, inAddonPanel, className: "docblock-argstable sb-unstyled" }, React.createElement("thead", { className: "docblock-argstable-head" }, React.createElement("tr", null, React.createElement("th", null, React.createElement("span", null, "Name")), compact ? null : React.createElement("th", null, React.createElement("span", null, "Description")), compact ? null : React.createElement("th", null, React.createElement("span", null, "Default")), updateArgs ? React.createElement("th", null, React.createElement(ControlHeadingWrapper, null, "Control", " ", !isLoading && resetArgs && React.createElement(StyledIconButton, { onClick: () => resetArgs(), title: "Reset controls" }, React.createElement(UndoIcon, { "aria-hidden": true })))) : null)), React.createElement("tbody", { className: "docblock-argstable-body" }, groups.ungrouped.map((row) => React.createElement(ArgRow, { key: row.key, row, arg: args && args[row.key], ...common })), Object.entries(groups.ungroupedSubsections).map(([subcategory, subsection]) => React.createElement(SectionRow, { key: subcategory, label: subcategory, level: "subsection", colSpan }, subsection.map((row) => React.createElement(ArgRow, { key: row.key, row, arg: args && args[row.key], expandable, ...common })))), Object.entries(groups.sections).map(([category, section]) => React.createElement(SectionRow, { key: category, label: category, level: "section", colSpan }, section.ungrouped.map((row) => React.createElement(ArgRow, { key: row.key, row, arg: args && args[row.key], ...common })), Object.entries(section.subsections).map(([subcategory, subsection]) => React.createElement(SectionRow, { key: subcategory, label: subcategory, level: "subsection", colSpan }, subsection.map((row) => React.createElement(ArgRow, { key: row.key, row, arg: args && args[row.key], expandable, ...common })))))))));
};
var TabbedArgsTable = ({ tabs, ...props }) => {
  let entries = Object.entries(tabs);
  return entries.length === 1 ? React.createElement(ArgsTable, { ...entries[0][1], ...props }) : React.createElement(TabsState, null, entries.map((entry, index3) => {
    let [label, table] = entry, id = `prop_table_div_${label}`, Component4 = "div", argsTableProps = index3 === 0 ? props : { sort: props.sort };
    return React.createElement(Component4, { key: id, id, title: label }, ({ active }) => active ? React.createElement(ArgsTable, { key: `prop_table_${label}`, ...table, ...argsTableProps }) : null);
  }));
};
newStyled.div(({ theme }) => ({ marginRight: 30, fontSize: `${theme.typography.size.s1}px`, color: theme.base === "light" ? curriedTransparentize$1(0.4, theme.color.defaultText) : curriedTransparentize$1(0.6, theme.color.defaultText) }));
newStyled.div({ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" });
newStyled.div({ display: "flex", flexDirection: "row", alignItems: "baseline", "&:not(:last-child)": { marginBottom: "1rem" } });
newStyled.div(withReset, ({ theme }) => ({ ...getBlockBackgroundStyle(theme), margin: "25px 0 40px", padding: "30px 20px" }));
newStyled.div(({ theme }) => ({ fontWeight: theme.typography.weight.bold, color: theme.color.defaultText }));
newStyled.div(({ theme }) => ({ color: theme.base === "light" ? curriedTransparentize$1(0.2, theme.color.defaultText) : curriedTransparentize$1(0.6, theme.color.defaultText) }));
newStyled.div({ flex: "0 0 30%", lineHeight: "20px", marginTop: 5 });
newStyled.div(({ theme }) => ({ flex: 1, textAlign: "center", fontFamily: theme.typography.fonts.mono, fontSize: theme.typography.size.s1, lineHeight: 1, overflow: "hidden", color: theme.base === "light" ? curriedTransparentize$1(0.4, theme.color.defaultText) : curriedTransparentize$1(0.6, theme.color.defaultText), "> div": { display: "inline-block", overflow: "hidden", maxWidth: "100%", textOverflow: "ellipsis" }, span: { display: "block", marginTop: 2 } }));
newStyled.div({ display: "flex", flexDirection: "row" });
newStyled.div(({ background }) => ({ position: "relative", flex: 1, "&::before": { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background, content: '""' } }));
newStyled.div(({ theme }) => ({ ...getBlockBackgroundStyle(theme), display: "flex", flexDirection: "row", height: 50, marginBottom: 5, overflow: "hidden", backgroundColor: "white", backgroundImage: "repeating-linear-gradient(-45deg, #ccc, #ccc 1px, #fff 1px, #fff 16px)", backgroundClip: "padding-box" }));
newStyled.div({ display: "flex", flexDirection: "column", flex: 1, position: "relative", marginBottom: 30 });
newStyled.div({ flex: 1, display: "flex", flexDirection: "row" });
newStyled.div({ display: "flex", alignItems: "flex-start" });
newStyled.div({ flex: "0 0 30%" });
newStyled.div({ flex: 1 });
newStyled.div(({ theme }) => ({ display: "flex", flexDirection: "row", alignItems: "center", paddingBottom: 20, fontWeight: theme.typography.weight.bold, color: theme.base === "light" ? curriedTransparentize$1(0.4, theme.color.defaultText) : curriedTransparentize$1(0.6, theme.color.defaultText) }));
newStyled.div(({ theme }) => ({ fontSize: theme.typography.size.s2, lineHeight: "20px", display: "flex", flexDirection: "column" }));
newStyled.div(({ theme }) => ({ fontFamily: theme.typography.fonts.base, fontSize: theme.typography.size.s2, color: theme.color.defaultText, marginLeft: 10, lineHeight: 1.2 }));
newStyled.div(({ theme }) => ({ ...getBlockBackgroundStyle(theme), overflow: "hidden", height: 40, width: 40, display: "flex", alignItems: "center", justifyContent: "center", flex: "none", "> img, > svg": { width: 20, height: 20 } }));
newStyled.div({ display: "inline-flex", flexDirection: "row", alignItems: "center", flex: "0 1 calc(20% - 10px)", minWidth: 120, margin: "0px 10px 30px 0" });
newStyled.div({ display: "flex", flexFlow: "row wrap" });
var anchorBlockIdFromId = (storyId) => `anchor--${storyId}`, Anchor = ({ storyId, children }) => React.createElement("div", { id: anchorBlockIdFromId(storyId), className: "sb-anchor" }, children);
global$1 && global$1.__DOCS_CONTEXT__ === void 0 && (global$1.__DOCS_CONTEXT__ = reactExports.createContext(null), global$1.__DOCS_CONTEXT__.displayName = "DocsContext");
var DocsContext = global$1 ? global$1.__DOCS_CONTEXT__ : reactExports.createContext(null);
var useOf = (moduleExportOrType, validTypes) => reactExports.useContext(DocsContext).resolveOf(moduleExportOrType, validTypes);
var titleCase = (str) => str.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(""), getComponentName = (component) => {
  if (component) return typeof component == "string" ? component.includes("-") ? titleCase(component) : component : component.__docgenInfo && component.__docgenInfo.displayName ? component.__docgenInfo.displayName : component.name;
};
function scrollToElement(element, block = "start") {
  element.scrollIntoView({ behavior: "smooth", block, inline: "nearest" });
}
function extractComponentArgTypes(component, parameters) {
  let { extractArgTypes } = parameters.docs || {};
  if (!extractArgTypes) throw new Error("Args unsupported. See Args documentation for your framework.");
  return extractArgTypes(component);
}
function getArgTypesFromResolved(resolved) {
  if (resolved.type === "component") {
    let { component: component2, projectAnnotations: { parameters: parameters2 } } = resolved;
    return { argTypes: extractComponentArgTypes(component2, parameters2), parameters: parameters2, component: component2 };
  }
  if (resolved.type === "meta") {
    let { preparedMeta: { argTypes: argTypes2, parameters: parameters2, component: component2, subcomponents: subcomponents2 } } = resolved;
    return { argTypes: argTypes2, parameters: parameters2, component: component2, subcomponents: subcomponents2 };
  }
  let { story: { argTypes, parameters, component, subcomponents } } = resolved;
  return { argTypes, parameters, component, subcomponents };
}
var ArgTypes = (props) => {
  var _a;
  let { of } = props;
  if ("of" in props && of === void 0) throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let resolved = useOf(of || "meta"), { argTypes, parameters, component, subcomponents } = getArgTypesFromResolved(resolved), argTypesParameters = ((_a = parameters.docs) == null ? void 0 : _a.argTypes) || {}, include = props.include ?? argTypesParameters.include, exclude = props.exclude ?? argTypesParameters.exclude, sort = props.sort ?? argTypesParameters.sort, filteredArgTypes = filterArgTypes(argTypes, include, exclude);
  if (!(!!subcomponents && Object.keys(subcomponents).length > 0)) return React.createElement(ArgsTable, { rows: filteredArgTypes, sort });
  let mainComponentName = getComponentName(component), subcomponentTabs = Object.fromEntries(Object.entries(subcomponents).map(([key, comp]) => [key, { rows: filterArgTypes(extractComponentArgTypes(comp, parameters), include, exclude), sort }])), tabs = { [mainComponentName]: { rows: filteredArgTypes, sort }, ...subcomponentTabs };
  return React.createElement(TabbedArgsTable, { tabs, sort });
};
function argsHash(args) {
  return stringify(args, { allowFunction: false });
}
var SourceContext = reactExports.createContext({ sources: {} }), UNKNOWN_ARGS_HASH = "--unknown--", SourceContainer = ({ children, channel }) => {
  let [sources, setSources] = reactExports.useState({});
  return reactExports.useEffect(() => {
    let handleSnippetRendered = (idOrEvent, inputSource = null, inputFormat = false) => {
      let { id, args = void 0, source, format: format2 } = typeof idOrEvent == "string" ? { id: idOrEvent, source: inputSource, format: inputFormat } : idOrEvent, hash3 = args ? argsHash(args) : UNKNOWN_ARGS_HASH;
      setSources((current) => ({ ...current, [id]: { ...current[id], [hash3]: { code: source, format: format2 } } }));
    };
    return channel.on(SNIPPET_RENDERED, handleSnippetRendered), () => channel.off(SNIPPET_RENDERED, handleSnippetRendered);
  }, []), React.createElement(SourceContext.Provider, { value: { sources } }, children);
};
var getStorySource = (storyId, args, sourceContext) => {
  let { sources } = sourceContext, sourceMap = sources == null ? void 0 : sources[storyId];
  return (sourceMap == null ? void 0 : sourceMap[argsHash(args)]) || (sourceMap == null ? void 0 : sourceMap[UNKNOWN_ARGS_HASH]) || { code: "" };
}, getSnippet = ({ snippet, storyContext, typeFromProps, transformFromProps }) => {
  var _a, _b;
  let { __isArgsStory: isArgsStory } = storyContext.parameters, sourceParameters = ((_a = storyContext.parameters.docs) == null ? void 0 : _a.source) || {}, type = typeFromProps || sourceParameters.type || SourceType.AUTO;
  if (sourceParameters.code !== void 0) return sourceParameters.code;
  let code = type === SourceType.DYNAMIC || type === SourceType.AUTO && snippet && isArgsStory ? snippet : sourceParameters.originalSource || "";
  return ((_b = transformFromProps ?? sourceParameters.transform) == null ? void 0 : _b(code, storyContext)) || code;
}, useSourceProps = (props, docsContext, sourceContext) => {
  var _a, _b, _c, _d;
  let story, { of } = props;
  if ("of" in props && of === void 0) throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  if (of) story = docsContext.resolveOf(of, ["story"]).story;
  else try {
    story = docsContext.storyById();
  } catch {
  }
  let sourceParameters = ((_b = (_a = story == null ? void 0 : story.parameters) == null ? void 0 : _a.docs) == null ? void 0 : _b.source) || {}, { code } = props, format2 = props.format ?? sourceParameters.format, language = props.language ?? sourceParameters.language ?? "jsx", dark = props.dark ?? sourceParameters.dark ?? false;
  if (!code && !story) return { error: "Oh no! The source is not available." };
  if (code) return { code, format: format2, language, dark };
  let storyContext = docsContext.getStoryContext(story), argsForSource = props.__forceInitialArgs ? storyContext.initialArgs : storyContext.unmappedArgs, source = getStorySource(story.id, argsForSource, sourceContext);
  return format2 = source.format ?? ((_d = (_c = story.parameters.docs) == null ? void 0 : _c.source) == null ? void 0 : _d.format) ?? false, { code: getSnippet({ snippet: source.code, storyContext: { ...storyContext, args: argsForSource }, typeFromProps: props.type, transformFromProps: props.transform }), format: format2, language, dark };
};
function useStory(storyId, context) {
  let stories = useStories([storyId], context);
  return stories && stories[0];
}
function useStories(storyIds, context) {
  let [storiesById, setStories] = reactExports.useState({});
  return reactExports.useEffect(() => {
    Promise.all(storyIds.map(async (storyId) => {
      let story = await context.loadStory(storyId);
      setStories((current) => current[storyId] === story ? current : { ...current, [storyId]: story });
    }));
  }), storyIds.map((storyId) => {
    if (storiesById[storyId]) return storiesById[storyId];
    try {
      return context.storyById(storyId);
    } catch {
      return null;
    }
  });
}
var getStoryId2 = (props, context) => {
  let { of, meta } = props;
  if ("of" in props && of === void 0) throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  return meta && context.referenceMeta(meta, false), context.resolveOf(of || "story", ["story"]).story.id;
}, getStoryProps = (props, story, context) => {
  let { parameters = {} } = story || {}, { docs = {} } = parameters, storyParameters = docs.story || {};
  if (docs.disable) return null;
  if (props.inline ?? storyParameters.inline ?? false) {
    let height2 = props.height ?? storyParameters.height, autoplay = props.autoplay ?? storyParameters.autoplay ?? false;
    return { story, inline: true, height: height2, autoplay, forceInitialArgs: !!props.__forceInitialArgs, primary: !!props.__primary, renderStoryToElement: context.renderStoryToElement };
  }
  let height = props.height ?? storyParameters.height ?? storyParameters.iframeHeight ?? "100px";
  return { story, inline: false, height, primary: !!props.__primary };
}, Story2 = (props = { __forceInitialArgs: false, __primary: false }) => {
  let context = reactExports.useContext(DocsContext), storyId = getStoryId2(props, context), story = useStory(storyId, context);
  if (!story) return React.createElement(StorySkeleton, null);
  let storyProps = getStoryProps(props, story, context);
  return storyProps ? React.createElement(Story, { ...storyProps }) : null;
};
var Canvas = (props) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
  let docsContext = reactExports.useContext(DocsContext), sourceContext = reactExports.useContext(SourceContext), { of, source } = props;
  if ("of" in props && of === void 0) throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let { story } = useOf(of || "story", ["story"]), sourceProps = useSourceProps({ ...source, ...of && { of } }, docsContext, sourceContext), layout = props.layout ?? story.parameters.layout ?? ((_b = (_a = story.parameters.docs) == null ? void 0 : _a.canvas) == null ? void 0 : _b.layout) ?? "padded", withToolbar = props.withToolbar ?? ((_d = (_c = story.parameters.docs) == null ? void 0 : _c.canvas) == null ? void 0 : _d.withToolbar) ?? false, additionalActions = props.additionalActions ?? ((_f = (_e = story.parameters.docs) == null ? void 0 : _e.canvas) == null ? void 0 : _f.additionalActions), sourceState = props.sourceState ?? ((_h = (_g = story.parameters.docs) == null ? void 0 : _g.canvas) == null ? void 0 : _h.sourceState) ?? "hidden", className = props.className ?? ((_j = (_i = story.parameters.docs) == null ? void 0 : _i.canvas) == null ? void 0 : _j.className);
  return React.createElement(Preview, { withSource: sourceState === "none" ? void 0 : sourceProps, isExpanded: sourceState === "shown", withToolbar, additionalActions, className, layout }, React.createElement(Story2, { of: of || story.moduleExport, meta: props.meta, ...props.story }));
};
var useGlobals = (story, context) => {
  let storyContext = context.getStoryContext(story), [globals, setGlobals] = reactExports.useState(storyContext.globals);
  return reactExports.useEffect(() => {
    let onGlobalsUpdated = (changed) => {
      setGlobals(changed.globals);
    };
    return context.channel.on(GLOBALS_UPDATED, onGlobalsUpdated), () => context.channel.off(GLOBALS_UPDATED, onGlobalsUpdated);
  }, [context.channel]), [globals];
};
var useArgs = (story, context) => {
  let result = useArgsIfDefined(story, context);
  if (!result) throw new Error("No result when story was defined");
  return result;
}, useArgsIfDefined = (story, context) => {
  let storyContext = story ? context.getStoryContext(story) : { args: {} }, { id: storyId } = story || { id: "none" }, [args, setArgs] = reactExports.useState(storyContext.args);
  reactExports.useEffect(() => {
    let onArgsUpdated = (changed) => {
      changed.storyId === storyId && setArgs(changed.args);
    };
    return context.channel.on(STORY_ARGS_UPDATED, onArgsUpdated), () => context.channel.off(STORY_ARGS_UPDATED, onArgsUpdated);
  }, [storyId, context.channel]);
  let updateArgs = reactExports.useCallback((updatedArgs) => context.channel.emit(UPDATE_STORY_ARGS, { storyId, updatedArgs }), [storyId, context.channel]), resetArgs = reactExports.useCallback((argNames) => context.channel.emit(RESET_STORY_ARGS, { storyId, argNames }), [storyId, context.channel]);
  return story && [args, updateArgs, resetArgs];
};
function extractComponentArgTypes2(component, parameters) {
  let { extractArgTypes } = parameters.docs || {};
  if (!extractArgTypes) throw new Error("Args unsupported. See Args documentation for your framework.");
  return extractArgTypes(component);
}
var Controls3 = (props) => {
  var _a;
  let { of } = props;
  if ("of" in props && of === void 0) throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let context = reactExports.useContext(DocsContext), { story } = context.resolveOf(of || "story", ["story"]), { parameters, argTypes, component, subcomponents } = story, controlsParameters = ((_a = parameters.docs) == null ? void 0 : _a.controls) || {}, include = props.include ?? controlsParameters.include, exclude = props.exclude ?? controlsParameters.exclude, sort = props.sort ?? controlsParameters.sort, [args, updateArgs, resetArgs] = useArgs(story, context), [globals] = useGlobals(story, context), filteredArgTypes = filterArgTypes(argTypes, include, exclude);
  if (!(!!subcomponents && Object.keys(subcomponents).length > 0)) return Object.keys(filteredArgTypes).length > 0 || Object.keys(args).length > 0 ? React.createElement(ArgsTable, { rows: filteredArgTypes, sort, args, globals, updateArgs, resetArgs }) : null;
  let mainComponentName = getComponentName(component), subcomponentTabs = Object.fromEntries(Object.entries(subcomponents).map(([key, comp]) => [key, { rows: filterArgTypes(extractComponentArgTypes2(comp, parameters), include, exclude), sort }])), tabs = { [mainComponentName]: { rows: filteredArgTypes, sort }, ...subcomponentTabs };
  return React.createElement(TabbedArgsTable, { tabs, sort, args, globals, updateArgs, resetArgs });
};
var { document: document2 } = global$1, CodeOrSourceMdx = ({ className, children, ...rest }) => {
  if (typeof className != "string" && (typeof children != "string" || !children.match(/[\n\r]/g))) return React.createElement(Code, null, children);
  let language = className && className.split("-");
  return React.createElement(Source, { language: language && language[1] || "text", format: false, code: children, ...rest });
};
function navigate(context, url) {
  context.channel.emit(NAVIGATE_URL, url);
}
var A = components2.a, AnchorInPage = ({ hash: hash3, children }) => {
  let context = reactExports.useContext(DocsContext);
  return React.createElement(A, { href: hash3, target: "_self", onClick: (event) => {
    let id = hash3.substring(1);
    document2.getElementById(id) && navigate(context, hash3);
  } }, children);
}, AnchorMdx = (props) => {
  let { href, target, children, ...rest } = props, context = reactExports.useContext(DocsContext);
  return !href || target === "_blank" || /^https?:\/\//.test(href) ? React.createElement(A, { ...props }) : href.startsWith("#") ? React.createElement(AnchorInPage, { hash: href }, children) : React.createElement(A, { href, onClick: (event) => {
    event.button === 0 && !event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey && (event.preventDefault(), navigate(context, event.currentTarget.getAttribute("href")));
  }, target, ...rest }, children);
}, SUPPORTED_MDX_HEADERS = ["h1", "h2", "h3", "h4", "h5", "h6"], OcticonHeaders = SUPPORTED_MDX_HEADERS.reduce((acc, headerType) => ({ ...acc, [headerType]: newStyled(headerType)({ "& svg": { position: "relative", top: "-0.1em", visibility: "hidden" }, "&:hover svg": { visibility: "visible" } }) }), {}), OcticonAnchor = newStyled.a(() => ({ float: "left", lineHeight: "inherit", paddingRight: "10px", marginLeft: "-24px", color: "inherit" })), HeaderWithOcticonAnchor = ({ as, id, children, ...rest }) => {
  let context = reactExports.useContext(DocsContext), OcticonHeader = OcticonHeaders[as], hash3 = `#${id}`;
  return React.createElement(OcticonHeader, { id, ...rest }, React.createElement(OcticonAnchor, { "aria-hidden": "true", href: hash3, tabIndex: -1, target: "_self", onClick: (event) => {
    document2.getElementById(id) && navigate(context, hash3);
  } }, React.createElement(LinkIcon, null)), children);
}, HeaderMdx = (props) => {
  let { as, id, children, ...rest } = props;
  if (id) return React.createElement(HeaderWithOcticonAnchor, { as, id, ...rest }, children);
  let Component4 = as, { as: omittedAs, ...withoutAs } = props;
  return React.createElement(Component4, { ...nameSpaceClassNames(withoutAs, as) });
}, HeadersMdx = SUPPORTED_MDX_HEADERS.reduce((acc, headerType) => ({ ...acc, [headerType]: (props) => React.createElement(HeaderMdx, { as: headerType, ...props }) }), {});
var Markdown2 = (props) => {
  var _a;
  if (!props.children) return null;
  if (typeof props.children != "string") throw new Error(dedent`The Markdown block only accepts children as a single string, but children were of type: '${typeof props.children}'
        This is often caused by not wrapping the child in a template string.
        
        This is invalid:
        <Markdown>
          # Some heading
          A paragraph
        </Markdown>

        Instead do:
        <Markdown>
        {\`
          # Some heading
          A paragraph
        \`}
        </Markdown>
      `);
  return React.createElement(Markdown, { ...props, options: { forceBlock: true, overrides: { code: CodeOrSourceMdx, a: AnchorMdx, ...HeadersMdx, ...(_a = props == null ? void 0 : props.options) == null ? void 0 : _a.overrides }, ...props == null ? void 0 : props.options } });
};
var DescriptionType = ((DescriptionType2) => (DescriptionType2.INFO = "info", DescriptionType2.NOTES = "notes", DescriptionType2.DOCGEN = "docgen", DescriptionType2.AUTO = "auto", DescriptionType2))(DescriptionType || {}), getDescriptionFromResolvedOf = (resolvedOf) => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  switch (resolvedOf.type) {
    case "story":
      return ((_b = (_a = resolvedOf.story.parameters.docs) == null ? void 0 : _a.description) == null ? void 0 : _b.story) || null;
    case "meta": {
      let { parameters, component } = resolvedOf.preparedMeta, metaDescription = (_d = (_c = parameters.docs) == null ? void 0 : _c.description) == null ? void 0 : _d.component;
      return metaDescription || ((_f = (_e = parameters.docs) == null ? void 0 : _e.extractComponentDescription) == null ? void 0 : _f.call(_e, component, { component, parameters })) || null;
    }
    case "component": {
      let { component, projectAnnotations: { parameters } } = resolvedOf;
      return ((_h = (_g = parameters.docs) == null ? void 0 : _g.extractComponentDescription) == null ? void 0 : _h.call(_g, component, { component, parameters })) || null;
    }
    default:
      throw new Error(`Unrecognized module type resolved from 'useOf', got: ${resolvedOf.type}`);
  }
}, DescriptionContainer = (props) => {
  let { of } = props;
  if ("of" in props && of === void 0) throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let resolvedOf = useOf(of || "meta"), markdown = getDescriptionFromResolvedOf(resolvedOf);
  return markdown ? React.createElement(Markdown2, null, markdown) : null;
};
var Wrapper10 = newStyled.div(({ theme }) => ({ width: "10rem", "@media (max-width: 768px)": { display: "none" } })), Content = newStyled.div(({ theme }) => ({ position: "fixed", bottom: 0, top: 0, width: "10rem", paddingTop: "4rem", paddingBottom: "2rem", overflowY: "auto", fontFamily: theme.typography.fonts.base, fontSize: theme.typography.size.s2, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", WebkitOverflowScrolling: "touch", "& *": { boxSizing: "border-box" }, "& > .toc-wrapper > .toc-list": { paddingLeft: 0, borderLeft: `solid 2px ${theme.color.mediumlight}`, ".toc-list": { paddingLeft: 0, borderLeft: `solid 2px ${theme.color.mediumlight}`, ".toc-list": { paddingLeft: 0, borderLeft: `solid 2px ${theme.color.mediumlight}` } } }, "& .toc-list-item": { position: "relative", listStyleType: "none", marginLeft: 20, paddingTop: 3, paddingBottom: 3 }, "& .toc-list-item::before": { content: '""', position: "absolute", height: "100%", top: 0, left: 0, transform: "translateX(calc(-2px - 20px))", borderLeft: `solid 2px ${theme.color.mediumdark}`, opacity: 0, transition: "opacity 0.2s" }, "& .toc-list-item.is-active-li::before": { opacity: 1 }, "& .toc-list-item > a": { color: theme.color.defaultText, textDecoration: "none" }, "& .toc-list-item.is-active-li > a": { fontWeight: 600, color: theme.color.secondary, textDecoration: "none" } })), Heading = newStyled.p(({ theme }) => ({ fontWeight: 600, fontSize: "0.875em", color: theme.textColor, textTransform: "uppercase", marginBottom: 10 })), OptionalTitle = ({ title }) => title === null ? null : typeof title == "string" ? React.createElement(Heading, null, title) : title, TableOfContents = ({ title, disable, headingSelector, contentsSelector, ignoreSelector, unsafeTocbotOptions }) => (reactExports.useEffect(() => {
  let configuration = { tocSelector: ".toc-wrapper", contentSelector: contentsSelector ?? ".sbdocs-content", headingSelector: headingSelector ?? "h3", ignoreSelector: ignoreSelector ?? ".docs-story *, .skip-toc", headingsOffset: 40, scrollSmoothOffset: -40, orderedList: false, onClick: () => false, ...unsafeTocbotOptions }, timeout = setTimeout(() => init(configuration), 100);
  return () => {
    clearTimeout(timeout), destroy();
  };
}, [disable]), React.createElement(React.Fragment, null, React.createElement(Wrapper10, null, disable ? null : React.createElement(Content, null, React.createElement(OptionalTitle, { title: title || null }), React.createElement("div", { className: "toc-wrapper" })))));
var { document: document3, window: globalWindow3 } = global$1, DocsContainer = ({ context, theme, children }) => {
  var _a, _b, _c, _d, _e;
  let toc;
  try {
    toc = (_b = (_a = context.resolveOf("meta", ["meta"]).preparedMeta.parameters) == null ? void 0 : _a.docs) == null ? void 0 : _b.toc;
  } catch {
    toc = (_e = (_d = (_c = context == null ? void 0 : context.projectAnnotations) == null ? void 0 : _c.parameters) == null ? void 0 : _d.docs) == null ? void 0 : _e.toc;
  }
  return reactExports.useEffect(() => {
    let url;
    try {
      if (url = new URL(globalWindow3.parent.location.toString()), url.hash) {
        let element = document3.getElementById(url.hash.substring(1));
        element && setTimeout(() => {
          scrollToElement(element);
        }, 200);
      }
    } catch {
    }
  }), React.createElement(DocsContext.Provider, { value: context }, React.createElement(SourceContainer, { channel: context.channel }, React.createElement(ThemeProvider, { theme: ensure(theme) }, React.createElement(DocsPageWrapper, { toc: toc ? React.createElement(TableOfContents, { className: "sbdocs sbdocs-toc--custom", ...toc }) : null }, children))));
};
var STORY_KIND_PATH_SEPARATOR = /\s*\/\s*/, extractTitle = (title) => {
  let groups = title.trim().split(STORY_KIND_PATH_SEPARATOR);
  return (groups == null ? void 0 : groups[(groups == null ? void 0 : groups.length) - 1]) || title;
}, Title2 = (props) => {
  let { children, of } = props;
  if ("of" in props && of === void 0) throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let preparedMeta;
  try {
    preparedMeta = useOf(of || "meta", ["meta"]).preparedMeta;
  } catch (error) {
    if (children && !error.message.includes("did you forget to use <Meta of={} />?")) throw error;
  }
  let content = children || extractTitle(preparedMeta == null ? void 0 : preparedMeta.title);
  return content ? React.createElement(Title, { className: "sbdocs-title sb-unstyled" }, content) : null;
};
var DEPRECATION_MIGRATION_LINK = "https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#subtitle-block-and-parameterscomponentsubtitle", Subtitle2 = (props) => {
  let { of, children } = props;
  if ("of" in props && of === void 0) throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let preparedMeta;
  try {
    preparedMeta = useOf(of || "meta", ["meta"]).preparedMeta;
  } catch (error) {
    if (children && !error.message.includes("did you forget to use <Meta of={} />?")) throw error;
  }
  let { componentSubtitle, docs } = (preparedMeta == null ? void 0 : preparedMeta.parameters) || {};
  componentSubtitle && deprecate(`Using 'parameters.componentSubtitle' property to subtitle stories is deprecated. See ${DEPRECATION_MIGRATION_LINK}`);
  let content = children || (docs == null ? void 0 : docs.subtitle) || componentSubtitle;
  return content ? React.createElement(Subtitle, { className: "sbdocs-subtitle sb-unstyled" }, content) : null;
};
var Subheading = ({ children, disableAnchor }) => {
  if (disableAnchor || typeof children != "string") return React.createElement(H3, null, children);
  let tagID = globalThis.encodeURIComponent(children.toLowerCase());
  return React.createElement(HeaderMdx, { as: "h3", id: tagID }, children);
};
var DocsStory = ({ of, expanded = true, withToolbar: withToolbarProp = false, __forceInitialArgs = false, __primary = false }) => {
  var _a, _b;
  let { story } = useOf(of || "story", ["story"]), withToolbar = ((_b = (_a = story.parameters.docs) == null ? void 0 : _a.canvas) == null ? void 0 : _b.withToolbar) ?? withToolbarProp;
  return React.createElement(Anchor, { storyId: story.id }, expanded && React.createElement(React.Fragment, null, React.createElement(Subheading, null, story.name), React.createElement(DescriptionContainer, { of })), React.createElement(Canvas, { of, withToolbar, story: { __forceInitialArgs, __primary }, source: { __forceInitialArgs } }));
};
var Primary = (props) => {
  let { of } = props;
  if ("of" in props && of === void 0) throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let { csfFile } = useOf(of || "meta", ["meta"]), primaryStory = reactExports.useContext(DocsContext).componentStoriesFromCSFFile(csfFile)[0];
  return primaryStory ? React.createElement(DocsStory, { of: primaryStory.moduleExport, expanded: false, __primary: true, withToolbar: true }) : null;
};
var Heading2 = ({ children, disableAnchor, ...props }) => {
  if (disableAnchor || typeof children != "string") return React.createElement(H2, null, children);
  let tagID = children.toLowerCase().replace(/[^a-z0-9]/gi, "-");
  return React.createElement(HeaderMdx, { as: "h2", id: tagID, ...props }, children);
};
var StyledHeading = newStyled(Heading2)(({ theme }) => ({ fontSize: `${theme.typography.size.s2 - 1}px`, fontWeight: theme.typography.weight.bold, lineHeight: "16px", letterSpacing: "0.35em", textTransform: "uppercase", color: theme.textMutedColor, border: 0, marginBottom: "12px", "&:first-of-type": { marginTop: "56px" } })), Stories = ({ title = "Stories", includePrimary = true }) => {
  var _a;
  let { componentStories, projectAnnotations, getStoryContext } = reactExports.useContext(DocsContext), stories = componentStories(), { stories: { filter } = { filter: void 0 } } = ((_a = projectAnnotations.parameters) == null ? void 0 : _a.docs) || {};
  return filter && (stories = stories.filter((story) => filter(story, getStoryContext(story)))), stories.some((story) => {
    var _a2;
    return (_a2 = story.tags) == null ? void 0 : _a2.includes("autodocs");
  }) && (stories = stories.filter((story) => {
    var _a2;
    return (_a2 = story.tags) == null ? void 0 : _a2.includes("autodocs");
  })), includePrimary || (stories = stories.slice(1)), !stories || stories.length === 0 ? null : React.createElement(React.Fragment, null, React.createElement(StyledHeading, null, title), stories.map((story) => story && React.createElement(DocsStory, { key: story.id, of: story.moduleExport, expanded: true, __forceInitialArgs: true })));
};
var DocsPage = () => {
  let resolvedOf = useOf("meta", ["meta"]), { stories } = resolvedOf.csfFile, isSingleStory = Object.keys(stories).length === 1;
  return React.createElement(React.Fragment, null, React.createElement(Title2, null), React.createElement(Subtitle2, null), React.createElement(DescriptionContainer, { of: "meta" }), isSingleStory ? React.createElement(DescriptionContainer, { of: "story" }) : null, React.createElement(Primary, null), React.createElement(Controls3, null), isSingleStory ? null : React.createElement(Stories, null));
};
function Docs({ context, docsParameter }) {
  let Container3 = docsParameter.container || DocsContainer, Page = docsParameter.page || DocsPage;
  return React.createElement(Container3, { context, theme: docsParameter.theme }, React.createElement(Page, null));
}
var Meta = ({ of }) => {
  let context = reactExports.useContext(DocsContext);
  of && context.referenceMeta(of, true);
  try {
    let primary = context.storyById();
    return React.createElement(Anchor, { storyId: primary.id });
  } catch {
    return null;
  }
};
export {
  ArgTypes as A,
  Code as C,
  Docs as D,
  Form as F,
  HeadersMdx as H,
  Meta as M,
  SyntaxHighlighter2$1 as S,
  TooltipNote as T,
  WithToolTipState as W,
  supportedLanguages as a,
  WithTooltipPure$1 as b,
  createCopyToClipboardFunction as c,
  Canvas as d,
  Controls3 as e,
  Story2 as f,
  CodeOrSourceMdx as g,
  AnchorMdx as h,
  WithTooltip as i,
  MarkupIcon as j,
  getControlId as k,
  syntaxhighlighter_default as s
};
