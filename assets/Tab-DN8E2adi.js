import { j as jsxRuntimeExports } from "./jsx-runtime-BKjOVojP.js";
import { useMDXComponents } from "./index-BDy3TOcs.js";
import { ae as Meta, af as Canvas } from "./index-HH-hm5IQ.js";
import "./track-focus-DbJ2CO43.js";
import { T as TabStories, E as Esempi, a as Testo, I as Icona, b as TestoIcona, B as Bottone, V as Verticale } from "./Tab.stories-F-eFM2eb.js";
import "./index-BehpJNG5.js";
import "./_commonjsHelpers-DWwsNxpa.js";
import "./iframe-DfSXz_Zq.js";
import "../sb-preview/runtime.js";
import "./index-D7280_ap.js";
import "./index-DmVNLg0t.js";
import "./index-DJdTjTnu.js";
import "./index-dukjSSyv.js";
import "./index-BdOSk9or.js";
import "./Container-WfghrAt_.js";
import "./utils-CruPskUV.js";
import "./index-D3ELxcOV.js";
import "./Col-DlU8lCnt.js";
import "./NavLink-Doet5_NL.js";
import "./Icon-DyuudwGq.js";
import "./Nav-HNT4a-9K.js";
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    p: "p",
    pre: "pre",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: TabStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "tab",
      children: "Tab"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "esempi",
      children: "Esempi"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["L'interfaccia a tab (o schede) di Bootstrap si basa sull'utilizzo del layout di navigazione ", jsxRuntimeExports.jsx(_components.code, {
        children: "Nav"
      }), ", con l'aggiunta della proprietà ", jsxRuntimeExports.jsx(_components.code, {
        children: "tabs"
      }), ". Per ottenere una versione con sfondo scuro e testo chiaro bisognerà aggiungere un'ulteriore classe: ", jsxRuntimeExports.jsx(_components.code, {
        children: ".nav-dark"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Esempi
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "con-testo",
      children: "Con Testo"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Gli esempi sopra riportati non hanno molto senso senza un contenuto che cambi al di sotto di essi; per rendere tali interfacce navigabili è necessario collegare Tab e Pannelli collegando il tag ", jsxRuntimeExports.jsx(_components.code, {
        children: "<a>"
      }), " dei primi all’attributo id dei secondi, come mostrato di seguito:"]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Testo
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "source",
      children: "Source"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [activeTab, toggleTab] = useState('1');\r\nreturn (\r\n  <div>\r\n    <Nav tabs className='mb-3'>\r\n      <NavItem>\r\n        <NavLink\r\n          href='#'\r\n          active={activeTab === '1'}\r\n          onClick={() => {\r\n            if (activeTab !== '1') {\r\n              toggleTab('1');\r\n            }\r\n          }}\r\n        >\r\n          <span>Tab titolo 1</span>\r\n        </NavLink>\r\n      </NavItem>\r\n      <NavItem>\r\n        <NavLink\r\n          href='#'\r\n          active={activeTab === '2'}\r\n          onClick={() => {\r\n            if (activeTab !== '2') {\r\n              toggleTab('2');\r\n            }\r\n          }}\r\n        >\r\n          <span>Tab titolo 2</span>\r\n        </NavLink>\r\n      </NavItem>\r\n      <NavItem>\r\n        <NavLink\r\n          href='#'\r\n          active={activeTab === '3'}\r\n          onClick={() => {\r\n            if (activeTab !== '3') {\r\n              toggleTab('3');\r\n            }\r\n          }}\r\n        >\r\n          <span>Tab titolo 3</span>\r\n        </NavLink>\r\n      </NavItem>\r\n    </Nav>\r\n\r\n    <TabContent activeTab={activeTab}>\r\n      <TabPane tabId='1' className='p-3'>\r\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\r\n        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\r\n        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\r\n        laborum.\r\n      </TabPane>\r\n      <TabPane tabId='2' className='p-3'>\r\n        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\r\n        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\r\n        pariatur.\r\n      </TabPane>\r\n      <TabPane tabId='3' className='p-3'>\r\n        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis\r\n        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\r\n        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum\r\n        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n      </TabPane>\r\n    </TabContent>\r\n  </div>\r\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "icona",
      children: "Icona"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Oppure al posto della label usare una icona."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Icona
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "source-1",
      children: "Source"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [activeTab, toggleTab] = useState('1');\r\nreturn (\r\n  <div>\r\n    <Nav tabs className='mb-3'>\r\n      <NavItem>\r\n        <NavLink\r\n          href='#'\r\n          active={activeTab === '1'}\r\n          onClick={() => {\r\n            if (activeTab !== '1') {\r\n              toggleTab('1');\r\n            }\r\n          }}\r\n        >\r\n          <span>\r\n            <Icon color='primary' icon='it-link' aria-hidden />\r\n            <i className='it-ico-lg it-file d-block text-center' aria-label='Tab titolo 1' />\r\n          </span>\r\n        </NavLink>\r\n      </NavItem>\r\n      <NavItem>\r\n        <NavLink\r\n          href='#'\r\n          active={activeTab === '2'}\r\n          onClick={() => {\r\n            if (activeTab !== '2') {\r\n              toggleTab('2');\r\n            }\r\n          }}\r\n        >\r\n          <span>\r\n            <Icon color='primary' icon='it-calendar' aria-hidden />\r\n            <i className='it-ico-lg it-calendar d-block text-center' aria-label='Tab titolo 2' />\r\n          </span>\r\n        </NavLink>\r\n      </NavItem>\r\n      <NavItem>\r\n        <NavLink\r\n          href='#'\r\n          active={activeTab === '3'}\r\n          onClick={() => {\r\n            if (activeTab !== '3') {\r\n              toggleTab('3');\r\n            }\r\n          }}\r\n        >\r\n          <span>\r\n            <Icon color='primary' icon='it-comment' aria-hidden />\r\n            <i className='it-ico-lg it-comment d-block text-center' aria-label='Tab titolo 3' />\r\n          </span>\r\n        </NavLink>\r\n      </NavItem>\r\n    </Nav>\r\n\r\n    <TabContent activeTab={activeTab}>\r\n      <TabPane tabId='1' className='p-3'>\r\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\r\n        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\r\n        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\r\n        laborum.\r\n      </TabPane>\r\n      <TabPane tabId='2' className='p-3'>\r\n        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\r\n        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\r\n        pariatur.\r\n      </TabPane>\r\n      <TabPane tabId='3' className='p-3'>\r\n        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis\r\n        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\r\n        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum\r\n        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n      </TabPane>\r\n    </TabContent>\r\n  </div>\r\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "testo-e-icona",
      children: "Testo e icona"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Oppure con label e icona insieme."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: TestoIcona
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "source-2",
      children: "Source"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [activeTab, toggleTab] = useState('1');\r\nreturn (\r\n  <div>\r\n    <Nav tabs className='mb-3'>\r\n      <NavItem>\r\n        <NavLink\r\n          href='#'\r\n          active={activeTab === '1'}\r\n          onClick={() => {\r\n            if (activeTab !== '1') {\r\n              toggleTab('1');\r\n            }\r\n          }}\r\n        >\r\n          <span>\r\n            <Icon color='primary' icon='it-link' aria-hidden />\r\n            <i className='it-ico-lg it-file d-block text-center' aria-label='Tab titolo 1' />\r\n          </span>\r\n          <span>Tab titolo 1</span>\r\n        </NavLink>\r\n      </NavItem>\r\n      <NavItem>\r\n        <NavLink\r\n          href='#'\r\n          active={activeTab === '2'}\r\n          onClick={() => {\r\n            if (activeTab !== '2') {\r\n              toggleTab('2');\r\n            }\r\n          }}\r\n        >\r\n          <span>\r\n            <Icon color='primary' icon='it-calendar' aria-hidden />\r\n            <i className='it-ico-lg it-calendar d-block text-center' aria-label='Tab titolo 2' />\r\n          </span>\r\n          <span>Tab titolo 2</span>\r\n        </NavLink>\r\n      </NavItem>\r\n      <NavItem>\r\n        <NavLink\r\n          href='#'\r\n          active={activeTab === '3'}\r\n          onClick={() => {\r\n            if (activeTab !== '3') {\r\n              toggleTab('3');\r\n            }\r\n          }}\r\n        >\r\n          <span>\r\n            <Icon color='primary' icon='it-comment' aria-hidden />\r\n            <i className='it-ico-lg it-comment d-block text-center' aria-label='Tab titolo 3' />\r\n          </span>\r\n          <span>Tab titolo 3</span>\r\n        </NavLink>\r\n      </NavItem>\r\n    </Nav>\r\n\r\n    <TabContent activeTab={activeTab}>\r\n      <TabPane tabId='1' className='p-3'>\r\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\r\n        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\r\n        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\r\n        laborum.\r\n      </TabPane>\r\n      <TabPane tabId='2' className='p-3'>\r\n        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\r\n        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\r\n        pariatur.\r\n      </TabPane>\r\n      <TabPane tabId='3' className='p-3'>\r\n        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis\r\n        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\r\n        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum\r\n        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n      </TabPane>\r\n    </TabContent>\r\n  </div>\r\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "bottone",
      children: "Bottone"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["I tab possono ereditare dalla navigazione l'utilizzo della proprietà ", jsxRuntimeExports.jsx(_components.code, {
        children: "pills"
      }), " per generare tab a bottoni."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Bottone
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "source-3",
      children: "Source"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [activeTab, toggleTab] = useState('1');\r\nreturn (\r\n  <Container className='m-3'>\r\n    <Row>\r\n      <Col sm={'12'}>\r\n        <Nav pills className='mb-3'>\r\n          <NavItem>\r\n            <NavLink\r\n              href='#'\r\n              active={activeTab === '1'}\r\n              onClick={(e) => {\r\n                e.preventDefault();\r\n                toggleTab('1');\r\n              }}\r\n            >\r\n              Tab 1\r\n            </NavLink>\r\n          </NavItem>\r\n          <NavItem>\r\n            <NavLink\r\n              href='#'\r\n              active={activeTab === '2'}\r\n              onClick={(e) => {\r\n                e.preventDefault();\r\n                toggleTab('2');\r\n              }}\r\n            >\r\n              Tab 2\r\n            </NavLink>\r\n          </NavItem>\r\n          <NavItem>\r\n            <NavLink\r\n              href='#'\r\n              active={activeTab === '3'}\r\n              onClick={(e) => {\r\n                e.preventDefault();\r\n                toggleTab('3');\r\n              }}\r\n            >\r\n              Tab 3\r\n            </NavLink>\r\n          </NavItem>\r\n        </Nav>\r\n      </Col>\r\n      <Col sm={'12'}>\r\n        <TabContent activeTab={activeTab}>\r\n          <TabPane tabId='1' className='p-3'>\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\r\n            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex\r\n            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat\r\n            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit\r\n            anim id est laborum.\r\n          </TabPane>\r\n          <TabPane tabId='2' className='p-3'>\r\n            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\r\n            laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\r\n            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\r\n            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu\r\n            fugiat nulla pariatur.\r\n          </TabPane>\r\n          <TabPane tabId='3' className='p-3'>\r\n            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\r\n            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\n            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\r\n            laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\r\n            et dolore magna aliqua.\r\n          </TabPane>\r\n        </TabContent>\r\n      </Col>\r\n    </Row>\r\n  </Container>\r\n);\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "allineamento-verticale",
      children: "Allineamento verticale"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Verticale
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "source-4",
      children: "Source"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: "const [activeTab, toggleTab] = useState('1');\r\nreturn (\r\n  <Container className='m-3'>\r\n    <Row>\r\n      <Col sm={'3'}>\r\n        <Nav pills className='mb-3' vertical>\r\n          <NavItem>\r\n            <NavLink\r\n              href='#'\r\n              active={activeTab === '1'}\r\n              onClick={(e) => {\r\n                e.preventDefault();\r\n                toggleTab('1');\r\n              }}\r\n            >\r\n              Tab 1\r\n            </NavLink>\r\n          </NavItem>\r\n          <NavItem>\r\n            <NavLink\r\n              href='#'\r\n              active={activeTab === '2'}\r\n              onClick={(e) => {\r\n                e.preventDefault();\r\n                toggleTab('2');\r\n              }}\r\n            >\r\n              Tab 2\r\n            </NavLink>\r\n          </NavItem>\r\n          <NavItem>\r\n            <NavLink\r\n              href='#'\r\n              active={activeTab === '3'}\r\n              onClick={(e) => {\r\n                e.preventDefault();\r\n                toggleTab('3');\r\n              }}\r\n            >\r\n              Tab 3\r\n            </NavLink>\r\n          </NavItem>\r\n        </Nav>\r\n      </Col>\r\n      <Col sm={'9'}>\r\n        <TabContent activeTab={activeTab}>\r\n          <TabPane tabId='1' className='p-3'>\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\r\n            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex\r\n            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat\r\n            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit\r\n            anim id est laborum.\r\n          </TabPane>\r\n          <TabPane tabId='2' className='p-3'>\r\n            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\r\n            laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\r\n            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\r\n            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu\r\n            fugiat nulla pariatur.\r\n          </TabPane>\r\n          <TabPane tabId='3' className='p-3'>\r\n            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\r\n            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\n            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\r\n            laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\r\n            et dolore magna aliqua.\r\n          </TabPane>\r\n        </TabContent>\r\n      </Col>\r\n    </Row>\r\n  </Container>\r\n);\n"
      })
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsxRuntimeExports.jsx(MDXLayout, {
    ...props,
    children: jsxRuntimeExports.jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
export {
  MDXContent as default
};
