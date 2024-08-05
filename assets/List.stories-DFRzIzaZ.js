var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
import { R as React } from "./index-C-_iGYWo.js";
import { c as classNames } from "./index-xoeSAV6i.js";
import { I as Icon } from "./Icon-uenOWmYY.js";
const List = ({
  className,
  wrapperClassName,
  tag = "div",
  noWrapper,
  testId,
  ...attributes
}) => {
  const Tag = tag;
  const wrapperClasses = classNames("it-list-wrapper", wrapperClassName);
  const classes = classNames(className, "it-list");
  if (noWrapper) {
    return /* @__PURE__ */ React.createElement("ul", { ...attributes, className: classes, "data-testid": testId });
  }
  return /* @__PURE__ */ React.createElement(Tag, { className: wrapperClasses, "data-testid": testId }, /* @__PURE__ */ React.createElement("ul", { ...attributes, className: classes }));
};
List.__docgenInfo = { "description": "", "methods": [], "displayName": "List", "props": { "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente lista del List" }, "wrapperClassName": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente wrapper del List" }, "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati per il wrapper della lista.\nNota: viene ignorato quando usato in lista annidate.", "defaultValue": { "value": "'div'", "computed": false } }, "noWrapper": { "required": false, "tsType": { "name": "boolean" }, "description": "Quando attivo rimuove il componente contenitore della ListList. Utile per alcuni tipi di liste annidate." }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const ListItem = ({
  className,
  active,
  avatar,
  icon,
  img,
  href,
  tag = "div",
  to,
  wrapperClassName,
  testId,
  children,
  ...attributes
}) => {
  let Tag = tag;
  const classes = classNames(
    className,
    { active },
    "list-item"
  ), classesItem = classNames(className, {
    "it-rounded-icon": icon,
    "avatar size-lg": avatar,
    "it-thumb": img
  }), leftItem = icon || avatar || img;
  if (href) {
    return /* @__PURE__ */ React.createElement("li", { className: wrapperClassName, "data-testid": testId }, /* @__PURE__ */ React.createElement(Tag, null, /* @__PURE__ */ React.createElement("a", { href: href || "#", ...attributes, className: classes }, children)));
  }
  return /* @__PURE__ */ React.createElement("li", { className: wrapperClassName, "data-testid": testId }, /* @__PURE__ */ React.createElement(
    Tag,
    {
      ...attributes,
      className: classes,
      href,
      to
    },
    leftItem && /* @__PURE__ */ React.createElement("div", { className: classesItem }, leftItem),
    /* @__PURE__ */ React.createElement("div", { className: "it-right-zone" }, children)
  ));
};
const MultipleAction = ({ children }) => {
  return /* @__PURE__ */ React.createElement("span", { className: "it-multiple" }, children);
};
ListItem.MultipleAction = MultipleAction;
ListItem.__docgenInfo = { "description": "", "methods": [{ "name": "MultipleAction", "docblock": null, "modifiers": ["static"], "params": [{ "name": "{ children }", "optional": false, "type": null }], "returns": null }], "displayName": "ListItem", "props": { "tag": { "defaultValue": { "value": "'div'", "computed": false }, "required": false } } };
const meta = {
  title: "Documentazione/Organizzare i contenuti/Liste",
  component: List
};
const ListaTemplate = {
  render: ({
    ...args
  }) => /* @__PURE__ */ React.createElement(List, null, /* @__PURE__ */ React.createElement(ListItem, {
    ...args
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text"
  }, "Testo")), /* @__PURE__ */ React.createElement(ListItem, {
    tag: "a",
    ...args
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text"
  }, "Link")), /* @__PURE__ */ React.createElement(ListItem, {
    active: true,
    tag: "a",
    ...args
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text"
  }, "Link attivo")))
};
const ListaSemplice = {
  ...ListaTemplate
};
const ListaAvatar = {
  ...ListaTemplate,
  args: {
    avatar: /* @__PURE__ */ React.createElement("img", {
      src: "https://randomuser.me/api/portraits/women/41.jpg",
      alt: "Anna Barbieri"
    })
  }
};
const ListaIcona = {
  ...ListaTemplate,
  args: {
    icon: /* @__PURE__ */ React.createElement(Icon, {
      icon: "it-folder"
    })
  }
};
const ListaImmagine = {
  ...ListaTemplate,
  args: {
    img: /* @__PURE__ */ React.createElement("img", {
      src: "https://placehold.jp/40x40.png",
      alt: "descrizione immagine"
    })
  }
};
const ListaFreccia = {
  render: () => /* @__PURE__ */ React.createElement(List, null, /* @__PURE__ */ React.createElement(ListItem, null, /* @__PURE__ */ React.createElement("span", {
    className: "text"
  }, "Testo"), /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-chevron-right"
  })), /* @__PURE__ */ React.createElement(ListItem, {
    tag: "a"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text"
  }, "Link"), /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-chevron-right"
  })), /* @__PURE__ */ React.createElement(ListItem, {
    active: true,
    tag: "a"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text"
  }, "Link attivo"), /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-chevron-right"
  })))
};
const ListaAzioniMultiple = {
  render: () => /* @__PURE__ */ React.createElement(List, null, /* @__PURE__ */ React.createElement(ListItem, null, /* @__PURE__ */ React.createElement("span", {
    className: "text"
  }, "Testo"), /* @__PURE__ */ React.createElement(ListItem.MultipleAction, null, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    "aria-label": "Testo - Azione "
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-code-circle"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    "aria-label": "Testo - Azione "
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-code-circle"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    "aria-label": "Testo - Azione "
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-code-circle"
  })))), /* @__PURE__ */ React.createElement(ListItem, null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text"
  }, "Link")), /* @__PURE__ */ React.createElement(ListItem.MultipleAction, null, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    "aria-label": "Testo - Azione "
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-code-circle"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    "aria-label": "Testo - Azione "
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-code-circle"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    "aria-label": "Testo - Azione "
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-code-circle"
  })))), /* @__PURE__ */ React.createElement(ListItem, {
    active: true
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text"
  }, "Link attivo")), /* @__PURE__ */ React.createElement(ListItem.MultipleAction, null, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    "aria-label": "Testo - Azione "
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-code-circle"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    "aria-label": "Testo - Azione "
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-code-circle"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    "aria-label": "Testo - Azione "
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-code-circle"
  }))))),
  parameters: {
    docs: {
      /**
       * Sostituisco nel sorgente MultipleAction con ListItem.MultipleAction
       * altrimenti non si capisce da dove si importa
       */
      source: {
        transform: (code) => code.replaceAll("MultipleAction", "ListItem.MultipleAction")
      }
    }
  }
};
const ListaMetadata = {
  render: ({
    ...args
  }) => /* @__PURE__ */ React.createElement(List, null, /* @__PURE__ */ React.createElement(ListItem, {
    ...args
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text"
  }, "Testo"), /* @__PURE__ */ React.createElement("span", {
    className: "metadata"
  }, "metadata testo")), /* @__PURE__ */ React.createElement(ListItem, {
    ...args
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text"
  }, "Testo 2"), /* @__PURE__ */ React.createElement("span", {
    className: "metadata"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "metadata link"))), /* @__PURE__ */ React.createElement(ListItem, {
    ...args
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text"
  }, "Link")), /* @__PURE__ */ React.createElement("span", {
    className: "metadata"
  }, "metadata testo")), /* @__PURE__ */ React.createElement(ListItem, {
    ...args
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text"
  }, "Link 2")), /* @__PURE__ */ React.createElement("span", {
    className: "metadata"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "metadata link"))), /* @__PURE__ */ React.createElement(ListItem, {
    active: true,
    tag: "a",
    ...args
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text"
  }, "Link attivo"), /* @__PURE__ */ React.createElement("span", {
    className: "metadata"
  }, "metadata testo")), /* @__PURE__ */ React.createElement(ListItem, {
    active: true,
    ...args
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text"
  }, "Link attivo")), /* @__PURE__ */ React.createElement("span", {
    className: "metadata"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "metadata link")))),
  args: {
    avatar: /* @__PURE__ */ React.createElement("img", {
      src: "https://randomuser.me/api/portraits/women/41.jpg",
      alt: "Anna Barbieri"
    })
  }
};
const ListaTestoAzioniMultipleMetadata = {
  render: () => /* @__PURE__ */ React.createElement(List, null, /* @__PURE__ */ React.createElement(ListItem, null, /* @__PURE__ */ React.createElement("span", {
    className: "text"
  }, "Testo", /* @__PURE__ */ React.createElement("em", null, "Lorem ipsum dolor sit amet.")), /* @__PURE__ */ React.createElement(ListItem.MultipleAction, null, /* @__PURE__ */ React.createElement("span", {
    className: "metadata"
  }, "metadata testo"), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    "aria-label": "Testo - Azione "
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-code-circle"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    "aria-label": "Testo - Azione "
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-code-circle"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    "aria-label": "Testo - Azione "
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-code-circle"
  })))), /* @__PURE__ */ React.createElement(ListItem, null, /* @__PURE__ */ React.createElement("span", {
    className: "text"
  }, "Testo 2", /* @__PURE__ */ React.createElement("em", null, "Lorem ipsum dolor sit amet.")), /* @__PURE__ */ React.createElement(ListItem.MultipleAction, null, /* @__PURE__ */ React.createElement("span", {
    className: "metadata"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "metadata link")), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    "aria-label": "Testo - Azione "
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-code-circle"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    "aria-label": "Testo - Azione "
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-code-circle"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    "aria-label": "Testo - Azione "
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-code-circle"
  })))), /* @__PURE__ */ React.createElement(ListItem, null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text"
  }, "Link", /* @__PURE__ */ React.createElement("em", null, "Lorem ipsum dolor sit amet."))), /* @__PURE__ */ React.createElement(ListItem.MultipleAction, null, /* @__PURE__ */ React.createElement("span", {
    className: "metadata"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "metadata link")), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    "aria-label": "Testo - Azione "
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-code-circle"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    "aria-label": "Testo - Azione "
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-code-circle"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    "aria-label": "Testo - Azione "
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-code-circle"
  })))), /* @__PURE__ */ React.createElement(ListItem, {
    active: true
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text"
  }, "Link attivo", /* @__PURE__ */ React.createElement("em", null, "Lorem ipsum dolor sit amet."))), /* @__PURE__ */ React.createElement(ListItem.MultipleAction, null, /* @__PURE__ */ React.createElement("span", {
    className: "metadata"
  }, "metadata testo"), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    "aria-label": "Testo - Azione "
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-code-circle"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    "aria-label": "Testo - Azione "
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-code-circle"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    "aria-label": "Testo - Azione "
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-code-circle"
  }))))),
  parameters: {
    docs: {
      /**
       * Sostituisco nel sorgente MultipleAction con ListItem.MultipleAction
       * altrimenti non si capisce da dove si importa
       */
      source: {
        transform: (code) => code.replaceAll("MultipleAction", "ListItem.MultipleAction")
      }
    }
  }
};
ListaSemplice.parameters = {
  ...ListaSemplice.parameters,
  docs: {
    ...(_a = ListaSemplice.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  ...ListaTemplate\n}",
      ...(_c = (_b = ListaSemplice.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
ListaAvatar.parameters = {
  ...ListaAvatar.parameters,
  docs: {
    ...(_d = ListaAvatar.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  ...ListaTemplate,\n  args: {\n    avatar: <img src="https://randomuser.me/api/portraits/women/41.jpg" alt="Anna Barbieri" />\n  }\n}',
      ...(_f = (_e = ListaAvatar.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
ListaIcona.parameters = {
  ...ListaIcona.parameters,
  docs: {
    ...(_g = ListaIcona.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '{\n  ...ListaTemplate,\n  args: {\n    icon: <Icon icon="it-folder" />\n  }\n}',
      ...(_i = (_h = ListaIcona.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
ListaImmagine.parameters = {
  ...ListaImmagine.parameters,
  docs: {
    ...(_j = ListaImmagine.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: '{\n  ...ListaTemplate,\n  args: {\n    img: <img src="https://placehold.jp/40x40.png" alt="descrizione immagine" />\n  }\n}',
      ...(_l = (_k = ListaImmagine.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
ListaFreccia.parameters = {
  ...ListaFreccia.parameters,
  docs: {
    ...(_m = ListaFreccia.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: `{
  render: () => <List>
      <ListItem>
        <span className="text">Testo</span>
        <Icon icon="it-chevron-right" />
      </ListItem>
      <ListItem tag={'a'}>
        <span className="text">Link</span>
        <Icon icon="it-chevron-right" />
      </ListItem>
      <ListItem active tag={'a'}>
        <span className="text">Link attivo</span>
        <Icon icon="it-chevron-right" />
      </ListItem>
    </List>
}`,
      ...(_o = (_n = ListaFreccia.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
ListaAzioniMultiple.parameters = {
  ...ListaAzioniMultiple.parameters,
  docs: {
    ...(_p = ListaAzioniMultiple.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: `{
  render: () => <List>
      <ListItem>
        <span className="text">Testo</span>
        <ListItem.MultipleAction>
          <a href="#" aria-label="Testo - Azione ">
            <Icon icon="it-code-circle" />
          </a>
          <a href="#" aria-label="Testo - Azione ">
            <Icon icon="it-code-circle" />
          </a>
          <a href="#" aria-label="Testo - Azione ">
            <Icon icon="it-code-circle" />
          </a>
        </ListItem.MultipleAction>
      </ListItem>
      <ListItem>
        <a href="#"><span className="text">Link</span></a>
        <ListItem.MultipleAction>
          <a href="#" aria-label="Testo - Azione ">
            <Icon icon="it-code-circle" />
          </a>
          <a href="#" aria-label="Testo - Azione ">
            <Icon icon="it-code-circle" />
          </a>
          <a href="#" aria-label="Testo - Azione ">
            <Icon icon="it-code-circle" />
          </a>
        </ListItem.MultipleAction>
      </ListItem>
      <ListItem active>
        <a href="#"><span className="text">Link attivo</span></a>
        <ListItem.MultipleAction>
          <a href="#" aria-label="Testo - Azione ">
            <Icon icon="it-code-circle" />
          </a>
          <a href="#" aria-label="Testo - Azione ">
            <Icon icon="it-code-circle" />
          </a>
          <a href="#" aria-label="Testo - Azione ">
            <Icon icon="it-code-circle" />
          </a>
        </ListItem.MultipleAction>
      </ListItem>
    </List>,
  parameters: {
    docs: {
      /**
       * Sostituisco nel sorgente MultipleAction con ListItem.MultipleAction
       * altrimenti non si capisce da dove si importa
       */
      source: {
        transform: (code: string) => code.replaceAll('MultipleAction', 'ListItem.MultipleAction')
      }
    }
  }
}`,
      ...(_r = (_q = ListaAzioniMultiple.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
ListaMetadata.parameters = {
  ...ListaMetadata.parameters,
  docs: {
    ...(_s = ListaMetadata.parameters) == null ? void 0 : _s.docs,
    source: {
      originalSource: `{
  render: ({
    ...args
  }) => <List>
      <ListItem {...args}>
        <span className="text">Testo</span>
        <span className="metadata">metadata testo</span>
      </ListItem>
      <ListItem {...args}>
        <span className="text">Testo 2</span>
        <span className="metadata"><a href="#">metadata link</a></span>
      </ListItem>
      <ListItem {...args}>
        <a href="#"><span className="text">Link</span></a>
        <span className="metadata">metadata testo</span>
      </ListItem>
      <ListItem {...args}>
        <a href="#"><span className="text">Link 2</span></a>
        <span className="metadata"><a href="#">metadata link</a></span>
      </ListItem>
      <ListItem active tag={'a'} {...args}>
        <span className="text">Link attivo</span>
        <span className="metadata">metadata testo</span>
      </ListItem>
      <ListItem active {...args}>
        <a href="#"><span className="text">Link attivo</span></a>
        <span className="metadata"><a href="#">metadata link</a></span>
      </ListItem>
    </List>,
  args: {
    avatar: <img src="https://randomuser.me/api/portraits/women/41.jpg" alt="Anna Barbieri" />
  }
}`,
      ...(_u = (_t = ListaMetadata.parameters) == null ? void 0 : _t.docs) == null ? void 0 : _u.source
    }
  }
};
ListaTestoAzioniMultipleMetadata.parameters = {
  ...ListaTestoAzioniMultipleMetadata.parameters,
  docs: {
    ...(_v = ListaTestoAzioniMultipleMetadata.parameters) == null ? void 0 : _v.docs,
    source: {
      originalSource: `{
  render: () => <List>
      <ListItem>
        <span className="text">Testo<em>Lorem ipsum dolor sit amet.</em></span>
        <ListItem.MultipleAction>
          <span className="metadata">metadata testo</span>
          <a href="#" aria-label="Testo - Azione ">
            <Icon icon="it-code-circle" />
          </a>
          <a href="#" aria-label="Testo - Azione ">
            <Icon icon="it-code-circle" />
          </a>
          <a href="#" aria-label="Testo - Azione ">
            <Icon icon="it-code-circle" />
          </a>
        </ListItem.MultipleAction>
      </ListItem>
      <ListItem>
        <span className="text">Testo 2<em>Lorem ipsum dolor sit amet.</em></span>
        <ListItem.MultipleAction>
          <span className="metadata"><a href="#">metadata link</a></span>
          <a href="#" aria-label="Testo - Azione ">
            <Icon icon="it-code-circle" />
          </a>
          <a href="#" aria-label="Testo - Azione ">
            <Icon icon="it-code-circle" />
          </a>
          <a href="#" aria-label="Testo - Azione ">
            <Icon icon="it-code-circle" />
          </a>
        </ListItem.MultipleAction>
      </ListItem>
      <ListItem>
        <a href="#"><span className="text">Link<em>Lorem ipsum dolor sit amet.</em></span></a>
        <ListItem.MultipleAction>
          <span className="metadata"><a href="#">metadata link</a></span>
          <a href="#" aria-label="Testo - Azione ">
            <Icon icon="it-code-circle" />
          </a>
          <a href="#" aria-label="Testo - Azione ">
            <Icon icon="it-code-circle" />
          </a>
          <a href="#" aria-label="Testo - Azione ">
            <Icon icon="it-code-circle" />
          </a>
        </ListItem.MultipleAction>
      </ListItem>
      <ListItem active>
        <a href="#"><span className="text">Link attivo<em>Lorem ipsum dolor sit amet.</em></span></a>
        <ListItem.MultipleAction>
          <span className="metadata">metadata testo</span>
          <a href="#" aria-label="Testo - Azione ">
            <Icon icon="it-code-circle" />
          </a>
          <a href="#" aria-label="Testo - Azione ">
            <Icon icon="it-code-circle" />
          </a>
          <a href="#" aria-label="Testo - Azione ">
            <Icon icon="it-code-circle" />
          </a>
        </ListItem.MultipleAction>
      </ListItem>
    </List>,
  parameters: {
    docs: {
      /**
       * Sostituisco nel sorgente MultipleAction con ListItem.MultipleAction
       * altrimenti non si capisce da dove si importa
       */
      source: {
        transform: (code: string) => code.replaceAll('MultipleAction', 'ListItem.MultipleAction')
      }
    }
  }
}`,
      ...(_x = (_w = ListaTestoAzioniMultipleMetadata.parameters) == null ? void 0 : _w.docs) == null ? void 0 : _x.source
    }
  }
};
const __namedExportsOrder = ["ListaSemplice", "ListaAvatar", "ListaIcona", "ListaImmagine", "ListaFreccia", "ListaAzioniMultiple", "ListaMetadata", "ListaTestoAzioniMultipleMetadata"];
const ListStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ListaAvatar,
  ListaAzioniMultiple,
  ListaFreccia,
  ListaIcona,
  ListaImmagine,
  ListaMetadata,
  ListaSemplice,
  ListaTestoAzioniMultipleMetadata,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  ListStories as L,
  ListaSemplice as a,
  ListaAvatar as b,
  ListaIcona as c,
  ListaImmagine as d,
  ListaFreccia as e,
  ListaAzioniMultiple as f,
  ListaMetadata as g,
  ListaTestoAzioniMultipleMetadata as h,
  List as i,
  ListItem as j
};
