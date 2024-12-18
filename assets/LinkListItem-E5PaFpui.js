import { e } from "./index-BehpJNG5.js";
import { c as classNames } from "./index-D3ELxcOV.js";
const LinkList = ({
  className,
  wrapperClassName,
  tag = "div",
  multiline,
  header,
  sublist,
  avatar,
  noWrapper,
  testId,
  ...attributes
}) => {
  const Tag = tag;
  const wrapperClasses = classNames("link-list-wrapper", wrapperClassName, {
    multiline
  });
  const classes = classNames(className, {
    "link-list": !sublist,
    "link-sublist": sublist,
    "avatar-group": avatar
  });
  if (noWrapper) {
    return /* @__PURE__ */ e.createElement("ul", { ...attributes, className: classes, "data-testid": testId });
  }
  if (sublist) {
    return /* @__PURE__ */ e.createElement(e.Fragment, null, header, /* @__PURE__ */ e.createElement("ul", { ...attributes, className: classes }));
  }
  return /* @__PURE__ */ e.createElement(Tag, { className: wrapperClasses, "data-testid": testId }, header, /* @__PURE__ */ e.createElement("ul", { ...attributes, className: classes }));
};
LinkList.__docgenInfo = { "description": "", "methods": [], "displayName": "LinkList", "props": { "header": { "required": false, "tsType": { "name": "ReactNode" }, "description": "Da utilizzare in caso di titolo principale della lista. Passare una componente React da mostrare come titolo" }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente lista del LinkList" }, "wrapperClassName": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente wrapper del LinkList" }, "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati per il wrapper della lista.\nNota: viene ignorato quando usato in lista annidate.", "defaultValue": { "value": "'div'", "computed": false } }, "multiline": { "required": false, "tsType": { "name": "boolean" }, "description": "Quando abilitato gestisce una lista in cui ciascun elemento è composto da più componenti/elementi." }, "sublist": { "required": false, "tsType": { "name": "boolean" }, "description": "Da utilizzare per una lista annidata" }, "avatar": { "required": false, "tsType": { "name": "boolean" }, "description": "Da utilizzare per una lista di avatar" }, "noWrapper": { "required": false, "tsType": { "name": "boolean" }, "description": "Quando attivo rimuove il componente contenitore della ListList. Utile per alcuni tipi di liste annidate." }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const handleDisabledOnClick = (e2) => {
  e2.preventDefault();
};
const LinkListItem = ({
  className,
  active,
  disabled,
  header,
  divider,
  bold,
  large,
  href,
  tag = "a",
  wrapperClassName,
  testId,
  children,
  inDropdown,
  ...attributes
}) => {
  let Tag = tag;
  const classes = classNames(
    className,
    {
      active,
      disabled,
      header,
      divider,
      large,
      medium: bold,
      "dropdown-item": inDropdown
    },
    "list-item"
  );
  const handlers = {};
  if (disabled) {
    handlers.onClick = handleDisabledOnClick;
  }
  if (header) {
    Tag = "h3";
  } else if (divider) {
    Tag = "span";
  }
  if (inDropdown) {
    attributes["role"] = "menuitem";
    attributes["tabIndex"] = 0;
  }
  if (header && href) {
    return /* @__PURE__ */ e.createElement("li", { className: wrapperClassName, "data-testid": testId }, /* @__PURE__ */ e.createElement(Tag, null, /* @__PURE__ */ e.createElement("a", { href: href || "#", ...attributes, className: classes, ...handlers }, children)));
  }
  return /* @__PURE__ */ e.createElement("li", { className: wrapperClassName, "data-testid": testId }, /* @__PURE__ */ e.createElement(
    Tag,
    {
      role: attributes.onClick ? "button" : void 0,
      ...attributes,
      className: classes,
      href,
      ...handlers
    },
    children
  ));
};
const LinkListTitleIconWrapper = ({ children }) => {
  return /* @__PURE__ */ e.createElement("span", { className: "list-item-title-icon-wrapper" }, children);
};
LinkListItem.TitleIconWrapper = LinkListTitleIconWrapper;
LinkListItem.__docgenInfo = { "description": "", "methods": [{ "name": "TitleIconWrapper", "docblock": null, "modifiers": ["static"], "params": [{ "name": "{ children }", "optional": false, "type": null }], "returns": null }], "displayName": "LinkListItem", "props": { "tag": { "defaultValue": { "value": "'a'", "computed": false }, "required": false } } };
export {
  LinkList as L,
  LinkListItem as a
};
